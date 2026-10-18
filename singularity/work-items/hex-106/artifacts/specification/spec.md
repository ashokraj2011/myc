<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-106",
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
      "sha256": "0c102c62f624cd6964c8c8595e80172b1d566a09b74e2925c0d6e88f41e54c6b",
      "bytes": 6650
    },
    "generation": 1,
    "publishedAt": "2026-10-18T08:26:20.221Z"
  },
  "sourceCommit": "10bc5eda86d5f91bd646e957e5a88b310bd56a1b",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "cefab2b320917902d3a5d87f8fb41c6ca3fa661958e79fec9ecf93e28f239314",
  "sourceSha256": "6c1a00ce8f642e4c651578e93f1a2546c72337645d3691ddd0e047b5b0935b06",
  "template": {
    "path": "singularity/work-items/hex-106/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
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
    "path": "singularity/work-items/hex-106/context/clarifications-specification-gen1.json",
    "sha256": "3012b68f53ee27c95780c76d9693253cfe62d33587cf97cbc3f6efef7189f03e",
    "promptSha256": "82ddcf266c234ddee7fb4a4ff20ad0857c229da9e038fa09c1e8388cddab2bc4",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-10-18T08:25:33.538Z",
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
      "path": "singularity/work-items/hex-106/telemetry/specification-gen1.json",
      "sha256": "092f3601e7c1e7740811af94310ebeb9e848f93f1357fb0c566e933843c925fc",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 18817,
        "estimatedTokens": 4705,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 18817,
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
      "startedAt": "2026-10-18T08:26:20.221Z",
      "completedAt": "2026-10-18T08:26:20.221Z",
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

# Specification — hex-106

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

The calculator user needs a hex operation that converts a positive integer to its hexadecimal
value. The accepted input is a positive integer; the result must represent that integer in base 16.
The pinned Story and clarification do not define display casing, prefixes, supported numeric range,
or behavior for inputs outside this domain. This specification does not decide those details.

## Actors

- **Calculator user:** supplies a positive integer to the hex operation and observes its hexadecimal
  value.

## User scenarios

### S1 — Convert a positive integer to its hexadecimal value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user can provide a positive integer to the hex
operation.

- **Given** the user supplies a positive integer
  **When** the user invokes the hex operation
  **Then** the calculator produces the hexadecimal value corresponding to that integer.

## Failure and empty states

- **Empty:** No separate empty-data state is specified; the operation takes a positive integer as
  input.
- **Failure:** Behavior for zero, negative, non-integer, or otherwise unsupported input is not
  specified by the pinned Story or clarification.
- **Partial:** No partial-result behavior is specified; the operation's stated outcome is a
  hexadecimal value for the supplied positive integer.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `HEX-106:REQ-001` | S1 | success |
| `HEX-106:REQ-002` | S1 | success |
| `HEX-106:AC-001` | S1 | success |

## Permissions

The calculator user may invoke the operation. No additional roles or permission distinctions are
specified.

## Boundary conditions

The input domain stated by the clarification is positive integers. No upper bound or numeric
representation constraints are specified. Behavior at zero, for negative values, or for
non-integers remains unspecified and is not an acceptance obligation in this specification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The hex operation accepts a positive integer as its input. *(S1)* [HEX-106:REQ-001]
- The hex operation converts the supplied positive integer to its hexadecimal value. *(S1)* [HEX-106:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For a supplied positive integer, the operation's result represents that same integer in base 16.
  *(S1)* [HEX-106:AC-001]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. Choose
from the pinned source, not from available tools. A screenshot is visual proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `HEX-106:REQ-001` | test | - |
| `HEX-106:REQ-002` | test | - |
| `HEX-106:AC-001` | test | `HEX-106:AC-001` |

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[HEX-106:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

No non-functional requirement was specified in the pinned Story or clarification.

## Open questions

- The required display casing and whether the output includes a prefix are unspecified; the
  producer should resolve presentation consistently with the existing calculator before
  implementation.
- The supported positive-integer range and behavior for inputs outside the positive-integer domain
  are unspecified; confirm these before relying on boundary or rejection behavior.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

- The hex operation is available within the calculator to its user.
- “Hexadecimal value” means the base-16 value of the supplied positive integer; this does not
  prescribe casing or display decoration.

## Out of scope

- Defining formatting conventions, supported numeric limits, or behavior for input outside the
  positive-integer domain.
- Changes to other calculator operations.

## Sources

Each supporting document this specification relies on, cited as `DOC-nnn — <name>`, and each one
offered to this phase that could not be read or was not available here, named as a gap. Without
supporting documents, say so.

- Pinned Story source: `singularity/work-items/hex-106/source.json` (request: “implement hex
  operator”; acceptance criteria: “test cases”).
- Human clarification for specification generation 1: convert a positive integer to its hex value.
- No additional supporting documents were provided.
