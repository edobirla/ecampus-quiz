=== 9 dispense
# Lezione 09 — Moti relativi e sistemi di riferimento

## Il moto dipende da chi lo osserva
Lo stesso moto appare diverso a osservatori diversi. In autostrada un'auto che ti affianca sembra ferma. Chi è sul ciglio della strada la vede invece correre.

Per descrivere un moto servono quindi due sistemi di riferimento:
- il sistema **fisso** $Oxyz$ (detto "assoluto");
- il sistema **mobile** $O'x'y'z'$ (detto "relativo"), che si muove rispetto al primo.

La posizione del punto P nei due sistemi è legata da:
$$\vec r = \vec R + \vec r\,'$$
dove:
- $\vec r$ = posizione di P vista dal sistema fisso (m);
- $\vec R$ = posizione dell'origine $O'$ del sistema mobile, vista dal sistema fisso (m);
- $\vec r\,'$ = posizione di P vista dal sistema mobile (m).

## Composizione delle velocità (trasformazioni di Galileo)
Se il sistema mobile trasla senza ruotare, le velocità si sommano come vettori:
$$\vec v = \vec v\,' + \vec V$$
dove:
- $\vec v$ = velocità **assoluta**, misurata dal sistema fisso (m/s);
- $\vec v\,'$ = velocità **relativa**, misurata dal sistema mobile (m/s);
- $\vec V$ = velocità del sistema mobile rispetto a quello fisso (m/s).

Se il punto viaggia alla stessa velocità del sistema mobile ($\vec v = \vec V$), per il sistema mobile è fermo: $\vec v\,' = 0$.

::: esempio
Il display del treno segna $288\,\mathrm{km/h} = 80\,\mathrm{m/s}$. Dal treno un'auto sembra andare a $-50\,\mathrm{m/s}$ (cioè all'indietro).
Per chi è a terra: $v = v' + V = -50 + 80 = 30\,\mathrm{m/s} = 108\,\mathrm{km/h}$, nello stesso verso del treno.
:::

::: esempio
Velocità relativa tra due veicoli: un'auto a $20\,\mathrm{m/s}$ segue un camion a $15\,\mathrm{m/s}$. Rispetto al camion l'auto va a $v' = v - V = 20 - 15 = 5\,\mathrm{m/s}$, in avanti.
Una barca punta a Nord a $10\,\mathrm{km/h}$ rispetto all'acqua. Il fiume scorre verso Est a $5\,\mathrm{km/h}$. Le due velocità sono perpendicolari: rispetto a terra $v = \sqrt{10^2 + 5^2} \approx 11{,}2\,\mathrm{km/h}$.
:::

::: attenzione
Converti sempre le unità prima di sommare: km/h e m/s non si mescolano. Per passare da km/h a m/s dividi per $3{,}6$.
:::

