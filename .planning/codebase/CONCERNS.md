# Codebase Concerns

**Analysis Date:** 2026-06-05

## Tech Debt

**Subject conversion is content-first but content is spread across UI, data, assets, metadata, and prompts:**
- Issue: The app is named and branded as a Marxism-Leninism/philosophy learning app in multiple surfaces instead of having a single subject configuration.
- Files: `my-mln-learning-main/package.json`, `my-mln-learning-main/index.html`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/flipImagesData.js`
- Impact: A Ho Chi Minh Thought migration can leave stale page titles, cards, footer text, quiz questions, course details, and game images visible after partial edits.
- Fix approach: Create a subject audit checklist before editing source. Replace `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/data/coursesData.js`, and `my-mln-learning-main/src/data/flipImagesData.js` as owned content datasets, then sweep UI literals in `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`, and `my-mln-learning-main/index.html`.

**Large copied theme CSS hides layout and font behavior:**
- Issue: `my-mln-learning-main/src/styles/home/home.css` is 8,090 lines and includes copied theme classes, icon font definitions, accessibility widget styles, Moodle/body-class assumptions, and many fixed pixel/rem font declarations.
- Files: `my-mln-learning-main/src/styles/home/home.css`, `my-mln-learning-main/index.html`
- Impact: Small UI text changes for Vietnamese Ho Chi Minh Thought labels can unexpectedly overflow, inherit obsolete theme rules, or regress responsive layout.
- Fix approach: Prefer scoped component CSS for new work. When modifying home UI, inspect effective selectors in `my-mln-learning-main/src/styles/home/home.css` and verify desktop/mobile screenshots.

**Imperative jQuery game logic lives inside React rendering:**
- Issue: `my-mln-learning-main/src/pages/FlipCardPage.jsx` manipulates DOM state with jQuery classes, timers, and generated HTML strings instead of React state.
- Files: `my-mln-learning-main/src/pages/FlipCardPage.jsx`, `my-mln-learning-main/src/styles/flip/flip.css`, `my-mln-learning-main/src/data/flipImagesData.js`
- Impact: Changing flip-card images or card counts for Ho Chi Minh Thought content can break matching logic, cleanup, timers, or class-dependent CSS without React warnings.
- Fix approach: Keep image array changes conservative unless refactoring the game. If game behavior changes, replace generated DOM strings in `my-mln-learning-main/src/pages/FlipCardPage.jsx` with React-rendered card state and test all difficulty modes.

**Tuvi feature is unrelated to the learning subject and has its own domain model:**
- Issue: The `/tuvi` route is a complete astrology workflow with calculation utilities and an AI prompt unrelated to Marxism-Leninism or Ho Chi Minh Thought.
- Files: `my-mln-learning-main/src/App.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/utils/tuviCalculations.js`, `my-mln-learning-main/src/utils/lapDiaBan.js`, `my-mln-learning-main/src/utils/DiaBan.js`, `my-mln-learning-main/src/utils/Sao.js`, `my-mln-learning-main/src/styles/tuvi/TuviPage.css`, `my-mln-learning-main/src/services/geminiService.js`
- Impact: The app can present mixed educational and astrology experiences after migration, confusing product scope and increasing maintenance cost.
- Fix approach: Decide explicitly whether `/tuvi` remains. If removed, delete its route, page, utilities, styles, Gemini service usage, and home links together.

**Back buttons are duplicated and inconsistent:**
- Issue: Back/home controls are implemented separately with different labels, markup, and styles: `Back Home` in Tuvi, `Trang chủ` links in Courses/Flip, and button actions in Quiz Results.
- Files: `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/styles/tuvi/TuviPage.css`, `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/styles/courses/courses.css`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`, `my-mln-learning-main/src/styles/flip/flip.css`, `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- Impact: The conversion can update labels in one place while leaving English text or mismatched sizing in another; mobile rules hide text differently by page.
- Fix approach: Introduce one shared back/home component after the migration content is stable, or update all listed files in one coordinated pass and verify mobile breakpoints.

**Font sizing is inconsistent and mixed across inline styles, copied CSS, and Bootstrap classes:**
- Issue: Page-specific CSS and inline styles use fixed `px`, `rem`, large hero sizes, and Bootstrap utilities without a shared type scale.
- Files: `my-mln-learning-main/src/styles/home/home.css`, `my-mln-learning-main/src/styles/quiz/quiz.css`, `my-mln-learning-main/src/styles/flip/flip.css`, `my-mln-learning-main/src/styles/tuvi/TuviPage.css`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- Impact: Ho Chi Minh Thought Vietnamese copy is likely longer than existing labels, so card titles, buttons, result text, and mobile headers can clip or overlap.
- Fix approach: Before adding long copy, define page-level text constraints and test the longest expected Vietnamese labels at mobile widths.

## Known Bugs

**Root app may fail in static subpath deployments:**
- Symptoms: The app uses `BrowserRouter` without a basename and references public assets from root paths such as `/thIcon.jpg`.
- Files: `my-mln-learning-main/src/App.jsx`, `my-mln-learning-main/index.html`, `my-mln-learning-main/vite.config.js`
- Trigger: Deploying under a nested path such as `/HCM202-project/` or GitHub Pages without server-side history fallback.
- Workaround: Serve from domain root with history fallback, or configure Vite `base` and React Router basename before deployment.

**Vanta effects depend on CDN globals rather than module imports:**
- Symptoms: Home and Tuvi visual effects depend on `window.VANTA` from scripts in `index.html`.
- Files: `my-mln-learning-main/index.html`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`
- Trigger: Offline use, blocked CDN, CSP restrictions, or a breaking `vanta@latest` release.
- Workaround: Pin Vanta script versions or replace CDN globals with npm-managed imports.

