// Build dei dati dell'app: paniere estratto + risposte + teoria + scheda corso -> app/data/<materia>/
// Uso: cd tools && node build.mjs
import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "app/data");
const SUBJECTS = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "subjects.json"), "utf8"));
const readJSON = (p, d) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : d);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---------- Markdown (dialetto pandoc usato nei riassunti) -> HTML; la matematica resta TeX per KaTeX lato client
const marked = new Marked({ gfm: true, breaks: false });
function mdToHtml(md, linkFor = () => null) {
  if (!md) return "";
  const math = [];
  const keep = (tex, display) => `\u0000${math.push({ tex, display }) - 1}\u0000`;
  md = md
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => keep(t, true))
    .replace(/(^|[^\\$])\$([^\s$](?:[^$\n]|\n(?!\n))*?)\$/g, (_, pre, t) => pre + keep(t, false))
    .replace(/\[\]\{#([^}]+)\}/g, '<a id="$1"></a>')
    .replace(/^([a-h])[.)] (?=\S)/gm, "- **$1)** ") // elenchi a. b. c. → elenco puntato
    .replace(/^(#{1,6}) (.*?)\s*\{#([^}]+)\}\s*$/gm, (_, h, t, id) => `${h} ${t} <!--id:${id}-->`)
    // blocchi ::: pandoc (anche su una riga)
    .replace(/^::: *\{?\.?([a-z]+)(?: titolo="([^"]*)")?\}? *(.+?):::\s*$/gm, (_, c, t, body) =>
      `<div class="callout ${c}">${t ? `<div class="callout-t">${esc(t)}</div>` : ""}\n\n${body}\n\n</div>`)
    .replace(/^::: *\{?\.?([a-z]+)(?: titolo="([^"]*)")?\}? *$/gm, (_, c, t) =>
      `<div class="callout ${c}">${t ? `<div class="callout-t">${esc(t)}</div>` : ""}\n`)
    .replace(/^:::\s*$/gm, "\n</div>\n");
  let html = marked.parse(md);
  html = html
    .replace(/<(h\d)>(.*?) <!--id:([^>]*)--><\/h\d>/g, '<$1 id="$3">$2</$1>')
    .replace(/<a href="#([^"]+)">([\s\S]*?)<\/a>/g, (_, a, txt) => {
      const to = linkFor(a);
      return to ? `<a href="${to}">${txt}</a>` : txt;
    })
    .replace(/\u0000(\d+)\u0000/g, (_, i) => {
      const { tex, display } = math[i];
      return display ? `<span class="m d">${esc(tex.trim())}</span>` : `<span class="m">${esc(tex)}</span>`;
    });
  return html;
}

// testo del paniere: è testo semplice (con * e < letterali), non markdown
const plain = (s, subj) =>
  esc(s).replace(/!\[\]\(img\/([^)]+)\)/g, `<img src="data/${subj}/img/$1" alt="" loading="lazy">`).replace(/\n\n/g, "<br>");

// ---------- Parole chiave per la correzione automatica delle aperte
const STOP = new Set(("alla alle allo agli anche ancora avere aveva come con cosa cui dal dalla dalle dei del della delle dello " +
  "degli dove essere esso essa fra gli hanno il la le lo loro ma nel nella nelle nello negli non per perché più poi " +
  "quale quali quando quanto quella quelle quello questa queste questo se sia sono sua sue suo suoi tra tutto tutti una uno " +
  "viene vengono sempre dato dati data due tre quindi ovvero oppure cioè ossia stesso stessa altro altra molto poco " +
  "passo risposta domanda risultato ricorda nota esempio calcolo calcola calcolare vale valore punto modo caso parte " +
  "traccia paragrafo paragrafi studente dimostri conoscere seguenti argomenti deve può possono fare fatto dunque così " +
  "solo ogni tipo tale tali dopo prima mentre invece senza sotto sopra verso secondo circa infatti " +
  "cosi fuori dentro sempre mai anzi benissimo bene male meglio peggio molto troppo poco ancora gia proprio davvero " +
  "cinque sette otto nove dieci venti cento mille primo prima seconda terzo terza ultimo ultima volte volta " +
  "significa significato cioe esempio esempi caso casi modo punto parte parti lettera numero numeri scala " +
  "fanno fare venga sarebbe sarebbero fosse fossero essere stato stata stati avere aveva hanno ecco quindi " +
  "arriva arrivo esce entra torna conto pena sembra qualunque qualsiasi persino perfino appunto apposta legittimi " +
  "domanda risposte esercizio soluzione slide sessione lezione lezioni paniere").split(" "));
