# Codebase Structure

**Analysis Date:** 2026-06-05

## Directory Layout

```text
HCM202-project/
├── .planning/                         # GSD planning artifacts and codebase maps
└── my-mln-learning-main/              # React/Vite app root
    ├── index.html                     # Browser HTML shell, title, favicon, CDN scripts/styles
    ├── package.json                   # npm scripts and dependency declarations
    ├── package-lock.json              # npm lockfile
    ├── vite.config.js                 # Vite config and /theme proxy to lmsstyle.com
    ├── eslint.config.js               # ESLint flat config
    ├── public/                        # Vite public assets served by root URL
    │   ├── thIcon.jpg                 # Favicon used by index.html
    │   ├── chu-de-1.jpg               # Course mind map image
    │   ├── chu-de-2.jpg               # Course mind map image
    │   └── chu-de-3.jpg               # Course mind map image
    └── src/
        ├── main.jsx                   # React mount and global vendor CSS imports
        ├── App.jsx                    # React Router route registry
        ├── assets/                    # Bundled images and fonts imported by JS/CSS
        ├── components/                # Reusable/section components
        ├── data/                      # Static learning, quiz, and game data
        ├── hooks/                     # DOM animation hooks
        ├── layouts/                   # Route layout wrappers and shared route CSS imports
        ├── pages/                     # Route-level page components
        ├── services/                  # External API adapter(s)
        ├── styles/                    # Feature CSS files
        └── utils/                     # Pure/domain utility modules
```

## Directory Purposes

**`my-mln-learning-main/`:**
- Purpose: Owns the runnable React/Vite app.
- Contains: package metadata, Vite config, HTML shell, public assets, and `src/`.
- Key files: `my-mln-learning-main/package.json`, `my-mln-learning-main/index.html`, `my-mln-learning-main/vite.config.js`.

**`my-mln-learning-main/public/`:**
- Purpose: Store static files served from the site root without import processing.
- Contains: favicon and course mind-map JPEGs.
- Key files: `my-mln-learning-main/public/thIcon.jpg`, `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`.

**`my-mln-learning-main/src/`:**
- Purpose: Store all React source, data, styles, services, and utility logic.
- Contains: `main.jsx`, `App.jsx`, and feature folders.
- Key files: `my-mln-learning-main/src/main.jsx`, `my-mln-learning-main/src/App.jsx`.

**`my-mln-learning-main/src/assets/`:**
- Purpose: Store images/fonts bundled through Vite imports or CSS `url(...)`.
- Contains: `images/` and `fonts/`.
- Key files: `my-mln-learning-main/src/assets/images/logo/logo.png`, `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg`, `my-mln-learning-main/src/assets/images/makdahome.png`, `my-mln-learning-main/src/assets/images/thu-ha.png`, `my-mln-learning-main/src/assets/fonts/flip/general_foundicons.woff`.

**`my-mln-learning-main/src/components/`:**
- Purpose: Store non-route React components used by pages.
- Contains: Currently only the home component group.
- Key files: `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`.

**`my-mln-learning-main/src/components/home/`:**
- Purpose: Split the home route into header, content, and footer sections.
- Contains: Large Moodle-style markup and TAHA/current project identity text.
- Key files: `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`.

**`my-mln-learning-main/src/data/`:**
- Purpose: Store static content datasets used by route pages.
- Contains: course topic data, quiz question bank, and flip-game image URLs.
- Key files: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/data/flipImagesData.js`.

**`my-mln-learning-main/src/hooks/`:**
- Purpose: Store reusable React hooks.
- Contains: Home-specific DOM effect hooks.
- Key files: `my-mln-learning-main/src/hooks/home/useAnimations.js`.

**`my-mln-learning-main/src/layouts/`:**
- Purpose: Store route layout wrappers and shared route-family CSS imports.
- Contains: `HomeLayout.jsx` and `QuizLayout.jsx`.
- Key files: `my-mln-learning-main/src/layouts/HomeLayout.jsx`, `my-mln-learning-main/src/layouts/QuizLayout.jsx`.

**`my-mln-learning-main/src/pages/`:**
- Purpose: Store route-level React components.
- Contains: home, courses, quiz, results, flip game, and tu vi pages.
- Key files: `my-mln-learning-main/src/pages/HomePage.jsx`, `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/QuizPage.jsx`, `my-mln-learning-main/src/pages/QuizResultsPage.jsx`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`.

