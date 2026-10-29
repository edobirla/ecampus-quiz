=== 55 dispense
SLIDES: 62, 63
# Lezione 55 — Corrente elettrica, resistenza e leggi di Ohm

Finora abbiamo studiato l'**elettrostatica**: cariche ferme, conduttori in equilibrio, campo nullo dentro i conduttori. In questa lezione le cariche si mettono in moto. Vediamo che cos'è la **corrente elettrica**, come si misura (intensità e densità di corrente), perché la carica si conserva anche quando scorre, e soprattutto le **leggi di Ohm**, che legano la corrente alla differenza di potenziale che la produce. Alla fine impariamo a ridurre gruppi di resistori **in serie** e **in parallelo** a un'unica resistenza equivalente: è lo strumento base di tutti gli esercizi sui circuiti delle lezioni successive.

## Dalla conduzione alla corrente

Nei metalli il reticolo cristallino è fatto di **ioni positivi** fermi, strettamente legati. Tra di essi si muovono gli **elettroni di conduzione**, molto liberi di spostarsi.

- **Conduttore in equilibrio elettrostatico.** Gli elettroni non sono fermi: si muovono di continuo, in modo disordinato e in direzioni casuali (agitazione termica). In ogni piccolo volume ce ne sono moltissimi e le loro velocità si compensano: la **velocità media vettoriale è nulla**. A livello macroscopico non si vede nessun movimento di carica.
- **Conduttore con una differenza di potenziale.** Se si crea una differenza di potenziale tra due zone del conduttore, nasce un campo elettrico interno. Il campo dà una **direzione privilegiata**: oltre al moto disordinato, gli elettroni acquistano un piccolo moto d'insieme lungo il campo. Mediamente c'è un flusso netto di cariche attraverso il conduttore.

Questo moto ordinato di cariche lungo una direzione privilegiata è la **corrente elettrica**; il fenomeno si chiama **conduzione elettrica**. Avviene facilmente nei conduttori, in modo molto più debole anche negli isolanti, nei liquidi (elettroliti) e nei gas. Esistono poi materiali con comportamenti particolari, come i **semiconduttori** e i **superconduttori**, usati in molte tecnologie. Lo studio classico della corrente si basa sui conduttori metallici.

## Intensità di corrente

Prendiamo una superficie $S$ dentro il conduttore. L'**intensità di corrente** è la quantità di carica che attraversa la superficie nell'unità di tempo:

$$i = \frac{dq}{dt}$$

dove:
- $i$ = intensità di corrente (A, ampere)
- $dq$ = carica che attraversa la superficie nel tempo $dt$ (C)
- $dt$ = intervallo di tempo infinitesimo (s)

È una grandezza **scalare**. La definizione con la derivata vale anche quando la corrente cambia nel tempo, perché si riferisce a un intervallo istantaneo. Se la corrente è **costante** (corrente continua) la formula diventa semplicemente:

$$i = \frac{Q}{t} \qquad\Longleftrightarrow\qquad Q = i\,t$$

dove $Q$ = carica totale passata nel tempo $t$ (C), $t$ in secondi.

**Unità di misura.** L'ampere è il passaggio di 1 coulomb al secondo: $1\,\mathrm A = 1\,\mathrm{C/s}$. Attenzione all'ordine logico del Sistema Internazionale: anche se a lezione si introduce prima la carica, la grandezza **fondamentale** del SI è l'**intensità di corrente** (una delle sette grandezze fondamentali). La carica è una grandezza **derivata**, con equazione dimensionale

$$[Q] = [I\,T] \qquad 1\,\mathrm C = 1\,\mathrm{A \cdot s}$$

::: esempio
**Carica che passa in un filo.** Una corrente continua di 2,5 A scorre in un filo per 4 minuti. Quanta carica attraversa ogni sezione?
1. Converto il tempo in secondi: $t = 4 \cdot 60 = 240\,\mathrm s$.
2. La corrente è costante, quindi $Q = i\,t = 2{,}5\,\mathrm A \cdot 240\,\mathrm s = 600\,\mathrm C$.

La stessa carica passa in **ogni** punto del circuito: in regime stazionario la corrente è uguale in tutte le sezioni (lo vediamo tra poco con la conservazione della carica).
:::

## Il vettore densità di corrente

L'intensità dice quanta carica passa in totale, ma non come la corrente è distribuita nella sezione. Per questo si usa un vettore locale, la **densità di corrente**.

**Ragionamento.** Nel conduttore c'è un campo $\vec E$. Le cariche positive (il caso di riferimento) si spostano con velocità media $\vec v_d$ parallela al campo. Prendiamo un elementino di superficie $dS$ la cui normale $\vec u_n$ forma un angolo $\theta$ con il campo.
1. In un tempo $dt$ ogni carica percorre il tratto $h = v_d\,dt$.
2. Attraversano $dS$ tutte le cariche contenute nel cilindretto obliquo di base $dS$ e lato $v_d\,dt$. Il suo volume è $dS \cdot v_d\,dt \cdot \cos\theta$.
3. Se $n_+$ è il numero di cariche elementari positive per unità di volume, la carica che passa è $dq = n_+ e \, v_d \, dt \, dS \cos\theta$.
4. Dividendo per $dt$: $di = n_+ e\, v_d\, \cos\theta\, dS$.

Si definisce allora:

$$\vec j = n_+\,e\,\vec v_d$$

dove:
- $\vec j$ = densità di corrente (A/m²)
- $n_+$ = numero di portatori per unità di volume (m⁻³)
- $e$ = carica elementare, $1{,}6 \cdot 10^{-19}\,\mathrm C$
- $\vec v_d$ = velocità media (di deriva) dei portatori (m/s)

Con questa definizione il passaggio 4 diventa $di = \vec j \cdot \vec u_n\, dS$. La corrente attraverso una superficie finita è il **flusso** della densità di corrente:

$$i = \int_S \vec j \cdot \vec u_n\, dS$$

Se la superficie è perpendicolare al moto delle cariche e $j$ è uniforme sulla superficie, il flusso è un semplice prodotto:

$$i = j\,S \qquad\Longleftrightarrow\qquad j = \frac{i}{S}$$

Quindi la densità di corrente è la **corrente che attraversa l'unità di superficie perpendicolare al moto** delle cariche.

**Verso convenzionale e segno dei portatori.** Per convenzione il verso della corrente è quello in cui si muoverebbero le **cariche positive**, anche se nei metalli si muovono gli elettroni (negativi). A livello macroscopico non fa differenza. Se ci sono $n_-$ elettroni per unità di volume che si muovono con velocità $\vec v_-$ **opposta** al campo:

$$\vec j = -n_-\,e\,\vec v_-$$

Il segno meno ribalta il verso: $\vec j$ è comunque **concorde al campo**, esattamente come se ci fossero $n_-$ cariche positive che si muovono con velocità $-\vec v_-$. In generale, con $n$ portatori di carica $q$ (con il suo segno) per unità di volume:

$$\vec j = n\,q\,\vec v_d$$

::: esempio
**Quanto vanno veloci gli elettroni?** (esercizio della dispensa) Un filo di sezione costante $S = 10\,\mathrm{mm^2}$ porta una corrente $i = 2\,\mathrm A$. La densità dei portatori è $n = 8{,}5 \cdot 10^{28}\,\mathrm{m^{-3}}$. Qual è la velocità media delle cariche?
1. Converto la sezione: $10\,\mathrm{mm^2} = 10 \cdot 10^{-6}\,\mathrm{m^2} = 10^{-5}\,\mathrm{m^2}$.
2. Densità di corrente: $j = \dfrac{i}{S} = \dfrac{2}{10^{-5}} = 2 \cdot 10^5\,\mathrm{A/m^2}$.
3. Da $j = n e v_d$ ricavo $v_d = \dfrac{j}{n e} = \dfrac{2 \cdot 10^5}{8{,}5 \cdot 10^{28} \cdot 1{,}6 \cdot 10^{-19}} = \dfrac{2 \cdot 10^5}{1{,}36 \cdot 10^{10}} \approx 1{,}47 \cdot 10^{-5}\,\mathrm{m/s}$.

Circa 15 micrometri al secondo: gli elettroni avanzano lentissimi. La lampadina però si accende subito perché il **campo** si stabilisce lungo tutto il filo quasi alla velocità della luce e mette in moto contemporaneamente tutti gli elettroni del circuito.
:::

::: esempio
**Corrente con densità non uniforme.** (esercizio della dispensa) In un filo cilindrico di raggio $R = 2\,\mathrm{mm}$ la densità di corrente, perpendicolare alla sezione, vale $j(r) = a r^2$ con $a = 3 \cdot 10^{11}\,\mathrm{A/m^4}$ ($r$ = distanza dall'asse). Quanto vale la corrente?
1. La corrente è il flusso di $\vec j$ attraverso la sezione. Divido la sezione in anelli sottili di raggio $r$ e spessore $dr$: area $dS = 2\pi r\,dr$.
2. $i = \displaystyle\int_0^R j(r)\,2\pi r\,dr = 2\pi a \int_0^R r^3\,dr = 2\pi a\,\frac{R^4}{4} = \frac{\pi a}{2} R^4$.
3. Numeri: $R^4 = (2 \cdot 10^{-3})^4 = 1{,}6 \cdot 10^{-11}\,\mathrm{m^4}$, quindi $i = \dfrac{\pi \cdot 3 \cdot 10^{11} \cdot 1{,}6 \cdot 10^{-11}}{2} = \dfrac{\pi \cdot 4{,}8}{2} \approx 7{,}54\,\mathrm A$.
:::

## Conservazione della carica ed equazione di continuità

Prendiamo una regione di spazio chiusa da una superficie $S$, attraversata da una densità di corrente $\vec j$. Il flusso di $\vec j$ uscente dalla superficie è la carica che esce ogni secondo (se è negativo, la carica sta entrando).

Il **principio di conservazione della carica** dice che la carica non si crea e non si distrugge. Quindi, se esce più carica di quanta ne entra, la carica interna $Q_{int}$ deve diminuire esattamente di tanto:

$$\oint_S \vec j \cdot \vec u_n\, dS = -\frac{dQ_{int}}{dt}$$

dove:
- $\oint_S \vec j \cdot \vec u_n\,dS$ = corrente totale uscente dalla superficie chiusa (A)
- $Q_{int}$ = carica contenuta dentro la superficie (C)

Il **segno meno** dice proprio questo: un eccesso di flusso uscente fa diminuire la carica interna.

**Regime stazionario.** È il caso più importante: la carica interna non cambia nel tempo ($dQ_{int}/dt = 0$). Allora:

$$\oint_S \vec j \cdot \vec u_n\, dS = 0$$

Quanta corrente entra, tanta ne esce.

**Forma locale: equazione di continuità.** Scriviamo la carica interna con la densità volumica $\rho$: $Q_{int} = \int_V \rho\,dV$. Per il teorema della divergenza il flusso uscente è $\oint_S \vec j \cdot \vec u_n\,dS = \int_V \nabla \cdot \vec j\,dV$. Sostituendo:

$$\int_V \nabla \cdot \vec j\, dV = -\int_V \frac{\partial \rho}{\partial t}\,dV$$

Questo deve valere per **qualunque** volume scelto, quindi devono essere uguali gli integrandi:

$$\nabla \cdot \vec j = -\frac{\partial \rho}{\partial t}$$

dove $\nabla \cdot \vec j$ = divergenza della densità di corrente (A/m³) e $\rho$ = densità di carica (C/m³). È l'**equazione di continuità** della corrente elettrica. In regime stazionario $\partial\rho/\partial t = 0$ e quindi $\nabla \cdot \vec j = 0$: la densità di corrente è un campo **solenoidale** (le sue linee non iniziano e non finiscono da nessuna parte).

**Conseguenza: stessa corrente in ogni sezione.** Prendiamo un conduttore a sezione variabile, con la corrente sempre parallela alla superficie laterale. Applichiamo il flusso nullo al tratto tra due sezioni $S_1$ e $S_2$: dalla superficie laterale non esce nulla, quindi $j_1 S_1 = j_2 S_2$, cioè $i_1 = i_2$. In regime stazionario **l'intensità di corrente è la stessa in ogni sezione** del conduttore. Dove la sezione si restringe, la densità di corrente aumenta: è la stessa cosa che succede alla velocità di un fluido incomprimibile in un tubo che si stringe. Nei fili a sezione costante anche $j$ è la stessa ovunque.

::: esempio
**Una sfera che si carica.** (esercizio della dispensa) Una sfera conduttrice isolata ha raggio $R = 10\,\mathrm{cm}$. Un filo porta dentro la sfera una corrente $i_0$; un secondo filo porta fuori una corrente $i = i_0 + \Delta i$ con $\Delta i = -2\,\mu\mathrm A$. In quanto tempo il potenziale della sfera aumenta di 1000 V?
1. Esce meno corrente di quanta ne entra: la carica della sfera cresce di $|\Delta i| = 2 \cdot 10^{-6}\,\mathrm A$, cioè $\Delta Q = |\Delta i|\,\Delta t$ (conservazione della carica).
2. Il potenziale di una sfera conduttrice isolata è $V = \dfrac{Q}{4\pi\varepsilon_0 R}$, quindi $\Delta V = \dfrac{\Delta Q}{4\pi\varepsilon_0 R} = \dfrac{|\Delta i|\,\Delta t}{4\pi\varepsilon_0 R}$.
3. Ricavo il tempo: $\Delta t = \dfrac{4\pi\varepsilon_0 R\,\Delta V}{|\Delta i|}$. Con $4\pi\varepsilon_0 = 1/(9 \cdot 10^9)\,\mathrm{F/m}$: $4\pi\varepsilon_0 R = \dfrac{0{,}1}{9 \cdot 10^9} \approx 1{,}11 \cdot 10^{-11}\,\mathrm F$.
4. $\Delta t = \dfrac{1{,}11 \cdot 10^{-11} \cdot 1000}{2 \cdot 10^{-6}} \approx 5{,}56 \cdot 10^{-3}\,\mathrm s = 5{,}56\,\mathrm{ms}$.
:::

## Velocità di deriva: il modello classico della conduzione

Perché la corrente in un filo ha un valore costante e non cresce all'infinito, visto che il campo accelera gli elettroni? Il **modello classico** della conduzione nei metalli risponde così:
1. Il campo $\vec E$ accelera ogni elettrone con accelerazione $a = eE/m$.
2. Dopo un breve tratto l'elettrone **urta** (interagisce con) uno ione del reticolo e perde la velocità acquistata nella direzione del campo.
3. Poi riparte, viene di nuovo accelerato, urta di nuovo, e così via.

L'effetto netto della sequenza di urti è come una **resistenza viscosa**: una forza costante (quella del campo) contrastata da un attrito che cresce con la velocità. Come un corpo che cade in un fluido raggiunge una velocità limite, gli elettroni raggiungono a regime un moto d'insieme a **velocità media costante**, proporzionale al campo. Se $\tau$ è il tempo medio tra due urti, la velocità media acquistata è circa $a\,\tau$:

$$v_d = \frac{e\,\tau}{m}\,E$$

dove:
- $v_d$ = **velocità di deriva** (in inglese *drift*) (m/s)
- $e$ = carica dell'elettrone in modulo (C)
- $\tau$ = tempo caratteristico medio tra due urti (s)
- $m$ = massa dell'elettrone, $9{,}11 \cdot 10^{-31}\,\mathrm{kg}$
- $E$ = modulo del campo elettrico nel conduttore (V/m)

Per gli elettroni la velocità di deriva ha verso **opposto** al campo (carica negativa); la densità di corrente, come visto, è comunque concorde al campo.

## Legge di Ohm in forma locale: conduttività e resistività

Mettiamo insieme la velocità di deriva e la definizione di densità di corrente:

$$j = n\,e\,v_d = n\,e\,\frac{e\,\tau}{m}\,E = \frac{n\,e^2\,\tau}{m}\,E$$

La quantità davanti a $E$ dipende solo dal materiale. Si chiama **conduttività elettrica**:

$$\sigma = \frac{n\,e^2\,\tau}{m}$$

e si ottiene la **legge di Ohm per la conduzione elettrica** (forma locale):

$$\vec j = \sigma\,\vec E$$

dove:
- $\vec j$ = densità di corrente (A/m²)
- $\sigma$ = conduttività (S/m, cioè $\Omega^{-1}\,\mathrm m^{-1}$)
- $\vec E$ = campo elettrico nel punto (V/m)
- $n$ = densità dei portatori (m⁻³), $\tau$ = tempo medio tra gli urti (s), $m$ = massa del portatore (kg)

**Perché $\vec j$ è sempre concorde a $\vec E$.** Nella conduttività compare $e^2$: è sempre **positiva**, qualunque sia il segno dei portatori. Quindi la legge di Ohm dice che la densità di corrente ha **sempre lo stesso verso del campo**.

**Più tipi di portatori.** Se si muovono insieme cariche positive e negative (per esempio ioni in un elettrolita), ognuna con i suoi parametri $n_k$, $q_k$, $\tau_k$, $m_k$, la densità totale è ancora $\vec j = \sigma \vec E$ con

$$\sigma = \sum_k \frac{n_k\,q_k^2\,\tau_k}{m_k} > 0$$

**Resistività.** Spesso la legge si scrive al contrario, con il campo in funzione della corrente:

$$\vec E = \rho\,\vec j \qquad \rho = \frac{1}{\sigma}$$

dove $\rho$ = **resistività** del mezzo ($\Omega \cdot \mathrm m$). Ordini di grandezza: nei metalli buoni conduttori $\rho \approx 10^{-8}\,\Omega\,\mathrm m$ (rame $1{,}69 \cdot 10^{-8}\,\Omega\,\mathrm m$); negli isolanti valori enormemente più grandi.

::: attenzione
La lettera $\rho$ indica qui la **resistività** ($\Omega\,\mathrm m$), mentre nell'equazione di continuità indicava la **densità di carica** (C/m³). Capisci dal contesto e dalle unità quale delle due è.
:::

## Prima legge di Ohm: la resistenza

Passiamo dalla forma locale a un oggetto reale. Prendiamo un conduttore cilindrico di lunghezza $h$ e sezione $S$; tra le due basi manteniamo una differenza di potenziale costante $V = V_A - V_B$.

1. Nel conduttore c'è un campo uniforme parallelo all'asse. Per un campo uniforme la differenza di potenziale è campo per distanza: $V = E\,h$.
2. Si stabilisce una corrente stazionaria, con densità uniforme: $i = j\,S$, cioè $j = i/S$.
3. Uso la legge di Ohm locale $E = \rho\,j$: $V = E\,h = \rho\,j\,h = \rho\,\dfrac{i}{S}\,h$.
4. Raccolgo: $V = \left(\rho\,\dfrac{h}{S}\right) i$.

La quantità tra parentesi si chiama **resistenza** del conduttore. Si ottiene la **prima legge di Ohm** (legge di Ohm per i conduttori metallici):

$$V = R\,i \qquad\Longleftrightarrow\qquad i = \frac{V}{R} \qquad\Longleftrightarrow\qquad R = \frac{V}{i}$$

dove:
- $V$ = differenza di potenziale (d.d.p., tensione) ai capi del conduttore (V)
- $i$ = intensità di corrente che lo attraversa (A)
- $R$ = resistenza (Ω, ohm)

**Enunciato.** In un conduttore ohmico mantenuto a temperatura costante, l'intensità di corrente è **direttamente proporzionale** alla differenza di potenziale applicata ai suoi capi; la costante di proporzionalità tra tensione e corrente è la resistenza $R$, che dipende solo dal conduttore (materiale, forma, temperatura) e non da $V$ o da $i$. Se raddoppi la tensione, raddoppia la corrente.

**Unità.** $1\,\Omega = 1\,\mathrm{V/A}$: un conduttore ha resistenza di 1 ohm se, con 1 volt ai capi, è attraversato da 1 ampere.

**Conduttanza.** L'inverso della resistenza è la conduttanza:

$$G = \frac{1}{R}$$

in siemens ($1\,\mathrm S = 1\,\Omega^{-1} = 1\,\mathrm{A/V}$).

I conduttori che seguono la legge di Ohm si chiamano **ohmici** o **resistori**; nei circuiti si disegnano con un tratto a zig-zag. Per loro il grafico corrente–tensione è una retta passante per l'origine, di pendenza $1/R$.

## Seconda legge di Ohm: da cosa dipende la resistenza

Dal passaggio 4 abbiamo già trovato come la resistenza dipende dal conduttore. Chiamando $l$ la lunghezza:

$$R = \rho\,\frac{l}{S}$$

dove:
- $R$ = resistenza (Ω)
- $\rho$ = resistività del materiale (Ω·m)
- $l$ = lunghezza del conduttore (m)
- $S$ = area della sezione (m²)

Significato:
- la resistenza è **proporzionale alla lunghezza**: un filo lungo il doppio resiste il doppio (è come mettere in serie due fili);
- è **inversamente proporzionale alla sezione**: un filo con sezione doppia resiste la metà (è come mettere in parallelo due fili);
- dipende dal **materiale** attraverso $\rho$.

::: esempio
**Filo di rame.** (esercizio della dispensa) Un filo di rame ($\rho = 1{,}69 \cdot 10^{-8}\,\Omega\,\mathrm m$) ha sezione di raggio 2 mm ed è lungo 2 cm. Ai capi c'è una d.d.p. di 3 nV. Quanta carica attraversa una sezione in 3 ms?
1. Sezione: $S = \pi r^2 = \pi (2 \cdot 10^{-3})^2 \approx 1{,}257 \cdot 10^{-5}\,\mathrm{m^2}$.
2. Resistenza: $R = \rho\,\dfrac{l}{S} = \dfrac{1{,}69 \cdot 10^{-8} \cdot 0{,}02}{1{,}257 \cdot 10^{-5}} \approx 2{,}69 \cdot 10^{-5}\,\Omega$.
3. Corrente: $i = \dfrac{V}{R} = \dfrac{3 \cdot 10^{-9}}{2{,}69 \cdot 10^{-5}} \approx 1{,}1 \cdot 10^{-4}\,\mathrm A = 0{,}11\,\mathrm{mA}$.
4. Carica: $\Delta Q = i\,\Delta t = 1{,}1 \cdot 10^{-4} \cdot 3 \cdot 10^{-3} \approx 3{,}3 \cdot 10^{-7}\,\mathrm C = 0{,}33\,\mu\mathrm C$.
:::

## Resistività e temperatura

Per la maggior parte dei metalli, vicino alla temperatura ambiente, la resistività cresce in modo quasi **lineare** con la temperatura:

$$\rho = \rho_0\,(1 + \alpha\,\Delta T)$$

dove:
- $\rho_0$ = resistività alla temperatura di riferimento di 20 °C (Ω·m)
- $\alpha$ = **coefficiente termico** della resistività (K⁻¹ o °C⁻¹), tipico di ogni materiale (per il rame circa $3{,}9 \cdot 10^{-3}\,\mathrm K^{-1}$)
- $\Delta T = T - 20\,°\mathrm C$ = differenza di temperatura (K o °C, è lo stesso per una differenza)

Il perché, nel modello classico: a temperatura più alta gli ioni vibrano di più, gli urti sono più frequenti, il tempo medio $\tau$ tra gli urti diminuisce e quindi la conduttività $\sigma = ne^2\tau/m$ cala.

- Nei **metalli** $\alpha > 0$: scaldando, la resistività aumenta.
- In materiali come **germanio** e **silicio** $\alpha < 0$: la resistività **aumenta quando la temperatura diminuisce**. Per questo sono usati come **sensori di temperatura** in ambienti molto freddi e criogenici.
- A temperature molto basse, per molti materiali la resistività smette di dipendere dalla temperatura (la curva si appiattisce).
- I **superconduttori** sono un caso a parte: sotto una **temperatura critica** $T_c$ la resistività diventa praticamente nulla. In essi possono circolare correnti anche intense **senza** bisogno di mantenere applicata una differenza di potenziale.

::: esempio
Un filo di rame ha resistenza $10\,\Omega$ a 20 °C. Quanto vale a 70 °C? Con $\alpha = 3{,}9 \cdot 10^{-3}\,\mathrm K^{-1}$ e $\Delta T = 50\,\mathrm K$: $R = R_0(1 + \alpha\Delta T) = 10\,(1 + 0{,}195) \approx 11{,}95\,\Omega$. La resistenza segue la resistività perché $l$ e $S$ cambiano pochissimo.
:::

## Analogia con il calore: legge di Wiedemann-Franz

Il linguaggio della conduzione elettrica (conduttività, resistenza) è lo stesso della conduzione del calore, e non per caso. Per un materiale tra due sorgenti a temperature $T_1 > T_2$ il calore che passa ogni secondo è

$$\frac{dQ}{dt} = \frac{T_1 - T_2}{R_{th}}$$

dove $R_{th}$ = resistenza termica (K/W). Se sostituisci la temperatura con il potenziale, il calore al secondo con la corrente e la resistenza termica con quella elettrica, ottieni proprio $i = (V_1 - V_2)/R$: la legge di Ohm.

L'analogia è rafforzata dalla **legge empirica di Wiedemann-Franz**, che lega la conducibilità termica $k$ e quella elettrica $\sigma$ di un metallo:

$$\frac{k}{\sigma} = L\,T$$

dove $T$ = temperatura assoluta (K) e $L$ = **costante di Lorenz**, ricavata sperimentalmente e quasi uguale per tutti i metalli (circa $2{,}4 \cdot 10^{-8}\,\mathrm{W\,\Omega/K^2}$). Significa che nei metalli sia il trasporto di carica sia il trasporto di calore dalle parti calde a quelle fredde sono dovuti agli **stessi elettroni di conduzione**: un buon conduttore elettrico è anche un buon conduttore di calore.

## Resistori in serie

Due (o più) resistori sono **in serie** quando stanno uno dopo l'altro sullo stesso filo, senza diramazioni tra loro. Chiamiamo A l'ingresso, C il punto tra i due resistori, B l'uscita.

**Ragionamento.** In regime stazionario la corrente è la stessa in ogni sezione del conduttore, quindi **la stessa corrente $i$ attraversa entrambi i resistori**. Le differenze di potenziale si sommano:

$$V_A - V_B = (V_A - V_C) + (V_C - V_B) = R_1\,i + R_2\,i = (R_1 + R_2)\,i$$

Il tratto da A a B si comporta come un solo resistore $R_{eq}$ che, con la stessa d.d.p. $V_A - V_B$, è attraversato dalla stessa corrente $i$. Per $n$ resistori:

$$R_{eq} = R_1 + R_2 + \dots + R_n = \sum_k R_k$$

dove $R_{eq}$ = resistenza equivalente (Ω) e $R_k$ = singole resistenze (Ω).

**Enunciato.** La resistenza equivalente di resistori in serie è la **somma** delle singole resistenze. È sempre **maggiore della più grande** di esse.

**Partitore di tensione.** Ogni resistore ha ai capi una parte della tensione totale, proporzionale alla sua resistenza: $V_k = R_k\,i = V\,\dfrac{R_k}{R_{eq}}$. Il resistore più grande "prende" più tensione, ma la **corrente è la stessa per tutti**.

## Resistori in parallelo

Due (o più) resistori sono **in parallelo** quando sono collegati agli stessi due punti A e B.

**Ragionamento.** Ai capi di ciascun resistore c'è la **stessa differenza di potenziale** $V = V_A - V_B$. Nei due rami scorrono due correnti diverse (se le resistenze sono diverse), date dalla legge di Ohm: $i_1 = V/R_1$, $i_2 = V/R_2$. Per la conservazione della carica, la corrente $i$ che arriva in A si divide nei due rami e si ricompone in B:

$$i = i_1 + i_2 = \frac{V}{R_1} + \frac{V}{R_2} = V\left(\frac{1}{R_1} + \frac{1}{R_2}\right)$$

Il tratto equivale a un solo resistore che, con la stessa d.d.p., è attraversato dalla stessa corrente totale: $i = V/R_{eq}$. Quindi, per $n$ resistori:

$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n} = \sum_k \frac{1}{R_k}$$

