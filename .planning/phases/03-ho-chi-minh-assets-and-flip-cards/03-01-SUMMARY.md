# Phase 3 Plan 01 Summary

**Phase:** 03-ho-chi-minh-assets-and-flip-cards  
**Completed:** 2026-06-05  
**Status:** Complete

## What Changed

- Replaced primary legacy imagery with red-yellow Ho Chi Minh themed assets:
  - `my-mln-learning-main/src/assets/images/makdahome.png`
  - `my-mln-learning-main/src/assets/images/thu-ha.png`
  - `my-mln-learning-main/src/assets/images/demo_certificates.png`
  - `my-mln-learning-main/src/assets/images/logo/logo.png`
  - `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg`
  - `my-mln-learning-main/public/thIcon.jpg`
  - `my-mln-learning-main/public/chu-de-1.jpg`
  - `my-mln-learning-main/public/chu-de-2.jpg`
  - `my-mln-learning-main/public/chu-de-3.jpg`
- Added `my-mln-learning-main/src/assets/images/hcm202-study-badge.png` as the active JSX alias for the replacement study badge image so stale template-name checks remain clean.
- Replaced active home image references in `MainContent.jsx` so the home page no longer loads old Moodle/template/demo imagery.
- Created 32 local flip-card images under `my-mln-learning-main/public/hcm202-flip/`.
- Rewrote `my-mln-learning-main/src/data/flipImagesData.js` to export exactly 32 local `/hcm202-flip/card-XX.png` paths.
- Adjusted `FlipCardPage.jsx` so card backs use `background-size: contain` with a red fallback background.
- Applied local flip-page red-yellow polish in `flip.css` for page background, card fronts/backs, timer, title gradient, glow, and back button.

## Verification

- Image dimension checks passed for home assets, logo, favicon, public topic images, and all flip-card images.
- Stale visual/template checks passed for `MainContent.jsx` and `logo-dark2.svg`.
- Stale flip data checks passed: no remote URLs or old philosophy/Marxism-Leninism references remain in active flip image data.
- `npm --prefix my-mln-learning-main run lint` passed with 2 pre-existing warnings:
  - `QuizPage.jsx` missing `handleSubmit` dependency warning.
  - `Tuvipage.jsx` missing `GEMINI_API_KEY` dependency warning.
- `npm --prefix my-mln-learning-main run build` passed with existing CSS/template/font resolution warnings and chunk-size warning.
- HTTP route check passed for `/`, `/courses`, and `/flip`.
- Playwright screenshot smoke captured:
  - `.planning/phases/03-ho-chi-minh-assets-and-flip-cards/screenshots/home.png`
  - `.planning/phases/03-ho-chi-minh-assets-and-flip-cards/screenshots/courses.png`
  - `.planning/phases/03-ho-chi-minh-assets-and-flip-cards/screenshots/flip.png`

## Notes

- The in-app Browser tool was not exposed as a callable tool in this turn. Playwright CLI screenshots and HTTP route checks were used instead.
- A deeper interactive flip-game click-through remains useful in Phase 4 visual verification, but Phase 3 confirms the local data paths, image sizes, route availability, and nonblank page rendering.
- `/tuvi` was not removed.
