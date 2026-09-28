=== 21 dispense
# Lezione 21 — Quantità di moto e impulso

## Quantità di moto

La quantità di moto misura "quanto moto" ha un corpo. Conta sia la massa sia la velocità.

$$\vec p = m\vec v$$

dove:
- $\vec p$ = quantità di moto (o momento lineare), in $\mathrm{kg\cdot m/s}$, cioè $\mathrm{N\cdot s}$;
- $m$ = massa, in $\mathrm{kg}$;
- $\vec v$ = velocità, in $\mathrm{m/s}$.

È un **vettore**: ha la stessa direzione e lo stesso verso della velocità. Se la velocità cambia solo verso, la quantità di moto cambia.

Proprietà utili:
- $p$ è proporzionale a $m$ e a $v$. Se la velocità diventa 10 volte più grande, anche $p$ diventa 10 volte più grande. Se raddoppiano sia $m$ sia $v$, $p$ quadruplica.
- Dipende dal sistema di riferimento, perché la velocità dipende dal riferimento. Vale lo stesso per l'energia cinetica.
- L'energia cinetica invece è uno scalare e dipende da $v^2$. Una palla che rimbalza con la stessa velocità in verso opposto cambia $\vec p$ ma non $K$.

## Secondo principio con la quantità di moto

La forma più generale del secondo principio usa la quantità di moto. È anche la forma originale di Newton.

$$\vec F = \frac{d\vec p}{dt}$$

dove:
- $\vec F$ = forza risultante sul corpo, in $\mathrm N$;
- $d\vec p/dt$ = rapidità di variazione della quantità di moto, in $\mathrm{kg\cdot m/s^2} = \mathrm N$.

Se la massa è costante, $d\vec p/dt = m\,d\vec v/dt = m\vec a$: si ritrova $\vec F = m\vec a$.

## Impulso di una forza

L'impulso misura l'effetto di una forza che agisce per un certo tempo.

$$\vec J = \int_{t_1}^{t_2} \vec F\,dt \qquad \text{se } \vec F \text{ è costante: } \vec J = \vec F\,\Delta t$$

dove:
- $\vec J$ = impulso (spesso indicato anche con $\vec I$), in $\mathrm{N\cdot s}$;
- $\vec F$ = forza, in $\mathrm N$;
- $\Delta t = t_2 - t_1$ = durata dell'azione, in $\mathrm s$.

L'impulso è un vettore. Per una forza che varia nel tempo serve conoscere come cambia $F(t)$.

## Teorema dell'impulso

L'impulso della forza risultante è uguale alla variazione della quantità di moto nello stesso intervallo di tempo.

$$\vec J = \Delta\vec p = m\vec v_f - m\vec v_i$$

Ragionamento in 3 passi:
1. Dal secondo principio: $\vec F = m\,d\vec v/dt$.
2. Moltiplichi per $dt$: $\vec F\,dt = m\,d\vec v$, cioè $d\vec J = d\vec p$.
3. Sommi (integri) da $t_1$ a $t_2$: $\vec J = \vec p_2 - \vec p_1$.

Il teorema vale **sempre**: per sistemi isolati e non isolati. In un sistema isolato l'impulso esterno è nullo, quindi $\vec p$ non cambia.

Da qui si ricava la **forza media** in un urto:

$$\bar F = \frac{\Delta p}{\Delta t}$$

Allungare il tempo del contatto riduce la forza. Per questo airbag e materassini attutiscono i colpi.

::: esempio
Sasso di $2{,}5\,\mathrm{kg}$ lasciato cadere da fermo. Dopo $4\,\mathrm s$ la gravità ha dato l'impulso $J = mg\,t = 2{,}5 \cdot 9{,}8 \cdot 4 = 98\,\mathrm{N\cdot s}$. Quindi $p = 98\,\mathrm{N\cdot s}$.

Palla di $1\,\mathrm{kg}$ che arriva su una parete a $2\,\mathrm{m/s}$ e rimbalza a $1{,}5\,\mathrm{m/s}$. Prendi positivo il verso di allontanamento: $v_i = -2$, $v_f = +1{,}5$. Allora $\Delta p = 1 \cdot (1{,}5 - (-2)) = 3{,}5\,\mathrm{N\cdot s}$, in allontanamento dalla parete.

Pallone di $0{,}45\,\mathrm{kg}$ che arriva a $25\,\mathrm{m/s}$ e riparte a $10\,\mathrm{m/s}$ in verso opposto: $J = 0{,}45 \cdot (10 + 25) = 15{,}75\,\mathrm{kg\cdot m/s}$.
:::

::: attenzione
Nei rimbalzi le velocità hanno versi opposti: i moduli si **sommano**, non si sottraggono. Scegli sempre un verso positivo prima di fare i conti.
:::

## Conservazione della quantità di moto

Se la risultante delle forze esterne è nulla, la quantità di moto totale non cambia.

$$\vec F_{est} = 0 \;\Rightarrow\; \frac{d\vec P}{dt} = 0 \;\Rightarrow\; \vec P_{iniziale} = \vec P_{finale}$$

dove $\vec P$ = somma delle quantità di moto di tutti i corpi del sistema, in $\mathrm{kg\cdot m/s}$.

Perché le forze interne non contano? Per il **terzo principio**. Ogni forza interna ha una reazione uguale e opposta dentro il sistema. Sommate, si annullano a coppie.

Un sistema così si chiama **isolato**. Se parte da fermo, la quantità di moto totale resta zero: se un pezzo va avanti, l'altro va indietro.

::: esempio
Uomo di $70\,\mathrm{kg}$ fermo sul ghiaccio calcia un sasso di $100\,\mathrm g$. L'uomo va a $0{,}2\,\mathrm{cm/s} = 0{,}002\,\mathrm{m/s}$. Il sasso: $70 \cdot 0{,}002 = 0{,}1 \cdot v$, quindi $v = 1{,}4\,\mathrm{m/s}$ in verso opposto all'uomo.

Uomo di $88{,}4\,\mathrm{kg}$ che calcia una pietra di $71{,}7\,\mathrm g$ a $3{,}87\,\mathrm{m/s}$: $v = 0{,}0717 \cdot 3{,}87 / 88{,}4 \approx 3{,}1 \cdot 10^{-3}\,\mathrm{m/s} = 3{,}1\,\mathrm{mm/s}$.
:::

::: attenzione
Pattinatore fermo su ghiaccio senza attrito. Saltare, spingere con i pattini o strisciare non serve: senza attrito il ghiaccio non dà nessuna spinta orizzontale. L'unico modo è **lanciare qualcosa** (per esempio un guanto) in un verso: lui si muove nel verso opposto.
:::

## Terzo principio della dinamica

Se A esercita una forza su B, B esercita su A una forza uguale in modulo e direzione e opposta in verso.

$$\vec F_{AB} = -\vec F_{BA}$$