**Enunciato.** In un sistema di resistori in parallelo il **reciproco** della resistenza equivalente è la somma dei reciproci delle singole resistenze. $R_{eq}$ è sempre **minore della più piccola**. (Equivalentemente: in parallelo si sommano le conduttanze, $G_{eq} = G_1 + G_2 + \dots$)

Casi utili:
- **due resistori**: $R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$ (prodotto diviso somma);
- **$n$ resistori uguali** $R$: $R_{eq} = \dfrac{R}{n}$.

**Partitore di corrente.** Le correnti nei rami sono inversamente proporzionali alle resistenze: $\dfrac{i_1}{i_2} = \dfrac{R_2}{R_1}$. La corrente "preferisce" la strada più facile: **la resistenza minore è attraversata dalla corrente maggiore**, quella maggiore dalla corrente minore.

| | Serie | Parallelo |
|---|---|---|
| Uguale per tutti | la corrente $i$ | la tensione $V$ |
| Si somma | la tensione: $V = V_1 + V_2$ | la corrente: $i = i_1 + i_2$ |
| Formula | $R_{eq} = R_1 + R_2$ | $\dfrac{1}{R_{eq}} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ |
| Due resistori | $R_1 + R_2$ | $\dfrac{R_1R_2}{R_1+R_2}$ |
| $n$ uguali | $nR$ | $R/n$ |
| $R_{eq}$ rispetto alle singole | più grande della maggiore | più piccola della minore |
| Chi prende più corrente | tutti la stessa | la resistenza **minore** ($i = V/R$) |
| Chi ha più tensione ai capi | la resistenza **maggiore** ($V = Ri$) | tutti la stessa |

::: esempio
**Calcoli base di resistenza equivalente.**
- 20 Ω e 40 Ω in serie: $R_{eq} = 20 + 40 = 60\,\Omega$.
- 20 Ω e 40 Ω in parallelo: $R_{eq} = \dfrac{20 \cdot 40}{20 + 40} = \dfrac{800}{60} \approx 13{,}3\,\Omega$. Controllo: è minore di 20 Ω, come deve essere.
- Due da 10 Ω in serie: $20\,\Omega$. Due da 10 Ω in parallelo: $10/2 = 5\,\Omega$.
- Due da 20 Ω in parallelo, poi in serie con 10 Ω: prima riduco il parallelo, $20/2 = 10\,\Omega$; poi la serie, $10 + 10 = 20\,\Omega$.
:::

::: esempio
**Corrente in una serie.** Una pila da 9 V alimenta due resistenze da 5 Ω e 10 Ω in serie.
1. $R_{eq} = 5 + 10 = 15\,\Omega$.
2. $i = V/R_{eq} = 9/15 = 0{,}6\,\mathrm A$, la stessa nelle due resistenze.
3. Tensioni: $V_1 = 5 \cdot 0{,}6 = 3\,\mathrm V$ e $V_2 = 10 \cdot 0{,}6 = 6\,\mathrm V$. Somma: 9 V, come deve essere.
:::

::: esempio
**Limitare la corrente.** Si vogliono far passare 10 mA in una resistenza $R_0 = 400\,\Omega$ con una pila da 12 V. Che resistenza aggiungere, e come?
1. Da sola, $R_0$ prenderebbe $12/400 = 30\,\mathrm{mA}$: troppa. Bisogna **aumentare** la resistenza totale, quindi aggiungere un resistore **in serie** (in parallelo la resistenza totale diminuirebbe e la corrente nella pila aumenterebbe).
2. Resistenza totale necessaria: $R_{tot} = V/i = 12/0{,}010 = 1200\,\Omega$.
3. Resistenza da aggiungere: $R_1 = 1200 - 400 = 800\,\Omega$ in serie.
:::

::: esempio
**Rete di sei resistori.** (esercizio della dispensa) Tra i morsetti A e B c'è $V = 15\,\mathrm V$. Il percorso è: da A al nodo C un resistore $R_1$; dal nodo D a B un altro $R_1$; tra C e D due rami in parallelo, uno con il terzo $R_1$ e l'altro con tre $R_2$ in serie. Valori: $R_1 = 6\,\Omega$, $R_2 = 10\,\Omega$. Qual è la corrente?
1. Ramo con le tre $R_2$ in serie: $3R_2 = 30\,\Omega$.
2. Parallelo tra C e D: $R' = \dfrac{R_1 \cdot 3R_2}{R_1 + 3R_2} = \dfrac{6 \cdot 30}{36} = 5\,\Omega$.
3. Serie complessiva: $R_{eq} = R_1 + R' + R_1 = 6 + 5 + 6 = 17\,\Omega$.
4. Corrente: $i = V/R_{eq} = 15/17 \approx 0{,}88\,\mathrm A$.
:::

::: esempio
**Un cavo fatto di tanti fili.** (esercizio della dispensa) Un cavo è formato da 125 fili sottili, ognuno di resistenza $R_0 = 2{,}65\,\mu\Omega$, tutti con la stessa d.d.p. ai capi. La corrente totale è 750 mA. Trova la corrente in ogni filo, la d.d.p. e la resistenza del cavo.
1. I fili sono 125 resistori uguali **in parallelo**: la corrente si divide in parti uguali, $i_0 = \dfrac{0{,}750}{125} = 0{,}006\,\mathrm A = 6\,\mathrm{mA}$.
2. La d.d.p. è la stessa per ogni filo: $V = R_0\,i_0 = 2{,}65 \cdot 10^{-6} \cdot 0{,}006 \approx 1{,}59 \cdot 10^{-8}\,\mathrm V$.
3. Resistenza del cavo ($n$ resistori uguali in parallelo): $R_{eq} = \dfrac{R_0}{125} = \dfrac{2{,}65 \cdot 10^{-6}}{125} \approx 2{,}12 \cdot 10^{-8}\,\Omega$. Controllo: $V/i = 1{,}59 \cdot 10^{-8}/0{,}75 \approx 2{,}12 \cdot 10^{-8}\,\Omega$.
:::

## Resistenza e potenza: un primo collegamento

Molte domande di questa lezione usano già la potenza elettrica, che approfondiamo nella lezione successiva. Basta sapere che un resistore con tensione $V$ ai capi e corrente $i$ dissipa la potenza $P = V\,i$; usando $i = V/R$ si ottiene $P = V^2/R$, e usando $V = Ri$ si ottiene $P = R\,i^2$. Un apparecchio porta scritta la potenza $P$ alla tensione di lavoro $V$; da lì si ricava la sua resistenza:

$$R = \frac{V^2}{P}$$

dove $R$ = resistenza (Ω), $V$ = tensione di funzionamento (V), $P$ = potenza nominale (W).

**A parità di tensione, meno potenza vuol dire più resistenza.** Per assorbire più potenza con la stessa tensione serve far passare più corrente, quindi serve una resistenza minore.

::: esempio
**Faro d'automobile.** Un faro da 40 W funziona con la batteria da 12 V. $R = \dfrac{V^2}{P} = \dfrac{12^2}{40} = \dfrac{144}{40} = 3{,}6\,\Omega$. Verifica per altra strada: $i = P/V = 40/12 \approx 3{,}33\,\mathrm A$ e $R = V/i = 12/3{,}33 = 3{,}6\,\Omega$.
:::

::: esempio
**Lampada e scaldabagno alla stessa tensione.** Lampada da 120 W, scaldabagno da 1500 W. Da $R = V^2/P$ con la stessa $V$, la resistenza è inversamente proporzionale alla potenza: $\dfrac{R_{lampada}}{R_{scaldabagno}} = \dfrac{1500}{120} = 12{,}5$. Ha la resistenza maggiore la **lampada**.
:::

::: esempio
**Stessa d.d.p. su 1000 Ω e 2000 Ω.** Con la stessa $V$: $P_1 = V^2/1000$ e $P_2 = V^2/2000 = P_1/2$. Assorbe più potenza la resistenza **minore** (1000 Ω), che è anche attraversata da una corrente doppia. Il risultato vale per qualsiasi valore di $V$.
:::

::: esempio
**Calore prodotto.** Un dispositivo produce calore con potenza 2,5 W per 10 minuti: $Q = P\,t = 2{,}5 \cdot 600 = 1500\,\mathrm J$.
:::

::: attenzione
- **Tre resistori in serie, diversi o uguali:** tutti hanno la **stessa corrente**, sia il più grande sia il più piccolo. La corrente non "si consuma" passando nei resistori.
- **Tre resistori uguali in serie:** stessa corrente e stessa resistenza, quindi stessa tensione e **stessa potenza** ($P = Ri^2$) per tutti, anche quello al centro. La posizione nella serie non conta.
- **Resistori diversi in parallelo:** hanno tutti la stessa tensione; quello con resistenza **maggiore** conduce la corrente **minore**, quello con resistenza **minore** la corrente **maggiore**.
- **Quale formula della potenza?** Se è uguale la tensione (parallelo) confronta con $V^2/R$: vince la resistenza minore. Se è uguale la corrente (serie) confronta con $Ri^2$: vince la resistenza maggiore.
- La prima legge di Ohm si scrive $V = Ri$, cioè $i = V/R$. Scritture come $i = VR$ o $R = Vi$ sono sbagliate: controlla sempre le unità ($\mathrm A = \mathrm V/\Omega$).
:::

::: esame
**Chiuse:** resistenza da potenza e tensione ($R = V^2/P$), confronti di potenza a parità di tensione, chi prende più corrente in serie o in parallelo, $R_{eq}$ di serie e parallelo con numeri semplici, corrente in una serie, resistenza da aggiungere in serie, carica $Q = it$, forma corretta della prima legge di Ohm.

**Aperte** ("definire la resistenza e discutere serie e parallelo", "come si trovano le resistenze equivalenti", "esporre la prima legge di Ohm"). Traccia di risposta:
1. Prima legge di Ohm: in un conduttore ohmico la corrente è proporzionale alla d.d.p. applicata, $V = Ri$; la resistenza $R = V/i$ si misura in ohm ($1\,\Omega = 1\,\mathrm{V/A}$); l'inverso è la conduttanza $G = 1/R$ (siemens).
2. Origine microscopica: forma locale $\vec j = \sigma \vec E$ (o $\vec E = \rho \vec j$); per un filo cilindrico $V = Eh$, $i = jS$ danno $R = \rho\,l/S$ (seconda legge di Ohm), con $\rho$ che cresce con la temperatura nei metalli.
3. Serie: stessa corrente, le tensioni si sommano, $R_{eq} = \sum R_k$ (maggiore della più grande).
4. Parallelo: stessa tensione, le correnti si sommano ($i = i_1 + i_2$, conservazione della carica), $1/R_{eq} = \sum 1/R_k$ (minore della più piccola).
5. Ricavare le due formule con i passaggi scritti sopra.
:::

::: sintesi
- Corrente: $i = dq/dt$ (A); per corrente costante $Q = it$. L'ampere è grandezza fondamentale del SI, $1\,\mathrm C = 1\,\mathrm{A\,s}$.
- Densità di corrente: $\vec j = nq\vec v_d$ (A/m²), $i = \int \vec j \cdot \vec u_n\,dS$, per sezione perpendicolare $i = jS$. Verso convenzionale = cariche positive.
- Conservazione della carica: $\oint \vec j \cdot d\vec S = -dQ_{int}/dt$; continuità $\nabla\cdot\vec j = -\partial\rho/\partial t$; stazionario: $\nabla\cdot\vec j = 0$, stessa corrente in ogni sezione.
- Velocità di deriva $v_d = e\tau E/m$ (piccolissima); conduttività $\sigma = ne^2\tau/m$; Ohm locale $\vec j = \sigma\vec E$, $\vec E = \rho\vec j$.
- Prima legge di Ohm $V = Ri$; seconda $R = \rho\,l/S$; $\rho = \rho_0(1 + \alpha\Delta T)$; superconduttori: $\rho \approx 0$ sotto $T_c$. Wiedemann-Franz: $k/\sigma = LT$.
- Serie: stessa $i$, $R_{eq} = \sum R$. Parallelo: stessa $V$, $1/R_{eq} = \sum 1/R$; la resistenza minore prende più corrente.
- $R = V^2/P$: a parità di tensione, meno potenza significa più resistenza.
:::

=== 56 dispense
SLIDES: 63, 64
# Lezione 56 — Potenza elettrica ed effetto Joule

Nella lezione precedente abbiamo visto che un campo elettrico mette in moto le cariche in un conduttore. Ma spostare cariche significa **compiere lavoro**: il campo trasferisce energia alle cariche in movimento. In questa lezione calcoliamo quanta energia viene trasferita ogni secondo (la **potenza elettrica**) e dove va a finire. Nei conduttori ohmici finisce tutta in calore: è l'**effetto Joule**, che vediamo sia per un intero resistore sia in forma locale, punto per punto. Chiudiamo con la potenza in serie e in parallelo, le unità pratiche (kWh e Ah) e le applicazioni più comuni, come stufe, scaldabagni e fusibili.

## Lavoro del campo e potenza elettrica

Un campo elettrico applicato a delle cariche le sposta nel tempo, cioè produce una corrente. Mentre lo fa, compie lavoro.

**Ragionamento.**
1. Tra due punti A e B il campo mantiene una differenza di potenziale $\Delta V = V_A - V_B$.
2. Per definizione di potenziale, il lavoro fatto dal campo per portare una carica $dq$ da A a B è $dL = dq\,\Delta V$.
3. Nel tempo $dt$ passa la carica $dq = i\,dt$ (definizione di corrente). Quindi $dL = \Delta V\,i\,dt$.
4. La potenza è il lavoro per unità di tempo: $P = \dfrac{dL}{dt} = \Delta V\,i$.

$$P = V\,i$$

dove:
- $P$ = potenza elettrica trasferita dal campo alle cariche (W, watt)
- $V$ = differenza di potenziale tra i due punti (V)
- $i$ = intensità di corrente (A)

