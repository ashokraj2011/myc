<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "aswhin",
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
      "sha256": "007001e2cf7765f86af5eabf2d6aec3cb97f01c8d7a564bfa8b1b092e120de2c",
      "bytes": 8423
    },
    "generation": 1,
    "publishedAt": "2026-11-12T14:19:57.592Z"
  },
  "sourceCommit": "a224803bb00231071c892a4ca35933d89d9f47c2",
  "generationCommit": "0d18580c3221fd5cbb1c01b01d30064ba81733c3",
  "publicationCommit": "0d18580c3221fd5cbb1c01b01d30064ba81733c3",
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "b6ceecdd9e16bf133e88dcaae51aa7125649840d723aad02c9db6580bc48d919",
  "template": {
    "path": "singularity/work-items/aswhin/config/wfa/blobs/sha256/c3b2d1434d1d37fefc2ae168f849e9f801992433a7b81c7eb9f27b78c7f66d4e",
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
    "path": "singularity/work-items/aswhin/context/clarifications-specification-gen1.json",
    "sha256": "46ec73fd5c50e629b2838c7c5b9e3bb2e30cdba6812764d90da41f3add31fc28",
    "promptSha256": "e5c157a49632698fff0a19cb694508cc19c50de7bf9ee011b643ec23bd136d12",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-11-12T14:19:00.193Z",
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
      "path": "singularity/work-items/aswhin/telemetry/specification-gen1.json",
      "sha256": "deaa5411af58525296c16649bf8918bfb1855c765be17ebac4b2490a612ef290",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29574,
        "estimatedTokens": 7394,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29574,
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
      "startedAt": "2026-11-12T14:19:57.592Z",
      "completedAt": "2026-11-12T14:19:57.592Z",
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

# Specification — aswhin

## Agent brief

Implement conversion of positive decimal inputs to their binary representation in the calculator. The calculator user enters a positive decimal value and sees its binary value; for input 2, the display is 10. The requested screenshot is visual evidence of the displayed result. This specification does not define behavior for non-positive or non-decimal inputs.

## Actors

Calculator user: enters a value and views its binary representation. No privileged role or separate authorization is specified.

## User scenarios

### S1 — A calculator user converts a positive decimal value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available for input and display.

- **Given** the calculator user has a positive decimal value to convert
  **When** the user requests its binary representation
  **Then** the calculator displays that value in binary.

- **Given** the calculator user enters the positive decimal value 2
  **When** the user requests its binary representation
  **Then** the calculator displays 10 and a screenshot is captured showing that result. [scope:SRI-9b082baa4528]

## Failure and empty states

- **Empty:** Not applicable: this conversion does not depend on a collection of records.
- **Failure:** No failure behavior is specified by the pinned request or clarification.
- **Partial:** No partial-result behavior is specified by the pinned request or clarification.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `ASWHIN:REQ-001` | S1 | success |
| `ASWHIN:AC-001` | S1 | success |

## Permissions

Not applicable: the pinned request identifies no restricted actions or distinct permissions.

## Boundary conditions

The specified input domain is positive decimal values. Behavior for zero, negative values, and non-decimal input is unspecified and is not an acceptance requirement.

## Requirements

- The calculator shall display the binary representation of a positive decimal input when the user requests conversion. *(S1)* [ASWHIN:REQ-001]

- For input 2, the calculator displays 10 and a screenshot showing the displayed result is captured. *(S1)* [ASWHIN:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `ASWHIN:REQ-001` | test | - |
| `ASWHIN:AC-001` | test, visual | `ASWHIN:AC-001` |

## Non-functional requirements

None for this change; no non-functional requirement is stated in the pinned request or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions

The user-confirmed interpretation is that “positive non decimal” means positive decimal inputs converted to binary, and that input 2 displays 10.

## Out of scope

Handling of zero, negative, or non-decimal inputs; other base conversions; and behavior beyond the confirmed positive-decimal-to-binary conversion.

## Sources

No supporting documents were provided.
