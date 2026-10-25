# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `planning` generation 2
- Consumer: `implementation`
- Source: `singularity/work-items/fact-01/artifacts/planning/plan.md`
- Source SHA-256: `b2222c3dfd3a85fe77cbdc5d45c499dda2ff1e8347db8f6676b3e5880cdf405f`

## Summary from “Agent brief”

Add a callable nCr calculation alongside the existing evaluator utilities, then expose it through a focused calculator UI with separate n and r inputs and an explicit calculate action. Keep validation in the callable function so both direct callers and the UI share the same positive-integer and r > n behavior. Verify the function and UI with Vitest, and capture the required representative result as source-bound screenshot evidence. The main risks are input/result precision at large values and ensuring invalid or incomplete inputs never leave a stale result visible.

## Test strategy

Use the unit tests for deterministic function behavior and application-level interaction tests for UI submission and result state. Retain the visual evidence separately; automated test success does not constitute visual acceptance.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `FACT-01:AC-001` | `singularity/work-items/fact-01/evidence/ncr-result.png` | verification: FACT-01:AC-001 | evidence | Screenshot shows n = 5, r = 2 and the displayed result 10. |
| `FACT-01:REQ-001` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | The callable function returns an exact BigInt count; nCr(5, 2) is 10n and nCr(67, 33) is 14226520737620288370n. |
| `FACT-01:REQ-002` | `src/components/CombinationCalculator.jsx` `src/App.jsx` | `src/App.test.jsx` | modified | A user can enter both values, request a calculation, and see the valid result. |
| `FACT-01:REQ-003` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | Positive integer inputs with r > n return 0. |
| `FACT-01:REQ-004` | `src/utils/evaluator.js` `src/components/CombinationCalculator.jsx` | `src/utils/evaluator.test.js` `src/App.test.jsx` | modified | Non-integer, non-positive, or missing values produce no nCr result. |

## Risks and rollback

The callable API will return `BigInt`; callers must not coerce its result to `Number`, and the UI must render the decimal string directly. This preserves exact integer counts without imposing an input-size cap in the feature contract. Very large inputs may still require substantial computation, so use the symmetry-reduced algorithm and avoid duplicating the calculation. Invalid or incomplete submissions can leave stale output visible, so tests must assert that no nCr result is produced in those states. The change is isolated to the new utility behavior and focused UI; rollback can remove the component integration and utility export while retaining existing calculator modes and evaluator behavior.
