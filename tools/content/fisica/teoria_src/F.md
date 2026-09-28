=== 34 dispense
# Lezione 34 — Calore, calorimetria, dilatazione e passaggi di stato

## Temperatura ed equilibrio termico
La temperatura descrive lo stato termico di un corpo: quanto è "caldo" o "freddo". Due corpi a temperature diverse, messi a contatto, si scambiano energia. Il più caldo si raffredda, il più freddo si scalda. Alla fine raggiungono la stessa temperatura: sono in **equilibrio termico**.

**Principio zero della termodinamica**: se due corpi sono in equilibrio termico con un terzo, sono in equilibrio termico anche tra loro. Per questo un termometro funziona: se segna lo stesso valore su due corpi, i due corpi hanno la stessa temperatura.

::: attenzione
La sensazione della mano non misura la temperatura. Marmo e tappeto nella stessa stanza hanno la stessa temperatura. Il marmo sembra più freddo perché conduce meglio il calore: porta via energia dal piede più in fretta.
:::

## Scale di temperatura
- **Celsius**: 0 °C = ghiaccio che fonde, 100 °C = acqua che bolle (a livello del mare).
- **Kelvin** (unità SI): 0 K = zero assoluto, la temperatura più bassa possibile. Il punto triplo dell'acqua vale 273,16 K. La temperatura in kelvin è sempre positiva.

$$T(\mathrm K) = T(^\circ\mathrm C) + 273{,}15$$

dove:
- $T(\mathrm K)$ = temperatura assoluta, in kelvin
- $T(^\circ\mathrm C)$ = temperatura in gradi Celsius

Un salto di 1 K è uguale a un salto di 1 °C. Il ghiaccio fonde a circa 273 K; 27 °C sono circa 300 K.

## Temperatura e teoria cinetica
In un gas le molecole si muovono in modo disordinato. La temperatura assoluta è **direttamente proporzionale** all'energia cinetica media delle molecole. Vale per qualunque gas, monoatomico o no.

$$\bar E_k = \frac32 k_B T$$

dove:
- $\bar E_k$ = energia cinetica media di traslazione di una molecola, in J
- $k_B = 1{,}38 \cdot 10^{-23}\,\mathrm{J/K}$ = costante di Boltzmann
- $T$ = temperatura assoluta, in K

Se le molecole rallentano, la temperatura e l'energia interna diminuiscono.

## Calore
Il **calore** $Q$ è l'energia che passa da un corpo all'altro perché hanno temperature diverse. Va sempre dal più caldo al più freddo. Si misura in joule. La vecchia unità è la caloria: $1\,\mathrm{cal} = 4{,}186\,\mathrm J$. Una caloria scalda 1 g d'acqua di 1 °C.

**Calore e temperatura non sono la stessa cosa.** La temperatura è una proprietà dello stato del corpo. Il calore è energia in transito. Un corpo non "contiene calore": contiene energia interna.

Anche il lavoro può scaldare un corpo. L'attrito trasforma energia meccanica in energia termica. Una pallottola che rallenta dentro un albero produce calore pari all'energia cinetica persa.

## Capacità termica e calore specifico
Il **calore specifico** $c$ dice quanta energia serve per scaldare 1 kg di una sostanza di 1 K. Dipende solo dal materiale, non dalla massa.

$$Q = m\,c\,\Delta T \qquad C = m\,c$$

dove:
- $Q$ = calore assorbito (positivo) o ceduto (negativo), in J
- $m$ = massa, in kg
- $c$ = calore specifico, in $\mathrm{J/(kg\,K)}$
- $\Delta T$ = variazione di temperatura, in K (o °C, è lo stesso)
- $C$ = capacità termica del corpo, in J/K

Valori utili: acqua $4186\,\mathrm{J/(kg\,K)}$ (= 1 kcal/(kg °C)), alluminio 900, rame 385, piombo 128.

Conseguenze dirette di $\Delta T = Q/(mc)$:
- stesso calore, massa doppia → aumento di temperatura dimezzato;
- stesso calore e stessa massa → la sostanza con $c$ maggiore si scalda **meno**.

::: esempio
Scaldare 2,5 kg d'acqua di 25 °C: $Q = 2{,}5 \cdot 4186 \cdot 25 \approx 261{,}6\,\mathrm{kJ}$.
Scaldare 5 kg di piombo da 20 °C a 327 °C: $Q = 5 \cdot 128 \cdot 307 \approx 196{,}5\,\mathrm{kJ}$.
:::

## Calorimetria: la temperatura di equilibrio
In un sistema isolato il calore ceduto dal corpo caldo è uguale al calore assorbito dal freddo. La somma di tutti i calori è zero.

$$m_1c_1(T_e - T_1) + m_2c_2(T_e - T_2) = 0 \;\Rightarrow\; T_e = \frac{m_1c_1T_1 + m_2c_2T_2}{m_1c_1 + m_2c_2}$$

dove:
- $T_e$ = temperatura di equilibrio
- $m_1, c_1, T_1$ e $m_2, c_2, T_2$ = massa, calore specifico e temperatura iniziale dei due corpi

$T_e$ è sempre **intermedia** tra le due temperature iniziali. È la media semplice solo se le capacità termiche $mc$ sono uguali.

