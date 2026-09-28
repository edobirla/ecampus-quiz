=== 2 dispense
# Lezione 02 — Grandezze fisiche, unità di misura ed errori

## Grandezza, misura, unità
Una grandezza fisica è una proprietà che si può misurare. La temperatura di una stanza è una grandezza. Il termometro è lo strumento. Il numero letto è la misura.

Misurare vuol dire confrontare la grandezza con un campione, l'unità di misura:
$$G = g \cdot u_G$$
dove:
- $G$ = la grandezza (es. una lunghezza);
- $g$ = il numero che esce dalla misura;
- $u_G$ = l'unità di misura (es. il metro).

Il risultato è sempre la migliore stima del **valore vero**. Il valore vero resta un'idea astratta: servirebbe uno strumento perfetto.

## Grandezze fondamentali e derivate
- **Fondamentali**: definite direttamente da un campione. Esempi: lunghezza, massa, tempo.
- **Derivate**: definite a partire dalle fondamentali. Esempi: velocità = lunghezza/tempo, forza = massa × accelerazione.

## Il Sistema Internazionale (SI)
Il SI fissa sette unità fondamentali. Tutte le altre si costruiscono da queste.

| Grandezza | Unità | Simbolo |
|---|---|---|
| lunghezza | metro | m |
| massa | kilogrammo | kg |
| tempo | secondo | s |
| corrente elettrica | ampere | A |
| temperatura | kelvin | K |
| quantità di sostanza | mole | mol |
| intensità luminosa | candela | cd |

Alcune unità derivate: newton $\mathrm N = \mathrm{kg\,m/s^2}$ (forza), joule $\mathrm J = \mathrm{N\,m}$ (lavoro, energia), hertz $\mathrm{Hz} = \mathrm{s^{-1}}$ (frequenza).

Multipli e sottomultipli **non** sono unità SI: il centimetro e il grammo sono solo sottomultipli.

| Prefisso | Simbolo | Fattore |
|---|---|---|
| giga | G | $10^{9}$ |
| mega | M | $10^{6}$ |
| kilo | k | $10^{3}$ |
| centi | c | $10^{-2}$ |
| milli | m | $10^{-3}$ |
| micro | µ | $10^{-6}$ |
| nano | n | $10^{-9}$ |

::: esempio
- $1\,\mu\mathrm m = 10^{-6}\,\mathrm m = 10^{-3}\,\mathrm{mm}$.
- $1\,\mathrm{MHz} = 10^{6}\,\mathrm{Hz}$.
- Da m/s a km/h si moltiplica per $3{,}6$: $60\,\mathrm{m/s} = 216\,\mathrm{km/h}$. Da km/h a m/s si divide per $3{,}6$.
:::

::: attenzione
I simboli si scrivono esatti: **kg** con la k minuscola, **N** per il newton, **K** per il kelvin (senza °). Una scala "°N" non esiste: le temperature si danno in K, °C o °F.
:::

## Dimensioni fisiche
Ogni grandezza ha delle dimensioni, scritte con le fondamentali: $[L]$ lunghezza, $[M]$ massa, $[T]$ tempo.
- distanza, altezza, lunghezza: $[L]$;
- velocità: $[L][T]^{-1}$;
- accelerazione: $[L][T]^{-2}$;
- forza: $[M][L][T]^{-2}$.

In ogni equazione fisica i due membri devono avere le stesse dimensioni. È un controllo veloce. Esempio: in $s = \tfrac12 a t^2$ si ha $[L][T]^{-2}\cdot[T]^2 = [L]$. Torna.

## Errori di misura
Ogni misura ha un errore: dice quanto il risultato può scostarsi dal valore vero.
- **Errore casuale**: fa oscillare le misure ripetute, a volte in su, a volte in giù. Si riduce ripetendo la misura e facendo la media.
- **Errore sistematico**: sposta le misure sempre nello stesso verso. Nasce da uno strumento tarato male o usato male. Ripetere non aiuta. Si scopre cambiando strumento o metodo.

**Errore massimo.** Con una sola misura, o con uno strumento poco sensibile, l'errore è la risoluzione dello strumento. Un libro misurato con un righello ai centimetri: $L = 21 \pm 1\,\mathrm{cm}$.

**Errore statistico.** Con tante misure ripetute si usa la media e la **deviazione standard** $\sigma$:
$$x = \bar x \pm \sigma$$
dove:
- $\bar x$ = media delle misure (stessa unità della grandezza);
- $\sigma$ = deviazione standard, cioè quanto le misure sono sparse attorno alla media.

Con errori casuali le misure formano una curva a campana (gaussiana). Dentro $\bar x \pm \sigma$ cade circa il 68% delle misure. Dentro $\pm 2\sigma$ circa il 95%. Dentro $\pm 3\sigma$ più del 99%.

**Errore relativo.** È l'errore diviso per il valore: $\delta x / |x|$. Non ha unità e spesso si dà in percentuale. Serve a confrontare la precisione di misure diverse.

::: esempio
$A = (20{,}0 \pm 0{,}5)\,\mathrm{cm}$ ha errore relativo $0{,}5/20 = 2{,}5\%$. $B = (10 \pm 1)\,\mathrm{mm}$ ha errore relativo $10\%$. È più precisa A.
:::

## Propagazione degli errori
Se una grandezza si calcola da altre, il suo errore dipende dagli errori di partenza.

| Operazione | Valore | Errore |
|---|---|---|
| $z = x + y$ | $x + y$ | $\delta z = \delta x + \delta y$ |
| $z = x - y$ | $x - y$ | $\delta z = \delta x + \delta y$ |
| $z = x \cdot y$ | $x \cdot y$ | $\dfrac{\delta z}{\lvert z\rvert} = \dfrac{\delta x}{\lvert x\rvert} + \dfrac{\delta y}{\lvert y\rvert}$ |
| $z = x / y$ | $x / y$ | $\dfrac{\delta z}{\lvert z\rvert} = \dfrac{\delta x}{\lvert x\rvert} + \dfrac{\delta y}{\lvert y\rvert}$ |

dove $\delta x, \delta y, \delta z$ sono gli errori assoluti (stessa unità della grandezza).

- Somme e differenze: si **sommano gli errori assoluti**. Anche nella differenza gli errori si sommano, non si sottraggono.
- Prodotti e quozienti: si **sommano gli errori relativi**.

Con errori statistici indipendenti, per la somma si usa $\sigma_z = \sqrt{\sigma_x^2 + \sigma_y^2}$.

::: esempio
Se $\delta x/x = 0{,}2$ e $\delta y/y = 0{,}1$, per $z = xy$ l'errore relativo è $0{,}3$, cioè 30%.
:::

## Come si scrive una misura
Forma corretta: **valore ± errore, unità**.
1. L'errore si arrotonda a una cifra significativa (al massimo due).
2. Il valore si arrotonda alla stessa posizione decimale dell'errore.
3. Si aggiunge l'unità di misura.

