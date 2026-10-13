<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "check-out-test",
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
      "sha256": "f75582ef939fd5056d63587c9f41b465a94ae53243dccb6e698de2604d21f591",
      "bytes": 9951
    },
    "generation": 1,
    "publishedAt": "2026-10-13T01:12:01.383Z"
  },
  "sourceCommit": "713a63f9fd5d5863880fa1dee0f74478ae649275",
  "generationCommit": "d1281e771af4a2521a07d84632f349236fe62ee4",
  "publicationCommit": "d1281e771af4a2521a07d84632f349236fe62ee4",
  "configSha256": "a8b6f4a122f2ad38555f4fc4c268f606c36fdd0a845a848fee4e9f05663fe8ac",
  "sourceSha256": "9b90f6aac83a988a04beee0d0c375520608bd50bed5f41bb40a347fe1823ec4c",
  "template": {
    "path": "singularity/work-items/check-out-test/config/wfa/blobs/sha256/8845017e5a12bf3b59ea955324f999f9b51f4a6a6606c3808f7e516adf1d2cce",
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
    "path": "singularity/work-items/check-out-test/context/clarifications-specification-gen1.json",
    "sha256": "65a61c9eba41e1e242e569a74d0f61eaa039d0ebf9cdd4da09747ade36d0642c",
    "promptSha256": "4b66e931595c3a73ca912f0c7705c2fc084adc186551e98f8045d2ddbe125811",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-10-13T01:09:36.375Z",
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
      "path": "singularity/work-items/check-out-test/telemetry/specification-gen1.json",
      "sha256": "da29629a9b781ee15b402862f3f736638bf2835766106f084c4831a9425c2152",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 18440,
        "estimatedTokens": 4610,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 18440,
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
      "startedAt": "2026-10-13T01:12:01.383Z",
      "completedAt": "2026-10-13T01:12:01.383Z",
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

# Specification — check-out-test

## Agent brief

Add a hexadecimal conversion control to the standard calculator for any user. After the calculator
has evaluated a finite signed whole-number result, the user can toggle the displayed result between
its decimal representation and uppercase hexadecimal representation. Hexadecimal output uses a
`0x` prefix, with a negative sign before the prefix when applicable, and conversion never changes
the expression. The control is unavailable before a result has been evaluated and for fractional,
non-finite, or invalid results. Acceptance includes a screenshot of the default-theme standard
calculator with the control visible and a hexadecimal result displayed. Full hexadecimal entry,
fractional hexadecimal notation, and expansion to other calculator modes are excluded.

## Actors

- **Calculator user:** May enter and evaluate expressions in the standard calculator and use the
  hexadecimal conversion control. The application has no privileged or authenticated role for this
  feature.

## User scenarios

### S1 — View an evaluated whole-number result as hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The user is in standard mode and has evaluated an expression whose result is a finite
signed whole number.

- **Given** the expression `200 + 55` has been evaluated and the result display shows `255`
  **When** the user activates the hexadecimal conversion control
  **Then** the result display shows `0xFF` and the expression remains `200 + 55`

- **Given** the evaluated result is `0`
  **When** the user activates the hexadecimal conversion control
  **Then** the result display shows `0x0` and the expression remains unchanged

### S2 — Toggle hexadecimal output back to decimal

**Priority:** P2
**Actor:** Calculator user
**Context:** A supported evaluated result is currently displayed in hexadecimal.

- **Given** an evaluated result of `-255` is displayed as `-0xFF`
  **When** the user activates the hexadecimal conversion control again
  **Then** the result display returns to `-255` and the expression remains unchanged

### S3 — Prevent conversion of unsupported result states

**Priority:** P1
**Actor:** Calculator user
**Context:** The standard calculator does not have a convertible evaluated result.

- **Given** no expression has yet been evaluated
  **When** the user views the standard calculator
  **Then** the hexadecimal conversion control is visible but unavailable

- **Given** an evaluated result is fractional
  **When** the user views the hexadecimal conversion control
  **Then** the control is unavailable and the result and expression remain unchanged

- **Given** evaluation produced an invalid, error, or non-finite result
  **When** the user views the hexadecimal conversion control
  **Then** the control is unavailable and the result and expression remain unchanged

### S4 — Verify the default visual presentation

**Priority:** P1
**Actor:** Product reviewer
**Context:** The calculator is shown in standard mode with its default theme.

- **Given** a supported whole-number expression has been evaluated and converted
  **When** visual evidence is captured
  **Then** the screenshot shows the hexadecimal conversion control and the uppercase prefixed
  hexadecimal result in the calculator display

## Failure and empty states

- **Empty:** Before any expression is evaluated, the conversion control is visible but unavailable.
- **Failure:** Fractional, invalid, error, and non-finite evaluated results cannot be converted; the
  control is unavailable and neither the displayed result nor expression is modified.
- **Partial:** Conversion is a single local display action with no multi-step or external dependency;
  there is no accepted partial-success state.

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `check-out-test:REQ-001` | S1 | success |
| `check-out-test:REQ-002` | S3 | empty |
| `check-out-test:REQ-002` | S3 | boundary |
| `check-out-test:REQ-002` | S3 | failure |
| `check-out-test:REQ-003` | S1 | success |
| `check-out-test:REQ-003` | S1 | boundary |
| `check-out-test:REQ-004` | S2 | success |
| `check-out-test:REQ-005` | S4 | success |
| `check-out-test:AC-001` | S1 | success |
| `check-out-test:AC-002` | S2 | success |
| `check-out-test:AC-003` | S3 | empty |
| `check-out-test:AC-003` | S3 | boundary |
| `check-out-test:AC-003` | S3 | failure |
| `check-out-test:AC-004` | S4 | success |

## Permissions

The feature requires no authentication or elevated authority. Every calculator user may use the
control when the current evaluated result is eligible. A user without an eligible result sees the
same control in its unavailable state.

## Boundary conditions

- `0` is eligible and converts to `0x0`.
- Positive and negative finite whole-number results are eligible.
- Negative hexadecimal output places the sign before the prefix, such as `-0xFF`.
- Fractional results are ineligible and are not rounded or truncated.
- Invalid, error, and non-finite results are ineligible.
- The initial display value is not considered an evaluated result; conversion is unavailable until
  an expression has been evaluated.
- No separate magnitude, count, timeout, persistence, or throughput limit is introduced by the
  pinned Story or clarification.

## Requirements

- The standard calculator shall present a hexadecimal conversion control to the calculator user. *(S1, S3, S4)* [check-out-test:REQ-001]
- The conversion control shall be available only when the most recently evaluated result is a finite signed whole number; it shall be unavailable before evaluation and for fractional, invalid, error, or non-finite results. *(S1, S2, S3)* [check-out-test:REQ-002]
- Activating the available control while a decimal result is displayed shall replace only the displayed result with its uppercase hexadecimal representation using a `0x` prefix and, for negative values, a leading sign before the prefix. *(S1)* [check-out-test:REQ-003]
- Activating the available control while a hexadecimal result is displayed shall restore that evaluated result's decimal representation without changing the expression. *(S2)* [check-out-test:REQ-004]
- In the default theme and standard mode, the conversion control and converted result shall be visibly identifiable in the calculator interface. *(S4)* [check-out-test:REQ-005]

- Evaluating `200 + 55` and activating conversion displays `0xFF` while the expression remains `200 + 55`; evaluating a result of `0` and converting displays `0x0`. *(S1)* [check-out-test:AC-001]
- An evaluated result of `-255` converts to `-0xFF`, and activating conversion again restores `-255` without changing the expression. *(S2)* [check-out-test:AC-002]
- Before evaluation and after fractional, invalid, error, or non-finite results, the control is unavailable and activation cannot alter the result or expression. *(S3)* [check-out-test:AC-003]
- A screenshot of the standard calculator in its default theme shows the conversion control visible and an uppercase, `0x`-prefixed hexadecimal result in the result display. *(S4)* [check-out-test:AC-004]

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `check-out-test:REQ-001` | visual | `check-out-test:AC-004` |
| `check-out-test:REQ-002` | test | - |
| `check-out-test:REQ-003` | test | - |
| `check-out-test:REQ-004` | test | - |
| `check-out-test:REQ-005` | visual | `check-out-test:AC-004` |
| `check-out-test:AC-001` | test | - |
| `check-out-test:AC-002` | test | - |
| `check-out-test:AC-003` | test | - |
| `check-out-test:AC-004` | visual | `check-out-test:AC-004` |

## Non-functional requirements

No quantitative latency, throughput, availability, accessibility, privacy, or retention obligation
was supplied by the pinned Story or clarification. The required visual evidence is specified by
`check-out-test:REQ-005` and `check-out-test:AC-004`; no additional non-functional clause is added.

## Constitution articles

No constitution article IDs are available. The workflow config references
`singularity/constitution.md` in warning mode, but that file is absent from the pinned repository
checkout.

## Assumptions

- The existing evaluator remains responsible for producing the decimal result before conversion.
- "Default theme" means the application's existing default theme at verification time; the current
  source initializes that theme as `classic`.
- The conversion control affects presentation of the current evaluated result only and does not
  create a new evaluation.

## Out of scope

- A full hexadecimal input mode or `A` through `F` input keys.
- A new arithmetic operator inside expressions.
- Fractional hexadecimal notation or rounding/truncating decimal fractions for conversion.
- Hexadecimal conversion in scientific, converter, financial, or grapher modes.
- Changes to expression text, evaluation rules, or history entries caused solely by conversion.
- Required screenshots for every theme or for both desktop and mobile layouts.
- A new keyboard shortcut for conversion.

## Upstream discrepancies

None identified. There are no approved upstream phase artifacts for this first specification
generation.

## Sources

- **DOC-001 — Pinned Story source:** `singularity/work-items/check-out-test/source.json`, SHA-256
  `9b90f6aac83a988a04beee0d0c375520608bd50bed5f41bb40a347fe1823ec4c`.
- **DOC-002 — Specification clarification record:**
  `singularity/work-items/check-out-test/context/clarifications-specification-gen1.json`, SHA-256
  `65a61c9eba41e1e242e569a74d0f61eaa039d0ebf9cdd4da09747ade36d0642c`.
- **DOC-003 — Standard-mode orchestration:** `src/App.jsx`.
- **DOC-004 — Existing standard controls:** `src/components/StandardKeypad.jsx`.
- **DOC-005 — Existing expression and result display:** `src/components/Display.jsx`.
- **Gap:** The configured `singularity/constitution.md` source is not present in the repository.
