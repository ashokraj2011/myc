<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "after-fix",
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
      "sha256": "be3bd1988aceda44a813f72abfa0b8d33c4a1580a2ac55443fbaef2cfcccdba0",
      "bytes": 9208
    },
    "generation": 1,
    "publishedAt": "2026-10-15T11:33:41.479Z"
  },
  "sourceCommit": "423a20045740b630a45dcdb708e7b34406dfb6b8",
  "generationCommit": "e92428989cb1dc21f20fbe59352666f879176272",
  "publicationCommit": "e92428989cb1dc21f20fbe59352666f879176272",
  "configSha256": "cb6a60069ea9e278ebc92437dfebb6d6ab77375482b08bf317e5221b4e5999fc",
  "sourceSha256": "92bdbeb174685b0606b1f8d0a05700da09a818b9124c4e498c6d22cef721807a",
  "template": {
    "path": "singularity/work-items/after-fix/config/wfa/blobs/sha256/b953f12ef6b7162f71af438e5af18c9e37aac265e15d2fe73f9cf23aff0a182c",
    "sha256": "b953f12ef6b7162f71af438e5af18c9e37aac265e15d2fe73f9cf23aff0a182c",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/after-fix/context/inputs-planning-gen1.json",
    "sha256": "48f463e42aa7fab673dc3b32357890a5b4e1854fa742b60d72871bb7b1e96bef",
    "renderedSha256": "1dba7a697d45208329c5f0a8a971996d2374e3d6dfc969790b701cc953d9d6ae",
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
      "path": "singularity/work-items/after-fix/telemetry/planning-gen1.json",
      "sha256": "58f8525d6e6f36660f2269cffa1d3760652812b398ead184c05088aae1e87ae6",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26574,
        "estimatedTokens": 6644,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26574,
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
      "startedAt": "2026-10-15T11:33:41.479Z",
      "completedAt": "2026-10-15T11:33:41.479Z",
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

# Implementation plan — after-fix

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add decimal-to-hex conversion to the existing standard calculator without changing ordinary
expression evaluation. A dedicated helper will accept only positive decimal integers and produce an
exact `0x`-prefixed uppercase result; one App handler will atomically show either that result or a
visible error. Expose the action through the standard keypad and the unused `h`/`H` shortcut, and
document the shortcut in keyboard help. Unit and UI tests will cover `1`, `26`, `255`, both
interaction paths, formatting, and every rejected input category. Key risks are numeric precision,
stale results on failure, and interference with existing shortcuts/calculation behavior.

## Approach

Implement a dedicated conversion helper in `src/utils/evaluator.js`; do not route input through
`evaluateExpression` or change its behavior. Require the entire current expression to match a
non-empty decimal-digit string and represent a value greater than zero. Convert with `BigInt` to
avoid precision loss for large integers, uppercase the hexadecimal digits, and prepend `0x`.
`src/App.jsx` will own a single conversion handler and set the display result only after conversion
succeeds; on invalid input it will set `Error`, replacing any previous result. Add a keypad button
using the existing `StandardKeypad` styling/sound convention and bind `h`/`H` in the existing
keyboard listener, preserving its input/select guards. Document that key in the existing shortcut
modal. This is a proposed design based on inspected current source, not evidence of implemented
behavior.

## Affected surfaces

Current calculator composition and keyboard handling are in `src/App.jsx`; standard controls are
in `src/components/StandardKeypad.jsx`, and keyboard help is in
`src/components/KeyboardShortcutsModal.jsx`. Numeric utilities are in `src/utils/evaluator.js`.
Extend the existing helper and App test files rather than changing dependencies, configuration,
persistence, APIs, or unrelated calculator modes.

| Surface | Change | Serves |
|---|---|---|
| `src/utils/evaluator.js` | Add strict positive-decimal validation and exact uppercase hexadecimal conversion; preserve expression evaluation. | AFTER-FIX:REQ-001, AFTER-FIX:REQ-003, AFTER-FIX:REQ-004 |
| `src/App.jsx` | Add the atomic conversion handler and connect keypad and `h`/`H` keyboard interactions. | AFTER-FIX:REQ-001, AFTER-FIX:REQ-002, AFTER-FIX:REQ-004, AFTER-FIX:AC-001, AFTER-FIX:AC-002 |
| `src/components/StandardKeypad.jsx` | Add the visible conversion button using existing keypad conventions. | AFTER-FIX:REQ-002, AFTER-FIX:AC-001 |
| `src/components/KeyboardShortcutsModal.jsx` | Document the `h`/`H` conversion shortcut. | AFTER-FIX:REQ-002 |
| `src/utils/evaluator.test.js` | Test exact conversion and rejection of blank, zero, negative, fractional, and non-numeric values. | AFTER-FIX:AC-002, AFTER-FIX:AC-003, AFTER-FIX:REQ-001, AFTER-FIX:REQ-003, AFTER-FIX:REQ-004 |
| `src/App.test.jsx` | Test keypad and keyboard success, visible output/errors, and both interaction paths. | AFTER-FIX:AC-001, AFTER-FIX:AC-002, AFTER-FIX:AC-003, AFTER-FIX:REQ-002, AFTER-FIX:REQ-004 |

## Sequencing

1. Add and unit-test the standalone conversion helper, including `1`, `26`, and `255`, plus the
   full rejected-input matrix. This establishes the accepted domain and output representation
   before UI wiring (AFTER-FIX:REQ-001, AFTER-FIX:REQ-003, AFTER-FIX:REQ-004, AFTER-FIX:AC-002,
   AFTER-FIX:AC-003).
2. Add the App handler, keypad control, and documented keyboard shortcut. Ensure invalid or empty
   attempts replace any previous result with an error and successful conversion leaves existing
   expression evaluation unchanged (AFTER-FIX:REQ-002, AFTER-FIX:AC-001, AFTER-FIX:AC-002).
3. Add UI coverage for keypad `26` → `0x1A`, keyboard `255` → `0xFF`, and `1` → `0x1`; exercise
   every invalid category and no-stale-result behavior. Run focused Vitest tests and the complete
   `npm test` suite (AFTER-FIX:AC-001, AFTER-FIX:AC-002, AFTER-FIX:AC-003).

## Test strategy

Helper tests will assert exact conversion and strict rejection; UI tests will invoke both pathways,
assert all three approved successful examples and error/no-hex output for each invalid category.
Include an invalid attempt after a previous successful result to detect stale output. Inspect the
automated test cases and wiring for clauses whose approved method includes inspection, and visually
verify the display error for clauses requiring visual proof. The retained specification execution
packet reports no governed test executions; that is neither a pass nor a failure. Run the newly
authored tests against the implementation candidate.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| AFTER-FIX:AC-001 | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Keypad and keyboard actions produce `0x1`, `0x1A`, and `0xFF` for `1`, `26`, and `255`. |
| AFTER-FIX:AC-002 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Blank, zero, negative, fractional, and non-numeric input show an error and no hexadecimal result. |
| AFTER-FIX:AC-003 | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/components/KeyboardShortcutsModal.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Automated cases cover success, both interaction surfaces, prefixed uppercase output, and each invalid/empty category. |
| AFTER-FIX:REQ-001 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A positive base-10 integer converts to its mathematically equivalent hexadecimal value. |
| AFTER-FIX:REQ-002 | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/components/KeyboardShortcutsModal.jsx` | `src/App.test.jsx` | new | A visible keypad control and documented `h`/`H` shortcut invoke the same conversion action. |
| AFTER-FIX:REQ-003 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Every successful result has the `0x` prefix and uppercase A–F digits. |
| AFTER-FIX:REQ-004 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Blank, zero, negative, fractional, and non-numeric input visibly fail without a converted result. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| AFTER-FIX:AC-001 | conversion-examples | test | `src/App.test.jsx` | primary | exact-local-observed |
| AFTER-FIX:AC-001 | interaction-wiring | inspection | `src/App.jsx` | primary | source-bound |
| AFTER-FIX:AC-002 | invalid-input-cases | test | `src/utils/evaluator.test.js` | primary | exact-local-observed |
| AFTER-FIX:AC-002 | visible-error | visual | `Standard calculator display showing Error after invalid conversion` | primary | source-bound |
| AFTER-FIX:AC-003 | application-test-cases | inspection | `src/App.test.jsx` | primary | source-bound |

## Supporting files

None planned. No new dependency or configuration change is needed.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

JavaScript `Number` could round large integers, so conversion must use exact integer handling.
Loose parsing could admit whitespace, fractions, or numeric prefixes, so validate the entire input.
A failed conversion could leave a prior hexadecimal result visible; replace it atomically with an
error and test the prior-result case. A keyboard binding could collide with an existing shortcut;
confirm `h`/`H` is unused and retain input/select exclusions. A keypad-only change could omit the
keyboard path; exercise both paths.

Rollback is limited to the new helper, handler, keypad control, shortcut documentation, and their
tests. Revert only these feature-specific changes if they disrupt existing behavior; do not change
the existing evaluator, history, or unrelated calculator modes. Run `npm test` and `npm run build`
after repairs.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/after-fix/artifacts/specification/spec.md sha256=cf9462a6ce04efe42e45ecd3d30efc7a5c25c8ee3648c58e007be14507644a75 status=captured projection=approved-summary representation-sha256=sha256:b02f3b7f1fcf9d6eb3eb5e1820060359e1380362f7dd9e98b2f6b53160f27592 brief-sha256=b02f3b7f1fcf9d6eb3eb5e1820060359e1380362f7dd9e98b2f6b53160f27592 expansion=sfref:v1:story:after-fix:98f3efe015bb84382501e412825983f087067c55fe386f5126cc62d958dff8eb -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `after-fix`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/after-fix/artifacts/specification/spec.md`
- Source SHA-256: `a66a290b9f7ab6184680e3fe4959eb134f272b56de28af7ae22e0a5b4536d943`

## Summary from “Agent brief”

Add a decimal-to-hexadecimal conversion operation to the existing calculator for calculator users.
The operation accepts positive base-10 integers only and returns an uppercase hexadecimal value with
the `0x` prefix. Users must be able to invoke it through a visible keypad control and through
keyboard interaction. Blank input, zero, negative values, fractional values, and non-numeric input
must produce a visible error instead of a hexadecimal result. Automated tests must cover successful
conversion, both interaction surfaces, output formatting, and invalid or empty input. Hexadecimal
literals, hexadecimal arithmetic mode, reverse conversion, and conversion of non-positive or
non-integer values are excluded.

## Actors

- **Calculator user:** Enters a decimal value, invokes hexadecimal conversion through the keypad or
  keyboard, and sees either the converted value or an error. No elevated authority is required.

## User scenarios

### S1 — Convert a positive decimal integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the current input is a positive base-10 integer.

- **Given** the user has entered `26`
  **When** the user invokes hexadecimal conversion from the visible keypad control
  **Then** the calculator displays `0x1A`

- **Given** the user has entered `255` with the keyboard
  **When** the user invokes hexadecimal conversion through keyboard interaction
  **Then** the calculator displays `0xFF`

### S2 — Reject input outside the supported domain

**Priority:** P2
**Actor:** Calculator user
**Context:** The current input is not a positive base-10 integer.

- **Given** the current input is `0`, a negative integer, a fraction, or non-numeric text
  **When** the user invokes hexadecimal conversion
  **Then** the calculator displays a visible error and does not display a converted result

- **Given** the current input is empty
  **When** the user invokes hexadecimal conversion
  **Then** the calculator displays a visible error and does not display a converted result

## Failure and empty states

- **Empty:** Invoking hexadecimal conversion without a value displays a visible error and no
  hexadecimal result.
- **Failure:** Any value outside the positive-integer domain displays a visible error and no
  hexadecimal result.
- **Partial:** A conversion is atomic; the calculator must not display a partial or stale
  hexadecimal result when validation or conversion fails.

## Permissions

All calculator users may invoke decimal-to-hexadecimal conversion. The feature introduces no
privileged action, role-based restriction, or alternate unauthorized view.

## Boundary conditions

- The accepted domain is positive base-10 integers: whole numeric values strictly greater than zero.
- `1` is the smallest accepted value and converts to `0x1`.
- Zero, negative values, fractional values, non-numeric values, and blank input are rejected with a
  visible error.
- Successful output begins with `0x`; every hexadecimal digit from `A` through `F` is uppercase.
- Conversion either produces one complete hexadecimal result or an error; it never exposes a
  partial conversion.

## Requirements

- The calculator shall convert a positive base-10 integer to its mathematically equivalent hexadecimal value. *(S1)* [after-fix:REQ-001]
- The calculator shall expose hexadecimal conversion through both a visible keypad control and keyboard interaction. *(S1)* [after-fix:REQ-002]
- The calculator shall format every successful conversion with a `0x` prefix and uppercase hexadecimal digits. *(S1)* [after-fix:REQ-003]
- The calculator shall reject blank input, zero, negative values, fractional values, and non-numeric input with a visible error and no converted result. *(S2)* [after-fix:REQ-004]

- Converting `1`, `26`, and `255` shall produce `0x1`, `0x1A`, and `0xFF`, respectively, with the successful cases exercised through the keypad and keyboard interaction paths. *(S1)* [after-fix:AC-001]
- Attempting conversion with blank input, `0`, a negative integer, a fraction, or non-numeric input shall display an error and shall not display a hexadecimal result. *(S2)* [after-fix:AC-002]
- Automated test cases shall verify successful conversion, both interaction surfaces, uppercase prefixed formatting, and each declared invalid or empty input category. *(S1, S2)* [after-fix:AC-003]

## Non-functional requirements

No additional quantitative latency, throughput, availability, privacy, or retention requirement was
requested. Keyboard interaction is a functional interaction requirement covered by
`after-fix:REQ-002`.

## Assumptions

- Input is interpreted as base-10 because clarification defined the feature as decimal-to-hexadecimal
  conversion.
- Existing calculator behavior remains unchanged outside the new conversion operation.
- The exact keyboard command and control placement may follow existing calculator interaction
  conventions, provided both paths satisfy `after-fix:REQ-002`.

## Out of scope

- Entering hexadecimal literals as operands.
- Performing arithmetic in a hexadecimal calculator mode.
- Converting hexadecimal values back to decimal or another base.
- Converting zero, negative values, or fractional values.
- Changing existing arithmetic, scientific, financial, graphing, or history behavior.

> Exact source expansion: `sfref:v1:story:after-fix:98f3efe015bb84382501e412825983f087067c55fe386f5126cc62d958dff8eb`. Use `singularity-flow show sfref:v1:story:after-fix:98f3efe015bb84382501e412825983f087067c55fe386f5126cc62d958dff8eb --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
