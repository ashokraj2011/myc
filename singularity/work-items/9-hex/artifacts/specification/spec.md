<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "9-hex",
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
      "sha256": "3309227b931c7e27a706afda958cab7dc57e3c335e5ec2d51b4c7a694546d891",
      "bytes": 5421
    },
    "generation": 1,
    "publishedAt": "2026-10-11T23:36:19.334Z"
  },
  "sourceCommit": "f26a1196966f071b0de016f75503e5d145677f30",
  "generationCommit": "f04be57225c2875d34d235c42ae80cebfed68312",
  "publicationCommit": "f04be57225c2875d34d235c42ae80cebfed68312",
  "configSha256": "083d8965c65e8abeeb52bc7c40dd470aa5cdc144f592aea74911d5544b9770be",
  "sourceSha256": "18a1fe1c5ac9e2588fb623096db313fed7c7ec8d008681bdf0731c30aebc0f91",
  "template": {
    "path": "singularity/work-items/9-hex/config/wfa/blobs/sha256/55b0d6c4c9aa5ba19739493825f6c993f03d63bed9e1a5e2bb7d5c099b8b91bb",
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
    "path": "singularity/work-items/9-hex/context/clarifications-specification-gen1.json",
    "sha256": "515aaaa314b6c80d8c88eb491007f324b9351b584c7c9564e71e9255736faaa7",
    "promptSha256": "1d3fe69d35948eb5109911b038ef38d05aab978a7f286ab0a909457d5b684007",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-10-11T23:35:29.995Z",
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
      "path": "singularity/work-items/9-hex/telemetry/specification-gen1.json",
      "sha256": "d752b451a27678470d81b87fca6e0dbf65b15f7577b17b3e9f6d10b3b576358f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 14578,
        "estimatedTokens": 3645,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 14578,
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
      "startedAt": "2026-10-11T23:36:19.334Z",
      "completedAt": "2026-10-11T23:36:19.334Z",
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

# Specification — 9-hex

## Agent brief

Provide a calculator user with a hex conversion operator. It converts unsigned decimal integer input
within JavaScript's safe-integer range to uppercase hexadecimal digits without a prefix. Only the
canonical unsigned decimal form is valid; unsupported syntax and values outside the range display
`ERR`. Hexadecimal arithmetic is not part of this request. A screenshot of the completed feature is
to be captured and attached as implementation evidence; no reference screenshot was supplied.

## Actors

The calculator user invokes the operator. No separate roles or permission distinctions are specified.

## User scenarios

### S1 — Convert a supported integer

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and contains a canonical unsigned decimal integer from 0 through 9007199254740991.

- **Given** the input is `0`
  **When** the user invokes the hex operator
  **Then** the displayed result is `0`.

- **Given** the input is `255`
  **When** the user invokes the hex operator
  **Then** the displayed result is `FF`.

- **Given** the input is `9007199254740991`
  **When** the user invokes the hex operator
  **Then** the displayed result is `1FFFFFFFFFFFFF`.

### S2 — Reject unsupported input

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator contains an empty value, non-canonical number text, or a value outside the supported range.

- **Given** the input is empty, negative, signed, fractional, contains whitespace or non-digit characters, or has a leading zero other than the value `0`
  **When** the user invokes the hex operator
  **Then** the displayed result is `ERR`.

- **Given** the input is an unsigned decimal integer greater than `9007199254740991`
  **When** the user invokes the hex operator
  **Then** the displayed result is `ERR`.

## Failure and empty states

- **Empty:** An empty input is not an integer and produces `ERR`.
- **Failure:** No external dependency is required by the specified conversion. Invalid syntax and out-of-range values produce `ERR`.
- **Partial:** Conversion is a single operation; no partial-success state is specified.

## Permissions

The Story identifies a calculator user but defines no additional authorization policy. Access control is unchanged.

## Boundary conditions

- Valid input is the canonical unsigned base-10 form `0` or a nonzero digit followed by zero or more digits.
- The accepted numeric range is inclusive: `0` through `9007199254740991` (`Number.MAX_SAFE_INTEGER`).
- A value above that maximum, any negative value, a leading sign, a fraction, whitespace, or other non-canonical text produces `ERR`.
- Valid results use uppercase hexadecimal digits with no `0x` prefix or padding; zero displays as `0`.

## Requirements

- The hex operator shall convert a valid input in S1 from base 10 to base 16 and display uppercase digits without a prefix. *(S1)* [9-hex:REQ-001]
- The operator shall accept only canonical unsigned decimal integer text in the inclusive range 0 through 9007199254740991. *(S1, S2)* [9-hex:REQ-002]
- The operator shall display the literal `ERR` when the input is empty, syntactically invalid, or outside the accepted range. *(S2)* [9-hex:REQ-003]
- Implementation verification shall capture and attach a screenshot of the completed feature as evidence; the screenshot is not a visual reference to match. *(S1, S2)* [9-hex:REQ-004]

## Acceptance criteria

- Applying the operator to `0`, `255`, and `9007199254740991` displays `0`, `FF`, and `1FFFFFFFFFFFFF`, respectively. *(S1)* [9-hex:AC-001]
- Applying the operator to empty input, `-1`, `+1`, `1.5`, whitespace-containing text, alphabetic text, or a leading-zero value such as `01` displays exactly `ERR`. *(S2)* [9-hex:AC-002]
- Applying the operator to `9007199254740992` displays exactly `ERR`. *(S2)* [9-hex:AC-003]
- A screenshot of the completed feature is attached as implementation evidence; no visual comparison against a target screenshot is required. *(S1, S2)* [9-hex:AC-004]

## Non-functional requirements

No latency, throughput, accessibility, privacy, or retention targets were supplied for this Story.

## Constitution articles

No binding constitution article IDs were supplied in the governed inputs; none are asserted here.

## Assumptions

- The operator receives the current calculator value as text and displays its result in the calculator's existing output area.
- The safe-integer maximum is the accepted upper limit, as explicitly confirmed during clarification.

## Out of scope

- Hexadecimal arithmetic or hexadecimal input.
- Changes to unrelated calculator operations or access-control behavior.
- Matching an unprovided reference screenshot; the requested screenshot is completion evidence only.

## Sources

- `singularity/work-items/9-hex/source.json` — pinned Story request; SHA-256 `18a1fe1c5ac9e2588fb623096db313fed7c7ec8d008681bdf0731c30aebc0f91`.
- `singularity/work-items/9-hex/context/clarifications-specification-gen1.json` — five human clarification responses; SHA-256 `515aaaa314b6c80d8c88eb491007f324b9351b584c7c9564e71e9255736faaa7`.
- Generation 1 composed context — `singularity/work-items/9-hex/context/specification-gen1.json`; prompt SHA-256 `8af7cfcee738f2464fa4b98370c6f72e064a344b15c03f5afa80dcb2363f6a46`.
- No supporting documents or approved upstream briefs were configured for this phase.
