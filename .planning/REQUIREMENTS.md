# Requirements: HCM202 Learning

**Defined:** 2026-06-05
**Core Value:** Students can study and practice "Tu tuong Ho Chi Minh" through a coherent red-yellow themed learning experience with no leftover Marxism-Leninism or old-teacher branding.

## v1 Requirements

### Identity

- [x] **IDEN-01**: User sees HCM202 / "Tu tuong Ho Chi Minh" project identity in package metadata, browser title, navigation, home page, footer, and visible page headings.
- [x] **IDEN-02**: User does not see TAHA, old teacher names, Marxism-Leninism course branding, or stale philosophy-project copy in the converted learning experience.
- [x] **IDEN-03**: User can navigate the app through labels that match the HCM202 study purpose.

### Course Content

- [x] **CONT-01**: User can study seven Ho Chi Minh Thought topics from `coursesData`.
- [x] **CONT-02**: Each topic has a consistent structure with title, summary/quote, learning issues, and a mind-map/image field that can be edited later.
- [x] **CONT-03**: Existing old course data is fully replaced instead of partially mixed with the new subject.
- [x] **CONT-04**: Generated content remains easy to fact-edit by changing static data objects without touching page logic.

### Quiz

- [x] **QUIZ-01**: User can take a quiz using only Ho Chi Minh Thought questions.
- [x] **QUIZ-02**: Quiz questions cover the seven topic areas at a useful spread for practice.
- [x] **QUIZ-03**: User can complete a quiz session and see results without route/state regressions.
- [x] **QUIZ-04**: Existing old quiz data is fully removed from the active question set.

### Flip Cards

- [x] **FLIP-01**: User can play the flip-card game with Ho Chi Minh themed image data rather than old/hotlinked Marxism-Leninism imagery.
- [x] **FLIP-02**: Flip-card images fit the card layout without awkward cropping, distortion, or inconsistent sizing.
- [x] **FLIP-03**: Flip-card data structure remains compatible with the existing jQuery/React game logic.

### Assets

- [x] **ASST-01**: Home image formerly represented by `makdahome.png` is replaced with bright red-yellow glowing Ho Chi Minh imagery.
- [x] **ASST-02**: `thu-ha.png` is replaced with appropriate Ho Chi Minh imagery.
- [x] **ASST-03**: Logos, favicon, public topic images, and visible image references no longer imply the old project or old teacher branding.
- [x] **ASST-04**: Replaced assets render correctly in desktop and mobile layouts.

### Theme And UI

- [x] **UI-01**: The app uses a coherent red-yellow Vietnamese-inspired visual system across home, courses, quiz, quiz results, flip, and any retained standalone pages.
- [x] **UI-02**: Buttons, links, active states, cards, headings, and backgrounds use the new theme with readable contrast.
- [x] **UI-03**: Back buttons are synchronized across pages with consistent placement, wording/icon treatment, and hover/focus behavior.
- [x] **UI-04**: Fonts and text sizes are normalized so page content, buttons, cards, quiz options, and course text remain readable and do not overlap.
- [x] **UI-05**: Mobile and desktop layouts avoid text overflow and incoherent UI overlap after the content and theme migration.

### Route Scope

- [x] **ROUT-01**: The unrelated `/tuvi` feature is either hidden, removed, or clearly excluded from the HCM202 navigation surface.
- [x] **ROUT-02**: Active routes still build and navigate correctly after identity, data, and theme changes.

### Verification

- [x] **VERI-01**: `npm run lint` completes or known lint issues are documented.
- [x] **VERI-02**: `npm run build` completes successfully.
- [x] **VERI-03**: Manual browser verification covers home, courses, quiz, quiz results, flip-card game, and responsive checks.

## v2 Requirements

### Content Expansion

- **V2-CONT-01**: User can replace generated course text with instructor-approved final academic content.
- **V2-CONT-02**: User can add richer mind maps or downloadable study materials per topic.
- **V2-CONT-03**: User can add more quiz modes such as topic-specific practice or review missed questions.

### Product

- **V2-PROD-01**: User can export or print study notes.
- **V2-PROD-02**: User can track progress across topics.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend CMS | Static data files are enough for the requested conversion and keep editing simple. |
| User accounts | Not needed for a local/static course companion. |
| Academic guarantee for generated text | User requested structure first and will correct knowledge if needed. |
| Native mobile app | Browser SPA remains the target. |
| Full rewrite | Existing React/Vite routes and feature logic are useful conversion scaffolding. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| IDEN-01 | Phase 1 | Complete |
| IDEN-02 | Phase 1 | Complete |
| IDEN-03 | Phase 1 | Complete |
| CONT-01 | Phase 2 | Complete |
| CONT-02 | Phase 2 | Complete |
| CONT-03 | Phase 2 | Complete |
| CONT-04 | Phase 2 | Complete |
| QUIZ-01 | Phase 2 | Complete |
| QUIZ-02 | Phase 2 | Complete |
| QUIZ-03 | Phase 2 | Complete |
| QUIZ-04 | Phase 2 | Complete |
| FLIP-01 | Phase 3 | Complete |
| FLIP-02 | Phase 3 | Complete |
| FLIP-03 | Phase 3 | Complete |
| ASST-01 | Phase 3 | Complete |
| ASST-02 | Phase 3 | Complete |
| ASST-03 | Phase 3 | Complete |
| ASST-04 | Phase 3 | Complete |
| UI-01 | Phase 4 | Complete |
| UI-02 | Phase 4 | Complete |
| UI-03 | Phase 4 | Complete |
| UI-04 | Phase 4 | Complete |
| UI-05 | Phase 4 | Complete |
| ROUT-01 | Phase 4 | Complete |
| ROUT-02 | Phase 4 | Complete |
| VERI-01 | Phase 4 | Complete |
| VERI-02 | Phase 4 | Complete |
| VERI-03 | Phase 4 | Complete |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0

---
*Requirements defined: 2026-06-05*
*Last updated: 2026-06-05 after Phase 4 completion*
