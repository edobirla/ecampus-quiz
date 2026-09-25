// eCampus Quiz — app a pagina singola, senza dipendenze (KaTeX solo per le formule).
import { gradeOpen } from "./grade.js";
const EXAM = { closed: 24, open: 2, openMax: 3, pass: 18 };
const KATEX = { throwOnError: false, macros: { "\\chem": "\\mathrm{#1}" } };

// ---------- utilità
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const pad3 = (n) => String(n).padStart(2, "0");
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};
const fmtDate = (t) => new Date(t).toLocaleDateString("it-IT", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
const fmtTime = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), 2200);
}
function renderMath(root = document) {
  if (!window.katex) return;
  for (const el of root.querySelectorAll(".m:not([data-r])")) {
    try { katex.render(el.textContent, el, { ...KATEX, displayMode: el.classList.contains("d") }); } catch {}
    el.dataset.r = 1;
  }
}

// ---------- icone
const ico = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const I = {
  home: ico('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>'),
  study: ico('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>'),
  exam: ico('<path d="M9 3h6l1 2h3v16H5V5h3z"/><path d="m9 13 2 2 4-4"/>'),
  book: ico('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/>'),
  more: ico('<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>'),
  star: ico('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
  starFill: ico('<path fill="currentColor" d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
  redo: ico('<path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.6"/><path d="M4 4v4.6h4.6"/>'),
  gear: ico('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
  info: ico('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  x: ico('<path d="M6 6l12 12M18 6 6 18"/>'),
  chev: ico('<path d="m9 6 6 6-6 6"/>'),
  down: ico('<path d="m6 9 6 6 6-6"/>'),
  left: ico('<path d="m15 6-6 6 6 6"/>'),
  grid: ico('<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>'),
  plus: ico('<path d="M12 5v14M5 12h14"/>'),
  flag: ico('<path d="M5 21V4h11l-1.5 4L16 12H5"/>'),
  bolt: ico('<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>'),
  doc: ico('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>'),
};

// ---------- impostazioni e stato
const settings = Object.assign({ theme: "auto", timer: 60, onlyPaniere: true, extraInPractice: true, shuffle: true }, store.get("ecq:settings", {}));
const saveSettings = () => { store.set("ecq:settings", settings); applyTheme(); };
function applyTheme() {
  if (settings.theme === "auto") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = settings.theme;
}
applyTheme();

let subjects = [];
let S = null; // materia corrente (dati completi)
const loaded = {};
async function loadSubject(id) {
  if (!loaded[id]) {
    const meta = subjects.find((s) => s.id === id);
    const r = await fetch(`data/${id}/subject.json?v=${meta?.v || 0}`);
    const d = await r.json();
    d.byId = Object.fromEntries(d.questions.map((q) => [q.id, q]));
    d.byLesson = {};
    for (const q of d.questions) (d.byLesson[q.l] ||= []).push(q);
    loaded[id] = d;
  }
  S = loaded[id];
  store.set("ecq:subject", id);
  document.documentElement.style.setProperty("--accent", S.color || "#3b6fe0");
  return S;
}

// statistiche per materia: { q: {id: {ok, ko, st, t}}, exams: [...], fav: [...] }
const statKey = () => `ecq:stats:${S.id}`;
const stats = () => Object.assign({ q: {}, exams: [], fav: [] }, store.get(statKey(), {}));
const saveStats = (st) => store.set(statKey(), st);
function recordAnswer(st, id, ok) {
  const r = (st.q[id] ||= { ok: 0, ko: 0, st: 0 });
  if (ok) { r.ok++; r.st = r.st > 0 ? r.st + 1 : 1; } else { r.ko++; r.st = 0; }
  r.t = Date.now();
}
// da ripassare: sbagliata almeno una volta e non ancora azzeccata 2 volte di fila
const isToReview = (r) => r && r.ko > 0 && r.st < 2;
const validQ = (q) => (q.type === "closed" ? Number.isInteger(q.c) && q.c >= 0 : !!q.a);

// ---------- sessione quiz/esame (sopravvive al ricaricamento)
let sess = store.get("ecq:session", null);
const saveSess = () => store.set("ecq:session", sess);
function startSession({ mode, ids, title, sub }) {
  if (!ids.length) return toast("Nessuna domanda disponibile");
  sess = { mode, subj: S.id, ids, title, sub, i: 0, ans: {}, done: {}, start: Date.now(),
    deadline: mode === "exam" && settings.timer ? Date.now() + settings.timer * 60000 : null };
  saveSess();
  location.hash = "#/quiz";
}
function newExam() {
  const pool = S.questions.filter((q) => validQ(q) && (!settings.onlyPaniere || q.src === "paniere"));
  let closed = shuffle(pool.filter((q) => q.type === "closed")).slice(0, EXAM.closed);
  let open = shuffle(pool.filter((q) => q.type === "open")).slice(0, EXAM.open);
  if (closed.length < EXAM.closed || open.length < EXAM.open) {
    // pool del paniere insufficiente: completa con le domande extra/generate
    const rest = S.questions.filter((q) => validQ(q) && !pool.includes(q));
    closed = closed.concat(shuffle(rest.filter((q) => q.type === "closed"))).slice(0, EXAM.closed);
    open = open.concat(shuffle(rest.filter((q) => q.type === "open"))).slice(0, EXAM.open);
  }
  startSession({ mode: "exam", ids: [...closed, ...open].map((q) => q.id), title: "Esame simulato", sub: S.short || S.name });
}
function practice(qs, title) {
  qs = qs.filter(validQ);
  startSession({ mode: "practice", ids: (settings.shuffle ? shuffle(qs) : qs).map((q) => q.id), title, sub: S.short || S.name });
}
const practiceLessons = (nums) => {
  const qs = nums.flatMap((n) => S.byLesson[n] || []).filter((q) => settings.extraInPractice || q.src === "paniere");
  practice(qs, nums.length === 1 ? `Lezione ${pad3(nums[0])}` : `${nums.length} lezioni`);
};

// esercitazione: salva il riepilogo delle sole domande a cui hai risposto
function finishPractice() {
  const answered = sess.ids.filter((id) => sess.done[id]);
  const { title, start, ans: sess_ans } = sess;
  sess = null; store.del("ecq:session");
  if (!answered.length) return (location.hash = "#/studio");
  const s = stats();
  const items = answered.map((id) => {
    const q = S.byId[id], a = sess_ans[id];
    return { id, a, p: q.type === "closed" ? (a === q.c ? 1 : 0) : gradeOpen(q, a).pts };
  });
  s.lastPractice = { id: "pratica", d: Date.now(), mode: "practice", title, dur: Math.round((Date.now() - start) / 1000), items,
    score: items.reduce((x, it) => x + it.p, 0), max: items.reduce((x, it) => x + (S.byId[it.id].type === "closed" ? 1 : EXAM.openMax), 0),
    openPts: items.filter((it) => S.byId[it.id].type === "open").reduce((x, it) => x + it.p, 0) };
  saveStats(s);
  location.replace("#/risultati/pratica");
}

function gradeSession() {
  const st = stats();
  const items = sess.ids.map((id) => {
    const q = S.byId[id];
    const a = sess.ans[id];
    if (q.type === "closed") {
      const ok = a === q.c;
      if (a !== undefined) recordAnswer(st, id, ok);
      return { id, a, p: ok ? 1 : 0 };
    }
    const g = gradeOpen(q, a);
    if (a) recordAnswer(st, id, g.pts >= 2);
    return { id, a, p: g.pts };
  });
  const closedPts = items.filter((it) => S.byId[it.id].type === "closed").reduce((s, it) => s + it.p, 0);
  const openPts = items.filter((it) => S.byId[it.id].type === "open").reduce((s, it) => s + it.p, 0);
  const res = { id: Date.now().toString(36), d: Date.now(), mode: sess.mode, title: sess.title, dur: Math.round((Date.now() - sess.start) / 1000),
    items, closedPts, openPts, score: closedPts + openPts,
    max: items.reduce((s, it) => s + (S.byId[it.id].type === "closed" ? 1 : EXAM.openMax), 0) };
  res.passed = res.mode === "exam" ? res.score >= EXAM.pass : null;
  if (res.mode === "exam") st.exams.push(res);
  else st.lastPractice = res;
  saveStats(st);
  sess = null; store.del("ecq:session");
  location.replace(`#/risultati/${res.mode === "exam" ? res.id : "pratica"}`);
}

// ---------- shell: sidebar, topbar, tabbar
const NAV = [
  ["", "Home", I.home], ["studio", "Studio", I.study], ["esame", "Esame", I.exam], ["teoria", "Teoria", I.book], ["altro", "Altro", I.more],
];
function renderShell(route) {
  const top = route.split("/")[0];
  const on = (k) => (k === top || (k === "altro" && ["preferiti", "errori", "scheda", "impostazioni"].includes(top)) ? "on" : "");
  const chip = `<button class="subject-chip" data-act="subjects"><i class="dot"></i><span>${esc(S.short || S.name)}</span>${I.down}</button>`;
  $("#tabbar").innerHTML = NAV.map(([k, t, i]) => `<a href="#/${k}" class="${on(k)}">${i}<span>${t}</span></a>`).join("");
  $("#sidebar").innerHTML = `
    <div class="brand"><img src="icons/icon.svg" alt="">eCampus Quiz</div>
    ${chip}
    ${NAV.slice(0, 4).map(([k, t, i]) => `<a class="side-link ${on(k)}" href="#/${k}">${i}${t}</a>`).join("")}
    <div class="side-sep"></div>
    <a class="side-link ${top === "preferiti" ? "on" : ""}" href="#/preferiti">${I.star}Preferiti</a>
    <a class="side-link ${top === "errori" ? "on" : ""}" href="#/errori">${I.redo}Ripasso errori</a>
    <a class="side-link ${top === "scheda" ? "on" : ""}" href="#/scheda">${I.doc}Scheda corso</a>
    <a class="side-link ${top === "impostazioni" ? "on" : ""}" href="#/impostazioni">${I.gear}Impostazioni</a>`;
  const titles = { "": "Home", studio: "Studio", esame: "Esame", teoria: "Teoria", altro: "Altro", preferiti: "Preferiti", errori: "Ripasso errori", scheda: "Scheda corso", impostazioni: "Impostazioni", risultati: "Risultati" };
  $("#topbar").innerHTML = `<h1>${titles[top] ?? ""}</h1>${chip}`;
}

// ---------- viste
const views = {};

views[""] = () => {
  const st = stats();
  const ex = st.exams;
  const passed = ex.filter((e) => e.passed).length;
  const answered = Object.values(st.q);
  const ok = answered.reduce((s, r) => s + r.ok, 0), ko = answered.reduce((s, r) => s + r.ko, 0);
  const valid = S.questions.filter(validQ);
  const seen = valid.filter((q) => st.q[q.id]).length;
  const review = valid.filter((q) => isToReview(st.q[q.id])).length;
  const avg = ex.length ? (ex.reduce((s, e) => s + e.score, 0) / ex.length).toFixed(1) : "–";
  const best = ex.length ? Math.max(...ex.map((e) => e.score)) : "–";
  // lezioni più deboli (almeno 3 risposte)
  const weak = S.lessons.map((L) => {
    const r = (S.byLesson[L.n] || []).map((q) => st.q[q.id]).filter(Boolean);
    const o = r.reduce((s, x) => s + x.ok, 0), k = r.reduce((s, x) => s + x.ko, 0);
    return { L, o, k, acc: o + k ? o / (o + k) : 1 };
  }).filter((x) => x.o + x.k >= 3 && x.acc < 0.85).sort((a, b) => a.acc - b.acc).slice(0, 5);
  const R = 40, C = 2 * Math.PI * R, fr = ok + ko ? ok / (ok + ko) : 0;
  return `
  <section class="hero" style="--brand-hero:${S.id === "fisica" ? "#132a6b" : "#0c3b33"}">
    <div class="kicker">${esc(S.corso || "eCampus")}${S.cfu ? ` · ${esc(S.cfu)} CFU` : ""}</div>
    <h2>${esc(S.name)}</h2>
    <p>${S.docente ? `Prof. ${esc(S.docente)} · ` : ""}${valid.length} domande</p>
    <div class="actions">
      <button class="btn" data-act="exam">${I.exam}Esame simulato</button>
      <a class="btn secondary" href="#/studio">${I.study}Studia per lezione</a>
    </div>
  </section>

  <div class="section grid g4">
    <div class="card stat"><div class="v">${ex.length}</div><div class="k">Esami svolti</div></div>
    <div class="card stat ok"><div class="v">${passed}</div><div class="k">Promossi</div></div>
    <div class="card stat ko"><div class="v">${ex.length - passed}</div><div class="k">Bocciati</div></div>
    <div class="card stat"><div class="v">${avg}</div><div class="k">Media voto · max ${best}</div></div>
  </div>

  <div class="section grid g2" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
    <div class="card">
      <div class="ring-row">
        <svg class="ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="${R}" fill="none" stroke="var(--ko-soft)" stroke-width="12"/>
          ${fr ? `<circle cx="50" cy="50" r="${R}" fill="none" stroke="var(--ok)" stroke-width="12" stroke-linecap="round"
            stroke-dasharray="${C * fr} ${C}" transform="rotate(-90 50 50)"/>` : ""}
          <text x="50" y="56" text-anchor="middle" font-size="20">${ok + ko ? pct(ok, ok + ko) + "%" : "–"}</text></svg>
        <div class="legend">
          <b>Risposte date</b>
          <span><i style="background:var(--ok)"></i>${ok} corrette</span>
          <span><i style="background:var(--ko)"></i>${ko} sbagliate</span>
          <span class="muted small">${seen}/${valid.length} domande viste</span>
        </div>
      </div>
      <div class="bar ok" style="margin-top:14px"><span style="width:${pct(seen, valid.length)}%"></span></div>
    </div>
    <div class="card">
      <b>Andamento esami</b>
      ${ex.length ? chart(ex.slice(-12)) : `<p class="muted small" style="margin:8px 0 0">Ancora nessun esame simulato. Fanne uno per vedere qui l'andamento dei voti.</p>`}
    </div>
  </div>

  <div class="section">
    <div class="list">
      <button class="row" data-act="review"><span class="lnum" style="background:var(--ko-soft);color:var(--ko)">${I.redo}</span>
        <div class="grow"><div class="t">Ripasso errori</div><div class="s">${review ? `${review} domande da ripassare` : "Nessun errore da ripassare"}</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</button>
      <a class="row" href="#/preferiti"><span class="lnum" style="background:var(--warn-soft);color:#f5b301">${I.star}</span>
        <div class="grow"><div class="t">Preferiti</div><div class="s">${st.fav.length} domande salvate</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>
      <button class="row" data-act="quick"><span class="lnum">${I.bolt}</span>
        <div class="grow"><div class="t">Quiz veloce</div><div class="s">20 domande casuali con correzione immediata</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</button>
    </div>
  </div>

  ${weak.length ? `<div class="section"><div class="section-h"><h2>Lezioni da rinforzare</h2></div><div class="list">
    ${weak.map(({ L, o, k, acc }) => `<button class="row" data-act="lesson" data-n="${L.n}"><span class="lnum">${pad3(L.n)}</span>
      <div class="grow"><div class="t">${esc(L.title)}</div><div class="bar" style="margin-top:6px"><span style="width:${Math.round(acc * 100)}%;background:${acc < 0.5 ? "var(--ko)" : "var(--warn)"}"></span></div></div>
      <span class="badge ${acc < 0.5 ? "ko" : "warn"}">${Math.round(acc * 100)}%</span></button>`).join("")}</div></div>` : ""}

  ${ex.length ? `<div class="section"><div class="section-h"><h2>Ultimi esami</h2></div><div class="list">
    ${ex.slice(-5).reverse().map((e) => `<a class="row" href="#/risultati/${e.id}"><span class="st ${e.passed ? "ok" : "ko"}">${e.passed ? "✓" : "✕"}</span>
      <div class="grow"><div class="t">${e.score}/30 · ${e.passed ? "Promosso" : "Bocciato"}</div><div class="s">${fmtDate(e.d)} · ${fmtTime(e.dur)}</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>`).join("")}</div></div>` : ""}`;
};

function chart(ex) {
  const W = 320, H = 150, P = 22, n = ex.length;
  const x = (i) => P + (n === 1 ? (W - 2 * P) / 2 : (i * (W - 2 * P)) / (n - 1));
  const y = (v) => H - P - (v / 30) * (H - 2 * P);
  const pts = ex.map((e, i) => `${x(i)},${y(e.score)}`).join(" ");
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    <line class="thr" x1="${P}" x2="${W - P}" y1="${y(18)}" y2="${y(18)}"/><text x="${W - P}" y="${y(18) - 5}" text-anchor="end">18</text>
    <polygon class="area" points="${x(0)},${H - P} ${pts} ${x(n - 1)},${H - P}"/>
    <polyline class="line" points="${pts}"/>
    ${ex.map((e, i) => `<circle class="${e.passed ? "" : "fail"}" cx="${x(i)}" cy="${y(e.score)}" r="4"/>`).join("")}
  </svg>`;
}

let selLessons = new Set();
views.studio = () => {
  const st = stats();
  const rows = S.lessons.filter((L) => (S.byLesson[L.n] || []).some(validQ)).map((L) => {
    const qs = (S.byLesson[L.n] || []).filter(validQ);
    const r = qs.map((q) => st.q[q.id]).filter(Boolean);
    const o = r.reduce((s, x) => s + x.ok, 0), k = r.reduce((s, x) => s + x.ko, 0);
    const p = qs.filter((q) => q.src === "paniere").length;
    return `<button class="row ${selLessons.has(L.n) ? "sel" : ""}" data-act="sel" data-n="${L.n}">
      <span class="check"></span>
      <div class="grow"><div class="t">${L.n ? `Lez. ${pad3(L.n)} · ` : ""}${esc(L.title)}</div>
        <div class="s">${p ? `${p} paniere` : ""}${p && qs.length - p ? " · " : ""}${qs.length - p ? `${qs.length - p} extra` : ""}${r.length ? ` · ${r.length}/${qs.length} viste` : ""}</div>
        ${o + k ? `<div class="bar ok" style="margin-top:6px"><span style="width:${pct(o, o + k)}%"></span></div>` : ""}</div>
      ${o + k ? `<span class="badge ${o / (o + k) >= 0.7 ? "ok" : "ko"}">${pct(o, o + k)}%</span>` : ""}</button>`;
  });
  const nSel = [...selLessons].flatMap((n) => S.byLesson[n] || []).filter((q) => validQ(q) && (settings.extraInPractice || q.src === "paniere")).length;
  return `
  <div class="grid g3">
    <button class="card row" style="border-top:1px solid var(--border)" data-act="quick"><span class="lnum">${I.bolt}</span><div class="grow"><div class="t">Quiz veloce</div><div class="s">20 domande casuali</div></div></button>
    <button class="card row" style="border-top:1px solid var(--border)" data-act="review"><span class="lnum" style="background:var(--ko-soft);color:var(--ko)">${I.redo}</span><div class="grow"><div class="t">Ripasso errori</div><div class="s">Le domande che sbagli</div></div></button>
    <a class="card row" style="border-top:1px solid var(--border)" href="#/preferiti"><span class="lnum" style="background:var(--warn-soft);color:#f5b301">${I.star}</span><div class="grow"><div class="t">Preferiti</div><div class="s">Le domande salvate</div></div></a>
  </div>
  <div class="section">
    <div class="section-h"><h2>Scegli le lezioni</h2><button data-act="selall">${selLessons.size ? "Deseleziona" : "Seleziona tutte"}</button></div>
    <div class="list" style="margin-bottom:12px"><div class="toggle-row"><div><b>Includi domande extra</b><div class="muted small">Esercizi non presenti nel paniere ufficiale</div></div>
      <label class="switch"><input type="checkbox" data-set="extraInPractice" ${settings.extraInPractice ? "checked" : ""}><span></span></label></div></div>
    <div class="list">${rows.join("")}</div>
  </div>
  <div class="theory-foot" ${selLessons.size ? "" : "hidden"}><button class="btn block" data-act="startsel">Esercitati su ${nSel} domande</button></div>`;
};

views.esame = () => {
  const pool = S.questions.filter((q) => validQ(q) && q.src === "paniere");
  const nc = pool.filter((q) => q.type === "closed").length, no = pool.filter((q) => q.type === "open").length;
  return `
  <div class="card">
    <h2 style="font-size:22px">Simulazione d'esame</h2>
    <p class="muted">Come la prova scritta eCampus di <b>${esc(S.name)}</b>.</p>
    <div class="grid g3" style="margin:14px 0">
      <div class="card stat" style="box-shadow:none"><div class="v">24</div><div class="k">domande a crocette · 1 punto</div></div>
      <div class="card stat" style="box-shadow:none"><div class="v">2</div><div class="k">domande aperte · 0–3 punti</div></div>
      <div class="card stat" style="box-shadow:none"><div class="v">18/30</div><div class="k">per superare l'esame</div></div>
    </div>
    <p class="muted small">Risposta sbagliata o non data: 0 punti. Le aperte sono corrette in automatico confrontandole con una risposta modello (concetti chiave e risultati numerici): la correzione è indicativa.</p>
  </div>
  <div class="section list">
    <div class="toggle-row"><div><b>Timer</b><div class="muted small">Consegna automatica allo scadere</div></div>
      <div class="seg">${[0, 30, 45, 60, 90].map((m) => `<button data-timer="${m}" class="${settings.timer === m ? "on" : ""}">${m ? m + "′" : "No"}</button>`).join("")}</div></div>
    <div class="toggle-row"><div><b>Solo domande del paniere</b><div class="muted small">${nc} chiuse e ${no} aperte ufficiali disponibili</div></div>
      <label class="switch"><input type="checkbox" data-set="onlyPaniere" ${settings.onlyPaniere ? "checked" : ""}><span></span></label></div>
  </div>
  <div class="section"><button class="btn block" data-act="exam">${I.exam}Inizia l'esame</button></div>`;
};

views.teoria = (subj, n, anchor) => {
  if (n !== undefined) return theoryLesson(+n, anchor);
  const L = S.lessons.filter((l) => l.theory);
  const noT = S.lessons.filter((l) => !l.theory);
  return `
  <a class="card row" href="#/scheda" style="border-top:1px solid var(--border)"><span class="lnum">${I.doc}</span><div class="grow"><div class="t">Scheda del corso</div><div class="s">Programma, modalità d'esame, testi consigliati</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>
  <div class="section">
    ${L.length ? `<div class="list">${L.map((l) => `<a class="row" href="#/teoria/${S.id}/${l.n}"><span class="lnum">${l.n ? pad3(l.n) : "Σ"}</span>
      <div class="grow"><div class="t">${esc(l.title)}</div><div class="s">${l.q.paniere + l.q.other ? `${l.q.paniere + l.q.other} domande collegate` : "Nessuna domanda collegata"}${l.genTheory ? " · riassunto generato" : ""}</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>`).join("")}</div>`
      : `<div class="card empty">${I.book}<p>La teoria di questa materia non è ancora stata caricata.</p></div>`}
  </div>
  ${noT.length && L.length ? `<p class="muted small" style="margin:14px 4px">Senza teoria: ${noT.map((l) => pad3(l.n)).join(", ")}</p>` : ""}`;
};

async function theoryLesson(n, anchor) {
  const L = S.lessons.find((l) => l.n === n);
  if (!L?.theory) return `<div class="card empty">${I.book}<p>Teoria non disponibile per questa lezione.</p></div>`;
  const html = await fetch(`data/${S.id}/t/${n}.html?v=${subjects.find((s) => s.id === S.id)?.v || 0}`).then((r) => r.text());
  const withT = S.lessons.filter((l) => l.theory);
  const i = withT.indexOf(L), prev = withT[i - 1], next = withT[i + 1];
  const nq = (S.byLesson[n] || []).filter(validQ).length;
  setTimeout(() => {
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ block: "start" });
  }, 30);
  return `
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><a class="icon-btn" href="#/teoria" aria-label="Indietro">${I.left}</a>
    ${L.genTheory ? `<span class="badge warn">Riassunto generato — da verificare con le dispense</span>` : ""}</div>
  <article class="card prose">${html}</article>
  <div class="theory-foot">
    ${prev ? `<a class="btn secondary" href="#/teoria/${S.id}/${prev.n}" aria-label="Lezione precedente">${I.left}</a>` : ""}
    ${nq ? `<button class="btn block" data-act="lesson" data-n="${n}">${I.study}Esercitati · ${nq}</button>` : `<span style="flex:1"></span>`}
    ${next ? `<a class="btn secondary" href="#/teoria/${S.id}/${next.n}" aria-label="Lezione successiva">${I.chev}</a>` : ""}
  </div>`;
}

views.scheda = () => `
  <div class="card"><h2 style="font-size:22px">${esc(S.name)}</h2>
    <p class="muted" style="margin:6px 0 0">${[S.corso, S.docente && "Prof. " + S.docente, S.cfu && S.cfu + " CFU", S.aa && "A.A. " + S.aa].filter(Boolean).map(esc).join(" · ")}</p></div>
  ${S.scheda.map((s) => `<details class="card section" ${/programma|modalit/i.test(s.title) ? "open" : ""}><summary style="font-weight:750;cursor:pointer">${esc(s.title)}</summary><div class="prose" style="margin-top:10px;font-size:15px">${s.html}</div></details>`).join("")}`;

views.altro = () => `
  <div class="list">
    <a class="row" href="#/preferiti"><span class="lnum" style="background:var(--warn-soft);color:#f5b301">${I.star}</span><div class="grow"><div class="t">Preferiti</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>
    <a class="row" href="#/errori"><span class="lnum" style="background:var(--ko-soft);color:var(--ko)">${I.redo}</span><div class="grow"><div class="t">Ripasso errori</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>
    <a class="row" href="#/scheda"><span class="lnum">${I.doc}</span><div class="grow"><div class="t">Scheda corso</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>
    <a class="row" href="#/impostazioni"><span class="lnum">${I.gear}</span><div class="grow"><div class="t">Impostazioni</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</a>
    <button class="row" data-act="addsubj"><span class="lnum">${I.plus}</span><div class="grow"><div class="t">Aggiungi una materia</div></div>${I.chev.replace("<svg", '<svg class="chev"')}</button>
  </div>`;

function qList(qs, empty) {
  if (!qs.length) return `<div class="card empty">${I.star}<p>${empty}</p></div>`;
  return qs.map((q, i) => reviewItem(q, { idx: i + 1 })).join("");
}
views.preferiti = () => {
  const st = stats();
  const qs = st.fav.map((id) => S.byId[id]).filter(Boolean);
  return `${qs.length ? `<button class="btn block" data-act="favquiz" style="margin-bottom:14px">Esercitati sui preferiti (${qs.length})</button>` : ""}
    ${qList(qs, "Tocca la stella su una domanda per salvarla qui.")}`;
};
views.errori = () => {
  const st = stats();
  const qs = S.questions.filter((q) => validQ(q) && isToReview(st.q[q.id]));
  return `<p class="muted small" style="margin:0 4px 12px">Qui trovi le domande sbagliate almeno una volta. Escono dalla lista quando le azzecchi due volte di fila.</p>
    ${qs.length ? `<button class="btn block" data-act="review" style="margin-bottom:14px">Ripassa ${qs.length} domande</button>` : ""}
    ${qList(qs, "Nessun errore da ripassare. Ottimo lavoro!")}`;
};

views.impostazioni = () => `
  <div class="list">
    <div class="toggle-row"><b>Aspetto</b><div class="seg">${[["auto", "Auto"], ["light", "Chiaro"], ["dark", "Scuro"]].map(([k, t]) => `<button data-theme="${k}" class="${settings.theme === k ? "on" : ""}">${t}</button>`).join("")}</div></div>
    <div class="toggle-row"><div><b>Ordine casuale</b><div class="muted small">Mescola le domande nelle esercitazioni</div></div>
      <label class="switch"><input type="checkbox" data-set="shuffle" ${settings.shuffle ? "checked" : ""}><span></span></label></div>
  </div>
  <div class="section list">
    <button class="row" data-act="addsubj"><span class="lnum">${I.plus}</span><div class="grow"><div class="t">Aggiungi una materia</div><div class="s">Come caricare un nuovo paniere</div></div></button>
    <button class="row" data-act="reset"><span class="lnum" style="background:var(--ko-soft);color:var(--ko)">${I.redo}</span><div class="grow"><div class="t" style="color:var(--ko)">Azzera statistiche di ${esc(S.short || S.name)}</div><div class="s">Esami, risposte e preferiti di questa materia</div></div></button>
  </div>
  <p class="muted small" style="margin:18px 4px">I dati sono salvati solo su questo dispositivo. ${subjects.length} materie · ${S.questions.length} domande in ${esc(S.short)}.</p>`;

// ---------- runner
views.quiz = () => {
  if (!sess) { location.replace("#/"); return ""; }
  if (sess.subj !== S.id) { loadSubject(sess.subj).then(route); return ""; }
  document.body.classList.add("runner");
  const q = S.byId[sess.ids[sess.i]];
  const n = sess.ids.length, exam = sess.mode === "exam";
  const a = sess.ans[q.id];
  const done = sess.done[q.id];
  const st = stats();
  const fav = st.fav.includes(q.id);
  const answeredN = sess.ids.filter((id) => sess.ans[id] !== undefined && sess.ans[id] !== "").length;
  let body;
  if (q.type === "closed") {
    body = `<div class="opts">${q.o.map((o, i) => {
      let cls = "";
      if (done) cls = i === q.c ? "right" : i === a ? "wrong" : "";
      else if (a === i) cls = "sel";
      return `<button class="opt ${cls}" data-act="pick" data-i="${i}" ${done ? "disabled" : ""}><span class="l">${"ABCDE"[i]}</span><span class="ot">${o}</span></button>`;
    }).join("")}</div>`;
  } else {
    body = `<textarea class="answer" id="answer" placeholder="Scrivi qui la tua risposta…" ${done ? "readonly" : ""} autocapitalize="sentences" spellcheck="true">${esc(a || "")}</textarea>`;
  }
  let fb = "";
  if (done) fb = feedback(q, a);
  const last = sess.i === n - 1;
  const nav = sess.ids.map((id, i) => {
    const qq = S.byId[id], d = sess.done[id], aa = sess.ans[id];
    let cls = i === sess.i ? "cur " : "";
    if (!exam && d) cls += qq.type === "closed" ? (aa === qq.c ? "ok" : "ko") : gradeOpen(qq, aa).pts >= 2 ? "ok" : "ko";
    else if (aa !== undefined && aa !== "") cls += "done";
    if (qq.type === "open") cls += " open";
    return `<button class="${cls}" data-act="go" data-i="${i}">${i + 1}</button>`;
  }).join("");
  const primary = !exam && !done
    ? (q.type === "open" ? `<button class="btn" data-act="check">Verifica</button>` : `<button class="btn secondary" data-act="next">Salta</button>`)
    : last ? `<button class="btn" data-act="finish">${exam ? "Consegna" : "Termina"}</button>` : `<button class="btn" data-act="next">Avanti</button>`;
  return `
  <div class="run-top">
    <button class="icon-btn" data-act="quit" aria-label="Esci">${I.x}</button>
    <div class="title"><b>${esc(sess.title)}</b><small>${esc(sess.sub)} · ${answeredN}/${n} risposte</small></div>
    ${sess.deadline ? `<span class="timer" id="timer">--:--</span>` : ""}
    <button class="icon-btn" data-act="navtoggle" aria-label="Elenco domande">${I.grid}</button>
  </div>
  <div class="progress"><span style="width:${((sess.i + 1) / n) * 100}%"></span></div>
  <div class="run-grid">
    <div>
      <div class="card q-card">
        <div class="q-meta"><div class="grow" style="display:flex;gap:8px;flex-wrap:wrap">
          <span class="badge acc">Domanda ${sess.i + 1} di ${n}</span>
          ${q.type === "open" ? `<span class="badge warn">Aperta · 0–3 punti</span>` : ""}
          ${q.src !== "paniere" ? `<span class="badge">${q.src === "gen" ? "Generata" : "Extra"}</span>` : ""}
          ${q.u ? `<span class="badge ko">Risposta da verificare</span>` : ""}</div>
          <button class="icon-btn ${fav ? "on" : ""}" data-act="fav" data-id="${q.id}" aria-label="Preferito">${fav ? I.starFill : I.star}</button>
        </div>
        <div class="q-text">${q.t}</div>
        ${body}
        ${fb}
        <div class="run-actions">
          ${sess.i > 0 ? `<button class="btn secondary" data-act="prev" style="flex:0 0 56px" aria-label="Precedente">${I.left}</button>` : ""}
          ${primary}
        </div>
      </div>
      <p class="muted small" style="margin:10px 4px">${esc(q.ref)} · Lez. ${pad3(q.l)}</p>
    </div>
    <aside class="run-side card" id="runside">
      <b>Domande</b>
      <div class="navgrid" style="margin:12px 0 14px">${nav}</div>
      <button class="btn block ${exam ? "" : "secondary"}" data-act="finish">${exam ? "Consegna esame" : "Termina esercitazione"}</button>
    </aside>
  </div>`;
};

function feedback(q, a) {
  const theory = q.th || `#/teoria/${S.id}/${q.l}`;
  const hasTheory = q.th || S.lessons.find((l) => l.n === q.l)?.theory;
  const tlink = hasTheory ? `<a href="${theory}" data-act="theorylink">Vai alla teoria →</a>` : "";
  if (q.type === "closed") {
    const ok = a === q.c;
    return `<div class="feedback ${ok ? "ok" : "ko"}"><h3>${ok ? "✓ Corretto" : a === undefined ? "Risposta corretta: " + "ABCDE"[q.c] : "✕ Sbagliato — corretta: " + "ABCDE"[q.c]}</h3>
      ${q.e ? `<details class="more" ${ok ? "" : "open"}><summary>Spiegazione</summary><div class="explain">${q.e}</div></details>` : ""}
      <div style="margin-top:10px;font-weight:600">${tlink}</div></div>`;
  }
  const g = gradeOpen(q, a);
  return `<div class="feedback ${g.pts >= 2 ? "ok" : g.pts === 1 ? "mid" : "ko"}"><h3>${g.pts}/3 punti <span class="muted small" style="font-weight:500">correzione automatica indicativa</span></h3>
    ${g.hit.length || g.miss.length ? `<div class="kw">${g.hit.map((k) => `<span class="badge ok">✓ ${esc(k.split("|")[0])}</span>`).join("")}${g.miss.map((k) => `<span class="badge ko">✕ ${esc(k.split("|")[0])}</span>`).join("")}</div>` : ""}
    ${g.hasNum ? `<div class="small" style="margin-top:6px">${g.numOk ? "✓ Risultato numerico corretto" : "✕ Risultato numerico non trovato o diverso"}</div>` : ""}
    <details class="more" open><summary>Risposta modello</summary><div class="explain ans">${q.a || "<p class='muted'>Non disponibile</p>"}</div></details>
    <div style="margin-top:10px;font-weight:600">${tlink}</div></div>`;
}

function reviewItem(q, { idx, a, p, showAnswer = true } = {}) {
  const st = stats();
  const fav = st.fav.includes(q.id);
  let status = "na", sym = "–";
  if (p !== undefined) {
    if (q.type === "closed") { status = a === undefined ? "na" : p ? "ok" : "ko"; sym = a === undefined ? "–" : p ? "✓" : "✕"; }
    else { status = !a ? "na" : p >= 2 ? "ok" : p === 1 ? "mid" : "ko"; sym = a ? p : "–"; }
  }
  const snippet = q.t.replace(/<img[^>]*>/g, "[figura]").replace(/<[^>]+>/g, " ").slice(0, 140);
  let body = `<div class="q-text" style="font-size:16px">${q.t}</div>`;
  if (q.type === "closed") {
    if (p !== undefined && a !== undefined && a !== q.c) body += `<div class="ans-line ko"><b>La tua risposta</b>${"ABCDE"[a]}. ${q.o[a]}</div>`;
    if (p !== undefined && a === undefined) body += `<div class="ans-line na"><b>Non risposta</b>0 punti</div>`;
    if (showAnswer) body += `<div class="ans-line ok"><b>Risposta corretta</b>${"ABCDE"[q.c]}. ${q.o[q.c]}</div>`;
    if (q.e) body += `<details class="more"><summary>Spiegazione</summary><div class="explain">${q.e}</div></details>`;
  } else {
    if (p !== undefined) {
      const g = gradeOpen(q, a);
      body += `<div class="ans-line ${a ? (p >= 2 ? "ok" : "ko") : "na"}"><b>La tua risposta · ${p}/3</b>${a ? esc(a).replace(/\n/g, "<br>") : "Non risposta"}</div>`;
      if (a && (g.hit.length || g.miss.length)) body += `<div class="kw">${g.hit.map((k) => `<span class="badge ok">✓ ${esc(k.split("|")[0])}</span>`).join("")}${g.miss.map((k) => `<span class="badge ko">✕ ${esc(k.split("|")[0])}</span>`).join("")}</div>`;
    }
    body += `<details class="more" ${p !== undefined ? "open" : ""}><summary>Risposta modello</summary><div class="explain ans">${q.a || ""}</div></details>`;
  }
  const hasTheory = q.th || S.lessons.find((l) => l.n === q.l)?.theory;
  body += `<div style="display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap">
    ${hasTheory ? `<a class="btn secondary" style="min-height:40px;font-size:14px" href="${q.th || `#/teoria/${S.id}/${q.l}`}">${I.book}Teoria · Lez. ${pad3(q.l)}</a>` : `<span class="muted small">Teoria non ancora disponibile</span>`}
    <span class="muted small" style="flex:1">${esc(q.ref)}</span>
    <button class="icon-btn ${fav ? "on" : ""}" data-act="fav" data-id="${q.id}" aria-label="Preferito">${fav ? I.starFill : I.star}</button></div>`;
  return `<details class="card review-item" data-status="${status}" data-type="${q.type}">
    <summary><span class="st ${status}">${sym}</span><div class="qt"><span class="snip">${idx ? `<span class="muted">${idx}.</span> ` : ""}${esc(snippet)}</span><span class="when-open muted">${idx ? `Domanda ${idx}` : "Domanda"}${q.src !== "paniere" ? ` · ${q.src === "gen" ? "generata" : "extra"}` : ""}</span></div></summary>
    <div class="body">${body}</div></details>`;
}

views.risultati = (id) => {
  document.body.classList.remove("runner");
  const st = stats();
  const r = id === "pratica" ? st.lastPractice : st.exams.find((e) => e.id === id);
  if (!r) return `<div class="card empty"><p>Risultato non trovato.</p></div>`;
  const items = r.items.filter((it) => S.byId[it.id]);
  const nClosed = items.filter((it) => S.byId[it.id].type === "closed").length;
  const okClosed = items.filter((it) => S.byId[it.id].type === "closed" && it.p).length;
  const wrong = items.filter((it) => (S.byId[it.id].type === "closed" ? !it.p : it.p < 2));
  const exam = r.mode === "exam";
  return `
  <div class="score ${exam && !r.passed ? "fail" : !exam && r.score / r.max < 0.6 ? "fail" : ""}">
    <div class="big">${r.score}<small>/${r.max}</small></div>
    <div class="res">${exam ? (r.passed ? "Promosso 🎉" : "Non superato") : `${pct(r.score, r.max)}% di punteggio`}</div>
    <div class="sub">${exam ? `Soglia 18/30 · ` : ""}Crocette ${okClosed}/${nClosed}${items.length > nClosed ? ` · Aperte ${r.openPts}/${(items.length - nClosed) * 3}` : ""} · ${fmtTime(r.dur)}</div>
  </div>
  <div class="section grid g2">
    ${exam ? `<button class="btn" data-act="exam">${I.redo}Nuovo esame</button>` : `<a class="btn" href="#/studio">${I.study}Studio</a>`}
    <button class="btn secondary" data-act="retrywrong" data-id="${id}" ${wrong.length ? "" : "disabled"}>Ripassa ${wrong.length} errori</button>
  </div>
  <div class="section">
    <div class="chips" id="filters">
      ${[["all", "Tutte", items.length], ["ko", "Sbagliate", items.filter((it) => (S.byId[it.id].type === "closed" ? it.a !== undefined && !it.p : it.a && it.p < 2)).length],
        ["ok", "Corrette", items.filter((it) => (S.byId[it.id].type === "closed" ? it.p : it.p >= 2)).length],
        ["na", "Non date", items.filter((it) => it.a === undefined || it.a === "").length], ["open", "Aperte", items.length - nClosed]]
        .map(([k, t, c], i) => `<button class="chip ${i ? "" : "on"}" data-filter="${k}">${t} · ${c}</button>`).join("")}
    </div>
    <div id="review">${items.map((it, i) => reviewItem(S.byId[it.id], { idx: i + 1, a: it.a, p: it.p })).join("")}</div>
  </div>`;
};

// ---------- router
let timerInt = null;
async function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  let [name, ...args] = parts;
  if (name === "teoria" && args[0] && args[0] !== S.id && subjects.some((s) => s.id === args[0])) await loadSubject(args[0]);
  if (name === "teoria") args = args.slice(0);
  const view = views[name] ?? views[""];
  if (name !== "quiz") document.body.classList.remove("runner");
  renderShell(name in views ? name : "");
  const html = await view(...args);
  $("#view").innerHTML = html;
  renderMath($("#view"));
  if (name !== "teoria" || !args[2]) window.scrollTo(0, 0);
  clearInterval(timerInt);
  if (name === "quiz" && sess?.deadline) {
    const tick = () => {
      const left = (sess.deadline - Date.now()) / 1000;
      const t = $("#timer");
      if (t) { t.textContent = fmtTime(Math.max(0, left)); t.classList.toggle("low", left < 300); }
      if (left <= 0) { clearInterval(timerInt); toast("Tempo scaduto: esame consegnato"); gradeSession(); }
    };
    tick(); timerInt = setInterval(tick, 1000);
  }
  if (name === "quiz") $("#answer")?.addEventListener("input", (e) => { sess.ans[S.byId[sess.ids[sess.i]].id] = e.target.value; saveSess(); });
}

// ---------- azioni
function openSheet(html) {
  const sh = $("#sheet");
  sh.innerHTML = `<div class="panel" role="dialog"><div class="grab"></div>${html}</div>`;
  sh.hidden = false;
}
const closeSheet = () => ($("#sheet").hidden = true);
$("#sheet").addEventListener("click", (e) => { if (e.target.id === "sheet") closeSheet(); });

document.addEventListener("click", async (e) => {
  const el = e.target.closest("[data-act],[data-timer],[data-theme],[data-filter]");
  if (!el) return;
  if (el.dataset.timer !== undefined) { settings.timer = +el.dataset.timer; saveSettings(); return route(); }
  if (el.dataset.theme) { settings.theme = el.dataset.theme; saveSettings(); return route(); }
  if (el.dataset.filter) {
    $$("#filters .chip").forEach((c) => c.classList.toggle("on", c === el));
    const f = el.dataset.filter;
    $$("#review .review-item").forEach((it) => {
      const s = it.dataset.status;
      it.hidden = !(f === "all" || (f === "open" ? it.dataset.type === "open" : f === "ok" ? s === "ok" : f === "ko" ? s === "ko" || s === "mid" : s === "na"));
    });
    return;
  }
  const act = el.dataset.act;
  const st = () => stats();
  switch (act) {
    case "subjects":
      openSheet(`<h3>Materia</h3><div class="list">${subjects.map((s) => `<button class="row" data-act="setsubj" data-id="${s.id}">
        <i class="dot" style="background:${s.color}"></i><div class="grow"><div class="t">${esc(s.name)}</div><div class="s">${s.docente ? "Prof. " + esc(s.docente) + " · " : ""}${s.nq} domande</div></div>
        ${s.id === S.id ? `<span class="badge acc">Attiva</span>` : ""}</button>`).join("")}
        <button class="row" data-act="addsubj"><span class="lnum">${I.plus}</span><div class="grow"><div class="t">Aggiungi materia</div></div></button></div>`);
      break;
    case "setsubj": closeSheet(); selLessons = new Set(); await loadSubject(el.dataset.id); route(); break;
    case "addsubj":
      openSheet(`<h3>Aggiungere una materia</h3><div class="prose" style="font-size:15px">
        <ol><li>Metti nella cartella del progetto una nuova cartella con il nome della materia (es. <code>Analisi</code>).</li>
        <li>Dentro metti il <b>paniere</b> in PDF (va bene anche annotato: le risposte evidenziate vengono riconosciute), la <b>scheda del corso</b> e, se li hai, i riassunti di teoria.</li>
        <li>Chiedi a Claude: <i>“aggiungi la materia Analisi”</i>. Estrae domande, risposte, teoria e risposte modello, e la materia compare qui.</li></ol></div>
        <button class="btn block" data-act="closesheet">Ho capito</button>`);
      break;
    case "closesheet": closeSheet(); break;
    case "exam": newExam(); break;
    case "quick": practice(shuffle(S.questions.filter(validQ)).slice(0, 20), "Quiz veloce"); break;
    case "review": {
      const s = st();
      practice(S.questions.filter((q) => validQ(q) && isToReview(s.q[q.id])), "Ripasso errori");
      break;
    }
    case "favquiz": practice(st().fav.map((id) => S.byId[id]).filter(Boolean), "Preferiti"); break;
    case "lesson": practiceLessons([+el.dataset.n]); break;
    case "sel": {
      const n = +el.dataset.n;
      selLessons.has(n) ? selLessons.delete(n) : selLessons.add(n);
      const y = window.scrollY; await route(); window.scrollTo(0, y); break;
    }
    case "selall": {
      selLessons = selLessons.size ? new Set() : new Set(S.lessons.filter((L) => (S.byLesson[L.n] || []).some(validQ)).map((L) => L.n));
      const y = window.scrollY; await route(); window.scrollTo(0, y); break;
    }
    case "startsel": practiceLessons([...selLessons].sort((a, b) => a - b)); break;
    case "fav": {
      e.preventDefault(); e.stopPropagation();
      const s = st(), id = el.dataset.id;
      const i = s.fav.indexOf(id);
      i >= 0 ? s.fav.splice(i, 1) : s.fav.push(id);
      saveStats(s);
      el.classList.toggle("on", i < 0);
      el.innerHTML = i < 0 ? I.starFill : I.star;
      toast(i < 0 ? "Aggiunta ai preferiti" : "Rimossa dai preferiti");
      break;
    }
    case "reset":
      if (confirm(`Azzerare tutte le statistiche di ${S.short || S.name}?`)) { store.del(statKey()); toast("Statistiche azzerate"); route(); }
      break;
    case "retrywrong": {
      const s = st();
      const r = el.dataset.id === "pratica" ? s.lastPractice : s.exams.find((x) => x.id === el.dataset.id);
      practice(r.items.filter((it) => (S.byId[it.id]?.type === "closed" ? !it.p : it.p < 2)).map((it) => S.byId[it.id]).filter(Boolean), "Ripasso errori");
      break;
    }
    // runner
    case "pick": {
      const q = S.byId[sess.ids[sess.i]];
      sess.ans[q.id] = +el.dataset.i;
      if (sess.mode === "practice") {
        sess.done[q.id] = true;
        const s = st(); recordAnswer(s, q.id, sess.ans[q.id] === q.c); saveStats(s);
      }
      saveSess(); route(); break;
    }
    case "check": {
      const q = S.byId[sess.ids[sess.i]];
      sess.ans[q.id] = $("#answer")?.value || "";
      if (!sess.ans[q.id].trim()) return toast("Scrivi prima una risposta");
      sess.done[q.id] = true;
      const s = st(); recordAnswer(s, q.id, gradeOpen(q, sess.ans[q.id]).pts >= 2); saveStats(s);
      saveSess(); route(); break;
    }
    case "next": if (sess.i < sess.ids.length - 1) { sess.i++; saveSess(); route(); } break;
    case "prev": if (sess.i > 0) { sess.i--; saveSess(); route(); } break;
    case "go": sess.i = +el.dataset.i; saveSess(); $("#runside")?.classList.remove("open"); route(); break;
    case "navtoggle": $("#runside")?.classList.toggle("open"); $("#runside")?.scrollIntoView({ behavior: "smooth" }); break;
    case "finish": {
      if (sess.mode === "exam") {
        const missing = sess.ids.filter((id) => sess.ans[id] === undefined || sess.ans[id] === "").length;
        if (!confirm(missing ? `Hai ${missing} domande senza risposta. Consegnare comunque?` : "Consegnare l'esame?")) return;
        gradeSession();
      } else finishPractice();
      break;
    }
    case "quit":
      if (sess.mode === "practice") finishPractice();
      else if (confirm("Uscire? L'esame in corso verrà annullato.")) { sess = null; store.del("ecq:session"); location.hash = "#/"; }
      break;
    case "theorylink": if (sess?.mode === "practice") saveSess(); break;
  }
});
document.addEventListener("change", (e) => {
  const k = e.target.dataset.set;
  if (k) { settings[k] = e.target.checked; saveSettings(); route(); }
});
window.addEventListener("scroll", () => $("#topbar").classList.toggle("scrolled", scrollY > 4), { passive: true });
window.addEventListener("hashchange", route);

// ---------- avvio
(async function init() {
  subjects = await fetch("data/subjects.json", { cache: "no-cache" }).then((r) => r.json());
  const want = store.get("ecq:subject", subjects[0].id);
  await loadSubject(subjects.some((s) => s.id === want) ? want : subjects[0].id);
  if (sess && location.hash !== "#/quiz" && !location.hash.startsWith("#/teoria")) location.hash = "#/quiz";
  route();
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    await navigator.serviceWorker.register("sw.js");
    // uso offline: scarica in background tutte le materie e la teoria (il service worker le mette in cache)
    setTimeout(async () => {
      for (const s of subjects) {
        const d = loaded[s.id] || (await fetch(`data/${s.id}/subject.json?v=${s.v}`).then((r) => r.json()).catch(() => null));
        for (const L of d?.lessons || []) if (L.theory) await fetch(`data/${s.id}/t/${L.n}.html?v=${s.v}`).catch(() => {});
      }
    }, 4000);
  }
})();
