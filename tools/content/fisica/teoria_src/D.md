=== 21 dispense
SLIDES: 21, 10, 19
# Lezione 21 — Impulso, quantità di moto e loro conservazione

## Di che cosa parla questa lezione

Finora la dinamica del punto materiale è stata scritta con $\vec F = m\vec a$: conosco la forza istante per istante e ricavo l'accelerazione. In molte situazioni reali, però, la forza non si conosce in dettaglio. Pensa a un pallone colpito di testa, a una palla che rimbalza su un muro, a un proiettile che esce da un fucile: la forza dura pochi millesimi di secondo, è enorme e cambia in modo complicato. Quello che si misura bene è lo stato del corpo **prima** e **dopo**.

Per trattare questi casi la dispensa introduce due grandezze nuove:
- l'**impulso** di una forza, che misura l'effetto complessivo di una forza che agisce per un certo intervallo di tempo;
- la **quantità di moto** (o momento lineare), che descrive lo "stato di moto" di un corpo.

Il legame tra le due è il **teorema dell'impulso**. Da qui seguono la forma più generale del secondo principio, $\vec F = d\vec p/dt$, e la **conservazione della quantità di moto**, una delle leggi più importanti di tutta la fisica. La lezione si chiude con i **sistemi a massa variabile** (il razzo). Le domande del paniere chiedono anche il **terzo principio** e la **conservazione dell'energia meccanica** (lezioni 10 e 19-20): li riprendiamo qui perché servono a capire quando si conserva la quantità di moto e quando l'energia.

## Impulso di una forza

### Impulso istantaneo

Consideriamo una forza $\vec F$ che agisce su un corpo di massa $m$ per un intervallo di tempo brevissimo $dt$. Si chiama **impulso istantaneo** (o elementare) della forza la grandezza:

$$d\vec J = \vec F\,dt$$

dove:
- $d\vec J$ = impulso elementare, in $\mathrm{N\cdot s}$;
- $\vec F$ = forza che agisce sul corpo in quell'istante, in $\mathrm N$;
- $dt$ = intervallo di tempo infinitesimo, in $\mathrm s$.

### Impulso in un intervallo finito

Se la forza agisce tra l'istante $t_1$ e l'istante $t_2$ e nel frattempo cambia (forza "non stazionaria"), bisogna sommare tutti gli impulsi elementari. La somma di infiniti contributi infinitesimi è un integrale:

$$\vec J = \int_{t_1}^{t_2} \vec F(t)\,dt$$

Per calcolarlo bisogna conoscere l'**andamento temporale** della forza, cioè la funzione $\vec F(t)$. Graficamente, per una forza con direzione fissa, l'impulso è l'**area sotto il grafico** di $F(t)$ tra $t_1$ e $t_2$.

Se invece la forza è **costante**, esce dall'integrale e resta:

$$\vec J = \vec F\int_{t_1}^{t_2}dt = \vec F\,(t_2 - t_1) = \vec F\,\Delta t$$

### Proprietà dell'impulso

- È una grandezza **vettoriale**: ha la direzione e il verso della forza (o, se la forza cambia direzione, della somma vettoriale dei contributi).
- Ha le dimensioni di una forza per un tempo. Si misura in $\mathrm{N\cdot s}$.
- Spesso si indica anche con $\vec I$ invece di $\vec J$: è la stessa cosa.

### Forza media

Quando la forza è variabile e complicata (un colpo, un urto) si definisce la **forza media** $\vec F_m$: la forza costante che, agendo per lo stesso tempo $\Delta t$, darebbe lo stesso impulso.

$$\vec F_m = \frac{\vec J}{\Delta t} = \frac{1}{\Delta t}\int_{t_1}^{t_2}\vec F\,dt$$

È il valore "medio nel tempo" della forza. Sul grafico $F(t)$ è l'altezza del rettangolo con base $\Delta t$ e con la stessa area della curva.

## Quantità di moto

### Definizione

La **quantità di moto** (o **momento lineare**) di un punto materiale di massa $m$ che si muove con velocità $\vec v$ è il vettore:

$$\vec p = m\vec v$$

dove:
- $\vec p$ = quantità di moto, in $\mathrm{kg\cdot m/s}$;
- $m$ = massa, in $\mathrm{kg}$;
- $\vec v$ = velocità, in $\mathrm{m/s}$.

### Unità di misura

L'unità SI della quantità di moto è $\mathrm{kg\cdot m/s}$. È la **stessa** unità dell'impulso. Verifichiamolo: un newton è $1\,\mathrm N = 1\,\mathrm{kg\cdot m/s^2}$; moltiplicando per un secondo:

$$1\,\mathrm{N\cdot s} = 1\,\mathrm{kg\cdot\frac{m}{s^2}\cdot s} = 1\,\mathrm{kg\cdot m/s}$$

Quindi la quantità di moto si può esprimere indifferentemente in $\mathrm{kg\cdot m/s}$ o in $\mathrm{N\cdot s}$.

### Significato e proprietà

La quantità di moto misura "quanto moto" possiede un corpo tenendo conto sia della massa sia della velocità. Un camion lento e un proiettile velocissimo possono avere la stessa quantità di moto: per fermarli serve lo stesso impulso.

- È un **vettore** con la stessa direzione e lo stesso verso della velocità (la massa è positiva). Se la velocità cambia **solo di verso**, la quantità di moto cambia: $\vec p$ diventa $-\vec p$, e la variazione è $-2\vec p$.
- È **direttamente proporzionale** sia alla massa sia alla velocità. Se la velocità diventa 10 volte più grande, anche $p$ diventa 10 volte più grande. Se raddoppiano sia $m$ sia $v$, $p' = (2m)(2v) = 4mv$: la quantità di moto **quadruplica** (i fattori si moltiplicano).
- **Dipende dal sistema di riferimento**, perché la velocità dipende dal riferimento. Un passeggero seduto in un treno ha $\vec p = 0$ per chi è sul treno e $\vec p = m\vec v_{treno}$ per chi è sul binario.

### Confronto con l'energia cinetica

L'energia cinetica $K = \tfrac12 mv^2$ contiene anch'essa la velocità, quindi **anche lei dipende dal riferimento**. Ma ci sono differenze importanti:

| | Quantità di moto $\vec p = m\vec v$ | Energia cinetica $K = \tfrac12 mv^2$ |
|---|---|---|
| Natura | vettore | scalare |
| Dipende da $v$ come | $v$ (lineare) | $v^2$ (quadratica) |
| Se la velocità si inverte | cambia ($\vec p \to -\vec p$) | non cambia |
| Se $v$ diventa 10 volte | 10 volte | 100 volte |
| Unità | $\mathrm{kg\cdot m/s} = \mathrm{N\cdot s}$ | $\mathrm J = \mathrm{kg\cdot m^2/s^2}$ |
| Dipende dal riferimento | sì | sì |

::: attenzione
"Scalare" non vuol dire "uguale per tutti gli osservatori". L'energia cinetica è uno scalare (non ha direzione), ma il suo valore cambia da un riferimento all'altro perché contiene la velocità. Quindi quantità di moto ed energia cinetica dipendono **entrambe** dal riferimento.
:::

## Teorema dell'impulso

### Dimostrazione passo per passo

1. Partiamo dal secondo principio per un corpo di massa costante: $\vec F = m\vec a = m\,\dfrac{d\vec v}{dt}$, dove $\vec F$ è la **forza risultante** sul corpo.
2. Moltiplichiamo entrambi i membri per $dt$: $\vec F\,dt = m\,d\vec v$.
3. Il primo membro è l'impulso elementare; il secondo, essendo $m$ costante, è $d(m\vec v) = d\vec p$. Quindi: $d\vec J = d\vec p$.
4. Sommiamo (integriamo) tra $t_1$ e $t_2$: a sinistra si ottiene l'impulso totale, a destra la somma delle variazioni infinitesime della quantità di moto, cioè la variazione totale:

$$\vec J = \int_{t_1}^{t_2}\vec F\,dt = \int_{\vec p_1}^{\vec p_2} d\vec p = \vec p_2 - \vec p_1 = \Delta\vec p$$

### Enunciato

**Teorema dell'impulso**: l'impulso della forza (risultante) che agisce su un punto materiale tra due istanti è uguale alla variazione che la quantità di moto del punto subisce nello stesso intervallo di tempo.

$$\vec J = \Delta\vec p = m\vec v_f - m\vec v_i$$

### Validità

Il teorema discende direttamente dal secondo principio, senza altre ipotesi. Quindi vale **sempre**:
- per sistemi **isolati** e **non isolati**;
- qualunque sia il tipo di forza (conservativa o no): non ha nulla a che vedere con la conservazione dell'energia.

Nel caso particolare di sistema isolato (forza risultante nulla) l'impulso è zero e quindi $\Delta\vec p = 0$: è la conservazione della quantità di moto, che è dunque un **caso particolare** del teorema, non il teorema stesso.

### Forza media in un urto

Combinando il teorema con la definizione di forza media:

$$\vec F_m = \frac{\Delta\vec p}{\Delta t}$$

A parità di variazione di quantità di moto, **più lungo è il tempo di contatto, più piccola è la forza media**. È il principio degli airbag, dei caschi imbottiti, dei materassini nel salto in alto, delle ginocchia piegate quando si atterra da un salto: allungano il $\Delta t$ dell'arresto e quindi riducono la forza.

::: esempio
**Sasso in caduta libera.** Un sasso di $2{,}5\,\mathrm{kg}$ parte da fermo e cade senza attrito. Quanto vale la sua quantità di moto dopo $4\,\mathrm s$?

L'unica forza è il peso, costante: $F = mg = 2{,}5 \cdot 9{,}8 = 24{,}5\,\mathrm N$. L'impulso in $4\,\mathrm s$ è $J = F\,\Delta t = 24{,}5 \cdot 4 = 98\,\mathrm{N\cdot s}$. Poiché $p_i = 0$:

$$p_f = p_i + J = 0 + 98 = 98\,\mathrm{N\cdot s}$$

Verifica per altra via: $v = gt = 9{,}8 \cdot 4 = 39{,}2\,\mathrm{m/s}$, e $p = mv = 2{,}5 \cdot 39{,}2 = 98\,\mathrm{kg\cdot m/s}$. Stesso risultato.
:::

::: esempio
**Pallina che rimbalza su una parete.** Una pallina di $1\,\mathrm{kg}$ arriva perpendicolarmente su una parete a $2\,\mathrm{m/s}$ e rimbalza a $1{,}5\,\mathrm{m/s}$. Variazione della quantità di moto?

1. Scelgo un asse: positivo il verso di **allontanamento** dalla parete.
2. Prima: la pallina va verso la parete, quindi $v_i = -2\,\mathrm{m/s}$. Dopo: $v_f = +1{,}5\,\mathrm{m/s}$.
3. $\Delta p = m(v_f - v_i) = 1\cdot(1{,}5 - (-2)) = 3{,}5\,\mathrm{N\cdot s}$.

