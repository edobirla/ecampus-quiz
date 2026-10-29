// Controllo dell'unione dei backup: node tools/test_sync.mjs
import assert from "node:assert/strict";
import { migrate, mergeStats } from "../app/sync.js";

// vecchio formato (solo contatori) → log equivalente
const old = migrate({ q: { a: { ok: 3, ko: 1, st: 2, t: 10000 } }, exams: [], fav: [] });
assert.equal(old.log.length, 4);
assert.deepEqual({ ...old.q.a, tc: 0 }, { ok: 3, ko: 1, st: 2, t: 10000, l: 1, tc: 0 });

// iPad e telefono con storie diverse
const ipad = { log: [["a", 1, 100], ["b", 0, 200]], exams: [{ id: "e1", d: 1 }], fav: ["a"] };
const tel = { log: [["b", 1, 300]], exams: [{ id: "e2", d: 2 }], fav: ["b"] };
const m1 = mergeStats(tel, ipad).st;                 // carico il backup dell'iPad sul telefono
assert.equal(m1.log.length, 3);
assert.deepEqual({ ...m1.q.b, tc: 0 }, { ok: 1, ko: 1, st: 1, t: 300, l: 1, tc: 0 });
assert.deepEqual(m1.exams.map((e) => e.id), ["e1", "e2"]);
const m2 = mergeStats(ipad, m1).st;                  // e poi quello del telefono sull'iPad
assert.deepEqual(m2.q, m1.q);
const again = mergeStats(m2, m1);                    // ricaricare lo stesso backup non cambia niente
assert.deepEqual(again.added, { answers: 0, exams: 0 });

// correzione a mano: vince la versione modificata più di recente
const fixed = mergeStats({ log: [["b", 0, 200]], exams: [{ id: "e1", d: 1, score: 17 }] },
  { log: [["b", 1, 200, 999]], exams: [{ id: "e1", d: 1, score: 18, mt: 999 }] }).st;
assert.equal(fixed.q.b.ok, 1);
assert.equal(fixed.exams[0].score, 18);

// esiti degli esami veri: "in attesa" aggiornato su un dispositivo vince sull'altro, la cancellazione si propaga
const rr = mergeStats({ real: [{ id: "r1", date: "2026-10-20", res: "wait", mt: 1 }] },
  { real: [{ id: "r1", date: "2026-10-20", res: "ok", grade: 27, mt: 2 }, { id: "r2", date: "2026-06-01", res: "ko", mt: 1, del: 1 }] });
assert.deepEqual(rr.st.real.map((r) => [r.id, r.res, !!r.del]), [["r2", "ko", true], ["r1", "ok", false]]);
assert.equal(mergeStats(rr.st, rr.st).added.exams, 0);
console.log("ok");

// appunti: la cancellazione più recente vince, e riunire non duplica
import { mergeNotes } from "../app/sync.js";
const ipadN = { hl: { h1: { q: "entropia", c: 1, t: 10 } }, ink: { s1: { p: [1, 2], t: 10 } } };
const telN = { hl: { h1: { del: 1, t: 20 }, h2: { q: "gas", c: 2, t: 15 } } };
const n1 = mergeNotes(telN, ipadN).notes;
assert.equal(n1.hl.h1.del, 1);          // cancellata sul telefono dopo: resta cancellata
assert.ok(n1.hl.h2 && n1.ink.s1);
assert.equal(mergeNotes(n1, ipadN).added, 0);
console.log("ok appunti");

// serie "saputa": con aiuti non sale, due giuste ravvicinate contano una volta sola, le vecchie risposte contano come prima
const H = 36e5;
const r1 = mergeStats({ log: [["a", 1, 0, 0, 1], ["a", 1, 1 * H, 0, 0], ["a", 1, 2 * H, 0, 0], ["a", 1, 30 * H, 0, 0]], exams: [], fav: [] }, {}).st.q.a;
assert.equal(r1.ok, 4); assert.equal(r1.st, 2); assert.equal(r1.l, 1);       // aiuti escluso, 1h e 2h contano una volta, 30h un'altra
const r2 = mergeStats({ log: [["a", 1, 0], ["a", 1, 1000], ["a", 1, 2000]], exams: [], fav: [] }, {}).st.q.a;
assert.equal(r2.st, 3);                                                        // vecchie risposte: invariate
const r3 = mergeStats({ log: [["a", 1, 0, 0, 0], ["a", 0, H, 0, 0]], exams: [], fav: [] }, {}).st.q.a;
assert.equal(r3.st, 0); assert.equal(r3.l, 0);
console.log("ok serie");

// impostazioni per materia: vince l'ultima modifica, anche una data cancellata; valori vecchi senza data restano locali
import { mergeSettings } from "../app/sync.js";
const K = ["examDate", "examBooked"];
const ipadS = { examDate: { fisica: "2026-11-10", chimica: "2026-12-01" }, examBooked: {}, smt: { "examDate:fisica": 10 } };
const telS = { examDate: { fisica: "2026-11-20" }, examBooked: { fisica: true }, smt: { "examDate:fisica": 20, "examDate:chimica": 30, "examBooked:fisica": 20 } };
const m = mergeSettings(structuredClone(ipadS), telS, K);
assert.equal(m.examDate.fisica, "2026-11-20");      // modificata dopo sul telefono
assert.equal(m.examDate.chimica, undefined);        // cancellata sul telefono (smt senza valore)
assert.equal(m.examBooked.fisica, true);
assert.equal(mergeSettings(structuredClone(telS), ipadS, K).examDate.fisica, "2026-11-20"); // il telefono non torna indietro
const oldS = mergeSettings({ examDate: { fisica: "A" }, smt: {} }, { examDate: { fisica: "B", geo: "C" } }, ["examDate"]);
assert.equal(oldS.examDate.fisica, "A"); assert.equal(oldS.examDate.geo, "C");
console.log("ok impostazioni");
