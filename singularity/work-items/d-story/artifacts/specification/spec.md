<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "d-story",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 1,
  "status": "awaiting_approval",
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
      "sha256": "1411761bb74a2bb564249c67eca6c9a5a56e8306cba0227eaef6f83130e57bea",
      "bytes": 11906
    },
    "generation": 1,
    "publishedAt": "2026-11-22T06:53:42.384Z"
  },
  "sourceCommit": "1ea744deae87b3a49df1fcf877962ab9e99be050",
  "generationCommit": "80dec5063bb667bf6ef97ebb858c8a7f366d166f",
  "publicationCommit": "80dec5063bb667bf6ef97ebb858c8a7f366d166f",
  "configSha256": "77dab191fa78ebdbe6f777cf68da8827f2447b711edc65a73b81e12b1b5fb8d2",
  "sourceSha256": "2144a9c6d40147352ce812ef0edef66a750fee5ba927b75b0b653da837ea52f6",
  "template": {
    "path": "singularity/work-items/d-story/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
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
    "path": "singularity/work-items/d-story/context/clarifications-specification-gen1.json",
    "sha256": "beaddaa578ed73c709d1c1c06e97c9aecbb234bb9623eead1c8c26ac4e8054f2",
    "promptSha256": "e9cda55854c91256ce05ba71d1485e6d8bf3ad0966567a53a8086dd8997ae5be",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-11-22T06:52:04.065Z",
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
      "path": "singularity/work-items/d-story/telemetry/specification-gen1.json",
      "sha256": "cb0be0145b90a2af4699fbaf26a96883e3c0ef27012925495719179200f935cb",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 31029,
        "estimatedTokens": 7758,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 31029,
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
      "startedAt": "2026-11-22T06:53:42.384Z",
      "completedAt": "2026-11-22T06:53:42.384Z",
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

# Specification — d-story

## Agent brief

Build a local browser graph plotter that uses the pinned screenshot as visual evidence: show a Cartesian graph area with axes and a grid, initially render `sin(x)`, and let a visitor enter graph expressions. The basic experience must support both function expressions and the implicit circle equation `x^2 + y^2 = 36`, remain usable on desktop and common tablet widths, and require no login, backend, persistence, or external graph service.

## Actors

A visitor is an unauthenticated person using the graph plotter in a supported browser. A visitor may enter expressions and view their plots; no account or elevated authority is required.

## User scenarios

### S1 — Open the graph plotter

**Priority:** P1
**Actor:** Visitor
**Context:** The local browser app is loaded with no saved graph state.

- **Given** no graph expression has been previously entered
  **When** the visitor opens the plotter
  **Then** the app displays a Cartesian graph with axes and grid and plots `sin(x)` initially

- **Given** the plotter is open
  **When** the viewport is within a common desktop or tablet width
  **Then** the graph area remains visible and usable

### S2 — Enter a graph expression

**Priority:** P2
**Actor:** Visitor
**Context:** The plotter is open and an expression entry area is available.

- **Given** the plotter is showing its current graph
  **When** the visitor enters a function or implicit-circle expression
  **Then** the corresponding graph is rendered in the Cartesian graph area

- **Given** the plotter is open
  **When** the visitor replaces `sin(x)` with `x^2 + y^2 = 36`
  **Then** the plotted circle has center `(0, 0)` and radius `6` units

## Failure and empty states

- **Empty:** With no expression selected, the plotter retains the blank Cartesian graph area and does not invent or restore persisted graph state.
- **Failure:** The pinned scope defines no external dependency or backend; failure behavior for unavailable browser rendering, unsupported browser capabilities, or malformed expressions is not specified and requires clarification only if implementation planning identifies it as material.
- **Partial:** Partial rendering is not claimed by the pinned evidence; no partial-success result is specified.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `D-STORY:REQ-001` | S1 | success |
| `D-STORY:REQ-002` | S1 | success |
| `D-STORY:REQ-002` | S2 | success |
| `D-STORY:REQ-003` | S1 | success |
| `D-STORY:REQ-004` | S1 | success |
| `D-STORY:REQ-005` | S2 | success |
| `D-STORY:AC-001` | S1 | success |
| `D-STORY:AC-002` | S2 | success |
| `D-STORY:AC-003` | S2 | success |
| `D-STORY:AC-004` | S1 | success |

## Permissions

Not applicable: the product is an unauthenticated local browser experience, and the pinned evidence grants graph viewing and expression entry to every visitor. There is no reader role or restricted action.

## Boundary conditions

The initial expression is `sin(x)`. The circle acceptance boundary is the equation `x^2 + y^2 = 36`, whose center is `(0, 0)` and whose radius is `6` units. The pinned evidence does not establish expression-count limits, domain limits, zoom limits, persistence limits, or timeouts; this specification therefore does not state or infer them.

## Requirements

- The plotter shall render a Cartesian graph area with visible axes and a grid using the pinned screenshot as visual evidence. *(S1)* [D-STORY:REQ-001]
- The plotter shall allow a visitor to enter and replace graph expressions in the local browser. *(S1, S2)* [D-STORY:REQ-002]
- The plotter shall initially render `sin(x)` when no prior graph state exists. *(S1)* [D-STORY:REQ-003]
- The plotter shall remain usable on desktop and common tablet widths. *(S1)* [D-STORY:REQ-004]
- The plotter shall render `x^2 + y^2 = 36` as a circle centered at `(0, 0)` with radius `6` units when that expression is entered or configured. *(S2)* [D-STORY:REQ-005] [scope:SRI-15d4e5bd263a]

- On initial load with no saved state, `sin(x)` is the visible plotted expression and the Cartesian axes and grid are visible. *(S1)* [D-STORY:AC-001]
- When `x^2 + y^2 = 36` is entered or configured, the rendered circle has center `(0, 0)` and radius `6` units, and a Playwright test verifies that result. *(S2)* [D-STORY:AC-002] [scope:SRI-15d4e5bd263a]
- When a visitor replaces the current expression with a supported function or implicit equation, the Cartesian graph visibly updates to that expression. *(S2)* [D-STORY:AC-003]
- The graph area remains visible and usable at representative desktop and common tablet widths. *(S1)* [D-STORY:AC-004]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `D-STORY:REQ-001` | test, visual | `D-STORY:AC-001` |
| `D-STORY:REQ-002` | test, visual | `D-STORY:AC-003` |
| `D-STORY:REQ-003` | test, visual | `D-STORY:AC-001` |
| `D-STORY:REQ-004` | visual | `D-STORY:AC-004` |
| `D-STORY:REQ-005` | test, visual | `D-STORY:AC-002` |
| `D-STORY:AC-001` | test, visual | `D-STORY:AC-001` |
| `D-STORY:AC-002` | test, visual | `D-STORY:AC-002` |
| `D-STORY:AC-003` | test, visual | `D-STORY:AC-003` |
| `D-STORY:AC-004` | visual | `D-STORY:AC-004` |

## Non-functional requirements

None for this change: the pinned evidence establishes no measurable latency, throughput, availability, accessibility, privacy, or retention target beyond local browser operation.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- The pinned screenshot is a visual reference, not a requirement to reproduce every Desmos control or brand element.
- A basic plotter will support expression entry and graph display, but the exact expression syntax beyond function and implicit-circle examples is to be determined during implementation.
- The app is expected to operate locally in a browser without authentication or saved state.

## Out of scope

- Authentication, accounts, and user profiles.
- Server-side APIs, persistence, and external graph services.
- Saving or sharing graphs.
- Reproduction of Desmos-specific branding or every control visible in the screenshot.
- Advanced graphing features not established by the pinned request or clarification.

## Sources

- DOC-001 — Screenshot 2026 11 22 at 12.12.40 PM: inspected as the visual reference for the Cartesian graph, axes, grid, expression area, and initial `sin(x)` display.
