<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "anu-bin",
  "workType": "spec-driven-standard",
  "phase": "release",
  "generation": 1,
  "status": "approved",
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
      "sha256": "0397f237fd0fee7cd015d8c2d0221216ddffc92a49b23c149dc0939fd97a2540",
      "bytes": 4011
    },
    "generation": 1,
    "publishedAt": "2026-11-11T08:54:25.184Z"
  },
  "sourceCommit": "e7129b126e202e721801c56a8e90d6d58538a8ca",
  "generationCommit": "81d3a1e55666dc525d20482d970b8118dc03f0b9",
  "publicationCommit": "81d3a1e55666dc525d20482d970b8118dc03f0b9",
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "7a8c7d3e229c9c89676bb62972e684b8507486190cc98e73ddececd8305d276c",
  "template": {
    "path": "singularity/work-items/anu-bin/config/wfa/blobs/sha256/8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "sha256": "8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/release.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/anu-bin/context/inputs-release-gen1.json",
    "sha256": "8e5d0736cce73bbfd5a790ffa7fb514c9a33a8393147ec542a93142646868ab7",
    "renderedSha256": "ee78476134cb14209a093a769c6c11b25e7900bb5aaeabfc0006e94e02c8540b",
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
      "path": "singularity/work-items/anu-bin/telemetry/release-gen1.json",
      "sha256": "5947e316d3a7526c049dd777bd3e813baf2ff5fec417a2d3bc65946bff69f3b1",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 31335,
        "estimatedTokens": 7834,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 31335,
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
      "startedAt": "2026-11-11T08:54:25.184Z",
      "completedAt": "2026-11-11T08:54:25.184Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "release",
      "at": "2026-11-11T09:04:14.375Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011",
        "githubLookup": "resolved"
      },
      "agent": "qa",
      "authorityGroup": "quality-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/anu-bin/artifacts/release/conformance.md",
          "sha256": "9b642333752e57c03493e23e1682ef2eaffdb7430581cc25708c4b669fc916e4"
        },
        {
          "path": "singularity/work-items/anu-bin/artifacts/release/verification/index.md",
          "sha256": "c927b7b4932cc6a5dd5c63afdb434a8710d7b117c91c7915dcb919a02e2c7f34"
        }
      ],
      "artifactSet": "spec-driven-verification",
      "bundleSha256": "90d8233104f7074f6d7b2632208b41d90f8b845dec06df0e0875ea61b02baddb",
      "reviewPacketSha256": "d96f4dae7db6324d919dcbc1fed8e8d9e91f48e0040ab5cbf49d7f62f4127879",
      "evidenceCommit": "925b51707497087b73a70fb6acda122287d3fed7",
      "artifactSetSha256": "127e10cdfa2ae1f3919555e449ca2c2113b85a375583798203eb0839c63f0974",
      "architectureIntent": null,
      "architectureDecision": null,
      "actionContext": {
        "phase": "release",
        "label": "Release",
        "generation": 1,
        "submittedAt": "2026-11-11T08:56:56.950Z",
        "artifacts": [
          {
            "path": "singularity/work-items/anu-bin/artifacts/release/conformance.md",
            "sha256": "9b642333752e57c03493e23e1682ef2eaffdb7430581cc25708c4b669fc916e4"
          },
          {
            "path": "singularity/work-items/anu-bin/artifacts/release/verification/index.md",
            "sha256": "c927b7b4932cc6a5dd5c63afdb434a8710d7b117c91c7915dcb919a02e2c7f34"
          }
        ],
        "agentBriefs": [],
        "reviewPacketSha256": "d96f4dae7db6324d919dcbc1fed8e8d9e91f48e0040ab5cbf49d7f62f4127879",
        "submittedSourceCommit": "81d3a1e55666dc525d20482d970b8118dc03f0b9",
        "planId": "dc4a3542c9a4d309fa995a02"
      },
      "upstream": {
        "sha256": "sha256:5c1ea28480381c06ed5797a11a2ec075d83126025ea116625a375913cd8a0edd",
        "refs": [
          {
            "kind": "input",
            "ref": "convergence",
            "sha256": "sha256:f79aa7753ef3852c5f04fbb4b35d1971252659e0ab156ef92c444687b16a33fd",
            "authoredSha256": "sha256:61568a4dffa661f4974677f298ca4e3e07c2c089f7e84c3deb037194518a6716"
          },
          {
            "kind": "input",
            "ref": "verification",
            "sha256": "sha256:b5e1b847195c796a146b5949b6ae44b32884a19a8e8dcd1343bed80bb3cf1505",
            "authoredSha256": "sha256:031bb7b6f3627bb0410a1f7e7abe005665566b17c86c1eb90cf5e102a9a18a4c"
          },
          {
            "kind": "candidate",
            "ref": "HEAD",
            "sha256": "sha256:8ee94abb2364d9007ef8fbcbf0c0b652fb107d1327f042f79171f6b2f38708d3"
          },
          {
            "kind": "specification",
            "ref": "records",
            "sha256": "sha256:cefd1b7927dc81f1f76c80c34903553d7b147edc7eae2b79e3020b3f1813fb11"
          },
          {
            "kind": "documents",
            "ref": "release",
            "sha256": "sha256:37517e5f3dc66819f61f5a7bb8ace1921282415f10551d2defa5c3eb0985b570"
          },
          {
            "kind": "decisions",
            "ref": "story",
            "sha256": "sha256:aa3d3bff38fef444dddd1c3b126a329b596f6bf28bea081693b5194f7d6042ba"
          }
        ]
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": "sha256:b6445b8544a8faafd9bef05772c68138a3868d1aaa98935c21c3c3cb7a1ce1c2"
}
-->

