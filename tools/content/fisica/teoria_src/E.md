=== 28 dispense
# Lezione 28 — Dinamica del corpo rigido

## Come si muove un corpo rigido
Un corpo rigido non si deforma: le distanze tra i suoi punti restano fisse. Il suo moto più generale è una traslazione più una rotazione su se stesso, che avvengono insieme.

- **Traslazione**: tutti i punti si spostano come il centro di massa. Basta seguire il centro di massa.
- **Rotazione attorno a un asse**: tutti i punti hanno la stessa velocità angolare $\omega$. Ogni punto però va più veloce se è più lontano dall'asse.

$$v = \omega r$$
dove:
- $v$ = velocità del punto (m/s)
- $\omega$ = velocità angolare (rad/s)
- $r$ = distanza del punto dall'asse (m)

## Forze parallele
Due forze parallele applicate a un corpo rigido si sommano come numeri con il segno. Se hanno lo stesso verso, la risultante è la somma delle intensità. Se hanno verso opposto, è la differenza. Il punto di applicazione della risultante sta più vicino alla forza più grande.

## Momento d'inerzia
Il momento d'inerzia dice quanto un corpo "resiste" a essere messo in rotazione. È il corrispondente della massa per le rotazioni. Dipende dalla massa e da quanto è lontana dall'asse.

$$I = \sum_i m_i r_i^2 \qquad \text{oppure} \qquad I = \int r^2\,dm$$
dove:
- $I$ = momento d'inerzia rispetto all'asse (kg·m²)
- $m_i$ = massa del singolo punto (kg)
- $r_i$ = distanza del punto dall'asse (m)

Valori da sapere (asse passante per il centro):

| Corpo | $I$ |
|---|---|
| Anello (o cilindro cavo sottile) | $MR^2$ |
| Disco o cilindro pieno | $\tfrac12 MR^2$ |
| Sfera piena | $\tfrac25 MR^2$ |
| Sfera cava sottile | $\tfrac23 MR^2$ |
| Asta sottile, asse nel centro | $\tfrac1{12} ML^2$ |
| Asta sottile, asse a un estremo | $\tfrac13 ML^2$ |

A parità di massa, più la massa sta lontano dall'asse, più $I$ è grande.

## Teorema di Huygens-Steiner
Serve a calcolare $I$ rispetto a un asse che non passa per il centro di massa. Basta conoscere $I$ rispetto all'asse parallelo che passa per il centro di massa.

$$I_h = I_{cm} + M h^2$$
dove:
- $I_h$ = momento d'inerzia rispetto al nuovo asse (kg·m²)
- $I_{cm}$ = momento d'inerzia rispetto all'asse parallelo per il centro di massa (kg·m²)
- $M$ = massa totale del corpo (kg)
- $h$ = distanza tra i due assi (m)

Ragionamento in tre passi:
1. Metti l'origine nel centro di massa. Ogni punto ha distanza $r_i$ dal primo asse.
2. Rispetto al secondo asse, spostato di $h$, la distanza al quadrato diventa $r_i^2 + h^2$ più un termine misto.
3. Il termine misto si annulla perché la somma è fatta attorno al centro di massa. Resta $\sum m_i r_i^2 + h^2 \sum m_i = I_{cm} + Mh^2$.

Conseguenza: $I$ è minimo per l'asse che passa per il centro di massa.

::: esempio
Sfera piena, asse tangente alla superficie. L'asse dista $R$ dal centro:
$I = \tfrac25 MR^2 + MR^2 = \tfrac75 MR^2$.
Disco rispetto a un asse perpendicolare sul bordo: $I = \tfrac12 MR^2 + MR^2 = \tfrac32 MR^2$.
:::

## Seconda legge per le rotazioni
Un momento delle forze esterne fa cambiare la velocità angolare. È la versione rotazionale di $F = ma$.

$$M = I\alpha$$
dove:
- $M$ = momento delle forze esterne rispetto all'asse (N·m)
- $I$ = momento d'inerzia (kg·m²)
- $\alpha$ = accelerazione angolare (rad/s²)

Il momento di una forza è $M = F\,b$, con $b$ braccio: distanza tra l'asse e la retta della forza (m).

::: esempio
Puleggia a disco (massa $M$, raggio $R$) con un secchio di massa $m$ appeso alla fune.
Secchio: $mg - T = ma$. Puleggia: $TR = I\alpha$, con $\alpha = a/R$.
Unendo le due equazioni:
$$a = \frac{mg}{m + I/R^2} = \frac{mg}{m + M/2}$$
La puleggia "frena" il secchio: $a$ è sempre minore di $g$.
:::

## Energia cinetica
Un corpo che ruota ha energia cinetica di rotazione. Se anche trasla, le due energie si sommano (teorema di König).

$$K = \tfrac12 M v_{cm}^2 + \tfrac12 I_{cm}\,\omega^2$$
dove:
- $K$ = energia cinetica totale (J)
- $v_{cm}$ = velocità del centro di massa (m/s)
- $I_{cm}$ = momento d'inerzia rispetto al centro di massa (kg·m²)
- $\omega$ = velocità angolare (rad/s)

::: esempio
Disco di 5 kg, raggio 0,2 m, lanciato a 15 m/s mentre gira a 15 rad/s.
Traslazione: $\tfrac12 \cdot 5 \cdot 15^2 = 562{,}5\,\mathrm J$.
Rotazione: $I = \tfrac12 \cdot 5 \cdot 0{,}2^2 = 0{,}1\,\mathrm{kg\,m^2}$, quindi $\tfrac12 \cdot 0{,}1 \cdot 15^2 = 11{,}25\,\mathrm J$.
Totale: circa $574\,\mathrm J$.
:::

Il lavoro di un momento costante è $W = M\,\Delta\theta$. Fa variare l'energia cinetica di rotazione.

## Momento angolare e sua conservazione
Per un corpo che ruota attorno a un asse di simmetria, il momento angolare è parallelo all'asse.

$$L = I\omega \qquad \frac{dL}{dt} = M_{est}$$
dove:
- $L$ = momento angolare (kg·m²/s)
- $M_{est}$ = momento delle forze esterne (N·m)

Se il momento esterno è nullo, $L$ resta costante. Se il corpo cambia forma, cambia $I$ e quindi cambia $\omega$:

$$I_{in}\,\omega_{in} = I_{fin}\,\omega_{fin}$$

