# eCampus Quiz

Web app (PWA, vanilla JS, nessun framework) per esercitarsi sui panieri eCampus: esami simulati 24 chiuse (1 pt) + 2 aperte (0–3 pt, correzione automatica offline), soglia 18/30, esercitazione per lezione, teoria, statistiche per materia, preferiti, ripasso errori. L'utente scrive in italiano: rispondi in italiano.

## Struttura

- `app/` — l'app servita così com'è (index.html, app.js, grade.js, styles.css, sw.js, vendor/katex). **Non modificare `app/data/` a mano**: è generata.
- `tools/` — pipeline dati:
  - `extract.py <paniere.pdf> <out.json> <cartella_img>` — domande, opzioni, risposte evidenziate (giallo/verde o X nella casella). Gestisce il font "cifrato" dei panieri eCampus (glyph id + tabella `SPECIAL`, da estendere se compaiono nuovi simboli: genera un atlante dei glifi come fatto per Chimica).
  - `scheda.py <scheda.pdf> <out.json>` — dati del corso dalla scheda (il nome della materia viene da qui).
  - `chem_map.py` — solo Chimica: collega il paniere ai riassunti (`90 Esercizi.md`, `95 Soluzioni.md`).
  - `build.mjs` (`cd tools && node build.mjs`) — unisce tutto in `app/data/<materia>/`.
  - `subjects.json` — elenco materie e percorsi dei file sorgente.
  - `content/<materia>/*.txt` — risposte scritte a mano (formato in testa a `build.mjs`: `L-N X spiegazione`, `X!` = incerta, `X` = nessuna opzione corretta, `APERTA` + `KW:` + righe `>`), `gen*.txt` domande generate, `teoria_src/*.md` teoria generata (`=== N` separa le lezioni).
  - `test_grade.mjs` — controllo della correzione automatica (`node tools/test_grade.mjs`).

## Aggiungere una materia

1. L'utente mette in `<Materia>/` il paniere PDF, la scheda corso PDF ed eventuali riassunti.
2. `python3 tools/extract.py "<Materia>/paniere.pdf" tools/raw/<id>.json app/data/<id>/img` e `python3 tools/scheda.py "<Materia>/scheda.pdf" tools/raw/<id>_scheda.json`.
3. Aggiungere la voce in `tools/subjects.json` (id, short, color, raw, scheda, eventuale theoryDir con file `Lez NN - Titolo.md`).
4. Scrivere in `tools/content/<id>/` le risposte mancanti (le chiuse non evidenziate), le risposte modello + KW delle aperte, i titoli delle lezioni (`## LN Titolo`), la teoria se manca (segnalata in app come "riassunto generato") e domande generate dove ce ne sono meno di 5 per lezione.
5. `cd tools && node build.mjs`, poi `node tools/test_grade.mjs`, poi prova nel browser (`.claude/launch.json` → server "app" su :8765).
6. Incrementare `VERSION` in `app/sw.js` quando cambiano i file dell'app.

## Convenzioni

- Domande: `src` = `paniere` | `extra` (esercizi dei riassunti dell'utente) | `gen` (generate da Claude, etichettate "Generata" nell'app). Non spacciare mai domande generate per paniere.
- Le risposte evidenziate nel PDF possono essere sbagliate: se lo sono, correggerle con `X!` e spiegarlo ("Nel PDF è evidenziata…").
- Statistiche in localStorage per materia (`ecq:stats:<id>`), nessun backend.
