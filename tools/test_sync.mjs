// Controllo dell'unione dei backup: node tools/test_sync.mjs
import assert from "node:assert/strict";
import { migrate, mergeStats } from "../app/sync.js";

// vecchio formato (solo contatori) → log equivalente
const old = migrate({ q: { a: { ok: 3, ko: 1, st: 2, t: 10000 } }, exams: [], fav: [] });
assert.equal(old.log.length, 4);
assert.deepEqual(old.q.a, { ok: 3, ko: 1, st: 2, t: 10000 });

// iPad e telefono con storie diverse
const ipad = { log: [["a", 1, 100], ["b", 0, 200]], exams: [{ id: "e1", d: 1 }], fav: ["a"] };
const tel = { log: [["b", 1, 300]], exams: [{ id: "e2", d: 2 }], fav: ["b"] };
const m1 = mergeStats(tel, ipad).st;                 // carico il backup dell'iPad sul telefono
assert.equal(m1.log.length, 3);
assert.deepEqual(m1.q.b, { ok: 1, ko: 1, st: 1, t: 300 });
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
console.log("ok");