**Il pattinatore.** Quando raccoglie le braccia, porta massa vicino all'asse. Il suo $I$ diminuisce. Il ghiaccio non dà momenti esterni rilevanti, quindi $L$ si conserva. Allora $\omega$ deve aumentare: gira più veloce. Se riapre le braccia, rallenta. Lo stesso fa il tuffatore che si raccoglie.

## Equilibrio di un corpo rigido
Un corpo rigido è in equilibrio se sono nulle sia la forza risultante sia il momento risultante. Conta anche cosa succede se lo sposti un po':

| Tipo | Cosa succede spostandolo | Esempio |
|---|---|---|
| Stabile | torna nella posizione iniziale | pendolo appeso, baricentro sotto il punto di sospensione |
| Instabile | si allontana sempre di più | matita in piedi sulla punta |
| Indifferente | resta nella nuova posizione | sfera su un piano orizzontale |

Un corpo appoggiato sta in equilibrio se la verticale dal baricentro cade dentro la base d'appoggio.

**L'uomo in piedi** è in equilibrio instabile. Ha il baricentro alto e una base d'appoggio piccola (i piedi). Si comporta come un pendolo rovesciato: una piccola spinta lo farebbe cadere. Resta in piedi solo grazie a continue piccole correzioni dei muscoli.

::: attenzione
Errore tipico: usare $I_{cm}$ quando l'asse non passa per il centro di massa. Prima applica Steiner, poi $M = I\alpha$ o $K = \tfrac12 I\omega^2$.
:::

::: sintesi
- Moto generale del corpo rigido: traslazione + rotazione; $v = \omega r$.
- Momento d'inerzia $I = \sum m r^2$: disco $\tfrac12MR^2$, anello $MR^2$, sfera $\tfrac25MR^2$.
- Huygens-Steiner: $I_h = I_{cm} + Mh^2$ (sfera, asse tangente: $\tfrac75MR^2$).
- Dinamica: $M = I\alpha$; energia $K = \tfrac12Mv_{cm}^2 + \tfrac12I_{cm}\omega^2$.
- Senza momenti esterni $L = I\omega$ si conserva: il pattinatore che chiude le braccia gira più veloce.
- L'uomo in piedi è in equilibrio instabile.
:::

=== 29 dispense
# Lezione 29 — Moto di rotolamento

## Che cos'è il rotolamento puro
Una ruota che rotola senza strisciare fa due cose insieme. Il centro trasla in avanti e la ruota gira attorno al centro. I due moti sono legati: in un giro il centro avanza di una circonferenza.

$$v_{cm} = \omega R \qquad a_{cm} = \alpha R$$
dove:
- $v_{cm}$ = velocità del centro della ruota (m/s)
- $\omega$ = velocità angolare (rad/s)
- $R$ = raggio della ruota (m)
- $a_{cm}$ = accelerazione del centro (m/s²)
- $\alpha$ = accelerazione angolare (rad/s²)

Perché: se la ruota gira di un angolo $\theta$, il punto di contatto "srotola" un arco $R\theta$ sul terreno. Il centro avanza della stessa lunghezza.

## Velocità dei punti della ruota
Ogni punto ha la velocità del centro più quella dovuta alla rotazione. Le due si sommano come vettori.

| Punto | Velocità |
|---|---|
| Punto a contatto con il suolo | $0$ |
| Centro | $v_{cm}$ |
| Punto più alto | $2v_{cm}$ |

Il punto di contatto è fermo in ogni istante. Per questo si può vedere il rotolamento come una pura rotazione attorno al punto di contatto.

## Energia cinetica nel rotolamento
L'energia cinetica è la somma di una parte di traslazione e una di rotazione.

$$K = \tfrac12 M v_{cm}^2 + \tfrac12 I_{cm}\,\omega^2 = \tfrac12\left(M + \frac{I_{cm}}{R^2}\right) v_{cm}^2$$
dove:
- $K$ = energia cinetica (J)
- $M$ = massa (kg)
- $I_{cm}$ = momento d'inerzia rispetto al centro (kg·m²)

Lo stesso risultato si trova ruotando attorno al punto di contatto: $K = \tfrac12 I_P\omega^2$, con $I_P = I_{cm} + MR^2$ (Steiner).

::: esempio
Cilindro pieno che rotola: $I_{cm} = \tfrac12 MR^2$.
$K = \tfrac12 Mv^2 + \tfrac12 \cdot \tfrac12 MR^2 \cdot (v/R)^2 = \tfrac12 Mv^2 + \tfrac14 Mv^2 = \tfrac34 Mv^2$.
:::

## Perché serve l'attrito
Senza attrito una ruota spinta nel centro scivolerebbe senza girare. È l'attrito tra ruota e suolo che la fa ruotare. È un attrito **statico**, perché il punto di contatto è fermo.

Con una forza $F$ orizzontale applicata al centro:
- traslazione: $M a_{cm} = F - f_s$
- rotazione attorno al centro: $I_{cm}\alpha = f_s R$, con $\alpha = a_{cm}/R$

dove $f_s$ è la forza di attrito statico (N).

Il rotolamento resta puro finché $f_s \le \mu_s M g$ ($\mu_s$ = coefficiente di attrito statico, senza unità). Se la forza è troppo grande, la ruota slitta.

L'attrito statico **non compie lavoro**: il punto su cui agisce è fermo. Quindi nel rotolamento puro l'energia meccanica si conserva.

## Rotolamento su un piano inclinato
Un corpo parte da fermo e rotola giù per un piano inclinato di un angolo $\theta$. Unendo le due equazioni (forze e momenti) si ottiene:

$$a = \frac{g\sin\theta}{1 + \dfrac{I_{cm}}{MR^2}}$$
dove:
- $a$ = accelerazione del centro lungo il piano (m/s²)
- $g$ = accelerazione di gravità, $9{,}81\,\mathrm{m/s^2}$
- $\theta$ = inclinazione del piano (rad o gradi)

L'intuizione: parte dell'energia potenziale va nella rotazione. Più grande è $I$, più energia finisce in rotazione e meno in traslazione. Il corpo accelera meno.

| Corpo | $I_{cm}/(MR^2)$ | Accelerazione |
|---|---|---|
| Sfera piena | $2/5$ | $\tfrac57 g\sin\theta$ |
| Cilindro o disco pieno | $1/2$ | $\tfrac23 g\sin\theta$ |
| Anello (ruota vuota) | $1$ | $\tfrac12 g\sin\theta$ |
| Blocco che scivola senza attrito | — | $g\sin\theta$ |

Il risultato non dipende né dalla massa né dal raggio: conta solo la forma.

