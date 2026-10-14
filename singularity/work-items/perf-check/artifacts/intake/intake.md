<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "perf-check",
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
      "sha256": "d746984f693429e4a69219f9fad165a9895fad5e26bcca8d29c07a86831c20bd",
      "bytes": 6448
    },
    "generation": 1,
    "publishedAt": "2026-10-14T01:05:55.398Z"
  },
  "sourceCommit": "d26c8b27063730c6f5c760e48c5293b40d6ff75f",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "dde74434750392a271ab8ee67e7f12b8db4bbe62e522ae2b5b27329396fec140",
  "sourceSha256": "07db4b80c4aa96f8fa8a38299d04c81a1aa365da62ac431b937bce15c8307333",
  "template": {
    "path": "singularity/work-items/perf-check/config/wfa/blobs/sha256/a1dae2da960302a152df2c87c90673222a9a8a671752ef38d13fe75e94598950",
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
    "path": "singularity/work-items/perf-check/context/clarifications-intake-gen1.json",
    "sha256": "9fe8e764d347befe139c4bc8a56484b6157694c1cf2bb7138d465383b1bc9692",
    "promptSha256": "2bf4d28bd3637a30e909bb07bb92baf4baeba737528c583f674da556bfa8f3da",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-10-14T01:03:40.523Z",
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
      "path": "singularity/work-items/perf-check/telemetry/intake-gen1.json",
      "sha256": "3e1abb2b51df120abae68f44411321c39de7a1e272f82ce9ed80b6ca338d0fac",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 15659,
        "estimatedTokens": 3915,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 15659,
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
      "startedAt": "2026-10-14T01:05:55.398Z",
      "completedAt": "2026-10-14T01:05:55.398Z",
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

# perf-check — Quick fix scope and plan

This short checkpoint states what the fix must do and where it lands before any code changes.
One reviewer signs it off; Implement then has to meet exactly these claims.

## Problem and fix

The calculator cannot convert a decimal result to hexadecimal. Add a visible `HEX` keypad
button that converts the current finite signed integer result to uppercase hexadecimal without
a prefix, while reporting an error for fractional or otherwise invalid results.

## Requirements

| Clause | Requirement | Authority |
|---|---|---|
| [perf-check:REQ-001] | A calculator user can invoke decimal-to-hexadecimal conversion from a visible `HEX` button on the calculator keypad. | Pinned Story request plus intake clarification generation 1 |
| [perf-check:REQ-002] | Conversion accepts finite signed integer results, emits uppercase hexadecimal without a prefix, and reports an error for fractional or invalid results. | Intake clarification generation 1 |

## Acceptance criteria

| Clause | Observable outcome |
|---|---|
| [perf-check:AC-001] | Given a current finite signed integer decimal result, when the user presses the visible `HEX` keypad button, the result display shows its uppercase hexadecimal representation without a prefix; examples include `255` to `FF`, `-15` to `-F`, and `0` to `0`. |
| [perf-check:AC-002] | Given a fractional or invalid current result, when the user presses `HEX`, the result display shows an error instead of a converted or truncated value. |

## Scenario coverage

| Clause | Scenario | Outcome |
|---|---|---|
| `perf-check:AC-001` | **S-001 — Positive integer:** Given the evaluated decimal result is `255`, when the user presses the visible `HEX` button, then the result display shows `FF`. | success |
| `perf-check:AC-001` | **S-002 — Signed boundary:** Given the evaluated decimal result is `-15`, when the user presses `HEX`, then the result display shows `-F`. | boundary |
| `perf-check:AC-001` | **S-003 — Zero:** Given the current result is `0`, when the user presses `HEX`, then the result display remains `0`. | empty |
| `perf-check:AC-002` | **S-004 — Fraction rejected:** Given the evaluated decimal result is `1.5`, when the user presses `HEX`, then the result display shows an error and does not show `1` or a fractional hexadecimal value. | failure |
| `perf-check:AC-002` | **S-005 — Invalid result rejected:** Given the current result is invalid, when the user presses `HEX`, then the result display continues to communicate an error and no hexadecimal value is produced. | failure |

## Verification intent

| Clause | Methods | Criterion |
|---|---|---|
| `perf-check:REQ-001` | test | - |
| `perf-check:REQ-002` | test | - |
| `perf-check:AC-001` | test | `perf-check:AC-001` |
| `perf-check:AC-002` | test | `perf-check:AC-002` |

## Planned implementation evidence

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `perf-check:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | A visible `HEX` control invokes conversion of the current result from the standard calculator keypad. |
| `perf-check:REQ-002` | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Conversion emits uppercase, unprefixed hexadecimal for finite signed integers and reports an error for fractional or invalid results. |
| `perf-check:AC-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | The keypad exposes `HEX`; pressing it converts positive, negative, and zero integer results to uppercase hexadecimal without a prefix. |
| `perf-check:AC-002` | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Pressing `HEX` for a fractional or invalid result visibly reports an error and never truncates or emits a hexadecimal value. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

| Criterion | Slot | Method | Witness | Role |
|---|---|---|---|---|
| `perf-check:AC-001` | `hex-integer-conversion` | test | `src/App.test.jsx` | primary |
| `perf-check:AC-002` | `hex-invalid-result` | test | `src/App.test.jsx` | primary |

## Dependencies and assumptions

- Existing result state in `src/App.jsx` remains the source value for conversion.
- Existing keypad event handling and `src/utils/evaluator.js` remain the implementation seams.
- Existing Vitest suites provide executable coverage for conversion semantics and visible button
  behavior.
- Existing decimal calculation, formatting, history, memory, scientific functions, and sound
  behavior remain unchanged except where invoking `HEX` requires result display state to update.

## Out of scope

- Accepting hexadecimal operands in expressions or performing arithmetic in hexadecimal.
- A persistent decimal/hex calculator mode.
- Fractional hexadecimal notation or truncation of fractional results.
- A keyboard-only shortcut or automatic hexadecimal output alongside every decimal result.
- Redesigning unrelated keypad controls, evaluator behavior, history, memory, or scientific modes.

## Upstream discrepancies

None. The pinned Story is terse, and intake clarification generation 1 resolves the material
operator semantics, invocation path, output format, and invalid-input boundary without
contradicting it.

## Open questions

None.

## Agent brief

Implement only the two approved acceptance clauses. Reuse the existing keypad-to-application
handler pattern and keep conversion logic independently testable. Add executable Vitest coverage
for `255` to `FF`, `-15` to `-F`, `0` to `0`, fractional rejection, invalid-result rejection, and
the visible `HEX` control. Do not add hexadecimal input arithmetic, a mode toggle, fractional
conversion, implicit truncation, or unrelated calculator changes.
