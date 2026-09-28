=== 41 dispense
# Lezione 41 — Carica elettrica e legge di Coulomb

## Due tipi di carica
La carica elettrica è una proprietà della materia. Esiste in due tipi: positiva e negativa.
Cariche dello stesso segno si respingono. Cariche di segno opposto si attraggono.

Per convenzione il vetro strofinato con la lana diventa positivo. L'ambra e la plastica strofinate diventano negative.
Di solito un corpo è neutro: ha tante cariche positive quante negative. La forza elettrica compare quando questo equilibrio si rompe.

Da questa regola segue un ragionamento tipico:
- se A attrae B, A e B hanno segni opposti;
- se B respinge C, B e C hanno lo stesso segno;
- quindi A e C hanno segni opposti (e si attraggono).

## Carica elementare, quantizzazione, conservazione
Nell'atomo ci sono protoni (positivi), elettroni (negativi) e neutroni (neutri). Protone ed elettrone hanno carica uguale in modulo.
Questa carica si chiama carica elementare:

$$e = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$$

dove:
- $e$ = carica del protone; l'elettrone ha carica $-e$ (C, coulomb).

Due proprietà fondamentali:
- **Quantizzazione**: ogni carica è un multiplo intero di $e$. Nessuna carica isolata vale una frazione di $e$.
- **Conservazione**: la carica non si crea e non si distrugge. Si sposta soltanto.

Il coulomb è la carica trasportata in 1 s da una corrente di 1 A: $1\,\mathrm{C} = 1\,\mathrm{A \cdot s}$.

## Conduttori e isolanti
- **Isolanti** (vetro, ambra, plastica): le cariche restano ferme dove sono state messe.
- **Conduttori** (metalli): alcuni elettroni si muovono liberamente in tutto il corpo.

## Come si carica un corpo
- **Strofinio**: due corpi si scambiano elettroni. Chi li riceve diventa negativo, chi li cede diventa positivo.
- **Contatto**: un corpo carico tocca un conduttore neutro e gli cede parte della sua carica.
- **Induzione**: avvicini un corpo carico a un conduttore, senza toccarlo. Il lato vicino si carica di segno opposto, il lato lontano dello stesso segno. Se colleghi il conduttore a terra e poi lo stacchi, resta con una carica opposta a quella del corpo.

::: attenzione
Un corpo strofinato diventa negativo perché **riceve** elettroni dall'altro corpo. Non crea elettroni e non perde protoni. L'altro corpo resta positivo.
:::

## Legge di Coulomb
Due cariche puntiformi ferme si scambiano una forza. La forza è proporzionale al prodotto delle cariche e all'inverso del quadrato della distanza.

$$F = k\,\frac{|q_1 q_2|}{r^2} = \frac{1}{4\pi\varepsilon_0}\,\frac{|q_1 q_2|}{r^2}$$

dove:
- $F$ = modulo della forza (N);
- $q_1, q_2$ = le due cariche (C);
- $r$ = distanza tra le cariche (m);
- $k = \dfrac{1}{4\pi\varepsilon_0} \approx 8{,}99 \cdot 10^9\,\mathrm{N\,m^2/C^2}$ = costante di Coulomb;
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\,m^2)}$ = costante dielettrica del vuoto.

La forza è diretta lungo la retta che unisce le cariche. È repulsiva se i segni sono uguali, attrattiva se sono opposti.
Le due cariche subiscono forze uguali in modulo e opposte (terzo principio), anche se una carica è molto più grande dell'altra.

Come scala la forza:
| Cambiamento | Forza |
|---|---|
| raddoppi una carica | $2F$ |
| raddoppi entrambe le cariche | $4F$ |
| raddoppi la distanza | $F/4$ |
| dimezzi la distanza | $4F$ |

## Sovrapposizione: le forze si sommano come vettori
Con più cariche, la forza su una di esse è la **somma vettoriale** delle forze esercitate da ciascuna altra carica.
Contano i moduli ma anche le direzioni.

::: esempio
La carica C riceve 3 N da A e 4 N da B. La forza totale dipende dall'angolo tra le due forze:
- stessa direzione e verso: 7 N;
- versi opposti: 1 N;
- perpendicolari: $\sqrt{3^2 + 4^2} = 5$ N.

Senza conoscere le direzioni non si può rispondere.
:::

::: esempio
Tre cariche da $12\,\mu\mathrm{C}$ su una retta, distanti 50 cm l'una dall'altra. Punto P a 20 cm dalla carica centrale, sulla perpendicolare.
- Carica centrale: $E = kq/r^2 = 9 \cdot 10^9 \cdot 12 \cdot 10^{-6}/0{,}04 \approx 2{,}7 \cdot 10^6\,\mathrm{V/m}$.
- Ogni carica laterale dista $\sqrt{0{,}5^2 + 0{,}2^2} \approx 0{,}54$ m. Le componenti parallele alla retta si annullano. Le componenti perpendicolari si sommano: circa $2{,}8 \cdot 10^5\,\mathrm{V/m}$ in tutto.
- Totale: circa $3 \cdot 10^6\,\mathrm{V/m}$.
:::

