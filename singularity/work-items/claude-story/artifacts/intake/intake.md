<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "claude-story",
  "workType": "quick-fix",
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
      "sha256": "403f5985e077e05ae8613fe92d3ed0e6fa8cbc4f98e934dae48bd0b8434228a4",
      "bytes": 5204
    },
    "generation": 1,
    "publishedAt": "2026-10-16T08:23:59.736Z"
  },
  "sourceCommit": "4733850917b4fd03a1a752edc45780cad641fe36",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "cefab2b320917902d3a5d87f8fb41c6ca3fa661958e79fec9ecf93e28f239314",
  "sourceSha256": "41650f8b12da1ef4cc5f896dfccf470d47bea221b63ef5ecf1ad5ee8dde6d1da",
  "template": {
    "path": "singularity/work-items/claude-story/config/wfa/blobs/sha256/a1dae2da960302a152df2c87c90673222a9a8a671752ef38d13fe75e94598950",
    "sha256": "a1dae2da960302a152df2c87c90673222a9a8a671752ef38d13fe75e94598950",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/quick-fix/intake.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/claude-story/context/clarifications-intake-gen1.json",
    "sha256": "5ee83c187bcfd849841b508628923812a4500cbc8336cbf0aa5f1199d154fb90",
    "promptSha256": "9ab2ada23f4f87bf811ff479f92b9ef47600b73e40f2197da948641154475169",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-10-16T08:20:00.009Z",
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
      "path": "singularity/work-items/claude-story/telemetry/intake-gen1.json",
      "sha256": "a00492b60ff23ea072e2775909d6557af77bd9a100379ba844be1d2bfbb55398",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 16144,
        "estimatedTokens": 4036,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 16144,
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
      "startedAt": "2026-10-16T08:23:59.736Z",
      "completedAt": "2026-10-16T08:23:59.736Z",
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

# claude-story — Quick fix scope and plan

This short checkpoint states what the fix must do and where it lands before any code changes.
One reviewer signs it off; Implement then has to meet exactly these claims.

## Problem and fix

Calculator users have no way to convert the scientific calculator's displayed result to hexadecimal. Add a `HEX` button to the scientific keypad and have it convert the displayed result when activated.

## Acceptance criteria

| Clause | Observable outcome |
|---|---|
| [CLAUDE-STORY:AC-001] | In scientific mode, the calculator keyboard visibly contains a button labeled `HEX`. |
| [CLAUDE-STORY:AC-002] | Given a displayed result of 10, when the user activates `HEX`, the result display shows the hexadecimal representation of 10 (`a` or `A`). |

The pinned Story's acceptance criterion is `screenshot`. No reference image was attached; the visual target clarified for this checkpoint is a `HEX`-labeled button in the scientific calculator keyboard. Visual verification is limited to that stated target.

## Planned implementation evidence

One row for each clause above, with exact repository-relative source and executable-test paths.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `CLAUDE-STORY:AC-001` | `singularity/work-items/claude-story/evidence/CLAUDE-STORY-AC-001.png` | `src/App.test.jsx` | evidence | Scientific mode screenshot shows the `HEX` button in the keyboard. |
| `CLAUDE-STORY:AC-002` | `src/App.jsx` | `src/App.test.jsx` | modified | Activating `HEX` replaces the displayed decimal result with its hexadecimal representation. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Requirements

| ID | Requirement | Source |
|---|---|---|
| REQ-001 | Provide a `HEX` action on the scientific calculator keyboard. | Pinned Story `source.json` (`description`); clarification recorded for intake generation 1 (`buttonBehavior`, `visualTarget`). |
| REQ-002 | Activating `HEX` converts the currently displayed result to its hexadecimal representation. | Clarification recorded for intake generation 1 (`activationBehavior`, `conversionTarget`). |

## Acceptance cases

| Case | Given | When | Then |
|---|---|---|---|
| S-001 | The calculator is in scientific mode. | The user views the calculator keyboard. | A button labeled `HEX` is visible in that keyboard. |
| S-002 | The scientific calculator displays the result `10`. | The user activates `HEX`. | The result display shows the hexadecimal representation `a` or `A`. |

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `CLAUDE-STORY:AC-001` | S-001: verify the scientific keyboard contains the `HEX` button. | success |
| `CLAUDE-STORY:AC-002` | S-002: convert the displayed result `10` to hexadecimal. | success |

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `CLAUDE-STORY:AC-001` | test, visual | `CLAUDE-STORY:AC-001` |
| `CLAUDE-STORY:AC-002` | test | `CLAUDE-STORY:AC-002` |

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `CLAUDE-STORY:AC-001` | hex-button-presence | test | `src/App.test.jsx` | primary | exact-local-observed |
| `CLAUDE-STORY:AC-001` | hex-button-visual | visual | `src/components/ScientificKeypad.jsx` | primary | source-bound |
| `CLAUDE-STORY:AC-002` | hex-result-conversion | test | `src/App.test.jsx` | primary | exact-local-observed |

## Agent brief

Implement only the `HEX` action described by these criteria. Place the button on the scientific calculator keyboard and convert the currently displayed result when it is activated. Preserve the existing behavior and controls of the other calculator modes. Add focused regression coverage for button visibility and conversion.

## Constitution articles

None: this Story pinned no constitution.

## Assumptions and dependencies

- The pinned `screenshot` criterion is verified against the clarified verbal target: the `HEX` button is in the scientific calculator keyboard. No reference screenshot was attached.
- No external or upstream dependencies are known for this change.

## Scope accounting

| Path | Planned role |
|---|---|
| `src/components/ScientificKeypad.jsx` | Add the scientific-keypad button. |
| `src/App.jsx` | Handle conversion of the displayed result. |
| `src/App.test.jsx` | Verify button visibility and result conversion. |

## Out of scope

Adding a general hexadecimal calculator mode, changing expression evaluation, or changing the behavior of other calculator modes is out of scope. No reference screenshot was supplied, so matching any visual details beyond the clarified keyboard placement and `HEX` label is not claimed.
