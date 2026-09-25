// Controllo rapido della correzione automatica: node tools/test_grade.mjs
import assert from "node:assert/strict";
import fs from "node:fs";
import { gradeOpen } from "../app/grade.js";

const load = (s) => JSON.parse(fs.readFileSync(new URL(`../app/data/${s}/subject.json`, import.meta.url)));
const fis = load("fisica"), chim = load("chimica");
const q = (d, id) => d.questions.find((x) => x.id === id);

// risposta buona, parole diverse dal modello → punteggio alto
const good = "La posizione è il vettore posizione rispetto a un sistema di riferimento. La velocità media è lo spostamento diviso il tempo, la velocità istantanea è la derivata della posizione, cioè il limite per delta t che tende a zero; si misura in m/s. L'accelerazione media è la variazione di velocità nel tempo, quella istantanea la derivata della velocità, in m/s^2.";
assert.ok(gradeOpen(q(fis, "p5-34"), good).pts >= 2, "risposta buona deve prendere almeno 2");
// risposta vuota o fuori tema → 0
assert.equal(gradeOpen(q(fis, "p5-34"), "").pts, 0);
assert.ok(gradeOpen(q(fis, "p5-34"), "La fotosintesi clorofilliana avviene nelle foglie delle piante grazie alla luce del sole e produce ossigeno.").pts <= 1);
// esercizio numerico: risultato giusto → almeno 2
const kp = q(chim, "p42-24");
assert.ok(gradeOpen(kp, "Moli iniziali 3,94e-3, all'equilibrio 3,27e-3, pressioni parziali 0,268 e 0,110 atm, quindi Kp = 0,045").pts >= 2);
// extra con terne di numeri quantici (caso segnalato in test manuale)
const x11 = chim.questions.find((x) => x.ref.startsWith("Extra 11"));
const ans = "a) non possibile perché l deve essere minore di n (l massimo 1). b) possibile: orbitale 3d, m tra -2 e +2. c) possibile: orbitale 4f. d) non possibile perché m deve stare tra -l e +l, cioè tra -3 e +3.";
console.log("Extra 11:", gradeOpen(x11, ans));
assert.ok(gradeOpen(x11, ans).pts >= 2);
console.log("ok");
