=== 2 dispense
SLIDES: 01, 02
# Lezione 02 — Grandezze fisiche, unità di misura ed errori

Questa lezione costruisce il linguaggio di base di tutto il corso. La fisica descrive la natura con **numeri** ottenuti da **misure**: prima di parlare di moto, forze o energia bisogna sapere che cos'è una grandezza fisica, con quali unità la si esprime (il Sistema Internazionale), come si controlla che una formula abbia senso (analisi dimensionale) e, soprattutto, che ogni misura porta con sé un **errore**. Si impara infine a scrivere correttamente il risultato di una misura e a conoscere gli strumenti con cui la si fa.

## La fisica e il metodo scientifico
La fisica è la scienza che studia il comportamento della natura e ne descrive i fenomeni. La fisica classica si è sviluppata grazie al **metodo scientifico**, che procede per passi:
1. **osservazione** dei fenomeni (si guarda cosa succede);
2. **esperimenti controllati** capaci di riprodurli (si ripete il fenomeno cambiando una cosa alla volta);
3. formulazione di **ipotesi o leggi** che li spieghino, scritte nel **linguaggio della matematica**;
4. raccolta delle leggi in **teorie** più generali, che vengono poi **verificate o falsificate** con nuovi esperimenti.

Una legge fisica non è mai "dimostrata" una volta per tutte: resta valida finché gli esperimenti la confermano.

## Grandezza fisica e misura
Le proprietà di un sistema fisico sono rappresentate da **grandezze fisiche**, legate tra loro dalle leggi della fisica. Una grandezza fisica è una proprietà di un corpo o di un fenomeno **che si può misurare**.

Ogni grandezza ha una **definizione operativa**: è individuata dal risultato di una ben precisa **operazione di misura**. Misurare vuol dire confrontare la grandezza con una grandezza dello stesso tipo scelta come riferimento, l'**unità di misura**, e trovare quante volte la contiene:
$$G = g \cdot u_G$$
dove:
- $G$ = la grandezza (per esempio la lunghezza di un tavolo);
- $g$ = il numero puro che esce dalla misura, cioè il rapporto tra la grandezza e l'unità (per esempio $1{,}5$);
- $u_G$ = l'unità di misura (per esempio il metro, m).

Quindi "il tavolo è lungo $1{,}5\,\mathrm m$" significa che il tavolo contiene una volta e mezza il metro campione. Un numero senza unità non è una misura: "il tavolo è lungo 1,5" non dice niente.

::: esempio
Un termometro segna la temperatura di una stanza: $21\,°\mathrm C$. Distinguiamo i quattro elementi:
- la **grandezza fisica** è la **temperatura** (la proprietà misurabile della stanza);
- lo **strumento** è il termometro;
- la **misura** è il risultato, $21\,°\mathrm C$ (numero più unità);
- l'**unità di misura** è il grado Celsius, fissato dalla scala del termometro.

Solo la temperatura è la grandezza: strumento, misura e unità sono cose diverse.
:::

Il risultato di una misura dipende dalle condizioni sperimentali e dalla bontà dello strumento. È sempre e solo la nostra **migliore stima** del **valore vero** della grandezza. Il valore vero resta un concetto astratto: per conoscerlo esattamente servirebbe una misura in condizioni ideali con uno strumento perfetto, cosa impossibile. Stimare il valore vero è il problema centrale della **teoria della misura**, di cui vediamo le basi più avanti.

## Grandezze scalari e vettoriali (cenno)
Le grandezze si dividono in:
- **scalari**: basta un numero con la sua unità (massa, temperatura, tempo, energia);
- **vettoriali**: oltre al numero servono una **direzione** e un **verso** (velocità, forza, spostamento).

L'argomento è sviluppato nella lezione 3.

## Grandezze fondamentali e derivate
Non serve un campione diverso per ogni grandezza. Si sceglie un piccolo gruppo di grandezze, dette **fondamentali**, ciascuna definita da un **campione primario** indipendente dagli altri. Tutte le altre grandezze, dette **derivate**, hanno dimensioni e unità definite **a partire dalle fondamentali**, attraverso le equazioni o leggi fisiche che le collegano.

- Grandezze **fondamentali**: lunghezza, massa, tempo (e le altre quattro del SI).
- Grandezze **derivate**: velocità = lunghezza/tempo; accelerazione = velocità/tempo; forza = massa × accelerazione; area = lunghezza²; volume = lunghezza³.

Una grandezza è derivata perché **è definita a partire dalle grandezze fondamentali**. Il fatto che la sua unità sia un prodotto o un rapporto di unità fondamentali (m/s, kg·m/s²) è una **conseguenza** di questa definizione, non la definizione stessa.

## Il Sistema Internazionale (SI)
Il sistema di unità oggi riconosciuto (quasi) universalmente è il **Sistema Internazionale di unità di misura (SI)**. Definisce **sette grandezze fondamentali**, ciascuna con la sua unità e il suo campione:

| Grandezza fondamentale | Unità | Simbolo |
|---|---|---|
| tempo | secondo | s |
| lunghezza | metro | m |
| massa | kilogrammo (chilogrammo) | kg |
| quantità di sostanza (di materia) | mole | mol |
| temperatura (termodinamica) | kelvin | K |
| intensità di corrente elettrica | ampere | A |
| intensità luminosa | candela | cd |

Per la meccanica bastano le prime tre: **metro, kilogrammo, secondo**.

### I campioni
Un buon campione deve avere due qualità:
- **accessibilità**: deve essere possibile confrontarsi con esso;
- **invariabilità**: non deve cambiare nel tempo.

Storicamente il metro e il kilogrammo erano oggetti materiali: la **barra del metro campione** e il **kilogrammo campione**, conservati all'Ufficio Internazionale di Pesi e Misure a Sèvres, vicino a Parigi. Da questi **campioni primari** si producevano i **campioni secondari** delle singole nazioni, e da questi copie sempre più accessibili.

Con l'aumento della precisione richiesta, i campioni sono stati ridefiniti in modo molto più fine:
- **metro**: la distanza percorsa dalla luce nel vuoto in un tempo di $1/299\,792\,458$ di secondo;
- **secondo**: la durata di $9\,192\,631\,770$ oscillazioni della radiazione (di una precisa lunghezza d'onda) emessa da un atomo di cesio-133;
- **kilogrammo**: nella dispensa è ancora quello storico di Parigi; su scala atomica si usa anche l'**unità di massa atomica** $u$, pari a $1/12$ della massa di un atomo di carbonio-12.

### Unità derivate
Le unità delle grandezze derivate si ottengono dalle fondamentali usando la legge che definisce la grandezza. Alcune hanno un nome proprio:

| Grandezza | Legge | Unità SI | In unità fondamentali |
|---|---|---|---|
| velocità | $v = \Delta s/\Delta t$ | m/s | $\mathrm{m\,s^{-1}}$ |
| accelerazione | $a = \Delta v/\Delta t$ | m/s² | $\mathrm{m\,s^{-2}}$ |
| forza | $F = m\,a$ | newton (N) | $\mathrm{kg\,m\,s^{-2}}$ |
| lavoro, energia | $L = F\,s$ | joule (J) | $\mathrm{N\,m} = \mathrm{kg\,m^2\,s^{-2}}$ |
| potenza | $P = L/t$ | watt (W) | $\mathrm{J/s}$ |
| frequenza | $f = 1/T$ | hertz (Hz) | $\mathrm{s^{-1}}$ |
| pressione | $p = F/S$ | pascal (Pa) | $\mathrm{N/m^2}$ |

Il **newton** quindi è l'unità della **forza**: $1\,\mathrm N$ è la forza che dà a una massa di $1\,\mathrm{kg}$ un'accelerazione di $1\,\mathrm{m/s^2}$.

::: attenzione
- Multipli e sottomultipli **non sono** unità fondamentali del SI. Il **centimetro**, il **grammo**, il **chilometro** e l'**ora** si usano, ma l'unità SI di lunghezza è il **metro**, quella di massa il **kilogrammo** (non il grammo!), quella di tempo il **secondo**. Il kilogrammo è un caso storico particolare: è l'unità base anche se nel nome contiene già il prefisso "kilo".
- I simboli vanno scritti esattamente: **kg** con la k minuscola, **m** per il metro, **s** per il secondo (non "sec"), **N** per il newton, **K** per il kelvin **senza** il simbolo di grado.
- Le temperature si esprimono in **K**, **°C** o **°F**. Una scala "°N" **non esiste**: un risultato come "50 °N" è sbagliato.
:::

## Dimensioni fisiche e analisi dimensionale
L'unità di misura di una grandezza ne specifica la **dimensione fisica**, cioè di quali grandezze fondamentali è fatta. Le dimensioni si scrivono tra parentesi quadre: $[L]$ lunghezza, $[M]$ massa, $[T]$ tempo.

Come si ricavano, passo per passo:
- una distanza, un'altezza, una lunghezza: $[L]$;
- un'area è una lunghezza per una lunghezza: $[L^2]$, in $\mathrm{m^2}$;
- la velocità è uno spazio diviso un tempo: $[v] = [L]/[T] = [L\,T^{-1}]$, in m/s;
- l'accelerazione è una variazione di velocità divisa per un tempo: $[a] = [v]/[T] = [L\,T^{-1}]/[T] = [L\,T^{-2}]$, in m/s²; a parole "lunghezza per tempo alla meno due";
- la forza è massa per accelerazione: $[F] = [M][L\,T^{-2}] = [M\,L\,T^{-2}]$.

**Principio di omogeneità.** In ogni equazione che esprime una legge fisica, i due membri (e ogni termine di una somma) devono avere le **stesse dimensioni**. Non si possono sommare metri e secondi. Il controllo delle dimensioni si chiama **analisi dimensionale**: è un modo veloce per scoprire errori in una formula.

::: esempio
Controlliamo la legge oraria $s = s_0 + v_0 t + \tfrac12 a t^2$:
- $[s] = [L]$, $[s_0] = [L]$;
- $[v_0 t] = [L\,T^{-1}][T] = [L]$;
- $[\tfrac12 a t^2] = [L\,T^{-2}][T^2] = [L]$ (il numero $\tfrac12$ non ha dimensioni).

Tutti i termini sono lunghezze: la formula è dimensionalmente corretta. Se per errore si scrivesse $s = \tfrac12 a t$, si avrebbe $[L\,T^{-2}][T] = [L\,T^{-1}]$, una velocità: la formula sarebbe certamente sbagliata.
:::

::: esempio
Tra distanza, altezza, lunghezza e velocità, quale ha dimensioni diverse? Distanza, altezza e lunghezza sono tutte $[L]$; la velocità è $[L\,T^{-1}]$. La "diversa" è la velocità.
:::

L'analisi dimensionale controlla le unità, non i numeri puri: non può dire se manca un fattore $\tfrac12$ o $2\pi$.

## Ordini di grandezza e prefissi
L'**ordine di grandezza** di una quantità è la potenza di 10 contenuta nel suo valore. Si legge facilmente scrivendo il numero in **notazione scientifica** ($a \cdot 10^n$ con $1 \le a < 10$). Esempio: l'equatore è lungo circa $40\,000\,\mathrm{km} = 4\cdot 10^{7}\,\mathrm m$, quindi ha ordine di grandezza 7.

Per non scrivere sempre potenze di 10 si usano **prefissi** davanti all'unità:

| Prefisso | Simbolo | Fattore | | Prefisso | Simbolo | Fattore |
|---|---|---|---|---|---|---|
| deca | da | $10^{1}$ | | deci | d | $10^{-1}$ |
| etto | h | $10^{2}$ | | centi | c | $10^{-2}$ |
| kilo | k | $10^{3}$ | | milli | m | $10^{-3}$ |
| mega | M | $10^{6}$ | | micro | µ | $10^{-6}$ |
| giga | G | $10^{9}$ | | nano | n | $10^{-9}$ |
| tera | T | $10^{12}$ | | pico | p | $10^{-12}$ |
| peta | P | $10^{15}$ | | femto | f | $10^{-15}$ |
| exa | E | $10^{18}$ | | atto | a | $10^{-18}$ |

Attenzione alle maiuscole: **M** = mega ($10^6$), **m** = milli ($10^{-3}$).

## Conversioni di unità
Spesso nei calcoli bisogna cambiare unità. Si usano i **fattori di conversione**: si scrive ogni unità "vecchia" in funzione di quella "nuova" e si semplifica come in una frazione.

**Da km/h a m/s.** Si sa che $1\,\mathrm{km} = 1000\,\mathrm m$ e $1\,\mathrm h = 3600\,\mathrm s$:
$$1\,\frac{\mathrm{km}}{\mathrm h} = \frac{1000\,\mathrm m}{3600\,\mathrm s} = \frac{1}{3{,}6}\,\frac{\mathrm m}{\mathrm s}$$
Quindi: **da km/h a m/s si divide per 3,6**; **da m/s a km/h si moltiplica per 3,6** (perché $1\,\mathrm{m/s} = 3{,}6\,\mathrm{km/h}$).

::: esempio
- $60\,\mathrm{m/s} = 60 \cdot 3{,}6\,\mathrm{km/h} = 216\,\mathrm{km/h}$.
- Il limite in autostrada, $130\,\mathrm{km/h}$, vale $130/3{,}6 \approx 36{,}1\,\mathrm{m/s}$: poco più di 36 m/s.
- $120\,\mathrm{km/h} = 120/3{,}6 \approx 33{,}3\,\mathrm{m/s}$; $15\,\mathrm{km/h} = 15/3{,}6 \approx 4{,}17\,\mathrm{m/s}$.
:::

::: esempio
**Quanti giorni sono 691 200 s?** Un giorno contiene $3600\,\mathrm{s/h} \cdot 24\,\mathrm{h/giorno} = 86\,400\,\mathrm{s/giorno}$. Allora
$$\frac{691\,200\,\mathrm s}{86\,400\,\mathrm{s/giorno}} = 8\ \text{giorni}.$$
:::

::: esempio
**Prefissi.**
- Un micrometro: $1\,\mu\mathrm m = 10^{-6}\,\mathrm m$. Poiché $1\,\mathrm{mm} = 10^{-3}\,\mathrm m$, si ha $10^{-6}\,\mathrm m = 10^{-3}\cdot 10^{-3}\,\mathrm m = 10^{-3}\,\mathrm{mm}$. Quindi $1\,\mu\mathrm m = 10^{-3}\,\mathrm{mm}$ (un millesimo di millimetro).
- Un megahertz: $1\,\mathrm{MHz} = 10^{6}\,\mathrm{Hz}$.
- $18\,\mathrm{min} = 18\cdot 60 = 1080\,\mathrm s$; $15\,\mathrm{min} = 0{,}25\,\mathrm h$.
:::

## Errori di misura
Ad ogni misura è associato un **errore** (o incertezza): è una stima di **quanto il risultato può scostarsi dal valore vero**. Gli errori sono di due tipi.

### Errore casuale
Nasce da piccole incertezze che fanno **oscillare** i risultati di misure ripetute della stessa grandezza **in un verso o nell'altro** attorno al valore vero (un riflesso più lento, una lettura un po' storta, una piccola vibrazione). Ripetendo molte volte la misura e riportando in un grafico quante volte esce ogni valore, i risultati si dispongono a **campana** (curva gaussiana). Gli errori casuali **si riducono ripetendo la misura** e facendo la media.

### Errore sistematico
Nasce da uno **strumento tarato male**, usato in condizioni diverse da quelle consigliate, o da un comportamento sbagliato dell'operatore (per esempio leggere sempre la scala di traverso). Sposta i risultati **sempre nello stesso verso** rispetto al valore vero (per esempio sempre in eccesso). **Ripetere la misura non aiuta**: tutte le misure sono sbagliate allo stesso modo. In generale non è verificabile dall'interno; si può scoprire **cambiando strumento o metodo** di misura e confrontando i risultati.

| | Errore casuale | Errore sistematico |
|---|---|---|
| Effetto | misure sparse in su e in giù | misure spostate tutte dalla stessa parte |
| Causa tipica | fluttuazioni, lettura | taratura sbagliata, metodo sbagliato |
| Come si riduce | ripetendo e facendo la media | cambiando strumento o metodo |
| Legato a | precisione | accuratezza |

Il risultato di una misura si esprime **sempre insieme al suo errore**. Ci sono due modi di stimarlo.

### Errore massimo
Se si fa **una sola misura**, oppure misure ripetute con uno strumento così poco sensibile da dare sempre lo stesso valore $x^*$, l'errore $\Delta x$ è l'**incertezza dello strumento** (la sua risoluzione). Si scrive $x = x^* \pm \Delta x$.

::: esempio
Lo spigolo di un libro misurato con un righello graduato ai centimetri:
$$L = L^* \pm \Delta L = 21 \pm 1\,\mathrm{cm}.$$
Si parla di **errore massimo** perché si è sicuri che la stessa misura, ripetuta nelle stesse condizioni anche con strumenti più sensibili, cadrà nell'intervallo $[x^* - \Delta x,\ x^* + \Delta x] = [20, 22]\,\mathrm{cm}$.
:::

### Errore statistico: media e deviazione standard
Se si misura $N$ volte la stessa grandezza con uno strumento **molto sensibile** (che vede le differenze tra una misura e l'altra), i risultati $x_1, x_2, \dots, x_N$ sono diversi. Il risultato si ricava dalla statistica delle misure:
- come valore si usa la **media**
$$\bar x = \frac{x_1 + x_2 + \dots + x_N}{N} = \frac1N\sum_{i=1}^{N} x_i$$
- come errore (**errore statistico**) si usa la **deviazione standard** $\sigma$, che misura quanto le misure sono **sparse** attorno alla media:
$$\sigma = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N}(x_i - \bar x)^2}$$

Il risultato si scrive
$$x = \bar x \pm \sigma$$
dove $\bar x$ e $\sigma$ hanno la stessa unità della grandezza misurata.

### La distribuzione gaussiana
Supponiamo di misurare la lunghezza di un soprammobile poco accessibile con un righello al millimetro, in modo instabile e veloce, moltissime volte. Riportando in un **istogramma** i valori ottenuti (in ascissa) e quante volte è uscito ciascuno (in ordinata), si ottiene una forma a campana: la **distribuzione normale** o **gaussiana**, di equazione
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\;e^{-\frac{(x - x_0)^2}{2\sigma^2}}$$
dove:
- $x_0$ = il **valore medio** delle misure (il centro della campana);
- $\sigma$ = la **deviazione standard** (la larghezza della campana).

$\sigma$ quantifica la **probabilità** di prevedere in quale intervallo cadrà una nuova misura:
- tra $x_0 - \sigma$ e $x_0 + \sigma$ cade circa il **68%** delle misure;
- tra $x_0 - 2\sigma$ e $x_0 + 2\sigma$ circa il **95%**;
- tra $x_0 - 3\sigma$ e $x_0 + 3\sigma$ circa il **99,7%** (cioè "almeno il 99%").

::: esempio
Misure con errori casuali, media $x^* = 16$ u.a. (unità arbitrarie) e $\sigma = 3$ u.a. In quale intervallo cade almeno il 99% dei risultati? Serve $\pm 3\sigma = \pm 9$:
$$[16 - 9,\ 16 + 9] = [7\ \text{u.a.},\ 25\ \text{u.a.}]$$
:::

### Errore relativo
L'**errore relativo** è il rapporto tra l'errore e il valore misurato:
$$\varepsilon = \frac{\Delta x}{|x^*|}$$
È un **numero puro** (le unità si semplificano), quindi si dà spesso in **percentuale**. "Una lunghezza nota con un'incertezza del 10%" vuol dire $\Delta x/x^* = 0{,}1$. L'errore relativo serve a **confrontare la precisione** di misure diverse, anche di grandezze diverse: è più precisa quella con errore relativo **minore**.

::: esempio
Quale misura è più precisa, $A = (20{,}0 \pm 0{,}5)\,\mathrm{cm}$ o $B = (10 \pm 1)\,\mathrm{mm}$?
Non basta confrontare gli errori assoluti (0,5 cm contro 1 mm): bisogna confrontare gli errori relativi.
- $\varepsilon_A = 0{,}5/20{,}0 = 0{,}025 = 2{,}5\%$;
- $\varepsilon_B = 1/10 = 0{,}1 = 10\%$.

È più precisa $A$, perché ha errore relativo minore (anche se il suo errore assoluto, 5 mm, è più grande).
:::

