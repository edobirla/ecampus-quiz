=== 48 dispense
SLIDES: 54, 55
# Lezione 48 — Potenziale elettrico, superfici equipotenziali e conservazione dell'energia

Finora il campo elettrostatico è stato descritto con un vettore $\vec E$ in ogni punto: per conoscerlo servono tre numeri (le tre componenti) e per calcolarlo bisogna sommare vettori. In questa lezione si introduce una grandezza **scalare**, il **potenziale elettrico** $V$, che contiene la stessa informazione del campo ma è molto più comoda da calcolare (si sommano numeri con il segno, non vettori) e permette di usare la conservazione dell'energia per studiare il moto delle cariche.

Il percorso è quello già visto in meccanica per la gravità:
1. si calcola il **lavoro** della forza elettrica e si scopre che non dipende dal percorso (la forza è **conservativa**);
2. di conseguenza esiste un'**energia potenziale** $U$;
3. dividendo $U$ per la carica di prova si ottiene il **potenziale** $V$, che dipende solo dalle cariche sorgenti;
4. si rappresentano graficamente i punti con lo stesso potenziale: le **superfici equipotenziali**.

## Lavoro della forza elettrica

Consideriamo una carica sorgente $Q$ ferma nell'origine e una carica $q$ che si sposta nel campo di $Q$. Sulla carica $q$ agisce la forza di Coulomb $\vec F = q\vec E$, con

$$\vec E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\,\vec u_r$$

dove:
- $\vec E$ = campo elettrico generato da $Q$ (N/C = V/m)
- $Q$ = carica sorgente (C)
- $r$ = distanza dalla carica sorgente (m)
- $\vec u_r$ = versore radiale, uscente da $Q$
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{C^2/(N\,m^2)} = 8{,}85\cdot 10^{-12}\,\mathrm{F/m}$ = costante dielettrica del vuoto

### Lavoro su uno spostamento infinitesimo
Se la carica si sposta di un tratto infinitesimo $d\vec s$, il lavoro della forza è il prodotto scalare forza·spostamento:

$$dL = \vec F \cdot d\vec s = q\vec E \cdot d\vec s = qE\,ds\cos\theta$$

dove $\theta$ è l'angolo tra $\vec E$ (radiale) e $d\vec s$. Il prodotto $ds\cos\theta$ è la **proiezione dello spostamento sulla direzione radiale**, cioè di quanto è cambiata la distanza da $Q$: $ds\cos\theta = dr$. Quindi

$$dL = qE\,dr = \frac{qQ}{4\pi\varepsilon_0}\frac{dr}{r^2}$$

Solo la parte radiale dello spostamento conta: muovendosi "di lato" (su una sfera centrata in $Q$) la forza è perpendicolare allo spostamento e non fa lavoro.

### Lavoro su un percorso finito
Per andare da un punto A (a distanza $r_A$) a un punto B (a distanza $r_B$) si sommano tutti i contributi, cioè si integra:

$$L_{AB} = \int_A^B \frac{qQ}{4\pi\varepsilon_0}\frac{dr}{r^2} = \frac{qQ}{4\pi\varepsilon_0}\left[-\frac1r\right]_{r_A}^{r_B} = \frac{qQ}{4\pi\varepsilon_0}\left(\frac{1}{r_A} - \frac{1}{r_B}\right)$$

Passaggi: la primitiva di $1/r^2$ è $-1/r$; si valuta in $r_B$ e si sottrae il valore in $r_A$: $-\frac1{r_B} - \left(-\frac1{r_A}\right) = \frac1{r_A} - \frac1{r_B}$.

Il risultato dipende **solo** dalle distanze iniziale e finale, non dalla forma della traiettoria. Su un percorso chiuso ($A = B$) il lavoro è nullo. Questa è la definizione di **forza conservativa**: la forza elettrostatica, e quindi il campo elettrostatico, sono conservativi.

Per il **principio di sovrapposizione** il risultato vale per qualunque sistema di cariche ferme (discrete o distribuite con continuità): il campo totale è la somma dei campi delle singole cariche, il lavoro totale è la somma dei lavori, e ciascuno dipende solo dagli estremi.

## Energia potenziale elettrostatica

Poiché il lavoro dipende solo dagli estremi, si può definire una funzione delle coordinate $U$, l'**energia potenziale elettrostatica**, tale che:

$$L_{AB} = U(A) - U(B) = -\Delta U$$

dove:
- $L_{AB}$ = lavoro compiuto dalla forza elettrica quando la carica va da A a B (J)
- $U(A)$, $U(B)$ = energia potenziale nei due punti (J)
- $\Delta U = U(B) - U(A)$ = variazione di energia potenziale (J)

