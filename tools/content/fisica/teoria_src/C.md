=== 15 dispense
SLIDES: 14, 15
# Lezione 15 — Oscillazioni e oscillatore armonico

## Di cosa parla questa lezione
Molti sistemi fisici, se vengono spostati di poco dalla loro posizione di equilibrio, si mettono a oscillare: una massa attaccata a una molla, un pendolo, la membrana di un altoparlante, un ponte su cui marciano dei soldati, gli atomi di un solido. Il modello che descrive tutti questi casi è il **moto armonico semplice**.

In questa lezione:
- partiamo dal moto circolare uniforme (già visto in cinematica) e scopriamo che la sua **proiezione** su un diametro è un moto armonico;
- definiamo le grandezze che descrivono un'oscillazione: ampiezza, fase, periodo, frequenza, pulsazione;
- ricaviamo velocità e accelerazione e vediamo come sono sfasate rispetto alla posizione;
- capiamo **quale forza** produce un moto armonico (la forza di richiamo $F = -cx$) e quindi cos'è un **oscillatore armonico**;
- studiamo i due oscillatori classici, molla e pendolo, e l'energia dell'oscillatore;
- passiamo ai casi reali: **oscillazioni smorzate** (con attrito) e **oscillazioni forzate**, fino al fenomeno della **risonanza**.

La lezione successiva riprende in dettaglio la molla (legge di Hooke, molle in serie e in parallelo) e i tipi di equilibrio.

## Dal moto circolare uniforme al moto armonico
Consideriamo un punto P che si muove di moto circolare uniforme su una circonferenza di raggio $R$ centrata nell'origine degli assi. Il raggio che va dall'origine a P ruota con **velocità angolare costante** $\omega$. L'angolo che il raggio forma con l'asse $x$ cresce quindi linearmente nel tempo:

$$\theta(t) = \omega t + \theta_0$$

dove:
- $\theta$ = angolo del raggio vettore con l'asse $x$ (rad)
- $\omega$ = velocità angolare (rad/s)
- $t$ = tempo (s)
- $\theta_0$ = angolo all'istante $t = 0$ (rad)

Ora guardiamo il punto "di taglio", cioè proiettiamo P sull'asse $x$ (come se lo illuminassimo dall'alto e guardassimo la sua ombra sull'asse). La proiezione Q ha coordinata:

$$x(t) = R\cos(\omega t + \theta_0)$$

Mentre P gira sempre nello stesso verso, la sua ombra Q va **avanti e indietro** sull'asse $x$ tra $-R$ e $+R$: è un moto rettilineo e **periodico**. Quando P passa per il punto più a destra della circonferenza, Q è all'estremo $+R$ e per un istante è fermo; quando P passa in cima o in fondo alla circonferenza, Q passa per l'origine con la velocità massima.

### Velocità e accelerazione della proiezione, ricavate dal moto circolare
Possiamo ottenere velocità e accelerazione di Q proiettando quelle di P.
- La velocità di P è tangente alla circonferenza e ha modulo $v = \omega R$. Quando il raggio forma l'angolo $\theta$ con l'asse $x$, la tangente forma con l'asse $x$ un angolo $\theta + 90°$; la componente $x$ della velocità è quindi $\omega R\cos(\theta + 90°) = -\omega R\sin\theta$.
- L'accelerazione di P è centripeta: punta verso il centro e ha modulo $a = \omega^2 R$. La sua componente $x$ è $-\omega^2 R\cos\theta$ (il segno meno perché punta verso il centro, cioè in verso opposto al raggio).

Quindi:

$$v_x(t) = -\omega R\sin(\omega t + \theta_0) \qquad a_x(t) = -\omega^2 R\cos(\omega t + \theta_0) = -\omega^2\,x(t)$$

L'ultima uguaglianza è il risultato chiave: **l'accelerazione della proiezione è proporzionale alla posizione e di segno opposto**.

### Periodo, frequenza e pulsazione nel moto circolare
Nel moto circolare uniforme il punto compie un giro completo ($2\pi$ radianti) nel tempo $T$, quindi $\omega = 2\pi/T$. Le tre grandezze sono legate da:

$$T = \frac{1}{\nu} = \frac{2\pi}{\omega}$$

Queste stesse relazioni valgono per la proiezione: l'ombra Q torna nella stessa posizione con la stessa velocità ogni volta che P completa un giro.

## Il moto armonico semplice
La proiezione del moto circolare uniforme è un caso particolare di una classe generale di moti, molto importante in dinamica: il **moto armonico semplice**. Si chiama così ogni moto rettilineo la cui legge oraria è:

$$x(t) = A\cos(\omega t + \varphi)$$

dove:
- $x$ = posizione rispetto al centro di oscillazione (m)
- $A$ = **ampiezza** (m): la massima distanza raggiunta, in un verso o nell'altro, rispetto alla posizione centrale. È sempre positiva
- $\omega$ = **pulsazione** (rad/s)
- $t$ = tempo (s)
- $\omega t + \varphi$ = **fase** del moto (rad): l'argomento del coseno, che dice "a che punto" dell'oscillazione si trova il corpo
- $\varphi$ = **fase iniziale** o **angolo di fase** (rad): il valore della fase a $t = 0$. È determinato dalle **condizioni iniziali** del moto (da dove parte il corpo e con che velocità)

Poiché il coseno varia tra $-1$ e $+1$, la posizione varia tra $-A$ e $+A$. L'intervallo totale percorso tra i due estremi è quindi $2A$ (non $A$).

Il moto armonico **non richiede** che ci sia davvero un punto che gira su una circonferenza: la circonferenza è solo un modo comodo per visualizzarlo. Una massa su una molla, un pendolo, una corda che vibra si muovono con questa legge senza che nulla ruoti.

### Come si trovano ampiezza e fase dalle condizioni iniziali
Supponiamo di sapere che a $t = 0$ il corpo è in $x_0$ con velocità $v_0$. Dalla legge oraria e dalla velocità (ricavata più sotto) si ha:

$$x_0 = A\cos\varphi \qquad v_0 = -\omega A\sin\varphi$$

Dividendo la seconda per $\omega$, elevando al quadrato e sommando, e ricordando che $\cos^2\varphi + \sin^2\varphi = 1$:

$$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2} \qquad \tan\varphi = -\frac{v_0}{\omega x_0}$$

Due casi molto frequenti:
- il corpo parte **da fermo** dall'estremo $x_0 = A$: allora $v_0 = 0$, $\varphi = 0$ e $x(t) = A\cos(\omega t)$;
- il corpo parte **dal centro** con velocità $v_0 > 0$: allora $x_0 = 0$, $\varphi = -\pi/2$ e $x(t) = A\cos(\omega t - \pi/2) = A\sin(\omega t)$ con $A = v_0/\omega$.

Seno e coseno descrivono quindi lo stesso tipo di moto: cambia solo la fase iniziale.

## Periodo, frequenza e pulsazione
Queste tre grandezze dicono **quanto è rapida** l'oscillazione. Basta conoscerne una per ricavare le altre due.

$$T = \frac{2\pi}{\omega} \qquad \nu = \frac{1}{T} = \frac{\omega}{2\pi} \qquad \omega = 2\pi\nu = \frac{2\pi}{T}$$

dove:
- $T$ = **periodo** (s): il tempo impiegato per compiere un'oscillazione completa, cioè per tornare nella stessa posizione con la stessa velocità (andata e ritorno)
- $\nu$ = **frequenza** (Hz, hertz; $1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$): il numero di oscillazioni complete compiute in un secondo
- $\omega$ = **pulsazione** (rad/s): di quanti radianti avanza la fase in un secondo. Nel moto circolare associato è la velocità angolare

Perché $T = 2\pi/\omega$? Il coseno è periodico di $2\pi$: la posizione si ripete quando la fase aumenta di $2\pi$. La fase aumenta di $\omega$ radianti al secondo, quindi per aumentare di $2\pi$ serve il tempo $T = 2\pi/\omega$. In formule: $\omega(t + T) + \varphi = \omega t + \varphi + 2\pi$ dà $\omega T = 2\pi$.

::: attenzione
Non confondere frequenza e pulsazione: hanno le stesse dimensioni ($\mathrm{s^{-1}}$) ma differiscono di un fattore $2\pi$. Un'oscillazione a $\nu = 1\,\mathrm{Hz}$ ha $\omega = 2\pi \approx 6{,}28\,\mathrm{rad/s}$. E il periodo è l'inverso della **frequenza**, non della pulsazione.
:::

## Velocità e accelerazione nel moto armonico
Si ottengono derivando la legge oraria rispetto al tempo. Usiamo la regola della catena: la derivata di $\cos(\omega t + \varphi)$ è $-\sin(\omega t + \varphi)$ moltiplicato per la derivata dell'argomento, che è $\omega$.

**Velocità** (derivata prima della posizione):

$$v(t) = \frac{dx}{dt} = -\omega A\sin(\omega t + \varphi)$$

**Accelerazione** (derivata della velocità; la derivata di $\sin$ è $\cos$, sempre per $\omega$):

$$a(t) = \frac{dv}{dt} = \frac{d^2x}{dt^2} = -\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x(t)$$

dove:
- $v$ = velocità (m/s); il suo valore massimo in modulo è $v_{max} = \omega A$ (quando $|\sin| = 1$)
- $a$ = accelerazione (m/s²); il suo valore massimo in modulo è $a_{max} = \omega^2 A$ (quando $|\cos| = 1$)

### L'equazione differenziale del moto armonico
L'ultima relazione si può riscrivere come:

$$\frac{d^2x}{dt^2} = -\omega^2 x \qquad\text{ovvero}\qquad \frac{d^2x}{dt^2} + \omega^2 x = 0$$

È l'**equazione differenziale del moto armonico**: dice che l'accelerazione è in ogni istante proporzionale alla posizione, con segno opposto. Ogni sistema in cui l'accelerazione segue questa legge si muove di moto armonico, e la sua soluzione generale è proprio $x(t) = A\cos(\omega t + \varphi)$, con $A$ e $\varphi$ fissati dalle condizioni iniziali. Il coefficiente davanti a $x$ è il quadrato della pulsazione: leggendo l'equazione si ricava subito $\omega$.

### Lo sfasamento di un quarto di periodo
Usando le identità $-\sin\alpha = \cos(\alpha + \pi/2)$ e $-\cos\alpha = \cos(\alpha + \pi)$ si vede che:

$$x = A\cos(\omega t + \varphi) \qquad v = \omega A\cos\!\left(\omega t + \varphi + \tfrac{\pi}{2}\right) \qquad a = \omega^2 A\cos(\omega t + \varphi + \pi)$$

Posizione, velocità e accelerazione sono tutte periodiche con lo stesso periodo, ma **sfasate progressivamente di un quarto di periodo** ($\pi/2$ di fase): la velocità è in anticipo di un quarto di periodo sulla posizione, l'accelerazione di mezzo periodo (cioè è in **opposizione di fase** con la posizione).

Seguiamo il moto con $\varphi = 0$ (partenza da ferma dall'estremo positivo):

| Istante | Posizione $x$ | Velocità $v$ | Accelerazione $a$ |
|---|---|---|---|
| $t = 0$ | $+A$ (estremo) | $0$ | $-\omega^2 A$ (massima, verso il centro) |
| $t = T/4$ | $0$ (centro) | $-\omega A$ (massima in modulo) | $0$ |
| $t = T/2$ | $-A$ (altro estremo) | $0$ | $+\omega^2 A$ (massima, verso il centro) |
| $t = 3T/4$ | $0$ (centro) | $+\omega A$ (massima) | $0$ |
| $t = T$ | $+A$ | $0$ | $-\omega^2 A$ |

Quindi:
- agli **estremi** ($x = \pm A$) il corpo è fermo per un istante (inverte il moto) e l'accelerazione è massima in modulo;
- al **centro** ($x = 0$) la velocità è massima e l'accelerazione è nulla;
- l'accelerazione è **sempre diretta verso il centro**, cioè opposta allo spostamento: per questo il corpo, allontanandosi, rallenta, e avvicinandosi accelera.

::: esempio
**Membrana di un altoparlante (esercizio della dispensa).** La membrana vibra di moto armonico semplice alla frequenza $\nu = 440\,\mathrm{Hz}$ con spostamento massimo $A = 0{,}75\,\mathrm{mm} = 7{,}5 \cdot 10^{-4}\,\mathrm m$. Trovare pulsazione, velocità massima e accelerazione massima.

1. Pulsazione: $\omega = 2\pi\nu = 2\pi \cdot 440 \approx 2{,}76 \cdot 10^3\,\mathrm{rad/s}$.
2. Velocità massima: $v_{max} = \omega A = 2{,}76 \cdot 10^3 \cdot 7{,}5 \cdot 10^{-4} \approx 2{,}07\,\mathrm{m/s}$.
3. Accelerazione massima: $a_{max} = \omega^2 A = (2{,}76 \cdot 10^3)^2 \cdot 7{,}5 \cdot 10^{-4} \approx 7{,}64 \cdot 10^6 \cdot 7{,}5 \cdot 10^{-4} \approx 5{,}7 \cdot 10^3\,\mathrm{m/s^2}$.

L'accelerazione è quasi 600 volte quella di gravità: anche spostamenti minuscoli, se rapidissimi, comportano accelerazioni enormi, perché $a_{max}$ cresce col **quadrato** della frequenza.
:::

::: esempio
**Due punti che si incrociano (esercizio della dispensa).** Due punti si muovono di moto armonico con uguale ampiezza $A$ e uguale frequenza su due rette parallele vicinissime. Si incrociano ogni volta che il loro spostamento vale $A/2$. Qual è la differenza di fase?

1. Leggi orarie: $x_1 = A\cos(\omega t + \varphi_1)$, $x_2 = A\cos(\omega t + \varphi_2)$.
2. All'incrocio $x_1 = x_2 = A/2$, quindi $\cos(\text{fase}_1) = \cos(\text{fase}_2) = 1/2$. Il coseno vale $1/2$ per la fase $+\pi/3$ oppure $-\pi/3$.
3. Se le fasi fossero uguali i punti si muoverebbero insieme e non si "incrocerebbero": nell'incrocio uno va in un verso e l'altro nel verso opposto, cioè $v_1 = -v_2$. Poiché $v = -\omega A\sin(\text{fase})$, serve $\sin(\text{fase}_1) = -\sin(\text{fase}_2)$: una fase è $+\pi/3$ e l'altra $-\pi/3$.
4. Differenza di fase: $\pi/3 - (-\pi/3) = 2\pi/3$, cioè $120°$.
:::

::: esempio
**Oggetto appoggiato su un pistone (esercizio della dispensa).** Un oggetto è appoggiato su un pistone che oscilla verticalmente di moto armonico. (a) Con periodo $T = 1\,\mathrm s$, per quale ampiezza l'oggetto si stacca? (b) Con ampiezza $5\,\mathrm{cm}$, qual è la frequenza massima perché l'oggetto resti appoggiato?

Ragionamento: l'oggetto è tenuto giù solo dal peso. Nel punto più alto il pistone accelera verso il basso con $a_{max} = \omega^2 A$. Se questa accelerazione supera $g$, il pistone "scende più in fretta" di quanto l'oggetto possa cadere e l'oggetto si stacca. Il limite è $\omega^2 A = g$.

(a) $\omega = 2\pi/T = 2\pi\,\mathrm{rad/s}$, $\omega^2 \approx 39{,}5\,\mathrm{s^{-2}}$. $A = g/\omega^2 = 9{,}8/39{,}5 \approx 0{,}25\,\mathrm m$. Per ampiezze maggiori di circa $25\,\mathrm{cm}$ l'oggetto si stacca.

(b) $\omega = \sqrt{g/A} = \sqrt{9{,}8/0{,}05} = \sqrt{196} = 14\,\mathrm{rad/s}$, quindi $\nu = \omega/(2\pi) = 14/6{,}28 \approx 2{,}2\,\mathrm{Hz}$. A frequenze maggiori l'oggetto perde il contatto.
:::

## Quale forza produce un moto armonico
Partiamo dall'equazione del moto armonico e la moltiplichiamo per la massa $m$ del corpo. Per il secondo principio della dinamica $m\,a$ è la risultante delle forze:

$$F = m\,\frac{d^2x}{dt^2} = -m\omega^2 x$$

Leggiamo questa relazione al contrario: **qualsiasi situazione fisica in cui la risultante delle forze sia direttamente proporzionale allo spostamento del punto dalla sua posizione di riferimento, ma di verso opposto, produce un moto armonico semplice**. Questa forza si chiama **forza di richiamo** (o forza elastica in senso lato):

$$F = -c\,x$$

dove:
- $F$ = risultante delle forze sul corpo, lungo l'asse del moto (N)
- $c$ = costante positiva (N/m); per una molla è la costante elastica $k$
- $x$ = spostamento dalla posizione di equilibrio (m), con l'origine dell'asse proprio nella posizione di equilibrio

Dimostrazione passo per passo:
1. Secondo principio: $m\,\dfrac{d^2x}{dt^2} = -c\,x$.
2. Divido per $m$: $\dfrac{d^2x}{dt^2} = -\dfrac{c}{m}\,x$.
3. Pongo $\omega^2 = c/m$ (si può fare perché $c/m > 0$): ottengo $\dfrac{d^2x}{dt^2} = -\omega^2 x$, l'equazione del moto armonico.
4. Quindi il moto è $x(t) = A\cos(\omega t + \varphi)$ con

$$\omega = \sqrt{\frac{c}{m}} \qquad T = 2\pi\sqrt{\frac{m}{c}}$$

Verifica per sostituzione: se $x = A\cos(\omega t + \varphi)$, allora $\ddot x = -\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x = -(c/m)\,x$, e moltiplicando per $m$ si riottiene $m\ddot x = -cx$. Funziona per **qualunque** $A$ e $\varphi$.

Significato fisico:
- il segno meno è essenziale: la forza punta **sempre verso la posizione di equilibrio**. Se il corpo è a destra la forza tira a sinistra e viceversa. Senza il segno meno (forza concorde con lo spostamento) il corpo si allontanerebbe sempre di più: non ci sarebbe oscillazione;
- la proporzionalità diretta (forza lineare in $x$) è ciò che rende il periodo **indipendente dall'ampiezza**: se raddoppio lo spostamento raddoppia la forza, il corpo percorre il doppio della strada ma con il doppio dell'accelerazione, e impiega lo stesso tempo (si parla di **isocronismo**);
- più la forza è "rigida" ($c$ grande) o più il corpo è leggero ($m$ piccola), più l'oscillazione è rapida.

## L'oscillatore armonico
Si chiama **oscillatore armonico** un sistema fisico che, spostato dalla sua posizione di equilibrio **stabile**, è soggetto a una forza di richiamo del tipo $F = -cx$ e quindi oscilla attorno all'equilibrio con legge sinusoidale, con pulsazione $\omega = \sqrt{c/m}$ che dipende solo dalle caratteristiche del sistema (non dall'ampiezza né da come lo si mette in moto). Ampiezza e fase invece dipendono da come lo si mette in moto.

Le oscillazioni avvengono sempre attorno a una posizione di **equilibrio stabile** (in cui la forza è nulla e, se ci si sposta, compare una forza che riporta indietro). Si vedrà nella lezione successiva che quasi ogni equilibrio stabile, per piccoli spostamenti, si comporta come un oscillatore armonico: per questo il modello è così importante.

I due oscillatori armonici studiati nelle dispense sono:

| Sistema | Forza di richiamo | Pulsazione | Periodo | Da cosa dipende il periodo |
|---|---|---|---|---|
| Massa–molla (piano orizzontale liscio) | $F = -kx$ (legge di Hooke) | $\omega = \sqrt{k/m}$ | $T = 2\pi\sqrt{m/k}$ | massa del corpo e rigidità della molla |
| Pendolo semplice (piccole oscillazioni) | $F_t \approx -\dfrac{mg}{l}\,s$ | $\omega = \sqrt{g/l}$ | $T = 2\pi\sqrt{l/g}$ | lunghezza del filo e $g$ (non dalla massa) |

dove:
- $k$ = costante elastica della molla (N/m)
- $m$ = massa del corpo (kg)
- $l$ = lunghezza del filo (m)
- $g$ = accelerazione di gravità, $9{,}8\,\mathrm{m/s^2}$
- $s$ = spostamento misurato lungo l'arco (m)

In entrambi i casi il periodo **non dipende dall'ampiezza** (per il pendolo solo per piccole oscillazioni).

### L'energia dell'oscillatore armonico
Consideriamo la massa–molla. L'energia cinetica è $K = \tfrac12 mv^2$ e l'energia potenziale elastica (vedi lezioni 17–20) è $U = \tfrac12 kx^2$. Sostituiamo la legge oraria:

$$K = \tfrac12 m\,\omega^2 A^2\sin^2(\omega t + \varphi) \qquad U = \tfrac12 k A^2\cos^2(\omega t + \varphi)$$

Poiché $\omega^2 = k/m$, si ha $m\omega^2 = k$, quindi $K = \tfrac12 kA^2\sin^2(\ldots)$. Sommando e usando $\sin^2 + \cos^2 = 1$:

$$E = K + U = \tfrac12 kA^2 = \tfrac12 m\,v_{max}^2$$

dove $E$ = energia meccanica (J), $k$ = costante elastica (N/m), $A$ = ampiezza (m), $v_{max} = \omega A$ (m/s).

L'energia meccanica è **costante** (in assenza di attriti) e proporzionale al **quadrato dell'ampiezza**. Durante il moto l'energia passa continuamente da una forma all'altra: agli estremi è tutta potenziale ($v = 0$), al centro è tutta cinetica ($x = 0$).

## Il pendolo semplice
Il pendolo semplice è un punto materiale di massa $m$ appeso a un filo **inestensibile e di massa trascurabile** di lunghezza $l$, fissato a un punto. In basso, fermo, il pendolo è in **equilibrio stabile**: il peso è bilanciato dalla tensione del filo. Se lo spostiamo di un angolo e lo lasciamo, oscilla lungo un **arco di circonferenza** di raggio $l$.

### Le forze e l'equazione del moto
Sul punto agiscono due forze:
- il **peso** $m\vec g$, verticale verso il basso;
- la **tensione** $\vec\tau$ del filo, diretta lungo il filo verso il punto di sospensione.

Descriviamo la posizione con l'angolo $\theta$ che il filo forma con la verticale (positivo da un lato, negativo dall'altro). Scomponiamo il peso:
- componente lungo il filo (radiale): $mg\cos\theta$, che insieme alla tensione fornisce la forza centripeta;
- componente **tangente** alla traiettoria: $-mg\sin\theta$. Il segno meno indica che punta sempre verso la posizione più bassa, cioè opposta allo spostamento angolare.

La tensione è perpendicolare alla traiettoria, quindi non ha componente tangente. Il secondo principio lungo la tangente dà:

$$m\,a_t = -mg\sin\theta$$

Lo spostamento lungo l'arco è $s = l\theta$, quindi l'accelerazione tangenziale è $a_t = \dfrac{d^2s}{dt^2} = l\,\dfrac{d^2\theta}{dt^2}$. Sostituendo e semplificando la massa:

$$l\,\frac{d^2\theta}{dt^2} = -g\sin\theta \qquad\Rightarrow\qquad \frac{d^2\theta}{dt^2} = -\frac{g}{l}\sin\theta$$

Questa equazione **non** è ancora quella del moto armonico, perché a destra c'è $\sin\theta$ e non $\theta$.

### L'approssimazione delle piccole oscillazioni
Per angoli piccoli, misurati **in radianti**, il seno è quasi uguale all'angolo stesso: $\sin\theta \approx \theta$ (è il primo termine dello sviluppo in serie di Taylor, $\sin\theta = \theta - \theta^3/6 + \ldots$).

| $\theta$ (rad) | $\theta$ (gradi) | $\sin\theta$ | errore |
|---|---|---|---|
| $0{,}10$ | $5{,}7°$ | $0{,}0998$ | $0{,}2\,\%$ |
| $0{,}20$ | $11{,}5°$ | $0{,}1987$ | $0{,}7\,\%$ |
| $0{,}50$ | $28{,}6°$ | $0{,}4794$ | $4\,\%$ |

Con questa approssimazione:

$$\frac{d^2\theta}{dt^2} = -\frac{g}{l}\,\theta$$

È l'equazione del moto armonico per la variabile $\theta$, con $\omega^2 = g/l$. Quindi:

