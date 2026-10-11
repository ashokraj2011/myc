<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "1h-hex",
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
      "sha256": "6caf815dbee83f247e72ea2d06a720a93844eb2ee798bbcbd768751caf6e04b5",
      "bytes": 3488
    },
    "generation": 1,
    "publishedAt": "2026-10-11T17:11:26.926Z"
  },
  "sourceCommit": "e3f1a595b9287ea7a5a6e59761f217b4877f15bf",
  "generationCommit": "836af6a88e2644dfef63917297b585a047bd8ce6",
  "publicationCommit": "836af6a88e2644dfef63917297b585a047bd8ce6",
  "configSha256": "083d8965c65e8abeeb52bc7c40dd470aa5cdc144f592aea74911d5544b9770be",
  "sourceSha256": "f204490875e9d5bb38ee534560b2feb433f58c03bbfdccf5b5207e0be012f801",
  "template": {
    "path": "singularity/work-items/1h-hex/config/wfa/blobs/sha256/55b0d6c4c9aa5ba19739493825f6c993f03d63bed9e1a5e2bb7d5c099b8b91bb",
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
    "path": "singularity/work-items/1h-hex/context/clarifications-specification-gen1.json",
    "sha256": "77943b227c1dd81dc9392273894ed26ec3d3d7b2f4266da6a5cd0dae56cd8c16",
    "promptSha256": "cdaac11a92194d7fe06a543e06553a8217a710e1a36ec0c093e103235f92671f",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-10-11T17:10:17.730Z",
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
      "path": "singularity/work-items/1h-hex/telemetry/specification-gen1.json",
      "sha256": "7f8fff59a699b57a72910e5345ede9ccfd61b0a6b574054eecb7f4a12ab394cf",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 13031,
        "estimatedTokens": 3258,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 13031,
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
      "startedAt": "2026-10-11T17:11:26.926Z",
      "completedAt": "2026-10-11T17:11:26.926Z",
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

# Specification — 1h-hex

## Agent brief

Add a Hex action to the calculator that converts the current nonnegative whole-number value from
decimal to base 16 and replaces the value in the existing display. The confirmed example is 15
becoming F. Negative and fractional inputs, hexadecimal input parsing, and hexadecimal arithmetic
are outside this version's scope. Acceptance is functional; no screenshot reference was provided.

## Actors

- **Calculator user:** operates the existing calculator and activates the Hex action. No distinct
  roles or additional permission levels are specified.

## User scenarios

### S1 — Convert the current calculator value to hexadecimal

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The existing calculator display contains a nonnegative whole-number value in decimal.

- **Given** the display contains `15`
  **When** the user activates Hex
  **Then** the existing display is replaced with `F`.

## Failure and empty states

- **Empty or ineligible value:** Conversion is specified only for nonnegative whole numbers.
  Behavior for an empty display, a negative value, or a fractional value is not defined by the
  confirmed scope.
- **Failure or partial result:** The request specifies a direct display conversion and no
  dependency or multi-step operation. No additional failure or partial-result behavior is specified.

## Permissions

No role-based access or permission changes are specified. The action is for the calculator user
described in S1.

## Boundary conditions

- The confirmed input domain is nonnegative whole-number values.
- Negative and fractional values are excluded.
- No numeric maximum or additional formatting rule is specified. The confirmed example is `15`
  displayed as `F`.

## Requirements

- Activating Hex converts the current eligible decimal value to base-16 digits and replaces the
  value in the existing display. *(S1)* [1h-hex:REQ-001]
- The specified conversion scope is limited to nonnegative whole-number values; negative and
  fractional input behavior is outside this version's scope. *(S1)* [1h-hex:REQ-002]

## Acceptance criteria

- Given the current display contains `15`, when the user activates Hex, the existing display shows
  `F`. *(S1)* [1h-hex:AC-001]
- Acceptance is based on the functional display result; no screenshot-based visual reference is
  part of the confirmed criterion. *(S1)* [1h-hex:AC-002]

## Non-functional requirements

No non-functional requirement is specified in the pinned Story or clarification responses.

## Constitution articles

No constitution article IDs were included in the composed context.

## Assumptions

- “Hex operator” means converting the current calculator value from decimal to hexadecimal, as
  confirmed for this Story.
- The example `15` → `F` is the required observable display result. No further casing, prefix,
  spacing, or layout behavior is asserted.

## Out of scope

- Parsing hexadecimal input as a calculator value.
- Hexadecimal arithmetic.
- Conversion behavior for negative or fractional values.
- Screenshot-specific visual design or layout requirements.

## Sources

- Pinned Story source: `singularity/work-items/1h-hex/source.json`
  (`f204490875e9d5bb38ee534560b2feb433f58c03bbfdccf5b5207e0be012f801`).
- Human clarification responses for specification generation 1
  (`77943b227c1dd81dc9392273894ed26ec3d3d7b2f4266da6a5cd0dae56cd8c16`).
- No supporting documents were included in the composed context.
