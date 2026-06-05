# Technology Stack

**Analysis Date:** 2026-06-05

## Languages

**Primary:**
- JavaScript ES modules - React source uses `.jsx` and `.js` files under `my-mln-learning-main/src/`.
- JSX - UI pages, layouts, and components live in `my-mln-learning-main/src/App.jsx`, `my-mln-learning-main/src/pages/`, `my-mln-learning-main/src/layouts/`, and `my-mln-learning-main/src/components/`.
- CSS - Feature styles live in `my-mln-learning-main/src/styles/`; `my-mln-learning-main/src/styles/home/home.css` includes a large imported Moodle/New Learning theme stylesheet surface.

**Secondary:**
- HTML - Vite shell and CDN assets are declared in `my-mln-learning-main/index.html`.
- JSON - npm metadata and lockfile are in `my-mln-learning-main/package.json` and `my-mln-learning-main/package-lock.json`.

## Runtime

**Environment:**
- Browser-only single page application. `my-mln-learning-main/src/main.jsx` mounts React into `#root` from `my-mln-learning-main/index.html`.
- Node.js is required for local development/build. Vite 7 is used in `my-mln-learning-main/package.json`; use a modern Node runtime compatible with Vite 7 rather than relying on an older Node installation.
- The app assumes browser globals for CDN scripts: `window.VANTA` is used in `my-mln-learning-main/src/components/home/MainContent.jsx` and `my-mln-learning-main/src/pages/Tuvipage.jsx`.

**Package Manager:**
- npm, inferred from `my-mln-learning-main/package-lock.json`.
- Lockfile: present at `my-mln-learning-main/package-lock.json`.
- Package name: `my-mln-learning` in `my-mln-learning-main/package.json`; rename this when converting the project identity.

## Frameworks

**Core:**
- React `^19.2.0` - UI framework, entry in `my-mln-learning-main/src/main.jsx`.
- React DOM `^19.2.0` - browser rendering via `createRoot` in `my-mln-learning-main/src/main.jsx`.
- React Router DOM `^7.13.0` - client routing in `my-mln-learning-main/src/App.jsx`.
- Vite `^7.2.4` - dev server and production build configured by `my-mln-learning-main/vite.config.js`.

**Testing:**
- Not detected. There is no test script in `my-mln-learning-main/package.json`, and no Jest/Vitest config was detected during stack mapping.

**Build/Dev:**
- `@vitejs/plugin-react` `^5.1.1` - Vite React plugin in `my-mln-learning-main/vite.config.js`.
- ESLint `^9.39.1` - lint command in `my-mln-learning-main/package.json`; flat config in `my-mln-learning-main/eslint.config.js`.
- `eslint-plugin-react-hooks` `^7.0.1` and `eslint-plugin-react-refresh` `^0.4.24` - React-specific lint rules in `my-mln-learning-main/eslint.config.js`.

## Key Dependencies