Arrotondamento: se la prima cifra da togliere è minore di 5, la precedente resta. Se è 5 o più, la precedente sale di uno ($3{,}472 \to 3{,}47$; $5{,}738 \to 5{,}74$).

::: esempio
Armadio $h = 225 \pm 1\,\mathrm{cm}$, libro sopra $x = 2{,}4 \pm 0{,}1\,\mathrm{cm}$. Totale $227{,}4 \pm 1{,}1\,\mathrm{cm}$. L'errore è sui centimetri, quindi si scrive $H = 227 \pm 1\,\mathrm{cm}$.
:::

::: attenzione
$m = 143 \pm 30\,\mathrm{kg}$ è scritto male: l'errore è sulle decine, quindi il valore va arrotondato alle decine. Si scrive $140 \pm 30\,\mathrm{kg}$. Invece $13{,}4 \pm 0{,}2\,\mathrm{m/s}$ e $1{,}34 \pm 0{,}01\,\mathrm m$ sono corretti.
:::

Una differenza si calcola sempre come **finale meno iniziale**. Da Riccione ($23{,}5\,°\mathrm C$) a Rimini ($22{,}3\,°\mathrm C$): $\Delta T = 22{,}3 - 23{,}5 = -1{,}2\,°\mathrm C$.

## Strumenti di misura
Uno strumento traduce la grandezza in una risposta facile da leggere. Nel termometro a mercurio la temperatura diventa la lunghezza della colonna di liquido. La **taratura** costruisce la scala: si misura la risposta a valori noti, presi dai campioni SI.

Parametri caratteristici:
- **Portata**: il valore massimo misurabile.
- **Soglia**: il valore minimo che lo strumento rileva.
- **Risoluzione**: la più piccola variazione leggibile. È la tacca più fine della scala o l'ultima cifra del display.
- **Sensibilità**: quanto cambia la risposta per una variazione della grandezza, $s = |dr/dx|$. Nelle scale lineari è costante.
- **Prontezza**: quanto velocemente lo strumento risponde.
- **Precisione**: quanto le misure ripetute sono vicine tra loro. Dipende dagli errori casuali.
- **Accuratezza**: quanto la misura è vicina al valore vero. Dipende dagli errori sistematici.

::: esame
Aperte frequenti: presentare il SI (7 unità fondamentali, derivate, prefissi); descrivere i parametri degli strumenti; spiegare come si scrive una misura con il suo errore.
:::

::: sintesi
- Grandezza = proprietà misurabile; $G = g\cdot u_G$. Derivata = definita dalle fondamentali.
- SI: m, kg, s, A, K, mol, cd. cm, g, km, h non sono unità SI.
- $1\,\mathrm{m/s} = 3{,}6\,\mathrm{km/h}$; micro $= 10^{-6}$, mega $= 10^{6}$.
- Somme e differenze: $\delta z = \delta x + \delta y$. Prodotti e quozienti: si sommano gli errori relativi.
- Misura = valore ± errore (1 cifra significativa) + unità, con il valore arrotondato come l'errore.
- Precisione ↔ errori casuali; accuratezza ↔ errori sistematici.
:::

=== 3 dispense
# Lezione 03 — Grandezze scalari e vettoriali

## Scalari e vettori
Una grandezza **scalare** è definita da un solo numero con la sua unità. Esempi: massa, tempo, temperatura, volume, energia, lavoro.

Una grandezza **vettoriale** ha bisogno di tre informazioni:
- **modulo**: l'intensità, un numero sempre positivo o nullo;
- **direzione**: la retta su cui agisce;
- **verso**: da che parte punta su quella retta.

Si disegna con una freccia. Esempi: spostamento, velocità, accelerazione, forza, peso, campo elettrico.

::: attenzione
Massa e peso sono diversi. La massa è scalare (kg). Il peso è una forza, quindi un vettore (N) diretto verso il basso. Lo spostamento è un esempio di vettore, non una sua caratteristica.
:::

Notazione: a stampa il vettore è in grassetto $\mathbf v$, a mano con la freccia $\vec v$. Il modulo si scrive $|\vec v|$ o semplicemente $v$.

## Componenti di un vettore
Si mette la coda del vettore nell'origine degli assi. Le coordinate della punta sono le sue **componenti**: $\vec v = (v_x, v_y, v_z)$.

Nel piano, vettore e componenti formano un triangolo rettangolo. Se $\theta$ è l'angolo con l'asse x:
$$v_x = v\cos\theta \qquad v_y = v\sin\theta \qquad v = \sqrt{v_x^2 + v_y^2}$$
dove:
- $v$ = modulo del vettore;
- $v_x, v_y$ = componenti lungo x e y (stessa unità del vettore);
- $\theta$ = angolo tra vettore e asse x.

Nello spazio si aggiunge la terza componente: $v = \sqrt{v_x^2 + v_y^2 + v_z^2}$ (Pitagora in 3D).

::: esempio
- $V_x = 3$, $V_y = 4$: $V = \sqrt{9 + 16} = 5$.
- $a = 10\,\mathrm m$ a $30°$: $a_x = 10\cos 30° = 8{,}66\,\mathrm m$, $a_y = 10\sin 30° = 5\,\mathrm m$.
:::

## Somma e differenza
**Per componenti.** Si sommano le componenti una per una:
$$\vec v + \vec w = (v_x + w_x,\ v_y + w_y,\ v_z + w_z)$$

**Graficamente.** Due metodi equivalenti:
- **punta-coda**: si attacca la coda del secondo alla punta del primo. La somma va dalla coda del primo alla punta del secondo.
- **parallelogramma**: si mettono i due vettori con la stessa origine. La somma è la diagonale che parte dall'origine.

La somma è commutativa ($\vec a + \vec b = \vec b + \vec a$) e associativa.

**Opposto e differenza.** L'opposto $-\vec v$ ha stesso modulo e direzione, verso contrario: $(-v_x, -v_y, -v_z)$. La differenza è la somma con l'opposto: $\vec v - \vec w = \vec v + (-\vec w)$. Nel parallelogramma è l'altra diagonale.

Il **vettore nullo** è $(0, 0, 0)$ e ha modulo zero.

::: attenzione
I moduli non si sommano come numeri. Uno spostamento di 4 m più uno di 3 m può valere da 1 m (versi opposti) a 7 m (stesso verso). Vale 5 m solo se sono perpendicolari. Senza le direzioni non si può rispondere.
:::

## Prodotto di un vettore per un numero
Moltiplicare un vettore per un numero $k$ dà **un vettore**:
- modulo moltiplicato per $|k|$;
- stessa direzione;
- stesso verso se $k > 0$, verso opposto se $k < 0$.

In componenti: $k\vec v = (kv_x, kv_y, kv_z)$. Anche una grandezza scalare fisica per una vettoriale dà un vettore: $\vec F = m\vec a$.

## Prodotti tra vettori: esempi in fisica
Tra due vettori ci sono due prodotti diversi (dettagli nella lezione 4):
- **prodotto scalare** $\vec a \cdot \vec b = ab\cos\theta$: dà un numero. È nullo se i vettori sono perpendicolari.
- **prodotto vettoriale** $\vec a \times \vec b$: dà un vettore perpendicolare a entrambi, di modulo $ab\sin\theta$. È nullo se sono paralleli.

