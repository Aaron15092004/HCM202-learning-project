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
- ✓ Project identity shell uses HCM202 / "Tu tuong Ho Chi Minh" across metadata, primary home copy, footer, and route labels — Phase 1
- ✓ Course data contains exactly seven editable HCM202 topic structures — Phase 2
- ✓ Quiz data contains 70 HCM202 practice questions, 10 per topic/chapter — Phase 2
- ✓ Primary images, logo/favicon/topic images, and active flip-card imagery use local HCM202 red-yellow assets — Phase 3
- ✓ Flip-card data contains exactly 32 local HCM202 image paths compatible with the existing game — Phase 3
- ✓ Shared red-yellow UI system, synchronized back buttons, route scope, and verification are complete — Phase 4

### Active

- [ ] Review final screenshots and make any subjective visual refinements desired before sharing.

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
- Phase 1 completed the HCM202 identity shell. `/tuvi` remains available as a route by user request, but it is not advertised from the home page primary navigation.
- Phase 2 replaced active course and quiz data.
- Phase 3 replaced primary visual assets and flip-card image data. The in-app Browser tool was not callable in this turn, but Playwright CLI screenshots, data checks, lint, build, and HTTP route checks passed.
- Phase 4 completed the v1 red-yellow UI polish, synchronized back buttons, route scope verification, and final lint/build/route/screenshot checks.

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
| Convert the existing app instead of rebuilding | The current routes, course page, quiz flow, and flip game already provide useful structure. | ✓ Good |
| Use seven Ho Chi Minh Thought topics for v1 | User requested seven topics and accepts generated structure as editable scaffolding. | ✓ Good |
| Replace all old course, quiz, and flip data | User stated old data is no longer usable. Course, quiz, and active flip data are replaced. | ✓ Good |
| Use a bright red-yellow glowing visual style | User requested a vivid Vietnamese-color direction and radiant Ho Chi Minh imagery. Primary assets and flip page now use this direction; full system theme remains Phase 4. | ✓ Good |
| Keep content static in data modules for v1 | Matches current architecture and keeps edits simple. | ✓ Good |
| Retain `/tuvi` route while removing it from primary HCM202 navigation | User explicitly approved Phase 1 but requested the route not be deleted. | ✓ Good |

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
*Last updated: 2026-06-05 after Phase 4 completion*
