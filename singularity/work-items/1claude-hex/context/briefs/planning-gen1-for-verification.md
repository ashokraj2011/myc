# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `1claude-hex`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/1claude-hex/artifacts/planning/plan.md`
- Source SHA-256: `11b7a1d29890da0495dea1cc62ce314b0bd301d4c612f89b2c60ae4e8605f048`

## Summary from “Agent brief”

Add a focused positive-integer-to-hex conversion helper to the calculator utilities, wire a `hex`
action through the scientific keypad to App-owned display state, and leave the existing expression
evaluator and other keypad modes unchanged. Unit and App interaction tests will cover the supported
conversion and every specified unsupported input. Retain fresh screenshots of the `255` → `FF`
success state and the exact `Not supported` state. Main risks are misclassifying numeric input and
accidentally changing existing expression, history, or keypad behavior; constrain the handler to
the current scalar value and test the existing calculation flow as regression coverage.

## Test strategy

Use utility tests for positive whole-number formatting and rejection boundaries, plus App
interaction tests for the scientific toolbar, immediate display update, and each unsupported input.
Keep test files separate from product-source paths. Capture fresh screenshots from the running
candidate for the two visual states; screenshot presence is not itself a visual pass. The approved
criterion also requires automated tests for positive whole numbers, zero, negative, fractional,
empty, and non-numeric input.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `1CLAUDE-HEX:AC-001` | `singularity/work-items/1claude-hex/evidence/hex-positive-255.png`, `singularity/work-items/1claude-hex/evidence/hex-not-supported.png` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | evidence | Fresh evidence shows `255` converted to `FF` and an unsupported value displayed exactly as `Not supported`; automated tests cover the supported case and every unsupported input class. |
| `1CLAUDE-HEX:REQ-001` | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Pressing `hex` in the scientific toolbar immediately displays uppercase hexadecimal digits without a `0x` prefix or pressing `=`. |
| `1CLAUDE-HEX:REQ-002` | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Pressing `hex` for zero, a negative, a fraction, empty input, or non-numeric input displays exactly `Not supported`. |

## Risks and rollback

Input parsing could accept an unsupported value or reject a valid positive integer; unit tests must
cover all five unsupported classes and representative positive whole numbers, while App tests
confirm the exact user-visible result. Wiring the action could disturb standard keypad, arithmetic,
or history behavior; retain the existing regression suite and avoid changing those flows. The
approved specification does not define compound-expression conversion, so this plan limits the
feature to the current scalar input rather than silently adding evaluation semantics. If the
feature regresses existing behavior, revert only the hex toolbar callback, handler, helper, and
feature tests/evidence; leave unrelated calculator changes untouched.