Esempi di prodotto scalare:
- lavoro $L = \vec F \cdot \vec s$;
- potenza $P = \vec F \cdot \vec v$;
- flusso di un campo attraverso una superficie.

Esempi di prodotto vettoriale:
- momento di una forza $\vec M = \vec r \times \vec F$;
- momento angolare $\vec L = \vec r \times m\vec v$;
- velocità nel moto circolare $\vec v = \vec\omega \times \vec r$;
- forza di Lorentz $\vec F = q\,\vec v \times \vec B$.

::: esame
Aperte frequenti: definire una grandezza vettoriale e dire come differisce da una scalare; fare esempi di prodotto scalare e vettoriale in fisica.
:::

::: sintesi
- Scalare = un numero con unità; vettore = modulo, direzione, verso.
- $v_x = v\cos\theta$, $v_y = v\sin\theta$, $v = \sqrt{v_x^2 + v_y^2 (+ v_z^2)}$.
- Somma: per componenti, punta-coda o parallelogramma. Differenza = somma con l'opposto.
- Numero × vettore = vettore (verso invertito se il numero è negativo).
- Scalare: lavoro, potenza. Vettoriale: momento, forza di Lorentz.
:::

=== 4 dispense
# Lezione 04 — Operazioni con i vettori (prodotto scalare e vettoriale)

## Versori
Un **versore** è un vettore di modulo 1. Indica solo una direzione e un verso. Da un vettore $\vec w$ si ottiene il suo versore dividendo per il modulo: $\hat w = \vec w / |\vec w|$.

I versori degli assi sono $\hat i = (1,0,0)$, $\hat j = (0,1,0)$, $\hat k = (0,0,1)$. Ogni vettore si scrive come:
$$\vec v = v_x\,\hat i + v_y\,\hat j + v_z\,\hat k$$

Dividere un vettore per un numero $c$ vuol dire moltiplicarlo per $1/c$.

## Prodotto scalare
Il prodotto scalare di due vettori dà **un numero**:
$$\vec v \cdot \vec w = v\,w\cos\theta = v_x w_x + v_y w_y + v_z w_z$$
dove:
- $v, w$ = moduli dei due vettori;
- $\theta$ = angolo tra i vettori (tra 0° e 180°);
- $v_x, w_x, \dots$ = componenti.

Casi notevoli:
- vettori **perpendicolari** ($\theta = 90°$): prodotto **nullo**;
- vettori paralleli e concordi: prodotto massimo, $vw$;
- $\vec v \cdot \vec v = v^2 \ge 0$, nullo solo per il vettore nullo.

Tra i versori: $\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1$; $\hat i\cdot\hat j = \hat i\cdot\hat k = \hat j\cdot\hat k = 0$.

Proprietà: commutativo ($\vec v\cdot\vec w = \vec w\cdot\vec v$), distributivo, e $(s\vec v)\cdot\vec w = s(\vec v\cdot\vec w)$.

**Angolo tra due vettori.** Si ricava dal prodotto scalare:
$$\cos\theta = \frac{\vec v \cdot \vec w}{v\,w}$$

::: esempio
- $\vec v = (0,2,4)$, $\vec w = (2,0,4)$: $\vec v\cdot\vec w = 0 + 0 + 16 = 16$. Moduli: $\sqrt{0+4+16} = \sqrt{20}$ e $\sqrt{4+0+16} = \sqrt{20}$. Stessa lunghezza.
- $\vec v = (1,2,4)$, $\vec w = (6,3,-3)$: $6 + 6 - 12 = 0$. Sono ortogonali.
- $(1, k-2, 3)$ e $(k, 2, 5)$ sono ortogonali se $k + 2k - 4 + 15 = 0$, cioè $k = -11/3$.
:::

## Prodotto vettoriale
Il prodotto vettoriale di due vettori dà **un vettore** $\vec v \times \vec w$ (si scrive anche $\vec v \wedge \vec w$):
- **modulo**: $|\vec v \times \vec w| = v\,w\sin\theta$;
- **direzione**: perpendicolare al piano dei due vettori;
- **verso**: regola della mano destra (o della vite destrorsa). Si ruota $\vec v$ verso $\vec w$ per l'angolo più piccolo; il pollice indica il verso.

dove $\theta$ è l'angolo tra i vettori, tra 0° e 180°.

Casi notevoli:
- vettori **paralleli**: prodotto **nullo** (anche $\vec v \times \vec v = 0$);
- vettori perpendicolari: modulo massimo, $vw$.

Il modulo è l'**area del parallelogramma** costruito sui due vettori.

Proprietà:
- **anticommutativo**: $\vec v \times \vec w = -\,\vec w \times \vec v$. Scambiare l'ordine inverte il verso.
- distributivo: $\vec v \times (\vec w + \vec z) = \vec v \times \vec w + \vec v \times \vec z$.

Tra i versori: $\hat i\times\hat j = \hat k$, $\hat j\times\hat k = \hat i$, $\hat k\times\hat i = \hat j$. Al contrario cambia segno: $\hat j \times \hat i = -\hat k$.

**In componenti:**
$$\vec v \times \vec w = (v_y w_z - v_z w_y)\,\hat i + (v_z w_x - v_x w_z)\,\hat j + (v_x w_y - v_y w_x)\,\hat k$$

Per ricordarla si usa il determinante: prima riga $\hat i, \hat j, \hat k$; seconda riga le componenti di $\vec v$; terza quelle di $\vec w$.
$$\vec v \times \vec w = \begin{vmatrix} \hat i & \hat j & \hat k \\ v_x & v_y & v_z \\ w_x & w_y & w_z \end{vmatrix}$$

::: esempio
$\vec v = (0,1,0) = \hat j$, $\vec w = (2,0,0) = 2\hat i$. Allora $\vec v \times \vec w = 2(\hat j \times \hat i) = -2\hat k$. Il risultato è diretto lungo l'asse z.
:::

Uso tipico: $\vec v \times \vec w$ dà un vettore perpendicolare a entrambi. Serve quando si cerca una direzione ortogonale a due vettori dati.

## Scalare o vettoriale: confronto
| | Prodotto scalare | Prodotto vettoriale |
|---|---|---|
| Risultato | numero | vettore |
| Formula del modulo | $vw\cos\theta$ | $vw\sin\theta$ |
| Nullo se | perpendicolari | paralleli |
| Massimo se | paralleli | perpendicolari |
| Ordine | non conta | scambiando cambia segno |

::: sintesi
- Versore = modulo 1; $\vec v = v_x\hat i + v_y\hat j + v_z\hat k$; $v = \sqrt{v_x^2+v_y^2+v_z^2}$.
- $\vec v\cdot\vec w = vw\cos\theta = v_xw_x + v_yw_y + v_zw_z$: nullo ⇔ ortogonali.
- $\cos\theta = \vec v\cdot\vec w/(vw)$ dà l'angolo tra due vettori.
- $|\vec v\times\vec w| = vw\sin\theta$, perpendicolare ai due, mano destra; nullo ⇔ paralleli.
- $\hat i\times\hat j = \hat k$; $\vec v\times\vec w = -\vec w\times\vec v$.
:::