::: sintesi
- Due tipi di carica: uguali si respingono, opposte si attraggono.
- Carica elementare $e = 1{,}6 \cdot 10^{-19}\,\mathrm C$; la carica è quantizzata e si conserva.
- Si elettrizza per strofinio, contatto o induzione: gli elettroni si spostano, non si creano.
- Coulomb: $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{|q_1q_2|}{r^2}$, forza lungo la congiungente.
- Con più cariche le forze si sommano come vettori.
:::

=== 42 dispense
# Lezione 42 — Campo elettrico

## Che cos'è il campo elettrico
Una carica modifica lo spazio attorno a sé. Un'altra carica non "sente" direttamente la prima: sente il campo nel punto in cui si trova.
In un punto P c'è un campo elettrico se una carica di prova messa in P subisce una forza elettrica.

Il campo è la forza sulla carica di prova divisa per il valore della carica:

$$\vec E = \frac{\vec F}{q_0}$$

dove:
- $\vec E$ = campo elettrico (N/C, equivalente a V/m);
- $\vec F$ = forza elettrica sulla carica di prova (N);
- $q_0$ = carica di prova, piccola per non disturbare le altre cariche (C).

Il campo è un vettore. Non dipende dalla carica di prova: se raddoppi $q_0$, raddoppia la forza, ma il rapporto resta uguale. Dipende solo dalle cariche che lo generano (le sorgenti) e dal punto.

## Campo di una carica puntiforme
Dividendo la forza di Coulomb per $q_0$:

$$E = \frac{1}{4\pi\varepsilon_0}\,\frac{Q}{r^2}$$

dove:
- $Q$ = carica che genera il campo (C);
- $r$ = distanza dalla carica (m);
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\,m^2)}$.

Il campo è radiale. Esce dalla carica se $Q > 0$, entra se $Q < 0$.
Con più cariche vale la sovrapposizione: il campo totale è la somma vettoriale dei campi di ogni carica.

## Forza su una carica nel campo
Conosciuto il campo, la forza su una carica $q$ è:

$$\vec F = q\,\vec E$$

Se $q > 0$ la forza ha il verso del campo. Se $q < 0$ ha verso opposto.

::: esempio
Una carica di $-2 \cdot 10^{-9}$ C subisce una forza di $3 \cdot 10^{-6}$ N verso il basso.
$E = F/|q| = 3 \cdot 10^{-6}/2 \cdot 10^{-9} = 1500\,\mathrm{N/C} = 1{,}5\,\mathrm{kV/m}$.
La carica è negativa, quindi il campo punta al contrario della forza: verso l'alto.
:::

::: esempio
Tenere sospesa una carica di $0{,}2$ mC con massa 5 g. La forza elettrica deve bilanciare il peso: $qE = mg$.
$E = \dfrac{0{,}005 \cdot 9{,}8}{0{,}2 \cdot 10^{-3}} = 245\,\mathrm{N/C}$.
:::

## Linee di campo
Le linee di campo disegnano il campo. In ogni punto la linea è tangente al campo e ha il suo verso.
- Escono dalle cariche positive ed entrano in quelle negative.
- Sono più fitte dove il campo è più intenso.
- Non si incrociano mai: in ogni punto il campo ha una sola direzione.
- In un campo uniforme sono rette parallele e ugualmente distanziate.

## Equilibrio tra cariche
Una carica è in equilibrio dove la forza totale è zero. Può essere stabile o instabile.

::: esempio
Cariche $q$ e $4q$ positive, a distanza $d$. Dove si annulla la forza su una terza carica, tra le due?
$\dfrac{kq}{x^2} = \dfrac{k\,4q}{(d - x)^2} \Rightarrow d - x = 2x \Rightarrow x = d/3$ (misurato da $q$).
Il punto è più vicino alla carica più piccola.
:::

::: esempio
Due cariche positive uguali agli estremi di un'asta. Una carica negativa può scorrere lungo l'asta ed è al centro.
Al centro le due attrazioni si bilanciano. Se la sposti verso un estremo, l'attrazione di quella carica cresce e la tira ancora di più. L'equilibrio è **instabile**.
:::

::: esempio
Quattro cariche di uguale modulo ai vertici di un quadrato di lato $a$. Sulla carica in un vertice le due vicine danno insieme $\sqrt2\,kq^2/a^2$. L'opposta dà solo $kq^2/(2a^2)$. Con qualunque scelta dei segni la somma non si annulla mai.
:::

## Strumenti matematici (essenziale)
L'operatore nabla $\nabla = \left(\dfrac{\partial}{\partial x}, \dfrac{\partial}{\partial y}, \dfrac{\partial}{\partial z}\right)$ serve a descrivere i campi.
- **Gradiente** $\nabla V$ di un campo scalare $V$: vettore che punta dove $V$ cresce più in fretta. È perpendicolare alle superfici dove $V$ è costante.
- **Divergenza** $\nabla \cdot \vec E$: scalare che misura quanto campo "esce" da un punto. Un campo con divergenza nulla ovunque si dice solenoidale.
- **Rotore** $\nabla \times \vec E$: vettore che misura quanto il campo "gira" attorno a un punto.
- Un campo è **conservativo** se è il gradiente di una funzione. Allora il suo rotore è nullo e il lavoro lungo un giro chiuso è zero. Vale anche il contrario.