::: esempio
Una ruota piena e una ruota vuota (anello), stessa massa, partono insieme da ferme. Arriva prima la piena. Ha $I$ più piccolo ($\tfrac12MR^2$ contro $MR^2$), quindi accelera di più.
:::

## Attrito volvente
Nella realtà la ruota e il suolo si deformano un poco nella zona di contatto. Nasce un momento che frena il rotolamento, detto attrito volvente.

$$M_a = h\,m g$$
dove:
- $M_a$ = momento di attrito volvente (N·m)
- $h$ = coefficiente di attrito volvente (m): è una lunghezza
- $m g$ = peso del corpo (N)

È molto più piccolo dell'attrito radente. Per questo le ruote rendono facile spostare carichi pesanti.

## Cenno: il giroscopio
Una trottola che gira velocemente con la punta ferma non cade subito. Il peso crea un momento perpendicolare a $\vec L$. Questo momento cambia la direzione di $\vec L$ ma non il suo modulo. L'asse della trottola ruota lentamente attorno alla verticale: è la **precessione**.

::: esame
Nella domanda aperta "Discutere il moto di rotolamento" porta: la condizione $v_{cm} = \omega R$; il punto di contatto fermo; l'energia $K = \tfrac12Mv^2 + \tfrac12I\omega^2$; il ruolo dell'attrito statico che non fa lavoro; l'accelerazione sul piano inclinato con il confronto sfera/cilindro/anello.
:::

::: sintesi
- Rotolamento puro: $v_{cm} = \omega R$; punto di contatto fermo, punto più alto a $2v_{cm}$.
- Energia: $K = \tfrac12 Mv_{cm}^2 + \tfrac12 I_{cm}\omega^2$ (cilindro pieno: $\tfrac34Mv^2$).
- Serve attrito statico, che non compie lavoro: l'energia meccanica si conserva.
- Piano inclinato: $a = g\sin\theta/(1 + I/MR^2)$; sfera $\tfrac57g\sin\theta$, anello $\tfrac12g\sin\theta$.
- Vince la gara chi ha $I/(MR^2)$ più piccolo: la ruota piena batte quella vuota.
:::

=== 30 dispense
# Lezione 30 — Fluidi: definizione, viscosità, fluidi reali e ideali

## Che cos'è un fluido
Un fluido è una sostanza che non ha forma propria: prende la forma del recipiente. Liquidi e gas sono fluidi.

| Stato | Forma propria | Volume proprio | Comprimibile |
|---|---|---|---|
| Solido | sì | sì | quasi no |
| Liquido | no | sì | quasi no |
| Gas | no | no (occupa tutto lo spazio) | sì |

Un fluido non oppone resistenza allo scorrimento di uno strato sull'altro, se è fermo. Non esiste un "attrito statico" nei fluidi: basta una forza tangenziale piccola per farlo scorrere.

## Densità e pressione
Un fluido si descrive con grandezze d'insieme, non seguendo le singole molecole.

$$\rho = \frac{m}{V}$$
dove:
- $\rho$ = densità (kg/m³)
- $m$ = massa (kg)
- $V$ = volume (m³)

L'acqua ha $\rho \approx 1000\,\mathrm{kg/m^3}$.

$$p = \frac{F}{S}$$
dove:
- $p$ = pressione (Pa)
- $F$ = forza perpendicolare alla superficie (N)
- $S$ = area della superficie (m²)

Unità: $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Altre unità: $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$; $1\,\mathrm{atm} = 1{,}013 \cdot 10^5\,\mathrm{Pa} = 760\,\mathrm{mmHg}$.

La pressione è uno scalare. In un fluido fermo ha lo stesso valore in tutte le direzioni. La forza che produce è sempre perpendicolare alla superficie.

## Viscosità
La viscosità è l'attrito interno di un fluido. Nasce quando strati vicini di fluido scorrono a velocità diverse. Più un fluido è viscoso, più fatica a scorrere: il miele è più viscoso dell'acqua.

Esempio: una lastra si muove sopra uno strato di fluido. Lo strato attaccato alla lastra si muove con lei. Lo strato sul fondo è fermo. In mezzo, la velocità cresce da zero a quella della lastra. Per tenere la lastra in moto serve una forza costante:

$$F = \eta\,S\,\frac{dv}{dy}$$
dove:
- $F$ = forza di attrito viscoso tra gli strati (N)
- $\eta$ = coefficiente di viscosità (Pa·s)
- $S$ = area di contatto tra gli strati (m²)
- $dv/dy$ = quanto cambia la velocità passando da uno strato all'altro (1/s)

Se il profilo è lineare, $dv/dy = v_0/D$, con $v_0$ velocità della lastra e $D$ spessore del fluido.

