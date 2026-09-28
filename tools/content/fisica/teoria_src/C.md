=== 15 dispense
# Lezione 15 — Oscillazioni e oscillatore armonico

## Il moto armonico semplice
Un moto armonico semplice è un moto avanti e indietro attorno a un centro. La posizione segue un coseno nel tempo. È la proiezione su un diametro di un moto circolare uniforme.

$$x(t) = A\cos(\omega t + \varphi)$$

dove:
- $x$ = posizione rispetto al centro (m)
- $A$ = ampiezza, lo spostamento massimo dal centro (m)
- $\omega$ = pulsazione (rad/s)
- $t$ = tempo (s)
- $\omega t + \varphi$ = fase del moto (rad)
- $\varphi$ = fase iniziale, il valore della fase a $t = 0$ (rad); dipende da come parte il moto

Il coseno varia tra $-1$ e $1$. Quindi $x$ varia tra $-A$ e $+A$.

## Periodo, frequenza e pulsazione
Queste tre grandezze dicono quanto è veloce l'oscillazione. Basta conoscerne una per avere le altre.

$$T = \frac{2\pi}{\omega} \qquad \nu = \frac{1}{T} = \frac{\omega}{2\pi} \qquad \omega = 2\pi\nu$$

dove:
- $T$ = periodo, il tempo di una oscillazione completa (s)
- $\nu$ = frequenza, il numero di oscillazioni in un secondo (Hz = 1/s)
- $\omega$ = pulsazione, l'angolo "percorso" in un secondo nel moto circolare associato (rad/s)

## Velocità e accelerazione
Si ottengono derivando la posizione.

$$v(t) = -\omega A\sin(\omega t + \varphi) \qquad a(t) = -\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x(t)$$

dove:
- $v$ = velocità (m/s), massima in modulo $v_{max} = \omega A$
- $a$ = accelerazione (m/s²), massima in modulo $a_{max} = \omega^2 A$

Posizione, velocità e accelerazione sono sfasate di un quarto di periodo.
- Agli **estremi** ($x = \pm A$): velocità nulla, accelerazione massima.
- Al **centro** ($x = 0$): velocità massima, accelerazione nulla.
- L'accelerazione è sempre opposta allo spostamento: punta sempre verso il centro.

::: esempio
Una membrana di altoparlante vibra a $440\,\mathrm{Hz}$ con ampiezza $0{,}75\,\mathrm{mm}$.
- $\omega = 2\pi \cdot 440 \approx 2{,}76 \cdot 10^3\,\mathrm{rad/s}$
- $v_{max} = \omega A \approx 2{,}07\,\mathrm{m/s}$
- $a_{max} = \omega^2 A \approx 5{,}71 \cdot 10^3\,\mathrm{m/s^2}$
:::

## Quale forza produce un moto armonico
Serve una forza di richiamo: proporzionale allo spostamento e di verso opposto.

$$F = -cx \;\Rightarrow\; m\frac{d^2x}{dt^2} = -cx \;\Rightarrow\; \frac{d^2x}{dt^2} = -\omega^2 x, \quad \omega = \sqrt{\frac{c}{m}}$$

dove:
- $F$ = forza risultante sul corpo (N)
- $c$ = costante positiva della forza (N/m); per una molla è la costante elastica $k$
- $x$ = spostamento dalla posizione di equilibrio (m)
- $m$ = massa del corpo (kg)

L'ultima è l'**equazione dell'oscillatore armonico**. La sua soluzione è proprio $x = A\cos(\omega t + \varphi)$. Più la forza è "rigida" ($c$ grande), più l'oscillazione è veloce.

## L'oscillatore armonico: molla e pendolo
Un oscillatore armonico è un sistema che oscilla attorno a un punto di equilibrio stabile con legge sinusoidale. I due esempi classici:

| Sistema | Pulsazione | Periodo | Da cosa dipende |
|---|---|---|---|
| Massa–molla | $\omega = \sqrt{k/m}$ | $T = 2\pi\sqrt{m/k}$ | massa e rigidità della molla |
| Pendolo semplice | $\omega = \sqrt{g/l}$ | $T = 2\pi\sqrt{l/g}$ | lunghezza del filo e $g$ |

dove:
- $k$ = costante elastica della molla (N/m)
- $m$ = massa (kg)
- $l$ = lunghezza del filo (m)
- $g$ = accelerazione di gravità, $9{,}81\,\mathrm{m/s^2}$

In entrambi i casi il periodo **non dipende dall'ampiezza** (per piccole oscillazioni).

L'energia meccanica dell'oscillatore ideale si conserva. Agli estremi è tutta potenziale elastica:

$$E = \tfrac12 kA^2$$

dove $E$ = energia meccanica (J), $k$ = costante elastica (N/m), $A$ = ampiezza (m).

## Il pendolo semplice
È una massa appesa a un filo inestensibile di lunghezza $l$. In basso, fermo, è in equilibrio stabile: il peso è bilanciato dalla tensione del filo. Se lo sposti un po', oscilla lungo un arco di circonferenza.

Il ragionamento in tre passi:
1. Lungo la traiettoria agisce solo la componente tangente del peso: $ml\,\dfrac{d^2\theta}{dt^2} = -mg\sin\theta$.
2. Per piccoli angoli $\sin\theta \approx \theta$ (angolo in radianti).
3. Si ottiene $\dfrac{d^2\theta}{dt^2} = -\dfrac{g}{l}\theta$: è un moto armonico con $\omega = \sqrt{g/l}$.

$$\theta(t) = \theta_0\cos(\omega t + \varphi) \qquad T = 2\pi\sqrt{\frac{l}{g}}$$

dove:
- $\theta$ = angolo del filo con la verticale (rad)
- $\theta_0$ = ampiezza angolare (rad)

Il periodo **non dipende dalla massa**. Dipende solo dalla lunghezza del filo e da $g$. Per questo il pendolo serve a misurare $g$.

La velocità è massima nel punto più basso ($\theta = 0$). Lì anche la tensione del filo è massima: $\tau_{max} = mg(1 + \theta_0^2)$.

::: esempio
Quadruplichi la lunghezza del filo: $T$ cresce di $\sqrt4 = 2$, cioè raddoppia. Cambi la massa appesa: $T$ non cambia.
:::