::: sintesi
- Campo elettrico: $\vec E = \vec F/q_0$, in N/C = V/m; non dipende dalla carica di prova.
- Carica puntiforme: $E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}$, uscente se $Q>0$, entrante se $Q<0$.
- Forza su una carica: $\vec F = q\vec E$; per $q<0$ è opposta al campo.
- Linee di campo: da + a −, fitte dove il campo è forte, mai incrociate.
- Forza $\propto 1/r^2$: distanza doppia, forza un quarto.
:::

=== 43 dispense
# Lezione 43 — Legge di Coulomb, campo e dipolo elettrico

## Richiamo: Coulomb e campo
La forza tra due cariche puntiformi va con l'inverso del quadrato della distanza:

$$F = \frac{1}{4\pi\varepsilon_0}\,\frac{|q_1q_2|}{r^2}$$

dove:
- $F$ = forza (N); $q_1, q_2$ = cariche (C); $r$ = distanza (m);
- $\varepsilon_0$ = costante dielettrica del vuoto.

**Unità di $\varepsilon_0$.** Si ricava dalla formula: $\varepsilon_0 = \dfrac{q^2}{4\pi F r^2}$. Quindi si misura in $\mathrm{C^2/(N\,m^2)}$. Vale $8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\,m^2)}$.

::: esempio
Due palline distano 20 cm. Le sposti e la forza quadruplica. Poiché $F \propto 1/r^2$, la distanza si è dimezzata: ora distano 10 cm.
:::

Il campo $\vec E = \vec F/q$ non dipende dalla carica di prova $q$: né dal suo valore, né dal suo segno. Il segno di $q$ cambia solo il verso della **forza**, non il campo.

