# HCM202 Learning

## What This Is

HCM202 Learning is a converted learning web app for the course "Tu tuong Ho Chi Minh". It starts from the old `my-mln-learning` React/Vite app, but the learning content, quiz data, flip-card image data, images, project identity, and visual theme must be replaced so the whole system feels like a dedicated Ho Chi Minh Thought study tool.

The app is primarily for students who need a lightweight course companion: browse seven study topics, review structured lesson notes, practice quiz questions, and use a flip-card/memory activity with suitable Ho Chi Minh themed imagery.

## Core Value

Students can study and practice "Tu tuong Ho Chi Minh" through a coherent red-yellow themed learning experience with no leftover Marxism-Leninism or old-teacher branding.

## Requirements

### Validated

- ✓ React/Vite single page app exists with route structure for home, courses, quiz, quiz results, flip-card game, and an unrelated tu vi page — existing
- ✓ Static data modules can drive course lessons, quiz questions, and flip-card cards without a backend — existing
- ✓ Course page can render selectable topics with lesson sections, quotes, and mind map images — existing
- ✓ Quiz flow can shuffle/filter questions, track answers/timer/progress, and show result navigation — existing
- ✓ Flip-card page can run a memory-card style interaction using image data and local state — existing
- ✓ Feature CSS files already separate home, courses, quiz, flip, and tu vi surfaces enough for targeted retheming — existing

### Active

- [ ] Rename project identity from `my-mln-learning` / TAHA / old philosophy wording to HCM202 / "Tu tuong Ho Chi Minh" across package metadata, browser title, visible text, navigation, and footer.
- [ ] Replace all course data with a seven-topic "Tu tuong Ho Chi Minh" structure that the user can later fact-edit if needed.
- [ ] Replace all quiz data with new Ho Chi Minh Thought practice questions and remove all unusable old subject data.
- [ ] Replace flip-card image data with image entries sized and selected for the actual flip-card layout.
- [ ] Replace `makdahome.png` and `thu-ha.png` with bright, red-yellow, glowing Ho Chi Minh imagery.
- [ ] Convert the whole visual system to a Vietnamese red-yellow theme, including major pages, buttons, headings, backgrounds, and interaction states.
- [ ] Synchronize back buttons across pages so navigation feels consistent.
- [ ] Normalize typography and text sizing across pages so content is readable and visually consistent.
- [ ] Decide whether the unrelated `/tuvi` feature remains, is hidden, or is removed from the HCM202 experience.
- [ ] Initialize and use a new git history for the converted project.

### Out of Scope

- User authentication, accounts, or LMS integration — the current app is a static SPA and the requested conversion is content/theme focused.
- Backend content management — v1 will keep the existing static data-module approach.
- Perfect academic correctness of generated study content — the user explicitly accepts generated structure and will manually correct knowledge if needed.
- A mobile native app — v1 remains a browser-based Vite app.
- Rebuilding the app from scratch — the goal is to convert and stabilize the existing codebase.

## Context

- The codebase is under `my-mln-learning-main/` inside the new repository root `e:\Desktop\HCM202-project`.
- Codebase mapping is complete in `.planning/codebase/` and shows a React 19 + Vite 7 + React Router app with static ES module data.
- Important data files are `my-mln-learning-main/src/data/coursesData.js`, `my-mln-learning-main/src/data/quizData.js`, and `my-mln-learning-main/src/data/flipImagesData.js`.
- Important identity and home surfaces include `my-mln-learning-main/package.json`, `my-mln-learning-main/index.html`, `my-mln-learning-main/src/components/home/Header.jsx`, `my-mln-learning-main/src/components/home/MainContent.jsx`, and `my-mln-learning-main/src/components/home/Footer.jsx`.
- Important image surfaces include `my-mln-learning-main/src/assets/images/makdahome.png`, `my-mln-learning-main/src/assets/images/thu-ha.png`, logo assets, public topic images, and flip-card image assets/URLs.
- The desired visual direction is vivid red-yellow, Vietnamese-flag inspired, bright and glowing, especially for Ho Chi Minh imagery.
- The old content and assets are not reliable for the new project; broad replacement is expected rather than small edits.

## Constraints

- **Tech stack**: Keep React/Vite and the current static SPA architecture — fastest path and matches the existing codebase.
- **Content**: Generate seven topic structures and initial quiz content, but keep data easy to manually edit because the user may correct academic details later.
- **Assets**: Avoid old teacher branding and old Marxism-Leninism hotlinked imagery; use Ho Chi Minh themed images that fit their containers.
- **Theme**: Red and yellow are the required system colors, but the UI still needs contrast, readable text, and non-overlapping layout on desktop and mobile.
- **Navigation**: Back buttons should follow one consistent component or pattern across pages.
- **Git**: Repository has been newly initialized at `e:\Desktop\HCM202-project`; planning/codebase mapping is already committed.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Convert the existing app instead of rebuilding | The current routes, course page, quiz flow, and flip game already provide useful structure. | - Pending |
| Use seven Ho Chi Minh Thought topics for v1 | User requested seven topics and accepts generated structure as editable scaffolding. | - Pending |
| Replace all old course, quiz, and flip data | User stated old data is no longer usable. | - Pending |
| Use a bright red-yellow glowing visual style | User requested a vivid Vietnamese-color direction and radiant Ho Chi Minh imagery. | - Pending |
| Keep content static in data modules for v1 | Matches current architecture and keeps edits simple. | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? Move to Out of Scope with reason.
2. Requirements validated? Move to Validated with phase reference.
3. New requirements emerged? Add to Active.
4. Decisions to log? Add to Key Decisions.
5. "What This Is" still accurate? Update if drifted.

**After each milestone**:
1. Full review of all sections.
2. Core Value check: still the right priority?
3. Audit Out of Scope: reasons still valid?
4. Update Context with current state.

---
*Last updated: 2026-06-05 after initialization*
