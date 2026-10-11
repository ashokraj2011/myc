<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "l-hex",
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
      "sha256": "61d1bafd5fb43c1f6adeaa77dc09d6e484289dc070f838a6ef6408692ce53dab",
      "bytes": 6727
    },
    "generation": 1,
    "publishedAt": "2026-10-11T16:13:10.871Z"
  },
  "sourceCommit": "6cb70c99ec808adc7d84f591a6303520990492e9",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "083d8965c65e8abeeb52bc7c40dd470aa5cdc144f592aea74911d5544b9770be",
  "sourceSha256": "829a34d89dbbf70490a241ec33c8f1e0d134398fde78a5f9771eb460d14115f1",
  "template": {
    "path": "singularity/work-items/l-hex/config/wfa/blobs/sha256/55b0d6c4c9aa5ba19739493825f6c993f03d63bed9e1a5e2bb7d5c099b8b91bb",
    "sha256": "55b0d6c4c9aa5ba19739493825f6c993f03d63bed9e1a5e2bb7d5c099b8b91bb",
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
    "path": "singularity/work-items/l-hex/context/clarifications-specification-gen1.json",
    "sha256": "24b072e5c4b1d73dd5086af0142885df849a821bf2b7c7962b79d5dc1f953303",
    "promptSha256": "0f9077f7247c7c646ad93c27a24481371b02a83c461b60e219287a021e8245fc",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-10-11T16:09:07.491Z",
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
      "path": "singularity/work-items/l-hex/telemetry/specification-gen1.json",
      "sha256": "e279930323346cebd47f2dda08a105a876d73ba854b8dd59cdaaaab2622111bc",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 13007,
        "estimatedTokens": 3252,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 13007,
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
      "startedAt": "2026-10-11T16:13:10.871Z",
      "completedAt": "2026-10-11T16:13:10.871Z",
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

# Specification — l-hex

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

The calculator needs a HEX operator that converts the current numeric display into hexadecimal notation while preserving the existing calculation flow. The feature is a UI-facing behavior: it must work for valid integer inputs, remain safe on empty or invalid states, and present output in a clear, accessible format. It does not expand the product into multi-base arithmetic beyond the stated hex conversion behavior.

## Actors

- Calculator user: enters numbers and triggers the operator from the standard calculator UI.
- Accessibility user: relies on meaningful labels and a readable display state.

## User scenarios

### S1 — Convert a decimal value to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** A value is shown in the calculator display and the user wants to inspect it in hexadecimal notation.

- **Given** the display contains `255`
  **When** the user presses the HEX operator
  **Then** the display changes to `FF` and the value is shown in uppercase hexadecimal form

- **Given** the display contains `10`
  **When** the user presses the HEX operator
  **Then** the display changes to `A`

### S2 — Handle empty and invalid input safely

**Priority:** P2
**Actor:** Calculator user
**Context:** The user triggers the operator before entering a value or after a partial entry.

- **Given** the display is empty
  **When** the user presses the HEX operator
  **Then** the calculator does not crash, freeze, or show a broken state

- **Given** the display contains a value that cannot be converted cleanly
  **When** the user presses the HEX operator
  **Then** the calculator leaves the display in a safe state and does not produce invalid formatting

## Failure and empty states

- **Empty:** With no current value, the HEX operator is ignored without an exception or visual corruption.
- **Failure:** If the value cannot be converted, the UI remains stable and no invalid numeric representation is shown.
- **Partial:** If a partial entry exists, the operator does not force a conversion until a valid numeric value is present.

## Permissions

- All users of the calculator may access the HEX operator in the same interface as other value-format actions.
- No privileged or authenticated role is required for this behavior.
- A user without this feature should still see the existing calculator behavior and not encounter a broken control.

## Boundary conditions

- The feature applies to the current numeric display value, not to arbitrary long integer strings from outside the app.
- The output uses uppercase hexadecimal digits `0-9` and `A-F`.
- The operator must remain safe for empty states, invalid inputs, and values that exceed the display's practical capacity.
- If a value cannot be displayed in the current calculator layout, the UI must not corrupt the value or the keypad.

## Requirements

1. The calculator must provide a HEX operator in the same interaction model as the other calculator value-format controls. *(S1)* [l-hex:REQ-001]
2. When the current display contains a valid integer value, the HEX operator must convert it to uppercase hexadecimal notation. *(S1)* [l-hex:REQ-002]
3. When the current display is empty or invalid, the HEX operator must not throw, freeze, or render malformed output. *(S2)* [l-hex:REQ-003]
4. The operator must preserve the calculator's normal usability, including clear visual feedback and consistent display stability during and after conversion. *(S1, S2)* [l-hex:REQ-004]
5. The feature must be accessible: a screen reader or keyboard user must be able to identify the control and understand the updated display state. *(S1)* [l-hex:REQ-005]

Acceptance criteria use the same stable, namespaced form:

- Pressing HEX on `255` results in the display showing `FF`. *(S1)* [l-hex:AC-001]
- Pressing HEX on an empty display leaves the calculator in a stable, non-crashing state. *(S2)* [l-hex:AC-002]
- Pressing HEX on a valid integer preserves the calculator UI layout and produces uppercase hexadecimal output. *(S1)* [l-hex:AC-003]

## Non-functional requirements

- The conversion response must feel immediate to the user; the result should appear within 150 ms for normal values in the calculator's local UI. *(l-hex:REQ-006)*
- The display must remain readable and keyboard-accessible with meaningful labels; no hidden or unlabeled controls may be introduced. *(l-hex:REQ-007)*
- The feature must not introduce a persistent error state or crash when a user presses the operator repeatedly. *(l-hex:REQ-008)*

## Constitution articles

No constitution article IDs were pinned for this story in the current workflow context, so this specification makes no unsupported constitutional claims beyond the calculator behavior above.

## Assumptions

- The calculator operates on a single current value shown in the display at a given time.
- The feature is a visual conversion operator, not a broader multi-base calculation engine.
- Existing arithmetic patterns and UI conventions remain intact unless explicitly changed elsewhere in the product.

## Out of scope

- Full hexadecimal arithmetic with independent value-entry and operation modes.
- Any redesign of the calculator keypad beyond adding the HEX operator behavior.
- Data persistence or cross-session history for converted values.

## Sources

- DOC-001 — l-hex / USER-STORY.md — "implement hex oeprator"
- DOC-002 — repository calculator UI context — keypad and display behavior from the current application state
- GAP — no additional pinned design or product specification documents were available for this story