## Il dipolo elettrico
Un dipolo è una coppia di cariche uguali e opposte, $+q$ e $-q$, a distanza fissa $d$.
Molte molecole (per esempio l'acqua) si comportano come dipoli.

Il dipolo si descrive con il **momento di dipolo**:

$$\vec p = q\,\vec d$$

dove:
- $\vec p$ = momento di dipolo (C·m);
- $q$ = modulo di una delle due cariche (C);
- $\vec d$ = vettore che va dalla carica **negativa** alla **positiva** (m).

## Campo generato dal dipolo
Il campo del dipolo è la somma dei campi delle due cariche.

**Sull'asse perpendicolare** (punto a distanza $y$ dal centro, cariche a distanza $a$ dal centro, $d = 2a$):
1. Le due cariche sono alla stessa distanza dal punto, quindi i due campi hanno lo stesso modulo.
2. Le componenti lungo $y$ si annullano. Restano le componenti parallele al dipolo, che si sommano.
3. Il campo risultante è parallelo al dipolo e punta verso la carica negativa (opposto a $\vec p$):

$$E = \frac{1}{4\pi\varepsilon_0}\,\frac{p}{(y^2 + a^2)^{3/2}} \;\xrightarrow{\;y \gg a\;}\; \frac{1}{4\pi\varepsilon_0}\,\frac{p}{y^3}$$

**Sull'asse del dipolo**, lontano ($z \gg d$), il campo ha il verso di $\vec p$ e vale il doppio:

$$E \approx \frac{1}{4\pi\varepsilon_0}\,\frac{2p}{z^3}$$

dove:
- $p = qd$ = momento di dipolo (C·m);
- $y, z$ = distanza dal centro del dipolo (m).

Lontano, il campo del dipolo cala come $1/r^3$. Scende più in fretta del campo di una carica singola ($1/r^2$): i campi delle due cariche opposte quasi si annullano.
Le linee di campo escono da $+q$, si curvano a lobi ed entrano in $-q$.

## Dipolo in un campo uniforme
In un campo uniforme $\vec E$ le due cariche subiscono forze uguali e opposte: $+q\vec E$ e $-q\vec E$.
- **Forza totale nulla**: il dipolo non trasla.
- **Momento torcente non nullo**: le due forze non stanno sulla stessa retta e fanno ruotare il dipolo.

$$\vec M = \vec p \times \vec E, \qquad M = pE\sin\theta$$

dove:
- $\vec M$ = momento torcente (N·m);
- $\theta$ = angolo tra $\vec p$ e $\vec E$.

Il momento tende ad allineare $\vec p$ al campo. L'energia potenziale del dipolo è:

$$U = -\vec p \cdot \vec E = -pE\cos\theta$$

dove $U$ è in J.
- $\theta = 0$ ($\vec p$ parallelo e concorde a $\vec E$): $U$ minima, **equilibrio stabile**.
- $\theta = 180°$ ($\vec p$ opposto a $\vec E$): $U$ massima, **equilibrio instabile**.

::: esempio
Dipolo con $p = 2 \cdot 10^{-9}\,\mathrm{C\,m}$ in un campo di $10^4\,\mathrm{N/C}$, a 90° dal campo. Momento: $M = pE = 2 \cdot 10^{-5}\,\mathrm{N\,m}$. Il dipolo ruota per allinearsi al campo.
:::

In un campo **non uniforme** le due forze non sono più uguali: oltre a ruotare, il dipolo viene tirato verso la zona dove il campo è più intenso.

::: esame
Nelle domande aperte chiedono: definizione di dipolo e di $\vec p$ (verso da − a +), campo sull'asse perpendicolare e andamento $1/r^3$, forza nulla e momento $\vec p \times \vec E$ in campo uniforme, equilibrio stabile per $\vec p$ concorde a $\vec E$.
:::

::: sintesi
- $\varepsilon_0$ si misura in $\mathrm{C^2/(N\,m^2)}$.
- Il campo non dipende né dal valore né dal segno della carica di prova.
- Dipolo: $+q$ e $-q$ a distanza $d$; $\vec p = q\vec d$, da − a +.
- Campo del dipolo lontano: $\propto p/r^3$.
- In campo uniforme: forza nulla, momento $\vec M = \vec p \times \vec E$, energia $U = -\vec p \cdot \vec E$; stabile per $\theta = 0$.
:::

=== 44 dispense
# Lezione 44 — Moto di cariche nel campo elettrico

## Forza e accelerazione
Il campo agisce su una carica con una forza. La forza è determinata solo dal campo nel punto e dalla carica:

$$\vec F = q\,\vec E \qquad \vec a = \frac{q\,\vec E}{m}$$

dove:
- $\vec F$ = forza (N); $q$ = carica (C, con il suo segno);
- $\vec E$ = campo elettrico (N/C);
- $\vec a$ = accelerazione (m/s²); $m$ = massa (kg).

L'accelerazione è costante **solo se il campo è uniforme**. Se il campo cambia da punto a punto, cambia anche l'accelerazione.

In un campo uniforme il moto è come quello di un sasso nel campo di gravità:
- carica ferma o con velocità parallela al campo: moto rettilineo uniformemente accelerato;
- velocità perpendicolare al campo: traiettoria parabolica (la carica viene deviata).

Così si accelerano o si deviano elettroni e ioni (per esempio nei vecchi tubi catodici).

::: attenzione
La forza è determinata dal **campo**, non dal potenziale. Due punti con lo stesso potenziale possono avere campi diversi.
:::

## Energia: si conserva
La forza elettrostatica è conservativa. Se agisce solo il campo elettrico, l'energia totale resta costante:

$$\frac12 mv^2 + qV = \text{costante}$$

dove:
- $v$ = velocità (m/s);
- $V$ = potenziale elettrico nel punto (V).

La variazione di energia potenziale è $\Delta U = q\,\Delta V$. In un campo uniforme lungo $x$ vale $\Delta U = -qE\,\Delta x$.

::: esempio
Carica $Q = 0{,}1$ C lasciata ferma nell'origine, in un campo uniforme $E = 75$ N/C lungo $x$. Arriva a $x = 2$ m.
$\Delta U = -qE\Delta x = -0{,}1 \cdot 75 \cdot 2 = -15\,\mathrm J$.
La carica positiva va nel verso del campo: perde energia potenziale e guadagna 15 J di energia cinetica.
:::

## Velocità di fuga elettrica
Un elettrone sulla superficie di una sfera positiva è attratto dalla sfera. Per allontanarsi all'infinito serve energia cinetica sufficiente.
Condizione di fuga: energia cinetica iniziale = lavoro per portarlo all'infinito.

$$\frac12 mv^2 = \frac{1}{4\pi\varepsilon_0}\,\frac{Q\,e}{r_0} \;\Rightarrow\; v = \sqrt{\frac{2kQe}{m\,r_0}}$$

dove:
- $Q$ = carica della sfera (C); $r_0$ = raggio della sfera (m);
- $e = 1{,}6 \cdot 10^{-19}$ C, $m = 9{,}11 \cdot 10^{-31}$ kg = carica e massa dell'elettrone;
- $k = 8{,}99 \cdot 10^9\,\mathrm{N\,m^2/C^2}$.

::: esempio
$Q = 1{,}6 \cdot 10^{-15}$ C, $r_0 = 1$ cm:
$v = \sqrt{\dfrac{2 \cdot 8{,}99 \cdot 10^9 \cdot 1{,}6 \cdot 10^{-15} \cdot 1{,}6 \cdot 10^{-19}}{9{,}11 \cdot 10^{-31} \cdot 0{,}01}} \approx 2{,}25 \cdot 10^4\,\mathrm{m/s}$.
:::

## Campi utili: anello, disco, piani
Per le distribuzioni continue si divide la carica in pezzetti $dq$ e si sommano (integrano) i loro campi.

**Anello** di raggio $a$ e carica $Q$, sull'asse a distanza $x$ dal centro. Le componenti trasversali si annullano a coppie:

$$E = \frac{1}{4\pi\varepsilon_0}\,\frac{Qx}{(x^2 + a^2)^{3/2}}$$

**Disco** di raggio $R$ con densità $\sigma$, sull'asse a distanza $z$. Si somma il campo di tanti anelli:

$$E = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{z}{\sqrt{z^2 + R^2}}\right)$$

dove:
- $\sigma$ = carica per unità di superficie (C/m²);
- $z$ = distanza dal centro del disco lungo l'asse (m); $R$ = raggio (m).

Molto vicino al disco ($z \ll R$) il disco sembra un piano infinito: $E \to \sigma/(2\varepsilon_0)$.

::: esempio
Disco con $\sigma = 4 \cdot 10^{-6}\,\mathrm{C/m^2}$: $\sigma/(2\varepsilon_0) \approx 2{,}26 \cdot 10^5$ N/C. Accelerazione di un elettrone $a = eE/m$:
- a $z = R$: fattore $1 - 1/\sqrt2 \approx 0{,}29$, $a \approx 1{,}16 \cdot 10^{16}\,\mathrm{m/s^2}$;
- a $z = R/100$: $a \approx 3{,}93 \cdot 10^{16}\,\mathrm{m/s^2}$;
- a $z = R/1000$: $a \approx 3{,}97 \cdot 10^{16}\,\mathrm{m/s^2}$ (quasi il valore del piano infinito).
:::