Il segno positivo dice che la variazione (cioè l'impulso dato dalla parete) è diretta **in allontanamento dalla parete**. Nota che i moduli si sono **sommati**: $2 + 1{,}5$.
:::

::: esempio
**Pallone respinto di testa.** Un pallone di $0{,}45\,\mathrm{kg}$ arriva a $25\,\mathrm{m/s}$ e, dopo la respinta, ha $10\,\mathrm{m/s}$ nella stessa direzione e verso opposto. Impulso ricevuto?

Positivo il verso di arrivo: $v_i = +25$, $v_f = -10\,\mathrm{m/s}$.

$$J = m(v_f - v_i) = 0{,}45\cdot(-10 - 25) = 0{,}45 \cdot(-35) = -15{,}75\,\mathrm{kg\cdot m/s}$$

Il modulo è $15{,}75\,\mathrm{kg\cdot m/s}$; il segno meno indica che l'impulso è diretto in verso opposto a quello di arrivo, cioè verso cui il pallone viene respinto.
:::

::: esempio
**Punto che cade e rimbalza (dalla dispensa).** Un punto di massa $m = 1{,}2\,\mathrm{kg}$ cade in verticale, tocca terra a $25\,\mathrm{m/s}$ e rimbalza a $10\,\mathrm{m/s}$. Il contatto dura $0{,}020\,\mathrm s$.

(a) Asse $y$ verso l'alto: $v_0 = -25\,\mathrm{m/s}$, $v_1 = +10\,\mathrm{m/s}$.

$$\vec J = m v_1 - m v_0 = 1{,}2\cdot(10 - (-25))\,\hat\jmath = 1{,}2 \cdot 35\,\hat\jmath = 42\,\hat\jmath\ \mathrm{kg\cdot m/s}$$

(b) Forza media sul punto: $\vec F_m = \vec J/\Delta t = 42/0{,}020\,\hat\jmath = 2100\,\hat\jmath\ \mathrm N$, verso l'alto. Per il terzo principio il punto esercita sul pavimento una forza media uguale e opposta: $-2100\,\hat\jmath\ \mathrm N$, verso il basso. È circa 180 volte il peso del corpo ($1{,}2 \cdot 9{,}8 \approx 11{,}8\,\mathrm N$): ecco perché negli urti il peso si può trascurare.
:::

::: esempio
**Rimbalzo obliquo su una parete (dalla dispensa).** Un punto di $0{,}165\,\mathrm{kg}$ colpisce una parete a $2{,}00\,\mathrm{m/s}$ con un angolo $\theta_1 = 30{,}0°$ rispetto alla normale. Nel rimbalzo la componente normale si inverte, quella parallela resta uguale.

Prendo l'asse $x$ parallelo alla parete e l'asse $y$ lungo la normale. Prima: $\vec v_1 = (v\sin\theta_1,\ v\cos\theta_1)$. Dopo: $\vec v_2 = (v\sin\theta_1,\ -v\cos\theta_1)$.

(a) Angolo dopo il rimbalzo: $\tan\theta_2 = v_{2x}/v_{2y} = -\tan\theta_1$, quindi $\theta_2 = -\theta_1$: la pallina riparte con un angolo di **ampiezza uguale**, $30°$, dall'altra parte della normale (come la luce in uno specchio).

(b) Variazione della quantità di moto: la componente parallela non cambia, quella normale passa da $+mv\cos\theta_1$ a $-mv\cos\theta_1$:

$$\Delta\vec p = (0,\ -2mv\cos 30°) \qquad |\Delta\vec p| = 2 \cdot 0{,}165 \cdot 2{,}00 \cdot 0{,}866 \approx 0{,}57\,\mathrm{kg\cdot m/s}$$

diretta perpendicolarmente alla parete (verso le $y$ negative del disegno, cioè in allontanamento dalla parete).
:::

::: esempio
**Palla da baseball respinta con la stessa velocità.** Una palla a $30\,\mathrm{m/s}$ viene colpita e torna indietro a $30\,\mathrm{m/s}$. La quantità di moto passa da $+30m$ a $-30m$: è **variata** ($\Delta p = -60m$). L'energia cinetica $\tfrac12 m\cdot 30^2$ invece è **la stessa** prima e dopo, perché dipende solo dal modulo della velocità.
:::

::: attenzione
Nei rimbalzi le velocità prima e dopo hanno versi opposti. Scegli **sempre** un verso positivo e dai il segno alle velocità: i moduli si **sommano** ($|\Delta v| = v_i + v_f$), non si sottraggono. L'errore tipico è fare $25 - 10$ invece di $25 + 10$.
:::

## Il secondo principio scritto con la quantità di moto

### Forma generale

Se la massa è costante si può portare dentro la derivata:

$$m\vec a = m\frac{d\vec v}{dt} = \frac{d(m\vec v)}{dt} = \frac{d\vec p}{dt}$$

e il secondo principio si scrive:

$$\vec F = \frac{d\vec p}{dt}$$

dove $\vec F$ è la forza risultante (in $\mathrm N$) e $d\vec p/dt$ la rapidità con cui cambia la quantità di moto (in $\mathrm{kg\cdot m/s^2} = \mathrm N$).

La dispensa sottolinea due cose:
- questa è la **forma originale** con cui Newton enunciò la legge, ed è la **più generale**: vale anche quando la massa cambia (razzi, gocce che si ingrandiscono), dove $\vec F = m\vec a$ non basta;
- lo **stato dinamico** di un punto materiale è descritto dalla sua quantità di moto, e l'effetto di una forza è far variare nel tempo questo stato.

In parole: **la forza è la variazione temporale della quantità di moto**. Non è un'energia per unità di tempo (quella è la potenza, in watt), né una quantità di moto moltiplicata per un tempo (che avrebbe unità $\mathrm{kg\cdot m}$).

## Conservazione della quantità di moto

### Per un punto materiale

Dalla forma $\vec F = d\vec p/dt$: se sul corpo non agiscono forze, o se la loro risultante è nulla,

$$\vec F = 0 \;\Rightarrow\; \frac{d\vec p}{dt} = 0 \;\Rightarrow\; \vec p = \text{costante}$$

È un altro modo di dire il principio d'inerzia: senza forze, la velocità (e quindi la quantità di moto) non cambia.

### Per un sistema di più corpi

La legge diventa davvero potente per un **sistema** di corpi che interagiscono. Prendiamo due corpi 1 e 2. Su ciascuno agiscono:
- la forza che gli fa l'altro corpo (forza **interna** al sistema): $\vec F_{12}$ su 1 dovuta a 2, $\vec F_{21}$ su 2 dovuta a 1;
- eventuali forze **esterne** $\vec F_1^{(e)}$ e $\vec F_2^{(e)}$.

Scriviamo il secondo principio per ciascuno e sommiamo:

$$\frac{d\vec p_1}{dt} = \vec F_{12} + \vec F_1^{(e)} \qquad \frac{d\vec p_2}{dt} = \vec F_{21} + \vec F_2^{(e)}$$

$$\frac{d(\vec p_1 + \vec p_2)}{dt} = (\vec F_{12} + \vec F_{21}) + (\vec F_1^{(e)} + \vec F_2^{(e)})$$

Per il **terzo principio** $\vec F_{12} = -\vec F_{21}$, quindi la prima parentesi è zero. Resta:

$$\frac{d\vec P}{dt} = \vec F^{(e)}_{tot} \qquad \text{con } \vec P = \vec p_1 + \vec p_2$$

Se la risultante delle forze esterne è nulla:

$$\vec F^{(e)}_{tot} = 0 \;\Rightarrow\; \vec P_{iniziale} = \vec P_{finale}$$

**Principio di conservazione della quantità di moto**: in un sistema **isolato** (nessuna forza esterna, o risultante esterna nulla) la quantità di moto totale resta costante, qualunque cosa succeda all'interno (urti, esplosioni, spinte, calci).

Osservazioni importanti:
- Le forze interne **non** possono cambiare la quantità di moto totale: possono solo trasferirla da un corpo all'altro.
- La legge è **vettoriale**: si conserva ogni componente. Se le forze esterne sono nulle solo in orizzontale (per esempio il peso è bilanciato dalla reazione del piano), si conserva la componente orizzontale.
- Se il sistema parte **da fermo**, $\vec P = 0$ e resta zero: se un pezzo va avanti, un altro deve andare indietro, con $m_1v_1 = m_2v_2$ in modulo.

::: esempio
**Uomo che calcia un sasso sul ghiaccio.** Un uomo di $70\,\mathrm{kg}$ fermo su una superficie senza attrito calcia un sasso di $100\,\mathrm g$. Dopo il calcio l'uomo ha velocità $0{,}2\,\mathrm{cm/s}$. Velocità del sasso?

1. Il sistema uomo + sasso è isolato in orizzontale e parte fermo: $P = 0$.
2. Converto: $0{,}2\,\mathrm{cm/s} = 0{,}002\,\mathrm{m/s}$; $100\,\mathrm g = 0{,}1\,\mathrm{kg}$.
3. $0 = 70 \cdot 0{,}002 + 0{,}1\cdot v \Rightarrow v = -\dfrac{0{,}14}{0{,}1} = -1{,}4\,\mathrm{m/s}$.

Il sasso va a $1{,}4\,\mathrm{m/s}$ in verso **opposto** all'uomo. La velocità è 700 volte quella dell'uomo perché la massa è 700 volte più piccola.
:::

::: esempio
**Uomo che calcia una pietra.** Uomo di $88{,}4\,\mathrm{kg}$ fermo su superficie liscia; la pietra di $71{,}7\,\mathrm g$ parte a $3{,}87\,\mathrm{m/s}$. Velocità dell'uomo?

$$V = \frac{m\,v}{M} = \frac{0{,}0717 \cdot 3{,}87}{88{,}4} = \frac{0{,}2775}{88{,}4} \approx 3{,}1\cdot 10^{-3}\,\mathrm{m/s} = 3{,}1\,\mathrm{mm/s}$$

in verso opposto alla pietra. Attenzione alla conversione grammi → kg: dimenticarla porta a un risultato 1000 volte più grande.
:::

::: attenzione
**Pattinatore fermo su ghiaccio perfettamente liscio.** Come fa a raggiungere il bordo? Saltare, spingere con i pattini, strisciare: tutti questi metodi hanno bisogno dell'**attrito** con il ghiaccio per ricevere una spinta orizzontale. Senza attrito non c'è alcuna forza esterna orizzontale, quindi la quantità di moto del pattinatore resta zero. L'unica possibilità è usare una forza **interna** a un sistema più grande: **lanciare un oggetto** (un guanto, un cappello) in verso opposto al bordo. Per la conservazione, $0 = m_{guanto}\vec v_{guanto} + M\vec V$, il pattinatore si muove in verso opposto al guanto.
:::

## Terzo principio della dinamica

### Enunciato

In un sistema di riferimento inerziale, se un corpo A esercita una forza $\vec F_{A\to B}$ sul corpo B, allora B esercita su A una forza $\vec F_{B\to A}$ con **stesso modulo**, **stessa direzione** (la stessa retta d'azione) e **verso opposto**:

$$\vec F_{B\to A} = -\vec F_{A\to B}$$

Si chiama anche **principio di azione e reazione**: "a ogni azione corrisponde una reazione uguale e opposta, agente sulla stessa retta". Come gli altri principi della dinamica, non si dimostra: è frutto dell'esperienza ed è uno dei fondamenti della meccanica classica (valida per corpi più grandi degli atomi e velocità molto minori di quella della luce).

### Cosa vuol dire davvero

- Le due forze agiscono su **corpi diversi**: una su A, l'altra su B. Per questo **non si annullano** tra loro quando studi il moto di un singolo corpo. Si annullano solo quando sommi le forze su **tutto il sistema** A + B.
- Le forze nascono sempre **a coppie**: non esiste una forza "isolata". La Terra attira la mela con il peso $m\vec g$, la mela attira la Terra con una forza uguale e opposta (che però, data la massa enorme della Terra, produce un'accelerazione trascurabile).
- Vale per forze a contatto (spinta, urto) e per forze a distanza (gravità, forze elettriche).

### Conseguenze

- È il motivo per cui **le forze interne si annullano** nella somma su un sistema, e quindi la quantità di moto di un sistema isolato si conserva (dimostrazione sopra).
- Spiega il rinculo del fucile, la spinta del razzo, il nuotatore che spinge l'acqua indietro per andare avanti, il piede che spinge il terreno indietro (con l'attrito) per camminare in avanti.
- Nell'esempio del rimbalzo, il pavimento spinge il corpo verso l'alto con $2100\,\mathrm N$ e il corpo spinge il pavimento verso il basso con $2100\,\mathrm N$.

## Conservazione dell'energia meccanica

Questo argomento (lezioni 19-20) serve per confrontarlo con la conservazione della quantità di moto: sono due leggi **diverse**, con condizioni diverse.

### Enunciato

L'**energia meccanica** di un corpo (o sistema) è la somma dell'energia cinetica e dell'energia potenziale:

$$E = K + U = \tfrac12 mv^2 + U$$

dove $E$, $K$, $U$ sono in joule. Se sul sistema compiono lavoro **solo forze conservative** (peso, forza elastica, gravitazione), l'energia meccanica si conserva:

$$K_i + U_i = K_f + U_f$$

### Perché

1. Il **teorema dell'energia cinetica** dice che il lavoro di tutte le forze è uguale alla variazione di energia cinetica: $W = \Delta K$.
2. Per una forza **conservativa** il lavoro dipende solo dai punti iniziale e finale ed è uguale a meno la variazione di energia potenziale: $W_c = -\Delta U$.
3. Se lavorano solo forze conservative, $\Delta K = -\Delta U$, cioè $\Delta K + \Delta U = 0$: $E$ è costante.

### Quando non vale

Se lavorano anche forze **non conservative** (attrito, resistenza dell'aria, forze dissipative degli urti), l'energia meccanica cambia, e la variazione è proprio il lavoro di queste forze:

$$W_{nc} = \Delta E = E_f - E_i$$

L'attrito fa un lavoro negativo: l'energia meccanica diminuisce e la differenza diventa calore. Forze che non compiono lavoro (la reazione normale di un piano fermo, la tensione di un filo sempre perpendicolare al moto) non disturbano la conservazione.

### Confronto tra le due leggi di conservazione

| | Quantità di moto | Energia meccanica |
|---|---|---|
| Grandezza | $\vec P = \sum m_i\vec v_i$ (vettore) | $E = K + U$ (scalare) |
| Si conserva se | risultante delle forze **esterne** nulla | lavorano solo forze **conservative** |
| Le forze interne | non la cambiano mai | possono cambiarla (se non conservative) |
| Esempio tipico | urti, esplosioni, rinculo | caduta, molle, pendolo, piani lisci |

Negli urti anelastici la quantità di moto si conserva ma l'energia meccanica no. In una caduta libera l'energia meccanica si conserva ma la quantità di moto del sasso no (il peso è una forza esterna).

::: esempio
**Blocco tra due colline (dalla dispensa).** Due colline alte $H = 850\,\mathrm m$ e $h = 750\,\mathrm m$ sono separate da una valle; il percorso tra le cime è lungo $L = 3{,}2\,\mathrm{km}$ con pendenza media $\theta = 30°$ su entrambi i lati. Un blocco parte da fermo dalla cima più alta.

(a) **Senza attrito**: l'energia meccanica si conserva.

$$mgH = mgh + \tfrac12 mv^2 \;\Rightarrow\; v = \sqrt{2g(H - h)} = \sqrt{2 \cdot 9{,}8 \cdot 100} \approx 44{,}3\,\mathrm{m/s}$$

(b) **Con attrito**, quale coefficiente $\mu$ lo fa fermare esattamente sull'altra cima? Il blocco è fermo all'inizio e alla fine, quindi la variazione di energia meccanica è solo potenziale, ed è uguale al lavoro (negativo) dell'attrito. Su un piano inclinato la forza normale è $mg\cos\theta$ e l'attrito $\mu mg\cos\theta$, lungo tutto il percorso $L$:

$$mg(h - H) = -\mu\,mg\cos\theta\,L \;\Rightarrow\; \mu = \frac{H - h}{L\cos\theta} = \frac{100}{3200 \cdot 0{,}866} \approx 0{,}036$$
:::

::: esempio
**Pista da skateboard (dalla dispensa).** Una pista ha un tratto piano lungo $L = 40\,\mathrm{cm}$ con attrito $\mu = 0{,}20$ e due estremità curve lisce. Un punto parte da fermo da un'estremità alta $h = L/2$. Dove si ferma?

- Energia iniziale (rispetto al piano): $E_0 = mgh = mgL/2$.
- Ogni attraversamento completo del tratto piano costa il lavoro dell'attrito: $\mu mgL$. Le parti curve non tolgono energia.
- Numero di attraversamenti possibili: $n = \dfrac{mgL/2}{\mu mgL} = \dfrac{1}{2\mu} = \dfrac{1}{0{,}40} = 2{,}5$.

Il punto fa due attraversamenti completi e si ferma a metà del terzo: cioè **al centro del tratto piano**, a $20\,\mathrm{cm}$ dalle due estremità.
:::

## Sistemi a massa variabile: il razzo

### L'idea

La forma $\vec F = d\vec p/dt$ ammette una possibilità nuova: la velocità di un corpo può cambiare **anche senza forze esterne**, se cambia la sua massa. È il caso del razzo, che espelle continuamente gas ad alta velocità.

In realtà il sistema "giusto" da considerare è **razzo + combustibile espulso**: la massa totale di questo sistema resta costante, e nello spazio libero (senza gravità né attriti) il sistema è isolato, quindi la sua quantità di moto si conserva. Il gas viene spinto indietro e, per il terzo principio, spinge il razzo in avanti.

### Derivazione passo per passo

Mettiamoci in un riferimento inerziale nello spazio libero.
- All'istante $t$ il razzo ha massa $m$ e velocità $v$. Quantità di moto: $mv$.
- All'istante $t + dt$ il razzo ha espulso una massa $dm$ di gas (con $dm > 0$): la sua massa è $m - dm$ e la sua velocità $v + dv$. Il gas espulso ha velocità $V$ (nel riferimento inerziale).

Conservazione della quantità di moto del sistema:

$$mv = (m - dm)(v + dv) + dm\,V$$

Sviluppo il prodotto:

$$mv = mv + m\,dv - v\,dm - dm\,dv + V\,dm$$

Semplifico $mv$ e trascuro $dm\,dv$ (prodotto di due infinitesimi, molto più piccolo degli altri termini):

$$0 = m\,dv + (V - v)\,dm$$

La quantità $u = V - v$ è la **velocità del gas rispetto al razzo** (a meno di infinitesimi, $u = V - (v + dv)$). Quindi:

$$m\,dv = -u\,dm$$

Il gas va all'indietro, quindi $u$ è negativa e $dv$ è positiva: il razzo accelera in avanti. In modulo, dividendo per $dt$:

$$m\frac{dv}{dt} = |u|\frac{dm}{dt}$$

Il primo membro è massa per accelerazione, cioè la forza che fa accelerare il razzo. Questa forza si chiama **spinta**:

$$\text{spinta} = |u|\,\frac{dm}{dt}$$

dove $|u|$ è la velocità relativa del gas (in $\mathrm{m/s}$) e $dm/dt$ il **tasso di espulsione** della massa (in $\mathrm{kg/s}$). La spinta è in newton: $\mathrm{m/s\cdot kg/s} = \mathrm{kg\cdot m/s^2}$.

### Velocità in funzione del tempo

Supponiamo che $|u|$ e il tasso di espulsione $c = dm/dt$ siano costanti. Allora la massa del razzo decresce linearmente: $m(t) = M_0 - ct$, con $M_0$ massa iniziale. Dall'equazione $m\,dv = |u|\,dm$, con $dm = c\,dt$:

$$dv = |u|\,\frac{c\,dt}{M_0 - ct}$$

Integro da $0$ a $t$ (con $\int \frac{c\,dt}{M_0 - ct} = -\ln(M_0 - ct)$):

$$v(t) - v_0 = |u|\left[-\ln(M_0 - ct)\right]_0^t = |u|\ln\frac{M_0}{M_0 - ct}$$

$$v(t) = v_0 + |u|\ln\frac{M_0}{M_0 - ct}$$

dove $v_0$ è la velocità iniziale. La velocità cresce con il logaritmo del rapporto tra massa iniziale e massa attuale. Se il razzo sale in verticale in presenza di gravità, il peso è una forza esterna che agisce in verso opposto e toglie $gt$:

$$v(t) = v_0 + |u|\ln\frac{M_0}{M_0 - ct} - gt$$

Lo stesso calcolo, con i segni invertiti, vale per sistemi in cui la massa **aumenta**, come una goccia di pioggia su cui condensa l'umidità durante la caduta.

::: esempio
**Razzo al decollo (dalla dispensa).** Massa iniziale $M_0 = 10^6\,\mathrm{kg}$, tasso di combustione $c = 1{,}2\cdot 10^3\,\mathrm{kg/s}$, gas espulsi a $|u| = 3\cdot 10^4\,\mathrm{m/s}$ rispetto al razzo. Parte da fermo in verticale. Velocità dopo $t = 100\,\mathrm s$?

1. Massa espulsa: $ct = 1{,}2\cdot 10^3 \cdot 100 = 1{,}2\cdot 10^5\,\mathrm{kg}$. Massa rimasta: $10^6 - 1{,}2\cdot 10^5 = 8{,}8\cdot 10^5\,\mathrm{kg}$.
2. Logaritmo: $\ln\dfrac{10^6}{8{,}8\cdot 10^5} = \ln 1{,}136 \approx 0{,}128$.
3. Termine di spinta: $3\cdot 10^4 \cdot 0{,}128 \approx 3835\,\mathrm{m/s}$.
4. Termine di gravità: $gt = 9{,}8 \cdot 100 = 980\,\mathrm{m/s}$.

$$v(100\,\mathrm s) = 0 + 3835 - 980 \approx 2855\,\mathrm{m/s}$$
:::

::: esame
Le domande aperte di questa lezione e come rispondere:
- **Esporre il teorema dell'impulso**: definisci l'impulso ($\vec J = \int\vec F\,dt$, $\vec F\Delta t$ se costante, unità $\mathrm{N\cdot s}$), la quantità di moto ($\vec p = m\vec v$), ricava il teorema da $\vec F\,dt = m\,d\vec v$ integrando, enuncia $\vec J = \Delta\vec p$, aggiungi che vale sempre (sistemi isolati e non) e che ne segue la forza media $\vec F_m = \Delta\vec p/\Delta t$ (airbag).
- **Conservazione dell'energia meccanica e quando si applica**: $E = K + U$ costante se lavorano solo forze conservative; derivazione da $W = \Delta K$ e $W_c = -\Delta U$; con forze non conservative $W_{nc} = \Delta E$; esempio di caduta o di molla.
- **Terzo principio**: enunciato con $\vec F_{BA} = -\vec F_{AB}$ sulla stessa retta, forze su corpi diversi, esempi (rinculo, camminare, razzo), conseguenza: le forze interne si annullano e la quantità di moto di un sistema isolato si conserva.
- **Conservazione della quantità di moto**: dimostrazione con due corpi e terzo principio, $d\vec P/dt = \vec F^{(e)}$, quindi $\vec P$ costante se le forze esterne sono nulle; vale componente per componente; esempi (calcio al sasso sul ghiaccio, urti, esplosioni, razzo).
- **Definire l'impulso e dove si usa**: forze brevi e intense (colpi, rimbalzi, urti) di cui non si conosce l'andamento ma si conosce l'effetto $\Delta\vec p$; calcolo della forza media; sistemi di protezione che allungano il tempo.
- **Definire la quantità di moto e dove si usa**: $\vec p = m\vec v$, vettore, unità; descrive lo stato dinamico ($\vec F = d\vec p/dt$); si usa negli urti, nelle esplosioni, nel rinculo, nei razzi e in tutti i sistemi isolati, dove si conserva.

Nelle chiuse: attenzione al segno delle velocità nei rimbalzi, alle conversioni (g → kg, cm/s → m/s, km/h → m/s), alle unità ($\mathrm{N\cdot s} = \mathrm{kg\cdot m/s}$, mai $\mathrm{N/s}$) e alla differenza tra $p \propto v$ e $K \propto v^2$.
:::

::: sintesi
- Impulso: $\vec J = \int_{t_1}^{t_2}\vec F\,dt$ ($= \vec F\Delta t$ se $\vec F$ costante), vettore, in $\mathrm{N\cdot s}$.
- Quantità di moto: $\vec p = m\vec v$, vettore, in $\mathrm{kg\cdot m/s} = \mathrm{N\cdot s}$; dipende dal riferimento come $K$.
- Teorema dell'impulso: $\vec J = \Delta\vec p$; vale sempre. Forza media $\vec F_m = \Delta\vec p/\Delta t$.
- Secondo principio generale: $\vec F = d\vec p/dt$.
- Sistema isolato: $\vec P$ totale costante, perché le forze interne si annullano per il terzo principio.
- Terzo principio: $\vec F_{BA} = -\vec F_{AB}$, forze su corpi diversi, stessa retta.
- Energia meccanica $E = K + U$ costante solo con forze conservative; altrimenti $W_{nc} = \Delta E$.
- Razzo: spinta $= |u|\,dm/dt$; $v = v_0 + |u|\ln\frac{M_0}{M_0 - ct}\ (-gt)$.
:::

=== 22 dispense
SLIDES: 22
# Lezione 22 — Sistemi di punti materiali e centro di massa

## Di che cosa parla questa lezione

Finora abbiamo studiato un solo punto materiale e le forze che l'ambiente esercita su di esso. Gli oggetti reali però sono fatti di molte parti: due palle che si urtano, una barca con una persona sopra, un corpo umano, una nube di gas. Questa lezione introduce i **sistemi di punti materiali**: insiemi di punti che studiamo insieme, distinguendo le forze che i punti si scambiano tra loro da quelle che arrivano dall'esterno.

Il risultato centrale è che esiste un punto speciale, il **centro di massa**, che si muove come se tutta la massa del sistema fosse concentrata lì e su di esso agissero solo le forze esterne. Vedremo poi il **riferimento del centro di massa**, il **teorema di Koenig** per l'energia cinetica, il **problema dei due corpi** con la massa ridotta e il legame tra energia cinetica e quantità di moto. Tutto questo prepara gli urti (lezione 24) e il corpo rigido (lezioni 27-28).

## Sistema di punti materiali

### Forze interne e forze esterne

Un **sistema di punti materiali** è un insieme di $N$ punti, ciascuno con la sua massa $m_i$ e posizione $\vec r_i$ ($i = 1, \dots, N$). Su ogni punto agiscono due tipi di forze:
- **forze interne**: quelle esercitate dagli altri punti del sistema. Indichiamo con $\vec F_{ij}$ la forza che il punto $j$ esercita sul punto $i$;
- **forze esterne**: quelle dovute a corpi che non fanno parte del sistema (peso, reazioni dei vincoli, attriti con l'ambiente). Indichiamo con $\vec R_i^{(e)}$ la loro risultante sul punto $i$.

L'equazione del moto del punto $i$ è quindi:

$$m_i\vec a_i = \sum_{j\neq i}\vec F_{ij} + \vec R_i^{(e)}$$

dove $m_i$ è in $\mathrm{kg}$, $\vec a_i$ in $\mathrm{m/s^2}$, le forze in $\mathrm N$.

### Le forze interne si annullano a coppie

Per il terzo principio $\vec F_{ij} = -\vec F_{ji}$: la forza di $j$ su $i$ è uguale e opposta a quella di $i$ su $j$. Quando sommiamo le forze su **tutti** i punti del sistema, ogni coppia contribuisce con $\vec F_{ij} + \vec F_{ji} = 0$. Quindi:

$$\sum_i\sum_{j\neq i}\vec F_{ij} = 0$$

La somma di tutte le forze interne è sempre zero. Attenzione: questo non vuol dire che le forze interne non abbiano effetto. Muovono i singoli punti (una persona che cammina su una barca si sposta davvero), ma non cambiano il moto d'insieme.

## Centro di massa

### Definizione

In un sistema di riferimento in cui il punto $i$ ha posizione $\vec r_i$, il **centro di massa** è il punto di coordinate:

$$\vec r_{cm} = \frac{\sum_i m_i\vec r_i}{\sum_i m_i} = \frac{\sum_i m_i\vec r_i}{M}$$

cioè, componente per componente:

$$x_{cm} = \frac{\sum_i m_i x_i}{M} \qquad y_{cm} = \frac{\sum_i m_i y_i}{M} \qquad z_{cm} = \frac{\sum_i m_i z_i}{M}$$

dove:
- $\vec r_{cm}$ = posizione del centro di massa, in $\mathrm m$;
- $m_i$, $\vec r_i$ = massa (in $\mathrm{kg}$) e posizione (in $\mathrm m$) del punto $i$;
- $M = \sum_i m_i$ = massa totale del sistema, in $\mathrm{kg}$.

È la **media pesata** delle posizioni, con le masse come pesi: i punti più pesanti "contano di più" e tirano il centro di massa verso di sé. Il centro di massa non deve per forza coincidere con un punto materiale: per un anello è nel centro vuoto.

La dispensa nota una proprietà importante: la **posizione** del centro di massa cambia da un riferimento all'altro (se sposto l'origine, cambiano tutte le coordinate), ma la **posizione dei punti rispetto al centro di massa** non cambia. Il centro di massa è un punto "fisico" del sistema, non un artificio legato agli assi.

### Due punti materiali

Mettiamo il punto A nell'origine e il punto B sull'asse $x$ a distanza $d$. Allora:

$$x_{cm} = \frac{m_A\cdot 0 + m_B\,d}{m_A + m_B} = \frac{m_B}{m_A + m_B}\,d$$

Il centro di massa sta **sulla congiungente** dei due punti. La sua distanza da A è $d_A = \frac{m_B}{m_A + m_B}d$ e la sua distanza da B è $d_B = d - d_A = \frac{m_A}{m_A + m_B}d$. Facendo il rapporto:

$$\frac{d_A}{d_B} = \frac{m_B}{m_A} \quad\Longleftrightarrow\quad m_A\,d_A = m_B\,d_B$$

Le distanze sono **inversamente proporzionali** alle masse: il centro di massa è **più vicino alla massa maggiore**. Con masse uguali è nel punto medio.

::: esempio
**B ha massa doppia di A.** Con $m_B = 2m_A$: $x_{cm} = \dfrac{2m_A}{3m_A}\,d = \dfrac23 d$. Il centro di massa è a $\tfrac23 d$ da A, cioè a $\tfrac13 d$ da **B**: sta a un terzo della distanza totale dal punto più pesante. Controllo: $m_A\cdot\tfrac23 d = 2m_A\cdot\tfrac13 d$. ✓
:::

### Centro di massa e baricentro

Il **baricentro** è il punto in cui si può considerare applicato tutto il peso del sistema (lo vedremo in dettaglio nella lezione 27). In un campo di gravità **uniforme** (stesso $\vec g$ in tutti i punti, come vicino alla superficie terrestre per oggetti non enormi) il baricentro **coincide** con il centro di massa. Per questo nel linguaggio comune i due termini si usano come sinonimi.

### Due casi reali chiesti nel paniere

- **Il centro di massa dell'atmosfera.** L'aria è molto più densa in basso: la densità si dimezza circa ogni 5-6 km di quota e la metà della massa dell'atmosfera sta sotto i 5-6 km. Anche se l'atmosfera si estende per centinaia di chilometri, quasi tutta la sua massa è nei primi chilometri. La quota media pesata con la massa, cioè la quota del centro di massa, è quindi **in prossimità della superficie terrestre**, non a metà dell'atmosfera e nemmeno a decine di chilometri.
- **Il baricentro del corpo umano.** Nella postura eretta sta circa all'altezza del bacino. Durante la **camminata** c'è sempre almeno un piede a terra e le gambe restano quasi tese: il baricentro sale e scende solo di pochi centimetri a ogni passo. Nella **corsa** c'è una fase di volo, in cui nessun piede tocca terra, e il baricentro compie oscillazioni verticali molto più ampie. La variazione di quota del baricentro è quindi **minima nella camminata**.

## Grandezze globali del sistema

Alcune grandezze del sistema si definiscono sommando i contributi dei singoli punti.

### Quantità di moto totale

$$\vec P = \sum_i\vec p_i = \sum_i m_i\vec v_i$$

Deriviamo rispetto al tempo la definizione del centro di massa, $M\vec r_{cm} = \sum_i m_i\vec r_i$ (le masse sono costanti):

$$M\frac{d\vec r_{cm}}{dt} = \sum_i m_i\frac{d\vec r_i}{dt} \quad\Rightarrow\quad M\vec v_{cm} = \sum_i m_i\vec v_i = \vec P$$

Quindi:

$$\vec P = M\vec v_{cm} \qquad \vec v_{cm} = \frac{\sum_i m_i\vec v_i}{M}$$

La quantità di moto totale è quella di un unico punto di massa $M$ che si muove con la velocità del centro di massa. La velocità del centro di massa è la media delle velocità pesata con le masse (e le velocità vanno sommate con il loro segno, o come vettori).

### Energia cinetica totale

$$K_{tot} = \sum_i\tfrac12 m_i v_i^2$$

A differenza della quantità di moto, l'energia cinetica totale **non** è in generale uguale a $\tfrac12 Mv_{cm}^2$: c'è anche l'energia del moto dei punti attorno al centro di massa (teorema di Koenig, più avanti).

::: esempio
**Centro di massa fermo.** A, di $6\,\mathrm{kg}$, va a $3\,\mathrm{m/s}$; B, di $2\,\mathrm{kg}$, va a $9\,\mathrm{m/s}$ in verso opposto. Positivo il verso di A:

$$v_{cm} = \frac{6\cdot 3 + 2\cdot(-9)}{6 + 2} = \frac{18 - 18}{8} = 0$$

Le due quantità di moto sono uguali e opposte ($18\,\mathrm{kg\cdot m/s}$ ciascuna): la quantità di moto totale è zero e il centro di massa è **fermo**. Errore tipico: fare la media semplice delle velocità, $(3 - 9)/2 = -3$, senza pesarle con le masse.
:::

## Teorema del moto del centro di massa

### Derivazione

Deriviamo ancora una volta: $M\vec a_{cm} = \sum_i m_i\vec a_i$. Sostituisco l'equazione del moto di ogni punto:

$$M\vec a_{cm} = \sum_i\Big(\sum_{j\neq i}\vec F_{ij} + \vec R_i^{(e)}\Big) = \underbrace{\sum_i\sum_{j\neq i}\vec F_{ij}}_{=\,0\ \text{(terzo principio)}} + \sum_i\vec R_i^{(e)}$$

Chiamando $\vec R^{(e)} = \sum_i\vec R_i^{(e)}$ la risultante delle sole forze esterne:

$$M\vec a_{cm} = \vec R^{(e)} \qquad\Longleftrightarrow\qquad \frac{d\vec P}{dt} = \vec R^{(e)}$$

dove $\vec a_{cm}$ è l'accelerazione del centro di massa ($\mathrm{m/s^2}$) e $\vec R^{(e)}$ la risultante delle forze esterne ($\mathrm N$).

### Enunciato

**Teorema del moto del centro di massa**: la variazione della quantità di moto totale di un sistema è dovuta solo alla risultante delle forze **esterne**; il centro di massa si muove come un punto materiale che ha la massa totale del sistema e su cui agisce la risultante delle forze esterne.

Conseguenze:
- Le forze interne muovono i singoli pezzi, ma **non** il centro di massa. Una granata che esplode in volo: i frammenti vanno in tutte le direzioni, ma il centro di massa continua sulla stessa parabola (finché nessun frammento tocca terra).
- Se $\vec R^{(e)} = 0$ (sistema isolato), $\vec P$ è costante e il centro di massa si muove di moto **rettilineo uniforme** o resta fermo: è la conservazione della quantità di moto vista dal centro di massa.
- Vale componente per componente: se le forze esterne orizzontali sono nulle, la coordinata orizzontale del centro di massa si muove a velocità costante.

::: esempio
**Macchina di Atwood (dalla dispensa).** Due blocchi $m_1 = 2\,\mathrm{kg}$ e $m_2 = 1\,\mathrm{kg}$ sono appesi ai capi di un filo che passa su una puleggia fissa al soffitto, tenuti fermi alla stessa altezza e poi lasciati. Come si muove il centro di massa?

Non ci sono forze esterne orizzontali: il centro di massa si muove in verticale. Dalla macchina di Atwood sappiamo che il blocco più pesante scende con accelerazione

$$a = \frac{m_1 - m_2}{m_1 + m_2}\,g = \frac{1}{3}\cdot 9{,}8 \approx 3{,}27\,\mathrm{m/s^2}$$

e il più leggero sale con la stessa accelerazione. Asse verso l'alto: $a_1 = -a$, $a_2 = +a$.

$$a_{cm} = \frac{m_1a_1 + m_2a_2}{m_1 + m_2} = \frac{(m_2 - m_1)\,a}{m_1 + m_2} = -\frac{(m_1 - m_2)^2}{(m_1 + m_2)^2}\,g = -\frac{1}{9}\cdot 9{,}8 \approx -1{,}1\,\mathrm{m/s^2}$$

Il centro di massa accelera **verso il basso** a circa $1{,}1\,\mathrm{m/s^2}$.

Verifica con il teorema del moto del centro di massa. Forze esterne sul sistema dei due blocchi: i due pesi verso il basso e le due tensioni del filo, che tirano verso l'alto (il filo è attaccato alla puleggia, esterna). La tensione della macchina di Atwood è $T = \dfrac{2m_1m_2}{m_1 + m_2}g = \dfrac{2\cdot 2\cdot 1}{3}\cdot 9{,}8 \approx 13{,}07\,\mathrm N$. Allora:

$$a_{cm} = \frac{2T - (m_1 + m_2)g}{m_1 + m_2} = \frac{26{,}13 - 29{,}4}{3} \approx -1{,}1\,\mathrm{m/s^2}$$

Stesso risultato.
:::

::: esempio
**Uomo che cammina su una barca (dalla dispensa).** Una barca di massa $M = 150\,\mathrm{kg}$ e lunghezza $L = 5\,\mathrm m$ è ferma, non ancorata, con l'estremità A a contatto con il molo. Un uomo di $m = 75\,\mathrm{kg}$ sta all'estremità opposta B e cammina fino ad A. Trascurando l'attrito dell'acqua, di quanto si stacca A dal molo?

1. Riferimento solidale al molo, origine nel punto di contatto iniziale, asse verso la barca. La massa della barca si considera concentrata nel suo punto medio.
2. Centro di massa iniziale (uomo in B, cioè a $x = L$):
$$x_{cm,0} = \frac{M\frac L2 + mL}{M + m}$$
3. Non ci sono forze esterne orizzontali e tutto parte da fermo: il centro di massa **resta fermo**.
4. Alla fine l'estremità A si è spostata in $x_A$ (incognita) e l'uomo è proprio lì; il centro della barca è in $x_A + \frac L2$:
$$x_{cm,1} = \frac{M\left(x_A + \frac L2\right) + m\,x_A}{M + m}$$
5. Impongo $x_{cm,1} = x_{cm,0}$ e semplifico il denominatore e il termine $M\frac L2$:
$$(M + m)\,x_A = mL \quad\Rightarrow\quad x_A = \frac{mL}{M + m} = \frac{75\cdot 5}{225} \approx 1{,}67\,\mathrm m$$

La barca arretra di $1{,}67\,\mathrm m$ mentre l'uomo avanza: l'uomo si sposta rispetto al molo di $5 - 1{,}67 = 3{,}33\,\mathrm m$, e infatti $75\cdot 3{,}33 = 150\cdot 1{,}67$.
:::

::: esempio
**Il gatto e le due slitte (dalla dispensa).** Due slitte identiche di massa $M = 22{,}7\,\mathrm{kg}$ sono ferme e allineate sul ghiaccio senza attrito. Un gatto di $m = 3{,}63\,\mathrm{kg}$ salta dalla slitta 1 alla slitta 2 e subito dopo torna sulla 1. Ogni salto avviene a $v_C = 3{,}05\,\mathrm{m/s}$ rispetto al ghiaccio. Velocità finali delle slitte? (Positivo il verso del primo salto.)

**Primo salto.**
- Gatto + slitta 1, tutto fermo prima: $0 = m v_C + M v_{S1,1} \Rightarrow v_{S1,1} = -\dfrac{m v_C}{M}$.
- Gatto + slitta 2 (il gatto atterra e resta sopra): $m v_C = (m + M)\,v_{S2,1}$.

**Secondo salto** (verso la slitta 1, quindi con velocità $-v_C$).
- Gatto + slitta 2: prima $(m + M)v_{S2,1} = m v_C$; dopo il gatto ha $-v_C$ e la slitta $v_{S2,2}$:
$$m v_C = -m v_C + M v_{S2,2} \Rightarrow v_{S2,2} = \frac{2mv_C}{M} = \frac{2\cdot 3{,}63\cdot 3{,}05}{22{,}7} \approx 0{,}975\,\mathrm{m/s}$$
- Gatto + slitta 1 (il gatto atterra e resta sopra): prima $-mv_C + Mv_{S1,1} = -mv_C - mv_C$; dopo $(m + M)v_{S1,2}$:
$$v_{S1,2} = -\frac{2mv_C}{m + M} = -\frac{2\cdot 3{,}63\cdot 3{,}05}{26{,}33} \approx -0{,}841\,\mathrm{m/s}$$

Controllo: la quantità di moto totale finale è $(m + M)(-0{,}841) + M(0{,}975) \approx -22{,}1 + 22{,}1 = 0$, come all'inizio.
:::

## Il riferimento del centro di massa

### Definizione

Sia $R(Oxyz)$ un riferimento inerziale in cui il centro di massa occupa nel tempo la posizione $C(t)$. Il **riferimento del centro di massa** $R_{cm}(Cx'y'z')$ ha:
- l'**origine nel centro di massa** $C$;
- gli **assi paralleli** a quelli di $R$ (non ruota).

È quindi legato a $R$ da una pura traslazione. **Non è in generale inerziale**: lo è solo se il centro di massa si muove a velocità costante, cioè se la risultante delle forze esterne è nulla.

### Relazioni tra i due riferimenti

Indicando con l'apice le grandezze misurate nel riferimento del centro di massa:

$$\vec r_i = \vec r_i\,' + \vec r_{cm} \qquad \vec v_i = \vec v_i\,' + \vec v_{cm}$$

(la seconda segue dalla prima derivando, perché non c'è rotazione relativa).

### La quantità di moto totale è nulla

$$\vec P\,' = \sum_i m_i\vec v_i\,' = \sum_i m_i(\vec v_i - \vec v_{cm}) = \sum_i m_i\vec v_i - M\vec v_{cm} = \vec P - \vec P = 0$$

Nel riferimento del centro di massa la quantità di moto totale è **sempre zero**. È intuitivo: la quantità di moto totale è quella di un punto posto nel centro di massa, e in questo riferimento il centro di massa è per costruzione sempre fermo. Allo stesso modo $\sum_i m_i\vec r_i\,' = 0$ (il centro di massa è nell'origine).

## Teorema di Koenig

### Dimostrazione

Calcoliamo l'energia cinetica nel riferimento inerziale scrivendo ogni velocità come $\vec v_i = \vec v_i\,' + \vec v_{cm}$:

$$K = \sum_i\tfrac12 m_i v_i^2 = \sum_i\tfrac12 m_i(\vec v_i\,' + \vec v_{cm})\cdot(\vec v_i\,' + \vec v_{cm})$$

Sviluppo il prodotto scalare ($(\vec a + \vec b)^2 = a^2 + b^2 + 2\vec a\cdot\vec b$):

$$K = \sum_i\tfrac12 m_iv_i'^2 + \tfrac12\Big(\sum_i m_i\Big)v_{cm}^2 + \vec v_{cm}\cdot\sum_i m_i\vec v_i\,'$$

L'ultimo termine contiene $\sum_i m_i\vec v_i\,' = \vec P\,' = 0$: è nullo. Restano:

$$K = K' + \tfrac12 Mv_{cm}^2$$

dove:
- $K$ = energia cinetica del sistema nel riferimento inerziale, in $\mathrm J$;
- $K' = \sum_i\tfrac12 m_iv_i'^2$ = energia cinetica dei punti misurata nel riferimento del centro di massa, in $\mathrm J$;
- $\tfrac12 Mv_{cm}^2$ = energia cinetica di un punto di massa $M$ che si muove con il centro di massa, in $\mathrm J$.

### Enunciato

**Teorema di Koenig**: l'energia cinetica di un sistema di punti in un riferimento inerziale è la somma dell'energia cinetica che il sistema avrebbe se tutta la massa fosse concentrata nel centro di massa e si muovesse con esso, più l'energia cinetica dei punti nel loro moto **relativo** al centro di massa.

Significato: il moto di un sistema si separa in "moto d'insieme" (traslazione del centro di massa) e "moto interno" (rispetto al centro di massa). Per un corpo rigido che ruota e trasla, come una ruota che rotola, il moto interno è una rotazione e $K' = \tfrac12 I_{cm}\omega^2$ (lezioni 28-29): $K = \tfrac12 Mv_{cm}^2 + \tfrac12 I_{cm}\omega^2$.

Conseguenza: $K \geq \tfrac12 Mv_{cm}^2$. L'energia cinetica minima compatibile con una data quantità di moto totale è quella in cui tutti i punti si muovono insieme ($K' = 0$). Per questo negli urti completamente anelastici (lezione 24) si perde tutta e sola $K'$.

::: esempio
**Due blocchi visti dal centro di massa (dalla dispensa).** $m_1 = 1\,\mathrm{kg}$ a $v_1 = 1\,\mathrm{m/s}$ e $m_2 = 2\,\mathrm{kg}$ a $v_2 = 2\,\mathrm{m/s}$, stesso verso, su un piano senza attrito.

1. Velocità del centro di massa: $v_{cm} = \dfrac{1\cdot 1 + 2\cdot 2}{3} = \dfrac53 \approx 1{,}67\,\mathrm{m/s}$ (costante: nessuna forza esterna).
2. Nel riferimento del centro di massa la quantità di moto totale è **zero** per definizione.
3. Velocità relative: $v_1' = 1 - 1{,}67 = -0{,}67\,\mathrm{m/s}$, $v_2' = 2 - 1{,}67 = +0{,}33\,\mathrm{m/s}$. Controllo: $1\cdot(-0{,}67) + 2\cdot 0{,}33 = 0$. ✓
4. $K' = \tfrac12\cdot 1\cdot 0{,}444 + \tfrac12\cdot 2\cdot 0{,}111 = 0{,}222 + 0{,}111 \approx 0{,}33\,\mathrm J$.

Verifica di Koenig: $K = \tfrac12\cdot 1\cdot 1 + \tfrac12\cdot 2\cdot 4 = 4{,}5\,\mathrm J$; $\tfrac12 Mv_{cm}^2 = \tfrac12\cdot 3\cdot 2{,}78 = 4{,}17\,\mathrm J$; e $4{,}17 + 0{,}33 = 4{,}5\,\mathrm J$. ✓
:::

## Energia cinetica e quantità di moto a confronto

Per un singolo corpo, eliminando la velocità tra $p = mv$ e $K = \tfrac12 mv^2$: da $v = p/m$,

$$K = \tfrac12 m\left(\frac pm\right)^2 = \frac{p^2}{2m} \qquad\Longleftrightarrow\qquad p = \sqrt{2mK}$$

dove $K$ è in $\mathrm J$, $p$ in $\mathrm{kg\cdot m/s}$, $m$ in $\mathrm{kg}$. Due casi frequenti nelle domande:
- **Stessa quantità di moto**: $K = p^2/2m$ con $m$ al denominatore, quindi ha **più energia cinetica il corpo più leggero** (che è anche il più veloce, perché $v = p/m$).
- **Stessa energia cinetica**: $p = \sqrt{2mK}$ cresce come $\sqrt m$. Se A ha massa 9 volte quella di B, $p_A/p_B = \sqrt 9 = 3$: la quantità di moto di A è **tre volte** quella di B (non nove).

::: esempio
**Forza media su una palla da baseball.** Una palla di $200\,\mathrm g$ arriva a $150\,\mathrm{km/h}$, viene colpita dalla mazza e torna indietro con la stessa velocità; il contatto dura $0{,}100\,\mathrm s$.

1. Conversioni: $150\,\mathrm{km/h} = 150/3{,}6 \approx 41{,}7\,\mathrm{m/s}$; $200\,\mathrm g = 0{,}2\,\mathrm{kg}$.
2. $v_i = +41{,}7$, $v_f = -41{,}7\,\mathrm{m/s}$: $|\Delta p| = 0{,}2\cdot 2\cdot 41{,}7 \approx 16{,}7\,\mathrm{kg\cdot m/s}$.
3. $F_m = |\Delta p|/\Delta t = 16{,}7/0{,}100 \approx 167\,\mathrm N$.

Senza convertire i km/h si otterrebbe $600\,\mathrm N$; pensando che "la velocità è la stessa quindi non cambia nulla" si otterrebbe $0\,\mathrm N$: entrambi errori.
:::

## Sistema di due punti e massa ridotta

### Il problema dei due corpi

È il caso più semplice: due corpi che **non subiscono forze esterne** e interagiscono solo tra loro, con forze uguali e opposte (Terra e Luna, due atomi di una molecola, due stelle doppie). Poiché le forze esterne sono nulle, il riferimento del centro di massa è **inerziale** e conviene studiare il moto lì.

Con l'origine nel centro di massa, $\sum m_i\vec r_i = 0$ diventa:

$$m_1\vec r_1 = -m_2\vec r_2$$

I due corpi stanno sempre da parti opposte del centro di massa, a distanze inversamente proporzionali alle masse.

### Derivazione della massa ridotta

Per simmetria le forze sono **centrali**: dirette lungo la congiungente e dipendenti solo dalla distanza. Sia $\vec F$ la forza su 1 dovuta a 2; per il terzo principio quella su 2 è $-\vec F$:

$$m_1\frac{d^2\vec r_1}{dt^2} = \vec F \qquad m_2\frac{d^2\vec r_2}{dt^2} = -\vec F$$

Introduco la posizione **relativa** $\vec r = \vec r_1 - \vec r_2$ (posizione di 1 vista da 2). Divido ciascuna equazione per la sua massa e sottraggo:

$$\frac{d^2\vec r}{dt^2} = \frac{\vec F}{m_1} + \frac{\vec F}{m_2} = \vec F\left(\frac{1}{m_1} + \frac{1}{m_2}\right) = \vec F\,\frac{m_1 + m_2}{m_1m_2}$$

Definendo la **massa ridotta**

$$\mu = \frac{m_1m_2}{m_1 + m_2}$$

si ottiene:

$$\mu\,\frac{d^2\vec r}{dt^2} = \vec F$$

dove $\mu$, $m_1$, $m_2$ sono in $\mathrm{kg}$.

### Significato

Due corpi che si muovono solo per effetto della loro interazione reciproca si possono studiare come se **uno fosse fermo** e l'altro si muovesse attorno a lui con una massa "equivalente" pari alla massa ridotta. Il problema a due corpi diventa un problema a un corpo.

- $\mu$ è sempre **minore** della massa più piccola.
- Se una massa è molto più grande ($m_2 \gg m_1$), $\mu \approx m_1$: il corpo grande è praticamente fermo (il Sole per un pianeta, il nucleo per l'elettrone).
- Con masse uguali $\mu = m/2$.

## Il braccio umano come leva

Questo argomento non è nella dispensa ma è chiesto in una domanda aperta. Si basa sulle leve e sui momenti delle forze (lezione 23).

Una **leva** è un'asta rigida che può ruotare attorno a un punto fisso, il **fulcro**; su di essa agiscono la **potenza** (la forza motrice) e la **resistenza** (il carico). È in equilibrio quando i momenti rispetto al fulcro si bilanciano: $P\,b_P = R\,b_R$.

Nel braccio che regge un peso con il gomito piegato:
- il **fulcro** è il **gomito** (l'articolazione);
- la **potenza** è la forza del **bicipite**, che si inserisce sull'avambraccio a pochi centimetri dal gomito;
- la **resistenza** è il **peso nella mano** (più il peso dell'avambraccio), a 30-35 cm dal gomito.

La potenza sta **tra** il fulcro e la resistenza: è una **leva di terzo genere**. Il braccio della potenza è molto più corto di quello della resistenza, quindi la leva è **svantaggiosa**: il muscolo deve esercitare una forza molto più grande del peso sollevato. In cambio la leva è vantaggiosa in **velocità e ampiezza**: un piccolo accorciamento del muscolo produce un grande spostamento della mano, rapido. Inoltre il gomito (fulcro) subisce una forza notevole, pari circa alla differenza tra la forza muscolare e il peso.

::: esempio
Il bicipite si inserisce a $4\,\mathrm{cm}$ dal gomito e la mano regge $5\,\mathrm{kg}$ a $35\,\mathrm{cm}$ dal gomito (avambraccio orizzontale, peso dell'avambraccio trascurato). Equilibrio dei momenti rispetto al gomito:

$$F_{muscolo}\cdot 0{,}04 = 5\cdot 9{,}8\cdot 0{,}35 \Rightarrow F_{muscolo} = \frac{17{,}15}{0{,}04} \approx 429\,\mathrm N$$

Il muscolo esercita una forza quasi 9 volte il peso sollevato ($49\,\mathrm N$). La reazione del gomito, dall'equilibrio delle forze verticali, vale circa $429 - 49 = 380\,\mathrm N$ verso il basso.
:::

::: esame
Le domande aperte di questa lezione:
- **Cos'è il centro di massa?** Definizione $\vec r_{cm} = \sum m_i\vec r_i/M$ (media pesata delle posizioni), caso di due punti ($m_Ad_A = m_Bd_B$, più vicino alla massa maggiore), $\vec P = M\vec v_{cm}$, teorema del moto del centro di massa $M\vec a_{cm} = \vec R^{(e)}$ (le forze interne non lo muovono), coincidenza con il baricentro in gravità uniforme, esempio della barca o della granata.
- **Il braccio umano come leva**: fulcro nel gomito, potenza (bicipite) tra fulcro e resistenza (peso nella mano): leva di terzo genere, svantaggiosa in forza ($b_P < b_R$, il muscolo fa una forza molto maggiore del peso), vantaggiosa in velocità e ampiezza di movimento; un esempio numerico.
- **Teorema di Koenig**: riferimento del centro di massa, $\vec v_i = \vec v_i\,' + \vec v_{cm}$, sviluppo di $K$, termine misto nullo perché $\vec P\,' = 0$, enunciato $K = K' + \tfrac12 Mv_{cm}^2$, esempio del corpo che rotola.

Nelle chiuse: posizione del centro di massa di due punti, velocità del centro di massa con i segni, confronti tra $K$ e $p$ con $K = p^2/2m$, baricentro dell'atmosfera e del corpo umano.
:::

::: sintesi
- Sistema di punti: $m_i\vec a_i = \sum_j\vec F_{ij} + \vec R_i^{(e)}$; le forze interne sommate danno zero (terzo principio).
- Centro di massa: $\vec r_{cm} = \sum m_i\vec r_i/M$; per due punti $m_Ad_A = m_Bd_B$, più vicino alla massa maggiore.
- $\vec P = M\vec v_{cm}$; $M\vec a_{cm} = \vec R^{(e)}$ ($d\vec P/dt = \vec R^{(e)}$): le forze interne non muovono il centro di massa.
- Riferimento del centro di massa: origine in C, assi paralleli; $\vec P\,' = 0$; inerziale solo se $\vec R^{(e)} = 0$.
- Koenig: $K = K' + \tfrac12 Mv_{cm}^2$.
- $K = p^2/2m$: a pari $p$ più energia il più leggero; a pari $K$, $p \propto\sqrt m$.
- Due corpi isolati: $\mu\,\ddot{\vec r} = \vec F$ con $\mu = m_1m_2/(m_1 + m_2)$.
- Baricentro umano: oscillazione minima nella camminata; centro di massa dell'atmosfera vicino alla superficie.
- Braccio: leva di terzo genere, svantaggiosa in forza.
:::

=== 23 dispense
SLIDES: 23, 26, 27
# Lezione 23 — Momento di una forza, leve, momento d'inerzia e momento angolare

## Di che cosa parla questa lezione

La quantità di moto e la forza descrivono il moto di **traslazione**. Per descrivere le **rotazioni** servono le loro "versioni rotazionali": il **momento di una forza**, che misura quanto una forza fa girare un corpo attorno a un punto, e il **momento angolare**, che misura quanto un corpo sta ruotando. Il legame tra i due (il **teorema del momento angolare**) è l'analogo rotazionale di $\vec F = d\vec p/dt$.

In questa lezione vediamo: il momento di un vettore e di una forza, le **leve** e l'equilibrio dei momenti (molto presenti nelle domande), l'equilibrio di un corpo esteso, il **momento d'inerzia** e la legge $M = I\alpha$, il momento angolare di un punto e di un sistema, la sua conservazione e le **equazioni cardinali**.

## Momento di un vettore

### Definizione

Sia $\vec v$ un vettore qualsiasi applicato in un punto P, e sia O un punto fisso detto **polo**. Il **momento** di $\vec v$ rispetto a O è il vettore:

$$\vec M_O = \overrightarrow{OP}\times\vec v$$

Per le proprietà del prodotto vettoriale:
- $\vec M_O$ è **perpendicolare** al piano che contiene $\overrightarrow{OP}$ e $\vec v$;
- il suo verso è dato dalla **regola della mano destra** (dita da $\overrightarrow{OP}$ verso $\vec v$, il pollice indica $\vec M_O$);
- il modulo è $|\vec M_O| = |\overrightarrow{OP}|\,v\sin\theta$, con $\theta$ angolo tra i due vettori.

### Il braccio

Scomponiamo $\overrightarrow{OP}$ in due parti: $\overrightarrow{OH}$ perpendicolare a $\vec v$ (H è il piede della perpendicolare da O alla retta di $\vec v$) e $\overrightarrow{HP}$ parallelo a $\vec v$. Poiché il prodotto vettoriale di vettori paralleli è nullo, $\overrightarrow{HP}\times\vec v = 0$ e:

$$\vec M_O = \overrightarrow{OP}\times\vec v = \overrightarrow{OH}\times\vec v \qquad |\vec M_O| = |\overrightarrow{OP}|\,v\sin\theta = h\,v$$

La distanza $h = |\overrightarrow{OH}|$ tra il polo e la **retta di applicazione** del vettore si chiama **braccio**. Conseguenza: il momento **non cambia** se il vettore viene fatto scorrere lungo la propria retta d'azione.

### Cambio di polo

Rispetto a un altro polo O' il momento è in generale diverso. Scrivendo $\overrightarrow{OP} = \overrightarrow{OO'} + \overrightarrow{O'P}$:

$$\vec M_O = \overrightarrow{OO'}\times\vec v + \overrightarrow{O'P}\times\vec v = \overrightarrow{OO'}\times\vec v + \vec M_{O'}$$

I due momenti coincidono solo se $\overrightarrow{OO'}$ è parallelo a $\vec v$ (cioè se O' sta sulla retta per O parallela a $\vec v$). Quando si parla di momento bisogna quindi **sempre dire rispetto a quale polo**.

## Momento di una forza

### Definizione

Applicando la definizione a una forza $\vec F$ applicata nel punto di posizione $\vec r$ rispetto al polo O:

$$\vec M = \vec r\times\vec F \qquad M = F\,r\sin\theta = F\,b$$

dove:
- $\vec M$ = momento della forza rispetto a O, in $\mathrm{N\cdot m}$;
- $\vec r$ = vettore dal polo al punto di applicazione, in $\mathrm m$;
- $\vec F$ = forza, in $\mathrm N$;
- $\theta$ = angolo tra $\vec r$ e $\vec F$;
- $b = r\sin\theta$ = **braccio** della forza: distanza del polo dalla retta d'azione, in $\mathrm m$.

### Significato fisico

Il momento misura la capacità di una forza di **far ruotare** un corpo attorno al polo. Non conta solo quanto è grande la forza: conta anche **dove** e **come** la applichi.
- Per aprire una porta spingi lontano dai cardini (braccio grande) e perpendicolarmente alla porta ($\sin\theta = 1$).
- Se spingi vicino ai cardini serve una forza molto più grande.
- Se spingi verso i cardini (forza diretta lungo $\vec r$, $\theta = 0$) il momento è nullo e la porta non gira, per quanto spingi forte.

Nei problemi piani il vettore $\vec M$ è perpendicolare al piano del disegno: basta dire se fa ruotare in senso **antiorario** (per convenzione positivo, $\vec M$ uscente dal foglio) o **orario** (negativo, entrante). Più forze: si sommano i momenti con il loro segno; il corpo inizia a ruotare nel verso del momento risultante.

### Coppia di forze

Due forze uguali in modulo, opposte in verso e **non sulla stessa retta** formano una **coppia**. La risultante è nulla, ma il momento no: vale $M = F\,d$, con $d$ distanza tra le due rette d'azione (braccio della coppia), ed è lo stesso rispetto a qualsiasi polo. Esempio: le due mani sul volante.

::: esempio
**Porta.** Una forza di $3\,\mathrm N$ perpendicolare alla porta a $1\,\mathrm m$ dall'asse di rotazione: $M = F\,r\sin 90° = 3\cdot 1\cdot 1 = 3\,\mathrm{N\cdot m}$.
:::

::: esempio
**Porta con due forze.** $50\,\mathrm N$ a $20\,\mathrm{cm}$ dai cardini in senso orario e $25\,\mathrm N$ a $1\,\mathrm m$ in senso antiorario.
- Momento orario: $50\cdot 0{,}20 = 10\,\mathrm{N\cdot m}$.
- Momento antiorario: $25\cdot 1 = 25\,\mathrm{N\cdot m}$.

Prevale l'antiorario: la porta ruota in senso **antiorario**, anche se la forza più grande è quella oraria. La massa della porta non serve per stabilire il verso.
:::

::: esempio
**Pedale della bicicletta (dalla dispensa).** Pedivella lunga $d = 0{,}15\,\mathrm m$, forza del piede verticale verso il basso $F = 100\,\mathrm N$. Il momento rispetto all'asse dei pedali è $M = F\,d\sin\theta$, con $\theta$ angolo tra pedivella e verticale (cioè tra $\vec r$ e $\vec F$):
- $\theta = 30°$: $M = 100\cdot 0{,}15\cdot 0{,}5 = 7{,}5\,\mathrm{N\cdot m}$;
- $\theta = 90°$ (pedivella orizzontale): $M = 15\,\mathrm{N\cdot m}$, il massimo;
- $\theta = 180°$ (pedivella verticale verso il basso): $M = 0$, il "punto morto".

Il vettore momento è perpendicolare al piano di rotazione dei pedali.
:::

::: attenzione
L'unità del momento è il **newton per metro**, $\mathrm{N\cdot m}$: una forza moltiplicata per una distanza. Non $\mathrm{N/m}$ (costante elastica), né $\mathrm{N/m^2}$ (pressione), né $\mathrm{N\cdot m^2}$. Il $\mathrm{N\cdot m}$ del momento ha le stesse dimensioni del joule, ma non è un'energia: per il momento si usa sempre $\mathrm{N\cdot m}$.
:::

## Le leve

### Definizione

Una **leva** è un corpo rigido (in genere un'asta) che può ruotare attorno a un punto fisso, il **fulcro**. Su di essa agiscono due forze:
- la **potenza** $P$: la forza che applichiamo (motrice);
- la **resistenza** $R$: il peso o la forza da vincere.

I **bracci** $b_P$ e $b_R$ sono le distanze del fulcro dalle rette d'azione delle due forze (se le forze sono perpendicolari alla leva, sono semplicemente le distanze dal fulcro dei punti di applicazione).

### Condizione di equilibrio

La leva è ferma quando il momento totale rispetto al fulcro è nullo, cioè quando i momenti delle due forze, di verso opposto, sono uguali:

$$P\,b_P = R\,b_R \qquad\Longleftrightarrow\qquad \frac{P}{R} = \frac{b_R}{b_P}$$

dove $P$ e $R$ sono in $\mathrm N$ e i bracci in $\mathrm m$ (o in qualunque unità di lunghezza, purché la stessa da entrambe le parti, perché compaiono come rapporto). Le forze sono **inversamente proporzionali** ai bracci: più lungo è il braccio, meno forza serve.

Se il problema dà **masse** invece di forze, i pesi sono $m_1g$ e $m_2g$ e il fattore $g$ si semplifica: $m_1b_1 = m_2b_2$.

Oltre all'equilibrio dei momenti c'è quello delle forze: il **fulcro** deve reggere la somma delle forze che agiscono sulla leva (con potenza e resistenza parallele e concordi, $N = P + R$, più il peso della leva se non è trascurabile).

### Vantaggio e classificazione

La leva è **vantaggiosa** se $b_P > b_R$ (serve una potenza minore della resistenza), **svantaggiosa** se $b_P < b_R$, **indifferente** se $b_P = b_R$. Una leva svantaggiosa in forza è però vantaggiosa in spostamento: il punto della resistenza si muove di più e più velocemente.

| Genere | Cosa sta in mezzo | Vantaggiosa? | Esempi |
|---|---|---|---|
| 1° | il **fulcro** (tra potenza e resistenza) | dipende dai bracci | altalena, bilancia a bracci, forbici, tenaglie, piede di porco, remo |
| 2° | la **resistenza** (tra fulcro e potenza) | **sempre** ($b_P > b_R$) | carriola, schiaccianoci, apribottiglie |
| 3° | la **potenza** (tra fulcro e resistenza) | **mai** ($b_P < b_R$) | pinzette, canna da pesca, avambraccio |

::: esempio
**Altalena.** Un bambino di $10\,\mathrm{kg}$ sta a $3\,\mathrm m$ dal fulcro; dove deve mettersi un bambino di $15\,\mathrm{kg}$?

$$10\cdot 3 = 15\cdot d \Rightarrow d = \frac{30}{15} = 2\,\mathrm m$$

Il più pesante sta più vicino al fulcro.
:::

::: esempio
**Forza sul fulcro.** Due bambini di $10\,\mathrm{kg}$ ciascuno in equilibrio su un'altalena di massa trascurabile. Equilibrio delle forze verticali: il fulcro regge entrambi i pesi, $N = 2\cdot 10\cdot 9{,}8 = 196\,\mathrm N \approx 200\,\mathrm N$. Errore tipico: dare $20$ (masse sommate senza $g$).
:::

::: esempio
**Trave da 90 cm.** Una trave di $90\,\mathrm{cm}$ poggia su un fulcro a $30\,\mathrm{cm}$ dall'estremo su cui grava un peso di $60\,\mathrm{kg}$. Che forza va applicata all'altro estremo?

1. Peso: $R = 60\cdot 9{,}8 = 588\,\mathrm N$, braccio $b_R = 0{,}30\,\mathrm m$.
2. Braccio della forza: $b_P = 0{,}90 - 0{,}30 = 0{,}60\,\mathrm m$.
3. $P = R\,\dfrac{b_R}{b_P} = 588\cdot\dfrac{0{,}30}{0{,}60} = 294\,\mathrm N$.

È una **forza**, in newton (non "294 kg").
:::

::: esempio
**Trave da 120 cm, si chiede una massa.** Fulcro a $40\,\mathrm{cm}$ dall'estremo con $30\,\mathrm{kg}$. Bracci $40\,\mathrm{cm}$ e $120 - 40 = 80\,\mathrm{cm}$:

$$30\cdot 40 = m\cdot 80 \Rightarrow m = 15\,\mathrm{kg}$$

$g$ si semplifica; i dati sono sufficienti.
:::

::: esempio
**Sbarra con peso a 1 m e massa a 3 m.** $80\cdot 1 = m\cdot 3 \Rightarrow m = 80/3 \approx 26{,}7\,\mathrm{kg}$ (braccio triplo, massa un terzo).
:::

::: esempio
**Bilancia a bracci disuguali.** Un piatto a $40\,\mathrm{cm}$ dal fulcro regge $50\,\mathrm N$; l'altro è a $50\,\mathrm{cm}$. Peso sull'altro piatto: $50\cdot 40 = P\cdot 50 \Rightarrow P = 40\,\mathrm N$. Il braccio è più lungo, quindi serve un peso **minore**.
:::

::: esempio
**Sbarra di ferro da 2,10 m.** Un peso di $70\,\mathrm{kg}$ sta a $30\,\mathrm{cm}$ dal fulcro, posto vicino a un estremo. L'altro braccio è $2{,}10 - 0{,}30 = 1{,}80\,\mathrm m$:

$$70\cdot 0{,}30 = m\cdot 1{,}80 \Rightarrow m = \frac{21}{1{,}80} \approx 11{,}7\,\mathrm{kg}$$
:::

::: attenzione
Leggi bene **dove sta il fulcro**: i bracci sono le distanze dal fulcro, non dagli estremi. Se la sbarra è lunga $L$ e il fulcro è a distanza $a$ da un estremo, l'altro braccio è $L - a$, non $L$. Controllo di buon senso: la forza (o massa) maggiore sta sempre sul braccio **più corto**.
:::

## Equilibrio di un corpo esteso

Un punto materiale può solo traslare: per tenerlo fermo basta che la risultante delle forze sia nulla. Un **corpo esteso** può anche **ruotare**, e una risultante nulla non basta (pensa alla coppia di forze sul volante). Le condizioni di equilibrio sono **due**:

$$\sum\vec F_{est} = 0 \qquad \sum\vec M_{est} = 0$$

- La prima (risultante delle forze esterne nulla) impedisce al centro di massa di accelerare: niente traslazione.
- La seconda (momento risultante delle forze esterne nullo, rispetto a un polo qualsiasi) impedisce al corpo di iniziare a ruotare: niente rotazione.

Le leve sono un caso particolare: la seconda condizione con polo nel fulcro dà $Pb_P = Rb_R$, la prima dà la forza sul fulcro.

Per un corpo **appoggiato** su un piano c'è una regola pratica: resta in equilibrio se la **verticale che passa per il baricentro cade dentro la base d'appoggio**. Così peso e reazione del piano stanno sulla stessa retta e non formano una coppia. È il motivo per cui la Torre di Pisa, pur inclinata, non cade (esempio numerico nella lezione 27).

## Momento d'inerzia e seconda legge per le rotazioni

### Velocità dei punti di un corpo che ruota

Se un corpo rigido ruota attorno a un asse fisso con velocità angolare $\omega$ (in $\mathrm{rad/s}$), tutti i punti hanno la **stessa** $\omega$, ma la velocità lineare di ciascuno dipende dalla distanza $r_i$ dall'asse: $v_i = \omega\,r_i$.

### Energia cinetica di rotazione e momento d'inerzia

Sommiamo le energie cinetiche dei punti:

$$K = \sum_i\tfrac12 m_iv_i^2 = \sum_i\tfrac12 m_i(\omega r_i)^2 = \tfrac12\Big(\sum_i m_ir_i^2\Big)\omega^2$$

La quantità tra parentesi è il **momento d'inerzia** rispetto all'asse:

$$I = \sum_i m_i r_i^2 \qquad K_{rot} = \tfrac12 I\omega^2$$

dove:
- $I$ = momento d'inerzia, in $\mathrm{kg\cdot m^2}$;
- $m_i$ = massa del punto $i$, in $\mathrm{kg}$;
- $r_i$ = distanza del punto $i$ dall'**asse** di rotazione (non dall'origine), in $\mathrm m$.

Per un corpo continuo la somma diventa un integrale: $I = \int r^2\,dm = \int r^2\rho\,dV$.

Il momento d'inerzia è l'analogo rotazionale della massa: misura quanto è **difficile cambiare la rotazione** del corpo. Dipende dalla massa e soprattutto da **come è distribuita** rispetto all'asse (la distanza conta al quadrato). Lo stesso corpo ha momenti d'inerzia diversi rispetto ad assi diversi.

Valori da ricordare (massa $M$, raggio $R$, asse di simmetria passante per il centro):

| Corpo | $I$ |
|---|---|
| anello o cilindro cavo sottile | $MR^2$ |
| disco o cilindro pieno | $\tfrac12 MR^2$ |
| sfera piena | $\tfrac25 MR^2$ |
| sfera cava sottile | $\tfrac23 MR^2$ |
| asta sottile di lunghezza $L$, asse per il centro | $\tfrac1{12}ML^2$ |
| asta sottile, asse per un estremo | $\tfrac13 ML^2$ |

Il **teorema di Huygens-Steiner** dà il momento rispetto a un asse parallelo a quello per il centro di massa, a distanza $h$: $I_h = I_{cm} + Mh^2$ (lezione 28).

### Seconda legge per le rotazioni

Per un corpo rigido che ruota attorno a un asse fisso vale una legge analoga a $F = ma$:

$$M = I\,\alpha$$

dove $M$ è il momento delle forze esterne rispetto all'asse ($\mathrm{N\cdot m}$), $I$ il momento d'inerzia ($\mathrm{kg\cdot m^2}$) e $\alpha = d\omega/dt$ l'accelerazione angolare ($\mathrm{rad/s^2}$). Si ricava dal teorema del momento angolare con $L = I\omega$ (più avanti).

| Traslazione | Rotazione |
|---|---|
| massa $m$ | momento d'inerzia $I$ |
| forza $F$ | momento $M$ |
| $F = ma$ | $M = I\alpha$ |
| $p = mv$ | $L = I\omega$ |
| $K = \tfrac12 mv^2$ | $K = \tfrac12 I\omega^2$ |
| $W = \int F\,ds$ | $W = \int M\,d\theta$ |

::: esempio
**Asta con tre masse.** Asta leggera lunga $2\,\mathrm m$ con $3\,\mathrm{kg}$ nell'estremo A, $10\,\mathrm{kg}$ a metà e $4\,\mathrm{kg}$ nell'estremo B. Asse per A, perpendicolare all'asta. Distanze dall'asse: $0$, $1\,\mathrm m$, $2\,\mathrm m$.

$$I = 3\cdot 0^2 + 10\cdot 1^2 + 4\cdot 2^2 = 0 + 10 + 16 = 26\,\mathrm{kg\cdot m^2}$$

Errore tipico: dimenticare il quadrato ($10 + 8 = 18$).
:::

::: esempio
**Ruota tirata da una corda.** Una corda avvolta su una ruota di $2\,\mathrm{kg}$ e raggio $50\,\mathrm{cm}$ viene tirata con $4\,\mathrm N$.

1. La corda è tangente al bordo, quindi il braccio è il raggio: $M = FR = 4\cdot 0{,}5 = 2\,\mathrm{N\cdot m}$.
2. Trattando la ruota come un **disco pieno**: $I = \tfrac12 MR^2 = \tfrac12\cdot 2\cdot 0{,}25 = 0{,}25\,\mathrm{kg\cdot m^2}$.
3. $\alpha = M/I = 2/0{,}25 = 8\,\mathrm{rad/s^2}$.

Se la ruota fosse un anello sottile ($I = MR^2 = 0{,}5\,\mathrm{kg\cdot m^2}$) si avrebbe $\alpha = 4\,\mathrm{rad/s^2}$: il testo non lo specifica, e la risposta attesa è quella del disco pieno.
:::

## Momento angolare di un punto materiale

### Definizione

Il **momento angolare** di un punto di massa $m$ e velocità $\vec v$, rispetto al polo O, è il momento della sua quantità di moto:

$$\vec L = \vec r\times m\vec v = \vec r\times\vec p$$

dove:
- $\vec L$ = momento angolare, in $\mathrm{kg\cdot m^2/s}$ (equivalente a $\mathrm{J\cdot s}$);
- $\vec r$ = posizione del punto rispetto al polo, in $\mathrm m$;
- $\vec p = m\vec v$ = quantità di moto, in $\mathrm{kg\cdot m/s}$.

È perpendicolare al piano di $\vec r$ e $\vec v$ e descrive "quanto" il punto sta girando attorno al polo.

### Moto curvilineo e circolare

Scomponiamo la velocità in una componente **radiale** $\vec v_r$ (lungo $\vec r$) e una **trasversa** $\vec v_\theta$ (perpendicolare a $\vec r$). La componente radiale è parallela a $\vec r$ e dà prodotto vettoriale nullo:

$$\vec L = \vec r\times m(\vec v_r + \vec v_\theta) = \vec r\times m\vec v_\theta \qquad |\vec L| = m\,r\,v_\theta = m\,r^2\frac{d\theta}{dt}$$

(perché $v_\theta = r\,d\theta/dt$). Solo la parte "che gira" della velocità contribuisce. Nel **moto circolare** con polo nel centro, $r$ è costante e $d\theta/dt = \omega$:

$$L = m\,r^2\omega = m\,r\,v$$

### Teorema del momento angolare (punto)

Deriviamo $\vec L$ rispetto al tempo con la regola del prodotto, prendendo un polo O **fisso** in un riferimento inerziale:

$$\frac{d\vec L}{dt} = \frac{d\vec r}{dt}\times m\vec v + \vec r\times m\frac{d\vec v}{dt} = \vec v\times m\vec v + \vec r\times m\vec a$$

Il primo termine è nullo (prodotto vettoriale di un vettore per un vettore parallelo). Nel secondo $m\vec a = \vec F$:

$$\frac{d\vec L}{dt} = \vec r\times\vec F = \vec M$$

**Teorema del momento angolare**: in un riferimento inerziale, la derivata temporale del momento angolare di un punto materiale è uguale al momento della forza risultante che agisce su di esso, calcolati rispetto allo stesso polo fisso.

### Conservazione

Il momento angolare di un punto si conserva se il momento della forza risultante è nullo. Succede in due casi:
- la risultante delle forze è nulla;
- la forza è **parallela a** $\vec r$, cioè diretta sempre verso il polo (o via da esso): è una **forza centrale**. Esempio: la gravità del Sole su un pianeta, con polo nel Sole (da qui la seconda legge di Keplero, lezione 26).

::: esempio
**Momento angolare con due poli diversi (dalla dispensa).** Un punto di $m = 2{,}0\,\mathrm{kg}$ passa per $P = (3{,}0;\ -4{,}0)\,\mathrm m$ con velocità $v_x = 30\,\mathrm{m/s}$, $v_y = 60\,\mathrm{m/s}$.

(a) Rispetto all'origine. Nel piano $xy$ il prodotto vettoriale ha solo la componente $z$: $L_z = m(x\,v_y - y\,v_x)$.

$$L_z = 2{,}0\cdot\big(3{,}0\cdot 60 - (-4{,}0)\cdot 30\big) = 2{,}0\cdot(180 + 120) = 600\,\mathrm{kg\cdot m^2/s}$$

(b) Rispetto a $O' = (-2{,}0;\ -2{,}0)\,\mathrm m$. Il vettore posizione rispetto al nuovo polo è $\vec r\,' = P - O' = (5{,}0;\ -2{,}0)\,\mathrm m$:

$$L'_z = 2{,}0\cdot\big(5{,}0\cdot 60 - (-2{,}0)\cdot 30\big) = 2{,}0\cdot(300 + 60) = 720\,\mathrm{kg\cdot m^2/s}$$

Cambiando polo cambia il momento angolare, come previsto.
:::

## Momento angolare di un sistema di punti

### Definizione e derivata

Per un sistema di punti, rispetto a un polo O:

$$\vec L = \sum_i\vec r_i\times m_i\vec v_i$$

Deriviamo. Se il polo può muoversi con velocità $\vec v_O$, la derivata di $\vec r_i$ (posizione rispetto a O) è $\vec v_i - \vec v_O$:

$$\frac{d\vec L}{dt} = \sum_i(\vec v_i - \vec v_O)\times m_i\vec v_i + \sum_i\vec r_i\times m_i\vec a_i$$

Nel primo termine $\vec v_i\times m_i\vec v_i = 0$ e resta $-\vec v_O\times\sum_i m_i\vec v_i = -\vec v_O\times M\vec v_{cm}$. Nel secondo $m_i\vec a_i = \vec F_i^{(e)} + \vec F_i^{(i)}$:

$$\frac{d\vec L}{dt} = \vec M^{(e)} + \vec M^{(i)} - \vec v_O\times M\vec v_{cm}$$

### Il momento delle forze interne è nullo

Le forze interne vanno a coppie uguali e opposte e, per il terzo principio, **sulla stessa retta**. Due forze opposte sulla stessa retta hanno lo stesso braccio rispetto a qualsiasi polo e momenti opposti: la somma è zero. Quindi $\vec M^{(i)} = 0$.

### Teorema del momento angolare per i sistemi

Il termine $\vec v_O\times M\vec v_{cm}$ si annulla se il polo è **fisso** ($\vec v_O = 0$) oppure se **coincide con il centro di massa** ($\vec v_O = \vec v_{cm}$, prodotto di vettori paralleli). In questi casi:

$$\frac{d\vec L}{dt} = \vec M^{(e)}$$

La variazione del momento angolare totale è dovuta solo al momento delle forze **esterne**.

### Conservazione del momento angolare

Il momento angolare di un sistema si conserva (con polo fisso o nel centro di massa) in due casi:
- **non agiscono forze esterne** (sistema isolato): allora si conserva anche la quantità di moto;
- il **momento delle forze esterne è nullo rispetto a quel polo**, anche se la risultante non è nulla. In questo caso la scelta del polo è fondamentale: il momento angolare si conserva rispetto a quel polo e in generale non rispetto ad altri.

Per un corpo che ruota attorno a un asse di simmetria $L = I\omega$, quindi la conservazione si scrive $I_i\omega_i = I_f\omega_f$: se le masse si avvicinano all'asse, $I$ diminuisce e $\omega$ aumenta. È il caso della pattinatrice che stringe le braccia o del tuffatore che si raccoglie.

### Teorema di Koenig per il momento angolare

Scriviamo $\vec r_i = \vec r_i\,' + \vec r_{cm}$ e $\vec v_i = \vec v_i\,' + \vec v_{cm}$ (grandezze con apice nel riferimento del centro di massa) e sviluppiamo:

$$\vec L = \sum_i\vec r_i\,'\times m_i\vec v_i\,' + \Big(\sum_i m_i\vec r_i\,'\Big)\times\vec v_{cm} + \vec r_{cm}\times\sum_i m_i\vec v_i\,' + \vec r_{cm}\times M\vec v_{cm}$$

Nel riferimento del centro di massa $\sum m_i\vec r_i\,' = 0$ e $\sum m_i\vec v_i\,' = 0$: i due termini centrali sono nulli. Resta:

$$\vec L = \vec L\,' + \vec r_{cm}\times M\vec v_{cm}$$

Il momento angolare in un riferimento inerziale è la somma del momento angolare nel riferimento del centro di massa ("di rotazione propria") e di quello di un punto di massa $M$ che si muove con il centro di massa ("orbitale"). Esempio: la Terra ha un momento angolare dovuto alla rotazione su sé stessa e uno dovuto alla rivoluzione attorno al Sole.

## Equazioni cardinali della dinamica dei sistemi

Il teorema del moto del centro di massa e il teorema del momento angolare insieme si chiamano **equazioni cardinali**:

$$\text{I)}\ \frac{d\vec P}{dt} = \vec R^{(e)} \qquad\qquad \text{II)}\ \frac{d\vec L}{dt} = \vec M^{(e)}$$

Non contengono le forze interne, quindi hanno una forma semplice. Descrivono il moto **d'insieme** del sistema, non i dettagli delle singole parti. Nei corpi rigidi, dove le distanze tra i punti sono fissate, bastano invece a descrivere tutto il moto (lezioni 26-27).

## Lavoro di un momento nel moto circolare

In un moto circolare di raggio $r$ solo la componente **tangente** $F_t$ della forza compie lavoro (quella radiale è perpendicolare allo spostamento). Lo spostamento lungo l'arco è $ds = r\,d\theta$:

$$W = \int_A^B F_t\,ds = \int_A^B F_t\,r\,d\theta$$

Il prodotto $F_t\,r$ è proprio il momento della forza rispetto al centro, quindi:

$$W = \int_{\theta_A}^{\theta_B} M\,d\theta$$

Il lavoro nelle rotazioni è il momento per lo spostamento angolare (in radianti), come nella traslazione è la forza per lo spostamento. Servirà per il corpo rigido.

::: esempio
**Sbarretta telescopica (dalla dispensa).** Due masse uguali $m$ sono unite da una sbarretta di massa trascurabile e ruotano senza attrito su un piano orizzontale attorno al centro della sbarretta. All'inizio la sbarretta è lunga $2r_1$ e la velocità angolare è $\omega_1$; poi la sbarretta si allunga fino a $2r_2$, con $r_2 > r_1$. Velocità angolare finale?

1. Forze esterne: pesi bilanciati dalla reazione del piano, risultante nulla. La tensione della sbarretta (che dà la forza centripeta) è una forza interna.
2. Con polo nel centro della sbarretta (centro di massa e centro di rotazione) il momento delle forze esterne è nullo: **si conserva il momento angolare**.
3. Ogni massa ha $L = m\,r\,v = m\,r^2\omega$. Inizialmente $L_1 = 2m\,r_1^2\,\omega_1$, alla fine $L_2 = 2m\,r_2^2\,\omega_2$.
4. $L_1 = L_2 \Rightarrow \omega_2 = \omega_1\,\dfrac{r_1^2}{r_2^2} < \omega_1$.

Allontanando le masse dall'asse il sistema **rallenta**: è la pattinatrice al contrario.
:::

::: esempio
**Due punti legati da una corda (dalla dispensa).** Due punti $P_1$ e $P_2$ di massa $m = 50\,\mathrm g$ sono uniti da una corda di lunghezza $\ell = 60\,\mathrm{cm}$ e ruotano attorno al loro centro di massa G con velocità $v = 4{,}3\,\mathrm{m/s}$.

1. Rispetto a G: ognuno si muove su una circonferenza di raggio $\ell/2$ con velocità $v$; i due momenti angolari hanno stessa direzione e verso:
$$L_G = 2\cdot m\,\frac{\ell}{2}\,v = m\,\ell\,v = 0{,}050\cdot 0{,}60\cdot 4{,}3 \approx 0{,}129\,\mathrm{kg\cdot m^2/s}$$
2. Rispetto a $P_1$: solo $P_2$ si muove, su una circonferenza di raggio $\ell$. La velocità angolare è la stessa ma il raggio raddoppia, quindi la sua velocità rispetto a $P_1$ è $2v$:
$$L_{P_1} = m\,\ell\,(2v) = 2\,m\,\ell\,v \approx 0{,}258\,\mathrm{kg\cdot m^2/s}$$
che è il **doppio** di $L_G$, con stessa direzione e verso.
:::

::: esempio
**La pattinatrice.** Ruota a $\omega_1 = 2{,}4\,\mathrm{rad/s}$ con $I_1 = 5{,}2\,\mathrm{kg\cdot m^2}$; stringendo le braccia arriva a $\omega_2 = 3{,}5\,\mathrm{rad/s}$. L'unica forza esterna è il peso, con momento nullo rispetto all'asse per il baricentro: $L$ si conserva.

$$I_1\omega_1 = I_2\omega_2 \Rightarrow I_2 = \frac{5{,}2\cdot 2{,}4}{3{,}5} \approx 3{,}6\,\mathrm{kg\cdot m^2}$$
:::

::: esame
Le domande aperte di questa lezione:
- **Condizione di equilibrio per un corpo esteso**: un corpo esteso può traslare e ruotare, quindi servono $\sum\vec F_{est} = 0$ (niente traslazione del centro di massa) **e** $\sum\vec M_{est} = 0$ (niente rotazione); esempio della coppia di forze (risultante nulla ma il corpo ruota); il polo si sceglie comodo; caso del corpo appoggiato (verticale del baricentro dentro la base).
- **Concetto di leva**: definizione (asta rigida con fulcro, potenza e resistenza), condizione di equilibrio $Pb_P = Rb_R$ ricavata dall'equilibrio dei momenti, vantaggio, i tre generi con esempi, forza sul fulcro.
- **Momento angolare**: definizione $\vec L = \vec r\times m\vec v$ con polo, unità, caso circolare $L = mr^2\omega$ e corpo rigido $L = I\omega$, teorema $d\vec L/dt = \vec M$ (dimostrazione in due righe), conservazione (forze centrali, sistemi isolati, pattinatrice).

Nelle chiuse: problemi di leve (attenzione ai bracci e a forza vs massa), unità $\mathrm{N\cdot m}$, verso di rotazione con più momenti, momento d'inerzia di masse puntiformi ($r$ al quadrato), $\alpha = M/I$.
:::

::: sintesi
- Momento di un vettore: $\vec M_O = \overrightarrow{OP}\times\vec v$, modulo $hv$ ($h$ braccio); dipende dal polo: $\vec M_O = \vec M_{O'} + \overrightarrow{OO'}\times\vec v$.
- Momento di una forza: $\vec M = \vec r\times\vec F$, $M = Fb$, in $\mathrm{N\cdot m}$; coppia: risultante nulla, momento $Fd$.
- Leva in equilibrio: $Pb_P = Rb_R$; 1° genere fulcro in mezzo, 2° resistenza in mezzo (sempre vantaggiosa), 3° potenza in mezzo (mai).
- Equilibrio di un corpo esteso: $\sum\vec F = 0$ e $\sum\vec M = 0$.
- $I = \sum m_ir_i^2$, $K = \tfrac12 I\omega^2$, $M = I\alpha$; anello $MR^2$, disco $\tfrac12MR^2$, sfera $\tfrac25MR^2$.
- $\vec L = \vec r\times m\vec v$; circolare $L = mr^2\omega$; corpo rigido $L = I\omega$.
- $d\vec L/dt = \vec M^{(e)}$ (polo fisso o centro di massa); $\vec M^{(i)} = 0$; $\vec L$ si conserva se $\vec M^{(e)} = 0$.
- Koenig: $\vec L = \vec L\,' + \vec r_{cm}\times M\vec v_{cm}$. Equazioni cardinali: $d\vec P/dt = \vec R^{(e)}$, $d\vec L/dt = \vec M^{(e)}$.
- Lavoro nelle rotazioni: $W = \int M\,d\theta$.
:::

=== 24 dispense
SLIDES: 24
# Lezione 24 — Energia nei sistemi di punti e urti

## Di che cosa parla questa lezione

Gli urti sono l'applicazione più importante della conservazione della quantità di moto. Due biglie che si colpiscono, due auto che si scontrano, un proiettile che si pianta in un blocco, un fucile che rincula: in tutti questi casi le forze in gioco sono enormi, brevissime e quasi impossibili da descrivere istante per istante. Eppure possiamo prevedere lo stato finale usando solo le **leggi di conservazione**.

La dispensa parte dall'**energia nei sistemi di punti** (che cosa succede al lavoro delle forze interne), definisce l'**urto**, spiega perché si può trattare il sistema come **isolato**, classifica gli urti in **elastici** e **anelastici**, li descrive nel **riferimento del centro di massa**, ricava le formule dell'**urto elastico unidimensionale** e del **proiettile-bersaglio**, e risolve molti esercizi. Aggiungiamo esplosioni, rinculo e pendolo balistico, che compaiono spesso nelle domande.

## Energia nei sistemi di punti materiali

### Il lavoro delle forze interne non è nullo

Sul punto $i$ di un sistema agiscono forze esterne e interne; il lavoro elementare si divide in due parti:

$$dW_i = \vec F_i\cdot d\vec r_i = \vec R_i^{(e)}\cdot d\vec r_i + \vec R_i^{(i)}\cdot d\vec r_i = dW_i^{(e)} + dW_i^{(i)}$$

Per la quantità di moto le forze interne si annullavano a coppie. Per il lavoro **no**. Prendiamo una coppia di punti $i$ e $j$ con forze $\vec F_{ij}$ (su $i$) e $\vec F_{ji} = -\vec F_{ij}$ (su $j$). Il loro lavoro complessivo è:

$$\vec F_{ij}\cdot d\vec r_i + \vec F_{ji}\cdot d\vec r_j = \vec F_{ij}\cdot d\vec r_i - \vec F_{ij}\cdot d\vec r_j = \vec F_{ij}\cdot d(\vec r_i - \vec r_j)$$

Dipende dalla variazione della **distanza relativa** tra i due punti: se i punti si avvicinano o si allontanano, le forze interne compiono lavoro. Esempio: due carrelli legati da una molla compressa che vengono liberati; la molla (forza interna) li mette in moto e la loro energia cinetica cresce.

### Teoremi dell'energia per i sistemi

- **Teorema dell'energia cinetica**: vale sommando il lavoro di **tutte** le forze, esterne e interne:
$$W^{(e)} + W^{(i)} = K_B - K_A$$
- **Conservazione dell'energia meccanica**: vale se **tutte** le forze (esterne e interne) che compiono lavoro sono conservative.
- Con forze non conservative, il loro lavoro è uguale alla differenza tra energia meccanica finale e iniziale: $W_{nc} = E_B - E_A$.

Questa è la chiave degli urti: la quantità di moto si conserva sempre (le forze interne non la cambiano), l'energia no (le forze interne possono dissiparla).

## Che cos'è un urto

### Definizione

Un **urto** tra due punti materiali è un contatto (un'interazione) che li fa interagire per un intervallo di tempo **trascurabile** rispetto al tempo in cui osserviamo il sistema. È quindi un evento concentrato in un istante, in cui tra i due corpi agisce una **forza impulsiva** reciproca: intensissima e di brevissima durata.

Perché un'interazione si possa trattare come un urto:
- deve durare un **tempo brevissimo** rispetto al tempo di osservazione (è la condizione che definisce l'urto);
- di conseguenza le forze tra i corpi sono **molto più intense** delle eventuali forze esterne, e durante l'interazione le posizioni dei corpi praticamente non cambiano.

L'effetto dell'urto su ciascun corpo è una variazione della sua quantità di moto, pari all'impulso ricevuto (teorema dell'impulso).

### Perché il sistema si tratta come isolato

Le forze dell'urto sono forze **interne** al sistema dei due corpi: per il terzo principio sono uguali e opposte, quindi i loro impulsi sono uguali e opposti. Quello che uno guadagna in quantità di moto, l'altro lo perde.

Ma ci sono anche forze esterne (peso, attrito)? Sì, però agiscono per lo stesso tempo brevissimo $\Delta t$ e sono molto meno intense delle forze d'urto. Il loro impulso è trascurabile:

$$F_{int}\,\Delta t \gg F^{(e)}\,\Delta t \qquad (\Delta t\to 0)$$

Quindi **durante l'urto** il sistema si comporta come **isolato** anche se non lo è in assoluto. Ne segue la regola fondamentale:

**In ogni urto la quantità di moto totale del sistema si conserva** (subito prima = subito dopo).

$$m_1\vec v_{1,i} + m_2\vec v_{2,i} = m_1\vec v_{1,f} + m_2\vec v_{2,f}$$

dove $m_1$, $m_2$ sono le masse ($\mathrm{kg}$) e $\vec v$ le velocità ($\mathrm{m/s}$) subito prima ($i$) e subito dopo ($f$). È un'equazione **vettoriale**: in due o tre dimensioni si conserva ogni componente. Nei problemi, se non è detto altro, si considerano urti in assenza di forze esterne.

### E l'energia?

La conservazione dell'energia dipende dal **tipo di forze** che agiscono durante l'interazione. Poiché le posizioni praticamente non cambiano durante l'urto, l'energia potenziale (legata alle forze esterne come il peso) resta la stessa. Quindi il bilancio energetico riguarda solo l'**energia cinetica**:
- se le forze d'interazione sono **conservative** (i corpi si deformano elasticamente e tornano come prima), l'energia cinetica totale si conserva: urto **elastico**;
- altrimenti parte dell'energia cinetica si trasforma in deformazione permanente, calore, suono: urto **anelastico**.

## Tipi di urto

| Tipo | Quantità di moto | Energia cinetica | Cosa succede |
|---|---|---|---|
| Elastico | si conserva | si conserva | deformazioni elastiche, i corpi tornano come prima |
| Anelastico | si conserva | **non** si conserva (diminuisce) | parte dell'energia va in deformazione e calore |
| Completamente anelastico | si conserva | non si conserva (perdita **massima**) | i corpi restano **uniti** e proseguono insieme |

### Coefficiente di restituzione

Misura "quanto è elastico" un urto. La dispensa lo definisce nel riferimento del centro di massa come il rapporto tra la quantità di moto di un punto **dopo** e **prima** dell'urto (in modulo):

$$e = \frac{|\vec p\,'_{f}|}{|\vec p\,'_{i}|}$$

Equivalentemente, è il rapporto tra la velocità relativa di allontanamento dopo l'urto e quella di avvicinamento prima. Vale tra 0 e 1:
- $e = 1$: urto **elastico** (nel centro di massa le velocità si invertono senza perdere modulo);
- $0 < e < 1$: urto **anelastico**;
- $e = 0$: urto **completamente anelastico** (dopo l'urto i corpi sono fermi nel centro di massa, cioè uniti).

::: attenzione
Se dopo l'urto i corpi si muovono in un modo qualsiasi (un carrello ne urta un altro fermo ed entrambi proseguono nella stessa direzione; una palla ne mette in moto un'altra e continua), l'unica cosa **sicura** è che si conserva la quantità di moto totale. L'energia cinetica si conserva solo se l'urto è elastico, e per saperlo bisogna verificarlo con i numeri. Un urto è **sicuramente** elastico quando la conservazione di $K$ è garantita: per esempio due corpi **identici** che si scambiano le velocità ($p$ e $K$ restano gli stessi). È invece tipicamente anelastico un proiettile che si conficca in un bersaglio o una palla che rimbalza sull'acqua.
:::

## Urti e sistemi di riferimento

Poiché la quantità di moto totale si conserva, un urto si descrive bene sia nel riferimento del **laboratorio** (inerziale, "fisso") sia nel riferimento del **centro di massa**. Le velocità sono legate da:

$$\vec v_1 = \vec v_1\,' + \vec v_{cm} \qquad \vec v_2 = \vec v_2\,' + \vec v_{cm}$$

Sostituendo nella quantità di moto totale:

$$m_1\vec v_1 + m_2\vec v_2 = m_1\vec v_1\,' + m_2\vec v_2\,' + (m_1 + m_2)\vec v_{cm} \quad\Rightarrow\quad m_1\vec v_1\,' + m_2\vec v_2\,' = 0$$

Nel riferimento del centro di massa la quantità di moto totale (conservata) è **nulla**. L'urto visto da lì è semplicissimo: i due punti si avvicinano con quantità di moto **uguali e opposte**, si urtano nell'origine e si allontanano di nuovo con quantità di moto uguali e opposte (in generale diverse da quelle iniziali). L'energia cinetica in questo riferimento è $K' = \tfrac12 m_1v_1'^2 + \tfrac12 m_2v_2'^2$.

## Urto elastico

### Quante equazioni e quante incognite

In un urto elastico si conservano la quantità di moto (3 componenti) e l'energia cinetica (1 equazione): **4 equazioni**.

$$\vec P_{in} = \vec P_{fin} \qquad K_{in} = K_{fin}$$

I parametri del problema sono le due masse e le velocità iniziali e finali dei due punti (3 componenti ciascuna): $2 + 4\cdot 3 = 14$ valori. Con 4 equazioni, servono **10 dati** per risolvere: se si conoscono masse e velocità iniziali (8 dati) ne servono altri 2 (per esempio la direzione di uscita di un corpo). Nel caso **unidimensionale** invece, note le condizioni iniziali, le incognite sono solo le 2 velocità finali e le 2 equazioni (quantità di moto ed energia) bastano.

### Urto elastico unidimensionale: derivazione

Due punti di massa $m_1$ e $m_2$ si muovono sulla stessa retta con velocità $v_{1,in}$ e $v_{2,in}$ (con segno). Le equazioni di conservazione sono:

$$m_1v_{1,in} + m_2v_{2,in} = m_1v_{1,fin} + m_2v_{2,fin} = (m_1 + m_2)\,v_{cm}$$

$$\tfrac12 m_1v_{1,in}^2 + \tfrac12 m_2v_{2,in}^2 = \tfrac12 m_1v_{1,fin}^2 + \tfrac12 m_2v_{2,fin}^2$$

**Nel riferimento del centro di massa** la quantità di moto è nulla prima e dopo:

$$m_1v'_{1,in} = -m_2v'_{2,in} \qquad m_1v'_{1,fin} = -m_2v'_{2,fin}$$

Sostituendo $v'_2 = -\frac{m_1}{m_2}v'_1$ nella conservazione dell'energia (che vale anche nel centro di massa, per Koenig):

$$\tfrac12 m_1v'^2_{1,in}\Big(1 + \frac{m_1}{m_2}\Big) = \tfrac12 m_1v'^2_{1,fin}\Big(1 + \frac{m_1}{m_2}\Big) \;\Rightarrow\; v'^2_{1,fin} = v'^2_{1,in}$$

La soluzione $v'_{1,fin} = v'_{1,in}$ vorrebbe dire "nessun urto"; quella fisica è:

$$v'_{1,fin} = -v'_{1,in} \qquad v'_{2,fin} = -v'_{2,in}$$

**Nel centro di massa, in un urto elastico, ogni velocità si inverte e basta.**

**Ritorno nel laboratorio.** Con $v = v' + v_{cm}$:

$$v_{1,fin} = v'_{1,fin} + v_{cm} = -v'_{1,in} + v_{cm} = -(v_{1,in} - v_{cm}) + v_{cm} = 2v_{cm} - v_{1,in}$$

e allo stesso modo $v_{2,fin} = 2v_{cm} - v_{2,in}$. Sostituendo $v_{cm} = \dfrac{m_1v_{1,in} + m_2v_{2,in}}{m_1 + m_2}$:

$$v_{1,fin} = \frac{2m_1v_{1,in} + 2m_2v_{2,in} - (m_1 + m_2)v_{1,in}}{m_1 + m_2}$$

$$v_{1,fin} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1,in} + \frac{2m_2}{m_1 + m_2}\,v_{2,in}$$

$$v_{2,fin} = \frac{2m_1}{m_1 + m_2}\,v_{1,in} + \frac{m_2 - m_1}{m_1 + m_2}\,v_{2,in}$$

dove le masse sono in $\mathrm{kg}$ e le velocità in $\mathrm{m/s}$, **con segno**.

Una conseguenza utile: $v_{2,fin} - v_{1,fin} = -(v_{2,in} - v_{1,in})$. In un urto elastico la **velocità relativa si inverte**: i corpi si allontanano con la stessa velocità relativa con cui si erano avvicinati.

### Proiettile e bersaglio fermo

Il caso classico: un punto in moto (proiettile, $m_1$) colpisce un punto fermo (bersaglio, $m_2$, $v_{2,in} = 0$). Le formule diventano:

$$v_{1,fin} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1,in} \qquad v_{2,fin} = \frac{2m_1}{m_1 + m_2}\,v_{1,in}$$

Il bersaglio parte **sempre** nel verso del proiettile. Il proiettile invece:
- prosegue nello stesso verso se $m_1 > m_2$;
- si ferma se $m_1 = m_2$;
- rimbalza indietro se $m_1 < m_2$.

Tre casi notevoli:
- **Masse uguali** ($m_1 = m_2$): $v_{1,fin} = 0$, $v_{2,fin} = v_{1,in}$. Il proiettile si ferma e il bersaglio parte con la sua velocità: i corpi **si scambiano le velocità**, e quantità di moto ed energia cinetica passano interamente dall'uno all'altro (biliardo, pendolo di Newton).
- **Proiettile molto più pesante** ($m_1\gg m_2$): $v_{1,fin}\approx v_{1,in}$, $v_{2,fin}\approx 2v_{1,in}$. Il proiettile non rallenta quasi per nulla e il bersaglio parte a velocità **doppia**.
- **Proiettile molto più leggero** ($m_1\ll m_2$): $v_{1,fin}\approx -v_{1,in}$, $v_{2,fin}\approx 0$. Il proiettile rimbalza indietro con la stessa velocità, come contro una parete fissa; il bersaglio resta praticamente fermo.

::: esempio
**Treno e pallina da tennis.** Un treno a $300\,\mathrm{km/h}$ incontra una pallina ferma sul binario; urto elastico. È il caso $m_1\gg m_2$: $v_{2,fin}\approx 2\cdot 300 = 600\,\mathrm{km/h}$. (Nel riferimento del treno la pallina arriva a $300\,\mathrm{km/h}$ e rimbalza a $300\,\mathrm{km/h}$; tornando a terra si sommano i $300$ del treno.)
:::

::: esempio
**Discussione al variare di $m_2$ (dalla dispensa).** Un punto di $m_1 = 4{,}2\,\mathrm{kg}$ a $v_1 = 5{,}2\,\mathrm{m/s}$ urta elasticamente un punto fermo di massa $m_2$. Dalle formule del bersaglio fermo: il punto 2 si muove sempre nel verso di $v_1$; il punto 1 continua se $m_2 < 4{,}2\,\mathrm{kg}$, si ferma se $m_2 = 4{,}2\,\mathrm{kg}$, rimbalza se $m_2 > 4{,}2\,\mathrm{kg}$. Se $m_2\gg m_1$ (una parete), $v_{2,fin} = 0$ e $v_{1,fin} = -5{,}2\,\mathrm{m/s}$.
:::

::: esempio
**Due sfere appese (dalla dispensa).** Due sfere metalliche sono appese a cavetti verticali e si toccano. La sfera 1 ($m_1 = 30\,\mathrm g$) viene spostata a sinistra fino all'altezza $h_1 = 8{,}0\,\mathrm{cm}$ e lasciata; tornata in basso urta elasticamente la sfera 2 ($m_2 = 75\,\mathrm g$). Velocità della sfera 1 subito dopo l'urto?

1. **Discesa**: conservazione dell'energia meccanica (la tensione non lavora, è sempre perpendicolare al moto):
$$m_1gh_1 = \tfrac12 m_1v_{1i}^2 \Rightarrow v_{1i} = \sqrt{2gh_1} = \sqrt{2\cdot 9{,}8\cdot 0{,}080} \approx 1{,}25\,\mathrm{m/s}$$
2. **Urto**: unidimensionale (moto orizzontale), sistema isolato per la brevità: si conservano quantità di moto ed energia cinetica. Con la sfera 2 ferma:
$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1i} = \frac{30 - 75}{105}\cdot 1{,}25 \approx -0{,}54\,\mathrm{m/s}$$
La sfera 1 rimbalza indietro a $0{,}54\,\mathrm{m/s}$. (La sfera 2 parte a $\frac{60}{105}\cdot 1{,}25\approx 0{,}72\,\mathrm{m/s}$.)
:::

::: esempio
**Palla appesa che urta un blocco (dalla dispensa).** Una palla di $0{,}500\,\mathrm{kg}$ è legata a un filo di $70{,}0\,\mathrm{cm}$; parte con il filo orizzontale e nel punto più basso urta elasticamente un blocco di $2{,}50\,\mathrm{kg}$ fermo su un piano liscio.

1. Velocità prima dell'urto: $v_0 = \sqrt{2gh} = \sqrt{2\cdot 9{,}8\cdot 0{,}700}\approx 3{,}70\,\mathrm{m/s}$.
2. (a) Palla dopo l'urto: $v = \dfrac{0{,}5 - 2{,}5}{3{,}0}\cdot 3{,}70\approx -2{,}47\,\mathrm{m/s}$ (rimbalza).
3. (b) Velocità del centro di massa (si conserva nell'urto): $v_{cm} = \dfrac{m_1v_0}{m_1 + m_2} = \dfrac{0{,}5\cdot 3{,}70}{3{,}0}\approx 0{,}62\,\mathrm{m/s}$.
:::

::: esempio
**Secondo incontro dopo il rimbalzo su una parete (dalla dispensa).** Un punto di $m_1 = 0{,}30\,\mathrm{kg}$ va lungo $x$ a $v = 2{,}0\,\mathrm{m/s}$ e in $x = 0$ urta elasticamente un punto fermo di $m_2 = 0{,}40\,\mathrm{kg}$. Il secondo raggiunge una parete in $x = 70\,\mathrm{cm}$ e rimbalza senza perdere velocità. Dove si incontrano di nuovo?

1. Dopo l'urto: $v_1 = \dfrac{0{,}30 - 0{,}40}{0{,}70}\cdot 2{,}0\approx -0{,}29\,\mathrm{m/s}$, $v_2 = \dfrac{2\cdot 0{,}30}{0{,}70}\cdot 2{,}0\approx 1{,}71\,\mathrm{m/s}$.
2. Il punto 2 va alla parete e torna nell'origine dopo $t_0 = 2\ell/v_2 = 1{,}40/1{,}71\approx 0{,}82\,\mathrm s$. Intanto il punto 1 è arrivato in $x_0 = v_1t_0\approx -0{,}29\cdot 0{,}82\approx -0{,}23\,\mathrm m$.
3. Da qui il punto 2 va verso le $x$ negative a $1{,}71\,\mathrm{m/s}$ e insegue il punto 1, che va nello stesso verso a $0{,}29\,\mathrm{m/s}$. Si incontrano quando $-1{,}71\,t = x_0 - 0{,}29\,t$, cioè $t = \dfrac{-x_0}{1{,}71 - 0{,}29} = \dfrac{0{,}23}{1{,}43}\approx 0{,}16\,\mathrm s$.
4. Posizione: $x = -1{,}71\cdot 0{,}16\approx -0{,}28\,\mathrm m$ (la dispensa, con altri arrotondamenti, riporta $-0{,}29\,\mathrm m$): circa $28$-$29\,\mathrm{cm}$ a sinistra del punto del primo urto.
:::

## Urto anelastico e completamente anelastico

### Urto anelastico

Si conserva solo la quantità di moto totale; l'energia cinetica **diminuisce**. Le forze d'interazione non sono conservative: parte dell'energia cinetica diventa energia di deformazione permanente, calore, suono. Con le sole leggi di conservazione non si possono ricavare entrambe le velocità finali: serve un dato in più (per esempio una delle velocità finali, o il coefficiente di restituzione).

::: esempio
**Urto parzialmente anelastico (dalla dispensa).** Un blocco di $5{,}0\,\mathrm{kg}$ a $3{,}0\,\mathrm{m/s}$ urta un blocco di $10\,\mathrm{kg}$ che va nello stesso verso a $2{,}0\,\mathrm{m/s}$. Dopo l'urto il blocco grande va a $2{,}5\,\mathrm{m/s}$.

(a) Conservazione della quantità di moto:
$$v_{1,fin} = v_{1,in} + \frac{m_2(v_{2,in} - v_{2,fin})}{m_1} = 3{,}0 + \frac{10\cdot(2{,}0 - 2{,}5)}{5{,}0} = 3{,}0 - 1{,}0 = 2{,}0\,\mathrm{m/s}$$
(b) Variazione di energia cinetica:
$$\Delta K = \tfrac12\cdot 5\cdot(2{,}0^2 - 3{,}0^2) + \tfrac12\cdot 10\cdot(2{,}5^2 - 2{,}0^2) = -12{,}5 + 11{,}25 = -1{,}25\,\mathrm J$$
L'energia cinetica è diminuita: l'urto è anelastico.
:::

### Urto completamente anelastico

È il caso estremo: i due corpi **restano uniti** dopo l'urto e proseguono con la **stessa velocità** $v_f$. Basta la conservazione della quantità di moto:

$$m_1v_1 + m_2v_2 = (m_1 + m_2)\,v_f \quad\Rightarrow\quad v_f = \frac{m_1v_1 + m_2v_2}{m_1 + m_2}$$

dove $v_f$ è la velocità comune in $\mathrm{m/s}$; le velocità iniziali vanno con il **segno** (se i corpi si vengono incontro, una è negativa). Nota: $v_f$ è proprio la velocità del centro di massa, che l'urto non cambia.

**Energia dissipata.** Per il teorema di Koenig $K = K' + \tfrac12 Mv_{cm}^2$. Dopo l'urto i corpi sono fermi nel centro di massa ($K'_f = 0$) e $v_{cm}$ non è cambiata: si perde **tutta e sola** l'energia cinetica relativa al centro di massa, il massimo possibile compatibile con la conservazione della quantità di moto. Facendo il calcolo:

$$K_i - K_f = K'_i = \tfrac12\,\mu\,(v_1 - v_2)^2 \qquad \mu = \frac{m_1m_2}{m_1 + m_2}$$

::: esempio
**Massa contro massa ferma.** $2{,}5\,\mathrm{kg}$ a $9\,\mathrm{m/s}$ urta in modo perfettamente anelastico $5{,}0\,\mathrm{kg}$ ferma:
$$v_f = \frac{2{,}5\cdot 9}{2{,}5 + 5{,}0} = \frac{22{,}5}{7{,}5} = 3{,}0\,\mathrm{m/s}$$
:::

::: esempio
**Vagoni che si agganciano.** Un vagone di massa $M$ a velocità $V$ si aggancia a un vagone identico fermo: $v_f = \dfrac{MV + M\cdot 0}{2M} = \dfrac V2$. L'energia cinetica passa da $\tfrac12 MV^2$ a $\tfrac12(2M)(V/2)^2 = \tfrac14 MV^2$: se ne perde metà.
:::

::: esempio
**Carrelli che si vengono incontro.** $100\,\mathrm{kg}$ a $5\,\mathrm{m/s}$ e $300\,\mathrm{kg}$ a $1\,\mathrm{m/s}$ in verso opposto, restano attaccati. Positivo il verso del primo:
$$v_f = \frac{100\cdot 5 + 300\cdot(-1)}{400} = \frac{200}{400} = 0{,}5\,\mathrm{m/s}$$
nel verso del carrello leggero.
:::

::: esempio
**Auto contro camion.** Un'auto che **pesa** $9000\,\mathrm N$ a $100\,\mathrm{km/h}$ urta frontalmente un camion che **pesa** $90{,}0\,\mathrm{kN}$ a $50{,}0\,\mathrm{km/h}$ in verso opposto; restano uniti.

1. Masse dai pesi ($m = P/g$): auto $9000/9{,}8\approx 918\,\mathrm{kg}$; camion $90\,000/9{,}8\approx 9184\,\mathrm{kg}$.
2. Velocità in m/s (dividere per 3,6): $27{,}8\,\mathrm{m/s}$ e $13{,}9\,\mathrm{m/s}$. Positivo il verso dell'auto: $v_1 = +27{,}8$, $v_2 = -13{,}9$.
3. $$v_f = \frac{918\cdot 27{,}8 - 9184\cdot 13{,}9}{918 + 9184} = \frac{25\,520 - 127\,660}{10\,102}\approx -10{,}1\,\mathrm{m/s}$$

Il segno meno: i rottami si muovono nel verso in cui andava il camion. In km/h sarebbero $36{,}4\,\mathrm{km/h}$, ma il risultato in m/s è $-10{,}1$.
:::

::: esempio
**Ragazzo che salta su un carro (dalla dispensa).** Un carro di $m_1 = 350\,\mathrm{kg}$ va a $v_1 = 7{,}2\,\mathrm{m/s}$; un ragazzo di $m_2 = 43\,\mathrm{kg}$ gli corre incontro e ci salta sopra a $v_2 = 3{,}7\,\mathrm{m/s}$ in verso opposto. Nessuna forza esterna orizzontale; dopo il salto hanno la stessa velocità:
$$v = \frac{m_1v_1 - m_2v_2}{m_1 + m_2} = \frac{2520 - 159{,}1}{393}\approx 6{,}0\,\mathrm{m/s}$$
:::

::: esempio
**Energia dissipata (dalla dispensa).** $m_1 = 3{,}5\,\mathrm{kg}$ a $5{,}4\,\mathrm{m/s}$ e $m_2 = 4{,}2\,\mathrm{kg}$ a $3{,}4\,\mathrm{m/s}$, stessa retta e stesso verso; il primo raggiunge il secondo e restano attaccati.

1. $v_f = \dfrac{3{,}5\cdot 5{,}4 + 4{,}2\cdot 3{,}4}{7{,}7} = \dfrac{18{,}9 + 14{,}28}{7{,}7}\approx 4{,}31\,\mathrm{m/s}$.
2. $K_i = \tfrac12\cdot 3{,}5\cdot 29{,}16 + \tfrac12\cdot 4{,}2\cdot 11{,}56\approx 51{,}03 + 24{,}28 = 75{,}31\,\mathrm J$; $K_f = \tfrac12\cdot 7{,}7\cdot 4{,}31^2\approx 71{,}49\,\mathrm J$.
3. Energia dissipata: $K_i - K_f\approx 3{,}8\,\mathrm J$. Controllo con la formula: $\mu = \frac{3{,}5\cdot 4{,}2}{7{,}7}\approx 1{,}91\,\mathrm{kg}$, $\tfrac12\cdot 1{,}91\cdot(5{,}4 - 3{,}4)^2\approx 3{,}8\,\mathrm J$. ✓
:::

::: esempio
**Oggetti che si scontrano frontalmente.** $10\,\mathrm{kg}$ a $10\,\mathrm{m/s}$ contro $90\,\mathrm{kg}$ a $5{,}0\,\mathrm{m/s}$ in verso opposto, restano uniti:
$$v_f = \frac{10\cdot 10 - 90\cdot 5{,}0}{100} = \frac{100 - 450}{100} = -3{,}5\,\mathrm{m/s}$$
cioè $3{,}5\,\mathrm{m/s}$ nel verso dell'oggetto più pesante.
:::

::: esempio
**Proiettile nel blocco che poi striscia (dalla dispensa).** Un proiettile di $m_1 = 12{,}0\,\mathrm g$ si pianta in un blocco di $m_2 = 100\,\mathrm g$ fermo su un piano orizzontale; il blocco scivola per $L = 7{,}50\,\mathrm m$ prima di fermarsi, con $\mu_d = 0{,}650$. Velocità del proiettile?

1. **Strisciamento** (teorema dell'energia cinetica): l'energia cinetica del blocco + proiettile viene tutta dissipata dall'attrito:
$$\tfrac12(m_1 + m_2)v_2^2 = \mu_d(m_1 + m_2)gL \Rightarrow v_2 = \sqrt{2\mu_dgL} = \sqrt{2\cdot 0{,}650\cdot 9{,}8\cdot 7{,}50}\approx 9{,}78\,\mathrm{m/s}$$
2. **Urto** completamente anelastico (conservazione della quantità di moto):
$$m_1v_1 = (m_1 + m_2)v_2 \Rightarrow v_1 = \frac{112}{12}\cdot 9{,}78\approx 91\,\mathrm{m/s}$$
:::

::: esempio
**Urto con una guida (dalla dispensa).** Un punto di massa $m$ scorre lungo una guida rettilinea liscia (asse $x$) a velocità $v$. Un secondo punto di ugual massa, con velocità di ugual modulo lungo un asse orizzontale perpendicolare alla guida (asse $z$), lo colpisce e resta attaccato.

(a) Prima dell'urto il centro di massa si muove con $\vec v_{cm} = \frac v2\hat\imath + \frac v2\hat k$ (media delle due velocità). Lungo la guida non ci sono forze esterne: la componente $x$ si conserva e dopo l'urto le due masse unite vanno a $\vec v_{cm} = \frac v2\hat\imath$, lungo la guida.

(b) La componente $z$ della quantità di moto, $mv$, è stata assorbita dalla **guida**, che è un vincolo esterno: in questa direzione il sistema non è isolato. Se l'urto dura $\Delta t$, la reazione media della guida vale $mv/\Delta t$.
:::

## La quantità di moto è un vettore

In due o tre dimensioni le quantità di moto si sommano come **vettori**, non come numeri.

::: esempio
**Giocattoli in direzioni perpendicolari.** Due giocattoli di $0{,}5\,\mathrm{kg}$ e $0{,}2\,\mathrm{kg}$ si muovono a $10\,\mathrm{m/s}$ in direzioni perpendicolari e si urtano. Moduli: $p_1 = 5$, $p_2 = 2\,\mathrm{kg\cdot m/s}$. Essendo perpendicolari si usa Pitagora:
$$P = \sqrt{5^2 + 2^2} = \sqrt{29}\approx 5{,}4\,\mathrm{kg\cdot m/s}$$
uguale prima e dopo l'urto. Sommare i moduli ($7$) vale solo per vettori paralleli concordi, sottrarli ($3$) solo per vettori opposti.
:::

## Esplosioni e rinculo

### L'esplosione come urto "al contrario"

In un'esplosione un corpo si divide in più pezzi per effetto di forze **interne** (gas di una carica, molla che si distende, spinta reciproca). Le forze esterne sono trascurabili nel brevissimo tempo dell'esplosione, quindi la quantità di moto totale dei frammenti **subito dopo** è **uguale** a quella del corpo **subito prima**. L'energia cinetica invece **aumenta** (viene dall'energia chimica o elastica liberata).

Se il sistema parte **da fermo**, la quantità di moto totale resta **zero**:

$$m\,v + M\,V = 0 \quad\Rightarrow\quad V = -\frac mM\,v$$

dove $m$, $v$ sono massa e velocità del pezzo lanciato (proiettile) e $M$, $V$ quelle del resto (fucile, persona). Il segno meno indica verso opposto; le velocità sono inversamente proporzionali alle masse.

::: esempio
**Rinculo di un fucile (1).** Fucile di $3\,\mathrm{kg}$, proiettile di $10\,\mathrm g$ a $500\,\mathrm{m/s}$:
$$V = -\frac{0{,}010\cdot 500}{3} = -\frac{5}{3}\approx -1{,}67\,\mathrm{m/s}$$
:::

::: esempio
**Rinculo di un fucile (2).** Proiettile di $5{,}0\,\mathrm g$ a $300\,\mathrm{m/s}$, fucile di $10{,}0\,\mathrm{kg}$:
$$|V| = \frac{0{,}005\cdot 300}{10{,}0} = 0{,}15\,\mathrm{m/s} = 15\,\mathrm{cm/s}$$
in verso opposto al proiettile.
:::

::: esempio
**Due astronauti.** Fermi e fluttuanti, si tengono per mano; il primo ($90\,\mathrm{kg}$) spinge via il secondo ($75\,\mathrm{kg}$), che va a $0{,}5\,\mathrm{m/s}$. Quantità di moto totale nulla:
$$0 = 90\,v_1 + 75\cdot 0{,}5 \Rightarrow v_1 = -\frac{37{,}5}{90}\approx -0{,}42\,\mathrm{m/s}$$
:::

Conseguenze da ricordare:
- **Due pattinatrici** ferme che si respingono senza attrito si muovono **entrambe**, in versi opposti, con $m_1v_1 = m_2v_2$. Che una resti ferma e l'altra indietreggi è **impossibile**, qualunque siano le masse: la quantità di moto totale non sarebbe più zero.
- **Due pistole**: ogni pistola riceve una quantità di moto uguale e opposta a quella del suo proiettile. Se i proiettili hanno la stessa velocità e quello di A ha massa doppia, A riceve una quantità di moto **doppia** di B (rapporto $2/1$). La massa delle pistole non conta: cambia la loro velocità di rinculo, non la quantità di moto.
- **Proiettile che si frantuma in volo**: la quantità di moto totale dei frammenti subito dopo è uguale a quella del proiettile subito prima, e il centro di massa continua sulla stessa traiettoria.
- **Razzo che si spezza in quota**: lanciato in verticale, al punto più alto (velocità nulla) si divide in due frammenti con velocità orizzontali. La quantità di moto orizzontale era zero, quindi $m_1v_1 = m_2v_2$: il frammento **più pesante** è **più lento**. Entrambi cadono dalla stessa quota $h$, quindi impiegano lo stesso tempo $t = \sqrt{2h/g}$; la distanza percorsa in orizzontale è $x = v\,t$, minore per il pezzo più lento. Il frammento di **massa maggiore** ricade **più vicino** al punto di partenza.

## Pendolo balistico

È un metodo per misurare la velocità di un proiettile. Il proiettile (massa $m$, velocità $v$) si pianta in un blocco di legno (massa $M$) appeso a un filo, e il blocco sale fino a un'altezza $h$. Il problema va diviso in **due fasi**, con leggi di conservazione diverse:

1. **Urto** (completamente anelastico, brevissimo): si conserva la quantità di moto, **non** l'energia.
$$m\,v = (m + M)\,V$$
dove $V$ è la velocità di blocco + proiettile subito dopo l'urto, che è anche la velocità del centro di massa del sistema.
2. **Salita** (dopo l'urto): agiscono il peso (conservativo) e la tensione (che non lavora). Si conserva l'**energia meccanica**:
$$\tfrac12(m + M)\,V^2 = (m + M)\,g\,h \quad\Rightarrow\quad V = \sqrt{2gh}$$

Combinando: $v = \dfrac{m + M}{m}\sqrt{2gh}$.

::: esempio
Proiettile di $100\,\mathrm g$, blocco di $20\,\mathrm{kg}$, il blocco sale di $30\,\mathrm{cm}$.
- Velocità subito dopo l'urto (velocità iniziale del centro di massa): $V = \sqrt{2\cdot 9{,}8\cdot 0{,}30} = \sqrt{5{,}88}\approx 2{,}4\,\mathrm{m/s}$.
- Velocità del proiettile: $v = \dfrac{20{,}1}{0{,}1}\cdot 2{,}42\approx 490\,\mathrm{m/s}$.
:::

::: attenzione
Errore classico: applicare la conservazione dell'energia all'urto ($\tfrac12 mv^2 = (m + M)gh$). È sbagliato: nell'urto anelastico quasi tutta l'energia cinetica del proiettile va in deformazione e calore. L'energia si conserva solo **dopo**, nella salita.
:::

## Rimbalzo su una parete: impulso sì, lavoro no

Un pallone di $1\,\mathrm{kg}$ urta una parete a $3\,\mathrm{m/s}$ e rimbalza con la stessa velocità. La sua quantità di moto cambia di $|\Delta p| = 2\cdot 1\cdot 3 = 6\,\mathrm{kg\cdot m/s}$: la parete gli ha dato un impulso. Ma il **lavoro compiuto sulla parete è zero**, perché la parete non si sposta (il lavoro richiede uno spostamento del punto di applicazione). Coerentemente, l'energia cinetica del pallone non è cambiata: l'urto è elastico.

## Densità (richiamo)

Una domanda di questa lezione chiede la densità di una pomata; la teoria completa è nella lezione 26. La densità è massa per unità di volume, $\rho = m/V$, in $\mathrm{kg/m^3}$. Conversioni: $1\,\mathrm{ml} = 1\,\mathrm{cm^3}$ e $1\,\mathrm{g/cm^3} = 1\,\mathrm{g/ml} = 1\,\mathrm{kg/l} = 1000\,\mathrm{kg/m^3}$.

::: esempio
Tubetto di $50\,\mathrm{ml}$ con $25\,\mathrm g$ di pomata: $\rho = 25/50 = 0{,}5\,\mathrm{g/cm^3} = 0{,}5\,\mathrm{kg/l} = 500\,\mathrm{kg/m^3}$ (non $0{,}5\,\mathrm{kg/m^3}$, che è mille volte più piccolo).
:::

::: attenzione
Conversioni che tornano sempre negli urti: **pesi** in newton → masse dividendo per $g$; **km/h** → m/s dividendo per $3{,}6$; **grammi** → kg dividendo per 1000. E le velocità vanno sempre con il **segno**: scegli un verso positivo prima di scrivere le equazioni.
:::

::: esame
Le domande aperte di questa lezione:
- **Perché negli urti si usa il sistema isolato?** Le forze d'urto sono interne (uguali e opposte, si annullano nella somma); le forze esterne agiscono per un tempo brevissimo e hanno impulso trascurabile ($F_{int}\Delta t\gg F^{(e)}\Delta t$); quindi durante l'urto il sistema è isolato e la quantità di moto totale si conserva.
- **Condizioni perché un'interazione sia un urto**: durata brevissima rispetto al tempo di osservazione; forze impulsive molto più intense di quelle esterne; posizioni praticamente invariate durante l'interazione.
- **Quando si conservano quantità di moto ed energia**: quantità di moto sempre (sistema isolato durante l'urto); energia cinetica solo negli urti elastici (forze d'interazione conservative); negli anelastici una parte va in calore e deformazione; l'energia potenziale non cambia perché le posizioni non cambiano.
- **Riassumere gli urti**: definizione, sistema isolato, conservazione di $\vec p$, classificazione con tabella, coefficiente di restituzione, formule dell'elastico unidimensionale e dei casi del bersaglio fermo, formula dei corpi uniti, descrizione nel centro di massa.
- **Urti anelastici**: conservazione di $\vec p$ ma non di $K$, dove va l'energia, coefficiente di restituzione $0\le e<1$, caso completamente anelastico con $v_f = (m_1v_1 + m_2v_2)/(m_1 + m_2)$ e perdita $\tfrac12\mu(v_1 - v_2)^2$, esempi (proiettile nel blocco, pendolo balistico).
- **Corpo che ne urta un altro e proseguono insieme**: è l'urto completamente anelastico: ricava $v_f$ dalla conservazione della quantità di moto, nota che $v_f = v_{cm}$, calcola l'energia persa (massima possibile, tutta l'energia relativa al centro di massa), fai un esempio numerico (vagoni: $V/2$, metà dell'energia persa).
:::

::: sintesi
- Lavoro delle forze interne $\neq 0$ in generale; $W^{(e)} + W^{(i)} = \Delta K$.
- Urto: interazione brevissima con forze impulsive interne; durante l'urto il sistema è isolato: $\vec P$ si conserva sempre (vettore).
- Elastico: si conserva anche $K$. Anelastico: $K$ diminuisce. Completamente anelastico: corpi uniti, $v_f = \frac{m_1v_1 + m_2v_2}{m_1 + m_2}$, perdita $\tfrac12\mu(v_1 - v_2)^2$.
- Coefficiente di restituzione $0\le e\le 1$.
- Nel centro di massa $\vec P\,' = 0$; nell'urto elastico le velocità si invertono: $v_f = 2v_{cm} - v_i$.
- Bersaglio fermo: $v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_1$, $v_{2f} = \frac{2m_1}{m_1 + m_2}v_1$; masse uguali si scambiano le velocità; $m_1\gg m_2$ bersaglio a $2v_1$; $m_1\ll m_2$ rimbalzo.
- Esplosione da fermo: $mv = -MV$; frammento più pesante più lento.
- Pendolo balistico: urto (conserva $p$), poi salita (conserva $E$), $V = \sqrt{2gh}$.
:::

=== 26 dispense
SLIDES: 25, 26, 23
# Lezione 26 — Gravitazione universale, densità ed equazioni cardinali

## Di che cosa parla questa lezione

Keplero, all'inizio del Seicento, aveva descritto con tre leggi le orbite dei pianeti, ma senza spiegarne la causa. Newton formulò la **legge di gravitazione universale**: una sola forza, che agisce tra due masse qualsiasi, spiega insieme le orbite dei pianeti, la caduta dei corpi e le maree. È uno dei grandi esempi dell'efficacia del metodo scientifico.

La dispensa segue il percorso "al contrario", più semplice da studiare: parte dalla legge di gravitazione e ne ricava la gravità terrestre, l'energia potenziale, la velocità di fuga, le leggi di Keplero e le orbite dei satelliti. Introduce anche il concetto di **campo**, che ritroveremo nell'elettromagnetismo. Le domande del paniere di questa lezione chiedono inoltre la **densità** e le **equazioni cardinali** dei sistemi, che trattiamo in fondo.

## Il concetto di campo

### Definizione

In una regione dello spazio esiste un **campo** quando a ogni punto della regione si può associare il valore di una certa grandezza fisica. Il campo è prodotto da una **sorgente** (una massa, una carica).
- Se la grandezza è un numero (temperatura, pressione) il campo è **scalare**.
- Se è un vettore (forza per unità di massa, velocità del vento) il campo è **vettoriale**.

### Linee di forza

Un campo vettoriale si rappresenta con le **linee di forza**: linee che in ogni punto hanno per **tangente** la direzione del vettore del campo in quel punto. Si costruiscono così: parto da un punto A e mi sposto un poco lungo il vettore del campo fino a B; lì il vettore è in generale diverso, e mi sposto lungo il nuovo vettore fino a C, e così via. Ottengo una spezzata; più piccoli sono i passi, più la spezzata si avvicina alla linea di forza.

Proprietà:
- per ogni punto passa **una e una sola** linea di forza;
- due linee di forza diverse **non si incontrano mai** (altrimenti nel punto d'incontro il campo avrebbe due direzioni);
- le linee si orientano nel verso del campo.

**Convenzione di Faraday**: il numero di linee che attraversano una superficie unitaria perpendicolare a esse è proporzionale all'intensità del campo. Quindi dalle linee si leggono:
- **direzione**: la tangente alla linea;
- **verso**: quello della linea;
- **intensità**: dove le linee sono più fitte il campo è più intenso, dove sono più rade è più debole.

## Legge di gravitazione universale

### Enunciato

Due punti materiali di massa $m_1$ e $m_2$, a distanza $r$, si attraggono con una forza diretta lungo la loro congiungente, di intensità:

$$F = G\,\frac{m_1m_2}{r^2}$$

dove:
- $F$ = modulo della forza, in $\mathrm N$;
- $G = 6{,}67\cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}$ (equivalente a $\mathrm{m^3/(kg\cdot s^2)}$) = **costante di gravitazione universale**;
- $m_1$, $m_2$ = masse, in $\mathrm{kg}$;
- $r$ = distanza tra i due punti, in $\mathrm m$.

### Forma vettoriale

Sia $\hat u_r$ il versore della congiungente, orientato da 1 a 2. La forza che la massa 1 esercita sulla massa 2 punta verso 1, cioè in verso opposto a $\hat u_r$:

$$\vec F_{12\to 2} = -G\,\frac{m_1m_2}{r^2}\,\hat u_r$$

e la forza di 2 su 1 è uguale e opposta, secondo il principio di azione e reazione.

### Caratteristiche

- È sempre **attrattiva**.
- È diretta lungo la **congiungente** (forza **centrale**).
- Le due forze sono **uguali e opposte** (terzo principio): la mela attira la Terra con la stessa forza con cui la Terra attira la mela.
- Diminuisce con il **quadrato della distanza**: a distanza doppia la forza è un quarto.
- Agisce **a distanza** ed è **indipendente dal mezzo** in cui sono immerse le masse e da eventuali corpi interposti (non si può "schermare").
- $G$ è piccolissima: tra oggetti di uso comune la forza è impercettibile; diventa importante solo quando almeno una massa è enorme (pianeti, stelle).

## Campo gravitazionale

### Definizione

Mettiamo una massa $M$ nell'origine di un riferimento inerziale. Su una massa $m$ in posizione $\vec r$ agisce la forza di gravitazione. Si definisce **campo gravitazionale** generato da $M$ la forza per unità di massa:

$$\vec{\mathcal G}(\vec r) = \frac{\vec F_g}{m} = -\frac{GM}{r^2}\,\hat u_r$$

dove $\hat u_r$ è il versore che punta da $M$ verso il punto considerato e il segno meno indica che il campo punta **verso** $M$. Il campo si misura in $\mathrm{N/kg}$, che è lo stesso di $\mathrm{m/s^2}$: il campo gravitazionale è un'**accelerazione**. Le sue linee di forza sono rette radiali dirette verso la massa, più fitte vicino a essa.

Il campo non dipende dalla massa $m$ di prova: è una proprietà dello spazio attorno a $M$. Una qualunque massa messa lì subisce la forza $\vec F = m\vec{\mathcal G}$.

### Il campo gravitazionale è conservativo

Calcoliamo il lavoro della forza gravitazionale su $m$ che va da A a B. Scomponiamo lo spostamento $d\vec s$ in una parte radiale $dr$ e una trasversale: la forza è radiale, quindi lavora solo la parte radiale.

$$W_{AB} = \int_A^B\vec F\cdot d\vec s = \int_{r_A}^{r_B}\left(-\frac{GMm}{r^2}\right)dr = GMm\left[\frac1r\right]_{r_A}^{r_B} = GMm\left(\frac{1}{r_B} - \frac{1}{r_A}\right)$$

Il risultato dipende **solo** dalle distanze iniziale e finale, non dal percorso: la forza gravitazionale è **conservativa**.

### Energia potenziale gravitazionale

Per una forza conservativa $W_{AB} = U_A - U_B$. Confrontando:

$$U(r) = -\frac{GMm}{r} + \text{costante}$$

Si sceglie la costante in modo che $U = 0$ a distanza **infinita**:

$$U = -\frac{GMm}{r}$$

dove $U$ è in $\mathrm J$. Osservazioni:
- $U$ è sempre **negativa** e cresce (verso zero) allontanandosi: per portare un corpo all'infinito bisogna **fornire** energia.
- Verifica: per una forza centrale $\vec F = -\dfrac{dU}{dr}\hat u_r = -\dfrac{d}{dr}\left(-\dfrac{GMm}{r}\right)\hat u_r = -\dfrac{GMm}{r^2}\hat u_r$. ✓
- Vicino alla superficie, per piccoli dislivelli, questa formula si riduce alla familiare $U = mgh$ (a meno di una costante).

### Più masse: sovrapposizione e sfere omogenee

Per la forza e il campo gravitazionale vale il **principio di sovrapposizione**: la forza su una massa $m_0$ in presenza di $N$ masse è la somma vettoriale delle forze dovute a ciascuna:

$$\vec F_{tot} = \vec F_{10} + \vec F_{20} + \dots + \vec F_{N0}$$

Questo vale anche per distribuzioni continue di massa. Un risultato importante (dovuto a Newton): **una massa distribuita in modo omogeneo in una sfera esercita all'esterno la stessa forza che eserciterebbe se tutta la massa fosse concentrata nel centro**. Per una massa $m$ a distanza $h$ dalla superficie di una sfera di raggio $R$ e massa $M$:

$$F = G\,\frac{Mm}{(R + h)^2}$$

dove $R + h$ è la distanza dal **centro**. Per questo per la Terra si usa sempre la distanza dal centro, non dalla superficie.

## Campo gravitazionale terrestre

### L'accelerazione di gravità

Approssimando la Terra come una sfera omogenea di massa $M_T$ e raggio $R_T$, su una massa $m$ vicino alla superficie agisce:

$$\vec F_g = -m\,\frac{GM_T}{R_T^2}\,\hat u_r$$

con $\hat u_r$ verticale. Il campo sulla superficie è proprio l'**accelerazione di gravità** usata in cinematica e dinamica:

$$g = \frac{GM_T}{R_T^2}\approx 9{,}8\,\mathrm{m/s^2}$$

dove $M_T\approx 5{,}97\cdot 10^{24}\,\mathrm{kg}$ è la massa della Terra e $R_T\approx 6{,}37\cdot 10^6\,\mathrm m$ il raggio medio.

Questa relazione permette di "pesare la Terra": conoscendo $g$, $R_T$ e $G$, $M_T = gR_T^2/G = 9{,}8\cdot(6{,}37\cdot 10^6)^2/6{,}67\cdot 10^{-11}\approx 5{,}96\cdot 10^{24}\,\mathrm{kg}$.

### Peso

Il peso di un corpo è $P = mg$. Su $1\,\mathrm{kg}$ vale $9{,}8\,\mathrm N$, cioè **circa $10\,\mathrm N$**.

::: attenzione
Sulla superficie terrestre la forza di gravità ha la **stessa direzione** per tutti i corpi: verticale, verso il centro della Terra. L'**intensità** invece dipende dalla massa ($P = mg$): un corpo più pesante subisce una forza più grande. Ma l'**accelerazione** è la stessa, $g$, per tutti: la massa si semplifica in $mg = ma$. Quindi "la gravità ha la stessa intensità per tutti" è falso, "ha la stessa direzione per tutti" è vero.
:::

### Gravità in quota

A una quota $h$ sopra la superficie la distanza dal centro è $R + h$:

$$g(h) = \frac{GM_T}{(R + h)^2} = \frac{GM_T}{R^2}\cdot\frac{R^2}{(R + h)^2} = g_0\left(\frac{R}{R + h}\right)^2$$

dove:
- $g(h)$ = accelerazione di gravità alla quota $h$, in $\mathrm{m/s^2}$;
- $g_0 = 9{,}8\,\mathrm{m/s^2}$ = valore sulla superficie;
- $R$ = raggio terrestre e $h$ = quota, nella **stessa unità** (entrambi in m o entrambi in km, perché compaiono in un rapporto).

Per quote piccole rispetto al raggio ($h\ll R$) vale l'approssimazione $g(h)\approx g_0\left(1 - \dfrac{2h}{R}\right)$: a $10\,\mathrm{km}$ di quota $g$ cala solo dello $0{,}3\%$. Per questo nei problemi ordinari $g$ si considera costante.

::: esempio
Con $R\approx 6000\,\mathrm{km}$, quanto vale $g$ a $300\,\mathrm{km}$ di quota?

$$g = 9{,}8\cdot\left(\frac{6000}{6300}\right)^2 = 9{,}8\cdot(0{,}952)^2 = 9{,}8\cdot 0{,}907\approx 8{,}9\,\mathrm{m/s^2}$$
:::

## Velocità di fuga

### Definizione

Un oggetto lanciato verso l'alto rallenta per effetto della gravità e ricade. Esiste però una velocità limite, la **velocità di fuga**: la velocità **minima** con cui va lanciato un corpo dalla superficie di un pianeta perché si allontani indefinitamente e non ricada più.

### Derivazione passo per passo

1. Trascurando l'aria, si conserva l'energia meccanica tra il lancio (superficie, $r = R_T$) e "l'infinito":
$$\tfrac12 mv_{in}^2 - \frac{GM_Tm}{R_T} = K_{fin} + U_{fin}$$
2. All'infinito $U_{fin} = 0$ per definizione, e $K_{fin}\geq 0$ (l'energia cinetica non è mai negativa). Quindi perché il corpo arrivi all'infinito serve:
$$\tfrac12 mv_{in}^2 - \frac{GM_Tm}{R_T}\geq 0$$
3. La velocità minima è quella che rende l'espressione uguale a zero (il corpo arriva all'infinito con velocità nulla):
$$\tfrac12 mv^2 = \frac{GM_Tm}{R_T}\quad\Rightarrow\quad v_{fuga} = \sqrt{\frac{2GM_T}{R_T}}$$

### Osservazioni

- **Non dipende dalla massa** del corpo lanciato: $m$ si semplifica.
- Per la Terra: $v_{fuga} = \sqrt{2\cdot 6{,}67\cdot 10^{-11}\cdot 5{,}97\cdot 10^{24}/6{,}37\cdot 10^6}\approx 11{,}2\,\mathrm{km/s}$.
- La formula vale per qualunque corpo celeste, con la sua massa e il suo raggio (per la Luna circa $2{,}4\,\mathrm{km/s}$).
- Usando $g = GM_T/R_T^2$ si può anche scrivere $v_{fuga} = \sqrt{2gR_T}$.
- In termini di energia: il corpo sfugge se la sua energia meccanica totale è $\geq 0$; se è negativa resta "legato" al pianeta.

## Le leggi di Keplero

Keplero ricavò dalle osservazioni astronomiche tre leggi che descrivono le orbite dei pianeti del Sistema Solare.

1. **Prima legge**: tutti i pianeti si muovono su **orbite ellittiche**, e il Sole occupa uno dei due **fuochi**. Si ricava risolvendo la traiettoria a partire dalla conservazione dell'energia scritta in coordinate polari.
2. **Seconda legge** (delle aree): il raggio vettore che unisce il Sole al pianeta spazza **aree uguali in tempi uguali**, cioè la **velocità areolare** è costante. Di conseguenza il pianeta va **più veloce** quando è vicino al Sole (perielio) e più lento quando è lontano (afelio). Si ricava dalla conservazione del momento angolare.
3. **Terza legge**: per tutti i pianeti, il rapporto tra il **quadrato del periodo** di rivoluzione e il **cubo del semiasse maggiore** dell'orbita è lo stesso:
$$\frac{T^2}{a^3} = \text{costante} = \frac{4\pi^2}{GM_S}$$
dove $T$ è il periodo (in $\mathrm s$), $a$ il semiasse maggiore (in $\mathrm m$), $M_S$ la massa del Sole (in $\mathrm{kg}$). La costante dipende solo dalla massa del corpo centrale.

### Dimostrazione della seconda legge (dalla dispensa)

1. La forza gravitazionale del Sole sul pianeta è diretta lungo la congiungente: è **antiparallela** a $\vec r$ (polo nel Sole). Quindi il suo momento è nullo: $\vec M = \vec r\times\vec F = 0$.
2. Per il teorema del momento angolare $d\vec L/dt = \vec M = 0$: il momento angolare del pianeta rispetto al Sole è **costante**.
3. Prima conseguenza: $\vec L$ è sempre perpendicolare a $\vec r$ e $\vec v$; se la sua direzione è fissa, $\vec r$ e $\vec v$ stanno sempre nello stesso piano: l'orbita è **piana**.
4. Scriviamo $\vec L = \vec r\times m\vec v = \vec r\times m\dfrac{d\vec s}{dt}$, costante.
5. Il modulo di un prodotto vettoriale è l'area del parallelogramma costruito sui due vettori. Nel tempo $dt$ il raggio vettore spazza il triangolo di lati $\vec r$ e $d\vec s$, la cui area è metà del parallelogramma: $dA = \tfrac12|\vec r\times d\vec s|$.
6. Velocità areolare:
$$\frac{dA}{dt} = \frac12\left|\vec r\times\frac{d\vec s}{dt}\right| = \frac{|\vec L|}{2m} = \text{costante}$$

### Dimostrazione della terza legge per orbite circolari (dalla dispensa)

Approssimiamo l'orbita con una circonferenza di raggio $R$ centrata nel Sole (il semiasse coincide con il raggio). La gravità fornisce la forza centripeta del moto circolare uniforme, $m\omega^2R$ con $\omega = 2\pi/T$:

$$\frac{GM_Sm}{R^2} = m\left(\frac{2\pi}{T}\right)^2R \quad\Rightarrow\quad \frac{GM_S}{R^2} = \frac{4\pi^2}{T^2}R \quad\Rightarrow\quad \frac{R^3}{T^2} = \frac{GM_S}{4\pi^2}$$

Il secondo membro contiene solo costanti: il rapporto $R^3/T^2$ (o il suo inverso $T^2/R^3$) è lo stesso per tutti i pianeti. Nota: la massa del pianeta si semplifica.

::: esempio
**Se il semiasse dell'orbita terrestre fosse la metà**, quanto durerebbe l'anno? Dalla terza legge $T\propto a^{3/2}$:
$$T' = T\left(\frac{a'}{a}\right)^{3/2} = 365\cdot\left(\frac12\right)^{3/2} = 365\cdot 0{,}354\approx 129\,\text{giorni}$$
:::

::: esempio
**Periodo di Giove (dalla dispensa).** La distanza media di Giove dal Sole è $5{,}205$ volte quella della Terra. Applicando la terza legge a Giove e alla Terra (stesso Sole, stessa costante):
$$\frac{T_G^2}{a_G^3} = \frac{T_T^2}{a_T^3}\Rightarrow T_G = T_T\left(\frac{a_G}{a_T}\right)^{3/2} = 1\,\text{anno}\cdot 5{,}205^{3/2}\approx 11{,}9\,\text{anni}$$
:::

::: esempio
**Pianeta attorno a una stella (dalla dispensa).** Un pianeta impiega $300$ giorni terrestri a orbitare attorno a una stella di massa $M = 6{,}0\cdot 10^{30}\,\mathrm{kg}$.

1. $T = 300\cdot 86\,400 = 2{,}59\cdot 10^7\,\mathrm s$.
2. (a) Dalla terza legge $R^3 = \dfrac{GMT^2}{4\pi^2} = \dfrac{6{,}67\cdot 10^{-11}\cdot 6{,}0\cdot 10^{30}\cdot(2{,}59\cdot 10^7)^2}{39{,}5}\approx 6{,}8\cdot 10^{33}\,\mathrm{m^3}$, quindi $R\approx 1{,}9\cdot 10^{11}\,\mathrm m$.
3. (b) Velocità: $v = \dfrac{2\pi R}{T} = \dfrac{2\pi\cdot 1{,}9\cdot 10^{11}}{2{,}59\cdot 10^7}\approx 4{,}59\cdot 10^4\,\mathrm{m/s} = 45{,}9\,\mathrm{km/s}$.
:::

## Satelliti in orbita circolare

### Velocità e periodo

Un satellite di massa $m$ in orbita circolare di raggio $r$ (misurato dal **centro** della Terra) si muove di moto circolare uniforme: l'accelerazione centripeta $v^2/r$ è fornita dalla gravità.

$$\frac{GM_Tm}{r^2} = m\frac{v^2}{r}\quad\Rightarrow\quad v = \sqrt{\frac{GM_T}{r}}$$

È la velocità alla quale, mentre il satellite "cade" verso la Terra, la superficie curva sotto di lui della stessa quantità, così che resta sempre alla stessa quota. Il periodo è:

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM_T}}$$

che è un caso particolare della terza legge di Keplero. Né $v$ né $T$ dipendono dalla massa del satellite. Più l'orbita è alta, più il satellite è lento e il periodo lungo.

### Quanto bassa può essere un'orbita?

Senza atmosfera e con una Terra liscia si potrebbe orbitare anche al livello del mare. Ma muovendosi nell'aria il satellite la spinge e, per il terzo principio, l'aria lo frena: la velocità orbitale non resterebbe costante. L'orbita più bassa possibile è alla quota in cui l'aria è abbastanza rarefatta: circa **150 km**. Esempi:
- lo shuttle orbitava a circa $250\,\mathrm{km}$ di quota, a circa $8\,\mathrm{km/s}$, con periodo di circa $1\,\mathrm h\,30\,\mathrm{min}$ (verifica: $r = 6{,}62\cdot 10^6\,\mathrm m$, $v = \sqrt{3{,}99\cdot 10^{14}/6{,}62\cdot 10^6}\approx 7{,}8\,\mathrm{km/s}$, $T\approx 89\,\mathrm{min}$);
- i satelliti GPS stanno a circa $20\,000\,\mathrm{km}$ di quota con $T = 12\,\mathrm h$.

### Orbita geosincrona e geostazionaria

Un'orbita è **geosincrona** se il periodo dura esattamente un giorno, $T = 24\,\mathrm h = 8{,}64\cdot 10^4\,\mathrm s$. Dalla formula del periodo:

$$r = \left(\frac{GM_TT^2}{4\pi^2}\right)^{1/3} = \left(\frac{3{,}99\cdot 10^{14}\cdot(8{,}64\cdot 10^4)^2}{39{,}5}\right)^{1/3}\approx 4{,}22\cdot 10^7\,\mathrm m$$

cioè circa $42\,200\,\mathrm{km}$ dal centro, circa $35\,800\,\mathrm{km}$ di quota. A quell'altezza la velocità orbitale è circa $3{,}1\,\mathrm{km/s}$.

Se l'orbita geosincrona sta **nel piano dell'equatore** e il satellite gira **nello stesso verso** della rotazione terrestre, l'orbita si dice **geostazionaria**: il satellite resta sempre sopra lo stesso punto dell'equatore. È l'orbita dei satelliti per telecomunicazioni e meteorologici (le antenne paraboliche restano puntate fisse).

## Densità

### Definizione

La **densità** (o massa volumica) è la massa per unità di volume. Per un corpo omogeneo:

$$\rho = \frac{m}{V}\qquad m = \rho V\qquad V = \frac m\rho$$

dove $\rho$ è in $\mathrm{kg/m^3}$, $m$ in $\mathrm{kg}$, $V$ in $\mathrm{m^3}$. Per un corpo non omogeneo la densità cambia da punto a punto e si definisce localmente $\rho = dm/dV$; la massa totale è $M = \int\rho\,dV$ (lezione 27). Per masse distribuite su una superficie o lungo una linea si usano la densità superficiale $\sigma = dm/dS$ ($\mathrm{kg/m^2}$) e lineare $\lambda = dm/dl$ ($\mathrm{kg/m}$).

### Conversioni

- $1\,\mathrm l = 1\,\mathrm{dm^3} = 10^{-3}\,\mathrm{m^3}$; $1\,\mathrm{ml} = 1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$.
- $1000\,\mathrm{kg/m^3} = 1\,\mathrm{kg/dm^3} = 1\,\mathrm{kg/l} = 1\,\mathrm{g/cm^3} = 1\,\mathrm{g/ml}$.

Perché $1\,\mathrm{g/cm^3} = 1000\,\mathrm{kg/m^3}$: $1\,\mathrm g = 10^{-3}\,\mathrm{kg}$ e $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$, quindi $1\,\mathrm{g/cm^3} = 10^{-3}/10^{-6}\,\mathrm{kg/m^3} = 10^3\,\mathrm{kg/m^3}$. Per passare da $\mathrm{kg/m^3}$ a $\mathrm{g/cm^3}$ si **divide** per 1000.

| Sostanza | $\rho$ ($\mathrm{kg/m^3}$) | $\rho$ ($\mathrm{g/cm^3}$) |
|---|---|---|
| benzina | 720 | 0,72 |
| acqua | 1000 | 1,00 |
| zucchero | 1580 | 1,58 |
| Terra (media) | 5500 | 5,5 |
| mercurio | 13 500 | 13,5 |
| oro | 19 300 | 19,3 |

### Stati della materia

Solidi e liquidi hanno un **volume proprio**; i liquidi sono praticamente **incomprimibili**, quindi la loro densità è costante e definita, mentre la forma si adatta al recipiente. I gas non hanno né forma né volume propri: sono comprimibili e la loro densità cambia con pressione e temperatura.

### Densità e volume a parità di massa

Da $V = m/\rho$: a parità di massa, il volume è **inversamente proporzionale** alla densità. Il mercurio è $13\,500/1000 = 13{,}5$ volte più denso dell'acqua, quindi una certa massa di mercurio occupa un volume **13,5 volte minore** della stessa massa d'acqua.

::: esempio
**Un litro d'oro.** $V = 1\,\mathrm l = 10^{-3}\,\mathrm{m^3}$: $m = \rho V = 19\,300\cdot 10^{-3} = 19{,}3\,\mathrm{kg}$.
:::

::: esempio
**Barra d'oro da 1 kg.** $V = m/\rho = 1/19\,300\approx 5{,}18\cdot 10^{-5}\,\mathrm{m^3}$ (circa $52\,\mathrm{cm^3}$).
:::

::: esempio
**Sacchetto di zucchero.** $1{,}5\,\mathrm{kg}$ con $\rho = 1{,}58\cdot 10^3\,\mathrm{kg/m^3}$: $V = 1{,}5/1580\approx 9{,}5\cdot 10^{-4}\,\mathrm{m^3} = 0{,}95\,\mathrm l$.
:::

::: esempio
**Benzina.** $720\,\mathrm{kg/m^3} = 0{,}72\,\mathrm{kg/dm^3} = 0{,}72\,\mathrm{kg/l} = 0{,}72\,\mathrm{g/cm^3}$. L'affermazione "$720\,\mathrm{g/cm^3}$" è **falsa**: è mille volte troppo grande (più di trenta volte l'oro).
:::