Le due forze agiscono su corpi **diversi**, quindi non si annullano sullo stesso corpo. Si annullano solo quando sommi le forze su tutto il sistema.

## Conservazione dell'energia meccanica

L'energia meccanica è la somma di energia cinetica e potenziale: $E = K + U$. Si conserva solo se lavorano **forze conservative** (peso, forza elastica). Se c'è attrito, l'energia meccanica diminuisce: la differenza è il lavoro (negativo) dell'attrito.

La quantità di moto e l'energia meccanica sono due leggi diverse. La prima richiede forze esterne nulle. La seconda richiede forze non conservative nulle.

## Sistemi a massa variabile: il razzo

Un razzo espelle gas all'indietro ad alta velocità. Il sistema razzo + gas è isolato, quindi la quantità di moto totale si conserva. Il gas va indietro, il razzo accelera in avanti.

$$\text{spinta} = u\,\frac{dm}{dt} \qquad v = v_0 + u\ln\frac{M_0}{M_0 - ct}$$

dove:
- $u$ = velocità del gas rispetto al razzo, in $\mathrm{m/s}$;
- $dm/dt = c$ = massa di gas espulsa al secondo, in $\mathrm{kg/s}$;
- $M_0$ = massa iniziale del razzo, in $\mathrm{kg}$;
- $v_0$ = velocità iniziale, $v$ = velocità al tempo $t$, in $\mathrm{m/s}$.

Con la gravità si aggiunge il termine $-gt$.

::: esame
Le aperte chiedono di definire quantità di moto e impulso e dove si usano. Risposta: la quantità di moto serve per urti, esplosioni, rinculi, razzi (dove si conserva). L'impulso serve per forze brevi e intense, come colpi e rimbalzi, dove si conosce $\Delta p$ ma non la forza istante per istante.
:::

::: sintesi
- $\vec p = m\vec v$, unità $\mathrm{kg\cdot m/s} = \mathrm{N\cdot s}$; dipende dal riferimento.
- $\vec F = d\vec p/dt$ è la forma generale del secondo principio.
- Teorema dell'impulso: $\vec J = \int\vec F\,dt = \Delta\vec p$; vale sempre.
- Forza media: $\bar F = \Delta p/\Delta t$.
- Sistema isolato: $\vec P$ totale costante, perché le forze interne si annullano (terzo principio).
- Energia meccanica costante solo con forze conservative.
:::

=== 22 dispense
# Lezione 22 — Sistemi di punti e centro di massa

## Sistema di punti

Un sistema è un insieme di punti materiali che studi insieme. Su ogni punto agiscono due tipi di forze:
- **forze interne**: quelle che i punti del sistema si scambiano tra loro;
- **forze esterne**: quelle che arrivano da fuori.

Per il terzo principio, sommate su tutto il sistema, le forze interne si annullano.

## Centro di massa

Il centro di massa è la **media pesata delle posizioni**, con le masse come pesi.

$$\vec r_{cm} = \frac{\sum_i m_i\vec r_i}{\sum_i m_i} = \frac{\sum_i m_i\vec r_i}{M}$$

dove:
- $\vec r_{cm}$ = posizione del centro di massa, in $\mathrm m$;
- $m_i$ = massa del punto $i$, in $\mathrm{kg}$;
- $\vec r_i$ = posizione del punto $i$, in $\mathrm m$;
- $M$ = massa totale, in $\mathrm{kg}$.

Per due punti il centro di massa sta sulla congiungente, **più vicino alla massa maggiore**:

$$m_A\,d_A = m_B\,d_B$$

dove $d_A$ e $d_B$ sono le distanze del centro di massa da A e da B, in $\mathrm m$.

::: esempio
B ha massa doppia di A. Allora $d_A = 2\,d_B$. La distanza totale è $3\,d_B$. Il centro di massa sta a un terzo della distanza da B (e a due terzi da A).
:::

In un campo di gravità uniforme il centro di massa coincide con il **baricentro**, il punto dove si applica il peso.

Due casi reali:
- **Atmosfera**: l'aria è molto più densa in basso. Quasi tutta la massa sta nei primi chilometri. Quindi la quota del centro di massa è vicina alla superficie terrestre.
- **Corpo umano**: camminando il baricentro sale e scende di pochi centimetri. Correndo c'è una fase di volo e l'escursione è maggiore. La variazione è minima nella camminata.

## Quantità di moto ed energia del sistema

La quantità di moto totale è la somma delle quantità di moto dei punti. È uguale a quella di un punto con tutta la massa che si muove come il centro di massa.

$$\vec P = \sum_i m_i\vec v_i = M\vec v_{cm} \qquad \vec v_{cm} = \frac{\sum_i m_i\vec v_i}{M}$$

dove $\vec v_{cm}$ è la velocità del centro di massa, in $\mathrm{m/s}$.

::: esempio
A: $6\,\mathrm{kg}$ a $3\,\mathrm{m/s}$. B: $2\,\mathrm{kg}$ a $9\,\mathrm{m/s}$ in verso opposto. $v_{cm} = (6 \cdot 3 - 2 \cdot 9)/8 = 0$. Il centro di massa è fermo.
:::

## Teorema del moto del centro di massa

Il centro di massa si muove come un punto con tutta la massa del sistema, spinto solo dalle forze esterne.

$$M\,\vec a_{cm} = \vec R^{(e)} \qquad \frac{d\vec P}{dt} = \vec R^{(e)}$$

dove:
- $\vec a_{cm}$ = accelerazione del centro di massa, in $\mathrm{m/s^2}$;
- $\vec R^{(e)}$ = risultante delle sole forze esterne, in $\mathrm N$.

Le forze interne muovono i singoli pezzi, ma non il centro di massa. Se $\vec R^{(e)} = 0$, il centro di massa si muove a velocità costante (o resta fermo).

::: esempio
Barca di $150\,\mathrm{kg}$, lunga $5\,\mathrm m$, ferma vicino al molo. Un uomo di $75\,\mathrm{kg}$ cammina da un'estremità all'altra. In orizzontale non ci sono forze esterne: il centro di massa resta fermo. La barca si sposta di $mL/(M + m) = 75 \cdot 5/225 \approx 1{,}67\,\mathrm m$.
:::

## Riferimento del centro di massa

È un riferimento con l'origine nel centro di massa e gli assi paralleli a quelli di partenza. In questo riferimento la **quantità di moto totale è zero**, perché il centro di massa è sempre fermo lì.

È inerziale solo se le forze esterne sono nulle.

## Teorema di Koenig

L'energia cinetica di un sistema si divide in due parti: il moto del centro di massa più il moto dei punti attorno al centro di massa.

$$K = \tfrac12 M v_{cm}^2 + K'$$

