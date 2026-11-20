<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "arshy",
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
      "sha256": "62329eeb7517a12804833027e12fdf0908500174b5b1df0fd19f44da964870d2",
      "bytes": 9195
    },
    "generation": 1,
    "publishedAt": "2026-11-20T05:10:26.495Z"
  },
  "sourceCommit": "61bdf5ec6f566bb1a1618da8365e18f1fffd9f44",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "106d3c3a8dbea5992306f47e45f781900b06ed64faafb501f8945ee96a55a9a6",
  "sourceSha256": "d7180144abe937580cb41e978585f7916fc3f4f16790c2cbd45f2afc03f8dcf8",
  "template": {
    "path": "singularity/work-items/arshy/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
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
    "path": "singularity/work-items/arshy/context/clarifications-specification-gen1.json",
    "sha256": "07776cd877d1f34b05b3d7008d9e7b6ab9ec71a49f68ca010e0eddf81f2f1069",
    "promptSha256": "21ff847867a72ad2e8179465350cf7477c8bcd5645c7afcd7a090bf798508502",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-11-20T05:08:55.561Z",
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
      "path": "singularity/work-items/arshy/telemetry/specification-gen1.json",
      "sha256": "873d4c6d1cb1dc2b4b10e7f0b8b76b8ac20f86704f16bab622ec8e0149b9f309",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30086,
        "estimatedTokens": 7522,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30086,
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
      "startedAt": "2026-11-20T05:10:26.495Z",
      "completedAt": "2026-11-20T05:10:26.495Z",
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

# Specification — arshy

## Agent brief

An app user can use a Desmos-inspired plotter to enter and view general 2D Cartesian equations. The required example is a circle of radius 6 centered at the origin, and Playwright coverage must verify that case. No attachment was available, so the Desmos link is a reference direction rather than a pixel-level design specification. No additional graph limits or non-functional constraints were supplied.

## Actors

The app user enters a Cartesian equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

### S1 — Plot a Cartesian equation

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available in the existing application.

- **Given** the graph plotter is available
  **When** the user enters the Cartesian equation `y = x`
  **Then** the plotter displays its corresponding 2D graph.

### S2 — Verify the required circle

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available.

- **Given** the graph plotter is available
  **When** the user enters `x^2 + y^2 = 36`
  **Then** the plotter displays a circle centered at `(0, 0)` with radius `6`.

## Failure and empty states

- **Empty:** No Story-specific empty-state behavior is specified.
- **Failure:** No invalid-expression or rendering-failure behavior is specified.
- **Partial:** No partial-completion behavior is specified.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `ARSHY:REQ-001` | S1 | success |
| `ARSHY:REQ-002` | S2 | success |
| `ARSHY:AC-001` | S2 | success |
| `ARSHY:AC-002` | S1 | success |

## Permissions

Not applicable: the Story specifies a single app-user role and no permission tiers.

## Boundary conditions

The required circle has radius `6` and center `(0, 0)`. No other input, viewport, size, count, or timeout limits are specified.

## Requirements

- The plotter shall accept user-supplied 2D Cartesian equations and display their corresponding graphs. *(S1)* [ARSHY:REQ-001]
- The plotter shall display a circle of radius `6` centered at `(0, 0)`, represented by `x^2 + y^2 = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [ARSHY:REQ-002]

- A Playwright test shall verify that `x^2 + y^2 = 36` is plotted as a circle centered at `(0, 0)` with radius `6`. *(S2)* [ARSHY:AC-001]
- A Playwright test shall verify that entering `y = x` displays its corresponding 2D Cartesian graph. *(S1)* [ARSHY:AC-002]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `ARSHY:REQ-001` | test | `ARSHY:AC-002` |
| `ARSHY:REQ-002` | test | `ARSHY:AC-001` |
| `ARSHY:AC-001` | test | `ARSHY:AC-001` |
| `ARSHY:AC-002` | test | `ARSHY:AC-002` |

## Non-functional requirements

None specified for this change.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- The supplied Desmos URL is a conceptual reference; no attached image or exact visual specification is available.
- “General 2D Cartesian equations” does not define a broader expression grammar or additional Desmos features.

## Out of scope

No additional plotting features beyond general 2D Cartesian equation plotting and the required circle case are committed. Exact visual reproduction of Desmos and constraints not stated in the Story or clarification are out of scope.

## Sources

- Pinned Story source: `singularity/work-items/arshy/source.json`.
- Clarification: the user supplied the Desmos URL as the reference direction, accepted general 2D Cartesian plotting with the circle as a required case, and specified no additional constraints.
- Supporting attachments/documents: none were copied or attached. Reference: https://www.desmos.com/calculator.
