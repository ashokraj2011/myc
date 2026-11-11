<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "b-bin",
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
      "sha256": "2a1dbd3b449571257b46203a0f3117799e408717a1401356e5a736290f717c11",
      "bytes": 6379
    },
    "generation": 1,
    "publishedAt": "2026-11-11T12:19:13.744Z"
  },
  "sourceCommit": "2bf9b0022d73189975ca9972afe08f63fba6d498",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "00fc6582cfef677b1272ca3c464f48edf98a587ff28680bce13ebb7dc62f3f51",
  "template": {
    "path": "singularity/work-items/b-bin/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/b-bin/context/clarifications-specification-gen1.json",
    "sha256": "888d0da4de9034b8b4087abfb1a646f35c77f012b9ac5161ed74ce228fe0eb27",
    "promptSha256": "5c9474eba35501084acc4ea19277ae9e18500e77b2bf3d602ff98f23821988f8",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-11-11T12:17:00.801Z",
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
      "path": "singularity/work-items/b-bin/telemetry/specification-gen1.json",
      "sha256": "9f53243dbfbe34a13a45a9bb76fa99a54495d3dfd42a9519b1e0981ece3da185",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28907,
        "estimatedTokens": 7227,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28907,
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
      "startedAt": "2026-11-11T12:19:13.744Z",
      "completedAt": "2026-11-11T12:19:13.744Z",
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

# Specification — b-bin

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

Add calculator UI behavior that converts a user-entered positive integer decimal value to its binary representation. Unit tests must cover converting 2 and 10. Fractional and negative inputs are outside this confirmed scope; behavior for other invalid input is unspecified.

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert a positive integer in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user has a positive integer decimal value to convert.

- **Given** the user enters the positive integer decimal value 2 in the calculator
  **When** the conversion is performed
  **Then** the calculator displays its binary representation, 10.

- **Given** the user enters the positive integer decimal value 10 in the calculator
  **When** the conversion is performed
  **Then** the calculator displays its binary representation, 1010.

## Failure and empty states

- **Empty:** Not applicable: this conversion does not operate on a collection of records.
- **Failure:** The pinned request does not define failure behavior for invalid input or a failed conversion.
- **Partial:** Not applicable: no partial operation is specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `B-BIN:REQ-001` | S1 | success |
| `B-BIN:REQ-002` | S1 | success |
| `B-BIN:AC-001` | S1 | success |

## Permissions

Not applicable: no role-based permissions are identified for local calculator use.

## Boundary conditions

The confirmed conversion domain is positive integer decimal values. Fractional and negative values are outside the confirmed scope. No upper bound is specified. Behavior for other invalid input is unspecified.

## Requirements

- The calculator UI converts a user-entered positive integer decimal value to its binary representation. *(S1)* [B-BIN:REQ-001]
- Provide unit test cases for the conversion, including the source-stated unit-test obligation [scope:SRI-bf17ce947d7f]. *(S1)* [B-BIN:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For input 2 the calculator displays 10, and for input 10 it displays 1010. *(S1)* [B-BIN:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `B-BIN:REQ-001` | test | `B-BIN:AC-001` |
| `B-BIN:REQ-002` | test | `B-BIN:AC-001` |
| `B-BIN:AC-001` | test | `B-BIN:AC-001` |

## Non-functional requirements

None specified by the pinned request or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The calculator UI is the interface for this conversion, as confirmed in clarification. No particular control, placement, or presentation beyond displaying the binary representation is specified.

## Out of scope

Fractional and negative input are outside the confirmed positive-integer scope. Additional behavior for invalid input and any conversion features beyond the confirmed request are not specified.

## Sources

Pinned Story source: `singularity/work-items/b-bin/source.json` (request: “Convert a decimal value to binary value in calc”; acceptance criterion: “Unit test cases”). Clarification checkpoint for Story `b-bin`, specification generation 1: calculator UI conversion, positive integer input, and unit-test examples 2 and 10. No supporting documents.
