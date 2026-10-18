# Release verification evidence index — hex-106

This index binds the release trace to approved Verification generation 1 and its retained execution evidence.

## Approved Verification source

- Phase: `verification`, generation 1, status `approved`.
- Artifact: `singularity/work-items/hex-106/artifacts/verification/test-evidence.md`.
- Approved-input source hash: `sha256:3a3294a493649c02c87cca9f0bfb4628ec776ad05cc8e1e3e8200588b98dbb1d`.
- Approval receipt artifact hash: `sha256:944fe1e85b0bbaa01b310e708b5fdefce5044b0acf2ae02e3b9a52e4c75adbc7`.
- Verification submission packet: `singularity/work-items/hex-106/submissions/verification/169fefdd3df73398c159e4f4f9f92db5bb3e721eb206667416f50df528c14c11.json` (packet SHA-256 `169fefdd3df73398c159e4f4f9f92db5bb3e721eb206667416f50df528c14c11`).

## Execution evidence

- Test execution record: `singularity/work-items/hex-106/context/code-delivery/tests/attempts/implementation/TA-a6f49afd42aded5a43e8.json` (SHA-256 `c782f50fd70d6cb85280de42faa3340021c86e2e92d7fd94e93991d0bcda6857`).
- Raw test report: `singularity/work-items/hex-106/context/code-delivery/tests/raw/ed2d1649df593f4672810bbc2f587f1efd997fbab33ddc4f807e1c5e1b9ef1a8.bin` (SHA-256 `ed2d1649df593f4672810bbc2f587f1efd997fbab33ddc4f807e1c5e1b9ef1a8`).
- Command: `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json`.
- Environment: repository root, Darwin `arm64`, Node `v22.14.0`.
- Candidate: commit `1d0d49c8624b9cd05647c52d5a893335cddd0d10`; source-tree SHA-256 `df3949b777138f3b768a2adca6c658879811f7ffc27b90877da2417831a3d489`, matching the current release entry's source tree.
- Observed result: passed, exit code 0; 33 tests discovered, 33 passed, 0 failed, 0 skipped.

## Clause results and gaps

| Clause | Exact observed evidence | Result |
|---|---|---|
| `HEX-106:REQ-001` | `src/utils/evaluator.test.js`: “converts positive integers to uppercase hexadecimal with a 0x prefix” passed in `TA-a6f49afd42aded5a43e8`. | Matched for tested positive integers; full numeric limits are unspecified. |
| `HEX-106:REQ-002` | The same evaluator test passed in `TA-a6f49afd42aded5a43e8`. | Matched for tested examples. |
| `HEX-106:AC-001` | The evaluator test above and `src/App.test.jsx`: “converts 123 to 0x7B from the Scientific keypad” both passed in `TA-a6f49afd42aded5a43e8`. | Matched; keypad-to-display path observed. |

The complete governed test selection passed and recorded no skips. Zero, negative, non-integer, and otherwise unsupported inputs are outside the specified positive-integer domain; their behavior is unspecified and was not established. No dedicated security, accessibility, performance, resilience, or observability properties were specified or established by this run. A separate host test-discovery message (“No tests found in the files”) is not a governed execution result and is not counted as a pass or failure here.
