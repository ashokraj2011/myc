# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/anu-bin/artifacts/verification/test-evidence.md`
- Source SHA-256: `1842b21a5118ae677530b58c12678b1a2781cf7f27b2662e6e5d6b417ffb076d`

## Summary from “Agent brief”

Verification is supported by a retained, source-tree-matched Node 22 test run: 34 passed, 0 failed, and 0 skipped. The retained evidence covers the evaluator and calculator app tests, including the planned binary-conversion behavior. A separate Node 26 diagnostic run failed in the App test environment because `localStorage` was undefined; the tests did not reach their bodies. This does not contradict the retained Node 22 run, but remains an environment-specific diagnostic failure. A fresh verification publication test run is still required. No fractional-value, range, formatting, security, or non-functional behavior was specified; those are not claimed as verified. Recommendation: proceed to the configured publication gate, keeping its test result and any failures visible.

## Acceptance and specification results

| Clause | Evidence and verdict |
|---|---|
| `ANU-BIN:AC-001` | `src/utils/evaluator.test.js` contains the conversion unit tests tagged `@ac:ANU-BIN:AC-001`. The retained, matched Node 22 suite run passed 34 tests, 0 failed, 0 skipped (attempt `TA-c7b76e50714f1641b5a0`). This is reused implementation-generation evidence, not a fresh verification run. |
| `ANU-BIN:REQ-001` | `src/utils/evaluator.js`, `src/App.jsx`, and `src/components/StandardKeypad.jsx` carry the planned `@clause:ANU-BIN:REQ-001` source trace; `src/App.test.jsx` exercises the Standard-mode BIN interaction and is tagged `@ac:ANU-BIN:AC-001`. The retained matched Node 22 suite passed 34 tests, but suite-level counts alone do not independently establish a clause verdict. The implementation report's Node 26 App tests did not reach their bodies. Fresh publication testing remains required. |

No separate build, CI, or inspection claim is made for this behavior. Not applicable: this Story specifies executable unit-test evidence, not a configuration or documentation outcome.

## Negative, regression, security, and non-functional checks

Existing arithmetic was included in the 34-test retained Node 22 suite, which passed with no skipped tests; the retained summary does not provide per-test names or independent coverage counts. The Node 26 App test failure is recorded above as an environment-specific diagnostic and must not be presented as a passing result. No negative, boundary, accessibility, security, resilience, or observability requirements were specified; no separate checks for them are established here. Fractional-value handling, numeric limits, and output formatting remain unspecified and are not asserted.
