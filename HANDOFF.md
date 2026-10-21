# Handoff — eCampus Quiz

> Generated on 2026-10-16 — resume in a new Claude Code session.

---

## 🎯 Goal

Personal offline PWA (vanilla JS, no framework) for studying eCampus exams (Chimica, Fisica) on iPad/iPhone/Mac: simulated exams, practice by lesson, theory with annotations, hints, adaptive daily study plan, stats. Now with **per-user accounts (Firebase) so the user and their brother each have separate progress, synced across their own devices**. User writes Italian — reply in Italian, concise, publishes only when asked ("pubblica"). Read `CLAUDE.md` first (pipeline, conventions, publish commands). Older handoffs in `handoff-history/`.

---

## 📍 Current State

All committed on `main` (commit `1482aae`) and **published** at https://edobirla.github.io/ecampus-quiz/ (sw `VERSION = "ecq-v14"`). `node tools/test_sync.mjs` and `node tools/test_grade.mjs` pass.

**Done this session:**
- **Adaptive study plan** (`app/app.js` `todayPlan`/`todayCard`): recalculated on every open (skipped days redistribute new questions, "behind" warning, weak mock scores → more reviews, near the exam review gaps shrink). New questions are spread so everything is seen **7 days before the exam** (`FINAL_DAYS = 7`); last week = mock exams + reviews; day before exam = light review only. Full mock exams every 7 → 4 → 1–2 days. Mock exams prefer questions seen least in previous mocks.
- **"Known" rule** (`app/sync.js` `rebuildQ`): `KNOWN = 3` clean correct answers (no hints, no theory), ≥12 h apart. Log entries are now `[id, ok, t, mt, aiuti]` (5th = answered with hints/theory). Old entries without the field count as before (no progress reset). After ≥2 appearances and last answer correct, a question comes back "a prova" (no hints/theory) in plan sessions (`sess.blind`).
- **Ripasso errori** now = questions whose *last* answer was wrong (`isToReview = r.l === 0`); they disappear as soon as answered right.
- **Resumable practice sessions**: quitting keeps `ecq:session`; resume card on Home/Studio; starting a new one over an in-progress one asks confirmation.
- **Notes in theory opened from a question** (`openTheory`): same annotation tools and data as the Teoria section (`sheetCtl`, `#sheet2` for the highlight editor).
- Hint button shows used hints (`Indizio · 0/3`). Backup file name fixed: `ecampus-quiz-backup.json`.
- **Fisica explanations rewritten** (all closed questions, 8 files `tools/content/fisica/0*.txt`) by subagents: full steps + `**Errore tipico:**`; 229 `TRAP:` lines → build field `tr` → shown as "⚠ Domanda a trabocchetto" in the solution. `tools/dump_q.py` prints questions + explanations. Chimica explanations NOT touched (already ~770 chars avg, no TRAP flags).
- **Exam booking alert**: full-screen (`#fs`) from the Monday of the week before the exam week, once a day, until "Già prenotato" (`settings.examBooked`, also in Impostazioni and in backup). Only appears when the app is opened (no push).
- **Firebase accounts + sync** (`app/cloud.js`, glue in `app/app.js` "account" section): REST only (no SDK). Auth = email/password via identitytoolkit; username = part before `@ecq.app` (login accepts a real email too). Data = one JSON per user in **Realtime Database** `users/{uid}` (same format as the backup file, merged with `mergeStats`/`mergeNotes`). Sync on open, 4 s after changes, on visibility/online. Login screen at start; Impostazioni → Account: change username/password (needs current password), sync now, logout (wipes local data after a successful sync). Different user on the same device → local data wiped (first login with unowned local data asks "adopt or delete").

**Not verified:**
- A **successful login and real sync were never tested** (no credentials in session; only the wrong-password error path was seen working, which proves API key/Auth are reachable).
- Database rules / user creation were done by the user in the Firebase console (project `e-campus-quz`, europe-west1); not verified by me. Expected rules: `users/$uid` read/write only if `$uid === auth.uid`.
- Date picker on real iOS, Apple Pencil on real iPad (still pending from earlier sessions).

---

## 📁 Relevant Files