**`my-mln-learning-main/src/services/`:**
- Purpose: Store external-service adapters.
- Contains: Gemini wrapper.
- Key files: `my-mln-learning-main/src/services/geminiService.js`.

**`my-mln-learning-main/src/styles/`:**
- Purpose: Store feature CSS files imported by layouts/pages.
- Contains: `home/`, `quiz/`, `courses/`, `flip/`, and `tuvi/`.
- Key files: `my-mln-learning-main/src/styles/home/home.css`, `my-mln-learning-main/src/styles/quiz/quiz.css`, `my-mln-learning-main/src/styles/courses/courses.css`, `my-mln-learning-main/src/styles/flip/flip.css`, `my-mln-learning-main/src/styles/tuvi/TuviPage.css`.

**`my-mln-learning-main/src/utils/`:**
- Purpose: Store domain utility modules for tu vi chart calculations.
- Contains: lunar calendar calculations, star definitions, house model, chart assembly.
- Key files: `my-mln-learning-main/src/utils/tuviCalculations.js`, `my-mln-learning-main/src/utils/Sao.js`, `my-mln-learning-main/src/utils/DiaBan.js`, `my-mln-learning-main/src/utils/lapDiaBan.js`.

## Key File Locations

**Entry Points:**
- `my-mln-learning-main/index.html`: HTML shell, metadata, favicon, root div, and external scripts/styles.
- `my-mln-learning-main/src/main.jsx`: React entry, global vendor CSS imports, and root mount.
- `my-mln-learning-main/src/App.jsx`: Route registry for all pages.

**Routes and Layouts:**
- `my-mln-learning-main/src/App.jsx`: Add or change routes here.
- `my-mln-learning-main/src/layouts/HomeLayout.jsx`: Home route layout and home CSS import.
- `my-mln-learning-main/src/layouts/QuizLayout.jsx`: Quiz route layout and quiz CSS import.

**Pages:**
- `my-mln-learning-main/src/pages/HomePage.jsx`: Home route composition and animation hook usage.
- `my-mln-learning-main/src/pages/Courses.jsx`: Course-topic selector, topic details, quote, and mind-map rendering.
- `my-mln-learning-main/src/pages/QuizPage.jsx`: Quiz configuration, question selection, timer, answer tracking, and submit navigation.
- `my-mln-learning-main/src/pages/QuizResultsPage.jsx`: Quiz score display and restart/home navigation.
- `my-mln-learning-main/src/pages/FlipCardPage.jsx`: jQuery memory game and localStorage stats.
- `my-mln-learning-main/src/pages/Tuvipage.jsx`: Tu vi form/chart/AI interpretation page.

**Components:**
- `my-mln-learning-main/src/components/home/Header.jsx`: Header, mobile menu state, login/search modals, logo images, Moodle links.
- `my-mln-learning-main/src/components/home/MainContent.jsx`: Home landing/course content, Vanta birds effect, main call-to-action links.
- `my-mln-learning-main/src/components/home/Footer.jsx`: Footer identity, contact info, social link, copyright.

**Static Content:**
- `my-mln-learning-main/src/data/coursesData.js`: Course topic titles, issue lists, quotes, and public mind-map filenames.
- `my-mln-learning-main/src/data/quizData.js`: Quiz question bank with chapters, difficulty, options, and correct answers.
- `my-mln-learning-main/src/data/flipImagesData.js`: Remote image URLs for memory game cards.

**Images and Fonts:**
- `my-mln-learning-main/public/thIcon.jpg`: Site favicon.
- `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`: Course mind maps referenced by `coursesData.js`.
- `my-mln-learning-main/src/assets/images/logo/logo.png`: Quiz logo import.
- `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg`: Header logo import.
- `my-mln-learning-main/src/assets/images/background/bg.png`, `my-mln-learning-main/src/assets/images/background/bg_0.png`: Quiz CSS/page backgrounds.
- `my-mln-learning-main/src/assets/images/clock/clock.png`: Quiz timer image.
- `my-mln-learning-main/src/assets/images/flip/`: Flip game CSS images.
- `my-mln-learning-main/src/assets/fonts/flip/`: Flip game icon font files.

