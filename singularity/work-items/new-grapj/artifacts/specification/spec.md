<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-grapj",
  "workType": "spec-driven-standard",
  "phase": "specification",
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
      "filename": "spec.md",
      "mediaType": "text/markdown",
      "sha256": "6ab982064e75876cc9884867bb3daf79c3b361e714416e09bd240837986bb39e",
      "bytes": 9269
    },
    "generation": 1,
    "publishedAt": "2026-11-17T22:46:28.341Z"
  },
  "sourceCommit": "630bae13d1445cd6ae0a6e53c7a674a5f3964acb",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "b8be8eefc29f357791638bbb726ea7c65cf83db480b10f325b73db73e444c8f1",
  "sourceSha256": "48c9e3980f4a2f393670922524978e4451f1f4c9ad586cc457eeb7f2ad87898d",
  "template": {
    "path": "singularity/work-items/new-grapj/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
    "sha256": "c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/spec.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/new-grapj/context/clarifications-specification-gen1.json",
    "sha256": "cede194c0f59a74751a950a0f0c9b87debf87a5060c1066cef69ee978de70fbd",
    "promptSha256": "ba2b812307825b64dc302f110cf39b487eb71ad5fb77d110c5ab6988dfe89918",
    "responses": 2,
    "markers": [],
    "recordedAt": "2026-11-17T22:44:45.758Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": null,
      "githubLookup": "not-checked"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/new-grapj/telemetry/specification-gen1.json",
      "sha256": "d39fe6473d2b9cc10d7d1d2a5666a9a5a3f7a84009813d05a011c03bd51046ef",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29868,
        "estimatedTokens": 7467,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29868,
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
      "startedAt": "2026-11-17T22:46:28.341Z",
      "completedAt": "2026-11-17T22:46:28.341Z",
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

# Specification — new-grapj

## Agent brief

Create a 2D Cartesian function plotter for an application user. It must render mathematical functions in a Cartesian plane and include the specifically requested circle centered at the origin with radius 6 units. A Playwright test must verify that circle. The missing reference attachment provides no available layout or control details, so this specification does not prescribe them.

## Actors

Application user: requests a function plot. No distinct roles or permission authority are specified.

## User scenarios

### S1 — Plot a mathematical function

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a mathematical function plot
  **Then** the plotter renders the function in a two-dimensional Cartesian coordinate plane.

### S2 — Plot and verify the specified circle

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a circle centered at the origin with radius 6 units
  **Then** the rendered graph represents the circle `x² + y² = 36`.

- **Given** the circle plot is available
  **When** the specified Playwright test checks it
  **Then** the test verifies that the circle is centered at the origin and has radius 6 units.

## Failure and empty states

- **Empty:** No empty-state behavior is specified by the pinned request.
- **Failure:** No failure behavior is specified by the pinned request.
- **Partial:** No partial-result behavior is specified by the pinned request.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `NEW-GRAPJ:REQ-001` | S1 | success |
| `NEW-GRAPJ:REQ-002` | S2 | success |
| `NEW-GRAPJ:AC-001` | S2 | success |

## Permissions

Not applicable: the request identifies an application user and specifies no distinct roles or permission controls.

## Boundary conditions

The only specified numeric boundary is a circle of radius 6 units centered at the origin. No other domain, range, count, precision, or timeout is specified.

## Requirements

- The application shall render requested mathematical functions in a two-dimensional Cartesian coordinate plane. *(S1)* [NEW-GRAPJ:REQ-001]
- The plotter shall render a circle centered at `(0,0)` with radius 6 units, represented by `x² + y² = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [NEW-GRAPJ:REQ-002]

- A Playwright test shall verify that the rendered circle is centered at the origin and has radius 6 units. *(S2)* [NEW-GRAPJ:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `NEW-GRAPJ:REQ-001` | test | - |
| `NEW-GRAPJ:REQ-002` | test | - |
| `NEW-GRAPJ:AC-001` | test | `NEW-GRAPJ:AC-001` |

## Non-functional requirements

None stated in the pinned request or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The plotter accepts a user request to plot a mathematical function. The pinned request and clarification do not define its input syntax or specific controls.

## Out of scope

Visual parity with the unavailable attachment, specific input syntax or control design, additional plot types, and unrequested numeric or non-functional limits are not defined by this specification.

## Sources

The pinned Story source (`singularity/work-items/new-grapj/source.json`) provides the plotter request and circle test criterion. The specification-generation-1 clarification record confirms a 2D Cartesian function plotter and that the circle criterion means radius 6 centered at the origin. No supporting documents are available; the pinned source states that they were not copied, so the referenced attachment cannot inform visual details.
