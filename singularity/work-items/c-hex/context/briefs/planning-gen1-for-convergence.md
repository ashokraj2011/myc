# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `planning` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/c-hex/artifacts/planning/plan.md`
- Source SHA-256: `efcd52f6b4311de0c47173033ccdffc777c7975cc831470cf3c2f2f379952cb6`

## Summary from “Agent brief”

Add a minimal browser-side conversion flow to the existing calculator application: render a conversion input and action in the main UI, validate the supported domain (positive base-10 whole numbers greater than zero), and surface exactly `Not Supported` for every invalid value. The change is constrained to the current browser app and is verified with a small UI regression suite that exercises the supported and unsupported cases and retains screenshot evidence.

## Test strategy

The implementation will prove each authoritative requirement with the app-level regression test file so the primary path and the unsupported domain are checked end-to-end in the browser.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `c-hex:REQ-001` | `src/App.jsx`, `src/App.css` | `src/App.test.jsx` | new | The browser page accepts a value and performs hexadecimal conversion without introducing a new backend or privileged flow. |
| `c-hex:REQ-002` | `src/App.jsx` | `src/App.test.jsx` | new | A supported positive whole number displays its uppercase hexadecimal form with no `0x` prefix. |
| `c-hex:REQ-003` | `src/App.jsx` | `src/App.test.jsx` | new | Every valid result uses uppercase hexadecimal characters and omits the `0x` prefix. |
| `c-hex:REQ-004` | `src/App.jsx` | `src/App.test.jsx` | new | Empty, zero, negative, decimal, and non-numeric values all display exactly `Not Supported`. |
| `c-hex:REQ-005` | `singularity/work-items/c-hex/evidence/verification/hex-conversion-success.png`, `singularity/work-items/c-hex/evidence/verification/hex-conversion-not-supported.png` | `src/App.test.jsx` | evidence | Screenshot evidence shows the implemented browser page with a successful conversion and a `Not Supported` outcome. |
| `c-hex:AC-001` | `src/App.jsx` | `src/App.test.jsx` | new | Entering `255` and requesting conversion displays exactly `FF`. |
| `c-hex:AC-002` | `src/App.jsx` | `src/App.test.jsx` | new | Entering `1` and requesting conversion displays exactly `1`. |
| `c-hex:AC-003` | `src/App.jsx` | `src/App.test.jsx` | new | Supported results use uppercase characters and omit the `0x` prefix. |
| `c-hex:AC-004` | `src/App.jsx` | `src/App.test.jsx` | new | Empty, `0`, negative, decimal, and non-numeric input each display exactly `Not Supported`. |
| `c-hex:AC-005` | `singularity/work-items/c-hex/evidence/verification/hex-conversion-success.png`, `singularity/work-items/c-hex/evidence/verification/hex-conversion-not-supported.png` | `src/App.test.jsx` | evidence | Retained screenshots show at least one supported result and the `Not Supported` outcome. |

## Risks and rollback

The primary risk is implementing the validation incorrectly, such as accepting `0`, decimals, or non-numeric input, or returning lowercase or prefixed output. These errors are detected by the focused browser regression tests and by reviewing the retained screenshot evidence. If the UI or validation logic drifts from specification, the rollback path is to revert the conversion-only changes in the app entry file while keeping the rest of the calculator behavior unchanged; no authentication, persistence, or conversion-history work is coupled to the feature.