**Unità.** $1\,\mathrm W = 1\,\mathrm V \cdot 1\,\mathrm A = 1\,\dfrac{\mathrm J}{\mathrm C} \cdot \dfrac{\mathrm C}{\mathrm s} = 1\,\mathrm{J/s}$.

Questa formula è **generale**: vale per qualunque tratto di circuito, qualunque cosa ci sia dentro. Dove va poi l'energia dipende dal dispositivo:
- in un **conduttore ohmico** diventa **calore** (effetto Joule);
- in un **motore elettrico** diventa **lavoro meccanico**;
- in un **condensatore** viene **immagazzinata** come energia elettrostatica.

**Significato della potenza.** La potenza dice quanta energia viene trasferita **ogni secondo**. Un trapano da 500 W riceve dalle cariche che lo attraversano 500 J di energia ogni secondo. Una centrale da 5 MW può compiere un lavoro di 5 milioni di joule ogni secondo.

**Energia in un intervallo di tempo.** Se la potenza è costante, l'energia trasferita in un tempo $t$ è

$$E = P\,t$$

dove $E$ = energia (J), $P$ = potenza (W), $t$ = tempo (s).

::: esempio
**Potenza, tempo, energia.**
- Una lampadina da 100 W deve dissipare 30 kJ. Tempo: $t = \dfrac{E}{P} = \dfrac{30\,000\,\mathrm J}{100\,\mathrm W} = 300\,\mathrm s = 5\,\mathrm{minuti}$.
- Una sorgente da 500 W per 10 minuti: $t = 600\,\mathrm s$, $Q = P\,t = 500 \cdot 600 = 300\,000\,\mathrm J = 300\,\mathrm{kJ}$.
- Un impianto domestico da 3 kW a 220 V: la corrente massima che può passare è $i = \dfrac{P}{V} = \dfrac{3000}{220} \approx 13{,}6\,\mathrm A$.
:::

## L'effetto Joule

Nel modello classico la corrente è un moto d'insieme di cariche frenate da una specie di **attrito viscoso** (gli urti con il reticolo). Come ogni attrito, anche questo **dissipa** energia. Vediamo perché tutto il lavoro del campo diventa calore.

In un conduttore ohmico in **regime stazionario** il lavoro fatto dal campo per mantenere in moto le cariche:
- **non** diventa energia **potenziale**: il potenziale nei vari punti resta costante nel tempo;
- **non** diventa energia **cinetica**: la velocità di deriva resta costante, le cariche non accelerano.

Dove va allora? Negli **urti** con gli ioni del reticolo cristallino: l'energia passa agli ioni come **agitazione termica**, gli ioni vibrano di più e la temperatura del conduttore sale. Se il conduttore è a contatto con un ambiente più freddo, cede calore all'esterno. Questa **conversione completa in calore** del lavoro del campo elettrico sulla corrente si chiama **effetto Joule**.

Succede in **ogni** conduttore ohmico percorso da corrente, perché ogni conduttore reale ha resistenza $R > 0$. Fanno eccezione solo i superconduttori, che hanno resistenza nulla.

**Le tre forme della potenza dissipata.** Unisco la formula generale $P = Vi$ con la legge di Ohm $V = Ri$:
- sostituendo $V = Ri$: $P = (Ri)\,i = R\,i^2$;
- sostituendo $i = V/R$: $P = V \cdot \dfrac{V}{R} = \dfrac{V^2}{R}$.

$$P = V\,i = R\,i^2 = \frac{V^2}{R}$$

dove:
- $P$ = potenza dissipata in calore (W)
- $R$ = resistenza (Ω)
- $i$ = corrente nel resistore (A)
- $V$ = tensione ai capi del resistore (V)

Sono tre scritture **equivalenti**: scegli quella con i dati che hai. $Ri^2$ se conosci la corrente, $V^2/R$ se conosci la tensione. Il calore prodotto in un tempo $t$ è $Q = R\,i^2\,t$.

Queste relazioni servono a **progettare**: dimensionare un dispositivo che deve erogare il calore necessario a scaldare qualcosa, oppure, al contrario, evitare che un componente raggiunga temperature troppo alte.

::: esempio
**Applicazioni dirette delle tre forme.**
- Filo da 5 Ω con 16 A: $P = R\,i^2 = 5 \cdot 16^2 = 5 \cdot 256 = 1280\,\mathrm W$.
- Resistenza da 10 Ω su una pila da 9 V: $P = \dfrac{V^2}{R} = \dfrac{81}{10} = 8{,}1\,\mathrm W$.
- Resistenza da 1 kΩ a 50 V: $P = \dfrac{50^2}{1000} = \dfrac{2500}{1000} = 2{,}5\,\mathrm W$.
- Stufa da 500 W a 220 V: $R = \dfrac{V^2}{P} = \dfrac{48\,400}{500} \approx 97\,\Omega$, cioè circa 100 Ω.
- Resistenza alimentata a 12 V che eroga 40 W: $R = 144/40 = 3{,}6\,\Omega$.
- Lampadina che assorbe 300 mA da una batteria da 1,5 V: $R = \dfrac{V}{i} = \dfrac{1{,}5}{0{,}3} = 5\,\Omega$ (qui basta la legge di Ohm).
- Resistenza da 22 Ω attaccata alla rete a 220 V: $i = \dfrac{V}{R} = \dfrac{220}{22} = 10\,\mathrm A$.
:::

::: esempio
**Una resistenza che brucia.** Una resistenza da 10 Ω, che regge al massimo 5 W, è collegata a una pila da 9 V. Potenza dissipata: $P = V^2/R = 81/10 = 8{,}1\,\mathrm W$. È più del massimo di 5 W: il componente si surriscalda e **brucia**.
:::

::: esempio
**Lampadina accesa ogni giorno.** (esercizio della dispensa) Una lampadina da 100 W è alimentata a 220 V. L'energia costa 0,10 euro/kWh. Quanto costa tenerla accesa 12 ore al giorno? Quanto valgono la sua resistenza e la corrente?
1. Energia consumata in un'ora: $E = P\,\Delta t = 0{,}1\,\mathrm{kW} \cdot 1\,\mathrm h = 0{,}1\,\mathrm{kWh}$. In 12 ore: $1{,}2\,\mathrm{kWh}$.
2. Costo: $1{,}2 \cdot 0{,}10 = 0{,}12$ euro al giorno.
3. Resistenza: invertendo $P = V^2/R$, $R = \dfrac{V^2}{P} = \dfrac{220^2}{100} = \dfrac{48\,400}{100} = 484\,\Omega$.
4. Corrente: $i = \dfrac{P}{V} = \dfrac{100}{220} \approx 0{,}45\,\mathrm A$.
:::

::: attenzione
La **potenza** si misura in **watt**, l'**energia** in **joule**. Se la domanda chiede "quanta potenza", una risposta in joule (per esempio "8,1 J") è sbagliata anche se il numero è giusto.
:::

## Forma locale dell'effetto Joule

A volte serve sapere quanta potenza si dissipa in un **volumetto** del conduttore, per esempio quando la corrente non è uniforme. Si usa allora la **densità di potenza**, cioè la potenza per unità di volume.

**Ragionamento.**
1. Nel volumetto $dV$ ci sono $n\,dV$ portatori, ciascuno con carica $q$.
2. Su ogni portatore il campo esercita la forza $q\vec E$. Per spostarli tutti di un tratto $d\vec l$ il campo compie il lavoro $dL = n\,dV\,q\,\vec E \cdot d\vec l$.
3. Lo spostamento in un tempo $dt$ è legato alla velocità di deriva: $d\vec l = \vec v_d\,dt$. Quindi $dL = n\,dV\,q\,\vec E \cdot \vec v_d\,dt = \vec E \cdot (n q \vec v_d)\,dV\,dt$.
4. Riconosco la densità di corrente: $n q \vec v_d = \vec j$. Quindi $dL = \vec E \cdot \vec j\,dV\,dt$.
5. Divido per il volume e per il tempo: la potenza per unità di volume è

$$w = \frac{dL}{dV\,dt} = \vec E \cdot \vec j$$

dove:
- $w$ = densità di potenza dissipata (W/m³)
- $\vec E$ = campo elettrico nel punto (V/m)
- $\vec j$ = densità di corrente nel punto (A/m²)

In un conduttore ohmico **isotropo** $\vec E$ e $\vec j$ sono sempre paralleli ($\vec j = \sigma\vec E$), quindi il prodotto scalare diventa un semplice prodotto dei moduli:

$$w = E\,j = \rho\,j^2 = \sigma\,E^2$$

**Verifica.** In un filo cilindrico di sezione $S$ e lunghezza $l$, con corrente uniforme: $w = \rho j^2 = \rho\,i^2/S^2$. Moltiplico per il volume $S\,l$: $P = \rho\,\dfrac{i^2}{S^2}\,S\,l = \left(\rho\,\dfrac{l}{S}\right) i^2 = R\,i^2$. Si ritrova la forma "globale".

## Potenza in sistemi di resistori

Anche per la potenza dissipata da più resistori si può usare la **resistenza equivalente**.

**Serie.** La corrente $i$ è la stessa nei due resistori. Uso la forma con la corrente:

$$P = R_1 i^2 + R_2 i^2 = (R_1 + R_2)\,i^2 = R_{eq}\,i^2$$

La potenza totale è quella che dissiperebbe la resistenza equivalente attraversata dalla stessa corrente. Il resistore **più grande** dissipa di più.

**Parallelo.** La d.d.p. $\Delta V$ è la stessa ai capi dei due resistori. Uso la forma con la tensione:

$$P = \frac{\Delta V^2}{R_1} + \frac{\Delta V^2}{R_2} = \Delta V^2 \left(\frac{1}{R_1} + \frac{1}{R_2}\right) = \frac{\Delta V^2}{R_{eq}}$$

La potenza totale è quella di un resistore equivalente con la stessa d.d.p. ai capi. Il resistore **più piccolo** dissipa di più.

::: esempio
**Trovare una resistenza in parallelo.** A una batteria ideale da 1,5 V sono collegate due resistenze in parallelo; la batteria eroga 50 mA. Una resistenza vale 60 Ω. Quanto vale l'altra?
1. Resistenza equivalente vista dalla batteria: $R_{eq} = \dfrac{V}{i} = \dfrac{1{,}5}{0{,}050} = 30\,\Omega$.
2. Parallelo: $\dfrac{1}{30} = \dfrac{1}{60} + \dfrac{1}{R}$, quindi $\dfrac{1}{R} = \dfrac{1}{30} - \dfrac{1}{60} = \dfrac{2 - 1}{60} = \dfrac{1}{60}$.
3. $R = 60\,\Omega$. Ha senso: due resistenze uguali in parallelo danno la metà, $60/2 = 30\,\Omega$.
:::

::: esempio
**Due lampade, serie o parallelo.** Lampade da 100 Ω e 200 Ω, generatore da 100 V.
- **In parallelo:** $R_{eq} = \dfrac{100 \cdot 200}{300} \approx 66{,}7\,\Omega$; corrente nel generatore $i = \dfrac{100}{66{,}7} = 1{,}5\,\mathrm A$. Controllo con i rami: $100/100 = 1\,\mathrm A$ più $100/200 = 0{,}5\,\mathrm A$, totale 1,5 A. Potenza totale $100 \cdot 1{,}5 = 150\,\mathrm W$; brilla di più la lampada da 100 Ω (100 W contro 50 W).
- **In serie:** $R_{eq} = 300\,\Omega$; $i = \dfrac{100}{300} \approx 0{,}33\,\mathrm A$. Potenza totale $100 \cdot 0{,}33 \approx 33\,\mathrm W$; ora brilla di più la lampada da 200 Ω ($200 \cdot 0{,}33^2 \approx 22\,\mathrm W$ contro 11 W).
:::

::: esempio
**Lampadine da 6 V su un generatore da 120 V.** Ogni lampadina deve avere ai capi 6 V. In **parallelo** ognuna avrebbe tutti i 120 V e brucerebbe. In **serie** la tensione si divide in parti uguali tra lampadine uguali: ne servono $n = \dfrac{120}{6} = 20$ in serie, così ognuna riceve $120/20 = 6\,\mathrm V$.
:::

## Scaldare con una resistenza

Per dimensionare un riscaldatore elettrico si procede a ritroso: prima il **calore** necessario, poi la **potenza**, poi la **grandezza elettrica** richiesta (tensione, resistenza o lunghezza del filo).

$$Q = m\,c\,\Delta T \qquad P = \frac{Q}{t}$$