# Release conformance — anu-bin

The final human-readable trace `[SPK:REQ-042]`. Before publication, add at least one evidence
file below this release artifact's `verification/` directory. Its source-bound index must identify
the approved Verification generation, exact evidence paths and hashes, observed results, and gaps;
this document says what that evidence proves. Do not claim a result absent from approved evidence.

## Requirement trace

Use the complete governed anchors from the approved specification, for example
`[ANU-BIN:REQ-001]` and `[ANU-BIN:AC-001]`. Bare display labels such as `REQ-001` do not
bind release evidence to the approved clause. Put one exact qualified approved clause ID in
each Clause row; a planned source tag or test tag alone is not a release verdict.

The clause table is the only place a verdict is stated. Under `## Upstream discrepancies`, describe each
problem and its owner, never a verdict; the engine-written Verdict summary lists each gap with the
upstream issue that covers it.

| Clause | Evidence | Verdict |
|---|---|---|
| `ANU-BIN:REQ-001` | Planned source trace in `src/utils/evaluator.js`, `src/App.jsx`, and `src/components/StandardKeypad.jsx`; Standard-mode BIN interaction in `src/App.test.jsx`; retained Node 22 run `TA-c7b76e50714f1641b5a0` (34 passed, 0 failed, 0 skipped), bound to source tree `b6445b8544a8faafd9bef05772c68138a3868d1aaa98935c21c3c3cb7a1ce1c2`. Suite counts do not establish this clause; see `verification/index.md`. | partial — implementation trace and interaction coverage are present, but retained suite-level evidence does not establish clause acceptance. |
| `ANU-BIN:AC-001` | Conversion unit tests in `src/utils/evaluator.test.js`, tagged `@ac:ANU-BIN:AC-001`; retained Node 22 run `TA-c7b76e50714f1641b5a0` (34 passed, 0 failed, 0 skipped), bound to source tree `b6445b8544a8faafd9bef05772c68138a3868d1aaa98935c21c3c3cb7a1ce1c2`. Packet verdict requires bound-witness evaluation; see `verification/index.md`. | partial — tests and a passing run are retained, but the packet does not establish this criterion's verdict. |

## Constitution conformance

Each cited or evidence-required article, and its verdict. A model may propose evidence, but the
verdict for a judged article is recorded by a human authority `[SPK:CON-044]`.

| Article | Type | Verdict | Recorded by |
|---|---|---|---|

None: this Story pinned no constitution.

## Exceptions

Every constitution exception, with article, reason, scope, authority, and expiry `[SPK:REQ-103]`.

None recorded in the approved convergence input.

## Deviations

Accepted deviations carried from convergence, and the authority that accepted each.

None recorded in the approved convergence input.

## Upstream discrepancies

The approved convergence input reports no unresolved blockers or human dispositions. The approved Verification brief distinguishes retained implementation evidence from fresh verification and explicitly says suite counts alone do not establish either clause. No contradiction requiring an upstream issue was identified from these inputs.

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

<!-- source=singularity/work-items/anu-bin/artifacts/convergence/convergence.md sha256=47063435f8ec95688e596a89da75be6ae4ffce028326a862a0941f47eb8eb09f status=captured projection=full representation-sha256=sha256:d306a2298860991bb2071cae184004d88404b596a9e990b196ec28aec25a8b32 expansion=sfref:v1:story:anu-bin:3b89f509ed05fb8964cec2350ce59d465b5644e368f5c83ece63f673291d55ed -->

# Convergence — anu-bin

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `98e992d73cfb6227b1d2f07f976f858c28c9df41d63a7e2bce8ab7389176ffb3`
- Reconciliation SHA-256: `c616be19ef02620ea952fdbf7ae32778ed297c73380dd0cd6961b495a0f62c15`
- Source target: `ee2db2c242df3dfd8edf55d7b713ea22a335b260`

## Deterministic facts