**Due piani paralleli** infiniti, ognuno con campo $\sigma/(2\varepsilon_0)$:
- cariche opposte ($+\sigma$, $-\sigma$): campo $\sigma/\varepsilon_0$ tra i piani, zero fuori;
- cariche uguali: zero tra i piani, $\sigma/\varepsilon_0$ fuori.

Tra due piastre con cariche opposte il campo è uniforme: è il modo classico per accelerare cariche.

## L'esperimento di Millikan
Millikan misurò la carica elementare con goccioline d'olio cariche tra due piastre orizzontali.
1. Senza campo, la goccia cade e raggiunge una velocità limite per l'attrito dell'aria. Da questa si ricava il raggio della goccia.
2. Con il campo, la forza elettrica $qE$ rallenta, ferma o inverte il moto della goccia.
3. Le cariche misurate erano sempre multipli interi di uno stesso valore: $e \approx 1{,}6 \cdot 10^{-19}$ C.

L'esperimento ha dimostrato che la carica è quantizzata.

::: esame
Nelle aperte chiedono di definire il campo ($\vec E = \vec F/q_0$), il campo della carica puntiforme ($E = kQ/r^2$, radiale) e l'interazione carica-campo ($\vec F = q\vec E$, accelerazione, energia che si conserva).
:::

::: sintesi
- $\vec F = q\vec E$, $\vec a = q\vec E/m$: accelerazione costante solo in campo uniforme.
- Energia conservata: $\tfrac12 mv^2 + qV = $ costante; in campo uniforme $\Delta U = -qE\Delta x$.
- Velocità di fuga: $\tfrac12 mv^2 = kQe/r_0$.
- Disco sull'asse: $E = \dfrac{\sigma}{2\varepsilon_0}\left(1 - \dfrac{z}{\sqrt{z^2+R^2}}\right)$; vicino al disco tende a $\sigma/2\varepsilon_0$.
- Millikan: la carica è sempre multipla di $e$.
:::

=== 45 dispense
# Lezione 45 — Flusso e teorema di Gauss

## Il flusso di un campo
Il flusso misura quante linee di campo attraversano una superficie.
Per una superficie piana $S$ in un campo uniforme, il flusso è il prodotto scalare tra il campo e il vettore superficie:

$$\Phi = \vec E \cdot \vec S = E\,S\cos\theta$$

dove:
- $\Phi$ = flusso ($\mathrm{N\,m^2/C}$ = V·m);
- $\vec S$ = vettore superficie: modulo uguale all'area (m²), direzione perpendicolare alla superficie;
- $\theta$ = angolo tra campo e normale alla superficie.

Il flusso è massimo se il campo è perpendicolare alla superficie ($\theta = 0$). È nullo se il campo scorre parallelo alla superficie ($\theta = 90°$).
Se il campo non è uniforme o la superficie è curva, si somma su tanti pezzetti: $\Phi = \int_S \vec E \cdot \hat n\,dS$.
Per una superficie **chiusa** la normale punta verso l'esterno. Il flusso uscente è positivo, quello entrante negativo.

::: attenzione
Il flusso non è "campo per area" e non è un prodotto vettoriale. È un **prodotto scalare** tra due vettori: il campo e il vettore superficie.
:::

## Il teorema di Gauss
Il flusso del campo elettrico attraverso una superficie **chiusa** dipende solo dalla carica racchiusa dentro:

$$\Phi_S(\vec E) = \oint_S \vec E \cdot \hat n\,dS = \frac{Q_{\text{int}}}{\varepsilon_0}$$

dove:
- $S$ = superficie chiusa di forma qualsiasi;
- $Q_{\text{int}}$ = somma algebrica delle cariche dentro $S$ (C);
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\,m^2)}$.

Conseguenze:
- Le cariche fuori dalla superficie non contano: le loro linee entrano ed escono, flusso netto zero.
- Se dentro non c'è carica, il flusso è **nullo**. Il campo può esserci, ma tante linee entrano quante escono.
- Se dentro ci sono cariche opposte che si bilanciano, il flusso è nullo.
- Vale per qualsiasi superficie chiusa, non solo per la sfera.

**Perché vale (idea).**
1. Per una carica $Q$ al centro di una sfera di raggio $r$: $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$ è perpendicolare alla sfera ovunque.
2. Flusso $= E \cdot 4\pi r^2 = Q/\varepsilon_0$. Il raggio si semplifica.
3. Per una superficie qualsiasi conta solo l'angolo solido, che per una superficie chiusa è sempre $4\pi$. Il risultato non cambia. Con più cariche si sommano i contributi.

## Forma locale: prima equazione di Maxwell
Il teorema della divergenza dice che il flusso uscente da una superficie chiusa è l'integrale della divergenza nel volume. Unendolo a Gauss si ottiene una legge valida punto per punto:

$$\nabla \cdot \vec E = \frac{\rho}{\varepsilon_0}$$

dove:
- $\nabla \cdot \vec E$ = divergenza del campo (V/m²);
- $\rho$ = densità di carica di volume nel punto (C/m³).

