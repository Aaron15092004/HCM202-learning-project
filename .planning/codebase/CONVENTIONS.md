# Coding Conventions

**Analysis Date:** 2026-06-05

## Naming Patterns

**Files:**
- Use PascalCase for React pages, layouts, and components: `src/pages/QuizPage.jsx`, `src/pages/QuizResultsPage.jsx`, `src/components/home/Header.jsx`, `src/layouts/HomeLayout.jsx`.
- Keep feature styles in matching subdirectories under `src/styles/`: `src/styles/courses/courses.css`, `src/styles/quiz/quiz.css`, `src/styles/flip/flip.css`, `src/styles/tuvi/TuviPage.css`.
- Use camelCase for data and service files: `src/data/coursesData.js`, `src/data/quizData.js`, `src/data/flipImagesData.js`, `src/services/geminiService.js`.
- Preserve existing non-English legacy filenames only when editing that feature area: `src/pages/Tuvipage.jsx`, `src/utils/lapDiaBan.js`, `src/utils/DiaBan.js`, `src/utils/Sao.js`.

**Functions:**
- Use PascalCase component functions: `App` in `src/App.jsx`, `QuizPage` in `src/pages/QuizPage.jsx`, `Courses` in `src/pages/Courses.jsx`.
- Use `handle*` names for event handlers: `handleStartQuiz`, `handleSelectAnswer`, `handleNext`, `handlePrev`, and `handleSubmit` in `src/pages/QuizPage.jsx`.
- Use `render*` names for component-local render helpers: `renderContent` and `renderMindmap` in `src/pages/Courses.jsx`; `renderCung` and `renderThienBan` in `src/pages/Tuvipage.jsx`.
- Use `use*` names for hooks exported from `src/hooks/home/useAnimations.js`: `useLazyLoad`, `useScrollReveal`, `useStickyHeader`, `useCounterAnimation`, `useParallax`, `useTypingEffect`.

**Variables:**
- Use camelCase for JavaScript state and derived values: `selectedTopic`, `quizConfig`, `filteredQuestions`, `currentQuestion`, `selectedAnswers`, `timeLeft`.
- Use Vietnamese domain names in existing Vietnamese calculation/data modules where the surrounding code already does: `ngayAm`, `thangAm`, `namAm`, `canNam`, `chiNam`, `thienBanData` in `src/pages/Tuvipage.jsx`.
- Use snake_case only for content object keys that already use it in course data: `tieu_de`, `cau_noi_hay`, `cac_van_de`, `van_de`, `noi_dung` in `src/data/coursesData.js`.

**Types:**
- Not applicable. The app uses JavaScript and JSX only; no TypeScript type files are detected.

## Code Style

**Formatting:**
- No Prettier config is detected. Follow the existing Vite/React formatting style: 2-space indentation, semicolons in JSX/source files, double quotes in most app files, and trailing commas in multiline function calls and object literals.
- Preserve the ESM style in all JavaScript modules: `import` at top level and `export default` or named `export const` at the bottom/top as already used in `src/App.jsx`, `src/data/quizData.js`, and `src/services/geminiService.js`.
- Keep JSX readable with multiline props when handlers or inline styles are non-trivial, as in `src/pages/QuizPage.jsx` and `src/pages/Courses.jsx`.

**Linting:**
- ESLint flat config lives in `eslint.config.js`.
- The lint target is `**/*.{js,jsx}` and excludes `dist`.
- Config extends `@eslint/js` recommended rules, `eslint-plugin-react-hooks` recommended rules, and `eslint-plugin-react-refresh` Vite rules.
- The custom rule is `no-unused-vars: ["error", { varsIgnorePattern: "^[A-Z_]" }]`; unused uppercase constants are intentionally allowed.
- Current local verification requires installing dependencies first. `npm run lint` currently exits before linting because `eslint` is not found when `node_modules/` is absent.

## Import Organization

**Order:**
1. React, router, and third-party packages: `react`, `react-router-dom`, `jquery`, `react-medium-image-zoom`.
2. Local data, services, utilities, and assets: `../data/quizData`, `../services/geminiService`, `../assets/images/logo/logo.png`.
3. Feature CSS imports: `../styles/quiz/quiz.css`, `../styles/courses/courses.css`, package CSS such as `react-medium-image-zoom/dist/styles.css`.

