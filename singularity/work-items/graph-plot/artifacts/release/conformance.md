<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "graph-plot",
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
      "sha256": "d980974041b7a02523ee820bd809a2fb4f001d940bfa2f7f7b3e6587cb93d90c",
      "bytes": 6095
    },
    "generation": 1,
    "publishedAt": "2026-10-26T07:55:12.772Z"
  },
  "sourceCommit": "c1e203fb7501a2b88303ad5b53a89d6326807771",
  "generationCommit": "d5fe6632cc48befe0852ef0c1728b6444435036e",
  "publicationCommit": "d5fe6632cc48befe0852ef0c1728b6444435036e",
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "1113026516d93949e81f6239fea642dbe91f94ba1362bc77a0d8b2ba31c2cd35",
  "template": {
    "path": "singularity/work-items/graph-plot/config/wfa/blobs/sha256/8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "sha256": "8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/release.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/graph-plot/context/inputs-release-gen1.json",
    "sha256": "7c1155b39f466096303e46f5b778625115899e240d83511d0ecb79a7b18be49d",
    "renderedSha256": "7f37f9cfb2ce971a6ed9f36db405591641e50beaf46b9b5f579f73dec849e9a2",
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
      "path": "singularity/work-items/graph-plot/telemetry/release-gen1.json",
      "sha256": "95eaa7a924c8c62ae2053422039d573de8fead35a695706304c2dc299f855dc0",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29218,
        "estimatedTokens": 7305,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29218,
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
      "startedAt": "2026-10-26T07:55:12.772Z",
      "completedAt": "2026-10-26T07:55:12.772Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": "sha256:a30f9307e09c261ab3cf3b03030615791c09914a9c7cbae3189a629034c3b7a5"
}
-->

# Release conformance — graph-plot

The final human-readable trace `[SPK:REQ-042]`. Before publication, add at least one evidence
file below this release artifact's `verification/` directory. Its source-bound index must identify
the approved Verification generation, exact evidence paths and hashes, observed results, and gaps;
this document says what that evidence proves. Do not claim a result absent from approved evidence.

## Requirement trace

Use the complete governed anchors from the approved specification, for example
`[GRAPH-PLOT:REQ-001]` and `[GRAPH-PLOT:AC-001]`. Bare display labels such as `REQ-001` do not
bind release evidence to the approved clause. Put one exact qualified approved clause ID in
each Clause row; a planned source tag or test tag alone is not a release verdict.

The clause table is the only place a verdict is stated. Under `## Upstream discrepancies`, describe each
problem and its owner, never a verdict; the engine-written Verdict summary lists each gap with the
upstream issue that covers it.

| Clause | Evidence | Verdict |
|---|---|---|
| `GRAPH-PLOT:REQ-001` | Approved Verification generation 1 test evidence: `singularity/work-items/graph-plot/artifacts/verification/test-evidence.md` (SHA-256 `846f899c87e78447534271610d6d49f675688ff1d06f40e62bdd80ef4572f019`); source-bound index: `singularity/work-items/graph-plot/artifacts/release/verification/index.md`. The focused component test passed for the `sin(x)` label, `sin(30°) = 0.5` readout, and marker at (π/6, 0.5). | matched |
| `GRAPH-PLOT:AC-001` | The same focused component test passed, but the required visual review against DOC-001 was not completed. Verification generation 1 records that the app could not start because its configured localhost port was occupied by a process not started by this work item. The screenshot could not be opened at its issued local path during release authoring. See the source-bound index and upstream discrepancy below. | partial |

## Constitution conformance

Each cited or evidence-required article, and its verdict. A model may propose evidence, but the
verdict for a judged article is recorded by a human authority `[SPK:CON-044]`.

None: this Story pinned no constitution.

## Exceptions

Every constitution exception, with article, reason, scope, authority, and expiry `[SPK:REQ-103]`.

## Deviations

Accepted deviations carried from convergence, and the authority that accepted each.

None recorded in approved Convergence generation 1.

## Self-approval disclosures

