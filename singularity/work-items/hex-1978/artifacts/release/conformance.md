<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-1978",
  "workType": "spec-driven-standard",
  "phase": "release",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "qa",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "qa"
    },
    "kernelModel": {
      "invoked": false,
      "status": "exact",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "changeOrigins": [
      "copilot"
    ],
    "source": {
      "kind": "in-place",
      "filename": "conformance.md",
      "mediaType": "text/markdown",
      "sha256": "ac08f28bd3db8b20074d68c84752e6c3cb1a5d8e860489d8f725ca7c740392d2",
      "bytes": 4872
    },
    "generation": 1,
    "publishedAt": "2026-10-21T17:23:46.830Z"
  },
  "sourceCommit": "0e2383f8c54eb8f32075ad4ff807206373b0f80a",
  "generationCommit": "d4c0d07c904da864f41214902b5f17d737b97370",
  "publicationCommit": "d4c0d07c904da864f41214902b5f17d737b97370",
  "configSha256": "bfb32f9f48dc5a11a1e51dcc1f3ae0b8a7732fea7b74d413a02826960e9570e3",
  "sourceSha256": "78f3669e29ca2f1aadccdcba28cf845d58b1be20e3e3524c01600c414ee2c04b",
  "template": {
    "path": "singularity/work-items/hex-1978/config/wfa/blobs/sha256/8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "sha256": "8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/release.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-1978/context/inputs-release-gen1.json",
    "sha256": "bbf50183ce40d1c4677d98a78adfb606a7bc0037718d52ab302700fa311d73c8",
    "renderedSha256": "21875e5f5eae83eb9687f1f636c7e1aa8e4732c158e1075ea1a981e8f706d267",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/hex-1978/telemetry/release-gen1.json",
      "sha256": "059688704496b2cdd947d8838b255b571c776d44c694a9be2892732aca1e6f5f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26845,
        "estimatedTokens": 6712,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26845,
        "omittedSections": 0
      },
      "captureGap": "no-metered-session"
    }
  ],
  "remoteOutputs": [],
  "usage": [
    {
      "status": "unavailable",
      "source": "copilot-otel-unavailable",
      "provider": null,
      "model": null,
      "requestedModel": null,
      "resolvedModel": null,
      "resolvedModelAssurance": "unavailable",
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-10-21T17:23:46.830Z",
      "completedAt": "2026-10-21T17:23:46.830Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": "sha256:955c099c687c61a4d6b7e705bcbbb6dd117a3d09267f5df1f75b26c2e076b8ae"
}
-->

# Release conformance — hex-1978

The final human-readable trace `[SPK:REQ-042]`. Before publication, add at least one evidence
file below this release artifact's `verification/` directory. Its source-bound index must identify
the approved Verification generation, exact evidence paths and hashes, observed results, and gaps;
this document says what that evidence proves. Do not claim a result absent from approved evidence.

## Requirement trace

Use the complete governed anchors from the approved specification, for example
`[HEX-1978:REQ-001]` and `[HEX-1978:AC-001]`. Bare display labels such as `REQ-001` do not
bind release evidence to the approved clause. Put one exact qualified approved clause ID in
each Clause row; a planned source tag or test tag alone is not a release verdict.

The clause table is the only place a verdict is stated. Under `## Upstream discrepancies`, describe each
problem and its owner, never a verdict; the engine-written Verdict summary lists each gap with the
upstream issue that covers it.

| Clause | Evidence | Verdict |
|---|---|---|
| `HEX-1978:REQ-001` | Approved Verification generation 1 reports the selected `hex conversion` interaction test in `src/App.test.jsx` exercising `2` → `2` and `15` → `f` in standard and scientific modes. Implementation generation 1 packet `032f8dc82599a96f7a9ccbe8fe58132f91d0000bf37fcc77f97566c4d6218816` retains `.‑node-tests` passing 33/33 with matched source binding; suite counts alone do not establish this clause. | matched |
| `HEX-1978:REQ-002` | Approved Verification generation 1 reports activation of the `hex` button in the same interaction test in both modes; source trace is `src/components/StandardKeypad.jsx` (`@clause:HEX-1978:REQ-002`). | matched |
| `HEX-1978:AC-001` | Screenshot `singularity/work-items/hex-1978/evidence/hex-result-2.png` shows the standard calculator displaying `2` for input `2`. The image is also visually described in approved Verification generation 1, but its human witness decision is still missing. | partial |
| `HEX-1978:AC-002` | Approved Verification generation 1 reports test `converts the displayed positive integer in %s mode` passing for both modes; source trace: `src/App.test.jsx` (`@ac:HEX-1978:AC-002`), `src/App.jsx` and `src/components/StandardKeypad.jsx`. | matched |

## Constitution conformance

Each cited or evidence-required article, and its verdict. A model may propose evidence, but the
verdict for a judged article is recorded by a human authority `[SPK:CON-044]`.

| Article | Type | Verdict | Recorded by |
|---|---|---|---|
| None | No constitution was pinned for this Story. | Not applicable | Not applicable |

## Exceptions

Every constitution exception, with article, reason, scope, authority, and expiry `[SPK:REQ-103]`.

## Deviations

Accepted deviations carried from convergence, and the authority that accepted each.

None. Convergence generation 1 recorded no human dispositions or unresolved blockers.

## Upstream discrepancies

- Verification generation 1's approved test-evidence artifact reports the scoped interaction test as passed, but its approved submission packet `ad276850c5a1c1ac9419181f280aef2cde4a062a355ec156352d48cb0368ee37` retains no test execution. Assumption: preserve the approved scoped result as a report, but do not treat it as independently packet-retained execution evidence. Impact: `HEX-1978:REQ-001`, `HEX-1978:REQ-002`, and `HEX-1978:AC-002` retain the reported test result; this release does not claim the Verification packet proves the test ran. Owner action: verification owner to retain the execution record if required.
- The visual witness for `HEX-1978:AC-001` is still owed to implementation. The screenshot is present and is described in Verification generation 1, but this report does not record a human decision. Owner action: the implementation approver must inspect the image and record the witness.

## Self-approval disclosures

A conformance report discloses every phase approved by the identity that produced it, with that
identity, so self-approval is never read as independent review.

Recorded from the retained approvals. Keep every line.

- `specification`: self-approved by ashokraj2011; not an independent review.
- `planning`: self-approved by ashokraj2011; not an independent review.
- `implementation`: self-approved by ashokraj2011; not an independent review.
- `convergence`: self-approved by ashokraj2011; not an independent review.
- `verification`: self-approved by ashokraj2011; not an independent review.
- `release`: not yet approved; no release approver identity is recorded.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: convergence

<!-- source=singularity/work-items/hex-1978/artifacts/convergence/convergence.md sha256=2c58064116cfd385797c25e8fb44e28642cc75eb4e0e7ad37fd02ca31b6d22b8 status=captured projection=full representation-sha256=sha256:a1b78778160c52cda6b5db4c939e03373a3c03635b21f0534c87955c32a95d4f expansion=sfref:v1:story:hex-1978:ccb5810c5f92023121863c25bead60cd80766a2dcddb01d76eaabe64db1eb180 -->

# Convergence — hex-1978

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `83ffe4bea7e8ccf74f08e6f170ee449d6bc53e3f9ebcbfa777dfdc79d6b99ac2`
- Reconciliation SHA-256: `aadb0cda04de65a9b4d3bfeb520a878911ea53356f8a53910bf095f845d33079`
- Source target: `7c3d4c763e1428b9090153244d4b304faeeeb7f4`

## Deterministic facts

- No deterministic trace-evidence gaps were found.

## Assisted candidates

- No assisted candidates are bound to this iteration.

## Findings and dispositions

| Finding | Item | Clauses | Disposition | Reason |
|---|---|---|---|---|
| — | — | — | — | No human dispositions recorded. |

## Unresolved blockers

- None.

## Allowed next actions

- `advance-to-verification`

> Exact source expansion: `sfref:v1:story:hex-1978:ccb5810c5f92023121863c25bead60cd80766a2dcddb01d76eaabe64db1eb180`. Use `singularity-flow show sfref:v1:story:hex-1978:ccb5810c5f92023121863c25bead60cd80766a2dcddb01d76eaabe64db1eb180 --section "<heading>"` only when exact wording is needed.

## Approved phase input: verification

<!-- source=singularity/work-items/hex-1978/artifacts/verification/test-evidence.md sha256=c0b780aae223ad1bb66df0074437e4959ea4be4a9e930410bf1f4cc0b81613c5 status=captured projection=approved-summary representation-sha256=sha256:6d49d702a30c790159e46a66ce15377833098264ba921777da6b802f67def2fe brief-sha256=6d49d702a30c790159e46a66ce15377833098264ba921777da6b802f67def2fe expansion=sfref:v1:story:hex-1978:d187c6a07d00e377e120961d52f9143dcf93852f853730bb5a2814901a096733 -->

# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-1978`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/hex-1978/artifacts/verification/test-evidence.md`
- Source SHA-256: `2e1e1b09506ee4a0bb988e7cb4d38db9adcbe1a2a1e345ac4e83b65d468b621e`

## Summary from “Agent brief”

The scoped verification passed: the App interaction test verifies the `hex` button and decimal `2` → hexadecimal `2` in both standard and scientific modes, and also checks `15` → `f`. The retained screenshot at `singularity/work-items/hex-1978/evidence/hex-result-2.png` was visually inspected and shows the standard calculator displaying `2`. No failure was observed in these checks. This is a scoped verification, not a full-suite or release certification; behavior outside positive-integer conversion remains unspecified. Recommend downstream review with that scope limitation visible.

## Acceptance and specification results

| Clause | Result | Evidence |
|---|---|---|
| `HEX-1978:REQ-001` | Passed for tested positive integers | The selected `hex conversion` interaction test in `src/App.test.jsx` exercises `15` → `f` and `2` → `2` in both modes. Source trace: `src/App.jsx` (`@clause:HEX-1978:REQ-001`) and `src/components/StandardKeypad.jsx` (`@clause:HEX-1978:REQ-001`). |
| `HEX-1978:REQ-002` | Passed | The same interaction test activates the `hex` button in both modes. Source trace: `src/components/StandardKeypad.jsx` (`@clause:HEX-1978:REQ-002`). |
| `HEX-1978:AC-001` | Visually verified | `singularity/work-items/hex-1978/evidence/hex-result-2.png` visibly shows result `2` for input `2`. This is a manual visual check, not an executable test. |
| `HEX-1978:AC-002` | Passed | `src/App.test.jsx` (`@ac:HEX-1978:AC-002`), test `converts the displayed positive integer in %s mode`; selected command passed both parameterized mode cases. Source trace: `src/App.jsx` (`@clause:HEX-1978:AC-002`) and `src/components/StandardKeypad.jsx` (`@clause:HEX-1978:AC-002`). |

## Negative, regression, security, and non-functional checks

The selected interaction checks cover the requested positive-integer examples and both keypad modes. No separate negative, zero, non-integer, accessibility, security, resilience, or non-functional checks were run; zero, negative, and non-integer behavior is outside the confirmed scope, and no non-functional requirement is specified. No defects were observed in the scoped checks. Residual risk: the full suite and build were not run in this verification.

> Exact source expansion: `sfref:v1:story:hex-1978:d187c6a07d00e377e120961d52f9143dcf93852f853730bb5a2814901a096733`. Use `singularity-flow show sfref:v1:story:hex-1978:d187c6a07d00e377e120961d52f9143dcf93852f853730bb5a2814901a096733 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

## Verdict summary

<!-- singularity-flow:verdict-summary:start -->
Engine-written from the clause table; keep it. The table is the only place a verdict is stated.

- `HEX-1978:AC-001`: partial; no issue raised yet; implementation owns it.
<!-- singularity-flow:verdict-summary:end -->
