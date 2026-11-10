# Release verification evidence index

This index binds the retained test evidence to approved Verification generation 1 and its source.
It records retained evidence, not a new release-phase execution or human approval.

## Approved source

- Verification artifact: `singularity/work-items/new-graph-plot/artifacts/verification/test-evidence.md`
- Artifact SHA-256: `fa4174a81f9356df28f8f02217d0c72c01abfa6055be4d87ad93d9bf1379c57b`
- Approved phase/generation: verification generation 1
- Evidence source commit: `ffc90e9fe83400e573693359a15ca9084d99f45d`
- Source tree SHA-256: `d3d3277704faa5d90d92cbf007f6de31bd1501971d5b309472f09140cdad7b09`

## Retained execution records

| Check | Exact execution record and SHA-256 | Result artifact and SHA-256 | Observed result |
|---|---|---|---|
| Playwright | `singularity/work-items/new-graph-plot/context/code-delivery/tests/attempts/implementation/TA-67b500ae70ed5473eb3d.json` — `54e59d4e4dd7b007ad077be630f05387077d11632ce235b5123ba8045d1cfc1a` | `.sflow/results/playwright-tests.json` — `7d122aafdd7b1e35b7937e1f913f3ed2ab8459bbcd975d720edace00d1db9b5a` | Passed, exit 0; 2 discovered, 2 passed, 0 failed, 0 skipped. The function case observed y=x near (1,1); the circle case sampled 48 perimeter positions for center (0,0), radius 6. |
| Vitest | `singularity/work-items/new-graph-plot/context/code-delivery/tests/attempts/implementation/TA-69d5b63120aa82c94965.json` — `19becd5e0a29cdfcaa989acc81c803b76d8c78a4f8d15b81fba375e5504aa144` | `.sflow/results/node-tests.json` — `9414be40286be5fc1ac48ef60a6bbf3e7e2fdea1c0204548e3041323c5dabbd2` | Passed, exit 0; 31 discovered, 31 passed, 0 failed, 0 skipped. This is regression evidence, not the clause-specific witness. |

Both records are retained from implementation generation 1 and are bound to the source tree above.
Verification generation 1 reuses these matching records and retains the Playwright clause witnesses;
the attempt identifiers and results therefore remain attributed to implementation.

## Gaps and limits

- These retained results do not constitute a fresh release publication test run; required publication checks remain outstanding.
- No separate build or lint execution record is identified in these retained test records.
- The browser evidence samples the named function landmark and 48 circle perimeter positions; it does not establish behavior across every viewport or device-pixel ratio.
- The approved Verification evidence specifies no graph-specific negative behavior or non-functional targets. No additional negative, accessibility, security, or performance verdict is inferred here.