## Propagazione degli errori
Spesso una grandezza $z$ non si misura direttamente ma si **calcola** da altre grandezze misurate $x$ e $y$ (un'area da due lati, una velocità da spazio e tempo). L'errore su $z$ dipende dagli errori su $x$ e $y$: si dice che gli errori **si propagano**. Siano $x = x^* \pm \Delta x$ e $y = y^* \pm \Delta y$.

### Somma e differenza: si sommano gli errori assoluti
Se $z = x + y$:
- valore: $z^* = x^* + y^*$;
- errore: $\Delta z = \Delta x + \Delta y$.

**Perché.** Il valore più grande possibile di $z$ si ha quando entrambe le misure sono sbagliate per eccesso: $(x^* + \Delta x) + (y^* + \Delta y) = z^* + (\Delta x + \Delta y)$. Il più piccolo quando sono entrambe per difetto: $z^* - (\Delta x + \Delta y)$. L'incertezza è quindi $\Delta x + \Delta y$.

Se $z = x - y$:
- valore: $z^* = x^* - y^*$;
- errore: $\Delta z = \Delta x + \Delta y$, **ancora la somma**.

**Perché.** Il caso peggiore è $x$ sbagliato per eccesso e $y$ per difetto: $(x^* + \Delta x) - (y^* - \Delta y) = z^* + (\Delta x + \Delta y)$. Sottrarre le misure **non** sottrae gli errori: un'incertezza non può diminuire facendo un conto.

::: esempio
$x = 10 \pm 1$ e $y = 6 \pm 1$ danno $z = x - y = 4 \pm 2$. Notare che l'errore relativo di $z$ è $2/4 = 50\%$, molto più grande di quelli di $x$ (10%) e $y$ (17%): sottrarre due numeri vicini peggiora molto la precisione.
:::

**Caso statistico.** Se gli errori sono statistici (deviazioni standard di misure indipendenti), per somma e differenza non si sommano le $\sigma$ ma le **varianze** $\sigma^2$:
$$\sigma_z = \sqrt{\sigma_x^2 + \sigma_y^2}$$
Il risultato è più piccolo di $\sigma_x + \sigma_y$, perché è improbabile che due errori casuali indipendenti siano entrambi al massimo e nello stesso verso.

### Prodotto e quoziente: si sommano gli errori relativi
Se $z = x \cdot y$ oppure $z = x / y$ (con $x$, $y$ indipendenti):
$$\frac{\Delta z}{|z^*|} = \frac{\Delta x}{|x^*|} + \frac{\Delta y}{|y^*|}$$

**Perché (prodotto).** Nel caso peggiore:
$$(x^* + \Delta x)(y^* + \Delta y) = x^*y^* + y^*\Delta x + x^*\Delta y + \Delta x\,\Delta y$$
Il termine $\Delta x\,\Delta y$ è il prodotto di due numeri piccoli, quindi trascurabile. L'errore è $\Delta z \approx y^*\Delta x + x^*\Delta y$. Dividendo per $z^* = x^*y^*$:
$$\frac{\Delta z}{z^*} = \frac{y^*\Delta x}{x^*y^*} + \frac{x^*\Delta y}{x^*y^*} = \frac{\Delta x}{x^*} + \frac{\Delta y}{y^*}$$
Per il quoziente un conto analogo dà lo stesso risultato.

| Operazione | Valore | Errore |
|---|---|---|
| $z = x + y$ | $x^* + y^*$ | $\Delta z = \Delta x + \Delta y$ |
| $z = x - y$ | $x^* - y^*$ | $\Delta z = \Delta x + \Delta y$ |
| $z = x \cdot y$ | $x^* y^*$ | $\dfrac{\Delta z}{\lvert z\rvert} = \dfrac{\Delta x}{\lvert x\rvert} + \dfrac{\Delta y}{\lvert y\rvert}$ |
| $z = x / y$ | $x^* / y^*$ | $\dfrac{\Delta z}{\lvert z\rvert} = \dfrac{\Delta x}{\lvert x\rvert} + \dfrac{\Delta y}{\lvert y\rvert}$ |
| somma, errori statistici | $x^* + y^*$ | $\sigma_z = \sqrt{\sigma_x^2 + \sigma_y^2}$ |

::: esempio
- Se $\Delta x/x = 0{,}2$ e $\Delta y/y = 0{,}1$, per $z = x\,y$ l'errore relativo è $0{,}2 + 0{,}1 = 0{,}3$, cioè il 30%.
- $x = 10 \pm 1$ (10%) e $y = 20 \pm 1$ (5%): $z = x\,y = 200$ con errore relativo $10\% + 5\% = 15\%$, quindi $\Delta z = 0{,}15\cdot 200 = 30$ e $z = 200 \pm 30$.
:::

### Formula generale
Se $y$ dipende da $N$ grandezze indipendenti $x_1, \dots, x_N$ tramite una funzione $y = f(x_1, x_2, \dots, x_N)$, ogni errore pesa quanto la "sensibilità" di $f$ a quella variabile, cioè la sua derivata parziale:
$$\Delta y = \left|\frac{\partial f}{\partial x_1}\right|\Delta x_1 + \dots + \left|\frac{\partial f}{\partial x_N}\right|\Delta x_N \qquad \text{(errore massimo)}$$
$$\sigma_y = \sqrt{\left(\frac{\partial f}{\partial x_1}\right)^2\sigma_1^2 + \dots + \left(\frac{\partial f}{\partial x_N}\right)^2\sigma_N^2} \qquad \text{(errori statistici)}$$
Le regole della tabella sono casi particolari: per $f = x + y$ le derivate valgono 1 e si ritrova $\Delta z = \Delta x + \Delta y$.

::: attenzione
Errori tipici: dire che nella differenza gli errori si sottraggono (si sommano sempre); applicare la regola dei prodotti (errori relativi) a una somma o viceversa; pensare che nel prodotto gli errori si moltiplichino (gli errori non si moltiplicano mai: si sommano, assoluti o relativi a seconda dell'operazione).
:::

## Cifre significative e arrotondamenti
Poiché ogni grandezza è nota solo a meno di un errore, è inutile (e sbagliato) scrivere cifre più fini dell'errore. Il valore si scrive fino alla **cifra significativa** indicata dall'**ordine di grandezza dell'errore**.

Esempio: lo spessore di un libro misurato con uno strumento di risoluzione 1 mm dà $x = 24 \pm 1\,\mathrm{mm}$, anche se a occhio sembrerebbe "circa 24,5": il mezzo millimetro non è garantito dallo strumento.

**Regola di arrotondamento.**
- Se la prima cifra da eliminare è **minore di 5**, la cifra precedente resta com'è: $3{,}472 \to 3{,}47$.
- Se è **maggiore o uguale a 5**, la cifra precedente aumenta di uno: $5{,}738 \to 5{,}74$; $5{,}798 \to 5{,}80$; $5{,}7953 \to 5{,}80$.
- Caso particolare, quando la cifra da eliminare è **esattamente un 5 finale**: la dispensa usa la convenzione di arrotondare in modo che la cifra precedente risulti **pari**: $5{,}685 \to 5{,}68$ (l'8 è già pari, resta), $5{,}675 \to 5{,}68$ (il 7 è dispari, sale a 8). Così in media metà dei casi si arrotonda in su e metà in giù.

## Come si scrive una misura
La forma corretta è
$$x = (x^* \pm \Delta x)\ \text{unità di misura}$$
con queste regole:
1. l'**errore** si arrotonda a **una cifra significativa** (al massimo due, di solito se la prima è 1);
2. il **valore** si arrotonda alla **stessa posizione decimale** dell'errore (stesso ordine di grandezza dell'ultima cifra);
3. si scrive sempre l'**unità di misura**.

::: esempio
**L'armadio e il libro (dalla dispensa).** L'altezza di un armadio, misurata con un metro a nastro graduato ai centimetri, è $h = 225 \pm 1\,\mathrm{cm}$. Sopra c'è un libro di spessore $x = 2{,}4 \pm 0{,}1\,\mathrm{cm}$. L'altezza totale è una somma, quindi:
- valore: $H^* = 225 + 2{,}4 = 227{,}4\,\mathrm{cm}$;
- errore: $\Delta H = 1 + 0{,}1 = 1{,}1\,\mathrm{cm}$.

L'errore va arrotondato a una cifra: $1\,\mathrm{cm}$, cioè sui centimetri. Anche il valore va arrotondato ai centimetri: $227{,}4 \to 227$. Si scrive
$$H = 227 \pm 1\,\mathrm{cm}.$$
:::

::: esempio
Quale di questi risultati è scritto male?
- $13{,}4 \pm 0{,}2\,\mathrm{m/s}$: errore sui decimi, valore ai decimi. Corretto.
- $1{,}34 \pm 0{,}01\,\mathrm m$: errore sui centesimi, valore ai centesimi. Corretto.
- $143 \pm 30\,\mathrm{kg}$: l'errore è sulle **decine**, ma il valore ha anche le unità. **Scorretto**: va scritto $140 \pm 30\,\mathrm{kg}$.
:::

Negli esercizi i dati sono di solito dati **senza errore**: si sottintende che l'errore sia sull'ultima cifra scritta. I risultati vanno espressi con un numero di cifre coerente con quello dei dati (se i dati hanno 2-3 cifre significative, non ha senso dare un risultato con 8 cifre).

### Le variazioni: finale meno iniziale
Una **variazione** (differenza) di una grandezza si indica con $\Delta$ e si calcola sempre come **valore finale meno valore iniziale**: $\Delta T = T_{fin} - T_{in}$. Il segno ha un significato: positivo = la grandezza aumenta, negativo = diminuisce.

::: esempio
Alle 12 a Rimini ci sono $22{,}3\,°\mathrm C$, a Riccione $23{,}5\,°\mathrm C$. Andando **da Riccione a Rimini**: iniziale Riccione, finale Rimini.
$$\Delta T = 22{,}3 - 23{,}5 = -1{,}2\,°\mathrm C$$
Il segno meno dice che la temperatura scende. Andando al contrario, da Rimini a Riccione, sarebbe $+1{,}2\,°\mathrm C$.
:::

## Strumenti di misura
Uno **strumento di misura** è un dispositivo che stabilisce la corrispondenza tra una grandezza e la sua misura. A volte si confronta direttamente la grandezza con lo strumento (il righello accostato al libro). Più spesso lo strumento è un **trasduttore**: traduce la sollecitazione prodotta dalla grandezza nella variazione (**risposta**) di un'altra grandezza più facile da leggere. Nel vecchio termometro a mercurio, la variazione di temperatura diventa una variazione della **lunghezza** della colonna di liquido, letta su una scala graduata.

La **taratura** (o calibrazione) costruisce la scala dello strumento: si misura la risposta dello strumento a sollecitazioni di **valore noto**, ricavate dai campioni del SI.

### Parametri caratteristici di uno strumento
- **Portata** (o fondo scala): il **valore massimo** della grandezza che lo strumento può misurare.
- **Soglia**: il **valore minimo** che lo strumento riesce a rilevare.
- **Risoluzione**: la **minima variazione** della grandezza leggibile sullo strumento. È la suddivisione più fine della scala graduata o, nei display digitali, l'ultima cifra visualizzata. Fissa l'errore di lettura.
- **Sensibilità**: il rapporto tra la variazione della risposta $dr$ e la variazione della grandezza $dx$ che la provoca, punto per punto lungo la scala:
$$s = \left|\frac{dr}{dx}\right|$$
Una sensibilità alta vuol dire che una piccola variazione della grandezza produce una grande variazione della risposta. Nelle **scale lineari** la sensibilità è costante, $s = s^*$, ed è legata alla risoluzione: se $dr^*$ è la più piccola variazione di risposta che si riesce a leggere, la risoluzione è
$$dx^* = \frac{dr^*}{s^*}$$
Più è sensibile lo strumento, più fine è la risoluzione.
- **Prontezza**: la **rapidità** con cui lo strumento risponde a una variazione della grandezza (un termometro "pronto" si porta subito alla nuova temperatura).
- **Precisione**: la **ripetibilità** delle misure fatte nelle stesse condizioni. Una misura è precisa se i valori ottenuti sono poco sparsi attorno alla media. È legata agli **errori casuali**.
- **Accuratezza**: quanto i risultati sono **vicini al valore vero**, cioè quanto è piccolo un eventuale difetto **sistematico** (per esempio nella taratura). Una misura è accurata se è stato ridotto al minimo il contributo degli **errori sistematici**.

::: esempio
Immagina dei tiri a un bersaglio, dove il centro è il valore vero:
- tiri **raggruppati e al centro**: preciso e accurato;
- tiri **raggruppati ma lontani dal centro**: preciso ma non accurato (errore sistematico, come uno strumento tarato male);
- tiri **sparsi attorno al centro**: accurato in media ma poco preciso (grandi errori casuali);
- tiri sparsi e lontani: né preciso né accurato.
:::

::: attenzione
Precisione e accuratezza non sono sinonimi. Precisione ↔ errori **casuali** (dispersione); accuratezza ↔ errori **sistematici** (scostamento dal valore vero). Uno strumento può essere precisissimo e del tutto inaccurato.
:::

::: esame
Chiuse: unità SI di lunghezza, massa e tempo (metro, kilogrammo, secondo); riconoscere che centimetro, grammo, chilometro, ora non sono unità SI; il newton come unità della forza; grandezza derivata = definita a partire dalle fondamentali; individuare la grandezza fisica (la temperatura, non il termometro né la misura); conversioni (m/s → km/h moltiplicando per 3,6; micro $= 10^{-6}$; mega $= 10^{6}$); dimensioni della velocità $[L][T]^{-1}$; scalari e vettori; propagazione degli errori (somma e differenza: si sommano gli errori assoluti; prodotto: si sommano gli errori relativi); misure scritte male (valore non arrotondato come l'errore, unità inesistenti come "°N"); variazione = finale meno iniziale, con il segno.

Aperte:
- **Introdurre il SI**: sistema internazionale; 7 grandezze fondamentali con unità e simbolo (m, kg, s, A, K, mol, cd); campioni (accessibili e invariabili); grandezze derivate e loro unità (m/s, N = kg·m/s², J = N·m); prefissi.
- **Parametri degli strumenti**: portata, soglia, risoluzione, sensibilità ($|dr/dx|$), prontezza, precisione (errori casuali), accuratezza (errori sistematici); taratura.
- **Come si scrive una misura**: $x = (x^* \pm \Delta x)$ unità; $x^*$ = migliore stima (media); errore massimo o deviazione standard; errore a una cifra significativa, valore arrotondato alla stessa posizione; regola di arrotondamento; errore relativo per confrontare la precisione.
:::

::: sintesi
- Grandezza fisica = proprietà misurabile, con definizione operativa; $G = g\cdot u_G$; la misura è la migliore stima del valore vero.
- Fondamentali (SI): m, kg, s, A, K, mol, cd. Derivate = definite dalle fondamentali (N = kg·m/s², J = N·m, Hz = s⁻¹). cm, g, km, h non sono unità SI.
- Omogeneità dimensionale: $[v] = [L\,T^{-1}]$, $[a] = [L\,T^{-2}]$, $[F] = [M\,L\,T^{-2}]$.
- $1\,\mathrm{m/s} = 3{,}6\,\mathrm{km/h}$; micro $= 10^{-6}$, milli $= 10^{-3}$, mega $= 10^{6}$.
- Errore casuale (si riduce con la media, gaussiana: 68% entro $\sigma$, 95% entro $2\sigma$, 99,7% entro $3\sigma$) e sistematico (sempre nello stesso verso, si scopre cambiando metodo).
- Errore massimo = risoluzione; errore statistico = deviazione standard; errore relativo $\Delta x/x$ (adimensionale, confronta precisioni).
- Somme e differenze: $\Delta z = \Delta x + \Delta y$ (statistico: $\sqrt{\sigma_x^2 + \sigma_y^2}$). Prodotti e quozienti: errori relativi sommati.
- Misura = valore ± errore (1 cifra significativa) + unità, valore arrotondato come l'errore. Variazione = finale − iniziale.
- Strumento: portata, soglia, risoluzione, sensibilità $|dr/dx|$, prontezza; precisione ↔ casuali, accuratezza ↔ sistematici.
:::

=== 3 dispense
SLIDES: 03, 04
# Lezione 03 — Grandezze scalari e vettoriali

Molte grandezze della fisica non si descrivono con un solo numero: uno spostamento di 5 km non dice dove si è arrivati se non si sa **in che direzione** ci si è mossi. Per queste grandezze serve un oggetto matematico apposta, il **vettore**. Questa lezione spiega che cosa sono i vettori, come si scompongono in componenti, come si sommano e sottraggono (per componenti e graficamente) e come si moltiplicano per un numero. Nella lezione 4 si vedranno i due prodotti tra vettori (scalare e vettoriale). Tutto questo serve subito in cinematica: posizione, velocità e accelerazione sono vettori.

## Grandezze scalari e grandezze vettoriali
Una grandezza **scalare** è completamente descritta da **un numero** (con la sua unità di misura). Esempi: massa, tempo (intervallo di tempo), temperatura, volume, densità, energia, lavoro, carica elettrica.

Una grandezza **vettoriale** è descritta da un **vettore**, che contiene tre informazioni:
- **modulo** (o intensità): un numero **positivo o nullo** con la sua unità, che dice "quanto";
- **direzione**: la **retta** lungo cui agisce;
- **verso**: da quale delle due parti punta su quella retta.

Esempi: spostamento, velocità, accelerazione, forza, peso, campo elettrico, quantità di moto.

Geometricamente un vettore si disegna come una **freccia**: la retta su cui giace dà la direzione, la punta dà il verso, la lunghezza è proporzionale al modulo.

| | Scalare | Vettore |
|---|---|---|
| Descritto da | un numero con unità | modulo, direzione, verso |
| Somma | algebrica (come numeri) | per componenti o con il parallelogramma |
| Esempi | massa, tempo, temperatura, energia, lavoro | spostamento, velocità, accelerazione, forza, campo elettrico |

::: attenzione
- **Massa e peso** sono diversi. La massa è uno scalare (in kg). Il peso è una forza, quindi un vettore (in N), diretto verso il basso.
- Il **lavoro** è uno scalare, anche se nasce da due vettori (forza e spostamento): vedi il prodotto scalare.
- Modulo, direzione e verso sono le **caratteristiche** di un vettore. Lo **spostamento** invece è un **esempio** di vettore, non una sua caratteristica.
- L'**intervallo di tempo** è uno scalare: il tempo non ha direzione.
:::

### Notazione
- A stampa un vettore si scrive in **grassetto**, $\mathbf v$; a mano con una **freccia** sopra, $\vec v$.
- Il **modulo** si scrive $|\vec v|$ oppure semplicemente $v$, senza grassetto né freccia.

Scrivere $v$ quando si intende il vettore $\vec v$ è un errore comune: $v$ è solo un numero.

### Vettori applicati e liberi
Un vettore è definito da modulo, direzione e verso, non dalla posizione in cui lo si disegna: si può **traslare** rigidamente (senza ruotarlo né allungarlo) e resta lo stesso vettore. Quando lo si fa partire da un punto $P$ si dice che il vettore è **applicato** in $P$. Questa libertà è quella che si usa per sommare i vettori con il metodo punta-coda.

## Componenti di un vettore
Si sceglie un sistema di assi cartesiani ortogonali (perpendicolari tra loro). Si mette la coda del vettore nell'origine: le coordinate della punta sono le **componenti** del vettore,
$$\vec v = (v_x,\ v_y,\ v_z).$$
Le componenti sono le **proiezioni** del vettore sugli assi. Possono essere positive, negative o nulle (il segno dice se la proiezione punta nel verso positivo o negativo dell'asse).

### Nel piano: il triangolo rettangolo
Nel piano $xy$ il vettore e le sue due componenti formano un **triangolo rettangolo**: il vettore è l'ipotenusa, le componenti sono i cateti. Se $\theta$ è l'angolo tra il vettore e il semiasse positivo delle $x$, per la trigonometria dei triangoli rettangoli (cateto = ipotenusa × coseno dell'angolo adiacente, oppure × seno dell'angolo opposto):
$$v_x = v\cos\theta \qquad v_y = v\sin\theta$$
e per il **teorema di Pitagora**:
$$v = \sqrt{v_x^2 + v_y^2}$$
dove:
- $v$ = modulo del vettore (stessa unità del vettore, per esempio m);
- $v_x, v_y$ = componenti lungo $x$ e $y$ (stessa unità);
- $\theta$ = angolo tra il vettore e l'asse $x$, misurato in senso antiorario.

**Dalle componenti all'angolo.** Dividendo le due relazioni, $v_y/v_x = \sin\theta/\cos\theta$:
$$\tan\theta = \frac{v_y}{v_x}$$
Attenzione: la tangente ha lo stesso valore per angoli che differiscono di $180°$. Per trovare l'angolo giusto si guardano i **segni** delle componenti, cioè il quadrante in cui cade il vettore.

### Nello spazio
Nello spazio si aggiunge la terza componente $v_z$ e Pitagora si applica due volte (prima nel piano $xy$, poi con l'asse $z$):
$$v = \sqrt{v_x^2 + v_y^2 + v_z^2}$$

::: esempio
**Dalle componenti al modulo.**
- $V_x = 3$, $V_y = 4$: $V = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
- $\vec v = (6, 3)$: $v = \sqrt{36 + 9} = \sqrt{45} \approx 6{,}7$.
:::

::: esempio
**Dal modulo e angolo alle componenti** (dalla dispensa). Un vettore nel piano $xy$ ha modulo $a = 10\,\mathrm m$ e forma un angolo $\theta = 30°$ con l'asse $x$.
$$a_x = 10\cos 30° = 10 \cdot 0{,}866 = 8{,}66\,\mathrm m \qquad a_y = 10\sin 30° = 10\cdot 0{,}5 = 5\,\mathrm m$$
Controllo: $\sqrt{8{,}66^2 + 5^2} = \sqrt{75 + 25} = 10\,\mathrm m$.
:::

## Vettore nullo e vettore opposto
- Il **vettore nullo** è $\vec 0 = (0, 0, 0)$: ha modulo zero e nessuna direzione.
- L'**opposto** di $\vec v = (v_x, v_y, v_z)$ è il vettore con **stesso modulo e stessa direzione ma verso opposto**:
$$-\vec v = (-v_x,\ -v_y,\ -v_z)$$

## Somma di vettori
### Per componenti
La somma di due vettori $\vec v = (v_x, v_y, v_z)$ e $\vec w = (w_x, w_y, w_z)$ è il vettore che ha per componenti la **somma delle componenti corrispondenti**:
$$\vec z = \vec v + \vec w = (v_x + w_x,\ v_y + w_y,\ v_z + w_z)$$
Le componenti si sommano come numeri (con il loro segno); i **moduli invece no**.

### Metodo grafico punta-coda
Si trasla rigidamente il secondo vettore finché la sua **coda** (la base) coincide con la **punta** del primo. Il vettore somma va dalla **coda del primo** alla **punta del secondo**. È il metodo naturale per spostamenti **consecutivi**: prima vado da A a B, poi da B a C; lo spostamento totale va da A a C.

Il metodo si estende a più di due vettori: si applica ogni vettore alla punta del precedente; la somma va dalla coda del primo alla punta dell'ultimo.

### Regola del parallelogramma
Si applicano i due vettori nello **stesso punto** (origine comune) e si costruisce il parallelogramma che ha i due vettori come lati. La somma è la **diagonale che parte dall'origine comune**. È il metodo naturale per due spostamenti (o due forze) con origine in comune. Dà lo stesso risultato del punta-coda: il secondo lato del parallelogramma è proprio il secondo vettore traslato sulla punta del primo.

### Proprietà della somma
- **Commutativa**: $\vec a + \vec b = \vec b + \vec a$ (le due diagonali percorse in ordine diverso coincidono).
- **Associativa**: $\vec a + (\vec b + \vec c) = (\vec a + \vec b) + \vec c$.
- Il vettore nullo non cambia la somma: $\vec a + \vec 0 = \vec a$; e $\vec a + (-\vec a) = \vec 0$.

### Il modulo della somma
Il modulo della somma **non** è la somma dei moduli. Se $\vec a$ e $\vec b$ formano un angolo $\varphi$, il **teorema di Carnot** (del coseno) applicato al parallelogramma dà:
$$|\vec a + \vec b| = \sqrt{a^2 + b^2 + 2ab\cos\varphi}$$
Casi particolari:
- stesso verso ($\varphi = 0°$, $\cos\varphi = 1$): $|\vec a + \vec b| = a + b$ (massimo);
- versi opposti ($\varphi = 180°$, $\cos\varphi = -1$): $|\vec a + \vec b| = |a - b|$ (minimo);
- perpendicolari ($\varphi = 90°$, $\cos\varphi = 0$): $|\vec a + \vec b| = \sqrt{a^2 + b^2}$ (Pitagora).

In generale $|a - b| \le |\vec a + \vec b| \le a + b$.

::: esempio
Sul piano faccio uno spostamento di 4 m da A a B e poi uno di 3 m da B a C. Quanto vale lo spostamento totale da A a C?
Dipende dall'angolo tra i due spostamenti, che non è dato:
- stessa direzione e verso: $4 + 3 = 7\,\mathrm m$;
- verso opposto: $4 - 3 = 1\,\mathrm m$;
- perpendicolari: $\sqrt{16 + 9} = 5\,\mathrm m$;
- in generale qualsiasi valore tra 1 m e 7 m.

**Senza conoscere le direzioni non si può rispondere**: non ci sono elementi sufficienti.
:::

## Differenza di vettori
La differenza $\vec v - \vec w$ è la somma del primo vettore con l'**opposto** del secondo:
$$\vec z = \vec v - \vec w = \vec v + (-\vec w) = (v_x - w_x,\ v_y - w_y,\ v_z - w_z)$$
Graficamente, nel parallelogramma costruito su $\vec v$ e $\vec w$ con l'origine comune, la differenza è **l'altra diagonale**, quella che **non** passa per l'origine: va dalla punta di $\vec w$ alla punta di $\vec v$. Questa diagonale è uguale (in modulo, direzione e verso) al vettore differenza costruito nell'origine; è solo applicata in un punto diverso, la punta del vettore da sottrarre.

::: esempio
**Somma per componenti (esercizio della dispensa).** $\vec a$ ha componenti $a_x = -4\,\mathrm m$, $a_y = -7\,\mathrm m$; $\vec b$ ha $b_x = 3\,\mathrm m$, $b_y = -2\,\mathrm m$. Trovare modulo, direzione e verso di $\vec a$, $\vec b$ e $\vec a + \vec b$.

- $\vec a$: modulo $\sqrt{(-4)^2 + (-7)^2} = \sqrt{16 + 49} = \sqrt{65} \approx 8{,}06\,\mathrm m$. Entrambe le componenti sono negative: il vettore è nel **terzo quadrante**. $\tan\alpha = 7/4 = 1{,}75 \Rightarrow \alpha \approx 60{,}3°$ sotto il semiasse $x$ negativo, cioè $\theta \approx 180° + 60{,}3° = 240{,}3°$ dall'asse $x$ positivo.
- $\vec b$: modulo $\sqrt{9 + 4} = \sqrt{13} \approx 3{,}61\,\mathrm m$. $b_x > 0$, $b_y < 0$: **quarto quadrante**. $\tan\beta = 2/3 \Rightarrow \beta \approx 33{,}7°$ sotto l'asse $x$, cioè $\theta \approx -33{,}7°$.
- Somma: $s_x = a_x + b_x = -4 + 3 = -1\,\mathrm m$; $s_y = a_y + b_y = -7 + (-2) = -9\,\mathrm m$. Modulo $\sqrt{1 + 81} = \sqrt{82} \approx 9{,}06\,\mathrm m$. Terzo quadrante, $\tan = 9/1 \Rightarrow 83{,}7°$ sotto il semiasse $x$ negativo, cioè $\theta \approx 263{,}7°$ (quasi verso il basso).

Notare: $8{,}06 + 3{,}61 = 11{,}67\,\mathrm m$, diverso da $9{,}06\,\mathrm m$. I moduli non si sommano.
:::

::: esempio
**Modulo della somma nello spazio.** $\vec v = (3, 6, 1)$ e $\vec w = (1, 1, -1)$. Allora $\vec z = \vec v + \vec w = (3+1,\ 6+1,\ 1-1) = (4, 7, 0)$ e
$$z = \sqrt{16 + 49 + 0} = \sqrt{65} \approx 8{,}1.$$
:::

## Prodotto di un vettore per un numero
Si può sempre moltiplicare un vettore per un numero (uno scalare) $k$: il risultato è **un vettore** $k\vec v$ con
- **modulo** moltiplicato per $|k|$: $|k\vec v| = |k|\,v$;
- **direzione** invariata;
- **verso** uguale se $k > 0$, **opposto** se $k < 0$ (se $k = 0$ si ottiene il vettore nullo).

In componenti si moltiplica ogni componente per $k$:
$$k\vec v = (k v_x,\ k v_y,\ k v_z)$$
La **divisione** per un numero $c \ne 0$ è la moltiplicazione per il suo inverso: $\vec v / c = (1/c)\,\vec v$.

Lo stesso vale per una **grandezza scalare fisica** (con unità) per una grandezza vettoriale: il risultato è una grandezza vettoriale, con unità prodotto delle unità. È così che sono costruite molte leggi:
- seconda legge di Newton: $\vec F = m\,\vec a$ (massa scalare × accelerazione vettore = forza vettore, in N);
- quantità di moto: $\vec p = m\,\vec v$;
- forza elettrica: $\vec F = q\,\vec E$.

::: esempio
- Se $|\vec v| = 5$, il vettore $\vec w = 3\vec v$ ha modulo $3\cdot 5 = 15$, stessa direzione e stesso verso.
- $-2\,(1, -3, 0) = (-2, 6, 0)$: modulo doppio, verso opposto.
- Una massa di $2\,\mathrm{kg}$ con accelerazione $\vec a = (3, 0, -1)\,\mathrm{m/s^2}$ subisce una forza $\vec F = 2\vec a = (6, 0, -2)\,\mathrm N$, parallela all'accelerazione.
:::

## Prodotti tra due vettori: anticipazione ed esempi in fisica
Tra due vettori si definiscono **due prodotti diversi**, chiamati con il nome del tipo di risultato (dettagli, proprietà e calcolo nella lezione 4):
- **prodotto scalare** $\vec a \cdot \vec b = ab\cos\theta$: il risultato è **un numero** (uno scalare). È nullo se i vettori sono perpendicolari, massimo se sono paralleli.
- **prodotto vettoriale** $\vec a \times \vec b$: il risultato è **un vettore** perpendicolare a entrambi, di modulo $ab\sin\theta$, con verso dato dalla regola della mano destra. È nullo se i vettori sono paralleli, massimo se sono perpendicolari.

Qui $\theta$ è l'angolo tra i due vettori.

### Esempi di prodotto scalare in fisica
- **Lavoro** di una forza costante lungo uno spostamento: $L = \vec F \cdot \vec s = F\,s\cos\theta$ (in J). Conta solo la parte della forza lungo lo spostamento: una forza perpendicolare allo spostamento non compie lavoro.
- **Potenza**: $P = \vec F \cdot \vec v$ (in W).
- **Flusso** di un campo attraverso una superficie: $\Phi = \vec E \cdot \vec S$.

### Esempi di prodotto vettoriale in fisica
- **Momento di una forza** rispetto a un punto: $\vec M = \vec r \times \vec F$ (in N·m); è perpendicolare al piano di $\vec r$ e $\vec F$ e indica l'asse attorno a cui la forza tende a far ruotare.
- **Momento angolare**: $\vec L = \vec r \times m\vec v$.
- **Velocità nel moto circolare**: $\vec v = \vec\omega \times \vec r$.
- **Forza di Lorentz** su una carica in moto in un campo magnetico: $\vec F = q\,\vec v \times \vec B$; è perpendicolare sia alla velocità sia al campo.

::: esempio
Una forza di $10\,\mathrm N$ tira una cassa lungo un pavimento per $3\,\mathrm m$, inclinata di $60°$ rispetto allo spostamento. Il lavoro è $L = F\,s\cos 60° = 10\cdot 3\cdot 0{,}5 = 15\,\mathrm J$: un numero, senza direzione. Se la forza fosse verticale ($90°$), il lavoro sarebbe zero.
:::

::: esame
Chiuse: le caratteristiche di un vettore (modulo, direzione, verso; lo spostamento non è una caratteristica); riconoscere scalari (massa, lavoro, temperatura, tempo) e vettori (velocità, spostamento, forza, campo elettrico); modulo da componenti con Pitagora ($3, 4 \to 5$); scalare × vettore si può fare e dà un vettore; prodotto scalare di vettori perpendicolari = 0; spostamenti successivi di cui non si conosce la direzione: non si può dire quanto vale lo spostamento totale.

Aperte:
- **Esempi di prodotto scalare e vettoriale in fisica**: dare le definizioni ($ab\cos\theta$, scalare; $ab\sin\theta$, vettore perpendicolare, mano destra) e gli esempi: lavoro $\vec F\cdot\vec s$, potenza $\vec F\cdot\vec v$, flusso; momento della forza $\vec r\times\vec F$, momento angolare $\vec r\times m\vec v$, forza di Lorentz $q\,\vec v\times\vec B$.
- **Grandezza vettoriale e differenze dagli scalari**: lo scalare è un numero con unità; il vettore ha modulo, direzione, verso; esempi dei due tipi; i vettori si sommano per componenti o con il parallelogramma (non sommando i moduli); componenti; per i vettori esistono prodotto per uno scalare, prodotto scalare e prodotto vettoriale.
:::

::: sintesi
- Scalare = numero con unità; vettore = modulo (≥ 0), direzione, verso. Notazione $\vec v$ o $\mathbf v$; modulo $v = |\vec v|$.
- Componenti: $v_x = v\cos\theta$, $v_y = v\sin\theta$; $v = \sqrt{v_x^2 + v_y^2 (+ v_z^2)}$; $\tan\theta = v_y/v_x$ (controllare il quadrante).
- Somma: per componenti; graficamente punta-coda o diagonale del parallelogramma. Commutativa e associativa. $|\vec a + \vec b| = \sqrt{a^2 + b^2 + 2ab\cos\varphi}$, tra $|a-b|$ e $a+b$.
- Opposto $-\vec v = (-v_x, -v_y, -v_z)$; differenza = somma con l'opposto = l'altra diagonale.
- $k\vec v$: modulo × $|k|$, stessa direzione, verso invertito se $k < 0$; scalare fisico × vettore = vettore ($\vec F = m\vec a$).
- Prodotto scalare → numero (lavoro, potenza, flusso); prodotto vettoriale → vettore (momento, momento angolare, forza di Lorentz).
:::

=== 4 dispense
SLIDES: 04
# Lezione 04 — Operazioni con i vettori: versori, prodotto scalare e prodotto vettoriale

Nella lezione 3 abbiamo sommato i vettori e li abbiamo moltiplicati per un numero. Qui introduciamo i **versori**, che permettono di scrivere ogni vettore come combinazione dei tre assi, e i due **prodotti tra vettori**: il **prodotto scalare**, che dà un numero, e il **prodotto vettoriale**, che dà un vettore. Sono strumenti che torneranno in tutto il corso: lavoro e potenza (prodotto scalare), momento di una forza, momento angolare, moto circolare e forza di Lorentz (prodotto vettoriale).

## Prodotto e divisione per uno scalare (richiamo)
Il prodotto di un vettore per uno scalare $c$ è il vettore che ha per componenti quelle di partenza moltiplicate per $c$:
$$\vec w = c\,\vec v = (c\,v_x,\ c\,v_y,\ c\,v_z)$$
Il modulo è moltiplicato per $|c|$, la direzione non cambia, il verso si inverte se $c < 0$. La divisione per uno scalare è il prodotto per il suo inverso: $\vec w = \vec v / c = (1/c)\,\vec v$.

## Versori
Un **versore** è un vettore di **modulo 1**. Non porta informazione sull'intensità: indica solo una **direzione e un verso**. Si indica con il cappello: $\hat u$.

Da qualunque vettore non nullo $\vec w$ si ottiene il versore con la sua stessa direzione e verso **dividendo il vettore per il suo modulo**:
$$\hat w = \frac{\vec w}{|\vec w|}$$
Infatti il modulo di $\hat w$ è $|\vec w|/|\vec w| = 1$. Al contrario, ogni vettore si scrive come modulo × versore: $\vec w = w\,\hat w$.

I versori degli assi cartesiani sono
$$\hat i = (1, 0, 0) \qquad \hat j = (0, 1, 0) \qquad \hat k = (0, 0, 1)$$
Ogni vettore si scrive come somma delle sue componenti lungo gli assi, ciascuna moltiplicata per il versore dell'asse:
$$\vec v = v_x\,\hat i + v_y\,\hat j + v_z\,\hat k$$
Questa scrittura è comoda perché permette di fare i conti con le normali regole dell'algebra (proprietà distributiva), trattando i versori come "lettere".

::: esempio
$\vec w = (3, 0, 4)$ ha modulo $\sqrt{9 + 0 + 16} = 5$. Il suo versore è $\hat w = (3/5,\ 0,\ 4/5) = (0{,}6;\ 0;\ 0{,}8)$, e infatti $\sqrt{0{,}36 + 0{,}64} = 1$.
:::

## Il prodotto scalare
### Definizione
Il **prodotto scalare** di due vettori $\vec v$ e $\vec w$ si indica con un puntino e dà **uno scalare** (un numero):
$$\vec v \cdot \vec w = v\,w\cos\theta$$
dove:
- $v, w$ = moduli dei due vettori;
- $\theta$ = angolo compreso tra i due vettori (applicati nello stesso punto), tra $0°$ e $180°$.

### Significato geometrico
$w\cos\theta$ è la **proiezione** di $\vec w$ sulla direzione di $\vec v$. Quindi il prodotto scalare è "il modulo di uno per la proiezione dell'altro su di esso": misura **quanto i due vettori vanno nella stessa direzione**.
- $0° \le \theta < 90°$: $\cos\theta > 0$, prodotto **positivo** (vettori "concordi");
- $\theta = 90°$: $\cos\theta = 0$, prodotto **nullo**;
- $90° < \theta \le 180°$: $\cos\theta < 0$, prodotto **negativo**.

### Casi notevoli
- **Vettori perpendicolari** (ortogonali, $\theta = 90°$): $\vec v \cdot \vec w = 0$. Vale anche il contrario: se due vettori non nulli hanno prodotto scalare zero, sono perpendicolari. Il prodotto è nullo anche se uno dei due vettori è nullo.
- **Vettori paralleli e concordi** ($\theta = 0°$): $\vec v \cdot \vec w = vw$, il valore massimo possibile.
- **Paralleli e discordi** ($\theta = 180°$): $\vec v \cdot \vec w = -vw$.
- **Un vettore con se stesso** ($\theta = 0$): $\vec v \cdot \vec v = v^2 = |\vec v|^2$. Il prodotto scalare è **definito positivo**: $\vec v\cdot\vec v \ge 0$, e vale zero solo se $\vec v = \vec 0$.

### Prodotti scalari tra i versori degli assi
Ogni versore ha modulo 1 ed è parallelo a se stesso, quindi $\hat i\cdot\hat i = 1\cdot 1\cdot\cos 0° = 1$. Due versori diversi sono perpendicolari, quindi il loro prodotto è zero:
$$\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1 \qquad \hat i\cdot\hat j = \hat i\cdot\hat k = \hat j\cdot\hat k = 0$$

### Proprietà
- **Commutativa**: $\vec v \cdot \vec w = \vec w \cdot \vec v$ (l'angolo tra i due è lo stesso).
- **Distributiva**: $\vec u \cdot (\vec v + \vec w) = \vec u \cdot \vec v + \vec u \cdot \vec w$.
- **Omogeneità**: per ogni numero reale $s$, $(s\vec v)\cdot\vec w = \vec v\cdot(s\vec w) = s\,(\vec v\cdot\vec w)$.

### Prodotto scalare in componenti (derivazione)
Si scrivono i due vettori con i versori e si moltiplica tutto per tutto (proprietà distributiva):
$$\vec v\cdot\vec w = (v_x\hat i + v_y\hat j + v_z\hat k)\cdot(w_x\hat i + w_y\hat j + w_z\hat k)$$
Si ottengono nove termini del tipo $v_a w_b\,(\hat a\cdot\hat b)$. I sei termini con versori diversi contengono $\hat i\cdot\hat j = 0$ ecc. e spariscono; i tre con versori uguali contengono $\hat i\cdot\hat i = 1$ ecc. e restano:
$$\vec v\cdot\vec w = v_x w_x + v_y w_y + v_z w_z$$
Il prodotto scalare è la **somma dei prodotti delle componenti corrispondenti**. Come caso particolare, $\vec v\cdot\vec v = v_x^2 + v_y^2 + v_z^2 = v^2$: si ritrova Pitagora.

### L'angolo tra due vettori
Uguagliando le due espressioni, $vw\cos\theta = v_xw_x + v_yw_y + v_zw_z$, si trova l'angolo (convesso, non orientato) tra due vettori dati per componenti:
$$\cos\theta = \frac{\vec v\cdot\vec w}{v\,w} \qquad\Longrightarrow\qquad \theta = \arccos\frac{\vec v\cdot\vec w}{|\vec v|\,|\vec w|}$$

::: esempio
**Angolo tra due vettori (dalla dispensa).** $\vec v = (4, -3)$ e $\vec w = (5, 12)$.
1. Prodotto scalare per componenti: $\vec v\cdot\vec w = 4\cdot 5 + (-3)\cdot 12 = 20 - 36 = -16$.
2. Moduli: $v = \sqrt{16 + 9} = 5$; $w = \sqrt{25 + 144} = 13$.
3. $\cos\theta = \dfrac{-16}{5\cdot 13} = -\dfrac{16}{65} \approx -0{,}246$, quindi $\theta \approx 104°$.

Il prodotto negativo dice subito che l'angolo è ottuso.
:::

::: esempio
**Paniere: prodotto scalare e lunghezze.** $\vec v = (0, 2, 4)$ e $\vec w = (2, 0, 4)$.
- Prodotto scalare: $0\cdot 2 + 2\cdot 0 + 4\cdot 4 = 16$. Non è zero, quindi **non** sono ortogonali.
- Moduli: $v = \sqrt{0 + 4 + 16} = \sqrt{20}$; $w = \sqrt{4 + 0 + 16} = \sqrt{20}$. **Hanno la stessa lunghezza.**
- Non sono paralleli: le componenti non sono proporzionali (una ha $x = 0$, l'altra $y = 0$). L'angolo: $\cos\theta = 16/20 = 0{,}8$, $\theta \approx 36{,}9°$.
:::

::: esempio
**Paniere: ortogonalità.** $\vec v = (1, 2, 4)$ e $\vec w = (6, 3, -3)$:
$$\vec v\cdot\vec w = 1\cdot 6 + 2\cdot 3 + 4\cdot(-3) = 6 + 6 - 12 = 0$$
Il prodotto scalare è nullo e i vettori non sono nulli: **sono ortogonali**. (I moduli sono $\sqrt{21}$ e $\sqrt{54}$, diversi.)
:::

::: esempio
**Per quali $k$ due vettori sono ortogonali?** (dalla dispensa) $\vec v = (1,\ k-2,\ 3)$ e $\vec w = (k,\ 2,\ 5)$. Si impone prodotto scalare nullo:
$$1\cdot k + (k - 2)\cdot 2 + 3\cdot 5 = k + 2k - 4 + 15 = 3k + 11 = 0 \;\Rightarrow\; k = -\frac{11}{3}$$
:::

## Il prodotto vettoriale
### Definizione
Il **prodotto vettoriale** di $\vec v$ e $\vec w$ si indica con $\vec v \times \vec w$ (oppure $\vec v \wedge \vec w$) e dà **un vettore** così definito:
- **modulo**: $|\vec v \times \vec w| = v\,w\sin\theta$, con $\theta$ angolo compreso tra i due vettori, in $[0, \pi]$ (quindi $\sin\theta \ge 0$);
- **direzione**: **perpendicolare al piano** individuato dai due vettori (quindi perpendicolare a entrambi);
- **verso**: quello in cui **avanza una vite destrorsa** che ruota come dovrebbe ruotare $\vec v$ per sovrapporsi a $\vec w$ per la via più breve. Equivalente: **regola della mano destra**: le dita della mano destra girano da $\vec v$ verso $\vec w$, il pollice indica il verso del prodotto.

### Significato geometrico del modulo
Nel parallelogramma costruito su $\vec v$ e $\vec w$, la base è $v$ e l'altezza è $w\sin\theta$. Quindi
$$|\vec v\times\vec w| = v\,(w\sin\theta) = \text{area del parallelogramma costruito sui due vettori.}$$

### Casi notevoli
- **Vettori paralleli** (o antiparalleli, $\theta = 0°$ o $180°$): $\sin\theta = 0$, il prodotto è il **vettore nullo**. In particolare $\vec v \times \vec v = \vec 0$. Il parallelogramma è "schiacciato" e ha area zero.
- **Vettori perpendicolari** ($\theta = 90°$): modulo **massimo**, $vw$.
- Se due vettori non nulli hanno $\vec v \times \vec w = \vec 0$, allora sono **paralleli**.

### Proprietà
- **Anticommutativa**: scambiare l'ordine inverte il verso di rotazione della vite, quindi il verso del risultato; il modulo resta uguale:
$$\vec v \times \vec w = -\,\vec w \times \vec v$$
Il prodotto vettoriale **non** è commutativo: l'ordine conta.
- **Distributiva**: $\vec v \times (\vec w + \vec z) = \vec v \times \vec w + \vec v \times \vec z$.
- Omogeneità: $(s\vec v)\times\vec w = s\,(\vec v\times\vec w)$.

### Prodotti vettoriali tra i versori degli assi
Con la mano destra (sistema di assi destrorso):
$$\hat i\times\hat j = \hat k \qquad \hat j\times\hat k = \hat i \qquad \hat k\times\hat i = \hat j$$
e, per l'anticommutatività, in ordine inverso cambia il segno:
$$\hat j\times\hat i = -\hat k \qquad \hat k\times\hat j = -\hat i \qquad \hat i\times\hat k = -\hat j$$
Infine $\hat i\times\hat i = \hat j\times\hat j = \hat k\times\hat k = \vec 0$.

Regola pratica: nell'ordine **ciclico** $i \to j \to k \to i$ il segno è più; contro l'ordine ciclico è meno.

### Prodotto vettoriale in componenti (derivazione)
Si scrivono i vettori con i versori e si usa la proprietà distributiva:
$$\vec v\times\vec w = (v_x\hat i + v_y\hat j + v_z\hat k)\times(w_x\hat i + w_y\hat j + w_z\hat k)$$
Dei nove termini, i tre con versori uguali ($\hat i\times\hat i$, ...) sono nulli. Restano:
$$v_xw_y\,(\hat i\times\hat j) + v_xw_z\,(\hat i\times\hat k) + v_yw_x\,(\hat j\times\hat i) + v_yw_z\,(\hat j\times\hat k) + v_zw_x\,(\hat k\times\hat i) + v_zw_y\,(\hat k\times\hat j)$$
Sostituendo la tabella dei versori:
$$= v_xw_y\,\hat k - v_xw_z\,\hat j - v_yw_x\,\hat k + v_yw_z\,\hat i + v_zw_x\,\hat j - v_zw_y\,\hat i$$
e raccogliendo per versore:
$$\vec v\times\vec w = (v_y w_z - v_z w_y)\,\hat i + (v_z w_x - v_x w_z)\,\hat j + (v_x w_y - v_y w_x)\,\hat k$$

**Promemoria con il determinante.** La stessa formula si ottiene sviluppando il determinante con prima riga i versori, seconda le componenti del primo vettore, terza quelle del secondo:
$$\vec v\times\vec w = \begin{vmatrix} \hat i & \hat j & \hat k \\ v_x & v_y & v_z \\ w_x & w_y & w_z \end{vmatrix}$$
Per la componente $\hat i$ si copre la colonna di $\hat i$ e si fa "diagonale principale meno diagonale secondaria" del quadratino rimasto: $v_yw_z - v_zw_y$. Per $\hat j$ si fa lo stesso **cambiando segno**: $-(v_xw_z - v_zw_x) = v_zw_x - v_xw_z$. Per $\hat k$: $v_xw_y - v_yw_x$.

::: esempio
**Paniere: direzione del prodotto vettoriale.** $\vec v = (0, 1, 0) = \hat j$ e $\vec w = (2, 0, 0) = 2\hat i$.
- Con i versori: $\vec v\times\vec w = \hat j \times 2\hat i = 2\,(\hat j\times\hat i) = 2\,(-\hat k) = -2\hat k$.
- Con la formula: componente $x$: $v_yw_z - v_zw_y = 1\cdot 0 - 0\cdot 0 = 0$; componente $y$: $v_zw_x - v_xw_z = 0\cdot 2 - 0\cdot 0 = 0$; componente $z$: $v_xw_y - v_yw_x = 0\cdot 0 - 1\cdot 2 = -2$. Risultato $(0, 0, -2)$.

Il prodotto è **diretto lungo l'asse $z$** (nel verso negativo), perpendicolare al piano $xy$ in cui stanno i due vettori. Modulo $2 = 1\cdot 2\cdot\sin 90°$.
:::

::: esempio
**Un vettore ortogonale a due vettori dati** (dalla dispensa). Trovare $\vec u$ perpendicolare sia a $\vec v = (1, 0, -1)$ sia a $\vec w = (0, 2, 1)$.
Il prodotto vettoriale è per definizione perpendicolare al piano dei due vettori, quindi $\vec u = \vec v\times\vec w$ va bene:
- $u_x = v_yw_z - v_zw_y = 0\cdot 1 - (-1)\cdot 2 = 2$;
- $u_y = v_zw_x - v_xw_z = (-1)\cdot 0 - 1\cdot 1 = -1$;
- $u_z = v_xw_y - v_yw_x = 1\cdot 2 - 0\cdot 0 = 2$.

$\vec u = (2, -1, 2)$. **Controllo** con il prodotto scalare: $\vec u\cdot\vec v = 2 + 0 - 2 = 0$ e $\vec u\cdot\vec w = 0 - 2 + 2 = 0$. Ortogonale a entrambi.
:::

::: esempio
**Quesiti della dispensa.**
- Come si trova l'angolo tra $\vec v$ e $\vec w$ date le componenti? $\theta = \arccos\big(\vec v\cdot\vec w / (|\vec v|\,|\vec w|)\big)$, con il prodotto scalare calcolato per componenti.
- Se $|\vec v| = 5$, quanto vale il modulo di $\vec w = 3\vec v$? $|\vec w| = 3\cdot 5 = 15$.
- Se $\vec v$ e $\vec w$ non sono nulli e $\vec v\times\vec w = \vec 0$, quanto vale l'angolo tra loro? $\sin\theta = 0$, quindi $\theta = 0°$ o $180°$: i vettori sono **paralleli**.
:::

## Confronto tra i due prodotti
| | Prodotto scalare $\vec v\cdot\vec w$ | Prodotto vettoriale $\vec v\times\vec w$ |
|---|---|---|
| Risultato | un numero (scalare) | un vettore |
| Modulo | $vw\cos\theta$ (può essere negativo) | $vw\sin\theta$ (≥ 0) |
| Direzione | — | perpendicolare a entrambi, mano destra |
| Nullo se | perpendicolari | paralleli |
| Massimo se | paralleli | perpendicolari |
| Ordine | commutativo | anticommutativo |
| In componenti | $v_xw_x + v_yw_y + v_zw_z$ | determinante |
| Versori | $\hat i\cdot\hat i = 1$, $\hat i\cdot\hat j = 0$ | $\hat i\times\hat i = \vec 0$, $\hat i\times\hat j = \hat k$ |
| Esempi | lavoro, potenza, flusso | momento, momento angolare, Lorentz |

::: attenzione
- Non confondere i due prodotti: per vettori **perpendicolari** è nullo il prodotto **scalare**; per vettori **paralleli** è nullo il prodotto **vettoriale**.
- Il prodotto scalare è un numero: non ha senso dire che "è diretto lungo z". Il prodotto vettoriale è un vettore: ha senso chiederne la direzione.
- Nel prodotto vettoriale l'ordine conta: $\hat j\times\hat i = -\hat k$, non $+\hat k$.
- Avere prodotto scalare diverso da zero non vuol dire essere paralleli: vuol dire solo non essere perpendicolari.
:::

::: esame
Le domande del paniere sono esercizi con vettori dati per componenti nello spazio: calcolare il prodotto scalare (somma dei prodotti delle componenti); decidere se due vettori sono ortogonali (prodotto scalare nullo); confrontare le lunghezze (calcolare i moduli con Pitagora in 3D); trovare la direzione del prodotto vettoriale (perpendicolare al piano dei due vettori; con la tabella dei versori o con il determinante). Conviene sempre controllare tutte le affermazioni proposte: ortogonali? paralleli (componenti proporzionali)? stessa lunghezza?
:::

::: sintesi
- Versore = modulo 1; $\hat w = \vec w/|\vec w|$; $\vec v = v_x\hat i + v_y\hat j + v_z\hat k$.
- $\vec v\cdot\vec w = vw\cos\theta = v_xw_x + v_yw_y + v_zw_z$: scalare; nullo ⇔ ortogonali; $\vec v\cdot\vec v = v^2$. Commutativo, distributivo.
- $\cos\theta = \vec v\cdot\vec w/(vw)$ dà l'angolo tra due vettori.
- $|\vec v\times\vec w| = vw\sin\theta$ = area del parallelogramma; direzione perpendicolare ai due, verso con la mano destra; nullo ⇔ paralleli.
- $\hat i\times\hat j = \hat k$, $\hat j\times\hat k = \hat i$, $\hat k\times\hat i = \hat j$; $\vec v\times\vec w = -\vec w\times\vec v$.
- $\vec v\times\vec w = (v_yw_z - v_zw_y,\ v_zw_x - v_xw_z,\ v_xw_y - v_yw_x)$; serve a trovare un vettore ortogonale a due vettori dati.
:::

=== 5 dispense
SLIDES: 05, 06, 08
# Lezione 05 — Cinematica: posizione, velocità e accelerazione

Con questa lezione inizia la **meccanica**. La prima parte, la **cinematica**, descrive **come** si muove un corpo: dove si trova, quanto velocemente cambia la sua posizione, quanto velocemente cambia la sua velocità. Non si chiede **perché** si muove così: le cause del moto (le forze) sono oggetto della **dinamica**. Si usano i vettori della lezione 3 e 4 e le derivate: la velocità è la derivata della posizione, l'accelerazione è la derivata della velocità.

## Cinematica e punto materiale
Il sistema fisico più semplice è il **punto materiale** (o particella): un corpo di cui si trascurano le dimensioni e che si rappresenta come un punto geometrico. Un corpo si può trattare come punto materiale quando le sue **dimensioni lineari sono piccole (trascurabili) rispetto alla precisione** con cui interessa conoscerne la posizione, cioè rispetto alle distanze in gioco.

::: esempio
Un aereo lungo qualche decina di metri, in un viaggio di centinaia di chilometri, è un punto materiale: la sua lunghezza non conta per descrivere la rotta. Lo stesso aereo, guidato fino al gate tra altri veicoli, **non** è un punto materiale: il suo ingombro è fondamentale.
:::

## Sistema di riferimento e vettore posizione
La posizione si può dare solo **rispetto a un sistema di riferimento**: un'origine $O$, degli assi (per esempio cartesiani) e un orologio per misurare il tempo. Lo stesso moto descritto da riferimenti diversi appare diverso (vedi la lezione sui moti relativi).

- **Vettore posizione** $\vec r$: il vettore che va dall'**origine** al **punto** in cui si trova il corpo. In coordinate cartesiane $\vec r = x\,\hat i + y\,\hat j + z\,\hat k$, in metri.
- **Traiettoria**: il luogo dei punti occupati dal corpo nei diversi istanti, cioè la linea che il punto disegna muovendosi.
- **Ascissa curvilinea** $s$: una volta nota la curva della traiettoria, la posizione si può dare anche con un solo numero, la **lunghezza del percorso misurata lungo la curva** da un'origine scelta sulla curva fino al corpo (come i chilometri segnati lungo un'autostrada).
- **Legge oraria**: la funzione $\vec r(t)$ (oppure $s(t)$) che dà la posizione in **ogni istante**. Quando la si conosce, il moto è completamente noto.

## Spostamento
Se il corpo passa dalla posizione $\vec r_1$ (al tempo $t_1$) alla posizione $\vec r_2$ (al tempo $t_2$), il **vettore spostamento** è
$$\Delta\vec r = \vec r_2 - \vec r_1$$
Va dalla posizione iniziale a quella finale. Dipende **solo dai due estremi**, non dal percorso fatto in mezzo.

Su una retta basta un numero con segno: $\Delta s = s_2 - s_1$.

::: esempio
- Un punto passa da $s_1 = 3{,}8\,\mathrm m$ a $s_2 = 7{,}1\,\mathrm m$: $\Delta s = 7{,}1 - 3{,}8 = 3{,}3\,\mathrm m$.
- Una barca si sposta in un'ora di $5\,\mathrm{km}$ verso nord e poi di $3\,\mathrm{km}$ verso est. I due spostamenti sono perpendicolari, quindi il modulo dello spostamento totale è (Pitagora):
$$|\Delta\vec r| = \sqrt{5^2 + 3^2} = \sqrt{25 + 9} = \sqrt{34} \approx 5{,}8\,\mathrm{km}$$
La **strada percorsa** invece è $5 + 3 = 8\,\mathrm{km}$: distanza percorsa e modulo dello spostamento sono cose diverse.
:::

## Coordinate polari
Nel piano la posizione di un punto $P$ si può dare, invece che con $(x, y)$, con due altri numeri:
- $r$ = **distanza** di $P$ dall'origine (detta anche polo), $r \ge 0$, in metri;
- $\theta$ = **angolo** tra l'asse $x$ (asse polare) e il segmento $OP$, misurato in senso antiorario, in **radianti**.

Il legame con le cartesiane si legge sul triangolo rettangolo di ipotenusa $r$:
$$x = r\cos\theta \qquad y = r\sin\theta$$
e, al contrario,
$$r = \sqrt{x^2 + y^2} \qquad \tan\theta = \frac{y}{x}$$
Quindi la legge oraria nel piano si può scrivere $\vec r(t) = [x(t),\ y(t)]$ oppure $\vec r(t) = [r(t),\ \theta(t)]$.

### I versori polari
Invece dei versori fissi $\hat i, \hat j$ si usano due versori che **seguono il punto**:
- $\hat u_r$: diretto lungo $\vec r$, verso l'esterno (direzione **radiale**);
- $\hat u_\theta$: perpendicolare a $\hat u_r$, nel verso in cui cresce $\theta$ (direzione **trasversa**).

In componenti cartesiane:
$$\hat u_r = \cos\theta\,\hat i + \sin\theta\,\hat j \qquad \hat u_\theta = -\sin\theta\,\hat i + \cos\theta\,\hat j$$
e il vettore posizione è semplicemente $\vec r = r\,\hat u_r$.

Le coordinate polari sono comode nei **moti circolari**: lì $r = R$ è costante e il moto è descritto dal solo angolo $\theta(t)$.

::: esempio
Il punto $P = (3, 4)\,\mathrm m$ ha $r = \sqrt{9 + 16} = 5\,\mathrm m$ e $\tan\theta = 4/3$, $\theta \approx 53{,}1° \approx 0{,}927\,\mathrm{rad}$. Al contrario, $r = 2\,\mathrm m$ e $\theta = 30°$ danno $x = 2\cos 30° \approx 1{,}73\,\mathrm m$ e $y = 2\sin 30° = 1\,\mathrm m$.
:::

## Velocità
La **velocità** è la grandezza vettoriale che esprime la **rapidità con cui cambia nel tempo la posizione** del punto.

### Velocità media
$$\vec v_m = \frac{\Delta\vec r}{\Delta t} = \frac{\vec r_2 - \vec r_1}{t_2 - t_1}$$
dove $\Delta\vec r$ = spostamento (m) e $\Delta t$ = intervallo di tempo (s). È un vettore, perché è un vettore diviso uno scalare positivo:
- **direzione**: quella della **corda** $P_1P_2$ (il segmento tra le due posizioni);
- **verso**: quello dello spostamento;
- **modulo**: $|\Delta\vec r|/\Delta t$.

Dimensioni $[v] = [L\,T^{-1}]$, unità SI **m/s** ($1\,\mathrm{m/s} = 3{,}6\,\mathrm{km/h}$).

### Velocità scalare media
È la **strada totale percorsa** lungo la traiettoria diviso il tempo impiegato: $v_s = \ell/\Delta t$. Non tiene conto del verso. Se si va e si torna al punto di partenza, la velocità media vettoriale è **zero** (spostamento nullo), quella scalare no.

::: esempio
**Salita e discesa (dalla dispensa).** Un'auto percorre un tratto di lunghezza $d$ in salita a velocità $v_1$ e lo stesso tratto in discesa a $v_2$. Qual è la velocità (scalare) media?
- Tempo in salita: $t_1 = d/v_1$; in discesa: $t_2 = d/v_2$.
- Strada totale $2d$, tempo totale $t_1 + t_2 = d\left(\dfrac{1}{v_1} + \dfrac{1}{v_2}\right) = d\,\dfrac{v_1 + v_2}{v_1 v_2}$.
- Velocità media:
$$v_m = \frac{2d}{d\,\frac{v_1 + v_2}{v_1 v_2}} = \frac{2\,v_1 v_2}{v_1 + v_2}$$

**Non** è la media aritmetica $(v_1 + v_2)/2$: si passa più tempo nel tratto lento, che quindi pesa di più. Con $v_1 = 30$ e $v_2 = 60\,\mathrm{km/h}$: $v_m = 2\cdot 30\cdot 60/90 = 40\,\mathrm{km/h}$, non 45.
:::

::: esempio
**Carl Lewis** (record 1991): 100 m in 9,86 s.
$$v_m = \frac{100\,\mathrm m}{9{,}86\,\mathrm s} \approx 10{,}14\,\mathrm{m/s} = 10{,}14\cdot 3{,}6 \approx 36{,}5\,\mathrm{km/h}$$
:::

### Velocità istantanea
Se si accorcia sempre più l'intervallo $\Delta t$ (cioè si avvicina $t_2$ a $t_1$), lo spostamento $\Delta\vec r$ diventa sempre più piccolo e sempre più **allineato con la tangente** alla traiettoria nel punto $\vec r_1$, e la velocità media si avvicina sempre più alla velocità in quell'istante. Si definisce la **velocità istantanea** come il limite:
$$\vec v = \lim_{\Delta t\to 0}\frac{\Delta\vec r}{\Delta t} = \frac{d\vec r}{dt}$$
La velocità istantanea è la **derivata temporale del vettore posizione** ed è in ogni istante **tangente alla traiettoria**.

In componenti cartesiane si derivano le singole coordinate:
$$\vec v = \frac{dx}{dt}\,\hat i + \frac{dy}{dt}\,\hat j + \frac{dz}{dt}\,\hat k = v_x\,\hat i + v_y\,\hat j + v_z\,\hat k$$
Il modulo $v = |\vec v|$ si chiama anche velocità scalare: lungo la traiettoria vale $v = ds/dt$.

### Velocità in coordinate polari
Si deriva $\vec r = r\,\hat u_r$ con la regola del prodotto. Il versore $\hat u_r$ cambia direzione quando cambia $\theta$: derivando $\hat u_r = \cos\theta\,\hat i + \sin\theta\,\hat j$ si ottiene
$$\frac{d\hat u_r}{dt} = (-\sin\theta\,\hat i + \cos\theta\,\hat j)\frac{d\theta}{dt} = \dot\theta\,\hat u_\theta$$
(il punto sopra indica la derivata rispetto al tempo). Quindi:
$$\vec v = \frac{d}{dt}(r\,\hat u_r) = \dot r\,\hat u_r + r\,\dot\theta\,\hat u_\theta$$
- $v_r = \dot r$: **componente radiale**, dovuta alla variazione della distanza dall'origine (variazione del modulo di $\vec r$);
- $v_\theta = r\dot\theta$: **componente trasversa**, dovuta alla variazione dell'angolo (variazione della direzione di $\vec r$).

Nel moto circolare $r$ è costante, $\dot r = 0$, e resta solo $v = r\dot\theta = r\,\omega$.

## Accelerazione
L'**accelerazione** misura la rapidità con cui cambia il **vettore velocità**: può cambiare il modulo, la direzione o il verso.

**Accelerazione media**:
$$\vec a_m = \frac{\Delta\vec v}{\Delta t} = \frac{\vec v_2 - \vec v_1}{t_2 - t_1}$$
**Accelerazione istantanea** (limite del rapporto incrementale):
$$\vec a = \lim_{\Delta t\to 0}\frac{\Delta\vec v}{\Delta t} = \frac{d\vec v}{dt} = \frac{d^2\vec r}{dt^2}$$
È la derivata della velocità, cioè la **derivata seconda** della posizione. In componenti: $a_x = dv_x/dt = d^2x/dt^2$, e così per $y$ e $z$.

Dimensioni: $[a] = [v]/[T] = [L\,T^{-1}]/[T] = [L\,T^{-2}]$ ("lunghezza per tempo alla meno due"); unità SI **m/s²**, cioè (m/s) al secondo: di quanti m/s cambia la velocità ogni secondo. Velocità e accelerazione sono entrambe **grandezze derivate**.

La direzione dell'accelerazione **non** è in generale quella della velocità: si capisce meglio scomponendola lungo la tangente e la normale alla traiettoria (vedi sotto).

::: esempio
**Aereo che inverte la rotta (dalla dispensa).** Va a nord a $200\,\mathrm{m/s}$, poi a sud a $200\,\mathrm{m/s}$. Con $\hat j$ verso nord: $\vec v_1 = 200\,\hat j$, $\vec v_2 = -200\,\hat j$.
$$|\Delta\vec v| = |\vec v_2 - \vec v_1| = |-200\,\hat j - 200\,\hat j| = |-400\,\hat j| = 400\,\mathrm{m/s}$$
Il modulo della velocità non è cambiato, ma la velocità sì: è cambiato il verso.
:::

::: esempio
**Accelerazione media.**
- Un motociclista passa da $54\,\mathrm{km/h}$ a $108\,\mathrm{km/h}$ in $20\,\mathrm s$. In m/s: $54/3{,}6 = 15\,\mathrm{m/s}$ e $108/3{,}6 = 30\,\mathrm{m/s}$. $a_m = (30 - 15)/20 = 0{,}75\,\mathrm{m/s^2}$.
- Un atleta da fermo arriva a $11\,\mathrm{m/s}$ in $4\,\mathrm s$: $a_m = 11/4 = 2{,}75\,\mathrm{m/s^2}$.
- Un cavallo a $11\,\mathrm{m/s}$ con accelerazione $-4\,\mathrm{m/s^2}$ (rallenta): per arrivare a $6{,}5\,\mathrm{m/s}$ serve $\Delta t = \Delta v/a = (6{,}5 - 11)/(-4) = (-4{,}5)/(-4) = 1{,}125\,\mathrm s$.
:::

## Derivata di un vettore
Passare dalla posizione alla velocità e dalla velocità all'accelerazione sono casi di **derivata di un vettore** che dipende da uno scalare (il tempo). La derivata di un vettore è ancora un vettore, ma **in generale non è parallela** al vettore di partenza. Le regole sono quelle note:
- la derivata di una somma è la somma delle derivate;
- prodotto per uno scalare: $\dfrac{d}{dt}(f\,\vec v) = \dfrac{df}{dt}\vec v + f\dfrac{d\vec v}{dt}$;
- prodotto scalare: $\dfrac{d}{dt}(\vec v\cdot\vec w) = \dfrac{d\vec v}{dt}\cdot\vec w + \vec v\cdot\dfrac{d\vec w}{dt}$;
- prodotto vettoriale: $\dfrac{d}{dt}(\vec v\times\vec w) = \dfrac{d\vec v}{dt}\times\vec w + \vec v\times\dfrac{d\vec w}{dt}$, **rispettando l'ordine** dei fattori;
- un vettore **costante** (in modulo, direzione e verso) ha derivata nulla.

In componenti cartesiane (versori fissi) si deriva ogni componente: $\dfrac{d\vec v}{dt} = \dfrac{dv_x}{dt}\hat i + \dfrac{dv_y}{dt}\hat j + \dfrac{dv_z}{dt}\hat k$.

### Derivata di un versore
Un versore $\hat u$ ha modulo costante (1): può solo **ruotare**. Derivando $\hat u\cdot\hat u = 1$ si ottiene $2\,\hat u\cdot\dfrac{d\hat u}{dt} = 0$: la derivata di un versore è **perpendicolare al versore stesso**. Se $\varphi$ è l'angolo di cui ruota,
$$\frac{d\hat u}{dt} = \frac{d\varphi}{dt}\,\hat u_\perp$$
dove $\hat u_\perp$ è il versore perpendicolare a $\hat u$ nel verso della rotazione. La componente della derivata **parallela** al versore è quindi **zero**: il modulo non cambia.

Regola generale: scrivendo un vettore come $\vec v = v\,\hat u$,
$$\frac{d\vec v}{dt} = \frac{dv}{dt}\,\hat u + v\,\frac{d\hat u}{dt}$$
il primo termine (parallelo) viene dalla **variazione del modulo**, il secondo (perpendicolare) dalla **variazione della direzione**.

## Accelerazione tangenziale e normale
Applichiamo la regola alla velocità. La velocità è sempre tangente alla traiettoria: $\vec v = v\,\hat u_T$, con $\hat u_T$ versore tangente. Derivando:
$$\vec a = \frac{dv}{dt}\,\hat u_T + v\,\frac{d\hat u_T}{dt}$$
Il versore tangente ruota man mano che il punto percorre la curva. Approssimiamo la traiettoria, in un tratto piccolissimo, con un arco di circonferenza di raggio $R$ (il **raggio di curvatura**): percorrendo un arco $ds$ la tangente ruota di un angolo $d\varphi = ds/R$. Quindi
$$\frac{d\hat u_T}{dt} = \frac{d\varphi}{dt}\,\hat u_N = \frac{1}{R}\frac{ds}{dt}\,\hat u_N = \frac{v}{R}\,\hat u_N$$
dove $\hat u_N$ è il versore **normale**, diretto verso il centro di curvatura. Sostituendo:
$$\vec a = \underbrace{\frac{dv}{dt}}_{a_T}\,\hat u_T + \underbrace{\frac{v^2}{R}}_{a_N}\,\hat u_N$$
- **accelerazione tangenziale** $a_T = dv/dt$: lungo la velocità; descrive la **variazione del modulo** della velocità; è nulla se il modulo è costante;
- **accelerazione normale** (o **centripeta**) $a_N = v^2/R$: perpendicolare alla velocità, diretta verso il centro del cerchio che meglio approssima la traiettoria; descrive la **variazione della direzione**; è nulla solo nei moti rettilinei ($R \to \infty$).

Modulo totale: $a = \sqrt{a_T^2 + a_N^2}$. Quindi un corpo che curva **accelera anche a velocità costante in modulo**.

Se in un punto la tangente forma un angolo $\Phi$ con l'asse $x$, le componenti cartesiane si ottengono da quelle intrinseche proiettando: $a_x = a_T\cos\Phi - a_N\sin\Phi$, $a_y = a_T\sin\Phi + a_N\cos\Phi$.

### Accelerazione in coordinate polari
Derivando $\vec v = \dot r\,\hat u_r + r\dot\theta\,\hat u_\theta$ (con $d\hat u_r/dt = \dot\theta\,\hat u_\theta$ e $d\hat u_\theta/dt = -\dot\theta\,\hat u_r$) si ottiene:
$$\vec a = (\ddot r - r\dot\theta^2)\,\hat u_r + (r\ddot\theta + 2\dot r\dot\theta)\,\hat u_\theta$$
Il primo termine è l'**accelerazione radiale**, il secondo l'**accelerazione trasversa**. Nel moto circolare uniforme ($r = R$ costante, $\dot\theta = \omega$ costante) resta solo $-R\omega^2\,\hat u_r$: un'accelerazione verso il centro di modulo $\omega^2R$, la centripeta. A seconda del problema conviene la rappresentazione cartesiana, intrinseca (tangente/normale) o polare.

::: attenzione
Cosa è possibile e cosa no:
- **velocità costante** (vettore costante) ⇒ accelerazione **nulla**. È **impossibile** avere velocità costante e accelerazione variabile (o non nulla).
- Velocità **nulla** con accelerazione **non nulla**: possibile (il punto più alto di un lancio verticale: $v = 0$, $a = g$).
- Velocità verso $+x$ e accelerazione verso $-x$: possibile (frenata).
- Velocità costante **in modulo** e accelerazione non nulla: possibile (moto circolare uniforme: cambia la direzione).
:::

::: esempio
**Quesiti della dispensa.**
1. Moto piano con $\vec r = (5{,}0 + 1{,}0\,t)\,\hat i + 7{,}0\,\hat j$ (m). La velocità verticale è $v_y = \dfrac{d(7{,}0)}{dt} = 0\,\mathrm{m/s}$: la $y$ è costante. (La velocità orizzontale è $v_x = 1{,}0\,\mathrm{m/s}$.)
2. Moto con $\vec r(t) = (4{,}0\,t + 6{,}0\,t^2)\,\hat i + \hat j + (2{,}0 + 6{,}5\,t^2)\,\hat k$ (m). Derivando ogni componente: $\vec v(t) = (4{,}0 + 12\,t)\,\hat i + 0\,\hat j + 13\,t\,\hat k$. Derivando ancora: $\vec a = 12\,\hat i + 13\,\hat k$ (m/s²), **costante**. Il modulo è $\sqrt{144 + 169} = \sqrt{313} \approx 17{,}7\,\mathrm{m/s^2}$, anche a $t = 2\,\mathrm s$.
3. Componente della derivata di un versore parallela al versore stesso: è la variazione del modulo, che per un versore è costante (1); quindi è **zero**.
:::

## Dall'accelerazione alla posizione: integrare
Derivando si va da posizione a velocità ad accelerazione. Il cammino inverso si fa **integrando**: se si conosce $a(t)$ e le condizioni iniziali ($x_0$, $v_0$ al tempo $t = 0$),
$$v(t) = v_0 + \int_0^t a(t')\,dt' \qquad x(t) = x_0 + \int_0^t v(t')\,dt'$$
Geometricamente: la variazione di velocità è l'**area** sotto il grafico di $a(t)$; lo spazio percorso è l'area sotto il grafico di $v(t)$.

::: esempio
Un corpo parte **da fermo** all'istante $t = 0$ (dall'origine) con accelerazione lungo $x$ di modulo $a = 2t$ (m/s², $t$ in s). Che distanza ha percorso a $t = 3\,\mathrm s$?
1. Velocità: $v(t) = 0 + \int_0^t 2t'\,dt' = t^2$.
2. Posizione: $x(t) = 0 + \int_0^t t'^2\,dt' = \dfrac{t^3}{3}$.
3. A $t = 3\,\mathrm s$: $x = 27/3 = 9\,\mathrm m$.

Attenzione: l'accelerazione **non** è costante, quindi non si può usare $\tfrac12at^2$ (darebbe $\tfrac12\cdot 6\cdot 9 = 27\,\mathrm m$, sbagliato).
:::

## I due moti più comuni (anticipazione della lezione 6)
Integrando nei due casi più semplici si ottengono le formule che servono negli esercizi (derivazioni complete nella lezione 6):

| Moto | Accelerazione | Velocità | Posizione | Senza il tempo |
|---|---|---|---|---|
| uniforme | $a = 0$ | $v$ costante | $s = s_0 + v\,t$ | — |
| uniformemente accelerato | $a$ costante | $v = v_0 + a\,t$ | $s = s_0 + v_0t + \tfrac12at^2$ | $v^2 = v_0^2 + 2a\,\Delta s$ |

dove $s_0, v_0$ = posizione e velocità iniziali, $a$ = accelerazione (m/s²), $t$ = tempo (s), $\Delta s = s - s_0$.

**Moto uniforme**: le distanze percorse sono **proporzionali** agli intervalli di tempo (in tempo doppio, distanza doppia).

**Partenza da fermo** ($v_0 = 0$, $s_0 = 0$): $v = at$ e $s = \tfrac12at^2$. Quindi:
- a parità di tempo, lo spazio è proporzionale ad $a$: accelerazione doppia ⇒ spazio **doppio**;
- a parità di $a$, lo spazio è proporzionale a $t^2$: tempo doppio ⇒ spazio **quadruplo**.

**Gravità**: vicino alla Terra ogni corpo in caduta libera ha accelerazione $g = 9{,}8\,\mathrm{m/s^2}$ verso il basso. Un corpo lanciato **verso l'alto** si muove all'inizio di moto **uniformemente accelerato con accelerazione opposta al moto**: rallenta di $9{,}8\,\mathrm{m/s}$ ogni secondo.

::: esempio
**Moto uniforme.**
- Ciclista a $6{,}5\,\mathrm{m/s}$ per $30\,\mathrm s$: $s = vt = 6{,}5\cdot 30 = 195\,\mathrm m$.
- Lo stesso ciclista per percorrere $100\,\mathrm m$: $t = s/v = 100/6{,}5 \approx 15{,}4\,\mathrm s$.
- Fondista che deve fare $850\,\mathrm m$ a $15\,\mathrm{km/h}$: $v = 15/3{,}6 \approx 4{,}17\,\mathrm{m/s}$; $t = 850/4{,}17 \approx 204\,\mathrm s$.
- Punto che all'istante iniziale è a $2\,\mathrm m$ dall'origine e va a $20\,\mathrm{m/s}$: legge oraria $s = 2 + 20\,t$ (m).
- Atleta che fa i $400\,\mathrm m$ in $70\,\mathrm s$: velocità $400/70\,\mathrm{m/s}$; in $10\,\mathrm s$ percorre $\dfrac{400}{70}\cdot 10 = \dfrac{400}{7} \approx 57\,\mathrm m$.
:::

::: esempio
**Moto uniformemente accelerato da fermo.**
- Ciclista con $a = 0{,}1\,\mathrm{m/s^2}$: in $10\,\mathrm s$ percorre $\tfrac12\cdot 0{,}1\cdot 10^2 = \tfrac12\cdot 0{,}1\cdot 100 = 5\,\mathrm m$; raggiunge $10\,\mathrm{m/s}$ dopo $t = v/a = 10/0{,}1 = 100\,\mathrm s$.
- Corpo con $a = 4\,\mathrm{m/s^2}$ fino a $120\,\mathrm{km/h} = 33{,}3\,\mathrm{m/s}$: $t = 33{,}3/4 \approx 8{,}33\,\mathrm s$.
- Corpo con $a = 24\,\mathrm{m/s^2}$ per $10\,\mathrm s$: $s = \tfrac12\cdot 24\cdot 100 = 1200\,\mathrm m$. (Dimenticando il $\tfrac12$ si otterrebbe $2400\,\mathrm m$: vedi il riquadro "esame".)
- Aereo che da fermo fa $500\,\mathrm m$ in $10\,\mathrm s$: in $20\,\mathrm s$ (tempo doppio) fa $4\cdot 500 = 2000\,\mathrm m$. Infatti $a = 2s/t^2 = 1000/100 = 10\,\mathrm{m/s^2}$ e $\tfrac12\cdot 10\cdot 400 = 2000\,\mathrm m$.
:::

::: esempio
**Senza il tempo.** Un punto passa da $10\,\mathrm{m/s}$ a $20\,\mathrm{m/s}$ in $75\,\mathrm m$ di moto uniformemente accelerato. Da $v^2 = v_0^2 + 2a\Delta s$:
$$a = \frac{v^2 - v_0^2}{2\,\Delta s} = \frac{400 - 100}{2\cdot 75} = \frac{300}{150} = 2\,\mathrm{m/s^2}$$
:::

::: esempio
**Gravità.**
- **Petardo** lasciato cadere in un precipizio, esplode toccando terra dopo $4\,\mathrm s$ (la luce arriva praticamente subito): $h = \tfrac12gt^2 = \tfrac12\cdot 9{,}8\cdot 16 = 78{,}4\,\mathrm m$.
- **Tuffatore** da $30\,\mathrm m$, senza attriti, da fermo: $v^2 = 0 + 2gh$, quindi $v = \sqrt{2\cdot 9{,}8\cdot 30} = \sqrt{588} \approx 24\,\mathrm{m/s}$.
- **Proiettile sparato in verticale** a $v_0 = 196\,\mathrm{m/s}$: perde $9{,}8\,\mathrm{m/s}$ ogni secondo, quindi si ferma dopo $196/9{,}8 = 20\,\mathrm s$; la discesa è simmetrica e dura altri $20\,\mathrm s$. Torna al punto di partenza dopo $40\,\mathrm s$.
:::

## Moti periodici: periodo, frequenza, velocità angolare
Un moto che si ripete identico a intervalli regolari si dice **periodico** (una lancetta che gira, un'oscillazione, un'onda). È descritto da:
- **periodo** $T$: la durata di un giro o di un'oscillazione completa, in **secondi**;
- **frequenza** $f = 1/T$: il numero di giri (oscillazioni) al secondo, in **hertz**, $1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$;
- **velocità angolare** (o pulsazione) $\omega = \dfrac{2\pi}{T} = 2\pi f$: l'angolo spazzato al secondo, in **rad/s** ($2\pi$ radianti = un giro).

::: esempio
- **Lancetta dei secondi**: fa un giro in $T = 60\,\mathrm s$. Frequenza $f = 1/60\,\mathrm{Hz} \approx 0{,}0167\,\mathrm{Hz}$. Velocità angolare $\omega = 2\pi/60 \approx 0{,}105\,\mathrm{rad/s}$.
- Punto che gira con $f = 100\,\mathrm{Hz}$: $\omega = 2\pi\cdot 100 \approx 628\,\mathrm{rad/s}$.
- **Onda a 100 MHz**: $f = 100\cdot 10^6 = 10^8\,\mathrm{Hz}$, quindi $T = 1/f = 10^{-8}\,\mathrm s = 10\cdot 10^{-9}\,\mathrm s = 10\,\mathrm{ns}$.
:::

::: attenzione
- Non confondere spostamento (vettore, dipende solo dagli estremi) e distanza percorsa (lunghezza del percorso).
- La velocità media su andata e ritorno non è la media delle velocità.
- Le unità: velocità in m/s, accelerazione in m/s², velocità angolare in rad/s, frequenza in Hz, periodo in s.
- Prima di usare le formule di un moto, controllare che le ipotesi valgano: $\tfrac12at^2$ solo con accelerazione **costante** e partenza da fermo.
:::

::: esame
Le chiuse della lezione sono soprattutto esercizi brevi: spostamento e distanza; moto uniforme ($s = vt$, legge oraria $s = s_0 + vt$, spazi proporzionali ai tempi); moto accelerato da fermo ($s = \tfrac12at^2$, $v = at$, effetto del raddoppio di $a$ o di $t$); $v^2 = v_0^2 + 2a\Delta s$; caduta libera ($h = \tfrac12gt^2$, $v = \sqrt{2gh}$, lancio verso l'alto con accelerazione opposta al moto); accelerazione media $\Delta v/\Delta t$ con conversione da km/h; unità e dimensioni dell'accelerazione (m/s², $[L][T]^{-2}$); l'accelerazione è la variazione della velocità nel tempo; situazioni impossibili (velocità costante con accelerazione variabile); periodo, frequenza e velocità angolare della lancetta dei secondi; periodo di un'onda da 100 MHz. Una domanda (corpo da fermo con $a = 24\,\mathrm{m/s^2}$ per 10 s) considera giusto 2400 m, che si ottiene senza il fattore $\tfrac12$: il calcolo corretto dà 1200 m. Nella domanda sull'atleta dei 400 m la risposta è scritta come rapporto, $400/7$ m.

Aperte:
- **Definizioni di posizione, velocità e accelerazione**: sistema di riferimento, vettore posizione $\vec r(t)$, traiettoria, legge oraria; velocità media $\Delta\vec r/\Delta t$ e istantanea $d\vec r/dt$ (limite, tangente alla traiettoria, m/s); accelerazione media $\Delta\vec v/\Delta t$ e istantanea $d\vec v/dt = d^2\vec r/dt^2$ (m/s²); componenti tangenziale $dv/dt$ e normale $v^2/R$.
- **Posizione in coordinate polari**: distanza $r$ dall'origine e angolo $\theta$ dall'asse $x$ (in radianti); $x = r\cos\theta$, $y = r\sin\theta$, $r = \sqrt{x^2+y^2}$, $\tan\theta = y/x$; versori $\hat u_r$, $\hat u_\theta$; velocità $\dot r\,\hat u_r + r\dot\theta\,\hat u_\theta$; utili nei moti circolari.
:::

::: sintesi
- Punto materiale: dimensioni trascurabili rispetto alla precisione richiesta. Posizione $\vec r(t)$ rispetto a un riferimento; traiettoria; ascissa curvilinea; legge oraria.
- Spostamento $\Delta\vec r = \vec r_2 - \vec r_1$ (solo estremi) ≠ distanza percorsa.
- Polari: $x = r\cos\theta$, $y = r\sin\theta$; $\vec r = r\hat u_r$; $\vec v = \dot r\,\hat u_r + r\dot\theta\,\hat u_\theta$.
- $\vec v_m = \Delta\vec r/\Delta t$ (lungo la corda); $\vec v = d\vec r/dt$, tangente; m/s, $[L\,T^{-1}]$. Velocità media su due tratti uguali: $2v_1v_2/(v_1+v_2)$.
- $\vec a = d\vec v/dt = d^2\vec r/dt^2$; m/s², $[L\,T^{-2}]$. $\vec a = \dfrac{dv}{dt}\hat u_T + \dfrac{v^2}{R}\hat u_N$.
- Derivata di un versore ⊥ al versore. Integrare: $v = v_0 + \int a\,dt$, $x = x_0 + \int v\,dt$.
- Uniforme $s = s_0 + vt$; accelerato $v = v_0 + at$, $s = s_0 + v_0t + \tfrac12at^2$, $v^2 = v_0^2 + 2a\Delta s$; $g = 9{,}8\,\mathrm{m/s^2}$.
- $f = 1/T$ (Hz), $\omega = 2\pi/T = 2\pi f$ (rad/s).
:::

=== 6 dispense
SLIDES: 06
# Lezione 06 — Moto rettilineo uniforme e uniformemente accelerato

Applichiamo le definizioni della lezione 5 al caso più semplice: il **moto lungo una retta**. Ricaviamo, integrando, le leggi orarie dei due moti fondamentali, il **moto rettilineo uniforme** (velocità costante) e il **moto uniformemente accelerato** (accelerazione costante), con i loro grafici. Il caso più importante di moto uniformemente accelerato è la **caduta libera** dei corpi sotto l'accelerazione di gravità. Chiude il piano inclinato senza attrito.

## Il moto rettilineo
Se il moto avviene lungo una retta, conviene far coincidere l'asse $x$ con la retta stessa. La posizione è data da una sola coordinata:
$$\vec r = x\,\hat i$$
e lo spostamento da un punto 1 a un punto 2 è $\Delta\vec r = (x_2 - x_1)\,\hat i$.

Il carattere vettoriale di posizione, spostamento, velocità e accelerazione resta tutto nel **segno**: il verso positivo è quello del versore $\hat i$, scelto arbitrariamente; un numero positivo punta nel verso dell'asse, uno negativo nel verso opposto. Si possono quindi scrivere le formule **senza frecce**, ma **rispettando sempre i segni**.

### Velocità media vettoriale e velocità scalare media
Per il moto rettilineo la velocità media è
$$v_m = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$$
con il segno dello spostamento. La **velocità scalare media** invece usa la lunghezza totale $\ell$ percorsa lungo la traiettoria, senza tenere conto del verso: $v_s = \ell/\Delta t$.

::: esempio
Un punto avanza di un tratto $\Delta x$ in un tempo $t_1$ e poi torna al punto di partenza percorrendo la stessa distanza in un tempo $t_2$.
- Spostamento totale nullo ⇒ **velocità media vettoriale nulla**.
- Strada percorsa $2\Delta x$ ⇒ **velocità scalare media** $v_s = \dfrac{2\Delta x}{t_1 + t_2}$.

Con $\Delta x = 100\,\mathrm m$, $t_1 = 20\,\mathrm s$, $t_2 = 30\,\mathrm s$: $v_s = 200/50 = 4\,\mathrm{m/s}$.
:::

### Velocità e accelerazione istantanee
$$v = \lim_{\Delta t\to 0}\frac{\Delta x}{\Delta t} = \frac{dx}{dt} \qquad a = \lim_{\Delta t\to 0}\frac{\Delta v}{\Delta t} = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$
Il segno di $v$ dice in che verso ci si muove; il segno di $a$ dice in che verso cambia la velocità. Se $v$ e $a$ hanno **lo stesso segno** il corpo **accelera** (il modulo della velocità cresce); se hanno **segno opposto** il corpo **rallenta**.

## La legge oraria
Il moto è noto quando si conosce la posizione in ogni istante: la funzione $x = x(t)$ è la **legge oraria**. Se si conosce la velocità $v(t)$ in ogni istante, la legge oraria si trova con l'operazione inversa della derivata, l'**integrale**:
$$x(t) = x_0 + \int_{0}^{t} v(t')\,dt'$$
dove $x_0$ è la posizione al tempo $t_0 = 0$. Allo stesso modo, nota l'accelerazione,
$$v(t) = v_0 + \int_{0}^{t} a(t')\,dt'$$
Mettendo insieme le due si ha la **legge oraria generale** del moto in una dimensione:
$$x(t) = x_0 + v_0\,t + \int_0^t\!\left(\int_0^{t'} a(t'')\,dt''\right)dt'$$
Servono sempre due **condizioni iniziali**, $x_0$ e $v_0$.

## Moto rettilineo uniforme
### Definizione
Un moto è **rettilineo uniforme** quando avviene lungo una retta con **velocità costante** (in modulo e verso). L'**accelerazione è nulla**. Per il primo principio della dinamica è il moto di un corpo non soggetto a forze, o soggetto a forze con risultante nulla.

### Legge oraria (derivazione)
Con $v(t) = v_0$ costante, l'integrale è immediato: $\int_0^t v_0\,dt' = v_0\,t$. Quindi
$$x(t) = x_0 + v_0\,t$$
dove:
- $x(t)$ = posizione all'istante $t$ (m);
- $x_0$ = posizione all'istante $t_0 = 0$ (m);
- $v_0 = v$ = velocità costante (m/s);
- $t$ = tempo (s).

Formule inverse: $\Delta x = v\,\Delta t$, quindi $v = \dfrac{\Delta x}{\Delta t}$ e $\Delta t = \dfrac{\Delta x}{v}$.

### Proprietà
- Il corpo percorre **spazi uguali in tempi uguali**: le distanze percorse sono **direttamente proporzionali** agli intervalli di tempo ($\Delta x = v\,\Delta t$). In un tempo doppio si fa una strada doppia.
- La velocità è la stessa in ogni istante: se a $t = 10\,\mathrm s$ vale $15\,\mathrm{m/s}$, a $t = 20\,\mathrm s$ vale ancora $15\,\mathrm{m/s}$.

### Grafici
- **Posizione–tempo** $x(t)$: una **retta**; l'intercetta è $x_0$ e la **pendenza** è la velocità $v$ (più ripida = più veloce; pendenza negativa = moto nel verso negativo).
- **Velocità–tempo** $v(t)$: una **retta orizzontale** all'altezza $v$.
- L'**area** sotto il grafico $v(t)$ tra $0$ e $t$ è un rettangolo di base $t$ e altezza $v$: vale $v\,t$, cioè lo **spazio percorso**.
- **Accelerazione–tempo**: la retta $a = 0$.

::: esempio
**Viaggio da A a B (dalla dispensa).** Un'auto va da A a B, distanti $d_{AB} = 657\,\mathrm{km}$, in $t = 8{,}76\,\mathrm h$.
1. Supponendo il moto uniforme, la velocità è $v = \dfrac{657\,\mathrm{km}}{8{,}76\,\mathrm h} = 75\,\mathrm{km/h}$.
2. Una località C dista $d_C = 200\,\mathrm{km}$ da A. Dalla legge oraria $d_C = v\,t$: $t = \dfrac{d_C}{v} = \dfrac{200\,\mathrm{km}}{75\,\mathrm{km/h}} \approx 2{,}67\,\mathrm h$ (circa 2 h 40 min).
:::

::: esempio
**Distrazione alla guida.**
- A $110\,\mathrm{km/h}$, guardando fuori dal finestrino per $2{,}0\,\mathrm s$. In m/s: $110/3{,}6 \approx 30{,}6\,\mathrm{m/s}$. Distanza: $30{,}6\cdot 2{,}0 \approx 61\,\mathrm m$.
- A $130\,\mathrm{km/h}$ per $2\,\mathrm s$: $130/3{,}6 \approx 36{,}1\,\mathrm{m/s}$, distanza $\approx 72\,\mathrm m$.

Settanta metri "alla cieca": il motivo per cui la distrazione è pericolosa.
:::

::: esempio
**Unità diverse.**
- Auto a $110\,\mathrm{m/s}$ per $18\,\mathrm{min}$: $t = 18\cdot 60 = 1080\,\mathrm s$; $s = 110\cdot 1080 = 118\,800\,\mathrm m = 118{,}8\,\mathrm{km}$.
- Treno a $200\,\mathrm{km/h}$ per $15\,\mathrm{min}$: conviene lavorare in ore, $15\,\mathrm{min} = 0{,}25\,\mathrm h$; $s = 200\cdot 0{,}25 = 50\,\mathrm{km}$.
:::

## Moto rettilineo uniformemente accelerato
### Definizione
Un moto è **uniformemente accelerato** quando l'**accelerazione è costante** (in modulo, direzione e verso). La velocità cambia di **quantità uguali in tempi uguali**.

### Velocità (derivazione)
Con $a$ costante:
$$v(t) = v_0 + \int_0^t a\,dt' = v_0 + a\,t$$
La velocità è una **funzione lineare** del tempo.

### Legge oraria (derivazione)
Si integra la velocità appena trovata:
$$x(t) = x_0 + \int_0^t (v_0 + a\,t')\,dt' = x_0 + v_0\,t + \tfrac12\,a\,t^2$$
(l'integrale di $a\,t'$ è $a\,t^2/2$). La posizione è una funzione **quadratica** del tempo: il grafico $x(t)$ è una **parabola**.

### Relazione senza il tempo (derivazione)
Spesso il tempo non è dato. Lo si elimina tra le due equazioni. Dalla prima, $t = \dfrac{v - v_0}{a}$. Sostituendo nella seconda:
$$x - x_0 = v_0\frac{v - v_0}{a} + \frac12 a\frac{(v - v_0)^2}{a^2} = \frac{2v_0(v - v_0) + (v - v_0)^2}{2a} = \frac{(v - v_0)(v + v_0)}{2a} = \frac{v^2 - v_0^2}{2a}$$
Moltiplicando per $2a$:
$$v^2 = v_0^2 + 2a\,(x - x_0)$$

### Velocità media
Poiché la velocità cresce linearmente, la velocità media è la media aritmetica tra iniziale e finale:
$$x - x_0 = \frac{v_0 + v}{2}\,t$$
(è l'area del trapezio sotto il grafico $v(t)$). Vale **solo** se l'accelerazione è costante.

Riassumendo, con:
- $x_0, v_0$ = posizione (m) e velocità (m/s) all'istante $t_0 = 0$;
- $a$ = accelerazione costante (m/s²), con segno: negativa se il corpo frena muovendosi nel verso positivo;
- $x, v$ = posizione e velocità all'istante $t$;

$$v = v_0 + a\,t \qquad x = x_0 + v_0\,t + \tfrac12\,a\,t^2 \qquad v^2 = v_0^2 + 2a\,(x - x_0)$$

### Grafici
- $a(t)$: retta orizzontale all'altezza $a$; l'area sotto è $\Delta v = a\,t$.
- $v(t)$: retta di **pendenza $a$** e intercetta $v_0$; l'area sotto (un trapezio) è lo spazio percorso.
- $x(t)$: **parabola**, rivolta verso l'alto se $a > 0$, verso il basso se $a < 0$; la pendenza della tangente in ogni punto è la velocità in quell'istante.

### Casi particolari utili
**Partenza da fermo** ($v_0 = 0$, $x_0 = 0$):
$$v = a\,t \qquad x = \tfrac12\,a\,t^2 \qquad v^2 = 2a\,x \qquad \Rightarrow \quad a = \frac{2x}{t^2}$$
**Frenata fino all'arresto** (velocità iniziale $v_0$, decelerazione di modulo $a$): si pone $v = 0$.
- Dalla prima: $0 = v_0 - a\,t \Rightarrow t_{arresto} = \dfrac{v_0}{a}$.
- Dalla terza: $0 = v_0^2 - 2a\,d \Rightarrow d_{arresto} = \dfrac{v_0^2}{2a}$.

Lo spazio di frenata cresce con il **quadrato** della velocità: a velocità doppia serve uno spazio quadruplo.

::: esempio
**Accelerazione da distanza e tempo.** Un aeroplano al decollo copre $600\,\mathrm m$ in $15\,\mathrm s$ partendo da fermo, con accelerazione costante.
$$a = \frac{2x}{t^2} = \frac{2\cdot 600}{15^2} = \frac{1200}{225} \approx 5{,}3\,\mathrm{m/s^2}$$
Un'auto di Formula 1 che in partenza fa $600\,\mathrm m$ in $15\,\mathrm s$ prima della prima curva ha esattamente la stessa accelerazione: i dati sono uguali, e il tipo di veicolo non conta.
Velocità al decollo: $v = at = 5{,}33\cdot 15 = 80\,\mathrm{m/s}$ (controllo: $2x/t = 1200/15 = 80$).
:::

::: esempio
**Spazio di frenata del treno.** Un treno a $50\,\mathrm{m/s}$ frena con decelerazione costante $2\,\mathrm{m/s^2}$. A che distanza dalla stazione deve iniziare a frenare per fermarsi lì?
$$d = \frac{v_0^2}{2a} = \frac{50^2}{2\cdot 2} = \frac{2500}{4} = 625\,\mathrm m$$
Tempo di frenata: $50/2 = 25\,\mathrm s$.
:::

::: esempio
**Frenata dell'auto.** Un'auto a $33{,}3\,\mathrm{m/s}$ (120 km/h) frena con decelerazione $2\,\mathrm{m/s^2}$.
- Tempo: $t = v_0/a = 33{,}3/2 \approx 16{,}6\,\mathrm s$ (arrotondando per difetto 16,65).
- Spazio: $d = v_0^2/(2a) = 1109/4 \approx 277\,\mathrm m$.
:::

::: esempio
**Accelerazione media da km/h.**
- Da $40\,\mathrm{km/h}$ a $90\,\mathrm{km/h}$ in $8\,\mathrm s$: $40/3{,}6 = 11{,}1\,\mathrm{m/s}$, $90/3{,}6 = 25\,\mathrm{m/s}$; $a = (25 - 11{,}1)/8 = 13{,}9/8 \approx 1{,}74\,\mathrm{m/s^2}$.
- Auto di massa $950\,\mathrm{kg}$ che da ferma arriva a $60\,\mathrm{km/h}$ in $5{,}1\,\mathrm s$: $60/3{,}6 = 16{,}7\,\mathrm{m/s}$; $a = 16{,}7/5{,}1 \approx 3{,}27\,\mathrm{m/s^2}$. La **massa non serve**: è un dato di cinematica che non entra nel calcolo (servirebbe per la forza).
:::

::: esempio
**Velocità dopo una frenata.** Auto a $75\,\mathrm{km/h}$ che frena con $a = -2{,}3\,\mathrm{m/s^2}$. Dopo $4\,\mathrm s$:
$$v_0 = 75/3{,}6 \approx 20{,}8\,\mathrm{m/s} \qquad v = 20{,}8 + (-2{,}3)\cdot 4 = 20{,}8 - 9{,}2 \approx 11{,}6\,\mathrm{m/s}$$
:::

::: esempio
**Scrivere la legge oraria.** Un'auto ha accelerazione costante $4\,\mathrm{m/s^2}$ e parte da ferma dall'origine. Allora
$$S = \tfrac12\cdot 4\cdot t^2 = 2\,t^2 \qquad v = 4\,t$$
:::

## Caduta libera e lancio verticale
### L'accelerazione di gravità
Un caso notevole di moto uniformemente accelerato è quello di un **grave in caduta libera**. Vicino alla superficie terrestre ogni corpo è soggetto a un'accelerazione verticale, l'**accelerazione di gravità** $g$:
- **direzione**: verticale; **verso**: verso il centro della Terra (in basso);
- **modulo**: $g = 9{,}8\,\mathrm{m/s^2}$ (più precisamente $9{,}81$).

Trascurando la resistenza dell'aria, $g$ è **la stessa per tutti i corpi**, qualunque sia la loro massa (Galileo): un sasso pesante e uno leggero lasciati cadere insieme arrivano a terra insieme.

### Le equazioni
Si sceglie l'asse $y$ **verticale verso l'alto**: l'accelerazione vale $-g$. Per un corpo lanciato all'istante $t_0 = 0$ dalla quota $y_0$ con velocità iniziale $v_0$ (positiva se verso l'alto), sostituendo $a = -g$ nelle formule generali:
$$v(t) = v_0 - g\,t$$
$$y(t) = y_0 + v_0\,t - \tfrac12\,g\,t^2$$
$$v^2 = v_0^2 - 2g\,(y - y_0)$$
dove $g = 9{,}8\,\mathrm{m/s^2}$ è il modulo dell'accelerazione di gravità.

### Risultati da sapere (con derivazione)
**Caduta da fermo** da altezza $h$ ($v_0 = 0$; conviene misurare la distanza caduta verso il basso):
- spazio caduto in un tempo $t$: $h = \tfrac12\,g\,t^2$;
- tempo di caduta: $t = \sqrt{2h/g}$;
- velocità d'arrivo: da $v^2 = 2gh$, $v = \sqrt{2gh}$ (non dipende dalla massa).

**Lancio verso l'alto** con velocità $v_0$ da terra:
- il corpo **rallenta** perché $g$ è opposta alla velocità; all'inizio il moto è uniformemente accelerato con accelerazione **opposta al moto**;
- **tempo di salita**: nel punto più alto $v = 0$, quindi $0 = v_0 - g\,t_s \Rightarrow t_s = v_0/g$;
- **altezza massima**: da $0 = v_0^2 - 2g\,h_{max} \Rightarrow h_{max} = \dfrac{v_0^2}{2g}$; al contrario, per salire di $h$ serve $v_0 = \sqrt{2gh}$;
- **tempo di discesa** uguale a quello di salita (il moto è simmetrico): il corpo torna al punto di partenza dopo $t_{tot} = 2v_0/g$, con velocità di **modulo $v_0$** diretta verso il basso.

Nel **punto più alto** la velocità è **zero** ma l'accelerazione **no**: è ancora $g$, diretta **verso il basso**. Se l'accelerazione fosse nulla lì, il corpo resterebbe fermo in aria.

::: esempio
**Cadute.**
- Sasso che impiega $1\,\mathrm s$ a toccare terra: $h = \tfrac12\cdot 9{,}8\cdot 1^2 = 4{,}9\,\mathrm m$.
- Pietra che colpisce il fondo di un precipizio dopo $3{,}5\,\mathrm s$: $h = \tfrac12\cdot 9{,}8\cdot 3{,}5^2 = 4{,}9\cdot 12{,}25 \approx 60\,\mathrm m$.
- Velocità dopo una caduta di $30\,\mathrm m$: $v = \sqrt{2\cdot 9{,}8\cdot 30} \approx 24\,\mathrm{m/s}$.
:::

::: esempio
**Lanci verso l'alto.**
- Con quale velocità lanciare una palla di ferro perché salga di $50\,\mathrm m$? $v_0 = \sqrt{2gh} = \sqrt{2\cdot 9{,}8\cdot 50} = \sqrt{980} \approx 31{,}3\,\mathrm{m/s}$. (Il materiale e la massa non contano.)
- Una palla torna a terra dopo $2\,\mathrm s$: sale per $1\,\mathrm s$ e scende per $1\,\mathrm s$. Da $t_s = v_0/g$: $v_0 = g\,t_s = 9{,}8\cdot 1 = 9{,}8\,\mathrm{m/s}$.
- Palla da baseball ($0{,}2\,\mathrm{kg}$) lanciata in su a $20\,\mathrm{m/s}$: nel punto più alto la velocità è **zero** e l'accelerazione è diretta **verso il basso** ($g$). Sale fino a $h = 400/19{,}6 \approx 20{,}4\,\mathrm m$ in $20/9{,}8 \approx 2{,}04\,\mathrm s$.
:::

::: esempio
**Velocità a una certa quota.** Una palla di $140\,\mathrm g$ è lanciata verso l'alto a $35{,}0\,\mathrm{m/s}$. Velocità a $30{,}0\,\mathrm m$ di quota:
$$v^2 = v_0^2 - 2g\,(y - y_0) = 35^2 - 2\cdot 9{,}8\cdot 30 = 1225 - 588 = 637 \;\Rightarrow\; v = \sqrt{637} \approx 25{,}2\,\mathrm{m/s}$$
La palla passa da quella quota due volte, in salita e in discesa, con la stessa velocità in modulo. La massa non serve.
:::

::: attenzione
**I due sassi dal ponte.** Due ragazzi lanciano due sassi lungo la verticale, nello stesso istante e dalla stessa quota, ma uno arriva in acqua prima. Perché? Entrambi hanno la stessa accelerazione $g$, qualunque sia la loro massa: l'unica differenza possibile sono le **velocità iniziali**. Massa, peso e "forza di gravità diversa" non c'entrano.
:::

## Piano inclinato senza attrito
Un corpo su un piano inclinato di un angolo $\alpha$ rispetto all'orizzontale, senza attrito, scende con accelerazione costante diretta lungo il piano:
$$a = g\sin\alpha$$
Il motivo: dell'accelerazione di gravità, verticale, conta solo la componente **parallela al piano**, che vale $g\sin\alpha$ (la componente perpendicolare $g\cos\alpha$ è compensata dal piano). Per $\alpha = 90°$ si ritrova la caduta libera, per $\alpha = 0$ il corpo resta fermo.

Confrontiamo due corpi identici lasciati liberi dalla stessa altezza $h$ su due piani di pendenza diversa. La lunghezza del piano è $L = h/\sin\alpha$.
- **Tempo**: da $L = \tfrac12 a t^2$,
$$t = \sqrt{\frac{2L}{a}} = \sqrt{\frac{2h}{g\sin^2\alpha}} = \frac{1}{\sin\alpha}\sqrt{\frac{2h}{g}}$$
Più il piano è ripido, più $\sin\alpha$ è grande e più $t$ è piccolo: **arriva prima il corpo sul piano più ripido** (ha accelerazione maggiore e strada più corta).
- **Velocità finale**: da $v^2 = 2aL = 2\,g\sin\alpha\cdot\dfrac{h}{\sin\alpha} = 2gh$,
$$v = \sqrt{2gh}$$
**La stessa per i due piani**: conta solo il dislivello $h$, non la pendenza.

::: esempio
$h = 5\,\mathrm m$. Piano a $30°$: $t = \dfrac{1}{0{,}5}\sqrt{10/9{,}8} \approx 2\cdot 1{,}01 = 2{,}02\,\mathrm s$. Piano a $60°$: $t = \dfrac{1}{0{,}866}\cdot 1{,}01 \approx 1{,}17\,\mathrm s$. In entrambi i casi $v = \sqrt{2\cdot 9{,}8\cdot 5} \approx 9{,}9\,\mathrm{m/s}$.
:::

::: attenzione
- Nelle formule i segni contano: con l'asse verso l'alto, $g$ entra come $-g$; una frenata nel verso positivo ha $a < 0$.
- Convertire sempre km/h in m/s prima di usare $g$ o accelerazioni in m/s².
- $v^2 = v_0^2 + 2a\Delta x$ e $x = \tfrac{v_0+v}{2}t$ valgono solo con accelerazione costante.
- Dati come la massa del corpo spesso sono "esca": in cinematica non servono.
:::

::: esame
Chiuse: problemi numerici di moto uniforme (spazio percorso guardando fuori dal finestrino, distanza in un certo tempo, velocità costante che non cambia) e di moto uniformemente accelerato (accelerazione da spazio e tempo con partenza da fermo, spazio e tempo di frenata, accelerazione media da km/h, velocità dopo una frenata, legge oraria $S = 2t^2$ per $a = 4\,\mathrm{m/s^2}$); caduta libera (altezza da tempo di caduta, velocità di lancio per un'altezza, tempo di volo simmetrico, velocità a una quota); punto più alto ($v = 0$, accelerazione verso il basso); sassi lanciati insieme (velocità iniziali diverse); piano inclinato (prima arriva il più ripido, stessa velocità finale).

Aperte:
- **Moto rettilineo uniforme**: traiettoria rettilinea, velocità costante, accelerazione nulla; legge oraria $x = x_0 + vt$ (derivata integrando); spazi proporzionali ai tempi; grafici ($x(t)$ retta di pendenza $v$, $v(t)$ orizzontale, area = spazio); legame con il primo principio.
- **Moto uniformemente accelerato**: accelerazione costante; $v = v_0 + at$ (lineare); $x = x_0 + v_0t + \tfrac12at^2$ (parabola); $v^2 = v_0^2 + 2a\Delta x$; grafici; accelera o decelera secondo i segni; esempio della caduta libera con $g = 9{,}8\,\mathrm{m/s^2}$ uguale per tutti i corpi.
:::

::: sintesi
- Moto rettilineo: una coordinata $x$; il verso è nel segno. Velocità media vettoriale ≠ scalare media ($2\Delta x/(t_1+t_2)$ su andata e ritorno).
- Legge oraria: $x(t) = x_0 + \int v\,dt$, $v(t) = v_0 + \int a\,dt$.
- Uniforme: $a = 0$, $x = x_0 + vt$; spazi proporzionali ai tempi; $x(t)$ retta, area sotto $v(t)$ = spazio.
- Uniformemente accelerato: $v = v_0 + at$, $x = x_0 + v_0t + \tfrac12at^2$, $v^2 = v_0^2 + 2a\Delta x$, $\Delta x = \tfrac{v_0 + v}{2}t$.
- Da fermo: $a = 2x/t^2$. Frenata: $t = v_0/a$, $d = v_0^2/(2a)$.
- Gravità: $g = 9{,}8\,\mathrm{m/s^2}$ verso il basso, uguale per tutti; $h = \tfrac12gt^2$, $v = \sqrt{2gh}$, $h_{max} = v_0^2/(2g)$, $t_s = v_0/g$, volo $2v_0/g$.
- Punto più alto: $v = 0$ ma $a = g$ verso il basso.
- Piano inclinato liscio: $a = g\sin\alpha$; prima arriva il più ripido; stessa velocità finale $\sqrt{2gh}$.
:::

=== 7 dispense
SLIDES: 06, 07
# Lezione 07 — Moto nel piano: il proiettile e l'introduzione al moto circolare

Passiamo dal moto su una retta al **moto in un piano**. L'idea chiave è che un moto piano si può scomporre in **due moti rettilinei indipendenti** lungo gli assi $x$ e $y$, ciascuno descritto con le formule della lezione 6. L'esempio più importante è il **moto del proiettile**: un corpo lanciato che si muove solo sotto l'azione della gravità. Nella seconda parte si introduce il **moto circolare** e si spiega perché, anche quando la velocità è costante in modulo, c'è un'accelerazione (diretta verso il centro).

## Il moto in un piano
Nel piano la posizione si può dare in coordinate cartesiane, $\vec r(t) = [x(t),\ y(t)]$, oppure polari, $\vec r(t) = [r(t),\ \theta(t)]$, legate da $x = r\cos\theta$, $y = r\sin\theta$ (lezione 5).

In coordinate cartesiane basta estendere a due dimensioni quanto visto per il moto rettilineo. In ogni istante:
$$\vec v = v_x\,\hat i + v_y\,\hat j \qquad v_x = \frac{dx}{dt},\quad v_y = \frac{dy}{dt}$$
$$\vec a = a_x\,\hat i + a_y\,\hat j \qquad a_x = \frac{dv_x}{dt} = \frac{d^2x}{dt^2},\quad a_y = \frac{dv_y}{dt} = \frac{d^2y}{dt^2}$$
Le equazioni per $x$ e per $y$ sono **separate**: ciò che succede lungo $x$ dipende solo da $a_x$, ciò che succede lungo $y$ solo da $a_y$. Il **tempo** è l'unica cosa che i due moti hanno in comune. Questo è il **principio di indipendenza dei moti** (Galileo).

## Il moto del proiettile
### Che cos'è un proiettile
Si chiama **proiettile** qualsiasi corpo lanciato con una velocità che ha una **componente orizzontale** (un pallone calciato, un sasso lanciato, una palla di cannone). Il suo moto fu spiegato da **Galileo**. Lo studiamo con queste ipotesi:
- il corpo è **puntiforme**;
- non c'è **resistenza dell'aria**;
- l'unica accelerazione è quella di **gravità**, costante, verticale verso il basso, di modulo $g = 9{,}8\,\mathrm{m/s^2}$.

### Due moti indipendenti
Poiché l'accelerazione è solo verticale:
- lungo l'**asse orizzontale** $x$: $a_x = 0$. Moto **rettilineo uniforme**, legge $s = s_0 + v\,t$; la componente $v_x$ della velocità **resta costante** per tutto il volo;
- lungo l'**asse verticale** $y$: $a_y = -g$ (con $y$ verso l'alto). Moto **uniformemente accelerato**, legge $s = s_0 + v_0t + \tfrac12at^2$; cambia solo $v_y$.

L'accelerazione è **sempre la stessa**, $\vec g$, diretta verso il basso, in **ogni punto** della traiettoria, compreso il punto più alto. Non dipende dalla massa del corpo né da quanto forte è stato lanciato: la forza del lancio agisce solo durante il contatto e determina la velocità iniziale, poi cessa.

La traiettoria è una **parabola**.

## Lancio orizzontale da un'altezza
È il caso studiato nella dispensa: il proiettile viene sparato **orizzontalmente** con velocità $v_0$ da un'altezza $h$.

### Leggi orarie
Si mette l'origine nel punto di lancio, l'asse $x$ orizzontale nel verso del lancio e (per comodità) l'asse $y$ **verso il basso**, così $y$ misura di quanto il corpo è sceso. Le velocità iniziali sono $v_{0x} = v_0$ e $v_{0y} = 0$:
$$x = v_0\,t \qquad y = \tfrac12\,g\,t^2$$
dove:
- $x$ = distanza orizzontale dal punto di lancio (m);
- $y$ = quanto il corpo è sceso sotto la quota di lancio (m);
- $v_0$ = velocità di lancio orizzontale (m/s);
- $g = 9{,}8\,\mathrm{m/s^2}$; $t$ = tempo dal lancio (s).

### Equazione della traiettoria
Si elimina il tempo. Dalla prima equazione $t = x/v_0$; sostituendo nella seconda:
$$y = \frac12\,g\left(\frac{x}{v_0}\right)^2 = \frac{g}{2v_0^2}\,x^2$$
È l'equazione di una **parabola** ($y = k\,x^2$ con $k = g/(2v_0^2)$) con il vertice nel punto di lancio. Con l'asse $y$ verso l'alto e l'origine a terra si scrive $y = h - \dfrac{g}{2v_0^2}x^2$. Più $v_0$ è grande, più la parabola è "aperta".

### Tempo di volo
Il corpo tocca terra quando è sceso di $h$: si pone $y = h$ nella seconda equazione, $h = \tfrac12 g t^2$, e si ricava
$$t_v = \sqrt{\frac{2h}{g}}$$
Il tempo di volo **non dipende dalla velocità di lancio**, ma **solo dall'altezza** $h$ (e da $g$). È **lo stesso tempo di caduta** di un corpo lasciato libero di cadere verticalmente dalla stessa altezza: in verticale i due corpi partono entrambi con $v_y = 0$ e hanno la stessa accelerazione.

### Gittata
La **gittata** è la distanza orizzontale percorsa fino all'impatto. Si sostituisce il tempo di volo nella prima equazione:
$$x_G = v_0\,t_v = v_0\,\sqrt{\frac{2h}{g}}$$
A parità di altezza la gittata è **direttamente proporzionale alla velocità di lancio**: velocità doppia, gittata doppia.

### Velocità all'impatto
La componente orizzontale resta $v_x = v_0$ per tutto il volo. Quella verticale cresce come in una caduta libera: $v_y = g\,t$; all'impatto $v_y = g\,t_v = g\sqrt{2h/g} = \sqrt{2gh}$. Con Pitagora:
$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{v_0^2 + 2gh}$$
L'angolo $\beta$ della velocità d'impatto sotto l'orizzontale è dato da $\tan\beta = \dfrac{v_y}{v_x} = \dfrac{\sqrt{2gh}}{v_0}$.

::: esempio
**Proiettile dalla torre (esercizio della dispensa).** Un proiettile è sparato orizzontalmente dall'alto di una torre di $25\,\mathrm m$ a $200\,\mathrm{m/s}$. Calcolare tempo di caduta, gittata e velocità all'impatto (la dispensa usa $g = 9{,}81\,\mathrm{m/s^2}$).

Dati: $h = 25\,\mathrm m$, $v_0 = 200\,\mathrm{m/s}$.
1. Tempo di volo: $t_v = \sqrt{\dfrac{2\cdot 25}{9{,}81}} = \sqrt{5{,}10} \approx 2{,}26\,\mathrm s$.
2. Gittata: $x_G = v_0\,t_v = 200\cdot 2{,}26 \approx 452\,\mathrm m$.
3. Velocità verticale all'impatto: $v_y = g\,t_v = 9{,}81\cdot 2{,}26 \approx 22{,}1\,\mathrm{m/s}$ (oppure $\sqrt{2\cdot 9{,}81\cdot 25} = \sqrt{490{,}5} \approx 22{,}1$).
4. Velocità totale: $v = \sqrt{200^2 + 22{,}1^2} = \sqrt{40\,000 + 490} \approx 201\,\mathrm{m/s}$.

Il tempo di caduta (2,26 s) sarebbe identico anche con $v_0 = 10\,\mathrm{m/s}$.
:::

::: esempio
**Gittata da una torre di 40 m.** $v_0 = 150\,\mathrm{m/s}$, $h = 40\,\mathrm m$:
$$t_v = \sqrt{\frac{2\cdot 40}{9{,}8}} = \sqrt{8{,}16} \approx 2{,}86\,\mathrm s \qquad x_G = 150\cdot 2{,}857 \approx 428\,\mathrm m$$
:::

::: esempio
**Velocità di lancio dall'angolo d'impatto.** Una pietra lanciata orizzontalmente da un'altura di $20\,\mathrm m$ sopra il mare entra in acqua con velocità inclinata di $45°$ rispetto alla verticale. Con che velocità è stata lanciata?
1. All'impatto $v_y = \sqrt{2gh} = \sqrt{2\cdot 9{,}8\cdot 20} = \sqrt{392} \approx 19{,}8\,\mathrm{m/s}$.
2. A $45°$ (dalla verticale, quindi anche dall'orizzontale) le due componenti sono uguali: $v_x = v_y$.
3. Ma $v_x$ è costante ed è la velocità di lancio: $v_0 = 19{,}8\,\mathrm{m/s}$.
:::

::: attenzione
**Il proiettile e la pietra.** Un fucile spara orizzontalmente un proiettile; nello stesso istante una pesante pietra viene lasciata cadere dalla stessa altezza. **Toccano terra insieme**: in verticale entrambi partono con $v_y = 0$ e hanno la stessa accelerazione $g$; la grande velocità orizzontale del proiettile non cambia il suo moto verticale, e la massa non conta.
:::

## Lancio obliquo
Ora il corpo parte da terra (origine, $y$ verso l'alto) con velocità $v_0$ inclinata di un angolo $\theta$ sull'orizzontale.

### Componenti e leggi orarie
Le componenti iniziali della velocità si ricavano con la trigonometria:
$$v_{0x} = v_0\cos\theta \qquad v_{0y} = v_0\sin\theta$$
Lungo $x$ il moto è uniforme, lungo $y$ uniformemente accelerato con $a_y = -g$:
$$v_x = v_0\cos\theta\ \ (\text{costante}) \qquad v_y = v_0\sin\theta - g\,t$$
$$x = v_0\cos\theta\;t \qquad y = v_0\sin\theta\;t - \tfrac12\,g\,t^2$$

**Traiettoria.** Da $t = x/(v_0\cos\theta)$, sostituendo:
$$y = x\tan\theta - \frac{g}{2v_0^2\cos^2\theta}\,x^2$$
una parabola con la concavità verso il basso.

### Punto più alto
Nel punto più alto la velocità è **orizzontale**: $v_y = 0$ (mentre $v_x = v_0\cos\theta$ non è zero).
- **Tempo di salita**: $0 = v_0\sin\theta - g\,t_{max} \Rightarrow t_{max} = \dfrac{v_0\sin\theta}{g}$.
- **Altezza massima**: si sostituisce $t_{max}$ in $y(t)$:
$$h_{max} = v_0\sin\theta\cdot\frac{v_0\sin\theta}{g} - \frac12 g\frac{(v_0\sin\theta)^2}{g^2} = \frac{(v_0\sin\theta)^2}{g} - \frac{(v_0\sin\theta)^2}{2g} = \frac{(v_0\sin\theta)^2}{2g}$$
(è la stessa formula del lancio verticale, con la sola componente verticale $v_0\sin\theta$).

### Tempo di volo e gittata
Il corpo torna alla quota di partenza quando $y = 0$:
$$t\left(v_0\sin\theta - \tfrac12 g t\right) = 0 \;\Rightarrow\; t = 0 \ \text{(partenza)} \quad \text{oppure} \quad t_v = \frac{2v_0\sin\theta}{g} = 2\,t_{max}$$
Il moto è simmetrico: sale e scende nello stesso tempo.

La **gittata** è la distanza orizzontale percorsa tra il punto di lancio e il punto in cui il proiettile torna **alla stessa quota**:
$$G = v_{0x}\,t_v = v_0\cos\theta\cdot\frac{2v_0\sin\theta}{g} = \frac{v_0^2\,(2\sin\theta\cos\theta)}{g} = \frac{v_0^2\,\sin(2\theta)}{g}$$
(si è usata la formula di duplicazione $2\sin\theta\cos\theta = \sin 2\theta$), dove $v_0$ = velocità di lancio (m/s), $\theta$ = angolo di lancio, $g = 9{,}8\,\mathrm{m/s^2}$.

Conseguenze:
- la gittata dipende **solo dalla velocità di lancio e dall'angolo** (e da $g$), **non dalla massa**;
- è **massima per $\theta = 45°$**, perché lì $\sin 2\theta = \sin 90° = 1$: $G_{max} = v_0^2/g$;
- angoli **complementari** ($30°$ e $60°$, $20°$ e $70°$) danno la **stessa gittata**, perché $\sin(2\theta) = \sin(180° - 2\theta)$; quello più alto sale di più e resta in aria più a lungo.

::: esempio
**Pallone calciato** a $20\,\mathrm{m/s}$ con angolo di $30°$.
1. $v_{0y} = 20\sin 30° = 20\cdot 0{,}5 = 10\,\mathrm{m/s}$; $v_{0x} = 20\cos 30° \approx 17{,}3\,\mathrm{m/s}$.
2. Tempo per raggiungere l'altezza massima: $t_{max} = 10/9{,}8 \approx 1{,}0\,\mathrm s$.
3. Altezza massima: $h_{max} = 10^2/(2\cdot 9{,}8) \approx 5{,}1\,\mathrm m$.
4. Gittata: $G = 20^2\sin 60°/9{,}8 = 400\cdot 0{,}866/9{,}8 \approx 35{,}3\,\mathrm m$ (controllo: $v_{0x}\cdot 2t_{max} = 17{,}3\cdot 2{,}04 \approx 35{,}3$).
:::

::: esempio
**Velocità orizzontale in un istante qualsiasi.** Proiettile lanciato a $30\,\mathrm{m/s}$ a $60°$ sul suolo. Dopo $1{,}6\,\mathrm s$ la velocità orizzontale è ancora quella iniziale:
$$v_x = 30\cos 60° = 30\cdot 0{,}5 = 15\,\mathrm{m/s}$$
Il tempo è un dato inutile per $v_x$: cambierebbe solo $v_y = 30\sin 60° - 9{,}8\cdot 1{,}6 \approx 26 - 15{,}7 = 10{,}3\,\mathrm{m/s}$.
:::

::: esempio
**Modulo della velocità dopo un certo tempo.** In un istante il proiettile ha $v_x = 30\,\mathrm{m/s}$ e $v_y = 40\,\mathrm{m/s}$ (verso l'alto). Dopo $1{,}8\,\mathrm s$:
1. $v_x = 30\,\mathrm{m/s}$ (non cambia);
2. $v_y = 40 - 9{,}8\cdot 1{,}8 = 40 - 17{,}6 = 22{,}4\,\mathrm{m/s}$;
3. $v = \sqrt{30^2 + 22{,}4^2} = \sqrt{900 + 500} \approx 37\,\mathrm{m/s}$.

(All'inizio il modulo era $\sqrt{900 + 1600} = 50\,\mathrm{m/s}$: il proiettile sta salendo e rallenta.)
:::

::: attenzione
- La gravità cambia **solo** $v_y$; $v_x$ resta costante per tutto il volo.
- Il proiettile **non** "comincia a cadere quando finisce la spinta": cade fin dall'inizio, perché $g$ agisce dal primo istante.
- Nel punto più alto la velocità **non è zero** (resta $v_x$), ma l'accelerazione è $g$ verso il basso.
- La formula $G = v_0^2\sin 2\theta/g$ vale solo per ritorno **alla stessa quota**; per il lancio orizzontale da un'altezza si usa $v_0\sqrt{2h/g}$.
:::

## Il moto circolare: perché c'è un'accelerazione
Il **moto circolare** è un moto piano in cui la traiettoria è una **circonferenza**. Se il **modulo** della velocità è costante il moto è **circolare uniforme**; altrimenti è **circolare vario**. Conviene descriverlo in coordinate polari: il raggio $r = R$ è fisso e il moto dipende solo dall'angolo $\theta(t)$.

### La velocità cambia direzione
Nel moto circolare uniforme il modulo $v$ della velocità è costante, ma la velocità è un **vettore**, ed è sempre **tangente** alla circonferenza. Man mano che il punto gira, la tangente ruota: la **direzione della velocità cambia continuamente**. Una velocità che cambia direzione è una velocità che cambia; e l'accelerazione è proprio la variazione del vettore velocità nel tempo. Quindi **c'è un'accelerazione anche se il modulo della velocità non cambia**.

### Quanto vale e dove punta (derivazione geometrica)
Siano $\vec v_1$ e $\vec v_2$ le velocità in due istanti separati da $\Delta t$. Hanno lo stesso modulo $v$ e formano tra loro lo stesso angolo $\Delta\theta$ di cui ha ruotato il raggio (perché ciascuna è perpendicolare al suo raggio). Mettendole con la coda nello stesso punto, $\vec v_1$, $\vec v_2$ e $\Delta\vec v = \vec v_2 - \vec v_1$ formano un triangolo isoscele con angolo al vertice $\Delta\theta$:
$$|\Delta\vec v| = 2v\sin\frac{\Delta\theta}{2} \approx v\,\Delta\theta \quad\text{per } \Delta\theta \text{ piccolo}$$
In un tempo $\Delta t$ il punto percorre l'arco $v\,\Delta t = R\,\Delta\theta$, quindi $\Delta\theta = v\Delta t/R$. Allora
$$\frac{|\Delta\vec v|}{\Delta t} \approx \frac{v\,\Delta\theta}{\Delta t} = \frac{v}{\Delta t}\cdot\frac{v\,\Delta t}{R} = \frac{v^2}{R}$$
Al limite $\Delta t \to 0$, $\Delta\vec v$ diventa **perpendicolare** alla velocità e punta **verso il centro** della circonferenza. Questa accelerazione si chiama **centripeta**:
$$a_c = \frac{v^2}{R} = \omega^2 R$$
dove:
- $a_c$ = accelerazione centripeta (m/s²);
- $v$ = modulo della velocità (m/s);
- $R$ = raggio della circonferenza (m);
- $\omega$ = velocità angolare (rad/s), con $v = \omega R$.

Il suo **modulo è costante**, la sua **direzione ruota** con il punto (punta sempre al centro). Per mantenere un corpo in moto circolare serve quindi una **forza** diretta verso il centro (tensione di un filo, attrito delle gomme in curva, gravità per i pianeti), di modulo $F = m\,v^2/R$.

Se anche il modulo della velocità cambia (moto circolare vario) si aggiunge un'accelerazione **tangenziale** $a_t = dv/dt$, lungo la velocità.

## Velocità angolare
La **velocità angolare** dice quanto angolo spazza il raggio vettore in un secondo:
$$\omega = \frac{d\theta}{dt}$$
Si misura in **rad/s** ed è detta anche **pulsazione**. Nel moto circolare uniforme è costante e, poiché in un periodo $T$ si spazza un giro ($2\pi$ rad):
$$\omega = \frac{2\pi}{T} = 2\pi f \qquad v = \omega\,R$$
con $T$ = periodo (s) e $f$ = frequenza (Hz). (Approfondimento nella lezione 8.)

::: esempio
**Centrifuga.** Il rotore compie $60\,000$ giri al minuto. In un secondo: $60\,000/60 = 1000$ giri, quindi $f = 1000\,\mathrm{Hz}$.
$$\omega = 2\pi f = 2\pi\cdot 1000 \approx 6283\,\mathrm{rad/s}$$
:::

::: esame
Chiuse: accelerazione nel punto più alto (verso il basso, è $g$); modulo della velocità dopo un tempo (aggiornare solo $v_y$, poi Pitagora); tempo per l'altezza massima ($v_0\sin\theta/g$); velocità orizzontale in un istante qualsiasi ($v_0\cos\theta$, costante); velocità di lancio dall'angolo di impatto; tempo di caduta da una torre ($\sqrt{2h/g}$, indipendente da $v_0$); gittata dalla torre ($v_0\sqrt{2h/g}$); proiettile e pietra arrivano insieme; traiettoria parabolica; la componente $x$ della velocità resta costante; la gittata dipende da angolo e velocità di lancio; velocità angolare di una centrifuga in giri al minuto.

Aperte:
- **Gittata**: distanza orizzontale tra lancio e ritorno alla stessa quota; scomposizione $v_{0x} = v_0\cos\theta$, $v_{0y} = v_0\sin\theta$; tempo di volo $2v_0\sin\theta/g$; $G = v_0^2\sin 2\theta/g$; massima a $45°$, uguale per angoli complementari, indipendente dalla massa.
- **Proiettile lanciato orizzontalmente**: moto uniforme in $x$ ($x = v_0t$) e uniformemente accelerato in $y$ ($y = \tfrac12gt^2$); traiettoria parabolica $y = gx^2/(2v_0^2)$; tempo di caduta $\sqrt{2h/g}$ (solo dall'altezza, come in caduta libera); gittata $v_0\sqrt{2h/g}$; velocità d'impatto $\sqrt{v_0^2 + 2gh}$.
- **Perché nel moto circolare uniforme c'è accelerazione**: la velocità è un vettore tangente, la sua direzione cambia; l'accelerazione è centripeta, perpendicolare alla velocità, verso il centro, $a_c = v^2/R = \omega^2R$, modulo costante; serve una forza centripeta $mv^2/R$.
:::

::: sintesi
- Moto piano = due moti indipendenti lungo $x$ e $y$, legati solo dal tempo.
- Proiettile: $a_x = 0$ (uniforme, $v_x$ costante), $a_y = -g$ (uniformemente accelerato); traiettoria parabolica; accelerazione sempre $g$ verso il basso, anche in cima; non dipende dalla massa.
- Lancio orizzontale da $h$: $x = v_0t$, $y = \tfrac12gt^2$, $y = gx^2/(2v_0^2)$; $t_v = \sqrt{2h/g}$ (solo dall'altezza); $x_G = v_0\sqrt{2h/g}$; $v_{imp} = \sqrt{v_0^2 + 2gh}$.
- Lancio obliquo: $t_{max} = v_0\sin\theta/g$, $h_{max} = (v_0\sin\theta)^2/(2g)$, $t_v = 2t_{max}$, $G = v_0^2\sin 2\theta/g$ (massima a 45°).
- Moto circolare uniforme: cambia la direzione di $\vec v$ ⇒ $a_c = v^2/R = \omega^2R$ verso il centro; $\omega = d\theta/dt = 2\pi/T = 2\pi f$; $v = \omega R$.
:::

=== 8 dispense
SLIDES: 07, 08
# Lezione 08 — Moto circolare uniforme e moti curvilinei

Questa lezione approfondisce il **moto circolare**, introdotto alla fine della lezione 7. Si definiscono con precisione periodo, frequenza e velocità angolare, si distingue la velocità angolare dalla velocità periferica, si ricava l'accelerazione centripeta anche con le coordinate cartesiane e la si estende a qualsiasi traiettoria curva tramite il **raggio di curvatura**. Si vede poi il **moto circolare vario** (accelerazione angolare) e la **notazione vettoriale** ($\vec v = \vec\omega\times\vec r$). Chiude il ripasso della cinematica (dispensa 08). I **moti relativi**, che la dispensa 07 tratta subito dopo, sono l'argomento della lezione successiva.

## Il moto circolare uniforme
Un punto si muove su una **circonferenza** di raggio $R$ con velocità di **modulo costante**.
- Il **modulo** della velocità non cambia.
- La **direzione** della velocità cambia di continuo: è sempre **tangente** alla circonferenza.
- Quindi c'è un'accelerazione, ed è solo **centripeta** (diretta verso il centro), perché la componente tangenziale (che cambierebbe il modulo) è nulla.

È anche un moto **periodico**: il punto ripassa per la stessa posizione a intervalli regolari.

### Legge oraria in coordinate polari
Conviene descrivere il moto in coordinate polari con l'origine nel centro: la distanza $r = R$ è fissa e cambia solo l'angolo $\theta(t)$.

Lungo la traiettoria la velocità scalare $v$ è costante, quindi l'**ascissa curvilinea** segue la legge del moto uniforme:
$$s(t) = s_0 + v\,t$$
L'arco e l'angolo (in radianti) sono legati da $s = R\,\theta$; per spostamenti piccolissimi $ds = v\,dt = R\,d\theta$. Dividendo per $R$:
$$\theta(t) = \theta_0 + \omega\,t \qquad \text{con} \qquad \omega = \frac{d\theta}{dt} = \frac{v}{R}$$
dove $\theta_0$ è l'angolo all'istante $t = 0$. La legge oraria dell'angolo è **lineare**, proprio come quella della posizione nel moto rettilineo uniforme: $\omega$ fa la parte della velocità.

## Periodo, frequenza, pulsazione
- **Periodo** $T$: il **tempo impiegato a fare un giro completo**. Unità SI: **secondo** (s).
- **Frequenza** $f$ (indicata anche con $\nu$): il **numero di giri compiuti in un secondo**. È l'inverso del periodo:
$$f = \frac{1}{T}$$
Unità: **hertz**, $1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$ (un giro al secondo).
- **Velocità angolare** (o **pulsazione**) $\omega$: l'**angolo spazzato in un secondo**, in **rad/s**. In un periodo il raggio spazza un giro, cioè $2\pi$ radianti, quindi
$$\omega = \frac{2\pi}{T} = 2\pi f \qquad T = \frac{1}{f} = \frac{2\pi}{\omega}$$

Periodo breve ⇔ frequenza alta ⇔ velocità angolare grande.

::: esempio
**Le lancette di un orologio.**
- Secondi: un giro in $T = 60\,\mathrm s$ ⇒ $f = 1/60 \approx 0{,}0167\,\mathrm{Hz}$, $\omega = 2\pi/60 \approx 0{,}105\,\mathrm{rad/s}$.
- Minuti: $T = 60\,\mathrm{min} = 3600\,\mathrm s$ ⇒ $f \approx 2{,}8\cdot 10^{-4}\,\mathrm{Hz}$.
- Ore: un giro del quadrante in $12\,\mathrm h = 43\,200\,\mathrm s$ ⇒ $f \approx 2{,}3\cdot 10^{-5}\,\mathrm{Hz}$.

Il periodo più breve è quello della lancetta dei secondi, che quindi gira con la **frequenza maggiore**.
:::

::: esempio
**Disco a 45 giri al minuto.** In un secondo fa $45/60 = 0{,}75$ giri: $f = 0{,}75\,\mathrm{Hz}$. Periodo:
$$T = \frac{1}{0{,}75} \approx 1{,}33\,\mathrm s \approx 1{,}3\,\mathrm s$$
(oppure: $60\,\mathrm s / 45\ \text{giri} = 1{,}33\,\mathrm s$ a giro).
:::

::: esempio
**La Terra che ruota su se stessa** (dalla dispensa). Un giro ($2\pi$) in un giorno, $T = 24\,\mathrm h = 86\,400\,\mathrm s$:
$$\omega = \frac{2\pi}{86\,400} \approx 7{,}27\cdot 10^{-5}\,\mathrm{rad/s}$$
:::

## Velocità angolare e velocità periferica
Sono **due grandezze diverse**, da non confondere.
- **Velocità angolare** $\omega$ (rad/s): **quanto angolo** spazza il raggio in un secondo. In un corpo rigido che ruota (un disco, una ruota, una lancetta) è **la stessa per tutti i punti**: in un giro tutti spazzano $2\pi$ nello stesso tempo.
- **Velocità periferica** (o tangenziale, o lineare) $v$ (m/s): **quanta strada** fa il punto in un secondo lungo la circonferenza. È un vettore **tangente** alla traiettoria. **Cresce con la distanza dal centro**.

Il legame si ricava pensando a un giro: il punto percorre la circonferenza $2\pi R$ nel tempo $T$, quindi
$$v = \frac{2\pi R}{T} = 2\pi R f = \omega\,R$$
dove:
- $v$ = velocità periferica (m/s);
- $R$ = raggio, cioè distanza del punto dal centro di rotazione (m);
- $\omega$ = velocità angolare (rad/s); $T$ = periodo (s); $f$ = frequenza (Hz).

A parità di $\omega$, i punti più lontani dall'asse sono più veloci: sulla lancetta di un orologio la punta è più veloce dei punti vicino al perno; su una giostra chi sta al bordo va più veloce di chi sta al centro, anche se fanno un giro nello stesso tempo.

::: esempio
**Ruota panoramica**, raggio $R = 50\,\mathrm m$, un giro in $T = 60\,\mathrm s$:
$$v = \frac{2\pi R}{T} = \frac{2\pi\cdot 50}{60} = \frac{314{,}2}{60} \approx 5{,}24\,\mathrm{m/s}$$
:::

::: esempio
**Velocità da $\omega$ e raggio.**
- Asta lunga $102\,\mathrm{cm} = 1{,}02\,\mathrm m$ che ruota attorno a un estremo a $12\,\mathrm{rad/s}$: l'altro estremo è a distanza $1{,}02\,\mathrm m$ dall'asse, quindi $v = \omega R = 12\cdot 1{,}02 = 12{,}24\,\mathrm{m/s}$. (Attenzione a convertire i centimetri in metri.)
- Lancetta dei secondi lunga $4\,\mathrm{cm} = 0{,}04\,\mathrm m$: $\omega = 2\pi/60 \approx 0{,}105\,\mathrm{rad/s}$, $v = 0{,}105\cdot 0{,}04 \approx 0{,}0042\,\mathrm{m/s}$ (4,2 mm al secondo).
- $\omega = 0{,}66\,\mathrm{rad/s}$ su un raggio di $30\,\mathrm m$: $v = 0{,}66\cdot 30 = 19{,}8 \approx 20\,\mathrm{m/s}$.
- Al contrario, $v = 20\,\mathrm{m/s}$ su $R = 30\,\mathrm m$: $\omega = v/R = 20/30 \approx 0{,}66\,\mathrm{rad/s}$ (0,667).
:::

::: esempio
**Velocità da periodo o frequenza.**
- Circonferenza di raggio $6\,\mathrm m$ percorsa in $8\,\mathrm s$: $v = 2\pi\cdot 6/8 = 37{,}7/8 \approx 4{,}71\,\mathrm{m/s}$.
- Frequenza $10\,\mathrm{Hz}$ su raggio $40\,\mathrm{cm} = 0{,}4\,\mathrm m$: $v = 2\pi R f = 2\pi\cdot 0{,}4\cdot 10 \approx 25{,}1\,\mathrm{m/s}$.
:::

::: esempio
**La valvola della bicicletta.** La valvola gira a $12{,}56\,\mathrm{m/s}$ su una ruota di **diametro** $50\,\mathrm{cm}$ (raggio $0{,}25\,\mathrm m$). Quanto dura un giro?
1. Circonferenza: $2\pi R = \pi d = \pi\cdot 0{,}5 \approx 1{,}57\,\mathrm m$.
2. Periodo: $T = \dfrac{2\pi R}{v} = \dfrac{1{,}57}{12{,}56} = 0{,}125\,\mathrm s$.

(Errore frequente: usare il diametro come raggio e ottenere il doppio.)
:::

::: attenzione
Non confondere le unità: $\omega$ in **rad/s**, $v$ in **m/s**, $f$ in **Hz**, $T$ in **s**. Un valore come "0,105 m/s" per la velocità angolare della lancetta è sbagliato per l'unità, anche se il numero è giusto. E l'unità SI del periodo è il **secondo** (non l'hertz, che è della frequenza).
:::

## Accelerazione centripeta
Nel moto circolare uniforme il modulo della velocità è costante, quindi l'unica componente dell'accelerazione è quella **centripeta**: diretta normalmente alla traiettoria, cioè **verso il centro**, **perpendicolare alla velocità**. Cambia la direzione della velocità, non il suo modulo.
$$a_c = \frac{v^2}{R} = \omega^2 R = \omega\,v$$
dove:
- $a_c$ = accelerazione centripeta (m/s²);
- $v$ = velocità periferica (m/s);
- $R$ = raggio (m);
- $\omega$ = velocità angolare (rad/s).

Le tre forme sono equivalenti: basta sostituire $v = \omega R$ (per esempio $v^2/R = \omega^2R^2/R = \omega^2R$). Il **modulo è costante**, la **direzione ruota** con il punto.

### Derivazione in coordinate cartesiane
Con il centro nell'origine e $\theta = \omega t + \theta_0$, la posizione è
$$x(t) = R\cos(\omega t + \theta_0) \qquad y(t) = R\sin(\omega t + \theta_0)$$
Derivando una volta (regola della catena, la derivata di $\omega t + \theta_0$ è $\omega$):
$$v_x = -\omega R\sin(\omega t + \theta_0) \qquad v_y = \omega R\cos(\omega t + \theta_0)$$
Il modulo è $\sqrt{\omega^2R^2(\sin^2 + \cos^2)} = \omega R$, come atteso, e la velocità è perpendicolare al raggio (il loro prodotto scalare $x v_x + y v_y$ vale zero). Derivando ancora:
$$a_x = -\omega^2 R\cos(\omega t + \theta_0) = -\omega^2 x \qquad a_y = -\omega^2 R\sin(\omega t + \theta_0) = -\omega^2 y$$
cioè, in forma vettoriale,
$$\vec a = -\omega^2\,\vec r$$
Il segno meno dice che l'accelerazione è **opposta al vettore posizione**, quindi diretta **verso il centro**; il modulo è $\omega^2 R$. È la conferma della formula ottenuta geometricamente nella lezione 7.

(Nota: la proiezione del moto circolare uniforme su un asse, $x(t) = R\cos(\omega t + \theta_0)$, è un moto avanti e indietro con $a_x = -\omega^2 x$: è il **moto armonico**, studiato più avanti nel corso.)

::: esempio
**Calcoli di accelerazione centripeta.**
- $v = 10\,\mathrm{m/s}$ su $R = 50\,\mathrm m$: $a_c = 100/50 = 2\,\mathrm{m/s^2}$.
- Ruota panoramica ($v = 5{,}24\,\mathrm{m/s}$, $R = 50\,\mathrm m$): $a_c = 5{,}24^2/50 = 27{,}4/50 \approx 0{,}55\,\mathrm{m/s^2}$. Oppure $\omega = 2\pi/60 = 0{,}105\,\mathrm{rad/s}$ e $a_c = \omega^2R = 0{,}01097\cdot 50 \approx 0{,}55\,\mathrm{m/s^2}$.
:::

::: esempio
**L'accelerazione della Luna** (dalla dispensa). La Luna fa un giro attorno alla Terra in $27{,}3$ giorni su un'orbita circa circolare di raggio $r = 3{,}82\cdot 10^5\,\mathrm{km}$.
1. Periodo in secondi: $T = 27{,}3\cdot 86\,400 \approx 2{,}36\cdot 10^6\,\mathrm s$.
2. Raggio in metri: $r = 3{,}82\cdot 10^8\,\mathrm m$.
3. $\omega = 2\pi/T = 6{,}283/2{,}36\cdot 10^6 \approx 2{,}66\cdot 10^{-6}\,\mathrm{rad/s}$.
4. $a = \omega^2 r = r\left(\dfrac{2\pi}{T}\right)^2 = 3{,}82\cdot 10^8\cdot 7{,}08\cdot 10^{-12} \approx 2{,}7\cdot 10^{-3}\,\mathrm{m/s^2}$.

È circa $1/3600$ di $g$: la gravità terrestre, a quella distanza (60 raggi terrestri), è indebolita di $60^2$ volte.
:::

### La forza che serve
Per la seconda legge di Newton ($\vec F = m\vec a$), per tenere un corpo di massa $m$ su una circonferenza serve una **forza risultante diretta verso il centro** (forza centripeta):
$$F_c = m\,a_c = \frac{m\,v^2}{R} = m\,\omega^2 R$$
dove $m$ = massa (kg) e $F_c$ in newton. Questa forza è fornita da qualcosa di concreto: la tensione di un filo o di un cavo, l'attrito delle gomme in curva, la gravità per la Luna e i pianeti. Se la forza sparisce, il corpo prosegue in linea retta lungo la tangente.

::: esempio
Una massa di $1\,\mathrm{kg}$ percorre una circonferenza di raggio $2\,\mathrm m$ a $10\,\mathrm{m/s}$, trattenuta da un cavo. La tensione del cavo (la forza esercitata su di esso) è
$$F = \frac{m\,v^2}{R} = \frac{1\cdot 10^2}{2} = 50\,\mathrm N$$
:::

::: esempio
**La palla da baseball dopo la battuta.** Dopo che la palla ha lasciato la mazza, trascurando l'aria, l'unica forza che agisce è il **peso**: $a = F/m = mg/m = g$. L'accelerazione **non dipende** dalla forza impressa dal battitore: quella forza agisce solo durante il contatto e determina la velocità iniziale (quindi gittata e altezza), poi cessa.
:::

## Accelerazione tangenziale e centripeta nei moti curvi
Un tratto piccolissimo di una traiettoria curva qualsiasi si può approssimare con un arco di circonferenza: quella che meglio si adatta alla curva in quel punto, detta **cerchio osculatore**. Il suo raggio è il **raggio di curvatura** $R$ della traiettoria in quel punto (piccolo dove la curva è stretta, infinito in un tratto rettilineo); il suo centro è il **centro di curvatura**. Allora l'espressione dell'accelerazione centripeta vale per **qualsiasi moto curvo**, con $R$ = raggio di curvatura locale.

In un moto curvilineo qualunque l'accelerazione ha due componenti (lezione 5):
- **tangenziale** $a_t = \dfrac{dv}{dt}$: diretta lungo la tangente (parallela o antiparallela alla velocità); descrive la variazione del **modulo** della velocità; è nulla se e solo se il punto si muove con velocità costante in modulo;
- **centripeta** (o normale) $a_n = \dfrac{v^2}{R}$: perpendicolare alla velocità, diretta verso il **centro di curvatura**; descrive la variazione della **direzione** della velocità; è nulla solo nei tratti rettilinei.

L'accelerazione totale è $\vec a = \vec a_t + \vec a_n$, con modulo
$$a = \sqrt{a_t^2 + a_n^2}$$
Casi limite: nel **moto circolare uniforme** c'è solo $a_n$; nel **moto rettilineo vario** c'è solo $a_t$; nel moto rettilineo uniforme nessuna delle due.

Formula inversa utile: noti $v$ e $a_n$ in un punto, il raggio di curvatura è $R = v^2/a_n$.

::: esempio
**Raggio di curvatura nel punto più alto** (esercizio della dispensa 08). Un proiettile è lanciato dall'origine a $v_0 = 2\,\mathrm{m/s}$, a $45°$ con l'asse $x$. In quale punto l'accelerazione normale è massima, e quanto vale lì il raggio di curvatura?
1. L'accelerazione totale è sempre $\vec g$, verticale. La sua componente normale è massima quando la normale alla traiettoria è parallela a $\vec g$, cioè quando la velocità è orizzontale: nel **punto di massima quota** $P$. Lì tutta $g$ è normale: $a_n = g$ (e $a_t = 0$).
2. In $P$ la componente verticale della velocità è nulla, quindi $v = v_x = v_0\cos\theta = 2\cos 45° = 2\cdot 0{,}707 \approx 1{,}41\,\mathrm{m/s}$.
3. $$R = \frac{v^2}{a_n} = \frac{(v_0\cos\theta)^2}{g} = \frac{4\cdot\frac12}{9{,}8} = \frac{2}{9{,}8} \approx 0{,}2\,\mathrm m$$
Controllo dimensionale: $\dfrac{(\mathrm{m/s})^2}{\mathrm{m/s^2}} = \dfrac{\mathrm{m^2/s^2}}{\mathrm{m/s^2}} = \mathrm m$.
:::

::: esempio
**Raggio di curvatura dopo 2 s** (esercizio della dispensa 08). Un proiettile è sparato orizzontalmente a $v_0 = 30\,\mathrm{m/s}$. Qual è il raggio di curvatura della traiettoria $2\,\mathrm s$ dopo il lancio?
1. Velocità dopo 2 s: $v_x = 30\,\mathrm{m/s}$, $v_y = g\,t = 9{,}8\cdot 2 = 19{,}6\,\mathrm{m/s}$ (verso il basso). Modulo $v = \sqrt{900 + 384} = \sqrt{1284} \approx 35{,}8\,\mathrm{m/s}$.
2. Componente normale di $\vec g$: $\vec g$ è verticale e forma con la normale alla traiettoria lo stesso angolo che la velocità forma con l'orizzontale. Quindi $a_n = g\cos\beta = g\,\dfrac{v_x}{v} = 9{,}8\cdot\dfrac{30}{35{,}8} \approx 8{,}2\,\mathrm{m/s^2}$.
3. $$R = \frac{v^2}{a_n} = \frac{v^3}{g\,v_x} = \frac{1284\cdot 35{,}8}{9{,}8\cdot 30} \approx \frac{46\,000}{294} \approx 157\,\mathrm m$$

All'istante del lancio ($v = v_x$, $a_n = g$) il raggio sarebbe $30^2/9{,}8 \approx 92\,\mathrm m$: la parabola si "apre" man mano che il corpo scende. La componente tangenziale di $g$, $g\,v_y/v \approx 5{,}4\,\mathrm{m/s^2}$, fa crescere il modulo della velocità.
:::

## Moto circolare vario
Se il modulo della velocità cambia, c'è anche l'**accelerazione tangenziale** $a_T = dv/dt$. Ad essa è legata l'**accelerazione angolare**, che misura quanto rapidamente cambia la velocità angolare:
$$\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} \qquad a_T = \frac{dv}{dt} = \frac{d(\omega R)}{dt} = \alpha\,R$$
dove $\alpha$ si misura in **rad/s²**.

Nota la legge oraria dell'angolo $\theta(t)$, il moto circolare si tratta **con le stesse relazioni del moto rettilineo**, con $\theta$ al posto di $x$, $\omega$ al posto di $v$ e $\alpha$ al posto di $a$. Con $\alpha$ **costante**:
$$\omega(t) = \omega_0 + \alpha\,t \qquad \theta(t) = \theta_0 + \omega_0\,t + \tfrac12\,\alpha\,t^2 \qquad \omega^2 = \omega_0^2 + 2\alpha\,(\theta - \theta_0)$$
In questo caso anche l'accelerazione centripeta è variabile: $a_c = \omega^2R = (\omega_0 + \alpha t)^2R$.

| Moto rettilineo | Moto circolare |
|---|---|
| posizione $x$ (m) | angolo $\theta$ (rad); arco $s = R\theta$ |
| velocità $v$ (m/s) | velocità angolare $\omega$ (rad/s); $v = \omega R$ |
| accelerazione $a$ (m/s²) | accelerazione angolare $\alpha$ (rad/s²); $a_T = \alpha R$ |
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ |
| $x = x_0 + v_0t + \tfrac12at^2$ | $\theta = \theta_0 + \omega_0t + \tfrac12\alpha t^2$ |

::: esempio
**Disco che si ferma.** Un disco ruota a $2{,}1\,\mathrm{rad/s}$ e decelera uniformemente con accelerazione angolare $0{,}45\,\mathrm{rad/s^2}$. Si ferma quando $\omega = 0$:
$$0 = \omega_0 - \alpha t \;\Rightarrow\; t = \frac{\omega_0}{\alpha} = \frac{2{,}1}{0{,}45} \approx 4{,}7\,\mathrm s$$
Angolo spazzato nel frattempo: $\omega_0^2/(2\alpha) = 4{,}41/0{,}9 = 4{,}9\,\mathrm{rad}$, meno di un giro.
:::

::: esempio
**Un giro in due tempi** (esercizio della dispensa). Un punto parte da fermo su una circonferenza di raggio $R = 1{,}8\,\mathrm m$ con accelerazione angolare $\alpha_1 = 2{,}39\,\mathrm{rad/s^2}$. Dopo mezzo giro il moto diventa uniformemente decelerato e il punto si ferma dopo un altro mezzo giro. Trovare (a) l'accelerazione angolare $\alpha_2$ del secondo mezzo giro, (b) il tempo totale, (c) l'accelerazione centripeta se lo stesso giro fosse fatto di moto uniforme nello stesso tempo.

**Primo mezzo giro** (angolo $\pi$, partenza da fermo): $\pi = \tfrac12\alpha_1 t_0^2$, quindi
$$t_0 = \sqrt{\frac{2\pi}{\alpha_1}} = \sqrt{\frac{6{,}283}{2{,}39}} = \sqrt{2{,}63} \approx 1{,}62\,\mathrm s \qquad \omega_0 = \alpha_1 t_0 \approx 3{,}87\,\mathrm{rad/s}$$
**Secondo mezzo giro** (rimettendo a zero il tempo): parte da $\omega_0$ e arriva a $\omega = 0$ dopo un angolo $\pi$. Da $\omega^2 = \omega_0^2 + 2\alpha_2\pi$ con $\omega = 0$: $\alpha_2 = -\dfrac{\omega_0^2}{2\pi}$. Ma $\omega_0^2 = 2\alpha_1\pi$ (dal primo tratto), quindi
$$\text{(a)}\quad \alpha_2 = -\alpha_1 = -2{,}39\,\mathrm{rad/s^2}$$
Il secondo tratto è il primo "al contrario" e dura lo stesso tempo $t_0$.
$$\text{(b)}\quad t_{tot} = 2\,t_0 = 2\sqrt{\frac{2\pi}{\alpha_1}} \approx 3{,}24\,\mathrm s$$
**(c)** Con moto uniforme, un giro ($2\pi$) in $3{,}24\,\mathrm s$: $\omega = 2\pi/3{,}24 = \pi/t_0 \approx 1{,}94\,\mathrm{rad/s}$ e
$$a_c = \omega^2 R = 1{,}94^2\cdot 1{,}8 \approx 3{,}76\cdot 1{,}8 \approx 6{,}76\,\mathrm{m/s^2}$$
:::

## Notazione vettoriale nel moto circolare
Alcune grandezze del moto circolare si possono scrivere come vettori.

**Vettore velocità angolare** $\vec\omega$:
- modulo $\omega = d\theta/dt$;
- direzione **perpendicolare al piano** del moto (lungo l'asse di rotazione);
- verso tale che, guardando dalla punta del vettore (applicato al centro), il moto si veda **antiorario** (equivale alla regola della mano destra: le dita seguono il moto, il pollice dà $\vec\omega$).

Con $\vec r$ vettore posizione dal centro, vale la relazione
$$\vec v = \vec\omega\times\vec r$$
Infatti $\vec\omega\perp\vec r$, quindi $|\vec\omega\times\vec r| = \omega r\sin 90° = \omega R$, e il prodotto vettoriale è perpendicolare sia all'asse sia al raggio: è proprio la direzione tangente.

**Vettore accelerazione angolare** $\vec\alpha = d\vec\omega/dt$: ha la stessa direzione di $\vec\omega$ (l'asse resta fisso), verso concorde se $\omega$ aumenta e opposto se diminuisce, modulo $d\omega/dt$.

**Accelerazione lineare.** Derivando $\vec v = \vec\omega\times\vec r$ con la regola del prodotto (rispettando l'ordine):
$$\vec a = \frac{d\vec\omega}{dt}\times\vec r + \vec\omega\times\frac{d\vec r}{dt} = \vec\alpha\times\vec r + \vec\omega\times\vec v$$
- il primo termine $\vec\alpha\times\vec r$ è l'**accelerazione tangenziale**, di modulo $\alpha R$;
- il secondo $\vec\omega\times\vec v$ è l'**accelerazione centripeta**, di modulo $\omega\,v = \omega^2R$, diretta verso il centro.

Nel moto circolare uniforme $\vec\omega$ è costante, $\vec\alpha = \vec 0$, e resta solo il termine centripeto, come ci si aspetta.

## Ripasso della cinematica (dispensa 08)
- La cinematica descrive il moto senza occuparsi delle cause.
- Un sistema è un punto materiale quando le sue dimensioni sono piccole rispetto alla precisione con cui interessa la posizione.
- La posizione si definisce solo rispetto a un sistema di riferimento; la legge oraria è nota quando è nota $\vec r(t)$.
- La velocità media è $\Delta\vec r/\Delta t$; al limite $\Delta t\to 0$ diventa la velocità istantanea, sempre tangente alla traiettoria.
- L'accelerazione è la derivata della velocità; rispetto alla traiettoria ha una componente tangenziale (modulo $dv/dt$, nulla se e solo se il modulo della velocità è costante) e una normale, centripeta, diretta verso il centro del cerchio che meglio si adatta alla traiettoria.
- Velocità e accelerazione sono grandezze derivate: $[v] = [L\,T^{-1}]$ in m/s; $[a] = [L\,T^{-2}]$ in m/s².

## Un cenno alle onde
Una domanda della lezione riguarda le onde, trattate più avanti nel corso. In una **fotografia istantanea** di una corda percorsa da onde armoniche, la distanza tra due **creste (picchi) consecutive** è la **lunghezza d'onda** $\lambda$, in metri. Non va confusa con il **periodo** (un tempo, la durata di un'oscillazione completa in un punto), con la **frequenza** (oscillazioni al secondo) né con l'**ampiezza** (l'altezza della cresta rispetto alla posizione di riposo).

::: attenzione
- Nel moto circolare uniforme cambia la **direzione** della velocità, non il modulo; l'accelerazione è **sempre diretta verso il centro**, mai nel verso del moto né verso l'esterno.
- La velocità angolare è uguale per tutti i punti di un corpo che ruota; la velocità periferica no.
- Diametro ≠ raggio; centimetri da convertire in metri.
- Nel moto circolare vario $\alpha$ si misura in rad/s² (una domanda la indica, per errore di stampa, in rad/s).
:::

::: esame
Chiuse: accelerazione della palla dopo la battuta (solo gravità, non dipende dalla forza del battitore); ruota panoramica (velocità tangenziale $2\pi R/T$, accelerazione centripeta $v^2/R$); velocità dell'estremo di un'asta e della punta di una lancetta ($v = \omega R$); unità del periodo (secondo); tensione di un cavo ($mv^2/R$); accelerazione centripeta da $v$ e $R$; conversioni tra $v$ e $\omega$; tempo di arresto di un disco ($\omega_0/\alpha$); velocità da raggio e periodo o frequenza; cosa cambia nel moto circolare uniforme (la direzione); periodo della ruota dalla velocità della valvola; lancetta con frequenza maggiore (secondi); direzione dell'accelerazione (verso il centro); lunghezza d'onda come distanza tra due creste; periodo di un disco a 45 giri/min.

Aperte:
- **Accelerazione centripeta**: dovuta al cambio di direzione della velocità; perpendicolare alla velocità, verso il centro (di curvatura); $a_c = v^2/R = \omega^2R$, in m/s²; presente anche nel moto uniforme; serve una forza centripeta $mv^2/R$ (tensione, attrito, gravità).
- **Velocità angolare**: $\omega = d\theta/dt$, angolo spazzato nell'unità di tempo, in rad/s; nel moto uniforme $\omega = 2\pi/T = 2\pi f$; $v = \omega R$; vettore lungo l'asse con la mano destra, $\vec v = \vec\omega\times\vec r$.
- **Accelerazione centripeta e tangenziale in un moto curvilineo**: $a_t = dv/dt$, tangente, cambia il modulo, nulla se il modulo è costante; $a_n = v^2/R$, perpendicolare, verso il centro di curvatura, cambia la direzione, nulla nei tratti rettilinei; $R$ = raggio di curvatura (cerchio osculatore); $a = \sqrt{a_t^2 + a_n^2}$.
- **Velocità angolare e velocità periferica**: angolo al secondo (rad/s), uguale per tutti i punti di un corpo rigido; arco al secondo (m/s), tangente, cresce con il raggio; $v = \omega R$; esempio della lancetta o della giostra.
- **Parametri del moto circolare uniforme**: periodo $T$ (s, tempo di un giro), frequenza $f = 1/T$ (Hz, giri al secondo), pulsazione $\omega = 2\pi/T = 2\pi f$ (rad/s); $\theta = \theta_0 + \omega t$; $v = 2\pi R/T = \omega R$; $a_c = v^2/R = \omega^2R$.
:::

::: sintesi
- Moto circolare uniforme: $s = s_0 + vt$, $\theta = \theta_0 + \omega t$, $\omega = v/R$.
- $T$ in s, $f = 1/T$ in Hz, $\omega = 2\pi/T = 2\pi f$ in rad/s.
- $v = \omega R = 2\pi R/T = 2\pi Rf$: la velocità periferica cresce con il raggio, $\omega$ è uguale per tutti i punti.
- Cambia solo la direzione di $\vec v$: $a_c = v^2/R = \omega^2R = \omega v$, sempre verso il centro; $\vec a = -\omega^2\vec r$. Forza necessaria $F = mv^2/R$.
- Moti curvi: $a_t = dv/dt$ (modulo), $a_n = v^2/R$ con $R$ raggio di curvatura (direzione); $a = \sqrt{a_t^2 + a_n^2}$; $R = v^2/a_n$.
- Moto vario: $\alpha = d\omega/dt$ (rad/s²), $a_T = \alpha R$; con $\alpha$ costante $\omega = \omega_0 + \alpha t$, $\theta = \theta_0 + \omega_0t + \tfrac12\alpha t^2$.
- Vettoriale: $\vec v = \vec\omega\times\vec r$; $\vec a = \vec\alpha\times\vec r + \vec\omega\times\vec v$.
:::
