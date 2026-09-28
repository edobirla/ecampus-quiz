=== 62 dispense
# Lezione 62 — Forze magnetiche su magneti e spire

## Ago magnetico in un campo

Un ago magnetico in un campo uniforme non viene spinto: viene solo ruotato. Sul polo nord e sul polo sud agiscono due forze uguali e opposte. Le due forze non stanno sulla stessa retta: formano una **coppia di forze**. La coppia orienta l'ago lungo le linee del campo. La forza risultante è nulla. Una spira percorsa da corrente si comporta allo stesso modo.

## Forza su un filo percorso da corrente

Una corrente è fatta di cariche in moto. Il campo magnetico spinge ogni carica con la forza di Lorentz. Le cariche trasmettono questa spinta al reticolo del conduttore, quindi al filo intero.

La forza su un tratto piccolissimo di filo è la **seconda legge elementare di Laplace**:
$$d\vec F = i\,d\vec s \times \vec B$$
dove:
- $d\vec F$ = forza sul tratto di filo (N);
- $i$ = intensità di corrente (A);
- $d\vec s$ = tratto di filo, orientato come la corrente (m);
- $\vec B$ = campo magnetico (T).

Per un filo rettilineo lungo $L$ in un campo uniforme:
$$\vec F = i\vec L \times \vec B \qquad F = BiL\sin\theta$$
dove:
- $\vec L$ = vettore lungo quanto il filo, nel verso della corrente (m);
- $\theta$ = angolo tra filo e campo.

La forza è perpendicolare sia al filo sia al campo. È massima se filo e campo sono perpendicolari. È nulla se sono paralleli.

::: esempio
Un filo di 0,5 m porta 2 A, perpendicolare a un campo di 0,4 T. La forza vale $F = 0{,}4 \cdot 2 \cdot 0{,}5 = 0{,}4\,\mathrm{N}$.
:::

## Filo curvo e circuito chiuso

Un filo piano di forma qualsiasi, tra gli estremi A e B, subisce la stessa forza di un filo dritto da A a B:
$$\vec F = i\,\overrightarrow{AB} \times \vec B$$
Conta solo il vettore che unisce gli estremi, non il percorso.

Conseguenza: in un circuito chiuso gli estremi coincidono, quindi $\overrightarrow{AB} = 0$. In un campo uniforme **la forza totale su un circuito chiuso è nulla**. Il circuito non trasla, ma può ruotare.

## Momento torcente su una spira

Prendi una spira rettangolare di lati $a$ e $b$, percorsa da corrente $i$, in un campo uniforme $\vec B$. Chiama $\theta$ l'angolo tra il campo e la normale alla spira.
- Su due lati opposti agiscono forze uguali e opposte sulla stessa retta: si annullano e non fanno ruotare.
- Sugli altri due lati agiscono forze $F = iaB$ uguali e opposte, ma su rette diverse: formano una coppia con braccio $b\sin\theta$.

Il momento della coppia vale:
$$M = iaB\,b\sin\theta = iSB\sin\theta$$
dove $S = ab$ è l'area della spira (m²) e $M$ è in N·m.

## Momento magnetico

Il **momento magnetico** di una spira piana riassume corrente e geometria:
$$\vec m = iS\,\hat u_n$$
dove:
- $\vec m$ = momento magnetico (A·m²);
- $i$ = corrente (A);
- $S$ = area della spira (m²);
- $\hat u_n$ = versore normale alla spira. Il verso segue la regola della mano destra: le dita girano come la corrente, il pollice indica $\hat u_n$.

Con $N$ spire avvolte strette (una bobina): $\vec m = NiS\,\hat u_n$.

Il momento torcente in un campo uniforme vale, per qualunque spira piana:
$$\vec M = \vec m \times \vec B \qquad M = NiSB\sin\theta$$
Quindi il momento dipende da **corrente, area, campo e orientazione** della spira.

La spira ruota finché $\vec m$ si allinea a $\vec B$. È il principio del motore elettrico e del galvanometro.

::: esempio
Spira quadrata di lato 20 cm ($S = 0{,}04\,\mathrm{m^2}$), corrente 2 A, campo 4 T.
- Campo parallelo al piano della spira ($\theta = 90°$): $M = 2 \cdot 0{,}04 \cdot 4 = 0{,}32\,\mathrm{N\,m}$, il massimo.
- Campo perpendicolare al piano della spira ($\theta = 0$): $\vec m$ è parallelo a $\vec B$, quindi $M = 0$.
:::

::: attenzione
"Campo perpendicolare alla superficie" vuol dire campo parallelo alla normale, cioè $\theta = 0$. Il momento è **nullo**, non massimo.
:::

## Equilibrio e oscillazioni

Il momento si annulla in due posizioni:
- $\theta = 0$ ($\vec m$ concorde a $\vec B$): equilibrio **stabile**;
- $\theta = \pi$ ($\vec m$ opposto a $\vec B$): equilibrio **instabile**. Basta una piccola spinta e la spira si gira.

Spostata di poco dalla posizione stabile, la spira oscilla come un pendolo, con pulsazione:
$$\omega = \sqrt{\frac{mB}{I}}$$
dove $I$ è il momento d'inerzia della spira (kg·m²) e $\omega$ è in rad/s.

## Energia del dipolo magnetico

Una spira in un campo si comporta come un dipolo elettrico in un campo elettrico. Per questo si chiama **dipolo magnetico**. La sua energia potenziale è:
$$U = -\vec m \cdot \vec B = -mB\cos\theta$$
dove $U$ è in J. L'energia è minima nell'equilibrio stabile ($\theta = 0$) e massima in quello instabile ($\theta = \pi$). Per il dipolo elettrico vale l'analoga $U = -\vec p \cdot \vec E$.

## Effetto Hall

In una lastrina percorsa da corrente, immersa in un campo perpendicolare, la forza di Lorentz spinge le cariche verso un lato. Le cariche si accumulano sui due bordi. Tra i bordi nasce una tensione, detta **tensione di Hall**. Il suo segno rivela il segno dei portatori di carica. Serve anche a misurare i campi magnetici (sonde di Hall).

::: esame
Chiedono spesso da cosa dipende il momento su una spira (corrente, area, campo, orientazione) e che cosa succede a un ago o a una spira in un campo uniforme (coppia, nessuna forza risultante).
:::

::: sintesi
- Ago o spira in campo uniforme: solo una coppia di forze, forza risultante nulla.
- Filo: $\vec F = i\vec L \times \vec B$, $F = BiL\sin\theta$; circuito chiuso in campo uniforme: $\vec F = 0$.
- Momento magnetico: $\vec m = NiS\,\hat u_n$ (A·m²).
- Momento torcente: $\vec M = \vec m \times \vec B$, $M = NiSB\sin\theta$; nullo se il campo è perpendicolare alla spira.
- Energia: $U = -\vec m \cdot \vec B$; equilibrio stabile con $\vec m$ parallelo a $\vec B$.
:::

=== 63 dispense
# Lezione 63 — Campo magnetico generato da correnti (Biot-Savart)

## Le correnti generano campi magnetici

Ogni corrente crea un campo magnetico attorno a sé. Lo mostrò Oersted: un filo percorso da corrente devia l'ago di una **bussola** vicina. Quindi una bussola basta per accorgersi che in un filo passa corrente.

## Prima legge elementare di Laplace

