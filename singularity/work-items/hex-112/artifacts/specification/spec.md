<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-112",
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
      "sha256": "aa379aa2437477ec1c1606f14d737c4e1fdfa5b5ce6e2e59460e2cfc766b73b0",
      "bytes": 4331
    },
    "generation": 1,
    "publishedAt": "2026-10-18T13:37:29.941Z"
  },
  "sourceCommit": "8c58717ecb8dc4eb4a8511c986fd50715cb89726",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "cefab2b320917902d3a5d87f8fb41c6ca3fa661958e79fec9ecf93e28f239314",
  "sourceSha256": "c5b3586760198b6cb694980540f9beb0b9b2813a559eb8e43207f9b5f79fa9ed",
  "template": {
    "path": "singularity/work-items/hex-112/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
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
    "path": "singularity/work-items/hex-112/context/clarifications-specification-gen1.json",
    "sha256": "dc9426324ac538c09bdc2ebe516b633199e1996c3dee03b294868f965c254e8d",
    "promptSha256": "7165f1c2489b9dea8c7b5d61f70bf140e7614f742e6a54081e122ee37d19bb4d",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-10-18T13:24:43.687Z",
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
      "path": "singularity/work-items/hex-112/telemetry/specification-gen1.json",
      "sha256": "289f49594b8b0163b1813d0852f8ce08ed8603dcd9ae23c289bcb2f42e0c2892",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 19696,
        "estimatedTokens": 4924,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 19696,
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
      "startedAt": "2026-10-18T13:37:29.941Z",
      "completedAt": "2026-10-18T13:37:29.941Z",
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

# Specification - hex-112

## Agent brief

Add a converter to the existing calculator UI that converts decimal values to hexadecimal and
hexadecimal values to decimal. The user confirmed both directions. Acceptance requires a screenshot
of the converter in the calculator and automated test cases covering both directions. No specific
layout, numeric range, precision, or invalid-input behavior is established by the pinned request.

## Actors

- **Calculator user:** enters a value, selects the corresponding conversion direction, and reads the
  converted value.

## User scenarios

### S1 - Convert a decimal value to hexadecimal

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The existing calculator is open and the converter is available.

- **Given** the converter is available in the calculator
  **When** the user provides a decimal value and requests hexadecimal conversion
  **Then** the calculator displays the corresponding hexadecimal value.

### S2 - Convert a hexadecimal value to decimal

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The existing calculator is open and the converter is available.

- **Given** the converter is available in the calculator
  **When** the user provides a hexadecimal value and requests decimal conversion
  **Then** the calculator displays the corresponding decimal value.

## Failure and empty states

- **Empty:** No saved conversion data or record workflow is specified; a saved-record empty state
  does not apply.
- **Failure:** The pinned request defines no dependency or conversion-error behavior.
- **Partial:** No multi-step or partial-completion workflow is specified.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `HEX-112:REQ-001` | S1 | success |
| `HEX-112:REQ-002` | S2 | success |
| `HEX-112:REQ-003` | S1 | success |
| `HEX-112:REQ-003` | S2 | success |
| `HEX-112:AC-001` | S1 | success |
| `HEX-112:AC-001` | S2 | success |

## Permissions

The Story defines no new roles or permission changes. The calculator user interacts with the
converter through the existing calculator UI.

## Boundary conditions

The Story and clarification do not specify numeric ranges, precision, input syntax, or formatting
conventions. This specification does not add limits or prescribe those details.

## Requirements

- The converter accepts a decimal value and displays its corresponding hexadecimal value. *(S1)*
  [HEX-112:REQ-001]
- The converter accepts a hexadecimal value and displays its corresponding decimal value. *(S2)*
  [HEX-112:REQ-002]
- Provide a screenshot showing the converter in the existing calculator UI and automated test cases
  exercising both conversion directions. *(S1, S2)* [HEX-112:REQ-003] [scope:SRI-2882cd00cb19]

Acceptance criteria:

- The existing calculator UI exposes the converter, and a screenshot demonstrates it; automated
  test cases demonstrate both decimal-to-hexadecimal and hexadecimal-to-decimal conversion.
  *(S1, S2)* [HEX-112:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `HEX-112:REQ-001` | test | - |
| `HEX-112:REQ-002` | test | - |
| `HEX-112:REQ-003` | test, visual | `HEX-112:AC-001` |
| `HEX-112:AC-001` | test, visual | `HEX-112:AC-001` |

## Non-functional requirements

No non-functional targets are specified by the pinned request or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

- "Hexdecimal converter" means hexadecimal conversion, with both conversion directions as confirmed
  in the specification clarification for generation 1.
- The feature is available to users of the existing calculator; no separate authorization model
  was requested.

## Out of scope

- Changes to calculator behavior unrelated to the converter.
- Conversion to or from bases other than decimal and hexadecimal.

## Sources

- Pinned Story source: `singularity/work-items/hex-112/source.json`
  (SHA-256: `c5b3586760198b6cb694980540f9beb0b9b2813a559eb8e43207f9b5f79fa9ed`).
- Human clarification: `singularity/work-items/hex-112/context/clarifications-specification-gen1.json`
  (SHA-256: `dc9426324ac538c09bdc2ebe516b633199e1996c3dee03b294868f965c254e8d`); confirms both
  conversion directions and screenshot plus automated test-case acceptance.
- No supporting documents were supplied.
