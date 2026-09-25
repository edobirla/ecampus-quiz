"""Collega le domande del paniere di Chimica a lezione di teoria + soluzione ragionata.

Legge Sorgenti/90 Esercizi.md e 95 Soluzioni.md (formato pandoc: ::: {.esercizio titolo="..."}).
Output: tools/raw/chimica_map.json
"""
import json, re, pathlib

SRC = pathlib.Path(__file__).parent.parent / "Chimica/Riassunti/Sorgenti"
TIT = re.compile(r'^::: \{\.(esercizio|extra|soluzione) titolo="([^"]*)"\}')


def blocks(path):
    """-> [(sezione_lez, kind, titolo, body)]"""
    out, sec, cur, depth = [], None, None, 0
    for line in open(path, encoding="utf-8"):
        m = re.match(r"^## .*\{#(?:es|sol)-lez([\d-]+)\}", line)
        if m and cur is None:
            sec = int(m.group(1).split("-")[0])
            continue
        m = TIT.match(line)
        if m and cur is None:
            cur, depth = [sec, m.group(1), m.group(2), []], 1
            continue
        if cur is not None:
            if line.startswith(":::") and not re.match(r"^:::.+:::\s*$", line):
                depth += 1 if line.strip() != ":::" else -1
                if depth == 0:
                    body = "".join(cur[3])
                    body = re.sub(r"\[\]\{#[^}]*\}\n?", "", body)
                    body = re.sub(r"\[↳ torna alla domanda\]\([^)]*\)\n?", "", body)
                    out.append((cur[0], cur[1], cur[2], body.strip()))
                    cur = None
                    continue
            cur[3].append(line)
    return out


def keys(title):
    """'Paniere · Lez. 43 · domande 15–19 — ...' -> [(43,15)...(43,19)]"""
    m = re.search(r"Lez\. (\d+) · domand[ae] (\d+)(?:[–-](\d+))?", title)
    if not m:
        return []
    a, b = int(m.group(2)), int(m.group(3) or m.group(2))
    return [(int(m.group(1)), n) for n in range(a, b + 1)]


res = {"paniere": {}, "extra": []}
for sec, kind, title, body in blocks(SRC / "90 Esercizi.md"):
    if kind == "extra":
        res["extra"].append(dict(theory=sec, title=title, question=body))
    for k in keys(title):
        res["paniere"].setdefault(f"{k[0]}-{k[1]}", {}).update(theory=sec, title=title.split("—", 1)[-1].strip())
sol_extra = {}
for sec, kind, title, body in blocks(SRC / "95 Soluzioni.md"):
    if title.startswith("Extra"):
        sol_extra[title] = body
    for k in keys(title):
        e = res["paniere"].setdefault(f"{k[0]}-{k[1]}", {"theory": sec})
        e["solution"] = body
        m = re.search(r"Risposta[^:*\n]*:\s*\**\s*([a-e])\b", body)
        if m and len(keys(title)) == 1:
            e["letter"] = m.group(1)
for x in res["extra"]:
    x["solution"] = sol_extra.get(x["title"].split("—")[0].strip(), "")
json.dump(res, open(pathlib.Path(__file__).parent / "raw/chimica_map.json", "w"), ensure_ascii=False, indent=1)
print(len(res["paniere"]), "voci paniere,", sum("solution" in v for v in res["paniere"].values()), "con soluzione,",
      sum("letter" in v for v in res["paniere"].values()), "con lettera;", len(res["extra"]), "extra,",
      sum(bool(x["solution"]) for x in res["extra"]), "con soluzione")
