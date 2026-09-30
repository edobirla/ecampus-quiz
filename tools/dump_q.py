"""Stampa testo, opzioni, risposta e spiegazione attuale delle domande di una materia (per rivedere le spiegazioni).
Uso: python3 tools/dump_q.py fisica 7-1 7-12   (id p7-1 … p7-12)"""
import json, re, sys, html
subj, a, b = sys.argv[1:4]
d = json.load(open(f"app/data/{subj}/subject.json"))
L0, N0 = map(int, a.split("-")); L1, N1 = map(int, b.split("-"))
def plain(h):
    h = re.sub(r'<span class="m[^"]*">(.*?)</span>', r'$\1$', h or "", flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", h)).strip()
for q in d["questions"]:
    m = re.match(r"p(\d+)-(\d+)$", q["id"])
    if not m: continue
    l, n = int(m[1]), int(m[2])
    if (l, n) < (L0, N0) or (l, n) > (L1, N1): continue
    print(f"=== {l}-{n} [{q['type']}]  {plain(q['t'])}")
    if q["type"] == "closed":
        for i, o in enumerate(q["o"]): print(f"  {'ABCDE'[i]}{' (GIUSTA)' if i == q['c'] else ''}: {plain(o)}")
        print("  SPIEGAZIONE ATTUALE:", plain(q.get("e")))
