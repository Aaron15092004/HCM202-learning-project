# Roadmap: HCM202 Learning

**Created:** 2026-06-05
**Project Mode:** Vertical MVP
**Source Requirements:** `.planning/REQUIREMENTS.md`

## Overview

This roadmap converts the existing `my-mln-learning-main` React/Vite app into a coherent HCM202 learning experience. Each phase should leave the app runnable and closer to the final Ho Chi Minh Thought product.

| # | Phase | Goal | Requirements |
|---|-------|------|--------------|
| 1 | Project Identity Conversion | Remove old project identity and establish the HCM202 shell. | IDEN-01, IDEN-02, IDEN-03 |
| 2 | Course And Quiz Data Replacement | Replace old subject data with seven HCM202 topics and matching quiz practice. | CONT-01..04, QUIZ-01..04 |
| 3 | Ho Chi Minh Assets And Flip Cards | Replace legacy imagery and make flip-card images fit the game. | FLIP-01..03, ASST-01..04 |
| 4 | Red-Yellow UI Polish And Verification | Apply system theme, synchronize navigation/buttons, normalize type, and verify routes. | UI-01..05, ROUT-01..02, VERI-01..03 |

## Phases

### Phase 1: Project Identity Conversion

**Goal:** The app visibly becomes HCM202 / "Tu tuong Ho Chi Minh" at the shell, metadata, navigation, and primary copy level.
**Mode:** mvp

**Requirements:** IDEN-01, IDEN-02, IDEN-03

**Success Criteria:**
1. Browser title, package metadata, header/nav, home headings, footer, and visible page labels use HCM202 / "Tu tuong Ho Chi Minh" identity.
2. Old TAHA, old teacher, and Marxism-Leninism branding no longer appears in the visible primary app surface.
3. Navigation labels point users toward courses, quiz, and flip-card study experiences for HCM202.
4. App still runs after identity changes.

**Likely Files:**
- `my-mln-learning-main/package.json`
- `my-mln-learning-main/index.html`
- `my-mln-learning-main/src/App.jsx`
- `my-mln-learning-main/src/components/home/Header.jsx`
- `my-mln-learning-main/src/components/home/MainContent.jsx`
- `my-mln-learning-main/src/components/home/Footer.jsx`
- `my-mln-learning-main/src/pages/Courses.jsx`
- `my-mln-learning-main/src/pages/QuizPage.jsx`
- `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- `my-mln-learning-main/src/pages/FlipCardPage.jsx`

### Phase 2: Course And Quiz Data Replacement

**Goal:** Students can study seven generated HCM202 topics and practice with matching quiz questions without old subject data leaking through.
**Mode:** mvp

**Requirements:** CONT-01, CONT-02, CONT-03, CONT-04, QUIZ-01, QUIZ-02, QUIZ-03, QUIZ-04

**Success Criteria:**
1. `coursesData` contains seven Ho Chi Minh Thought topics with consistent editable structure.
2. Course page can select and render every topic without runtime errors.
3. `quizData` contains only Ho Chi Minh Thought questions and covers all seven topic areas.
4. Quiz start, answer selection, timer/progress, result route, and retry/home navigation still work.
5. Generated content is clearly structured for later manual academic corrections.

**Likely Files:**
- `my-mln-learning-main/src/data/coursesData.js`
- `my-mln-learning-main/src/data/quizData.js`
- `my-mln-learning-main/src/pages/Courses.jsx`
- `my-mln-learning-main/src/pages/QuizPage.jsx`
- `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- `my-mln-learning-main/public/chu-de-1.jpg`
- `my-mln-learning-main/public/chu-de-2.jpg`
- `my-mln-learning-main/public/chu-de-3.jpg`

### Phase 3: Ho Chi Minh Assets And Flip Cards

**Goal:** Legacy imagery is replaced with bright red-yellow Ho Chi Minh themed assets, and the flip-card game uses correctly sized image data.
**Mode:** mvp

**Requirements:** FLIP-01, FLIP-02, FLIP-03, ASST-01, ASST-02, ASST-03, ASST-04

