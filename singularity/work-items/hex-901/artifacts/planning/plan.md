<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-901",
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
      "sha256": "f6d490fa65a07c594b319888a211545d4a5a78153a9032fb38760b9770d16b9a",
      "bytes": 8749
    },
    "generation": 1,
    "publishedAt": "2026-10-19T14:12:06.581Z"
  },
  "sourceCommit": "41a4cc6024a10cafae553ca83011e7b320f46b8e",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "1e9ee21b5e311f1c27d56b737efb46c14706df478a45bb6e22dec842f0409d21",
  "sourceSha256": "107f0678a056245582a94a969e2286d070bf6e061284996c8ac6bad867545c7c",
  "template": {
    "path": "singularity/work-items/hex-901/config/wfa/blobs/sha256/e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "sha256": "e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-901/context/inputs-planning-gen1.json",
    "sha256": "0ae4b919149111d75ea6b769a4af068eecaa15e727594c2f01383f0469aa26dc",
    "renderedSha256": "f0bce10beaa339bcfcf3abd0e8d893ad62cdb6d9d6864c376c42cca39890eca4",
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
      "path": "singularity/work-items/hex-901/telemetry/planning-gen1.json",
      "sha256": "e79469a1c80707ac67faf292da13fdf6926c94c488f77069e7f624691abf9105",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26819,
        "estimatedTokens": 6705,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26819,
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
      "startedAt": "2026-10-19T14:12:06.581Z",
      "completedAt": "2026-10-19T14:12:06.581Z",
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

# Implementation plan — hex-901

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a visible `Hex` action to the shared standard keypad and wire it through `App` so it is available in both Standard and Scientific modes. The handler will resolve the current expression or displayed result, accept only a finite positive integer, and render its base-16 digits without a prefix. Keep conversion in the UI action rather than changing the shared expression evaluator, minimizing impact on unrelated arithmetic and formatting. Verify representative positive integers with Vitest and retain a screenshot of 16 displayed as `10`. Principal risks are converting a stale result instead of a pending expression and disturbing the shared keypad layout; integration tests and a visual check cover these. [HEX-901:REQ-001] [HEX-901:AC-001]

## Approach

The current calculator state is held by `App` as `expression` and `result`; `StandardKeypad` is rendered in both Standard mode and, via `ScientificKeypad`, Scientific mode. Add an `onHex` callback to `App` and pass it through the existing keypad props. The callback should evaluate a non-empty pending expression with the existing `evaluateExpression(expression, angleUnit)` API and use its numeric `rawResult`; when there is no pending expression, use the displayed result. Convert only finite positive integer values with `toString(16)`, which emits no `0x` prefix. Do not define new behavior for zero, negative, fractional, empty, or invalid values, as the approved specification leaves those cases outside scope. Keep A-F casing unspecified. This reuses existing state and keypad composition without changing evaluator semantics. [HEX-901:REQ-001]

## Affected surfaces

The interaction is local UI state: `App` owns the expression and displayed result, while the shared `StandardKeypad` renders the action in Standard and Scientific modes. No persisted data, external interface, or evaluator contract changes are planned. The `onHex` callback is the component boundary between the app state and keypad action. [HEX-901:REQ-001]

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Resolve the current numeric value and update the displayed result when the Hex action is invoked; pass the callback to both keypad modes. | [HEX-901:REQ-001] |
| `src/components/StandardKeypad.jsx` | Add the visible Hex button and invoke the supplied callback through the existing button/sound interaction pattern. | [HEX-901:REQ-001] |

## Sequencing

1. In `App`, implement the callback using pending-expression evaluation or the current displayed result, with a finite-positive-integer guard and base-16 conversion. This establishes the behavior before exposing a control. [HEX-901:REQ-001]
2. Add a labeled Hex button to `StandardKeypad` and pass the callback from `App`. Since `ScientificKeypad` already forwards its props to `StandardKeypad`, the action will be available there without a separate scientific implementation. [HEX-901:REQ-001]
3. Add integration coverage for entering and converting 16 and other positive integers, including the no-prefix output; build the app and capture the required 16-to-`10` screenshot for visual review. [HEX-901:REQ-001] [HEX-901:AC-001]

## Test strategy

Use the existing Vitest/Testing Library app integration suite for the user-visible action, with assertions scoped to the calculator display. Exercise both a direct positive integer and a pending expression, and check that displayed output is the corresponding hexadecimal digits without `0x`. The acceptance screenshot is a separate retained visual artifact; image presence alone is not acceptance, so review it against the required displayed state. Do not treat the absence of retained specification-phase test results as a pass or failure; the planning packet establishes no retained test execution. [HEX-901:REQ-001] [HEX-901:AC-001]

Add exactly one row per clause, using its
fully qualified ID (for example, `HEX-901:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `hex-901`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-901:AC-001` | `singularity/work-items/hex-901/evidence/hex-operator-16.png` | `src/App.test.jsx` | evidence | Screenshot shows 16 converted to `10` in the calculator display with no prefix; tests cover positive-integer conversion. |
| `HEX-901:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | Invoking Hex for a positive integer displays its equivalent base-16 representation. |

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
| `HEX-901:AC-001` | `hex-conversion-test` | test | `src/App.test.jsx` | primary | exact-local-observed |
| `HEX-901:AC-001` | `hex-operator-16` | visual | `singularity/work-items/hex-901/evidence/hex-operator-16.png` | primary | source-bound |

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

**Risks and detection.** If a pending expression is ignored, the action could convert a stale display value; integration coverage must convert an expression before pressing Hex and verify the result. The keypad is shared by Standard and Scientific modes, so check both render the action and that its button does not obscure existing controls. Keep the domain guard limited to the specified positive integers; do not introduce an undocumented conversion result for unsupported values. [HEX-901:REQ-001]

**Rollback.** Revert the Hex callback and button wiring in `src/App.jsx` and `src/components/StandardKeypad.jsx`, plus only the corresponding regression assertions in `src/App.test.jsx`. The existing evaluator and arithmetic behavior remain unchanged, so no data migration or persistent-state rollback is needed. [HEX-901:REQ-001]

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/hex-901/artifacts/specification/spec.md sha256=c4a87c2817cf354bef4a31b32497a4261bbc26bf90d423df79fdd1f9658110e2 status=captured projection=approved-summary representation-sha256=sha256:2b1aa00131d1d90effe789cc3b57995c47f13252f2d401f3603a2e6ecd59f711 brief-sha256=2b1aa00131d1d90effe789cc3b57995c47f13252f2d401f3603a2e6ecd59f711 expansion=sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-901`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/hex-901/artifacts/specification/spec.md`
- Source SHA-256: `56fc0199868451deb85a3220e1dcd9ec434664b036c88a2a2e2e2c0f1afbf832`

## Summary from “Agent brief”

Calculator users need to convert the current calculator value to hexadecimal. The confirmed scope
is positive integers; the converted value is displayed without a `0x` prefix. For the required
example, 16 displays as `10`. Acceptance includes tests of positive-integer conversions and a
screenshot of the 16-to-`10` state. The exact control placement and A-F letter casing are unspecified.

## Actors

Who uses this, and what authority does each hold?

- **Calculator user:** invokes the hex operation on the current calculator value. No distinct role
  or permission level was specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert the current positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator has a current positive integer value.

- **Given** the calculator's current value is 16
  **When** the user invokes the hex operator
  **Then** the calculator displays `10`, the hexadecimal representation of 16, without a `0x`
  prefix.

- **Given** the calculator's current value is another positive integer
  **When** the user invokes the hex operator
  **Then** the calculator displays the equivalent base-16 representation of that value.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No conversion result is specified when the calculator has no current positive integer
  value.
- **Failure:** The request specifies no dependency failure or error message for this local
  conversion; no new failure behavior is required.
- **Partial:** No partial-conversion state is specified.

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

No role or permission distinction is specified; the feature adds no authorization requirement.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

The supported conversion input domain is positive integers. Zero, negative values, and fractional
values are outside this request; their conversion behavior is not specified. The converted value
has no `0x` prefix. Letter casing for hexadecimal digits A-F is not specified; either case is
acceptable when the displayed digits represent the same value.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- When the user invokes the hex operator while the calculator's current value is a positive integer,
  display that value's equivalent base-16 representation. *(S1)* [HEX-901:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- Tests verify that positive integer values convert to their equivalent hexadecimal values, and a
  screenshot shows the calculator displaying `10` without a prefix after converting 16. *(S1)*
  [HEX-901:AC-001] [scope:SRI-23836b6af209]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[HEX-901:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

Not applicable: no non-functional target was stated in the pinned Story or clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The phrase “current calculator value” refers to the value currently held by the calculator when
the user invokes the hex operator. The Story and clarification do not specify the exact control
placement or the letter casing of hexadecimal digits.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Conversion of zero, negative, or fractional values; a specific control placement or keyboard
shortcut; and any non-functional targets not stated in the Story.

> Exact source expansion: `sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883`. Use `singularity-flow show sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
