"""Scheda corso eCampus (PDF) -> JSON {campi, sezioni markdown}.
Uso: python3 tools/scheda.py <scheda.pdf> <out.json>
"""
import fitz, json, re, sys

FIELDS = ["DIPARTIMENTO", "CORSO DI LAUREA", "INSEGNAMENTO", "CREDITI FORMATIVI UNIVERSITARI (CFU)",
          "ANNO DI CORSO", "ANNO ACCADEMICO", "NOME DOCENTE", "Indirizzo e-mail"]


def title_case(s):
    small = {"e", "di", "dei", "della", "del", "delle", "dello", "ed", "a", "in", "per"}
    w = s.lower().split()
    return " ".join(x if (i and x in small) else x.capitalize() for i, x in enumerate(w))


text = "".join(p.get_text() for p in fitz.open(sys.argv[1]))
lines = [l.strip() for l in text.splitlines()]
lines = [l for l in lines if l and not re.fullmatch(r"\d{1,2}", l)]  # numeri di pagina
info, sections, cur = {}, [], None
for l in lines:
    f = next((f for f in FIELDS if l.startswith(f + ":")), None)
    if f and cur is None:
        info[f] = l.split(":", 1)[1].strip()
        continue
    if re.fullmatch(r"[A-ZÀÈÉÌÒÙ’' ,()/\-]{8,}", l):  # intestazione di sezione in maiuscolo
        cur = dict(title=l.strip().capitalize(), body=[])
        sections.append(cur)
        continue
    if cur is not None:
        cur["body"].append(l)


def to_md(body):
    out = []
    for l in body:
        if re.match(r"^(\d+\.|[a-z]\)|\d\)|•|-)\s*", l) or not out:
            out.append(re.sub(r"^•\s*", "- ", l))
        else:
            out[-1] += " " + l
    return "\n\n".join(re.sub(r"^(\d+\.)\s+", r"\1 ", o) for o in out)


res = dict(
    name=title_case(info.get("INSEGNAMENTO", "")),
    corso=title_case(info.get("CORSO DI LAUREA", "")),
    dipartimento=info.get("DIPARTIMENTO", ""),
    cfu=info.get("CREDITI FORMATIVI UNIVERSITARI (CFU)", ""),
    anno=info.get("ANNO DI CORSO", ""),
    aa=info.get("ANNO ACCADEMICO", ""),
    docente=title_case(info.get("NOME DOCENTE", "")),
    sections=[dict(title=s["title"], md=to_md(s["body"])) for s in sections if s["body"]],
)
json.dump(res, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
print(res["name"], "|", res["docente"], "|", res["cfu"], "CFU |", [s["title"] for s in res["sections"]])