## Oscillazioni smorzate
Nella realtà c'è attrito e l'ampiezza cala nel tempo. Con un attrito viscoso ($F = -bv$) l'oscillazione è un coseno moltiplicato per un esponenziale decrescente.

$$x(t) = A\,e^{-t/\tau}\cos(\omega t + \varphi), \qquad \tau = \frac{2m}{b}$$

dove:
- $b$ = coefficiente di attrito viscoso (kg/s)
- $\tau$ = costante di tempo (s): più è piccola, più in fretta si spengono le oscillazioni

Se lo smorzamento è molto forte (smorzamento critico o superiore), il corpo torna all'equilibrio senza oscillare.

Con l'attrito radente (piano scabro) invece l'ampiezza cala in modo **lineare**, di una quantità fissa a ogni periodo, finché il corpo si ferma.

## Oscillazioni forzate e risonanza
Una forza esterna periodica $F_0\sin(\omega t)$ mantiene il sistema in oscillazione. Dopo un po' il moto "proprio" si spegne. Resta un'oscillazione alla pulsazione $\omega$ della forzante.

$$m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F_0\sin(\omega t)$$

L'ampiezza a regime dipende da quanto $\omega$ è vicina alla pulsazione propria $\omega_0 = \sqrt{k/m}$.

$$A = \frac{F_0}{m}\,\frac{1}{\sqrt{(\omega_0^2 - \omega^2)^2 + 4\gamma^2\omega^2}}, \qquad \gamma = \frac{b}{2m}$$

dove:
- $F_0$ = ampiezza della forza esterna (N)
- $\omega$ = pulsazione della forza esterna (rad/s)
- $\omega_0$ = pulsazione propria (naturale) del sistema (rad/s)
- $\gamma$ = coefficiente di smorzamento (1/s)

**Risonanza**: quando la frequenza della forzante è vicina a quella propria del sistema, l'ampiezza diventa massima. Il massimo è a $\omega = \sqrt{\omega_0^2 - 2\gamma^2}$, quasi uguale a $\omega_0$ se lo smorzamento è piccolo. Senza smorzamento l'ampiezza tenderebbe all'infinito. Intuizione: spingi l'altalena sempre al momento giusto, e ogni spinta aggiunge energia.

::: esempio
Soldati che marciano a passo cadenzato su un ponte. Se il ritmo è vicino alla frequenza naturale del ponte, le oscillazioni crescono sempre di più. Per questo sui ponti si rompe il passo.
:::

::: attenzione
Errore tipico: invertire $k$ e $m$. Il periodo della molla è $2\pi\sqrt{m/k}$: più massa, oscillazione più lenta. La pulsazione è $\sqrt{k/m}$.
:::

::: esame
Nelle aperte chiedono: la condizione per il moto armonico ($F = -cx$), la descrizione dell'oscillatore, il pendolo e il suo periodo, la definizione di periodo, frequenza e pulsazione, la risonanza.
:::

::: sintesi
- Moto armonico: $x = A\cos(\omega t + \varphi)$, $a = -\omega^2 x$.
- Condizione: forza di richiamo $F = -cx$ (proporzionale e opposta allo spostamento).
- $T = 2\pi/\omega$, $\nu = 1/T$, $\omega = 2\pi\nu$.
- Molla: $T = 2\pi\sqrt{m/k}$; pendolo: $T = 2\pi\sqrt{l/g}$, indipendente dalla massa.
- Velocità massima al centro, accelerazione massima agli estremi; $E = \tfrac12 kA^2$.
- Risonanza: forzante alla frequenza propria → ampiezza massima.
:::

=== 16 dispense
# Lezione 16 — Equilibrio del punto e forza elastica (molla, pendolo)

## Condizione di equilibrio del punto materiale
Un punto materiale è in equilibrio quando la **risultante** delle forze applicate è il vettore nullo. Le singole forze possono essere diverse da zero: conta solo la loro somma.

$$\sum \vec F = \vec 0 \quad\Longleftrightarrow\quad \sum F_x = 0,\; \sum F_y = 0,\; \sum F_z = 0$$

dove:
- $\vec F$ = ciascuna forza applicata al punto (N)
- $F_x, F_y, F_z$ = componenti delle forze lungo gli assi (N)

Per il primo principio, con risultante nulla il punto resta fermo oppure si muove di moto rettilineo uniforme. Quindi un corpo a velocità costante (in un riferimento inerziale) ha risultante nulla.

Per un punto materiale bastano le forze. I momenti servono solo per i corpi estesi.

::: esempio
Un palloncino fermo in aria. Agiscono il peso, la spinta di Archimede ed eventualmente il filo. Le forze ci sono, ma la loro somma è zero.
:::

::: attenzione
Tre o più forze non nulle possono dare risultante nulla. Esempio: tre forze uguali in modulo a 120° l'una dall'altra. Se due forze sono uguali e opposte si annullano, e conta solo la terza.
:::

## Equilibrio stabile, instabile, indifferente
Un punto di equilibrio si classifica guardando cosa succede se sposti un po' il corpo.

| Tipo | Cosa succede se lo sposti di poco | Esempio |
|---|---|---|
| Stabile | torna verso il punto e oscilla attorno a esso | pallina sul fondo di una scodella, pendolo fermo in basso |
| Instabile | si allontana sempre di più | matita in piedi sulla punta, pallina in cima a una cupola |
| Indifferente | resta in equilibrio nella nuova posizione | biglia su un tavolo piano |

Le oscillazioni armoniche avvengono sempre attorno a un equilibrio **stabile**.

## Legge di Hooke
Una molla deformata spinge o tira per tornare alla sua lunghezza di riposo. La forza è proporzionale alla deformazione e di verso opposto.

$$F = -kx$$

dove:
- $F$ = forza elastica esercitata dalla molla (N)
- $k$ = costante elastica (N/m): misura la rigidità e dipende solo dalla molla
- $x$ = deformazione, cioè allungamento o compressione rispetto alla lunghezza di riposo (m)