**Path Aliases:**
- No path aliases are configured in `vite.config.js`; use relative imports.
- Do not introduce alias imports unless `vite.config.js` and all import sites are migrated together.

## Error Handling

**Patterns:**
- Use local `try/catch` around calculations and external API calls, then set component state or show user-facing fallback messages. `src/pages/Tuvipage.jsx` catches chart-generation errors and resets `error`/`luanGiai` state around AI generation.
- Service functions should throw `Error` instances with Vietnamese user-readable messages when the caller needs to display the failure. `src/services/geminiService.js` throws for missing API key and missing Gemini response text.
- Existing quiz and tu vi flows use `alert(...)` for blocking validation failures in `src/pages/QuizPage.jsx` and `src/pages/Tuvipage.jsx`. Match this only inside those legacy flows; prefer state-driven inline errors for new React features.

## Logging

**Framework:** console

**Patterns:**
- Console logging is present for Vanta and Gemini debugging in `src/components/home/MainContent.jsx`, `src/pages/Tuvipage.jsx`, and `src/services/geminiService.js`.
- Do not add new persistent debug logs during the Ho Chi Minh Thought migration. Use temporary logs only while verifying locally, then remove them before handoff.
- Never log environment variable values. `src/pages/Tuvipage.jsx` reads `import.meta.env.VITE_GEMINI_API_KEY`; only presence/status should be exposed.

## Comments

**When to Comment:**
- Use short section comments to separate large legacy UI blocks, matching `// ============ STATE ============` and JSX comments in `src/pages/QuizPage.jsx`.
- Use comments for legacy DOM/jQuery behavior when the selector or mutation is not obvious, as in `src/pages/FlipCardPage.jsx`.
- Keep educational content in data files, not comments. New Ho Chi Minh Thought lessons and quiz content belong in `src/data/coursesData.js`, `src/data/quizData.js`, and related image data.

**JSDoc/TSDoc:**
- Not detected. Do not introduce JSDoc as a one-off convention unless a shared utility API needs documented inputs/outputs.

## Function Design

**Size:** Component files are large in existing code. New migration work should keep new helpers small and local where possible:
- Course rendering helpers stay inside `src/pages/Courses.jsx` when tied only to selected course UI.
- Shared content transforms belong beside data files under `src/data/` only when multiple pages need them.
- Avoid expanding `src/components/home/MainContent.jsx` and `src/styles/home/home.css` unless the home experience itself changes.

**Parameters:** Use event objects for form handlers and parse string values at decision points:
```javascript
const handleTopicChange = (e) => {
  const topicId = e.target.value;
  const topic = coursesData.find((t) => t.id === topicId);
  setSelectedTopic(topic);
};
```
This pattern appears in `src/pages/Courses.jsx`. Quiz config values from `<select>` are strings and are parsed before numeric comparisons in `src/pages/QuizPage.jsx`.

**Return Values:** React components return JSX. Data modules export arrays and objects directly. Utility modules in `src/utils/` return calculated values and should remain UI-independent.

## Module Design

**Exports:** 
- Use default exports for React page/layout/component modules: `src/pages/HomePage.jsx`, `src/pages/QuizPage.jsx`, `src/layouts/HomeLayout.jsx`.
- Use named exports for shared data and hooks: `quizQuestions` in `src/data/quizData.js`, `coursesData` in `src/data/coursesData.js`, `useLazyLoad` in `src/hooks/home/useAnimations.js`.
- Use named factory exports for services: `createGeminiService` in `src/services/geminiService.js`.

**Barrel Files:** 
- Not detected. Import modules directly from their files.

## Component Conventions

- Keep route-level screens in `src/pages/` and shared shell pieces in `src/components/home/`.
- Use React state and props for new work. Existing direct DOM manipulation is isolated to `src/pages/FlipCardPage.jsx` and `src/hooks/home/useAnimations.js`; do not copy jQuery patterns into course, quiz, or home migration code.
- Use Bootstrap utility classes where the file already mixes them with custom classes, such as `src/pages/Courses.jsx` and `src/pages/Tuvipage.jsx`.
- Keep accessibility affordances already present in header markup, including skip links and `aria-*` attributes in `src/components/home/Header.jsx`.
- For modal-like states, bind visual classes to React state as in `src/components/home/Header.jsx` and `src/pages/QuizPage.jsx`.