::: esempio
**Massa della Terra dalla densità media.** Conoscendo il raggio $R = 6{,}37\cdot 10^6\,\mathrm m$ e la densità media $5500\,\mathrm{kg/m^3}$:
1. volume della sfera $V = \tfrac43\pi R^3 = \tfrac43\pi(6{,}37\cdot 10^6)^3\approx 1{,}08\cdot 10^{21}\,\mathrm{m^3}$;
2. massa $M = \rho V = 5500\cdot 1{,}08\cdot 10^{21}\approx 5{,}95\cdot 10^{24}\,\mathrm{kg}$,
in accordo con il valore ricavato da $g$.
:::

## Equazioni cardinali della dinamica dei sistemi

### Le due equazioni

Il **teorema del moto del centro di massa** (lezione 22) e il **teorema del momento angolare** per i sistemi (lezione 23) prendono insieme il nome di **equazioni cardinali** della dinamica dei sistemi di punti:

$$\text{I)}\ \ \frac{d\vec P}{dt} = \vec R^{(e)}\qquad\qquad \text{II)}\ \ \frac{d\vec L}{dt} = \vec M^{(e)}$$

dove:
- $\vec P = \sum m_i\vec v_i = M\vec v_{cm}$ = quantità di moto totale, in $\mathrm{kg\cdot m/s}$;
- $\vec R^{(e)}$ = risultante delle forze **esterne**, in $\mathrm N$;
- $\vec L = \sum\vec r_i\times m_i\vec v_i$ = momento angolare totale, in $\mathrm{kg\cdot m^2/s}$;
- $\vec M^{(e)}$ = momento totale delle forze **esterne**, in $\mathrm{N\cdot m}$, calcolato rispetto a un polo **fisso** in un riferimento inerziale o coincidente con il **centro di massa**.