Dove c'è carica positiva il campo "nasce"; dove non c'è carica la divergenza è zero.

## Come si usa: calcolare il campo con la simmetria
Gauss vale sempre. Ma serve a **calcolare** il campo solo se la distribuzione è molto simmetrica (sferica, cilindrica, piana). Serve una superficie dove il campo è costante e perpendicolare, o parallelo.

**Carica puntiforme.** Sfera di raggio $r$ centrata sulla carica: $E \cdot 4\pi r^2 = Q/\varepsilon_0$, quindi $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$. È la legge di Coulomb.

**Filo infinito** con carica per unità di lunghezza $\lambda$. Si usa un cilindro coassiale di raggio $r$ e lunghezza $L$.
1. Per simmetria il campo è radiale: sulle basi il flusso è zero.
2. Sulla superficie laterale il campo è costante e perpendicolare: flusso $= E \cdot 2\pi r L$.
3. Carica racchiusa $= \lambda L$. Quindi:

$$E = \frac{\lambda}{2\pi\varepsilon_0\,r}$$

dove:
- $\lambda$ = carica per unità di lunghezza (C/m);
- $r$ = distanza dal filo (m).

Il campo del filo cala come $1/r$, più lentamente di quello di una carica puntiforme ($1/r^2$).

**Sfera piena uniforme**, raggio $R$, carica $Q$. Superficie di Gauss sferica di raggio $r$:
- dentro ($r < R$): la carica racchiusa è $Q\,r^3/R^3$, quindi $E = \dfrac{Q\,r}{4\pi\varepsilon_0 R^3} = \dfrac{\rho\,r}{3\varepsilon_0}$;
- fuori ($r > R$): $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$, come se tutta la carica fosse al centro.

::: esempio
Sfera di raggio 30 cm con $0{,}8\,\mu\mathrm C$ uniforme. Campo a 25 cm dal centro (dentro):
$E = \dfrac{kQr}{R^3} = \dfrac{8{,}99 \cdot 10^9 \cdot 0{,}8 \cdot 10^{-6} \cdot 0{,}25}{0{,}027} \approx 66{,}6\,\mathrm{kV/m}$.
:::

::: attenzione
Un cubo carico non ha simmetria sufficiente. Gauss resta vero, ma non permette di ricavare il campo esattamente. Si può usare solo in modo approssimato **a grande distanza**, dove il cubo sembra una carica puntiforme.
:::

## Linee di forza: esempi di disposizione
Il teorema di Gauss si vede bene con le linee: il flusso conta le linee che escono meno quelle che entrano.
- **Carica positiva isolata**: semirette uscenti in tutte le direzioni.
- **Dipolo** ($+q$ e $-q$): le linee partono da $+q$, si curvano e finiscono tutte su $-q$. Una sfera che racchiude tutti e due ha flusso zero.
- **Due cariche positive uguali**: le linee si respingono. Tra le cariche c'è un punto dove il campo è zero. Le linee vanno all'infinito.
- **Due piastre con cariche opposte**: tra le piastre linee parallele ed equidistanti (campo uniforme).

::: esame
Aperta tipica: "enuncia Gauss con un esempio". Scrivi $\oint \vec E \cdot \hat n\,dS = Q_{\text{int}}/\varepsilon_0$, precisa "superficie chiusa qualsiasi, contano solo le cariche interne" e ricava il campo della carica puntiforme o del filo.
:::

::: sintesi
- Flusso: $\Phi = \vec E \cdot \vec S$ (prodotto scalare); positivo se esce da una superficie chiusa.
- Gauss: $\oint \vec E \cdot \hat n\,dS = Q_{\text{int}}/\varepsilon_0$, solo per superfici chiuse, di forma qualsiasi.
- Nessuna carica interna: flusso nullo.
- Forma locale: $\nabla \cdot \vec E = \rho/\varepsilon_0$.
- Utile per calcolare il campo solo con simmetria: filo $E = \lambda/(2\pi\varepsilon_0 r)$, sfera piena dentro $E \propto r$.
:::

=== 46 dispense
# Lezione 46 — Conduttori e distribuzioni di carica

## Conduttore in equilibrio: campo nullo dentro
In un conduttore gli elettroni si muovono liberamente. Se dentro ci fosse un campo, gli elettroni si sposterebbero. All'equilibrio si fermano: quindi **dentro il conduttore il campo è zero**.

Conseguenze:
1. **La carica sta sulla superficie.** Una superficie di Gauss dentro il metallo ha flusso zero, quindi non racchiude carica. L'eccesso di carica va tutto sulla superficie, con densità $\sigma = dq/dS$.
2. **Il potenziale è uguale in tutto il conduttore.** Con campo zero, non c'è differenza di potenziale tra due punti interni. La superficie è equipotenziale.
3. **Fuori, vicino alla superficie, il campo è perpendicolare alla superficie.** Una componente parallela sposterebbe le cariche lungo la superficie.

## Teorema di Coulomb
Appena fuori da un conduttore il campo è perpendicolare alla superficie e vale:

$$E = \frac{\sigma}{\varepsilon_0}$$

dove:
- $\sigma$ = densità di carica superficiale **locale**, nel punto considerato (C/m²);
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\,m^2)}$.