::: esempio
2 kg d'acqua a 80 °C con 1 kg d'acqua a 20 °C: $T_e = (2\cdot 80 + 1\cdot 20)/3 = 60\,^\circ\mathrm C$.
Due corpi con la stessa capacità termica a 15 °C e 25 °C: $T_e = 20\,^\circ\mathrm C \approx 293\,\mathrm K$.
:::

Se ci sono più corpi (acqua, recipiente, metallo), si somma un termine $mc(T_e - T_i)$ per ciascuno.

## Passaggi di stato e calore latente
Un **passaggio di stato** è il cambiamento di fase di una sostanza: fusione (solido → liquido), solidificazione, evaporazione, condensazione, sublimazione. Avviene a una temperatura precisa, che dipende dalla pressione.

Durante il passaggio di stato **la temperatura resta costante**. Il calore fornito non scalda la sostanza: serve a rompere i legami tra le molecole. L'energia interna aumenta, la temperatura no.

$$Q = m\,\lambda$$

dove:
- $Q$ = calore per il passaggio di stato, in J
- $m$ = massa che cambia stato, in kg
- $\lambda$ = calore latente (di fusione o di evaporazione), in J/kg

Valori dell'acqua: fusione $\lambda_f \approx 333\,\mathrm{kJ/kg} = 80\,\mathrm{kcal/kg} = 80\,\mathrm{cal/g}$; evaporazione $\lambda_{ev} \approx 2260\,\mathrm{kJ/kg} = 539\,\mathrm{kcal/kg}$.

::: esempio
Con 180 kcal evaporano $m = 180/539 \approx 0{,}33\,\mathrm{kg}$ d'acqua, cioè 0,33 litri.
Per fondere 2,16 kg di piombo ($\lambda_f = 23{,}2\,\mathrm{kJ/kg}$): $Q = 2{,}16 \cdot 23{,}2 \approx 50\,\mathrm{kJ}$.
Se si tolgono 50,4 kJ a 258 g d'acqua a 0 °C, gelano $50{,}4/333 \approx 151\,\mathrm g$: restano 107 g di acqua liquida.
:::

Se scaldi del ghiaccio da −20 °C a +20 °C, la temperatura sale fino a 0 °C, resta ferma finché tutto il ghiaccio è fuso, poi riprende a salire. La curva è "a gradini".

Il cubetto di ghiaccio raffredda l'acqua perché, per fondere, prende energia dall'acqua. Per lo stesso motivo 10 cm³ di ghiaccio a 0 °C raffreddano una bibita più di 10 cm³ di acqua a 0 °C: il ghiaccio deve anche fondere.

## Dilatazione termica
Quasi tutti i corpi si allungano quando si scaldano e si accorciano quando si raffreddano.

$$\Delta L = L_0\,\alpha\,\Delta T \qquad L = L_0(1 + \alpha\Delta T)$$

dove:
- $\Delta L$ = variazione di lunghezza, in m
- $L_0$ = lunghezza iniziale, in m
- $\alpha$ = coefficiente di dilatazione lineare, in $\mathrm K^{-1}$ (ferro: $12\cdot 10^{-6}\,\mathrm K^{-1}$)
- $\Delta T$ = variazione di temperatura, in K

Per il volume: $\Delta V = V_0\,\beta\,\Delta T$, con $\beta = 3\alpha$.

In una sbarra lunga si dilatano tutte le dimensioni. Ma la sezione è piccola, quindi la sua dilatazione è trascurabile rispetto a quella in lunghezza. Il $\Delta L$ è piccolo: un filo che si raffredda da 60 °C a 30 °C si accorcia un po', non si dimezza.

Un pendolo con filo metallico, riscaldato, ha il filo più lungo. Il periodo $T = 2\pi\sqrt{l/g}$ quindi aumenta.

## Trasmissione del calore
Il calore si trasmette in tre modi.
- **Conduzione**: per contatto, senza spostamento di materia. L'agitazione delle molecole passa dalle zone calde a quelle fredde. Prevale nei solidi, soprattutto nei metalli. Potenza trasmessa da una parete: $W = kS\Delta T/l$ ($k$ = conducibilità termica, $S$ = superficie, $l$ = spessore).
- **Convezione**: con spostamento di materia, nei fluidi. Il fluido scaldato dal basso si dilata, diventa più leggero e sale; quello freddo scende. Si formano correnti convettive.
- **Irraggiamento**: tramite onde elettromagnetiche (soprattutto infrarosse). Trasporta energia anche nel vuoto, senza contatto. Tutti i corpi irraggiano, tanto più quanto sono caldi ($W = \varepsilon\sigma S T^4$).

Esempi di irraggiamento diversi dal Sole: il calore che senti davanti a un camino o a una stufa, le braci, una lampadina a incandescenza, il corpo umano che emette infrarossi (visibili con una termocamera).

Il thermos li blocca tutti e tre: vetro poco conduttore, vuoto tra le pareti contro la convezione, pareti a specchio contro l'irraggiamento.

::: esame
Domande aperte frequenti: differenza tra calore e temperatura; definizione di calore specifico e calore latente; cosa succede a due corpi a contatto; i tre meccanismi di trasmissione del calore.
:::