::: attenzione
La viscosità dipende dalla temperatura in modo opposto per liquidi e gas.
- Liquidi: se la temperatura sale, la viscosità **diminuisce** (l'olio caldo scorre meglio).
- Gas: se la temperatura sale, la viscosità **aumenta**.
:::

## Fluidi ideali e fluidi reali
Per studiare i fluidi si parte da un modello semplice: il fluido ideale (o perfetto).

| | Fluido ideale | Fluido reale |
|---|---|---|
| Viscosità | nulla | presente |
| Comprimibilità | incomprimibile ($\rho$ costante) | può comprimersi (molto nei gas) |
| Energia | si conserva | una parte si dissipa in calore |
| Moto | laminare, senza vortici | laminare o turbolento |
| Leggi | continuità, Bernoulli | Poiseuille, numero di Reynolds |

In un fluido reale che scorre in un tubo orizzontale a sezione costante la pressione **diminuisce** lungo il tubo. L'attrito viscoso consuma energia: serve una differenza di pressione per mantenere il flusso. Questa caduta si chiama perdita di carico.

## Moto laminare e turbolento
- **Laminare**: il fluido scorre a strati ordinati che non si mescolano. Succede a bassa velocità.
- **Turbolento**: il moto diventa caotico, con vortici. Succede ad alta velocità o con ostacoli.

Il numero di Reynolds dice quale dei due regimi si ha:

$$Re = \frac{\rho\,v\,R}{\eta}$$
dove:
- $Re$ = numero di Reynolds (adimensionale)
- $\rho$ = densità del fluido (kg/m³)
- $v$ = velocità media del fluido (m/s)
- $R$ = raggio del condotto (m)
- $\eta$ = viscosità (Pa·s)

Con il raggio: moto laminare per $Re < 1000$, turbolento per $Re$ oltre 2000–10 000. Molti testi usano il diametro $d$ al posto di $R$: allora le soglie tipiche sono circa 2000 (laminare) e 3000 (turbolento). Il concetto è lo stesso: $Re$ grande vuol dire turbolenza.

::: sintesi
- Fluido = niente forma propria; il liquido ha volume proprio ed è quasi incomprimibile, il gas no.
- $\rho = m/V$; $p = F/S$ in pascal ($1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$).
- Viscosità = attrito tra strati di fluido, $F = \eta S\,dv/dy$; nei liquidi cala se T sale.
- Fluido ideale: non viscoso e incomprimibile. Fluido reale: viscoso, perde pressione lungo il tubo.
- Numero di Reynolds: stabilisce se il moto è laminare (Re piccolo) o turbolento (Re grande).
:::

=== 31 dispense
# Lezione 31 — Statica dei fluidi: pressione, Stevino, Pascal, Archimede

## Pressione e densità
La pressione è la forza che agisce su ogni metro quadrato di superficie. La densità è la massa di ogni metro cubo.

$$p = \frac{F}{S} \qquad \rho = \frac{m}{V}$$
dove:
- $p$ = pressione (Pa = N/m²)
- $F$ = forza perpendicolare alla superficie (N)
- $S$ = area (m²)
- $\rho$ = densità (kg/m³)
- $m$ = massa (kg), $V$ = volume (m³)

::: esempio
- Forza da una pressione: $p = 5 \cdot 10^5\,\mathrm{Pa}$ su $3\,\mathrm{m^2}$ dà $F = pS = 1{,}5 \cdot 10^6\,\mathrm N$.
- Blocco di 10,3 kg su $10\,\mathrm{cm^2} = 10^{-3}\,\mathrm{m^2}$: $p = 10{,}3 \cdot 9{,}8/10^{-3} \approx 10^5\,\mathrm{Pa}$, circa 1 atm.
- Massa da densità: ghiaccio ($917\,\mathrm{kg/m^3}$), $10{,}1\,\mathrm{cm^3} = 10{,}1 \cdot 10^{-6}\,\mathrm{m^3}$: $m = \rho V \approx 9{,}26 \cdot 10^{-3}\,\mathrm{kg}$.
:::

Unità di pressione:

| Unità | Valore in Pa |
|---|---|
| pascal (SI) | 1 |
| bar | $10^5$ |
| atmosfera | $1{,}013 \cdot 10^5$ (circa 1 bar) |
| mmHg (torr) | $1\,\mathrm{atm} = 760\,\mathrm{mmHg} = 76\,\mathrm{cmHg}$ |

Quindi 38 cmHg = 0,5 atm.

::: attenzione
Le conversioni sono la prima fonte di errore: $1\,\mathrm{cm^2} = 10^{-4}\,\mathrm{m^2}$, $1\,\mathrm{mm^2} = 10^{-6}\,\mathrm{m^2}$, $1\,\mathrm{l} = 10^{-3}\,\mathrm{m^3}$, $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$.
:::

## Legge di Stevino
In un fluido fermo la pressione cresce con la profondità. Il motivo: ogni strato deve reggere il peso del fluido che ha sopra.

$$p = p_0 + \rho\,g\,h$$
dove:
- $p$ = pressione alla profondità $h$ (Pa)
- $p_0$ = pressione sulla superficie libera, di solito quella atmosferica (Pa)
- $\rho$ = densità del fluido (kg/m³)
- $g$ = accelerazione di gravità, $9{,}81\,\mathrm{m/s^2}$
- $h$ = profondità sotto la superficie (m)

Il termine $\rho g h$ è la pressione idrostatica: il peso della colonna di fluido alta $h$ su ogni m².

Conseguenze:
- La pressione dipende **solo dalla profondità**, non dalla forma del recipiente. Bicchieri diversi riempiti alla stessa altezza hanno la stessa pressione sul fondo (paradosso idrostatico).
- Punti alla stessa quota nello stesso fluido hanno la stessa pressione. Per questo nei vasi comunicanti il liquido sale alla stessa altezza.
- In acqua la pressione aumenta di circa 1 atm ogni 10 m.

::: esempio
- Sub a 50 m: $\rho g h \approx 5\,\mathrm{atm}$, più 1 atm dell'aria sopra. Totale circa **6 atm**.
- Piscina con $\Delta p = 49\,050\,\mathrm{Pa}$ sul fondo: $h = \Delta p/(\rho g) = 49\,050/(1000 \cdot 9{,}81) = 5\,\mathrm m$.
- Serbatoio aperto con 5 m d'acqua: acqua $\approx 49\,\mathrm{kPa}$, più $101\,\mathrm{kPa}$ di atmosfera. Sul fondo circa $150\,\mathrm{kPa}$.
- Sangue ($1060\,\mathrm{kg/m^3}$) in una persona alta 1,83 m: $\Delta p = 1060 \cdot 9{,}8 \cdot 1{,}83 \approx 1{,}90 \cdot 10^4\,\mathrm{Pa}$ tra piedi e testa.
:::

**Liquidi e gas.** Stevino in questa forma vale per i liquidi, che sono incomprimibili: $\rho$ è la stessa a ogni profondità. Nei gas la densità cambia con la pressione. Nell'aria $\rho$ è piccola e diminuisce salendo, quindi la pressione cala lentamente e non in modo lineare. Su dislivelli piccoli (un edificio) si può usare Stevino con una densità media dell'aria.

::: esempio
Barometro: 76,0 cmHg alla base di un edificio, 75,6 cmHg in cima. La perdita di pressione dell'aria è uguale a quella di 0,4 cm di mercurio:
$\rho_{aria}\,g\,H = \rho_{Hg}\,g\,\Delta h \Rightarrow H = 13\,600 \cdot 0{,}004/1{,}28 \approx 42{,}5\,\mathrm m$.
:::

## Pressione atmosferica e come si misura
L'aria sopra di noi ha un peso. Al livello del mare preme con circa $1{,}013 \cdot 10^5\,\mathrm{Pa}$, cioè circa 1 bar.

**Barometro di Torricelli.** Un tubo pieno di mercurio viene capovolto in una vaschetta di mercurio. Il mercurio nel tubo scende fino a 760 mm e si ferma. L'aria che preme sulla vaschetta regge la colonna:
$$p_{atm} = \rho_{Hg}\,g\,h = 13\,600 \cdot 9{,}81 \cdot 0{,}760 \approx 1{,}013 \cdot 10^5\,\mathrm{Pa}$$
Con l'acqua servirebbe una colonna di circa 10,3 m.

Strumenti:
- **barometro**: misura la pressione atmosferica;
- **manometro**: misura la pressione di un fluido in un recipiente, spesso rispetto a quella atmosferica. Un esempio semplice è il tubo a U: la differenza di livello $h$ del liquido dà $\Delta p = \rho g h$;
- **sfigmomanometro**: misura la pressione del sangue. È uno strumento analogo al barometro, perché misura una pressione.

La pressione atmosferica non schiaccia il cranio né il corpo. I fluidi interni sono alla stessa pressione e la bilanciano.

## Principio di Pascal
Se aumenti la pressione in un punto di un fluido chiuso e fermo, l'aumento arriva uguale in ogni altro punto. Agisce su ogni superficie a contatto con il fluido.

Perché: con Stevino $p(h) = p_0 + \rho g h$. Se $p_0$ cresce di $\Delta p$, il termine $\rho g h$ non cambia. Quindi ogni punto cresce di $\Delta p$.

**Torchio (martinetto) idraulico.** Due pistoni di area diversa sono collegati da un liquido. La pressione è la stessa su entrambi:

$$\frac{F_1}{S_1} = \frac{F_2}{S_2} \quad\Rightarrow\quad F_1 = F_2\,\frac{S_1}{S_2}$$
dove:
- $F_1$ = forza sul pistone piccolo (N)
- $S_1$ = area del pistone piccolo (m²)
- $F_2$ = forza sul pistone grande (N)
- $S_2$ = area del pistone grande (m²)

La forza si moltiplica per il rapporto delle aree. Non si guadagna lavoro: il pistone piccolo scende molto, quello grande sale poco. Il lavoro sui due lati è uguale.

::: esempio
Moto di 200 kg su un pistone da $10\,000\,\mathrm{cm^2}$; pistone piccolo da $100\,\mathrm{cm^2}$.
$F_1 = 200 \cdot 9{,}8 \cdot 100/10\,000 = 19{,}6\,\mathrm N$.
Altri usi: freni idraulici dell'auto, sollevatori delle officine, tubetto del dentifricio.
:::

## Principio di Archimede
Un corpo immerso in un fluido riceve una spinta verso l'alto. La spinta è uguale al peso del fluido spostato.

$$F_A = \rho_{fl}\,V_{imm}\,g$$
dove:
- $F_A$ = spinta di Archimede (N)
- $\rho_{fl}$ = densità del **fluido** (kg/m³)
- $V_{imm}$ = volume della parte **immersa** del corpo (m³)
- $g$ = accelerazione di gravità (m/s²)

Da dove nasce: la faccia inferiore del corpo è più profonda di quella superiore. Per Stevino lì la pressione è maggiore. La somma delle forze di pressione punta quindi sempre verso l'alto.

Cosa conta e cosa no:
- conta il volume immerso e la densità del fluido;
- **non** conta il materiale del corpo: sughero e ferro con lo stesso volume sommerso ricevono la stessa spinta;
- **non** conta la profondità: un sasso che affonda riceve sempre la stessa spinta.

::: esempio
- Oggetto di 30 l completamente immerso in acqua: $F_A = 1000 \cdot 0{,}030 \cdot 9{,}8 \approx 294\,\mathrm N$.
- Cubo di 10 cm (1 l), massa 10 kg, appeso a un filo in acqua. Peso 98 N, spinta 9,8 N. Tensione del filo $T = 98 - 9{,}8 \approx 88\,\mathrm N$.
- Pallone di 1 kg e $5 \cdot 10^{-3}\,\mathrm{m^3}$ tenuto sott'acqua. Spinta 49 N, peso 9,8 N. Devi spingere con circa 40 N.
- Un corpo pesa 27 N in aria e 17 N in acqua. La spinta vale $27 - 17 = 10\,\mathrm N$.
:::

## Galleggiamento
Sul corpo immerso agiscono il peso e la spinta. Chi vince decide il moto. Per un corpo tutto immerso il confronto si riduce alle densità:

| Densità media del corpo | Cosa succede |
|---|---|
| $\rho_{corpo} < \rho_{fl}$ | sale e galleggia, con una parte fuori |
| $\rho_{corpo} = \rho_{fl}$ | resta fermo dove lo metti |
| $\rho_{corpo} > \rho_{fl}$ | affonda |

Quando galleggia, peso e spinta si equilibrano:
$$\rho_{corpo}\,V = \rho_{fl}\,V_{imm} \quad\Rightarrow\quad \frac{V_{imm}}{V} = \frac{\rho_{corpo}}{\rho_{fl}}$$
La frazione immersa è il rapporto delle densità.

::: esempio
- Iceberg: $917/1025 \approx 0{,}89$. È immerso l'89%, emerge circa il 10,5%.
- Persona ($980\,\mathrm{kg/m^3}$) con 1/3 fuori dal liquido, quindi 2/3 immersi: $\rho_{liq} = 980/(2/3) \approx 1500\,\mathrm{kg/m^3}$.
- Oggetto di 1 kg e $900\,\mathrm{cm^3}$: densità $1{,}11\,\mathrm{g/cm^3}$. In acqua affonda. Se galleggia in un liquido, quel liquido non è acqua distillata.
- Corpo di 3 kg e 2 l: densità $1{,}5\,\mathrm{kg/l}$, affonda.
:::

Casi pratici:
- **Nave di ferro.** Lo scafo è cavo e pieno d'aria. La densità **media** della nave è minore di quella dell'acqua. Per lo stesso motivo un oggetto d'acciaio che galleggia deve avere una cavità.
- **Mare e piscina.** Il sale aumenta la densità dell'acqua. A parità di volume immerso la spinta è maggiore: si galleggia meglio.
- Se un corpo galleggia nel liquido A e affonda nel liquido B, allora B è meno denso di A.
- **Sulla Luna** peso e spinta sono entrambi proporzionali a $g$. Un oggetto che galleggia in acqua resta immerso della stessa frazione.

## Archimede nei gas
La spinta vale anche nell'aria, che è un fluido.
- **Palloncino a elio**: l'elio è meno denso dell'aria. La spinta supera il peso, le forze non si annullano e il palloncino sale.
- **Mongolfiera**: l'aria calda si dilata ed è meno densa dell'aria fredda intorno. Riceve una spinta verso l'alto.
- Sulla **Luna** non c'è atmosfera. Manca il fluido che dà la spinta: mongolfiere e dirigibili non possono volare.

::: esempio
Pallone a elio per sollevare 3 persone da 80 kg. Ogni m³ sposta 1,21 kg d'aria e contiene 0,16 kg di elio. Guadagno: 1,05 kg per m³. Servono $240/1{,}05 \approx 230\,\mathrm{m^3}$, circa 220 m³.
:::

**Palloncino sott'acqua.** Scendendo la pressione esterna aumenta (Stevino). Il gas dentro si comprime e il volume del palloncino diminuisce.

## Anticipo: fluidi in movimento
Due risultati della dinamica dei fluidi compaiono anche in questo capitolo.
- **Continuità**: in un tubo la portata $S\,v$ si conserva. Un condotto da $10\,\mathrm{cm^2}$ che si divide in dieci capillari da $1\,\mathrm{cm^2}$ ha la stessa sezione totale: la velocità non cambia.
- **Bernoulli**: $p + \tfrac12\rho v^2 + \rho g h = \text{cost}$. A quota fissa, dove la pressione diminuisce la velocità aumenta. Con il fluido fermo ($v = 0$) resta $p + \rho g h = \text{cost}$: è la legge di Stevino.

::: esame
Nelle aperte chiedono spesso: enunciare Pascal con un esempio (torchio idraulico, freni); enunciare Archimede; le condizioni di galleggiamento (confronto di densità, frazione immersa); Stevino con un esempio (sub, piscina); differenza tra liquidi e gas in Stevino; come si misura una pressione (barometro, manometro a U).
:::

::: sintesi
- $p = F/S$ in pascal; $\rho = m/V$; $1\,\mathrm{atm} \approx 1\,\mathrm{bar} = 760\,\mathrm{mmHg}$.
- Stevino: $p = p_0 + \rho g h$; dipende solo dalla profondità; in acqua +1 atm ogni 10 m.
- Pascal: una variazione di pressione si trasmette uguale ovunque; torchio $F_1/S_1 = F_2/S_2$.
- Archimede: $F_A = \rho_{fl} V_{imm} g$, verso l'alto; non dipende dal materiale né dalla profondità.
- Galleggia chi ha densità media minore del fluido; frazione immersa $= \rho_{corpo}/\rho_{fl}$.
- Barometro per la pressione atmosferica, manometro per quella di un fluido.
:::

=== 32 dispense
# Lezione 32 — Dinamica dei fluidi: portata e Bernoulli

## Il fluido ideale in movimento
Il moto di un fluido reale è complicato. Si parte da un modello semplice, il fluido ideale. Ha quattro proprietà:
- **incomprimibile**: densità costante;
- **non viscoso**: nessun attrito tra gli strati;
- **moto stazionario**: in ogni punto la velocità non cambia nel tempo;
- **moto irrotazionale**: niente vortici.

In moto stazionario il fluido scorre lungo **linee di corrente** che non si incrociano. Questo è il moto **laminare**: strati ordinati che non si mescolano. Un fascio di linee di corrente forma un tubo di flusso.

## Portata
La portata dice quanto volume di fluido passa in una sezione ogni secondo.

$$Q = \frac{V}{\Delta t} = S\,v$$
dove:
- $Q$ = portata volumica (m³/s)
- $V$ = volume che attraversa la sezione (m³)
- $\Delta t$ = intervallo di tempo (s)
- $S$ = area della sezione (m²)
- $v$ = velocità del fluido (m/s)

A parità di sezione, velocità doppia vuol dire portata doppia.

::: esempio
- Secchio da 30 l riempito in 1 minuto: $Q = 30/60 = 0{,}5\,\mathrm{l/s} = 500\,\mathrm{cm^3/s}$.
- $0{,}001\,\mathrm{m^3/s} = 1\,\mathrm{l/s} = 60\,\mathrm{l/min}$.
- Rubinetto da 2 l/s, vasca da 1 m³ = 1000 l: $t = 500\,\mathrm s$, circa 8 minuti.
- Rubinetto da 0,5 l/s, ugello da $20\,\mathrm{mm^2}$: $v = Q/S = 0{,}5 \cdot 10^{-3}/(20 \cdot 10^{-6}) = 25\,\mathrm{m/s}$.
- Aorta: $r = 1\,\mathrm{cm}$, $v = 0{,}3\,\mathrm{m/s}$. $Q = \pi r^2 v = \pi \cdot 10^{-4} \cdot 0{,}3 \approx 9 \cdot 10^{-5}\,\mathrm{m^3/s}$.
:::

## Equazione di continuità
Il fluido è incomprimibile e non si accumula da nessuna parte. Quindi la portata è la stessa in ogni sezione del tubo.

$$S_1 v_1 = S_2 v_2$$
dove:
- $S_1, S_2$ = aree di due sezioni (m²)
- $v_1, v_2$ = velocità del fluido in quelle sezioni (m/s)

Dove il tubo si stringe, il fluido accelera. Dove si allarga, rallenta.

Attenzione al raggio: la sezione di un tubo circolare è $S = \pi r^2$. Se il raggio cambia di un fattore $k$, la sezione cambia di $k^2$.

| Cambio | Sezione | Velocità |
|---|---|---|
| sezione dimezzata | $\times\tfrac12$ | $\times 2$ |
| sezione da 3 m² a 1 m² | $\times\tfrac13$ | $\times 3$ |
| raggio dimezzato | $\times\tfrac14$ | $\times 4$ |
| raggio quadruplicato | $\times 16$ | $\times\tfrac1{16}$ |

::: esempio
Il getto d'acqua che scende da un rubinetto si assottiglia. Cadendo l'acqua accelera. La portata $S v$ deve restare la stessa, quindi la sezione del getto si riduce.
:::

## Teorema di Bernoulli
Bernoulli è la conservazione dell'energia per un fluido ideale. Lungo una linea di corrente questa somma resta costante:

$$p + \tfrac12\rho v^2 + \rho g h = \text{costante}$$
dove:
- $p$ = pressione (Pa)
- $\rho$ = densità del fluido (kg/m³)
- $v$ = velocità del fluido (m/s)
- $g$ = accelerazione di gravità (m/s²)
- $h$ = quota del punto (m)

Ogni termine è un'energia per unità di volume (J/m³ = Pa):
- $p$: lavoro delle forze di pressione;
- $\tfrac12\rho v^2$: energia cinetica;
- $\rho g h$: energia potenziale.

Da dove viene, in tre passi:
1. Considera un tratto di fluido nel tubo. In un tempo $dt$ si sposta un po' in avanti.
2. Le pressioni ai due estremi e la gravità compiono lavoro su di lui.
3. Questo lavoro è uguale alla variazione di energia cinetica (teorema dell'energia cinetica). Dividendo per il volume si ottiene la formula.

**Ipotesi necessarie**: fluido incomprimibile, non viscoso, moto stazionario e laminare. **Non** serve che il condotto sia orizzontale: il termine $\rho g h$ tiene conto della quota.

## Casi notevoli di Bernoulli
**Condotto orizzontale** ($h$ costante):
$$p + \tfrac12\rho v^2 = \text{cost}$$
Dove la velocità è maggiore, la pressione è minore. Nel restringimento di un tubo la velocità aumenta (continuità) e la pressione diminuisce (Bernoulli). È l'**effetto Venturi**.

**Fluido fermo** ($v = 0$):
$$p + \rho g h = \text{cost}$$
È la legge di Stevino: Stevino è Bernoulli nel caso statico.

**Foro in un serbatoio (Torricelli).** Un piccolo foro si trova a profondità $h$ sotto il pelo libero. Sopra e al foro c'è la pressione atmosferica. La superficie scende lentissima. Bernoulli dà:
$$v = \sqrt{2 g h}$$
dove $v$ è la velocità di uscita (m/s) e $h$ la profondità del foro (m). È la stessa velocità di un sasso che cade da $h$.

::: esempio
Foro a 30 cm sotto la superficie: $v = \sqrt{2 \cdot 9{,}8 \cdot 0{,}30} \approx 2{,}4\,\mathrm{m/s}$.
:::

## Applicazioni
**Portanza dell'ala.** Il profilo dell'ala fa scorrere l'aria più veloce sopra che sotto. Per Bernoulli la pressione sopra è minore. La differenza di pressione spinge l'ala verso l'alto:
$$F = \Delta p\,S \approx \tfrac12\rho\left(v_{sopra}^2 - v_{sotto}^2\right) S$$
dove $F$ è la portanza (N), $\Delta p$ la differenza di pressione (Pa), $S$ l'area dell'ala (m²).

**Tiro a effetto (effetto Magnus).** Un pallone calciato ruota su se stesso. Da un lato la rotazione va nello stesso verso dell'aria che scorre: lì l'aria va più veloce. Dall'altro lato va contro: l'aria rallenta. Per Bernoulli il lato più veloce ha pressione minore. Il pallone viene spinto verso quel lato e la traiettoria curva.

**Aneurisma.** In un vaso sanguigno con pareti elastiche si forma un allargamento. La sezione aumenta, quindi il sangue rallenta (continuità). Per Bernoulli la pressione lì aumenta. La pressione maggiore allarga ancora di più la parete. Il problema peggiora da solo.

## Fluidi reali e turbolenza
Nei fluidi reali c'è la viscosità.
- La pressione cala lungo un tubo orizzontale a sezione costante (perdita di carico).
- **Legge di Poiseuille** (moto laminare in un tubo di raggio $R$ e lunghezza $L$):
$$Q = \frac{\pi R^4}{8\eta}\,\frac{\Delta p}{L}$$
dove $Q$ = portata (m³/s), $\eta$ = viscosità (Pa·s), $\Delta p$ = differenza di pressione ai capi (Pa), $L$ = lunghezza (m). La portata dipende da $R^4$: un tubo appena più stretto porta molto meno.

**Numero di Reynolds.** È un numero puro che dice se il moto di un fluido reale è laminare o turbolento:
$$Re = \frac{\rho\,v\,R}{\eta}$$
dove $\rho$ = densità (kg/m³), $v$ = velocità media (m/s), $R$ = raggio del condotto (m), $\eta$ = viscosità (Pa·s). Con il raggio: laminare sotto circa 1000, turbolento oltre 2000–10 000. Con il diametro le soglie tipiche sono circa 2000 e 3000.

**Regime turbolento.** Il moto diventa caotico, con vortici. Molte leggi viste qui smettono di valere (Bernoulli, Poiseuille). Per mantenere il flusso serve una differenza di pressione che cresce con il quadrato della velocità.

::: attenzione
Errore tipico: pensare che dove il tubo è più stretto la pressione sia più alta. È il contrario: nel restringimento la velocità sale e la pressione scende.
:::

::: esame
Le aperte chiedono: definire la portata; Bernoulli con i casi notevoli (orizzontale, statico = Stevino, Torricelli) e un esempio (ala, Venturi); il condotto a sezione variabile (sezione piccola → velocità alta → pressione bassa); la portanza; il tiro a effetto; il numero di Reynolds.
:::

::: sintesi
- Portata $Q = V/\Delta t = S v$ (m³/s); $1\,\mathrm{l/s} = 60\,\mathrm{l/min}$.
- Continuità: $S_1 v_1 = S_2 v_2$; raggio dimezzato → velocità ×4.
- Bernoulli: $p + \tfrac12\rho v^2 + \rho g h = \text{cost}$; vale per fluido ideale, anche in tubi non orizzontali.
- Tubo orizzontale: pressione più alta dove la velocità è più bassa.
- Casi notevoli: Stevino ($v = 0$), Torricelli $v = \sqrt{2gh}$, portanza, effetto Magnus.
- Fluidi reali: Poiseuille $Q \propto R^4$; Reynolds distingue laminare e turbolento.
:::

=== 33 dispense
# Lezione 33 — Temperatura e sistemi termodinamici

## Di che cosa si occupa la termodinamica
La termodinamica studia i fenomeni termici e i loro legami con l'energia meccanica. L'attrito, per esempio, fa perdere energia meccanica e scalda i corpi.

## Sistemi termodinamici
Un sistema termodinamico è un corpo macroscopico descritto da poche grandezze d'insieme. Tutto il resto è l'**ambiente**. Le grandezze che descrivono il sistema sono i **parametri di stato**: pressione, volume, temperatura, densità, quantità di sostanza.

| Sistema | Scambia energia | Scambia materia | Esempio |
|---|---|---|---|
| Aperto | sì | sì | pentola senza coperchio |
| Chiuso | sì | no | pentola con coperchio a tenuta |
| Isolato | no | no | thermos ideale |

Un sistema chiuso è in **equilibrio termodinamico** se è insieme:
- in equilibrio **meccanico**: le forze tra sistema e ambiente si bilanciano;
- in equilibrio **termico**: la temperatura è uguale ovunque e uguale a quella dell'ambiente;
- in equilibrio **chimico**: non avvengono reazioni che cambiano la composizione.

Un sistema lasciato isolato abbastanza a lungo arriva all'equilibrio.

**Parametri estensivi e intensivi.**
- Estensivi: dipendono dalla quantità di sistema e si sommano. Esempi: massa, volume, energia.
- Intensivi: non dipendono dalla quantità e non si sommano. Esempi: pressione, temperatura, densità.

## Temperatura
La temperatura, per definizione, è la grandezza che si misura con il termometro. È una definizione operativa: dice come misurarla.

Un termometro sfrutta una proprietà che cambia con la temperatura. Esempi: la lunghezza di una colonna di liquido, la resistenza elettrica.

**Principio zero della termodinamica.** Due corpi a temperature diverse messi a contatto arrivano a una temperatura comune: l'equilibrio termico. Il principio dice:
> se due sistemi sono in equilibrio termico con un terzo, sono in equilibrio termico tra loro.

Per questo il termometro funziona. Il "terzo sistema" è il termometro stesso.

## Scale di temperatura
- **Celsius**: 0 °C è il ghiaccio che fonde, 100 °C l'acqua che bolle, al livello del mare. Il grado è la centesima parte di questo intervallo.
- **Kelvin (assoluta, SI)**: 0 K è lo zero assoluto, la temperatura più bassa possibile. Il punto triplo dell'acqua vale 273,16 K. La temperatura assoluta è sempre positiva.
- **Fahrenheit**: usata nei paesi anglosassoni.

$$T(\mathrm K) = t(^\circ\mathrm C) + 273{,}15 \qquad t(^\circ\mathrm F) = \tfrac95\,t(^\circ\mathrm C) + 32$$
dove:
- $T$ = temperatura assoluta (K)
- $t$ = temperatura in gradi Celsius o Fahrenheit

Una differenza di 1 °C è uguale a una differenza di 1 K.

::: esempio
27 °C = 27 + 273,15 ≈ 300 K. L'acqua bolle a 373,15 K.
:::

## Dilatazione termica
Quasi tutti i corpi si allungano quando si scaldano. Per variazioni non troppo grandi l'aumento è proporzionale al salto di temperatura.

$$\Delta l = \alpha\,l\,\Delta T \qquad \Delta V = \beta\,V\,\Delta T,\ \ \beta = 3\alpha$$
dove:
- $\Delta l$ = allungamento (m); $l$ = lunghezza iniziale (m)
- $\alpha$ = coefficiente di dilatazione lineare (1/K)
- $\Delta V$ = aumento di volume (m³); $V$ = volume iniziale (m³)
- $\beta$ = coefficiente di dilatazione volumica (1/K)
- $\Delta T$ = variazione di temperatura (K o °C)

## Calore
Il calore è l'energia che passa da un corpo all'altro perché hanno temperature diverse. Va sempre dal caldo al freddo, finché le temperature si uguagliano. Si misura in joule; un'unità storica è la caloria ($1\,\mathrm{cal} \approx 4{,}186\,\mathrm J$). Per convenzione il calore assorbito dal sistema è positivo.

$$Q = c\,m\,\Delta T = C\,\Delta T$$
dove:
- $Q$ = calore scambiato (J)
- $c$ = calore specifico, dipende solo dal materiale (J/(kg·K)); acqua: $4186\,\mathrm{J/(kg\,K)}$
- $m$ = massa (kg)
- $\Delta T$ = variazione di temperatura (K)
- $C = c\,m$ = capacità termica del corpo (J/K)

Due corpi a contatto, senza perdite verso l'esterno, arrivano a una temperatura di equilibrio:
$$T_e = \frac{c_1 m_1 T_1 + c_2 m_2 T_2}{c_1 m_1 + c_2 m_2}$$
Il calore ceduto dal corpo caldo è uguale a quello assorbito dal freddo.

## Passaggi di stato
Durante un passaggio di stato (fusione, ebollizione…) a pressione costante la temperatura **resta costante**. Il calore fornito non scalda: serve a rompere i legami tra le molecole. Esempio: acqua e ghiaccio scaldati restano a 0 °C finché tutto il ghiaccio non si è sciolto.

$$Q = L\,m$$
dove:
- $Q$ = calore per il passaggio di stato (J)
- $L$ = calore latente (J/kg); fusione del ghiaccio: $333\,\mathrm{kJ/kg}$
- $m$ = massa che cambia stato (kg)

Per questo le temperature dei passaggi di stato servono a tarare i termometri.

## Lavoro di un gas
Un gas che si espande spinge le pareti (per esempio un pistone) e compie lavoro.

$$L = p\,\Delta V$$
dove:
- $L$ = lavoro compiuto dal gas (J)
- $p$ = pressione del gas (Pa)
- $\Delta V$ = variazione di volume (m³)

Questa formula vale **solo a pressione costante** (trasformazione isobara). Se la pressione cambia, serve la somma di tanti piccoli lavori: $L = \int p\,dV$. Se il volume non cambia, il lavoro è zero.

## Energia interna del gas perfetto
L'energia interna è l'energia di tutte le molecole del gas. A livello microscopico la temperatura misura l'energia cinetica media delle molecole. Per un gas perfetto monoatomico:

$$U = \tfrac32\,N\,k_B\,T = \tfrac32\,n\,R\,T$$
dove:
- $U$ = energia interna (J)
- $N$ = numero di molecole
- $k_B$ = costante di Boltzmann, $1{,}38 \cdot 10^{-23}\,\mathrm{J/K}$
- $T$ = temperatura assoluta (K)
- $n$ = numero di moli (mol)
- $R$ = costante dei gas, $8{,}314\,\mathrm{J/(mol\,K)}$

L'energia interna è proporzionale alla temperatura assoluta e al numero di molecole. Non dipende da pressione o volume presi da soli.

::: attenzione
- Temperatura e calore non sono la stessa cosa: la temperatura è uno stato del corpo, il calore è energia in transito.
- Nelle formule dei gas usa sempre i kelvin, mai i gradi Celsius.
- $L = p\,\Delta V$ non vale "sempre": solo a pressione costante.
:::

::: sintesi
- Sistema aperto (materia + energia), chiuso (solo energia), isolato (niente).
- Temperatura = ciò che misura il termometro; principio zero: equilibrio termico transitivo.
- $T(\mathrm K) = t(^\circ\mathrm C) + 273{,}15$; 27 °C ≈ 300 K.
- Calore $Q = c\,m\,\Delta T$; nei passaggi di stato $Q = L\,m$ e la temperatura resta costante.
- Lavoro del gas $L = p\,\Delta V$ solo a pressione costante.
- Gas perfetto monoatomico: $U = \tfrac32 N k_B T$, proporzionale a T assoluta e numero di molecole.
:::
