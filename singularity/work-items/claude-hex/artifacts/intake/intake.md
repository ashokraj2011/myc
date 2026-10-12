<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "claude-hex",
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
      "sha256": "9f09b10292bc59839a2e70a60ffe4aa5cf3e755fc02127a69a3c441a71bf0795",
      "bytes": 2610
    },
    "generation": 1,
    "publishedAt": "2026-10-12T06:53:14.941Z"
  },
  "sourceCommit": "7a1068cc038027b1387fbc90674864a302804568",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "a8b6f4a122f2ad38555f4fc4c268f606c36fdd0a845a848fee4e9f05663fe8ac",
  "sourceSha256": "24d852e2ad503766b2cbb2eed164103582129d7631e62d9f98e4ffdb221382bd",
  "template": {
    "path": "singularity/work-items/claude-hex/config/wfa/blobs/sha256/eb53814f46f12ea3d93d1629164bd7ff22a3a54feceff7f7dd55670caeb5dbab",
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
    "path": "singularity/work-items/claude-hex/context/clarifications-intake-gen1.json",
    "sha256": "d4f814651ac9cbe33c42b78192f16a8bdfaa2affbb0ccdc1d6fa7342344f5327",
    "promptSha256": "35be99702bdd8f62fbae52f53275b413e1ba6b95b462e538609170051ff6f4d6",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-10-12T06:50:35.991Z",
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
      "path": "singularity/work-items/claude-hex/telemetry/intake-gen1.json",
      "sha256": "3a83e8ba315e6966e3163a146467f4cb95dcfedb7d06951740709ff6201162dc",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 12276,
        "estimatedTokens": 3069,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 12276,
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
      "startedAt": "2026-10-12T06:53:14.941Z",
      "completedAt": "2026-10-12T06:53:14.941Z",
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

# claude-hex — Feature Intake

## User and outcome

The pinned request names no user role or input surface. Working proposal: a person enters an integer into the application; confirm the specific user and interaction surface during specification.

The requested outcome is to convert a positive integer to its hexadecimal value and return an error for every other input. This behavior was confirmed in the intake clarification response. Success is measurable: a positive integer produces a hexadecimal representation of the same value, while any input that is not a positive integer produces an error. The requested screenshot evidence should demonstrate the conversion and error behavior.

Sources: `singularity/work-items/claude-hex/source.json#/description`; `singularity/work-items/claude-hex/source.json#/acceptanceCriteria`; `singularity/work-items/claude-hex/context/clarifications-intake-gen1.json#/responses/0/answer`.

## Proposed capability

**REQ-001 — Positive integer conversion:** Convert a supplied positive integer to its hexadecimal value. Source: `singularity/work-items/claude-hex/context/clarifications-intake-gen1.json#/responses/0/answer`.

**REQ-002 — Invalid-input error:** For any input that is not a positive integer, report an error rather than a hexadecimal value. Source: `singularity/work-items/claude-hex/context/clarifications-intake-gen1.json#/responses/0/answer`.

**AC-001:** For a positive integer, the resulting hexadecimal representation denotes the same numeric value as the input.

**AC-002:** For every input that is not a positive integer, the operation reports an error and does not return a successful hexadecimal result.

**AC-003:** Provide screenshot evidence of the requested behavior. The specific screenshot presentation is not defined by the pinned Story.

## Scope, constraints, and stakeholders

In scope: positive-integer-to-hexadecimal conversion and an error outcome for all other inputs. The pinned Story requires screenshot evidence (`source.json#/acceptanceCriteria`); the clarification supplies the behavior to demonstrate. No implementation approach is prescribed.

Not specified: the input surface, hexadecimal letter casing or prefix, exact error text/presentation, urgency, and named stakeholder roles. Treat these as unresolved design/specification details, not additional requirements. Proposed user role (not confirmed): a person using the application. No external dependency is identified by the pinned request. Preserve the defined input validity boundary; do not silently coerce non-integers or treat them as successful conversions.
