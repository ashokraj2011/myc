<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "egl-story",
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
      "sha256": "05a3d91c6f389217daa11fb7b8a7dc27b74e6870bf2ce90f0832c6bcdab0fd49",
      "bytes": 3206
    },
    "generation": 1,
    "publishedAt": "2026-10-12T02:24:58.712Z"
  },
  "sourceCommit": "86e6522e9f45b1388dbcd83b2b7df54657e2c421",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "083d8965c65e8abeeb52bc7c40dd470aa5cdc144f592aea74911d5544b9770be",
  "sourceSha256": "346451d0e7141c5ebe3e4ed4b92bf029f65ffe35e6166e281fd407d921e56362",
  "template": {
    "path": "singularity/work-items/egl-story/config/wfa/blobs/sha256/b370347adeca20bb560827843acb2330e90e9fa875e760611ef752ee38765cab",
    "sha256": "b370347adeca20bb560827843acb2330e90e9fa875e760611ef752ee38765cab",
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
    "path": "singularity/work-items/egl-story/context/clarifications-specification-gen1.json",
    "sha256": "4b9eb0ae7b7d7370f8f0b5fbcb7b2b96c768b6abd3c60e9074e69555d0279f37",
    "promptSha256": "1fbcf24b6e388f44d536e5553bffc24f4be5d57a00442ded8d05147a44a92ecd",
    "responses": 2,
    "markers": [],
    "recordedAt": "2026-10-12T02:23:08.734Z",
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
      "path": "singularity/work-items/egl-story/telemetry/specification-gen1.json",
      "sha256": "bcd63612710c8aa7174bf847143ecfed11d4636c804f81528c9b3f61b14b6e92",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 16667,
        "estimatedTokens": 4167,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 16667,
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
      "startedAt": "2026-10-12T02:24:58.712Z",
      "completedAt": "2026-10-12T02:24:58.712Z",
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

# Specification — egl-story

## Agent brief

Provide a hex conversion operation for positive integer input. The user activates the hex button to
see the integer represented in uppercase hexadecimal without a `0x` prefix. Inputs that are not
positive integers produce an error. The acceptance screenshot shows the button and a successful
conversion. No permission model or non-functional thresholds were requested.

## Actors

The person using the screen that provides the hex button. No additional roles or authority levels
are specified.

## User scenarios

### S1 — Convert a positive integer

**Priority:** P1
**Actor:** Screen user
**Context:** A positive integer is available as the value to convert.

- **Given** the value is a positive integer
  **When** the user activates the hex button
  **Then** the corresponding hexadecimal value is shown in uppercase, without a `0x` prefix.

## Failure and empty states

- **Empty:** Empty input is not a positive integer; show an error and do not show a conversion result.
- **Failure:** Zero, negative, fractional, or otherwise non-integer input shows an error and does not
  produce a hexadecimal result.
- **Partial:** No partial result is defined for a single conversion.

## Permissions

No role-based permissions or authorization behavior are specified.

## Boundary conditions

Positive integers are valid inputs. Zero, negative values, fractions, empty input, and values that
cannot be interpreted as integers are invalid and produce an error. Hexadecimal output uses
uppercase A-F and has no `0x` prefix. The Story specifies no upper bound; conversion must preserve
the integer value exactly rather than silently rounding it.

## Requirements

- For a positive integer input, the hex operation shall show its exact hexadecimal value using
  uppercase letters and no `0x` prefix. *(S1)* [egl-story:REQ-001]
- For empty input or any value that is not a positive integer, the operation shall show an error
  instead of a hexadecimal result. *(S1)* [egl-story:REQ-002]
- A screenshot of the screen shall show the hex button and a successful conversion. *(S1)*
  [egl-story:AC-001]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `egl-story:REQ-001` | test | - |
| `egl-story:REQ-002` | test | - |
| `egl-story:AC-001` | visual | `egl-story:AC-001` |

## Non-functional requirements

No non-functional requirements were specified in the pinned Story or its clarification.

## Constitution articles

No constitution article IDs were supplied in the pinned phase inputs.

## Assumptions

The screen user can provide the integer value to the hex operation. Input entry mechanics and error
copy are not defined by the Story.

## Out of scope

Changes to other operations, role-based access, non-functional thresholds, and a particular error
message or styling are outside this Story.

## Sources

The pinned Story source `singularity/work-items/egl-story/source.json`
(SHA-256 `346451d0e7141c5ebe3e4ed4b92bf029f65ffe35e6166e281fd407d921e56362`) and the recorded
human clarification for specification generation 1 inform this specification. No supporting
documents or approved upstream artifacts were configured for this phase.
