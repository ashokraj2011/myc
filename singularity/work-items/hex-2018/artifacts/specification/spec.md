<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-2018",
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
      "sha256": "c08b74457e933cb073d7b833ebd263b91313d272f71cd9ad936200a1b63e29ff",
      "bytes": 7313
    },
    "generation": 1,
    "publishedAt": "2026-10-22T05:00:21.774Z"
  },
  "sourceCommit": "62e990454d53b8e6ddc0d2d32bb48d3635ab005f",
  "generationCommit": "2b7a8c452aabf595823687f14abdc00c75dce24e",
  "publicationCommit": "2b7a8c452aabf595823687f14abdc00c75dce24e",
  "configSha256": "bfb32f9f48dc5a11a1e51dcc1f3ae0b8a7732fea7b74d413a02826960e9570e3",
  "sourceSha256": "63edb570d84ec8510836e72b9680529ff8eb23758182a311d1945fc97ad88569",
  "template": {
    "path": "singularity/work-items/hex-2018/config/wfa/blobs/sha256/c6e1ea9cb3d43631d47fedc023295faf39204e7efa40da81db1a51c3d4c0f1d9",
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
    "path": "singularity/work-items/hex-2018/context/clarifications-specification-gen1.json",
    "sha256": "0d63e0cde4344e163bc2e2caab16c0cbe6a411e53f2b5b363011ed0bf699a099",
    "promptSha256": "054f360fdf50766a69e22006e80c250a7e87ae44b66955133287b9a4c8dc90c7",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-10-22T04:58:18.348Z",
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
      "path": "singularity/work-items/hex-2018/telemetry/specification-gen1.json",
      "sha256": "e24635629223563390b53951a74d56a43af18b0e52b884793d93e6d3e13b898f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 25808,
        "estimatedTokens": 6452,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 25808,
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
      "startedAt": "2026-10-22T05:00:21.774Z",
      "completedAt": "2026-10-22T05:00:21.774Z",
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

# Specification — hex-2018

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

The calculator user can invoke a HEX key/button to convert the current displayed positive integer to its hexadecimal representation. Acceptance requires a screenshot showing the interaction and resulting value. This specification does not define behavior outside positive integer inputs or prescribe a particular hexadecimal format or visual layout.

## Actors

The calculator user invokes the conversion through the HEX key/button. No separate roles or authorization boundaries are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

<!-- Before drafting, split the pinned request and recorded answers into observable obligations
for the actual interfaces (UI, API, event/message, batch/job, CLI, library or mixed). Keep the
source -> REQ/AC -> assertion -> verification mapping in the existing sections. Existing ACs count;
do not duplicate clauses or invent controls, endpoints, limits, errors or screenshot requirements.
Self-check whether an implementation could meet this draft yet omit an explicit request. Repair
clear omissions in this editable draft and recheck within the returned repair policy; preserve
published inputs and settled answers. These are authoring instructions, not execution evidence. -->

### S1 — Convert a displayed positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a positive integer.

- **Given** the calculator displays a positive integer
  **When** the user activates the HEX key/button
  **Then** the current value is displayed in its hexadecimal representation.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** An empty display is outside the specified positive-integer input condition; no empty-state behavior is defined.
- **Failure:** No dependency or failure behavior is specified.
- **Partial:** No partial-operation behavior is specified.

## Scenario coverage

<!-- One row per behavior/acceptance clause; repeat rows for multiple outcomes. Every referenced
S-number must have complete Given/When/Then acceptance cases above. Outcome is success, failure,
boundary, or empty. Rejection/error requirements need distinct failure cases, not only happy-path
prose. Use the pinned request and clarification answers; do not invent error text or new scope. -->

| Clause | Scenario | Outcome |
|---|---|---|
| `HEX-2018:REQ-001` | S1 | success |
| `HEX-2018:AC-001` | S1 | success |

## Permissions

Not applicable: the pinned Story and clarification define no role-based permissions or access restrictions.

## Boundary conditions

The conversion requirement applies to positive integer values displayed by the calculator. Zero, negative, and non-integer values are outside the confirmed input scope; their behavior is unspecified. No limits on positive integer size are established.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Activating the HEX key/button converts the current displayed positive integer to its hexadecimal representation. *(S1)* [HEX-2018:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- A screenshot showing the user activating the HEX key/button and the resulting hexadecimal value for a positive integer is sufficient to demonstrate acceptance. *(S1)* [HEX-2018:AC-001] [scope:SRI-35efa5d9d09b]

## Verification intent

<!-- One row per declared clause, including non-functional requirements. Methods: test, visual,
inspection, or a comma-separated combination (all required). AC Criterion is its own ID. A
visual/inspection requirement names the AC proving it; a test-only requirement may use -. Choose
from the pinned source, not from available tools. A screenshot is visual proof, not a test exemption.
Planning must inherit these methods and cannot change them without an approved scope amendment. -->

| Clause | Methods | Criterion |
|---|---|---|
| `HEX-2018:REQ-001` | test | - |
| `HEX-2018:AC-001` | visual | `HEX-2018:AC-001` |

## Non-functional requirements

No non-functional requirements are stated in the pinned Story or clarification.

Use governed requirement anchors here too (for example `[HEX-2018:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

None: this Story pinned no constitution.

## Assumptions

The existing calculator presents the current value referenced by the Story. The exact hexadecimal prefix/case and visual layout are not specified.

## Out of scope

Conversion of zero, negative, or non-integer values; hexadecimal input or arithmetic; and any particular hexadecimal prefix, letter case, or visual layout.

## Sources

No supporting documents were supplied. The specification is based on the pinned Story source `singularity/work-items/hex-2018/source.json` (SHA-256 `63edb570d84ec8510836e72b9680529ff8eb23758182a311d1945fc97ad88569`) and the recorded clarification `singularity/work-items/hex-2018/context/clarifications-specification-gen1.json` (SHA-256 `0d63e0cde4344e163bc2e2caab16c0cbe6a411e53f2b5b363011ed0bf699a099`).