dove:
- $K$ = energia cinetica totale nel riferimento inerziale, in $\mathrm J$;
- $\tfrac12 M v_{cm}^2$ = energia di un punto di massa $M$ che si muove come il centro di massa, in $\mathrm J$;
- $K'$ = energia cinetica dei punti misurata nel riferimento del centro di massa, in $\mathrm J$.

Dimostrazione in 3 passi:
1. Scrivi ogni velocità come $\vec v_i = \vec v_i' + \vec v_{cm}$.
2. Sviluppi $K = \sum \tfrac12 m_i(\vec v_i' + \vec v_{cm})^2$: escono $K'$, $\tfrac12 M v_{cm}^2$ e un termine misto $\vec v_{cm}\cdot\sum m_i\vec v_i'$.
3. Il termine misto è zero, perché $\sum m_i\vec v_i' = 0$ nel riferimento del centro di massa.

Per un corpo rigido che rotola, $K' = \tfrac12 I_{cm}\omega^2$ (energia di rotazione).

::: esempio
Blocchi di $1\,\mathrm{kg}$ a $1\,\mathrm{m/s}$ e $2\,\mathrm{kg}$ a $2\,\mathrm{m/s}$, stesso verso. $v_{cm} = (1 + 4)/3 \approx 1{,}67\,\mathrm{m/s}$. Nel riferimento del centro di massa: $P' = 0$ e $K' \approx 0{,}33\,\mathrm J$.
:::

## Energia cinetica e quantità di moto a confronto

Le due grandezze sono legate da:

$$K = \frac{p^2}{2m} \qquad p = \sqrt{2mK}$$

dove $K$ è in $\mathrm J$, $p$ in $\mathrm{kg\cdot m/s}$, $m$ in $\mathrm{kg}$.

- **Stessa $p$**: ha più energia cinetica il corpo **più leggero** (con $m$ al denominatore).
- **Stessa $K$**: $p$ cresce come $\sqrt m$. Con massa 9 volte maggiore, $p$ è $\sqrt9 = 3$ volte maggiore.

::: esempio
Palla da baseball di $0{,}2\,\mathrm{kg}$ a $150\,\mathrm{km/h} = 41{,}7\,\mathrm{m/s}$, rimandata indietro con la stessa velocità. $\Delta p = 0{,}2 \cdot 2 \cdot 41{,}7 \approx 16{,}7\,\mathrm{kg\cdot m/s}$. Con contatto di $0{,}1\,\mathrm s$: $\bar F = 16{,}7/0{,}1 \approx 167\,\mathrm N$.
:::

## Sistema di due punti e massa ridotta

Due corpi che interagiscono solo tra loro si possono trattare così: uno è fermo e l'altro si muove con una massa "equivalente", la **massa ridotta**.

$$\mu = \frac{m_1 m_2}{m_1 + m_2}$$

dove $\mu$, $m_1$, $m_2$ sono in $\mathrm{kg}$.

## Il braccio come leva

Il braccio che regge un peso è una **leva di terzo genere**. Il fulcro è il gomito. Il bicipite tira vicino al gomito (braccio corto). Il peso sta nella mano, lontano (braccio lungo).

Per l'equilibrio dei momenti, il muscolo deve fare una forza **molto più grande** del peso. In cambio la mano compie spostamenti ampi e veloci con piccoli accorciamenti del muscolo.

::: sintesi
- $\vec r_{cm} = \sum m_i\vec r_i/M$: media pesata, più vicino alla massa maggiore.
- $\vec P = M\vec v_{cm}$ e $M\vec a_{cm} = \vec R^{(e)}$: le forze interne non muovono il centro di massa.
- Nel riferimento del centro di massa $\vec P' = 0$.
- Koenig: $K = \tfrac12 M v_{cm}^2 + K'$.
- $K = p^2/2m$: a pari $p$ ha più $K$ il più leggero; a pari $K$, $p \propto \sqrt m$.
- Braccio umano: leva di terzo genere, svantaggiosa in forza.
:::

=== 23 dispense
# Lezione 23 — Momento di una forza, leve ed equilibrio

## Momento di una forza

Il momento misura quanto una forza fa **ruotare** un corpo attorno a un punto, detto polo. Conta la forza e anche dove e come la applichi.

$$\vec M = \vec r \times \vec F \qquad M = F\,r\sin\theta = F\,b$$

dove:
- $\vec M$ = momento della forza rispetto al polo O, in $\mathrm{N\cdot m}$;
- $\vec r$ = vettore dal polo al punto di applicazione, in $\mathrm m$;
- $\vec F$ = forza, in $\mathrm N$;
- $\theta$ = angolo tra $\vec r$ e $\vec F$;
- $b = r\sin\theta$ = **braccio**: distanza del polo dalla retta d'azione della forza, in $\mathrm m$.

Il vettore $\vec M$ è perpendicolare al piano di $\vec r$ e $\vec F$. Nei problemi piani basta dire se fa girare in senso **orario** o **antiorario**.

Il momento dipende dal polo. Cambiando polo, in generale cambia anche il momento.

::: esempio
Forza di $3\,\mathrm N$ perpendicolare a una porta, a $1\,\mathrm m$ dai cardini: $M = 3 \cdot 1 = 3\,\mathrm{N\cdot m}$.

Porta con $50\,\mathrm N$ a $0{,}2\,\mathrm m$ in senso orario e $25\,\mathrm N$ a $1\,\mathrm m$ in senso antiorario. Momento orario $10\,\mathrm{N\cdot m}$, antiorario $25\,\mathrm{N\cdot m}$. La porta ruota in senso **antiorario**.

Pedale di bicicletta: pedivella di $0{,}15\,\mathrm m$, forza verso il basso di $100\,\mathrm N$. Con pedivella orizzontale ($\theta = 90°$) $M = 15\,\mathrm{N\cdot m}$; a $30°$ dalla verticale $M = 7{,}5\,\mathrm{N\cdot m}$; con pedivella verticale $M = 0$.
:::

::: attenzione
L'unità del momento è $\mathrm{N\cdot m}$ (newton **per** metro). Non $\mathrm{N/m}$ né $\mathrm{N\cdot m^2}$.
:::

## Leve

Una leva è un'asta rigida che ruota attorno a un punto fisso, il **fulcro**. Su di essa agiscono due forze:
- la **potenza** $P$: la forza che applichi;
- la **resistenza** $R$: il peso o la forza da vincere.

La leva è in equilibrio quando i due momenti rispetto al fulcro sono uguali:

$$P\,b_P = R\,b_R$$

dove:
- $P$, $R$ = potenza e resistenza, in $\mathrm N$;
- $b_P$, $b_R$ = bracci: distanze delle due forze dal fulcro, in $\mathrm m$.

Più lungo è il braccio, meno forza serve. La leva è **vantaggiosa** se $b_P > b_R$.

| Genere | Cosa sta in mezzo | Vantaggiosa? | Esempi |
|---|---|---|---|
| 1° | il fulcro | dipende dai bracci | altalena, bilancia, forbici, piede di porco |
| 2° | la resistenza | sempre | carriola, schiaccianoci |
| 3° | la potenza | mai | pinzette, avambraccio |

Il fulcro sostiene il peso di tutto ciò che sta sulla leva. Due bambini di $10\,\mathrm{kg}$ in equilibrio su un'altalena leggera: il fulcro regge $20 \cdot 9{,}8 \approx 200\,\mathrm N$.

::: esempio
Altalena: bambino di $10\,\mathrm{kg}$ a $3\,\mathrm m$. Il secondo bambino pesa $15\,\mathrm{kg}$: $10 \cdot 3 = 15 \cdot d$, quindi $d = 2\,\mathrm m$.

Trave di $90\,\mathrm{cm}$, fulcro a $30\,\mathrm{cm}$ da un estremo, dove c'è un peso di $60\,\mathrm{kg}$. Bracci: $30\,\mathrm{cm}$ e $60\,\mathrm{cm}$. $F = 60 \cdot 9{,}8 \cdot 30/60 = 294\,\mathrm N$.

Se chiedono una **massa** invece di una forza, $g$ si semplifica. Trave di $120\,\mathrm{cm}$, fulcro a $40\,\mathrm{cm}$, $30\,\mathrm{kg}$ sul lato corto: $30 \cdot 40 = m \cdot 80$, quindi $m = 15\,\mathrm{kg}$.
:::

::: attenzione
Leggi bene dove sta il fulcro. Se la sbarra è lunga $2{,}10\,\mathrm m$ e il peso è a $0{,}30\,\mathrm m$ dal fulcro, l'altro braccio è $2{,}10 - 0{,}30 = 1{,}80\,\mathrm m$, non $2{,}10\,\mathrm m$.
:::

## Equilibrio di un corpo esteso

Un corpo esteso (non un punto) può traslare e ruotare. Per stare fermo servono **due** condizioni:

$$\sum\vec F_{est} = 0 \qquad \sum\vec M_{est} = 0$$

- La prima impedisce la traslazione.
- La seconda impedisce la rotazione.

Un corpo appoggiato resta in piedi se la **verticale che passa per il baricentro cade dentro la base d'appoggio**. La Torre di Pisa è inclinata, ma questa verticale cade ancora dentro la base: per questo non si ribalta.

## Momento d'inerzia

Il momento d'inerzia misura quanto è difficile far ruotare un corpo. Conta la massa e soprattutto **quanto è lontana dall'asse**.

$$I = \sum_i m_i r_i^2$$

dove:
- $I$ = momento d'inerzia, in $\mathrm{kg\cdot m^2}$;
- $m_i$ = massa di ogni punto, in $\mathrm{kg}$;
- $r_i$ = distanza di ogni punto dall'asse di rotazione, in $\mathrm m$.

Valori da ricordare (massa $m$, raggio $R$, asse di simmetria):
- anello o cilindro cavo sottile: $I = mR^2$;
- disco o cilindro pieno: $I = \tfrac12 mR^2$;
- sfera piena: $I = \tfrac25 mR^2$.

Per la rotazione vale una legge simile a $F = ma$:

$$M = I\,\alpha$$

dove $M$ è il momento in $\mathrm{N\cdot m}$ e $\alpha$ l'accelerazione angolare in $\mathrm{rad/s^2}$.

::: esempio
Asta leggera di $2\,\mathrm m$ con $3\,\mathrm{kg}$ in A, $10\,\mathrm{kg}$ a metà, $4\,\mathrm{kg}$ in B. Asse in A: $I = 3 \cdot 0^2 + 10 \cdot 1^2 + 4 \cdot 2^2 = 26\,\mathrm{kg\cdot m^2}$.

Corda avvolta su una ruota (disco pieno) di $2\,\mathrm{kg}$ e raggio $0{,}5\,\mathrm m$, tirata con $4\,\mathrm N$. $M = 4 \cdot 0{,}5 = 2\,\mathrm{N\cdot m}$. $I = \tfrac12 \cdot 2 \cdot 0{,}25 = 0{,}25\,\mathrm{kg\cdot m^2}$. $\alpha = 2/0{,}25 = 8\,\mathrm{rad/s^2}$.
:::

## Momento angolare

Il momento angolare è il "momento" della quantità di moto. Descrive quanto un corpo sta ruotando attorno a un polo.

$$\vec L = \vec r \times m\vec v$$

dove:
- $\vec L$ = momento angolare, in $\mathrm{kg\cdot m^2/s}$;
- $\vec r$ = posizione rispetto al polo, in $\mathrm m$;
- $m\vec v$ = quantità di moto, in $\mathrm{kg\cdot m/s}$.

Casi utili:
- punto in moto circolare, polo nel centro: $L = m r^2\omega$;
- corpo rigido che ruota attorno a un asse fisso: $L = I\omega$ ($\omega$ in $\mathrm{rad/s}$).

**Teorema del momento angolare**: il momento delle forze fa variare il momento angolare.

$$\frac{d\vec L}{dt} = \vec M$$

Vale se il polo è fisso in un riferimento inerziale, oppure se è il centro di massa. Per un sistema contano solo i momenti delle forze **esterne**.

**Conservazione**: se il momento delle forze esterne è nullo, $\vec L$ resta costante. Succede se non ci sono forze esterne, oppure se la forza è parallela a $\vec r$ (forza centrale).

::: esempio
Pattinatrice che ruota a $\omega_1 = 2{,}4\,\mathrm{rad/s}$ con $I_1 = 5{,}2\,\mathrm{kg\cdot m^2}$. Stringe le braccia e arriva a $\omega_2 = 3{,}5\,\mathrm{rad/s}$. $L$ si conserva: $I_2 = I_1\omega_1/\omega_2 = 5{,}2 \cdot 2{,}4/3{,}5 \approx 3{,}6\,\mathrm{kg\cdot m^2}$. Avvicinando la massa all'asse, $I$ cala e la rotazione accelera.
:::

::: sintesi
- $M = F\,b$, in $\mathrm{N\cdot m}$; il braccio è la distanza dal polo alla retta d'azione.
- Leva in equilibrio: $P\,b_P = R\,b_R$; 1° genere fulcro in mezzo, 2° resistenza in mezzo (sempre vantaggiosa), 3° potenza in mezzo (mai vantaggiosa).
- Equilibrio di un corpo esteso: $\sum\vec F = 0$ e $\sum\vec M = 0$; verticale del baricentro dentro la base.
- $I = \sum m r^2$; $M = I\alpha$.
- $\vec L = \vec r \times m\vec v$, $L = I\omega$; $d\vec L/dt = \vec M$; si conserva se $\vec M_{est} = 0$.
:::

=== 24 dispense
# Lezione 24 — Urti

## Che cos'è un urto

Un urto è un'interazione tra corpi che dura un **tempo brevissimo**. In quel tempo i corpi si scambiano forze molto intense, dette impulsive.

Condizioni perché un'interazione sia un urto:
- dura pochissimo rispetto al tempo in cui osservi il sistema;
- le forze tra i corpi sono molto più grandi delle forze esterne.

## Perché il sistema è isolato

Le forze tra i due corpi sono forze **interne**. Per il terzo principio si annullano a coppie. Le forze esterne (peso, attrito) ci sono, ma agiscono per un tempo quasi nullo. Il loro impulso è trascurabile:

$$F_{int}\,\Delta t \gg F_{est}\,\Delta t$$

Quindi durante l'urto il sistema si può trattare come **isolato**. Da qui segue la regola più importante.

**In ogni urto la quantità di moto totale si conserva.**

$$m_1\vec v_{1,i} + m_2\vec v_{2,i} = m_1\vec v_{1,f} + m_2\vec v_{2,f}$$

dove $m_1$, $m_2$ sono le masse in $\mathrm{kg}$ e le $\vec v$ le velocità prima ($i$) e dopo ($f$), in $\mathrm{m/s}$.

L'energia cinetica invece si conserva solo in certi urti. Durante l'urto le posizioni quasi non cambiano, quindi l'energia potenziale resta uguale. Conta solo l'energia cinetica.

## Tipi di urto

| Tipo | Quantità di moto | Energia cinetica | Cosa succede |
|---|---|---|---|
| Elastico | si conserva | si conserva | i corpi si deformano e tornano come prima |
| Anelastico | si conserva | **non** si conserva | parte dell'energia diventa calore e deformazione |
| Completamente anelastico | si conserva | non si conserva (perdita massima) | i corpi restano **uniti** |

Il **coefficiente di restituzione** $e$ misura quanto è elastico l'urto. Vale tra 0 e 1: $e = 1$ elastico, $e = 0$ completamente anelastico.

::: attenzione
Se dopo l'urto i corpi si muovono in modo qualsiasi (per esempio un carrello ne urta un altro e ripartono nella stessa direzione), puoi dire con certezza solo che si conserva la quantità di moto. L'energia cinetica si conserva solo se l'urto è elastico.
:::

## Urto completamente anelastico

I due corpi restano attaccati e proseguono insieme con la stessa velocità.

$$v_f = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$

dove $v_f$ è la velocità comune dopo l'urto, in $\mathrm{m/s}$. Le velocità hanno segno: se i corpi si vengono incontro, una è negativa.

L'energia persa è la differenza $K_i - K_f$. Va in deformazione e calore.

::: esempio
$2{,}5\,\mathrm{kg}$ a $9\,\mathrm{m/s}$ contro $5\,\mathrm{kg}$ fermo: $v_f = 2{,}5 \cdot 9/7{,}5 = 3{,}0\,\mathrm{m/s}$.

Vagone di massa $M$ a velocità $V$ che si aggancia a un vagone uguale fermo: $v_f = MV/2M = V/2$.

Carrelli di $100\,\mathrm{kg}$ a $5\,\mathrm{m/s}$ e $300\,\mathrm{kg}$ a $1\,\mathrm{m/s}$ che si vengono incontro: $v_f = (500 - 300)/400 = 0{,}5\,\mathrm{m/s}$.

Auto di $9000\,\mathrm N$ ($918\,\mathrm{kg}$) a $100\,\mathrm{km/h}$ contro camion di $90\,\mathrm{kN}$ ($9184\,\mathrm{kg}$) a $50\,\mathrm{km/h}$ in verso opposto. Converti: $27{,}8\,\mathrm{m/s}$ e $-13{,}9\,\mathrm{m/s}$. $v_f \approx -10{,}1\,\mathrm{m/s}$: si muovono nel verso del camion.
:::

::: attenzione
Se il testo dà i **pesi** in newton, dividi per $g$ per avere le masse. Se dà km/h, converti in m/s (dividi per $3{,}6$).
:::

## Urto elastico in una dimensione

Si conservano quantità di moto ed energia cinetica. Con due equazioni ricavi le due velocità finali:

$$v_{1,f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1,i} + \frac{2m_2}{m_1 + m_2}\,v_{2,i}$$
$$v_{2,f} = \frac{2m_1}{m_1 + m_2}\,v_{1,i} + \frac{m_2 - m_1}{m_1 + m_2}\,v_{2,i}$$

dove $m_1$, $m_2$ sono in $\mathrm{kg}$ e le velocità in $\mathrm{m/s}$, con segno.

**Bersaglio fermo** ($v_{2,i} = 0$), tre casi da sapere:
- **Masse uguali**: il proiettile si ferma, il bersaglio parte con la sua velocità. I corpi si **scambiano le velocità**.
- **Proiettile molto più pesante** ($m_1 \gg m_2$): il proiettile quasi non rallenta. Il bersaglio parte a velocità **doppia**.
- **Proiettile molto più leggero** ($m_1 \ll m_2$): il proiettile rimbalza indietro con la stessa velocità, come contro un muro. Il bersaglio resta quasi fermo.

::: esempio
Treno a $300\,\mathrm{km/h}$ contro una pallina da tennis ferma, urto elastico. È il caso $m_1 \gg m_2$: la pallina parte a circa $2 \cdot 300 = 600\,\mathrm{km/h}$.
:::

Nel **riferimento del centro di massa** la quantità di moto totale è zero. I due corpi arrivano con quantità di moto opposte e ripartono con quantità di moto opposte. Nell'urto elastico ogni velocità, in quel riferimento, si inverte soltanto.

## Quantità di moto come vettore

In due dimensioni si sommano i vettori, non i numeri.

::: esempio
Giocattoli di $0{,}5\,\mathrm{kg}$ e $0{,}2\,\mathrm{kg}$, entrambi a $10\,\mathrm{m/s}$, in direzioni perpendicolari. $p_1 = 5$, $p_2 = 2\,\mathrm{kg\cdot m/s}$. Totale: $\sqrt{25 + 4} \approx 5{,}4\,\mathrm{kg\cdot m/s}$, uguale prima e dopo l'urto.
:::

## Esplosioni e rinculo

Un'esplosione è un urto "al contrario". Un corpo si divide in pezzi per effetto di forze interne. La quantità di moto totale subito dopo è **uguale** a quella subito prima.

Se tutto parte da fermo, la quantità di moto totale resta zero:

$$m\,v + M\,V = 0 \quad\Rightarrow\quad V = -\frac{m}{M}\,v$$

dove $m$, $v$ sono massa e velocità del pezzo lanciato e $M$, $V$ quelle del resto (fucile, persona…).

::: esempio
Fucile di $3\,\mathrm{kg}$, proiettile di $10\,\mathrm g$ a $500\,\mathrm{m/s}$: $V = -0{,}01 \cdot 500/3 \approx -1{,}67\,\mathrm{m/s}$. Il segno meno indica il verso opposto al proiettile.

Due astronauti fermi: il primo ($90\,\mathrm{kg}$) spinge il secondo ($75\,\mathrm{kg}$), che parte a $0{,}5\,\mathrm{m/s}$. Il primo arretra a $75 \cdot 0{,}5/90 \approx 0{,}42\,\mathrm{m/s}$.
:::

Conseguenze da ricordare:
- Due pattinatrici ferme che si spingono si muovono **entrambe**, in versi opposti. È impossibile che una resti ferma.
- La pistola riceve una quantità di moto uguale e opposta a quella del suo proiettile. Se il proiettile A ha massa doppia di B (stessa velocità), la pistola A riceve il doppio. La massa della pistola non conta.
- Un razzo che a quota $h$ si spezza in due con velocità orizzontali: le quantità di moto orizzontali sono uguali e opposte. Il pezzo più pesante è più lento e cade **più vicino** al punto di partenza.

## Pendolo balistico

Un proiettile si pianta in un blocco appeso a un filo. Il problema ha due fasi:
1. **Urto** (completamente anelastico): si conserva la quantità di moto, non l'energia. $m v = (m + M)V$.
2. **Salita** del blocco: si conserva l'energia meccanica. $\tfrac12(m + M)V^2 = (m + M)g h$, quindi $V = \sqrt{2gh}$.

dove $V$ è la velocità di blocco + proiettile subito dopo l'urto (anche velocità del centro di massa), $h$ la quota raggiunta in $\mathrm m$.

::: esempio
Il blocco sale di $30\,\mathrm{cm}$: $V = \sqrt{2 \cdot 9{,}8 \cdot 0{,}3} \approx 2{,}4\,\mathrm{m/s}$.
:::

## Rimbalzo su una parete

Una palla che rimbalza contro un muro cambia quantità di moto: il muro le dà un impulso. Il **lavoro sulla parete però è zero**, perché la parete non si sposta.

## Densità

La densità dice quanta massa c'è in un certo volume.

$$\rho = \frac{m}{V}$$

dove:
- $\rho$ = densità, in $\mathrm{kg/m^3}$;
- $m$ = massa, in $\mathrm{kg}$;
- $V$ = volume, in $\mathrm{m^3}$.

Conversioni utili: $1\,\mathrm{g/cm^3} = 1\,\mathrm{g/ml} = 1\,\mathrm{kg/l} = 1000\,\mathrm{kg/m^3}$.

::: esempio
Tubetto di $50\,\mathrm{ml}$ con $25\,\mathrm g$ di pomata: $\rho = 25/50 = 0{,}5\,\mathrm{g/ml} = 0{,}5\,\mathrm{kg/l}$.
:::

::: esame
Nelle aperte "riassumi gli urti" scrivi: definizione (tempo breve, forze impulsive), sistema isolato, conservazione di $\vec p$ sempre, di $K$ solo negli elastici, i tre tipi di urto con la formula dei corpi uniti.
:::

::: sintesi
- Urto: interazione brevissima con forze interne intense; il sistema si tratta come isolato.
- In ogni urto si conserva la quantità di moto totale (è un vettore).
- Elastico: si conserva anche $K$; masse uguali si scambiano le velocità.
- Anelastico: $K$ non si conserva. Corpi uniti: $v_f = (m_1v_1 + m_2v_2)/(m_1 + m_2)$.
- Esplosione da fermo: $mv = -MV$; i pezzi vanno in versi opposti.
- Pendolo balistico: urto (conserva $p$) poi salita (conserva energia), $V = \sqrt{2gh}$.
- Densità $\rho = m/V$; $1\,\mathrm{g/ml} = 1\,\mathrm{kg/l} = 1000\,\mathrm{kg/m^3}$.
:::

=== 26 dispense
# Lezione 26 — Gravitazione e densità

## Legge di gravitazione universale

Due masse qualsiasi si attraggono. La forza cresce con le masse e cala con il quadrato della distanza.

$$F = G\,\frac{m_1 m_2}{r^2}$$

dove:
- $F$ = modulo della forza, in $\mathrm N$;
- $G = 6{,}67 \cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}$ = costante di gravitazione universale;
- $m_1$, $m_2$ = masse, in $\mathrm{kg}$;
- $r$ = distanza tra i due punti, in $\mathrm m$.

