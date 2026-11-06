# Release verification evidence index — bin-opr

## Approved Verification input

- Approved phase and generation: Verification generation 1.
- Approved artifact: `singularity/work-items/bin-opr/artifacts/verification/test-evidence.md`
- Captured input SHA-256: `b3d0c89eab4d1983ddbbd594995a837b8bfc0553ce513a94a7703b11280e4810`
- Approved summary SHA-256: `396dc57de60bcf1ac81b7a9069e2e6cbfc20c5796ba6ffce9cc95b5589ab4230`

## Retained test evidence

The executions below were retained under implementation generation 1, not as fresh Verification-generation runs. Both bind to implementation commit `5babc96eb6e10137fa24f9053e9a90969b4a7159` and source tree SHA-256 `d742574148196477b417abe807012762d29e62ba85317a654518e52e4d3d09a0`, matching the current source tree recorded in the release context.

| Evidence path | SHA-256 | Observed result |
|---|---|---|
| `singularity/work-items/bin-opr/context/code-delivery/tests/attempts/implementation/TA-6ad02e5338c2ff48f0ba.json` | `164793d3d81020a756375abd486098048047f66e5f4757fd8e8fbf588521e097` | Playwright: 1 discovered, 1 passed, 0 failed, 0 skipped. The browser flow calculates 12 + 3, then converts displayed 15 to binary 1111. |
| `singularity/work-items/bin-opr/context/code-delivery/tests/attempts/implementation/TA-05f7a7bfa69fecd51d86.json` | `f17ace5877a4f4206ad801900a996687f9da33e7c9c09fa7ca4719006cffff12` | Vitest: 31 passed, 0 failed, 0 skipped. Suite-level result; not by itself a clause verdict. |

## Visual evidence

| Evidence path | SHA-256 | Observed result |
|---|---|---|
| `singularity/work-items/bin-opr/evidence/binary-conversion.png` | `32e5a7b23356ccf222bbedd1b202c822ab651709b32f84326fdc207681ce285e` | Human witness `WIT-001` accepted the screenshot as demonstrating the Standard calculator display after binary conversion; it satisfies the `BIN-OPR:AC-001` converted-display review slot. |

## Gaps and limits

- The Verification-generation packet retains no structured test execution results; no fresh Verification-generation run is established here.
- Empty-value, conversion-failure, range, precision, and special-value behavior are unspecified and were not asserted.
- No dedicated security, accessibility, resilience, or observability checks are retained; no verdict is claimed for those areas.
- The approved Verification summary reports no material failure in the retained test results. Its mention of repository-wide lint failures and dependency advisories is not a retained Verification execution or an assessed finding.
