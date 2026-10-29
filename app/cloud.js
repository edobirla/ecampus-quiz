// Account e sincronizzazione con Firebase (Authentication email/password + Realtime Database), via REST: nessuna libreria,
// funziona con il service worker e offline (senza rete l'app usa i dati locali e riprova alla prossima occasione).
// "Username" = parte prima di @ecq.app dell'email dell'account; chi ha un'email vera può accedere anche con quella.
const KEY = "AIzaSyDqK8MTjJNOxpJfIrrhci6a3SvDTdnhYI0";
const DB = "https://e-campus-quz-default-rtdb.europe-west1.firebasedatabase.app";
const DOMAIN = "@ecq.app";
const AUTH_KEY = "ecq:auth";

const ERR = {
  INVALID_LOGIN_CREDENTIALS: "Utente o password sbagliati", INVALID_PASSWORD: "Password sbagliata", EMAIL_NOT_FOUND: "Utente non trovato",
  EMAIL_EXISTS: "Questo username è già in uso", WEAK_PASSWORD: "Password troppo corta (minimo 6 caratteri)", INVALID_EMAIL: "Username non valido",
  TOO_MANY_ATTEMPTS_TRY_LATER: "Troppi tentativi: riprova tra qualche minuto", USER_DISABLED: "Account disattivato", OPERATION_NOT_ALLOWED: "Accesso con email e password non attivo su Firebase",
};
const fail = (m) => Object.assign(new Error(m), { friendly: true });
async function call(url, body) {
  let r;
  try { r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }); }
  catch { throw fail("Nessuna connessione: riprova quando sei online"); }
  const j = await r.json();
  if (!r.ok) { const c = (j.error?.message || "").split(" ")[0]; throw fail(ERR[c] || `Errore: ${c || r.status}`); }
  return j;
}
const read = () => { try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch { return null; } };
const write = (a) => localStorage.setItem(AUTH_KEY, JSON.stringify(a));
const fromToken = (j) => ({ uid: j.localId || j.user_id, email: j.email || read()?.email, refresh: j.refreshToken || j.refresh_token, id: j.idToken || j.id_token, exp: Date.now() + (+j.expiresIn || +j.expires_in || 3600) * 1000 - 60000 });

export const toEmail = (u) => { u = u.trim().toLowerCase(); return u.includes("@") ? u : u + DOMAIN; };
export const nameOf = (email) => (email?.endsWith(DOMAIN) ? email.slice(0, -DOMAIN.length) : email || "");
export const current = () => read();
export const validUsername = (u) => u.includes("@") || /^[a-z0-9._-]{3,30}$/i.test(u.trim());

export async function login(user, password) {
  const j = await call(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`, { email: toEmail(user), password, returnSecureToken: true });
  const a = fromToken(j); write(a); return a;
}
export const logout = () => localStorage.removeItem(AUTH_KEY);

async function token() {
  let a = read();
  if (!a) throw fail("Non hai fatto l'accesso");
  if (Date.now() > a.exp) {
    const j = await call(`https://securetoken.googleapis.com/v1/token?key=${KEY}`, { grant_type: "refresh_token", refresh_token: a.refresh });
    a = { ...fromToken(j), email: a.email }; write(a);
  }
  return a;
}
// cambio di username (= email) o password: richiede la password attuale
async function update(current, fields) {
  const a = read();
  const s = await call(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`, { email: a.email, password: current, returnSecureToken: true });
  const j = await call(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${KEY}`, { idToken: s.idToken, returnSecureToken: true, ...fields });
  const n = fromToken({ ...s, ...j }); n.email = fields.email || a.email; write(n); return n;
}
export const changeUsername = (current, user) => update(current, { email: toEmail(user) });
export const changePassword = (current, password) => update(current, { password });

// dati dell'utente (un solo documento JSON: lo stesso del file di backup)
export async function pull() {
  const a = await token();
  let r; try { r = await fetch(`${DB}/users/${a.uid}.json?auth=${a.id}`); } catch { throw fail("Nessuna connessione"); }
  if (!r.ok) throw fail("Sincronizzazione non riuscita (controlla le regole del database)");
  return r.json();
}
export async function push(data) {
  const a = await token();
  let r; try { r = await fetch(`${DB}/users/${a.uid}.json?auth=${a.id}`, { method: "PUT", body: JSON.stringify(data) }); } catch { throw fail("Nessuna connessione"); }
  if (!r.ok) throw fail("Sincronizzazione non riuscita (controlla le regole del database)");
}

// materie superate (esito "Superato"): servono a slides.mjs per togliere i PDF dei corsi finiti da tutti quando lo spazio scarseggia
export async function putPassed(ids) {
  const a = await token();
  await fetch(`${DB}/passed/${a.uid}.json?auth=${a.id}`, { method: "PUT", body: JSON.stringify(Object.fromEntries(ids.map((i) => [i, true]))) });
}

// dispense in PDF: slides/<materia>/<chiave> = PDF in base64, leggibili solo dagli account abilitati (regole del database).
// Una volta aperta resta in cache sul dispositivo, quindi funziona anche offline.
const SLIDES_CACHE = "ecq-slides";
export async function slide(subj, key) {
  const url = `${DB}/slides/${subj}/${key}.json`;
  const cache = await caches.open(SLIDES_CACHE).catch(() => null);
  const hit = await cache?.match(url);
  if (hit) return hit.blob();
  const a = await token();
  let r; try { r = await fetch(`${url}?auth=${a.id}`); } catch { throw fail("Nessuna connessione: la dispensa si scarica la prima volta online"); }
  if (r.status === 401) throw fail("Il tuo account non è abilitato alle dispense");
  const b64 = r.ok && (await r.json());
  if (!b64) throw fail("Dispensa non disponibile (forse rimossa perché il corso è superato)");
  const blob = new Blob([Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))], { type: "application/pdf" });
  await cache?.put(url, new Response(blob));
  return blob;
}
