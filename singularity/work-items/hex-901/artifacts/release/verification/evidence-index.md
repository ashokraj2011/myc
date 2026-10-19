# Release evidence index — hex-901

## Approved Verification source

- Phase and generation: `verification` generation 1, approved.
- Exact approved artifact: `singularity/work-items/hex-901/artifacts/verification/test-evidence.md`
- SHA-256: `0c96c287eb240ff70500627a330c63245599c2e421d1179a90c93a86a49d7a1e`
- Source commit: `8c40ffaef4eb8bf5889720138822c518920e3a6b`
- Published generation commit: `e30fca8d00394f8c0943b1f6505de0b3964bcdbd`
- Source tree: commit `7139b75d276f4d46d2aed57550735a0964fb977a`, SHA-256 `f27e11f26c357d140c8236cf47891d8bbfdf76ec2a6fab32137ab2b6faf3cf18`

## Evidence and observed results

| Evidence path | SHA-256 | Observed result |
|---|---|---|
| `singularity/work-items/hex-901/artifacts/verification/test-evidence.md` | `0c96c287eb240ff70500627a330c63245599c2e421d1179a90c93a86a49d7a1e` | Approved Verification report claims 22 targeted tests passed, covering positive integer conversion, pending expressions, unsupported fractional input, and Scientific-mode availability. It names `src/App.test.jsx`; the exact test command is not retained in the approved report. |
| `singularity/work-items/hex-901/submissions/implementation/e466e0bb9d57198fb3bd2c485194d05fdb4e27a2b7fe1aee604a918fdc70ff3c.json` | `e466e0bb9d57198fb3bd2c485194d05fdb4e27a2b7fe1aee604a918fdc70ff3c` | Retained implementation execution `.-node-tests` record: 36 passed, 0 failed, 0 skipped; source binding matched the source tree above. This is implementation evidence, not a retained Verification-generation execution or a criterion verdict. |
| `singularity/work-items/hex-901/context/code-delivery/tests/attempts/implementation/TA-d7c1e80c5ad4648b7871.json` | `39bb6d0e162df68c8299ded07b7ed43074da546b778d82fbfd4c12d276188d9f` | Execution attempt for the retained implementation check: passed, 36 passed, 0 failed, 0 skipped; `vitest-json`, module-executed assurance. |
| `singularity/work-items/hex-901/evidence/hex-operator-16.png` | `fa441b44fe0fb42a575c791bdbc035b4cab6090ee61f830c38665bb05c70d742` | Recorded human visual review found the unchanged screenshot and candidate bound, and confirmed `10` without a prefix and the visible Hex action (review recorded 2026-10-19T14:46:18.124Z, after Verification publication). |

## Gaps

- Evidence consistency records no retained test execution for Verification generation 1. The reported 22-test pass therefore remains an approved producer claim, not a retained source-bound run.
- Verification's statement that visual acceptance was pending reflects its earlier publication time; the later recorded human visual review resolves that status for the unchanged screenshot and candidate.
- The implementation run is source-tree-bound and passing, but its retained aggregate counts do not by themselves establish either clause's complete acceptance.
- No security-specific check or non-functional target was specified; no security or performance result is claimed.
