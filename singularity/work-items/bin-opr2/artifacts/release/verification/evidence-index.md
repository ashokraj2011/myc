# Release verification evidence index — bin-opr2

## Approved Verification generation

Verification generation 1 is approved. Its source artifact is
`singularity/work-items/bin-opr2/artifacts/verification/test-evidence.md`
(SHA-256 `ca6a2500684e6cb8a0991f5d4330249cdc6f61745a9a7bd47fab2c096a2d6a34`).
The retained submission packet is
`singularity/work-items/bin-opr2/submissions/verification/d7ff260265d1b7c42b69db43a05a5d522e995de1b636c0312a627e3bc91e56db.json`
(packet SHA-256 `d7ff260265d1b7c42b69db43a05a5d522e995de1b636c0312a627e3bc91e56db`).
The packet records `node-tests` and `playwright-tests` as passed with matched source
binding, but contains no structured results or execution records. These are retained
status claims, not fresh Verification-generation runs or clause-verdict evidence.

## Retained implementation-generation results

The approved Verification summary reuses implementation-generation evidence. The
implementation submission is
`singularity/work-items/bin-opr2/submissions/implementation/deb4fdf43b0f46b83604662d68ad10e17468eb12f26177316b91547ee39c74c0.json`
(packet SHA-256 `deb4fdf43b0f46b83604662d68ad10e17468eb12f26177316b91547ee39c74c0`).
Its source-tree binding matched the current tree. The retained Playwright attempt
`singularity/work-items/bin-opr2/context/code-delivery/tests/attempts/implementation/TA-f5a99e08689408290e54.json`
(SHA-256 `0bf00590e179956bdad96a980daead0589efb51a9c18269a8b0fc14d2dcba030`)
passed 1/1. It reports cases 42, -42, 10.29, and -10.29. The retained unit-test
attempt `singularity/work-items/bin-opr2/context/code-delivery/tests/attempts/implementation/TA-a7a5273abf00b880ba0b.json`
(SHA-256 `895ba19aaddaf032dcb35226df7bfff107e6e3a84f9fcfbde7e71a866f9d2ce2`)
passed 31/31. Neither suite count by itself establishes clause acceptance.

## Visual evidence and gaps

The retained composite image is
`singularity/work-items/bin-opr2/evidence/bin-conversion-composite.png`
(SHA-256 `1069b2b80993d12efa244fe58c9da1f16ea0629bfb58d04c44180c05487fde58`).
Human visual review `WIT-001` is recorded as valid for `BIN-OPR2:AC-001` and
satisfies the `conversion-screen` visual slot; the bound file and candidate remain
unchanged. No separate malformed-input test is claimed. No dedicated security,
resilience, accessibility, or other non-functional checks are required or claimed
by the approved specification. Fresh Verification-generation test execution remains
unretained; this is the principal evidence gap for release conformance.
