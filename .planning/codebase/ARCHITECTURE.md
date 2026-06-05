<!-- refreshed: 2026-06-05 -->
# Architecture

**Analysis Date:** 2026-06-05

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                    Vite / React Browser App                  │
│               `my-mln-learning-main/src/main.jsx`            │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 React Router Route Registry                  │
│                 `my-mln-learning-main/src/App.jsx`           │
├──────────────────┬──────────────────┬───────────────────────┤
│ Home route `/`   │ Quiz routes      │ Standalone feature     │
│ `src/layouts/`   │ `src/layouts/`   │ pages                  │
│ `src/pages/`     │ `src/pages/`     │ `src/pages/`           │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  Feature UI + Feature CSS                    │
│ `src/components/home/`, `src/pages/`, `src/styles/`          │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               Static Data, Local State, Utilities            │
│ `src/data/`, `src/utils/`, `src/services/geminiService.js`   │
└─────────────────────────────────────────────────────────────┘
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

**Overall:** Page-centric React SPA with feature-level CSS and static in-repo data.

**Key Characteristics:**
- Use `BrowserRouter`, nested `<Route element={<Layout />}>`, and `Outlet` for layout-level CSS boundaries in `my-mln-learning-main/src/App.jsx`, `my-mln-learning-main/src/layouts/HomeLayout.jsx`, and `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Keep most feature behavior directly inside page components rather than separate controllers or stores: `my-mln-learning-main/src/pages/QuizPage.jsx`, `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, and `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- Use static ES module arrays for learning content and quiz/card assets: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, and `my-mln-learning-main/src/data/flipImagesData.js`.
- Use CSS imported by layouts/pages, not CSS modules. Selectors rely on wrapper classes such as `.triet-hoc-wrapper`, `.flip-game-container`, `.tuvi-container-wrapper`, and `.wrapper`.

## Layers

**HTML Shell / Runtime Bootstrap:**
- Purpose: Provide static HTML metadata, icon/CDN includes, and the Vite module script.
- Location: `my-mln-learning-main/index.html`
- Contains: `#root`, favicon `/thIcon.jpg`, title `TAHA - Triết học và đời sống`, Google Fonts, Font Awesome, Bootstrap Icons, Remix Icons, Three.js, and Vanta scripts.
- Depends on: CDN CSS/scripts and `/src/main.jsx`.
- Used by: Vite dev/build output.

**App Bootstrap:**
- Purpose: Mount React and import app-wide vendor styles.
- Location: `my-mln-learning-main/src/main.jsx`
- Contains: `createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>)`.
- Depends on: `react`, `react-dom/client`, `bootstrap/dist/css/bootstrap.min.css`, `@fortawesome/fontawesome-free/css/all.min.css`, `animate.css`.
- Used by: `my-mln-learning-main/index.html`.

**Routing:**
- Purpose: Map URL paths to pages and decide which CSS/layout wrapper applies.
- Location: `my-mln-learning-main/src/App.jsx`
- Contains: `/`, `/quiz`, `/quiz/results`, `/flip`, `/tuvi`, `/courses`.
- Depends on: `react-router-dom`, page components, layout components.
- Used by: `my-mln-learning-main/src/main.jsx`.

**Layouts:**
- Purpose: Import route-family CSS and render nested route content via `Outlet`.
- Location: `my-mln-learning-main/src/layouts/`
- Contains: `HomeLayout.jsx` and `QuizLayout.jsx`.
- Depends on: `react-router-dom`, feature CSS files under `my-mln-learning-main/src/styles/`.
- Used by: `my-mln-learning-main/src/App.jsx`.

**Pages:**
- Purpose: Own page state, data selection, navigation, and feature UI.
- Location: `my-mln-learning-main/src/pages/`
- Contains: `HomePage.jsx`, `Courses.jsx`, `QuizPage.jsx`, `QuizResultsPage.jsx`, `FlipCardPage.jsx`, `Tuvipage.jsx`.
- Depends on: data modules, services, utilities, CSS imports, assets, and `react-router-dom`.
- Used by: `my-mln-learning-main/src/App.jsx`.

**Home Components:**
- Purpose: Break the home page into header/main/footer sections.
- Location: `my-mln-learning-main/src/components/home/`
- Contains: `Header.jsx`, `MainContent.jsx`, `Footer.jsx`.
- Depends on: home CSS from layout, route links, local images, and Vanta globals.
- Used by: `my-mln-learning-main/src/pages/HomePage.jsx`.

