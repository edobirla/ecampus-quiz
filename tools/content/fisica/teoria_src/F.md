=== 34 dispense
SLIDES: 34, 35, 39, 41
# Lezione 34 — Temperatura, calore, calorimetria, passaggi di stato e trasmissione del calore

## Introduzione: dalla meccanica alla termodinamica
In meccanica abbiamo visto che l'energia meccanica si conserva quando agiscono solo forze conservative. Quando agiscono forze non conservative, come l'attrito, il loro lavoro è negativo e l'energia meccanica diminuisce. Nell'esperienza di tutti i giorni, però, quella diminuzione non è "sparita": insieme a essa si osserva un **fenomeno termico**. Strofinando le mani si scaldano; i freni di un'auto diventano bollenti; una pallottola che si ferma in un tronco lo scalda.

La **termodinamica** è la parte della fisica che studia i fenomeni termici, cioè come cambia lo **stato termico** di un sistema, e il loro legame con i fenomeni meccanici e con le altre forme di energia. Per descrivere lo stato termico servono delle grandezze misurabili, dette **parametri di stato** (o variabili termodinamiche). La più importante è la temperatura.

In questa lezione vediamo: la temperatura e come si misura (principio zero, scale), il legame tra temperatura e moto delle molecole, il calore e le sue unità, la calorimetria (capacità termica, calore specifico, temperatura di equilibrio), i passaggi di stato e il calore latente, la dilatazione termica, e i tre modi in cui il calore si trasmette (conduzione, convezione, irraggiamento).

## La temperatura
Fin da piccoli riconosciamo il "caldo" e il "freddo": è una delle sensazioni più comuni. La grandezza fisica che rende oggettiva questa sensazione è la **temperatura**, una delle sette grandezze fondamentali del Sistema Internazionale.

Per definire la temperatura in modo **operativo** (cioè dicendo come si misura) servono tre ingredienti:
1. il **principio zero della termodinamica**, che garantisce che la misura abbia senso;
2. una proprietà **non termica** di un corpo che cambia in modo regolare con lo stato termico (la lunghezza di una colonna di mercurio, il volume di un gas, la resistenza elettrica di un filo): questa proprietà permette di costruire un **termometro**;
3. dei **fenomeni termici ripetibili** che avvengono sempre nello stesso stato termico (per esempio il ghiaccio che fonde), da usare come punti fissi per **tarare** la scala.

### Equilibrio termico e principio zero
Si osserva sperimentalmente che due corpi in stati termici diversi, messi a contatto (o comunque in condizione di interagire termicamente), cambiano i loro parametri finché raggiungono uno **stato termico comune e stabile**: lo stato di **equilibrio termico**. A quel punto hanno la stessa temperatura e non cambiano più.

**Principio zero della termodinamica**: se due sistemi sono ciascuno in equilibrio termico con un terzo sistema, allora sono in equilibrio termico anche tra loro.

Sembra ovvio, ma è proprio ciò che rende possibile il termometro: il termometro è il "terzo sistema". Se, messo a contatto prima con un corpo e poi con un altro, segna lo stesso valore, allora i due corpi sono in equilibrio termico tra loro, cioè hanno la stessa temperatura. Il principio fu formulato esplicitamente solo nella prima metà del Novecento, quando il primo e il secondo principio erano già noti; siccome è logicamente più fondamentale, fu chiamato "zero".

**Definizione di equilibrio termico** (come la chiedono le domande): due corpi sono in equilibrio termico se, lasciati a contatto per un tempo sufficiente, raggiungono la stessa temperatura e non si scambiano più energia.