La forza è sempre **attrattiva** e diretta lungo la congiungente. Le due forze sono uguali e opposte (terzo principio). Agisce a distanza e non dipende dal mezzo in cui stanno le masse.

Una **sfera omogenea** attira i corpi esterni come se tutta la sua massa fosse nel centro. Per questo si usa la distanza dal centro della Terra.

## Campo gravitazionale e accelerazione di gravità

Un campo è una grandezza associata a ogni punto dello spazio. Il campo gravitazionale di una massa $M$ è la forza per unità di massa:

$$\vec{\mathcal G} = \frac{\vec F}{m} = -\frac{GM}{r^2}\,\hat u_r$$

dove $\hat u_r$ è il versore che punta dalla massa $M$ verso il punto; il segno meno indica che il campo punta verso $M$. Il campo si misura in $\mathrm{N/kg} = \mathrm{m/s^2}$.

Si disegna con le **linee di forza**: la tangente dà la direzione del campo. Dove le linee sono più fitte, il campo è più intenso.

Sulla superficie terrestre il campo è proprio l'accelerazione di gravità:

$$g = \frac{G M_T}{R_T^2} \approx 9{,}8\,\mathrm{m/s^2}$$

dove $M_T$ è la massa della Terra in $\mathrm{kg}$ e $R_T \approx 6{,}37 \cdot 10^6\,\mathrm m$ il raggio.

