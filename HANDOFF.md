# Handoff — eCampus Quiz

> Generated on 2026-09-30 — resume in a new Claude Code session.

---

## 🎯 Goal

Personal offline PWA (vanilla JS, no framework) for studying eCampus exams (Chimica, Fisica) on iPad, iPhone and Mac: simulated exam (24 closed + 2 open, pass ≥18/30), exam with theory + hints, practice by lesson, 3-level hints, theory with annotations (highlighter + Apple Pencil), spaced repetition / daily plan, search, stats, cross-device sync via backup file. User writes in Italian — reply in Italian. Read `CLAUDE.md` first: pipeline, conventions, publish commands. Previous handoffs in `handoff-history/` (2026-09-28 has the full feature/failed-attempts list — still valid).

---

## 📍 Current State

All committed on `main` (commit `7021aea`) and **published** at https://edobirla.github.io/ecampus-quiz/ (sw `VERSION = "ecq-v10"`, verified live). Tests pass (`node tools/test_grade.mjs`, `node tools/test_sync.mjs`).

**Done this session:**
- **Exam-date picker bug (iOS):** tapping the empty `<input type="date">` made Safari set today + fire `change`; the handler called `route()` → re-render closed the picker, a second tap was needed. Fix: `change` handler for `data-date` no longer re-renders (`app/app.js:1035`). Home refreshes on navigation; the "plan" sheet re-renders on close (`closesheet` handler). Verified on Mac browser only — **not yet on a real iPhone**.
- **Fisica theory rewritten from the professor's lecture notes** (`Fisica/Lezioni/01..72.pdf`, git-ignored). 69 paniere lessons now in `tools/content/fisica/teoria_src/A.md … J.md` (old `01–05.md` deleted). Style: short sentences, one idea each, concept → formula → meaning + SI unit of every symbol, `::: esempio/attenzione/esame/sintesi` callouts. Each lesson covers all paniere questions of that lesson.
  - `=== N dispense` header = written from the notes → build sets `generated: false` → no "Riassunto generato" badge (`tools/build.mjs` ~line 242). Lessons 65–72 have no notes → `=== N`, rewritten from old generated theory, keep the badge.
  - **Numbering of notes ≠ paniere numbering** (e.g. note 50 = paniere L41; notes 12/13 titles are swapped vs content: 12 = non-inertial frames, 13 = friction). Notes 43–48 (mechanical waves) match no paniere lesson → unused. Note 01 = course intro.
  - Two errors in the notes fixed in the theory: note 19 p.11 (potential minimum = *stable* equilibrium), note 20 p.5 (2.35 kW not W).
- `CLAUDE.md` updated with the `=== N dispense` convention and the numbering mismatch.

**Not verified / open:**
- Date picker fix on real iOS.
- Apple Pencil on a real iPad still never tested (see previous handoff for the unknowns).
- Existing highlights on old Fisica theory: text changed, so highlights whose quote no longer exists only show in `#/appunti`.
- Formulas: subagents could not view PDF pages via Read (no poppler); they used PyMuPDF text + rendered only some pages; formulas are written in standard form. KaTeX compiles for all (checked).

---

## 📁 Relevant Files

| File | Role / Status |
|------|--------------|
| `app/app.js` | SPA; line ~1035 date `change` handler (no `route()`). |
| `app/sw.js` | `VERSION = "ecq-v10"`; bump on every deploy. |
| `tools/build.mjs` | Theory parser accepts `=== N dispense` (`fromNotes`). |
| `tools/content/fisica/teoria_src/A–J.md` | New Fisica theory (batches: A 2–8, B 9–14, C 15–20, D 21–27, E 28–33, F 34–40, G 41–47, H 48–54, I 55–61, J 62–72). |
| `Fisica/Lezioni/*.pdf` | Professor's notes (git-ignored, never publish). |
| `handoff-history/HANDOFF-2026-09-28.md` | Previous handoff: full feature list, failed attempts, gotchas. |

