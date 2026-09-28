=== 48 dispense
# Lezione 48 — Potenziale, superfici equipotenziali e condensatori

## Il campo elettrostatico è conservativo
Il lavoro della forza elettrica dipende solo dal punto di partenza e dal punto di arrivo. Non dipende dal percorso. Per questo si può definire un'energia potenziale, come per la gravità.

$$L_{AB} = U(A) - U(B) = -\Delta U$$

dove:
- $L_{AB}$ = lavoro della forza elettrica da A a B (J)
- $U$ = energia potenziale elettrostatica (J)

Per una carica $q$ a distanza $r$ da una carica fissa $Q$, con $U = 0$ all'infinito:

$$U(r) = \frac{Qq}{4\pi\varepsilon_0 r}$$

dove:
- $Q$, $q$ = le due cariche (C)
- $r$ = distanza tra le cariche (m)
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{F/m}$ = costante dielettrica del vuoto

## Il potenziale elettrico
Il potenziale è l'energia potenziale per unità di carica. Dipende solo dal campo, non dalla carica di prova che metti nel punto.

$$V = \frac{U}{q} \qquad V_A - V_B = \int_A^B \vec E \cdot d\vec s$$

dove:
- $V$ = potenziale (V, volt = J/C)
- $U$ = energia potenziale della carica di prova (J)
- $q$ = carica di prova (C)
- $\vec E$ = campo elettrico (V/m = N/C)
- $d\vec s$ = spostamento infinitesimo (m)

La differenza di potenziale tra A e B è il lavoro del campo per portare una carica unitaria da A a B. Il campo spinge le cariche positive verso i potenziali più bassi.

Il lavoro che devi fare tu per spostare lentamente una carica è l'opposto di quello del campo:

$$L_{est} = q\,\Delta V$$

dove:
- $L_{est}$ = lavoro esterno (J)
- $\Delta V = V_{fin} - V_{iniz}$ = differenza di potenziale (V)

::: esempio
Portare $8\,\mu\mathrm C$ da 0 V a 75 V richiede $L = 8 \cdot 10^{-6} \cdot 75 = 6 \cdot 10^{-4}\,\mathrm J = 600\,\mu\mathrm J$.
:::

## Potenziale di una carica puntiforme
Si fissa $V = 0$ all'infinito. Allora il potenziale a distanza $r$ da una carica $Q$ vale:

$$V(r) = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r} = k\frac{Q}{r}$$

dove:
- $k = 1/(4\pi\varepsilon_0) \approx 8{,}99 \cdot 10^9\,\mathrm{N\,m^2/C^2}$
- $Q$ = carica sorgente (C), con il suo segno
- $r$ = distanza dalla carica (m)

Il potenziale è uno scalare. Decresce come $1/r$, più lentamente del campo ($1/r^2$). È positivo vicino a cariche positive e negativo vicino a cariche negative.

Con più cariche vale la sovrapposizione: si sommano i potenziali, con il segno.

$$V(P) = \sum_i \frac{1}{4\pi\varepsilon_0}\frac{Q_i}{r_i}$$

::: esempio
$Q_1 = 6\,\mathrm{nC}$ e $Q_2 = -3\,\mathrm{nC}$ distano 80 cm. Nel punto P sulla congiungente, a 20 cm da $Q_1$ (quindi a 60 cm da $Q_2$):
$V = 8{,}99 \cdot 10^9\left(\frac{6 \cdot 10^{-9}}{0{,}2} - \frac{3 \cdot 10^{-9}}{0{,}6}\right) = 8{,}99 \cdot 10^9 \cdot 2{,}5 \cdot 10^{-8} \approx 224{,}8\,\mathrm V$.
:::

Una sfera carica uniformemente, vista da fuori, si comporta come una carica puntiforme al centro. Il teorema di Gauss lega la carica al flusso: $\Phi = Q/\varepsilon_0$. Quindi fuori dalla sfera:

$$V(d) = \frac{Q}{4\pi\varepsilon_0 d} = \frac{\Phi}{4\pi d}$$

::: esempio
Il flusso attraverso una sfera gaussiana concentrica vale $5{,}6 \cdot 10^4\,\mathrm{N\,m^2/C}$. A $d = 12\,\mathrm{cm}$ dal centro: $V = \frac{5{,}6 \cdot 10^4}{4\pi \cdot 0{,}12} \approx 3{,}71 \cdot 10^4\,\mathrm V$. Il raggio della sfera e quello della superficie gaussiana non servono.
:::

## Unità: volt ed elettronvolt
- $1\,\mathrm V = 1\,\mathrm{J/C}$. Quindi il campo si misura anche in V/m: $1\,\mathrm{N/C} = 1\,\mathrm{V/m}$.
- $1\,\mathrm{eV}$ = energia che acquista un elettrone attraverso 1 V = $1{,}60 \cdot 10^{-19}\,\mathrm J$.

## Conservazione dell'energia
Una carica che si muove solo sotto il campo elettrico conserva l'energia totale:

$$\tfrac12 mv^2 + qV = \text{costante}$$

dove:
- $m$ = massa (kg), $v$ = velocità (m/s)
- $q$ = carica (C), $V$ = potenziale nel punto (V)

Una carica che parte da ferma e attraversa una differenza di potenziale $\Delta V$ acquista $\tfrac12 mv^2 = |q|\Delta V$. Quindi $v = \sqrt{2|q|\Delta V/m}$: la velocità cresce con la radice della tensione.

::: esempio
Se la tensione di accelerazione diventa 4 volte più grande, la velocità finale diventa $\sqrt4 = 2$ volte più grande.
:::

## Campo uniforme e potenziale
In un campo uniforme il potenziale varia in modo lineare lungo il campo:

$$E_x = -\frac{\Delta V}{\Delta x} \qquad E = \frac{\Delta V}{d}\ \text{(in modulo)}$$

dove:
- $E_x$ = componente del campo lungo x (V/m)
- $\Delta V$ = variazione di potenziale (V) su un tratto $\Delta x$ (m)
- $d$ = distanza tra due lastre parallele (m)

Il segno meno dice che il campo punta verso i potenziali che scendono.