=== 5 dispense
# Lezione 05 — Cinematica: posizione, velocità e accelerazione

## Cinematica e punto materiale
La cinematica descrive il moto. Non si chiede perché avviene (quello è la dinamica).

Un corpo si tratta come **punto materiale** se le sue dimensioni sono trascurabili rispetto alle distanze che interessano. Un aereo su una rotta di centinaia di km è un punto. Lo stesso aereo che parcheggia al gate non lo è.

## Posizione, traiettoria, spostamento
La posizione si dà rispetto a un **sistema di riferimento** (origine, assi, orologio).
- **Vettore posizione** $\vec r(t)$: va dall'origine al punto.
- **Traiettoria**: la linea formata da tutte le posizioni occupate nel tempo.
- **Ascissa curvilinea** $s$: la lunghezza del percorso misurata lungo la traiettoria.
- **Legge oraria**: la funzione $\vec r(t)$ (o $s(t)$) che dà la posizione in ogni istante.

Lo **spostamento** è il vettore tra posizione iniziale e finale:
$$\Delta\vec r = \vec r_2 - \vec r_1$$
Dipende solo dai due estremi, non dal percorso. Su una retta: $\Delta s = s_2 - s_1$ (da $3{,}8\,\mathrm m$ a $7{,}1\,\mathrm m$: $\Delta s = 3{,}3\,\mathrm m$).

::: esempio
Una barca va 5 km a nord e poi 3 km a est. Lo spostamento ha modulo $\sqrt{5^2 + 3^2} = \sqrt{34} \approx 5{,}8\,\mathrm{km}$. La strada fatta è 8 km.
:::

## Coordinate polari
Nel piano un punto si può dare anche con:
- $r$ = distanza dall'origine (m);
- $\theta$ = angolo tra $\vec r$ e l'asse x (rad).

Il legame con le coordinate cartesiane:
$$x = r\cos\theta \qquad y = r\sin\theta \qquad r = \sqrt{x^2+y^2} \qquad \tan\theta = \frac{y}{x}$$

Si usano due versori: $\hat u_r$ lungo $\vec r$ e $\hat u_\theta$ perpendicolare. Allora $\vec r = r\,\hat u_r$. La velocità ha una parte radiale ($\dot r$, cambia la distanza) e una trasversa ($r\dot\theta$, cambia la direzione). Le polari sono comode nei moti circolari, dove $r$ è costante e cambia solo $\theta$.

## Velocità
La velocità dice quanto rapidamente cambia la posizione.

**Velocità media:**
$$\vec v_m = \frac{\Delta\vec r}{\Delta t}$$
dove $\Delta\vec r$ = spostamento (m) e $\Delta t$ = intervallo di tempo (s). Ha la direzione della corda tra le due posizioni.

**Velocità scalare media**: strada totale percorsa diviso tempo. Se vai e torni al punto di partenza, la velocità media vettoriale è zero, quella scalare no.

**Velocità istantanea**: la velocità media su un intervallo sempre più piccolo:
$$\vec v = \lim_{\Delta t \to 0}\frac{\Delta\vec r}{\Delta t} = \frac{d\vec r}{dt}$$
È sempre **tangente alla traiettoria**.

Unità: m/s. Dimensioni: $[L][T]^{-1}$. $1\,\mathrm{m/s} = 3{,}6\,\mathrm{km/h}$.

::: esempio
Carl Lewis corre 100 m in 9,86 s: $v = 100/9{,}86 = 10{,}14\,\mathrm{m/s} = 36{,}5\,\mathrm{km/h}$.
Un'auto fa lo stesso tratto in salita a $v_1$ e in discesa a $v_2$. La velocità media non è $(v_1+v_2)/2$ ma $2v_1v_2/(v_1+v_2)$, perché i tempi sono diversi.
:::

## Accelerazione
L'accelerazione dice quanto rapidamente cambia il **vettore velocità**: modulo, direzione o verso.

**Media:**
$$\vec a_m = \frac{\Delta\vec v}{\Delta t}$$
**Istantanea:**
$$\vec a = \frac{d\vec v}{dt} = \frac{d^2\vec r}{dt^2}$$
dove $\Delta\vec v$ = variazione di velocità (m/s) e $\Delta t$ = intervallo (s).

Unità: m/s² ($= \mathrm{(m/s)/s}$). Dimensioni: $[L][T]^{-2}$, cioè lunghezza per tempo alla meno due.

::: esempio
- Un motociclista passa da 54 km/h (15 m/s) a 108 km/h (30 m/s) in 20 s: $a = 15/20 = 0{,}75\,\mathrm{m/s^2}$.
- Un aereo va a nord a 200 m/s e poi a sud a 200 m/s. Il modulo non cambia, ma $|\Delta\vec v| = 400\,\mathrm{m/s}$.
:::

**Componenti tangenziale e normale.** L'accelerazione si divide in due parti rispetto alla traiettoria:
- **tangenziale** $a_t = dv/dt$: cambia il modulo della velocità;
- **normale** (centripeta) $a_n = v^2/R$: cambia la direzione. $R$ è il raggio di curvatura della traiettoria.

Quindi c'è accelerazione anche a velocità costante in modulo, se la traiettoria curva.

::: attenzione
Se la velocità è costante (vettore costante), l'accelerazione è zero. Non può essere "variabile". Invece sono possibili: velocità nulla con accelerazione non nulla (punto più alto di un lancio verticale); velocità verso +x con accelerazione verso −x (frenata).
:::

## Dall'accelerazione alla posizione
Derivando si va da posizione a velocità ad accelerazione. Integrando si fa il cammino inverso:
$$v(t) = v_0 + \int_0^t a\,dt \qquad x(t) = x_0 + \int_0^t v\,dt$$
dove $x_0, v_0$ sono posizione e velocità all'istante $t = 0$.

::: esempio
Un corpo parte da fermo con $a = 2t$. Allora $v = t^2$ e $x = t^3/3$. A $t = 3\,\mathrm s$: $x = 27/3 = 9\,\mathrm m$.
:::

## Formule dei moti più comuni
Si approfondiscono nella lezione 6. Qui servono per gli esercizi.

| Moto | Velocità | Posizione | Senza il tempo |
|---|---|---|---|
| uniforme ($a = 0$) | $v$ costante | $s = s_0 + vt$ | — |
| uniformemente accelerato | $v = v_0 + at$ | $s = s_0 + v_0t + \tfrac12 at^2$ | $v^2 = v_0^2 + 2a\,\Delta s$ |

dove $s_0, v_0$ = posizione e velocità iniziali, $a$ = accelerazione costante, $t$ = tempo.

