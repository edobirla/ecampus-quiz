=== 62 dispense
SLIDES: 70, 68
# Lezione 62 — Azioni magnetiche su magneti, fili e spire

## Di cosa parla questa lezione

Nelle lezioni precedenti il campo magnetico $\vec B$ è stato definito attraverso la **forza di Lorentz** $\vec F = q\,\vec v \times \vec B$, cioè la forza che il campo esercita su **una** carica in moto. Una corrente elettrica non è altro che un enorme numero di cariche che si muovono tutte insieme dentro un conduttore. Se il campo spinge ogni carica, spingerà anche il conduttore che le contiene.

In questa lezione si risponde a tre domande:
1. che forza subisce un **filo** percorso da corrente immerso in un campo magnetico (seconda legge elementare di Laplace);
2. che cosa succede a un **circuito chiuso** (una spira): la forza totale in un campo uniforme è nulla, ma compare un **momento torcente** che lo fa ruotare;
3. come si descrive in modo compatto questo comportamento: il **momento magnetico** della spira, la sua **energia potenziale** e l'analogia con il dipolo elettrico.

Si parte dal caso più antico e familiare, l'ago magnetico della bussola, e si chiude con un'applicazione importante, l'**effetto Hall**.

## Ago magnetico in un campo magnetico

Un **ago magnetico** è una calamita sottile e allungata: ha un polo nord a un'estremità e un polo sud all'altra. Si ottiene, per esempio, strofinando una sottile lamina di ferro su una calamita: il ferro si **magnetizza** e diventa a sua volta un magnete.

Messo in un campo magnetico, l'ago si comporta esattamente come un piccolo **dipolo elettrico** in un campo elettrico: tende a **orientarsi parallelamente alle linee del campo**, con il polo nord che punta nel verso del campo. È proprio così che, spostando una bussola attorno a una calamita, si disegnano le linee di campo: si scopre che hanno la stessa forma delle linee del campo elettrico di due cariche opposte poste ai poli.

### Perché l'ago ruota ma non trasla

Pensa ai due poli come a due "cariche magnetiche" opposte (è solo un modello, perché poli isolati non esistono). In un campo **uniforme**:
- sul polo nord agisce una forza $\vec F$ nel verso del campo;
- sul polo sud agisce una forza $-\vec F$, uguale in modulo e opposta in verso.

La **forza risultante** è $\vec F + (-\vec F) = 0$: il centro dell'ago non viene spinto da nessuna parte. Però le due forze sono applicate in due punti diversi (le estremità dell'ago) e, se l'ago non è già allineato al campo, **non stanno sulla stessa retta**. Due forze uguali, opposte e non allineate formano una **coppia di forze**. Una coppia non fa traslare un corpo, ma lo fa **ruotare**.

Se $d$ è la lunghezza dell'ago e $\theta$ l'angolo tra l'ago e il campo, il braccio della coppia (distanza tra le due rette d'azione) è $d\sin\theta$ e il momento vale
$$M = F\,d\sin\theta$$
dove $M$ è il momento della coppia (N·m), $F$ il modulo di ciascuna forza (N), $d$ la lunghezza dell'ago (m). Il momento si annulla quando $\sin\theta = 0$, cioè quando l'ago è allineato al campo: lì la rotazione si ferma.

::: attenzione
L'ago in un campo uniforme subisce **solo una coppia di forze**. Non c'è una forza "sul solo polo nord" o "sul solo polo sud": agiscono su entrambi. E non c'è "una forza più una coppia": la risultante è nulla. Una forza netta compare solo se il campo **non è uniforme** (è il motivo per cui una calamita attira la limatura di ferro: vicino ai poli il campo è più intenso).
:::

Come vedremo, una spira percorsa da corrente si comporta nello stesso identico modo: anche lei, in un campo uniforme, subisce solo una coppia. Per questo l'ago e la spira sono entrambi chiamati **dipoli magnetici**.

## Dalla forza di Lorentz alla forza su un filo

### Il modello microscopico

Considera un conduttore percorso da corrente. Al suo interno ci sono $n$ portatori di carica per unità di volume (per un metallo sono elettroni, di carica $-e$), che si muovono tutti con la stessa **velocità di deriva** media $\vec v_d$. La densità di corrente è
$$\vec j = n(-e)\vec v_d = -ne\,\vec v_d$$
dove:
- $\vec j$ = densità di corrente (A/m²);
- $n$ = numero di portatori per unità di volume (m⁻³);
- $e = 1{,}6 \cdot 10^{-19}\,\mathrm C$ = carica elementare;
- $\vec v_d$ = velocità di deriva (m/s).

(Gli elettroni hanno carica negativa, quindi si muovono in verso **opposto** alla corrente: $\vec j$ e $\vec v_d$ sono antiparalleli.)

Se il conduttore è immerso in un campo $\vec B$, su **ciascun** elettrone agisce la forza di Lorentz
$$\vec f = -e\,\vec v_d \times \vec B$$

### Passaggio dalla carica al filo, passo per passo

1. **La forza passa al reticolo.** Gli elettroni non possono uscire dal conduttore: urtano continuamente gli ioni del reticolo cristallino e trasmettono loro la spinta. Il conduttore è trattato come un corpo rigido (indeformabile), quindi la forza sugli elettroni diventa forza sul filo.
2. **Conto gli elettroni in un pezzetto di filo.** Prendo un tratto di lunghezza $ds$ e sezione $S$. Il suo volume è $d\tau = S\,ds$ e contiene $n\,S\,ds$ elettroni.
3. **Sommo le forze.** Tutti gli elettroni del tratto subiscono la stessa forza, quindi
$$d\vec F = (n\,S\,ds)\,(-e\,\vec v_d \times \vec B) = (-ne\vec v_d) \times \vec B\;S\,ds = \vec j \times \vec B\;S\,ds$$
4. **Passo dalla densità all'intensità di corrente.** La corrente è $i = jS$. Introduco il vettore $d\vec s$: modulo $ds$, direzione del filo, verso della corrente (cioè di $\vec j$). Allora $\vec j\,S\,ds = jS\,d\vec s = i\,d\vec s$.

Il risultato è la **seconda legge elementare di Laplace**:
$$d\vec F = i\,d\vec s \times \vec B$$
dove:
- $d\vec F$ = forza sul tratto di filo (N);
- $i$ = intensità di corrente (A);
- $d\vec s$ = tratto infinitesimo di filo, orientato nel verso della corrente (m);
- $\vec B$ = campo magnetico nel punto del tratto (T).

Nota che nella formula finale non compaiono più né $n$, né $e$, né $\vec v_d$: conta solo la corrente. Il risultato è lo stesso se i portatori sono positivi (in quel caso si muovono nel verso della corrente e la carica è $+e$: i due segni cambiano insieme).

### Filo di lunghezza finita

Per un filo che va da un estremo $A$ a un estremo $B$, percorso da una corrente stazionaria $i$, si sommano (integrano) tutti i contributi:
$$\vec F = i\int_A^B d\vec s \times \vec B$$

Il caso più semplice è un **filo rettilineo** di lunghezza $L$ in un campo **uniforme**. Allora $\vec B$ è lo stesso in ogni punto e si può portare fuori dall'integrale; la somma dei $d\vec s$ lungo un segmento è il vettore $\vec L$, lungo quanto il filo e orientato come la corrente:
$$\vec F = i\,\vec L \times \vec B \qquad\qquad F = i\,L\,B\sin\theta$$
dove $\theta$ è l'angolo tra il filo (verso della corrente) e il campo.