**CSS:**
- `my-mln-learning-main/src/styles/home/home.css`: Large Moodle-derived global/home stylesheet.
- `my-mln-learning-main/src/styles/quiz/quiz.css`: Quiz route stylesheet.
- `my-mln-learning-main/src/styles/courses/courses.css`: Courses page stylesheet scoped around `.triet-hoc-wrapper`.
- `my-mln-learning-main/src/styles/flip/flip.css`: Flip game stylesheet scoped around `.flip-game-container`.
- `my-mln-learning-main/src/styles/tuvi/TuviPage.css`: Tu vi stylesheet scoped around `.tuvi-container-wrapper`.

**Configuration:**
- `my-mln-learning-main/package.json`: npm scripts and dependencies.
- `my-mln-learning-main/package-lock.json`: locked dependency graph.
- `my-mln-learning-main/vite.config.js`: Vite React plugin and `/theme` proxy.
- `my-mln-learning-main/eslint.config.js`: ESLint setup.
- `my-mln-learning-main/.gitignore`: ignored local/build files.

**Core Logic:**
- `my-mln-learning-main/src/utils/lapDiaBan.js`: Builds the astrology chart object.
- `my-mln-learning-main/src/utils/tuviCalculations.js`: Lunar calendar and helper calculations.
- `my-mln-learning-main/src/utils/DiaBan.js`: House/chart classes.
- `my-mln-learning-main/src/utils/Sao.js`: Star class and star constants.
- `my-mln-learning-main/src/services/geminiService.js`: Gemini service wrapper.

**Testing:**
- Not detected. No test files or test config were observed under `my-mln-learning-main/`.

## Naming Conventions

**Files:**
- React route/page components use PascalCase filenames: `my-mln-learning-main/src/pages/QuizPage.jsx`, `my-mln-learning-main/src/pages/QuizResultsPage.jsx`, `my-mln-learning-main/src/pages/Courses.jsx`.
- Layout components use PascalCase filenames ending in `Layout`: `my-mln-learning-main/src/layouts/HomeLayout.jsx`, `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Home section components use PascalCase filenames: `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`.
- Data modules use camelCase names ending in `Data` where applicable: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/data/flipImagesData.js`.
- Utility modules are mixed: PascalCase class/domain files `my-mln-learning-main/src/utils/Sao.js`, `my-mln-learning-main/src/utils/DiaBan.js`; camelCase calculation files `my-mln-learning-main/src/utils/tuviCalculations.js`, `my-mln-learning-main/src/utils/lapDiaBan.js`.
- CSS files are feature-named lowercase except `my-mln-learning-main/src/styles/tuvi/TuviPage.css`, which matches the page component name.

**Directories:**
- Feature directories under `src/styles/`, `src/components/`, and `src/hooks/` are lowercase: `my-mln-learning-main/src/styles/quiz/`, `my-mln-learning-main/src/styles/flip/`, `my-mln-learning-main/src/components/home/`.
- Top-level app folders are conventional lowercase plurals: `my-mln-learning-main/src/pages/`, `my-mln-learning-main/src/layouts/`, `my-mln-learning-main/src/services/`, `my-mln-learning-main/src/utils/`, `my-mln-learning-main/src/data/`.

## Routes and Where to Put Route Code

**Home Route `/`:**
- Route declaration: `my-mln-learning-main/src/App.jsx`.
- Layout: `my-mln-learning-main/src/layouts/HomeLayout.jsx`.
- Page shell: `my-mln-learning-main/src/pages/HomePage.jsx`.
- Sections: `my-mln-learning-main/src/components/home/`.
- CSS: `my-mln-learning-main/src/styles/home/home.css`.
- Identity copy: update `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`, and `my-mln-learning-main/index.html`.

**Courses Route `/courses`:**
- Route declaration: `my-mln-learning-main/src/App.jsx`.
- Page: `my-mln-learning-main/src/pages/Courses.jsx`.
- Data: `my-mln-learning-main/src/data/coursesData.js`.
- CSS: `my-mln-learning-main/src/styles/courses/courses.css`.
- Public images: `my-mln-learning-main/public/`.

