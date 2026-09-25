"""Stampa compatta delle domande di una materia per lezione. Uso: python3 tools/dump.py fisica 2 8"""
import json, sys
d = json.load(open(f"tools/raw/{sys.argv[1]}.json"))
a, b = int(sys.argv[2]), int(sys.argv[3])
for L in d["lessons"]:
    if a <= L["num"] <= b:
        print(f"## L{L['num']}")
        for q in L["questions"]:
            if q["type"] == "closed":
                print(f"{L['num']}-{q['n']} {q['text']} || " + " | ".join(f"{'ABCDE'[i]}) {o}" for i, o in enumerate(q["options"])))
            else:
                print(f"{L['num']}-{q['n']} [APERTA] {q['text']}")
