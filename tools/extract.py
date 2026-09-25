"""Estrae le domande da un paniere eCampus (PDF) in JSON grezzo.

Uso: python3 tools/extract.py <paniere.pdf> <out.json> <cartella_immagini>
Rileva: lezioni, domande chiuse (opzioni + risposta evidenziata se presente), domande aperte.
"""
import fitz, json, os, re, sys
from collections import Counter

SUB = str.maketrans("0123456789+-", "₀₁₂₃₄₅₆₇₈₉₊₋")
SUP = str.maketrans("0123456789+-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻")


# Alcuni panieri (es. Chimica) usano un subset Times senza ToUnicode: il "testo" è il glyph id.
# Regular: gid+28, Bold: gid+29 per l'ASCII; i simboli sotto sono mappati a mano da un atlante dei glifi.
SPECIAL = {
    28: {3: " ", 115: "°", 154: "×", 163: "à", 171: "è", 172: "é", 181: "ò", 188: "ù", 846: "Δ",
         878: "ε", 884: "λ", 889: "π", 3916: "−", 3922: "’"},
    29: {114: "°", 119: "µ", 121: "·", 124: "º", 153: "×", 162: "à", 170: "è", 171: "é", 174: "ì",
         180: "ò", 184: "ö", 187: "ù", 836: "Δ", 868: "ε", 874: "λ", 2914: "−", 2915: "−", 2921: "’",
         2930: "·", 2964: "/", 3170: "→", 3172: "↔", 3215: "⇄", 3217: "⇆", 3229: "⇒", 3251: "Δ"},
}
KEEP_FONT = re.compile(r"font0000|FreeSerif|Times", re.I)  # il resto sono annotazioni a mano/app


def decode(chars, font, bold):
    """chars = tuple di texttrace (unicode, gid, origin, bbox)."""
    if not font.startswith("font0000"):
        return "".join(chr(c[0]) for c in chars)
    gids = [c[1] for c in chars]
    k = 29 if 3 in gids else 28 if 4 in gids else 29 if bold else 28
    return "".join(SPECIAL[k].get(g) or (chr(g + k) if 32 <= g + k <= 126 else "?") for g in gids)


def is_highlight(fill):
    if not fill:
        return False
    r, g, b = fill
    return max(r, g, b) - min(r, g, b) > 0.25 and max(r, g, b) > 0.5 and not (b > r and b > g)


def page_lines(page):
    spans = []
    for s in page.get_texttrace():
        if not KEEP_FONT.search(s["font"]) or s["type"] != 0:
            continue
        bold = bool(s["flags"] & 16) or "Bold" in s["font"]
        t = decode(s["chars"], s["font"], bold)
        if not t.strip():
            continue
        x0, y0, x1, y1 = s["bbox"]
        if y0 < 70 or y0 > 815:
            continue
        spans.append(dict(t=t, x0=x0, y0=y0, x1=x1, y1=y1, size=s["size"], bold=bold))
    spans.sort(key=lambda s: ((s["y0"] + s["y1"]) / 2, s["x0"]))
    lines = []
    for s in spans:
        cy = (s["y0"] + s["y1"]) / 2
        if lines and abs(lines[-1]["cy"] - cy) < 5:
            lines[-1]["spans"].append(s)
        else:
            lines.append(dict(cy=cy, spans=[s]))
    out = []
    for ln in lines:
        ss = sorted(ln["spans"], key=lambda s: s["x0"])
        base = max(s["size"] for s in ss)
        main = [s for s in ss if s["size"] >= base * 0.85]
        mcy = sum((s["y0"] + s["y1"]) / 2 for s in main) / len(main)
        txt = ""
        for s in ss:
            t = s["t"]
            if s["size"] < base * 0.85:
                t = t.strip()
                scy = (s["y0"] + s["y1"]) / 2
                t = t.translate(SUP) if scy < mcy else t.translate(SUB)
            txt += t
        txt = txt.replace("", "").replace("", "").strip()
        out.append(dict(text=re.sub(r"\s+", " ", txt), x0=ss[0]["x0"], y0=min(s["y0"] for s in ss),
                        y1=max(s["y1"] for s in ss), bold=main[0]["bold"]))
    return out


def is_mark(color):
    # evidenziatore/cerchio giallo o verde (esclude inchiostro nero/blu/rosso delle note)
    if not color:
        return False
    r, g, b = color
    return g > 0.6 and g - b > 0.3


def save_image(doc, xref, imgdir, cache):
    if xref not in cache:
        pix = fitz.Pixmap(doc, xref)
        if pix.n - pix.alpha >= 4:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        name = f"i{xref}.png"
        pix.save(os.path.join(imgdir, name))
        cache[xref] = name
    return f"![](img/{cache[xref]})"