### Da dove vengono (in breve)

- **Prima**: si sommano le equazioni $m_i\vec a_i = \sum_j\vec F_{ij} + \vec R_i^{(e)}$ di tutti i punti; le forze interne si annullano a coppie (terzo principio) e resta $M\vec a_{cm} = \vec R^{(e)}$.
- **Seconda**: si deriva $\vec L$; il momento delle forze interne è nullo perché le forze di ogni coppia sono uguali, opposte e sulla stessa retta; con polo fisso o nel centro di massa sparisce anche il termine $\vec v_O\times M\vec v_{cm}$, e resta $d\vec L/dt = \vec M^{(e)}$.

### Significato

- La prima governa la **traslazione** (il moto del centro di massa), la seconda la **rotazione**.
- Contengono **solo forze e momenti esterni**: quelli interni si annullano a coppie. Per questo hanno una forma semplice.
- Descrivono il moto **d'insieme** del sistema, non i dettagli delle singole parti (un sistema di punti qualsiasi ha molti più gradi di libertà delle 6 equazioni scalari).
- Per un **corpo rigido**, dove le distanze tra i punti sono fissate e i gradi di libertà sono 6, le 6 equazioni scalari bastano a determinare **tutto** il moto (lezione 27).
- Conseguenze: se $\vec R^{(e)} = 0$ si conserva $\vec P$; se $\vec M^{(e)} = 0$ si conserva $\vec L$; se entrambi sono nulli e il corpo è fermo, resta in **equilibrio**.