**Static Data:**
- Purpose: Provide all Marxism-Leninism learning content, quiz questions, and flip-game image URLs without a backend.
- Location: `my-mln-learning-main/src/data/`
- Contains: `coursesData.js`, `quizData.js`, `flipImagesData.js`.
- Depends on: no app modules.
- Used by: `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/QuizPage.jsx`, and `my-mln-learning-main/src/pages/FlipCardPage.jsx`.

**Domain Utilities:**
- Purpose: Calculate Vietnamese lunar/astrology chart data and classify stars/houses.
- Location: `my-mln-learning-main/src/utils/`
- Contains: `tuviCalculations.js`, `Sao.js`, `DiaBan.js`, `lapDiaBan.js`.
- Depends on: other local utility modules only.
- Used by: `my-mln-learning-main/src/pages/Tuvipage.jsx`.

**External Service Adapter:**
- Purpose: Encapsulate Gemini client initialization and `generateContent` call.
- Location: `my-mln-learning-main/src/services/geminiService.js`
- Contains: `GeminiService` class and `createGeminiService(apiKey)` factory.
- Depends on: `@google/genai`.
- Used by: `my-mln-learning-main/src/pages/Tuvipage.jsx`.

## Data Flow

### Primary Route Render Path

1. Browser loads `my-mln-learning-main/index.html`, which provides `#root` and `/src/main.jsx`.
2. `my-mln-learning-main/src/main.jsx` imports vendor CSS and mounts `my-mln-learning-main/src/App.jsx`.
3. `my-mln-learning-main/src/App.jsx` matches the current URL with `BrowserRouter`, `Routes`, and `Route`.
4. Layout routes render `Outlet` from `my-mln-learning-main/src/layouts/HomeLayout.jsx` or `my-mln-learning-main/src/layouts/QuizLayout.jsx`; standalone pages render directly.
5. Page components load static data, assets, feature CSS, utilities, or services as needed, then render browser-only UI.

### Home Page Flow

1. `/` renders `my-mln-learning-main/src/pages/HomePage.jsx` inside `my-mln-learning-main/src/layouts/HomeLayout.jsx`.
2. `HomeLayout.jsx` imports `my-mln-learning-main/src/styles/home/home.css` and toggles `document.documentElement.style.scrollBehavior`.
3. `HomePage.jsx` invokes `useLazyLoad`, `useScrollReveal`, `useStickyHeader`, and `useParallax` from `my-mln-learning-main/src/hooks/home/useAnimations.js`.
4. `Header.jsx`, `MainContent.jsx`, and `Footer.jsx` render static Moodle-style markup and route links.
5. `MainContent.jsx` initializes `window.VANTA.BIRDS` from the global CDN scripts in `my-mln-learning-main/index.html` and lazy-loads local/remote images through `.lazy` and `data-src`.

### Courses Flow

1. `/courses` renders `my-mln-learning-main/src/pages/Courses.jsx` directly, importing `my-mln-learning-main/src/styles/courses/courses.css`.
2. `Courses.jsx` reads `coursesData` from `my-mln-learning-main/src/data/coursesData.js`.
3. User selection updates local `selectedTopic` state.
4. The page renders `selectedTopic.cac_van_de`, `selectedTopic.cau_noi_hay`, and a mind map image from `selectedTopic.mindmap_url`.
5. Mind map image strings such as `chu-de-1.jpg` resolve from `my-mln-learning-main/public/` at runtime.

### Quiz Flow

