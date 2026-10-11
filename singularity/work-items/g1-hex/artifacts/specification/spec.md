<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "g1-hex",
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
      "sha256": "470fca2ef81eb9864b4290e6ab6b1bd5a6513d928d6cb405bf6ae1df722f13a9",
      "bytes": 7551
    },
    "generation": 1,
    "publishedAt": "2026-10-11T07:25:09.630Z"
  },
  "sourceCommit": "1fc9362bcdd9447974b00df1820870edc11a1db4",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "cee6b55575906c0c9f39888d46282b12f48e9c3767900288f7ed4806aff76f58",
  "sourceSha256": "bb2c97202cc62ff0f1cfb68c86cb5b305adad714bcb696ac3fe282fd2c325e95",
  "template": {
    "path": "singularity/work-items/g1-hex/config/wfa/blobs/sha256/55b0d6c4c9aa5ba19739493825f6c993f03d63bed9e1a5e2bb7d5c099b8b91bb",
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
    "path": "singularity/work-items/g1-hex/context/clarifications-specification-gen1.json",
    "sha256": "20460caf78e5977be0ada1297d21aa2f7e705c2651f4b64c009bb2238325a40d",
    "promptSha256": "6585f49949de32651dd0e036f3fde9da824e53882f360afbd4fa9daf7b92d688",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-10-11T07:23:47.905Z",
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
      "path": "singularity/work-items/g1-hex/telemetry/specification-gen1.json",
      "sha256": "71976f23f8b588cdca2cb2c2f34cfab4b1fa78d7fd150e6a515c8fc0cea05620",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 11892,
        "estimatedTokens": 2973,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 11892,
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
      "startedAt": "2026-10-11T07:25:09.630Z",
      "completedAt": "2026-10-11T07:25:09.630Z",
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

# Specification — g1-hex

## Agent brief

Add a visible `HEX` action to the existing standard calculator. When invoked, it converts the
current decimal value to uppercase hexadecimal without a prefix and presents the converted value in
the existing result display. The supported domain is every non-negative JavaScript safe integer,
including zero. Negative numbers, fractional numbers, values above `Number.MAX_SAFE_INTEGER`, empty
or incomplete expressions, and invalid expressions must produce the calculator's visible error
state rather than a partial or rounded conversion. The feature is limited to one-way decimal-to-hex
conversion; hexadecimal entry, hexadecimal arithmetic, automatic conversion, and a keyboard-only
invocation are excluded. Delivery evidence must include unit tests and a screenshot of the working
UI.

## Actors

- **Calculator user:** enters or calculates a decimal value, invokes the visible `HEX` action, and
  reads or copies the displayed result. No authentication or elevated authority exists in the
  current client-side calculator.

## User scenarios

### S1 — Convert a supported decimal value

**Priority:** P1
**Actor:** Calculator user
**Context:** The standard calculator is visible and its current decimal value is a non-negative
JavaScript safe integer.

- **Given** the current decimal value is `255`
  **When** the user activates the visible `HEX` button
  **Then** the main result display shows `FF`.

- **Given** the current decimal value is `0`
  **When** the user activates the visible `HEX` button
  **Then** the main result display shows `0`.

- **Given** the current decimal value is `9007199254740991`
  **When** the user activates the visible `HEX` button
  **Then** the main result display shows `1FFFFFFFFFFFFF`.

### S2 — Reject an unsupported value

**Priority:** P2
**Actor:** Calculator user
**Context:** The standard calculator is visible.

- **Given** the current value is negative
  **When** the user activates `HEX`
  **Then** the main result display shows the calculator's `Error` state and no rounded or
  two's-complement result is shown.

- **Given** the current value has a fractional component
  **When** the user activates `HEX`
  **Then** the main result display shows the calculator's `Error` state and the value is not
  truncated or rounded.

- **Given** the current value exceeds `Number.MAX_SAFE_INTEGER`, or the expression is empty,
  incomplete, or invalid
  **When** the user activates `HEX`
  **Then** the main result display shows the calculator's `Error` state.

## Failure and empty states

- **Empty:** Invoking `HEX` without a complete decimal value shows `Error`.
- **Failure:** Invalid, non-finite, negative, fractional, or unsafe-integer input shows `Error`.
- **Partial:** No partial hexadecimal output is shown; conversion either produces the full uppercase
  result or the error state.

## Permissions

All calculator users may invoke the feature. The existing application has no role-based restriction,
and this feature introduces none.

## Boundary conditions

- The inclusive supported numeric range is `0` through `Number.MAX_SAFE_INTEGER`
  (`9007199254740991`).
- The input must represent an integer; any fractional component is invalid.
- Output uses uppercase digits `0`-`9` and `A`-`F` with no `0x` prefix.
- Zero converts to `0`.
- The conversion is one-way. The hexadecimal result is display output, not a promise that
  subsequent hexadecimal input or arithmetic is supported.
- The action is available as a visible button in the standard calculator UI.

## Requirements

- The standard calculator shall expose a visible button with the accessible name `HEX`. *(S1, S2)*
  [g1-hex:REQ-001]
- Activating `HEX` shall convert the current decimal value when it is an integer in the inclusive
  range `0` through `Number.MAX_SAFE_INTEGER`. *(S1)* [g1-hex:REQ-002]
- A successful conversion shall replace the main result display with uppercase hexadecimal digits
  and shall not include a base prefix. *(S1)* [g1-hex:REQ-003]
- Activating `HEX` for a negative or fractional value shall show the existing `Error` result and
  shall not truncate, round, or reinterpret the value. *(S2)* [g1-hex:REQ-004]
- Activating `HEX` for an empty, incomplete, invalid, non-finite, or unsafe-integer value shall show
  the existing `Error` result and shall not show partial conversion output. *(S2)*
  [g1-hex:REQ-005]
- The conversion logic shall be covered by unit tests for zero, a typical value, the maximum safe
  integer, negative input, fractional input, invalid input, and input above the safe-integer
  boundary. *(S1, S2)* [g1-hex:REQ-006]
- The UI interaction shall be covered by a test that enters or calculates `255`, activates `HEX`,
  and observes `FF` in the main result display. *(S1)* [g1-hex:REQ-007]

- A screenshot shall show the standard calculator with the visible `HEX` button and `FF` displayed
  after converting decimal `255`. *(S1)* [g1-hex:AC-001]
- Automated tests shall verify successful conversion and every specified invalid-input class without
  regressing existing calculator tests. *(S1, S2)* [g1-hex:AC-002]
- In the running application, `0`, `255`, and `9007199254740991` shall display `0`, `FF`, and
  `1FFFFFFFFFFFFF`, respectively, after `HEX` is activated. *(S1)* [g1-hex:AC-003]
- In the running application, negative, fractional, invalid, non-finite, empty, incomplete, and
  unsafe-integer values shall display `Error` after `HEX` is activated. *(S2)* [g1-hex:AC-004]

## Non-functional requirements

- The `HEX` action shall use a semantic button that is keyboard-focusable and has the accessible name
  `HEX`, verifiable with the existing DOM test stack. *(S1, S2)* [g1-hex:REQ-008]
- Conversion shall execute locally in the browser without adding a network dependency or persisting
  the converted value beyond the calculator's existing state behavior. *(S1, S2)*
  [g1-hex:REQ-009]

## Constitution articles

No constitution article IDs were supplied in the governed phase inputs, so none are cited.

## Assumptions

- "Current decimal value" means the value represented by the calculator's current expression or
  result at the time `HEX` is activated; planning may choose the implementation detail while
  preserving the scenarios above.
- The existing display convention of the literal result `Error` remains the user-visible failure
  representation.
- Existing calculator modes and behavior remain unchanged outside the new standard-mode action.

## Out of scope

- Hexadecimal digit entry or editing.
- Hexadecimal arithmetic or a persistent base mode.
- Lowercase output or a `0x` prefix.
- Conversion of negative numbers, fractions, non-finite values, or integers outside JavaScript's
  safe range.
- Automatic conversion and a keyboard-only invocation.
- Changes to scientific, converter, financial, or graphing modes.

## Sources

- Pinned Story source `singularity/work-items/g1-hex/source.json`, SHA-256
  `bb2c97202cc62ff0f1cfb68c86cb5b305adad714bcb696ac3fe282fd2c325e95`.
- Governed human clarification record for specification generation 1, SHA-256
  `20460caf78e5977be0ada1297d21aa2f7e705c2651f4b64c009bb2238325a40d`.
- Existing calculator interaction and state behavior in `src/App.jsx`.
- Existing standard keypad structure in `src/components/StandardKeypad.jsx`.
- Existing result display and `Error` convention in `src/components/Display.jsx` and
  `src/utils/evaluator.js`.
- Existing React/Vitest UI test approach in `src/App.test.jsx`.
- No supporting documents were offered to this phase.
