=== 9 dispense
SLIDES: 07, 12
# Lezione 09 — Moti relativi e sistemi di riferimento

Nelle lezioni di cinematica abbiamo descritto il moto di un punto **rispetto a un sistema di riferimento** scelto una volta per tutte: posizione $\vec r(t)$, velocità $\vec v = d\vec r/dt$, accelerazione $\vec a = d\vec v/dt$. Ma chi sceglie il sistema di riferimento? Lo sceglie l'osservatore, e osservatori diversi possono muoversi l'uno rispetto all'altro: chi è seduto in treno, chi è fermo sulla banchina, chi sta su una giostra, chi sta sulla Terra che ruota.

Questa lezione risponde a una domanda precisa: **se conosco il moto di un punto visto da un osservatore, come lo vede un secondo osservatore che si muove rispetto al primo?** La risposta sono le leggi di composizione delle posizioni, delle velocità e delle accelerazioni. Da esse nascono due idee fondamentali per tutta la dinamica:
- i sistemi che si muovono di moto rettilineo uniforme l'uno rispetto all'altro misurano la **stessa accelerazione** (base del principio di relatività e dei sistemi inerziali, lezione 10);
- i sistemi che accelerano o ruotano misurano accelerazioni diverse, e compaiono termini nuovi come l'**accelerazione di trascinamento** e l'**accelerazione di Coriolis** (base delle forze apparenti, lezione 13).

## Il moto dipende da chi lo osserva
L'esperienza quotidiana mostra che il moto è **relativo**. Quando viaggiamo in autostrada affiancati a un'altra auto che va alla nostra stessa velocità, quell'auto ci appare **ferma**. Un osservatore fermo sul ciglio della strada vede invece transitare entrambe le auto alla stessa velocità, per esempio $100\,\mathrm{km/h}$.

Nessuno dei due sbaglia: descrivono lo stesso fenomeno da due sistemi di riferimento diversi. Per confrontare le due descrizioni servono quindi due sistemi:
- il sistema **fisso** $Oxyz$, detto convenzionalmente "**assoluto**" (per esempio solidale con la strada);
- il sistema **mobile** $O'x'y'z'$, detto "**relativo**" (per esempio solidale con la nostra auto), che si muove rispetto al primo.

Le grandezze misurate nel sistema fisso si chiamano **assolute** ($\vec r$, $\vec v$, $\vec a$); quelle misurate nel sistema mobile si chiamano **relative** e si indicano con l'apice ($\vec r\,'$, $\vec v\,'$, $\vec a\,'$).

::: attenzione
"Assoluto" qui non vuol dire "privilegiato" o "vero": è solo il nome del sistema che decidiamo di considerare fermo. Si potrebbero scambiare i ruoli dei due sistemi e tutte le formule resterebbero valide.
:::

## Caso semplice: traslazione lungo una retta
Cominciamo dal caso più semplice, che è unidimensionale. Il moto avviene lungo l'asse $x$ del sistema fisso $Oxy$. Il sistema mobile $O'x'y'$ ha gli assi paralleli a quelli fissi e la sua origine $O'$ si muove lungo $x$ con velocità costante $v_0$.

Il vettore posizione del punto P visto dal sistema fisso si ottiene "andando prima da $O$ a $O'$ e poi da $O'$ a P":
$$\vec r = \overrightarrow{OO'} + \vec r\,'$$
dove:
- $\vec r$ = posizione di P nel sistema fisso (m);
- $\overrightarrow{OO'}$ = posizione dell'origine del sistema mobile vista dal sistema fisso (m);
- $\vec r\,'$ = posizione di P nel sistema mobile (m).

Deriviamo rispetto al tempo. La derivata di $\vec r$ è la velocità assoluta $\vec v$, la derivata di $\overrightarrow{OO'}$ è la velocità $v_0$ del sistema mobile, la derivata di $\vec r\,'$ (assi che non ruotano) è la velocità relativa $\vec v\,'$. In una dimensione:
$$v = v_0 + v'$$
dove:
- $v$ = velocità di P misurata dal sistema fisso (m/s);
- $v_0$ = velocità del sistema mobile rispetto a quello fisso (m/s);
- $v'$ = velocità di P misurata dal sistema mobile (m/s).

**Caso particolare.** Se il punto viaggia alla stessa velocità del sistema mobile, $v = v_0$, allora $v' = v - v_0 = 0$: per il sistema mobile il punto è **fermo**. È esattamente l'auto che ci affianca e che ci sembra immobile.

I segni sono importanti: si sceglie un verso positivo dell'asse e ogni velocità ha segno $+$ se è concorde, $-$ se è opposta.

::: esempio
**Il treno e l'automobile (tipico del paniere).** Il display del treno segna $288\,\mathrm{km/h}$. Su un tratto che affianca l'autostrada un'automobile ci appare viaggiare a $-50\,\mathrm{m/s}$. Quanto va l'auto per chi è fermo sul ciglio della strada?

1. Scelgo come positivo il verso di marcia del treno. Il sistema mobile è il treno: $v_0 = 288\,\mathrm{km/h}$.
2. Porto tutto nella stessa unità. Da km/h a m/s si divide per $3{,}6$ (perché $1\,\mathrm{km/h} = 1000\,\mathrm m / 3600\,\mathrm s$): $v_0 = 288/3{,}6 = 80\,\mathrm{m/s}$.
3. La velocità relativa dell'auto è $v' = -50\,\mathrm{m/s}$: dal treno l'auto sembra andare all'indietro, perché è più lenta del treno.
4. Composizione: $v = v_0 + v' = 80 + (-50) = 30\,\mathrm{m/s}$.
5. Il segno è positivo: l'auto va **nello stesso verso del treno**. In km/h: $30 \cdot 3{,}6 = 108\,\mathrm{km/h}$.

L'auto va quindi a $108\,\mathrm{km/h}$, nello stesso verso del treno: è più lenta del treno di $50\,\mathrm{m/s} = 180\,\mathrm{km/h}$, per questo dal finestrino sembra andare all'indietro.
:::

::: esempio
**Velocità relativa tra due veicoli.** Un'auto a $20\,\mathrm{m/s}$ segue un camion a $15\,\mathrm{m/s}$, nello stesso verso. Come vede l'auto chi sta sul camion?

Il sistema mobile è il camion: $v_0 = 15\,\mathrm{m/s}$. L'incognita è la velocità relativa: $v' = v - v_0 = 20 - 15 = 5\,\mathrm{m/s}$. Chi è sul camion vede l'auto avvicinarsi da dietro a $5\,\mathrm{m/s}$.

Se invece i due veicoli si vengono incontro (auto a $+20$, camion a $-15\,\mathrm{m/s}$), dal camion l'auto arriva a $v' = 20 - (-15) = 35\,\mathrm{m/s}$: nei versi opposti le velocità relative si sommano in modulo.
:::

::: attenzione
Converti sempre le unità **prima** di sommare: km/h e m/s non si mescolano. Per passare da km/h a m/s dividi per $3{,}6$; da m/s a km/h moltiplica per $3{,}6$. E controlla il segno del risultato: è il segno a dire il verso.
:::

## Caso generale: due sistemi in moto qualsiasi
Generalizziamo. Siano $Oxyz$ e $O'x'y'z'$ due sistemi cartesiani in moto **qualsiasi** l'uno rispetto all'altro: l'origine $O'$ può muoversi in qualunque modo e gli assi del sistema mobile possono anche **ruotare**. I versori degli assi sono $\hat i, \hat j, \hat k$ (fissi) e $\hat i', \hat j', \hat k'$ (mobili).

Chiamiamo $\vec R$ il vettore posizione di $O'$ visto dal sistema fisso. Vale ancora la somma vettoriale
$$\vec r = \vec R + \vec r\,'$$
dove:
- $\vec r = x\,\hat i + y\,\hat j + z\,\hat k$ = posizione di P nel sistema fisso (m);
- $\vec R$ = posizione dell'origine mobile $O'$ nel sistema fisso (m);
- $\vec r\,' = x'\,\hat i' + y'\,\hat j' + z'\,\hat k'$ = posizione di P nel sistema mobile (m), scritta con le coordinate e i versori **mobili**.

La novità rispetto al caso semplice è che i versori $\hat i', \hat j', \hat k'$, visti dal sistema fisso, **possono cambiare direzione nel tempo** (se il sistema mobile ruota). Questo è il punto chiave di tutta la derivazione.

### Derivata di un versore che ruota
In cinematica (moto circolare) abbiamo visto che un vettore di modulo costante che ruota con velocità angolare $\vec\omega$ ha derivata
$$\frac{d\hat u}{dt} = \vec\omega \times \hat u$$
dove $\hat u$ è il versore (adimensionale) e $\vec\omega$ è il vettore velocità angolare (rad/s), diretto lungo l'asse di rotazione con verso dato dalla regola della mano destra. È la stessa relazione $\vec v = \vec\omega \times \vec r$ del moto circolare, applicata a un vettore di lunghezza 1. Queste relazioni si chiamano **formule di Poisson**. Applicate ai tre versori del sistema mobile, che ruotano tutti con la stessa $\vec\omega$:
$$\frac{d\hat i'}{dt} = \vec\omega\times\hat i', \qquad \frac{d\hat j'}{dt} = \vec\omega\times\hat j', \qquad \frac{d\hat k'}{dt} = \vec\omega\times\hat k'$$

### Velocità assoluta, relativa e di trascinamento
Deriviamo $\vec r = \vec R + \vec r\,'$ rispetto al tempo, visto dal sistema fisso.

1. La derivata di $\vec r$ è la velocità assoluta: $\dfrac{d\vec r}{dt} = \vec v$.
2. La derivata di $\vec R$ è la velocità dell'origine mobile: $\dfrac{d\vec R}{dt} = \vec V_{O'}$.
3. La derivata di $\vec r\,' = x'\hat i' + y'\hat j' + z'\hat k'$ si fa con la regola del prodotto, perché cambiano sia le coordinate sia i versori:
$$\frac{d\vec r\,'}{dt} = \underbrace{\frac{dx'}{dt}\hat i' + \frac{dy'}{dt}\hat j' + \frac{dz'}{dt}\hat k'}_{\vec v\,'} + \underbrace{x'\frac{d\hat i'}{dt} + y'\frac{d\hat j'}{dt} + z'\frac{d\hat k'}{dt}}_{\vec\omega\times\vec r\,'}$$
   - il primo gruppo è la **velocità relativa** $\vec v\,'$: è ciò che misura l'osservatore mobile, per il quale i suoi versori sono fermi;
   - nel secondo gruppo uso le formule di Poisson: $x'(\vec\omega\times\hat i') + y'(\vec\omega\times\hat j') + z'(\vec\omega\times\hat k') = \vec\omega\times(x'\hat i' + y'\hat j' + z'\hat k') = \vec\omega\times\vec r\,'$.

