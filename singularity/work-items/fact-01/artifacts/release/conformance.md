<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "fact-01",
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
      "sha256": "0ef0c63b5e61fa9ccd2750f85d0e2e0b2e5ed506eebe532e23a9b6899ff222b3",
      "bytes": 4193
    },
    "generation": 1,
    "publishedAt": "2026-10-25T23:43:29.827Z"
  },
  "sourceCommit": "5b84717267d80a3778c4bffbac60fc4187e6a298",
  "generationCommit": "a7a055d7aabd45f09d4694177d2afdb7a48b6921",
  "publicationCommit": "a7a055d7aabd45f09d4694177d2afdb7a48b6921",
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "998e7f5318d6f2f94edef4ef6b52c66144001ec736e4a9d6e1d83ba54307da0c",
  "template": {
    "path": "singularity/work-items/fact-01/config/wfa/blobs/sha256/8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "sha256": "8f3e84e8e19dfc851d9948f20fbd48c0e43e5d8df9c747404d602106930e14fe",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/release.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/fact-01/context/inputs-release-gen1.json",
    "sha256": "875d26295e935f1f2b6fe32adc4634eeee4b5495f2351e89d23b6955b87c7251",
    "renderedSha256": "77219258d33e0a4e78a25702c9956d7bc5124dbf017ba07c4aa2b46e1d5e72dc",
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
      "path": "singularity/work-items/fact-01/telemetry/release-gen1.json",
      "sha256": "3af13880a86fadc75f9434ac6a6c0248cdf7ec4639414a8cf1d012dc9d823a62",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30563,
        "estimatedTokens": 7641,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30563,
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
      "startedAt": "2026-10-25T23:43:29.827Z",
      "completedAt": "2026-10-25T23:43:29.827Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": "sha256:08da5be72df383ee81b97338bbb5cfc4d30ac5088384e9a4a20351c6a88075ff"
}
-->

# Release conformance — fact-01

The final human-readable trace `[SPK:REQ-042]`. The source-bound evidence index is
[`verification/release-evidence.md`](verification/release-evidence.md); it identifies the
approved Verification generation, evidence paths and hashes, observed results, and gaps.

## Requirement trace

Use the complete governed anchors from the approved specification, for example
`[FACT-01:REQ-001]` and `[FACT-01:AC-001]`. Bare display labels such as `REQ-001` do not
bind release evidence to the approved clause. Put one exact qualified approved clause ID in
each Clause row; a planned source tag or test tag alone is not a release verdict.

The clause table is the only place a verdict is stated. The table's evidence references are
expanded in [`verification/release-evidence.md`](verification/release-evidence.md).

| Clause | Evidence | Verdict |
|---|---|---|
| `FACT-01:REQ-001` | `src/utils/evaluator.test.js`: exact examples include nCr(5, 2) = 10 and nCr(67, 33); focused test run passed 43/43, retained full implementation run passed 44/44 on the same source tree. | matched |
| `FACT-01:REQ-002` | `src/App.test.jsx`: submits n=5, r=2 and asserts result 10; focused test run passed 43/43 on the same source tree. | matched |
| `FACT-01:REQ-003` | `src/utils/evaluator.test.js`: asserts nCr(3, 4) = 0n; focused test run passed 43/43 on the same source tree. | matched |
| `FACT-01:REQ-004` | `src/utils/evaluator.test.js` covers invalid/non-positive inputs; `src/App.test.jsx` verifies an incomplete submission produces an alert and no result. UI invalid-value handling has no distinct test. Focused test run passed 43/43. | partial |
| `FACT-01:AC-001` | `singularity/work-items/fact-01/evidence/ncr-result.png` (SHA-256 `5818ced3e9acc34e2142c0e4fad1966bca5774581364c20291126bb7af4c0b61`); direct visual inspection showed n=5, r=2, result=10. | matched |

## Constitution conformance

Each cited or evidence-required article, and its verdict. A model may propose evidence, but the
verdict for a judged article is recorded by a human authority `[SPK:CON-044]`.