**Success Criteria:**
1. `makdahome.png` and `thu-ha.png` are replaced with Ho Chi Minh imagery matching the requested radiant red-yellow style.
2. Flip-card data points to HCM202-appropriate imagery and avoids old/hotlinked subject images.
3. Flip-card images fit card dimensions without awkward crop/distortion on desktop and mobile.
4. Logos/favicon/public images no longer imply the old project.
5. Flip-card game remains playable after data and image replacement.

**Likely Files:**
- `my-mln-learning-main/src/assets/images/makdahome.png`
- `my-mln-learning-main/src/assets/images/thu-ha.png`
- `my-mln-learning-main/src/assets/images/logo/logo.png`
- `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg`
- `my-mln-learning-main/public/thIcon.jpg`
- `my-mln-learning-main/public/chu-de-1.jpg`
- `my-mln-learning-main/public/chu-de-2.jpg`
- `my-mln-learning-main/public/chu-de-3.jpg`
- `my-mln-learning-main/src/data/flipImagesData.js`
- `my-mln-learning-main/src/pages/FlipCardPage.jsx`
- `my-mln-learning-main/src/styles/flip/flip.css`

### Phase 4: Red-Yellow UI Polish And Verification

**Goal:** The converted app feels consistent, readable, and complete across routes, buttons, typography, responsive layouts, and verification checks.
**Mode:** mvp

**Requirements:** UI-01, UI-02, UI-03, UI-04, UI-05, ROUT-01, ROUT-02, VERI-01, VERI-02, VERI-03

**Success Criteria:**
1. Home, courses, quiz, quiz results, flip, and retained standalone pages share a coherent red-yellow visual system.
2. Back buttons use a consistent visual pattern and navigation behavior across pages.
3. Fonts, headings, card text, quiz options, and buttons are readable and do not overflow at desktop or mobile widths.
4. The `/tuvi` feature is intentionally hidden, removed, or explicitly excluded from HCM202 navigation.
5. `npm run lint`, `npm run build`, and manual browser checks are completed or any remaining issues are documented.

**Likely Files:**
- `my-mln-learning-main/src/styles/home/home.css`
- `my-mln-learning-main/src/styles/courses/courses.css`
- `my-mln-learning-main/src/styles/quiz/quiz.css`
- `my-mln-learning-main/src/styles/flip/flip.css`
- `my-mln-learning-main/src/styles/tuvi/TuviPage.css`
- `my-mln-learning-main/src/pages/Courses.jsx`
- `my-mln-learning-main/src/pages/QuizPage.jsx`
- `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- `my-mln-learning-main/src/pages/FlipCardPage.jsx`
- `my-mln-learning-main/src/pages/Tuvipage.jsx`
- `my-mln-learning-main/src/App.jsx`

## Requirement Coverage

| Requirement | Phase |
|-------------|-------|
| IDEN-01 | Phase 1 |
| IDEN-02 | Phase 1 |
| IDEN-03 | Phase 1 |
| CONT-01 | Phase 2 |
| CONT-02 | Phase 2 |
| CONT-03 | Phase 2 |
| CONT-04 | Phase 2 |
| QUIZ-01 | Phase 2 |
| QUIZ-02 | Phase 2 |
| QUIZ-03 | Phase 2 |
| QUIZ-04 | Phase 2 |
| FLIP-01 | Phase 3 |
| FLIP-02 | Phase 3 |
| FLIP-03 | Phase 3 |
| ASST-01 | Phase 3 |
| ASST-02 | Phase 3 |
| ASST-03 | Phase 3 |
| ASST-04 | Phase 3 |
| UI-01 | Phase 4 |
| UI-02 | Phase 4 |
| UI-03 | Phase 4 |
| UI-04 | Phase 4 |
| UI-05 | Phase 4 |
| ROUT-01 | Phase 4 |
| ROUT-02 | Phase 4 |
| VERI-01 | Phase 4 |
| VERI-02 | Phase 4 |
| VERI-03 | Phase 4 |

**Coverage:** 28 of 28 v1 requirements mapped.

---
*Roadmap created: 2026-06-05*
