<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-ashok",
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
      "sha256": "9b9e61259263cc9b1dd7dd3ab826e1a8ea88d82d5154656a3648517676d5f291",
      "bytes": 9368
    },
    "generation": 1,
    "publishedAt": "2026-11-16T00:54:53.997Z"
  },
  "sourceCommit": "804d52c0eda26f0a232b918aada7daf76e317f4a",
  "generationCommit": "dd318d8db5833f12f17d638906b18f74c78662d1",
  "publicationCommit": "dd318d8db5833f12f17d638906b18f74c78662d1",
  "configSha256": "68f507ba55c1ea3dcdbe2248e78a71bf606ed208c168257d02cefff1b453f597",
  "sourceSha256": "93d767683e80e8d3f9086b46e8fdb789f76f6354396862000ecb2e3bd095b1c1",
  "template": {
    "path": "singularity/work-items/bin-ashok/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
    "sha256": "c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
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
    "path": "singularity/work-items/bin-ashok/context/clarifications-specification-gen1.json",
    "sha256": "f83318e0e51a0d9205e67c701caa42a18e8a17b7d70d85c55dabaabf710bc554",
    "promptSha256": "a9ca7d118315b7baedb1679ba54f69fc9c23b8c9fda0089f555577b15855020b",
    "responses": 2,
    "markers": [],
    "recordedAt": "2026-11-16T00:53:48.243Z",
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
      "path": "singularity/work-items/bin-ashok/telemetry/specification-gen1.json",
      "sha256": "41fce50c5eb250e0f59eaecc006957f9aa183d1e401a5e402fd52fe3a2045406",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29814,
        "estimatedTokens": 7454,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29814,
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
      "startedAt": "2026-11-16T00:54:53.997Z",
      "completedAt": "2026-11-16T00:54:53.997Z",
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

# Specification — bin-ashok

## Agent brief

Add a binary conversion button to the calculator. It converts the current displayed positive whole number to base 2 and displays the result. For inputs outside that domain (zero, negative, fractional, empty, or non-numeric), the calculator says “not supported.” The required visual acceptance is an app screenshot showing 2 converted to 10. This specification covers the calculator UI only; it defines no roles, external services, numeric maximum, or additional conversion modes.

## Actors

The calculator user may enter a value and activate the binary conversion button. The source specifies no privileged roles or separate authority levels.

## User scenarios

### S1 — Convert a positive whole number to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a positive whole number.

- **Given** the calculator displays `2`
  **When** the user activates the binary conversion button
  **Then** the calculator displays `10`, the base-2 representation of `2`.

### S2 — Handle a value the converter does not support

**Priority:** P2
**Actor:** Calculator user
**Context:** The calculator input is zero, negative, fractional, empty, or non-numeric.

- **Given** the input is outside the positive whole-number domain
  **When** the user activates the binary conversion button
  **Then** the calculator says “not supported.”

## Failure and empty states

- **Empty:** An empty input is unsupported; the calculator says “not supported” when conversion is requested.
- **Failure:** No external dependency or separate failure behavior is specified for this local conversion.
- **Partial:** Not applicable: conversion has a single displayed result and no partial operation is specified.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `BIN-ASHOK:REQ-001` | S1 | success |
| `BIN-ASHOK:REQ-002` | S2 | failure |
| `BIN-ASHOK:AC-001` | S1 | success |

## Permissions

Not applicable: the source defines no role-based permissions; any user who can use the calculator may invoke the conversion button.

## Boundary conditions

The supported input domain is positive whole numbers. Zero, negative, fractional, empty, and non-numeric inputs are unsupported and produce “not supported.” The source specifies no numeric maximum or additional limit.

## Requirements

- The binary conversion button uses the calculator's current displayed positive whole number and displays its base-2 representation. *(S1; pinned Story source description; confirmed clarification)* [BIN-ASHOK:REQ-001]
- When the input is zero, negative, fractional, empty, or non-numeric, activating the binary conversion button produces the message “not supported.” *(S2; confirmed clarification)* [BIN-ASHOK:REQ-002]

- An app screenshot visibly shows the calculator converting `2` to `10`. *(S1; pinned Story source acceptance criterion)* [BIN-ASHOK:AC-001] [scope:SRI-a7587fb3c9bc]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `BIN-ASHOK:REQ-001` | test | - |
| `BIN-ASHOK:REQ-002` | test | - |
| `BIN-ASHOK:AC-001` | visual | `BIN-ASHOK:AC-001` |

## Non-functional requirements

None for this change; the pinned source specifies no non-functional requirement.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The user confirmed that the current displayed positive whole number is the conversion input and that the result appears in the calculator. “Non-decimal” is interpreted as a whole number, as confirmed by the user.

## Out of scope

The pinned source does not request conversion modes other than decimal-to-binary, API/CLI/batch interfaces, persistence, or a numeric maximum.

## Sources

No supporting documents were offered. The pinned Story source and its recorded specification clarification are the governing inputs.