::: esame
Le domande aperte di questa lezione:
- **Esporre le leggi di Keplero**: enuncia le tre leggi (ellissi con il Sole in un fuoco; aree uguali in tempi uguali; $T^2/a^3$ costante), spiega che la seconda viene dalla conservazione del momento angolare (forza centrale, momento nullo, velocità areolare $|\vec L|/2m$) e ricava la terza per orbite circolari uguagliando gravità e forza centripeta ($R^3/T^2 = GM/4\pi^2$); un esempio numerico.
- **Velocità di fuga**: definizione (velocità minima per allontanarsi indefinitamente), derivazione dalla conservazione dell'energia con $U = -GMm/r$ e $U_\infty = 0$, formula $\sqrt{2GM/R}$, valore per la Terra $11{,}2\,\mathrm{km/s}$, indipendenza dalla massa del corpo.
- **Equazioni cardinali**: scrivile, spiega i simboli, da dove vengono e perché contengono solo grandezze esterne, la validità della seconda (polo fisso o centro di massa), che descrivono traslazione e rotazione d'insieme e che per il corpo rigido bastano a determinare il moto (6 equazioni per 6 gradi di libertà); conseguenze sulla conservazione e sull'equilibrio.

Nelle chiuse: conversioni di densità ($\mathrm{g/cm^3}\leftrightarrow\mathrm{kg/m^3}$, litri), $m = \rho V$ e $V = m/\rho$, $g$ in quota con il rapporto al quadrato, peso di $1\,\mathrm{kg}\approx 10\,\mathrm N$, direzione della gravità uguale per tutti, terza legge di Keplero con $T\propto a^{3/2}$.
:::