- Moto uniforme: spazi **proporzionali** ai tempi. Con $s_0 = 2\,\mathrm m$ e $v = 20\,\mathrm{m/s}$: $s = 2 + 20t$.
- Da fermo: $s = \tfrac12 at^2$. A parità di tempo, raddoppiando $a$ raddoppia lo spazio. A parità di $a$, raddoppiando il tempo lo spazio quadruplica (500 m in 10 s → 2000 m in 20 s).
- Caduta libera ($a = g = 9{,}8\,\mathrm{m/s^2}$ verso il basso): $h = \tfrac12 gt^2$, $v = \sqrt{2gh}$. Da 30 m: $v = \sqrt{2\cdot 9{,}8\cdot 30} \approx 24\,\mathrm{m/s}$.
- Lancio verso l'alto: $g$ è opposta alla velocità, il corpo rallenta. Tempo di salita $v_0/g$; la discesa dura uguale. Con $v_0 = 196\,\mathrm{m/s}$: 20 s in salita, 40 s in totale.

::: esempio
- Ciclista a 6,5 m/s per 30 s: $s = 195\,\mathrm m$. Per fare 100 m: $t = 100/6{,}5 \approx 15{,}4\,\mathrm s$.
- Da fermo con $a = 0{,}1\,\mathrm{m/s^2}$: in 10 s fa $\tfrac12\cdot 0{,}1\cdot 100 = 5\,\mathrm m$; arriva a 10 m/s dopo $10/0{,}1 = 100\,\mathrm s$.
- Da 10 a 20 m/s in 75 m: $a = (400 - 100)/(2\cdot 75) = 2\,\mathrm{m/s^2}$.
- Cavallo da 11 a 6,5 m/s con $a = -4\,\mathrm{m/s^2}$: $t = (6{,}5 - 11)/(-4) = 1{,}125\,\mathrm s$.
:::

## Moti periodici: periodo, frequenza, velocità angolare
Un moto che si ripete uguale ha:
- **periodo** $T$: il tempo di un giro o di un'oscillazione (s);
- **frequenza** $f = 1/T$: quanti giri al secondo (Hz $= \mathrm{s^{-1}}$);
- **velocità angolare** $\omega = 2\pi/T = 2\pi f$ (rad/s).

::: esempio
- Lancetta dei secondi: $T = 60\,\mathrm s$, $f = 1/60\,\mathrm{Hz}$, $\omega = 2\pi/60 \approx 0{,}105\,\mathrm{rad/s}$.
- $f = 100\,\mathrm{Hz}$: $\omega = 2\pi\cdot 100 \approx 628\,\mathrm{rad/s}$.
- Onda a $100\,\mathrm{MHz} = 10^8\,\mathrm{Hz}$: $T = 10^{-8}\,\mathrm s = 10\,\mathrm{ns}$.
:::

::: esame
Aperte frequenti: definire posizione, velocità (media e istantanea) e accelerazione; descrivere la posizione in coordinate polari.
:::

::: sintesi
- Spostamento $\Delta\vec r = \vec r_2 - \vec r_1$; dipende solo dagli estremi.
- $\vec v = d\vec r/dt$, tangente alla traiettoria; m/s, $[L][T]^{-1}$.
- $\vec a = d\vec v/dt$: variazione del vettore velocità; m/s², $[L][T]^{-2}$; $a_t = dv/dt$, $a_n = v^2/R$.
- Polari: $x = r\cos\theta$, $y = r\sin\theta$.
- Uniforme $s = s_0 + vt$; accelerato $s = s_0 + v_0t + \tfrac12at^2$, $v^2 = v_0^2 + 2a\Delta s$.
- $f = 1/T$, $\omega = 2\pi f$.
:::

=== 6 dispense
# Lezione 06 — Moto rettilineo uniforme e uniformemente accelerato

## Il moto su una retta
Se il moto avviene su una retta, basta una coordinata $x$. Il carattere vettoriale resta nel **segno**: positivo nel verso dell'asse, negativo nel verso opposto. Le formule si scrivono senza frecce, ma i segni vanno rispettati.

## Moto rettilineo uniforme
Il moto è uniforme quando la velocità è costante. L'accelerazione è zero. Spazi uguali in tempi uguali: lo spazio è **proporzionale** al tempo.

$$x(t) = x_0 + v\,t$$
dove:
- $x(t)$ = posizione all'istante $t$ (m);
- $x_0$ = posizione a $t = 0$ (m);
- $v$ = velocità costante (m/s);
- $t$ = tempo (s).

Formule inverse: $v = \Delta x/\Delta t$, $t = \Delta x/v$.

Grafici: $x(t)$ è una retta con pendenza $v$; $v(t)$ è una retta orizzontale; l'area sotto $v(t)$ è lo spazio percorso.

::: esempio
- A 110 km/h (30,6 m/s) guardi fuori per 2 s: percorri $\approx 61\,\mathrm m$. A 130 km/h (36,1 m/s): $\approx 72\,\mathrm m$.
- 110 m/s per 18 min (1080 s): $s = 118\,800\,\mathrm m = 118{,}8\,\mathrm{km}$.
- 200 km/h per 15 min (0,25 h): 50 km.
- 657 km in 8,76 h: $v = 75\,\mathrm{km/h}$. Una città a 200 km si raggiunge in $200/75 = 2{,}67\,\mathrm h$.
- Se la velocità è costante e a $t = 10\,\mathrm s$ vale 15 m/s, a $t = 20\,\mathrm s$ vale ancora 15 m/s.
:::

## Moto uniformemente accelerato
Il moto è uniformemente accelerato quando l'accelerazione è costante. La velocità cambia di quantità uguali in tempi uguali.

$$v(t) = v_0 + a\,t$$
$$x(t) = x_0 + v_0\,t + \tfrac12\,a\,t^2$$
$$v^2 = v_0^2 + 2a\,(x - x_0)$$
dove:
- $x_0, v_0$ = posizione (m) e velocità (m/s) a $t = 0$;
- $a$ = accelerazione costante (m/s²), negativa se il corpo frena nel verso positivo;
- $x, v$ = posizione e velocità all'istante $t$.

La terza formula non contiene il tempo: serve quando il tempo non è dato.

Grafici: $v(t)$ è una retta con pendenza $a$; $x(t)$ è una parabola.

Casi utili:
- **partenza da fermo**: $v = at$, $x = \tfrac12at^2$, quindi $a = 2x/t^2$;
- **frenata fino a fermarsi**: tempo $t = v_0/a$, spazio $x = v_0^2/(2a)$ (con $a$ in modulo).