Un tratto piccolissimo di filo crea un campo piccolissimo:
$$d\vec B = \frac{\mu_0}{4\pi}\,\frac{i\,d\vec l \times \hat u_r}{r^2}$$
dove:
- $d\vec B$ = campo prodotto dal tratto (T);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$ = permeabilità magnetica del vuoto;
- $i$ = corrente (A);
- $d\vec l$ = tratto di filo, nel verso della corrente (m);
- $\hat u_r$ = versore dal tratto di filo al punto;
- $r$ = distanza tra tratto e punto (m).

Il campo cala con il quadrato della distanza, come il campo di una carica. Però è perpendicolare sia al filo sia a $\hat u_r$.

Per un circuito intero si sommano (integrano) tutti i contributi. È la **legge di Ampère-Laplace**:
$$\vec B = \oint \frac{\mu_0}{4\pi}\,\frac{i\,d\vec l \times \hat u_r}{r^2}$$

Anche una sola carica in moto crea un campo:
$$\vec B = \frac{\mu_0}{4\pi}\,\frac{q\,\vec v \times \hat u_r}{r^2}$$
dove $q$ è la carica (C) e $\vec v$ la sua velocità (m/s).

## Filo rettilineo indefinito: legge di Biot-Savart

Integrando la legge di Laplace lungo un filo dritto molto lungo si ottiene la **legge di Biot-Savart**:
$$B = \frac{\mu_0\,i}{2\pi r}$$
dove:
- $B$ = modulo del campo (T);
- $i$ = corrente nel filo (A);
- $r$ = distanza dal filo (m).

Cosa dice:
- $B$ è **proporzionale alla corrente** (non al suo quadrato).
- $B$ è **inversamente proporzionale alla distanza** (non al suo quadrato).
- Le linee di campo sono **circonferenze concentriche** al filo.
- Queste circonferenze stanno in **piani perpendicolari al filo**.
- Il verso segue la mano destra: pollice nel verso della corrente, le dita chiuse indicano il verso del campo.

Per un filo finito lungo $2L$, nel piano che passa per il suo centro: $B = \dfrac{\mu_0 i}{2\pi r}\,\dfrac{L}{\sqrt{L^2 + r^2}}$. Se $L$ diventa infinito, si ritrova Biot-Savart.

::: esempio
A 2,4 cm da un filo il campo vale 16 µT. La corrente è:
$$i = \frac{2\pi r B}{\mu_0} = \frac{2\pi \cdot 0{,}024 \cdot 16 \cdot 10^{-6}}{4\pi \cdot 10^{-7}} \approx 1{,}92\,\mathrm{A}$$
:::

## Spira circolare

Una spira circolare di raggio $R$ porta una corrente $i$. Sul suo asse, a distanza $x$ dal centro, il campo è diretto lungo l'asse e vale:
$$B(x) = \frac{\mu_0\,i}{2}\,\frac{R^2}{(x^2 + R^2)^{3/2}}$$
dove $R$ e $x$ sono in m. Il verso segue la mano destra: dita come la corrente, pollice come il campo.

- Il verso è lo stesso in tutti i punti dell'asse.
- Il campo è **massimo al centro** ($x = 0$): $B = \dfrac{\mu_0 i}{2R}$.
- Allontanandosi il campo cala. Lontano cala come $1/x^3$, come il campo di un dipolo.

Per questo una spira è un **dipolo magnetico**. Le sue linee di campo somigliano a quelle di un dipolo elettrico. Differenza importante: le linee magnetiche sono **sempre chiuse**. Non partono e non finiscono in nessun punto.

## Forza tra due fili paralleli

Ogni filo sta nel campo creato dall'altro, quindi subisce una forza. Per due fili paralleli a distanza $d$, la forza per unità di lunghezza vale:
$$\frac{F}{l} = \frac{\mu_0\,i_1 i_2}{2\pi d}$$
dove:
- $F/l$ = forza per metro di filo (N/m);
- $i_1, i_2$ = correnti nei fili (A);
- $d$ = distanza tra i fili (m).

La forza è **perpendicolare ai fili**:
- correnti **nello stesso verso**: i fili si **attraggono**;
- correnti **in verso opposto**: i fili si **respingono**.

Per il terzo principio, i due fili subiscono forze uguali e opposte.

Questa formula ha dato la definizione storica dell'ampere. Due fili a 1 m, con 1 A ciascuno, si attraggono con $2 \cdot 10^{-7}\,\mathrm{N}$ per metro.

::: esempio
Una carica positiva viaggia parallela a un filo, nello stesso verso della corrente. Si accende la corrente. La carica in moto equivale a una piccola corrente concorde con quella del filo. Correnti concordi si attraggono: la carica viene **deviata verso il filo**.
:::

::: esempio
Un elettrone a 5 cm da un filo con 50 A, velocità $10^7\,\mathrm{m/s}$ perpendicolare al campo. Il campo è $B = \dfrac{4\pi \cdot 10^{-7} \cdot 50}{2\pi \cdot 0{,}05} = 2 \cdot 10^{-4}\,\mathrm{T}$. La forza è $F = evB = 1{,}6 \cdot 10^{-19} \cdot 10^7 \cdot 2 \cdot 10^{-4} = 3{,}2 \cdot 10^{-16}\,\mathrm{N}$. Se la velocità è parallela al campo, la forza è zero.
:::

## Richiamo: forze su fili e spire

Il paniere di questa lezione chiede anche le forze subite dalle correnti:
- tratto di filo rettilineo: $\vec F = i\vec L \times \vec B$, perpendicolare a filo e campo;
- circuito chiuso in campo uniforme: forza totale nulla;
- spira piana: momento magnetico $\vec m = iS\,\hat u_n$ (A·m²) e momento torcente $\vec M = \vec m \times \vec B$, cioè $M = iSB\sin\theta$.

::: esempio
Spira quadrata di lato 20 cm, corrente 2 mA, campo 0,5 T **perpendicolare alla superficie**. Il campo è parallelo a $\vec m$, quindi $\sin\theta = 0$ e il momento è $0\,\mathrm{N\,m}$.
:::

::: attenzione
Errore tipico: pensare che $B$ del filo dipenda da $i^2$ o da $1/r^2$. Per il filo indefinito $B \propto i$ e $B \propto 1/r$.
:::

::: sintesi
- Laplace: $d\vec B = \dfrac{\mu_0}{4\pi}\dfrac{i\,d\vec l \times \hat u_r}{r^2}$, con $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$.
- Filo indefinito (Biot-Savart): $B = \mu_0 i/(2\pi r)$; linee circolari in piani perpendicolari al filo.
- Spira: sull'asse $B = \dfrac{\mu_0 i R^2}{2(x^2+R^2)^{3/2}}$, massimo al centro $\mu_0 i/(2R)$.
- Fili paralleli: $F/l = \mu_0 i_1 i_2/(2\pi d)$; concordi si attraggono, opposti si respingono.
- Una bussola rivela la corrente in un filo (Oersted).
:::

=== 64 dispense
# Lezione 64 — Legge di Ampère e solenoide

## Correnti concatenate

Una corrente è **concatenata** con una linea chiusa se la linea le gira attorno. In pratica: la corrente attraversa qualsiasi superficie che ha la linea come bordo. Se restringi la linea, prima o poi tocchi il filo. Una corrente che passa fuori dalla linea non è concatenata.

## Teorema di Ampère