### Constitution articles

None: this Story pinned no constitution.

| Article | Type | Verdict | Recorded by |
|---|---|---|---|

## Exceptions

Every constitution exception, with article, reason, scope, authority, and expiry `[SPK:REQ-103]`.

None.

## Deviations

Accepted deviations carried from convergence, and the authority that accepted each.

None. Convergence generation 1 records no findings or unresolved blockers.

## Upstream discrepancies

| Producer phase | Clause/section | Problem | Assumption | Impact/Clause | Owner action |
|---|---|---|---|---|---|
| verification | Negative, regression, security, and non-functional checks | The Verification generation 1 narrative called the 43-test focused report and 44-test retained implementation packet conflicting; a fresh run of the two named files passed 43 tests, while the retained packet records the broader 44-test run. | The focused two-file result and full-suite aggregate have different scopes; neither count is treated as a clause-level result by itself. | No clause is weakened; `FACT-01:REQ-001`, `FACT-01:REQ-002`, `FACT-01:REQ-003`, and `FACT-01:REQ-004` have the specific evidence summarized in the clause table. | Release records the scoped results and gaps here; no upstream artifact amendment is required. |

## Self-approval disclosures

A conformance report discloses every phase approved by the identity that produced it, with that
identity, so self-approval is never read as independent review.

Recorded from the retained approvals. Keep every line.

- `planning`: self-approved by ashokraj2011; not an independent review.
- `implementation`: self-approved by ashokraj2011; not an independent review.
- `convergence`: self-approved by ashokraj2011; not an independent review.
- `verification`: self-approved by ashokraj2011; not an independent review.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: convergence

<!-- source=singularity/work-items/fact-01/artifacts/convergence/convergence.md sha256=ef477323ac445ab3443ca73d9826cc77f0002087c95628c1e6879717e91aeda1 status=captured projection=full representation-sha256=sha256:c290a149531d729188dc04719a4c867204ade2fdfd000ef7d1acdfd15d238903 expansion=sfref:v1:story:fact-01:897bbc491e0c759e8e66b1dd4ed39b59ed6eb897af0cde2f808103051f222d86 -->

# Convergence — fact-01

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `1ebc3ea40374310e23b9f439231c27b9d93b3f5ad969278dc3997523f7251e65`
- Reconciliation SHA-256: `fb9abdf45ab908f57b5758ff525877573c8652b2ea005f5b10ca010619885f28`
- Source target: `e1d21081e36b8d239a24413f8f6d3abf3ffc811f`

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

> Exact source expansion: `sfref:v1:story:fact-01:897bbc491e0c759e8e66b1dd4ed39b59ed6eb897af0cde2f808103051f222d86`. Use `singularity-flow show sfref:v1:story:fact-01:897bbc491e0c759e8e66b1dd4ed39b59ed6eb897af0cde2f808103051f222d86 --section "<heading>"` only when exact wording is needed.

## Approved phase input: verification

<!-- source=singularity/work-items/fact-01/artifacts/verification/test-evidence.md sha256=caea3b089f8e11fc40a9642c9f1c2fd1c54bb83cf251bcf9afd6a55d6e230cbe status=captured projection=approved-summary representation-sha256=sha256:b376f4667395be520e2deb9c8aab631b2bc212f55bb451237ea5573370d6ab88 brief-sha256=b376f4667395be520e2deb9c8aab631b2bc212f55bb451237ea5573370d6ab88 expansion=sfref:v1:story:fact-01:f855ee333590de6ab58e37b8709ec1e3d965f4553f24cda0fc8d242c33119a62 -->

# Approved agent brief — Verification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `verification` generation 1
- Consumer: `release`
- Source: `singularity/work-items/fact-01/artifacts/verification/test-evidence.md`
- Source SHA-256: `8a09f81dbe7605d0ecee4a1d339053e1546cc2708a3ed935a519b5eb4474086b`