**Quiz Routes `/quiz` and `/quiz/results`:**
- Route declaration: `my-mln-learning-main/src/App.jsx`.
- Layout: `my-mln-learning-main/src/layouts/QuizLayout.jsx`.
- Quiz page: `my-mln-learning-main/src/pages/QuizPage.jsx`.
- Results page: `my-mln-learning-main/src/pages/QuizResultsPage.jsx`.
- Data: `my-mln-learning-main/src/data/quizData.js`.
- CSS: `my-mln-learning-main/src/styles/quiz/quiz.css` and inline styles in `QuizResultsPage.jsx`.
- Assets: `my-mln-learning-main/src/assets/images/logo/logo.png`, `my-mln-learning-main/src/assets/images/background/`, `my-mln-learning-main/src/assets/images/clock/clock.png`.

**Flip Route `/flip`:**
- Route declaration: `my-mln-learning-main/src/App.jsx`.
- Page: `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- Data: `my-mln-learning-main/src/data/flipImagesData.js`.
- CSS: `my-mln-learning-main/src/styles/flip/flip.css`.
- Assets: `my-mln-learning-main/src/assets/images/flip/`, `my-mln-learning-main/src/assets/fonts/flip/`.

**Tu Vi Route `/tuvi`:**
- Route declaration: `my-mln-learning-main/src/App.jsx`.
- Page: `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Service: `my-mln-learning-main/src/services/geminiService.js`.
- Utilities: `my-mln-learning-main/src/utils/`.
- CSS: `my-mln-learning-main/src/styles/tuvi/TuviPage.css`.

## Where to Add New Code

**New Ho Chi Minh Thought Learning Content:**
- Primary static course topics: `my-mln-learning-main/src/data/coursesData.js`.
- Quiz question bank: `my-mln-learning-main/src/data/quizData.js`.
- Flip/card image list: `my-mln-learning-main/src/data/flipImagesData.js`.
- Public mind-map images: `my-mln-learning-main/public/`.
- Homepage copy and calls to action: `my-mln-learning-main/src/components/home/MainContent.jsx`.
- Metadata/title/favicon: `my-mln-learning-main/index.html` and `my-mln-learning-main/public/thIcon.jpg`.

**New Route / Page:**
- Add route import and `<Route>` in `my-mln-learning-main/src/App.jsx`.
- Add route-level component in `my-mln-learning-main/src/pages/`.
- Add a new layout in `my-mln-learning-main/src/layouts/` only when multiple routes share wrappers or CSS.
- Add page CSS under `my-mln-learning-main/src/styles/<feature>/` and import it from the standalone page or shared layout.
- Use a unique wrapper class in the page root to constrain styles.

**New Home Section Component:**
- Implementation: `my-mln-learning-main/src/components/home/`.
- Wire into: `my-mln-learning-main/src/pages/HomePage.jsx` or `my-mln-learning-main/src/components/home/MainContent.jsx`, depending on whether the section is a top-level home section or part of the existing long content block.
- CSS: `my-mln-learning-main/src/styles/home/home.css`, with caution because the file is broad/global.

**New Course/Quiz Data Module:**
- Implementation: `my-mln-learning-main/src/data/`.
- Import into the relevant route page in `my-mln-learning-main/src/pages/`.
- Keep data as exported constants, matching `coursesData`, `quizQuestions`, and `flipImages`.

**New External API Integration:**
- Service wrapper: `my-mln-learning-main/src/services/`.
- Environment access: read Vite variables as `import.meta.env.VITE_*` in the route/page or a small config module.
- Caller: page component under `my-mln-learning-main/src/pages/`.
- Avoid placing API call logic directly in `my-mln-learning-main/src/components/home/` unless the integration is home-only UI behavior.

**New Shared Utilities:**
- Shared helpers: `my-mln-learning-main/src/utils/`.
- Use named exports for utility functions/classes, matching `my-mln-learning-main/src/utils/tuviCalculations.js`, `my-mln-learning-main/src/utils/DiaBan.js`, and `my-mln-learning-main/src/utils/Sao.js`.