Conseguenze pratiche:
- In modulo $F = kx$, quindi $x = F/k$ e $k = F/x$.
- È l'**allungamento** a essere proporzionale alla forza, non la lunghezza totale. Doppio peso, doppio allungamento.
- La legge vale solo per piccole deformazioni. Oltre il limite di elasticità la deformazione diventa permanente.
- $k$ non dice qual è il carico massimo che la molla sopporta.

::: esempio
- Molla con $k = 1000\,\mathrm{N/m}$ compressa di $10\,\mathrm{cm}$: $F = 1000 \cdot 0{,}1 = 100\,\mathrm N$.
- Molla con $k = 5000\,\mathrm{N/m}$ compressa di $30\,\mathrm{cm}$: $F = 1500\,\mathrm N$.
- $12\,\mathrm N$ la allungano di $3\,\mathrm{cm}$: con $60\,\mathrm N$ (5 volte tanto) si allunga di $15\,\mathrm{cm}$.
- $k = 2000\,\mathrm{N/m}$: $2000\,\mathrm N$ → $1\,\mathrm m$; $200\,\mathrm N$ → $10\,\mathrm{cm}$; $20\,\mathrm N$ → $1\,\mathrm{cm}$.
:::

## Molla verticale con un peso
All'equilibrio la forza della molla bilancia il peso.

$$kx = mg \quad\Rightarrow\quad x = \frac{mg}{k}, \qquad k = \frac{mg}{x}$$

dove:
- $m$ = massa appesa o appoggiata (kg)
- $g$ = accelerazione di gravità, $9{,}8\,\mathrm{m/s^2}$
- $x$ = allungamento (o compressione) all'equilibrio (m)

::: esempio
- $1\,\mathrm{kg}$ su una molla con $k = 100\,\mathrm{N/m}$: $x = 9{,}8/100 \approx 0{,}1\,\mathrm m = 10\,\mathrm{cm}$.
- Togli $0{,}54\,\mathrm{kg}$ e la molla si accorcia di $0{,}44\,\mathrm m$: $k = 0{,}54 \cdot 9{,}8/0{,}44 \approx 12\,\mathrm{N/m}$.
:::

Se poi sposti ancora il corpo e lo lasci, oscilla con lo stesso periodo $2\pi\sqrt{m/k}$. Cambia solo il centro dell'oscillazione: è la nuova posizione di equilibrio, non la lunghezza di riposo.

## Molle in serie e in parallelo
Due molle possono essere sostituite da una sola molla equivalente.