---

## ❌ Failed Attempts

### Reading PDF pages as images with the Read tool
- **What:** subagents used `Read` with `pages` on the lecture PDFs.
- **Why it failed:** `pdftoppm`/poppler not installed → no page images. Workaround: PyMuPDF (`fitz`) — `page.get_text()` for text, `page.get_pixmap(dpi=80).save(png)` then Read the PNG. (A full render of all 1590 pages was made in the session scratchpad, which is temporary.)

### Assuming note file number = lesson number
- Wrong: header parsing showed `01.pdf` = intro/ripasso, and paniere lessons are numbered differently from the notes. Map by content (see Current State).

---

## ✅ Working Solutions

- **Mapping notes → paniere lessons by topic**, with per-lesson dumps of paniere questions (text + ✔ answer + explanation) given to subagents so theory covers every question.
- **Style guide file + 10 parallel subagents (~7 lessons each)**, then a check script: all lesson ids present, `# Lezione NN — Titolo`, `::: sintesi`, balanced `:::`, every `$…$` compiles with KaTeX (use `tools/node_modules/katex`).
- Don't re-render on `change` of native inputs on iOS (it closes the native picker).

---

## 🔧 Dependencies & Setup

```bash
cd tools && npm install          # marked, katex
cd tools && node build.mjs       # rebuild app/data (Chimica theory needs /Chimica/Riassunti/Sorgenti, only on this Mac)
node tools/test_grade.mjs && node tools/test_sync.mjs
# preview: .claude/launch.json → server "app" (python http.server :8765 --directory app)
python3 -c "import fitz"         # PyMuPDF is installed, used to read the lecture PDFs
```
Publish: see `CLAUDE.md` (bump `VERSION` first). Check live: `until curl -s "https://edobirla.github.io/ecampus-quiz/sw.js?n=$RANDOM" | grep -q 'ecq-vN'; do sleep 5; done`.

---

## ➡️ Next Steps

1. Ask the user whether the exam-date picker now opens correctly on first tap on iPhone/iPad.
2. Ask for feedback on the new Fisica theory (clarity, length). If some lessons are too long or dense, rewrite those batch sections in `teoria_src/*.md` and rebuild.
3. Paniere answers that don't match the math (answers NOT changed; most already flagged in explanations): p5-4 (1200 m, not 2400), p34-27 (~0.6 °C), p46-5 (works only with 4 µC), p12-22 (works only with 100 kg), p28-6 (8.7 vs 8.2), p31-41 (294 vs 290.4 N), p34-15 (17.7 vs 17.5 °C), p35-2 (3.9 vs 3.8 kJ), p34-9 (273.16 K is the triple point), p31-21 (4900 N is net force, not buoyancy), p40-13 (ambiguous). Offer to verify each and mark with `!` + note where missing.
4. Optional: add theory for mechanical waves (notes 43–48) only if the user wants it (no paniere lesson for it).
5. Still pending from before: Apple Pencil real-device test; rewriting the 239 Chimica explanations that cite letters (to allow shuffling); design polish.

---

## ⚠️ Gotchas / Traps

- Repo and site are **public**; never commit PDFs or `/Chimica`, `/Fisica`.
- Never edit `app/data/`; always `node build.mjs`. Never edit the user's summaries in `/Chimica`.
- Only one correct answer per question; hints use `[[X]]`, never clear letters.
- `git rm` of all files in a folder deletes the folder: `mkdir -p` before copying new files in.
- Browser pane caches aggressively: unregister SW + clear caches + `fetch(url,{cache:'reload'})` before testing.
- `confirm()` blocks the preview pane: set `window.confirm = () => true` in tests.

---

## 💬 Notes

- User preferences: Italian; concise; wants theory "capibile al volo" (short, clear sentences); asks to publish explicitly ("pubblica").
- Tests on iPhone/iPad/Mac.