$$\theta(t) = \theta_0\cos(\omega t + \varphi) \qquad \omega = \sqrt{\frac{g}{l}} \qquad T = 2\pi\sqrt{\frac{l}{g}}$$

dove:
- $\theta$ = angolo del filo con la verticale (rad)
- $\theta_0$ = ampiezza angolare, cioè l'angolo massimo (rad)
- $l$ = lunghezza del filo (m)
- $g$ = accelerazione di gravità (m/s²)

### Da cosa dipende il periodo del pendolo
- **Non dipende dalla massa.** La massa si è semplificata: la forza di richiamo (il peso) è proporzionale alla massa, ma lo è anche l'inerzia; i due effetti si compensano esattamente. Due pendoli con lo stesso filo e masse diverse oscillano con lo stesso periodo.
- **Non dipende dall'ampiezza** (per piccole oscillazioni): è l'isocronismo scoperto da Galileo. Per ampiezze grandi il periodo cresce un po'.
- **Dipende dalla lunghezza del filo**, come $\sqrt l$: quadruplicando $l$ il periodo raddoppia.
- **Dipende da $g$**, come $1/\sqrt g$: sulla Luna ($g$ circa sei volte più piccola) lo stesso pendolo oscilla circa $2{,}4$ volte più lentamente.

### Velocità massima e tensione del filo
La velocità lungo l'arco è $v = l\,\dfrac{d\theta}{dt} = -l\,\omega\,\theta_0\sin(\omega t + \varphi)$. È massima nel punto più basso ($\theta = 0$) e vale $v_{max} = \omega\,l\,\theta_0 = \theta_0\sqrt{gl}$. Agli estremi ($\theta = \pm\theta_0$) il pendolo è fermo.

La tensione del filo non è costante. Lungo il filo la risultante deve fornire la forza centripeta: $\tau - mg\cos\theta = mv^2/l$. Nel punto più basso $\cos\theta = 1$ e $v = v_{max}$:

$$\tau_{max} = mg + \frac{m v_{max}^2}{l} = mg + mg\,\theta_0^2 = mg\,(1 + \theta_0^2)$$

La tensione è quindi **massima nel punto più basso**, dove è maggiore del peso. Agli estremi, dove $v = 0$, vale $mg\cos\theta_0$, minore del peso.

### Stima di $g$ con il pendolo
Poiché il periodo dipende solo da $l$ e da $g$, il pendolo è uno strumento semplice per **misurare l'accelerazione di gravità**. Invertendo la formula del periodo:

$$g = \frac{4\pi^2 l}{T^2}$$

Si misura la lunghezza del filo e si cronometra un certo numero di oscillazioni (per esempio 10), dividendo poi il tempo totale per il numero di oscillazioni: così l'errore del cronometraggio pesa meno.

::: esempio
**Misura di $g$.** Un pendolo con filo di $l = 0{,}80\,\mathrm m$ compie 10 oscillazioni in $17{,}94\,\mathrm s$.
1. Periodo: $T = 17{,}94/10 = 1{,}794\,\mathrm s$.
2. $T^2 = 3{,}218\,\mathrm{s^2}$.
3. $g = 4\pi^2 \cdot 0{,}80/3{,}218 = 31{,}58/3{,}218 \approx 9{,}81\,\mathrm{m/s^2}$.
:::

::: esempio
**Pendolo con legge oraria data (esercizio della dispensa).** Una massa di $60{,}0\,\mathrm g$ è appesa a un filo; l'angolo segue la legge $\theta = (0{,}0800\,\mathrm{rad})\cos[(4{,}43\,\mathrm{rad/s})\,t + \varphi]$. Trovare la lunghezza del filo e la velocità massima della massa.

1. Dalla legge si leggono $\theta_0 = 0{,}0800\,\mathrm{rad}$ e $\omega = 4{,}43\,\mathrm{rad/s}$.
2. Da $\omega^2 = g/l$: $l = g/\omega^2 = 9{,}8/4{,}43^2 = 9{,}8/19{,}62 \approx 0{,}50\,\mathrm m$.
3. La velocità massima si ha nel punto più basso: $v_{max} = \omega\,l\,\theta_0 = 4{,}43 \cdot 0{,}50 \cdot 0{,}0800 \approx 0{,}18\,\mathrm{m/s}$.

La massa ($60\,\mathrm g$) non serve: il moto del pendolo non dipende da essa.
:::

::: esempio
**Quadruplicare il filo.** Un pendolo ha periodo $T$. Se si quadruplica la lunghezza del filo, $T' = 2\pi\sqrt{4l/g} = 2 \cdot 2\pi\sqrt{l/g} = 2T$: il periodo raddoppia. Se invece si cambia la massa appesa, il periodo non cambia.
:::

## Oscillazioni smorzate
Nella realtà c'è sempre qualche forma di attrito: l'ampiezza delle oscillazioni diminuisce col tempo e alla fine il corpo si ferma. Il caso studiato nelle dispense è quello di un **attrito viscoso**, cioè una forza proporzionale alla velocità e opposta a essa (come la resistenza di un fluido a bassa velocità):

$$F_v = -b\,v = -b\,\frac{dx}{dt}$$

dove $b$ = coefficiente di attrito viscoso (kg/s).

### L'equazione del moto
Aggiungiamo questa forza alla forza elastica nel secondo principio:

$$m\frac{d^2x}{dt^2} = -kx - b\frac{dx}{dt} \qquad\Rightarrow\qquad \frac{d^2x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = 0$$

dove (dividendo per $m$):
- $\omega_0 = \sqrt{k/m}$ = pulsazione propria del sistema senza attrito (rad/s)
- $\gamma = \dfrac{b}{2m}$ = coefficiente di smorzamento (1/s)

### Le soluzioni: tre casi
Si cercano soluzioni del tipo $x = e^{\lambda t}$. Sostituendo (ogni derivata porta giù un fattore $\lambda$) si ottiene l'equazione caratteristica:

$$\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0 \qquad\Rightarrow\qquad \lambda = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$$

Il comportamento dipende dal segno del discriminante $\Delta = \gamma^2 - \omega_0^2$:

| Caso | Condizione | Cosa succede |
|---|---|---|
| Smorzamento forte (sovrasmorzato) | $\Delta > 0$, cioè $\gamma > \omega_0$ | somma di due esponenziali decrescenti: il corpo torna lentamente all'equilibrio **senza oscillare** |
| Smorzamento critico | $\Delta = 0$, cioè $\gamma = \omega_0$ | ancora un andamento esponenziale decrescente senza oscillazioni; è il ritorno all'equilibrio **più rapido** possibile senza oscillare |
| Smorzamento debole (sottosmorzato) | $\Delta < 0$, cioè $\gamma < \omega_0$ | **oscillazioni** visibili la cui ampiezza diminuisce esponenzialmente |

Nel caso di smorzamento debole la soluzione è:

$$x(t) = A\,e^{-t/\tau}\cos(\omega' t + \varphi) \qquad \tau = \frac{1}{\gamma} = \frac{2m}{b} \qquad \omega' = \sqrt{\omega_0^2 - \gamma^2}$$

dove:
- $A\,e^{-t/\tau}$ = ampiezza che decresce nel tempo (m)
- $\tau$ = **costante di tempo** (s): dopo un tempo $\tau$ l'ampiezza si è ridotta di un fattore $e \approx 2{,}72$
- $\omega'$ = pulsazione delle oscillazioni smorzate (rad/s), un po' minore di $\omega_0$

Interpretazione: un oscillatore smorzato si comporta come un oscillatore armonico la cui ampiezza è **modulata da un termine esponenziale decrescente**, che attenua le oscillazioni col passare del tempo. Le oscillazioni si spengono tanto più in fretta quanto **minore** è la costante di tempo $\tau$, cioè quanto maggiore è l'attrito $b$ rispetto alla massa.

::: esempio
Un corpo di $m = 0{,}5\,\mathrm{kg}$ su una molla con $k = 50\,\mathrm{N/m}$ è immerso in un fluido con $b = 0{,}2\,\mathrm{kg/s}$.
1. $\omega_0 = \sqrt{50/0{,}5} = 10\,\mathrm{rad/s}$.
2. $\gamma = b/(2m) = 0{,}2/1 = 0{,}2\,\mathrm{s^{-1}}$: molto minore di $\omega_0$, smorzamento debole.
3. $\tau = 1/\gamma = 5\,\mathrm s$; $\omega' = \sqrt{100 - 0{,}04} \approx 10\,\mathrm{rad/s}$.
4. Dopo $5\,\mathrm s$ l'ampiezza è ridotta a $1/e \approx 37\,\%$; dopo $15\,\mathrm s$ ($3\tau$) a circa il $5\,\%$.
:::

**Attrito radente.** Se invece il corpo striscia su un piano scabro (attrito costante in modulo), l'ampiezza non cala esponenzialmente ma **linearmente**: diminuisce di una quantità fissa a ogni mezza oscillazione, finché il corpo si ferma. Il caso è svolto nella lezione 16.

## Oscillazioni forzate e risonanza
Per mantenere un sistema in oscillazione nonostante l'attrito bisogna fornirgli energia dall'esterno con una **forza periodica**, detta forzante:

$$F_{ext}(t) = F_0\sin(\omega t)$$

dove:
- $F_0$ = ampiezza della forza esterna (N)
- $\omega$ = pulsazione della forza esterna (rad/s), che in generale è **diversa** dalla pulsazione propria $\omega_0$ del sistema

L'equazione del moto diventa:

$$m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F_0\sin(\omega t)$$

### Il regime
All'inizio il moto è complicato: si sovrappongono l'oscillazione "propria" del sistema (a pulsazione $\omega'$) e quella imposta dalla forzante. Ma l'oscillazione propria è smorzata e dopo qualche costante di tempo si spegne. **A regime** resta un'oscillazione armonica alla pulsazione della **forzante** (non a quella propria):

$$x(t) = A\sin(\omega t - \delta)$$

con ampiezza:

$$A(\omega) = \frac{F_0}{m}\,\frac{1}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\gamma^2\omega^2}} \qquad \gamma = \frac{b}{2m}$$

dove:
- $A$ = ampiezza delle oscillazioni forzate a regime (m)
- $\omega_0 = \sqrt{k/m}$ = pulsazione propria (naturale) del sistema (rad/s)
- $\gamma$ = coefficiente di smorzamento (1/s)
- $\delta$ = sfasamento tra forzante e risposta (rad), con $\tan\delta = \dfrac{2\gamma\omega}{\omega_0^2 - \omega^2}$

### Dove l'ampiezza è massima
L'ampiezza è massima quando il denominatore è minimo. Poniamo $u = \omega^2$ e studiamo $f(u) = (\omega_0^2 - u)^2 + 4\gamma^2 u$. Deriviamo rispetto a $u$ e poniamo la derivata uguale a zero:

$$f'(u) = -2(\omega_0^2 - u) + 4\gamma^2 = 0 \qquad\Rightarrow\qquad u = \omega_0^2 - 2\gamma^2$$

Quindi, se lo smorzamento è basso ($\omega_0^2 > 2\gamma^2$), l'ampiezza ha un massimo per:

$$\omega_{max} = \sqrt{\omega_0^2 - 2\gamma^2}$$

Se lo smorzamento è molto piccolo, $\omega_{max}$ è praticamente uguale a $\omega_0$. Al limite di smorzamento nullo ($\gamma \to 0$) e con $\omega = \omega_0$ il denominatore si annulla e l'ampiezza **tenderebbe all'infinito**.

### La risonanza
Si chiama **risonanza** la condizione in cui la frequenza della forzante è vicina alla frequenza **naturale** (propria) del sistema: l'ampiezza delle oscillazioni forzate diventa massima, e tanto più grande quanto più piccolo è lo smorzamento.

Intuizione: è come spingere un'altalena. Se spingi sempre al momento giusto (con lo stesso ritmo con cui l'altalena oscilla da sola), ogni spinta aggiunge energia e le oscillazioni crescono. Se spingi a un ritmo diverso, a volte spingi mentre l'altalena viene verso di te e le togli energia: le spinte si compensano e l'ampiezza resta piccola.

::: esempio
**Soldati su un ponte.** Soldati che marciano a passo cadenzato su un ponte esercitano una forza periodica. Se il ritmo del passo è vicino alla frequenza naturale di oscillazione del ponte, le oscillazioni diventano percepibili e sempre più ampie, fino a mettere a rischio la struttura. Per questo, attraversando un ponte, si ordina di "rompere il passo". Lo stesso principio spiega il bicchiere che si rompe con una nota acuta della stessa frequenza propria.
:::

::: esempio
Un sistema massa–molla ha $m = 1\,\mathrm{kg}$, $k = 400\,\mathrm{N/m}$, $b = 2\,\mathrm{kg/s}$.
1. $\omega_0 = \sqrt{400/1} = 20\,\mathrm{rad/s}$; $\gamma = 2/(2 \cdot 1) = 1\,\mathrm{s^{-1}}$.
2. Pulsazione di massima ampiezza: $\omega_{max} = \sqrt{400 - 2} \approx 19{,}95\,\mathrm{rad/s}$, praticamente $\omega_0$.
3. Con $F_0 = 1\,\mathrm N$, a $\omega = \omega_0$: $A = \dfrac{1}{1}\cdot\dfrac{1}{\sqrt{0 + 4 \cdot 1 \cdot 400}} = 1/40 = 2{,}5\,\mathrm{cm}$. Lontano dalla risonanza, a $\omega = 10\,\mathrm{rad/s}$: $A = 1/\sqrt{300^2 + 400} \approx 1/300{,}7 \approx 0{,}33\,\mathrm{cm}$, quasi otto volte meno.
:::

::: attenzione
Errori tipici:
- invertire $k$ e $m$: la pulsazione della molla è $\sqrt{k/m}$, il periodo è $2\pi\sqrt{m/k}$. Più massa significa oscillazione **più lenta**;
- dire che il periodo del pendolo dipende dalla massa: non è vero, dipende solo da $l$ e $g$;
- usare gli angoli in gradi nell'approssimazione $\sin\theta \approx \theta$: vale solo in radianti;
- dire che all'estremo dell'oscillazione l'accelerazione è nulla: lì è nulla la **velocità**, l'accelerazione è massima;
- confondere la pulsazione della forzante con quella propria: a regime il sistema oscilla alla pulsazione della **forzante**.
:::

::: esame
Le domande aperte del paniere su questa lezione chiedono:
- **quale condizione deve soddisfare una forza per produrre un moto armonico semplice**: la risultante deve essere una forza di richiamo $F = -cx$, proporzionale allo spostamento dalla posizione di equilibrio e di verso opposto; allora $m\ddot x = -cx$, cioè $\ddot x = -\omega^2 x$ con $\omega = \sqrt{c/m}$, la cui soluzione è $x = A\cos(\omega t + \varphi)$;
- **descrivere l'oscillatore armonico**: sistema che oscilla attorno a un equilibrio stabile sotto una forza di richiamo lineare; legge oraria, velocità e accelerazione sfasate di un quarto di periodo, periodo indipendente dall'ampiezza, energia $\tfrac12 kA^2$ costante; esempi molla ($T = 2\pi\sqrt{m/k}$) e pendolo;
- **discutere il moto del pendolo e da cosa dipende il periodo**: forze (peso e tensione), componente tangente $-mg\sin\theta$, approssimazione $\sin\theta \approx \theta$ per piccoli angoli, $T = 2\pi\sqrt{l/g}$: dipende da lunghezza e $g$, non da massa e ampiezza;
- **definire periodo, frequenza e pulsazione** con le unità e le relazioni $T = 1/\nu = 2\pi/\omega$;
- **la risonanza nell'oscillatore forzato**: forzante periodica, a regime oscillazione alla pulsazione della forzante con ampiezza che dipende da $\omega$; massimo per $\omega$ vicina alla pulsazione propria ($\omega = \sqrt{\omega_0^2 - 2\gamma^2}$), che tende all'infinito senza smorzamento; esempio del ponte.
:::

::: sintesi
- Proiezione del moto circolare uniforme su un diametro = moto armonico semplice.
- $x = A\cos(\omega t + \varphi)$; $v = -\omega A\sin(\ldots)$, $v_{max} = \omega A$; $a = -\omega^2 x$, $a_{max} = \omega^2 A$.
- $T = 2\pi/\omega$, $\nu = 1/T$, $\omega = 2\pi\nu$.
- Velocità massima al centro, accelerazione massima (e velocità nulla) agli estremi; sfasamenti di un quarto di periodo.
- Condizione dinamica: $F = -cx$ ⇒ $\ddot x = -\omega^2 x$, $\omega = \sqrt{c/m}$; periodo indipendente dall'ampiezza.
- Molla: $T = 2\pi\sqrt{m/k}$; pendolo (piccoli angoli): $T = 2\pi\sqrt{l/g}$, indipendente dalla massa; $g = 4\pi^2 l/T^2$.
- Energia dell'oscillatore: $E = \tfrac12 kA^2$, costante senza attriti.
- Smorzato (attrito viscoso): ampiezza $\propto e^{-t/\tau}$, $\tau = 2m/b$; smorzamento critico o forte: nessuna oscillazione.
- Forzato: a regime oscilla alla pulsazione della forzante; risonanza per $\omega \approx \omega_0$ (massimo a $\sqrt{\omega_0^2 - 2\gamma^2}$).
:::

=== 16 dispense
SLIDES: 10, 15, 16
# Lezione 16 — Equilibrio del punto, legge di Hooke, molla e pendolo

## Di cosa parla questa lezione
Nella lezione 15 abbiamo visto che una forza di richiamo $F = -cx$ produce un moto armonico attorno a una posizione di equilibrio. Ora studiamo con calma:
- che cosa vuol dire che un punto materiale è **in equilibrio** e qual è la condizione matematica;
- come si classificano i punti di equilibrio (**stabile, instabile, indifferente**);
- la **legge di Hooke**, cioè il comportamento delle molle, e come si combinano più molle (**serie e parallelo**);
- la **molla oscillante** (orizzontale e verticale) e la sua equazione del moto, l'energia elastica;
- il **pendolo semplice** come secondo sistema oscillante;
- la molla su un piano **con attrito**.

## La condizione di equilibrio del punto materiale
Un punto materiale (un corpo le cui dimensioni si possono trascurare) è **in equilibrio** quando la **risultante** di tutte le forze applicate, cioè la loro somma vettoriale, è il vettore nullo:

$$\vec R = \sum_i \vec F_i = \vec F_1 + \vec F_2 + \ldots + \vec F_N = \vec 0$$

Poiché un vettore è nullo se e solo se sono nulle tutte le sue componenti, la condizione equivale a tre equazioni scalari:

$$\sum F_x = 0 \qquad \sum F_y = 0 \qquad \sum F_z = 0$$

dove:
- $\vec F_i$ = ciascuna delle forze applicate al punto (N)
- $\vec R$ = risultante (N)
- $F_x, F_y, F_z$ = componenti cartesiane delle forze (N)

### Perché basta la risultante
Il secondo principio della dinamica dice che $\vec R = m\vec a$. Le forze, essendo vettori, si sommano: ciascuna contribuisce all'accelerazione indipendentemente dalle altre, e conta solo la loro somma. Se $\vec R = \vec 0$, allora $\vec a = \vec 0$: la velocità non cambia. Quindi (primo principio) il punto:
- se era fermo, **resta fermo**: si parla di **equilibrio statico**;
- se si muoveva, continua a muoversi di **moto rettilineo uniforme**.

Leggendo al contrario: se in un riferimento inerziale un corpo si muove a **velocità costante**, la risultante delle forze su di esso è nulla. Non è detto che non agiscano forze: agiscono forze che si bilanciano (per esempio la spinta del motore di un'auto in autostrada bilancia attriti e resistenza dell'aria).

### Le forze ci sono, è la somma a essere nulla
È un punto su cui le domande insistono. Equilibrio **non** significa:
- che sul punto non agiscono forze;
- che tutte le forze hanno lo stesso modulo o la stessa direzione.