::: esempio
In $x = 2\,\mathrm m$ si ha $V = 150\,\mathrm V$, in $x = 5\,\mathrm m$ si ha $V = 450\,\mathrm V$. Allora $E_x = -\frac{450 - 150}{5 - 2} = -100\,\mathrm{V/m}$: il campo punta verso le x negative.
Due lastre a 50 V distanti 5 cm: $E = 50/0{,}05 = 1000\,\mathrm{V/m}$.
:::

## Superfici equipotenziali
Una superficie equipotenziale è l'insieme dei punti con lo stesso potenziale: $V(x,y,z) = \text{cost}$. Muoversi su di essa non costa lavoro.

- Il campo è sempre perpendicolare alle superfici equipotenziali (forma angoli retti con esse).
- Il campo punta verso i potenziali decrescenti, nella direzione in cui V scende più in fretta.
- Carica puntiforme: sfere concentriche. Campo uniforme: piani paralleli, perpendicolari al campo.

Motivo: lungo la superficie $dV = -\vec E \cdot d\vec s = 0$, quindi $\vec E$ è perpendicolare a ogni spostamento sulla superficie.

::: attenzione
Le superfici equipotenziali non sono perpendicolari tra loro e non sono parallele alle linee di campo. Sono perpendicolari alle linee di campo.
:::

## Sfere conduttrici a contatto
Due conduttori messi a contatto si portano allo stesso potenziale. Due sfere identiche hanno lo stesso potenziale solo con la stessa carica. Quindi la carica si divide a metà: su ognuna rimane metà della carica iniziale.

## Condensatore e capacità (anticipo)
Un condensatore è formato da due conduttori (armature) con cariche $+Q$ e $-Q$. Il rapporto tra carica e tensione è costante:

$$C = \frac{Q}{V}$$

dove:
- $C$ = capacità (F, farad = C/V)
- $Q$ = carica su un'armatura (C)
- $V$ = differenza di potenziale tra le armature (V)

La capacità dipende solo dalla geometria e dal materiale tra le armature. Se raddoppi la carica, raddoppia anche la tensione: la capacità resta la stessa.

::: esame
Nelle domande aperte chiedono di definire il potenziale e di descrivere quello di una carica puntiforme. Scrivi: lavoro indipendente dal percorso, $V = U/q$, $V_A - V_B = \int_A^B \vec E \cdot d\vec s$, zero all'infinito, $V = Q/(4\pi\varepsilon_0 r)$, superfici equipotenziali sferiche.
:::

::: sintesi
- Campo conservativo: $L_{AB} = -\Delta U$; il potenziale è $V = U/q$ (volt = J/C).
- Carica puntiforme: $V = \frac{Q}{4\pi\varepsilon_0 r}$; più cariche: somma con il segno.
- Lavoro esterno per spostare una carica: $L = q\,\Delta V$.
- Campo uniforme: $E = -\Delta V/\Delta x$; tra lastre $E = V/d$.
- Equipotenziali sempre perpendicolari alle linee di campo.
- Energia: $\tfrac12 mv^2 = q\Delta V$, quindi $v \propto \sqrt{\Delta V}$.
- $C = Q/V$ non dipende dalla carica.
:::

=== 49 dispense
# Lezione 49 — Conduttori e capacità

## Conduttori e isolanti
In un conduttore alcune cariche (nei metalli, gli elettroni di conduzione) si muovono liberamente. Basta un campo debole per spostarle. In un isolante (dielettrico) gli elettroni sono legati ai loro atomi. Si possono solo spostare di poco: il materiale si polarizza ma non conduce.

## Campo e carica in un conduttore in equilibrio
In equilibrio elettrostatico le cariche sono ferme. Quindi dentro il conduttore il campo è nullo: se non lo fosse, le cariche libere si muoverebbero.

Conseguenze:
- Il teorema di Gauss su una superficie tutta interna dà flusso nullo. Quindi dentro non c'è carica netta.
- La carica in eccesso sta tutta sulla superficie esterna, con densità $\sigma = dq/dS$ (C/m²).
- Il campo dentro una sfera conduttrice carica è $0$, ovunque.

## Il potenziale di un conduttore
Dentro il conduttore $E = 0$. Quindi tra due punti qualsiasi A e B interni:

$$V_A - V_B = \int_A^B \vec E \cdot d\vec s = 0$$

Il potenziale è uguale in tutto il volume e sulla superficie. Il conduttore è un corpo equipotenziale. Per questo, appena fuori, il campo è perpendicolare alla superficie.

Per una sfera conduttrice di raggio $R$ e carica $Q$, il potenziale è quello di una carica puntiforme al centro, calcolato sulla superficie:

$$V = \frac{Q}{4\pi\varepsilon_0 R}$$

dove:
- $Q$ = carica della sfera (C)
- $R$ = raggio (m)
- $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{F/m}$

## Teorema di Coulomb
Appena fuori dalla superficie di un conduttore carico il campo è perpendicolare alla superficie e vale:

$$E = \frac{\sigma}{\varepsilon_0}$$

dove:
- $E$ = modulo del campo appena fuori (V/m)
- $\sigma$ = densità superficiale di carica in quel punto (C/m²)

Dimostrazione in 3 passi:
1. La componente tangente del campo si conserva attraversando la superficie (circuitazione nulla su un piccolo rettangolo a cavallo della superficie). Dentro è zero, quindi anche fuori è zero: il campo esterno è solo normale.
2. Si prende come superficie gaussiana un piccolo cilindro con una base $dS$ fuori e una dentro. Il flusso passa solo dalla base esterna: $\Phi = E\,dS$.
3. La carica racchiusa è $\sigma\,dS$. Gauss dà $E\,dS = \sigma\,dS/\varepsilon_0$, cioè $E = \sigma/\varepsilon_0$.

In generale, attraverso una superficie carica la componente normale del campo salta di $\sigma/\varepsilon_0$, quella tangente resta uguale.

## Potere delle punte
Su un conduttore di forma qualsiasi la carica non è uniforme. Si concentra dove la superficie è più curva, cioè dove il raggio di curvatura è piccolo (punte, spigoli). Lì $\sigma$ e quindi il campo sono più intensi. È il principio del parafulmine.

