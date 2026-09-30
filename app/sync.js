// Statistiche di una materia e unione dei backup tra dispositivi.
// Forma: { q: {id: {ok, ko, st, t, l, a}}, log: [[id, ok(0/1), t, mt?, aiuti?]], exams: [{id, mt?…}], fav: [id], lastPractice }
// aiuti (5° campo, solo nelle risposte nuove): 1 = data con indizi o teoria, 0 = senza aiuti. Le risposte vecchie (senza il campo) contano come senza aiuti.
// st = serie di risposte giuste SENZA aiuti (una sola conta per mezza giornata: rispondere 3 volte di fila oggi non vale "saputa");
// l = l'ultima risposta era giusta, a = l'ultima era giusta ma con aiuti.
// Il log è la fonte di verità: ogni risposta ha chiave id+t, quindi unire due backup (anche più volte) non crea doppioni.
// q è un riassunto ricalcolato dal log. mt = momento dell'ultima correzione a mano: in caso di conflitto vince la più recente.

const HALF_DAY = 432e5;
export function rebuildQ(st) {
  st.log.sort((a, b) => a[2] - b[2]);
  st.q = {};
  for (const [id, ok, t, , aid] of st.log) {
    const r = (st.q[id] ||= { ok: 0, ko: 0, st: 0 });
    if (ok) {
      r.ok++;
      if (aid) r.a = 1; // con aiuti: non fa salire la serie
      else {
        delete r.a;
        if (aid === undefined || !r.st || t - r.tc >= HALF_DAY) { r.st++; r.tc = t; } // ponytail: le vecchie risposte contano come prima
      }
    } else { r.ko++; r.st = 0; delete r.a; delete r.tc; }
    r.l = ok ? 1 : 0;
    r.t = t;
  }
  return st;
}

// dati salvati prima del log (solo contatori): ricrea eventi equivalenti, con la serie di risposte giuste in fondo
export function migrate(st) {
  st = Object.assign({ q: {}, log: [], exams: [], fav: [] }, st);
  if (!st.log.length && Object.keys(st.q).length) {
    for (const [id, r] of Object.entries(st.q)) {
      const seq = [...Array(Math.max(0, r.ok - r.st)).fill(1), ...Array(r.ko).fill(0), ...Array(r.st).fill(1)];
      const t0 = r.t || 0;
      seq.forEach((ok, k) => st.log.push([id, ok, t0 - (seq.length - 1 - k) * 1000]));
    }
    rebuildQ(st);
  }
  return st;
}

export function mergeStats(local, incoming) {
  const a = migrate(local), b = migrate(incoming);
  const before = { log: a.log.length, exams: a.exams.length };
  const newer = (x, y) => ((y.mt || 0) > (x.mt || 0) ? y : x);
  const newer_e = (x, y) => ((y[3] || 0) > (x[3] || 0) ? y : x);
  const log = new Map(a.log.map((e) => [`${e[0]}|${e[2]}`, e]));
  for (const e of b.log) { const k = `${e[0]}|${e[2]}`; log.set(k, log.has(k) ? newer_e(log.get(k), e) : e); }
  const exams = new Map(a.exams.map((e) => [e.id, e]));
  for (const e of b.exams) exams.set(e.id, exams.has(e.id) ? newer(exams.get(e.id), e) : e);
  const out = {
    ...a,
    log: [...log.values()],
    exams: [...exams.values()].sort((x, y) => x.d - y.d),
    // ponytail: unione semplice, un preferito tolto su un solo dispositivo ricompare; servirebbe la data di rimozione
    fav: [...new Set([...a.fav, ...b.fav])],
    lastPractice: [a.lastPractice, b.lastPractice].filter(Boolean).sort((x, y) => y.d - x.d)[0],
  };
  rebuildQ(out);
  return { st: out, added: { answers: out.log.length - before.log, exams: out.exams.length - before.exams } };
}

// Appunti sulla teoria di una materia: { hl: {id: evidenziazione}, ink: {id: tratto di penna} }.
// Ogni voce ha t (ultima modifica); una cancellazione è una voce con del: 1, così si propaga agli altri dispositivi.
export function mergeNotes(local, incoming) {
  const out = { hl: { ...(local?.hl || {}) }, ink: { ...(local?.ink || {}) } };
  let added = 0;
  for (const k of ["hl", "ink"])
    for (const [id, v] of Object.entries(incoming?.[k] || {})) {
      const cur = out[k][id];
      if (!cur || (v.t || 0) > (cur.t || 0)) { if (!cur) added++; out[k][id] = v; }
    }
  return { notes: out, added };
}