export const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const stem = (w) => w.slice(0, 6);
const words = (s) =>
  norm(s.replace(/\\[a-zA-Z]+/g, " ").replace(/<[^>]+>/g, " "))
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4 && !STOP.has(w) && !/^\d+$/.test(w));

const VERBISH = /(are|ere|ire|ato|ata|ati|ate|ito|ita|iti|uto|uta|ando|endo|ono|iamo|ete|ava|avano|evano|isce|iscono|ano|rsi|rlo|rla|mente|ebbe|ebbero|erebbe|asse|essero)$/;
// Parole chiave automatiche: termini della risposta modello che sono *specifici della lezione* (frequenti nella sua
// teoria, rari nelle altre lezioni). ponytail: euristica tf-idf per lezione; per le domande importanti meglio le KW scritte a mano.
function keywords(answerMd, questionText, lessonTf, lessonIdf) {
  const qs = new Set(words(questionText).map(stem));
  const tf = {}, repr = {};
  for (const w of words(answerMd)) {
    const s = stem(w);
    tf[s] = (tf[s] || 0) + 1;
    (repr[s] ||= {})[w] = (repr[s][w] || 0) + 1;
  }
  return Object.entries(tf)
    .filter(([s]) => !qs.has(s) && lessonIdf[s] !== undefined && (lessonTf[s] || 0) >= 2 && !Object.keys(repr[s]).every((w) => VERBISH.test(w)))
    .map(([s, n]) => [s, (1 + Math.log(n)) * (1 + Math.log(lessonTf[s])) * lessonIdf[s]])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([s]) => Object.entries(repr[s]).sort((a, b) => b[1] - a[1])[0][0]);
}
// radici "tecniche" della risposta modello: servono al client per misurare quanto la risposta dello studente
// parla delle stesse cose (sovrapposizione di vocabolario), oltre alle parole chiave
const modelStems = (md) => {
  const sigle = norm(md.replace(/\\[a-zA-Z]+/g, " ")).match(/\b\d+[a-z]{1,2}\d?\b|\bsp\d\b/g) || []; // 3d, 4f, sp3…
  return [...new Set([...words(md).map(stem), ...sigle])].slice(0, 160);
};

// numeri "risultato" nella parte finale della risposta modello (es. 2{,}18 \times 10^{-18} -> 2.18e-18)
function resultNumbers(md, questionText) {
  if (!/calcol|quant[oi]|determin|valore|stima|trova|ricava/i.test(questionText)) return [];
  const tail = md.slice(Math.floor(md.length * 0.6));
  const t = tail.replace(/\{,\}/g, ".").replace(/\\,|\\ |~/g, "");
  const re = /(-?\d+(?:[.,]\d+)?)\s*(?:\\times|\\cdot|×|·|\*|x)\s*10\^\{?\s*([−-]?\d+)\}?|(-?\d+[.,]\d+|\d{2,})/g;
  const out = [];
  for (const m of t.matchAll(re)) {
    const v = m[1] ? parseFloat(m[1].replace(",", ".")) * 10 ** parseInt(m[2].replace("−", "-")) : parseFloat(m[3].replace(",", "."));
    if (isFinite(v) && v !== 0 && !out.some((x) => Math.abs(x - v) / Math.abs(v) < 1e-6)) out.push(+v.toPrecision(4));
  }
  return out.slice(-3);
}

