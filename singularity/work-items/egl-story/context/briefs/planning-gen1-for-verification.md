# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `egl-story`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/egl-story/artifacts/planning/plan.md`
- Source SHA-256: `a58146dcb6ee0901e60267460625e3e370aa435bbc46f2650ceaf37474876967`

## Summary from “Agent brief”

The implementation should add a hex conversion flow to the calculator’s scientific UI without changing the rest of the calculator behavior. The work is centered on the UI trigger, expression evaluation, and invalid-input handling for the `hex` operation: when the user enters a positive integer and converts it, the result must be uppercase hexadecimal with no `0x` prefix; when the input is empty or invalid, the app must show an error state instead of a conversion result. We will verify with the calculator’s existing test harness and a retained screenshot proving the button and successful conversion are visible.

## Test strategy

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [EGL-STORY:AC-001] | `singularity/work-items/egl-story/evidence/hex-conversion-success.png` | `src/App.test.jsx` | evidence | The screenshot shows the hex button and a successful uppercase conversion with no `0x` prefix. |
| [EGL-STORY:REQ-001] | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A positive integer produces an uppercase hexadecimal output with no `0x` prefix. |
| [EGL-STORY:REQ-002] | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Empty input or non-positive or non-integer values show an error and no conversion result. |

## Risks and rollback

The main risk is introducing an invalid conversion path in the shared evaluator, which could affect other calculator operations. It will be detected by the existing unit and UI regression tests and by checking that invalid input resolves to `Error` while valid input formats to uppercase hex. If the feature regresses, the rollback is to remove the new hex trigger and revert the evaluator changes while maintaining the unchanged calculator behavior for all other operators.
