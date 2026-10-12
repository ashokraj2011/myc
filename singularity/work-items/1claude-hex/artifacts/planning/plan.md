<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "1claude-hex",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
  "status": "in_progress",
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
      "sha256": "18e442b9e012a7e07dba870351ae7bd78dec977f7be110c5aff060416d706462",
      "bytes": 7805
    },
    "generation": 1,
    "publishedAt": "2026-10-12T10:33:15.162Z"
  },
  "sourceCommit": "2eb59bf04ade417e1208ad9e71e4e3b67f937cf8",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "a8b6f4a122f2ad38555f4fc4c268f606c36fdd0a845a848fee4e9f05663fe8ac",
  "sourceSha256": "7e37579cd40bc56419b60d49a1f8901fe812fa2bf06d4a6c23218fc2d60333ce",
  "template": {
    "path": "singularity/work-items/1claude-hex/config/wfa/blobs/sha256/b953f12ef6b7162f71af438e5af18c9e37aac265e15d2fe73f9cf23aff0a182c",
    "sha256": "b953f12ef6b7162f71af438e5af18c9e37aac265e15d2fe73f9cf23aff0a182c",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/1claude-hex/context/inputs-planning-gen1.json",
    "sha256": "ffa273924dad25e5f7a9d19a83b469ff5daba6d80b114728f592d0c18cecd4f0",
    "renderedSha256": "1709a7c1cafb2d94b7fbe1585b4d6a83cb62fa934738bc3c9d664972a9578d52",
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
      "path": "singularity/work-items/1claude-hex/telemetry/planning-gen1.json",
      "sha256": "74e727eda0d04db3391e3f5a80df16193fa7a76216da9deb29f11d5d86a9b269",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26209,
        "estimatedTokens": 6553,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26209,
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
      "startedAt": "2026-10-12T10:33:15.162Z",
      "completedAt": "2026-10-12T10:33:15.162Z",
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

# Implementation plan — 1claude-hex

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a focused positive-integer-to-hex conversion helper to the calculator utilities, wire a `hex`
action through the scientific keypad to App-owned display state, and leave the existing expression
evaluator and other keypad modes unchanged. Unit and App interaction tests will cover the supported
conversion and every specified unsupported input. Retain fresh screenshots of the `255` → `FF`
success state and the exact `Not supported` state. Main risks are misclassifying numeric input and
accidentally changing existing expression, history, or keypad behavior; constrain the handler to
the current scalar value and test the existing calculation flow as regression coverage.

## Approach

Keep conversion as a small pure utility beside existing calculator formatting/evaluation helpers.
Accept only a finite positive whole-number value; produce base-16 digits with uppercase A–F and no
prefix, and report the exact unsupported display text for empty, non-numeric, zero, negative, and
fractional values. Add a dedicated callback from `App` to `ScientificKeypad`; pressing its toolbar
control updates the displayed result immediately, without requiring `=`. Do not expand scope to
compound-expression conversion, other bases, persistence/history changes, or ordinary arithmetic.
The approved Specification treats the current input as a scalar and leaves compound expressions
out of scope.

## Affected surfaces

Keep the change local to the existing calculator state, utility, scientific toolbar, and their
tests. No API, data model, persistence, dependency, or build configuration changes are planned.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Resolve the current scalar and update the displayed result from a dedicated hex action. | [1CLAUDE-HEX:REQ-001], [1CLAUDE-HEX:REQ-002] |
| `src/components/ScientificKeypad.jsx` | Add the `hex` toolbar control and pass its action to the existing scientific keypad surface. | [1CLAUDE-HEX:REQ-001], [1CLAUDE-HEX:REQ-002] |
| `src/utils/evaluator.js` | Add pure positive-integer validation and uppercase hexadecimal formatting without altering expression evaluation. | [1CLAUDE-HEX:REQ-001], [1CLAUDE-HEX:REQ-002] |

## Sequencing

1. Add unit coverage for conversion boundaries in `src/utils/evaluator.test.js`, then implement the
   pure conversion helper in `src/utils/evaluator.js`.
2. Add the hex action to `src/components/ScientificKeypad.jsx` and connect it to current calculator
   state in `src/App.jsx`; add interaction coverage in `src/App.test.jsx`. Confirm conversion occurs
   on the button press and does not require `=`.
3. Run the configured tests, exercise the success and unsupported UI states, and retain the two
   required screenshots at the evidence paths below. Preserve the existing arithmetic, standard
   keypad, and history behavior.

## Test strategy

Use utility tests for positive whole-number formatting and rejection boundaries, plus App
interaction tests for the scientific toolbar, immediate display update, and each unsupported input.
Keep test files separate from product-source paths. Capture fresh screenshots from the running
candidate for the two visual states; screenshot presence is not itself a visual pass. The approved
criterion also requires automated tests for positive whole numbers, zero, negative, fractional,
empty, and non-numeric input.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `1CLAUDE-HEX:AC-001` | `singularity/work-items/1claude-hex/evidence/hex-positive-255.png`, `singularity/work-items/1claude-hex/evidence/hex-not-supported.png` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | evidence | Fresh evidence shows `255` converted to `FF` and an unsupported value displayed exactly as `Not supported`; automated tests cover the supported case and every unsupported input class. |
| `1CLAUDE-HEX:REQ-001` | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Pressing `hex` in the scientific toolbar immediately displays uppercase hexadecimal digits without a `0x` prefix or pressing `=`. |
| `1CLAUDE-HEX:REQ-002` | `src/App.jsx`, `src/components/ScientificKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | modified | Pressing `hex` for zero, a negative, a fraction, empty input, or non-numeric input displays exactly `Not supported`. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test. -->

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `1CLAUDE-HEX:AC-001` | `hex-input-boundaries` | test | `src/App.test.jsx` | primary | exact-local-observed |
| `1CLAUDE-HEX:AC-001` | `hex-positive` | visual | `singularity/work-items/1claude-hex/evidence/hex-positive-255.png` | primary | source-bound |
| `1CLAUDE-HEX:AC-001` | `hex-unsupported` | visual | `singularity/work-items/1claude-hex/evidence/hex-not-supported.png` | supporting | source-bound |

## Constitution articles

No constitution article IDs were supplied in the composed approved inputs or active clause capsule.
Do not infer article IDs; verify the applicable governed constitution binding during review.

## Risks and rollback

Input parsing could accept an unsupported value or reject a valid positive integer; unit tests must
cover all five unsupported classes and representative positive whole numbers, while App tests
confirm the exact user-visible result. Wiring the action could disturb standard keypad, arithmetic,
or history behavior; retain the existing regression suite and avoid changing those flows. The
approved specification does not define compound-expression conversion, so this plan limits the
feature to the current scalar input rather than silently adding evaluation semantics. If the
feature regresses existing behavior, revert only the hex toolbar callback, handler, helper, and
feature tests/evidence; leave unrelated calculator changes untouched.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/1claude-hex/artifacts/specification/spec.md sha256=601ea4af069bb8414478a6322ed140421003235536d6a6cc504937b6c28e6ada status=captured projection=approved-summary representation-sha256=sha256:938e1be4aa567a08d2f80cd51895bff91990c8abfde869199bf22343db58f2c9 brief-sha256=938e1be4aa567a08d2f80cd51895bff91990c8abfde869199bf22343db58f2c9 expansion=sfref:v1:story:1claude-hex:902c161759551a3d9ba79c3c1f220cf0378a978e86a61230883523bcb40e2535 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `1claude-hex`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/1claude-hex/artifacts/specification/spec.md`
- Source SHA-256: `e5cafbd73f68b4de5600111001cb2e032f98ed33658cc31f1bf6e814b867b46c`

## Summary from “Agent brief”

Calculator users can convert the current value immediately with a `hex` control in the scientific keypad toolbar. Positive whole numbers display as uppercase hexadecimal digits without a `0x` prefix. Empty input, zero, negative values, fractions, and non-numeric values display exactly `Not supported`. Acceptance requires automated tests for those input classes and fresh screenshots of a successful conversion and an unsupported-input state.

## Actors

The actor is a calculator user. No distinct permission or role is required by this Story.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Convert a positive integer to a hexadecimal value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is open, the scientific keypad is available, and a positive whole-number value is current.

- **Given** the current value is `255`
  **When** the user presses the `hex` control
  **Then** the calculator immediately displays `FF`, with no `0x` prefix, without requiring `=`.

- **Given** the current value is another positive whole number
  **When** the user presses the `hex` control
  **Then** the calculator immediately displays that value's uppercase hexadecimal digits.

### S2 — Reject values that are not positive whole numbers

**Priority:** P2
**Actor:** Calculator user
**Context:** The calculator is open and the current input is empty or is not a positive whole number.

- **Given** the current value is `0`, a negative number, or a fractional number
  **When** the user presses the `hex` control
  **Then** the calculator displays exactly `Not supported`.

- **Given** the current input is empty
  **When** the user presses the `hex` control
  **Then** the calculator displays exactly `Not supported`.

- **Given** the current input is non-numeric
  **When** the user presses the `hex` control
  **Then** the calculator displays exactly `Not supported`.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Pressing `hex` with no current input displays `Not supported`.
- **Failure:** A value that cannot be converted because it is zero, negative, fractional, or non-numeric displays `Not supported`. The Story defines no separate dependency or service failure state for this local conversion.
- **Partial:** No partial outcome is defined; the conversion either displays the hexadecimal value or `Not supported`.

## Permissions

The feature is available to the calculator user. The Story specifies no role-based access or permission change.

## Boundary conditions

A supported input is a whole-number value greater than zero. Zero, any negative value, any fractional value, empty input, and non-numeric input are unsupported and display exactly `Not supported`. A supported result uses uppercase A–F and has no `0x` prefix. The control is in the scientific keypad toolbar and converts immediately.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Pressing the `hex` control in the scientific keypad toolbar immediately converts the current positive whole-number value and displays its hexadecimal digits using uppercase A–F, without a `0x` prefix or requiring `=`. *(S1)* [1claude-hex:REQ-001]
- Pressing the `hex` control for zero, a negative value, a fractional value, empty input, or non-numeric input displays exactly `Not supported`. *(S2)* [1claude-hex:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- Acceptance evidence includes fresh screenshots of a successful hexadecimal conversion and the `Not supported` state, plus automated tests covering positive whole numbers and each unsupported input class: zero, negative, fractional, empty, and non-numeric. *(S1, S2)* [1claude-hex:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

No non-functional requirement is specified by the pinned Story or clarification answers.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The `hex` control acts on the current calculator value. The Story does not define behavior for entering or converting compound expressions; this specification covers the current value only. No further unresolved decision is recorded for this generation.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Binary, octal, or other base conversions; changes to ordinary arithmetic or other scientific functions; and a `0x` prefix are out of scope.

> Exact source expansion: `sfref:v1:story:1claude-hex:902c161759551a3d9ba79c3c1f220cf0378a978e86a61230883523bcb40e2535`. Use `singularity-flow show sfref:v1:story:1claude-hex:902c161759551a3d9ba79c3c1f220cf0378a978e86a61230883523bcb40e2535 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