1. `/quiz` renders `my-mln-learning-main/src/pages/QuizPage.jsx` inside `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
2. `QuizLayout.jsx` imports `my-mln-learning-main/src/styles/quiz/quiz.css`.
3. `QuizPage.jsx` reads `quizQuestions` from `my-mln-learning-main/src/data/quizData.js`, derives chapter options, filters by quiz config, shuffles with `Array.sort(() => Math.random() - 0.5)`, and stores selected answers in local component state.
4. Timer state decrements every second through `useEffect`; at zero, `handleSubmit()` runs.
5. `handleSubmit()` computes `score`, `total`, and `percentage`, then calls `navigate("/quiz/results", { state })`.
6. `/quiz/results` renders `my-mln-learning-main/src/pages/QuizResultsPage.jsx`, reads route state through `useLocation()`, and navigates back with `useNavigate()`.

### Flip Game Flow

1. `/flip` renders `my-mln-learning-main/src/pages/FlipCardPage.jsx` directly and imports `my-mln-learning-main/src/styles/flip/flip.css`.
2. `FlipCardPage.jsx` imports `flipImages` from `my-mln-learning-main/src/data/flipImagesData.js`.
3. On mount, a `useEffect` block registers jQuery handlers against `.play`, `.share-click`, `.game-card`, and `window`.
4. Game state and statistics persist in `localStorage` keys prefixed with `flip_`.
5. Card DOM nodes are created with jQuery and appended into `.flip-game-container .game-area`; card backs are assigned remote image URLs from `flipImages`.
6. Cleanup removes registered handlers on unmount.

### Tu Vi / Gemini Flow

1. `/tuvi` renders `my-mln-learning-main/src/pages/Tuvipage.jsx` directly and imports `my-mln-learning-main/src/styles/tuvi/TuviPage.css`.
2. `Tuvipage.jsx` initializes form state and reads `import.meta.env.VITE_GEMINI_API_KEY`.
3. `createGeminiService()` from `my-mln-learning-main/src/services/geminiService.js` creates a `GeminiService` instance stored in a ref.
4. `handleSubmit()` converts form values, calls `lapDiaBan()` from `my-mln-learning-main/src/utils/lapDiaBan.js`, and combines utility outputs from `my-mln-learning-main/src/utils/tuviCalculations.js` into `thienBanData`.
5. `laSo` local state drives `renderCung()` and `renderThienBan()` output for the 12-house chart.
6. `generateLuanGiai()` builds a prompt from `laSo`, calls `GeminiService.generateResponse()`, and stores the returned text in `luanGiai`.

**State Management:**
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

**Local ES Module Image Imports:**
- Home content imports `demo_certificates.png`, `makdahome.png`, and `thu-ha.png` from `my-mln-learning-main/src/assets/images/` in `my-mln-learning-main/src/components/home/MainContent.jsx`.
- Header imports `logo-dark2.svg` from `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg` in `my-mln-learning-main/src/components/home/Header.jsx`.
- Quiz imports `logo.png`, `bg_0.png`, and `clock.png` from `my-mln-learning-main/src/assets/images/` in `my-mln-learning-main/src/pages/QuizPage.jsx`.

**Public Assets Referenced by Runtime URL:**
- `my-mln-learning-main/index.html` uses `/thIcon.jpg`, backed by `my-mln-learning-main/public/thIcon.jpg`.
- `my-mln-learning-main/src/data/coursesData.js` stores `mindmap_url` values like `chu-de-1.jpg`, `chu-de-2.jpg`, and `chu-de-3.jpg`, backed by `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, and `my-mln-learning-main/public/chu-de-3.jpg`.

**CSS Referenced Assets:**
- `my-mln-learning-main/src/styles/quiz/quiz.css` references `../../assets/images/background/bg.png`.
- `my-mln-learning-main/src/styles/tuvi/TuviPage.css` references `../../assets/images/texture.jpg`.
- `my-mln-learning-main/src/styles/flip/flip.css` references flip fonts and images under `my-mln-learning-main/src/assets/fonts/flip/` and `my-mln-learning-main/src/assets/images/flip/`.
- `my-mln-learning-main/src/styles/home/home.css` includes many Moodle-derived `/theme/new-learning/...` URLs and embedded font data.

**Remote Image URLs in Markup/Data:**
- `my-mln-learning-main/src/components/home/Header.jsx` and `my-mln-learning-main/src/components/home/MainContent.jsx` reference `https://lmsstyle.com/theme/new-learning/...` images and links.
- `my-mln-learning-main/src/data/flipImagesData.js` contains remote philosophy/Marxism/Lenin/Buddhist image URLs used by the memory game.

## CSS Boundaries

**Global Vendor CSS:**
- `my-mln-learning-main/src/main.jsx` imports Bootstrap, Font Awesome, and Animate.css globally.
- `my-mln-learning-main/index.html` also imports Font Awesome, Bootstrap Icons, Remix Icons, and Google Fonts through CDN links.

**Feature CSS:**
- Home CSS is imported by `my-mln-learning-main/src/layouts/HomeLayout.jsx` and is broad/global. It targets `body`, `:root`, `#main-header`, `.page-outer`, Moodle classes, and many unrelated selectors in `my-mln-learning-main/src/styles/home/home.css`.
- Quiz CSS is imported by `my-mln-learning-main/src/layouts/QuizLayout.jsx`; it uses `.wrapper` and also targets `body` in `my-mln-learning-main/src/styles/quiz/quiz.css`.
- Courses CSS is imported directly by `my-mln-learning-main/src/pages/Courses.jsx` and is mostly scoped below `.triet-hoc-wrapper` in `my-mln-learning-main/src/styles/courses/courses.css`.
- Flip CSS is imported directly by `my-mln-learning-main/src/pages/FlipCardPage.jsx` and is heavily scoped below `.flip-game-container` in `my-mln-learning-main/src/styles/flip/flip.css`.
- Tu vi CSS is imported directly by `my-mln-learning-main/src/pages/Tuvipage.jsx` and is heavily scoped below `.tuvi-container-wrapper` in `my-mln-learning-main/src/styles/tuvi/TuviPage.css`.
- Quiz results uses an inline `styles` string and `<style>{styles}</style>` inside `my-mln-learning-main/src/pages/QuizResultsPage.jsx`; this bypasses feature CSS files.