- No deterministic trace-evidence gaps were found.

## Settled by the approved plan

These changed paths no claim cites are ones the approved plan already accounts for, so no person is asked about them again.

- **CF-fcfa04dc67b1** · .nvmrc · PAM-001 · build-configuration: done oke no need to change

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

> Exact source expansion: `sfref:v1:story:anu-bin:3b89f509ed05fb8964cec2350ce59d465b5644e368f5c83ece63f673291d55ed`. Use `singularity-flow show sfref:v1:story:anu-bin:3b89f509ed05fb8964cec2350ce59d465b5644e368f5c83ece63f673291d55ed --section "<heading>"` only when exact wording is needed.

## Approved phase input: verification

<!-- source=singularity/work-items/anu-bin/artifacts/verification/test-evidence.md sha256=b39a22fddb2f1eed76b146565aa1a48a7fe449f1b4f395a38f5e82112a4d02b0 status=captured projection=approved-summary representation-sha256=sha256:780e364dc479171062278c70b7907d4f83cef624494aa5ca284d047db3fdf99c brief-sha256=780e364dc479171062278c70b7907d4f83cef624494aa5ca284d047db3fdf99c expansion=sfref:v1:story:anu-bin:1cd11b592dfb80c171f62c52b9cc3a1f40ca9c278ad8253250434b711ebe9356 -->

# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `verification` generation 3
- Consumer: `release`
- Source: `singularity/work-items/anu-bin/artifacts/verification/test-evidence.md`
- Source SHA-256: `dd11f9f04083597834fa36b56755aa63f7830ddebef002f3b990c02fcb4769f9`

## Summary from “Agent brief”

The approved implementation packet retains a source-tree-matched Node 22 execution (34 passed, 0 failed, 0 skipped). The implementation summary calls that run diagnostic-only because it did not satisfy the fresh publication-test requirement. These statements describe different evidence scopes: it is retained governed evidence for implementation and reusable against this unchanged source tree, but it is not a verification-generation run or a fresh publication test. Its suite count alone does not establish either clause verdict. The separate Node 26 diagnostic run failed before the App test bodies because `localStorage` was undefined. No fractional-value, range, formatting, security, or non-functional behavior was specified; those are not claimed as verified. Recommendation: proceed only through the configured gate, preserving the distinction between retained implementation evidence and any fresh verification result.

## Acceptance and specification results

| Clause | Evidence and verdict |
|---|---|
| `ANU-BIN:AC-001` | `src/utils/evaluator.test.js` contains the conversion unit tests tagged `@ac:ANU-BIN:AC-001`. The implementation generation's approved packet retains the matched Node 22 execution (34 passed, 0 failed, 0 skipped; attempt `TA-c7b76e50714f1641b5a0`). It is reusable retained implementation evidence, but not a fresh verification run; the packet's criterion verdict is `requires-bound-witness-evaluation`, so passing suite counts do not establish this clause. |
| `ANU-BIN:REQ-001` | `src/utils/evaluator.js`, `src/App.jsx`, and `src/components/StandardKeypad.jsx` carry the planned `@clause:ANU-BIN:REQ-001` source trace; `src/App.test.jsx` exercises the Standard-mode BIN interaction and is tagged `@ac:ANU-BIN:AC-001`. The retained Node 22 execution is bound to the same source tree, but its suite-level count alone does not establish this clause. The implementation report's separate Node 26 App tests did not reach their bodies. No fresh verification publication test is retained. |

No separate build, CI, or inspection claim is made for this behavior. Not applicable: this Story specifies executable unit-test evidence, not a configuration or documentation outcome.

## Negative, regression, security, and non-functional checks

The retained 34-test Node 22 run does not identify individual test cases, so existing arithmetic regression coverage is not independently established by this evidence. The Node 26 App test failure is recorded above as an environment-specific diagnostic and must not be presented as a passing result. No negative, boundary, accessibility, security, resilience, or observability requirements were specified; no separate checks for them are established here. Fractional-value handling, numeric limits, and output formatting remain unspecified and are not asserted.

> Exact source expansion: `sfref:v1:story:anu-bin:1cd11b592dfb80c171f62c52b9cc3a1f40ca9c278ad8253250434b711ebe9356`. Use `singularity-flow show sfref:v1:story:anu-bin:1cd11b592dfb80c171f62c52b9cc3a1f40ca9c278ad8253250434b711ebe9356 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

## Verdict summary

<!-- singularity-flow:verdict-summary:start -->
Engine-written from the clause table; keep it. The table is the only place a verdict is stated.

- `ANU-BIN:REQ-001`: partial; no issue raised yet; implementation owns it.
- `ANU-BIN:AC-001`: partial; no issue raised yet; implementation owns it.
<!-- singularity-flow:verdict-summary:end -->
