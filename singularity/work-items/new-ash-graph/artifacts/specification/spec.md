<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-ash-graph",
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
      "sha256": "4caa39be35bc5d52717c0f3a8693fbbbdc43a54a6ca1bb59e8f318e827af9aa7",
      "bytes": 9555
    },
    "generation": 1,
    "publishedAt": "2026-11-18T10:51:21.950Z"
  },
  "sourceCommit": "2ff37be6a672a796247880f2dc3e8a671e57db09",
  "generationCommit": "4b623600c3591e24d9c975d6f86270da65f7adf9",
  "publicationCommit": "4b623600c3591e24d9c975d6f86270da65f7adf9",
  "configSha256": "b8be8eefc29f357791638bbb726ea7c65cf83db480b10f325b73db73e444c8f1",
  "sourceSha256": "fe552fb5ad5cc2a7646f23c31a3489d63e41c455b94b535cc2cbfdcfca4a98a6",
  "template": {
    "path": "singularity/work-items/new-ash-graph/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
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
    "path": "singularity/work-items/new-ash-graph/context/clarifications-specification-gen1.json",
    "sha256": "0f815f785b16fe2383e3046c47e9e0f00414f4ad754c7803390062fcfc85213d",
    "promptSha256": "9354017f08fbefb3da4966c706b7e71fd8c5a9063c8656e44e796819177559ea",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-11-18T10:50:20.415Z",
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
      "path": "singularity/work-items/new-ash-graph/telemetry/specification-gen1.json",
      "sha256": "98f7f469106ca0195d6abc903d3b0c3f1ca8f26ddd6dcbe6175e01a7fcc77752",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30046,
        "estimatedTokens": 7512,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30046,
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
      "startedAt": "2026-11-18T10:51:21.950Z",
      "completedAt": "2026-11-18T10:51:21.950Z",
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

# Specification — new-ash-graph

## Agent brief

Create a graph plotter for an application user. The user-provided `graphsc.jpg` is a visual reference for a graphing-calculator layout: an expression panel on the left, a Cartesian graph canvas, and a mathematical keypad along the bottom. The required graph case is a circle centered at the origin with radius 6 units, verified by a Playwright test. No other graph types or behaviors are specified.

## Actors

Graph-plotter user: requests and views a plot. No additional roles or authority rules are specified.

## User scenarios

### S1 — Plot the radius-6 circle

**Priority:** P1
**Actor:** Graph-plotter user
**Context:** The graph-plotting interface displays an expression panel and a Cartesian graph canvas.

- **Given** the graph-plotting interface is available
  **When** a circle centered at (0,0) with radius 6 units is requested
  **Then** the circle is represented on the graph canvas and a Playwright test verifies the case.

## Failure and empty states

- **Empty:** Behavior when no plot is requested is not specified by the available evidence.
- **Failure:** Failure behavior is not specified by the available evidence.
- **Partial:** Partial-result behavior is not specified by the available evidence.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `NEW-ASH-GRAPH:REQ-001` | S1 | success |
| `NEW-ASH-GRAPH:REQ-002` | S1 | success |
| `NEW-ASH-GRAPH:AC-001` | S1 | success |
| `NEW-ASH-GRAPH:AC-002` | S1 | success |

## Permissions

Not applicable: the Story specifies no roles, authentication, or access-control behavior.

## Boundary conditions

The only specified numeric case is a circle of radius 6 units centered at (0,0). Other ranges, limits, and boundary behavior are unspecified.

## Requirements

- The graph-plotter interface shall present an expression/algebra panel on the left, a Cartesian graph canvas with axes and grid, and a mathematical keypad along the bottom, following the generic layout shown in `graphsc.jpg`. *(S1)* [NEW-ASH-GRAPH:REQ-001]
- A Playwright test shall exercise the plotter with a circle centered at (0,0) with radius 6 units and verify that the circle is represented. [scope:SRI-15d4e5bd263a] *(S1)* [NEW-ASH-GRAPH:REQ-002]

- A Playwright test verifies that the graph plotter represents a circle centered at (0,0) with radius 6 units. *(S1)* [NEW-ASH-GRAPH:AC-001]
- Visual inspection confirms that the graph-plotter layout has a left expression/algebra panel, a Cartesian graph canvas with axes and grid, and a mathematical keypad along the bottom. *(S1)* [NEW-ASH-GRAPH:AC-002]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `NEW-ASH-GRAPH:REQ-001` | visual, inspection | `NEW-ASH-GRAPH:AC-002` |
| `NEW-ASH-GRAPH:REQ-002` | test | `NEW-ASH-GRAPH:AC-001` |
| `NEW-ASH-GRAPH:AC-001` | test | `NEW-ASH-GRAPH:AC-001` |
| `NEW-ASH-GRAPH:AC-002` | visual, inspection | `NEW-ASH-GRAPH:AC-002` |

## Non-functional requirements

None specified by the pinned Story or recorded clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

“Palyright” is interpreted as Playwright, and “circle of 6 unit radius in origin” is interpreted as a circle centered at (0,0) with radius 6 units; the user confirmed this interpretation. `graphsc.jpg` supplies the generic layout reference; its blank graph area does not specify additional graph types or behaviors.

## Out of scope

Additional graph types, behavior for other navigation destinations, limits, and non-functional targets are not specified by the available evidence.

## Sources

- Pinned Story source: `singularity/work-items/new-ash-graph/source.json` — requests a graph plotter like an attachment and a Playwright test for a radius-6 circle at the origin.
- Human clarification, specification generation 1 — confirmed the circle interpretation and identified `graphsc.jpg` as the visual reference.
- User-supplied screenshot: `graphsc.jpg` — visual reference for the generic graphing-calculator layout.
