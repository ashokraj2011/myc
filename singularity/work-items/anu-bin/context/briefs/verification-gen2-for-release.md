# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `verification` generation 2
- Consumer: `release`
- Source: `singularity/work-items/anu-bin/artifacts/verification/test-evidence.md`
- Source SHA-256: `a67a2897761654662d2a1ee1bc9eeaa784173b2676a8a1fb8b88c051b9d791e2`

## Summary from “Agent brief”

The approved implementation packet retains a source-tree-matched Node 22 execution (34 passed, 0 failed, 0 skipped). The implementation summary calls that run diagnostic-only because it did not satisfy the fresh publication-test requirement. These statements describe different evidence scopes: it is retained governed evidence for implementation and reusable against this unchanged source tree, but it is not a verification-generation run or a fresh publication test. Its suite count alone does not establish either clause verdict. The separate Node 26 diagnostic run failed before the App test bodies because `localStorage` was undefined. No fractional-value, range, formatting, security, or non-functional behavior was specified; those are not claimed as verified. Recommendation: proceed only through the configured gate, preserving the distinction between retained implementation evidence and any fresh verification result.

## Acceptance and specification results

| Clause | Evidence and verdict |
|---|---|
| `ANU-BIN:AC-001` | `src/utils/evaluator.test.js` contains the conversion unit tests tagged `@ac:ANU-BIN:AC-001`. The implementation generation's approved packet retains the matched Node 22 execution (34 passed, 0 failed, 0 skipped; attempt `TA-c7b76e50714f1641b5a0`). It is reusable retained implementation evidence, but not a fresh verification run; the packet's criterion verdict is `requires-bound-witness-evaluation`, so passing suite counts do not establish this clause. |
| `ANU-BIN:REQ-001` | `src/utils/evaluator.js`, `src/App.jsx`, and `src/components/StandardKeypad.jsx` carry the planned `@clause:ANU-BIN:REQ-001` source trace; `src/App.test.jsx` exercises the Standard-mode BIN interaction and is tagged `@ac:ANU-BIN:AC-001`. The retained Node 22 execution is bound to the same source tree, but its suite-level count alone does not establish this clause. The implementation report's separate Node 26 App tests did not reach their bodies. No fresh verification publication test is retained. |

No separate build, CI, or inspection claim is made for this behavior. Not applicable: this Story specifies executable unit-test evidence, not a configuration or documentation outcome.

## Negative, regression, security, and non-functional checks

Existing arithmetic was included in the retained 34-test Node 22 implementation execution, which passed with no skipped tests; the retained summary does not provide per-test names or independent coverage counts. The Node 26 App test failure is recorded above as an environment-specific diagnostic and must not be presented as a passing result. No negative, boundary, accessibility, security, resilience, or observability requirements were specified; no separate checks for them are established here. Fractional-value handling, numeric limits, and output formatting remain unspecified and are not asserted.
