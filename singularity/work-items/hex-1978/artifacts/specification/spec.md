<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-1978",
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
      "sha256": "88758633873db00fb4d08627c61e2fba2b7eb7bb3705198e5ccedd8c7216f299",
      "bytes": 7235
    },
    "generation": 1,
    "publishedAt": "2026-10-21T15:57:04.172Z"
  },
  "sourceCommit": "403729121dfe78e312a1be560265ee8397c07091",
  "generationCommit": "8ade2aecfb9567428cb97ed341d59c01c42da2d1",
  "publicationCommit": "8ade2aecfb9567428cb97ed341d59c01c42da2d1",
  "configSha256": "bfb32f9f48dc5a11a1e51dcc1f3ae0b8a7732fea7b74d413a02826960e9570e3",
  "sourceSha256": "78f3669e29ca2f1aadccdcba28cf845d58b1be20e3e3524c01600c414ee2c04b",
  "template": {
    "path": "singularity/work-items/hex-1978/config/wfa/blobs/sha256/c6e1ea9cb3d43631d47fedc023295faf39204e7efa40da81db1a51c3d4c0f1d9",
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
    "path": "singularity/work-items/hex-1978/context/clarifications-specification-gen1.json",
    "sha256": "06e39d19e8a9f520422b27139754bb374081fae0965ee5c719ea1121d619922f",
    "promptSha256": "651edd8b84802488ea5232a5703d72f99bb5a92f64ebc4e027afb9c9d3873e27",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-10-21T15:54:39.960Z",
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
      "path": "singularity/work-items/hex-1978/telemetry/specification-gen1.json",
      "sha256": "fc9aecb4ef197281962fcbb954a3541c95dfd7430e34373141a0f97f8ce9e468",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 25683,
        "estimatedTokens": 6421,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 25683,
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
      "startedAt": "2026-10-21T15:57:04.172Z",
      "completedAt": "2026-10-21T15:57:04.172Z",
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

# Specification — hex-1978

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

Add a `hex` button to the calculator so a user can convert a displayed positive decimal integer to its hexadecimal value. The confirmed acceptance example is decimal `2`, whose hexadecimal result is `2`; the requested verification includes a screenshot of that result and a test for the button and conversion. Negative, zero, and non-integer inputs are outside the confirmed scope. No additional formatting, error behavior, or numeric limit is specified.

## Actors

The calculator user invokes the conversion. No separate roles or permissions are specified.

## User scenarios

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert a positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays the positive decimal integer `2`.

- **Given** the calculator displays decimal `2`
  **When** the user activates the `hex` button
  **Then** the calculator displays its hexadecimal value, `2`.

## Failure and empty states

- **Empty:** Behavior with no displayed positive integer is not specified.
- **Failure:** No conversion failure behavior is specified for the in-scope positive integer input.
- **Partial:** Not applicable; the confirmed scenario is one calculator display conversion with no described external side effects.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `HEX-1978:REQ-001` | S1 | success |
| `HEX-1978:REQ-002` | S1 | success |
| `HEX-1978:AC-001` | S1 | success |
| `HEX-1978:AC-002` | S1 | success |

## Permissions

Not applicable: the Story specifies a calculator operation and no role-based access.

## Boundary conditions

The confirmed input domain is positive integers. The requested example is decimal `2`. Zero, negative, and non-integer inputs are outside the confirmed scope; their behavior is not specified. No maximum positive integer or additional output-format convention is specified.

## Requirements

- Activating the calculator's `hex` button converts the currently displayed positive decimal integer to its hexadecimal value. *(S1)* [HEX-1978:REQ-001]
- The calculator UI exposes a button labeled `hex` for requesting that conversion. *(S1)* [HEX-1978:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the calculator shows the hexadecimal result `2` for decimal input `2`. *(S1)* [HEX-1978:AC-001] [scope:SRI-77b88f6611a7]
- An executable test verifies that the calculator exposes the `hex` button and that activating it for decimal input `2` displays hexadecimal `2`. *(S1)* [HEX-1978:AC-002] [scope:SRI-77b88f6611a7]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. Choose
from the pinned source, not from available tools. A screenshot is visual proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `HEX-1978:REQ-001` | test | - |
| `HEX-1978:REQ-002` | test | - |
| `HEX-1978:AC-001` | visual | `HEX-1978:AC-001` |
| `HEX-1978:AC-002` | test | `HEX-1978:AC-002` |

## Non-functional requirements

Not applicable: no non-functional requirements are stated in the pinned request or recorded clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The `hex` button acts on the calculator's currently displayed value. The requested conversion is from a positive decimal integer to its base-16 value.

## Out of scope

Negative, zero, and non-integer input behavior; hexadecimal arithmetic mode; output prefixes or formatting beyond the specified result `2`; and any numeric maximum are not specified by this Story.

## Sources

- Pinned Story source: `singularity/work-items/hex-1978/source.json` (SHA-256 `78f3669e29ca2f1aadccdcba28cf845d58b1be20e3e3524c01600c414ee2c04b`).
- Recorded human clarification for specification generation 1: `singularity/work-items/hex-1978/context/clarifications-specification-gen1.json` (SHA-256 `06e39d19e8a9f520422b27139754bb374081fae0965ee5c719ea1121d619922f`).
- No supporting documents were offered.