::: attenzione
"Più densa dove il raggio di curvatura è minore" e "più densa dove la curvatura è maggiore" dicono la stessa cosa.
:::

## Capacità di un conduttore
Se raddoppi la carica di un conduttore isolato, raddoppia anche il suo potenziale. Il rapporto resta costante e si chiama capacità.

$$C = \frac{Q}{V}$$

dove:
- $C$ = capacità (F, farad; $1\,\mathrm F = 1\,\mathrm{C/V}$)
- $Q$ = carica del conduttore (C)
- $V$ = potenziale del conduttore, con zero all'infinito (V)

La capacità dipende solo da forma, dimensioni e mezzo circostante. Per una sfera: $C = 4\pi\varepsilon_0 R$.

::: esempio
La Terra ($R \approx 6{,}4 \cdot 10^6\,\mathrm m$) ha $C = 4\pi \cdot 8{,}85 \cdot 10^{-12} \cdot 6{,}4 \cdot 10^6 \approx 7 \cdot 10^{-4}\,\mathrm F$. Il farad è un'unità molto grande.
:::

## Induzione completa e gabbia di Faraday
Metti un conduttore carico $+Q$ dentro la cavità di un conduttore scarico. Sulla parete interna della cavità si forma $-Q$, sulla superficie esterna $+Q$. Tutte le linee di campo che partono dal conduttore interno finiscono sulla parete della cavità: è l'induzione completa.

Un conduttore cavo scherma il suo interno dai campi esterni: è la gabbia di Faraday. Basta anche una rete metallica.

## Campo dal potenziale
Se conosci il potenziale in ogni punto, trovi il campo derivando:

$$\vec E = -\nabla V \qquad E_x = -\frac{\partial V}{\partial x},\ E_y = -\frac{\partial V}{\partial y},\ E_z = -\frac{\partial V}{\partial z}$$

dove:
- $\nabla V$ = gradiente del potenziale (V/m), vettore che punta dove V cresce più in fretta

Il campo punta dove il potenziale scende più rapidamente ed è perpendicolare alle superfici equipotenziali.

::: esempio
Tra due superfici parallele $V = ax^2$ con $a = 1200\,\mathrm{V/m^2}$. Allora $E_x = -2ax$. In $x = 0{,}02\,\mathrm m$: $E = 48\,\mathrm{V/m}$, diretto verso le x negative.
:::

## Capacità equivalente: serie e parallelo (richiamo)
- **Parallelo**: stessa tensione su tutti; le cariche si sommano. $C_{eq} = C_1 + C_2 + \dots$
- **Serie**: stessa carica su tutti; le tensioni si sommano. $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots$

Il dettaglio è nella lezione 51.

::: esame
Domande aperte frequenti: definire la capacità ($C = Q/V$, farad); come varia il potenziale in un conduttore (costante); enunciare e dimostrare il teorema di Coulomb ($E = \sigma/\varepsilon_0$, con il cilindretto); ricavare il campo dal potenziale ($\vec E = -\nabla V$); differenza tra conduttori e isolanti.
:::

::: sintesi
- In equilibrio: $E = 0$ dentro un conduttore, carica solo in superficie.
- Il conduttore è equipotenziale; sfera: $V = \frac{Q}{4\pi\varepsilon_0 R}$.
- Teorema di Coulomb: appena fuori $E = \sigma/\varepsilon_0$, perpendicolare alla superficie.
- La carica si addensa dove il raggio di curvatura è minore (punte).
- $C = Q/V$ (farad), costante; sfera $C = 4\pi\varepsilon_0 R$.
- $\vec E = -\nabla V$.
:::

=== 50 dispense
# Lezione 50 — Condensatori e dielettrici

## Il condensatore
Un condensatore è un sistema di due conduttori (armature) in induzione completa. Tutte le linee di campo partono da un'armatura e finiscono sull'altra. Se un'armatura ha carica $+Q$, l'altra ha $-Q$.

La capacità è:

$$C = \frac{Q}{\Delta V}$$

dove:
- $C$ = capacità (F)
- $Q$ = carica su un'armatura (C)
- $\Delta V$ = differenza di potenziale tra le armature (V)

Dipende solo dalla geometria e dal materiale tra le armature.

## Condensatore piano
Due lastre parallele di area $S$, a distanza $d$ piccola rispetto alle loro dimensioni. Tra le armature il campo è uniforme, perpendicolare, e va dalla positiva alla negativa.

$$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 S} \qquad \Delta V = Ed \qquad C_0 = \frac{\varepsilon_0 S}{d}$$

dove:
- $\sigma = Q/S$ = densità di carica sulle armature (C/m²)
- $S$ = area di un'armatura (m²)
- $d$ = distanza tra le armature (m)
- $C_0$ = capacità con il vuoto (o aria) tra le armature (F)

Passaggi: $\Delta V = E\,d = \frac{Q d}{\varepsilon_0 S}$, quindi $C = Q/\Delta V = \varepsilon_0 S/d$.

La capacità cresce se aumenti l'area o avvicini le armature. Diminuisce se le allontani.

::: esempio
$S = 40\,\mathrm{cm^2} = 4 \cdot 10^{-3}\,\mathrm{m^2}$, $d = 1\,\mathrm{mm}$: $C = \frac{8{,}85 \cdot 10^{-12} \cdot 4 \cdot 10^{-3}}{10^{-3}} \approx 35{,}4\,\mathrm{pF}$. Con 600 V: $Q = CV \approx 21\,\mathrm{nC}$, $E = V/d = 6 \cdot 10^5\,\mathrm{V/m}$.
:::

## Altri condensatori
- **Sferico** (armature di raggi $R_1 < R_2$): $C = 4\pi\varepsilon_0 \frac{R_1 R_2}{R_2 - R_1}$.
- **Cilindrico** (raggi $R_1 < R_2$, altezza $h$): $C = \frac{2\pi\varepsilon_0 h}{\ln(R_2/R_1)}$.

