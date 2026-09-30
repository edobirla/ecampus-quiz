# eCampus Quiz

Web app (PWA, vanilla JS, nessun framework) per esercitarsi sui panieri eCampus: esami simulati 24 chiuse (1 pt) + 2 aperte (0–3 pt, griglia dei 3 criteri della scheda, correzione automatica offline e modificabile a mano), soglia 18/30, esame con teoria e indizi (fuori dalle statistiche dei voti), esercitazione per lezione, teoria, indizi a 3 livelli, studio di oggi (ripetizione spaziata + piano verso la data d'esame), ricerca, backup/ripristino tra dispositivi, statistiche per materia, preferiti, ripasso errori. L'utente scrive in italiano: rispondi in italiano.

## Struttura

- `app/` — l'app servita così com'è (index.html, app.js, grade.js, sync.js = statistiche e unione dei backup, notes.js = annotazioni sulla teoria, styles.css, sw.js, vendor/katex, vendor/geist = font Geist OFL).
  Annotazioni (anche dal pannello teoria aperto da una domanda: stessi dati): evidenziazioni ancorate al testo (CSS Custom Highlight API; si creano selezionando il testo o con lo strumento evidenziatore passando la Pencil sul testo, allineate alle parole intere) e penna ancorata al paragrafo (canvas; Apple Pencil disegna, il dito scorre, doppio tocco del dito = gomma ↔ strumento precedente; la gomma toglie anche le evidenziazioni). Salvate in `ecq:notes:<id>`, incluse nel backup con unione per id + data e cancellazioni propagate. **Non modificare `app/data/` a mano**: è generata.
- `tools/` — pipeline dati:
  - `extract.py <paniere.pdf> <out.json> <cartella_img>` — domande, opzioni, risposte evidenziate (giallo/verde o X nella casella). Gestisce il font "cifrato" dei panieri eCampus (glyph id + tabella `SPECIAL`, da estendere se compaiono nuovi simboli: genera un atlante dei glifi come fatto per Chimica).
  - `scheda.py <scheda.pdf> <out.json>` — dati del corso dalla scheda (il nome della materia viene da qui).
  - `chem_map.py` — solo Chimica: collega il paniere ai riassunti (`90 Esercizi.md`, `95 Soluzioni.md`).
  - `build.mjs` (`cd tools && node build.mjs`) — unisce tutto in `app/data/<materia>/`.
  - `subjects.json` — elenco materie e percorsi dei file sorgente.
  - `content/<materia>/hints_*.txt` — indizi: `@<id>` poi 3 righe `- …` (markdown/TeX), dal più vago al più vicino alla soluzione; `@id !! nota` = avviso di revisione. Le opzioni si citano SEMPRE come `[[B]]` (lettera dell'ordine originale): l'app mescola le risposte e converte il segnaposto nella lettera mostrata. Mai lettere in chiaro, mai scartare tutte le opzioni sbagliate. Per una nuova materia: generarli e poi revisionarli con subagenti a lotti di ~95 domande, verificando che coprano tutti gli id.
  - `content/<materia>/*.txt` — risposte scritte a mano (formato in testa a `build.mjs`: `L-N X spiegazione`, `X!` = incerta, `X` = nessuna opzione corretta, `APERTA` + `KW:` + righe `>`), `gen*.txt` domande generate, `teoria_src/*.md` teoria (`=== N` separa le lezioni; `=== N dispense` = riscritta dalle dispense della prof, senza badge "riassunto generato"). Fisica: le dispense in `Fisica/Lezioni/DD.pdf` hanno numerazione diversa dal paniere (es. dispensa 50 = lezione 41).
  - `test_grade.mjs` — controllo della correzione automatica (`node tools/test_grade.mjs`); `test_sync.mjs` — unione dei backup (`node tools/test_sync.mjs`).

## Aggiungere una materia

1. L'utente mette in `<Materia>/` il paniere PDF, la scheda corso PDF ed eventuali riassunti.
2. `python3 tools/extract.py "<Materia>/paniere.pdf" tools/raw/<id>.json app/data/<id>/img` e `python3 tools/scheda.py "<Materia>/scheda.pdf" tools/raw/<id>_scheda.json`.
3. Aggiungere la voce in `tools/subjects.json` (id, short, color, raw, scheda, `paniere: true` se l'esame è da paniere, eventuale theoryDir con file `Lez NN - Titolo.md`).
4. Scrivere in `tools/content/<id>/` le risposte mancanti (le chiuse non evidenziate), le risposte modello + KW delle aperte, i titoli delle lezioni (`## LN Titolo`), la teoria se manca (segnalata in app come "riassunto generato") e domande generate dove ce ne sono meno di 5 per lezione.
5. `cd tools && node build.mjs`, poi `node tools/test_grade.mjs`, poi prova nel browser (`.claude/launch.json` → server "app" su :8765).
6. Incrementare `VERSION` in `app/sw.js` quando cambiano i file dell'app.

## Convenzioni

- Domande: `src` = `paniere` | `extra` (esercizi dei riassunti dell'utente) | `gen` (generate da Claude, etichettate "Generata" nell'app). Non spacciare mai domande generate per paniere.
- Le risposte evidenziate nel PDF possono essere sbagliate: se lo sono, correggerle con `X!` e spiegarlo ("Nel PDF è evidenziata…").
- Ogni domanda ha UNA sola risposta giusta (come all'esame): se è ambigua si tiene quella del paniere, marcata `!`, con la nota nella spiegazione. Le opzioni duplicate nel PDF vengono tolte dalla build.
- Correzioni a domande extra (`x…`) e testi sbagliati: stesse righe dei file risposte con l'id `x114`, più `T: testo` per sostituire il testo della domanda. Se una spiegazione cita le lettere delle opzioni, l'app non mescola quella domanda.
- Spiegazioni delle chiuse: esaustive (tutti i passaggi, anche integrali/trigonometria/conversioni), con un paragrafo `**Errore tipico:**`; mai lettere delle opzioni in chiaro. Una riga di continuazione `  TRAP: dettaglio` segnala una domanda a trabocchetto: la build la toglie dalla spiegazione (campo `tr`) e l'app la mostra in evidenza nella soluzione. `python3 tools/dump_q.py <materia> L-N L-N` stampa domande e spiegazioni per rivederle.
- Studio (`app.js` `todayPlan`): piano adattivo ricalcolato a ogni apertura (giorni saltati, ritardo, voti delle simulazioni); prove d'esame complete a intervalli (7 → 4 → 1-2 giorni negli ultimi 5, vigilia solo ripasso leggero). Una domanda è "saputa" con `KNOWN`=3 risposte giuste di fila SENZA indizi né teoria, in momenti diversi (≥12 h); risposte con aiuti non fanno salire la serie (5° campo del log: 1 = con aiuti; le vecchie risposte senza il campo contano come prima, nessun progresso azzerato). Dopo ≥2 comparse e ultima risposta giusta la domanda torna "a prova" (senza indizi/teoria) nelle sessioni del piano. Le sessioni di esercitazione lasciate a metà si riprendono da Home/Studio.
- Statistiche in localStorage per materia (`ecq:stats:<id>`), nessun backend. Il `log` delle risposte (chiave id+momento, `[id, ok, t, mt, aiuti]`) è la fonte di verità: il backup si unisce senza doppioni (`app/sync.js`).

## Pubblicazione (GitHub Pages)

Sito: https://edobirla.github.io/ecampus-quiz/ — repo pubblico `edobirla/ecampus-quiz`, Pages servito dal branch `gh-pages` (= contenuto di `app/`). Il token di `gh` non ha lo scope `workflow`, quindi niente GitHub Actions. Per pubblicare un aggiornamento (dopo build e test, e dopo aver incrementato `VERSION` in `app/sw.js`):

    git add -A && git commit -m "…" && git push origin main
    git subtree split --prefix app -b gh-pages-tmp && git push -f origin gh-pages-tmp:gh-pages && git branch -D gh-pages-tmp

`gh` è in `~/.local/bin/gh`. I PDF e le cartelle `/Chimica`, `/Fisica` sono esclusi da `.gitignore` e non vanno mai pubblicati.
