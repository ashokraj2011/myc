# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `check-out-test`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/check-out-test/artifacts/planning/plan.md`
- Source SHA-256: `f571300f6c075b02b8da0c43c66d20d93d537f90f06ab4152174c984f55d63eb`

## Summary from “Agent brief”

Add a standard-mode hexadecimal display toggle without changing evaluation semantics. A small pure
utility will decide whether the latest evaluated decimal result is eligible and will format signed,
uppercase, `0x`-prefixed output. `App` will retain the evaluated decimal value as the source of truth,
reset hexadecimal presentation whenever calculation state changes, and expose conversion only to the
standard `Display`. Component tests will prove the user-visible toggle, disabled states, and expression
preservation; utility tests will cover numeric boundaries; retained default-theme visual evidence will
prove the screenshot obligation. Principal risks are stale hexadecimal presentation after input changes,
accidentally exposing the control in scientific mode, and accepting values that are not finite integers.

## Test strategy

Vitest utility tests will prove formatting and eligibility as pure behavior, while React Testing Library
tests will drive the calculator through its public controls and assert the rendered result, expression,
control availability, and mode boundary. The visual criterion remains a separate primary source-bound
witness: a reviewer must inspect the retained screenshot captured from the default `classic` theme in
standard mode after `200 + 55` is evaluated and converted. Add exactly one row per clause, using its
fully qualified ID (for example, `check-out-test:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `check-out-test`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [CHECK-OUT-TEST:AC-001] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | Converting evaluated `255` displays `0xFF`, converting `0` displays `0x0`, and the expression is unchanged. |
| [CHECK-OUT-TEST:AC-002] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | Evaluated `-255` displays `-0xFF`; a second activation restores `-255` without changing the expression. |
| [CHECK-OUT-TEST:AC-003] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | The control is unavailable before evaluation and for fractional, invalid, error, and non-finite results, with no result or expression mutation. |
| [CHECK-OUT-TEST:AC-004] | `singularity/work-items/check-out-test/evidence/hex-conversion-default-theme.png` | verification: CHECK-OUT-TEST:AC-004 | evidence | The retained default-theme standard calculator screenshot visibly shows the control and uppercase `0xFF` result. |
| [CHECK-OUT-TEST:REQ-001] | `src/App.jsx` `src/components/Display.jsx` | `src/App.test.jsx` | modified | A labelled hexadecimal conversion control is visible in the standard calculator. |
| [CHECK-OUT-TEST:REQ-002] | `src/utils/hexadecimal.js` `src/App.jsx` `src/components/Display.jsx` | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | modified | Availability exactly follows whether the most recently evaluated result is a finite signed whole number. |
| [CHECK-OUT-TEST:REQ-003] | `src/utils/hexadecimal.js` `src/App.jsx` `src/components/Display.jsx` | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | modified | Activation replaces only the displayed result with signed uppercase prefixed hexadecimal. |
| [CHECK-OUT-TEST:REQ-004] | `src/App.jsx` `src/components/Display.jsx` | `src/App.test.jsx` | modified | Activating the control again restores the canonical decimal result and leaves the expression unchanged. |
| [CHECK-OUT-TEST:REQ-005] | `src/App.jsx` `src/components/Display.jsx` | verification: CHECK-OUT-TEST:AC-004 | modified | In default-theme standard mode, the conversion control and converted result are visually identifiable. |

## Risks and rollback

- **Stale presentation state:** hexadecimal output could survive a new edit or evaluation. Detect with
  transition tests covering digit entry, clear, and re-evaluation; reset the toggle at each canonical
  result transition.
- **Numeric eligibility drift:** string parsing could accept fractions, `Infinity`, or error text.
  Detect with table-driven utility tests and keep all eligibility decisions in the pure helper.
- **Scope leakage:** passing the conversion props to the shared scientific display could expose the
  control outside standard mode. Detect with a mode-switching component test and wire props only in the
  standard branch.
- **Expression/history mutation:** deriving conversion from expression text or overwriting the canonical
  result could change history, memory, or restoration. Detect with expression-preservation and toggle-back
  assertions; keep the evaluator result unchanged and derive display text.
- **Visual mismatch:** the new control may be clipped or ambiguous in the default theme. Detect by reviewing
  the source-bound screenshot at the required viewport before acceptance.

Rollback is a single feature removal: delete `src/utils/hexadecimal.js` and its tests, remove hexadecimal
toggle state/wiring from `src/App.jsx`, remove the control props/markup from `src/components/Display.jsx`,
and remove the feature-specific `src/App.test.jsx` cases. No persisted data or migration requires reversal.
