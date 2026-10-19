# Release verification evidence index — bin-501

This index is bound to the approved Verification generation 1 and records the exact
evidence inputs, observed results, and limits used by the release conformance report.
Hashes are SHA-256 of the named files.

## Source binding

- Work: `bin-501`
- Approved phase: `verification`, generation 1
- Immutable Verification packet:
  `singularity/work-items/bin-501/submissions/verification/be59e0baae85dd10598f2459c9e6462a1ec766e241fb7c0b2b30f12532782d41.json`
- Packet SHA-256: `869b4e4dc32a5f5d5798c4d1687e7d950f2e5e0ca30e510fa114cf8186671fa6`
- Approved Verification report:
  `singularity/work-items/bin-501/artifacts/verification/test-evidence.md`
- Report SHA-256: `cdd2987d164fd880800b7d991a0d5e574a4f58e3e1c25410764efa4bb6205ace`
- Approved Verification report's stated observation: 15 focused evaluator tests passed; screenshot shows decimal input `13` and binary result `1101`.
- Immutable packet observation: no governed test execution/check records are retained for Verification generation 1. Therefore the report's 15-test execution claim is not independently established by that packet.

## Evidence files

| Path | SHA-256 | Observed result / use |
|---|---|---|
| `src/utils/evaluator.test.js` | `ea75963fab21765cbbf7bea3da8ddcea1adacba896c4922eb5789da4f35f8dc4` | Contains the conversion test source cited by the approved Verification report; source presence alone is not a test result. |
| `singularity/work-items/bin-501/evidence/decimal-to-binary.png` | `65c5a8a90dadcc20f203b001241766718536b8cc0c5d8d687da06bb3b0a0a82e` | Approved Verification report describes the screenshot as input 13 with result 1101. Human visual acceptance remains outstanding. |
| `singularity/work-items/bin-501/submissions/implementation/bcafe64a594588e9d12639f76203e778ba57c3d843256f74d7624cdb485e9d9e.json` | `46758ac4429a78ea11cf80825eae965e9efb00585567d0b88d311d8b42fba870` | Retained implementation generation 1 packet; recorded test execution is bound to the current source tree and reports 33 passed, 0 failed, 0 skipped. This is implementation-phase evidence, not a Verification-phase rerun. |
| `singularity/work-items/bin-501/context/code-delivery/tests/attempts/implementation/TA-bbef1890ef2f7ef6828b.json` | `dfbe7880fea5ba2d00ae5a4a3d17c94a064cf0ff4e3403190b99f6bd2afb5cb1` | Structured Vitest execution record for the implementation run: 33 discovered, 33 passed, 0 failed, 0 skipped; criterion verdict still requires bound-witness evaluation. |

## Gaps and limits

- Verification generation 1 retains no governed execution record; its reported 15-test pass is therefore not claimed as a retained test result.
- The available 33-test implementation run establishes only its recorded suite result and does not replace a Verification-phase execution or prove every requirement.
- Screenshot presence and its approved description do not constitute human visual acceptance.
- Fractional and invalid input behavior, numeric bounds, security behavior, and non-functional thresholds remain unspecified or untested as stated in the approved Verification report.
