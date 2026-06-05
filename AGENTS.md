<!-- GSD:project-start source:PROJECT.md -->
## Project

**HCM202 Learning**

HCM202 Learning is a converted learning web app for the course "Tu tuong Ho Chi Minh". It starts from the old `my-mln-learning` React/Vite app, but the learning content, quiz data, flip-card image data, images, project identity, and visual theme must be replaced so the whole system feels like a dedicated Ho Chi Minh Thought study tool.

The app is primarily for students who need a lightweight course companion: browse seven study topics, review structured lesson notes, practice quiz questions, and use a flip-card/memory activity with suitable Ho Chi Minh themed imagery.

**Core Value:** Students can study and practice "Tu tuong Ho Chi Minh" through a coherent red-yellow themed learning experience with no leftover Marxism-Leninism or old-teacher branding.

### Constraints

- **Tech stack**: Keep React/Vite and the current static SPA architecture — fastest path and matches the existing codebase.
- **Content**: Generate seven topic structures and initial quiz content, but keep data easy to manually edit because the user may correct academic details later.
- **Assets**: Avoid old teacher branding and old Marxism-Leninism hotlinked imagery; use Ho Chi Minh themed images that fit their containers.
- **Theme**: Red and yellow are the required system colors, but the UI still needs contrast, readable text, and non-overlapping layout on desktop and mobile.
- **Navigation**: Back buttons should follow one consistent component or pattern across pages.
- **Git**: Repository has been newly initialized at `e:\Desktop\HCM202-project`; planning/codebase mapping is already committed.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- JavaScript ES modules - React source uses `.jsx` and `.js` files under `my-mln-learning-main/src/`.
- JSX - UI pages, layouts, and components live in `my-mln-learning-main/src/App.jsx`, `my-mln-learning-main/src/pages/`, `my-mln-learning-main/src/layouts/`, and `my-mln-learning-main/src/components/`.
- CSS - Feature styles live in `my-mln-learning-main/src/styles/`; `my-mln-learning-main/src/styles/home/home.css` includes a large imported Moodle/New Learning theme stylesheet surface.
- HTML - Vite shell and CDN assets are declared in `my-mln-learning-main/index.html`.
- JSON - npm metadata and lockfile are in `my-mln-learning-main/package.json` and `my-mln-learning-main/package-lock.json`.
## Runtime
- Browser-only single page application. `my-mln-learning-main/src/main.jsx` mounts React into `#root` from `my-mln-learning-main/index.html`.
- Node.js is required for local development/build. Vite 7 is used in `my-mln-learning-main/package.json`; use a modern Node runtime compatible with Vite 7 rather than relying on an older Node installation.
- The app assumes browser globals for CDN scripts: `window.VANTA` is used in `my-mln-learning-main/src/components/home/MainContent.jsx` and `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- npm, inferred from `my-mln-learning-main/package-lock.json`.
- Lockfile: present at `my-mln-learning-main/package-lock.json`.
- Package name: `my-mln-learning` in `my-mln-learning-main/package.json`; rename this when converting the project identity.
## Frameworks
- React `^19.2.0` - UI framework, entry in `my-mln-learning-main/src/main.jsx`.
- React DOM `^19.2.0` - browser rendering via `createRoot` in `my-mln-learning-main/src/main.jsx`.
- React Router DOM `^7.13.0` - client routing in `my-mln-learning-main/src/App.jsx`.
- Vite `^7.2.4` - dev server and production build configured by `my-mln-learning-main/vite.config.js`.
- Not detected. There is no test script in `my-mln-learning-main/package.json`, and no Jest/Vitest config was detected during stack mapping.
- `@vitejs/plugin-react` `^5.1.1` - Vite React plugin in `my-mln-learning-main/vite.config.js`.
- ESLint `^9.39.1` - lint command in `my-mln-learning-main/package.json`; flat config in `my-mln-learning-main/eslint.config.js`.
- `eslint-plugin-react-hooks` `^7.0.1` and `eslint-plugin-react-refresh` `^0.4.24` - React-specific lint rules in `my-mln-learning-main/eslint.config.js`.
## Key Dependencies
- `@google/genai` `^1.39.0` - Gemini client used by `my-mln-learning-main/src/services/geminiService.js` and initialized from `VITE_GEMINI_API_KEY` in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- `react-router-dom` `^7.13.0` - route ownership for `/`, `/quiz`, `/quiz/results`, `/flip`, `/tuvi`, and `/courses` in `my-mln-learning-main/src/App.jsx`.
- `bootstrap` `^5.3.8` and `react-bootstrap` `^2.10.10` - Bootstrap CSS imported in `my-mln-learning-main/src/main.jsx`; Bootstrap class names are used throughout pages such as `my-mln-learning-main/src/pages/Courses.jsx`.
- `jquery` `^4.0.0` - imperative flip-card game logic in `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- `react-medium-image-zoom` `^5.4.0` - mindmap image zoom in `my-mln-learning-main/src/pages/Courses.jsx`.
- `@fortawesome/fontawesome-free`, `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/react-fontawesome` - icon/font assets; CSS import in `my-mln-learning-main/src/main.jsx` plus CDN Font Awesome links in `my-mln-learning-main/index.html`.
- `bootstrap-icons` `^1.13.1` - icon classes in pages such as `my-mln-learning-main/src/pages/Courses.jsx`; also loaded from CDN in `my-mln-learning-main/index.html`.
- `animate.css` `^4.1.1` - global animation CSS import in `my-mln-learning-main/src/main.jsx`.
- `swiper` `^12.0.3`, `react-select` `^5.10.2`, `html2canvas` `^1.4.1`, `jsrender` `^1.0.16`, `zebra_tooltips` `^2.4.1` - installed dependencies in `my-mln-learning-main/package.json`; not detected in active imports during this mapping pass.
- `dotenv-webpack` `^8.1.1` - listed as a dev dependency in `my-mln-learning-main/package.json`, but Vite uses `import.meta.env`; no Webpack config was detected.
## Configuration
- Vite environment variables are read through `import.meta.env`. The only detected app env variable is `VITE_GEMINI_API_KEY` in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- No `.env*` files were detected in `my-mln-learning-main/` during mapping.
- Do not put non-`VITE_` variables in client code. Vite only exposes variables with the `VITE_` prefix, and exposed keys are bundled into browser-delivered code.
- `my-mln-learning-main/package.json` scripts:
- `my-mln-learning-main/vite.config.js` enables the React plugin and a dev proxy from `/theme` to `https://lmsstyle.com`.
- `my-mln-learning-main/eslint.config.js` applies ESLint flat config to `**/*.{js,jsx}` and ignores `dist`.
- `my-mln-learning-main/index.html` loads public favicon `/thIcon.jpg`, Google Fonts, Font Awesome, Bootstrap Icons, Remix Icon, Three.js, and Vanta.js from CDNs.
## Platform Requirements
- Run commands from `my-mln-learning-main/`, not the repository root.
- Install with `npm install` using `my-mln-learning-main/package-lock.json`.
- Use `npm run dev` for local development. The Vite dev server proxy only applies in development; production builds still reference absolute external URLs.
- Provide `VITE_GEMINI_API_KEY` only if the `/tuvi` AI interpretation feature must call Gemini.
- Static SPA output is produced by `npm run build` into Vite's default `my-mln-learning-main/dist/`.
- Host as a static site with SPA fallback for React Router routes such as `/quiz`, `/flip`, `/tuvi`, and `/courses`.
- Production requires outbound browser access to configured CDNs, hotlinked image hosts, `lmsstyle.com` assets/forms, and Gemini if the AI feature is enabled.
## Content Conversion Risks
- Package/app identity: `my-mln-learning-main/package.json`, `my-mln-learning-main/index.html`.
- Browser title and favicon: `my-mln-learning-main/index.html`, `my-mln-learning-main/public/thIcon.jpg`.
- Logo assets: `my-mln-learning-main/src/assets/images/logo/logo.png`, `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg`, and external logo URL in `my-mln-learning-main/src/components/home/Header.jsx`.
- Marxism-Leninism content: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/components/home/MainContent.jsx`, and `my-mln-learning-main/src/pages/Courses.jsx`.
- Mindmap images: `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`, referenced by `mindmap_url` fields in `my-mln-learning-main/src/data/coursesData.js`.
- `my-mln-learning-main/src/styles/home/home.css` contains copied Moodle/New Learning theme CSS and remote asset references; retheming may require replacing both React markup and CSS selectors.
- `my-mln-learning-main/src/components/home/Header.jsx` includes live `lmsstyle.com` login/search form actions and OAuth links. These are not local app routes and may be inappropriate for a Ho Chi Minh Thought learning site.
- `my-mln-learning-main/src/data/flipImagesData.js` hotlinks many third-party images, including Marx/Lenin-specific images. Replace these with vetted local or licensed Ho Chi Minh Thought assets.
- `my-mln-learning-main/src/pages/Tuvipage.jsx` and `my-mln-learning-main/src/utils/` implement a tử vi feature that is thematically separate from Marxism-Leninism and Ho Chi Minh Thought. Decide whether it remains part of the converted app before investing in retheming it.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- Use PascalCase for React pages, layouts, and components: `src/pages/QuizPage.jsx`, `src/pages/QuizResultsPage.jsx`, `src/components/home/Header.jsx`, `src/layouts/HomeLayout.jsx`.
- Keep feature styles in matching subdirectories under `src/styles/`: `src/styles/courses/courses.css`, `src/styles/quiz/quiz.css`, `src/styles/flip/flip.css`, `src/styles/tuvi/TuviPage.css`.
- Use camelCase for data and service files: `src/data/coursesData.js`, `src/data/quizData.js`, `src/data/flipImagesData.js`, `src/services/geminiService.js`.
- Preserve existing non-English legacy filenames only when editing that feature area: `src/pages/Tuvipage.jsx`, `src/utils/lapDiaBan.js`, `src/utils/DiaBan.js`, `src/utils/Sao.js`.
- Use PascalCase component functions: `App` in `src/App.jsx`, `QuizPage` in `src/pages/QuizPage.jsx`, `Courses` in `src/pages/Courses.jsx`.
- Use `handle*` names for event handlers: `handleStartQuiz`, `handleSelectAnswer`, `handleNext`, `handlePrev`, and `handleSubmit` in `src/pages/QuizPage.jsx`.
- Use `render*` names for component-local render helpers: `renderContent` and `renderMindmap` in `src/pages/Courses.jsx`; `renderCung` and `renderThienBan` in `src/pages/Tuvipage.jsx`.
- Use `use*` names for hooks exported from `src/hooks/home/useAnimations.js`: `useLazyLoad`, `useScrollReveal`, `useStickyHeader`, `useCounterAnimation`, `useParallax`, `useTypingEffect`.
- Use camelCase for JavaScript state and derived values: `selectedTopic`, `quizConfig`, `filteredQuestions`, `currentQuestion`, `selectedAnswers`, `timeLeft`.
- Use Vietnamese domain names in existing Vietnamese calculation/data modules where the surrounding code already does: `ngayAm`, `thangAm`, `namAm`, `canNam`, `chiNam`, `thienBanData` in `src/pages/Tuvipage.jsx`.
- Use snake_case only for content object keys that already use it in course data: `tieu_de`, `cau_noi_hay`, `cac_van_de`, `van_de`, `noi_dung` in `src/data/coursesData.js`.
- Not applicable. The app uses JavaScript and JSX only; no TypeScript type files are detected.
## Code Style
- No Prettier config is detected. Follow the existing Vite/React formatting style: 2-space indentation, semicolons in JSX/source files, double quotes in most app files, and trailing commas in multiline function calls and object literals.
- Preserve the ESM style in all JavaScript modules: `import` at top level and `export default` or named `export const` at the bottom/top as already used in `src/App.jsx`, `src/data/quizData.js`, and `src/services/geminiService.js`.
- Keep JSX readable with multiline props when handlers or inline styles are non-trivial, as in `src/pages/QuizPage.jsx` and `src/pages/Courses.jsx`.
- ESLint flat config lives in `eslint.config.js`.
- The lint target is `**/*.{js,jsx}` and excludes `dist`.
- Config extends `@eslint/js` recommended rules, `eslint-plugin-react-hooks` recommended rules, and `eslint-plugin-react-refresh` Vite rules.
- The custom rule is `no-unused-vars: ["error", { varsIgnorePattern: "^[A-Z_]" }]`; unused uppercase constants are intentionally allowed.
- Current local verification requires installing dependencies first. `npm run lint` currently exits before linting because `eslint` is not found when `node_modules/` is absent.
## Import Organization
- No path aliases are configured in `vite.config.js`; use relative imports.
- Do not introduce alias imports unless `vite.config.js` and all import sites are migrated together.
## Error Handling
- Use local `try/catch` around calculations and external API calls, then set component state or show user-facing fallback messages. `src/pages/Tuvipage.jsx` catches chart-generation errors and resets `error`/`luanGiai` state around AI generation.
- Service functions should throw `Error` instances with Vietnamese user-readable messages when the caller needs to display the failure. `src/services/geminiService.js` throws for missing API key and missing Gemini response text.
- Existing quiz and tu vi flows use `alert(...)` for blocking validation failures in `src/pages/QuizPage.jsx` and `src/pages/Tuvipage.jsx`. Match this only inside those legacy flows; prefer state-driven inline errors for new React features.
## Logging
- Console logging is present for Vanta and Gemini debugging in `src/components/home/MainContent.jsx`, `src/pages/Tuvipage.jsx`, and `src/services/geminiService.js`.
- Do not add new persistent debug logs during the Ho Chi Minh Thought migration. Use temporary logs only while verifying locally, then remove them before handoff.
- Never log environment variable values. `src/pages/Tuvipage.jsx` reads `import.meta.env.VITE_GEMINI_API_KEY`; only presence/status should be exposed.
## Comments
- Use short section comments to separate large legacy UI blocks, matching `// ============ STATE ============` and JSX comments in `src/pages/QuizPage.jsx`.
- Use comments for legacy DOM/jQuery behavior when the selector or mutation is not obvious, as in `src/pages/FlipCardPage.jsx`.
- Keep educational content in data files, not comments. New Ho Chi Minh Thought lessons and quiz content belong in `src/data/coursesData.js`, `src/data/quizData.js`, and related image data.
- Not detected. Do not introduce JSDoc as a one-off convention unless a shared utility API needs documented inputs/outputs.
## Function Design
- Course rendering helpers stay inside `src/pages/Courses.jsx` when tied only to selected course UI.
- Shared content transforms belong beside data files under `src/data/` only when multiple pages need them.
- Avoid expanding `src/components/home/MainContent.jsx` and `src/styles/home/home.css` unless the home experience itself changes.
## Module Design
- Use default exports for React page/layout/component modules: `src/pages/HomePage.jsx`, `src/pages/QuizPage.jsx`, `src/layouts/HomeLayout.jsx`.
- Use named exports for shared data and hooks: `quizQuestions` in `src/data/quizData.js`, `coursesData` in `src/data/coursesData.js`, `useLazyLoad` in `src/hooks/home/useAnimations.js`.
- Use named factory exports for services: `createGeminiService` in `src/services/geminiService.js`.
- Not detected. Import modules directly from their files.
## Component Conventions
- Keep route-level screens in `src/pages/` and shared shell pieces in `src/components/home/`.
- Use React state and props for new work. Existing direct DOM manipulation is isolated to `src/pages/FlipCardPage.jsx` and `src/hooks/home/useAnimations.js`; do not copy jQuery patterns into course, quiz, or home migration code.
- Use Bootstrap utility classes where the file already mixes them with custom classes, such as `src/pages/Courses.jsx` and `src/pages/Tuvipage.jsx`.
- Keep accessibility affordances already present in header markup, including skip links and `aria-*` attributes in `src/components/home/Header.jsx`.
- For modal-like states, bind visual classes to React state as in `src/components/home/Header.jsx` and `src/pages/QuizPage.jsx`.
## Data Conventions
- Course topics use this shape in `src/data/coursesData.js`:
- Quiz questions use this shape in `src/data/quizData.js`:
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
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## System Overview
```text
```
## Component Responsibilities
| Component | Responsibility | File |
|-----------|----------------|------|
| React entry point | Mounts `<App />` under `#root` and imports global vendor CSS from Bootstrap, Font Awesome, and Animate.css. | `my-mln-learning-main/src/main.jsx` |
| Router | Declares all client routes and chooses layouts/pages. No route objects are centralized elsewhere. | `my-mln-learning-main/src/App.jsx` |
| Home layout | Imports home CSS and applies temporary smooth-scroll behavior for nested home routes. | `my-mln-learning-main/src/layouts/HomeLayout.jsx` |
| Quiz layout | Imports quiz CSS for `/quiz` and `/quiz/results`. | `my-mln-learning-main/src/layouts/QuizLayout.jsx` |
| Home page shell | Composes home header, main content, footer, and DOM animation hooks. | `my-mln-learning-main/src/pages/HomePage.jsx` |
| Home header | Holds local UI state for mobile menu/login/search modal and renders Moodle-style header/login/search markup. | `my-mln-learning-main/src/components/home/Header.jsx` |
| Home content | Renders the long landing/course content, initializes `window.VANTA.BIRDS`, and links to `/courses` and `/quiz`. | `my-mln-learning-main/src/components/home/MainContent.jsx` |
| Home footer | Renders TAHA brand, contact information, links, and copyright. | `my-mln-learning-main/src/components/home/Footer.jsx` |
| Course page | Lets users select a topic from `coursesData`, then renders lesson issues, quote, and mind map image. | `my-mln-learning-main/src/pages/Courses.jsx` |
| Quiz page | Filters/shuffles `quizQuestions`, tracks quiz session state/timer/progress, and navigates to `/quiz/results` with route state. | `my-mln-learning-main/src/pages/QuizPage.jsx` |
| Quiz results page | Reads score data from `useLocation().state`, computes pass/fail message, and offers navigation back to quiz/home. | `my-mln-learning-main/src/pages/QuizResultsPage.jsx` |
| Flip game page | Runs a jQuery memory game inside React, uses `localStorage` for game stats, and uses `flipImages` for card backs. | `my-mln-learning-main/src/pages/FlipCardPage.jsx` |
| Tu vi page | Collects birth data, computes a Vietnamese astrology chart, renders 12-cung chart UI, and optionally asks Gemini for an interpretation. | `my-mln-learning-main/src/pages/Tuvipage.jsx` |
| Gemini service | Thin wrapper around `@google/genai` model calls and API-key status checks. | `my-mln-learning-main/src/services/geminiService.js` |
| Astrology utilities | Own lunar-calendar math, star definitions, house model, and chart assembly. | `my-mln-learning-main/src/utils/tuviCalculations.js`, `my-mln-learning-main/src/utils/Sao.js`, `my-mln-learning-main/src/utils/DiaBan.js`, `my-mln-learning-main/src/utils/lapDiaBan.js` |
## Pattern Overview
- Use `BrowserRouter`, nested `<Route element={<Layout />}>`, and `Outlet` for layout-level CSS boundaries in `my-mln-learning-main/src/App.jsx`, `my-mln-learning-main/src/layouts/HomeLayout.jsx`, and `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Keep most feature behavior directly inside page components rather than separate controllers or stores: `my-mln-learning-main/src/pages/QuizPage.jsx`, `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, and `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- Use static ES module arrays for learning content and quiz/card assets: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, and `my-mln-learning-main/src/data/flipImagesData.js`.
- Use CSS imported by layouts/pages, not CSS modules. Selectors rely on wrapper classes such as `.triet-hoc-wrapper`, `.flip-game-container`, `.tuvi-container-wrapper`, and `.wrapper`.
## Layers
- Purpose: Provide static HTML metadata, icon/CDN includes, and the Vite module script.
- Location: `my-mln-learning-main/index.html`
- Contains: `#root`, favicon `/thIcon.jpg`, title `TAHA - Triết học và đời sống`, Google Fonts, Font Awesome, Bootstrap Icons, Remix Icons, Three.js, and Vanta scripts.
- Depends on: CDN CSS/scripts and `/src/main.jsx`.
- Used by: Vite dev/build output.
- Purpose: Mount React and import app-wide vendor styles.
- Location: `my-mln-learning-main/src/main.jsx`
- Contains: `createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>)`.
- Depends on: `react`, `react-dom/client`, `bootstrap/dist/css/bootstrap.min.css`, `@fortawesome/fontawesome-free/css/all.min.css`, `animate.css`.
- Used by: `my-mln-learning-main/index.html`.
- Purpose: Map URL paths to pages and decide which CSS/layout wrapper applies.
- Location: `my-mln-learning-main/src/App.jsx`
- Contains: `/`, `/quiz`, `/quiz/results`, `/flip`, `/tuvi`, `/courses`.
- Depends on: `react-router-dom`, page components, layout components.
- Used by: `my-mln-learning-main/src/main.jsx`.
- Purpose: Import route-family CSS and render nested route content via `Outlet`.
- Location: `my-mln-learning-main/src/layouts/`
- Contains: `HomeLayout.jsx` and `QuizLayout.jsx`.
- Depends on: `react-router-dom`, feature CSS files under `my-mln-learning-main/src/styles/`.
- Used by: `my-mln-learning-main/src/App.jsx`.
- Purpose: Own page state, data selection, navigation, and feature UI.
- Location: `my-mln-learning-main/src/pages/`
- Contains: `HomePage.jsx`, `Courses.jsx`, `QuizPage.jsx`, `QuizResultsPage.jsx`, `FlipCardPage.jsx`, `Tuvipage.jsx`.
- Depends on: data modules, services, utilities, CSS imports, assets, and `react-router-dom`.
- Used by: `my-mln-learning-main/src/App.jsx`.
- Purpose: Break the home page into header/main/footer sections.
- Location: `my-mln-learning-main/src/components/home/`
- Contains: `Header.jsx`, `MainContent.jsx`, `Footer.jsx`.
- Depends on: home CSS from layout, route links, local images, and Vanta globals.
- Used by: `my-mln-learning-main/src/pages/HomePage.jsx`.
- Purpose: Provide all Marxism-Leninism learning content, quiz questions, and flip-game image URLs without a backend.
- Location: `my-mln-learning-main/src/data/`
- Contains: `coursesData.js`, `quizData.js`, `flipImagesData.js`.
- Depends on: no app modules.
- Used by: `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/QuizPage.jsx`, and `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- Purpose: Calculate Vietnamese lunar/astrology chart data and classify stars/houses.
- Location: `my-mln-learning-main/src/utils/`
- Contains: `tuviCalculations.js`, `Sao.js`, `DiaBan.js`, `lapDiaBan.js`.
- Depends on: other local utility modules only.
- Used by: `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Purpose: Encapsulate Gemini client initialization and `generateContent` call.
- Location: `my-mln-learning-main/src/services/geminiService.js`
- Contains: `GeminiService` class and `createGeminiService(apiKey)` factory.
- Depends on: `@google/genai`.
- Used by: `my-mln-learning-main/src/pages/Tuvipage.jsx`.
## Data Flow
### Primary Route Render Path
### Home Page Flow
### Courses Flow
### Quiz Flow
### Flip Game Flow
### Tu Vi / Gemini Flow
- Use React local state (`useState`) for page/session UI in `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/QuizPage.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, and `my-mln-learning-main/src/components/home/Header.jsx`.
- Use React Router route state for quiz results handoff from `my-mln-learning-main/src/pages/QuizPage.jsx` to `my-mln-learning-main/src/pages/QuizResultsPage.jsx`.
- Use `localStorage` only for flip-game stats in `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- There is no global React context, Redux store, server state cache, or backend persistence layer.
## Routes, Pages, Layouts, Components
| Route | Layout | Page | Main Data / Service | CSS Boundary |
|-------|--------|------|---------------------|--------------|
| `/` | `my-mln-learning-main/src/layouts/HomeLayout.jsx` | `my-mln-learning-main/src/pages/HomePage.jsx` | Home components and DOM animation hooks | `my-mln-learning-main/src/styles/home/home.css` imported by layout |
| `/quiz` | `my-mln-learning-main/src/layouts/QuizLayout.jsx` | `my-mln-learning-main/src/pages/QuizPage.jsx` | `my-mln-learning-main/src/data/quizData.js` | `my-mln-learning-main/src/styles/quiz/quiz.css` imported by layout |
| `/quiz/results` | `my-mln-learning-main/src/layouts/QuizLayout.jsx` | `my-mln-learning-main/src/pages/QuizResultsPage.jsx` | React Router location state | `my-mln-learning-main/src/styles/quiz/quiz.css` plus inline `<style>` string |
| `/flip` | Not applicable | `my-mln-learning-main/src/pages/FlipCardPage.jsx` | `my-mln-learning-main/src/data/flipImagesData.js`, `localStorage`, jQuery | `my-mln-learning-main/src/styles/flip/flip.css` imported by page |
| `/tuvi` | Not applicable | `my-mln-learning-main/src/pages/Tuvipage.jsx` | `my-mln-learning-main/src/utils/`, `my-mln-learning-main/src/services/geminiService.js` | `my-mln-learning-main/src/styles/tuvi/TuviPage.css` imported by page |
| `/courses` | Not applicable | `my-mln-learning-main/src/pages/Courses.jsx` | `my-mln-learning-main/src/data/coursesData.js` | `my-mln-learning-main/src/styles/courses/courses.css` imported by page |
## Image Imports and Static Assets
- Home content imports `demo_certificates.png`, `makdahome.png`, and `thu-ha.png` from `my-mln-learning-main/src/assets/images/` in `my-mln-learning-main/src/components/home/MainContent.jsx`.
- Header imports `logo-dark2.svg` from `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg` in `my-mln-learning-main/src/components/home/Header.jsx`.
- Quiz imports `logo.png`, `bg_0.png`, and `clock.png` from `my-mln-learning-main/src/assets/images/` in `my-mln-learning-main/src/pages/QuizPage.jsx`.
- `my-mln-learning-main/index.html` uses `/thIcon.jpg`, backed by `my-mln-learning-main/public/thIcon.jpg`.
- `my-mln-learning-main/src/data/coursesData.js` stores `mindmap_url` values like `chu-de-1.jpg`, `chu-de-2.jpg`, and `chu-de-3.jpg`, backed by `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, and `my-mln-learning-main/public/chu-de-3.jpg`.
- `my-mln-learning-main/src/styles/quiz/quiz.css` references `../../assets/images/background/bg.png`.
- `my-mln-learning-main/src/styles/tuvi/TuviPage.css` references `../../assets/images/texture.jpg`.
- `my-mln-learning-main/src/styles/flip/flip.css` references flip fonts and images under `my-mln-learning-main/src/assets/fonts/flip/` and `my-mln-learning-main/src/assets/images/flip/`.
- `my-mln-learning-main/src/styles/home/home.css` includes many Moodle-derived `/theme/new-learning/...` URLs and embedded font data.
- `my-mln-learning-main/src/components/home/Header.jsx` and `my-mln-learning-main/src/components/home/MainContent.jsx` reference `https://lmsstyle.com/theme/new-learning/...` images and links.
- `my-mln-learning-main/src/data/flipImagesData.js` contains remote philosophy/Marxism/Lenin/Buddhist image URLs used by the memory game.
## CSS Boundaries
- `my-mln-learning-main/src/main.jsx` imports Bootstrap, Font Awesome, and Animate.css globally.
- `my-mln-learning-main/index.html` also imports Font Awesome, Bootstrap Icons, Remix Icons, and Google Fonts through CDN links.
- Home CSS is imported by `my-mln-learning-main/src/layouts/HomeLayout.jsx` and is broad/global. It targets `body`, `:root`, `#main-header`, `.page-outer`, Moodle classes, and many unrelated selectors in `my-mln-learning-main/src/styles/home/home.css`.
- Quiz CSS is imported by `my-mln-learning-main/src/layouts/QuizLayout.jsx`; it uses `.wrapper` and also targets `body` in `my-mln-learning-main/src/styles/quiz/quiz.css`.
- Courses CSS is imported directly by `my-mln-learning-main/src/pages/Courses.jsx` and is mostly scoped below `.triet-hoc-wrapper` in `my-mln-learning-main/src/styles/courses/courses.css`.
- Flip CSS is imported directly by `my-mln-learning-main/src/pages/FlipCardPage.jsx` and is heavily scoped below `.flip-game-container` in `my-mln-learning-main/src/styles/flip/flip.css`.
- Tu vi CSS is imported directly by `my-mln-learning-main/src/pages/Tuvipage.jsx` and is heavily scoped below `.tuvi-container-wrapper` in `my-mln-learning-main/src/styles/tuvi/TuviPage.css`.
- Quiz results uses an inline `styles` string and `<style>{styles}</style>` inside `my-mln-learning-main/src/pages/QuizResultsPage.jsx`; this bypasses feature CSS files.
- Add new route-family CSS through a layout only when multiple routes share that feature boundary, as with `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Add standalone page CSS directly in the page file when the route is independent, as with `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`, and `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Prefer a unique wrapper selector for new page CSS to avoid leaking into the broad Moodle-derived home styles.
## Project Identity Locations
- `my-mln-learning-main/package.json` names the package `my-mln-learning`.
- `my-mln-learning-main/index.html` sets the document title to `TAHA - Triết học và đời sống`.
- `my-mln-learning-main/index.html` uses `/thIcon.jpg` as the favicon.
- `my-mln-learning-main/src/components/home/MainContent.jsx` contains homepage copy such as `Khám phá Triết học Mác - Lênin`, `nguyên lý triết học Mác - Lênin`, and Karl Marx quotation text.
- `my-mln-learning-main/src/data/coursesData.js` contains course topics, quotes, and mind-map IDs for Marxism-Leninism philosophy content.
- `my-mln-learning-main/src/data/quizData.js` contains quiz questions about general philosophy, Marx, Engels, Lenin, dialectical materialism, and historical materialism.
- `my-mln-learning-main/src/data/flipImagesData.js` includes remote image URLs tied to philosophy, Marxism-Leninism, Lenin, and adjacent non-Ho-Chi-Minh imagery.
- `my-mln-learning-main/src/pages/Courses.jsx` renders visible learning identity: `Học cùng chúng tớ` and `Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử`.
- `my-mln-learning-main/src/components/home/Footer.jsx` renders `TAHA - Triết học và Đời sống`, `TAHA - Triết học và đời sống. All rights reserved.`, team prompt text, email, phone, and social link.
- `my-mln-learning-main/src/pages/FlipCardPage.jsx` renders `Nguyễn Thị Thu Hà` copyright text.
- `my-mln-learning-main/src/assets/images/thu-ha.png` and `my-mln-learning-main/src/assets/images/makdahome.png` are home identity/media assets used by `my-mln-learning-main/src/components/home/MainContent.jsx`.
- `my-mln-learning-main/src/components/home/Header.jsx` contains `New Learning | Premium Moodle Theme` alt/aria text and forms/links to `https://lmsstyle.com/theme/new-learning/...`.
- `my-mln-learning-main/index.html` body classes and `my-mln-learning-main/src/styles/home/home.css` are Moodle/New Learning theme-derived.
## Key Abstractions
- Purpose: Represents course topics and quiz content as plain JavaScript arrays.
- Examples: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`.
- Pattern: Import entire array into page, filter/select in component state, render directly.
- Purpose: Attach feature CSS to route groups.
- Examples: `my-mln-learning-main/src/layouts/HomeLayout.jsx`, `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Pattern: Import CSS once in layout and render `Outlet`.
- Purpose: Represent stars/houses and computed chart values for `Tuvipage.jsx`.
- Examples: `my-mln-learning-main/src/utils/DiaBan.js`, `my-mln-learning-main/src/utils/Sao.js`, `my-mln-learning-main/src/utils/lapDiaBan.js`.
- Pattern: Utilities build structured `diaBan`/`laSo` objects, React page renders those objects.
- Purpose: Create one Gemini service instance from a Vite environment variable.
- Examples: `my-mln-learning-main/src/services/geminiService.js`, `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Pattern: `createGeminiService(apiKey)` stores a class instance in a React ref.
- Purpose: Add lazy loading, reveal, sticky header, parallax, counters, and typing by querying the document.
- Examples: `my-mln-learning-main/src/hooks/home/useAnimations.js`, `my-mln-learning-main/src/pages/HomePage.jsx`.
- Pattern: `useEffect` selects DOM elements by class/id and registers observer/listener cleanup.
## Entry Points
- Location: `my-mln-learning-main/index.html`
- Triggers: Browser loads Vite-served HTML.
- Responsibilities: External icon/font/script CDNs, favicon, title, root div, body classes.
- Location: `my-mln-learning-main/src/main.jsx`
- Triggers: `<script type="module" src="/src/main.jsx">`.
- Responsibilities: Global vendor CSS imports and React root mount.
- Location: `my-mln-learning-main/src/App.jsx`
- Triggers: React render and browser URL changes.
- Responsibilities: Route declarations and layout/page selection.
- Location: `my-mln-learning-main/src/pages/Tuvipage.jsx`
- Triggers: User clicks `Tạo luận giải` after chart creation.
- Responsibilities: Build prompt, call `GeminiService.generateResponse()`, render returned paragraphs.
## Architectural Constraints
- **Threading:** The app is single-threaded browser JavaScript. No Web Workers are used. Timer behavior uses `setInterval` in `my-mln-learning-main/src/pages/QuizPage.jsx`; flip game timers/animations are DOM/CSS/jQuery-driven in `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- **Global state:** No application store exists. Global mutable state is limited to browser globals and DOM state: `window.VANTA` in `my-mln-learning-main/src/components/home/MainContent.jsx` and `my-mln-learning-main/src/pages/Tuvipage.jsx`, `document`/`window` listeners in `my-mln-learning-main/src/hooks/home/useAnimations.js`, and `localStorage` in `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- **Circular imports:** Not detected in inspected imports. Utility dependencies are one-way: `lapDiaBan.js` imports `DiaBan.js`, `Sao.js`, and `tuviCalculations.js`; pages import utilities/data/services.
- **Routing:** Routes are hard-coded in `my-mln-learning-main/src/App.jsx`. Add new paths there.
- **Environment variables:** Vite-style env access is used only in `my-mln-learning-main/src/pages/Tuvipage.jsx` via `import.meta.env.VITE_GEMINI_API_KEY`.
- **Backend:** Not detected. All learning content is local static data; Gemini is called directly from browser code.
## Anti-Patterns
### Broad Global CSS Leakage
### React + jQuery DOM Ownership
### Route State as Durable Result Store
### Hard-Coded Identity Copy Across UI and Data
## Error Handling
- Quiz config errors use `alert()` in `my-mln-learning-main/src/pages/QuizPage.jsx` when no filtered questions are found.
- Quiz results provide fallback zero values in `my-mln-learning-main/src/pages/QuizResultsPage.jsx` when route state is absent.
- Tu vi chart generation wraps calculations in `try/catch` and stores an error string in local state in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Gemini errors are caught in `my-mln-learning-main/src/services/geminiService.js` and rethrown with Vietnamese user-facing text; `my-mln-learning-main/src/pages/Tuvipage.jsx` renders the error in an alert.
- Home animation hooks assume target browser APIs exist; `my-mln-learning-main/src/hooks/home/useAnimations.js` does not guard `IntersectionObserver`.
## Cross-Cutting Concerns
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
