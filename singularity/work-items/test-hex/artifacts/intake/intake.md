<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "test-hex",
  "workType": "feature",
  "phase": "intake",
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
      "filename": "intake.md",
      "mediaType": "text/markdown",
      "sha256": "6d14653ae524e2d58838caac136a708a0a572ef9f6fc0d2ca959f9e2bafceb91",
      "bytes": 1525
    },
    "generation": 1,
    "publishedAt": "2026-10-14T14:03:37.669Z"
  },
  "sourceCommit": "399eb53202691cc6c6a2a3cbff13299cf548ccb3",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "a5130dee2a256acf6a8617248ce1f213e6d3939ccbc7db2f0f8780a5ffe48049",
  "sourceSha256": "10bb604e850ced6507998d5cf2a7509731ca2bd9ae7896587164bbe0495685e2",
  "template": {
    "path": "singularity/work-items/test-hex/config/wfa/blobs/sha256/eb53814f46f12ea3d93d1629164bd7ff22a3a54feceff7f7dd55670caeb5dbab",
    "sha256": "eb53814f46f12ea3d93d1629164bd7ff22a3a54feceff7f7dd55670caeb5dbab",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/feature/intake.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/test-hex/context/clarifications-intake-gen1.json",
    "sha256": "93f8fff3fe73925ac05b12fc87bcc656c1513c928e0c6150d8231e3d440980a8",
    "promptSha256": "2d6cd8ec443ec42f658714747d0d4afd12b9922a50c80df5521ed61d7580e033",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-10-14T14:02:57.999Z",
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
      "path": "singularity/work-items/test-hex/telemetry/intake-gen1.json",
      "sha256": "aa15eb3eca13be7463019bb71491ddeb47aab6b935522634e1172aa90df49a6a",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 12228,
        "estimatedTokens": 3057,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 12228,
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
      "startedAt": "2026-10-14T14:03:37.669Z",
      "completedAt": "2026-10-14T14:03:37.669Z",
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

# test-hex — Feature Intake

## User and outcome

Users of the existing calculator need to convert a positive integer to its hexadecimal value. The confirmed outcome is a displayed uppercase hexadecimal value prefixed with `Ox` (capital letter O, as clarified by the requester). The specific user segment and broader problem were not provided; this intake limits the need to the stated conversion capability rather than assuming a persona or additional use case.

## Proposed capability

REQ-001: Add positive-integer-to-hexadecimal conversion to the existing calculator.

AC-001: For a positive integer input, display its base-16 value using uppercase hexadecimal digits and the prefix `Ox`. For example, `10` displays as `OxA`, and `16` displays as `Ox10`.

AC-002: For any input that is not a positive integer, display `invalid input`. This includes zero, negative values, fractional values, and nonnumeric input.

## Scope, constraints, and stakeholders

The confirmed product boundary is the existing calculator application. This intake requests conversion and invalid-input feedback only; it does not request additional calculator operations or a separate application. The requester confirmed the `Ox` prefix and uppercase digits. The accepted input representation, behavior for formatting such as surrounding whitespace or leading zeroes, and any broader stakeholder or urgency constraints were not specified and should not be inferred. Existing calculator behavior should remain unaffected outside this capability.
