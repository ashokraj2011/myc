# Release evidence index — hex-1978

This index binds the evidence cited by `conformance.md` to the current source tree and approved Verification generation. It records provenance and observations; it does not create a test result or human acceptance decision.

## Source binding

- Work item: `hex-1978`
- Current source tree SHA-256: `955c099c687c61a4d6b7e705bcbbb6dd117a3d09267f5df1f75b26c2e076b8ae`
- Approved Verification generation: 1
- Verification artifact: `singularity/work-items/hex-1978/artifacts/verification/test-evidence.md`
- Captured approved-input SHA-256: `c0b780aae223ad1bb66df0074437e4959ea4be4a9e930410bf1f4cc0b81613c5`
- Verification source SHA-256 recorded by the approved input: `2e1e1b09506ee4a0bb988e7cb4d38db9adcbe1a2a1e345ac4e83b65d468b621e`
- Verification submission packet: `singularity/work-items/hex-1978/submissions/verification/ad276850c5a1c1ac9419181f280aef2cde4a062a355ec156352d48bc0368ee37.json`

## Evidence and observations

| Evidence path | SHA-256 | Observation |
|---|---|---|
| `singularity/work-items/hex-1978/evidence/hex-result-2.png` | `76c03d71aeb50d8c222356cb2ade6e1d159a142c118de7aeb9e5baa44f4a29f7` | Image shows the Standard calculator with input `2` and displayed result `2`; the `hex` action is visible. |
| `singularity/work-items/hex-1978/artifacts/verification/test-evidence.md` | `2e1e1b09506ee4a0bb988e7cb4d38db9adcbe1a2a1e345ac4e83b65d468b621e` (source SHA-256 declared by the approved input) | Approved Verification summary reports the button interaction and positive-integer conversions, including `2` → `2` and `15` → `f` in both modes. |
| `singularity/work-items/hex-1978/submissions/implementation/032f8dc82599a96f7a9ccbe8fe58132f91d0000bf37fcc77f97566c4d6218816.json` | Packet `032f8dc82599a96f7a9ccbe8fe58132f91d0000bf37fcc77f97566c4d6218816` | Retained `.‑node-tests` outcome: passed, 33 discovered, 33 passed, 0 failed, 0 skipped; source binding matched. This aggregate does not by itself establish individual clause verdicts. |
| `singularity/work-items/hex-1978/artifacts/implementation/implementation-summary.md` | Not supplied in this phase's approved evidence. | Its approved brief describes targeted tests, but this index does not claim a file hash or use narrative as an execution receipt. |

## Gaps and limits

- Verification generation 1's submission packet has no retained test execution. The approved artifact's reported outcome is preserved as a report, not elevated to packet-retained execution proof.
- The human visual witness for `HEX-1978:AC-001` is missing. The screenshot was inspected for this report, but only the implementation approver may record the governed witness decision.
- The recorded implementation run covers the suite counts only; no clause-level verdict is inferred from those counts.
- No separate negative, zero, non-integer, accessibility, security, resilience, or non-functional checks were reported; unsupported numeric cases remain outside the confirmed scope.
