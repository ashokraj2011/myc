<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-102",
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
      "sha256": "2346457f653e9adb86675c30b61f0276e5658949b5b0d1fc07c2e851ca95239b",
      "bytes": 10228
    },
    "generation": 1,
    "publishedAt": "2026-10-17T18:25:02.170Z"
  },
  "sourceCommit": "06ab1d37c89ce5e9848cab0cc31cceeee6f52aa1",
  "generationCommit": "9826cb289f87aa6210a981f268cc930977933881",
  "publicationCommit": "9826cb289f87aa6210a981f268cc930977933881",
  "configSha256": "cefab2b320917902d3a5d87f8fb41c6ca3fa661958e79fec9ecf93e28f239314",
  "sourceSha256": "b1e2db4068173411a09dd5a1c65179cd3f2ef2d9ec06b5a6598dc515cabaa055",
  "template": {
    "path": "singularity/work-items/hex-102/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
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
    "path": "singularity/work-items/hex-102/context/clarifications-specification-gen1.json",
    "sha256": "6de30da0959f46e9fe61268eaacb9115820a891f6bafc42f9fbe914ba8c9b548",
    "promptSha256": "75ca9e617ac60c1d97896af4e41139499e701dad79d3dbbe3ef507bc98c3d71f",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-10-17T18:22:34.897Z",
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
      "path": "singularity/work-items/hex-102/telemetry/specification-gen1.json",
      "sha256": "dbe6323d1fe5355d55c8067694ef28bee243893063614c27ba03a7cfdeb2690e",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 18796,
        "estimatedTokens": 4699,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 18796,
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
      "startedAt": "2026-10-17T18:25:02.170Z",
      "completedAt": "2026-10-17T18:25:02.170Z",
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

# Specification — hex-102

## Agent brief

Add a visible HEX button beside the existing calculator controls. A calculator user
converts the current decimal integer, from 0 through 99999 inclusive, to uppercase
hexadecimal without a prefix, replacing the displayed value. Empty input, fractions,
negative values and values above the upper limit produce an on-screen error instead
of a successful conversion. This is a one-shot conversion, not a hexadecimal input
or arithmetic mode. Verification requires new screenshots and automated tests.
This document specifies behavior only; no implementation or test execution is
claimed. Intent derives from DOC-001 and confirmed decisions in DOC-002.

## Actors

- Calculator user: uses the existing calculator controls and the new HEX action.
  No additional account or privileged role is introduced.
- Downstream implementer and verifier: implement these clauses and retain automated
  and screenshot evidence; neither role grants human approval.

## User scenarios

### S1 — Convert the current integer with a button

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The calculator displays a current decimal integer.

- **Given** the calculator is visible,
  **When** the user locates the conversion action,
  **Then** a visible button labeled HEX appears beside existing calculator controls.
- **Given** the current integer is 26,
  **When** the user activates HEX,
  **Then** the displayed current value becomes `1A`, without `0x`.
- **Given** the current integer is 255,
  **When** the user activates HEX,
  **Then** the displayed current value becomes `FF`, using uppercase letters.

### S2 — Convert both ends of the supported range

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The supported decimal range is inclusive, 0 through 99999.

- **Given** the current integer is 0,
  **When** the user activates HEX,
  **Then** the displayed current value is `0`, not an empty result.
- **Given** the current integer is 99999,
  **When** the user activates HEX,
  **Then** the displayed current value becomes `1869F`.

### S3 — Reject unsupported values visibly

**Priority:** P1  
**Actor:** Calculator user  
**Context:** Conversion is requested for an unsupported current value.

- **Given** the current input is empty,
  **When** the user activates HEX,
  **Then** the calculator displays an on-screen error rather than a conversion result.
- **Given** the current value is 1.5,
  **When** the user activates HEX,
  **Then** the calculator displays an on-screen error instead of truncating the fraction.
- **Given** the current value is -1,
  **When** the user activates HEX,
  **Then** the calculator displays an on-screen error instead of converting a negative number.
- **Given** the current value is 100000,
  **When** the user activates HEX,
  **Then** the calculator displays an on-screen error instead of converting an out-of-range number.

### S4 — Verify the delivered conversion

**Priority:** P1  
**Actor:** Downstream verifier  
**Context:** An implementation candidate is available.

- **Given** the candidate implements S1 through S3,
  **When** the verifier runs automated button, conversion, range and invalid-input tests,
  **Then** results show whether each specified outcome passes or fails.
- **Given** the candidate can be displayed,
  **When** the verifier captures new screenshots of the visible HEX button, a successful
  conversion and an on-screen error,
  **Then** the evidence shows those three observable states for that candidate.
- **Given** the current value is 100000,
  **When** the verifier activates HEX and captures the resulting screen,
  **Then** the screenshot shows an on-screen error instead of a converted value.

## Failure and empty states

- Empty input is rejected visibly (S3); numeric zero is valid (S2).
- Fractions, negative numbers and values above 99999 show an error on the calculator
  screen (S3). Exact error copy is not prescribed by the confirmed intent.
- Conversion has one displayed outcome, either hexadecimal output or an error;
  no partial-success workflow or external dependency behavior is introduced.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `HEX-102:REQ-001` | S1 | success |
| `HEX-102:REQ-002` | S1 | success |
| `HEX-102:REQ-002` | S2 | boundary |
| `HEX-102:REQ-003` | S3 | failure |
| `HEX-102:REQ-003` | S3 | empty |
| `HEX-102:REQ-003` | S3 | boundary |
| `HEX-102:REQ-004` | S4 | success |
| `HEX-102:REQ-005` | S4 | success |
| `HEX-102:REQ-005` | S4 | failure |
| `HEX-102:AC-001` | S1 | success |
| `HEX-102:AC-002` | S1 | success |
| `HEX-102:AC-002` | S2 | boundary |
| `HEX-102:AC-003` | S3 | failure |
| `HEX-102:AC-003` | S3 | empty |
| `HEX-102:AC-003` | S3 | boundary |
| `HEX-102:AC-004` | S4 | success |
| `HEX-102:AC-005` | S4 | success |
| `HEX-102:AC-005` | S4 | failure |

## Permissions

HEX is available to the same users who can use the calculator. No new authentication,
authorization, protected data or role-dependent rendering is requested.

## Boundary conditions

The accepted numeric domain is decimal integers in the closed interval [0, 99999].
Zero and 99999 are accepted; -1 and 100000 are rejected. Fractional numeric values
are rejected, not rounded or truncated. Output uses uppercase digits A-F without
the `0x` prefix. Representative expected results are 0 -> `0`, 26 -> `1A`,
255 -> `FF` and 99999 -> `1869F`. No new hexadecimal arithmetic mode, dedicated
keyboard shortcut or decimal-return control is part of this change.

## Requirements

- Provide a visible HEX button beside the existing calculator controls.
  *(S1; DOC-001, DOC-002 response 3)* [HEX-102:REQ-001]
- Activating HEX for a current decimal integer from 0 through 99999 inclusive
  replaces the displayed value with its uppercase hexadecimal representation
  without a prefix. *(S1, S2; DOC-002 responses 1-3)* [HEX-102:REQ-002]
- Activating HEX for empty input, a fractional value, a negative number or a value
  above 99999 displays an on-screen error rather than a successful conversion.
  *(S3; DOC-002 response 2)* [HEX-102:REQ-003]
- Provide automated tests of button activation, valid conversions, inclusive range
  boundaries and each specified invalid-input category.
  *(S4; DOC-001, DOC-002 response 4)* [HEX-102:REQ-004]
- Capture new screenshot evidence of the HEX button, successful conversion and
  an on-screen invalid-input error.
  *(S4; DOC-002 response 4)* [HEX-102:REQ-005]

### Acceptance criteria

- The rendered calculator shows a HEX button beside existing controls.
  *(S1; DOC-002 response 3)* [HEX-102:AC-001]
- Button activation produces 0 -> `0`, 26 -> `1A`, 255 -> `FF` and
  99999 -> `1869F` in the current-value display.
  *(S1, S2; DOC-002 response 2)* [HEX-102:AC-002]
- Empty input, 1.5, -1 and 100000 each produce an on-screen error on HEX activation,
  not a successful conversion.
  *(S3; DOC-002 response 2)* [HEX-102:AC-003]
- Automated tests cover S1-S3 with retained execution results showing that the
  specified button, formatting, range and error cases pass.
  *(S4; DOC-002 response 4)* [HEX-102:AC-004]
- New screenshots show button placement, a successful conversion result and
  a visible invalid-input error for the verified implementation candidate.
  *(S4; DOC-002 response 4)* [HEX-102:AC-005]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `HEX-102:REQ-001` | test, visual | `HEX-102:AC-001` |
| `HEX-102:REQ-002` | test, visual | `HEX-102:AC-002` |
| `HEX-102:REQ-003` | test, visual | `HEX-102:AC-003` |
| `HEX-102:REQ-004` | test | - |
| `HEX-102:REQ-005` | visual | `HEX-102:AC-005` |
| `HEX-102:AC-001` | test, visual | `HEX-102:AC-001` |
| `HEX-102:AC-002` | test, visual | `HEX-102:AC-002` |
| `HEX-102:AC-003` | test, visual | `HEX-102:AC-003` |
| `HEX-102:AC-004` | test | `HEX-102:AC-004` |
| `HEX-102:AC-005` | visual | `HEX-102:AC-005` |

## Non-functional requirements

No additional quantitative performance, availability, retention or accessibility
targets were supplied. Do not infer new service-level guarantees. Existing calculator
conventions remain the implementation baseline; this specification adds no new
network, persistence or privileged-data workflow.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- "Current value" means the calculator's current decimal numeric value, not a new
  expression-entry or hexadecimal arithmetic subsystem.
- No reference screenshot is provided in the governed inputs. New screenshots
  demonstrate the specified states rather than pixel matching an external design.
- Exact button coordinates and error wording follow repository conventions; the
  confirmed obligations are adjacent placement and an observable on-screen error.

## Out of scope

- Negative, fractional and greater-than-99999 conversions.
- Hexadecimal entry, hexadecimal arithmetic mode, new keyboard shortcuts and a new
  decimal-return control.
- Other base-conversion buttons, unrelated calculator features and redesigns.
- Application edits or test execution during this specification-authoring phase.

## Open questions

None blocking after the recorded human clarification. Layout coordinates and error
copy are implementation details constrained by the observable criteria above.

## Upstream discrepancies

None: no earlier-phase inputs or open upstream issues were supplied by phase entry.

## Sources

- DOC-001 - [Pinned Story source](../../source.json), SHA-256
  `b1e2db4068173411a09dd5a1c65179cd3f2ef2d9ec06b5a6598dc515cabaa055`:
  implement the HEX button and functionality, with test cases.
- DOC-002 - [Human decisions for generation 1](../../context/clarifications-specification-gen1.json),
  SHA-256 `6de30da0959f46e9fe61268eaacb9115820a891f6bafc42f9fbe914ba8c9b548`:
  four responses recorded for specification generation 1, covering conversion,
  numeric range and errors, button behavior, and screenshots plus automated tests.
- No supporting design documents, reference screenshots or approved upstream
  artifacts were offered. Retained execution evidence reports no required
  execution for this authoring phase; no passing implementation evidence is claimed.
