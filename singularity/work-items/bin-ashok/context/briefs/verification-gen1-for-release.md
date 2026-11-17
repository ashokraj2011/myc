# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-ashok`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/bin-ashok/artifacts/verification/test-evidence.md`
- Source SHA-256: `3131fa274a8eb705c24e08c4562e50977ca735a143cfedbcfac603d90379b270`

## Summary from “Agent brief”

Verification passed for the focused App suite and production build on the approved implementation source tree. The 28-test App suite exercised positive conversion before and after equals, large input, Standard and Scientific modes, the accessible button name, all specified unsupported input categories, and existing App regressions. The retained visual review WIT-001 satisfies AC-001: the unchanged screenshot shows `2` converted to `10`. The earlier source-bound full suite recorded 42 passing tests; it is retained implementation evidence, not a new verification run. Residual risk: grouped and exponent-form display values have no dedicated interaction tests, and the build reports a large-chunk advisory. No security suite or lint run was performed for this phase. Recommendation: the delivered behavior is supported by available verification evidence; keep the representation-coverage and chunk-size advisories visible.

Clarification checkpoint: no material ambiguity remained after reviewing the pinned specification and approved phase inputs; no new question or clarification record was needed.

## Acceptance and specification results

| Clause | Product source / trace | Executable or visual evidence | Outcome |
|---|---|---|---|
| BIN-ASHOK:REQ-001 | `src/App.jsx` and `src/components/Display.jsx`; qualified `@clause:BIN-ASHOK:REQ-001` comments | `src/App.test.jsx`: `converts the displayed positive whole number to binary`, `converts the number being entered before equals is pressed`, `exposes the binary action by its accessible name`, `converts large displayed whole numbers without adding a numeric cap`, and `converts a positive whole number while in Scientific mode`. These tests were included in the 28-test Vitest run above; all passed. | Supported for tested positive inputs, entry/result states, the accessible action, large integer input, and both calculator modes. Grouped and exponent-form display formatting lacks a dedicated interaction test. |
| BIN-ASHOK:REQ-002 | `src/App.jsx` and `src/components/Display.jsx`; qualified `@clause:BIN-ASHOK:REQ-002` comments | `src/App.test.jsx`: parameterized `reports unsupported for %s input`, covering zero, negative, fractional, sub-unit fractional, empty, and non-numeric values. Included in the 28-test Vitest run above; all cases passed. | Supported for every specified unsupported category. |
| BIN-ASHOK:AC-001 | Planned evidence file: `singularity/work-items/bin-ashok/evidence/binary-conversion-2.png` | `src/App.test.jsx`: `converts the displayed positive whole number to binary` (tagged `@ac:BIN-ASHOK:AC-001`), passed in the 28-test run. Retained visual witness WIT-001 is valid and satisfies the planned `conversion-result` slot; it is bound to the unchanged screenshot showing `2` and `10`. | Satisfied by the retained screenshot and its recorded visual review. |

Build/configuration: `.nvmrc` specifies Node 22; the successful Vite production build above confirms the project builds in that environment. Not applicable: this step adds no configuration or documentation product behavior requiring a clause tag. The source revision for the new diagnostic run is the verified Verification generation 1 checkout; prior full-suite evidence remains bound to the approved Implementation generation 2 source tree.

## Negative, regression, security, and non-functional checks

Negative checks: the passed parameterized App test covers zero, negative, fractional, sub-unit fractional, empty, and non-numeric input, each returning `not supported`. Regression checks: the 28 passing App tests include arithmetic, memory, clear/backspace, history, mode switching, keyboard modal, sound, theme, and responsive-navigation coverage. The retained full-suite result is 42 passed, 0 failed, 0 skipped on the same approved application source tree.

Security and non-functional checks: no dedicated security, performance, or accessibility audit was run; the feature is local UI conversion with no external service or new persistence. The accessible action name is covered by the passing `getByRole` test. The requested source defines no separate security or non-functional acceptance criteria.

Failures and residual risk: no failures occurred in the verification test or build commands. Vite emitted the non-blocking large-chunk advisory (>500 kB). The test suite does not directly exercise grouped or exponent-form display strings; this is a residual coverage gap, not evidence of a known conversion failure. Lint was not run during this phase. No upstream discrepancy or unresolved clarification was identified.