dove:
- $Q$ = calore da fornire (J)
- $m$ = massa (kg; 1 litro d'acqua ≈ 1 kg)
- $c$ = calore specifico (J/(kg·K); acqua circa 4186)
- $\Delta T$ = aumento di temperatura (K, uguale in °C)
- $P$ = potenza richiesta (W), $t$ = tempo disponibile (s)

::: esempio
**Serpentina in un serbatoio.** Una serpentina da 30 Ω scalda 40 L d'acqua da 15 °C a 45 °C in 30 minuti. Che tensione serve?
1. Calore: $Q = m c \Delta T = 40 \cdot 4186 \cdot 30 \approx 5{,}02 \cdot 10^6\,\mathrm J$.
2. Potenza: $t = 30 \cdot 60 = 1800\,\mathrm s$, $P = Q/t \approx 5{,}02 \cdot 10^6/1800 \approx 2790\,\mathrm W$.
3. Tensione: da $P = V^2/R$, $V = \sqrt{P\,R} = \sqrt{2790 \cdot 30} = \sqrt{83\,700} \approx 290\,\mathrm V$.
:::

::: esempio
**Quanto filo per scaldare l'acqua.** (esercizio della dispensa) Si vogliono portare 10 L d'acqua da 10 °C a 60 °C in 10 minuti con un filo di diametro 1 mm, resistività $\rho = 8 \cdot 10^{-8}\,\Omega\,\mathrm m$, che regge al massimo 10 A. Quanto deve essere lungo il filo?
1. Calore: $Q = m c \Delta T = 10 \cdot 4186 \cdot 50 \approx 2{,}1 \cdot 10^6\,\mathrm J$.
2. Potenza: $P = Q/\Delta t = 2{,}1 \cdot 10^6/600 \approx 3{,}5\,\mathrm{kW}$.
3. Con la corrente massima $i = 10\,\mathrm A$: $P = R\,i^2 = \rho\,\dfrac{l}{S}\,i^2$, quindi $l = \dfrac{P\,S}{\rho\,i^2}$.
4. Sezione: $S = \pi (0{,}5 \cdot 10^{-3})^2 \approx 7{,}85 \cdot 10^{-7}\,\mathrm{m^2}$.
5. $l = \dfrac{3490 \cdot 7{,}85 \cdot 10^{-7}}{8 \cdot 10^{-8} \cdot 100} \approx \dfrac{2{,}74 \cdot 10^{-3}}{8 \cdot 10^{-6}} \approx 342{,}5\,\mathrm m$.
:::

::: esempio
**Filo per un riscaldatore da 60 W.** Generatore da 24 V, filo di bronzo fosforoso con resistività 0,12 mΩ·cm e diametro 0,24 mm. Quanto filo serve per fornire 60 W?
1. Converto la resistività: $0{,}12\,\mathrm{m\Omega\,cm} = 0{,}12 \cdot 10^{-3}\,\Omega \cdot 10^{-2}\,\mathrm m = 1{,}2 \cdot 10^{-6}\,\Omega\,\mathrm m$.
2. Resistenza necessaria: $R = \dfrac{V^2}{P} = \dfrac{576}{60} = 9{,}6\,\Omega$.
3. Sezione: raggio 0,12 mm, $S = \pi(0{,}12 \cdot 10^{-3})^2 \approx 4{,}52 \cdot 10^{-8}\,\mathrm{m^2}$.
4. Lunghezza: $l = \dfrac{R\,S}{\rho} = \dfrac{9{,}6 \cdot 4{,}52 \cdot 10^{-8}}{1{,}2 \cdot 10^{-6}} \approx 0{,}362\,\mathrm m = 36{,}2\,\mathrm{cm}$.
:::

## Applicazioni dell'effetto Joule

- **Stufe, scaldabagni, ferri da stiro, forni elettrici**: una resistenza percorsa da corrente scalda l'ambiente o l'oggetto a contatto.
- **Lampade a incandescenza**: il filamento si scalda tanto da diventare incandescente ed emettere luce (gran parte dell'energia però resta calore).
- **Fusibili**: un filo sottile che, se la corrente supera un valore di sicurezza, si scalda fino a fondere e interrompe il circuito.
- **Effetto indesiderato**: nelle linee elettriche e nei componenti elettronici il calore Joule è una perdita; per questo i cavi si dimensionano in base alla corrente che devono portare e i componenti hanno una potenza massima.

## Unità pratiche: kWh e Ah

- Il **kilowattora** (kWh) è un'unità di **energia**: l'energia trasferita da 1 kW in un'ora. $1\,\mathrm{kWh} = 1000\,\mathrm W \cdot 3600\,\mathrm s = 3{,}6 \cdot 10^6\,\mathrm J$. È l'unità delle bollette.
- L'**ampere-ora** (Ah) è un'unità di **carica**: la carica trasportata da 1 A in un'ora. $1\,\mathrm{Ah} = 1\,\mathrm A \cdot 3600\,\mathrm s = 3600\,\mathrm C$.

::: esempio
**Batteria dell'auto: 12 V e 50 Ah.** 12 V è la d.d.p. ai morsetti. 50 Ah è la **quantità di carica** che la batteria può fornire: $Q = 50 \cdot 3600 = 180\,000\,\mathrm C$. Per esempio può erogare 5 A per 10 ore, o 1 A per 50 ore. L'energia immagazzinata è circa $Q\,V = 180\,000 \cdot 12 \approx 2{,}2 \cdot 10^6\,\mathrm J = 0{,}6\,\mathrm{kWh}$.
:::

::: attenzione
- "50 Ah" non è una corrente e non è una durata: è una **carica**.
- "kWh" non è una potenza: è un'**energia**. Il kW è la potenza.
- "Qualunque conduttore ohmico percorso da corrente dissipa energia per effetto Joule" è **sempre vero**: basta che $R > 0$ e $i \neq 0$.
:::

::: esame
**Chiuse:** significato di una potenza (watt = joule al secondo), calcoli con $P = Vi = Ri^2 = V^2/R$, resistenza da potenza e tensione, componente che brucia, tempo per dissipare un'energia, corrente massima di un impianto, resistenze in serie/parallelo con la potenza, serpentine e fili riscaldanti, significato dell'ampere-ora.

**Aperte:**
- "Definire la potenza elettrica": lavoro per spostare $dq$ attraverso la d.d.p. $V$ è $dL = V\,dq$; con $dq = i\,dt$ si ha $P = dL/dt = Vi$, in watt (J/s); formula generale, l'energia può diventare calore, lavoro meccanico o energia immagazzinata.
- "Cos'è l'effetto Joule / in cosa consiste e che forma assume localmente": in un conduttore ohmico in regime stazionario il lavoro del campo non diventa energia cinetica (velocità di deriva costante) né potenziale (potenziale costante), ma va agli ioni del reticolo negli urti e diventa calore; $P = Vi = Ri^2 = V^2/R$; forma locale $w = \vec E \cdot \vec j$ ricavata dal lavoro su $n\,dV$ cariche, che per conduttori isotropi diventa $w = \rho j^2 = \sigma E^2$; per serie e parallelo vale la resistenza equivalente.
:::

::: sintesi
- Potenza elettrica (formula generale): $P = Vi$, in watt; $1\,\mathrm W = 1\,\mathrm{J/s}$. Energia $E = Pt$.
- Effetto Joule: in un conduttore ohmico tutta l'energia elettrica diventa calore, $P = Vi = Ri^2 = V^2/R$, calore $Q = Ri^2 t$.
- Forma locale: $w = \vec E \cdot \vec j = \rho j^2 = \sigma E^2$ (W/m³).
- Serie: $P = R_{eq}i^2$ (il resistore maggiore scalda di più). Parallelo: $P = V^2/R_{eq}$ (il minore scalda di più).
- Riscaldatori: $Q = mc\Delta T \to P = Q/t \to$ grandezza elettrica.
- kWh = energia ($3{,}6 \cdot 10^6$ J); Ah = carica (3600 C).
:::

=== 57 dispense
SLIDES: 65
# Lezione 57 — Generatori e forza elettromotrice

Abbiamo visto che una corrente in un conduttore dissipa energia (effetto Joule). Allora chi fornisce questa energia in modo continuo? Senza un rifornimento le cariche si fermerebbero e la differenza di potenziale si annullerebbe. In questa lezione introduciamo i **generatori**, i dispositivi che mantengono la corrente in un circuito. Capiamo perché serve un campo **non conservativo** (il campo elettromotore), definiamo la **forza elettromotrice**, costruiamo il **circuito equivalente** di un generatore reale (generatore ideale più resistenza interna) e facciamo il bilancio energetico, fino al teorema del massimo trasferimento di potenza.

## I generatori

Se tra due punti di un conduttore c'è una differenza di potenziale, nel conduttore passa una corrente: un moto (equivalente) di cariche positive dal punto a potenziale maggiore a quello a potenziale minore. Ma così le cariche si ridistribuiscono e la differenza di potenziale tende ad annullarsi. Per **mantenerla**, nonostante il flusso di cariche, serve un dispositivo chiamato **generatore elettrico** (generatore di forza elettromotrice, o di tensione).

Un generatore ha sempre due elettrodi conduttori, i **morsetti** (o poli):
- il polo **positivo**, dove si accumulano cariche positive, detto **anodo**;
- il polo **negativo**, dove si accumulano cariche negative, detto **catodo**.

Collegando i morsetti a uno o più elementi, detti **carichi** (resistivi, capacitivi o, come vedremo più avanti nel corso, induttivi), il generatore alimenta un circuito.

**Simbolo.** Nei circuiti il generatore si disegna con due tratti paralleli di lunghezza diversa: il tratto **più lungo** è il polo **positivo**, quello più corto il polo negativo.

Poiché una corrente che scorre in un circuito è sempre accompagnata da dissipazione o da lavoro svolto, il ruolo del generatore è **rifornire in continuazione l'energia** necessaria.

## Il campo elettromotore

Le cariche accumulate sui morsetti producono nel circuito il campo elettrostatico che mantiene le cariche in moto. Però nel circuito ci sono processi (come l'effetto Joule) che tolgono energia alle cariche e la trasformano in altre forme. Perché il moto continui in modo stazionario, il lavoro fatto sui portatori di carica lungo un giro completo del circuito deve essere **diverso da zero**:

$$\oint \vec E \cdot d\vec l \neq 0$$

dove $\vec E$ = campo **totale** che agisce sulle cariche lungo il circuito (V/m) e l'integrale è fatto su tutto il circuito chiuso. Il campo totale quindi **non può essere conservativo**.

Il campo elettrostatico $\vec E_s$ però è sempre conservativo: su un giro chiuso il suo lavoro è nullo ($\oint \vec E_s \cdot d\vec l = 0$). Da solo non può mantenere una corrente che dissipa energia. Dentro il generatore deve quindi agire un altro campo, **non conservativo**, che si sovrappone al campo elettrostatico dei morsetti: il **campo elettromotore** $\vec E_m$. È dovuto a processi di natura diversa: chimica (pile), luminosa (celle fotovoltaiche), meccanica o magnetica (dinamo, come vedremo).

In un generatore localizzato:
- il campo elettromotore **separa le cariche**: spinge le positive verso il polo positivo e le negative verso il polo negativo;
- così facendo compie lavoro **contro** il campo elettrostatico, che si oppone a questo accumulo: dentro il generatore **i due campi hanno verso opposto**.

Un'immagine utile: il generatore è come una pompa che riporta in alto l'acqua. Nel circuito esterno le cariche "scendono" di potenziale (e cedono energia); dentro il generatore il campo elettromotore le "risale", spendendo energia chimica, luminosa o meccanica.

## Forza elettromotrice

**Definizione.** La **forza elettromotrice** (f.e.m.) di un generatore è l'integrale di linea del campo elettromotore lungo un cammino interno al generatore, dal morsetto negativo a quello positivo:

$$\mathcal E = \int_{-}^{+} \vec E_m \cdot d\vec l$$

dove:
- $\mathcal E$ = forza elettromotrice (V)
- $\vec E_m$ = campo elettromotore (V/m)
- $d\vec l$ = tratto infinitesimo del cammino interno (m)

**Significato:** la f.e.m. è il **lavoro** che il campo elettromotore compie per portare l'**unità di carica positiva** dal polo negativo a quello positivo. Essendo un lavoro per unità di carica, si misura in **volt** ($1\,\mathrm V = 1\,\mathrm{J/C}$). Nonostante il nome, **non è una forza**.

**A circuito aperto.** Prendiamo il generatore isolato, con i morsetti non collegati a nulla (**circuito aperto**). Il campo elettromotore accumula cariche sui morsetti finché il campo elettrostatico che esse producono diventa abbastanza intenso da **bilanciarlo**. All'equilibrio, dentro il generatore, $\vec E_m = -\vec E_s$ e le cariche non si muovono più. Allora:

$$\mathcal E = \int_{-}^{+} \vec E_m \cdot d\vec l = -\int_{-}^{+} \vec E_s \cdot d\vec l = V_+ - V_-$$

Nell'ultimo passaggio ho usato la relazione tra potenziale e campo elettrostatico conservativo: $-\int_A^B \vec E_s \cdot d\vec l = V_B - V_A$. Quindi **a circuito aperto la f.e.m. coincide con la differenza di potenziale tra i poli** del generatore.

**Definizione generale.** Se il campo elettromotore non è localizzato in un generatore ma è distribuito lungo tutto il circuito (casi che vedremo con l'induzione elettromagnetica), si definisce

$$\mathcal E = \oint \vec E_m \cdot d\vec l$$

che si riduce alla definizione precedente se $\vec E_m$ è diverso da zero solo nel generatore. Infine, poiché il campo elettrostatico ha circuitazione nulla, si può usare il campo **totale** $\vec E = \vec E_s + \vec E_m$:

$$\mathcal E = \oint \vec E \cdot d\vec l$$

La f.e.m. è la **circuitazione del campo elettrico totale** lungo il circuito: il contributo elettrostatico si annulla e resta solo quello del campo elettromotore.

## Generatore reale: la resistenza interna

Quando il generatore viene collegato a un circuito e inizia a erogare corrente, la differenza di potenziale ai suoi morsetti **diminuisce** rispetto al valore a circuito aperto, e diminuisce tanto più quanto più corrente eroga. Per correnti molto alte la diminuzione può diventare non lineare, ma nei casi normali è **proporzionale alla corrente**:

$$V_A - V_B = \mathcal E - r\,i$$

dove:
- $V_A - V_B$ = tensione ai morsetti del generatore (V)
- $\mathcal E$ = forza elettromotrice, cioè la tensione a vuoto (V)
- $r$ = **resistenza interna** del generatore (Ω)
- $i$ = corrente erogata (A)

- **Circuito aperto** ($i = 0$): $V_A - V_B = \mathcal E$.
- **Circuito chiuso**: la tensione ai morsetti cala linearmente con la corrente.

Questa relazione equivale a pensare che dentro il generatore, tra la "sorgente" e il punto di collegamento al circuito, ci sia una resistenza $r$ su cui la corrente produce la caduta di tensione $r\,i$.

**Circuito equivalente.** Il generatore reale si schematizza come un **generatore ideale** di f.e.m. $\mathcal E$ (quella a vuoto) **in serie** con una **resistenza interna** $r$. Collegato a un carico esterno $R$, si ottiene un circuito con una sola maglia: generatore ideale, $r$ e $R$ in serie.

**Corrente nel circuito.** La tensione ai morsetti è anche la tensione ai capi del carico: $\mathcal E - r\,i = R\,i$. Quindi:

$$i = \frac{\mathcal E}{R + r}$$

dove $R$ = resistenza del carico (Ω). È come se la f.e.m. alimentasse la serie di $R$ e $r$.

- Se si collegano i morsetti con un filo senza resistenza (**cortocircuito**, $R = 0$), la corrente è la massima possibile, $i_{cc} = \mathcal E/r$, e la tensione ai morsetti è zero.
- Un **generatore ideale** ha $r = 0$: la tensione ai morsetti è sempre $\mathcal E$, qualunque sia la corrente. Negli esercizi, se non si dice nulla, il generatore si considera ideale.

::: esempio
**Pila con resistenza interna.** Una pila da 9 V con $r = 1\,\Omega$ alimenta un carico da 8 Ω.
1. Corrente: $i = \dfrac{\mathcal E}{R + r} = \dfrac{9}{8 + 1} = 1\,\mathrm A$.
2. Tensione ai morsetti: $V = \mathcal E - r\,i = 9 - 1 \cdot 1 = 8\,\mathrm V$, che è proprio $R\,i = 8 \cdot 1$.
3. Se la pila fosse ideale la corrente sarebbe $9/8 = 1{,}125\,\mathrm A$.
:::

::: esempio
**Misurare f.e.m. e resistenza interna.** (esercizio della dispensa) Una batteria collegata a $R_1 = 500\,\Omega$ dà ai capi della resistenza $\Delta V_1 = 0{,}10\,\mathrm V$. Collegata a $R_2 = 1000\,\Omega$ dà $\Delta V_2 = 0{,}15\,\mathrm V$. Trova $r$ e $\mathcal E$.
1. Le correnti nei due casi: $i_1 = \Delta V_1/R_1 = 0{,}10/500 = 2 \cdot 10^{-4}\,\mathrm A$; $i_2 = \Delta V_2/R_2 = 0{,}15/1000 = 1{,}5 \cdot 10^{-4}\,\mathrm A$.
2. Per ogni caso vale $\Delta V = \mathcal E - r\,i$. Sistema: $0{,}10 = \mathcal E - r \cdot 2 \cdot 10^{-4}$ e $0{,}15 = \mathcal E - r \cdot 1{,}5 \cdot 10^{-4}$.
3. Sottraggo la prima dalla seconda: $0{,}05 = r\,(2 - 1{,}5) \cdot 10^{-4} = r \cdot 0{,}5 \cdot 10^{-4}$, quindi $r = 1000\,\Omega$.
4. Sostituisco: $\mathcal E = 0{,}10 + 1000 \cdot 2 \cdot 10^{-4} = 0{,}10 + 0{,}20 = 0{,}30\,\mathrm V$.

In forma generale la dispensa ottiene $r = \dfrac{R_1R_2(\Delta V_2 - \Delta V_1)}{\Delta V_1 R_2 - \Delta V_2 R_1}$: con i numeri, $\dfrac{500 \cdot 1000 \cdot 0{,}05}{0{,}1 \cdot 1000 - 0{,}15 \cdot 500} = \dfrac{25\,000}{25} = 1000\,\Omega$.
:::

## Potenza del generatore e bilancio energetico

**Lavoro del generatore.** Quando il generatore è attraversato dalla carica $dq = i\,dt$, il campo elettromotore compie su di essa il lavoro $dL = \mathcal E\,dq = \mathcal E\,i\,dt$ (per definizione di f.e.m.). La potenza fornita alla corrente è quindi:

$$P_g = \frac{dL}{dt} = \mathcal E\,i$$

**Bilancio.** Una volta collegato al circuito, il generatore ha anche una dissipazione interna. La potenza erogata si divide tra il carico e la resistenza interna:

$$\mathcal E\,i = R\,i^2 + r\,i^2$$

dove:
- $\mathcal E\,i$ = potenza erogata dal generatore, ottenuta a spese di energia chimica, luminosa, ecc. (W)
- $R\,i^2$ = potenza dissipata nel carico per effetto Joule (W)
- $r\,i^2$ = potenza dissipata dentro il generatore (W)

**Coerenza del modello.** Divido per $i$: $\mathcal E = R\,i + r\,i$, cioè $R\,i = \mathcal E - r\,i$. È proprio la relazione $V_A - V_B = \mathcal E - r\,i$ trovata prima, se si interpreta la dissipazione interna come effetto Joule sulla resistenza interna. Il circuito equivalente "generatore ideale + $r$ in serie" descrive quindi correttamente anche l'**energetica** del sistema.

::: esempio
**Bilancio energetico in 2 minuti.** (esercizio della dispensa) Un filo da 5 Ω è collegato a una pila con f.e.m. 2 V e resistenza interna 1 Ω. Dopo 2 minuti: quanta energia chimica è diventata elettrica? Quanta è diventata calore nel filo e quanta nella pila?
1. Corrente: $i = \dfrac{\mathcal E}{R + r} = \dfrac{2}{6} \approx 0{,}33\,\mathrm A$. Tempo: $\Delta t = 120\,\mathrm s$.
2. Energia chimica convertita: $E_{ch} = \mathcal E\,i\,\Delta t = 2 \cdot \tfrac13 \cdot 120 = 80\,\mathrm J$.
3. Calore nel filo: $Q = R\,i^2\,\Delta t = 5 \cdot \tfrac19 \cdot 120 \approx 67\,\mathrm J$.
4. Calore nella pila: $Q_{int} = r\,i^2\,\Delta t = 1 \cdot \tfrac19 \cdot 120 \approx 13\,\mathrm J$.
5. Controllo: $67 + 13 = 80\,\mathrm J$. L'energia si conserva.
:::

## Massimo trasferimento di potenza

Un generatore reale è collegato a una resistenza variabile $R$. Per quale $R$ la potenza dissipata sul carico è massima? (esercizio della dispensa)

1. Corrente: $i = \dfrac{\mathcal E}{R + r}$.
2. Potenza sul carico: $W = R\,i^2 = R\,\dfrac{\mathcal E^2}{(R + r)^2}$.
3. Derivo rispetto a $R$ (regola del prodotto):
$$\frac{dW}{dR} = \frac{\mathcal E^2}{(R + r)^2} - 2R\,\frac{\mathcal E^2}{(R + r)^3} = \frac{\mathcal E^2\,(R + r - 2R)}{(R + r)^3} = \frac{\mathcal E^2\,(r - R)}{(R + r)^3}$$
4. La derivata si annulla per $R = r$; è positiva per $R < r$ e negativa per $R > r$, quindi è un **massimo**.
5. Sostituisco $R = r$:

$$W_{max} = r\,\frac{\mathcal E^2}{(2r)^2} = \frac{\mathcal E^2}{4r}$$

dove $W_{max}$ = massima potenza trasferibile al carico (W).

**Perché.** Con $R$ molto piccola passa molta corrente, ma quasi tutta la potenza si perde dentro il generatore. Con $R$ molto grande la tensione è quasi tutta sul carico, ma passa pochissima corrente. Il compromesso migliore è il carico "adattato" $R = r$. In quella condizione il generatore eroga $\mathcal E\,i = \mathcal E^2/(2r)$: metà va al carico e metà si perde nel generatore (rendimento del 50%).

## Riscaldare con la corrente

Il calore prodotto in un tempo $t$ da una resistenza percorsa dalla corrente $i$ è $Q = R\,i^2\,t$.

::: esempio
**Basta per scaldare un litro d'acqua di 1 °C?** Per scaldare di 1 °C un litro d'acqua servono 4180 J. Una corrente di 2 A passa in una resistenza da 10 Ω per 2 minuti.
1. $Q = R\,i^2\,t = 10 \cdot 2^2 \cdot 120 = 10 \cdot 4 \cdot 120 = 4800\,\mathrm J$.
2. $4800\,\mathrm J > 4180\,\mathrm J$: **sì**, il calore prodotto basta (e avanza).
:::

## Esempi di generatori: pile e celle fotovoltaiche

- **Pile.** La f.e.m. è prodotta a spese di **energia chimica**. Il prototipo è la **pila di Volta**: un elettrodo di **rame** e uno di **zinco** immersi in una soluzione di acido solforico in acqua. Gli ioni positivi e negativi migrano su elettrodi diversi a seconda dell'affinità elettrochimica con i due metalli: sullo **zinco** si depositano cariche negative (è il **catodo**, polo negativo), sul **rame** si accumulano cariche positive (polo positivo).
- **Celle fotovoltaiche.** Sfruttano le proprietà dei **semiconduttori al silicio** per produrre una f.e.m. a spese dell'**energia luminosa** della radiazione solare. La conoscenza sempre più approfondita dei materiali le ha rese via via più efficienti.

::: attenzione
- La f.e.m. **non è una forza**: è un lavoro per unità di carica, in volt.
- La f.e.m. è uguale alla tensione ai morsetti **solo a circuito aperto** (o per un generatore ideale). Quando il generatore eroga corrente, la tensione ai morsetti è **minore**: $\mathcal E - ri$.
- Nel circuito equivalente la resistenza interna è **in serie** con il generatore ideale, non in parallelo.
- La massima **potenza** al carico si ha per $R = r$; la massima **corrente** si ha invece in cortocircuito ($R = 0$).
:::

::: esame
**Chiusa:** calore $Q = Ri^2t$ prodotto da una corrente in una resistenza, confrontato con il calore richiesto.

**Aperta** ("definire la f.e.m. e descrivere il circuito equivalente di un generatore reale collegato a un carico"). Traccia:
1. Una corrente stazionaria dissipa energia, quindi la circuitazione del campo totale deve essere non nulla; il campo elettrostatico è conservativo, perciò serve un campo elettromotore non conservativo, localizzato nel generatore, che porta le cariche positive al polo positivo contro il campo elettrostatico.
2. Definizione: $\mathcal E = \int_-^+ \vec E_m \cdot d\vec l = \oint \vec E \cdot d\vec l$, lavoro per unità di carica, in volt; a circuito aperto è uguale alla d.d.p. tra i poli.
3. Circuito equivalente: generatore ideale $\mathcal E$ in serie con la resistenza interna $r$, collegato al carico $R$; $V_A - V_B = \mathcal E - ri$, $i = \mathcal E/(R + r)$.
4. Bilancio: $\mathcal E i = Ri^2 + ri^2$; (eventualmente) massimo trasferimento per $R = r$, $W_{max} = \mathcal E^2/4r$.
:::

::: sintesi
- Il generatore mantiene la d.d.p. tra i morsetti (anodo +, catodo −) e rifornisce l'energia dissipata nel circuito.
- Serve un campo non conservativo, il campo elettromotore, opposto al campo elettrostatico dentro il generatore.
- F.e.m.: $\mathcal E = \int_-^+ \vec E_m \cdot d\vec l = \oint \vec E \cdot d\vec l$, in volt; a circuito aperto $\mathcal E = V_+ - V_-$.
- Generatore reale = ideale in serie con $r$: $V = \mathcal E - ri$, $i = \mathcal E/(R + r)$; cortocircuito $i = \mathcal E/r$.
- Bilancio: $\mathcal E i = Ri^2 + ri^2$.
- Massima potenza al carico per $R = r$: $W_{max} = \mathcal E^2/4r$ (rendimento 50%).
- Pila di Volta (rame +, zinco −, energia chimica); cella fotovoltaica (silicio, energia luminosa).
:::

=== 58 dispense
SLIDES: 66
# Lezione 58 — Circuiti e leggi di Kirchhoff

Con la legge di Ohm, la resistenza equivalente e il generatore reale sappiamo risolvere circuiti con una sola maglia. Molti circuiti però hanno più generatori e più percorsi che non si riducono a serie e parallelo. In questa lezione introduciamo il linguaggio delle **reti elettriche** (nodi, rami, maglie) e le due **leggi di Kirchhoff**, che permettono di scrivere un sistema di equazioni lineari e trovare tutte le correnti di qualunque rete di resistori e generatori. Vediamo poi il **teorema di Thevenin**, il **ponte di Wheatstone** e come gli strumenti di misura (amperometro e voltmetro) disturbano il circuito che misurano.

## Circuiti elettrici e modello a parametri concentrati

Un sistema di dispositivi elettrici collegati tra loro da conduttori si chiama **circuito elettrico**. Lo si descrive con un **modello a parametri concentrati**:
- ogni elemento (resistore, generatore, condensatore) è rappresentato dal suo simbolo ed è ben localizzato;
- gli elementi sono collegati da fili di **resistenza trascurabile**, che quindi sono **equipotenziali**: due punti collegati da un filo senza elementi hanno lo stesso potenziale e sono attraversati dalla stessa corrente, e nello studio del circuito si possono considerare come un unico punto.

Un elemento è caratterizzato, dal punto di vista elettrico, quando si conosce il legame che impone tra la **corrente** che lo attraversa e la **differenza di potenziale** ai suoi capi: per un resistore $V = Ri$, per un generatore ideale $V = \mathcal E$, per un condensatore $V = q/C$.

## Reti elettriche: nodi, rami, maglie

I circuiti più complessi formano **reti elettriche**. I loro elementi sono:
- **nodo**: un punto in cui convergono **almeno tre** conduttori;
- **ramo**: il tratto di circuito che collega due nodi. Può contenere componenti **attivi** (generatori) o solo **passivi** (resistori). In ogni ramo scorre **una sola corrente**, la stessa in tutti i suoi elementi (sono in serie);
- **maglia**: un percorso **chiuso** formato da più rami.

Per esempio, una rete con due nodi A e B collegati da tre rami (uno con un generatore, uno con un resistore, uno con un altro resistore e un generatore) ha tre maglie possibili: quella formata dai rami 1 e 2, quella formata dai rami 2 e 3 e quella esterna formata dai rami 1 e 3. Ridisegnare la rete spostando i punti di collegamento lungo i fili non cambia nulla: conta solo come sono collegati gli elementi.

## Prima legge di Kirchhoff: legge dei nodi

**Da dove viene.** In regime stazionario la densità di corrente è **solenoidale**: il suo flusso attraverso qualunque superficie chiusa è nullo (conservazione della carica, lezione 55). Per un singolo conduttore questo significa che la corrente è la stessa in ogni sezione. Per un nodo in cui arrivano più conduttori, prendiamo una superficie chiusa che racchiude il nodo: le correnti che entrano danno un contributo negativo al flusso uscente, quelle che escono un contributo positivo, e la somma deve essere zero. La carica non può accumularsi nel nodo.

**Enunciato.** In condizioni di corrente stazionaria, la **somma algebrica delle correnti che confluiscono in un nodo è nulla**, prendendo con un segno le correnti entranti e con il segno opposto quelle uscenti:

$$\sum_k i_k = 0$$

dove $i_k$ = correnti dei conduttori che arrivano al nodo (A), con segno + se entranti e − se uscenti (o viceversa, purché coerentemente). Detto in altro modo: **la somma delle correnti entranti è uguale alla somma delle correnti uscenti**. È l'espressione della **conservazione della carica**.

::: esempio
In un nodo entrano correnti di 3 A e 2 A ed escono due correnti, una delle quali vale 4 A. Legge dei nodi: $3 + 2 - 4 - i = 0$, quindi l'altra corrente uscente vale $i = 1\,\mathrm A$.
:::

## Seconda legge di Kirchhoff: legge delle maglie

**Da dove viene.** Dalla **conservatività del campo elettrostatico**: il suo integrale di linea lungo un circuito chiuso è nullo. Se suddivido una maglia nei suoi tratti, la somma delle differenze di potenziale ai capi di tutti i tratti è zero:

$$\oint \vec E_s \cdot d\vec l = \sum_i \Delta V_i = 0$$

In parole: partendo da un punto e facendo il giro della maglia si torna allo stesso potenziale, quindi le "salite" e le "discese" di potenziale si compensano. Nei generatori il potenziale **sale** di $\mathcal E$ (passando dal polo − al polo +); nei resistori **scende** di $R\,i$ (nel verso della corrente). Uguagliando salite e discese:

$$\sum_i \mathcal E_i = \sum_k R_k\,i_k$$

dove:
- $\mathcal E_i$ = f.e.m. dei generatori presenti nei rami della maglia (V)
- $R_k$ = resistenze dei rami della maglia (Ω), comprese le eventuali resistenze interne
- $i_k$ = corrente che scorre in ciascun ramo (A)

**Enunciato.** Fissato arbitrariamente un **verso di percorrenza** della maglia, la **somma algebrica delle f.e.m.** presenti nei rami della maglia è uguale alla **somma algebrica dei prodotti $R_k i_k$** (cioè delle d.d.p. ai capi dei resistori).

**Convenzioni di segno:**
- una f.e.m. è **positiva** se il verso di percorrenza attraversa il generatore passando dal polo **negativo** al polo **positivo**; negativa nel caso opposto;
- un termine $R_k i_k$ è **positivo** se la corrente del ramo è **concorde** con il verso di percorrenza scelto; negativo se è discorde.

## Come si risolve una rete lineare

Le leggi di Kirchhoff trasformano una rete di generatori e resistori ohmici in un **sistema lineare** di equazioni con incognite le correnti. Un metodo classico (detto **metodo delle maglie** nella dispensa):

1. Conta nodi e rami: $N$ nodi e $L$ rami. Le incognite sono le $L$ correnti di ramo.
2. Scegli **a piacere** un verso per la corrente di ogni ramo.
3. Scrivi la legge dei nodi per $N - 1$ nodi: danno $N - 1$ equazioni **indipendenti** (l'equazione dell'ultimo nodo è conseguenza delle altre).
4. Mancano $M = L - (N - 1)$ equazioni. Scrivile con la legge delle maglie su $M$ maglie **indipendenti**: per essere sicuro che lo siano, ogni nuova maglia deve contenere almeno un ramo che non compare nelle maglie già usate.
5. Risolvi il sistema di $L$ equazioni in $L$ incognite.
6. Se una corrente risulta **negativa**, scorre nel verso opposto a quello scelto: non è un errore.

È una linea guida: a seconda del problema conviene cercare le relazioni che semplificano di più il calcolo (per esempio ridurre prima serie e paralleli, o usare direttamente le "correnti di maglia", una per maglia, che soddisfano già la legge dei nodi).

::: esempio
**Contare le equazioni.** Una rete con 3 nodi e 5 rami ha 5 correnti incognite. Equazioni ai nodi: $3 - 1 = 2$. Equazioni alle maglie: $5 - 3 + 1 = 3$. Totale 5 equazioni per 5 incognite.
:::

::: esempio
**Due generatori e un ramo centrale.** (esercizio della dispensa) La rete ha tre rami tra due nodi: a sinistra il generatore $\mathcal E_1 = 10\,\mathrm V$ con la resistenza $R_1$ sul tratto superiore, al centro la resistenza $R_3$, a destra il generatore $\mathcal E_2 = 5\,\mathrm V$ con la resistenza $R_2$ sul tratto superiore. Generatori ideali, tutte le resistenze uguali a $R = 4\,\Omega$. Trova le correnti in $R_2$ e $R_3$.
1. Uso due correnti di maglia: $i_1$ nella maglia di sinistra ($\mathcal E_1$, $R_1$, $R_3$) e $i_2$ in quella di destra ($\mathcal E_2$, $R_2$, $R_3$), orientate in modo che entrambe attraversino $R_3$ nello stesso verso. In $R_3$ passa quindi $i_1 + i_2$.
2. Maglia sinistra: $\mathcal E_1 = (R_1 + R_3)\,i_1 + R_3\,i_2$, cioè $10 = 8\,i_1 + 4\,i_2$.
3. Maglia destra: $\mathcal E_2 = R_3\,i_1 + (R_2 + R_3)\,i_2$, cioè $5 = 4\,i_1 + 8\,i_2$.
4. Moltiplico la seconda per 2: $10 = 8\,i_1 + 16\,i_2$. Sottraggo la prima: $0 = 12\,i_2$, quindi $i_2 = 0$.
5. Dalla prima: $i_1 = 10/8 = 1{,}25\,\mathrm A$. In forma generale: $i_1 = \dfrac{2\mathcal E_1 - \mathcal E_2}{3R}$, $i_2 = \dfrac{2\mathcal E_2 - \mathcal E_1}{3R}$.
6. Risultati: in $R_2$ (che porta solo $i_2$) **non circola corrente**; in $R_3$ circola $i_1 + i_2 = 1{,}25\,\mathrm A$.

Interpretazione: la tensione su $R_3$ è $4 \cdot 1{,}25 = 5\,\mathrm V$, proprio uguale a $\mathcal E_2$; il ramo di destra ha quindi d.d.p. nulla ai capi di $R_2$ e non vi passa corrente.
:::

::: esempio
**Tre generatori.** (esercizio della dispensa) Rete a due maglie con i nodi A (in alto) e B (in basso). Ramo centrale tra A e B: la resistenza $R_2 = 2\,\Omega$ in serie con il generatore $\mathcal E_2 = 4\,\mathrm V$. Ramo di sinistra: generatore $\mathcal E_1 = 2\,\mathrm V$ con due resistenze $R_1 = 1\,\Omega$ (una sopra e una sotto). Ramo di destra: generatore $\mathcal E_3 = 4\,\mathrm V$ con due resistenze $R_1$. Generatori ideali.
1. Correnti di maglia $i_1$ (sinistra) e $i_2$ (destra), con i versi della figura. Le equazioni delle maglie sono:
$$\mathcal E_1 - \mathcal E_2 = (2R_1 + R_2)\,i_1 + R_2\,i_2 \qquad \mathcal E_3 - \mathcal E_2 = R_2\,i_1 + (R_2 + 2R_1)\,i_2$$
2. Numeri: $-2 = 4\,i_1 + 2\,i_2$ e $0 = 2\,i_1 + 4\,i_2$.
3. Dalla seconda: $i_1 = -2\,i_2$. Sostituisco nella prima: $-2 = -8\,i_2 + 2\,i_2 = -6\,i_2$, quindi $i_2 = 0{,}33\,\mathrm A$ e $i_1 = -0{,}67\,\mathrm A$.
4. $i_1$ è negativa: in $\mathcal E_1$ la corrente (0,67 A) scorre in verso opposto a quello scelto, cioè dall'anodo al catodo **dentro** il generatore (il generatore viene "caricato"). In $\mathcal E_3$ e in $\mathcal E_2$ la corrente scorre dal catodo all'anodo (0,33 A in $\mathcal E_3$).
5. Tensione tra i nodi, lungo il ramo centrale: $V_A - V_B = R_2\,(i_1 + i_2) + \mathcal E_2 = 2 \cdot (-0{,}33) + 4 \approx 3{,}33\,\mathrm V$.
:::

::: esempio
**Resistenza vista dal generatore.** (esercizio della dispensa) Rete "a scala": il generatore $E = 10\,\mathrm V$ alimenta $R_1 = 3\,\Omega$ in serie; poi $R_2 = 4\,\Omega$ verso il ritorno; poi $R_3 = 2\,\Omega$ in serie, poi $R_4 = 6\,\Omega$ verso il ritorno; infine $R_5 = 1\,\Omega$ in serie e $R_6 = 2\,\Omega$ che chiude verso il ritorno. Trova $R_{eq}$ e la corrente erogata.
1. Parto dal fondo: $R_5$ e $R_6$ sono in serie ($3\,\Omega$), e questa serie è in parallelo con $R_4$: $R' = \dfrac{3 \cdot 6}{3 + 6} = 2\,\Omega$.
2. $R'$ in serie con $R_3$: $2 + 2 = 4\,\Omega$; in parallelo con $R_2 = 4\,\Omega$: $\dfrac{4 \cdot 4}{8} = 2\,\Omega$.
3. In serie con $R_1$: $R_{eq} = 2 + 3 = 5\,\Omega$.
4. Corrente erogata: $I = E/R_{eq} = 10/5 = 2\,\mathrm A$.
:::

::: attenzione
- Non confondere le due leggi. **Nodi** → correnti → conservazione della **carica** (densità di corrente solenoidale). **Maglie** → tensioni → campo elettrostatico **conservativo** (conservazione dell'energia).
- I versi delle correnti si scelgono a piacere **prima** di scrivere le equazioni, e poi vanno rispettati in tutte.
- Le equazioni ai nodi indipendenti sono $N - 1$, non $N$.
- Una f.e.m. si conta positiva quando si attraversa il generatore dal − al +, **indipendentemente** dal verso della corrente in quel ramo.
:::

## Teorema di Thevenin

Come un insieme di resistori si può sostituire con una resistenza equivalente, così una rete lineare relativamente complessa, purché fatta di resistori lineari e generatori di f.e.m., si può sostituire con un **circuito equivalente** semplice.

**Enunciato.** Data una rete comunque complessa di resistenze e generatori e due suoi punti A e B, dal punto di vista di un circuito esterno (rete "utenza") collegato tra A e B, la rete equivale a **un unico generatore** con:
- f.e.m. $\mathcal E_{Th}$ uguale alla **d.d.p. che si misura tra A e B quando la rete utenza non è collegata** (tensione a vuoto);
- resistenza interna $r_{Th}$ uguale alla **resistenza che si misura tra A e B quando ogni generatore è sostituito da un resistore pari alla sua resistenza interna** (per un generatore ideale, da un filo).

::: esempio
**Thevenin di un partitore.** Un generatore ideale da 12 V alimenta $R_1 = 4\,\Omega$ e $R_2 = 12\,\Omega$ in serie. A e B sono i capi di $R_2$, e lì si collega un carico $R_L = 6\,\Omega$.
1. Tensione a vuoto (senza carico): $i = 12/16 = 0{,}75\,\mathrm A$, $\mathcal E_{Th} = R_2\,i = 12 \cdot 0{,}75 = 9\,\mathrm V$.
2. Resistenza vista da A e B con il generatore sostituito da un filo: $R_1$ e $R_2$ risultano in parallelo, $r_{Th} = \dfrac{4 \cdot 12}{16} = 3\,\Omega$.
3. Corrente nel carico: $i_L = \dfrac{\mathcal E_{Th}}{r_{Th} + R_L} = \dfrac{9}{3 + 6} = 1\,\mathrm A$.
4. Verifica diretta: $R_2 \parallel R_L = \dfrac{12 \cdot 6}{18} = 4\,\Omega$; totale $4 + 4 = 8\,\Omega$; corrente nel generatore $12/8 = 1{,}5\,\mathrm A$; tensione tra A e B $1{,}5 \cdot 4 = 6\,\mathrm V$; corrente nel carico $6/6 = 1\,\mathrm A$. Stesso risultato.
:::

## Il ponte di Wheatstone

Quattro resistori formano due rami affiancati collegati allo stesso generatore $\mathcal E$: nel ramo di sinistra $R_1$ (sopra) e $R_3$ (sotto), nel ramo di destra $R_2$ (sopra) e $R_4$ (sotto). Un quinto resistore $R_0$ collega i punti di mezzo dei due rami. Il ponte si dice **bilanciato** quando in $R_0$ non passa corrente.

**Dimostrazione semplice.** In $R_0$ non passa corrente se i due punti di mezzo hanno lo stesso potenziale. In quel caso ogni ramo è una semplice serie:
- a sinistra la caduta su $R_1$ è $\mathcal E\,\dfrac{R_1}{R_1 + R_3}$;
- a destra la caduta su $R_2$ è $\mathcal E\,\dfrac{R_2}{R_2 + R_4}$.

Le due cadute devono essere uguali: $\dfrac{R_1}{R_1 + R_3} = \dfrac{R_2}{R_2 + R_4}$. Moltiplico in croce: $R_1R_2 + R_1R_4 = R_1R_2 + R_2R_3$, cioè

$$R_1 R_4 = R_2 R_3$$

**Dimostrazione della dispensa con Kirchhoff.** Con tre correnti di maglia ($i$ nella maglia del generatore, $i_1$ nella maglia superiore con $R_1$, $R_2$, $R_0$, $i_2$ in quella inferiore con $R_3$, $R_4$, $R_0$) si scrive un sistema di tre equazioni. Risolvendolo con il determinante $D$ dei coefficienti, la corrente in $R_0$ risulta

$$i_0 = i_1 - i_2 = \frac{\mathcal E}{D}\,(R_1 R_4 - R_2 R_3)$$

che si annulla proprio quando $R_1R_4 = R_2R_3$.

**Uso.** Il ponte serve a **misurare una resistenza incognita**: se per esempio $R_4$ è incognita, si regolano le altre finché in $R_0$ (spesso un galvanometro) non passa corrente, e allora $R_4 = R_2R_3/R_1$.

## Strumenti di misura

Per misurare una grandezza elettrica bisogna collegare uno strumento al circuito, e questo **altera** un po' il circuito e quindi la grandezza misurata.

**Amperometro (misura di corrente).** Si inserisce **in serie** nel ramo di cui si vuole la corrente, così è attraversato dalla stessa corrente. Lo strumento (un galvanometro) ha una sua resistenza interna $r_G$. In un circuito con un generatore ideale e una resistenza $R$:
- corrente vera, senza strumento: $i = \mathcal E/R$;
- corrente misurata: $i_m = \dfrac{\mathcal E}{R + r_G} < i$.

La misura è sempre un po' più bassa del vero. Un buon amperometro deve avere **resistenza interna molto piccola** ($r_G \ll R$).

**Voltmetro (misura di tensione).** Si usa un galvanometro con in serie una resistenza tarata $R_0$: dalla corrente $i_m$ che lo attraversa si risale alla tensione, $\Delta V_m = (R_0 + r_G)\,i_m$. Si collega **in parallelo** ai due punti di cui si vuole la d.d.p. Se il tratto da misurare ha resistenza $R$ ed è attraversato dalla corrente $i$, con il voltmetro in parallelo la resistenza del tratto diventa $\dfrac{R\,(R_0 + r_G)}{R + R_0 + r_G}$ e la tensione misurata è

$$\Delta V_m = R\,i\,\frac{R_0 + r_G}{R + R_0 + r_G} = \frac{R\,i}{1 + R/(R_0 + r_G)} < R\,i$$

Anche qui la misura è un po' più bassa del vero, e si avvicina al valore vero tanto più quanto vale $R \ll R_0 + r_G$. Un buon voltmetro deve avere **resistenza interna molto grande**, così "ruba" pochissima corrente al tratto misurato.

| Strumento | Misura | Collegamento | Resistenza interna ideale |
|---|---|---|---|
| Amperometro | corrente | in serie | molto piccola (→ 0) |
| Voltmetro | d.d.p. | in parallelo | molto grande (→ ∞) |

::: esame
**Aperte** ("enunciare le leggi di Kirchhoff per i circuiti lineari", "esporre le leggi dei circuiti elettrici"). Traccia:
1. Definire rete, nodo (almeno tre conduttori), ramo (una sola corrente), maglia (percorso chiuso).
2. Prima legge (nodi): in regime stazionario $\sum_k i_k = 0$, con segni opposti per correnti entranti e uscenti; deriva dalla conservazione della carica (flusso di $\vec j$ nullo su una superficie chiusa attorno al nodo).
3. Seconda legge (maglie): fissato un verso di percorrenza, $\sum \mathcal E_i = \sum R_k i_k$; f.e.m. positiva se attraversata da − a +, termine $Ri$ positivo se la corrente è concorde al verso; deriva da $\oint \vec E_s \cdot d\vec l = 0$ (campo elettrostatico conservativo).
4. Uso: con $N$ nodi e $L$ rami si scrivono $N - 1$ equazioni ai nodi e $L - N + 1$ alle maglie indipendenti; una corrente negativa ha verso opposto a quello scelto.
5. Per "le leggi dei circuiti" aggiungere la legge di Ohm $V = Ri$, serie e parallelo, ed eventualmente Thevenin.
:::

::: sintesi
- Modello a parametri concentrati: fili senza resistenza ed equipotenziali; nodo (≥ 3 conduttori), ramo (una corrente), maglia (percorso chiuso).
- Legge dei nodi: $\sum i_k = 0$, dalla conservazione della carica.
- Legge delle maglie: $\sum \mathcal E = \sum R i$, dal campo elettrostatico conservativo; segni rispetto al verso di percorrenza.
- $N$ nodi, $L$ rami: $N - 1$ equazioni ai nodi e $L - N + 1$ alle maglie; corrente negativa = verso opposto.
- Thevenin: rete tra A e B = generatore con f.e.m. a vuoto e resistenza vista con i generatori sostituiti dalle loro resistenze interne.
- Ponte di Wheatstone bilanciato se $R_1R_4 = R_2R_3$.
- Amperometro in serie, $r$ piccola; voltmetro in parallelo, $r$ grande; entrambi danno misure un po' più basse del vero.
:::

=== 59 dispense
SLIDES: 67
# Lezione 59 — Circuiti RC: carica e scarica del condensatore

Finora i circuiti erano in regime stazionario: correnti costanti nel tempo. Se in un circuito c'è un **condensatore**, invece, la corrente cambia nel tempo: il condensatore si carica (o si scarica) e la corrente si spegne gradualmente. Il circuito più semplice di questo tipo è il **circuito RC**, un resistore $R$ in serie con un condensatore $C$. In questa lezione ricaviamo passo per passo le leggi di **carica** e di **scarica**, il significato della **costante di tempo** $\tau = RC$, il **bilancio energetico** dei due processi e il motivo per cui possiamo usare le leggi di Kirchhoff anche con correnti variabili (approssimazione **quasi stazionaria**).

## Carica del condensatore

**Situazione.** Un resistore $R$ e un condensatore $C$ sono in serie, collegati a un generatore ideale di f.e.m. $\mathcal E$ attraverso un interruttore. All'inizio l'interruttore è aperto e il condensatore è **scarico** (carica nulla sulle armature). Al tempo $t = 0$ si chiude l'interruttore: la f.e.m. mette in moto le cariche, che vanno a depositarsi sulle armature finché la d.d.p. ai capi del condensatore non uguaglia la f.e.m.

**Equazione del circuito.** In un istante generico $t$ il condensatore ha carica $q(t)$ e nel circuito scorre la corrente $i(t)$. La corrente è proprio la carica che arriva sulle armature ogni secondo: $i = dq/dt$. Legge delle maglie (la f.e.m. è uguale alla somma delle cadute sul resistore e sul condensatore):

$$\mathcal E = R\,i + \frac{q}{C} = R\,\frac{dq}{dt} + \frac{q}{C}$$

dove:
- $\mathcal E$ = f.e.m. del generatore (V)
- $R$ = resistenza (Ω)
- $i = dq/dt$ = corrente nel circuito (A)
- $q$ = carica sul condensatore (C)
- $C$ = capacità (F)

**Soluzione passo per passo.**
1. Isolo la derivata: $R\,\dfrac{dq}{dt} = \mathcal E - \dfrac{q}{C} = \dfrac{\mathcal E C - q}{C}$, quindi $\dfrac{dq}{dt} = -\dfrac{q - \mathcal E C}{RC}$.
2. Separo le variabili: $\dfrac{dq}{q - \mathcal E C} = -\dfrac{dt}{RC}$.
3. Integro da $t = 0$ (dove $q = 0$) a un tempo generico $t$ (dove la carica vale $q$):
$$\int_0^q \frac{dq'}{q' - \mathcal E C} = -\frac{1}{RC}\int_0^t dt' \quad\Rightarrow\quad \ln\frac{q - \mathcal E C}{-\mathcal E C} = -\frac{t}{RC}$$
4. Faccio l'esponenziale: $\dfrac{\mathcal E C - q}{\mathcal E C} = e^{-t/RC}$, cioè $1 - \dfrac{q}{\mathcal E C} = e^{-t/RC}$.

$$q(t) = C\mathcal E\left(1 - e^{-t/RC}\right)$$

dove $C\mathcal E = q_{max}$ è la carica finale (C) e $t$ è il tempo dalla chiusura dell'interruttore (s).

**Le altre grandezze** si ricavano dalla carica:
- tensione sul condensatore: $V_C(t) = \dfrac{q(t)}{C} = \mathcal E\left(1 - e^{-t/RC}\right)$;
- corrente (derivo $q$): $i(t) = \dfrac{dq}{dt} = C\mathcal E \cdot \dfrac{1}{RC}\,e^{-t/RC} = \dfrac{\mathcal E}{R}\,e^{-t/RC}$;
- tensione sul resistore: $V_R(t) = R\,i(t) = \mathcal E\,e^{-t/RC}$.

In ogni istante $V_R + V_C = \mathcal E$, come vuole la legge delle maglie.

**Cosa succede fisicamente.**
- **All'istante iniziale** il condensatore è scarico e non ha tensione ai capi: si comporta come un **cortocircuito**. La corrente vale $\mathcal E/R$, quella che passerebbe se nel circuito ci fosse soltanto la resistenza. Tutta la f.e.m. è sul resistore.
- Man mano che la carica cresce, la tensione $q/C$ sul condensatore sale e si oppone alla f.e.m.: la tensione sul resistore cala e con essa la corrente.
- **A regime** la tensione del condensatore uguaglia esattamente la f.e.m. Le due tensioni nella maglia si bilanciano e la corrente si **annulla**: il condensatore carico si comporta come un **circuito aperto**.

| | $t = 0$ | $t \to \infty$ |
|---|---|---|
| carica $q$ | 0 | $C\mathcal E$ |
| tensione $V_C$ | 0 | $\mathcal E$ |
| corrente $i$ | $\mathcal E/R$ (massima) | 0 |
| tensione $V_R$ | $\mathcal E$ | 0 |
| il condensatore si comporta come | cortocircuito | circuito aperto |

## La costante di tempo

In teoria la carica non finisce mai: l'esponenziale con esponente negativo porta la grandezza verso il valore di regime solo in modo **asintotico**, cioè dopo un tempo infinito. È la stessa situazione già vista per un grave che cade in presenza di attrito viscoso dell'aria e si avvicina alla velocità limite. In pratica, però, dopo un certo tempo la differenza residua è così piccola che nessuno strumento riesce a distinguerla.

Per stimare quanto è veloce il processo si usa la **costante di tempo**:

$$\tau = R\,C$$

dove $\tau$ = costante di tempo (s), $R$ in Ω, $C$ in F. Con $\tau$ le leggi si scrivono $q = q_{max}(1 - e^{-t/\tau})$ e $i = i_0\,e^{-t/\tau}$.

Quanto manca al valore finale dopo alcuni multipli di $\tau$ (la frazione mancante è $e^{-t/\tau}$):

| tempo | carica raggiunta $1 - e^{-t/\tau}$ | manca |
|---|---|---|
| $\tau$ | 63,2% | 36,8% |
| $2\tau$ | 86,5% | 13,5% |
| $3\tau$ | 95,0% | 5,0% |
| $5\tau$ | 99,3% | meno dell'1% |

Dopo $3\tau$ la carica differisce dal valore asintotico di circa il 5% ($e^{-3} \approx 0{,}05$); dopo $5\tau$ di meno dell'1%: a livello pratico la carica è completa. Un'altra lettura: se la corrente restasse uguale al valore iniziale $\mathcal E/R$, il condensatore si caricherebbe completamente proprio in un tempo $\tau$ (la tangente iniziale alla curva $q(t)$ raggiunge $C\mathcal E$ dopo $\tau$).

**Perché $RC$ è un tempo (analisi dimensionale).**
1. Dalla legge di Ohm $R = V/i$: $[\Omega] = \dfrac{\mathrm V}{\mathrm A}$.
2. Dalla definizione di capacità $C = Q/V$: $[\mathrm F] = \dfrac{\mathrm C}{\mathrm V}$.
3. Moltiplico: $[\Omega \cdot \mathrm F] = \dfrac{\mathrm V}{\mathrm A} \cdot \dfrac{\mathrm C}{\mathrm V} = \dfrac{\mathrm C}{\mathrm A}$.
4. Poiché $1\,\mathrm C = 1\,\mathrm{A \cdot s}$: $\dfrac{\mathrm C}{\mathrm A} = \dfrac{\mathrm{A \cdot s}}{\mathrm A} = \mathrm s$.

Il prodotto $RC$ è quindi un tempo. Lo conferma anche l'esponente $t/RC$, che deve essere un numero puro.

::: esempio
$R = 2\,\mathrm{k\Omega}$, $C = 5\,\mu\mathrm F$: $\tau = 2000 \cdot 5 \cdot 10^{-6} = 10^{-2}\,\mathrm s = 10\,\mathrm{ms}$. La carica è praticamente completa dopo $5\tau = 50\,\mathrm{ms}$.
:::

::: esempio
**Quando la carica arriva a 16 μC?** (esercizio della dispensa) Pila da 12 V, $R = 1{,}40\,\mathrm{M\Omega}$, $C = 1{,}80\,\mu\mathrm F$, chiusura a $t = 0$.
1. Costante di tempo: $\tau = RC = 1{,}4 \cdot 10^6 \cdot 1{,}8 \cdot 10^{-6} = 2{,}52\,\mathrm s$.
2. Carica massima (quando $V_C = \mathcal E$): $q_{max} = C\mathcal E = 1{,}8 \cdot 10^{-6} \cdot 12 = 21{,}6\,\mu\mathrm C$.
3. Impongo $q(t_0) = 16\,\mu\mathrm C$: $16 = 21{,}6\,(1 - e^{-t_0/\tau})$, quindi $e^{-t_0/\tau} = 1 - \dfrac{16}{21{,}6} \approx 0{,}259$.
4. Logaritmo: $t_0 = -\tau \ln\left(1 - \dfrac{q_0}{C\mathcal E}\right) = -2{,}52 \cdot \ln 0{,}259 = 2{,}52 \cdot 1{,}35 \approx 3{,}4\,\mathrm s$.
:::

::: esempio
**Quando $V_R = V_C$?** (esercizio della dispensa) Circuito RC con $R = 20\,\Omega$ e $C = 15\,\mu\mathrm F$, chiuso a $t = 0$.
1. $V_R = \mathcal E\,e^{-t/\tau}$ e $V_C = \mathcal E\,(1 - e^{-t/\tau})$.
2. Uguaglio: $e^{-t/\tau} = 1 - e^{-t/\tau}$, cioè $e^{-t/\tau} = \tfrac12$.
3. $t = -\tau \ln\tfrac12 = RC\,\ln 2 = 20 \cdot 15 \cdot 10^{-6} \cdot 0{,}693 \approx 2{,}1 \cdot 10^{-4}\,\mathrm s \approx 0{,}2\,\mathrm{ms}$.

Ha senso: le due tensioni sono uguali quando ciascuna vale metà della f.e.m.
:::

## Scarica del condensatore

**Situazione.** Ora il condensatore è **inizialmente carico** con carica $q_0$ ed è in serie con un resistore $R$, senza generatore. Al tempo $t = 0$ si chiude l'interruttore: il condensatore fa da generatore e si scarica, mettendo in circolo la sua carica in eccesso.

**Equazione.** In ogni istante la d.d.p. ai capi del condensatore è uguale a quella ai capi del resistore. La corrente nel resistore è data dalla variazione di carica del condensatore, che però **diminuisce**: $i = -\dfrac{dq}{dt}$ (la corrente è positiva mentre $q$ cala).

$$\frac{q}{C} = R\,i = -R\,\frac{dq}{dt}$$

**Soluzione.**
1. Separo le variabili: $\dfrac{dq}{q} = -\dfrac{dt}{RC}$.
2. Integro da $q_0$ (a $t = 0$) a $q$ (al tempo $t$): $\ln\dfrac{q}{q_0} = -\dfrac{t}{RC}$.
3. Esponenziale:

$$q(t) = q_0\,e^{-t/RC}$$

e quindi, con $V_0 = q_0/C$ tensione iniziale:
- $V_C(t) = \dfrac{q}{C} = V_0\,e^{-t/RC}$;
- $i(t) = -\dfrac{dq}{dt} = \dfrac{q_0}{RC}\,e^{-t/RC} = \dfrac{V_0}{R}\,e^{-t/RC}$;
- $V_R(t) = R\,i = V_0\,e^{-t/RC}$.

La **costante di tempo** della scarica è la stessa della carica, $\tau = RC$. Carica, tensione e corrente tendono a zero esponenzialmente.

**Tempo di dimezzamento.** La carica si dimezza sempre nello stesso tempo, qualunque sia il valore di partenza. Impongo $q = q_0/2$: $e^{-t/RC} = \tfrac12$, cioè

$$t_{1/2} = RC\,\ln 2 \approx 0{,}693\,RC$$

dove $t_{1/2}$ = tempo di dimezzamento (s). Dopo $t_{1/2}$ resta metà carica, dopo $2t_{1/2}$ un quarto, e così via.

::: esempio
**Capacità dal tempo di dimezzamento.** Un condensatore dimezza la sua carica in 20 ms scaricandosi su 40 Ω.
1. $t_{1/2} = RC\ln 2$, quindi $C = \dfrac{t_{1/2}}{R \ln 2}$.
2. $C = \dfrac{0{,}020}{40 \cdot 0{,}693} = \dfrac{0{,}020}{27{,}7} \approx 7{,}2 \cdot 10^{-4}\,\mathrm F = 0{,}72\,\mathrm{mF}$.
:::

## Bilancio energetico della carica

**Potenze istantanee.** Durante la carica:
- il generatore eroga $P_g = \mathcal E\,i = \dfrac{\mathcal E^2}{R}\,e^{-t/\tau}$;
- il resistore dissipa per effetto Joule $P_R = R\,i^2 = R\,\dfrac{\mathcal E^2}{R^2}\,e^{-2t/\tau} = \dfrac{\mathcal E^2}{R}\,e^{-2t/\tau}$;
- il condensatore riceve, per caricarsi, il lavoro elementare $dL = V_C\,dq$, cioè la potenza $P_C = V_C\,i = \mathcal E\left(1 - e^{-t/\tau}\right)\dfrac{\mathcal E}{R}\,e^{-t/\tau} = P_g - P_R$.

Lo si vede anche moltiplicando l'equazione della maglia per $i$: $\mathcal E\,i = R\,i^2 + \dfrac{q}{C}\,i$. La potenza del generatore va **in parte** a caricare il condensatore e per il resto è dissipata per effetto Joule nel resistore: l'energia si conserva istante per istante.

**Energie totali.** Integro da 0 a infinito, usando $\int_0^\infty e^{-t/\tau}\,dt = \tau$ e $\int_0^\infty e^{-2t/\tau}\,dt = \tau/2$, con $\tau = RC$:
- lavoro del generatore: $W_g = \dfrac{\mathcal E^2}{R}\,\tau = \dfrac{\mathcal E^2}{R}\,RC = C\mathcal E^2$ (lo stesso che $q_{max}\,\mathcal E$: il generatore sposta la carica $C\mathcal E$ attraverso la f.e.m. $\mathcal E$);
- calore nel resistore: $W_R = \dfrac{\mathcal E^2}{R}\,\dfrac{\tau}{2} = \tfrac12 C\mathcal E^2$;
- energia immagazzinata nel condensatore carico: $U_C = W_g - W_R = \tfrac12 C\mathcal E^2$, proprio l'energia elettrostatica di un condensatore con tensione $\mathcal E$.

Il lavoro del generatore si divide **a metà**: metà resta nel condensatore, metà diventa calore. Il risultato **non dipende da $R$**: una resistenza più piccola fa solo andare più in fretta il processo.

## Bilancio energetico della scarica

All'inizio della scarica il condensatore contiene l'energia elettrostatica

$$U_0 = \frac{q_0^2}{2C} = \frac12\,C\,V_0^2$$

Alla fine non ha più energia. Durante la scarica il resistore dissipa per effetto Joule:

$$W_R = \int_0^\infty R\,i^2\,dt = R\left(\frac{q_0}{RC}\right)^2 \int_0^\infty e^{-2t/RC}\,dt = \frac{q_0^2}{R\,C^2}\cdot\frac{RC}{2} = \frac{q_0^2}{2C}$$

dove $q_0$ = carica iniziale (C), $V_0$ = tensione iniziale (V). Tutta l'energia immagazzinata nel condensatore diventa **calore nel resistore**: anche nella scarica vale la conservazione dell'energia.

## Validità: l'approssimazione quasi stazionaria

Per scrivere le equazioni dei circuiti RC abbiamo usato le leggi di Kirchhoff, che però erano state ricavate per **correnti stazionarie**, costanti nel tempo. Qui invece la corrente varia. Non è una contraddizione: per molti processi elettrici, tra cui i circuiti RC con costante di tempo non troppo piccola, vale l'approssimazione di **corrente quasi stazionaria**. In questi casi tra le grandezze del circuito valgono le stesse relazioni del caso stazionario, purché riferite ai **valori istantanei** (ed è proprio così che abbiamo impostato le equazioni, istante per istante).

Il criterio pratico: confrontare la scala di tempo del processo con il tempo che il campo elettromagnetico, che si propaga alla velocità della luce, impiega ad attraversare il circuito. Per un circuito di dimensioni dell'ordine del metro questo tempo è di qualche nanosecondo ($1\,\mathrm m / 3 \cdot 10^8\,\mathrm{m/s} \approx 3\,\mathrm{ns}$): processi con costante di tempo **molto maggiore del nanosecondo** si possono trattare come quasi stazionari.

::: esempio
**Condensatore in parallelo al carico.** (esercizio della dispensa) Un generatore con f.e.m. $\mathcal E = 1000\,\mathrm V$ e resistenza $r = 5\,\mathrm{k\Omega}$ in serie alimenta un condensatore $C = 10\,\mu\mathrm F$ collegato **in parallelo** a un resistore $R = 15\,\mathrm{k\Omega}$. A $t = 0$ si chiude l'interruttore. Trova la massima d.d.p. sul condensatore e la costante di tempo.
1. Correnti: $i_1$ in $r$ (esce dal generatore), $i_2$ in $R$, e $dq/dt = C\,dV_C/dt$ verso il condensatore. Leggi di Kirchhoff (valide per l'approssimazione quasi stazionaria):
   - maglia esterna: $\mathcal E - V_C = r\,i_1$;
   - maglia con $R$: $V_C = R\,i_2$;
   - nodo: $i_1 = i_2 + C\,\dfrac{dV_C}{dt}$.
2. Sostituisco le ultime due nella prima: $\mathcal E - V_C = r\left(\dfrac{V_C}{R} + C\,\dfrac{dV_C}{dt}\right)$.
3. Riordino: $r C\,\dfrac{dV_C}{dt} = \mathcal E - V_C\left(1 + \dfrac{r}{R}\right)$. Chiamo $R' = \dfrac{rR}{r + R}$ il parallelo tra $r$ e $R$; dividendo per $r$ si ottiene $C\,\dfrac{dV_C}{dt} = \dfrac{\mathcal E}{r} - \dfrac{V_C}{R'}$.
4. È la stessa equazione di un RC semplice: integrando con $V_C(0) = 0$,
$$V_C(t) = \frac{R'\mathcal E}{r}\left(1 - e^{-t/R'C}\right) = \frac{R\,\mathcal E}{R + r}\left(1 - e^{-t/\tau}\right), \qquad \tau = R'C$$
5. Valore massimo: $V_{max} = \dfrac{R\,\mathcal E}{R + r} = \dfrac{15 \cdot 1000}{20} = 750\,\mathrm V$. A regime il condensatore è carico, nel suo ramo non passa corrente e la corrente $\mathcal E/(r + R)$ scorre nella serie $r + R$, come se il ramo del condensatore non esistesse: la tensione sul condensatore è quella su $R$.
6. Costante di tempo: $R' = \dfrac{5 \cdot 15}{20} = 3{,}75\,\mathrm{k\Omega}$, $\tau = R'C = 3750 \cdot 10^{-5} = 37{,}5\,\mathrm{ms}$.
:::

::: attenzione
- All'**inizio della carica** il condensatore è un **cortocircuito** (corrente massima $\mathcal E/R$); a **regime** è un **circuito aperto** (corrente nulla).
- Dopo un tempo $\tau$ si raggiunge il **63%** della carica finale, non il 50%. Il 50% si raggiunge dopo $RC\ln 2 \approx 0{,}69\,\tau$.
- Nella scarica la corrente è $i = -dq/dt$: il segno meno serve perché la carica diminuisce.
- Nella carica il condensatore immagazzina solo **metà** del lavoro del generatore, indipendentemente da $R$; nella scarica **tutta** la sua energia va in calore.
:::

::: esame
**Chiuse:** tempo per raggiungere una certa carica ($t = -\tau\ln(1 - q/C\mathcal E)$), capacità dal tempo di dimezzamento ($C = t_{1/2}/(R\ln 2)$).

**Aperte:**
- "Si descriva il processo di carica in un circuito RC": circuito (R e C in serie con $\mathcal E$, condensatore scarico, chiusura a $t = 0$); equazione $\mathcal E = R\,dq/dt + q/C$; soluzione $q = C\mathcal E(1 - e^{-t/RC})$, $i = (\mathcal E/R)e^{-t/RC}$; comportamento iniziale (cortocircuito) e finale (circuito aperto); costante di tempo $RC$ (63% dopo τ, praticamente completo dopo 5τ); eventualmente il bilancio energetico (metà e metà).
- "Si verifichi tramite analisi dimensionale che RC è un tempo": $[\Omega] = \mathrm{V/A}$, $[\mathrm F] = \mathrm{C/V}$, prodotto $\mathrm{C/A} = \mathrm{A\,s/A} = \mathrm s$.
- "Si discuta il bilancio energetico della scarica": energia iniziale $q_0^2/2C = \tfrac12 CV_0^2$; corrente $i = (q_0/RC)e^{-t/RC}$; calore $\int_0^\infty Ri^2\,dt = q_0^2/2C$; tutta l'energia del condensatore diventa calore nel resistore, l'energia si conserva.
:::

::: sintesi
- Carica: $\mathcal E = R\,dq/dt + q/C$; $q = C\mathcal E(1 - e^{-t/RC})$, $V_C = \mathcal E(1 - e^{-t/RC})$, $i = (\mathcal E/R)e^{-t/RC}$.
- Scarica: $q/C = -R\,dq/dt$; $q = q_0e^{-t/RC}$, $i = (V_0/R)e^{-t/RC}$; dimezzamento $t_{1/2} = RC\ln 2$.
- $\tau = RC$ (secondi: $\Omega \cdot \mathrm F = \mathrm s$); dopo τ il 63%, dopo 3τ manca il 5%, dopo 5τ meno dell'1%.
- C scarico = cortocircuito; C carico = circuito aperto.
- Energia nella carica: generatore $C\mathcal E^2$, metà nel condensatore ($\tfrac12 C\mathcal E^2$), metà in calore. Nella scarica: tutta l'energia $\tfrac12 CV_0^2$ in calore.
- Leggi di Kirchhoff valide istante per istante (regime quasi stazionario) se τ ≫ tempo di propagazione nel circuito (ns per un metro).
:::

=== 60 dispense
SLIDES: 68
# Lezione 60 — Magnetismo e campo magnetico

Con questa lezione si apre lo studio del **magnetismo**. Partiamo dalla fenomenologia conosciuta fin dall'antichità (calamite, poli, aghi magnetici), vediamo la differenza fondamentale con l'elettricità (non esistono poli magnetici isolati), e definiamo il **campo magnetico** $\vec B$ attraverso la forza che esercita su una carica in movimento, la **forza di Lorentz**. Confrontiamo poi campo magnetico e campo elettrostatico e chiudiamo con il campo magnetico terrestre e la bussola. La lezione successiva usa la forza di Lorentz per studiare il moto delle cariche.

## Fenomenologia: magneti e poli

Già nell'antica Grecia, alcuni secoli prima di Cristo, si era osservato che certi minerali di ferro, in particolare la **magnetite**, attirano la limatura di ferro. La proprietà si nota soprattutto alle estremità di barrette cilindriche o di altre forme (si pensi alle classiche calamite a ferro di cavallo).

- I corpi che mostrano questo fenomeno si chiamano **magneti**.
- Le estremità in cui si concentra l'azione attrattiva si chiamano **poli** del magnete.

Avvicinando i poli di due magneti si osserva una forza, in modo simile a quanto succede avvicinando due cariche. Si deduce che a ogni magnete è associato un **campo magnetico** che interagisce con gli altri magneti. A seconda dei poli messi di fronte, la forza è **attrattiva** o **repulsiva**: si definiscono quindi **due tipi di polo**, chiamati nord e sud (o, per analogia con le cariche, positivo e negativo), che interagiscono in modo opposto:
- poli **uguali** si **respingono**;
- poli **opposti** si **attraggono**.

Ogni magnete possiede **sempre** un polo di un tipo e uno del tipo opposto. Come per le cariche, l'intensità della forza tra due poli (approssimando la loro posizione, per esempio, con gli estremi di bacchette lunghe e sottili) diminuisce con l'**inverso del quadrato della distanza** tra i poli.

## Niente monopoli: il magnete è sempre un dipolo

Qui c'è la differenza sostanziale tra elettricità e magnetismo. Una carica elettrica può esistere da sola ed è la sorgente puntiforme del campo elettrico. Per il campo magnetico invece è **impossibile isolare un elemento puntiforme** sorgente del campo, il cosiddetto **monopolo magnetico**.

Se si spezza un magnete in due, non si ottengono un polo nord e un polo sud separati: si ottengono **due magneti completi**, ciascuno con il suo nord e il suo sud. Continuando a dividere, si ottiene sempre un magnete più piccolo con due poli opposti. In linea di principio si possono quindi creare **infinite** calamite frammentando un magnete. Un sistema magnetico è sempre schematizzabile come un **dipolo**.

## Magnetizzazione e ago magnetico

Se si avvicina una sottile lamina di ferro a una bacchetta di magnetite, la lamina acquista a sua volta la proprietà di attrarre la limatura: diventa un magnete, cioè **si magnetizza**. Una calamita è essenzialmente questo; se è molto sottile si chiama **ago magnetico**.

Sotto l'azione di un campo magnetico, l'ago si comporta come un piccolo dipolo elettrico in un campo elettrico: tende a **orientarsi parallelamente alle linee del campo**. Spostando un ago attorno a un magnete si ricostruisce il disegno delle linee di campo. Per una barretta magnetica sottile si trova che le linee hanno **la stessa forma** di quelle del campo elettrostatico prodotto da due cariche opposte poste agli estremi, cioè al posto dei poli.

## Linee del campo magnetico

C'è però una differenza importante rispetto al dipolo elettrico:
- **fuori** dal magnete le linee **escono dal polo nord ed entrano nel polo sud**;
- **dentro** il magnete proseguono dal sud al nord;
- sono quindi **linee chiuse**, senza inizio né fine (non ci sono "cariche magnetiche" da cui partire o in cui finire).

Conseguenza: il flusso di $\vec B$ attraverso una qualunque superficie chiusa è sempre zero, perché ogni linea che entra deve anche uscire:

$$\Phi_S(\vec B) = \oint_S \vec B \cdot d\vec S = 0$$

dove $\Phi_S(\vec B)$ = flusso magnetico attraverso la superficie chiusa $S$ (Wb, weber $= \mathrm{T \cdot m^2}$). È il corrispondente magnetico del teorema di Gauss, con "carica magnetica" interna sempre nulla.

## La forza di Lorentz: come si definisce B

Come per il campo elettrico, anche il campo magnetico si **definisce** attraverso la sua interazione con una carica elettrica. Ma c'è una differenza decisiva:
- la forza **elettrica** agisce anche su una carica **ferma** immersa in un campo elettrico;
- un campo **magnetico** esercita una forza su una carica solo se essa è **in movimento**.

Si osserva inoltre che:
- se la velocità della carica è **parallela** alle linee del campo, la forza è **nulla**;
- la forza è sempre **perpendicolare** sia alla direzione del moto sia alla direzione delle linee del campo.

Tutte queste proprietà sono riassunte da un **prodotto vettoriale**. La forza esercitata da un campo magnetico su una carica in moto è la **forza di Lorentz**:

$$\vec F = q\,\vec v \times \vec B$$

e il suo modulo è

$$F = |q|\,v\,B\,\sin\theta$$

dove:
- $\vec F$ = forza magnetica (N)
- $q$ = carica, con il suo segno (C)
- $\vec v$ = velocità della carica (m/s)
- $\vec B$ = campo magnetico, o più precisamente **vettore induzione magnetica** (T)
- $\theta$ = angolo tra $\vec v$ e $\vec B$

**Direzione e verso.** Essendo un prodotto vettoriale, $\vec F$ è perpendicolare sia a $\vec v$ sia a $\vec B$, cioè al piano individuato dalla traiettoria della carica e dal campo. Il verso si trova con:
- la **regola della vite**: è il verso di avanzamento di una vite normale (destrorsa) che gira in modo da portare $\vec v$ su $\vec B$ attraverso l'angolo minore tra i due;
- la **regola della mano destra**: le dita (tranne il pollice) lungo $\vec v$, poi piegate verso $\vec B$; il pollice indica $\vec F$.

Se la carica è **negativa** la forza ha verso **opposto**.

**Modulo.** La forza è proporzionale a $\sin\theta$: è **massima** ($F = qvB$) quando $\vec v$ e $\vec B$ sono perpendicolari, **nulla** quando sono paralleli o antiparalleli.

## La forza magnetica non compie lavoro

La forza è sempre perpendicolare alla velocità, quindi allo spostamento $d\vec s = \vec v\,dt$:

$$dW = \vec F \cdot d\vec s = (q\,\vec v \times \vec B) \cdot \vec v\,dt = 0$$

(il prodotto misto con due vettori uguali è nullo). La forza magnetica **non fa lavoro** nella direzione del moto: non cambia l'energia cinetica della carica. Per le forze elettriche questo succede solo quando la carica si muove lungo una superficie equipotenziale.

**Linee di forza e linee di campo.** Per il campo elettrico la forza su una carica ha la direzione del campo: linee di forza e linee di campo **coincidono**. Per il campo magnetico la forza è perpendicolare al campo: linee di forza e linee di campo sono **ortogonali**.

## Unità di misura del campo magnetico

Dalla forza di Lorentz, $B = \dfrac{F}{q\,v\,\sin\theta}$: il campo magnetico ha le dimensioni di una forza divisa per carica per velocità. L'unità SI è il **tesla** (T):

$$1\,\mathrm T = 1\,\frac{\mathrm N}{\mathrm C \cdot \mathrm{m/s}} = 1\,\frac{\mathrm{N \cdot s}}{\mathrm{C \cdot m}} = 1\,\frac{\mathrm N}{\mathrm{A \cdot m}}$$

(nell'ultimo passaggio $\mathrm{C/s} = \mathrm A$). In unità fondamentali: $1\,\mathrm T = 1\,\mathrm{kg/(A \cdot s^2)}$.

I campi magnetici naturali sono di qualche ordine di grandezza più piccoli del tesla; per questo si incontra anche il **gauss** (G), un decimillesimo di tesla:

$$1\,\mathrm G = 10^{-4}\,\mathrm T$$

::: esempio
**Forza su un elettrone con il prodotto vettoriale.** (esercizio della dispensa) Un elettrone ha velocità $\vec v = (2 \cdot 10^6\,\mathrm{m/s})\,\hat i + (3 \cdot 10^6\,\mathrm{m/s})\,\hat j$ ed entra in un campo $\vec B = (0{,}03\,\mathrm T)\,\hat i - (0{,}15\,\mathrm T)\,\hat j$. Direzione e modulo della forza?
1. $\vec v$ e $\vec B$ stanno nel piano $xy$, quindi la forza è lungo l'asse $z$.
2. Componente $z$ del prodotto vettoriale: $(\vec v \times \vec B)_z = v_x B_y - v_y B_x = 2 \cdot 10^6 \cdot (-0{,}15) - 3 \cdot 10^6 \cdot 0{,}03 = -0{,}30 \cdot 10^6 - 0{,}09 \cdot 10^6 = -0{,}39 \cdot 10^6\,\mathrm{T\,m/s}$.
3. Carica dell'elettrone $q = -e = -1{,}6 \cdot 10^{-19}\,\mathrm C$: $F_z = -1{,}6 \cdot 10^{-19} \cdot (-0{,}39 \cdot 10^6) \approx 6{,}24 \cdot 10^{-14}\,\mathrm N$.
4. $\vec F \approx 6{,}24 \cdot 10^{-14}\,\mathrm N\,\hat k$: lungo $+z$. Per un protone sarebbe uguale in modulo ma verso $-z$.
:::

## Campo magnetico e campo elettrostatico a confronto

| | Campo elettrostatico $\vec E$ | Campo magnetico $\vec B$ |
|---|---|---|
| Sorgenti | cariche, anche isolate | dipoli magnetici, correnti; niente monopoli |
| Linee di campo | aperte: escono dalle cariche + ed entrano nelle − | chiuse |
| Flusso su superficie chiusa | $Q_{int}/\varepsilon_0$ (Gauss) | sempre 0 |
| Circuitazione | sempre nulla: **conservativo** | non nulla attorno a una corrente ($\oint \vec B \cdot d\vec l = \mu_0 I$): **non conservativo** |
| Agisce su | cariche ferme e in moto | solo cariche in moto |
| Forza rispetto al campo | parallela ($q\vec E$) | perpendicolare ($q\vec v \times \vec B$) |
| Lavoro sulla carica | può cambiare l'energia cinetica | nessun lavoro |

**Perché $\vec B$ non è conservativo.** Un campo è conservativo se la sua circuitazione (integrale lungo una linea chiusa) è sempre nulla. Per il campo elettrostatico è così. Per il campo magnetico invece, come si vedrà con il teorema di Ampère, la circuitazione lungo una linea chiusa che gira attorno a una corrente vale $\mu_0 I$ (con $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$ e $I$ la corrente concatenata): non è zero. Le linee di $\vec B$ attorno a un filo sono circonferenze chiuse, e percorrendole il campo è sempre concorde al cammino. Quindi il campo magnetico **non è conservativo**, mentre quello elettrostatico **lo è**.

## Il campo magnetico terrestre

I poli magnetici si chiamano nord e sud per analogia con i poli geografici, a causa dell'uso tradizionale della **bussola**: per secoli la principale applicazione di un ago magnetico immerso in un campo, quello terrestre.

- Vicino alla superficie terrestre c'è un campo magnetico di circa $0{,}4 \cdot 10^{-4}\,\mathrm T$ (cioè 0,4 G).
- Le sue linee sono come quelle di un enorme **dipolo magnetico**, il cui asse è inclinato di circa **15°** rispetto all'asse di rotazione terrestre.
- Il polo **nord** dell'ago di una bussola punta (all'incirca) verso il **Nord geografico**, cioè ne è attratto.
- Poiché poli opposti si attraggono, il verso del dipolo terrestre è **opposto** a quello geografico: vicino al **Nord geografico** c'è un **polo sud magnetico**, e vicino al Sud geografico un polo nord magnetico.

Non c'è quindi nessuna eccezione alla regola "poli uguali si respingono": il nord della bussola è attratto da un polo sud magnetico, che si trova dalle parti del Polo Nord geografico e che per abitudine chiamiamo "Nord".

::: attenzione
- **Tesla e weber** sono cose diverse: il tesla misura il campo $B$, il weber ($\mathrm{T \cdot m^2}$) misura il **flusso** di $B$.
- Spezzare un magnete non separa i poli: si ottengono sempre nuovi dipoli completi, in principio **infiniti**.
- La forza magnetica è perpendicolare al campo, non parallela come quella elettrica.
- È il campo **magnetico** a non essere conservativo; quello **elettrostatico** lo è.
:::

::: esame
Le domande chiuse di questa lezione chiedono:
- quante calamite si ottengono frammentando un magnete: in linea di principio **infinite**, perché non esistono monopoli e ogni frammento è un dipolo;
- il confronto tra campo magnetico e campo elettrostatico: il primo **non è conservativo** (circuitazione $\mu_0 I$ attorno alle correnti, linee chiuse), il secondo **sì** (circuitazione nulla);
- perché il nord della bussola punta al Nord geografico: considerando la Terra una grande calamita, il Nord geografico è in realtà un polo **sud** magnetico.

Per una domanda aperta sul campo magnetico: fenomenologia (poli, assenza di monopoli, magnetizzazione), definizione tramite la forza di Lorentz $\vec F = q\vec v \times \vec B$, unità (tesla, gauss), differenze con il campo elettrostatico.
:::

::: sintesi
- Magneti: due poli sempre presenti (nord e sud); uguali si respingono, opposti si attraggono, forza ∝ $1/d^2$.
- Non esistono monopoli: spezzando un magnete si ottengono sempre dipoli, in principio infiniti.
- Il ferro vicino a un magnete si magnetizza; l'ago magnetico si allinea alle linee del campo.
- Linee di $\vec B$ chiuse (escono dal nord, entrano nel sud); flusso su superficie chiusa nullo.
- Forza di Lorentz: $\vec F = q\vec v \times \vec B$, $F = qvB\sin\theta$; solo su cariche in moto, nulla se $\vec v \parallel \vec B$, perpendicolare a $\vec v$ e $\vec B$, non compie lavoro.
- Unità: $1\,\mathrm T = 1\,\mathrm{N/(A\,m)}$; $1\,\mathrm G = 10^{-4}\,\mathrm T$.
- $\vec E$ elettrostatico conservativo, $\vec B$ non conservativo ($\oint \vec B \cdot d\vec l = \mu_0 I$).
- Campo terrestre ≈ $0{,}4 \cdot 10^{-4}$ T, dipolo inclinato di circa 15°; il Nord geografico è un polo sud magnetico.
:::

=== 61 dispense
SLIDES: 68, 69
# Lezione 61 — Forza di Lorentz e moto delle cariche nel campo magnetico

Nella lezione precedente abbiamo definito il campo magnetico tramite la forza di Lorentz. Ora la usiamo per capire **come si muove** una particella carica in un campo magnetico, e in presenza combinata di campo elettrico e magnetico (**forza di Lorentz generalizzata**). Vediamo i tre casi del campo uniforme (velocità parallela, perpendicolare, obliqua: retta, cerchio, elica), ripassiamo la **conservazione dell'energia** di una carica nel campo elettrico, e studiamo le applicazioni: **selettore di velocità**, **spettrometro di massa**, **bottiglia magnetica** e fasce di Van Allen.

## Richiamo: la forza di Lorentz

$$\vec F = q\,\vec v \times \vec B \qquad F = |q|\,v\,B\,\sin\theta$$

dove $\vec F$ = forza (N), $q$ = carica con segno (C), $\vec v$ = velocità (m/s), $\vec B$ = campo magnetico (T), $\theta$ = angolo tra $\vec v$ e $\vec B$.

Conseguenze da avere sempre in mente:
- una carica **ferma** ($v = 0$) non sente **nessuna** forza magnetica;
- $\vec v$ **parallela** (o antiparallela) a $\vec B$, $\theta = 0$ o $180°$: forza **nulla**;
- $\vec v$ **perpendicolare** a $\vec B$, $\theta = 90°$: forza **massima**, $F = |q|vB$;
- la forza è sempre perpendicolare **sia** a $\vec v$ **sia** a $\vec B$. Invece $\vec v$ e $\vec B$ possono formare **qualsiasi** angolo: l'unica coppia **sempre** perpendicolare è forza–velocità (e forza–campo);
- verso con la regola della mano destra per $q > 0$; opposto per $q < 0$.

::: esempio
**Calcoli con la forza di Lorentz.**
- Un protone a $5 \cdot 10^6\,\mathrm{m/s}$ si muove **nella stessa direzione** di un campo di 1,5 T: $\theta = 0$, $\sin 0 = 0$, quindi $F = 0\,\mathrm N$.
- Un protone a $5{,}0 \cdot 10^6\,\mathrm{m/s}$ avverte una forza **massima** di $8{,}0 \cdot 10^{-14}\,\mathrm N$. Forza massima significa $\theta = 90°$: $B = \dfrac{F}{q\,v} = \dfrac{8 \cdot 10^{-14}}{1{,}6 \cdot 10^{-19} \cdot 5 \cdot 10^6} = \dfrac{8 \cdot 10^{-14}}{8 \cdot 10^{-13}} = 0{,}10\,\mathrm T$.
- Stesso protone, stessa forza, ma il campo forma 30° con la velocità: $B = \dfrac{F}{q\,v\,\sin 30°} = \dfrac{0{,}10\,\mathrm T}{0{,}5} = 0{,}2\,\mathrm T$. Con un angolo minore serve un campo più intenso per avere la stessa forza.
- Due cariche, $q_2 = 4q_1$ e $v_2 = 2v_1$, entrambe perpendicolari al campo: $\dfrac{F_1}{F_2} = \dfrac{q_1 v_1 B}{q_2 v_2 B} = \dfrac{q_1 v_1}{4q_1 \cdot 2v_1} = \dfrac18$.
:::

## Il campo magnetico non cambia il modulo della velocità

Abbiamo visto che la forza magnetica non compie lavoro: $dW = (q\vec v \times \vec B) \cdot \vec v\,dt = 0$. Per il teorema dell'energia cinetica ($W = \Delta K$) l'**energia cinetica resta costante**, quindi il **modulo della velocità non cambia**.

Il campo magnetico non dà alla particella un'accelerazione **tangenziale** (come fa il campo elettrico), ma solo un'accelerazione **centripeta**: cambia la **direzione** della velocità, non il suo modulo.

::: attenzione
Se una particella carica attraversa una regione **senza deviare**, **non** si può concludere che lì il campo magnetico sia nullo. Il campo potrebbe esserci ed essere **parallelo** alla velocità (allora la forza è zero). Una particella che si muove in linea retta in una regione con $\vec B \neq 0$ (e senza altri campi) ha necessariamente la velocità parallela al campo.
:::

## Carica ferma o in moto, campo elettrico o magnetico

**Carica ferma in un campo elettrico.** Sulla carica agisce subito la forza $\vec F = q\vec E$, anche se è ferma. In un campo uniforme la carica parte con accelerazione costante $\vec a = q\vec E/m$ e si muove di moto uniformemente accelerato lungo le linee di campo: nel verso del campo se $q > 0$, in verso opposto se $q < 0$. La velocità cresce, $v(t) = \dfrac{qE}{m}\,t$, e il campo compie lavoro positivo: la carica guadagna energia cinetica a spese dell'energia potenziale (si sposta verso potenziali minori se positiva).

**Carica ferma in un campo magnetico.** Con $v = 0$ la forza di Lorentz è nulla: la carica **resta ferma** (se non ci sono altre forze).

**Carica in moto in un campo magnetico.** Subisce la forza $q\vec v \times \vec B$, perpendicolare alla velocità: la traiettoria si **curva**, ma il modulo della velocità resta costante. In un campo uniforme la traiettoria è una retta, una circonferenza o un'elica a seconda dell'angolo tra $\vec v$ e $\vec B$ (lo vediamo tra poco).

| | Carica ferma | Carica in moto |
|---|---|---|
| Campo elettrico | forza $q\vec E$: parte e accelera lungo le linee di campo | forza $q\vec E$: cambia la velocità anche in modulo |
| Campo magnetico | nessuna forza: resta ferma | forza $q\vec v \times \vec B$: curva, modulo della velocità costante |

## Forza di Lorentz generalizzata

Se in una regione di spazio ci sono **sia** un campo elettrico **sia** un campo magnetico, una particella di carica $q$ e velocità $\vec v$ (nel vuoto) subisce la somma delle due forze:

$$\vec F = q\left(\vec E + \vec v \times \vec B\right)$$

dove $\vec E$ = campo elettrico (V/m) e gli altri simboli come sopra.

- La parte **elettrica** $q\vec E$ può compiere lavoro: cambia l'energia cinetica della particella.
- La parte **magnetica** $q\vec v \times \vec B$ non compie lavoro: devia soltanto la traiettoria.

Nelle applicazioni che usano entrambi i campi si sfrutta il lavoro del campo elettrico per **aumentare l'energia cinetica** della particella e il campo magnetico per **deflettere** la traiettoria (acceleratori, spettrometri, tubi a raggi catodici).

## Selettore di velocità

Un campo elettrico $\vec E$ e un campo magnetico $\vec B$ sono **perpendicolari** tra loro, e una particella entra con velocità perpendicolare a entrambi. I campi sono orientati in modo che la forza elettrica e quella magnetica abbiano **versi opposti**. La particella prosegue **in linea retta** solo se le due forze si bilanciano:

$$q\,E = q\,v\,B \quad\Rightarrow\quad v = \frac{E}{B}$$

dove $v$ = velocità selezionata (m/s), $E$ in V/m, $B$ in T.

Le particelle più veloci (forza magnetica maggiore) vengono deviate da una parte, quelle più lente dall'altra; passano dritte solo quelle con $v = E/B$. Il risultato **non dipende né dalla carica né dalla massa**: se la carica cambia segno, entrambe le forze si invertono e restano bilanciate.

::: esempio
**Elettrone non deviato.** Un campo elettrico di 1,5 kV/m e un campo magnetico di 0,30 T, perpendicolari, agiscono su un elettrone che si muove lungo una retta perpendicolare a entrambi, in modo che la forza totale sia nulla.
1. Forza totale nulla: $eE = evB$.
2. $v = \dfrac{E}{B} = \dfrac{1500\,\mathrm{V/m}}{0{,}30\,\mathrm T} = 5000\,\mathrm{m/s}$.
3. Verifica delle unità: $\dfrac{\mathrm{V/m}}{\mathrm T} = \dfrac{\mathrm{N/C}}{\mathrm{N\,s/(C\,m)}} = \mathrm{m/s}$.
:::

## Energia di una carica in un campo elettrico

Il campo elettrostatico è **conservativo**, quindi per una carica che si muove in esso si conserva l'**energia meccanica totale**, somma di energia cinetica e potenziale elettrica $U = qV$.

**Derivazione.** Il lavoro della forza elettrica per portare la carica da A a B è $W_{AB} = q\,(V_A - V_B)$ (definizione di differenza di potenziale). Per il teorema dell'energia cinetica $W_{AB} = K_B - K_A$. Uguagliando:

$$q\,(V_A - V_B) = \tfrac12 m v_B^2 - \tfrac12 m v_A^2 \quad\Longleftrightarrow\quad \tfrac12 m v_A^2 + q V_A = \tfrac12 m v_B^2 + q V_B$$

dove:
- $m$ = massa della particella (kg)
- $v_A, v_B$ = velocità in A e B (m/s)
- $V_A, V_B$ = potenziale elettrico in A e B (V)
- $q$ = carica con segno (C)

**Interpretazione.**
- Una carica **positiva** che va verso potenziali **minori** guadagna energia cinetica pari a $q\,\Delta V$; una carica **negativa** guadagna energia andando verso potenziali **maggiori**.
- Una particella che parte da ferma e attraversa una d.d.p. $\Delta V$ acquista $\tfrac12 m v^2 = |q|\,\Delta V$, quindi $v = \sqrt{2|q|\Delta V/m}$.
- **Elettronvolt**: l'energia acquistata da un elettrone accelerato da 1 V, $1\,\mathrm{eV} = 1{,}6 \cdot 10^{-19}\,\mathrm J$.
- Se nella regione c'è anche un campo magnetico, l'energia si conserva lo stesso: la forza magnetica non fa lavoro e non entra nel bilancio.

::: esempio
**Elettrone accelerato da 1000 V.** Parte da fermo. Energia acquistata: $K = e\,\Delta V = 1{,}6 \cdot 10^{-19} \cdot 1000 = 1{,}6 \cdot 10^{-16}\,\mathrm J = 1000\,\mathrm{eV}$. Velocità: $v = \sqrt{\dfrac{2K}{m}} = \sqrt{\dfrac{2 \cdot 1{,}6 \cdot 10^{-16}}{9{,}11 \cdot 10^{-31}}} = \sqrt{3{,}51 \cdot 10^{14}} \approx 1{,}87 \cdot 10^7\,\mathrm{m/s}$.
:::

## Moto circolare: velocità perpendicolare al campo uniforme

Consideriamo un campo magnetico **uniforme** (costante nel tempo e nello spazio) e una carica che si muove in un piano **perpendicolare** al campo.

1. La forza è perpendicolare al campo, quindi sta nel piano del moto: la particella resta nello stesso piano.
2. La forza è perpendicolare alla velocità e ha modulo costante $F = |q|vB$ (perché $v$ non cambia e $B$ è uniforme).
3. Una forza di modulo costante sempre perpendicolare alla velocità è una **forza centripeta**. Per la seconda legge della dinamica, con raggio di curvatura $r$:
$$|q|\,v\,B = m\,\frac{v^2}{r}$$
4. Ricavo il raggio:

$$r = \frac{m\,v}{|q|\,B}$$

dove:
- $r$ = raggio della traiettoria (m)
- $m$ = massa (kg), $v$ = velocità (m/s), $q$ = carica (C), $B$ = campo (T)

Il raggio è costante: il moto è **circolare uniforme**. Si può anche scrivere $r = \dfrac{p}{|q|B}$, con $p = mv$ quantità di moto.

**Velocità angolare e periodo.** $\omega = v/r$, quindi:

$$\omega = \frac{|q|\,B}{m} \qquad T = \frac{2\pi}{\omega} = \frac{2\pi m}{|q|\,B}$$

dove $\omega$ = velocità angolare (rad/s), $T$ = periodo (s). Il periodo **dipende solo** dalle proprietà della particella ($q/m$) e dal campo, **non dalla velocità** né dall'energia: una particella più veloce fa un cerchio più grande, ma nello stesso tempo.

**Verso di rotazione.** In forma vettoriale $\vec \omega = -\dfrac{q}{m}\vec B$: la velocità angolare è lungo la direzione del campo; per una carica **positiva** ha verso **opposto** al campo, per una carica **negativa** ha verso **concorde**. Cariche di segno opposto girano quindi in versi opposti.

**Convenzione grafica.** Nei disegni un vettore perpendicolare al foglio si indica con un pallino dentro un cerchio se **esce** dal foglio (si vede la punta della freccia) e con una crocetta dentro un cerchio se **entra** nel foglio (si vede la coda).

::: esempio
**Raggio della traiettoria.** Particella con $q/m = 2 \cdot 10^5\,\mathrm{C/kg}$, $B = 0{,}5\,\mathrm T$, $v_0 = 10^6\,\mathrm{m/s}$ perpendicolare al campo.
$r = \dfrac{mv}{qB} = \dfrac{v}{(q/m)\,B} = \dfrac{10^6}{2 \cdot 10^5 \cdot 0{,}5} = \dfrac{10^6}{10^5} = 10\,\mathrm m$.
:::

::: esempio
**Protone e particella alfa con la stessa energia cinetica.** La particella alfa (nucleo di elio) ha $m_\alpha = 4m_p$ e $q_\alpha = 2q_p$. Entrambe entrano perpendicolarmente al campo con la stessa energia cinetica $K$.
1. Da $K = \tfrac12 mv^2$ ricavo $mv = \sqrt{2mK}$.
2. Quindi $r = \dfrac{mv}{qB} = \dfrac{\sqrt{2mK}}{qB}$.
3. Rapporto: $\dfrac{r_p}{r_\alpha} = \dfrac{\sqrt{m_p}/q_p}{\sqrt{4m_p}/(2q_p)} = \dfrac{\sqrt{m_p}/q_p}{2\sqrt{m_p}/(2q_p)} = 1$. I raggi sono **uguali**.
:::

::: esempio
**Carica dentro un solenoide.** Una carica con $q/m = 1{,}27 \cdot 10^6\,\mathrm{C/kg}$ si muove di moto circolare uniforme a 400 m/s, attorno all'asse di un lungo solenoide percorso da 0,25 A, su una circonferenza di raggio 10 cm. Quante spire per unità di lunghezza ha il solenoide?
1. Campo necessario: $B = \dfrac{v}{(q/m)\,r} = \dfrac{400}{1{,}27 \cdot 10^6 \cdot 0{,}1} \approx 3{,}15 \cdot 10^{-3}\,\mathrm T$.
2. Dentro un lungo solenoide il campo è uniforme e vale $B = \mu_0 n I$ ($\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$, $n$ = spire per metro, $I$ = corrente).
3. $n = \dfrac{B}{\mu_0 I} = \dfrac{3{,}15 \cdot 10^{-3}}{4\pi \cdot 10^{-7} \cdot 0{,}25} = \dfrac{3{,}15 \cdot 10^{-3}}{3{,}14 \cdot 10^{-7}} \approx 10^4$ spire/m $= 100$ spire/cm.
:::

::: esempio
**Elettrone o protone? E che campo?** (esercizio della dispensa) Una particella elementare entra in una zona di campo magnetico uniforme con velocità perpendicolare al campo, percorre una semicirconferenza ed esce. Il campo esce dal foglio; la particella entra dal bordo superiore della zona muovendosi verso il basso, curva verso sinistra ed esce verso l'alto, spostata a sinistra. Il tempo di transito è 130 ns.
1. Con $\vec v$ verso il basso ($-\hat y$) e $\vec B$ uscente ($+\hat z$): $\vec v \times \vec B \propto (-\hat y) \times \hat z = -\hat x$, cioè verso **sinistra**. La forza osservata (verso il centro della semicirconferenza) è proprio verso sinistra: la carica è **positiva**, quindi è un **protone** ($m = 1{,}67 \cdot 10^{-27}\,\mathrm{kg}$, $q = 1{,}6 \cdot 10^{-19}\,\mathrm C$). Il metodo è sempre lo stesso: confrontare il verso della forza centripeta osservata con quello di $\vec v \times \vec B$; se coincidono la carica è positiva, se sono opposti è negativa (un elettrone avrebbe curvato a destra).
2. Il tempo di transito, 130 ns, è **mezzo periodo**: $t = \dfrac{T}{2} = \dfrac{\pi m}{qB}$. Quindi $B = \dfrac{\pi m}{q\,t} = \dfrac{\pi \cdot 1{,}67 \cdot 10^{-27}}{1{,}6 \cdot 10^{-19} \cdot 130 \cdot 10^{-9}} = \dfrac{5{,}25 \cdot 10^{-27}}{2{,}08 \cdot 10^{-26}} \approx 0{,}25\,\mathrm T$.
3. Se la particella entra con energia cinetica **doppia**, il tempo di transito **non cambia**: $T/2 = \pi m/(qB)$ non dipende dalla velocità. Il raggio cresce (di un fattore $\sqrt2$) ma il tempo resta 130 ns.
:::

## Moto elicoidale: velocità con angolo generico

Ora la velocità iniziale forma un angolo generico $\theta$ con il campo uniforme $\vec B$ (diretto, per esempio, lungo l'asse $z$). Scompongo la velocità in due componenti:

$$v_\parallel = v\cos\theta \qquad v_\perp = v\sin\theta$$

- La componente **parallela** al campo **resta costante**: il suo prodotto vettoriale con $\vec B$ è nullo, quindi la forza di Lorentz non la modifica. Lungo $z$ il moto è **rettilineo uniforme**.
- La componente **perpendicolare** produce, come visto sopra, un **moto circolare uniforme** nel piano perpendicolare al campo (la proiezione del moto sul piano $xy$ è una circonferenza).

La composizione dei due moti è un'**elica** avvolta attorno alle linee del campo, a passo costante (moto elicoidale uniforme).

**Raggio dell'elica**, con la sola componente perpendicolare:

$$r = \frac{m\,v_\perp}{|q|\,B} = \frac{m\,v\,\sin\theta}{|q|\,B}$$

**Periodo** del giro (lo stesso del moto circolare): $T = \dfrac{2\pi m}{|q|B}$.

**Passo dell'elica**: la distanza percorsa lungo il campo in un giro, cioè in un periodo:

$$p = v_\parallel\,T = \frac{2\pi\,m\,v\cos\theta}{|q|\,B}$$

dove:
- $r$ = raggio dell'elica (m)
- $p$ = passo dell'elica (m)
- $\theta$ = angolo tra velocità e campo

**Casi limite:** $\theta = 90°$ dà $v_\parallel = 0$: elica di passo nullo, cioè una **circonferenza**. $\theta = 0$ dà $v_\perp = 0$: raggio nullo, cioè una **retta** lungo il campo (nessuna forza).

::: esempio
**Elica di un protone.** Protone con $v = 10^6\,\mathrm{m/s}$ a 30° da un campo $B = 0{,}1\,\mathrm T$.
1. Componenti: $v_\perp = 10^6 \cdot 0{,}5 = 5 \cdot 10^5\,\mathrm{m/s}$; $v_\parallel = 10^6 \cdot 0{,}866 = 8{,}66 \cdot 10^5\,\mathrm{m/s}$.
2. Raggio: $r = \dfrac{1{,}67 \cdot 10^{-27} \cdot 5 \cdot 10^5}{1{,}6 \cdot 10^{-19} \cdot 0{,}1} = \dfrac{8{,}35 \cdot 10^{-22}}{1{,}6 \cdot 10^{-20}} \approx 0{,}052\,\mathrm m = 5{,}2\,\mathrm{cm}$.
3. Periodo: $T = \dfrac{2\pi \cdot 1{,}67 \cdot 10^{-27}}{1{,}6 \cdot 10^{-20}} \approx 6{,}56 \cdot 10^{-7}\,\mathrm s$.
4. Passo: $p = v_\parallel T = 8{,}66 \cdot 10^5 \cdot 6{,}56 \cdot 10^{-7} \approx 0{,}57\,\mathrm m$.
:::

## Spettrometro di massa

È l'applicazione più immediata del moto circolare in un campo uniforme: serve a misurare la **massa** di ioni e a separare gli **isotopi**.

1. **Accelerazione.** Lo ione (carica $q$, massa $m$), praticamente fermo, attraversa un condensatore con d.d.p. $\Delta V$. Per la conservazione dell'energia acquista l'energia cinetica $\tfrac12 m v^2 = q\,\Delta V$, quindi $v = \sqrt{\dfrac{2q\Delta V}{m}}$.
2. **Deflessione.** Con questa velocità entra in una regione di campo magnetico uniforme $B$ perpendicolare alla velocità e percorre una **semicirconferenza** di raggio $r = \dfrac{mv}{qB}$.
3. **Rivelazione.** Colpisce uno schermo (o una lastra) a una distanza dal punto d'ingresso uguale al **diametro** $2r$ della traiettoria.
4. **Formula.** Sostituisco la velocità nel raggio:
$$r = \frac{m}{qB}\sqrt{\frac{2q\Delta V}{m}} = \frac{1}{B}\sqrt{\frac{2m\,\Delta V}{q}}$$
e ricavo la massa elevando al quadrato:

$$m = \frac{q\,B^2\,r^2}{2\,\Delta V}$$

dove $\Delta V$ = tensione di accelerazione (V), $B$ = campo (T), $r$ = raggio misurato (metà della distanza del punto d'impatto, m), $q$ = carica dello ione (C).

Se si conosce la carica (o si usano ioni della stessa carica), la posizione del punto d'impatto identifica la massa: a parità di carica, **ioni più pesanti** descrivono un semicerchio **più grande** ($r \propto \sqrt m$). Isotopi diversi dello stesso elemento colpiscono lo schermo in punti diversi e vengono separati.

::: esempio
**Separare carbonio-12 e carbonio-14.** Ioni con carica $e$, accelerati da $\Delta V = 1000\,\mathrm V$, in un campo $B = 0{,}2\,\mathrm T$. Masse: $m_{12} \approx 12 \cdot 1{,}66 \cdot 10^{-27} = 1{,}99 \cdot 10^{-26}\,\mathrm{kg}$, $m_{14} \approx 2{,}32 \cdot 10^{-26}\,\mathrm{kg}$.
1. $r_{12} = \dfrac{1}{0{,}2}\sqrt{\dfrac{2 \cdot 1{,}99 \cdot 10^{-26} \cdot 1000}{1{,}6 \cdot 10^{-19}}} = 5\sqrt{2{,}49 \cdot 10^{-4}} \approx 5 \cdot 0{,}0158 = 0{,}079\,\mathrm m$.
2. $r_{14} = 5\sqrt{\dfrac{2 \cdot 2{,}32 \cdot 10^{-26} \cdot 1000}{1{,}6 \cdot 10^{-19}}} = 5\sqrt{2{,}90 \cdot 10^{-4}} \approx 5 \cdot 0{,}0170 = 0{,}085\,\mathrm m$.
3. Punti d'impatto a $2r$: circa 15,8 cm e 17,0 cm. I due isotopi sono separati di circa 1,2 cm.
:::

## Bottiglia magnetica e fasce di Van Allen

Quando un campo magnetico ha linee che si **allargano al centro** e si **infittiscono alle estremità** si forma una configurazione detta **bottiglia magnetica**.

- Una particella carica che entra nella zona del campo si mette a **spiraleggiare** attorno alle linee, avanzando lentamente lungo l'asse della bottiglia (moto elicoidale).
- Avvicinandosi alle estremità, dove il campo è più intenso (le linee sono più fitte), le linee sono leggermente curve e convergenti: la forza di Lorentz ha sempre una piccola componente diretta **verso l'interno** della regione, che frena l'avanzamento e alla fine **riflette** la particella indietro.
- La particella rimbalza avanti e indietro tra le due estremità: resta **intrappolata** dal campo.

Il **campo magnetico terrestre** crea un effetto bottiglia magnetica che confina particelle cariche energetiche (essenzialmente dei raggi cosmici e del vento solare) nelle **fasce di Van Allen**, regioni a forma di ciambella attorno alla Terra. In occasione di particolari eventi solari le fasce si deformano e alcune particelle sfuggono nelle zone polari, meno protette: interagendo con l'atmosfera producono le **aurore** boreali (e australi).

::: attenzione
- La forza magnetica **non cambia il modulo** della velocità e non cambia l'energia cinetica: può solo curvare la traiettoria.
- Il periodo del moto circolare **non dipende dalla velocità**: raddoppiando l'energia cambia il raggio, non il tempo per fare un giro (o mezzo giro).
- Nel raggio dell'elica entra solo $v\sin\theta$; nel passo entra $v\cos\theta$. Non scambiarli.
- In un selettore di velocità la velocità selezionata $E/B$ non dipende da carica e massa.
- Una carica ferma in un campo magnetico resta ferma; in un campo elettrico invece parte.
:::

::: esame
**Chiuse:** forza nulla per velocità parallela al campo; $B$ da forza massima ($F = qvB$) o con angolo ($F = qvB\sin\theta$); rapporti di forze; velocità del selettore $v = E/B$; particella che va dritta (campo eventualmente parallelo alla velocità); rapporto dei raggi a parità di energia cinetica; il campo magnetico non modifica il modulo della velocità; la forza è sempre perpendicolare alla velocità; una carica in un campo magnetico uniforme subisce forza solo se si muove (e non parallelamente al campo); raggio $r = v/((q/m)B)$; numero di spire di un solenoide ($B = \mu_0 nI$).

**Aperte**, con la traccia di risposta:
- *Carica in moto in un campo magnetico / forza di Lorentz con esempi:* $\vec F = q\vec v \times \vec B$, modulo $qvB\sin\theta$, direzione (mano destra, segno della carica), non compie lavoro; forma generalizzata $q(\vec E + \vec v \times \vec B)$; esempi: moto circolare $r = mv/qB$, selettore di velocità $v = E/B$, spettrometro di massa, bottiglia magnetica.
- *Carica ferma in un campo elettrico e in uno magnetico:* nel campo elettrico subisce $q\vec E$ e accelera lungo le linee di campo (moto uniformemente accelerato, guadagna energia cinetica); nel campo magnetico la forza è nulla perché $v = 0$, la carica resta ferma.
- *Moto con velocità in direzione generica in un campo uniforme:* scomposizione $v_\parallel = v\cos\theta$ (costante, moto uniforme lungo $\vec B$) e $v_\perp = v\sin\theta$ (moto circolare); elica con $r = mv\sin\theta/(qB)$, $T = 2\pi m/(qB)$, passo $p = 2\pi mv\cos\theta/(qB)$; casi limite cerchio e retta.
- *Conservazione dell'energia di una carica nel campo elettrico:* campo conservativo, $W_{AB} = q(V_A - V_B) = \Delta K$, quindi $\tfrac12 mv_A^2 + qV_A = \tfrac12 mv_B^2 + qV_B$; accelerazione con $\Delta V$: $v = \sqrt{2q\Delta V/m}$; elettronvolt; il campo magnetico eventualmente presente non cambia il bilancio.
- *Spettrometro di massa:* accelerazione $q\Delta V = \tfrac12 mv^2$, semicirconferenza in $B$ con $r = mv/(qB)$, impatto a distanza $2r$, $m = qB^2r^2/(2\Delta V)$, separazione degli isotopi.
:::

::: sintesi
- $\vec F = q\vec v \times \vec B$, $F = qvB\sin\theta$: nulla se $\vec v \parallel \vec B$ o $v = 0$, massima se perpendicolari; sempre perpendicolare a $\vec v$: nessun lavoro, $|\vec v|$ costante.
- Forza generalizzata $\vec F = q(\vec E + \vec v \times \vec B)$: $\vec E$ cambia l'energia, $\vec B$ devia. Selettore di velocità: $v = E/B$.
- Nel campo elettrico: $\tfrac12 mv_A^2 + qV_A = \tfrac12 mv_B^2 + qV_B$; accelerazione $v = \sqrt{2q\Delta V/m}$; 1 eV $= 1{,}6 \cdot 10^{-19}$ J.
- Velocità perpendicolare a $B$ uniforme: cerchio, $r = mv/(qB)$, $\omega = qB/m$, $T = 2\pi m/(qB)$ indipendente dalla velocità.
- Angolo generico: elica, $r = mv\sin\theta/(qB)$, passo $p = 2\pi mv\cos\theta/(qB)$.
- Spettrometro di massa: $r = \frac1B\sqrt{2m\Delta V/q}$, $m = qB^2r^2/(2\Delta V)$; ioni più pesanti, semicerchio più grande.
- Bottiglia magnetica: particelle intrappolate tra zone di campo intenso; fasce di Van Allen e aurore.
:::