## Summary from “Agent brief”

The implementation submission records 44 tests passed, 0 failed, and 0 skipped, bound to source commit `e1d21081e36b8d239a24413f8f6d3abf3ffc811f` (tree `sha256:08da5be72df383ee81b97338bbb5cfc4d30ac5088384e9a4a20351c6a88075ff`). Its test evidence covers the nCr utility and calculator flow; the retained projection does not itself establish individual clause verdicts. The approved implementation artifact reports a successful production build and a screenshot showing 5 choose 2 = 10. No fresh visual inspection was performed in this verification draft. Residual risk: very large central combinations may take substantial time. Recommendation: retain the disclosed evidence gaps and require the configured publication checks and human review before approval.

## Acceptance and specification results

| Clause | Verification evidence and result |
|---|---|
| `FACT-01:REQ-001` | Retained implementation execution: `src/utils/evaluator.test.js` is the planned executable test file; packet reports suite-wide 44/44 pass, 0 failures, source-bound. The approved implementation report describes exact `BigInt` cases including 5 choose 2 and 67 choose 33. Individual test names/results and clause verdict are not established by the packet. Planned source: `src/utils/evaluator.js`, tagged per the approved implementation report. |
| `FACT-01:REQ-002` | Retained implementation execution includes the planned `src/App.test.jsx`; suite-wide result 44 passed, 0 failed. The approved implementation report describes the calculator interaction test, but the retained packet does not isolate this clause's result. Planned sources: `src/components/CombinationCalculator.jsx` and `src/App.jsx`, tagged per the approved implementation report. |
| `FACT-01:REQ-003` | Retained implementation execution includes `src/utils/evaluator.test.js`; suite-wide result 44 passed, 0 failed. The approved implementation report says tests cover `r > n`; individual test verdict is not established by the packet. Planned source: `src/utils/evaluator.js`, tagged per the approved implementation report. |
| `FACT-01:REQ-004` | Retained implementation execution includes `src/utils/evaluator.test.js` and `src/App.test.jsx`; suite-wide result 44 passed, 0 failed. The approved implementation report says invalid and incomplete cases are covered; individual test verdict is not established by the packet. Planned sources: `src/utils/evaluator.js`, `src/components/CombinationCalculator.jsx`, tagged per the approved implementation report. |
| `FACT-01:AC-001` | Manual visual evidence is recorded at `singularity/work-items/fact-01/evidence/ncr-result.png`; the approved implementation report says it shows n=5, r=2, result=10. No fresh visual inspection or hash-bound visual review is present in the retained evidence. |

## Negative, regression, security, and non-functional checks

The suite-wide retained test execution is matched to the implementation source tree, but command success and aggregate counts do not prove each clause independently. Earlier phase packets retain no test execution for specification, planning, or convergence; this does not establish that no tests ran. The authored implementation report's 43-test count conflicts with the retained packet's 44-test count and remains unresolved. No fresh negative/security/non-functional verification was performed. The approved implementation report notes that very large central nCr inputs may be expensive; no maximum input size was specified. The prior lint report records 19 repository-wide errors (exit 1), and the prior build report notes the large-chunk advisory. No separate accessibility or security test result is retained. No configuration or documentation outcomes are claimed; tags are not applicable because the clauses concern product behavior and visual evidence, not configuration or documentation.

> Exact source expansion: `sfref:v1:story:fact-01:f855ee333590de6ab58e37b8709ec1e3d965f4553f24cda0fc8d242c33119a62`. Use `singularity-flow show sfref:v1:story:fact-01:f855ee333590de6ab58e37b8709ec1e3d965f4553f24cda0fc8d242c33119a62 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

## Verdict summary

<!-- singularity-flow:verdict-summary:start -->
Engine-written from the clause table; keep it. The table is the only place a verdict is stated.

- `FACT-01:REQ-004`: partial; no issue raised yet; implementation owns it.
<!-- singularity-flow:verdict-summary:end -->