::: esempio
- Aereo: 600 m in 15 s partendo da fermo. $a = 2\cdot 600/15^2 = 1200/225 \approx 5{,}3\,\mathrm{m/s^2}$.
- Treno a 50 m/s che frena a 2 m/s²: si ferma in $2500/4 = 625\,\mathrm m$.
- Auto a 33,3 m/s che frena a 2 m/s²: si ferma in $33{,}3/2 \approx 16{,}6\,\mathrm s$, dopo circa 277 m.
- Auto da 40 km/h (11,1 m/s) a 90 km/h (25 m/s) in 8 s: $a = 13{,}9/8 \approx 1{,}74\,\mathrm{m/s^2}$.
- Da fermo a 60 km/h (16,7 m/s) in 5,1 s: $a \approx 3{,}27\,\mathrm{m/s^2}$. La massa dell'auto non serve.
- A 75 km/h (20,8 m/s) con $a = -2{,}3\,\mathrm{m/s^2}$, dopo 4 s: $v = 20{,}8 - 9{,}2 \approx 11{,}6\,\mathrm{m/s}$.
- Con $a = 4\,\mathrm{m/s^2}$ da fermo: la legge oraria è $x = 2t^2$ (e la velocità $v = 4t$).
:::

## Caduta libera e lancio verticale
Vicino alla Terra ogni corpo, senza attrito dell'aria, ha la stessa accelerazione: $g = 9{,}8\,\mathrm{m/s^2}$, verso il basso. Non dipende dalla massa.

Si prende l'asse y verso l'alto. Un corpo lanciato da quota $y_0$ con velocità $v_0$:
$$v(t) = v_0 - g\,t \qquad y(t) = y_0 + v_0\,t - \tfrac12\,g\,t^2 \qquad v^2 = v_0^2 - 2g\,(y - y_0)$$
dove $g = 9{,}8\,\mathrm{m/s^2}$ è l'accelerazione di gravità (in modulo).

Risultati da sapere:
- **caduta da fermo** per un tempo $t$: $h = \tfrac12gt^2$. In 1 s: 4,9 m. In 3,5 s: $\approx 60\,\mathrm m$.
- **velocità dopo una caduta** $h$: $v = \sqrt{2gh}$.
- **altezza massima** con lancio $v_0$: $h = v_0^2/(2g)$. Per salire di 50 m serve $v_0 = \sqrt{2\cdot 9{,}8\cdot 50} \approx 31{,}3\,\mathrm{m/s}$.
- **tempo di salita** $v_0/g$; il tempo di discesa è uguale. Se torna giù dopo 2 s, sale per 1 s: $v_0 = 9{,}8\,\mathrm{m/s}$.

Nel **punto più alto** la velocità è zero. L'accelerazione invece è ancora $g$, verso il basso.

::: esempio
Palla lanciata in su a 35 m/s. A 30 m di quota: $v^2 = 1225 - 2\cdot 9{,}8\cdot 30 = 637$, quindi $v \approx 25{,}2\,\mathrm{m/s}$. La massa della palla non conta.
:::

::: attenzione
Due sassi lanciati in verticale dalla stessa quota e nello stesso istante hanno la stessa accelerazione $g$. Se arrivano in acqua in tempi diversi, è perché le **velocità iniziali** sono diverse. Massa e forza di gravità non c'entrano.
:::

## Piano inclinato senza attrito
Su un piano inclinato di un angolo $\alpha$ il corpo scende con accelerazione costante:
$$a = g\sin\alpha$$
dove $\alpha$ è l'inclinazione rispetto all'orizzontale.

Due corpi uguali partono dalla stessa altezza su due piani con pendenza diversa:
- **tempo**: arriva prima quello sul piano più ripido. Ha accelerazione maggiore e strada più corta.
- **velocità finale**: è la stessa, $v = \sqrt{2gh}$. Conta solo il dislivello $h$.

## Velocità media vettoriale e scalare
Se vai avanti di $\Delta x$ in un tempo $t_1$ e torni indietro in $t_2$:
- velocità media vettoriale = 0 (spostamento nullo);
- velocità scalare media = $2\Delta x/(t_1 + t_2)$.

::: esame
Aperte frequenti: discutere il moto rettilineo uniforme (definizione, legge oraria, grafici); esporre il moto uniformemente accelerato (le tre formule, caduta libera).
:::

::: sintesi
- Uniforme: $a = 0$, $x = x_0 + vt$, spazi proporzionali ai tempi.
- Uniformemente accelerato: $v = v_0 + at$, $x = x_0 + v_0t + \tfrac12at^2$, $v^2 = v_0^2 + 2a\Delta x$.
- Frenata: $t = v_0/a$, $d = v_0^2/(2a)$.
- Gravità: $g = 9{,}8\,\mathrm{m/s^2}$ verso il basso, uguale per tutti; $h = \tfrac12gt^2$, $v = \sqrt{2gh}$.
- Punto più alto: $v = 0$ ma $a = g$ verso il basso.
- Piano inclinato: $a = g\sin\alpha$; stessa velocità finale, prima arriva il più ripido.
:::

=== 7 dispense
# Lezione 07 — Moto del proiettile e moto circolare

## L'idea: due moti indipendenti
Un proiettile è un corpo lanciato con una velocità che ha una parte orizzontale. Senza attrito dell'aria agisce solo la gravità, che è verticale. Quindi il moto si divide in due moti indipendenti:
- **orizzontale (x)**: nessuna accelerazione. Moto **uniforme**, $v_x$ costante.
- **verticale (y)**: accelerazione $g$ verso il basso. Moto **uniformemente accelerato**.

L'accelerazione è sempre $g$, verso il basso, in ogni punto. Anche nel punto più alto. Non dipende dalla massa né da quanto forte è stato il lancio.

La traiettoria è una **parabola**.

## Lancio orizzontale da un'altezza
Un corpo parte da quota $h$ con velocità orizzontale $v_0$. Si prende l'origine nel punto di lancio e l'asse y verso il basso:
$$x = v_0\,t \qquad y = \tfrac12\,g\,t^2$$
dove:
- $x$ = distanza orizzontale (m);
- $y$ = quanto è sceso (m);
- $v_0$ = velocità di lancio orizzontale (m/s);
- $g = 9{,}8\,\mathrm{m/s^2}$.

**Traiettoria.** Da $t = x/v_0$ si ottiene $y = \dfrac{g}{2v_0^2}\,x^2$: una parabola.

**Tempo di volo.** Si pone $y = h$:
$$t_v = \sqrt{\frac{2h}{g}}$$
Dipende **solo dall'altezza**, non da $v_0$. È lo stesso tempo di un corpo lasciato cadere da fermo.

**Gittata** (distanza orizzontale raggiunta):
$$x_G = v_0\,\sqrt{\frac{2h}{g}}$$
A parità di altezza è proporzionale alla velocità di lancio.

**Velocità all'impatto.** $v_x = v_0$ resta costante; $v_y = gt_v = \sqrt{2gh}$. Il modulo è $v = \sqrt{v_x^2 + v_y^2}$.

::: esempio
- Torre di 25 m, $v_0 = 200\,\mathrm{m/s}$: $t_v = \sqrt{50/9{,}8} \approx 2{,}26\,\mathrm s$.
- Torre di 40 m, $v_0 = 150\,\mathrm{m/s}$: $t_v \approx 2{,}86\,\mathrm s$, gittata $\approx 150\cdot 2{,}86 \approx 428\,\mathrm m$.
- Sasso lanciato in orizzontale da 20 m, arriva a 45° dalla verticale. All'impatto $v_y = \sqrt{2\cdot 9{,}8\cdot 20} \approx 19{,}8\,\mathrm{m/s}$. A 45° vale $v_x = v_y$, quindi $v_0 = 19{,}8\,\mathrm{m/s}$.
:::

