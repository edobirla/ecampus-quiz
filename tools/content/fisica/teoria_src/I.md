=== 55 dispense
# Lezione 55 — Resistenza e leggi di Ohm

## Perché la corrente ha una velocità costante

In un metallo il campo elettrico accelera gli elettroni liberi. Gli elettroni però urtano di continuo gli ioni del reticolo. Dopo ogni urto ripartono e vengono di nuovo frenati. L'effetto netto è simile a un attrito: gli elettroni avanzano con una velocità media costante, detta **velocità di deriva**.

$$v_d = \frac{e\,\tau}{m}\,E$$

dove:
- $v_d$ = velocità di deriva (m/s)
- $e$ = carica dell'elettrone, $1{,}6 \cdot 10^{-19}\,\mathrm{C}$
- $\tau$ = tempo medio tra due urti (s)
- $m$ = massa dell'elettrone (kg)
- $E$ = campo elettrico nel conduttore (V/m)

## Legge di Ohm in forma locale

La densità di corrente è proporzionale al campo elettrico. La costante dipende solo dal materiale.

$$\vec j = \sigma\,\vec E \qquad \text{oppure} \qquad \vec E = \rho\,\vec j$$

dove:
- $\vec j$ = densità di corrente, corrente per unità di superficie (A/m²)
- $\sigma = \dfrac{n e^2 \tau}{m}$ = conduttività elettrica (S/m)
- $n$ = numero di portatori per unità di volume (m⁻³)
- $\rho = 1/\sigma$ = resistività (Ω·m)

La conduttività contiene $e^2$, quindi è sempre positiva. Per questo $\vec j$ ha sempre il verso di $\vec E$, qualunque sia il segno dei portatori.

## Resistenza e prima legge di Ohm

In un filo applichi una differenza di potenziale. Nel filo passa una corrente proporzionale a quella tensione. La costante di proporzionalità è la **resistenza**.

$$V = R\,I \qquad \Longleftrightarrow \qquad I = \frac{V}{R}$$

dove:
- $V$ = differenza di potenziale ai capi del conduttore (V)
- $I$ = intensità di corrente (A)
- $R$ = resistenza (Ω, con $1\,\Omega = 1\,\mathrm{V/A}$)

L'inverso della resistenza è la **conduttanza** $G = 1/R$, in siemens (S). I conduttori che seguono questa legge si chiamano **ohmici** o **resistori**.

Ricorda anche la definizione di corrente: è la carica che passa in una sezione ogni secondo.

$$I = \frac{Q}{t}$$

dove $Q$ = carica (C), $t$ = tempo (s), $I$ = corrente (A).

::: esempio
Una corrente di 2,5 A scorre per 4 minuti. La carica che passa in ogni sezione è $Q = I t = 2{,}5 \cdot 240 = 600\,\mathrm{C}$.
:::

## Seconda legge di Ohm: da cosa dipende R

Un filo lungo resiste di più. Un filo spesso resiste di meno.

$$R = \rho\,\frac{l}{S}$$

dove:
- $R$ = resistenza (Ω)
- $\rho$ = resistività del materiale (Ω·m)
- $l$ = lunghezza del filo (m)
- $S$ = area della sezione (m²)

La resistività dei metalli cresce con la temperatura, in modo quasi lineare:

$$\rho = \rho_0\,(1 + \alpha\,\Delta T)$$

dove:
- $\rho_0$ = resistività a 20 °C (Ω·m)
- $\alpha$ = coefficiente termico (K⁻¹): positivo nei metalli, negativo in silicio e germanio
- $\Delta T$ = variazione di temperatura rispetto a 20 °C (K)

Nei **superconduttori**, sotto una temperatura critica, la resistività diventa praticamente zero.

## Resistori in serie

In serie i resistori stanno uno dopo l'altro. La corrente è la stessa in tutti. Le tensioni si sommano.

$$R_{eq} = R_1 + R_2 + \dots + R_n$$

dove $R_{eq}$ = resistenza equivalente (Ω), $R_1 \dots R_n$ = singole resistenze (Ω).

## Resistori in parallelo

In parallelo i resistori sono collegati agli stessi due punti. La tensione è la stessa per tutti. Le correnti si sommano: $I = I_1 + I_2 + \dots$

$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}$$

Per due soli resistori: $R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$. Per $n$ resistori uguali $R$: $R_{eq} = R/n$.

| | Serie | Parallelo |
|---|---|---|
| Uguale per tutti | la corrente $I$ | la tensione $V$ |
| Si somma | la tensione | la corrente |
| $R_{eq}$ | $R_1 + R_2$ | $\dfrac{R_1R_2}{R_1+R_2}$ |
| $R_{eq}$ rispetto alle singole | più grande della maggiore | più piccola della minore |
| Chi prende più corrente | tutti la stessa | la resistenza **minore** ($I = V/R$) |

::: esempio
- 20 Ω e 40 Ω in serie: $R_{eq} = 60\,\Omega$.
- 20 Ω e 40 Ω in parallelo: $R_{eq} = \dfrac{20 \cdot 40}{60} \approx 13{,}3\,\Omega$.
- Due da 10 Ω: in serie 20 Ω, in parallelo 5 Ω.
- Due da 20 Ω in parallelo (= 10 Ω) in serie con 10 Ω: $R_{eq} = 20\,\Omega$.
- Pila da 9 V con 5 Ω e 10 Ω in serie: $I = 9/15 = 0{,}6\,\mathrm{A}$.
:::

::: esempio
Vuoi 10 mA in una resistenza da 400 Ω con una pila da 12 V. Serve $R_{tot} = V/I = 12/0{,}01 = 1200\,\Omega$. Aggiungi quindi **800 Ω in serie**: in serie le resistenze si sommano e la corrente cala.
:::

## Resistenza e potenza

Un apparecchio porta scritta la potenza $P$ alla tensione $V$. Da lì ricavi la resistenza:

$$R = \frac{V^2}{P}$$

dove $R$ = resistenza (Ω), $V$ = tensione (V), $P$ = potenza (W).

A parità di tensione, **meno potenza vuol dire più resistenza**. Una lampada da 120 W ha resistenza maggiore di uno scaldabagno da 1500 W. Allo stesso modo, con la stessa tensione, la resistenza più piccola assorbe più corrente e quindi più potenza ($P = V^2/R$).

