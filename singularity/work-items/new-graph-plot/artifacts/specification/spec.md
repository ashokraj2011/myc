<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-graph-plot",
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
      "sha256": "cb4728d45604a3ac23963d84de92a2cdc8fdc281abadedf8367121a48bef689d",
      "bytes": 4618
    },
    "generation": 1,
    "publishedAt": "2026-11-10T10:58:59.560Z"
  },
  "sourceCommit": "027edc79fdac4f9832def1f14e5066e165ed9b47",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "2017a123798cffdcb0dd15ee35d04787c8b0d908f4d1e1007b1082ac3460a92f",
  "template": {
    "path": "singularity/work-items/new-graph-plot/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
    "sha256": "fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/new-graph-plot/context/clarifications-specification-gen1.json",
    "sha256": "c15f1d2a62c2586961cf6cddab2dfcef327d5286462d26400df76f5facb16937",
    "promptSha256": "e9ced306f67b7cf0b02da50cdeb2396f303fd4efcf96a30f5e0fb9c8a06a8f70",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-11-10T10:55:30.907Z",
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
      "path": "singularity/work-items/new-graph-plot/telemetry/specification-gen1.json",
      "sha256": "e7caadafb29a64f823181b3ee835006ccf0ba491764921133759091811360d69",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29083,
        "estimatedTokens": 7271,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29083,
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
      "startedAt": "2026-11-10T10:58:59.560Z",
      "completedAt": "2026-11-10T10:58:59.560Z",
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

# Specification — new-graph-plot

## Agent brief

Add graph plotting to the existing calculator. A calculator user can plot a supplied `y=f(x)` function and render the full circle specified by center `(0,0)` and radius `6`. The circle must be tested with Playwright. The attached screenshot is a general reference, not a specification of particular controls or visual styling.

## Actors

- **Calculator user:** supplies graph inputs and views the resulting plot. The evidence specifies no separate roles or authority levels.

## User scenarios

### S1 — Plot a function in the calculator

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The user is using the existing calculator.

- **Given** the calculator's graph plotter is available
  **When** the user supplies a `y=f(x)` function to plot
  **Then** the plotter presents the corresponding curve.

### S2 — Plot the requested circle

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The user supplies graph inputs specifying center `(0,0)` and radius `6`.

- **Given** the graph inputs specify a circle centered at the origin with radius `6`
  **When** the user requests the plot
  **Then** the plotter presents the complete circle, and a Playwright test verifies the plotted geometry.

## Failure and empty states

- **Empty:** No behavior for an empty graph input is specified by the pinned sources or clarification.
- **Failure:** No graph-generation failure behavior or error wording is specified.
- **Partial:** No partial-rendering behavior is specified.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `NEW-GRAPH-PLOT:REQ-001` | S1 | success |
| `NEW-GRAPH-PLOT:AC-001` | S1 | success |
| `NEW-GRAPH-PLOT:REQ-002` | S2 | success |
| `NEW-GRAPH-PLOT:AC-002` | S2 | success |

## Permissions

Not applicable: the pinned evidence describes a calculator user and specifies no authorization roles or permission differences.

## Boundary conditions

- The explicitly requested circle is centered at `(0,0)` and has radius `6` graph units.
- No other numeric range, precision, domain, or boundary behavior is specified.

## Requirements

- The existing calculator shall provide a graph plotter that accepts a user-supplied `y=f(x)` function and presents its plotted curve. This is the integrated-calculator scope selected in clarification `Q-001`. *(S1)* [NEW-GRAPH-PLOT:REQ-001]
- When the supplied graph inputs specify a circle centered at `(0,0)` with radius `6`, the plotter shall render the complete circle. This fulfills the pinned circle-test request [scope:SRI-15d4e5bd263a] and the full-circle clarification `Q-004`. *(S2)* [NEW-GRAPH-PLOT:REQ-002]

Acceptance criteria:

- A Playwright test verifies that a supplied `y=f(x)` function is presented as its corresponding plotted curve. *(S1)* [NEW-GRAPH-PLOT:AC-001]
- A Playwright test verifies that the plotted circle is complete, centered at `(0,0)`, and has radius `6`. *(S2)* [NEW-GRAPH-PLOT:AC-002]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `NEW-GRAPH-PLOT:REQ-001` | test | `NEW-GRAPH-PLOT:AC-001` |
| `NEW-GRAPH-PLOT:REQ-002` | test | `NEW-GRAPH-PLOT:AC-002` |
| `NEW-GRAPH-PLOT:AC-001` | test | `NEW-GRAPH-PLOT:AC-001` |
| `NEW-GRAPH-PLOT:AC-002` | test | `NEW-GRAPH-PLOT:AC-002` |

## Non-functional requirements

None specified by the pinned sources or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- The response `1` to clarification `Q-001` selects the first option: graph plotting is part of the existing calculator and includes plotting a supplied `y=f(x)` function.
- Circle inputs identify the requested center and radius; the required observable result is the complete circle. The specification does not prescribe the input syntax or controls.
- The response to `Q-003` makes the attached screenshot a general reference; no particular layout, controls, or styling are acceptance criteria.

## Out of scope

No additional graph types, formula syntax, controls, visual styling, role-based permissions, error behavior, or non-functional targets are specified by this Story. This records the scope of this specification and does not preclude future decisions.

## Sources

- Pinned Story source: `singularity/work-items/new-graph-plot/source.json` (SHA-256 `2017a123798cffdcb0dd15ee35d04787c8b0d908f4d1e1007b1082ac3460a92f`).
- `DOC-001 — Screenshot 2026 11 10 at 4.17.35 PM`: inspected pinned image; treated as a general reference per clarification `Q-003`.
- Recorded clarification responses `Q-001` through `Q-004` for specification generation 1.
