// Correzione automatica delle domande aperte (0–3 punti), offline.
// Tre segnali: parole chiave della risposta modello, vocabolario in comune con la risposta modello, risultati numerici.
// ponytail: euristica lessicale, non capisce il significato; per questo l'app la presenta come "indicativa".

export const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const tokens = (s) => norm(s).split(/[^a-z0-9]+/).filter(Boolean);
// parole funzionali lunghe da non contare nel confronto di vocabolario
const STOP = new Set(("perche essere quindi anche della delle dello degli nella nelle negli sulla sulle quando questo questa " +
  "questi queste quello quella sempre stato stata molto ancora oppure infatti allora poiche mentre inoltre tutto tutti " +
  "ciascuno ognuno avere hanno viene vengono possono potrebbe dove come cosa").split(" "));

export function parseNumbers(s) {
  const out = [];
  const re = /(-?\d+(?:[.,]\d+)?)\s*(?:(?:[x×*·]|\\times|\\cdot)\s*10\s*\^?\s*\(?\s*([−-]?\d+)\)?|e([−-]?\d+))?/gi;
  for (const m of s.matchAll(re)) {
    const base = parseFloat(m[1].replace(",", "."));
    const ex = m[2] ?? m[3];
    const v = ex !== undefined ? base * 10 ** parseInt(ex.replace("−", "-")) : base;
    if (isFinite(v)) out.push(v);
  }
  return out;
}

// una parola chiave può avere sinonimi "a|b"; le parole si confrontano per prefisso (5 lettere),
// così "ionizzazione" riconosce anche "ionizzare"
function kwMatch(k, words, text) {
  return k.split("|").some((alt) => {
    alt = norm(alt.trim());
    if (!alt) return false;
    if (/[^a-z0-9]/.test(alt)) return text.includes(alt); // frasi o simboli: confronto testuale
    return alt.length >= 5 ? words.some((w) => w.startsWith(alt.slice(0, 5))) : words.includes(alt);
  });
}

export function gradeOpen(q, answer) {
  const text = norm(answer || "");
  const words = tokens(text);
  const kw = (q.kw || []).filter((k) => !k.startsWith("="));
  const hit = kw.filter((k) => kwMatch(k, words, text));
  const miss = kw.filter((k) => !hit.includes(k));

  const expected = [...(q.n || []), ...(q.kw || []).filter((k) => k.startsWith("=")).map((k) => parseFloat(k.slice(1)))];
  const given = parseNumbers(answer || "");
  const numOk = expected.length > 0 && expected.some((e) => given.some((g) => Math.abs(g - e) <= Math.abs(e) * 0.03));

  // quanta parte del vocabolario "tecnico" della risposta dello studente compare nella risposta modello
  const sigle = text.match(/\b\d+[a-z]{1,2}\d?\b|\bsp\d\b/g) || [];
  const stems = [...new Set([...words.filter((w) => w.length >= 5 && !STOP.has(w)).map((w) => w.slice(0, 6)), ...sigle])];
  const ms = new Set(q.ms || []);
  const common = stems.filter((s) => ms.has(s)).length;
  const overlap = ms.size ? Math.min(1, (1.5 * common) / Math.max(8, Math.min(stems.length, 25))) : 0;
  const lengthFactor = Math.min(1, words.length / 25);

  const wk = !kw.length ? 0 : q.ka ? 0.2 : 0.65; // parole chiave scritte a mano pesano di più di quelle automatiche
  let s = (wk ? wk * (hit.length / kw.length) : 0) + (1 - wk) * overlap * lengthFactor;
  if (expected.length) s = 0.5 * s + 0.5 * (numOk ? 1 : 0);
  let pts = s >= 0.55 ? 3 : s >= 0.38 ? 2 : s >= 0.2 ? 1 : 0;
  if (words.length < 5 && !numOk) pts = 0;
  return { pts, hit, miss, numOk, hasNum: expected.length > 0 };
}
