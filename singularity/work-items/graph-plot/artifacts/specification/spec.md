<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "graph-plot",
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
      "sha256": "0a3b6e17bef3d84523f63de34617d83189a1f3ccb518852005963cb2e66cad9f",
      "bytes": 5109
    },
    "generation": 1,
    "publishedAt": "2026-10-26T05:48:15.023Z"
  },
  "sourceCommit": "5675679e02fc8a695ed0e5604af5cec529803272",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "1113026516d93949e81f6239fea642dbe91f94ba1362bc77a0d8b2ba31c2cd35",
  "template": {
    "path": "singularity/work-items/graph-plot/config/wfa/blobs/sha256/c6e1ea9cb3d43631d47fedc023295faf39204e7efa40da81db1a51c3d4c0f1d9",
    "sha256": "c6e1ea9cb3d43631d47fedc023295faf39204e7efa40da81db1a51c3d4c0f1d9",
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
    "path": "singularity/work-items/graph-plot/context/clarifications-specification-gen1.json",
    "sha256": "056820b0c1458dcf24827bf9f86ebabdb659351beff62c61b3d71c633d6120c9",
    "promptSha256": "a154a5db51fc4486dfbe7a63ea89245924733aa4df8077642f85668706e60272",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-10-26T04:23:36.131Z",
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
      "path": "singularity/work-items/graph-plot/telemetry/specification-gen1.json",
      "sha256": "590e39036d812b19982d855e21c258a8b07acaf50609fe770e04c85c04894367",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26734,
        "estimatedTokens": 6684,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26734,
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
      "startedAt": "2026-10-26T05:48:15.023Z",
      "completedAt": "2026-10-26T05:48:15.023Z",
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

# Specification — graph-plot

<!--
Scenarios come first, and general requirements come after them `[SPK:REQ-068]`. That ordering is the
template's opinion: a requirement written before anyone has described the situation it serves tends
to describe the system instead of the need, and nobody notices until verification.

Where the current Story evidence leaves something material unknown, say so with a marker rather
than guessing. Use this syntax:

    [NEEDS CLARIFICATION: <one question grounded in the current Story evidence>]

Replace the angle-bracketed placeholder; never copy or ask it as written. The question must be one
non-empty line and must arise from the pinned sources, approved upstream artifacts, repository world
model, or a contradiction among them. Markers are extracted the same way clauses are, so a marker
inside fenced or inline code is ignored `[SPK:REQ-063]`. This phase blocks publication while any
marker is unresolved, and a marker is only resolved when a later generation removes it *and* records
the answer `[SPK:REQ-067]` — deleting the text alone is an integrity failure, not an answer.
-->

Keep every section of this template. When one does not fit this change (for example Permissions
for a library or command-line tool with no roles), write `Not applicable: <reason>` under it
rather than deleting it: later steps carry Actors, Failure and empty states, Permissions,
Boundary conditions and the other sections forward, and stop when one is missing.

## Agent brief

Provide a user-facing graph of the sine wave, with the 30-degree evaluation represented as
sin(30°) = 0.5. Use the supplied screenshot as a visual reference for the graphing interface, not
as a specification of every visible control. The request names no additional roles, limits,
failure behavior, or non-functional requirements.

## Actors

| Actor | Need / authority |
|---|---|
| User | Views the sine-wave graph and its 30-degree evaluation. No distinct permission levels are specified. |

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Viewing the sine-wave plot

**Priority:** P1
**Actor:** User
**Context:** The graphing interface is available.

- **Given** the user views the sine-wave graph
  **When** the 30-degree evaluation is considered
  **Then** the plotted sine wave corresponds to sin(x), and sin(30°) is 0.5.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Not specified in the pinned request or clarification.
- **Failure:** Not specified in the pinned request or clarification.
- **Partial:** Not specified in the pinned request or clarification.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `GRAPH-PLOT:REQ-001` | S1 | success |
| `GRAPH-PLOT:AC-001` | S1 | success |

## Permissions

Not applicable: the pinned request and clarification specify no roles or permission boundaries.

## Boundary conditions

No limits, sizes, counts, timeouts, or other boundary behavior are specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The UI shall plot the sine wave and represent the evaluation at 30 degrees, where sin(30°) = 0.5; this covers “screenshot and sin30 plot” [scope:SRI-fa892fa5f5cc] and the confirmed degree unit in the specification generation 1 clarification. *(S1)* [GRAPH-PLOT:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- On visual review, the graphing screen uses DOC-001 as a visual reference and shows the sine-wave plot with its 30-degree evaluation; individual controls visible in the reference are not additional requirements. [scope:DOC-001] *(S1)* [GRAPH-PLOT:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `GRAPH-PLOT:REQ-001` | test, visual | `GRAPH-PLOT:AC-001` |
| `GRAPH-PLOT:AC-001` | test, visual | `GRAPH-PLOT:AC-001` |

## Non-functional requirements

None specified in the pinned request or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The graphing interface can present a sine-wave plot. The user confirmed that 30 is degrees.
The supplied screenshot is a UI reference; its individual controls are not additional behavior
requirements unless separately specified.

## Out of scope

Behavior for other equations, interactions with controls visible in the reference screenshot,
error handling, data persistence, and performance or accessibility targets are not specified by
the pinned request or clarification.

## Sources

- Pinned Story source: `singularity/work-items/graph-plot/source.json` — “plot a graph for an
  equation”; acceptance criterion “screenshot and sin30 plot.”
- `DOC-001 — Screenshot 2026 10 26 at 9.37.24 AM` — inspected image, used as a UI reference.
- Clarification: specification generation 1 — the user confirmed a sine-wave plot, the screenshot
  as a UI reference, and 30 degrees.