Il peso di un corpo è $P = mg$. Su $1\,\mathrm{kg}$ vale circa $9{,}8\,\mathrm N \approx 10\,\mathrm N$.

::: attenzione
La gravità ha la **stessa direzione** per tutti i corpi: verticale, verso il centro della Terra. L'**intensità** invece dipende dalla massa ($mg$). Un corpo più pesante subisce una forza più grande, ma cade con la stessa accelerazione $g$.
:::

## Gravità in quota

Salendo la distanza dal centro cresce, quindi $g$ diminuisce.

$$g(h) = g_0\left(\frac{R}{R + h}\right)^2$$

dove:
- $g(h)$ = accelerazione alla quota $h$, in $\mathrm{m/s^2}$;
- $g_0 = 9{,}8\,\mathrm{m/s^2}$ = valore in superficie;
- $R$ = raggio terrestre, $h$ = quota, entrambi in $\mathrm m$ (o entrambi in $\mathrm{km}$).

Finché $h$ è piccola rispetto a $R$, $g$ si può considerare costante.

::: esempio
Con $R \approx 6000\,\mathrm{km}$ e $h = 300\,\mathrm{km}$: $g = 9{,}8 \cdot (6000/6300)^2 \approx 8{,}9\,\mathrm{m/s^2}$.
:::