| Collegamento | Cosa hanno in comune | Costante equivalente |
|---|---|---|
| Serie (una dopo l'altra) | la stessa forza | $\dfrac{1}{k} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$ |
| Parallelo (una accanto all'altra) | lo stesso allungamento | $k = k_1 + k_2$ |

In serie la molla equivalente è più morbida di ciascuna. In parallelo è più rigida.

## Molla oscillante: equazione del moto
Un blocco di massa $m$ è attaccato a una molla su un piano senza attrito. Lo sposti di $A$ e lo lasci. L'unica forza orizzontale è quella elastica.

1. Secondo principio: $m\,\dfrac{d^2x}{dt^2} = -kx$.
2. Dividendo per $m$: $\dfrac{d^2x}{dt^2} = -\omega^2 x$ con $\omega = \sqrt{k/m}$.
3. È l'equazione del moto armonico. Con partenza da ferma in $x = A$ la soluzione è $x(t) = A\cos(\omega t)$.

$$\omega = \sqrt{\frac{k}{m}} \qquad T = 2\pi\sqrt{\frac{m}{k}}$$

dove:
- $\omega$ = pulsazione (rad/s)
- $T$ = periodo (s)

Più il blocco è leggero, più il moto è rapido. Più la molla è rigida, più il moto è rapido.

::: esempio
$m = 200\,\mathrm g$, $k = 20\,\mathrm{N/m}$: $T = 2\pi\sqrt{0{,}2/20} = 2\pi \cdot 0{,}1 \approx 0{,}628\,\mathrm s$.
:::

## Energia elastica e compressione massima
Una molla deformata di $x$ immagazzina energia potenziale elastica.

$$U = \tfrac12 kx^2$$

dove $U$ = energia elastica (J), $k$ = costante elastica (N/m), $x$ = deformazione (m).

Se un blocco con velocità $v$ comprime una molla (senza attrito), tutta l'energia cinetica diventa elastica: $\tfrac12 mv^2 = \tfrac12 kx^2$, quindi $x = v\sqrt{m/k}$.

::: esempio
Blocco di $4\,\mathrm{kg}$ a $4\,\mathrm{m/s}$, molla con $k = 400\,\mathrm{N/m}$: $x = 4\sqrt{4/400} = 0{,}4\,\mathrm m = 40\,\mathrm{cm}$.
:::

## Il pendolo: il periodo non dipende dalla massa
Per piccole oscillazioni $T = 2\pi\sqrt{l/g}$, con $l$ = lunghezza del filo (m). La massa non compare.

::: esempio
Un pendolo con $4\,\mathrm{kg}$ ha periodo $10\,\mathrm s$. Con $1\,\mathrm{kg}$ sullo stesso filo il periodo resta $10\,\mathrm s$.
:::

## Forze costanti combinate
Se la risultante è costante e il corpo parte da fermo, il moto è rettilineo uniformemente accelerato lungo la direzione della risultante.

::: esempio
Massa di $1\,\mathrm{kg}$: peso $9{,}8\,\mathrm N$ in basso più una forza orizzontale di $9{,}8\,\mathrm N$. La risultante è costante e inclinata di 45°. Da fermo il corpo si muove di moto uniformemente accelerato a 45°.
:::

::: esame
Nelle aperte chiedono: i tre tipi di equilibrio, la condizione di equilibrio del punto, la legge di Hooke, l'equazione del moto della molla oscillante.
:::

::: sintesi
- Equilibrio del punto: $\sum\vec F = \vec 0$ (risultante nulla, non forze nulle).
- Stabile: torna indietro; instabile: si allontana; indifferente: resta dove lo metti.
- Hooke: $F = -kx$; l'allungamento è proporzionale alla forza.
- Molla verticale all'equilibrio: $kx = mg$.
- Molla oscillante: $m\ddot x = -kx$, $\omega = \sqrt{k/m}$, $T = 2\pi\sqrt{m/k}$.
- Energia elastica $U = \tfrac12 kx^2$; serie $1/k = 1/k_1 + 1/k_2$, parallelo $k = k_1 + k_2$.
:::

=== 17 dispense
# Lezione 17 — Lavoro ed energia cinetica

## Che cos'è l'energia
L'energia è una grandezza scalare legata allo stato di un corpo: al suo moto o alla sua posizione. Si conserva: si trasforma da una forma all'altra o passa da un corpo all'altro. Il lavoro è uno dei modi con cui un corpo scambia energia.

- **Energia cinetica**: l'energia che un corpo ha perché si muove.
- **Energia potenziale**: l'energia che ha per la sua posizione.
- **Energia meccanica**: la somma delle due.

## Il lavoro di una forza
Il lavoro misura quanto una forza contribuisce allo spostamento. Conta solo la componente della forza lungo lo spostamento.

Per una forza costante e uno spostamento rettilineo:

$$L = \vec F \cdot \vec s = F\,s\cos\theta$$

dove:
- $L$ = lavoro (J)
- $F$ = modulo della forza (N)
- $s$ = modulo dello spostamento (m)
- $\theta$ = angolo tra forza e spostamento

Il lavoro è uno scalare. Si misura in joule: $1\,\mathrm J = 1\,\mathrm{N\cdot m} = 1\,\mathrm{kg\,m^2/s^2}$.

Il segno dipende dall'angolo:
- $\theta < 90°$: lavoro positivo (la forza aiuta il moto).
- $\theta = 90°$: lavoro nullo.
- $\theta > 90°$: lavoro negativo (la forza frena il moto).

In generale, su una traiettoria curva e con forza variabile, si somma il lavoro di ogni tratto piccolissimo $d\vec s$:

$$L_{AB} = \int_A^B \vec F \cdot d\vec s$$

Graficamente, in una dimensione, il lavoro è l'area sotto la curva $F(x)$ tra la posizione iniziale e quella finale.

Se agiscono più forze, il lavoro della risultante è la somma dei lavori delle singole forze.

## Perché la forza centripeta non fa lavoro
Nel moto circolare la forza centripeta punta sempre verso il centro. La velocità invece è sempre tangente alla circonferenza. Forza e spostamento sono perpendicolari, quindi $L = F\,s\cos 90° = 0$.

Per lo stesso motivo la tensione del filo di un pendolo non compie lavoro.

::: esempio
Altalena nel punto più basso. L'accelerazione centripeta punta verso il centro della traiettoria, cioè verso l'alto, verso il punto di sospensione.
:::

## L'energia cinetica
Partendo da $F = ma$ e $v = ds/dt$, il lavoro elementare diventa $dL = m\,v\,dv$. Sommando da $v_A$ a $v_B$ compare la grandezza $\tfrac12 mv^2$.

$$E_k = \tfrac12 mv^2$$

dove:
- $E_k$ = energia cinetica (J)
- $m$ = massa (kg)
- $v$ = modulo della velocità (m/s)

L'energia cinetica cresce con il **quadrato** della velocità. La quantità di moto $p = mv$ cresce invece in modo lineare. Il legame è $E_k = p^2/(2m)$. Se la velocità raddoppia, $p$ raddoppia ma $E_k$ quadruplica.

## Teorema dell'energia cinetica (delle forze vive)
Il lavoro della **risultante** di tutte le forze su un punto materiale è uguale alla variazione della sua energia cinetica.

$$L_{AB} = E_{k,B} - E_{k,A} = \tfrac12 mv_B^2 - \tfrac12 mv_A^2$$

dove:
- $L_{AB}$ = lavoro totale di tutte le forze tra A e B (J)
- $v_A, v_B$ = velocità iniziale e finale (m/s)

Vale per qualsiasi forza: costante o variabile, conservativa o no. Deve però essere il lavoro di **tutte** le forze.

Verifica semplice (forza costante $F$, partenza da fermo, tratto rettilineo $l$):
1. Moto uniformemente accelerato: $v^2 = 2al$.
2. Moltiplico per $\tfrac12 m$: $\tfrac12 mv^2 = mal = Fl$.
3. $Fl$ è il lavoro; $\tfrac12 mv^2$ è l'energia cinetica finale.

Intuizione: l'energia cinetica è una proprietà del corpo. Il lavoro è energia trasferita al corpo.

::: esempio
- Da $4$ a $8\,\mathrm{m/s}$ con $m = 5\,\mathrm{kg}$: $L = \tfrac12 \cdot 5 \cdot (64 - 16) = 120\,\mathrm J$.
- Carrello di $2\,\mathrm{kg}$ tirato con $50\,\mathrm N$ per $10\,\mathrm m$, senza attrito, da fermo: $E_k = Fs = 500\,\mathrm J$.
:::

## Lavoro della forza peso
Il peso è costante e verticale. Il lavoro dipende solo dal dislivello, non dal percorso.

$$L_{peso} = mg\,(y_A - y_B)$$

dove:
- $y_A, y_B$ = quote iniziale e finale (m)
- $g = 9{,}8\,\mathrm{m/s^2}$

Se il corpo scende il lavoro del peso è positivo. Se sale è negativo. Per sollevare un corpo di $h$ a velocità costante serve un lavoro $mgh$.

::: esempio
Libro di $2\,\mathrm{kg}$ dal pavimento a un tavolo di $90\,\mathrm{cm}$: $L = 2 \cdot 9{,}8 \cdot 0{,}9 \approx 17{,}6\,\mathrm J$.
:::

## Pendolo e molla: due lavori notevoli
**Pendolo.** Dall'angolo $\theta_0$ al punto più basso il peso compie $L = mgl(1 - \cos\theta_0)$. Per il teorema delle forze vive:

$$v_{max} = \sqrt{2gl(1 - \cos\theta_0)}$$

dove $l$ = lunghezza del filo (m), $\theta_0$ = angolo iniziale con la verticale.

**Molla.** Da $x_A$ a $x_B$ la forza elastica compie:

$$L_{AB} = -\tfrac12 k\,(x_B^2 - x_A^2)$$

dove $k$ = costante elastica (N/m). È positivo se il corpo si avvicina alla posizione di riposo.

## Lavoro dell'attrito
L'attrito radente è sempre opposto allo spostamento. Il suo lavoro è sempre negativo: $L = -F_a\,s$, con $s$ lunghezza del percorso effettivo. Dipende quindi dal percorso, non solo da partenza e arrivo.

## Il pallonetto: attenzione al punto più alto
Nel punto più alto di una traiettoria parabolica (senza aria):
- la componente verticale della velocità è nulla;
- la componente orizzontale resta uguale;
- l'accelerazione è $g$, verso il basso;
- è passata metà del tempo di volo.

Quindi solo **una parte** dell'energia cinetica è diventata potenziale.

::: attenzione
Errore tipico: dire che nel punto più alto tutta l'energia cinetica è diventata potenziale. Vale solo per un lancio perfettamente verticale.
:::

::: esame
Nelle aperte chiedono di esporre il teorema delle forze vive: enunciato, formula e che il lavoro è quello della risultante.
:::

::: sintesi
- $L = Fs\cos\theta$ (J); in generale $L = \int \vec F \cdot d\vec s$.
- Forza perpendicolare allo spostamento (centripeta, tensione del pendolo): lavoro nullo.
- $E_k = \tfrac12 mv^2 = p^2/2m$: cresce col quadrato di $v$.
- Teorema delle forze vive: $L_{tot} = \Delta E_k$, per qualsiasi forza.
- Peso: $L = mg\,\Delta h$, indipendente dal percorso; attrito: sempre negativo.
:::

=== 18 dispense
# Lezione 18 — Lavoro e potenza

## Il lavoro: definizione
Una forza compie lavoro quando il suo punto di applicazione si sposta e la forza ha una componente lungo lo spostamento. Il lavoro lo compie sempre una **forza**, non un corpo o una persona.

$$L = F\,s\cos\theta$$

dove:
- $L$ = lavoro (J)
- $F$ = modulo della forza (N)
- $s$ = spostamento (m)
- $\theta$ = angolo tra forza e spostamento

Se la forza è variabile si usa l'integrale: $L = \int_{x_1}^{x_2} F(x)\,dx$, cioè l'area sotto il grafico di $F(x)$.

::: esempio
Una forza di $100\,\mathrm N$ sposta un oggetto di $2\,\mathrm m$ nella sua direzione: $L = 100 \cdot 2 = 200\,\mathrm J$.
:::

## Lavoro positivo, negativo e nullo
| Lavoro | Angolo | Significato | Esempi |
|---|---|---|---|
| Positivo (motore) | $\theta < 90°$ | la forza favorisce il moto | peso di un corpo che scende; calamita che attira uno spillo; mano che spinge un carrello |
| Negativo (resistente) | $\theta > 90°$ | la forza si oppone allo spostamento | peso di un corpo che sale; attrito; giocatore che ferma la palla |
| Nullo | $\theta = 90°$ o spostamento nullo | nessun contributo al moto | peso di una valigia su un nastro orizzontale; forza centripeta; mattoni che reggono un mattone fermo |

::: esempio
Un aereo trascina uno striscione con $1000\,\mathrm N$ a $300\,\mathrm{km/h}$ per 30 minuti. Percorre $150\,\mathrm{km}$. $L = 1000 \cdot 1{,}5 \cdot 10^5 = 1{,}5 \cdot 10^8\,\mathrm J$, positivo.
:::

## Lavoro contro la gravità
Per sollevare un peso $P = mg$ di un'altezza $h$ serve un lavoro $L = mgh$. Dipende solo dal dislivello. Il percorso e il tempo non contano.

::: esempio
- Peso di $2550\,\mathrm N$ sollevato di $2\,\mathrm m$: $L = 5100\,\mathrm J$.
- Una gru compie $90\,\mathrm{kJ}$ su $500\,\mathrm{kg}$: $h = L/(mg) = 90\,000/4900 \approx 18{,}4\,\mathrm m$.
- Due alpinisti dello stesso peso, uno per i tornanti e uno in linea retta: stesso lavoro contro la gravità.
:::

Se un carico scende o sale **a velocità costante**, la risultante è nulla. La forza della gru è uguale al peso: $300\,\mathrm{kg}$ richiedono $F = 300 \cdot 9{,}8 = 2940\,\mathrm N$.

L'energia potenziale del peso rispetto al pavimento è $U = mgh$. Esempio: $5\,\mathrm{kg}$ a $20\,\mathrm{cm}$ hanno $U = 9{,}8\,\mathrm J$.

## Teorema dell'energia cinetica
Il lavoro totale di tutte le forze su un punto materiale è uguale alla variazione della sua energia cinetica.

$$L_{tot} = \tfrac12 mv_f^2 - \tfrac12 mv_i^2$$

dove:
- $L_{tot}$ = lavoro della risultante (J)
- $m$ = massa (kg)
- $v_i, v_f$ = velocità iniziale e finale (m/s)

**Ambito di validità**: vale per un punto materiale e per qualsiasi tipo di forza, conservativa o no, costante o variabile. Bisogna però mettere il lavoro di tutte le forze, attrito compreso. Vale in un riferimento inerziale.

L'energia cinetica $E_k = \tfrac12 mv^2$ è l'energia legata al moto. Il lavoro è il modo per cambiarla: lavoro positivo la aumenta, negativo la diminuisce.

::: esempio
- Moto di $100\,\mathrm{kg}$ a $72\,\mathrm{km/h} = 20\,\mathrm{m/s}$: $E_k = \tfrac12 \cdot 100 \cdot 400 = 2{,}0 \cdot 10^4\,\mathrm J$.
- Auto di $1000\,\mathrm{kg}$ portata da ferma a $30\,\mathrm{m/s}$: $L = \tfrac12 \cdot 1000 \cdot 900 = 450\,\mathrm{kJ}$.
- Auto di $1600\,\mathrm{kg}$ da $80$ a $100\,\mathrm{km/h}$ ($22{,}2 \to 27{,}8\,\mathrm{m/s}$): $L \approx 2{,}22 \cdot 10^5\,\mathrm J$.
- Palla di $0{,}2\,\mathrm{kg}$ lanciata a $20\,\mathrm{m/s}$: la forza di lancio compie $\tfrac12 \cdot 0{,}2 \cdot 400 = 40\,\mathrm J$.
:::

::: esempio
Un proiettile di $3\,\mathrm g$ a $400\,\mathrm{m/s}$ si ferma in un albero. Tutta l'energia cinetica diventa calore: $\tfrac12 \cdot 0{,}003 \cdot 400^2 = 240\,\mathrm J$.
:::

## La potenza
La potenza dice quanto in fretta si compie un lavoro. Stesso lavoro in meno tempo = potenza maggiore.

$$P_{media} = \frac{L}{\Delta t} \qquad P = \frac{dL}{dt} = \vec F \cdot \vec v$$

dove:
- $P$ = potenza (W); nelle dispense è indicata anche con $W$
- $L$ = lavoro compiuto (J)
- $\Delta t$ = tempo complessivamente impiegato (s)
- $\vec F$ = forza applicata (N)
- $\vec v$ = velocità del punto (m/s)

Unità: il watt, $1\,\mathrm W = 1\,\mathrm{J/s}$. Il kilowattora ($\mathrm{kWh}$) è invece un'unità di **energia**: $1\,\mathrm{kWh} = 3{,}6 \cdot 10^6\,\mathrm J$.

Da $L = P\,\Delta t$: due motori di potenza diversa possono compiere lo stesso lavoro, se impiegano tempi diversi.

Per sollevare un carico a velocità costante: $P = mgv$.

::: esempio
- Ascensore di $1000\,\mathrm{kg}$ che sale di $50\,\mathrm m$ in $20\,\mathrm s$: $P = mgh/t = 1000 \cdot 9{,}8 \cdot 50/20 = 24{,}5\,\mathrm{kW}$.
- Argano che solleva $50\,\mathrm{kg}$ a $3\,\mathrm{m/s}$: $P = 50 \cdot 9{,}8 \cdot 3 \approx 1{,}5\,\mathrm{kW}$.
- $1500\,\mathrm J$ con $280\,\mathrm W$: $t = 1500/280 \approx 5{,}4\,\mathrm s$.
- Ascensore: 6 piani in $30\,\mathrm s$ (0,2 piani/s). Montacarichi, stesso carico: 1 piano in $10\,\mathrm s$ (0,1 piani/s). L'ascensore ha potenza doppia.
:::

::: attenzione
Non confondere le unità: lavoro ed energia in joule (J, kJ), potenza in watt (W, kW). Nei quiz le opzioni con l'unità sbagliata sono quasi sempre trappole.
:::

::: esame
Nelle aperte chiedono: definire il lavoro con esempi di lavoro positivo, negativo e nullo; definire la potenza con un esempio; enunciare il teorema dell'energia cinetica con il suo ambito di validità; spiegare il legame tra energia cinetica e lavoro.
:::

::: sintesi
- $L = Fs\cos\theta$; positivo se $\theta < 90°$, negativo se $\theta > 90°$, nullo se $\theta = 90°$.
- Contro la gravità: $L = mgh$, indipendente dal percorso.
- $L_{tot} = \Delta E_k$ per qualsiasi forza, contando tutte le forze.
- Potenza: $P = L/\Delta t = Fv$, in watt.
- Stesso lavoro con potenze diverse → tempi diversi.
:::

=== 19 dispense
# Lezione 19 — Forze conservative

## Definizione di forza conservativa
Una forza è conservativa se il suo lavoro tra due punti A e B dipende solo da A e B, non dal percorso seguito. Le due frasi seguenti dicono la stessa cosa:

1. Il lavoro da A a B è lo stesso su qualunque percorso.
2. Il lavoro su **qualsiasi percorso chiuso** è nullo.

$$\oint \vec F \cdot d\vec s = 0$$

dove:
- $\vec F$ = forza (N)
- $d\vec s$ = spostamento elementare lungo il percorso (m)
- $\oint$ = integrale su un percorso chiuso (si torna al punto di partenza)

Perché sono equivalenti: vai da A a B per una strada e torni per un'altra. Se il lavoro dipende solo dagli estremi, andata e ritorno si annullano.

## Esempi
| Conservative | Non conservative (dissipative) |
|---|---|
| forza peso | attrito radente (cinetico) |
| forza elastica | attrito viscoso |
| forza gravitazionale | resistenza dell'aria |
| forza elettrostatica | |

**Peso.** È costante e verticale. Il lavoro vale $mg(y_A - y_B)$: dipende solo dal dislivello.

**Attrito.** È sempre opposto allo spostamento. Il lavoro è $-F_a \cdot$ (lunghezza del percorso). Un percorso più lungo dissipa di più. Su un giro chiuso il lavoro è negativo, non nullo.

::: esempio
Un escursionista sale su un monte. Il lavoro del peso su di lui è lo stesso per un sentiero breve e ripido o lungo e poco ripido. Conta solo il dislivello. Il tempo non conta.
:::

::: attenzione
Il lavoro non è una forza. Se tra le opzioni "quale forza non è conservativa" compare "il lavoro", è una trappola.
:::

## Campo di forze conservativo
Un campo di forze associa una forza a ogni punto dello spazio: $\vec F(x, y, z)$. Consideriamo campi stazionari, cioè che non cambiano nel tempo. Il campo è conservativo se il lavoro per andare da un punto a un altro non dipende dal percorso. Equivalente: il lavoro su ogni percorso chiuso è nullo. Il campo gravitazionale e quello elettrostatico sono conservativi.

## Energia potenziale
Solo per una forza conservativa si può definire l'energia potenziale $U$. È una funzione della sola posizione. Il lavoro è la diminuzione di $U$.

$$L_{A\to B} = U_A - U_B = -\Delta U$$

dove:
- $L_{A\to B}$ = lavoro della forza conservativa da A a B (J)
- $U_A, U_B$ = energia potenziale in A e in B (J)

Se la forza compie lavoro positivo, l'energia potenziale diminuisce. $U$ è definita a meno di una costante: conta solo la differenza. Per l'attrito non esiste un'energia potenziale, perché il suo lavoro dipende dal percorso.

| Forza | Energia potenziale |
|---|---|
| Peso | $U = mgh$ |
| Elastica | $U = \tfrac12 kx^2$ |

dove $m$ = massa (kg), $g = 9{,}8\,\mathrm{m/s^2}$, $h$ = quota (m), $k$ = costante elastica (N/m), $x$ = deformazione (m).

## Dall'energia potenziale alla forza: il gradiente
Si può anche fare il percorso inverso: conoscendo $U$ si trova la forza. La forza è la derivata di $U$ cambiata di segno.

$$F_x = -\frac{dU}{dx} \qquad \vec F = -\nabla U = -\left(\frac{\partial U}{\partial x}, \frac{\partial U}{\partial y}, \frac{\partial U}{\partial z}\right)$$

dove:
- $\nabla$ = operatore gradiente ("nabla")
- $\partial U/\partial x$ = derivata di $U$ rispetto a $x$, con $y$ e $z$ fissi (J/m = N)

Intuizione: la forza spinge verso dove l'energia potenziale diminuisce, e tanto più forte quanto più $U$ cambia in fretta.

::: esempio
Molla: $U = \tfrac12 kx^2$, quindi $F = -dU/dx = -kx$. È la legge di Hooke.
:::

::: esame
Nelle aperte chiedono di definire la forza conservativa e il campo di forze conservativo. Scrivi entrambe le forme equivalenti (lavoro indipendente dal percorso, lavoro nullo sui percorsi chiusi) e cita esempi e controesempi.
:::

::: sintesi
- Conservativa: lavoro indipendente dal percorso ⇔ lavoro nullo su ogni percorso chiuso.
- Conservative: peso, elastica, gravitazionale, elettrostatica. Non conservative: attrito.
- $L_{A\to B} = U_A - U_B = -\Delta U$.
- $U_{peso} = mgh$, $U_{molla} = \tfrac12 kx^2$; nessuna $U$ per l'attrito.
- $\vec F = -\nabla U$, in una dimensione $F = -dU/dx$.
:::

=== 20 dispense
# Lezione 20 — Energia potenziale e conservazione dell'energia meccanica

## Energia potenziale gravitazionale
L'energia potenziale gravitazionale è l'energia che un corpo ha per la sua quota. Si definisce perché il peso è una forza conservativa: il suo lavoro dipende solo dalla quota iniziale e finale. Così a ogni quota si associa un numero, e il lavoro del peso diventa una semplice differenza.

$$U = mgh$$

dove:
- $U$ = energia potenziale gravitazionale (J)
- $m$ = massa (kg)
- $g$ = accelerazione di gravità, $9{,}8\,\mathrm{m/s^2}$
- $h$ = quota rispetto a un livello di riferimento scelto (m)

Lo zero si sceglie liberamente (pavimento, suolo…). Conta solo la variazione $\Delta U = mg\,\Delta h$.

::: esempio
- Pallina di $100\,\mathrm g$ a $50\,\mathrm{cm}$: $U = 0{,}1 \cdot 9{,}8 \cdot 0{,}5 = 0{,}49\,\mathrm J$.
- Cameriere di $90\,\mathrm{kg}$ dal piano terra al quarto piano (piani di $5\,\mathrm m$, quindi $20\,\mathrm m$): $\Delta U = 90 \cdot 9{,}8 \cdot 20 = 17\,640\,\mathrm J$.
- Corpo di $2\,\mathrm{kg}$ a $20\,\mathrm m$; $U$ aumenta di $490\,\mathrm J$: $\Delta h = 490/19{,}6 = 25\,\mathrm m$, quota finale $45\,\mathrm m$.
:::

## Conservazione dell'energia meccanica
Se su un corpo lavorano solo forze conservative, l'energia meccanica resta costante. L'energia cambia forma, ma il totale non cambia.

$$E = E_k + U = \text{costante} \qquad \tfrac12 mv_A^2 + U_A = \tfrac12 mv_B^2 + U_B$$

dove:
- $E$ = energia meccanica (J)
- $E_k = \tfrac12 mv^2$ = energia cinetica (J)
- $U$ = energia potenziale (J)
- A, B = due istanti qualsiasi del moto

Come si ricava, in 3 passi:
1. Teorema dell'energia cinetica: $L = E_{k,B} - E_{k,A}$.
2. Forza conservativa: $L = U_A - U_B$.
3. Uguagliando: $E_{k,A} + U_A = E_{k,B} + U_B$.

Conseguenza: se l'energia cinetica diminuisce, la potenziale aumenta della stessa quantità. E viceversa.

Forze che non compiono lavoro (tensione di un filo, reazione di un piano liscio) non disturbano la conservazione.

## Applicazioni tipiche
**Caduta e lancio verticale.** Da $\tfrac12 mv^2 = mgh$:

$$v = \sqrt{2gh} \qquad h_{max} = \frac{v_0^2}{2g}$$

dove $v$ = velocità dopo una caduta $h$ da fermo (m/s), $v_0$ = velocità di lancio verso l'alto (m/s), $h_{max}$ = altezza massima (m). La massa si semplifica.

::: esempio
Palla di $0{,}2\,\mathrm{kg}$ lanciata in alto a $20\,\mathrm{m/s}$.
- Energia meccanica: $\tfrac12 \cdot 0{,}2 \cdot 400 = 40\,\mathrm J$. Vale $40\,\mathrm J$ in ogni punto, anche a metà salita.
- Altezza massima: $h = 400/19{,}6 \approx 20\,\mathrm m$.
:::

::: esempio
Moneta da un terrazzo di $19{,}6\,\mathrm m$. Tempo di caduta $t = \sqrt{2h/g} = 2\,\mathrm s$. Dopo $0{,}1\,\mathrm s$ ha $v = gt \approx 1\,\mathrm{m/s}$. A metà altezza ($9{,}8\,\mathrm m$) ha $v = \sqrt{2 \cdot 9{,}8 \cdot 9{,}8} \approx 13{,}9\,\mathrm{m/s}$, non $0{,}5\,\mathrm{m/s}$.
:::

**Piano inclinato liscio.** In fondo $E_k = mgh$ e $v = \sqrt{2gh}$. L'angolo non conta, conta solo l'altezza.

::: esempio
Blocco di $4\,\mathrm{kg}$ da $h = 3\,\mathrm m$ su un piano inclinato senza attrito: $E_k = 4 \cdot 9{,}8 \cdot 3 = 117{,}6\,\mathrm J$, $v = \sqrt{2 \cdot 9{,}8 \cdot 3} \approx 7{,}7\,\mathrm{m/s}$.
:::

**Pendolo e altalena.** Agli estremi il corpo è fermo: solo energia potenziale. Nel punto più basso la velocità è massima. La differenza di energia potenziale tra estremo e punto più basso è uguale all'energia cinetica nel punto più basso.

$$E_{k,max} = mgl(1 - \cos\theta_0)$$

dove $l$ = lunghezza del filo (m), $\theta_0$ = angolo di partenza con la verticale.

::: esempio
Pallina di $6\,\mathrm{kg}$, filo di $1\,\mathrm m$, partenza da ferma a 60°: $E_{k,max} = 6 \cdot 9{,}8 \cdot 1 \cdot (1 - 0{,}5) = 29{,}4\,\mathrm J$.
:::

**Molla che lancia un corpo.** L'energia elastica diventa cinetica: $\tfrac12 kx^2 = \tfrac12 mv^2$, quindi $v = x\sqrt{k/m}$.

::: esempio
- Sfera di $50\,\mathrm g$, molla con $k = 40\,\mathrm{N/m}$ compressa di $7\,\mathrm{cm}$: $v = 0{,}07\sqrt{40/0{,}05} \approx 2\,\mathrm{m/s}$.
- Pallina di $150\,\mathrm g$, molla compressa di $20\,\mathrm{cm}$ da una forza di $80\,\mathrm N$: $k = 80/0{,}2 = 400\,\mathrm{N/m}$; $E = \tfrac12 \cdot 400 \cdot 0{,}04 = 8\,\mathrm J$; $v = \sqrt{16/0{,}15} \approx 10{,}3\,\mathrm{m/s}$.
:::

## Forze non conservative
Con attrito o resistenza del mezzo l'energia meccanica non si conserva. La sua variazione è uguale al lavoro delle forze non conservative.

$$L_{nc} = E_{finale} - E_{iniziale} = \Delta E$$

dove:
- $L_{nc}$ = lavoro delle forze non conservative, di solito attrito (J); è negativo
- $E = E_k + U$ = energia meccanica (J)

L'energia "persa" non sparisce. Diventa altre forme, soprattutto calore. L'energia totale di un sistema isolato si conserva sempre.

::: esempio
- Blocco di $5\,\mathrm{kg}$ lanciato a $8\,\mathrm{m/s}$ ($160\,\mathrm J$) su un piano scabro. Comprime di $40\,\mathrm{cm}$ una molla con $k = 900\,\mathrm{N/m}$ ($\tfrac12 \cdot 900 \cdot 0{,}16 = 72\,\mathrm J$). L'attrito ha dissipato $160 - 72 = 88\,\mathrm J$.
- Palla di $1\,\mathrm{kg}$ cade da $1\,\mathrm m$ e rimbalza a $0{,}5\,\mathrm m$: energia dissipata $mg\,\Delta h = 9{,}8 \cdot 0{,}5 \approx 5\,\mathrm J$.
:::

::: esempio
Un sasso cade in un liquido viscoso e perde $10\,\mathrm J$ di energia potenziale. Non si può dire quanto cambi l'energia cinetica. Parte di quei $10\,\mathrm J$ va in attrito, e non sappiamo quanta. Se il sasso ha raggiunto la velocità limite, l'energia cinetica resta costante.
:::

## Teorema dell'energia cinetica: promemoria
Il lavoro di tutte le forze è uguale alla variazione di energia cinetica: $L = \Delta E_k$. Se un corpo di $100\,\mathrm g$ fermo è spinto da $20\,\mathrm N$ per $1\,\mathrm m$, alla fine $E_k = 20 \cdot 1 = 20\,\mathrm J$. Se una forza di $6\,\mathrm N$ agisce per $5\,\mathrm m$ nel verso del moto, compie $L = 30\,\mathrm J$, qualunque sia la velocità iniziale.

## Equilibrio ed energia potenziale
In una dimensione $F = -dU/dx$. Dove $U$ ha un minimo o un massimo la derivata è zero, quindi la forza è zero: sono punti di equilibrio.
- **Minimo** di $U$: equilibrio **stabile**. Se ti sposti, la forza ti riporta indietro.
- **Massimo** di $U$: equilibrio **instabile**. Se ti sposti, la forza ti allontana.
- Tratto piatto di $U$: equilibrio **indifferente**.

## Potenza come rapidità di trasferimento dell'energia
In generale la potenza è la rapidità con cui un sistema trasferisce o trasforma energia: $P = dE/dt$, media $P = \Delta E/\Delta t$ (W).

## Azione e reazione nel rimbalzo
Quando una palla urta il pavimento, palla e pavimento si scambiano forze uguali e opposte (terzo principio). È la reazione del pavimento a far rimbalzare la palla. Queste forze però sono molto più grandi del peso della palla, perché l'urto dura pochissimo.

::: attenzione
Controlla sempre $mgh$ con i numeri: $U = 490\,\mathrm J$ non corrisponde né a $49\,\mathrm{kg}$ a $10\,\mathrm m$ ($4802\,\mathrm J$), né a $20\,\mathrm{kg}$ a $4{,}9\,\mathrm m$ ($\approx 960\,\mathrm J$). E per lanciare $200\,\mathrm g$ fino a $20\,\mathrm m$ servono $0{,}2 \cdot 9{,}8 \cdot 20 = 39{,}2\,\mathrm J$.
:::

::: esame
Nelle aperte chiedono cos'è l'energia potenziale gravitazionale e perché si definisce: $U = mgh$, esiste perché il peso è conservativo, serve a scrivere il lavoro come $-\Delta U$ e a usare la conservazione dell'energia.
:::

::: sintesi
- $U_{peso} = mgh$ rispetto a uno zero scelto; conta solo $\Delta U$.
- Solo forze conservative: $E_k + U$ costante.
- Caduta: $v = \sqrt{2gh}$; lancio: $h_{max} = v_0^2/2g$; molla: $v = x\sqrt{k/m}$.
- Con attrito: $L_{nc} = \Delta E < 0$, l'energia persa diventa calore.
- Minimo di $U$ = equilibrio stabile, massimo = instabile.
:::
