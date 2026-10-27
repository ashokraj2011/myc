<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "ws-graph",
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
      "sha256": "f25599c43fb67a18f1547f2c5ac7acc01c678e0abca2ac3218aaf6ca306733d4",
      "bytes": 8909
    },
    "generation": 1,
    "publishedAt": "2026-10-27T02:43:05.003Z"
  },
  "sourceCommit": "debf67a1050b869fc827f810fd4bc321e116f547",
  "generationCommit": "efb69c055b23edf2d97973a37f727aac6fadffbc",
  "publicationCommit": "efb69c055b23edf2d97973a37f727aac6fadffbc",
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "22a0ed933ff17839158bae16a9fba927d5f8c45134c73afb59e5bc92143d9210",
  "template": {
    "path": "singularity/work-items/ws-graph/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/ws-graph/context/clarifications-specification-gen1.json",
    "sha256": "6bba2f4c1a50a634f8208a1b8af5a3b327150bfffaf35492cadda8de8b041392",
    "promptSha256": "76b3e205f9045d07d67a1647e8e38a27c6f201fb7c44ed0c5940c45c6dedef95",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-10-27T02:40:34.921Z",
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
      "path": "singularity/work-items/ws-graph/telemetry/specification-gen1.json",
      "sha256": "91e52fdc0e94a8c2c9661c24b76c3bec30d7fa8008c22794d761ec0f37c8bd11",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27342,
        "estimatedTokens": 6836,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27342,
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
      "startedAt": "2026-10-27T02:43:05.003Z",
      "completedAt": "2026-10-27T02:43:05.003Z",
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

# Specification — ws-graph

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

<!--
Summarize the approved intent for downstream agents in a compact, standalone form. Include the
problem, intended outcome, principal actors, most important scenarios, hard constraints, and major
exclusions. Do not introduce claims that are absent from the sections below. Exact requirements and
boundary conditions are preserved separately by the governed projection.
-->

An end user needs a well-formatted graph plotting tool in the existing React app. The graphing
view provides an editable equation area and a labeled coordinate grid, and plots the implicit
equation `x^2 + y^2 = 10` as a circle. The attached screenshot is the visual reference for the
equation-and-grid layout. Acceptance requires a screenshot and a Playwright check of entering the
example equation and seeing its plot and coordinate axes/grid. The confirmed initial boundary is
one equation; `y=f(x)`, multiple equations, pan/zoom, and other features not confirmed here are
deferred. No account, persistence, or invalid-input behavior is specified.

## Actors

- **End user:** enters the example equation and views its graph in the app. No separate roles or
  privileged actions are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Plot the reference equation

**Priority:** P1
**Actor:** End user
**Context:** The graphing view is open in the existing React app.

- **Given** the graphing view is open with an editable equation area and labeled coordinate grid,
  **When** the user enters `x^2 + y^2 = 10`,
  **Then** the app plots the equation's circle on the grid.

- **Given** the example equation has been entered and plotted,
  **When** the tool is captured for visual acceptance,
  **Then** the screenshot shows the equation area, labeled coordinate grid, and plotted circle
  in a layout guided by DOC-001.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Behavior before an equation is entered is not specified by the pinned request; the
  acceptance scenario begins with the user entering the example equation.
- **Failure:** Invalid-equation handling and dependency-failure behavior are not specified; this
  specification makes no claim about error messages or recovery.
- **Partial:** No partial-render or partial-input behavior is specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `WS-GRAPH:REQ-001` | S1 | success |
| `WS-GRAPH:REQ-002` | S1 | success |
| `WS-GRAPH:AC-001` | S1 | success |

## Permissions

Not applicable: the evidence specifies one end-user graphing experience and no roles,
authentication, or privileged operations.

## Boundary conditions

- The confirmed initial scope is one entered equation, including the implicit x/y equation in
  the screenshot.
- Support for `y=f(x)`, multiple equations, and pan/zoom is deferred by the clarification.
- No other expression grammar, numeric limits, timeouts, or performance thresholds are specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The graphing view shall present an editable equation area and a labeled coordinate grid in a
  layout guided by the supplied screenshot. *(S1)* [WS-GRAPH:REQ-001]
- The graphing tool shall accept the single implicit equation `x^2 + y^2 = 10` and display its
  circle on the coordinate grid. *(S1)* [WS-GRAPH:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the tool shall show the equation area, labeled coordinate grid, and plotted
  circle guided by DOC-001; a Playwright test shall enter `x^2 + y^2 = 10` and verify that the
  circle and coordinate axes/grid appear. *(S1)* [WS-GRAPH:AC-001] [scope:SRI-85d903c6a8a4]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. An AC a
requirement names lists every method that requirement lists: a `test, visual` requirement needs a
`test, visual` AC. Choose from the pinned source, not from available tools. A screenshot is visual
proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `WS-GRAPH:REQ-001` | test, visual | `WS-GRAPH:AC-001` |
| `WS-GRAPH:REQ-002` | test, visual | `WS-GRAPH:AC-001` |
| `WS-GRAPH:AC-001` | test, visual | `WS-GRAPH:AC-001` |

## Non-functional requirements

No non-functional requirements or measurable thresholds are stated in the pinned source or
confirmed clarification.

Use governed requirement anchors here too (for example `[WS-GRAPH:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

- The feature is a browser UI within the existing React app, as confirmed in clarification.
- The reference-equation example and the graphing layout are the only required graphing behavior
  established by the current evidence.

## Out of scope

- `y=f(x)` support, multiple simultaneous equations, and pan/zoom are deferred.
- Saving graphs, user accounts, and behavior for invalid equations are not specified.

## Open questions

No blocking clarification remains for the confirmed example and acceptance checks. If invalid
equation handling or additional expression forms are later requested, their behavior and
verification criteria need a separate product decision.

## Sources

- Pinned Story source `singularity/work-items/ws-graph/source.json` — requests a well-formatted
  graph plotting tool and a screenshot plus Playwright tests.
- DOC-001 — Screenshot 2026 10 27 at 8.04.15 AM — inspected image showing an editable equation
  area with `x^2 + y^2 = 10` and a labeled coordinate grid with the circle plotted.