La circuitazione del campo magnetico lungo una linea chiusa dipende solo dalle correnti concatenate:
$$\oint_\gamma \vec B \cdot d\vec l = \mu_0 \sum i_{conc}$$
dove:
- $\oint_\gamma \vec B \cdot d\vec l$ = circuitazione di $\vec B$ lungo la linea chiusa $\gamma$ (T·m);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$;
- $\sum i_{conc}$ = somma algebrica delle correnti concatenate (A).

Regole per i segni:
- una corrente è positiva se avanza come una vite destrorsa che gira nel verso di percorrenza della linea;
- nel verso opposto è negativa;
- se una corrente attraversa la superficie più volte (per esempio una bobina), conta una volta per ogni passaggio.

Le correnti non concatenate danno contributo nullo. Il risultato non dipende dalla forma della linea.

Perché funziona, in breve:
1. Attorno a un filo, $B = \mu_0 i/(2\pi r)$ ed è tangente alle circonferenze.
2. Il prodotto $\vec B \cdot d\vec l$ vale $\dfrac{\mu_0 i}{2\pi}\,d\varphi$, con $d\varphi$ angolo visto dal filo.
3. Se la linea gira attorno al filo, gli angoli sommano $2\pi$: circuitazione $= \mu_0 i$. Se non gira attorno, gli angoli si compensano: circuitazione $= 0$.

La circuitazione di $\vec B$ in generale non è zero. Quindi **il campo magnetico non è conservativo**. Il campo elettrostatico invece ha circuitazione sempre nulla.

::: attenzione
"La circuitazione del campo elettrostatico è nulla" è vero, ma non è la legge di Ampère. La legge di Ampère riguarda il campo **magnetico** e dice che la sua circuitazione vale $\mu_0$ per le correnti concatenate.
:::

## Forma locale

Con il teorema di Stokes la circuitazione diventa un flusso del rotore. Si ottiene la legge in forma locale:
$$\nabla \times \vec B = \mu_0\,\vec j$$
dove $\vec j$ è la densità di corrente (A/m²). Dove c'è corrente, il campo magnetico "gira".

## Uso pratico: filo rettilineo

Ampère è utile quando c'è simmetria, come Gauss per il campo elettrico. Per un filo indefinito le linee di $\vec B$ sono circonferenze con modulo costante. Scegli come linea una circonferenza di raggio $r$:
$$B \cdot 2\pi r = \mu_0 i \quad\Rightarrow\quad B = \frac{\mu_0 i}{2\pi r}$$
È di nuovo Biot-Savart, trovata in una riga.

Dentro un filo di raggio $R$ con corrente uniforme, la linea concatena solo una parte della corrente, $i\,r^2/R^2$. Risultato:
$$B = \frac{\mu_0\,i\,r}{2\pi R^2} \quad (r < R)$$
Il campo cresce linearmente dal centro fino alla superficie. Fuori cala come $1/r$.

## Solenoide rettilineo

Un **solenoide** è un filo avvolto a elica, con spire molto fitte. Per un solenoide molto lungo (ideale):
- dentro, il campo è **uniforme** e **parallelo all'asse**;
- fuori, il campo è **praticamente nullo**.

Il campo interno vale:
$$B = \mu_0\,n\,i \qquad n = \frac{N}{l}$$
dove:
- $B$ = campo interno (T);
- $n$ = numero di spire per unità di lunghezza (spire/m);
- $N$ = numero totale di spire;
- $l$ = lunghezza del solenoide (m);
- $i$ = corrente (A).

Come si ricava con Ampère, a passi:
1. Scegli un rettangolo con un lato lungo $h$ dentro il solenoide, parallelo all'asse, e il lato opposto fuori.
2. Fuori $B = 0$. Sui lati corti $\vec B$ è perpendicolare al percorso. Resta solo il lato interno: circuitazione $= Bh$.
3. Il rettangolo concatena $nh$ spire, ognuna con corrente $i$: totale $nhi$.
4. Ampère: $Bh = \mu_0 n h i$, quindi $B = \mu_0 n i$.

Il campo **non dipende dal raggio** del solenoide né dalla posizione nella sezione. Dipende da $n$, da $i$ e dal materiale nel nucleo. Con un nucleo di permeabilità relativa $\mu_r$:
$$B = \mu_0\,\mu_r\,n\,i$$
Con un nucleo di ferro ($\mu_r$ molto grande) si ottiene un elettromagnete. Un solenoide si comporta come un magnete a barra.

::: esempio
Solenoide lungo 10 cm, 600 spire, 20 A. Allora $n = 600/0{,}1 = 6000\,\mathrm{spire/m}$ e
$$B = 4\pi \cdot 10^{-7} \cdot 6000 \cdot 20 \approx 0{,}151\,\mathrm{T} = 151\,\mathrm{mT}$$
Raddoppiando $n$ a parità di corrente, $B$ raddoppia.
:::

## Solenoide toroidale

Un toroide è un solenoide chiuso ad anello ("a ciambella"). Come linea si prende una circonferenza di raggio $r$ dentro gli avvolgimenti:
$$B \cdot 2\pi r = \mu_0 N i \quad\Rightarrow\quad B = \frac{\mu_0 N i}{2\pi r}$$
Fuori dal toroide il campo è nullo. Se il toroide è sottile, $N/(2\pi r) = n$ e si ritrova $B = \mu_0 n i$.

::: sintesi
- Ampère: $\oint \vec B \cdot d\vec l = \mu_0 \sum i_{conc}$; il campo magnetico non è conservativo.
- Forma locale: $\nabla \times \vec B = \mu_0 \vec j$.
- Filo: $B = \mu_0 i/(2\pi r)$ fuori; dentro cresce come $r$.
- Solenoide ideale: $B = \mu_0 n i$ (con nucleo $\mu_0\mu_r n i$), uniforme dentro, nullo fuori, indipendente dal raggio.
- Toroide: $B = \mu_0 N i/(2\pi r)$.
:::

=== 65
# Lezione 65 — Flusso del campo magnetico

## Che cos'è il flusso magnetico

Il flusso magnetico misura quanto campo attraversa una superficie. Per una superficie piana in un campo uniforme:
$$\Phi_B = \vec B \cdot \vec S = BS\cos\theta$$
dove:
- $\Phi_B$ = flusso magnetico, in weber ($1\,\mathrm{Wb} = 1\,\mathrm{T\,m^2}$);
- $B$ = modulo del campo (T);
- $S$ = area della superficie (m²);
- $\theta$ = angolo tra il campo e la normale alla superficie.

Per una superficie qualsiasi o un campo non uniforme si somma su tutti i pezzetti:
$$\Phi_B = \int_S \vec B \cdot d\vec S$$

- Campo perpendicolare alla superficie ($\theta = 0$): flusso massimo, $\Phi = BS$.
- Campo parallelo alla superficie ($\theta = 90°$): flusso **nullo**.
- $\theta > 90°$: flusso negativo.

::: esempio
Una spira di 0,2 m² è attraversata perpendicolarmente da un campo di 0,5 T: $\Phi = 0{,}5 \cdot 0{,}2 \cdot \cos 0° = 0{,}1\,\mathrm{Wb}$. Se la ruoti finché è parallela al campo, $\cos 90° = 0$ e il flusso diventa zero.
:::

## Come si fa cambiare il flusso