Se le armature sono molto vicine, entrambe le formule tornano quella del condensatore piano.

## Carica in moto dentro un condensatore piano
Il campo uniforme agisce come la gravità. Una particella che entra parallela alle armature fa un moto parabolico:
- lungo le armature: velocità costante, $x = v_0 t$;
- verso l'armatura: accelerazione costante $a = \frac{q}{m}E$, quindi $y = \tfrac12 a t^2$.

::: esempio
$q/m = 2 \cdot 10^5\,\mathrm{C/kg}$, $d = 50\,\mathrm{cm}$, $\Delta V = 1\,\mathrm V$. Allora $E = 1/0{,}5 = 2\,\mathrm{V/m}$ e $a = 2 \cdot 10^5 \cdot 2 = 4 \cdot 10^5\,\mathrm{m/s^2}$. Entrando a metà, deve percorrere 0,25 m: $t = \sqrt{2 \cdot 0{,}25 / 4 \cdot 10^5} \approx 1{,}1\,\mathrm{ms}$. La velocità iniziale parallela non cambia questo tempo.
:::

## Condensatori in parallelo
In parallelo le armature sono collegate a coppie. Tutti i condensatori hanno la stessa tensione. Le cariche si sommano.

$$C_{eq} = C_1 + C_2 + \dots$$

## Condensatori in serie
In serie un solo conduttore collega un'armatura del primo con una del secondo. Per induzione, tutti hanno la stessa carica. Le tensioni si sommano.

$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots \qquad \text{due soli: } C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$$

| | Parallelo | Serie |
|---|---|---|
| Uguale per tutti | tensione $V$ | carica $Q$ |
| Si somma | carica | tensione |
| $C_{eq}$ | $C_1 + C_2$ | $\frac{C_1C_2}{C_1+C_2}$ |
| Due uguali $C$ | $2C$ | $C/2$ |
| Rispetto ai singoli | più grande del più grande | più piccola della più piccola |

::: esempio
$C_1 = 1{,}6\,\mu\mathrm F$, $C_2 = 2{,}4\,\mu\mathrm F$. Parallelo: $4\,\mu\mathrm F$. Serie: $\frac{1{,}6 \cdot 2{,}4}{4} = 0{,}96\,\mu\mathrm F$.
Due da $10\,\mu\mathrm F$: parallelo $20\,\mu\mathrm F$, serie $5\,\mu\mathrm F$. Due da $20\,\mu\mathrm F$: parallelo $40\,\mu\mathrm F$, serie $10\,\mu\mathrm F$.
:::

## Parallelo collegato a una batteria
La batteria fissa la tensione $V$ su ogni ramo. Se aggiungi un terzo condensatore in parallelo:
- la tensione su ciascuno non cambia (è quella della batteria);
- la carica di ciascuno ($Q_i = C_i V$) non cambia;
- cambia solo la capacità equivalente (e la carica totale erogata).

Con due condensatori diversi in parallelo le tensioni sono uguali. Cariche ed energie sono diverse. I campi $E = V/d$ sono uguali solo se le distanze tra le armature sono uguali.

## Dielettrico tra le armature
Riempi lo spazio tra le armature con un isolante. La capacità aumenta:

$$C = \varepsilon_r C_0 = \varepsilon_r \varepsilon_0 \frac{S}{d} = \varepsilon \frac{S}{d}$$

dove:
- $\varepsilon_r$ = costante dielettrica relativa (numero puro, $\ge 1$; vuoto = 1, aria circa 1)
- $\varepsilon = \varepsilon_r \varepsilon_0$ = costante dielettrica assoluta (F/m)

Perché: il dielettrico si polarizza e riduce il campo tra le armature. A parità di carica serve meno tensione, quindi $C = Q/V$ cresce.

::: attenzione
Non è $C = \varepsilon_r \varepsilon_0 C_0$: $\varepsilon_0$ è già dentro $C_0$.
:::

::: esame
Domanda aperta: "Definire il condensatore e la capacità; caso del condensatore piano". Scrivi: due conduttori in induzione completa, cariche $\pm Q$, $C = Q/\Delta V$; campo uniforme $\sigma/\varepsilon_0$, $\Delta V = Qd/(\varepsilon_0 S)$, quindi $C = \varepsilon_0 S/d$; con dielettrico $C = \varepsilon_r C_0$.
:::

::: sintesi
- Condensatore: due armature con $\pm Q$; $C = Q/\Delta V$.
- Piano: $C_0 = \varepsilon_0 S/d$; cresce con S, cala con d.
- Con dielettrico: $C = \varepsilon_r C_0$.
- Parallelo: stessa V, $C_{eq} = \sum C_i$.
- Serie: stessa Q, $1/C_{eq} = \sum 1/C_i$.
- In campo uniforme una carica fa un moto parabolico con $a = qE/m$.
:::

=== 51 dispense
# Lezione 51 — Energia del condensatore e collegamenti serie/parallelo

## Energia immagazzinata
Per caricare un condensatore devi portare carica da un'armatura all'altra contro il campo. Questo lavoro resta immagazzinato come energia potenziale elettrostatica.

Ragionamento in 3 passi:
1. Quando sulle armature c'è già carica $q$, la tensione è $V' = q/C$.
2. Spostare un'altra carica $dq$ costa $dL = V'\,dq = \frac{q}{C}dq$.
3. Sommando da 0 a $Q$: $L = \int_0^Q \frac{q}{C}dq = \frac{Q^2}{2C}$.

$$U_e = \frac{Q^2}{2C} = \frac12 CV^2 = \frac12 QV$$

dove:
- $U_e$ = energia elettrostatica (J)
- $Q$ = carica su un'armatura (C)
- $V$ = tensione tra le armature (V)
- $C$ = capacità (F)

Il fattore $\tfrac12$ c'è perché la tensione cresce da 0 a $V$ durante la carica: in media vale $V/2$.

::: esempio
$C = 3\,\mu\mathrm F$ a $10\,\mathrm V$: $U = \tfrac12 \cdot 3 \cdot 10^{-6} \cdot 100 = 1{,}5 \cdot 10^{-4}\,\mathrm J$.
:::