::: attenzione
Un proiettile sparato in orizzontale e un sasso lasciato cadere dalla stessa altezza, nello stesso istante, toccano terra **insieme**. In verticale partono entrambi con $v_y = 0$ e hanno la stessa $g$.
:::

## Lancio obliquo
Un corpo parte da terra con velocità $v_0$ inclinata di $\theta$ sull'orizzontale. Le componenti iniziali sono:
$$v_{0x} = v_0\cos\theta \qquad v_{0y} = v_0\sin\theta$$
Nel tempo:
$$v_x = v_0\cos\theta \ (\text{costante}) \qquad v_y = v_0\sin\theta - g\,t$$

Risultati principali:
- **tempo per arrivare in cima**: $t_{max} = \dfrac{v_0\sin\theta}{g}$ (in cima $v_y = 0$);
- **altezza massima**: $h_{max} = \dfrac{(v_0\sin\theta)^2}{2g}$;
- **tempo di volo** (ritorno alla stessa quota): $2\,t_{max}$;
- **gittata**:
$$G = \frac{v_0^2\,\sin(2\theta)}{g}$$
dove $v_0$ = velocità di lancio (m/s), $\theta$ = angolo di lancio, $g = 9{,}8\,\mathrm{m/s^2}$.

La gittata dipende solo da **velocità e angolo** di lancio, non dalla massa. È massima a $\theta = 45°$.

::: esempio
- Pallone a 20 m/s, 30°: $v_{0y} = 20\sin 30° = 10\,\mathrm{m/s}$. Arriva in cima dopo $10/9{,}8 \approx 1{,}0\,\mathrm s$.
- Proiettile a 30 m/s, 60°: $v_x = 30\cos 60° = 15\,\mathrm{m/s}$, dopo 1,6 s come in ogni altro istante.
- In un istante $v_x = 30\,\mathrm{m/s}$, $v_y = 40\,\mathrm{m/s}$. Dopo 1,8 s: $v_x = 30$, $v_y = 40 - 9{,}8\cdot 1{,}8 \approx 22{,}4\,\mathrm{m/s}$. Modulo $\sqrt{30^2 + 22{,}4^2} \approx 37\,\mathrm{m/s}$.
:::

::: attenzione
Nel moto del proiettile la gravità cambia solo $v_y$. La componente $v_x$ resta costante. Il proiettile non "comincia a cadere quando finisce la spinta": cade fin dall'inizio.
:::

## Moto circolare: perché c'è accelerazione
Nel moto circolare la traiettoria è una circonferenza. Se il modulo della velocità è costante, il moto è **circolare uniforme**.

Anche così c'è un'accelerazione. Il motivo: la velocità è un vettore. Nel moto circolare la sua **direzione cambia** di continuo, perché resta sempre tangente alla circonferenza. Una velocità che cambia direzione è una velocità che cambia, quindi c'è accelerazione.

Questa accelerazione punta **verso il centro** e si chiama **centripeta**:
$$a_c = \frac{v^2}{R} = \omega^2 R$$
dove:
- $v$ = velocità (m/s);
- $R$ = raggio (m);
- $\omega$ = velocità angolare (rad/s).

Se anche il modulo della velocità cambia (moto circolare vario), si aggiunge un'accelerazione **tangenziale** $a_t = dv/dt$.

## Velocità angolare
La velocità angolare dice quanto angolo si spazza al secondo:
$$\omega = \frac{d\theta}{dt} = \frac{2\pi}{T} = 2\pi f \qquad v = \omega R$$
dove $\theta$ = angolo (rad), $T$ = periodo (s), $f$ = frequenza (Hz). Si misura in rad/s ed è detta anche pulsazione.

::: esempio
Centrifuga a 60 000 giri/min $= 1000$ giri/s. $\omega = 2\pi\cdot 1000 \approx 6283\,\mathrm{rad/s}$.
:::

::: esame
Aperte frequenti: cos'è la gittata e come si calcola; discutere il lancio orizzontale (due moti, parabola, tempo di volo, gittata); spiegare perché nel moto circolare uniforme c'è accelerazione.
:::

