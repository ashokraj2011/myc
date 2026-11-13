# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `aswhin`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/aswhin/artifacts/planning/plan.md`
- Source SHA-256: `f565c4d9ce937a2f902623ea9fcebe34fd91e12a4b9d465c5ed4d2c47c1cdf40`

## Summary from “Agent brief”

Add an explicit binary-conversion action to the calculator's shared result display. It will evaluate the entered expression using the existing evaluator, convert a positive finite numeric result to base 2, and show that representation without changing ordinary calculation behavior. Extend evaluator and App interaction tests; for input 2, verify the displayed `10` and retain a screenshot for visual review. Main risks are changing existing equals/history behavior or capturing stale output; keep conversion separate from ordinary evaluation and capture only after the requested result is visible. [ASWHIN:REQ-001] [ASWHIN:AC-001]

## Test strategy

Exercise both the conversion utility and the user-visible request path. The table maps each approved clause to exact source, test, or retained-evidence paths. The AC-001 interaction test checks the displayed value, while its primary visual contract requires a retained screenshot of the visible result; the screenshot is retained separately from test-run output. Existing arithmetic behavior remains covered by the App regression tests. [ASWHIN:REQ-001] [ASWHIN:AC-001]

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `ASWHIN:AC-001` | `singularity/work-items/aswhin/evidence/binary-result.png` | `src/App.test.jsx` | evidence | Request conversion for input 2; the calculator displays `10`, and the retained screenshot shows that result. |
| `ASWHIN:REQ-001` | `src/App.jsx`, `src/components/Display.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A user can request binary representation for a positive decimal input; the displayed result is its base-2 representation. |

## Risks and rollback

Risks: conversion could accidentally alter ordinary equals behavior or expose a stale result; detect this with the existing arithmetic regressions and an interaction test that requests conversion after entering 2. A screenshot taken before the display updates would not prove the criterion; capture only after the visible result is `10` and inspect the retained image. If the conversion path regresses, revert the isolated conversion wiring/helper and retain the ordinary evaluator and equals path. Fractional positive inputs are within the broad positive-decimal wording, so use the runtime's numeric base-2 representation and cover a fractional value in evaluator tests; zero, negatives, and invalid input remain outside the approved scope. [ASWHIN:REQ-001] [ASWHIN:AC-001]
