# Come si scrive la teoria (tutte le materie, anche quelle future)

La teoria dell'app NON è un riassunto: è il testo su cui si studia per l'esame, al posto delle dispense. Deve essere
**esaustiva** (tutto quello che c'è nella dispensa della lezione, nessun argomento saltato), **spiegata** (il perché di
ogni passaggio, non solo il risultato) e **capibile** da chi legge l'argomento per la prima volta.

## Formato del file

`tools/content/<materia>/teoria_src/<gruppo>.md`, più lezioni per file:

    === 41 dispense
    SLIDES: 49, 50
    # Lezione 41 — Carica elettrica e legge di Coulomb

    ## Primo paragrafo
    ...

- `=== N dispense`: N = numero della lezione **del paniere** (non della dispensa). "dispense" = scritta dal materiale del
  prof (niente badge "riassunto generato"); senza dispensa di riferimento si scrive solo `=== N`.
- `SLIDES: a, b`: i PDF della cartella `slidesDir` (vedi `tools/subjects.json`) che trattano la lezione, nome del file
  senza `.pdf`, separati da virgola. L'app li mostra come pulsanti "Dispensa" in testa alla lezione. Se manca, la build
  usa il PDF con lo stesso numero della lezione (giusto solo se la numerazione coincide).
- Titolo `# Lezione N — Titolo` invariato (lo usa la build). Le ancore `{#...}` già presenti vanno conservate: le
  domande ci puntano.

## Contenuto di ogni lezione

1. **Introduzione**: di cosa parla la lezione, perché serve, come si collega a quelle prima.
2. **Ogni concetto della dispensa**, nell'ordine della dispensa, con un `##`/`###` per argomento:
   - definizione precisa (quella del prof, riformulata in modo chiaro);
   - spiegazione a parole del significato e dell'intuizione (cosa succede fisicamente/geometricamente/chimicamente);
   - formule in TeX (`$…$`, `$$…$$`) con il significato e l'unità SI di **ogni** simbolo;
   - **dimostrazioni e derivazioni passo per passo** quando la dispensa le fa (ogni passaggio algebrico scritto, con il
     motivo: "derivo rispetto al tempo", "uso il teorema di …"), non solo il risultato;
   - casi particolari, limiti di validità, ipotesi.
3. **Esempi svolti** (`::: esempio`): tutti quelli della dispensa, rifatti con tutti i passaggi e i numeri, più quelli
   necessari a coprire i tipi di domanda del paniere. Mai solo il risultato.
4. `::: attenzione`: errori tipici, confusioni frequenti, trabocchetti delle domande.
5. `::: esame`: cosa chiedono le domande del paniere su questa lezione (aperte comprese) e come rispondere.
6. `::: sintesi` finale: elenco delle idee e formule chiave (è l'unica parte riassuntiva).

Tabelle markdown dove servono (confronti, classificazioni). Niente immagini copiate dalle dispense (il sito è
pubblico): figure descritte a parole o, se servono, con TeX. Stile: italiano semplice, frasi chiare, ma complete;
meglio un paragrafo in più che un passaggio saltato. Nessuna lettera di opzione delle domande.

## Copertura

Ogni domanda del paniere della lezione (`python3 tools/dump_q.py <materia> N-1 N-99`) deve trovare nella teoria quello
che serve per rispondere, aperte comprese. Leggere la dispensa per intero: `python3 -c "import fitz; ..."` (PyMuPDF)
ne estrae il testo pagina per pagina.

Dopo la scrittura: `cd tools && node build.mjs` non deve dare avvisi "PDF non trovato".