Dalla formula $\Phi = BS\cos\theta$, il flusso cambia se cambia:
- l'**intensità** del campo $B$;
- l'**area** $S$ della superficie;
- l'**orientamento** $\theta$ della superficie rispetto alle linee di campo.

::: attenzione
La rapidità non c'entra con il fatto che il flusso cambi. Una variazione lenta o veloce del campo cambia comunque il flusso. La rapidità conta solo per quanto è grande la f.e.m. indotta (lezione su Faraday).
:::

## Teorema di Gauss per il magnetismo

Il flusso di $\vec B$ attraverso **qualsiasi superficie chiusa** è sempre zero:
$$\oint_S \vec B \cdot d\vec S = 0$$

Perché: le linee del campo magnetico sono sempre chiuse. Ogni linea che entra in una superficie chiusa prima o poi ne esce. Quindi il flusso entrante e quello uscente si compensano.

Significato fisico: **non esistono monopoli magnetici**. Non si può isolare un polo nord da solo. Se spezzi una calamita, ottieni due calamite, ognuna con nord e sud.

Confronto con il campo elettrico: il flusso di $\vec E$ attraverso una superficie chiusa vale $Q/\varepsilon_0$. Non è zero, perché esistono cariche isolate da cui le linee partono.

In forma locale: $\nabla \cdot \vec B = 0$. Il campo magnetico non ha sorgenti puntiformi.

::: attenzione
Il flusso è nullo per superfici **chiuse**. Attraverso una superficie **aperta** (per esempio quella di una spira) il flusso in genere non è zero.
:::

## Flusso concatenato con un circuito

Il flusso attraverso una superficie che ha come bordo un circuito si chiama **flusso concatenato** con il circuito. Grazie a Gauss, non importa quale superficie scegli: basta che abbia lo stesso bordo. Due superfici con lo stesso bordo formano insieme una superficie chiusa, dove il flusso totale è zero.

Per una bobina di $N$ spire uguali il flusso concatenato è $N$ volte quello di una spira: $\Phi = NBS\cos\theta$.

Le variazioni del flusso concatenato generano correnti indotte nel circuito (legge di Faraday-Neumann-Lenz).

::: sintesi
- $\Phi_B = BS\cos\theta$, in weber (T·m²).
- Il flusso cambia se cambiano intensità del campo, area o orientamento.
- Superficie parallela al campo: flusso nullo.
- Gauss magnetico: $\oint \vec B \cdot d\vec S = 0$ per ogni superficie chiusa.
- Significato: non esistono monopoli magnetici; le linee di $\vec B$ sono chiuse.
:::

=== 66
# Lezione 66 — Proprietà magnetiche della materia

## La materia si magnetizza

Ogni materiale posto in un campo magnetico si **magnetizza**. Gli atomi contengono elettroni che girano e hanno spin. Si comportano come piccole spire, cioè piccoli dipoli magnetici. Il campo esterno li orienta, oppure ne crea di nuovi. Il materiale produce così un proprio campo, che si somma a quello esterno.

## Grandezze

La **magnetizzazione** $\vec M$ è il momento magnetico per unità di volume. Si misura in A/m.

Il campo nel materiale si scrive:
$$\vec B = \mu_0\left(\vec H + \vec M\right) = \mu_0\,\mu_r\,\vec H$$
dove:
- $\vec B$ = campo magnetico nel materiale (T);
- $\vec H$ = campo magnetizzante, legato alle sole correnti di conduzione (A/m);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$;
- $\mu_r$ = permeabilità magnetica relativa (numero puro).

La **suscettività magnetica** dice quanto il materiale si magnetizza:
$$\chi_m = \mu_r - 1 \qquad \vec M = \chi_m \vec H$$

In un solenoide pieno di materiale il campo diventa $B = \mu_0\mu_r n i$.

## Tre classi di materiali

| Tipo | $\mu_r$ | Cosa succede | Vicino a un magnete | Esempi |
|---|---|---|---|---|
| Diamagnetico | appena minore di 1 | momenti indotti opposti al campo | debolmente respinto | acqua, rame, oro, bismuto |
| Paramagnetico | appena maggiore di 1 | momenti permanenti che si allineano in parte | debolmente attratto | alluminio, platino, ossigeno |
| Ferromagnetico | molto maggiore di 1 (fino a $10^3$–$10^5$) | domini che si allineano tutti | fortemente attratto | ferro, nichel, cobalto |

## Diamagnetismo

Il campo esterno modifica il moto degli elettroni. Nascono momenti magnetici **opposti** al campo, come vuole la legge di Lenz. Il materiale viene quindi debolmente respinto. L'effetto è piccolissimo ($\chi_m \approx -10^{-5}$). È presente in **tutti** i materiali, ma si vede solo dove non ci sono effetti più forti. Non dipende dalla temperatura.

## Paramagnetismo

Gli atomi hanno già un proprio momento magnetico. Senza campo i momenti puntano a caso. Il campo li allinea un po'. L'agitazione termica li disordina. Il risultato è una debole magnetizzazione **concorde** al campo ($\chi_m$ piccola e positiva). Più alta è la temperatura, più debole è l'effetto (legge di Curie: $\chi_m \propto 1/T$).

## Ferromagnetismo

Nei ferromagnetici i momenti atomici vicini si allineano spontaneamente tra loro. Formano regioni già magnetizzate, dette **domini di Weiss**. Senza campo esterno i domini puntano in direzioni diverse e il pezzo non è magnetizzato. Il campo esterno fa crescere i domini allineati e ruota gli altri. La magnetizzazione diventa enorme.

Proprietà tipiche:
- $\mu_r$ molto grande e **non costante**: dipende dal campo applicato.
- **Saturazione**: quando tutti i domini sono allineati, $M$ non cresce più.
- **Isteresi**: la magnetizzazione dipende dalla storia del materiale. Togliendo il campo resta una magnetizzazione residua (**rimanenza**). Per annullarla serve un campo opposto, detto **campo coercitivo**. Il grafico $B$–$H$ forma un **ciclo di isteresi**. L'area del ciclo è energia persa in calore a ogni giro.
- Materiali **duri** (ciclo largo): diventano magneti permanenti. Materiali **dolci** (ciclo stretto): nuclei di trasformatori ed elettromagneti.

## Temperatura di Curie

Sopra la **temperatura di Curie** l'agitazione termica distrugge l'ordine dei domini. Il ferromagnetico diventa **paramagnetico**. Per il ferro la temperatura di Curie è circa 770 °C.

::: esame
Domanda aperta tipica: classificare i materiali. Basta dire per ciascuna classe il valore di $\mu_r$ (o $\chi_m$), il meccanismo (momenti indotti, momenti permanenti, domini), il comportamento vicino a un magnete e un esempio. Per i ferromagnetici aggiungere isteresi e temperatura di Curie.
:::

::: sintesi
- $B = \mu_0\mu_r H$, $\chi_m = \mu_r - 1$.
- Diamagnetici: $\mu_r$ appena < 1, debolmente respinti, presenti in tutti i materiali (rame, acqua).
- Paramagnetici: $\mu_r$ appena > 1, debolmente attratti, effetto che cala con la temperatura (alluminio).
- Ferromagnetici: $\mu_r \gg 1$, domini di Weiss, saturazione e isteresi (ferro, nichel, cobalto).
- Sopra la temperatura di Curie un ferromagnetico diventa paramagnetico.
:::

=== 67
# Lezione 67 — Induzione elettromagnetica: Faraday-Neumann-Lenz

