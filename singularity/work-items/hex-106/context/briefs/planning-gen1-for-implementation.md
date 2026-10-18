# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-106`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/hex-106/artifacts/planning/plan.md`
- Source SHA-256: `fcc27f1a96f3d4bf18a82b2cde3b016b8fbe63b5eb714060d07eda5a62f755d0`

## Summary from “Agent brief”

Add a `hex(` function entry to the Scientific keypad and implement its evaluation in the shared
expression evaluator. Keep the result in the existing calculator display/history flow. Cover the
positive-integer domain and the approved `123` → `0x7B` example with evaluator tests, then exercise
the keypad-to-display path in the App test. Principal risks are inconsistent output formatting and
accepting inputs outside the specified domain; unsupported-input behavior remains unspecified.

## Test strategy

Each clause is verified with executable tests. Evaluator tests cover the positive-integer domain,
base-16 conversion, and the exact approved example; the App test verifies that the scientific
keypad can invoke the operation and display its result. Preserve the ordinary calculator
evaluation path and verify it through the existing evaluator regression tests.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [HEX-106:AC-001] | `src/utils/evaluator.js` `src/components/ScientificKeypad.jsx` | `src/utils/evaluator.test.js` `src/App.test.jsx` | modified | Input `123` through the hex operation displays `0x7B`. |
| [HEX-106:REQ-001] | `src/utils/evaluator.js` `src/components/ScientificKeypad.jsx` | `src/utils/evaluator.test.js` | modified | The hex operation accepts positive integer input. |
| [HEX-106:REQ-002] | `src/utils/evaluator.js` `src/components/ScientificKeypad.jsx` | `src/utils/evaluator.test.js` | modified | Positive integer input yields its corresponding base-16 value. |

## Risks and rollback

The existing evaluator returns display-ready results and supports broader mathjs expressions; a
string-valued conversion could interact with later arithmetic or formatting. Verify the accepted
conversion and existing evaluator regressions, and keep the function narrowly scoped to its
positive-integer argument. If the conversion disrupts normal evaluation or keypad behavior, revert
the conversion and keypad changes together; no data migration or persistent-state change is
planned.
