<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-opr2",
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
      "sha256": "418b30d71818c320ec40895cc4886e4d8bf8399347c56a21a3a1c9cbe53e881c",
      "bytes": 3566
    },
    "generation": 1,
    "publishedAt": "2026-11-06T13:55:27.894Z"
  },
  "sourceCommit": "8b6e0a9f5a423802bded89ed0b155e4afaa3c9a9",
  "generationCommit": "ee8f3d306d0240c92869539cca8fe529591dd117",
  "publicationCommit": "ee8f3d306d0240c92869539cca8fe529591dd117",
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "9691c2b1a5ce2dbb46a9db942f9f931dc87fb221d7bcb684773ad21cc7ef8536",
  "template": {
    "path": "singularity/work-items/bin-opr2/config/wfa/blobs/sha256/8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "sha256": "8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/release.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/bin-opr2/context/inputs-release-gen1.json",
    "sha256": "736d9b54455419fcab392be21d24f31bddb96ffbdf4bdcab603a69f23be5e173",
    "renderedSha256": "7143f662a9b0bf1e3a4b67f61c8a90fbd95dd67838ec214036ee81b3f392d950",
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
      "path": "singularity/work-items/bin-opr2/telemetry/release-gen1.json",
      "sha256": "57f54cd3cf419d0c6f7712915d65d3702c2935f2cf50e210f1199920a9d1545b",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 34565,
        "estimatedTokens": 8642,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 34565,
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
      "startedAt": "2026-11-06T13:55:27.894Z",
      "completedAt": "2026-11-06T13:55:27.894Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": "sha256:91ec53031f1bb2814bfeeba539d6c91049bd0d092049bed53655e4b7231e4e22"
}
-->

# Release conformance — bin-opr2

The final human-readable trace `[SPK:REQ-042]`. Before publication, add at least one evidence
file below this release artifact's `verification/` directory. Its source-bound index must identify
the approved Verification generation, exact evidence paths and hashes, observed results, and gaps;
this document says what that evidence proves. Do not claim a result absent from approved evidence.

## Requirement trace

Use the complete governed anchors from the approved specification, for example
`[BIN-OPR2:REQ-001]` and `[BIN-OPR2:AC-001]`. Bare display labels such as `REQ-001` do not
bind release evidence to the approved clause. Put one exact qualified approved clause ID in
each Clause row; a planned source tag or test tag alone is not a release verdict.

The clause table is the only place a verdict is stated. Under `## Upstream discrepancies`, describe each
problem and its owner, never a verdict; the engine-written Verdict summary lists each gap with the
upstream issue that covers it.

| Clause | Evidence | Verdict |
|---|---|---|
| `BIN-OPR2:REQ-001` | Retained Playwright attempt `TA-f5a99e08689408290e54` passed (1/1), with matched source-tree binding; see [verification evidence index](./verification/evidence-index.md). | partial — the approved Verification generation has no retained structured test execution, so the retained suite pass alone does not establish clause acceptance. |
| `BIN-OPR2:REQ-002` | Retained Playwright attempt `TA-f5a99e08689408290e54` reports passing cases 42, -42, 10.29, and -10.29; see [verification evidence index](./verification/evidence-index.md). | partial — the approved Verification generation has no retained structured test execution, so the retained cases alone do not establish clause acceptance. |
| `BIN-OPR2:AC-001` | Retained tagged Playwright attempt `TA-f5a99e08689408290e54` passed (1/1); visual review `WIT-001` is valid for the composite image and its unchanged SHA-256; see [verification evidence index](./verification/evidence-index.md). | partial — visual review satisfies its slot, but no retained Verification-generation test execution establishes the test portion of acceptance. |

## Constitution conformance

Each cited or evidence-required article, and its verdict. A model may propose evidence, but the
verdict for a judged article is recorded by a human authority `[SPK:CON-044]`.

| Article | Type | Verdict | Recorded by |
|---|---|---|---|
| None | Constitution | None: this Story pinned no constitution. | Not applicable |

## Exceptions

None recorded; this Story pinned no constitution.

## Deviations

None recorded in approved convergence generation 1.

## Self-approval disclosures

A conformance report discloses every phase approved by the identity that produced it, with that
identity, so self-approval is never read as independent review.

Recorded from the retained approvals. Keep every line.

- `specification`: self-approved by ashokraj2011; not an independent review.
- `planning`: self-approved by ashokraj2011; not an independent review.
- `implementation`: self-approved by ashokraj2011; not an independent review.
- `convergence`: self-approved by ashokraj2011; not an independent review.
- `verification`: self-approved by ashokraj2011; not an independent review.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: convergence

<!-- source=singularity/work-items/bin-opr2/artifacts/convergence/convergence.md sha256=a4cb6737b75c8bb66a32a6237a7163b56956eec5644bdcb824512935a0060e64 status=captured projection=full representation-sha256=sha256:b47c75986a7005ebd8213f357cfe15354a0010ba51052b64f8aafe83854edde1 expansion=sfref:v1:story:bin-opr2:ecbe5ada120db0a4459df81a09aa3c3322b9d1a77ce969dbc28559467fa939bb -->

# Convergence — bin-opr2

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `cc9b231ebe73847deaa935cb3634e640eb2ec1a31f58ff2ebdc9053289f7fd2b`
- Reconciliation SHA-256: `f28db7e023a42a42f1336dc00db5994d2f380f08a7a834fdcc7f04f07ea4187f`
- Source target: `3d3dc5c217fb97a18c20ffde0afdfb88576a89b2`

## Deterministic facts

- No deterministic trace-evidence gaps were found.

## Settled by the approved plan

These changed paths no claim cites are ones the approved plan already accounts for, so no person is asked about them again.

