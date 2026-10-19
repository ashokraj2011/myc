# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-901`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/hex-901/artifacts/verification/test-evidence.md`
- Source SHA-256: `2f4da079ee4f9f4e900b08b489b07518e75c0eb7bebc277f53a809d9d1f4dde7`

## Summary from “Agent brief”

The Hex action passed the targeted calculator integration suite: 22 tests passed, including positive-integer conversions, conversion of a pending expression, unsupported fractional input remaining unchanged, and action availability in Scientific mode. The retained screenshot visibly shows the calculator display as `10` without a prefix and the Hex action; its provenance identifies the captured input as 16. No functional failure was observed. Human visual acceptance is still an upstream decision and is not recorded by this verification. Recommend approval after the owning implementation approver reviews the screenshot and records that decision.

## Acceptance and specification results

| Clause | Result and evidence |
|---|---|
| `HEX-901:REQ-001` | Pass. `src/App.test.jsx` tests positive integer conversions (16 → `10`, 255 → `ff`, 4095 → `fff`) and conversion of pending expression `10 + 6` → `10`; the targeted test command passed. The source-bound implementation is in `src/App.jsx` with `@clause:HEX-901:REQ-001`; the visible action is in `src/components/StandardKeypad.jsx`. |
| `HEX-901:AC-001` | Functional test portion passes in `src/App.test.jsx`, whose cases carry `@ac:HEX-901:AC-001`. Visual artifact: `singularity/work-items/hex-901/evidence/hex-operator-16.png`; inspection shows `10` without a prefix and the Hex action. The implementation evidence identifies this as the 16-to-`10` state. Human visual acceptance remains pending with the implementation approver; image inspection here does not record that governed decision. |

## Negative, regression, security, and non-functional checks

The regression tests cover conversion of a pending expression, unchanged display for unsupported fractional input, and Hex availability in Scientific mode. No security-specific check or non-functional target was specified; no additional security or performance claim is made. Residual risk: the screenshot has not yet received its required human visual witness decision. The implementation phase's lint errors are pre-existing unused-variable/import findings reported by that producer; lint was not rerun here and they are not treated as passing verification.