## L'idea

Un flusso magnetico che **cambia nel tempo** genera una f.e.m. in un circuito. Se il circuito è chiuso, circola una **corrente indotta**, anche senza pile.

Esperimenti di Faraday:
- avvicini o allontani un magnete da una spira: l'amperometro segna corrente;
- magnete e spira fermi: nessuna corrente, perché il flusso non cambia;
- accendi o spegni la corrente in una bobina vicina: nasce corrente nella spira;
- ruoti la spira in un campo fisso: nasce corrente.

In tutti i casi la corrente c'è solo mentre il flusso cambia.

## Legge di Faraday-Neumann

$$\mathcal E = -\frac{d\Phi_B}{dt}$$
dove:
- $\mathcal E$ = f.e.m. indotta (V);
- $\Phi_B$ = flusso magnetico concatenato con il circuito (Wb);
- $t$ = tempo (s).

Per una bobina di $N$ spire: $\mathcal E = -N\,d\Phi_B/dt$. Per variazioni finite si usa il valore medio $|\mathcal E| = \Delta\Phi/\Delta t$.

Se il circuito ha resistenza $R$, la corrente indotta è:
$$i = \frac{\mathcal E}{R}$$

Il flusso $\Phi = BS\cos\theta$ può cambiare in tre modi: cambia $B$, cambia l'area $S$, cambia l'angolo $\theta$.

::: esempio
Il flusso in una spira varia di 0,6 Wb in 0,2 s. La f.e.m. media è $|\mathcal E| = 0{,}6/0{,}2 = 3\,\mathrm{V}$.
:::

## Legge di Lenz

Il segno meno nella legge ha un significato preciso. La corrente indotta ha un verso tale da **opporsi alla variazione di flusso** che l'ha prodotta.
- Se il flusso aumenta, la corrente indotta crea un campo opposto a quello esterno.
- Se il flusso diminuisce, la corrente indotta crea un campo concorde, per "sostenerlo".

::: esempio
Avvicini il polo nord di un magnete a una spira. Il flusso cresce. La spira presenta a sua volta un polo nord verso il magnete e lo **respinge**. Se allontani il magnete, la spira presenta un polo sud e lo **attrae**. In entrambi i casi la spira si oppone al movimento.
:::

Perché deve essere così: è la **conservazione dell'energia**. Se la corrente indotta aiutasse la variazione, il magnete accelererebbe da solo e produrrebbe energia dal nulla. Invece devi fare lavoro per muovere il magnete. Quel lavoro diventa energia elettrica e poi calore.

## Un esempio pratico: l'alternatore

Una bobina di $N$ spire, area $S$, ruota con velocità angolare $\omega$ in un campo uniforme $B$. L'angolo cambia nel tempo, $\theta = \omega t$:
$$\Phi = NBS\cos\omega t \quad\Rightarrow\quad \mathcal E = NBS\omega\sin\omega t$$
dove $\omega$ è in rad/s. Si ottiene una f.e.m. **alternata**. È così che le centrali producono corrente.

Altre applicazioni: trasformatori, piastre a induzione, freni elettromagnetici, pick-up delle chitarre elettriche.

## Conservazione della carica (equazione di continuità)

La carica elettrica non si crea e non si distrugge. Se da un volume esce corrente, la carica al suo interno cala. In forma integrale:
$$\oint_S \vec J \cdot d\vec S = -\frac{dQ_{int}}{dt}$$
In forma locale è l'**equazione di continuità**:
$$\nabla \cdot \vec J = -\frac{\partial \rho}{\partial t}$$
dove:
- $\vec J$ = densità di corrente (A/m²);
- $\rho$ = densità di carica (C/m³);
- $Q_{int}$ = carica dentro la superficie chiusa (C).

Questa relazione esprime la conservazione della carica.