::: sintesi
- Proiettile = moto uniforme in x + uniformemente accelerato in y; traiettoria parabolica.
- Accelerazione sempre $g$ verso il basso, anche in cima; $v_x$ costante.
- Lancio orizzontale: $t_v = \sqrt{2h/g}$ (solo dall'altezza), gittata $v_0\sqrt{2h/g}$.
- Lancio obliquo: $t_{max} = v_0\sin\theta/g$, $G = v_0^2\sin 2\theta/g$; non dipende dalla massa.
- Moto circolare uniforme: la direzione di $\vec v$ cambia → $a_c = v^2/R$ verso il centro.
:::

=== 8 dispense
# Lezione 08 — Moto circolare uniforme

## Il moto circolare uniforme
Un punto gira su una circonferenza di raggio $R$ con velocità di modulo costante.
- Il **modulo** della velocità non cambia.
- La **direzione** della velocità cambia sempre: è tangente alla circonferenza.
- Quindi c'è un'accelerazione, diretta **verso il centro**.

## Periodo, frequenza, pulsazione
- **Periodo** $T$: il tempo per fare un giro. Unità SI: secondo.
- **Frequenza** $f = 1/T$: i giri fatti in un secondo. Unità: hertz, $\mathrm{Hz} = \mathrm{s^{-1}}$.
- **Velocità angolare** (o **pulsazione**) $\omega$: l'angolo spazzato al secondo, in rad/s.

$$\omega = \frac{2\pi}{T} = 2\pi f$$
dove $2\pi$ è l'angolo di un giro in radianti.

La legge oraria dell'angolo è lineare, come nel moto rettilineo uniforme:
$$\theta(t) = \theta_0 + \omega\,t$$
dove $\theta_0$ è l'angolo a $t = 0$.

::: esempio
- Lancette: secondi $T = 60\,\mathrm s$; minuti $T = 3600\,\mathrm s$; ore $T = 43\,200\,\mathrm s$. Periodo più breve = frequenza più alta: vince la lancetta dei secondi.
- Disco a 45 giri/min: $f = 45/60 = 0{,}75\,\mathrm{Hz}$, $T = 1/0{,}75 \approx 1{,}3\,\mathrm s$.
:::

## Velocità angolare e velocità periferica
Sono due cose diverse.
- **Velocità angolare** $\omega$ (rad/s): quanto angolo si spazza al secondo. È uguale per tutti i punti di un corpo rigido che ruota.
- **Velocità periferica** (o tangenziale) $v$ (m/s): quanta strada fa il punto al secondo lungo la circonferenza. Cresce con la distanza dal centro.

Il legame:
$$v = \omega\,R = \frac{2\pi R}{T} = 2\pi R f$$
dove:
- $v$ = velocità periferica (m/s);
- $R$ = raggio (m);
- $\omega$ = velocità angolare (rad/s).

Perché: in un giro il punto fa $2\pi R$ in un tempo $T$.

::: esempio
- Ruota panoramica, $R = 50\,\mathrm m$, $T = 60\,\mathrm s$: $v = 2\pi\cdot 50/60 \approx 5{,}24\,\mathrm{m/s}$.
- Asta di 1,02 m che ruota a 12 rad/s attorno a un estremo: l'altro estremo va a $12\cdot 1{,}02 = 12{,}24\,\mathrm{m/s}$.
- Lancetta dei secondi lunga 4 cm: $\omega \approx 0{,}105\,\mathrm{rad/s}$, $v = 0{,}105\cdot 0{,}04 \approx 0{,}0042\,\mathrm{m/s}$.
- $\omega = 0{,}66\,\mathrm{rad/s}$, $R = 30\,\mathrm m$: $v \approx 20\,\mathrm{m/s}$. Al contrario $\omega = 20/30 \approx 0{,}66\,\mathrm{rad/s}$.
- $R = 6\,\mathrm m$, un giro in 8 s: $v = 2\pi\cdot 6/8 \approx 4{,}71\,\mathrm{m/s}$.
- $f = 10\,\mathrm{Hz}$, $R = 0{,}4\,\mathrm m$: $v = 2\pi\cdot 0{,}4\cdot 10 \approx 25{,}1\,\mathrm{m/s}$.
- Valvola di una ruota di diametro 50 cm a 12,56 m/s. Circonferenza $\pi\cdot 0{,}5 \approx 1{,}57\,\mathrm m$. Un giro dura $1{,}57/12{,}56 = 0{,}125\,\mathrm s$.
:::

::: attenzione
Non confondere le unità: $\omega$ in rad/s, $v$ in m/s, $f$ in Hz, $T$ in s. Un'opzione come "0,105 m/s" per la velocità angolare è sbagliata per l'unità.
:::

## Accelerazione centripeta
Nel moto circolare uniforme l'unica accelerazione è quella **centripeta**. È sempre diretta **verso il centro**, perpendicolare alla velocità. Cambia la direzione della velocità, non il suo modulo.

$$a_c = \frac{v^2}{R} = \omega^2 R = \omega\,v$$
dove:
- $a_c$ = accelerazione centripeta (m/s²);
- $v$ = velocità periferica (m/s);
- $R$ = raggio (m);
- $\omega$ = velocità angolare (rad/s).

Il modulo è costante, la direzione ruota con il punto.

::: esempio
- $v = 10\,\mathrm{m/s}$, $R = 50\,\mathrm m$: $a_c = 100/50 = 2\,\mathrm{m/s^2}$.
- Ruota panoramica: $a_c = 5{,}24^2/50 \approx 0{,}55\,\mathrm{m/s^2}$.
- La Luna ($T = 27{,}3$ giorni $= 2{,}36\cdot 10^6\,\mathrm s$, $r = 3{,}82\cdot 10^8\,\mathrm m$): $a = r(2\pi/T)^2 \approx 2{,}7\cdot 10^{-3}\,\mathrm{m/s^2}$.
:::

**La forza che serve.** Per tenere un corpo di massa $m$ in moto circolare serve una forza verso il centro (tensione di un cavo, attrito, gravità). Per la seconda legge di Newton:
$$F_c = m\,a_c = \frac{m\,v^2}{R}$$
dove $m$ = massa (kg) e $F_c$ = forza centripeta (N).

::: esempio
Massa di 1 kg su un cerchio di 2 m a 10 m/s, trattenuta da un cavo: $F = 1\cdot 100/2 = 50\,\mathrm N$.
:::

## Accelerazione tangenziale e centripeta nei moti curvi
In un moto curvo qualsiasi l'accelerazione ha due componenti:
- **tangenziale** $a_t = \dfrac{dv}{dt}$: lungo la velocità. Cambia il **modulo** della velocità. È zero se il modulo è costante.
- **centripeta** (normale) $a_n = \dfrac{v^2}{R}$: perpendicolare alla velocità, verso il centro di curvatura. Cambia la **direzione**. $R$ è il **raggio di curvatura**: il raggio del cerchio che meglio si adatta alla traiettoria in quel punto.

L'accelerazione totale ha modulo $a = \sqrt{a_t^2 + a_n^2}$.

::: esempio
Un proiettile nel punto più alto ha velocità orizzontale $v_x$ e accelerazione $g$ verticale. Lì $g$ è tutta normale, quindi $R = v_x^2/g$. Con $v_0 = 2\,\mathrm{m/s}$ a 45°: $R = (2\cos 45°)^2/9{,}8 \approx 0{,}2\,\mathrm m$.
:::

## Moto circolare vario
Se $\omega$ cambia nel tempo, si definisce l'**accelerazione angolare**:
$$\alpha = \frac{d\omega}{dt} \qquad a_t = \alpha R$$
dove $\alpha$ si misura in rad/s².

Con $\alpha$ costante valgono formule uguali a quelle del moto rettilineo:
$$\omega = \omega_0 + \alpha t \qquad \theta = \theta_0 + \omega_0 t + \tfrac12\alpha t^2$$
Anche $a_c = \omega^2 R$ diventa variabile.

::: esempio
Disco a 2,1 rad/s che rallenta con $\alpha = 0{,}45\,\mathrm{rad/s^2}$: si ferma dopo $2{,}1/0{,}45 \approx 4{,}7\,\mathrm s$.
:::

## Notazione vettoriale
La velocità angolare si può trattare come un vettore $\vec\omega$. È perpendicolare al piano del moto. Il verso è quello da cui il moto si vede antiorario. Allora:
$$\vec v = \vec\omega \times \vec r$$

## Un cenno alle onde
In una corda percorsa da onde armoniche, la distanza tra due creste consecutive, vista in una foto istantanea, è la **lunghezza d'onda** $\lambda$ (m). Il periodo invece è un tempo, l'ampiezza è l'altezza della cresta.

::: esame
Aperte frequenti: cos'è l'accelerazione centripeta; cos'è la velocità angolare; differenza tra velocità angolare e periferica; accelerazione tangenziale e centripeta in un moto curvo; periodo, frequenza e pulsazione nel moto circolare uniforme.
:::

::: sintesi
- $T$ in s, $f = 1/T$ in Hz, $\omega = 2\pi/T = 2\pi f$ in rad/s.
- $v = \omega R = 2\pi R/T$: la velocità periferica cresce con il raggio, $\omega$ no.
- Nel moto circolare uniforme cambia solo la direzione di $\vec v$.
- $a_c = v^2/R = \omega^2R$, sempre verso il centro; forza necessaria $F = mv^2/R$.
- Moti curvi: $a_t = dv/dt$ (modulo), $a_n = v^2/R$ (direzione).
- Moto vario: $\alpha = d\omega/dt$ in rad/s², $a_t = \alpha R$.
:::
