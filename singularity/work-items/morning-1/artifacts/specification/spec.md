<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "morning-1",
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
      "sha256": "fb88e7515a8f2db89224264efba9cf9613823ae5a624f151dc36273bc3b92149",
      "bytes": 7769
    },
    "generation": 1,
    "publishedAt": "2026-10-12T22:55:12.215Z"
  },
  "sourceCommit": "8140da0a86cf5cb55fbc3cd2a781501fc03efcf9",
  "generationCommit": "2179a704046e2e1a8a82f3f06491763c9d7ac6d8",
  "publicationCommit": "2179a704046e2e1a8a82f3f06491763c9d7ac6d8",
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
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/morning-1/context/clarifications-specification-gen1.json",
    "sha256": "df43ca9b5dc029060b6b7dbdb41243b15b375e2baad495a0d78d8b7b6c1719a7",
    "promptSha256": "d3485720d0727ea529e69c607c5050fdef5d9e93b3703b4ba2e139386e21ee22",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-10-12T22:54:19.738Z",
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
      "path": "singularity/work-items/morning-1/telemetry/specification-gen1.json",
      "sha256": "000ce7a2a58ef29b86d51d691839a2f627e9039229dc023072358ad48a660602",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 18388,
        "estimatedTokens": 4597,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 18388,
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
      "startedAt": "2026-10-12T22:55:12.215Z",
      "completedAt": "2026-10-12T22:55:12.215Z",
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

Add a hexadecimal operator to the calculator. For a supported whole-number value, invoking the
operator shows the original decimal value and its hexadecimal equivalent together. If there is no
current value, invoking the operator leaves the display unchanged. The required visual acceptance
evidence is a screenshot showing both representations. The pinned Story and clarification do not
prescribe exact hexadecimal text formatting or other calculator behavior.

## Actors

The calculator user invokes the operator and views its result. No separate role or permission
distinction is specified by the pinned Story or clarification.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Show the hexadecimal equivalent of a whole-number value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator has a whole-number value.

- **Given** the calculator displays a whole-number value
  **When** the user invokes the hex operator
  **Then** the calculator displays the original decimal value and its mathematically equivalent hexadecimal representation together.

- **Given** the calculator displays zero
  **When** the user invokes the hex operator
  **Then** the decimal zero and its hexadecimal equivalent are displayed together.

### S2 — Invoke the operator without a current value

**Priority:** P2
**Actor:** Calculator user
**Context:** The calculator has no current value.

- **Given** the calculator has no current value
  **When** the user invokes the hex operator
  **Then** the display remains unchanged.

## Failure and empty states

- **Empty:** When there is no current value, invoking the operator leaves the display unchanged.
- **Failure:** No dependency failure behavior is specified by the pinned Story or clarification; do not add a new error behavior to this scope.
- **Partial:** No partial-completion behavior is specified by the pinned Story or clarification.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `morning-1:REQ-001` | S1 | success |
| `morning-1:REQ-002` | S1 | success |
| `morning-1:REQ-002` | S1 | boundary |
| `morning-1:REQ-003` | S2 | empty |
| `morning-1:AC-001` | S1 | success |

## Permissions

No separate permissions or protected-reader behavior are specified. The user of the calculator
invokes the operator.

## Boundary conditions

The confirmed input scope is whole-number values only; fractional values are outside this
specification. Zero is included and must produce its equivalent hexadecimal representation. When
there is no current value, the display remains unchanged. Negative-value behavior and exact output
formatting (including prefix and letter case) are not specified by the pinned Story or clarification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- For a whole-number current value, the user can invoke the hex operator to obtain its hexadecimal equivalent. *(S1)* [morning-1:REQ-001]
- After the operator is invoked for a whole-number current value, the calculator displays the original decimal value and its hexadecimal equivalent together. *(S1)* [morning-1:REQ-002]
- If there is no current value when the operator is invoked, the calculator display remains unchanged. *(S2)* [morning-1:REQ-003]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the calculator after conversion shows the decimal value and its hexadecimal equivalent together. *(S1)* [morning-1:AC-001]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. Choose
from the pinned source, not from available tools. A screenshot is visual proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `morning-1:REQ-001` | test | - |
| `morning-1:REQ-002` | test | - |
| `morning-1:REQ-003` | test | - |
| `morning-1:AC-001` | visual | `morning-1:AC-001` |

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

No non-functional requirements are specified by the pinned Story or clarification.

## Open questions

The exact hexadecimal text format (for example, prefix and letter case) is unspecified. It does not
change the confirmed requirement that the result be mathematically equivalent and shown alongside
the decimal value. Owner: product approvers, if a fixed visual format is required before approval.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

No constitution article IDs were included in the current phase inputs.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The calculator has a current whole-number value when conversion is requested in S1. The exact
representation of an equivalent hexadecimal value is left to implementation, subject to the
display and visual acceptance requirements above.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Fractional-value conversion and any new calculator behavior beyond the hex operator requirements
above are out of scope. Negative-value handling is not defined by the pinned Story or clarification.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.

No supporting documents were provided. Governing inputs are the pinned Story source
(`singularity/work-items/morning-1/source.json`) and the recorded specification-generation-1 human
clarification.
