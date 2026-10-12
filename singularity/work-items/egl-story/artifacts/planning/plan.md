<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "egl-story",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "architect",
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
      "agentId": "architect"
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
      "filename": "plan.md",
      "mediaType": "text/markdown",
      "sha256": "83d3ecaac911babc497c5115dace3527ec7ceacb0915de42733dee28df6779a9",
      "bytes": 4937
    },
    "generation": 1,
    "publishedAt": "2026-10-12T02:45:26.503Z"
  },
  "sourceCommit": "15850a61c7d95cf9c2c492cfee5ab88472c39289",
  "generationCommit": "07842f1de3f8ffa976167a2316a04ad978f17d4f",
  "publicationCommit": "07842f1de3f8ffa976167a2316a04ad978f17d4f",
  "configSha256": "083d8965c65e8abeeb52bc7c40dd470aa5cdc144f592aea74911d5544b9770be",
  "sourceSha256": "346451d0e7141c5ebe3e4ed4b92bf029f65ffe35e6166e281fd407d921e56362",
  "template": {
    "path": "singularity/work-items/egl-story/config/wfa/blobs/sha256/b953f12ef6b7162f71af438e5af18c9e37aac265e15d2fe73f9cf23aff0a182c",
    "sha256": "b953f12ef6b7162f71af438e5af18c9e37aac265e15d2fe73f9cf23aff0a182c",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/egl-story/context/inputs-planning-gen1.json",
    "sha256": "a3f2fac70ae6dbc5e062f8018a8f595749ea08647e998aee1581ed683681c1de",
    "renderedSha256": "248b925a5845832f59c423fdaddd3dd73381c6f96c37702fc17c2a5867ff8275",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/egl-story/telemetry/planning-gen1.json",
      "sha256": "92487f55204a7450679a1de3ab117a0dbe63900fbcffbbe9bc0da2a3d88a5d71",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 22369,
        "estimatedTokens": 5593,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 22369,
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
      "startedAt": "2026-10-12T02:45:26.503Z",
      "completedAt": "2026-10-12T02:45:26.503Z",
      "agent": "architect",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Implementation plan — egl-story

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

The implementation should add a hex conversion flow to the calculator’s scientific UI without changing the rest of the calculator behavior. The work is centered on the UI trigger, expression evaluation, and invalid-input handling for the `hex` operation: when the user enters a positive integer and converts it, the result must be uppercase hexadecimal with no `0x` prefix; when the input is empty or invalid, the app must show an error state instead of a conversion result. We will verify with the calculator’s existing test harness and a retained screenshot proving the button and successful conversion are visible.

## Approach

The change will use the existing calculator flow: the scientific keypad will expose a dedicated hex action, the main app will route that action into the same expression/result handling as other calculator operations, and the evaluator layer will validate that only positive integers are accepted. This keeps the feature aligned with the existing architecture instead of adding a separate code path, and it makes the error case deterministic by rejecting non-positive, decimal, or empty inputs before formatting any output.

## Affected surfaces

| Surface | Change | Serves |
|---|---|---|
| `src/components/ScientificKeypad.jsx` | Add a visible hex button and route it through the same calculator action flow used by other scientific operations. | [egl-story:REQ-001] |
| `src/App.jsx` | Wire the new action into the expression/result state and maintain the existing error display behavior for invalid calculations. | [egl-story:REQ-001], [egl-story:REQ-002] |
| `src/utils/evaluator.js` | Validate positive integer inputs and format valid values as uppercase hexadecimal without a `0x` prefix; emit an `Error` state for invalid input. | [egl-story:REQ-001], [egl-story:REQ-002] |

## Sequencing

1. Add the hex trigger to the scientific keypad and connect it to the calculator’s existing input handling flow.
2. Implement validation and conversion in `src/utils/evaluator.js` so only positive integers convert and any invalid input yields an error instead of a result.
3. Extend the existing UI tests to cover successful conversions and invalid-input rejection in the same path used by the calculator display.
4. Capture the required visual proof and retain it under the Story evidence directory before publication.

## Test strategy

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [EGL-STORY:AC-001] | `singularity/work-items/egl-story/evidence/hex-conversion-success.png` | `src/App.test.jsx` | evidence | The screenshot shows the hex button and a successful uppercase conversion with no `0x` prefix. |
| [EGL-STORY:REQ-001] | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A positive integer produces an uppercase hexadecimal output with no `0x` prefix. |
| [EGL-STORY:REQ-002] | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Empty input or non-positive or non-integer values show an error and no conversion result. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| [EGL-STORY:AC-001] | hex-button-success | visual | `hex-success-screenshot` | primary | source-bound |

## Constitution articles

No additional constitution articles were referenced beyond this Story’s approved clause set and the current phase policy; the implementation remains governed by `[SPK:REQ-100]` and the active clause capsule.

## Risks and rollback

The main risk is introducing an invalid conversion path in the shared evaluator, which could affect other calculator operations. It will be detected by the existing unit and UI regression tests and by checking that invalid input resolves to `Error` while valid input formats to uppercase hex. If the feature regresses, the rollback is to remove the new hex trigger and revert the evaluator changes while maintaining the unchanged calculator behavior for all other operators.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/egl-story/artifacts/specification/spec.md sha256=4c7edda535ba6b268375f9701fa76578d90169e156cb1a69ee859824169682d6 status=captured projection=approved-summary representation-sha256=sha256:25bbfbb64b1a1fbbcc5c121c10a95a211e74dde6c6fecf93d54cc4b84c271ae9 brief-sha256=25bbfbb64b1a1fbbcc5c121c10a95a211e74dde6c6fecf93d54cc4b84c271ae9 expansion=sfref:v1:story:egl-story:21a0f47d6bf4500404c6b606666ca6fbc819d4e3376040c5c5e92883092f13f3 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `egl-story`
- Producer: `specification` generation 2
- Consumer: `planning`
- Source: `singularity/work-items/egl-story/artifacts/specification/spec.md`
- Source SHA-256: `bb9bbc0bfe29d3a15fc5032dee0b3b1a2d50af4008a3a884acb14122c67ff903`

## Summary from “Agent brief”

Provide a hex conversion operation for positive integer input. The user activates the hex button to
see the integer represented in uppercase hexadecimal without a `0x` prefix. Inputs that are not
positive integers produce an error with no conversion result. The acceptance screenshot shows the
button and a successful conversion. No permission model or non-functional thresholds were requested.

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

### S2 — Reject an invalid value

**Priority:** P2
**Actor:** Screen user
**Context:** The value is empty or is not a positive integer.

- **Given** the value is zero, negative, fractional, empty, or otherwise not an integer
  **When** the user activates the hex button
  **Then** an error is shown and no hexadecimal result is produced.

## Failure and empty states

- **Empty:** Empty input follows S2: show an error and do not show a conversion result.
- **Failure:** Zero, negative, fractional, or otherwise non-integer input follows S2: show an error
  and do not produce a hexadecimal result.
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
  instead of a hexadecimal result. *(S2)* [egl-story:REQ-002]
- A screenshot of the screen shall show the hex button and a successful conversion. *(S1)*
  [egl-story:AC-001]

## Non-functional requirements

No non-functional requirements were specified in the pinned Story or its clarification.

## Assumptions

The screen user can provide the integer value to the hex operation. Input entry mechanics and error
copy are not defined by the Story.

## Out of scope

Changes to other operations, role-based access, non-functional thresholds, and a particular error
message or styling are outside this Story.

> Exact source expansion: `sfref:v1:story:egl-story:21a0f47d6bf4500404c6b606666ca6fbc819d4e3376040c5c5e92883092f13f3`. Use `singularity-flow show sfref:v1:story:egl-story:21a0f47d6bf4500404c6b606666ca6fbc819d4e3376040c5c5e92883092f13f3 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