**New Images:**
- Use `my-mln-learning-main/src/assets/images/` when importing the image from React or CSS.
- Use `my-mln-learning-main/public/` when storing filenames that are referenced directly by data strings, as `coursesData.mindmap_url` does.
- Keep large page-specific image folders under `my-mln-learning-main/src/assets/images/<feature>/` when CSS or JS imports them.

## CSS Boundary Guidance

**Shared Route CSS:**
- Use a layout import for route families: `my-mln-learning-main/src/layouts/QuizLayout.jsx` imports `my-mln-learning-main/src/styles/quiz/quiz.css`.
- Use this pattern for future multi-page feature groups.

**Standalone Page CSS:**
- Import CSS directly in the page for independent routes: `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`, and `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- Keep CSS selectors under a route wrapper: `.triet-hoc-wrapper`, `.flip-game-container`, `.tuvi-container-wrapper`.

**Home CSS:**
- Treat `my-mln-learning-main/src/styles/home/home.css` as legacy/theme CSS with global side effects.
- Place new homepage-specific selectors behind existing home wrappers where possible.
- Avoid adding broad `body`, `:root`, `.card`, `.modal`, or generic Bootstrap selector overrides here unless the intent is app-wide.

**Inline Styles:**
- Existing pages use inline styles heavily in `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`, and `my-mln-learning-main/src/components/home/MainContent.jsx`.
- New feature CSS should prefer stylesheet rules when styles are reused or identity-themed, and reserve inline style for one-off calculated values.

## Project Identity Search Targets

**Rename / Retheme Current Marxism-Leninism Project:**
- `my-mln-learning-main/package.json`: package name `my-mln-learning`.
- `my-mln-learning-main/index.html`: title `TAHA - Triết học và đời sống`, favicon `/thIcon.jpg`, Moodle/New Learning body classes.
- `my-mln-learning-main/src/components/home/MainContent.jsx`: homepage text including `Khám phá Triết học Mác - Lênin`, Karl Marx quote, and feature descriptions.
- `my-mln-learning-main/src/components/home/Footer.jsx`: TAHA brand, team/contact text, copyright text.
- `my-mln-learning-main/src/pages/Courses.jsx`: header/subtitle text for course learning area.
- `my-mln-learning-main/src/data/coursesData.js`: course titles, problem statements, quotes, detailed lesson content, and mind-map filename references.
- `my-mln-learning-main/src/data/quizData.js`: quiz chapters/questions/options/answers.
- `my-mln-learning-main/src/data/flipImagesData.js`: card imagery URLs.
- `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`: mind-map images tied to current subjects.
- `my-mln-learning-main/src/assets/images/logo/`, `my-mln-learning-main/src/assets/images/makdahome.png`, `my-mln-learning-main/src/assets/images/thu-ha.png`: branding/home visuals.

**External Template Artifacts:**
- `my-mln-learning-main/src/components/home/Header.jsx`: `New Learning | Premium Moodle Theme` text and external Moodle login/search URLs.
- `my-mln-learning-main/src/components/home/MainContent.jsx`: external `lmsstyle.com` demo images and course links.
- `my-mln-learning-main/src/styles/home/home.css`: Moodle/New Learning CSS variables, classes, font URLs, and `/theme/new-learning/...` references.
- `my-mln-learning-main/vite.config.js`: `/theme` proxy to `https://lmsstyle.com`.

## Special Directories

**`.planning/`:**
- Purpose: GSD project planning and codebase analysis artifacts.
- Generated: Yes
- Committed: Project-dependent; files are intended planning artifacts.

**`my-mln-learning-main/public/`:**
- Purpose: Vite public assets served without import transformation.
- Generated: No
- Committed: Yes

**`my-mln-learning-main/src/assets/`:**
- Purpose: Bundled static assets referenced by JS/CSS imports.
- Generated: No
- Committed: Yes

**`my-mln-learning-main/src/styles/home/`:**
- Purpose: Legacy Moodle-style home/theme CSS.
- Generated: No
- Committed: Yes

**`my-mln-learning-main/src/assets/fonts/flip/`:**
- Purpose: Flip game icon font files used by `my-mln-learning-main/src/styles/flip/flip.css`.
- Generated: No
- Committed: Yes

---

*Structure analysis: 2026-06-05*