// ---------- Extra dei riassunti (esercizi scritti a parte, non da paniere)
function parseExtra(x) {
  let q = x.question;
  const th = (q.match(/\[↳ teoria[^\]]*\]\(#([^)]+)\)/) || [])[1];
  q = q.replace(/\n?\[↳ teoria[\s\S]*$/, "").trim();
  const lines = q.split("\n");
  const first = lines.findIndex((l) => /^a\. /.test(l));
  const letter = (x.solution.match(/Risposta[^:*\n]*:\s*\**\s*([a-e])\b/) || [])[1];
  if (first >= 0 && letter) {
    const opts = [];
    for (const l of lines.slice(first)) {
      if (/^[a-e]\. /.test(l)) opts.push(l.slice(3));
      else if (opts.length) opts[opts.length - 1] += " " + l.trim();
    }
    return { type: "closed", text: lines.slice(0, first).join("\n").trim(), options: opts, c: "abcde".indexOf(letter), th };
  }
  return { type: "open", text: q, th };
}

// ---------- Risposte scritte a mano (tools/content/<materia>/*.txt)
// Formato:  "## L5 Titolo lezione"
//           "5-12 B Spiegazione…"      (chiusa; "B!" = risposta incerta, da verificare; "X" = nessuna opzione corretta, esclusa)
//           "5-34 APERTA" + "KW: parola|sinonimo, altra, =2.5" + righe "> risposta modello in markdown"
//           "OPT: a | b | c | d" dopo una chiusa sostituisce le opzioni estratte (se il PDF le ha spezzate male)
//           "KW: …" da solo dopo "N-M KW" aggiunge parole chiave a un'aperta che ha già la risposta modello
function parseAnswers(dir) {
  const answers = {}, lessons = {};
  if (!fs.existsSync(dir)) return { answers, lessons };
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".txt")).sort()) {
    let cur = null;
    for (const line of fs.readFileSync(path.join(dir, f), "utf8").split("\n")) {
      let m;
      if ((m = line.match(/^## L(\d+)\s+(.+)$/))) { lessons[+m[1]] = { title: m[2].trim() }; cur = null; }
      else if ((m = line.match(/^(\d+)-(\d+)\s+([A-EX])(!?)\s+(.*)$/))) {
        cur = answers[`p${m[1]}-${m[2]}`] = { c: "ABCDE".indexOf(m[3]), e: m[5], u: !!m[4] };
      } else if ((m = line.match(/^(\d+)-(\d+)\s+APERTA\s*$/))) cur = answers[`p${m[1]}-${m[2]}`] = { a: "" };
      else if ((m = line.match(/^(\d+)-(\d+)\s+KW:\s*(.*)$/))) answers[`p${m[1]}-${m[2]}`] = { kw: m[3].split(",").map((x) => x.trim()).filter(Boolean) };
      else if (cur && (m = line.match(/^OPT:\s*(.*)$/))) cur.o = m[1].split(" | ").map((x) => x.trim());
      else if (cur && (m = line.match(/^KW:\s*(.*)$/))) cur.kw = m[1].split(",").map((x) => x.trim()).filter(Boolean);
      else if (cur && "a" in cur && (m = line.match(/^> ?(.*)$/))) cur.a += m[1] + "\n";
      else if (cur && "e" in cur && /^\s+\S/.test(line)) cur.e += "\n\n" + line.trim();
    }
  }
  return { answers, lessons };
}

// Domande generate (non da paniere), file tools/content/<materia>/gen*.txt:
//   "Q12 B Testo della domanda"  (lezione 12, risposta B)
//   "- opzione" ×4                "> spiegazione in markdown" (una o più righe)
function parseGenerated(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter((f) => /^gen.*\.txt$/.test(f)).sort()) {
    let cur = null;
    for (const line of fs.readFileSync(path.join(dir, f), "utf8").split("\n")) {
      let m;
      if ((m = line.match(/^Q(\d+)\s+([A-E])\s+(.+)$/))) out.push((cur = { l: +m[1], type: "closed", c: "ABCDE".indexOf(m[2]), text: m[3], o: [], e: "" }));
      else if (cur && (m = line.match(/^- (.+)$/))) cur.o.push(m[1]);
      else if (cur && (m = line.match(/^> ?(.*)$/))) cur.e += m[1] + "\n";
    }
  }
  return out;
}

// ---------- Build di una materia
function buildSubject(S) {
  const dir = path.join(OUT, S.id);
  fs.mkdirSync(path.join(dir, "t"), { recursive: true });
  const raw = readJSON(path.join(ROOT, S.raw), { lessons: [] });
  const scheda = readJSON(path.join(ROOT, S.scheda), {});
  const content = (f, d) => readJSON(path.join(ROOT, "tools/content", S.id, f), d);
  const parsed = parseAnswers(path.join(ROOT, "tools/content", S.id));
  const answers = { ...parsed.answers, ...content("answers.json", {}) };
  const lessonMeta = { ...parsed.lessons, ...content("lessons.json", {}) };
  const generated = [...content("generated.json", []), ...parseGenerated(path.join(ROOT, "tools/content", S.id))];
  const map = S.map ? readJSON(path.join(ROOT, S.map), { paniere: {}, extra: [] }) : { paniere: {}, extra: [] };

  // teoria: file "Lez NN - Titolo.md"
  const theory = {};
  const anchorLesson = {};
  const tdirs = [S.theoryDir, `tools/content/${S.id}/teoria`].filter(Boolean).map((d) => path.join(ROOT, d));
  for (const td of tdirs) {
    if (!fs.existsSync(td)) continue;
    for (const f of fs.readdirSync(td)) {
      const m = f.match(/^Lez (\d+) - (.+)\.md$/) || f.match(/^(00) (Formulario)\.md$/);
      if (!m) continue;
      const num = +m[1];
      const md = fs.readFileSync(path.join(td, f), "utf8").replace(/^\*Fonte:[\s\S]*?\*\n\n/m, "");
      // titolo dall'intestazione del riassunto (con gli accenti), altrimenti dal nome del file
      const h1 = (md.match(/^# (?:Lezione \d+\s*[—–-]\s*)?(.+?)\s*(?:\{#[^}]*\})?\s*$/m) || [])[1];
      theory[num] = { title: h1 ? h1.charAt(0).toUpperCase() + h1.slice(1) : m[2], md, generated: td.includes("tools/content") };
      for (const a of md.matchAll(/\{#([^}]+)\}/g)) anchorLesson[a[1]] = num;
    }
  }
  // teoria generata: tools/content/<materia>/teoria_src/*.md, più lezioni per file separate da "=== N"
  const tsrc = path.join(ROOT, "tools/content", S.id, "teoria_src");
  if (fs.existsSync(tsrc))
    for (const f of fs.readdirSync(tsrc).filter((f) => f.endsWith(".md")).sort())
      for (const part of fs.readFileSync(path.join(tsrc, f), "utf8").split(/^=== (?=\d+\s*$)/m).slice(1)) {
        const num = parseInt(part);
        const md = part.slice(part.indexOf("\n") + 1);
        const title = (md.match(/^# Lezione \d+ — (.+)$/m) || [])[1] || `Lezione ${num}`;
        theory[num] = { title, md, generated: true };
        for (const a of md.matchAll(/\{#([^}]+)\}/g)) anchorLesson[a[1]] = num;
      }
  const linkFor = (a) => (anchorLesson[a] !== undefined ? `#/teoria/${S.id}/${anchorLesson[a]}/${a}` : null);

  // paniere -> lezione di teoria (mappa esplicita, poi maggioranza per lezione di paniere, poi stesso numero)
  const majority = {};
  for (const [k, e] of Object.entries(map.paniere)) {
    const p = k.split("-")[0];
    (majority[p] ||= {})[e.theory] = (majority[p][e.theory] || 0) + 1;
  }
  const lessonOf = (pl, n) => {
    const e = map.paniere[`${pl}-${n}`];
    if (e?.theory) return e.theory;
    const mj = majority[pl];
    return mj ? +Object.entries(mj).sort((a, b) => b[1] - a[1])[0][0] : pl;
  };

  const qs = [];
  for (const L of raw.lessons) {
    for (const q of L.questions) {
      const key = `p${L.num}-${q.n}`;
      const e = map.paniere[`${L.num}-${q.n}`] || {};
      const a = answers[key] || {};
      const out = {
        id: key, l: a.l ?? lessonOf(L.num, q.n), src: "paniere",
        ref: `Paniere · Lez. ${String(L.num).padStart(3, "0")} · D. ${q.n}`,
        type: q.type, text: plain(q.text, S.id), md: false,
      };
      if (q.type === "closed") {
        out.o = (a.o || q.options).map((o) => plain(o, S.id));
        out.c = a.c ?? (q.correct.length === 1 ? q.correct[0] : e.letter ? "abcde".indexOf(e.letter) : null);
      }
      out.e = a.e || e.solution || null;
      if (q.type === "open") out.a = a.a || e.solution || null;
      if (q.type === "open" && a.a) out.e = null;
      if (a.kw) out.kw = a.kw;
      if (a.th) out.th = a.th;
      if (a.u) out.u = a.u; // "risposta incerta" da ricontrollare
      qs.push(out);
    }
  }
  for (const [i, x] of map.extra.entries()) {
    const p = parseExtra(x);
    qs.push({
      id: `x${i + 1}`, l: x.theory, src: "extra", ref: x.title.replace(/ \((a crocette)\)/, ""),
      type: p.type, text: p.text, md: true, o: p.options, c: p.c, th: p.th, e: x.solution, a: p.type === "open" ? x.solution : undefined,
    });
  }
  for (const [i, g] of generated.entries())
    qs.push({ id: `g${g.l}-${i + 1}`, src: "gen", ref: "Domanda generata", md: true, ...g, e: g.e || g.a, a: g.a });

  // rendering + parole chiave: statistiche dei termini per lezione di teoria
  const lessonTfs = {};
  for (const [n, t] of Object.entries(theory)) {
    const c = (lessonTfs[n] = {});
    for (const w of words(t.md)) c[stem(w)] = (c[stem(w)] || 0) + 1;
  }
  const nL = Object.keys(lessonTfs).length || 1;
  const ldf = {};
  for (const c of Object.values(lessonTfs)) for (const s of Object.keys(c)) ldf[s] = (ldf[s] || 0) + 1;
  // idf solo per termini che compaiono in almeno una lezione ma non in quasi tutte (parole comuni escluse)
  const lessonIdf = Object.fromEntries(Object.entries(ldf).filter(([, d]) => d <= nL * 0.35).map(([s, d]) => [s, Math.log(nL / d)]));
  let missing = 0;
  const final = qs.map((q) => {
    if (q.type === "closed" && (q.c === null || q.c === undefined || q.c < 0)) missing++;
    const r = {
      id: q.id, l: q.l, src: q.src, ref: q.ref, type: q.type,
      t: q.md ? mdToHtml(q.text, linkFor) : q.text,
    };
    if (q.type === "closed") { r.o = q.o.map((o) => (q.md ? marked.parseInline(o) : o)); r.c = q.c; }
    if (q.e) r.e = mdToHtml(q.e, linkFor);
    if (q.type === "open") {
      r.a = mdToHtml(q.a || "", linkFor);
      r.kw = q.kw ?? keywords(q.a || "", q.text, lessonTfs[q.l] || {}, lessonIdf);
      r.n = q.kw ? [] : resultNumbers(q.a || "", q.text);
      r.ms = modelStems(q.a || "");
      if (!q.kw) r.ka = 1; // parole chiave automatiche: nel voto pesano meno della sovrapposizione
    }
    if (q.th) r.th = linkFor(q.th);
    if (q.u) r.u = 1;
    return r;
  }).map((r) => (r.t.includes('<span class="m">') || r.t.includes("<div") ? r : r));
  // math nei testi extra: marked.parseInline non protegge $..$ -> render inline via mdToHtml
  for (const r of final) if (r.o) r.o = r.o.map((o) => (o.includes("$") ? mdToHtml(o).replace(/^<p>|<\/p>\n?$/g, "") : o));

  // lezioni
  const nums = [...new Set([...Object.keys(theory).map(Number), ...final.map((q) => q.l)])].sort((a, b) => a - b);
  const lessons = nums.map((n) => {
    const t = theory[n];
    const title = lessonMeta[n]?.title || t?.title || `Lezione ${String(n).padStart(3, "0")}`;
    if (t) fs.writeFileSync(path.join(dir, "t", `${n}.html`), mdToHtml(t.md, linkFor));
    const lq = final.filter((q) => q.l === n);
    return {
      n, title, theory: !!t, genTheory: !!t?.generated,
      q: { paniere: lq.filter((q) => q.src === "paniere").length, other: lq.filter((q) => q.src !== "paniere").length },
    };
  });

  const subject = {
    id: S.id, name: scheda.name || S.name, short: S.short, color: S.color, docente: scheda.docente,
    corso: scheda.corso, cfu: scheda.cfu, aa: scheda.aa, anno: scheda.anno,
    scheda: (scheda.sections || []).map((s) => ({ title: s.title, html: mdToHtml(s.md) })),
    lessons, questions: final,
  };
  fs.writeFileSync(path.join(dir, "subject.json"), JSON.stringify(subject));
  const kb = (fs.statSync(path.join(dir, "subject.json")).size / 1024).toFixed(0);
  console.log(`${S.id}: ${lessons.length} lezioni, ${final.length} domande (` +
    ["paniere", "extra", "gen"].map((s) => `${s} ${final.filter((q) => q.src === s).length}`).join(", ") +
    `), chiuse senza risposta: ${missing}, ${kb} KB`);
  return { id: S.id, name: subject.name, short: S.short, color: S.color, docente: subject.docente,
    nq: final.length, v: Date.now() };
}

const index = SUBJECTS.map(buildSubject);
fs.writeFileSync(path.join(OUT, "subjects.json"), JSON.stringify(index));
