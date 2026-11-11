<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "after-cl",
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
      "sha256": "085bfe447820d9aa093a0105f4b0aa9e236be0fc6b9f2f5f4962cf28a64dabcb",
      "bytes": 10782
    },
    "generation": 1,
    "publishedAt": "2026-11-11T02:54:19.539Z"
  },
  "sourceCommit": "e357b8b53b8b2a9959e4446c8157c1f9cdba20d9",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "0918e0e9f62d6273b5d2cda1bbc09ca30a01aa220df0de76f5b2e9fedf055d93",
  "template": {
    "path": "singularity/work-items/after-cl/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/after-cl/context/clarifications-specification-gen1.json",
    "sha256": "819573d8864a53be684749ea488a60c007063d911c75525ac631a026498147a4",
    "promptSha256": "34589acccdcb5ef149bebf02d122988edb7832d971462203fd2b0d378e6da04b",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-11-11T02:51:00.889Z",
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
      "path": "singularity/work-items/after-cl/telemetry/specification-gen1.json",
      "sha256": "c82ac44cfb9ecbc7ea584fa70b6d03b870ba6d41a82209ab42b73a93dffa5aa5",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28730,
        "estimatedTokens": 7183,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28730,
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
      "startedAt": "2026-11-11T02:54:19.539Z",
      "completedAt": "2026-11-11T02:54:19.539Z",
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

# Specification — after-cl

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

Add a graph-plotting experience to the existing app. A user can enter one equation per graph, covering 2D Cartesian functions, implicit equations, parametric equations, and polar equations. The experience should be polished and Desmos-inspired, without requiring an exact visual clone. Playwright browser tests must exercise equation entry and plotted output. This specification does not set equation syntax, supported operators, graph domains, or numeric rendering limits.

## Actors

The actor is a user of the existing calculator app. The Story does not define separate roles or elevated permissions.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Plot one supported equation

**Priority:** P1
**Actor:** Calculator user
**Context:** The graph-plotting experience is available.

- **Given** the graph-plotting experience is open
  **When** the user enters one 2D Cartesian function, implicit, parametric, or polar equation
  **Then** the plotter displays the corresponding graph, with no second equation overlaid on that graph.

### S2 — Use the graph-plotting experience

**Priority:** P2
**Actor:** Calculator user
**Context:** The user is viewing the graph-plotting experience.

- **Given** the graph-plotting experience is displayed
  **When** the user views it
  **Then** its visual treatment is polished and Desmos-inspired, without requiring an exact Desmos clone.

### S3 — Verify equation plotting in a browser

**Priority:** P1
**Actor:** Playwright test runner

- **Given** the graph-plotting experience is available in the browser
  **When** the Playwright suite exercises equation entry for each supported form
  **Then** it verifies that the corresponding graph is rendered.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Before an equation is entered, there is no equation-derived graph to verify. The Story does not prescribe empty-state wording or controls.
- **Failure:** The Story does not specify behavior or wording for invalid syntax, unsupported expressions, or rendering failures; this specification makes no promise about a particular error message or recovery behavior.
- **Partial:** A result that does not display the graph corresponding to the entered equation does not meet the success criterion. Partial-rendering behavior is not specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `AFTER-CL:REQ-001` | S1 | success |
| `AFTER-CL:REQ-002` | S2 | success |
| `AFTER-CL:REQ-003` | S3 | success |
| `AFTER-CL:AC-001` | S1 | success |
| `AFTER-CL:AC-002` | S2 | success |
| `AFTER-CL:AC-003` | S3 | success |

## Permissions

Not applicable: the Story identifies a general app user and defines no permission roles or restricted actions.

## Boundary conditions

The graphing scope is 2D: Cartesian functions, implicit equations, parametric equations, and polar equations. Each graph contains one equation; simultaneous equations on the same graph are not in scope. The pinned evidence does not establish an equation grammar, supported operators/functions, graph domain, sampling resolution, or numeric limits, so this specification does not claim particular values for them.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The plotter shall display the corresponding graph for one entered equation in each confirmed 2D form: Cartesian function, implicit, parametric, or polar. A graph contains no more than one equation. *(S1; pinned Story request and recorded clarification, specification generation 1)* [AFTER-CL:REQ-001]
- The graph-plotting experience shall have a polished, Desmos-inspired visual treatment; an exact visual clone is not required. *(S2; pinned Story request and recorded clarification, specification generation 1)* [AFTER-CL:REQ-002]
- Provide Playwright browser tests that exercise equation entry and verify plotted output for each supported equation form. *(S3; pinned Story acceptance criterion “Palyright tests” [scope:SRI-8d1790c722db] and recorded clarification, specification generation 1)* [AFTER-CL:REQ-003]

Acceptance criteria use the same stable, namespaced form:

- For each of the four confirmed equation forms, entering one equation displays its corresponding graph, and the graph does not overlay a second equation. *(S1)* [AFTER-CL:AC-001]
- A visual review finds the graph-plotting experience polished and Desmos-inspired; it need not reproduce Desmos exactly. *(S2)* [AFTER-CL:AC-002]
- The Playwright suite contains browser checks for equation entry and corresponding graph rendering for Cartesian function, implicit, parametric, and polar equations. *(S3)* [AFTER-CL:AC-003]

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
| `AFTER-CL:REQ-001` | test | `AFTER-CL:AC-001` |
| `AFTER-CL:REQ-002` | visual | `AFTER-CL:AC-002` |
| `AFTER-CL:REQ-003` | test | `AFTER-CL:AC-003` |
| `AFTER-CL:AC-001` | test | `AFTER-CL:AC-001` |
| `AFTER-CL:AC-002` | visual | `AFTER-CL:AC-002` |
| `AFTER-CL:AC-003` | test | `AFTER-CL:AC-003` |

## Non-functional requirements

No quantitative latency, throughput, availability, accessibility, privacy, or retention target is stated in the pinned evidence. The qualitative visual requirement is captured by `AFTER-CL:REQ-002`.

Use governed requirement anchors here too (for example `[AFTER-CL:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions
- The graph-plotting experience is part of the existing app, as indicated by the repository brief.
- “Polished and Desmos-inspired” is the confirmed visual direction; it does not require pixel-for-pixel reproduction.

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope
- 3D graphing and multiple equations overlaid on one graph.
- Exact visual reproduction of Desmos.
- Equation syntax, operator/function coverage, graph domains, and numeric rendering limits not stated by the pinned evidence.

Named explicitly, so the boundary is reviewable rather than inferred.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.

The primary source is the pinned Story at `singularity/work-items/after-cl/source.json`; the equation forms, single-equation-per-graph boundary, and visual interpretation are from the recorded specification-generation-1 clarification. The Story references Desmos at `https://www.desmos.com/calculator`. No supporting documents or attached reference images were copied to this Story.