- **CF-21034d278357** · package.json · Supporting file of planning generation 4 · build-configuration: add the Playwright test command and browser-test dependency.
- **CF-418b395c70fc** · package-lock.json · Supporting file of planning generation 4 · dependency-lock: lock the declared Playwright dependency.
- **CF-82d0ecf747f0** · playwright.config.js · Supporting file of planning generation 4 · build-configuration: configure the local Vite application and browser test execution.
- **CF-fcfa04dc67b1** · .nvmrc · PAM-001 · build-configuration: Tests need Node 22; Vitest's jsdom fails on Node 26.

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

> Exact source expansion: `sfref:v1:story:bin-opr2:ecbe5ada120db0a4459df81a09aa3c3322b9d1a77ce969dbc28559467fa939bb`. Use `singularity-flow show sfref:v1:story:bin-opr2:ecbe5ada120db0a4459df81a09aa3c3322b9d1a77ce969dbc28559467fa939bb --section "<heading>"` only when exact wording is needed.

## Approved phase input: verification

<!-- source=singularity/work-items/bin-opr2/artifacts/verification/test-evidence.md sha256=ca6a2500684e6cb8a0991f5d4330249cdc6f61745a9a7bd47fab2c096a2d6a34 status=captured projection=approved-summary representation-sha256=sha256:10b4668497f4a3a26efd919cae6e9e0cca1457be59f8845b7a7132c14290fd6c brief-sha256=10b4668497f4a3a26efd919cae6e9e0cca1457be59f8845b7a7132c14290fd6c expansion=sfref:v1:story:bin-opr2:826fcfd1e7e82262d464aab774af23c2967d6fa7121c3dc996c87469fd99497e -->

# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr2`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/bin-opr2/artifacts/verification/test-evidence.md`
- Source SHA-256: `2612671ec3b19243c634e84287ba5db044a8cc07caa16d092dba84ba3109e3c5`

## Summary from “Agent brief”

Implementation-generation evidence reports passing browser and unit tests, with source bindings matched to the current source tree. This draft reuses those retained results; no fresh verification-generation run is recorded yet, so publication-time validation remains outstanding. The Playwright acceptance test covers positive and negative whole and fractional values. The retained composite screenshot has a valid human visual review for `BIN-OPR2:AC-001`. No implementation defects are recorded in the supplied evidence. Recommendation: proceed to governed fresh validation; do not treat reused suite counts alone as clause acceptance.

## Acceptance and specification results

| Clause | Executable test and result | Source binding / visual evidence | Assessment |
|---|---|---|---|
| `BIN-OPR2:REQ-001` | `tests/bin-conversion.spec.js`, retained Playwright attempt `TA-f5a99e08689408290e54`: passed (1/1). | Planned source files: `src/App.jsx` and `src/components/StandardKeypad.jsx`; implementation summary reports `@clause:BIN-OPR2:REQ-001` tags. | Passing test evidence is retained and source-tree binding matched; suite success alone does not establish a clause verdict. |
| `BIN-OPR2:REQ-002` | `tests/bin-conversion.spec.js`, same retained Playwright attempt: reported cases 42, -42, 10.29, and -10.29 passed. | Planned source file: `src/App.jsx`; implementation summary reports `@clause:BIN-OPR2:REQ-002`. | Positive/negative integer and fractional cases are reported; fresh verification execution remains outstanding. |
| `BIN-OPR2:AC-001` | `tests/bin-conversion.spec.js`, tagged `@ac:BIN-OPR2:AC-001`; retained Playwright attempt passed (1/1). | `singularity/work-items/bin-opr2/evidence/bin-conversion-composite.png`; visual review `WIT-001` is valid, satisfies the `conversion-screen` slot, and is bound to the unchanged file SHA-256 `1069b2b80993d12efa244fe58c9da1f16ea0629bfb58d04c44180c05487fde58`. | Playwright and reviewed visual evidence are present. The review satisfies the visual slot; the retained test's suite count alone does not establish the test criterion verdict. |

Fresh verification-generation test execution has not yet been retained. No constitution was pinned for this Story.

## Negative, regression, security, and non-functional checks

- Negative values are covered by the retained Playwright cases `-42` and `-10.29`; no separate malformed-input test is claimed. Values with more than two fractional decimal places are outside the approved input scope, and empty-display behavior is unspecified.
- Regression evidence: retained unit-test receipt `TA-a7a5273abf00b880ba0b` reports 31 passed with no failures or skips. This is implementation-generation evidence; fresh verification execution remains outstanding. The implementation summary also reports a successful production build with the large-chunk warning noted above.
- No security, resilience, accessibility, or other non-functional requirement is stated in the approved specification. No dedicated checks for those areas are claimed here.
- Residual risk: only the specified input domain is covered; the current verification-generation draft has no fresh execution receipt. Recommendation is contingent on governed fresh validation before publication.

> Exact source expansion: `sfref:v1:story:bin-opr2:826fcfd1e7e82262d464aab774af23c2967d6fa7121c3dc996c87469fd99497e`. Use `singularity-flow show sfref:v1:story:bin-opr2:826fcfd1e7e82262d464aab774af23c2967d6fa7121c3dc996c87469fd99497e --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

## Verdict summary

<!-- singularity-flow:verdict-summary:start -->
Engine-written from the clause table; keep it. The table is the only place a verdict is stated.

- `BIN-OPR2:REQ-001`: partial; no issue raised yet; implementation owns it.
- `BIN-OPR2:REQ-002`: partial; no issue raised yet; implementation owns it.
- `BIN-OPR2:AC-001`: partial; no issue raised yet; implementation owns it.
<!-- singularity-flow:verdict-summary:end -->
