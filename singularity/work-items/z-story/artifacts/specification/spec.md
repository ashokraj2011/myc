<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "z-story",
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
      "sha256": "c129f4b429f3b8ad175c10c39f77e7028d409e281411495cb4fb0d4cdf87c792",
      "bytes": 9575
    },
    "generation": 1,
    "publishedAt": "2026-11-12T07:03:15.429Z"
  },
  "sourceCommit": "cc98af5f6e7993599512aff263ec117f1829d2c4",
  "generationCommit": "7ecbcdc258fb96c29afdfe7fe944a484e52a7f00",
  "publicationCommit": "7ecbcdc258fb96c29afdfe7fe944a484e52a7f00",
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "ef3551981c20d53ded0b058692db59edc148ee25e140da93e6b9765e9e5975f0",
  "template": {
    "path": "singularity/work-items/z-story/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
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
    "path": "singularity/work-items/z-story/context/clarifications-specification-gen1.json",
    "sha256": "bf039495ea41dd57f892a3714541bd321a5825436f4c41276e7c9f0987727247",
    "promptSha256": "7352128a7011f0384d257736afb14c832d58295d9c1ba16767cbbf04bb108170",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-11-12T07:01:51.932Z",
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
      "path": "singularity/work-items/z-story/telemetry/specification-gen1.json",
      "sha256": "2fb7602d6d1407c95b04d9e363f0bcf870f9be7cbaf5490c2ecb64e633e821f8",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29919,
        "estimatedTokens": 7480,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29919,
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
      "startedAt": "2026-11-12T07:03:15.429Z",
      "completedAt": "2026-11-12T07:03:15.429Z",
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

# Specification — z-story

## Agent brief

Add a dedicated conversion operation to the existing calculator so a calculator user can convert a positive whole-number decimal value to its binary representation. Non-positive, fractional, or empty input produces an error indication. Unit tests cover successful conversion and rejected input. No input limit or exact error wording was specified.

## Actors

The calculator user may enter a value and invoke the conversion operation; no privileged role is required.

## User scenarios

### S1 — Convert a positive whole-number decimal value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** The existing calculator is available and the user has a positive whole-number decimal value to convert.

- **Given** a positive whole-number decimal value
  **When** the user invokes the dedicated conversion operation
  **Then** the calculator provides that value's binary representation.

### S2 — Reject values outside the supported input

**Priority:** P1
**Actor:** Calculator user

- **Given** an empty, zero, negative, or fractional value
  **When** the user invokes the dedicated conversion operation
  **Then** the calculator indicates an error rather than providing a conversion result.

## Failure and empty states

- **Empty:** An empty input is rejected with an error indication; no conversion result is provided.
- **Failure:** Zero, negative, and fractional inputs are rejected with an error indication; no conversion result is provided. Exact error wording is unspecified.
- **Partial:** Not applicable; the requested conversion is a single operation.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `Z-STORY:REQ-001` | S1 | success |
| `Z-STORY:REQ-002` | S2 | failure |
| `Z-STORY:AC-001` | S1 | success |
| `Z-STORY:AC-002` | S2 | failure |
| `Z-STORY:AC-003` | S1 | success |

## Permissions

Not applicable: the requested calculator operation has no privileged role or access restriction.

## Boundary conditions

Only positive whole-number values are supported. Zero, negative, fractional, and empty values produce an error indication. No maximum value or exact error wording is specified; conversion is limited by the existing calculator's accepted numeric input.

## Requirements

- The existing calculator provides a dedicated operation that converts a positive whole-number decimal input to its binary representation. *(S1)* [Z-STORY:REQ-001]
- The conversion operation indicates an error and provides no conversion result for empty, zero, negative, or fractional input. *(S2)* [Z-STORY:REQ-002]

- A calculator user can invoke the conversion operation and receive the binary representation of a positive whole-number decimal input. *(S1)* [Z-STORY:AC-001]
- Empty, zero, negative, and fractional inputs produce an error indication rather than a conversion result. *(S2)* [Z-STORY:AC-002]
- Unit test cases cover successful positive whole-number conversion and rejection of empty, zero, negative, and fractional inputs. *(S1, S2)* [Z-STORY:AC-003] [scope:SRI-bf17ce947d7f]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `Z-STORY:REQ-001` | test | `Z-STORY:AC-001` |
| `Z-STORY:REQ-002` | test | `Z-STORY:AC-002` |
| `Z-STORY:AC-001` | test | `Z-STORY:AC-001` |
| `Z-STORY:AC-002` | test | `Z-STORY:AC-002` |
| `Z-STORY:AC-003` | test | `Z-STORY:AC-003` |

## Non-functional requirements

None specified for this change.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The existing calculator can accept numeric input and provide an operation for the requested conversion.

## Out of scope

Conversions other than positive whole-number decimal-to-binary conversion, and changes to unrelated calculator operations.

## Sources

Pinned Story source: `singularity/work-items/z-story/source.json`.
Clarification responses for specification generation 1 settle supported values (positive whole numbers), the default dedicated conversion operation, error handling, and user-visible calculator behavior alongside unit-test coverage.
