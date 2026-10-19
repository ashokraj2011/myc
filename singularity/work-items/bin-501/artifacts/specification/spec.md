<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-501",
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
      "sha256": "7762b7a774ce26b24ca0dc5fa94cda20bc5ed90d44b6cb218535aba5cd938b76",
      "bytes": 9358
    },
    "generation": 1,
    "publishedAt": "2026-10-19T06:01:11.836Z"
  },
  "sourceCommit": "871f29bff656bc7959f862ad7ec2b7f7e614909a",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "1e9ee21b5e311f1c27d56b737efb46c14706df478a45bb6e22dec842f0409d21",
  "sourceSha256": "216bd2a30213fc22e75610021d581ac239866823e84e5d223c2d916658fc4f05",
  "template": {
    "path": "singularity/work-items/bin-501/config/wfa/blobs/sha256/c6e1ea9cb3d43631d47fedc023295faf39204e7efa40da81db1a51c3d4c0f1d9",
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
    "path": "singularity/work-items/bin-501/context/clarifications-specification-gen1.json",
    "sha256": "5273dc2a28a2337df065c4bc1077a43fc48c14af991bcbafd175a347f7f7ee6b",
    "promptSha256": "94af16763959012612d25477e929668736a823700500384ff363c2c0fea633a1",
    "responses": 2,
    "markers": [],
    "recordedAt": "2026-10-19T05:56:08.081Z",
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
      "path": "singularity/work-items/bin-501/telemetry/specification-gen1.json",
      "sha256": "b799c1bbe405ae6fce97d13796436b8cb6c567e5bd288d3023dc7dbf39ea03bd",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 24809,
        "estimatedTokens": 6203,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 24809,
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
      "startedAt": "2026-10-19T06:01:11.836Z",
      "completedAt": "2026-10-19T06:01:11.836Z",
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

# Specification — bin-501

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

Provide a calculator function that converts a whole-number decimal input to its base-2 representation. The function is the feature boundary; this Story does not add UI or API scope. Acceptance requires executable test cases for the conversion and screenshot evidence of an observed conversion. Fractional inputs are outside the clarified scope.

## Actors

The caller supplies a whole-number decimal value to the calculator function. No separate roles, access controls, or UI/API actors are specified. A reviewer evaluates the requested test-case and screenshot evidence.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert a whole-number decimal value

**Priority:** P1
**Actor:** Caller of the calculator function
**Context:** The function is available to receive a whole-number decimal input.

- **Given** the caller supplies the whole-number decimal value zero
  **When** the caller invokes the conversion function
  **Then** the returned base-2 representation denotes the same numeric value, zero.

- **Given** the caller supplies a positive whole-number decimal value
  **When** the caller invokes the conversion function
  **Then** the returned base-2 representation denotes the same numeric value as the input.

### S2 — Verify the conversion

**Priority:** P2
**Actor:** Test/evidence reviewer
**Context:** The conversion function is available for verification.

- **Given** the conversion function and a whole-number decimal input
  **When** its acceptance evidence is prepared
  **Then** executable test cases check the conversion behavior and a screenshot shows a decimal input with its corresponding binary result, without requiring a new UI or API.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Not applicable; the requested function converts an input and has no records or collection state.
- **Failure:** The Story does not define failure behavior for values outside the specified whole-number domain, nor an error format or message.
- **Partial:** No partial-result behavior is specified for this function.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `BIN-501:REQ-001` | S1 | success |
| `BIN-501:REQ-001` | S1 | boundary |
| `BIN-501:REQ-002` | S2 | success |
| `BIN-501:REQ-003` | S2 | success |
| `BIN-501:AC-001` | S2 | success |

## Permissions

Not applicable: no authorization roles or permission-controlled behavior are specified for the conversion function.

## Boundary conditions

The clarified input domain is whole-number decimal values, including zero and positive whole numbers. Fractional decimal values are outside scope. The Story specifies no upper bound, numeric representation limit, output formatting rule beyond base-2 equivalence, or behavior for invalid inputs; this specification does not invent them.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator function shall convert a whole-number decimal input to a base-2 representation denoting the same numeric value. *(S1)* [BIN-501:REQ-001]
- The acceptance package shall include executable test cases that verify the whole-number decimal-to-binary conversion behavior. *(S2)* [BIN-501:REQ-002]
- The acceptance package shall include screenshot evidence showing a whole-number decimal input and its corresponding binary result; this evidence requirement does not add UI or API scope. *(S2)* [BIN-501:REQ-003] [scope:SRI-2882cd00cb19]

Acceptance criteria use the same stable, namespaced form:

- Acceptance evidence includes executable test cases for the conversion behavior and a screenshot showing a whole-number decimal input with its corresponding base-2 result. *(S2)* [BIN-501:AC-001] [scope:SRI-2882cd00cb19]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. Choose
from the pinned source, not from available tools. A screenshot is visual proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `BIN-501:REQ-001` | test | - |
| `BIN-501:REQ-002` | test | - |
| `BIN-501:REQ-003` | visual | `BIN-501:AC-001` |
| `BIN-501:AC-001` | test, visual | `BIN-501:AC-001` |

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Not applicable: no non-functional requirement is stated in the pinned Story or its clarification.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The calculator function is the requested interface; no additional UI or API is part of this Story. The function's concrete output type and representable numeric limits are not specified.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Additional UI or API scope and fractional decimal inputs are out of scope. Error handling for inputs outside the clarified whole-number domain is unspecified.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.

Pinned Story source: `singularity/work-items/bin-501/source.json` (SHA-256 `216bd2a30213fc22e75610021d581ac239866823e84e5d223c2d916658fc4f05`). Clarification answers recorded for this Story and generation: Q-001 (function, test cases, screenshot evidence, no additional UI/API scope) and Q-002 (whole-number inputs only). No supporting documents were offered.
