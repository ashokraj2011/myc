# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/fact-01/artifacts/verification/test-evidence.md`
- Source SHA-256: `8a09f81dbe7605d0ecee4a1d339053e1546cc2708a3ed935a519b5eb4474086b`

## Summary from “Agent brief”

The implementation submission records 44 tests passed, 0 failed, and 0 skipped, bound to source commit `e1d21081e36b8d239a24413f8f6d3abf3ffc811f` (tree `sha256:08da5be72df383ee81b97338bbb5cfc4d30ac5088384e9a4a20351c6a88075ff`). Its test evidence covers the nCr utility and calculator flow; the retained projection does not itself establish individual clause verdicts. The approved implementation artifact reports a successful production build and a screenshot showing 5 choose 2 = 10. No fresh visual inspection was performed in this verification draft. Residual risk: very large central combinations may take substantial time. Recommendation: retain the disclosed evidence gaps and require the configured publication checks and human review before approval.

## Acceptance and specification results

| Clause | Verification evidence and result |
|---|---|
| `FACT-01:REQ-001` | Retained implementation execution: `src/utils/evaluator.test.js` is the planned executable test file; packet reports suite-wide 44/44 pass, 0 failures, source-bound. The approved implementation report describes exact `BigInt` cases including 5 choose 2 and 67 choose 33. Individual test names/results and clause verdict are not established by the packet. Planned source: `src/utils/evaluator.js`, tagged per the approved implementation report. |
| `FACT-01:REQ-002` | Retained implementation execution includes the planned `src/App.test.jsx`; suite-wide result 44 passed, 0 failed. The approved implementation report describes the calculator interaction test, but the retained packet does not isolate this clause's result. Planned sources: `src/components/CombinationCalculator.jsx` and `src/App.jsx`, tagged per the approved implementation report. |
| `FACT-01:REQ-003` | Retained implementation execution includes `src/utils/evaluator.test.js`; suite-wide result 44 passed, 0 failed. The approved implementation report says tests cover `r > n`; individual test verdict is not established by the packet. Planned source: `src/utils/evaluator.js`, tagged per the approved implementation report. |
| `FACT-01:REQ-004` | Retained implementation execution includes `src/utils/evaluator.test.js` and `src/App.test.jsx`; suite-wide result 44 passed, 0 failed. The approved implementation report says invalid and incomplete cases are covered; individual test verdict is not established by the packet. Planned sources: `src/utils/evaluator.js`, `src/components/CombinationCalculator.jsx`, tagged per the approved implementation report. |
| `FACT-01:AC-001` | Manual visual evidence is recorded at `singularity/work-items/fact-01/evidence/ncr-result.png`; the approved implementation report says it shows n=5, r=2, result=10. No fresh visual inspection or hash-bound visual review is present in the retained evidence. |

## Negative, regression, security, and non-functional checks

The suite-wide retained test execution is matched to the implementation source tree, but command success and aggregate counts do not prove each clause independently. Earlier phase packets retain no test execution for specification, planning, or convergence; this does not establish that no tests ran. The authored implementation report's 43-test count conflicts with the retained packet's 44-test count and remains unresolved. No fresh negative/security/non-functional verification was performed. The approved implementation report notes that very large central nCr inputs may be expensive; no maximum input size was specified. The prior lint report records 19 repository-wide errors (exit 1), and the prior build report notes the large-chunk advisory. No separate accessibility or security test result is retained. No configuration or documentation outcomes are claimed; tags are not applicable because the clauses concern product behavior and visual evidence, not configuration or documentation.
