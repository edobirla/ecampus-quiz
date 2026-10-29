=== 28 dispense
SLIDES: 26, 27, 29
# Lezione 28 — Dinamica del corpo rigido: momento d'inerzia, rotazioni, equilibrio

Finora abbiamo studiato il punto materiale (un oggetto senza dimensioni) e i sistemi di punti. Molti oggetti reali, però, hanno una forma e una estensione che non si possono trascurare: una ruota, una puleggia, una porta, una trave, il corpo di un pattinatore. Se questi oggetti non si deformano in modo apprezzabile, si possono descrivere con il modello del **corpo rigido**. In questa lezione vediamo come si muove un corpo rigido, quali grandezze servono a descriverlo (centro di massa, densità, momento d'inerzia), come si scrivono le sue equazioni del moto, come si calcolano energia cinetica e momento angolare di un corpo che ruota, quando un corpo rigido è in equilibrio. Tutto si basa sulle due **equazioni cardinali** già viste per i sistemi di punti: la lezione mostra che, per un corpo rigido, bastano quelle due per conoscere tutto il moto.

## Che cos'è un corpo rigido

**Definizione.** Un corpo rigido è un sistema di punti materiali (discreti, oppure distribuiti in modo continuo) le cui **distanze reciproche sono fissate e non cambiano nel tempo**.

È un'idealizzazione: ogni corpo reale si deforma un poco sotto l'azione delle forze. Il modello va bene quando queste deformazioni sono trascurabili rispetto agli spostamenti del corpo nel suo insieme.

### I moti possibili: traslazione e rotazione
Il moto più generale di un corpo rigido è la **composizione di due moti** che avvengono contemporaneamente:

- una **traslazione rigida**: tutti i punti si spostano allo stesso modo, quindi basta seguire un punto solo. Il punto naturale da seguire è il **centro di massa**, perché gli altri punti non cambiano la loro posizione rispetto ad esso;
- una **rotazione istantanea attorno a un asse**: tutti i punti girano con la stessa velocità angolare $\omega$, ma ognuno descrive una circonferenza di raggio diverso, pari alla sua distanza dall'asse.

Un corpo rigido quindi può **traslare e ruotare su se stesso nello stesso tempo**: i due moti non si escludono. L'esempio tipico è la ruota di una bicicletta, che avanza (trasla) e intanto gira attorno al proprio asse.

Nella rotazione la velocità angolare è la stessa per tutti i punti, mentre la velocità lineare (tangenziale) dipende dalla distanza dall'asse:

$$v = \omega\, r$$
dove:
- $v$ = modulo della velocità tangenziale del punto (m/s)
- $\omega$ = velocità angolare del corpo, uguale per tutti i punti (rad/s)
- $r$ = distanza del punto dall'asse di rotazione (m)

Un punto sull'asse ($r = 0$) è fermo; un punto sul bordo di una ruota va più veloce di un punto vicino al mozzo.

### Gradi di libertà
Il numero di parametri indipendenti necessari a descrivere la posizione di un sistema si chiama **numero dei gradi di libertà**. Per un corpo rigido libero nello spazio servono **6 parametri**:
- le **3 coordinate** del centro di massa (descrivono la traslazione);
- **2 angoli** che individuano la direzione dell'asse istantaneo di rotazione;
- **1 angolo** che dice di quanto il corpo ha ruotato attorno a quell'asse.

Un punto materiale ha invece solo 3 gradi di libertà. Un corpo vincolato a ruotare attorno a un asse fisso (una porta, una puleggia con il perno) ne ha uno solo: l'angolo di rotazione.

## Le equazioni cardinali
Le forze interne (quelle che i punti del corpo si scambiano tra loro) potrebbero solo cambiare le posizioni relative dei punti. In un corpo rigido le posizioni relative sono fisse, quindi le forze interne non hanno effetto sul moto. Restano le forze **esterne**, e il moto è determinato completamente dalle due equazioni cardinali:

$$\vec F^{(e)} = \frac{d\vec P}{dt} = M\,\vec a_{cm} \qquad\qquad \vec M^{(e)} = \frac{d\vec L}{dt}$$
dove:
- $\vec F^{(e)}$ = risultante delle forze esterne (N)
- $\vec P$ = quantità di moto totale del corpo (kg·m/s)
- $M$ = massa totale del corpo (kg)
- $\vec a_{cm}$ = accelerazione del centro di massa (m/s²)
- $\vec M^{(e)}$ = momento totale delle forze esterne rispetto a un polo (N·m)
- $\vec L$ = momento angolare totale rispetto allo stesso polo (kg·m²/s)

Sono equazioni vettoriali: in componenti fanno **6 equazioni scalari**, tante quanti i gradi di libertà. Per questo bastano.
- La **prima** descrive la parte traslatoria del moto, comune a tutti i punti: il centro di massa si muove come un punto materiale di massa $M$ su cui agisce la risultante delle forze esterne.
- La **seconda** descrive la rotazione: il comportamento di ogni punto dipende dalla sua distanza dall'asse.

## Corpi continui: densità e centro di massa
Spesso il corpo rigido è un oggetto **continuo**: la massa è distribuita con continuità nel suo volume. Si divide allora il volume in tanti elementini $dV$, ciascuno con massa $dm$. La massa totale è la somma delle masse degli elementini; al limite in cui gli elementini diventano infinitesimi, la somma diventa un integrale:

$$M = \int_V dm = \int_V \rho\,dV \qquad \text{con} \qquad \rho = \frac{dm}{dV}$$
dove:
- $\rho$ = densità (o massa volumica) nel punto considerato (kg/m³)
- $dm$ = massa dell'elementino (kg)
- $dV$ = volume dell'elementino (m³)

La funzione densità dice come è distribuita la massa nello spazio. Se la densità è la stessa in tutto il volume, il corpo si dice **omogeneo** e $\rho = M/V$.

Il centro di massa di un corpo continuo si ottiene sostituendo nella definizione per i sistemi di punti la somma con l'integrale:

$$\vec r_{cm} = \frac{1}{M}\int_V \vec r\,dm = \frac{1}{M}\int_V \vec r\,\rho\,dV$$

Per un corpo omogeneo il centro di massa coincide con il **centro geometrico**. Se il corpo ha un centro di simmetria, il centro di massa sta lì: per una sfera omogenea è il centro della sfera, per un'asta omogenea è il punto medio.

Se la massa è distribuita su una superficie (una lastra sottile) o lungo una linea (un filo, un'asta sottile), si usano la **densità superficiale** e la **densità lineare**:

$$\sigma = \frac{dm}{dS}\ \ (\mathrm{kg/m^2}) \qquad\qquad \lambda = \frac{dm}{dl}\ \ (\mathrm{kg/m})$$

e il centro di massa si calcola con integrali sulla superficie o sulla linea. Nel caso omogeneo $\sigma = M/S$ e $\lambda = M/l$.

## Forze parallele e baricentro
Su un corpo rigido agiscono spesso **forze parallele**: per esempio le forze peso dei singoli pezzetti del corpo, tutte verticali.

### La risultante di forze parallele
Forze parallele hanno tutte la stessa direzione, descritta da un unico versore $\hat u$: ogni forza si scrive $\vec f_i = f_i\,\hat u$, dove $f_i$ è un numero con segno (positivo se la forza punta come $\hat u$, negativo se punta al contrario). La risultante è quindi

$$\vec F = \sum_i \vec f_i = \Big(\sum_i f_i\Big)\hat u$$

Ha la stessa direzione delle forze, e la sua intensità è la **somma algebrica** delle intensità:
- se due forze hanno lo **stesso verso**, l'intensità della risultante è la **somma** delle intensità: $F = f_1 + f_2$;
- se hanno **verso opposto**, è la **differenza**: $F = |f_1 - f_2|$.

Non può mai superare la somma delle intensità. Il suo punto di applicazione sta tra le due forze (se concordi), più vicino a quella più intensa.

### Il centro delle forze parallele
Un sistema di forze parallele $\vec f_i$ applicate nei punti $\vec r_i$ è **equivalente** a un'unica forza $\vec F$, uguale alla risultante, applicata nel punto

$$\vec r_C = \frac{\sum_i f_i\,\vec r_i}{\sum_i f_i}$$

detto **centro delle forze parallele**. "Equivalente" vuol dire che ha la stessa risultante e lo stesso momento totale.

**Dimostrazione.** La risultante è uguale per costruzione. Resta da verificare il momento rispetto a un polo $O$ (l'origine):
1. Momento totale delle forze vere: $\vec M = \sum_i \vec r_i \times \vec f_i = \sum_i \vec r_i \times f_i\,\hat u$.
2. Poiché $\hat u$ è lo stesso per tutte, lo raccolgo: $\vec M = \Big(\sum_i f_i\,\vec r_i\Big) \times \hat u$.
3. Dalla definizione di $\vec r_C$: $\sum_i f_i\,\vec r_i = \vec r_C \sum_i f_i$. Quindi $\vec M = \vec r_C \times \Big(\sum_i f_i\Big)\hat u = \vec r_C \times \vec F$.
4. È proprio il momento di una forza $\vec F$ applicata in $C$: l'equivalenza è dimostrata.

### Il baricentro
Se le forze parallele sono le forze peso, $f_i = m_i g$ e

$$\vec r_C = \frac{\sum_i m_i g\,\vec r_i}{\sum_i m_i g} = \frac{\sum_i m_i\,\vec r_i}{M} = \vec r_{cm}$$

Il centro delle forze peso si chiama **baricentro** e (in un campo di gravità uniforme) **coincide con il centro di massa**. Conseguenza pratica: il peso di un corpo rigido si può considerare tutto applicato nel baricentro.

## Momento d'inerzia
### Da dove nasce
Prendiamo un corpo rigido che ruota attorno a un asse fisso con velocità angolare $\omega$. Ogni punto $i$, di massa $m_i$ a distanza $r_i$ dall'asse, ha velocità $v_i = \omega r_i$. L'energia cinetica totale è la somma delle energie dei singoli punti:

$$K = \sum_i \tfrac12 m_i v_i^2 = \sum_i \tfrac12 m_i \omega^2 r_i^2 = \tfrac12\Big(\sum_i m_i r_i^2\Big)\omega^2$$

Ho raccolto $\omega^2$ perché è uguale per tutti i punti. La quantità tra parentesi dipende solo da come è distribuita la massa attorno all'asse: è il **momento d'inerzia** rispetto a quell'asse.

$$I = \sum_i m_i\,r_i^2 \qquad\text{(corpo discreto)} \qquad\qquad I = \int r^2\,dm = \int_V r^2\,\rho\,dV \qquad\text{(corpo continuo)}$$
dove:
- $I$ = momento d'inerzia rispetto all'asse (kg·m²)
- $m_i$ = massa del punto $i$ (kg)
- $r_i$ (o $r$) = distanza dall'asse (m), misurata perpendicolarmente all'asse
- $\rho$ = densità (kg/m³)

Con questa definizione l'energia cinetica di rotazione si scrive

$$K_{rot} = \tfrac12\,I\,\omega^2$$

che è l'analoga di $K = \tfrac12 m v^2$: al posto della massa c'è $I$, al posto della velocità c'è $\omega$.

### Significato
Il momento d'inerzia misura **quanto un corpo si oppone a essere messo in rotazione** (o fermato) attorno a un asse. Ha per le rotazioni il ruolo che la massa ha per le traslazioni. A differenza della massa, però, **non è una proprietà del solo corpo**: dipende dall'asse scelto e da come la massa è distribuita intorno ad esso. A parità di massa, $I$ è tanto più grande quanto più la massa sta **lontana dall'asse** (conta il quadrato della distanza).

### Calcolo per un disco omogeneo (dimostrazione della dispensa)
Disco omogeneo di massa $M$ e raggio $R$, asse perpendicolare al disco passante per il centro.
1. Densità superficiale costante: $\sigma = \dfrac{M}{S} = \dfrac{M}{\pi R^2}$.
2. Divido il disco in tante **corone circolari** sottili, di raggio $r$ e spessore $dr$. Tutti i punti di una corona distano $r$ dall'asse. L'area della corona è (circonferenza × spessore) $dS = 2\pi r\,dr$, la sua massa è $dm = \sigma\,2\pi r\,dr$.
3. Il contributo della corona a $I$ è $r^2\,dm = \sigma\,2\pi r^3\,dr$.
4. Sommo (integro) tutte le corone da $r = 0$ a $r = R$:
$$I = \int_0^R \sigma\,2\pi r^3\,dr = 2\pi\sigma\,\frac{R^4}{4} = 2\pi\,\frac{M}{\pi R^2}\,\frac{R^4}{4} = \tfrac12 M R^2$$

Lo stesso risultato vale per un **cilindro pieno** rispetto al suo asse (è una pila di dischi).

### Calcolo per un'asta sottile
Asta omogenea di massa $M$ e lunghezza $\ell$, asse perpendicolare all'asta. Densità lineare $\lambda = M/\ell$; un trattino $dx$ a distanza $x$ dall'asse ha massa $dm = \lambda\,dx$.
- Asse nel **centro**: $I = \displaystyle\int_{-\ell/2}^{\ell/2} x^2 \lambda\,dx = \lambda\,\frac{x^3}{3}\Big|_{-\ell/2}^{\ell/2} = \lambda\,\frac{\ell^3}{12} = \tfrac1{12}M\ell^2$.
- Asse a un **estremo**: $I = \displaystyle\int_0^\ell x^2\lambda\,dx = \lambda\,\frac{\ell^3}{3} = \tfrac13 M\ell^2$.

### Tabella dei momenti d'inerzia da sapere
| Corpo omogeneo | Asse | $I$ |
|---|---|---|
| Anello (o cilindro cavo sottile) di raggio $R$ | asse centrale, perpendicolare al piano | $MR^2$ |
| Anello | un diametro | $\tfrac12 MR^2$ |
| Disco o cilindro pieno | asse centrale | $\tfrac12 MR^2$ |
| Disco | asse perpendicolare passante per un punto del bordo | $\tfrac32 MR^2$ |
| Sfera piena | un diametro | $\tfrac25 MR^2$ |
| Sfera cava sottile | un diametro | $\tfrac23 MR^2$ |
| Asta sottile di lunghezza $\ell$ | perpendicolare, nel centro | $\tfrac1{12} M\ell^2$ |
| Asta sottile | perpendicolare, a un estremo | $\tfrac13 M\ell^2$ |

Confronto utile: anello ($MR^2$) > sfera cava ($\tfrac23MR^2$) > disco ($\tfrac12MR^2$) > sfera piena ($\tfrac25MR^2$). Nell'anello tutta la massa è alla distanza massima $R$; nella sfera piena molta massa è vicina al centro.

## Teorema di Huygens-Steiner (degli assi paralleli)
**Enunciato.** Se è noto il momento d'inerzia $I_c$ di un corpo rispetto a un asse passante per il suo **centro di massa**, il momento d'inerzia rispetto a un qualsiasi asse **parallelo** al primo e posto a distanza $h$ da esso è

$$I_h = I_c + M\,h^2$$
dove:
- $I_h$ = momento d'inerzia rispetto al nuovo asse (kg·m²)
- $I_c$ = momento d'inerzia rispetto all'asse parallelo passante per il centro di massa (kg·m²)
- $M$ = massa totale del corpo (kg)
- $h$ = distanza tra i due assi (m)

### Dimostrazione (sistema discreto di punti)
1. Scelgo un sistema di riferimento con **origine nel centro di massa** e asse $z$ parallelo ai due assi. Il primo asse è l'asse $z$ stesso; il secondo interseca il piano $xy$ nel punto $H = (a, b)$, con $a^2 + b^2 = h^2$.
2. La distanza al quadrato del punto $i$, di coordinate $(x_i, y_i, z_i)$, dal primo asse è $x_i^2 + y_i^2$. Quindi $I_c = \sum_i m_i\,(x_i^2 + y_i^2)$.
3. La distanza al quadrato dal secondo asse è $(x_i - a)^2 + (y_i - b)^2$. Quindi
$$I_h = \sum_i m_i\left[(x_i - a)^2 + (y_i - b)^2\right]$$
4. Sviluppo i quadrati:
$$I_h = \sum_i m_i (x_i^2 + y_i^2) - 2a\sum_i m_i x_i - 2b\sum_i m_i y_i + (a^2 + b^2)\sum_i m_i$$
5. Il primo termine è $I_c$. Nel secondo e nel terzo compare $\sum_i m_i x_i = M\,x_{cm}$ e $\sum_i m_i y_i = M\,y_{cm}$: sono **nulli**, perché l'origine è nel centro di massa ($x_{cm} = y_{cm} = 0$). L'ultimo termine vale $h^2 M$.
6. Resta $I_h = I_c + M h^2$. ∎

Per un corpo continuo la dimostrazione è identica, con gli integrali al posto delle somme.

### Conseguenze
- Il termine $Mh^2$ è sempre positivo: **tra tutti gli assi paralleli, il momento d'inerzia minimo è quello dell'asse che passa per il centro di massa**.
- Il teorema vale solo se uno dei due assi passa per il centro di massa. Per passare tra due assi qualsiasi, si passa prima per l'asse del centro di massa.

::: esempio
**Sfera, asse tangente.** Sfera piena di massa $M$ e raggio $R$; un asse tangente alla superficie dista $h = R$ dal centro.
$$I = \tfrac25 MR^2 + M R^2 = \left(\tfrac25 + \tfrac55\right) MR^2 = \tfrac75 MR^2$$

**Disco, asse sul bordo.** Asse perpendicolare al disco passante per un punto del bordo ($h = R$):
$$I = \tfrac12 MR^2 + MR^2 = \tfrac32 MR^2$$

**Asta, asse a un estremo.** $I = \tfrac1{12}M\ell^2 + M\left(\tfrac{\ell}{2}\right)^2 = \tfrac1{12}M\ell^2 + \tfrac3{12}M\ell^2 = \tfrac13 M\ell^2$: torna con l'integrale calcolato sopra.
:::

::: attenzione
Errori tipici con Steiner:
- usare $I_{cm}$ quando l'asse di rotazione **non** passa per il centro di massa;
- sottrarre $Mh^2$ invece di sommarlo (il momento rispetto a un asse spostato è sempre **più grande**);
- aggiungere un altro "pezzo" della formula del corpo (per esempio un altro $\tfrac25 MR^2$) invece di $Mh^2$.
:::

## Momento angolare di un corpo rigido in rotazione
Consideriamo un corpo che ruota attorno a un asse fisso, e un polo $O$ sull'asse. Ogni elementino di massa $dm$ nel punto $P$ ha momento angolare $d\vec L = \vec r \times (dm\,\vec v)$, perpendicolare al piano formato da $\vec r$ (la posizione di $P$ rispetto a $O$) e da $\vec v$.

In generale $d\vec L$ ha una componente **parallela all'asse** e una **perpendicolare**. Se però l'asse di rotazione è un **asse di simmetria** del corpo, per ogni punto $P$ esiste un punto simmetrico $P'$ il cui momento angolare ha la stessa componente parallela e la componente perpendicolare **opposta**. Sommando su tutto il corpo, le componenti perpendicolari si annullano a coppie: **il momento angolare totale è parallelo all'asse di rotazione**.

Calcolo della componente parallela:
1. $\vec v$ è perpendicolare a $\vec r$, quindi $|d\vec L| = r\,v\,dm = r\,\omega\,h\,dm$, dove $h$ è la distanza di $P$ dall'asse (perché $v = \omega h$).
2. Se $\theta$ è l'angolo tra $\vec r$ e l'asse, $d\vec L$ forma con l'asse l'angolo complementare; la sua componente parallela è $dL_{\parallel} = r\,\omega\,h\,\sin\theta\,dm$.
3. Ma $r\sin\theta = h$: quindi $dL_{\parallel} = \omega\,h^2\,dm$.
4. Integro su tutto il corpo; $\omega$ è uguale per tutti:
$$L = \omega\int h^2\,dm = I\,\omega$$

$$\vec L = I\,\vec\omega$$
dove:
- $\vec L$ = momento angolare del corpo (kg·m²/s)
- $I$ = momento d'inerzia rispetto all'asse di rotazione (kg·m²)
- $\vec\omega$ = velocità angolare, vettore diretto lungo l'asse (rad/s)

È l'analoga di $\vec p = m\vec v$.

## Seconda legge della dinamica per le rotazioni
Per un corpo rigido che ruota attorno a un asse fisso (di simmetria, o passante per il centro di massa), $I$ non cambia nel tempo. La seconda equazione cardinale diventa:

$$M^{(e)} = \frac{dL}{dt} = \frac{d(I\omega)}{dt} = I\,\frac{d\omega}{dt} = I\,\alpha$$
dove:
- $M^{(e)}$ = momento delle forze esterne rispetto all'asse (N·m)
- $I$ = momento d'inerzia rispetto all'asse (kg·m²)
- $\alpha = d\omega/dt$ = accelerazione angolare (rad/s²)

È la versione rotazionale di $F = ma$: un momento esterno produce un'accelerazione angolare, tanto più piccola quanto più grande è $I$. Tutti i vettori sono paralleli all'asse, quindi si lavora con i moduli (con il segno).

Ricorda il **momento di una forza** rispetto a un asse: $M = F\,b$, dove $F$ è l'intensità della forza (N) e $b$ il **braccio**, cioè la distanza tra l'asse e la retta d'azione della forza (m). Una forza tangente al bordo di una ruota di raggio $R$ ha braccio $R$; una forza diretta verso l'asse ha braccio nullo.

### Lavoro di un momento ed energia cinetica di rotazione
Il lavoro fatto dal momento delle forze esterne fa variare l'energia cinetica di rotazione. In forma infinitesima:
1. $dK = d\left(\tfrac12 I\omega^2\right) = I\,\omega\,d\omega$.
2. Scrivo $\omega\,d\omega = \dfrac{d\theta}{dt}\,d\omega = \dfrac{d\omega}{dt}\,d\theta = \alpha\,d\theta$.
3. Quindi $dK = I\alpha\,d\theta = M^{(e)}\,d\theta$.

$$dW = M\,d\theta \qquad\qquad W = K_{fin} - K_{in} = \tfrac12 I\omega_{fin}^2 - \tfrac12 I\omega_{in}^2$$
dove:
- $W$ = lavoro del momento (J)
- $M$ = momento delle forze (N·m)
- $d\theta$ = rotazione infinitesima (rad)

Come per il punto materiale il lavoro è "forza per spostamento", per un corpo rigido in rotazione è "**momento per spostamento angolare**". Se il momento è costante, $W = M\,\Delta\theta$.

## Energia cinetica di un corpo che trasla e ruota
Se il corpo, oltre a ruotare, trasla, l'energia cinetica è la somma di due termini (**teorema di König**):

$$K = \tfrac12 M v_{cm}^2 + \tfrac12 I_{cm}\,\omega^2$$
dove:
- $K$ = energia cinetica totale (J)
- $M$ = massa (kg)
- $v_{cm}$ = velocità del centro di massa (m/s)
- $I_{cm}$ = momento d'inerzia rispetto a un asse per il centro di massa (kg·m²)
- $\omega$ = velocità angolare (rad/s)

Il primo termine è l'energia di traslazione (come se tutta la massa fosse nel centro di massa), il secondo l'energia di rotazione attorno al centro di massa.

::: esempio
**Disco lanciato e rotante.** Un disco di massa $m = 5\ \mathrm{kg}$ e raggio $R = 0{,}2\ \mathrm m$ viene lanciato a $v = 15\ \mathrm{m/s}$ mentre ruota attorno al proprio asse (perpendicolare al disco, per il centro) a $\omega = 15\ \mathrm{rad/s}$. Energia cinetica?
1. Momento d'inerzia del disco: $I = \tfrac12 mR^2 = \tfrac12 \cdot 5 \cdot 0{,}04 = 0{,}1\ \mathrm{kg\,m^2}$.
2. Traslazione: $\tfrac12 m v^2 = \tfrac12 \cdot 5 \cdot 225 = 562{,}5\ \mathrm J$.
3. Rotazione: $\tfrac12 I\omega^2 = \tfrac12 \cdot 0{,}1 \cdot 225 = 11{,}25\ \mathrm J$.
4. Totale: $K = 562{,}5 + 11{,}25 = 573{,}75 \approx 574\ \mathrm J$.

Qui la rotazione pesa poco perché $\omega R = 3\ \mathrm{m/s}$ è molto minore di $v$. Ma non va dimenticata: senza di essa il risultato sarebbe sbagliato.
:::

::: esempio
**Satellite cilindrico.** Un satellite a forma di cilindro pieno omogeneo, diametro di base 1,21 m, altezza 1,75 m, massa 1210 kg, ruota attorno al proprio asse a 1,52 giri/s. Momento d'inerzia ed energia cinetica?
1. Raggio: $R = 1{,}21/2 = 0{,}605\ \mathrm m$. L'altezza non serve: per un cilindro rispetto al suo asse conta solo $R$.
2. $I = \tfrac12 MR^2 = \tfrac12 \cdot 1210 \cdot 0{,}605^2 = 605 \cdot 0{,}366 \approx 221\ \mathrm{kg\,m^2}$.
3. Converto i giri al secondo: $\omega = 1{,}52 \cdot 2\pi \approx 9{,}55\ \mathrm{rad/s}$ (ogni giro sono $2\pi$ radianti).
4. $K = \tfrac12 I\omega^2 = \tfrac12 \cdot 221 \cdot 9{,}55^2 \approx 1{,}0 \cdot 10^4\ \mathrm J$.
:::

::: esempio
**Momento d'inerzia dall'energia.** Una ruota ha energia cinetica di rotazione $K = 24\,400\ \mathrm J$ quando gira a 602 giri/min. Quanto vale $I$?
1. $\omega = 602 \cdot \dfrac{2\pi}{60} \approx 63{,}0\ \mathrm{rad/s}$ (divido per 60 per passare ai secondi).
2. Da $K = \tfrac12 I\omega^2$: $I = \dfrac{2K}{\omega^2} = \dfrac{48\,800}{63{,}0^2} \approx 12{,}3\ \mathrm{kg\,m^2}$.
:::

::: esempio
**Puleggia con forza variabile.** Una puleggia di raggio $r = 10\ \mathrm{cm}$ e momento d'inerzia $I = 1{,}0 \cdot 10^{-3}\ \mathrm{kg\,m^2}$, ferma all'inizio, riceve sul bordo una forza tangente $F = 0{,}50\,t + 0{,}30\,t^2$ (N, con $t$ in s). A $t = 3{,}0\ \mathrm s$: accelerazione e velocità angolare?
1. La forza è tangente, quindi il braccio è $r$: $M = F r$. Da $M = I\alpha$: $\alpha(t) = \dfrac{r}{I}F(t) = 100\,(0{,}50\,t + 0{,}30\,t^2)$.
2. A $t = 3\ \mathrm s$: $F = 1{,}5 + 2{,}7 = 4{,}2\ \mathrm N$, quindi $\alpha = 100 \cdot 4{,}2 = 420\ \mathrm{rad/s^2}$.
3. La velocità angolare si ottiene integrando $\alpha$ nel tempo (parte da ferma):
$$\omega = \int_0^3 100\,(0{,}50\,t + 0{,}30\,t^2)\,dt = 100\left[0{,}25\,t^2 + 0{,}10\,t^3\right]_0^3 = 100\,(2{,}25 + 2{,}7) = 495\ \mathrm{rad/s}$$
:::

::: esempio
**Puleggia con secchio** (tipo di domanda del paniere). Una puleggia a disco di massa $M = 4\ \mathrm{kg}$ e raggio $R = 0{,}5\ \mathrm m$ ruota senza attrito attorno a un perno centrale. Sulla fune avvolta è appeso un secchio di massa totale $m = 16\ \mathrm{kg}$. Con che accelerazione scende?
1. **Secchio** (traslazione, verso positivo in basso): $mg - T = m a$, dove $T$ è la tensione della fune (N).
2. **Puleggia** (rotazione): l'unica forza con momento rispetto al perno è la tensione, con braccio $R$: $T R = I\alpha$.
3. **Vincolo**: la fune non slitta, quindi $a = \alpha R$ e $\alpha = a/R$.
4. Con $I = \tfrac12 MR^2$: $TR = \tfrac12 MR^2 \cdot \dfrac{a}{R}$, cioè $T = \tfrac12 M a$.
5. Sostituisco nella prima: $mg - \tfrac12 Ma = ma$, quindi
$$a = \frac{mg}{m + M/2} = \frac{16 \cdot 9{,}8}{16 + 2} = \frac{156{,}8}{18} \approx 8{,}7\ \mathrm{m/s^2}$$
L'accelerazione è minore di $g$: parte del peso serve a mettere in rotazione la puleggia. Se la puleggia avesse massa nulla si avrebbe la caduta libera, $a = g$. In forma generale $a = \dfrac{mg}{m + I/R^2}$.
:::

::: esempio
**Puleggia in cima a un piano inclinato.** Puleggia di raggio $R = 20\ \mathrm{cm}$; la fune regge una massa di 2,0 kg che scivola senza attrito su un piano inclinato di 20°, con accelerazione misurata $a = 2{,}0\ \mathrm{m/s^2}$. Momento d'inerzia della puleggia?
1. Massa lungo il piano: $mg\sin 20° - T = ma$, quindi $T = 2{,}0 \cdot 9{,}8 \cdot 0{,}342 - 2{,}0 \cdot 2{,}0 = 6{,}70 - 4{,}0 = 2{,}70\ \mathrm N$.
2. Puleggia: $TR = I\alpha = I\,a/R$, quindi $I = \dfrac{T R^2}{a} = \dfrac{2{,}70 \cdot 0{,}04}{2{,}0} \approx 0{,}054\ \mathrm{kg\,m^2}$.
:::

::: esempio
**Asta spinta con attrito nella cerniera.** Un'asta di massa $m = 0{,}4\ \mathrm{kg}$ e lunghezza $\ell = 0{,}80\ \mathrm m$, imperniata a un estremo e inizialmente ferma, è spinta all'altro estremo da una forza $F = 100\ \mathrm N$ sempre perpendicolare all'asta; la cerniera dà un momento d'attrito $M_A = 30\ \mathrm{N\,m}$. Velocità angolare dopo mezzo giro (180°)? Il peso si trascura.
1. Momento della forza: braccio $\ell$, $M_F = F\ell = 80\ \mathrm{N\,m}$. Momento totale: $M = 80 - 30 = 50\ \mathrm{N\,m}$.
2. Momento d'inerzia rispetto al perno (Steiner): $I = \tfrac1{12}m\ell^2 + m\left(\tfrac{\ell}{2}\right)^2 = \tfrac13 m\ell^2 = \tfrac13 \cdot 0{,}4 \cdot 0{,}64 \approx 0{,}0853\ \mathrm{kg\,m^2}$.
3. Lavoro del momento costante su $\Delta\theta = \pi$: $W = M\,\pi = 50\pi \approx 157\ \mathrm J$.
4. $W = \tfrac12 I\omega^2$, quindi $\omega = \sqrt{2W/I} = \sqrt{314/0{,}0853} \approx 60{,}7\ \mathrm{rad/s}$.

(Allo stesso risultato si arriva con $\alpha = M/I$ e $\omega^2 = 2\alpha\,\Delta\theta$.)
:::

::: esempio
**Asta che cade attorno a un perno.** Un'asta di massa $0{,}2\ \mathrm{kg}$ e lunghezza $\ell = 0{,}60\ \mathrm m$, imperniata senza attrito a un estremo, viene lasciata da ferma in posizione orizzontale. Velocità dell'estremo libero nel punto più basso?
1. Si conserva l'energia meccanica (il perno liscio non compie lavoro). Il centro di massa scende di $\ell/2$.
2. $mg\,\dfrac{\ell}{2} = \tfrac12 I\omega^2$ con $I = \tfrac13 m\ell^2$: $\omega^2 = \dfrac{3g}{\ell} = \dfrac{3 \cdot 9{,}8}{0{,}6} = 49$, quindi $\omega = 7\ \mathrm{rad/s}$.
3. Velocità dell'estremo: $v = \omega\ell = 7 \cdot 0{,}6 = 4{,}2\ \mathrm{m/s}$. La massa non conta: si semplifica.
:::

## Conservazione del momento angolare
Dalla seconda equazione cardinale: se il **momento delle forze esterne è nullo**, $dL/dt = 0$ e il momento angolare resta **costante**.

Per un corpo rigido $I$ è fisso, quindi resta costante anche $\omega$. Ma il risultato vale anche per un sistema di punti **non rigido** che può ridistribuire la propria massa mantenendo la simmetria rispetto all'asse (una persona che muove le braccia). Se la massa si avvicina o si allontana dall'asse, $I$ cambia; poiché $L = I\omega$ deve restare uguale, cambia $\omega$ in modo complementare:

$$I_{in}\,\omega_{in} = I_{fin}\,\omega_{fin}$$
dove:
- $I_{in}, I_{fin}$ = momenti d'inerzia prima e dopo (kg·m²)
- $\omega_{in}, \omega_{fin}$ = velocità angolari prima e dopo (rad/s)

- Massa portata **vicino** all'asse → $I$ diminuisce → $\omega$ **aumenta**.
- Massa portata **lontano** dall'asse → $I$ aumenta → $\omega$ **diminuisce**.

### Il pattinatore (domanda aperta)
Un pattinatore ruota su se stesso con le braccia aperte. Le forze esterne sono il peso e la reazione del ghiaccio, entrambe verticali e (circa) lungo l'asse di rotazione; l'attrito del ghiaccio è piccolissimo. Il loro momento rispetto all'asse è quindi trascurabile e **il momento angolare si conserva**. Quando il pattinatore raccoglie le braccia al corpo (o si distende lungo la verticale), porta massa vicino all'asse: il suo momento d'inerzia **diminuisce**. Perché il prodotto $I\omega$ resti uguale, la velocità angolare deve **aumentare**: gira più veloce. Se riapre le braccia, $I$ torna grande e rallenta. Lo stesso fanno i **tuffatori**, che si raccolgono "a palla" per fare più rotazioni durante il salto e si distendono prima di entrare in acqua.

Nota energetica: l'energia cinetica $\tfrac12 I\omega^2 = \dfrac{L^2}{2I}$ **aumenta** quando $I$ diminuisce. L'energia in più viene dal lavoro dei muscoli che tirano le braccia verso l'interno.

::: esempio
**Pattinatrice.** Ruota a $\omega_1 = 2{,}4\ \mathrm{rad/s}$ con momento d'inerzia $I_1 = 5{,}2\ \mathrm{kg\,m^2}$; portando le braccia lungo il corpo arriva a $\omega_2 = 3{,}5\ \mathrm{rad/s}$. Momento d'inerzia finale?
1. L'unica forza esterna rilevante è il peso; preso il centro di massa come polo, il suo momento è nullo: $L$ si conserva.
2. $I_2 = I_1\,\dfrac{\omega_1}{\omega_2} = 5{,}2 \cdot \dfrac{2{,}4}{3{,}5} \approx 3{,}6\ \mathrm{kg\,m^2}$.
:::

::: esempio
**Cilindro di ghiaccio secco che evapora.** Un cilindro di massa 300 g ruota attorno al proprio asse a 8 Hz. In 10 minuti, per evaporazione uniforme, la massa scende a 270 g con lo stesso raggio. Nuova frequenza? (attriti trascurabili)
1. L'evaporazione è uniforme in tutte le direzioni: non dà momento esterno, $L = I\omega$ si conserva.
2. $I = \tfrac12 MR^2$ con $R$ fisso: $I$ è proporzionale a $M$. Quindi $M_1 f_1 = M_2 f_2$.
3. $f_2 = 8 \cdot \dfrac{300}{270} \approx 8{,}9\ \mathrm{Hz}$, cioè $\omega_2 = 2\pi f_2 \approx 55{,}8\ \mathrm{rad/s}$.
:::

::: esempio
**Satellite messo in rotazione da due razzi.** Cilindro di raggio $r = 4{,}5\ \mathrm m$ e massa $5{,}4 \cdot 10^3\ \mathrm{kg}$, fermo; due propulsori tangenti al bordo, ciascuno con forza $F$, lo portano a $\omega = 3{,}5\ \mathrm{rad/s}$ in $\Delta t = 360\ \mathrm s$. Quanto vale $F$? Energia finale?
1. $I = \tfrac12 m r^2 = \tfrac12 \cdot 5400 \cdot 20{,}25 \approx 5{,}47 \cdot 10^4\ \mathrm{kg\,m^2}$.
2. Accelerazione angolare costante: $\alpha = \omega/\Delta t = 3{,}5/360 \approx 9{,}72 \cdot 10^{-3}\ \mathrm{rad/s^2}$.
3. Momento totale: due forze di braccio $r$, $M = 2Fr = I\alpha$, quindi $F = \dfrac{I\alpha}{2r} = \dfrac{5{,}47 \cdot 10^4 \cdot 9{,}72 \cdot 10^{-3}}{9} \approx 59\ \mathrm N$.
4. $K = \tfrac12 I\omega^2 = \tfrac12 \cdot 5{,}47 \cdot 10^4 \cdot 12{,}25 \approx 3{,}3 \cdot 10^5\ \mathrm J$.
:::

## Equilibrio del corpo rigido
**Condizione necessaria e sufficiente.** Un corpo rigido è in equilibrio se sono nulli **sia la risultante delle forze esterne sia il loro momento totale** (rispetto a un polo qualsiasi):

$$\vec F^{(e)} = 0 \qquad\qquad \vec M^{(e)} = 0$$

Infatti, per le equazioni cardinali, allora $\vec P$ e $\vec L$ restano costanti. Se il corpo è inizialmente fermo, resta fermo in un riferimento inerziale: è l'**equilibrio statico**. Sono 6 equazioni scalari.

Non basta che la risultante sia nulla: due forze uguali e opposte con rette d'azione diverse (una **coppia**) hanno risultante nulla ma momento diverso da zero, e fanno ruotare il corpo.

Il polo per i momenti si può scegliere liberamente: conviene metterlo dove agiscono forze incognite, così il loro momento (braccio nullo) sparisce dall'equazione.

### Corpo appoggiato su un piano
Un corpo appoggiato è soggetto al peso, applicato nel baricentro, e alle reazioni vincolari del piano, distribuite sulla base d'appoggio. Anche le reazioni sono forze parallele, equivalenti a un'unica forza applicata in un punto della base.
- Se la **verticale del baricentro cade dentro la base d'appoggio**, la risultante delle reazioni si applica proprio su quella verticale: peso e reazione formano una coppia a braccio nullo, momento nullo, il corpo **resta in equilibrio**.
- Se la verticale cade **fuori** dalla base, la reazione può applicarsi al massimo sul bordo della base: peso e reazione formano una coppia con braccio non nullo e il corpo **si ribalta**. Per evitarlo serve un vincolo in più (per esempio un fermo sul bordo opposto).

### Tipi di equilibrio
Conta anche cosa succede se il corpo viene spostato di poco dalla posizione di equilibrio:

| Tipo | Cosa succede spostandolo di poco | Esempio |
|---|---|---|
| Stabile | le forze lo riportano nella posizione iniziale | pendolo appeso, baricentro sotto il punto di sospensione; cono appoggiato sulla base |
| Instabile | le forze lo allontanano sempre di più | matita in piedi sulla punta; pendolo capovolto |
| Indifferente | resta in equilibrio anche nella nuova posizione | sfera su un piano orizzontale |

In generale l'equilibrio è tanto più "solido" quanto più il baricentro è **basso** e la base d'appoggio **larga**.

### L'uomo in piedi (domanda aperta)
Un uomo in piedi ha il **baricentro alto** (all'altezza del bacino, circa a metà della statura) e una **base d'appoggio piccola**: la superficie compresa tra i piedi. Si comporta come un **pendolo rovesciato**: basta una piccola inclinazione perché la verticale del baricentro esca dalla base e il peso produca un momento che lo fa cadere ancora di più. Per questo la sua posizione si considera di **equilibrio instabile**. Resta in piedi solo grazie a continue, piccolissime correzioni dei muscoli (delle caviglie soprattutto) controllate dal sistema nervoso, che riportano il baricentro sopra i piedi. Allargando i piedi o piegando le ginocchia (base più larga, baricentro più basso) diventa più difficile cadere.

::: esempio
**Torre di Pisa.** La cima è spostata di 4,5 m rispetto alla verticale. Si schematizza come un cilindro omogeneo di diametro 7,0 m e altezza 55 m, semplicemente appoggiato.
1. Il baricentro è a metà altezza sull'asse; la sua verticale è spostata della metà dello spostamento della cima: $4{,}5/2 = 2{,}25\ \mathrm m$ dal centro della base.
2. La base ha raggio $3{,}5\ \mathrm m$: $2{,}25 < 3{,}5$, la verticale del baricentro cade dentro la base. La torre è in equilibrio.
3. Il limite si ha quando la verticale del baricentro arriva al bordo, a 3,5 m: la cima dovrebbe spostarsi di $2 \cdot 3{,}5 = 7{,}0\ \mathrm m$, cioè un'inclinazione $\theta_{lim} = \arcsin(7{,}0/55) \approx 7{,}3°$.
:::

::: esempio
**Scala appoggiata al muro.** Scala di massa $m = 3{,}5\ \mathrm{kg}$ e lunghezza $\ell$, appoggiata a una parete liscia con angolo $\theta = 65°$ rispetto al pavimento; attrito statico con il pavimento $\mu_s = 0{,}36$. Reazioni e angolo minimo?
1. Forze: peso $mg$ nel punto medio; parete liscia → solo reazione orizzontale $N_1$; pavimento → reazione verticale $N_2$ e attrito statico $F_s$ orizzontale.
2. Forze verticali: $N_2 = mg = 3{,}5 \cdot 9{,}8 = 34{,}3\ \mathrm N$. Forze orizzontali: $F_s = N_1$.
3. Momenti rispetto al piede della scala $O$ (così $N_2$ e $F_s$ hanno braccio nullo): il braccio di $N_1$ è $\ell\sin\theta$, quello del peso è $\tfrac{\ell}{2}\cos\theta$. $N_1\,\ell\sin\theta = mg\,\tfrac{\ell}{2}\cos\theta$, quindi $N_1 = \dfrac{mg}{2\tan\theta} = \dfrac{34{,}3}{2 \cdot 2{,}14} \approx 8{,}0\ \mathrm N = F_s$.
4. Angolo minimo: l'attrito non può superare $\mu_s N_2$: $\dfrac{mg}{2\tan\theta} \le \mu_s mg$, cioè $\tan\theta \ge \dfrac{1}{2\mu_s} = 1{,}39$, quindi $\theta_{min} \approx 54°$.

La scelta del polo è solo una comodità: con un altro polo si ottiene lo stesso risultato, con più termini da scrivere.
:::

::: esame
Le domande sulla lezione chiedono: come si muove un corpo rigido (trasla **e** ruota, anche insieme); la risultante di due forze parallele (somma o differenza delle intensità); Steiner, sia come enunciato con dimostrazione (aperta "Esporre il teorema di Huygens-Steiner") sia come calcolo (sfera con asse tangente: $\tfrac75MR^2$); l'energia cinetica di un disco che trasla e ruota (somma dei due termini); la puleggia con il secchio ($a = mg/(m + M/2)$); il pattinatore che raccoglie le braccia (conservazione di $L = I\omega$, $I$ cala, $\omega$ cresce); l'uomo in piedi (equilibrio instabile: baricentro alto, base piccola, pendolo rovesciato, correzioni muscolari).
:::

::: sintesi
- Corpo rigido: distanze reciproche fisse; moto = traslazione del centro di massa + rotazione attorno a un asse; 6 gradi di libertà; $v = \omega r$.
- Equazioni cardinali: $\vec F^{(e)} = M\vec a_{cm}$, $\vec M^{(e)} = d\vec L/dt$ (solo forze esterne).
- Densità $\rho = dm/dV$; corpo omogeneo: centro di massa = centro geometrico; baricentro = centro di massa.
- Forze parallele: risultante = somma algebrica delle intensità (somma se concordi, differenza se discordi).
- $I = \sum m_i r_i^2 = \int r^2 dm$; anello $MR^2$, disco $\tfrac12MR^2$, sfera $\tfrac25MR^2$, sfera cava $\tfrac23MR^2$, asta $\tfrac1{12}M\ell^2$ (centro), $\tfrac13M\ell^2$ (estremo).
- Huygens-Steiner: $I_h = I_{cm} + Mh^2$; minimo per l'asse del centro di massa.
- Rotazione: $L = I\omega$, $M = I\alpha$, $K = \tfrac12I\omega^2$, $dW = M\,d\theta$; König: $K = \tfrac12Mv_{cm}^2 + \tfrac12I_{cm}\omega^2$.
- Senza momenti esterni $I_{in}\omega_{in} = I_{fin}\omega_{fin}$: pattinatore e tuffatore.
- Equilibrio: $\vec F = 0$ e $\vec M = 0$; stabile, instabile, indifferente; l'uomo in piedi è in equilibrio instabile.
:::

=== 29 dispense
SLIDES: 28, 29
# Lezione 29 — Moto di rotolamento

Nella lezione precedente abbiamo visto che il moto più generale di un corpo rigido è la composizione di una traslazione e di una rotazione (rototraslazione). Studiare questo moto nel caso generale può essere molto complicato. Esistono però casi comuni in cui la composizione è semplice da descrivere: il più importante è il **rotolamento** di una ruota, di un cilindro o di una sfera su una superficie. È il moto delle ruote dei veicoli, delle bocce, dei cuscinetti. In questa lezione vediamo il legame tra traslazione e rotazione nel rotolamento puro, le velocità dei punti della ruota, l'energia cinetica, il ruolo (fondamentale) dell'attrito statico, la discesa lungo un piano inclinato, l'attrito volvente e, come cenno, il giroscopio.

## Le equazioni di partenza
La dinamica del corpo rigido è governata dalle due equazioni cardinali:

$$\vec F^{(e)} = M\,\vec a_{cm} \qquad\qquad \vec M^{(e)} = \frac{d\vec L}{dt}$$

La prima regola la traslazione del centro di massa, la seconda la rotazione. In ogni istante si può vedere il moto come la composizione di un moto del centro di massa e di una rotazione attorno a un asse istantaneo.

## Il rotolamento puro (senza strisciare)
Prendiamo una ruota omogenea: il suo centro di massa coincide con il centro geometrico. Se la ruota **rotola senza strisciare**, il moto è la composizione di:
- una **traslazione** del centro di massa;
- una **rotazione** di tutti gli altri punti attorno al centro di massa.

I due moti non sono indipendenti: sono legati dalla **condizione di rotolamento puro**.

### Il legame tra velocità del centro e velocità angolare
Quando la ruota gira di un angolo $\theta$, il punto di contatto "srotola" sul terreno un arco di lunghezza $s = R\theta$ (come un metro a nastro che si svolge). Poiché la ruota non striscia, il centro avanza esattamente della stessa lunghezza. Derivando rispetto al tempo:

$$x_{cm} = R\,\theta \quad\Rightarrow\quad v_{cm} = R\,\frac{d\theta}{dt} = \omega R \quad\Rightarrow\quad a_{cm} = R\,\frac{d\omega}{dt} = \alpha R$$
dove:
- $x_{cm}$ = spostamento del centro della ruota (m)
- $v_{cm}$ = velocità del centro (m/s)
- $a_{cm}$ = accelerazione del centro (m/s²)
- $R$ = raggio della ruota (m)
- $\theta$ = angolo di rotazione (rad)
- $\omega$ = velocità angolare (rad/s)
- $\alpha$ = accelerazione angolare (rad/s²)

In un giro completo ($\theta = 2\pi$) il centro avanza di una circonferenza, $2\pi R$. Se $\omega$ è costante, anche $v_{cm}$ è costante.

### Il punto di contatto è fermo
"Senza strisciare" vuol dire che, in ogni istante, il punto $P$ della ruota a contatto con il terreno è **fermo** rispetto al terreno. La velocità di un punto della ruota è la velocità del centro più quella dovuta alla rotazione attorno al centro:

$$\vec v_P = \vec v_C + \vec\omega \times \vec r$$

dove $\vec r$ è il vettore che va dal centro $C$ al punto $P$ (lungo $R$). Imponendo $\vec v_P = 0$:

$$\vec v_C = -\,\vec\omega \times \vec r$$

È la forma più generale (vettoriale) della condizione di rotolamento; in modulo dà $v_C = \omega R$, e derivando $a_C = \alpha R$.

### Velocità dei diversi punti della ruota
Ogni punto ha la velocità del centro ($v_{cm}$, in avanti) più la velocità di rotazione ($\omega R = v_{cm}$ per i punti del bordo, tangente al bordo). Le due si sommano come vettori:

| Punto della ruota | Velocità di traslazione | Velocità di rotazione | Velocità totale |
|---|---|---|---|
| Punto di contatto (in basso) | $v_{cm}$ in avanti | $v_{cm}$ all'indietro | $0$ |
| Centro | $v_{cm}$ | $0$ | $v_{cm}$ |
| Punto più alto | $v_{cm}$ in avanti | $v_{cm}$ in avanti | $2v_{cm}$ |
| Punto del bordo all'altezza del centro | $v_{cm}$ orizzontale | $v_{cm}$ verticale | $\sqrt2\,v_{cm}$ |

Per questo i raggi della parte alta di una ruota di bicicletta in corsa appaiono sfocati, mentre quelli in basso si vedono bene.

### Il rotolamento come pura rotazione attorno al punto di contatto
Poiché il punto di contatto è istantaneamente fermo, in ogni istante il rotolamento si può vedere come una **pura rotazione attorno all'asse che passa per il punto di contatto** (asse istantaneo di rotazione), con la stessa velocità angolare $\omega$. Infatti la velocità di ogni punto è $\omega$ per la sua distanza da $P$: il centro dista $R$ e va a $\omega R$; il punto più alto dista $2R$ e va a $2\omega R$.

## Energia cinetica nel rotolamento
**Primo modo (rotazione attorno al punto di contatto).** Il corpo ruota attorno a $P$ con velocità $\omega$: $K = \tfrac12 I_P\,\omega^2$. Il momento d'inerzia rispetto a $P$ si trova con Huygens-Steiner, perché $P$ dista $R$ dal centro di massa:
$$I_P = I_{cm} + MR^2$$
Quindi
$$K = \tfrac12\left(I_{cm} + MR^2\right)\omega^2 = \tfrac12 I_{cm}\,\omega^2 + \tfrac12 M R^2\omega^2 = \tfrac12 I_{cm}\,\omega^2 + \tfrac12 M v_{cm}^2$$
usando $\omega R = v_{cm}$.

**Secondo modo (teorema di König).** Energia di traslazione del centro di massa più energia di rotazione attorno al centro di massa: $K = \tfrac12 M v_{cm}^2 + \tfrac12 I_{cm}\omega^2$. È lo stesso risultato.

Sostituendo $\omega = v_{cm}/R$ si ottiene una forma comoda:

$$K = \tfrac12 M v_{cm}^2 + \tfrac12 I_{cm}\,\omega^2 = \tfrac12\left(M + \frac{I_{cm}}{R^2}\right)v_{cm}^2$$
dove:
- $K$ = energia cinetica totale (J)
- $M$ = massa (kg)
- $I_{cm}$ = momento d'inerzia rispetto all'asse per il centro di massa (kg·m²)
- $v_{cm}$ = velocità del centro (m/s)

Il termine $I_{cm}/R^2$ si comporta come una "massa in più" dovuta alla rotazione.

::: esempio
**Energie di corpi che rotolano** alla stessa velocità $v$:
- cilindro (o disco) pieno, $I_{cm} = \tfrac12MR^2$: $K = \tfrac12Mv^2 + \tfrac12\cdot\tfrac12MR^2\cdot\dfrac{v^2}{R^2} = \tfrac12Mv^2 + \tfrac14Mv^2 = \tfrac34Mv^2$ (un terzo dell'energia è di rotazione);
- sfera piena, $I_{cm} = \tfrac25MR^2$: $K = \tfrac12Mv^2 + \tfrac15Mv^2 = \tfrac7{10}Mv^2$;
- anello, $I_{cm} = MR^2$: $K = \tfrac12Mv^2 + \tfrac12Mv^2 = Mv^2$ (metà dell'energia è di rotazione).
:::

::: esempio
**Energia cinetica della Terra.** Rotazione attorno al proprio asse: la Terra è una sfera di massa $m = 5{,}97 \cdot 10^{24}\ \mathrm{kg}$ e raggio $r = 6{,}37 \cdot 10^6\ \mathrm m$, quindi $I = \tfrac25 m r^2 \approx 9{,}7 \cdot 10^{37}\ \mathrm{kg\,m^2}$; $\omega = 2\pi/T$ con $T = 1$ giorno $= 86\,400\ \mathrm s$: $\omega \approx 7{,}27 \cdot 10^{-5}\ \mathrm{rad/s}$. $K_{rot} = \tfrac12 I\omega^2 \approx 2{,}6 \cdot 10^{29}\ \mathrm J$.
Rivoluzione attorno al Sole: la Terra si tratta come un punto; $v = 2\pi d/T_1$ con $d = 1{,}50 \cdot 10^{11}\ \mathrm m$ e $T_1 = 1$ anno $\approx 3{,}16 \cdot 10^7\ \mathrm s$: $v \approx 3{,}0 \cdot 10^4\ \mathrm{m/s}$, $K = \tfrac12 m v^2 \approx 2{,}7 \cdot 10^{33}\ \mathrm J$, circa diecimila volte di più.
:::

## Dinamica del rotolamento: perché serve l'attrito
In condizioni ideali, se una ruota ferma su un piano **senza attrito** ricevesse una forza applicata nel centro di massa, si metterebbe a **scivolare senza ruotare**: la forza nel centro ha momento nullo rispetto al centro, quindi non può far nascere una rotazione. Perché la ruota **rotoli** serve una forza d'attrito tra ruota e piano. Poiché il punto di contatto è istantaneamente fermo, si tratta di **attrito statico**.

### Forza orizzontale applicata nel centro
Ruota di massa $M$, raggio $R$, momento d'inerzia $I$ rispetto al centro; forza orizzontale $\vec F$ nel centro. Agiscono: $\vec F$, il peso $M\vec g$, la reazione normale $\vec N$ (che bilancia il peso) e l'attrito statico $\vec f_s$ nel punto di contatto.

**Traslazione** (prima equazione cardinale, componente orizzontale; quella verticale dà $N = Mg$):
$$M a_C = F - f_s$$

**Rotazione** attorno al centro di massa: $F$, peso e $N$ passano per il centro o hanno braccio nullo; l'unica forza con momento è l'attrito, con braccio $R$:
$$I\alpha = f_s R \qquad\text{con}\qquad \alpha = \frac{a_C}{R} \quad\Rightarrow\quad f_s = \frac{I\,a_C}{R^2}$$

**Mettendo a sistema**: sostituisco $f_s$ nella prima:
$$M a_C = F - \frac{I}{R^2}a_C \quad\Rightarrow\quad a_C = \frac{F}{M + I/R^2} \qquad f_s = \frac{I/R^2}{M + I/R^2}\,F$$
dove:
- $a_C$ = accelerazione del centro (m/s²)
- $F$ = forza applicata (N)
- $f_s$ = attrito statico (N), diretto **all'indietro**

Per un cilindro pieno ($I/R^2 = M/2$): $a_C = \dfrac{2F}{3M}$ e $f_s = \dfrac{F}{3}$.

### Limite del rotolamento puro
L'attrito statico non può superare il suo valore massimo:
$$f_s \le \mu_s N = \mu_s M g$$
dove $\mu_s$ = coefficiente di attrito statico (adimensionale). Usando l'espressione di $f_s$, il rotolamento resta puro finché
$$F \le \mu_s M g\left(1 + \frac{MR^2}{I}\right)$$
Per il cilindro pieno: $F \le 3\mu_s Mg$. Se la forza è più grande la ruota **slitta**: rotola e striscia insieme, e l'attrito diventa dinamico.

### L'attrito statico non compie lavoro
Il punto su cui agisce l'attrito statico è **istantaneamente fermo**: lo spostamento del punto di applicazione è nullo, quindi il lavoro è nullo. Conseguenza importante: **nel rotolamento puro l'energia meccanica si conserva** (se non ci sono altre forze dissipative). L'attrito statico non "consuma" energia: serve solo a trasferirne una parte dalla traslazione alla rotazione.

::: esempio
**Ruota spinta nel centro.** Forza orizzontale di 10 N applicata al centro di una ruota di massa 10 kg e raggio 0,30 m che rotola senza strisciare; l'accelerazione del centro è 0,60 m/s². Attrito e momento d'inerzia?
1. Traslazione: $Ma = F - f_s$, quindi $f_s = F - Ma = 10 - 10 \cdot 0{,}60 = 4{,}0\ \mathrm N$, diretta **in verso opposto al moto**.
2. Rotazione: $f_s R = I\alpha = I\,a/R$, quindi $I = \dfrac{f_s R^2}{a} = \dfrac{4{,}0 \cdot 0{,}09}{0{,}60} = 0{,}60\ \mathrm{kg\,m^2}$.
:::

::: esempio
**Cilindro tirato da una lenza sulla sommità.** Una lenza è avvolta attorno a un cilindro omogeneo ($M = 10\ \mathrm{kg}$, $R = 0{,}10\ \mathrm m$) e si svolge dalla parte superiore, applicando una forza orizzontale costante $F = 12\ \mathrm N$ nel punto più alto. Il cilindro rotola senza strisciare.
1. Prendo l'attrito $f_s$ positivo **in avanti** (verso incognito). Traslazione: $Ma = F + f_s$.
2. Rotazione attorno al centro: $F$ ha braccio $R$ e fa girare in avanti; $f_s$ (in avanti, nel punto di contatto) fa girare all'indietro: $I\alpha = FR - f_sR$. Con $I = \tfrac12MR^2$ e $\alpha = a/R$: $\tfrac12 Ma = F - f_s$.
3. Sommo le due equazioni: $\tfrac32 Ma = 2F$, quindi $a = \dfrac{4F}{3M} = \dfrac{48}{30} = 1{,}6\ \mathrm{m/s^2}$.
4. $\alpha = a/R = 16\ \mathrm{rad/s^2}$.
5. $f_s = Ma - F = 16 - 12 = +4\ \mathrm N$: l'attrito è diretto **nel verso del moto**. Non è un errore: l'attrito statico ha il verso che serve a impedire lo strisciamento, che non è sempre opposto al moto.
:::

## Rotolamento lungo un piano inclinato
Un corpo di massa $M$, raggio $R$ e momento d'inerzia $I_{cm}$ parte da fermo e rotola senza strisciare lungo un piano inclinato di un angolo $\theta$.

### Con le equazioni cardinali
Asse $x$ lungo il piano verso il basso. Forze: componente del peso lungo il piano $Mg\sin\theta$, attrito statico $f_s$ verso l'alto, normale $N = Mg\cos\theta$.
1. Traslazione: $M a = Mg\sin\theta - f_s$.
2. Rotazione attorno al centro (solo l'attrito ha momento): $f_s R = I_{cm}\,\alpha = I_{cm}\,\dfrac{a}{R}$, quindi $f_s = \dfrac{I_{cm}}{R^2}a$.
3. Sostituisco: $Ma = Mg\sin\theta - \dfrac{I_{cm}}{R^2}a$, quindi $a\left(M + \dfrac{I_{cm}}{R^2}\right) = Mg\sin\theta$.
4. Divido per $M$:

$$a = \frac{g\sin\theta}{1 + \dfrac{I_{cm}}{MR^2}}$$
dove:
- $a$ = accelerazione del centro lungo il piano (m/s²)
- $g$ = accelerazione di gravità, $9{,}8\ \mathrm{m/s^2}$
- $\theta$ = inclinazione del piano
- $I_{cm}/(MR^2)$ = numero puro che dipende solo dalla **forma** del corpo

(Si arriva allo stesso risultato prendendo come polo il punto di contatto: lì solo il peso ha momento, $MgR\sin\theta = I_P\,\alpha$ con $I_P = I_{cm} + MR^2$.)

### Con l'energia
L'attrito statico non lavora, quindi l'energia meccanica si conserva. Dopo un dislivello $h$:
$$Mgh = \tfrac12\left(M + \frac{I_{cm}}{R^2}\right)v^2 \quad\Rightarrow\quad v = \sqrt{\frac{2gh}{1 + I_{cm}/(MR^2)}}$$

### Il confronto tra corpi diversi
| Corpo | $I_{cm}/(MR^2)$ | Accelerazione | Velocità dopo un dislivello $h$ |
|---|---|---|---|
| Blocco che scivola senza attrito | — | $g\sin\theta$ | $\sqrt{2gh}$ |
| Sfera piena | $2/5$ | $\tfrac57 g\sin\theta$ | $\sqrt{\tfrac{10}7 gh}$ |
| Cilindro o disco pieno | $1/2$ | $\tfrac23 g\sin\theta$ | $\sqrt{\tfrac43 gh}$ |
| Sfera cava | $2/3$ | $\tfrac35 g\sin\theta$ | $\sqrt{\tfrac65 gh}$ |
| Anello o cilindro cavo (ruota "vuota") | $1$ | $\tfrac12 g\sin\theta$ | $\sqrt{gh}$ |

L'intuizione: l'energia potenziale persa si divide tra traslazione e rotazione. Più grande è $I_{cm}/(MR^2)$, più energia va in rotazione e meno in traslazione: il corpo scende più lentamente. Il risultato **non dipende né dalla massa né dal raggio**, ma solo da come è distribuita la massa (la forma). In una gara di discesa vince sempre il corpo con $I_{cm}/(MR^2)$ più piccolo: sfera piena, poi cilindro pieno, poi sfera cava, infine anello.

::: esempio
**Ruota piena contro ruota vuota** (domanda del paniere). Una ruota piena (disco) e una ruota vuota (anello) di uguale massa partono insieme da ferme sullo stesso piano inclinato.
- Ruota piena: $a = \dfrac{g\sin\theta}{1 + 1/2} = \tfrac23\,g\sin\theta$.
- Ruota vuota: $a = \dfrac{g\sin\theta}{1 + 1} = \tfrac12\,g\sin\theta$.

Partono entrambe da ferme e percorrono lo stesso tratto: arriva prima quella con accelerazione maggiore, cioè **la ruota piena**. Massa e raggio non contano; nella ruota vuota tutta la massa è lontana dall'asse e "assorbe" più energia nella rotazione.
:::

::: esempio
**Sfera su un piano inclinato scabro.** Sfera di massa 24 kg, parte da ferma dalla cima di un piano alto $h = 3{,}5\ \mathrm m$ e inclinato di 23°; $\mu_s = 0{,}30$.
1. **Velocità in fondo.** Uso l'energia, con l'energia cinetica calcolata come rotazione attorno al punto di contatto: $I_P = \tfrac25MR^2 + MR^2 = \tfrac75MR^2$, $K = \tfrac12 I_P\omega^2 = \tfrac7{10}Mv^2$. Da $Mgh = \tfrac7{10}Mv^2$: $v = \sqrt{\tfrac{10}{7}gh} = \sqrt{\tfrac{10}{7}\cdot 9{,}8 \cdot 3{,}5} = \sqrt{49} = 7{,}0\ \mathrm{m/s}$.
2. **Attrito.** $a = \tfrac57 g\sin\theta$; da $Ma = Mg\sin\theta - f_s$: $f_s = Mg\sin\theta - \tfrac57 Mg\sin\theta = \tfrac27 Mg\sin 23° = \tfrac27 \cdot 24 \cdot 9{,}8 \cdot 0{,}391 \approx 26\ \mathrm N$.
3. **Angolo massimo.** Deve valere $f_s \le \mu_s N = \mu_s Mg\cos\theta$: $\tfrac27\sin\theta \le \mu_s\cos\theta$, cioè $\tan\theta \le \tfrac72\mu_s = 1{,}05$, quindi $\theta_{max} \approx 46°$. Oltre, la sfera slitta.
:::

## Urto con un corpo che ruota attorno a un perno
Il rotolamento non è l'unico caso in cui traslazione e rotazione si combinano. La dispensa propone un esercizio che usa insieme energia e momento angolare.

::: esempio
**Pallina che urta un'asta imperniata.** Una particella di massa $m = 50\ \mathrm g$ scivola senza attrito da un'altezza $h = 20\ \mathrm{cm}$ lungo una guida e urta in modo perfettamente anelastico (resta attaccata) l'estremo inferiore di un'asta verticale omogenea di massa $M = 100\ \mathrm g$ e lunghezza $d = 40\ \mathrm{cm}$, imperniata all'estremo superiore. Di che angolo $\vartheta$ sale il sistema?
1. **Momento d'inerzia.** Asta rispetto al perno: $\tfrac13 Md^2 = \tfrac13 \cdot 0{,}1 \cdot 0{,}16 = 5{,}33 \cdot 10^{-3}\ \mathrm{kg\,m^2}$. Con la pallina attaccata all'estremo: $I = \tfrac13Md^2 + md^2 = 5{,}33 \cdot 10^{-3} + 8{,}0 \cdot 10^{-3} = 1{,}33 \cdot 10^{-2}\ \mathrm{kg\,m^2}$.
2. **Velocità della pallina** prima dell'urto (energia): $v = \sqrt{2gh} = \sqrt{2 \cdot 9{,}8 \cdot 0{,}2} \approx 1{,}98\ \mathrm{m/s}$, orizzontale.
3. **Urto.** Nell'urto l'energia non si conserva (anelastico), ma si conserva il **momento angolare** rispetto al perno (la reazione del perno ha braccio nullo): $m v d = I\omega$, quindi $\omega = \dfrac{0{,}05 \cdot 1{,}98 \cdot 0{,}4}{1{,}33 \cdot 10^{-2}} \approx 2{,}97\ \mathrm{rad/s}$.
4. **Salita.** Dopo l'urto si conserva l'energia: la pallina sale di $d(1-\cos\vartheta)$, il centro dell'asta della metà. $\tfrac12 I\omega^2 = \left(md + M\tfrac d2\right)g(1 - \cos\vartheta)$: $0{,}0588 = 0{,}04 \cdot 9{,}8\,(1-\cos\vartheta)$, quindi $1 - \cos\vartheta = 0{,}15$ e $\vartheta \approx 32°$.
:::

## Attrito volvente
Nel rotolamento reale la ruota e il terreno non sono perfettamente rigidi: nella zona di contatto si **deformano** un poco. La reazione del terreno non è più applicata esattamente sotto il centro ma un po' più avanti, e produce un momento che si oppone alla rotazione. Questo effetto si chiama **attrito volvente** e si schematizza come un momento:

$$M_a = h\,m g$$
dove:
- $M_a$ = momento di attrito volvente (N·m)
- $h$ = coefficiente di attrito volvente (m): ha le **dimensioni di una lunghezza** (è lo spostamento in avanti della reazione)
- $m g$ = peso del corpo, cioè la forza normale (N)

È in genere molto più piccolo dell'attrito radente (strisciante): per questo la ruota rende facile spostare carichi pesanti. Pneumatici sgonfi (più deformati) hanno $h$ più grande.

## Cenno: il giroscopio e la precessione
Un **giroscopio** è un corpo rigido in rapida rotazione con un punto fisso, opportunamente vincolato. Un esempio è una **trottola** a simmetria cilindrica che gira con velocità angolare $\omega$ costante attorno al proprio asse, con la punta $O$ ferma sul piano. Qui il vincolo non è sull'asse (come nella rotazione attorno a un asse fisso) ma su un punto.

Il momento angolare $\vec L$ è diretto lungo l'asse della trottola. Il peso, applicato nel baricentro, ha rispetto a $O$ il momento $\vec M = \vec r \times m\vec g$, che è **perpendicolare** a $\vec r$ e quindi anche a $\vec L$ (parallelo a $\vec r$). Per la seconda equazione cardinale $d\vec L = \vec M\,dt$ è perpendicolare a $\vec L$: cambia la **direzione** di $\vec L$ ma non il suo modulo. L'asse della trottola, invece di cadere, ruota lentamente attorno alla verticale: è la **precessione**, descritta da

$$\frac{d\vec L}{dt} = \vec\Omega \times \vec L$$

dove $\vec\Omega$ è la velocità angolare di precessione (rad/s), diretta lungo la verticale.

::: attenzione
- La relazione $v_{cm} = \omega R$ vale **solo** nel rotolamento puro; se la ruota slitta non vale.
- Il punto più alto della ruota va a $2v_{cm}$, non a $v_{cm}$; il punto di contatto è fermo.
- L'attrito nel rotolamento puro è **statico** e **non compie lavoro**: non va messo nel bilancio energetico come energia dissipata.
- Sul piano inclinato non conta la massa né il raggio: conta solo il rapporto $I_{cm}/(MR^2)$.
:::

::: esame
Domande tipiche: la gara sul piano inclinato tra ruota piena e ruota vuota (vince la piena, $\tfrac23 g\sin\theta$ contro $\tfrac12 g\sin\theta$). Nell'aperta "Discutere il moto di rotolamento" porta, nell'ordine: la composizione di traslazione e rotazione; la condizione $v_{cm} = \omega R$ (e $a = \alpha R$) con il suo perché; il punto di contatto fermo e la rotazione istantanea attorno ad esso; l'energia $K = \tfrac12 Mv^2 + \tfrac12 I\omega^2$ (Steiner o König); il ruolo dell'attrito statico (necessario, limite $\mu_s N$, non fa lavoro → conservazione dell'energia); l'accelerazione sul piano inclinato con il confronto sfera/cilindro/anello; l'attrito volvente.
:::

::: sintesi
- Rotolamento puro: $v_{cm} = \omega R$, $a_{cm} = \alpha R$; punto di contatto fermo, centro a $v_{cm}$, punto più alto a $2v_{cm}$.
- Si può vedere come rotazione istantanea attorno al punto di contatto, con $I_P = I_{cm} + MR^2$.
- Energia: $K = \tfrac12Mv_{cm}^2 + \tfrac12I_{cm}\omega^2 = \tfrac12(M + I_{cm}/R^2)v_{cm}^2$; cilindro pieno $\tfrac34Mv^2$.
- Serve attrito statico ($f_s \le \mu_s N$), che non compie lavoro: l'energia meccanica si conserva.
- Forza $F$ nel centro: $a = F/(M + I/R^2)$.
- Piano inclinato: $a = g\sin\theta/(1 + I_{cm}/MR^2)$; sfera $\tfrac57$, cilindro $\tfrac23$, anello $\tfrac12$ di $g\sin\theta$; non dipende da massa e raggio.
- Attrito volvente $M_a = h\,mg$, con $h$ lunghezza; giroscopio: il momento del peso fa precedere $\vec L$.
:::

=== 30 dispense
SLIDES: 30, 33
# Lezione 30 — I fluidi: definizione, viscosità, fluidi reali e ideali

Con questa lezione si lascia il corpo rigido e si passa alla **meccanica dei fluidi**: lo studio di sistemi che non si possono schematizzare come solidi, cioè i **liquidi** e i **gas**. Qui vediamo che cosa distingue un fluido da un solido, con quali grandezze lo si descrive (densità e pressione), che cos'è la **viscosità** (l'attrito interno dei fluidi), e la differenza tra il modello di **fluido ideale** (usato nelle lezioni seguenti per la statica e per Bernoulli) e i **fluidi reali**, con la legge di Poiseuille, il moto turbolento e il numero di Reynolds.

## Solidi, liquidi e gas
- Nei **solidi** forma e volume sono ben definiti.
- I **liquidi** sono praticamente **incomprimibili**: hanno volume (e densità) costante e ben definito, ma la loro forma cambia e di solito prendono quella del recipiente.
- Nei **gas** cade anche il vincolo sul volume: occupano tutto lo spazio disponibile e sono **comprimibili**.

| Stato | Forma propria | Volume proprio | Comprimibile |
|---|---|---|---|
| Solido | sì | sì | quasi no |
| Liquido | no | sì | quasi no |
| Gas | no | no (occupa tutto lo spazio) | sì |

Liquidi e gas insieme si chiamano **fluidi**: sostanze **senza forma propria**, che scorrono. Queste proprietà dipendono dalle interazioni microscopiche tra atomi e molecole, ma la meccanica dei fluidi (e poi la termodinamica) li descrive con **grandezze macroscopiche d'insieme**, senza seguire le singole molecole.

### Niente attrito statico nei fluidi
Una caratteristica fondamentale dei fluidi è che **non resistono allo scorrimento**. Immaginiamo un fluido in un recipiente, diviso idealmente in due parti con una superficie in comune.
- In un **fluido perfetto** lo scorrimento tangenziale di una parte sull'altra lungo la superficie avviene **senza forze di resistenza**; l'incomprimibilità fa sì che sulla superficie di contatto agiscano solo due forze reciproche **perpendicolari**, uguali e contrarie.
- In un **fluido reale** lo scorrimento avviene lo stesso, ma con una forza d'attrito: la **viscosità**.

In nessun caso esiste una forma di **attrito statico** che impedisca lo scorrimento tangenziale: anche una forza tangenziale piccolissima mette in moto un fluido. Per questo un fluido in quiete non può sostenere forze tangenziali, e le forze che esercita sulle superfici sono **perpendicolari** ad esse.

## Densità e pressione
**Densità**: massa per unità di volume.

$$\rho = \frac{m}{V}\qquad\left(\text{in generale } \rho = \frac{dm}{dV}\right)$$
dove:
- $\rho$ = densità (kg/m³)
- $m$ = massa (kg)
- $V$ = volume (m³)

Valori tipici: acqua $\approx 1000\ \mathrm{kg/m^3}$ ($1\ \mathrm{g/cm^3}$, 1 kg per litro); acqua di mare $\approx 1025\ \mathrm{kg/m^3}$; mercurio $13\,600\ \mathrm{kg/m^3}$; aria $\approx 1{,}2\ \mathrm{kg/m^3}$.

**Pressione**: un elemento di fluido esercita una forza $dF$ su un elemento $dS$ della superficie che lo delimita. La pressione è la forza (perpendicolare) per unità di superficie:

$$p = \frac{dF}{dS}\qquad\left(\text{forza uniforme: } p = \frac{F}{S}\right)$$
dove:
- $p$ = pressione (Pa)
- $F$ = forza perpendicolare alla superficie (N)
- $S$ = area della superficie (m²)

Unità SI: il **pascal**, $1\ \mathrm{Pa} = 1\ \mathrm{N/m^2}$, cioè la pressione di una forza di 1 N distribuita perpendicolarmente su 1 m². Per motivi storici si usano anche:

$$1\ \mathrm{bar} = 10^5\ \mathrm{Pa} \qquad 1\ \mathrm{atm} = 1{,}013 \cdot 10^5\ \mathrm{Pa} = 760\ \mathrm{torr}\ (\mathrm{mmHg})$$

### La pressione è uno scalare
La pressione si definisce a partire da una forza (un vettore), ma è una grandezza **scalare**: in un fluido in quiete ha lo **stesso valore qualunque sia l'orientazione** della superficie su cui la si misura (non direzionalità della pressione). La forza che produce è sempre perpendicolare alla superficie, perché in un fluido fermo non ci sono componenti tangenziali.

La non direzionalità si verifica sperimentalmente; si può anche ricavare con il **principio di solidificazione**: si immagina un piccolo elemento di fluido "solidificato", separato dal resto da una superficie indeformabile, e si impone che sia in equilibrio. Prendiamo un prisma triangolare con le facce perpendicolari al foglio: una faccia orizzontale (area $S_1$), una verticale ($S_2$) e una inclinata di un angolo $\theta$ ($S_3$), con $S_1 = S_3\cos\theta$ e $S_2 = S_3\sin\theta$. Equilibrio orizzontale: $p_2 S_2 = p_3 S_3\sin\theta$, quindi $p_2 = p_3$. Equilibrio verticale (trascurando il peso, che per un prisma piccolissimo è un infinitesimo di ordine superiore): $p_1 S_1 = p_3 S_3\cos\theta$, quindi $p_1 = p_3$. La pressione è la stessa su tutte le facce, comunque orientate.

## Viscosità
La **viscosità** è l'**attrito interno** di un fluido reale: la resistenza che strati adiacenti di fluido oppongono allo scorrere l'uno sull'altro a velocità diverse. Più un fluido è viscoso, più fatica a scorrere: il miele e l'olio sono più viscosi dell'acqua, l'acqua più dell'aria.

### L'esperimento della lastra
Una lastra sottile di area $A$ galleggia su uno strato di fluido reale di spessore $D$ (distanza dal fondo). Per tenerla in moto **uniforme** con velocità costante $v_0$ bisogna applicarle una **forza costante**, che equilibra l'attrito esercitato dal fluido.

A basse velocità il moto è **laminare**: il fluido si muove a strati paralleli che scorrono l'uno sull'altro senza mescolarsi.
- Lo strato a contatto con la lastra si muove insieme a lei, con velocità $v_0$ (il fluido "aderisce" alle pareti).
- Lo strato a contatto con il fondo è fermo.
- Gli strati intermedi hanno velocità intermedie, che variano con la distanza.

Ogni strato trascina quello sotto e viene frenato da esso: tra strati adiacenti agiscono **sforzi di taglio**, proporzionali alla superficie di contatto e a quanto rapidamente cambia la velocità passando da uno strato all'altro:

$$F = \eta\,A\,\frac{dv}{dy}$$
dove:
- $F$ = forza di attrito viscoso tra gli strati (N)
- $\eta$ = **coefficiente di viscosità** del fluido (Pa·s)
- $A$ = area di contatto tra gli strati (m²)
- $y$ = coordinata perpendicolare agli strati (m)
- $dv/dy$ = gradiente di velocità, cioè quanto cambia la velocità per ogni metro di spessore (1/s)

Nel caso della lastra il profilo delle velocità è **lineare** (la velocità cresce uniformemente dal fondo alla lastra), quindi $\dfrac{dv}{dy} = \dfrac{v_0}{D}$ e

$$F = \eta\,A\,\frac{v_0}{D}$$

Unità di $\eta$: da $\eta = \dfrac{F}{A}\cdot\dfrac{dy}{dv}$ si ha $\dfrac{\mathrm N}{\mathrm{m^2}}\cdot\dfrac{\mathrm m}{\mathrm{m/s}} = \mathrm{Pa\cdot s}$. Si usa anche il poise, $1\ \mathrm P = 0{,}1\ \mathrm{Pa\,s}$. L'acqua a 20 °C ha $\eta \approx 1 \cdot 10^{-3}\ \mathrm{Pa\,s}$.

::: esempio
Lastra di area $A = 0{,}5\ \mathrm{m^2}$ trascinata a $v_0 = 0{,}2\ \mathrm{m/s}$ su uno strato d'olio spesso $D = 2\ \mathrm{mm}$ con $\eta = 0{,}1\ \mathrm{Pa\,s}$.
$\dfrac{dv}{dy} = \dfrac{0{,}2}{0{,}002} = 100\ \mathrm{s^{-1}}$; $F = 0{,}1 \cdot 0{,}5 \cdot 100 = 5\ \mathrm N$. Raddoppiando la velocità, o dimezzando lo spessore, la forza raddoppia.
:::

::: attenzione
La viscosità dipende dalla temperatura in modo **opposto** per liquidi e gas.
- Liquidi: se la temperatura sale la viscosità **diminuisce** (l'olio caldo scorre meglio, il miele scaldato diventa fluido).
- Gas: se la temperatura sale la viscosità **aumenta**.
:::

## Fluidi ideali (perfetti)
Descrivere il moto di un fluido reale è difficile (si pensi a un torrente o a una cascata). Si parte quindi da un modello semplificato, il **fluido ideale** o perfetto, che ha queste proprietà:
- **incomprimibile**: densità uniforme e costante in ogni punto;
- **non viscoso**: nessuna forza dissipativa tra volumi di fluido adiacenti che scorrono;
- **moto irrotazionale**: niente vortici; una particella immersa nel fluido si muove solo di traslazione, senza ruotare su se stessa;
- in genere si considera anche il **moto stazionario** (la velocità in ogni punto non cambia nel tempo), quindi laminare.

Nel fluido ideale l'energia meccanica si conserva: valgono l'equazione di continuità e il teorema di Bernoulli (lezione 32).

## Fluidi reali
Nei fluidi reali c'è la viscosità, e i gas sono anche comprimibili. Due conseguenze principali:
1. Parte dell'energia meccanica si **dissipa** in calore per attrito interno.
2. Il profilo delle velocità in un tubo non è uniforme: il fluido è **fermo sulle pareti** e più veloce al centro.

### Moto laminare in un tubo: perdita di carico e legge di Poiseuille
Fluido reale che scorre a bassa velocità in un condotto orizzontale cilindrico di raggio $R$, in moto stazionario. Il fluido a contatto con le pareti è fermo; procedendo verso il centro si incontrano strati cilindrici con velocità crescenti, fino al massimo nel cilindretto centrale.

Per effetto della viscosità il fluido subisce una **perdita di carico**: la **pressione diminuisce** lungo il tubo, anche se il tubo è orizzontale e di sezione costante. Serve una differenza di pressione per mantenere il flusso, come serve una forza per trascinare la lastra.

**Derivazione.** Considero un cilindretto di fluido coassiale al tubo, di raggio $r$ e lunghezza $L$, con pressioni $p_1$ (a monte) e $p_2$ (a valle), $p_1 > p_2$; $\Delta p = p_1 - p_2$.
1. Forza di pressione sulle basi: $(p_1 - p_2)\,\pi r^2 = \Delta p\,\pi r^2$, in avanti.
2. Forza viscosa sulla superficie laterale (area $2\pi r L$): $\eta\,2\pi r L\,\dfrac{dv}{dr}$; poiché $dv/dr < 0$ (la velocità cala verso le pareti), questa forza è all'indietro.
3. Moto stazionario: la risultante è nulla:
$$\Delta p\,\pi r^2 + \eta\,2\pi r L\,\frac{dv}{dr} = 0 \quad\Rightarrow\quad \frac{dv}{dr} = -\frac{\Delta p}{2\eta L}\,r$$
4. Integro con la condizione $v(R) = 0$ (fluido fermo sulla parete):
$$v(r) = \frac{\Delta p}{4\eta L}\left(R^2 - r^2\right)$$
Il profilo delle velocità è una **parabola**: massimo al centro, $v_{max} = \dfrac{\Delta p\,R^2}{4\eta L}$, zero alle pareti.
5. Portata: un anello di raggio $r$ e spessore $dr$ ha area $2\pi r\,dr$ e porta $dQ = v(r)\,2\pi r\,dr$. Integro:
$$Q = \int_0^R \frac{\Delta p}{4\eta L}(R^2 - r^2)\,2\pi r\,dr = \frac{\pi\Delta p}{2\eta L}\left[\frac{R^2r^2}{2} - \frac{r^4}{4}\right]_0^R = \frac{\pi\Delta p}{2\eta L}\cdot\frac{R^4}{4}$$

$$Q = \frac{\pi R^4}{8\eta}\,\frac{\Delta p}{L}\qquad\text{(legge di Poiseuille)}$$
dove:
- $Q$ = portata, volume che passa ogni secondo (m³/s)
- $R$ = raggio del condotto (m)
- $\eta$ = viscosità (Pa·s)
- $\Delta p$ = differenza di pressione tra i capi del tratto (Pa)
- $L$ = lunghezza del tratto (m)

La portata è proporzionale a $R^4$: dimezzando il raggio la portata diventa $1/16$. Per questo un piccolo restringimento di un vaso sanguigno riduce moltissimo il flusso. La legge vale per basse velocità e condotti sottili (capillari).

::: esempio
**Confronto di viscosità con Poiseuille.** In uno stesso tubo, con la stessa $\Delta p$, un liquido di viscosità nota $\eta_R$ esce in quantità 3 l in 200 s; un liquido di viscosità incognita $\eta_x$ esce in quantità 0,5 l in 400 s. Rapporto $\eta_x/\eta_R$?
1. Portate: $Q_R = 3/200 = 0{,}015\ \mathrm{l/s}$; $Q_x = 0{,}5/400 = 0{,}00125\ \mathrm{l/s}$.
2. Con $R$, $L$, $\Delta p$ uguali, Poiseuille dice $Q \propto 1/\eta$, quindi $\dfrac{\eta_x}{\eta_R} = \dfrac{Q_R}{Q_x} = \dfrac{0{,}015}{0{,}00125} = 12$.
:::

### Moto turbolento e numero di Reynolds
Aumentando la velocità oltre un certo limite, i confini tra gli strati laminari diventano deboli: porzioni sempre più grandi di fluido li attraversano e il moto diventa **vorticoso** o **turbolento**, caotico, con vortici. Anche gli **ostacoli** lungo il condotto favoriscono la transizione, pure a velocità non alte.

Il regime si prevede con un parametro empirico **adimensionale**, il **numero di Reynolds**:

$$Re = \frac{\rho\,v\,R}{\eta}$$
dove:
- $Re$ = numero di Reynolds (numero puro)
- $\rho$ = densità del fluido (kg/m³)
- $v$ = velocità media del fluido (m/s)
- $R$ = raggio del condotto circolare (m)
- $\eta$ = viscosità (Pa·s)

Si verifica (con il raggio nella formula): moto **laminare** per $Re < 1000$, **turbolento** per $Re > 2000$–$10\,000$. La zona di transizione è ampia perché dipende dai dettagli del condotto e del fluido. Molti testi usano il diametro al posto del raggio: allora le soglie tipiche sono circa 2000 e 3000. Il significato è lo stesso: $Re$ confronta gli effetti dell'inerzia (numeratore) con quelli della viscosità (denominatore); **$Re$ grande vuol dire turbolenza**.

Superata la velocità critica, a parità di $\Delta p$ la portata dapprima **diminuisce** (il moto è instabile e caotico). Aumentando $\Delta p$ si arriva a un nuovo regime stabile vorticoso, in cui la differenza di pressione necessaria a mantenere il flusso cresce con il **quadrato della velocità** (in laminare, per Poiseuille, cresce linearmente).

### Resistenza del mezzo
Un oggetto che si muove con velocità $v$ in un fluido fermo equivale, nel riferimento dell'oggetto, a un fluido che gli scorre addosso con velocità $-v$: l'oggetto è un ostacolo.
- A **basse velocità** (laminare) prevale l'attrito viscoso, proporzionale a $v$. Per una sfera di raggio $R$ vale la **legge di Stokes**: $F = 6\pi\eta R\,v$.
- Ad **alte velocità** (turbolento) la resistenza è proporzionale a $v^2$: $F = \tfrac12 C\rho S v^2$, con $C$ coefficiente di resistenza (adimensionale) e $S$ superficie perpendicolare al moto (m²).

## Confronto riassuntivo
| | Fluido ideale | Fluido reale |
|---|---|---|
| Viscosità | nulla | presente ($\eta > 0$) |
| Comprimibilità | incomprimibile ($\rho$ costante) | può comprimersi (molto nei gas) |
| Energia meccanica | si conserva | una parte si dissipa in calore |
| Velocità in un tubo | uniforme sulla sezione | nulla alle pareti, massima al centro (parabola) |
| Pressione in un tubo orizzontale a sezione costante | costante | diminuisce lungo il tubo (perdita di carico) |
| Tipo di moto | laminare, stazionario, irrotazionale | laminare o turbolento (dipende da $Re$) |
| Leggi | continuità, Bernoulli | Poiseuille, Reynolds, Stokes |

::: esame
Le due aperte della lezione:
- **"Cosa è la viscosità in un fluido?"** È l'attrito interno tra strati di fluido che scorrono a velocità diverse; descrivi l'esperimento della lastra (strato aderente fermo sul fondo, velocità crescente fino a $v_0$), scrivi $F = \eta A\,dv/dy$ con il significato e l'unità di $\eta$ (Pa·s), cita la dipendenza dalla temperatura (liquidi: cala; gas: cresce) e la conseguenza (perdita di carico, Poiseuille).
- **"Quali sono le differenze tra fluidi reali e ideali?"** Usa la tabella: il fluido ideale è incomprimibile, non viscoso, irrotazionale, in moto stazionario e conserva l'energia (Bernoulli); quello reale è viscoso, può essere comprimibile, dissipa energia, ha profilo di velocità parabolico e perdita di carico (Poiseuille, $Q \propto R^4$), e ad alta velocità diventa turbolento (Reynolds).
:::

::: sintesi
- Fluido = senza forma propria; liquido: volume proprio, quasi incomprimibile; gas: comprimibile. Nessun attrito statico nei fluidi.
- $\rho = m/V$ (kg/m³); $p = F/S$ in pascal; $1\ \mathrm{bar} = 10^5\ \mathrm{Pa}$, $1\ \mathrm{atm} = 1{,}013 \cdot 10^5\ \mathrm{Pa} = 760\ \mathrm{mmHg}$; la pressione è scalare e la sua forza è perpendicolare alle superfici.
- Viscosità: attrito tra strati, $F = \eta A\,dv/dy$, $\eta$ in Pa·s; nei liquidi cala se T sale, nei gas cresce.
- Fluido ideale: incomprimibile, non viscoso, irrotazionale, stazionario. Fluido reale: viscoso, perdita di carico.
- Poiseuille: $Q = \pi R^4\Delta p/(8\eta L)$, profilo parabolico.
- Reynolds $Re = \rho v R/\eta$: laminare sotto ~1000, turbolento sopra 2000–10 000; Stokes $F = 6\pi\eta Rv$.
:::

=== 31 dispense
SLIDES: 30, 31
# Lezione 31 — Statica dei fluidi: pressione, Stevino, Pascal, Archimede

La **statica dei fluidi** (fluidostatica) studia i fluidi **in quiete**. Si regge su tre pilastri: la **legge di Stevino** (come cambia la pressione con la profondità), il **principio di Pascal** (come si trasmette una variazione di pressione) e il **principio di Archimede** (la spinta sui corpi immersi, alla base del galleggiamento). Da questi discendono i vasi comunicanti, il barometro di Torricelli, il torchio idraulico, il galleggiamento delle navi e il volo delle mongolfiere. Si lavora con il modello di fluido ideale (incomprimibile) della lezione precedente.

## Pressione e densità: definizioni e unità
$$p = \frac{F}{S} \qquad\qquad \rho = \frac{m}{V}$$
dove:
- $p$ = pressione (Pa = N/m²)
- $F$ = forza perpendicolare alla superficie (N)
- $S$ = area della superficie (m²)
- $\rho$ = densità (kg/m³)
- $m$ = massa (kg)
- $V$ = volume (m³)

La pressione dice come una forza è **distribuita** su una superficie: la stessa forza produce una pressione grande se la superficie è piccola (un chiodo, un tacco a spillo) e piccola se la superficie è grande (gli sci sulla neve). La densità dice quanta massa c'è in ogni metro cubo. Dalla definizione si ricavano le formule inverse $F = pS$ e $m = \rho V$.

| Unità | Valore in Pa |
|---|---|
| pascal (SI) | 1 |
| bar | $10^5$ |
| atmosfera (atm) | $1{,}013 \cdot 10^5$ (circa 1 bar) |
| mmHg (torr) | $1\ \mathrm{atm} = 760\ \mathrm{mmHg} = 76\ \mathrm{cmHg}$, quindi $1\ \mathrm{mmHg} \approx 133\ \mathrm{Pa}$ |

::: attenzione
Le conversioni sono la prima fonte di errore: $1\ \mathrm{cm^2} = 10^{-4}\ \mathrm{m^2}$, $1\ \mathrm{mm^2} = 10^{-6}\ \mathrm{m^2}$, $1\ \mathrm l = 1\ \mathrm{dm^3} = 10^{-3}\ \mathrm{m^3}$, $1\ \mathrm{cm^3} = 10^{-6}\ \mathrm{m^3}$, $1\ \mathrm{g/cm^3} = 1000\ \mathrm{kg/m^3}$. Una pressione si misura in Pa (N/m²), una forza in N, un'energia in J: non confonderli.
:::

::: esempio
- **Forza da una pressione.** Pressione di 1000 Pa su 1 m²: $F = pS = 1000\ \mathrm N$. Pressione di $5 \cdot 10^5\ \mathrm{Pa}$ su 3 m²: $F = 1{,}5 \cdot 10^6\ \mathrm N$.
- **Pressione di un blocco.** Blocco di 10,3 kg su $10\ \mathrm{cm^2} = 10^{-3}\ \mathrm{m^2}$: $p = \dfrac{mg}{S} = \dfrac{10{,}3 \cdot 9{,}8}{10^{-3}} \approx 1{,}01 \cdot 10^5\ \mathrm{Pa}$, cioè circa **1 atm**.
- **Pistone su un gas.** Pistone di 3 kg con superficie $10\ \mathrm{cm^2}$: pressione in più rispetto all'atmosfera $p = \dfrac{3 \cdot 9{,}8}{10^{-3}} = 29\,400\ \mathrm{Pa}$.
- **Massa dalla densità.** Ghiaccio ($917\ \mathrm{kg/m^3}$), volume $10{,}1\ \mathrm{cm^3} = 10{,}1 \cdot 10^{-6}\ \mathrm{m^3}$: $m = \rho V \approx 9{,}26 \cdot 10^{-3}\ \mathrm{kg}$.
- **Tanica di benzina.** Tanica di 2,8 kg con 15,0 l di benzina ($720\ \mathrm{kg/m^3}$): benzina $= 720 \cdot 0{,}015 = 10{,}8\ \mathrm{kg}$; totale $13{,}6\ \mathrm{kg}$.
- **Mercurio.** $38\ \mathrm{cmHg} = 38/76\ \mathrm{atm} = 0{,}5\ \mathrm{atm}$.
:::

## Fluido in quiete in un campo di gravità
### Derivazione della legge di Stevino
Prendiamo un fluido in quiete in un recipiente e isoliamo idealmente un piccolo cilindro di fluido con asse verticale, basi orizzontali di area $S$, alla quota $z$ (asse $z$ verso l'alto) e spessore $dz$. Le forze sulle superfici sono perpendicolari ad esse; quelle laterali, orizzontali, si annullano a coppie. Il volumetto è fermo, quindi lungo la verticale le forze si bilanciano:
1. Sulla base superiore il fluido sovrastante spinge **in basso** con $p(z + dz)\,S$.
2. Sulla base inferiore il fluido sottostante spinge **in alto** con $p(z)\,S$.
3. Il peso del volumetto è $dm\,g = \rho\,S\,dz\,g$, verso il basso.
4. Equilibrio: $p(z)\,S = p(z + dz)\,S + \rho g S\,dz$, cioè $p(z + dz) - p(z) = -\rho g\,dz$.
5. Al limite di spessore infinitesimo:
$$\frac{dp}{dz} = -\rho\,g$$
La pressione **diminuisce salendo** (segno meno) e aumenta scendendo.
6. Se $\rho$ e $g$ sono costanti (liquido incomprimibile, dislivelli non enormi), integro tra due quote: $p(z) - p(z_0) = -\rho g\,(z - z_0)$.
7. Prendo come riferimento la superficie libera ($z_0 = 0$, pressione $p_0$) e indico con $h = -z$ la profondità sotto la superficie:

$$p = p_0 + \rho\,g\,h\qquad\text{(legge di Stevino)}$$
dove:
- $p$ = pressione alla profondità $h$ (Pa)
- $p_0$ = pressione sulla superficie libera, di solito quella atmosferica (Pa)
- $\rho$ = densità del liquido (kg/m³)
- $g$ = accelerazione di gravità, $9{,}8\ \mathrm{m/s^2}$
- $h$ = profondità sotto la superficie (m)

Il termine $\rho g h$ è la **pressione idrostatica**: la pressione esercitata alla base da una colonna di fluido omogeneo alta $h$ per effetto del suo peso. Infatti la colonna di area $S$ ha peso $\rho\,(Sh)\,g$, che diviso per $S$ dà $\rho g h$. In forma di differenza tra due punti a dislivello $h$: $\Delta p = \rho g h$.

### Conseguenze
- La pressione in un fluido in quiete **dipende solo dalla profondità** (dalla quota), non dalla forma del recipiente né dalla quantità di fluido. Le superfici a pressione costante (**isobare**) sono **piani orizzontali**.
- **Paradosso idrostatico**: recipienti di forma e larghezza diverse, riempiti fino alla stessa altezza dello stesso liquido, hanno la **stessa pressione sul fondo**.
- **Vasi comunicanti**: punti alla stessa quota nello stesso liquido hanno la stessa pressione; per questo un liquido in recipienti collegati raggiunge la **stessa altezza** in tutti, qualunque sia la loro forma.
- In acqua ($\rho g \approx 9800\ \mathrm{Pa/m}$) la pressione aumenta di circa **1 atm ogni 10 m** (più precisamente ogni 10,34 m).

::: esempio
- **Sub a 50 m.** $\rho g h = 1000 \cdot 9{,}8 \cdot 50 = 4{,}9 \cdot 10^5\ \mathrm{Pa} \approx 5\ \mathrm{atm}$; più 1 atm dell'aria sopra la superficie: $p \approx 6\ \mathrm{atm}$, cioè **6 volte** la pressione atmosferica.
- **Profondità di una piscina.** Sul fondo la pressione supera quella atmosferica di 49 050 Pa: $h = \dfrac{\Delta p}{\rho g} = \dfrac{49\,050}{1000 \cdot 9{,}81} = 5\ \mathrm m$.
- **Serbatoio.** Pressione sul fondo $2 \cdot 10^5\ \mathrm{Pa}$ sopra quella atmosferica: $h = \dfrac{2 \cdot 10^5}{1000 \cdot 9{,}8} \approx 20{,}4\ \mathrm m$.
- **Serbatoio aperto con 5 m d'acqua.** Acqua: $1000 \cdot 9{,}8 \cdot 5 = 49\ \mathrm{kPa}$; più l'atmosfera, 101 kPa: sul fondo circa **150 kPa**.
- **Mare a 200 m.** $p = 1{,}0 \cdot 10^5 + 1030 \cdot 9{,}8 \cdot 200 \approx 2{,}1 \cdot 10^6\ \mathrm{Pa}$, circa 21 atm.
- **Sangue.** Differenza di pressione tra piedi e testa in una persona alta 1,83 m, con $\rho = 1060\ \mathrm{kg/m^3}$: $\Delta p = 1060 \cdot 9{,}8 \cdot 1{,}83 \approx 1{,}90 \cdot 10^4\ \mathrm{Pa}$.
- **Formula con altri simboli.** Se la densità si chiama $k$, la pressione idrostatica alla profondità $h$ è $g\,h\,k$: conta il prodotto, non il nome delle lettere.
:::

::: esempio
**Recipiente vuoto.** In un recipiente a tenuta si fa il vuoto; l'apertura ha area 1 m².
(a) In aria, al livello del mare, la forza dall'esterno è $F = p_{atm}S = 1{,}013 \cdot 10^5\ \mathrm N$ (il peso di circa 10 tonnellate!).
(b) A 10,34 m di profondità in piscina: $F = (p_0 + \rho g h)S = 1{,}013 \cdot 10^5 + 1000 \cdot 9{,}8 \cdot 10{,}34 \approx 2{,}03 \cdot 10^5\ \mathrm N$. Una colonna d'acqua di 10,34 m esercita una pressione pari a quella atmosferica.

**Portellone di un sottomarino** di 1,2 m × 0,6 m a 100 m di profondità (acqua di mare $1025\ \mathrm{kg/m^3}$); dentro c'è la pressione atmosferica, che si bilancia con quella esterna in superficie: $F = \rho g h S = 1025 \cdot 9{,}8 \cdot 100 \cdot 0{,}72 \approx 7{,}2 \cdot 10^5\ \mathrm N$.
:::

::: esempio
**Tubo a U con due liquidi.** Un tubo a U contiene mercurio ($13{,}6 \cdot 10^3\ \mathrm{kg/m^3}$). In un ramo si versano 15 cm d'acqua, che non si mescola. Di quanto sale il mercurio nell'altro ramo?
1. All'equilibrio, la superficie di separazione acqua-mercurio e il punto del mercurio alla stessa quota nell'altro ramo hanno la stessa pressione (stesso liquido, stessa quota).
2. Sopra la separazione ci sono 15 cm d'acqua; nell'altro ramo, sopra quella quota, un dislivello $\Delta h$ di mercurio: $\rho_{acqua}\,g\,0{,}15 = \rho_{Hg}\,g\,\Delta h$, quindi $\Delta h = 0{,}15 \cdot \dfrac{1000}{13\,600} \approx 1{,}1\ \mathrm{cm}$.
3. Il mercurio è sceso in un ramo tanto quanto è salito nell'altro: il livello sale di metà del dislivello, circa **0,55 cm**.
:::

### Liquidi e gas nella legge di Stevino
La forma $p = p_0 + \rho g h$ vale per i **liquidi**, che sono incomprimibili: $\rho$ è la stessa a ogni profondità e la pressione cresce **linearmente** con $h$.

Nei **gas** la densità **non è costante**: dipende dalla pressione (il gas si comprime). Nell'aria la densità è piccola (circa 800 volte meno dell'acqua) e diminuisce salendo, perché salendo la pressione cala e l'aria si espande. Quindi:
- la pressione dell'aria cambia **poco** con la quota (servono centinaia di metri per una variazione apprezzabile);
- non cambia in modo lineare: la relazione $dp/dz = -\rho g$ resta valida, ma con $\rho$ che dipende da $p$ (in atmosfera a temperatura costante la pressione cala in modo esponenziale con la quota);
- su **dislivelli piccoli** (un edificio, una stanza) si può usare Stevino con una **densità media** dell'aria.

::: esempio
**Altezza di un edificio con il barometro.** Alla base 76,0 cmHg, in cima 75,6 cmHg; densità media dell'aria $1{,}28\ \mathrm{kg/m^3}$, del mercurio $13{,}6 \cdot 10^3\ \mathrm{kg/m^3}$.
1. La pressione è diminuita quanto quella di una colonna di 0,4 cm di mercurio: $\Delta p = \rho_{Hg}\,g\,0{,}004$.
2. Questa diminuzione è il peso della colonna d'aria alta $H$: $\Delta p = \rho_{aria}\,g\,H$.
3. Uguaglio e semplifico $g$: $H = \dfrac{13\,600 \cdot 0{,}004}{1{,}28} \approx 42{,}5\ \mathrm m$.
:::

## Pressione atmosferica e strumenti di misura
L'aria sopra di noi ha un peso: al livello del mare preme con circa $1{,}013 \cdot 10^5\ \mathrm{Pa}$, cioè **circa 1 bar** (1 atm).

### Il barometro di Torricelli
Nella prima metà del Seicento Torricelli misurò la pressione atmosferica con un esperimento basato su Stevino e Pascal.
1. Un lungo tubo sottile, chiuso a un'estremità, viene riempito di mercurio ($\rho \approx 13{,}6 \cdot 10^3\ \mathrm{kg/m^3}$).
2. Tenendo chiusa l'estremità aperta, lo si capovolge in una vaschetta larga piena di mercurio, e lo si apre solo quando l'estremità è immersa.
3. Il mercurio nel tubo scende e si ferma quando la colonna è alta **760 mm**; sopra resta uno spazio vuoto (pressione circa nulla).
4. La colonna d'aria che preme sulla superficie libera della vaschetta e la colonna di mercurio nel tubo si equilibrano (stessa pressione alla stessa quota):
$$p_{atm} = \rho_{Hg}\,g\,h = 13\,600 \cdot 9{,}81 \cdot 0{,}760 \approx 1{,}013 \cdot 10^5\ \mathrm{Pa}$$
Con l'acqua, 13,6 volte meno densa, servirebbe una colonna di circa 10,3 m.

### Come si misura una pressione
- **Barometro**: misura la **pressione atmosferica** (quello di Torricelli a mercurio, o quelli aneroidi a capsula metallica deformabile).
- **Manometro**: misura la pressione di un fluido in un recipiente, di solito come differenza rispetto all'atmosfera. Il più semplice è il **manometro a tubo a U** con un liquido: un ramo è collegato al recipiente, l'altro è aperto all'aria; la differenza di livello $h$ tra i due rami dà $\Delta p = p - p_{atm} = \rho g h$. Esistono anche manometri metallici (a molla, a membrana) e sensori elettronici.
- **Sfigmomanometro**: misura la pressione del sangue (spesso in mmHg, con una colonna di mercurio o un manometro). È lo strumento **analogo al barometro**, perché anch'esso misura una pressione.

### Perché la pressione atmosferica non ci schiaccia
Sulla testa preme circa 1 atm: su qualche centinaio di cm² sono migliaia di newton. Il cranio non viene schiacciato perché **la pressione dei fluidi interni al corpo è uguale** e controbilancia esattamente quella esterna: le forze sui due lati delle pareti si equilibrano.

## Principio di Pascal
**Enunciato.** In un fluido omogeneo, confinato e in quiete, **una variazione di pressione applicata in un punto qualsiasi si trasmette inalterata in ogni altro punto del fluido** e su ogni superficie a contatto con esso (pareti comprese).

**Dimostrazione con Stevino.** Fluido incomprimibile in un recipiente chiuso da un pistone a tenuta di massa trascurabile. In un punto a profondità $h$: $p(h) = p_0 + \rho g h$, con $p_0$ pressione sulla superficie (senza forze esterne è quella atmosferica). Se sul pistone si applica una pressione aggiuntiva $\Delta p$:
$$p'(h) = (p_0 + \Delta p) + \rho g h \quad\Rightarrow\quad p'(h) - p(h) = \Delta p$$
Il termine idrostatico $\rho g h$, dovuto al peso del fluido, non cambia (il fluido è incomprimibile, $\rho$ e $h$ restano uguali). Quindi la stessa variazione $\Delta p$ arriva in ogni punto.

### Il torchio (martinetto) idraulico
Due cilindri di sezione diversa, collegati e pieni di liquido, chiusi da due pistoni. Una forza $F_1$ sul pistone piccolo crea una pressione $F_1/S_1$ che, per Pascal, arriva uguale sul pistone grande:

$$\frac{F_1}{S_1} = \frac{F_2}{S_2} \quad\Rightarrow\quad F_2 = F_1\,\frac{S_2}{S_1}\qquad F_1 = F_2\,\frac{S_1}{S_2}$$
dove:
- $F_1$ = forza sul pistone piccolo (N)
- $S_1$ = area del pistone piccolo (m²)
- $F_2$ = forza sul pistone grande (N)
- $S_2$ = area del pistone grande (m²)

La forza è **amplificata** del rapporto delle superfici. Ma **non si guadagna lavoro**: il volume di liquido che esce da un cilindro entra nell'altro, $S_1 d_1 = S_2 d_2$, quindi il pistone piccolo deve scendere molto ($d_1$) per far salire di poco quello grande ($d_2 = d_1 S_1/S_2$). Il lavoro è uguale: $F_1 d_1 = F_2 d_2$. Il martinetto permette di sollevare pesi notevoli con una forza piccola, con tanti piccoli passi.

Applicazioni: sollevatori delle officine, **freni idraulici** dell'auto (la spinta sul pedale si trasmette uguale ai pistoncini delle ruote), presse, sedie dei barbieri e dei dentisti, il **tubetto del dentifricio** (premendo in un punto la pasta esce dall'altra parte).

::: esempio
- **Moto sul sollevatore.** Moto di 200 kg sul pistone da $10\,000\ \mathrm{cm^2}$; pistone piccolo da $100\ \mathrm{cm^2}$: $F_1 = mg\,\dfrac{S_1}{S_2} = 200 \cdot 9{,}8 \cdot \dfrac{100}{10\,000} = 19{,}6\ \mathrm N$.
- **Auto con uno stantuffo minuscolo.** Utilitaria di 900 kg su una piattaforma di 1 m²; stantuffo di $10\ \mathrm{mm^2} = 10^{-5}\ \mathrm{m^2}$: $F_1 = 900 \cdot 9{,}8 \cdot 10^{-5} \approx 0{,}09\ \mathrm N$ (ma lo stantuffo dovrebbe percorrere centomila volte la salita dell'auto).
- **Pressa idraulica** con pistoni di diametro 3,80 cm e 53,0 cm, carico di 2 t: le aree stanno come i quadrati dei diametri, $F_1 = 2000 \cdot 9{,}8 \cdot (3{,}80/53{,}0)^2 \approx 101\ \mathrm N$: due tonnellate si bilanciano con il peso di circa 10 kg.
- **Cilindro con pistone pesante.** Cilindro di sezione $10^{-3}\ \mathrm{m^2}$, acqua alta 1,3 m, pistone di 35 kg sopra, aria a $10^5\ \mathrm{Pa}$. Sul fondo: $p = p_0 + \dfrac{Mg}{S} + \rho g h = 10^5 + 3{,}43 \cdot 10^5 + 1{,}27 \cdot 10^4 \approx 4{,}56 \cdot 10^5\ \mathrm{Pa}$. La pressione del pistone si somma ovunque (Pascal).
:::

## Principio di Archimede
**Enunciato.** Un corpo immerso, totalmente o parzialmente, in un fluido in un campo di gravità riceve una **spinta verticale verso l'alto**, di modulo **uguale al peso del fluido spostato**, applicata nel baricentro del fluido spostato (centro di spinta).

$$F_A = \rho_{fl}\,V_{imm}\,g$$
dove:
- $F_A$ = spinta di Archimede (N)
- $\rho_{fl}$ = densità del **fluido** (kg/m³), non del corpo
- $V_{imm}$ = volume della parte **immersa** del corpo, cioè il volume di fluido spostato (m³)
- $g$ = accelerazione di gravità (m/s²)

### Perché esiste: il ragionamento della dispensa
1. Considero, dentro un fluido in quiete, una porzione qualsiasi di fluido. È ferma, quindi le forze di pressione che il fluido circostante esercita sulla sua superficie hanno una risultante che **compensa esattamente il suo peso**: una forza verso l'alto pari al peso di quel fluido, applicata nel suo baricentro.
2. Sostituisco quella porzione con un corpo solido della stessa forma. Il fluido intorno non "se ne accorge": le pressioni sulla superficie restano le stesse (dipendono solo dalla profondità, per Stevino).
3. Quindi anche sul corpo agisce la stessa risultante: una spinta verso l'alto pari al peso del fluido spostato.

### Perché è verso l'alto: le forze sulle facce
Un parallelepipedo di base $S$ e altezza $a$ è tutto immerso. Le forze sulle facce laterali sono orizzontali e si annullano a coppie (a ogni quota la pressione è la stessa da tutti i lati). Sulla faccia superiore, a profondità $h$, il fluido spinge in basso con $(p_0 + \rho g h)S$; sulla faccia inferiore, a profondità $h + a$, spinge in alto con $(p_0 + \rho g (h+a))S$. La faccia inferiore è più profonda e lì la pressione è maggiore: la risultante è **sempre verso l'alto** e vale
$$\rho g (h + a)S - \rho g h S = \rho g\,a S = \rho\,V g$$
cioè proprio il peso del fluido spostato. Non dipende da $h$.

### Cosa conta e cosa no
- **Conta**: il volume immerso e la densità del fluido.
- **Non conta il materiale** del corpo: un pezzo di sughero e un pezzo di ferro con lo stesso volume, completamente immersi in acqua, ricevono **la stessa spinta**. Il ferro però ha peso molto maggiore, quindi affonda.
- **Non conta la profondità** (per un liquido incomprimibile): un sasso che affonda in uno stagno riceve la **stessa spinta** a ogni profondità.
- La massa del corpo **non entra** nella formula della spinta.

La **dinamica** di un corpo tutto immerso, di densità $\rho_c$ e volume $V$, è data da peso e spinta:
$$m\,a = \rho_{fl} V g - \rho_c V g = (\rho_{fl} - \rho_c)\,V g$$
Anche quando il corpo affonda, l'accelerazione può essere molto ridotta e il peso "percepito" (peso meno spinta, detto **peso apparente**) è minore. Per questo gli astronauti si addestrano in piscina a lavorare in condizioni simili all'assenza di peso.

::: esempio
- **Oggetto di 30 litri** tutto immerso in acqua (la sua massa, 70 kg, non serve): $F_A = 1000 \cdot 0{,}030 \cdot 9{,}8 \approx 294\ \mathrm N$ (circa 290 N, a seconda dell'arrotondamento di $g$).
- **Cubo appeso a un filo.** Cubo di lato 10 cm (volume 1 l $= 10^{-3}\ \mathrm{m^3}$) e massa 10 kg, immerso in acqua. Peso $98\ \mathrm N$, spinta $1000 \cdot 10^{-3} \cdot 9{,}8 = 9{,}8\ \mathrm N$. Il filo regge la differenza: $T = 98 - 9{,}8 \approx 88\ \mathrm N$.
- **Pallone tenuto sott'acqua.** Massa 1 kg, volume $5 \cdot 10^{-3}\ \mathrm{m^3}$. Spinta $1000 \cdot 5 \cdot 10^{-3} \cdot 9{,}8 = 49\ \mathrm N$, peso $9{,}8\ \mathrm N$: per tenerlo sotto devo spingere con $49 - 9{,}8 \approx 40\ \mathrm N$.
- **Galleggiante trattenuto.** Galleggiante di densità $500\ \mathrm{kg/m^3}$ e volume 1 m³, tenuto sott'acqua. Spinta di Archimede $1000 \cdot 1 \cdot 9{,}8 = 9800\ \mathrm N$; peso $500 \cdot 9{,}8 = 4900\ \mathrm N$; la forza netta verso l'alto (spinta meno peso), che bisogna contrastare per trattenerlo, è $4900\ \mathrm N$. Il paniere chiama "spinta" proprio questa forza netta.
- **Peso apparente.** Un corpo pesa 27 N in aria e 17 N in acqua: la spinta vale $27 - 17 = 10\ \mathrm N$. È minore del peso (27 N), quindi il corpo **affonda**. Il suo volume è $V = F_A/(\rho g) \approx 1{,}02\ \mathrm l$ e la sua densità $27/10 = 2{,}7$ volte quella dell'acqua (potrebbe essere alluminio).
- **Statua sul fondo del mare.** Massa 70 kg, volume $3{,}0 \cdot 10^4\ \mathrm{cm^3} = 0{,}030\ \mathrm{m^3}$, acqua di mare $1025\ \mathrm{kg/m^3}$. Peso $686\ \mathrm N$, spinta $1025 \cdot 0{,}030 \cdot 9{,}8 \approx 301\ \mathrm N$; per sollevarla serve $F = 686 - 301 \approx 385\ \mathrm N$.
:::

::: esempio
**Spinta dalle forze sulle facce.** Un cubo di lato $L = 0{,}600\ \mathrm m$ e massa 454 kg è appeso a una corda in un liquido di densità $1030\ \mathrm{kg/m^3}$, con la faccia superiore a profondità $L/2 = 0{,}300\ \mathrm m$. Area di una faccia $S = 0{,}36\ \mathrm{m^2}$, $p_0 = 1{,}013 \cdot 10^5\ \mathrm{Pa}$.
1. Faccia superiore: $F_{sup} = (p_0 + \rho g\,0{,}3)S = (101\,300 + 3028) \cdot 0{,}36 \approx 3{,}756 \cdot 10^4\ \mathrm N$, verso il basso.
2. Faccia inferiore (profondità 0,9 m): $F_{inf} = (101\,300 + 9085) \cdot 0{,}36 \approx 3{,}974 \cdot 10^4\ \mathrm N$, verso l'alto.
3. Spinta di Archimede: $F_A = \rho V g = 1030 \cdot 0{,}216 \cdot 9{,}8 \approx 2180\ \mathrm N$, che coincide con $F_{inf} - F_{sup}$.
4. Tensione della corda: $T = mg - F_A = 4449 - 2180 \approx 2270\ \mathrm N$.
:::

## Galleggiamento
Su un corpo immerso agiscono il **peso** (verso il basso) e la **spinta** (verso l'alto). Il confronto decide il moto. Per un corpo **tutto immerso**, di volume $V$ e densità media $\rho_c$, peso $= \rho_c V g$ e spinta $= \rho_{fl} V g$: il confronto si riduce alle **densità**.

| Densità media del corpo | Peso e spinta (corpo tutto immerso) | Cosa succede |
|---|---|---|
| $\rho_c < \rho_{fl}$ | spinta > peso | sale e **galleggia**, con una parte fuori dal fluido |
| $\rho_c = \rho_{fl}$ | spinta = peso | resta fermo dove lo metti (equilibrio indifferente) |
| $\rho_c > \rho_{fl}$ | spinta < peso | **affonda** |

**Condizioni di galleggiamento.** Un corpo galleggia se la sua densità **media** è minore di quella del fluido. Quando galleggia, sale finché la parte immersa sposta un peso di fluido uguale al suo peso; all'equilibrio:
$$\rho_c\,V g = \rho_{fl}\,V_{imm}\,g \quad\Rightarrow\quad \frac{V_{imm}}{V} = \frac{\rho_c}{\rho_{fl}}$$
La **frazione immersa** è il rapporto tra la densità del corpo e quella del fluido; la frazione emersa è $1 - \rho_c/\rho_{fl}$. Per la stabilità, inoltre, il centro di spinta (baricentro della parte immersa) e il baricentro del corpo devono essere sulla stessa verticale.

::: esempio
- **Iceberg.** $\rho_{ghiaccio} = 917$, acqua di mare $1025\ \mathrm{kg/m^3}$: $V_{imm}/V = 917/1025 \approx 0{,}895$. È immerso circa l'89,5%, emerge circa il **10,5%** ("la punta dell'iceberg").
- **Persona in un liquido denso.** Densità del corpo $980\ \mathrm{kg/m^3}$, un terzo emerge, quindi due terzi immersi: $\rho_{liq} = \rho_c\,\dfrac{V}{V_{imm}} = \dfrac{980}{2/3} \approx 1500\ \mathrm{kg/m^3}$.
- **Oggetto di 1 kg e 900 cm³.** Densità $1000/900 \approx 1{,}11\ \mathrm{g/cm^3}$, maggiore di quella dell'acqua: in acqua **affonda**. Se lo si vede galleggiare in un liquido, quel liquido ha densità maggiore di $1{,}11\ \mathrm{g/cm^3}$: **sicuramente non è acqua distillata**.
- **Corpo di 3 kg e 2 litri.** Densità $1{,}5\ \mathrm{kg/l}$, maggiore di $1\ \mathrm{kg/l}$: affonda.
- **Corpo cavo in equilibrio.** Un corpo di volume esterno 1 dm³ con una cavità vuota di 1/3 del volume è in equilibrio tutto immerso in acqua. Spinta: $1000 \cdot 10^{-3} \cdot 9{,}8 = 9{,}8\ \mathrm N$. Il peso è uguale: il materiale occupa $2/3$ del volume, quindi $\rho \cdot \tfrac23 V = \rho_{acqua} V$ e $\rho = 1{,}5 \cdot 10^3\ \mathrm{kg/m^3}$.
:::

### Casi pratici
- **Nave di ferro.** Il ferro è circa 8 volte più denso dell'acqua, eppure la nave galleggia: lo scafo è cavo e contiene aria (stive, cabine). Conta la **densità media** della nave (massa totale diviso volume totale racchiuso dallo scafo), che è minore di quella dell'acqua di mare. Per lo stesso motivo, se un oggetto d'acciaio galleggia, **deve avere una cavità** al suo interno.
- **Mare e piscina.** Il sale disciolto **aumenta la densità** dell'acqua (circa 1025 contro 1000 kg/m³): a parità di volume immerso la spinta è maggiore e si galleggia più facilmente (nel Mar Morto, salatissimo, si galleggia senza sforzo).
- **Due liquidi.** Se un corpo galleggia nel liquido A e affonda nel liquido B, vuol dire che $\rho_B < \rho_c < \rho_A$: **il liquido B è meno denso di A**.
- **Sulla Luna.** Peso e spinta sono **entrambi proporzionali a $g$**: $g$ si semplifica nella condizione di galleggiamento. Un oggetto che galleggia in un recipiente d'acqua sulla Luna resta immerso **della stessa frazione** che sulla Terra.

## Archimede nei gas
Anche l'aria è un fluido: ogni corpo immerso nell'aria riceve una spinta pari al peso dell'aria spostata (piccola, perché l'aria è poco densa).
- **Palloncino a elio.** L'elio è molto meno denso dell'aria (0,16 contro 1,21 kg/m³). La spinta supera il peso del palloncino: le forze **non si annullano**, la risultante è verso l'alto e il palloncino sale.
- **Mongolfiera.** Scaldando l'aria nel pallone, questa si dilata e diventa **meno densa dell'aria fredda** circostante. Il pallone sposta un volume d'aria fredda più pesante dell'aria calda che contiene: riceve una spinta netta verso l'alto.
- **Sulla Luna** non c'è atmosfera: manca il fluido che dà la spinta, quindi una mongolfiera (o un dirigibile) **non può volare**.

::: esempio
**Pallone a elio per tre persone.** Densità dell'elio $0{,}16\ \mathrm{kg/m^3}$, dell'aria $1{,}21\ \mathrm{kg/m^3}$; tre persone da 80 kg; pallone di massa trascurabile. Volume minimo?
1. Condizione: spinta ≥ peso dell'elio + peso delle persone: $\rho_{aria} V g \ge \rho_{He} V g + m g$.
2. $V \ge \dfrac{m}{\rho_{aria} - \rho_{He}} = \dfrac{240}{1{,}21 - 0{,}16} = \dfrac{240}{1{,}05} \approx 229\ \mathrm{m^3}$: ogni m³ "solleva" 1,05 kg. Tra valori approssimati, circa 220–230 m³.
3. Errore tipico: dimenticare il peso dell'elio ($240/1{,}21 \approx 198\ \mathrm{m^3}$, troppo poco).
:::

**Palloncino sott'acqua.** Un palloncino gonfiato portato sott'acqua: scendendo la pressione esterna **aumenta** (Stevino), il gas dentro (comprimibile) viene compresso e il **volume diminuisce**. Di conseguenza diminuisce anche la spinta di Archimede su di esso.

## Collegamento con la dinamica dei fluidi
Due risultati della lezione 32 compaiono già in alcune domande su questa lezione.
- **Continuità**: in un condotto la portata (sezione × velocità) si conserva. Se un condotto di $10\ \mathrm{cm^2}$ si divide in **dieci** capillari da $1\ \mathrm{cm^2}$, la sezione totale resta $10\ \mathrm{cm^2}$: la velocità **non cambia** (1 m/s resta 1 m/s).
- **Bernoulli**: $p + \tfrac12\rho v^2 + \rho g h = \text{cost}$. A quota fissa, se la pressione diminuisce la velocità aumenta. Con il fluido fermo ($v = 0$) resta $p + \rho g h = \text{cost}$, che è la **legge di Stevino**: Stevino è Bernoulli nel caso statico.

::: attenzione
- Nella spinta di Archimede va la densità del **fluido** e il volume **immerso**, non la densità o la massa del corpo.
- La spinta non cambia con la profondità e non dipende dal materiale.
- La pressione "a 50 m" chiede la pressione **totale**: ricorda di aggiungere 1 atm di atmosfera (6 atm, non 5).
- Nel torchio idraulico si guadagna forza, non lavoro.
:::

::: esame
Le chiuse sono quasi tutte calcoli diretti con le formule di questa lezione (pressione di un blocco, profondità da una sovrapressione, sub, torchio, spinta, tensione di un filo, frazione immersa, pallone a elio, edificio con barometro) e domande concettuali (barometro e sfigmomanometro, cranio, paradosso dei bicchieri, sughero e ferro, sasso che affonda, nave, mare, Luna, mongolfiera). Le aperte:
- **Pascal** ("cosa afferma" ed "esempio"): enunciato, dimostrazione con Stevino, torchio idraulico con $F_1/S_1 = F_2/S_2$ e conservazione del lavoro, freni dell'auto.
- **Archimede**: enunciato completo (verso l'alto, peso del fluido spostato, baricentro del fluido spostato), formula, origine dalla differenza di pressione tra faccia inferiore e superiore.
- **Galleggiamento**: confronto peso/spinta, quindi densità media; frazione immersa $\rho_c/\rho_{fl}$; esempi nave e iceberg.
- **Stevino con un esempio**: derivazione dall'equilibrio del cilindretto, $p = p_0 + \rho g h$, esempio del sub o della piscina, vasi comunicanti.
- **Liquidi e gas in Stevino**: densità costante nei liquidi (andamento lineare), variabile nei gas (pressione che cala lentamente e non linearmente; Stevino solo su piccoli dislivelli con densità media).
- **Pressione e densità**: definizioni, unità (Pa, kg/m³), pressione come scalare.
- **Misura della pressione**: barometro di Torricelli (760 mm di Hg), manometro a U ($\Delta p = \rho g h$), sfigmomanometro.
:::

::: sintesi
- $p = F/S$ in pascal; $\rho = m/V$; $1\ \mathrm{atm} \approx 1\ \mathrm{bar} = 760\ \mathrm{mmHg}$.
- Stevino: $dp/dz = -\rho g$, $p = p_0 + \rho g h$; dipende solo dalla profondità (paradosso idrostatico, vasi comunicanti); in acqua +1 atm ogni 10 m.
- Nei gas la densità varia: Stevino solo su piccoli dislivelli.
- Torricelli: $p_{atm} = \rho_{Hg} g\,0{,}76\ \mathrm m$; barometro per l'atmosfera, manometro a U per un fluido.
- Pascal: una variazione di pressione si trasmette inalterata ovunque; torchio $F_1/S_1 = F_2/S_2$, lavoro uguale.
- Archimede: $F_A = \rho_{fl} V_{imm} g$, verso l'alto; non dipende dal materiale né dalla profondità.
- Galleggia chi ha densità media minore del fluido; frazione immersa $= \rho_c/\rho_{fl}$ (iceberg 89,5%); vale anche nei gas (elio, mongolfiera; non sulla Luna).
:::

=== 32 dispense
SLIDES: 32, 33
# Lezione 32 — Dinamica dei fluidi: portata, continuità, Bernoulli

Dopo i fluidi in quiete, i fluidi **in movimento**. Descrivere il moto di un fluido reale (un torrente, una cascata, il vento) è molto difficile, quindi si parte da un modello semplificato, il **fluido ideale**. Per esso valgono due leggi fondamentali: l'**equazione di continuità** (conservazione della massa, cioè della portata) e il **teorema di Bernoulli** (conservazione dell'energia). Da queste seguono l'effetto Venturi, la legge di Torricelli per l'efflusso, la portanza delle ali, il tiro a effetto. Alla fine si torna ai fluidi reali: viscosità, Poiseuille, regime turbolento e numero di Reynolds.

## Il modello di fluido ideale
Le ipotesi del fluido ideale (o perfetto):
- **incomprimibile**: densità uniforme e costante in ogni punto (come nella statica);
- **non viscoso**: nessuna forza dissipativa tra volumi di fluido adiacenti che scorrono;
- **irrotazionale**: niente vortici; una particella trasportata dal fluido trasla senza ruotare su se stessa;
- **moto stazionario** (ipotesi aggiunta per Bernoulli): la velocità in ogni punto non cambia nel tempo.

## Due modi di descrivere il moto: Lagrange ed Eulero
- **Schema lagrangiano**: si segue ogni elementino di fluido lungo il suo cammino, descrivendone la posizione nel tempo $\vec r_i(t)$, come per un sistema di punti materiali. In pratica è come seguire una goccia di colorante immessa nel fluido: nel caso ideale traccia una **linea di corrente**.
- **Schema euleriano** (il più usato): si fissa l'attenzione su un punto (o una sezione) dello spazio e si descrive il **campo di velocità** $\vec v(x, y, z, t)$ che ha il fluido mentre passa in ogni punto.

### Moto stazionario, linee di corrente, tubi di flusso
Il moto è **stazionario** se il campo di velocità **non dipende dal tempo**: osservando un punto fisso, le diverse particelle che vi passano in istanti diversi hanno tutte la stessa velocità. Allora si possono tracciare le **linee di corrente** (o di flusso): linee tangenti in ogni punto alla velocità del fluido. Una particella che passa per un punto di una linea la segue per tutto il percorso: la sua traiettoria **è** la linea di corrente.

In condizioni ideali e stazionarie **le linee di corrente non si intersecano**: se lo facessero, nel punto d'incontro il fluido avrebbe due velocità diverse. Il moto procede quindi per strati contigui e indipendenti: è il **moto laminare**. Un fascio di linee di corrente adiacenti forma un **tubo di flusso**, una specie di condotto ideale le cui pareti non sono attraversate dal fluido.

## Portata
**Definizione.** La portata (volumica) è il **rapporto tra il volume di fluido che attraversa una sezione del condotto in un intervallo di tempo e l'intervallo stesso**: il volume che passa ogni secondo.

$$Q = \frac{V}{\Delta t} = S\,v$$
dove:
- $Q$ = portata volumica (m³/s); dimensioni $[L^3T^{-1}]$
- $V$ = volume che attraversa la sezione (m³)
- $\Delta t$ = intervallo di tempo (s)
- $S$ = area della sezione (m²)
- $v$ = velocità del fluido, perpendicolare alla sezione (m/s)

**Perché $Q = Sv$.** In un tempo $\Delta t$ il fluido che attraversa la sezione avanza di $v\,\Delta t$: il volume passato è un cilindro di base $S$ e altezza $v\,\Delta t$, cioè $V = S\,v\,\Delta t$. Dividendo per $\Delta t$: $Q = Sv$.

Conseguenza diretta: in due tubi di **uguale sezione**, se in uno l'acqua scorre a **velocità doppia**, la sua **portata è doppia**.

Conversioni utili: $1\ \mathrm{l/s} = 10^{-3}\ \mathrm{m^3/s} = 1000\ \mathrm{cm^3/s}$; quindi $0{,}001\ \mathrm{m^3/s} = 1\ \mathrm{l/s} = 60\ \mathrm{l/min}$.

::: esempio
- **Secchio da 30 litri** riempito in 1 minuto: $Q = 30\ \mathrm l / 60\ \mathrm s = 0{,}5\ \mathrm{l/s} = 500\ \mathrm{cm^3/s}$.
- **Vasca da 1 m³** con un rubinetto da 2 l/s: $t = V/Q = 1000\ \mathrm l / 2\ \mathrm{l/s} = 500\ \mathrm s \approx 8{,}3$ minuti, cioè **meno di dieci minuti**.
- **Velocità all'ugello.** Portata 0,5 l/s da un ugello di $20\ \mathrm{mm^2}$: $v = \dfrac{Q}{S} = \dfrac{0{,}5 \cdot 10^{-3}}{20 \cdot 10^{-6}} = 25\ \mathrm{m/s}$.
- **Tubo da giardino.** Tubo di diametro 2,0 cm che riempie un secchio da 20,0 l in un minuto. $Q = 20 \cdot 10^{-3}/60 \approx 3{,}33 \cdot 10^{-4}\ \mathrm{m^3/s}$; $S = \pi r^2 = \pi (0{,}01)^2 \approx 3{,}14 \cdot 10^{-4}\ \mathrm{m^2}$; $v = Q/S \approx 1{,}06$, cioè **circa 1 m/s**. (Attenzione: il raggio è metà del diametro.)
- **Aorta.** Raggio 1,0 cm, velocità del sangue 30 cm/s: $Q = \pi r^2 v = \pi \cdot 10^{-4} \cdot 0{,}3 \approx 9 \cdot 10^{-5}\ \mathrm{m^3/s} = 0{,}00009\ \mathrm{m^3/s}$ (circa 5 litri al minuto).
:::

## Equazione di continuità
Consideriamo un tubo di flusso a sezione variabile, abbastanza sottile da poter considerare uniforme la velocità su ogni sezione. Due sezioni $S_1$ e $S_2$, dove il fluido ha velocità $v_1$ e $v_2$.

**Derivazione.**
1. In un tempo $dt$ attraversa $S_1$ la massa $dm_1 = \rho\,S_1 v_1\,dt$ e attraversa $S_2$ la massa $dm_2 = \rho\,S_2 v_2\,dt$.
2. Il moto è stazionario e il fluido è incomprimibile: tra le due sezioni non si accumula né si crea fluido, e dalle pareti del tubo di flusso non entra né esce niente. Quindi la massa che entra è uguale a quella che esce: $dm_1 = dm_2$.
3. Semplificando $\rho$ (costante) e $dt$:

$$S_1 v_1 = S_2 v_2 \qquad\Longleftrightarrow\qquad Q = S\,v = \text{costante}$$
dove:
- $S_1, S_2$ = aree delle due sezioni (m²)
- $v_1, v_2$ = velocità del fluido nelle due sezioni (m/s)

**Significato.** In un fluido ideale che scorre in un condotto la **portata si conserva** lungo il tubo di flusso. Velocità e sezione sono **inversamente proporzionali**: dove il tubo si **stringe** il fluido **accelera**, dove si **allarga** **rallenta**. Graficamente, nei restringimenti le linee di corrente si **infittiscono**.

### Attenzione al raggio
Per un tubo circolare $S = \pi r^2$: se il raggio (o il diametro) cambia di un fattore $k$, la sezione cambia di $k^2$ e la velocità di $1/k^2$.

| Cambio | Sezione | Velocità |
|---|---|---|
| sezione dimezzata | $\times\tfrac12$ | $\times 2$ (raddoppia) |
| sezione da 3 m² a 1 m² (con $v = 1\ \mathrm{m/s}$) | $\times\tfrac13$ | $\times 3$ (diventa 3 m/s) |
| raggio dimezzato | $\times\tfrac14$ | $\times 4$ ($v \to 4v$) |
| raggio quadruplicato | $\times 16$ | $\times\tfrac1{16}$ ($v \to v/16$) |
| condotto da 10 cm² diviso in 10 capillari da 1 cm² | totale invariato | invariata |

::: esempio
**Il getto del rubinetto si assottiglia.** L'acqua che scende da un rubinetto accelera per gravità: la sua velocità aumenta cadendo. Poiché la **portata si conserva** ($Sv$ costante), la sezione del getto deve diminuire: il getto si restringe verso il basso.
:::

## Teorema di Bernoulli
È la legge più generale del moto di un fluido ideale in presenza di gravità. In sostanza è la **conservazione dell'energia** applicata al fluido.

**Enunciato.** In un fluido ideale (incomprimibile, non viscoso) in **moto stazionario**, lungo un tubo di flusso (in ogni punto del condotto) resta costante la quantità

$$p + \tfrac12\rho v^2 + \rho g h = \text{costante}$$
dove:
- $p$ = pressione del fluido nel punto (Pa)
- $\rho$ = densità del fluido (kg/m³)
- $v$ = velocità del fluido nel punto (m/s)
- $g$ = accelerazione di gravità (m/s²)
- $h$ = quota del punto rispetto a un livello di riferimento (m)

Tra due sezioni 1 e 2: $p_1 + \tfrac12\rho v_1^2 + \rho g h_1 = p_2 + \tfrac12\rho v_2^2 + \rho g h_2$.

Ogni termine è un'**energia per unità di volume** (J/m³, che è lo stesso che Pa):
- $p$: lavoro fatto dalle forze di pressione (energia "di pressione");
- $\tfrac12\rho v^2$: energia cinetica per unità di volume (pressione dinamica);
- $\rho g h$: energia potenziale gravitazionale per unità di volume.

### Dimostrazione (teorema dell'energia cinetica)
Seguiamo il fluido che all'istante $t$ occupa il tratto di tubo compreso tra la sezione $S_1$ (a monte, quota $h_1$, pressione $p_1$, velocità $v_1$) e la sezione $S_2$ (a valle, quota $h_2$, $p_2$, $v_2$). Dopo un tempo $dt$ questo fluido si è spostato: la coda è avanzata di $v_1 dt$, la testa di $v_2 dt$.
1. **Volume spostato.** Per la continuità, il volumetto che lascia la zona a monte, $S_1 v_1 dt$, è uguale a quello che entra a valle, $S_2 v_2 dt$: chiamiamolo $dV$ (massa $dm = \rho\,dV$).
2. **Lavoro delle forze di pressione.** A monte il fluido che sta dietro spinge in avanti con forza $p_1 S_1$, che compie lavoro $p_1 S_1 v_1 dt = p_1\,dV$. A valle il fluido davanti si oppone con forza $p_2 S_2$, che compie lavoro $-p_2 S_2 v_2 dt = -p_2\,dV$. Totale: $(p_1 - p_2)\,dV$.
3. **Lavoro della gravità.** La parte di fluido nel tratto centrale non cambia; l'effetto netto è come se la massa $dm$ fosse stata portata dalla quota $h_1$ alla quota $h_2$: $W_g = -\rho\,dV\,g\,(h_2 - h_1)$.
4. **Variazione di energia cinetica.** Il moto è stazionario: il fluido nel tratto comune (tra le posizioni iniziale e finale) ha la stessa energia cinetica prima e dopo, e si elimina dalla differenza. Resta la differenza tra il volumetto finale a valle e quello iniziale a monte: $\Delta K = \tfrac12\rho\,dV\,(v_2^2 - v_1^2)$.
5. **Teorema dell'energia cinetica** ($W_{tot} = \Delta K$), dove la viscosità è nulla e quindi non ci sono altri lavori:
$$(p_1 - p_2)\,dV - \rho g\,(h_2 - h_1)\,dV = \tfrac12\rho\,(v_2^2 - v_1^2)\,dV$$
6. Divido per $dV$ e porto a sinistra i termini con l'indice 1, a destra quelli con l'indice 2:
$$p_1 + \tfrac12\rho v_1^2 + \rho g h_1 = p_2 + \tfrac12\rho v_2^2 + \rho g h_2$$
Valendo per due sezioni qualsiasi, la somma è costante lungo tutto il tubo. ∎

### Ipotesi necessarie e non necessarie
Necessarie: fluido **incomprimibile**, **non viscoso** (altrimenti parte dell'energia si dissipa), **moto stazionario** (e laminare, senza vortici). **Non** è necessario che il condotto sia **orizzontale**: il termine $\rho g h$ serve proprio a tener conto delle differenze di quota.

## Casi notevoli del teorema di Bernoulli
### 1. Condotto orizzontale: effetto Venturi
Se $h$ è costante il termine $\rho g h$ è uguale ovunque e si semplifica:
$$p + \tfrac12\rho v^2 = \text{costante}$$
**Dove la velocità è maggiore, la pressione è minore; dove la velocità è minore, la pressione è maggiore.**

Combinando con la continuità, in un condotto orizzontale a sezione variabile:
- **sezione piccola → velocità alta → pressione bassa**;
- **sezione grande → velocità bassa → pressione alta**.

È l'**effetto Venturi**. Il **tubo di Venturi** (un condotto con una strozzatura e due manometri) sfrutta questa differenza di pressione per misurare la velocità o la portata del fluido. Sullo stesso principio funzionano il vaporizzatore dei profumi e il vecchio carburatore.

::: esempio
**Restringimento di un tubo.** Acqua in un tubo orizzontale; nel tratto largo $v_1 = 1\ \mathrm{m/s}$, $p_1 = 2{,}0 \cdot 10^5\ \mathrm{Pa}$; il raggio si dimezza nel tratto stretto.
1. Continuità: sezione $\times\tfrac14$, quindi $v_2 = 4\ \mathrm{m/s}$.
2. Bernoulli orizzontale: $p_2 = p_1 + \tfrac12\rho(v_1^2 - v_2^2) = 2{,}0 \cdot 10^5 + 500\,(1 - 16) = 2{,}0 \cdot 10^5 - 7500 = 1{,}925 \cdot 10^5\ \mathrm{Pa}$.

Nel restringimento la velocità è **aumentata** e la pressione è **diminuita**.
:::

::: esempio
**Tubo che sbocca in atmosfera.** Acqua in un tubo orizzontale; esce in atmosfera a destra con $v_2 = 15\ \mathrm{m/s}$; diametro di ingresso 5,0 cm, di uscita 3,0 cm.
(a) Portata: $Q = \pi (0{,}015)^2 \cdot 15 \approx 1{,}06 \cdot 10^{-2}\ \mathrm{m^3/s}$; in 10 minuti (600 s) escono $V \approx 6{,}4\ \mathrm{m^3}$ (circa 6 m³).
(b) Continuità: $v_1 = v_2 \left(\dfrac{3{,}0}{5{,}0}\right)^2 = 15 \cdot 0{,}36 = 5{,}4\ \mathrm{m/s}$.
(c) Bernoulli (orizzontale), con $p_2 = p_{atm}$: $p_1 = p_{atm} + \tfrac12\rho(v_2^2 - v_1^2) = 1{,}013 \cdot 10^5 + 500\,(225 - 29{,}2) \approx 1{,}013 \cdot 10^5 + 0{,}98 \cdot 10^5 \approx 2{,}0 \cdot 10^5\ \mathrm{Pa}$.
:::

### 2. Fluido fermo: la legge di Stevino
Se il fluido è in quiete, $v = 0$ ovunque e resta
$$p + \rho g h = \text{costante} \quad\Rightarrow\quad p_1 - p_2 = \rho g\,(h_2 - h_1)$$
che è la **legge di Stevino**: la pressione cresce scendendo, di $\rho g$ per ogni metro. Quindi **Stevino è il caso statico di Bernoulli**: equivale all'equazione di Bernoulli con il termine cinetico nullo.

### 3. Efflusso da un foro: teorema di Torricelli
Un serbatoio aperto ha un piccolo foro laterale a profondità $h$ sotto il pelo libero.
1. Punto 1 sulla superficie libera, punto 2 nel getto appena fuori dal foro. In entrambi c'è la **pressione atmosferica**: $p_1 = p_2 = p_{atm}$.
2. Il foro è piccolo rispetto alla superficie del serbatoio: per la continuità il livello scende lentissimo, $v_1 \approx 0$.
3. Bernoulli: $p_{atm} + 0 + \rho g h = p_{atm} + \tfrac12\rho v^2 + 0$, quindi

$$v = \sqrt{2gh}$$
dove $v$ = velocità di uscita (m/s), $h$ = profondità del foro sotto la superficie libera (m). È la stessa velocità che avrebbe un sasso caduto da fermo dall'altezza $h$. Il getto esce perpendicolare alla parete, quindi orizzontale.

::: esempio
**Foro a 30 cm.** $v = \sqrt{2 \cdot 9{,}8 \cdot 0{,}30} = \sqrt{5{,}88} \approx 2{,}4\ \mathrm{m/s}$.
:::

::: esempio
**Gittata del getto.** Serbatoio pieno fino a $H = 40\ \mathrm{cm}$; foro a profondità $h = 10\ \mathrm{cm}$.
(a) Il getto esce orizzontale con $v = \sqrt{2gh}$ e deve cadere di $H - h$: tempo di caduta $t = \sqrt{2(H - h)/g}$. Distanza: $x = v\,t = \sqrt{2gh}\sqrt{\dfrac{2(H-h)}{g}} = 2\sqrt{h(H - h)} = 2\sqrt{10 \cdot 30} \approx 35\ \mathrm{cm}$.
(b) Elevo al quadrato: $x^2 = 4h(H - h)$, cioè $4h^2 - 4Hh + x^2 = 0$. Le soluzioni sono $h = 10\ \mathrm{cm}$ e $h = 30\ \mathrm{cm}$: un foro a 30 cm di profondità atterra nello stesso punto.
(c) Gittata massima: derivo $4h(H-h)$ rispetto a $h$ e pongo zero: $4H - 8h = 0$, $h = H/2 = 20\ \mathrm{cm}$, con $x_{max} = 2\sqrt{20 \cdot 20} = 40\ \mathrm{cm} = H$.
:::

## Applicazioni
### Portanza aerodinamica
La **portanza** è la forza verso l'alto che l'aria esercita sull'ala di un aereo in moto (o di un uccello). Il fenomeno reale è complesso (coinvolge anche effetti dei fluidi reali), ma il principio vale già per un flusso laminare ideale e si stima con Bernoulli.
1. Il **profilo dell'ala** (curvo sopra, più piatto sotto, leggermente inclinato) è progettato in modo che l'aria **scorra più veloce sul bordo superiore**: le linee di corrente si addensano sopra l'ala. Se l'aria arriva con velocità $v$, sopra ha velocità $v + \Delta v$ e sotto $v - \Delta v$.
2. Bernoulli (dislivello trascurabile): dove la velocità è maggiore la pressione è minore. Quindi la pressione sopra l'ala è **minore** di quella sotto.
3. La differenza di pressione è
$$\Delta p = p_{sotto} - p_{sopra} = \tfrac12\rho\left[(v + \Delta v)^2 - (v - \Delta v)^2\right] = 2\rho\,v\,\Delta v$$
4. Moltiplicata per l'area dell'ala dà la portanza:
$$F = \Delta p\,S = \tfrac12\rho\left(v_{sopra}^2 - v_{sotto}^2\right)S$$
dove $F$ = portanza (N), $\rho$ = densità dell'aria (kg/m³), $v_{sopra}, v_{sotto}$ = velocità dell'aria sopra e sotto l'ala (m/s), $S$ = superficie dell'ala (m²).

La differenza di pressione tra le due facce dell'ala è quindi una conseguenza del **teorema di Bernoulli**. La portanza cresce con la velocità: per questo l'aereo deve prendere velocità sulla pista prima di staccarsi.

::: esempio
Ala di 20 m²; aria ($1{,}2\ \mathrm{kg/m^3}$) a 70 m/s sopra e 60 m/s sotto. $\Delta p = \tfrac12 \cdot 1{,}2\,(4900 - 3600) = 780\ \mathrm{Pa}$; $F = 780 \cdot 20 = 15\,600\ \mathrm N$, abbastanza per sostenere circa 1,6 tonnellate.
:::

### Il tiro "a effetto" (effetto Magnus)
Un calciatore calcia il pallone non al centro ma di lato, così il pallone **ruota su se stesso** mentre avanza. Nel riferimento del pallone l'aria gli scorre addosso all'indietro; la superficie ruvida in rotazione trascina con sé uno strato d'aria.
- Sul lato in cui la superficie ruota **nello stesso verso** dell'aria che scorre, l'aria viene accelerata: velocità **maggiore**.
- Sul lato opposto la superficie va **contro** l'aria: velocità **minore**.

Per Bernoulli, sul lato dove l'aria è più veloce la **pressione è minore**. La differenza di pressione spinge il pallone **verso il lato a pressione minore**, perpendicolarmente alla direzione del moto: la traiettoria **curva**. È la stessa idea della portanza; lo sfruttano anche il tennis (palla "tagliata") e il golf.

### Condotto con pareti elastiche: l'aneurisma
In un vaso sanguigno le pareti non sono rigide. Se in un punto si forma un **allargamento** (aneurisma):
1. la sezione aumenta, quindi per la continuità il sangue **rallenta**;
2. per Bernoulli, dove la velocità cala la **pressione aumenta**;
3. la pressione maggiore spinge sulle pareti elastiche e **allarga ancora di più** la sezione.

La pressione nel vaso cambia in modo da **peggiorare le cose**: il fenomeno si autoalimenta e la parete rischia di rompersi.

## Fluidi reali
Nei fluidi reali c'è la viscosità (lezione 30) e le leggi del fluido ideale valgono solo in modo approssimato.
- In un tubo orizzontale di sezione costante la pressione **cala** lungo il tubo (perdita di carico), mentre per Bernoulli resterebbe costante: parte dell'energia si dissipa in calore.
- **Legge di Poiseuille** (moto laminare in un condotto di raggio $R$ e lunghezza $L$):
$$Q = \frac{\pi R^4}{8\eta}\,\frac{\Delta p}{L}$$
dove $Q$ = portata (m³/s), $\eta$ = viscosità (Pa·s), $\Delta p$ = differenza di pressione ai capi (Pa). Il profilo delle velocità è parabolico e la portata dipende da $R^4$.

### Numero di Reynolds
Il **numero di Reynolds** è un numero puro, empirico, che dice se il moto di un fluido reale in un condotto è **laminare** o **turbolento**:
$$Re = \frac{\rho\,v\,R}{\eta}$$
dove:
- $\rho$ = densità del fluido (kg/m³)
- $v$ = velocità media del fluido (m/s)
- $R$ = raggio del condotto (m)
- $\eta$ = viscosità (Pa·s)

Confronta gli effetti dell'inerzia del fluido (numeratore: densità e velocità) con quelli della viscosità (denominatore), che tende a mantenere ordinati gli strati. Con il raggio: **laminare per $Re < 1000$**, **turbolento per $Re > 2000$–$10\,000$**; in mezzo c'è un'ampia zona di transizione che dipende dal condotto e dal fluido. (Con il diametro, soglie tipiche circa 2000 e 3000.) Velocità alte, tubi larghi, fluidi densi e poco viscosi favoriscono la turbolenza.

::: esempio
Acqua ($\rho = 1000\ \mathrm{kg/m^3}$, $\eta = 10^{-3}\ \mathrm{Pa\,s}$) a $v = 0{,}1\ \mathrm{m/s}$ in un tubo di raggio $1\ \mathrm{cm}$: $Re = \dfrac{1000 \cdot 0{,}1 \cdot 0{,}01}{10^{-3}} = 1000$, al limite del laminare. A 1 m/s, $Re = 10\,000$: turbolento.
:::

### Regime turbolento
Oltre la velocità critica il moto diventa **vorticoso**, caotico, con vortici che mescolano gli strati. In questo regime **molte delle leggi della meccanica dei fluidi viste finora smettono di essere valide**: Bernoulli (che richiede moto stazionario e laminare) e Poiseuille non valgono più. Per mantenere il flusso serve una differenza di pressione che cresce con il **quadrato della velocità**, e la resistenza su un oggetto diventa proporzionale a $v^2$.

::: attenzione
- Errore tipico: pensare che dove il tubo è più stretto la pressione sia più alta. È il **contrario**: nel restringimento la velocità sale e la pressione scende.
- La velocità dipende dal **quadrato** del raggio: raggio dimezzato → velocità ×4, non ×2.
- Bernoulli **non** richiede un condotto orizzontale; richiede fluido ideale e moto stazionario.
- Alcune domande parlano di "regime turbolento" ma si aspettano lo stesso la risposta di Bernoulli (pressione più alta dove la velocità è minore): a rigore Bernoulli vale solo in regime laminare.
:::

::: esame
Le chiuse chiedono la definizione di portata, la portata in due tubi con velocità diverse, i calcoli con $Q = V/\Delta t = Sv$ (secchio, vasca, ugello, aorta, conversione in l/min), la continuità (sezione dimezzata, 3 m² → 1 m², raggio dimezzato o quadruplicato, getto che si assottiglia), il legame pressione-velocità (pressione più alta dove la velocità è minore), l'ipotesi non necessaria per Bernoulli (condotto orizzontale), il profilo dell'ala, l'aneurisma, il regime turbolento. Le aperte:
- **Bernoulli** con esempio o casi notevoli: enunciato, ipotesi, significato energetico dei tre termini, dimostrazione con il teorema dell'energia cinetica; casi: orizzontale (Venturi), statico (Stevino), foro (Torricelli $v = \sqrt{2gh}$); esempi: ala, tubo di Venturi.
- **Condotto a sezione variabile**: continuità $S_1v_1 = S_2v_2$ + Bernoulli orizzontale: sezione piccola, velocità alta, pressione bassa.
- **Portata**: definizione, $Q = Sv$, unità m³/s.
- **Portanza** e **tiro a effetto**: aria più veloce da un lato → pressione minore da quel lato → forza verso quel lato.
- **Numero di Reynolds**: formula, significato, soglie laminare/turbolento.
:::

::: sintesi
- Fluido ideale: incomprimibile, non viscoso, irrotazionale; moto stazionario → linee di corrente che non si incrociano (laminare).
- Portata $Q = V/\Delta t = Sv$ (m³/s); $1\ \mathrm{l/s} = 10^{-3}\ \mathrm{m^3/s} = 60\ \mathrm{l/min}$.
- Continuità: $S_1v_1 = S_2v_2$; sezione dimezzata → $v \times 2$; raggio dimezzato → $v \times 4$.
- Bernoulli: $p + \tfrac12\rho v^2 + \rho gh = \text{cost}$ (energia per unità di volume); vale anche in tubi non orizzontali.
- Tubo orizzontale: pressione più alta dove la velocità è più bassa (Venturi); $v = 0$ → Stevino; foro → Torricelli $v = \sqrt{2gh}$.
- Applicazioni: portanza $F = \tfrac12\rho(v_{sopra}^2 - v_{sotto}^2)S$, effetto Magnus, aneurisma che peggiora.
- Fluidi reali: Poiseuille $Q \propto R^4$; Reynolds $Re = \rho vR/\eta$ (laminare < 1000, turbolento > 2000–10 000); in turbolenza Bernoulli e Poiseuille non valgono.
:::

=== 33 dispense
SLIDES: 34, 35, 36, 38, 41
# Lezione 33 — Temperatura, sistemi termodinamici e calore

Con questa lezione inizia la **termodinamica**. In meccanica l'energia meccanica si conserva quando agiscono solo forze conservative; con forze non conservative come l'attrito, invece, il lavoro negativo di queste forze fa diminuire l'energia meccanica. L'esperienza mostra che, insieme a questa diminuzione, compare un fenomeno **termico**: i corpi si **scaldano** (strofinando le mani, frenando un'auto). La termodinamica è la parte della fisica che studia i **fenomeni termici** (l'evoluzione dello stato termico di un sistema) e il loro legame con l'energia meccanica e con le altre forme di energia. Qui introduciamo i concetti di base: sistema termodinamico e parametri di stato, equilibrio, temperatura (con il principio zero e le scale), dilatazione termica, calore (calore specifico e latente), lavoro di un gas ed energia interna di un gas perfetto.

## Sistemi termodinamici
Un **sistema macroscopico** è un sistema osservabile direttamente con i nostri sensi. È fatto di un numero enorme di costituenti microscopici (atomi, molecole) che ne determinano le proprietà; ma per descriverne il comportamento spesso non serve conoscere i dettagli microscopici: bastano poche grandezze **macroscopiche d'insieme**, come **pressione, volume, densità, temperatura, quantità di sostanza**. Queste si chiamano **variabili termodinamiche** o **parametri di stato**.

Un sistema macroscopico descritto tramite i suoi parametri di stato si chiama **sistema termodinamico**. Può essere anche una parte di un sistema più grande, o l'unione di due sistemi. Tutto ciò con cui il sistema può interagire costituisce l'**ambiente** (uno o più altri sistemi). I sistemi con cui un sistema non isolato scambia energia si chiamano **sorgenti**; se le sorgenti non scambiano energia con altro, sistema e sorgenti insieme formano un sistema isolato.

### Sistemi aperti, chiusi, isolati
| Sistema | Scambia energia | Scambia materia | Esempio |
|---|---|---|---|
| Aperto | sì | sì | pentola d'acqua senza coperchio (esce vapore, entra calore) |
| Chiuso | sì | no | pentola con coperchio a tenuta; gas in un cilindro con pistone |
| Isolato | no | no | thermos ideale; l'universo |

### Stato ed equilibrio termodinamico
Lo **stato** di un sistema è noto quando sono noti i valori dei suoi parametri di stato. Se i parametri sono costanti nel tempo lo stato è **stazionario**. Un sistema chiuso è in **equilibrio termodinamico** quando è contemporaneamente:
- in **equilibrio meccanico** con l'ambiente: le forze che l'ambiente esercita sul sistema sono bilanciate da quelle che il sistema esercita sull'ambiente (per esempio pressione del gas uguale a quella esterna sul pistone);
- in **equilibrio termico**: la temperatura è uniforme in tutte le sue parti e uguale a quella dell'ambiente;
- in **equilibrio chimico**: non avvengono reazioni che cambiano la sua composizione.

Un sistema lasciato **isolato abbastanza a lungo** raggiunge uno stato di equilibrio termodinamico. L'uniformità dei parametri si ottiene più facilmente se il sistema non è troppo esteso.

### Parametri estensivi e intensivi
- **Estensivi**: dipendono dalla dimensione del sistema e sono **additivi**: unendo due sistemi si sommano. Esempi: massa, volume, energia, quantità di sostanza.
- **Intensivi**: descrivono proprietà **locali**, non dipendono dalla quantità di sistema e **non si sommano**. Esempi: pressione, temperatura, densità. In un sistema omogeneo in equilibrio hanno lo stesso valore nel sistema intero e in ogni sua parte: unendo due litri d'acqua a 20 °C si ottengono due litri a 20 °C, non a 40 °C.

Dividendo una grandezza estensiva per la massa o per il volume si ottiene una grandezza **specifica**, che è intensiva (la densità è massa/volume). Riferite a una mole si chiamano grandezze **molari**.

## La temperatura
Le sensazioni di caldo e freddo sono tra le prime che impariamo, ma sono soggettive e spesso ingannano (una maniglia di metallo sembra più fredda di una di legno alla stessa temperatura). La fisica ha bisogno di una definizione oggettiva. La temperatura è il parametro principale dello stato termico ed è una delle **grandezze fondamentali** del Sistema Internazionale.

**Definizione (operativa).** La temperatura è **la proprietà fisica che si misura con un termometro**. Una definizione operativa dice **come si misura** la grandezza. La procedura di misura si basa su tre cardini:
1. il **principio zero della termodinamica** (che garantisce che la misura abbia senso);
2. la relazione diretta tra lo stato termico di un corpo e una sua proprietà **non termica** facilmente misurabile (meccanica, come la lunghezza di una colonna di liquido o di una sbarra; elettrica, come la resistenza), che permette di costruire uno strumento, il **termometro**;
3. la corrispondenza tra fenomeni termici **ripetibili** (come i passaggi di stato) e lo stato termico, che fissa i punti per **tarare** lo strumento e costruire una scala.

### Principio zero della termodinamica
Si osserva sperimentalmente che due corpi in stati termici diversi, messi a contatto (o comunque in grado di interagire termicamente), cambiano i propri parametri finché raggiungono uno stato termico comune e stabile, l'**equilibrio termico**.

**Enunciato.** Se due sistemi sono in equilibrio termico con un terzo sistema, allora sono in equilibrio termico tra loro.

È una proprietà transitiva, e su di essa si fonda il termometro: il "terzo sistema" è il termometro stesso. Se il termometro, messo a contatto con $A$ e poi con $B$, dà la stessa lettura, allora $A$ e $B$ sono in equilibrio termico tra loro; uno strumento deve misurare la stessa temperatura su due corpi in equilibrio termico tra loro. Il principio fu formalizzato solo nella prima metà del Novecento, quando il primo e il secondo principio erano già noti; lo si è chiamato "zero" per sottolineare che logicamente viene **prima** di essi.

### Scale di temperatura
**Scala Celsius.** Alcuni fenomeni avvengono sempre alla stessa temperatura: l'acqua al livello del mare bolle sempre alla stessa temperatura e congela sempre alla stessa temperatura. Si assegna il valore **0** alla temperatura dell'acqua in equilibrio con il ghiaccio e **100** a quella dell'acqua in ebollizione, al livello del mare. Il **grado Celsius** (°C) è la **centesima parte** di questo intervallo.

**Scala assoluta (Kelvin, SI).** I punti della scala Celsius dipendono dalla pressione ambiente (in montagna l'acqua bolle a meno di 100 °C). Esiste invece uno stato con una temperatura ben determinata: il **punto triplo** dell'acqua, in cui coesistono in equilibrio solido, liquido e vapore. Inoltre nessun sistema fisico può scendere sotto un valore limite, lo **zero assoluto**. La scala assoluta assegna:
- **0 K** allo zero assoluto;
- **273,16 K** al punto triplo dell'acqua.

Il **kelvin** (K) è la parte su 273,16 di questo intervallo. La temperatura assoluta è **sempre positiva**. La conversione è

$$T(\mathrm K) = t(°\mathrm C) + 273{,}15$$

quindi un intervallo di **1 K è uguale a un intervallo di 1 °C** (le due scale sono solo spostate). Esempi: lo zero assoluto è −273,15 °C; il ghiaccio fonde a 273,15 K; l'acqua bolle a 373,15 K; una temperatura ambiente di 27 °C è circa **300 K**.

**Scala Fahrenheit** (paesi anglosassoni): il ghiaccio fonde a 32 °F e l'acqua bolle a 212 °F; tra i due ci sono 180 gradi Fahrenheit contro 100 Celsius, quindi

$$t(°\mathrm F) = \tfrac95\,t(°\mathrm C) + 32$$

Per esempio 37 °C $= \tfrac95 \cdot 37 + 32 = 98{,}6\ °\mathrm F$.

::: esempio
**Due scale lineari inventate.** Nella scala X l'acqua congela a 125,0 °X e bolle a 375 °X; nella scala Y congela a −70,00 °Y e bolle a −30,00 °Y. A quanti °X corrispondono 50,00 °Y?
1. Il legame è lineare: $T_X = m\,T_Y + c$.
2. Impongo i due punti: $125 = -70\,m + c$ e $375 = -30\,m + c$. Sottraendo: $250 = 40\,m$, quindi $m = 6{,}25$; poi $c = 125 + 70 \cdot 6{,}25 = 562{,}5$.
3. $T_X = 6{,}25 \cdot 50 + 562{,}5 = 875\ °\mathrm X$.

Lo stesso metodo dà la formula Celsius-Fahrenheit.
:::

## Dilatazione termica
Un termometro sfrutta una proprietà che cambia con la temperatura. Il vecchio termometro a mercurio usava la **dilatazione termica**: quasi tutti i corpi si allungano (e aumentano di volume) quando si scaldano. In una sbarra sottile e lunga l'effetto è facile da misurare. La relazione non è perfettamente lineare per tutti i materiali, ma la descrizione lineare è una buona approssimazione in ampi intervalli attorno alla temperatura ambiente:

$$\Delta l = \alpha\,l\,\Delta T \qquad\qquad \Delta V = \beta\,V\,\Delta T,\quad \beta \approx 3\alpha$$
dove:
- $\Delta l$ = allungamento (m)
- $l$ = lunghezza iniziale (m)
- $\alpha$ = coefficiente di dilatazione **lineare** (1/K, cioè dimensioni $[T^{-1}]$ di temperatura)
- $\Delta V$ = aumento di volume (m³); $V$ = volume iniziale (m³)
- $\beta$ = coefficiente di dilatazione **volumica** (1/K)
- $\Delta T$ = variazione di temperatura (K o °C, è lo stesso)

**Perché $\beta = 3\alpha$.** Un cubo di lato $l$ diventa di lato $l(1 + \alpha\Delta T)$; il volume diventa $l^3(1 + \alpha\Delta T)^3 \approx l^3(1 + 3\alpha\Delta T)$, trascurando i termini con $(\alpha\Delta T)^2$ che sono piccolissimi. Allo stesso modo una superficie si dilata con coefficiente $2\alpha$.

Valori tipici: acciaio $\alpha \approx 11 \cdot 10^{-6}\ \mathrm K^{-1}$, rame $\approx 17 \cdot 10^{-6}$, alluminio $\approx 23 \cdot 10^{-6}$. Per questo nei binari e nei ponti si lasciano giunti di dilatazione.

::: esempio
**Moneta di rame.** Scaldandola di 100 °C il suo diametro aumenta dello 0,18%.
(a) Area di una faccia ($\propto d^2$): aumenta del doppio, $0{,}36\%$.
(b) Spessore: si dilata come il diametro, $0{,}18\%$.
(c) Volume: coefficiente triplo, $0{,}54\%$.
(d) Massa: non cambia, $0\%$ (la dilatazione cambia il volume, non la quantità di materia; cambia invece la densità).
(e) $\alpha = \dfrac{\Delta d/d}{\Delta T} = \dfrac{0{,}0018}{100} = 1{,}8 \cdot 10^{-5}\ °\mathrm C^{-1}$.
:::

::: esempio
**Misura con un righello che si dilata.** Con un righello d'acciaio ($\alpha_r = 11 \cdot 10^{-6}\ °\mathrm C^{-1}$) si misura una bacchetta: 20,05 cm a 20 °C. A 270 °C (righello e bacchetta nel forno) si legge 20,11 cm. Coefficiente della bacchetta?
1. Anche il righello si è dilatato: ogni sua "unità" di 1 cm è diventata lunga $u(1 + \alpha_r\Delta T)$, con $\Delta T = 250\ °\mathrm C$.
2. La lunghezza vera della bacchetta calda è $L' = 20{,}11 \cdot (1 + 11 \cdot 10^{-6} \cdot 250) = 20{,}11 \cdot 1{,}00275 \approx 20{,}165\ \mathrm{cm}$.
3. $\Delta L = 20{,}165 - 20{,}05 = 0{,}115\ \mathrm{cm}$; $\alpha = \dfrac{\Delta L}{L\,\Delta T} = \dfrac{0{,}115}{20{,}05 \cdot 250} \approx 2{,}3 \cdot 10^{-5}\ °\mathrm C^{-1}$.
:::

## Il calore
Due corpi a temperature diverse messi a contatto raggiungono l'equilibrio termico; un sistema non isolato si porta alla temperatura dell'ambiente. Si intuisce che **qualcosa passa** da un sistema all'altro: è il **calore**.

**Definizione.** Il calore è la grandezza scambiata tra due sistemi che ne fa variare la temperatura, per esempio per raggiungere l'equilibrio termico. Oggi sappiamo che è **energia in transito**, che passa spontaneamente **dal corpo più caldo a quello più freddo** finché le temperature si uguagliano. È una grandezza **scalare**, si misura in **joule**.

Unità storica: la **caloria** (cal), definita come la quantità di calore da sottrarre a **1 grammo d'acqua** per portarlo da 15,5 °C a 14,5 °C (cioè per variarne la temperatura di 1 °C). $1\ \mathrm{cal} \approx 4{,}186\ \mathrm J$; la "caloria" degli alimenti è la kilocaloria.

**Convenzione dei segni**: è **positivo** il calore **assorbito** dal sistema (quello che ne fa salire la temperatura), negativo quello ceduto.

::: attenzione
Temperatura e calore **non** sono la stessa cosa. La temperatura è una proprietà dello **stato** di un corpo (intensiva); il calore è **energia scambiata** tra corpi a temperature diverse. Un corpo "ha" una temperatura, ma non "contiene" calore. Una vasca d'acqua tiepida può cedere molto più calore di una tazza d'acqua bollente, pur avendo temperatura minore.
:::

### Capacità termica e calore specifico
Per alzare di $\Delta T$ la temperatura di un solido o di un liquido (a volume e pressione costanti) bisogna fornire un calore $Q$. Si osserva che per un intervallo doppio serve un calore doppio: $Q$ è proporzionale a $\Delta T$. La costante di proporzionalità è la **capacità termica** del corpo:
$$Q = C\,\Delta T$$
Si osserva poi che, a parità di $\Delta T$, il calore necessario è proporzionale anche alla **massa**: $C = c\,m$, dove $c$ (capacità termica per unità di massa) è il **calore specifico**, che dipende **solo dal materiale**.

$$Q = c\,m\,\Delta T = C\,\Delta T$$
dove:
- $Q$ = calore scambiato (J)
- $c$ = calore specifico del materiale (J/(kg·K)); acqua $c = 4186\ \mathrm{J/(kg\,K)} = 1\ \mathrm{cal/(g\,K)}$; ghiaccio circa $2220\ \mathrm{J/(kg\,K)}$; rame circa $390\ \mathrm{J/(kg\,K)}$
- $m$ = massa (kg)
- $\Delta T$ = variazione di temperatura (K, o °C)
- $C = c\,m$ = capacità termica del corpo (J/K)

Il calore specifico di un blocco di rame da 1 kg e di uno da 5 kg è **lo stesso**: non dipende dalla massa. Cambia invece la capacità termica (5 volte più grande). L'acqua ha un calore specifico molto alto: si scalda e si raffredda lentamente (per questo il mare mitiga il clima).

### Temperatura di equilibrio di due corpi
Due corpi, di masse $m_1, m_2$, calori specifici $c_1, c_2$ e temperature $T_1 < T_2$, vengono messi a contatto, senza scambi di calore con l'esterno.
1. Il corpo caldo cede calore e si raffredda fino a $T_e$: $Q_2 = c_2 m_2 (T_e - T_2) < 0$.
2. Il corpo freddo assorbe calore e si scalda: $Q_1 = c_1 m_1 (T_e - T_1) > 0$.
3. Senza dispersioni, il calore ceduto è tutto assorbito: $Q_1 + Q_2 = 0$.
4. $c_1 m_1 (T_e - T_1) + c_2 m_2 (T_e - T_2) = 0$, da cui

$$T_e = \frac{c_1 m_1 T_1 + c_2 m_2 T_2}{c_1 m_1 + c_2 m_2}$$

È una **media pesata** delle temperature (con pesi le capacità termiche): sta sempre tra $T_1$ e $T_2$. Se i due corpi sono della stessa sostanza ($c_1 = c_2$): $T_e = \dfrac{m_1T_1 + m_2T_2}{m_1 + m_2}$.

::: esempio
**Calore specifico del rame.** Un blocco di rame da 1 kg a 325 K viene immerso in 1 l d'acqua (1 kg, $c = 1\ \mathrm{cal/(g\,K)}$) a 290 K; l'equilibrio è a 293 K. Recipiente trascurabile.
1. Calore assorbito dall'acqua: $1000\ \mathrm g \cdot 1 \cdot (293 - 290) = 3000\ \mathrm{cal}$.
2. Calore ceduto dal rame: $c_{Cu} \cdot 1000\ \mathrm g \cdot (325 - 293) = 32\,000\,c_{Cu}$.
3. Uguagliando: $c_{Cu} = 3000/32\,000 \approx 0{,}094\ \mathrm{cal/(g\,K)} \approx 390\ \mathrm{J/(kg\,K)}$.
:::

::: esempio
**Calore specifico di un metallo con il recipiente.** Recipiente dello stesso metallo, massa 3,6 kg, con 14 kg d'acqua, entrambi a 16 °C; si immerge un pezzo di metallo di 1,8 kg a 180 °C; la temperatura finale è 18 °C. ($c_{acqua} = 4190\ \mathrm{J/(kg\,K)}$)
1. Calore ceduto dal pezzo: $c \cdot 1{,}8 \cdot (180 - 18) = c \cdot 291{,}6$.
2. Calore assorbito da acqua e recipiente: $4190 \cdot 14 \cdot 2 + c \cdot 3{,}6 \cdot 2 = 117\,320 + 7{,}2\,c$.
3. Uguaglio: $291{,}6\,c - 7{,}2\,c = 117\,320$, quindi $c = \dfrac{117\,320}{284{,}4} \approx 412\ \mathrm{J/(kg\,K)}$.
:::

::: esempio
**Calore specifico variabile.** Per una sostanza $c = 0{,}20 + 0{,}14\,T + 0{,}023\,T^2$ (cal/(g·K), $T$ in °C). Calore per scaldarne 2,0 g da 5,0 a 15 °C?
Poiché $c$ cambia con $T$, sommo i contributi di tanti piccoli intervalli: $Q = m\displaystyle\int_5^{15} c\,dT = 2{,}0\left[0{,}20\,T + 0{,}07\,T^2 + \tfrac{0{,}023}{3}T^3\right]_5^{15}$
$= 2{,}0\,(2{,}0 + 14{,}0 + 24{,}9) \approx 82\ \mathrm{cal}$.
:::

## Passaggi di stato e calore latente
Le transizioni di fase (fusione, solidificazione, ebollizione, condensazione…) avvengono a temperature ben definite, tanto che servono a tarare i termometri. Hanno anche un'altra proprietà importante.

Una miscela di acqua e ghiaccio in equilibrio a 0 °C, messa a contatto con un ambiente più caldo, **non cambia temperatura**: il ghiaccio fonde poco alla volta e si aggiunge all'acqua. Solo quando tutto il ghiaccio è fuso, l'ulteriore calore fa finalmente salire la temperatura. Quindi **durante un passaggio di stato (a pressione costante) la temperatura resta costante nel tempo**: il calore fornito non aumenta l'agitazione delle molecole, ma serve a **indebolire e rompere i legami** che tengono unite le molecole del solido.

Il calore necessario è proporzionale alla massa che cambia stato:

$$Q = L\,m$$
dove:
- $Q$ = calore per il passaggio di stato (J)
- $L$ = **calore latente** (J/kg): calore per unità di massa necessario per il cambiamento di stato alla temperatura di transizione; fusione del ghiaccio $L_f = 333\ \mathrm{kJ/kg}$; evaporazione dell'acqua $L_v \approx 2260\ \mathrm{kJ/kg}$
- $m$ = massa che cambia stato (kg)

Il **calore latente di fusione** è il calore per unità di massa da fornire a una sostanza per farla passare da solido a liquido alla temperatura di fusione. Ha valori diversi per sostanze diverse. Nel passaggio inverso (solidificazione, condensazione) lo stesso calore viene **ceduto**.

**Calorimetro a ghiaccio**: misura un calore scambiato attraverso la massa di ghiaccio che fonde ($Q = L_f\,m$).

::: attenzione
"La temperatura resta costante durante il passaggio di stato" vuol dire **costante nel tempo**, finché la trasformazione non è completa. Non vuol dire che la temperatura è uguale in tutti i punti dello spazio, né che resta costante sempre: prima e dopo la transizione la temperatura cambia.
:::

::: esempio
**Ghiaccio nel caffè.** Un thermos contiene 130 g di caffè (trattato come acqua) a 80 °C; si aggiunge un cubetto di ghiaccio di 12 g a −10 °C. Temperatura finale? ($c_{acqua} = 4190$, $c_{ghiaccio} = 2220\ \mathrm{J/(kg\,K)}$, $L_f = 333\ \mathrm{kJ/kg}$)
Il ghiaccio passa per tre fasi:
1. riscaldamento da −10 a 0 °C: $Q_1 = 0{,}012 \cdot 2220 \cdot 10 = 266{,}4\ \mathrm J$;
2. fusione a 0 °C: $Q_2 = 0{,}012 \cdot 333\,000 = 3996\ \mathrm J$;
3. riscaldamento dell'acqua di fusione da 0 °C a $T_f$: $Q_3 = 0{,}012 \cdot 4190 \cdot T_f$.

Il caffè si raffredda: $Q_4 = 0{,}130 \cdot 4190 \cdot (T_f - 80) < 0$.
Bilancio $Q_1 + Q_2 + Q_3 + Q_4 = 0$:
$$T_f = \frac{0{,}130 \cdot 4190 \cdot 80 - 266{,}4 - 3996}{0{,}130 \cdot 4190 + 0{,}012 \cdot 4190} = \frac{43\,576 - 4262}{595} \approx 66\ °\mathrm C$$
Il caffè si è raffreddato di circa 14 °C.
:::

::: esempio
**Etanolo da vapore a solido.** 0,510 kg di etanolo a 78 °C (gas) devono diventare solidi a −114 °C. Dati (riportati in calorie per grammo): $L_{ev} = 210\ \mathrm{cal/g}$, $L_{fus} = 26{,}0\ \mathrm{cal/g}$, $c = 0{,}580\ \mathrm{cal/(g\,K)}$; $m = 510\ \mathrm g$.
1. Condensazione a 78 °C: $L_{ev}\,m = 210 \cdot 510 = 107\,100\ \mathrm{cal}$.
2. Raffreddamento del liquido da 78 a −114 °C ($\Delta T = 192$): $c\,m\,\Delta T = 0{,}580 \cdot 510 \cdot 192 \approx 56\,800\ \mathrm{cal}$.
3. Solidificazione a −114 °C: $26{,}0 \cdot 510 = 13\,260\ \mathrm{cal}$.
Totale ceduto: circa $1{,}77 \cdot 10^5\ \mathrm{cal} \approx 7{,}4 \cdot 10^5\ \mathrm J$.
:::

## Il lavoro di un gas
Un gas chiuso in un cilindro con un pistone mobile di area $S$ può scambiare calore con l'ambiente e compiere (o subire) lavoro meccanico attraverso il pistone. Se il gas si espande lentamente (trasformazione **quasi statica**, una successione di stati di equilibrio), spinge il pistone con una forza $F = pS$; per un piccolo spostamento $dh$:

$$dL = F\,dh = p\,S\,dh = p\,dV$$

perché $S\,dh$ è l'aumento di volume $dV$. La relazione vale qualunque sia la forma della superficie su cui il gas spinge. Il lavoro totale tra lo stato iniziale e quello finale è la somma dei lavori elementari:

$$L = \int_{V_i}^{V_f} p\,dV$$
dove:
- $L$ = lavoro compiuto dal gas (J)
- $p$ = pressione del gas, in generale variabile durante la trasformazione (Pa)
- $V_i, V_f$ = volume iniziale e finale (m³)

**Convenzione**: è positivo il lavoro **compiuto dal gas** (espansione, $dV > 0$); il lavoro fatto sul gas (compressione) è negativo. Nel piano $(V, p)$ il lavoro è l'**area sotto la curva** della trasformazione.

**Casi particolari.**
- **Pressione costante** (trasformazione **isobara**): $p$ esce dall'integrale e
$$L = p\,(V_f - V_i) = p\,\Delta V$$
Questa formula vale **solo a pressione costante**.
- **Volume costante** (isocora): $\Delta V = 0$, il lavoro è **nullo**.
- **Temperatura costante** (isoterma di un gas perfetto): la pressione **cambia** ($pV$ = costante) e il lavoro è $L = nRT\ln(V_f/V_i)$, non $p\,\Delta V$.

::: esempio
Un gas a pressione costante $p = 2 \cdot 10^5\ \mathrm{Pa}$ si espande da 3 l a 5 l: $L = p\,\Delta V = 2 \cdot 10^5 \cdot 2 \cdot 10^{-3} = 400\ \mathrm J$, positivo (lavoro fatto dal gas).
:::

## Energia interna del gas perfetto
L'**energia interna** $U$ di un sistema è l'energia complessiva dei suoi costituenti microscopici (energia cinetica delle molecole ed energia dei loro legami). È una **funzione di stato**: dipende solo dallo stato del sistema, non da come ci si è arrivati. Il primo principio della termodinamica (che si vedrà più avanti) dice che il calore assorbito meno il lavoro fatto ne è la variazione: $Q - L = \Delta U$.

Per un **gas perfetto** (ideale) Joule dimostrò che l'energia interna **dipende solo dalla temperatura**. A livello microscopico la temperatura misura l'**energia cinetica media** delle molecole: per ogni molecola di un gas **monoatomico** (che si comporta come un punto materiale con 3 direzioni di moto) l'energia cinetica media è $\tfrac32 k_B T$. Sommando su tutte le $N$ molecole:

$$U = \tfrac32\,N\,k_B\,T = \tfrac32\,n\,R\,T$$
dove:
- $U$ = energia interna (J)
- $N$ = numero di molecole (numero puro)
- $k_B$ = costante di Boltzmann, $1{,}38 \cdot 10^{-23}\ \mathrm{J/K}$
- $T$ = temperatura **assoluta** (K)
- $n = N/N_A$ = numero di moli (mol), con $N_A = 6{,}02 \cdot 10^{23}\ \mathrm{mol^{-1}}$
- $R = N_A k_B$ = costante dei gas, $8{,}314\ \mathrm{J/(mol\,K)}$

L'energia interna di un gas perfetto monoatomico è quindi **direttamente proporzionale alla temperatura assoluta e al numero di molecole**: a parità di temperatura, più molecole portano più energia. **Non** dipende dalla pressione o dal volume presi da soli (pressione e volume sono legati a $T$ dall'equazione di stato $pV = Nk_BT$, ma non aggiungono una dipendenza propria). In generale $U = n\,C_V\,T$, con $C_V = \tfrac32 R$ per i gas monoatomici.

::: esempio
Una mole di gas monoatomico a 300 K: $U = \tfrac32 \cdot 1 \cdot 8{,}314 \cdot 300 \approx 3{,}7 \cdot 10^3\ \mathrm J$. Raddoppiando la temperatura assoluta (600 K) l'energia raddoppia; raddoppiando le moli a 300 K, raddoppia anche.
:::

::: attenzione
- Nelle formule dei gas (energia interna, equazione di stato) si usano **sempre i kelvin**, mai i gradi Celsius: da 20 °C a 40 °C la temperatura assoluta non raddoppia (da 293 a 313 K).
- $L = p\,\Delta V$ **non** vale sempre: solo a pressione costante.
- La temperatura non è "una proprietà dei corpi caldi" né "una sensazione": è ciò che misura il termometro; anche i corpi freddi hanno una temperatura.
:::

::: esame
Le domande sulla lezione (tutte chiuse) chiedono: la definizione di temperatura (la proprietà misurata con un termometro: definizione operativa); il significato della temperatura costante nei passaggi di stato (costante nel tempo durante la transizione, perché il calore rompe i legami); quando vale $L = p\,\Delta V$ (solo a pressione costante, perché in generale $L = \int p\,dV$); da cosa dipende l'energia interna di un gas perfetto monoatomico ($U = \tfrac32Nk_BT$: temperatura assoluta e numero di molecole). Utili anche: conversione °C–K, principio zero, sistemi aperti/chiusi/isolati, $Q = cm\Delta T$ e $Q = Lm$.
:::

::: sintesi
- Termodinamica: fenomeni termici e loro legame con l'energia meccanica.
- Sistema aperto (materia + energia), chiuso (solo energia), isolato (niente); equilibrio termodinamico = meccanico + termico + chimico.
- Estensivi (additivi: massa, volume, energia) e intensivi (pressione, temperatura, densità).
- Temperatura = ciò che misura il termometro; principio zero: due sistemi in equilibrio con un terzo sono in equilibrio tra loro.
- $T(\mathrm K) = t(°\mathrm C) + 273{,}15$; 0 K zero assoluto, punto triplo 273,16 K; 27 °C ≈ 300 K; $t_F = \tfrac95t_C + 32$.
- Dilatazione: $\Delta l = \alpha l\Delta T$, $\Delta V = \beta V\Delta T$, $\beta = 3\alpha$.
- Calore = energia in transito dal caldo al freddo; $1\ \mathrm{cal} \approx 4{,}186\ \mathrm J$; $Q = cm\Delta T = C\Delta T$; equilibrio $T_e$ = media pesata.
- Passaggi di stato: $Q = Lm$, temperatura costante nel tempo durante la transizione.
- Lavoro del gas $L = \int p\,dV$; $L = p\Delta V$ solo a pressione costante; nullo a volume costante.
- Gas perfetto monoatomico: $U = \tfrac32Nk_BT = \tfrac32nRT$, proporzionale a T assoluta e numero di molecole.
:::