## Energia potenziale gravitazionale

La forza di gravità è **conservativa**. Il suo lavoro dipende solo dalla posizione iniziale e finale. Si sceglie $U = 0$ a distanza infinita:

$$U = -\frac{GMm}{r}$$

dove $U$ è in $\mathrm J$. È sempre negativa: per portare il corpo all'infinito devi fornire energia.

## Velocità di fuga

È la velocità minima con cui lanciare un corpo perché si allontani per sempre dal pianeta.

Ragionamento in 3 passi:
1. L'energia meccanica si conserva: $\tfrac12 mv^2 - \dfrac{GMm}{R} = K_\infty + U_\infty$.
2. All'infinito $U_\infty = 0$. Nel caso limite il corpo arriva con $K_\infty = 0$.
3. Quindi $\tfrac12 mv^2 = GMm/R$.

$$v_{fuga} = \sqrt{\frac{2GM}{R}}$$

dove $M$ e $R$ sono massa e raggio del pianeta. Per la Terra $v_{fuga} \approx 11{,}2\,\mathrm{km/s}$. Non dipende dalla massa del corpo lanciato.

## Leggi di Keplero

Descrivono il moto dei pianeti attorno al Sole.

1. **Prima legge**: le orbite sono **ellissi** e il Sole sta in uno dei fuochi.
2. **Seconda legge**: il segmento Sole–pianeta spazza **aree uguali in tempi uguali**. Il pianeta va più veloce quando è vicino al Sole.
3. **Terza legge**: il rapporto $T^2/a^3$ è lo stesso per tutti i pianeti.