## Caso generale: sistema mobile che ruota
Se il sistema mobile trasla e insieme ruota con velocità angolare $\vec\omega$, la formula diventa:
$$\vec v = \vec v\,' + \vec v_{tr}, \qquad \vec v_{tr} = \vec V_{O'} + \vec\omega \times \vec r\,'$$
dove:
- $\vec v_{tr}$ = **velocità di trascinamento** (m/s): la velocità che P avrebbe se fosse fermo nel sistema mobile;
- $\vec V_{O'}$ = velocità dell'origine del sistema mobile (m/s);
- $\vec\omega$ = velocità angolare del sistema mobile (rad/s).

Il trascinamento ha quindi una parte che trasla e una parte che ruota.

## Composizione delle accelerazioni e accelerazione di Coriolis
Derivando la legge delle velocità si ottiene:
$$\vec a = \vec a\,' + \vec a_{tr} + \vec a_{Co}, \qquad \vec a_{Co} = 2\,\vec\omega \times \vec v\,'$$
dove:
- $\vec a$ = accelerazione assoluta (m/s²);
- $\vec a\,'$ = accelerazione relativa, vista dal sistema mobile (m/s²);
- $\vec a_{tr} = \vec a_{O'} + \dfrac{d\vec\omega}{dt} \times \vec r\,' + \vec\omega \times (\vec\omega \times \vec r\,')$ = **accelerazione di trascinamento** (m/s²): quella che P avrebbe se fosse fermo nel sistema mobile; l'ultimo termine è la parte centripeta;
- $\vec a_{Co}$ = **accelerazione di Coriolis** (o complementare) (m/s²).

L'accelerazione di Coriolis è un termine in più rispetto alla legge delle velocità. Compare solo se il sistema **ruota** e il punto **si muove** rispetto a esso. È nulla se $\vec v\,' = 0$ oppure se $\vec v\,'$ è parallela all'asse di rotazione. È sempre perpendicolare sia a $\vec\omega$ sia a $\vec v\,'$.

La Terra ruota, quindi chi sta sulla sua superficie è in un sistema rotante. L'effetto di Coriolis cambia verso tra i due emisferi. Per questo cicloni e correnti girano in versi opposti a Nord e a Sud dell'Equatore.

## Sistemi inerziali e relatività galileiana
Un sistema è **inerziale** se un corpo libero (senza forze) resta fermo o si muove di moto rettilineo uniforme.

Se il sistema mobile si muove a velocità $\vec V$ **costante**, le accelerazioni coincidono: $\vec a = \vec a\,'$. Quindi $\vec F = m\vec a$ vale uguale nei due sistemi.

**Principio di relatività galileiana**: tra due laboratori in moto rettilineo uniforme l'uno rispetto all'altro nessun esperimento dà risultati diversi. Le singole misure (per esempio le velocità) cambiano. Le leggi fisiche restano le stesse.

## Sistemi accelerati: forze apparenti e caduta libera
Se il sistema mobile accelera con $\vec A$ (senza ruotare), vale $\vec a\,' = \vec a - \vec A$. Chi sta dentro vede i corpi accelerare "da soli". Per usare ancora $F = ma$ aggiunge una **forza apparente**:
$$\vec F_{app} = -m\vec A$$
dove $m$ è la massa del corpo (kg) e $\vec A$ l'accelerazione del sistema (m/s²).

**Corpo in un sistema in caduta libera.** Il sistema cade con $\vec A = \vec g$. Ogni oggetto al suo interno cade con la stessa accelerazione. La forza apparente $-m\vec g$ annulla esattamente il peso. Risultato:
- un oggetto lasciato libero resta fermo rispetto al sistema: **fluttua**;
- una bilancia segna zero: **assenza di peso apparente**;
- il corpo si muove di moto rettilineo uniforme se gli dai una spinta.

Succede agli astronauti in orbita e negli aerei che simulano l'assenza di gravità scendendo in caduta libera. La gravità c'è ancora: manca solo il suo effetto relativo.

::: esempio
Ascensore che accelera verso l'alto con $a$: la bilancia segna $N = m(g + a)$, il peso apparente aumenta. Se accelera verso il basso con $a < g$, segna $m(g - a)$.
:::

## Sistemi rotanti: centrifuga e Coriolis
In un sistema che ruota con velocità angolare $\omega$ compaiono due forze apparenti:
- **forza centrifuga** $m\omega^2 r$, radiale verso l'esterno; agisce anche sui corpi fermi nel sistema rotante;
- **forza di Coriolis** $\vec F_{Co} = -2m\,\vec\omega \times \vec v\,'$; agisce solo sui corpi in moto rispetto al sistema rotante, con velocità non parallela all'asse.

dove $r$ = distanza dall'asse (m), $\vec v\,'$ = velocità relativa al sistema rotante (m/s).

Sulla Terra la forza di Coriolis devia i corpi in moto verso **destra** nell'emisfero Nord e verso **sinistra** nell'emisfero Sud.

::: esame
Domande aperte tipiche: "Cos'è l'accelerazione di Coriolis?" → termine $2\,\vec\omega \times \vec v\,'$ che compare nelle accelerazioni relative quando il sistema ruota e il punto si muove in esso; cita cicloni e correnti. "Comportamento di un corpo in un sistema in caduta libera" → peso annullato dalla forza apparente, il corpo fluttua.
:::

::: sintesi
- Posizioni: $\vec r = \vec R + \vec r\,'$; velocità (traslazione): $\vec v = \vec v\,' + \vec V$.
- Con $\vec V$ costante $\vec a = \vec a\,'$: tutti i sistemi in moto rettilineo uniforme rispetto a un inerziale sono inerziali.
- Caso generale: $\vec a = \vec a\,' + \vec a_{tr} + 2\,\vec\omega \times \vec v\,'$ (l'ultimo è Coriolis).
- Sistema accelerato: forza apparente $-m\vec A$; in caduta libera il peso apparente è zero.
- Sistema rotante: centrifuga $m\omega^2 r$ e Coriolis $-2m\,\vec\omega\times\vec v\,'$.
:::

=== 10 dispense
# Lezione 10 — Primo principio della dinamica

## Dalla cinematica alla dinamica
La cinematica descrive il moto. La **dinamica** studia le sue cause: le **forze**.

La dinamica classica si basa su quattro principi, dovuti a Galileo e Newton:
1. principio di relatività;
2. principio di inerzia (prima legge);
3. seconda legge, $\vec F = m\vec a$;
4. principio di azione e reazione (terza legge).

Questi principi valgono per corpi più grandi degli atomi e molto più lenti della luce. Oltre servono relatività e meccanica quantistica.

## Il concetto di forza
Una forza è un'azione che un corpo esercita su un altro. Può fare due cose:
- **cambiare la velocità** del corpo (effetto dinamico): spingere, tirare, frenare;
- **deformarlo** (effetto statico): una molla che si allunga.

Da qui nascono due modi di misurarla. Il metodo statico usa la deformazione di una molla (dinamometro). Il metodo dinamico misura l'accelerazione prodotta.

La forza è un **vettore**: conta intensità, direzione e verso. Nel SI si misura in newton: $1\,\mathrm N = 1\,\mathrm{kg\cdot m/s^2}$.

::: esempio
Due forze di $600\,\mathrm N$ e $800\,\mathrm N$ perpendicolari, sullo stesso punto. La risultante non è $1400\,\mathrm N$: si somma con Pitagora, $R = \sqrt{600^2 + 800^2} = 1000\,\mathrm N$.
:::

## Sistemi di riferimento inerziali
Un sistema di riferimento è **inerziale** se un punto materiale libero (nessuna forza su di esso) si comporta così:
- se è fermo, resta fermo;
- se si muove, continua in linea retta a velocità costante.

In un sistema inerziale ogni posizione è di equilibrio per un corpo libero.

Proprietà chiave: ogni sistema che si muove di moto rettilineo uniforme rispetto a un inerziale è anch'esso inerziale. Un sistema che accelera o ruota invece **non** è inerziale.

**La Terra è inerziale?** Non esattamente: ruota su se stessa e gira intorno al Sole. Il sistema più vicino all'ideale ha l'origine nel centro del Sistema Solare e gli assi puntati verso stelle fisse. Le accelerazioni della Terra però sono piccole (centinaia di volte meno di $g$). Nei problemi comuni si considera la Terra **localmente inerziale**. Gli effetti diventano visibili solo su scale enormi, per esempio nella rotazione dei cicloni.

## Primo principio (principio di inerzia)
**Enunciato:** un corpo rimane nel suo stato di quiete o di moto rettilineo uniforme finché non agisce su di esso una forza risultante non nulla.

In forma compatta:
$$\sum \vec F = 0 \iff \vec v = \text{costante}$$
dove $\sum \vec F$ = risultante (somma vettoriale) di tutte le forze sul corpo (N) e $\vec v$ = velocità del corpo (m/s).

Punti chiave:
- conta la **risultante**, non la singola forza: più forze che si annullano equivalgono a nessuna forza;
- la quiete è solo il caso particolare $v = 0$;
- vale solo nei sistemi inerziali (anzi, li definisce).

**Inerzia** = tendenza di un corpo a conservare la sua velocità. La misura dell'inerzia è la **massa**.

::: attenzione
Moto rettilineo uniforme **accelerato** non esiste nel primo principio: senza forza risultante l'accelerazione è zero. Serve una forza per cambiare la velocità, non per mantenerla.
:::

::: attenzione
Su una curva l'accelerazione non può essere nulla, nemmeno a velocità scalare costante. La direzione della velocità cambia sempre, quindi c'è sempre un'accelerazione centripeta. Muoversi su un arco senza accelerazione è impossibile.
:::

## Massa e peso
La **massa** $m$ è una proprietà del corpo: misura quanta forza serve per accelerarlo. Si misura in kg, anche con una bilancia a due piatti confrontandola con masse campione.

Per corpi della stessa sostanza la massa è proporzionale al volume: $m = d \cdot V$. Un cubo con spigolo doppio ha volume $2^3 = 8$ volte maggiore, quindi massa 8 volte maggiore.

Il **peso** è la forza con cui la Terra attira il corpo:
$$P = mg$$
dove $P$ = peso (N), $m$ = massa (kg), $g \approx 9{,}8\,\mathrm{m/s^2}$ = accelerazione di gravità.

::: esempio
Mela da $100\,\mathrm g$: $P = 0{,}1 \cdot 9{,}8 = 0{,}98\,\mathrm N$.
Un peso di $0{,}5\,\mathrm N$ corrisponde a $m = 0{,}5/9{,}8 \approx 51\,\mathrm g$: circa una pallina da tennis.
:::

## Galileo e la caduta dei gravi
Galileo lasciò cadere dalla Torre di Pisa due oggetti di **massa diversa**. Arrivarono a terra **nello stesso istante**. Senza aria, tutti i corpi cadono con la stessa accelerazione $g$, qualunque sia la massa.

## Perché un oggetto lanciato in alto torna giù
Appena lasciato, l'oggetto sale per inerzia con la velocità iniziale. Su di esso agisce però il peso, sempre verso il basso. Il peso lo decelera di $9{,}8\,\mathrm{m/s}$ ogni secondo. A un certo punto la velocità diventa zero (punto più alto). Il peso continua ad agire, quindi l'oggetto riparte verso il basso e accelera.

## Forze e accelerazione: un calcolo tipico
::: esempio
Su un corpo di $15\,\mathrm{kg}$ agiscono due forze parallele; una vale $40\,\mathrm N$. Il corpo accelera a $2\,\mathrm{m/s^2}$ nel verso della prima.
Risultante: $R = ma = 15 \cdot 2 = 30\,\mathrm N$. Quindi l'altra forza vale $40 - 30 = 10\,\mathrm N$, in verso opposto.
:::

::: esame
Aperte frequenti: enunciare il primo principio; definire un sistema inerziale; spiegare perché un oggetto lanciato in alto ricade. Usa le parole "risultante nulla", "quiete o moto rettilineo uniforme", "corpo libero".
:::

::: sintesi
- Forza = vettore che cambia la velocità o deforma; unità N $= \mathrm{kg\,m/s^2}$.
- Primo principio: $\sum\vec F = 0 \iff \vec v$ costante (quiete o moto rettilineo uniforme).
- Sistema inerziale: un corpo libero non accelera; ogni sistema in moto rettilineo uniforme rispetto a esso è inerziale.
- Su una curva c'è sempre accelerazione.
- $P = mg$; senza aria tutti i corpi cadono con la stessa $g$.
:::

=== 11 dispense
# Lezione 11 — Secondo e terzo principio della dinamica

## Secondo principio
La forza risultante su un corpo ne cambia la velocità. L'accelerazione prodotta è proporzionale alla forza e ha la sua stessa direzione e verso:
$$\vec F = m\vec a$$
dove:
- $\vec F$ = forza **risultante** sul corpo (N);
- $m$ = massa del corpo (kg);
- $\vec a$ = accelerazione del corpo (m/s²).

Conseguenze dirette:
- la forza risultante determina la **variazione di velocità** (l'accelerazione), non la velocità;
- a parità di forza, più massa significa meno accelerazione: $a = F/m$;
- se $\vec F = 0$ allora $\vec a = 0$: il secondo principio contiene il primo.

Il **newton** è la forza che dà a $1\,\mathrm{kg}$ un'accelerazione di $1\,\mathrm{m/s^2}$. Dimensioni: $[F] = [M L T^{-2}]$.

La massa è uno scalare e l'accelerazione un vettore. Quindi anche la forza è un vettore.

::: esempio
- Forza per accelerare $1{,}80\,\mathrm{kg}$ a $1{,}80\,\mathrm{m/s^2}$: $F = 1{,}80 \cdot 1{,}80 = 3{,}24\,\mathrm N$.
- Disco da hockey: $10\,\mathrm N$ gli danno $50\,\mathrm{m/s^2}$, quindi $m = F/a = 0{,}2\,\mathrm{kg}$.
- Se metti un oggetto su una slitta tirata con la stessa forza, la massa cresce e l'accelerazione diminuisce.
:::

## Massa inerziale
Dal secondo principio la massa è il rapporto fisso tra forza e accelerazione: $m = F/a$. Questa è la **massa inerziale**: misura quanto un corpo resiste a cambiare velocità.

Anche senza peso l'inerzia resta. Un astronauta in orbita distingue una valigia vuota da una piena **scuotendole**: quella piena resiste di più all'accelerazione.

## Dalla forza alla legge oraria
Se la forza è costante, anche l'accelerazione è costante: il moto è uniformemente accelerato. Da fermo:
$$a = \frac{F}{m}, \qquad v = at, \qquad s = \tfrac12 a t^2$$
dove $v$ = velocità (m/s), $t$ = tempo (s), $s$ = spazio percorso (m).

Vale anche il contrario: dalla legge oraria ricavi l'accelerazione, e quindi la forza.

::: esempio
$F = 150\,\mathrm N$ su un blocco di $60\,\mathrm{kg}$, senza attrito, partenza da fermo.
$a = 150/60 = 2{,}5\,\mathrm{m/s^2}$. Dopo $3\,\mathrm s$: $v = 2{,}5 \cdot 3 = 7{,}5\,\mathrm{m/s}$ e $s = \tfrac12 \cdot 2{,}5 \cdot 9 = 11{,}25\,\mathrm m$.
:::

Per ottenere la velocità dopo un certo tratto $s$ è comodo il **teorema dell'energia cinetica**: il lavoro della forza diventa energia cinetica.
$$F s = \tfrac12 m v^2$$
dove $Fs$ = lavoro (J) e $\tfrac12 mv^2$ = energia cinetica (J), partendo da fermo.

::: esempio
Carrello di $2\,\mathrm{kg}$ tirato da $50\,\mathrm N$ per $10\,\mathrm m$, senza attrito. Energia cinetica acquistata: $50 \cdot 10 = 500\,\mathrm J$. Velocità: $v = \sqrt{2 \cdot 500/2} \approx 22{,}3\,\mathrm{m/s}$.
:::

## Carattere vettoriale delle forze
Più forze sullo stesso punto si sommano come vettori. La loro somma è la **risultante** $\vec R = \sum_i \vec F_i = m\vec a$. Ogni forza agisce in modo indipendente dalle altre.

Come si sommano:
- forze con direzioni diverse: **regola del parallelogramma**;
- forze perpendicolari: $R = \sqrt{F_1^2 + F_2^2}$;
- tre forze: prima sommi due, poi aggiungi la terza.

::: esempio
Esempio di carattere vettoriale: due persone tirano una cassa con $30\,\mathrm N$ ciascuna. Se tirano nello stesso verso la risultante è $60\,\mathrm N$. In versi opposti è $0$. Ad angolo retto è $\sqrt{30^2 + 30^2} \approx 42\,\mathrm N$, in diagonale. Stesse forze, effetti diversi: conta la direzione.
:::

**Equilibrio di tre forze.** Tre forze possono annullarsi solo se possono formare un triangolo chiuso. Quindi ciascuna non deve superare la somma delle altre due. Con $1$, $3$ e $5\,\mathrm N$ l'equilibrio è impossibile, perché $5 > 1 + 3$.

## Risultante nulla: velocità costante
Se un corpo si muove a **velocità costante** (o sta fermo), la risultante è **zero**. Questo è il ragionamento chiave di molti quesiti:
- un carrello tirato da $10\,\mathrm N$ a velocità costante: l'attrito vale $10\,\mathrm N$;
- corpo a velocità costante con $6\,\mathrm N$ a destra e $2\,\mathrm N$ a sinistra: l'attrito vale $4\,\mathrm N$ **verso sinistra**; la componente verticale della risultante è $0$ (peso e reazione del piano si bilanciano);
- aereo in crociera a velocità costante: risultante $0\,\mathrm N$, la spinta dei motori bilancia l'attrito dell'aria;
- insetto in volo a velocità costante: l'aria gli dà una spinta verso l'alto pari al suo peso;
- sasso che affonda a velocità costante: peso, spinta di Archimede e attrito dell'acqua hanno risultante nulla;
- forza su un oggetto fermo che non lo mette in moto: altre forze (per esempio l'attrito statico) la annullano.

## Forze utili nei quesiti
- **Peso** $P = mg$: un uomo di $686\,\mathrm N$ ha massa $686/9{,}8 = 70\,\mathrm{kg}$. Un peso di $25\,\mathrm{kg}$ tira una corda con $245\,\mathrm N$: una corda da $250\,\mathrm N$ regge.
- **Densità** $d = m/V$, in $\mathrm{kg/m^3}$: $15\,\mathrm g$ in $20\,\mathrm{ml}$ danno $0{,}75\,\mathrm{g/cm^3} = 750\,\mathrm{kg/m^3}$.
- **Spinta di Archimede**: un fluido spinge verso l'alto un corpo immerso, con forza pari al peso del fluido spostato.
- **Piano inclinato** di altezza $h$ e lunghezza $l$: la componente del peso lungo il piano è $P\sin\alpha = P\,h/l$. Per tenere fermo un carrello da $200\,\mathrm N$ su un piano lungo $2\,\mathrm m$ e alto $1{,}5\,\mathrm m$ servono $200 \cdot 1{,}5/2 = 150\,\mathrm N$.

## Ascensore con accelerazione
Dentro un ascensore che accelera con $\vec A$, un corpo libero ha accelerazione relativa $\vec g - \vec A$. Se misuri per il corpo $g$ verso l'**alto**, serve $\vec A = 2g$ verso il **basso**: l'ascensore scende più veloce della caduta libera.

## Terzo principio (azione e reazione)
Se un corpo A esercita una forza su un corpo B, anche B esercita una forza su A:
$$\vec F_{B\to A} = -\vec F_{A\to B}$$
dove $\vec F_{A\to B}$ = forza di A su B (N) e $\vec F_{B\to A}$ = forza di B su A (N).

Le due forze hanno:
- **stesso modulo**;
- **stessa direzione** (stessa retta d'azione);
- **verso opposto**;
- sono applicate a **corpi diversi**, quindi non si annullano tra loro.

::: esempio
Il Sole attira Giove e Giove attira il Sole. Anche se la massa di Giove è mille volte minore, le due forze hanno lo stesso modulo: rapporto $1 : 1$. Cambiano solo le accelerazioni: Giove accelera molto di più.
:::

::: attenzione
"Stesso modulo ma direzioni opposte" è sbagliato: la direzione è la stessa, è il **verso** a essere opposto. E le forze non dipendono dalle masse dei due corpi.
:::

## I tre principi insieme
1. $\sum\vec F = 0 \Rightarrow \vec v$ costante (inerzia).
2. $\sum\vec F \ne 0 \Rightarrow \vec F = m\vec a$.
3. $\vec F_{AB} = -\vec F_{BA}$ (azione e reazione).

Si chiamano "principi" perché vengono dall'esperienza e non si dimostrano da altre leggi. Valgono nei sistemi inerziali. $F = ma$ vale uguale in tutti i sistemi inerziali, perché lì l'accelerazione è la stessa.

::: esame
Aperte frequenti: esporre il secondo principio ($F = ma$, risultante, vettori, newton); esporre il concetto di forza (interazione tra corpi, vettore, effetti dinamici e statici, misura con dinamometro); fare un esempio del carattere vettoriale delle forze (due forze uguali con angoli diversi danno risultanti diverse).
:::

::: sintesi
- $\vec F = m\vec a$: la risultante determina l'accelerazione; $1\,\mathrm N = 1\,\mathrm{kg\,m/s^2}$.
- Forza costante da fermo: $a = F/m$, $v = at$, $s = \tfrac12 at^2$; oppure $Fs = \tfrac12 mv^2$.
- Le forze si sommano come vettori (parallelogramma, Pitagora se perpendicolari).
- Velocità costante ⇒ risultante nulla: da qui si ricavano attriti e spinte.
- Azione e reazione: stesso modulo e direzione, verso opposto, corpi diversi.
:::

=== 12 dispense
# Lezione 12 — Forza peso, reazioni vincolari e applicazioni

## Massa e peso
La **massa** è una proprietà del corpo. Misura la sua inerzia e non cambia da un luogo all'altro. Si misura in kg.

Il **peso** è una forza: l'attrazione gravitazionale sul corpo. È un vettore verticale, verso il basso:
$$\vec P = m\vec g$$
dove $\vec P$ = peso (N), $m$ = massa (kg), $\vec g$ = accelerazione di gravità ($9{,}8\,\mathrm{m/s^2}$ sulla Terra).

Peso e massa sono grandezze **diverse** ma **direttamente proporzionali**. Un oggetto portato su Venere ha la stessa massa ma un peso diverso, perché lì $g$ è diverso.

Il peso agisce lungo la **verticale passante per il baricentro**. Su un corpo rigido una forza si può spostare lungo la sua retta d'azione senza cambiare l'effetto. Quindi il peso si può applicare in qualunque punto di quella verticale.

::: esempio
Ragazzo di $44\,\mathrm{kg}$: $P = 44 \cdot 9{,}8 \approx 430\,\mathrm N$. Corpo di $3\,\mathrm{kg}$ appeso a una fune: tensione $T = mg \approx 30\,\mathrm N$.
:::

## Caduta dei gravi
Senza aria tutti i corpi cadono con la stessa accelerazione $g$, qualunque sia la massa. Il peso cresce con la massa, ma cresce allo stesso modo anche l'inerzia: $a = mg/m = g$.

Moto uniformemente accelerato da fermo: $v = gt$, $h = \tfrac12 gt^2$, $v = \sqrt{2gh}$.

L'energia potenziale cambia solo con il dislivello: $\Delta U = mg\,\Delta h$. Su una rampa curva senza attrito conta solo l'altezza, non la lunghezza o la forma.

Con l'aria la situazione cambia: l'attrito viscoso cresce con la velocità. Le gocce di pioggia, alla fine, cadono a velocità costante perché l'attrito bilancia il peso (vedi lezione sugli attriti).

## Reazioni vincolari
Un **vincolo** è un oggetto che impedisce certi movimenti: un tavolo, un pavimento, un filo appeso a una parete. La forza che il vincolo esercita sul corpo si chiama **reazione vincolare**.

Perché servono? Un libro sul tavolo ha un peso, ma resta fermo. Per il primo principio la risultante deve essere nulla. Deve quindi esistere una forza che bilancia il peso: è la reazione del tavolo. Senza reazioni vincolari le leggi della dinamica non spiegherebbero i corpi appoggiati o appesi.

Proprietà della reazione di un piano (senza attrito):
- è sempre **perpendicolare** alla superficie (per questo si chiama anche **forza normale** $N$);
- il suo modulo **non è fisso**: si adatta. È uguale e opposto alla somma delle componenti delle altre forze perpendicolari al piano.

::: esempio
Oggetto di $2\,\mathrm{kg}$ su un tavolo, spinto in giù con $20\,\mathrm N$. La reazione deve bilanciare peso e spinta: $N = 2 \cdot 9{,}8 + 20 \approx 40\,\mathrm N$.
Blocco tirato orizzontalmente a velocità costante, con attrito $f$: in orizzontale $F = f$, in verticale $N = P$.
:::

## Tensione dei fili
Un filo **inestensibile e di massa trascurabile** trasmette una forza, la **tensione** $T$.
- È diretta lungo il filo, **verso l'interno** del filo: tira i corpi attaccati.
- Ha lo **stesso modulo** ai due estremi.
- Ai due estremi ha quindi **verso opposto**.

Una **puleggia** (carrucola) senza massa e senza attrito cambia solo la direzione del filo, non il modulo della tensione.

::: esempio
Secchio di $120\,\mathrm N$ calato a velocità costante: risultante nulla, quindi $T = 120\,\mathrm N$. Non dipende da quanto veloce scende.
:::

## Fune che tira in verticale (ascensori)
Con peso e una forza verticale, scegli l'alto come positivo e scrivi:
$$T - mg = ma$$
dove $T$ = tensione o forza verso l'alto (N), $m$ = massa (kg), $a$ = accelerazione (m/s², positiva se verso l'alto).

::: esempio
- Cavo da $21\,750\,\mathrm N$ massimi, ascensore di $2100\,\mathrm{kg}$: $a = (21\,750 - 2100 \cdot 9{,}8)/2100 \approx 0{,}56\,\mathrm{m/s^2}$ verso l'alto.
- Corpo di $60\,\mathrm{kg}$ con $450\,\mathrm N$ verso l'alto: $450 - 588 = -138\,\mathrm N$, quindi $a = 138/60 = 2{,}3\,\mathrm{m/s^2}$ verso il **basso**.
:::

## Piano inclinato
Un corpo su un piano liscio inclinato di $\theta$ subisce peso e reazione normale. Scomponi il peso lungo il piano e perpendicolarmente:
$$ma = mg\sin\theta, \qquad N = mg\cos\theta$$
dove $\theta$ = inclinazione (rad o gradi), $N$ = reazione del piano (N).

Quindi $a = g\sin\theta$: l'accelerazione è **sempre minore o uguale a $g$** (uguale solo se il piano è verticale).

In fondo al piano la velocità è $v = \sqrt{2gh}$. Dipende solo dall'altezza $h$, non dalla lunghezza o dalla pendenza. È la stessa di una caduta libera dalla stessa altezza.

## Macchina di Atwood
Due masse $m_1$ e $m_2$ appese ai capi di un filo che passa su una carrucola. La più pesante scende, l'altra sale.
$$a = \frac{m_2 - m_1}{m_1 + m_2}\,g, \qquad T = \frac{2m_1 m_2}{m_1 + m_2}\,g$$
dove $m_1, m_2$ = masse (kg), $a$ = accelerazione comune (m/s²), $T$ = tensione del filo (N).

Scegliendo masse quasi uguali si ottiene un'accelerazione piccola a piacere: così si studia la caduta "al rallentatore".

::: esempio
$9\,\mathrm{kg}$ e $11\,\mathrm{kg}$: $a = \dfrac{2}{20}\,g = g/10 \approx 0{,}98\,\mathrm{m/s^2}$.
:::

## Forza centripeta
Nel moto circolare uniforme la velocità cambia direzione. Serve quindi una forza verso il centro, la **forza centripeta**:
$$F_c = \frac{mv^2}{r} = m\omega^2 r$$
dove $v$ = velocità (m/s), $r$ = raggio (m), $\omega$ = velocità angolare (rad/s).

Non è un nuovo tipo di forza. È il ruolo svolto da una forza vera: la tensione di un filo, la gravità, l'attrito. Se il filo si spezza, il corpo prosegue in linea retta lungo la tangente.

::: esempio
- Sasso di $0{,}5\,\mathrm{kg}$ a $10\,\mathrm{m/s}$ su un cerchio di $2\,\mathrm m$: $F = 0{,}5 \cdot 100/2 = 25\,\mathrm N$.
- Filo con tensione $300\,\mathrm N$, $r = 2\,\mathrm m$, $v = 10\,\mathrm{m/s}$: $m = 300 \cdot 2/100 = 6\,\mathrm{kg}$.
- Terra intorno al Sole: $\omega = 2\pi/T$ con $T = 1$ anno $\approx 3{,}15\cdot 10^7\,\mathrm s$; $a_c = \omega^2 r \approx 5{,}9\cdot 10^{-3}\,\mathrm{m/s^2}$.
:::

## Astronauti "senza peso"
L'astronauta sullo shuttle in orbita galleggia. La gravità agisce ancora, eccome. Lui e lo shuttle cadono insieme intorno alla Terra. Nel riferimento dello shuttle, che ruota, la **forza centrifuga** (apparente) compensa la gravità. Il risultato è l'assenza di peso apparente.

## Altri calcoli ricorrenti
- Forza da legge oraria: $18\,\mathrm m$ in $6\,\mathrm s$ da fermo con $10\,\mathrm N$ → $a = 2s/t^2 = 1\,\mathrm{m/s^2}$, $m = 10\,\mathrm{kg}$.
- Aereo con due motori da $1{,}40\cdot 10^5\,\mathrm N$ che accelera a $2{,}30\,\mathrm{m/s^2}$: $m = 2{,}80\cdot 10^5/2{,}30 \approx 1{,}22\cdot 10^5\,\mathrm{kg} = 122\,\mathrm t$.
- Mongolfiera ferma in aria: la spinta di Archimede verso l'alto è uguale al suo peso.

::: esame
Aperte frequenti: "Cos'è il peso?", "Cos'è la massa?" (proprietà intrinseca, inerzia, kg, non cambia), "Cos'è una reazione vincolare e perché occorre definirla?" (forza del vincolo che rende possibile l'equilibrio; normale al piano, modulo non noto a priori), "Concetti base della caduta dei gravi" (stessa $g$ per tutti, $v = gt$, $h = \tfrac12 gt^2$, Galileo).
:::

::: sintesi
- $\vec P = m\vec g$: peso e massa proporzionali ma diversi; la massa non cambia, il peso sì.
- Reazione vincolare: perpendicolare al piano, modulo che si adatta alle altre forze.
- Tensione: stesso modulo ai capi, diretta verso l'interno del filo.
- Piano inclinato: $a = g\sin\theta \le g$; Atwood: $a = \dfrac{m_2 - m_1}{m_1 + m_2}g$.
- Moto circolare: $F_c = mv^2/r$ fornita da una forza reale.
:::

=== 13 dispense
# Lezione 13 — Sistemi non inerziali e forze apparenti

## Cos'è un sistema non inerziale
Un sistema è **non inerziale** se accelera o ruota rispetto a un sistema inerziale. Esempi: un'auto che frena, un ascensore che parte, una giostra, la Terra stessa.

In un sistema non inerziale il principio d'inerzia non vale. Un corpo libero sembra accelerare senza che niente lo spinga.

## Le forze apparenti
Per usare comunque $F = ma$ l'osservatore non inerziale aggiunge delle **forze apparenti** (dette anche fittizie o d'inerzia):
$$m\vec a\,' = \vec F_{reali} + \vec F_{app}$$
dove $\vec a\,'$ = accelerazione misurata nel sistema non inerziale (m/s²), $\vec F_{reali}$ = forze dovute a interazioni vere (N), $\vec F_{app}$ = forze apparenti (N).

Le forze apparenti vengono dai termini di trascinamento e di Coriolis del moto relativo. Proprietà:
- **non** derivano dall'interazione con un altro corpo;
- quindi **non hanno reazione**: il terzo principio non vale per loro;
- esistono solo per l'osservatore non inerziale; per quello fermo non esistono;
- sono proporzionali alla massa (per questo si chiamano "d'inerzia");
- non sono immaginarie: si **misurano** con un dinamometro.

## Sistema che trasla con accelerazione
Se il sistema accelera con $\vec A$, compare la forza apparente di trascinamento:
$$\vec F_t = -m\vec A$$
dove $m$ = massa del corpo (kg) e $\vec A$ = accelerazione del sistema (m/s²). È sempre opposta all'accelerazione del sistema.

::: esempio
Un furgone frena a $-2{,}8\,\mathrm{m/s^2}$. Una cassa di $0{,}25\,\mathrm{kg}$ scorre senza attrito sul pianale.
- Da terra: la cassa continua a velocità costante (nessuna forza orizzontale).
- Dal furgone: la cassa accelera in avanti, spinta da $F' = 0{,}25 \cdot 2{,}8 = 0{,}7\,\mathrm N$.
Lo stesso ti succede in un'auto che frena di colpo: ti senti spinto in avanti da $-m\vec A$.
:::

## L'ascensore
Un corpo su una bilancia dentro un ascensore che accelera con $a_R$. La bilancia misura la reazione vincolare $R$.
- Ascensore fermo o a velocità costante: $R = mg$.
- Accelera verso l'**alto**: $R = m(g + a_R)$, ti senti più pesante.
- Accelera verso il **basso** con $a_R < g$: $R = m(g - a_R)$, ti senti più leggero.
- **Caduta libera** ($a_R = g$): $R = 0$. Il corpo è in equilibrio nell'ascensore ma la bilancia segna zero.
- Scende con $a_R > g$: il corpo si stacca e accelera verso il soffitto con $a' = a_R - g$.

Gli aerei per l'addestramento all'assenza di peso sfruttano proprio la caduta libera.

## Sistema rotante: forza centrifuga
Una massa ferma sul bordo di una piattaforma che ruota con $\omega$ costante. Nel sistema della piattaforma è ferma, quindi la risultante deve essere nulla. La forza reale che la trattiene (centripeta) è bilanciata da una forza apparente, la **forza centrifuga**:
$$F_{cf} = m\omega^2 r = \frac{mv^2}{r}$$
dove $m$ = massa (kg), $\omega$ = velocità angolare (rad/s), $r$ = distanza dall'asse (m), $v$ = velocità (m/s). È diretta radialmente **verso l'esterno**.

::: esempio
Auto in curva. Il passeggero dice: "Una forza mi spinge verso l'esterno" (forza centrifuga). L'osservatore a terra dice: "Il passeggero tende ad andare dritto per inerzia; è il sedile che lo spinge verso il centro". Stessa scena, due descrizioni corrette.
:::

**Si può misurare la forza centrifuga?** Sì, ma solo in un sistema non inerziale. Un dinamometro che trattiene un corpo su una giostra segna una forza. Per l'osservatore rotante è la centrifuga. Per l'osservatore inerziale è la forza centripeta che il dinamometro esercita sul corpo.

**Peso e latitudine.** La Terra ruota, quindi a latitudine $\alpha$ si sente una piccola forza centrifuga $m\omega^2 R\cos\alpha$. Il peso misurato è leggermente minore all'Equatore che ai poli (circa lo $0{,}3\%$). La verticale del filo a piombo devia di pochi decimi di grado.

## Sistema rotante: forza di Coriolis
Se il corpo si **muove** rispetto al sistema rotante, compare una seconda forza apparente:
$$\vec F_{Co} = -2m\,\vec\omega \times \vec v\,'$$
dove $\vec\omega$ = velocità angolare del sistema (rad/s) e $\vec v\,'$ = velocità del corpo rispetto al sistema rotante (m/s).

Caratteristiche:
- è perpendicolare alla velocità relativa: devia il corpo senza cambiarne il modulo della velocità;
- è nulla se il corpo è fermo nel sistema rotante o si muove parallelo all'asse.

Esempio della giostra: dal centro lanci una palla verso l'esterno. Da terra la palla va dritta. Per chi sta sulla giostra (che gira in senso antiorario) la palla curva verso destra: serve la forza di Coriolis per spiegarlo.

Effetti sulla Terra:
- nell'emisfero Nord i corpi in moto vengono deviati verso **destra**, nel Sud verso **sinistra**;
- venti e correnti marine deviano; i cicloni girano in senso antiorario a Nord e orario a Sud;
- un grave che cade viene deviato verso Est;
- una sponda dei fiumi si erode più dell'altra.

Se la velocità angolare cambia nel tempo, compare anche una terza forza apparente, $-m\,\dfrac{d\vec\omega}{dt} \times \vec r\,'$.

::: attenzione
Nei problemi normali la Terra si tratta come inerziale. Gli effetti sono piccoli: un grave che cade da $100\,\mathrm m$ devia di pochi centimetri. Contano solo per fenomeni lunghi e su grandi distanze.
:::

::: sintesi
- Non inerziale = accelerato o rotante; lì si aggiungono forze apparenti.
- Traslazione accelerata: $\vec F_t = -m\vec A$ (auto che frena, ascensore).
- Rotazione: centrifuga $m\omega^2 r$ verso l'esterno; Coriolis $-2m\,\vec\omega\times\vec v\,'$ sui corpi in moto.
- Le forze apparenti non hanno reazione e non vengono da un corpo, ma si misurano con un dinamometro.
- La forza centrifuga esiste solo nel sistema non inerziale.
:::

=== 14 dispense
# Lezione 14 — Forze di attrito e resistenza del mezzo

## Cos'è l'attrito
L'esperienza mostra tre fatti:
- per mettere in moto un corpo bisogna superare una forza di soglia;
- un corpo lanciato su un piano rallenta fino a fermarsi;
- per tenerlo a velocità costante bisogna spingere sempre.

C'è quindi una forza che si oppone al moto: l'**attrito**. Dipende dal peso del corpo e dalla rugosità delle superfici.

Tipi di attrito:

| Tipo | Quando agisce | Modulo |
|---|---|---|
| Statico | corpo fermo sulla superficie | da $0$ fino a $\mu_s N$ |
| Dinamico (radente) | corpo che striscia | $\mu_d N$, costante |
| Volvente | corpo che rotola | molto più piccolo del radente |
| Viscoso | corpo che si muove in un fluido | cresce con la velocità |

## Attrito statico
Agisce quando il corpo è fermo e una forza cerca di muoverlo. È parallelo alla superficie e opposto alla forza applicata. **Si adatta**: vale esattamente quanto serve a tenere fermo il corpo, fino a un massimo:
$$F_s \le \mu_s N$$
dove:
- $F_s$ = forza di attrito statico (N);
- $\mu_s$ = coefficiente di attrito statico (numero puro), dipende solo dalle due superfici;
- $N$ = forza normale, cioè la risultante delle forze perpendicolari alla superficie (N).

Il valore massimo $\mu_s N$ è la **forza di primo distacco**: la minima forza per mettere in moto il corpo.

Proprietà:
- **non dipende dall'area di contatto**: un mattone appoggiato di piatto o di taglio richiede la stessa forza;
- è proporzionale a $N$: appoggi un secondo mattone uguale e la forza di primo distacco raddoppia; $\mu_s$ invece non cambia.

::: esempio
Blocco di $4\,\mathrm{kg}$, $\mu_s = 0{,}5$, spinto con $10\,\mathrm N$. Attrito massimo: $0{,}5 \cdot 4 \cdot 9{,}8 = 19{,}6\,\mathrm N$. Poiché $10 < 19{,}6$ il blocco resta fermo e l'attrito vale **$10\,\mathrm N$**, non $19{,}6$.
Scatola di $0{,}55\,\mathrm{kg}$ che parte con $2{,}8\,\mathrm N$: $\mu_s = 2{,}8/(0{,}55 \cdot 9{,}8) \approx 0{,}51$.
:::

**Angolo di attrito.** L'attrito si può vedere come la componente parallela della reazione del piano. La reazione totale forma con la normale un angolo $\theta$. Il corpo resta fermo finché $\tan\theta \le \mu_s$.

## Attrito dinamico
Agisce quando il corpo **striscia**. È parallelo alla superficie e opposto alla velocità:
$$F_d = \mu_d N$$
dove $F_d$ = forza di attrito dinamico (N), $\mu_d$ = coefficiente di attrito dinamico (numero puro), $N$ = forza normale (N).

Proprietà:
- in pratica non dipende dalla velocità né dall'area di contatto;
- di solito $\mu_d < \mu_s$. Per questo serve più forza all'inizio per smuovere un oggetto, e meno dopo per tenerlo in moto a velocità costante;
- chi trascina una valigia su un pavimento scabro compie lavoro contro l'attrito dinamico.

::: esempio
- Trascinare a velocità costante $2\,\mathrm{kg}$ con $\mu_d = 0{,}3$: $F = 0{,}3 \cdot 2 \cdot 9{,}8 \approx 5{,}9\,\mathrm N$.
- Cassa da $240\,\mathrm N$ spinta con $24\,\mathrm N$ a velocità costante: $\mu = 24/240 = 0{,}1$.
- Slitta a $4\,\mathrm{m/s}$ con $\mu = 0{,}14$: decelera di $a = \mu g \approx 1{,}37\,\mathrm{m/s^2}$ e si ferma dopo $s = v^2/(2a) \approx 5{,}8\,\mathrm m$.
- Due masse legate, $m_1 = 2\,\mathrm{kg}$ ($\mu_1 = 0{,}3$) e $m_2 = 5\,\mathrm{kg}$ ($\mu_2 = 0{,}2$), a velocità costante: $F = (\mu_1 m_1 + \mu_2 m_2)g \approx 15{,}7\,\mathrm N$.
:::

## Problemi con forza e attrito insieme
Usa sempre $F_{applicata} - F_{attrito} = ma$.

::: esempio
- Blocco di $2\,\mathrm{kg}$ con $F = 2\,\mathrm N$ che accelera a $0{,}5\,\mathrm{m/s^2}$: risultante $1\,\mathrm N$, quindi attrito $= 2 - 1 = 1\,\mathrm N$.
- Modellino di aereo di $2\,\mathrm{kg}$, motore $10\,\mathrm N$, accelera a $3\,\mathrm{m/s^2}$: resistenza dell'aria $= 10 - 6 = 4\,\mathrm N$.
- Due cavalli tirano un masso con $500\,\mathrm N$ ciascuno, ad angolo retto; il masso resta fermo. Risultante $500\sqrt2 \approx 707\,\mathrm N$: l'attrito statico vale circa $700\,\mathrm N$.
- Blocco di $30\,\mathrm{kg}$ ($\mu_s = 0{,}40$) su un tavolo, tirato da un corpo appeso tramite una carrucola: parte se $mg \ge \mu_s Mg$, cioè $m \ge 0{,}40 \cdot 30 = 12\,\mathrm{kg}$.
:::

**Fune inclinata.** Se tiri con una fune a un angolo $\theta$ verso l'alto, una parte della forza solleva il corpo e riduce $N$:
$$F\cos\theta = \mu_s\,(mg - F\sin\theta)$$
dove $F\cos\theta$ = componente orizzontale della forza (N) e $mg - F\sin\theta$ = forza normale ridotta (N).

::: esempio
Cassa di $12\,\mathrm{kg}$, $\mu_s = 0{,}3$, fune a $30°$: $F = \dfrac{0{,}3 \cdot 117{,}6}{0{,}866 + 0{,}15} \approx 34{,}7\,\mathrm N$.
:::

## Attrito volvente e ruote che frenano
L'**attrito volvente** si oppone al rotolamento. È molto più debole dell'attrito radente. Per questo è più facile far rotolare un tronco che trascinarlo con una corda, e si usano le ruote.

In una ruota che rotola senza strisciare, il punto a contatto con il suolo è fermo per un istante. Lì agisce l'**attrito statico**, più grande di quello dinamico. Se le ruote si bloccano, la gomma striscia e agisce l'attrito dinamico, più debole. Per questo sul ghiaccio conviene frenare senza bloccare le ruote (ABS).

## Attrito viscoso e resistenza del mezzo
Un corpo che si muove in un fluido (aria, acqua) subisce una forza resistente. È opposta alla velocità e **dipende dalla velocità**. Se il corpo è fermo rispetto al fluido, questa forza è zero.

**Velocità basse (moto laminare):**
$$\vec F = -\beta\,\vec v$$
dove $\beta$ = coefficiente che dipende da forma del corpo e viscosità del fluido (kg/s) e $\vec v$ = velocità rispetto al fluido (m/s).

**Velocità alte (con vortici):**
$$F_r = \tfrac12\,C\,\rho\,A\,v^2$$
dove:
- $C$ = coefficiente di resistenza aerodinamica (numero puro);
- $\rho$ = densità del fluido (kg/m³);
- $A$ = area della sezione del corpo perpendicolare al moto (m²);
- $v$ = velocità (m/s).

A $130\,\mathrm{km/h}$ in autostrada l'attrito che domina è quello viscoso dell'aria.

## Velocità limite
Un corpo che cade in un fluido parte da fermo. All'inizio conta solo il peso, e accelera. Con la velocità cresce l'attrito viscoso. Quando l'attrito uguaglia il peso, l'accelerazione si annulla. Da lì il corpo cade a **velocità costante**, la velocità limite:
$$m\frac{dv}{dt} = mg - \beta v \quad\Rightarrow\quad v(t) = \frac{mg}{\beta}\left(1 - e^{-\beta t/m}\right) \quad\Rightarrow\quad v_{lim} = \frac{mg}{\beta}$$
dove $v_{lim}$ = velocità limite (m/s), $t$ = tempo (s), $e$ = numero di Nepero.

La velocità limite cresce con il peso e diminuisce con $\beta$, cioè con l'area e la densità del mezzo. È il principio del paracadute: grande area, velocità limite bassa.

Conseguenze:
- una goccia di pioggia caduta da migliaia di metri non ci uccide: raggiunge presto la velocità limite (pochi m/s) e non accelera più. La sua energia cinetica resta piccola;
- un palloncino lasciato dal soffitto raggiunge presto la velocità limite: nel tratto finale cade a velocità quasi costante;
- una palla lanciata in alto più veloce della velocità limite subisce la resistenza massima **subito dopo il lancio**, quando è più veloce. In discesa non supera la velocità limite.

## Potenza contro la resistenza
Per muoversi a velocità costante contro una forza resistente $F$ serve una potenza:
$$P = F\,v$$
dove $P$ = potenza (W), $F$ = forza resistente (N), $v$ = velocità (m/s).

::: esempio
Nuotatore a $0{,}22\,\mathrm{m/s}$ contro $110\,\mathrm N$: $P = 110 \cdot 0{,}22 \approx 24\,\mathrm W$.
:::

**Correre e nuotare.** Chi corre si muove nell'aria, poco densa: la resistenza è piccola e il costo dipende soprattutto dal sollevare il corpo a ogni passo. Chi nuota si muove nell'acqua, circa mille volte più densa e molto più viscosa. La resistenza del mezzo è enorme anche a bassa velocità. Il nuoto quindi costa molta più energia a parità di velocità.

## Attrito ed energia
Con l'attrito l'energia meccanica diminuisce: una parte diventa calore. Senza attrito un corpo che scende da fermo di un'altezza $h$ arriva con $v = \sqrt{2gh}$. Non può mai arrivare più veloce.

::: esempio
Bambino su uno scivolo alto $2\,\mathrm m$: al massimo $v = \sqrt{2 \cdot 9{,}8 \cdot 2} \approx 6{,}3\,\mathrm{m/s}$. Se il testo dice $7{,}2\,\mathrm{m/s}$ partendo da fermo, la situazione è impossibile.
:::

::: esame
Aperte frequenti: differenza tra statico e dinamico ($\le\mu_s N$ che si adatta, contro $\mu_d N$ fisso; $\mu_d < \mu_s$); differenza tra dinamico e viscoso (tra solidi e indipendente da $v$, contro in un fluido e dipendente da $v$); proprietà di ciascun attrito; tipologie di attrito; caduta in un mezzo viscoso (velocità limite); goccia di pioggia; corsa contro nuoto.
:::

::: sintesi
- Statico: $F_s \le \mu_s N$, si adatta alla forza applicata; il massimo è la forza di primo distacco.
- Dinamico: $F_d = \mu_d N$, opposto al moto, $\mu_d < \mu_s$; entrambi non dipendono dall'area.
- Volvente molto minore del radente; ruota che rotola = attrito statico.
- Viscoso: $-\beta v$ (basse velocità) o $\tfrac12 C\rho A v^2$ (alte); porta alla velocità limite $v_{lim} = mg/\beta$.
- Potenza contro una resistenza: $P = Fv$.
:::