::: sintesi
- Campo: grandezza associata a ogni punto; linee di forza tangenti al campo, più fitte dove è intenso (Faraday), non si incrociano.
- $F = Gm_1m_2/r^2$, attrattiva, lungo la congiungente, indipendente dal mezzo; $G = 6{,}67\cdot 10^{-11}\,\mathrm{N\,m^2/kg^2}$.
- Campo $\vec{\mathcal G} = -\frac{GM}{r^2}\hat u_r$ ($\mathrm{N/kg} = \mathrm{m/s^2}$); conservativo; $U = -GMm/r$ con $U_\infty = 0$.
- Sfera omogenea = massa nel centro. $g = GM_T/R_T^2\approx 9{,}8\,\mathrm{m/s^2}$; $g(h) = g_0\left(\frac{R}{R + h}\right)^2$; stessa direzione per tutti.
- $v_{fuga} = \sqrt{2GM/R}\approx 11{,}2\,\mathrm{km/s}$ per la Terra, indipendente dalla massa.
- Keplero: ellissi; aree uguali in tempi uguali (conservazione di $L$); $T^2/a^3 = 4\pi^2/GM$.
- Satelliti: $v = \sqrt{GM/r}$, $T = 2\pi\sqrt{r^3/GM}$; geostazionaria: 24 h, equatoriale, $r\approx 42\,200\,\mathrm{km}$.
- $\rho = m/V$; $1\,\mathrm{g/cm^3} = 1\,\mathrm{kg/l} = 1000\,\mathrm{kg/m^3}$; a pari massa più denso = meno volume.
- Equazioni cardinali: $d\vec P/dt = \vec R^{(e)}$, $d\vec L/dt = \vec M^{(e)}$.
:::

