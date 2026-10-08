<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "c-hex",
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
      "sha256": "ff566142c67815eb9b484af5bde88d18215cca7ee362e18d00fd147291ad4e79",
      "bytes": 5737
    },
    "generation": 1,
    "publishedAt": "2026-10-08T12:49:14.879Z"
  },
  "sourceCommit": "3c32f115b12770b2acd84c20f384ca659bf88b5d",
  "generationCommit": "cc0ef10b5374098155a70967ee8e438916dd1fc4",
  "publicationCommit": "cc0ef10b5374098155a70967ee8e438916dd1fc4",
  "configSha256": "8603b630ebce6c8a7cabcc23f668f657bb84d84d9326d1545f5db42557025e04",
  "sourceSha256": "972d97c67c21b23e94b63363d0c2a32bc66c5ac36061896b5654950b78ccfee8",
  "template": {
    "path": "singularity/work-items/c-hex/config/wfa/blobs/sha256/55b0d6c4c9aa5ba19739493825f6c993f03d63bed9e1a5e2bb7d5c099b8b91bb",
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
    "path": "singularity/work-items/c-hex/context/clarifications-specification-gen1.json",
    "sha256": "f37ec6277513673209e22d1913f5e735d2c16494966f586db7eeb4a173c61647",
    "promptSha256": "f0800922a670e99b240c4a9e86a0d04244ac04db8dd635ec11ea6d331a67d382",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-10-08T12:48:04.236Z",
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
      "path": "singularity/work-items/c-hex/telemetry/specification-gen1.json",
      "sha256": "f2ed1ec601b9f73ed2e1149414121580f466dcc23dab5f92b06cc8fdb82dc556",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 10707,
        "estimatedTokens": 2677,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 10707,
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
      "startedAt": "2026-10-08T12:49:14.878Z",
      "completedAt": "2026-10-08T12:49:14.878Z",
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

# Specification — c-hex

## Agent brief

Add a browser-based page to the existing application where a user can enter a positive base-10
whole number and receive its uppercase hexadecimal representation without a `0x` prefix. Any input
outside that supported domain must display exactly `Not Supported`. Validation must include
screenshot evidence of the implemented page. Authentication changes, additional conversion bases,
and non-browser clients are excluded.

## Actors

- **User:** Uses the existing browser application to submit a value and view either its hexadecimal
  representation or the unsupported-input message. No new privileged operation or role is required.

## User scenarios

### S1 — Convert a supported positive whole number

**Priority:** P1
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the user enters `255`
  **When** the user requests conversion
  **Then** the page displays `FF`.

- **Given** the user enters any positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays the equivalent uppercase hexadecimal value without a `0x` prefix.

### S2 — Reject an unsupported input

**Priority:** P2
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the entered value is not a positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays exactly `Not Supported`.

## Failure and empty states

- **Empty:** An empty submitted value is unsupported and displays exactly `Not Supported`.
- **Failure:** Non-numeric text, zero, negative numbers, decimal values, and every other value
  outside the supported domain display exactly `Not Supported`.
- **Partial:** Conversion is a single observable operation; no partial-success state is defined.

## Permissions

- Any user who can access the existing browser application may use the conversion page.
- This feature introduces no new authentication, authorization, or role-management behavior.

## Boundary conditions

- The supported domain is a base-10 whole number strictly greater than zero.
- `1` is the lowest supported input and produces `1`.
- `0`, negative numbers, decimal values, empty input, and non-numeric input are unsupported.
- A valid result uses uppercase hexadecimal digits `0` through `9` and `A` through `F`.
- A valid result never includes a `0x` prefix.
- No maximum supported positive whole number was established by the governed inputs; an
  implementation must not introduce an undocumented upper boundary.

## Requirements

- The existing application shall provide a browser-based page where a user can enter a value and
  request hexadecimal conversion. *(S1, S2; DOC-002 Q-004)* [c-hex:REQ-001]
- For a positive base-10 whole number greater than zero, the page shall display its mathematically
  equivalent hexadecimal value. *(S1; DOC-002 Q-001, Q-002)* [c-hex:REQ-002]
- A supported result shall use uppercase hexadecimal characters and shall omit the `0x` prefix.
  *(S1; DOC-002 Q-003)* [c-hex:REQ-003]
- For every input outside the supported domain, the page shall display exactly `Not Supported`.
  *(S2; DOC-002 Q-001, Q-002)* [c-hex:REQ-004]
- Verification shall retain screenshot evidence showing the implemented browser page and its
  observable behavior. *(S1, S2; DOC-001, DOC-002 Q-005)* [c-hex:REQ-005]

- Entering `255` and requesting conversion displays exactly `FF`. *(S1)* [c-hex:AC-001]
- Entering `1` and requesting conversion displays exactly `1`. *(S1)* [c-hex:AC-002]
- Every supported result is uppercase and has no `0x` prefix. *(S1)* [c-hex:AC-003]
- Submitting each representative unsupported class—empty, `0`, a negative number, a decimal value,
  and non-numeric text—displays exactly `Not Supported`. *(S2)* [c-hex:AC-004]
- Screenshot evidence captures the browser page with at least one supported result and the
  `Not Supported` outcome. *(S1, S2)* [c-hex:AC-005]

## Non-functional requirements

- No latency, throughput, availability, accessibility, privacy, or retention target was supplied
  by the governed inputs. This specification does not invent numeric service levels.

## Constitution articles

- No constitution article binding was supplied to this phase.

## Assumptions

- The existing application already defines how users reach browser pages and does not require this
  feature to introduce a new access-control model.
- Conversion is stateless and does not require persisted conversion history.
- If either assumption is false, the resulting work is a scope change rather than an implementation
  defect against this specification.

## Out of scope

- Converting hexadecimal values back to decimal.
- Supporting zero, negative numbers, decimal fractions, or non-base-10 input.
- Lowercase hexadecimal output or output with a `0x` prefix.
- Native desktop, mobile, or command-line interfaces.
- New authentication, authorization, persistence, or conversion-history features.

## Sources

- **DOC-001 — Pinned Story source:** `singularity/work-items/c-hex/source.json`, SHA-256
  `972d97c67c21b23e94b63363d0c2a32bc66c5ac36061896b5654950b78ccfee8`.
- **DOC-002 — Generation 1 human clarification record:**
  `singularity/work-items/c-hex/context/clarifications-specification-gen1.json`, SHA-256
  `f37ec6277513673209e22d1913f5e735d2c16494966f586db7eeb4a173c61647`.
- No additional supporting documents or approved upstream artifacts were offered to this phase.
- Repository world-model evidence was unavailable because the published model came from an
  incompatible earlier build; it was not treated as authoritative input.