## Data Conventions

- Course topics use this shape in `src/data/coursesData.js`:
```javascript
{
  id: "cd01",
  tieu_de: "...",
  cau_noi_hay: "...",
  mindmap_url: "chu-de-1.jpg",
  cac_van_de: [
    { stt: 1, van_de: "...", noi_dung: "..." },
  ],
}
```
- Quiz questions use this shape in `src/data/quizData.js`:
```javascript
{
  id: 1,
  chapter: 1,
  question: "...",
  options: ["...", "...", "...", "..."],
  correctAnswer: 1,
  difficulty: 0,
}
```
- During the Ho Chi Minh Thought migration, preserve object keys and value types so `src/pages/Courses.jsx` and `src/pages/QuizPage.jsx` continue to render without component changes.
- Ensure every `correctAnswer` index is valid for the corresponding `options` array.
- Keep `chapter` numeric and `difficulty` as `0`, `1`, or `2` because filtering in `src/pages/QuizPage.jsx` uses `parseInt(...)` and strict equality.
- `mindmap_url` is rendered directly as an image `src` in `src/pages/Courses.jsx`; use valid public URLs or imported/local asset paths that Vite can serve.
- Flip-card images are plain URL strings in `src/data/flipImagesData.js`; replace Marxism-Leninism imagery with Ho Chi Minh Thought imagery by editing the array, keeping enough entries for the largest level used in `src/pages/FlipCardPage.jsx`.

## CSS Conventions

- CSS is global, not CSS Modules. Scope new selectors under a page wrapper whenever possible: `.triet-hoc-wrapper` in `src/styles/courses/courses.css`, `.tuvi-container-wrapper` in `src/styles/tuvi/TuviPage.css`, `.flip-game-container` in `src/styles/flip/flip.css`.
- Course theme colors are custom properties on `.triet-hoc-wrapper`: `--primary-color` and `--secondary-color` in `src/styles/courses/courses.css`.
- Quiz styling uses global selectors, Bootstrap class names, gradients, and responsive breakpoints in `src/styles/quiz/quiz.css`; avoid broad selectors like bare `label` for new migration CSS unless the whole route is intended to inherit it.
- Home styling is a large imported theme stylesheet in `src/styles/home/home.css` with many `--mb2-*` variables and global `html`/`body` rules. Treat it as theme-level CSS and make targeted additions rather than broad rewrites.
- Responsive breakpoints commonly use `768px`, `576px`, Bootstrap-style `575.98px`, `767.98px`, `991.98px`, and `1199.98px`. Match the local file's breakpoint style.
- Inline styles are common for one-off colors/sizing in `src/pages/Courses.jsx`, `src/pages/QuizPage.jsx`, and `src/pages/Tuvipage.jsx`. Prefer CSS classes for repeated migration theme tokens.

## Migration Verification Recommendations

- After dependency installation, run `npm run lint` and `npm run build` from `my-mln-learning-main/`.
- Manually verify routes defined in `src/App.jsx`: `/`, `/courses`, `/quiz`, `/quiz/results`, `/flip`, and `/tuvi`.
- For `src/data/coursesData.js`, verify each migrated Ho Chi Minh Thought topic renders a title, quote, all `cac_van_de`, and mindmap image/fallback in `src/pages/Courses.jsx`.
- For `src/data/quizData.js`, verify chapter filtering, difficulty filtering, random question count, answer scoring, and `/quiz/results` navigation in `src/pages/QuizPage.jsx`.
- For `src/data/flipImagesData.js`, verify every external image loads over HTTPS and that the hard level has enough unique images for the game logic in `src/pages/FlipCardPage.jsx`.
- For theme migration, check desktop and mobile at widths around `375px`, `576px`, `768px`, and `992px`, because CSS files use these breakpoints heavily.
- Verify Vietnamese diacritics render correctly in content, buttons, quiz options, image alt text, and page headings.

---

*Convention analysis: 2026-06-05*
