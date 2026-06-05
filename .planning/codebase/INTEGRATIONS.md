# External Integrations

**Analysis Date:** 2026-06-05

## APIs & External Services

**Generative AI:**
- Google Gemini - Generates Vietnamese tử vi interpretations from the chart built in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
  - SDK/Client: `@google/genai` in `my-mln-learning-main/src/services/geminiService.js`.
  - Model: `gemini-2.5-flash-lite` in `my-mln-learning-main/src/services/geminiService.js`.
  - Auth: `VITE_GEMINI_API_KEY` read in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
  - Risk: This key is used from the browser bundle; use a backend proxy if the converted project needs protected AI usage or per-user quotas.

**Theme/CDN Assets:**
- Google Fonts - `Roboto Flex` loaded in `my-mln-learning-main/index.html`; `Lexend` imported by `my-mln-learning-main/src/styles/home/home.css`, `my-mln-learning-main/src/styles/flip/flip.css`, and `my-mln-learning-main/src/styles/tuvi/TuviPage.css`.
  - SDK/Client: browser stylesheet links/imports.
  - Auth: none.
- Cloudflare cdnjs - Font Awesome, Three.js `r121`, and Font Awesome 6 CSS loaded in `my-mln-learning-main/index.html`.
  - SDK/Client: browser `<link>` and `<script>` tags.
  - Auth: none.
- jsDelivr - Bootstrap Icons, Remix Icon, and Vanta.js scripts loaded in `my-mln-learning-main/index.html`.
  - SDK/Client: browser `<link>` and `<script>` tags.
  - Auth: none.
- Vanta.js - Animated backgrounds use global `window.VANTA.BIRDS` in `my-mln-learning-main/src/components/home/MainContent.jsx` and `window.VANTA.NET` in `my-mln-learning-main/src/pages/Tuvipage.jsx`.
  - SDK/Client: global scripts from `my-mln-learning-main/index.html`.
  - Auth: none.

**Moodle/New Learning Theme Host:**
- `lmsstyle.com` - Remote theme images, placeholders, forms, and navigation links copied into the home/header experience.
  - SDK/Client: direct links and form actions in `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/components/home/MainContent.jsx`, and CSS URL in `my-mln-learning-main/src/styles/home/home.css`.
  - Dev Proxy: `/theme` proxies to `https://lmsstyle.com` in `my-mln-learning-main/vite.config.js`.
  - Auth: not local; header includes external Google OAuth and login form URLs targeting `lmsstyle.com`.
  - Risk: This creates unwanted dependency on an external Moodle demo/theme site and can leak user-submitted login/search data to that host if the copied forms remain active.

**Third-Party Image Hosts:**
- Multiple public image URLs - Flip-card game pulls remote images from `fptshop.com.vn`, `amcollege.edu.vn`, `hocluat.vn`, `pngtree.com`, `dongmynghe.com.vn`, `truongcongdoanbd.edu.vn`, `phattuvietnam.net`, `clipart-library.com`, `luanvanviet.com`, `btgdvtukhanhhoa.vn`, `googleusercontent.com`, `bbci.co.uk`, `bizweb.dktcdn.net`, `encrypted-tbn0.gstatic.com`, `giaophanthanhhoa.net`, `philosophy.ussh.vnu.edu.vn`, `ntu.edu.vn`, `baobinhphuoc.com.vn`, `ethics.org.au`, `tuyenquang.dcs.vn`, `nhn.1cdn.vn`, and `vector6.com`.
  - SDK/Client: browser image loading from `my-mln-learning-main/src/data/flipImagesData.js`.
  - Auth: none.
  - Risk: Availability, licensing, mixed subject matter, and content drift are outside project control. Replace with local vetted assets for the Ho Chi Minh Thought conversion.

**Social Links:**
- Facebook profile link - Footer contact/social link in `my-mln-learning-main/src/components/home/Footer.jsx`.
  - SDK/Client: plain hyperlink.
  - Auth: none.

## Data Storage

**Databases:**
- Not detected.
  - Connection: Not applicable.
  - Client: Not applicable.

**File Storage:**
- Local static assets:
  - Public mindmaps and favicon in `my-mln-learning-main/public/`.
  - Bundled images, logos, fonts, and backgrounds in `my-mln-learning-main/src/assets/`.
- Remote file storage is effectively delegated to hotlinked third-party image/CDN hosts listed above.

