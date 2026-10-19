# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-501`
- Producer: `planning` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/bin-501/artifacts/planning/plan.md`
- Source SHA-256: `6d7b7cc96ee36d201cbb3667d6586f8842cb772eb41aaf74fdf42e7adbb016af`

## Summary from “Agent brief”

Add a named decimal-to-binary conversion export to the existing evaluator utility rather than introducing a new UI or API. Keep the behavior small and independently testable; add Vitest cases to the evaluator utility suite for zero and positive whole-number values. Retain screenshot proof at `singularity/work-items/bin-501/evidence/decimal-to-binary.png`, capturing an actual input/result pair without expanding product scope. Main risks are choosing a stable return representation and ensuring the screenshot reflects a real invocation; the approved specification leaves type, numeric bounds, and invalid-input behavior open, so do not invent requirements for them. [BIN-501:REQ-001] [BIN-501:REQ-002] [BIN-501:REQ-003] [BIN-501:AC-001]

## Test strategy

Each clause is covered below with executable tests or retained visual evidence, without weakening the approved methods. Add exactly one row per clause, using its
fully qualified ID (for example, `BIN-501:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `bin-501`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `BIN-501:AC-001` | `singularity/work-items/bin-501/evidence/decimal-to-binary.png` | `src/utils/evaluator.test.js` | evidence | Executable conversion cases pass and the retained screenshot shows a whole-number decimal input with its corresponding base-2 result. |
| `BIN-501:REQ-001` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | new | Invoking the exported utility with zero and positive whole-number decimal inputs returns base-2 representations of the same numeric values. |
| `BIN-501:REQ-002` | - | `src/utils/evaluator.test.js` | test-only | The executable Vitest cases verify conversion behavior for zero and positive whole-number inputs. |
| `BIN-501:REQ-003` | `singularity/work-items/bin-501/evidence/decimal-to-binary.png` | `src/utils/evaluator.test.js` | evidence | The retained screenshot visibly pairs one whole-number decimal input with its corresponding binary result; it does not imply new UI/API scope. |

## Risks and rollback

The specification does not define a concrete return type, maximum supported value, or invalid-input behavior. Keep implementation to the clarified whole-number domain and validate exact numeric equivalence; do not silently add constraints or error semantics. A screenshot that merely shows a file or test result without the observed decimal input and binary result would not satisfy the visual obligation, so review the actual captured contents. Rollback is limited to reverting the utility and its tests and removing the Story evidence file; no persisted data or configuration changes are planned. [BIN-501:REQ-001] [BIN-501:REQ-003] [BIN-501:AC-001]
