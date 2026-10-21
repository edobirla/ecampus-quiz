"""Quiz delle "Sessioni di studio" (PDF NN_SSk_1.pdf + NN_SSk_Risposte.pdf) -> esercizi extra nel formato map di build.mjs.

Uso: python3 tools/sessioni.py <cartella_sessioni> <out_map.json> <cartella_img>
Il testo estratto da LaTeX è grezzo (es. "7−→" per ↦): le versioni leggibili si scrivono con T:/OPT: nei file risposte.
"""
import fitz, glob, json, os, re, sys

FIX = [("7−→", "↦"), ("ﬁ", "fi"), ("ﬀ", "ff"), ("ﬂ", "fl"), ("ﬃ", "ffi")]


def text(path):
    t = "\n".join(p.get_text() for p in fitz.open(path))
    t = re.sub(r"© \d{4} Gennaro Amendola\s*\nVersione [\d.]+\s*\n?", "", t)
    for a, b in FIX:
        t = t.replace(a, b)
    t = re.sub(r"[\uf8e6-\uf8fe\x1a]", "", t)  # pezzi di parentesi grandi (matrici, sistemi)
    return t


def figure(pdf, num, imgdir):
    """Ritaglia in PNG il disegno vettoriale tra il testo della Domanda num e la sua opzione (a)."""
    for page in pdf:
        hit = page.search_for(f"Domanda {num}.")
        if not hit:
            continue
        top = hit[0].y1
        bottom = min((r.y0 for r in page.search_for("(a)") if r.y0 > top), default=page.rect.y1)
        rs = [d["rect"] for d in page.get_drawings() if top < d["rect"].y0 and d["rect"].y1 < bottom and d["rect"].height > 2]
        if not rs:
            return ""
        clip = fitz.Rect(min(r.x0 for r in rs), min(r.y0 for r in rs), max(r.x1 for r in rs), max(r.y1 for r in rs)) + (-14, -14, 14, 14)
        above = [w[3] for w in page.get_text("words") if top - 20 < w[1] and w[3] <= min(r.y0 for r in rs) + 1]
        clip.y0 = max([clip.y0] + [y + 2 for y in above])  # non includere la fine del testo della domanda
        name = f"ss{num.replace('.', '_')}.png"
        os.makedirs(imgdir, exist_ok=True)
        page.get_pixmap(clip=clip, dpi=200).save(os.path.join(imgdir, name))
        return f"\n\n![](data/geometria/img/{name})"
    return ""


def main(folder, out, imgdir):
    extra = []
    for qf in sorted(glob.glob(os.path.join(folder, "*_SS*_1.pdf"))):
        lez = int(os.path.basename(qf)[:2])
        sess = re.search(r"Sessione di studio ([\d.]+)", text(qf))
        ans = dict(re.findall(r"Risposta alla Domanda ([\d.]+)\.\s*\(([a-e])\)", text(qf.replace("_1.pdf", "_Risposte.pdf"))))
        body = text(qf).split("la risposta esatta è una sola.", 1)[-1]
        for num, q in re.findall(r"Domanda\s+(\d+\.\d+)\.\s*(.*?)(?=Domanda\s+\d+\.\d+\.|\Z)", body, re.S):
            parts = re.split(r"\n\(([a-e])\)\s*", "\n" + q.strip())
            stem = " ".join(parts[0].split())
            if "figura" in stem:
                stem += figure(fitz.open(qf), num, imgdir)
            opts = [" ".join(parts[i + 1].split()) for i in range(1, len(parts) - 1, 2)]
            opts = [re.sub(r"Lezione \d+\..*$", "", o).strip() for o in opts]  # intestazione di pagina finita in coda
            extra.append(dict(
                title=f"Sessione di studio {sess.group(1) if sess else lez} · D. {num}", theory=lez,
                question=stem + "\n" + "\n".join(f"{'abcde'[i]}. {o}" for i, o in enumerate(opts)),
                solution=f"**Risposta: {ans[num]}**" if num in ans else ""))
    json.dump(dict(paniere={}, extra=extra), open(out, "w"), ensure_ascii=False, indent=1)
    print(len(extra), "domande,", sum(1 for x in extra if not x["solution"]), "senza risposta")


if __name__ == "__main__":
    main(*sys.argv[1:])
