# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/anu-bin/artifacts/planning/plan.md`
- Source SHA-256: `5c96d0a6f758d31587173ac6ede7dc0847f49f180290890604c5ce8a7175592a`

## Summary from “Agent brief”

Add an explicit binary-conversion action to the existing Standard calculator. Keep arithmetic
evaluation intact; convert the evaluated numeric result through a focused evaluator utility, then
show the binary value in the existing result display. Verify conversion at the utility boundary
with unit tests and exercise the calculator interaction in the app tests. The approved scope does
not settle fractional-value, range, or presentation details; implementation must avoid inventing
requirements for those cases.

## Test strategy

Prove conversion behavior with unit tests and verify that the calculator's Standard-mode action
surfaces that conversion to the user. Do not assert fractional, range, or formatting requirements
that the approved specification does not define. `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `anu-bin`'s Story evidence directory, not product source.
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
| `ANU-BIN:AC-001` | - | `src/utils/evaluator.test.js` | test-only | Unit tests demonstrate decimal-to-binary conversion behavior. |
| `ANU-BIN:REQ-001` | `src/utils/evaluator.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/evaluator.test.js`, `src/App.test.jsx` | new | A user can invoke conversion in Standard mode and see the resulting binary value. |

## Risks and rollback

Conversion may be confused with ordinary equals or may alter existing result/history behavior;
detect this with regression tests for existing arithmetic and an interaction test that invokes the
distinct conversion action. Numeric limits and fractional conversion are unspecified, so avoid
presenting an implementation choice as an approved contract and keep it isolated in the helper.
If the change regresses calculator behavior, revert the conversion helper and its keypad/App wiring
as one change; existing expression evaluation remains the fallback behavior.