**Critical:**
- `@google/genai` `^1.39.0` - Gemini client used by `my-mln-learning-main/src/services/geminiService.js` and initialized from `VITE_GEMINI_API_KEY` in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- `react-router-dom` `^7.13.0` - route ownership for `/`, `/quiz`, `/quiz/results`, `/flip`, `/tuvi`, and `/courses` in `my-mln-learning-main/src/App.jsx`.
- `bootstrap` `^5.3.8` and `react-bootstrap` `^2.10.10` - Bootstrap CSS imported in `my-mln-learning-main/src/main.jsx`; Bootstrap class names are used throughout pages such as `my-mln-learning-main/src/pages/Courses.jsx`.
- `jquery` `^4.0.0` - imperative flip-card game logic in `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- `react-medium-image-zoom` `^5.4.0` - mindmap image zoom in `my-mln-learning-main/src/pages/Courses.jsx`.

**Infrastructure:**
- `@fortawesome/fontawesome-free`, `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/react-fontawesome` - icon/font assets; CSS import in `my-mln-learning-main/src/main.jsx` plus CDN Font Awesome links in `my-mln-learning-main/index.html`.
- `bootstrap-icons` `^1.13.1` - icon classes in pages such as `my-mln-learning-main/src/pages/Courses.jsx`; also loaded from CDN in `my-mln-learning-main/index.html`.
- `animate.css` `^4.1.1` - global animation CSS import in `my-mln-learning-main/src/main.jsx`.
- `swiper` `^12.0.3`, `react-select` `^5.10.2`, `html2canvas` `^1.4.1`, `jsrender` `^1.0.16`, `zebra_tooltips` `^2.4.1` - installed dependencies in `my-mln-learning-main/package.json`; not detected in active imports during this mapping pass.
- `dotenv-webpack` `^8.1.1` - listed as a dev dependency in `my-mln-learning-main/package.json`, but Vite uses `import.meta.env`; no Webpack config was detected.

## Configuration

**Environment:**
- Vite environment variables are read through `import.meta.env`. The only detected app env variable is `VITE_GEMINI_API_KEY` in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
- No `.env*` files were detected in `my-mln-learning-main/` during mapping.
- Do not put non-`VITE_` variables in client code. Vite only exposes variables with the `VITE_` prefix, and exposed keys are bundled into browser-delivered code.

**Build:**
- `my-mln-learning-main/package.json` scripts:
  - `npm run dev` -> `vite`
  - `npm run build` -> `vite build`
  - `npm run lint` -> `eslint .`
  - `npm run preview` -> `vite preview`
- `my-mln-learning-main/vite.config.js` enables the React plugin and a dev proxy from `/theme` to `https://lmsstyle.com`.
- `my-mln-learning-main/eslint.config.js` applies ESLint flat config to `**/*.{js,jsx}` and ignores `dist`.
- `my-mln-learning-main/index.html` loads public favicon `/thIcon.jpg`, Google Fonts, Font Awesome, Bootstrap Icons, Remix Icon, Three.js, and Vanta.js from CDNs.

## Platform Requirements

**Development:**
- Run commands from `my-mln-learning-main/`, not the repository root.
- Install with `npm install` using `my-mln-learning-main/package-lock.json`.
- Use `npm run dev` for local development. The Vite dev server proxy only applies in development; production builds still reference absolute external URLs.
- Provide `VITE_GEMINI_API_KEY` only if the `/tuvi` AI interpretation feature must call Gemini.

**Production:**
- Static SPA output is produced by `npm run build` into Vite's default `my-mln-learning-main/dist/`.
- Host as a static site with SPA fallback for React Router routes such as `/quiz`, `/flip`, `/tuvi`, and `/courses`.
- Production requires outbound browser access to configured CDNs, hotlinked image hosts, `lmsstyle.com` assets/forms, and Gemini if the AI feature is enabled.

## Content Conversion Risks

**Rename/retheme surfaces:**
- Package/app identity: `my-mln-learning-main/package.json`, `my-mln-learning-main/index.html`.
- Browser title and favicon: `my-mln-learning-main/index.html`, `my-mln-learning-main/public/thIcon.jpg`.
- Logo assets: `my-mln-learning-main/src/assets/images/logo/logo.png`, `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg`, and external logo URL in `my-mln-learning-main/src/components/home/Header.jsx`.
- Marxism-Leninism content: `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, `my-mln-learning-main/src/components/home/MainContent.jsx`, and `my-mln-learning-main/src/pages/Courses.jsx`.
- Mindmap images: `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg`, referenced by `mindmap_url` fields in `my-mln-learning-main/src/data/coursesData.js`.

**Technical risks:**
- `my-mln-learning-main/src/styles/home/home.css` contains copied Moodle/New Learning theme CSS and remote asset references; retheming may require replacing both React markup and CSS selectors.
- `my-mln-learning-main/src/components/home/Header.jsx` includes live `lmsstyle.com` login/search form actions and OAuth links. These are not local app routes and may be inappropriate for a Ho Chi Minh Thought learning site.
- `my-mln-learning-main/src/data/flipImagesData.js` hotlinks many third-party images, including Marx/Lenin-specific images. Replace these with vetted local or licensed Ho Chi Minh Thought assets.
- `my-mln-learning-main/src/pages/Tuvipage.jsx` and `my-mln-learning-main/src/utils/` implement a tử vi feature that is thematically separate from Marxism-Leninism and Ho Chi Minh Thought. Decide whether it remains part of the converted app before investing in retheming it.

---

*Stack analysis: 2026-06-05*