=== 27 dispense
SLIDES: 26
# Lezione 27 — Corpo rigido, baricentro ed equilibrio statico

## Di che cosa parla questa lezione

Il **corpo rigido** è il modello degli oggetti solidi che non si deformano: travi, scale, ruote, torri. È un caso particolare di sistema di punti, in cui le distanze tra i punti non cambiano mai. Questa proprietà semplifica moltissimo le cose: il moto del corpo rigido è completamente determinato dalle due **equazioni cardinali** della lezione precedente.

In questa lezione vediamo: che cos'è un corpo rigido e quanti numeri servono a descriverlo, le equazioni cardinali applicate al corpo rigido, la **densità** e il centro di massa dei corpi continui, le **condizioni di equilibrio statico**, la scelta del polo, il **baricentro** come centro delle forze parallele e l'**equilibrio dei corpi appoggiati**, con gli esercizi della dispensa (scala, asta, nodo, Torre di Pisa). La rotazione attorno a un asse e il momento d'inerzia sono sviluppati nella lezione 28.

## Il corpo rigido

### Definizione

Un **corpo rigido** è un sistema di punti materiali (discreti o distribuiti in modo continuo) le cui **distanze reciproche sono fissate** e non cambiano nel tempo. È un'idealizzazione: ogni corpo reale si deforma un poco sotto sforzo, ma se le deformazioni sono trascurabili il modello funziona benissimo.

