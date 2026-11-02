<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "myl-graph",
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
      "sha256": "92bff4c1890a95b5b282435dc181bc85a13e1255291648018ed25885b5339558",
      "bytes": 7019
    },
    "generation": 1,
    "publishedAt": "2026-11-02T12:58:14.002Z"
  },
  "sourceCommit": "e426ce0dcb0c83c0be8943e590d6638c89730e3e",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "01d23f89cfb81225417b71ad66c3867676c63290036506c01a1b582f1442a982",
  "template": {
    "path": "singularity/work-items/myl-graph/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/myl-graph/context/clarifications-specification-gen1.json",
    "sha256": "aabb29f3890c4f51e89e38ed5afc96b1644b228cda02e859d0796e015dce0362",
    "promptSha256": "775b02a60af0af2e4513b4e649d176a05ebb8a0ecf93858b31e20f59c10fb7f4",
    "responses": 2,
    "markers": [],
    "recordedAt": "2026-11-02T12:56:01.072Z",
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
      "path": "singularity/work-items/myl-graph/telemetry/specification-gen1.json",
      "sha256": "265b9e4e538ef661d354c6adce46a721e617abb71f26d9ea5d554933b64f265f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26934,
        "estimatedTokens": 6734,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26934,
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
      "startedAt": "2026-11-02T12:58:14.002Z",
      "completedAt": "2026-11-02T12:58:14.002Z",
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

# Specification — myl-graph

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

Enable a person using the existing application to provide an equation and see its graph. The confirmed example is plotting `sin(x)` over an x range. The request does not specify equation syntax, range endpoints, limits, or error behavior; do not infer them as acceptance requirements.

## Actors

A person using the application provides an equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Plot an equation supplied to the application

**Priority:** P1
**Actor:** A person using the application
**Context:** The person has an equation they want to plot.

- **Given** the person provides an equation
  **When** they request its graph
  **Then** the application displays a plot of that equation.

- **Given** the person provides `sin(x)` as the equation
  **When** they request its graph
  **Then** the application plots the sine function over an x range.


## Failure and empty states

- **Empty:** No saved graph history or other stored records are requested; initial empty-state behavior is unspecified.
- **Failure:** The request does not define equation-validation or plotting failure behavior, including messages or recovery.
- **Partial:** Partial results or multi-equation behavior are not specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `MYL-GRAPH:REQ-001` | S1 | success |
| `MYL-GRAPH:REQ-002` | S1 | success |
| `MYL-GRAPH:AC-001` | S1 | success |

## Permissions

Not applicable: the request specifies no roles or permission distinctions.

## Boundary conditions

The request does not specify equation syntax, supported equation classes, x-range endpoints, axis limits, numeric precision, or behavior for unsupported equations. The confirmed sine example is `sin(x)` plotted over an x range; no particular range is prescribed.

## Requirements

- A person can provide an equation to the application for plotting. *(S1)* [MYL-GRAPH:REQ-001]
- For an equation provided by the person, the application displays its graph. *(S1)* [MYL-GRAPH:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For the confirmed example, the application plots `sin(x)` over an x range. *(S1)* [MYL-GRAPH:AC-001] [scope:SRI-f44a7707dbb8]

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
| `MYL-GRAPH:REQ-001` | test | - |
| `MYL-GRAPH:REQ-002` | test, visual | `MYL-GRAPH:AC-001` |
| `MYL-GRAPH:AC-001` | test, visual | `MYL-GRAPH:AC-001` |

## Non-functional requirements

None are specified by the pinned request or the recorded clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The feature is for a person using the existing application. The request and clarification do not establish equation syntax, range endpoints, or additional graphing controls.

## Out of scope

The pinned request establishes no additional exclusions. Saving or sharing graphs, graph styling, multiple-graph behavior, and specific error handling are not requirements in this specification.

## Sources

Pinned Story source: `singularity/work-items/myl-graph/source.json` (SHA-256 `01d23f89cfb81225417b71ad66c3867676c63290036506c01a1b582f1442a982`).

Recorded human clarification: `singularity/work-items/myl-graph/context/clarifications-specification-gen1.json` (SHA-256 `aabb29f3890c4f51e89e38ed5afc96b1644b228cda02e859d0796e015dce0362`).

No supporting documents were offered to this phase.
