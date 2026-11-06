<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-opr",
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
      "sha256": "b59cf7bfca2806d78c6ab5da695fbf38d4aeac7a5296b5aa24303a827f0ee401",
      "bytes": 7529
    },
    "generation": 1,
    "publishedAt": "2026-11-06T04:53:41.282Z"
  },
  "sourceCommit": "5ac8f90e807270ef26721bdd87444cd6a0e50c44",
  "generationCommit": "8f994c517a9fcadef1d3c8e76e08f733fac33e18",
  "publicationCommit": "8f994c517a9fcadef1d3c8e76e08f733fac33e18",
  "configSha256": "ece34bebf699bd016761306f85eb0a38c9eb13e453e52f100944569c96215590",
  "sourceSha256": "a3d8f1190123768f13760c60fc40fc74f3b1b07c392dfc8fd656ae5c7d4e3a89",
  "template": {
    "path": "singularity/work-items/bin-opr/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/bin-opr/context/clarifications-specification-gen1.json",
    "sha256": "eba8e407e552aab7821f2999961f58b99cacbbc7143243f0a108f655750dc39e",
    "promptSha256": "de3b3979b05aec60be83ab6f7de188a2befae1c5748b062950d5195fdfa16f30",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-11-06T03:47:00.386Z",
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
      "path": "singularity/work-items/bin-opr/telemetry/specification-gen1.json",
      "sha256": "d1b9e55fe0c823e4617d6b67e47ac96ca63a4d6eee284066c2bf25483bd6e263",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27595,
        "estimatedTokens": 6899,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27595,
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
      "startedAt": "2026-11-06T04:53:41.282Z",
      "completedAt": "2026-11-06T04:53:41.282Z",
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

# Specification — bin-opr

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

The calculator user can convert the current calculator value to its binary representation using a
button. The converted value appears alongside the calculator display. The UI behavior must be
covered by a screenshot and Playwright tests. No additional boundary or special behavior was
confirmed. Do not infer extra controls, supported ranges, or error behavior.

## Actors

- Calculator user: requests conversion of the current calculator value.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert the current calculator value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** A value is currently shown in the calculator display.

- **Given** a value is shown in the calculator display
  **When** the user activates the binary-conversion button
  **Then** the calculator shows that current value's binary representation alongside the display.

- **Given** the user has requested binary conversion for the current calculator value
  **When** the conversion behavior is evaluated
  **Then** a screenshot demonstrates the UI behavior and a Playwright test covers the behavior.

## Failure and empty states

- **Empty:** Behavior when no calculator value is present is not specified by the pinned request or
  clarification.
- **Failure:** Conversion failure behavior and error presentation are not specified.
- **Partial:** Partial completion behavior is not specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `BIN-OPR:REQ-001` | S1 | success |
| `BIN-OPR:REQ-002` | S1 | success |
| `BIN-OPR:AC-001` | S1 | success |

## Permissions

Not applicable: the pinned request defines no roles or access restrictions; the calculator user
performs the described UI action.

## Boundary conditions

The pinned request and clarification specify no numeric range, precision, or special-value behavior.
No additional boundary behavior is required by this specification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator provides a button that converts the current calculator value, not a separately
  entered value, to its binary representation. *(S1)* [BIN-OPR:REQ-001]
- The converted binary representation is shown alongside the calculator display. *(S1)*
  [BIN-OPR:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- The UI behavior for converting the current calculator value and showing its binary representation
  alongside the display is demonstrated by screenshot evidence and covered by Playwright tests.
  *(S1)* [scope:SRI-2c51c258be3b] [BIN-OPR:AC-001]

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
| `BIN-OPR:REQ-001` | test, visual | `BIN-OPR:AC-001` |
| `BIN-OPR:REQ-002` | test, visual | `BIN-OPR:AC-001` |
| `BIN-OPR:AC-001` | test, visual | `BIN-OPR:AC-001` |

## Non-functional requirements

None specified by the pinned request or clarification.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

- A calculator value is already shown when the user requests conversion, as confirmed in
  clarification Q-001.
- The binary representation is displayed alongside the calculator display, as confirmed in
  clarification Q-002.

## Out of scope

- Converting a separately entered number that is not the current calculator value.
- Additional boundary or special behavior; clarification Q-003 confirmed none.

## Sources

- Pinned Story source `singularity/work-items/bin-opr/source.json` (immutable source SHA-256:
  `a3d8f1190123768f13760c60fc40fc74f3b1b07c392dfc8fd656ae5c7d4e3a89`).
- Recorded human clarifications Q-001, Q-002, and Q-003 for specification generation 1.
- No supporting documents were offered to this phase.