| File | Role / Status |
|------|--------------|
| `app/cloud.js` | NEW. Firebase REST: login, token refresh, change username/password, pull/push user JSON. Config (public web key, DB URL) inline. |
| `app/app.js` | Plan (`todayPlan`), `resumeCard`, `bookingAlert`, backup/sync/account section (`buildBackup`, `applyBackup`, `syncNow`, `showLogin`, `accountSheet`), startup gate at the bottom (`start()`). |
| `app/sync.js` | `rebuildQ` with clean-streak / assisted logic. |
| `app/sw.js` | `VERSION = "ecq-v14"`; `cloud.js` in SHELL. |
| `app/index.html`, `styles.css` | `#sheet2`, `#fs` overlay, trap/account styles. |
| `tools/build.mjs` | Parses `TRAP:` line in explanations → `tr`. |
| `tools/dump_q.py` | NEW. Dump question/answer/explanation by id range. |
| `tools/content/fisica/0*.txt` | Rewritten explanations. |

---

## ❌ Failed Attempts

- **`sed -i` on macOS** without `''` fails (`command a expects \ followed by text`): use `sed -i '' …`.
- **Test data with only `log` and empty `q`**: `migrate` does not rebuild `q` when `log` exists → plan looked empty. Call `rebuildQ` after seeding stats in browser tests.
- **`localStorage` raw strings**: `store.get` JSON-parses; set `ecq:subject` as `JSON.stringify("fisica")`.
- Subagents share the scratchpad dir: two overwrote each other's temp files (recovered). Use unique file names.
- Firebase Web SDK via CDN rejected: would break offline boot (SW only caches same-origin) → REST instead.

---

## ✅ Working Solutions

- Clean-streak counting with spacing keeps old progress intact (legacy log entries have no 5th field → counted as before).
- Plan deadline: `studyDays = days > 7 ? days - 7 : max(1, days - 1)`; `perDay = ceil((unseen + newToday)/studyDays)`, session capped (60 reviews, 40 new).
- Browser pane: unregister SW + clear caches before testing; `window.confirm = () => true`.

---

## 🔧 Dependencies & Setup

```bash
cd tools && npm install && node build.mjs     # rebuild app/data (Chimica theory needs /Chimica sources on this Mac)
node tools/test_sync.mjs && node tools/test_grade.mjs
# preview: .claude/launch.json → server "app" (:8765)
```
Publish: see `CLAUDE.md` (bump `VERSION` first).

---

## ➡️ Next Steps

1. Ask the user whether login + sync worked on their devices (see "Not verified"). If errors: "Sincronizzazione non riuscita" = DB rules not published; other messages come from `ERR` in `app/cloud.js`.
2. Check settings merge limitation: `applyBackup` keeps **local** `examDate/pan/examBooked` over remote (changing the date on device A can be overridden by an old value on B). Add per-key timestamps if it bites.
3. Possibly tighten Firebase API key (HTTP referrer restriction to the Pages domain) and rules (validate size).
4. Offer the same exhaustive-explanation + TRAP pass for Chimica; optionally review a sample of the rewritten Fisica explanations (agents flagged inexact paniere answers: 5-4, 34-27, 35-2, 34-15, 28-6… letters unchanged).
5. Pending from before: Apple Pencil real-device test; iOS date picker; Chimica explanations that cite letters (239) block shuffling.
6. The user said "correggi questi errori" without sending any list, then confirmed there is none — nothing pending there.

---

## ⚠️ Gotchas / Traps

- Repo and site are **public**; never commit PDFs or `/Chimica`, `/Fisica`. Firebase web config is public by design; security = DB rules.
- Never edit `app/data/`; always `node build.mjs`. One correct answer per question; hints use `[[X]]`; explanations must not cite option letters (disables shuffle).
- Logout/login wipes `ecq:*` localStorage except `ecq:auth` — session (`ecq:session`) is not synced.
- Accounts are created by the user in the Firebase console as `username@ecq.app`; there is no in-app sign-up (intentional).

---

## 💬 Notes

- The user will give the app to their brother; keep accounts' data strictly separate.
- Possible follow-ups: push-like reminders are impossible without a server (alert only when app is opened).
