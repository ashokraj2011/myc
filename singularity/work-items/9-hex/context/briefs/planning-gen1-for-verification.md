# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `9-hex`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/9-hex/artifacts/planning/plan.md`
- Source SHA-256: `07f16e5dd610c6e6464d134e8c9850c13fb3b716ed7b654fadec540916d63e73`

## Summary from “Agent brief”

Add a dedicated strict decimal-to-hex conversion helper and expose it through a HEX control on the
shared standard keypad, making it available in Standard and Scientific modes. Validate raw input
as canonical unsigned decimal text before conversion; do not route this operation through the
arithmetic expression evaluator. Unit tests cover accepted values and every specified invalid
boundary, UI tests cover the control and `ERR` display, and implementation evidence is retained at
`singularity/work-items/9-hex/evidence/hex-operator.png`. No governed test executions were retained
in the approved specification packet; the checks below are planned, not passed.

## Test strategy

Run the focused tests with `npm test -- src/utils/hex.test.js src/App.test.jsx`. Unit cases must
preserve raw-text validation, including empty input, signs, decimal points, whitespace, letters,
and leading zeroes; UI assertions must verify the displayed result is exactly `ERR` for invalid and
out-of-range values. The screenshot is retained evidence, not a substitute for automated behavior
checks.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [9-HEX:AC-001] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Invoking HEX on `0`, `255`, and `9007199254740991` displays `0`, `FF`, and `1FFFFFFFFFFFFF`, respectively. |
| [9-HEX:AC-002] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Empty input, `-1`, `+1`, `1.5`, whitespace-containing text, alphabetic text, and `01` display exactly `ERR`. |
| [9-HEX:AC-003] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Invoking HEX on `9007199254740992` displays exactly `ERR`. |
| [9-HEX:AC-004] | `singularity/work-items/9-hex/evidence/hex-operator.png` | not-applicable: The retained screenshot is assessed by the primary visual contract below; no executable test proves attachment. | evidence | The attached screenshot visibly documents the completed HEX control and result; no reference-image comparison is required. |
| [9-HEX:REQ-001] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | A valid decimal input is converted to uppercase base-16 digits with no prefix. |
| [9-HEX:REQ-002] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Only canonical unsigned decimal text representing a safe integer from zero through `9007199254740991` is accepted. |
| [9-HEX:REQ-003] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Empty, syntactically invalid, and out-of-range input displays the literal `ERR`. |
| [9-HEX:REQ-004] | `singularity/work-items/9-hex/evidence/hex-operator.png` | not-applicable: This screenshot evidence obligation is reviewed under the primary visual contract for 9-HEX:AC-004; no independent executable test verifies attachment. | evidence | The completed feature's screenshot is attached as implementation evidence. |

## Risks and rollback

The keypad is shared with Scientific mode, so exposing HEX there is an intentional consequence of
existing component reuse; UI tests should confirm the control works in both modes. Strict raw-text
validation must not be weakened by numeric parsing that would accept signs, whitespace, fractions,
or leading zeroes. The safe-integer check prevents lossy conversion above the specified ceiling.
If the control disrupts keypad layout or existing calculator behavior, revert the new helper,
callback, and button together, retaining unrelated calculator behavior and history. If evidence
was captured, remove or replace only this Story's screenshot after the behavior is corrected.