## Densità di energia
L'energia si può pensare distribuita nel campo, dove il campo c'è. Nel condensatore piano:

$$U_e = \frac12 CV^2 = \frac12 \frac{\varepsilon_0 S}{d}(Ed)^2 = \frac12 \varepsilon_0 E^2 (Sd)$$

$Sd$ è il volume tra le armature. Quindi l'energia per unità di volume è:

$$u_e = \frac{U_e}{\text{volume}} = \frac12 \varepsilon_0 E^2$$

dove:
- $u_e$ = densità di energia (J/m³)
- $E$ = campo elettrico nel punto (V/m)

Questa formula non dipende dal condensatore. Vale in ogni punto dove c'è un campo nel vuoto. L'energia totale di un sistema è $U_e = \int \tfrac12 \varepsilon_0 E^2\,dV$ su tutto lo spazio dove il campo non è nullo. In un dielettrico si usa $\varepsilon$ al posto di $\varepsilon_0$: $u_e = \tfrac12 \varepsilon E^2$.

::: esempio
Stesso condensatore della lezione 50 ($E = 6 \cdot 10^5\,\mathrm{V/m}$): $u_e = \tfrac12 \cdot 8{,}85 \cdot 10^{-12} \cdot (6 \cdot 10^5)^2 \approx 1{,}6\,\mathrm{J/m^3}$.
:::

## Forza tra le armature
Le armature di segno opposto si attraggono. La forza vale:

$$F = \frac{Q^2}{2\varepsilon_0 S} = \frac{\sigma^2 S}{2\varepsilon_0}$$

La forza per unità di superficie è la pressione elettrostatica, ed è uguale alla densità di energia:

$$p_e = \frac{F}{S} = \frac{\sigma^2}{2\varepsilon_0} = \frac12 \varepsilon_0 E^2$$

## Collegamenti: come trovare la capacità equivalente
**Parallelo** (stessa tensione $V$):
1. $Q_1 = C_1 V$, $Q_2 = C_2 V$.
2. Carica totale $Q = Q_1 + Q_2 = (C_1 + C_2)V$.
3. Quindi $C_{eq} = C_1 + C_2$: la somma delle capacità.

**Serie** (stessa carica $Q$):
1. $V_1 = Q/C_1$, $V_2 = Q/C_2$.
2. Tensione totale $V = V_1 + V_2 = Q\left(\frac{1}{C_1} + \frac{1}{C_2}\right)$.
3. Quindi $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2}$: l'inverso della somma degli inversi.

Per un circuito misto si riduce un pezzo alla volta, partendo dal gruppo più interno.

::: esempio
$C_2 = 10\,\mu\mathrm F$ e $C_3 = 2\,\mu\mathrm F$ in parallelo danno $12\,\mu\mathrm F$. In serie con $C_1 = 10\,\mu\mathrm F$: $C_{eq} = \frac{10 \cdot 12}{10 + 12} \approx 5{,}45\,\mu\mathrm F$.
:::

::: esempio
Due condensatori uguali $C$ in serie su una pila da 10 V immagazzinano 120 J. $C_{eq} = C/2$, quindi $U = \tfrac12 \cdot \tfrac C2 \cdot 10^2 = 25C = 120\,\mathrm J$. Risulta $C = 4{,}8\,\mathrm F$.
:::

::: attenzione
Nel parallelo la capacità equivalente è la somma, non l'inverso della somma degli inversi. L'inverso vale per la serie.
:::

## Perché si usa la serie per le alte tensioni
In serie la tensione totale si divide tra i condensatori. Con $N$ condensatori uguali, ognuno regge $V/N$. Così nessuno supera la sua tensione massima.

::: esame
Domande aperte: "Cos'è un condensatore?", "Come si trovano le capacità equivalenti in serie e parallelo?" (con i passaggi sopra), "Densità di energia partendo dal condensatore piano" (da $\tfrac12 CV^2$ a $\tfrac12\varepsilon_0 E^2$).
:::

::: sintesi
- $U_e = \frac{Q^2}{2C} = \tfrac12 CV^2 = \tfrac12 QV$.
- Densità di energia: $u_e = \tfrac12 \varepsilon_0 E^2$ (J/m³), valida ovunque ci sia campo.
- Parallelo: $C_{eq} = C_1 + C_2$ (stessa V).
- Serie: $1/C_{eq} = 1/C_1 + 1/C_2$ (stessa Q).
- Pressione tra le armature: $p_e = \tfrac12 \varepsilon_0 E^2$.
:::

=== 52 dispense
# Lezione 52 — Dielettrici (polarizzazione, rigidità dielettrica)

## Cosa sono i dielettrici
I dielettrici sono materiali isolanti: aria, vetro, plastica, olio. Gli elettroni sono legati agli atomi e non scorrono. In un campo elettrico però le cariche si spostano di poco e il materiale si polarizza.

