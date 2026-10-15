<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "after-fix",
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
      "sha256": "fc12538f2cf7126777b4e098ca425097afa56ff6b866fcc80404cca777c22a5d",
      "bytes": 6893
    },
    "generation": 1,
    "publishedAt": "2026-10-15T11:20:57.940Z"
  },
  "sourceCommit": "9c1e20e49168a4861c22ed8357c20dc873d159fe",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "cb6a60069ea9e278ebc92437dfebb6d6ab77375482b08bf317e5221b4e5999fc",
  "sourceSha256": "92bdbeb174685b0606b1f8d0a05700da09a818b9124c4e498c6d22cef721807a",
  "template": {
    "path": "singularity/work-items/after-fix/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
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
    "path": "singularity/work-items/after-fix/context/clarifications-specification-gen1.json",
    "sha256": "bbb4d3e88efb100e0535b448e95e1a997f4ae3837a1a90f962f918d464b3297f",
    "promptSha256": "de8fa1e7c9341d436b425cbb09e07c05b3eec5f3469e44b9c30a94e70ea6ab18",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-10-15T11:19:38.364Z",
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
      "path": "singularity/work-items/after-fix/telemetry/specification-gen1.json",
      "sha256": "f43f3132524c8523af7f4c4a65f87ec3bba95e062b93119dc7f93c6fdcca5771",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 18641,
        "estimatedTokens": 4661,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 18641,
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
      "startedAt": "2026-10-15T11:20:57.940Z",
      "completedAt": "2026-10-15T11:20:57.940Z",
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

# Specification — after-fix

## Agent brief

Add a decimal-to-hexadecimal conversion operation to the existing calculator for calculator users.
The operation accepts positive base-10 integers only and returns an uppercase hexadecimal value with
the `0x` prefix. Users must be able to invoke it through a visible keypad control and through
keyboard interaction. Blank input, zero, negative values, fractional values, and non-numeric input
must produce a visible error instead of a hexadecimal result. Automated tests must cover successful
conversion, both interaction surfaces, output formatting, and invalid or empty input. Hexadecimal
literals, hexadecimal arithmetic mode, reverse conversion, and conversion of non-positive or
non-integer values are excluded.

## Actors

- **Calculator user:** Enters a decimal value, invokes hexadecimal conversion through the keypad or
  keyboard, and sees either the converted value or an error. No elevated authority is required.

## User scenarios

### S1 — Convert a positive decimal integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the current input is a positive base-10 integer.

- **Given** the user has entered `26`
  **When** the user invokes hexadecimal conversion from the visible keypad control
  **Then** the calculator displays `0x1A`

- **Given** the user has entered `255` with the keyboard
  **When** the user invokes hexadecimal conversion through keyboard interaction
  **Then** the calculator displays `0xFF`

### S2 — Reject input outside the supported domain

**Priority:** P2
**Actor:** Calculator user
**Context:** The current input is not a positive base-10 integer.

- **Given** the current input is `0`, a negative integer, a fraction, or non-numeric text
  **When** the user invokes hexadecimal conversion
  **Then** the calculator displays a visible error and does not display a converted result

- **Given** the current input is empty
  **When** the user invokes hexadecimal conversion
  **Then** the calculator displays a visible error and does not display a converted result

## Failure and empty states

- **Empty:** Invoking hexadecimal conversion without a value displays a visible error and no
  hexadecimal result.
- **Failure:** Any value outside the positive-integer domain displays a visible error and no
  hexadecimal result.
- **Partial:** A conversion is atomic; the calculator must not display a partial or stale
  hexadecimal result when validation or conversion fails.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `after-fix:REQ-001` | S1 | success |
| `after-fix:REQ-002` | S1 | success |
| `after-fix:REQ-003` | S1 | success |
| `after-fix:REQ-004` | S2 | failure |
| `after-fix:REQ-004` | S2 | boundary |
| `after-fix:REQ-004` | S2 | empty |
| `after-fix:AC-001` | S1 | success |
| `after-fix:AC-002` | S2 | failure |
| `after-fix:AC-002` | S2 | boundary |
| `after-fix:AC-002` | S2 | empty |
| `after-fix:AC-003` | S1 | success |
| `after-fix:AC-003` | S2 | failure |

## Permissions

All calculator users may invoke decimal-to-hexadecimal conversion. The feature introduces no
privileged action, role-based restriction, or alternate unauthorized view.

## Boundary conditions

- The accepted domain is positive base-10 integers: whole numeric values strictly greater than zero.
- `1` is the smallest accepted value and converts to `0x1`.
- Zero, negative values, fractional values, non-numeric values, and blank input are rejected with a
  visible error.
- Successful output begins with `0x`; every hexadecimal digit from `A` through `F` is uppercase.
- Conversion either produces one complete hexadecimal result or an error; it never exposes a
  partial conversion.

## Requirements

- The calculator shall convert a positive base-10 integer to its mathematically equivalent hexadecimal value. *(S1)* [after-fix:REQ-001]
- The calculator shall expose hexadecimal conversion through both a visible keypad control and keyboard interaction. *(S1)* [after-fix:REQ-002]
- The calculator shall format every successful conversion with a `0x` prefix and uppercase hexadecimal digits. *(S1)* [after-fix:REQ-003]
- The calculator shall reject blank input, zero, negative values, fractional values, and non-numeric input with a visible error and no converted result. *(S2)* [after-fix:REQ-004]

- Converting `1`, `26`, and `255` shall produce `0x1`, `0x1A`, and `0xFF`, respectively, with the successful cases exercised through the keypad and keyboard interaction paths. *(S1)* [after-fix:AC-001]
- Attempting conversion with blank input, `0`, a negative integer, a fraction, or non-numeric input shall display an error and shall not display a hexadecimal result. *(S2)* [after-fix:AC-002]
- Automated test cases shall verify successful conversion, both interaction surfaces, uppercase prefixed formatting, and each declared invalid or empty input category. *(S1, S2)* [after-fix:AC-003]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `after-fix:REQ-001` | test | - |
| `after-fix:REQ-002` | test, inspection | `after-fix:AC-001` |
| `after-fix:REQ-003` | test | - |
| `after-fix:REQ-004` | test, visual | `after-fix:AC-002` |
| `after-fix:AC-001` | test, inspection | `after-fix:AC-001` |
| `after-fix:AC-002` | test, visual | `after-fix:AC-002` |
| `after-fix:AC-003` | inspection | `after-fix:AC-003` |

## Non-functional requirements

No additional quantitative latency, throughput, availability, privacy, or retention requirement was
requested. Keyboard interaction is a functional interaction requirement covered by
`after-fix:REQ-002`.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- Input is interpreted as base-10 because clarification defined the feature as decimal-to-hexadecimal
  conversion.
- Existing calculator behavior remains unchanged outside the new conversion operation.
- The exact keyboard command and control placement may follow existing calculator interaction
  conventions, provided both paths satisfy `after-fix:REQ-002`.

## Out of scope

- Entering hexadecimal literals as operands.
- Performing arithmetic in a hexadecimal calculator mode.
- Converting hexadecimal values back to decimal or another base.
- Converting zero, negative values, or fractional values.
- Changing existing arithmetic, scientific, financial, graphing, or history behavior.

## Sources

- DOC-001 — Pinned Story source `source.json`, SHA-256
  `92bdbeb174685b0606b1f8d0a05700da09a818b9124c4e498c6d22cef721807a`.
- DOC-002 — Governed clarification responses for Specification generation 1, SHA-256
  `bbb4d3e88efb100e0535b448e95e1a997f4ae3837a1a90f962f918d464b3297f`.
- DOC-003 — Composed Specification context, SHA-256
  `de8fa1e7c9341d436b425cbb09e07c05b3eec5f3469e44b9c30a94e70ea6ab18`.
- No external supporting documents were provided.