def extract(path, imgdir):
    doc = fitz.open(path)
    os.makedirs(imgdir, exist_ok=True)
    cache = {}
    head = doc[0].get_text()
    lessons, cur, q = [], None, None
    for pno, page in enumerate(doc):
        draws = page.get_drawings()
        # checkbox: rettangolo o 4 segmenti ~9pt alla x≈37
        boxes = [d["rect"] for d in draws if 34 < d["rect"].x0 < 40 and 6 < d["rect"].height < 12 and d["rect"].width < 12]
        marks = [d["rect"] for d in draws if d["rect"].y0 > 70 and (is_mark(d.get("fill")) or is_mark(d.get("color")))]
        # X a mano dentro la checkbox: tratti curvi il cui centro cade nel quadratino
        xs = [d["rect"] for d in draws if any(it[0] == "c" for it in d["items"])]
        lines = page_lines(page)
        for bx in boxes:  # opzioni-immagine: checkbox senza testo accanto
            cy = (bx.y0 + bx.y1) / 2
            if any(abs((l["y0"] + l["y1"]) / 2 - cy) < 6 for l in lines):
                continue
            imgs = [i for i in page.get_image_info(xrefs=True)
                    if i["xref"] and i["bbox"][1] > 70 and i["bbox"][0] > 40 and i["bbox"][1] - 12 < cy < i["bbox"][3] + 4]
            if imgs:
                bb = imgs[0]["bbox"]
                lines.append(dict(text=save_image(doc, imgs[0]["xref"], imgdir, cache), x0=bb[0], y0=cy - 4, y1=cy + 4,
                                  box=True, bot=bb[3]))
        for i in page.get_image_info(xrefs=True):  # immagini nel testo della domanda (non opzioni)
            bb = i["bbox"]
            if i["xref"] and bb[1] > 70 and bb[0] > 30 and not any(l.get("bot") == bb[3] for l in lines) \
                    and not any(bb[1] - 12 < (b.y0 + b.y1) / 2 < bb[3] + 4 for b in boxes):
                lines.append(dict(text=save_image(doc, i["xref"], imgdir, cache), x0=bb[0], y0=bb[1], y1=bb[3], img=True))
        lines.sort(key=lambda l: (l["y0"] + l["y1"]) / 2)
        for ln in lines:
            t = ln["text"]
            m = re.match(r"^Lezione (\d{3})$", t)
            if m:
                cur = dict(num=int(m.group(1)), questions=[])
                lessons.append(cur)
                q = None
                continue
            if cur is None:
                continue
            m = re.match(r"^(\d{2,3})\.\s+(.*)", t)
            if m and ln["x0"] < 42:
                q = dict(n=int(m.group(1)), text=m.group(2), options=[], correct=[], xmark=[], page=pno + 1)
                cur["questions"].append(q)
                continue
            if q is None:
                continue
            cy = (ln["y0"] + ln["y1"]) / 2
            box = next((b for b in boxes if abs((b.y0 + b.y1) / 2 - cy) < 6), None)
            if box or ln.get("box"):
                q["options"].append(t)
                k = len(q["options"]) - 1
                y0, y1 = cy - 6, ln.get("bot", cy + 6)
                if any(h.y0 - 3 < (y0 + y1) / 2 < h.y1 + 3 and h.x0 < 120 for h in marks):
                    q["correct"].append(k)
                if box and any(box.x0 - 3 < (r.x0 + r.x1) / 2 < box.x1 + 3 and box.y0 - 3 < (r.y0 + r.y1) / 2 < box.y1 + 3
                               for r in xs):
                    q["xmark"].append(k)
            elif q["options"] and not ln.get("img"):
                q["options"][-1] += " " + t
            else:
                q["text"] += ("\n\n" if ln.get("img") else " ") + t
    for L in lessons:
        for q in L["questions"]:
            q["type"] = "closed" if q["options"] else "open"
            if not q["correct"] and len(q["xmark"]) == 1:
                q["correct"] = q["xmark"]
    return dict(header=head, lessons=lessons)


if __name__ == "__main__":
    data = extract(sys.argv[1], sys.argv[3])
    json.dump(data, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
    qs = [q for L in data["lessons"] for q in L["questions"]]
    c = Counter(q["type"] for q in qs)
    print(len(data["lessons"]), "lezioni", dict(c),
          "con risposta:", sum(1 for q in qs if q["correct"]),
          "multi:", sum(1 for q in qs if len(q["correct"]) > 1),
          "opzioni!=4:", sum(1 for q in qs if q["options"] and len(q["options"]) != 4))