## Due modi di polarizzarsi
- **Per deformazione**: in un atomo il campo spinge gli elettroni da una parte e il nucleo dall'altra. Nasce un piccolo dipolo indotto, diretto come il campo.
- **Per orientamento**: alcune molecole (come l'acqua) sono già dipoli. Senza campo sono orientate a caso e la media è zero. Il campo le fa ruotare e le allinea in parte.

In entrambi i casi il materiale acquista un momento di dipolo medio nella direzione del campo.

## Il vettore polarizzazione
La polarizzazione è il momento di dipolo per unità di volume:

$$\vec P = \frac{\Delta \vec p}{\Delta V} = n\langle \vec p \rangle$$

dove:
- $\vec P$ = polarizzazione (C/m²)
- $n$ = numero di molecole per unità di volume (1/m³)
- $\langle \vec p \rangle$ = momento di dipolo medio di una molecola (C·m)

Nei dielettrici lineari e isotropi $\vec P$ è proporzionale al campo:

$$\vec P = \varepsilon_0(\varepsilon_r - 1)\vec E = \varepsilon_0 \chi \vec E$$

dove:
- $\chi = \varepsilon_r - 1$ = suscettività elettrica (numero puro)
- $\varepsilon_r$ = costante dielettrica relativa
- $\vec E$ = campo nel dielettrico (V/m)

## Cariche di polarizzazione
Dentro il dielettrico uniformemente polarizzato le cariche dei dipoli vicini si compensano. Restano scoperte solo sulle facce. Sulla faccia vicina all'armatura positiva compare carica negativa, e viceversa.

$$\sigma_p = \vec P \cdot \vec u_n = P\cos\theta$$

dove:
- $\sigma_p$ = densità superficiale delle cariche di polarizzazione (C/m²)
- $\vec u_n$ = versore normale uscente dalla superficie

Se la polarizzazione non è uniforme compare anche una carica di volume $\rho_p = -\nabla \cdot \vec P$. La carica di polarizzazione totale è sempre zero: il dielettrico resta neutro.

## Effetto del dielettrico in un condensatore carico
Le cariche di polarizzazione stanno di fronte alle cariche libere delle armature, con segno opposto. Ne annullano una parte. Il campo interno quindi si riduce:

$$E = \frac{E_0}{\varepsilon_r} = \frac{\sigma_0 - \sigma_p}{\varepsilon_0} \qquad \sigma_p = \frac{\varepsilon_r - 1}{\varepsilon_r}\sigma_0$$

dove:
- $E_0 = \sigma_0/\varepsilon_0$ = campo senza dielettrico (V/m)
- $\sigma_0$ = densità di carica libera sulle armature (C/m²)

Cosa succede, caso per caso:

| Grandezza | Condensatore isolato ($Q$ fisso) | Collegato a una pila ($V$ fisso) |
|---|---|---|
| Capacità | $\varepsilon_r C_0$ | $\varepsilon_r C_0$ |
| Carica | uguale | $\varepsilon_r Q_0$ |
| Tensione | $V_0/\varepsilon_r$ | uguale |
| Campo | $E_0/\varepsilon_r$ | uguale |
| Energia | $U_0/\varepsilon_r$ (diminuisce) | $\varepsilon_r U_0$ (aumenta) |

Poiché $\varepsilon_r \ge 1$, il dielettrico non riduce mai la capacità.

::: esempio
Condensatore isolato, inserisci un dielettrico con $\varepsilon_r = 4$. La capacità quadruplica. La carica resta uguale. Quindi $V = Q/C$ diventa un quarto.
:::

Un dielettrico viene risucchiato dentro un condensatore isolato: l'energia scende entrando ($U = Q^2/2C$ e C cresce). Il sistema tende all'energia minima.

## Il vettore induzione elettrica
Il teorema di Gauss nel dielettrico deve contare anche le cariche di polarizzazione. Per evitarlo si definisce:

$$\vec D = \varepsilon_0 \vec E + \vec P$$

dove:
- $\vec D$ = induzione elettrica o spostamento elettrico (C/m²)

Il suo flusso dipende solo dalle cariche libere:

$$\oint_S \vec D \cdot \vec u_n\,dS = q_{libera} \qquad \nabla \cdot \vec D = \rho_{libera}$$

Nei mezzi lineari e isotropi: $\vec D = \varepsilon_0 \vec E + \varepsilon_0(\varepsilon_r - 1)\vec E = \varepsilon \vec E$.

Vicino a un conduttore carico: $D = \sigma$ (densità di carica libera), perpendicolare alla superficie. Al passaggio tra due dielettrici senza cariche libere si conservano la componente normale di $\vec D$ e quella tangente di $\vec E$.

## Equazioni dell'elettrostatica nei dielettrici
$$\nabla \cdot \vec D = \rho \qquad \nabla \times \vec E = 0$$

Il campo resta conservativo anche nei dielettrici: esiste il potenziale ($\vec E = -\nabla V$). In un dielettrico omogeneo che riempie tutto lo spazio, a parità di cariche libere: $D = D_0$, $E = E_0/\varepsilon_r$, $V = V_0/\varepsilon_r$.

## Rigidità dielettrica
Se aumenti la tensione, il campo nell'isolante cresce. Oltre un valore limite le cariche vengono strappate e scocca una scarica: l'isolante si "perfora". Il campo massimo sopportabile si chiama rigidità dielettrica.

$$E_{max} = \text{rigidità dielettrica} \qquad V_{max} = E_{max}\,d$$

dove:
- $E_{max}$ = rigidità (V/m, spesso kV/mm o MV/m)
- $d$ = spessore dell'isolante (m)

L'aria ha $\varepsilon_r \approx 1$ e rigidità circa $3\,\mathrm{MV/m} = 3 \cdot 10^6\,\mathrm{V/m}$. Dipende dal materiale, dalla sua purezza e dallo stato delle superfici.

::: esempio
Condensatori da $2\,\mu\mathrm F$ con $d = 1\,\mathrm{mm}$ e rigidità $200\,\mathrm{kV/m}$ reggono ognuno $200\,\mathrm{kV/m} \cdot 10^{-3}\,\mathrm m = 200\,\mathrm V$. Per lavorare a 1000 V se ne mettono 5 in serie: ognuno regge 200 V e $C_{eq} = 2/5 = 0{,}4\,\mu\mathrm F$.
:::

::: attenzione
La rigidità dielettrica è un campo massimo. Non è una carica massima e non è il rapporto tra capacità ($\varepsilon_r$).
:::

::: esame
Domande aperte: effetto del dielettrico in un condensatore carico (capacità $\times\varepsilon_r$, campo e tensione $/\varepsilon_r$ se isolato, cariche di polarizzazione sulle facce); definizione di $\vec P$ e di $\vec D$ (con $\vec P = \varepsilon_0\chi\vec E$ e $\vec D = \varepsilon\vec E$).
:::

::: sintesi
- Polarizzazione: $\vec P$ = momento di dipolo per unità di volume (C/m²); lineare: $\vec P = \varepsilon_0(\varepsilon_r - 1)\vec E$.
- Cariche di polarizzazione sulle facce: $\sigma_p = \vec P \cdot \vec u_n$.
- Nel condensatore: $C = \varepsilon_r C_0$; se isolato $E = E_0/\varepsilon_r$ e $V = V_0/\varepsilon_r$.
- $\varepsilon_r \ge 1$ sempre (vuoto = 1).
- Induzione: $\vec D = \varepsilon_0\vec E + \vec P = \varepsilon\vec E$; il suo flusso conta solo le cariche libere.
- Rigidità dielettrica = campo massimo prima della scarica; aria circa 3 MV/m.
:::

=== 53 dispense
# Lezione 53 — Energia del dipolo in un campo

## Il dipolo elettrico
Un dipolo è una coppia di cariche $+q$ e $-q$ a distanza $d$. Si descrive con il momento di dipolo:

$$\vec p = q\,\vec d$$

dove:
- $\vec p$ = momento di dipolo (C·m), diretto dalla carica negativa alla positiva
- $q$ = modulo di una delle due cariche (C)
- $\vec d$ = vettore dalla carica negativa alla positiva (m)

Lontano dal dipolo il campo cala come $1/r^3$. Scende più in fretta di quello di una carica singola ($1/r^2$), perché i campi delle due cariche quasi si annullano.

## Dipolo in un campo uniforme: momento torcente
Sulle due cariche agiscono forze uguali e opposte: $+q\vec E$ e $-q\vec E$. La forza risultante è zero, quindi il dipolo non trasla. Le due forze però formano una coppia che lo fa ruotare.

$$\vec M = \vec p \times \vec E \qquad M = pE\sin\theta$$

dove:
- $M$ = momento torcente (N·m)
- $E$ = modulo del campo (N/C = V/m)
- $\theta$ = angolo tra $\vec p$ e $\vec E$

Il momento tende ad allineare il dipolo al campo.
- $\theta = 0°$ (allineato): $M = 0$.
- $\theta = 90°$ (perpendicolare): $M = pE$, il massimo.
- $\theta = 180°$ (antiparallelo): $M = 0$, ma l'equilibrio è instabile.

::: esempio
In un campo di $40\,\mathrm{N/C}$ il momento su un dipolo va da 0 a $10^{-26}\,\mathrm{N\,m}$ al variare dell'angolo. Il massimo è $pE$, quindi $p = 10^{-26}/40 = 2{,}5 \cdot 10^{-28}\,\mathrm{C\,m}$.
:::

## Energia potenziale del dipolo
Ogni carica ha energia $qV$. Sommando le due e usando $\vec E = -\nabla V$ si ottiene:

$$U = -\vec p \cdot \vec E = -pE\cos\theta$$

dove:
- $U$ = energia potenziale del dipolo nel campo (J)

Come si arriva: $U = qV(+) - qV(-) = q\,\Delta V$. Tra le due cariche $\Delta V = -E\,d\cos\theta$. Quindi $U = -qdE\cos\theta = -pE\cos\theta$.

| Orientazione | $\theta$ | $U$ | Equilibrio |
|---|---|---|---|
| Parallelo al campo | 0° | $-pE$ (minima) | stabile |
| Perpendicolare | 90° | 0 | non è equilibrio ($M$ massimo) |
| Antiparallelo | 180° | $+pE$ (massima) | instabile |

## Lavoro per ruotare il dipolo
Il lavoro esterno per ruotare lentamente il dipolo è la variazione di energia:

$$L_{est} = \Delta U = U(\theta_2) - U(\theta_1) = pE(\cos\theta_1 - \cos\theta_2)$$

::: esempio
Da parallelo (0°) ad antiparallelo (180°): $L = pE - (-pE) = 2pE$.
:::

## Dipolo in un campo non uniforme
Se il campo cambia da punto a punto, le forze sulle due cariche non sono più uguali. Oltre al momento compare una forza risultante. Il dipolo allineato viene tirato verso la zona dove il campo è più intenso. Per questo un corpo neutro (che si polarizza) viene attratto da un oggetto carico.

## Legame con i dielettrici
Nei dielettrici con molecole polari il campo fa ruotare i dipoli molecolari verso la direzione del campo, dove l'energia è minima. L'agitazione termica si oppone. Ne risulta un allineamento parziale: è la polarizzazione per orientamento.

::: attenzione
$pE\sin\theta$ è il momento torcente. $-pE\cos\theta$ è l'energia. Non scambiarli.
:::

::: sintesi
- $\vec p = q\vec d$ (C·m), dalla carica negativa alla positiva.
- Campo uniforme: forza totale nulla, momento $M = pE\sin\theta$ (massimo a 90°).
- Energia: $U = -\vec p \cdot \vec E = -pE\cos\theta$; minima e stabile se allineato.
- Lavoro da 0° a 180°: $2pE$.
- Campo non uniforme: anche una forza, verso il campo più intenso.
:::

=== 54 dispense
# Lezione 54 — Corrente elettrica

## Cos'è la corrente
In un conduttore in equilibrio gli elettroni si muovono a caso: in media non vanno da nessuna parte. Se applichi una differenza di potenziale, il campo dà loro una direzione privilegiata. Il flusso ordinato di cariche è la corrente elettrica.

La corrente scorre facilmente nei metalli. In modo più debole scorre anche nei liquidi, nei gas e negli isolanti. Esistono anche semiconduttori e superconduttori.

## Intensità di corrente
L'intensità di corrente è la carica che attraversa una sezione del conduttore divisa per il tempo impiegato.

$$i = \frac{\Delta Q}{\Delta t} \qquad i = \frac{dq}{dt}$$

dove:
- $i$ = intensità di corrente (A, ampere)
- $\Delta Q$ = carica che attraversa la sezione (C)
- $\Delta t$ = intervallo di tempo (s)

L'ampere è una grandezza fondamentale del SI. Il coulomb è derivato: $1\,\mathrm C = 1\,\mathrm A \cdot 1\,\mathrm s$. La corrente è uno scalare. Si misura con l'amperometro, inserito in serie nel circuito.

Il verso convenzionale della corrente è quello in cui si muoverebbero le cariche positive. Nei metalli si muovono gli elettroni, in verso opposto. Per gli effetti macroscopici non fa differenza.

::: esempio
- 600 C in un minuto: $i = 600/60 = 10\,\mathrm A$.
- 16 A per 3 minuti: $Q = 16 \cdot 180 = 2880\,\mathrm C$.
- 3 A per un'ora: $Q = 3 \cdot 3600 = 10\,800\,\mathrm C$.
- $1{,}6 \cdot 10^{19}$ elettroni al secondo: $i = 1{,}6 \cdot 10^{19} \cdot 1{,}6 \cdot 10^{-19} = 2{,}56\,\mathrm A$.
:::

::: attenzione
La carica si misura in coulomb (C), non in joule. La corrente è un rapporto carica/tempo, non un prodotto.
:::

## Vettore densità di corrente
La densità di corrente dice quanta corrente passa per unità di superficie, e in che direzione.

$$\vec j = n q \vec v_d$$

dove:
- $\vec j$ = densità di corrente (A/m²)
- $n$ = numero di portatori di carica per unità di volume (1/m³)
- $q$ = carica di un portatore (C); per gli elettroni $-e$
- $\vec v_d$ = velocità media di deriva dei portatori (m/s)

Per gli elettroni $\vec j = -ne\vec v_d$: $\vec j$ è concorde al campo anche se gli elettroni vanno al contrario.

La corrente è il flusso di $\vec j$ attraverso una superficie:

$$i = \int_S \vec j \cdot \vec u_n\,dS \qquad i = jS \ \text{(sezione perpendicolare, } j \text{ uniforme)}$$

::: esempio
Filo di rame con sezione $10\,\mathrm{mm^2}$, corrente 2 A, $n = 8{,}5 \cdot 10^{28}\,\mathrm{m^{-3}}$. $j = 2/10^{-5} = 2 \cdot 10^5\,\mathrm{A/m^2}$. $v_d = j/(ne) \approx 1{,}5 \cdot 10^{-5}\,\mathrm{m/s}$. Gli elettroni derivano lentissimi: pochi centesimi di millimetro al secondo.
:::

## Conservazione della carica ed equazione di continuità
La carica non si crea e non si distrugge. Se da una superficie chiusa esce più corrente di quanta ne entra, la carica dentro diminuisce.

$$\oint_S \vec j \cdot \vec u_n\,dS = -\frac{dq_{int}}{dt}$$

Scrivendo la carica interna come $\int \rho\,dV$ e applicando il teorema della divergenza si ottiene la forma locale, l'equazione di continuità:

$$\nabla \cdot \vec j + \frac{\partial \rho}{\partial t} = 0$$

dove:
- $\rho$ = densità di carica di volume (C/m³)
- $\nabla \cdot \vec j$ = divergenza di $\vec j$ (quanta corrente "esce" da un punto)

## Corrente stazionaria
In regime stazionario la carica interna non cambia: $\partial\rho/\partial t = 0$. Allora $\nabla \cdot \vec j = 0$: quanta corrente entra, tanta ne esce. In un filo a sezione variabile la corrente è la stessa in ogni sezione: $j_1 S_1 = j_2 S_2$. Dove la sezione si stringe, $j$ cresce, come l'acqua in un tubo.

## Legge di Ohm
In un conduttore metallico la corrente è proporzionale alla tensione applicata:

$$V = R\,i$$

dove:
- $V$ = differenza di potenziale ai capi (V)
- $R$ = resistenza (Ω, ohm = V/A)
- $i$ = corrente (A)

Per un filo di lunghezza $L$ e sezione $S$:

$$R = \rho_e\frac{L}{S}$$

dove:
- $\rho_e$ = resistività del materiale (Ω·m)

La forma locale (legge di Ohm generalizzata) lega densità di corrente e campo in ogni punto:

$$\vec j = \sigma_e \vec E = \frac{\vec E}{\rho_e}$$

dove:
- $\sigma_e = 1/\rho_e$ = conducibilità (S/m)

Integrando $\vec j = \sigma_e\vec E$ su un filo uniforme si ritrova $V = Ri$: $E = V/L$ e $i = jS = \sigma_e S V/L$.

::: esempio
Generatore da 9 V, corrente voluta 2 A: $R = V/i = 9/2 = 4{,}5\,\Omega$.
:::

## Effetto Joule e potenza
Una corrente in un resistore dissipa energia in calore. La potenza è:

$$P = V i = R i^2 = \frac{V^2}{R}$$

dove:
- $P$ = potenza dissipata (W)

Il calore prodotto in un tempo $t$ è $Q = R i^2 t$. Dipende dal quadrato della corrente.

::: esempio
- Se la corrente si dimezza, il calore diventa $(0{,}5)^2 = 0{,}25$ volte quello iniziale.
- Resistenza da $10\,\Omega$ con potenza massima 10 W: $V_{max} = \sqrt{PR} = \sqrt{100} = 10\,\mathrm V$.
:::

## Corrente continua e alternata
- **Continua**: verso e intensità costanti nel tempo (pila, batteria).
- **Alternata**: la corrente inverte periodicamente il verso con andamento sinusoidale, $i(t) = I_0\sin(\omega t)$ (rete domestica a 50 Hz).

::: esame
Domande aperte: definire l'intensità di corrente e come si misura ($i = dq/dt$, ampere, amperometro in serie); definire $\vec j = nq\vec v_d$ e l'equazione di continuità ($\nabla\cdot\vec j + \partial\rho/\partial t = 0$); legge di Ohm generalizzata ($\vec j = \sigma_e\vec E$) e forma per i metalli ($V = Ri$, $R = \rho_e L/S$).
:::

::: sintesi
- $i = \Delta Q/\Delta t$ (A); $Q = i\,t$ (C).
- $\vec j = nq\vec v_d$ (A/m²); $i = \int_S \vec j \cdot \vec u_n\,dS$.
- Continuità: $\nabla \cdot \vec j + \partial\rho/\partial t = 0$; stazionario: $\nabla \cdot \vec j = 0$.
- Ohm: $V = Ri$, $R = \rho_e L/S$; forma locale $\vec j = \sigma_e \vec E$.
- Joule: $P = Ri^2 = V^2/R$; il calore va con $i^2$.
- Alternata: inverte il verso in modo sinusoidale.
:::