Come si ricava:
1. Si prende un cilindretto piccolissimo a cavallo della superficie.
2. La base interna ha flusso zero (campo nullo). La superficie laterale ha flusso zero (campo perpendicolare).
3. Resta la base esterna: $E\,dS = \sigma\,dS/\varepsilon_0$, quindi $E = \sigma/\varepsilon_0$.

In generale, attraversando una superficie carica, la componente normale del campo salta di $\sigma/\varepsilon_0$. La componente tangente resta uguale.
Sulle punte la carica si addensa: $\sigma$ è grande e il campo è molto intenso (potere delle punte).

::: attenzione
Conduttore: $E = \sigma/\varepsilon_0$. Piano isolato infinito: $E = \sigma/(2\varepsilon_0)$. La differenza: nel conduttore tutto il campo sta da una sola parte, perché dentro è zero.
:::

## Induzione completa e gabbia di Faraday
Metti un conduttore carico ($+Q$) dentro la cavità di un conduttore cavo scarico.
- Sulla parete interna della cavità si forma $-Q$.
- Sulla superficie esterna compare $+Q$.
- Tutte le linee che partono dal conduttore interno finiscono sulla parete della cavità (induzione completa).

Vale anche il contrario. Cariche e campi esterni non entrano nella cavità: le cariche del guscio si ridistribuiscono e il campo dentro resta invariato. È la **gabbia di Faraday**, uno schermo elettrostatico. Basta anche una rete metallica, se i buchi sono piccoli.

## Distribuzioni di carica simmetriche (con Gauss)
**Piano infinito isolante**, densità $\sigma$. Superficie di Gauss: cilindro perpendicolare al piano, con una base per lato.
1. Il campo è perpendicolare al piano: sulla superficie laterale il flusso è zero.
2. Le due basi, di area $A$, danno $2EA$. Carica racchiusa $\sigma A$.
3. Quindi:

$$E = \frac{\sigma}{2\varepsilon_0}$$

Il campo è **uniforme**: non dipende dalla distanza dal piano.

**Guscio sferico sottile** di raggio $R$ e carica $Q$:
- dentro ($r < R$): nessuna carica racchiusa, $E = 0$;
- fuori ($r > R$): $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$.

**Sfera piena uniforme** di raggio $R$:
- dentro: $E = \dfrac{Q\,r}{4\pi\varepsilon_0 R^3}$, cresce in proporzione a $r$;
- fuori: $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$.

**Filo infinito**, carica per unità di lunghezza $\lambda$: $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$.

Riepilogo:
| Distribuzione | Campo | Dipende dalla distanza come |
|---|---|---|
| carica puntiforme / fuori da una sfera | $\dfrac{Q}{4\pi\varepsilon_0 r^2}$ | $1/r^2$ |
| filo infinito | $\dfrac{\lambda}{2\pi\varepsilon_0 r}$ | $1/r$ |
| piano infinito | $\dfrac{\sigma}{2\varepsilon_0}$ | costante |
| dentro una sfera piena | $\dfrac{Qr}{4\pi\varepsilon_0 R^3}$ | cresce come $r$ |
| dentro un guscio sferico | $0$ | nullo |
| vicino a un conduttore | $\dfrac{\sigma}{\varepsilon_0}$ | perpendicolare alla superficie |

dove:
- $Q$ = carica totale (C); $\lambda$ = carica per metro (C/m); $\sigma$ = carica per m² (C/m²);
- $r$ = distanza dal centro, dal filo (m); $R$ = raggio della sfera (m).

::: esempio
Una carica di $4\,\mu\mathrm C$ e massa 2 mg, vicino a un piano infinito carico, accelera a 4 m/s². Qual è $\sigma$?
- $E = ma/q = 2 \cdot 10^{-6} \cdot 4/(4 \cdot 10^{-6}) = 2\,\mathrm{N/C}$.
- $\sigma = 2\varepsilon_0 E = 2 \cdot 8{,}85 \cdot 10^{-12} \cdot 2 \approx 3{,}54 \cdot 10^{-11}\,\mathrm{C/m^2}$.

La distanza dal piano (3 m) non serve: il campo del piano è uniforme.
:::

::: sintesi
- In un conduttore in equilibrio: campo nullo dentro, carica sulla superficie, potenziale costante.
- Teorema di Coulomb: appena fuori $E = \sigma/\varepsilon_0$, perpendicolare alla superficie.
- Gabbia di Faraday: il conduttore cavo scherma l'interno dai campi esterni.
- Piano infinito: $E = \sigma/(2\varepsilon_0)$, uniforme.
- Guscio sferico: $E = 0$ dentro. Sfera piena: $E \propto r$ dentro. Fuori da entrambi: $kQ/r^2$.
:::

=== 47 dispense
# Lezione 47 — Potenziale elettrico

## Il lavoro della forza elettrica non dipende dal percorso
Una carica $q$ si sposta da A a B nel campo di una carica $Q$. Il lavoro della forza elettrica dipende solo dai punti A e B, non dalla strada.
Quindi la forza elettrostatica è **conservativa**. Su un percorso chiuso il lavoro è zero.

Per questo si può definire un'energia potenziale $U$:

$$L_{AB} = U(A) - U(B) = -\Delta U$$

dove:
- $L_{AB}$ = lavoro della forza elettrica da A a B (J);
- $U$ = energia potenziale elettrostatica (J).