**Prescriptive Boundary Rule:**
- Add new route-family CSS through a layout only when multiple routes share that feature boundary, as with `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Add standalone page CSS directly in the page file when the route is independent, as with `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`, and `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Prefer a unique wrapper selector for new page CSS to avoid leaking into the broad Moodle-derived home styles.

## Project Identity Locations

**App / Browser Identity:**
- `my-mln-learning-main/package.json` names the package `my-mln-learning`.
- `my-mln-learning-main/index.html` sets the document title to `TAHA - Triết học và đời sống`.
- `my-mln-learning-main/index.html` uses `/thIcon.jpg` as the favicon.

**Current Marxism-Leninism / Philosophy Learning Identity:**
- `my-mln-learning-main/src/components/home/MainContent.jsx` contains homepage copy such as `Khám phá Triết học Mác - Lênin`, `nguyên lý triết học Mác - Lênin`, and Karl Marx quotation text.
- `my-mln-learning-main/src/data/coursesData.js` contains course topics, quotes, and mind-map IDs for Marxism-Leninism philosophy content.
- `my-mln-learning-main/src/data/quizData.js` contains quiz questions about general philosophy, Marx, Engels, Lenin, dialectical materialism, and historical materialism.
- `my-mln-learning-main/src/data/flipImagesData.js` includes remote image URLs tied to philosophy, Marxism-Leninism, Lenin, and adjacent non-Ho-Chi-Minh imagery.
- `my-mln-learning-main/src/pages/Courses.jsx` renders visible learning identity: `Học cùng chúng tớ` and `Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử`.

**TAHA / Team Identity:**
- `my-mln-learning-main/src/components/home/Footer.jsx` renders `TAHA - Triết học và Đời sống`, `TAHA - Triết học và đời sống. All rights reserved.`, team prompt text, email, phone, and social link.
- `my-mln-learning-main/src/pages/FlipCardPage.jsx` renders `Nguyễn Thị Thu Hà` copyright text.
- `my-mln-learning-main/src/assets/images/thu-ha.png` and `my-mln-learning-main/src/assets/images/makdahome.png` are home identity/media assets used by `my-mln-learning-main/src/components/home/MainContent.jsx`.

**External Template Identity:**
- `my-mln-learning-main/src/components/home/Header.jsx` contains `New Learning | Premium Moodle Theme` alt/aria text and forms/links to `https://lmsstyle.com/theme/new-learning/...`.
- `my-mln-learning-main/index.html` body classes and `my-mln-learning-main/src/styles/home/home.css` are Moodle/New Learning theme-derived.

## Key Abstractions

**Static Learning Dataset:**
- Purpose: Represents course topics and quiz content as plain JavaScript arrays.
- Examples: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`.
- Pattern: Import entire array into page, filter/select in component state, render directly.

**Layout as CSS Boundary:**
- Purpose: Attach feature CSS to route groups.
- Examples: `my-mln-learning-main/src/layouts/HomeLayout.jsx`, `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Pattern: Import CSS once in layout and render `Outlet`.

**Astrology Chart Model:**
- Purpose: Represent stars/houses and computed chart values for `Tuvipage.jsx`.
- Examples: `my-mln-learning-main/src/utils/DiaBan.js`, `my-mln-learning-main/src/utils/Sao.js`, `my-mln-learning-main/src/utils/lapDiaBan.js`.
- Pattern: Utilities build structured `diaBan`/`laSo` objects, React page renders those objects.