Il lavoro della forza del campo è **l'opposto della variazione** di energia potenziale: se il campo fa lavoro positivo, l'energia potenziale diminuisce (come un sasso che cade: la gravità lavora e l'energia potenziale scende).

L'energia potenziale è definita a meno di una costante: conta solo la differenza. Si sceglie **$U = 0$ quando la carica è all'infinito** (dove la forza è nulla). Mandando $r_B \to \infty$ nella formula del lavoro, $U(A) = L_{A\infty}$:

$$U(r) = \frac{1}{4\pi\varepsilon_0}\frac{Qq}{r}$$

dove:
- $U(r)$ = energia potenziale della carica $q$ a distanza $r$ da $Q$ (J)
- $Q$, $q$ = le due cariche, **con il loro segno** (C)
- $r$ = distanza tra le cariche (m)

Significato: $U(r)$ è il lavoro che il campo compie se la carica $q$ si allontana da $r$ fino all'infinito; equivalentemente, è il lavoro che un agente esterno deve fare per portare $q$ dall'infinito fino a $r$ lentamente (senza darle energia cinetica).
- Cariche dello stesso segno ($Qq > 0$): $U > 0$. Avvicinarle costa lavoro (si respingono).
- Cariche di segno opposto ($Qq < 0$): $U < 0$. Il sistema è "legato": per separarle bisogna fornire energia.

Se le cariche sorgenti fisse sono più d'una, $Q_1, Q_2, \dots$, a distanze $r_1, r_2, \dots$ dalla carica $q$, per sovrapposizione:

$$U = \frac{q}{4\pi\varepsilon_0}\sum_i \frac{Q_i}{r_i}$$

## Il potenziale elettrico

L'energia potenziale dipende sia dalle cariche sorgenti sia dalla carica di prova $q$ (è proporzionale a $q$). Dividendo per $q$ si ottiene una grandezza che dipende **solo dalle sorgenti e dal punto**: il **potenziale elettrico**.

$$V = \frac{U}{q}$$

dove:
- $V$ = potenziale elettrico nel punto (V, volt; $1\,\mathrm V = 1\,\mathrm{J/C}$)
- $U$ = energia potenziale che avrebbe una carica di prova $q$ in quel punto (J)
- $q$ = carica di prova (C)

Come il campo $\vec E = \vec F/q$ è "la forza per unità di carica", il potenziale è "l'energia potenziale per unità di carica". È uno **scalare**: un numero (con segno) in ogni punto.

### Differenza di potenziale
Dividendo per $q$ la relazione $L_{AB} = U(A) - U(B)$ e ricordando $L_{AB} = \int_A^B q\vec E\cdot d\vec s$:

$$V_A - V_B = \frac{L_{AB}}{q} = \int_A^B \vec E \cdot d\vec s$$

dove:
- $V_A - V_B$ = differenza di potenziale (d.d.p., o tensione) tra A e B (V)
- $\vec E$ = campo elettrico lungo il percorso (V/m)
- $d\vec s$ = spostamento infinitesimo lungo un percorso qualsiasi da A a B (m)

**Significato fisico**: la differenza di potenziale tra A e B è il lavoro che il campo compie per portare una carica di **1 coulomb** da A a B. L'integrale si può calcolare su qualunque percorso, perché il campo è conservativo.

Conseguenze importanti:
- Se ci si sposta **nel verso del campo** ($\vec E\cdot d\vec s > 0$), $V_A - V_B > 0$: il potenziale **diminuisce**. Il campo punta sempre verso i potenziali più bassi.
- Una carica **positiva** lasciata libera si muove nel verso del campo, quindi verso potenziali più bassi (perde energia potenziale e guadagna energia cinetica). Una carica **negativa** si muove verso potenziali più alti (per lei $U = qV$ diminuisce quando $V$ cresce, perché $q < 0$).

### Lavoro esterno per spostare una carica
Se un agente esterno sposta la carica **lentamente** (senza variare l'energia cinetica), deve applicare una forza uguale e opposta a quella del campo. Il suo lavoro è quindi l'opposto di quello del campo:

$$L_{est} = -L_{campo} = U(B) - U(A) = q\,(V_B - V_A) = q\,\Delta V$$

dove:
- $L_{est}$ = lavoro fatto dall'agente esterno (J)
- $q$ = carica spostata (C), con il segno
- $\Delta V = V_{fin} - V_{iniz}$ = differenza di potenziale tra arrivo e partenza (V)

::: esempio
**Lavoro per spostare una carica.** Quanto lavoro serve per portare una carica $q = 8\,\mu\mathrm C$ da un punto a potenziale 0 V a un punto a potenziale 75 V?

$L_{est} = q\,\Delta V = 8 \cdot 10^{-6}\,\mathrm C \cdot (75 - 0)\,\mathrm V = 600 \cdot 10^{-6}\,\mathrm J = 6 \cdot 10^{-4}\,\mathrm J = 600\,\mu\mathrm J$.

Il lavoro è positivo: una carica positiva va portata "in salita" di potenziale, contro il campo.
:::

## Potenziale di una carica puntiforme

Dividendo l'energia potenziale $U(r) = \frac{Qq}{4\pi\varepsilon_0 r}$ per $q$, con lo zero all'infinito:

$$V(r) = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r} = k\frac{Q}{r}$$

dove:
- $V(r)$ = potenziale a distanza $r$ dalla carica (V)
- $Q$ = carica sorgente (C), **con il suo segno**
- $r$ = distanza dal punto alla carica (m)
- $k = \frac{1}{4\pi\varepsilon_0} \approx 8{,}99 \cdot 10^9\,\mathrm{N\,m^2/C^2}$ = costante di Coulomb

Si può ricavare anche direttamente dalla definizione, integrando il campo da $r$ all'infinito lungo un raggio:

$$V(r) - V(\infty) = \int_r^\infty \frac{Q}{4\pi\varepsilon_0 r'^2}\,dr' = \frac{Q}{4\pi\varepsilon_0}\left[-\frac1{r'}\right]_r^\infty = \frac{Q}{4\pi\varepsilon_0}\left(0 + \frac1r\right)$$

e con $V(\infty) = 0$ si ottiene la formula.

Proprietà:
- dipende solo dalla distanza: è uguale su tutte le sfere centrate nella carica;
- è **positivo** intorno a una carica positiva (cresce avvicinandosi), **negativo** intorno a una carica negativa (diventa sempre più negativo avvicinandosi);
- decresce come $1/r$, cioè **più lentamente del campo**, che va come $1/r^2$: raddoppiando la distanza il potenziale si dimezza, il campo diventa un quarto.

### Più cariche: sovrapposizione
Il potenziale di un sistema di cariche è la **somma algebrica** (con il segno, senza angoli né componenti) dei potenziali delle singole cariche:

$$V(P) = \sum_i \frac{1}{4\pi\varepsilon_0}\frac{Q_i}{r_i}$$

dove $r_i$ è la distanza del punto P dalla carica $Q_i$. Per una distribuzione continua la somma diventa un integrale: $V(P) = \frac{1}{4\pi\varepsilon_0}\int \frac{dq}{r}$.

Questo è il grande vantaggio del potenziale rispetto al campo: si sommano numeri, non vettori.

::: esempio
**Due cariche sulla congiungente.** $Q_1 = 6\,\mathrm{nC}$ e $Q_2 = -3\,\mathrm{nC}$ distano 80 cm. Potenziale nel punto P sulla congiungente a 20 cm da $Q_1$.

1. P sta tra le due cariche: $r_1 = 0{,}20\,\mathrm m$, $r_2 = 0{,}80 - 0{,}20 = 0{,}60\,\mathrm m$.
2. Contributo di $Q_1$: $k\frac{Q_1}{r_1} = 8{,}99\cdot10^9 \cdot \frac{6\cdot10^{-9}}{0{,}2} = 8{,}99\cdot 10^9 \cdot 3\cdot10^{-8} = 269{,}7\,\mathrm V$.
3. Contributo di $Q_2$ (negativo): $k\frac{Q_2}{r_2} = 8{,}99\cdot10^9 \cdot \frac{-3\cdot10^{-9}}{0{,}6} = 8{,}99\cdot 10^9 \cdot(-0{,}5\cdot10^{-8}) = -44{,}95\,\mathrm V$.
4. Somma: $V = 269{,}7 - 44{,}95 \approx 224{,}8\,\mathrm V$.

Se si dimenticasse il segno di $Q_2$ si otterrebbe $314{,}6\,\mathrm V$: sbagliato.
:::

::: esempio
**Quattro cariche ai vertici di un quadrato** (esercizio della dispensa). Quadrato di lato $d = 1{,}3\,\mathrm m$, cariche $q_1 = +12\,\mathrm{nC}$, $q_2 = -24\,\mathrm{nC}$, $q_3 = +31\,\mathrm{nC}$, $q_4 = +17\,\mathrm{nC}$. Potenziale al centro P.

1. Tutte le cariche sono alla stessa distanza dal centro: metà della diagonale, $r = \frac{d\sqrt2}{2} = \frac{d}{\sqrt2} = \frac{1{,}3}{1{,}414} \approx 0{,}919\,\mathrm m$.
2. Con $r$ comune si può raccogliere: $V = \frac{k}{r}(q_1 + q_2 + q_3 + q_4)$.
3. Somma delle cariche con il segno: $12 - 24 + 31 + 17 = 36\,\mathrm{nC}$.
4. $V = \frac{8{,}99\cdot10^9 \cdot 36\cdot 10^{-9}}{0{,}919} = \frac{323{,}6}{0{,}919} \approx 352\,\mathrm V$.

Il campo al centro invece andrebbe calcolato sommando quattro vettori: molto più lungo.
:::

::: esempio
**Tre cariche su un triangolo isoscele** (esercizio della dispensa). Triangolo con base 2,00 cm e lati uguali 4,00 cm; nella figura $+q$ è sul vertice in alto e $-q$ sui due estremi della base, con $q = 7{,}00\,\mu\mathrm C$. Potenziale e campo nel punto medio P della base.

1. Distanze da P: le due cariche di base distano metà base, $1{,}00\,\mathrm{cm} = 0{,}0100\,\mathrm m$. Il vertice dista quanto l'altezza: $h = \sqrt{4{,}00^2 - 1{,}00^2} = \sqrt{15} \approx 3{,}873\,\mathrm{cm} = 0{,}03873\,\mathrm m$ (Pitagora sul mezzo triangolo).
2. Potenziale: $V = kq\left(\frac{1}{h} - \frac{1}{0{,}01} - \frac1{0{,}01}\right) = 8{,}99\cdot10^9\cdot 7\cdot10^{-6}\,(25{,}82 - 200)\,\mathrm{m^{-1}}$.
3. $kq = 6{,}293\cdot 10^4\,\mathrm{V\,m}$, quindi $V = 6{,}293\cdot10^4 \cdot (-174{,}2) \approx -1{,}10\cdot 10^7\,\mathrm V$.
4. Campo: le due cariche negative sono simmetriche rispetto a P e alla stessa distanza; i loro campi in P hanno stesso modulo e versi opposti (lungo la base), quindi si annullano. Resta solo il campo della carica in alto: $E = \frac{kq}{h^2} = \frac{6{,}293\cdot10^4}{(0{,}03873)^2} = \frac{6{,}293\cdot 10^4}{1{,}5\cdot10^{-3}} \approx 4{,}2\cdot10^7\,\mathrm{N/C}$, diretto lungo l'altezza, in verso uscente dalla carica positiva (verso il basso, oltre la base).

Il potenziale si somma con i segni; il campo va sommato come vettori.
:::

::: esempio
**Anello carico** (esercizio della dispensa). Una carica $q$ è distribuita uniformemente su un anello sottile di raggio $R$. Potenziale in un punto dell'asse a distanza $z$ dal centro.

1. Densità lineare: $\lambda = \frac{q}{2\pi R}$ (C/m). Un tratto $dl$ di anello porta la carica $dq = \lambda\,dl$.
2. Ogni tratto dista dal punto dell'asse la stessa quantità $r = \sqrt{R^2 + z^2}$ (Pitagora: raggio e quota).
3. $V = \frac{1}{4\pi\varepsilon_0}\int \frac{dq}{r} = \frac{1}{4\pi\varepsilon_0\sqrt{R^2+z^2}}\int dq = \frac{1}{4\pi\varepsilon_0}\frac{q}{\sqrt{R^2+z^2}}$.

Controlli: al centro ($z = 0$) $V = \frac{q}{4\pi\varepsilon_0 R}$; molto lontano ($z \gg R$) $V \approx \frac{q}{4\pi\varepsilon_0 z}$, come una carica puntiforme.
:::

## Sfera carica: potenziale dal flusso

Una sfera con carica distribuita in modo uniforme (o un guscio sferico, o una sfera conduttrice), vista **da fuori**, genera lo stesso campo di una carica puntiforme posta al centro (lo si dimostra con il teorema di Gauss). Quindi anche il potenziale esterno è quello di una carica puntiforme:

$$V(d) = \frac{Q}{4\pi\varepsilon_0 d} \qquad (d \ge \text{raggio della sfera})$$

Il teorema di Gauss lega la carica al flusso del campo attraverso una superficie chiusa che la racchiude: $\Phi = Q/\varepsilon_0$, cioè $Q = \varepsilon_0\Phi$. Sostituendo, $\varepsilon_0$ si semplifica:

$$V(d) = \frac{\varepsilon_0\Phi}{4\pi\varepsilon_0 d} = \frac{\Phi}{4\pi d}$$

dove:
- $\Phi$ = flusso del campo attraverso una qualunque superficie chiusa che contiene tutta la carica (N·m²/C = V·m)
- $d$ = distanza dal centro (m)

::: esempio
**Potenziale noto il flusso.** Una superficie gaussiana sferica di raggio 4 cm è concentrica a una sfera uniformemente carica di raggio 1 cm; il flusso vale $5{,}6\cdot10^4\,\mathrm{N\,m^2/C}$. Potenziale a $d = 12\,\mathrm{cm}$ dal centro.

1. La gaussiana (4 cm) contiene tutta la sfera (1 cm): il flusso misura tutta la carica.
2. Il punto (12 cm) è fuori dalla sfera: vale la formula della carica puntiforme.
3. $V = \frac{\Phi}{4\pi d} = \frac{5{,}6\cdot 10^4}{4\pi\cdot 0{,}12} = \frac{5{,}6\cdot10^4}{1{,}508} \approx 3{,}71\cdot10^4\,\mathrm V$.

Il raggio della sfera e quello della gaussiana servono solo a capire che la carica è tutta racchiusa; nel calcolo entra la distanza 12 cm. Usare $2\pi$ al posto di $4\pi$ dà il doppio: errore.
:::

## Unità di misura: volt ed elettronvolt

- **Volt**: $1\,\mathrm V = 1\,\mathrm{J/C}$. Una d.d.p. di 1 V significa che il campo compie 1 J di lavoro su 1 C che passa da un punto all'altro.
- Da $V_A - V_B = \int \vec E\cdot d\vec s$ segue che il campo si misura in volt al metro: $1\,\mathrm{N/C} = 1\,\mathrm{V/m}$ (infatti $1\,\mathrm{V/m} = 1\,\mathrm{J/(C\,m)} = 1\,\mathrm{N\,m/(C\,m)} = 1\,\mathrm{N/C}$).
- **Elettronvolt**: $1\,\mathrm{eV}$ è l'energia che acquista una carica elementare $e$ attraversando una d.d.p. di 1 V: $1\,\mathrm{eV} = 1{,}60\cdot10^{-19}\,\mathrm C\cdot 1\,\mathrm V = 1{,}60\cdot 10^{-19}\,\mathrm J$. È l'unità comoda per le energie di elettroni, atomi e particelle.

## Conservazione dell'energia per una carica in moto

Se su una particella di carica $q$ e massa $m$ agisce **solo** la forza elettrostatica (che è conservativa), la sua energia meccanica totale si conserva. L'energia potenziale nel punto in cui il potenziale vale $V$ è $U = qV$, quindi:

$$E_{tot} = \tfrac12 mv^2 + qV = \text{costante}$$

dove:
- $m$ = massa della particella (kg)
- $v$ = velocità nel punto (m/s)
- $q$ = carica (C), con il segno
- $V$ = potenziale nel punto in cui si trova la particella (V)

Tra due punti A e B: $\tfrac12 mv_B^2 - \tfrac12 mv_A^2 = q(V_A - V_B)$: l'energia cinetica guadagnata è uguale all'energia potenziale persa.

### Particella accelerata da ferma
Se la particella parte da ferma e attraversa una d.d.p. di modulo $\Delta V$ (nel verso che la accelera: un elettrone va verso il potenziale più alto):

$$\tfrac12 mv^2 = |q|\,\Delta V \quad\Rightarrow\quad v = \sqrt{\frac{2|q|\,\Delta V}{m}}$$

La velocità finale cresce come la **radice quadrata** della tensione di accelerazione; l'energia cinetica cresce invece in modo proporzionale alla tensione.

::: esempio
**Tensione quadruplicata.** Un elettrone, partito da fermo, è accelerato da una d.d.p. $V$; di quanto aumenta la velocità finale se la d.d.p. diventa $4V$?

$\frac{v'}{v} = \sqrt{\frac{2e\cdot 4V/m}{2eV/m}} = \sqrt4 = 2$. La velocità raddoppia (l'energia cinetica invece quadruplica).

Valori numerici: con $\Delta V = 100\,\mathrm V$, $v = \sqrt{\frac{2\cdot1{,}6\cdot10^{-19}\cdot100}{9{,}11\cdot10^{-31}}} = \sqrt{3{,}51\cdot10^{13}} \approx 5{,}9\cdot10^6\,\mathrm{m/s}$; l'energia acquistata è 100 eV.
:::

## Campo uniforme e potenziale

In una regione dove il campo è **uniforme** (stesso modulo, direzione e verso ovunque, per esempio tra due lastre parallele cariche), diretto lungo l'asse x, l'integrale della d.d.p. diventa un semplice prodotto:

$$V_A - V_B = \int_A^B \vec E\cdot d\vec s = E_x (x_B - x_A)$$

quindi il potenziale varia **linearmente** con x, e

$$E_x = -\frac{V_B - V_A}{x_B - x_A} = -\frac{\Delta V}{\Delta x}$$

dove:
- $E_x$ = componente del campo lungo x (V/m), con il segno
- $\Delta V$ = variazione del potenziale (V) su un tratto $\Delta x$ (m)

Il segno meno dice che il campo punta nel verso in cui il potenziale **scende**. Tra due lastre parallele a distanza $d$ con d.d.p. $V$, in modulo:

$$E = \frac{V}{d}$$

dove:
- $E$ = modulo del campo tra le lastre (V/m)
- $V$ = d.d.p. tra le lastre (V)
- $d$ = distanza tra le lastre (m)

::: esempio
**Campo da due valori del potenziale.** Campo uniforme lungo x; in $x = 2\,\mathrm m$ si ha $V = 150\,\mathrm V$, in $x = 5\,\mathrm m$ si ha $V = 450\,\mathrm V$.

$E_x = -\frac{450 - 150}{5 - 2} = -\frac{300}{3} = -100\,\mathrm{V/m}$.

Il potenziale cresce verso le x positive, quindi il campo punta verso le x **negative**: il segno meno fa parte della risposta. Il modulo è 100 V/m.
:::

::: esempio
**Lastre parallele.** Due lastre a d.d.p. 50 V distano 5,0 cm. $E = \frac{V}{d} = \frac{50\,\mathrm V}{0{,}050\,\mathrm m} = 1000\,\mathrm{V/m} = 1{,}0\cdot10^3\,\mathrm{V/m}$.

Ricordarsi di convertire i centimetri in metri: con $d = 5$ si otterrebbe 10 V/m, sbagliato.
:::

## Superfici equipotenziali

Come il campo si rappresenta con le linee di forza, il potenziale si rappresenta con le **superfici equipotenziali**: l'insieme dei punti dello spazio in cui il potenziale ha lo stesso valore. In coordinate cartesiane una superficie equipotenziale ha equazione

$$V(x, y, z) = \text{costante}$$

Disegnandone una famiglia (per esempio una ogni 10 V) si ottiene una "mappa" del potenziale, come le curve di livello di una carta geografica.

### Il campo è perpendicolare alle superfici equipotenziali
Dimostrazione: ci si sposta di un tratto infinitesimo $d\vec s$ **lungo** la superficie. Il potenziale non cambia, quindi

$$dV = -\vec E\cdot d\vec s = 0$$

(la relazione $dV = -\vec E\cdot d\vec s$ è la forma infinitesima di $V_A - V_B = \int_A^B\vec E\cdot d\vec s$). Un prodotto scalare nullo con vettori non nulli significa che $\vec E \perp d\vec s$. Siccome questo vale per **ogni** spostamento tangente alla superficie, il campo è perpendicolare alla superficie in ogni suo punto.

Conseguenze:
- le linee di campo **tagliano ad angolo retto** le superfici equipotenziali;
- il campo punta verso le superfici a potenziale **più basso**, nella direzione in cui il potenziale diminuisce più rapidamente (è la direzione dell'opposto del gradiente, vedi lezione 49);
- spostare una carica lungo una superficie equipotenziale **non richiede lavoro** ($L = q\,\Delta V = 0$);
- due superfici equipotenziali con valori diversi non si intersecano mai (un punto non può avere due potenziali);
- dove le superfici (disegnate a passi uguali di $V$) sono più fitte, il campo è più intenso, perché $V$ cambia di più in meno spazio.

| Sorgente | Superfici equipotenziali | Linee di campo |
|---|---|---|
| Carica puntiforme | sfere concentriche centrate nella carica | semirette radiali |
| Campo uniforme | piani paralleli, perpendicolari al campo | rette parallele equidistanti |
| Dipolo | superfici chiuse intorno a ciascuna carica, più il piano mediano a $V = 0$ | linee che escono da $+q$ ed entrano in $-q$ |
| Conduttore in equilibrio | la sua superficie è una equipotenziale | perpendicolari alla superficie |

::: attenzione
Le superfici equipotenziali **non** sono parallele alle linee di campo e **non** sono perpendicolari tra loro: sono perpendicolari alle **linee di campo**. Non sono neanche sempre chiuse: nel campo uniforme sono piani infiniti.
:::

## Sfere conduttrici a contatto

Due conduttori collegati (o messi a contatto) formano un unico conduttore, che in equilibrio ha **lo stesso potenziale** ovunque (lezione 49). La carica si sposta dall'uno all'altro finché i potenziali non sono uguali.

Per due sfere conduttrici di raggi $R_1$ e $R_2$ lontane tra loro: $\frac{Q_1}{4\pi\varepsilon_0 R_1} = \frac{Q_2}{4\pi\varepsilon_0 R_2}$, cioè $\frac{Q_1}{R_1} = \frac{Q_2}{R_2}$: la carica si divide in proporzione ai raggi.

Se le sfere sono **identiche** ($R_1 = R_2$), stesso potenziale significa stessa carica: la carica totale si divide **a metà**. Una sfera con carica $Q$ messa a contatto con una identica scarica resta con $Q/2$.

## Condensatore e capacità (anticipo)

Un condensatore è formato da due conduttori (armature) con cariche $+Q$ e $-Q$. La d.d.p. tra le armature è proporzionale alla carica, quindi il loro rapporto è costante:

$$C = \frac{Q}{V}$$

dove:
- $C$ = capacità (F, farad; $1\,\mathrm F = 1\,\mathrm{C/V}$)
- $Q$ = carica su un'armatura (C)
- $V$ = d.d.p. tra le armature (V)

La capacità dipende solo dalla **geometria** (forma, dimensioni, distanza) e dal **materiale** tra le armature. Se raddoppi la carica, raddoppia la tensione: la capacità resta la stessa. I dettagli sono nelle lezioni 49 e 50.

::: attenzione
- Il potenziale si somma **con il segno**; il campo si somma **come vettore**. Non sommare i moduli dei potenziali.
- $V = kQ/r$ (potenziale, va come $1/r$) e $E = kQ/r^2$ (campo, va come $1/r^2$) sono diversi: controlla la potenza di $r$.
- $L_{est} = q\Delta V$ è il lavoro **esterno**; quello del campo ha il segno opposto.
- In $E_x = -\Delta V/\Delta x$ il segno meno conta: se il potenziale cresce con x, il campo punta verso le x negative.
- La velocità di una carica accelerata va come $\sqrt{\Delta V}$, non come $\Delta V$.
:::

::: esame
- **"Cos'è il potenziale elettrico?"** (aperta): il campo elettrostatico è conservativo (il lavoro dipende solo dagli estremi, $dL = qE\,dr$), quindi esiste l'energia potenziale $U$ con $L_{AB} = U(A) - U(B)$; il potenziale è $V = U/q$, energia potenziale per unità di carica, uno scalare che dipende solo dalle sorgenti; si misura in volt (J/C); conta la differenza $V_A - V_B = \int_A^B\vec E\cdot d\vec s$ = lavoro del campo per unità di carica; zero all'infinito.
- **"Differenza di potenziale e potenziale di una carica puntiforme"** (aperta): definizione di d.d.p. come sopra; poi l'integrale da $r$ a infinito dà $V = \frac{Q}{4\pi\varepsilon_0 r}$; segno uguale a quello di $Q$, decresce come $1/r$, superfici equipotenziali sferiche perpendicolari alle linee radiali; per più cariche si sommano i potenziali.
- Chiuse: potenziale di più cariche (somma con il segno), potenziale dal flusso ($\Phi/4\pi d$), lavoro $q\Delta V$, campo uniforme ($-\Delta V/\Delta x$, $V/d$), superfici equipotenziali ad angolo retto con le linee di campo, sfere identiche a contatto (metà carica), velocità $\propto\sqrt{\Delta V}$, capacità indipendente dalla carica.
:::

::: sintesi
- Lavoro della forza elettrica: $dL = qE\,dr$, $L_{AB} = \frac{qQ}{4\pi\varepsilon_0}\left(\frac1{r_A} - \frac1{r_B}\right)$: dipende solo dagli estremi, il campo è conservativo.
- Energia potenziale: $L_{AB} = U(A) - U(B)$; $U = \frac{Qq}{4\pi\varepsilon_0 r}$ (zero all'infinito).
- Potenziale: $V = U/q$ (volt = J/C); $V_A - V_B = \int_A^B\vec E\cdot d\vec s$.
- Carica puntiforme: $V = \frac{Q}{4\pi\varepsilon_0 r}$; più cariche: somma algebrica.
- Sfera vista da fuori: come carica puntiforme; $V = \Phi/(4\pi d)$.
- Lavoro esterno: $L = q\,\Delta V$. $1\,\mathrm{eV} = 1{,}6\cdot10^{-19}\,\mathrm J$; $1\,\mathrm{V/m} = 1\,\mathrm{N/C}$.
- Energia: $\tfrac12 mv^2 + qV = $ cost; da ferma $v = \sqrt{2|q|\Delta V/m}$.
- Campo uniforme: $E_x = -\Delta V/\Delta x$; tra lastre $E = V/d$.
- Equipotenziali: $V = $ cost, sempre perpendicolari alle linee di campo; nessun lavoro lungo di esse.
- Sfere identiche a contatto: carica divisa a metà. $C = Q/V$ non dipende dalla carica.
:::

=== 49 dispense
SLIDES: 56, 55, 57
# Lezione 49 — Conduttori, campo dal potenziale e capacità

La lezione 48 ha introdotto il potenziale come integrale del campo. Qui si fa il percorso inverso: **dal potenziale si ricava il campo** derivando (gradiente). Poi si applicano campo e potenziale ai **conduttori**, i materiali in cui le cariche si muovono liberamente: si scopre che in equilibrio il campo dentro è nullo, la carica sta in superficie, il conduttore è tutto allo stesso potenziale e appena fuori il campo vale $\sigma/\varepsilon_0$ (**teorema di Coulomb**). Infine si definisce la **capacità** di un conduttore, il rapporto costante tra carica e potenziale, che porta ai condensatori.

## Campo dal potenziale: il gradiente

### Dalla relazione integrale a quella locale
Dalla lezione 48, per uno spostamento infinitesimo $d\vec s = (dx, dy, dz)$:

$$dV = -\vec E\cdot d\vec s = -(E_x\,dx + E_y\,dy + E_z\,dz)$$

D'altra parte, per una funzione di tre variabili il differenziale totale è

$$dV = \frac{\partial V}{\partial x}dx + \frac{\partial V}{\partial y}dy + \frac{\partial V}{\partial z}dz = \nabla V\cdot d\vec s$$

Le due espressioni devono essere uguali per ogni spostamento $d\vec s$; confrontando i coefficienti di $dx$, $dy$, $dz$:

$$E_x = -\frac{\partial V}{\partial x} \qquad E_y = -\frac{\partial V}{\partial y} \qquad E_z = -\frac{\partial V}{\partial z}$$

cioè in forma vettoriale

$$\vec E = -\nabla V$$

dove:
- $\nabla V = \left(\frac{\partial V}{\partial x}, \frac{\partial V}{\partial y}, \frac{\partial V}{\partial z}\right)$ = gradiente del potenziale (V/m)
- $\frac{\partial V}{\partial x}$ = derivata parziale: come varia V muovendosi solo lungo x, tenendo fisse y e z
- $\vec E$ = campo elettrico (V/m)

È il **teorema del gradiente** applicato al potenziale: il campo è l'opposto del gradiente del potenziale. Ogni campo che si scrive come gradiente di una funzione scalare è conservativo, e viceversa. La relazione $\vec E = -\nabla V$ non dipende dal sistema di coordinate scelto (è una relazione tra vettori).

### Significato
- Il gradiente punta nella direzione in cui $V$ **cresce più rapidamente**; il suo modulo è quanto cresce per metro in quella direzione.
- Quindi il campo punta nella direzione in cui $V$ **diminuisce più rapidamente**, ed è tanto più intenso quanto più rapidamente $V$ cambia nello spazio.
- Il gradiente è perpendicolare alle superfici equipotenziali (lungo di esse $V$ non cambia): ritroviamo che il campo è **ortogonale alle superfici equipotenziali**, diretto nel verso di massima diminuzione del potenziale.

Per un potenziale che dipende solo dalla distanza $r$ da un centro (simmetria sferica) il campo è radiale e $E_r = -\frac{dV}{dr}$.

::: esempio
**Controllo con la carica puntiforme.** $V(r) = \frac{Q}{4\pi\varepsilon_0 r}$. Derivo rispetto a $r$: $\frac{dV}{dr} = \frac{Q}{4\pi\varepsilon_0}\cdot\left(-\frac{1}{r^2}\right)$. Quindi $E_r = -\frac{dV}{dr} = \frac{Q}{4\pi\varepsilon_0 r^2}$: è proprio il campo di Coulomb, uscente se $Q > 0$.
:::

::: esempio
**Potenziale $V = ax^2$** (esercizio della dispensa). Tra due superfici parallele, perpendicolari all'asse x, il potenziale è $V = ax^2$, con x la distanza dalla prima superficie e $a = 1200\,\mathrm{V/m^2}$. Campo in $x = 2\,\mathrm{cm}$.

1. $V$ dipende solo da x, quindi $E_y = E_z = 0$.
2. $E_x = -\frac{dV}{dx} = -\frac{d}{dx}(ax^2) = -2ax$.
3. In $x = 0{,}02\,\mathrm m$: $E_x = -2\cdot1200\cdot0{,}02 = -48\,\mathrm{V/m}$.

Modulo 48 V/m, verso delle x negative, cioè verso la superficie posta nell'origine (dove il potenziale è più basso). Il campo qui non è uniforme: cresce linearmente con x.
:::

## Circuitazione nulla e teorema di Stokes

Per un campo conservativo il lavoro su un percorso chiuso è nullo. Per unità di carica, questo significa che la **circuitazione** del campo elettrostatico lungo qualunque linea chiusa $\ell$ è nulla:

$$\oint_\ell \vec E\cdot d\vec s = 0$$

Il **teorema di Stokes** dice che la circuitazione di un campo lungo una linea chiusa è uguale al flusso del suo **rotore** attraverso una qualunque superficie $\Sigma$ che ha quella linea come bordo:

$$\oint_\ell \vec E\cdot d\vec s = \int_\Sigma (\nabla\times\vec E)\cdot\vec u_n\,d\Sigma$$

Poiché il primo membro è zero per **ogni** linea chiusa, anche il flusso del rotore è zero per ogni superficie, e questo è possibile solo se il rotore è nullo in ogni punto:

$$\nabla\times\vec E = 0$$

dove:
- $\nabla\times\vec E$ = rotore del campo (V/m²): misura la tendenza del campo a "girare" intorno a un punto
- $\vec u_n$ = versore normale alla superficie $\Sigma$

Il campo elettrostatico è **irrotazionale**. Questa è, insieme a $\nabla\cdot\vec E = \rho/\varepsilon_0$ (Gauss in forma locale), una delle due **equazioni di Maxwell dell'elettrostatica**.

## Equazione di Poisson ed equazione di Laplace

La forma locale del teorema di Gauss (prima equazione di Maxwell) è $\nabla\cdot\vec E = \rho/\varepsilon_0$. Sostituendo $\vec E = -\nabla V$:

$$\nabla\cdot(-\nabla V) = \frac{\rho}{\varepsilon_0} \quad\Rightarrow\quad \nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2} = -\frac{\rho}{\varepsilon_0}$$

dove:
- $\nabla^2$ = operatore di Laplace (laplaciano): somma delle derivate seconde
- $\rho$ = densità di carica di volume (C/m³)

È l'**equazione di Poisson**, l'equazione fondamentale dell'elettrostatica nel vuoto: lega il potenziale in una regione alla distribuzione di carica nella regione. Risolta con le opportune condizioni al contorno (per esempio il potenziale noto sui conduttori) dà il potenziale in modo **unico**, e da esso il campo con $\vec E = -\nabla V$. Dove non ci sono cariche ($\rho = 0$) diventa l'**equazione di Laplace**:

$$\nabla^2 V = 0$$

## Conduttori e isolanti

- **Conduttore**: materiale in cui alcune cariche sono **libere di muoversi** in tutto il volume. Nei metalli sono gli elettroni di conduzione (circa uno o due per atomo), mentre gli ioni positivi restano fissi nel reticolo. Anche un campo molto debole basta a metterli in moto. Esempi: metalli, soluzioni saline, corpo umano, terreno umido.
- **Isolante** (o **dielettrico**): gli elettroni sono legati ai propri atomi o molecole. Un campo può solo spostarli di pochissimo rispetto al nucleo (il materiale si **polarizza**, lezione 52), ma non li fa scorrere: non c'è conduzione. Esempi: vetro, plastica, ceramica, aria secca, olio.
- La carica data a un isolante resta dove è stata messa; quella data a un conduttore si distribuisce subito su tutta la sua superficie.
- In mezzo ci sono i semiconduttori (silicio, germanio) e, a temperature molto basse, i superconduttori (lezione 54).

## Campo e carica in un conduttore in equilibrio

**Equilibrio elettrostatico** = le cariche sono ferme. In un conduttore questo implica:

1. **Il campo all'interno è nullo**: $\vec E = 0$ in ogni punto interno. Infatti, se ci fosse un campo, le cariche libere subirebbero una forza $q\vec E$ e si muoverebbero, contro l'ipotesi di equilibrio. Se si mette un conduttore in un campo esterno, le cariche si spostano (in tempi brevissimi) finché il campo che esse stesse producono annulla quello esterno all'interno.
2. **Non c'è carica netta all'interno**: si prende una superficie chiusa qualsiasi, tutta interna al conduttore. Su di essa $\vec E = 0$, quindi il flusso è zero; per il teorema di Gauss ($\Phi = q_{int}/\varepsilon_0$) la carica racchiusa è zero. Siccome la superficie può essere piccola quanto si vuole e posta ovunque, la densità di carica interna è nulla.
3. **La carica in eccesso sta sulla superficie esterna**, distribuita con una densità superficiale

$$\sigma = \frac{dq}{dS}$$

dove:
- $\sigma$ = densità superficiale di carica (C/m²), in generale diversa da punto a punto
- $dq$ = carica sull'elemento di superficie $dS$ (C); $dS$ in m²

Per una sfera conduttrice di raggio $R$ e carica $Q$ la densità è uniforme: $\sigma = \frac{Q}{4\pi R^2}$, e il campo **dentro** (in qualunque punto interno, centro compreso) è **zero**.

## Il potenziale di un conduttore

Dentro il conduttore $\vec E = 0$. Per due punti qualsiasi A e B interni (o sulla superficie):

$$V_A - V_B = \int_A^B \vec E\cdot d\vec s = 0$$

Quindi il potenziale è **uguale in tutto il volume e sulla superficie**: il conduttore è un **volume equipotenziale** e la sua superficie è una **superficie equipotenziale**. Poiché il campo è sempre perpendicolare alle superfici equipotenziali, **appena fuori** dal conduttore il campo è **perpendicolare alla superficie**.

Per una sfera conduttrice di raggio $R$ e carica $Q$: fuori dalla sfera campo e potenziale sono quelli di una carica puntiforme $Q$ posta al centro. Sulla superficie ($r = R$) il potenziale vale $\frac{Q}{4\pi\varepsilon_0 R}$, e dentro è lo stesso valore (costante):

$$V = \frac{Q}{4\pi\varepsilon_0 R}$$

dove:
- $V$ = potenziale della sfera, con zero all'infinito (V)
- $Q$ = carica della sfera (C)
- $R$ = raggio (m)
- $\varepsilon_0 = 8{,}85\cdot10^{-12}\,\mathrm{F/m}$

| Zona | Campo $E$ | Potenziale $V$ |
|---|---|---|
| $r < R$ (dentro) | $0$ | $\frac{Q}{4\pi\varepsilon_0 R}$ (costante) |
| $r = R$ (superficie, appena fuori) | $\frac{Q}{4\pi\varepsilon_0 R^2} = \frac{\sigma}{\varepsilon_0}$ | $\frac{Q}{4\pi\varepsilon_0 R}$ |
| $r > R$ (fuori) | $\frac{Q}{4\pi\varepsilon_0 r^2}$ | $\frac{Q}{4\pi\varepsilon_0 r}$ |

::: attenzione
Dentro un conduttore è nullo il **campo**, non il potenziale. Il potenziale dentro è costante e uguale a quello della superficie (in generale diverso da zero).
:::

## Teorema di Coulomb

**Enunciato**: in un punto appena fuori dalla superficie di un conduttore carico in equilibrio, il campo elettrostatico è **perpendicolare alla superficie** e ha modulo

$$E = \frac{\sigma}{\varepsilon_0}$$

dove:
- $E$ = modulo del campo appena fuori dalla superficie (V/m)
- $\sigma$ = densità superficiale di carica in quel punto (C/m²)
- $\varepsilon_0$ = costante dielettrica del vuoto (F/m)

Il verso è uscente se $\sigma > 0$, entrante se $\sigma < 0$. In forma vettoriale $\vec E = \frac{\sigma}{\varepsilon_0}\vec u_n$, con $\vec u_n$ normale uscente.

### Dimostrazione

**Passo 1 — la componente tangente si conserva.** Si calcola la circuitazione del campo su un piccolo rettangolo a cavallo della superficie: due lati lunghi $dl$ paralleli alla superficie, uno appena fuori (percorso in un verso) e uno appena dentro (percorso nel verso opposto), e due lati corti $dn$ perpendicolari alla superficie. Facendo tendere a zero i lati corti (infinitesimi di ordine superiore), il loro contributo sparisce. La circuitazione del campo elettrostatico è nulla, quindi

$$E_{t,fuori}\,dl - E_{t,dentro}\,dl = 0 \quad\Rightarrow\quad E_{t,fuori} = E_{t,dentro}$$

La componente tangenziale del campo è la stessa sui due lati della superficie. Dentro il conduttore il campo è nullo, quindi $E_{t,dentro} = 0$ e anche **fuori la componente tangente è nulla**: il campo appena fuori è solo **normale** alla superficie (lo stesso risultato visto con le equipotenziali).

**Passo 2 — superficie gaussiana.** Si prende un cilindretto infinitesimo con le basi di area $dS$ parallele alla superficie del conduttore: una base appena fuori, una appena dentro; l'altezza tende a zero.
- Base interna: $\vec E = 0$, flusso nullo.
- Superficie laterale: la sua area tende a zero (e comunque fuori il campo è normale, quindi parallelo alla parete laterale): flusso nullo.
- Base esterna: il campo è perpendicolare alla base, flusso $E\,dS$.

Flusso totale: $\Phi = E\,dS$.

**Passo 3 — teorema di Gauss.** La carica dentro il cilindretto è quella sul pezzetto di superficie: $dq = \sigma\,dS$. Gauss: $\Phi = dq/\varepsilon_0$, quindi

$$E\,dS = \frac{\sigma\,dS}{\varepsilon_0} \quad\Rightarrow\quad E = \frac{\sigma}{\varepsilon_0}$$

### Validità generale
Lo stesso procedimento, applicato a una qualsiasi superficie di separazione con densità di carica $\sigma$ (non necessariamente un conduttore), mostra che attraversando una superficie carica:
- la **componente tangente** del campo è **continua** (si conserva);
- la **componente normale** ha un **salto** pari a $\sigma/\varepsilon_0$: $E_{n,2} - E_{n,1} = \sigma/\varepsilon_0$.

Nel conduttore il campo interno è zero, quindi tutto il salto si vede fuori: $E = \sigma/\varepsilon_0$.

::: attenzione
Per un piano isolante carico isolato (campo da entrambe le parti) il campo vale $\sigma/(2\varepsilon_0)$ da ciascun lato; per un conduttore vale $\sigma/\varepsilon_0$ solo all'esterno, perché dentro è zero. Il salto è $\sigma/\varepsilon_0$ in entrambi i casi.
:::

## Potere delle punte

Su un conduttore di forma qualsiasi la superficie è equipotenziale, ma la carica **non** si distribuisce in modo uniforme: si addensa dove la superficie è **più curva**, cioè dove il **raggio di curvatura è più piccolo** (punte, spigoli).

Ragionamento con due sfere: due sfere conduttrici di raggi $R_1 > R_2$, lontane tra loro e collegate da un filo, sono allo stesso potenziale:

$$\frac{Q_1}{4\pi\varepsilon_0 R_1} = \frac{Q_2}{4\pi\varepsilon_0 R_2} \quad\Rightarrow\quad \frac{Q_1}{R_1} = \frac{Q_2}{R_2}$$

Le densità sono $\sigma_i = \frac{Q_i}{4\pi R_i^2}$. Facendo il rapporto e usando $Q_1/Q_2 = R_1/R_2$:

$$\frac{\sigma_1}{\sigma_2} = \frac{Q_1}{Q_2}\cdot\frac{R_2^2}{R_1^2} = \frac{R_1}{R_2}\cdot\frac{R_2^2}{R_1^2} = \frac{R_2}{R_1}$$

La densità è **inversamente proporzionale al raggio**: la sfera piccola ha la densità maggiore. Una punta si comporta come una sfera di raggio piccolissimo: lì $\sigma$ è grande e, per il teorema di Coulomb, anche il campo $E = \sigma/\varepsilon_0$ è molto intenso. Se supera la rigidità dielettrica dell'aria (circa 3 MV/m, lezione 52) l'aria si ionizza e la carica "sfugge" dalla punta (**potere dispersivo delle punte**). È il principio del **parafulmine**: la punta scarica gradualmente le nubi e offre una via preferenziale a terra.

::: attenzione
"Più densa dove il raggio di curvatura è **minore**" e "più densa dove la curvatura è **maggiore**" dicono la stessa cosa (la curvatura è l'inverso del raggio di curvatura). È sbagliato dire che la carica è più densa dove la superficie è più piatta.
:::

## Capacità di un conduttore isolato

Si consideri un conduttore isolato con carica $Q$. In equilibrio la carica è sulla superficie: $Q = \int_S \sigma\,dS$. Il potenziale del conduttore è quello della sua superficie, che si calcola sommando i contributi di tutta la carica superficiale: $V = \frac{1}{4\pi\varepsilon_0}\int_S \frac{\sigma\,dS}{r}$.

Se si **raddoppia** la carica, la distribuzione mantiene la stessa forma (ogni $\sigma$ raddoppia), quindi anche $V$ raddoppia: entrambe le relazioni prendono lo stesso fattore moltiplicativo. Il **rapporto** tra carica e potenziale è quindi costante e si chiama **capacità elettrica**:

$$C = \frac{Q}{V}$$

dove:
- $C$ = capacità (F, farad; $1\,\mathrm F = 1\,\mathrm{C/V}$)
- $Q$ = carica del conduttore (C)
- $V$ = potenziale del conduttore, con zero all'infinito (V)

La capacità è una **caratteristica intrinseca** del conduttore: dipende solo da forma, dimensioni e mezzo in cui è immerso, **non** dalla carica né dal potenziale. Dice quanta carica serve per alzare il potenziale di 1 V: più grande è C, più carica il conduttore "accoglie" a parità di potenziale.

**Sfera** di raggio $R$: $V = \frac{Q}{4\pi\varepsilon_0 R}$, quindi

$$C = \frac{Q}{V} = 4\pi\varepsilon_0 R$$

La capacità cresce con le dimensioni.

::: esempio
**Capacità della Terra.** Trattando la Terra come una sfera conduttrice con $R \approx 6{,}4\cdot10^6\,\mathrm m$:
$C = 4\pi\cdot 8{,}85\cdot10^{-12}\cdot 6{,}4\cdot10^6 = 1{,}113\cdot10^{-10}\cdot 6{,}4\cdot10^6 \approx 7{,}1\cdot10^{-4}\,\mathrm F$.

Nemmeno un millesimo di farad per un intero pianeta: il farad è un'unità **enorme**; in pratica si usano $\mu\mathrm F$, nF, pF.
:::

::: esempio
**Sfera da 10 cm.** Una sfera di raggio 10 cm ha $C = 4\pi\varepsilon_0\cdot 0{,}1 \approx 1{,}11\cdot10^{-11}\,\mathrm F = 11\,\mathrm{pF}$. Per portarla a 1000 V serve la carica $Q = CV = 1{,}11\cdot10^{-8}\,\mathrm C$.
:::

## Sistemi di conduttori

Se ci sono più conduttori abbastanza vicini da influenzarsi (induzione elettrostatica), il potenziale di ciascuno dipende dalle cariche di **tutti**.
- Se solo il conduttore 1 ha carica $Q_1$ (l'altro è neutro): $V_1 = a_{11}Q_1$, $V_2 = a_{21}Q_1$.
- Se solo il 2 ha carica $Q_2$: $V_1 = a_{12}Q_2$, $V_2 = a_{22}Q_2$.
- Se entrambi sono carichi, per **sovrapposizione** si sommano: $V_1 = a_{11}Q_1 + a_{12}Q_2$, $V_2 = a_{21}Q_1 + a_{22}Q_2$.

Con N conduttori di geometria fissata:

$$V_i = \sum_{j=1}^N a_{ij}Q_j$$

I coefficienti $a_{ij}$ (coefficienti di potenziale) sono positivi e la loro matrice è **simmetrica** ($a_{ij} = a_{ji}$). Il sistema ha soluzione unica e si può invertire:

$$Q_i = \sum_{j=1}^N c_{ij}V_j$$

- $c_{ii}$ = **coefficienti di capacità**, positivi;
- $c_{ij}$ con $i \ne j$ = **coefficienti di induzione**, negativi (un conduttore a potenziale positivo induce carica negativa sugli altri tenuti a potenziale zero).

Anche la matrice dei $c_{ij}$ è simmetrica. Il caso più importante è quello di due conduttori in induzione completa: il condensatore.

## Induzione completa

Un conduttore cavo **scarico** $C_1$ contiene nella sua cavità un secondo conduttore $C_2$ con carica $+Q$.
1. Si prende una superficie gaussiana tutta dentro il metallo di $C_1$, che circonda la cavità. Lì il campo è nullo, quindi il flusso è nullo e la carica racchiusa deve essere zero.
2. La superficie racchiude $+Q$ (il conduttore interno), quindi sulla **parete interna della cavità** deve comparire $-Q$.
3. $C_1$ era neutro: per la conservazione della carica, sulla sua **superficie esterna** compare $+Q$.

Tutte le linee di campo che partono da $C_2$ terminano sulla parete interna della cavità: nessuna "si perde". Questa situazione si chiama **induzione completa**. Due conduttori in induzione completa formano un **condensatore** (lezione 50).

## Gabbia di Faraday (schermo elettrostatico)

Il campo nella cavità dipende solo dalla carica interna e dalla geometria della cavità e del conduttore interno. Se all'esterno si cambia qualcosa (si aggiunge carica sulla superficie esterna, si avvicina un corpo carico che induce cariche), la carica sulla superficie esterna di $C_1$ si ridistribuisce in modo da mantenere **nullo il campo dentro il metallo**, e quindi le condizioni della cavità non cambiano. Allo stesso modo, una cavità **vuota** dentro un conduttore ha campo nullo qualunque cosa succeda fuori.

Il conduttore cavo è uno **schermo elettrostatico**: separa l'interno dall'esterno. Si chiama **gabbia di Faraday** perché non serve un guscio continuo: basta una rete metallica con maglie piccole rispetto alle dimensioni del problema. Applicazioni: auto e aerei colpiti da un fulmine, cavi schermati, gabbie per misure sensibili.

## Capacità equivalente: serie e parallelo

(Domanda aperta della lezione; i condensatori sono trattati nella lezione 50.)

**Parallelo**: le armature sono collegate a coppie da fili conduttori; armature collegate sono equipotenziali, quindi tutti i condensatori hanno la **stessa d.d.p.** $V$.
1. $Q_1 = C_1 V$, $Q_2 = C_2 V$, ...
2. Carica totale accumulata: $Q = Q_1 + Q_2 + \dots = (C_1 + C_2 + \dots)V$.
3. Il sistema equivale a un solo condensatore con $C_{eq} = \frac{Q}{V}$:

$$C_{eq} = C_1 + C_2 + \dots$$

**Serie**: un solo conduttore collega un'armatura del primo con una del secondo. Caricando con $+Q$ l'armatura di sinistra, per induzione completa compare $-Q$ di fronte; il conduttore centrale è isolato e neutro, quindi all'altro suo capo compare $+Q$, che induce $-Q$ sull'ultima armatura. Tutti i condensatori hanno la **stessa carica** $Q$.
1. $V_1 = Q/C_1$, $V_2 = Q/C_2$, ...
2. Le d.d.p. si sommano: $V = V_1 + V_2 + \dots = Q\left(\frac1{C_1} + \frac1{C_2} + \dots\right)$.
3. $C_{eq} = Q/V$, quindi

$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots \qquad \text{due soli: } C_{eq} = \frac{C_1C_2}{C_1 + C_2}$$

In parallelo la capacità equivalente è **maggiore** della più grande; in serie è **minore** della più piccola.

::: attenzione
- Campo nullo dentro il conduttore $\ne$ potenziale nullo.
- $E = \sigma/\varepsilon_0$ vale **appena fuori** da un conduttore; dentro $E = 0$.
- $\vec E = -\nabla V$: il segno meno dice che il campo va verso i potenziali che scendono. Senza il segno meno si ottiene il verso sbagliato.
- La capacità non cambia se cambiano carica o potenziale: dipende solo dalla geometria e dal mezzo.
:::

::: esame
- **Capacità di un conduttore** (aperte "Come viene definita la capacità", "Definire la capacità"): rapporto costante $C = Q/V$ tra carica e potenziale (zero all'infinito) del conduttore isolato; costante perché raddoppiando Q raddoppia V; dipende da forma, dimensioni e mezzo; farad = C/V; sfera $C = 4\pi\varepsilon_0 R$; il farad è grande.
- **Serie e parallelo** (aperta): le due derivazioni sopra (stessa V e cariche che si sommano; stessa Q e tensioni che si sommano).
- **Campo dal potenziale** (aperta): $dV = -\vec E\cdot d\vec s$ confrontato con il differenziale totale dà $E_x = -\partial V/\partial x$ ecc., $\vec E = -\nabla V$; campo perpendicolare alle equipotenziali, verso la massima diminuzione di V; esempio $V = ax^2$; si può citare $\nabla^2 V = -\rho/\varepsilon_0$.
- **Teorema di Coulomb** (aperta, enunciato e dimostrazione): i tre passi (circuitazione sul rettangolino → solo componente normale; cilindretto gaussiano; Gauss con carica $\sigma\,dS$).
- **Conduttori e isolanti** (aperta): cariche libere contro cariche legate; nel conduttore in equilibrio $E = 0$ dentro, carica in superficie; l'isolante si polarizza.
- **Potenziale in un conduttore** (aperta): costante in tutto il volume e sulla superficie, perché $E = 0$ dentro.
- Chiuse: campo dentro una sfera conduttrice $= 0$; potenziale $Q/(4\pi\varepsilon_0 R)$; carica più densa dove il raggio di curvatura è minore; definizione $C = Q/V$.
:::

::: sintesi
- $\vec E = -\nabla V$: $E_x = -\partial V/\partial x$, ecc.; il campo punta dove V scende più in fretta, perpendicolare alle equipotenziali.
- $\oint\vec E\cdot d\vec s = 0 \Leftrightarrow \nabla\times\vec E = 0$ (Stokes). Poisson: $\nabla^2 V = -\rho/\varepsilon_0$; Laplace: $\nabla^2 V = 0$.
- Conduttore in equilibrio: $E = 0$ dentro, nessuna carica interna, carica in superficie ($\sigma = dq/dS$).
- Conduttore equipotenziale; sfera: $V = \frac{Q}{4\pi\varepsilon_0 R}$ dentro e sulla superficie.
- Teorema di Coulomb: $E = \sigma/\varepsilon_0$ appena fuori, perpendicolare; componente tangente continua, normale salta di $\sigma/\varepsilon_0$.
- Punte: $\sigma \propto 1/R$, carica e campo più intensi dove il raggio di curvatura è minore.
- $C = Q/V$ (F); sfera $C = 4\pi\varepsilon_0 R$; sistemi di conduttori: $Q_i = \sum c_{ij}V_j$.
- Induzione completa: $-Q$ sulla parete della cavità, $+Q$ fuori. Gabbia di Faraday: schermo.
- Parallelo: $C_{eq} = \sum C_i$; serie: $1/C_{eq} = \sum 1/C_i$.
:::

=== 50 dispense
SLIDES: 57, 59, 52
# Lezione 50 — Condensatori: capacità, collegamenti e moto di cariche nel campo

Il condensatore è il dispositivo che sfrutta l'induzione completa (lezione 49) per **accumulare carica ed energia**. È uno dei componenti più diffusi nei circuiti: filtri, flash delle fotocamere, memorie, alimentatori. In questa lezione si definisce il condensatore, si calcola la capacità dei tre tipi principali (piano, sferico, cilindrico), si studiano i collegamenti in **serie** e in **parallelo** e si vede come il campo uniforme del condensatore piano devia una carica in moto (fino all'esperimento di Millikan). Si anticipa anche l'effetto di un dielettrico tra le armature, approfondito nella lezione 52.

## Il condensatore

**Definizione**: un condensatore è un sistema di **due conduttori in condizioni di induzione completa**: tutte le linee di campo che partono da uno terminano sull'altro. I due conduttori si chiamano **armature**. Se su un'armatura c'è la carica $+Q$, sull'altra c'è esattamente $-Q$ (per induzione completa).

Tra le armature c'è una d.d.p. $\Delta V$ proporzionale a $Q$ (raddoppiando la carica raddoppia il campo e quindi l'integrale del campo). Il rapporto è la **capacità del condensatore**:

$$C = \frac{Q}{\Delta V}$$

dove:
- $C$ = capacità (F)
- $Q$ = carica (in modulo) su **una** armatura (C); la carica totale del condensatore è zero
- $\Delta V$ = d.d.p. tra le armature (V)

La capacità dipende **solo dalla geometria** delle armature e dal **mezzo** tra di esse, non da $Q$ né da $\Delta V$. Negli schemi elettrici il condensatore si disegna come due barrette parallele vicine.

Tre geometrie tipiche (descritte nella dispensa):
- un conduttore dentro la cavità dell'altro: se le superfici sono sfere concentriche è il **condensatore sferico**;
- un conduttore che si sviluppa lungo una linea, avvolto da un secondo conduttore come una guaina: se le superfici sono cilindri coassiali è il **condensatore cilindrico** (come un cavo coassiale);
- due lastre piane e parallele affacciate a distanza molto minore delle loro dimensioni: il **condensatore piano**, il più comune.

## Condensatore piano

Due lastre conduttrici di area $S$ a distanza $d$, con $d$ molto piccola rispetto alle dimensioni delle lastre (si trascurano gli **effetti di bordo**). Le cariche $\pm Q$ si dispongono sulle facce affacciate con densità uniforme $\sigma = Q/S$.

### Il campo tra le armature
Si può ottenere in due modi.

1. **Con il teorema di Coulomb**: appena fuori dall'armatura positiva il campo è perpendicolare e vale $\sigma/\varepsilon_0$; poiché la geometria è la stessa in ogni punto tra le lastre, il campo è **uniforme**.
2. **Sovrapponendo due piani carichi** (esercizio della dispensa 52). Un piano infinito con densità $\sigma$ genera da ciascun lato un campo uniforme, perpendicolare, di modulo $\frac{\sigma}{2\varepsilon_0}$ (uscente se $\sigma > 0$, entrante se $\sigma < 0$). Con due piani paralleli:

| Regione | Piani con $+\sigma$ e $-\sigma$ | Piani con cariche dello stesso segno $\sigma$ |
|---|---|---|
| Esterna (a sinistra o a destra) | i due campi sono opposti: $E = 0$ | i due campi sono concordi: $E = \sigma/\varepsilon_0$ |
| Tra i piani | i due campi sono concordi: $E = \frac{\sigma}{2\varepsilon_0} + \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0}$ | i due campi sono opposti: $E = 0$ |

Il condensatore piano è il caso con cariche opposte: campo **solo tra le armature**, uniforme, diretto dalla positiva alla negativa:

$$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 S}$$

### La capacità
Nel campo uniforme la d.d.p. è campo per distanza:

$$\Delta V = E\,d = \frac{Q\,d}{\varepsilon_0 S}$$

e dalla definizione:

$$C_0 = \frac{Q}{\Delta V} = \frac{Q}{\frac{Qd}{\varepsilon_0 S}} = \frac{\varepsilon_0 S}{d}$$

dove:
- $C_0$ = capacità con il vuoto (o, quasi uguale, l'aria) tra le armature (F); il pedice 0 indica "nel vuoto"
- $S$ = area di un'armatura (m²)
- $d$ = distanza tra le armature (m)
- $\varepsilon_0 = 8{,}85\cdot10^{-12}\,\mathrm{F/m}$ (da qui l'unità F/m di $\varepsilon_0$)
- $\sigma = Q/S$ = densità di carica sulle armature (C/m²)

La carica $Q$ si semplifica: la capacità dipende solo da $S$ e $d$.
- **Aumenta** se si aumenta l'area $S$ o si **avvicinano** le armature (d più piccola).
- **Diminuisce** se si **allontanano** le armature o si riduce l'area.
- Aumenta di un fattore $\varepsilon_r$ se si riempie lo spazio con un dielettrico (vedi sotto).

::: esempio
**Condensatore piano** (esercizio della dispensa 58). $S = 40\,\mathrm{cm^2}$, $d = 1\,\mathrm{mm}$, caricato a $V_0 = 600\,\mathrm V$.

1. Conversioni: $S = 40\cdot10^{-4}\,\mathrm{m^2} = 4\cdot10^{-3}\,\mathrm{m^2}$; $d = 10^{-3}\,\mathrm m$.
2. Capacità: $C = \frac{8{,}85\cdot10^{-12}\cdot4\cdot10^{-3}}{10^{-3}} = 3{,}54\cdot10^{-11}\,\mathrm F = 35{,}4\,\mathrm{pF}$.
3. Carica: $Q = CV_0 = 3{,}54\cdot10^{-11}\cdot600 = 2{,}12\cdot10^{-8}\,\mathrm C \approx 21\,\mathrm{nC}$.
4. Campo: $E = V_0/d = 600/10^{-3} = 6\cdot10^5\,\mathrm{V/m}$ (controllo: $Q/(\varepsilon_0 S) = 2{,}12\cdot10^{-8}/(3{,}54\cdot10^{-14}) = 6\cdot10^5$, coerente).

Energia e densità di energia dello stesso condensatore sono nella lezione 51.
:::

## Condensatore sferico

Due sfere conduttrici concentriche, interna di raggio $R_1$ con $+Q$, esterna di raggio $R_2 > R_1$ con $-Q$.
1. Tra le sfere ($R_1 < r < R_2$), per Gauss su una sfera di raggio $r$, la carica racchiusa è $Q$: $E = \frac{Q}{4\pi\varepsilon_0 r^2}$.
2. d.d.p.: $\Delta V = \int_{R_1}^{R_2}\frac{Q}{4\pi\varepsilon_0 r^2}dr = \frac{Q}{4\pi\varepsilon_0}\left(\frac1{R_1} - \frac1{R_2}\right) = \frac{Q}{4\pi\varepsilon_0}\frac{R_2 - R_1}{R_1R_2}$.
3. Capacità:

$$C = \frac{Q}{\Delta V} = 4\pi\varepsilon_0\frac{R_1R_2}{R_2 - R_1}$$

Casi limite: se $R_2 \to \infty$ si ritrova la sfera isolata $C = 4\pi\varepsilon_0 R_1$; se le sfere sono vicinissime ($R_2 - R_1 = d \ll R$) $C \approx \frac{4\pi\varepsilon_0 R^2}{d} = \frac{\varepsilon_0 S}{d}$, cioè il condensatore piano con $S = 4\pi R^2$.

## Condensatore cilindrico

Due cilindri coassiali di altezza $h$, raggi $R_1 < R_2$, cariche $\pm Q$ (densità lineare $\lambda = Q/h$).
1. Tra i cilindri, per Gauss su un cilindro di raggio $r$ e altezza $h$ (flusso solo dalla superficie laterale): $E\cdot2\pi rh = \frac{Q}{\varepsilon_0}$, quindi $E = \frac{Q}{2\pi\varepsilon_0 h r}$.
2. d.d.p.: $\Delta V = \int_{R_1}^{R_2}\frac{Q}{2\pi\varepsilon_0 h}\frac{dr}{r} = \frac{Q}{2\pi\varepsilon_0 h}\ln\frac{R_2}{R_1}$.
3. Capacità:

$$C = \frac{2\pi\varepsilon_0 h}{\ln(R_2/R_1)}$$

Se la distanza $d = R_2 - R_1$ è molto minore del raggio, si sviluppa il logaritmo al primo ordine: $\ln\frac{R_2}{R_1} = \ln\left(1 + \frac{d}{R_1}\right) \approx \frac{d}{R_1}$, e $C \approx \frac{2\pi\varepsilon_0 R_1 h}{d} = \frac{\varepsilon_0 S}{d}$ con $S = 2\pi R_1 h$: di nuovo il condensatore piano.

::: esempio
**Bicchiere di pyrex** (esercizio della dispensa 61). Due fogli di alluminio rivestono un bicchiere di pyrex ($\varepsilon_r = 4{,}7$) alto $h = 15\,\mathrm{cm}$, raggi 3,6 cm e 3,8 cm.

$\ln(3{,}8/3{,}6) = \ln 1{,}0556 = 0{,}0541$. Nel vuoto: $C_0 = \frac{2\pi\cdot8{,}85\cdot10^{-12}\cdot0{,}15}{0{,}0541} = \frac{8{,}34\cdot10^{-12}}{0{,}0541} \approx 1{,}54\cdot10^{-10}\,\mathrm F$. Con il pyrex: $C = \varepsilon_r C_0 = 4{,}7\cdot1{,}54\cdot10^{-10} \approx 7{,}2\cdot10^{-10}\,\mathrm F = 0{,}72\,\mathrm{nF}$. (La tensione massima si calcola nella lezione 52.)
:::

## Condensatori in parallelo

**Collegamento**: le armature sono collegate **a coppie** da fili conduttori (tutte le "sinistre" insieme, tutte le "destre" insieme). Armature collegate da un conduttore sono equipotenziali, quindi **tutti i condensatori hanno la stessa d.d.p.** $V$.

Derivazione:
1. Ciascuno accumula $Q_i = C_i V$.
2. La carica totale sulle armature collegate è $Q = Q_1 + Q_2 + Q_3 + \dots = (C_1 + C_2 + C_3 + \dots)V$.
3. Il condensatore equivalente, con la stessa $V$ e la stessa carica totale, ha $C_{eq} = Q/V$:

$$C_{eq} = C_1 + C_2 + C_3 + \dots$$

Due condensatori in parallelo si comportano come un unico condensatore di capacità pari alla **somma** delle capacità. Intuizione: è come aumentare l'area delle armature.

## Condensatori in serie

**Collegamento**: un solo conduttore collega un'armatura del primo con un'armatura del secondo. Il sistema ha tre conduttori, a potenziali $V_A$, $V_B$ (quello centrale, isolato) e $V_C$.

Perché la carica è la stessa: si carica l'armatura di sinistra con $+Q$; per induzione completa sull'armatura opposta del primo condensatore compare $-Q$. Il conduttore centrale era neutro ed è isolato: se su un suo estremo c'è $-Q$, sull'altro estremo c'è $+Q$. Questa induce $-Q$ sull'ultima armatura. Quindi **tutti i condensatori in serie hanno la stessa carica** $Q$.

Derivazione:
1. $V_1 = V_A - V_B = Q/C_1$, $V_2 = V_B - V_C = Q/C_2$, ...
2. La d.d.p. totale è la somma: $V = V_A - V_C = V_1 + V_2 + \dots = Q\left(\frac1{C_1} + \frac1{C_2} + \dots\right)$.
3. $C_{eq} = Q/V$, quindi:

$$\frac1{C_{eq}} = \frac1{C_1} + \frac1{C_2} + \frac1{C_3} + \dots \qquad\text{due soli: } C_{eq} = \frac{C_1C_2}{C_1 + C_2}$$

Intuizione: in serie è come allontanare le armature (le distanze si sommano), quindi la capacità cala.

| | Parallelo | Serie |
|---|---|---|
| Uguale per tutti | d.d.p. $V$ | carica $Q$ |
| Si somma | carica | d.d.p. |
| $C_{eq}$ | $C_1 + C_2 + \dots$ | $\left(\frac1{C_1} + \frac1{C_2} + \dots\right)^{-1}$ |
| Due uguali $C$ | $2C$ | $C/2$ |
| $N$ uguali $C$ | $NC$ | $C/N$ |
| Rispetto ai singoli | maggiore del più grande | minore del più piccolo |

::: esempio
**Calcoli diretti.**
- $C_1 = 1{,}60\,\mu\mathrm F$, $C_2 = 2{,}40\,\mu\mathrm F$. Parallelo: $1{,}60 + 2{,}40 = 4{,}00\,\mu\mathrm F$. Serie: $\frac{1{,}60\cdot2{,}40}{1{,}60 + 2{,}40} = \frac{3{,}84}{4{,}00} = 0{,}96\,\mu\mathrm F$ (minore di 1,60, come deve).
- Due da $10\,\mu\mathrm F$: parallelo $20\,\mu\mathrm F$, serie $\frac{10\cdot10}{20} = 5\,\mu\mathrm F$.
- Due da $20\,\mu\mathrm F$: parallelo $40\,\mu\mathrm F$, serie $10\,\mu\mathrm F$.
:::

::: esempio
**Tre condensatori in serie con tensioni assegnate** (esercizio della dispensa 57). Ai capi della serie $V_A - V_B = 100\,\mathrm V$, capacità equivalente $C = 100\,\mathrm{pF}$. I potenziali dei due nodi intermedi, misurati rispetto a $V_A$, sono più bassi di 50 V e di 70 V (cioè $V_A - V_C = 50\,\mathrm V$, $V_A - V_D = 70\,\mathrm V$). Trovare $C_1$, $C_2$, $C_3$.

1. Carica comune: $Q = C\,(V_A - V_B) = 100\cdot10^{-12}\cdot100 = 10^{-8}\,\mathrm C = 10\,\mathrm{nC}$.
2. Tensioni sui singoli: $V_1 = 50\,\mathrm V$, $V_2 = 70 - 50 = 20\,\mathrm V$, $V_3 = 100 - 70 = 30\,\mathrm V$ (somma 100 V).
3. Capacità: $C_1 = \frac{10\,\mathrm{nC}}{50\,\mathrm V} = 200\,\mathrm{pF}$, $C_2 = \frac{10}{20} = 500\,\mathrm{pF}$, $C_3 = \frac{10}{30} \approx 333\,\mathrm{pF}$.
4. Verifica: $\frac1{200} + \frac1{500} + \frac1{333} = 0{,}005 + 0{,}002 + 0{,}003 = 0{,}010\,\mathrm{pF^{-1}}$, cioè $C_{eq} = 100\,\mathrm{pF}$.
:::

::: esempio
**Condensatore che si scarica su altri due** (esercizio della dispensa 57). Un generatore da $V_0 = 12{,}0\,\mathrm V$ carica $C_1 = 4{,}0\,\mu\mathrm F$; poi l'interruttore stacca il generatore e collega $C_1$ ai due condensatori scarichi $C_2 = 6{,}0\,\mu\mathrm F$ e $C_3 = 3{,}0\,\mu\mathrm F$, che nello schema sono in serie tra loro e la serie è in parallelo a $C_1$.

1. Carica iniziale: $Q_0 = C_1V_0 = 4\cdot12 = 48\,\mu\mathrm C$. Dopo il distacco del generatore la carica si **conserva**.
2. Serie $C_2$–$C_3$: $C_{23} = \frac{6\cdot3}{9} = 2{,}0\,\mu\mathrm F$.
3. $C_1$ e $C_{23}$ sono in parallelo: stessa tensione finale $V = \frac{Q_0}{C_1 + C_{23}} = \frac{48}{6} = 8{,}0\,\mathrm V$.
4. Cariche finali: $Q_1 = 4\cdot8 = 32\,\mu\mathrm C$; $Q_2 = Q_3 = C_{23}V = 16\,\mu\mathrm C$ (in serie hanno la stessa carica). Controllo: $32 + 16 = 48\,\mu\mathrm C$.
:::

## Parallelo collegato a una batteria

Una batteria (pila) mantiene costante la d.d.p. ai suoi capi. Con condensatori in parallelo collegati alla batteria:
- ogni condensatore ha la **tensione della batteria** $V$;
- ognuno ha carica $Q_i = C_iV$ ed energia $U_i = \tfrac12 C_iV^2$: se le capacità sono diverse, **cariche ed energie sono diverse**;
- il campo in ciascun condensatore piano è $E_i = V/d_i$: è uguale solo se le distanze tra le armature sono uguali; con distanze diverse i campi sono **diversi**.

Se si aggiunge un **terzo condensatore in parallelo**:
- la tensione su ciascuno resta $V$ (la fissa la batteria);
- quindi la carica di ciascuno dei due già presenti ($C_iV$) non cambia;
- cambia la **capacità equivalente** (aumenta di $C_3$), e di conseguenza la carica totale fornita dalla batteria.

## Dielettrico tra le armature (anticipo della lezione 52)

Se lo spazio tra le armature è riempito con un materiale isolante omogeneo, si osserva che, a parità di carica, la d.d.p. diminuisce: la capacità **aumenta** di un fattore $\varepsilon_r$:

$$C = \varepsilon_r C_0 = \varepsilon_r\varepsilon_0\frac{S}{d} = \varepsilon\frac{S}{d}$$

dove:
- $\varepsilon_r = C/C_0$ = costante dielettrica relativa del materiale (numero puro, $\ge 1$; vuoto 1, aria $\approx 1{,}0006$, vetro 5–10, acqua circa 80)
- $\varepsilon = \varepsilon_r\varepsilon_0$ = costante dielettrica assoluta (F/m)
- $C_0$ = capacità con il vuoto (F)

Il motivo (lezione 52): il dielettrico si polarizza, le cariche di polarizzazione sulle sue facce riducono il campo tra le armature, serve meno tensione per la stessa carica e $C = Q/V$ cresce.

::: attenzione
La formula è $C = \varepsilon_r C_0$, **non** $\varepsilon_r\varepsilon_0 C_0$: $\varepsilon_0$ è già dentro $C_0$.
:::

## Carica in moto in un condensatore piano

Una carica $q$ di massa $m$ in un campo $\vec E$ subisce la forza $\vec F = q\vec E$, quindi l'accelerazione

$$\vec a = \frac{q}{m}\vec E$$

dove:
- $q/m$ = rapporto carica/massa (C/kg)
- $\vec E$ = campo (V/m); tra le armature è uniforme, $E = \Delta V/d$

Il campo può quindi **accelerare** una carica (se la velocità è parallela al campo) o **deflettere** la sua traiettoria. Nel condensatore piano il campo è uniforme: la situazione è identica a quella di un corpo lanciato orizzontalmente nel campo di gravità (con $\frac{q}{m}E$ al posto di $g$). Se la particella entra con velocità $v_0$ **parallela** alle armature:
- lungo le armature (x) nessuna forza: moto uniforme, $x = v_0t$;
- perpendicolarmente (y) accelerazione costante: $y = \tfrac12 at^2$, con $a = \frac{q}{m}E$;
- la traiettoria è una **parabola**: $y = \frac{a}{2v_0^2}x^2$.

Il tempo per arrivare su un'armatura dipende solo dal moto lungo y: la velocità parallela $v_0$ non lo cambia (decide solo **dove** arriva la particella, non **quando**).

::: esempio
**Particella che urta l'armatura.** $q/m = 2\cdot10^5\,\mathrm{C/kg}$, $v_0 = 10^6\,\mathrm{m/s}$ parallela alle armature, ingresso a metà tra le armature; $d = 50\,\mathrm{cm}$, $\Delta V = 1\,\mathrm V$. Dopo quanto urta l'armatura negativa?

1. Campo: $E = \frac{\Delta V}{d} = \frac{1}{0{,}5} = 2\,\mathrm{V/m}$.
2. Accelerazione trasversale: $a = \frac{q}{m}E = 2\cdot10^5\cdot2 = 4\cdot10^5\,\mathrm{m/s^2}$.
3. Partendo a metà, deve percorrere $d/2 = 0{,}25\,\mathrm m$ in direzione y, partendo con velocità trasversale nulla: $0{,}25 = \tfrac12 at^2$.
4. $t = \sqrt{\frac{2\cdot0{,}25}{4\cdot10^5}} = \sqrt{1{,}25\cdot10^{-6}} \approx 1{,}1\cdot10^{-3}\,\mathrm s = 1{,}1\,\mathrm{ms}$.

Dividere una distanza per $v_0$ è l'errore tipico: $v_0$ non c'entra con il tempo di caduta (in questo tempo la particella percorre lungo x circa 1100 m, quindi le armature dovrebbero essere lunghissime: il problema è idealizzato).
:::

## Esperienza di Millikan

Con l'interazione tra cariche e campo, Millikan misurò per la prima volta la **carica elementare**.

**Apparato**: goccioline d'olio nebulizzate si caricano per strofinio; alcune cadono attraverso un forellino tra due placche orizzontali parallele, che possono essere caricate per creare un campo uniforme verticale. Un microscopio osserva il moto delle gocce.

**Senza campo**: la goccia (raggio $r$, densità $\rho$, massa $m = \frac43\pi r^3\rho$) cade sotto il peso, frenata dall'attrito viscoso dell'aria (legge di Stokes, $F = 6\pi\eta rv$, con $\eta$ viscosità dell'aria). Raggiunge subito una **velocità limite** costante, quando le forze si equilibrano:

$$mg = 6\pi\eta r v_l \quad\Rightarrow\quad v_l = \frac{mg}{6\pi\eta r} = \frac{2\rho g r^2}{9\eta}$$

Misurando $v_l$ si ricava il **raggio** della goccia: $r = \sqrt{\frac{9\eta v_l}{2\rho g}}$, e quindi la sua massa.

**Con il campo**: per una goccia carica negativamente con il campo diretto verso il basso, la forza elettrica $|q|E$ è verso l'alto. La nuova velocità di regime è

$$v' = \frac{mg - |q|E}{6\pi\eta r} \quad\Rightarrow\quad |q| = \frac{6\pi\eta r\,(v_l - v')}{E}$$

Regolando il campo si può rallentare, fermare o invertire il moto della goccia. Ripetendo moltissime misure su gocce diverse, Millikan trovò che le cariche (e le variazioni di velocità quando una goccia catturava o perdeva carica) erano sempre **multipli interi** di un valore elementare:

$$q = n\,e \qquad e \approx 1{,}6\cdot10^{-19}\,\mathrm C$$

La carica è **quantizzata**. Il valore di Millikan si discosta meno dell'1% dalle misure moderne.

::: attenzione
- Parallelo: si sommano le capacità. Serie: si sommano gli **inversi**. Scambiarle è l'errore più frequente.
- In serie è uguale la **carica**, in parallelo la **tensione**.
- Allontanando le armature la capacità **diminuisce** ($C \propto 1/d$); aumentando l'area aumenta.
- In un condensatore piano il tempo di arrivo sull'armatura non dipende dalla velocità parallela alle armature.
:::

::: esame
- **"Si definiscano il condensatore e la capacità; caso del condensatore piano"** (aperta): due conduttori in induzione completa, cariche $\pm Q$; $C = Q/\Delta V$, dipende solo da geometria e mezzo; nel piano il campo è uniforme $E = \sigma/\varepsilon_0 = Q/(\varepsilon_0 S)$ (Coulomb o sovrapposizione di due piani), $\Delta V = Ed = Qd/(\varepsilon_0 S)$, quindi $C_0 = \varepsilon_0 S/d$; cresce con S, cala con d; con dielettrico $C = \varepsilon_r C_0$.
- Chiuse: serie/parallelo con numeri (due uguali: $2C$ e $C/2$), dielettrico che moltiplica per $\varepsilon_r$, capacità che diminuisce allontanando le armature, terzo condensatore in parallelo (cambia solo la capacità equivalente), affermazione falsa sui campi in parallelo con distanze diverse, particella nel condensatore (tempo da $d/2 = \tfrac12 at^2$), energia di due condensatori in serie (lezione 51).
:::

::: sintesi
- Condensatore: due conduttori in induzione completa, armature con $\pm Q$; $C = Q/\Delta V$ (F).
- Piano: $E = \sigma/\varepsilon_0$ uniforme solo tra le armature; $\Delta V = Ed$; $C_0 = \varepsilon_0 S/d$.
- Sferico: $C = 4\pi\varepsilon_0\frac{R_1R_2}{R_2 - R_1}$; cilindrico: $C = \frac{2\pi\varepsilon_0 h}{\ln(R_2/R_1)}$; armature vicine → piano.
- Parallelo: stessa V, $C_{eq} = \sum C_i$. Serie: stessa Q, $1/C_{eq} = \sum 1/C_i$.
- Con la batteria la tensione è fissa: aggiungere un ramo in parallelo cambia solo $C_{eq}$ e la carica totale.
- Dielettrico: $C = \varepsilon_r C_0$, $\varepsilon = \varepsilon_r\varepsilon_0$.
- Carica nel condensatore: $a = qE/m$, moto parabolico; tempo da $y = \tfrac12at^2$.
- Millikan: velocità limite → raggio; con il campo → carica; $q = ne$, $e = 1{,}6\cdot10^{-19}\,\mathrm C$.
:::

=== 51 dispense
SLIDES: 58, 57, 61
# Lezione 51 — Energia del condensatore, densità di energia e collegamenti

Caricare un condensatore costa lavoro: bisogna portare carica da un'armatura all'altra **contro** il campo che si va formando. Quel lavoro non va perso, resta immagazzinato come **energia potenziale elettrostatica** e si può riprendere scaricando il condensatore (è l'energia del lampo di un flash). In questa lezione si calcola questa energia, si scopre che si può pensare **distribuita nel campo** con una densità $\tfrac12\varepsilon_0E^2$, si calcolano la forza tra le armature e la **pressione elettrostatica**, e si riprendono i collegamenti in serie e parallelo con esercizi sull'energia.

## Energia elettrostatica di un condensatore

### Derivazione
Il processo di carica si immagina come il trasporto di tante cariche infinitesime $dq$ dall'armatura che alla fine sarà negativa a quella che sarà positiva.

1. **Istante generico**: sulle armature c'è già la carica $q$ (e $-q$), quindi tra di esse c'è la d.d.p. $V' = \frac{q}{C}$.
2. **Lavoro per un'altra carica $dq$**: portarla da un'armatura all'altra contro il campo costa $dL = V'\,dq = \frac{q}{C}\,dq$ (lavoro esterno $= $ carica $\times$ d.d.p., lezione 48).
3. **Lavoro totale**: si somma da carica nulla fino alla carica finale $Q$:

$$L = \int_0^Q \frac{q}{C}\,dq = \frac1C\left[\frac{q^2}{2}\right]_0^Q = \frac{Q^2}{2C}$$

Il lavoro è fatto contro una forza **conservativa**: dipende solo dallo stato finale (carica $Q$ e capacità $C$), non da come si è caricato il condensatore. Resta quindi immagazzinato come energia potenziale elettrostatica $U_e$. Usando $Q = CV$ si scrive in tre forme equivalenti:

$$U_e = \frac{Q^2}{2C} = \frac12 CV^2 = \frac12 QV$$

dove:
- $U_e$ = energia elettrostatica immagazzinata (J)
- $Q$ = carica su un'armatura (C)
- $V$ = d.d.p. tra le armature (V)
- $C$ = capacità (F)

Passaggi tra le forme: $\frac{Q^2}{2C} = \frac{(CV)^2}{2C} = \frac12CV^2$; e $\frac12CV^2 = \frac12(CV)V = \frac12QV$.

**Perché il fattore 1/2**: durante la carica la d.d.p. cresce linearmente da 0 a $V$; in media vale $V/2$, quindi il lavoro è $Q\cdot\frac V2$. Graficamente, è l'area del triangolo sotto la retta $V'(q) = q/C$ tra 0 e $Q$.

Quale forma usare: a **carica costante** (condensatore isolato) conviene $\frac{Q^2}{2C}$; a **tensione costante** (collegato a una pila) conviene $\frac12CV^2$.

::: esempio
**Energia accumulata.** $C = 3\,\mu\mathrm F$ caricato a $V = 10\,\mathrm V$:
$U = \frac12\cdot3\cdot10^{-6}\cdot10^2 = \frac12\cdot3\cdot10^{-4} = 1{,}5\cdot10^{-4}\,\mathrm J$.

Carica: $Q = CV = 30\,\mu\mathrm C$; controllo $\frac12QV = \frac12\cdot30\cdot10^{-6}\cdot10 = 1{,}5\cdot10^{-4}\,\mathrm J$.
:::

### Conduttore isolato e sistemi di cariche
Allo stesso risultato si arriva per un **conduttore isolato** carico: il lavoro serve a portare la carica dall'infinito fino alla superficie, e $U = \frac{Q^2}{2C} = \frac12QV$. Un conduttore isolato si può vedere come un condensatore con la seconda armatura all'infinito.

Per un **sistema di cariche puntiformi** l'energia potenziale è la somma dei lavori per portare ciascuna carica dall'infinito (dove il potenziale è zero) alla posizione finale, nel potenziale creato da tutte le altre:

$$U = \frac12\sum_i q_iV_i \qquad V_i = \sum_{j\ne i}\frac{1}{4\pi\varepsilon_0}\frac{q_j}{r_{ij}}$$

dove:
- $q_i$ = carica i-esima (C)
- $V_i$ = potenziale nel punto della carica i dovuto a tutte le altre (V)
- $r_{ij}$ = distanza tra le cariche i e j (m)

Il fattore $\frac12$ c'è perché la somma è simmetrica: la coppia (i, j) compare due volte (una con $q_iV_i$, una con $q_jV_j$) e senza il mezzo l'energia di ogni coppia sarebbe contata due volte. Per distribuzioni continue le somme diventano integrali.

Per i **conduttori** la carica sta in superficie e il potenziale è uniforme: $U = \frac12\sum_k Q_kV_k$. Per un condensatore (due conduttori con $+Q$ a potenziale $V_1$ e $-Q$ a potenziale $V_2$):

$$U = \frac12QV_1 + \frac12(-Q)V_2 = \frac12Q(V_1 - V_2) = \frac12QV$$

di nuovo la stessa espressione.

::: esempio
**Energia di due cariche.** $q_1 = 2\,\mu\mathrm C$ e $q_2 = -3\,\mu\mathrm C$ a 30 cm: $U = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r} = 8{,}99\cdot10^9\cdot\frac{(2\cdot10^{-6})(-3\cdot10^{-6})}{0{,}3} = 8{,}99\cdot10^9\cdot(-2\cdot10^{-11}) \approx -0{,}18\,\mathrm J$. Negativa: per separarle serve fornire 0,18 J.
:::

## Densità di energia del campo elettrico

Dove si trova l'energia? Si può pensare che sia **associata al campo**, distribuita nei punti dello spazio in cui il campo è attivo. Nel condensatore piano il campo è uniforme, quindi l'energia sarà distribuita uniformemente nel volume tra le armature.

Derivazione: si parte da $U_e = \frac12CV^2$ e si sostituiscono $C = \frac{\varepsilon_0S}{d}$ e $V = Ed$:

$$U_e = \frac12\cdot\frac{\varepsilon_0S}{d}\cdot(Ed)^2 = \frac12\cdot\frac{\varepsilon_0S}{d}\cdot E^2d^2 = \frac12\varepsilon_0E^2\,(S\,d)$$

Il prodotto $S\,d$ è il **volume** $\tau$ dello spazio tra le armature, dove c'è il campo. Dividendo l'energia per il volume si ottiene la **densità di energia elettrostatica**:

$$u_e = \frac{U_e}{\tau} = \frac12\varepsilon_0E^2$$

dove:
- $u_e$ = densità di energia (J/m³)
- $E$ = modulo del campo nel punto (V/m)
- $\tau = Sd$ = volume tra le armature (m³)

Nella formula finale **non compare nulla del condensatore** (né S, né d, né Q): dipende solo dal campo nel punto. Si assume quindi che valga in **qualunque** regione di spazio vuoto dove c'è un campo elettrico, anche non uniforme. L'energia totale di una distribuzione di cariche si ottiene integrando su tutto lo spazio dove il campo è diverso da zero:

$$U_e = \int_{\text{spazio}}\frac12\varepsilon_0E^2\,d\tau$$

In un dielettrico si sostituisce $\varepsilon_0$ con $\varepsilon = \varepsilon_r\varepsilon_0$: $u_e = \frac12\varepsilon E^2$ (lezione 52).

::: esempio
**Stesso condensatore della lezione 50** ($S = 40\,\mathrm{cm^2}$, $d = 1\,\mathrm{mm}$, $V_0 = 600\,\mathrm V$, $C = 35{,}4\,\mathrm{pF}$, $E = 6\cdot10^5\,\mathrm{V/m}$).

- Energia: $U = \frac12CV_0^2 = \frac12\cdot3{,}54\cdot10^{-11}\cdot3{,}6\cdot10^5 = 6{,}37\cdot10^{-6}\,\mathrm J \approx 6{,}4\,\mu\mathrm J$.
- Densità: $u_e = \frac12\cdot8{,}85\cdot10^{-12}\cdot(6\cdot10^5)^2 = \frac12\cdot8{,}85\cdot10^{-12}\cdot3{,}6\cdot10^{11} \approx 1{,}59\,\mathrm{J/m^3}$.
- Controllo: volume $\tau = 4\cdot10^{-3}\cdot10^{-3} = 4\cdot10^{-6}\,\mathrm{m^3}$; $u_e\tau = 1{,}59\cdot4\cdot10^{-6} = 6{,}37\cdot10^{-6}\,\mathrm J$, uguale a $U$.
:::

::: esempio
**Sfera metallica** (esercizio della dispensa 58). Sfera isolata di diametro 10 cm ($R = 0{,}05\,\mathrm m$) a potenziale $V_0 = 8000\,\mathrm V$. Densità di energia vicino alla superficie.

1. Per la sfera $V_0 = \frac{Q}{4\pi\varepsilon_0R}$ ed $E = \frac{Q}{4\pi\varepsilon_0R^2}$ sulla superficie, quindi $E = \frac{V_0}{R} = \frac{8000}{0{,}05} = 1{,}6\cdot10^5\,\mathrm{V/m}$, radiale.
2. $u_e = \frac12\varepsilon_0E^2 = \frac12\cdot8{,}85\cdot10^{-12}\cdot2{,}56\cdot10^{10} \approx 0{,}11\,\mathrm{J/m^3}$.
:::

## Bilancio energetico con il generatore

Se il condensatore resta collegato a un generatore che mantiene costante la d.d.p. $V$ e si avvicinano le armature, la capacità aumenta e il generatore fornisce altra carica $dQ$. Bilancio:
- il generatore spende il lavoro $dL_{gen} = V\,dQ$ (sposta $dQ$ attraverso la d.d.p. $V$);
- l'energia del condensatore aumenta di $dU = d\left(\tfrac12QV\right) = \tfrac12V\,dQ$ (a $V$ costante);
- la differenza, $V\,dQ - \tfrac12V\,dQ = \tfrac12V\,dQ$, è il **lavoro meccanico** compiuto dalla forza attrattiva tra le armature mentre si avvicinano.

L'energia fornita dal generatore va **per metà** nell'energia elettrostatica e **per metà** nel lavoro di avvicinamento delle armature.

## Forza tra le armature e pressione elettrostatica

Le armature hanno cariche opposte e si attraggono. La forza si ricava dall'energia (principio dei lavori virtuali).

**A carica costante** (condensatore isolato): con armature a distanza $x$, $U = \frac{Q^2}{2C} = \frac{Q^2x}{2\varepsilon_0S}$. Il lavoro della forza del campo è l'opposto della variazione di energia: $F = -\frac{dU}{dx} = -\frac{Q^2}{2\varepsilon_0S}$. Il segno meno indica che la forza tende a **ridurre** x: è attrattiva. In modulo

$$F = \frac{Q^2}{2\varepsilon_0S} = \frac{\sigma^2S}{2\varepsilon_0}$$

dove:
- $F$ = forza tra le armature (N)
- $Q$ = carica (C); $\sigma = Q/S$ (C/m²)
- $S$ = area delle armature (m²)

Si può capire anche così: ogni armatura sente il campo dell'altra, che vale $\frac{\sigma}{2\varepsilon_0}$ (metà del campo totale, perché il campo di una lastra non agisce su sé stessa); $F = Q\cdot\frac{\sigma}{2\varepsilon_0} = \frac{\sigma^2S}{2\varepsilon_0}$.

**A d.d.p. costante** (collegato al generatore): $U = \frac12CV^2 = \frac{\varepsilon_0SV^2}{2x}$; qui lavora anche il generatore, e la forza si ottiene con il segno **opposto** rispetto alla variazione dell'energia elettrostatica: $F = +\frac{dU}{dx} = -\frac{\varepsilon_0SV^2}{2x^2}$. In modulo $F = \frac{\varepsilon_0SV^2}{2d^2} = \frac{\varepsilon_0E^2S}{2}$: lo stesso valore di prima (con $E = V/d = \sigma/\varepsilon_0$).

**Pressione elettrostatica**: forza per unità di superficie tra le armature:

$$p_e = \frac FS = \frac{\sigma^2}{2\varepsilon_0} = \frac12\varepsilon_0E^2$$

dove:
- $p_e$ = pressione elettrostatica (Pa = N/m²)

Non contiene parametri del sistema (né d né S), quindi vale per qualunque distribuzione superficiale di carica e qualunque forma delle armature. È numericamente **uguale alla densità di energia** (J/m³ = N/m² = Pa).

::: esempio
**Elettrometro a bilancia** (esercizio della dispensa 58). Su un braccio di una bilancia è appesa un'armatura di un condensatore piano, affacciata a una seconda armatura fissa; $S = 400\,\mathrm{cm^2}$, $d = 5\,\mathrm{mm}$. Con un generatore che mantiene la d.d.p. $V$, per equilibrare serve una massa $m = 20\,\mathrm g$ sull'altro piatto. Trovare $V$.

1. Equilibrio: forza elettrostatica = peso: $\frac{\varepsilon_0SV^2}{2d^2} = mg$.
2. Ricavo $V$: $V = d\sqrt{\frac{2mg}{\varepsilon_0S}}$.
3. Numeri: $S = 0{,}04\,\mathrm{m^2}$, $d = 0{,}005\,\mathrm m$, $m = 0{,}02\,\mathrm{kg}$: $\frac{2\cdot0{,}02\cdot9{,}81}{8{,}85\cdot10^{-12}\cdot0{,}04} = \frac{0{,}392}{3{,}54\cdot10^{-13}} = 1{,}11\cdot10^{12}$, radice $1{,}05\cdot10^6$.
4. $V = 0{,}005\cdot1{,}05\cdot10^6 \approx 5{,}3\cdot10^3\,\mathrm V$.

Misurando una forza si misura una tensione: per questo si chiama elettrometro.
:::

## Collegamenti: come trovare la capacità equivalente

**Parallelo** (stessa d.d.p. $V$ su tutti):
1. $Q_1 = C_1V$, $Q_2 = C_2V$.
2. $Q = Q_1 + Q_2 = (C_1 + C_2)V$.
3. $C_{eq} = Q/V = C_1 + C_2$: la **somma** delle capacità.

**Serie** (stessa carica $Q$ su tutti, per induzione):
1. $V_1 = Q/C_1$, $V_2 = Q/C_2$.
2. $V = V_1 + V_2 = Q\left(\frac1{C_1} + \frac1{C_2}\right)$.
3. $\frac1{C_{eq}} = \frac VQ = \frac1{C_1} + \frac1{C_2}$: l'**inverso della somma degli inversi**.

**Circuiti misti**: si riduce un gruppo alla volta, partendo da quello più interno (un parallelo dentro una serie, o viceversa), sostituendolo con il suo equivalente, finché resta un solo condensatore.

L'energia di un sistema è quella del condensatore equivalente: è il lavoro speso dal generatore per caricare l'equivalente, ed è uguale alla somma delle energie dei singoli.

::: esempio
**Circuito misto.** $C_1 = 10\,\mu\mathrm F$ in serie con il parallelo di $C_2 = 10\,\mu\mathrm F$ e $C_3 = 2\,\mu\mathrm F$.

1. Parallelo interno: $C_{23} = 10 + 2 = 12\,\mu\mathrm F$.
2. Serie con $C_1$: $C_{eq} = \frac{10\cdot12}{10 + 12} = \frac{120}{22} \approx 5{,}45\,\mu\mathrm F$.
:::

::: esempio
**Due condensatori uguali in serie su una pila.** Due condensatori uguali $C$ in serie su una pila da 10 V immagazzinano in tutto 120 J. Quanto vale $C$?

1. Equivalente della serie di due uguali: $C_{eq} = C/2$.
2. Energia: $U = \frac12C_{eq}V^2 = \frac12\cdot\frac C2\cdot100 = 25\,C$.
3. $25\,C = 120\,\mathrm J \Rightarrow C = 4{,}8\,\mathrm F$.

(Valore enorme, da supercondensatore: l'esercizio è numerico.) Usare $2C$ (parallelo) darebbe 1,2 F: sbagliato.
:::

::: esempio
**Parallelo carico a 100 V** (esercizio della dispensa 61). $4\,\mu\mathrm F$ e $8\,\mu\mathrm F$ in parallelo a 100 V.

1. Stessa tensione: $Q_1 = 4\cdot10^{-6}\cdot100 = 400\,\mu\mathrm C$, $Q_2 = 800\,\mu\mathrm C$.
2. $C_{eq} = 12\,\mu\mathrm F$; $U = \frac12\cdot12\cdot10^{-6}\cdot10^4 = 0{,}06\,\mathrm J$.
3. Controllo: $\frac12\cdot4\cdot10^{-6}\cdot10^4 + \frac12\cdot8\cdot10^{-6}\cdot10^4 = 0{,}02 + 0{,}04 = 0{,}06\,\mathrm J$.
:::

::: esempio
**Serie in parallelo a un terzo** (esercizio della dispensa 61, parti a e b). $C_1 = 0{,}7\,\mu\mathrm F$ in serie con $C_2 = 0{,}3\,\mu\mathrm F$; la serie è in parallelo con $C_3 = 0{,}4\,\mu\mathrm F$; tensione applicata $V_0 = 24\,\mathrm V$.

1. Serie: $C_{12} = \frac{0{,}7\cdot0{,}3}{1{,}0} = 0{,}21\,\mu\mathrm F$. Totale: $C = 0{,}21 + 0{,}4 = 0{,}61\,\mu\mathrm F$.
2. $C_3$ è direttamente ai capi del generatore: $V_3 = 24\,\mathrm V$.
3. La serie ha ai capi 24 V e carica comune $q = C_{12}V_0 = 0{,}21\cdot24 = 5{,}04\,\mu\mathrm C$.
4. $V_1 = q/C_1 = 5{,}04/0{,}7 = 7{,}2\,\mathrm V$; $V_2 = 5{,}04/0{,}3 = 16{,}8\,\mathrm V$ (somma 24 V). Il condensatore più piccolo prende la tensione più grande.

Il seguito (dielettrico in $C_2$) è nella lezione 52.
:::

## Perché la serie per le alte tensioni

In serie la tensione totale si **divide** tra i condensatori. Con N condensatori uguali, ognuno ha ai capi $V/N$. Così si può lavorare a tensioni più alte di quella che un singolo condensatore sopporta senza scarica (rigidità dielettrica, lezione 52), al prezzo di una capacità ridotta a $C/N$.

::: attenzione
- $U = \frac12QV$, non $QV$: il fattore 1/2 viene dalla tensione che cresce durante la carica.
- Nel parallelo $C_{eq}$ è la **somma**; l'inverso della somma degli inversi vale per la serie.
- La densità di energia $\frac12\varepsilon_0E^2$ vale ovunque ci sia campo, non solo nei condensatori.
- La forza tra le armature usa il campo di **una sola** armatura ($\sigma/2\varepsilon_0$), per questo compare il 2 al denominatore.
:::

::: esame
- **"Cosa è un condensatore?"** (aperta): due conduttori in induzione completa (armature), cariche $\pm Q$, $C = Q/\Delta V$ dipende solo da geometria e mezzo; esempi piano ($\varepsilon_0S/d$), sferico, cilindrico; immagazzina energia $\frac12CV^2$.
- **"Capacità equivalenti in serie e parallelo"** (aperta): i tre passi di ciascuna derivazione.
- **"Densità di energia partendo dal condensatore piano"** (aperta): lavoro di carica $\int_0^Q\frac qC dq = \frac{Q^2}{2C}$, poi $\frac12CV^2$ con $C = \varepsilon_0S/d$ e $V = Ed$ dà $\frac12\varepsilon_0E^2\cdot Sd$, divisione per il volume: $u_e = \frac12\varepsilon_0E^2$, valida in ogni punto con campo; energia totale = integrale di $u_e$.
- Chiuse: energia $\frac12QV$, energia con numeri ($1{,}5\cdot10^{-4}\,\mathrm J$), parallelo = somma, circuito misto (5,45 µF), due uguali in serie con 120 J (4,8 F).
:::

::: sintesi
- Lavoro di carica: $dL = \frac qC dq$; $U_e = \frac{Q^2}{2C} = \frac12CV^2 = \frac12QV$.
- Sistemi di cariche: $U = \frac12\sum q_iV_i$; conduttori $\frac12\sum Q_kV_k$.
- Densità di energia: $u_e = \frac12\varepsilon_0E^2$ (J/m³), in ogni punto con campo; $U = \int u_e\,d\tau$.
- Con generatore a V costante: metà dell'energia fornita va nel condensatore, metà in lavoro meccanico.
- Forza tra le armature: $F = \frac{Q^2}{2\varepsilon_0S}$; pressione $p_e = \frac{\sigma^2}{2\varepsilon_0} = \frac12\varepsilon_0E^2 = u_e$.
- Parallelo $C_{eq} = \sum C_i$ (stessa V); serie $1/C_{eq} = \sum 1/C_i$ (stessa Q); misti: dall'interno.
- Serie per le alte tensioni: ognuno regge $V/N$.
:::

=== 52 dispense
SLIDES: 59, 60, 61
# Lezione 52 — Dielettrici: capacità, polarizzazione, induzione elettrica e rigidità dielettrica

Finora i campi sono stati studiati nel vuoto, con i conduttori. In pratica tra le armature di un condensatore c'è quasi sempre un **isolante** (aria, plastica, ceramica, olio). Questi materiali si chiamano **dielettrici** e modificano il campo: la capacità aumenta, il campo e la tensione diminuiscono. In questa lezione si parte dall'osservazione sperimentale sul condensatore, poi si spiega il fenomeno a livello microscopico con la **polarizzazione**, si introducono le **cariche di polarizzazione**, il vettore **polarizzazione** $\vec P$ e il vettore **induzione elettrica** $\vec D$, e si conclude con la **rigidità dielettrica**, il campo massimo che un isolante sopporta.

Ipotesi di tutta la lezione: dielettrici **omogenei** (stesse proprietà in ogni punto) e **isotropi** (nessuna direzione privilegiata).

## I dielettrici

Un **dielettrico** è un materiale isolante, solido, liquido o gassoso: aria, vetro, plastica, ceramica, carta, olio, acqua distillata. Gli elettroni sono legati agli atomi e non possono scorrere; il materiale è localmente neutro. Però in un campo le cariche positive e negative si spostano di pochissimo in versi opposti: il materiale si **polarizza**.

## Capacità in presenza di un dielettrico (fatto sperimentale)

Un condensatore piano nel vuoto ha capacità $C_0 = \frac{\varepsilon_0S}{d}$ (il pedice 0 indica il vuoto). Caricato con $Q$, ha d.d.p. $V_0 = Q/C_0$.

Esperimento: si lascia invariata la geometria e la **carica** (condensatore isolato) e si riempie lo spazio tra le armature con un dielettrico omogeneo e neutro. Si misura una nuova d.d.p. $V < V_0$. Poiché $C = Q/V$ con Q uguale e V minore, la capacità è **aumentata**. Si definisce:

$$\varepsilon_r = \frac{C}{C_0}$$

dove:
- $\varepsilon_r$ = **costante dielettrica relativa** del mezzo (numero puro, $\ge 1$; vuoto 1, aria $\approx 1$)
- $C$ = capacità con il dielettrico (F)
- $C_0$ = capacità nel vuoto (F)

La capacità con il dielettrico è quindi

$$C = \varepsilon_rC_0 = \varepsilon_r\varepsilon_0\frac Sd = \varepsilon\frac Sd$$

dove:
- $\varepsilon = \varepsilon_0\varepsilon_r$ = **costante dielettrica assoluta** del mezzo (F/m)

La formula è quella del vuoto con $\varepsilon$ al posto di $\varepsilon_0$. Vale per ogni geometria (sferico, cilindrico...) se il dielettrico riempie tutto lo spazio. A parità di carica: $V = V_0/\varepsilon_r$.

| Materiale | $\varepsilon_r$ indicativo |
|---|---|
| Vuoto | 1 (esatto) |
| Aria | 1,0006 |
| Carta, plastiche | 2–4 |
| Vetro, pyrex | 4–10 |
| Acqua | circa 80 |

## Campo in presenza del dielettrico

Il campo nel condensatore resta uniforme (dielettrico omogeneo) ed è legato alla d.d.p. da $E = V/d$. A carica costante $V = V_0/\varepsilon_r$, quindi:

$$E = \frac Vd = \frac{V_0}{\varepsilon_rd} = \frac{E_0}{\varepsilon_r} = \frac{\sigma_0}{\varepsilon_0\varepsilon_r} = \frac{\sigma_0}{\varepsilon}$$

dove:
- $E_0 = \sigma_0/\varepsilon_0$ = campo senza dielettrico (V/m)
- $\sigma_0 = Q/S$ = densità di carica **libera** sulle armature (C/m²)

Di nuovo la formula del vuoto con $\varepsilon$ al posto di $\varepsilon_0$.

### L'"escamotage" che rivela le cariche di polarizzazione
Si riscrive il campo in modo da farlo sembrare un campo nel vuoto:

$$E = \frac{\sigma_0}{\varepsilon_0\varepsilon_r} = \frac{1}{\varepsilon_0}\left(\sigma_0 - \sigma_0 + \frac{\sigma_0}{\varepsilon_r}\right) = \frac{\sigma_0 - \sigma_p}{\varepsilon_0} \qquad\text{con}\quad \sigma_p = \frac{\varepsilon_r - 1}{\varepsilon_r}\sigma_0$$

Il campo è uguale a quello che si avrebbe **nel vuoto** con una densità di carica ridotta, come se accanto a ciascuna armatura ci fosse uno strato di carica di **segno opposto** con densità $\sigma_p$. Queste sono le **cariche di polarizzazione** che compaiono sulle facce del dielettrico (spiegate più sotto). Poiché $\varepsilon_r \ge 1$, $0 \le \sigma_p < \sigma_0$: riducono il campo ma non lo annullano (al contrario di un conduttore, che lo annulla del tutto).

## Energia elettrostatica nei dielettrici

Ripetendo il calcolo della lezione 51 con il dielettrico che riempie tutto lo spazio:

$$U = \frac{Q^2}{2C} = \frac{Q^2}{2\varepsilon_rC_0} = \frac{U_0}{\varepsilon_r} \qquad u_e = \frac U{Sd} = \frac12\varepsilon E^2 = \frac12\varepsilon_r\varepsilon_0E^2$$

dove:
- $U_0 = Q^2/(2C_0)$ = energia nel vuoto con la stessa carica (J)
- $u_e$ = densità di energia nel dielettrico (J/m³)

A **carica costante** l'energia immagazzinata **diminuisce** inserendo il dielettrico: $U - U_0 = \frac{Q^2}{2C_0}\left(\frac1{\varepsilon_r} - 1\right) < 0$. Con il campo ridotto a $E_0/\varepsilon_r$, anche $u_e = \frac12\varepsilon_r\varepsilon_0\frac{E_0^2}{\varepsilon_r^2} = \frac{u_{e0}}{\varepsilon_r}$ diminuisce.

Conseguenza meccanica: il sistema tende allo stato di energia minore, quindi un dielettrico avvicinato a un condensatore carico isolato viene **risucchiato** dentro.

### Condensatore isolato o collegato a una pila

| Grandezza | Isolato ($Q$ fisso) | Collegato a una pila ($V$ fisso) |
|---|---|---|
| Capacità | $\varepsilon_rC_0$ | $\varepsilon_rC_0$ |
| Carica | uguale $Q_0$ | $\varepsilon_rQ_0$ (la pila ne fornisce altra) |
| Tensione | $V_0/\varepsilon_r$ | uguale $V_0$ |
| Campo | $E_0/\varepsilon_r$ | uguale $E_0 = V_0/d$ |
| Energia | $U_0/\varepsilon_r$ (diminuisce) | $\varepsilon_rU_0$ (aumenta) |

Poiché $\varepsilon_r \ge 1$, un dielettrico non riduce mai la capacità.

::: esempio
**Condensatore isolato con $\varepsilon_r = 4$.** La capacità quadruplica; la carica resta la stessa (il condensatore è isolato); la tensione $V = Q/C$ diventa un quarto; anche il campo diventa un quarto; l'energia $Q^2/2C$ diventa un quarto.
:::

::: esempio
**Due condensatori in parallelo, dielettrico in uno** (esercizio della dispensa 59). $C_1 = 2\,\mu\mathrm F$ e $C_2 = 4\,\mu\mathrm F$ nel vuoto, in parallelo e isolati, con carica totale $Q = 4\,\mu\mathrm C$. Si riempie $C_2$ con un dielettrico $\varepsilon_r = 2{,}5$.

1. Prima: $V = \frac{Q}{C_1 + C_2} = \frac46 = 0{,}667\,\mathrm V$.
2. Dopo: $C_2' = 2{,}5\cdot4 = 10\,\mu\mathrm F$. La carica totale si conserva e la d.d.p. è comune: $V' = \frac{Q}{C_1 + C_2'} = \frac{4}{12} = 0{,}333\,\mathrm V$.
3. Cariche finali: $Q_1 = C_1V' = 0{,}667\,\mu\mathrm C$, $Q_2 = C_2'V' = 3{,}33\,\mu\mathrm C$ (somma 4 µC). La carica migra verso il condensatore con il dielettrico.
4. Energia a carica costante: $U_i = \frac{Q^2}{2\cdot6\,\mu\mathrm F} = \frac{16\cdot10^{-12}}{12\cdot10^{-6}} = 1{,}33\,\mu\mathrm J$; $U_f = \frac{16\cdot10^{-12}}{24\cdot10^{-6}} = 0{,}667\,\mu\mathrm J$; $\Delta U = -0{,}667\,\mu\mathrm J$ (diminuisce).
:::

::: esempio
**Lastra di dielettrico più sottile delle armature** (esercizio della dispensa 59). Condensatore piano (area S, distanza d, carica Q); si inserisce una lastra di spessore $s < d$, costante $\varepsilon_r$, area uguale alle armature.

1. Le facce della lastra polarizzata si comportano come armature sottilissime: il sistema equivale a **condensatori in serie**: uno di vuoto di spessore totale $d - s$ (i due strati vuoti, ovunque si trovi la lastra) e uno di dielettrico di spessore $s$.
2. $\frac1C = \frac{d - s}{\varepsilon_0S} + \frac{s}{\varepsilon_r\varepsilon_0S}$, quindi $C = \frac{\varepsilon_0S}{d - s + s/\varepsilon_r}$.
3. Prima: $C_0 = \frac{\varepsilon_0S}d$. Energie a carica costante: $U_0 = \frac{Q^2d}{2\varepsilon_0S}$, $U = \frac{Q^2(d - s + s/\varepsilon_r)}{2\varepsilon_0S}$.
4. $\Delta U = U - U_0 = \frac{Q^2}{2\varepsilon_0S}\left(-s + \frac s{\varepsilon_r}\right) = -\frac{Q^2s(\varepsilon_r - 1)}{2\varepsilon_0S\varepsilon_r} < 0$ perché $\varepsilon_r > 1$.

L'energia diminuisce: la lastra viene risucchiata, e il risultato non dipende dalla posizione della lastra tra le armature. Con $s = d$ si ritrova $C = \varepsilon_rC_0$.
:::

::: esempio
**Condensatore riempito in parte, in larghezza** (esercizio della dispensa 59). Armature rettangolari $a\times b$ a distanza d; una lastra di dielettrico $\varepsilon_r$ riempie tutto lo spessore ma solo per un tratto $x$ del lato $a$. Che frazione della carica totale $Q$ sta sulla parte di armatura a contatto con il dielettrico?

1. Equivale a **due condensatori in parallelo** (stessa d.d.p. tra le armature): $C_x = \frac{\varepsilon_r\varepsilon_0bx}{d}$ e $C_v = \frac{\varepsilon_0b(a - x)}{d}$.
2. Stessa $\Delta V$: $\frac{Q_x}{C_x} = \frac{Q - Q_x}{C_v}$, quindi $Q_x = Q\frac{C_x}{C_x + C_v}$.
3. $Q_x = Q\,\frac{\varepsilon_rx}{\varepsilon_rx + a - x}$.

La parte con il dielettrico accoglie più carica per unità di area (di un fattore $\varepsilon_r$), mentre il campo $\Delta V/d$ è lo stesso nelle due zone.
:::

::: esempio
**Forza sulla lastra parzialmente inserita** (esercizio della dispensa 61). Armature quadrate di lato L, distanza d, carica Q; una lastra $\varepsilon_r$ che riempie lo spessore è inserita per un tratto x.

1. Parallelo come sopra: $C(x) = \frac{\varepsilon_0L}{d}\left[(L - x) + \varepsilon_rx\right] = \frac{\varepsilon_0L}{d}\left[L + (\varepsilon_r - 1)x\right]$.
2. Energia a carica costante: $U = \frac{Q^2}{2C(x)}$, che diminuisce al crescere di x.
3. Forza: $F = -\frac{dU}{dx} = \frac{Q^2}{2C^2}\frac{dC}{dx} = \frac{Q^2}{2C^2}\cdot\frac{\varepsilon_0L(\varepsilon_r - 1)}{d} > 0$.

La forza è nel verso delle x crescenti: la lastra viene **risucchiata** dentro, fino a riempire il condensatore (energia minima).
:::

::: esempio
**Lamina metallica tra le armature** (esercizio della dispensa 59). Armature quadrate di lato l, distanza d, caricate a tensione V e poi isolate (Q costante). Si inserisce parallela alle armature una lamina **metallica** di spessore h.

1. Prima: $C = \frac{\varepsilon_0l^2}{d}$, $Q = CV = \frac{\varepsilon_0l^2V}{d}$, $U = \frac12CV^2 = \frac{\varepsilon_0l^2V^2}{2d}$.
2. Dentro il metallo il campo è nullo: il sistema è una serie di due condensatori di spessori $x$ e $d - h - x$, cioè $\frac1{C'} = \frac{x + d - h - x}{\varepsilon_0l^2}$, $C' = \frac{\varepsilon_0l^2}{d - h}$ (non dipende dalla posizione x).
3. $U' = \frac{Q^2}{2C'} = \frac{\varepsilon_0^2l^4V^2}{d^2}\cdot\frac{d - h}{2\varepsilon_0l^2} = \frac{\varepsilon_0l^2V^2(d - h)}{2d^2}$.
4. Lavoro delle forze del campo: $W = U - U' = \frac{\varepsilon_0l^2V^2}{2d^2}\left[d - (d - h)\right] = \frac{\varepsilon_0l^2V^2h}{2d^2} > 0$: è il campo a fare lavoro, la lamina viene risucchiata. (Con la convenzione $W = U' - U$ il lavoro risulterebbe negativo, cioè fatto dal sistema.)
5. Nuova tensione: $V' = \frac Q{C'} = V\frac{d - h}{d} < V$.

Una lamina metallica si comporta come un dielettrico con $\varepsilon_r \to \infty$ nel suo spessore.
:::

::: esempio
**Dielettrico in un condensatore di un circuito misto** (seguito della lezione 51, dispensa 61). $C_1 = 0{,}7\,\mu\mathrm F$ in serie con $C_2 = 0{,}3\,\mu\mathrm F$, il tutto in parallelo con $C_3 = 0{,}4\,\mu\mathrm F$, a 24 V costanti. Si riempie $C_2$ con un dielettrico $\varepsilon_r$: $C_2' = 0{,}3\,\varepsilon_r\,\mu\mathrm F$.

- $C_3$ ha sempre 24 V: $q_3' = 0{,}4\cdot24 = 9{,}6\,\mu\mathrm C$ (non cambia).
- La serie ha carica comune $q' = \frac{C_1C_2'}{C_1 + C_2'}\cdot24$; poi $V_1' = q'/C_1$ e $V_2' = q'/C_2' = 24\frac{C_1}{C_1 + C_2'}$.
- Aumentando $C_2$, la tensione si sposta su $C_1$ e la carica della serie cresce. Per esempio con $\varepsilon_r = 2$: $C_2' = 0{,}6$, $q' = \frac{0{,}42}{1{,}3}\cdot24 = 7{,}75\,\mu\mathrm C$, $V_1' = 11{,}1\,\mathrm V$, $V_2' = 12{,}9\,\mathrm V$.
:::

## Struttura microscopica: due modi di polarizzarsi

Nei dielettrici gli elettroni sono legati ai nuclei e distribuiti simmetricamente intorno ad essi: localmente il materiale è neutro. Applicando un campo esterno succede una di due cose.

- **Polarizzazione per deformazione** (molecole non polari, per esempio gas nobili, $\mathrm{N_2}$, $\mathrm{O_2}$): senza campo il baricentro della nuvola elettronica coincide con il nucleo. Il campo spinge gli elettroni in verso **opposto** al campo e il nucleo nel verso del campo; i baricentri si separano di una piccola distanza $x$ e l'atomo acquista un **momento di dipolo indotto** $p = Zex$ ($Z$ numero atomico, $e$ carica elementare), diretto come il campo.
- **Polarizzazione per orientamento** (molecole polari, per esempio l'acqua): le molecole hanno già un momento di dipolo **permanente** per l'asimmetria delle cariche. Senza campo l'agitazione termica e l'assenza di direzioni privilegiate li orientano a caso: il momento medio è zero. Il campo esercita su ogni dipolo un momento torcente ($\vec M = \vec p\times\vec E$, lezione 53) che tende ad allinearlo **al** campo; l'agitazione termica si oppone, e all'equilibrio resta un momento di dipolo medio non nullo nella direzione del campo.

In entrambi i casi il materiale acquista un momento di dipolo medio nella direzione del campo.

## Il vettore polarizzazione

La **polarizzazione** (vettore di polarizzazione del dielettrico, o polarizzazione elettrica) è il momento di dipolo **per unità di volume**:

$$\vec P = \frac{\Delta\vec p}{\Delta\tau} = n\langle\vec p\rangle$$

dove:
- $\vec P$ = polarizzazione (C/m², perché C·m diviso m³)
- $\Delta\vec p$ = momento di dipolo totale contenuto nel volumetto $\Delta\tau$ (C·m)
- $n$ = numero di atomi o molecole per unità di volume (m⁻³)
- $\langle\vec p\rangle$ = momento di dipolo medio di un atomo o molecola (C·m)

Nella maggior parte dei casi (dielettrici amorfi e isotropi, detti **lineari**) $\vec P$ è proporzionale al campo nel dielettrico:

$$\vec P = \varepsilon_0\chi\,\vec E = \varepsilon_0(\varepsilon_r - 1)\vec E$$

dove:
- $\chi$ = **suscettività elettrica** del dielettrico (numero puro, $\ge 0$)
- $\varepsilon_r = 1 + \chi$
- $\vec E$ = campo **nel** dielettrico (V/m)

Il legame $\chi = \varepsilon_r - 1$ si verifica con il condensatore: la carica di polarizzazione sulla faccia è $\sigma_p = P$ (vedi sotto) e vale $\frac{\varepsilon_r - 1}{\varepsilon_r}\sigma_0$; poiché $E = \frac{\sigma_0}{\varepsilon_0\varepsilon_r}$, si ha $\sigma_p = (\varepsilon_r - 1)\varepsilon_0E$, cioè $P = \varepsilon_0(\varepsilon_r - 1)E$.

## Cariche di polarizzazione

### Polarizzazione uniforme
Si divide una lastra uniformemente polarizzata (dentro un condensatore piano) in tanti prismi, di base $dS_0$ e altezza $dh$ pari alla distanza media tra le cariche dei dipoli indotti. Ogni prisma ha momento di dipolo

$$dp = P\,dS_0\,dh$$

equivalente a quello di due cariche opposte $\pm dq$ con $dq = P\,dS_0$ a distanza $dh$. Mettendo i prismi uno dopo l'altro lungo il campo, la carica positiva di uno è a contatto con la negativa del successivo: **si compensano** all'interno. Restano scoperte solo le cariche sulle due facce estreme: una carica **negativa** sulla faccia adiacente all'armatura **positiva** e una positiva sulla faccia adiacente all'armatura negativa, con densità

$$\sigma_p = \frac{dq}{dS_0} = P$$

Per un dielettrico di forma qualsiasi con polarizzazione uniforme, la densità superficiale delle cariche di polarizzazione è la **componente di $\vec P$ normale alla superficie**:

$$\sigma_p = \vec P\cdot\vec u_n = P\cos\theta$$

dove:
- $\sigma_p$ = densità superficiale di carica di polarizzazione (C/m²)
- $\vec u_n$ = versore normale **uscente** dalla superficie del dielettrico
- $\theta$ = angolo tra $\vec P$ e la normale

Queste cariche spiegano l'"escamotage" visto sopra: $E = \frac{\sigma_0 - \sigma_p}{\varepsilon_0}$, il campo nel dielettrico è prodotto da cariche libere e cariche di polarizzazione insieme.

### Polarizzazione non uniforme
Se $\vec P$ cambia da punto a punto, le cariche dei dipoli vicini non si compensano più del tutto: oltre alla carica superficiale compare una **densità di carica di polarizzazione di volume**:

$$\rho_p = -\nabla\cdot\vec P$$

dove:
- $\rho_p$ = densità di volume delle cariche di polarizzazione (C/m³)
- $\nabla\cdot\vec P$ = divergenza di $\vec P$

In ogni caso la carica di polarizzazione **totale** è zero (il dielettrico era neutro e resta neutro: le cariche si spostano, non si creano):

$$\oint_S\vec P\cdot\vec u_n\,dS + \int_\tau(-\nabla\cdot\vec P)\,d\tau = 0$$

che è proprio il teorema della divergenza applicato a $\vec P$.

## Il campo nel dielettrico è conservativo

Anche a livello microscopico l'interazione dominante tra le cariche è quella elettrica, quindi il campo prodotto da cariche ferme resta **conservativo** anche in presenza di dielettrici:

$$\oint\vec E\cdot d\vec s = 0 \qquad \nabla\times\vec E = 0 \qquad \vec E = -\nabla V$$

Esiste quindi ancora il potenziale.

## Il vettore induzione elettrica

Il teorema di Gauss resta valido, ma deve contare **tutte** le cariche, libere e di polarizzazione:

$$\oint_S\vec E\cdot\vec u_n\,dS = \frac{q_{lib} + q_p}{\varepsilon_0} \qquad \nabla\cdot\vec E = \frac{\rho + \rho_p}{\varepsilon_0}$$

Le cariche di polarizzazione però non si conoscono a priori (dipendono dal campo che si sta cercando). Si sostituisce $\rho_p = -\nabla\cdot\vec P$:

$$\varepsilon_0\nabla\cdot\vec E = \rho - \nabla\cdot\vec P \quad\Rightarrow\quad \nabla\cdot(\varepsilon_0\vec E + \vec P) = \rho$$

Si definisce quindi il vettore **induzione elettrica** (anche induzione dielettrica o spostamento elettrico):

$$\vec D = \varepsilon_0\vec E + \vec P$$

dove:
- $\vec D$ = induzione elettrica (C/m², come $\vec P$ e come una densità superficiale di carica)

e il teorema di Gauss per $\vec D$ diventa:

$$\oint_S\vec D\cdot\vec u_n\,dS = q_{lib} \qquad \nabla\cdot\vec D = \rho_{lib}$$

**Il flusso dell'induzione elettrica attraverso una superficie chiusa dipende solo dalle cariche libere** racchiuse, che ci siano o no cariche di polarizzazione. Nella pratica la carica libera si conosce o si misura: si calcola $\vec D$ con Gauss, poi $\vec E$ e $\vec P$.

**Mezzi lineari e isotropi**: sostituendo $\vec P = \varepsilon_0(\varepsilon_r - 1)\vec E$:

$$\vec D = \varepsilon_0\vec E + \varepsilon_0(\varepsilon_r - 1)\vec E = \varepsilon_0\varepsilon_r\vec E = \varepsilon\vec E$$

L'induzione è direttamente proporzionale al campo, con costante la costante dielettrica assoluta.

### Teorema di Coulomb per $\vec D$
Ripetendo la dimostrazione con il cilindretto (lezione 49) ma usando $\vec D$: vicino alla superficie di un conduttore carico immerso in un dielettrico,

$$\vec D = \sigma\,\vec u_n$$

perpendicolare alla superficie, uscente, con modulo pari alla **densità di carica libera** $\sigma$. Il campo è quindi $E = \frac{\sigma}{\varepsilon}$.

### Interfaccia tra due dielettrici
Sulla superficie di separazione tra due mezzi diversi, in assenza di cariche libere:
- dalla conservatività di $\vec E$ (circuitazione su un rettangolino a cavallo, come nella lezione 49): **la componente tangenziale di $\vec E$ si conserva**, $E_{t1} = E_{t2}$;
- dal teorema di Gauss per $\vec D$ su un cilindretto con basi parallele all'interfaccia e altezza infinitesima (nessuna carica libera dentro): **la componente normale di $\vec D$ si conserva**, $D_{n1} = D_{n2}$.

Poiché $D = \varepsilon E$, la componente normale di $\vec E$ invece salta: $\varepsilon_1E_{n1} = \varepsilon_2E_{n2}$. Le linee di campo si "rifrangono" passando da un mezzo all'altro.

## Equazioni di Maxwell dell'elettrostatica nei dielettrici

In presenza di dielettrici le equazioni più generali sono:

$$\nabla\cdot\vec D = \rho \qquad \nabla\times\vec E = 0$$

con $\rho$ densità di carica libera. Se un **unico** mezzo lineare e isotropo riempie **tutto** lo spazio, $\vec D = \varepsilon\vec E$ e le equazioni diventano quelle del vuoto con $\varepsilon$ al posto di $\varepsilon_0$: $\nabla\cdot\vec E = \rho/\varepsilon$, $\nabla\times\vec E = 0$. A parità di cariche libere, le grandezze nel dielettrico sono legate a quelle nel vuoto (pedice 0) da:

$$D = D_0 \qquad E = \frac{E_0}{\varepsilon_r} \qquad V = \frac{V_0}{\varepsilon_r}$$

Questo generalizza quanto osservato sperimentalmente nei condensatori. Per esempio una carica puntiforme immersa in un dielettrico infinito genera $E = \frac{Q}{4\pi\varepsilon r^2}$: la forza di Coulomb tra due cariche in un mezzo si riduce di $\varepsilon_r$ (in acqua di circa 80 volte, per questo i sali si sciolgono).

## Rigidità dielettrica

Aumentando progressivamente la d.d.p. ai capi di un condensatore con un isolante, il campo nell'isolante cresce. Oltre un valore limite la forza sulle cariche del materiale è così intensa da strapparle e accelerarle: si innesca una **scarica elettrica** (scintilla, arco) che danneggia il materiale e ne distrugge le proprietà isolanti (si dice che il dielettrico si "perfora").

**Rigidità dielettrica** = il **massimo valore del campo** che un mezzo può sopportare prima che avvenga la scarica:

$$E_{max} = \text{rigidità dielettrica} \qquad V_{max} = E_{max}\,d$$

dove:
- $E_{max}$ = rigidità dielettrica (V/m; spesso in kV/mm o MV/m)
- $V_{max}$ = tensione massima applicabile a un condensatore piano (V)
- $d$ = spessore dell'isolante (m)

Dipende dal **materiale**, dalla sua **purezza**, e dallo stato di **pulizia e rugosità** delle superfici. L'aria, con $\varepsilon_r \approx 1$, ha rigidità circa $3\,\mathrm{MV/m} = 3\cdot10^6\,\mathrm{V/m} = 3\,\mathrm{kV/mm}$.

Siccome quasi tutti i condensatori hanno un dielettrico (almeno l'aria), quando servono tensioni elevate si usa la configurazione **in serie**: la d.d.p. totale si divide tra i condensatori e nessuno arriva al campo di scarica.

::: esempio
**Batteria di condensatori per 1000 V** (esercizio della dispensa 60). Condensatori da $C = 2\,\mu\mathrm F$, $d = 1\,\mathrm{mm}$, rigidità 200 kV/m. Servono (a) $0{,}4\,\mu\mathrm F$ e (b) $1{,}2\,\mu\mathrm F$, a $V_0 = 1000\,\mathrm V$.

1. Tensione massima di uno: $V_m = E_{max}d = 2\cdot10^5\cdot10^{-3} = 200\,\mathrm V$.
2. Con N uguali in serie: capacità $C/N$, tensione su ciascuno $V_0/N$. Serve $V_0/N \le 200$, cioè $N \ge 5$.
3. (a) 5 in serie: $C_1 = 2/5 = 0{,}4\,\mu\mathrm F$, reggono $5\cdot200 = 1000\,\mathrm V$.
4. (b) Tre serie da 5 messe in parallelo: ogni ramo regge 1000 V, capacità $C_2 = 3\cdot0{,}4 = 1{,}2\,\mu\mathrm F$ (15 condensatori in tutto).
:::

::: esempio
**Tensione massima del bicchiere di pyrex** (esercizio della dispensa 61; capacità calcolata nella lezione 50: $C \approx 0{,}72\,\mathrm{nF}$). Rigidità del pyrex $14\,\mathrm{kV/mm} = 1{,}4\cdot10^7\,\mathrm{V/m}$; raggi 3,6 e 3,8 cm.

1. Nel cilindrico il campo è radiale e vale $E(r) = \frac{V}{r\ln(R_2/R_1)}$ (da $E = \frac{\lambda}{2\pi\varepsilon r}$ e $V = \frac{\lambda}{2\pi\varepsilon}\ln\frac{R_2}{R_1}$): è massimo sull'armatura interna, $r = R_1$.
2. Imponendo $E(R_1) = E_{max}$: $V_{max} = E_{max}R_1\ln\frac{R_2}{R_1} = 1{,}4\cdot10^7\cdot0{,}036\cdot0{,}0541 \approx 2{,}7\cdot10^4\,\mathrm V = 27\,\mathrm{kV}$.

(Con il vetro sottile si ottiene quasi lo stesso con il piano: $E_{max}\cdot2\,\mathrm{mm} = 28\,\mathrm{kV}$.)
:::

::: attenzione
- La rigidità dielettrica è un **campo** massimo (V/m), non una carica massima né il rapporto $\varepsilon_r$ tra capacità.
- $\varepsilon_r$ moltiplica la capacità, **divide** campo e tensione solo se il condensatore è **isolato**; se è collegato alla pila la tensione resta quella della pila.
- Le cariche di polarizzazione sulla faccia vicina all'armatura positiva sono **negative**.
- $\vec D$ conta solo le cariche libere, $\vec E$ tutte le cariche.
:::

::: esame
- **"Effetto dell'inserimento di un dielettrico in un condensatore carico"** (aperta): sperimentalmente, a Q costante, V scende a $V_0/\varepsilon_r$; quindi $C = \varepsilon_rC_0$ ($\varepsilon_r = C/C_0$, $\varepsilon = \varepsilon_0\varepsilon_r$); campo $E = E_0/\varepsilon_r = (\sigma_0 - \sigma_p)/\varepsilon_0$ con $\sigma_p = \frac{\varepsilon_r - 1}{\varepsilon_r}\sigma_0$; spiegazione con la polarizzazione (deformazione o orientamento) e le cariche di polarizzazione sulle facce; energia $U_0/\varepsilon_r$, il dielettrico è risucchiato; a V costante invece Q ed energia crescono di $\varepsilon_r$; rigidità dielettrica come limite.
- **"Polarizzazione e vettore induzione elettrica"** (aperta): $\vec P = n\langle\vec p\rangle$ momento di dipolo per unità di volume; lineare $\vec P = \varepsilon_0\chi\vec E$, $\chi = \varepsilon_r - 1$; $\sigma_p = \vec P\cdot\vec u_n$, $\rho_p = -\nabla\cdot\vec P$; Gauss con le cariche di polarizzazione porta a $\vec D = \varepsilon_0\vec E + \vec P$, $\nabla\cdot\vec D = \rho_{lib}$, flusso di D = carica libera; mezzi lineari $\vec D = \varepsilon\vec E$.
- Chiusa: rigidità dielettrica = massimo valore del campo prima della scarica.
:::

::: sintesi
- $\varepsilon_r = C/C_0 \ge 1$; $C = \varepsilon_rC_0 = \varepsilon S/d$, $\varepsilon = \varepsilon_0\varepsilon_r$.
- Isolato: $V = V_0/\varepsilon_r$, $E = E_0/\varepsilon_r = (\sigma_0 - \sigma_p)/\varepsilon_0$, $\sigma_p = \frac{\varepsilon_r - 1}{\varepsilon_r}\sigma_0$, $U = U_0/\varepsilon_r$ (dielettrico risucchiato). A V fisso: $Q$ e $U$ $\times\varepsilon_r$.
- Densità di energia nel dielettrico: $u_e = \frac12\varepsilon E^2$.
- Polarizzazione per deformazione (dipoli indotti) o per orientamento (dipoli permanenti).
- $\vec P = n\langle\vec p\rangle$ (C/m²); lineare $\vec P = \varepsilon_0(\varepsilon_r - 1)\vec E = \varepsilon_0\chi\vec E$.
- $\sigma_p = \vec P\cdot\vec u_n$; $\rho_p = -\nabla\cdot\vec P$; carica di polarizzazione totale nulla.
- $\vec D = \varepsilon_0\vec E + \vec P = \varepsilon\vec E$; $\oint\vec D\cdot\vec u_n\,dS = q_{lib}$; vicino a un conduttore $D = \sigma$.
- Interfaccia: si conservano $E_t$ e $D_n$. Maxwell: $\nabla\cdot\vec D = \rho$, $\nabla\times\vec E = 0$; mezzo unico: $E = E_0/\varepsilon_r$, $V = V_0/\varepsilon_r$, $D = D_0$.
- Rigidità dielettrica = campo massimo prima della scarica; aria circa 3 MV/m; $V_{max} = E_{max}d$; per alte tensioni condensatori in serie.
:::

=== 53 dispense
SLIDES: 52, 51
# Lezione 53 — Il dipolo elettrico: campo, momento torcente ed energia in un campo esterno

Il **dipolo elettrico** è il sistema di cariche più semplice dopo la carica singola: due cariche uguali e opposte vicine. È importantissimo perché quasi tutta la materia neutra si comporta, in un campo elettrico, come un insieme di dipoli: le molecole polari (come l'acqua) lo sono già, gli atomi lo diventano quando il campo li deforma (lezione 52). In questa lezione si ricorda come è fatto il campo di un dipolo, poi si studia cosa succede a un dipolo immerso in un campo **esterno**: nessuna forza se il campo è uniforme, ma un **momento torcente** che lo allinea, e un'**energia potenziale** che dipende dall'orientazione.

## Il dipolo elettrico e il suo momento

Un **dipolo elettrico** è un sistema di due cariche di **ugual modulo e segno opposto**, $+q$ e $-q$, tenute fisse a distanza $d$ l'una dall'altra. Si descrive con il **momento di dipolo elettrico**:

$$\vec p = q\,\vec d$$

dove:
- $\vec p$ = momento di dipolo (C·m)
- $q$ = modulo di una delle due cariche (C)
- $\vec d$ = vettore che va dalla carica **negativa** alla carica **positiva**, lungo $d$ (m)

Il momento di dipolo riassume tutto ciò che serve del dipolo, lontano da esso: due dipoli con lo stesso $\vec p$ (per esempio carica doppia e distanza metà) producono lo stesso campo a grande distanza e reagiscono allo stesso modo a un campo esterno.

Ordini di grandezza: la molecola d'acqua ha $p \approx 6{,}2\cdot10^{-30}\,\mathrm{C\,m}$ (come una carica elementare spostata di circa 0,04 nm).

## Il campo generato da un dipolo

### Linee di campo
Le linee di campo escono dalla carica positiva e entrano nella negativa; hanno una forma "a lobi". Sull'asse perpendicolare al dipolo, passante per il suo centro (asse mediano), il campo è **parallelo al dipolo** e diretto in verso **opposto** a $\vec p$ (dalla carica positiva alla negativa).

Motivo geometrico: in un punto dell'asse mediano le due cariche sono alla stessa distanza, quindi i loro campi hanno lo stesso modulo e formano lo stesso angolo con l'asse. Il campo di $+q$ punta via da $+q$, quello di $-q$ punta verso $-q$: le componenti lungo l'asse mediano sono uguali e opposte e si annullano, quelle parallele al dipolo si sommano.

### Calcolo sull'asse mediano (esercizio della dispensa 52)
Cariche $+q$ e $-q$ separate da $2a$ (quindi $p = 2qa$), poste sull'asse x in $\mp a$ con il centro nell'origine; punto P sull'asse y a distanza y dall'origine.

1. Distanza di P da ciascuna carica: $r = \sqrt{y^2 + a^2}$. Modulo di ciascun campo: $E_1 = E_2 = \frac{1}{4\pi\varepsilon_0}\frac{q}{y^2 + a^2}$.
2. Componenti y: uguali e opposte, si annullano.
3. Componenti x: ognuna è $E_1\cos\alpha$, con $\cos\alpha = \frac{a}{\sqrt{y^2 + a^2}}$ (angolo tra il campo e l'asse x). Si sommano:

$$E = 2\cdot\frac{1}{4\pi\varepsilon_0}\frac{q}{y^2 + a^2}\cdot\frac{a}{\sqrt{y^2 + a^2}} = \frac{1}{4\pi\varepsilon_0}\frac{2qa}{(y^2 + a^2)^{3/2}} = \frac{1}{4\pi\varepsilon_0}\frac{p}{(y^2 + a^2)^{3/2}}$$

diretto in verso opposto a $\vec p$.

4. **Lontano dal dipolo** ($y \gg a$) si trascura $a^2$ rispetto a $y^2$:

$$E \approx \frac{1}{4\pi\varepsilon_0}\frac{p}{y^3}$$

dove:
- $E$ = modulo del campo sull'asse mediano (V/m)
- $p$ = momento di dipolo (C·m)
- $y$ = distanza dal centro del dipolo (m)

A grande distanza il campo del dipolo va a zero come $1/y^3$, **più rapidamente** del campo di una carica singola ($1/y^2$): visti da lontano, i campi delle due cariche opposte quasi si annullano. (Sull'asse del dipolo, per confronto, si trova $E \approx \frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3}$, diretto come $\vec p$: stessa dipendenza $1/r^3$.)

::: esempio
**Campo di una molecola d'acqua.** A $y = 1\,\mathrm{nm}$ sull'asse mediano: $E \approx 8{,}99\cdot10^9\cdot\frac{6{,}2\cdot10^{-30}}{(10^{-9})^3} = 8{,}99\cdot10^9\cdot6{,}2\cdot10^{-3} \approx 5{,}6\cdot10^7\,\mathrm{V/m}$. Raddoppiando la distanza il campo diventa $1/8$, non $1/4$.
:::

## Dipolo in un campo uniforme: forza nulla, momento torcente

Si mette il dipolo in una regione dove c'è un campo esterno $\vec E$ **uniforme**, e sia $\theta$ l'angolo tra $\vec p$ e $\vec E$.

### Forza risultante
Sulla carica positiva agisce $\vec F_+ = q\vec E$, sulla negativa $\vec F_- = -q\vec E$. Il campo è lo stesso nei due punti, quindi le forze sono **uguali e opposte**: la risultante è **nulla**. Il centro di massa del dipolo non accelera: il dipolo **non trasla**.

### Momento delle forze
Le due forze però non sono sulla stessa retta: formano una **coppia**. Si calcola il momento rispetto al centro del dipolo; ogni carica sta a distanza $d/2$ dal centro, e il braccio di ciascuna forza (distanza della retta d'azione dal centro) è $\frac d2\sin\theta$:

$$M = F\frac d2\sin\theta + F\frac d2\sin\theta = Fd\sin\theta = qEd\sin\theta$$

I due contributi hanno lo stesso verso di rotazione (la dispensa lo scrive come $F\frac d2\sin\theta - F\frac d2(-\sin\theta)$: la forza opposta su un braccio opposto dà un momento concorde). Con $p = qd$:

$$M = pE\sin\theta \qquad\text{in forma vettoriale}\qquad \vec M = \vec p\times\vec E$$

dove:
- $\vec M$ = momento torcente sul dipolo (N·m)
- $p$ = modulo del momento di dipolo (C·m)
- $E$ = modulo del campo esterno (N/C = V/m)
- $\theta$ = angolo tra $\vec p$ e $\vec E$

Il momento di una coppia non dipende dal punto rispetto a cui si calcola, quindi il risultato vale rispetto a qualunque polo.

Il momento tende a **ruotare $\vec p$ verso la direzione di $\vec E$** (ad allineare il dipolo al campo):
- $\theta = 0°$ ($\vec p$ parallelo e concorde a $\vec E$): $M = 0$, equilibrio **stabile** (se lo si ruota un po', il momento lo riporta indietro);
- $\theta = 90°$ (perpendicolare): $M = pE$, il **massimo**;
- $\theta = 180°$ (antiparallelo): $M = 0$, ma equilibrio **instabile** (basta una piccola rotazione e il momento lo porta lontano, verso 0°).

Il momento varia quindi tra 0 e il valore massimo $pE$ al variare dell'angolo.

::: esempio
**Momento di dipolo dal momento torcente massimo.** Un dipolo in un campo uniforme $E = 40\,\mathrm{N/C}$ subisce un momento che, al variare di $\theta$, va da 0 a $10^{-26}\,\mathrm{N\,m}$. Quanto vale $p$?

1. Il massimo di $pE\sin\theta$ si ha a $\theta = 90°$ e vale $pE$.
2. $pE = 10^{-26}\,\mathrm{N\,m}$, quindi $p = \frac{10^{-26}}{40} = 2{,}5\cdot10^{-28}\,\mathrm{C\,m}$.

Dividere invece per $E\sin\theta$ con un angolo qualsiasi, o moltiplicare per E, dà risultati sbagliati.
:::

::: esempio
**Molecola d'acqua in un campo forte.** $p = 6{,}2\cdot10^{-30}\,\mathrm{C\,m}$, $E = 10^6\,\mathrm{V/m}$. Momento massimo: $pE = 6{,}2\cdot10^{-24}\,\mathrm{N\,m}$. A $\theta = 30°$: $M = 6{,}2\cdot10^{-24}\cdot0{,}5 = 3{,}1\cdot10^{-24}\,\mathrm{N\,m}$.
:::

## Energia potenziale del dipolo in un campo

(Questo paragrafo completa il discorso della dispensa sul momento torcente, ricavando l'energia di orientazione.)

### Derivazione dai potenziali
L'energia potenziale di una carica in un punto a potenziale $V$ è $qV$. Per il dipolo si sommano le due cariche:

$$U = qV(\vec r_+) + (-q)V(\vec r_-) = q\left[V(\vec r_+) - V(\vec r_-)\right]$$

In un campo uniforme il potenziale varia linearmente: $V(\vec r) = -\vec E\cdot\vec r + \text{cost}$ (infatti $-\nabla(-\vec E\cdot\vec r) = \vec E$). Quindi

$$V(\vec r_+) - V(\vec r_-) = -\vec E\cdot(\vec r_+ - \vec r_-) = -\vec E\cdot\vec d$$

e sostituendo, con $q\vec d = \vec p$:

$$U = -q\,\vec E\cdot\vec d = -\vec p\cdot\vec E = -pE\cos\theta$$

dove:
- $U$ = energia potenziale del dipolo nel campo (J)
- $\theta$ = angolo tra $\vec p$ e $\vec E$

La costante si cancella: l'energia dipende solo dall'orientazione. Lo zero è scelto (naturalmente) a $\theta = 90°$.

### Derivazione dal lavoro del momento
Lo stesso risultato si trova dal lavoro necessario per ruotare il dipolo. Per ruotare lentamente di $d\theta$ contro il momento del campo, l'agente esterno fa il lavoro $dL = M\,d\theta = pE\sin\theta\,d\theta$; integrando, $U(\theta) = \int pE\sin\theta\,d\theta = -pE\cos\theta + \text{cost}$.

| Orientazione | $\theta$ | Momento $M$ | Energia $U$ | Equilibrio |
|---|---|---|---|---|
| Parallelo al campo | 0° | 0 | $-pE$ (minima) | stabile |
| Perpendicolare | 90° | $pE$ (massimo) | 0 | no |
| Antiparallelo | 180° | 0 | $+pE$ (massima) | instabile |

Il dipolo tende allo stato di energia minima, cioè ad **allinearsi al campo**: è la stessa informazione del momento torcente, vista dal lato dell'energia. Gli equilibri sono i punti dove $U$ è stazionaria ($M = -dU/d\theta = 0$): il minimo è stabile, il massimo instabile.

## Lavoro per ruotare il dipolo

Il lavoro che un agente esterno deve fare per ruotare **lentamente** il dipolo dall'angolo $\theta_1$ all'angolo $\theta_2$ è la variazione di energia potenziale:

$$L_{est} = \Delta U = U(\theta_2) - U(\theta_1) = pE(\cos\theta_1 - \cos\theta_2)$$

Il lavoro fatto dal campo è l'opposto.

::: esempio
**Da parallelo ad antiparallelo.** $L = pE(\cos0° - \cos180°) = pE(1 - (-1)) = 2pE$.

Con la molecola d'acqua in $10^6\,\mathrm{V/m}$: $2pE = 1{,}24\cdot10^{-23}\,\mathrm J$. È molto meno dell'energia termica tipica di una molecola a temperatura ambiente ($k_BT \approx 4\cdot10^{-21}\,\mathrm J$): per questo l'agitazione termica impedisce un allineamento completo e la polarizzazione per orientamento è solo parziale.
:::

::: esempio
**Da perpendicolare a parallelo.** $L_{est} = pE(\cos90° - \cos0°) = -pE$: il lavoro esterno è negativo, cioè è il campo a fare lavoro positivo $pE$ allineando il dipolo.
:::

## Dipolo in un campo non uniforme

Se il campo cambia da punto a punto, le forze sulle due cariche non sono più uguali, perché le cariche stanno in punti con campo diverso: oltre al momento torcente compare una **forza risultante**. Per un dipolo allineato lungo x in un campo che varia lungo x:

$$F_x = qE(x + d) - qE(x) \approx qd\frac{dE}{dx} = p\frac{dE}{dx}$$

Un dipolo **allineato** al campo viene quindi spinto verso la zona dove il campo è **più intenso**.

Esempio: un dipolo allineato a distanza r da una carica puntiforme Q, dove $E = \frac{kQ}{r^2}$: $F = p\frac{dE}{dr} = -\frac{2kQp}{r^3}$, attrattiva.

È il motivo per cui un corpo **neutro** viene attratto da un oggetto carico (i pezzetti di carta dal pettine strofinato): il campo dell'oggetto polarizza il corpo (dipoli indotti allineati al campo), e i dipoli vengono tirati verso dove il campo è più forte, cioè verso l'oggetto. Succede con cariche di entrambi i segni.

## Legame con i dielettrici

Nei dielettrici con molecole polari (polarizzazione per orientamento, lezione 52) il campo esercita su ogni dipolo molecolare il momento $\vec p\times\vec E$, che lo ruota verso la direzione del campo, dove l'energia $-\vec p\cdot\vec E$ è minima. L'agitazione termica disordina le orientazioni; ne risulta un allineamento **parziale**, tanto maggiore quanto più forte è il campo e più bassa la temperatura. Nei materiali con molecole non polari il campo crea dipoli già allineati (polarizzazione per deformazione).

::: attenzione
- $pE\sin\theta$ è il **momento torcente** (N·m), massimo a 90°; $-pE\cos\theta$ è l'**energia** (J), minima a 0°. Non scambiarli.
- In un campo uniforme la **forza** totale sul dipolo è zero, il **momento** no.
- $\vec p$ va dalla carica **negativa** alla **positiva** (il contrario del verso delle linee di campo tra le due cariche).
- Il campo del dipolo va come $1/r^3$, non $1/r^2$.
:::

::: esame
- Chiusa del paniere: momento torcente che varia tra 0 e un massimo; il massimo è $pE$ (a 90°), quindi $p = M_{max}/E$.
- Per eventuali domande aperte: definizione $\vec p = q\vec d$; forza nulla e coppia $\vec M = \vec p\times\vec E$ in campo uniforme (con la derivazione $M = qEd\sin\theta$); energia $U = -\vec p\cdot\vec E$, equilibrio stabile allineato e instabile antiparallelo; in campo non uniforme anche una forza verso il campo più intenso; campo del dipolo $\propto 1/r^3$.
:::

::: sintesi
- Dipolo: $+q$ e $-q$ a distanza d; $\vec p = q\vec d$ (C·m), dalla negativa alla positiva.
- Campo sull'asse mediano: $E = \frac{1}{4\pi\varepsilon_0}\frac{p}{(y^2 + a^2)^{3/2}} \approx \frac{1}{4\pi\varepsilon_0}\frac p{y^3}$, opposto a $\vec p$; decresce come $1/r^3$.
- Campo uniforme: forza totale nulla; momento $\vec M = \vec p\times\vec E$, $M = pE\sin\theta$ (massimo $pE$ a 90°).
- Energia: $U = -\vec p\cdot\vec E = -pE\cos\theta$; minima ($-pE$, stabile) allineato, massima ($+pE$, instabile) antiparallelo.
- Lavoro esterno per ruotare: $pE(\cos\theta_1 - \cos\theta_2)$; da 0° a 180°: $2pE$.
- Campo non uniforme: forza $F = p\,dE/dx$ verso il campo più intenso; per questo i corpi neutri sono attratti dai corpi carichi.
:::

=== 54 dispense
SLIDES: 62, 63, 64
# Lezione 54 — Corrente elettrica, densità di corrente, continuità e legge di Ohm

Dopo l'elettrostatica (cariche ferme), si passa alle **cariche in movimento**. Se in un conduttore si mantiene una differenza di potenziale, il campo non è più nullo e le cariche libere si muovono in modo ordinato: è la **corrente elettrica**. In questa lezione si definiscono l'**intensità di corrente** e il vettore **densità di corrente**, si scrive la **conservazione della carica** in forma integrale e locale (**equazione di continuità**), si introduce la **legge di Ohm** (in forma locale e per i conduttori metallici) e si vedono gli aspetti energetici (**effetto Joule**). Resistenze, potenza e circuiti sono ripresi nelle lezioni 55–58.

## Conduzione e corrente elettrica

In un metallo gli ioni positivi sono fissi nel reticolo cristallino, mentre gli elettroni di conduzione sono liberi. In **equilibrio elettrostatico** questi elettroni non sono fermi: si muovono velocissimi (circa $10^6\,\mathrm{m/s}$) ma in direzioni **casuali**, quindi la loro velocità media (vettoriale) è nulla e non c'è trasporto netto di carica.

Se si crea una **differenza di potenziale** tra due regioni del conduttore, nel conduttore c'è un campo che dà una **direzione privilegiata**: al moto disordinato si sovrappone un lento moto d'insieme, e un flusso netto di elettroni attraversa il conduttore. Questo è il fenomeno della **conduzione elettrica**, e il moto ordinato di cariche lungo una direzione privilegiata è la **corrente elettrica**.

La conduzione avviene facilmente nei conduttori (metalli), ma in forma più debole anche negli isolanti, nei liquidi (soluzioni elettrolitiche, dove si muovono ioni) e nei gas (ionizzati). Esistono poi materiali con comportamenti particolari: i **semiconduttori** (silicio, germanio) e i **superconduttori**. La trattazione classica si basa sui conduttori metallici.

## Intensità di corrente

Si prende una superficie S dentro il conduttore (per esempio una sezione del filo). L'**intensità di corrente** è la quantità di carica che attraversa la superficie nell'unità di tempo:

$$i = \frac{\Delta Q}{\Delta t} \qquad\text{(media)} \qquad i = \frac{dq}{dt} \qquad\text{(istantanea)}$$

dove:
- $i$ = intensità di corrente (A, ampere)
- $\Delta Q$ (o $dq$) = carica che attraversa la sezione (C)
- $\Delta t$ (o $dt$) = intervallo di tempo (s)

La definizione istantanea vale anche per correnti che variano nel tempo, perché si riferisce a un intervallo infinitesimo.

Proprietà:
- la corrente è uno **scalare** (ha un segno legato al verso di attraversamento scelto, ma non è un vettore);
- l'**ampere** è una delle **sette grandezze fondamentali** del SI; la **carica è derivata**: $[Q] = [I][T]$, cioè $1\,\mathrm C = 1\,\mathrm A\cdot1\,\mathrm s$. Anche se nei corsi la corrente si introduce dopo la carica, nel SI è il contrario;
- si **misura con l'amperometro**, che va inserito **in serie** nel circuito (la corrente da misurare deve attraversarlo), e che deve avere resistenza interna molto piccola per non disturbare il circuito.

**Verso convenzionale**: è quello in cui si muoverebbero le cariche **positive** (dal potenziale più alto al più basso, nel verso del campo). Nei metalli si muovono gli elettroni, in verso opposto; a livello macroscopico non fa differenza: elettroni che vanno a sinistra equivalgono a cariche positive che vanno a destra.

**Corrente continua e alternata**:
- **continua**: intensità e verso costanti nel tempo (pile, batterie, alimentatori);
- **alternata**: la corrente **cambia periodicamente verso**, con andamento **sinusoidale** nel tempo:

$$i(t) = I_0\sin(\omega t)$$

dove:
- $I_0$ = valore massimo (ampiezza) della corrente (A)
- $\omega = 2\pi f$ = pulsazione (rad/s); $f$ = frequenza (Hz)

La rete domestica europea è alternata a $f = 50\,\mathrm{Hz}$: il verso si inverte 100 volte al secondo.

::: esempio
**Calcoli con $i = Q/t$** (tutti nel SI: tempi in secondi).
- 600 C in un minuto: $i = \frac{600\,\mathrm C}{60\,\mathrm s} = 10\,\mathrm A$.
- 16 A per tre minuti: $Q = it = 16\cdot180 = 2880\,\mathrm C$.
- 3 A per un'ora: $Q = 3\cdot3600 = 10\,800\,\mathrm C$.
- $1{,}6\cdot10^{19}$ elettroni al secondo: $Q$ in un secondo $= N e = 1{,}6\cdot10^{19}\cdot1{,}6\cdot10^{-19} = 2{,}56\,\mathrm C$, quindi $i = 2{,}56\,\mathrm A$.

Errore tipico: dimenticare di convertire minuti e ore in secondi, o dividere invece di moltiplicare.
:::

::: attenzione
La carica si misura in coulomb (C), non in joule. La corrente è un **rapporto** carica/tempo; la carica è il **prodotto** corrente·tempo.
:::

## Il vettore densità di corrente

L'intensità dice quanta carica passa in totale; la **densità di corrente** dice come la corrente è distribuita punto per punto e in che direzione.

### Derivazione
Nel conduttore c'è un campo $\vec E$; le cariche positive (densità $n_+$ portatori per unità di volume, ciascuno di carica $e$) si spostano con velocità media $\vec v_d$ parallela al campo (velocità di deriva). Si prende un elementino di superficie $dS$ la cui normale $\vec u_n$ forma un angolo $\theta$ con il campo.

1. In un tempo $dt$ ogni carica percorre un tratto $h = v_d\,dt$ parallelo al campo.
2. Attraversano $dS$ tutte le cariche contenute nel cilindretto obliquo di base $dS$ e lato $v_d\,dt$, il cui volume è $dS\,v_d\,dt\cos\theta$.
3. La carica che passa è $dq = n_+e\cdot dS\,v_d\,dt\cos\theta$.
4. Dividendo per $dt$: $di = n_+ev_d\cos\theta\,dS = n_+e\,\vec v_d\cdot\vec u_n\,dS$.

Si definisce il vettore **densità di corrente**:

$$\vec j = n_+e\,\vec v_d \qquad\text{e in generale}\qquad \vec j = nq\,\vec v_d$$

dove:
- $\vec j$ = densità di corrente (A/m²)
- $n$ = numero di portatori di carica per unità di volume (m⁻³)
- $q$ = carica di un portatore (C); per gli elettroni $q = -e$
- $\vec v_d$ = velocità media di deriva dei portatori (m/s)
- $nq$ = densità di carica dei portatori mobili (C/m³)

e la relazione appena trovata è $di = \vec j\cdot\vec u_n\,dS$.

### Portatori negativi
Se a muoversi sono $n_-$ elettroni con velocità $\vec v_-$ (discorde con il campo):

$$\vec j = -n_-e\,\vec v_-$$

Il segno meno rende $\vec j$ **concorde al campo**: è come una corrente di cariche positive che si muovono con velocità $-\vec v_-$. Il verso di $\vec j$ è sempre quello convenzionale della corrente, qualunque sia il segno dei portatori.

### Intensità come flusso di $\vec j$
La corrente attraverso una superficie finita S è il **flusso** della densità di corrente:

$$i = \int_S\vec j\cdot\vec u_n\,dS$$

Se la superficie è perpendicolare alla corrente e $j$ è uniforme sulla sezione:

$$i = jS \qquad j = \frac iS$$

La densità di corrente è quindi l'intensità che attraversa l'**unità di superficie ortogonale** al moto delle cariche.

::: esempio
**Velocità di deriva nel rame** (esercizio della dispensa 62). Filo con sezione costante $10\,\mathrm{mm^2}$, corrente 2 A, densità di elettroni liberi $n = 8{,}5\cdot10^{28}\,\mathrm{m^{-3}}$.

1. Sezione: $S = 10\,\mathrm{mm^2} = 10\cdot10^{-6}\,\mathrm{m^2} = 10^{-5}\,\mathrm{m^2}$.
2. $j = \frac iS = \frac{2}{10^{-5}} = 2\cdot10^5\,\mathrm{A/m^2}$.
3. $v_d = \frac{j}{ne} = \frac{2\cdot10^5}{8{,}5\cdot10^{28}\cdot1{,}6\cdot10^{-19}} = \frac{2\cdot10^5}{1{,}36\cdot10^{10}} \approx 1{,}5\cdot10^{-5}\,\mathrm{m/s}$.

Gli elettroni derivano lentissimi: circa 0,015 mm al secondo (un metro in più di 18 ore). La lampadina si accende subito perché il **campo** si propaga lungo il filo quasi alla velocità della luce e mette in moto contemporaneamente gli elettroni già presenti ovunque nel filo.
:::

::: esempio
**Densità di corrente non uniforme** (esercizio della dispensa 62). Conduttore cilindrico di raggio $R = 2\,\mathrm{mm}$, densità di corrente perpendicolare alla sezione $j(r) = ar^2$, con $a = 3\cdot10^{11}\,\mathrm{A/m^4}$ e r distanza dall'asse.

1. Si divide la sezione in anelli di raggio r e spessore dr: area $dS = 2\pi r\,dr$, su cui $j$ è costante.
2. $i = \int_0^R ar^2\cdot2\pi r\,dr = 2\pi a\int_0^R r^3dr = 2\pi a\frac{R^4}{4} = \frac{\pi aR^4}{2}$.
3. $R^4 = (2\cdot10^{-3})^4 = 1{,}6\cdot10^{-11}\,\mathrm{m^4}$; $i = \frac{\pi\cdot3\cdot10^{11}\cdot1{,}6\cdot10^{-11}}{2} = \frac{\pi\cdot4{,}8}{2} \approx 7{,}5\,\mathrm A$.
:::

## Conservazione della carica

Si considera una regione di spazio delimitata da una superficie chiusa S, attraversata da una densità di corrente $\vec j$. Il flusso di $\vec j$ attraverso S (con normale uscente) è la carica che **esce** dalla superficie nell'unità di tempo: dove $\vec j$ è uscente esce carica positiva (o entra negativa), dove è entrante la carica interna aumenta.

Il **principio di conservazione della carica** dice che la carica non si crea né si distrugge: la carica netta che esce nell'unità di tempo deve essere uguale alla **diminuzione** della carica interna nell'unità di tempo:

$$\oint_S\vec j\cdot\vec u_n\,dS = -\frac{dq_{int}}{dt}$$

dove:
- $\oint_S\vec j\cdot\vec u_n\,dS$ = corrente netta uscente dalla superficie chiusa (A)
- $q_{int}$ = carica contenuta all'interno di S (C)

Il **segno meno** dice che se c'è un eccesso di flusso uscente, la carica interna diminuisce.

::: esempio
**Sfera che si carica** (esercizio della dispensa 62). Una sfera conduttrice isolata di raggio 10 cm riceve da un filo la corrente $i_0$ e da un secondo filo esce la corrente $i = i_0 + \Delta i$, con $\Delta i = -2\,\mathrm A$: entra più corrente di quanta ne esce, la sfera si carica. In quanto tempo il suo potenziale aumenta di 1000 V?

1. La carica netta entra con rapidità $|\Delta i| = 2\,\mathrm A$: $\Delta Q = |\Delta i|\,\Delta t$.
2. Potenziale della sfera: $V = \frac{Q}{4\pi\varepsilon_0R}$, quindi $\Delta V = \frac{\Delta Q}{4\pi\varepsilon_0R}$ e $\Delta Q = 4\pi\varepsilon_0R\,\Delta V = 1{,}11\cdot10^{-11}\cdot1000 = 1{,}11\cdot10^{-8}\,\mathrm C$.
3. $\Delta t = \frac{\Delta Q}{|\Delta i|} = \frac{1{,}11\cdot10^{-8}}{2} \approx 5{,}6\cdot10^{-9}\,\mathrm s$: pochi nanosecondi.
:::

## Equazione di continuità (forma locale)

Si esprime la carica interna con la densità di volume: $q_{int} = \int_\tau\rho\,d\tau$, e si applica alla corrente uscente il **teorema della divergenza** ($\oint_S\vec j\cdot\vec u_n\,dS = \int_\tau\nabla\cdot\vec j\,d\tau$). La conservazione diventa:

$$\int_\tau\nabla\cdot\vec j\,d\tau = -\frac{d}{dt}\int_\tau\rho\,d\tau = -\int_\tau\frac{\partial\rho}{\partial t}d\tau$$

(con il volume fisso, la derivata entra nell'integrale come derivata parziale). Portando tutto a sinistra: $\int_\tau\left(\nabla\cdot\vec j + \frac{\partial\rho}{\partial t}\right)d\tau = 0$. Poiché questo vale **comunque si scelga il volume**, l'integrando deve essere nullo in ogni punto:

$$\nabla\cdot\vec j + \frac{\partial\rho}{\partial t} = 0$$

dove:
- $\nabla\cdot\vec j$ = divergenza della densità di corrente (A/m³): quanta corrente "esce" da un punto per unità di volume
- $\rho$ = densità di carica di volume (C/m³)
- $\partial\rho/\partial t$ = rapidità con cui cambia la densità di carica nel punto (C/(m³·s))

È l'**equazione di continuità della corrente elettrica**, la forma locale della conservazione della carica: se da un punto esce più corrente di quanta ne entra ($\nabla\cdot\vec j > 0$), lì la densità di carica diminuisce. È l'analoga dell'equazione di continuità dei fluidi.

## Corrente stazionaria

**Regime stazionario**: la distribuzione di carica non cambia nel tempo, $\frac{\partial\rho}{\partial t} = 0$ (il flusso entrante è uguale a quello uscente). Allora:

$$\nabla\cdot\vec j = 0 \qquad \oint_S\vec j\cdot\vec u_n\,dS = 0$$

La densità di corrente è **solenoidale**: le sue linee non hanno né inizio né fine (si chiudono su sé stesse, come nei circuiti).

**Conduttore a sezione variabile**: si prende come superficie chiusa il tratto di conduttore tra due sezioni $S_1$ e $S_2$, con la corrente sempre parallela alle pareti laterali (che quindi non danno flusso). Flusso nullo significa:

$$j_1S_1 = j_2S_2 = i$$

In condizioni stazionarie **l'intensità di corrente è la stessa attraverso ogni sezione** del conduttore. Dove la sezione si **restringe**, la densità di corrente **aumenta**, come la velocità di un fluido incomprimibile in un condotto che si stringe. Nei conduttori a sezione costante anche $j$ è la stessa ovunque.

::: esempio
**Filo che si restringe.** Un filo passa da una sezione di $4\,\mathrm{mm^2}$ a una di $1\,\mathrm{mm^2}$ e porta 2 A. La corrente è 2 A in entrambi i tratti; $j_1 = 2/(4\cdot10^{-6}) = 5\cdot10^5\,\mathrm{A/m^2}$, $j_2 = 2\cdot10^6\,\mathrm{A/m^2}$: quattro volte più grande dove la sezione è quattro volte più piccola (e così anche la velocità di deriva).
:::

## Velocità di deriva e legge di Ohm

### Modello classico della conduzione
Nel modello classico, un elettrone di conduzione è accelerato dal campo, poi urta (interagisce con) gli ioni del reticolo e perde la velocità acquisita, poi viene riaccelerato, e così via. L'effetto complessivo è come quello di una forza costante (il campo) contrastata da una **resistenza viscosa**: a regime gli elettroni hanno una velocità media costante, proporzionale al campo, la **velocità di deriva** (drift):

$$\vec v_d = -\frac{e\tau}{m}\vec E \qquad\text{(elettroni)}$$

dove:
- $\tau$ = tempo medio tra un urto e il successivo (s)
- $m$ = massa dell'elettrone (kg)
- $e$ = carica elementare (C)

Il segno meno: gli elettroni derivano in verso opposto al campo. (Si ricava così: tra due urti l'elettrone acquista la velocità $\frac{-eE}{m}t$; mediando, la velocità media guadagnata è $-\frac{eE}{m}\tau$.)

### Legge di Ohm in forma locale
Sostituendo nella densità di corrente:

$$\vec j = -ne\,\vec v_d = -ne\left(-\frac{e\tau}{m}\vec E\right) = \frac{ne^2\tau}{m}\vec E$$

Si definisce la **conduttività elettrica** $\sigma = \frac{ne^2\tau}{m}$ e si ottiene la **legge di Ohm per la conduzione elettrica** (legge di Ohm generalizzata, o locale):

$$\vec j = \sigma\,\vec E \qquad\Longleftrightarrow\qquad \vec E = \rho\,\vec j$$

dove:
- $\sigma$ = conduttività elettrica (S/m, siemens al metro, $= 1/(\Omega\,\mathrm m)$); in questa lezione si indica anche $\sigma_e$ per non confonderla con la densità superficiale di carica
- $\rho = 1/\sigma$ = **resistività** del mezzo (Ω·m); anche $\rho_e$, da non confondere con la densità di carica
- $\vec E$ = campo nel conduttore (V/m)

Significato: in ogni punto di un conduttore ohmico la densità di corrente è **proporzionale** al campo, con costante che dipende solo dal materiale (e dalla temperatura). Il termine $e^2$ rende $\sigma$ sempre positiva: $\vec j$ è sempre **equiverso** al campo, qualunque sia il segno dei portatori. Se si muovono cariche di entrambi i segni (per esempio ioni in una soluzione), la conduttività è la somma dei contributi, $\sigma = \sum_k\frac{n_kq_k^2\tau_k}{m_k}$, sempre positiva.

### Legge di Ohm per i conduttori metallici
Si applica una d.d.p. costante $\Delta V$ tra le sezioni estreme di un conduttore cilindrico di lunghezza $h$ e sezione $S$. Nel conduttore c'è un campo uniforme parallelo all'asse e una corrente stazionaria.

1. Campo: $E = \frac{\Delta V}{h}$.
2. Densità di corrente: $j = \sigma E = \frac{\Delta V}{\rho h}$.
3. Corrente: $i = jS = \frac{S}{\rho h}\Delta V$.
4. Ricavando $\Delta V$: $\Delta V = \rho\frac hS\,i$.

Si definisce la **resistenza** del conduttore:

$$R = \rho\frac{h}{S}$$

e si ottiene la **legge di Ohm per i conduttori metallici**:

$$\Delta V = R\,i$$

dove:
- $\Delta V$ = d.d.p. ai capi del conduttore (V)
- $R$ = resistenza (Ω, ohm; $1\,\Omega = 1\,\mathrm{V/A}$)
- $i$ = corrente (A)
- $h$ = lunghezza del conduttore (m), $S$ = sezione (m²), $\rho$ = resistività (Ω·m)

La resistenza cresce con la lunghezza e diminuisce con la sezione. L'inverso della resistenza è la **conduttanza** $G = 1/R$ (siemens, S). I conduttori che seguono la legge di Ohm si chiamano **ohmici** o **resistori** (simbolo a zig-zag negli schemi). Il percorso inverso (da $\Delta V = Ri$ a $\vec j = \sigma\vec E$) mostra che le due forme sono la stessa legge, una macroscopica e una locale.

::: esempio
**Resistenza per una corrente data.** Generatore da 9 V, corrente voluta 2 A: $R = \frac{\Delta V}{i} = \frac92 = 4{,}5\,\Omega$.
:::

::: esempio
**Filo di rame** (esercizio della dispensa 63). Rame $\rho = 1{,}69\cdot10^{-8}\,\Omega\,\mathrm m$, raggio 2 mm, lungo 2 cm, ai capi 3 nV. Quanta carica passa in 3 ms?

1. Sezione: $S = \pi(2\cdot10^{-3})^2 = 1{,}26\cdot10^{-5}\,\mathrm{m^2}$.
2. $R = \rho\frac hS = 1{,}69\cdot10^{-8}\cdot\frac{0{,}02}{1{,}26\cdot10^{-5}} \approx 2{,}69\cdot10^{-5}\,\Omega$.
3. $i = \frac{\Delta V}R = \frac{3\cdot10^{-9}}{2{,}69\cdot10^{-5}} \approx 1{,}12\cdot10^{-4}\,\mathrm A$.
4. $Q = i\,t = 1{,}12\cdot10^{-4}\cdot3\cdot10^{-3} \approx 3{,}4\cdot10^{-7}\,\mathrm C$.
:::

## Resistori in serie e in parallelo

- **Serie**: in regime stazionario la stessa corrente $i$ attraversa tutti i resistori; le tensioni si sommano: $V_A - V_B = R_1i + R_2i = (R_1 + R_2)i$, quindi

$$R_{eq} = R_1 + R_2 + \dots$$

- **Parallelo**: stessa d.d.p. $\Delta V$ ai capi; la corrente si divide, $i = i_1 + i_2$ (conservazione della carica nel nodo): $i = \frac{\Delta V}{R_1} + \frac{\Delta V}{R_2}$, quindi

$$\frac1{R_{eq}} = \frac1{R_1} + \frac1{R_2} + \dots$$

Attenzione: è il contrario dei condensatori (per i condensatori in parallelo si sommano le capacità).

::: esempio
**Rete di sei resistori** (esercizio della dispensa 63). Tre resistori $R_1 = 6\,\Omega$ e tre $R_2 = 10\,\Omega$; tra A e B 15 V. Nella rete: un $R_1$ tra A e C, un $R_1$ tra D e B, e tra C e D il terzo $R_1$ in parallelo con la serie dei tre $R_2$.

1. Serie dei tre $R_2$: $30\,\Omega$.
2. Parallelo con $R_1$: $\frac{6\cdot30}{6 + 30} = \frac{180}{36} = 5\,\Omega$.
3. Serie complessiva: $R_{eq} = 6 + 5 + 6 = 17\,\Omega$.
4. $i = \frac{15}{17} \approx 0{,}88\,\mathrm A$.
:::

::: esempio
**Cavo di 125 fili** (esercizio della dispensa 63). 125 fili da $2{,}65\,\Omega$ in parallelo, corrente totale 750 mA.
- Corrente in ciascun filo (identici, la corrente si divide equamente): $750/125 = 6\,\mathrm{mA}$.
- d.d.p.: $\Delta V = 6\cdot10^{-3}\cdot2{,}65 \approx 1{,}6\cdot10^{-2}\,\mathrm V$.
- Resistenza del cavo: $R = 2{,}65/125 = 0{,}0212\,\Omega$ (controllo: $0{,}0212\cdot0{,}75 = 0{,}016\,\mathrm V$).
:::

## Resistività e temperatura

Per la maggior parte dei metalli, vicino alla temperatura ambiente, la resistività cresce **linearmente** con la temperatura:

$$\rho(T) = \rho_0\left[1 + \alpha(T - T_0)\right]$$

dove:
- $\rho_0$ = resistività a $T_0 = 20\,°\mathrm C$ (Ω·m)
- $\alpha$ = coefficiente termico della resistività (°C⁻¹ o K⁻¹), caratteristico del materiale

Nei metalli $\alpha > 0$ (più caldo, più urti, più resistenza). In materiali come germanio e silicio $\alpha < 0$: la resistività **aumenta** al diminuire della temperatura, e questo li rende adatti come sensori di temperatura in ambienti molto freddi (criogenici). A bassissime temperature molti materiali hanno una resistività quasi costante.

I **superconduttori**: sotto una **temperatura critica** $T_c$ la resistività diventa praticamente nulla; in essi circolano correnti anche intense senza bisogno di mantenere una d.d.p.

### Legge di Wiedemann-Franz
C'è un'analogia tra conduzione elettrica e conduzione del calore: il calore che passa nell'unità di tempo in un materiale tra due temperature, $\frac{dQ}{dt} = \frac{T_1 - T_2}{R_{term}}$, ha la forma della legge di Ohm se si sostituiscono temperatura → potenziale, flusso di calore → corrente, resistenza termica → resistenza elettrica. La legge empirica di **Wiedemann-Franz** lega le due conducibilità dei metalli:

$$\frac{k}{\sigma} = LT$$

dove:
- $k$ = conducibilità termica (W/(m·K)), $\sigma$ = conducibilità elettrica (S/m)
- $T$ = temperatura assoluta (K)
- $L$ = costante di Lorenz, quasi uguale per tutti i metalli (circa $2{,}4\cdot10^{-8}\,\mathrm{W\,\Omega/K^2}$)

Significa che nei metalli sia il calore sia la carica sono trasportati dagli stessi elettroni di conduzione: buoni conduttori elettrici sono anche buoni conduttori di calore.

## Lavoro, potenza ed effetto Joule

### Potenza fornita dal campo
Per spostare una carica $dq$ tra due punti con d.d.p. $\Delta V$ il campo compie il lavoro $dL = dq\,\Delta V$. Dividendo per $dt$ e ricordando $i = dq/dt$:

$$P = \frac{dL}{dt} = \Delta V\,i$$

dove:
- $P$ = potenza trasferita dal campo alle cariche (W)

Vale in generale: la potenza diventa calore in un conduttore, lavoro meccanico in un motore, energia immagazzinata in un condensatore.

### Effetto Joule nei conduttori ohmici
In regime stazionario, in un resistore, il lavoro del campo **non** diventa energia potenziale (il potenziale ai capi resta costante) né energia cinetica (la velocità di deriva è costante). Viene ceduto, negli urti, agli ioni del reticolo come agitazione termica: il conduttore si **scalda** e cede calore all'ambiente. È l'**effetto Joule**. Usando la legge di Ohm $\Delta V = Ri$:

$$P = \Delta V\,i = Ri^2 = \frac{\Delta V^2}{R}$$

e il calore prodotto in un tempo $t$ (corrente costante) è $Q = Ri^2t$.

Si usa la forma più comoda secondo i dati: $Ri^2$ se si conosce la corrente, $\Delta V^2/R$ se si conosce la tensione. Il calore, a parità di resistenza e di tempo, va con il **quadrato** della corrente.

**Forma locale**: in un volumetto $d\tau$ con $n$ portatori per unità di volume, il lavoro del campo per spostarli di $d\vec l = \vec v_d\,dt$ è $dL = n\,d\tau\,q\vec E\cdot\vec v_d\,dt = \vec E\cdot(nq\vec v_d)\,d\tau\,dt$; dividendo per volume e tempo:

$$w = \vec E\cdot\vec j$$

dove:
- $w$ = densità di potenza trasferita dal campo alla corrente (W/m³)

Nei conduttori ohmici isotropi $\vec E$ e $\vec j$ sono paralleli: $w = Ej = \sigma E^2 = \rho j^2$.

**Sistemi di resistori**: la potenza totale dissipata da una serie o da un parallelo è quella della resistenza equivalente: in serie $P = R_1i^2 + R_2i^2 = R_{eq}i^2$ (stessa corrente); in parallelo $P = \frac{\Delta V^2}{R_1} + \frac{\Delta V^2}{R_2} = \frac{\Delta V^2}{R_{eq}}$ (stessa tensione).

::: esempio
**Tensione massima su una resistenza.** $R = 10\,\Omega$, potenza massima 10 W. Da $P = V^2/R$: $V_{max} = \sqrt{PR} = \sqrt{10\cdot10} = 10\,\mathrm V$ (corrente $i = V/R = 1\,\mathrm A$, controllo $Ri^2 = 10\,\mathrm W$).
:::

::: esempio
**Corrente dimezzata.** Un resistore percorso da $i$ produce il calore Q in un certo tempo. Con $0{,}5\,i$ nello stesso tempo: $Q' = R(0{,}5i)^2t = 0{,}25\,Ri^2t = 0{,}25\,Q$. Il calore diventa un quarto, non la metà.
:::

::: esempio
**Scaldare l'acqua** (esercizio della dispensa 64). Portare 10 L d'acqua da 10 °C a 60 °C in 10 minuti con un filo di diametro 1 mm che regge al massimo 10 A.

1. Calore: $Q = mc\Delta T = 10\,\mathrm{kg}\cdot4186\,\mathrm{J/(kg\,K)}\cdot50\,\mathrm K \approx 2{,}09\cdot10^6\,\mathrm J$.
2. Potenza: $P = Q/t = 2{,}09\cdot10^6/600 \approx 3{,}49\cdot10^3\,\mathrm W$.
3. Resistenza con la corrente massima: $R = P/i^2 = 3490/100 \approx 34{,}9\,\Omega$.
4. Lunghezza: $R = \rho\frac LS$, con $S = \pi(0{,}5\cdot10^{-3})^2 = 7{,}85\cdot10^{-7}\,\mathrm{m^2}$, quindi $L = \frac{RS}{\rho} = \frac{2{,}74\cdot10^{-5}\,\Omega\,\mathrm{m^2}}{\rho}$. Per esempio con un filo di nichel-cromo ($\rho \approx 1{,}1\cdot10^{-6}\,\Omega\,\mathrm m$) servono circa 25 m.
:::

::: attenzione
- Corrente = carica/tempo, in ampere; carica = corrente × tempo, in coulomb; i tempi vanno in secondi.
- L'amperometro va **in serie**.
- Il verso convenzionale della corrente è quello delle cariche positive, opposto al moto degli elettroni; $\vec j$ è sempre concorde al campo.
- La velocità di deriva è piccolissima (frazioni di mm/s): non va confusa con la velocità del segnale.
- Il calore Joule va come $i^2$: corrente dimezzata, calore un quarto.
- Resistori: in serie si sommano le resistenze (al contrario dei condensatori).
:::

::: esame
- **"Come è definita l'intensità di corrente e come si misura"** e **"Definire la corrente elettrica"** (aperte): moto ordinato di cariche dovuto a una d.d.p.; $i = dq/dt$ carica per unità di tempo attraverso una sezione; scalare; ampere grandezza fondamentale del SI ($1\,\mathrm C = 1\,\mathrm{A\,s}$); verso convenzionale delle cariche positive; si misura con l'amperometro in serie; continua e alternata.
- **"Vettore densità di corrente ed equazione di continuità"** (aperta): derivazione $di = nqv_d\cos\theta\,dS$, $\vec j = nq\vec v_d$, $i = \int_S\vec j\cdot\vec u_n\,dS$; conservazione $\oint\vec j\cdot\vec u_n\,dS = -dq/dt$; con il teorema della divergenza $\nabla\cdot\vec j + \partial\rho/\partial t = 0$; stazionario $\nabla\cdot\vec j = 0$, stessa corrente in ogni sezione.
- **"Legge di Ohm generalizzata e forma per i metalli"** (aperta): modello degli urti, $v_d \propto E$, $\vec j = \sigma\vec E$ con $\sigma = ne^2\tau/m$, $\vec E = \rho\vec j$; per un cilindro $E = \Delta V/h$, $i = jS$ → $\Delta V = Ri$ con $R = \rho h/S$.
- Chiuse: $i = Q/t$ e $Q = it$ con numeri, elettroni al secondo, definizione di corrente e di corrente alternata, $R = V/i$, $V_{max} = \sqrt{PR}$, calore che va con $i^2$.
:::

::: sintesi
- Corrente: moto ordinato di cariche; $i = dq/dt$ (A, fondamentale; $1\,\mathrm C = 1\,\mathrm{A\,s}$); amperometro in serie; verso convenzionale delle cariche positive.
- Alternata: $i = I_0\sin\omega t$, inverte il verso periodicamente (50 Hz in rete).
- $\vec j = nq\vec v_d$ (A/m²), concorde al campo; $i = \int_S\vec j\cdot\vec u_n\,dS$, $i = jS$.
- Conservazione: $\oint\vec j\cdot\vec u_n\,dS = -dq_{int}/dt$; continuità $\nabla\cdot\vec j + \partial\rho/\partial t = 0$; stazionario $\nabla\cdot\vec j = 0$, $j_1S_1 = j_2S_2$.
- Deriva: $v_d = e\tau E/m$; Ohm locale $\vec j = \sigma\vec E$, $\sigma = ne^2\tau/m$, $\rho = 1/\sigma$.
- Metalli: $\Delta V = Ri$, $R = \rho h/S$ (Ω); serie $R_{eq} = \sum R_i$, parallelo $1/R_{eq} = \sum 1/R_i$.
- $\rho(T) = \rho_0[1 + \alpha(T - T_0)]$; superconduttori sotto $T_c$; Wiedemann-Franz $k/\sigma = LT$.
- Potenza $P = \Delta V\,i$; Joule $P = Ri^2 = \Delta V^2/R$, calore $\propto i^2$; locale $w = \vec E\cdot\vec j$.
:::
