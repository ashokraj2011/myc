# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `myl-graph`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/myl-graph/artifacts/planning/plan.md`
- Source SHA-256: `66dae854e0d2d904a06402c81e2e9c7bd54f8c5365fbab457b49088f8506ec54`

## Summary from “Agent brief”

The checkout already contains a graphing mode: `App.jsx` routes the grapher mode to
`FunctionGrapher`, which accepts an equation, compiles it with mathjs, and draws finite samples on
a canvas. Preserve this small client-side design and verify it rather than introducing a graphing
service or another rendering library. Add focused component and mode-integration regression tests;
use the existing canvas test stub for deterministic checks, then visually confirm the `sin(x)` plot
in the application. The main risks are expression-evaluation boundaries and canvas behavior that
unit tests cannot visually establish. This plan does not claim that tests or visual acceptance have
already occurred. [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] [MYL-GRAPH:AC-001]

## Test strategy

Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `MYL-GRAPH:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `myl-graph`'s Story evidence directory, not product source.
A planned test never saves its capture straight to that path, because every later run would replace
the reviewed file: it saves under its runner's output (for example `test-results/`), and the code
step copies the image to the evidence path once, when it produces the evidence.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `MYL-GRAPH:AC-001` | - | `src/components/FunctionGrapher.test.jsx` | test-only | The entered `sin(x)` expression produces a plotted sine trace over the visible x range. |
| `MYL-GRAPH:REQ-001` | - | `src/components/FunctionGrapher.test.jsx`; `src/App.test.jsx` | test-only | A person can enter an equation in the graphing mode reached from the application. |
| `MYL-GRAPH:REQ-002` | - | `src/components/FunctionGrapher.test.jsx`; `src/App.test.jsx` | test-only | The graphing mode renders a plot for the supplied equation. |

## Risks and rollback

Canvas mocks can prove that the component issues drawing operations but cannot prove the plot is
visually legible; detect that gap with the planned visual review. Expression input is evaluated by
mathjs, so keep evaluation constrained to the supplied x-variable and do not add arbitrary
JavaScript evaluation or a larger execution scope. If regression coverage exposes a defect, limit
the repair to the grapher surface and retain the existing calculator modes; reverting the focused
test-only change does not require data migration or server rollback. No implementation or test
result is claimed by this plan.