$$\frac{T^2}{a^3} = \text{costante} = \frac{4\pi^2}{GM_S}$$

dove:
- $T$ = periodo dell'orbita, in $\mathrm s$;
- $a$ = semiasse maggiore dell'orbita, in $\mathrm m$;
- $M_S$ = massa del Sole, in $\mathrm{kg}$.

Da dove vengono:
- La seconda legge viene dalla conservazione del **momento angolare**. La gravità è diretta verso il Sole, quindi ha momento nullo rispetto al Sole. $L$ costante significa velocità areolare costante.
- La terza legge si ricava con un'orbita circolare. Uguagli gravità e forza centripeta: $GMm/R^2 = m(2\pi/T)^2 R$, quindi $R^3/T^2 = GM/4\pi^2$.

::: esempio
Se il semiasse dell'orbita terrestre fosse la metà: $T' = T\,(1/2)^{3/2} \approx 365 \cdot 0{,}354 \approx 129$ giorni.
:::

## Satelliti in orbita circolare

Per un satellite la gravità fa da forza centripeta:

$$v = \sqrt{\frac{GM_T}{r}}$$

dove $r$ è il raggio dell'orbita (dal centro della Terra), in $\mathrm m$.

Un'orbita **geostazionaria** ha periodo di 24 ore, sta sul piano dell'equatore e gira nello stesso verso della Terra. Il satellite resta sempre sopra lo stesso punto. Si usa per le telecomunicazioni.

## Densità

La densità è la massa per unità di volume.

$$\rho = \frac{m}{V} \qquad m = \rho V \qquad V = \frac{m}{\rho}$$

dove $\rho$ è in $\mathrm{kg/m^3}$, $m$ in $\mathrm{kg}$, $V$ in $\mathrm{m^3}$.

Conversioni:
- $1\,\mathrm{l} = 1\,\mathrm{dm^3} = 10^{-3}\,\mathrm{m^3}$;
- $1000\,\mathrm{kg/m^3} = 1\,\mathrm{kg/dm^3} = 1\,\mathrm{kg/l} = 1\,\mathrm{g/cm^3}$.

| Sostanza | $\rho$ ($\mathrm{kg/m^3}$) |
|---|---|
| benzina | 720 |
| acqua | 1000 |
| zucchero | 1580 |
| Terra (media) | 5500 |
| mercurio | 13 500 |
| oro | 19 300 |

Solidi e liquidi hanno volume proprio. I liquidi sono quasi incomprimibili: la loro densità è costante. I gas invece si comprimono.

::: esempio
Un litro d'oro: $m = 19\,300 \cdot 10^{-3} = 19{,}3\,\mathrm{kg}$.

Barra d'oro di $1\,\mathrm{kg}$: $V = 1/19\,300 \approx 5{,}18 \cdot 10^{-5}\,\mathrm{m^3}$.

$1{,}5\,\mathrm{kg}$ di zucchero: $V = 1{,}5/1580 \approx 9{,}5 \cdot 10^{-4}\,\mathrm{m^3} = 0{,}95\,\mathrm l$.

Benzina: $720\,\mathrm{kg/m^3} = 0{,}72\,\mathrm{kg/dm^3} = 0{,}72\,\mathrm{g/cm^3}$, non $720\,\mathrm{g/cm^3}$.
:::

A parità di massa il volume è inversamente proporzionale alla densità. Il mercurio è $13{,}5$ volte più denso dell'acqua: la stessa massa occupa un volume $13{,}5$ volte **minore**.

Conoscendo raggio e densità media della Terra si calcola la sua **massa**: prima il volume della sfera $V = \tfrac43\pi R^3$, poi $M = \rho V$.

## Equazioni cardinali della dinamica dei sistemi

Due equazioni descrivono il moto d'insieme di un sistema di punti. Contengono solo le forze **esterne**.

$$\frac{d\vec P}{dt} = \vec R^{(e)} \qquad \frac{d\vec L}{dt} = \vec M^{(e)}$$

dove:
- $\vec P$ = quantità di moto totale, in $\mathrm{kg\cdot m/s}$;
- $\vec R^{(e)}$ = risultante delle forze esterne, in $\mathrm N$;
- $\vec L$ = momento angolare totale, in $\mathrm{kg\cdot m^2/s}$;
- $\vec M^{(e)}$ = momento totale delle forze esterne, in $\mathrm{N\cdot m}$.

La prima governa la traslazione: è il teorema del moto del centro di massa ($M\vec a_{cm} = \vec R^{(e)}$). La seconda governa la rotazione: vale con polo fisso o nel centro di massa. Forze e momenti interni si annullano a coppie.

Descrivono il sistema nel suo insieme, non i singoli pezzi. Per un corpo rigido bastano a determinare tutto il moto.

::: sintesi
- $F = Gm_1m_2/r^2$, attrattiva, lungo la congiungente; $G = 6{,}67 \cdot 10^{-11}\,\mathrm{N\,m^2/kg^2}$.
- $g = GM_T/R_T^2$; in quota $g(h) = g_0\,(R/(R + h))^2$; la direzione è la stessa per tutti.
- $U = -GMm/r$; $v_{fuga} = \sqrt{2GM/R} \approx 11{,}2\,\mathrm{km/s}$ per la Terra.
- Keplero: ellissi, aree uguali in tempi uguali, $T^2 \propto a^3$.
- $\rho = m/V$; $1\,\mathrm{g/cm^3} = 1000\,\mathrm{kg/m^3}$; a pari massa, più denso = meno volume.
- Equazioni cardinali: $d\vec P/dt = \vec R^{(e)}$, $d\vec L/dt = \vec M^{(e)}$.
:::