Significa solo che la loro **somma vettoriale** è zero. Esempi:
- un libro su un tavolo: il peso (verso il basso) è bilanciato dalla **reazione vincolare** del tavolo (verso l'alto). Il vincolo è un dispositivo che, reagendo, applica al corpo una forza uguale e opposta a quella che lo spingerebbe a muoversi;
- un oggetto appeso a un filo: la tensione del filo bilancia il peso;
- tre forze di uguale modulo a $120°$ l'una dall'altra (come i tre lati di un triangolo equilatero messi in fila): la somma è nulla anche se nessuna delle tre è nulla.

### Punto materiale e corpo esteso
Per un **punto materiale** la condizione di equilibrio riguarda solo le forze. Per un **corpo esteso** (rigido) serve anche che sia nulla la somma dei **momenti** delle forze, altrimenti il corpo può ruotare pur non traslando: questo si vedrà nelle lezioni sul corpo rigido. In un punto tutte le forze sono applicate nello stesso punto, quindi i momenti non hanno senso.

::: esempio
**Il palloncino fermo in aria.** Un palloncino è fermo a mezz'aria. Agiscono su di esso il peso (verso il basso), la spinta di Archimede dell'aria (verso l'alto) ed eventualmente la tensione del filo. Il palloncino è fermo, quindi la risultante è nulla: le forze ci sono, ma si bilanciano. Non è una situazione "impossibile" e non è vero che non agisce nessuna forza.
:::

::: esempio
**Tre forze, due uguali e opposte.** Su un punto agiscono $\vec F_1$, $\vec F_2 = -\vec F_1$ e $\vec F_3$. La risultante è $\vec F_1 - \vec F_1 + \vec F_3 = \vec F_3$. Il moto del punto è determinato soltanto dalla terza forza: accelera nella direzione e nel verso di $\vec F_3$ con $\vec a = \vec F_3/m$.

**Forze tutte con stessa direzione e verso.** Se tutte le forze puntano nello stesso verso, i moduli si sommano e la risultante ha quella stessa direzione e quel verso.
:::

## Equilibrio stabile, instabile, indifferente
Una posizione in cui la risultante è nulla è un **punto di equilibrio**. Per capire di che tipo è, si sposta di poco il corpo e si guarda che cosa succede:

- **equilibrio stabile**: se il corpo viene spostato di poco, nasce una forza che tende a **riavvicinarlo** al punto di equilibrio; il suo moto resta confinato in un intorno del punto (oscilla attorno a esso);
- **equilibrio instabile**: se il corpo viene spostato di poco, nasce una forza che lo **allontana** sempre di più, indefinitamente;
- **equilibrio indifferente**: se il corpo viene spostato di poco, si trova in una **nuova posizione di equilibrio** e resta lì (non nasce alcuna forza).

| Tipo | Cosa succede se lo sposti di poco | Esempi |
|---|---|---|
| Stabile | torna verso il punto e oscilla attorno a esso | pallina sul fondo di una scodella; pendolo fermo in basso; massa ferma alla lunghezza di riposo della molla |
| Instabile | si allontana sempre di più | matita in piedi sulla punta; pallina in cima a una cupola; pendolo rigido capovolto in alto |
| Indifferente | resta in equilibrio nella nuova posizione | biglia su un tavolo piano orizzontale; ruota libera sul suo asse |

Collegamento con l'energia (vedi lezione 20): in un campo di forze conservative l'equilibrio stabile corrisponde a un **minimo** dell'energia potenziale, quello instabile a un **massimo**, quello indifferente a un tratto in cui l'energia potenziale è **costante**. La biglia sul tavolo piano ha la stessa energia potenziale in ogni punto del tavolo: indifferente.

Le **oscillazioni armoniche** avvengono sempre attorno a un equilibrio **stabile**: è proprio la forza che "riporta indietro" a produrre l'oscillazione. I due sistemi oscillanti principali (molla e pendolo) sono entrambi spostamenti attorno a un equilibrio stabile.

::: attenzione
"Equilibrio iperstabile" non è uno dei tre tipi di equilibrio di un punto: i tipi sono solo stabile, instabile e indifferente. (In scienza delle costruzioni "iperstatico" indica una struttura con più vincoli del necessario: è un altro concetto.)
:::

## La legge di Hooke
Consideriamo un blocco appoggiato su un piano orizzontale senza attrito, agganciato a una molla il cui altro estremo è fissato a una parete. La molla ha una sua **lunghezza di riposo**: in quella posizione non esercita forze e il sistema è in equilibrio.

Se la molla viene **deformata** — compressa (accorciata) oppure allungata (dilatata) — esercita sul corpo una forza di richiamo verso la posizione di riposo, detta **forza elastica**. La forza agisce su entrambi gli estremi della molla: sul blocco da un lato, sulla parete dall'altro (dove è bilanciata dalla reazione vincolare della parete).

Fissiamo l'origine dell'asse $x$ nella posizione di riposo, così lo spostamento dalla posizione di riposo $x - x_0$ coincide con la coordinata $x$. Sperimentalmente si trova la **legge di Hooke**:

$$F = -k\,x$$

dove:
- $F$ = forza elastica esercitata dalla molla sul corpo (N)
- $k$ = **costante elastica** della molla (N/m): misura la rigidità della molla e dipende **solo dalle caratteristiche della molla** (materiale, spessore del filo, numero e diametro delle spire)
- $x$ = **deformazione**: allungamento ($x > 0$) o compressione ($x < 0$) rispetto alla lunghezza di riposo (m)

Significato della formula:
- **modulo** proporzionale alla deformazione: $|F| = k|x|$. Doppia deformazione, doppia forza;
- **verso** sempre opposto alla deformazione (segno meno): se allunghi la molla, tira indietro; se la comprimi, spinge in fuori;
- la costante $k$ si legge come "quanti newton servono per deformare la molla di un metro". Una molla con $k = 2000\,\mathrm{N/m}$ si allunga di $1\,\mathrm m$ sotto $2000\,\mathrm N$, di $1\,\mathrm{cm}$ sotto $20\,\mathrm N$.

### Formule inverse
Lavorando con i moduli:

$$F = kx \qquad x = \frac{F}{k} \qquad k = \frac{F}{x}$$

### Limiti di validità
- La legge di Hooke vale per **piccole deformazioni**, entro il **limite di elasticità**: tolta la forza, la molla torna alla sua lunghezza di riposo. Oltre questo limite la deformazione diventa permanente (la molla si "sforma") e la proporzionalità non vale più; ancora oltre la molla si rompe.
- La costante $k$ dice **quanto** la molla si deforma sotto una forza, ma **non** dice quale carico massimo la molla può sopportare: per saperlo servirebbe conoscere il limite elastico.
- È l'**allungamento** (la deformazione) a essere proporzionale alla forza, **non la lunghezza totale** della molla. Una molla lunga $20\,\mathrm{cm}$ a riposo che si allunga di $2\,\mathrm{cm}$ con $1\,\mathrm{kg}$ si allungherà di $4\,\mathrm{cm}$ con $2\,\mathrm{kg}$: la lunghezza passa da $22$ a $24\,\mathrm{cm}$, non raddoppia.

::: esempio
**Calcoli con la legge di Hooke.**
- Molla con $k = 1000\,\mathrm{N/m}$ compressa di $10\,\mathrm{cm} = 0{,}10\,\mathrm m$: $F = 1000 \cdot 0{,}10 = 100\,\mathrm N$ (una forza, in newton, non in joule).
- Molla con $k = 5000\,\mathrm{N/m}$ compressa di $30\,\mathrm{cm}$: $F = 5000 \cdot 0{,}30 = 1500\,\mathrm N$.
- Molla che esercita $80\,\mathrm N$ quando è compressa di $30\,\mathrm{cm}$: $k = F/x = 80/0{,}30 \approx 267\,\mathrm{N/m}$.
- Una forza di $12\,\mathrm N$ allunga una molla di $3{,}0\,\mathrm{cm}$. Con $60\,\mathrm N$ (cinque volte tanto) l'allungamento è cinque volte tanto: $15\,\mathrm{cm}$. In alternativa: $k = 12/0{,}030 = 400\,\mathrm{N/m}$ e $x = 60/400 = 0{,}15\,\mathrm m$.
- Molla con $k = 2000\,\mathrm{N/m}$: con $2000\,\mathrm N$ si allunga di $1\,\mathrm m$; con $200\,\mathrm N$ di $0{,}1\,\mathrm m = 1\,\mathrm{dm}$; con $20\,\mathrm N$ di $1\,\mathrm{cm}$. Non si può invece dire, dal solo $k$, se "può sopportare $2000\,\mathrm N$".
:::

## Molla verticale con un peso
Appendiamo un corpo di massa $m$ a una molla verticale appesa al soffitto (oppure lo appoggiamo sopra una molla verticale). La molla si allunga (o si comprime) finché la forza elastica bilancia il peso. All'equilibrio:

$$k\,x_{eq} = mg \qquad\Rightarrow\qquad x_{eq} = \frac{mg}{k} \qquad k = \frac{mg}{x_{eq}}$$

dove:
- $m$ = massa appesa o appoggiata (kg)
- $g$ = accelerazione di gravità, $9{,}8\,\mathrm{m/s^2}$
- $x_{eq}$ = allungamento (o compressione) all'equilibrio (m)

Attenzione all'unità: nella formula entra il **peso** $mg$ (in newton), non la massa.

::: esempio
**Peso su una molla.** Un corpo di $1\,\mathrm{kg}$ è appoggiato su una molla verticale con $k = 100\,\mathrm{N/m}$. Il peso è $mg = 9{,}8\,\mathrm N$. Compressione: $x = 9{,}8/100 = 0{,}098\,\mathrm m \approx 10\,\mathrm{cm}$.
:::

::: esempio
**Ricavare $k$ togliendo un peso.** Una molla appesa al soffitto regge un corpo di $0{,}54\,\mathrm{kg}$. Togliendo il corpo, la molla si accorcia di $0{,}44\,\mathrm m$: quindi $0{,}44\,\mathrm m$ era l'allungamento dovuto al peso. $k = mg/x = 0{,}54 \cdot 9{,}8/0{,}44 = 5{,}29/0{,}44 \approx 12\,\mathrm{N/m}$.
:::

::: esempio
**Uno e poi due chili.** Appendendo prima $1\,\mathrm{kg}$ e poi $2\,\mathrm{kg}$ alla stessa molla, il peso raddoppia, quindi **raddoppia l'allungamento** (non la lunghezza totale della molla, e non quadruplica nulla).
:::

### La molla verticale che oscilla
Se il corpo appeso viene spostato ancora e lasciato andare, oscilla. Vediamo perché lo fa **con lo stesso periodo** della molla orizzontale (esercizio della dispensa).

1. Prendiamo l'asse $y$ verticale verso l'alto, con origine alla lunghezza di riposo della molla libera. Sul corpo agiscono la forza elastica $-ky$ e il peso $-mg$: $\;m\,\ddot y = -ky - mg$.
2. La nuova posizione di equilibrio è dove la risultante si annulla: $-ky_0 - mg = 0$, cioè $y_0 = -mg/k$ (sotto la lunghezza di riposo).
3. Introduciamo la variabile $Y = y - y_0$, cioè lo spostamento dalla **nuova** posizione di equilibrio. Allora $y = Y + y_0$ e $-ky - mg = -kY - ky_0 - mg = -kY$ (perché $-ky_0 - mg = 0$). Inoltre $\ddot y = \ddot Y$ (una costante non cambia le derivate).
4. L'equazione diventa $m\ddot Y = -kY$: è l'equazione della molla orizzontale, nella variabile $Y$.

Conclusione: il peso non cambia né la pulsazione né il periodo ($\omega = \sqrt{k/m}$); sposta soltanto il **centro** dell'oscillazione, che non è più la lunghezza di riposo ma la nuova posizione di equilibrio.

::: esempio
**Molla verticale (esercizio della dispensa).** Una molla verticale si allunga di $9{,}6\,\mathrm{cm}$ quando le si appende un corpo di $1{,}3\,\mathrm{kg}$. Il blocco viene poi tirato giù di altri $5{,}0\,\mathrm{cm}$ e lasciato da fermo. Trovare $k$, periodo, frequenza, ampiezza e velocità massima.

(a) $k = mg/x = 1{,}3 \cdot 9{,}8/0{,}096 = 12{,}74/0{,}096 \approx 132{,}7\,\mathrm{N/m}$.

(b) $\omega = \sqrt{k/m} = \sqrt{132{,}7/1{,}3} = \sqrt{102{,}1} \approx 10{,}1\,\mathrm{rad/s}$; $T = 2\pi/\omega \approx 0{,}62\,\mathrm s$.

(c) $\nu = 1/T \approx 1{,}6\,\mathrm{Hz}$.

(d) Parte da ferma a $5{,}0\,\mathrm{cm}$ dalla nuova posizione di equilibrio: $A = 0{,}050\,\mathrm m$. La legge oraria è $Y(t) = -0{,}050\cos(\omega t)$.

(e) $v_{max} = \omega A = 10{,}1 \cdot 0{,}050 \approx 0{,}51\,\mathrm{m/s}$, raggiunta quando il corpo ripassa per la posizione di equilibrio.
:::

## Molle in serie e in parallelo
Due molle collegate possono essere sostituite da **una sola molla equivalente**, che sotto la stessa forza ha lo stesso allungamento complessivo.

### Molle in serie
Due molle sono **in serie** quando sono attaccate una dopo l'altra (il soffitto regge la prima, la prima regge la seconda, la seconda regge il corpo).
1. Ogni molla è in equilibrio, quindi trasmette **la stessa forza** $F$: la seconda regge il peso, la prima regge la seconda. Le due forze elastiche sono uguali, gli allungamenti diversi.
2. Allungamenti: $x_1 = F/k_1$, $x_2 = F/k_2$.
3. L'allungamento totale è la somma: $x = x_1 + x_2 = F\left(\dfrac{1}{k_1} + \dfrac{1}{k_2}\right)$.
4. La molla equivalente deve dare $x = F/k$. Confrontando:

$$\frac{1}{k_{serie}} = \frac{1}{k_1} + \frac{1}{k_2} \qquad\Rightarrow\qquad k_{serie} = \frac{k_1 k_2}{k_1 + k_2}$$

### Molle in parallelo
Due molle sono **in parallelo** quando sono attaccate una accanto all'altra, entrambe al soffitto e entrambe al corpo, in modo che si allunghino della stessa quantità.
1. **Stesso allungamento** $x$ per entrambe.
2. Le forze si sommano: $F = k_1 x + k_2 x = (k_1 + k_2)\,x$.
3. La molla equivalente deve dare $F = kx$:

$$k_{parallelo} = k_1 + k_2$$

| Collegamento | Grandezza comune | Grandezza che si somma | Costante equivalente |
|---|---|---|---|
| Serie | la forza | gli allungamenti | $\dfrac{1}{k} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$ |
| Parallelo | l'allungamento | le forze | $k = k_1 + k_2$ |

In serie la molla equivalente è **più morbida** di ciascuna delle due ($k$ minore della più piccola). In parallelo è **più rigida** di ciascuna (le molle "si aiutano").

::: esempio
**Due molle in serie (esercizio della dispensa).** Un cubetto di $m = 6{,}5\,\mathrm{kg}$ è appeso al soffitto tramite due molle in serie con $k_1 = 370\,\mathrm{N/m}$ e $k_2 = 520\,\mathrm{N/m}$.
1. Peso: $mg = 6{,}5 \cdot 9{,}8 = 63{,}7\,\mathrm N$, che è la forza in entrambe le molle.
2. $x_1 = 63{,}7/370 \approx 0{,}172\,\mathrm m$; $x_2 = 63{,}7/520 \approx 0{,}123\,\mathrm m$; totale $\approx 0{,}295\,\mathrm m$.
3. Molla equivalente: $k = \dfrac{370 \cdot 520}{370 + 520} = \dfrac{192\,400}{890} \approx 216\,\mathrm{N/m}$. Verifica: $63{,}7/216 \approx 0{,}295\,\mathrm m$.
:::

::: esempio
**Due molle in parallelo (esercizio della dispensa).** Un cubetto di $m = 3{,}5\,\mathrm{kg}$ è appeso con due molle, $k_1 = 250\,\mathrm{N/m}$ e $k_2 = 320\,\mathrm{N/m}$, entrambe attaccate al soffitto e al cubo; la faccia superiore del cubo resta orizzontale, quindi le molle si allungano della stessa quantità $\Delta x$.
1. Equilibrio: $k_1\Delta x + k_2\Delta x = mg$, cioè $(250 + 320)\,\Delta x = 3{,}5 \cdot 9{,}8 = 34{,}3\,\mathrm N$.
2. $\Delta x = 34{,}3/570 \approx 0{,}060\,\mathrm m = 6{,}0\,\mathrm{cm}$.
3. Molla equivalente: $k = 570\,\mathrm{N/m}$. Le singole forze: $250 \cdot 0{,}060 = 15\,\mathrm N$ e $320 \cdot 0{,}060 \approx 19\,\mathrm N$, che sommate danno il peso.
:::

::: esempio
**Blocco tra due molle orizzontali (esercizio della dispensa).** Un blocco di $m = 0{,}4\,\mathrm{kg}$ su un piano liscio oscilla collegato a due molle in serie con $k_1 = 20\,\mathrm{N/m}$ e $k_2 = 30\,\mathrm{N/m}$. Nel punto di attacco tra le due molle esse si scambiano tensioni uguali e opposte, quindi la forza è la stessa: è un collegamento in serie.
1. $K = \dfrac{20 \cdot 30}{20 + 30} = 12\,\mathrm{N/m}$.
2. $T = 2\pi\sqrt{m/K} = 2\pi\sqrt{0{,}4/12} = 2\pi \cdot 0{,}183 \approx 1{,}15\,\mathrm s$.
:::

## La molla oscillante: equazione del moto
Un blocco di massa $m$ è attaccato a una molla di costante $k$ su un piano orizzontale **senza attrito**. Lo spostiamo di $A$ dalla posizione di riposo e lo lasciamo andare da fermo. Le forze sono:
- peso e reazione del piano, verticali, che si bilanciano;
- forza elastica $-kx$, orizzontale: è la **risultante**.

Il ragionamento passo per passo:
1. Secondo principio lungo $x$: $\;m\,\dfrac{d^2x}{dt^2} = -kx$.
2. Divido per $m$: $\;\dfrac{d^2x}{dt^2} = -\dfrac{k}{m}\,x$.
3. Pongo $\omega^2 = k/m$: $\;\dfrac{d^2x}{dt^2} = -\omega^2 x$. È l'equazione del moto armonico (lezione 15).
4. La soluzione generale è $x(t) = A\cos(\omega t + \varphi)$. Partendo da ferma in $x = A$ (condizioni iniziali $x(0) = A$, $v(0) = 0$) si ha $\varphi = 0$: $\;x(t) = A\cos(\omega t)$.

$$\omega = \sqrt{\frac{k}{m}} \qquad T = 2\pi\sqrt{\frac{m}{k}} \qquad \nu = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

dove:
- $\omega$ = pulsazione (rad/s)
- $T$ = periodo (s)
- $\nu$ = frequenza (Hz)
- $k$ = costante elastica (N/m), $m$ = massa (kg)

Il moto è una oscillazione armonica tra $-A$ e $+A$ attorno alla posizione di riposo (equilibrio stabile). Conseguenze:
- **più la massa è grande, più il moto è lento** (più inerzia): $T \propto \sqrt m$. Quadruplicando la massa il periodo raddoppia;
- **più la molla è rigida, più il moto è rapido**: $T \propto 1/\sqrt k$;
- il periodo **non dipende dall'ampiezza** $A$: tirando di più, il blocco percorre più strada ma va più veloce;
- velocità massima $v_{max} = \omega A$ nella posizione di riposo; accelerazione massima $\omega^2 A = kA/m$ agli estremi.

::: esempio
**Periodo di una molla.** $m = 200\,\mathrm g = 0{,}2\,\mathrm{kg}$, $k = 20\,\mathrm{N/m}$.
1. $m/k = 0{,}2/20 = 0{,}01\,\mathrm{s^2}$; $\sqrt{0{,}01} = 0{,}1\,\mathrm s$.
2. $T = 2\pi \cdot 0{,}1 \approx 0{,}628\,\mathrm s$.

Chi dimentica di convertire i grammi in chilogrammi ottiene un risultato sbagliato di un fattore $\sqrt{1000}$.
:::

## Energia elastica e compressione massima
Una molla deformata di $x$ immagazzina **energia potenziale elastica** (ricavata nelle lezioni 17 e 19 dal lavoro della forza elastica):

$$U_{el} = \tfrac12 k x^2$$

dove $U_{el}$ = energia elastica (J), $k$ = costante elastica (N/m), $x$ = deformazione (m).

Durante l'oscillazione senza attrito l'energia meccanica $\tfrac12 mv^2 + \tfrac12 kx^2$ resta costante e vale $\tfrac12 kA^2$. Quindi, se un blocco con velocità $v$ incontra una molla (o riceve la velocità $v$ trovandosi nella posizione di riposo), si ferma quando tutta l'energia cinetica è diventata elastica:

$$\tfrac12 mv^2 = \tfrac12 kx_{max}^2 \qquad\Rightarrow\qquad x_{max} = v\sqrt{\frac{m}{k}} = \frac{v}{\omega}$$

::: esempio
**Massima deformazione.** Un blocco di $4\,\mathrm{kg}$ attaccato a una molla con $k = 400\,\mathrm{N/m}$, fermo nella posizione di equilibrio, riceve una velocità di $4\,\mathrm{m/s}$.
1. Energia cinetica iniziale: $\tfrac12 \cdot 4 \cdot 16 = 32\,\mathrm J$.
2. Alla massima deformazione è tutta elastica: $\tfrac12 \cdot 400 \cdot x^2 = 32$, cioè $x^2 = 0{,}16\,\mathrm{m^2}$.
3. $x = 0{,}4\,\mathrm m = 40\,\mathrm{cm}$. Con la formula diretta: $x = 4\sqrt{4/400} = 4 \cdot 0{,}1 = 0{,}4\,\mathrm m$.
:::

## Il pendolo semplice
Il secondo sistema oscillante è il pendolo semplice (lezione 15 per la derivazione completa): un punto di massa $m$ appeso a un filo inestensibile di lunghezza $l$. Per piccole oscillazioni la componente tangente del peso, $-mg\sin\theta \approx -mg\theta$, è una forza di richiamo proporzionale allo spostamento angolare, e il moto è armonico:

$$\frac{d^2\theta}{dt^2} = -\frac{g}{l}\,\theta \qquad \omega = \sqrt{\frac{g}{l}} \qquad T = 2\pi\sqrt{\frac{l}{g}}$$

dove $\theta$ = angolo con la verticale (rad), $l$ = lunghezza del filo (m), $g$ = accelerazione di gravità (m/s²).

La massa **non compare**: il periodo dipende solo dalla lunghezza del filo e da $g$. Per questo il pendolo si usa per stimare $g$ con $g = 4\pi^2 l/T^2$.

::: esempio
**Cambiare la massa del pendolo.** Un corpo di $4\,\mathrm{kg}$ appeso a un filo forma un pendolo con periodo $10\,\mathrm s$. Sostituendolo con un corpo di $1\,\mathrm{kg}$ sullo stesso filo, $l$ e $g$ non cambiano, quindi il periodo **resta $10\,\mathrm s$**. È diverso dalla molla, dove $T = 2\pi\sqrt{m/k}$ dipende dalla massa.
:::

| | Molla | Pendolo |
|---|---|---|
| Forza di richiamo | $-kx$ (elastica) | $-mg\sin\theta \approx -mg\theta$ (componente del peso) |
| Periodo | $2\pi\sqrt{m/k}$ | $2\pi\sqrt{l/g}$ |
| Dipende dalla massa? | sì, $T \propto \sqrt m$ | no |
| Dipende dall'ampiezza? | no | no, per piccoli angoli |

## La molla con attrito radente
Se il blocco attaccato alla molla striscia su un piano **scabro**, agisce anche la forza di attrito dinamico, di modulo costante $\mu_d mg$ e sempre opposta alla velocità. Vediamo che cosa succede (caso trattato nella dispensa come "molla con attrito").

1. Il blocco parte da fermo in $x = A$ e si muove verso sinistra. L'attrito punta verso destra: $m\ddot x = -kx + \mu_d mg = -k\left(x - \dfrac{\mu_d mg}{k}\right)$.
2. Chiamiamo $d = \mu_d mg/k$. L'equazione è quella di un moto armonico attorno al punto $x = +d$ invece che attorno a $0$: in questa mezza oscillazione il centro è spostato di $d$ verso il punto di partenza.
3. Il blocco parte a distanza $A - d$ dal centro, quindi arriva (fermo) a distanza $A - d$ dall'altra parte del centro: in $x = d - (A - d) = -(A - 2d)$.
4. Nella mezza oscillazione successiva (verso destra) l'attrito si inverte, il centro si sposta in $-d$, e l'ampiezza cala di nuovo di $2d$.

Quindi:
- il periodo resta $2\pi\sqrt{m/k}$ (ogni mezza oscillazione è un pezzo di moto armonico con la stessa $\omega$);
- l'ampiezza diminuisce di una quantità **fissa** $2d = 2\mu_d mg/k$ a ogni mezza oscillazione, cioè $4\mu_d mg/k$ a ogni periodo: un calo **lineare**, non esponenziale come con l'attrito viscoso;
- il blocco si ferma definitivamente quando, in un punto di inversione, la forza elastica non riesce più a vincere l'attrito statico, cioè quando $k|x| \le \mu_s mg$.

::: esempio
Blocco di $1\,\mathrm{kg}$, molla con $k = 100\,\mathrm{N/m}$, $\mu_d = 0{,}1$, ampiezza iniziale $20\,\mathrm{cm}$.
1. $d = \mu_d mg/k = 0{,}1 \cdot 1 \cdot 9{,}8/100 = 0{,}0098\,\mathrm m \approx 1\,\mathrm{cm}$.
2. A ogni mezza oscillazione l'ampiezza cala di $2d \approx 2\,\mathrm{cm}$: $20 \to 18 \to 16 \to \ldots\,\mathrm{cm}$.
3. Dopo circa 10 mezze oscillazioni (5 periodi, $T = 2\pi\sqrt{0{,}01} \approx 0{,}63\,\mathrm s$, quindi circa $3\,\mathrm s$) l'ampiezza scende sotto $1\,\mathrm{cm}$ e il blocco si ferma.
:::

## Forze costanti combinate
Se su un corpo agiscono solo forze **costanti**, anche la risultante è costante, e quindi lo è l'accelerazione $\vec a = \vec R/m$. Se il corpo **parte da fermo**, si muove di moto **rettilineo uniformemente accelerato** lungo la direzione della risultante. (Se invece avesse una velocità iniziale non parallela alla risultante, il moto sarebbe parabolico, come per un proiettile.)

::: esempio
Un corpo di $1\,\mathrm{kg}$, fermo, è soggetto al peso ($9{,}8\,\mathrm N$ verso il basso) e a una forza orizzontale costante di $9{,}8\,\mathrm N$.
1. Risultante: componenti $(9{,}8;\,-9{,}8)\,\mathrm N$, modulo $9{,}8\sqrt2 \approx 13{,}9\,\mathrm N$, inclinata di $45°$ sotto l'orizzontale (le due componenti sono uguali).
2. Accelerazione costante: $13{,}9\,\mathrm{m/s^2}$ a $45°$.
3. Partendo da fermo, il corpo si muove in linea retta a $45°$ con moto uniformemente accelerato (non uniforme, perché la risultante non è nulla; non parabolico, perché la velocità iniziale è nulla).
:::

::: attenzione
Errori tipici:
- dire che in equilibrio "non agiscono forze" o "le forze sono nulle": è nulla la **risultante**;
- aggiungere i momenti nella condizione di equilibrio di un **punto** materiale: servono solo per i corpi estesi;
- pensare che tre o più forze non nulle diano per forza una risultante non nulla: possono bilanciarsi;
- confondere allungamento e lunghezza della molla: è l'allungamento a essere proporzionale alla forza;
- scrivere la forza elastica in joule: è una forza, in newton; in joule si misura l'energia $\tfrac12 kx^2$;
- dimenticare le conversioni ($\mathrm g \to \mathrm{kg}$, $\mathrm{cm} \to \mathrm m$) nelle formule della molla.
:::

::: esame
Le domande aperte del paniere su questa lezione chiedono:
- **equilibrio stabile, instabile, indifferente**: definire i tre casi guardando cosa succede spostando di poco il corpo (torna indietro / si allontana / resta nella nuova posizione) con un esempio per ciascuno, e il legame con minimi e massimi dell'energia potenziale;
- **la condizione di equilibrio di un oggetto puntiforme**: $\sum\vec F = \vec 0$, cioè le tre componenti della risultante nulle; spiegare che le forze possono essere non nulle, che il punto resta fermo o in moto rettilineo uniforme (primo principio), e che i momenti non servono per un punto;
- **la legge di Hooke e il comportamento delle molle**: $F = -kx$, significato di $k$ e del segno meno, limite di elasticità, molla verticale ($kx = mg$), molle in serie e in parallelo;
- **la molla oscillante e la sua equazione del moto**: $m\ddot x = -kx$, quindi $\ddot x = -\omega^2 x$ con $\omega = \sqrt{k/m}$, soluzione $x = A\cos(\omega t + \varphi)$, periodo $2\pi\sqrt{m/k}$ indipendente dall'ampiezza, energia $\tfrac12 kA^2$.

Nelle chiuse: calcoli diretti con $F = kx$, $kx = mg$, $T = 2\pi\sqrt{m/k}$, $x_{max} = v\sqrt{m/k}$; il pendolo il cui periodo non dipende dalla massa; il tipo di equilibrio della biglia sul tavolo piano.
:::

::: sintesi
- Equilibrio del punto: $\sum\vec F = \vec 0$ (risultante nulla, non forze nulle); fermo o moto rettilineo uniforme.
- Stabile: torna indietro; instabile: si allontana; indifferente: resta dove lo metti.
- Hooke: $F = -kx$; l'allungamento è proporzionale alla forza; vale entro il limite elastico.
- Molla verticale all'equilibrio: $kx = mg$; oscillando, stesso periodo attorno alla nuova posizione di equilibrio.
- Serie: $1/k = 1/k_1 + 1/k_2$ (stessa forza); parallelo: $k = k_1 + k_2$ (stesso allungamento).
- Molla oscillante: $m\ddot x = -kx$, $\omega = \sqrt{k/m}$, $T = 2\pi\sqrt{m/k}$.
- Energia elastica $U = \tfrac12 kx^2$; compressione massima $x = v\sqrt{m/k}$.
- Pendolo: $T = 2\pi\sqrt{l/g}$, non dipende dalla massa.
- Molla con attrito radente: l'ampiezza cala di $2\mu_d mg/k$ a ogni mezza oscillazione.
:::

=== 17 dispense
SLIDES: 17
# Lezione 17 — Lavoro ed energia cinetica

## Di cosa parla questa lezione
Finora abbiamo studiato il moto con le leggi di Newton: forze → accelerazione → velocità e posizione. Esiste un secondo modo di affrontare i problemi di meccanica, spesso molto più rapido: il **bilancio dell'energia**. Questa lezione introduce i due concetti di base:
- il **lavoro** compiuto da una forza, cioè il modo in cui una forza trasferisce energia a un corpo;
- l'**energia cinetica**, l'energia che un corpo possiede perché si muove;

e il legame tra i due, il **teorema dell'energia cinetica** (o delle forze vive). Poi calcoliamo il lavoro di alcune forze importanti: peso, tensione del pendolo, forza elastica, attrito. Le lezioni 18–20 completano il discorso con potenza, forze conservative, energia potenziale e conservazione dell'energia.

## L'energia
L'energia è una delle grandezze fisiche più importanti, anche nella vita quotidiana e nella società, ma è difficile darne una definizione che non sia **operativa** (cioè che non dica semplicemente come si misura). In meccanica:
- l'energia è una **proprietà di un corpo associata al suo stato** in un certo istante: al suo stato di moto (velocità) o semplicemente alla sua posizione. "Stato" ha qui il significato del linguaggio comune: la condizione in cui si trova il corpo;
- è una grandezza **scalare** (un numero con unità, senza direzione);
- uno dei principi fondamentali della fisica è la sua **conservazione**: l'energia non si crea e non si distrugge, ma **si trasforma** da una forma all'altra o **viene trasferita** da un sistema a un altro nelle interazioni;
- i processi con cui un sistema scambia energia con l'ambiente sono vari; uno dei principali è il **lavoro** (un altro, visto in termodinamica, è il calore).

L'energia esiste in molte forme, ciascuna con la propria espressione:

| Forma di energia | Legata a | Esempio |
|---|---|---|
| Cinetica | moto (velocità) | auto in corsa, $\tfrac12 mv^2$ |
| Potenziale gravitazionale | posizione (quota) | acqua in un bacino in quota, $mgh$ |
| Potenziale elastica | deformazione | molla compressa, $\tfrac12 kx^2$ |
| Termica (interna) | agitazione delle molecole | corpo caldo |
| Chimica | legami tra atomi | combustibile, cibo, batteria |
| Elettrica | cariche e correnti | rete elettrica |
| Radiante | onde elettromagnetiche | luce del Sole |
| Nucleare | legami nel nucleo | centrale nucleare |

La somma di energia cinetica ed energia potenziale si chiama **energia meccanica**.

## Il lavoro elementare
Consideriamo un punto materiale che si muove lungo una traiettoria qualsiasi, soggetto a una forza $\vec F$. Si chiama **lavoro elementare** compiuto dalla forza durante uno spostamento infinitesimo $d\vec s$ lungo la traiettoria il prodotto scalare:

$$dL = \vec F \cdot d\vec s = |\vec F|\,|d\vec s|\cos\theta$$

dove:
- $dL$ = lavoro elementare (J)
- $\vec F$ = forza applicata al punto (N)
- $d\vec s$ = spostamento infinitesimo, tangente alla traiettoria (m)
- $\theta$ = angolo compreso tra il vettore forza e il vettore spostamento

Dalla definizione:
- il lavoro è una grandezza **scalare** (è un prodotto scalare);
- le sue dimensioni sono $[M L^2 T^{-2}]$ (forza per lunghezza: $[MLT^{-2}]\cdot[L]$);
- l'unità SI è il **joule** (J): $\;1\,\mathrm J = 1\,\mathrm N \cdot 1\,\mathrm m = 1\,\mathrm{kg\,m^2/s^2}$. Un joule è il lavoro di una forza di $1\,\mathrm N$ il cui punto di applicazione si sposta di $1\,\mathrm m$ nella direzione della forza.

### Conta solo la componente tangente
Poiché $F\cos\theta$ è la componente della forza lungo lo spostamento, è come se **soltanto la componente della forza tangente alla traiettoria compisse lavoro**. La componente perpendicolare cambia la direzione del moto ma non contribuisce al lavoro. Di conseguenza il segno del lavoro dipende dall'angolo:

| Angolo tra $\vec F$ e $d\vec s$ | $\cos\theta$ | Lavoro | Effetto |
|---|---|---|---|
| acuto, $0 \le \theta < 90°$ | $> 0$ | positivo (**motore**) | la forza favorisce il moto |
| retto, $\theta = 90°$ | $0$ | **nullo** | la forza non contribuisce |
| ottuso, $90° < \theta \le 180°$ | $< 0$ | negativo (**resistente**) | la forza si oppone al moto |

## Il lavoro lungo una traiettoria
Se il punto va dalla posizione A alla posizione B lungo la sua traiettoria, il lavoro totale è la **somma dei lavori elementari** su ciascun tratto infinitesimo. Al limite in cui i tratti $ds$ tendono a zero la somma diventa un integrale:

$$L_{AB} = \int_A^B \vec F \cdot d\vec s$$

È un **integrale di linea**, calcolato lungo la traiettoria da A a B, della forma differenziale $\vec F \cdot d\vec s$. In generale il risultato dipende dalla traiettoria seguita: vedremo che per alcune forze (le conservative) non è così.

### Forza costante e spostamento rettilineo
Se la forza è costante (in modulo, direzione e verso) e lo spostamento $\vec s$ è rettilineo, l'integrale si riduce a un prodotto:

$$L = \vec F \cdot \vec s = F\,s\cos\theta = F_s\,s$$

dove $F_s = F\cos\theta$ è la componente della forza lungo lo spostamento (N) e $s$ il modulo dello spostamento (m). In un grafico che riporta la componente $F_s$ in funzione della posizione, il lavoro è l'**area del rettangolo** di base $s$ e altezza $F_s$.

### Forza variabile: l'area sotto la curva
Se la forza (lungo l'asse $x$) varia con la posizione, $F(x)$, il lavoro tra $x_i$ e $x_f$ è l'**area della regione di piano sottesa alla curva** $F(x)$ tra le due posizioni:

$$L = \int_{x_i}^{x_f} F(x)\,dx$$

Il perché: si divide l'intervallo $x_f - x_i$ in tanti intervallini $\Delta x$ così piccoli che in ciascuno la forza si possa considerare costante. In ciascun intervallino il lavoro è l'area di un rettangolino, $F\,\Delta x$. Il lavoro totale è la somma di questi lavori. Più intervallini si prendono, più la somma approssima l'area esatta: al limite diventa l'integrale. Le aree sotto l'asse $x$ (forza negativa) contano con il segno meno.

::: esempio
**Forza esponenziale (esercizio della dispensa).** Una forza lungo l'asse $x$ ha intensità $F(x) = 10\,e^{-x/2{,}0}\,\mathrm N$. Trovare il lavoro mentre l'oggetto va da $x = 0$ a $x = 2{,}0\,\mathrm m$.
1. $L = \displaystyle\int_0^{2} 10\,e^{-x/2}\,dx$.
2. Una primitiva di $e^{-x/2}$ è $-2\,e^{-x/2}$ (derivando: $-2 \cdot (-\tfrac12)e^{-x/2} = e^{-x/2}$).
3. $L = 10\,\big[-2\,e^{-x/2}\big]_0^2 = 10\,(-2e^{-1} + 2e^{0}) = 20\,(1 - e^{-1})$.
4. $e^{-1} \approx 0{,}368$, quindi $L = 20 \cdot 0{,}632 \approx 12{,}6\,\mathrm J$.
:::

### Il lavoro di più forze
Se sul punto agiscono più forze $\vec F_1, \vec F_2, \ldots, \vec F_N$ con risultante $\vec R = \sum\vec F_i$, per la proprietà distributiva del prodotto scalare e la linearità dell'integrale:

$$L_R = \int_A^B \vec R \cdot d\vec s = \int_A^B \vec F_1 \cdot d\vec s + \ldots + \int_A^B \vec F_N \cdot d\vec s = L_1 + L_2 + \ldots + L_N$$

Il **lavoro della risultante è uguale alla somma dei lavori delle singole forze**.

### Il calcolo del lavoro in generale
Nel caso più generale la forza ha componenti che dipendono dalla posizione: $\vec F = (F_x(x,y,z),\,F_y(x,y,z),\,F_z(x,y,z))$. Si parla allora di **campo di forze**; ci limitiamo a campi **stazionari**, che non cambiano nel tempo. Scrivendo $d\vec s = (dx, dy, dz)$:

$$L_{AB} = \int_A^B (F_x\,dx + F_y\,dy + F_z\,dz)$$

Per calcolarlo si descrive la traiettoria in funzione di un **unico parametro** $p$ (per esempio un angolo o il tempo): $x = x(p)$, $y = y(p)$, $z = z(p)$, con $p$ che va da $p_A$ a $p_B$. Allora $dx = \dfrac{dx}{dp}\,dp$ e così via, e l'integrale diventa un integrale ordinario in una variabile:

$$L_{AB} = \int_{p_A}^{p_B}\left(F_x\frac{dx}{dp} + F_y\frac{dy}{dp} + F_z\frac{dz}{dp}\right)dp$$

## Perché la forza centripeta non compie lavoro
Nel moto circolare (uniforme o no) la forza centripeta punta sempre verso il centro della circonferenza, mentre la velocità, e quindi lo spostamento elementare $d\vec s$, è sempre **tangente** alla circonferenza. Forza e spostamento sono **perpendicolari in ogni istante**, quindi $dL = F\,ds\cos 90° = 0$ in ogni tratto, e il lavoro è nullo su qualsiasi arco, non solo su un giro completo.

Conseguenza: la forza centripeta cambia la **direzione** della velocità ma non il suo **modulo**; e infatti, come vedremo con il teorema dell'energia cinetica, se il lavoro è nullo l'energia cinetica (e quindi il modulo della velocità) non cambia. Per lo stesso motivo **la tensione del filo di un pendolo non compie lavoro**: è sempre diretta lungo il filo, perpendicolare all'arco percorso.

::: esempio
**L'altalena nel punto più basso.** Una bambina si dondola sull'altalena, che percorre un arco di circonferenza centrato nel punto di sospensione. Nel punto più basso l'accelerazione centripeta punta verso il centro della traiettoria, cioè **verso l'alto**, verso il punto a cui sono fissate le catene. È fornita dalla differenza tra la tensione delle catene (verso l'alto) e il peso (verso il basso): $\tau - mg = mv^2/l$.
:::

## L'energia cinetica
Riprendiamo il lavoro elementare della **risultante** $\vec R$ ed esplicitiamo i termini cinematici, usando il secondo principio ($\vec R = m\vec a = m\,d\vec v/dt$) e la definizione di velocità ($\vec v = d\vec s/dt$, cioè $d\vec s = \vec v\,dt$):

1. $dL = \vec R \cdot d\vec s = m\,\dfrac{d\vec v}{dt}\cdot\vec v\,dt = m\,\vec v \cdot d\vec v$.
2. Poiché $\vec v \cdot \vec v = v^2$, differenziando: $d(v^2) = 2\,\vec v \cdot d\vec v$, cioè $\vec v \cdot d\vec v = v\,dv$. Quindi $dL = m\,v\,dv = d\!\left(\tfrac12 mv^2\right)$.
3. Integrando da A (velocità $v_A$) a B (velocità $v_B$):

$$L_{AB} = \int_{v_A}^{v_B} m\,v\,dv = \tfrac12 mv_B^2 - \tfrac12 mv_A^2$$

Compare naturalmente la grandezza $\tfrac12 mv^2$, che si definisce **energia cinetica** del punto materiale:

$$K = E_k = \tfrac12 m v^2$$

dove:
- $K$ (o $E_k$) = energia cinetica (J)
- $m$ = massa (kg)
- $v$ = modulo della velocità (m/s)

Ha le stesse dimensioni del lavoro e si misura in joule. È sempre **positiva o nulla** (nulla solo se il corpo è fermo) e non dipende dalla direzione della velocità, solo dal suo modulo.

### Energia cinetica e quantità di moto
La quantità di moto è $p = mv$. Poiché $v = p/m$:

$$K = \frac{p^2}{2m}$$

L'energia cinetica cresce con il **quadrato** della velocità, la quantità di moto in modo **lineare**. Se la velocità raddoppia, $p$ raddoppia ma $K$ quadruplica; se triplica, $p$ triplica e $K$ diventa nove volte tanto. In termini di variazioni relative, $\Delta K/K \approx 2\,\Delta v/v$ mentre $\Delta p/p = \Delta v/v$: quando la velocità aumenta, l'energia cinetica aumenta (in proporzione) **più** della quantità di moto. Nessuna delle due si "conserva" se la velocità cambia.

## Il teorema dell'energia cinetica (delle forze vive)
La relazione trovata sopra si chiama **teorema dell'energia cinetica** o **teorema delle forze vive** ("forza viva" era il vecchio nome di $mv^2$):

> Quando un punto materiale si muove lungo una traiettoria dal punto A al punto B, il lavoro compiuto dalla **risultante** delle forze agenti su di esso è uguale alla **variazione della sua energia cinetica**, cioè alla differenza tra l'energia cinetica finale (in B) e quella iniziale (in A).

$$L_{AB} = K_B - K_A = \tfrac12 mv_B^2 - \tfrac12 mv_A^2 = \Delta K$$

dove:
- $L_{AB}$ = lavoro totale, cioè della risultante = somma dei lavori di tutte le forze, tra A e B (J)
- $v_A$, $v_B$ = moduli delle velocità iniziale e finale (m/s)

Osservazioni importanti:
- vale per **qualsiasi forza**: costante o variabile, conservativa o no (attrito compreso), perché nella dimostrazione abbiamo usato solo il secondo principio;
- il lavoro da usare è quello di **tutte** le forze (della risultante), non di una sola;
- vale per un **punto materiale** in un **riferimento inerziale** (dove vale $\vec F = m\vec a$);
- lavoro totale **positivo** ⇒ l'energia cinetica aumenta (il corpo accelera); **negativo** ⇒ diminuisce (il corpo rallenta); **nullo** ⇒ il modulo della velocità non cambia.

### Energia come proprietà, lavoro come trasferimento
Notiamo la differenza di linguaggio: si parla di energia cinetica **posseduta** dal punto, come sua **proprietà intrinseca** legata al suo moto; si parla invece di lavoro **compiuto** (o scambiato) **dal** o **sul** punto. Il lavoro è un **processo di trasferimento** di energia: il teorema dice che l'energia cinetica del corpo cambia esattamente della quantità di energia che le forze gli trasferiscono.

### Verifica del teorema in un caso semplice
Verifichiamo il teorema con le leggi della dinamica (dalla dispensa). Una forza $F$ costante in modulo, direzione e verso è applicata a un punto di massa $m$, fermo nell'origine all'istante iniziale, e lo accelera lungo un tratto rettilineo di lunghezza $l$.
1. La forza è costante, quindi l'accelerazione $a = F/m$ è costante: moto uniformemente accelerato. Dalla cinematica, partendo da fermo: $v^2 = 2\,a\,l$.
2. Moltiplico entrambi i membri per $\tfrac12 m$: $\tfrac12 mv^2 = m\,a\,l$.
3. Ricordando che $F = ma$: $\tfrac12 mv^2 = F\,l$.
4. Il primo membro è l'energia cinetica finale (quella iniziale è nulla, perché parte da fermo); il secondo membro $F\,l$ è proprio il lavoro della forza, essendo il moto rettilineo con forza parallela allo spostamento. Il teorema è verificato.

::: esempio
**Variare la velocità.** Lavoro necessario per portare un corpo di $m = 5\,\mathrm{kg}$ da $4\,\mathrm{m/s}$ a $8\,\mathrm{m/s}$:
1. $K_A = \tfrac12 \cdot 5 \cdot 16 = 40\,\mathrm J$; $K_B = \tfrac12 \cdot 5 \cdot 64 = 160\,\mathrm J$.
2. $L = 160 - 40 = 120\,\mathrm J$.

Attenzione: non si può fare $\tfrac12 m(\Delta v)^2 = \tfrac12 \cdot 5 \cdot 16 = 40\,\mathrm J$, perché $v_B^2 - v_A^2 \ne (v_B - v_A)^2$.
:::

::: esempio
**Carrello trainato.** Un carrello di $2\,\mathrm{kg}$, fermo, è trainato per $10\,\mathrm m$ su un binario rettilineo senza attrito da una forza costante di $50\,\mathrm N$ parallela al binario.
1. Lavoro della forza: $L = 50 \cdot 10 = 500\,\mathrm J$. Peso e reazione del binario sono perpendicolari allo spostamento: lavoro nullo.
2. Teorema: $K_{fin} - 0 = 500\,\mathrm J$. L'energia cinetica finale è $500\,\mathrm J$ (un'energia: in joule).
3. Velocità finale: $v = \sqrt{2 \cdot 500/2} \approx 22{,}4\,\mathrm{m/s}$.
:::

## Il lavoro della forza peso
Calcoliamo il lavoro del peso per un corpo che va da un punto A a un punto B lungo una traiettoria **qualsiasi** in un piano verticale. Prendiamo l'asse $y$ verticale verso l'alto.
1. La forza è costante in modulo, direzione e verso: $\vec F = (0,\,-mg)$.
2. Lo spostamento elementare è $d\vec s = (dx,\,dy)$. Nel prodotto scalare l'unico termine non nullo è quello verticale: $dL = \vec F \cdot d\vec s = -mg\,dy$.
3. Integrando da $y_A$ a $y_B$:

$$L_{peso} = \int_{y_A}^{y_B}(-mg)\,dy = -mg\,(y_B - y_A) = mg\,(y_A - y_B)$$

dove $y_A$, $y_B$ = quote iniziale e finale (m), $g = 9{,}8\,\mathrm{m/s^2}$.

Conseguenze:
- il lavoro del peso dipende **solo dalle quote iniziale e finale**, non dalla traiettoria percorsa: è così perché la forza ha direzione fissa e modulo costante;
- se il punto finale è **più in basso** ($y_B < y_A$) lo spostamento ha una componente concorde con il peso: lavoro **positivo**;
- se il corpo **sale** il lavoro del peso è **negativo**: $L = -mg\,\Delta h$;
- per sollevare un corpo di $h$ **a velocità costante** bisogna applicare una forza uguale e opposta al peso, che compie il lavoro $+mgh$.

::: esempio
**Libro sul tavolo.** Un libro di $2\,\mathrm{kg}$ va dal pavimento a un tavolo alto $90\,\mathrm{cm}$. Il lavoro minimo da compiere (sollevandolo lentamente) è uguale e opposto a quello del peso:
$L = mgh = 2 \cdot 9{,}8 \cdot 0{,}90 \approx 17{,}6\,\mathrm J$. Il lavoro del peso è $-17{,}6\,\mathrm J$.
:::

## Il lavoro nel pendolo semplice
Nel pendolo agiscono il peso e la tensione del filo. La tensione è diretta in ogni istante perpendicolarmente allo spostamento, quindi **non compie lavoro**: resta solo il peso, e il caso si riduce al precedente.

Facciamo comunque il calcolo con la traiettoria parametrica, usando come unico parametro l'angolo $\theta$ con la verticale. Origine nel punto di sospensione, $y$ verso l'alto: la posizione è $x = l\sin\theta$, $y = -l\cos\theta$.
1. $dy = \dfrac{dy}{d\theta}\,d\theta = l\sin\theta\,d\theta$.
2. $dL = -mg\,dy = -mg\,l\sin\theta\,d\theta$.
3. Dalla posizione iniziale $\theta_0$ al punto più basso $\theta = 0$:

$$L = \int_{\theta_0}^{0} -mgl\sin\theta\,d\theta = mgl\,\big[\cos\theta\big]_{\theta_0}^{0} = mgl\,(1 - \cos\theta_0)$$

Verifica con il caso generale: $y_A = -l\cos\theta_0$, $y_B = -l$, quindi $mg(y_A - y_B) = mg(-l\cos\theta_0 + l) = mgl(1 - \cos\theta_0)$. Coincide. Infatti $l(1 - \cos\theta_0)$ è proprio il **dislivello** tra la posizione di partenza e il punto più basso.

### La velocità massima del pendolo
Dal punto più alto, dove il pendolo è fermo, al punto più basso, dove la velocità è massima, il teorema delle forze vive dà:

$$\tfrac12 mv_{max}^2 - 0 = mgl\,(1 - \cos\theta_0) \qquad\Rightarrow\qquad v_{max} = \sqrt{2gl\,(1 - \cos\theta_0)}$$

Questa relazione ha **validità generale**, per qualunque ampiezza. Per piccoli angoli si usa lo sviluppo in serie di Taylor del coseno, $\cos\theta_0 \approx 1 - \theta_0^2/2$, quindi $1 - \cos\theta_0 \approx \theta_0^2/2$ e:

$$v_{max} \approx \sqrt{gl\,\theta_0^2} = \theta_0\sqrt{gl} = \omega\,l\,\theta_0 \qquad \text{con } \omega = \sqrt{g/l}$$

che è esattamente il risultato trovato con le equazioni del moto armonico del pendolo (lezione 15): due metodi diversi danno lo stesso risultato.

::: esempio
Pendolo con filo di $1\,\mathrm m$ lasciato da fermo a $60°$: $1 - \cos 60° = 0{,}5$, quindi $v_{max} = \sqrt{2 \cdot 9{,}8 \cdot 1 \cdot 0{,}5} = \sqrt{9{,}8} \approx 3{,}1\,\mathrm{m/s}$.
:::

## Il lavoro della forza elastica
Calcoliamo il lavoro della forza elastica di una molla su una massa che passa dalla posizione $x_A$ alla posizione $x_B$ lungo l'asse della molla (asse $x$ con origine nella posizione di riposo). La forza non è costante, ma il problema è unidimensionale, quindi l'integrale è semplice:

$$L_{AB} = \int_{x_A}^{x_B}(-kx)\,dx = -k\left[\frac{x^2}{2}\right]_{x_A}^{x_B} = -\tfrac12 k\,(x_B^2 - x_A^2) = \tfrac12 kx_A^2 - \tfrac12 kx_B^2$$

dove $k$ = costante elastica (N/m), $x_A$, $x_B$ = deformazioni iniziale e finale (m).

- Il lavoro è **positivo** se $|x_A| > |x_B|$, cioè se lo spostamento **avvicina** la massa alla posizione di riposo (la molla "si scarica" spingendo il corpo).
- È **negativo** se la massa si allontana dalla posizione di riposo (la molla si carica).
- Anche qui il lavoro dipende **solo dalle posizioni iniziale e finale**.
- Graficamente: è l'area (con segno) del trapezio sotto la retta $F = -kx$.

::: esempio
Molla con $k = 200\,\mathrm{N/m}$. Il corpo passa da una compressione di $10\,\mathrm{cm}$ alla posizione di riposo: $L = \tfrac12 \cdot 200 \cdot 0{,}01 - 0 = 1\,\mathrm J$ (positivo). Se passa dalla posizione di riposo a un allungamento di $10\,\mathrm{cm}$: $L = 0 - 1 = -1\,\mathrm J$.
:::

## Il lavoro della forza di attrito
Calcoliamo infine il lavoro dell'attrito radente dinamico su un corpo che striscia su un piano, lungo una curva qualsiasi tra A e B. La forza di attrito ha modulo costante $F_a = \mu_d N$ ed è sempre **tangente** alla traiettoria e **opposta** allo spostamento ($\theta = 180°$, $\cos\theta = -1$):

$$L_{attr} = \int_A^B \vec F_a \cdot d\vec s = -F_a\int_A^B ds = -F_a\,\ell_{AB}$$

dove $\ell_{AB}$ = lunghezza effettiva della traiettoria lungo la curva (m).

In questo caso:
- il lavoro è **sempre negativo**;
- dipende dalla **traiettoria percorsa** (dalla sua lunghezza), e non soltanto dalle posizioni iniziale e finale come nei casi precedenti: un percorso più lungo dissipa di più;
- l'attrito porta quindi **sempre a una diminuzione dell'energia cinetica**, e quindi della velocità.

## Il pallonetto: che cosa succede nel punto più alto
Un pallone è calciato a pallonetto (moto parabolico, resistenza dell'aria trascurabile). Nel punto più alto della traiettoria:
- la **componente verticale** della velocità è nulla (il pallone smette di salire e comincia a scendere);
- la **componente orizzontale** è uguale a quella iniziale (nessuna forza orizzontale): la velocità non è nulla;
- l'accelerazione è sempre $g$, verso il basso;
- il pallone è in aria da **metà** del tempo totale di volo (la traiettoria è simmetrica, se atterra alla stessa quota da cui è partito).

Quindi l'energia cinetica nel punto più alto **non è zero**: vale $\tfrac12 mv_x^2$. Solo la parte di energia cinetica legata alla componente verticale, $\tfrac12 mv_{y0}^2$, si è trasformata in energia potenziale.

::: attenzione
Errori tipici:
- dire che nel punto più alto di un pallonetto **tutta** l'energia cinetica è diventata potenziale: vale solo per un lancio perfettamente verticale;
- usare nel teorema delle forze vive il lavoro di una sola forza invece di quello di tutte le forze;
- calcolare $\tfrac12 m(v_B - v_A)^2$ invece di $\tfrac12 m(v_B^2 - v_A^2)$;
- pensare che la forza centripeta non lavori "perché il corpo torna al punto di partenza" o "perché il moto è orizzontale": il motivo è che è **perpendicolare alla velocità in ogni istante**;
- esprimere lavoro ed energia in newton o in watt: si misurano in joule.
:::

::: esame
La domanda aperta del paniere su questa lezione chiede di **esporre il teorema delle forze vive**. Una risposta completa:
1. definizione di lavoro elementare $dL = \vec F \cdot d\vec s$ e di lavoro $L_{AB} = \int_A^B \vec F \cdot d\vec s$;
2. derivazione: $dL = m\,\vec a \cdot d\vec s = m\,\vec v \cdot d\vec v = d(\tfrac12 mv^2)$, quindi $L_{AB} = \tfrac12 mv_B^2 - \tfrac12 mv_A^2$;
3. enunciato: il lavoro della **risultante** di tutte le forze è uguale alla variazione dell'energia cinetica;
4. validità: qualsiasi forza (anche non conservativa), punto materiale, riferimento inerziale;
5. un esempio (verifica con forza costante: $Fl = \tfrac12 mv^2$).

Nelle chiuse: calcoli di $\Delta K$, lavoro del peso $mgh$, perché la forza centripeta non lavora, direzione dell'accelerazione centripeta nell'altalena, confronto tra crescita di $K$ e di $p$, punto più alto del pallonetto.
:::

::: sintesi
- Lavoro elementare $dL = \vec F \cdot d\vec s = F\,ds\cos\theta$; lavoro $L_{AB} = \int_A^B \vec F \cdot d\vec s$ (J).
- Forza costante: $L = Fs\cos\theta$; forza variabile: area sotto $F(x)$.
- Positivo se $\theta < 90°$, nullo se $\theta = 90°$, negativo se $\theta > 90°$; il lavoro della risultante è la somma dei lavori.
- Forza perpendicolare alla velocità (centripeta, tensione del pendolo): lavoro nullo.
- $K = \tfrac12 mv^2 = p^2/2m$: cresce col quadrato di $v$.
- Teorema delle forze vive: $L_{tot} = K_B - K_A$, per qualsiasi forza, contando tutte le forze.
- Peso: $L = mg(y_A - y_B)$; pendolo: $L = mgl(1 - \cos\theta_0)$, $v_{max} = \sqrt{2gl(1 - \cos\theta_0)}$.
- Molla: $L = \tfrac12 k(x_A^2 - x_B^2)$; attrito: $L = -F_a\,\ell$, sempre negativo e dipendente dal percorso.
:::

=== 18 dispense
SLIDES: 17, 18
# Lezione 18 — Lavoro, energia cinetica e potenza

## Di cosa parla questa lezione
Questa lezione consolida il concetto di **lavoro** (definizione, segno, esempi concreti di lavoro positivo, negativo e nullo), riprende il **teorema dell'energia cinetica** precisandone l'ambito di validità e introduce una grandezza nuova, la **potenza**, che misura **quanto in fretta** si compie un lavoro. Si chiude con molti esercizi svolti delle dispense: ascensori, casse trascinate, piani inclinati, slitte, automobili.

## Il lavoro: definizione
Una forza compie lavoro quando il suo **punto di applicazione si sposta** e la forza ha una **componente lungo lo spostamento**. Per una forza costante e uno spostamento rettilineo:

$$L = \vec F \cdot \vec s = F\,s\cos\theta$$

dove:
- $L$ = lavoro (J)
- $F$ = modulo della forza (N)
- $s$ = modulo dello spostamento del punto di applicazione (m)
- $\theta$ = angolo tra il vettore forza e il vettore spostamento

Nel caso generale (forza variabile, traiettoria curva) si sommano i lavori elementari $dL = \vec F \cdot d\vec s$:

$$L_{AB} = \int_A^B \vec F \cdot d\vec s \qquad\text{in una dimensione:}\qquad L = \int_{x_1}^{x_2} F(x)\,dx$$

cioè l'**area sotto il grafico** di $F(x)$ tra $x_1$ e $x_2$ (lezione 17).

Tre condizioni perché ci sia lavoro, tutte necessarie:
1. deve esserci una **forza**;
2. il punto di applicazione deve **spostarsi**;
3. la forza deve avere una **componente lungo lo spostamento** (non deve essere perpendicolare).

Spingere con forza contro un muro che non si muove non produce lavoro, per quanto si fatichi: lo spostamento è nullo. (La fatica muscolare è dovuta a processi interni al corpo, non al lavoro meccanico sul muro.)

### Il lavoro lo compie una forza
In fisica il lavoro è sempre compiuto da una **forza**, non da un oggetto o da una persona. Se spingo un carrello con la mano, è la **forza esercitata dalla mia mano** che compie lavoro sul carrello. Il peso del carrello non compie lavoro (è perpendicolare allo spostamento orizzontale) e il carrello non compie lavoro su sé stesso.

::: esempio
**Forza parallela allo spostamento.** Una forza di $100\,\mathrm N$ sposta un oggetto di $2\,\mathrm m$ nella sua stessa direzione e verso: $\theta = 0$, $\cos\theta = 1$, $L = 100 \cdot 2 = 200\,\mathrm J$.
:::

::: esempio
**Forza variabile.** Su un oggetto che si muove lungo l'asse $x$ agisce la forza $F(x) = 4x + 4$ (N, con $x$ in m). Lavoro tra $x_1 = 1\,\mathrm m$ e $x_2 = 5\,\mathrm m$:
1. $L = \displaystyle\int_1^5 (4x + 4)\,dx = \big[2x^2 + 4x\big]_1^5$.
2. In $x = 5$: $2 \cdot 25 + 20 = 70$. In $x = 1$: $2 + 4 = 6$.
3. $L = 70 - 6 = 64\,\mathrm J$.

Controllo grafico: sotto la retta $F = 4x + 4$ tra $x = 1$ ($F = 8\,\mathrm N$) e $x = 5$ ($F = 24\,\mathrm N$) c'è un trapezio di area $\dfrac{(8 + 24)}{2}\cdot 4 = 64\,\mathrm J$.
:::

## Lavoro positivo, negativo e nullo
Il segno del lavoro dipende dall'angolo tra forza e spostamento:

| Lavoro | Angolo | Significato | Esempi |
|---|---|---|---|
| **Positivo** (motore) | $\theta < 90°$ | la forza favorisce il moto: componente concorde con lo spostamento | peso di un corpo che scende; calamita che attira uno spillo caduto a terra (lo spillo si muove verso la calamita); mano che spinge o tira un carrello inizialmente fermo; motore di un'auto che accelera |
| **Negativo** (resistente) | $90° < \theta \le 180°$ | la forza si oppone allo spostamento | peso di un corpo che sale; attrito radente; giocatore che ferma una palla lanciata (la mano spinge contro il moto della palla); freni dell'auto |
| **Nullo** | $\theta = 90°$, oppure spostamento nullo | nessun contributo al moto | peso di una valigia su un nastro trasportatore orizzontale; forza centripeta nel moto circolare; tensione del filo del pendolo; mattoni che sorreggono il mattone in cima a una colonna (nessuno spostamento); reazione di un piano liscio |

Un **lavoro negativo** significa quindi che la forza applicata **si oppone allo spostamento** (ha una componente di verso opposto). Non significa che la forza sia variabile, costante o parallela.

::: esempio
**Aereo che traina uno striscione.** Un aereo vola a velocità costante di $300\,\mathrm{km/h}$ trascinando uno striscione con una forza di $1000\,\mathrm N$ diretta come il moto. Lavoro compiuto in 30 minuti:
1. Spazio percorso: $s = v\,t = 300\,\mathrm{km/h} \cdot 0{,}5\,\mathrm h = 150\,\mathrm{km} = 1{,}5 \cdot 10^5\,\mathrm m$.
2. $L = F\,s = 1000 \cdot 1{,}5 \cdot 10^5 = 1{,}5 \cdot 10^8\,\mathrm J$.
3. Il segno è **positivo**: la forza sullo striscione è nello stesso verso dello spostamento. (Lo striscione si muove a velocità costante perché la resistenza dell'aria compie un lavoro uguale e negativo.)
:::

## Il lavoro contro la gravità
Per sollevare un corpo di peso $P = mg$ di un'altezza $h$ (a velocità costante, o comunque partendo e arrivando da fermo) bisogna compiere un lavoro:

$$L = mgh = P\,h$$

dove $m$ = massa (kg), $g = 9{,}8\,\mathrm{m/s^2}$, $h$ = dislivello (m), $P$ = peso (N).

Il lavoro del peso è invece $-mgh$ (negativo, perché il corpo sale). Come visto nella lezione 17, questo lavoro dipende **solo dal dislivello**: il percorso seguito e il tempo impiegato **non contano**.

::: esempio
**Calcoli tipici.**
- Peso di $2550\,\mathrm N$ sollevato di $2\,\mathrm m$: $L = 2550 \cdot 2 = 5100\,\mathrm J$ (in joule, non in watt).
- Una gru compie $90\,\mathrm{kJ}$ per sollevare $500\,\mathrm{kg}$: $h = L/(mg) = 90\,000/(500 \cdot 9{,}8) = 90\,000/4900 \approx 18{,}4\,\mathrm m$.
- Due alpinisti dello stesso peso scalano la stessa montagna, uno lungo i tornanti e uno in linea retta: compiono **lo stesso lavoro** contro la gravità, $mgh$. Chi segue i tornanti percorre più strada ma su una pendenza minore; chi va dritto fa più fatica per unità di tempo (potenza maggiore), ma il lavoro contro la gravità è identico.
:::

### Carichi a velocità costante
Se un carico sale o scende **a velocità costante**, l'accelerazione è nulla, quindi la risultante è nulla: la forza della gru (o del motore, o della fune) è **uguale in modulo al peso**, qualunque sia il verso del moto.

::: esempio
**Gru che fa scendere una sbarra.** Una gru fa scendere a terra una sbarra di $300\,\mathrm{kg}$ a velocità costante. La forza applicata dalla gru è uguale al peso: $F = 300 \cdot 9{,}8 = 2940\,\mathrm N$, verso l'alto. Il lavoro della gru è negativo (forza verso l'alto, spostamento verso il basso), quello del peso positivo, e la somma è zero.
:::

::: esempio
**Ascensore a velocità costante (esercizio della dispensa).** Il motore di un ascensore solleva a velocità costante la cabina con quattro persone, massa totale $m = 450\,\mathrm{kg}$, per un dislivello $h = 45\,\mathrm m$.
1. Velocità costante ⇒ risultante nulla ⇒ la forza del motore è uguale e opposta al peso: $F = mg = 450 \cdot 9{,}8 = 4410\,\mathrm N$, verso l'alto.
2. Lavoro del motore: forza e spostamento paralleli e concordi, $L_m = F\,h = 4410 \cdot 45 \approx 1{,}98 \cdot 10^5\,\mathrm J$.
3. Lavoro del peso: angolo di $180°$ con lo spostamento, $L_p = -mgh \approx -1{,}98 \cdot 10^5\,\mathrm J$.
4. Lavoro totale nullo, come deve essere: la forza totale è nulla e l'energia cinetica non cambia.
:::

::: esempio
**Energia potenziale di una massa sollevata.** Una massa di $5{,}0\,\mathrm{kg}$ sollevata a $20\,\mathrm{cm}$ dal pavimento ha, rispetto al pavimento, energia potenziale $U = mgh = 5{,}0 \cdot 9{,}8 \cdot 0{,}20 = 9{,}8\,\mathrm J$. È il lavoro che è stato fatto per sollevarla (lezione 20).
:::

## Il teorema dell'energia cinetica
Ricordiamo (lezione 17) che l'**energia cinetica** di un punto materiale è l'energia legata al suo moto:

$$K = \tfrac12 mv^2$$

e che vale il **teorema dell'energia cinetica**:

> Il lavoro totale compiuto da tutte le forze agenti su un punto materiale (cioè il lavoro della risultante) tra due posizioni è uguale alla variazione della sua energia cinetica.

$$L_{tot} = \tfrac12 mv_f^2 - \tfrac12 mv_i^2 = \Delta K$$

dove:
- $L_{tot}$ = lavoro della risultante, cioè somma dei lavori di tutte le forze (J)
- $m$ = massa (kg)
- $v_i$, $v_f$ = velocità iniziale e finale (m/s)

### Ambito di validità
- Vale per un **punto materiale** (per un sistema di punti bisogna includere anche il lavoro delle forze interne).
- Vale per **qualsiasi tipo di forza**: costante o variabile, conservativa (peso, molla) o non conservativa (attrito, resistenza dell'aria). Questo lo distingue dalla conservazione dell'energia meccanica, che vale solo con forze conservative.
- Bisogna però mettere il lavoro di **tutte** le forze, attrito compreso; le forze perpendicolari allo spostamento contribuiscono con zero.
- Vale in un **riferimento inerziale**, perché si ricava dal secondo principio $\vec F = m\vec a$. (In un riferimento non inerziale bisognerebbe aggiungere il lavoro delle forze apparenti.)

### Il rapporto tra energia cinetica e lavoro
L'energia cinetica è una **proprietà** del corpo (dipende dal suo stato di moto); il lavoro è il **modo per cambiarla**, cioè un trasferimento di energia dall'esterno:
- lavoro totale **positivo** ⇒ energia cinetica che **aumenta** (il corpo accelera);
- lavoro totale **negativo** ⇒ energia cinetica che **diminuisce** (il corpo rallenta);
- lavoro totale **nullo** ⇒ modulo della velocità costante (come nel moto circolare uniforme).

Viceversa, l'energia cinetica di un corpo in moto è uguale al lavoro che si deve compiere per portarlo da fermo a quella velocità, ed è anche il lavoro che il corpo può compiere **fermandosi** (per esempio deformando un ostacolo o scaldandolo).

::: esempio
**Calcoli di energia cinetica e lavoro.**
- Moto di $100\,\mathrm{kg}$ a $72\,\mathrm{km/h}$. Conversione: $72/3{,}6 = 20\,\mathrm{m/s}$. $K = \tfrac12 \cdot 100 \cdot 20^2 = 50 \cdot 400 = 2{,}0 \cdot 10^4\,\mathrm J$.
- Auto di $1000\,\mathrm{kg}$ che viaggia a velocità costante di $30\,\mathrm{m/s}$: il lavoro che il motore ha dovuto compiere (al netto degli attriti) per portarla da ferma a quella velocità è $L = \tfrac12 \cdot 1000 \cdot 900 = 4{,}5 \cdot 10^5\,\mathrm J = 450\,\mathrm{kJ}$.
- Auto di $1600\,\mathrm{kg}$ da $80$ a $100\,\mathrm{km/h}$: $v_i = 80/3{,}6 = 22{,}2\,\mathrm{m/s}$, $v_f = 100/3{,}6 = 27{,}8\,\mathrm{m/s}$. $L = \tfrac12 \cdot 1600 \cdot (27{,}8^2 - 22{,}2^2) = 800 \cdot (771{,}6 - 493{,}8) = 800 \cdot 277{,}8 \approx 2{,}22 \cdot 10^5\,\mathrm J$.
- Palla di $0{,}2\,\mathrm{kg}$ lanciata verso l'alto a $v_0 = 20\,\mathrm{m/s}$: la forza della mano, nella fase di lancio, le ha dato l'energia cinetica $\tfrac12 \cdot 0{,}2 \cdot 400 = 40\,\mathrm J$. Questo è il lavoro della forza impressa, ed è l'energia che poi permette alla palla di salire fino all'altezza massima.
:::

::: esempio
**Proiettile nell'albero.** Un proiettile di $3{,}0\,\mathrm g$ a $400\,\mathrm{m/s}$ viene fermato da un albero.
1. $K = \tfrac12 \cdot 0{,}003 \cdot 400^2 = 0{,}0015 \cdot 160\,000 = 240\,\mathrm J$.
2. La forza dell'albero compie lavoro $-240\,\mathrm J$; l'energia cinetica non sparisce ma si trasforma soprattutto in calore (e in deformazione del legno e del proiettile): circa $240\,\mathrm J$ di calore ceduti all'albero. È un'energia, quindi in joule, non in watt.
:::

## La potenza
Due macchine possono compiere lo stesso lavoro in tempi molto diversi: una gru sollevando un carico in un minuto, un operaio portando su lo stesso carico a pezzi in un'ora. La grandezza che misura la **rapidità** con cui si compie lavoro è la **potenza**.

### Potenza istantanea
Consideriamo un sistema fisico che esercita una forza su un punto materiale in movimento, compiendo lavoro. Si definisce **potenza istantanea** il rapporto tra il lavoro elementare $dL$ compiuto in un intervallo di tempo infinitesimo $dt$ e l'intervallo stesso:

$$W = P = \frac{dL}{dt}$$

Essendo il rapporto tra due scalari, la potenza è una grandezza **scalare**. Nelle dispense è indicata con $W$; spesso si usa anche $P$.

**Unità di misura**: il **watt** (W), $\;1\,\mathrm W = 1\,\mathrm J/1\,\mathrm s$. Dimensioni $[ML^2T^{-3}]$. Multipli usati: kilowatt ($1\,\mathrm{kW} = 10^3\,\mathrm W$), megawatt. Una vecchia unità pratica è il cavallo vapore ($1\,\mathrm{CV} \approx 735\,\mathrm W$).

### Potenza media
Si definisce **potenza media** il rapporto tra il lavoro compiuto in un tempo **finito** lungo un tratto di traiettoria e l'intervallo di tempo complessivamente impiegato:

$$W^* = P_{media} = \frac{L}{\Delta t}$$

dove:
- $L$ = lavoro compiuto (J)
- $\Delta t$ = tempo complessivamente impiegato (s)

La potenza caratterizza dunque la **rapidità** con cui un sistema è capace di compiere lavoro: a parità di lavoro, **minore è il tempo impiegato, maggiore è la potenza**.

### La potenza come forza per velocità
Troviamo un modo alternativo di scrivere la potenza istantanea. Il lavoro elementare è $dL = \vec F \cdot d\vec s$; dividendo per $dt$ e ricordando che $d\vec s/dt = \vec v$:

$$W = \frac{dL}{dt} = \vec F \cdot \frac{d\vec s}{dt} = \vec F \cdot \vec v = F\,v\cos\theta$$

dove:
- $\vec F$ = forza applicata al punto (N)
- $\vec v$ = velocità del punto in quell'istante (m/s)
- $\theta$ = angolo tra forza e velocità

La potenza è la **forza applicata in un certo istante moltiplicata (scalarmente) per la velocità del punto**. Caso importante: per sollevare un carico di massa $m$ a **velocità costante** $v$, la forza è uguale al peso e la potenza è:

$$P = m\,g\,v$$

### Lavoro = potenza × tempo
Invertendo la definizione, $L = P\,\Delta t$. Ne seguono due fatti:
- **due motori di potenza diversa possono compiere lo stesso lavoro**, purché impieghino **tempi diversi** (il meno potente impiega più tempo). Con lo stesso tempo, invece, compirebbero lavori diversi;
- il **kilowattora** (kWh), che compare nelle bollette, è un'unità di **energia**, non di potenza: è il lavoro compiuto in un'ora da una potenza di $1\,\mathrm{kW}$, cioè $1\,\mathrm{kWh} = 1000\,\mathrm W \cdot 3600\,\mathrm s = 3{,}6 \cdot 10^6\,\mathrm J$.

::: esempio
**Ascensore.** Un ascensore di $1000\,\mathrm{kg}$ sale dal suolo a $50\,\mathrm m$ in $20\,\mathrm s$ (attriti trascurabili).
1. Lavoro contro la gravità: $L = mgh = 1000 \cdot 9{,}8 \cdot 50 = 4{,}9 \cdot 10^5\,\mathrm J$.
2. Potenza media: $P = L/\Delta t = 4{,}9 \cdot 10^5/20 = 2{,}45 \cdot 10^4\,\mathrm W = 24{,}5\,\mathrm{kW}$.

Il risultato è una potenza: in watt (kW), non in joule (kJ).
:::

::: esempio
**Argano.** Un argano solleva in verticale un sacco di cemento di $50\,\mathrm{kg}$ alla velocità costante di $3\,\mathrm{m/s}$. $P = mgv = 50 \cdot 9{,}8 \cdot 3 = 1470\,\mathrm W \approx 1{,}5\,\mathrm{kW}$.
:::

::: esempio
**Tempo necessario.** Con una potenza di $280\,\mathrm W$, quanto tempo serve per fornire un lavoro di $1500\,\mathrm J$? $\Delta t = L/P = 1500/280 \approx 5{,}4\,\mathrm s$. (Controllo dell'ordine di grandezza: $280\,\mathrm J$ al secondo, per arrivare a $1500\,\mathrm J$ servono poco più di 5 secondi.)
:::

::: esempio
**Ascensore e montacarichi.** Un ascensore impiega $30\,\mathrm s$ per salire sei piani; un montacarichi impiega $10\,\mathrm s$ per salire un piano, con lo stesso carico. Il lavoro per salire un piano è lo stesso, $L_1$.
1. Ascensore: $P_a = 6L_1/30 = L_1/5$ (0,2 piani al secondo).
2. Montacarichi: $P_m = L_1/10$ (0,1 piani al secondo).
3. $P_a/P_m = (1/5)/(1/10) = 2$: la potenza dell'ascensore è **doppia** di quella del montacarichi.
:::

::: esempio
**Potenza in un moto accelerato (esercizio della dispensa).** Un oggetto di $2{,}0\,\mathrm{kg}$ accelera uniformemente da fermo a $10\,\mathrm{m/s}$ in $3{,}0\,\mathrm s$. (a) Lavoro compiuto? Potenza (b) alla fine e (c) a metà dell'intervallo?

(a) Teorema dell'energia cinetica: $L = \tfrac12 \cdot 2{,}0 \cdot 10^2 - 0 = 100\,\mathrm J$.

Accelerazione costante: $a = v_{fin}/t_{fin} = 10/3{,}0 \approx 3{,}3\,\mathrm{m/s^2}$; forza costante $F = ma \approx 6{,}7\,\mathrm N$.

(b) $W_{fin} = F\,v_{fin} = 6{,}7 \cdot 10 \approx 67\,\mathrm W$.

(c) A metà intervallo ($t = 1{,}5\,\mathrm s$) la velocità è $v = at = 5\,\mathrm{m/s}$: $W = 6{,}7 \cdot 5 \approx 33\,\mathrm W$.

La potenza non è costante: con forza costante cresce con la velocità. La potenza media è $100/3 \approx 33\,\mathrm W$.
:::

## Esercizi svolti sul calcolo del lavoro (dalle dispense)

::: esempio
**Cassa trascinata con una fune inclinata.** Una cassa di $m = 75\,\mathrm{kg}$ è spostata di $s = 4{,}0\,\mathrm m$ su un pavimento orizzontale con un filo che forma un angolo $\alpha = 35°$ con l'orizzontale; la tensione è $T = 520\,\mathrm N$ e il coefficiente di attrito dinamico è $\mu_d = 0{,}72$. Trovare (1) il lavoro della tensione e dell'attrito; (2) quanto deve valere la tensione perché la cassa si muova di moto uniforme.

Forze: peso $mg$, tensione $T$, reazione del piano con componente perpendicolare $N$ e componente orizzontale (attrito $F_d$).

(1) La tensione forma l'angolo $\alpha$ con lo spostamento: $L_T = T\,s\cos\alpha = 520 \cdot 4{,}0 \cdot 0{,}819 \approx 1{,}70 \cdot 10^3\,\mathrm J$.

Non c'è moto verticale, quindi le componenti verticali si bilanciano: $N + T\sin\alpha = mg$, da cui $N = 75 \cdot 9{,}8 - 520 \cdot 0{,}574 = 735 - 298 = 437\,\mathrm N$. (La fune tirando un po' verso l'alto "alleggerisce" la cassa.)

Attrito: $F_d = \mu_d N = 0{,}72 \cdot 437 \approx 315\,\mathrm N$, opposto allo spostamento: $L_a = -F_d\,s = -315 \cdot 4{,}0 \approx -1{,}26 \cdot 10^3\,\mathrm J$.

(2) Moto uniforme ⇒ risultante nulla. Peso e $N$ sono perpendicolari allo spostamento (lavoro nullo); serve che la somma dei lavori di tensione e attrito sia nulla, cioè $T\cos\alpha = \mu_d(mg - T\sin\alpha)$. Risolvendo per $T$:
$$T = \frac{\mu_d\,mg}{\cos\alpha + \mu_d\sin\alpha} = \frac{0{,}72 \cdot 735}{0{,}819 + 0{,}72 \cdot 0{,}574} = \frac{529}{1{,}232} \approx 430\,\mathrm N$$
:::

::: esempio
**Piano inclinato senza attrito.** Un corpo di $m = 18\,\mathrm{kg}$ scende da fermo lungo un piano inclinato liscio di altezza $h = 2{,}5\,\mathrm m$. Trovare (1) il lavoro del peso fino in fondo e (2) la velocità finale.

(1) Lo spostamento ha modulo $\ell$ (lunghezza del piano); il peso forma con esso l'angolo $90° - \alpha$, dove $\alpha$ è l'inclinazione. $L = mg\,\ell\cos(90° - \alpha) = mg\,\ell\sin\alpha = mgh$, usando $h = \ell\sin\alpha$. Quindi $L = 18 \cdot 9{,}8 \cdot 2{,}5 = 441\,\mathrm J$.

(2) L'unica altra forza è la reazione del piano che, senza attrito, è perpendicolare allo spostamento: lavoro nullo. Per il teorema dell'energia cinetica: $\tfrac12 mv^2 = 441\,\mathrm J$, quindi $v = \sqrt{2gh} = \sqrt{49} = 7{,}0\,\mathrm{m/s}$. L'inclinazione non conta, conta solo l'altezza.
:::

::: esempio
**Piano inclinato con attrito.** Stesso corpo ($18\,\mathrm{kg}$, $h = 2{,}5\,\mathrm m$), piano lungo $\ell = 7{,}5\,\mathrm m$; parte da fermo e arriva in fondo a $v = 5{,}0\,\mathrm{m/s}$. Trovare la forza di attrito dinamico.

Lavorano il peso ($+mgh$) e l'attrito ($-F_d\,\ell$, forza costante opposta allo spostamento). Teorema dell'energia cinetica:
$$mgh - F_d\,\ell = \tfrac12 mv^2 \qquad\Rightarrow\qquad F_d = \frac{mgh - \tfrac12 mv^2}{\ell} = \frac{441 - 225}{7{,}5} = \frac{216}{7{,}5} \approx 28{,}8\,\mathrm N$$
:::

::: esempio
**Bambino che traina una slitta.** Un bambino traina una slitta su un piano orizzontale con una forza $F = 50\,\mathrm N$ inclinata di $\alpha = 35°$; la slitta si muove a velocità costante $v = 0{,}75\,\mathrm{m/s}$. Trovare (1) il lavoro delle forze in $t = 12\,\mathrm s$ e (2) la potenza della forza $F$.

(1) Spostamento: $s = vt = 0{,}75 \cdot 12 = 9{,}0\,\mathrm m$. Agiscono quattro forze: peso e reazione $N$ (perpendicolari allo spostamento, lavoro nullo), la forza del bambino e l'attrito.
- $L_F = F\,s\cos\alpha = 50 \cdot 9{,}0 \cdot 0{,}819 \approx 369\,\mathrm J$.
- Velocità costante ⇒ risultante nulla ⇒ l'attrito è uguale e opposto alla componente orizzontale di $F$: $F_a = F\cos\alpha$, quindi $L_a = -F\cos\alpha\,s \approx -369\,\mathrm J$.

Più semplicemente: velocità costante ⇒ energia cinetica costante ⇒ lavoro totale nullo ⇒ il lavoro dell'attrito è uguale e opposto a quello di $F$.

(2) $P = F\,v\cos\alpha = 50 \cdot 0{,}75 \cdot 0{,}819 \approx 30{,}7\,\mathrm W$ (oppure $369\,\mathrm J/12\,\mathrm s$).
:::

::: esempio
**Automobile che accelera.** Un'auto di $m = 720\,\mathrm{kg}$, sotto una forza costante, passa da $v_1 = 3{,}5\,\mathrm{m/s}$ a $v_2 = 12\,\mathrm{m/s}$ in $s = 30\,\mathrm m$. Trovare (1) forza e lavoro del motore e (2) la potenza media.

(1) Teorema dell'energia cinetica: $L = \tfrac12 \cdot 720 \cdot (12^2 - 3{,}5^2) = 360 \cdot (144 - 12{,}25) = 360 \cdot 131{,}75 \approx 4{,}74 \cdot 10^4\,\mathrm J$. Forza costante: $L = F\,s$, quindi $F = 47\,430/30 \approx 1{,}58 \cdot 10^3\,\mathrm N$.

(2) Forza costante ⇒ moto uniformemente accelerato, in cui $s = \dfrac{v_1 + v_2}{2}\,t$. Quindi $t = \dfrac{2s}{v_1 + v_2} = \dfrac{60}{15{,}5} \approx 3{,}87\,\mathrm s$ e $P = L/t = 47\,430/3{,}87 \approx 1{,}2 \cdot 10^4\,\mathrm W = 12\,\mathrm{kW}$.
:::

::: attenzione
Errori tipici:
- confondere le unità: lavoro ed energia in **joule** (J, kJ), potenza in **watt** (W, kW), forza in **newton**. Nei quiz le opzioni con l'unità sbagliata sono quasi sempre trappole;
- dire che "la mano" o "il carrello" compie lavoro: il lavoro è compiuto da una **forza**;
- pensare che il lavoro contro la gravità dipenda dal percorso o dal tempo: dipende solo dal dislivello. Il tempo cambia la **potenza**, non il lavoro;
- definire la potenza come lavoro diviso spostamento (quella è una forza) o come lavoro "nell'unità di tempo" senza specificare: è il lavoro diviso il **tempo impiegato**;
- dimenticare di convertire km/h in m/s (si divide per 3,6) prima di calcolare l'energia cinetica.
:::

::: esame
Le domande aperte del paniere su questa lezione chiedono:
- **definire il lavoro di una forza** e fare esempi di lavoro positivo, negativo e nullo: $dL = \vec F \cdot d\vec s$, $L = \int \vec F \cdot d\vec s$, per forza costante $L = Fs\cos\theta$, unità joule; la tabella dei segni con esempi concreti (peso che scende / sale, valigia sul nastro, forza centripeta, attrito);
- **definire la potenza e fare un esempio**: potenza istantanea $dL/dt = \vec F \cdot \vec v$, media $L/\Delta t$, unità watt; esempio dell'ascensore o dell'argano ($P = mgv$); differenza tra kW e kWh;
- **enunciare il teorema dell'energia cinetica precisando l'ambito di validità**: $L_{tot} = \Delta K$; punto materiale, riferimento inerziale, qualsiasi forza purché si conti il lavoro di tutte;
- **cos'è l'energia cinetica e che rapporti ha con il lavoro**: $K = \tfrac12 mv^2$, energia del moto; il lavoro totale ne è la variazione; è il lavoro necessario per portare il corpo da fermo a velocità $v$.
:::

::: sintesi
- Lavoro: $L = Fs\cos\theta$ (J); in generale $L = \int\vec F \cdot d\vec s$, area sotto $F(x)$.
- Positivo se $\theta < 90°$, negativo se $\theta > 90°$, nullo se $\theta = 90°$ o se non c'è spostamento. Lo compie una forza.
- Contro la gravità: $L = mgh$, indipendente da percorso e tempo; a velocità costante la forza è uguale al peso.
- Teorema dell'energia cinetica: $L_{tot} = \Delta K$, per qualsiasi forza, contando tutte le forze; punto materiale in un riferimento inerziale.
- Potenza: $P = dL/dt = \vec F \cdot \vec v$ (W); media $P = L/\Delta t$; sollevamento a velocità costante $P = mgv$.
- Stesso lavoro con potenze diverse → tempi diversi; $1\,\mathrm{kWh} = 3{,}6 \cdot 10^6\,\mathrm J$ è un'energia.
:::

=== 19 dispense
SLIDES: 18, 19
# Lezione 19 — Forze conservative, energia potenziale e gradiente

## Di cosa parla questa lezione
Nella lezione 17 abbiamo calcolato il lavoro di quattro forze e notato una differenza importante: per il **peso**, la **tensione del pendolo** e la **forza elastica** il lavoro dipende **solo dal punto di partenza e da quello di arrivo**; per l'**attrito** dipende invece dalla **strada percorsa**. Questa differenza divide le forze in due grandi famiglie: **conservative** e **non conservative**. In questa lezione:
- definiamo la forza conservativa e il campo di forze conservativo, nelle due forme equivalenti;
- dimostriamo che peso e forza elastica sono conservative e che l'attrito non lo è;
- introduciamo l'**energia potenziale**, che esiste solo per le forze conservative;
- vediamo come si torna dall'energia potenziale alla forza con l'operatore **gradiente**.

## Definizione di forza conservativa
Una forza si dice **conservativa** se il lavoro che compie su un punto materiale che si sposta da A a B **dipende esclusivamente dalle posizioni iniziale e finale**, e non dalla traiettoria seguita per andare da A a B.

Esiste una formulazione equivalente:

> Una forza è conservativa se e solo se il lavoro che compie lungo **qualsiasi percorso chiuso** (che torna al punto di partenza) è **nullo**.

$$\oint \vec F \cdot d\vec s = 0$$

dove:
- $\vec F$ = forza (N)
- $d\vec s$ = spostamento elementare lungo il percorso (m)
- $\oint$ = integrale su un percorso chiuso

### Perché le due definizioni sono equivalenti
Prendiamo due punti A e B e due percorsi diversi che li collegano, $\gamma_1$ e $\gamma_2$.

**Dalla prima alla seconda.** Costruiamo un percorso chiuso: andiamo da A a B lungo $\gamma_1$ e torniamo da B ad A lungo $\gamma_2$. Percorrere un tratto al contrario cambia il segno di ogni $d\vec s$, quindi cambia il segno del lavoro: $L_{B\to A}(\gamma_2) = -L_{A\to B}(\gamma_2)$. Il lavoro sul giro è:
$$\oint = L_{A\to B}(\gamma_1) + L_{B\to A}(\gamma_2) = L_{A\to B}(\gamma_1) - L_{A\to B}(\gamma_2)$$
Se il lavoro non dipende dal percorso, i due termini sono uguali e il lavoro sul giro è zero.

**Dalla seconda alla prima.** Se il lavoro su ogni giro chiuso è zero, allora $L_{A\to B}(\gamma_1) - L_{A\to B}(\gamma_2) = 0$, cioè i lavori lungo i due percorsi sono uguali, qualunque siano i percorsi.

Attenzione: il lavoro di una forza conservativa **dipende** dai punti di partenza e di arrivo (per esempio dal dislivello per il peso); **non dipende** dal percorso che li collega.

## Esempi: peso, forza elastica, gravità
**Forza peso.** Nella lezione 17 abbiamo calcolato $L = mg\,(y_A - y_B)$ per una traiettoria qualsiasi: dipende solo dalle quote iniziale e finale. Su un percorso chiuso $y_B = y_A$ e il lavoro è zero: il peso è **conservativo**. Il motivo profondo è che la forza è costante in modulo, direzione e verso.

**Forza elastica.** Il lavoro della molla da $x_A$ a $x_B$ è $\tfrac12 k\,(x_A^2 - x_B^2)$: dipende solo dalle deformazioni iniziale e finale. Se la massa torna al punto di partenza ($x_B = x_A$) il lavoro è zero: la forza elastica è **conservativa**. Durante un'oscillazione completa la molla compie lavoro negativo quando la massa si allontana dalla posizione di riposo e lavoro positivo uguale quando ritorna: in totale zero.

**Forza gravitazionale e forza elettrostatica.** Anche la forza di gravitazione universale (lezioni sulla gravitazione) e la forza elettrostatica di Coulomb sono conservative: sono forze **centrali** (dirette lungo la congiungente con un centro) con modulo che dipende solo dalla distanza.

## Esempi di forze non conservative: l'attrito
La forza di attrito radente dinamico ha modulo costante ed è sempre opposta allo spostamento. Il suo lavoro è (lezione 17):

$$L_{attr} = -F_a\,\ell$$

dove $\ell$ è la **lunghezza del percorso effettivo**. Quindi:
- percorsi diversi tra gli stessi punti danno lavori diversi: un percorso più lungo dissipa di più;
- su un percorso chiuso il lavoro **non è nullo**, è **negativo**: $-F_a$ per il perimetro del giro. Se trascino una cassa intorno alla stanza e la riporto al punto di partenza, l'attrito ha compiuto lavoro negativo lungo tutto il giro.

L'attrito è **non conservativo** (o **dissipativo**): il lavoro che compie fa "perdere" energia meccanica, che si trasforma in calore. Sono non conservative anche l'**attrito viscoso** e la **resistenza dell'aria**, che si oppongono sempre al moto. In generale non sono conservative le forze che dipendono dalla velocità e si oppongono al moto.

| Conservative | Non conservative (dissipative) |
|---|---|
| forza peso | attrito radente (cinetico, dinamico) |
| forza elastica | attrito viscoso |
| forza gravitazionale | resistenza dell'aria (del mezzo) |
| forza elettrostatica | |

::: esempio
**L'escursionista.** Un escursionista sale su un monte. Il lavoro compiuto **su di lui dalla forza gravitazionale** è lo stesso se percorre un sentiero breve e ripido o uno lungo e poco ripido: il peso è conservativo, e il lavoro vale $-mgh$ dove $h$ è il dislivello tra partenza e cima. Non dipende né dalla lunghezza del sentiero né dal **tempo** impiegato (il tempo cambierebbe la potenza, non il lavoro).
:::

::: attenzione
"Il lavoro" non è una forza: in una domanda che chiede "quale di queste forze non è conservativa", un'opzione come "il lavoro" è una trappola. La forza non conservativa tra quelle tipiche è l'**attrito**.

E non confondere: "la forza è conservativa" **non** significa che la forza è nulla, né che rispetta il terzo principio (lo rispettano tutte le forze di interazione). Significa che il suo lavoro su ogni percorso chiuso è nullo.
:::

## Il campo di forze conservativo
Un **campo di forze** associa a ogni punto dello spazio un vettore forza: $\vec F = \vec F(x, y, z)$. Per esempio il campo gravitazionale terrestre associa a ogni punto la forza che subirebbe un corpo posto lì. Ci limitiamo ai campi **stazionari**, cioè che non cambiano nel tempo.

Il lavoro del campo su un punto che si sposta da A a B è l'integrale di linea

$$L_{AB} = \int_A^B (F_x\,dx + F_y\,dy + F_z\,dz)$$

calcolato lungo la traiettoria (lezione 17).

Un campo di forze è **conservativo** se il lavoro compiuto dal campo per portare un punto materiale da una posizione A a una posizione B **non dipende dal percorso**, ma solo da A e B. In modo equivalente: se il lavoro lungo **qualsiasi cammino chiuso** è nullo.

Esempi: il campo gravitazionale (vicino alla Terra, $\vec F = m\vec g$ costante; in generale la gravitazione universale) e il campo elettrostatico sono conservativi. Un campo che "trascina" i corpi in giro, come la corrente di un vortice, non lo è: percorrendo un giro nel verso della corrente il lavoro è positivo.

## L'energia potenziale
Il fatto che il lavoro dipenda solo dagli estremi permette di associare a **ogni punto dello spazio** un numero, l'**energia potenziale** $U(x, y, z)$, tale che il lavoro della forza conservativa sia la **diminuzione** dell'energia potenziale:

$$L_{A\to B} = U_A - U_B = -\Delta U$$

dove:
- $L_{A\to B}$ = lavoro della forza conservativa da A a B (J)
- $U_A$, $U_B$ = energia potenziale in A e in B (J)
- $\Delta U = U_B - U_A$ = variazione di energia potenziale (J)

### Come si costruisce
Si sceglie un punto di riferimento O e gli si assegna energia potenziale zero (o un valore qualsiasi). L'energia potenziale in un punto P si definisce come il lavoro che la forza compie andando da P al punto di riferimento: $U(P) = L_{P\to O}$. Questa definizione ha senso **solo** se il lavoro non dipende dal percorso scelto da P a O, cioè solo per una forza conservativa. Allora, passando per O:
$$L_{A\to B} = L_{A\to O} + L_{O\to B} = L_{A\to O} - L_{B\to O} = U_A - U_B$$

Proprietà:
- $U$ è una funzione **della sola posizione**;
- è definita **a meno di una costante additiva** (dipende dalla scelta del riferimento), ma la **differenza** $U_A - U_B$, l'unica che ha significato fisico, non dipende dalla scelta;
- se la forza compie **lavoro positivo**, l'energia potenziale **diminuisce** (per esempio un corpo che cade); se compie lavoro negativo, aumenta (un corpo che sale "accumula" energia potenziale);
- **per l'attrito non esiste un'energia potenziale**, perché il suo lavoro dipende dal percorso: non si può assegnare un valore unico a ogni punto.

Nelle dispense si usa anche la funzione **potenziale** $V = -U$, per cui $L_{AB} = V_B - V_A = U_A - U_B$.

| Forza | Lavoro da A a B | Energia potenziale |
|---|---|---|
| Peso ($y$ verso l'alto) | $mg\,(y_A - y_B)$ | $U = mgy$ (o $mgh$) |
| Elastica | $\tfrac12 k\,(x_A^2 - x_B^2)$ | $U = \tfrac12 kx^2$ |

dove $m$ = massa (kg), $g = 9{,}8\,\mathrm{m/s^2}$, $y$ o $h$ = quota rispetto a un livello scelto (m), $k$ = costante elastica (N/m), $x$ = deformazione dalla lunghezza di riposo (m). In entrambi i casi basta confrontare il lavoro con $U_A - U_B$ per leggere la funzione $U$.

::: esempio
**Pendolo e variazione di energia potenziale (esercizio della dispensa).** Un pendolo ha un filo di $2{,}00\,\mathrm m$ e una massa di $5{,}00\,\mathrm{kg}$. La massa viene spostata finché il filo forma $30°$ con la verticale e poi lasciata. Durante la discesa verso il punto più basso: (a) quanto lavoro compie la gravità? (b) di quanto varia l'energia potenziale? (c) se $U = 0$ nel punto più basso, quanto valeva alla partenza? (d) come cambiano i risultati aumentando l'angolo?

(a) La gravità è l'unica forza che compie lavoro (la tensione è perpendicolare al moto): $L = mgl\,(1 - \cos\theta) = 5{,}00 \cdot 9{,}8 \cdot 2{,}00 \cdot (1 - 0{,}866) = 98 \cdot 0{,}134 \approx 13{,}1\,\mathrm J$.

(b) L'energia potenziale diminuisce della stessa quantità: $\Delta U = -L = -13{,}1\,\mathrm J$.

(c) $U_{fin} - U_{in} = -13{,}1\,\mathrm J$ con $U_{fin} = 0$, quindi $U_{in} = +13{,}1\,\mathrm J$.

(d) Aumentando $\theta$ cresce $1 - \cos\theta$ (il dislivello): aumentano il lavoro della gravità e l'energia potenziale iniziale.
:::

## Dall'energia potenziale alla forza: il gradiente
Abbiamo visto come si passa dalla forza all'energia potenziale (integrando il lavoro). Si può fare anche il percorso inverso: **conoscendo $U$ si ricava la forza**.

### In una dimensione
Per uno spostamento infinitesimo $dx$ lungo l'asse $x$, il lavoro elementare è $dL = F_x\,dx$ e deve essere uguale a $-dU$. Quindi $F_x\,dx = -dU$, cioè:

$$F_x = -\frac{dU}{dx}$$

La forza è la **derivata dell'energia potenziale cambiata di segno**.

::: esempio
**Molla.** $U = \tfrac12 kx^2$, quindi $F = -\dfrac{d}{dx}\left(\tfrac12 kx^2\right) = -kx$: si ritrova la legge di Hooke.

**Peso.** $U = mgy$, quindi $F_y = -\dfrac{d}{dy}(mgy) = -mg$: una forza di modulo $mg$ diretta verso il basso.
:::

### L'operatore gradiente
In tre dimensioni si introduce l'operatore vettoriale **gradiente**, indicato con il simbolo $\nabla$ ("nabla"). È definito come l'operatore che, applicato a una funzione scalare $V(\vec r)$ e moltiplicato scalarmente per lo spostamento elementare $d\vec r$, dà il **differenziale** della funzione:

$$\nabla V \cdot d\vec r = dV$$

Ricordando che il differenziale di una funzione di tre variabili è $dV = \dfrac{\partial V}{\partial x}dx + \dfrac{\partial V}{\partial y}dy + \dfrac{\partial V}{\partial z}dz$ e che $d\vec r = (dx, dy, dz)$, il gradiente è il vettore delle **derivate parziali**:

$$\nabla V = \left(\frac{\partial V}{\partial x},\ \frac{\partial V}{\partial y},\ \frac{\partial V}{\partial z}\right) = \frac{\partial V}{\partial x}\hat i + \frac{\partial V}{\partial y}\hat j + \frac{\partial V}{\partial z}\hat k$$

dove $\partial V/\partial x$ è la derivata di $V$ rispetto a $x$ tenendo fissi $y$ e $z$ (e analogamente per le altre).

### La forza conservativa è meno il gradiente dell'energia potenziale
Per una forza conservativa il lavoro elementare è $dL = \vec F \cdot d\vec r = -dU$. Ma $-dU = -\nabla U \cdot d\vec r$. Poiché l'uguaglianza $\vec F \cdot d\vec r = -\nabla U \cdot d\vec r$ deve valere per **ogni** spostamento $d\vec r$, i due vettori coincidono:

$$\vec F = -\nabla U \qquad\Longleftrightarrow\qquad F_x = -\frac{\partial U}{\partial x},\quad F_y = -\frac{\partial U}{\partial y},\quad F_z = -\frac{\partial U}{\partial z}$$

Le **componenti** del campo di forze conservativo sono uguali alle derivate parziali dell'energia potenziale rispetto alla coordinata corrispondente, cambiate di segno. (Con il potenziale $V = -U$: $\vec F = \nabla V$.)

**Significato fisico.** Il gradiente di una funzione punta nella direzione in cui la funzione **cresce più rapidamente**, e il suo modulo dice quanto rapidamente cresce. Con il segno meno: **la forza conservativa spinge verso dove l'energia potenziale diminuisce più rapidamente**, ed è tanto più intensa quanto più $U$ cambia in fretta da un punto all'altro. Una pallina su una superficie collinare rotola nella direzione di massima pendenza, verso il basso.

::: esempio
**Forza da un'energia potenziale data (esercizio della dispensa).** L'energia potenziale di un campo conservativo è $U(x, y, z) = -x^2 - xy + z^2$ (J, coordinate in m). Nel punto $P = (1, 0, 0)$, che angolo forma la forza con l'asse $x$?

1. Derivate parziali: $\dfrac{\partial U}{\partial x} = -2x - y$, $\;\dfrac{\partial U}{\partial y} = -x$, $\;\dfrac{\partial U}{\partial z} = 2z$.
2. Forza $= -\nabla U$: $F_x = 2x + y$, $F_y = x$, $F_z = -2z$.
3. In $P = (1, 0, 0)$: $\vec F = (2, 1, 0)\,\mathrm N$, cioè $2\hat i + \hat j$; modulo $|\vec F| = \sqrt{4 + 1} = \sqrt5$.
4. Angolo con l'asse $x$, dal prodotto scalare $\vec F \cdot \hat i = |\vec F|\,|\hat i|\cos\alpha$: $\cos\alpha = 2/\sqrt5 \approx 0{,}894$, quindi $\alpha \approx 26{,}6°$.
:::

## Energia potenziale ed equilibrio (anticipazione)
Dalla relazione $F_x = -dU/dx$: dove $U(x)$ ha un minimo o un massimo la derivata è nulla, quindi la **forza è nulla**, e il punto è di equilibrio. Un **minimo** di $U$ è un equilibrio **stabile**, un **massimo** è **instabile**, un tratto costante è **indifferente** (la discussione completa è nella lezione 20).

::: attenzione
Errori tipici:
- dire che il lavoro di una forza conservativa "non dipende né dal punto di partenza né da quello di arrivo": dipende da essi, non dal percorso;
- dire che il lavoro di una forza conservativa è sempre nullo: è nullo solo sui percorsi **chiusi**;
- dimenticare il segno meno in $\vec F = -\nabla U$ e in $L = -\Delta U$;
- pensare di poter definire un'energia potenziale per l'attrito.
:::

::: esame
Le domande aperte del paniere su questa lezione chiedono:
- **dare la definizione di forza conservativa**: il lavoro tra due punti dipende solo dalle posizioni iniziale e finale e non dal percorso; equivalentemente il lavoro su ogni percorso chiuso è nullo, $\oint\vec F \cdot d\vec s = 0$; spiegare perché le due forme sono equivalenti; esempi (peso con $L = mg\Delta y$, molla) e controesempio (attrito, $L = -F_a\ell$); conseguenza: esiste l'energia potenziale con $L = U_A - U_B$ e $\vec F = -\nabla U$;
- **cos'è un campo di forze conservativo**: un campo (stazionario) $\vec F(x, y, z)$ in cui il lavoro per portare un punto da A a B non dipende dal cammino, ovvero è nullo su ogni cammino chiuso; esempi: campo gravitazionale ed elettrostatico; esiste una funzione energia potenziale di cui la forza è meno il gradiente.

Nelle chiuse: l'escursionista (stesso lavoro della gravità su sentieri diversi), quale forza non è conservativa (attrito), definizione di forza conservativa e proprietà del percorso chiuso.
:::

::: sintesi
- Conservativa: lavoro indipendente dal percorso ⇔ lavoro nullo su ogni percorso chiuso.
- Conservative: peso, elastica, gravitazionale, elettrostatica. Non conservative: attrito radente e viscoso, resistenza dell'aria.
- Attrito: $L = -F_a\ell$, dipende dalla lunghezza del percorso, negativo anche su un giro chiuso.
- Campo di forze conservativo: $\vec F(x, y, z)$ stazionario con lavoro indipendente dal cammino.
- Energia potenziale (solo forze conservative): $L_{A\to B} = U_A - U_B = -\Delta U$; definita a meno di una costante.
- $U_{peso} = mgh$, $U_{molla} = \tfrac12 kx^2$; nessuna $U$ per l'attrito.
- Gradiente: $\nabla V \cdot d\vec r = dV$; $\vec F = -\nabla U$, in una dimensione $F = -dU/dx$.
:::

=== 20 dispense
SLIDES: 19, 20
# Lezione 20 — Energia potenziale e conservazione dell'energia meccanica

## Di cosa parla questa lezione
Con le forze conservative e l'energia potenziale (lezione 19) possiamo enunciare uno dei principi più utili della meccanica: la **conservazione dell'energia meccanica**. Se lavorano solo forze conservative, la somma di energia cinetica e potenziale non cambia: questo permette di trovare velocità e altezze senza risolvere le equazioni del moto. Vediamo:
- l'**energia potenziale gravitazionale**: che cos'è e perché si definisce;
- il **principio di conservazione dell'energia meccanica** e la sua derivazione;
- che cosa succede con le **forze non conservative** (attrito): l'energia meccanica cambia esattamente del loro lavoro;
- la **definizione generale di potenza** come rapidità di trasferimento dell'energia;
- il legame tra **energia potenziale ed equilibrio**;
- molti esercizi svolti delle dispense.

## L'energia potenziale gravitazionale
### Perché si definisce
La forza peso è **conservativa**: il suo lavoro da A a B dipende solo dalle quote iniziale e finale, $L = mg\,(y_A - y_B)$, e non dal percorso (lezioni 17 e 19). Questo permette di associare a **ogni quota** un numero, l'energia potenziale, in modo che il lavoro del peso diventi una semplice **differenza**: $L_{A\to B} = U_A - U_B$. Confrontando le due espressioni del lavoro si legge:

$$U = mgy = mgh$$

dove:
- $U$ = energia potenziale gravitazionale (J)
- $m$ = massa (kg)
- $g$ = accelerazione di gravità, $9{,}8\,\mathrm{m/s^2}$
- $h$ (o $y$) = quota rispetto a un livello di riferimento scelto (m), misurata verso l'alto

### Che cos'è
L'energia potenziale gravitazionale è l'energia che un corpo possiede **per la sua posizione** (la quota) nel campo di gravità: è il lavoro che il peso compirebbe se il corpo scendesse fino al livello di riferimento, ed è anche il lavoro che bisogna compiere (contro il peso, a velocità costante) per portarlo dal livello di riferimento alla quota $h$. Un corpo in alto "immagazzina" energia che può restituire scendendo, per esempio trasformandola in energia cinetica (l'acqua di una diga che muove le turbine).

Serve a due cose:
1. scrivere il lavoro del peso semplicemente come $-\Delta U$, senza calcolare integrali lungo la traiettoria;
2. enunciare la **conservazione dell'energia meccanica**, $K + U = $ costante.

### Il livello di riferimento
Lo zero dell'energia potenziale si sceglie **liberamente** (il pavimento, il suolo, il punto più basso della traiettoria...): cambiare il riferimento aggiunge a $U$ la stessa costante in tutti i punti. Ciò che ha significato fisico è solo la **variazione**:

$$\Delta U = mg\,\Delta h$$

L'energia potenziale **aumenta** quando il corpo sale ($\Delta h > 0$) e **diminuisce** quando scende. Con lo zero al suolo, un corpo in una buca ha energia potenziale negativa: non è un problema.

::: esempio
**Calcoli di energia potenziale.**
- Pallina di $100\,\mathrm g$ a $50\,\mathrm{cm}$ dal suolo: $U = 0{,}100 \cdot 9{,}8 \cdot 0{,}50 = 0{,}49\,\mathrm J$. (Con la massa in grammi o l'altezza in centimetri si sbaglia di un fattore 1000 o 100.)
- Cameriere di $90\,\mathrm{kg}$ dal piano terra al quarto piano, piani alti $5\,\mathrm m$: dislivello $4 \cdot 5 = 20\,\mathrm m$; $\Delta U = 90 \cdot 9{,}8 \cdot 20 = 17\,640\,\mathrm J$.
- Corpo di $2\,\mathrm{kg}$ lanciato verso l'alto da $20\,\mathrm m$: la sua energia potenziale aumenta di $490\,\mathrm J$ quando $\Delta h = 490/(2 \cdot 9{,}8) = 490/19{,}6 = 25\,\mathrm m$, cioè alla quota $20 + 25 = 45\,\mathrm m$ dal terreno.
- Per lanciare una palla di $200\,\mathrm g$ fino a $20\,\mathrm m$ di altezza serve almeno l'energia $mgh = 0{,}2 \cdot 9{,}8 \cdot 20 = 39{,}2\,\mathrm J$.
:::

::: esempio
**Controllare il prodotto $mgh$.** Un monitor appoggiato in cima a un muro ha energia potenziale $490\,\mathrm J$. Possibili coppie massa–altezza:
- $49\,\mathrm{kg}$ a $10\,\mathrm m$ darebbero $49 \cdot 9{,}8 \cdot 10 = 4802\,\mathrm J$: no (si è dimenticato $g$);
- un peso di $4{,}9\,\mathrm N$ a $10\,\mathrm m$ darebbe $4{,}9 \cdot 10 = 49\,\mathrm J$: no (il peso è già $mg$);
- $20\,\mathrm{kg}$ a $4{,}9\,\mathrm m$ darebbero $20 \cdot 9{,}8 \cdot 4{,}9 \approx 960\,\mathrm J$: no.

Per esempio $5\,\mathrm{kg}$ a $10\,\mathrm m$ darebbero $490\,\mathrm J$. Bisogna sempre fare il prodotto completo $m \cdot g \cdot h$.
:::

## Lavoro ed energia potenziale: la conservazione dell'energia meccanica
Per una forza conservativa abbiamo **due espressioni** dello stesso lavoro:
- in termini di energia **cinetica** (teorema delle forze vive, valido sempre): $L_{AB} = K_B - K_A$;
- in termini di energia **potenziale** (solo forze conservative): $L_{AB} = U_A - U_B$.

Immaginiamo un corpo di massa $m$, soggetto alla sola forza peso, inizialmente fermo, vincolato da una guida liscia a scendere da A a B. In A ha una certa energia potenziale (dovuta alla quota); in B l'energia potenziale è diminuita (il punto è più in basso) e il corpo ha acquistato velocità: ha trasformato parte dell'energia potenziale in energia cinetica. Uguagliando le due espressioni del lavoro:

1. $K_B - K_A = U_A - U_B$.
2. Porto i termini di A da una parte e quelli di B dall'altra: $K_A + U_A = K_B + U_B$.
3. A e B sono due punti qualsiasi della traiettoria, quindi la somma è la stessa in **tutti** i punti.

$$E = K + U = \text{costante} \qquad \tfrac12 mv_A^2 + U_A = \tfrac12 mv_B^2 + U_B$$

dove:
- $E$ = **energia meccanica** totale (J)
- $K = \tfrac12 mv^2$ = energia cinetica (J)
- $U$ = energia potenziale (J), somma di tutte le energie potenziali presenti (gravitazionale, elastica...)
- A, B = due posizioni (istanti) qualsiasi del moto

**Principio di conservazione dell'energia meccanica:**

> Per un punto materiale che si muove sottoposto alle sole forze di un campo conservativo, l'energia meccanica totale (somma dell'energia cinetica e dell'energia potenziale) resta costante.

Conseguenze:
- l'energia **cambia forma ma non quantità**: se l'energia cinetica diminuisce, la potenziale aumenta della stessa quantità, e viceversa;
- le forze che **non compiono lavoro** (tensione di un filo, reazione di un piano liscio o di una guida senza attrito, forza centripeta) **non disturbano** la conservazione: possono esserci, purché siano perpendicolari al moto;
- il modulo della velocità dipende **solo dalla posizione**: un sasso lanciato in alto ripassa a una certa quota con la stessa velocità (in modulo) in salita e in discesa.

Per la gravità:

$$\tfrac12 mv^2 + mgy = \text{costante} = E$$

Quando un corpo cade, perde energia potenziale e aumenta la sua energia cinetica: l'energia meccanica rimane costante ma si trasforma da una forma all'altra.

Per una massa legata a una molla su un piano orizzontale liscio (sola forza elastica):

$$\tfrac12 mv^2 + \tfrac12 kx^2 = \text{costante} = E$$

Nelle oscillazioni attorno all'equilibrio la massa acquista energia cinetica a spese dell'energia elastica quando si avvicina alla posizione di riposo, e viceversa quando se ne allontana (lezione 15).

## Applicazioni tipiche
### Caduta libera e lancio verticale
Da fermo a quota $h$ fino a quota zero: $mgh = \tfrac12 mv^2$. Lanciato verso l'alto con $v_0$, si ferma all'altezza massima: $\tfrac12 mv_0^2 = mgh_{max}$. La massa si semplifica:

$$v = \sqrt{2gh} \qquad h_{max} = \frac{v_0^2}{2g}$$

dove $v$ = velocità dopo una caduta $h$ partendo da fermo (m/s), $v_0$ = velocità di lancio verso l'alto (m/s), $h_{max}$ = altezza massima sopra il punto di lancio (m).

::: esempio
**Palla da baseball lanciata in alto.** Massa $0{,}2\,\mathrm{kg}$, velocità di lancio $20\,\mathrm{m/s}$.
1. Energia meccanica (zero dell'energia potenziale nel punto di lancio): $E = \tfrac12 \cdot 0{,}2 \cdot 400 = 40\,\mathrm J$. È anche il lavoro compiuto dalla forza della mano nel lancio.
2. L'energia meccanica si conserva: vale $40\,\mathrm J$ **in ogni punto**, anche a metà salita (dove è metà cinetica e metà potenziale: $20\,\mathrm J + 20\,\mathrm J$).
3. Altezza massima: $h = v_0^2/(2g) = 400/19{,}6 \approx 20\,\mathrm m$. Controllo: $mgh = 0{,}2 \cdot 9{,}8 \cdot 20{,}4 = 40\,\mathrm J$.
:::

::: esempio
**Moneta che cade dal terrazzo.** Una moneta cade da ferma da un terrazzo di $19{,}6\,\mathrm m$.
- Il moto è uniformemente accelerato (accelerazione $g$).
- Tempo di caduta: $t = \sqrt{2h/g} = \sqrt{2 \cdot 19{,}6/9{,}8} = \sqrt4 = 2\,\mathrm s$.
- Dopo $0{,}1\,\mathrm s$: $v = gt = 0{,}98 \approx 1\,\mathrm{m/s}$.
- A metà altezza ($9{,}8\,\mathrm m$ di caduta): $v = \sqrt{2 \cdot 9{,}8 \cdot 9{,}8} = 9{,}8\sqrt2 \approx 13{,}9\,\mathrm{m/s}$, non certo $0{,}5\,\mathrm{m/s}$. (All'arrivo $v = \sqrt{2 \cdot 9{,}8 \cdot 19{,}6} = 19{,}6\,\mathrm{m/s}$: a metà altezza la velocità non è la metà, perché cresce con la radice della distanza percorsa.)
:::

### Piano inclinato liscio
Un corpo parte da fermo a quota $h$ e scivola senza attrito su un piano inclinato. La reazione del piano è perpendicolare al moto e non lavora: $mgh = \tfrac12 mv^2$, quindi $v = \sqrt{2gh}$ e $K = mgh$. L'**angolo di inclinazione non conta**: conta solo l'altezza (cambia solo il tempo impiegato).

::: esempio
Blocco di $4\,\mathrm{kg}$, fermo a $h = 3\,\mathrm m$ su un piano inclinato di $30°$ senza attrito (se il testo non fornisce un coefficiente d'attrito si assume il caso ideale).
1. $K = mgh = 4 \cdot 9{,}8 \cdot 3 = 117{,}6\,\mathrm J$.
2. $v = \sqrt{2gh} = \sqrt{2 \cdot 9{,}8 \cdot 3} = \sqrt{58{,}8} \approx 7{,}7\,\mathrm{m/s}$.
3. I $30°$ non servono.
:::

### Pendolo e altalena
Agli estremi dell'oscillazione il corpo è fermo: solo energia potenziale (massima). Nel punto più basso la velocità è massima: energia potenziale minima. Senza attriti, la **differenza di energia potenziale tra un estremo e il punto più basso è uguale all'energia cinetica nel punto più basso**. Il dislivello è $l(1 - \cos\theta_0)$:

$$K_{max} = mgl\,(1 - \cos\theta_0) \qquad v_{max} = \sqrt{2gl\,(1 - \cos\theta_0)}$$

dove $l$ = lunghezza del filo (m), $\theta_0$ = angolo di partenza con la verticale.

::: esempio
Pallina di $6\,\mathrm{kg}$ appesa a un filo di $1\,\mathrm m$, lasciata da ferma con il filo a $60°$ dalla verticale.
1. Dislivello: $l(1 - \cos 60°) = 1 \cdot (1 - 0{,}5) = 0{,}5\,\mathrm m$.
2. $K_{max} = 6 \cdot 9{,}8 \cdot 0{,}5 = 29{,}4\,\mathrm J$.

Errore tipico: usare come dislivello l'intera lunghezza del filo ($1\,\mathrm m$), ottenendo il doppio. La pallina non parte all'altezza del punto di sospensione.
:::

### Molla che lancia un corpo
L'energia elastica della molla compressa diventa energia cinetica del corpo quando la molla torna a riposo (piano liscio):

$$\tfrac12 kx^2 = \tfrac12 mv^2 \qquad\Rightarrow\qquad v = x\sqrt{\frac{k}{m}}$$

::: esempio
**Sfera lanciata da una molla.** Sfera di $50\,\mathrm g$, molla con $k = 40\,\mathrm{N/m}$ compressa di $7\,\mathrm{cm}$.
1. $k/m = 40/0{,}05 = 800\,\mathrm{s^{-2}}$; $\sqrt{800} \approx 28{,}3\,\mathrm{s^{-1}}$.
2. $v = 0{,}07 \cdot 28{,}3 \approx 2\,\mathrm{m/s}$.
:::

::: esempio
**Pallina su una molla schiacciata da una forza.** Una pallina di $150\,\mathrm g$ è appoggiata su una molla compressa di $20\,\mathrm{cm}$ da una forza di $80\,\mathrm N$.
1. Costante elastica: $k = F/x = 80/0{,}20 = 400\,\mathrm{N/m}$.
2. Energia elastica: $U = \tfrac12 \cdot 400 \cdot 0{,}20^2 = 8\,\mathrm J$. (Non $F\,x = 16\,\mathrm J$: la forza della molla non è costante durante la distensione, quindi il lavoro è l'area del triangolo, $\tfrac12 Fx$.)
3. $\tfrac12 \cdot 0{,}15 \cdot v^2 = 8$, quindi $v^2 = 16/0{,}15 \approx 106{,}7$ e $v \approx 10{,}3\,\mathrm{m/s}$.
:::

::: esempio
**Carrello lanciato da una molla su una rampa (esercizio della dispensa).** Un corpo di $50\,\mathrm g$ viene lanciato da una molla con $k = 1000\,\mathrm{N/m}$ compressa di $15\,\mathrm{mm}$ e sale su una rampa liscia. Quota massima?

Si distinguono tre momenti: (1) corpo fermo contro la molla compressa, a quota zero: solo energia elastica; (2) corpo appena staccato dalla molla, ancora a quota zero: solo energia cinetica; (3) corpo fermo alla quota massima: solo energia potenziale gravitazionale. (Nelle fasi intermedie le energie coesistono, ma non serve studiarle.) Senza attriti $E_1 = E_2 = E_3$:
$$\tfrac12 k\,\Delta x^2 = mgh \qquad\Rightarrow\qquad h = \frac{k\,\Delta x^2}{2mg} = \frac{1000 \cdot 0{,}015^2}{2 \cdot 0{,}05 \cdot 9{,}8} = \frac{0{,}225}{0{,}98} \approx 0{,}23\,\mathrm m = 23\,\mathrm{cm}$$
:::

::: esempio
**Blocco che si ferma contro una molla (esercizio della dispensa).** Un blocco di $0{,}40\,\mathrm{kg}$ scivola a $0{,}50\,\mathrm{m/s}$ su un piano liscio e si arresta comprimendo una molla con $k = 750\,\mathrm{N/m}$. Compressione massima?

Il lavoro della molla, $-\tfrac12 kd^2$, è uguale alla variazione di energia cinetica, $0 - \tfrac12 mv^2$ (si ferma):
$$d = v\sqrt{\frac{m}{k}} = 0{,}50\sqrt{\frac{0{,}40}{750}} = 0{,}50 \cdot 0{,}0231 \approx 0{,}0115\,\mathrm m \approx 1{,}2\,\mathrm{cm}$$
:::

## Esercizi svolti sulla conservazione (dalle dispense)

::: esempio
**Sasso lanciato in alto da un'altezza iniziale.** Un sasso viene lanciato verso l'alto da $h_1 = 1{,}50\,\mathrm m$ con $v_1 = 8{,}5\,\mathrm{m/s}$. Agisce solo il peso (conservativo), quindi $\tfrac12 v^2 + gh$ è costante (massa semplificata).

1. Altezza massima (lì $v = 0$): $H = h_1 + \dfrac{v_1^2}{2g} = 1{,}50 + \dfrac{72{,}25}{19{,}6} = 1{,}50 + 3{,}69 \approx 5{,}19\,\mathrm m$.
2. Velocità a $h_2 = 3{,}2\,\mathrm m$: $v_2 = \sqrt{v_1^2 - 2g(h_2 - h_1)} = \sqrt{72{,}25 - 19{,}6 \cdot 1{,}7} = \sqrt{38{,}9} \approx 6{,}2\,\mathrm{m/s}$, sia in salita sia in ricaduta: il modulo della velocità dipende solo dall'altezza.
3. Quota dove $v_3 = 4{,}0\,\mathrm{m/s}$: $h_3 = h_1 + \dfrac{v_1^2 - v_3^2}{2g} = 1{,}50 + \dfrac{72{,}25 - 16}{19{,}6} \approx 1{,}50 + 2{,}87 = 4{,}37\,\mathrm m$.
4. Velocità a terra (energia tutta cinetica): $v = \sqrt{v_1^2 + 2gh_1} = \sqrt{72{,}25 + 29{,}4} = \sqrt{101{,}7} \approx 10{,}1\,\mathrm{m/s}$.
:::

::: esempio
**Sasso che ricade su una molla.** Un sasso di $2{,}4\,\mathrm{kg}$ è lanciato in alto da $h = 1{,}2\,\mathrm m$, raggiunge $H = 5{,}6\,\mathrm m$ e ricade su una molla con $k = 750\,\mathrm{N/m}$ (si trascuri l'altezza della molla compressa).
1. Tra il lancio e il punto più alto: $\tfrac12 mv_0^2 + mgh = mgH$, quindi $v_0 = \sqrt{2g(H - h)} = \sqrt{19{,}6 \cdot 4{,}4} = \sqrt{86{,}2} \approx 9{,}3\,\mathrm{m/s}$.
2. Tra il punto più alto e la massima compressione (quota circa zero, sasso fermo): $mgH = \tfrac12 kx^2$, quindi $x = \sqrt{2mgH/k} = \sqrt{2 \cdot 2{,}4 \cdot 9{,}8 \cdot 5{,}6/750} = \sqrt{0{,}351} \approx 0{,}59\,\mathrm m$.
:::

::: esempio
**Massa che cade su una molla (esercizio della dispensa).** Una massa di $700\,\mathrm g$ è lasciata da ferma a un'altezza $h_0$ sopra una molla con $k = 400\,\mathrm{N/m}$; resta attaccata alla molla e si arresta dopo averla compressa di $19{,}0\,\mathrm{cm}$. Trovare il lavoro (a) della massa sulla molla e (b) della molla sulla massa; (c) $h_0$; (d) la compressione massima se $h_0$ fosse doppia.

(a) La massa trasferisce alla molla l'energia elastica: $L = \tfrac12 k\,\Delta y^2 = \tfrac12 \cdot 400 \cdot 0{,}19^2 = 7{,}2\,\mathrm J$.

(b) Per il terzo principio, la molla compie sulla massa $L = -7{,}2\,\mathrm J$.

(c) La massa scende in tutto di $h_0 + \Delta y$ e alla fine è ferma: tutto il lavoro della gravità diventa energia elastica. $mg\,(h_0 + \Delta y) = 7{,}2\,\mathrm J$, con $mg = 6{,}86\,\mathrm N$: $h_0 + 0{,}19 = 1{,}05$, quindi $h_0 \approx 0{,}86\,\mathrm m$.

(d) Con $2h_0 = 1{,}72\,\mathrm m$: $mg\,(2h_0 + \Delta y) = \tfrac12 k\,\Delta y^2$, cioè $200\,\Delta y^2 - 6{,}86\,\Delta y - 11{,}8 = 0$. Formula risolutiva, prendendo la soluzione positiva:
$$\Delta y = \frac{mg + \sqrt{(mg)^2 + 4mgkh_0}}{k} = \frac{6{,}86 + \sqrt{47{,}1 + 9464}}{400} \approx \frac{6{,}86 + 97{,}5}{400} \approx 0{,}26\,\mathrm m$$
Raddoppiando l'altezza la compressione non raddoppia: cresce meno, perché l'energia elastica va col quadrato della compressione.
:::

::: esempio
**Piano inclinato con molla attaccata.** Un corpo di $4{,}5\,\mathrm{kg}$ è in cima a un piano inclinato liscio alto $h = 4{,}2\,\mathrm m$ e lungo $\ell = 10\,\mathrm m$; viene spinto verso il basso con $v_0 = 12\,\mathrm{m/s}$. È fissato a una molla di lunghezza di riposo nulla, con l'altro capo nel vertice dell'angolo retto del piano (sotto la cima). In fondo al piano ha $v = 2{,}0\,\mathrm{m/s}$. Trovare $k$ e il lavoro della molla.

1. In cima la molla è allungata di $h = 4{,}2\,\mathrm m$; in fondo è allungata della base del piano, $b = \sqrt{\ell^2 - h^2} = \sqrt{100 - 17{,}64} \approx 9{,}08\,\mathrm m$.
2. Conservazione: $\tfrac12 mv_0^2 + mgh + \tfrac12 kh^2 = \tfrac12 mv^2 + \tfrac12 kb^2$.
3. $\tfrac12 k\,(b^2 - h^2) = \tfrac12 m(v_0^2 - v^2) + mgh = \tfrac12 \cdot 4{,}5 \cdot 140 + 4{,}5 \cdot 9{,}8 \cdot 4{,}2 = 315 + 185 = 500\,\mathrm J$.
4. $b^2 - h^2 = 82{,}36 - 17{,}64 = 64{,}72\,\mathrm{m^2}$, quindi $k = 2 \cdot 500/64{,}72 \approx 15{,}5\,\mathrm{N/m}$.
5. Lavoro della molla = energia elastica iniziale meno finale: $L = \tfrac12 k\,(h^2 - b^2) \approx -500\,\mathrm J$.
:::

::: esempio
**Molla alla base di un piano inclinato.** Un corpo di $8{,}52\,\mathrm{kg}$ è alla base di un piano inclinato liscio, appoggiato a una molla con $k = 21{,}5\,\mathrm{N/cm} = 2150\,\mathrm{N/m}$ compressa di $24{,}2\,\mathrm{cm}$.
1. Appena si stacca dalla molla tutta l'energia elastica è diventata cinetica: $\tfrac12 kx^2 = \tfrac12 \cdot 2150 \cdot 0{,}242^2 \approx 63{,}0\,\mathrm J$, quindi $v = \sqrt{2 \cdot 63{,}0/8{,}52} \approx 3{,}85\,\mathrm{m/s}$.
2. Sale lungo il piano finché tutta l'energia è potenziale: $h = 63{,}0/(8{,}52 \cdot 9{,}8) \approx 0{,}75\,\mathrm m$.
:::

::: esempio
**Salto con l'elastico (esercizio della dispensa).** Una ragazza di $61{,}0\,\mathrm{kg}$ salta da un ponte alto $45{,}0\,\mathrm m$ sul fiume. La corda elastica è lunga $25{,}0\,\mathrm m$ a riposo e segue la legge di Hooke con $k = 160\,\mathrm{N/m}$. A che altezza sopra l'acqua si ferma?

Sistema ragazza–elastico–Terra: forza peso ed elastica, entrambe conservative. Nel punto più basso è ferma; sia $d$ l'allungamento della corda, quindi la caduta totale è $25{,}0 + d$.
1. Conservazione: $mg\,(L_0 + d) = \tfrac12 kd^2$, cioè $597{,}8\,(25 + d) = 80\,d^2$.
2. $80\,d^2 - 597{,}8\,d - 14\,945 = 0$, soluzione positiva: $d = \dfrac{597{,}8 + \sqrt{597{,}8^2 + 4 \cdot 80 \cdot 14\,945}}{160} = \dfrac{597{,}8 + 2267}{160} \approx 17{,}9\,\mathrm m$.
3. Caduta totale $\approx 42{,}9\,\mathrm m$; altezza sopra l'acqua $h \approx 45{,}0 - 42{,}9 = 2{,}1\,\mathrm m$.
:::

## Le forze non conservative
Se agiscono **sia forze conservative sia forze non conservative** (per esempio attrito o resistenza del mezzo), il teorema dell'energia cinetica vale comunque, separando i due contributi al lavoro:

1. $L_c + L_{nc} = K_B - K_A$.
2. Per la parte conservativa si usa l'energia potenziale: $L_c = U_A - U_B$.
3. Sostituendo: $U_A - U_B + L_{nc} = K_B - K_A$.
4. Riordinando:

$$L_{nc} = (K_B + U_B) - (K_A + U_A) = \Delta E$$

dove:
- $L_{nc}$ = lavoro delle forze non conservative (J); per l'attrito è negativo
- $E = K + U$ = energia meccanica (J)

> In presenza di forze conservative e non conservative, la variazione dell'energia meccanica è uguale al lavoro svolto (o assorbito) dalle forze non conservative.

Con l'attrito $L_{nc} < 0$, quindi l'energia meccanica **diminuisce**. L'energia "persa" però non sparisce: se consideriamo il sistema **isolato** nel suo complesso, l'energia **totale** si conserva, ma bisogna includere altre forme di energia oltre a quelle meccaniche, per esempio l'**energia termica** sviluppata dall'attrito (il calore), il suono, la deformazione permanente.

::: esempio
**Blocco su piano scabro contro una molla.** Un blocco di $5\,\mathrm{kg}$ è lanciato a $8\,\mathrm{m/s}$ su un piano orizzontale scabro e comprime di $40\,\mathrm{cm}$ una molla con $k = 900\,\mathrm{N/m}$ prima di fermarsi.
1. Energia iniziale (cinetica): $\tfrac12 \cdot 5 \cdot 64 = 160\,\mathrm J$.
2. Energia finale (elastica, blocco fermo): $\tfrac12 \cdot 900 \cdot 0{,}16 = 72\,\mathrm J$.
3. $L_{attr} = 72 - 160 = -88\,\mathrm J$: l'attrito ha dissipato $88\,\mathrm J$.
:::

::: esempio
**Palla che rimbalza.** Una palla di $1\,\mathrm{kg}$ cade da $1\,\mathrm m$ e rimbalza fino a $0{,}5\,\mathrm m$. Nei due punti più alti la palla è ferma, quindi l'energia meccanica è solo potenziale: energia dissipata (nell'urto, soprattutto in calore e deformazione) $= mg\,\Delta h = 1 \cdot 9{,}8 \cdot 0{,}5 \approx 5\,\mathrm J$.
:::

::: esempio
**Sasso in un liquido viscoso.** Un sasso cade in un liquido viscoso e la sua energia potenziale diminuisce di $10\,\mathrm J$. Che cosa succede all'energia cinetica? Con il liquido agisce una forza non conservativa (attrito viscoso) che dissipa una parte di quei $10\,\mathrm J$, e non sappiamo quanta. Quindi **non ci sono elementi sufficienti** per dirlo: l'energia cinetica aumenta di meno di $10\,\mathrm J$, e se il sasso ha già raggiunto la velocità limite resta costante (tutti i $10\,\mathrm J$ vanno in calore). Aumenterebbe di $10\,\mathrm J$ solo senza dissipazione.
:::

::: esempio
**Corpo su piano inclinato, tratto scabro e molla (esercizio della dispensa).** Un punto di $m = 20\,\mathrm g$ scende da fermo lungo un piano inclinato liscio, poi percorre un tratto orizzontale scabro ($\mu = 0{,}1$) e urta una molla ($l_0 = 10\,\mathrm{cm}$, $k = 2\,\mathrm{N/m}$) fissata a una parete distante $d = 40\,\mathrm{cm}$ dalla fine del piano. Da quale altezza $h$ deve partire per arrivare a toccare la parete (comprimendo del tutto la molla)?

1. All'inizio e alla fine il punto è fermo: energia iniziale $mgh$, finale $\tfrac12 kl_0^2$ (molla compressa di tutta la sua lunghezza).
2. L'attrito agisce lungo tutto il tratto orizzontale fino alla parete, lungo $d$: $L_{nc} = -\mu mg\,d$.
3. $\tfrac12 kl_0^2 - mgh = -\mu mg\,d$, quindi $h = \dfrac{\tfrac12 kl_0^2 + \mu mgd}{mg} = \dfrac{0{,}010 + 0{,}1 \cdot 0{,}02 \cdot 9{,}8 \cdot 0{,}4}{0{,}02 \cdot 9{,}8} = \dfrac{0{,}010 + 0{,}00784}{0{,}196} \approx 0{,}091\,\mathrm m = 91\,\mathrm{mm}$.
:::

::: esempio
**Palla lanciata in basso con attrito.** Una palla di $625\,\mathrm g$ è lanciata verso il basso a $2{,}5\,\mathrm{m/s}$; durante la discesa subisce un attrito costante di $2{,}00\,\mathrm N$ e arriva a terra a $12{,}0\,\mathrm{m/s}$.
1. Energia finale = energia iniziale meno il lavoro perso per attrito: $\tfrac12 mv_1^2 = \tfrac12 mv_0^2 + mgh - F_a h$.
2. $h = \dfrac{\tfrac12 m(v_1^2 - v_0^2)}{mg - F_a} = \dfrac{0{,}3125 \cdot (144 - 6{,}25)}{6{,}125 - 2{,}00} = \dfrac{43{,}0}{4{,}125} \approx 10{,}4\,\mathrm m$.
3. Per arrivare a terra a $14{,}0\,\mathrm{m/s}$ dalla stessa altezza: $\tfrac12 mv^2 = \tfrac12 m \cdot 14^2 - (mg - F_a)h = 61{,}25 - 43{,}0 = 18{,}2\,\mathrm J$, quindi $v = \sqrt{2 \cdot 18{,}2/0{,}625} \approx 7{,}6\,\mathrm{m/s}$.
:::

::: esempio
**Vaso che cade davanti a una finestra.** Un vaso di $1{,}9\,\mathrm{kg}$ cade verticalmente; entra nella finestra (alta $h = 1{,}3\,\mathrm m$) a $2{,}4\,\mathrm{m/s}$ ed esce a $5{,}2\,\mathrm{m/s}$. Attrito costante?
1. $\tfrac12 m(v_2^2 - v_1^2) = (mg - F_a)\,h$.
2. $0{,}95 \cdot (27{,}04 - 5{,}76) = 20{,}2\,\mathrm J = (18{,}6 - F_a) \cdot 1{,}3$.
3. $18{,}6 - F_a = 15{,}55$, quindi $F_a \approx 3{,}1\,\mathrm N$.
:::

::: esempio
**Pacco contro una molla con attrito (esercizio della dispensa).** Un pacco di $2{,}0\,\mathrm{kg}$ scivola senza attrito a $4{,}0\,\mathrm{m/s}$ e urta una molla con $k = 10\,000\,\mathrm{N/m}$; dal punto in cui tocca la molla in avanti agisce un attrito di $15{,}0\,\mathrm N$. Di quanto si comprime la molla?

Il sistema pacco–molla–superficie–parete comprende tutte le forze. Bilancio: energia cinetica iniziale = energia elastica + energia dissipata dall'attrito lungo la compressione $d$:
$$\tfrac12 mv^2 = \tfrac12 kd^2 + F_a d \quad\Rightarrow\quad 16 = 5000\,d^2 + 15\,d$$
Soluzione positiva: $d = \dfrac{-15 + \sqrt{225 + 320\,000}}{10\,000} \approx \dfrac{-15 + 566}{10\,000} \approx 0{,}055\,\mathrm m = 5{,}5\,\mathrm{cm}$.
:::

## Il teorema dell'energia cinetica: promemoria
Il lavoro di **tutte** le forze è uguale alla variazione di energia cinetica, $L = \Delta K$, anche quando l'energia meccanica non si conserva. Per il lavoro di una **singola** forza costante basta $L = Fs\cos\theta$, qualunque sia la velocità del corpo.

::: esempio
- Un corpo di $100\,\mathrm g$, fermo, è spinto da una forza di $20\,\mathrm N$ per $1\,\mathrm m$ (unica forza che lavora): $K_{fin} = 20 \cdot 1 = 20\,\mathrm J$. (Il numero $20/0{,}1 = 200$ è l'accelerazione in $\mathrm{m/s^2}$, non un'energia.)
- Un corpo di $2\,\mathrm{kg}$ si muove a $10\,\mathrm{m/s}$; una forza di $6\,\mathrm N$ nel verso del moto agisce mentre percorre $5\,\mathrm m$: $L = 6 \cdot 5 = 30\,\mathrm J$. La velocità iniziale non entra nel calcolo del lavoro (entrerebbe in quello della velocità finale: $K_{fin} = 100 + 30 = 130\,\mathrm J$).
:::

## Definizione generale di potenza
Avevamo definito la potenza in relazione al lavoro (lezione 18). Avendo introdotto l'energia in generale, la potenza istantanea si definisce come la **rapidità con cui un sistema trasferisce energia a un altro sistema, o converte la sua energia da una forma all'altra**:

$$W = \frac{dE}{dt} \qquad W^* = \frac{\Delta E}{\Delta t}$$

dove $W$ = potenza istantanea (W), $W^*$ = potenza media nell'intervallo finito $\Delta t$ (W), $E$ = energia trasferita o trasformata (J).

::: esempio
**Masso tirato su un piano inclinato (esercizio della dispensa).** Un masso di $M = 200\,\mathrm{kg}$ viene issato con una fune a velocità costante $v = 1{,}5\,\mathrm{m/s}$ lungo un piano inclinato liscio lungo $s = 15\,\mathrm m$; dai dati numerici della dispensa la sommità è a $h = 12\,\mathrm m$.
1. Velocità costante: il lavoro del motore diventa tutto energia potenziale, $L = Mgh = 200 \cdot 9{,}81 \cdot 12 \approx 2{,}35 \cdot 10^4\,\mathrm J$.
2. Tempo: $\Delta t = s/v = 15/1{,}5 = 10\,\mathrm s$.
3. $P = L/\Delta t \approx 2{,}35 \cdot 10^3\,\mathrm W = 2{,}35\,\mathrm{kW}$.

Verifica con $P = Fv$: la forza è la componente del peso lungo il piano, $Mg\sin\alpha$ con $\sin\alpha = 12/15 = 0{,}8$: $P = 200 \cdot 9{,}81 \cdot 0{,}8 \cdot 1{,}5 \approx 2354\,\mathrm W$. (Nella dispensa il risultato è scritto con unità errate: è un lavoro in J e una potenza in kW.)
:::

## Equilibrio ed energia potenziale
Per una forza conservativa l'energia potenziale è una funzione della posizione, $U(x, y, z)$. Limitiamoci a una dimensione e immaginiamo il grafico di $U(x)$ come il profilo di una collina su cui rotola una pallina.

In un punto A di **minimo** di $U$ la derivata è nulla, quindi (da $F_x = -dU/dx$) anche la forza è nulla: A è un **punto di equilibrio**. Se il punto si sposta un poco a destra di A, la derivata è positiva (la curva sale), quindi la forza è **negativa**: punta verso sinistra, cioè di nuovo verso A. Se si sposta a sinistra, la derivata è negativa e la forza positiva: di nuovo verso A. La forza riporta sempre il punto verso A: **un minimo relativo dell'energia potenziale è un punto di equilibrio stabile**.

Analogamente, in un **massimo** la forza è nulla, ma spostandosi da una parte o dall'altra la forza allontana il punto: **un massimo dell'energia potenziale è un punto di equilibrio instabile**. Dove $U$ è **costante** (tratto piatto) la forza è nulla ovunque: equilibrio **indifferente**. Le stesse relazioni si estendono ai casi in più dimensioni.

| $U(x)$ nel punto | Forza vicino al punto | Equilibrio | Immagine |
|---|---|---|---|
| minimo | riporta verso il punto | stabile | pallina sul fondo di una valle |
| massimo | allontana dal punto | instabile | pallina in cima a una collina |
| costante | nulla | indifferente | pallina su un piano |

::: attenzione
Nella dispensa, nella frase sul minimo dell'energia potenziale, compare per un refuso la parola "instabile": dal ragionamento che la precede (la forza riporta il punto verso A) è chiaro che il **minimo** è un equilibrio **stabile**, mentre il **massimo** è instabile.
:::

Vicino a un minimo $U(x)$ ha forma approssimativamente parabolica, $U \approx \tfrac12 c\,(x - x_0)^2$, e quindi la forza è $-c\,(x - x_0)$: piccole oscillazioni attorno a un equilibrio stabile sono **armoniche** (lezione 15).

## Azione e reazione nel rimbalzo
Quando una palla urta il pavimento, palla e pavimento si scambiano forze **uguali e opposte** (terzo principio): la palla esercita una forza sul pavimento e il pavimento reagisce sulla palla con una forza uguale e contraria. È questa **reazione del pavimento** a far rimbalzare la palla. Queste forze però **non** sono uguali al peso della palla: durante l'urto, che dura pochissimo, sono molto più grandi (servono a invertire la velocità in un tempo brevissimo). Per una palla di peso $2\,\mathrm N$, dire che "azione e reazione valgono $2\,\mathrm N$" durante l'urto è sbagliato.

## Esercizio di ripasso: masse collegate su un piano inclinato
::: esempio
**Equilibrio con attrito statico (esercizio della dispensa).** Una massa $m = 80\,\mathrm g$ è su un piano inclinato di $30°$, collegata da una fune che passa per una carrucola a una massa $M = 50\,\mathrm g$ appesa. Il sistema è in equilibrio. Trovare il minimo coefficiente di attrito statico e la tensione della fune.

1. Prima senza attrito, per capire verso dove tenderebbe a muoversi il sistema. Con la convenzione: positivo verso l'alto per $M$ e verso il basso lungo il piano per $m$ (la fune li lega: se $M$ sale, $m$ scende):
   - $M$: $T - Mg = Ma$;
   - $m$: $mg\sin 30° - T = ma$.
2. Sommando si elimina $T$: $a = \dfrac{mg\sin 30° - Mg}{m + M} = \dfrac{0{,}392 - 0{,}49}{0{,}13} < 0$. Il segno negativo dice che, senza attrito, $m$ salirebbe lungo il piano e $M$ scenderebbe.
3. Quindi l'attrito statico su $m$ è diretto **verso il basso** lungo il piano (opposto alla tendenza al moto). All'equilibrio $a = 0$:
   - $M$: $T = Mg = 0{,}05 \cdot 9{,}8 = 0{,}49\,\mathrm N$;
   - $m$: $T = mg\sin 30° + f_s$, quindi $f_s = 0{,}49 - 0{,}392 = 0{,}098\,\mathrm N$.
4. Il minimo coefficiente è quello per cui l'attrito necessario è proprio il massimo disponibile: $f_s = \mu_s\,mg\cos 30°$, quindi $\mu_s = \dfrac{0{,}098}{0{,}08 \cdot 9{,}8 \cdot 0{,}866} = \dfrac{0{,}098}{0{,}679} \approx 0{,}14$.
:::

## Ripasso: lavoro, energia, conservazione
Riassumendo il percorso delle lezioni 17–20, come nel ripasso della dispensa:
- il lavoro della forza da A a B è $\int_A^B \vec F \cdot d\vec s$ e l'energia cinetica è $\tfrac12 mv^2$;
- teorema dell'energia cinetica: $L_{AB} = K_B - K_A$ (tutte le forze);
- per le forze conservative $L_{AB} = V_B - V_A = U_A - U_B$, con $V$ potenziale e $U = -V$ energia potenziale; in generale il lavoro dipende anche dalla traiettoria, se non ne dipende la forza è conservativa;
- con sole forze conservative $E = K + U$ è costante (conservazione dell'energia meccanica);
- con anche forze non conservative $L_{nc} = E_f - E_i$.

::: attenzione
Errori tipici:
- applicare la conservazione dell'energia meccanica quando c'è attrito o resistenza del mezzo: in quel caso $\Delta E = L_{nc}$;
- pensare che senza forze dissipative l'energia cinetica non possa diminuire: può diminuire, ma allora l'energia potenziale **cresce** della stessa quantità (palla che sale);
- usare come dislivello del pendolo la lunghezza del filo invece di $l(1 - \cos\theta_0)$;
- dimenticare $g$ in $mgh$ o le conversioni (g → kg, cm → m);
- calcolare l'energia di una molla compressa come $F\,x$ invece di $\tfrac12 kx^2 = \tfrac12 Fx$;
- dire che a metà altezza di una caduta la velocità è metà di quella finale: è $1/\sqrt2$ di quella finale.
:::

::: esame
La domanda aperta del paniere chiede **cos'è l'energia potenziale gravitazionale e perché viene definita**. Una risposta completa:
1. il peso è una forza **conservativa**: il suo lavoro tra A e B è $mg(y_A - y_B)$, dipende solo dalle quote e non dal percorso;
2. si può quindi associare a ogni quota una funzione $U = mgh$ (rispetto a uno zero scelto liberamente) tale che $L_{A\to B} = U_A - U_B = -\Delta U$: è l'energia che il corpo possiede per la sua posizione, uguale al lavoro necessario per portarlo a quella quota;
3. serve a calcolare il lavoro del peso come differenza, senza integrali, e soprattutto a scrivere la **conservazione dell'energia meccanica** $\tfrac12 mv^2 + mgh = $ costante, da cui $v = \sqrt{2gh}$;
4. conta solo la variazione $\Delta U = mg\Delta h$; con forze dissipative $\Delta E = L_{nc}$.

Nelle chiuse: calcoli di $mgh$ con le conversioni; conservazione nel lancio verticale, nella caduta, nel piano inclinato, nel pendolo e con le molle; energia dissipata dall'attrito; il caso del liquido viscoso (elementi insufficienti); definizione di forza conservativa (lavoro nullo su un percorso chiuso); terzo principio nel rimbalzo.
:::

::: sintesi
- $U_{peso} = mgh$ rispetto a uno zero scelto; esiste perché il peso è conservativo; conta solo $\Delta U = mg\Delta h$.
- Dal confronto $L = K_B - K_A = U_A - U_B$: con sole forze conservative $E = K + U$ è costante.
- Caduta: $v = \sqrt{2gh}$; lancio: $h_{max} = v_0^2/2g$; pendolo: $K_{max} = mgl(1 - \cos\theta_0)$; molla: $v = x\sqrt{k/m}$.
- Con forze non conservative: $L_{nc} = \Delta E$ (negativo per l'attrito); l'energia persa diventa calore, l'energia totale del sistema isolato si conserva.
- Potenza in generale: $W = dE/dt$, media $\Delta E/\Delta t$.
- Minimo di $U$ = equilibrio stabile, massimo = instabile, tratto costante = indifferente.
:::

