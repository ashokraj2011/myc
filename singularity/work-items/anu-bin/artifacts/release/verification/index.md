# Release verification evidence index — anu-bin

## Binding

- Approved Verification generation: 3
- Approved artifact: `singularity/work-items/anu-bin/artifacts/verification/test-evidence.md`
- Approved artifact SHA-256: `b39a22fddb2f1eed76b146565aa1a48a7fe449f1b4f395a38f5e82112a4d02b0`
- Approved Verification packet: `singularity/work-items/anu-bin/submissions/verification/507685d09fbb1562c99190ff4ef3f8ee95aafbb95bbc71ec2053e17b2c8cd263.json`
- Packet SHA-256: `507685d09fbb1562c99190ff4ef3f8ee95aafbb95bbc71ec2053e17b2c8cd263`
- Source tree SHA-256: `b6445b8544a8faafd9bef05772c68138a3868d1aaa98935c21c3c3cb7a1ce1c2`

## Exact execution evidence

- Attempt: `TA-c7b76e50714f1641b5a0`
- Evidence path: `singularity/work-items/anu-bin/context/code-delivery/tests/attempts/implementation/TA-c7b76e50714f1641b5a0.json`
- Evidence SHA-256: `047085279569ca8338473ceb197e9eb26d864d280777a34c945833ee30aa8d9f`
- Recorded by: implementation generation 1; reused by approved Verification generation 3 against the same source tree.
- Result: Node 22 test run passed; 34 discovered, 34 passed, 0 failed, 0 skipped.
- Limit: structured suite success alone does not establish either acceptance-clause verdict; the packet records `requires-bound-witness-evaluation`.

## Clause evidence and gaps

- `ANU-BIN:REQ-001`: planned source trace in `src/utils/evaluator.js`, `src/App.jsx`, and `src/components/StandardKeypad.jsx`; `src/App.test.jsx` exercises Standard-mode BIN interaction. The retained suite result is bound to the same source tree, but does not independently establish clause acceptance.
- `ANU-BIN:AC-001`: `src/utils/evaluator.test.js` contains conversion unit tests tagged `@ac:ANU-BIN:AC-001`. The retained suite result does not identify individual test cases or establish this criterion's verdict.
- No fresh publication test is retained. The separate Node 26 App diagnostic failed before test bodies because `localStorage` was undefined; it is not a passing result.
- Fractional-value behavior, numeric limits, output formatting, and other unspecified negative, boundary, accessibility, security, resilience, or observability behavior are not claimed as verified.