=== 27 dispense
# Lezione 27 — Equilibrio del corpo rigido

## Corpo rigido

Un corpo rigido è un insieme di punti le cui distanze reciproche non cambiano mai. Non si deforma.

Il suo moto più generale è la somma di due moti:
- una **traslazione**, descritta dal moto del centro di massa;
- una **rotazione** attorno a un asse.

Per descriverlo servono 6 numeri: 3 coordinate del centro di massa e 3 angoli (direzione dell'asse e ampiezza della rotazione). Questi sono i **gradi di libertà**: 6 per un corpo rigido libero.

## Equazioni cardinali per il corpo rigido

Le forze interne non cambiano la forma del corpo. Quindi il moto dipende solo dalle forze esterne, con due equazioni:

$$\vec R^{(e)} = M\,\vec a_{cm} \qquad \vec M^{(e)} = \frac{d\vec L}{dt}$$

dove:
- $\vec R^{(e)}$ = risultante delle forze esterne, in $\mathrm N$;
- $M$ = massa del corpo, in $\mathrm{kg}$; $\vec a_{cm}$ = accelerazione del centro di massa, in $\mathrm{m/s^2}$;
- $\vec M^{(e)}$ = momento totale delle forze esterne, in $\mathrm{N\cdot m}$;
- $\vec L$ = momento angolare, in $\mathrm{kg\cdot m^2/s}$.

La prima descrive la traslazione, la seconda la rotazione. In tutto sono 6 equazioni scalari, una per ogni grado di libertà.

## Condizioni di equilibrio

Un corpo rigido è in equilibrio quando sono nulle **entrambe**:

$$\sum\vec F_{est} = 0 \qquad \sum\vec M_{est} = 0$$

- Risultante delle forze nulla: il centro di massa non accelera (niente traslazione).
- Momento risultante nullo: il corpo non inizia a ruotare (niente rotazione).

Con queste condizioni $\vec P$ e $\vec L$ restano costanti. Se il corpo era fermo, resta fermo: è l'**equilibrio statico**.

::: attenzione
La sola risultante nulla **non basta**. Una **coppia di forze** è fatta da due forze uguali, opposte e non sulla stessa retta. Ha risultante nulla, ma momento diverso da zero: il corpo ruota. Esempio: le due mani sul volante.
:::

## Scelta del polo

Se la risultante delle forze è nulla, il momento totale è **lo stesso rispetto a qualsiasi polo**. Quindi puoi scegliere il polo più comodo.

Conviene metterlo dove agiscono forze sconosciute: quelle forze hanno braccio zero e spariscono dall'equazione dei momenti.

::: esempio
Scala appoggiata a un muro liscio e a un pavimento con attrito. Forze: peso nel centro della scala, reazione del muro, reazione normale e attrito del pavimento. Scegli il polo nel piede della scala. Reazione normale e attrito del pavimento hanno braccio nullo. Restano solo i momenti del peso e della reazione del muro: da lì ricavi la reazione del muro, poi l'attrito con l'equilibrio delle forze.
:::

::: esempio
Trave leggera di $2\,\mathrm m$ appoggiata agli estremi, con $100\,\mathrm N$ al centro. Per simmetria le due reazioni sono uguali. Per l'equilibrio delle forze sommano $100\,\mathrm N$. Quindi ognuna vale $50\,\mathrm N$.
:::

## Forze parallele e baricentro

Più forze parallele equivalgono a **una sola forza**:
- intensità: la **somma** delle intensità (se sono concordi) o la **differenza** (se sono discordi);
- punto di applicazione: divide la distanza tra le forze in parti **inversamente proporzionali** alle forze. Sta più vicino alla forza maggiore.

Questo punto si chiama **centro delle forze parallele**. I pesi dei pezzi di un corpo sono forze parallele. Il loro centro è il **baricentro**:

$$\vec r_G = \frac{\sum_i m_i\vec r_i}{\sum_i m_i}$$

dove $\vec r_G$ è la posizione del baricentro, in $\mathrm m$.

In un campo di gravità uniforme il baricentro **coincide con il centro di massa**. È il punto dove si può pensare applicato tutto il peso.

## Densità e corpo omogeneo

In un corpo continuo la massa è distribuita nel volume. La **densità** dice come:

$$\rho = \frac{dm}{dV} \qquad \text{corpo omogeneo: } \rho = \frac{M}{V}$$

dove $\rho$ è in $\mathrm{kg/m^3}$, $M$ in $\mathrm{kg}$, $V$ in $\mathrm{m^3}$.

Un corpo è **omogeneo** se la densità è uguale ovunque. Se è anche simmetrico, baricentro e centro di massa stanno nel **centro geometrico**. Per una sfera omogenea è il centro. Per un corpo non omogeneo, invece, il baricentro non è per forza al centro.

## Equilibrio di un corpo appoggiato

Un corpo appoggiato su un piano subisce il peso (nel baricentro) e le reazioni del piano (distribuite sulla base).

- Se la **verticale del baricentro cade dentro la base d'appoggio**, la reazione si applica proprio su quella verticale. Peso e reazione sono sulla stessa retta: momento nullo. Il corpo resta in equilibrio.
- Se la verticale cade **fuori** dalla base, la reazione non può spostarsi fuori dalla base. Peso e reazione formano una coppia: il corpo si ribalta.

Più il baricentro è basso e la base è larga, più l'equilibrio è stabile.

::: esempio
Torre di Pisa come cilindro omogeneo: alta $55\,\mathrm m$, diametro $7\,\mathrm m$ (raggio della base $3{,}5\,\mathrm m$). La cima è spostata di $4{,}5\,\mathrm m$. Il baricentro è a metà altezza, quindi è spostato di metà: $2{,}25\,\mathrm m$. È meno di $3{,}5\,\mathrm m$: la verticale cade dentro la base e la torre non si ribalta. Il limite sarebbe una cima spostata di $7\,\mathrm m$.
:::

::: sintesi
- Corpo rigido: distanze fisse; moto = traslazione del centro di massa + rotazione; 6 gradi di libertà.
- Equilibrio: $\sum\vec F_{est} = 0$ **e** $\sum\vec M_{est} = 0$.
- Coppia di forze: risultante nulla, momento non nullo, fa ruotare.
- Con risultante nulla il momento non dipende dal polo: scegli quello comodo.
- Baricentro: punto di applicazione del peso; coincide con il centro di massa; nei corpi omogenei simmetrici è al centro geometrico.
- Corpo appoggiato stabile se la verticale del baricentro cade dentro la base.
:::