**Service Factory:**
- Purpose: Create one Gemini service instance from a Vite environment variable.
- Examples: `my-mln-learning-main/src/services/geminiService.js`, `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Pattern: `createGeminiService(apiKey)` stores a class instance in a React ref.

**DOM Enhancement Hooks:**
- Purpose: Add lazy loading, reveal, sticky header, parallax, counters, and typing by querying the document.
- Examples: `my-mln-learning-main/src/hooks/home/useAnimations.js`, `my-mln-learning-main/src/pages/HomePage.jsx`.
- Pattern: `useEffect` selects DOM elements by class/id and registers observer/listener cleanup.

## Entry Points

**HTML Entry:**
- Location: `my-mln-learning-main/index.html`
- Triggers: Browser loads Vite-served HTML.
- Responsibilities: External icon/font/script CDNs, favicon, title, root div, body classes.

**React Entry:**
- Location: `my-mln-learning-main/src/main.jsx`
- Triggers: `<script type="module" src="/src/main.jsx">`.
- Responsibilities: Global vendor CSS imports and React root mount.

**Route Entry:**
- Location: `my-mln-learning-main/src/App.jsx`
- Triggers: React render and browser URL changes.
- Responsibilities: Route declarations and layout/page selection.

**AI Service Entry:**
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

**What happens:** `my-mln-learning-main/src/styles/home/home.css` targets `body`, `:root`, `.card-body`, `.modal-body`, Moodle classes, and external `/theme/new-learning/...` URLs beyond the home route.
**Why it's wrong:** New pages can inherit unexpected theme, body, modal, card, icon, and font behavior when CSS remains loaded after route transitions.
**Do this instead:** For new Ho Chi Minh Thought pages, use page-level wrapper selectors like `.hcm-learning-wrapper` following the scoping style in `my-mln-learning-main/src/styles/courses/courses.css` and `my-mln-learning-main/src/styles/flip/flip.css`.

### React + jQuery DOM Ownership

**What happens:** `my-mln-learning-main/src/pages/FlipCardPage.jsx` creates, mutates, and removes game cards with jQuery inside a React component.
**Why it's wrong:** React cannot reason about those nodes, which makes cleanup, rerender behavior, and future component reuse fragile.
**Do this instead:** Keep new interactive learning games in React state/components. If modifying the existing flip page, isolate jQuery work inside its existing `useEffect` and clean every registered handler in the returned cleanup.

### Route State as Durable Result Store

**What happens:** `my-mln-learning-main/src/pages/QuizResultsPage.jsx` defaults to zero score if opened without `location.state`.
**Why it's wrong:** Refreshing or directly visiting `/quiz/results` loses quiz context.
**Do this instead:** For future durable results, use URL params, session storage, or a store module; keep transient route state only for one-step navigation from `my-mln-learning-main/src/pages/QuizPage.jsx`.

### Hard-Coded Identity Copy Across UI and Data

**What happens:** Marxism-Leninism identity appears in `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/data/flipImagesData.js`, `my-mln-learning-main/src/pages/Courses.jsx`, and `my-mln-learning-main/index.html`.
**Why it's wrong:** Converting the app identity requires coordinated edits across page markup, static datasets, image URLs, metadata, and public assets.
**Do this instead:** For conversion work, update identity in data modules first, then route/page copy, then metadata/assets. Keep new Ho Chi Minh Thought topic content in `my-mln-learning-main/src/data/` unless a broader content abstraction is introduced.

## Error Handling

**Strategy:** Most features handle errors locally in page code; there is no app-level error boundary.

**Patterns:**
- Quiz config errors use `alert()` in `my-mln-learning-main/src/pages/QuizPage.jsx` when no filtered questions are found.
- Quiz results provide fallback zero values in `my-mln-learning-main/src/pages/QuizResultsPage.jsx` when route state is absent.
- Tu vi chart generation wraps calculations in `try/catch` and stores an error string in local state in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Gemini errors are caught in `my-mln-learning-main/src/services/geminiService.js` and rethrown with Vietnamese user-facing text; `my-mln-learning-main/src/pages/Tuvipage.jsx` renders the error in an alert.
- Home animation hooks assume target browser APIs exist; `my-mln-learning-main/src/hooks/home/useAnimations.js` does not guard `IntersectionObserver`.

## Cross-Cutting Concerns

**Logging:** Console logging is used for debugging in `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, and `my-mln-learning-main/src/services/geminiService.js`.

**Validation:** Validation is page-local. `my-mln-learning-main/src/pages/QuizPage.jsx` checks empty quiz selection; `my-mln-learning-main/src/pages/Tuvipage.jsx` depends on select inputs and parsing rather than a schema.

**Authentication:** No app authentication is implemented. `my-mln-learning-main/src/components/home/Header.jsx` renders copied Moodle login/search forms that submit to `https://lmsstyle.com/theme/new-learning/...`.

**External Scripts:** `my-mln-learning-main/index.html` exposes `window.THREE` and `window.VANTA` globally for `my-mln-learning-main/src/components/home/MainContent.jsx` and `my-mln-learning-main/src/pages/Tuvipage.jsx`.

**External API:** `my-mln-learning-main/src/services/geminiService.js` calls Gemini from browser code through `@google/genai`; the API key is read in `my-mln-learning-main/src/pages/Tuvipage.jsx`.

---

*Architecture analysis: 2026-06-05*