**Gemini feature throws user-facing errors when env configuration is missing:**
- Symptoms: Tuvi AI analysis throws `API key chưa được cấu hình` when `VITE_GEMINI_API_KEY` is absent.
- Files: `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/services/geminiService.js`, `my-mln-learning-main/.gitignore`
- Trigger: Running the app without a local `.env` file containing `VITE_GEMINI_API_KEY`.
- Workaround: Hide or disable AI analysis when the key is missing, or remove the feature with `/tuvi`.

## Security Considerations

**Client-side Gemini API key exposure:**
- Risk: `VITE_GEMINI_API_KEY` is necessarily exposed in the browser bundle if configured for the Vite client.
- Files: `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/services/geminiService.js`
- Current mitigation: `.env`, `.env.local`, and `.env.production` are ignored in `my-mln-learning-main/.gitignore`; no env file was detected during mapping.
- Recommendations: Do not put unrestricted API keys in Vite client code. Proxy Gemini calls through a backend or remove the feature if it is outside the Ho Chi Minh Thought learning scope.

**Remote images and CDN scripts expand trust surface:**
- Risk: The app loads many third-party images and scripts/styles at runtime.
- Files: `my-mln-learning-main/index.html`, `my-mln-learning-main/src/data/flipImagesData.js`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/styles/flip/flip.css`, `my-mln-learning-main/src/styles/tuvi/TuviPage.css`, `my-mln-learning-main/src/styles/home/home.css`
- Current mitigation: Not detected.
- Recommendations: Replace hotlinked subject images with committed or licensed local assets in `my-mln-learning-main/public/` or `my-mln-learning-main/src/assets/`; pin CDN versions and add a content security policy for production.

**Debug logging can expose prompts, API responses, and runtime state:**
- Risk: Gemini responses and status details are logged in the browser console.
- Files: `my-mln-learning-main/src/services/geminiService.js`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/components/home/MainContent.jsx`
- Current mitigation: Not detected.
- Recommendations: Remove debug logs before production and avoid logging AI prompts/responses or service objects.

## Performance Bottlenecks

**Large CSS and image-heavy home page:**
- Problem: The home page imports an 8,090-line stylesheet and references multiple remote LMS-style images.
- Files: `my-mln-learning-main/src/styles/home/home.css`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Header.jsx`
- Cause: Copied theme CSS and remote assets are loaded for a small app surface.
- Improvement path: Prune unused CSS after migration, localize required images, and keep new Ho Chi Minh Thought components scoped.

**External image hotlinks can slow or break the flip game:**
- Problem: Flip-card images are loaded from many unrelated external domains.
- Files: `my-mln-learning-main/src/data/flipImagesData.js`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`
- Cause: Image URLs are not optimized, bundled, cached, or controlled by the app.
- Improvement path: Replace with local optimized images and keep dimensions consistent so cards do not layout shift.

