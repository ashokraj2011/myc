<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-opr2",
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
      "sha256": "a7fc3bbbb471cd12cdbd4b97d7930a3cb84d163d6dac87f49c16ef58b8de0ea0",
      "bytes": 8472
    },
    "generation": 1,
    "publishedAt": "2026-11-06T12:34:14.891Z"
  },
  "sourceCommit": "b122d7a208b73477c32a40eac956653e5f839871",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "9691c2b1a5ce2dbb46a9db942f9f931dc87fb221d7bcb684773ad21cc7ef8536",
  "template": {
    "path": "singularity/work-items/bin-opr2/config/wfa/blobs/sha256/fbb7f5f29844d24836c6b918e2796940cbc21c24ae0a7aa252d4e1207588e2cb",
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
    "path": "singularity/work-items/bin-opr2/context/clarifications-specification-gen1.json",
    "sha256": "e48438198783ccf09227631d606487694ab3455919a6e93ac4e7e2bcc383ab59",
    "promptSha256": "892d4eec7f1ac577246fac7e3cb3617d14583a8bb3931b11ae10a54074853b5f",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-11-06T12:31:41.677Z",
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
      "path": "singularity/work-items/bin-opr2/telemetry/specification-gen1.json",
      "sha256": "8476cd24d1caa7f08d509bce038df47d5739e58d4be51583f72a9e035500b634",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27839,
        "estimatedTokens": 6960,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27839,
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
      "startedAt": "2026-11-06T12:34:14.891Z",
      "completedAt": "2026-11-06T12:34:14.891Z",
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

# Specification — bin-opr2

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

The calculator user needs a button that converts the decimal value currently shown in the
calculator display to its binary representation. The user indicated that all supported values are
intended and confirmed that acceptance requires both Playwright test cases and screenshot/visual
evidence. The exact treatment of negative and fractional values, including repeating binary
fractions, remains unknown and is recorded as an open question. This specification does not
authorize changes to unrelated calculator behavior.

## Actors

- **Calculator user:** selects the conversion button for the value currently shown.
- **Test runner:** exercises the conversion flow with Playwright and captures screenshot/visual
  evidence for acceptance.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert the value shown in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a decimal value.

- **Given** a decimal value is visible in the calculator display
  **When** the user selects the conversion button
  **Then** the calculator displays the binary representation of that value.

### S2 — Verify the conversion

**Priority:** P1
**Actor:** Test runner
**Context:** The conversion behavior is available.

- **Given** the conversion button and a decimal value in the calculator display
  **When** a Playwright test exercises the conversion and captures screenshot evidence
  **Then** the test and screenshot/visual evidence show the conversion control and binary result.

## Failure and empty states

- **Empty:** No stored records are part of this feature. Behavior when the display has no value is
  not specified by the Story.
- **Failure:** No dependency failure behavior or error wording is specified.
- **Partial:** No multi-step or persistence behavior is specified; partial completion is not
  applicable to the stated conversion flow.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `BIN-OPR2:REQ-001` | S1 | success |
| `BIN-OPR2:REQ-002` | S1 | success |
| `BIN-OPR2:AC-001` | S2 | success |

## Permissions

No feature-specific permission or role restriction is stated. The calculator user may invoke the
conversion button under the application's existing access rules.

## Boundary conditions

The requested scope is “all” values, but the exact supported numeric domain and output precision
are not established. Negative and fractional values, including repeating binary fractions, are
covered by the open question below; this specification invents no numeric limits or rounding rule.

## Requirements

Numbered, testable obligations cite the scenario each serves.

- The calculator provides a button that converts the decimal value currently shown in its display
  and displays that value's binary representation. *(S1)* [BIN-OPR2:REQ-001]
- The conversion action is available for all decimal values supported and shown by the calculator.
  *(S1)* [BIN-OPR2:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A Playwright test exercises the conversion flow, and screenshot/visual evidence shows the
  conversion control and binary result. This covers the Story's “Screenshot playright testcases”
  acceptance statement. *(S2)* [BIN-OPR2:AC-001] [scope:SRI-bfb83cd3d1fd]

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
| `BIN-OPR2:REQ-001` | test, visual | `BIN-OPR2:AC-001` |
| `BIN-OPR2:REQ-002` | test | - |
| `BIN-OPR2:AC-001` | test, visual | `BIN-OPR2:AC-001` |

## Non-functional requirements

No non-functional requirement is stated in the pinned Story or recorded clarifications.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- “Calc” means the existing calculator interface; the user confirmed the conversion is initiated by
  a button.
- “Value in display” means the decimal value currently shown when the user activates that button.

## Out of scope

No changes to unrelated calculator operations or additional interfaces are requested. Application
implementation is outside this specification-authoring phase.

## Sources

The pinned Story source and the four recorded clarification replies for specification generation 1
are the evidence used here. No supporting documents were offered to this phase.

## Open questions

- **Negative and fractional values, including repeating binary fractions:** The user answered
  “unknown” when asked whether “all” includes negative/fractional values and how repeating binary
  fractions should be represented. **Impact:** exact edge-case output and precision expectations
  cannot yet be tested. **Owner:** Story owner/product owner to clarify before those cases are
  treated as settled acceptance behavior.

## Upstream discrepancies

None identified; no approved earlier-phase inputs were provided.
