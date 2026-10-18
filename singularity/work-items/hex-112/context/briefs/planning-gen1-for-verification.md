# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-112`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/hex-112/artifacts/planning/plan.md`
- Source SHA-256: `d2b890174b700b3333375823b56a59a8775cdeff018f17785bd29529883c68e6`

## Summary from “Agent brief”

Add a hexadecimal conversion view within the existing Converter mode, keeping unit conversion
available and unchanged. Put radix conversion in a small pure utility, expose it through a focused
React component, and cover both the utility and user-visible directions with Vitest. Capture the
required converter screenshot at
`singularity/work-items/hex-112/evidence/hexadecimal-converter.png`; a screenshot's presence is not
visual acceptance. No application code is changed in this planning phase.

## Test strategy

The approved specification generation 1 packet is recorded as `no-governed-tests-in-this-packet`;
it provides no test pass to inherit. Execute the planned tests against this change. The UI tests
prove both conversion directions, while the retained screenshot is an independent visual witness;
neither file presence nor command success alone proves visual acceptance.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [HEX-112:AC-001] | `singularity/work-items/hex-112/evidence/hexadecimal-converter.png` | `src/components/HexadecimalConverter.test.jsx` | evidence | The existing calculator UI exposes the hexadecimal converter; the screenshot shows it and the automated test demonstrates both conversion directions. |
| [HEX-112:REQ-001] | `src/utils/numberBaseConverter.js`, `src/components/HexadecimalConverter.jsx`, `src/components/UnitConverter.jsx` | `src/utils/numberBaseConverter.test.js`, `src/components/HexadecimalConverter.test.jsx` | new | A decimal input is converted and its corresponding hexadecimal value is displayed. |
| [HEX-112:REQ-002] | `src/utils/numberBaseConverter.js`, `src/components/HexadecimalConverter.jsx`, `src/components/UnitConverter.jsx` | `src/utils/numberBaseConverter.test.js`, `src/components/HexadecimalConverter.test.jsx` | new | A hexadecimal input is converted and its corresponding decimal value is displayed. |
| [HEX-112:REQ-003] | `singularity/work-items/hex-112/evidence/hexadecimal-converter.png` | `src/components/HexadecimalConverter.test.jsx` | evidence | Retain the calculator screenshot and automated coverage of both conversion directions. |

## Risks and rollback

| Risk | Detection / mitigation | Rollback |
|---|---|---|
| Conversion parsing or JavaScript numeric precision could produce a misleading result at unsupported or malformed inputs. | Keep conversion isolated in pure functions; test representative valid values in each direction and malformed input; do not display a success-shaped zero for invalid input. Record any technical precision boundary without imposing an unapproved Story range. | Revert the new conversion helper and UI integration while retaining the existing unit-conversion path. |
| Adding the view could disrupt existing unit-converter controls or responsive presentation. | Retain regression coverage for mode selection and unit conversions; inspect the rendered converter and screenshot at a usable viewport. | Remove the hexadecimal view integration and component; leave the existing unit converter untouched. |