::: attenzione
La sensazione della mano non misura la temperatura. Un pavimento di marmo e un tappeto nella stessa stanza sono alla **stessa temperatura** (sono in equilibrio con l'aria). Il marmo sembra più freddo perché è un **buon conduttore**: dal piede (più caldo) passa più energia al marmo che al tappeto, e più in fretta. La pelle "sente" il flusso di energia che se ne va, non la temperatura del pavimento.
:::

### La scala Celsius
Alcuni fenomeni avvengono sempre nello stesso stato termico: i più usati sono i **passaggi di stato** dell'acqua. A livello del mare l'acqua bolle sempre alla stessa temperatura e il ghiaccio fonde sempre alla stessa temperatura. Per questo la scala Celsius usa due punti fissi:
- **0 °C**: temperatura di un recipiente con acqua e ghiaccio in equilibrio termico, a livello del mare (pressione di 1 atm);
- **100 °C**: temperatura dello stesso sistema portato all'ebollizione.

Il **grado Celsius** (°C) è la centesima parte di questo intervallo.

### La scala assoluta (kelvin)
Le temperature di fusione e di ebollizione dipendono dalla pressione (cioè dall'altitudine): in montagna l'acqua bolle sotto i 100 °C. Serve un riferimento più stabile. Il **punto triplo dell'acqua** (lo stato in cui ghiaccio, acqua liquida e vapore coesistono in equilibrio) avviene in condizioni fissate in modo univoco. Inoltre esiste una temperatura minima che nessun sistema può raggiungere, lo **zero assoluto**.

La **scala assoluta** (unità SI: il **kelvin**, simbolo K, senza il simbolo di grado) si costruisce così:
- **0 K** = zero assoluto;
- **273,16 K** = punto triplo dell'acqua.

Il kelvin è $1/273{,}16$ dell'intervallo tra questi due punti. La temperatura assoluta è **sempre positiva**.

La conversione tra le due scale è:

$$T(\mathrm K) = T(^\circ\mathrm C) + 273{,}15$$

dove:
- $T(\mathrm K)$ = temperatura assoluta, in kelvin
- $T(^\circ\mathrm C)$ = temperatura in gradi Celsius

Le due scale sono solo **spostate** l'una rispetto all'altra: un **salto** di 1 K è uguale a un salto di 1 °C. Per questo nelle formule con $\Delta T$ (differenza di temperatura) si può usare indifferentemente K o °C; nelle formule con $T$ da solo (gas, rendimenti, entropia) serve sempre il kelvin.

Valori da ricordare:
- ghiaccio che fonde a livello del mare: 0 °C = 273,15 K (le domande lo danno anche come 273,16 K, il valore del punto triplo: la differenza è di un centesimo di grado);
- acqua che bolle a livello del mare: 100 °C = 373,15 K;
- temperatura ambiente: 27 °C ≈ 300 K.

Nei paesi anglosassoni si usa la scala **Fahrenheit**: $T(^\circ\mathrm F) = \tfrac95\,T(^\circ\mathrm C) + 32$. Il ghiaccio fonde a 32 °F e l'acqua bolle a 212 °F.

::: esempio
**Una scala inventata.** Nella scala lineare X l'acqua congela a 125,0 °X e bolle a 375,0 °X. Nella scala lineare Y congela a −70,00 °Y e bolle a −30,00 °Y. A quanti °X corrispondono 50,00 °Y?

Due scale lineari sono legate da una retta: $T_X = m\,T_Y + c$. Imponiamo i due punti fissi:
- congelamento: $125 = m\cdot(-70) + c$;
- ebollizione: $375 = m\cdot(-30) + c$.

Sottraendo la prima dalla seconda: $250 = 40\,m$, quindi $m = 6{,}25$. Dalla prima: $c = 125 + 70\cdot 6{,}25 = 125 + 437{,}5 = 562{,}5$.

Per $T_Y = 50$: $T_X = 6{,}25\cdot 50 + 562{,}5 = 312{,}5 + 562{,}5 = 875\ ^\circ\mathrm X$.
:::

## Temperatura e moto delle molecole (teoria cinetica)
Che cosa "è" la temperatura a livello microscopico? La **teoria cinetica dei gas** risponde con un modello di gas perfetto basato su quattro ipotesi:
1. il gas è fatto di molecole uguali in **moto continuo e disordinato**: nessuna direzione è privilegiata e, in media, quante molecole vanno in un verso tante vanno nel verso opposto (la quantità di moto totale è nulla);
2. gli **urti** tra molecole e con le pareti sono **elastici**;
3. non ci sono forze tra le molecole tranne durante gli urti: l'unica energia delle molecole è **cinetica**;
4. le molecole sono piccolissime rispetto alla distanza tra loro: il loro volume è trascurabile.

### Da dove viene la pressione
Prendiamo un recipiente cubico di lato $l$ e una molecola di massa $m$ con componente $v_x$ della velocità lungo l'asse $x$.
1. Quando urta la parete di destra, l'urto è elastico: $v_x$ diventa $-v_x$, le altre componenti non cambiano. La variazione di quantità di moto della molecola è $-2mv_x$; per il terzo principio la parete riceve un impulso $+2mv_x$.
2. La molecola torna a colpire la stessa parete dopo aver percorso andata e ritorno, cioè $2l$ lungo $x$: l'intervallo tra due urti è $\Delta t = 2l/v_x$.
3. La forza media che quella molecola esercita sulla parete è impulso diviso tempo: $F_1 = \dfrac{2mv_x}{2l/v_x} = \dfrac{m v_x^2}{l}$.
4. Sommando su tutte le $N$ molecole: $F = \dfrac{m}{l}\sum v_x^2 = \dfrac{N m}{l}\,\overline{v_x^2}$, dove $\overline{v_x^2}$ è la media dei quadrati.
5. La pressione è forza diviso superficie $l^2$, e $l^3 = V$: $p = \dfrac{N m\,\overline{v_x^2}}{V}$.
6. Il moto è disordinato, quindi le tre direzioni sono equivalenti: $\overline{v^2} = \overline{v_x^2} + \overline{v_y^2} + \overline{v_z^2} = 3\,\overline{v_x^2}$. Sostituendo:

$$pV = \frac13 N m\,\overline{v^2} = \frac23 N\,\bar E_k$$

dove $\bar E_k = \tfrac12 m\overline{v^2}$ è l'energia cinetica media di una molecola.

### Il significato della temperatura
L'equazione di stato dei gas perfetti (lezione 35) dice $pV = nRT = N k_B T$, dove $k_B = R/N_A$. Confrontando le due espressioni di $pV$:

$$\frac23 N\bar E_k = N k_B T \quad\Rightarrow\quad \bar E_k = \frac32 k_B T$$

dove:
- $\bar E_k$ = energia cinetica media di **traslazione** di una molecola, in J
- $k_B = 1{,}38 \cdot 10^{-23}\,\mathrm{J/K}$ = costante di Boltzmann
- $T$ = temperatura assoluta, in K

Quindi **la temperatura assoluta è direttamente proporzionale all'energia cinetica media delle molecole**, per **qualunque gas**, monoatomico, biatomico o poliatomico (la formula riguarda il moto di traslazione, che tutte le molecole hanno). Più le molecole si agitano, più il gas è caldo. Se le molecole **rallentano**, la temperatura scende e con essa l'**energia interna** del gas.

Dalla stessa relazione si ricava la **velocità quadratica media**: $v_{qm} = \sqrt{\overline{v^2}} = \sqrt{3k_BT/m}$. Le molecole non hanno tutte la stessa velocità: si distribuiscono secondo la **distribuzione di Maxwell**, con la maggior parte delle molecole intorno a una velocità tipica che cala quando cala la temperatura.

::: esempio
**Energia cinetica delle molecole a 0 °C e a 100 °C.**
- A 0 °C ($T = 273{,}15$ K): $\bar E_k = \tfrac32 \cdot 1{,}38\cdot10^{-23} \cdot 273{,}15 \approx 5{,}65\cdot10^{-21}\,\mathrm J$.
- A 100 °C ($T = 373{,}15$ K): $\bar E_k = \tfrac32 \cdot 1{,}38\cdot10^{-23} \cdot 373{,}15 \approx 7{,}72\cdot10^{-21}\,\mathrm J$.

Per una **mole** si moltiplica per $N_A$, e $N_A k_B = R$: $E = \tfrac32 RT$.
- A 0 °C: $\tfrac32 \cdot 8{,}314 \cdot 273{,}15 \approx 3406\,\mathrm J$.
- A 100 °C: $\tfrac32 \cdot 8{,}314 \cdot 373{,}15 \approx 4654\,\mathrm J$.

Il rapporto tra i due valori è $373{,}15/273{,}15 \approx 1{,}37$: l'energia cresce come la temperatura **in kelvin**, non come quella in Celsius (che passerebbe da 0 a 100).
:::

## Il calore
Abbiamo visto che due corpi a temperature diverse, a contatto, raggiungono l'equilibrio. Allo stesso modo un sistema non isolato si porta alla temperatura dell'ambiente. "Qualcosa" passa da un corpo all'altro: questo qualcosa si chiama **calore**.

Il **calore** $Q$ è l'energia che passa da un sistema a un altro **a causa della differenza di temperatura**. Spontaneamente va sempre dal corpo più caldo a quello più freddo. È una grandezza **scalare**. Convenzione di segno: $Q > 0$ se il sistema lo **assorbe** (e di solito si scalda), $Q < 0$ se lo **cede**.

### Unità di misura
Storicamente il calore si misurava in **calorie** (cal): una caloria è la quantità di calore da togliere a 1 g d'acqua per portarla da 15,5 °C a 14,5 °C (o, equivalentemente, da dare per scaldarla di 1 °C in quell'intervallo). La **chilocaloria** (kcal, la "caloria" delle etichette alimentari) vale 1000 cal.

Joule mostrò che calore e lavoro sono due forme della stessa grandezza, l'energia (lezione 36). Oggi il calore si misura in **joule**, e:

$$1\,\mathrm{cal} = 4{,}186\,\mathrm J \qquad 1\,\mathrm{kcal} = 4186\,\mathrm J$$

### Calore e temperatura non sono la stessa cosa
- La **temperatura** è una proprietà dello **stato** di un corpo: dice quanto sono agitate in media le sue molecole. Si misura in K (o °C) con un termometro.
- Il **calore** è **energia in transito** tra due corpi a temperature diverse. Si misura in J. Un corpo **non contiene calore**: contiene **energia interna**; il calore esiste solo mentre passa.

Due esempi chiariscono la differenza. Una vasca d'acqua tiepida e una tazza d'acqua bollente: la tazza ha temperatura più alta, ma la vasca ha molta più energia interna e può cedere molto più calore. E durante un passaggio di stato si fornisce calore ma la temperatura non cambia (vedi sotto).

### Anche il lavoro scalda
La temperatura di un corpo si può alzare anche **senza calore**, compiendo lavoro: l'attrito trasforma energia meccanica in energia interna (strofinare un metallo, la pallottola nel tronco). Questo è il nocciolo del primo principio (lezione 36).

::: esempio
**Pallottola che attraversa un albero.** Una pallottola da 3,0 g entra a 400 m/s ed esce a 200 m/s. Quanta energia diventa calore?

L'energia cinetica persa è:
$$\Delta K = \tfrac12 m\,(v_i^2 - v_f^2) = \tfrac12 \cdot 0{,}003 \cdot (400^2 - 200^2) = 0{,}0015 \cdot (160\,000 - 40\,000) = 0{,}0015 \cdot 120\,000 = 180\,\mathrm J$$

Questi 180 J, dissipati dall'attrito, diventano energia interna di pallottola e legno: è il calore "prodotto" nell'urto. Attenzione a non calcolare $\tfrac12 m(v_i - v_f)^2$: si sottraggono i **quadrati** delle velocità.
:::

::: esempio
**Lavoro che scalda l'acqua.** 7700 J di lavoro vengono dati a 3,0 kg d'acqua a 10,0 °C (per esempio con delle palette). Che temperatura raggiunge?

Tutto il lavoro diventa energia interna dell'acqua, come se fosse calore: $Q = mc\Delta T$, quindi
$$\Delta T = \frac{Q}{mc} = \frac{7700}{3{,}0 \cdot 4186} = \frac{7700}{12\,558} \approx 0{,}61\,^\circ\mathrm C$$
La temperatura finale è $10{,}0 + 0{,}6 = 10{,}6\,^\circ\mathrm C$. L'acqua ha un calore specifico grande: servono molti joule per scaldarla poco.
:::

## Capacità termica e calore specifico
Si osserva che, per alzare la temperatura di un corpo solido o liquido di un certo $\Delta T$, serve un calore $Q$; per un salto doppio serve un calore doppio. Il calore è **proporzionale** alla variazione di temperatura. Il rapporto costante si chiama **capacità termica** $C$ del corpo:

$$Q = C\,\Delta T$$

Se poi si cambia la **massa** del corpo, a parità di $\Delta T$ il calore è proporzionale anche alla massa. Quindi la capacità termica è proporzionale alla massa: $C = c\,m$. La costante $c$, cioè la **capacità termica per unità di massa**, si chiama **calore specifico** e dipende **solo dalla sostanza** (non da quanta ce n'è).

$$Q = m\,c\,\Delta T \qquad C = m\,c$$

dove:
- $Q$ = calore assorbito (positivo) o ceduto (negativo), in J
- $m$ = massa, in kg
- $c$ = calore specifico, in $\mathrm{J/(kg\,K)}$ (o in cal/(g °C))
- $\Delta T = T_f - T_i$ = variazione di temperatura, in K (o in °C: è lo stesso)
- $C$ = capacità termica del corpo, in J/K

**Definizione** (come la chiedono le domande): il calore specifico di una sostanza è la quantità di calore necessaria per alzare di 1 K (o di 1 °C) la temperatura di 1 kg di quella sostanza. Un blocco di rame da 1 kg e uno da 5 kg hanno lo **stesso calore specifico**; hanno invece capacità termiche diverse (la seconda è 5 volte la prima).

| Sostanza | $c$ in J/(kg K) | $c$ in cal/(g °C) |
|---|---|---|
| acqua | 4186 | 1,00 |
| ghiaccio | 2220 | 0,53 |
| alluminio | 900 | 0,215 |
| ferro | 450 | 0,11 |
| rame | 385 | 0,092 |
| piombo | 128 | 0,031 |

L'acqua ha un calore specifico molto alto: per questo il mare si scalda e si raffredda lentamente e mitiga il clima delle coste.

Conseguenze dirette di $\Delta T = Q/(mc)$:
- a parità di calore e di sostanza, **massa doppia → aumento di temperatura dimezzato** (l'aumento è inversamente proporzionale alla massa);
- a parità di calore e di massa, la sostanza con **calore specifico maggiore si scalda meno**;
- se si dà lo stesso calore a corpi diversi che partono dalla stessa temperatura, finisce più freddo quello con capacità termica $mc$ maggiore.

::: esempio
**Calcoli diretti con $Q = mc\Delta T$.**
- Scaldare 2,5 kg d'acqua di 25 °C: $Q = 2{,}5 \cdot 4186 \cdot 25 = 261\,625\,\mathrm J \approx 261{,}6\,\mathrm{kJ}$.
- Scaldare 5 kg di piombo da 20 °C a 327 °C (temperatura di fusione): $\Delta T = 307\,\mathrm K$, $Q = 5 \cdot 128 \cdot 307 = 196\,480\,\mathrm J \approx 196{,}5\,\mathrm{kJ}$.
- Un riscaldatore fornisce 7200 kcal all'ora. Quanta acqua scalda da 14 °C a 50 °C in un'ora? Con $c = 1\,\mathrm{kcal/(kg\,^\circ C)}$: $m = \dfrac{Q}{c\Delta T} = \dfrac{7200}{1 \cdot 36} = 200\,\mathrm{kg}$. Lavorare in kcal evita le conversioni.
:::

::: esempio
**Stesso calore, masse diverse.** Il calore $Q_0$ alza di 1 K un blocco di rame da 5 kg. Lo stesso calore dato a 1 kg di rame: $\Delta T = Q_0/(mc)$ con massa 5 volte più piccola, quindi $\Delta T$ 5 volte più grande: **5 K**.

Allo stesso modo, se 10 kg di un materiale si scaldano di 10 gradi, 20 kg dello stesso materiale con lo stesso calore si scaldano di **5 gradi**.
:::

### Calore specifico che dipende dalla temperatura
In realtà $c$ può variare con la temperatura. Allora non si può usare $Q = mc\Delta T$ su tutto l'intervallo: si somma il calore di tanti piccoli salti, $\delta Q = m\,c(T)\,dT$, cioè si **integra**:

$$Q = m\int_{T_i}^{T_f} c(T)\,dT$$

::: esempio
Il calore specifico di una sostanza vale $c = 0{,}20 + 0{,}14\,T + 0{,}023\,T^2$ (con $T$ in °C e $c$ in cal/(g °C)). Quanto calore serve per portare 2,0 g da 5,0 °C a 15 °C?

$$Q = m\int_5^{15}(0{,}20 + 0{,}14T + 0{,}023T^2)\,dT = m\left[0{,}20\,T + 0{,}07\,T^2 + \frac{0{,}023}{3}T^3\right]_5^{15}$$

Calcolo i tre termini tra 5 e 15:
- $0{,}20 \cdot (15 - 5) = 2{,}0$
- $0{,}07 \cdot (225 - 25) = 14{,}0$
- $\tfrac{0{,}023}{3} \cdot (3375 - 125) = 0{,}00767 \cdot 3250 \approx 24{,}9$

Somma: $40{,}9\,\mathrm{cal/g}$. Moltiplico per la massa: $Q = 2{,}0 \cdot 40{,}9 \approx 82\,\mathrm{cal}$.
:::

## Calorimetria: la temperatura di equilibrio
Mettiamo a contatto due corpi a temperature $T_1 < T_2$, isolati dal resto del mondo (per esempio in un **calorimetro**, un recipiente isolato). Si scambiano energia sotto forma di calore finché raggiungono una temperatura comune $T_e$.
- Il corpo caldo **cede** calore e si raffredda: $Q_2 = m_2c_2(T_e - T_2) < 0$ perché $T_e < T_2$.
- Il corpo freddo **acquista** calore e si scalda: $Q_1 = m_1c_1(T_e - T_1) > 0$ perché $T_e > T_1$.
- Se non c'è dispersione, l'energia si conserva: il calore ceduto è uguale (in valore) a quello acquistato. Tenendo conto dei segni, **la somma dei calori è zero**.

$$m_1c_1(T_e - T_1) + m_2c_2(T_e - T_2) = 0$$

Risolvo per $T_e$: sviluppo i prodotti, $m_1c_1T_e - m_1c_1T_1 + m_2c_2T_e - m_2c_2T_2 = 0$; porto a destra i termini noti e raccolgo $T_e$:

$$T_e = \frac{m_1c_1T_1 + m_2c_2T_2}{m_1c_1 + m_2c_2}$$

dove:
- $T_e$ = temperatura di equilibrio
- $m_1, c_1, T_1$ e $m_2, c_2, T_2$ = massa, calore specifico e temperatura iniziale dei due corpi

È una **media pesata** delle temperature iniziali, con pesi uguali alle capacità termiche $m c$. Quindi $T_e$ è **sempre intermedia** tra le due temperature iniziali, ed è più vicina a quella del corpo con capacità termica maggiore. Se i due corpi sono della stessa sostanza ($c_1 = c_2$) il calore specifico si semplifica: $T_e = \dfrac{m_1T_1 + m_2T_2}{m_1 + m_2}$. Se hanno anche la stessa massa (o, in generale, la stessa capacità termica), $T_e$ è la **media semplice**.

Con più corpi (acqua, recipiente, pezzo di metallo) si scrive un termine $m_ic_i(T_e - T_i)$ per ciascuno e si impone che la somma sia zero.

**Cosa succede mettendo a contatto due corpi a temperature diverse** (domanda aperta): l'energia passa spontaneamente sotto forma di calore dal più caldo al più freddo; il caldo si raffredda, il freddo si scalda, finché raggiungono la stessa temperatura di equilibrio, intermedia tra le iniziali. Il motivo microscopico: nelle collisioni tra le molecole dei due corpi, quelle più agitate (del corpo caldo) cedono in media energia cinetica a quelle meno agitate. Il processo non si inverte mai da solo (secondo principio, lezione 39).

::: esempio
**Acqua con acqua.** 2 kg d'acqua a 80 °C vengono versati in un calorimetro con 1 kg d'acqua a 20 °C. Stessa sostanza, quindi
$$T_e = \frac{2 \cdot 80 + 1 \cdot 20}{2 + 1} = \frac{180}{3} = 60\,^\circ\mathrm C$$
Controllo: l'acqua calda cede $2 \cdot 4186 \cdot 20 = 167\,440$ J, quella fredda ne assorbe $1 \cdot 4186 \cdot 40 = 167\,440$ J. Tornano.

**Stessa capacità termica.** Due corpi con la stessa capacità termica a 15 °C e 25 °C arrivano alla media, 20 °C, cioè $20 + 273{,}15 \approx 293\,\mathrm K$.
:::

::: esempio
**Rame in acqua dentro un recipiente di alluminio.** 100 g di rame a 95 °C vengono gettati in 200 g d'acqua contenuti in un recipiente di alluminio da 280 g, entrambi a 15 °C ($c_{Cu} = 385$, $c_{Al} = 900\,\mathrm{J/(kg\,K)}$). Temperatura finale?

Capacità termiche:
- rame: $0{,}100 \cdot 385 = 38{,}5\,\mathrm{J/K}$
- acqua: $0{,}200 \cdot 4186 = 837{,}2\,\mathrm{J/K}$
- alluminio: $0{,}280 \cdot 900 = 252\,\mathrm{J/K}$

Bilancio (calore ceduto dal rame = calore assorbito da acqua e recipiente):
$$38{,}5\,(95 - T_e) = (837{,}2 + 252)(T_e - 15)$$
$$T_e = \frac{38{,}5 \cdot 95 + 1089{,}2 \cdot 15}{38{,}5 + 1089{,}2} = \frac{3657{,}5 + 16\,338}{1127{,}7} \approx 17{,}7\,^\circ\mathrm C$$
Il risultato è vicino a 15 °C perché acqua e alluminio hanno una capacità termica quasi 30 volte quella del rame. (Il paniere arrotonda a 17,5 °C.)
:::

::: esempio
**Misurare un calore specifico.** 1 kg di rame a 325 K viene immerso in 1 L d'acqua (1 kg, $c = 1\,\mathrm{cal/(g\,K)}$) a 290 K; l'equilibrio si raggiunge a 293 K. Calore specifico del rame?

L'acqua assorbe $Q = 1000\,\mathrm g \cdot 1 \cdot (293 - 290) = 3000\,\mathrm{cal}$. Il rame cede lo stesso calore: $c_{Cu}\cdot 1000 \cdot (325 - 293) = 3000$, quindi
$$c_{Cu} = \frac{3000}{1000 \cdot 32} \approx 0{,}094\,\mathrm{cal/(g\,K)} \approx 392\,\mathrm{J/(kg\,K)}$$
:::

::: esempio
**Metallo, contenitore e acqua.** Un contenitore di un certo metallo (3,6 kg) contiene 14 kg d'acqua a 16 °C. Si immerge 1,8 kg dello stesso metallo a 180 °C; la temperatura finale è 18 °C. Calore specifico del metallo ($c_{acqua} = 4190\,\mathrm{J/(kg\,K)}$)?

Il pezzo di metallo cede $c\cdot 1{,}8\cdot(180 - 18) = c \cdot 291{,}6$. Acqua e contenitore assorbono $4190 \cdot 14 \cdot 2 + c \cdot 3{,}6 \cdot 2 = 117\,320 + 7{,}2\,c$. Uguagliando:
$$291{,}6\,c = 117\,320 + 7{,}2\,c \;\Rightarrow\; c = \frac{117\,320}{284{,}4} \approx 412\,\mathrm{J/(kg\,K)}$$
:::

## Passaggi di stato e calore latente
Un **passaggio di stato** (o transizione di fase) è il cambiamento dello stato di aggregazione di una sostanza:
- **fusione** (solido → liquido) e **solidificazione** (liquido → solido);
- **evaporazione/ebollizione** (liquido → gas) e **condensazione** o liquefazione (gas → liquido);
- **sublimazione** (solido → gas) e **brinamento** (gas → solido).

Ogni passaggio avviene, a pressione fissata, a una **temperatura ben precisa** (per l'acqua a 1 atm: 0 °C la fusione, 100 °C l'ebollizione). Per questo i passaggi di stato servono a tarare i termometri.

### Il comportamento di calore e temperatura
Si mette una miscela di acqua e ghiaccio in equilibrio (quindi a 0 °C) a contatto con un ambiente più caldo. Si osserva che:
- la **temperatura non cambia**: resta a 0 °C;
- la **quantità di ghiaccio diminuisce**: il ghiaccio fonde e si aggiunge all'acqua;
- solo quando **tutto** il ghiaccio è fuso, il calore ricevuto fa finalmente salire la temperatura.

Durante un passaggio di stato, quindi, **si scambia calore ma la temperatura resta costante**. Il calore non aumenta l'agitazione delle molecole (cioè l'energia cinetica media, legata alla temperatura): serve a **indebolire e rompere i legami** che tengono unite le molecole nel solido (o nel liquido). Aumenta l'**energia potenziale** microscopica, quindi aumenta l'**energia interna**, ma non la temperatura. Al contrario, nella solidificazione e nella condensazione la sostanza **cede** calore senza raffreddarsi.

Il calore necessario è proporzionale alla massa che cambia stato:

$$Q = m\,\lambda$$

dove:
- $Q$ = calore per il passaggio di stato, in J
- $m$ = massa che cambia stato, in kg
- $\lambda$ = **calore latente** del passaggio (di fusione, di evaporazione...), in J/kg

**Definizione** (come la chiedono le domande): il calore latente è la quantità di calore, per unità di massa, che bisogna fornire a una sostanza (che si trova già alla temperatura del passaggio) per farle cambiare completamente stato, senza variazione di temperatura. Il **calore latente di fusione** è quello per passare da solido a liquido alla temperatura di fusione. Si chiama "latente" (nascosto) perché non si manifesta con un aumento di temperatura. Lo stesso calore viene **restituito** nel passaggio inverso.

Valori dell'acqua:
- fusione: $\lambda_f \approx 333\,\mathrm{kJ/kg} = 80\,\mathrm{kcal/kg} = 80\,\mathrm{cal/g}$;
- evaporazione: $\lambda_{ev} \approx 2260\,\mathrm{kJ/kg} = 539\,\mathrm{kcal/kg}$.

Il **calorimetro a ghiaccio** sfrutta proprio questo fenomeno: si misura il calore ceduto da un corpo pesando quanto ghiaccio ha fuso ($Q = m\lambda_f$).

::: esempio
**Calcoli diretti con $Q = m\lambda$.**
- Per fondere 1 kg di ghiaccio servono 80 kcal: quindi $\lambda_f = 80\,\mathrm{kcal/kg} = 80\,000\,\mathrm{cal}/1000\,\mathrm g = 80\,\mathrm{cal/g}$ (stessa grandezza, unità diverse).
- 1 kg di ghiaccio a 0 °C con $\lambda_f = 333{,}5\,\mathrm{kJ/kg}$: $Q = 1 \cdot 333\,500 = 333\,500\,\mathrm J$.
- Fondere 2,16 kg di piombo ($\lambda_f = 23{,}2\,\mathrm{kJ/kg}$): $Q = 2{,}16 \cdot 23{,}2 \approx 50\,\mathrm{kJ}$.
- Con 180 kcal e $\lambda_{ev} = 539\,\mathrm{kcal/kg}$ evaporano $m = 180/539 \approx 0{,}33\,\mathrm{kg}$ d'acqua, cioè circa 0,33 litri (1 kg d'acqua ≈ 1 L).
:::

::: esempio
**Togliere calore ad acqua a 0 °C.** Si sottraggono 50,4 kJ a 258 g d'acqua a 0 °C ($\lambda_f = 333\,\mathrm{kJ/kg}$). Quanta acqua resta liquida?

L'acqua è già a 0 °C: togliendo calore non si raffredda, **solidifica**. La massa che gela è
$$m = \frac{Q}{\lambda_f} = \frac{50{,}4}{333} \approx 0{,}151\,\mathrm{kg} = 151\,\mathrm g$$
Resta liquida $258 - 151 = 107\,\mathrm g$.
:::

### La curva di riscaldamento "a gradini"
Se si scalda progressivamente un pezzo di ghiaccio da −20 °C a +20 °C:
1. da −20 °C a 0 °C la temperatura **sale** (si scalda il ghiaccio, $Q = m\,c_{ghiaccio}\,\Delta T$);
2. a 0 °C la temperatura **resta ferma** finché tutto il ghiaccio è fuso ($Q = m\lambda_f$);
3. da 0 °C a 20 °C la temperatura **sale di nuovo** (si scalda l'acqua, $Q = m\,c_{acqua}\,\Delta T$).

La temperatura quindi **a tratti sale e a tratti resta costante**. Nei problemi con passaggi di stato si scrive un termine di calore per **ogni tratto**.

::: esempio
**Dall'etanolo gassoso all'etanolo solido.** Un campione di 0,510 kg di etanolo gassoso a 78,0 °C (temperatura di ebollizione) deve diventare solido a −114 °C (temperatura di congelamento). Dati: $\lambda_{ev} = 210\,\mathrm{cal/g}$, $\lambda_f = 26{,}0\,\mathrm{cal/g}$, $c = 0{,}580\,\mathrm{cal/(g\,K)}$. (Nella dispensa le unità sono scritte "cal/kg", ma i valori sono per grammo.) Quanto calore deve cedere?

Tre tratti, con $m = 510$ g:
1. condensazione a 78 °C: $Q_1 = m\lambda_{ev} = 510 \cdot 210 = 107\,100\,\mathrm{cal}$;
2. raffreddamento del liquido da 78 °C a −114 °C ($\Delta T = 192$ K): $Q_2 = mc\Delta T = 510 \cdot 0{,}580 \cdot 192 \approx 56\,794\,\mathrm{cal}$;
3. solidificazione a −114 °C: $Q_3 = m\lambda_f = 510 \cdot 26{,}0 = 13\,260\,\mathrm{cal}$.

Totale ceduto: $Q \approx 177\,000\,\mathrm{cal} \approx 1{,}77\cdot10^5 \cdot 4{,}186 \approx 742\,\mathrm{kJ}$.
:::

::: esempio
**Caffè e cubetto di ghiaccio.** In un thermos ci sono 130 g di caffè (trattato come acqua) a 80 °C. Si aggiunge un cubetto di ghiaccio di 12 g a −10 °C. Dati: $c_{acqua} = 4190$, $c_{ghiaccio} = 2220\,\mathrm{J/(kg\,K)}$, $\lambda_f = 333\,\mathrm{kJ/kg}$. Temperatura finale?

Il ghiaccio fa tre cose:
1. si scalda da −10 °C a 0 °C: $Q_1 = 0{,}012 \cdot 2220 \cdot 10 = 266{,}4\,\mathrm J$;
2. fonde a 0 °C: $Q_2 = 0{,}012 \cdot 333\,000 = 3996\,\mathrm J$;
3. l'acqua di fusione si scalda da 0 °C a $T_f$: $Q_3 = 0{,}012 \cdot 4190 \cdot (T_f - 0)$.

Il caffè si raffredda: $Q_4 = 0{,}130 \cdot 4190 \cdot (T_f - 80)$ (negativo).

Sistema isolato: $Q_1 + Q_2 + Q_3 + Q_4 = 0$. Raccolgo $T_f$:
$$T_f = \frac{0{,}130 \cdot 4190 \cdot 80 - Q_1 - Q_2}{(0{,}130 + 0{,}012)\cdot 4190} = \frac{43\,576 - 266{,}4 - 3996}{594{,}98} = \frac{39\,314}{594{,}98} \approx 66\,^\circ\mathrm C$$
Il caffè si è raffreddato di circa 14 °C.
:::

::: esempio
**Calore a una miscela di acqua e ghiaccio.** Si danno 10 kJ a 2 L d'acqua in equilibrio con 15 g di ghiaccio a 0 °C. Finché c'è ghiaccio la temperatura resta 0 °C: prima va fuso il ghiaccio, $Q_f = 0{,}015 \cdot 333\,000 \approx 5000\,\mathrm J$. Restano circa 5000 J per scaldare circa 2 kg d'acqua: $\Delta T = 5000/(2 \cdot 4186) \approx 0{,}6\,^\circ\mathrm C$. Se si trascura la fusione (tutti i 10 kJ all'acqua) si otterrebbe $10\,000/(2\cdot 4186) \approx 1{,}2\,^\circ\mathrm C$, che è il valore indicato dal paniere.
:::

### Il ghiaccio che raffredda l'acqua
Un cubetto di ghiaccio messo in un bicchiere d'acqua a temperatura ambiente raffredda l'acqua perché **per fondere deve assorbire il calore latente**, e lo prende dall'acqua, che cedendo energia si raffredda. Non c'è nessuna "somma delle temperature" che si conserva: si conserva l'**energia**.

Per lo stesso motivo **10 cm³ di ghiaccio a 0 °C raffreddano una bibita più di 10 cm³ d'acqua a 0 °C**. L'acqua a 0 °C può solo scaldarsi assorbendo $mc\Delta T$. Il ghiaccio prima deve fondere (10 cm³ di ghiaccio sono circa 9,2 g, che assorbono $9{,}2 \cdot 80 \approx 730$ cal senza nemmeno scaldarsi) e poi, come acqua a 0 °C, si scalda come l'altra.

## Grandezze intensive ed estensive
I parametri di stato si dividono in due famiglie.
- **Estensivi**: dipendono dalle dimensioni del sistema e sono **additivi** (unendo due sistemi si sommano): massa, volume, capacità termica, energia interna.
- **Intensivi**: descrivono proprietà **locali** e **non** sono additivi: pressione, temperatura, densità. In un sistema omogeneo in equilibrio hanno lo stesso valore in tutto il sistema e in ogni sua parte (unendo due bicchieri d'acqua a 20 °C non si ottiene acqua a 40 °C).

Dividendo una grandezza estensiva per la massa (o il volume, o il numero di moli) si ottiene una grandezza **specifica**, che è intensiva: la densità (massa/volume), il calore specifico (capacità termica/massa), le grandezze **molari** (per mole).

## Dilatazione termica
Il termometro a mercurio sfruttava una proprietà non termica che cambia con la temperatura: la **dilatazione termica**. Quasi tutti i corpi si **allungano** quando si scaldano e si **accorciano** quando si raffreddano, perché l'agitazione maggiore delle molecole aumenta la loro distanza media.

In una sbarretta sottile e lunga l'effetto si misura facilmente. Per variazioni di temperatura non enormi intorno alla temperatura ambiente la legge è lineare:

$$\Delta l = l_0\,\alpha\,\Delta T \qquad l = l_0(1 + \alpha\,\Delta T)$$

dove:
- $\Delta l$ = variazione di lunghezza, in m
- $l_0$ = lunghezza iniziale, in m
- $\alpha$ = coefficiente di dilatazione lineare, in $\mathrm K^{-1}$ (dimensioni: inverso di una temperatura; ferro $\approx 12\cdot10^{-6}\,\mathrm K^{-1}$, acciaio $11\cdot10^{-6}$, rame $17\cdot10^{-6}$)
- $\Delta T$ = variazione di temperatura, in K

La stessa legge vale per il volume di un solido:

$$\Delta V = V_0\,\beta\,\Delta T \qquad \beta = 3\alpha$$

**Perché $\beta = 3\alpha$**: un cubetto di lato $l_0$ diventa $l_0(1 + \alpha\Delta T)$ in ogni direzione, quindi $V = l_0^3(1 + \alpha\Delta T)^3 \approx l_0^3(1 + 3\alpha\Delta T)$, trascurando i termini con $(\alpha\Delta T)^2$ e $(\alpha\Delta T)^3$, piccolissimi. Allo stesso modo un'area si dilata con coefficiente $2\alpha$.

Osservazioni utili per le domande:
- **la variazione è piccola**: un filo di ferro che passa da 60 °C a 30 °C ha $\Delta T = -30\,\mathrm K$, quindi $\Delta l/l_0 = 12\cdot10^{-6}\cdot(-30) \approx -3{,}6\cdot10^{-4}$. Si accorcia di meno di un millesimo: **la lunghezza diminuisce**, non si dimezza. La temperatura in °C dimezza (da 60 a 30), ma la dilatazione dipende dalla **differenza** di temperatura, e in kelvin la temperatura passa da 333 a 303 K;
- in una **sbarra lunga** si dilatano tutte le dimensioni, ma la sezione è piccola: l'aumento di larghezza e spessore ($\alpha\,\Delta T$ volte una misura piccola) è trascurabile rispetto all'aumento di lunghezza;
- un **pendolo** con il filo metallico, scaldato, ha il filo più lungo; il periodo $T = 2\pi\sqrt{l/g}$ **aumenta** (l'orologio a pendolo d'estate rimane indietro).

::: esempio
**La moneta di rame.** Scaldando una moneta di rame di 100 °C il suo diametro aumenta dello 0,18%. Di quanto aumentano area della faccia, spessore, volume e massa? Quanto vale $\alpha$?

1. Area della faccia: $A \propto d^2$, quindi la variazione relativa è il doppio: $\Delta A/A = 2 \cdot 0{,}18\% = 0{,}36\%$.
2. Spessore: si dilata linearmente come il diametro: $0{,}18\%$.
3. Volume: coefficiente triplo: $3 \cdot 0{,}18\% = 0{,}54\%$.
4. Massa: non cambia (la materia è la stessa): $0\%$.
5. Coefficiente lineare: $\alpha = \dfrac{\Delta d/d}{\Delta T} = \dfrac{0{,}0018}{100} = 1{,}8\cdot10^{-5}\,\mathrm K^{-1}$.
:::

::: esempio
**Misurare con un righello che si dilata.** Un righello d'acciaio ($\alpha_u = 11\cdot10^{-6}\,{}^\circ\mathrm C^{-1}$) misura 20,05 cm per una bacchetta a 20,00 °C. Entrambi vengono portati a 270,0 °C e il righello legge 20,11 cm. Coefficiente di dilatazione della bacchetta?

Anche il righello si è allungato: ogni suo "centimetro" ora è lungo $u(1 + \alpha_u\Delta T)$, con $\Delta T = 250$ °C, cioè $u \cdot 1{,}00275$. La lunghezza vera della bacchetta calda è quindi
$$L' = 20{,}11 \cdot 1{,}00275\,u \approx 20{,}165\,u$$
La variazione vera è $\Delta L = 20{,}165 - 20{,}05 \approx 0{,}115$ cm, e
$$\alpha = \frac{\Delta L}{L\,\Delta T} = \frac{0{,}115}{20{,}05 \cdot 250} \approx 2{,}3\cdot10^{-5}\,{}^\circ\mathrm C^{-1}$$
Senza correggere il righello si sarebbe trovato $0{,}06/(20{,}05\cdot250) \approx 1{,}2\cdot10^{-5}$: un errore del 50%.
:::

## Trasmissione del calore
Il primo principio (lezione 36) mette in relazione calore e lavoro. Il lavoro di solito si vede (un pistone che si sposta); lo scambio di calore avviene invece a livello microscopico. Il calore si propaga in **tre modi**: conduzione, convezione e irraggiamento.

| Meccanismo | Come avviene | Dove prevale | Serve un mezzo? |
|---|---|---|---|
| Conduzione | l'agitazione molecolare passa dalle zone calde alle fredde, senza spostamento di materia | solidi, soprattutto metalli | sì (contatto) |
| Convezione | il fluido si sposta: correnti calde salgono, fredde scendono | liquidi e gas | sì (fluido) |
| Irraggiamento | emissione e assorbimento di onde elettromagnetiche | ovunque, anche nel vuoto | no |

### Conduzione: la legge di Fourier
Dentro un corpo con temperatura non uniforme, consideriamo le **superfici isoterme** (a temperatura costante). Attraverso un elemento $dS$ di una superficie isoterma, nel tempo $dt$, passa il calore:

$$dQ = -k\,\frac{dT}{dn}\,dS\,dt$$

dove:
- $k$ = **conducibilità termica** del materiale, in W/(m K): grande nei metalli, piccolissima nei fluidi e soprattutto nei gas
- $dT/dn$ = gradiente di temperatura lungo la normale alla superficie, in K/m
- il **segno meno** dice che il calore va dove la temperatura **diminuisce**, dal caldo al freddo

**Equazione del calore.** Prendo una parete piana con le facce a temperatura $T_1 > T_2$ e un suo strato sottile di spessore $dx$ e area $dS$. Dalla faccia a sinistra (in $x$) entra $dQ_1 = -k\,\frac{\partial T}{\partial x}\Big|_x dS\,dt$; dalla faccia a destra (in $x + dx$) esce $dQ_2 = -k\left(\frac{\partial T}{\partial x} + \frac{\partial^2 T}{\partial x^2}dx\right)dS\,dt$ (sviluppo di Taylor al primo ordine). Il calore che resta nello strato è $dQ_1 - dQ_2 = k\,\frac{\partial^2T}{\partial x^2}\,dx\,dS\,dt$, e scalda la massa $dm = \rho\,dx\,dS$ secondo $dQ = dm\,c\,dT$. Uguagliando e dividendo:

$$\frac{\partial T}{\partial t} = \frac{k}{\rho\,c}\,\frac{\partial^2 T}{\partial x^2}$$

È l'equazione di Fourier in una dimensione. Dice che una distribuzione di temperatura si mantiene a lungo in materiali con **densità e calore specifico grandi e conducibilità piccola**.

**Regime stazionario.** Se le temperature non cambiano più nel tempo, $\partial T/\partial t = 0$, quindi $\partial^2 T/\partial x^2 = 0$: dentro la parete la temperatura varia **linearmente** da $T_1$ a $T_2$. La potenza (calore al secondo) che attraversa una parete di area $S$ e spessore $l$ è uniforme:

$$W = \frac{dQ}{dt} = k\,S\,\frac{T_1 - T_2}{l} = K\,(T_1 - T_2) \qquad K = \frac{kS}{l}$$

dove $W$ è in watt, $S$ in m², $l$ in m, e $K$ (in W/K) è la **conduttanza** della parete. Due travi identiche affiancate tra le stesse sorgenti raddoppiano la sezione e quindi **raddoppiano** la potenza.

**Pareti di materiali diversi in serie.** Due strati di spessori $l_1, l_2$ e conducibilità $k_1, k_2$. A regime la stessa potenza attraversa entrambi. Detta $T_0$ la temperatura all'interfaccia:
$$W = \frac{k_1S}{l_1}(T_1 - T_0) = \frac{k_2S}{l_2}(T_0 - T_2)$$
Ricavo le due differenze di temperatura e le sommo: $T_1 - T_2 = W\left(\frac{l_1}{k_1S} + \frac{l_2}{k_2S}\right)$, quindi
$$W = \frac{S\,(T_1 - T_2)}{l_1/k_1 + l_2/k_2}$$
Si comporta come una sola parete con conduttanza equivalente $\dfrac{1}{K} = \dfrac{1}{K_1} + \dfrac{1}{K_2}$.

::: esempio
**Lo stagno ghiacciato.** Aria esterna a −5,0 °C, fondo dello stagno a 4,0 °C, profondità totale (ghiaccio + acqua) 1,4 m, $k_{acqua} = 0{,}5$ e $k_{ghiaccio} = 1{,}7\,\mathrm{W/(m\,K)}$. Spessore del ghiaccio a regime?

L'interfaccia ghiaccio/acqua è a 0 °C (temperatura di fusione). Detto $x$ lo spessore del ghiaccio, la stessa potenza per unità di area attraversa ghiaccio e acqua:
$$1{,}7\cdot\frac{0 - (-5)}{x} = 0{,}5\cdot\frac{4 - 0}{1{,}4 - x} \;\Rightarrow\; 8{,}5\,(1{,}4 - x) = 2\,x \;\Rightarrow\; 11{,}9 = 10{,}5\,x$$
$x \approx 1{,}13\,\mathrm m$ di ghiaccio, e circa 0,27 m d'acqua sotto.
:::

### Convezione
Nei fluidi la conducibilità è bassa, ma il calore si trasmette benissimo in un altro modo. Il fluido a contatto con una sorgente calda (per esempio scaldato **dal basso**, come l'acqua in una pentola) si scalda, si **dilata** e diventa meno denso. Il fluido più freddo intorno, più denso, gli dà una **spinta di Archimede** verso l'alto: il fluido caldo **sale** e quello freddo **scende** a prendere il suo posto. Si formano **correnti convettive**. Il calore si trasmette **con spostamento di materia**. È il meccanismo **prevalente nei fluidi scaldati dal basso** (pentola, termosifone che scalda l'aria della stanza, venti, correnti oceaniche).

Tra un solido e un gas che gli scorre sopra (un motore raffreddato da un flusso d'aria) la potenza scambiata è in prima approssimazione lineare:
$$W = h\,S\,(T_s - T_g)$$
dove $h$ è il coefficiente di scambio (W/(m² K), dipende da temperatura, geometria e tipo di gas), $S$ l'area, $T_s$ e $T_g$ le temperature del solido e del gas.

### Irraggiamento
Ogni corpo, per il solo fatto di avere una temperatura, **emette onde elettromagnetiche** (a temperatura ambiente soprattutto **infrarosse**), che trasportano **energia**. A differenza di conduzione e convezione, l'irraggiamento **non richiede contatto** e **non richiede un mezzo**: si propaga anche nel **vuoto** (è così che il calore del Sole arriva sulla Terra). La potenza emessa è data dalla legge di Stefan-Boltzmann:

$$W = \varepsilon\,\sigma\,S\,T^4$$

dove:
- $W$ = potenza emessa, in W
- $\varepsilon$ = emissività, tra 0 e 1, dipende dal materiale e dalla finitura della superficie
- $\sigma = 5{,}67\cdot10^{-8}\,\mathrm{W/(m^2K^4)}$ = costante di Stefan-Boltzmann
- $S$ = area della superficie esterna, in m²
- $T$ = temperatura assoluta della superficie, in K

Un corpo con $\varepsilon = 1$ è un **corpo nero** (un'idealizzazione); i corpi reali con $\varepsilon < 1$ sono **corpi grigi**. La dipendenza da $T^4$ è fortissima: raddoppiando la temperatura assoluta la potenza emessa diventa 16 volte più grande.

Un corpo a temperatura $T$ immerso in un ambiente a $T_a$ emette e insieme assorbe radiazione. Il bilancio netto, per un corpo completamente circondato dall'ambiente, è
$$W_{netta} = \varepsilon\,\sigma\,S\,(T_a^4 - T^4)$$
(positiva se il corpo assorbe più di quanto emette). Tra due superfici piane parallele e vicine di emissività $\varepsilon_1, \varepsilon_2$ si usa un **fattore di forma** $F = \dfrac{1}{1/\varepsilon_1 + 1/\varepsilon_2 - 1}$ al posto di $\varepsilon$.

**Esempi di irraggiamento diversi dal Sole** (domanda aperta): il calore che si sente sul viso davanti a un camino o a una stufa anche se l'aria in mezzo è fredda; le braci che scaldano la griglia; una lampadina a incandescenza che scalda la mano vicina senza toccarla; le lampade a infrarossi; il corpo umano che emette infrarossi (visibili con una termocamera); un ferro rovente che si vede "brillare".

::: esempio
**Corpo grigio.** Superficie 1 m², emissività 0,4, temperatura 300 K:
$$W = 0{,}4 \cdot 5{,}67\cdot10^{-8} \cdot 1 \cdot 300^4 = 0{,}4 \cdot 5{,}67\cdot10^{-8} \cdot 8{,}1\cdot10^{9} \approx 183{,}7\,\mathrm W$$
:::

::: esempio
**Sfera in un ambiente più caldo.** Sfera di raggio 0,500 m a 27,0 °C (300 K), emissività 0,850, in un ambiente a 77,0 °C (350 K). Area: $S = 4\pi r^2 = 4\pi\cdot0{,}25 \approx 3{,}14\,\mathrm{m^2}$; $\varepsilon\sigma S \approx 0{,}85\cdot5{,}67\cdot10^{-8}\cdot3{,}14 \approx 1{,}514\cdot10^{-7}\,\mathrm{W/K^4}$.
- potenza emessa: $1{,}514\cdot10^{-7}\cdot 300^4 = 1{,}514\cdot10^{-7}\cdot 8{,}1\cdot10^{9} \approx 1226\,\mathrm W$;
- potenza assorbita: $1{,}514\cdot10^{-7}\cdot 350^4 = 1{,}514\cdot10^{-7}\cdot 1{,}50\cdot10^{10} \approx 2272\,\mathrm W$;
- potenza netta assorbita: $2272 - 1226 \approx 1{,}05\,\mathrm{kW}$.
:::

::: esempio
**Radiatore di un satellite.** Radiatore di 1,0 m² con emissività 0,9; il dispositivo lavora a 45 K e irraggia verso lo spazio profondo, un corpo nero a 7,0 K. Potenza massima dissipabile:
$$W = 0{,}9\cdot5{,}67\cdot10^{-8}\cdot1{,}0\cdot(45^4 - 7^4) = 5{,}10\cdot10^{-8}\cdot(4\,100\,625 - 2401) \approx 0{,}21\,\mathrm W$$
A temperature così basse il $T^4$ rende la potenza irraggiabile minuscola.
:::

### Isolare un sistema: criostati e thermos
Lo scambio di calore cresce con la differenza di temperatura: per tenere un sistema molto più freddo dell'ambiente bisogna combattere **tutti e tre** i meccanismi. I **criostati** (e, in piccolo, i thermos e i frigoriferi) fanno così:
- contro la **conduzione**: materiali poco conduttori, in forma di tubi lunghi e sottili (rapporto $S/l$ piccolo, quindi conduttanza piccola); nel thermos, il vetro;
- contro la **convezione**: il **vuoto** nell'intercapedine tra le pareti, che toglie le molecole che trasporterebbero il calore;
- contro l'**irraggiamento**: superfici **a specchio**, molto riflettenti (riflettività e emissività sono complementari: una superficie che riflette molto emette poco).

Le coperte isotermiche alluminate usate nei soccorsi sfruttano lo stesso principio contro l'irraggiamento del corpo.

::: esame
Domande chiuse: proporzionalità tra temperatura assoluta ed energia cinetica media (diretta, per ogni gas); perché il ghiaccio raffredda l'acqua; dilatazione (il filo si accorcia, il pendolo rallenta, la sezione della sbarra si dilata in modo trascurabile); calcoli con $Q = mc\Delta T$, $Q = m\lambda$, energia cinetica che diventa calore, temperatura di equilibrio (anche con recipiente); curva a gradini; convezione nei fluidi scaldati dal basso; definizione di equilibrio termico.

Domande aperte e come rispondere:
- **Passaggio di stato**: cambiamento dello stato di aggregazione (elencare i sei passaggi), a temperatura fissa per una data pressione.
- **Calore e temperatura nei passaggi di stato**: si scambia calore ma la temperatura resta costante; il calore (latente, $Q = m\lambda$) rompe i legami e aumenta l'energia potenziale delle molecole, non quella cinetica.
- **Calore specifico** e **calore latente**: definizioni, formule, unità, esempio dell'acqua (4186 J/(kg K); 333 kJ/kg).
- **Calore e temperatura**: la temperatura è una proprietà di stato (agitazione media delle molecole, in K), il calore è energia in transito dovuta a una differenza di temperatura (in J).
- **Due corpi a contatto**: passaggio di calore dal caldo al freddo fino all'equilibrio, $T_e$ intermedia (formula), motivazione microscopica, irreversibilità.
- **Meccanismi di trasmissione**: conduzione (Fourier), convezione (correnti, spinta di Archimede), irraggiamento (onde e.m., anche nel vuoto, $\varepsilon\sigma ST^4$); esempio del thermos.
- **Irraggiamento diverso dal Sole**: camino, stufa, lampadina, corpo umano.
:::

::: sintesi
- Principio zero: due corpi in equilibrio con un terzo sono in equilibrio tra loro (base del termometro).
- $T(\mathrm K) = T(^\circ\mathrm C) + 273{,}15$; 1 K = 1 °C come salto; nei gas e nei rendimenti sempre kelvin.
- Teoria cinetica: $pV = \tfrac23 N\bar E_k$ e $\bar E_k = \tfrac32 k_BT$: temperatura proporzionale all'energia cinetica media.
- Calore: energia in transito per differenza di temperatura; 1 cal = 4,186 J.
- $Q = mc\Delta T$, $C = mc$; $c$ dipende solo dalla sostanza (acqua 4186 J/(kg K)).
- Equilibrio: $\sum m_ic_i(T_e - T_i) = 0$, $T_e$ media pesata, sempre intermedia.
- Passaggi di stato: $Q = m\lambda$ a temperatura costante (ghiaccio 333 kJ/kg = 80 cal/g; evaporazione acqua 539 kcal/kg).
- Dilatazione: $\Delta l = l_0\alpha\Delta T$, $\beta = 3\alpha$.
- Conduzione $W = kS\Delta T/l$; convezione $W = hS\Delta T$; irraggiamento $W = \varepsilon\sigma ST^4$ (anche nel vuoto).
:::

=== 35 dispense
SLIDES: 35, 36, 38
# Lezione 35 — Sistemi termodinamici, trasformazioni, lavoro e gas perfetti

## Introduzione
Nella lezione precedente abbiamo parlato di temperatura e calore. Ora costruiamo il "linguaggio" della termodinamica: che cos'è un sistema, quando è in equilibrio, come lo si descrive con poche variabili, che cos'è una trasformazione e come si calcola il lavoro che un gas compie espandendosi. Poi introduciamo il modello più usato, il **gas perfetto**, con la sua equazione di stato e le trasformazioni notevoli. Questi strumenti servono per enunciare il primo principio (lezione 36) e per studiare i gas (lezione 37) e le macchine termiche (lezioni 39 e 40).

## Sistemi termodinamici
Un sistema **macroscopico** è un sistema osservabile con i nostri sensi. È fatto di un numero enorme di costituenti microscopici (molecole), ma spesso non serve seguirli uno per uno: basta descrivere il sistema con poche grandezze **d'insieme**, come pressione, volume, densità e temperatura. Queste si chiamano **variabili termodinamiche** o **parametri di stato**. Un sistema descritto attraverso i suoi parametri di stato si chiama **sistema termodinamico**.

Un sistema termodinamico può essere una parte di un sistema più grande o l'unione di più sistemi. Tutto ciò con cui il sistema può interagire si chiama **ambiente**.

### Aperti, chiusi, isolati
| Sistema | Scambia materia? | Scambia energia? | Esempio |
|---|---|---|---|
| aperto | sì | sì | pentola senza coperchio che bolle |
| chiuso | no | sì | gas in un cilindro con pistone |
| isolato | no | no | thermos ideale; l'universo |

I sistemi con cui un sistema non isolato scambia energia si chiamano **sorgenti** (o serbatoi). Se le sorgenti non scambiano energia con nient'altro, il sistema insieme alle sue sorgenti forma un **sistema isolato**: questa idea tornerà nel secondo principio.

### Equilibrio termodinamico
Lo stato di un sistema è noto quando sono noti i valori dei suoi parametri di stato. Se i parametri sono costanti nel tempo, lo stato è **stazionario**. Un sistema chiuso è in **equilibrio termodinamico** quando è contemporaneamente in:
- **equilibrio meccanico**: le forze dell'ambiente sul sistema sono bilanciate da quelle del sistema sull'ambiente (per un gas: la pressione interna equilibra quella esterna);
- **equilibrio termico**: la temperatura è uniforme in tutto il sistema e uguale a quella dell'ambiente;
- **equilibrio chimico**: non avvengono reazioni che cambiano la composizione.

Un sistema lasciato isolato per un tempo sufficiente raggiunge l'equilibrio termodinamico. L'uniformità delle variabili si ottiene più facilmente se il sistema non è troppo esteso.

## La mole e l'equazione di stato dei gas perfetti
### La mole
Per i gas la quantità di sostanza si misura in **moli** (mol), una delle sette unità fondamentali SI. Una mole contiene tante unità elementari (molecole, atomi) quanti sono gli atomi in 12 g di carbonio-12, cioè il **numero di Avogadro**:
$$N_A = 6{,}022\cdot10^{23}\,\mathrm{mol^{-1}}$$
Un sistema con $N$ molecole contiene $n = N/N_A$ moli. La massa di una mole è il **peso molecolare espresso in grammi** (una mole di O₂, peso molecolare 32, ha massa 32 g), quindi $n = m/M$ con $m$ in grammi e $M$ in g/mol.

**Legge di Avogadro**: volumi uguali di gas diversi, alla stessa temperatura e pressione, contengono lo stesso numero di molecole. In particolare a 1 atm e 0 °C una mole di qualunque gas occupa il **volume molare** $V_m = 22{,}414\,\mathrm L = 0{,}022414\,\mathrm{m^3}$.

### L'equazione di stato
Lo stato di equilibrio di un gas (di massa fissata) è completamente descritto da pressione, volume e temperatura. Sperimentalmente questi tre parametri **non sono indipendenti**: sono legati da una relazione fissa, l'**equazione di stato**. I gas che la seguono si dicono **gas perfetti** (o ideali):

$$pV = nRT$$

dove:
- $p$ = pressione, in Pa ($1\,\mathrm{atm} = 1{,}013\cdot10^5\,\mathrm{Pa}$, $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$)
- $V$ = volume, in m³ ($1\,\mathrm L = 10^{-3}\,\mathrm{m^3}$)
- $n$ = numero di moli, in mol
- $R = 8{,}314\,\mathrm{J/(mol\,K)}$ = costante dei gas ($= 0{,}0821\,\mathrm{L\,atm/(mol\,K)}$)
- $T$ = temperatura assoluta, in K

In termini di numero di molecole: $pV = Nk_BT$, con $k_B = R/N_A$.

Un gas reale si avvicina al gas perfetto quando è **rarefatto** (bassa pressione, bassa densità): le molecole sono piccole rispetto alla distanza tra loro e non si attraggono. Ad alta pressione, o vicino alla condensazione, servono correzioni (equazione di van der Waals, lezione 37).

**Quante variabili sono indipendenti.** Per una quantità fissata di gas perfetto ($n$ costante), su tre variabili $p, V, T$ ce n'è un'equazione: **le variabili indipendenti sono al massimo due**. La terza si ricava. Per questo ogni stato di equilibrio si rappresenta come un **punto** in un piano a due variabili; il più usato è il piano $p$-$V$, detto **piano di Clapeyron**.

Per una quantità fissata di gas, $pV/T = nR$ è costante, quindi tra due stati:
$$\frac{p_1V_1}{T_1} = \frac{p_2V_2}{T_2}$$
Questa relazione permette di rispondere a molte domande senza conoscere $n$.

::: attenzione
Nelle formule dei gas la temperatura va **sempre in kelvin**. Da 27 °C a 127 °C la temperatura assoluta non quadruplica: passa da 300 K a 400 K, cioè aumenta di un fattore 4/3. Se si usassero i gradi Celsius si otterrebbe il fattore sbagliato 127/27.
:::

::: esempio
**Recipiente rigido scaldato.** Un gas perfetto in un recipiente a pareti rigide (volume costante) passa da 27 °C a 127 °C. Con $V$ costante, $p/T$ è costante:
$$\frac{p_2}{p_1} = \frac{T_2}{T_1} = \frac{400}{300} = \frac43$$
La pressione aumenta di un fattore 4/3.

**Pressione tripla e volume un terzo.** Se dopo una trasformazione la pressione è tripla e il volume un terzo, il prodotto $pV$ è invariato, quindi $T = pV/(nR)$ è invariata: la temperatura finale è uguale a quella iniziale.
:::

## Trasformazioni termodinamiche
Una **trasformazione** è il passaggio del sistema da uno stato a un altro, cioè la variazione nel tempo dei suoi parametri di stato. La termodinamica degli stati di equilibrio studia trasformazioni tra uno stato iniziale e uno finale **di equilibrio**. Siccome un sistema in equilibrio isolato resta nel suo stato, le trasformazioni sono sempre provocate da **scambi di calore o di lavoro** con l'ambiente.

Di solito si descrive una trasformazione solo con lo stato iniziale e quello finale, trascurando i complicati stati intermedi. Si distinguono:
- **Quasi statica**: il sistema passa dallo stato iniziale a quello finale attraverso una fitta successione di **stati di equilibrio** vicinissimi tra loro. È un caso limite ideale (la trasformazione è lentissima). Solo una trasformazione quasi statica si può disegnare come una **curva** nel piano $p$-$V$, perché in ogni istante $p$, $V$, $T$ sono definiti.
- **Reversibile**: si possono ripercorrere **a ritroso** tutti i passaggi e tornare **esattamente** allo stato iniziale, sia del sistema sia dell'ambiente, senza lasciare tracce. Per esserlo deve essere quasi statica e **senza attriti** o altri effetti dissipativi. È un'idealizzazione.
- **Irreversibile**: non è una successione di stati di equilibrio, oppure coinvolge forze non conservative (attriti) che dissipano energia. **Tutte le trasformazioni reali** sono più o meno irreversibili.
- **Ciclica**: lo stato finale **coincide** con quello iniziale.

### Trasformazioni spontanee
Un sistema lontano dall'equilibrio, se viene isolato, si porta **spontaneamente** all'equilibrio. Esempi:
- una sbarretta metallica tenuta con gli estremi a due temperature diverse ha un profilo di temperatura non uniforme; se la si isola, la temperatura si uniforma;
- **espansione libera**: un gas in equilibrio occupa metà di un recipiente isolato, l'altra metà è vuota. Si toglie il setto: il gas riempie tutto il volume **senza scambiare calore né lavoro** e raggiunge un nuovo equilibrio. Stato iniziale e finale sono di equilibrio, ma quelli intermedi no (il gas si precipita turbolento nel vuoto): la trasformazione **non è reversibile** e **non si può disegnare** come curva nel piano $p$-$V$.

## Il lavoro di un gas
Consideriamo un gas in un cilindro chiuso da un pistone di area $S$. Il gas spinge il pistone con la forza $F = pS$. Se il pistone sale di un tratto piccolo $dh$ (trasformazione quasi statica), il gas compie il lavoro:

$$\delta L = F\,dh = p\,S\,dh = p\,dV$$

perché $S\,dh$ è proprio l'aumento di volume $dV$. La relazione vale qualunque sia la forma della superficie su cui il gas preme. Per una trasformazione finita da $V_i$ a $V_f$, sommando tutti i piccoli lavori:

$$L = \int_{V_i}^{V_f} p\,dV$$

dove:
- $L$ = lavoro compiuto dal gas, in J
- $p$ = pressione del gas (uguale a quella esterna, in ogni istante, perché la trasformazione è quasi statica), in Pa
- $dV$ = piccola variazione di volume, in m³

**Convenzione di segno**: $L > 0$ se il gas si **espande** ($dV > 0$): il gas compie lavoro sull'ambiente. $L < 0$ se il gas viene **compresso**: è l'ambiente che compie lavoro sul gas.

### Il lavoro come area nel piano $p$-$V$
L'integrale $\int p\,dV$ è, graficamente, l'**area compresa tra la curva della trasformazione e l'asse dei volumi**. Due trasformazioni diverse che collegano gli stessi stati A e B hanno in generale aree diverse sotto la curva: **il lavoro dipende dal percorso**, non solo dagli stati iniziale e finale. Per questo il piccolo lavoro si scrive $\delta L$ e non $dL$: non è il differenziale di una funzione di stato (in linguaggio matematico, non è un differenziale esatto).

In una **trasformazione ciclica** la curva è chiusa. Il lavoro totale è l'**area racchiusa** dalla curva:
- se il ciclo è percorso in **senso orario**, l'espansione avviene (in media) a pressione più alta della compressione: il lavoro netto è **positivo** (il gas produce lavoro, come in un motore);
- in **senso antiorario** il lavoro netto è negativo (il gas riceve lavoro, come in un frigorifero).

Quindi in un ciclo **il lavoro non è nullo** (tranne il caso banale di area zero), anche se il gas torna allo stato iniziale.

### Le trasformazioni notevoli nel piano $p$-$V$
- **Isocora** (volume costante $V_0$): segmento **verticale**. Il volume non cambia, $dV = 0$: **lavoro nullo**.
- **Isobara** (pressione costante $p_0$): segmento **orizzontale** da $V_1$ a $V_2$. Il lavoro è un rettangolo: $L = p_0\,(V_2 - V_1) = p_0\,\Delta V$.
- **Isoterma** (temperatura costante): la forma dipende dal sistema; per un gas perfetto $pV = $ costante, cioè un **ramo di iperbole**. Il lavoro (lezione 37) è $L = nRT\ln(V_f/V_i)$.
- **Adiabatica** (nessuno scambio di calore): per un gas perfetto $pV^\gamma = $ costante, una curva **più ripida** dell'isoterma.

::: esempio
**Riempire un cilindro dalla bombola.** Una bombola con 100 L di gas a 20 atm è collegata, tramite una valvola, a un cilindro di 2 L con il pistone appoggiato sul fondo. Si fa fluire lentamente il gas finché il pistone arriva in cima. Lavoro scambiato?

Il gas solleva il pistone contro la **pressione atmosferica** esterna, aumentando il volume del cilindro di 2 L a pressione esterna costante:
$$L = p_{atm}\,\Delta V = 1{,}013\cdot10^5 \cdot 2\cdot10^{-3} \approx 203\,\mathrm J$$
:::

::: esempio
**Gas raffreddato a pressione atmosferica.** Un gas in un cilindro con pistone, a pressione atmosferica, occupa 10 L; raffreddandolo il pistone scende fino a 8 L. È un'isobara con $\Delta V = -2\,\mathrm L$:
$$L = p\,\Delta V = 1{,}013\cdot10^5 \cdot(-2\cdot10^{-3}) \approx -203\,\mathrm J$$
Il segno meno dice che è l'atmosfera a compiere lavoro sul gas.
:::

::: esempio
**Palloncino con pressione che cresce con il volume.** Un gas in un palloncino, scaldato lentamente, si espande con la pressione che segue la legge $p = A\,V/B$, con $A = 1{,}5$ atm e $B = V_0 = 20$ L. Lavoro quando il volume raddoppia?
$$L = \int_{V_0}^{2V_0}\frac{A}{B}V\,dV = \frac{A}{B}\left[\frac{V^2}{2}\right]_{V_0}^{2V_0} = \frac{A}{B}\cdot\frac{4V_0^2 - V_0^2}{2} = \frac{A}{V_0}\cdot\frac{3V_0^2}{2} = \frac32 A V_0$$
$$L = 1{,}5 \cdot 1{,}5\,\mathrm{atm}\cdot 20\,\mathrm L = 45\,\mathrm{L\,atm} = 45 \cdot 101{,}3\,\mathrm J \approx 4{,}56\,\mathrm{kJ}$$
(1 L atm = $10^{-3}\,\mathrm{m^3}\cdot1{,}013\cdot10^5\,\mathrm{Pa} = 101{,}3$ J.)
:::

::: esempio
**Quando il palloncino compie lavoro positivo.** Un gas chiuso in un palloncino compie lavoro **positivo** sull'ambiente quando il palloncino **si espande**, per esempio perché il gas si scalda e aumenta di volume spingendo via l'aria. Se il palloncino si sgonfia raffreddandosi, il lavoro del gas è negativo. Il palloncino che sale o scende per la spinta di Archimede, senza cambiare volume, non fa lavoro di espansione.
:::

## Energia interna del gas perfetto
L'**energia interna** $U$ di un sistema è la somma delle energie microscopiche delle sue molecole (cinetiche e potenziali di interazione). In un gas perfetto le molecole non interagiscono, quindi c'è solo energia cinetica, che dipende solo dalla temperatura (teoria cinetica): **l'energia interna di un gas perfetto dipende solo dalla temperatura**. Joule lo verificò con l'espansione libera (lezione 37). Si ha:

$$\Delta U = n\,C_V\,\Delta T$$

dove:
- $\Delta U$ = variazione di energia interna, in J
- $n$ = moli
- $C_V$ = calore molare a volume costante: $\tfrac32R$ per gas monoatomici, $\tfrac52R$ per biatomici, in $\mathrm{J/(mol\,K)}$
- $\Delta T$ = variazione di temperatura, in K

Questa formula vale per **qualsiasi** trasformazione del gas perfetto, perché $U$ dipende solo da $T$. Conseguenze:
- se l'energia interna di un gas perfetto aumenta, la temperatura **aumenta in ogni caso** (e viceversa);
- in un'**isoterma** $\Delta U = 0$, sia in espansione sia in compressione;
- se tra stato iniziale e finale il prodotto $pV$ non cambia (per esempio volume doppio e pressione dimezzata), la temperatura finale è uguale a quella iniziale e quindi $\Delta U = 0$, qualunque sia il percorso seguito.

::: esempio
**Espansione senza scambio di calore in un motore.** In un motore a scoppio 0,25 mol di gas biatomico si espandono contro il pistone senza scambiare calore; la temperatura scende da 1150 K a 400 K. Lavoro compiuto?

Nessuno scambio di calore: è un'**adiabatica**, $Q = 0$. Il primo principio (lezione 36) $\Delta U = Q - L$ dà $L = -\Delta U$: il gas compie lavoro spendendo la propria energia interna.
$$\Delta U = nC_V\Delta T = 0{,}25 \cdot \tfrac52 \cdot 8{,}314 \cdot (400 - 1150) = 0{,}25 \cdot 20{,}785 \cdot (-750) \approx -3897\,\mathrm J$$
$$L = -\Delta U \approx 3{,}9\,\mathrm{kJ}$$
(Il paniere arrotonda a 3,8 kJ.) Con $C_V = \tfrac32R$, sbagliando il tipo di gas, si otterrebbe 2,3 kJ.
:::

## Riepilogo delle trasformazioni notevoli
| Trasformazione | Cosa resta costante | Legge (gas perfetto) | Lavoro del gas | Nel piano $p$-$V$ |
|---|---|---|---|---|
| Isocora | volume $V$ | $p/T$ = costante | $L = 0$ | segmento verticale |
| Isobara | pressione $p$ | $V/T$ = costante | $L = p\,\Delta V$ | segmento orizzontale |
| Isoterma | temperatura $T$ | $pV$ = costante (legge di Boyle) | $L = nRT\ln(V_f/V_i)$ | ramo di iperbole |
| Adiabatica | nessuno scambio di calore ($Q = 0$) | $pV^\gamma$ = costante | $L = -\Delta U$ | curva più ripida dell'isoterma |

- **Isocora**: in un recipiente rigido scaldato la pressione cresce in proporzione alla temperatura assoluta.
- **Isobara**: il volume cresce in proporzione alla temperatura assoluta.
- **Isoterma**: $pV$ costante, quindi se il volume **raddoppia** la pressione **dimezza**. Comprimendo un gas in modo isotermo la sua **energia interna resta costante**.
- **Adiabatica**: la definizione corretta è che **il sistema non scambia calore** con l'esterno: la sua energia non può variare tramite calore, ma può variare tramite lavoro. Non vuol dire che la temperatura resti costante (anzi, cambia).

## Cicli
In una trasformazione ciclica il sistema torna allo stato iniziale, quindi **tutte le funzioni di stato** tornano al valore iniziale: temperatura, pressione, volume, energia interna, entropia. In particolare $\Delta U = 0$ e $T_{finale} = T_{iniziale}$.

Il **lavoro invece non è nullo**: è l'area racchiusa dal ciclo. Per il primo principio $\Delta U = Q - L = 0$, quindi il **calore netto assorbito è uguale al lavoro netto compiuto**: $Q = L$. Detto in altro modo, calore assorbito e lavoro **ricevuto** dal sistema hanno somma nulla.

::: attenzione
L'affermazione "in un ciclo il lavoro è sempre nullo" è **falsa**: si confonde "variazione nulla delle funzioni di stato" con "lavoro nullo". Il lavoro non è una funzione di stato; in un ciclo è proprio ciò che una macchina termica produce.
:::

## Cenni che anticipano le lezioni successive
Alcune domande di questa lezione toccano argomenti sviluppati più avanti:
- l'**irraggiamento** trasporta **energia** tramite onde elettromagnetiche (lezione 34), non materia;
- un ciclo reversibile di **due isoterme e due adiabatiche** è un **ciclo di Carnot** (lezione 40); il suo rendimento è $\eta = 1 - T_F/T_C$ con le temperature in kelvin;
- l'**entropia** totale di sistema + ambiente non può diminuire (lezione 39).

::: esempio
**Rendimento di un ciclo di due adiabatiche e due isoterme** a 15 °C e 200 °C. Converto in kelvin: $T_F = 288{,}15$ K, $T_C = 473{,}15$ K.
$$\eta = 1 - \frac{288{,}15}{473{,}15} = 1 - 0{,}609 \approx 0{,}39$$
:::

::: esempio
**Entropia del sistema e dell'ambiente.** In una trasformazione l'entropia del sistema cambia di −8 J/K. Sistema + ambiente formano un sistema isolato, la cui entropia non può diminuire: $\Delta S_{sist} + \Delta S_{amb} \ge 0$, quindi $\Delta S_{amb} \ge +8\,\mathrm{J/K}$. L'ambiente aumenta la sua entropia di **8 J/K o più** (esattamente 8 se la trasformazione è reversibile).
:::

::: esame
Domande chiuse: quale affermazione sui cicli è falsa (il lavoro in un ciclo non è nullo); lavoro di un'espansione adiabatica ($L = -nC_V\Delta T$, attenzione a biatomico/monoatomico); isoterma con volume doppio (pressione metà); compressione isoterma ($\Delta U = 0$); energia interna e temperatura del gas perfetto (crescono insieme); recipiente rigido scaldato (fattore $T_2/T_1$ in kelvin); definizione di adiabatica (nessuno scambio di calore); volume doppio e pressione metà ($\Delta U = 0$); numero di variabili indipendenti (due); quando il palloncino compie lavoro positivo; rendimento di Carnot; entropia dell'ambiente; irraggiamento.
:::

::: sintesi
- Sistema aperto (materia + energia), chiuso (solo energia), isolato (niente). Equilibrio termodinamico = meccanico + termico + chimico.
- Mole: $N_A = 6{,}022\cdot10^{23}$; $n = m/M$; volume molare 22,4 L a 0 °C e 1 atm.
- $pV = nRT$ con $T$ in kelvin; per $n$ fissato le variabili indipendenti sono due; $p_1V_1/T_1 = p_2V_2/T_2$.
- Trasformazioni: quasi statiche (curve), reversibili (ideali), irreversibili (reali), cicliche; espansione libera irreversibile.
- $L = \int p\,dV$ = area sotto la curva; positivo in espansione; dipende dal percorso. Ciclo: area racchiusa, positivo se orario.
- Isocora $L = 0$; isobara $L = p\Delta V$; isoterma $pV$ costante, $\Delta U = 0$; adiabatica $Q = 0$.
- Gas perfetto: $\Delta U = nC_V\Delta T$ in ogni trasformazione; in un ciclo $\Delta U = 0$ e $Q = L$.
:::

=== 36 dispense
SLIDES: 37
# Lezione 36 — Primo principio della termodinamica

## Introduzione
Il primo principio nasce da un'osservazione: esiste un rapporto fisso tra il calore scambiato da un sistema e il lavoro che il sistema compie o subisce. Da qui si arriva a definire una nuova funzione di stato, l'**energia interna**, e si estende il **principio di conservazione dell'energia** oltre la meccanica, a tutti i fenomeni termici. In meccanica l'energia "persa" per attrito sembrava sparire; con il primo principio scopriamo dove va a finire.

## L'equivalente meccanico della caloria
Prendiamo un sistema in equilibrio termico e isolato termicamente (non può scambiare calore). Se compiamo un lavoro su di esso, si porta in un nuovo stato di equilibrio con una temperatura diversa. Per esempio, strofinando un metallo (lavoro della forza d'attrito) la sua temperatura sale. Lavoro meccanico e calore devono quindi essere legati.

A metà Ottocento **Joule** fece una famosa serie di esperimenti. Nel più noto, un **peso che cade** fa girare delle **palette** immerse in un recipiente d'acqua isolato termicamente. L'attrito delle palette con l'acqua scalda l'acqua.
- Il **lavoro** fatto sull'acqua si misura dalla diminuzione di energia potenziale del peso: $L = mgh$.
- Il **calore** equivalente si misura dall'aumento di temperatura dell'acqua: $Q = m_{acqua}\,c\,\Delta T$ (in calorie).

Il risultato era sempre lo stesso: in **qualunque trasformazione ciclica**, il rapporto tra il lavoro complessivo fatto sul sistema e il calore complessivo che bisogna togliergli per riportarlo allo stato iniziale (o viceversa) è una **costante universale**:

$$\frac{L}{Q} = J = 4{,}186\,\mathrm{J/cal}$$

cioè $1\,\mathrm{cal} = 4{,}186\,\mathrm J$ (il valore preciso è 4,1868 J/cal). Conseguenza fondamentale: **calore e lavoro sono grandezze omogenee**, due modi diversi di scambiare **energia**, e si misurano con la stessa unità, il joule.

## Dal ciclo all'energia interna
Misurando calore e lavoro in joule, il risultato di Joule per le trasformazioni cicliche si scrive:

$$Q - L = 0 \quad\text{(in ogni ciclo)}$$

In un ciclo il calore netto assorbito è uguale al lavoro netto compiuto.

Ora il passaggio chiave. Prendiamo due stati A e B e tre trasformazioni diverse: $a$ e $b$ da A a B, e $c$ da B ad A. Formiamo due cicli:
- ciclo 1: da A a B lungo $a$, ritorno lungo $c$: $(Q_a - L_a) + (Q_c - L_c) = 0$;
- ciclo 2: da A a B lungo $b$, ritorno lungo $c$: $(Q_b - L_b) + (Q_c - L_c) = 0$.

Sottraendo membro a membro, il ritorno $c$ si cancella:

$$Q_a - L_a = Q_b - L_b$$

Il calore e il lavoro, **singolarmente**, dipendono dalla trasformazione seguita; la loro **differenza** $Q - L$ invece è la stessa per qualunque trasformazione tra A e B. Dipende quindi solo dagli stati iniziale e finale: $Q - L = f(A, B)$.

Come in meccanica per l'energia potenziale (il lavoro delle forze conservative non dipende dal percorso), una grandezza che dipende solo dagli estremi si può scrivere come differenza dei valori di una funzione di stato:

$$Q - L = U(B) - U(A) = \Delta U$$

La funzione $U$ ha le dimensioni di un'energia e si chiama **energia interna** del sistema.

## L'energia interna
L'**energia interna** $U$ è l'energia posseduta dal sistema a livello microscopico: la somma delle energie **cinetiche** del moto disordinato delle molecole e delle energie **potenziali** dei legami tra loro. Non comprende l'energia cinetica o potenziale del sistema **nel suo insieme** (un bicchiere d'acqua su un aereo in volo ha la stessa energia interna che a terra).

$U$ è una **funzione di stato**: dipende solo dallo stato del sistema, non da come ci è arrivato. Calore e lavoro invece **non** sono funzioni di stato: non ha senso dire "quanto calore contiene un corpo", ma solo quanto calore ha scambiato in una certa trasformazione.

| Funzioni di stato | Non funzioni di stato |
|---|---|
| energia interna, temperatura, pressione, volume, entropia | calore |
| energia potenziale gravitazionale, energia elastica di una molla ideale | lavoro |

## L'enunciato del primo principio
**In una qualsiasi trasformazione tra due stati di equilibrio, la differenza tra il calore assorbito e il lavoro compiuto dal sistema è uguale alla variazione della sua energia interna.**

$$\Delta U = Q - L$$

dove:
- $\Delta U = U_f - U_i$ = variazione di energia interna del sistema, in J
- $Q$ = calore scambiato, in J: **positivo se il sistema lo assorbe**, negativo se lo cede
- $L$ = lavoro scambiato, in J: **positivo se lo compie il sistema** (espansione), negativo se lo subisce (compressione)

Per un passo infinitesimo di una trasformazione quasi statica:

$$dU = \delta Q - \delta L$$

dove $dU$ è un differenziale esatto (variazione di una funzione di stato), mentre $\delta Q$ e $\delta L$ sono piccole quantità che dipendono dal percorso. Per un gas $\delta L = p\,dV$, quindi $dU = \delta Q - p\,dV$.

**Perché i segni sono così**: il calore che **entra** aumenta l'energia del sistema (+Q); il lavoro che il sistema **fa** verso l'esterno gli costa energia (−L). Se invece il lavoro è fatto sul sistema, $L < 0$ e $-L > 0$: l'energia aumenta.

### È la conservazione dell'energia
Il primo principio **estende a tutti i sistemi il principio di conservazione dell'energia**. In meccanica l'energia meccanica non si conservava quando agivano forze non conservative come l'attrito. Ora sappiamo che quell'energia non è sparita: è passata come **calore** o **energia interna** nei corpi coinvolti. Nei sistemi termodinamici, che di solito non hanno energia cinetica macroscopica né differenze rilevanti di energia potenziale, l'energia è immagazzinata come energia interna e può essere rilasciata compiendo lavoro o cedendo calore, come in meccanica l'energia potenziale si trasformava in cinetica o in lavoro.

Il primo principio dice che **non si può creare energia dal nulla**: una macchina che produce lavoro in un ciclo senza assorbire calore (moto perpetuo di prima specie) è impossibile, perché in un ciclo $L = Q$.

::: esempio
**Lavoro sul sistema e calore estratto.** Si compiono 200 J di lavoro **su** un sistema e gli si **tolgono** 70 cal di calore. Quanto valgono $L$, $Q$, $\Delta U$?
- il lavoro è fatto sul sistema: $L = -200\,\mathrm J$;
- il calore è ceduto dal sistema: $Q = -70\,\mathrm{cal} = -70 \cdot 4{,}186 \approx -293\,\mathrm J$;
- $\Delta U = Q - L = -293 - (-200) = -93\,\mathrm J$.

L'energia interna diminuisce: esce più energia come calore di quanta ne entri come lavoro.
:::

::: esempio
**Un aumento di energia interna di 400 J.** Quali scambi sono compatibili? Serve $Q - L = 400$ J. Per esempio $Q = 200$ J (calore assorbito) e $L = -200$ J (lavoro ricevuto): $200 - (-200) = 400$ J. Combinazioni come $Q = 200$, $L = 200$ danno invece $\Delta U = 0$, e $Q = -200$, $L = -200$ danno ancora zero. Si controlla sempre la formula con i segni.
:::

::: esempio
**Un ciclo a tre tratti.** Un gas compie un ciclo A → B → C → A. Nel tratto AB assorbe $Q_{AB} = 20{,}0$ J; nel tratto BC non scambia calore; il lavoro totale del ciclo è 15,0 J. Quanto calore scambia nel tratto CA?

Nel ciclo $\Delta U = 0$, quindi $Q_{tot} = L_{tot}$: $Q_{AB} + Q_{BC} + Q_{CA} = 15{,}0$ J. Con $Q_{BC} = 0$:
$$Q_{CA} = 15{,}0 - 20{,}0 = -5{,}0\,\mathrm J$$
Nel tratto CA il sistema **cede** 5 J di calore.
:::

## Casi particolari
| Trasformazione | Condizione | Primo principio | Significato |
|---|---|---|---|
| Isocora | $\Delta V = 0 \Rightarrow L = 0$ | $\Delta U = Q$ | tutto il calore va in energia interna |
| Isoterma (gas perfetto) | $T$ costante $\Rightarrow \Delta U = 0$ | $Q = L$ | tutto il calore diventa lavoro (o viceversa) |
| Adiabatica | $Q = 0$ | $\Delta U = -L$ | il lavoro si paga con l'energia interna |
| Ciclica | stato finale = iniziale $\Rightarrow \Delta U = 0$ | $Q = L$ | calore netto = lavoro netto |

- **Isocora**: il sistema non compie lavoro. Ogni variazione di energia interna viene da scambi di calore: a contatto con un corpo più caldo assorbe calore e $\Delta U > 0$; a contatto con un corpo più freddo cede calore e $\Delta U < 0$.
- **Isoterma** di un gas perfetto: un gas che si **espande** a temperatura costante compie lavoro positivo; siccome $\Delta U = 0$, deve **assorbire** calore in quantità uguale ($Q = L > 0$). È **sbagliato** dire che cede calore all'ambiente. In compressione isoterma, invece, riceve lavoro e cede altrettanto calore.
- **Adiabatica**: in **espansione** il gas compie lavoro positivo usando parte della propria energia interna, $\Delta U = -L < 0$: si **raffredda**. In **compressione** le forze esterne fanno lavoro sul gas, che lo immagazzina come energia interna: si **scalda** (l'aria nella pompa della bicicletta).
- **Ciclo**: il sistema passa per diversi stati ma torna a quello iniziale: $\Delta U = 0$ e il calore netto assorbito è uguale al lavoro netto compiuto.

## Il calore non sempre alza la temperatura
Il calore assorbito (se il sistema non compie lavoro) aumenta l'**energia interna**. Non è detto che aumenti la **temperatura**: durante un passaggio di stato il calore rompe i legami tra le molecole, cresce la loro energia potenziale, la temperatura resta ferma. Non aumenta nemmeno, necessariamente, l'energia cinetica o potenziale del corpo **come insieme**: quelle sono energie meccaniche macroscopiche, diverse dall'energia interna. Tra le affermazioni "il calore fornito aumenta necessariamente la temperatura / l'energia potenziale / l'energia cinetica / l'energia interna del corpo", quella corretta è **l'energia interna** (a rigore, se il corpo compie anche lavoro, parte dell'energia esce come lavoro).

Per un **gas perfetto**, invece, l'energia interna dipende solo dalla temperatura. Quindi se l'energia interna di un gas perfetto aumenta (per esempio di 1000 J), la sua **temperatura è aumentata**, qualunque sia stata la trasformazione.

## Quale espansione compie più lavoro
Un gas perfetto parte da uno stato $(p_0, V_0)$ e si espande fino al **doppio del volume**. Il lavoro è l'area sotto la curva nel piano $p$-$V$, tra $V_0$ e $2V_0$.
- **Isobara**: la pressione resta al valore iniziale $p_0$, il più alto possibile tra le curve che partono da quello stato verso destra: $L = p_0V_0$. Area **massima**.
- **Isoterma**: la pressione scende come $1/V$: $L = nRT\ln 2 = p_0V_0\ln 2 \approx 0{,}69\,p_0V_0$.
- **Adiabatica**: la pressione scende ancora più in fretta ($pV^\gamma$ costante); per un gas monoatomico $L = \dfrac{p_0V_0}{\gamma - 1}\left(1 - 2^{1-\gamma}\right) \approx 0{,}56\,p_0V_0$.
- **Isocora**: non c'è espansione, $L = 0$ (e quindi non può raddoppiare il volume).

Quindi il lavoro maggiore lo compie l'**isobara**.

## Primo principio nei solidi
In un solido metallico la dilatazione termica cambia pochissimo il volume, quindi il lavoro è trascurabile ($L \approx 0$) e l'unico parametro che conta è la temperatura. Riscaldando il solido senza compiere lavoro:
$$\delta Q = dU \quad\Rightarrow\quad m\,c\,dT = dU \quad\Rightarrow\quad c = \frac{1}{m}\frac{dU}{dT}$$
Il calore specifico è quindi legato a come l'energia interna cresce con la temperatura, e nei solidi dipende solo da $T$. Se $c$ è costante, integrando: $U(T) = m\,c\,T + \text{costante}$, e il primo principio diventa
$$Q = \Delta U = m\,c\,\Delta T$$
che è la legge della calorimetria della lezione 34.

::: esempio
**Il blocco di ferro che rimbalza.** Un blocco di ferro di 1 kg cade da fermo da $H = 20$ m e, dopo l'urto con il suolo, risale fino a $h = 1$ m. Di quanto aumenta la sua energia interna, se assorbe praticamente tutta l'energia meccanica dissipata?

Tra lo stato iniziale (fermo a 20 m) e quello finale (fermo a 1 m) l'energia meccanica è diminuita di
$$mg(H - h) = 1 \cdot 9{,}8 \cdot 19 \approx 186\,\mathrm J$$
È il lavoro (negativo) delle forze non conservative nell'urto: $L_{nc} = mg(h - H) \approx -186$ J sul blocco. Senza scambi di calore con l'esterno, $\Delta U = -L = +186$ J: l'energia meccanica "persa" è diventata energia interna (il blocco si è scaldato un po'). Con $c_{ferro} \approx 450$ J/(kg K) l'aumento di temperatura è $186/450 \approx 0{,}4$ K.
:::

::: attenzione
Gli errori più frequenti sul primo principio sono di **segno**. Prima di scrivere i numeri chiediti: il calore entra (+) o esce (−)? Il lavoro lo fa il sistema (+) o lo subisce (−)? Alcuni libri usano la convenzione opposta per il lavoro ($\Delta U = Q + L$, con $L$ fatto **sul** sistema): in questo corso si usa $\Delta U = Q - L$ con $L$ fatto **dal** sistema.
:::

::: esame
Domanda aperta: "Esporre il primo principio della termodinamica". Punti da toccare, in ordine:
1. esperimento di Joule ed equivalente meccanico della caloria ($1\,\mathrm{cal} = 4{,}186\,\mathrm J$): calore e lavoro sono entrambi energia;
2. in un ciclo $Q = L$; confrontando due percorsi tra gli stessi stati si trova che $Q - L$ non dipende dal percorso;
3. quindi esiste una funzione di stato, l'energia interna $U$ (energia microscopica delle molecole);
4. enunciato $\Delta U = Q - L$ (e $dU = \delta Q - \delta L$) con le convenzioni di segno;
5. è la conservazione dell'energia estesa ai fenomeni termici; $Q$ e $L$ non sono funzioni di stato, $U$ sì;
6. casi particolari: isocora $\Delta U = Q$, isoterma del gas perfetto $Q = L$, adiabatica $\Delta U = -L$, ciclo $Q = L$.

Domande chiuse: dove va il calore fornito (energia interna); isoterma in espansione (assorbe calore, non lo cede); combinazione di $Q$ e $L$ per un dato $\Delta U$; espansione con più lavoro (isobara); aumento di energia interna di un gas (temperatura aumentata); grandezza che non è funzione di stato (il calore).
:::

::: sintesi
- Joule: $1\,\mathrm{cal} = 4{,}186\,\mathrm J$; calore e lavoro sono energia.
- In un ciclo $Q = L$; tra due stati $Q - L$ non dipende dal percorso: definisce l'energia interna $U$.
- $\Delta U = Q - L$, $dU = \delta Q - \delta L$: $Q > 0$ se assorbito, $L > 0$ se compiuto dal sistema.
- $U$ è funzione di stato; $Q$ e $L$ no.
- Isocora $\Delta U = Q$; isoterma (gas perfetto) $Q = L$; adiabatica $\Delta U = -L$; ciclo $Q = L$.
- Il calore aumenta l'energia interna, non per forza la temperatura; per un gas perfetto più energia interna = più temperatura.
- Espansione fino al doppio del volume: lavoro isobara > isoterma > adiabatica > isocora (zero).
- Solidi: $L \approx 0$, $Q = \Delta U = mc\Delta T$.
:::

=== 37 dispense
SLIDES: 38, 41
# Lezione 37 — Gas perfetti: energia interna, calori molari e trasformazioni notevoli

## Introduzione
Nella lezione 35 abbiamo introdotto il gas perfetto e la sua equazione di stato; nella lezione 36 il primo principio. Ora li mettiamo insieme. Vediamo perché l'energia interna di un gas perfetto dipende solo dalla temperatura, come si definiscono i calori molari $C_V$ e $C_p$ e da dove viene la relazione di Mayer, e ricaviamo **passo per passo** lavoro, calore ed energia interna nelle quattro trasformazioni notevoli, compresa l'equazione dell'adiabatica. Chiudiamo con il significato microscopico dei calori molari (equipartizione) e un cenno ai gas reali.

## Richiamo: le due relazioni del gas perfetto
$$pV = nRT \qquad \Delta U = nC_V\Delta T$$

dove:
- $p, V, T$ = pressione (Pa), volume (m³), temperatura assoluta (K)
- $n$ = moli; $R = 8{,}314\,\mathrm{J/(mol\,K)}$
- $C_V$ = calore molare a volume costante, in $\mathrm{J/(mol\,K)}$

## L'energia interna dipende solo dalla temperatura: l'esperimento di Joule
Joule dimostrò questa proprietà con l'**espansione libera**. Un gas perfetto è in equilibrio in un recipiente isolato, separato da un setto da un secondo recipiente uguale, **vuoto** e isolato, con le pareti alla stessa temperatura. Si toglie il setto: il gas riempie anche il secondo recipiente.
1. Il gas **non scambia calore**: i recipienti sono isolati, $Q = 0$.
2. Il gas **non compie lavoro**: si espande nel vuoto, non spinge nulla, e le pareti sono rigide: $L = 0$.
3. Per il primo principio $\Delta U = Q - L = 0$: l'energia interna **non cambia**.
4. Si misura che anche la temperatura finale è **uguale** a quella iniziale. Volume e pressione invece sono cambiati (il volume è raddoppiato e la pressione dimezzata, come vuole $pV = nRT$).

Dunque $U$ è rimasta uguale mentre $V$ e $p$ cambiavano: $U$ non può dipendere né da $V$ né da $p$. L'unica variabile rimasta costante è $T$: **l'energia interna di un gas perfetto è funzione solo della temperatura**, $U = U(T)$. Microscopicamente: le molecole non interagiscono, quindi non c'è energia potenziale di legame, e l'energia cinetica dipende solo da $T$ (lezione 34).

Ne segue che, come per un solido, per qualunque trasformazione $Q - L = U(T_f) - U(T_i)$.

## I calori molari
Nei solidi il calore specifico è unico. Nei gas no: **il calore necessario per scaldare il gas di 1 K dipende dalla trasformazione** (a volume costante, a pressione costante...), perché parte del calore può andare in lavoro. Bisogna sempre dire "calore molare **a** ...". Si definisce il **calore molare** (calore per mole e per kelvin) lungo una trasformazione:

$$C = \frac{1}{n}\frac{\delta Q}{dT}$$

Dal primo principio, per un piccolo passo, $\delta Q = dU + p\,dV$.

### A volume costante: $C_V$
Se $V$ è costante, $dV = 0$ e $\delta Q = dU$: tutto il calore va in energia interna.
$$C_V = \frac{1}{n}\frac{dU}{dT}$$
In un ampio intervallo di temperature $C_V$ è costante e dipende dalla struttura delle molecole:
- gas **monoatomici** (He, Ne, Ar): $C_V = \tfrac32 R \approx 12{,}5\,\mathrm{J/(mol\,K)}$;
- gas **biatomici** (O₂, N₂, H₂, aria): $C_V = \tfrac52 R \approx 20{,}8\,\mathrm{J/(mol\,K)}$;
- gas **poliatomici**: circa $3R$.

Integrando $dU = nC_V\,dT$ si ottiene $U = nC_VT + \text{costante}$, quindi $\Delta U = nC_V\Delta T$ **in ogni trasformazione**, anche quelle che non sono isocore: $U$ dipende solo da $T$, e per calcolarne la variazione posso scegliere il percorso che preferisco. Il primo principio per un gas perfetto, in un passo infinitesimo, diventa:

$$\delta Q = nC_V\,dT + p\,dV$$

### A pressione costante: $C_p$ e la relazione di Mayer
A pressione costante il gas, scaldandosi, si **espande** e compie lavoro: serve più calore che a volume costante per lo stesso $\Delta T$.

Derivazione:
1. $\delta Q = nC_V\,dT + p\,dV$.
2. Differenzio l'equazione di stato a $p$ costante: $p\,dV = nR\,dT$.
3. Sostituisco: $\delta Q = nC_V\,dT + nR\,dT = n(C_V + R)\,dT$.
4. Per definizione $C_p = \dfrac{1}{n}\dfrac{\delta Q}{dT}$ a pressione costante, quindi:

$$C_p = C_V + R \qquad \gamma = \frac{C_p}{C_V}$$

dove:
- $C_p$ = calore molare a pressione costante, in $\mathrm{J/(mol\,K)}$
- $R$ = costante dei gas; la relazione $C_p = C_V + R$ si chiama **relazione di Mayer**
- $\gamma$ = rapporto tra i calori molari, numero puro, sempre maggiore di 1

| Gas | $C_V$ | $C_p$ | $\gamma$ |
|---|---|---|---|
| Monoatomico (He, Ar) | $\tfrac32R$ | $\tfrac52R$ | $5/3 \approx 1{,}67$ |
| Biatomico (O₂, N₂, aria) | $\tfrac52R$ | $\tfrac72R$ | $7/5 = 1{,}4$ |
| Poliatomico | $\approx 3R$ | $\approx 4R$ | $\approx 4/3$ |

## Il perché dei calori molari: gradi di libertà ed equipartizione
La teoria cinetica spiega questi valori con il **teorema di equipartizione dell'energia**: ogni **grado di libertà** di una molecola (ogni modo indipendente in cui può muoversi e immagazzinare energia) contribuisce in media con $\tfrac12 k_BT$.
- Una molecola **monoatomica** è come un punto materiale: 3 gradi di libertà (traslazione lungo $x$, $y$, $z$). Energia media $\tfrac32 k_BT$.
- Una molecola **biatomica** ha le 6 coordinate dei suoi due atomi meno 1 vincolo (la distanza fissa tra loro): 5 gradi di libertà (3 di traslazione e 2 di rotazione). Energia media $\tfrac52 k_BT$.

Con $f$ gradi di libertà, l'energia interna di $n$ moli ($N = nN_A$ molecole) è
$$U = N\,\frac f2 k_BT = n\,\frac f2 RT \quad\Rightarrow\quad C_V = \frac1n\frac{dU}{dT} = \frac f2 R$$
che dà $\tfrac32R$ per $f = 3$ e $\tfrac52R$ per $f = 5$.

## Le quattro trasformazioni, una per una
### Isocora ($V$ costante)
- Legge: $p/T$ = costante.
- Lavoro: $L = 0$ (nessuna variazione di volume).
- Energia interna: $\Delta U = nC_V\Delta T$.
- Calore: dal primo principio $Q = \Delta U = nC_V\Delta T$.

### Isobara ($p$ costante)
- Legge: $V/T$ = costante. Se il volume aumenta, la temperatura aumenta **in proporzione**.
- Lavoro: $L = p\,\Delta V = nR\,\Delta T$.
- Energia interna: $\Delta U = nC_V\Delta T$.
- Calore: $Q = \Delta U + L = nC_V\Delta T + nR\Delta T = nC_p\Delta T$. Una parte del calore assorbito diventa lavoro, una parte energia interna.

### Isoterma ($T$ costante)
- Legge: $pV$ = costante (legge di Boyle).
- Energia interna: $\Delta U = 0$.
- Lavoro: la pressione cambia lungo la trasformazione, quindi integro con $p = nRT/V$:
$$L = \int_{V_i}^{V_f} p\,dV = \int_{V_i}^{V_f}\frac{nRT}{V}\,dV = nRT\int_{V_i}^{V_f}\frac{dV}{V} = nRT\left[\ln V\right]_{V_i}^{V_f} = nRT\ln\frac{V_f}{V_i}$$
($nRT$ esce dall'integrale perché $T$ è costante). Siccome $p_iV_i = p_fV_f$, si può anche scrivere $L = nRT\ln(p_i/p_f)$.
- Calore: $Q = L$. In espansione ($V_f > V_i$, logaritmo positivo) il gas assorbe calore e lo trasforma tutto in lavoro; in compressione riceve lavoro e cede altrettanto calore.

### Adiabatica ($Q = 0$)
- Calore: $Q = 0$.
- Primo principio: $\Delta U = -L$, quindi $L = -nC_V\Delta T = nC_V(T_i - T_f)$.
- In **espansione** il gas compie lavoro a spese della sua energia interna: **si raffredda**. In **compressione** riceve lavoro: **si scalda** (pompa della bicicletta, motore diesel).

**Ricavo l'equazione dell'adiabatica reversibile.**
1. Primo principio con $\delta Q = 0$: $0 = nC_V\,dT + p\,dV$.
2. Sostituisco $p = nRT/V$: $nC_V\,dT + \dfrac{nRT}{V}dV = 0$.
3. Divido per $nC_VT$: $\dfrac{dT}{T} + \dfrac{R}{C_V}\dfrac{dV}{V} = 0$.
4. Per Mayer $\dfrac{R}{C_V} = \dfrac{C_p - C_V}{C_V} = \gamma - 1$: $\dfrac{dT}{T} + (\gamma - 1)\dfrac{dV}{V} = 0$.
5. Integro: $\ln T + (\gamma - 1)\ln V = \text{cost}$, cioè $\ln\left(TV^{\gamma-1}\right) = \text{cost}$:
$$TV^{\gamma - 1} = \text{costante}$$
6. Sostituisco $T = pV/(nR)$: $\dfrac{pV}{nR}V^{\gamma-1} = $ cost, cioè
$$pV^\gamma = \text{costante}$$
7. Eliminando invece $V$ si ottiene anche $T^\gamma p^{1-\gamma} = $ costante.

Nel piano $p$-$V$ l'adiabatica scende **più ripida dell'isoterma** passante per lo stesso punto: lì $p \propto 1/V^\gamma$ con $\gamma > 1$, contro $p \propto 1/V$. Il motivo fisico: espandendosi, il gas non solo aumenta di volume ma si raffredda, e quindi la pressione cala di più.

Il lavoro adiabatico si può anche scrivere con le pressioni: $L = nC_V(T_i - T_f) = \dfrac{C_V}{R}(p_iV_i - p_fV_f) = \dfrac{p_iV_i - p_fV_f}{\gamma - 1}$.

### Tabella riassuntiva
| Trasformazione | Legge | $L$ | $Q$ | $\Delta U$ |
|---|---|---|---|---|
| Isocora | $p/T$ = cost. | $0$ | $nC_V\Delta T$ | $nC_V\Delta T$ |
| Isobara | $V/T$ = cost. | $p\,\Delta V = nR\Delta T$ | $nC_p\Delta T$ | $nC_V\Delta T$ |
| Isoterma | $pV$ = cost. | $nRT\ln\dfrac{V_f}{V_i}$ | $= L$ | $0$ |
| Adiabatica | $pV^\gamma$ = cost. | $-\Delta U$ | $0$ | $nC_V\Delta T$ |

::: attenzione
$\Delta U = nC_V\Delta T$ vale in **ogni** trasformazione, anche nell'isobara. Non scrivere $nC_p\Delta T$ per l'energia interna: quello è il **calore** dell'isobara. E nelle leggi dei gas $T$ va sempre in kelvin.
:::

## Confronto tra espansioni dallo stesso stato
Due quantità uguali dello stesso gas perfetto partono dallo stesso stato e si espandono.
- Quella a **pressione costante** finisce **più calda**: con $p$ fissa, $T$ cresce in proporzione a $V$.
- Quella a **temperatura costante** resta alla temperatura iniziale.
- Un'eventuale espansione **adiabatica** finirebbe **più fredda**.

Siccome $U$ dipende solo da $T$, alla fine ha **energia interna maggiore** il gas che ha fatto l'**isobara** (ha assorbito calore sia per il lavoro sia per scaldarsi), mentre quello dell'isoterma ha la stessa energia interna di partenza.

## Esempi svolti
::: esempio
**Compressione isoterma.** Ossigeno a 0,00 °C e 1 bar viene compresso in modo isotermo da 22,4 L a 16,8 L. Lavoro?

Non serve calcolare $n$: $nRT = p_iV_i = 10^5 \cdot 22{,}4\cdot10^{-3} = 2240\,\mathrm J$ (sono circa 0,99 mol).
$$L = nRT\ln\frac{V_f}{V_i} = 2240 \cdot \ln\frac{16{,}8}{22{,}4} = 2240\cdot\ln 0{,}75 = 2240 \cdot(-0{,}288) \approx -644\,\mathrm J$$
Il segno meno dice che il lavoro è fatto **sul** gas: l'agente esterno compie circa +644 J. Siccome $\Delta U = 0$, il gas cede $Q = L \approx -644$ J di calore.
:::

::: esempio
**Compressione adiabatica dell'aria.** Aria ($\gamma = 1{,}4$) a 1,2 bar e 310 K occupa 4,3 L e viene compressa adiabaticamente fino a 0,76 L. Pressione e temperatura finali?

Rapporto dei volumi: $V_i/V_f = 4{,}3/0{,}76 \approx 5{,}66$.
- Da $p_iV_i^\gamma = p_fV_f^\gamma$: $p_f = p_i\left(\dfrac{V_i}{V_f}\right)^\gamma = 1{,}2 \cdot 5{,}66^{1{,}4} \approx 1{,}2 \cdot 11{,}3 \approx 13{,}6\,\mathrm{bar}$.
- Da $T_iV_i^{\gamma-1} = T_fV_f^{\gamma-1}$: $T_f = T_i\left(\dfrac{V_i}{V_f}\right)^{0{,}4} = 310 \cdot 5{,}66^{0{,}4} \approx 310\cdot 2{,}00 \approx 620\,\mathrm K$.

Controllo con l'equazione di stato: $T_f = T_i\dfrac{p_fV_f}{p_iV_i} = 310\cdot\dfrac{13{,}56 \cdot 0{,}76}{1{,}2\cdot4{,}3} \approx 619\,\mathrm K$. Comprimendo senza scambiare calore la temperatura è raddoppiata.
:::

::: esempio
**Riconoscere il tipo di gas da un'adiabatica.** Un gas perfetto subisce una compressione adiabatica reversibile da 1,0 bar e $1{,}0\cdot10^6$ L (a 0,0 °C) a $1{,}0\cdot10^5$ bar e $1{,}0\cdot10^3$ L. È monoatomico, biatomico o poliatomico?

Da $p_iV_i^\gamma = p_fV_f^\gamma$: $\dfrac{p_f}{p_i} = \left(\dfrac{V_i}{V_f}\right)^\gamma$, cioè $10^5 = (10^3)^\gamma$. Passo ai logaritmi: $5 = 3\gamma$, quindi $\gamma = 5/3$: **monoatomico**.

Temperatura finale: $T_f = T_i\dfrac{p_fV_f}{p_iV_i} = 273{,}15\cdot\dfrac{10^5\cdot10^3}{1\cdot10^6} = 273{,}15\cdot100 \approx 27\,300\,\mathrm K$.

Moli: $n = \dfrac{p_iV_i}{RT_i} = \dfrac{10^5\,\mathrm{Pa}\cdot 10^3\,\mathrm{m^3}}{8{,}314\cdot273{,}15} \approx 4{,}4\cdot10^4\,\mathrm{mol}$.

Energia cinetica traslazionale per mole, $\tfrac32RT$: prima $\tfrac32\cdot8{,}314\cdot273{,}15 \approx 3{,}4\,\mathrm{kJ}$, dopo 100 volte tanto, circa $3{,}4\cdot10^2\,\mathrm{kJ}$.
:::

::: esempio
**Riscaldamento isocoro di un gas monoatomico.** Gas monoatomico a 10,0 °C e 100 kPa in 2,50 m³, scaldato a volume costante fino a 300 kPa. Calore assorbito e $\Delta U$?
1. Moli: $n = \dfrac{pV}{RT} = \dfrac{10^5\cdot2{,}50}{8{,}314\cdot283{,}15} \approx 106\,\mathrm{mol}$.
2. Temperatura finale: a volume costante $T$ triplica con $p$: $T_2 = 3\cdot283{,}15 \approx 849\,\mathrm K$.
3. $\Delta U = nC_V\Delta T = \tfrac32 nR\Delta T = \tfrac32 V\Delta p = 1{,}5\cdot2{,}50\cdot2\cdot10^5 = 750\,\mathrm{kJ}$ (scorciatoia: $nR\Delta T = V\Delta p$ a volume costante).
4. $L = 0$, quindi $Q = \Delta U = 750\,\mathrm{kJ}$.
:::

::: esempio
**Riscaldamento isobaro di un gas biatomico.** Gas biatomico a 0,0 °C e 100 kPa in 0,50 m³, scaldato a pressione costante finché il volume raddoppia.
1. $n = \dfrac{10^5\cdot0{,}50}{8{,}314\cdot273{,}15} \approx 22{,}0\,\mathrm{mol}$; il volume raddoppia a $p$ costante, quindi $T_f = 2T_i \approx 546\,\mathrm K$.
2. Lavoro: $L = p\Delta V = 10^5\cdot0{,}50 = 50\,\mathrm{kJ}$.
3. $\Delta U = nC_V\Delta T = \tfrac52 nR\Delta T = \tfrac52 p\Delta V = 125\,\mathrm{kJ}$.
4. $Q = nC_p\Delta T = \tfrac72 p\Delta V = 175\,\mathrm{kJ}$. Controllo: $Q = \Delta U + L = 125 + 50$.
:::

::: esempio
**Gas che cede calore a pressione costante.** Gas biatomico a 320 K in 5 L, in equilibrio con l'atmosfera (1 atm); gli si sottraggono lentamente 20 cal (83,7 J).
1. $n = \dfrac{1{,}013\cdot10^5\cdot5\cdot10^{-3}}{8{,}314\cdot320} \approx 0{,}190\,\mathrm{mol}$.
2. Isobara: $Q = nC_p\Delta T$, quindi $\Delta T = \dfrac{-83{,}7}{0{,}190\cdot\tfrac72\cdot8{,}314} \approx -15{,}1\,\mathrm K$, $T_f \approx 304{,}9\,\mathrm K$.
3. Volume finale: $V_f = V_i\,T_f/T_i = 5\cdot304{,}9/320 \approx 4{,}76\,\mathrm L$.
4. $L = p\Delta V = 1{,}013\cdot10^5\cdot(-0{,}24\cdot10^{-3}) \approx -24\,\mathrm J$.
5. $\Delta U = Q - L = -83{,}7 + 24 \approx -60\,\mathrm J$ (stesso risultato con $nC_V\Delta T$).
:::

::: esempio
**Trasformazione rettilinea nel piano $p$-$V$.** Due moli di gas perfetto a 273 K raddoppiano il volume e dimezzano la pressione lungo un segmento rettilineo. Calore assorbito?

$pV$ finale = $2V_0\cdot p_0/2 = p_0V_0$: la temperatura finale è uguale all'iniziale, quindi $\Delta U = 0$ e $Q = L$. Il lavoro è l'area del trapezio sotto il segmento:
$$L = \frac{p_0 + p_0/2}{2}\,(2V_0 - V_0) = \frac34 p_0V_0 = \frac34 nRT_0 = 0{,}75\cdot2\cdot8{,}314\cdot273 \approx 3{,}4\,\mathrm{kJ}$$
:::

::: esempio
**Isobara seguita da adiabatica.** Due moli di gas monoatomico passano da A a B con un'espansione isobara e poi da B a C con un'espansione adiabatica; $T_A = T_C = 18$ °C = 291 K, $p_A = 2\cdot10^5$ Pa, $V_B = 2V_A$.
1. A: $V_A = nRT_A/p_A = 2\cdot8{,}314\cdot291/(2\cdot10^5) \approx 0{,}024\,\mathrm{m^3}$.
2. B: $p_B = p_A$, $V_B = 0{,}048\,\mathrm{m^3}$, $T_B = 2T_A = 582\,\mathrm K$.
3. C: dall'adiabatica $T_BV_B^{\gamma-1} = T_CV_C^{\gamma-1}$ con $\gamma - 1 = 2/3$: $V_C = V_B(T_B/T_C)^{3/2} = 0{,}048\cdot2^{1{,}5} \approx 0{,}137\,\mathrm{m^3}$, e $p_C = nRT_C/V_C \approx 3{,}5\cdot10^4\,\mathrm{Pa}$.
4. Calore da A a C: nell'adiabatica è zero, quindi tutto viene dall'isobara: $Q = nC_p(T_B - T_A) = 2\cdot\tfrac52\cdot8{,}314\cdot291 \approx 12{,}1\,\mathrm{kJ}$.
:::

::: esempio
**Pistone trattenuto da una molla.** Ossigeno (biatomico, $M = 32$ g/mol) in un cilindro con pistone di area $S = 500\,\mathrm{cm^2}$ collegato a una molla; all'inizio $V_0 = 10$ L, $p_0 = 1$ atm, $T_0 = -20$ °C, molla a riposo. Il gas si porta a 27 °C e il pistone sale di $h = 1$ cm.
1. Massa: $n = \dfrac{p_0V_0}{RT_0} = \dfrac{1{,}013\cdot10^5\cdot0{,}010}{8{,}314\cdot253{,}15} \approx 0{,}481\,\mathrm{mol}$, quindi $m = 0{,}481\cdot32 \approx 15{,}4\,\mathrm g$.
2. Volume finale: $V = V_0 + Sh = 10 + 0{,}5 = 10{,}5\,\mathrm L$. Pressione finale: $p = p_0\dfrac{V_0}{V}\dfrac{T}{T_0} = 1{,}013\cdot10^5\cdot\dfrac{10}{10{,}5}\cdot\dfrac{300{,}15}{253{,}15} \approx 1{,}144\cdot10^5\,\mathrm{Pa}$.
3. Molla: all'equilibrio $pS = p_0S + kh$, quindi $k = \dfrac{(p - p_0)S}{h} = \dfrac{1{,}31\cdot10^4\cdot0{,}05}{0{,}01} \approx 6{,}5\cdot10^4\,\mathrm{N/m}$.
4. Lavoro: contro l'atmosfera più quello immagazzinato nella molla: $L = p_0Sh + \tfrac12kh^2 = 50{,}7 + 3{,}3 \approx 54\,\mathrm J$.
5. Calore: $Q = \Delta U + L = nC_V\Delta T + L = 0{,}481\cdot\tfrac52\cdot8{,}314\cdot47 + 54 \approx 470 + 54 \approx 524\,\mathrm J$.
:::

## Gas reali
Il modello di gas perfetto funziona a bassa pressione e bassa densità. Aumentandole, le molecole si avvicinano e le loro interazioni contano; il modello fallisce del tutto vicino a un passaggio di stato (condensazione). Un'equazione di stato empirica per i gas reali è quella di **van der Waals**:
$$\left(p + \frac{a\,n^2}{V^2}\right)(V - n\,b) = nRT$$
dove $a$ e $b$ sono costanti tipiche di ogni gas. Il termine $an^2/V^2$ tiene conto delle **forze attrattive** tra le molecole (che si aggiungono alla pressione esterna nel tenere insieme il gas); il termine $nb$ tiene conto del **volume occupato** dalle molecole, che riduce lo spazio libero a disposizione di ciascuna.

::: esame
Domanda chiusa tipica: due quantità uguali di gas perfetto partono dallo stesso stato, una si espande a pressione costante, l'altra a temperatura costante: alla fine ha più energia interna quella dell'isobara (è più calda; $U$ dipende solo da $T$). Utili anche per le domande delle lezioni 35 e 36: $\Delta U = nC_V\Delta T$ sempre, $C_V = \tfrac32R$ o $\tfrac52R$, $C_p = C_V + R$, lavoro e calore nelle quattro trasformazioni, adiabatica che raffredda in espansione.
:::

::: sintesi
- Espansione libera di Joule: $Q = 0$, $L = 0$, $T$ invariata, quindi $U$ dipende solo da $T$.
- $C_V = \tfrac32R$ (monoatomico), $\tfrac52R$ (biatomico); $C_p = C_V + R$ (Mayer); $\gamma = 5/3$ o $7/5$.
- Equipartizione: $\tfrac12k_BT$ per grado di libertà; 3 gradi (monoatomico), 5 (biatomico).
- Isocora: $Q = \Delta U = nC_V\Delta T$. Isobara: $L = p\Delta V$, $Q = nC_p\Delta T$.
- Isoterma: $\Delta U = 0$, $Q = L = nRT\ln(V_f/V_i)$.
- Adiabatica: $Q = 0$, $L = -nC_V\Delta T$, $pV^\gamma$ e $TV^{\gamma-1}$ costanti; si raffredda in espansione, si scalda in compressione.
- $\Delta U = nC_V\Delta T$ in ogni trasformazione.
:::

=== 39 dispense
SLIDES: 40, 41, 42
# Lezione 39 — Secondo principio della termodinamica ed entropia

## Perché serve un secondo principio
Il primo principio dice che l'energia si conserva in ogni trasformazione. Le trasformazioni reversibili, ideali, si possono percorrere in un verso o nell'altro senza violarlo. Ma quasi tutte le trasformazioni reali avvengono **in un solo verso** e non si ripercorrono mai da sole al contrario, anche se il contrario conserverebbe l'energia:
- due corpi a temperature diverse messi a contatto raggiungono una temperatura intermedia; non succede mai che, spontaneamente, uno torni caldo e l'altro freddo;
- l'attrito trasforma tutto il lavoro in calore; il calore non si ritrasforma mai spontaneamente in lavoro facendo ripartire il corpo;
- un gas si espande liberamente nel vuoto; non si raccoglie mai da solo in metà del recipiente.

Il **secondo principio** dà una forma precisa a questi vincoli sperimentali sul **verso** delle trasformazioni. Si può enunciare in modi diversi ma equivalenti: con l'**entropia** e con i due enunciati classici di **Kelvin-Planck** e di **Clausius**.

## L'entropia
La grandezza fondamentale del secondo principio è l'**entropia** $S$. È una **funzione di stato**, come l'energia interna: passando da uno stato A a uno stato B, la sua variazione dipende solo dai due stati ed è la differenza tra il valore finale e quello iniziale. Si calcola lungo una trasformazione **reversibile** che collega A e B:

$$\Delta S = S_B - S_A = \int_A^B \frac{\delta Q_{rev}}{T}$$

dove:
- $\Delta S$ = variazione di entropia, in **J/K**
- $\delta Q_{rev}$ = piccolo calore scambiato lungo una trasformazione **reversibile**, in J (positivo se assorbito)
- $T$ = temperatura assoluta alla quale si scambia quel calore, in K

L'unità segue direttamente dalla definizione: joule diviso kelvin.

**Caso isotermo.** Se $T$ è costante esce dall'integrale e resta la somma dei calori:
$$\Delta S = \frac{Q}{T}$$
Il sistema che assorbe calore aumenta la sua entropia; quello che lo cede la diminuisce.

**Trasformazioni adiabatiche reversibili**: $\delta Q = 0$ in ogni tratto, quindi $\Delta S = 0$ (si chiamano anche isoentropiche).

**Trasformazioni irreversibili**: la formula non si applica lungo il percorso reale. Siccome $S$ è una funzione di stato, si sceglie **una qualsiasi trasformazione reversibile** con gli stessi stati iniziale e finale e si calcola lungo quella.

::: esempio
**Espansione isoterma.** Un gas si espande isotermicamente a 35,0 °C compiendo 500 J di lavoro. Variazione di entropia?
1. Isoterma di un gas perfetto: $\Delta U = 0$, quindi $Q = L = 500$ J (assorbito).
2. Temperatura in kelvin: $T = 35{,}0 + 273{,}15 = 308{,}15$ K.
3. $\Delta S = Q/T = 500/308{,}15 \approx 1{,}62\,\mathrm{J/K}$.

Errori tipici: usare 35 °C invece dei kelvin (si otterrebbe 14,3); scrivere l'unità N/K invece di J/K.
:::

### Entropia di un gas perfetto
Per un passo infinitesimo reversibile, dal primo principio $\delta Q = nC_V\,dT + p\,dV$. Divido per $T$ e uso $p/T = nR/V$:
$$dS = \frac{\delta Q}{T} = nC_V\frac{dT}{T} + nR\frac{dV}{V}$$
Integro dallo stato iniziale a quello finale:
$$\Delta S = nC_V\ln\frac{T_f}{T_i} + nR\ln\frac{V_f}{V_i}$$
dove $n$ = moli, $C_V$ = calore molare a volume costante, $R$ = costante dei gas. Il risultato dipende **solo** dagli stati iniziale e finale: è la prova diretta che l'entropia è una funzione di stato. Casi particolari: isoterma $\Delta S = nR\ln(V_f/V_i)$; isocora $\Delta S = nC_V\ln(T_f/T_i)$; isobara $\Delta S = nC_p\ln(T_f/T_i)$.

::: esempio
**Quante moli?** Un gas ideale si espande in modo isotermo e reversibile a 320 K da 1,40 L a 3,20 L; la sua entropia aumenta di 20,0 J/K. Isoterma: resta solo il termine di volume,
$$n = \frac{\Delta S}{R\ln(V_f/V_i)} = \frac{20{,}0}{8{,}314\cdot\ln(3{,}20/1{,}40)} = \frac{20{,}0}{8{,}314\cdot0{,}827} \approx 2{,}91\,\mathrm{mol}$$
:::

::: esempio
**Espansione con legge esponenziale.** Una mole di gas monoatomico a 5,00 kPa e 600 K si espande fino a 2,00 m³ con la pressione che segue $p = p_i\,e^{-(V - V_i)/a}$, $a = 1{,}00\,\mathrm{m^3}$.
1. Volume iniziale: $V_i = RT_i/p_i = 8{,}314\cdot600/5000 \approx 1{,}00\,\mathrm{m^3}$.
2. Pressione finale: $p_f = 5{,}00\,e^{-1} \approx 1{,}84\,\mathrm{kPa}$.
3. Temperatura finale: $T_f = p_fV_f/R = 1839\cdot2{,}00/8{,}314 \approx 442\,\mathrm K$.
4. Lavoro: $L = \int_{V_i}^{V_f}p_i e^{-(V-V_i)/a}dV = p_i\,a\,(1 - e^{-1}) = 5000\cdot1{,}00\cdot0{,}632 \approx 3{,}16\,\mathrm{kJ}$.
5. Entropia (contano entrambi i termini): $\Delta S = \tfrac32R\ln\dfrac{442{,}6}{600} + R\ln\dfrac{2{,}00}{1{,}00} \approx -3{,}80 + 5{,}76 \approx 1{,}96\,\mathrm{J/K}$.
:::

## Il secondo principio con l'entropia
**Una trasformazione di un sistema isolato non fa mai diminuire la sua entropia**: se la trasformazione è reversibile l'entropia resta costante, se è irreversibile aumenta.

$$\Delta S_{isolato} \ge 0$$

- trasformazione **reversibile**: $\Delta S = 0$;
- trasformazione **irreversibile** (tutte quelle reali): $\Delta S > 0$.

La condizione di **sistema isolato** è essenziale. L'entropia di un sistema **non isolato** può benissimo diminuire: un gas che cede calore in una compressione isoterma ha $\Delta S = Q/T < 0$. Non c'è violazione, perché il gas scambia calore con una sorgente: il sistema isolato è **gas + sorgente**. La sorgente riceve quel calore e la sua entropia aumenta almeno altrettanto, e il totale non scende. L'universo (sistema + ambiente) è isolato: **l'entropia dell'universo non diminuisce mai**.

::: esempio
**Sistema che perde entropia.** Un sistema perde 8 J/K. Allora $\Delta S_{amb} \ge +8$ J/K: esattamente 8 se il processo è reversibile, di più se è irreversibile.
:::

::: esempio
**Il calore che passa dal caldo al freddo aumenta l'entropia.** 1000 J passano da una sorgente a 400 K a una a 300 K. La calda perde $1000/400 = 2{,}50$ J/K, la fredda guadagna $1000/300 \approx 3{,}33$ J/K. Totale $\approx +0{,}83$ J/K $> 0$: il processo è spontaneo e irreversibile. Il passaggio inverso (dal freddo al caldo, da solo) darebbe $-0{,}83$ J/K: proibito.
:::

::: esempio
**Espansione libera.** Una mole di gas perfetto raddoppia il volume espandendosi nel vuoto: $Q = 0$, $L = 0$, $T$ costante. Non c'è calore scambiato, ma l'entropia aumenta lo stesso: la calcolo lungo un'isoterma reversibile con gli stessi stati, $\Delta S = R\ln 2 \approx 5{,}76$ J/K $> 0$. Il gas è isolato, quindi questo aumento conferma che il processo è irreversibile.
:::

::: esempio
**Entropia del gas e dell'universo.** 20 g di idrogeno (H₂, 2 g/mol, quindi $n = 10$ mol) a pressione atmosferica vengono scaldati a pressione costante da 30 °C a 40 °C tenendoli a contatto con un serbatoio a 50 °C.
1. Lavoro: $L = nR\Delta T = 10\cdot8{,}314\cdot10 \approx 831\,\mathrm J$.
2. Energia interna: $\Delta U = nC_V\Delta T = 10\cdot\tfrac52\cdot8{,}314\cdot10 \approx 2079\,\mathrm J$; calore $Q = nC_p\Delta T \approx 2910\,\mathrm J$.
3. Entropia del gas (isobara, calcolata come reversibile): $\Delta S_{gas} = nC_p\ln\dfrac{313{,}15}{303{,}15} \approx 291\cdot0{,}0325 \approx +9{,}44\,\mathrm{J/K}$.
4. Entropia del serbatoio (cede 2910 J a 323,15 K costanti): $\Delta S_{serb} = -2910/323{,}15 \approx -9{,}00\,\mathrm{J/K}$.
5. Universo: $\Delta S \approx +0{,}44\,\mathrm{J/K} > 0$: il riscaldamento con un serbatoio più caldo del gas è irreversibile.
:::

## Gli enunciati classici
Storicamente il secondo principio nacque dallo studio delle **macchine termiche** e dei loro limiti di rendimento (lezione 40).

**Enunciato di Kelvin-Planck**: è impossibile realizzare una trasformazione il cui **unico** risultato sia assorbire calore da **una sola** sorgente e trasformarlo **integralmente** in lavoro.

Conseguenza: **la trasformazione del calore in lavoro è possibile solo in parte**. Una macchina termica che lavora in ciclo ha bisogno di almeno **due** sorgenti e deve cedere una parte del calore a quella fredda: il suo rendimento è sempre minore di 1. Il contrario invece è possibile senza limiti: il lavoro si trasforma **interamente** in calore (attrito).

**Enunciato di Clausius**: è impossibile realizzare una trasformazione il cui **unico** risultato sia il passaggio di calore da un corpo a temperatura **più bassa** a uno a temperatura **più alta**.

Conseguenza: il calore **non passa mai spontaneamente** dal corpo più freddo al più caldo. Il frigorifero lo fa, ma consumando lavoro: il passaggio di calore non è l'unico risultato.

La parola chiave dei due enunciati è **"unico"**. Le trasformazioni descritte sono possibili, ma solo insieme ad altri effetti:
- in un'**espansione isoterma** un gas assorbe calore da una sola sorgente e lo trasforma tutto in lavoro; ma non è l'unico risultato, perché il gas finisce in uno stato diverso (volume maggiore). Per tornare all'inizio e ripetere il ciclo deve cedere calore a una sorgente più fredda;
- il **frigorifero** porta calore dal freddo al caldo, ma assorbe lavoro.

**Equivalenza.** I due enunciati sono equivalenti: se uno fosse falso lo sarebbe anche l'altro. Per esempio, se esistesse una macchina che trasforma tutto il calore di una sorgente in lavoro (violando Kelvin), si potrebbe usare quel lavoro per far girare un frigorifero e il risultato netto sarebbe calore passato dal freddo al caldo senza altri effetti (violando Clausius). Nella lezione 40 si mostra che entrambi seguono dal teorema di Carnot e dalla legge dell'entropia.

::: attenzione
**Non** violano il secondo principio: trasformare tutto il lavoro in calore; far passare calore dal caldo al freddo; comprimere un gas; un frigorifero che consuma lavoro; un'espansione isoterma singola. **Viola** il secondo principio: una macchina **ciclica** che trasforma in lavoro **tutto** il calore preso da **un'unica** sorgente, o un frigorifero che funziona senza lavoro.
:::

## Entropia e disordine: l'interpretazione statistica
Microscopicamente l'entropia misura il **disordine**, cioè il numero di modi in cui le molecole possono realizzare lo stesso stato macroscopico.

Un esempio quotidiano: un mazzo di carte nuovo, ordinato, mescolato tante volte non torna mai nell'ordine iniziale. Non è vietato da nessuna legge: semplicemente la sequenza ordinata è **una sola**, mentre le sequenze "disordinate" sono un numero enorme. Il sistema evolve verso le configurazioni **più probabili**.

Lo stesso per un gas. $N$ molecole possono stare ciascuna, con uguale probabilità, nella metà A o nella metà B di un recipiente. C'è **un solo** modo di averle tutte in B; ci sono $N$ modi di averne una in A e le altre in B; il numero di modi cresce ancora man mano che la distribuzione si avvicina a metà e metà, che è la più probabile di tutte. Per questo un gas riempie tutto il recipiente e non si raccoglie mai in una metà.

Chiamiamo $W$ il numero di configurazioni microscopiche (realizzazioni) che corrispondono a uno stato macroscopico. L'entropia deve essere:
- una funzione **crescente** di $W$ (il sistema va verso gli stati più probabili e l'entropia cresce);
- **additiva**: per due sottosistemi $S_{A+B} = S_A + S_B$, mentre i modi si **moltiplicano**: $W_{A+B} = W_A\,W_B$.

L'unica funzione che trasforma prodotti in somme è il **logaritmo**. Si arriva alla formula di Boltzmann:

$$S = k_B\ln W$$

dove $k_B = 1{,}38\cdot10^{-23}\,\mathrm{J/K}$ è la costante di Boltzmann e $W$ il numero di configurazioni microscopiche possibili.

L'entropia misura quindi quante combinazioni microscopiche descrivono uno stato. I processi spontanei vanno verso le configurazioni più probabili, cioè verso il **massimo dell'entropia**: è il secondo principio visto dal mondo delle molecole.

::: esame
Domande chiuse: cosa è possibile solo in parte secondo il secondo principio (la trasformazione del calore in lavoro); cosa si deriva dal secondo principio (il calore non passa mai spontaneamente dal freddo al caldo); entropia di un'espansione isoterma ($\Delta S = Q/T = L/T$, temperatura in kelvin).

Domanda aperta: "Esporre il secondo principio della termodinamica". Punti da toccare:
1. il primo principio non dice il verso delle trasformazioni; esempi di processi irreversibili;
2. enunciato di Kelvin-Planck e conseguenza (il calore si converte in lavoro solo in parte, servono due sorgenti, rendimento minore di 1);
3. enunciato di Clausius e conseguenza (frigorifero che consuma lavoro); la parola "unico"; equivalenza dei due enunciati;
4. entropia: funzione di stato, $\Delta S = \int\delta Q_{rev}/T$ in J/K, isoterma $Q/T$;
5. formulazione: in un sistema isolato $\Delta S \ge 0$ (= 0 reversibile, > 0 irreversibile); un sistema non isolato può diminuire la sua entropia;
6. interpretazione statistica $S = k_B\ln W$ (disordine, stati più probabili); collegamento con Carnot: nessuna macchina supera $1 - T_F/T_C$.
:::

::: sintesi
- Il secondo principio fissa il verso delle trasformazioni spontanee.
- Entropia: funzione di stato, $\Delta S = \int\delta Q_{rev}/T$ (J/K); isoterma $\Delta S = Q/T$; adiabatica reversibile $\Delta S = 0$.
- Gas perfetto: $\Delta S = nC_V\ln(T_f/T_i) + nR\ln(V_f/V_i)$.
- Sistema isolato: $\Delta S = 0$ se reversibile, $\Delta S > 0$ se irreversibile; mai negativa.
- Kelvin-Planck: il calore di un'unica sorgente non diventa tutto lavoro (calore → lavoro solo in parte).
- Clausius: il calore non passa da solo dal freddo al caldo. Parola chiave "unico"; enunciati equivalenti.
- $S = k_B\ln W$: l'entropia misura il disordine; i sistemi vanno verso gli stati più probabili.
:::

=== 40 dispense
SLIDES: 40
# Lezione 40 — Macchine termiche, ciclo di Carnot, frigoriferi ed entropia

## Introduzione
Le **macchine termiche** sono dispositivi che producono lavoro ripetendo un ciclo di trasformazioni in cui scambiano calore con l'ambiente. I due principi della termodinamica ne fissano i limiti: il primo dice che il lavoro non può superare il calore assorbito; il secondo che non può nemmeno eguagliarlo. Il prototipo ideale è la macchina di **Carnot**, che fa da termine di confronto per le macchine reali; invertendo il suo ciclo si ottiene il prototipo del **frigorifero**. In questa lezione definiamo il rendimento, studiamo il ciclo di Carnot con tutti i passaggi, dimostriamo il teorema di Carnot e rileggiamo il secondo principio con l'entropia.

## Macchina termica
Una **macchina termica** usa un fluido (per esempio un gas) che percorre un **ciclo**. A ogni ciclo:
1. assorbe il calore $Q_C$ dalla **sorgente calda** (temperatura $T_C$);
2. compie il lavoro $L$;
3. cede il calore $Q_F$ alla **sorgente fredda** (temperatura $T_F$), di solito l'ambiente.

In un ciclo il fluido torna allo stato iniziale, quindi $\Delta U = 0$ e per il primo principio il lavoro netto è uguale al calore netto scambiato:

$$L = Q_C - Q_F$$

dove $Q_C$ e $Q_F$ sono i **valori assoluti** dei calori (in J) e $L$ è il lavoro per ciclo (in J). Con i segni algebrici si scriverebbe $L = Q_{ass} + Q_{ced}$ con $Q_{ced} < 0$.

## Rendimento
Il **rendimento** è la frazione del calore assorbito che diventa lavoro utile:

$$\eta = \frac{L}{Q_C} = \frac{Q_C - Q_F}{Q_C} = 1 - \frac{Q_F}{Q_C}$$

dove:
- $\eta$ = rendimento, numero puro tra 0 e 1 (spesso in percentuale)
- $L$ = lavoro per ciclo, in J
- $Q_C$ = calore **assorbito** dalla sorgente calda, in J
- $Q_F$ = calore **ceduto** alla sorgente fredda, in J (in valore assoluto)

Per il secondo principio (Kelvin-Planck) $Q_F$ non può essere zero, quindi **$\eta < 1$ sempre**.

::: esempio
**Macchina a vapore.** Assorbe 85 kcal dal generatore e ne cede 78 al condensatore a ogni ciclo.
$$L = Q_C - Q_F = 85 - 78 = 7\,\mathrm{kcal} = 7\cdot4186 \approx 29\,\mathrm{kJ}$$
Rendimento: $7/85 \approx 8\%$.
:::

::: esempio
**Dati lavoro e calore ceduto.** Una macchina produce 10 kJ di lavoro cedendo 35 kJ alla sorgente fredda. Il calore assorbito è $Q_C = L + Q_F = 10 + 35 = 45$ kJ, quindi
$$\eta = \frac{10}{45} \approx 0{,}22$$
Errore tipico: dividere 10 per 35 (0,29), usando il calore ceduto al posto di quello assorbito.
:::

::: esempio
**Dati i due calori.** Una macchina assorbe 450 kcal e ne cede 150: $\eta = 1 - \dfrac{150}{450} = 1 - \dfrac13 = \dfrac23$. Qui non serve convertire in joule: si fa un rapporto.
:::

::: attenzione
Leggi bene **quale** calore dà il testo. Se è il calore **assorbito**, $\eta = L/Q$. Se è il calore **ceduto**, prima calcola $Q_C = L + Q_F$. Una domanda dice che una macchina "produce 8200 J di calore" compiendo 3200 J di lavoro: il paniere intende 8200 J come calore assorbito, $\eta = 3200/8200 \approx 0{,}39$. Se fossero il calore ceduto, si avrebbe $Q_C = 11\,400$ J e $\eta \approx 0{,}28$.
:::

## Il ciclo di Carnot
È il ciclo ideale di una macchina che scambia calore con **due sole sorgenti** a temperature $T_C > T_F$. È fatto di quattro trasformazioni **reversibili** di un gas perfetto: due isoterme e due adiabatiche.

1. **A → B, espansione isoterma** a $T_C$: il gas, a contatto con la sorgente calda, si espande e assorbe calore. $\Delta U = 0$, quindi
$$Q_C = L_{AB} = nRT_C\ln\frac{V_B}{V_A} > 0 \qquad \Delta S_{AB} = \frac{Q_C}{T_C} = nR\ln\frac{V_B}{V_A}$$
2. **B → C, espansione adiabatica**: il gas viene isolato termicamente e continua a espandersi; $Q = 0$, $\Delta S = 0$. Compie lavoro a spese dell'energia interna e si raffredda da $T_C$ a $T_F$: $L_{BC} = -\Delta U = nC_V(T_C - T_F)$.
3. **C → D, compressione isoterma** a $T_F$: a contatto con la sorgente fredda il gas viene compresso e cede calore:
$$Q_{CD} = nRT_F\ln\frac{V_D}{V_C} < 0, \qquad Q_F = |Q_{CD}| = nRT_F\ln\frac{V_C}{V_D}$$
4. **D → A, compressione adiabatica**: di nuovo isolato, il gas viene compresso e si scalda da $T_F$ a $T_C$, tornando ad A. $Q = 0$, $L_{DA} = nC_V(T_F - T_C)$.

I lavori delle due adiabatiche sono uguali e opposti e si cancellano. Il lavoro netto è l'area racchiusa dal ciclo, $L = Q_C - Q_F$.

### Il rendimento di Carnot: due derivazioni
**Con le adiabatiche.** Le due adiabatiche collegano le stesse due isoterme:
- B → C: $T_CV_B^{\gamma-1} = T_FV_C^{\gamma-1}$;
- D → A: $T_CV_A^{\gamma-1} = T_FV_D^{\gamma-1}$.

Divido la prima per la seconda: $\left(\dfrac{V_B}{V_A}\right)^{\gamma-1} = \left(\dfrac{V_C}{V_D}\right)^{\gamma-1}$, quindi $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$. I due logaritmi nei calori sono uguali e si semplificano:
$$\frac{Q_F}{Q_C} = \frac{nRT_F\ln(V_C/V_D)}{nRT_C\ln(V_B/V_A)} = \frac{T_F}{T_C}$$

**Con l'entropia.** In un ciclo l'entropia del gas (funzione di stato) torna al valore iniziale: $\Delta S_{ciclo} = 0$. Cambia solo nelle isoterme: $+Q_C/T_C$ nella prima, $-Q_F/T_F$ nella seconda. Quindi $\dfrac{Q_C}{T_C} = \dfrac{Q_F}{T_F}$, la stessa relazione.

Sostituendo nel rendimento:

$$\eta_C = 1 - \frac{Q_F}{Q_C} = 1 - \frac{T_F}{T_C}$$

dove $T_F$ e $T_C$ sono le temperature delle sorgenti **in kelvin**.

Il rendimento di Carnot:
- è **sempre minore di 1** (servirebbe $T_F = 0$ K, irraggiungibile);
- dipende **solo dalle due temperature**, non dal gas né dai dettagli della macchina;
- **aumenta** se si alza $T_C$ o si abbassa $T_F$ (cresce il rapporto $T_C/T_F$).

::: esempio
**Calcoli diretti (sempre in kelvin).**
- Tra 27 °C e 127 °C: $\eta = 1 - \dfrac{300}{400} = 0{,}25$. (Con i Celsius si otterrebbe $1 - 27/127 \approx 0{,}79$: sbagliato.)
- Tra 20 °C e 200 °C: $\eta = 1 - \dfrac{293{,}15}{473{,}15} \approx 1 - 0{,}62 = 0{,}38$, cioè 38%.
- Tra 300 K e 450 K: $\eta_{max} = 1 - \dfrac{300}{450} \approx 0{,}33$. È il **massimo** rendimento ottenibile da qualunque macchina tra queste temperature.
:::

::: esempio
**Lavoro di una macchina di Carnot.** Tra $T_C = 450$ K e $T_F = 320$ K, assorbendo 2500 J per ciclo:
$$\eta = 1 - \frac{320}{450} \approx 0{,}289 \qquad L = \eta\,Q_C \approx 0{,}289\cdot2500 \approx 720\,\mathrm J$$
Il calore ceduto è $2500 - 720 = 1780$ J (controllo: $Q_F/Q_C = 1780/2500 \approx 0{,}71 = 320/450$).
:::

::: esempio
**Temperatura calda necessaria.** Lo scarico di una macchina è a 230 °C (503 K). Quale temperatura calda serve per un rendimento di Carnot del 28%?
$$1 - \frac{T_F}{T_C} = 0{,}28 \;\Rightarrow\; \frac{T_F}{T_C} = 0{,}72 \;\Rightarrow\; T_C = \frac{503}{0{,}72} \approx 699\,\mathrm K \approx 426\,^\circ\mathrm C$$
:::

## Altri cicli: rendimento minore di Carnot
::: esempio
**Ciclo rettangolare (due isocore e due isobare).** Una mole di gas monoatomico percorre A → B (isocora, la pressione raddoppia) → C (isobara, il volume raddoppia) → D (isocora, la pressione torna a $p_A$) → A (isobara). $p_A = 1$ atm, $V_A = 0{,}0225\,\mathrm{m^3}$, $p_C = 2p_A$, $V_C = 2V_A$.
1. Lavoro: area del rettangolo, $L = (2p_A - p_A)(2V_A - V_A) = p_AV_A = 1{,}013\cdot10^5\cdot0{,}0225 \approx 2280\,\mathrm J$.
2. Calore assorbito (in A → B → C la temperatura sale; in C → D → A scende):
   - A → B: $Q = nC_V\Delta T = \tfrac32V_A\Delta p = \tfrac32p_AV_A$;
   - B → C: $Q = nC_p\Delta T = \tfrac52p_B\Delta V = \tfrac52\cdot2p_AV_A = 5p_AV_A$;
   - totale $Q_{ABC} = 6{,}5\,p_AV_A \approx 14{,}8\,\mathrm{kJ}$.
3. Rendimento: $\eta = \dfrac{L}{Q_{ABC}} = \dfrac{1}{6{,}5} \approx 0{,}154$.
4. Carnot tra la temperatura minima (in A) e massima (in C, dove $pV$ è 4 volte quello di A): $\eta_C = 1 - \dfrac{T_A}{4T_A} = 0{,}75$. Il ciclo rettangolare rende circa un quinto di Carnot, come previsto dal teorema di Carnot.
:::

::: esempio
**Ciclo isocora – isoterma – isobara.** Gas monoatomico: A (5,00 L, 1 atm, 300 K) → B isocora fino a 3 atm → C isoterma fino a 1 atm → A isobara.
1. $n = \dfrac{p_AV_A}{RT_A} = \dfrac{1{,}013\cdot10^5\cdot5\cdot10^{-3}}{8{,}314\cdot300} \approx 0{,}203\,\mathrm{mol}$; $T_B = 3T_A = 900\,\mathrm K$; $V_C = 3V_A = 15\,\mathrm L$, $T_C = 900$ K.
2. A → B: $L = 0$, $Q = \Delta U = \tfrac32nR(T_B - T_A) = \tfrac32V_A\Delta p \approx 1{,}52\,\mathrm{kJ}$.
3. B → C: $\Delta U = 0$, $Q = L = nRT_B\ln3 = p_BV_B\ln 3 \approx 1{,}67\,\mathrm{kJ}$.
4. C → A: $L = p_A(V_A - V_C) \approx -1{,}01\,\mathrm{kJ}$, $\Delta U \approx -1{,}52\,\mathrm{kJ}$, $Q = \Delta U + L \approx -2{,}53\,\mathrm{kJ}$.
5. Ciclo: $L_{tot} \approx 0{,}66\,\mathrm{kJ} = Q_{tot}$, $\Delta U_{tot} = 0$. Rendimento: $0{,}66/(1{,}52 + 1{,}67) \approx 0{,}21$, contro Carnot tra 300 e 900 K: $1 - 1/3 \approx 0{,}67$.
:::

::: esempio
**Ciclo Otto (motore a benzina).** Schema: compressione adiabatica, scoppio a volume costante (la pressione triplica), espansione adiabatica, scarico a volume costante; rapporto di compressione $r = V_{max}/V_{min} = 4$. Nelle adiabatiche non c'è calore; il calore entra nello scoppio ($nC_V(T_2 - T_1)$) ed esce nello scarico. Usando $TV^{\gamma-1}$ costante sulle due adiabatiche, le temperature allo scarico sono quelle allo scoppio divise per $r^{\gamma-1}$, e si trova
$$\eta_{Otto} = 1 - \frac{1}{r^{\gamma - 1}}$$
Con $\gamma = 1{,}4$: $\eta = 1 - 4^{-0{,}4} \approx 0{,}43$. Carnot tra le temperature estreme del ciclo (massima dopo lo scoppio, $3T_1$; minima alla fine dello scarico, $T_1/4^{\gamma-1}$) darebbe $1 - \dfrac{1}{3\cdot4^{0{,}4}} \approx 0{,}81$.
:::

::: esempio
**Ciclo con due adiabatiche e due isobare.** Una mole di gas ideale: A → B isobara con $V_B = 2V_A$; B → C adiabatica; C → D isobara; D → A adiabatica; $V_D = 8V_A$, $V_C = 16V_A$, $p_D = p_A/32$.
1. Tipo di gas: sull'adiabatica DA, $p_AV_A^\gamma = p_DV_D^\gamma$, cioè $32 = 8^\gamma = 2^{3\gamma}$, quindi $3\gamma = 5$, $\gamma = 5/3$: **monoatomico**.
2. Calore assorbito in AB: $Q_{AB} = nC_p\Delta T = \tfrac52p_A(2V_A - V_A) = 2{,}5\,p_AV_A$. Calore ceduto in CD: $|Q_{CD}| = \tfrac52p_D(V_C - V_D) = \tfrac52\cdot\tfrac{p_A}{32}\cdot8V_A = 0{,}625\,p_AV_A$.
3. Rendimento: $\eta = 1 - \dfrac{0{,}625}{2{,}5} = 0{,}75$.
:::

## Teorema di Carnot
Il teorema dice due cose:
1. **Tutte le macchine reversibili** che lavorano tra le **stesse due temperature** hanno lo **stesso rendimento**, $1 - T_F/T_C$, qualunque sia il fluido.
2. **Nessuna macchina** (reale, irreversibile) che lavora tra quelle due temperature può avere un rendimento **maggiore** di quello di Carnot. Le macchine reali hanno rendimento minore.

**Dimostrazione per assurdo** (della seconda parte, che contiene anche la prima):
1. Supponiamo che esista una macchina X, tra $T_C$ e $T_F$, con $\eta_X > \eta_C$.
2. Il ciclo di Carnot è reversibile: lo facciamo girare **al contrario** come frigorifero (C inverso), e lo regoliamo in modo che usi esattamente il lavoro $L$ prodotto da X. Il sistema X + C inverso non scambia lavoro con l'esterno.
3. Da $\eta_X > \eta_C$ con lo stesso $L$: $\dfrac{L}{Q_C^X} > \dfrac{L}{Q_C^{C}}$, quindi $Q_C^X < Q_C^C$: X prende dalla sorgente calda meno calore di quanto C inverso gliene restituisce.
4. Per il primo principio, in ciascuna macchina $L = Q_C - Q_F$; essendo $L$ uguale, anche $Q_F^X < Q_F^C$: C inverso preleva dalla sorgente fredda più calore di quanto X gliene dia.
5. Risultato netto: un calore positivo $Q_C^C - Q_C^X = Q_F^C - Q_F^X$ passa dalla sorgente **fredda** a quella **calda**, senza lavoro esterno e senza altri effetti.
6. Questo viola l'**enunciato di Clausius**. Quindi la premessa è falsa: **non esiste macchina con rendimento maggiore di Carnot**. Se X è a sua volta reversibile, si può scambiare il ruolo delle due macchine e si trova $\eta_C \le \eta_X$: le due macchine reversibili hanno lo stesso rendimento.

**Come migliorare il rendimento**: bisogna **aumentare la temperatura della sorgente calda e diminuire quella della sorgente fredda**. Le macchine reali cercano di avvicinarsi a Carnot riducendo attriti e irreversibilità.

## Dal teorema di Carnot ai due enunciati
- **Kelvin-Planck**: il rendimento massimo è $1 - T_F/T_C$, che vale 1 solo se $T_F = 0$ K, irraggiungibile. Un motore che trasforma in lavoro **tutto** il calore assorbito da **un'unica** sorgente a temperatura finita non può esistere.
- **Clausius**: immaginiamo un **frigorifero perfetto** che porta il calore $Q$ dalla sorgente fredda alla calda senza assorbire lavoro. Nel ciclo il fluido ha $\Delta S = 0$; la sorgente fredda perde $Q/T_F$, la calda guadagna $Q/T_C$, che è **più piccolo** perché $T_C > T_F$. L'entropia del sistema isolato complessivo diminuirebbe di $Q/T_F - Q/T_C > 0$: viola il secondo principio. Il frigorifero perfetto non esiste.

## Frigorifero e pompa di calore
Una **macchina frigorifera** (o pompa di calore) fa il contrario di una macchina termica: **riceve lavoro** $L$, **preleva** il calore $Q_F$ dalla sorgente fredda (l'interno del frigorifero) e **cede** $Q_C$ alla sorgente calda (la cucina). Il ciclo frigorifero ideale è il **ciclo di Carnot percorso al contrario** (possibile perché è reversibile). Per il primo principio:

$$Q_C = Q_F + L$$

L'efficienza si misura con il **coefficiente di prestazione** (COP, dall'inglese *coefficient of performance*): il rapporto tra il calore tolto alla sorgente fredda e il lavoro speso.

$$COP = \frac{Q_F}{L}$$

dove:
- $COP$ = coefficiente di prestazione, numero puro
- $Q_F$ = calore tolto alla sorgente fredda, in J
- $L$ = lavoro fornito, in J

Il COP è **sempre positivo** (è un rapporto di quantità positive) e di solito è **maggiore di 1**: si sposta più calore di quanto lavoro si spende. Non è un "rendimento" limitato a 1. Per un frigorifero di Carnot, usando $Q_C/Q_F = T_C/T_F$:
$$COP_{Carnot} = \frac{Q_F}{Q_C - Q_F} = \frac{T_F}{T_C - T_F}$$
Più le due temperature sono vicine, più il COP è grande.

::: esempio
**COP di un refrigeratore.** Con 18 kJ di lavoro il refrigeratore toglie 115 kJ dal suo interno:
$$COP = \frac{115}{18} \approx 6{,}4$$
All'ambiente cede $115 + 18 = 133$ kJ.
:::

::: esempio
**COP massimo.** Un frigorifero con interno a 270 K in una cucina a 300 K: $COP_{max} = \dfrac{270}{300 - 270} = 9$. Per ogni joule di lavoro si possono togliere al massimo 9 J dall'interno.
:::

## Entropia: riepilogo per la domanda aperta
L'**entropia** $S$ è una **funzione di stato** introdotta dal secondo principio.
- **Definizione**: $\Delta S = \displaystyle\int_A^B\frac{\delta Q_{rev}}{T}$, calcolata lungo una trasformazione reversibile; si misura in J/K. In un'isoterma $\Delta S = Q/T$.
- **Ciclo reversibile** (Carnot): $\Delta S_{gas} = 0$ e $Q_C/T_C = Q_F/T_F$.
- **Secondo principio**: in un sistema isolato $\Delta S \ge 0$ (uguale a 0 solo se tutto è reversibile, positiva nei processi reali). L'entropia dell'universo cresce: indica il **verso spontaneo** delle trasformazioni ("freccia del tempo").
- **Significato microscopico**: $S = k_B\ln W$, misura del **disordine**, cioè del numero di configurazioni microscopiche compatibili con lo stato; i sistemi isolati evolvono verso gli stati più probabili.
- **Sistemi non isolati**: l'entropia può diminuire (gas che cede calore), ma quella della sorgente aumenta almeno altrettanto.

::: esame
Domande chiuse: temperatura calda per un dato rendimento ($T_C = T_F/(1 - \eta)$, in kelvin); conseguenza del teorema di Carnot (stesso rendimento per tutte le reversibili tra le stesse temperature); lavoro = calore assorbito − calore ceduto (con conversione kcal → kJ); COP $= Q_F/L$; rendimento di Carnot (in kelvin); come migliorare il rendimento (alzare $T_C$, abbassare $T_F$); lavoro di una Carnot ($\eta\,Q_C$); COP sempre maggiore di zero; rendimento con lavoro e calore ceduto ($Q_C = L + Q_F$); rendimento massimo tra due temperature; rendimento da due calori.

Domanda aperta: "Cosa è l'entropia in termodinamica". Rispondi così: funzione di stato; definizione $\Delta S = \int\delta Q_{rev}/T$ in J/K (isoterma $Q/T$); si calcola su un percorso reversibile anche per processi irreversibili; in un sistema isolato non diminuisce mai (costante se reversibile, cresce se irreversibile): è il secondo principio; esempio: calore che passa dal caldo al freddo fa crescere l'entropia totale; interpretazione statistica $S = k_B\ln W$ (disordine); indica il verso spontaneo delle trasformazioni.
:::

::: sintesi
- Macchina termica: $L = Q_C - Q_F$; $\eta = L/Q_C = 1 - Q_F/Q_C < 1$.
- Carnot: 2 isoterme + 2 adiabatiche reversibili; $Q_F/Q_C = T_F/T_C$; $\eta_C = 1 - T_F/T_C$ in kelvin, dipende solo dalle temperature.
- Teorema di Carnot: tutte le reversibili tra le stesse temperature hanno lo stesso rendimento; nessuna macchina fa meglio (altrimenti si viola Clausius).
- Rendimento più alto: $T_C$ più alta, $T_F$ più bassa; $\eta = 1$ richiederebbe $T_F = 0$ K.
- Frigorifero: $Q_C = Q_F + L$; $COP = Q_F/L > 0$, spesso maggiore di 1; Carnot: $T_F/(T_C - T_F)$.
- Entropia: $\Delta S = \int\delta Q_{rev}/T$; sistema isolato $\Delta S \ge 0$; $S = k_B\ln W$.
:::