Proprietà della forza (sono quelle del prodotto vettoriale):
- è **perpendicolare al filo** e **perpendicolare al campo**, quindi perpendicolare al piano che li contiene;
- il verso si trova con la regola della mano destra: dita lungo la corrente, le pieghi verso $\vec B$, il pollice indica $\vec F$ (oppure: vite destrorsa che porta $\vec L$ su $\vec B$ per l'angolo minore);
- è **massima** ($F = iLB$) quando filo e campo sono perpendicolari;
- è **nulla** quando il filo è parallelo (o antiparallelo) al campo;
- se si inverte la corrente, la forza si inverte.

::: esempio
**Filo perpendicolare al campo.** Un filo di 0,5 m porta una corrente di 2 A ed è perpendicolare a un campo uniforme di 0,4 T.
- Angolo: $\theta = 90°$, quindi $\sin\theta = 1$.
- Forza: $F = iLB = 2 \cdot 0{,}5 \cdot 0{,}4 = 0{,}4\,\mathrm N$.

Se lo stesso filo formasse un angolo di 30° con il campo: $F = 0{,}4 \cdot \sin 30° = 0{,}4 \cdot 0{,}5 = 0{,}2\,\mathrm N$. Se fosse parallelo al campo: $F = 0$.
:::

::: esempio
**Calcolo vettoriale completo (esercizio della dispensa).** Un filo lungo 50 cm, disposto lungo l'asse $x$, è percorso da una corrente di 0,5 A nel verso positivo delle $x$. Nella regione c'è il campo $\vec B = (3\,\mathrm{mT})\,\hat j + (10\,\mathrm{mT})\,\hat k$. Calcolare la forza sul filo.

1. Vettore filo: $\vec L = 0{,}5\,\hat i\ \mathrm m$. Campo in tesla: $\vec B = 0{,}003\,\hat j + 0{,}01\,\hat k$.
2. Prodotto vettoriale con il determinante:
$$\vec L \times \vec B = \begin{vmatrix} \hat i & \hat j & \hat k \\ 0{,}5 & 0 & 0 \\ 0 & 0{,}003 & 0{,}01 \end{vmatrix}$$
   - componente $\hat i$: $0 \cdot 0{,}01 - 0 \cdot 0{,}003 = 0$;
   - componente $\hat j$: $-(0{,}5 \cdot 0{,}01 - 0 \cdot 0) = -0{,}005$;
   - componente $\hat k$: $0{,}5 \cdot 0{,}003 - 0 \cdot 0 = 0{,}0015$.
3. Moltiplico per la corrente $i = 0{,}5\,\mathrm A$:
$$\vec F = 0{,}5\,(-0{,}005\,\hat j + 0{,}0015\,\hat k) = (-2{,}5\,\hat j + 0{,}75\,\hat k) \cdot 10^{-3}\,\mathrm N = 0{,}25 \cdot 10^{-3}\,(-10\,\hat j + 3\,\hat k)\,\mathrm N$$
4. Modulo: $F = 10^{-3}\sqrt{2{,}5^2 + 0{,}75^2} \approx 2{,}6 \cdot 10^{-3}\,\mathrm N$.

Controllo: la forza non ha componente lungo $x$, cioè lungo il filo, come deve essere.
:::

## Filo curvo e circuito chiuso

### Filo piano di forma qualsiasi

Supponi ora che il filo da $A$ a $B$ sia curvo (ma giaccia in un piano) e che il campo sia **uniforme**. Poiché $\vec B$ è costante, esce dall'integrale:
$$\vec F = i\left(\int_A^B d\vec s\right) \times \vec B$$
La somma di tutti i piccoli spostamenti $d\vec s$ lungo il percorso da $A$ a $B$ è semplicemente lo spostamento totale, cioè il vettore $\overrightarrow{AB}$ (come quando cammini: qualunque strada fai, lo spostamento netto è il vettore che va dalla partenza all'arrivo). Quindi
$$\vec F = i\,\overrightarrow{AB} \times \vec B$$

Un filo curvo subisce **la stessa forza di un filo rettilineo con gli stessi estremi**, percorso dalla stessa corrente. La forma del percorso non conta: conta solo il vettore che unisce gli estremi.

::: esempio
Un filo a forma di semicirconferenza di raggio $R = 10\,\mathrm{cm}$ porta 3 A e giace in un piano perpendicolare a un campo uniforme di 0,2 T. Gli estremi distano un diametro, $|\overrightarrow{AB}| = 2R = 0{,}2\,\mathrm m$, e il vettore $\overrightarrow{AB}$ è perpendicolare a $\vec B$. Quindi
$$F = i\,(2R)\,B = 3 \cdot 0{,}2 \cdot 0{,}2 = 0{,}12\,\mathrm N$$
esattamente come per il diametro rettilineo, anche se il filo è lungo $\pi R \approx 0{,}31\,\mathrm m$.
:::

### Circuito chiuso

In un circuito chiuso il punto di arrivo coincide con quello di partenza: $B = A$, quindi $\overrightarrow{AB} = \vec 0$. Ne segue:

**In un campo magnetico uniforme la forza totale su un circuito chiuso (piano) è nulla.**

Il circuito, nel suo insieme, non viene spinto. Questo però **non** significa che resti fermo: le forze sui vari tratti sono applicate in punti diversi e possono avere un momento risultante diverso da zero. Il circuito può **ruotare**. È lo stesso comportamento dell'ago magnetico.

::: attenzione
Il risultato vale solo se il campo è **uniforme**. In un campo non uniforme (per esempio quello prodotto da un filo vicino, che cala con la distanza) i lati di una spira sentono campi diversi e la forza totale può essere diversa da zero.
:::

## Momento meccanico su una spira rettangolare

Prendi una spira rettangolare rigida, di lati $a$ e $b$, percorsa da una corrente stazionaria $i$, libera di ruotare attorno al proprio asse verticale. È immersa in un campo uniforme $\vec B$ orizzontale (perpendicolare all'asse di rotazione), che forma un angolo $\theta$ con il versore $\hat u_n$ normale al piano della spira. Il verso di $\hat u_n$ è quello di avanzamento di una vite destrorsa che gira come la corrente.

Chiama:
- $AB$ e $CD$ i due lati **verticali**, di lunghezza $a$ (paralleli all'asse di rotazione);
- $AD$ e $BC$ i due lati **orizzontali**, di lunghezza $b$.

Considera ogni forza applicata nel punto medio del suo lato.

**Lati orizzontali ($AD$ e $BC$).** Sono percorsi da correnti opposte, quindi subiscono forze uguali e opposte. Sono forze verticali (perpendicolari sia al lato orizzontale sia al campo orizzontale) e stanno **sulla stessa retta** (l'asse verticale della spira): il braccio è nullo. Si annullano e non producono alcun momento. Al più tendono a "stirare" la spira, che però è rigida.

**Lati verticali ($AB$ e $CD$).** Ogni lato verticale è sempre perpendicolare al campo orizzontale, quindi su ciascuno agisce una forza orizzontale di modulo
$$F = i\,a\,B$$
Le due forze sono uguali e opposte (correnti opposte), ma guardando la spira dall'alto si vede che **non sono sulla stessa retta**: formano una coppia. La distanza tra le loro rette d'azione (il braccio) è la proiezione del lato $b$ nella direzione perpendicolare al campo, cioè $b\sin\theta$.

Il momento della coppia è quindi
$$M = F \cdot b\sin\theta = i\,a\,B\,b\sin\theta = i\,(ab)\,B\sin\theta$$
e, poiché $ab = S$ è l'area della spira,
$$M = i\,S\,B\sin\theta$$
dove:
- $M$ = momento meccanico (N·m), diretto lungo l'asse verticale;
- $i$ = corrente (A);
- $S$ = area della spira (m²);
- $B$ = campo (T);
- $\theta$ = angolo tra la normale alla spira e il campo.

## Momento magnetico di una spira

La formula appena trovata contiene sempre il prodotto $iS$ e la direzione della normale. Conviene allora definire un vettore che riassuma tutte le proprietà "magnetiche" della spira: il **momento magnetico**
$$\vec m = i\,S\,\hat u_n$$
dove:
- $\vec m$ = momento magnetico (A·m², equivalente a J/T);
- $i$ = corrente nella spira (A);
- $S$ = area della superficie delimitata dalla spira (m²);
- $\hat u_n$ = versore normale al piano della spira, con verso dato dalla regola della mano destra: le dita piegate seguono la corrente, il pollice indica $\hat u_n$ (equivalente: verso di avanzamento di una vite destrorsa che ruota come la corrente).

Con questa definizione il momento meccanico si scrive in forma vettoriale:
$$\vec M = \vec m \times \vec B \qquad\qquad M = m\,B\sin\theta$$

Anche se l'abbiamo ricavata per un rettangolo, questa relazione vale **per qualunque spira piana** (circolare, triangolare, di forma irregolare): una spira qualsiasi si può pensare come un mosaico di tante piccole spire rettangolari affiancate, le cui correnti sui lati in comune si cancellano.

### Bobine

Per avere un momento magnetico più grande si avvolge strettamente lo stesso filo $N$ volte, ottenendo una **bobina** di $N$ spire uguali con la stessa sezione $S$, percorse dalla stessa corrente $i$. Ogni spira contribuisce con $iS$, quindi:
$$\vec m = N\,i\,S\,\hat u_n \qquad\qquad M = N\,i\,S\,B\sin\theta$$

### Da cosa dipende il momento torcente

Leggendo $M = NiSB\sin\theta$:
- dalla **corrente** $i$ (e dal numero di spire $N$);
- dalla **superficie** $S$ della spira;
- dall'intensità del **campo** $B$;
- dall'**orientazione** della spira nel campo, tramite $\sin\theta$.

Tutte e quattro le grandezze contano: se ne manca una nella risposta, la risposta è incompleta.

### I due casi limite

| Posizione della spira | Angolo $\theta$ tra $\hat u_n$ e $\vec B$ | $\sin\theta$ | Momento |
|---|---|---|---|
| Campo **perpendicolare** al piano della spira (parallelo alla normale) | $0$ (o $\pi$) | 0 | **nullo** |
| Campo **parallelo** al piano della spira (giace nel piano) | $90°$ | 1 | **massimo**, $M = NiSB$ |

::: attenzione
La trappola più frequente: "campo ortogonale alla superficie della spira" significa che $\vec B$ è **parallelo** a $\vec m$ (la normale), cioè $\theta = 0$. In questo caso il momento è **zero**, qualunque siano corrente, area e campo. Il momento massimo si ha invece quando il campo giace nel piano della spira.
:::

::: esempio
**Spira quadrata, due orientazioni.** Lato 20 cm, corrente 2 A, campo uniforme 4 T.
1. Area: $S = (0{,}20\,\mathrm m)^2 = 0{,}04\,\mathrm{m^2}$ (attenzione: 20 cm = 0,20 m, non 20).
2. Momento magnetico: $m = iS = 2 \cdot 0{,}04 = 0{,}08\,\mathrm{A\,m^2}$.
3. **Campo nel piano della spira** ($\theta = 90°$): $M = mB = 0{,}08 \cdot 4 = 0{,}32\,\mathrm{N\,m}$, il valore massimo.
4. **Campo ortogonale alla superficie** ($\theta = 0$): $M = 0{,}08 \cdot 4 \cdot \sin 0 = 0\,\mathrm{N\,m}$.
:::

::: esempio
**Stesso caso con corrente piccola.** Spira quadrata di lato 20 cm, corrente 2 mA, campo 0,5 T ortogonale alla superficie.
- $m = 2 \cdot 10^{-3} \cdot 0{,}04 = 8 \cdot 10^{-5}\,\mathrm{A\,m^2}$.
- $\theta = 0$, quindi $M = 8 \cdot 10^{-5} \cdot 0{,}5 \cdot 0 = 0\,\mathrm{N\,m}$.

Se il campo fosse nel piano della spira, il momento sarebbe $8 \cdot 10^{-5} \cdot 0{,}5 = 4 \cdot 10^{-5}\,\mathrm{N\,m}$.
:::

::: esempio
**Quante spire conviene fare? (esercizio della dispensa).** Si vuole avvolgere un filo lungo $L_t = 25\,\mathrm{cm}$, percorso da $i = 4{,}5\,\mathrm{mA}$, per formare una bobina circolare da mettere in un campo uniforme $B = 5{,}7\,\mathrm{mT}$. Si vuole il momento torcente **massimo**: (a) che angolo deve formare l'asse della bobina con il campo? (b) quante spire? (c) quanto vale il momento massimo?

(a) $M = mB\sin\theta$ è massimo per $\sin\theta = 1$: l'asse della bobina (direzione di $\vec m$) deve essere **perpendicolare** al campo, $\theta = 90°$.

(b) Con $N$ spire circolari di raggio $R$ il filo si divide in $N$ circonferenze: $L_t = N \cdot 2\pi R$, quindi $R = \dfrac{L_t}{2\pi N}$. Il momento magnetico è
$$m = N\,i\,\pi R^2 = N\,i\,\pi\left(\frac{L_t}{2\pi N}\right)^2 = N\,i\,\pi\,\frac{L_t^2}{4\pi^2 N^2} = \frac{i\,L_t^2}{4\pi N}$$
$m$ è inversamente proporzionale a $N$: conviene il **minimo numero di spire**, cioè $N = 1$. (Più spire significa spire più piccole: l'area cala come $1/N^2$, il numero di spire cresce solo come $N$.)

(c) Con $N = 1$ e $\theta = 90°$:
$$M = \frac{i\,L_t^2\,B}{4\pi} = \frac{4{,}5 \cdot 10^{-3} \cdot (0{,}25)^2 \cdot 5{,}7 \cdot 10^{-3}}{4\pi} = \frac{4{,}5 \cdot 10^{-3} \cdot 0{,}0625 \cdot 5{,}7 \cdot 10^{-3}}{12{,}57} \approx 1{,}28 \cdot 10^{-7}\,\mathrm{N\,m}$$
:::

La spira tende a ruotare finché $\vec m$ non si allinea con $\vec B$. Questo è il principio di funzionamento del **motore elettrico** (un dispositivo, il commutatore, inverte la corrente a ogni mezzo giro, così la spira continua a girare) e del **galvanometro** (una bobina trattenuta da una molla ruota di un angolo proporzionale alla corrente).

## Posizioni di equilibrio e piccole oscillazioni

Il momento $M = mB\sin\theta$ si annulla in due posizioni:
- $\theta = 0$: $\vec m$ concorde con $\vec B$. È un equilibrio **stabile**: se sposti un poco la spira, il momento la riporta indietro.
- $\theta = \pi$: $\vec m$ opposto a $\vec B$. È un equilibrio **instabile**: basta un minimo spostamento e la spira si gira fino a portarsi nella posizione opposta ($\theta = 0$).

### Oscillazioni attorno alla posizione stabile

Sia $I$ il momento d'inerzia della spira rispetto all'asse di rotazione (kg·m²). Sposto la spira di un piccolo angolo $\theta$ dalla posizione stabile.
1. Il campo esercita un **momento di richiamo**, che tende a ridurre $\theta$: $M = -mB\sin\theta$ (il segno meno indica che si oppone allo spostamento).
2. Per angoli piccoli $\sin\theta \approx \theta$ (in radianti), quindi $M \approx -mB\,\theta$.
3. Seconda legge della dinamica per le rotazioni, $I\,\ddot\theta = M$:
$$I\,\frac{d^2\theta}{dt^2} = -mB\,\theta \quad\Rightarrow\quad \frac{d^2\theta}{dt^2} + \frac{mB}{I}\,\theta = 0$$
4. È l'equazione del **moto armonico** (come il pendolo o la molla), con pulsazione
$$\omega = \sqrt{\frac{mB}{I}} \qquad\qquad T = 2\pi\sqrt{\frac{I}{mB}}$$
dove $\omega$ è in rad/s e il periodo $T$ in s.

Misurando il periodo si può ricavare $B$ (se si conosce $m$) o $m$ (se si conosce $B$). È anche ciò che fa l'ago di una bussola quando oscilla prima di fermarsi verso nord.

## Energia potenziale del dipolo magnetico

Una spira in un campo magnetico si comporta in modo del tutto analogo a un **dipolo elettrico** in un campo elettrostatico, con il momento magnetico $\vec m$ al posto del momento di dipolo elettrico $\vec p$. Per questo la spira si chiama **dipolo magnetico**.

### Ricavo dell'energia

1. Quando la spira ruota di $d\theta$, il momento del campo compie il lavoro $dW = M\,d\theta$. Il momento tende a far diminuire $\theta$, quindi $dW = -mB\sin\theta\,d\theta$.
2. Per una rotazione da $\theta_1$ a $\theta_2$:
$$W = \int_{\theta_1}^{\theta_2} -mB\sin\theta\,d\theta = mB\left[\cos\theta\right]_{\theta_1}^{\theta_2} = mB(\cos\theta_2 - \cos\theta_1)$$
3. Il lavoro di una forza conservativa è l'opposto della variazione di energia potenziale: $W = -[U(\theta_2) - U(\theta_1)]$. Confrontando:
$$U(\theta) = -mB\cos\theta = -\vec m \cdot \vec B$$
dove $U$ è l'energia potenziale (J), $m$ in A·m², $B$ in T.

### Lettura dell'energia

- $\theta = 0$ ($\vec m$ parallelo a $\vec B$): $U = -mB$, **minimo**. È la posizione di equilibrio stabile: il sistema tende sempre verso di essa.
- $\theta = 90°$: $U = 0$.
- $\theta = \pi$ ($\vec m$ antiparallelo): $U = +mB$, **massimo**. Equilibrio instabile.

La differenza di energia tra le due posizioni estreme è $2mB$: è il lavoro necessario per "capovolgere" il dipolo.

| | Dipolo elettrico | Dipolo magnetico |
|---|---|---|
| Momento | $\vec p = q\vec d$ (C·m) | $\vec m = iS\,\hat u_n$ (A·m²) |
| Momento meccanico | $\vec M = \vec p \times \vec E$ | $\vec M = \vec m \times \vec B$ |
| Energia potenziale | $U = -\vec p \cdot \vec E$ | $U = -\vec m \cdot \vec B$ |
| Forza risultante in campo uniforme | nulla | nulla |

::: esempio
**Dipolo che ruota da fermo (esercizio della dispensa).** Un dipolo magnetico con $m = 20{,}0\,\mathrm{mJ/T}$ viene lasciato libero, da fermo, in un campo uniforme $B = 52\,\mathrm{mT}$. Quando il suo asse passa per la direzione del campo, la sua energia cinetica è $0{,}80\,\mathrm{mJ}$. Qual era l'angolo iniziale tra asse e campo?

1. Quando l'asse è parallelo al campo l'energia potenziale è minima, $U_0 = -mB$.
2. Conservazione dell'energia (parte da fermo): l'energia cinetica acquistata è la diminuzione di energia potenziale:
$$E_c = U_{in} - U_0 = -mB\cos\theta_{in} - (-mB) = mB(1 - \cos\theta_{in})$$
3. Risolvo: $\cos\theta_{in} = 1 - \dfrac{E_c}{mB}$.
4. Numeri: $mB = 20{,}0 \cdot 10^{-3} \cdot 52 \cdot 10^{-3} = 1{,}04 \cdot 10^{-3}\,\mathrm J$; $\dfrac{E_c}{mB} = \dfrac{0{,}80}{1{,}04} \approx 0{,}769$.
5. $\cos\theta_{in} = 1 - 0{,}769 = 0{,}231$, quindi $\theta_{in} = \arccos(0{,}231) \approx 77°$.
:::

## Approfondimento: l'effetto Hall

Considera un conduttore a forma di lastrina piatta, a sezione rettangolare. La corrente scorre lungo la dimensione più lunga (asse $x$) con densità $\vec j$. La larghezza della lastrina (lungo $y$) è $b$, lo spessore (lungo $z$) è $a$. Un campo uniforme $\vec B$ è diretto lungo $z$, perpendicolare alla corrente e alla faccia larga della lastrina.

**Cosa succede, passo per passo.**
1. Le cariche in moto (velocità di deriva $\vec v_d$) subiscono la forza di Lorentz trasversale $\vec F = q\,\vec v_d \times \vec B$, diretta lungo $y$.
2. Questa forza agisce su ogni carica come un campo "elettromotore" $\vec E^* = \vec F/q = \vec v_d \times \vec B$, di modulo $v_d B$.
3. Le cariche derivano lateralmente e si accumulano su una delle due facce laterali; sulla faccia opposta resta un eccesso di carica di segno contrario.
4. Le cariche accumulate creano un campo elettrostatico trasversale $\vec E_H$ (il **campo di Hall**). L'accumulo continua finché la forza elettrica non bilancia quella magnetica: all'equilibrio $E_H = v_d B$.
5. Tra le due facce laterali si misura allora una differenza di potenziale, la **tensione di Hall**:
$$V_H = E_H\,b = v_d\,B\,b$$

Esprimendo $v_d$ con la corrente ($i = j\,ab = n q v_d\,ab$, quindi $v_d = i/(nqab)$):
$$V_H = \frac{i\,B}{n\,q\,a}$$
dove $V_H$ è in V, $n$ è la densità dei portatori (m⁻³), $q$ la loro carica (C), $a$ lo spessore della lastrina nella direzione di $\vec B$ (m).

**Perché è importante.**
- Il **segno** della tensione dipende dal segno dei portatori: se sono positivi il campo di Hall punta in un verso, se sono negativi nel verso opposto. Storicamente è così che si è scoperto che nei metalli la corrente è portata da cariche negative, e che in alcuni semiconduttori i portatori si comportano come cariche positive (le "lacune").
- Dal valore di $V_H$ si ricava la **densità dei portatori** $n$.
- Noti $n$, $q$ e $a$, la tensione è proporzionale a $B$: le **sonde di Hall** sono i comuni strumenti per misurare i campi magnetici.

::: esempio
Lastrina di rame ($n \approx 8{,}5 \cdot 10^{28}\,\mathrm{m^{-3}}$) spessa $a = 0{,}1\,\mathrm{mm}$, con $i = 10\,\mathrm A$ in un campo di 1 T:
$$V_H = \frac{10 \cdot 1}{8{,}5 \cdot 10^{28} \cdot 1{,}6 \cdot 10^{-19} \cdot 10^{-4}} = \frac{10}{1{,}36 \cdot 10^{6}} \approx 7{,}4 \cdot 10^{-6}\,\mathrm V$$
Pochi microvolt: nei metalli $n$ è enorme e l'effetto è piccolo. Nei semiconduttori, con $n$ molto minore, la tensione è molto più grande, ed è per questo che le sonde di Hall sono fatte di semiconduttore.
:::

::: attenzione
- La forza su un filo è sempre **perpendicolare al filo**: non può mai essere "parallela ai fili".
- Forza risultante nulla non significa momento nullo: un circuito chiuso in un campo uniforme non trasla, ma può ruotare.
- Nelle formule l'angolo $\theta$ del momento è quello tra **normale** alla spira e campo, non tra piano della spira e campo.
- Le aree vanno in m²: un quadrato di 20 cm ha area $0{,}04\,\mathrm{m^2}$, non $400$.
:::

::: esame
Le domande chiuse chiedono che cosa subisce un **ago magnetico** in un campo (una coppia di forze, risultante nulla) e da cosa dipende il **momento torcente** su una spira (corrente, superficie, campo e orientazione: $M = NiSB\sin\theta$). Nelle aperte collegate (lezione successiva) si chiede di definire il momento magnetico $\vec m = iS\hat u_n$ e l'azione del campo ($\vec M = \vec m \times \vec B$, energia $U = -\vec m\cdot\vec B$, equilibrio stabile e instabile), e di descrivere la forza su un filo ($d\vec F = i\,d\vec s \times \vec B$, $\vec F = i\vec L \times \vec B$) e su un circuito chiuso (nulla in campo uniforme).
:::

::: sintesi
- Ago magnetico o spira in campo uniforme: coppia di forze, forza risultante nulla, tendenza ad allinearsi al campo.
- Seconda legge di Laplace: $d\vec F = i\,d\vec s \times \vec B$ (dalla forza di Lorentz sui portatori, trasmessa al reticolo).
- Filo rettilineo in campo uniforme: $\vec F = i\vec L \times \vec B$, $F = iLB\sin\theta$; filo piano curvo: $\vec F = i\,\overrightarrow{AB} \times \vec B$.
- Circuito chiuso in campo uniforme: $\vec F = 0$, ma può esserci un momento.
- Momento magnetico: $\vec m = NiS\,\hat u_n$ (A·m²); momento meccanico $\vec M = \vec m \times \vec B$, $M = NiSB\sin\theta$.
- $M = 0$ con campo perpendicolare alla spira; massimo con campo nel piano della spira.
- Equilibrio stabile $\theta = 0$, instabile $\theta = \pi$; piccole oscillazioni con $\omega = \sqrt{mB/I}$.
- Energia del dipolo magnetico: $U = -\vec m \cdot \vec B$ (analoga a $U = -\vec p \cdot \vec E$).
- Effetto Hall: $V_H = iB/(nqa)$; il segno rivela il segno dei portatori; sonde per misurare $B$.
:::

=== 63 dispense
SLIDES: 71, 70
# Lezione 63 — Campo magnetico generato dalle correnti: Laplace e Biot-Savart

## Di cosa parla questa lezione

Nella lezione precedente il campo magnetico era "dato" e si studiava l'effetto che ha sulle correnti. Ora si affronta il problema inverso: **le correnti generano campi magnetici**. Lo scoprì Oersted nel 1820: un filo percorso da corrente fa deviare l'ago di una **bussola** posta lì vicino. Quando la corrente si spegne, l'ago torna verso nord. Per questo una bussola basta per accorgersi che in un filo passa corrente.

La scoperta unì elettricità e magnetismo: le sorgenti del campo magnetico sono le cariche in moto. In questa lezione si vede:
- la **prima legge elementare di Laplace**, che dà il campo prodotto da un tratto infinitesimo di corrente;
- la **legge di Biot-Savart** per il filo rettilineo indefinito, ricavata integrando la legge di Laplace;
- il campo di una **spira circolare** e il suo comportamento da dipolo magnetico;
- la **forza tra due fili** paralleli, da cui deriva la definizione operativa dell'ampere.

## Prima legge elementare di Laplace

Sulla base delle prime osservazioni sistematiche del legame tra correnti e campi magnetici fu formulata la **prima legge elementare di Laplace**. Un tratto infinitesimo di filo $d\vec l$, percorso dalla corrente $i$, produce in un punto a distanza $r$ il campo infinitesimo
$$d\vec B = \frac{\mu_0}{4\pi}\,i\,\frac{d\vec l \times \hat u_r}{r^2}$$
dove:
- $d\vec B$ = campo magnetico prodotto dal tratto (T);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$ (o H/m) = **permeabilità magnetica del vuoto**;
- $i$ = intensità di corrente (A);
- $d\vec l$ = tratto di filo, diretto nel verso della corrente (m);
- $\hat u_r$ = versore che va dal tratto di filo al punto in cui si calcola il campo;
- $r$ = distanza tra il tratto e il punto (m).

Poiché $\hat u_r = \vec r/r$, la stessa legge si scrive anche $d\vec B = \dfrac{\mu_0 i}{4\pi}\,\dfrac{d\vec l \times \vec r}{r^3}$.

**Come leggerla.**
- **Modulo**: $dB = \dfrac{\mu_0}{4\pi}\,\dfrac{i\,dl\,\sin\theta}{r^2}$, con $\theta$ angolo tra $d\vec l$ e $\hat u_r$. Il campo cala con il **quadrato** della distanza, proprio come il campo elettrico di una carica puntiforme. È nullo nei punti allineati al tratto di filo ($\sin\theta = 0$).
- **Direzione**: è data dal prodotto vettoriale, quindi $d\vec B$ è **perpendicolare** sia al tratto di filo sia al vettore che unisce il filo al punto.
- **Verso**: quello di rotazione di una vite destrorsa che avanza come la corrente. Equivalente: **regola della mano destra** chiusa a pugno, con il pollice aperto nel verso della corrente: le dita chiuse indicano il verso del campo.

### Confronto con il campo elettrico (legge di Coulomb)

| | Campo elettrico di una carica $Q$ | Campo magnetico di un tratto di corrente |
|---|---|---|
| Formula | $\vec E = \dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q}{r^2}\hat u_r$ | $d\vec B = \dfrac{\mu_0}{4\pi}\,\dfrac{i\,d\vec l \times \hat u_r}{r^2}$ |
| Dipendenza dalla distanza | $1/r^2$ | $1/r^2$ |
| Direzione | **lungo** $\hat u_r$ (radiale) | **perpendicolare** a $\hat u_r$ e a $d\vec l$ |
| Costante | $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{F/m}$ | $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$ |

### Legge di Ampère-Laplace: il campo di un circuito intero

Per trovare il campo di un circuito chiuso si sommano (integrano) i contributi di tutti i suoi tratti:
$$\vec B = \oint \frac{\mu_0}{4\pi}\,i\,\frac{d\vec l \times \hat u_r}{r^2}$$
È la **legge di Ampère-Laplace**, valida per ogni circuito **filiforme**, cioè con sezione trascurabile rispetto alle distanze in gioco (così $r$ e $\hat u_r$ sono gli stessi per tutti i punti della sezione).

### Il campo di una carica in moto

La legge di Laplace dice in fondo che **le cariche in moto generano campo magnetico**. Il tratto $dl$ di sezione $S$ contiene $n\,S\,dl$ cariche $q$ con velocità $\vec v$, e $i\,d\vec l = nqvS\,d\vec l = nS\,dl\;q\vec v$. Quindi
$$d\vec B = \frac{\mu_0}{4\pi}\,nS\,dl\;\frac{q\,\vec v \times \hat u_r}{r^2}$$
e, dividendo per il numero di cariche $nS\,dl$, il campo prodotto da **una singola carica** in moto è
$$\vec B = \frac{\mu_0}{4\pi}\,\frac{q\,\vec v \times \hat u_r}{r^2}$$
dove $q$ è la carica (C) e $\vec v$ la sua velocità (m/s). Una carica ferma produce solo campo elettrico; una carica in moto produce anche campo magnetico.

## Legge di Biot-Savart: il filo rettilineo

### Filo di lunghezza finita

Prendi un filo rettilineo di lunghezza $2L$, percorso dalla corrente $i$, e un punto $P$ a distanza $R$ dal punto medio del filo, sul piano perpendicolare al filo che passa per il suo centro (il "piano mediano").

**Passo 1: contributo di un tratto.** Un tratto $dl$ a distanza $l$ dal punto medio dista $r$ da $P$; sia $\theta$ l'angolo tra la direzione della corrente e il versore $\hat u_r$ che va dal tratto a $P$. Dalla legge di Laplace:
$$dB = \frac{\mu_0 i}{4\pi}\,\frac{dl\,\sin\theta}{r^2}$$
Tutti i tratti del filo danno un campo con la **stessa direzione** (perpendicolare al piano che contiene filo e punto), quindi si possono sommare i moduli.

**Passo 2: esprimo tutto con l'angolo $\theta$.** Dal triangolo rettangolo formato da filo, $P$ e il piede della perpendicolare:
- la distanza di $P$ dal filo è $R = r\sin(\pi - \theta) = r\sin\theta$, quindi $\dfrac{1}{r^2} = \dfrac{\sin^2\theta}{R^2}$;
- la posizione del tratto è $l = -R\cot\theta$ (da $l\tan(\pi - \theta) = R$), quindi, derivando, $dl = \dfrac{R\,d\theta}{\sin^2\theta}$.

**Passo 3: sostituisco.**
$$dB = \frac{\mu_0 i}{4\pi}\,\sin\theta\,\frac{R\,d\theta}{\sin^2\theta}\,\frac{\sin^2\theta}{R^2} = \frac{\mu_0 i}{4\pi}\,\frac{\sin\theta\,d\theta}{R} = -\frac{\mu_0 i}{4\pi R}\,d(\cos\theta)$$
(ho usato $d(\cos\theta) = -\sin\theta\,d\theta$).

**Passo 4: integro.** Per simmetria le due metà del filo danno lo stesso contributo; basta integrare su una metà e moltiplicare per 2. Su una metà l'angolo va dal valore $\theta_0$ che corrisponde all'estremo del filo, con $\cos\theta_0 = \dfrac{L}{\sqrt{L^2 + R^2}}$, fino a $\pi/2$ (punto medio, $\cos\theta = 0$):
$$B = 2\int_{\cos\theta_0}^{0} -\frac{\mu_0 i}{4\pi R}\,d(\cos\theta) = 2\,\frac{\mu_0 i}{4\pi R}\cos\theta_0 = \frac{\mu_0 i}{2\pi R}\,\frac{L}{\sqrt{L^2 + R^2}}$$

### Filo indefinito: la legge di Biot-Savart

Se il filo diventa infinitamente lungo, $L \to \infty$ e $\dfrac{L}{\sqrt{L^2 + R^2}} \to 1$. Si ottiene la **legge di Biot-Savart**:
$$\vec B = \frac{\mu_0\,i}{2\pi R}\,\hat u_\varphi \qquad\qquad B = \frac{\mu_0\,i}{2\pi R}$$
dove:
- $B$ = modulo del campo (T);
- $i$ = corrente nel filo (A);
- $R$ = distanza dal filo (m);
- $\hat u_\varphi$ = versore tangente alla circonferenza di raggio $R$ centrata sul filo, nel verso dato dalla mano destra.

Il fattore $\dfrac{\mu_0}{2\pi} = 2 \cdot 10^{-7}\,\mathrm{T\,m/A}$ rende i conti rapidi: $B = 2 \cdot 10^{-7}\,\dfrac{i}{R}$.

**Proprietà del campo del filo indefinito.**
- È **direttamente proporzionale alla corrente** $i$ (prima potenza, non quadrato né cubo).
- È **inversamente proporzionale alla distanza** $R$ (non al suo quadrato: il $1/r^2$ della legge di Laplace, integrato su un filo infinito, diventa $1/R$).
- Le linee di campo sono **circonferenze concentriche** con il filo, centrate su di esso.
- Queste circonferenze giacciono in **piani perpendicolari al filo**: il campo non ha mai componente lungo il filo, né componente radiale.
- Il modulo è costante lungo ogni circonferenza e dipende solo dalla distanza dal filo (simmetria cilindrica).
- Il verso si trova con la mano destra: pollice nel verso della corrente, le dita chiuse girano come il campo.

::: attenzione
Le linee del campo magnetico del filo **non** sono rette uscenti dal filo (quello sarebbe il campo elettrico di un filo carico) e **non** sono parallele al filo. Sono cerchi chiusi attorno al filo, in piani ortogonali al filo.
:::

::: esempio
**Corrente dal campo.** A 2,4 cm da un filo rettilineo molto lungo il campo vale 16 µT. Quanto vale la corrente?
1. Conversioni: $R = 2{,}4\,\mathrm{cm} = 0{,}024\,\mathrm m$; $B = 16\,\mu\mathrm T = 16 \cdot 10^{-6}\,\mathrm T$.
2. Ricavo $i$ da Biot-Savart: $i = \dfrac{2\pi R B}{\mu_0}$.
3. Semplifico $\dfrac{2\pi}{4\pi \cdot 10^{-7}} = \dfrac{1}{2 \cdot 10^{-7}}$:
$$i = \frac{R\,B}{2 \cdot 10^{-7}} = \frac{0{,}024 \cdot 16 \cdot 10^{-6}}{2 \cdot 10^{-7}} = \frac{3{,}84 \cdot 10^{-7}}{2 \cdot 10^{-7}} = 1{,}92\,\mathrm A$$
:::

::: esempio
**Filo in un campo esterno (esercizio della dispensa).** Un filo molto lungo con corrente di 100 A si trova in un campo esterno uniforme di 5 mT, perpendicolare al filo. Dove il campo totale è nullo?

Il campo totale si annulla dove il campo del filo ha lo stesso modulo del campo esterno e verso opposto.
1. Uguaglio i moduli: $\dfrac{\mu_0 i}{2\pi r} = B_0$, quindi
$$r = \frac{\mu_0 i}{2\pi B_0} = \frac{2 \cdot 10^{-7} \cdot 100}{5 \cdot 10^{-3}} = 4 \cdot 10^{-3}\,\mathrm m = 4\,\mathrm{mm}$$
2. Su una circonferenza di 4 mm attorno al filo il modulo è giusto, ma il verso è opposto a $\vec B_0$ solo in un punto di ogni circonferenza (dove la tangente è antiparallela a $\vec B_0$).
3. Il luogo dei punti è quindi una **retta parallela al filo**, a 4 mm da esso, lungo la quale il campo del filo (che gira come una vite destrorsa che avanza con la corrente) punta in verso opposto al campo esterno.
:::

::: esempio
**Due fili e direzione del campo (esercizio della dispensa).** Due fili indefiniti e paralleli, perpendicolari al piano $xy$, sono equidistanti dall'origine: uno sull'asse $y$ con $i_1 = 30{,}0\,\mathrm{mA}$, l'altro sull'asse $x$ con $i_2 = 20{,}0\,\mathrm{mA}$, con correnti di verso opposto. Nell'origine i due campi sono perpendicolari: $B_1$ lungo $x$, $B_2$ lungo $y$. Di quanto bisogna cambiare $i_1$ perché il campo totale ruoti di 20°?

1. Stessa distanza $r$ per entrambi, quindi $B_1 = \dfrac{\mu_0 i_1}{2\pi r}$, $B_2 = \dfrac{\mu_0 i_2}{2\pi r}$.
2. Angolo del campo risultante rispetto all'asse $x$: $\tan\theta = \dfrac{B_2}{B_1} = \dfrac{i_2}{i_1}$ (le costanti si semplificano). Quindi $\theta = \arctan\dfrac{20}{30} \approx 33{,}7°$.
3. Nuovo angolo: $\theta' = 33{,}7° + 20° = 53{,}7°$. Serve $\dfrac{i_2}{i_1'} = \tan 53{,}7° \approx 1{,}36$.
4. $i_1' = \dfrac{20{,}0}{1{,}36} \approx 14{,}7\,\mathrm{mA}$: la corrente va circa dimezzata.
:::

## Campo magnetico di una spira circolare

Considera una spira circolare di raggio $R$, nel piano $yz$ e centrata nell'origine, percorsa dalla corrente $i$. Vogliamo il campo in un punto dell'**asse** $x$ della spira, a distanza $x$ dal centro.

**Passo 1: contributo di un tratto.** Ogni tratto $d\vec l$ della spira è perpendicolare al vettore $\vec r$ che lo collega al punto sull'asse ($\sin = 1$), quindi
$$dB = \frac{\mu_0 i}{4\pi}\,\frac{dl}{r^2} \qquad r^2 = x^2 + R^2$$
Il vettore $d\vec B$ è perpendicolare a $\vec r$: ha una componente lungo l'asse $x$ e una componente perpendicolare all'asse.

**Passo 2: simmetria.** Due tratti diametralmente opposti danno componenti perpendicolari all'asse uguali e opposte, che si annullano. Restano solo le componenti **lungo l'asse**. Se $\theta$ è l'angolo tra $d\vec B$ e l'asse, la componente assiale è
$$dB_x = \frac{\mu_0 i}{4\pi}\,\frac{dl\cos\theta}{r^2} \qquad \text{con}\quad \cos\theta = \frac{R}{r}$$

**Passo 3: integro sulla spira.** $r$ e $\theta$ sono uguali per tutti i tratti; $\oint dl = 2\pi R$:
$$B = \frac{\mu_0 i}{4\pi}\,\frac{R}{r^3}\,2\pi R = \frac{\mu_0 i}{2}\,\frac{R^2}{r^3}$$

**Risultato.**
$$\vec B(x) = \frac{\mu_0\,i}{2}\,\frac{R^2}{(x^2 + R^2)^{3/2}}\,\hat u_n$$
dove $R$ è il raggio della spira (m), $x$ la distanza dal centro lungo l'asse (m) e $\hat u_n$ il versore normale alla spira (lo stesso del momento magnetico: mano destra, dita come la corrente, pollice come il campo).

**Come si comporta.**
- Il campo è **diretto lungo l'asse**, perpendicolare al piano della spira; non è diretto "come la corrente", che invece scorre lungo la circonferenza.
- La distanza compare al quadrato, quindi il **verso è lo stesso** in tutti i punti dell'asse, da una parte e dall'altra della spira.
- È proporzionale alla corrente (prima potenza).
- Il denominatore cresce con $x$: il campo è **massimo al centro** della spira ($x = 0$):
$$B_{centro} = \frac{\mu_0\,i}{2R}$$
- Lontano dalla spira ($x \gg R$): $B \approx \dfrac{\mu_0 i R^2}{2x^3}$, cala come $1/x^3$.

::: esempio
Spira di raggio 10 cm con corrente di 5 A.
- Al centro: $B = \dfrac{4\pi \cdot 10^{-7} \cdot 5}{2 \cdot 0{,}10} = \dfrac{6{,}28 \cdot 10^{-6}}{0{,}2} \approx 3{,}14 \cdot 10^{-5}\,\mathrm T$.
- Sull'asse a $x = R = 10\,\mathrm{cm}$: $(x^2 + R^2)^{3/2} = (2R^2)^{3/2} = 2^{3/2}R^3$, quindi $B = \dfrac{B_{centro}}{2^{3/2}} = \dfrac{3{,}14 \cdot 10^{-5}}{2{,}83} \approx 1{,}11 \cdot 10^{-5}\,\mathrm T$: già a un raggio di distanza il campo è circa un terzo.
:::

### La spira come dipolo magnetico

Per grandi distanze, usando il momento magnetico $m = i\pi R^2$:
$$B(x) \approx \frac{\mu_0}{4\pi}\,\frac{2\,i\pi R^2}{x^3} = \frac{\mu_0}{4\pi}\,\frac{2m}{x^3}$$
È la stessa forma del campo elettrico sull'asse di un dipolo, $E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{x^3}$. In generale l'analogia vale in ogni punto lontano: il campo di una spira ha la stessa struttura di quello di un dipolo elettrico. Per questo la spira è un **dipolo magnetico**.

**Differenza sostanziale**: le linee del dipolo elettrico **partono** dalla carica positiva e **finiscono** sulla negativa. Le linee del campo magnetico invece **non hanno né inizio né fine**: sono **sempre chiuse** e concatenate con la corrente che le produce (passano dentro la spira, escono, girano all'esterno e rientrano). Poiché sono chiuse e percorse sempre nello stesso verso, se si calcola la circuitazione del campo lungo una di esse il risultato non può essere nullo: il campo magnetico non è conservativo (lo si vedrà con il teorema di Ampère).

## Forza tra due fili rettilinei paralleli

Considera due fili paralleli molto lunghi (indefiniti), a distanza $d$, percorsi dalle correnti $i_1$ e $i_2$. Ciascun filo si trova nel campo prodotto dall'altro e quindi subisce una forza.

**Ricavo passo per passo.**
1. Il filo 1 produce, nei punti del filo 2, il campo $B_1 = \dfrac{\mu_0 i_1}{2\pi d}$, perpendicolare al piano che contiene i due fili.
2. Un tratto $d\vec l_2$ del filo 2 subisce (seconda legge di Laplace) $d\vec F_{12} = i_2\,d\vec l_2 \times \vec B_1$. Poiché $d\vec l_2$ (lungo il filo) è perpendicolare a $\vec B_1$, il modulo è $dF_{12} = i_2\,dl_2\,B_1$.
3. Forza per unità di lunghezza:
$$\frac{F}{l} = i_2 B_1 = \frac{\mu_0\,i_1\,i_2}{2\pi d}$$
dove $F/l$ è in N/m, $i_1$ e $i_2$ in A, $d$ in m.

**Direzione e verso.** La forza è $i_2\,\hat u_2 \times \vec B_1$: perpendicolare al filo 2 e a $\vec B_1$, quindi **giace nel piano dei due fili ed è perpendicolare ai fili**. Applicando la regola della mano destra:
- correnti **nello stesso verso** (equiverse): forza **attrattiva**;
- correnti **in verso opposto**: forza **repulsiva**.

È il contrario di quello che succede con le cariche elettriche (dove "uguali" si respingono): qui "uguali" (concordi) si attraggono.

Per il principio di azione e reazione la forza è reciproca: il filo 1 subisce da parte del filo 2 una forza per unità di lunghezza uguale e opposta.

### Definizione operativa dell'ampere

La forza tra fili paralleli è stata usata per definire l'ampere, una delle grandezze fondamentali del SI: **1 A è la corrente che, circolando in due fili rettilinei paralleli posti a 1 m di distanza nel vuoto, produce una forza di $2 \cdot 10^{-7}\,\mathrm N$ per ogni metro di filo**. Infatti
$$\frac{F}{l} = \frac{\mu_0 \cdot 1 \cdot 1}{2\pi \cdot 1} = \frac{4\pi \cdot 10^{-7}}{2\pi} = 2 \cdot 10^{-7}\,\mathrm{N/m}$$
Questa scelta fissava anche il valore esatto di $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$. (Dal 2019 l'ampere è definito fissando il valore della carica elementare, ma il valore numerico di $\mu_0$ resta, con ottima precisione, lo stesso.)

::: esempio
Due cavi paralleli distanti 2 cm portano ciascuno 20 A in versi opposti. Forza per metro:
$$\frac{F}{l} = \frac{2 \cdot 10^{-7} \cdot 20 \cdot 20}{0{,}02} = \frac{8 \cdot 10^{-5}}{0{,}02} = 4 \cdot 10^{-3}\,\mathrm{N/m}$$
repulsiva, perché le correnti sono opposte.
:::

## Cariche in moto vicino a un filo

Una carica in moto è una piccola corrente, quindi anche lei risente del campo del filo con la forza di Lorentz $\vec F = q\,\vec v \times \vec B$.

::: esempio
**Carica parallela al filo.** Una carica puntiforme positiva viaggia a velocità costante, parallela a un filo indefinito, a distanza $d$. A un certo istante nel filo si accende una corrente stazionaria $i$ nello stesso verso del moto della carica. Che cosa succede?

1. Metto il filo lungo l'asse $x$, corrente nel verso $+x$, e la carica nel punto a distanza $d$ lungo $+y$, con velocità $\vec v = v\,\hat x$.
2. Il campo del filo in quel punto ha modulo $\dfrac{\mu_0 i}{2\pi d}$ ed è tangente alla circonferenza attorno al filo: con la mano destra (pollice lungo $+x$) nel punto sull'asse $+y$ il campo punta lungo $+z$, cioè perpendicolare al piano che contiene filo e traiettoria.
3. Forza: $\vec F = q v B\,(\hat x \times \hat z) = -qvB\,\hat y$. Punta verso $-y$, cioè **verso il filo**.
4. Lettura fisica: la carica positiva in moto è come una corrente concorde con quella del filo, e correnti concordi si attraggono.

La carica quindi **viene deflessa verso il filo**, restando nel piano filo-traiettoria (la forza è perpendicolare a $\vec B$, che è perpendicolare a quel piano). Non continua in moto rettilineo uniforme, perché $\vec v \perp \vec B$ e la forza non è nulla.
:::

::: esempio
**Elettrone vicino a un filo (esercizio della dispensa).** In un filo indefinito scorre una corrente di 50 A. A 5,0 cm dal filo c'è un elettrone con velocità di modulo $1{,}0 \cdot 10^7\,\mathrm{m/s}$. Calcolare la forza quando la velocità è (a) diretta verso il filo, (b) parallela al filo nel verso della corrente, (c) ortogonale alle due direzioni precedenti.

Campo nel punto: $B = \dfrac{\mu_0 i}{2\pi r} = \dfrac{2 \cdot 10^{-7} \cdot 50}{0{,}05} = 2 \cdot 10^{-4}\,\mathrm T$, tangente alla circonferenza attorno al filo. Forza: $\vec F = -e\,\vec v \times \vec B$.

(a) Velocità radiale (verso il filo): è perpendicolare al campo. La forza è diretta **parallelamente al filo**, nel verso della corrente.

(b) Velocità parallela al filo nel verso della corrente: ancora perpendicolare al campo. La forza è **ortogonale al filo**, nel verso di allontanamento (l'elettrone negativo che va come la corrente equivale a una corrente opposta: repulsione).

Nei casi (a) e (b) il modulo è
$$F = evB = 1{,}6 \cdot 10^{-19} \cdot 10^7 \cdot 2 \cdot 10^{-4} = 3{,}2 \cdot 10^{-16}\,\mathrm N$$

(c) Velocità tangente alla circonferenza, cioè **parallela al campo**: $\vec v \times \vec B = 0$, la forza è **nulla**.
:::

## Richiamo: azioni del campo sulle correnti

Il paniere di questa lezione contiene anche domande sulle forze che il campo esercita sulle correnti (lezione precedente). In breve:
- **tratto di filo rettilineo** in campo uniforme: $\vec F = i\vec L \times \vec B$, modulo $iLB\sin\theta$, perpendicolare al filo e al campo;
- **circuito chiuso** in campo uniforme: forza totale nulla, perché $\oint d\vec s = 0$;
- **spira piana**: momento magnetico $\vec m = iS\,\hat u_n$ (A·m²), momento meccanico $\vec M = \vec m \times \vec B$, cioè $M = iSB\sin\theta$ con $\theta$ angolo tra normale e campo; energia $U = -\vec m \cdot \vec B$.

::: esempio
Spira quadrata di lato 20 cm, corrente 2 mA, campo 0,5 T **ortogonale alla superficie**. Il campo è parallelo a $\vec m$, $\sin\theta = 0$, momento nullo: $0\,\mathrm{N\,m}$. Lo stesso vale con 2 A e 4 T: anche lì il momento è zero. Il valore $iSB = 2 \cdot 0{,}04 \cdot 4 = 0{,}32\,\mathrm{N\,m}$ si avrebbe solo con il campo nel piano della spira.
:::

::: attenzione
- Il campo del filo indefinito va come $i$ e come $1/R$: non come $i^2$, $i^3$ o $1/R^2$, e non cresce con la distanza.
- Il campo della spira sull'asse è **massimo al centro**, non minimo.
- Correnti concordi si **attraggono** (al contrario delle cariche dello stesso segno).
- Nei conti con Biot-Savart la distanza va in metri: 2,4 cm = 0,024 m.
:::

::: esame
Domande chiuse: forma e dipendenze del campo del filo (circonferenze concentriche in piani ortogonali al filo, $B \propto i/R$), campo della spira (massimo al centro, diretto lungo l'asse), corrente dal campo con Biot-Savart, forza tra fili (ortogonale e attrattiva se le correnti sono concordi), carica parallela a un filo (deviata verso il filo), bussola come rivelatore di corrente, momento su una spira con campo ortogonale (nullo).

Domande aperte:
- **Legge di Biot-Savart**: parti dalla prima legge di Laplace, integra sul filo (anche solo indicando il risultato del filo finito e il limite $L \to \infty$), scrivi $B = \mu_0 i/(2\pi R)$ e descrivi linee, verso (mano destra) e dipendenze.
- **Momento magnetico e azione del campo**: $\vec m = iS\hat u_n$, $\vec M = \vec m \times \vec B$, forza risultante nulla in campo uniforme, equilibrio stabile e instabile, $U = -\vec m \cdot \vec B$.
- **Forza su filo e circuito chiuso**: $d\vec F = i\,d\vec s \times \vec B$, $\vec F = i\vec L \times \vec B$, filo curvo come il segmento $\overrightarrow{AB}$, circuito chiuso in campo uniforme con forza nulla ma momento possibile.
:::

::: sintesi
- Oersted: le correnti producono campi magnetici (la bussola devia).
- Prima legge di Laplace: $d\vec B = \dfrac{\mu_0}{4\pi}\,\dfrac{i\,d\vec l \times \hat u_r}{r^2}$, $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$; carica in moto: $\vec B = \dfrac{\mu_0}{4\pi}\dfrac{q\vec v \times \hat u_r}{r^2}$.
- Filo finito: $B = \dfrac{\mu_0 i}{2\pi R}\dfrac{L}{\sqrt{L^2+R^2}}$; filo indefinito (Biot-Savart): $B = \dfrac{\mu_0 i}{2\pi R}$, linee circolari in piani ortogonali al filo.
- Spira: $B(x) = \dfrac{\mu_0 i R^2}{2(x^2+R^2)^{3/2}}$ lungo l'asse, massimo al centro $\mu_0 i/(2R)$; lontano è un dipolo, ma con linee chiuse.
- Fili paralleli: $F/l = \mu_0 i_1 i_2/(2\pi d)$, concordi si attraggono, opposti si respingono; definizione dell'ampere ($2 \cdot 10^{-7}\,\mathrm{N/m}$ a 1 m con 1 A).
:::

=== 64 dispense
SLIDES: 72
# Lezione 64 — Teorema di Ampère e solenoidi

## Di cosa parla questa lezione

Per il campo elettrico esiste il teorema di Gauss: in situazioni simmetriche permette di trovare il campo con un conto di una riga, senza integrare la legge di Coulomb. Per il campo magnetico lo strumento analogo è il **teorema di Ampère**, che lega la **circuitazione** del campo magnetico lungo una linea chiusa alle **correnti concatenate** con quella linea.

In questa lezione:
- si definiscono le correnti concatenate;
- si dimostra il teorema di Ampère partendo dal filo rettilineo e se ne ricava la forma locale ($\nabla \times \vec B = \mu_0\vec j$);
- si riottiene in una riga la legge di Biot-Savart e si trova il campo dentro un filo;
- si calcola il campo di un **solenoide** rettilineo e di un **solenoide toroidale**.

## Correnti concatenate a una linea chiusa

Prendi una linea chiusa $l$ e una superficie $S$ che ha $l$ come contorno (come una pellicola di sapone tesa su un anello di fil di ferro). Nella regione passano alcuni fili percorsi da corrente.

Si dice che una corrente è **concatenata** con la linea chiusa $l$ se, nel suo percorso, attraversa una qualsiasi superficie $S$ che ha $l$ come contorno. In parole più semplici: la linea **gira tutto attorno al filo**, come un anello infilato su una corda; se provi a restringere la linea fino a ridurla a un punto, prima o poi devi necessariamente tagliare il filo.

Esempio: cinque fili rettilinei attraversano il piano di una linea chiusa; tre passano dentro la linea, due passano fuori. Le correnti dei tre fili interni sono concatenate, quelle dei due esterni no. Lo stesso discorso vale per fili curvi o per interi circuiti.

## Circuitazione del campo di un filo

La **circuitazione** di $\vec B$ lungo una linea chiusa $\gamma$ è l'integrale $\oint_\gamma \vec B \cdot d\vec l$: si somma, lungo tutta la linea, il prodotto scalare tra il campo e il tratto di linea (cioè la componente del campo lungo la linea per la lunghezza del tratto). Si misura in T·m.

### Caso 1: la linea gira attorno al filo

Considera un filo rettilineo indefinito con corrente $i$ e una linea chiusa qualsiasi, in un piano perpendicolare al filo, che gli gira attorno.
1. In ogni punto il campo è tangente alla circonferenza centrata sul filo: $\vec B = \dfrac{\mu_0 i}{2\pi r}\,\hat u_c$, con $\hat u_c$ versore tangente e $r$ distanza dal filo.
2. Il prodotto scalare è $\vec B \cdot d\vec l = \dfrac{\mu_0 i}{2\pi r}\,(\hat u_c \cdot d\vec l)$.
3. $\hat u_c \cdot d\vec l$ è la proiezione del tratto $d\vec l$ sulla direzione tangente, cioè la lunghezza dell'arco di circonferenza di raggio $r$ visto dal filo sotto l'angolo $d\varphi$: $\hat u_c \cdot d\vec l = r\,d\varphi$. (La parte radiale dello spostamento non conta, perché è perpendicolare al campo.)
4. Sostituendo, la distanza si semplifica:
$$\vec B \cdot d\vec l = \frac{\mu_0 i}{2\pi r}\,r\,d\varphi = \frac{\mu_0 i}{2\pi}\,d\varphi$$
5. Se la linea gira attorno al filo una volta, sempre nello stesso verso, gli angoli $d\varphi$ sommano a un giro completo, $2\pi$:
$$\oint \vec B \cdot d\vec l = \frac{\mu_0 i}{2\pi}\cdot 2\pi = \mu_0\,i$$

Il risultato **non dipende né dalla forma né dalla dimensione** della linea: conta solo che giri attorno al filo. Se la corrente avesse verso opposto rispetto al verso di percorrenza, il risultato cambierebbe semplicemente segno.

### Caso 2: la linea non gira attorno al filo

Se la corrente non è concatenata, il filo "vede" la linea sotto un certo angolo. A ogni tratto $d\vec l$ della linea ne corrisponde un altro, sulla stessa direttrice uscente dal filo, che sottende lo stesso angolo $d\varphi$ ma percorso in verso opposto: i due contributi hanno segno opposto e si cancellano. Gli angoli complessivamente sommano a zero:
$$\oint \vec B \cdot d\vec l = 0$$

## Il teorema di Ampère

Generalizzando (più correnti si sommano per sovrapposizione):

**La circuitazione del campo magnetico lungo una linea chiusa è uguale alla somma algebrica delle correnti concatenate con la linea, moltiplicata per la permeabilità magnetica del vuoto.**
$$\oint_\gamma \vec B \cdot d\vec l = \mu_0 \sum_k i_k$$
dove:
- $\oint_\gamma \vec B \cdot d\vec l$ = circuitazione di $\vec B$ lungo la linea chiusa $\gamma$ (T·m);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$;
- $\sum_k i_k$ = somma algebrica delle sole correnti concatenate (A).

**Regole per i segni e per il conteggio.**
- Una corrente è **positiva** se è orientata nel verso di avanzamento di una vite destrorsa che ruota come il verso di percorrenza della linea (mano destra: dita lungo il verso di percorrenza, il pollice indica il verso positivo delle correnti); **negativa** se è opposta.
- Le correnti **non concatenate** non contribuiscono, anche se producono campo lungo la linea (il loro contributo alla circuitazione si cancella).
- Se una stessa corrente è concatenata **più volte** con la linea (per esempio un filo avvolto in una bobina, che attraversa la superficie $N$ volte), contribuisce una volta per ogni passaggio, con il segno corrispondente.

::: esempio
Tre fili attraversano una linea chiusa percorsa in senso antiorario (vista dall'alto): $i_1 = 5\,\mathrm A$ uscente (verso l'osservatore), $i_2 = 2\,\mathrm A$ entrante, $i_3 = 3\,\mathrm A$ uscente ma **fuori** dalla linea.
- Verso positivo (antiorario, mano destra): uscente.
- Somma algebrica delle concatenate: $5 - 2 = 3\,\mathrm A$; $i_3$ non conta.
- Circuitazione: $\mu_0 \cdot 3 = 4\pi \cdot 10^{-7} \cdot 3 \approx 3{,}77 \cdot 10^{-6}\,\mathrm{T\,m}$.
:::

### Il campo magnetico non è conservativo

Un campo è conservativo se la sua circuitazione è nulla lungo **ogni** linea chiusa. Per il campo magnetico la circuitazione è diversa da zero ogni volta che la linea concatena delle correnti. Quindi **il campo magnetico non è conservativo** e non si può definire un potenziale scalare magnetico valido ovunque. Le sue linee si chiudono attorno alle correnti.

Il campo **elettrostatico**, invece, ha circuitazione **sempre nulla** ($\oint \vec E \cdot d\vec l = 0$): è conservativo.

::: attenzione
"La circuitazione del campo elettrostatico è sempre nulla" è un'affermazione **vera**, ma **non** è il teorema di Ampère: è la conservatività del campo elettrostatico. Il teorema di Ampère riguarda il campo **magnetico** e dice che la sua circuitazione vale $\mu_0$ per la somma delle correnti concatenate; **non** dice che è nulla. Se tra le risposte a "cosa afferma la legge di Ampère" compaiono solo frasi sulla circuitazione nulla (del campo magnetico, elettrostatico o elettrico), nessuna è la legge di Ampère.
:::

## Forma locale del teorema di Ampère

Il teorema di Ampère in forma integrale riguarda una linea finita. Si può trasformare in una relazione che vale **punto per punto**.

1. **Teorema di Stokes**: la circuitazione di un vettore lungo una linea chiusa è uguale al flusso del suo **rotore** attraverso una qualsiasi superficie $S$ che ha la linea come contorno:
$$\oint_\gamma \vec B \cdot d\vec l = \int_S (\nabla \times \vec B) \cdot d\vec S$$
2. **Corrente come flusso della densità di corrente**: per definizione, la corrente che attraversa $S$ è $i = \int_S \vec j \cdot d\vec S$.
3. **Uguaglio** usando Ampère:
$$\int_S (\nabla \times \vec B) \cdot d\vec S = \mu_0 \int_S \vec j \cdot d\vec S$$
4. Questa uguaglianza vale per **qualsiasi** superficie che si appoggi a **qualsiasi** linea chiusa. L'unico modo perché due integrali siano sempre uguali è che lo siano le funzioni integrande:
$$\nabla \times \vec B = \mu_0\,\vec j$$
dove $\vec j$ è la densità di corrente (A/m²) e $\nabla \times \vec B$ il rotore del campo (T/m).

Significato: dove passa corrente il campo magnetico "vortica" attorno ad essa; dove non c'è corrente il rotore è nullo. (Vale per correnti stazionarie; Maxwell la completerà con la corrente di spostamento, lezione 72.)

## Applicazioni del teorema di Ampère

Il teorema è sempre vero, ma è **utile per calcolare** il campo solo quando c'è simmetria: bisogna poter scegliere una linea lungo la quale $\vec B$ è tangente e di modulo costante (così $\oint \vec B \cdot d\vec l = B \cdot \text{lunghezza}$), oppure perpendicolare (contributo nullo). È lo stesso ruolo che ha il teorema di Gauss per il campo elettrico.

### Filo rettilineo indefinito: Biot-Savart in una riga

Dalla legge di Laplace sappiamo che il campo del filo ha simmetria cilindrica: è diretto lungo circonferenze concentriche al filo e ha modulo costante su ciascuna. Scelgo come linea una di queste circonferenze, di raggio $r$:
$$\oint \vec B \cdot d\vec l = B \cdot 2\pi r = \mu_0\,i \quad\Rightarrow\quad B = \frac{\mu_0\,i}{2\pi r}$$
È esattamente la legge di Biot-Savart.

### Campo dentro un filo di sezione finita

Supponi che il filo abbia raggio $R$ e che la corrente sia distribuita uniformemente sulla sezione, con densità costante
$$j = \frac{i}{\pi R^2}$$
- **Fuori dal filo** ($r > R$): la circonferenza concatena tutta la corrente, quindi $B = \dfrac{\mu_0 i}{2\pi r}$.
- **Dentro il filo** ($r < R$): la circonferenza di raggio $r$ concatena solo la corrente che passa nel cerchio di raggio $r$:
$$i_c = j\,\pi r^2 = i\,\frac{r^2}{R^2}$$
  Ampère: $B \cdot 2\pi r = \mu_0\,i\,\dfrac{r^2}{R^2}$, quindi
$$B = \frac{\mu_0\,i\,r}{2\pi R^2} \qquad (r < R)$$

Il campo è **nullo sull'asse**, **cresce linearmente** con $r$ fino alla superficie del filo, dove vale $\mu_0 i/(2\pi R)$ (i due risultati coincidono per $r = R$), e poi **decresce come $1/r$** secondo Biot-Savart.

::: esempio
Filo di raggio 1 mm con 10 A uniformi.
- In superficie: $B = \dfrac{2 \cdot 10^{-7} \cdot 10}{10^{-3}} = 2 \cdot 10^{-3}\,\mathrm T$.
- A $r = 0{,}5\,\mathrm{mm}$ (dentro): $B = \dfrac{2 \cdot 10^{-7} \cdot 10 \cdot 0{,}5 \cdot 10^{-3}}{(10^{-3})^2} = 10^{-3}\,\mathrm T$, la metà.
- A $r = 2\,\mathrm{mm}$ (fuori): $B = \dfrac{2 \cdot 10^{-7} \cdot 10}{2 \cdot 10^{-3}} = 10^{-3}\,\mathrm T$, anche qui la metà.
:::

::: esempio
**Cavo coassiale (esercizio della dispensa).** Un cavo coassiale ha un conduttore interno (cilindro pieno di raggio $c$) e uno esterno (guscio tra i raggi $b$ e $a > b$, con $b > c$). I due conduttori portano correnti uguali $i$ in versi opposti, con densità uniforme. Trovare $B(r)$.

Simmetria cilindrica: le linee di $\vec B$ sono circonferenze centrate sull'asse e $B$ dipende solo da $r$. Su una circonferenza di raggio $r$: $\oint \vec B \cdot d\vec l = 2\pi r B(r) = \mu_0 i_c$, quindi $B(r) = \dfrac{\mu_0 i_c}{2\pi r}$. Basta trovare la corrente concatenata $i_c$ in ogni regione.
1. $r < c$ (dentro il conduttore interno): $i_c = i\,\dfrac{r^2}{c^2}$, quindi $B = \dfrac{\mu_0 i r}{2\pi c^2}$.
2. $c < r < b$ (tra i conduttori): $i_c = i$, quindi $B = \dfrac{\mu_0 i}{2\pi r}$.
3. $b < r < a$ (dentro il conduttore esterno): alla corrente $i$ si toglie la parte di corrente opposta compresa tra $b$ e $r$, proporzionale all'area $\pi(r^2 - b^2)$ sul totale $\pi(a^2 - b^2)$:
$$i_c = i - i\,\frac{r^2 - b^2}{a^2 - b^2} = i\,\frac{a^2 - r^2}{a^2 - b^2} \quad\Rightarrow\quad B = \frac{\mu_0 i}{2\pi r}\,\frac{a^2 - r^2}{a^2 - b^2}$$
4. $r > a$ (fuori dal cavo): $i_c = i - i = 0$, quindi $B = 0$.

Il cavo coassiale non produce campo all'esterno: è il motivo per cui si usa per trasmettere segnali senza disturbare (né essere disturbato) l'ambiente.
:::

## Solenoide rettilineo

Un **solenoide** è un filo avvolto a forma di elica cilindrica con passo piccolissimo: in pratica una lunga serie di spire circolari affiancate, tutte percorse dalla stessa corrente $i$.

### Com'è fatto il campo

Considera un solenoide **ideale**, cioè indefinitamente lungo e con spire fittissime.
- Sull'asse, ogni spira dà un campo diretto lungo l'asse, nello stesso verso (mano destra: dita come la corrente nelle spire, pollice come il campo). Sommando i contributi di tutte le spire, il campo sull'asse è **costante** e **parallelo all'asse**.
- Per simmetria il campo è **uniforme e parallelo all'asse in ogni punto interno**, non solo sull'asse.
- Le linee di campo, uscendo da un'estremità del solenoide, si richiudono all'esterno passando per uno spazio enorme. Per un solenoide indefinito si chiudono "all'infinito": il campo **all'esterno è nullo**.

### Calcolo con il teorema di Ampère, passo per passo

Scelgo come linea chiusa un **rettangolo** con due lati paralleli all'asse, di lunghezza $h$: uno **dentro** il solenoide e uno **fuori**; gli altri due lati attraversano l'avvolgimento, perpendicolari all'asse.

1. **Lato interno** (parallelo all'asse): $\vec B$ è parallelo al percorso e costante, il contributo è $B\,h$.
2. **Lato esterno**: il campo è nullo, contributo $0$.
3. **Lati trasversali**: dentro il solenoide $\vec B$ è perpendicolare al percorso ($\vec B \cdot d\vec l = 0$), fuori è nullo. Contributo $0$.
4. **Circuitazione totale**: $\oint \vec B \cdot d\vec l = B\,h$.
5. **Correnti concatenate**: il rettangolo è attraversato da tutte le spire comprese nel tratto $h$. Se $n$ è il numero di spire per unità di lunghezza, sono $n h$ spire, ognuna con corrente $i$. È un caso in cui **una sola corrente è concatenata più volte**: totale $n h i$.
6. **Ampère**: $B\,h = \mu_0\,n\,h\,i$, da cui
$$B = \mu_0\,n\,i \qquad\qquad n = \frac{N}{l}$$
dove:
- $B$ = campo all'interno del solenoide (T);
- $n$ = numero di spire per unità di lunghezza (spire/m, cioè m⁻¹);
- $N$ = numero totale di spire;
- $l$ = lunghezza del solenoide (m);
- $i$ = corrente (A).

Il risultato non dipende da dove si mette il lato interno: il campo è davvero uguale in tutti i punti interni.

### Da cosa dipende e da cosa no

- Dipende dal **numero di spire per unità di lunghezza** $n$ (non dal numero totale $N$ da solo), dalla **corrente** $i$ e dal **materiale** che riempie il solenoide.
- **Non dipende dal raggio** del solenoide né dalla posizione nella sezione: il campo è uniforme su tutta la sezione.

Se il solenoide è riempito con un materiale di permeabilità magnetica relativa $\mu_r$ (lezione 66):
$$B = \mu_0\,\mu_r\,n\,i$$
Con un nucleo di ferro ($\mu_r$ dell'ordine di centinaia o migliaia) il campo aumenta enormemente: è un **elettromagnete**.

Un solenoide reale, di lunghezza finita, ha un campo quasi uniforme al centro e circa la metà alle estremità; all'esterno le sue linee si richiudono come quelle di un **magnete a barra**: un'estremità si comporta da polo nord, l'altra da polo sud.

::: esempio
**Solenoide del paniere.** Lungo 10 cm, 600 spire, corrente 20 A.
1. Lunghezza in metri: $l = 0{,}1\,\mathrm m$.
2. Spire per metro: $n = \dfrac{600}{0{,}1} = 6000\,\mathrm{m^{-1}}$.
3. Campo: $B = 4\pi \cdot 10^{-7} \cdot 6000 \cdot 20 = 4\pi \cdot 10^{-7} \cdot 1{,}2 \cdot 10^5 = 0{,}048\pi \approx 0{,}151\,\mathrm T = 151\,\mathrm{mT}$.

Se per errore si usa $N = 600$ al posto di $n$, si ottiene un valore dieci volte più piccolo (circa 15 mT). Raddoppiando $n$ a parità di corrente il campo raddoppia.
:::

::: esempio
**Elettrone in un solenoide (esercizio della dispensa).** Un lungo solenoide con $n = 100$ spire/cm è percorso da una corrente $i$. Un elettrone si muove all'interno su una circonferenza di raggio 2,5 cm, in un piano perpendicolare all'asse, con velocità $0{,}046\,c$. Quanto vale $i$?

1. Il campo interno è parallelo all'asse, quindi sempre perpendicolare alla velocità. La forza di Lorentz $\vec F = -e\vec v \times \vec B$ punta verso il centro e fa da forza centripeta:
$$evB = \frac{m_e v^2}{r} \quad\Rightarrow\quad B = \frac{m_e v}{e r}$$
2. Numeri: $v = 0{,}046 \cdot 3 \cdot 10^8 = 1{,}38 \cdot 10^7\,\mathrm{m/s}$; $m_e = 9{,}11 \cdot 10^{-31}\,\mathrm{kg}$; $r = 0{,}025\,\mathrm m$.
$$B = \frac{9{,}11 \cdot 10^{-31} \cdot 1{,}38 \cdot 10^7}{1{,}6 \cdot 10^{-19} \cdot 0{,}025} = \frac{1{,}257 \cdot 10^{-23}}{4 \cdot 10^{-21}} \approx 3{,}14 \cdot 10^{-3}\,\mathrm T$$
3. Corrente dal campo del solenoide, con $n = 100\,\mathrm{spire/cm} = 10^4\,\mathrm{m^{-1}}$:
$$i = \frac{B}{\mu_0 n} = \frac{3{,}14 \cdot 10^{-3}}{4\pi \cdot 10^{-7} \cdot 10^4} = \frac{3{,}14 \cdot 10^{-3}}{1{,}257 \cdot 10^{-2}} \approx 0{,}25\,\mathrm A$$
:::

## Solenoide toroidale

Un **toroide** è un solenoide chiuso ad anello: le spire sono avvolte attorno a una superficie a forma di ciambella. Ha in totale $N$ spire percorse dalla corrente $i$.

**Calcolo con Ampère.**
1. Per analogia con il solenoide rettilineo e per simmetria, il campo è diverso da zero solo **dentro** l'avvolgimento, è diretto lungo **circonferenze concentriche** con il centro del toro e ha modulo costante su ciascuna.
2. Scelgo come linea una di queste circonferenze, di raggio $r$, interna all'avvolgimento: $\oint \vec B \cdot d\vec l = B \cdot 2\pi r$.
3. La superficie delimitata dalla circonferenza è attraversata da tutte le $N$ spire (ognuna una volta): corrente concatenata $N i$.
4. Ampère: $B \cdot 2\pi r = \mu_0 N i$, quindi
$$B = \frac{\mu_0\,N\,i}{2\pi r}$$
dove $r$ è la distanza dal centro del toro (m).

- Per una circonferenza **fuori** dal toroide (più piccola del foro, o più grande dell'anello) la corrente concatenata totale è nulla (le spire entrano ed escono, oppure non sono attraversate): $B = 0$. Il toroide ideale **non ha campo esterno**.
- Il campo interno non è perfettamente uniforme: è un po' più intenso verso il bordo interno (raggio minore).
- Se il raggio degli avvolgimenti è molto minore del raggio del toro, $r$ è praticamente lo stesso per tutti i punti interni; con $n = \dfrac{N}{2\pi r}$ spire per unità di lunghezza si ritrova $B = \mu_0 n i$, come nel solenoide rettilineo.

::: esempio
Toroide con 500 spire, corrente 2 A, raggio medio 10 cm:
$$B = \frac{4\pi \cdot 10^{-7} \cdot 500 \cdot 2}{2\pi \cdot 0{,}10} = \frac{2 \cdot 10^{-7} \cdot 1000}{0{,}10} = 2 \cdot 10^{-3}\,\mathrm T$$
:::

::: attenzione
- Nel solenoide si usa $n = N/l$ (spire **per metro**), non il numero totale di spire.
- Il campo del solenoide ideale **non dipende dal raggio**; dipende da $n$, $i$ e materiale.
- Il teorema di Ampère vale sempre, ma serve per calcolare $B$ solo con forti simmetrie (filo, solenoide, toroide, cavo coassiale).
- Le correnti non concatenate producono campo lungo la linea, ma il loro contributo alla circuitazione è zero.
:::

::: esame
Domande chiuse: campo nel solenoide ($B = \mu_0 n i$, con conversione delle unità), che cosa afferma la legge di Ampère (nessuna frase di "circuitazione nulla" è la legge di Ampère), da cosa non dipende il campo del solenoide (il raggio).

Domande aperte:
- **Teorema di Ampère**: definisci le correnti concatenate, enuncia $\oint \vec B \cdot d\vec l = \mu_0 \sum i$ con le regole dei segni e delle concatenazioni multiple, mostra il calcolo per il filo ($\vec B \cdot d\vec l = \frac{\mu_0 i}{2\pi}d\varphi$), osserva che il campo non è conservativo, scrivi la forma locale $\nabla \times \vec B = \mu_0 \vec j$ e un'applicazione (Biot-Savart).
- **Campo nel solenoide**: descrivi il solenoide, il campo uniforme e parallelo all'asse dentro e nullo fuori, ricava $B = \mu_0 n i$ con il rettangolo di Ampère, commenta le dipendenze (non dal raggio) e l'effetto di un nucleo ($\mu_r$).
:::

::: sintesi
- Corrente concatenata: attraversa ogni superficie che ha la linea come bordo.
- Ampère: $\oint \vec B \cdot d\vec l = \mu_0 \sum i_{conc}$ (segno con la vite destrorsa, ogni concatenazione conta); il campo magnetico non è conservativo.
- Forma locale (Stokes): $\nabla \times \vec B = \mu_0 \vec j$.
- Filo: fuori $B = \mu_0 i/(2\pi r)$; dentro (corrente uniforme) $B = \mu_0 i r/(2\pi R^2)$.
- Cavo coassiale con correnti opposte: campo nullo all'esterno.
- Solenoide ideale: $B = \mu_0 n i$ ($\mu_0\mu_r n i$ con nucleo), uniforme e assiale dentro, nullo fuori, indipendente dal raggio.
- Toroide: $B = \mu_0 N i/(2\pi r)$ dentro, nullo fuori.
:::

=== 65
SLIDES:
# Lezione 65 — Flusso del campo magnetico e teorema di Gauss per il magnetismo

## Di cosa parla questa lezione

Il **flusso** di un campo vettoriale attraverso una superficie è già stato incontrato con il campo elettrico (teorema di Gauss). Qui si definisce il **flusso del campo magnetico**, la grandezza che sarà protagonista dell'induzione elettromagnetica: la legge di Faraday dice infatti che una corrente nasce in un circuito ogni volta che cambia il flusso magnetico che lo attraversa.

In questa lezione:
- si definisce il flusso magnetico, la sua unità (il weber) e il suo segno;
- si vede in quali modi può cambiare;
- si enuncia e si spiega il **teorema di Gauss per il magnetismo** ($\oint \vec B \cdot d\vec S = 0$), che esprime l'inesistenza dei monopoli magnetici;
- si introduce il **flusso concatenato** con un circuito.

## Definizione di flusso magnetico

### Superficie piana in un campo uniforme

Prendi una superficie piana di area $S$ in un campo magnetico uniforme $\vec B$. Alla superficie si associa il **vettore superficie** $\vec S = S\,\hat u_n$: modulo uguale all'area, direzione perpendicolare alla superficie, verso scelto per convenzione (per una superficie delimitata da un circuito, il verso dato dalla mano destra rispetto al verso di percorrenza del circuito).

Il **flusso magnetico** è il prodotto scalare tra campo e vettore superficie:
$$\Phi_B = \vec B \cdot \vec S = B\,S\cos\theta$$
dove:
- $\Phi_B$ = flusso magnetico, in **weber** (Wb): $1\,\mathrm{Wb} = 1\,\mathrm{T \cdot m^2}$;
- $B$ = modulo del campo (T);
- $S$ = area della superficie (m²);
- $\theta$ = angolo tra il campo e la **normale** alla superficie.

**Significato intuitivo.** Il flusso misura "quanto campo attraversa la superficie". Se si disegnano le linee di campo con una densità proporzionale a $B$, il flusso è proporzionale al **numero di linee che attraversano la superficie**. Conta solo la componente del campo perpendicolare alla superficie, $B\cos\theta$: la componente parallela "scivola" lungo la superficie senza attraversarla.

Casi particolari:
- campo **perpendicolare** alla superficie (parallelo alla normale, $\theta = 0$): flusso **massimo**, $\Phi = BS$;
- campo **parallelo** alla superficie ($\theta = 90°$): flusso **nullo**, nessuna linea la attraversa;
- $90° < \theta \le 180°$: flusso **negativo**, il campo attraversa la superficie nel verso opposto alla normale.

### Caso generale

Se la superficie è curva o il campo non è uniforme, si divide la superficie in pezzetti infinitesimi $d\vec S = dS\,\hat u_n$, su ciascuno dei quali il campo è praticamente costante, e si sommano i contributi:
$$\Phi_B = \int_S \vec B \cdot d\vec S$$

::: esempio
**Spira che ruota.** Una spira di area $0{,}2\,\mathrm{m^2}$ è in un campo uniforme di 0,5 T.
- Campo perpendicolare alla spira ($\theta = 0$): $\Phi = 0{,}5 \cdot 0{,}2 \cdot \cos 0 = 0{,}1\,\mathrm{Wb}$.
- Ruotata di 60° ($\theta = 60°$): $\Phi = 0{,}1 \cdot \cos 60° = 0{,}05\,\mathrm{Wb}$.
- Ruotata finché è parallela al campo ($\theta = 90°$): $\Phi = 0$.
- Ruotata di mezzo giro ($\theta = 180°$): $\Phi = -0{,}1\,\mathrm{Wb}$.

Nel mezzo giro il flusso passa da $+0{,}1$ a $-0{,}1\,\mathrm{Wb}$: la variazione è $\Delta\Phi = -0{,}2\,\mathrm{Wb}$, non zero.
:::

::: esempio
**Flusso dentro un solenoide.** Nel solenoide della lezione 64 ($B = 0{,}151\,\mathrm T$) le spire hanno raggio 2 cm. Il flusso attraverso una spira (campo uniforme e perpendicolare alla sezione) è
$$\Phi = B\,\pi r^2 = 0{,}151 \cdot \pi \cdot (0{,}02)^2 = 0{,}151 \cdot 1{,}257 \cdot 10^{-3} \approx 1{,}9 \cdot 10^{-4}\,\mathrm{Wb}$$
:::

## In quali modi può cambiare il flusso

Dalla formula $\Phi = BS\cos\theta$, il flusso attraverso una superficie cambia se cambia almeno uno dei tre fattori:
1. l'**intensità del campo** $B$ (per esempio avvicinando o allontanando un magnete, o variando la corrente che produce il campo);
2. l'**area** $S$ della superficie immersa nel campo (per esempio una spira deformabile, o una spira che entra o esce da una regione con campo);
3. l'**orientamento** $\theta$ della superficie rispetto alle linee di campo (per esempio una spira che ruota).

Basta che cambi uno qualsiasi di questi fattori: non servono tutti insieme.

::: attenzione
La **rapidità** della variazione non decide **se** il flusso cambia: un campo che varia lentamente fa cambiare il flusso esattamente come uno che varia velocemente. La rapidità conta invece per **quanto è grande** la forza elettromotrice indotta (legge di Faraday, lezione 67: $\mathcal E = -d\Phi/dt$). Una risposta del tipo "il flusso cambia solo variando il campo lentamente" o "solo velocemente" è sbagliata, così come "solo variando l'orientamento".
:::

## Teorema di Gauss per il campo magnetico

### Enunciato

**Il flusso del campo magnetico attraverso una qualsiasi superficie chiusa è sempre uguale a zero:**
$$\oint_S \vec B \cdot d\vec S = 0$$
dove $S$ è una superficie **chiusa** (una superficie che racchiude un volume, come una sfera o un cubo), con la normale orientata verso l'esterno.

### Perché è vero

1. Le linee del campo magnetico sono **sempre chiuse**: non partono e non finiscono in nessun punto (lo si è visto per il filo, con linee circolari, e per la spira, con linee che passano dentro la spira e si richiudono fuori). Anche per un magnete a barra le linee escono dal polo nord, rientrano dal polo sud e proseguono **dentro** il magnete fino al polo nord, chiudendosi.
2. Una linea chiusa che entra in una superficie chiusa deve per forza uscirne (altrimenti dovrebbe finire dentro).
3. Ogni linea entrante dà un contributo negativo al flusso, ogni linea uscente un contributo positivo uguale: si compensano esattamente.
4. Il flusso totale è quindi zero, qualunque sia la superficie chiusa e qualunque cosa contenga (anche un magnete intero).

### Significato fisico: non esistono monopoli magnetici

Per il campo elettrico il teorema di Gauss dice $\oint \vec E \cdot d\vec S = Q_{int}/\varepsilon_0$: il flusso è diverso da zero quando la superficie racchiude una carica netta, perché le linee del campo elettrico **partono** dalle cariche positive e **finiscono** su quelle negative. Le cariche sono "sorgenti" e "pozzi" del campo.

Per il campo magnetico il flusso è **sempre nullo**: significa che **non esistono sorgenti puntiformi del campo magnetico**, cioè **monopoli magnetici** (un polo nord o un polo sud isolato). Se spezzi una calamita in due non ottieni un polo nord e un polo sud separati, ma due calamite più piccole, ognuna con il suo nord e il suo sud. Continuando a dividerla, fino agli atomi, si trovano sempre dipoli. Qualunque superficie chiusa che racchiude un magnete racchiude un nord e un sud insieme, con flusso netto nullo.

| | Campo elettrico | Campo magnetico |
|---|---|---|
| Teorema di Gauss | $\oint \vec E \cdot d\vec S = Q_{int}/\varepsilon_0$ | $\oint \vec B \cdot d\vec S = 0$ |
| Sorgenti puntiformi | sì (cariche) | no (niente monopoli) |
| Linee di campo | aperte, da + a − | sempre chiuse |
| Forma locale | $\nabla \cdot \vec E = \rho/\varepsilon_0$ | $\nabla \cdot \vec B = 0$ |

### Forma locale

Con il **teorema della divergenza** il flusso attraverso una superficie chiusa è l'integrale della divergenza sul volume racchiuso: $\oint_S \vec B \cdot d\vec S = \int_V \nabla \cdot \vec B\,dV$. Poiché è zero per **ogni** volume, deve essere zero la funzione integranda:
$$\nabla \cdot \vec B = 0$$
Il campo magnetico è un campo **solenoidale** (a divergenza nulla): in nessun punto "nasce" o "muore".

::: attenzione
Il teorema riguarda le superfici **chiuse**. Attraverso una superficie **aperta** (per esempio il disco delimitato da una spira) il flusso in generale **non** è zero: se lo fosse, non esisterebbe l'induzione elettromagnetica. Frasi come "il flusso attraverso una superficie qualsiasi è zero" o "attraverso una qualsiasi superficie aperta è zero" sono sbagliate. È sbagliato anche dire che il flusso è "proporzionale al numero di magneti contenuti": ogni magnete contiene un nord e un sud e dà flusso netto nullo.
:::

::: esempio
**Cubo in un campo uniforme.** Un cubo di lato 10 cm è in un campo uniforme di 0,3 T parallelo a uno spigolo.
- Faccia da cui il campo entra: $\Phi = -0{,}3 \cdot 0{,}01 = -3 \cdot 10^{-3}\,\mathrm{Wb}$ (campo opposto alla normale uscente).
- Faccia opposta, da cui esce: $\Phi = +3 \cdot 10^{-3}\,\mathrm{Wb}$.
- Quattro facce laterali: campo parallelo alle facce, flusso nullo.
- Totale: $-3 \cdot 10^{-3} + 3 \cdot 10^{-3} + 0 = 0$, come vuole il teorema.
:::

## Flusso concatenato con un circuito

Un circuito chiuso (una spira) è una linea chiusa. Si chiama **flusso concatenato** con il circuito il flusso di $\vec B$ attraverso una qualsiasi superficie che ha il circuito come contorno.

**Perché non importa quale superficie si sceglie.** Prendi due superfici diverse $S_1$ e $S_2$ con lo stesso contorno (per esempio il disco piatto della spira e una "bolla" a calotta appoggiata sulla spira). Insieme formano una superficie chiusa. Per il teorema di Gauss magnetico il flusso totale uscente è zero, quindi il flusso che entra da una è uguale a quello che esce dall'altra: orientando entrambe le normali allo stesso modo rispetto al circuito, $\Phi(S_1) = \Phi(S_2)$. Il flusso concatenato dipende quindi **solo dal circuito**, ed è una grandezza ben definita.

::: esempio
Una semisfera di raggio $R = 5\,\mathrm{cm}$ è appoggiata su un anello, in un campo uniforme di 0,2 T perpendicolare al piano dell'anello. Invece di integrare sulla superficie curva, si usa il disco piano con lo stesso bordo:
$$\Phi = B\,\pi R^2 = 0{,}2 \cdot \pi \cdot 0{,}0025 \approx 1{,}57 \cdot 10^{-3}\,\mathrm{Wb}$$
:::

**Bobina di $N$ spire.** Se il circuito è una bobina di $N$ spire uguali, la superficie che ha come contorno l'intero avvolgimento è attraversata dal campo $N$ volte (una per spira). Il flusso concatenato è $N$ volte quello di una spira:
$$\Phi = N\,B\,S\cos\theta$$

Le **variazioni** del flusso concatenato generano correnti nel circuito: è l'induzione elettromagnetica, descritta dalla legge di Faraday-Neumann-Lenz (lezione 67).

::: esame
Le domande chiedono in quali casi cambia il flusso (variando l'intensità del campo, l'area o l'orientamento; non conta se lentamente o velocemente) e che cosa afferma il teorema di Gauss per il magnetismo (flusso nullo attraverso **qualsiasi superficie chiusa**, assenza di monopoli). Ricorda di distinguere superfici chiuse e aperte.
:::

::: sintesi
- Flusso: $\Phi_B = \vec B \cdot \vec S = BS\cos\theta$, in generale $\int_S \vec B \cdot d\vec S$; unità weber, $1\,\mathrm{Wb} = 1\,\mathrm{T\,m^2}$.
- Massimo con campo perpendicolare alla superficie, nullo con campo parallelo, negativo oltre 90°.
- Il flusso cambia se cambiano $B$, $S$ o $\theta$ (la rapidità conta solo per la f.e.m.).
- Gauss magnetico: $\oint \vec B \cdot d\vec S = 0$ per ogni superficie chiusa; forma locale $\nabla \cdot \vec B = 0$.
- Significato: linee di $\vec B$ sempre chiuse, nessun monopolo magnetico.
- Flusso concatenato: non dipende dalla superficie scelta; con $N$ spire $\Phi = NBS\cos\theta$.
:::

=== 66
SLIDES:
# Lezione 66 — Proprietà magnetiche della materia

## Di cosa parla questa lezione

Finora il campo magnetico è stato studiato **nel vuoto**. Ma se dentro un solenoide si infila un nucleo di ferro, il campo diventa centinaia o migliaia di volte più intenso; se si infila un pezzo di rame, quasi non cambia. La materia reagisce al campo magnetico in modi molto diversi.

Questa lezione spiega:
- perché la materia si magnetizza (origine microscopica: gli atomi sono piccoli dipoli magnetici);
- quali grandezze descrivono la magnetizzazione ($\vec M$, $\vec H$, $\mu_r$, $\chi_m$);
- la **classificazione** dei materiali in **diamagnetici**, **paramagnetici** e **ferromagnetici**;
- le proprietà dei ferromagnetici: domini, saturazione, isteresi, temperatura di Curie.

## Origine microscopica: gli atomi come piccole spire

Negli atomi gli elettroni si muovono attorno al nucleo. Un elettrone su un'orbita è una carica che gira: equivale a una piccolissima **spira percorsa da corrente** e quindi ha un **momento magnetico orbitale**.

**Calcolo con il modello di Bohr (orbita circolare).**
1. Un elettrone di carica $e$ che gira con velocità $v$ su un'orbita di raggio $r$ compie un giro nel tempo $T = 2\pi r/v$.
2. La corrente equivalente è la carica che passa in un punto per unità di tempo: $i = \dfrac{e}{T} = \dfrac{ev}{2\pi r}$.
3. Il momento magnetico è corrente per area: $m = i\,\pi r^2 = \dfrac{ev}{2\pi r}\,\pi r^2 = \dfrac{e\,v\,r}{2}$.

Inoltre ogni elettrone possiede un momento magnetico intrinseco, legato allo **spin**. L'ordine di grandezza dei momenti atomici è il **magnetone di Bohr**, $\mu_B \approx 9{,}27 \cdot 10^{-24}\,\mathrm{A\,m^2}$.

In molti atomi questi momenti si compensano a coppie e l'atomo non ha momento proprio; in altri la compensazione è incompleta e l'atomo ha un **momento magnetico permanente**. Come si comportano questi microscopici dipoli in presenza di un campo esterno decide la classe del materiale.

## Grandezze che descrivono la magnetizzazione

### Magnetizzazione

Un materiale in un campo si **magnetizza**: i suoi dipoli atomici si orientano (o ne nascono di nuovi), e il materiale acquista nel complesso un momento magnetico. La **magnetizzazione** è il momento magnetico per unità di volume:
$$\vec M = \frac{d\vec m}{dV}$$
dove $\vec M$ si misura in (A·m²)/m³ = **A/m**.

Un materiale magnetizzato produce un proprio campo magnetico, che si somma a quello esterno. Si può pensare che la magnetizzazione equivalga a delle correnti microscopiche (correnti "amperiane" o di magnetizzazione) che scorrono sulla superficie del materiale: all'interno le correnti delle spire atomiche vicine si cancellano, sul bordo no.

### Campo magnetizzante $\vec H$

Conviene separare il contributo delle correnti "vere" (di conduzione, che si controllano con un generatore) da quello del materiale. Si definisce il **campo magnetizzante** $\vec H$, legato solo alle correnti di conduzione:
$$\oint \vec H \cdot d\vec l = i_{conduzione}$$
e il campo magnetico totale nel materiale è
$$\vec B = \mu_0\left(\vec H + \vec M\right)$$
dove:
- $\vec B$ = campo magnetico (induzione magnetica) nel materiale (T);
- $\vec H$ = campo magnetizzante (A/m);
- $\vec M$ = magnetizzazione (A/m);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$.

Nel vuoto $\vec M = 0$ e $\vec B = \mu_0 \vec H$.

### Suscettività e permeabilità

Per i materiali **lineari** (dia- e paramagnetici) la magnetizzazione è proporzionale al campo magnetizzante:
$$\vec M = \chi_m\,\vec H$$
dove $\chi_m$ è la **suscettività magnetica** (numero puro). Sostituendo:
$$\vec B = \mu_0(1 + \chi_m)\vec H = \mu_0\,\mu_r\,\vec H \qquad\qquad \mu_r = 1 + \chi_m$$
dove $\mu_r$ è la **permeabilità magnetica relativa** (numero puro) e $\mu = \mu_0\mu_r$ la permeabilità assoluta del materiale.

**Il solenoide pieno di materiale.** Applicando la circuitazione di $\vec H$ al rettangolo del solenoide (come nella lezione 64, ma contando solo le correnti di conduzione): $H h = n h i$, quindi $H = n i$, indipendentemente dal materiale. Allora
$$B = \mu_0\,\mu_r\,H = \mu_0\,\mu_r\,n\,i$$
Il materiale moltiplica il campo del solenoide vuoto per $\mu_r$.

## Le tre classi di materiali

| Tipo | $\chi_m$ | $\mu_r$ | Meccanismo | Vicino a un magnete | Dipendenza dalla temperatura | Esempi |
|---|---|---|---|---|---|---|
| **Diamagnetico** | piccola, **negativa** ($\sim -10^{-5}$) | appena **minore di 1** | momenti **indotti**, opposti al campo | **debolmente respinto** | nessuna | acqua, rame, oro, argento, bismuto, gas nobili |
| **Paramagnetico** | piccola, **positiva** ($10^{-5}$–$10^{-3}$) | appena **maggiore di 1** | momenti **permanenti** che si allineano in parte | **debolmente attratto** | cala come $1/T$ (Curie) | alluminio, platino, ossigeno, sodio |
| **Ferromagnetico** | **molto grande** e non costante | $10^2$–$10^5$ | **domini** di Weiss che si allineano | **fortemente attratto** | diventa paramagnetico sopra $T_C$ | ferro, nichel, cobalto e leghe |

### Diamagnetismo

Riguarda materiali i cui atomi **non hanno momento magnetico proprio** (i momenti degli elettroni si compensano).
- Quando si applica un campo esterno, il moto orbitale degli elettroni viene leggermente modificato (è un effetto di induzione: durante l'accensione del campo nasce un campo elettrico indotto che accelera o frena gli elettroni).
- Per la **legge di Lenz** la variazione si oppone al campo applicato: nasce un piccolo momento magnetico **indotto**, **opposto** al campo esterno.
- La magnetizzazione è opposta a $\vec H$: $\chi_m < 0$, $\mu_r < 1$. Il campo dentro il materiale è leggermente più debole che nel vuoto.
- Il materiale viene **debolmente respinto** dalle zone di campo intenso (cioè da un polo magnetico).
- L'effetto è piccolissimo ($\chi_m \approx -10^{-5}$) e **non dipende dalla temperatura** (non c'è un ordine che l'agitazione termica possa distruggere).
- Il diamagnetismo è presente in **tutti** i materiali, ma si osserva solo dove non è coperto da effetti più forti (para- o ferromagnetismo).

Un caso estremo sono i **superconduttori**, che espellono completamente il campo dal loro interno (effetto Meissner): sono diamagneti perfetti, con $\chi_m = -1$; per questo un magnete può levitare sopra un superconduttore.

### Paramagnetismo

Riguarda materiali i cui atomi **hanno un momento magnetico permanente**.
- Senza campo esterno i momenti atomici sono orientati a caso per l'agitazione termica: la magnetizzazione media è nulla.
- Con un campo esterno, ogni momento tende ad allinearsi al campo (posizione di energia minima, $U = -\vec m \cdot \vec B$), ma l'agitazione termica continua a disordinarlo. Il risultato è un **allineamento parziale**.
- La magnetizzazione è **concorde** al campo: $\chi_m > 0$ piccola, $\mu_r$ appena maggiore di 1.
- Il materiale è **debolmente attratto** verso le zone di campo intenso.
- Più alta è la temperatura, più forte è il disordine e più debole la magnetizzazione: **legge di Curie**
$$\chi_m = \frac{C}{T}$$
dove $C$ è una costante del materiale (costante di Curie, in K) e $T$ la temperatura assoluta (K).
- Anche nei paramagnetici è presente il diamagnetismo, ma è più debole e viene coperto.

### Ferromagnetismo

Riguarda pochi elementi (ferro, nichel, cobalto, alcune terre rare) e molte loro leghe.
- In questi materiali c'è un'interazione (di origine quantistica) che tende ad allineare **spontaneamente** tra loro i momenti degli atomi vicini, anche senza campo esterno.
- Il materiale è diviso in tante piccole regioni, i **domini di Weiss** (dimensioni tipiche da micrometri a millimetri), ciascuna già completamente magnetizzata in una certa direzione.
- In un pezzo di ferro non magnetizzato i domini sono orientati in direzioni diverse e i loro effetti si compensano.
- Applicando un campo esterno, i domini orientati come il campo **crescono** a spese degli altri (le pareti tra domini si spostano) e, con campi più intensi, i domini **ruotano** verso la direzione del campo. La magnetizzazione diventa enorme.

**Proprietà tipiche dei ferromagnetici.**
1. **$\mu_r$ molto grande** (da centinaia a centinaia di migliaia) e **non costante**: la relazione tra $B$ e $H$ non è lineare e dipende dal campo applicato.
2. **Saturazione**: quando tutti i domini sono allineati, la magnetizzazione non può crescere più; aumentando $H$, $B$ cresce solo come nel vuoto ($\mu_0 H$). Per il ferro il campo di saturazione è circa 2 T.
3. **Isteresi**: la magnetizzazione dipende dalla **storia** del materiale, non solo dal campo attuale.
   - Partendo da un materiale smagnetizzato e aumentando $H$, $B$ segue la **curva di prima magnetizzazione** fino alla saturazione.
   - Riportando $H$ a zero, $B$ **non torna a zero**: resta una magnetizzazione residua, il **campo residuo** o **rimanenza** $B_r$. Il materiale è diventato un magnete permanente.
   - Per annullare $B$ bisogna applicare un campo opposto, detto **campo coercitivo** $H_c$.
   - Facendo variare $H$ ciclicamente tra un valore positivo e uno negativo, il grafico $B$–$H$ descrive una curva chiusa, il **ciclo di isteresi**.
   - L'**area del ciclo** è l'energia dissipata in calore, per unità di volume, a ogni ciclo (perdite per isteresi).
4. **Materiali duri e dolci**:
   - **duri** (ciclo largo, grande rimanenza e grande campo coercitivo, per esempio acciai speciali, leghe AlNiCo, ferriti, neodimio-ferro-boro): servono per **magneti permanenti**;
   - **dolci** (ciclo stretto, piccole perdite, per esempio ferro dolce, ferro-silicio): servono per **nuclei di trasformatori, motori ed elettromagneti**, dove la magnetizzazione deve seguire un campo che cambia continuamente senza sprecare energia.

### Temperatura di Curie

L'allineamento spontaneo dei domini compete con l'agitazione termica. Sopra una temperatura caratteristica, la **temperatura di Curie** $T_C$, l'agitazione termica distrugge l'ordine: i domini scompaiono e il materiale diventa **paramagnetico**. Riportato sotto $T_C$, torna ferromagnetico (ma smagnetizzato).

| Materiale | Temperatura di Curie |
|---|---|
| Ferro | circa 770 °C (1043 K) |
| Nichel | circa 358 °C (631 K) |
| Cobalto | circa 1115 °C (1388 K) |

Per questo scaldare un magnete permanente oltre la sua temperatura di Curie lo smagnetizza.

::: esempio
**Effetto di un nucleo.** Solenoide con $n = 1000\,\mathrm{spire/m}$ e $i = 1\,\mathrm A$.
1. Vuoto: $B_0 = \mu_0 n i = 4\pi \cdot 10^{-7} \cdot 1000 \cdot 1 \approx 1{,}26 \cdot 10^{-3}\,\mathrm T$.
2. Con un nucleo di alluminio ($\chi_m \approx 2{,}2 \cdot 10^{-5}$): $B = (1 + 2{,}2 \cdot 10^{-5})B_0$, praticamente invariato (aumento di 22 parti per milione).
3. Con un nucleo di rame ($\chi_m \approx -1 \cdot 10^{-5}$): diminuzione di 10 parti per milione, impercettibile.
4. Con un nucleo di ferro dolce con $\mu_r \approx 1000$ (a questo valore di $H$): $B \approx 1000 \cdot 1{,}26 \cdot 10^{-3} = 1{,}26\,\mathrm T$, mille volte di più.

Con $\mu_r = 5000$ la formula darebbe 6,3 T, ma il ferro satura attorno a 2 T: è un esempio di come per i ferromagnetici $\mu_r$ non sia una costante.
:::

::: attenzione
- Diamagnetici: $\mu_r$ appena **minore** di 1 e **respinti**; paramagnetici: $\mu_r$ appena **maggiore** di 1 e **attratti**. Non invertire.
- Il diamagnetismo c'è in tutti i materiali e non dipende dalla temperatura; il paramagnetismo cala con la temperatura.
- Per i ferromagnetici non ha senso dare "il" valore di $\mu_r$: dipende dal campo e dalla storia (isteresi).
:::

::: esame
Domanda aperta tipica: "Si discuta la classificazione dei materiali sulla base delle loro proprietà di magnetizzazione". Struttura della risposta:
1. la materia si magnetizza perché gli atomi sono dipoli magnetici (momenti orbitali e di spin); definisci $\vec M$, $\vec B = \mu_0(\vec H + \vec M) = \mu_0\mu_r\vec H$, $\chi_m = \mu_r - 1$;
2. per ciascuna classe: segno e ordine di grandezza di $\chi_m$ (o $\mu_r$), meccanismo (momenti indotti opposti / momenti permanenti parzialmente allineati / domini), comportamento vicino a un magnete, dipendenza dalla temperatura, esempi;
3. per i ferromagnetici: domini di Weiss, saturazione, ciclo di isteresi (rimanenza, campo coercitivo, area = energia persa), materiali duri e dolci, temperatura di Curie.
:::

::: sintesi
- Gli atomi sono piccoli dipoli magnetici (orbita: $m = evr/2$; spin); la materia in un campo si magnetizza.
- Magnetizzazione $\vec M$ (A/m); $\vec B = \mu_0(\vec H + \vec M) = \mu_0\mu_r\vec H$; $\chi_m = \mu_r - 1$; solenoide pieno: $B = \mu_0\mu_r n i$.
- Diamagnetici: $\chi_m \approx -10^{-5}$, momenti indotti opposti (Lenz), debolmente respinti, indipendenti da $T$, presenti in tutti i materiali.
- Paramagnetici: $\chi_m$ piccola positiva, momenti permanenti parzialmente allineati, debolmente attratti, $\chi_m = C/T$.
- Ferromagnetici: $\mu_r \gg 1$ non costante, domini di Weiss, saturazione, isteresi (rimanenza, coercitivo), duri e dolci.
- Sopra la temperatura di Curie (ferro circa 770 °C) un ferromagnetico diventa paramagnetico.
:::

=== 67
SLIDES:
# Lezione 67 — Induzione elettromagnetica: legge di Faraday-Neumann-Lenz

## Di cosa parla questa lezione

Oersted aveva scoperto che una corrente produce un campo magnetico. Faraday (1831) si chiese se valesse anche il contrario: un campo magnetico può produrre una corrente? La risposta è sì, ma con una condizione fondamentale: **il campo (più precisamente il flusso) deve cambiare nel tempo**. È l'**induzione elettromagnetica**, il fenomeno su cui si basano generatori elettrici, trasformatori, piastre a induzione e gran parte della tecnologia elettrica.

In questa lezione:
- gli esperimenti di Faraday;
- la **legge di Faraday-Neumann** ($\mathcal E = -d\Phi_B/dt$);
- la **legge di Lenz**, che spiega il segno meno, e il suo legame con la conservazione dell'energia;
- un'applicazione completa: l'**alternatore**;
- la **conservazione della carica** espressa dall'equazione di continuità.

## Gli esperimenti di Faraday

Si collega una spira (o una bobina) a un amperometro sensibile (galvanometro), **senza nessun generatore** nel circuito.
1. **Magnete in moto**: avvicinando un magnete alla spira, l'amperometro segna una corrente; allontanandolo, segna una corrente di verso opposto. Più veloce è il movimento, più intensa è la corrente.
2. **Magnete fermo**: se magnete e spira sono fermi, **nessuna corrente**, per quanto intenso sia il campo.
3. **Spira in moto**: muovendo la spira verso un magnete fermo si ottiene lo stesso effetto del punto 1: conta il moto relativo.
4. **Due circuiti**: accanto alla spira si mette una seconda bobina collegata a un generatore e a un interruttore. Quando si **chiude** l'interruttore (la corrente nella bobina cresce) la spira è percorsa da un breve impulso di corrente; mentre la corrente nella bobina è costante, niente; quando si **apre** l'interruttore, un impulso di verso opposto.
5. **Spira che ruota** in un campo fisso: nasce una corrente che cambia periodicamente verso.
6. **Spira deformata**: allargando o restringendo una spira flessibile in un campo fisso nasce una corrente.

**Che cosa hanno in comune?** In tutti i casi in cui compare la corrente, cambia il **flusso del campo magnetico** concatenato con la spira: cambia $B$ (casi 1, 3, 4), cambia l'orientamento $\theta$ (caso 5), cambia l'area $S$ (caso 6). Quando il flusso è costante (caso 2, o la bobina con corrente costante) la corrente non c'è. La corrente esiste **solo mentre il flusso cambia**, e cresce con la rapidità della variazione.

## Legge di Faraday-Neumann

La corrente indotta è dovuta a una **forza elettromotrice indotta** $\mathcal E$, che agisce nel circuito come un generatore distribuito lungo il filo. La legge quantitativa è:
$$\mathcal E = -\frac{d\Phi_B}{dt}$$
dove:
- $\mathcal E$ = forza elettromotrice (f.e.m.) indotta nel circuito (V);
- $\Phi_B$ = flusso del campo magnetico concatenato con il circuito (Wb);
- $t$ = tempo (s);
- $d\Phi_B/dt$ = rapidità di variazione del flusso (Wb/s = V).

**La f.e.m. indotta è uguale all'opposto della derivata nel tempo del flusso concatenato.** Conta quanto **rapidamente** cambia il flusso, non quanto vale.

Controllo delle unità: $\mathrm{Wb/s} = \mathrm{T\,m^2/s}$; poiché $1\,\mathrm T = 1\,\mathrm{N/(A\,m)}$, si ha $\mathrm{T\,m^2/s} = \mathrm{N\,m/(A\,s)} = \mathrm{J/C} = \mathrm V$. Corretto.

**Bobina di $N$ spire.** Ogni spira dà la sua f.e.m. e le f.e.m. si sommano (le spire sono in serie):
$$\mathcal E = -N\,\frac{d\Phi_B}{dt}$$
dove qui $\Phi_B$ è il flusso attraverso una singola spira.

**Variazioni finite.** Se il flusso cambia di $\Delta\Phi$ in un intervallo $\Delta t$, il **valore medio** della f.e.m. è
$$\mathcal E_{media} = -\frac{\Delta\Phi}{\Delta t} \qquad |\mathcal E_{media}| = \frac{|\Delta\Phi|}{\Delta t}$$

**Corrente indotta.** Se il circuito chiuso ha resistenza totale $R$, per la legge di Ohm
$$i = \frac{\mathcal E}{R}$$
Se il circuito è aperto la f.e.m. c'è lo stesso (si misura come tensione ai capi), ma la corrente no.

### Carica che circola

Integrando la corrente nel tempo si ottiene una conseguenza utile:
$$q = \int i\,dt = \int \frac{1}{R}\left(-\frac{d\Phi}{dt}\right)dt = -\frac{\Delta\Phi}{R}$$
La carica totale che attraversa il circuito dipende solo dalla **variazione totale** del flusso e dalla resistenza, **non** da quanto velocemente è avvenuta. (Su questo principio funzionano i flussimetri.)

### I tre modi di far variare il flusso

Poiché $\Phi = BS\cos\theta$, la f.e.m. può nascere per variazione:
- dell'intensità del campo $B$ (campo variabile nel tempo, circuito fermo);
- dell'area $S$ (circuito che si deforma, o che entra/esce da una regione di campo);
- dell'angolo $\theta$ (circuito che ruota).

::: esempio
**F.e.m. media.** Il flusso in una spira varia di 0,6 Wb in 0,2 s.
$$|\mathcal E| = \frac{0{,}6}{0{,}2} = 3\,\mathrm V$$
Se la spira ha resistenza 1,5 Ω: $i = 3/1{,}5 = 2\,\mathrm A$, e la carica circolata è $q = 0{,}6/1{,}5 = 0{,}4\,\mathrm C$ (che è anche $2\,\mathrm A \cdot 0{,}2\,\mathrm s$).
:::

::: esempio
**Campo che cresce.** Una bobina di 50 spire, ciascuna di area $0{,}02\,\mathrm{m^2}$, è perpendicolare a un campo che cresce uniformemente da 0 a 0,5 T in 0,1 s. Resistenza della bobina 2 Ω.
1. Flusso iniziale per spira: $0$; finale: $0{,}5 \cdot 0{,}02 = 0{,}01\,\mathrm{Wb}$.
2. Rapidità: $\dfrac{\Delta\Phi}{\Delta t} = \dfrac{0{,}01}{0{,}1} = 0{,}1\,\mathrm{Wb/s}$.
3. F.e.m.: $|\mathcal E| = N \cdot 0{,}1 = 50 \cdot 0{,}1 = 5\,\mathrm V$.
4. Corrente: $i = 5/2 = 2{,}5\,\mathrm A$, solo durante i 0,1 s in cui il campo cresce.
:::

## Legge di Lenz: il segno meno

Il segno meno nella legge di Faraday-Neumann ha un significato fisico preciso, enunciato da Lenz:

**La corrente indotta ha un verso tale da opporsi alla variazione di flusso che l'ha generata.**

In pratica la corrente indotta crea un proprio campo magnetico (il campo "indotto") che:
- se il flusso **aumenta**, è **opposto** al campo esterno, così da ridurre l'aumento;
- se il flusso **diminuisce**, è **concorde** al campo esterno, così da "sostenerlo" e ridurre la diminuzione.

Attenzione: la corrente indotta non si oppone al **campo**, ma alla sua **variazione**.

**Come si trova il verso della corrente, a passi.**
1. Stabilisci il verso del campo esterno attraverso la spira.
2. Stabilisci se il flusso aumenta o diminuisce.
3. Decidi il verso del campo indotto: opposto se il flusso aumenta, concorde se diminuisce.
4. Con la mano destra (pollice nel verso del campo indotto) le dita danno il verso della corrente nella spira.

::: esempio
**Magnete che si avvicina e si allontana.** Avvicini il polo nord di una calamita a una spira.
- Il campo del magnete esce dal polo nord ed entra nella spira; avvicinandosi, il flusso **aumenta**.
- La corrente indotta crea un campo opposto: la faccia della spira rivolta verso il magnete diventa a sua volta un **polo nord**.
- Due poli nord si respingono: la spira **respinge** il magnete, cioè si oppone all'avvicinamento.

Allontani il magnete: il flusso **diminuisce**, la corrente indotta si inverte, la faccia della spira verso il magnete diventa un **polo sud** e **attrae** il magnete, opponendosi all'allontanamento. In entrambi i casi la spira si oppone al movimento che produce la variazione.
:::

### Perché deve essere così: la conservazione dell'energia

Supponi, per assurdo, che la corrente indotta **favorisse** la variazione di flusso. Avvicinando appena il magnete, la spira lo attrarrebbe; il magnete accelererebbe, il flusso crescerebbe più in fretta, la corrente aumenterebbe, l'attrazione aumenterebbe... Il sistema produrrebbe energia cinetica ed energia elettrica (calore nella spira) dal nulla: sarebbe un moto perpetuo.

Con la legge di Lenz succede il contrario: per muovere il magnete devi **vincere una forza** che si oppone e quindi **compiere lavoro**. Proprio quel lavoro meccanico si trasforma in energia elettrica della corrente indotta, che a sua volta si dissipa in calore nella resistenza (effetto Joule). La legge di Lenz è quindi una conseguenza della **conservazione dell'energia**.

## Esempio completo: l'alternatore

Una bobina di $N$ spire, ciascuna di area $S$, ruota con velocità angolare costante $\omega$ in un campo uniforme $B$, attorno a un asse perpendicolare al campo. È il principio dei generatori delle centrali elettriche.

**Ricavo passo per passo.**
1. L'angolo tra la normale alla bobina e il campo cresce uniformemente: $\theta = \omega t$ (se a $t = 0$ la normale è parallela al campo).
2. Flusso concatenato: $\Phi = N B S\cos(\omega t)$.
3. Derivata: $\dfrac{d\Phi}{dt} = -NBS\,\omega\sin(\omega t)$.
4. F.e.m. indotta:
$$\mathcal E = -\frac{d\Phi}{dt} = N B S\,\omega\sin(\omega t) = \mathcal E_0\sin(\omega t) \qquad \mathcal E_0 = NBS\omega$$
dove $\omega$ è in rad/s ($\omega = 2\pi f$, con $f$ frequenza in Hz).

Si ottiene una f.e.m. **alternata** sinusoidale: cambia segno due volte per giro. È massima quando il piano della bobina è parallelo al campo (flusso nullo ma che varia più rapidamente) e nulla quando la bobina è perpendicolare al campo (flusso massimo ma momentaneamente stazionario).

::: esempio
Bobina di 100 spire, area $0{,}01\,\mathrm{m^2}$, campo 0,5 T, frequenza 50 Hz.
1. $\omega = 2\pi \cdot 50 \approx 314\,\mathrm{rad/s}$.
2. $\mathcal E_0 = 100 \cdot 0{,}5 \cdot 0{,}01 \cdot 314 = 157\,\mathrm V$.
3. $\mathcal E(t) = 157\sin(314\,t)\ \mathrm V$.
:::

Altre applicazioni dell'induzione: **trasformatori** (lezione 68), **piastre e forni a induzione** e **freni elettromagnetici** (correnti parassite), **pick-up** delle chitarre elettriche (la corda magnetizzata vibra vicino a una bobina), lettori di carte magnetiche, microfoni dinamici, dinamo della bicicletta.

## Conservazione della carica: l'equazione di continuità

Accanto alle leggi dei campi, l'elettromagnetismo si basa su un principio fondamentale: **la carica elettrica si conserva**. Non si crea né si distrugge: può solo spostarsi.

**Forma integrale.** Prendi una superficie chiusa $S$ che racchiude un volume $V$ con carica $Q_{int}$. La corrente totale che esce dalla superficie è il flusso della densità di corrente, $\oint_S \vec J \cdot d\vec S$. Se esce corrente, la carica dentro deve diminuire esattamente della stessa quantità:
$$\oint_S \vec J \cdot d\vec S = -\frac{dQ_{int}}{dt}$$

**Forma locale, passo per passo.**
1. Scrivo la carica interna con la densità di carica: $Q_{int} = \int_V \rho\,dV$.
2. Teorema della divergenza a sinistra: $\oint_S \vec J \cdot d\vec S = \int_V \nabla \cdot \vec J\,dV$.
3. Porto la derivata dentro l'integrale (il volume è fisso): $\dfrac{dQ_{int}}{dt} = \int_V \dfrac{\partial\rho}{\partial t}\,dV$.
4. Ottengo $\displaystyle\int_V\left(\nabla \cdot \vec J + \frac{\partial\rho}{\partial t}\right)dV = 0$ per **ogni** volume, quindi:
$$\nabla \cdot \vec J = -\frac{\partial \rho}{\partial t}$$
dove:
- $\vec J$ = densità di corrente (A/m²);
- $\rho$ = densità di carica (C/m³);
- $\nabla \cdot \vec J$ = divergenza della densità di corrente, cioè quanta corrente "esce" da un punto per unità di volume (A/m³).

È l'**equazione di continuità**: esprime la conservazione della carica. Una relazione di conservazione deve contenere la **derivata nel tempo** della quantità conservata; le relazioni che legano $\rho$ a $\vec E$ o a $\vec J$ senza derivata temporale non esprimono la conservazione della carica.

**Caso stazionario.** Se le correnti sono stazionarie la carica in ogni punto non cambia: $\partial\rho/\partial t = 0$ e quindi $\nabla \cdot \vec J = 0$. È la versione locale della **legge dei nodi** di Kirchhoff: la corrente che entra in un nodo è uguale a quella che esce.

::: attenzione
- La f.e.m. indotta dipende dalla **rapidità** di variazione del flusso, non dal valore del flusso: un campo enorme ma costante non induce niente.
- La corrente indotta si oppone alla **variazione** del flusso, non al campo.
- Nei conti con $\Delta\Phi$ attenzione ai segni: da $-30$ a $+38\,\mathrm{Wb}$ la variazione è $68\,\mathrm{Wb}$.
:::

::: esame
- Chiusa: quale relazione esprime la conservazione della carica: $\nabla \cdot \vec J = -\partial\rho/\partial t$ (l'unica che lega la densità di corrente alla variazione nel tempo della densità di carica).
- Aperta: "Si enuncino la legge di Faraday-Neumann e Lenz illustrando almeno un esempio". Scrivi $\mathcal E = -d\Phi_B/dt$ (con $N$ spire $-N\,d\Phi/dt$), definisci il flusso e i tre modi di farlo variare, spiega il segno meno con la legge di Lenz e con la conservazione dell'energia, e porta un esempio svolto: il magnete che si avvicina alla spira (verso della corrente e repulsione) oppure l'alternatore ($\mathcal E = NBS\omega\sin\omega t$).
:::

::: sintesi
- Induzione: un flusso magnetico che **varia nel tempo** genera una f.e.m.; se il flusso è costante non c'è corrente.
- Faraday-Neumann: $\mathcal E = -d\Phi_B/dt$; con $N$ spire $-N\,d\Phi/dt$; valore medio $|\Delta\Phi|/\Delta t$.
- Corrente indotta $i = \mathcal E/R$; carica circolata $q = |\Delta\Phi|/R$.
- Lenz: la corrente indotta si oppone alla variazione di flusso; è la conservazione dell'energia.
- Alternatore: $\mathcal E = NBS\omega\sin\omega t$.
- Conservazione della carica: $\oint \vec J \cdot d\vec S = -dQ/dt$, $\nabla \cdot \vec J = -\partial\rho/\partial t$; stazionario: $\nabla \cdot \vec J = 0$ (nodi).
:::

=== 68
SLIDES:
# Lezione 68 — Circuiti in campi magnetici variabili: campo elettrico indotto, correnti parassite, mutua induzione

## Di cosa parla questa lezione

La legge di Faraday dice che un flusso variabile produce una f.e.m. Ma **chi spinge le cariche**? Se il circuito si muove in un campo fisso, la risposta è la forza di Lorentz (lezione 69). Se invece il circuito è **fermo** e cambia il campo, le cariche sono ferme all'inizio e la forza magnetica $q\vec v \times \vec B$ è nulla: deve esserci un'altra causa. È il **campo elettrico indotto**, uno dei concetti più profondi dell'elettromagnetismo.

In questa lezione si vede che cosa succede a un circuito in un campo magnetico variabile:
- f.e.m. e corrente indotte, verso, energia;
- il campo elettrico indotto e la forma integrale e locale della legge di Faraday;
- le **correnti parassite** (di Foucault) nei conduttori estesi;
- la **mutua induzione** tra due circuiti e il **trasformatore**.

## Che cosa succede a un circuito in un campo variabile

Un circuito fermo è immerso in un campo magnetico che cambia nel tempo. Il flusso concatenato $\Phi_B$ cambia, quindi, in ordine:
1. nasce una **f.e.m. indotta** $\mathcal E = -\dfrac{d\Phi_B}{dt}$ (con $N$ spire, $-N\,d\Phi_B/dt$);
2. se il circuito è chiuso, con resistenza $R$, circola una **corrente indotta** $i = \mathcal E/R$, anche se nel circuito non c'è nessun generatore;
3. il **verso** della corrente è dato dalla legge di Lenz: si oppone alla variazione. Se il campo esterno aumenta, la corrente crea un campo opposto; se diminuisce, un campo concorde;
4. la corrente **dissipa energia** nella resistenza per effetto Joule, con potenza $P = Ri^2 = \mathcal E^2/R$; questa energia viene dal sistema che produce il campo variabile (per esempio il generatore che alimenta la bobina che crea il campo);
5. il campo agisce sulla corrente indotta con forze ($d\vec F = i\,d\vec s \times \vec B$) che tendono a opporsi alla variazione (per esempio respingono la spira dalla zona dove il campo cresce);
6. tutto questo avviene perché nello spazio è comparso un **campo elettrico indotto**, che spinge le cariche lungo il filo.

## Il campo elettrico indotto

### Dalla f.e.m. al campo

La f.e.m. di un circuito è, per definizione, il lavoro per unità di carica compiuto lungo l'intero circuito dalla forza che spinge le cariche. Se questa forza è un campo elettrico $\vec E$, la f.e.m. è la sua circuitazione:
$$\mathcal E = \oint_\gamma \vec E \cdot d\vec l$$
Combinando con la legge di Faraday si ottiene la **legge di Faraday in forma integrale**:
$$\oint_\gamma \vec E \cdot d\vec l = -\frac{d\Phi_B}{dt} = -\frac{d}{dt}\int_S \vec B \cdot d\vec S$$
dove:
- $\oint_\gamma \vec E \cdot d\vec l$ = circuitazione del campo elettrico lungo la linea chiusa $\gamma$ (V);
- $\Phi_B$ = flusso di $\vec B$ attraverso una qualsiasi superficie $S$ che ha $\gamma$ come contorno (Wb).

**Un campo magnetico variabile genera un campo elettrico.** Questo campo esiste **anche senza il circuito**, in qualunque punto dello spazio dove il flusso cambia: il filo serve solo a "rivelarlo", permettendo alle cariche di muoversi e formare una corrente. Ad esempio, un elettrone libero nel vuoto, in un campo magnetico che cresce, viene accelerato dal campo elettrico indotto (è il principio del **betatrone**, un acceleratore di elettroni).

### Differenze con il campo elettrostatico

| | Campo elettrostatico | Campo elettrico indotto |
|---|---|---|
| Sorgente | cariche elettriche ferme | campo magnetico variabile nel tempo |
| Linee di campo | aperte: partono dalle cariche + e finiscono sulle − | **chiuse** (attorno alle linee di $\vec B$ che varia) |
| Circuitazione | sempre zero | $-d\Phi_B/dt$, in generale diversa da zero |
| Conservativo? | sì: esiste il potenziale | **no**: il potenziale non è definito |
| Lavoro su un percorso chiuso | nullo | uguale alla f.e.m. (per unità di carica) |

Il campo elettrico indotto **non è conservativo**: girando lungo una linea chiusa compie un lavoro diverso da zero. Proprio per questo riesce a far girare le cariche in un anello chiuso, cosa impossibile per un campo elettrostatico. Non ha senso parlare di "differenza di potenziale" tra due punti in presenza di campi indotti (dipende dal percorso).

### Esempio di calcolo: il campo indotto in un solenoide

Dentro un lungo solenoide di raggio $R$ il campo $B(t)$ è uniforme e cresce con rapidità $dB/dt$. Per simmetria, le linee del campo elettrico indotto sono **circonferenze** coassiali al solenoide, con modulo costante su ciascuna.

**Dentro** ($r < R$): circuitazione su una circonferenza di raggio $r$:
$$E \cdot 2\pi r = \left|\frac{d}{dt}\left(B\,\pi r^2\right)\right| = \pi r^2\frac{dB}{dt} \quad\Rightarrow\quad E = \frac{r}{2}\,\frac{dB}{dt}$$

**Fuori** ($r > R$): il flusso è solo quello dentro il solenoide, $B\pi R^2$:
$$E \cdot 2\pi r = \pi R^2\frac{dB}{dt} \quad\Rightarrow\quad E = \frac{R^2}{2r}\,\frac{dB}{dt}$$

Il campo elettrico indotto esiste anche **fuori** dal solenoide, dove il campo magnetico è nullo: lì non c'è $\vec B$, ma c'è il flusso che cambia attraverso la circonferenza.

::: esempio
Solenoide di raggio 5 cm con campo che cresce di 0,2 T/s. A $r = 3\,\mathrm{cm}$ (dentro):
$$E = \frac{0{,}03}{2} \cdot 0{,}2 = 3 \cdot 10^{-3}\,\mathrm{V/m}$$
Una spira di raggio 3 cm attorno all'asse avrebbe f.e.m. $E \cdot 2\pi r = 3 \cdot 10^{-3} \cdot 0{,}188 \approx 5{,}7 \cdot 10^{-4}\,\mathrm V$, che coincide con $\pi r^2\,dB/dt = 2{,}83 \cdot 10^{-3} \cdot 0{,}2 \approx 5{,}7 \cdot 10^{-4}\,\mathrm V$.
A $r = 10\,\mathrm{cm}$ (fuori): $E = \dfrac{0{,}05^2}{2 \cdot 0{,}10} \cdot 0{,}2 = 2{,}5 \cdot 10^{-3}\,\mathrm{V/m}$.
:::

### Forma locale

Con il teorema di Stokes, $\oint_\gamma \vec E \cdot d\vec l = \int_S (\nabla \times \vec E)\cdot d\vec S$. Per un circuito fermo $\dfrac{d}{dt}\int_S \vec B \cdot d\vec S = \int_S \dfrac{\partial \vec B}{\partial t}\cdot d\vec S$. Poiché l'uguaglianza vale per ogni superficie:
$$\nabla \times \vec E = -\frac{\partial \vec B}{\partial t}$$
Dove il campo magnetico cambia nel tempo, il campo elettrico ha rotore diverso da zero ("vortica"). In elettrostatica invece $\nabla \times \vec E = 0$.

## Correnti parassite (di Foucault)

Se al posto di un filo c'è un **pezzo di metallo esteso** (una lastra, un blocco, un disco), il campo elettrico indotto fa circolare correnti lungo percorsi chiusi **dentro il metallo stesso**, a forma di vortici. Si chiamano **correnti parassite** o **correnti di Foucault**. Poiché la resistenza di un pezzo di metallo massiccio è piccola, queste correnti possono essere molto intense.

**Effetti.**
- **Riscaldamento**: le correnti dissipano energia per effetto Joule. È il principio delle **piastre a induzione** (una bobina sotto il piano produce un campo alternato che induce correnti nel fondo della pentola, che si scalda; il piano invece no) e dei **forni a induzione** per fondere i metalli.
- **Frenamento**: un conduttore che si muove in un campo magnetico (o in cui il flusso cambia) è percorso da correnti che, per la legge di Lenz, si oppongono al moto. Una lastra metallica che oscilla come un pendolo tra i poli di un magnete si ferma rapidamente; un magnete lasciato cadere in un tubo di rame scende lentamente. È il principio dei **freni elettromagnetici** di treni, camion e montagne russe: frenano senza attrito e senza usura, e l'energia cinetica diventa calore nel metallo.
- **Perdite**: nei nuclei di ferro di trasformatori, motori e generatori il campo è alternato e le correnti parassite sprecano energia scaldando il nucleo. Per ridurle i nuclei si costruiscono con **lamierini sottili isolati** tra loro (o con ferriti, materiali poco conduttori): gli strati isolanti interrompono i grandi vortici di corrente, e i percorsi possibili diventano stretti e ad alta resistenza.

::: esempio
Pendolo di Waltenhofen: una lastra di rame oscilla tra i poli di un elettromagnete. A elettromagnete spento oscilla a lungo; acceso, si ferma in poche oscillazioni. Se si usa una lastra con molti tagli (a pettine), le correnti parassite non riescono a formare grandi vortici e la lastra torna a oscillare quasi liberamente: è lo stesso principio dei lamierini.
:::

## Mutua induzione

### Definizione

Due circuiti vicini, 1 e 2. Una corrente $i_1$ nel circuito 1 produce un campo magnetico, proporzionale a $i_1$ (legge di Laplace), e quindi un flusso concatenato con il circuito 2 anch'esso proporzionale a $i_1$:
$$\Phi_2 = M\,i_1$$
dove $M$ è il **coefficiente di mutua induzione** (mutua induttanza), che si misura in **henry** (H): $1\,\mathrm H = 1\,\mathrm{Wb/A}$. Dipende solo dalla geometria dei due circuiti (forme, dimensioni, distanza, orientazione) e dal materiale circostante, non dalle correnti. Si dimostra che è simmetrico: il flusso nel circuito 1 dovuto a $i_2$ è $\Phi_1 = M\,i_2$ con lo **stesso** $M$.

Se $i_1$ cambia nel tempo, nel circuito 2 si induce la f.e.m.
$$\mathcal E_2 = -\frac{d\Phi_2}{dt} = -M\,\frac{di_1}{dt}$$
Una corrente **variabile** nel primo circuito induce una f.e.m. nel secondo, senza contatto elettrico tra i due. Con corrente costante, niente.

### Esempio: due solenoidi coassiali

Un solenoide lungo $l$, con $n_1$ spire per metro e sezione $S$, è avvolto da una seconda bobina di $N_2$ spire.
1. Campo del primo: $B_1 = \mu_0 n_1 i_1$.
2. Flusso concatenato con la seconda bobina (tutte le sue spire abbracciano la sezione $S$): $\Phi_2 = N_2 B_1 S = \mu_0 n_1 N_2 S\,i_1$.
3. Quindi $M = \mu_0\,n_1\,N_2\,S$.

::: esempio
$n_1 = 2000\,\mathrm{spire/m}$, $N_2 = 100$, $S = 10\,\mathrm{cm^2} = 10^{-3}\,\mathrm{m^2}$:
$$M = 4\pi \cdot 10^{-7} \cdot 2000 \cdot 100 \cdot 10^{-3} \approx 2{,}5 \cdot 10^{-4}\,\mathrm H$$
Se $i_1$ cresce di 50 A/s: $|\mathcal E_2| = 2{,}5 \cdot 10^{-4} \cdot 50 \approx 1{,}26 \cdot 10^{-2}\,\mathrm V$.
:::

### Il trasformatore

Il trasformatore è l'applicazione più importante della mutua induzione. Due bobine, il **primario** ($N_1$ spire) e il **secondario** ($N_2$ spire), sono avvolte sullo stesso nucleo di ferro dolce laminato, che convoglia praticamente tutto il flusso da una bobina all'altra.
1. Al primario si applica una tensione **alternata** $V_1$; nel nucleo nasce un flusso alternato $\Phi$ (lo stesso in ogni spira di entrambe le bobine).
2. Nel primario (ideale, senza resistenza) la tensione applicata equilibra la f.e.m. autoindotta: $V_1 = N_1\,\dfrac{d\Phi}{dt}$.
3. Nel secondario si induce $V_2 = N_2\,\dfrac{d\Phi}{dt}$.
4. Dividendo:
$$\frac{V_2}{V_1} = \frac{N_2}{N_1}$$
5. In un trasformatore ideale (senza perdite) la potenza si conserva: $V_1 i_1 = V_2 i_2$, quindi $\dfrac{i_2}{i_1} = \dfrac{N_1}{N_2}$.

Con $N_2 > N_1$ la tensione sale (trasformatore elevatore), con $N_2 < N_1$ scende (riduttore). Il trasformatore **funziona solo in corrente alternata**: con corrente continua il flusso è costante e non si induce nulla. Per questo le reti elettriche usano la corrente alternata: si trasporta l'energia ad altissima tensione (e quindi bassa corrente, con piccole perdite Joule $Ri^2$ nelle linee) e la si riduce vicino agli utenti.

::: esempio
Un alimentatore deve ridurre 230 V a 12 V. Con 1150 spire al primario: $N_2 = N_1\dfrac{V_2}{V_1} = 1150 \cdot \dfrac{12}{230} = 60$ spire. Se il secondario eroga 2 A, il primario (ideale) assorbe $i_1 = 2 \cdot \dfrac{60}{1150} \approx 0{,}104\,\mathrm A$; potenza $230 \cdot 0{,}104 \approx 12 \cdot 2 = 24\,\mathrm W$.
:::

Un caso particolare di induzione è quello in cui il flusso variabile che attraversa un circuito è prodotto dalla corrente del circuito stesso: è l'**autoinduzione** (lezione 70).

::: attenzione
- In un campo variabile la corrente nasce anche in un circuito **fermo** e **senza generatore**: la spinta viene dal campo elettrico indotto, non dalla forza di Lorentz magnetica.
- Il campo elettrico indotto ha linee **chiuse** e **non è conservativo**: non confonderlo con quello elettrostatico.
- Il trasformatore non funziona in corrente continua.
:::

::: esame
Domanda aperta tipica: "Cosa succede se un circuito elettrico si trova in presenza di un campo magnetico variabile?". Struttura della risposta:
1. il flusso concatenato cambia, quindi nasce una f.e.m. indotta $\mathcal E = -d\Phi_B/dt$ (Faraday-Neumann);
2. se il circuito è chiuso circola una corrente indotta $i = \mathcal E/R$, anche senza generatori, con verso dato dalla legge di Lenz (si oppone alla variazione; conservazione dell'energia);
3. la causa è il campo elettrico indotto: $\oint \vec E \cdot d\vec l = -d\Phi_B/dt$, linee chiuse, non conservativo; forma locale $\nabla \times \vec E = -\partial\vec B/\partial t$;
4. la corrente dissipa energia per effetto Joule e il campo esercita forze sulla corrente indotta;
5. esempi: correnti parassite (riscaldamento, freni, lamierini), mutua induzione e trasformatore.
:::

::: sintesi
- Campo magnetico variabile: f.e.m. indotta $-d\Phi_B/dt$ e corrente $\mathcal E/R$ anche in un circuito fermo senza generatori; verso dato da Lenz.
- Campo elettrico indotto: $\oint \vec E \cdot d\vec l = -d\Phi_B/dt$, $\nabla \times \vec E = -\partial\vec B/\partial t$; linee chiuse, non conservativo, esiste anche senza circuito.
- Nel solenoide: $E = \frac{r}{2}\frac{dB}{dt}$ dentro, $E = \frac{R^2}{2r}\frac{dB}{dt}$ fuori.
- Correnti parassite: scaldano (induzione) e frenano (freni elettromagnetici); si riducono con lamierini isolati.
- Mutua induzione: $\Phi_2 = M i_1$, $\mathcal E_2 = -M\,di_1/dt$, $M$ in henry, simmetrico.
- Trasformatore: $V_2/V_1 = N_2/N_1$, $i_2/i_1 = N_1/N_2$; solo in corrente alternata.
:::

=== 69
SLIDES:
# Lezione 69 — F.e.m. indotta: variazioni di flusso e f.e.m. di movimento

## Di cosa parla questa lezione

La legge di Faraday-Neumann $\mathcal E = -d\Phi_B/dt$ vale sempre, ma il flusso può cambiare per due motivi fisicamente diversi:
- il **campo cambia nel tempo** e il circuito è fermo: le cariche sono spinte dal **campo elettrico indotto** (lezione 68);
- il **circuito si muove** o si deforma in un campo costante: le cariche, che si muovono insieme al conduttore, sono spinte dalla **forza di Lorentz**. È la **f.e.m. di movimento** (o mozionale).

Questa lezione si concentra sui calcoli: f.e.m. media da una variazione finita di flusso, sbarretta in moto, spira che entra o esce da una regione di campo, bilancio energetico, spira e sbarra rotanti.

## F.e.m. media da una variazione finita di flusso

Se il flusso concatenato passa da $\Phi_{in}$ a $\Phi_{fin}$ nell'intervallo $\Delta t$:
$$\mathcal E_{media} = -\frac{\Phi_{fin} - \Phi_{in}}{\Delta t} \qquad |\mathcal E| = \frac{|\Delta\Phi|}{\Delta t}$$
dove $\Delta\Phi$ è in Wb, $\Delta t$ in s, $\mathcal E$ in V. Se il flusso varia in modo uniforme (linearmente) la f.e.m. è costante e uguale al valore medio.

::: esempio
**Flusso che cambia segno (paniere).** Il flusso concatenato con una bobina passa da $-30\,\mathrm{Wb}$ a $+38\,\mathrm{Wb}$ in 0,42 s. Modulo della f.e.m.?
1. Variazione con i segni: $\Delta\Phi = \Phi_{fin} - \Phi_{in} = 38 - (-30) = 38 + 30 = 68\,\mathrm{Wb}$.
2. $|\mathcal E| = \dfrac{68}{0{,}42} \approx 162\,\mathrm V$.

Il segno meno del flusso iniziale significa che all'inizio il campo attraversava la bobina in verso opposto: per arrivare a $+38$ il flusso deve prima annullarsi (variazione di 30) e poi crescere fino a 38 (altra variazione di 38). Errori tipici: fare $38 - 30 = 8\,\mathrm{Wb}$ (circa 19 V), oppure usare solo il flusso finale, $38/0{,}42 \approx 90\,\mathrm V$.
:::

## F.e.m. di movimento: la sbarretta in moto

### Il ragionamento con la forza di Lorentz

Una sbarretta conduttrice di lunghezza $l$ si muove con velocità costante $\vec v$ in un campo uniforme $\vec B$; sbarretta, velocità e campo sono a due a due perpendicolari.
1. Gli elettroni liberi della sbarretta si muovono con lei, con velocità $\vec v$. Ciascuno subisce la forza di Lorentz $\vec F = q\,\vec v \times \vec B$, che è diretta **lungo la sbarretta**.
2. Questa forza agisce come un campo "elettromotore" $\vec E^* = \vec F/q = \vec v \times \vec B$, di modulo $vB$, parallelo alla sbarretta.
3. Le cariche si spostano: un'estremità della sbarretta si carica positivamente, l'altra negativamente (finché, in una sbarretta isolata, il campo elettrostatico delle cariche accumulate bilancia $\vec E^*$, come nell'effetto Hall).
4. La f.e.m. è il lavoro per unità di carica lungo la sbarretta: $\mathcal E = \int \vec E^* \cdot d\vec l = vB \cdot l$.

$$\mathcal E = B\,l\,v$$
dove:
- $\mathcal E$ = f.e.m. ai capi della sbarretta (V);
- $B$ = campo magnetico (T);
- $l$ = lunghezza della sbarretta, perpendicolare sia a $\vec v$ sia a $\vec B$ (m);
- $v$ = velocità (m/s).

In generale, per un conduttore di forma qualsiasi che si muove: $\mathcal E = \oint (\vec v \times \vec B)\cdot d\vec l$. Se la sbarretta non è perpendicolare, conta solo la componente "utile": $\mathcal E = (\vec v \times \vec B)\cdot\vec l$.

### Lo stesso risultato con la legge di Faraday

Ora la sbarretta scorre senza attrito su due binari conduttori paralleli, distanti $l$, chiusi da una resistenza $R$: si forma un circuito rettangolare la cui area cresce.
1. Se $x$ è la posizione della sbarretta, l'area del circuito è $S = l\,x$ e il flusso è $\Phi = B\,l\,x$.
2. La sbarretta avanza con $dx/dt = v$, quindi in ogni secondo spazza un'area $l v$.
3. $\left|\dfrac{d\Phi}{dt}\right| = B\,l\,\dfrac{dx}{dt} = B\,l\,v$.

I due punti di vista (forza di Lorentz sulle cariche, variazione del flusso concatenato) danno lo **stesso risultato**: la legge di Faraday li contiene entrambi.

**Verso della corrente** (Lenz): l'area cresce, il flusso aumenta, la corrente indotta crea un campo opposto a $\vec B$ dentro il circuito.

::: esempio
Sbarretta di 0,5 m che scorre a 4 m/s su binari, in un campo di 0,2 T perpendicolare al piano dei binari, con resistenza totale 0,1 Ω.
1. $\mathcal E = Blv = 0{,}2 \cdot 0{,}5 \cdot 4 = 0{,}4\,\mathrm V$.
2. $i = \mathcal E/R = 0{,}4/0{,}1 = 4\,\mathrm A$.
3. Forza magnetica sulla sbarretta: $F = ilB = 4 \cdot 0{,}5 \cdot 0{,}2 = 0{,}4\,\mathrm N$, frenante.
4. Potenza meccanica per mantenere la velocità: $Fv = 0{,}4 \cdot 4 = 1{,}6\,\mathrm W$; potenza dissipata: $Ri^2 = 0{,}1 \cdot 16 = 1{,}6\,\mathrm W$. Coincidono.
:::

## Il bilancio di energia

La corrente indotta $i$ scorre nella sbarretta di lunghezza $l$, che si trova nel campo $\vec B$. Quindi subisce la forza (seconda legge di Laplace) $F = i\,l\,B$, diretta in verso **opposto alla velocità**: la forza **frena** il moto (legge di Lenz).

**Passaggi.**
1. $i = \dfrac{\mathcal E}{R} = \dfrac{Blv}{R}$, quindi la forza frenante è $F = ilB = \dfrac{B^2 l^2 v}{R}$: proporzionale alla velocità, come un attrito viscoso.
2. Per mantenere la velocità costante un agente esterno deve spingere con una forza uguale e opposta, spendendo la potenza $P_{mecc} = F v = \dfrac{B^2 l^2 v^2}{R}$.
3. La potenza elettrica generata è $\mathcal E\,i = Blv \cdot \dfrac{Blv}{R} = \dfrac{B^2 l^2 v^2}{R}$.
4. La potenza dissipata nella resistenza è $R i^2 = R\dfrac{B^2 l^2 v^2}{R^2} = \dfrac{B^2 l^2 v^2}{R}$.

$$P_{mecc} = F v = \mathcal E\,i = R\,i^2$$
Il lavoro meccanico si trasforma in energia elettrica e poi in calore: nessuna energia si crea dal nulla. È la conservazione dell'energia che "sta dietro" alla legge di Lenz.

### Sbarretta lasciata libera

Se la sbarretta (massa $m$) riceve una velocità iniziale $v_0$ e poi viene lasciata andare, la sola forza orizzontale è quella frenante:
$$m\frac{dv}{dt} = -\frac{B^2 l^2}{R}\,v \quad\Rightarrow\quad v(t) = v_0\,e^{-t/\tau_m} \qquad \tau_m = \frac{mR}{B^2 l^2}$$
La velocità cala esponenzialmente e l'energia cinetica iniziale $\tfrac12 m v_0^2$ finisce tutta in calore nella resistenza. È un modello del freno elettromagnetico.

## Spira che entra o esce da una regione di campo

Una spira rettangolare rigida si muove a velocità costante $v$ verso (o fuori da) una regione in cui c'è un campo uniforme $B$ perpendicolare al piano della spira; fuori dalla regione il campo è nullo. Il lato perpendicolare alla velocità ha lunghezza $a$, quello parallelo alla velocità lunghezza $b$.

**Le tre fasi.**
1. **Mentre entra**: solo una parte della spira è nel campo; l'area immersa è $a\,x(t)$, con $x$ che cresce di $v$ al secondo. Il flusso **cresce**: $d\Phi/dt = Bav$. Circola una corrente costante $i = Bav/R$.
2. **Tutta dentro**: il flusso è $Bab$, costante. La corrente è **zero** (anche se la spira si muove nel campo: le f.e.m. di movimento dei due lati perpendicolari alla velocità sono uguali e si cancellano lungo il circuito).
3. **Mentre esce**: l'area immersa cala, il flusso **diminuisce** con la stessa rapidità $Bav$: la corrente ha lo stesso modulo ma **verso opposto** rispetto all'entrata.

La durata di ciascuna fase di entrata o uscita è $b/v$ (il tempo per far passare tutto il lato $b$ attraverso il bordo del campo).

**Quale lato conta.** La f.e.m. è prodotta dal lato che "taglia" il bordo della regione di campo, cioè il lato **perpendicolare alla velocità** (lunghezza $a$). I lati paralleli alla velocità non tagliano linee di campo: su di essi $\vec v \times \vec B$ è perpendicolare al lato e non spinge le cariche lungo il filo.

::: esempio
**Spira che esce dal campo (paniere).** Spira di lati $a = 20\,\mathrm{cm}$ (parallelo all'asse $y$) e $b = 30\,\mathrm{cm}$ (parallelo all'asse $x$), resistenza $R = 10\,\Omega$. Esce con velocità costante $v_0 = 10\,\mathrm{m/s}$ verso le $x$ positive dal semipiano $x < 0$, dove c'è un campo $B = 2\,\mathrm T$ perpendicolare al piano. Quanto vale la corrente durante l'uscita?

1. Il bordo del campo è la retta $x = 0$ (parallela a $y$). Il lato che la attraversa e "taglia" le linee è quello parallelo a $y$: $l = a = 0{,}20\,\mathrm m$.
2. Durante l'uscita la parte di spira ancora nel campo ha area $a \cdot x_{dentro}(t)$, con $x_{dentro}$ che diminuisce di $v_0$ al secondo: $\left|\dfrac{d\Phi}{dt}\right| = B\,a\,v_0$.
3. $\mathcal E = B\,a\,v_0 = 2 \cdot 0{,}20 \cdot 10 = 4\,\mathrm V$.
4. $i = \dfrac{\mathcal E}{R} = \dfrac{4}{10} = 0{,}4\,\mathrm A$.
5. La corrente è costante per tutta l'uscita, che dura $b/v_0 = 0{,}30/10 = 0{,}03\,\mathrm s$; prima (spira tutta dentro) e dopo (tutta fuori) la corrente è nulla.
6. Verso (Lenz): il flusso diminuisce, la corrente crea un campo **concorde** a $\vec B$ dentro la spira.
:::

::: attenzione
Errore tipico: usare il lato parallelo alla velocità (qui 30 cm): si otterrebbe $2 \cdot 0{,}30 \cdot 10 = 6\,\mathrm V$ e $0{,}6\,\mathrm A$, sbagliato. Conta il lato perpendicolare al moto. E una corrente si misura in ampere: un risultato in newton è una forza, non una corrente.
:::

::: esempio
**Bilancio di energia per la stessa spira.**
- Forza magnetica sul lato di 20 cm percorso da corrente: $F = i\,a\,B = 0{,}4 \cdot 0{,}20 \cdot 2 = 0{,}16\,\mathrm N$, frenante.
- Potenza meccanica per mantenere $v_0$: $F v_0 = 0{,}16 \cdot 10 = 1{,}6\,\mathrm W$.
- Potenza elettrica: $\mathcal E\,i = 4 \cdot 0{,}4 = 1{,}6\,\mathrm W$; dissipata: $R i^2 = 10 \cdot 0{,}16 = 1{,}6\,\mathrm W$.
- Energia totale dissipata durante l'uscita: $1{,}6\,\mathrm W \cdot 0{,}03\,\mathrm s = 0{,}048\,\mathrm J$.
:::

## Spira che ruota

Una spira di area $S$ (o una bobina di $N$ spire) ruota con velocità angolare $\omega$ costante in un campo uniforme $B$, attorno a un asse perpendicolare al campo. Il flusso è $\Phi = NBS\cos\omega t$ e
$$\mathcal E = NBS\,\omega\sin\omega t$$
La f.e.m. è **alternata**: è il principio dell'alternatore (vedi lezione 67). Qui il flusso cambia perché cambia l'orientamento; dal punto di vista microscopico è ancora una f.e.m. di movimento, dovuta alla forza di Lorentz sulle cariche dei lati che tagliano le linee di campo.

## Sbarra che ruota attorno a un estremo

Una sbarra conduttrice di lunghezza $L$ ruota con velocità angolare $\omega$ attorno a un suo estremo, in un piano perpendicolare a un campo uniforme $B$ (è il modello del **disco di Faraday**, la prima dinamo).
1. Un tratto $dr$ a distanza $r$ dal perno si muove con velocità $v = \omega r$, perpendicolare a sé stesso e al campo.
2. Il suo contributo alla f.e.m. è $d\mathcal E = B\,v\,dr = B\,\omega\,r\,dr$.
3. Integro da $0$ a $L$:
$$\mathcal E = \int_0^L B\omega r\,dr = \frac12\,B\,\omega\,L^2$$

Stesso risultato con Faraday: in un giro ($T = 2\pi/\omega$) la sbarra spazza l'area $\pi L^2$, quindi $|d\Phi/dt| = B\pi L^2/T = \tfrac12 B\omega L^2$.

::: esempio
Sbarra di 1 m che ruota a 10 giri/s in un campo di 0,05 T: $\omega = 2\pi \cdot 10 \approx 62{,}8\,\mathrm{rad/s}$, $\mathcal E = \tfrac12 \cdot 0{,}05 \cdot 62{,}8 \cdot 1^2 \approx 1{,}57\,\mathrm V$.
:::

::: esame
Le domande chiuse sono calcoli: f.e.m. media da una variazione di flusso con segni diversi ($|\Delta\Phi|/\Delta t$, attenzione a $38 - (-30) = 68$) e corrente in una spira che entra o esce da un campo ($i = Blv/R$, con $l$ il lato perpendicolare alla velocità). Converti sempre i centimetri in metri e controlla che il risultato abbia l'unità giusta.
:::

::: sintesi
- $|\mathcal E| = |\Delta\Phi|/\Delta t$; attenzione ai segni del flusso.
- F.e.m. di movimento: $\mathcal E = Blv$, dalla forza di Lorentz sulle cariche ($\vec E^* = \vec v \times \vec B$); stesso risultato con Faraday (area spazzata $lv$ al secondo).
- Corrente $i = Blv/R$; forza frenante $F = ilB = B^2l^2v/R$; $Fv = \mathcal E i = Ri^2$.
- Spira che entra/esce: corrente solo mentre entra o esce, versi opposti; conta il lato perpendicolare al moto; tutta dentro, corrente nulla.
- Spira rotante: $\mathcal E = NBS\omega\sin\omega t$; sbarra rotante: $\mathcal E = \tfrac12 B\omega L^2$.
:::

=== 70
SLIDES:
# Lezione 70 — Autoinduzione e circuito RL

## Di cosa parla questa lezione

Finora il flusso variabile che induce una f.e.m. in un circuito era prodotto da qualcosa di esterno (un magnete, un'altra bobina). Ma ogni circuito percorso da corrente produce **il proprio** campo magnetico, che attraversa il circuito stesso. Se la corrente cambia, cambia anche questo flusso, e nel circuito si induce una f.e.m. che si oppone alla variazione: è l'**autoinduzione**.

In questa lezione:
- il coefficiente di autoinduzione (induttanza) e la f.e.m. autoindotta;
- l'induttanza di un solenoide;
- il **circuito RL**: andamento della corrente alla chiusura e all'apertura, con la costante di tempo $\tau = L/R$;
- la verifica con l'analisi dimensionale che $L/R$ è un tempo;
- l'energia immagazzinata in un'induttanza.

## Autoinduzione e induttanza

Un circuito percorso dalla corrente $i$ produce un campo magnetico proporzionale a $i$ (legge di Laplace). Quindi anche il flusso di questo campo concatenato con il circuito stesso è proporzionale a $i$:
$$\Phi = L\,i$$
dove:
- $\Phi$ = flusso autoconcatenato (Wb);
- $i$ = corrente nel circuito (A);
- $L$ = **coefficiente di autoinduzione** o **induttanza** del circuito, in **henry** (H).

Unità: $1\,\mathrm H = 1\,\dfrac{\mathrm{Wb}}{\mathrm A} = 1\,\dfrac{\mathrm{V\,s}}{\mathrm A} = 1\,\Omega\cdot\mathrm s$.

$L$ dipende **solo dalla geometria** del circuito (forma, dimensioni, numero di spire) e dal materiale in cui è immerso; **non** dipende dalla corrente (tranne con nuclei ferromagnetici, dove $\mu_r$ non è costante). Un componente progettato per avere un'induttanza significativa (tipicamente una bobina) si chiama **induttore** e si indica con $L$ negli schemi.

**F.e.m. autoindotta.** Se la corrente varia, varia il flusso, e per la legge di Faraday:
$$\mathcal E_L = -\frac{d\Phi}{dt} = -L\,\frac{di}{dt}$$
dove $di/dt$ è la rapidità di variazione della corrente (A/s).

Il segno meno è la legge di Lenz: la f.e.m. autoindotta **si oppone alle variazioni della corrente**.
- Se la corrente **cresce**, la f.e.m. autoindotta agisce contro il generatore e ne rallenta la crescita.
- Se la corrente **cala**, la f.e.m. autoindotta agisce nel verso della corrente e tende a mantenerla.
- Se la corrente è **costante**, la f.e.m. autoindotta è **nulla**: l'induttore si comporta come un semplice filo.

L'induttanza fa da **"inerzia" della corrente**, come la massa è l'inerzia della velocità: non impedisce alla corrente di esistere, ma le impedisce di cambiare di colpo.

## Induttanza di un solenoide

Un solenoide lungo $l$, con $N$ spire di sezione $S$ ($n = N/l$ spire per metro), percorso dalla corrente $i$.
1. Campo interno (lezione 64): $B = \mu_0 n i$.
2. Flusso attraverso una spira: $B S = \mu_0 n i S$.
3. Flusso concatenato con tutte le $N$ spire: $\Phi = N\,\mu_0 n i S = \mu_0 n\,(n l)\,i\,S = \mu_0 n^2 S l\;i$.
4. Confrontando con $\Phi = L i$:
$$L = \mu_0\,n^2\,S\,l = \mu_0\,\frac{N^2 S}{l}$$
dove $S$ è la sezione (m²) e $l$ la lunghezza (m). $Sl$ è il volume interno del solenoide.

- $L$ cresce con il **quadrato** del numero di spire (le spire sono di più **e** ciascuna produce più campo).
- Con un nucleo di permeabilità relativa $\mu_r$: $L = \mu_0\mu_r n^2 S l$.
- Non dipende dalla corrente.

::: esempio
Solenoide di 1000 spire, lungo 50 cm, sezione $10\,\mathrm{cm^2} = 10^{-3}\,\mathrm{m^2}$, in aria:
$$L = \frac{4\pi \cdot 10^{-7} \cdot 1000^2 \cdot 10^{-3}}{0{,}5} = \frac{1{,}257 \cdot 10^{-3}}{0{,}5} \approx 2{,}5 \cdot 10^{-3}\,\mathrm H = 2{,}5\,\mathrm{mH}$$
Con il doppio delle spire (stessa lunghezza) l'induttanza quadruplica: 10 mH. Se la corrente varia di 100 A/s, la f.e.m. autoindotta del primo solenoide è $|\mathcal E_L| = 2{,}5 \cdot 10^{-3} \cdot 100 = 0{,}25\,\mathrm V$.
:::

## Il circuito RL: chiusura del circuito

### Il circuito

Un generatore di f.e.m. costante $\mathcal E$, una resistenza $R$ e un induttore di induttanza $L$ (resistenza propria trascurabile, o inclusa in $R$) sono collegati **in serie** con un interruttore. All'istante $t = 0$ l'interruttore viene chiuso; prima la corrente era nulla.

### Equazione del circuito

Percorrendo la maglia, la somma delle f.e.m. è uguale alla caduta di tensione sulla resistenza. Le f.e.m. sono quella del generatore e quella autoindotta:
$$\mathcal E - L\,\frac{di}{dt} = R\,i$$

### Soluzione passo per passo

1. **Isolo la derivata**: $L\dfrac{di}{dt} = \mathcal E - Ri$, cioè $\dfrac{di}{dt} = \dfrac{R}{L}\left(\dfrac{\mathcal E}{R} - i\right)$.
2. **Separo le variabili** (tutto ciò che contiene $i$ a sinistra, $t$ a destra):
$$\frac{di}{\dfrac{\mathcal E}{R} - i} = \frac{R}{L}\,dt$$
3. **Integro** da $t = 0$ (dove $i = 0$) a un istante $t$ (dove la corrente vale $i$):
$$\int_0^i \frac{di'}{\dfrac{\mathcal E}{R} - i'} = \int_0^t \frac{R}{L}\,dt' \quad\Rightarrow\quad -\ln\left(\frac{\mathcal E}{R} - i\right) + \ln\frac{\mathcal E}{R} = \frac{R}{L}\,t$$
4. **Riordino**: $\ln\dfrac{\mathcal E/R - i}{\mathcal E/R} = -\dfrac{R}{L}\,t$, quindi $\dfrac{\mathcal E/R - i}{\mathcal E/R} = e^{-Rt/L}$.
5. **Ricavo $i$**:
$$i(t) = \frac{\mathcal E}{R}\left(1 - e^{-t/\tau}\right) \qquad\qquad \tau = \frac{L}{R}$$
dove:
- $i(t)$ = corrente all'istante $t$ (A);
- $\mathcal E/R$ = corrente di regime, il valore finale (A);
- $\tau = L/R$ = **costante di tempo** del circuito (s).

Verifica: a $t = 0$, $e^0 = 1$ e $i = 0$; per $t \to \infty$, $e^{-\infty} = 0$ e $i \to \mathcal E/R$.

### Come si comporta la corrente

- **All'istante iniziale** la corrente è zero e cresce con la pendenza massima $\left.\dfrac{di}{dt}\right|_0 = \dfrac{\mathcal E}{L}$: tutta la f.e.m. del generatore è "contrastata" dall'induttore, che si comporta come un **circuito aperto**.
- La corrente **non salta** al valore finale (come farebbe senza induttore) ma **cresce in modo esponenziale**, sempre più lentamente.
- **A regime** $di/dt = 0$, la f.e.m. autoindotta è nulla, l'induttore si comporta come un **filo** e la corrente è quella di Ohm, $\mathcal E/R$.

| Tempo | $1 - e^{-t/\tau}$ | Corrente (frazione del valore finale) |
|---|---|---|
| $0$ | 0 | 0% |
| $\tau$ | $1 - e^{-1} \approx 0{,}632$ | 63% |
| $2\tau$ | $\approx 0{,}865$ | 86% |
| $3\tau$ | $\approx 0{,}950$ | 95% |
| $5\tau$ | $\approx 0{,}993$ | > 99% (praticamente a regime) |

La costante di tempo $\tau$ è il tempo dopo il quale la corrente ha raggiunto il 63% del valore finale. Più grande è $L$ (più "inerzia") o più piccola è $R$, più lento è il transitorio.

**Tensioni sui componenti.**
- Sulla resistenza: $V_R = Ri = \mathcal E(1 - e^{-t/\tau})$, che cresce da 0 a $\mathcal E$.
- Sull'induttore: $V_L = L\dfrac{di}{dt} = \mathcal E\,e^{-t/\tau}$, che cala da $\mathcal E$ a 0.
- In ogni istante $V_R + V_L = \mathcal E$.

## Il circuito RL: apertura (scarica)

Una volta raggiunta la corrente di regime $I_0 = \mathcal E/R$, si toglie il generatore e, nello stesso istante, si chiude il circuito sulla sola resistenza (con un deviatore). Ora l'equazione della maglia è:
$$-L\,\frac{di}{dt} = R\,i$$
1. Separo: $\dfrac{di}{i} = -\dfrac{R}{L}\,dt$.
2. Integro da $t = 0$ ($i = I_0$) a $t$: $\ln\dfrac{i}{I_0} = -\dfrac{R}{L}\,t$.
3. Risultato:
$$i(t) = I_0\,e^{-t/\tau} \qquad \tau = \frac{L}{R}$$

La corrente non si annulla di colpo: l'induttore la **tiene in vita** e la fa decrescere esponenzialmente, con la stessa costante di tempo. Dopo un tempo $\tau$ è scesa al 37% del valore iniziale. L'energia che la mantiene è quella immagazzinata nel campo magnetico dell'induttore.

Se invece si **interrompe bruscamente** il circuito (aprendo un interruttore senza un percorso alternativo), $di/dt$ diventa enorme e quindi anche la f.e.m. autoindotta $L\,di/dt$: tra i contatti dell'interruttore si forma una **scintilla** (extracorrente di apertura). È il principio delle bobine di accensione delle automobili.

::: esempio
**Circuito RL completo.** $\mathcal E = 12\,\mathrm V$, $R = 6\,\Omega$, $L = 0{,}3\,\mathrm H$.
1. Costante di tempo: $\tau = L/R = 0{,}3/6 = 0{,}05\,\mathrm s = 50\,\mathrm{ms}$.
2. Corrente di regime: $I_0 = 12/6 = 2\,\mathrm A$.
3. Pendenza iniziale: $\mathcal E/L = 12/0{,}3 = 40\,\mathrm{A/s}$.
4. Dopo $t = \tau = 50\,\mathrm{ms}$: $i = 2(1 - e^{-1}) \approx 2 \cdot 0{,}632 = 1{,}26\,\mathrm A$.
5. Dopo $t = 0{,}1\,\mathrm s = 2\tau$: $i = 2(1 - e^{-2}) \approx 1{,}73\,\mathrm A$.
6. Energia a regime: $U = \tfrac12 L I_0^2 = \tfrac12 \cdot 0{,}3 \cdot 4 = 0{,}6\,\mathrm J$.
7. All'apertura (chiudendo su $R$), dopo 50 ms la corrente è $2e^{-1} \approx 0{,}74\,\mathrm A$.
:::

::: esempio
$L = 0{,}5\,\mathrm H$, $R = 100\,\Omega$: $\tau = 0{,}5/100 = 5 \cdot 10^{-3}\,\mathrm s = 5\,\mathrm{ms}$. Dopo circa $5\tau = 25\,\mathrm{ms}$ la corrente è praticamente a regime.
:::

## Analisi dimensionale: $L/R$ è un tempo

Si vuole verificare che il rapporto $L/R$ ha le dimensioni di un tempo.

**Metodo 1 (dalle leggi del circuito), passo per passo.**
1. Dalla f.e.m. autoindotta $\mathcal E_L = -L\,\dfrac{di}{dt}$: $L = \dfrac{\mathcal E_L}{di/dt}$, quindi
$$[L] = \frac{\mathrm V}{\mathrm{A/s}} = \frac{\mathrm{V\,s}}{\mathrm A}$$
2. Dalla legge di Ohm $V = Ri$: $R = V/i$, quindi
$$[R] = \frac{\mathrm V}{\mathrm A}$$
3. Rapporto:
$$\left[\frac{L}{R}\right] = \frac{\mathrm{V\,s/A}}{\mathrm{V/A}} = \mathrm{s}$$

**Metodo 2 (dalle unità fondamentali).** $1\,\mathrm H = 1\,\mathrm{Wb/A} = 1\,\mathrm{T\,m^2/A}$; con $1\,\mathrm T = 1\,\mathrm{kg/(A\,s^2)}$ si ha $[L] = \mathrm{kg\,m^2\,s^{-2}\,A^{-2}}$. Per la resistenza, $1\,\Omega = 1\,\mathrm{V/A} = 1\,\mathrm{W/A^2} = \mathrm{kg\,m^2\,s^{-3}\,A^{-2}}$. Il rapporto è $\mathrm{s^{-2}}/\mathrm{s^{-3}} = \mathrm s$.

**Metodo 3 (coerenza della soluzione).** Nella soluzione $i(t) = \frac{\mathcal E}{R}(1 - e^{-tR/L})$ l'esponente di un'esponenziale deve essere un **numero puro**. $tR/L$ è adimensionale solo se $L/R$ si misura in secondi.

Fisicamente, $\tau = L/R$ è il **tempo caratteristico** del transitorio: è il tempo che la corrente impiegherebbe a raggiungere il valore di regime se continuasse a crescere con la pendenza iniziale $\mathcal E/L$ (infatti $\frac{\mathcal E/R}{\mathcal E/L} = L/R$).

## Energia immagazzinata nell'induttanza

### Bilancio energetico

Moltiplico l'equazione del circuito $\mathcal E = Ri + L\,di/dt$ per la corrente $i$:
$$\mathcal E\,i = R\,i^2 + L\,i\,\frac{di}{dt}$$
- $\mathcal E i$ = potenza erogata dal generatore;
- $R i^2$ = potenza dissipata in calore nella resistenza (effetto Joule);
- $L i\,di/dt$ = potenza spesa per far crescere la corrente contro la f.e.m. autoindotta: non si perde, ma si **accumula** nell'induttore.

### Energia

Sommo (integro) la potenza accumulata mentre la corrente cresce da $0$ a $I$:
$$U = \int L\,i\,\frac{di}{dt}\,dt = \int_0^I L\,i\,di = \frac12\,L\,I^2$$
dove $U$ è in J, $L$ in H, $I$ in A.

Questa energia è immagazzinata nel **campo magnetico** dell'induttore (lezione 71) e viene restituita quando la corrente cala: è proprio l'energia che mantiene la corrente durante l'apertura del circuito RL.

::: esempio
**Paniere.** In un circuito RL con $L = 10\,\mathrm H$ circola a regime una corrente di 3 A. Energia immagazzinata:
$$U = \tfrac12 \cdot 10 \cdot 3^2 = \tfrac12 \cdot 10 \cdot 9 = 45\,\mathrm J$$
Errori tipici: dimenticare il fattore $\tfrac12$ (90 J) o non elevare al quadrato la corrente ($LI = 30$).
:::

::: attenzione
- All'istante della chiusura la corrente è **zero** (non $\mathcal E/R$): l'induttore si comporta come un circuito aperto; a regime come un filo.
- $\tau = L/R$, non $R/L$ né $RL$ (che non sono tempi). Non confondere con il circuito RC, dove $\tau = RC$.
- L'induttanza non dipende dalla corrente: dipende da geometria e materiale.
:::

::: esame
Domande aperte:
- **"Si descriva un semplice circuito RL e se ne studi l'andamento temporale della corrente"**: disegna a parole il circuito (generatore, resistenza, induttanza in serie, interruttore), scrivi $\mathcal E - L\,di/dt = Ri$, risolvi separando le variabili, scrivi $i(t) = \frac{\mathcal E}{R}(1 - e^{-t/\tau})$ con $\tau = L/R$, commenta (parte da zero, 63% dopo $\tau$, regime $\mathcal E/R$ dopo circa $5\tau$, induttore come circuito aperto all'inizio e filo a regime) e aggiungi l'apertura $i = I_0e^{-t/\tau}$.
- **"Si verifichi tramite analisi dimensionale che L/R è un tempo"**: $[L] = \mathrm{V\,s/A}$ da $\mathcal E_L = -L\,di/dt$, $[R] = \mathrm{V/A}$ da Ohm, rapporto in secondi; aggiungi l'osservazione che l'esponente $t/\tau$ deve essere adimensionale.

Domanda chiusa: energia nell'induttanza, $U = \tfrac12 LI^2$.
:::

::: sintesi
- Autoinduzione: $\Phi = Li$, $\mathcal E_L = -L\,di/dt$; henry: $1\,\mathrm H = 1\,\mathrm{Wb/A} = 1\,\mathrm{V\,s/A} = 1\,\Omega\,\mathrm s$; l'induttanza si oppone alle variazioni di corrente.
- Solenoide: $L = \mu_0 n^2 S l = \mu_0 N^2 S/l$ (per $\mu_r$ con nucleo); cresce con il quadrato delle spire.
- Chiusura RL: $i = \frac{\mathcal E}{R}(1 - e^{-t/\tau})$; apertura: $i = I_0 e^{-t/\tau}$; $\tau = L/R$ in secondi; 63% dopo $\tau$.
- Bilancio: $\mathcal E i = Ri^2 + L i\,di/dt$.
- Energia: $U = \tfrac12 LI^2$.
:::

=== 71
SLIDES:
# Lezione 71 — Energia del campo magnetico

## Di cosa parla questa lezione

Per far crescere la corrente in un induttore il generatore deve compiere lavoro contro la f.e.m. autoindotta. Questo lavoro non va perso: quando la corrente cala, l'energia viene restituita (è ciò che mantiene la corrente nell'apertura del circuito RL). Ma **dove** si trova questa energia mentre la corrente scorre?

La risposta, analoga a quella trovata per il condensatore e il campo elettrico, è: **nel campo magnetico**, cioè nello spazio in cui il campo esiste. In questa lezione:
- si ricava l'energia di un'induttanza, $U = \tfrac12 LI^2$;
- si passa alla **densità di energia magnetica** $u_B = B^2/(2\mu_0)$, valida per qualunque campo;
- si confronta con il campo elettrico e si vede che cosa succede in un'onda elettromagnetica.

## L'energia sta nel campo

Accendere una corrente in un circuito con induttanza costa lavoro. Se poi la corrente viene spenta (chiudendo il circuito su una resistenza), il circuito restituisce esattamente quell'energia, sotto forma di calore nella resistenza. Nel frattempo, mentre la corrente è costante, l'energia è rimasta **immagazzinata**. Non sta nelle cariche (che si muovono con la stessa velocità di deriva di prima) né nel filo: sta nel **campo magnetico** creato dalla corrente. Qualunque regione dello spazio in cui c'è un campo magnetico contiene energia.

## Energia di un'induttanza

### Ricavo passo per passo

1. Mentre la corrente cresce, l'induttore produce la f.e.m. autoindotta $\mathcal E_L = -L\,\dfrac{di}{dt}$, che si oppone alla crescita.
2. Per vincerla il generatore deve fornire, oltre a quella dissipata nella resistenza, la potenza
$$P = |\mathcal E_L|\,i = L\,i\,\frac{di}{dt}$$
3. Nel tempo $dt$ il lavoro corrispondente è
$$dW = P\,dt = L\,i\,\frac{di}{dt}\,dt = L\,i\,di$$
4. Sommo tutti i contributi mentre la corrente sale da $0$ al valore finale $I$:
$$U = \int_0^I L\,i\,di = L\left[\frac{i^2}{2}\right]_0^I = \frac12\,L\,I^2$$

$$U = \frac12\,L\,I^2$$
dove $U$ = energia immagazzinata (J), $L$ = induttanza (H), $I$ = corrente (A).

**Osservazioni.**
- L'energia dipende dal **quadrato** della corrente: raddoppiando la corrente l'energia **quadruplica**.
- Non dipende da **come** la corrente ha raggiunto il valore $I$ (velocemente o lentamente): è una funzione di stato.
- È l'analoga dell'energia cinetica $\tfrac12 mv^2$: $L$ fa da "massa" (inerzia) e $I$ da "velocità".

### Verifica con la scarica del circuito RL

All'apertura del circuito RL la corrente cala come $i = I_0 e^{-t/\tau}$, con $\tau = L/R$. L'energia dissipata in tutta la scarica nella resistenza è
$$W_R = \int_0^\infty R\,i^2\,dt = R\,I_0^2\int_0^\infty e^{-2t/\tau}\,dt = R\,I_0^2\,\frac{\tau}{2} = R\,I_0^2\,\frac{L}{2R} = \frac12\,L\,I_0^2$$
È esattamente l'energia che era immagazzinata nell'induttore: i conti tornano.

::: esempio
Induttanza di 2 H con 5 A: $U = \tfrac12 \cdot 2 \cdot 5^2 = 25\,\mathrm J$. Con 10 A: $U = \tfrac12 \cdot 2 \cdot 100 = 100\,\mathrm J$, cioè quattro volte tanto.

Circuito RL con $L = 10\,\mathrm H$ e corrente di regime 3 A: $U = \tfrac12 \cdot 10 \cdot 9 = 45\,\mathrm J$.
:::

## Densità di energia magnetica

### Ricavo con il solenoide

Per capire come l'energia è distribuita nello spazio uso un caso semplice: un lungo solenoide, dove il campo è uniforme all'interno e nullo all'esterno.
1. Induttanza del solenoide (lezione 70): $L = \mu_0 n^2 S l$.
2. Campo interno: $B = \mu_0 n I$, da cui $I = \dfrac{B}{\mu_0 n}$.
3. Sostituisco nell'energia:
$$U = \frac12\,L\,I^2 = \frac12\,\mu_0 n^2 S l\,\frac{B^2}{\mu_0^2 n^2} = \frac{B^2}{2\mu_0}\,S\,l$$
4. $Sl$ è il **volume interno** del solenoide, cioè proprio il volume in cui c'è il campo.

L'energia è quindi uguale a una quantità che dipende solo dal campo, moltiplicata per il volume occupato dal campo. Dividendo per il volume si ottiene la **densità di energia magnetica**:
$$u_B = \frac{U}{V} = \frac{B^2}{2\mu_0}$$
dove:
- $u_B$ = energia per unità di volume (J/m³);
- $B$ = modulo del campo magnetico in quel punto (T);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$.

### Validità generale

Anche se l'abbiamo ricavata per il solenoide, la formula vale **per qualunque campo magnetico**, in ogni punto. Se il campo non è uniforme, l'energia totale si ottiene sommando la densità su tutto il volume in cui c'è campo:
$$U = \int_V \frac{B^2}{2\mu_0}\,dV$$
In un solenoide l'energia sta **dentro**, dove c'è il campo, non nel filo. In un materiale lineare di permeabilità relativa $\mu_r$:
$$u_B = \frac{B^2}{2\mu_0\mu_r} = \frac12\,B\,H$$

::: esempio
**Quanta energia in 1 T?**
$$u_B = \frac{1^2}{2 \cdot 4\pi \cdot 10^{-7}} = \frac{1}{2{,}513 \cdot 10^{-6}} \approx 4 \cdot 10^5\,\mathrm{J/m^3}$$
In un litro ($10^{-3}\,\mathrm{m^3}$) ci sono circa 400 J. I grandi elettromagneti (per esempio quelli delle macchine per risonanza magnetica, da 1,5–3 T e con volumi di metri cubi) contengono milioni di joule e vanno spenti con grande cautela.

Il campo magnetico terrestre ($B \approx 5 \cdot 10^{-5}\,\mathrm T$) ha invece $u_B = \dfrac{(5 \cdot 10^{-5})^2}{2{,}513 \cdot 10^{-6}} \approx 10^{-3}\,\mathrm{J/m^3}$.
:::

::: esempio
**Energia nel solenoide del paniere.** Solenoide lungo 10 cm, 600 spire, 20 A, $B \approx 0{,}151\,\mathrm T$; supponiamo sezione $S = 2\,\mathrm{cm^2} = 2 \cdot 10^{-4}\,\mathrm{m^2}$.
1. Densità: $u_B = \dfrac{0{,}151^2}{2{,}513 \cdot 10^{-6}} \approx \dfrac{0{,}0228}{2{,}513 \cdot 10^{-6}} \approx 9{,}07 \cdot 10^3\,\mathrm{J/m^3}$.
2. Volume: $Sl = 2 \cdot 10^{-4} \cdot 0{,}1 = 2 \cdot 10^{-5}\,\mathrm{m^3}$.
3. Energia: $U \approx 9{,}07 \cdot 10^3 \cdot 2 \cdot 10^{-5} \approx 0{,}18\,\mathrm J$.
4. Controllo con l'induttanza: $L = \mu_0 N^2 S/l = 4\pi \cdot 10^{-7} \cdot 3{,}6 \cdot 10^5 \cdot 2 \cdot 10^{-4}/0{,}1 \approx 9{,}05 \cdot 10^{-4}\,\mathrm H$; $\tfrac12 LI^2 = \tfrac12 \cdot 9{,}05 \cdot 10^{-4} \cdot 400 \approx 0{,}18\,\mathrm J$. Coincide.
:::

## Confronto con il campo elettrico

Per il campo elettrico si era trovato, partendo dal condensatore, $U = \tfrac12 CV^2$ e la densità $u_E = \tfrac12\varepsilon_0 E^2$. Le due situazioni sono perfettamente parallele.

| | Campo elettrico | Campo magnetico |
|---|---|---|
| Componente che immagazzina energia | condensatore | induttore |
| Grandezza caratteristica | capacità $C$ (F) | induttanza $L$ (H) |
| Energia del componente | $U = \tfrac12 CV^2 = \tfrac12 Q^2/C$ | $U = \tfrac12 LI^2$ |
| Lavoro fatto contro | la d.d.p. tra le armature mentre si carica | la f.e.m. autoindotta mentre la corrente cresce |
| Densità di energia | $u_E = \tfrac12\varepsilon_0 E^2$ | $u_B = \dfrac{B^2}{2\mu_0}$ |
| Dove sta l'energia | tra le armature | dentro il solenoide |

Dove ci sono entrambi i campi, le densità si sommano:
$$u = \frac12\,\varepsilon_0 E^2 + \frac{B^2}{2\mu_0}$$

## Energia in un'onda elettromagnetica

In un'onda elettromagnetica nel vuoto (lezione 72) i campi elettrico e magnetico sono legati da $E = cB$, con $c^2 = \dfrac{1}{\mu_0\varepsilon_0}$. Confronto le due densità:
$$u_E = \frac12\,\varepsilon_0 E^2 = \frac12\,\varepsilon_0 c^2 B^2 = \frac12\,\varepsilon_0\,\frac{1}{\mu_0\varepsilon_0}\,B^2 = \frac{B^2}{2\mu_0} = u_B$$
Le due densità sono **uguali**: l'energia dell'onda si divide esattamente a metà tra campo elettrico e campo magnetico. La densità totale è $u = \varepsilon_0 E^2 = B^2/\mu_0$.

L'energia dei campi può quindi **viaggiare nello spazio** anche senza fili né cariche: è l'energia che la luce del Sole porta sulla Terra. Il flusso di energia per unità di tempo e di superficie è il vettore di Poynting $\vec S = \dfrac{1}{\mu_0}\vec E \times \vec B$ (W/m²).

::: attenzione
- Raddoppiare la corrente (o il campo) **quadruplica** l'energia: dipendenza quadratica.
- L'energia magnetica sta nel **campo**, non nel filo né nelle cariche.
- $u_B = B^2/(2\mu_0)$ ha $\mu_0$ al **denominatore**, mentre $u_E = \tfrac12\varepsilon_0 E^2$ ha $\varepsilon_0$ al numeratore.
:::

::: esame
Domanda aperta tipica: "Si espongano gli aspetti energetici legati alla presenza di un campo magnetico in una regione di spazio". Struttura della risposta:
1. accendere una corrente in un induttore richiede lavoro contro la f.e.m. autoindotta: $dW = Li\,di$, quindi $U = \tfrac12 LI^2$ (con il bilancio $\mathcal E i = Ri^2 + Li\,di/dt$);
2. l'energia è immagazzinata nel campo magnetico: con il solenoide ($L = \mu_0 n^2 Sl$, $B = \mu_0 n I$) si ottiene $U = \frac{B^2}{2\mu_0}Sl$ e quindi la densità $u_B = B^2/(2\mu_0)$, valida per ogni campo;
3. l'energia viene restituita quando la corrente cala (apertura del circuito RL, calore $\tfrac12 LI^2$ nella resistenza);
4. confronto con il campo elettrico ($\tfrac12 CV^2$, $u_E = \tfrac12\varepsilon_0E^2$) e uguaglianza $u_E = u_B$ nelle onde elettromagnetiche.
:::

::: sintesi
- L'energia magnetica è immagazzinata nel campo, nello spazio in cui il campo esiste.
- Induttanza: $U = \tfrac12 LI^2$ (lavoro contro la f.e.m. autoindotta, $\int_0^I Li\,di$); restituita come calore nella scarica RL.
- Densità: $u_B = B^2/(2\mu_0)$ (J/m³), in un materiale $B^2/(2\mu_0\mu_r)$; energia totale $\int u_B\,dV$.
- Analogia: $\tfrac12 CV^2 \leftrightarrow \tfrac12 LI^2$, $u_E = \tfrac12\varepsilon_0E^2 \leftrightarrow u_B = B^2/(2\mu_0)$.
- In un'onda elettromagnetica nel vuoto $u_E = u_B$.
:::

=== 72
SLIDES:
# Lezione 72 — Equazioni di Maxwell e onde elettromagnetiche

## Di cosa parla questa lezione

È la lezione che riunisce tutto l'elettromagnetismo. Le leggi studiate separatamente (Gauss per il campo elettrico e per quello magnetico, Faraday, Ampère) vengono messe insieme; Maxwell si accorse che la legge di Ampère, così com'era, era incompleta e la corresse aggiungendo la **corrente di spostamento**. Con questa correzione le quattro equazioni prevedono l'esistenza di **onde elettromagnetiche** che viaggiano alla velocità della luce: la luce stessa è un'onda elettromagnetica.

In questa lezione:
- quali sono le sorgenti dei campi elettrici e magnetici;
- la legge di **Ampère-Maxwell** e la corrente di spostamento;
- le quattro **equazioni di Maxwell** in forma integrale e locale;
- le **onde elettromagnetiche**: come nascono, velocità, proprietà, energia, spettro.

## Come si producono i campi elettrici e magnetici

Ciascuno dei due campi ha due tipi di sorgente: una "statica" e una legata alla variazione nel tempo dell'altro campo.

| | Sorgente "statica" | Sorgente "dinamica" |
|---|---|---|
| **Campo elettrico** | **cariche elettriche** (anche ferme): legge di Coulomb, teorema di Gauss; le linee partono dalle cariche positive e finiscono sulle negative | **campo magnetico variabile nel tempo**: legge di Faraday-Neumann-Lenz; linee chiuse, campo non conservativo |
| **Campo magnetico** | **correnti** (cariche in moto) e magneti permanenti (correnti microscopiche negli atomi): leggi di Laplace e di Ampère | **campo elettrico variabile nel tempo**: termine di Maxwell (corrente di spostamento) |

Note importanti:
- Il campo magnetico **non** ha sorgenti puntiformi (non esistono monopoli magnetici): le sue linee sono sempre chiuse.
- Una carica **ferma** produce solo campo elettrico; una carica in **moto uniforme** produce campo elettrico e magnetico; una carica **accelerata** irradia onde elettromagnetiche.
- La simmetria tra le due sorgenti "dinamiche" è ciò che permette ai campi di sostenersi a vicenda e di propagarsi come onde, anche lontano da cariche e correnti.

## La legge di Ampère-Maxwell

### Il problema della legge di Ampère

Il teorema di Ampère $\oint \vec B \cdot d\vec l = \mu_0\,i_{conc}$ è stato ricavato per correnti **stazionarie**. Con correnti variabili porta a una contraddizione.

Esempio: un **condensatore a facce piane che si sta caricando**. Nei fili di collegamento scorre la corrente $i$; tra le armature non passa nessuna carica (c'è il vuoto o un isolante), ma il campo elettrico cresce perché la carica sulle armature aumenta.
1. Prendo come linea chiusa $\gamma$ una circonferenza attorno al filo, vicino al condensatore.
2. Scelgo come superficie con bordo $\gamma$ un **disco piatto** che taglia il filo: la corrente concatenata è $i$, quindi $\oint \vec B \cdot d\vec l = \mu_0 i$.
3. Scelgo invece una superficie a forma di **sacchetto** con lo stesso bordo, che passa **tra le armature** senza toccare il filo: nessuna corrente la attraversa, quindi $\oint \vec B \cdot d\vec l = 0$.

La stessa circuitazione avrebbe due valori diversi: impossibile. La legge di Ampère, con le sole correnti di conduzione, non può essere completa. (Lo stesso si vede con l'equazione di continuità: dalla forma locale $\nabla \times \vec B = \mu_0\vec J$, prendendo la divergenza, si avrebbe $\nabla \cdot \vec J = 0$ sempre, che contraddice $\nabla \cdot \vec J = -\partial\rho/\partial t$ quando la carica si accumula, come sulle armature.)

### La corrente di spostamento

Maxwell notò che tra le armature, al posto della corrente, c'è un **flusso elettrico che cambia**. Calcoliamo quanto cambia.
1. Tra le armature (area $S$, carica $q$) il campo è $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{q}{\varepsilon_0 S}$.
2. Il flusso elettrico attraverso una superficie tra le armature è $\Phi_E = E\,S = \dfrac{q}{\varepsilon_0}$.
3. Derivo nel tempo: $\dfrac{d\Phi_E}{dt} = \dfrac{1}{\varepsilon_0}\dfrac{dq}{dt} = \dfrac{i}{\varepsilon_0}$.
4. Quindi $\varepsilon_0\,\dfrac{d\Phi_E}{dt} = i$: questa quantità è **esattamente uguale alla corrente nei fili**.

Maxwell definì la **corrente di spostamento**:
$$i_s = \varepsilon_0\,\frac{d\Phi_E}{dt}$$
dove:
- $i_s$ = corrente di spostamento (A);
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{F/m}$ = costante dielettrica del vuoto;
- $\Phi_E$ = flusso del campo elettrico attraverso la superficie (V·m).

Non è un movimento di cariche: è un campo elettrico che varia. Ma produce campo magnetico **esattamente come** una corrente.

### La legge completa

$$\oint_\gamma \vec B \cdot d\vec l = \mu_0\left(i + \varepsilon_0\,\frac{d\Phi_E}{dt}\right) = \mu_0\,i + \mu_0\varepsilon_0\,\frac{d\Phi_E}{dt}$$
dove $i$ è la corrente di conduzione concatenata con $\gamma$ e $\Phi_E$ il flusso elettrico attraverso una superficie con bordo $\gamma$.

Con questa correzione il paradosso sparisce: attraverso il disco passa la corrente di conduzione $i$, attraverso il sacchetto passa una corrente di spostamento uguale, $i_s = i$. La "corrente totale" (conduzione + spostamento) è continua, non si interrompe mai.

**Significato: un campo elettrico variabile nel tempo genera un campo magnetico**, così come un campo magnetico variabile genera un campo elettrico (Faraday). È la simmetria che rende possibili le onde elettromagnetiche.

**Forma locale.** Con Stokes e la densità di corrente:
$$\nabla \times \vec B = \mu_0\vec J + \mu_0\varepsilon_0\,\frac{\partial \vec E}{\partial t}$$
Prendendo la divergenza (la divergenza di un rotore è sempre nulla) e usando $\nabla \cdot \vec E = \rho/\varepsilon_0$ si ottiene $0 = \mu_0\left(\nabla \cdot \vec J + \dfrac{\partial\rho}{\partial t}\right)$: l'equazione di continuità. La correzione di Maxwell rende la legge di Ampère **compatibile con la conservazione della carica**.

::: esempio
**Campo magnetico tra le armature.** Un condensatore con armature circolari di raggio $R = 5\,\mathrm{cm}$ si carica con corrente $i = 1\,\mathrm A$. Campo magnetico tra le armature a distanza $r$ dall'asse?
1. Il campo elettrico è uniforme tra le armature, quindi la corrente di spostamento è distribuita uniformemente sulla sezione. Una circonferenza di raggio $r < R$ concatena la frazione $r^2/R^2$: $i_s(r) = i\,\dfrac{r^2}{R^2}$.
2. Per simmetria $\vec B$ è tangente alle circonferenze coassiali: $B \cdot 2\pi r = \mu_0\,i\,\dfrac{r^2}{R^2}$, quindi $B = \dfrac{\mu_0 i r}{2\pi R^2}$ (stessa forma del campo dentro un filo).
3. Al bordo ($r = R$): $B = \dfrac{\mu_0 i}{2\pi R} = \dfrac{2 \cdot 10^{-7} \cdot 1}{0{,}05} = 4 \cdot 10^{-6}\,\mathrm T$.
Tra le armature, dove non passa nessuna carica, c'è un campo magnetico misurabile.
:::

## Le equazioni di Maxwell

Le quattro equazioni di Maxwell, insieme alla forza di Lorentz, descrivono **tutti** i fenomeni elettromagnetici classici.

### Forma integrale (nel vuoto)

1. **Legge di Gauss per il campo elettrico**
$$\oint_S \vec E \cdot d\vec S = \frac{Q_{int}}{\varepsilon_0}$$
   Il flusso del campo elettrico attraverso una superficie chiusa è proporzionale alla carica racchiusa: **le cariche sono le sorgenti del campo elettrico** (le linee partono dalle cariche positive e finiscono sulle negative).

2. **Legge di Gauss per il campo magnetico**
$$\oint_S \vec B \cdot d\vec S = 0$$
   Il flusso magnetico attraverso qualsiasi superficie chiusa è nullo: **non esistono monopoli magnetici**, le linee di $\vec B$ sono chiuse.

3. **Legge di Faraday-Neumann-Lenz**
$$\oint_\gamma \vec E \cdot d\vec l = -\frac{d\Phi_B}{dt}$$
   La circuitazione del campo elettrico è uguale all'opposto della variazione del flusso magnetico: **un campo magnetico variabile genera un campo elettrico** (non conservativo).

4. **Legge di Ampère-Maxwell**
$$\oint_\gamma \vec B \cdot d\vec l = \mu_0\,i + \mu_0\varepsilon_0\,\frac{d\Phi_E}{dt}$$
   La circuitazione del campo magnetico dipende dalle correnti concatenate e dalla variazione del flusso elettrico: **correnti e campi elettrici variabili generano campo magnetico**.

Simboli: $S$ = superficie chiusa; $\gamma$ = linea chiusa, con $\Phi_B$ e $\Phi_E$ flussi attraverso una superficie che ha $\gamma$ come bordo; $Q_{int}$ = carica racchiusa (C); $i$ = corrente di conduzione concatenata (A); $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{F/m}$; $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$.

### Forma locale (differenziale)

Applicando il teorema della divergenza alle prime due e il teorema di Stokes alle ultime due:
$$\begin{aligned}
\nabla \cdot \vec E &= \frac{\rho}{\varepsilon_0} & \nabla \cdot \vec B &= 0 \\
\nabla \times \vec E &= -\frac{\partial \vec B}{\partial t} & \nabla \times \vec B &= \mu_0\vec J + \mu_0\varepsilon_0\frac{\partial \vec E}{\partial t}
\end{aligned}$$
dove $\rho$ è la densità di carica (C/m³) e $\vec J$ la densità di corrente (A/m²).

- Le due equazioni con la **divergenza** dicono da dove "nascono" i campi (cariche per $\vec E$, nulla per $\vec B$).
- Le due equazioni con il **rotore** dicono come i campi "vorticano" (attorno a $\vec B$ variabili per $\vec E$; attorno a correnti ed $\vec E$ variabili per $\vec B$).
- Nel caso **statico** (niente derivate temporali) le equazioni si separano: elettrostatica ($\nabla \times \vec E = 0$, campo conservativo) e magnetostatica ($\nabla \times \vec B = \mu_0\vec J$, Ampère). Con campi variabili i due campi sono **accoppiati**.

### Completamento: forza di Lorentz e conservazione della carica

Le equazioni dicono come le cariche producono i campi; la **forza di Lorentz** dice come i campi agiscono sulle cariche:
$$\vec F = q\left(\vec E + \vec v \times \vec B\right)$$
La conservazione della carica, $\nabla \cdot \vec J = -\partial\rho/\partial t$, è contenuta nelle equazioni stesse (vedi sopra).

### Nei materiali

Nei materiali si usano i campi ausiliari $\vec D = \varepsilon_0\varepsilon_r\vec E$ e $\vec H = \vec B/(\mu_0\mu_r)$, e nelle equazioni compaiono solo le cariche e le correnti "libere": $\nabla \cdot \vec D = \rho_{lib}$, $\nabla \times \vec H = \vec J_{lib} + \partial\vec D/\partial t$. Le altre due restano invariate.

## Onde elettromagnetiche

### Come nascono

Nel vuoto, lontano da cariche e correnti ($\rho = 0$, $\vec J = 0$), le equazioni diventano:
$$\nabla \cdot \vec E = 0 \qquad \nabla \cdot \vec B = 0 \qquad \nabla \times \vec E = -\frac{\partial \vec B}{\partial t} \qquad \nabla \times \vec B = \mu_0\varepsilon_0\frac{\partial \vec E}{\partial t}$$
Restano solo i termini "dinamici". Un campo elettrico che varia crea un campo magnetico che varia, che a sua volta crea un campo elettrico che varia, e così via: i due campi si **generano a vicenda** e la perturbazione si propaga nello spazio. È un'**onda elettromagnetica**.

### Equazione delle onde e velocità (ricavo)

1. Prendo il rotore della terza equazione: $\nabla \times (\nabla \times \vec E) = -\dfrac{\partial}{\partial t}(\nabla \times \vec B)$.
2. Identità vettoriale: $\nabla \times (\nabla \times \vec E) = \nabla(\nabla \cdot \vec E) - \nabla^2\vec E = -\nabla^2\vec E$ (perché $\nabla \cdot \vec E = 0$).
3. Sostituisco la quarta equazione a destra: $-\dfrac{\partial}{\partial t}\left(\mu_0\varepsilon_0\dfrac{\partial\vec E}{\partial t}\right) = -\mu_0\varepsilon_0\dfrac{\partial^2\vec E}{\partial t^2}$.
4. Risultato:
$$\nabla^2\vec E = \mu_0\varepsilon_0\,\frac{\partial^2\vec E}{\partial t^2}$$
   È l'**equazione delle onde** (la stessa vista per le onde meccaniche, $\partial^2 y/\partial x^2 = \frac{1}{v^2}\partial^2 y/\partial t^2$), con velocità $v^2 = \dfrac{1}{\mu_0\varepsilon_0}$. Per $\vec B$ si ottiene la stessa equazione.
5. Valore numerico:
$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = \frac{1}{\sqrt{4\pi \cdot 10^{-7} \cdot 8{,}854 \cdot 10^{-12}}} = \frac{1}{\sqrt{1{,}113 \cdot 10^{-17}}} \approx 3{,}00 \cdot 10^8\,\mathrm{m/s}$$

Maxwell notò che questa velocità, calcolata solo da costanti elettriche e magnetiche misurate in laboratorio, coincide con la **velocità della luce** misurata indipendentemente. Conclusione: **la luce è un'onda elettromagnetica**. Hertz (1887) produsse e rivelò per primo onde elettromagnetiche con circuiti oscillanti, confermando la teoria.

In un mezzo materiale la velocità è $v = \dfrac{1}{\sqrt{\mu\varepsilon}} = \dfrac{c}{\sqrt{\varepsilon_r\mu_r}} = \dfrac{c}{n}$, con $n$ indice di rifrazione.

### L'onda piana armonica

Un'onda che si propaga lungo $x$:
$$\vec E = E_0\sin(kx - \omega t)\,\hat y \qquad \vec B = B_0\sin(kx - \omega t)\,\hat z$$
dove $E_0$ (V/m) e $B_0$ (T) sono le ampiezze, $k = 2\pi/\lambda$ il numero d'onda (rad/m), $\omega = 2\pi f$ la pulsazione (rad/s). Sostituendo nelle equazioni di Maxwell si trova $\omega/k = c$ e $E_0 = cB_0$.

### Proprietà delle onde elettromagnetiche

- Si propagano **anche nel vuoto**: a differenza delle onde meccaniche (suono, onde in una corda), non hanno bisogno di un mezzo materiale. Quello che oscilla sono i campi.
- Nel vuoto viaggiano tutte alla stessa velocità $c \approx 3 \cdot 10^8\,\mathrm{m/s}$, qualunque sia la frequenza.
- Sono **trasversali**: $\vec E$ e $\vec B$ sono perpendicolari tra loro e perpendicolari alla direzione di propagazione; $\vec E \times \vec B$ punta nel verso di propagazione.
- $\vec E$ e $\vec B$ oscillano **in fase** (massimi e zeri negli stessi punti e negli stessi istanti), con $E = cB$ in ogni istante.
- Trasportano **energia** e **quantità di moto** (esercitano una pressione di radiazione), ma non trasportano carica né materia.
- Possono essere **polarizzate** (la direzione di $\vec E$ definisce la polarizzazione).
- Sono prodotte da **cariche accelerate**: per esempio gli elettroni che oscillano avanti e indietro nell'antenna di un trasmettitore, oppure le transizioni degli elettroni negli atomi (luce) e dei nuclei (raggi gamma).
- Relazione fondamentale tra lunghezza d'onda e frequenza:
$$c = \lambda\,f$$
dove $\lambda$ = lunghezza d'onda (m) e $f$ = frequenza (Hz).

### Energia trasportata

La densità di energia è divisa a metà tra i due campi (lezione 71): $u = \tfrac12\varepsilon_0 E^2 + \dfrac{B^2}{2\mu_0} = \varepsilon_0 E^2$. Il flusso di energia (potenza per unità di area) è dato dal **vettore di Poynting**
$$\vec S = \frac{1}{\mu_0}\,\vec E \times \vec B$$
(W/m²), diretto nel verso di propagazione. Il suo valor medio è l'**intensità** dell'onda: per un'onda armonica $I = \tfrac12 c\,\varepsilon_0 E_0^2 = \dfrac{E_0 B_0}{2\mu_0}$.

::: esempio
**Lunghezze d'onda.**
- Radio FM a 100 MHz: $\lambda = \dfrac{c}{f} = \dfrac{3 \cdot 10^8}{10^8} = 3\,\mathrm m$.
- Luce verde con $\lambda = 500\,\mathrm{nm}$: $f = \dfrac{3 \cdot 10^8}{5 \cdot 10^{-7}} = 6 \cdot 10^{14}\,\mathrm{Hz}$.
- Forno a microonde a 2,45 GHz: $\lambda = \dfrac{3 \cdot 10^8}{2{,}45 \cdot 10^9} \approx 12\,\mathrm{cm}$.
:::

::: esempio
**Campi e intensità.** Un'onda ha campo elettrico di ampiezza $E_0 = 100\,\mathrm{V/m}$.
1. Campo magnetico: $B_0 = E_0/c = 100/(3 \cdot 10^8) \approx 3{,}3 \cdot 10^{-7}\,\mathrm T$ (molto piccolo: l'effetto magnetico di un'onda sulle cariche è di solito trascurabile rispetto a quello elettrico).
2. Intensità: $I = \tfrac12 \cdot 3 \cdot 10^8 \cdot 8{,}85 \cdot 10^{-12} \cdot 100^2 \approx 13{,}3\,\mathrm{W/m^2}$.
:::

## Lo spettro elettromagnetico

Tutte le onde elettromagnetiche sono dello **stesso tipo**: cambiano solo frequenza e lunghezza d'onda (e quindi il modo in cui interagiscono con la materia). In ordine di **frequenza crescente** (lunghezza d'onda decrescente):

| Tipo | Lunghezza d'onda (indicativa) | Frequenza (indicativa) | Sorgenti e usi |
|---|---|---|---|
| Onde radio | da km a circa 30 cm | fino a circa 1 GHz | antenne; radio, TV |
| Microonde | da 30 cm a 1 mm | 1 GHz – 300 GHz | radar, telefonia, forni a microonde |
| Infrarosso | da 1 mm a 700 nm | fino a $4 \cdot 10^{14}$ Hz | corpi caldi; termocamere, telecomandi |
| Luce visibile | da 700 nm (rosso) a 400 nm (violetto) | $4$–$7{,}5 \cdot 10^{14}$ Hz | Sole, lampade; visione |
| Ultravioletto | da 400 nm a 10 nm | fino a $3 \cdot 10^{16}$ Hz | Sole; abbronzatura, sterilizzazione |
| Raggi X | da 10 nm a 0,01 nm | fino a $3 \cdot 10^{19}$ Hz | tubi a raggi X; radiografie |
| Raggi gamma | sotto 0,01 nm | oltre | nuclei radioattivi; radioterapia |

All'aumentare della frequenza aumenta l'energia trasportata da ogni "pacchetto" (fotone), $E = hf$: i raggi gamma hanno la frequenza più alta e i fotoni più energetici, e sono i più penetranti e pericolosi.

::: attenzione
- La corrente di spostamento **non** è un flusso di cariche: è $\varepsilon_0\,d\Phi_E/dt$, un campo elettrico che varia.
- Le onde elettromagnetiche non hanno bisogno di un mezzo; le onde sonore sì.
- Nel vuoto tutte le onde elettromagnetiche hanno la stessa velocità $c$: cambia la lunghezza d'onda, non la velocità.
- Le onde e.m. sono trasversali, non longitudinali.
:::

::: esame
Le domande aperte di questa lezione:
- **"Come possono essere prodotti i campi elettrici e magnetici?"**: campo elettrico da cariche (Gauss) e da campi magnetici variabili (Faraday); campo magnetico da correnti e magneti (Ampère, Laplace) e da campi elettrici variabili (Maxwell); niente monopoli magnetici; cariche accelerate producono onde.
- **"Si esponga la legge di Ampère-Maxwell"**: parti da Ampère, mostra la contraddizione con il condensatore che si carica (due superfici con lo stesso bordo), ricava $\varepsilon_0\,d\Phi_E/dt = i$, scrivi $\oint \vec B \cdot d\vec l = \mu_0 i + \mu_0\varepsilon_0\,d\Phi_E/dt$, la forma locale e il significato (campo elettrico variabile genera campo magnetico; compatibilità con la conservazione della carica).
- **"Si descriva la forma generale delle equazioni di Maxwell"**: le quattro equazioni in forma integrale e locale, ciascuna con il suo significato in una frase, più la forza di Lorentz.
- **"Esporre i concetti fondamentali delle onde elettromagnetiche"**: origine (campi che si generano a vicenda, cariche accelerate), equazione delle onde e $c = 1/\sqrt{\mu_0\varepsilon_0}$, la luce come onda e.m., trasversalità, $E = cB$, propagazione nel vuoto, energia ($u_E = u_B$, vettore di Poynting), $c = \lambda f$, spettro.
:::

::: sintesi
- Sorgenti: $\vec E$ da cariche e da $\vec B$ variabili; $\vec B$ da correnti e da $\vec E$ variabili; niente monopoli magnetici.
- Corrente di spostamento $i_s = \varepsilon_0\,d\Phi_E/dt$; Ampère-Maxwell: $\oint \vec B \cdot d\vec l = \mu_0 i + \mu_0\varepsilon_0\,d\Phi_E/dt$, coerente con la conservazione della carica.
- Maxwell: $\oint \vec E\cdot d\vec S = Q/\varepsilon_0$; $\oint \vec B\cdot d\vec S = 0$; $\oint \vec E\cdot d\vec l = -d\Phi_B/dt$; $\oint \vec B\cdot d\vec l = \mu_0 i + \mu_0\varepsilon_0\,d\Phi_E/dt$; forme locali con divergenza e rotore; più la forza di Lorentz.
- Onde e.m.: equazione delle onde, $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3 \cdot 10^8\,\mathrm{m/s}$; la luce è un'onda e.m.
- Trasversali, nel vuoto, $\vec E \perp \vec B$ in fase, $E = cB$, $c = \lambda f$, energia divisa a metà, $\vec S = \vec E \times \vec B/\mu_0$.
- Spettro per frequenza crescente: radio, microonde, infrarosso, visibile, ultravioletto, X, gamma.
:::