::: sintesi
- Temperatura: stato termico; in kelvin è proporzionale all'energia cinetica media delle molecole ($\bar E_k = \tfrac32 k_BT$).
- Calore: energia che passa dal caldo al freddo; $Q = mc\Delta T$.
- Equilibrio: calore ceduto = calore assorbito; $T_e$ sempre intermedia.
- Passaggi di stato: $Q = m\lambda$ a temperatura costante (ghiaccio 80 cal/g).
- Dilatazione: $\Delta L = L_0\alpha\Delta T$.
- Trasmissione: conduzione (solidi), convezione (fluidi), irraggiamento (onde e.m., anche nel vuoto).
:::

=== 35 dispense
# Lezione 35 — Trasformazioni termodinamiche e gas perfetti

## Sistemi e variabili di stato
Un **sistema termodinamico** è una parte di mondo descritta da poche grandezze macroscopiche: pressione $p$, volume $V$, temperatura $T$. Si chiamano **variabili di stato**. Tutto il resto è l'**ambiente**.
- Sistema **aperto**: scambia materia ed energia.
- Sistema **chiuso**: scambia energia ma non materia.
- Sistema **isolato**: non scambia né materia né energia.

Un sistema è in **equilibrio** quando le sue variabili di stato sono uniformi e costanti nel tempo.

## L'equazione di stato dei gas perfetti
Un gas perfetto (o ideale) è un gas rarefatto: molecole piccole e lontane, che non si attraggono. I gas reali si comportano così a bassa pressione.

$$pV = nRT$$

dove:
- $p$ = pressione, in Pa
- $V$ = volume, in m³
- $n$ = numero di moli, in mol
- $R = 8{,}314\,\mathrm{J/(mol\,K)}$ = costante dei gas
- $T$ = temperatura assoluta, in K

Per una quantità fissata di gas, le variabili indipendenti sono **due**. La terza si ricava dall'equazione. Per questo basta il piano $p$-$V$ (piano di Clapeyron) per disegnare ogni stato.

::: attenzione
Nelle formule dei gas la temperatura va **sempre in kelvin**. Da 27 °C a 127 °C la temperatura non quadruplica: passa da 300 K a 400 K.
:::

## Trasformazioni
Una **trasformazione** porta il sistema da uno stato a un altro.
- **Quasi statica**: passa per tanti stati di equilibrio vicini. Si può disegnare come una curva.
- **Reversibile**: si può ripercorrere all'indietro e tornare esattamente allo stato iniziale, senza lasciare tracce. È un caso ideale: niente attriti, niente salti bruschi.
- **Irreversibile**: tutte le trasformazioni reali. Esempio: un gas che si espande di colpo nel vuoto (espansione libera).
- **Ciclica**: lo stato finale coincide con quello iniziale.

## Il lavoro di un gas
Quando un gas si espande spinge il pistone e compie lavoro.

$$L = \int_{V_i}^{V_f} p\,dV$$

dove:
- $L$ = lavoro compiuto dal gas, in J
- $p$ = pressione del gas, in Pa
- $dV$ = piccola variazione di volume, in m³