**Vanta/Three effects load on user-facing pages:**
- Problem: `three.js` and Vanta scripts are loaded globally in `index.html`, even if only specific pages need them.
- Files: `my-mln-learning-main/index.html`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/pages/Tuvipage.jsx`
- Cause: Global CDN scripts are included at document load.
- Improvement path: Lazy-load effects per route or remove them from pages where subject learning content should be primary.

## Fragile Areas

**Course data migration:**
- Files: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`
- Why fragile: Course records contain nested Vietnamese strings and `mindmap_url` values that map to public images by filename.
- Safe modification: Replace complete course objects with Ho Chi Minh Thought topics and keep `id`, `tieu_de`, `cau_noi_hay`, `mindmap_url`, and `cac_van_de` shape stable unless `my-mln-learning-main/src/pages/Courses.jsx` is updated too.
- Test coverage: Not detected.

**Quiz data migration:**
- Files: `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/pages/QuizPage.jsx`, `my-mln-learning-main/src/pages/QuizResultsPage.jsx`
- Why fragile: `correctAnswer` is index-based, so answer reordering during content replacement can silently mark correct choices wrong.
- Safe modification: Update each question as a complete unit and verify `correctAnswer` points to the intended option after every content batch.
- Test coverage: Not detected.

**Home page copy and CTA links:**
- Files: `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`, `my-mln-learning-main/src/hooks/home/useAnimations.js`
- Why fragile: `MainContent.jsx` is 1,015 lines and mixes copy, layout, links, images, animation hooks, and Vanta initialization assumptions.
- Safe modification: Search for all subject strings in `my-mln-learning-main/src/components/home/` and update in small sections while checking route links to `/quiz`, `/courses`, `/flip`, and `/tuvi`.
- Test coverage: Not detected.

**Image replacement across public, src assets, and remote URLs:**
- Files: `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`, `my-mln-learning-main/public/thIcon.jpg`, `my-mln-learning-main/src/assets/images/`, `my-mln-learning-main/src/data/flipImagesData.js`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/pages/QuizPage.jsx`
- Why fragile: Images are referenced through imports, public-root names, CSS URLs, remote URLs, and `data-src`/`data-bg` attributes.
- Safe modification: Build an asset inventory before replacing images. Preserve file paths when doing drop-in replacements, or update every reference found by `rg` for the filename.
- Test coverage: Not detected.

**Nested app root and git state:**
- Files: `my-mln-learning-main/package.json`, `my-mln-learning-main/package-lock.json`, `my-mln-learning-main/vite.config.js`, `.planning/codebase/CONCERNS.md`
- Why fragile: The git repository root is `e:\Desktop\HCM202-project`, but the Vite app root is `my-mln-learning-main/`; current git status shows no commits and `my-mln-learning-main/` untracked.
- Safe modification: Run npm commands from `my-mln-learning-main/`, but run repository-level git and planning commands from `e:\Desktop\HCM202-project`. Decide whether `my-mln-learning-main/` remains nested before configuring CI/deploy paths.
- Test coverage: Not detected.

## Scaling Limits

**Static data files as primary content store:**
- Current capacity: `my-mln-learning-main/src/data/quizData.js` has 1,678 lines and `my-mln-learning-main/src/data/coursesData.js` has 410 lines.
- Limit: Large Ho Chi Minh Thought curricula will increase bundle size and make editorial review difficult because content, schema, and code are mixed.
- Scaling path: Keep the current JS arrays for the immediate migration, but consider structured JSON/MD content with validation if curriculum volume grows.

**No automated tests for migration correctness:**
- Current capacity: Manual verification only.
- Limit: Stale Marxism-Leninism strings, wrong quiz answers, broken images, and route regressions can ship unnoticed.
- Scaling path: Add at least smoke tests for route rendering and data integrity checks for `my-mln-learning-main/src/data/quizData.js` and `my-mln-learning-main/src/data/coursesData.js`.

## Dependencies at Risk

**Unpinned CDN dependency `vanta@latest`:**
- Risk: Runtime behavior can change without lockfile control.
- Impact: Home or Tuvi background effects can break independently of npm lockfile state.
- Migration plan: Pin exact CDN versions in `my-mln-learning-main/index.html` or replace with npm-managed dependencies.

**Redundant icon/font dependencies:**
- Risk: Font Awesome is loaded through npm and multiple CDN versions; Bootstrap Icons and Remix Icon are also loaded through CDN/CSS.
- Impact: Larger downloads, selector collisions, inconsistent icon rendering, and harder cleanup during redesign.
- Migration plan: Choose one icon strategy and remove duplicate `<link>` entries from `my-mln-learning-main/index.html` and unused package imports from `my-mln-learning-main/src/main.jsx`.

**Likely hidden LMS/theme dependencies:**
- Risk: `my-mln-learning-main/index.html` body classes, `my-mln-learning-main/src/styles/home/home.css`, and remote `lmsstyle.com` assets suggest copied Moodle/LMS theme code with implicit class and asset assumptions.
- Impact: Removing or renaming wrapper classes during migration can affect many unrelated selectors; remote LMS assets may disappear.
- Migration plan: Treat the home page theme as legacy. Replace high-value sections with simpler React/CSS components over time instead of deeply editing copied selectors.

**React 19 and React Router 7 versions:**
- Risk: The app uses current major versions while also using older imperative patterns and jQuery.
- Impact: Third-party dependencies or copied snippets may not fully support the installed React/Router versions.
- Migration plan: Keep dependency upgrades out of the subject migration unless required. If behavior changes, isolate whether it comes from content edits or framework/library compatibility.

## Missing Critical Features

**No central subject model or content validation:**
- Problem: The app has no schema ensuring Ho Chi Minh Thought data replaces all Marxism-Leninism content.
- Blocks: Reliable migration signoff, automated stale-string checks, and safe quiz editing.

**No route-level not-found handling:**
- Problem: The catch-all route is commented out.
- Files: `my-mln-learning-main/src/App.jsx`
- Blocks: Clean handling of stale shared links or renamed routes during the migration.

**No documented environment setup for Gemini or deployment:**
- Problem: README remains the default Vite template and does not document `VITE_GEMINI_API_KEY`, nested app root, or deploy assumptions.
- Files: `my-mln-learning-main/README.md`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/services/geminiService.js`
- Blocks: Reproducible setup for future agents and users.

