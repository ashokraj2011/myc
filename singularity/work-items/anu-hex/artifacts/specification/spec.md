<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "anu-hex",
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
      "sha256": "644b2d3230191a38b8b49bdb5b60c12a37b704c47c49a48990024523ed0a11d4",
      "bytes": 4071
    },
    "generation": 1,
    "publishedAt": "2026-10-16T11:36:12.056Z"
  },
  "sourceCommit": "2c5a3fae5e19a924e98eb1148fb17114524c5d3d",
  "generationCommit": "e65925c7342ebdc8bf0d71bbd215a4a62971dc2d",
  "publicationCommit": "e65925c7342ebdc8bf0d71bbd215a4a62971dc2d",
  "configSha256": "cefab2b320917902d3a5d87f8fb41c6ca3fa661958e79fec9ecf93e28f239314",
  "sourceSha256": "2aa5dd1f00b6d1f1d71f2afc9a5837e34836af77b2abed56f495e2cf88e64cb8",
  "template": {
    "path": "singularity/work-items/anu-hex/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
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
    "path": "singularity/work-items/anu-hex/context/clarifications-specification-gen1.json",
    "sha256": "4e769b8991cfff320735e2b4fa5552e8de794f0fa007b3c2f5848e2e96b9456b",
    "promptSha256": "aefca6da36d73ad83ea0ed541aedb3d54fb71f541aca3feea6ade56f21bec335",
    "responses": 2,
    "markers": [],
    "recordedAt": "2026-10-16T11:34:21.861Z",
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
      "path": "singularity/work-items/anu-hex/telemetry/specification-gen1.json",
      "sha256": "9ba010f701d9ad6e0c79690c6862cb1266acf0375ac3134ffa5dc8fd4565deaf",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 18780,
        "estimatedTokens": 4695,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 18780,
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
      "startedAt": "2026-10-16T11:36:12.056Z",
      "completedAt": "2026-10-16T11:36:12.056Z",
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

# Specification — anu-hex

## Agent brief

Add a yellow hex-conversion button to the calculator. A calculator user activates it to convert the currently displayed numeric value to an equivalent hexadecimal representation. The button must be visible and its conversion demonstrable on screen. The request does not define representation formatting or behavior for non-numeric/error displays; do not infer additional requirements from those gaps.

## Actors

The calculator user operates the existing calculator. No additional roles or differentiated permissions are specified.

## User scenarios

### S1 — Convert the displayed calculator value

**Priority:** P1  
**Actor:** Calculator user  
**Context:** A numeric value is currently displayed in the calculator.

- **Given** a numeric value is displayed  
  **When** the user activates the hex-conversion button  
  **Then** the calculator displays an equivalent hexadecimal representation of that value.

### S2 — Identify the conversion control

**Priority:** P2  
**Actor:** Calculator user  
**Context:** The calculator is visible on screen.

- **Given** the calculator is visible  
  **When** the user looks for the hex-conversion control  
  **Then** a visible yellow button for hex conversion is present.

## Failure and empty states

- **Empty:** No separate empty-state behavior is specified. The conversion requirement applies when a numeric value is displayed.
- **Failure:** No conversion-failure behavior or error wording is specified.
- **Partial:** No partial-conversion behavior is specified.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `ANU-HEX:REQ-001` | S1 | success |
| `ANU-HEX:REQ-002` | S2 | success |
| `ANU-HEX:AC-001` | S1 | success |
| `ANU-HEX:AC-001` | S2 | success |

## Permissions

No special permission or authorization requirement is specified; the calculator user may activate the button.

## Boundary conditions

The requirement concerns the currently displayed numeric value. No numeric range, precision, prefix, letter-case, or behavior for non-numeric/error displays is specified.

## Requirements

- When activated while a numeric value is displayed, the hex-conversion button converts that displayed value to an equivalent hexadecimal representation. *(S1)* [ANU-HEX:REQ-001]
- The calculator presents the hex-conversion control as a visible yellow button. *(S2)* [ANU-HEX:REQ-002]

Acceptance criteria:

- On screen, the user can identify the yellow hex-conversion button and activate it to display an equivalent hexadecimal representation of the current numeric value. *(S1, S2)* [ANU-HEX:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `ANU-HEX:REQ-001` | test | - |
| `ANU-HEX:REQ-002` | visual | `ANU-HEX:AC-001` |
| `ANU-HEX:AC-001` | test, visual | `ANU-HEX:AC-001` |

## Non-functional requirements

No non-functional requirements were specified in the pinned request or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The button converts the numeric value shown by the calculator when activated, rather than converting an unevaluated expression. This follows the user's clarification that the current displayed value is to be converted.

## Out of scope

The request does not define the hexadecimal prefix, letter case, numeric range or precision, handling of non-numeric/error displays, or which calculator modes contain the button. This specification does not set requirements for those details.

## Sources

Pinned Story source: `singularity/work-items/anu-hex/source.json` (SHA-256 `2aa5dd1f00b6d1f1d71f2afc9a5837e34836af77b2abed56f495e2cf88e64cb8`).

Human clarification for specification generation 1: the button converts the current displayed calculator value to hexadecimal; acceptance requires a visible, working button demonstrated on screen; the button should be yellow.

Repository brief and source: `src/App.jsx` shows the existing calculator's displayed result in its standard and scientific views. No supporting documents were offered.
