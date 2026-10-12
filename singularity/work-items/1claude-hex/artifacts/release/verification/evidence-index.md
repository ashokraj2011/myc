# Release verification evidence index — 1claude-hex

This index is bound to approved Verification generation 1:

- Approved source: `singularity/work-items/1claude-hex/artifacts/verification/test-evidence.md`
- Approved source SHA-256: `cf05d50f513be2eb96532407f96ea558ba006316d926baf57dfa48f342407ca0`
- Approved Verification packet SHA-256: `be861d30f534c1de9239584eacd96b8becbc8b318048b30228b4fb0e0d4cf2ff`
- Candidate source-tree SHA-256: `6b20784e68e9a9db660d274c82cf8cb25a4399cd7ca0bd5b047bfd17273948cd`
- Retained test execution: `singularity/work-items/1claude-hex/context/code-delivery/tests/attempts/implementation/TA-c877917424c3dd2459c2.json`
- Retained test execution SHA-256: `dda109df3fdba51a4666daffb489a38bef7161649ed64f61a8c6e0fe5320b775`

| Evidence path | SHA-256 | Observed result |
|---|---|---|
| `singularity/work-items/1claude-hex/evidence/hex-positive-255.png` | Not exposed in the approved Verification record; file hash unavailable here. | Approved Verification reports visual inspection of `255` displaying `FF`. |
| `singularity/work-items/1claude-hex/evidence/hex-not-supported.png` | Not exposed in the approved Verification record; file hash unavailable here. | Approved Verification reports visual inspection of zero displaying exactly `Not supported`. |
| `singularity/work-items/1claude-hex/context/code-delivery/tests/attempts/implementation/TA-c877917424c3dd2459c2.json` | `dda109df3fdba51a4666daffb489a38bef7161649ed64f61a8c6e0fe5320b775` | Matched retained execution: 46 passed, 0 failed, 0 skipped, on the candidate source tree. |

## Gaps and limits

- Exact screenshot-file hashes are not included in the approved Verification record and were not
  independently obtained. The source-tree hash above binds the tested candidate, but is not a
  substitute for either screenshot's individual hash.
- The screenshot paths and visual observations are reported by approved Verification generation
  1; this release authoring has not independently re-opened or re-inspected those images.
- No dedicated security, accessibility, resilience, or observability checks were run. The approved
  Verification report records no such applicable Story criterion or non-functional requirement.
- The test execution was retained from implementation and was not freshly run during Verification.

No result beyond the approved Verification report is asserted by this index.
