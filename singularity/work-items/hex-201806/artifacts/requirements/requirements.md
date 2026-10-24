<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-201806",
  "workType": "feature",
  "phase": "requirements",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "product-owner",
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
      "agentId": "product-owner"
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
      "filename": "requirements.md",
      "mediaType": "text/markdown",
      "sha256": "6810656a5c2ba84333e526a9eb2241ce1c1e2a4ebe22e21c6948fa116ebc16fb",
      "bytes": 3809
    },
    "generation": 1,
    "publishedAt": "2026-10-24T23:37:15.114Z"
  },
  "sourceCommit": "3192e08362a04e22fed73ea54e0887e9c9895cd3",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "47b4dd42591b4b4b5128c000c2a99620ddbeb54b951b04eeb534b1df6dae437b",
  "template": {
    "path": "singularity/work-items/hex-201806/config/wfa/blobs/sha256/32016db8ed6fadd6596e7dc702647cff95cdee1a203b38395d7ba5626dd8134e",
    "sha256": "32016db8ed6fadd6596e7dc702647cff95cdee1a203b38395d7ba5626dd8134e",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/feature/requirements.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-201806/context/inputs-requirements-gen1.json",
    "sha256": "81180243b74e30e75832cd6c77734ee9593a1277eabcabdd9e271a754240b761",
    "renderedSha256": "105f6412175e634ea6c75f80362af12577f09fa93bb767439c56a0e25e0f8b70",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/hex-201806/context/clarifications-requirements-gen1.json",
    "sha256": "089327bd7e12490e1159796f65d516944ed43d059d5566fc4971b0612a3e02be",
    "promptSha256": "c2551ec276cbdcfa6516716c02270e0bc58cd395886eb24853531c8aa90e3a08",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-10-24T23:35:57.548Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/hex-201806/telemetry/requirements-gen1.json",
      "sha256": "76789cde89e44362ed87af29f41d4684ad2bed14711b8144352366300717cf5f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 25027,
        "estimatedTokens": 6257,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 25027,
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
      "startedAt": "2026-10-24T23:37:15.114Z",
      "completedAt": "2026-10-24T23:37:15.114Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# hex-201806 — Feature Requirements

## Problem and outcome

Calculator users need to convert decimal numbers to hexadecimal in the existing calculator interaction. The measurable outcome is that a positive integer entered through that interaction can be converted to an equivalent base-16 value. [HEX-201806:REQ-001]

## Scope

The implementation includes conversion of positive integer decimal inputs to their equivalent hexadecimal representation through the existing calculator interaction. The requested screenshot and automated test results are acceptance evidence for this capability, not evidence that has already been produced. Unrelated UI redesign and additional calculator operations are excluded. The requested screenshot and test results are explicitly in scope: provide a screenshot of a successful representative conversion and automated test results for valid inputs and relevant invalid or boundary cases. [HEX-201806:CON-001] [HEX-201806:REQ-002] [scope:SRI-a091c0445554]

## Acceptance criteria

1. For a supported positive integer decimal input, a user can invoke conversion in the existing calculator interaction and see its mathematically equivalent base-16 representation. Verify by exercising representative inputs and comparing the displayed value with the expected hexadecimal value. Letter casing and prefix remain undecided. [HEX-201806:AC-001]
2. Retain a screenshot showing a successful representative positive-integer decimal-to-hexadecimal conversion in the existing calculator interaction. The representative value is deferred; select and record it before treating the screenshot check as executable. [HEX-201806:AC-002]
3. Retain automated test results covering valid positive-integer inputs and relevant invalid or boundary cases. Define concrete vectors and expected invalid/boundary behavior after the deferred decisions below; do not treat this criterion as executable until those are settled. [HEX-201806:AC-003]

## Dependencies, risks, and open questions

**User and evidence:** The evidenced user is a person using the calculator. The pinned Story requests “implement hex operator in calc” and acceptance evidence of “screenshot and test resutls”; the intake clarification established that “hex operator” means decimal-to-base-16 conversion through the existing calculator interaction and confirmed that unrelated UI redesign is out of scope. The requirements-phase clarification further limits the supported domain to positive integers. Sources: pinned Story `singularity/work-items/hex-201806/source.json` and approved intake generation 1.

**Dependencies and assumptions:** No external dependency is identified. The existing calculator interaction is the sole evidenced interface. “Positive integer” defines the supported input domain; no upper numeric limit was specified. Conversion must be mathematically equivalent in base 16, but display casing and prefix are not decided.

**Deferred decisions:** The user explicitly deferred output casing/prefix, invalid-input behavior, and the specific screenshot and automated test examples. These decisions affect exact output assertions, invalid/boundary test expectations, and reproducibility of the requested evidence. Owner: product owner. Resolve before defining concrete test vectors or treating AC-002/AC-003 as executable. Until then, do not invent formatting conventions, error behavior, numeric limits, or test values.

**Risks:** Without the deferred formatting and invalid-input decisions, implementations could differ in visible output or edge-case behavior while appearing to meet the broad conversion outcome. Without a selected representative value and concrete vectors, evidence cannot be reproduced consistently.

## Constitution articles

None: this Story pinned no constitution.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: intake

<!-- source=singularity/work-items/hex-201806/artifacts/intake/intake.md sha256=711da38e18cc1e81b6a6a4b9d9a3791f62f6b98121dfa71fa26b9b08e160d95a status=captured projection=full representation-sha256=sha256:3012e2061603cbc2d6549186ad0d10996c0c1aff5ccbb254d27dbe74c86f16f4 expansion=sfref:v1:story:hex-201806:b19043a03368baf20148c539b3590bc160ddd5cc3030ffb1314f34007225373f -->

# hex-201806 — Feature Intake

## User and outcome

**User:** A person using the calculator; the Story does not identify a narrower user group. The user confirmed that “hex operator” means converting a decimal input to its base-16 representation.

**Problem and outcome:** The requested calculator capability is not yet defined beyond the Story's phrase “implement hex operator in calc.” The confirmed outcome is that a user can perform decimal-to-hexadecimal conversion through the existing calculator interaction and see the corresponding base-16 representation. This interpretation is grounded in the pinned request and the intake clarification, not a choice of implementation.

**REQ-001 — Decimal-to-hexadecimal conversion:** The calculator shall let a user convert a decimal input to its equivalent base-16 representation in the existing calculator interaction. (Pinned Story: `singularity/work-items/hex-201806/source.json:7-8`; human-confirmed intake clarification, generation 1.)

**REQ-002 — Verification evidence:** Demonstrate the capability with a screenshot of a successful representative operation and automated test results covering valid inputs and relevant invalid/boundary cases. (Pinned Story: `singularity/work-items/hex-201806/source.json:9`; human-confirmed intake clarification, generation 1.)

**AC-001:** For each decimal input admitted by the Requirements phase, the existing calculator interaction can perform the conversion and display a value equivalent in base 16.

**AC-002:** Retain a screenshot showing one successful representative decimal-to-hexadecimal operation.

**AC-003:** Retain automated test results for valid inputs and relevant invalid/boundary cases. Define the supported input domain, expected edge-case behavior, and concrete test vectors in Requirements before treating this criterion as executable.

## Proposed capability

Add a decimal-to-hexadecimal conversion capability to the calculator's existing user interaction. Keep the user-visible change focused on this capability; the user explicitly confirmed that unrelated UI redesign is not in scope. No implementation approach is prescribed here.

## Scope, constraints, and stakeholders

**In scope**
- Decimal input converted to an equivalent base-16 representation.
- Availability through the existing calculator interaction.
- A successful-operation screenshot and automated results for valid and relevant invalid/boundary cases.

**Out of scope**
- Unrelated UI redesign.
- Any additional calculator operation not requested by this Story.

**Constraints and dependencies**
- The pinned Story source is authoritative: `singularity/work-items/hex-201806/source.json:7-9`.
- The user confirmed the interpretation, existing-interaction boundary, and evidence expectations in the recorded intake clarification for generation 1 (`singularity/work-items/hex-201806/context/clarifications-intake-gen1.json`, SHA-256 `f7916ca90663680c57b39d7e95f16c30f2a4f959051138398ec0fbd5c92e9cdc`).
- No external dependency, urgency, or additional stakeholder is identified by the available evidence.
- Exact supported values and output formatting are not yet specified; do not assume integer-only versus fractional or signed inputs, casing, prefix, or invalid-input behavior.

**Open questions for Requirements**
- Define the supported decimal input domain, including signed and fractional values, and any numeric limits. **Impact:** determines conversion behavior and boundary tests. **Owner action:** Requirements phase to settle from product-owner evidence or keep explicitly deferred.
- Define output formatting (including letter casing and any prefix) and expected invalid-input behavior. **Impact:** needed for consistent display and exact test expectations. **Owner action:** Requirements phase to decide and provide test vectors.
- Select the representative screenshot scenario and concrete valid, invalid, and boundary test cases after the preceding decisions. **Impact:** makes AC-002 and AC-003 reproducible. **Owner action:** Requirements phase.

**Stakeholders:** Calculator users are the evidenced user group. No other stakeholder is identified in the pinned source or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Evidence status

The screenshot and test results are requested acceptance evidence, not evidence already produced. No retained test execution or visual review is established for this intake. The repository provides `npm test` and `npm run build` scripts (`package.json:6-9`); their presence does not establish that tests or a build have been run or passed.

> Exact source expansion: `sfref:v1:story:hex-201806:b19043a03368baf20148c539b3590bc160ddd5cc3030ffb1314f34007225373f`. Use `singularity-flow show sfref:v1:story:hex-201806:b19043a03368baf20148c539b3590bc160ddd5cc3030ffb1314f34007225373f --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