## Test Coverage Gaps

**Subject string regression checks:**
- What's not tested: Whether Marxism-Leninism/philosophy/Tuvi strings remain after Ho Chi Minh Thought conversion.
- Files: `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/src/components/home/Footer.jsx`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/flipImagesData.js`, `my-mln-learning-main/index.html`
- Risk: Stale subject content ships in hidden UI sections or game images.
- Priority: High

**Quiz answer integrity:**
- What's not tested: `correctAnswer` index validity and whether every question has a correct option.
- Files: `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/pages/QuizPage.jsx`
- Risk: Users receive wrong scoring after content edits.
- Priority: High

**Image availability and licensing:**
- What's not tested: Whether remote images load, are appropriate for Ho Chi Minh Thought, or are licensed for use.
- Files: `my-mln-learning-main/src/data/flipImagesData.js`, `my-mln-learning-main/src/components/home/MainContent.jsx`, `my-mln-learning-main/public/`
- Risk: Broken visuals, irrelevant imagery, or unauthorized hotlinking.
- Priority: High

**Responsive navigation/back controls:**
- What's not tested: Mobile behavior for duplicated back buttons and long Vietnamese labels.
- Files: `my-mln-learning-main/src/pages/Tuvipage.jsx`, `my-mln-learning-main/src/pages/Courses.jsx`, `my-mln-learning-main/src/pages/FlipCardPage.jsx`, `my-mln-learning-main/src/pages/QuizResultsPage.jsx`, `my-mln-learning-main/src/styles/tuvi/TuviPage.css`, `my-mln-learning-main/src/styles/courses/courses.css`, `my-mln-learning-main/src/styles/flip/flip.css`
- Risk: Inconsistent or clipped navigation after copy replacement.
- Priority: Medium

**Build and lint baseline:**
- What's not tested: Whether the current app builds/lints cleanly before migration.
- Files: `my-mln-learning-main/package.json`, `my-mln-learning-main/eslint.config.js`, `my-mln-learning-main/vite.config.js`
- Risk: Migration changes become harder to separate from existing build or lint failures.
- Priority: Medium

---

*Concerns audit: 2026-06-05*
