---
phase: 02-course-and-quiz-data-replacement
status: passed
verified: 2026-06-05
source:
  - 02-01-PLAN.md
  - 02-01-SUMMARY.md
---

# Verification: Phase 2 - Course And Quiz Data Replacement

## Status

`passed`

Automated data, lint, build, and HTTP route checks passed. Browser automation for interactive visual UAT could not initialize in this environment, so dropdown/click-through interaction is documented as residual human UAT rather than claimed as completed.

## Must-Haves Checked

| # | Must-have | Status | Evidence |
|---|-----------|--------|----------|
| 1 | `coursesData` contains exactly seven HCM202 topics. | Passed | Node shape check passed; topic list is `hcm01` through `hcm07`. |
| 2 | Each topic keeps the existing editable shape. | Passed | Node validation checked `id`, `tieu_de`, `cau_noi_hay`, string `mindmap_url`, and issue entries with `stt`, `van_de`, `noi_dung`. |
| 3 | `quizQuestions` contains only HCM202 questions and covers all seven areas. | Passed | Node validation passed with 70 total questions and 10 questions for each chapter 1-7. |
| 4 | Quiz data keeps the existing active shape. | Passed | Node validation checked unique numeric ids, chapters 1-7, four non-empty options, valid zero-based answers, and difficulty 0-2. |
| 5 | Old subject data is removed from active course/quiz datasets. | Passed | Node stale-content check found no matches for old Marxism-Leninism/philosophy subject patterns in the active data files. |
| 6 | Course/quiz routes remain runnable. | Passed | HTTP checks returned 200 for `/courses`, `/quiz`, and `/quiz/results`. |

## Automated Checks

- `node` course shape check: passed.
- `node` quiz shape check: passed.
- `node` stale old-subject data check: passed.
- Quiz distribution check: 70 total questions; chapters 1-7 each have 10 questions; difficulty spread is 30 easy, 29 medium, 11 hard.
- `npm --prefix my-mln-learning-main run lint`: passed with 2 existing hook dependency warnings.
- `npm --prefix my-mln-learning-main run build`: passed with existing copied-theme asset/chunk warnings.
- HTTP route checks:
  - `/courses` -> 200
  - `/quiz` -> 200
  - `/quiz/results` -> 200

## Residual Warnings

- `QuizPage.jsx`: React hook dependency warning for `handleSubmit`.
- `Tuvipage.jsx`: React hook dependency warning for `GEMINI_API_KEY`.
- Build still warns about copied Moodle theme asset URLs, a copied CSS `*margin-right` syntax issue, and bundle size. These are pre-existing cleanup items for later theme/UI work.
- Browser automation failed with: `failed to write kernel assets: The system cannot find the path specified. (os error 3)`.

## Human UAT

Recommended but not blocking:

1. Open `http://127.0.0.1:5173/courses` and choose all seven chuyên đề from the dropdown.
2. Open `http://127.0.0.1:5173/quiz`, start a quiz, select answers, move previous/next, submit, and confirm the result page shows score state.

## Conclusion

Phase 2 achieved its goal: active course and quiz data are fully replaced with HCM202 scaffolding, all Phase 2 requirements are covered, and the app remains buildable and routable.