::: esame
Domanda aperta tipica: enunciare Faraday-Neumann-Lenz con un esempio. Scrivi $\mathcal E = -d\Phi/dt$, spiega il segno meno (Lenz, conservazione dell'energia) e descrivi il magnete che si avvicina alla spira o l'alternatore.
:::

::: sintesi
- Flusso che varia nel tempo → f.e.m. indotta: $\mathcal E = -d\Phi_B/dt$ (con $N$ spire, $-N\,d\Phi/dt$).
- Corrente indotta $i = \mathcal E/R$; niente variazione di flusso, niente corrente.
- Lenz: la corrente indotta si oppone alla variazione di flusso (conservazione dell'energia).
- Alternatore: $\mathcal E = NBS\omega\sin\omega t$.
- Conservazione della carica: $\nabla \cdot \vec J = -\partial\rho/\partial t$.
:::

=== 68
# Lezione 68 — Circuiti in campi magnetici variabili

## Cosa succede al circuito

Un circuito immerso in un campo magnetico che varia nel tempo vede un flusso concatenato variabile. Quindi:
1. nasce una **f.e.m. indotta** $\mathcal E = -d\Phi_B/dt$;
2. se il circuito è chiuso, circola una **corrente indotta** $i = \mathcal E/R$, anche senza generatori;
3. la corrente ha verso tale da opporsi alla variazione (Lenz). Se il campo aumenta, la corrente crea un campo opposto all'aumento;
4. la corrente dissipa energia per effetto Joule, $P = Ri^2$;
5. il campo agisce sulla corrente indotta con forze che si oppongono al moto o alla variazione.

## Il campo elettrico indotto

Il circuito è fermo, quindi la forza di Lorentz non può spingere le cariche. A spingerle è un **campo elettrico indotto**, creato dal campo magnetico variabile. Questo campo esiste anche senza il circuito: il filo serve solo a rivelarlo.

La legge di Faraday in forma integrale diventa:
$$\oint_\gamma \vec E \cdot d\vec l = -\frac{d\Phi_B}{dt}$$
dove:
- $\oint_\gamma \vec E \cdot d\vec l$ = circuitazione del campo elettrico lungo la linea chiusa $\gamma$ (V);
- $\Phi_B$ = flusso di $\vec B$ attraverso una superficie con bordo $\gamma$ (Wb).

La circuitazione di $\vec E$ è proprio la f.e.m. indotta.

Differenze con il campo elettrostatico:

| | Campo elettrostatico | Campo elettrico indotto |
|---|---|---|
| Sorgente | cariche ferme | campo magnetico variabile |
| Linee di campo | aperte, da + a − | chiuse |
| Circuitazione | sempre zero | $-d\Phi_B/dt$ |
| Conservativo? | sì | **no** |

Il campo indotto non è conservativo: non si può definire un potenziale. Per questo fa girare le cariche in un anello chiuso.

In forma locale: $\nabla \times \vec E = -\dfrac{\partial \vec B}{\partial t}$.

## Correnti parassite (di Foucault)

In un pezzo di metallo esteso, immerso in un campo variabile, le correnti indotte girano in vortici dentro il metallo. Si chiamano **correnti parassite** o di Foucault.

Effetti:
- **Riscaldano** il metallo per effetto Joule. Lo sfruttano i forni e le piastre a induzione.
- **Frenano** il moto. Una lastra metallica che oscilla tra i poli di un magnete si ferma in fretta: le correnti indotte si oppongono al moto (Lenz). È il principio dei **freni elettromagnetici** di treni e camion.
- Nei trasformatori e nei motori sono **perdite**. Per ridurle i nuclei si fanno di **lamierini isolati**: gli strati sottili interrompono i vortici di corrente.

## Mutua induzione

Due circuiti vicini si influenzano. La corrente $i_1$ nel primo crea un flusso nel secondo, proporzionale a $i_1$:
$$\Phi_2 = M\,i_1 \qquad \mathcal E_2 = -M\frac{di_1}{dt}$$
dove $M$ è il coefficiente di mutua induzione, in henry (H). Una corrente variabile nel primo circuito induce una f.e.m. nel secondo. È il principio del **trasformatore**.

::: esame
Domanda aperta tipica: "cosa succede a un circuito in un campo magnetico variabile?". Rispondi: flusso variabile, f.e.m. indotta ($-d\Phi/dt$), corrente indotta ($\mathcal E/R$), verso dato da Lenz, campo elettrico indotto non conservativo. Aggiungi un esempio (correnti parassite o trasformatore).
:::

::: sintesi
- Campo magnetico variabile → f.e.m. e corrente indotta, anche senza generatori.
- Campo elettrico indotto: linee chiuse, non conservativo, $\oint \vec E \cdot d\vec l = -d\Phi_B/dt$.
- La corrente indotta si oppone all'aumento o alla diminuzione del flusso.
- Correnti parassite: scaldano e frenano; nei nuclei si riducono con lamierini isolati.
- Mutua induzione: $\mathcal E_2 = -M\,di_1/dt$ (trasformatore).
:::

=== 69
# Lezione 69 — F.e.m. indotta

## Due modi di cambiare il flusso

La f.e.m. indotta vale sempre $\mathcal E = -d\Phi_B/dt$. Il flusso può cambiare in due modi:
- il **campo cambia nel tempo** e il circuito è fermo: la f.e.m. nasce dal campo elettrico indotto;
- il **circuito si muove** (o si deforma) in un campo fisso: è la **f.e.m. di movimento**, dovuta alla forza di Lorentz.

Con variazioni finite si usa il valore medio:
$$|\mathcal E| = \frac{\Delta \Phi}{\Delta t}$$
dove $\Delta\Phi$ è la variazione di flusso (Wb) e $\Delta t$ l'intervallo di tempo (s).

::: esempio
Il flusso in una bobina passa da −30 Wb a +38 Wb in 0,42 s. Attenzione ai segni: $\Delta\Phi = 38 - (-30) = 68\,\mathrm{Wb}$. Quindi $|\mathcal E| = 68/0{,}42 \approx 162\,\mathrm{V}$.
:::

## F.e.m. di movimento

Una sbarretta di lunghezza $l$ si muove con velocità $\vec v$ in un campo $\vec B$, perpendicolare a entrambi. Le cariche nella sbarretta si muovono con lei. Su ognuna agisce la forza di Lorentz $q\vec v \times \vec B$, diretta lungo la sbarretta. Le cariche positive vanno da un lato, le negative dall'altro. Tra i capi nasce una f.e.m.:
$$\mathcal E = B\,l\,v$$
dove:
- $\mathcal E$ = f.e.m. ai capi della sbarretta (V);
- $B$ = campo magnetico (T);
- $l$ = lunghezza della sbarretta, perpendicolare a $\vec v$ (m);
- $v$ = velocità (m/s).

Lo stesso risultato viene da Faraday. La sbarretta, scorrendo su due binari, spazza ogni secondo un'area $lv$. Il flusso cresce di $Blv$ al secondo.

::: esempio
Sbarretta di 0,5 m, a 4 m/s, in un campo di 0,2 T: $\mathcal E = 0{,}2 \cdot 0{,}5 \cdot 4 = 0{,}4\,\mathrm{V}$.
:::

## Spira che entra o esce da un campo

Una spira rettangolare si muove a velocità costante verso una regione con campo uniforme.
- **Mentre entra**: l'area dentro il campo cresce, il flusso cresce, circola corrente.
- **Tutta dentro**: il flusso non cambia più, la corrente è **zero**.
- **Mentre esce**: il flusso cala, la corrente circola in verso opposto.

Conta solo il lato che taglia il bordo del campo, cioè il lato **perpendicolare alla velocità**. La f.e.m. vale $Blv$ con $l$ = quel lato.

::: esempio
Spira con lato $a = 20\,\mathrm{cm}$ lungo $y$ e lato $b = 30\,\mathrm{cm}$ lungo $x$. Resistenza 10 Ω. Esce a 10 m/s lungo $x$ da un campo di 2 T.
- Il lato che taglia il bordo è quello lungo $y$: $l = 0{,}20\,\mathrm{m}$.
- $\mathcal E = 2 \cdot 0{,}20 \cdot 10 = 4\,\mathrm{V}$.
- $i = \mathcal E/R = 4/10 = 0{,}4\,\mathrm{A}$.
:::

::: attenzione
Errore tipico: usare il lato parallelo alla velocità (qui 30 cm). Quel lato non taglia linee di campo e non dà f.e.m.
:::

## Il bilancio di energia

La corrente indotta $i$ scorre nel lato di lunghezza $l$. Il campo esercita su di esso una forza $F = ilB$ che **frena** il moto (Lenz). Per tenere la velocità costante bisogna spingere con la stessa forza.

La potenza meccanica spesa è $Fv = ilBv = \mathcal E i$. È uguale alla potenza elettrica, che si trasforma in calore nella resistenza, $Ri^2$. Nessuna energia si crea dal nulla.

::: esempio
Nella spira di prima: $F = 0{,}4 \cdot 0{,}20 \cdot 2 = 0{,}16\,\mathrm{N}$. Potenza: $0{,}16 \cdot 10 = 1{,}6\,\mathrm{W}$, uguale a $\mathcal E i = 4 \cdot 0{,}4 = 1{,}6\,\mathrm{W}$.
:::

## Spira che ruota

Una spira di area $S$ che ruota con velocità angolare $\omega$ in un campo $B$ ha:
$$\mathcal E = BS\omega\sin\omega t$$
La f.e.m. è alternata. È il principio dell'alternatore.

::: sintesi
- $|\mathcal E| = \Delta\Phi/\Delta t$; attenzione ai segni del flusso.
- F.e.m. di movimento: $\mathcal E = Blv$, dovuta alla forza di Lorentz sulle cariche.
- Spira che entra o esce: corrente solo mentre il flusso cambia; usa il lato perpendicolare al moto.
- Corrente indotta: $i = \mathcal E/R$; la forza sul conduttore frena il moto.
- Lavoro meccanico = energia elettrica = calore nella resistenza.
:::

=== 70
# Lezione 70 — Autoinduzione e circuito RL

## Autoinduzione

Una corrente in un circuito crea un campo magnetico. Quel campo attraversa il circuito stesso. Il flusso concatenato è proporzionale alla corrente:
$$\Phi = L\,i$$
dove:
- $\Phi$ = flusso concatenato con il circuito (Wb);
- $i$ = corrente (A);
- $L$ = **induttanza** o coefficiente di autoinduzione, in henry (H).

$1\,\mathrm{H} = 1\,\mathrm{Wb/A} = 1\,\mathrm{V\,s/A} = 1\,\Omega\,\mathrm{s}$.

Se la corrente cambia, cambia il flusso. Nasce una **f.e.m. autoindotta**:
$$\mathcal E_L = -L\frac{di}{dt}$$
dove $di/dt$ è la rapidità di variazione della corrente (A/s). Il segno meno è Lenz: l'induttanza si **oppone alle variazioni** di corrente. Fa da "inerzia" per la corrente.

## Induttanza di un solenoide

Un solenoide lungo $l$, con $N$ spire di sezione $S$ ($n = N/l$), ha $B = \mu_0 n i$. Il flusso totale è $N \cdot BS$. Risultato:
$$L = \mu_0\,n^2\,S\,l = \mu_0\frac{N^2 S}{l}$$
dove $S$ è in m² e $l$ in m. $L$ cresce con il **quadrato** del numero di spire. Dipende solo dalla geometria e dal nucleo (con un nucleo, moltiplica per $\mu_r$). **Non dipende dalla corrente.**

## Circuito RL: chiusura

Un generatore $\mathcal E$, una resistenza $R$ e un'induttanza $L$ sono in serie. All'istante $t = 0$ si chiude l'interruttore.

Come si trova la corrente, a passi:
1. Legge delle maglie: $\mathcal E - L\dfrac{di}{dt} = Ri$.
2. Separa le variabili: $\dfrac{di}{\mathcal E/R - i} = \dfrac{R}{L}\,dt$.
3. Integra da $i = 0$ (a $t = 0$) a $i$ (al tempo $t$):
$$i(t) = \frac{\mathcal E}{R}\left(1 - e^{-t/\tau}\right) \qquad \tau = \frac{L}{R}$$
dove:
- $i(t)$ = corrente al tempo $t$ (A);
- $\mathcal E/R$ = corrente di regime (A);
- $\tau$ = **costante di tempo** (s).

La corrente **non** salta subito al valore finale. Cresce in modo esponenziale fino a $\mathcal E/R$. Dopo un tempo $\tau$ è al 63% del valore finale. Dopo circa $5\tau$ è praticamente a regime. A regime $di/dt = 0$: l'induttanza si comporta come un filo.

## Circuito RL: apertura

Si toglie il generatore e si chiude il circuito su $R$. La corrente parte da $I_0$ e cala:
$$i(t) = I_0\,e^{-t/\tau}$$
L'induttanza tiene viva la corrente per un po'. Se interrompi di colpo un circuito induttivo, $di/dt$ è enorme e può saltare una scintilla.

::: esempio
$L = 0{,}5\,\mathrm{H}$, $R = 100\,\Omega$: $\tau = 0{,}5/100 = 5 \cdot 10^{-3}\,\mathrm{s} = 5\,\mathrm{ms}$.
:::

## L/R è un tempo: analisi dimensionale

A passi:
1. Da $\mathcal E_L = -L\,di/dt$: $[L] = \dfrac{\mathrm{V}}{\mathrm{A/s}} = \dfrac{\mathrm{V\,s}}{\mathrm{A}}$.
2. Dalla legge di Ohm: $[R] = \dfrac{\mathrm{V}}{\mathrm{A}}$.
3. Rapporto: $\left[\dfrac{L}{R}\right] = \dfrac{\mathrm{V\,s/A}}{\mathrm{V/A}} = \mathrm{s}$.

Controllo: l'esponente $t/\tau$ deve essere un numero puro. Lo è solo se $\tau$ è un tempo.

## Energia nell'induttanza

Per far crescere la corrente, il generatore lavora contro la f.e.m. autoindotta. Questo lavoro resta immagazzinato nel campo magnetico:
$$U = \frac12 L I^2$$
dove $U$ è in J, $L$ in H, $I$ in A.

::: esempio
Circuito RL con $L = 10\,\mathrm{H}$ e corrente di regime 3 A: $U = \tfrac12 \cdot 10 \cdot 3^2 = 45\,\mathrm{J}$.
:::

::: sintesi
- $\Phi = Li$, $\mathcal E_L = -L\,di/dt$; henry: $1\,\mathrm{H} = 1\,\mathrm{V\,s/A}$.
- Solenoide: $L = \mu_0 n^2 S l$, cresce con il quadrato delle spire, non dipende dalla corrente.
- Chiusura RL: $i = (\mathcal E/R)(1 - e^{-t/\tau})$; apertura: $i = I_0 e^{-t/\tau}$.
- $\tau = L/R$, in secondi.
- Energia: $U = \tfrac12 LI^2$.
:::

=== 71
# Lezione 71 — Energia del campo magnetico

## L'energia sta nel campo

Accendere una corrente in un'induttanza costa lavoro. Quel lavoro non si perde: resta immagazzinato. Dove? Nel **campo magnetico**, cioè nello spazio in cui il campo esiste. Qualunque regione con un campo magnetico contiene energia.

## Energia di un'induttanza

Il ragionamento, a passi:
1. Mentre la corrente cresce, l'induttanza oppone la f.e.m. $L\,di/dt$.
2. Il generatore spende la potenza $P = L\,i\,\dfrac{di}{dt}$ per vincerla.
3. In un tempo $dt$ il lavoro è $dW = L\,i\,di$.
4. Sommando da $0$ a $I$:
$$U = \frac12 L I^2$$
dove $U$ = energia (J), $L$ = induttanza (H), $I$ = corrente (A).

L'energia cresce con il **quadrato** della corrente: raddoppi la corrente, l'energia quadruplica.

::: esempio
Induttanza di 2 H con 5 A: $U = \tfrac12 \cdot 2 \cdot 5^2 = 25\,\mathrm{J}$. Con 10 A diventa 100 J, cioè quattro volte.
:::

## Densità di energia magnetica

Per un solenoide lungo:
1. $L = \mu_0 n^2 S l$ e $B = \mu_0 n I$, quindi $I = B/(\mu_0 n)$.
2. $U = \tfrac12 \mu_0 n^2 S l \cdot \dfrac{B^2}{\mu_0^2 n^2} = \dfrac{B^2}{2\mu_0}\,S l$.
3. $Sl$ è il volume interno, dove sta il campo.

Dividendo per il volume si ottiene la **densità di energia**:
$$u_B = \frac{B^2}{2\mu_0}$$
dove:
- $u_B$ = energia per unità di volume (J/m³);
- $B$ = campo magnetico (T);
- $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\,m/A}$.

Il risultato vale per qualunque campo magnetico, non solo nel solenoide. L'energia totale si ottiene sommando $u_B$ su tutto il volume dove c'è campo. In un solenoide l'energia sta **dentro**, dove c'è il campo, non nel filo.

In un materiale con permeabilità $\mu_r$: $u_B = \dfrac{B^2}{2\mu_0\mu_r}$.

::: esempio
Un campo di 1 T contiene $u_B = \dfrac{1}{2 \cdot 4\pi \cdot 10^{-7}} \approx 4 \cdot 10^5\,\mathrm{J/m^3}$. È molta energia: per questo i grandi elettromagneti vanno spenti con cautela.
:::

## Confronto con il campo elettrico

| | Campo elettrico | Campo magnetico |
|---|---|---|
| Componente | condensatore | induttanza |
| Energia | $\tfrac12 CV^2$ | $\tfrac12 LI^2$ |
| Densità di energia | $u_E = \tfrac12\varepsilon_0 E^2$ | $u_B = \dfrac{B^2}{2\mu_0}$ |

Dove ci sono entrambi i campi, la densità totale è $u = \tfrac12\varepsilon_0 E^2 + \dfrac{B^2}{2\mu_0}$.

In un'**onda elettromagnetica** nel vuoto vale $E = cB$ e $c^2 = 1/(\mu_0\varepsilon_0)$. Sostituendo:
$$\tfrac12\varepsilon_0 E^2 = \tfrac12\varepsilon_0 c^2 B^2 = \frac{B^2}{2\mu_0}$$
Le due densità sono **uguali**: l'energia si divide a metà tra campo elettrico e magnetico.

::: esame
Domanda aperta tipica: "aspetti energetici del campo magnetico". Ricava $U = \tfrac12 LI^2$ dal lavoro contro la f.e.m. autoindotta, poi passa alla densità $u_B = B^2/(2\mu_0)$ con il solenoide, e confrontala con $u_E$.
:::

::: sintesi
- L'energia magnetica è immagazzinata nel campo, nello spazio dove il campo esiste.
- Induttanza: $U = \tfrac12 LI^2$; raddoppiando la corrente l'energia quadruplica.
- Densità: $u_B = B^2/(2\mu_0)$ (J/m³), analoga di $u_E = \tfrac12\varepsilon_0 E^2$.
- In un'onda elettromagnetica nel vuoto $u_E = u_B$.
:::

=== 72
# Lezione 72 — Equazioni di Maxwell e onde elettromagnetiche

## Come nascono i campi

Campi elettrici e magnetici hanno due tipi di sorgente ciascuno.

| | Sorgente "statica" | Sorgente "variabile" |
|---|---|---|
| Campo elettrico | cariche elettriche (Gauss) | campo magnetico variabile (Faraday) |
| Campo magnetico | correnti e magneti (Ampère) | campo elettrico variabile (Maxwell) |

Quindi un campo che cambia nel tempo genera l'altro campo. Da qui nascono le onde elettromagnetiche.

## Legge di Ampère-Maxwell

La legge di Ampère $\oint \vec B \cdot d\vec l = \mu_0 i$ non basta quando le correnti variano. Esempio: un condensatore che si carica. Nei fili passa corrente. Tra le armature no, ma lì il campo elettrico cresce. Una linea attorno al filo darebbe risultati diversi a seconda della superficie scelta: una taglia il filo, l'altra passa tra le armature.

Maxwell aggiunse la **corrente di spostamento**:
$$i_s = \varepsilon_0\frac{d\Phi_E}{dt}$$
dove:
- $i_s$ = corrente di spostamento (A);
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{F/m}$ = costante dielettrica del vuoto;
- $\Phi_E$ = flusso del campo elettrico (V·m).

La legge completa è:
$$\oint \vec B \cdot d\vec l = \mu_0\left(i + \varepsilon_0\frac{d\Phi_E}{dt}\right)$$
Tra le armature la corrente di spostamento è uguale alla corrente nei fili. Così la legge torna coerente. Significato: **un campo elettrico variabile genera un campo magnetico**, proprio come una corrente.

## Le quattro equazioni di Maxwell

Descrivono tutto l'elettromagnetismo. Forma integrale nel vuoto:

1. **Gauss elettrico**: $\displaystyle\oint_S \vec E \cdot d\vec S = \frac{Q_{int}}{\varepsilon_0}$. Le cariche sono sorgenti del campo elettrico.
2. **Gauss magnetico**: $\displaystyle\oint_S \vec B \cdot d\vec S = 0$. Non esistono monopoli magnetici.
3. **Faraday-Neumann-Lenz**: $\displaystyle\oint_\gamma \vec E \cdot d\vec l = -\frac{d\Phi_B}{dt}$. Un campo magnetico variabile genera un campo elettrico.
4. **Ampère-Maxwell**: $\displaystyle\oint_\gamma \vec B \cdot d\vec l = \mu_0 i + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$. Correnti e campi elettrici variabili generano un campo magnetico.

dove $S$ è una superficie chiusa, $\gamma$ una linea chiusa, $Q_{int}$ la carica interna (C), $i$ la corrente concatenata (A).

Forma locale (differenziale):
$$\begin{aligned}
\nabla \cdot \vec E &= \frac{\rho}{\varepsilon_0} & \nabla \cdot \vec B &= 0 \\
\nabla \times \vec E &= -\frac{\partial \vec B}{\partial t} & \nabla \times \vec B &= \mu_0\vec J + \mu_0\varepsilon_0\frac{\partial \vec E}{\partial t}
\end{aligned}$$
dove $\rho$ è la densità di carica (C/m³) e $\vec J$ la densità di corrente (A/m²).

A queste si aggiunge la forza di Lorentz $\vec F = q(\vec E + \vec v \times \vec B)$, che dice come i campi agiscono sulle cariche.

## Onde elettromagnetiche

Nel vuoto, senza cariche e correnti, restano solo i termini "variabili". Un campo $\vec E$ variabile crea un campo $\vec B$ variabile, che crea un campo $\vec E$ variabile, e così via. I due campi si sostengono a vicenda e si propagano nello spazio. È un'**onda elettromagnetica**.

Proprietà:
- Si propaga **anche nel vuoto**: non serve un mezzo.
- È **trasversale**: $\vec E$ e $\vec B$ sono perpendicolari tra loro e alla direzione di propagazione.
- $E$ e $B$ oscillano in fase, con $E = cB$.
- Trasporta **energia** e quantità di moto, ma non carica.
- È prodotta da **cariche accelerate**, per esempio la corrente oscillante in un'antenna.

La velocità nel vuoto si ricava dalle equazioni:
$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3 \cdot 10^8\,\mathrm{m/s}$$
Maxwell notò che è proprio la velocità della luce. Conclusione: **la luce è un'onda elettromagnetica**.

Relazione tra lunghezza d'onda e frequenza:
$$c = \lambda f$$
dove $\lambda$ = lunghezza d'onda (m) e $f$ = frequenza (Hz).

::: esempio
Una radio FM a 100 MHz: $\lambda = c/f = 3 \cdot 10^8/10^8 = 3\,\mathrm{m}$.
:::

L'energia trasportata per unità di tempo e di area è data dal vettore di Poynting $\vec S = \dfrac{1}{\mu_0}\vec E \times \vec B$ (W/m²). Punta nella direzione di propagazione.

## Spettro elettromagnetico

Tutte queste onde sono dello stesso tipo. Cambiano solo frequenza e lunghezza d'onda. In ordine di **frequenza crescente** (lunghezza d'onda decrescente):

onde radio → microonde → infrarosso → luce visibile → ultravioletto → raggi X → raggi gamma.

I raggi gamma hanno la frequenza più alta e l'energia per fotone più grande.

::: esame
Le aperte chiedono: sorgenti dei campi, legge di Ampère-Maxwell (con l'esempio del condensatore), le quattro equazioni e le proprietà delle onde. Per ogni equazione scrivi la formula e il suo significato in una frase.
:::

::: sintesi
- Campo elettrico da cariche e da campi magnetici variabili; campo magnetico da correnti e da campi elettrici variabili.
- Ampère-Maxwell: $\oint \vec B \cdot d\vec l = \mu_0 i + \mu_0\varepsilon_0\,d\Phi_E/dt$ (corrente di spostamento).
- Maxwell: Gauss per $\vec E$, Gauss per $\vec B$, Faraday, Ampère-Maxwell.
- Onde e.m.: trasversali, anche nel vuoto, $E = cB$, $c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3 \cdot 10^8\,\mathrm{m/s}$, $c = \lambda f$.
- Spettro: dalle onde radio (frequenza bassa) ai raggi gamma (frequenza alta).
:::
