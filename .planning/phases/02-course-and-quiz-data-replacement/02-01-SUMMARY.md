---
phase: 02-course-and-quiz-data-replacement
plan: 01
subsystem: content
tags: [react, vite, static-data, hcm202, quiz]

requires:
  - phase: 01-project-identity-conversion
    provides: HCM202 identity shell and route labels
provides:
  - Seven-topic HCM202 course dataset
  - Seventy-question HCM202 quiz dataset
  - Automated data shape and stale-subject verification
affects: [03-ho-chi-minh-assets-and-flip-cards, 04-red-yellow-ui-polish-and-verification]

tech-stack:
  added: []
  patterns: [static ES module learning data, numeric quiz chapters]

key-files:
  created: []
  modified:
    - my-mln-learning-main/src/data/coursesData.js
    - my-mln-learning-main/src/data/quizData.js

key-decisions:
  - "Kept generated HCM202 content as editable static scaffold, matching the user's earlier guidance that factual corrections can happen later."
  - "Kept existing course and quiz page logic unchanged because the replacement data preserves the current shapes."
  - "Left public mind-map image placeholders unchanged for Phase 3 asset work."

patterns-established:
  - "Course topics use stable hcm01-hcm07 ids and the existing tieu_de/cau_noi_hay/mindmap_url/cac_van_de shape."
  - "Quiz chapters use numeric 1-7 values so the current QuizPage dropdown/filter logic keeps working."

requirements-completed: [CONT-01, CONT-02, CONT-03, CONT-04, QUIZ-01, QUIZ-02, QUIZ-03, QUIZ-04]

duration: 32min
completed: 2026-06-05
---

# Phase 2: Course And Quiz Data Replacement Summary

**Seven-topic HCM202 course scaffold with a balanced seventy-question HCM202 quiz bank**

## Performance

- **Duration:** 32 min
- **Started:** 2026-06-05T19:29:00+07:00
- **Completed:** 2026-06-05T20:01:31+07:00
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- Replaced old course data with exactly seven HCM202 topics.
- Replaced old quiz data with 70 HCM202 questions, 10 per topic/chapter.
- Preserved the existing data shapes used by `Courses.jsx` and `QuizPage.jsx`.
- Verified no active old Marxism-Leninism/philosophy subject data remains in the course/quiz data files.

## Task Commits

Pending final phase commit.

## Files Created/Modified

- `my-mln-learning-main/src/data/coursesData.js` - Seven HCM202 topics using the existing editable topic structure.
- `my-mln-learning-main/src/data/quizData.js` - Seventy HCM202 questions using numeric chapters 1-7 and existing quiz fields.

## Decisions Made

- Used static data replacement only; no backend, parser, or content abstraction was added.
- Kept `mindmap_url` values as existing public placeholders because Phase 3 owns image replacement.
- Did not change `/tuvi`; it remains available by user request and outside Phase 2 scope.

## Deviations from Plan

None - plan executed as written.

## Issues Encountered

- Browser automation could not initialize for interactive dropdown/quiz-click verification. Automated HTTP route checks, data validation, lint, and build all passed. Interactive visual UAT remains useful but is not blocked by source/runtime checks.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 3 can now replace Ho Chi Minh imagery, public topic images, and flip-card image data without needing to disentangle old course or quiz content first.

---
*Phase: 02-course-and-quiz-data-replacement*
*Completed: 2026-06-05*