::: esempio
Faro da 40 W su batteria da 12 V: $R = 144/40 = 3{,}6\,\Omega$.
Un dispositivo da 2,5 W acceso 10 minuti produce $Q = P t = 2{,}5 \cdot 600 = 1500\,\mathrm{J}$.
:::

::: attenzione
Tre resistori **uguali in serie**: stessa corrente e stessa resistenza. Quindi dissipano la stessa potenza, anche quello in mezzo. La posizione nella serie non conta.
:::

::: esame
Nelle aperte chiedono: definire la resistenza ($V = RI$, $R = \rho l/S$), enunciare la prima legge di Ohm e ricavare $R_{eq}$ in serie (stessa corrente, tensioni che si sommano) e in parallelo (stessa tensione, correnti che si sommano).
:::

::: sintesi
- Prima legge di Ohm: $V = RI$, cioè $I = V/R$. Forma locale: $\vec j = \sigma \vec E$.
- Seconda legge di Ohm: $R = \rho\,l/S$.
- Serie: stessa corrente, $R_{eq} = R_1 + R_2$.
- Parallelo: stessa tensione, $1/R_{eq} = 1/R_1 + 1/R_2$; la resistenza minore prende più corrente.
- $R = V^2/P$: a parità di tensione, meno potenza significa più resistenza.
:::

=== 56 dispense
# Lezione 56 — Potenza elettrica ed effetto Joule

## Potenza elettrica

Il campo elettrico sposta le cariche e quindi compie lavoro. Spostare una carica $dq$ tra due punti con differenza di potenziale $V$ costa $dL = V\,dq$. Dividendo per il tempo si ottiene la potenza.

$$P = V\,I$$

dove:
- $P$ = potenza (W, con $1\,\mathrm{W} = 1\,\mathrm{J/s}$)
- $V$ = differenza di potenziale (V)
- $I$ = corrente (A)

La potenza dice quanta energia passa ogni secondo. Un trapano da 500 W riceve dalle cariche 500 J ogni secondo. Una centrale da 5 MW può fornire 5 milioni di joule al secondo.

L'energia è potenza per tempo:

$$E = P\,t$$

dove $E$ = energia (J), $P$ = potenza (W), $t$ = tempo (s).

::: esempio
- Lampadina da 100 W: per dissipare 30 kJ servono $t = 30\,000/100 = 300\,\mathrm{s}$, cioè 5 minuti.
- Sorgente da 500 W per 10 minuti: $Q = 500 \cdot 600 = 300\,\mathrm{kJ}$.
- Impianto da 3 kW a 220 V: corrente massima $I = P/V = 3000/220 \approx 13{,}6\,\mathrm{A}$.
:::

## Effetto Joule

In un conduttore ohmico, in regime stazionario, le cariche non accelerano. Anche il potenziale resta costante. Il lavoro del campo quindi non diventa né energia cinetica né energia potenziale. Negli urti passa agli ioni del reticolo, che vibrano di più: il conduttore **si scalda**. Questa conversione totale di energia elettrica in calore è l'**effetto Joule**.

Succede in **ogni** conduttore ohmico percorso da corrente, perché ogni conduttore reale ha $R > 0$.

Unendo $P = VI$ e $V = RI$ si ottengono tre forme equivalenti:

$$P = V I = R I^2 = \frac{V^2}{R}$$

dove:
- $P$ = potenza dissipata in calore (W)
- $R$ = resistenza (Ω)
- $I$ = corrente (A)
- $V$ = tensione ai capi del resistore (V)

Scegli la forma in base a cosa conosci: $RI^2$ se hai la corrente, $V^2/R$ se hai la tensione.

::: esempio
- 5 Ω con 16 A: $P = 5 \cdot 16^2 = 1280\,\mathrm{W}$.
- 10 Ω su una pila da 9 V: $P = 81/10 = 8{,}1\,\mathrm{W}$. Se il resistore regge solo 5 W, **brucia**.
- 1 kΩ a 50 V: $P = 2500/1000 = 2{,}5\,\mathrm{W}$.
- Stufa da 500 W a 220 V: $R = 220^2/500 \approx 97\,\Omega$, circa 100 Ω.
- Lampadina che assorbe 300 mA a 1,5 V: $R = 1{,}5/0{,}3 = 5\,\Omega$.
- 22 Ω alla rete a 220 V: $I = 220/22 = 10\,\mathrm{A}$.
:::

::: attenzione
La potenza si misura in **watt**, non in joule. Il joule è energia. "8,1 J" come risposta a "quanta potenza" è sbagliato.
:::

## Forma locale dell'effetto Joule

A volte serve la potenza in un volumetto piccolo del conduttore. Si usa la **densità di potenza**: potenza per unità di volume.

$$w = \vec E \cdot \vec j$$

dove:
- $w$ = potenza dissipata per unità di volume (W/m³)
- $\vec E$ = campo elettrico nel punto (V/m)
- $\vec j$ = densità di corrente nel punto (A/m²)

Ragionamento in tre passi:
1. Nel volume $dV$ ci sono $n\,dV$ cariche $q$. Il campo le sposta di $d\vec l = \vec v_d\,dt$.
2. Il lavoro è $dL = n\,dV\,q\,\vec E \cdot \vec v_d\,dt = \vec E \cdot (n q \vec v_d)\,dV\,dt$.
3. Poiché $n q \vec v_d = \vec j$, dividendo per $dV\,dt$ resta $w = \vec E \cdot \vec j$.

In un conduttore ohmico $\vec E$ e $\vec j$ sono paralleli, quindi $w = E\,j = \rho j^2 = \sigma E^2$.

## Potenza in serie e in parallelo

La potenza totale di più resistori è quella della loro resistenza equivalente.
- **Serie**: stessa corrente, $P = R_1 I^2 + R_2 I^2 = R_{eq} I^2$.
- **Parallelo**: stessa tensione, $P = V^2/R_1 + V^2/R_2 = V^2/R_{eq}$.

