# Handoff — eCampus Quiz

> Generated on 2026-09-28 18:24 — resume in a new Claude Code session.

---

## 🎯 Goal

Personal offline PWA (vanilla JS, no framework) for studying eCampus exams (Chimica, Fisica) on iPad, iPhone and Mac: simulated exam (24 closed + 2 open, pass ≥18/30), exam with theory + hints, practice by lesson, 3-level hints, theory with annotations (highlighter + Apple Pencil), spaced repetition / daily plan, search, stats, cross-device sync via backup file. User writes in Italian — reply in Italian. Read `CLAUDE.md` first: it has the pipeline, conventions and publish commands.

---

## 📍 Current State

Everything below is committed on `main` and **published** at https://edobirla.github.io/ecampus-quiz/ (gh-pages, sw `VERSION = "ecq-v9"`). Tests pass: `node tools/test_grade.mjs`, `node tools/test_sync.mjs`.

**Working (built this session and the previous one):**
- **Exam with theory + hints** (`newExam(true)`, `res.open = 1`): same timer/questions; theory opens in a sheet (read-only annotations); kept in history but excluded from averages/chart/passed counts.
- **Hints**: 3 per question for ALL 1819 valid questions (`tools/content/<id>/hints_NN.txt`), written then fully reviewed by 20 subagents each. Options are referenced as `[[B]]` (original letter); `optLetters()` in app.js maps to the displayed (shuffled) letter.
- **Option shuffling** (`settings.shuffleOpts`, `sess.perm`); disabled per question when options cite each other or when the explanation cites letters in clear (`LETTER_REF`/`citesLetters`) — ~239 Chimica questions stay unshuffled because the user's own explanations say "(b)", "Risposta: c", etc.
- **One correct answer only** (user's explicit rule). Ambiguous questions keep the paniere answer marked `!` with a note in the explanation. Duplicate options in the PDF are dropped at build (`dropDuplicates` / `optKey` in build.mjs, remaps `c` and `[[X]]`).
- **Open-answer grading** = 3 criteria from the course sheets (content, application/numeric, scientific language), 1 pt each (`CRITERIA` in grade.js); manual override 0–3 in results (updates exam score and the answer log); ratios "1:2" accepted both ways.
- **Stats log + backup**: `app/sync.js` — answer log keyed by id+timestamp is the source of truth, `mergeStats`/`mergeNotes` merge without duplicates, deletions propagate (tombstones), newest `mt`/`t` wins. Export via share sheet / download, import merges.
- **Spaced repetition + daily plan** (Home "Studio di oggi"): GAPS 1/3/7/14/30 days; Fisica `paniere: true` (target = paniere only), Chimica not (target = all questions, theory-first). Exam date per subject in settings.
- **Search** (`#/cerca`) in questions + theory.
- **Theory annotations** (`app/notes.js`, "Annota" button on each lesson): highlights anchored to text (block index + char offsets + quote, fallback search by quote) drawn with CSS Custom Highlight API; highlighter tool (tap a color without selection, pass the Pencil/mouse over text, snaps to whole words, draft preview `hl-draft`); select-text-then-color still works; pen on a canvas anchored per block (coords as fraction of width); eraser (also removes highlights); undo; show/hide ink; finger double-tap = eraser ↔ previous tool; `#/appunti` page lists highlights/notes per lesson. Stored in `ecq:notes:<id>`, included in backup.
- **Offline**: SW precaches shell + Geist font; after load the app prefetches all subject data, 140 theory lessons, 51 question images and 20 KaTeX fonts (verified on the live site).
- **Design pass** (skill `~/.claude/skills/redesign-existing-projects`): Geist variable font vendored (`app/vendor/geist`, OFL), flat subject-colored hero, single stats strip, no all-caps labels, hover states, tabular numbers, skip link, no borders on light-mode cards.
- **Content fixes** in `tools/content/chimica/02_correzioni.txt` (verified by me): p25-10→C, p30-1→D, p37-4→A, p47-22→A, rewritten model answers p9-1, p11-3…9, p17-1, p18-5, p22-4, p28-4 (figure is readable), p36-5, p38-21, p42-20/26/29/30/34, p43-31, p45-11, x56, x114, x150, x159; notes on p4-2, p16-6, p16-8, p41-6, p42-12, p43-3, p43-21, x147; texts x21, x181; p6-2 options rebuilt from the PDF. Fisica: p22-1, p22-6, p6-9 marked uncertain with notes.

**Not verified / open:**
- **Apple Pencil on a real iPad was never tested** (the browser pane and the simulator can't emulate it). Unknowns: does the Pencil scroll the page while drawing/highlighting (we `preventDefault` on `touchstart`/`touchmove` when `touch.touchType === "stylus"`), is `caretRangeFromPoint` precise enough for the highlighter, does the finger double-tap conflict with Safari gestures.
- Highlights need Safari ≥ 17.2 (Highlight API); older Safari shows them only in `#/appunti`.

---

## 📁 Relevant Files

| File | Role / Status |
|------|--------------|
| `CLAUDE.md` | Pipeline, conventions (one correct answer, `[[X]]` hints, `x…` overrides with `T:`), publish commands. Updated this session. |
| `app/app.js` | Whole SPA: views, runner (hints, theory sheet, shuffle), results (manual grade), backup, plan, search, annotation toolbar (`annotBar`, `toggleEraser`, `editHighlight`, `views.appunti`). |
| `app/notes.js` | Annotation engine: `mountNotes(article, {lesson,get,save,editable,onHighlightTap,onDoubleTap})`, exports `HL_COLORS`, `INK_COLORS`, `INK_WIDTHS`. |
| `app/sync.js` | `migrate`, `rebuildQ`, `mergeStats`, `mergeNotes` (ES module, tested by `tools/test_sync.mjs`). |
| `app/grade.js` | Open-answer grading, `CRITERIA`. |
| `app/sw.js` | Offline cache; **bump `VERSION` on every deploy** (now `ecq-v9`). |
| `app/styles.css` | Tokens light/dark, `--hl-0..3`, `::highlight(...)`, annotation bar, design fixes at the bottom. |
| `app/vendor/geist/` | Geist variable fonts + LICENSE. |
| `tools/build.mjs` | Builds `app/data/`; parses hints (`@id` + `- `), answers (`N-M X[!]`, `xNN`, `APERTA`, `KW:`, `OPT:`, `T:`), `dropDuplicates`. |
| `tools/content/<id>/hints_NN.txt` | Reviewed hints (20 files). `@id !! …` lines = review notes, ignored by the build. |
| `tools/content/chimica/02_correzioni.txt` | All corrections from this session's review. |
| `tools/subjects.json` | `fisica` has `"paniere": true`. |
| `handoff-history/HANDOFF-2026-09-27.md` | Previous handoff. |

---

## ❌ Failed Attempts

### Hints citing option letters in clear
- **What:** First-pass hints said "Scarta B e C".
- **Why it failed:** options are shuffled at runtime → hint pointed to the wrong options (user saw "scarta B" when B was correct). Fixed with `[[X]]` placeholders + full rewrite; explanations with letters block shuffling instead.

### Multiple correct answers (`B+C`, `q.alt`)
- **What:** Added support for several correct options on ambiguous questions.
- **Why it failed:** user rejected it — "solamente una è giusta". Removed; use the paniere answer + `!` + note.

### Duplicate-option detection by plain text
- **What:** `dropDuplicates` compared option text after stripping tags.
- **Why it failed:** image-only options became empty strings and were merged (Chimica p5-x lost options). Fixed: `optKey` keeps `img src`, trims trailing punctuation/case.

### `OPT:` override with `$…$`
- Paniere options go through `plain()` (escaped text, no Markdown/TeX) → use plain Unicode (λ, ·) in `OPT:` lines.

### Apple Pencil double-tap (barrel) for eraser
- Not exposed to web pages by Safari. Replaced with finger double-tap.

### Browser-pane screenshots of scrolled pages
- Show a blank band at the top with sticky elements shifted — **tool artifact**, not an app bug (DOM positions correct; verified in iOS Simulator Safari). Don't "fix" CSS for it.

### Synthetic PointerEvents with arbitrary `pointerId`
- `setPointerCapture` throws for non-active pointers; wrapped in try/catch in the highlighter. Use it in tests or pointerId 1.

### Subagent review batches
- Several agents hit the session rate limit mid-run; resuming them with `SendMessage` (their agentId) kept their work. Always validate outputs with a script (all ids, exactly 3 hints, no letters outside `[[ ]]`).

---

## ✅ Working Solutions

- **Text-anchored highlights** (block + offsets + quote) instead of drawn marks → identical on phone/Mac regardless of reflow.
- **Pen strokes anchored to the block where they start**, coords as fractions of article width → scale with width, stay next to their paragraph.
- **Event-log stats** (`[id, ok, t, mt?]`) → backups merge idempotently.
- **Build-time overrides** for everything wrong in the source material (never edit `app/data/` or the user's summaries in `/Chimica`).
- **Review with subagents**: batches of ~95 questions, instructions file in scratchpad, then *verify flagged items yourself* before changing answers.

---

## 🔧 Dependencies & Setup

```bash
cd tools && npm install          # marked, katex
cd tools && node build.mjs       # rebuild app/data (needs /Chimica/Riassunti/Sorgenti, git-ignored, only on this Mac)
node tools/test_grade.mjs && node tools/test_sync.mjs
# preview: .claude/launch.json → server "app" (python http.server :8765 --directory app)
```

Publish (after bumping `VERSION` in `app/sw.js`):
```bash
git add -A && git commit -m "…" && git push origin main
git subtree split --prefix app -b gh-pages-tmp && git push -f origin gh-pages-tmp:gh-pages && git branch -D gh-pages-tmp
```
Check the live site: `until curl -s "https://edobirla.github.io/ecampus-quiz/sw.js?n=$RANDOM" | grep -q 'ecq-vN'; do sleep 5; done`.

---

## ➡️ Next Steps

1. **Ask the user how Apple Pencil works on the real iPad** (pen, highlighter, eraser via finger double-tap). Likely fixes if broken: page scrolls while drawing → also call `preventDefault` on `pointerdown` for `pointerType === "pen"` / add `touch-action: none` on the article only while tool is pen/marker; imprecise highlighter → snap using `caretRangeFromPoint` on the line's vertical center.
2. Ask whether the user wants the 239 Chimica explanations that cite letters rewritten (so those questions can be shuffled too) — would need overrides in `tools/content/chimica/` (explanations come from the user's `95 Soluzioni.md`).
3. Optional polish from the design audit not yet done: loading skeleton for theory fetch, `scroll-behavior` for anchor jumps, further spacing tweaks. Re-run `redesign-existing-projects` audit on results and study pages.
4. Add new subjects when the user asks (follow `CLAUDE.md` → "Aggiungere una materia"; generate + review hints with `[[X]]`).
5. Remaining ambiguous paniere items are documented with `!` + notes (Fisica p5-4, p28-6, p34-27, p31-21, p46-5, p12-22, p23-10, p24-13, p40-13; Chimica p4-8, p4-15, p13-4, p41-4/5, p45-4). No action unless the user wants them changed.

---

## ⚠️ Gotchas / Traps

- Repo and site are **public**; never commit PDFs or `/Chimica`, `/Fisica`.
- Never edit `app/data/`; always `node build.mjs`. Never edit the user's summaries in `/Chimica`; override via `tools/content/`.
- **Only one correct answer per question** (user's rule).
- Hints must use `[[X]]` for options, never clear letters, never eliminate all wrong options.
- Bump `VERSION` in `app/sw.js` on every deploy; add new app files to `SHELL`.
- Browser pane caches JS aggressively: `fetch(url, {cache: 'reload'})` then reload when testing.
- `confirm()` blocks the preview pane: set `window.confirm = () => true` in tests.
- The auto-mode safety classifier sometimes fails transiently on Bash/Edit — retry later, don't loop more than a few times.
- iOS Safari may evict PWA storage after weeks of non-use: remind the user to back up.

---

## 💬 Notes

- User preferences: Italian; wants to be asked before big changes (but sometimes says "non farmi domande, procedi"); likes concise summaries; tests on iPhone/iPad/Mac.
- Skills installed by the user in `~/.claude/skills` (design): `redesign-existing-projects` fits this app; `design-taste-frontend` is for landing pages.
- Scratchpad tools used this session (not in repo): hint export/review scripts; recreate from `tools/` data if needed.