### Il moto di un corpo rigido

Il moto più generale di un corpo rigido è la composizione di due moti:
- una **traslazione** rigida, rappresentata dal moto del **centro di massa**: tutti i punti si spostano come lui, e la configurazione degli altri punti rispetto al centro di massa non cambia;
- una **rotazione** istantanea attorno a un **asse** (che in generale può cambiare nel tempo).

### Gradi di libertà

Si chiama **numero di gradi di libertà** di un sistema il numero di parametri indipendenti necessari per descriverne la posizione. Per un corpo rigido libero nello spazio servono **6** numeri:
- le **3 coordinate** del centro di massa;
- **2 angoli** ($\theta$ e $\varphi$) che individuano la direzione dell'asse istantaneo di rotazione;
- **1 angolo** ($\psi$) che specifica di quanto il corpo è ruotato attorno a quell'asse.

Un punto materiale ha 3 gradi di libertà; un sistema di $N$ punti liberi ne ha $3N$. Il vincolo di rigidità li riduce a 6, qualunque sia il numero di punti.

## Equazioni cardinali per il corpo rigido

Le forze interne (e i loro momenti) hanno come unico effetto possibile il movimento **relativo** dei punti del sistema. In un corpo rigido i punti non possono muoversi l'uno rispetto all'altro, quindi le forze interne non hanno alcun effetto sul moto. La dinamica del corpo rigido è determinata **esclusivamente** dalle due equazioni cardinali, in cui compaiono solo forze e momenti **esterni**:

$$\vec R^{(e)} = \frac{d\vec P}{dt} = M\,\vec a_{cm}\qquad\qquad \vec M^{(e)} = \frac{d\vec L}{dt}$$

dove:
- $\vec R^{(e)}$ = risultante delle forze esterne, in $\mathrm N$;
- $M$ = massa totale del corpo, in $\mathrm{kg}$; $\vec a_{cm}$ = accelerazione del centro di massa, in $\mathrm{m/s^2}$;
- $\vec M^{(e)}$ = momento totale delle forze esterne (polo fisso o centro di massa), in $\mathrm{N\cdot m}$;
- $\vec L$ = momento angolare del corpo, in $\mathrm{kg\cdot m^2/s}$.

Sono due equazioni vettoriali, cioè **6 equazioni scalari**: esattamente quante i 6 gradi di libertà. Per questo bastano a determinare il moto.
- La prima descrive la parte **traslatoria** del moto, comune a tutti i punti, che si muovono insieme al centro di massa.
- La seconda descrive la **rotazione** attorno a un asse: il comportamento di ciascun punto dipende dalla sua distanza dall'asse (velocità $v = \omega r$).

## Densità e corpi continui

### Massa distribuita

Il caso più comune è un corpo **continuo**: la massa è distribuita con continuità nel volume. Dividiamo il volume in tanti elementi piccolissimi $dV$, ciascuno di massa $dm$. La massa totale è la somma delle masse degli elementi; al limite di elementi infinitesimi la somma diventa un integrale:

$$M = \sum_i dm_i\ \longrightarrow\ M = \int_V dm = \int_V\rho\,dV$$

dove compare la **densità** (o massa volumica):

$$\rho = \frac{dm}{dV}$$

in $\mathrm{kg/m^3}$. La funzione $\rho(\vec r)$ descrive completamente come la massa è distribuita nello spazio.

Un corpo si dice **omogeneo** se la densità è la stessa in tutto il volume. In tal caso:

$$\rho = \frac MV$$

### Centro di massa di un corpo continuo

La definizione del centro di massa di un sistema di punti, $\vec r_{cm} = \sum m_i\vec r_i/M$, diventa per un corpo continuo:

$$\vec r_{cm} = \frac{1}{M}\int_V\vec r\,dm = \frac{\int_V\vec r\,\rho\,dV}{\int_V\rho\,dV}$$

Se il corpo è omogeneo $\rho$ è costante, esce dagli integrali e si semplifica:

$$\vec r_{cm} = \frac1V\int_V\vec r\,dV$$

Il centro di massa dipende solo dalla **forma** del corpo: coincide con il suo **centro geometrico**. Di conseguenza, un corpo omogeneo dotato di una **simmetria** ha il centro di massa nel **centro di simmetria**: una sfera omogenea nel centro della sfera, un cilindro omogeneo a metà dell'asse, un'asta omogenea a metà lunghezza, un parallelepipedo nel punto d'incontro delle diagonali. Se il corpo **non** è omogeneo il centro di massa può non coincidere con il centro geometrico: si sposta verso la parte più densa.

### Densità superficiale e lineare

Se la massa è distribuita su una superficie (una lastra sottile) o lungo una linea (un filo, un'asta sottile) si definiscono:

$$\sigma = \frac{dm}{dS}\ (\mathrm{kg/m^2})\qquad \lambda = \frac{dm}{dl}\ (\mathrm{kg/m})$$

e i centri di massa si calcolano allo stesso modo: $\vec r_{cm} = \frac1M\int\vec r\,\sigma\,dS$ oppure $\frac1M\int\vec r\,\lambda\,dl$. In un mezzo omogeneo: $\vec r_{cm} = \frac1S\int\vec r\,dS$ oppure $\frac1l\int\vec r\,dl$.

::: esempio
**Asta omogenea.** Un'asta di lunghezza $L$ e massa $M$ sta sull'asse $x$ tra $0$ e $L$; $\lambda = M/L$ costante.
$$x_{cm} = \frac1M\int_0^L x\,\lambda\,dx = \frac{\lambda}{M}\cdot\frac{L^2}{2} = \frac{M}{L}\cdot\frac1M\cdot\frac{L^2}{2} = \frac L2$$
Il centro di massa è a metà, come previsto dalla simmetria.
:::

## Condizioni di equilibrio

### Equilibrio statico

Un corpo rigido è in una **configurazione di equilibrio** se, essendo inizialmente in quiete, rimane fermo. Dalle equazioni cardinali si ricava la **condizione necessaria e sufficiente** per l'equilibrio:

$$\vec R^{(e)} = \sum\vec F_{est} = 0\qquad\text{e}\qquad \vec M^{(e)} = \sum\vec M_{est} = 0$$

Perché:
- se $\vec R^{(e)} = 0$, $d\vec P/dt = 0$: la quantità di moto è costante, il centro di massa non accelera (niente traslazione);
- se $\vec M^{(e)} = 0$, $d\vec L/dt = 0$: il momento angolare è costante, il corpo non inizia a ruotare.

Con entrambe le condizioni $\vec P$ e $\vec L$ sono costanti. Se il corpo è **inizialmente fermo** ($\vec P = 0$, $\vec L = 0$) resta fermo in un riferimento inerziale: è l'**equilibrio statico**. Le sei equazioni scalari che lo descrivono sono:

$$\vec P = 0\qquad \vec L = 0\qquad\Longleftrightarrow\qquad R_x = R_y = R_z = 0,\quad M_x = M_y = M_z = 0$$

Nei problemi **piani** (forze tutte in un piano) restano 3 equazioni utili: due per le forze ($\sum F_x = 0$, $\sum F_y = 0$) e una per i momenti ($\sum M = 0$, rispetto a un polo nel piano). Quindi si possono ricavare al massimo 3 incognite.

::: attenzione
La sola risultante nulla **non basta**. Una **coppia di forze** è formata da due forze uguali in modulo, opposte in verso e **non sulla stessa retta**. La risultante è zero, ma il momento vale $F\,d$ ($d$ = distanza tra le rette d'azione) e fa **ruotare** il corpo. Esempi: le due mani che girano il volante, le dita che girano una chiave, il cacciavite. Servono **entrambe** le condizioni.
:::

### Il momento di una coppia non dipende dal polo

Due forze $\vec F$ in A e $-\vec F$ in B. Rispetto a un polo O qualsiasi:

$$\vec M_O = \overrightarrow{OA}\times\vec F + \overrightarrow{OB}\times(-\vec F) = (\overrightarrow{OA} - \overrightarrow{OB})\times\vec F = \overrightarrow{BA}\times\vec F$$

Il risultato non contiene O: il momento della coppia è lo stesso per qualsiasi polo.

## La scelta del polo

### Con risultante nulla il momento non dipende dal polo

Dalla formula del cambio di polo (lezione 23), per un sistema di forze con risultante $\vec R$:

$$\vec M_O = \vec M_{O'} + \overrightarrow{OO'}\times\vec R$$

Se $\vec R = 0$ (prima condizione di equilibrio), $\vec M_O = \vec M_{O'}$ **per ogni coppia di poli**. Quindi in un problema di equilibrio si può calcolare il momento rispetto al polo **più comodo**: il risultato è lo stesso.

### Quale polo conviene

Conviene mettere il polo nel punto in cui agiscono le forze **sconosciute** (reazioni dei vincoli, attriti): quelle forze hanno braccio zero, spariscono dall'equazione dei momenti, e si può ricavare subito un'altra incognita. La scelta è dettata solo dalla comodità: con un altro polo si ottiene lo stesso risultato, con più termini da calcolare.

::: esempio
**Trave appoggiata con carico al centro.** Una trave leggera di $2\,\mathrm m$ è appoggiata agli estremi e regge $100\,\mathrm N$ al centro. Per simmetria le due reazioni sono uguali; dall'equilibrio delle forze $N_1 + N_2 = 100\,\mathrm N$, quindi $N_1 = N_2 = 50\,\mathrm N$.
:::

::: esempio
**Trave con carico non centrato.** La stessa trave regge $100\,\mathrm N$ a $0{,}5\,\mathrm m$ dall'estremo A.
1. Polo in A (sparisce $N_A$): $N_B\cdot 2 - 100\cdot 0{,}5 = 0\Rightarrow N_B = 25\,\mathrm N$.
2. Forze: $N_A = 100 - 25 = 75\,\mathrm N$.

L'appoggio più vicino al carico regge di più. Verifica con polo in B: $N_A\cdot 2 - 100\cdot 1{,}5 = 0\Rightarrow N_A = 75\,\mathrm N$. ✓
:::

## Forze parallele e baricentro

### Centro delle forze parallele

Consideriamo un sistema di punti su cui agiscono forze tutte **parallele** $\vec f_i = f_i\,\hat u$ (stessa direzione $\hat u$, intensità $f_i$ con segno). Si dimostra che questo sistema è **equivalente** a un'unica forza $\vec F$, uguale alla risultante, applicata nel punto C di posizione:

$$\vec F = \sum_i\vec f_i = \Big(\sum_i f_i\Big)\hat u\qquad \vec r_C = \frac{\sum_i f_i\,\vec r_i}{\sum_i f_i}$$

Il punto C si chiama **centro delle forze parallele**.

### Dimostrazione (dalla dispensa)

"Equivalente" vuol dire stessa risultante **e** stesso momento rispetto a qualsiasi polo. La risultante è uguale per definizione. Resta da verificare il momento rispetto all'origine:

$$\vec M = \sum_i\vec r_i\times\vec f_i = \sum_i\vec r_i\times f_i\hat u = \Big(\sum_i f_i\vec r_i\Big)\times\hat u$$

(ho portato fuori $\hat u$, che è lo stesso per tutte le forze). Dalla definizione di C, $\sum_i f_i\vec r_i = \big(\sum_i f_i\big)\vec r_C$, quindi:

$$\vec M = \vec r_C\times\Big(\sum_i f_i\Big)\hat u = \vec r_C\times\vec F$$

che è proprio il momento di un'unica forza $\vec F$ applicata in C. L'equivalenza è dimostrata. La stessa dimostrazione vale per corpi rigidi continui, con integrali al posto delle somme.

### Due forze parallele

Per due forze parallele la regola diventa pratica:
- **concordi** (stesso verso): la risultante ha intensità uguale alla **somma** delle intensità ed è applicata **tra** le due forze, in un punto che divide la loro distanza in parti **inversamente proporzionali** alle forze ($f_1d_1 = f_2d_2$): sta più vicino alla forza maggiore;
- **discordi** (verso opposto, intensità diverse): la risultante ha intensità uguale alla **differenza**, il verso della forza maggiore, ed è applicata **fuori** dal segmento, dalla parte della forza maggiore.

È la stessa regola del centro di massa di due punti e delle leve.

### Il baricentro

I pesi delle singole parti di un corpo sono un sistema di forze parallele: $\vec f_i = m_i\vec g$, tutte verticali verso il basso. Il loro centro si chiama **baricentro** (o centro di gravità). Con $f_i = m_ig$ e $g$ uguale per tutti i punti (campo **uniforme**), $g$ si semplifica:

$$\vec r_G = \frac{\sum_i m_ig\,\vec r_i}{\sum_i m_ig} = \frac{\sum_i m_i\vec r_i}{\sum_i m_i} = \vec r_{cm}$$

In un campo di gravità uniforme il **baricentro coincide con il centro di massa**. È il punto in cui si può considerare applicato **tutto il peso** del corpo, sia per la risultante ($Mg$) sia per i momenti. Per corpi omogenei e simmetrici è nel centro geometrico.

## Equilibrio di un corpo rigido appoggiato

Consideriamo un corpo appoggiato su un piano orizzontale. Agiscono:
- il **peso**, che si comporta come una forza unica $M\vec g$ applicata nel baricentro;
- le **reazioni vincolari** del piano, distribuite sulla superficie di appoggio. Anche loro sono forze parallele (verticali verso l'alto) ed equivalgono a una forza unica applicata in un punto della superficie di appoggio (il loro centro).

Due casi:
- La **verticale del baricentro cade dentro la base d'appoggio**. La risultante delle reazioni si dispone proprio su quella verticale: peso e reazione sono uguali, opposti e sulla **stessa retta**. Formano una "coppia a braccio nullo", con risultante nulla e momento nullo: il corpo è in **equilibrio**.
- La verticale del baricentro cade **fuori** dalla base. La reazione non può uscire dalla base: al massimo sta sul bordo. Peso e reazione non sono più sulla stessa retta e formano una **coppia** con momento non nullo: il corpo **si ribalta** ruotando attorno al bordo. Per evitarlo serve un vincolo in più, per esempio un fermo sullo spigolo opposto che fornisca il momento mancante.

Più il baricentro è **basso** e la base è **larga**, più si può inclinare il corpo prima che la verticale esca dalla base: l'equilibrio è più **stabile**. È per questo che i mezzi da lavoro hanno base larga e carichi bassi, e che ci si allarga sulle gambe per non cadere.

::: esempio
**La Torre di Pisa (dalla dispensa).** La cima è spostata di $4{,}5\,\mathrm m$ rispetto all'asse verticale. Modelliamo la torre come un cilindro omogeneo alto $55\,\mathrm m$ con diametro $7{,}0\,\mathrm m$ (raggio della base $3{,}5\,\mathrm m$).

(a) Essendo omogenea, il baricentro sta sull'asse a **metà altezza**. Lo spostamento orizzontale cresce linearmente con la quota, quindi il baricentro è spostato della **metà** della cima: $4{,}5/2 = 2{,}25\,\mathrm m$ dal centro della base. Poiché $2{,}25\,\mathrm m < 3{,}5\,\mathrm m$, la verticale del baricentro cade **dentro** la base: la torre non si ribalta.

(b) Il rischio di crollo comincia quando la verticale del baricentro arriva al bordo, a $3{,}5\,\mathrm m$ dal centro. La cima allora sarebbe spostata del doppio: $7{,}0\,\mathrm m$. In termini di angolo rispetto alla verticale: $\theta_{lim} = \arcsin\dfrac{7{,}0}{55}\approx 7{,}3°$.

Non è la larghezza della base da sola, né il peso grande, a tenerla in piedi: è la posizione della verticale del baricentro rispetto alla base.
:::

::: esempio
**Scala appoggiata al muro (dalla dispensa).** Una scala di massa $m = 3{,}5\,\mathrm{kg}$ e lunghezza $\ell$ è appoggiata a una parete verticale liscia e forma con il pavimento un angolo $\theta = 65°$; il coefficiente di attrito statico con il pavimento è $\mu_s = 0{,}36$.

**Forze**: peso $mg$ nel punto medio; reazione del muro $N_1$, orizzontale (muro liscio, niente attrito); reazione del pavimento $N_2$, verticale; attrito statico $F_s$ sul pavimento, orizzontale verso il muro.

**1. Reazioni.** Polo nel piede O della scala: $N_2$ e $F_s$ hanno braccio nullo. Bracci rispetto a O: per $N_1$ (orizzontale, applicata in cima, alta $\ell\sin\theta$) il braccio è $\ell\sin\theta$; per il peso (verticale, applicato a metà) è $\frac\ell2\cos\theta$.

$$\begin{cases}\sum F_x = 0: & F_s - N_1 = 0\\ \sum F_y = 0: & N_2 - mg = 0\\ \sum M_O = 0: & N_1\,\ell\sin\theta - mg\,\dfrac\ell2\cos\theta = 0\end{cases}$$

Dalla terza: $N_1 = \dfrac{mg}{2\tan\theta} = \dfrac{3{,}5\cdot 9{,}8}{2\cdot 2{,}145}\approx 8{,}0\,\mathrm N$. Dalla prima $F_s = N_1\approx 8{,}0\,\mathrm N$; dalla seconda $N_2 = mg\approx 34{,}3\,\mathrm N$. ($\ell$ si semplifica: non serve conoscerla.)

Scegliendo un altro polo, per esempio lo spigolo tra pavimento e parete, si ottiene lo stesso risultato, ma con i momenti di tre forze invece di due.

**2. Angolo minimo.** L'attrito statico può valere al massimo $\mu_sN_2 = \mu_smg$. L'equilibrio richiede:

$$\frac{mg}{2\tan\theta}\le\mu_smg\quad\Rightarrow\quad\tan\theta\geq\frac{1}{2\mu_s} = \frac{1}{0{,}72}\approx 1{,}39\quad\Rightarrow\quad\theta_{min}\approx 54°$$

Sotto i $54°$ circa la scala scivola.
:::

::: esempio
**Asta con un peso appeso (dalla dispensa).** Un'asta omogenea di lunghezza $L$ e massa $M$ poggia su un pavimento scabro, formando un angolo $\alpha$ con esso, e su una parete verticale liscia. A distanza $D = \tfrac34 L$ dal punto d'appoggio sul pavimento è appesa una massa $m$. Quanto vale l'attrito del pavimento?

Polo nel punto d'appoggio sul pavimento. Il baricentro dell'asta è a $L/2$ (omogenea). Momenti: la reazione del muro $N_1$ (orizzontale, all'altezza $L\sin\alpha$) contro i due pesi (bracci $\frac L2\cos\alpha$ e $\frac34L\cos\alpha$):

$$N_1L\sin\alpha = Mg\frac L2\cos\alpha + mg\frac34L\cos\alpha\quad\Rightarrow\quad N_1 = \frac{\left(\frac M2 + \frac{3m}{4}\right)g}{\tan\alpha}$$

Equilibrio orizzontale: l'attrito bilancia la reazione del muro, $F_s = N_1 = \dfrac{(2M + 3m)\,g}{4\tan\alpha}$.
:::

::: esempio
**Il nodo e il blocco sul piano scabro (dalla dispensa).** Un blocco A ($m_A = 10\,\mathrm{kg}$) su un piano orizzontale scabro è legato con un filo orizzontale a un nodo; dal nodo pende un blocco B ($m_B = 5\,\mathrm{kg}$) e parte un terzo filo fissato in alto, che forma un angolo $\theta = 30°$ con la verticale. Il sistema è al limite: aggiungendo massa a B, A comincerebbe a muoversi. Coefficiente di attrito statico?

Equilibrio del nodo (forze concorrenti). Sia $T$ la tensione del filo obliquo:
- verticale: $T\cos\theta = m_Bg$;
- orizzontale: $T\sin\theta = T_A$, tensione del filo verso A.

Quindi $T_A = m_Bg\tan\theta$. Il blocco A è al limite dell'attrito statico: $T_A = \mu_sm_Ag$.

$$\mu_s = \frac{m_B\tan\theta}{m_A} = \frac{5\cdot 0{,}577}{10}\approx 0{,}29$$
:::

::: esame
La domanda chiusa di questa lezione chiede le condizioni di equilibrio del corpo rigido: servono **sia** la risultante delle forze esterne nulla **sia** il momento risultante delle forze esterne nullo. Non bastano la sola risultante (coppia di forze), né il solo momento, né condizioni sulle forze interne (che non contano).

In una risposta aperta sull'equilibrio del corpo rigido: definisci il corpo rigido, scrivi le equazioni cardinali, ricava le due condizioni con il loro significato (niente traslazione, niente rotazione), di' che sono necessarie e sufficienti e che con il corpo fermo danno l'equilibrio statico, mostra con la coppia che una sola non basta, spiega la libertà di scelta del polo e chiudi con il baricentro e il corpo appoggiato (Torre di Pisa).
:::

::: sintesi
- Corpo rigido: distanze reciproche fisse; moto = traslazione del centro di massa + rotazione attorno a un asse; 6 gradi di libertà (3 coordinate + 3 angoli).
- Equazioni cardinali $\vec R^{(e)} = M\vec a_{cm}$, $\vec M^{(e)} = d\vec L/dt$: 6 equazioni scalari, bastano a determinare il moto; le forze interne non contano.
- $\rho = dm/dV$ (omogeneo: $\rho = M/V$); $\sigma = dm/dS$, $\lambda = dm/dl$; $\vec r_{cm} = \frac1M\int\vec r\,dm$; corpo omogeneo simmetrico: centro di massa nel centro geometrico.
- Equilibrio: $\sum\vec F_{est} = 0$ **e** $\sum\vec M_{est} = 0$ (necessarie e sufficienti); corpo fermo = equilibrio statico.
- Coppia: risultante nulla, momento $Fd$ uguale per ogni polo, fa ruotare.
- Con risultante nulla il momento non dipende dal polo: si sceglie dove agiscono le forze incognite.
- Centro di forze parallele $\vec r_C = \sum f_i\vec r_i/\sum f_i$; baricentro = centro di massa in gravità uniforme.
- Corpo appoggiato in equilibrio se la verticale del baricentro cade dentro la base; più stabile con baricentro basso e base larga.
:::