Convenzione: $L > 0$ se il gas si **espande** (lavoro fatto dal gas sull'ambiente). $L < 0$ se il gas viene compresso.

Nel piano $p$-$V$ il lavoro è l'**area sotto la curva**. Quindi dipende dal percorso, non solo dagli stati iniziale e finale. In un ciclo il lavoro è l'area racchiusa dalla curva chiusa: positivo se il ciclo gira in senso orario.

::: esempio
Un palloncino che si gonfia perché il gas si scalda compie lavoro positivo sull'aria. Se si sgonfia per raffreddamento, il lavoro del gas è negativo. Salire o scendere per la spinta di Archimede non è lavoro di espansione del gas.
:::

## Le trasformazioni notevoli

| Trasformazione | Cosa resta costante | Legge (gas perfetto) | Lavoro del gas |
|---|---|---|---|
| Isocora | volume $V$ | $p/T$ = costante | $L = 0$ |
| Isobara | pressione $p$ | $V/T$ = costante | $L = p\,\Delta V$ |
| Isoterma | temperatura $T$ | $pV$ = costante (Boyle) | $L = nRT\ln(V_f/V_i)$ |
| Adiabatica | nessuno scambio di calore ($Q = 0$) | $pV^\gamma$ = costante | $L = -\Delta U$ |

- Isocora: linea verticale nel piano $p$-$V$. Se il recipiente è rigido e il gas si scalda da 300 K a 400 K, la pressione cresce di un fattore 4/3.
- Isobara: linea orizzontale.
- Isoterma: un ramo di iperbole. Se il volume raddoppia, la pressione dimezza.
- Adiabatica: il sistema **non scambia calore**. Può però scambiare lavoro. È più ripida dell'isoterma.

## Energia interna del gas perfetto
L'**energia interna** $U$ è la somma delle energie delle molecole. In un gas perfetto è solo energia cinetica, quindi dipende **solo dalla temperatura**.

$$\Delta U = n\,C_V\,\Delta T$$

dove:
- $\Delta U$ = variazione di energia interna, in J
- $n$ = moli
- $C_V$ = calore molare a volume costante: $\tfrac32R$ (monoatomico), $\tfrac52R$ (biatomico), in $\mathrm{J/(mol\,K)}$
- $\Delta T$ = variazione di temperatura, in K

Questa formula vale per **qualsiasi** trasformazione. Conseguenze:
- se $U$ aumenta, la temperatura aumenta, sempre;
- in un'isoterma $\Delta U = 0$: il lavoro fatto sul gas esce come calore;
- se $pV$ finale è uguale a $pV$ iniziale (es. volume doppio e pressione metà), la temperatura è la stessa e $\Delta U = 0$.

::: esempio
0,25 mol di gas biatomico si espandono senza scambiare calore e si raffreddano da 1150 K a 400 K. Il lavoro è $L = -\Delta U = nC_V(T_i - T_f) = 0{,}25 \cdot \tfrac52 \cdot 8{,}314 \cdot 750 \approx 3{,}9\,\mathrm{kJ}$.
:::

## Cicli
In un ciclo il gas torna allo stato iniziale. Tutte le **funzioni di stato** (temperatura, energia interna, entropia) tornano al valore iniziale: $\Delta U = 0$. Il **lavoro invece non è nullo**: è l'area del ciclo. Per il primo principio il calore netto scambiato è uguale al lavoro netto.

## Cenni collegati
- L'**irraggiamento** trasporta **energia** tramite onde elettromagnetiche.
- Un ciclo di due isoterme e due adiabatiche reversibili è un **ciclo di Carnot**. Il suo rendimento è $\eta = 1 - T_F/T_C$ (in kelvin). Tra 15 °C e 200 °C: $\eta = 1 - 288/473 \approx 0{,}39$.
- **Entropia**: l'entropia totale (sistema + ambiente) non può diminuire. Se il sistema perde 8 J/K, l'ambiente ne guadagna almeno 8 J/K.

::: sintesi
- $pV = nRT$, con $T$ in kelvin; bastano due variabili di stato.
- Lavoro = area sotto la curva nel piano $p$-$V$; positivo in espansione.
- Isocora $L = 0$; isobara $L = p\Delta V$; isoterma $\Delta U = 0$; adiabatica $Q = 0$.
- Gas perfetto: $\Delta U = nC_V\Delta T$ in ogni trasformazione.
- Ciclo: $\Delta U = 0$ ma lavoro ≠ 0 (area racchiusa).
:::

=== 36 dispense
# Lezione 36 — Primo principio della termodinamica

## Calore e lavoro sono energia
Joule scaldò dell'acqua solo facendo girare delle palette con un peso che cadeva. Il lavoro meccanico diventava calore, sempre con lo stesso rapporto:

$$1\,\mathrm{cal} = 4{,}186\,\mathrm J$$

Quindi calore e lavoro sono due modi di scambiare **energia**. Si misurano con la stessa unità, il joule.

## Energia interna
Ogni sistema possiede un'**energia interna** $U$. È la somma delle energie delle sue molecole: cinetica (moto disordinato) e potenziale (legami tra le molecole).

$U$ è una **funzione di stato**: dipende solo dallo stato del sistema, non da come ci è arrivato. Calore e lavoro invece **non** sono funzioni di stato: dipendono dal percorso seguito.

::: attenzione
Funzioni di stato: energia interna, entropia, temperatura, energia potenziale gravitazionale, energia elastica di una molla ideale. **Non** sono funzioni di stato: calore e lavoro.
:::

## L'enunciato
Il primo principio è la **conservazione dell'energia** estesa ai fenomeni termici. La variazione di energia interna di un sistema è uguale al calore assorbito meno il lavoro compiuto.

$$\Delta U = Q - L$$

dove:
- $\Delta U$ = variazione di energia interna del sistema, in J
- $Q$ = calore scambiato, in J: **positivo se il sistema lo assorbe**, negativo se lo cede
- $L$ = lavoro scambiato, in J: **positivo se il sistema lo compie** (espansione), negativo se lo subisce

Per un piccolo passo: $dU = \delta Q - \delta L$.

Perché ha senso: il calore che entra aumenta l'energia del sistema; il lavoro fatto verso l'esterno la diminuisce.

::: esempio
Un gas aumenta la sua energia interna di 400 J. Una possibilità: assorbe 200 J di calore e riceve 200 J di lavoro. Allora $Q = 200\,\mathrm J$, $L = -200\,\mathrm J$ e $\Delta U = 200 - (-200) = 400\,\mathrm J$.
:::

::: esempio
Si compiono 200 J di lavoro su un sistema ($L = -200\,\mathrm J$) e gli si tolgono 70 cal ($Q = -293\,\mathrm J$). Allora $\Delta U = -293 + 200 = -93\,\mathrm J$.
:::

## Casi particolari

| Trasformazione | Condizione | Primo principio |
|---|---|---|
| Isocora | $L = 0$ | $\Delta U = Q$ |
| Isoterma (gas perfetto) | $\Delta U = 0$ | $Q = L$ |
| Adiabatica | $Q = 0$ | $\Delta U = -L$ |
| Ciclo | $\Delta U = 0$ | $Q = L$ |

- **Isoterma**: un gas che si espande a temperatura costante compie lavoro positivo. Siccome $\Delta U = 0$, deve **assorbire** calore ($Q = L > 0$). Non cede calore.
- **Adiabatica**: in espansione il gas compie lavoro usando la propria energia interna, e si raffredda. In compressione il lavoro ricevuto va in energia interna, e il gas si scalda.
- **Ciclo**: in un ciclo il calore netto assorbito è uguale al lavoro netto compiuto.

## Il calore non sempre alza la temperatura
Il calore assorbito aumenta l'**energia interna**. Non sempre aumenta la temperatura. Durante un passaggio di stato, per esempio, il calore rompe i legami: cresce l'energia potenziale delle molecole, la temperatura resta ferma.

Per un **gas perfetto**, invece, $U$ dipende solo dalla temperatura. Se l'energia interna di un gas aumenta, la sua temperatura è aumentata.

## Quale espansione fa più lavoro
Un gas si espande fino al doppio del volume partendo dallo stesso stato. Il lavoro è l'area sotto la curva nel piano $p$-$V$.
- **Isobara**: la pressione resta al valore iniziale, il più alto. Area massima: **lavoro massimo**.
- **Isoterma**: la pressione scende. Area minore.
- **Adiabatica**: la pressione scende ancora di più. Area ancora minore.
- **Isocora**: il volume non cambia. Lavoro nullo.

## Primo principio nei solidi e negli urti
In un solido il volume cambia pochissimo, quindi $L \approx 0$ e $\Delta U = Q = mc\Delta T$.

L'energia meccanica "persa" per attrito non sparisce. Diventa energia interna. Un blocco di ferro di 1 kg cade da 20 m e rimbalza fino a 1 m: l'energia dissipata $mg(H - h) \approx 186\,\mathrm J$ aumenta la sua energia interna.

::: esame
Domanda aperta: "Esporre il primo principio della termodinamica". Punti da toccare: calore e lavoro sono energia (equivalente meccanico della caloria); energia interna come funzione di stato; $\Delta U = Q - L$ con le convenzioni di segno; è la conservazione dell'energia; casi particolari (isocora, isoterma, adiabatica, ciclo).
:::

::: sintesi
- $\Delta U = Q - L$: $Q > 0$ se assorbito, $L > 0$ se compiuto dal sistema.
- $U$ è funzione di stato; $Q$ e $L$ no.
- Isocora $\Delta U = Q$; isoterma $Q = L$; adiabatica $\Delta U = -L$; ciclo $Q = L$.
- Il calore aumenta l'energia interna, non per forza la temperatura.
- Gas perfetto: più energia interna significa più temperatura.
:::

=== 37 dispense
# Lezione 37 — Trasformazioni dei gas perfetti

## Richiamo: stato e energia interna
Per un gas perfetto valgono sempre due relazioni.

$$pV = nRT \qquad \Delta U = nC_V\Delta T$$

dove:
- $p, V, T$ = pressione (Pa), volume (m³), temperatura (K)
- $n$ = moli; $R = 8{,}314\,\mathrm{J/(mol\,K)}$
- $C_V$ = calore molare a volume costante, in $\mathrm{J/(mol\,K)}$

L'energia interna dipende solo da $T$. Joule lo mostrò con l'espansione libera: un gas che si espande nel vuoto non scambia calore né lavoro, e la sua temperatura non cambia.

## Calori molari
Nei gas il calore necessario per scaldarsi dipende dalla trasformazione. Servono due calori molari.
- $C_V$: calore per scaldare 1 mol di 1 K **a volume costante**. Tutto il calore va in energia interna.
- $C_p$: calore per scaldare 1 mol di 1 K **a pressione costante**. Il gas si espande e compie anche lavoro, quindi serve più calore.

$$C_p = C_V + R \qquad \gamma = \frac{C_p}{C_V}$$

dove:
- $C_p$ = calore molare a pressione costante, in $\mathrm{J/(mol\,K)}$
- $R$ = costante dei gas (relazione di Mayer)
- $\gamma$ = rapporto tra i calori molari, numero puro, sempre maggiore di 1

| Gas | $C_V$ | $C_p$ | $\gamma$ |
|---|---|---|---|
| Monoatomico (He, Ar) | $\tfrac32R$ | $\tfrac52R$ | $5/3$ |
| Biatomico (O₂, N₂, aria) | $\tfrac52R$ | $\tfrac72R$ | $7/5$ |

Il motivo sta nei gradi di libertà: ogni grado di libertà vale $\tfrac12 k_BT$ per molecola. Una molecola monoatomica ne ha 3, una biatomica 5.

## Le quattro trasformazioni in una tabella

| Trasformazione | Legge | $L$ | $Q$ | $\Delta U$ |
|---|---|---|---|---|
| Isocora | $p/T$ = cost. | $0$ | $nC_V\Delta T$ | $nC_V\Delta T$ |
| Isobara | $V/T$ = cost. | $p\,\Delta V$ | $nC_p\Delta T$ | $nC_V\Delta T$ |
| Isoterma | $pV$ = cost. | $nRT\ln\dfrac{V_f}{V_i}$ | $= L$ | $0$ |
| Adiabatica | $pV^\gamma$ = cost. | $-\Delta U$ | $0$ | $nC_V\Delta T$ |

## Isobara
La pressione resta costante. Se il volume aumenta, la temperatura aumenta **in proporzione** ($V/T$ costante). Il gas assorbe calore: una parte diventa lavoro, una parte energia interna.

## Isoterma
La temperatura resta costante, quindi $\Delta U = 0$. Tutto il calore assorbito diventa lavoro. La pressione scende quando il volume cresce.

::: esempio
Compressione isoterma di 1 mol di gas a 0 °C da 22,4 L a 16,8 L: $L = nRT\ln(V_f/V_i) = 1 \cdot 8{,}314 \cdot 273 \cdot \ln(0{,}75) \approx -653\,\mathrm J$. Il segno meno dice che il lavoro è fatto **sul** gas.
:::

## Adiabatica
Il gas non scambia calore. Per il primo principio $\Delta U = -L$.
- In **espansione** il gas compie lavoro a spese della sua energia interna: **si raffredda**.
- In **compressione** il gas riceve lavoro: **si scalda** (come l'aria in una pompa da bicicletta).

Per un'adiabatica reversibile valgono:

$$pV^\gamma = \text{cost.} \qquad TV^{\gamma - 1} = \text{cost.}$$

dove $\gamma = C_p/C_V$. Nel piano $p$-$V$ l'adiabatica scende più ripida dell'isoterma.

::: esempio
Aria ($\gamma = 1{,}4$) a 1,2 bar e 310 K compressa adiabaticamente da 4,3 L a 0,76 L: $p_f = 1{,}2 \cdot (4{,}3/0{,}76)^{1{,}4} \approx 13{,}6\,\mathrm{bar}$ e $T_f = 310 \cdot (4{,}3/0{,}76)^{0{,}4} \approx 619\,\mathrm K$.
:::

## Confronto tra espansioni dallo stesso stato
Due quantità uguali dello stesso gas partono dallo stesso stato e si espandono.
- Quella a **pressione costante** finisce più calda: $T$ cresce con $V$.
- Quella a **temperatura costante** resta alla temperatura iniziale.
- Quella **adiabatica** finisce più fredda.

Siccome $U$ dipende solo da $T$, alla fine ha energia interna maggiore il gas che ha fatto l'isobara.

::: attenzione
$\Delta U = nC_V\Delta T$ vale in **ogni** trasformazione, anche nell'isobara. Non scrivere $nC_p\Delta T$ per l'energia interna: quello è il calore dell'isobara.
:::

::: sintesi
- $C_p = C_V + R$ (Mayer); $\gamma = C_p/C_V$: 5/3 monoatomico, 7/5 biatomico.
- Isobara: $V/T$ costante, $Q = nC_p\Delta T$, la temperatura sale con il volume.
- Isoterma: $\Delta U = 0$, $Q = L = nRT\ln(V_f/V_i)$.
- Adiabatica: $Q = 0$, $pV^\gamma$ costante; in espansione il gas si raffredda.
- $\Delta U = nC_V\Delta T$ sempre.
:::

=== 39 dispense
# Lezione 39 — Secondo principio della termodinamica

## Perché serve un secondo principio
Il primo principio dice che l'energia si conserva. Non dice in che **verso** vanno le trasformazioni. Eppure in natura certi processi avvengono solo in un verso.
- Due corpi a contatto raggiungono una temperatura comune. Non tornano mai da soli alle temperature iniziali.
- L'attrito trasforma tutto il lavoro in calore. Il contrario non succede spontaneamente.

Il secondo principio stabilisce queste regole di direzione.

## I due enunciati classici
**Kelvin-Planck**: è impossibile una trasformazione il cui **unico** risultato sia assorbire calore da **una sola** sorgente e trasformarlo **tutto** in lavoro.

Conseguenza: il calore si trasforma in lavoro **solo in parte**. Una macchina termica ha bisogno di almeno due sorgenti e deve cedere un po' di calore a quella fredda. Il lavoro invece si trasforma interamente in calore senza problemi (attrito).

**Clausius**: è impossibile una trasformazione il cui **unico** risultato sia il passaggio di calore da un corpo **più freddo** a uno **più caldo**.

Conseguenza: il calore non passa mai spontaneamente dal freddo al caldo. Il frigorifero lo fa, ma consuma lavoro: il passaggio non è l'unico risultato.

La parola chiave è "unico". I due enunciati sono **equivalenti**: se uno fosse violato, lo sarebbe anche l'altro.

::: attenzione
Non viola il secondo principio: trasformare tutto il lavoro in calore; far passare calore dal caldo al freddo; comprimere un gas. Viola il secondo principio: una macchina ciclica che trasforma in lavoro **tutto** il calore di **un'unica** sorgente.
:::

## Entropia
L'**entropia** $S$ è una funzione di stato. La sua variazione dipende solo dallo stato iniziale e finale. Si calcola lungo una trasformazione **reversibile** che collega i due stati.

$$\Delta S = \int_A^B \frac{\delta Q_{rev}}{T}$$

dove:
- $\Delta S$ = variazione di entropia, in J/K
- $\delta Q_{rev}$ = piccolo calore scambiato lungo una trasformazione reversibile, in J
- $T$ = temperatura assoluta alla quale si scambia il calore, in K

Nel caso **isotermo** $T$ è costante ed esce dall'integrale:

$$\Delta S = \frac{Q}{T}$$

::: esempio
Un gas si espande in modo isotermo a 35 °C compiendo 500 J di lavoro. Isoterma: $\Delta U = 0$, quindi $Q = L = 500\,\mathrm J$. Allora $\Delta S = 500/308{,}15 \approx 1{,}62\,\mathrm{J/K}$. L'unità è J/K, non N/K.
:::

Per un gas perfetto che va da $(T_i, V_i)$ a $(T_f, V_f)$:

$$\Delta S = nC_V\ln\frac{T_f}{T_i} + nR\ln\frac{V_f}{V_i}$$

dove $n$ = moli, $C_V$ = calore molare a volume costante, $R$ = costante dei gas.

## Il secondo principio con l'entropia
In un **sistema isolato** l'entropia non diminuisce mai.

$$\Delta S_{isolato} \ge 0$$

- trasformazione **reversibile**: $\Delta S = 0$;
- trasformazione **irreversibile** (tutte quelle reali): $\Delta S > 0$.

L'entropia di un sistema **non isolato** può diminuire. Un gas che cede calore in un'isoterma perde entropia. Ma la sorgente che riceve il calore ne guadagna almeno altrettanto. Il sistema isolato è "gas + sorgente", e lì il totale non scende.

::: esempio
Un sistema perde 8 J/K di entropia. Allora l'ambiente deve guadagnarne **almeno** 8 J/K: esattamente 8 se il processo è reversibile, di più se è irreversibile.
:::

## Entropia e disordine
In termini microscopici l'entropia misura quanti modi diversi hanno le molecole di realizzare lo stesso stato macroscopico (formula di Boltzmann):

$$S = k_B\ln W$$

dove $k_B$ = costante di Boltzmann ($1{,}38\cdot10^{-23}\,\mathrm{J/K}$) e $W$ = numero di configurazioni microscopiche possibili.

Gli stati "disordinati" hanno moltissime configurazioni, quelli "ordinati" pochissime. Un mazzo di carte mescolato non torna mai in ordine da solo. Allo stesso modo un sistema isolato va verso lo stato più probabile, cioè a entropia massima.

::: esame
Domanda aperta: "Esporre il secondo principio". Punti da toccare: verso delle trasformazioni; enunciati di Kelvin-Planck e Clausius (con la parola "unico") e la loro equivalenza; entropia $\Delta S = \int\delta Q_{rev}/T$; in un sistema isolato $\Delta S \ge 0$; conseguenza: rendimento di una macchina termica sempre minore di 1.
:::

::: sintesi
- Kelvin-Planck: il calore di un'unica sorgente non diventa tutto lavoro; il calore si converte in lavoro solo in parte.
- Clausius: il calore non passa spontaneamente dal freddo al caldo.
- Entropia: funzione di stato, $\Delta S = \int\delta Q_{rev}/T$ (J/K); isoterma $\Delta S = Q/T$.
- Sistema isolato: $\Delta S = 0$ se reversibile, $\Delta S > 0$ se irreversibile.
- $S = k_B\ln W$: l'entropia misura il disordine.
:::

=== 40 dispense
# Lezione 40 — Macchine termiche, ciclo di Carnot, entropia

## Macchina termica
Una **macchina termica** trasforma calore in lavoro ripetendo un ciclo. A ogni ciclo:
1. assorbe il calore $Q_C$ dalla sorgente calda (temperatura $T_C$);
2. compie il lavoro $L$;
3. cede il calore $Q_F$ alla sorgente fredda (temperatura $T_F$).

In un ciclo $\Delta U = 0$, quindi per il primo principio:

$$L = Q_C - Q_F$$

dove $Q_C$ e $Q_F$ sono i valori assoluti dei calori (in J) e $L$ è il lavoro per ciclo (in J).

## Rendimento
Il **rendimento** è la frazione del calore assorbito che diventa lavoro.

$$\eta = \frac{L}{Q_C} = 1 - \frac{Q_F}{Q_C}$$

dove:
- $\eta$ = rendimento, numero puro tra 0 e 1
- $L$ = lavoro per ciclo, in J
- $Q_C$ = calore assorbito dalla sorgente calda, in J
- $Q_F$ = calore ceduto alla sorgente fredda, in J

Per il secondo principio $Q_F$ non può essere zero, quindi $\eta < 1$ sempre.

::: esempio
Una macchina assorbe 85 kcal e ne cede 78: $L = 7\,\mathrm{kcal} = 7\cdot 4186 \approx 29\,\mathrm{kJ}$.
Una macchina produce 10 kJ di lavoro cedendo 35 kJ: ha assorbito $10 + 35 = 45\,\mathrm{kJ}$, quindi $\eta = 10/45 \approx 0{,}22$.
Assorbe 450 kcal e cede 150 kcal: $\eta = 1 - 150/450 = 2/3$.
:::

::: attenzione
Leggi bene quale calore dà il testo. Se è il calore **assorbito**, $\eta = L/Q$. Se è il calore **ceduto**, prima calcola $Q_C = L + Q_F$. Con 3200 J di lavoro e 8200 J letti come calore assorbito: $\eta = 3200/8200 \approx 0{,}39$.
:::

## Ciclo di Carnot
È il ciclo ideale di una macchina che lavora tra due sole sorgenti. Tutte le fasi sono **reversibili** e il fluido è un gas perfetto.
1. **A → B, espansione isoterma** a $T_C$: il gas assorbe $Q_C = nRT_C\ln(V_B/V_A)$.
2. **B → C, espansione adiabatica**: nessun calore; il gas si raffredda da $T_C$ a $T_F$.
3. **C → D, compressione isoterma** a $T_F$: il gas cede $Q_F$ alla sorgente fredda.
4. **D → A, compressione adiabatica**: nessun calore; il gas torna a $T_C$.

In un ciclo l'entropia del gas torna al valore iniziale. Cambia solo nelle isoterme: $Q_C/T_C = Q_F/T_F$. Sostituendo nel rendimento:

$$\eta_C = 1 - \frac{T_F}{T_C}$$

dove $T_F$ e $T_C$ sono le temperature delle sorgenti **in kelvin**.

Il rendimento di Carnot dipende **solo dalle due temperature**, non dal gas usato.

::: esempio
Tra 27 °C e 127 °C: $\eta = 1 - 300/400 = 0{,}25$.
Tra 20 °C e 200 °C: $\eta = 1 - 293/473 \approx 0{,}38$.
Tra 300 K e 450 K: $\eta_{max} = 1 - 300/450 \approx 0{,}33$.
Carnot tra 450 K e 320 K che assorbe 2500 J: $\eta \approx 0{,}289$, quindi $L \approx 0{,}289 \cdot 2500 \approx 720\,\mathrm J$.
:::

::: esempio
Scarico a 230 °C (503 K), rendimento voluto 28%: $T_C = T_F/(1 - \eta) = 503/0{,}72 \approx 699\,\mathrm K \approx 426\,^\circ\mathrm C$.
:::

## Teorema di Carnot
1. **Tutte le macchine reversibili** che lavorano tra le **stesse due temperature** hanno lo **stesso rendimento**, $1 - T_F/T_C$.
2. **Nessuna macchina** (reale, irreversibile) che lavora tra quelle temperature può avere un rendimento maggiore.

Il ragionamento in tre passi: se una macchina X avesse rendimento maggiore di Carnot, si potrebbe usare il suo lavoro per far girare un Carnot al contrario. Il risultato netto sarebbe calore che passa dal freddo al caldo senza lavoro esterno. Questo viola l'enunciato di Clausius, quindi X non esiste.

Per **aumentare il rendimento** bisogna alzare $T_C$ e abbassare $T_F$. Un rendimento pari a 1 richiederebbe $T_F = 0\,\mathrm K$, che non si può raggiungere.

## Frigorifero e pompa di calore
Il frigorifero è una macchina termica al contrario. Riceve il lavoro $L$, preleva il calore $Q_F$ dall'interno freddo e cede $Q_C = Q_F + L$ all'ambiente caldo.

$$COP = \frac{Q_F}{L}$$

dove:
- $COP$ = coefficiente di prestazione, numero puro
- $Q_F$ = calore tolto alla sorgente fredda, in J
- $L$ = lavoro fornito, in J

Il COP è **sempre positivo** e di solito è **maggiore di 1**: si sposta più calore del lavoro speso. Per un frigorifero di Carnot $COP = T_F/(T_C - T_F)$.

::: esempio
Con 18 kJ di lavoro il frigorifero toglie 115 kJ dall'interno: $COP = 115/18 \approx 6{,}4$.
:::

## Entropia
L'**entropia** è una funzione di stato che misura il grado di disordine e di irreversibilità.

$$\Delta S = \int_A^B \frac{\delta Q_{rev}}{T}$$

dove $\Delta S$ è in J/K, $\delta Q_{rev}$ è il calore scambiato in modo reversibile (J) e $T$ la temperatura assoluta (K).
- In un ciclo reversibile, come Carnot: $\Delta S_{gas} = 0$ e $Q_C/T_C = Q_F/T_F$.
- In un sistema isolato: $\Delta S \ge 0$ (uguale a 0 solo se tutto è reversibile).
- A livello microscopico: $S = k_B\ln W$. Più configurazioni possibili significa più disordine e più entropia.

Un frigorifero "perfetto", senza lavoro, farebbe diminuire l'entropia totale: la sorgente fredda perde $Q/T_F$, la calda guadagna solo $Q/T_C$, che è più piccolo. Per questo è impossibile.

::: esame
Domanda aperta: "Cos'è l'entropia". Rispondi così: funzione di stato; definizione $\Delta S = \int\delta Q_{rev}/T$ in J/K; in un sistema isolato non diminuisce mai (costante se reversibile, cresce se irreversibile); misura il disordine, $S = k_B\ln W$; indica il verso spontaneo delle trasformazioni.
:::

::: sintesi
- Macchina termica: $L = Q_C - Q_F$; $\eta = L/Q_C = 1 - Q_F/Q_C < 1$.
- Carnot: 2 isoterme + 2 adiabatiche reversibili; $\eta_C = 1 - T_F/T_C$ in kelvin.
- Teorema di Carnot: stesso rendimento per tutte le reversibili tra le stesse temperature; nessuna macchina fa meglio.
- Rendimento più alto: $T_C$ più alta, $T_F$ più bassa.
- Frigorifero: $COP = Q_F/L > 0$, spesso maggiore di 1.
- Entropia: $\Delta S = \int\delta Q_{rev}/T$; sistema isolato $\Delta S \ge 0$.
:::