Per due cariche puntiformi, con $U = 0$ all'infinito:

$$U = \frac{1}{4\pi\varepsilon_0}\,\frac{Qq}{r}$$

dove $r$ è la distanza tra le cariche (m). $U$ è positiva per cariche dello stesso segno, negativa per segni opposti.

## Il potenziale: energia per unità di carica
L'energia potenziale raddoppia se raddoppi la carica $q$. Dividendo per $q$ si ottiene una grandezza che dipende solo dal campo: il **potenziale**.

$$V = \frac{U}{q}$$

dove:
- $V$ = potenziale elettrico, in volt: $1\,\mathrm V = 1\,\mathrm{J/C}$;
- $U$ = energia potenziale della carica $q$ (J).

Il potenziale è uno **scalare**: ha un valore in ogni punto, senza direzione. Il campo invece è un vettore. Il potenziale può essere positivo o negativo.

La differenza di potenziale tra due punti è il lavoro del campo per unità di carica:

$$V_A - V_B = \int_A^B \vec E \cdot d\vec s$$

## Potenziale di una carica puntiforme
Con $V = 0$ all'infinito:

$$V(r) = \frac{1}{4\pi\varepsilon_0}\,\frac{Q}{r}$$

dove:
- $Q$ = carica sorgente (C); $r$ = distanza dalla carica (m).

Il potenziale cala come $1/r$. Il campo cala come $1/r^2$.

| Distanza | Potenziale $V$ | Campo $E$ |
|---|---|---|
| $r$ | $V$ | $E$ |
| $2r$ | $V/2$ | $E/4$ |
| $3r$ | $V/3$ | $E/9$ |

Con più cariche i potenziali si sommano come **numeri** (non come vettori):

$$V(P) = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{Q_i}{r_i}$$

Per una distribuzione continua la somma diventa un integrale. In ogni caso $U = qV$.

::: esempio
Carica $Q = 1\,\mathrm{nC}$. A 1 m: $V = 9 \cdot 10^9 \cdot 10^{-9}/1 = 9$ V. A 2 m: $V = 4{,}5$ V (metà). Il campo invece passa da 9 V/m a 2,25 V/m (un quarto).
:::

## Campo e potenziale
Il campo punta sempre verso i potenziali che **diminuiscono**. È il gradiente del potenziale cambiato di segno:

$$\vec E = -\nabla V \qquad \text{in una dimensione: } E_x = -\frac{dV}{dx}$$

dove:
- $\nabla V$ = gradiente di $V$ (V/m), vettore che punta dove $V$ cresce più in fretta.

Conseguenze:
- Una carica positiva lasciata libera va verso potenziali più bassi. Una negativa verso potenziali più alti.
- Le **superfici equipotenziali** ($V$ costante) sono sempre perpendicolari alle linee di campo.
- Il campo si può misurare in V/m: $\mathrm{N/C} = \mathrm{N\,m/(C\,m)} = \mathrm{J/(C\,m)} = \mathrm{V/m}$.

**Campo uniforme** $E$ lungo $z$: $V = -Ez + \text{costante}$. Il potenziale scende in modo lineare nel verso del campo, come l'energia potenziale gravitazionale con la quota.

::: esempio
Tra due superfici parallele il potenziale è $V = ax^2$, con $a = 1200\,\mathrm{V/m^2}$. Campo: $E_x = -dV/dx = -2ax$. A $x = 2$ cm: $|E| = 2 \cdot 1200 \cdot 0{,}02 = 48$ V/m, verso le $x$ negative.
:::

## Conservazione dell'energia e elettronvolt
Se agisce solo il campo elettrico, l'energia totale si conserva:

$$\frac12 mv^2 + qV = \text{costante}$$

dove $m$ = massa (kg), $v$ = velocità (m/s), $qV$ = energia potenziale (J).

L'**elettronvolt** è l'energia che un elettrone guadagna attraversando 1 V:

$$1\,\mathrm{eV} = 1{,}60 \cdot 10^{-19}\,\mathrm J$$

::: esempio
Un elettrone, partito da fermo, attraversa una differenza di potenziale di 100 V. Guadagna 100 eV $= 1{,}6 \cdot 10^{-17}$ J di energia cinetica.
:::

Per una carica in orbita circolare attorno a una carica opposta (come l'elettrone nell'atomo di Bohr), l'energia totale è negativa: $E_T = -\dfrac12\,\dfrac{|Qq|}{4\pi\varepsilon_0 r}$. Il sistema è legato.

::: attenzione
Nelle domande vero/falso del paniere le risposte compaiono come 1 (vero) e 0 (falso). "Il potenziale, come il campo, è un vettore" è falso (0): il potenziale è uno scalare.
:::

::: sintesi
- La forza elettrostatica è conservativa: $L_{AB} = -\Delta U$.
- Potenziale: $V = U/q$, scalare, in volt ($1\,\mathrm V = 1\,\mathrm{J/C}$).
- Carica puntiforme: $V = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r}$, va come $1/r$ (il campo come $1/r^2$).
- $\vec E = -\nabla V$: il campo punta verso i potenziali decrescenti ed è perpendicolare alle equipotenziali.
- Energia conservata: $\tfrac12 mv^2 + qV = $ costante; $1\,\mathrm{eV} = 1{,}6 \cdot 10^{-19}$ J.
:::
