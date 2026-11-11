<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "cplus",
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
      "sha256": "c93e4f5668c75f83a60b356e799073a3cdcd5d6b6ff5c2c38b16826621d27ca4",
      "bytes": 8481
    },
    "generation": 1,
    "publishedAt": "2026-11-11T03:16:40.173Z"
  },
  "sourceCommit": "a944d659c9cc897b6ef61b10069620f429f66233",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "93454bb6fdd7a1c98de98a7f48025aae1545ff598914807c678c1a601f92eda4",
  "template": {
    "path": "singularity/work-items/cplus/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/cplus/context/clarifications-specification-gen1.json",
    "sha256": "8e2d49e7bbdf655675a15243b930e207078efddcbd1269cb8ca1bda2c9e62008",
    "promptSha256": "dd4a342321891e91d7c991b6522e14cbd2e46f74f1ff8cb0932e5e206044bb87",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-11-11T03:09:36.406Z",
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
      "path": "singularity/work-items/cplus/telemetry/specification-gen1.json",
      "sha256": "181df90089609a0c95924ad8318cd32ae508a2a0b3b41a20f30a35445072ec2f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28200,
        "estimatedTokens": 7050,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28200,
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
      "startedAt": "2026-11-11T03:16:40.173Z",
      "completedAt": "2026-11-11T03:16:40.173Z",
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

# Specification — cplus

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

Convert a decimal value to its binary representation through the calculator's existing input and result interaction. Preserve the calculator's existing numeric input behavior and do not add a new control or workflow. Acceptance includes a screenshot showing a representative decimal input and its correct binary output. Specific input boundaries and other screenshot cases remain unknown and are not expanded here.

## Actors

The calculator user enters values and reads displayed calculation results using the existing calculator interaction. No additional roles or authority are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert a decimal value in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and its existing input/result interaction is in use.

- **Given** the calculator is ready for input
  **When** the user enters a representative decimal value using the existing interaction
  **Then** the calculator displays that value's correct binary representation as its result.

- **Given** a representative decimal input has been entered
  **When** the resulting calculator state is captured
  **Then** the screenshot shows the input and its correct binary output. [scope:SRI-bfb83cd3d1fd]

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No special empty state is specified; retain the calculator's existing behavior before a value is entered.
- **Failure:** Error behavior for invalid or unsupported values is unknown; preserve existing calculator behavior.
- **Partial:** Partial conversion behavior is not specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `CPLUS:REQ-001` | S1 | success |
| `CPLUS:REQ-002` | S1 | success |
| `CPLUS:AC-001` | S1 | success |

## Permissions

Not applicable: the pinned request specifies no differentiated roles or permissions; the calculator user uses the existing interaction.

## Boundary conditions

Preserve the calculator's existing numeric input behavior. Specific decimal ranges, precision, fractional/negative handling, and limits are unknown and remain outside confirmed acceptance.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Convert a decimal value entered through the calculator's existing input/result interaction to its correct binary representation. *(S1)* [CPLUS:REQ-001]
- Preserve existing numeric input behavior; do not introduce new controls or workflows for this conversion. *(S1)* [CPLUS:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A screenshot shows a representative decimal input and its correct binary output. *(S1)* [CPLUS:AC-001]

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
| `CPLUS:REQ-001` | test | - |
| `CPLUS:REQ-002` | inspection | `CPLUS:AC-001` |
| `CPLUS:AC-001` | test, visual, inspection | `CPLUS:AC-001` |

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[CPLUS:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

Not applicable: no non-functional requirement is stated in the pinned request or clarification.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

- The existing calculator interaction is the intended input and result surface.
- The representative input and screenshot described in clarification are sufficient for the currently stated acceptance criterion; no other screenshot cases were specified.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

- New calculator controls or workflows.
- Specific input limits, error messages, or behavior beyond preserving the existing numeric input behavior.
- Additional screenshot scenarios beyond a representative input and correct binary output.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.

No supporting documents were supplied. Sources: pinned Story request and recorded clarification for this Story.
