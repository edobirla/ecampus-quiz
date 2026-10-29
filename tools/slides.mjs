// Carica su Firebase (Realtime Database, slides/<materia>/<chiave> = PDF in base64) le dispense collegate alle lezioni
// (campo `sl` di app/data/<materia>/subject.json, quindi dopo `node build.mjs`). Carica solo quelle che mancano.
// Spazio: il piano gratuito ha 1 GB. Se il totale supererebbe LIMIT, prima toglie i PDF delle materie che TUTTI gli
// account abilitati hanno superato (passed/<uid>/<materia>, scritto dall'app quando l'esito è "Superato").
// Uso: cd tools && node slides.mjs   (chiede username e password di un account con allowed/<uid> = "admin")
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { slideKey } from "./build.mjs";

const KEY = "AIzaSyDqK8MTjJNOxpJfIrrhci6a3SvDTdnhYI0";
const DB = "https://e-campus-quz-default-rtdb.europe-west1.firebasedatabase.app";
const LIMIT = 900e6; // ponytail: conta solo i PDF (i dati degli utenti pesano pochi MB); margine di 100 MB sul giga
const ROOT = path.resolve(import.meta.dirname, "..");
const SUBJECTS = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "subjects.json"), "utf8"));

function ask(q, hidden) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  if (hidden) rl._writeToOutput = (s) => rl.output.write(s.startsWith(q) ? s : "");
  return new Promise((r) => rl.question(q, (a) => { rl.close(); if (hidden) console.log(); r(a.trim()); }));
}
let auth;
async function db(p, method = "GET", body) {
  const r = await fetch(`${DB}/${p}.json?auth=${auth}${method === "GET" && p.split("/").length < 3 ? "&shallow=true" : ""}`,
    { method, body: body === undefined ? undefined : JSON.stringify(body) });
  if (!r.ok) throw new Error(`${method} ${p}: ${r.status} ${await r.text()}`);
  return r.json();
}

const user = await ask("Username: "), pass = await ask("Password: ", true);
const email = user.includes("@") ? user : `${user.toLowerCase()}@ecq.app`;
const login = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`, {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password: pass, returnSecureToken: true }),
}).then((r) => r.json());
if (!login.idToken) throw new Error(`Accesso non riuscito: ${login.error?.message}`);
auth = login.idToken;
if ((await db(`allowed/${login.localId}`)) !== "admin") throw new Error(`L'account non è admin: in Firebase serve allowed/${login.localId} = "admin"`);

const allowed = Object.keys((await db("allowed")) || {});
const passed = (await fetch(`${DB}/passed.json?auth=${auth}`).then((r) => r.json())) || {};
const doneByAll = (id) => allowed.length > 0 && allowed.every((u) => passed[u]?.[id]);
const sizes = (await fetch(`${DB}/slidesSize.json?auth=${auth}`).then((r) => r.json())) || {};

// cosa manca
const todo = [];
for (const S of SUBJECTS) {
  const dir = S.slidesDir && path.join(ROOT, S.slidesDir), data = path.join(ROOT, "app/data", S.id, "subject.json");
  if (!dir || !fs.existsSync(dir) || !fs.existsSync(data)) continue;
  if (doneByAll(S.id)) { console.log(`${S.id}: superata da tutti, salto`); continue; }
  const want = new Set(JSON.parse(fs.readFileSync(data, "utf8")).lessons.flatMap((L) => (L.sl || []).map((x) => x.k)));
  const have = new Set(Object.keys((await db(`slides/${S.id}`)) || {}));
  for (const f of fs.readdirSync(dir).filter((f) => /\.pdf$/i.test(f))) {
    const k = slideKey(f);
    if (want.has(k) && !have.has(k)) todo.push({ id: S.id, k, file: path.join(dir, f), bytes: Math.ceil(fs.statSync(path.join(dir, f)).size / 3) * 4 });
  }
}
const need = todo.reduce((a, t) => a + t.bytes, 0);
const used = () => Object.values(sizes).reduce((a, b) => a + b, 0);
console.log(`Da caricare: ${todo.length} PDF, ${(need / 1e6).toFixed(0)} MB. Già su Firebase: ${(used() / 1e6).toFixed(0)} MB.`);

// spazio: via le materie superate da tutti, solo se serve
for (const id of Object.keys(sizes)) {
  if (used() + need <= LIMIT) break;
  if (!doneByAll(id)) continue;
  await db(`slides/${id}`, "DELETE"); await db(`slidesSize/${id}`, "DELETE");
  console.log(`Tolti i PDF di ${id} (${(sizes[id] / 1e6).toFixed(0)} MB): superata da tutti`);
  delete sizes[id];
}
if (used() + need > LIMIT) throw new Error(`Spazio insufficiente: ${((used() + need) / 1e6).toFixed(0)} MB su ${LIMIT / 1e6}. Nessuna altra materia superata da tutti.`);

for (const t of todo) {
  await db(`slides/${t.id}/${t.k}`, "PUT", fs.readFileSync(t.file).toString("base64"));
  sizes[t.id] = (sizes[t.id] || 0) + t.bytes;
  await db(`slidesSize/${t.id}`, "PUT", sizes[t.id]);
  console.log(`  ${t.id}/${t.k} (${(t.bytes / 1e6).toFixed(1)} MB)`);
}
console.log(`Fatto. Totale PDF su Firebase: ${(used() / 1e6).toFixed(0)} MB.`);