Mettendo insieme:
$$\vec v = \vec v\,' + \vec V_{O'} + \vec\omega\times\vec r\,' = \vec v\,' + \vec v_{tr}$$
dove:
- $\vec v$ = **velocità assoluta**, misurata dal sistema fisso (m/s);
- $\vec v\,'$ = **velocità relativa**, misurata dal sistema mobile (m/s);
- $\vec v_{tr} = \vec V_{O'} + \vec\omega\times\vec r\,'$ = **velocità di trascinamento** (m/s);
- $\vec V_{O'}$ = velocità dell'origine $O'$ (m/s);
- $\vec\omega$ = velocità angolare del sistema mobile (rad/s);
- $\vec r\,'$ = posizione di P nel sistema mobile (m).

**Significato della velocità di trascinamento.** È la velocità che il punto P avrebbe se fosse **fermo nel sistema mobile** ($\vec v\,' = 0$), cioè se fosse semplicemente "trascinato" dal moto del sistema. Ha due parti:
- una parte **traslatoria**, $\vec V_{O'}$, uguale per tutti i punti;
- una parte **rotatoria**, $\vec\omega\times\vec r\,'$, che cresce con la distanza dall'asse di rotazione (come per un punto di una giostra: più è lontano dal centro, più va veloce).

Se il sistema mobile **non ruota** ($\vec\omega = 0$) si ritrova il caso semplice: $\vec v = \vec v\,' + \vec V_{O'}$. Questa composizione, con il tempo uguale per tutti gli osservatori, si chiama **trasformazione di Galileo** delle velocità.

::: esempio
**La barca che attraversa il fiume (esercizio della dispensa).** Una barca punta la prua verso Nord e attraversa un fiume largo con velocità $10\,\mathrm{km/h}$ rispetto all'acqua. Il fiume scorre esattamente verso Est a $5\,\mathrm{km/h}$. Qual è la velocità della barca per un osservatore fermo a terra?

1. Sistema mobile = l'acqua, che trasla verso Est senza ruotare: $\vec V_{O'} = 5\,\mathrm{km/h}$ verso Est, $\vec\omega = 0$.
2. Velocità relativa = velocità della barca rispetto all'acqua: $\vec v\,' = 10\,\mathrm{km/h}$ verso Nord.
3. Composizione vettoriale: $\vec v = \vec v\,' + \vec V_{O'}$. I due vettori sono **perpendicolari** (Nord ed Est), quindi il modulo si trova con Pitagora:
$$v = \sqrt{10^2 + 5^2} = \sqrt{125} \approx 11{,}2\,\mathrm{km/h}$$
4. La direzione: l'angolo $\varphi$ rispetto al Nord, verso Est, ha $\tan\varphi = 5/10 = 0{,}5$, quindi $\varphi \approx 26{,}6°$.

La barca, vista da terra, va più veloce che rispetto all'acqua e non va dritta verso Nord: scarroccia verso Est.
:::

::: esempio
**Velocità di trascinamento su una piattaforma rotante.** Una piattaforma ruota con $\omega = 2\,\mathrm{rad/s}$ attorno al suo centro, che è fermo ($\vec V_{O'} = 0$). Un bambino è fermo sulla piattaforma a $r' = 3\,\mathrm m$ dal centro.

Per la piattaforma il bambino è fermo: $v' = 0$. Per chi sta a terra il bambino ha la velocità di trascinamento, che è solo rotatoria: $\vec v_{tr} = \vec\omega\times\vec r\,'$. Poiché $\vec\omega$ (verticale) è perpendicolare a $\vec r\,'$ (orizzontale), il modulo è $v = \omega r' = 2 \cdot 3 = 6\,\mathrm{m/s}$, diretta tangente alla circonferenza.

Se il bambino camminasse sulla piattaforma con $\vec v\,'$, per chi sta a terra la sua velocità sarebbe $\vec v = \vec v\,' + \vec v_{tr}$.
:::

::: esempio
**Velocità angolare della Terra (esercizio della dispensa).** La Terra compie una rotazione completa ($2\pi\,\mathrm{rad}$) in un giorno, $T = 24\,\mathrm h = 86\,400\,\mathrm s$. Supponendo $\omega$ costante:
$$\omega = \frac{2\pi}{T} = \frac{6{,}283}{86\,400} \approx 7{,}27\cdot 10^{-5}\,\mathrm{rad/s}$$
Un punto all'Equatore ($r' = R_T \approx 6{,}37\cdot 10^6\,\mathrm m$) ha velocità di trascinamento $\omega R_T \approx 463\,\mathrm{m/s}$, circa $1670\,\mathrm{km/h}$: è la velocità con cui "ci trascina" la rotazione terrestre, che non percepiamo perché ci muoviamo insieme alla Terra.
:::

## Composizione delle accelerazioni
Per trovare il legame tra le accelerazioni deriviamo ancora, rispetto al tempo e visto dal sistema fisso, la legge delle velocità
$$\vec v = \vec v\,' + \vec V_{O'} + \vec\omega\times\vec r\,'$$
termine per termine.

1. $\dfrac{d\vec v}{dt} = \vec a$, accelerazione assoluta.
2. $\dfrac{d\vec V_{O'}}{dt} = \vec a_{O'}$, accelerazione dell'origine mobile.
3. $\vec v\,' = v'_x\hat i' + v'_y\hat j' + v'_z\hat k'$ è scritta con i versori mobili, quindi si deriva come prima $\vec r\,'$ (regola del prodotto + Poisson):
$$\frac{d\vec v\,'}{dt} = \vec a\,' + \vec\omega\times\vec v\,'$$
   dove $\vec a\,'$ è l'**accelerazione relativa**, quella misurata dall'osservatore mobile.
4. $\vec\omega\times\vec r\,'$ è un prodotto, quindi:
$$\frac{d}{dt}(\vec\omega\times\vec r\,') = \frac{d\vec\omega}{dt}\times\vec r\,' + \vec\omega\times\frac{d\vec r\,'}{dt} = \frac{d\vec\omega}{dt}\times\vec r\,' + \vec\omega\times(\vec v\,' + \vec\omega\times\vec r\,')$$
   dove ho usato il risultato già trovato $\dfrac{d\vec r\,'}{dt} = \vec v\,' + \vec\omega\times\vec r\,'$.

Sommo tutto:
$$\vec a = \vec a\,' + \vec\omega\times\vec v\,' + \vec a_{O'} + \frac{d\vec\omega}{dt}\times\vec r\,' + \vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$$
Il termine $\vec\omega\times\vec v\,'$ compare **due volte**. Raggruppando:
$$\boxed{\vec a = \vec a\,' + \vec a_{tr} + \vec a_{Co}}$$
con
$$\vec a_{tr} = \vec a_{O'} + \frac{d\vec\omega}{dt}\times\vec r\,' + \vec\omega\times(\vec\omega\times\vec r\,'), \qquad \vec a_{Co} = 2\,\vec\omega\times\vec v\,'$$
dove:
- $\vec a$ = accelerazione assoluta (m/s²);
- $\vec a\,'$ = accelerazione relativa, vista dal sistema mobile (m/s²);
- $\vec a_{tr}$ = **accelerazione di trascinamento** (m/s²);
- $\vec a_{O'}$ = accelerazione dell'origine mobile (m/s²);
- $d\vec\omega/dt$ = accelerazione angolare del sistema mobile (rad/s²);
- $\vec a_{Co}$ = **accelerazione di Coriolis**, detta anche **complementare** (m/s²).

### L'accelerazione di trascinamento
Come per la velocità, si definisce l'accelerazione di trascinamento come l'accelerazione che il punto avrebbe se fosse **solidale con il sistema mobile**, cioè con $\vec v\,' = 0$ e $\vec a\,' = 0$. Ponendo questi valori nella formula generale restano proprio i tre termini di $\vec a_{tr}$. Anche questa è la sovrapposizione di:
- una parte **traslatoria**, $\vec a_{O'}$;
- una parte rotatoria dovuta alla **variazione della velocità angolare**, $\dfrac{d\vec\omega}{dt}\times\vec r\,'$ (è l'analogo dell'accelerazione tangenziale del moto circolare vario);
- una parte rotatoria **centripeta**, $\vec\omega\times(\vec\omega\times\vec r\,')$.

Perché l'ultimo termine è centripeto? Scomponi $\vec r\,'$ in una parte parallela all'asse di rotazione e una parte $\vec r_\perp$ perpendicolare all'asse (che va dall'asse al punto). Il prodotto $\vec\omega\times\vec r\,'$ "vede" solo $\vec r_\perp$, e applicando due volte il prodotto vettoriale si ottiene
$$\vec\omega\times(\vec\omega\times\vec r\,') = -\omega^2\,\vec r_\perp$$
cioè un vettore di modulo $\omega^2 r_\perp$ diretto **verso l'asse**: è esattamente l'accelerazione centripeta $\omega^2 R$ del moto circolare uniforme, con $R = r_\perp$ distanza dall'asse.

### L'accelerazione di Coriolis
Confrontiamo la legge delle accelerazioni con quella delle velocità. Nella legge delle velocità ci sono solo il termine relativo e quello di trascinamento. Nella legge delle accelerazioni compare un **termine in più**, che non è né relativo né di trascinamento:
$$\vec a_{Co} = 2\,\vec\omega\times\vec v\,'$$
È l'**accelerazione di Coriolis** (o complementare). Viene dai due termini $\vec\omega\times\vec v\,'$ che abbiamo visto nascere uno dalla rotazione del vettore $\vec v\,'$ e uno dalla variazione di $\vec\omega\times\vec r\,'$ quando il punto si sposta nel sistema rotante.

Proprietà:
- compare solo se il sistema mobile **ruota** ($\vec\omega \ne 0$) **e** il punto **si muove** rispetto a esso ($\vec v\,' \ne 0$);
- è nulla se $\vec v\,'$ è **parallela all'asse** di rotazione (il prodotto vettoriale di vettori paralleli è zero);
- è sempre **perpendicolare** sia a $\vec\omega$ sia a $\vec v\,'$ (proprietà del prodotto vettoriale);
- il modulo è $a_{Co} = 2\,\omega\,v'\sin\gamma$, dove $\gamma$ è l'angolo tra $\vec\omega$ e $\vec v\,'$; è massimo ($2\omega v'$) quando $\vec v\,'$ è perpendicolare all'asse.

::: esempio
**Coriolis su una piattaforma.** Sulla piattaforma dell'esempio precedente ($\omega = 2\,\mathrm{rad/s}$, asse verticale) una pallina rotola in direzione radiale verso l'esterno con $v' = 1\,\mathrm{m/s}$. La velocità relativa è orizzontale, quindi perpendicolare a $\vec\omega$:
$$a_{Co} = 2\,\omega\,v' = 2 \cdot 2 \cdot 1 = 4\,\mathrm{m/s^2}$$
È orizzontale e perpendicolare alla direzione radiale. Non è piccola: è quasi metà di $g$. Su una giostra gli effetti di Coriolis si sentono bene.
:::

::: esempio
**Coriolis sulla Terra.** Un'auto va a $v' = 10\,\mathrm{m/s}$ su una strada orizzontale. La Terra ruota con $\omega = 7{,}27\cdot 10^{-5}\,\mathrm{rad/s}$. Il valore massimo possibile è
$$a_{Co} = 2\,\omega\,v' = 2 \cdot 7{,}27\cdot 10^{-5} \cdot 10 \approx 1{,}5\cdot 10^{-3}\,\mathrm{m/s^2}$$
Alle nostre latitudini conta solo la componente di $\vec\omega$ perpendicolare al suolo, quindi il valore è circa la metà, $\approx 7\cdot 10^{-4}\,\mathrm{m/s^2}$: circa diecimila volte meno di $g$. Per questo nella vita di tutti i giorni non ce ne accorgiamo.
:::

### La Terra è un sistema rotante: cicloni e correnti
Chi sta sulla superficie terrestre fa parte di un sistema di riferimento **in rotazione**. Il vettore $\vec\omega$ della Terra è diretto lungo l'asse terrestre, dal Polo Sud al Polo Nord. Rispetto al terreno, però, questo vettore "punta verso l'alto" (fuori dal suolo) nell'emisfero Nord e "verso il basso" (dentro il suolo) nell'emisfero Sud.

Conseguenza: a parità di moto relativo (per esempio un moto da un polo verso l'Equatore) il prodotto vettoriale $\vec\omega\times\vec v\,'$ cambia verso tra i due emisferi, e quindi cambia verso anche l'accelerazione di Coriolis. È per questo che **le correnti e i sistemi ciclonici e anticiclonici**, tipici esempi dell'effetto di Coriolis, hanno **moti vorticosi opposti** nei due emisferi: i cicloni ruotano in senso antiorario nell'emisfero Nord e orario nell'emisfero Sud. I dettagli (deviazione verso destra o sinistra, venti, fiumi) sono nella lezione 13.

## Riepilogo delle leggi del moto relativo
| Grandezza | Sistema "assoluto" | Sistema "relativo" | Legame |
|---|---|---|---|
| posizione | $\vec r$ | $\vec r\,'$ | $\vec r = \vec R + \vec r\,'$ |
| velocità | $\vec v$ | $\vec v\,'$ | $\vec v = \vec v\,' + \vec v_{tr}$, con $\vec v_{tr} = \vec V_{O'} + \vec\omega\times\vec r\,'$ |
| accelerazione | $\vec a$ | $\vec a\,'$ | $\vec a = \vec a\,' + \vec a_{tr} + \vec a_{Co}$ |

con $\vec a_{tr} = \vec a_{O'} + \dfrac{d\vec\omega}{dt}\times\vec r\,' + \vec\omega\times(\vec\omega\times\vec r\,')$ e $\vec a_{Co} = 2\,\vec\omega\times\vec v\,'$.

## Casi particolari importanti
La legge generale delle accelerazioni contiene tutti i casi. Vediamo i tre che servono di più.

### 1. Traslazione a velocità costante: le accelerazioni coincidono
Se il sistema mobile **trasla** ($\vec\omega = 0$) con **velocità costante** ($\vec a_{O'} = 0$), allora $\vec a_{tr} = 0$ e $\vec a_{Co} = 0$, quindi:
$$\vec a = \vec a\,'$$
I due osservatori misurano velocità diverse ma **la stessa accelerazione**. Poiché la massa di un corpo è la stessa per tutti, anche la seconda legge $\vec F = m\vec a$ ha la stessa forma nei due sistemi. È il cuore del **principio di relatività galileiana**: tra due laboratori in moto rettilineo uniforme l'uno rispetto all'altro nessun esperimento dà risultati diversi. Cambiano le singole misure (per esempio le velocità), ma **non le leggi fisiche**. Ne segue che se un sistema è inerziale (un corpo libero non accelera), ogni sistema in moto rettilineo uniforme rispetto a esso è anch'esso inerziale (lezione 10).

### 2. Traslazione accelerata: forza apparente e caduta libera
Se il sistema mobile trasla **senza ruotare** ma con accelerazione $\vec A = \vec a_{O'}$, allora $\vec a_{tr} = \vec A$, $\vec a_{Co} = 0$ e
$$\vec a\,' = \vec a - \vec A$$
Chi sta dentro il sistema vede i corpi accelerare "da soli" di $-\vec A$. Moltiplicando per la massa: $m\vec a\,' = m\vec a - m\vec A = \vec F + (-m\vec A)$. Per continuare a usare la seconda legge, l'osservatore mobile deve aggiungere alle forze vere una **forza apparente**
$$\vec F_{app} = -m\vec A$$
dove $m$ è la massa del corpo (kg) e $\vec A$ l'accelerazione del sistema (m/s²). È opposta all'accelerazione del sistema: in un'auto che frena ci sentiamo spinti in avanti.

**Corpo in un sistema in caduta libera (domanda aperta del paniere).** Consideriamo un sistema che cade liberamente, per esempio un ascensore a cui si è spezzato il cavo: la sua accelerazione è $\vec A = \vec g$. Un corpo al suo interno è soggetto al peso $m\vec g$. La sua accelerazione relativa è
$$\vec a\,' = \vec a - \vec A = \vec g - \vec g = 0$$
oppure, con il linguaggio delle forze apparenti: $m\vec a\,' = m\vec g + (-m\vec g) = 0$. La forza apparente $-m\vec g$ annulla **esattamente** il peso. Conseguenze:
- un oggetto lasciato libero **resta fermo** rispetto al sistema: **fluttua**, come se non pesasse;
- un corpo appoggiato su una bilancia non la preme più: la bilancia segna **zero** (assenza di peso apparente);
- se gli si dà una spinta, il corpo si muove **di moto rettilineo uniforme** rispetto al sistema, finché non urta una parete: dentro il sistema in caduta libera si comporta come un corpo libero in un sistema inerziale.

La gravità non è sparita: il corpo e il sistema cadono **insieme**, con la stessa accelerazione $g$ (tutti i corpi cadono con la stessa $g$, qualunque sia la massa), quindi non c'è moto relativo. Su questo principio si basano gli aerei che simulano l'assenza di gravità per l'addestramento degli astronauti: ad alta quota vengono lasciati in caduta libera per alcune decine di secondi. Anche gli astronauti in orbita sono in caduta libera continua attorno alla Terra.

::: esempio
**Ascensore che accelera.** Un corpo di massa $m$ sta su una bilancia in un ascensore che accelera verso l'alto con $a$. Nel sistema dell'ascensore il corpo è fermo, quindi la somma delle forze (vere + apparente) è zero. Asse verso l'alto: $N - mg - ma = 0$, quindi $N = m(g + a)$: la bilancia segna di più, ci si sente più pesanti. Se l'ascensore accelera verso il basso con $a < g$: $N = m(g - a)$, ci si sente più leggeri. Con $a = g$ (caduta libera): $N = 0$. Il caso completo è nella lezione 13.
:::

### 3. Sistema che ruota: centrifuga e Coriolis
Se il sistema ruota con velocità angolare $\vec\omega$ **costante** attorno a un asse fisso ($\vec a_{O'} = 0$, $d\vec\omega/dt = 0$), dalla legge generale moltiplicata per $m$ si ottiene
$$m\vec a\,' = \vec F - m\,\vec\omega\times(\vec\omega\times\vec r\,') - 2m\,\vec\omega\times\vec v\,'$$
Compaiono due forze apparenti:
- la **forza centrifuga** $-m\,\vec\omega\times(\vec\omega\times\vec r\,') = m\omega^2\vec r_\perp$, di modulo $m\omega^2 r$, radiale **verso l'esterno**; agisce su tutti i corpi, anche fermi nel sistema rotante;
- la **forza di Coriolis** $\vec F_{Co} = -2m\,\vec\omega\times\vec v\,'$; agisce solo sui corpi **in moto** rispetto al sistema rotante, con velocità non parallela all'asse.

Qui $r$ è la distanza dall'asse (m) e $\vec v\,'$ la velocità relativa al sistema rotante (m/s). Sulla Terra la forza di Coriolis devia i corpi in moto verso **destra** nell'emisfero Nord e verso **sinistra** nell'emisfero Sud. Tutto questo è sviluppato nella lezione 13.

::: attenzione
Non confondere $\vec a_{Co} = 2\,\vec\omega\times\vec v\,'$ (l'accelerazione di Coriolis, termine della legge di composizione) con $\vec F_{Co} = -2m\,\vec\omega\times\vec v\,'$ (la forza apparente): la forza ha il segno **meno**, perché per l'osservatore rotante $m\vec a\,' = m\vec a - m\vec a_{tr} - m\vec a_{Co}$.
:::

::: attenzione
L'accelerazione di Coriolis **non** c'è nella legge delle velocità: è un termine che compare solo passando alle accelerazioni. E non dipende dalla posizione del punto, ma dalla sua **velocità relativa**: un corpo fermo nel sistema rotante sente la centrifuga ma non Coriolis.
:::

::: esame
- **"Cos'è l'accelerazione di Coriolis?"** (aperta): è il termine $\vec a_{Co} = 2\,\vec\omega\times\vec v\,'$ che compare nella legge di composizione delle accelerazioni $\vec a = \vec a\,' + \vec a_{tr} + \vec a_{Co}$ quando il sistema mobile **ruota** con velocità angolare $\vec\omega$ e il punto **si muove** in esso con velocità relativa $\vec v\,'$. È un termine in più rispetto alla legge delle velocità, perpendicolare a $\vec\omega$ e a $\vec v\,'$, nullo se $\vec v\,'$ è parallela all'asse. Sulla Terra (sistema rotante) cambia verso tra i due emisferi: spiega il verso opposto di rotazione dei cicloni e delle correnti. Scrivi la formula e cita l'esempio terrestre.
- **"Descrivere il comportamento di un corpo in un sistema in caduta libera"** (aperta): il sistema accelera con $\vec g$; nel sistema compare la forza apparente $-m\vec g$ che annulla il peso; il corpo ha accelerazione relativa nulla, fluttua, la bilancia segna zero, se spinto si muove di moto rettilineo uniforme; la gravità agisce ancora ma corpo e sistema cadono insieme (aerei per l'addestramento, astronauti).
- **Chiusa sul treno e l'auto**: composizione $v = v' + V$ con i segni e le unità convertite (km/h ÷ 3,6 = m/s). Controlla sempre segno (verso) e unità della risposta.
:::

::: sintesi
- Posizioni: $\vec r = \vec R + \vec r\,'$. Assoluto = sistema fisso, relativo = sistema mobile.
- Velocità: $\vec v = \vec v\,' + \vec v_{tr}$, con $\vec v_{tr} = \vec V_{O'} + \vec\omega\times\vec r\,'$ (velocità del punto se fosse fermo nel sistema mobile). Senza rotazione: $\vec v = \vec v\,' + \vec V$ (Galileo).
- Derivata di un versore che ruota: $d\hat u/dt = \vec\omega\times\hat u$ (Poisson).
- Accelerazioni: $\vec a = \vec a\,' + \vec a_{tr} + \vec a_{Co}$, con $\vec a_{tr} = \vec a_{O'} + \dot{\vec\omega}\times\vec r\,' + \vec\omega\times(\vec\omega\times\vec r\,')$ e $\vec a_{Co} = 2\,\vec\omega\times\vec v\,'$.
- Coriolis: solo se il sistema ruota e il punto si muove in esso; perpendicolare a $\vec\omega$ e $\vec v\,'$; cicloni opposti nei due emisferi.
- $\vec V$ costante e niente rotazione ⇒ $\vec a = \vec a\,'$: relatività galileiana, sistemi inerziali.
- Sistema accelerato: forza apparente $-m\vec A$; in caduta libera il peso apparente è zero e il corpo fluttua.
- Sistema rotante: centrifuga $m\omega^2 r$ verso l'esterno e Coriolis $-2m\,\vec\omega\times\vec v\,'$.
:::

=== 10 dispense
SLIDES: 09
# Lezione 10 — Dinamica classica, sistemi inerziali e primo principio

## Dalla cinematica alla dinamica
La **cinematica** (lezioni 5-9) descrive **come** si muove un corpo: posizione, velocità, accelerazione, traiettoria. Non si chiede **perché** si muove così.

La **dinamica** studia invece le relazioni tra il moto dei corpi e le **cause** del moto, cioè le **forze** che agiscono su di essi. La domanda tipica della dinamica è: "conoscendo le forze, che moto ne segue?" oppure, al contrario, "osservando il moto, quali forze agiscono?".

La dinamica classica si basa su **quattro principi fondamentali**, frutto dell'opera dei due padri della fisica moderna, **Galileo Galilei** e **Isaac Newton**:
1. il **principio di relatività**;
2. il **principio di inerzia**, o prima legge della dinamica;
3. la **seconda legge della dinamica** di Newton, $\vec F = m\vec a$ (lezione 11);
4. il **principio di azione e reazione**, o terza legge della dinamica (lezione 11).

### Limiti di validità della meccanica classica
L'evoluzione della fisica nel Novecento ha portato alla **teoria della relatività** (Einstein) e alla **meccanica quantistica**. Queste teorie hanno mostrato che la meccanica classica copre un insieme **limitato** di casi: vale per corpi
- di dimensioni **molto maggiori di quelle atomiche** (altrimenti serve la meccanica quantistica);
- che si muovono a velocità **molto minori di quella della luce** $c \approx 3\cdot 10^8\,\mathrm{m/s}$ (altrimenti serve la relatività).

Entro i limiti dell'esperienza quotidiana (auto, palloni, ponti, pianeti) la meccanica classica resta però una descrizione **validissima** e precisa.

## Il principio di relatività
**Enunciato.** Se due laboratori si muovono l'uno rispetto all'altro di **moto rettilineo uniforme**, non esiste **nessun esperimento** che dia risultati diversi nei due laboratori.

Che cosa significa esattamente? L'identità di comportamento **non** riguarda le **singole misure**. Nella lezione sui moti relativi abbiamo visto che la velocità di un corpo misurata nei due laboratori è diversa ($\vec v = \vec v\,' + \vec V$). L'identità riguarda le **leggi fisiche**, cioè le **relazioni** tra le grandezze. Se un membro di un'equazione fisica cambia passando da un sistema all'altro, cambia in modo coerente anche l'altro membro, e l'equazione resta vera.

Per questo si dice che le leggi fisiche sono **covarianti** rispetto al passaggio tra due sistemi in moto rettilineo uniforme l'uno rispetto all'altro: mantengono la **stessa forma**. Il caso in cui entrambi i membri restano addirittura **identici** (invarianza) è un caso particolare, che si presenta solo raramente.

::: esempio
**Il treno silenzioso.** Sei in un treno che viaggia a velocità costante su un binario perfettamente liscio, con i finestrini oscurati. Lasci cadere una moneta: cade dritta ai tuoi piedi, esattamente come a casa. Fai rimbalzare una palla, versi l'acqua in un bicchiere, fai oscillare un pendolo: tutto avviene come in un laboratorio fermo. Nessun esperimento fatto dentro il treno ti permette di stabilire se il treno è fermo o in moto rettilineo uniforme. Le **velocità** misurate da te e da chi è sulla banchina sono diverse (la moneta, per lui, cade descrivendo una parabola), ma le **leggi** che descrivono il moto sono le stesse.
:::

## Sistemi di riferimento inerziali
I principi della dinamica non valgono in un sistema di riferimento qualsiasi. I **sistemi di riferimento inerziali** sono quelli in cui le leggi della dinamica assumono la loro **forma più semplice**.

Per definirli serve il concetto di **punto materiale libero**: un punto su cui **non è esercitata nessuna forza** (o, in pratica, su cui le forze hanno risultante nulla).

**Definizione.** Un sistema di riferimento si dice **inerziale** se un punto materiale libero, posto inizialmente in quiete, **permane in quiete**.

Una posizione in cui un punto in quiete resta in quiete si chiama **posizione di equilibrio**. Si può allora dire in modo equivalente: sono inerziali i sistemi in cui **ogni posizione è una posizione di equilibrio** per un punto materiale libero.

**Proprietà fondamentale.** Per il principio di relatività, se un sistema di riferimento è inerziale, **ogni altro sistema in moto rettilineo uniforme rispetto a esso è anch'esso inerziale**. Infatti nella lezione 9 abbiamo visto che due sistemi in moto rettilineo uniforme relativo misurano la **stessa accelerazione**, $\vec a = \vec a\,'$: se il corpo libero non accelera in uno, non accelera nemmeno nell'altro.

Al contrario, un sistema che **accelera** (cambia il modulo o la direzione della sua velocità) o che **ruota** **non** è inerziale: in esso un corpo libero sembra accelerare senza che nessuna forza agisca (lezione 13).

::: esempio
**Inerziale o no?**
- Un treno che viaggia a $100\,\mathrm{km/h}$ costanti su un rettilineo: inerziale (con ottima approssimazione).
- Lo stesso treno che frena: **non** inerziale (una pallina sul pavimento rotola in avanti da sola).
- Un'auto che percorre una curva a velocità costante in modulo: **non** inerziale (la velocità cambia direzione; un oggetto sul cruscotto scivola verso l'esterno).
- Una giostra che gira: **non** inerziale.
:::

## Il primo principio della dinamica (principio di inerzia)
**Enunciato della dispensa.** In un sistema di riferimento inerziale, un punto materiale libero che abbia a un certo istante una velocità $\vec v$ mantiene indefinitamente, finché rimane libero, il suo stato di **moto rettilineo uniforme** con velocità $\vec v$. Il caso in cui $\vec v$ è nulla è un **caso particolare**: il corpo inizialmente fermo resta fermo.

**Forma più usata.** *Un punto materiale mantiene costante la propria velocità se e solo se è soggetto a una forza totale nulla.* Oppure, con le parole classiche: *un corpo rimane nel suo stato di quiete o di moto rettilineo uniforme finché non agisce su di esso una forza risultante non nulla.*

In formula:
$$\sum_i \vec F_i = 0 \quad\Longleftrightarrow\quad \vec v = \text{costante}$$
dove $\sum_i \vec F_i$ = risultante (somma vettoriale) di tutte le forze che agiscono sul corpo (N) e $\vec v$ = velocità del corpo (m/s), costante in modulo, direzione e verso.

Analizziamo i punti chiave dell'enunciato.
- **Conta la risultante**, non la singola forza. Un libro su un tavolo è soggetto al peso e alla reazione del tavolo: le due forze si annullano, la risultante è zero e il libro resta fermo. Più forze che si bilanciano equivalgono a nessuna forza.
- **La quiete è solo un caso particolare** del moto rettilineo uniforme, quello con $v = 0$. Quiete e moto a velocità costante sono, per la dinamica, la **stessa** situazione: entrambi richiedono risultante nulla.
- **"Velocità costante" vuol dire costante come vettore**: stesso modulo **e** stessa direzione **e** stesso verso. Un moto su una curva, anche a velocità scalare costante, ha la velocità che cambia direzione: quindi **non** è a velocità costante e richiede una forza.
- **Vale nei sistemi inerziali**: anzi, in un certo senso li definisce. In un sistema accelerato un corpo libero non resta in quiete.

### Inerzia e massa
La tendenza di un corpo a **conservare il proprio stato di moto** (la propria velocità) si chiama **inerzia**. Un corpo non ha bisogno di una forza per continuare a muoversi: ha bisogno di una forza per **cambiare** la sua velocità. La grandezza che misura quanto un corpo "resiste" al cambiamento di velocità è la **massa** (lezione 11, massa inerziale).

### Il principio d'inerzia discende dalla relatività
La dispensa nota che il principio d'inerzia si può in qualche modo **derivare** dal principio di relatività e dalla definizione di sistema inerziale. Ragionamento:
1. In un sistema inerziale $S$ un corpo libero in quiete resta in quiete (definizione di sistema inerziale).
2. Considera un secondo sistema $S'$ che si muove rispetto a $S$ di moto rettilineo uniforme con velocità $-\vec V$. Anche $S'$ è inerziale.
3. In $S'$ quel corpo, fermo in $S$, si muove con velocità costante $\vec V$: moto rettilineo uniforme.
4. Quindi un corpo libero può essere in quiete oppure in moto rettilineo uniforme, a seconda del sistema inerziale da cui lo si guarda: i due stati sono equivalenti, ed entrambi si conservano finché il corpo resta libero.

::: attenzione
"Moto rettilineo uniforme **accelerato**" non esiste nel primo principio: senza forza risultante l'accelerazione è zero. Errore classico (di origine aristotelica): pensare che serva una forza per **mantenere** un corpo in moto. Serve una forza per **cambiare** la velocità, non per mantenerla. Se nella vita reale per mantenere in moto un carrello bisogna spingerlo, è perché c'è l'attrito: la spinta serve a bilanciarlo, così la risultante torna a zero.
:::

::: attenzione
**Su una curva l'accelerazione non può essere nulla**, nemmeno a velocità scalare costante. La direzione della velocità cambia sempre, quindi c'è sempre almeno l'accelerazione **centripeta** $v^2/R$ diretta verso il centro di curvatura. Muoversi su un arco di curva senza accelerazione è **impossibile**: se l'accelerazione è nulla, la velocità è costante come vettore e il moto è rettilineo.
:::

## Forza e accelerazione
Dai principi enunciati risulta che, in un sistema inerziale, la **forza** è associata a un'azione che produce una **variazione della velocità**, cioè un'**accelerazione**. Anche nel linguaggio comune diciamo di "esercitare una forza" quando trasciniamo, spingiamo o tratteniamo un oggetto: tutte azioni che cambiano (o impediscono di cambiare) lo stato di moto dell'oggetto.

### Che cos'è una forza
Una **forza** è l'azione che un corpo esercita su un altro corpo (un'**interazione**). Può produrre due tipi di effetti:
- **effetto dinamico**: cambia la velocità del corpo (lo mette in moto, lo frena, lo fa curvare);
- **effetto statico**: lo **deforma** (una molla che si allunga, una trave che si flette), quando il corpo è vincolato e non può muoversi.

La forza è un **vettore**: per descriverla servono **intensità** (modulo), **direzione**, **verso** e **punto di applicazione**. Nel SI si misura in **newton**: $1\,\mathrm N = 1\,\mathrm{kg\cdot m/s^2}$ (la definizione precisa è nella lezione 11).

### Due definizioni operative della forza
Una grandezza fisica va definita indicando **come si misura**. Per la forza ci sono due possibilità:
- **definizione statica**: si basa sulla misura delle **deformazioni** che le forze producono quando sono applicate a sistemi **vincolati a non muoversi**. Lo strumento tipico è il **dinamometro**: una molla tarata il cui allungamento è proporzionale alla forza applicata;
- **definizione dinamica**: si basa sulla misura degli **effetti sul moto** che la forza produce su sistemi **liberi di muoversi**, cioè sull'accelerazione prodotta (seconda legge, lezione 11).

### Carattere vettoriale: la risultante
Poiché le forze sono vettori, più forze applicate allo stesso punto si **sommano come vettori** (regola del parallelogramma), non come numeri. La loro somma si chiama **risultante**.

::: esempio
**Due forze perpendicolari (tipico del paniere).** Due forze di $600\,\mathrm N$ e $800\,\mathrm N$ sono perpendicolari e applicate allo stesso punto. Quanto vale la risultante?

Le due forze sono i cateti di un triangolo rettangolo; la risultante è l'ipotenusa (diagonale del parallelogramma, qui un rettangolo). Per il teorema di Pitagora:
$$R = \sqrt{600^2 + 800^2} = \sqrt{360\,000 + 640\,000} = \sqrt{1\,000\,000} = 1000\,\mathrm N$$
Non $1400\,\mathrm N$ (che sarebbe la somma dei moduli, valida solo per forze parallele e concordi) né $200\,\mathrm N$ (differenza, valida per forze parallele e opposte). La risultante è inclinata rispetto alla forza da $800\,\mathrm N$ di un angolo con $\tan\varphi = 600/800 = 0{,}75$, cioè $\varphi \approx 36{,}9°$.
:::

::: esempio
**Forze parallele e accelerazione (tipico del paniere).** Su un corpo di $15\,\mathrm{kg}$ agiscono due forze parallele. Una vale $40\,\mathrm N$. Il corpo accelera a $2\,\mathrm{m/s^2}$ nel verso della prima forza. Quanto vale l'altra?

1. Dalla seconda legge ($F = ma$, lezione 11) la risultante vale $R = ma = 15 \cdot 2 = 30\,\mathrm N$, nel verso della prima forza.
2. Se le due forze fossero concordi, la risultante sarebbe maggiore di $40\,\mathrm N$. È invece $30\,\mathrm N < 40\,\mathrm N$: quindi l'altra forza è **opposta** alla prima.
3. Con il verso della prima forza positivo: $40 - F_2 = 30$, quindi $F_2 = 10\,\mathrm N$, in verso opposto.
:::

## La massa
Torniamo a un'accelerazione che conosciamo bene dalla cinematica: l'**accelerazione di gravità** $g$. Quando teniamo un oggetto tra le braccia per impedirgli di cadere, **sentiamo** di esercitare una forza. E sperimentiamo che, a parità di accelerazione di gravità, per oggetti diversi dobbiamo applicare forze **diverse**: per reggere un sacco di cemento serve molta più forza che per reggere un libro.

Associamo questa differenza a un **parametro intrinseco** del corpo, che chiamiamo **massa** $m$: per corpi di massa maggiore dobbiamo applicare una forza maggiore. La stretta relazione tra **forza, massa e accelerazione** è alla base di tutta la dinamica (lezione 11).

### Definizione operativa: la bilancia a due piatti
Una definizione operativa della massa si può dare in forma **statica** (o meglio **gravitazionale**) con una **bilancia classica a due piatti** e una serie di **campioni** derivati dal chilogrammo. Si mette l'oggetto su un piatto e sull'altro si aggiungono multipli e sottomultipli del chilogrammo campione finché la bilancia è in equilibrio: la massa dell'oggetto è la somma delle masse campione usate. L'unità SI è il **chilogrammo** (kg).

La massa è una grandezza **scalare** e **intrinseca**: non dipende dal luogo in cui si trova il corpo (sulla Terra, sulla Luna o in orbita la massa è la stessa).

### Massa, volume e densità
Per corpi fatti della **stessa sostanza** (omogenei) la massa è proporzionale al volume:
$$m = d\cdot V$$
dove $m$ = massa (kg), $d$ = densità della sostanza (kg/m³), $V$ = volume (m³).

::: esempio
**Due cubi della stessa sostanza (tipico del paniere).** Due cubi hanno spigolo $1\,\mathrm m$ e $2\,\mathrm m$. Il volume di un cubo è $V = \ell^3$:
- cubo piccolo: $V_1 = 1^3 = 1\,\mathrm{m^3}$;
- cubo grande: $V_2 = 2^3 = 8\,\mathrm{m^3}$.

Stessa sostanza ⇒ stessa densità ⇒ massa proporzionale al volume: $m_2/m_1 = V_2/V_1 = 8$. Il cubo grande ha massa **8 volte** maggiore, non 2 volte (raddoppia lo spigolo, ma il volume cresce con il cubo dello spigolo) e non 4 volte (che è il rapporto delle superfici, $2^2$).
:::

## Massa e peso
Il **peso** è la forza con cui la Terra attira un corpo. È un vettore diretto verticalmente verso il basso, di modulo
$$P = mg$$
dove $P$ = peso (N), $m$ = massa (kg), $g \approx 9{,}8\,\mathrm{m/s^2}$ = accelerazione di gravità sulla superficie terrestre.

Massa e peso sono grandezze **diverse** (la massa è uno scalare in kg, il peso un vettore in N) ma **proporzionali** tra loro. Il peso dipende dal luogo (da $g$), la massa no. Le loro proprietà sono approfondite nella lezione 12.

::: esempio
**Peso di una mela (tipico del paniere).** Massa $100\,\mathrm g$. Prima la converto in kg: $100\,\mathrm g = 0{,}1\,\mathrm{kg}$. Poi $P = mg = 0{,}1 \cdot 9{,}8 = 0{,}98\,\mathrm N$. Una mela "pesa" circa un newton.
:::

::: esempio
**Che oggetto pesa circa $0{,}5\,\mathrm N$? (tipico del paniere).** Ricavo la massa: $m = P/g = 0{,}5/9{,}8 \approx 0{,}051\,\mathrm{kg} = 51\,\mathrm g$. Un oggetto di circa $50$-$60\,\mathrm g$: una **pallina da tennis** (circa $57\,\mathrm g$). Per confronto: un'auto pesa circa $10^4\,\mathrm N$, una persona circa $700\,\mathrm N$, un foglio di carta circa $0{,}05\,\mathrm N$.
:::

## Galileo e la caduta dei gravi
Secondo una tradizione celebre, Galileo salì sulla **Torre di Pisa** e lasciò cadere due oggetti di **massa diversa**: arrivarono a terra **nello stesso istante**. Aristotele sosteneva invece che i corpi più pesanti cadono più in fretta.

La conclusione di Galileo: **in assenza di aria tutti i corpi cadono con la stessa accelerazione** $g$, qualunque sia la loro massa. Nella realtà quotidiana una piuma cade più lentamente di un sasso solo a causa della resistenza dell'aria (lezione 14); in un tubo in cui è stato fatto il vuoto cadono insieme. Il motivo dinamico (il peso cresce con la massa, ma cresce allo stesso modo anche l'inerzia, e così $a = mg/m = g$) è spiegato nelle lezioni 11 e 12.

## Perché un oggetto lanciato in alto torna giù
È una domanda aperta del paniere: va spiegata **con i principi della dinamica**, in parole semplici.

1. Al momento del lancio la mano imprime all'oggetto una velocità iniziale $v_0$ verso l'alto. Appena l'oggetto lascia la mano, la mano non lo spinge più.
2. Per **inerzia** l'oggetto tenderebbe a continuare a salire con la stessa velocità, in moto rettilineo uniforme (primo principio).
3. Ma su di esso agisce una forza: il **peso** $mg$, sempre diretto **verso il basso**. La risultante non è nulla, quindi la velocità cambia: l'oggetto ha un'accelerazione $g$ verso il basso.
4. In salita l'accelerazione è opposta alla velocità: l'oggetto **rallenta**, perdendo $9{,}8\,\mathrm{m/s}$ di velocità ogni secondo.
5. Dopo un tempo $t = v_0/g$ la velocità si annulla: è il **punto più alto** della traiettoria, a quota $h = v_0^2/(2g)$.
6. Il peso continua ad agire anche lì (nel punto più alto la velocità è zero, ma l'accelerazione no!). Quindi l'oggetto riparte verso il basso, ora con velocità e accelerazione concordi: **accelera** e torna giù.
7. Senza aria, torna nel punto di lancio con la stessa velocità $v_0$ in modulo, dopo un tempo totale $2v_0/g$.

::: esempio
Un sasso lanciato in alto a $v_0 = 14{,}7\,\mathrm{m/s}$. Tempo di salita: $t = 14{,}7/9{,}8 = 1{,}5\,\mathrm s$. Altezza massima: $h = 14{,}7^2/(2\cdot 9{,}8) = 216{,}1/19{,}6 \approx 11\,\mathrm m$. Torna nella mano dopo $3\,\mathrm s$ con velocità $14{,}7\,\mathrm{m/s}$ verso il basso.
:::

::: attenzione
Nel punto più alto **non** c'è equilibrio: la velocità è nulla per un istante, ma la forza (il peso) c'è ancora e quindi c'è l'accelerazione $g$. Equilibrio vorrebbe dire risultante nulla, cosa che lì non succede.
:::

## La Terra è un sistema inerziale?
Unendo quanto visto sui moti relativi e la definizione di sistema inerziale, possiamo dire che **la superficie terrestre non è, a rigore, un sistema inerziale**. La Terra infatti:
- **ruota** attorno al proprio asse (un giro al giorno);
- **rivoluziona** attorno al Sole (un giro all'anno).

L'approssimazione migliore di sistema inerziale relativamente "vicina" a noi è un sistema con l'origine nel **centro del Sistema Solare** e gli assi orientati verso **determinate stelle fisse**. Rispetto a questo sistema il moto della Terra è composto da vari contributi, tra cui rotazione e rivoluzione.

Queste accelerazioni sono però **molto piccole**: la maggiore di esse è **centinaia di volte minore** di $g$ (l'accelerazione centripeta all'Equatore dovuta alla rotazione è $\omega^2 R_T \approx (7{,}27\cdot 10^{-5})^2 \cdot 6{,}37\cdot 10^6 \approx 0{,}034\,\mathrm{m/s^2}$, circa 300 volte meno di $g$). I loro effetti sono di solito **trascurabili**, quindi invisibili, negli esperimenti di laboratorio con cui si verifica il principio d'inerzia.

Diventano invece **rilevanti** per fenomeni che **durano a lungo** e che si estendono su **ampie zone** della superficie terrestre. Esempio tipico: i **cicloni** ruotano in senso **antiorario** nell'emisfero Nord e in senso **orario** nell'emisfero Sud. Questo effetto dipende direttamente dal fatto che, per questi fenomeni, il riferimento terrestre non è inerziale (effetto di Coriolis, lezioni 9 e 13).

### Quanto sono piccoli gli effetti: due numeri della dispensa
- Un grave lasciato cadere da fermo da **100 m** di altezza, a una latitudine intermedia, non atterra esattamente sulla sua verticale: per effetto dell'accelerazione di trascinamento e di Coriolis si sposta di circa **17 cm** e **2 cm** rispettivamente. Sono correzioni ben al di sotto dell'1% delle dimensioni in gioco.
- Un corpo che si muove per pochi metri a **10 m/s** subisce un'accelerazione di Coriolis di circa $7\cdot 10^{-4}\,\mathrm{m/s^2}$, trascurabile rispetto a $g = 9{,}8\,\mathrm{m/s^2}$ (oltre diecimila volte più piccola).

**Convenzione per i problemi.** Dove non è indicato esplicitamente, si considera il riferimento terrestre **localmente inerziale**: gli effetti di trascinamento e di Coriolis si trascurano rispetto ai fenomeni studiati.

## Sistemi in moto circolare uniforme: un primo sguardo alle forze apparenti
Un sistema in **moto circolare uniforme** non è inerziale, perché in esso sono presenti accelerazioni centripete. La dispensa lo illustra con una **piattaforma che ruota** a velocità angolare costante $\omega$, su cui ci sono due corpi: uno di massa $m$ trattenuto da una **molla** a distanza $R$ dal centro, uno di massa $m'$ trattenuto da un **filo** a distanza $R'$. Due osservatori guardano la scena.

- **Osservatore fermo** (a terra, inerziale). I due corpi si muovono di moto circolare uniforme, quindi devono essere sottoposti a forze **centripete**: la molla esercita $F_{el} = m\omega^2 R$, il filo esercita $T = m'\omega^2 R'$, entrambe verso il centro.
- **Osservatore sulla piattaforma** (non inerziale). Per lui i due corpi sono **in quiete**. Ma la molla e il filo tirano verso il centro: per spiegare l'equilibrio deve introdurre due **forze apparenti**, dette **centrifughe**, dirette verso l'esterno, tali che $F_{centrifuga} = F_{el}$ e $F'_{centrifuga} = T$.

Che succede se la palla, invece di stare ferma sulla piattaforma, **si muove**? L'osservatore O' si mette al centro e lancia una palla in direzione radiale. L'osservatore fermo la vede allontanarsi **in linea retta** (nessuna forza orizzontale: primo principio). L'osservatore sulla piattaforma vede invece una **traiettoria curva**, e la forza centrifuga da sola non basta a spiegarla (spingerebbe la palla lungo il raggio). Deve ammettere una forza **trasversale** apparente: la **forza di Coriolis**. Con rotazione **antioraria** e allontanamento dal centro, la palla devia verso **destra**; devia verso **sinistra** con rotazione oraria o con moto di avvicinamento al centro. La Terra, che ruota attorno all'asse polare, è un sistema non inerziale simile a questa piattaforma.

### Ricapitolando: le forze apparenti
In generale un sistema **non è inerziale** quando **ruota** o quando la sua velocità **varia** in intensità o direzione. In tal caso sul corpo, oltre alle accelerazioni dovute alle forze applicate, si manifestano accelerazioni dovute al moto del sistema. Le si attribuisce a forze dette **apparenti**, perché **nessun ente fisico** ne è responsabile. Proprietà:
- i loro effetti sono sentiti solo dagli **osservatori in moto accelerato**; per l'osservatore fermo (inerziale) **non esistono**;
- **non** sono però "immaginarie": si possono **misurare** con un **dinamometro**;
- si chiamano anche **forze inerziali**, perché sono **proporzionali alla massa inerziale**;
- non sono forze in senso newtoniano, cioè non sono l'effetto dell'interazione tra corpi: non dipendono dalla presenza o meno di altri corpi.

Sono trattate in dettaglio nella lezione 13.

::: esame
- **"Completa il primo principio: un corpo rimane nel suo stato di quiete…"** → "…o di moto rettilineo uniforme finché non agisce su di esso una forza risultante non nulla". Scarta le varianti con "moto uniformemente accelerato", "forza" (invece di "forza risultante") o "velocità costante in modulo".
- **"Esporre il primo principio della dinamica"** (aperta): enunciato (quiete o moto rettilineo uniforme se e solo se la risultante è nulla), formula $\sum\vec F = 0 \Leftrightarrow \vec v$ costante, la quiete come caso particolare, vale nei sistemi inerziali, concetto di inerzia, forza serve per cambiare la velocità e non per mantenerla.
- **"Cos'è un sistema di riferimento inerziale?"** (aperta): sistema in cui un punto materiale libero in quiete resta in quiete (ogni posizione è di equilibrio) e in moto resta in moto rettilineo uniforme; ogni sistema in moto rettilineo uniforme rispetto a un inerziale è inerziale; sistemi accelerati o rotanti non lo sono; la Terra è localmente inerziale, il migliore è centrato sul Sole con assi verso le stelle fisse.
- **"Perché un oggetto lanciato in alto prima sale e poi torna giù"** (aperta): inerzia + peso sempre verso il basso che lo decelera fino a fermarlo e poi lo accelera verso il basso.
- **Chiuse di calcolo**: peso $P = mg$ (con grammi convertiti in kg), forze perpendicolari con Pitagora, forze parallele con la risultante $ma$, massa proporzionale al volume ($\ell^3$), impossibilità di un moto curvo senza accelerazione, Galileo e la Torre di Pisa (stesso istante, masse diverse).
:::

::: sintesi
- Dinamica = studio delle cause del moto (forze). Quattro principi: relatività, inerzia, $\vec F = m\vec a$, azione e reazione. Validi per corpi grandi rispetto agli atomi e lenti rispetto alla luce.
- Relatività: tra laboratori in moto rettilineo uniforme relativo nessun esperimento distingue; le leggi sono covarianti (stessa forma), le singole misure cambiano.
- Sistema inerziale: un punto libero in quiete resta in quiete (ogni posizione è di equilibrio); ogni sistema in moto rettilineo uniforme rispetto a un inerziale è inerziale.
- Primo principio: $\sum\vec F = 0 \Leftrightarrow \vec v$ costante (quiete o moto rettilineo uniforme). Inerzia = tendenza a conservare la velocità; la misura è la massa.
- Su una curva c'è sempre accelerazione; una forza serve a cambiare la velocità, non a mantenerla.
- Forza: vettore, effetti dinamici (accelerazione) e statici (deformazione); definizione statica (dinamometro) e dinamica (accelerazione); si sommano come vettori.
- Massa: scalare intrinseco, bilancia a due piatti; $m = dV$. Peso $P = mg$. Senza aria tutti i corpi cadono con la stessa $g$ (Galileo).
- La Terra è localmente inerziale: effetti di trascinamento e Coriolis piccoli (17 cm e 2 cm su 100 m di caduta), visibili solo su grandi scale (cicloni).
- Forze apparenti: nei sistemi accelerati o rotanti, senza un corpo che le eserciti, proporzionali alla massa, misurabili con un dinamometro.
:::

=== 11 dispense
SLIDES: 10
# Lezione 11 — Secondo e terzo principio della dinamica

Il primo principio ci ha detto **quando** la velocità di un corpo resta costante: quando la risultante delle forze è nulla. Il secondo principio dice **di quanto** cambia la velocità quando la risultante **non** è nulla: è la legge quantitativa che lega forza, massa e accelerazione, e che collega la dinamica alla cinematica. Il terzo principio, infine, dice che le forze nascono sempre **a coppie**, dall'interazione tra due corpi. Insieme, i tre principi sono la base di tutta la meccanica classica.

## Il secondo principio della dinamica (legge di Newton)
**Enunciato.** La forza totale (risultante) applicata a un punto materiale di massa $m$ è uguale al prodotto della massa per l'accelerazione che essa produce:
$$\vec F = m\vec a$$
dove:
- $\vec F$ = forza **risultante** che agisce sul corpo, cioè la somma vettoriale di tutte le forze (N);
- $m$ = massa (inerziale) del corpo (kg);
- $\vec a$ = accelerazione del corpo, misurata in un sistema inerziale (m/s²).

### Che cosa dice, a parole
- L'accelerazione è **proporzionale** alla forza: forza doppia, accelerazione doppia.
- L'accelerazione ha la **stessa direzione e lo stesso verso** della forza risultante (la massa è un numero positivo, quindi non cambia la direzione del vettore).
- A parità di forza l'accelerazione è **inversamente proporzionale** alla massa: $a = F/m$. Più massa vuol dire più inerzia, quindi meno accelerazione.
- La forza determina l'**accelerazione**, cioè la **variazione di velocità**, **non** la velocità. Un corpo può avere velocità grande e forza nulla (moto rettilineo uniforme), oppure velocità nulla e forza non nulla (il punto più alto di un sasso lanciato in alto).

### Il secondo principio contiene il primo
Se la forza risultante è nulla, $\vec F = 0$, allora $m\vec a = 0$ e quindi (essendo $m \ne 0$) $\vec a = 0$: la velocità resta costante. È proprio il principio di inerzia. Il secondo principio quindi **include** il primo come caso particolare.

### La forza è un vettore
La massa è una quantità **intrinseca** e **scalare** del corpo; l'accelerazione è un **vettore**. Il prodotto di uno scalare per un vettore è un vettore: quindi anche la **forza è una grandezza vettoriale**. Questo è un risultato della legge, non un'ipotesi aggiuntiva.

### Dimensioni e unità di misura
Dalla legge $F = ma$:
$$[F] = [M]\,[L\,T^{-2}] = [M\,L\,T^{-2}]$$
L'unità SI è il **newton** (N), definito come la forza necessaria a imprimere a un corpo di massa $1\,\mathrm{kg}$ un'accelerazione di $1\,\mathrm{m/s^2}$:
$$1\,\mathrm N = 1\,\mathrm{kg}\cdot 1\,\mathrm{m/s^2} = 1\,\mathrm{kg\cdot m/s^2}$$

::: esempio
**Calcoli diretti con $F = ma$ (tipici del paniere).**
- *Forza per accelerare $1{,}80\,\mathrm{kg}$ a $1{,}80\,\mathrm{m/s^2}$*: $F = ma = 1{,}80 \cdot 1{,}80 = 3{,}24\,\mathrm N$.
- *Disco da hockey*: una risultante di $10\,\mathrm N$ gli dà $a = 50\,\mathrm{m/s^2}$. Massa: $m = F/a = 10/50 = 0{,}2\,\mathrm{kg}$.
- *Blocco di $50\,\mathrm{kg}$ con una forza orizzontale di $100\,\mathrm N$, senza attrito*: $a = F/m = 100/50 = 2\,\mathrm{m/s^2}$.
- *Notazione con lettere*: se un oggetto di massa "A" subisce una forza risultante "B" e un'accelerazione "C", la legge si scrive $B = A\times C$ (forza = massa × accelerazione). Attenzione a non invertire i ruoli dei simboli.
:::

::: esempio
**La slitta caricata (tipico del paniere).** Una slitta si muove sotto l'azione di una forza $F$ costante. Se poggiamo un oggetto sulla slitta, la massa totale aumenta da $m$ a $m + m_{ogg}$. Con la stessa forza:
$$a_{prima} = \frac{F}{m}, \qquad a_{dopo} = \frac{F}{m + m_{ogg}} < a_{prima}$$
L'accelerazione **diminuisce** (non la velocità "di colpo", e non resta uguale).
:::

## Massa inerziale e massa gravitazionale
Nella lezione 10 abbiamo definito la massa in modo **statico**, con la bilancia a due piatti: è la massa **gravitazionale**, quella che determina quanto il corpo è attirato dalla Terra.

La dispensa osserva che si poteva seguire la strada **inversa**:
1. definire la forza in modo indipendente, con un **dinamometro** a deformazione (si associa l'allungamento di una molla alla forza applicata);
2. applicare forze note a un corpo e misurare l'accelerazione prodotta;
3. definire la **massa** come la proprietà intrinseca del corpo data dal **rapporto fisso** tra la forza applicata e l'accelerazione prodotta:
$$m = \frac{F}{a}$$

Questa è una definizione **dinamica** della massa, e la massa così definita si chiama **massa inerziale**: misura la **resistenza** del corpo a cambiare il suo stato di moto (la sua **inerzia**). A parità di forza applicata, maggiore è la massa, maggiore è l'inerzia e quindi **minore** è l'accelerazione.

Sperimentalmente massa inerziale e massa gravitazionale **coincidono** (con precisione altissima). È proprio per questo che tutti i corpi cadono con la stessa accelerazione: il peso $m_g g$ è proporzionale alla massa gravitazionale, la resistenza ad accelerare alla massa inerziale, e il loro rapporto è sempre lo stesso: $a = m_g g / m_i = g$.

::: esempio
**L'astronauta e le valigette (tipico del paniere).** Un astronauta in assenza di peso ha due valigette identiche e chiuse: una è vuota, l'altra contiene un paracadute da $14\,\mathrm{kg}$. Come le distingue?

Pesarle non serve: in orbita entrambe "galleggiano", la bilancia segna zero per tutte e due. Ma la **massa inerziale** non sparisce con il peso. Se l'astronauta le **scuote avanti e indietro**, deve imprimere accelerazioni: per dare la stessa accelerazione alla valigetta piena serve una forza molto maggiore ($F = ma$). Sente la differenza nelle braccia: la valigetta che "resiste" di più è quella con il paracadute.
:::

## Più forze: la risultante
Il carattere vettoriale della forza ci dice che, se su un corpo agiscono più forze $\vec F_1, \vec F_2, \dots, \vec F_N$, la legge di Newton si applica alla loro **risultante**, cioè alla somma vettoriale:
$$\vec R = \sum_{i=1}^{N}\vec F_i = \vec F_1 + \vec F_2 + \dots + \vec F_N = m\vec a$$
dove $\vec R$ = risultante (N), $\vec F_i$ = singole forze (N).

Questa relazione dice anche che, in presenza di più forze, il contributo di ciascuna si può considerare **indipendentemente dalle altre**, anche nelle sue conseguenze sull'accelerazione: ogni forza produce la "sua" accelerazione $\vec F_i/m$, e l'accelerazione totale è la somma di queste (principio di **sovrapposizione** o di indipendenza delle forze).

**Equilibrio statico.** Nel caso particolare in cui la risultante è **nulla** e il punto è **inizialmente in quiete**, si dice che sono realizzate le condizioni di **equilibrio statico** delle forze: il punto resta fermo.

### Come si sommano le forze
Con le forze si fanno tutte le operazioni dei vettori:
- **forze con la stessa retta d'azione**: si sommano con il segno (concordi: somma dei moduli; opposte: differenza);
- **forze con rette d'azione diverse**: **regola del parallelogramma**; la risultante è la diagonale del parallelogramma costruito sulle due forze. Il modulo, se le forze formano un angolo $\alpha$, è $R = \sqrt{F_1^2 + F_2^2 + 2F_1F_2\cos\alpha}$;
- **forze perpendicolari** ($\alpha = 90°$, $\cos\alpha = 0$): $R = \sqrt{F_1^2 + F_2^2}$;
- **tre forze**: si applica due volte la regola del parallelogramma (prima si sommano due forze, poi si aggiunge la terza alla loro risultante);
- in pratica, con molte forze, conviene **scomporre** ogni forza nelle componenti $x$ e $y$ e sommare le componenti: $R_x = \sum F_{ix}$, $R_y = \sum F_{iy}$, $R = \sqrt{R_x^2 + R_y^2}$.

::: esempio
**Un esempio del carattere vettoriale delle forze (domanda aperta).** Due persone tirano una cassa, ciascuna con una forza di $30\,\mathrm N$.
- Tirano **nello stesso verso**: $R = 30 + 30 = 60\,\mathrm N$.
- Tirano in **versi opposti**: $R = 30 - 30 = 0$, la cassa (se ferma) resta ferma.
- Tirano **ad angolo retto**: $R = \sqrt{30^2 + 30^2} = 30\sqrt2 \approx 42{,}4\,\mathrm N$, diretta lungo la bisettrice (a $45°$ da ciascuna corda).
- Tirano a $120°$ l'una dall'altra: $R = \sqrt{900 + 900 + 2\cdot 900\cos120°} = \sqrt{900} = 30\,\mathrm N$.

Le forze sono sempre le stesse due, di $30\,\mathrm N$, ma la risultante va da $0$ a $60\,\mathrm N$ a seconda delle **direzioni**: per questo la forza è un vettore e non basta il suo modulo per conoscerne l'effetto.
:::

::: esempio
**Equilibrio di tre forze (tipico del paniere).** Tre forze complanari possono avere risultante nulla solo se, messe "punta-coda", formano un **triangolo chiuso**. In un triangolo ogni lato è minore o uguale alla somma degli altri due (disuguaglianza triangolare). Quindi **ciascuna forza non deve superare la somma delle altre due**.
- $1\,\mathrm N$, $3\,\mathrm N$, $5\,\mathrm N$: $5 > 1 + 3 = 4$. Anche allineando le due forze piccole nello stesso verso, il massimo che danno è $4\,\mathrm N$, non abbastanza per bilanciare $5\,\mathrm N$. Equilibrio **impossibile** con qualunque angolo.
- $3\,\mathrm N$, $4\,\mathrm N$, $5\,\mathrm N$: $5 \le 7$, equilibrio possibile (le forze formano un triangolo rettangolo).
- $2\,\mathrm N$, $3\,\mathrm N$, $5\,\mathrm N$: $5 = 2 + 3$, equilibrio possibile solo con le tre forze allineate (triangolo "schiacciato").
:::

## Dinamica e legge oraria del moto
La seconda legge mette in relazione la **dinamica** con la **cinematica**, perché individua le **cause** dell'accelerazione. Essendo una legge vettoriale, si può **scomporre lungo gli assi**:
$$F_x = m a_x = m\frac{d^2x}{dt^2}, \qquad F_y = m a_y = m\frac{d^2y}{dt^2}, \qquad F_z = m a_z = m\frac{d^2z}{dt^2}$$
Sono tre equazioni scalari indipendenti. Questo permette due tipi di problemi:
- **problema diretto**: se si conoscono le masse e l'andamento nel tempo delle forze, si ricava l'accelerazione e, integrando con le condizioni iniziali (posizione e velocità iniziali), la **legge oraria** del moto;
- **problema inverso**: se si conosce la legge oraria, derivandola si ottiene l'accelerazione e quindi le **forze** in gioco.

### Forza costante: moto uniformemente accelerato
Se la forza è costante, anche $\vec a = \vec F/m$ è costante: il moto è **uniformemente accelerato** (in ogni direzione) e valgono le leggi della cinematica. Lungo una retta, partendo da fermo dall'origine:
$$a = \frac{F}{m}, \qquad v = at, \qquad s = \tfrac12 a t^2, \qquad v^2 = 2as$$
dove $v$ = velocità (m/s), $t$ = tempo (s), $s$ = spazio percorso (m).

::: esempio
**Blocco spinto da una forza costante (tipico del paniere).** $F = 150\,\mathrm N$ su un blocco di $60\,\mathrm{kg}$, senza attrito, partenza da fermo.
1. Accelerazione: $a = F/m = 150/60 = 2{,}5\,\mathrm{m/s^2}$.
2. Velocità dopo $3\,\mathrm s$: $v = at = 2{,}5 \cdot 3 = 7{,}5\,\mathrm{m/s}$.
3. Spazio dopo $3\,\mathrm s$: $s = \tfrac12 a t^2 = \tfrac12 \cdot 2{,}5 \cdot 3^2 = 1{,}25 \cdot 9 = 11{,}25\,\mathrm m$.

Errore tipico: usare $s = at^2$ senza il fattore $\tfrac12$ (darebbe $22{,}5\,\mathrm m$) o $s = vt$ con la velocità finale (darebbe ancora $22{,}5\,\mathrm m$: ma la velocità non è costante, è cresciuta da 0 a 7,5).
:::

::: esempio
**Esercizio della dispensa: la traiettoria parabolica.** Un punto materiale di massa $m = 2\,\mathrm{kg}$ parte dall'origine di un sistema $Oxy$ con velocità $v_0 = 5\,\mathrm{m/s}$ diretta nel verso positivo dell'asse $y$. È sottoposto a una forza costante $F = 4\,\mathrm N$ diretta lungo l'asse $x$. Determinare la traiettoria.

1. Scompongo la seconda legge lungo i due assi:
   - asse $x$: $F_x = 4\,\mathrm N$ ⇒ $a_x = F_x/m = 4/2 = 2\,\mathrm{m/s^2}$; velocità iniziale lungo $x$ nulla;
   - asse $y$: $F_y = 0$ ⇒ $a_y = 0$; velocità iniziale lungo $y$ uguale a $5\,\mathrm{m/s}$.
2. Lungo $x$ il moto è uniformemente accelerato, lungo $y$ uniforme:
$$x(t) = \tfrac12 a_x t^2 = t^2, \qquad y(t) = v_0 t = 5t$$
3. Per la traiettoria elimino il tempo: dalla seconda $t = y/5$; sostituisco nella prima:
$$x = \left(\frac{y}{5}\right)^2 = \frac{y^2}{25}$$
La traiettoria è una **parabola** con asse lungo $x$ e vertice nell'origine. È lo stesso tipo di moto di un proiettile, con la forza costante al posto del peso.
:::

### Velocità dopo un tratto: il teorema dell'energia cinetica
Quando il dato è lo **spazio** percorso e non il tempo, è comodo combinare $v^2 = 2as$ con $a = F/m$:
$$v^2 = 2\frac{F}{m}s \quad\Longrightarrow\quad F s = \tfrac12 m v^2$$
Il prodotto $Fs$ è il **lavoro** compiuto dalla forza (J), e $\tfrac12 mv^2$ è l'**energia cinetica** acquistata partendo da fermo (J). È il teorema dell'energia cinetica (lezione 17), qui ricavato direttamente dalla seconda legge per forza costante.

::: esempio
**Il carrello sul binario (tipico del paniere).** Carrello di $2\,\mathrm{kg}$ tirato da $50\,\mathrm N$ per $10\,\mathrm m$, senza attrito, partenza da fermo.
1. Energia cinetica acquistata = lavoro della forza: $E_c = Fs = 50 \cdot 10 = 500\,\mathrm J$.
2. Velocità: $\tfrac12 mv^2 = 500$ ⇒ $v^2 = 2\cdot 500/2 = 500$ ⇒ $v = \sqrt{500} \approx 22{,}4\,\mathrm{m/s}$ (le risposte del paniere lo arrotondano a $22$ o $22{,}3\,\mathrm{m/s}$).
3. Verifica con la cinematica: $a = 50/2 = 25\,\mathrm{m/s^2}$; $v = \sqrt{2as} = \sqrt{2\cdot 25\cdot 10} = \sqrt{500}$. Stesso risultato.
:::

## Velocità costante ⇒ risultante nulla
Se un corpo si muove a **velocità costante** (in modulo e direzione) oppure è **fermo**, l'accelerazione è zero e quindi, per la seconda legge, la **risultante è zero**. È il ragionamento chiave di moltissimi quesiti: dalla velocità costante si **deducono** le forze che non sono date (di solito l'attrito o una spinta).

::: esempio
**Ragionamenti con risultante nulla (tutti tipici del paniere).**
- *Carrello trainato da $10\,\mathrm N$ a velocità costante*: risultante nulla ⇒ c'è una forza opposta di $10\,\mathrm N$, l'**attrito**.
- *Corpo che scivola a velocità costante con $6\,\mathrm N$ verso destra e $2\,\mathrm N$ verso sinistra*: le due forze date hanno risultante $4\,\mathrm N$ verso destra. Per avere risultante nulla l'attrito deve valere $4\,\mathrm N$ **verso sinistra**. In verticale peso e reazione del piano si bilanciano: la **componente verticale della risultante è $0$** (come quella orizzontale).
- *Aereo di $1000\,\mathrm{kg}$ in crociera a velocità costante con attrito dell'aria di $1800\,\mathrm N$*: velocità costante ⇒ risultante **$0\,\mathrm N$**. La spinta dei motori vale $1800\,\mathrm N$ e bilancia l'attrito; la portanza delle ali bilancia il peso. Il dato della massa è superfluo.
- *Insetto in volo a velocità costante*: risultante nulla ⇒ l'aria gli dà una spinta verso l'alto **pari al suo peso**.
- *Sasso che affonda nell'acqua a velocità costante*: peso (in giù), spinta di Archimede e attrito viscoso dell'acqua (in su) hanno **risultante nulla**. Il sasso scende comunque perché la velocità c'è già: non serve una forza per mantenerla.
- *Forza applicata a un oggetto fermo che non lo mette in moto*: ci sono **altre forze** (tipicamente l'attrito statico) che ne annullano l'effetto; la risultante resta zero.
- *Mongolfiera ferma in aria*: la spinta verso l'alto è uguale al suo peso.
:::

::: attenzione
"Si muove" non vuol dire "c'è una forza nel verso del moto". Il sasso che affonda, l'aereo in crociera, il carrello a velocità costante hanno tutti **risultante zero**. Una risultante non nulla si deduce solo da una **variazione** di velocità.
:::

## Forze e grandezze utili nei quesiti
- **Peso** $P = mg$: un uomo che pesa $686\,\mathrm N$ ha massa $m = 686/9{,}8 = 70\,\mathrm{kg}$. Un corpo di $25\,\mathrm{kg}$ appeso a una corda la tira con $P = 25 \cdot 9{,}8 = 245\,\mathrm N$: una corda che regge al massimo $250\,\mathrm N$ **regge** (di poco). Attenzione: "un peso di 25 kg" nel linguaggio comune indica la massa.
- **Densità** $d = m/V$, in $\mathrm{kg/m^3}$ (o $\mathrm{g/cm^3}$; $1\,\mathrm{g/cm^3} = 1000\,\mathrm{kg/m^3}$, e $1\,\mathrm{ml} = 1\,\mathrm{cm^3}$). Esempio: $15\,\mathrm g$ in $20\,\mathrm{ml}$ ⇒ $d = 15/20 = 0{,}75\,\mathrm{g/cm^3} = 750\,\mathrm{kg/m^3}$ (in SI: $0{,}015\,\mathrm{kg} / 2\cdot 10^{-5}\,\mathrm{m^3} = 750\,\mathrm{kg/m^3}$).
- **Spinta di Archimede**: un fluido spinge verso l'alto un corpo immerso con una forza pari al **peso del fluido spostato** (lezione 31).
- **Piano inclinato** di altezza $h$ e lunghezza $l$: la componente del peso lungo il piano è $P\sin\alpha = P\,h/l$ (perché $\sin\alpha = h/l$). Per tenere fermo, spingendolo lungo il piano, un carrello da $200\,\mathrm N$ su un piano lungo $2\,\mathrm m$ e alto $1{,}5\,\mathrm m$ serve una forza uguale e opposta a questa componente: $F = 200\cdot 1{,}5/2 = 150\,\mathrm N$. La componente perpendicolare $P\cos\alpha$ è bilanciata dal piano (lezione 12).

## Ascensore che accelera: l'accelerazione vista da dentro
Un'applicazione della composizione delle accelerazioni (lezione 9). In un ascensore che accelera con $\vec A$ rispetto a terra, un corpo **libero** (non appoggiato a nulla) è soggetto solo al peso, quindi rispetto a terra ha accelerazione $\vec g$. Rispetto all'ascensore la sua accelerazione è
$$\vec a\,' = \vec g - \vec A$$

::: esempio
**Il corpo che "sale" nell'ascensore (tipico del paniere).** Dentro un ascensore in moto misuriamo per un corpo (che prima era appoggiato al pavimento) un'accelerazione di modulo $g$ diretta **verso l'alto** rispetto alle pareti. Come si muove l'ascensore?

Asse verso l'alto. Allora $\vec g = -g$ e $\vec a\,' = +g$. Dalla formula: $+g = -g - A$ ⇒ $A = -2g$. L'ascensore **accelera verso il basso con $2g$**: scende più rapidamente della caduta libera, e il pavimento "scappa" sotto il corpo, che rispetto all'ascensore sembra salire verso il soffitto. Se l'ascensore salisse a velocità costante, $\vec a\,' = \vec g$ (verso il basso); se scendesse con $g/2$, il corpo resterebbe sul pavimento premendo meno.
:::

## Il terzo principio della dinamica (azione e reazione)
**Enunciato.** In un sistema inerziale, se un corpo A esercita una forza $\vec F_{A\to B}$ su un corpo B, allora il corpo B esercita una forza $\vec F_{B\to A}$ sul corpo A; le due forze hanno **stessa direzione** e **stesso modulo**, ma **verso opposto**:
$$\vec F_{B\to A} = -\vec F_{A\to B}$$
dove $\vec F_{A\to B}$ = forza che A esercita su B (N) e $\vec F_{B\to A}$ = forza che B esercita su A (N).

Per questo si chiama anche **principio di azione e reazione**, e spesso si sintetizza così: *a ogni azione corrisponde una reazione uguale e contraria, agente sulla stessa retta d'azione*.

Le caratteristiche della coppia azione-reazione:
- **stesso modulo**;
- **stessa direzione**, anzi la **stessa retta d'azione**;
- **verso opposto**;
- sono applicate a **corpi diversi** (una su A, una su B): per questo **non si annullano** tra loro. Si annullerebbero solo se agissero sullo stesso corpo;
- sono della **stessa natura** (entrambe gravitazionali, entrambe di contatto, ecc.) e nascono e spariscono insieme.

La dispensa nota che il terzo principio è stato introdotto qui per completezza nella dinamica del punto, ma trova la sua derivazione naturale nello studio dei **sistemi di punti materiali** (lezione 22, conservazione della quantità di moto).

::: esempio
**Il Sole e Giove (tipico del paniere).** La massa di Giove è circa un millesimo di quella del Sole. In che rapporto stanno la forza del Sole su Giove e quella di Giove sul Sole?

Sono una coppia azione-reazione: **stesso modulo**, rapporto **$1:1$**. Non dipendono dal rapporto delle masse. Ciò che cambia sono le **accelerazioni**: $a = F/m$, quindi Giove, mille volte meno massiccio, accelera mille volte di più del Sole. È per questo che è Giove a girare attorno al Sole e non il contrario (in realtà entrambi girano attorno al centro di massa comune, che è molto vicino al Sole).
:::

::: esempio
**Il libro sul tavolo: quali forze sono una coppia?** Sul libro agiscono il peso (forza della Terra sul libro) e la reazione del tavolo (forza del tavolo sul libro). Si annullano, ma **non** sono una coppia azione-reazione: agiscono sullo **stesso** corpo e sono di natura diversa. Le vere coppie sono:
- Terra attira libro ↔ libro attira Terra (con la stessa forza $mg$, applicata al centro della Terra);
- tavolo spinge libro verso l'alto ↔ libro preme sul tavolo verso il basso.
:::

::: attenzione
"Stesso modulo ma **direzioni** opposte" è sbagliato: la **direzione** (la retta) è la stessa, è il **verso** a essere opposto. E azione e reazione **non** dipendono dalle masse dei due corpi: sono sempre uguali in modulo, anche tra un camion e una mosca.
:::

## I tre principi insieme
Riassumendo, nei sistemi inerziali:
1. $\sum\vec F = 0 \;\Rightarrow\; \vec v = \text{costante}$ (primo principio, principio d'inerzia);
2. $\sum\vec F \ne 0 \;\Rightarrow\; \vec F = m\vec a$ (secondo principio della dinamica);
3. $\vec F_{AB} = -\vec F_{BA}$ (terzo principio, azione e reazione).

Si chiamano anche **leggi di Newton**. Il nome "**principio**" indica che sono frutto dell'**esperienza**: non si dimostrano a partire da altre relazioni, e sono il fondamento su cui si basa tutta la **meccanica classica** (corpi più grandi degli atomi e lenti rispetto alla luce).

### La seconda legge rispetta il principio di relatività (quesito della dispensa)
Verifichiamo che $\vec F = m\vec a$ obbedisce al principio di relatività galileiano. Se due sistemi si muovono di moto rettilineo uniforme l'uno rispetto all'altro, l'accelerazione relativa di un punto è uguale a quella assoluta: $\vec a\,' = \vec a$ (lezione 9). La massa è una quantità intrinseca del punto, uguale nei due sistemi. Quindi
$$\vec F\,' = m\vec a\,' = m\vec a = \vec F$$
La legge di Newton ha la stessa forma (anzi è proprio invariata) in tutti i sistemi inerziali.

## La reazione vincolare (introduzione)
Se un corpo è soggetto a una risultante non nulla, perché resti **fermo** possiamo aggiungere un **dispositivo fisso** che, per reazione, gli opponga una forza uguale e opposta alla risultante. Così ricreiamo le condizioni di **equilibrio statico**. Il dispositivo si chiama **vincolo** e la forza che esercita sul corpo si chiama **reazione vincolare**.

Esempi: un **tavolo** su cui è appoggiato un oggetto, che lo tiene in equilibrio contro la forza di gravità; un **filo** fissato a una parete a cui è appeso un oggetto, che esercita su di esso una forza opposta alla gravità. Il concetto di reazione vincolare, introdotto per l'equilibrio statico, si estende anche alle situazioni **dinamiche** (corpo che scivola su un piano, lezione 12).

::: esame
- **"Esporre il secondo principio della dinamica"** (aperta): $\vec F = m\vec a$ con $\vec F$ = **risultante** delle forze; accelerazione proporzionale alla forza, con la sua direzione e verso, inversamente proporzionale alla massa; contiene il primo principio ($\vec F = 0 \Rightarrow \vec a = 0$); la forza è un vettore perché la massa è scalare; $[F] = [MLT^{-2}]$, $1\,\mathrm N = 1\,\mathrm{kg\,m/s^2}$; massa inerziale $m = F/a$; collega dinamica e cinematica (legge oraria); vale nei sistemi inerziali.
- **"Esporre il concetto di forza"** (aperta): interazione tra corpi; vettore (modulo, direzione, verso, punto di applicazione); effetti dinamici (accelerazione) e statici (deformazione); definizione statica (dinamometro) e dinamica ($F = ma$); unità newton; si sommano come vettori; nascono a coppie (terzo principio).
- **"Fate un esempio del carattere vettoriale delle forze"** (aperta): due forze uguali con angoli diversi danno risultanti diverse (0, 42, 60 N…); regola del parallelogramma; Pitagora per forze perpendicolari.
- **Chiuse**: $F = ma$ diretta e inversa; legge oraria con forza costante ($\tfrac12$!); lavoro = energia cinetica; velocità costante ⇒ risultante nulla (attrito, spinte, sasso, insetto, aereo); terzo principio ($1:1$, stessa direzione, verso opposto); equilibrio di tre forze (disuguaglianza triangolare); massa inerziale (scuotere le valigette); ascensore che scende con $2g$; densità; piano inclinato $Ph/l$.
:::

::: sintesi
- Secondo principio: $\vec F = m\vec a$, $\vec F$ = risultante; contiene il primo; la forza è un vettore; $1\,\mathrm N = 1\,\mathrm{kg\,m/s^2}$, $[F] = [MLT^{-2}]$.
- La forza determina la variazione di velocità (l'accelerazione), non la velocità.
- Massa inerziale $m = F/a$ (resistenza ad accelerare); coincide con la massa gravitazionale ⇒ tutti cadono con $g$.
- Più forze: $\vec R = \sum\vec F_i = m\vec a$, contributi indipendenti; parallelogramma, Pitagora, componenti. Tre forze in equilibrio solo se ognuna ≤ somma delle altre due.
- Forza costante: $a = F/m$, $v = at$, $s = \tfrac12 at^2$; $Fs = \tfrac12 mv^2$. Componenti ⇒ legge oraria (problema diretto e inverso).
- Velocità costante o quiete ⇒ risultante nulla.
- Terzo principio: $\vec F_{B\to A} = -\vec F_{A\to B}$; stesso modulo e retta, verso opposto, corpi diversi, non si annullano.
- I principi vengono dall'esperienza; $F = ma$ è invariante tra sistemi inerziali.
- Vincolo e reazione vincolare: forza del dispositivo che ristabilisce l'equilibrio.
:::

=== 12 dispense
SLIDES: 11, 10
# Lezione 12 — Forza peso, reazioni vincolari, tensione e applicazioni

Con i tre principi della dinamica possiamo affrontare i problemi tipici del punto materiale. Questa lezione passa in rassegna le **forze più comuni**: il **peso**, la **reazione vincolare** (o forza normale) di un piano, la **tensione** di un filo, e vede come combinarle nei dispositivi classici: il **piano inclinato**, la **macchina di Atwood**, i corpi collegati da fili, il **moto circolare** (forza centripeta). Il metodo è sempre lo stesso:
1. disegnare **tutte** le forze che agiscono su **ciascun** corpo (diagramma di corpo libero);
2. scegliere gli assi (di solito uno lungo il moto e uno perpendicolare);
3. scrivere $\sum F = ma$ lungo ogni asse per ogni corpo;
4. aggiungere i legami (filo inestensibile ⇒ stessa accelerazione in modulo) e risolvere.

## Massa e peso
La **massa** $m$ è una proprietà **intrinseca** del corpo: misura la sua **inerzia** (la resistenza a cambiare velocità, lezione 11) e la quantità di "materia". È uno **scalare**, si misura in **kg** e **non cambia** da un luogo all'altro: la stessa sulla Terra, sulla Luna, su Venere o in orbita.

Il **peso** è invece una **forza**: la forza di attrazione gravitazionale che la Terra (o il pianeta su cui ci si trova) esercita sul corpo. È un **vettore** diretto verticalmente **verso il basso** (verso il centro della Terra):
$$\vec P = m\vec g$$
dove $\vec P$ = peso (N), $m$ = massa (kg), $\vec g$ = accelerazione di gravità (m/s²), di modulo circa $9{,}8\,\mathrm{m/s^2}$ sulla superficie terrestre.

Peso e massa sono grandezze **diverse** (unità diverse, una vettore e una scalare) ma **direttamente proporzionali**: a parità di luogo, raddoppiando la massa raddoppia il peso. Il fattore di proporzionalità $g$ però dipende dal luogo:
- su un altro pianeta $g$ è diverso (sulla Luna circa $1{,}6\,\mathrm{m/s^2}$, su Venere circa $8{,}9\,\mathrm{m/s^2}$): un oggetto portato lì ha **la stessa massa ma peso diverso**;
- anche sulla Terra $g$ varia un poco con la latitudine e la quota (lezione 13).

Il peso di un corpo misurato da una bilancia (a molla) è in realtà la **reazione vincolare** che la bilancia esercita per tenerlo fermo: per questo in un ascensore accelerato o in caduta libera la bilancia segna un valore diverso da $mg$ (lezione 13).

### Dove si applica il peso
Il peso agisce su ogni parte del corpo, ma il suo effetto complessivo equivale a una sola forza applicata nel **baricentro**. In un corpo rigido una forza si può **spostare lungo la propria retta d'azione** senza cambiarne l'effetto (stesso effetto di traslazione e stesso momento). Quindi il peso si può considerare applicato in **qualunque punto della retta verticale passante per il baricentro**.

::: esempio
**Calcoli di peso (tipici del paniere).**
- Ragazzo di $44\,\mathrm{kg}$ fermo su una bilancia: $P = mg = 44 \cdot 9{,}8 = 431{,}2 \approx 430\,\mathrm N$.
- Corpo di $3\,\mathrm{kg}$ appeso a una fune, fermo: la fune deve bilanciare il peso, $T = mg = 3 \cdot 9{,}8 = 29{,}4 \approx 30\,\mathrm N$.
- Lo stesso corpo su Venere ($g_V \approx 8{,}9\,\mathrm{m/s^2}$): massa ancora $3\,\mathrm{kg}$, peso $\approx 26{,}7\,\mathrm N$.
:::

## La caduta dei gravi
Un **grave** è un corpo soggetto soltanto (o quasi) alla forza peso. Se si trascura l'aria, la seconda legge dà:
$$m a = m g \quad\Longrightarrow\quad a = g$$
L'accelerazione **non dipende dalla massa**: il peso cresce con la massa, ma cresce allo stesso modo anche l'inerzia, e il rapporto è sempre $g$. È la conclusione di Galileo (esperimento della Torre di Pisa): **tutti i corpi, in assenza di aria, cadono con la stessa accelerazione** e, lasciati dalla stessa altezza, arrivano a terra **nello stesso istante**.

### Le leggi della caduta libera
La caduta libera da fermo è un **moto uniformemente accelerato** con accelerazione $g$. Prendendo l'asse verso il basso, con partenza da fermo:
$$v = gt, \qquad h = \tfrac12 g t^2, \qquad v = \sqrt{2gh}$$
dove $v$ = velocità (m/s), $t$ = tempo di caduta (s), $h$ = altezza di caduta (m).

La terza si ottiene eliminando il tempo: dalla prima $t = v/g$; sostituendo nella seconda $h = \tfrac12 g (v/g)^2 = v^2/(2g)$, cioè $v^2 = 2gh$. Il tempo di caduta da un'altezza $h$ è $t = \sqrt{2h/g}$.

Se il corpo è lanciato verso l'alto con $v_0$, il moto è ancora uniformemente accelerato ma con accelerazione opposta alla velocità iniziale: sale per un tempo $v_0/g$, raggiunge l'altezza $v_0^2/(2g)$ e ricade (lezione 10).

::: esempio
Un sasso cade da fermo da $20\,\mathrm m$.
- Tempo: $t = \sqrt{2h/g} = \sqrt{40/9{,}8} = \sqrt{4{,}08} \approx 2{,}02\,\mathrm s$.
- Velocità all'arrivo: $v = \sqrt{2gh} = \sqrt{2\cdot 9{,}8\cdot 20} = \sqrt{392} \approx 19{,}8\,\mathrm{m/s}$ (verifica: $v = gt = 9{,}8 \cdot 2{,}02 \approx 19{,}8$).
- Dopo $1\,\mathrm s$ ha percorso solo $\tfrac12\cdot 9{,}8\cdot 1 = 4{,}9\,\mathrm m$: lo spazio cresce con il quadrato del tempo.
:::

### Energia potenziale e dislivello
Durante la caduta il peso compie un lavoro $mgh$ che si trasforma in energia cinetica (lezioni 17-20). La variazione di **energia potenziale gravitazionale** dipende **solo dal dislivello**:
$$\Delta U = mg\,\Delta h$$
dove $\Delta U$ = variazione di energia potenziale (J), $\Delta h$ = dislivello (m). Su una rampa curva senza attrito conta quindi solo l'**altezza** di partenza e di arrivo, non la lunghezza né la forma del percorso.

### Con l'aria
Con l'aria la situazione cambia: la resistenza dell'aria (attrito viscoso) cresce con la velocità e si oppone al moto. Dopo un certo tempo bilancia il peso e il corpo cade a **velocità costante** (velocità limite). Per questo le **gocce di pioggia**, nell'ultima parte della discesa, cadono a velocità costante: l'attrito viscoso dell'aria bilancia la forza di gravità (lezione 14).

## La reazione vincolare
Un **vincolo** è un oggetto che **impedisce** al corpo certi movimenti: un tavolo (impedisce di scendere), un pavimento, un piano inclinato, un filo attaccato a una parete, un binario.

La forza che il vincolo esercita sul corpo si chiama **reazione vincolare**. Nella lezione 11 l'abbiamo introdotta così: se su un corpo agisce una risultante non nulla e vogliamo che resti fermo, aggiungiamo un dispositivo fisso che gli opponga, per reazione, una forza uguale e opposta, ricreando l'equilibrio statico.

### Perché bisogna definire le reazioni vincolari
Un libro appoggiato su un tavolo ha un peso $mg$, eppure resta **fermo**. Per il primo principio, se è fermo la risultante delle forze deve essere **nulla**. Se l'unica forza fosse il peso, il libro dovrebbe accelerare verso il basso con $g$. Deve quindi esistere un'altra forza, uguale e opposta al peso: è la **reazione del tavolo**.

Senza le reazioni vincolari le leggi della dinamica **non** riuscirebbero a spiegare i corpi appoggiati, appesi o guidati (un treno sul binario, una pallina in una guida). Sono forze **vere** (dovute all'interazione con il vincolo, che si deforma impercettibilmente), con la loro coppia di azione e reazione: il libro preme sul tavolo, il tavolo spinge sul libro.

### Proprietà della reazione di un piano
**Direzione.** Per un piano (o una superficie) liscio, cioè senza attrito, la reazione è sempre **perpendicolare (normale) alla superficie**. Per questo si chiama anche **forza normale** e si indica con $N$ (o $R_N$). Se c'è attrito, la reazione ha anche una componente parallela alla superficie, che è proprio l'attrito (lezione 14).

**Modulo.** Il modulo della reazione **non è fissato a priori**: non è "sempre uguale al peso". Si **adatta** alle altre forze: è uguale in modulo, e opposto in verso, alla **risultante delle componenti delle altre forze perpendicolari alla superficie** (finché il corpo resta appoggiato). Il vincolo "risponde" con quanto serve a impedire il moto attraverso la superficie, fino al limite di rottura.

Il concetto, introdotto per l'equilibrio statico, vale anche in condizioni **dinamiche**: un corpo che scivola su un piano ha accelerazione solo parallela al piano, quindi lungo la normale la risultante è ancora nulla e la reazione bilancia le componenti normali delle altre forze.

::: esempio
**La reazione si adatta (tipici del paniere).**
- *Oggetto di $2\,\mathrm{kg}$ su un tavolo, spinto verso il basso con $20\,\mathrm N$.* Lungo la verticale il corpo è fermo: $N - mg - 20 = 0$, quindi $N = 2\cdot 9{,}8 + 20 = 19{,}6 + 20 = 39{,}6 \approx 40\,\mathrm N$. Più del peso.
- *Stesso oggetto tirato verso l'alto con $5\,\mathrm N$ (che non basta a sollevarlo).* $N + 5 - 19{,}6 = 0$, quindi $N = 14{,}6\,\mathrm N$. Meno del peso.
- *Blocco tirato orizzontalmente con $F$, che scorre a velocità costante con attrito $f$.* In orizzontale velocità costante ⇒ $F = f$. In verticale nessuna forza oltre a peso e normale ⇒ $N = P$. Se la forza fosse inclinata verso l'alto, $N$ sarebbe minore di $P$.
- *Corpo su un piano inclinato di $\theta$.* La componente del peso perpendicolare al piano è $mg\cos\theta$: quindi $N = mg\cos\theta$, minore del peso.
:::

::: attenzione
"La reazione vincolare è uguale al peso" è vero **solo** nel caso particolare di un corpo appoggiato su un piano **orizzontale**, con nessun'altra forza verticale e senza accelerazione verticale. In generale $N$ va **calcolata** dall'equilibrio lungo la normale.
:::

## La tensione dei fili
Un altro dispositivo tipico è il **filo inestensibile e di massa trascurabile**, che permette di trascinare o sostenere un corpo attaccato a un suo estremo.

**Come funziona.** Quando il filo è teso, ogni suo pezzetto è in equilibrio (ha massa nulla, quindi la risultante su di esso deve essere zero anche se accelera): subisce forze **uguali e opposte** dai due lati. La forza si trasmette così, pezzetto dopo pezzetto, **fino agli estremi**, dove la tensione verso l'interno del filo è bilanciata dalla forza esterna che l'ha messo in tensione. Ai due capi il filo trasmette la forza, detta **tensione** $T$, ai corpi attaccati.

Proprietà della tensione:
- è diretta **parallelamente al filo**, verso l'**interno** del filo: un filo può solo **tirare**, mai spingere;
- ha lo **stesso modulo** ai due estremi (perché il filo ha massa trascurabile);
- ai due estremi ha quindi **verso opposto** (ciascun estremo tira il corpo attaccato verso l'altro estremo);
- il filo è solo un dispositivo che **trasmette** la forza tra i suoi estremi.

**Inestensibile** significa che la sua lunghezza non cambia: i corpi ai due capi si muovono con la **stessa velocità e accelerazione in modulo** (lungo il filo).

### La puleggia
Una **puleggia** (o carrucola) **senza massa**, attorno a cui il filo scorre **senza attrito**, serve a **cambiare la direzione** del filo, e quindi della tensione, senza cambiarne il **modulo**: la tensione è la stessa da una parte e dall'altra della puleggia.

::: esempio
**Tensione e velocità costante (tipici del paniere).**
- *Secchio di $120\,\mathrm N$ calato a velocità costante con una corda.* Velocità costante ⇒ risultante nulla ⇒ $T - 120 = 0$ ⇒ $T = 120\,\mathrm N$. Non dipende da **quanto** velocemente scende, purché la velocità sia costante.
- *Slitta trascinata con un filo inestensibile di massa trascurabile.* Ai due estremi la tensione ha **stesso modulo** e **verso opposto**, diretta sempre verso l'interno del filo: al capo della slitta tira la slitta in avanti, al capo della mano tira la mano all'indietro.
:::

## Forza verticale e peso: ascensori e funi
Quando su un corpo agiscono il peso e una forza verticale $T$ (tensione di un cavo, spinta), si sceglie l'alto come positivo e si scrive:
$$T - mg = ma$$
dove $T$ = forza verso l'alto (N), $m$ = massa (kg), $g$ = accelerazione di gravità (m/s²), $a$ = accelerazione (m/s², positiva se verso l'alto, negativa se verso il basso).

::: esempio
**Il cavo dell'ascensore (tipico del paniere).** Il cavo che sostiene un ascensore di $2100\,\mathrm{kg}$ regge al massimo $21\,750\,\mathrm N$. Massima accelerazione verso l'alto senza spezzarsi?
1. Peso: $mg = 2100\cdot 9{,}8 = 20\,580\,\mathrm N$.
2. Con la tensione massima: $ma = T - mg = 21\,750 - 20\,580 = 1170\,\mathrm N$.
3. $a = 1170/2100 \approx 0{,}56\,\mathrm{m/s^2}$ verso l'alto.
:::

::: esempio
**Forza verso l'alto minore del peso (tipico del paniere).** Corpo di $60\,\mathrm{kg}$ soggetto al peso e a una forza verticale di $450\,\mathrm N$ verso l'alto.
1. Peso: $60\cdot 9{,}8 = 588\,\mathrm N$.
2. Risultante: $450 - 588 = -138\,\mathrm N$ (negativa: verso il basso).
3. $a = -138/60 = -2{,}3\,\mathrm{m/s^2}$: modulo $2{,}3\,\mathrm{m/s^2}$, **verso il basso**.
:::

::: esempio
**Forza totale sull'ascensore (tipico del paniere).** Un ascensore è tirato verso l'alto da una fune con tensione $1500\,\mathrm N$. La forza totale è $F = T - mg$. Il testo del paniere indica una massa di $10\,\mathrm{kg}$, ma con quel dato $F = 1500 - 98 = 1402\,\mathrm N$, che non è tra le risposte; il valore atteso, $520\,\mathrm N$, corrisponde a una massa di $100\,\mathrm{kg}$: $F = 1500 - 100\cdot 9{,}8 = 1500 - 980 = 520\,\mathrm N$. In ogni caso il metodo è: tensione **meno** peso, perché hanno versi opposti.
:::

## Il piano inclinato
Il **piano inclinato** fu uno dei dispositivi principali usati da Galileo nei suoi studi: permette di "rallentare" la caduta e misurarla. È una pedana **levigata** (quindi assunta **priva di attrito**) che forma un angolo $\theta$ con la superficie orizzontale, su cui un corpo può scorrere.

### Le forze e l'accelerazione
Sul corpo di massa $m$ agiscono:
- il **peso** $m\vec g$, verticale verso il basso;
- la **reazione normale** $\vec N$, perpendicolare al piano.

Conviene scegliere gli assi **lungo il piano** ($x$, verso la discesa) e **perpendicolare al piano** ($y$). Il peso forma con la perpendicolare al piano lo stesso angolo $\theta$ che il piano forma con l'orizzontale (angoli con lati perpendicolari). Quindi il peso si scompone in:
- componente **parallela** al piano: $mg\sin\theta$, verso la discesa;
- componente **perpendicolare** al piano: $mg\cos\theta$, verso il piano.

Scriviamo la seconda legge lungo i due assi:
$$x:\quad m a = mg\sin\theta \qquad\Longrightarrow\qquad a = g\sin\theta$$
$$y:\quad N - mg\cos\theta = 0 \qquad\Longrightarrow\qquad N = mg\cos\theta$$
Lungo $y$ l'accelerazione è nulla perché il corpo resta sul piano.

Conseguenze:
- poiché $\sin\theta \le 1$, l'accelerazione sul piano inclinato è **sempre minore o uguale a $g$**; è uguale a $g$ solo per $\theta = 90°$ (piano verticale = caduta libera), è zero per $\theta = 0$ (piano orizzontale);
- la reazione $N = mg\cos\theta$ è **minore del peso**.

Se il piano è descritto da altezza $h$ e lunghezza $\ell$: $\sin\theta = h/\ell$ e $\cos\theta = b/\ell$, con $b = \sqrt{\ell^2 - h^2}$ la base.

### Legge oraria
Il moto lungo il piano è uniformemente accelerato con $a = g\sin\theta$. Partendo da fermo:
$$s(t) = \tfrac12 g\sin\theta\,t^2, \qquad v(t) = g\sin\theta\,t$$
Nel sistema cartesiano con $x$ orizzontale e $y$ verticale, un corpo che parte da fermo in $x = 0$ alla quota $y_0$ ha un'accelerazione che si scompone in $a_x = g\sin\theta\cos\theta$ (orizzontale) e $a_y = -g\sin^2\theta$ (verticale), quindi, finché non tocca terra:
$$x(t) = \tfrac12 g\sin\theta\cos\theta\,t^2, \qquad y(t) = y_0 - \tfrac12 g\sin^2\theta\,t^2$$

### La velocità in fondo dipende solo dall'altezza
Percorso tutto il piano ($s = \ell$) la velocità è $v^2 = 2a\ell = 2g\sin\theta\,\ell = 2g\,(\ell\sin\theta) = 2gh$, cioè
$$v = \sqrt{2gh}$$
La velocità finale **non dipende** dalla pendenza né dalla lunghezza del piano, ma solo dall'**altezza** $h$. Ed è la **stessa** che il corpo avrebbe cadendo liberamente dalla stessa altezza. Cambia invece il **tempo**: su un piano poco inclinato si arriva più tardi, ma alla stessa velocità.

::: esempio
**Esercizio della dispensa: la cassa sul piano inclinato.** Una cassa di massa $m = 4{,}2\,\mathrm{kg}$ scende, partendo da ferma, dalla sommità di un piano inclinato privo di attrito lungo $\ell = 7{,}5\,\mathrm m$ e alto $h = 3{,}8\,\mathrm m$. Determinare le forze, il tempo di discesa e la velocità finale.

1. *Forze.* Peso: $P = mg = 4{,}2\cdot 9{,}8 = 41{,}16\,\mathrm N$, verticale verso il basso. Reazione vincolare perpendicolare al piano. Per calcolarla serve la base $b$, con Pitagora: $b = \sqrt{\ell^2 - h^2} = \sqrt{56{,}25 - 14{,}44} = \sqrt{41{,}81} \approx 6{,}47\,\mathrm m$. Allora $\cos\theta = b/\ell = 6{,}47/7{,}5 \approx 0{,}862$ e $N = P\cos\theta = 41{,}16\cdot 0{,}862 \approx 35{,}5\,\mathrm N$.
2. *Accelerazione.* $\sin\theta = h/\ell = 3{,}8/7{,}5 \approx 0{,}507$; $a = g\sin\theta = 9{,}8\cdot 0{,}507 \approx 4{,}97\,\mathrm{m/s^2}$.
3. *Tempo.* Moto uniformemente accelerato da fermo: $\ell = \tfrac12 a t^2$ ⇒ $t = \sqrt{2\ell/a} = \sqrt{15/4{,}97} = \sqrt{3{,}02} \approx 1{,}74\,\mathrm s$.
4. *Velocità finale.* $v = at = 4{,}97\cdot 1{,}74 \approx 8{,}6\,\mathrm{m/s}$. Verifica: $\sqrt{2gh} = \sqrt{2\cdot 9{,}8\cdot 3{,}8} = \sqrt{74{,}5} \approx 8{,}6\,\mathrm{m/s}$. Stesso valore: dipende solo da $h$.
:::

::: esempio
**Esercizio della dispensa: cassa spinta orizzontalmente su per il piano.** Una cassa di $m = 100\,\mathrm{kg}$ sale a **velocità costante** su un piano inclinato liscio di $\theta = 30°$, spinta da una forza $F$ **orizzontale**. Trovare $F$ e la forza del piano sulla cassa.

Forze: peso $mg = 980\,\mathrm N$, normale $N$, forza orizzontale $F$. Velocità costante ⇒ risultante nulla. Scompongo lungo il piano e perpendicolarmente:
- la forza orizzontale ha componente lungo il piano (verso la salita) $F\cos\theta$ e componente perpendicolare (verso il piano) $F\sin\theta$;
- lungo il piano: $F\cos\theta - mg\sin\theta = 0$ ⇒ $F = mg\tan\theta = 980\cdot 0{,}577 \approx 566\,\mathrm N$;
- perpendicolare: $N - mg\cos\theta - F\sin\theta = 0$ ⇒ $N = 980\cdot 0{,}866 + 566\cdot 0{,}5 = 848{,}7 + 283 \approx 1132\,\mathrm N$.

Nota: $N$ è **maggiore** del peso, perché la spinta orizzontale preme la cassa contro il piano. (Equivale a $N = mg/\cos\theta = 980/0{,}866 \approx 1132\,\mathrm N$.)
:::

::: esempio
**Il carrello tenuto fermo (tipico del paniere).** Carrello di peso $200\,\mathrm N$ su un piano lungo $2\,\mathrm m$ e alto $1{,}5\,\mathrm m$; lo si tiene fermo spingendolo **parallelamente** al piano. La forza deve bilanciare la componente del peso lungo il piano: $F = P\sin\theta = P\,h/\ell = 200\cdot 1{,}5/2 = 150\,\mathrm N$.
:::

## La macchina di Atwood
La **macchina di Atwood** è l'applicazione più semplice del cambio di direzione della tensione con una puleggia. Due masse $m_1$ e $m_2$ sono appese ai capi di un filo inestensibile, di massa trascurabile, che passa su una puleggia senza massa e senza attrito.

Tutta la dinamica avviene lungo l'asse verticale $y$ (positivo verso l'alto). Grazie alla puleggia le tensioni sui due corpi hanno lo **stesso modulo** $T$ e lo **stesso verso**: entrambe verso l'alto. Il filo è inestensibile, quindi se un corpo sale con accelerazione $a$ l'altro scende con la stessa accelerazione: $a_2 = -a_1$. Chiamo $a = a_1$.

Seconda legge per i due corpi:
$$m_1 a = T - m_1 g$$
$$-m_2 a = T - m_2 g$$
Sottraggo la seconda dalla prima per eliminare $T$:
$$m_1 a + m_2 a = -m_1 g + m_2 g \quad\Longrightarrow\quad a = \frac{m_2 - m_1}{m_1 + m_2}\,g$$
Sostituisco nella prima per trovare la tensione:
$$T = m_1(g + a) = m_1 g\left(1 + \frac{m_2 - m_1}{m_1 + m_2}\right) = m_1 g\,\frac{2m_2}{m_1 + m_2} = \frac{2m_1 m_2}{m_1 + m_2}\,g$$
dove $m_1, m_2$ = masse (kg), $a$ = accelerazione di $m_1$ (m/s², positiva verso l'alto), $T$ = tensione del filo (N).

Osservazioni:
- se $m_1 > m_2$, $a$ è **negativa**: $m_1$ scende, perché ha peso maggiore;
- l'accelerazione è sempre **minore di $g$**: la differenza dei pesi $(m_2 - m_1)g$ deve accelerare la massa **totale** $m_1 + m_2$;
- scegliendo masse quasi uguali (peso e contrappeso) si ottiene un'accelerazione **piccola a piacere**: era il modo per studiare la caduta dei gravi "al rallentatore" e misurare $g$;
- la tensione è compresa tra i due pesi: minore del peso della massa che scende, maggiore del peso di quella che sale.

::: esempio
**Atwood con 9 kg e 11 kg (tipico del paniere).**
$$a = \frac{11 - 9}{9 + 11}\,g = \frac{2}{20}\,g = \frac{g}{10} \approx 0{,}98\,\mathrm{m/s^2}$$
La massa da $11\,\mathrm{kg}$ scende, quella da $9\,\mathrm{kg}$ sale. Tensione: $T = \dfrac{2\cdot 9\cdot 11}{20}\cdot 9{,}8 = 9{,}9\cdot 9{,}8 \approx 97\,\mathrm N$, tra $9g = 88{,}2\,\mathrm N$ e $11g = 107{,}8\,\mathrm N$.
:::

## Corpi collegati e corpi a contatto
Quando più corpi si muovono insieme (collegati da fili o a contatto), hanno la **stessa accelerazione**. Due modi equivalenti di procedere:
- considerare il **sistema intero** come un unico corpo di massa totale, soggetto solo alle forze **esterne** (le forze interne, tensioni intermedie o forze di contatto, si annullano a coppie per il terzo principio);
- scrivere la seconda legge per **ciascun** corpo, con le forze interne, e risolvere il sistema.

Di solito si usa il primo per trovare l'accelerazione e il secondo per trovare le forze interne.

::: esempio
**Esercizio della dispensa: due casse a contatto.** Due casse a contatto su un piano orizzontale senza attrito, $m_1 = 2{,}4\,\mathrm{kg}$ e $m_2 = 3{,}6\,\mathrm{kg}$. Una forza $F = 12\,\mathrm N$ agisce sulla prima. Trovare l'accelerazione e la forza di contatto $F_c$.

Le casse si spingono a vicenda con forze opposte di uguale modulo $F_c$ (terzo principio) e si muovono insieme con la stessa $a$.
- Cassa 1: $m_1 a = F - F_c$.
- Cassa 2: $m_2 a = F_c$.

Sommando membro a membro: $(m_1 + m_2)a = F$ ⇒ $a = 12/6 = 2\,\mathrm{m/s^2}$. Poi $F_c = m_2 a = 3{,}6\cdot 2 = 7{,}2\,\mathrm N$. La forza di contatto è minore di $F$: la cassa 1 "trasmette" alla 2 solo la parte di forza che serve ad accelerare la 2.
:::

::: esempio
**Esercizio della dispensa: quattro blocchi trascinati in fila.** Quattro blocchi $B_1, B_2, B_3, B_4$ legati in fila sono trascinati da una fune legata al primo della fila, $B_4$. Masse: $m_{B1} = 12\,\mathrm{kg}$, $m_{B3} = 15\,\mathrm{kg}$, $m_{B4} = 20\,\mathrm{kg}$. Tensioni: $T_4 = 222\,\mathrm N$ (fune che tira $B_4$) e $T_{2\text{-}3} = 111\,\mathrm N$ (filo tra $B_2$ e $B_3$). Trovare $m_{B2}$ (piano senza attrito).

1. $T_4$ trascina tutto il sistema: $T_4 = (m_{B1} + m_{B2} + m_{B3} + m_{B4})\,a$. Serve $a$, comune a tutti i blocchi.
2. Considero $B_4$ e $B_3$ insieme: davanti c'è $T_4$, dietro c'è $T_{2\text{-}3}$ che li tira indietro. (Si ottiene anche scrivendo le equazioni di $B_4$ e $B_3$ separatamente, con la tensione tra loro, e sommandole: la tensione intermedia si elimina.)
$$T_4 - T_{2\text{-}3} = (m_{B3} + m_{B4})\,a \quad\Rightarrow\quad 222 - 111 = 35\,a \quad\Rightarrow\quad a \approx 3{,}17\,\mathrm{m/s^2}$$
3. Il filo $T_{2\text{-}3}$ trascina $B_2$ e $B_1$: $T_{2\text{-}3} = (m_{B1} + m_{B2})\,a$ ⇒ $m_{B1} + m_{B2} = 111/3{,}17 = 35\,\mathrm{kg}$ ⇒ $m_{B2} = 35 - 12 = 23\,\mathrm{kg}$.
4. Verifica: massa totale $12 + 23 + 15 + 20 = 70\,\mathrm{kg}$; $70\cdot 3{,}17 \approx 222\,\mathrm N = T_4$. ✓
:::

::: esempio
**Esercizio della dispensa: massa sul piano inclinato tirata da una massa appesa.** Un corpo $m_1 = 2\,\mathrm{kg}$ scorre senza attrito su un piano inclinato di $\theta = 30°$. Un filo, passando per una puleggia in cima al piano, lo collega a un corpo $m_2 = 4\,\mathrm{kg}$ appeso. Il sistema parte da fermo; $m_2$ scende e tocca il suolo dopo un tratto $h = 2\,\mathrm m$. Quanto percorre in tutto $m_1$ lungo il piano prima di fermarsi?

*Prima fase (filo teso).* Positivo = salita per $m_1$, discesa per $m_2$. La componente normale del peso di $m_1$ è bilanciata dal piano; la tensione è parallela al piano.
- $m_1$: $m_1 a = T - m_1 g\sin\theta$;
- $m_2$: $m_2 a = m_2 g - T$.

Sommo: $(m_1 + m_2)a = m_2 g - m_1 g\sin\theta$ ⇒
$$a = \frac{m_2 - m_1\sin\theta}{m_1 + m_2}\,g = \frac{4 - 2\cdot 0{,}5}{6}\cdot 9{,}8 = \frac{3}{6}\cdot 9{,}8 = 4{,}9\,\mathrm{m/s^2}$$
Quando $m_2$ tocca terra, $m_1$ ha percorso $s_0 = 2\,\mathrm m$ e ha velocità $v_0^2 = 2as_0 = 2\cdot 4{,}9\cdot 2 = 19{,}6$ ⇒ $v_0 \approx 4{,}43\,\mathrm{m/s}$.

*Seconda fase (filo allentato).* $m_1$ prosegue verso l'alto soggetta solo alla componente del peso: decelerazione $g\sin\theta = 4{,}9\,\mathrm{m/s^2}$. Si ferma dopo $s_1 = v_0^2/(2g\sin\theta) = 19{,}6/9{,}8 = 2\,\mathrm m$.

*Totale:* $s_{tot} = 2 + 2 = 4\,\mathrm m$.
:::

::: esempio
**Esercizio della dispensa: pallina spinta dal vento.** Una pallina di massa $m = 3\cdot 10^{-4}\,\mathrm{kg}$ è appesa a un filo. Un vento orizzontale la sposta finché il filo forma un angolo $\theta = 37°$ con la verticale. Trovare la spinta del vento $F$ e la tensione $T$.

All'equilibrio la risultante è nulla. Forze: peso $mg = 3\cdot 10^{-4}\cdot 9{,}8 = 2{,}94\cdot 10^{-3}\,\mathrm N$ (giù), spinta $F$ (orizzontale), tensione $T$ (lungo il filo, inclinata di $\theta$ dalla verticale).
- Verticale: $T\cos\theta - mg = 0$ ⇒ $T = mg/\cos\theta = 2{,}94\cdot 10^{-3}/0{,}799 \approx 3{,}7\cdot 10^{-3}\,\mathrm N$.
- Orizzontale: $F - T\sin\theta = 0$ ⇒ $F = T\sin\theta = mg\tan\theta = 2{,}94\cdot 10^{-3}\cdot 0{,}754 \approx 2{,}2\cdot 10^{-3}\,\mathrm N$.
:::

## La forza centripeta
Nel **moto circolare uniforme** la velocità ha modulo costante ma cambia continuamente **direzione**: c'è un'accelerazione **centripeta** $a_c = v^2/R = \omega^2 R$ diretta verso il centro (lezione 8). Per la seconda legge, deve agire sul corpo una **forza** diretta verso il centro della circonferenza, istantaneamente perpendicolare alla traiettoria, di modulo
$$F_c = m\frac{v^2}{R} = m\omega^2 R$$
dove $F_c$ = forza centripeta (N), $m$ = massa (kg), $v$ = velocità (m/s), $R$ = raggio (m), $\omega$ = velocità angolare (rad/s), con $v = \omega R$.

**La forza centripeta non è un nuovo tipo di forza.** Non si aggiunge alle altre: è il **nome del ruolo** svolto da una forza vera (o dalla risultante di più forze) che tiene il corpo sulla traiettoria circolare. Può essere:
- la **tensione** di un filo fissato a un perno (sasso fatto ruotare);
- la **gravità** (pianeti, satelliti, la Luna);
- l'**attrito** (auto in curva su strada piana);
- la **reazione vincolare** (vagoncino di una giostra, auto su curva sopraelevata).

**Se il filo si spezza** in un istante $t_0$, il corpo non è più soggetto a forze (nel piano del moto): per il primo principio prosegue di **moto rettilineo uniforme** lungo la **tangente** al cerchio nel punto in cui si trovava in $t_0$. Non "vola via" lungo il raggio.

::: esempio
**Forza centripeta (tipici del paniere).**
- *Sasso di $500\,\mathrm g$ legato a un filo di $2{,}0\,\mathrm m$, a $10{,}0\,\mathrm{m/s}$ costanti*: $F = mv^2/R = 0{,}5\cdot 100/2 = 25\,\mathrm N$ (la massa va in kg: $500\,\mathrm g = 0{,}5\,\mathrm{kg}$).
- *Oggetto su una circonferenza di $2\,\mathrm m$ a $10\,\mathrm{m/s}$ con un filo di tensione $300\,\mathrm N$*: la tensione è la forza centripeta, $T = mv^2/R$ ⇒ $m = TR/v^2 = 300\cdot 2/100 = 6\,\mathrm{kg}$.
:::

::: esempio
**Accelerazione centripeta della Terra attorno al Sole (tipico del paniere).** Raggio dell'orbita $r = 1{,}49\cdot 10^8\,\mathrm{km} = 1{,}49\cdot 10^{11}\,\mathrm m$; periodo $T = 1$ anno.
1. Periodo in secondi: $T = 365\cdot 86\,400 \approx 3{,}15\cdot 10^7\,\mathrm s$.
2. Velocità angolare: $\omega = 2\pi/T = 6{,}28/3{,}15\cdot 10^7 \approx 1{,}99\cdot 10^{-7}\,\mathrm{rad/s}$.
3. $a_c = \omega^2 r = (1{,}99\cdot 10^{-7})^2\cdot 1{,}49\cdot 10^{11} = 3{,}97\cdot 10^{-14}\cdot 1{,}49\cdot 10^{11} \approx 5{,}9\cdot 10^{-3}\,\mathrm{m/s^2}$.

La forza centripeta che la produce è l'attrazione gravitazionale del Sole. Allo stesso modo, per la Luna ($T = 27{,}3$ giorni $= 2{,}36\cdot 10^6\,\mathrm s$, $r = 3{,}82\cdot 10^8\,\mathrm m$): $a = r(2\pi/T)^2 \approx 2{,}7\cdot 10^{-3}\,\mathrm{m/s^2}$.
:::

### Astronauti "senza peso"
L'astronauta sullo shuttle in orbita attorno alla Terra galleggia nell'abitacolo come se non avesse peso. La gravità agisce ancora, eccome: a qualche centinaio di km di quota $g$ è solo poco minore che a terra, ed è proprio la gravità a fare da forza centripeta che tiene lo shuttle in orbita. L'astronauta e lo shuttle **cadono insieme** attorno alla Terra con la stessa accelerazione, quindi l'astronauta non preme sul pavimento.

Descritto nel **riferimento dello shuttle**, che ruota attorno alla Terra (non inerziale), l'astronauta è fermo: la forza di gravità è compensata dalla **forza centrifuga** (apparente, lezione 13). Il risultato è l'**assenza di peso apparente**.

## Altri calcoli ricorrenti
::: esempio
- *Forza dalla legge oraria*: una forza di $10\,\mathrm N$ fa percorrere a un corpo, partito da fermo, $18\,\mathrm m$ in $6\,\mathrm s$. Da $s = \tfrac12 at^2$: $a = 2s/t^2 = 36/36 = 1\,\mathrm{m/s^2}$; quindi $m = F/a = 10\,\mathrm{kg}$.
- *Aereo al decollo*: due motori da $1{,}40\cdot 10^5\,\mathrm N$ ciascuno, accelerazione $2{,}30\,\mathrm{m/s^2}$, resistenza trascurabile. Spinta totale $2{,}80\cdot 10^5\,\mathrm N$ (non dimenticare il fattore 2!); $m = F/a = 2{,}80\cdot 10^5/2{,}30 \approx 1{,}22\cdot 10^5\,\mathrm{kg} = 122$ tonnellate.
- *Blocco di $60\,\mathrm{kg}$ con $150\,\mathrm N$, senza attrito, da fermo*: $a = 2{,}5\,\mathrm{m/s^2}$; dopo $3\,\mathrm s$, $v = 7{,}5\,\mathrm{m/s}$ e $s = 11{,}25\,\mathrm m$ (lezione 11).
- *Mongolfiera ferma in aria*: risultante nulla ⇒ la spinta di Archimede verso l'alto è uguale al suo peso.
:::

::: esame
- **"Cos'è il peso?"** (aperta): forza di attrazione gravitazionale sul corpo, $\vec P = m\vec g$, vettore verticale verso il basso, in newton; proporzionale alla massa ma dipendente dal luogo ($g$ varia: altri pianeti, latitudine); applicabile in qualunque punto della verticale per il baricentro; la bilancia misura in realtà la reazione vincolare.
- **"Cos'è la massa?"** (aperta): proprietà intrinseca e scalare del corpo, misura dell'inerzia ($m = F/a$, massa inerziale) e della quantità di materia; kg; non cambia da un luogo all'altro; si misura con la bilancia a due piatti (massa gravitazionale), che coincide con quella inerziale.
- **"Cos'è una reazione vincolare?"** e **"Perché occorre definire le reazioni vincolari?"** (aperte): forza esercitata da un vincolo (tavolo, piano, filo) sul corpo; necessaria per spiegare con i principi della dinamica l'equilibrio dei corpi appoggiati o appesi (il libro sul tavolo: senza reazione dovrebbe cadere); perpendicolare a una superficie liscia; modulo non noto a priori, uguale e opposto alla risultante delle componenti normali delle altre forze; vale anche in situazioni dinamiche.
- **"Esporre i concetti base della caduta dei gravi"** (aperta): senza aria tutti i corpi cadono con la stessa accelerazione $g$ (Galileo, Torre di Pisa), perché peso e inerzia sono proporzionali alla stessa massa; moto uniformemente accelerato: $v = gt$, $h = \tfrac12 gt^2$, $v = \sqrt{2gh}$; con l'aria si arriva a una velocità limite.
- **Chiuse**: peso e massa (proporzionali, su Venere stessa massa e peso diverso), reazione su un tavolo con spinta, ascensore e cavi ($T - mg = ma$), Atwood ($g/10$), piano inclinato ($a \le g$, $v = \sqrt{2gh}$), tensione (stesso modulo, verso opposto, verso l'interno; $T = P$ a velocità costante), forza centripeta, astronauta (centrifuga che compensa la gravità nel riferimento dello shuttle), rampa curva (conta il dislivello), gocce di pioggia.
:::

::: sintesi
- $\vec P = m\vec g$: peso (vettore, N, dipende dal luogo) e massa (scalare, kg, intrinseca) sono diversi ma proporzionali. Il peso agisce lungo la verticale per il baricentro.
- Caduta libera: $a = g$ per tutti; $v = gt$, $h = \tfrac12 gt^2$, $v = \sqrt{2gh}$; $\Delta U = mg\Delta h$ dipende solo dal dislivello.
- Reazione vincolare: forza del vincolo, necessaria per spiegare l'equilibrio; normale alla superficie liscia, modulo che si adatta alle altre forze normali.
- Tensione: lungo il filo, verso l'interno, stesso modulo ai capi; la puleggia ideale cambia solo direzione.
- Forza verticale + peso: $T - mg = ma$.
- Piano inclinato liscio: $a = g\sin\theta \le g$, $N = mg\cos\theta$; in fondo $v = \sqrt{2gh}$, come in caduta libera.
- Atwood: $a = \dfrac{m_2 - m_1}{m_1 + m_2}g$, $T = \dfrac{2m_1m_2}{m_1 + m_2}g$.
- Corpi collegati: stessa accelerazione; sistema intero per $a$, corpi singoli per le forze interne.
- Forza centripeta $F_c = mv^2/R = m\omega^2 R$: ruolo di una forza vera; se il filo si spezza il corpo va lungo la tangente.
:::

=== 13 dispense
SLIDES: 12, 09
# Lezione 13 — Sistemi non inerziali e forze apparenti

Le leggi della dinamica valgono nella forma $\vec F = m\vec a$ nei sistemi **inerziali**, che si muovono di moto rettilineo uniforme l'uno rispetto all'altro: in essi lo stato di moto di un corpo cambia solo quando agisce una forza dovuta a un altro corpo. Ma spesso osserviamo il mondo da sistemi che **accelerano** o **ruotano**: un'auto che frena o curva, un ascensore che parte, una giostra, la Terra stessa. Questa lezione mostra come si scrive la dinamica in questi sistemi, usando le leggi dei moti relativi (lezione 9), e introduce le **forze apparenti**: trascinamento, centrifuga, Coriolis.

## Sistemi non inerziali
Tutti i sistemi che si muovono, rispetto a un sistema inerziale considerato fisso, di moto **non rettilineo uniforme** si dicono **sistemi non inerziali**. In pratica: un sistema non è inerziale quando **ruota** oppure quando la sua velocità **varia** in intensità o in direzione.

In un sistema non inerziale il principio d'inerzia **non vale**: un corpo libero (nessuna forza) sembra accelerare senza che niente lo spinga. Esempio: in un autobus che frena, una pallina ferma sul pavimento rotola in avanti da sola.

## La seconda legge vista da un sistema non inerziale
Supponiamo che una forza **reale** $\vec F$ (dovuta all'interazione con altri corpi) agisca su un corpo di massa $m$, producendo un'accelerazione $\vec a$ nel sistema **fisso** (inerziale): $\vec F = m\vec a$.

Nella lezione 9 abbiamo ricavato la legge di composizione delle accelerazioni:
$$\vec a = \vec a\,' + \vec a_{tr} + \vec a_{Co}$$
Ricavo l'accelerazione relativa $\vec a\,'$ (quella misurata nel sistema mobile) e moltiplico per $m$:
$$m\vec a\,' = m\vec a - m\vec a_{tr} - m\vec a_{Co} = \vec F - m\vec a_{tr} - m\vec a_{Co}$$
Quindi, nel sistema **non inerziale**, il prodotto $m\vec a\,'$ è uguale alla **somma** di:
- la **forza reale** $\vec F$, causata da un'interazione effettiva e presente in ogni sistema;
- il termine di **trascinamento** $\vec F_{tr} = -m\vec a_{tr}$;
- il termine di **Coriolis** $\vec F_{Co} = -m\vec a_{Co} = -2m\,\vec\omega\times\vec v\,'$.

Scritto in modo compatto:
$$m\vec a\,' = \vec F + \vec F_{tr} + \vec F_{Co}$$
dove $\vec a\,'$ = accelerazione misurata nel sistema non inerziale (m/s²), $\vec F$ = risultante delle forze reali (N), $\vec F_{tr}$ e $\vec F_{Co}$ = forze apparenti (N).

Gli ultimi due termini **non** sono prodotti da un'interazione con un altro corpo: sono un **effetto dinamico** dovuto al fatto di trovarsi in un sistema di riferimento non inerziale. Per questa caratteristica prendono il nome di **forze di inerzia**, o più comunemente **forze apparenti** o **fittizie**. Grazie a esse l'osservatore non inerziale può continuare a usare la "seconda legge", purché aggiunga alle forze vere anche quelle apparenti.

## Proprietà delle forze apparenti
- **Non** derivano dall'interazione con un altro corpo: **nessun ente fisico** ne è responsabile.
- Quindi **non hanno reazione**: per esse il terzo principio non vale (non c'è un "altro corpo" su cui applicare la reazione).
- Esistono **solo per l'osservatore non inerziale**; per l'osservatore fermo (inerziale) **non esistono**: lui spiega lo stesso fenomeno con le sole forze reali e l'inerzia.
- Sono **proporzionali alla massa** (inerziale) del corpo: per questo si chiamano **forze d'inerzia**. Come il peso, danno a tutti i corpi la stessa accelerazione.
- **Non sono immaginarie**: i loro effetti sono reali per chi sta nel sistema e si possono **misurare con un dinamometro**.
- Non sono "forze" nel senso newtoniano (effetto dell'interazione tra corpi): non dipendono dalla presenza o meno di altri corpi.

::: attenzione
"Apparente" non vuol dire "che non si misura" o "che non ha effetti". Vuol dire che **dipende dal sistema di riferimento**: c'è per l'osservatore accelerato e non c'è per quello inerziale. Il passeggero in curva viene davvero schiacciato contro la portiera, e un dinamometro solidale con lui misura davvero una forza.
:::

## Sistema che trasla con accelerazione: la forza di trascinamento
Il caso più semplice: il sistema mobile **trasla senza ruotare** ($\vec\omega = 0$) con accelerazione $\vec A$ (accelerazione rettilinea del sistema). Allora $\vec a_{tr} = \vec A$ e $\vec a_{Co} = 0$, e compare solo la **forza apparente di trascinamento**:
$$\vec F_{tr} = -m\vec A$$
dove $m$ = massa del corpo (kg) e $\vec A$ = accelerazione del sistema rispetto al sistema inerziale (m/s²). È **sempre opposta** all'accelerazione del sistema: in un'auto che accelera ci si sente spinti all'indietro contro il sedile, in un'auto che frena ci si sente spinti in avanti.

::: esempio
**Esercizio della dispensa: la cassa nel furgone che frena.** Un osservatore O' viaggia su un furgone che si muove a velocità costante. Nel rimorchio c'è una cassa di $0{,}25\,\mathrm{kg}$ che può scorrere **senza attrito** sul pavimento. A un certo punto il furgone frena con decelerazione costante, che un osservatore sul ciglio della strada misura pari a $-2{,}8\,\mathrm{m/s^2}$.

*Che cosa vede l'osservatore a terra?* Sulla cassa non agisce nessuna forza orizzontale (niente attrito). Per il primo principio, nel suo sistema inerziale la cassa **continua a muoversi di moto rettilineo uniforme** con la velocità che aveva prima della frenata. È il furgone che rallenta "sotto" la cassa.

*Che cosa vede O'?* Per lui, solidale con il furgone (non inerziale, $A = -2{,}8\,\mathrm{m/s^2}$), la cassa che prima era ferma comincia ad **accelerare in avanti**, nel verso del moto che il furgone aveva prima della frenata. Lo spiega con una forza fittizia:
$$F' = -mA = -0{,}25\cdot(-2{,}8) = +0{,}7\,\mathrm N$$
diretta in avanti (nel verso di marcia). La cassa accelera rispetto al furgone con $a' = 2{,}8\,\mathrm{m/s^2}$.

Lo stesso succede a noi in un'auto che frena di colpo: ci sentiamo spinti in avanti dalla forza $-m\vec A$, e la cintura (forza reale) ci trattiene.
:::

## L'ascensore: il caso emblematico
Il caso più semplice e più significativo di dinamica in un sistema non inerziale è l'**ascensore**, fino al caso estremo dell'ascensore in **caduta libera**.

**Ascensore fermo.** Sul pavimento c'è una bilancia (in realtà un **dinamometro**) con sopra un corpo di massa $m$. La bilancia misura la **reazione vincolare** che il pavimento, tramite la bilancia, esercita sul corpo, opposta alla forza peso. In equilibrio:
$$R = mg$$

**Ascensore con accelerazione costante $\vec a_R$.** Il pavimento continua a trasmettere, tramite la bilancia, una reazione vincolare $\vec R$ al corpo. Nel sistema dell'ascensore (non inerziale) agiscono sul corpo:
- la forza **reale** di gravità $\vec F_g = m\vec g$;
- la forza **fittizia di trascinamento** $\vec F_t = -m\vec a_R$, nella sua forma più semplice (accelerazione rettilinea del sistema);
- la **reazione vincolare** $\vec R$ (forza reale).

Finché il corpo è in **equilibrio statico** dentro l'ascensore (fermo rispetto al pavimento), la reazione vincolare è attiva e compensa la risultante delle altre due forze, $\vec F_g + \vec F_t$, purché questa sia diretta **verso il basso** (il pavimento può solo spingere, non tirare):
$$\vec R + m\vec g - m\vec a_R = 0$$

Prendo come positivo il verso **verso l'alto** e analizzo i casi.

1. **Ascensore fermo o a velocità costante** ($a_R = 0$): $R = mg$. Nessuna differenza rispetto a terra (relatività galileiana).
2. **Accelera verso l'alto** (sale aumentando la velocità, o scende frenando), $a_R > 0$: la forza fittizia $-ma_R$ è verso il basso e si somma al peso:
$$R - mg - ma_R = 0 \quad\Rightarrow\quad R = m(g + a_R)$$
   La bilancia segna **di più**: ci si sente più pesanti.
3. **Accelera verso il basso** con $a_R < g$ (scende aumentando la velocità, o sale frenando): la forza fittizia è verso l'alto e si sottrae al peso:
$$R = m(g - a_R)$$
   La bilancia segna **di meno**: ci si sente più leggeri.
4. **Caduta libera**, $a_R = g$ verso il basso: $R = m(g - g) = 0$. Il corpo è **in equilibrio** rispetto all'ascensore (ci resta fermo), ma la bilancia segna un **peso nullo**: forza fittizia e peso si annullano esattamente. Il corpo **fluttua**.
5. **Accelera verso il basso con $a_R > g$**: la forza fittizia verso l'alto, $ma_R$, è più forte della gravità. Il corpo si **stacca** dal pavimento (la reazione non può diventare negativa) e accelera verso il **soffitto** con accelerazione relativa
$$a' = a_R - g \quad\text{(verso l'alto)}$$

Per questo le simulazioni di assenza di gravità si fanno su **grandi aerei** che, raggiunta un'alta quota, vengono lasciati cadere in **caduta libera** per un certo tempo: dentro, tutto fluttua.

::: esempio
**Numeri.** Una persona di $70\,\mathrm{kg}$ su una bilancia in ascensore ($g = 9{,}8\,\mathrm{m/s^2}$).
- Ascensore che parte verso l'alto con $a_R = 2\,\mathrm{m/s^2}$: $R = 70\cdot(9{,}8 + 2) = 826\,\mathrm N$ (la bilancia "segna" $84{,}3\,\mathrm{kg}$).
- Ascensore che parte verso il basso con $2\,\mathrm{m/s^2}$: $R = 70\cdot 7{,}8 = 546\,\mathrm N$ (segna $55{,}7\,\mathrm{kg}$).
- Cavo spezzato (caduta libera): $R = 0$.
- Ascensore spinto verso il basso con $a_R = 2g$: la persona va verso il soffitto con $a' = 2g - g = g$. Se si misura, dentro l'ascensore, un'accelerazione $g$ verso l'alto per un corpo che prima era appoggiato al pavimento, l'ascensore sta scendendo con accelerazione $2g$ (lezione 11).
:::

## Sistema rotante: la forza centrifuga
Passiamo a una forza fittizia che sperimentiamo spesso nella vita quotidiana. Consideriamo una massa $m$ **fissa** sul bordo di una piattaforma circolare di raggio $R$ che ruota con velocità angolare **costante** $\omega$, e descriviamola nel sistema **solidale con la piattaforma**. In questo sistema la massa ha posizione fissa: velocità relativa e accelerazione relativa **nulle**, $\vec v\,' = 0$ e $\vec a\,' = 0$.

Siamo in un sistema non inerziale. Dalla legge dei moti relativi, con $\vec a_{O'} = 0$ (il centro è fermo), $d\vec\omega/dt = 0$ (rotazione uniforme) e $\vec v\,' = 0$ (niente Coriolis):
$$m\vec a\,' = \vec F - m\,\vec\omega\times(\vec\omega\times\vec r\,') = 0$$
Poiché $\vec\omega\times(\vec\omega\times\vec r\,') = -\omega^2\vec r\,'$ (con $\vec r\,'$ nel piano della piattaforma, perpendicolare all'asse):
$$\vec F + m\omega^2\vec r\,' = 0$$
Avendo accelerazione relativa nulla, le due forze **si annullano**:
- quella **attiva** (reale), $\vec F = -m\omega^2\vec r\,'$, che sappiamo essere la **forza centripeta** (diretta verso il centro): è ciò che tiene la massa sulla piattaforma (un perno, una molla, un filo, l'attrito);
- quella **fittizia**, la **forza centrifuga**:
$$\vec F_{cf} = m\omega^2\vec r\,', \qquad F_{cf} = m\omega^2 r = \frac{mv^2}{r}$$
dove $m$ = massa (kg), $\omega$ = velocità angolare (rad/s), $r$ = distanza dall'asse di rotazione (m), $v = \omega r$ = velocità del punto vista da terra (m/s).

Dall'espressione si vede che la forza centrifuga è diretta come $\vec r\,'$, cioè **radialmente verso l'esterno** ("ad uscire"). Ha lo stesso modulo della forza centripeta e verso opposto, ma **non** sono una coppia azione-reazione: la centrifuga esiste solo nel sistema rotante e non ha reazione.

### Due osservatori, due descrizioni corrette
È l'esempio della piattaforma della dispensa 09, con un corpo trattenuto da una **molla** e uno da un **filo**:
- l'osservatore **fermo** vede i corpi in moto circolare uniforme e conclude che la molla e il filo esercitano le forze **centripete** necessarie, $F_{el} = m\omega^2 R$ e $T = m'\omega^2 R'$;
- l'osservatore **sulla piattaforma** vede i corpi **fermi** e spiega l'equilibrio con due forze **centrifughe** che bilanciano la molla e il filo: $F_{centrifuga} = F_{el}$ e $F'_{centrifuga} = T$.

::: esempio
**Il passeggero in curva.** Un'auto percorre una curva a velocità costante.
- Il passeggero (sistema non inerziale) dice: "Una forza mi spinge verso l'esterno della curva": è la **forza centrifuga**. Per restare fermo rispetto all'auto si appoggia alla portiera, che lo spinge verso l'interno: le due forze si bilanciano.
- L'osservatore a terra (inerziale) dice: "Il passeggero tende per **inerzia** ad andare dritto; è la portiera (o il sedile, la cintura) che lo spinge verso il **centro** della curva, fornendo la forza centripeta che lo fa curvare".

Stessa scena, due descrizioni entrambe corrette, ciascuna nel proprio sistema.
:::

### Si può misurare la forza centrifuga?
**Sì, ma soltanto in un sistema di riferimento non inerziale.** Un dinamometro (una molla tarata) che trattiene un corpo su una giostra si allunga e segna una forza. Per l'osservatore che ruota con la giostra quella lettura **è** la forza centrifuga, che il dinamometro bilancia. Per l'osservatore inerziale a terra non c'è nessuna forza centrifuga: il dinamometro sta esercitando sul corpo la forza **centripeta** necessaria al moto circolare. Che sia "apparente" non significa che non si possa misurare: significa che esiste solo per l'osservatore rotante. Non serve nessuno strumento speciale: basta un comune dinamometro.

::: esempio
**Esercizio della dispensa: corpo legato a un asse con due fili.** Un corpo di massa $m = 1{,}34\,\mathrm{kg}$ ruota attorno a un'asta verticale, a cui è collegato con due fili senza massa lunghi $L = 1{,}70\,\mathrm m$, attaccati all'asta in due punti distanti anch'essi $L$: i due fili tesi e l'asta formano un **triangolo equilatero**. La tensione del filo superiore è $T_1 = 35\,\mathrm N$. Trovare la forza centrifuga nel sistema solidale con il corpo.

*Geometria.* Nel triangolo equilatero ogni filo forma $60°$ con l'asta, cioè $30°$ con l'orizzontale: il filo superiore sale verso l'asta a $30°$, quello inferiore scende a $30°$. La distanza del corpo dall'asse è l'altezza del triangolo: $r = L\cos30° = 1{,}70\cdot 0{,}866 \approx 1{,}47\,\mathrm m$.

*Equilibrio nel sistema rotante* (il corpo è fermo): forze reali $T_1$, $T_2$, peso, più la centrifuga orizzontale verso l'esterno.
- Verticale: $T_1\sin30° - T_2\sin30° - mg = 0$ ⇒ $T_2 = T_1 - \dfrac{mg}{\sin30°} = 35 - \dfrac{1{,}34\cdot 9{,}8}{0{,}5} = 35 - 26{,}3 = 8{,}7\,\mathrm N$.
- Orizzontale: le componenti orizzontali delle tensioni puntano entrambe verso l'asta e sono bilanciate dalla centrifuga:
$$F_{cf} = (T_1 + T_2)\cos30° = (35 + 8{,}7)\cdot 0{,}866 \approx 37{,}9\,\mathrm N$$

La forza centrifuga vale circa $37{,}9\,\mathrm N$, verso l'esterno: uguale e opposta alla forza centripeta $mv^2/r$ vista dall'osservatore inerziale. Da qui anche la velocità: $v = \sqrt{F r/m} = \sqrt{37{,}9\cdot 1{,}47/1{,}34} \approx 6{,}45\,\mathrm{m/s}$.
:::

### La centrifuga terrestre: il peso dipende dalla latitudine
La superficie terrestre non è un sistema inerziale: ruota con $\omega = 7{,}27\cdot 10^{-5}\,\mathrm{rad/s}$. In un punto a **latitudine** $\alpha$ un osservatore solidale con la Terra sente una piccola **forza centrifuga**. La distanza dall'asse terrestre è $R_T\cos\alpha$, quindi il modulo è
$$F_{cf} = m\omega^2 R_T\cos\alpha$$
diretta perpendicolarmente all'asse, verso l'esterno: forma con la verticale lo stesso angolo $\alpha$. La sua componente lungo la verticale (verso l'alto) è $m\omega^2 R_T\cos^2\alpha$ e si sottrae al peso. Chiamata $g_0$ l'intensità di $g$ ai poli (dove la centrifuga è nulla), il peso misurato a latitudine $\alpha$ è circa
$$mg \approx mg_0 - m\omega^2 R_T\cos^2\alpha$$

*Ordine di grandezza.* $\omega^2 R_T = (7{,}27\cdot 10^{-5})^2\cdot 6{,}37\cdot 10^6 \approx 0{,}034\,\mathrm{m/s^2}$, cioè circa lo $0{,}3\%$ di $g$. Quindi la variazione relativa del peso è
$$\frac{mg - mg_0}{mg_0} \approx -0{,}3\%\cdot\cos^2\alpha$$
- ai **poli** ($\cos^2\alpha = 0$) si ritrova il valore di riferimento;
- all'**Equatore** ($\cos^2\alpha = 1$) il peso è circa lo $0{,}3\%$ **minore**.

C'è anche una componente della centrifuga **tangente** alla superficie (verso l'Equatore), che produce una lieve **deviazione della verticale**: il filo a piombo non punta esattamente verso il centro della Terra, ma ne devia di circa un decimo di grado.

## Le altre forze apparenti in un sistema rotante
Per un sistema rotante, oltre alla forza centrifuga, ci sono altre due forze fittizie (vengono dagli altri termini di $\vec a_{tr}$ e da $\vec a_{Co}$):
1. una legata alla **variazione della velocità angolare** nel tempo (accelerazione angolare $\vec\alpha = d\vec\omega/dt$): $\vec F = -m\,\dfrac{d\vec\omega}{dt}\times\vec r\,'$. È quella che ci spinge "indietro" quando una giostra parte;
2. una legata al **moto del corpo rispetto al sistema rotante**: la **forza di Coriolis** $\vec F_{Co} = -2m\,\vec\omega\times\vec v\,'$.

## La forza di Coriolis
Se un corpo **si muove** con velocità $\vec v\,'$ rispetto a un sistema che ruota con $\vec\omega$, nel sistema rotante compare la forza apparente
$$\vec F_{Co} = -2m\,\vec\omega\times\vec v\,'$$
dove $m$ = massa (kg), $\vec\omega$ = velocità angolare del sistema (rad/s), $\vec v\,'$ = velocità del corpo rispetto al sistema rotante (m/s). Il modulo è $F_{Co} = 2m\omega v'\sin\gamma$, con $\gamma$ angolo tra $\vec\omega$ e $\vec v\,'$.

Caratteristiche:
- è **perpendicolare alla velocità relativa** (e a $\vec\omega$): **devia** il corpo, curvandone la traiettoria, senza cambiare il modulo della sua velocità relativa;
- è **nulla** se il corpo è **fermo** nel sistema rotante, o se si muove **parallelamente all'asse** di rotazione;
- è proporzionale alla massa, come tutte le forze apparenti.

### La palla lanciata sulla giostra
L'esempio della dispensa: un osservatore O' sta al **centro** di una piattaforma che ruota e lancia una palla in direzione **radiale**, verso l'esterno.
- L'osservatore **fermo** a terra vede la palla allontanarsi **in linea retta** (dopo il lancio non ci sono forze orizzontali: primo principio).
- L'osservatore **sulla piattaforma** vede invece una **traiettoria curva**: mentre la palla vola, la piattaforma sotto di lei ruota. La sola forza centrifuga non basta a spiegarlo (spingerebbe la palla lungo il raggio, verso l'esterno). Deve ammettere una forza **trasversale** apparente: la **forza di Coriolis**.

Il verso della deviazione:
- rotazione **antioraria** (vista dall'alto) e moto di **allontanamento** dal centro: deviazione verso **destra**;
- rotazione **oraria**, oppure moto di **avvicinamento** al centro: deviazione verso **sinistra**.

Si può verificare con la formula: con rotazione antioraria $\vec\omega$ punta in alto ($\hat k$); se $\vec v\,' = v'\hat i$ (verso l'esterno lungo $x$), $\vec\omega\times\vec v\,' = \omega v'\,(\hat k\times\hat i) = \omega v'\,\hat j$, quindi $\vec F_{Co} = -2m\omega v'\,\hat j$: verso $-y$, cioè alla **destra** di chi guarda nel verso del moto.

### Coriolis sulla Terra
La Terra, che ruota attorno all'asse passante per i poli, è un sistema non inerziale simile alla piattaforma. La forza di Coriolis spiega diversi fenomeni macroscopici, che dipendono dall'**emisfero** (boreale o australe):
- **corpo in caduta** verso il centro della Terra: la forza di Coriolis lo spinge verso **Est** (un grave lasciato cadere da $100\,\mathrm m$ si sposta di circa $2\,\mathrm{cm}$ verso Est, lezione 10);
- moto lungo un **meridiano** dal Polo verso l'Equatore (nell'emisfero Nord): la forza è verso **Ovest**; viceversa, partendo dall'Equatore verso il Polo è verso **Est**;
- in generale, nell'emisfero **boreale** (Nord) un corpo in moto orizzontale è sempre spinto verso la **destra** del suo moto; nell'emisfero **australe** (Sud) verso la **sinistra**;
- i **venti** deviano verso destra nell'emisfero Nord e verso sinistra nell'emisfero Sud: è l'origine della circolazione dei venti dominanti (gli **alisei**, i venti da ponente o *westerlies*, i venti da levante o *easterlies*) attorno alle zone di alta e bassa pressione;
- i **cicloni** (zone di bassa pressione) ruotano in senso **antiorario** nell'emisfero Nord e **orario** nell'emisfero Sud;
- l'effetto di Coriolis è una delle cause del senso di circolazione delle **correnti marine**;
- l'**erosione prevalente** di una sponda dei fiumi rispetto all'altra.

*Verifica della caduta verso Est.* Sistema locale con $x$ verso Est, $y$ verso Nord, $z$ verso l'alto; a latitudine $\lambda$ si ha $\vec\omega = \omega(\cos\lambda\,\hat j + \sin\lambda\,\hat k)$. Un grave che cade ha $\vec v\,' = -v\hat k$. Allora $\vec\omega\times\vec v\,' = \omega\cos\lambda\,(\hat j\times(-v\hat k)) = -\omega v\cos\lambda\,\hat i$, e $\vec F_{Co} = -2m\,\vec\omega\times\vec v\,' = +2m\omega v\cos\lambda\,\hat i$: verso **Est**.

::: attenzione
Nei problemi normali la Terra si tratta come **inerziale**: gli effetti delle forze apparenti terrestri sono piccoli (un grave che cade da $100\,\mathrm m$ devia di pochi centimetri; un corpo a $10\,\mathrm{m/s}$ ha un'accelerazione di Coriolis di circa $7\cdot 10^{-4}\,\mathrm{m/s^2}$). Contano solo per fenomeni **lunghi** e su **grandi distanze** (venti, correnti, cicloni, proiettili a lunga gittata).
:::

::: attenzione
Le leggende sul verso dei vortici nei lavandini dipendono dalla forma del lavandino e dai moti residui dell'acqua, non da Coriolis: su pochi centimetri e pochi secondi l'effetto è troppo piccolo.
:::

## Riepilogo delle forze apparenti
| Forza apparente | Espressione | Quando compare | Direzione |
|---|---|---|---|
| di trascinamento (traslazione) | $-m\vec A$ | sistema che accelera | opposta all'accelerazione del sistema |
| centrifuga | $m\omega^2 r$ | sistema che ruota (anche corpo fermo) | radiale, verso l'esterno |
| dovuta a $\dot{\vec\omega}$ | $-m\,\dot{\vec\omega}\times\vec r\,'$ | rotazione non uniforme | tangenziale |
| di Coriolis | $-2m\,\vec\omega\times\vec v\,'$ | sistema che ruota e corpo in moto in esso | perpendicolare a $\vec v\,'$ e $\vec\omega$ |

::: esame
- **"È possibile misurare una forza centrifuga?"** (chiusa): sì, ma **soltanto in un sistema di riferimento non inerziale** (rotante), per esempio con un normale dinamometro solidale con la giostra. Non è vero che "non si misura perché apparente", non serve un sistema inerziale (lì la centrifuga non esiste: c'è solo la centripeta), non esiste un dinamometro "speciale".
- Domande collegate in altre lezioni: ascensore che scende con $2g$ (lezione 11), astronauta che galleggia perché nel riferimento dello shuttle la centrifuga compensa la gravità (lezione 12), corpo in un sistema in caduta libera e accelerazione di Coriolis (aperte, lezione 9).
- Per una risposta aperta sulle forze apparenti: definizione di sistema non inerziale; $m\vec a\,' = \vec F + \vec F_{tr} + \vec F_{Co}$; proprietà (nessun corpo le esercita, niente reazione, proporzionali alla massa, misurabili, esistono solo per l'osservatore accelerato); esempi (auto che frena, ascensore, centrifuga in curva, Coriolis e cicloni).
:::

::: sintesi
- Non inerziale = sistema che accelera o ruota rispetto a un inerziale; lì il principio d'inerzia non vale.
- $m\vec a\,' = \vec F + \vec F_{tr} + \vec F_{Co}$, con $\vec F_{tr} = -m\vec a_{tr}$ e $\vec F_{Co} = -2m\,\vec\omega\times\vec v\,'$.
- Forze apparenti: nessun corpo le esercita, niente reazione, proporzionali alla massa, misurabili con un dinamometro, esistono solo per l'osservatore non inerziale.
- Traslazione accelerata: $\vec F_t = -m\vec A$ (furgone che frena: $0{,}7\,\mathrm N$ sulla cassa).
- Ascensore: $R = m(g + a_R)$ in su, $R = m(g - a_R)$ in giù, $R = 0$ in caduta libera, con $a_R > g$ il corpo va al soffitto con $a_R - g$.
- Centrifuga $m\omega^2 r$ verso l'esterno, uguale e opposta alla centripeta nel sistema rotante; si misura solo nel sistema non inerziale. Peso all'Equatore circa lo 0,3% minore che ai poli.
- Coriolis: solo per corpi in moto nel sistema rotante; devia a destra nell'emisfero Nord e a sinistra nel Sud; caduta verso Est, venti, cicloni, correnti, sponde dei fiumi.
:::

=== 14 dispense
SLIDES: 13
# Lezione 14 — Forze di attrito e resistenza del mezzo

## Perché serve l'attrito
Nelle lezioni precedenti abbiamo specificato, o spesso dato per sottinteso, che lo scorrimento tra superfici avvenisse in **condizioni ideali**, cioè **senza attrito**. Nella pratica quotidiana questa idealizzazione non è mai del tutto valida. L'esperienza mostra tre fatti:
- per mettere in moto un corpo su una superficie piana bisogna applicare una forza sempre più forte, **finché non si supera un valore soglia**: sotto la soglia il corpo resta fermo;
- una volta in moto, un corpo lasciato a sé **decelera fino a fermarsi** (una palla che rotola sul prato, un disco su un pavimento);
- se vogliamo mantenerne la **velocità costante** dobbiamo **applicare una forza costantemente**.

Per il primo principio, un corpo che rallenta da solo, o che resta fermo nonostante una spinta, deve essere soggetto a un'altra forza. Tutti questi fatti indicano l'esistenza di una forza **opposta al moto** e alla forza applicata: la chiamiamo **attrito**.

Dall'osservazione qualitativa si capisce anche che l'attrito **dipende dal peso** dell'oggetto da spostare (più è pesante, più è difficile trascinarlo) e dalla **qualità delle superfici** a contatto, in particolare dalla loro **rugosità** (si scivola sul ghiaccio, non sull'asfalto).

### Le tipologie di attrito
| Tipo | Quando agisce | Modulo | Dipende dalla velocità? |
|---|---|---|---|
| **Statico** | corpo fermo su una superficie, spinto da una forza | da $0$ fino a $\mu_s N$, si adatta | no (il corpo è fermo) |
| **Dinamico** (radente) | corpo che striscia su una superficie | $\mu_d N$, costante | in pratica no |
| **Volvente** | corpo che rotola senza strisciare | molto più piccolo del radente | poco |
| **Viscoso** (resistenza del mezzo) | corpo che si muove in un fluido (aria, acqua) | $\beta v$ o $\tfrac12 C\rho A v^2$ | **sì**, cresce con $v$; nullo se $v = 0$ |

Statico, dinamico e volvente sono attriti tra **solidi**; il viscoso è l'attrito con un **fluido**.

## L'attrito statico
L'esame quantitativo del primo dei tre fatti (il corpo che non parte finché la spinta non supera una soglia) porta a definire la **forza di attrito statico**.

**Definizione.** È la forza che **controbilancia** le forze applicate al corpo in direzione **parallela alla superficie** su cui è poggiato, **fino a un valore massimo**. Quel massimo rappresenta la **minima forza** da applicare per mettere in moto il corpo, ed è detta **forza di primo distacco**.

**Direzione e verso.** È diretta **parallelamente** alla superficie di contatto, con verso **contrario** a quello in cui si applica la forza per muovere l'oggetto.

**Modulo.** Il modulo non è fisso: l'attrito statico **si adatta** e vale esattamente quanto serve a tenere fermo il corpo, cioè è uguale e opposto alla componente parallela delle forze applicate. Ma non può superare un valore massimo:
$$F_s \le \mu_s N, \qquad F_{s,max} = \mu_s N$$
dove:
- $F_s$ = forza di attrito statico (N);
- $\mu_s$ = **coefficiente di attrito statico**, un **numero puro** (adimensionale) che dipende **esclusivamente dalle caratteristiche delle due superfici** (materiali, rugosità, lavorazione);
- $N$ = reazione vincolare normale, cioè la **risultante delle forze dirette normalmente alla superficie** (N).

Finché la forza applicata $F$ è minore di $\mu_s N$, il corpo resta fermo e $F_s = F$. Appena $F$ supera $\mu_s N$, il corpo parte e l'attrito diventa dinamico.

### Proprietà essenziali dell'attrito statico
- **Si adatta** alla forza applicata, da zero fino al massimo $\mu_s N$.
- È **proporzionale a $N$**, non al peso in quanto tale: se una forza preme il corpo contro il piano, $N$ aumenta e anche l'attrito massimo; se una forza lo solleva in parte, diminuiscono entrambi.
- **Non dipende dall'area di contatto**: se l'unica forza normale è il peso, la forza per muovere lo stesso oggetto appoggiato su facce diverse (di piatto, di taglio, di punta) è la **stessa**, purché le superfici siano lavorate allo stesso modo. Con un'area maggiore il peso si distribuisce su più superficie, ma la pressione locale diminuisce: i due effetti si compensano.
- $\mu_s$ dipende solo dalla coppia di superfici; non cambia se si aggiunge peso.

::: esempio
**Il mattone e la forza di primo distacco (tipici del paniere).**
- *Un mattone scivola su un piano orizzontale: quale azione aumenta l'attrito?* Appoggiarci sopra un altro mattone: aumenta $N$, quindi aumenta l'attrito. Cambiare la faccia d'appoggio (aumentare o ridurre l'area) non cambia nulla.
- *Per spostare un mattone fermo la forza di primo distacco è $15\,\mathrm N$. Se ci si mette sopra un mattone uguale?* $N$ raddoppia, quindi $F_{s,max} = \mu_s N$ **raddoppia**: diventa $30\,\mathrm N$. Il coefficiente $\mu_s$ invece resta lo stesso.
:::

::: esempio
**L'attrito statico vale quanto serve (tipico del paniere).** Su un blocco di $4\,\mathrm{kg}$, su un piano orizzontale con $\mu_s = 0{,}5$ e $\mu_d = 0{,}4$, si applica una forza orizzontale di $10\,\mathrm N$. Quanto vale l'attrito?
1. Forza normale: $N = mg = 4\cdot 9{,}8 = 39{,}2\,\mathrm N$.
2. Attrito statico massimo: $\mu_s N = 0{,}5\cdot 39{,}2 = 19{,}6\,\mathrm N$.
3. La forza applicata, $10\,\mathrm N$, è **minore** di $19{,}6\,\mathrm N$: il blocco **resta fermo**.
4. Fermo ⇒ risultante nulla ⇒ l'attrito vale **esattamente $10\,\mathrm N$**, opposto alla forza. Non $19{,}6\,\mathrm N$ (sarebbe il massimo) e non $\mu_d N = 15{,}7\,\mathrm N$ (il blocco non striscia, l'attrito dinamico non c'entra).
:::

::: esempio
**Ricavare $\mu_s$ (tipici del paniere).**
- *Scatola di pasta di $0{,}55\,\mathrm{kg}$ ferma sul tavolo; per muoverla serve una forza orizzontale di $2{,}8\,\mathrm N$.* Al primo distacco $F = \mu_s mg$ ⇒ $\mu_s = \dfrac{2{,}8}{0{,}55\cdot 9{,}8} = \dfrac{2{,}8}{5{,}39} \approx 0{,}52$ (le risposte lo arrotondano a $0{,}51$).
- *Blocco di $100\,\mathrm{kg}$ con $\mu_s = 0{,}60$: che forza serve per muoverlo?* $F = \mu_s mg = 0{,}60\cdot 100\cdot 9{,}8 = 588\,\mathrm N \approx 600\,\mathrm N$.
:::

### L'angolo di attrito
Su superfici reali si può considerare la forza di attrito (parallela alla superficie, ma legata al modulo della reazione normale) come una **seconda componente della reazione vincolare**, che contribuisce a tenere il corpo in equilibrio. La reazione vincolare totale $\vec R$ è allora la **somma vettoriale** della componente normale $\vec N$ e della componente tangente $\vec F_s$, e forma con la normale un angolo $\theta$ tale che
$$\tan\theta = \frac{F_s}{N} \le \frac{\mu_s N}{N} = \mu_s$$
Perché il corpo resti in equilibrio, la reazione vincolare **non può** formare con la normale un angolo maggiore di $\varphi_a$, definito da
$$\tan\varphi_a = \mu_s$$
e detto **angolo di attrito**.

**Applicazione: il piano inclinato scabro.** Un corpo appoggiato su un piano inclinato di $\theta$ resta fermo se la componente del peso lungo il piano, $mg\sin\theta$, non supera l'attrito massimo $\mu_s mg\cos\theta$, cioè se $\tan\theta \le \mu_s$. L'angolo massimo di inclinazione a cui il corpo resta fermo è proprio l'angolo di attrito: misurandolo si ricava $\mu_s = \tan\varphi_a$. Per esempio, se un blocco comincia a scivolare quando il piano è inclinato di $25°$, $\mu_s = \tan25° \approx 0{,}47$.

## L'attrito dinamico
Analogamente a quanto visto per l'attrito statico, analizzando il moto di un oggetto che **scorre** su una superficie reale si trova che è soggetto a una **forza di attrito dinamico** (o radente, o cinetico):

**Direzione e verso.** Parallela alla superficie, con verso **opposto al moto** dell'oggetto (alla sua velocità relativa alla superficie).

**Modulo.**
$$F_d = \mu_d N$$
dove:
- $F_d$ = forza di attrito dinamico (N);
- $\mu_d$ (indicato anche $\mu_k$) = **coefficiente di attrito dinamico**, numero puro che dipende **esclusivamente dalle caratteristiche delle superfici**;
- $N$ = risultante delle forze dirette normalmente alla superficie (N).

### Proprietà essenziali dell'attrito dinamico
- Il suo modulo è **fisso** (dati $\mu_d$ e $N$): non si adatta come lo statico.
- In buona approssimazione **non dipende dalla velocità** (finché non è troppo grande) né dall'**area di contatto**.
- È proporzionale a $N$.
- In generale **il coefficiente dinamico è minore di quello statico**: $\mu_d < \mu_s$. Questo spiega perché nell'esperienza quotidiana è **più facile spingere un corpo già in movimento** che mettere in movimento un oggetto fermo.
- È una forza **dissipativa**: il suo lavoro è sempre negativo e trasforma energia meccanica in calore. Chi trascina una valigia su un pavimento scabro compie lavoro **contro l'attrito dinamico**.

::: esempio
**Trascinare a velocità costante (tipici del paniere).**
- *Massa di $2{,}0\,\mathrm{kg}$ su un piano orizzontale con $\mu_d = 0{,}3$.* Velocità costante ⇒ risultante nulla ⇒ la forza applicata è uguale all'attrito: $F = \mu_d mg = 0{,}3\cdot 2\cdot 9{,}8 = 5{,}88 \approx 5{,}9\,\mathrm N$.
- *Cassa di peso $240\,\mathrm N$ spinta a velocità costante con $24\,\mathrm N$.* $F = \mu N$ con $N = P$: $\mu = 24/240 = 0{,}1$. Attenzione: qui è dato il **peso** (in N), non la massa: non va moltiplicato per $g$.
- *Oggetto da trascinare a velocità costante partendo da fermo.* All'inizio bisogna superare l'attrito **statico** massimo $\mu_s N$; una volta in moto basta bilanciare il **dinamico** $\mu_d N$, che è minore. Quindi serve una forza **maggiore all'inizio**, poi una forza **minore** per continuare.
:::

::: esempio
**Due masse legate (tipico del paniere).** $m_1 = 2\,\mathrm{kg}$ ($\mu_{d1} = 0{,}3$) e $m_2 = 5\,\mathrm{kg}$ ($\mu_{d2} = 0{,}2$) su un piano orizzontale, collegate da un filo. Che forza orizzontale serve per muoverle a velocità costante?

Velocità costante ⇒ la forza applicata bilancia la somma dei due attriti (la tensione del filo è interna al sistema):
$$F = \mu_{d1}m_1 g + \mu_{d2}m_2 g = (0{,}3\cdot 2 + 0{,}2\cdot 5)\cdot 9{,}8 = (0{,}6 + 1{,}0)\cdot 9{,}8 = 15{,}68 \approx 15{,}7\,\mathrm N$$
:::

::: esempio
**La slitta che si ferma (tipico del paniere).** Una slitta striscia sulla neve con velocità iniziale $4\,\mathrm{m/s}$; $\mu = 0{,}14$. Quanto spazio percorre prima di fermarsi?
1. L'unica forza orizzontale è l'attrito dinamico: $ma = -\mu_d mg$ ⇒ decelerazione $a = \mu_d g = 0{,}14\cdot 9{,}8 = 1{,}372\,\mathrm{m/s^2}$ (la massa si semplifica).
2. Moto uniformemente decelerato fino a $v = 0$: $0 = v_0^2 - 2as$ ⇒ $s = \dfrac{v_0^2}{2a} = \dfrac{16}{2{,}744} \approx 5{,}8\,\mathrm m$.

In generale, un corpo che striscia su un piano orizzontale con la sola forza d'attrito ha decelerazione $a = \mu_d g$; quindi $\mu_d = a/g$. (Una domanda del paniere sul disco da hockey che rallenta di $0{,}61\,\mathrm{m/s^2}$ dà $\mu_d = 0{,}61/9{,}8 \approx 0{,}062$, valore che non compare tra le sue risposte.)
:::

## Problemi con forze applicate e attrito
Il metodo è sempre la seconda legge lungo la direzione del moto:
$$F_{applicata} - F_{attrito} = ma$$
e lungo la normale per trovare $N$ (che **non** è sempre uguale al peso).

::: esempio
**Ricavare l'attrito dall'accelerazione (tipici del paniere).**
- *Blocco di $2\,\mathrm{kg}$ con una forza costante di $2\,\mathrm N$ parallela al piano, che accelera a $0{,}5\,\mathrm{m/s^2}$.* Risultante: $ma = 2\cdot 0{,}5 = 1\,\mathrm N$. Quindi $2 - F_a = 1$ ⇒ $F_a = 1\,\mathrm N$.
- *Modellino d'aereo di $2\,\mathrm{kg}$, motore da $10\,\mathrm N$, accelera a $3\,\mathrm{m/s^2}$.* Risultante $= 2\cdot 3 = 6\,\mathrm N$. Resistenza dell'aria $= 10 - 6 = 4\,\mathrm N$.
:::

::: esempio
**I due cavalli e il masso (tipico del paniere).** Due cavalli tirano un masso con $500\,\mathrm N$ ciascuno, con forze perpendicolari; il masso resta fermo. La risultante delle due trazioni è $\sqrt{500^2 + 500^2} = 500\sqrt2 \approx 707\,\mathrm N$. Il masso è fermo ⇒ l'attrito statico la bilancia: vale circa **$700\,\mathrm N$** (non $1000\,\mathrm N$, che sarebbe la somma dei moduli).
:::

::: esempio
**Il blocco tirato da un corpo appeso (tipico del paniere).** Un blocco di $M = 30\,\mathrm{kg}$ è fermo su un piano orizzontale con $\mu_s = 0{,}40$. Una fune, passando su una puleggia al bordo del piano, lo collega a un corpo sospeso di massa $m$. Quanto deve valere $m$, come minimo, perché il blocco parta?

Il corpo appeso tira la fune con il suo peso $mg$ (finché tutto è fermo, $T = mg$). Il blocco parte quando la tensione supera l'attrito statico massimo:
$$mg \ge \mu_s Mg \quad\Rightarrow\quad m \ge \mu_s M = 0{,}40\cdot 30 = 12\,\mathrm{kg}$$
:::

### Fune inclinata: la forza normale cambia
Se si tira con una fune che forma un angolo $\theta$ **verso l'alto** con l'orizzontale, la forza $F$ ha due componenti:
- **orizzontale** $F\cos\theta$: è quella che fa avanzare il corpo;
- **verticale** $F\sin\theta$ verso l'alto: **solleva in parte** il corpo e **riduce la forza normale**: $N = mg - F\sin\theta$.

Il corpo parte quando la componente orizzontale raggiunge l'attrito statico massimo, calcolato con la normale ridotta:
$$F\cos\theta = \mu_s\,(mg - F\sin\theta) \quad\Longrightarrow\quad F = \frac{\mu_s mg}{\cos\theta + \mu_s\sin\theta}$$
dove $F\cos\theta$ = componente orizzontale della forza (N) e $mg - F\sin\theta$ = forza normale ridotta (N). Il secondo passaggio si ottiene portando $\mu_s F\sin\theta$ a sinistra e raccogliendo $F$.

::: esempio
**Cassa tirata con fune a $30°$ (tipico del paniere).** Cassa di $12\,\mathrm{kg}$, $\mu_s = 0{,}3$, fune a $30°$ sopra l'orizzontale. Forza minima per muoverla?
1. Peso: $mg = 12\cdot 9{,}8 = 117{,}6\,\mathrm N$; $\cos30° = 0{,}866$, $\sin30° = 0{,}5$.
2. $F = \dfrac{0{,}3\cdot 117{,}6}{0{,}866 + 0{,}3\cdot 0{,}5} = \dfrac{35{,}28}{1{,}016} \approx 34{,}7\,\mathrm N$.
3. Confronto: tirando in orizzontale servirebbero $\mu_s mg = 35{,}3\,\mathrm N$. Tirare un po' verso l'alto conviene, perché riduce $N$ e quindi l'attrito.
:::

::: esempio
**Esercizio della dispensa: il corpo sulla parete del carrello.** Un corpo è appoggiato alla parete posteriore di un carrello che si muove in orizzontale con accelerazione $a = 5\,\mathrm{m/s^2}$; scende restando a contatto con la parete. Il coefficiente di attrito dinamico tra corpo e parete è $\mu = 0{,}4$. Con quale legge oraria si muove il corpo rispetto alla parete?

Lavoro nel sistema **non inerziale** del carrello (lezione 13).
1. *Orizzontale.* Il corpo è fermo rispetto al carrello in orizzontale. Agisce la forza fittizia $-m\vec a$, che lo spinge contro la parete posteriore; la parete risponde con la reazione normale. In modulo: $N = ma$.
2. *Verticale.* Agiscono il peso $mg$ (giù) e l'attrito dinamico $\mu N = \mu ma$ (su, opposto alla discesa). Con l'asse $y$ verso l'alto:
$$m a_y = \mu m a - mg \quad\Rightarrow\quad a_y = \mu a - g = 0{,}4\cdot 5 - 9{,}8 = 2 - 9{,}8 = -7{,}8\,\mathrm{m/s^2}$$
3. Il corpo scende di **moto uniformemente accelerato** verso il basso con $7{,}8\,\mathrm{m/s^2}$; partendo da fermo rispetto alla parete: $y(t) = -\tfrac12\cdot 7{,}8\,t^2 = -3{,}9\,t^2$ (in metri, con $t$ in secondi).

Se l'accelerazione del carrello fosse $a \ge g/\mu = 24{,}5\,\mathrm{m/s^2}$, l'attrito basterebbe a tenere il corpo "incollato" alla parete.
:::

::: esempio
**Esercizio della dispensa: due corpi che scendono appoggiati.** Lungo un piano scabro inclinato di $\theta = 50°$ scivolano, appoggiati l'uno all'altro, due corpi A e B di ugual massa $m = 1\,\mathrm{kg}$, con coefficienti di attrito dinamico $\mu_A = 0{,}3$ (A, davanti) e $\mu_B = 0{,}1$ (B, dietro). Con che forza B spinge A?

B ha meno attrito, quindi "vorrebbe" scendere più velocemente e spinge A: i due scendono insieme con la stessa accelerazione $a$. Positivo = verso la discesa; $F$ = forza mutua (terzo principio: B spinge A in avanti con $F$, A spinge B indietro con $F$).
- A: $ma = mg\sin\theta + F - \mu_A mg\cos\theta$
- B: $ma = mg\sin\theta - F - \mu_B mg\cos\theta$

Sottraggo membro a membro (i primi membri sono uguali e si elidono, come i termini $mg\sin\theta$):
$$0 = 2F - (\mu_A - \mu_B)\,mg\cos\theta \quad\Rightarrow\quad F = \frac{(\mu_A - \mu_B)\,mg\cos\theta}{2} = \frac{0{,}2\cdot 1\cdot 9{,}8\cdot 0{,}643}{2} \approx 0{,}63\,\mathrm N$$
:::

## L'attrito volvente e le ruote
L'**attrito volvente** (o di rotolamento) si oppone al **rotolamento** di un corpo (ruota, cilindro, sfera) su una superficie. Nasce dalla piccola deformazione del corpo e del piano nella zona di contatto. È **molto più debole** dell'attrito radente: per questo è molto più facile **far rotolare** un tronco cilindrico che trascinarlo con una corda, e per questo l'uomo ha inventato la ruota.

**La ruota che frena.** In una ruota che rotola **senza strisciare**, il punto a contatto con il suolo è, istante per istante, **fermo** rispetto al suolo. Lì agisce quindi l'**attrito statico**, che può arrivare a $\mu_s N$, più grande dell'attrito dinamico. Se in frenata le ruote si **bloccano**, la gomma **striscia** sull'asfalto e agisce l'attrito **dinamico** $\mu_d N$, più debole (e la direzione non si controlla più). Per questo, soprattutto su un tratto ghiacciato, è preferibile che le ruote continuino a rotolare mentre si frena: è il principio dell'**ABS**, che impedisce il bloccaggio.

## Attrito viscoso e resistenza del mezzo
Un corpo che si muove in un **fluido** (aria, acqua, olio) subisce una forza resistente detta **attrito viscoso** o **resistenza del mezzo**. Caratteristiche:
- è **opposta alla velocità** del corpo rispetto al fluido;
- **dipende dalla velocità relativa** dell'oggetto rispetto al mezzo: cresce quando la velocità cresce;
- se l'oggetto è **fermo rispetto al mezzo**, la forza è **nulla** (diversamente dall'attrito statico, non c'è nessuna "soglia" da superare);
- dipende dalla **forma** e dalle dimensioni del corpo e dalle proprietà del fluido (**viscosità**, **densità**).

### Velocità basse: regime laminare
A velocità basse il fluido scorre attorno al corpo in modo ordinato, a strati (**moto laminare**), e la resistenza è **proporzionale alla velocità**:
$$\vec F = -\beta\,\vec v$$
dove $\vec F$ = forza di resistenza (N), $\vec v$ = velocità del corpo rispetto al fluido (m/s), $\beta$ = coefficiente (kg/s) che dipende dalla **forma** del corpo e dalla **viscosità** del fluido. Il segno meno indica che la forza è opposta alla velocità. (Per una piccola sfera di raggio $r$ in un fluido di viscosità $\eta$ vale la legge di Stokes, $\beta = 6\pi\eta r$.)

### Velocità alte: regime turbolento
Se il moto avviene a **velocità elevate** e al passaggio dell'oggetto si producono **vortici** nel mezzo, la forza di resistenza è proporzionale al **quadrato** della velocità:
$$F_r = \tfrac12\,C\,\rho\,A\,v^2 \qquad (\text{opposta alla velocità})$$
dove:
- $C$ = **coefficiente di resistenza** del mezzo, o di **resistenza aerodinamica** (numero puro; dipende dalla forma: piccolo per corpi affusolati, circa $0{,}3$ per un'auto moderna, circa $0{,}5$ per una sfera, oltre $1$ per un paracadute);
- $\rho$ = **densità** del mezzo, massa per unità di volume (kg/m³);
- $A$ = **area efficace** della sezione dell'oggetto trasversale al moto (m²);
- $v$ = velocità rispetto al mezzo (m/s).

La forma è simile a quella del caso laminare se si scrive $F_r = \beta' v$ con
$$\beta' = \tfrac12\,C\,\rho\,A\,v$$
Anche qui il coefficiente dipende dalla **forma** dell'oggetto (tramite $A$ e $C$) e dalle caratteristiche fisiche del **fluido** (tramite $\rho$), ma c'è una **dipendenza aggiuntiva dalla velocità**.

::: esempio
**L'auto in autostrada (tipico del paniere).** A $130\,\mathrm{km/h}$ costanti l'attrito predominante è quello **viscoso dell'aria**, che cresce con $v^2$: a $130\,\mathrm{km/h}$ ($36\,\mathrm{m/s}$), con $C = 0{,}3$, $\rho = 1{,}2\,\mathrm{kg/m^3}$, $A = 2\,\mathrm{m^2}$, vale $\tfrac12\cdot 0{,}3\cdot 1{,}2\cdot 2\cdot 36^2 \approx 470\,\mathrm N$, molto più dell'attrito volvente delle gomme (circa $150\,\mathrm N$ per un'auto da $1000\,\mathrm{kg}$). La spinta del motore lo bilancia (velocità costante ⇒ risultante nulla).
:::

## Caduta in un mezzo viscoso: la velocità limite
Studiamo la caduta libera **senza trascurare** l'effetto del mezzo viscoso in cui ci muoviamo, per esempio l'aria. Prendo come positivo il verso **verso il basso**. Agiscono il **peso** $mg$ (in giù) e l'**attrito viscoso** $\beta v$ (in su, opposto alla velocità). La seconda legge:
$$m\frac{dv}{dt} = mg - \beta v$$
È un'**equazione differenziale**: l'accelerazione dipende dalla velocità.

### Ragionamento qualitativo
- All'istante iniziale il corpo è fermo: $v = 0$, l'attrito è nullo, l'accelerazione è $g$.
- La velocità cresce, quindi cresce l'attrito e l'accelerazione $g - \beta v/m$ **diminuisce**.
- Quando l'attrito diventa uguale al peso, $\beta v = mg$, l'accelerazione si **annulla**: da lì il corpo cade a **velocità costante**. È la **velocità limite**:
$$v_{lim} = \frac{mg}{\beta}$$

### Soluzione passo per passo
Pongo $\tau = m/\beta$ (una costante con le dimensioni di un tempo, s). Dividendo l'equazione per $m$:
$$\frac{dv}{dt} = g - \frac{v}{\tau} = \frac{v_{lim} - v}{\tau}$$
Separo le variabili (porto tutto ciò che contiene $v$ a sinistra e $t$ a destra):
$$\frac{dv}{v_{lim} - v} = \frac{dt}{\tau}$$
Integro da $0$ a $t$ (con $v(0) = 0$, partenza da fermo):
$$-\ln\frac{v_{lim} - v}{v_{lim}} = \frac{t}{\tau} \quad\Longrightarrow\quad \frac{v_{lim} - v}{v_{lim}} = e^{-t/\tau}$$
e quindi
$$v(t) = \frac{mg}{\beta}\left(1 - e^{-\beta t/m}\right)$$
dove $v(t)$ = velocità all'istante $t$ (m/s), $e$ = numero di Nepero, $\beta t/m = t/\tau$ adimensionale.

Lettura del risultato:
- per $t = 0$: $v = 0$ ✓;
- per $t$ piccolo: $e^{-t/\tau} \approx 1 - t/\tau$, quindi $v \approx gt$: all'inizio è una caduta libera;
- per $t \to \infty$: $e^{-t/\tau} \to 0$ e $v \to v_{lim}$; la velocità si **avvicina asintoticamente** alla velocità limite. Dopo $t = 3\tau$ ha già raggiunto il $95\%$ di $v_{lim}$.

La velocità limite **cresce con il peso** e **diminuisce con $\beta$**, cioè con l'area esposta e la viscosità/densità del mezzo. In regime turbolento si trova allo stesso modo ponendo $mg = \tfrac12 C\rho A v^2$:
$$v_{lim} = \sqrt{\frac{2mg}{C\rho A}}$$
Il **paracadute** sfrutta proprio questo: aprendolo si aumentano enormemente $A$ e $C$, e la velocità limite scende da circa $50\,\mathrm{m/s}$ a circa $5\,\mathrm{m/s}$.

### Conseguenze (tutte domande del paniere)
- **Le gocce di pioggia**, nell'ultima fase della discesa, cadono a velocità **costante**, perché la forza di attrito viscoso dell'aria **bilancia** la forza di gravità.
- **Un palloncino** lasciato cadere dal soffitto di una palestra ($10\,\mathrm m$) ha massa piccolissima e grande superficie: raggiunge quasi subito la velocità limite, quindi **nel tratto finale cade a velocità pressoché costante**.
- **Una palla lanciata verso l'alto** con velocità **maggiore** della sua velocità limite, che poi ricade nel punto di lancio. In salita la velocità diminuisce (peso e resistenza sono entrambi verso il basso); in discesa la velocità cresce ma **non può superare** $v_{lim}$, che è minore della velocità di lancio. La velocità massima di tutto il moto è quindi quella iniziale, e poiché la resistenza cresce con la velocità, la resistenza è massima **subito dopo il lancio**.

::: esempio
**Perché la pioggia non ci uccide (domanda aperta).** Una goccia di raggio $r = 1\,\mathrm{mm}$ cade da una nube a $2000\,\mathrm m$.
1. *Senza aria* arriverebbe con $v = \sqrt{2gh} = \sqrt{2\cdot 9{,}8\cdot 2000} \approx 198\,\mathrm{m/s}$, come un proiettile.
2. *Con l'aria.* Massa: $m = \rho_{acqua}\cdot\tfrac43\pi r^3 = 1000\cdot 4{,}19\cdot 10^{-9} \approx 4{,}2\cdot 10^{-6}\,\mathrm{kg}$. Sezione: $A = \pi r^2 \approx 3{,}1\cdot 10^{-6}\,\mathrm{m^2}$. Con $C \approx 0{,}5$ e $\rho_{aria} = 1{,}2\,\mathrm{kg/m^3}$:
$$v_{lim} = \sqrt{\frac{2mg}{C\rho A}} = \sqrt{\frac{2\cdot 4{,}2\cdot 10^{-6}\cdot 9{,}8}{0{,}5\cdot 1{,}2\cdot 3{,}1\cdot 10^{-6}}} \approx \sqrt{44} \approx 6{,}6\,\mathrm{m/s}$$
3. La goccia raggiunge questa velocità dopo pochi metri e poi **non accelera più**: tutta l'energia potenziale persa in seguito viene dissipata dall'attrito dell'aria (diventa calore), invece di diventare energia cinetica. L'energia cinetica all'arrivo resta piccolissima: $\tfrac12 mv^2 \approx \tfrac12\cdot 4{,}2\cdot 10^{-6}\cdot 44 \approx 10^{-4}\,\mathrm J$, quasi mille volte meno che senza aria.

(Numeri di stima: servono a capire l'ordine di grandezza.)
:::

## Potenza contro la resistenza
Per muoversi a **velocità costante** contro una forza resistente $F$ bisogna applicare una forza motrice uguale a $F$, che compie lavoro $F\,\Delta s$ in un tempo $\Delta t$. La potenza è il lavoro per unità di tempo:
$$P = \frac{F\,\Delta s}{\Delta t} = F\,v$$
dove $P$ = potenza (W), $F$ = forza resistente da vincere (N), $v$ = velocità (m/s).

::: esempio
**Il nuotatore (tipico del paniere).** Nuota a $0{,}22\,\mathrm{m/s}$ costanti contro una resistenza dell'acqua di $110\,\mathrm N$. Potenza: $P = Fv = 110\cdot 0{,}22 = 24{,}2 \approx 24\,\mathrm W$.
:::

**Correre e nuotare (domanda aperta).** L'elemento distintivo è il **mezzo** in cui ci si muove e quindi la **resistenza del mezzo** (attrito viscoso).
- Chi **corre** si muove nell'**aria**, poco densa ($\approx 1{,}2\,\mathrm{kg/m^3}$) e poco viscosa: a velocità di corsa la resistenza è piccola, e il costo energetico dipende soprattutto dal sollevare e spingere il corpo a ogni passo (l'appoggio sul terreno sfrutta l'attrito statico, che non dissipa energia).
- Chi **nuota** si muove nell'**acqua**, circa **mille volte più densa** ($1000\,\mathrm{kg/m^3}$) e molto più viscosa dell'aria. La resistenza del mezzo è enorme anche a bassa velocità, e anche la "spinta" si ottiene contro un fluido che cede. A parità di velocità, il nuoto richiede quindi un dispendio energetico molto maggiore; per questo i nuotatori vanno molto più piano dei corridori.

## Attrito ed energia
L'attrito dinamico e quello viscoso sono forze **dissipative**: con l'attrito l'energia meccanica **diminuisce** e una parte diventa calore (lezione 20). Senza attrito, un corpo che scende da fermo di un dislivello $h$ arriva con $v = \sqrt{2gh}$ (tutta l'energia potenziale diventa cinetica). Con l'attrito arriva più lento. **Non può mai arrivare più veloce** di $\sqrt{2gh}$, perché nessuna forza gli fornisce energia in più.

::: esempio
**Lo scivolo del parco acquatico (tipico del paniere).** Un bambino di $20\,\mathrm{kg}$ scivola da un piano inclinato alto $2\,\mathrm m$ e arriverebbe in piscina a $7{,}2\,\mathrm{m/s}$. Velocità massima possibile (senza alcun attrito): $v_{max} = \sqrt{2\cdot 9{,}8\cdot 2} = \sqrt{39{,}2} \approx 6{,}3\,\mathrm{m/s}$. Poiché $7{,}2 > 6{,}3$, partendo da fermo **non è possibile** che sia arrivato con quella velocità. L'acqua riduce l'attrito ma non può aggiungere energia; la lunghezza del piano è irrilevante, conta solo l'altezza.
:::

## Statico, dinamico, viscoso: le differenze
| | Statico | Dinamico | Viscoso |
|---|---|---|---|
| Tra | solido e solido, corpo fermo | solido e solido, corpo che striscia | corpo e fluido |
| Modulo | si adatta, $\le \mu_s N$ | fisso, $\mu_d N$ | $\beta v$ o $\tfrac12 C\rho Av^2$ |
| Dipende da $N$ | sì | sì | no |
| Dipende dalla velocità | no | in pratica no | sì, cresce con $v$ |
| Dipende dall'area di contatto | no | no | sì (sezione trasversale) |
| Con corpo fermo | vale quanto serve a tenerlo fermo | non c'è | nullo |
| Coefficiente | $\mu_s$ | $\mu_d < \mu_s$ | $\beta$, $C$ (forma, fluido) |

::: attenzione
Errori classici:
- usare $\mu_s N$ come valore dell'attrito quando il corpo resta fermo: l'attrito statico vale quanto la forza applicata, $\mu_s N$ è solo il massimo;
- usare sempre $N = mg$: con una fune inclinata, una spinta verso il basso o un piano inclinato $N$ cambia;
- credere che l'attrito dipenda dall'area di contatto (per statico e dinamico no);
- confondere attrito dinamico (tra solidi, indipendente dalla velocità) e viscoso (in un fluido, dipendente dalla velocità e nullo da fermo).
:::

::: esame
Domande aperte e come rispondere:
- **"Che differenza c'è tra attrito statico e attrito dinamico?"**: lo statico agisce sul corpo fermo, si adatta alla forza applicata fino al massimo $\mu_s N$ (forza di primo distacco); il dinamico agisce sul corpo che striscia, ha valore fisso $\mu_d N$ opposto alla velocità; $\mu_d < \mu_s$ (serve più forza per smuovere che per mantenere in moto); entrambi tangenti alla superficie, proporzionali a $N$, indipendenti dall'area, con coefficienti adimensionali che dipendono solo dalle superfici.
- **"L'attrito statico e le sue proprietà essenziali"** e **"L'attrito dinamico e le sue proprietà essenziali"**: definizione, direzione e verso, formula, coefficiente, dipendenza da $N$ e non dall'area, angolo di attrito $\tan\varphi = \mu_s$ (per lo statico), indipendenza dalla velocità e dissipazione (per il dinamico), esempi.
- **"Che differenza c'è tra attrito dinamico e attrito viscoso?"**: il dinamico è tra solidi, $\mu_d N$, indipendente dalla velocità; il viscoso è tra un corpo e un fluido, dipende dalla velocità ($-\beta v$ a basse velocità, $\tfrac12 C\rho Av^2$ ad alte), è nullo se il corpo è fermo rispetto al fluido, dipende da forma, area, densità e viscosità del mezzo, non da $N$.
- **"Esponete le tipologie di attrito"**: statico, dinamico (radente), volvente, viscoso, con le proprietà della tabella.
- **"Comportamento di un oggetto in caduta libera in un mezzo viscoso"**: $m\,dv/dt = mg - \beta v$; accelera sempre meno fino alla velocità limite $v_{lim} = mg/\beta$, poi cade a velocità costante; $v(t) = v_{lim}(1 - e^{-\beta t/m})$; paracadute, gocce.
- **"Perché una goccia di pioggia non ci uccide"**: raggiunge presto la velocità limite (pochi m/s), poi non accelera; l'energia potenziale viene dissipata dall'attrito dell'aria; energia cinetica piccola.
- **"Correre e nuotare"**: la differenza è il mezzo: acqua circa mille volte più densa e più viscosa dell'aria, resistenza del mezzo molto maggiore.

Chiuse tipiche: attrito che vale quanto la forza quando il corpo è fermo; $\mu = F/N$; forza di primo distacco che raddoppia con due mattoni; attrito da $F - ma$; slitta ($s = v^2/(2\mu g)$); fune inclinata ($34{,}7\,\mathrm N$); massa appesa minima $\mu_s M$; potenza $Fv$; ruote che rotolano (statico > dinamico); tronco che rotola (volvente < radente); autostrada (viscoso); palla lanciata (resistenza massima subito dopo il lancio); palloncino (velocità quasi costante alla fine); scivolo impossibile ($v > \sqrt{2gh}$).
:::

::: sintesi
- Attrito = forza opposta al moto (o alla tendenza al moto); dipende da $N$ e dalla rugosità delle superfici.
- Statico: $F_s \le \mu_s N$, si adatta alla forza applicata; il massimo è la forza di primo distacco; angolo di attrito $\tan\varphi_a = \mu_s$.
- Dinamico: $F_d = \mu_d N$, opposto alla velocità, $\mu_d < \mu_s$; statico e dinamico non dipendono dall'area, $\mu$ adimensionali che dipendono solo dalle superfici.
- $N$ va calcolata: con fune inclinata $N = mg - F\sin\theta$, quindi $F = \mu_s mg/(\cos\theta + \mu_s\sin\theta)$.
- Corpo che striscia da solo: decelerazione $\mu_d g$, arresto dopo $v_0^2/(2\mu_d g)$.
- Volvente molto minore del radente; ruota che rotola = attrito statico nel punto di contatto (ABS).
- Viscoso: $-\beta\vec v$ (laminare) o $\tfrac12 C\rho Av^2$ (turbolento); nullo da fermo.
- Caduta nel mezzo: $m\,dv/dt = mg - \beta v$, $v(t) = \dfrac{mg}{\beta}(1 - e^{-\beta t/m})$, $v_{lim} = mg/\beta$ (o $\sqrt{2mg/(C\rho A)}$).
- Potenza contro una resistenza a velocità costante: $P = Fv$.
- Con attrito l'energia meccanica diminuisce: da un dislivello $h$ non si arriva mai oltre $\sqrt{2gh}$.
:::
