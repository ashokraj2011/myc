<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "morning-1",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 0,
  "status": "in_progress",
  "generatedBy": null,
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "legacy-unspecified",
    "channel": "legacy",
    "governedAgentContext": null,
    "kernelModel": {
      "invoked": false,
      "status": "unavailable",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "source": null
  },
  "sourceCommit": null,
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "a8b6f4a122f2ad38555f4fc4c268f606c36fdd0a845a848fee4e9f05663fe8ac",
  "sourceSha256": "c434b0248f0c1a9692bc0a98fdf218628565acbf9d2c0b03c1a7e60394d73779",
  "template": {
    "path": "singularity/work-items/morning-1/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
    "sha256": "8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/spec.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Specification — morning-1

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

## Agent brief

<!--
Summarize the approved intent for downstream agents in a compact, standalone form. Include the
problem, intended outcome, principal actors, most important scenarios, hard constraints, and major
exclusions. Do not introduce claims that are absent from the sections below. Exact requirements and
boundary conditions are preserved separately by the governed projection.
-->

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — <the most important situation, in the user's words>

**Priority:** P1
**Actor:** <role>
**Context:** <what is true before this begins>

- **Given** <the starting state>
  **When** <the actor does this>
  **Then** <the observable outcome>

- **Given** <a variation worth stating>
  **When** <…>
  **Then** <…>

### S2 — <the next situation>

**Priority:** P2

- **Given** … **When** … **Then** …

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** <no records yet>
- **Failure:** <the dependency is unavailable>
- **Partial:** <some of it worked>

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `morning-1:REQ-001` | S1 | TODO |
| `morning-1:REQ-002` | S2 | TODO |
| `morning-1:AC-001` | S1 | TODO |

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- <requirement>. *(S1)* [morning-1:REQ-001]
- <requirement>. *(S1, S2)* [morning-1:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- <observable acceptance outcome>. *(S1)* [morning-1:AC-001]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. Choose
from the pinned source, not from available tools. A screenshot is visual proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `morning-1:REQ-001` | TODO | - |
| `morning-1:REQ-002` | TODO | - |
| `morning-1:AC-001` | TODO | `morning-1:AC-001` |

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[morning-1:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

- <ART-…>

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.