**Caching:**
- Browser `localStorage` only for flip-card game stats in `my-mln-learning-main/src/pages/FlipCardPage.jsx`.
- No Redis, service worker, IndexedDB, or application cache layer detected.

## Authentication & Identity

**Auth Provider:**
- No local authentication implementation detected.
  - Implementation: The React app has no user model, session management, protected routes, or backend auth endpoints.
- External Moodle/Google OAuth links are present in copied header markup:
  - `my-mln-learning-main/src/components/home/Header.jsx` links to `https://lmsstyle.com/theme/new-learning/auth/oauth2/login.php...`.
  - `my-mln-learning-main/src/components/home/Header.jsx` posts login form data to `https://lmsstyle.com/theme/new-learning/login/index.php`.
  - Risk: Remove or replace these links during conversion unless the app intentionally integrates with that Moodle site.

## Monitoring & Observability

**Error Tracking:**
- None detected.

**Logs:**
- Browser console logging in `my-mln-learning-main/src/services/geminiService.js`, `my-mln-learning-main/src/pages/Tuvipage.jsx`, and `my-mln-learning-main/src/components/home/MainContent.jsx`.
- No structured logging, telemetry, or remote monitoring integration detected.

## CI/CD & Deployment

**Hosting:**
- Not detected. The app builds as a static Vite SPA from `my-mln-learning-main/package.json`.

**CI Pipeline:**
- None detected in the mapped app subtree. No GitHub Actions or other pipeline files were identified during tech mapping.

## Environment Configuration

**Required env vars:**
- `VITE_GEMINI_API_KEY` - Required only for Gemini-powered tử vi interpretation in `my-mln-learning-main/src/pages/Tuvipage.jsx`; the rest of the app can render without it.

**Secrets location:**
- No `.env*` files detected in `my-mln-learning-main/`.
- Do not commit `.env` files. For local development, Vite convention is `my-mln-learning-main/.env.local` with `VITE_GEMINI_API_KEY=...`, but secret contents must not be documented or committed.

## Webhooks & Callbacks

**Incoming:**
- None detected. The app has no backend endpoints.

**Outgoing:**
- Gemini API call from the browser through `@google/genai` in `my-mln-learning-main/src/services/geminiService.js`.
- Browser requests to external CDNs and image hosts from `my-mln-learning-main/index.html`, `my-mln-learning-main/src/styles/`, and `my-mln-learning-main/src/data/flipImagesData.js`.
- External form submissions to `lmsstyle.com` from `my-mln-learning-main/src/components/home/Header.jsx`.

## Assets & Data Sources for Content Replacement

**Local data modules:**
- `my-mln-learning-main/src/data/coursesData.js` - Course topics, topic body text, quotes, and `mindmap_url` fields. Replace with Ho Chi Minh Thought course content.
- `my-mln-learning-main/src/data/quizData.js` - Quiz questions and answers. Replace Marxism-Leninism questions with Ho Chi Minh Thought assessment items.
- `my-mln-learning-main/src/data/flipImagesData.js` - Remote image list for the matching game. Replace with local or licensed Ho Chi Minh Thought images.

**Local visual assets:**
- `my-mln-learning-main/public/thIcon.jpg` - Current favicon.
- `my-mln-learning-main/public/chu-de-1.jpg`, `my-mln-learning-main/public/chu-de-2.jpg`, `my-mln-learning-main/public/chu-de-3.jpg` - Mindmap images referenced by `coursesData`.
- `my-mln-learning-main/src/assets/images/logo/logo.png` and `my-mln-learning-main/src/assets/images/logo/logo-dark2.svg` - Current brand/logo assets.
- `my-mln-learning-main/src/assets/images/demo_certificates.png`, `my-mln-learning-main/src/assets/images/makdahome.png`, `my-mln-learning-main/src/assets/images/thu-ha.png`, and `my-mln-learning-main/src/assets/images/background/` - Home/quiz visual assets to audit during retheme.

**Hard-coded subject/brand text:**
- `my-mln-learning-main/index.html` - page title and favicon.
- `my-mln-learning-main/src/components/home/MainContent.jsx` - home page copy and Marxism-Leninism references.
- `my-mln-learning-main/src/components/home/Footer.jsx` - TAHA/team/contact copy.
- `my-mln-learning-main/src/pages/Courses.jsx` - course page heading/subheading.
- `my-mln-learning-main/src/data/coursesData.js` and `my-mln-learning-main/src/data/quizData.js` - main educational content corpus.

---

*Integration audit: 2026-06-05*
