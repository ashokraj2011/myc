<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "aswhin",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "architect",
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
      "agentId": "architect"
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
      "filename": "plan.md",
      "mediaType": "text/markdown",
      "sha256": "8d9d454082edff1586206281a2cad37495f56b063119ead9633ec00bc838ec73",
      "bytes": 8429
    },
    "generation": 1,
    "publishedAt": "2026-11-13T09:40:51.897Z"
  },
  "sourceCommit": "eb8fd3e0740271f60ef9496c417bc362badb5ddb",
  "generationCommit": "6fe34e1674aabe1335bb9c0f560a25037d3e41a9",
  "publicationCommit": "6fe34e1674aabe1335bb9c0f560a25037d3e41a9",
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "b6ceecdd9e16bf133e88dcaae51aa7125649840d723aad02c9db6580bc48d919",
  "template": {
    "path": "singularity/work-items/aswhin/config/wfa/blobs/sha256/8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "sha256": "8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/aswhin/context/inputs-planning-gen1.json",
    "sha256": "164eb15e0abdb8fedd92962abac2bceb04ce41006e9045d821b13dd30d21bf65",
    "renderedSha256": "8c2d17b7032cc98624b03ddadad1ac60985441b6bd6c19da8bcf7400a9d6e864",
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
      "path": "singularity/work-items/aswhin/telemetry/planning-gen1.json",
      "sha256": "dd8047db996d9306c6d71b4084d8083122449955fafbba3e97acf89abd81f1e8",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29040,
        "estimatedTokens": 7260,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29040,
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
      "startedAt": "2026-11-13T09:40:51.897Z",
      "completedAt": "2026-11-13T09:40:51.897Z",
      "agent": "architect",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Implementation plan — aswhin

## Agent brief

Add an explicit binary-conversion action to the calculator's shared result display. It will evaluate the entered expression using the existing evaluator, convert a positive finite numeric result to base 2, and show that representation without changing ordinary calculation behavior. Extend evaluator and App interaction tests; for input 2, verify the displayed `10` and retain a screenshot for visual review. Main risks are changing existing equals/history behavior or capturing stale output; keep conversion separate from ordinary evaluation and capture only after the requested result is visible. [ASWHIN:REQ-001] [ASWHIN:AC-001]

## Approach

Keep arithmetic evaluation and binary formatting in the existing evaluator utility, with the conversion action wired through `App` and exposed by the shared `Display` used by Standard and Scientific modes. Reuse the current expression/result state and display rather than adding a calculator mode or changing default equals semantics. Convert only a successful positive finite numeric value; the approved scope does not define zero, negative, or invalid-input behavior. [ASWHIN:REQ-001]

## Affected surfaces

The change is limited to the calculator's shared expression/result flow: `App` handles the conversion request, `Display` exposes it to users in Standard and Scientific modes, and the evaluator owns numeric-to-binary formatting. No data model, persistence format, external contract, or configuration change is planned. [ASWHIN:REQ-001]

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Connect an explicit conversion action to expression evaluation and display state without changing the normal equals path. | [ASWHIN:REQ-001] |
| `src/components/Display.jsx` | Expose the conversion request alongside the shared calculator result display. | [ASWHIN:REQ-001] |
| `src/utils/evaluator.js` | Provide binary conversion from a positive finite evaluated numeric result. | [ASWHIN:REQ-001] |

## Sequencing

1. Add and unit-test the evaluator conversion behavior, including the required value 2 and a second positive value. [ASWHIN:REQ-001]
2. Wire an explicit action through `App` and `Display`, preserving normal equals, expression, and history behavior; add an interaction regression for requesting conversion of 2. [ASWHIN:REQ-001] [ASWHIN:AC-001]
3. Run the focused tests and build, then exercise input 2 in the running calculator, confirm the visible result is `10`, and capture the retained screenshot for visual review. [ASWHIN:AC-001]

## Test strategy

Exercise both the conversion utility and the user-visible request path. The table maps each approved clause to exact source, test, or retained-evidence paths. The AC-001 interaction test checks the displayed value, while its primary visual contract requires a retained screenshot of the visible result; the screenshot is retained separately from test-run output. Existing arithmetic behavior remains covered by the App regression tests. [ASWHIN:REQ-001] [ASWHIN:AC-001]

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `ASWHIN:AC-001` | `singularity/work-items/aswhin/evidence/binary-result.png` | `src/App.test.jsx` | evidence | Request conversion for input 2; the calculator displays `10`, and the retained screenshot shows that result. |
| `ASWHIN:REQ-001` | `src/App.jsx`, `src/components/Display.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A user can request binary representation for a positive decimal input; the displayed result is its base-2 representation. |

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `ASWHIN:AC-001` | binary-conversion-test | test | `src/App.test.jsx` | primary | module-observed |
| `ASWHIN:AC-001` | binary-result-screen | visual | `Calculator result display for input 2` | primary | source-bound |

## Supporting files

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Risks: conversion could accidentally alter ordinary equals behavior or expose a stale result; detect this with the existing arithmetic regressions and an interaction test that requests conversion after entering 2. A screenshot taken before the display updates would not prove the criterion; capture only after the visible result is `10` and inspect the retained image. If the conversion path regresses, revert the isolated conversion wiring/helper and retain the ordinary evaluator and equals path. Fractional positive inputs are within the broad positive-decimal wording, so use the runtime's numeric base-2 representation and cover a fractional value in evaluator tests; zero, negatives, and invalid input remain outside the approved scope. [ASWHIN:REQ-001] [ASWHIN:AC-001]

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/aswhin/artifacts/specification/spec.md sha256=af3c4414acec0822d9ddc5b7107b39aa7328ef628e4671d68acd12376c588ab5 status=captured projection=approved-summary representation-sha256=sha256:947c42903f78ce901dc95378400026c6617eba88d7e7962b9689f80b2549af9c brief-sha256=947c42903f78ce901dc95378400026c6617eba88d7e7962b9689f80b2549af9c expansion=sfref:v1:story:aswhin:8fbb0c5ecbcc56d55111db1a2cb8c1777eb138ce58eae785fe1543087ebdac00 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `aswhin`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/aswhin/artifacts/specification/spec.md`
- Source SHA-256: `3c78e604fcd69b7210375e283e4b1c471e785b07007ac7c9b052325869d6aee2`

## Summary from “Agent brief”

Implement conversion of positive decimal inputs to their binary representation in the calculator. The calculator user enters a positive decimal value and sees its binary value; for input 2, the display is 10. The requested screenshot is visual evidence of the displayed result. This specification does not define behavior for non-positive or non-decimal inputs.

## Actors

Calculator user: enters a value and views its binary representation. No privileged role or separate authorization is specified.

## User scenarios

### S1 — A calculator user converts a positive decimal value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available for input and display.

- **Given** the calculator user has a positive decimal value to convert
  **When** the user requests its binary representation
  **Then** the calculator displays that value in binary.

- **Given** the calculator user enters the positive decimal value 2
  **When** the user requests its binary representation
  **Then** the calculator displays 10 and a screenshot is captured showing that result. [scope:SRI-9b082baa4528]

## Failure and empty states

- **Empty:** Not applicable: this conversion does not depend on a collection of records.
- **Failure:** No failure behavior is specified by the pinned request or clarification.
- **Partial:** No partial-result behavior is specified by the pinned request or clarification.

## Permissions

Not applicable: the pinned request identifies no restricted actions or distinct permissions.

## Boundary conditions

The specified input domain is positive decimal values. Behavior for zero, negative values, and non-decimal input is unspecified and is not an acceptance requirement.

## Requirements

- The calculator shall display the binary representation of a positive decimal input when the user requests conversion. *(S1)* [ASWHIN:REQ-001]

- For input 2, the calculator displays 10 and a screenshot showing the displayed result is captured. *(S1)* [ASWHIN:AC-001]

## Non-functional requirements

None for this change; no non-functional requirement is stated in the pinned request or clarification.

## Assumptions

The user-confirmed interpretation is that “positive non decimal” means positive decimal inputs converted to binary, and that input 2 displays 10.

## Out of scope

Handling of zero, negative, or non-decimal inputs; other base conversions; and behavior beyond the confirmed positive-decimal-to-binary conversion.

> Exact source expansion: `sfref:v1:story:aswhin:8fbb0c5ecbcc56d55111db1a2cb8c1777eb138ce58eae785fe1543087ebdac00`. Use `singularity-flow show sfref:v1:story:aswhin:8fbb0c5ecbcc56d55111db1a2cb8c1777eb138ce58eae785fe1543087ebdac00 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