A conformance report discloses every phase approved by the identity that produced it, with that
identity, so self-approval is never read as independent review.

Recorded from the retained approvals. Keep every line.

- `specification`: self-approved by ashokraj2011; not an independent review.
- `planning`: self-approved by ashokraj2011; not an independent review.
- `implementation`: self-approved by ashokraj2011; not an independent review.
- `convergence`: self-approved by ashokraj2011; not an independent review.
- `verification`: self-approved by ashokraj2011; not an independent review.

## Upstream discrepancies

- **Producer:** verification, generation 1. **Clause/section:** `GRAPH-PLOT:AC-001`, visual review against DOC-001. **Problem:** the approved Verification evidence says the candidate could not be started because its configured localhost port was occupied by a process not recorded as started by this work item, so visual comparison was not performed. The exact issued screenshot path was also unavailable to the release authoring environment; no visual claims are inferred from its name or metadata. **Assumption:** no visual acceptance is established; the implementation's component-level test is not a substitute. **Impact/Clause:** `GRAPH-PLOT:AC-001` remains only partially evidenced. **Owner action:** the implementation owner must provide current visual witness evidence using the decision command below; only the authorized human may record the witness.
- **Producer:** source-scope decision for DOC-001. **Clause/section:** `DOC-001` and the clauses marked `[scope:DOC-001]`. **Problem:** the source screenshot has no recorded human scope disposition. **Assumption:** use only the approved written scope: treat the screenshot as a visual reference, not as a requirement for its extra controls or expressions; do not infer any image detail beyond the approved description. **Impact/Clause:** the screenshot-reference portion of `GRAPH-PLOT:AC-001` cannot be closed until its scope is decided. **Owner action:** an authorized human must decide whether DOC-001 is included/existing and link it to the applicable clause, or select another supported disposition.
- **Producer:** verification, generation 1. **Clause/section:** scoped ESLint result. **Problem:** Verification records two `no-loss-of-precision` errors in expected coordinate literals in the test; the scoped lint check did not pass. **Assumption:** retain the observed failure as an unresolved verification finding; this release report does not modify the approved test or claim lint success. **Impact/Clause:** supporting evidence for `GRAPH-PLOT:REQ-001` is subject to the recorded test-quality gap. **Owner action:** the verification owner must correct or formally disposition the finding through its owning workflow.

The approved Verification packet records `node-tests` as passed (exit code 0) against source tree `sha256:a30f9307e09c261ab3cf3b03030615791c09914a9c7cbae3189a629034c3b7a5`; the packet contains no structured test counts. Its approved artifact separately records the focused test assertions and visual-review limitation. Neither command success nor source tags establish a visual verdict. No constitution exception is claimed, and no deviation was accepted in the approved Convergence generation 1.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: convergence

<!-- source=singularity/work-items/graph-plot/artifacts/convergence/convergence.md sha256=1623a3ccb5a67160da22841451acc4f1d8435a1297081412df617bc60dd94faf status=captured projection=full representation-sha256=sha256:5ac4f1ad0e67da36bb7969a405802a60698576ba0eacd826e8f5898e75724918 expansion=sfref:v1:story:graph-plot:5e5cae149ccafccc51fb09410037cf9b149f4a443877524c8caf96a902181d12 -->

# Convergence — graph-plot

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `9b0159ef86748ef58124cd61038d047200a64006450641c4bc397ee28340b95e`
- Reconciliation SHA-256: `470c65fc07dacbf702003145bad02c6353940ee7771c2b0fd0d2eacf976f69ce`
- Source target: `97045d90f726fea43fb17eb1fe9be318718b198c`

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

> Exact source expansion: `sfref:v1:story:graph-plot:5e5cae149ccafccc51fb09410037cf9b149f4a443877524c8caf96a902181d12`. Use `singularity-flow show sfref:v1:story:graph-plot:5e5cae149ccafccc51fb09410037cf9b149f4a443877524c8caf96a902181d12 --section "<heading>"` only when exact wording is needed.

## Approved phase input: verification

