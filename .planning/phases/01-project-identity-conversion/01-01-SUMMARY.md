---
phase: 01-project-identity-conversion
plan: 01
status: partial
completed: 2026-06-05
requirements:
  - IDEN-01
  - IDEN-02
  - IDEN-03
---

# Plan 01 Summary: Project Identity Conversion

## What Changed

- Renamed package identity from `my-mln-learning` to `hcm202-learning` in `package.json` and `package-lock.json`.
- Updated `index.html` language/title to Vietnamese HCM202 identity.
- Removed `/tuvi` from the active React Router shell so the unrelated astrology feature is no longer an app route.
- Converted header logo labels, modal labels, search placeholder, and Moodle demo links/actions to local HCM202-oriented copy.
- Converted home hero, breadcrumb/page shell, primary CTAs, quiz/flip cards, and supporting copy to HCM202 / "Tu tuong Ho Chi Minh" wording.
- Removed the visible home card/link to `/tuvi`.
- Converted footer brand, contact/social copy, copyright, and quick labels to HCM202 Learning.
- Converted visible labels on Courses, Quiz, Quiz Results, and Flip Card pages to HCM202-oriented wording without changing data shapes or feature logic.

## Files Changed

- `my-mln-learning-main/package.json`
- `my-mln-learning-main/package-lock.json`
- `my-mln-learning-main/index.html`
- `my-mln-learning-main/src/App.jsx`
- `my-mln-learning-main/src/components/home/Header.jsx`
- `my-mln-learning-main/src/components/home/MainContent.jsx`
- `my-mln-learning-main/src/components/home/Footer.jsx`
- `my-mln-learning-main/src/pages/Courses.jsx`
- `my-mln-learning-main/src/pages/QuizPage.jsx`
- `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- `my-mln-learning-main/src/pages/FlipCardPage.jsx`

## Verification

### Passed

- Primary UI stale-string grep returned no matches for:
  `TAHA|Triết học Mác|Mác - Lênin|Marx|Lenin|Nguyễn Thị Thu Hà|New Learning|Premium Moodle Theme|Tử Vi|tuvi|Bói`
  across metadata, header, home, footer, active route pages, and `App.jsx`.
- Home/app shell grep returned no `/tuvi`, `Tuvipage`, `Tử Vi`, or `Bói` matches in `App.jsx` and `MainContent.jsx`.
- New identity grep confirmed HCM202 / "Tu tuong Ho Chi Minh" / "Tư tưởng Hồ Chí Minh" appears in metadata, header, home, footer, courses, quiz, results, and flip pages.
- Partial `npm install` artifacts were removed after the install failed; `my-mln-learning-main/node_modules` does not exist.

### Blocked

- `npm --prefix my-mln-learning-main run lint` could not run before dependencies were installed: `eslint` was not recognized.
- `npm --prefix my-mln-learning-main run build` could not run before dependencies were installed: `vite` was not recognized.
- `npm install` was attempted in `my-mln-learning-main` but failed with `ENOSPC: no space left on device`.

## Deferred By Plan

- Old Marxism-Leninism content remains in `src/data/coursesData.js` and `src/data/quizData.js`; Phase 2 owns data replacement.
- Old flip image data remains in `src/data/flipImagesData.js`; Phase 3 owns flip image replacement.
- Tu vi source files/styles remain in the repository but are removed from the active app shell; Phase 4 owns final route-scope decision.
- Full red-yellow visual polish remains Phase 4.

## Resume Notes

After freeing disk space, run:

1. `npm install` from `my-mln-learning-main`
2. `npm --prefix my-mln-learning-main run lint`
3. `npm --prefix my-mln-learning-main run build`
4. Re-run phase verification before marking Phase 1 complete.