::: esempio
Batteria da 1,5 V, due resistori in parallelo, corrente totale 50 mA. Uno vale 60 Ω.
$R_{eq} = 1{,}5/0{,}05 = 30\,\Omega$. Da $\frac{1}{30} = \frac{1}{60} + \frac{1}{R}$ segue $R = 60\,\Omega$.
:::

::: esempio
Lampade da 100 Ω e 200 Ω su 100 V.
- In parallelo: $R_{eq} = \frac{100 \cdot 200}{300} \approx 66{,}7\,\Omega$, $I = 100/66{,}7 = 1{,}5\,\mathrm{A}$.
- In serie: $R_{eq} = 300\,\Omega$, $I = 100/300 \approx 0{,}33\,\mathrm{A}$.
:::

::: esempio
Generatore da 120 V e lampadine da 6 V. In serie la tensione si divide tra le lampadine. Ne servono $120/6 = 20$ **in serie**, così ognuna riceve 6 V. In parallelo ognuna riceverebbe 120 V e brucerebbe.
:::

## Scaldare con una resistenza

Per scaldare acqua con una serpentina: prima il calore, poi la potenza, poi la grandezza elettrica.

$$Q = m\,c\,\Delta T \qquad P = \frac{Q}{t}$$

dove:
- $Q$ = calore (J)
- $m$ = massa (kg; 1 litro d'acqua ≈ 1 kg)
- $c$ = calore specifico (J/(kg·K); acqua 4186)
- $\Delta T$ = variazione di temperatura (K o °C)
- $t$ = tempo (s)

::: esempio
40 L d'acqua da 15 °C a 45 °C in 30 minuti, serpentina da 30 Ω.
1. $Q = 40 \cdot 4186 \cdot 30 \approx 5{,}02 \cdot 10^6\,\mathrm{J}$.
2. $P = Q/1800 \approx 2790\,\mathrm{W}$.
3. $V = \sqrt{P R} = \sqrt{2790 \cdot 30} \approx 290\,\mathrm{V}$.
:::

::: esempio
Generatore da 24 V, si vogliono 60 W con un filo di resistività $1{,}2 \cdot 10^{-6}\,\Omega\,\mathrm{m}$ (0,12 mΩ·cm) e diametro 0,24 mm.
1. $R = V^2/P = 576/60 = 9{,}6\,\Omega$.
2. $S = \pi (0{,}12 \cdot 10^{-3})^2 \approx 4{,}52 \cdot 10^{-8}\,\mathrm{m^2}$.
3. $l = R S/\rho \approx 0{,}362\,\mathrm{m} = 36{,}2\,\mathrm{cm}$.
:::

## Unità pratiche: kWh e Ah

- Il **kilowattora** è energia: $1\,\mathrm{kWh} = 1000\,\mathrm{W} \cdot 3600\,\mathrm{s} = 3{,}6 \cdot 10^6\,\mathrm{J}$. Una lampada da 100 W accesa 12 ore consuma 1,2 kWh.
- L'**ampere-ora** è carica: $1\,\mathrm{Ah} = 1\,\mathrm{A} \cdot 3600\,\mathrm{s} = 3600\,\mathrm{C}$. Una batteria da 50 Ah può fornire $50 \cdot 3600 = 180\,000\,\mathrm{C}$.

::: attenzione
"50 Ah" non è una corrente e non è una durata. È la **carica** che la batteria può fornire.
:::

::: sintesi
- Potenza elettrica: $P = VI$, in watt (J/s).
- Effetto Joule: in ogni conduttore ohmico l'energia elettrica diventa calore, $P = RI^2 = V^2/R$.
- Forma locale: $w = \vec E \cdot \vec j$ (W/m³).
- Serie e parallelo: la potenza totale è quella della resistenza equivalente.
- Energia $E = Pt$; kWh è energia, Ah è carica (3600 C).
:::

=== 57 dispense
# Lezione 57 — Generatori e forza elettromotrice

## A cosa serve un generatore

Una corrente in un circuito dissipa energia, per esempio per effetto Joule. Senza qualcosa che rifornisca energia, le cariche si fermano e la tensione si annulla. Il **generatore** mantiene la differenza di potenziale tra i suoi due morsetti. Ha un polo positivo (anodo) e un polo negativo (catodo). Nel simbolo il tratto lungo è il polo positivo.

## Campo elettromotore

Il campo elettrostatico è conservativo: su un giro chiuso il suo lavoro è zero. Da solo non può mantenere una corrente che dissipa energia. Dentro il generatore agisce quindi un altro campo, **non conservativo**, detto **campo elettromotore** $\vec E_m$. Ha origine chimica (pile), luminosa (celle fotovoltaiche) o altra.

Il campo elettromotore spinge le cariche positive verso il polo positivo. Lo fa contro il campo elettrostatico dei morsetti, che ha verso opposto.

## Forza elettromotrice

La **forza elettromotrice** (f.e.m.) è il lavoro che il generatore compie su ogni coulomb di carica positiva, portandolo dal polo negativo al polo positivo.

$$\mathcal E = \int_{-}^{+} \vec E_m \cdot d\vec l = \oint \vec E \cdot d\vec l$$

dove:
- $\mathcal E$ = forza elettromotrice (V, cioè J/C)
- $\vec E_m$ = campo elettromotore (V/m)
- $\vec E$ = campo totale lungo il circuito (V/m); il contributo elettrostatico sul giro chiuso è nullo

Nonostante il nome, la f.e.m. **non è una forza**. È un lavoro per unità di carica e si misura in volt.

A **circuito aperto** non passa corrente. Le cariche si accumulano sui morsetti finché il campo elettrostatico bilancia quello elettromotore. In queste condizioni la f.e.m. è uguale alla tensione tra i morsetti.

## Generatore reale: resistenza interna

Se colleghi un carico, la tensione ai morsetti scende. Scende tanto più quanto più corrente eroghi. Si descrive il generatore reale come un **generatore ideale** di f.e.m. $\mathcal E$ **in serie** con una **resistenza interna** $r$.

$$V = \mathcal E - r\,I$$

dove:
- $V$ = tensione ai morsetti (V)
- $\mathcal E$ = forza elettromotrice (V)
- $r$ = resistenza interna (Ω)
- $I$ = corrente erogata (A)

Con un carico esterno $R$ la corrente è:

$$I = \frac{\mathcal E}{R + r}$$

dove $R$ = resistenza del carico (Ω).

- Circuito aperto ($I = 0$): $V = \mathcal E$.
- Circuito chiuso: $V < \mathcal E$, per la caduta $rI$ dentro il generatore.
- Generatore **ideale**: $r = 0$, quindi $V = \mathcal E$ sempre. Negli esercizi è sottinteso se non si dice nulla.

::: esempio
Pila da 9 V con $r = 1\,\Omega$ su un carico da 8 Ω: $I = 9/(8+1) = 1\,\mathrm{A}$. Tensione ai morsetti: $V = 9 - 1 \cdot 1 = 8\,\mathrm{V}$.
:::

## Bilancio energetico del generatore

Il generatore fornisce potenza $\mathcal E I$. Una parte si dissipa dentro di lui, una parte arriva al carico.

$$\mathcal E\,I = R I^2 + r I^2$$

dove:
- $\mathcal E I$ = potenza erogata dal generatore (W)
- $R I^2$ = potenza dissipata nel carico (W)
- $r I^2$ = potenza persa nel generatore (W)

Dividendo per $I$ si ritrova $\mathcal E = RI + rI$, cioè $V = \mathcal E - rI$. Il modello "ideale + $r$ in serie" torna anche con l'energia.

::: esempio
Pila da 2 V con $r = 1\,\Omega$ su un filo da 5 Ω, per 2 minuti. $I = 2/6 \approx 0{,}33\,\mathrm{A}$.
- Energia chimica convertita: $\mathcal E I t = 2 \cdot 0{,}33 \cdot 120 \approx 80\,\mathrm{J}$.
- Calore nel filo: $R I^2 t \approx 67\,\mathrm{J}$.
- Calore nella pila: $r I^2 t \approx 13\,\mathrm{J}$.
:::

## Massimo trasferimento di potenza

La potenza sul carico è $P = R I^2 = \dfrac{\mathcal E^2 R}{(R + r)^2}$. Ponendo a zero la derivata rispetto a $R$ si trova il massimo:

$$R = r \qquad \Rightarrow \qquad P_{max} = \frac{\mathcal E^2}{4r}$$

dove $P_{max}$ = massima potenza sul carico (W).

Perché: con $R$ piccola passa tanta corrente ma quasi tutta la potenza si perde in $r$. Con $R$ grande passa poca corrente. Il compromesso migliore è $R = r$.

## Riscaldare con la corrente

Il calore prodotto in un tempo $t$ da una resistenza è $Q = R I^2 t$.

::: esempio
2 A in una resistenza da 10 Ω per 2 minuti: $Q = 10 \cdot 4 \cdot 120 = 4800\,\mathrm{J}$. Per scaldare di 1 °C un litro d'acqua servono 4180 J. Quindi **sì**, il calore basta.
:::

## Esempi di generatori

- **Pila di Volta**: elettrodi di rame e zinco in acido solforico. La f.e.m. nasce da energia chimica. Lo zinco diventa il polo negativo, il rame il positivo.
- **Cella fotovoltaica**: semiconduttore al silicio che converte la luce solare in f.e.m.

::: esame
Aperta tipica: definire la f.e.m. (lavoro per unità di carica del campo elettromotore, in volt; a circuito aperto uguale alla tensione ai morsetti) e disegnare il circuito equivalente: generatore ideale $\mathcal E$ in serie con $r$, collegato al carico $R$, con $V = \mathcal E - rI$ e $I = \mathcal E/(R + r)$.
:::

::: sintesi
- La f.e.m. è lavoro per unità di carica, non una forza: si misura in volt.
- Serve un campo non conservativo (elettromotore) per mantenere la corrente.
- Generatore reale = ideale in serie con $r$: $V = \mathcal E - rI$, $I = \mathcal E/(R + r)$.
- Bilancio: $\mathcal E I = RI^2 + rI^2$.
- Massima potenza al carico per $R = r$: $P_{max} = \mathcal E^2/4r$.
:::

=== 58 dispense
# Lezione 58 — Circuiti e leggi di Kirchhoff

## Il linguaggio delle reti

Un **circuito** è fatto di elementi (resistori, generatori) collegati da fili. I fili si considerano senza resistenza: tutti i punti di un filo hanno lo stesso potenziale.

- **Nodo**: punto dove si uniscono almeno tre conduttori.
- **Ramo**: tratto tra due nodi. Può contenere generatori (ramo attivo) o solo resistori (ramo passivo). In ogni ramo scorre una sola corrente.
- **Maglia**: percorso chiuso fatto di più rami.

## Prima legge: legge dei nodi

In regime stazionario la carica non si accumula in un nodo. Quindi quanta corrente entra, tanta ne esce. È la **conservazione della carica**.

$$\sum_k I_k = 0$$

dove $I_k$ = correnti del nodo (A), prese positive se entrano e negative se escono.

::: esempio
In un nodo entrano 3 A e 2 A. Escono due correnti, una da 4 A. L'altra vale $3 + 2 - 4 = 1\,\mathrm{A}$.
:::

## Seconda legge: legge delle maglie

Il campo elettrostatico è conservativo. Se fai un giro chiuso e torni al punto di partenza, torni allo stesso potenziale. Quindi lungo una maglia le f.e.m. bilanciano le cadute di tensione sui resistori.

$$\sum_k \mathcal E_k = \sum_k R_k\,I_k$$

dove:
- $\mathcal E_k$ = f.e.m. dei generatori della maglia (V)
- $R_k$ = resistenze dei rami della maglia (Ω)
- $I_k$ = corrente che scorre in ciascun ramo (A)

Regole di segno, dopo aver scelto un verso di percorrenza della maglia:
- una f.e.m. è **positiva** se la attraversi dal polo − al polo +;
- un termine $R I$ è **positivo** se la corrente del ramo ha il verso di percorrenza.

## Come si risolve una rete

Una rete ha $n$ nodi e $m$ rami. Le incognite sono le $m$ correnti di ramo.

1. Scegli a piacere un verso per ogni corrente.
2. Scrivi $n - 1$ equazioni ai nodi (l'ultima non è indipendente).
3. Scrivi $m - (n - 1)$ equazioni alle maglie. Ogni nuova maglia deve contenere almeno un ramo non ancora usato.
4. Risolvi il sistema lineare.
5. Se una corrente esce **negativa**, scorre nel verso opposto a quello scelto. Non è un errore.

::: esempio
Rete con 3 nodi e 5 rami: $3 - 1 = 2$ equazioni ai nodi e $5 - 3 + 1 = 3$ equazioni alle maglie. In totale 5 equazioni per 5 correnti.
:::

::: attenzione
Non scambiare le due leggi. Nodi = conservazione della **carica** (correnti). Maglie = conservazione dell'**energia**, cioè campo elettrostatico conservativo (tensioni).
:::

## Teorema di Thevenin

Una rete di resistori e generatori, vista da due suoi punti A e B, si comporta come **un solo generatore** con una resistenza interna.
- La f.e.m. equivalente è la tensione tra A e B a vuoto, cioè senza carico.
- La resistenza equivalente è quella misurata tra A e B dopo aver sostituito ogni generatore con la sua resistenza interna.

## Ponte di Wheatstone

Quattro resistori $R_1, R_2, R_3, R_4$ formano due rami affiancati, collegati al centro da un quinto resistore $R_0$. Nel resistore centrale non passa corrente se:

$$R_1 R_4 = R_2 R_3$$

In questo caso il ponte si dice **bilanciato**. Si usa per misurare una resistenza incognita.

## Strumenti di misura

Ogni strumento modifica un po' il circuito che misura.
- **Amperometro**: misura la corrente. Va **in serie**. Deve avere resistenza interna **molto piccola**, altrimenti riduce la corrente.
- **Voltmetro**: misura la tensione. Va **in parallelo**. Deve avere resistenza interna **molto grande**, altrimenti "ruba" corrente al tratto misurato.

::: esame
Nelle aperte chiedono di enunciare le due leggi di Kirchhoff. Per ciascuna: enunciato, formula, da quale principio deriva (carica per i nodi, campo conservativo per le maglie) e le convenzioni di segno.
:::

::: sintesi
- Nodo, ramo, maglia: gli elementi di una rete.
- Legge dei nodi: $\sum I = 0$, conservazione della carica.
- Legge delle maglie: $\sum \mathcal E = \sum RI$, dal campo elettrostatico conservativo.
- Con $n$ nodi e $m$ rami: $n - 1$ equazioni ai nodi e $m - n + 1$ alle maglie.
- Corrente negativa = verso reale opposto a quello scelto.
- Amperometro in serie (r piccola), voltmetro in parallelo (r grande).
:::

=== 59 dispense
# Lezione 59 — Circuito RC

## Il circuito

Un circuito RC ha un resistore $R$ e un condensatore $C$ in serie. Il condensatore non si carica di colpo: la resistenza limita la corrente. Carica e scarica seguono quindi un andamento **esponenziale**.

## Carica del condensatore

Il condensatore è scarico. Al tempo $t = 0$ lo colleghi, con $R$ in serie, a un generatore di f.e.m. $\mathcal E$. La legge delle maglie dà a ogni istante:

$$\mathcal E = R\,i + \frac{q}{C}$$

dove:
- $\mathcal E$ = f.e.m. del generatore (V)
- $R$ = resistenza (Ω)
- $i = dq/dt$ = corrente nel circuito (A)
- $q$ = carica sul condensatore (C)
- $C$ = capacità (F)

La soluzione è:

$$q(t) = C\mathcal E\left(1 - e^{-t/RC}\right) \qquad i(t) = \frac{\mathcal E}{R}\,e^{-t/RC}$$

dove $t$ = tempo dalla chiusura (s) e $C\mathcal E = q_{max}$ è la carica finale (C).

Come va:
- **All'inizio** il condensatore è scarico, non ha tensione. Si comporta come un **cortocircuito**: la corrente vale $\mathcal E/R$, come se ci fosse solo la resistenza.
- La carica cresce, la tensione $q/C$ sul condensatore sale e "frena" la corrente.
- **A regime** la tensione del condensatore uguaglia $\mathcal E$. La corrente è zero: il condensatore si comporta come un **circuito aperto**.

La tensione sul condensatore è $V_C = \mathcal E\,(1 - e^{-t/RC})$. Quella sul resistore è $V_R = \mathcal E\,e^{-t/RC}$.

## Costante di tempo

$$\tau = R\,C$$

dove $\tau$ = costante di tempo (s), $R$ in Ω, $C$ in F.

Misura quanto è veloce il processo. In teoria la carica non finisce mai, ma in pratica:
- dopo $\tau$: raggiunto $1 - e^{-1} \approx$ **63%** della carica finale;
- dopo $3\tau$: manca circa il 5%;
- dopo $5\tau$: manca meno dell'1%. La carica è praticamente completa.

**Perché RC è un tempo** (analisi dimensionale):
1. $R = V/I$, quindi $[\Omega] = \mathrm{V/A}$.
2. $C = Q/V$, quindi $[\mathrm F] = \mathrm{C/V}$.
3. $[\Omega \cdot \mathrm F] = \dfrac{\mathrm V}{\mathrm A} \cdot \dfrac{\mathrm C}{\mathrm V} = \dfrac{\mathrm C}{\mathrm A} = \dfrac{\mathrm{A \cdot s}}{\mathrm A} = \mathrm s$.

::: esempio
$R = 2\,\mathrm{k\Omega}$, $C = 5\,\mu\mathrm F$: $\tau = 2000 \cdot 5 \cdot 10^{-6} = 10^{-2}\,\mathrm s = 10\,\mathrm{ms}$.
:::

::: esempio
Pila da 12 V, $R = 1{,}4\,\mathrm{M\Omega}$, $C = 1{,}8\,\mu\mathrm F$. Quando la carica arriva a 16 μC?
1. $\tau = RC = 2{,}52\,\mathrm s$; $q_{max} = C\mathcal E = 21{,}6\,\mu\mathrm C$.
2. $e^{-t/\tau} = 1 - 16/21{,}6 \approx 0{,}259$.
3. $t = \tau \ln(1/0{,}259) = 2{,}52 \cdot \ln 3{,}86 \approx 3{,}4\,\mathrm s$.
:::

## Scarica del condensatore

Il condensatore ha carica $q_0$. Al tempo $t = 0$ lo chiudi su una resistenza $R$. Il condensatore fa da generatore e si svuota.

$$q(t) = q_0\,e^{-t/RC} \qquad i(t) = \frac{q_0}{RC}\,e^{-t/RC}$$

dove $q_0$ = carica iniziale (C), gli altri simboli come sopra. La costante di tempo è la stessa della carica.

La carica si **dimezza** in un tempo fisso:

$$t_{1/2} = RC\,\ln 2 \approx 0{,}693\,RC$$

dove $t_{1/2}$ = tempo di dimezzamento (s).

::: esempio
Un condensatore dimezza la carica in 20 ms scaricandosi su 40 Ω.
$C = \dfrac{t_{1/2}}{R \ln 2} = \dfrac{0{,}02}{40 \cdot 0{,}693} \approx 7{,}2 \cdot 10^{-4}\,\mathrm F = 0{,}72\,\mathrm{mF}$.
:::

## Bilancio energetico

**Carica.** Moltiplica la legge delle maglie per $i$: $\mathcal E i = R i^2 + \dfrac{q}{C}\,i$. La potenza del generatore va in parte nel resistore (Joule) e in parte nel condensatore. Integrando su tutta la carica:
- lavoro del generatore: $W = q_{max}\,\mathcal E = C\mathcal E^2$;
- energia nel condensatore: $U = \tfrac12 C\mathcal E^2$;
- calore nel resistore: $Q_J = \tfrac12 C\mathcal E^2$.

Il lavoro del generatore si divide **a metà**, qualunque sia $R$.

**Scarica.** All'inizio il condensatore contiene $U_0 = \dfrac{q_0^2}{2C} = \tfrac12 C V_0^2$. Alla fine non ha più energia. Tutta questa energia diventa calore nel resistore:

$$\int_0^\infty R\,i^2\,dt = \frac{q_0^2}{2C}$$

dove $V_0$ = tensione iniziale del condensatore (V). L'energia si conserva.

::: attenzione
Le leggi di Kirchhoff valgono per correnti costanti. Qui la corrente varia, ma lentamente rispetto al tempo che il segnale impiega a percorrere il circuito (nanosecondi per un metro). Si possono quindi usare istante per istante: è l'approssimazione **quasi stazionaria**.
:::

::: esame
Aperte frequenti: descrivere la carica (equazione della maglia, $q(t)$, $i(t)$, ruolo di τ), verificare che RC è un tempo, discutere il bilancio energetico della scarica (energia $\tfrac12 CV_0^2$ tutta dissipata in R).
:::

::: sintesi
- Carica: $q = C\mathcal E(1 - e^{-t/RC})$, $i = (\mathcal E/R)\,e^{-t/RC}$.
- Scarica: $q = q_0 e^{-t/RC}$; dimezzamento in $RC \ln 2$.
- $\tau = RC$ è in secondi; dopo τ si arriva al 63%, dopo 5τ si è a regime.
- All'inizio della carica C è un cortocircuito, a regime un circuito aperto.
- Carica: metà del lavoro del generatore va in C, metà in calore. Scarica: tutta l'energia di C va in calore.
:::

=== 60 dispense
# Lezione 60 — Magnetismo e campo magnetico

## Magneti e poli

Alcuni minerali di ferro, come la magnetite, attirano la limatura di ferro. Questi corpi si chiamano **magneti**. L'effetto è più forte in due zone, i **poli**: polo nord e polo sud.

- Poli **uguali** si respingono, poli **opposti** si attraggono.
- La forza cala con il quadrato della distanza tra i poli, come per le cariche.
- Un pezzo di ferro vicino a un magnete diventa a sua volta un magnete: si **magnetizza**.
- Un ago magnetico si orienta lungo le linee del campo, come un dipolo elettrico nel campo elettrico.

## Niente monopoli

Qui c'è la grande differenza con l'elettricità. Una carica elettrica può stare da sola. Un polo magnetico no. Se spezzi un magnete, ottieni due magneti completi, ciascuno con nord e sud. Puoi continuare a spezzare: in linea di principio ottieni **infiniti** magneti, sempre con due poli. Un sistema magnetico è sempre un **dipolo**.

## Linee del campo magnetico

Le linee di campo di una barretta magnetica somigliano a quelle di due cariche opposte ai suoi estremi. C'è però una differenza:
- fuori dal magnete **escono dal polo nord ed entrano nel polo sud**;
- dentro il magnete proseguono da sud a nord;
- sono quindi **linee chiuse**, senza inizio né fine.

Di conseguenza il flusso di $\vec B$ attraverso una superficie chiusa è sempre zero: quante linee entrano, tante ne escono.

$$\Phi_S(\vec B) = \oint_S \vec B \cdot d\vec S = 0$$

dove $\Phi_S(\vec B)$ = flusso magnetico attraverso la superficie chiusa $S$ (Wb, weber = T·m²).

## Campo magnetico e campo elettrostatico

| | Campo elettrostatico $\vec E$ | Campo magnetico $\vec B$ |
|---|---|---|
| Sorgenti | cariche, anche isolate | dipoli, correnti; niente monopoli |
| Linee | aperte: da + a − | chiuse |
| Flusso su superficie chiusa | $Q/\varepsilon_0$ | sempre 0 |
| Conservativo? | **sì**: circuitazione nulla | **no**: circuitazione proporzionale alle correnti concatenate |
| Agisce su | cariche ferme e in moto | solo cariche in moto |

La circuitazione di $\vec B$ lungo una linea chiusa non è zero se la linea gira attorno a una corrente: $\oint \vec B \cdot d\vec l = \mu_0 I$. Per questo il campo magnetico **non è conservativo**.

## Definizione di B e unità di misura

Il campo magnetico si definisce dalla forza su una carica in moto (forza di Lorentz): $F = q v B \sin\theta$. Quindi $B = F/(q v \sin\theta)$.

$$1\,\mathrm T = 1\,\frac{\mathrm N}{\mathrm{C \cdot m/s}} = 1\,\frac{\mathrm N}{\mathrm{A \cdot m}}$$

dove T = tesla, unità SI del campo magnetico (detto anche induzione magnetica).

I campi naturali sono molto più piccoli di 1 T. Si usa anche il **gauss**: $1\,\mathrm G = 10^{-4}\,\mathrm T$.

::: attenzione
Tesla e weber non sono la stessa cosa. Il **tesla** misura il campo $B$. Il **weber** ($\mathrm{T \cdot m^2}$) misura il **flusso** di $B$.
:::

## Il campo magnetico terrestre

La Terra si comporta come un grande magnete a barra. Vicino alla superficie il campo vale circa $0{,}4 \cdot 10^{-4}\,\mathrm T$. L'asse del dipolo è inclinato di circa 15° rispetto all'asse di rotazione.

Il polo nord della bussola punta verso il Nord geografico. Poli opposti si attraggono. Quindi vicino al **Nord geografico** c'è un **polo sud magnetico**, e viceversa. Non c'è nessuna eccezione alla regola "poli uguali si respingono".

::: esempio
L'ago di una bussola è un piccolo magnete. Il suo polo nord è attratto dal polo sud magnetico della Terra, che si trova vicino al Polo Nord geografico.
:::

::: sintesi
- Poli uguali si respingono, opposti si attraggono; ogni magnete ha sempre nord e sud.
- Non esistono monopoli: spezzando un magnete ottieni sempre nuovi dipoli, in principio infiniti.
- Linee di B chiuse: escono dal nord, entrano nel sud; flusso su superficie chiusa nullo.
- E elettrostatico conservativo, B non conservativo ($\oint \vec B \cdot d\vec l = \mu_0 I$).
- B si misura in tesla: $1\,\mathrm T = 1\,\mathrm{N/(A \cdot m)}$; 1 G = $10^{-4}$ T.
- Il Nord geografico è un polo sud magnetico.
:::

=== 61 dispense
# Lezione 61 — Forza di Lorentz e moto delle cariche nel campo magnetico

## La forza di Lorentz

Un campo magnetico agisce **solo su cariche in movimento**. Una carica ferma non sente nessuna forza magnetica.

$$\vec F = q\,\vec v \times \vec B \qquad F = |q|\,v\,B\,\sin\theta$$

dove:
- $\vec F$ = forza magnetica (N)
- $q$ = carica, con il suo segno (C)
- $\vec v$ = velocità della carica (m/s)
- $\vec B$ = campo magnetico (T)
- $\theta$ = angolo tra $\vec v$ e $\vec B$

Conseguenze:
- $\vec v$ **parallela** a $\vec B$ ($\theta = 0$): forza **nulla**.
- $\vec v$ **perpendicolare** a $\vec B$ ($\theta = 90°$): forza **massima**, $F = qvB$.
- La forza è sempre perpendicolare **sia** a $\vec v$ **sia** a $\vec B$. Invece $\vec v$ e $\vec B$ possono formare qualsiasi angolo.

**Verso** (regola della mano destra): dita lungo $\vec v$, piegale verso $\vec B$; il pollice indica $\vec F$ per una carica positiva. Per una carica negativa la forza è opposta.

::: esempio
- Protone a $5 \cdot 10^6\,\mathrm{m/s}$ parallelo a un campo di 1,5 T: $F = 0$.
- Protone a $5 \cdot 10^6\,\mathrm{m/s}$, forza massima $8 \cdot 10^{-14}\,\mathrm N$: $B = \dfrac{F}{qv} = \dfrac{8 \cdot 10^{-14}}{1{,}6 \cdot 10^{-19} \cdot 5 \cdot 10^6} = 0{,}10\,\mathrm T$.
- Stessa forza ma con angolo di 30°: $B = \dfrac{F}{qv \sin 30°} = 0{,}2\,\mathrm T$.
- $q_2 = 4q_1$ e $v_2 = 2v_1$, entrambe perpendicolari a B: $\dfrac{F_1}{F_2} = \dfrac{q_1 v_1}{8\,q_1 v_1} = \dfrac18$.
:::

## La forza magnetica non compie lavoro

La forza è sempre perpendicolare alla velocità, quindi allo spostamento:

$$dW = \vec F \cdot d\vec s = (q\,\vec v \times \vec B) \cdot \vec v\,dt = 0$$

Il campo magnetico **cambia la direzione** della velocità, ma **non il modulo**. L'energia cinetica resta costante. L'accelerazione è solo centripeta.

::: attenzione
Se una particella passa senza deviare, **non** puoi concludere che non c'è campo magnetico. Il campo potrebbe essere parallelo alla velocità.
:::

## Carica ferma o in moto: campo elettrico e campo magnetico

| | Carica ferma | Carica in moto |
|---|---|---|
| Campo elettrico | forza $q\vec E$: la carica parte, accelera lungo le linee di campo | forza $q\vec E$, cambia la velocità anche in modulo |
| Campo magnetico | nessuna forza: resta ferma | forza $q\vec v \times \vec B$: curva, modulo della velocità costante |

## Forza di Lorentz generalizzata

Se ci sono sia campo elettrico sia magnetico:

$$\vec F = q\left(\vec E + \vec v \times \vec B\right)$$

dove $\vec E$ = campo elettrico (V/m), gli altri simboli come sopra.

La parte elettrica può cambiare l'energia della carica. La parte magnetica la devia soltanto.

**Selettore di velocità.** $\vec E$ e $\vec B$ sono perpendicolari tra loro e alla velocità, con forze opposte. La carica prosegue dritta se le due forze si bilanciano: $qE = qvB$.

$$v = \frac{E}{B}$$

dove $v$ = velocità selezionata (m/s), $E$ in V/m, $B$ in T.

::: esempio
$E = 1{,}5\,\mathrm{kV/m}$, $B = 0{,}30\,\mathrm T$: $v = 1500/0{,}30 = 5000\,\mathrm{m/s}$. Il risultato non dipende dalla carica né dalla massa.
:::

## Energia di una carica nel campo elettrico

Il campo elettrostatico è conservativo. Quindi per una carica si conserva l'energia totale: cinetica più potenziale.

$$\tfrac12 m v_A^2 + q V_A = \tfrac12 m v_B^2 + q V_B$$

dove:
- $m$ = massa (kg)
- $v_A, v_B$ = velocità nei punti A e B (m/s)
- $V_A, V_B$ = potenziale elettrico in A e B (V)

Una carica positiva che "scende" di potenziale guadagna energia cinetica $q\,\Delta V$. Un elettrone accelerato da 1 V guadagna 1 eV = $1{,}6 \cdot 10^{-19}\,\mathrm J$.

## Moto circolare: velocità perpendicolare al campo

Campo uniforme e velocità perpendicolare a $\vec B$. La forza di Lorentz fa da forza centripeta e ha modulo costante. Il moto è **circolare uniforme**.

$$q v B = \frac{m v^2}{r} \quad\Rightarrow\quad r = \frac{m v}{q B}$$

dove:
- $r$ = raggio della traiettoria (m)
- $m$ = massa della particella (kg)
- $v$ = velocità (m/s)
- $q$ = carica (C)
- $B$ = campo magnetico (T)

Il periodo non dipende dalla velocità:

$$T = \frac{2\pi m}{q B} \qquad \omega = \frac{q B}{m}$$

dove $T$ = periodo (s), $\omega$ = velocità angolare (rad/s).

Una particella più veloce fa un cerchio più grande, ma nello stesso tempo.

::: esempio
$q/m = 2 \cdot 10^5\,\mathrm{C/kg}$, $B = 0{,}5\,\mathrm T$, $v = 10^6\,\mathrm{m/s}$: $r = \dfrac{v}{(q/m) B} = \dfrac{10^6}{2 \cdot 10^5 \cdot 0{,}5} = 10\,\mathrm m$.
:::

::: esempio
Protone e particella alfa ($m_\alpha = 4m_p$, $q_\alpha = 2q_p$) con la **stessa energia cinetica** $K$. Poiché $mv = \sqrt{2mK}$:
$$r = \frac{\sqrt{2mK}}{qB} \quad\Rightarrow\quad \frac{r_p}{r_\alpha} = \frac{\sqrt{m_p}/q_p}{\sqrt{4m_p}/(2q_p)} = 1$$
:::

::: esempio
Carica con $q/m = 1{,}27 \cdot 10^6\,\mathrm{C/kg}$ a 400 m/s su un cerchio di 10 cm dentro un solenoide con 0,25 A.
1. $B = \dfrac{v}{(q/m)\,r} = \dfrac{400}{1{,}27 \cdot 10^6 \cdot 0{,}1} \approx 3{,}15 \cdot 10^{-3}\,\mathrm T$.
2. Nel solenoide $B = \mu_0 n I$, quindi $n = \dfrac{B}{\mu_0 I} = \dfrac{3{,}15 \cdot 10^{-3}}{4\pi \cdot 10^{-7} \cdot 0{,}25} \approx 10^4$ spire/m $= 100$ spire/cm.

Qui $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T \cdot m/A}$ e $n$ = spire per metro.
:::

## Moto elicoidale: velocità con un angolo generico

La velocità forma un angolo $\theta$ con $\vec B$. Scomponila in due parti:
- $v_\parallel = v\cos\theta$, lungo il campo: la forza non la tocca, resta costante;
- $v_\perp = v\sin\theta$, perpendicolare al campo: produce un moto circolare.

Insieme danno un'**elica** avvolta attorno alle linee di campo.

$$r = \frac{m v \sin\theta}{q B} \qquad p = v_\parallel\,T = \frac{2\pi m v \cos\theta}{q B}$$

dove:
- $r$ = raggio dell'elica (m)
- $p$ = passo dell'elica, cioè avanzamento lungo $\vec B$ in un giro (m)
- $\theta$ = angolo tra velocità e campo

Casi limite: $\theta = 90°$ dà un cerchio; $\theta = 0$ dà una retta (nessuna forza).

## Spettrometro di massa

Serve a misurare la massa degli ioni.
1. Lo ione (carica $q$, massa $m$) è accelerato da una tensione $\Delta V$: $q\,\Delta V = \tfrac12 m v^2$, quindi $v = \sqrt{2q\Delta V/m}$.
2. Entra in un campo $B$ uniforme perpendicolare alla velocità e percorre mezza circonferenza di raggio $r = mv/(qB)$.
3. Colpisce uno schermo a distanza $2r$ dal punto di ingresso.
4. Unendo le due relazioni:

$$r = \frac{1}{B}\sqrt{\frac{2 m \Delta V}{q}} \qquad\Rightarrow\qquad m = \frac{q B^2 r^2}{2\,\Delta V}$$

dove $\Delta V$ = tensione di accelerazione (V), gli altri simboli come sopra.

A parità di carica, ioni più pesanti fanno un semicerchio più grande. Così si separano gli isotopi.

## Altre applicazioni

- **Bottiglia magnetica**: dove le linee di campo si infittiscono, le particelle vengono riflesse indietro e restano intrappolate. Il campo terrestre intrappola così particelle cariche nelle **fasce di Van Allen**. Quando sfuggono ai poli, colpiscono l'atmosfera e producono le **aurore**.
- Il tempo per fare mezzo giro, $T/2 = \pi m/(qB)$, non dipende dalla velocità né dall'energia cinetica.

::: esame
Aperte frequenti: descrivere la forza di Lorentz con esempi (selettore di velocità, spettrometro), il moto di una carica in campo uniforme (cerchio o elica, con $r$, $T$ e passo), cosa succede a una carica ferma in un campo elettrico e in uno magnetico, la conservazione dell'energia nel campo elettrico, il funzionamento dello spettrometro di massa.
:::

::: sintesi
- $\vec F = q\,\vec v \times \vec B$, $F = qvB\sin\theta$: nulla se $\vec v \parallel \vec B$, massima se perpendicolari.
- La forza è sempre perpendicolare alla velocità: non compie lavoro, il modulo di $v$ non cambia.
- Carica ferma: il campo magnetico non fa nulla; il campo elettrico la accelera.
- Velocità perpendicolare: cerchio con $r = mv/(qB)$ e $T = 2\pi m/(qB)$. Angolo generico: elica.
- Selettore di velocità $v = E/B$; spettrometro $m = qB^2r^2/(2\Delta V)$.
:::
