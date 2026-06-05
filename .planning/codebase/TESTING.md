# Testing Patterns

**Analysis Date:** 2026-06-05

## Test Framework

**Runner:**
- Not detected.
- No `jest.config.*`, `vitest.config.*`, Playwright config, Cypress config, or test files are present under `my-mln-learning-main/`.
- `package.json` includes `dev`, `build`, `lint`, and `preview` scripts only.

**Assertion Library:**
- Not detected.

**Run Commands:**
```bash
npm install           # Install dependencies required by lint/build
npm run lint          # Run ESLint after dependencies exist
npm run build         # Run Vite production build after dependencies exist
npm run dev           # Start local Vite app for manual verification
```

## Test File Organization

**Location:**
- Not detected. No `*.test.*` or `*.spec.*` files are present.

**Naming:**
- Not detected.

**Structure:**
```text
Not detected
```

## Test Structure

**Suite Organization:**
```javascript
// Not detected in this codebase.
```

**Patterns:**
- Automated unit test setup is not present.
- Automated integration test setup is not present.
- Manual route and data verification is the active quality gate for the current app.

## Mocking

**Framework:** Not detected

**Patterns:**
```javascript
// Not detected in this codebase.
```

**What to Mock:**
- When tests are introduced, mock `@google/genai` for `src/services/geminiService.js` and `src/pages/Tuvipage.jsx`.
- Mock browser APIs used by animation hooks: `IntersectionObserver`, `requestAnimationFrame`, `window.VANTA`, and `localStorage`.
- Mock router navigation for quiz result assertions around `useNavigate` in `src/pages/QuizPage.jsx`.

**What NOT to Mock:**
- Do not mock content data arrays when validating the migration; use the actual `src/data/coursesData.js`, `src/data/quizData.js`, and `src/data/flipImagesData.js`.
- Do not mock pure calculation utilities in `src/utils/tuviCalculations.js`, `src/utils/lapDiaBan.js`, `src/utils/DiaBan.js`, and `src/utils/Sao.js` when testing tu vi behavior.

## Fixtures and Factories

**Test Data:**
```javascript
// Course content shape from src/data/coursesData.js
{
  id: "cd01",
  tieu_de: "Khái lược về triết học và vai trò của nó trong đời sống xã hội",
  cau_noi_hay: "Triết học không dạy ta điều gì, nhưng dạy ta cách suy nghĩ về mọi điều.",
  mindmap_url: "chu-de-1.jpg",
  cac_van_de: [
    { stt: 1, van_de: "Khái niệm triết học", noi_dung: "..." },
  ],
}

// Quiz content shape from src/data/quizData.js
{
  id: 1,
  chapter: 1,
  question: "Triết học ra đời khoảng thời gian nào?",
  options: ["...", "...", "...", "..."],
  correctAnswer: 1,
  difficulty: 0,
}
```

**Location:**
- Production data currently acts as fixtures: `src/data/coursesData.js`, `src/data/quizData.js`, `src/data/flipImagesData.js`.
- No separate `fixtures/` or `test-data/` directory is present.

## Coverage

**Requirements:** None enforced.

**View Coverage:**
```bash
Not configured
```

## Test Types

**Unit Tests:**
- Not implemented.
- Highest-value unit candidates for future tests are content validators for `src/data/coursesData.js` and `src/data/quizData.js`, plus pure utility functions in `src/utils/tuviCalculations.js`.

**Integration Tests:**
- Not implemented.
- Highest-value integration candidates are `/courses` topic selection in `src/pages/Courses.jsx`, `/quiz` configuration/scoring in `src/pages/QuizPage.jsx`, and Gemini error handling in `src/pages/Tuvipage.jsx` with the service mocked.

**E2E Tests:**
- Not used.
- Manual E2E verification is required for route rendering and responsive layout after content/theme migration.

## Common Patterns

**Async Testing:**
```javascript
// Not detected. Future tests for src/services/geminiService.js should await
// generateResponse(...) and assert both success text and thrown Error messages.
```

**Error Testing:**
```javascript
// Not detected. Future tests should cover:
// - missing VITE_GEMINI_API_KEY in src/services/geminiService.js
// - empty quiz filter result in src/pages/QuizPage.jsx
// - invalid course image/mindmap fallback in src/pages/Courses.jsx
```

## Current Verification State

- `npm run lint` from `my-mln-learning-main/` exits before linting because `eslint` is not recognized when dependencies are absent.
- `npm run build` from `my-mln-learning-main/` exits before Vite starts because `vite` is not recognized when dependencies are absent.
- `package-lock.json` is present, so use `npm install` or `npm ci` before verification.
- No source app files are changed by this mapping task.

## Manual Verification Checklist

- Start the app with `npm run dev` from `my-mln-learning-main/` after dependencies are installed.
- Open `/` and verify `src/pages/HomePage.jsx`, `src/layouts/HomeLayout.jsx`, `src/components/home/Header.jsx`, `src/components/home/MainContent.jsx`, and `src/components/home/Footer.jsx` render without console errors.
- Open `/courses` and verify every Ho Chi Minh Thought topic from `src/data/coursesData.js` appears in the selector, renders `cac_van_de`, shows a quote, and displays either a valid mindmap image or the intended fallback.
- Open `/quiz`, start with random settings, then filter by chapter and difficulty. Verify `src/pages/QuizPage.jsx` handles question counts, timer, progress, selected answers, score calculation, and navigation to `/quiz/results`.
- Open `/quiz/results` directly and after quiz completion. Verify fallback state in `src/pages/QuizResultsPage.jsx` does not crash when `location.state` is missing.
- Open `/flip` and verify the jQuery/localStorage game in `src/pages/FlipCardPage.jsx` starts, matches cards, updates stats, pauses/resumes, and loads all migrated images from `src/data/flipImagesData.js`.
- Open `/tuvi` and verify the route still loads after migration. If no Gemini key is configured, verify `src/services/geminiService.js` displays the configured missing-key error path rather than crashing.
- Check responsive layouts at `375px`, `576px`, `768px`, `992px`, and desktop width because `src/styles/courses/courses.css`, `src/styles/quiz/quiz.css`, `src/styles/tuvi/TuviPage.css`, and `src/styles/home/home.css` define route-specific breakpoints.
- Check Vietnamese text rendering for diacritics, long names, long quiz options, and Ho Chi Minh Thought terminology.
- Check browser console for missing image URLs, failed external image hosts, Vanta errors, and Gemini initialization logs.

## Recommended Validation Scripts

- Add a lightweight data validation script before or during migration if source changes are allowed in a future phase.
- Validate `src/data/quizData.js`: unique numeric `id`, numeric `chapter`, four or more `options`, `correctAnswer` within bounds, and `difficulty` in `[0, 1, 2]`.
- Validate `src/data/coursesData.js`: unique `id`, non-empty `tieu_de`, non-empty `cau_noi_hay`, `cac_van_de` array with sequential `stt`, non-empty `van_de`, and non-empty `noi_dung`.
- Validate `src/data/flipImagesData.js`: non-empty HTTPS URL strings and enough entries for the hard mode in `src/pages/FlipCardPage.jsx`.

---

*Testing analysis: 2026-06-05*