<!-- source=singularity/work-items/graph-plot/artifacts/verification/test-evidence.md sha256=6cafd560f00ed12cd51d725860f5e019d603b928c315a9ef51c282400c858065 status=captured projection=approved-summary representation-sha256=sha256:d6dedaadea9f1bf5b6e2bc2cfa5a91baee7e28ff71869f2328cae44e63c063c5 brief-sha256=d6dedaadea9f1bf5b6e2bc2cfa5a91baee7e28ff71869f2328cae44e63c063c5 expansion=sfref:v1:story:graph-plot:2b9fc10b541ece10a9fff6790f17956ad51ea3ebabc10939349bfb0d8a4d5ec0 -->

# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `graph-plot`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/graph-plot/artifacts/verification/test-evidence.md`
- Source SHA-256: `adbabb565b9c252fedb12aa2bfc35066815623b5baa70aec632c3b85f749f7ef`

## Summary from “Agent brief”

The focused grapher component test passed and checked the fixed `sin(x)` label, the visible `sin(30°) = 0.5` readout, and the marker coordinates corresponding to x = π/6 and y = 0.5. The production build also succeeded. The scoped ESLint check did not pass: it reported two `no-loss-of-precision` errors in expected coordinate literals in the test. A visual review of the running candidate against DOC-001 was not completed because the declared app could not start: its configured localhost port was already occupied by a process not recorded as started by this work item. Therefore the test-based behavior is supported, but visual acceptance is not established. Do not treat the prior implementation test count, build, or source tags as a substitute for that visual review or as a criterion verdict. Residual risk is limited to the unreviewed rendered candidate and the lint errors. Recommendation: withhold verification sign-off until visual review and the lint finding are resolved or dispositioned.

## Acceptance and specification results

| Clause | Evidence and result |
|---|---|
| `GRAPH-PLOT:REQ-001` | `src/components/FunctionGrapher.test.jsx`, test `plots sin(x) and marks the 30-degree evaluation at (π/6, 0.5)`: passed in the focused Vitest run. It asserts the `sin(x)` label, the visible degree readout, and canvas marker coordinates at x = π/6 and y = 0.5. Planned product source `src/components/FunctionGrapher.jsx` contains `@clause:GRAPH-PLOT:REQ-001` and renders `sin(x)` plus the marker/readout. The test supports this behavior at component level; source tagging alone is not a verdict, and this is not retained governed publication evidence. |
| `GRAPH-PLOT:AC-001` | The same test passed for its executable assertions and `src/components/FunctionGrapher.jsx` contains `@clause:GRAPH-PLOT:AC-001`; however, the criterion also requires visual review against DOC-001. The live candidate was not reviewed because the declared application could not start on its occupied port. **Not established.** DOC-001 itself was inspected: it shows a graphing workspace, two expression cards (`sin(x)` and a quadratic), and an unhelpful extreme graph viewport. Per the approved scope, those extra controls/expressions are not requirements; the required sine plot and evaluation still need a visual review on the candidate. |

Constitution articles: None: this Story pinned no constitution.

## Negative, regression, security, and non-functional checks

No additional negative, security, accessibility, resilience, or non-functional behaviors are specified by the pinned request or approved clarification; these are not claimed as tested. No dedicated negative or regression assertions exist in the focused grapher test. The scoped ESLint errors and missing live visual review are the outstanding findings above. No product source or test files were changed during this verification step.

> Exact source expansion: `sfref:v1:story:graph-plot:2b9fc10b541ece10a9fff6790f17956ad51ea3ebabc10939349bfb0d8a4d5ec0`. Use `singularity-flow show sfref:v1:story:graph-plot:2b9fc10b541ece10a9fff6790f17956ad51ea3ebabc10939349bfb0d8a4d5ec0 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

## Verdict summary

<!-- singularity-flow:verdict-summary:start -->
Engine-written from the clause table; keep it. The table is the only place a verdict is stated.

- `GRAPH-PLOT:AC-001`: partial; no issue raised yet; implementation owns it.
<!-- singularity-flow:verdict-summary:end -->
