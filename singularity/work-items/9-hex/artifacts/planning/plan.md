<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "9-hex",
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
      "sha256": "4439708923c9e5e2a753b546911acc4cc09a6cb7d5ced7b2b4e29309f76cfaa9",
      "bytes": 8685
    },
    "generation": 1,
    "publishedAt": "2026-10-12T00:00:11.450Z"
  },
  "sourceCommit": "75035789f9490938198ed3cd97c2a5e8be9de594",
  "generationCommit": "e3c9658fba09d121e32774d106df833976510656",
  "publicationCommit": "e3c9658fba09d121e32774d106df833976510656",
  "configSha256": "083d8965c65e8abeeb52bc7c40dd470aa5cdc144f592aea74911d5544b9770be",
  "sourceSha256": "18a1fe1c5ac9e2588fb623096db313fed7c7ec8d008681bdf0731c30aebc0f91",
  "template": {
    "path": "singularity/work-items/9-hex/config/wfa/blobs/sha256/e7a12442437f5454a3d5bf2151de476c87b30b71f54d1226def49bda492d4f7c",
    "sha256": "e7a12442437f5454a3d5bf2151de476c87b30b71f54d1226def49bda492d4f7c",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/9-hex/context/inputs-planning-gen1.json",
    "sha256": "6f010548eec5aa2e145fb7ac8ab16554fa07804755d440356faaafbd7acbea13",
    "renderedSha256": "91841c1f9bad9aa8d82e641b27aae8f9de9330d8a70736853360db51fb12afd4",
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
      "path": "singularity/work-items/9-hex/telemetry/planning-gen1.json",
      "sha256": "9139a57520808cb1a42227da6ca82a20315203d0ba24f408bfbe674f0a23e884",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 22564,
        "estimatedTokens": 5641,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 22564,
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
      "startedAt": "2026-10-12T00:00:11.450Z",
      "completedAt": "2026-10-12T00:00:11.450Z",
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

# Implementation plan — 9-hex

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a dedicated strict decimal-to-hex conversion helper and expose it through a HEX control on the
shared standard keypad, making it available in Standard and Scientific modes. Validate raw input
as canonical unsigned decimal text before conversion; do not route this operation through the
arithmetic expression evaluator. Unit tests cover accepted values and every specified invalid
boundary, UI tests cover the control and `ERR` display, and implementation evidence is retained at
`singularity/work-items/9-hex/evidence/hex-operator.png`. No governed test executions were retained
in the approved specification packet; the checks below are planned, not passed.

## Approach

Implement the conversion in `src/utils/hex.js` as a pure helper. Accept only `0` or a nonzero digit
followed by digits, then require a safe integer from zero through `Number.MAX_SAFE_INTEGER`; return
`ERR` for every other input and uppercase hexadecimal digits without a prefix for valid input.
Keep this validation separate from `evaluateExpression` so the new operator neither evaluates
arithmetic nor changes existing expression behavior. Wire a handler in `src/App.jsx` to the HEX
button in `src/components/StandardKeypad.jsx`; that keypad is also rendered by the existing
Scientific keypad. Test conversion boundaries directly and exercise the visible control through
the app.

## Affected surfaces

The change is confined to the calculator's decimal-to-hex operation, its shared keypad entry point,
and focused unit/UI verification. The existing `ScientificKeypad` reuses `StandardKeypad`, so the
new control is available in both modes without changing that wrapper.

| Surface | Change | Serves |
|---|---|---|
| `src/utils/hex.js` | Add strict decimal input validation and uppercase hexadecimal conversion. | [9-HEX:REQ-001], [9-HEX:REQ-002], [9-HEX:REQ-003] |
| `src/App.jsx`, `src/components/StandardKeypad.jsx` | Wire the HEX action to the calculator result and expose it on the shared keypad. | [9-HEX:REQ-001], [9-HEX:REQ-002], [9-HEX:REQ-003] |
| `src/utils/hex.test.js`, `src/App.test.jsx` | Verify conversion boundaries and visible operator behavior. | [9-HEX:AC-001], [9-HEX:AC-002], [9-HEX:AC-003], [9-HEX:REQ-001], [9-HEX:REQ-002], [9-HEX:REQ-003] |
| `singularity/work-items/9-hex/evidence/hex-operator.png` | Retain a screenshot of the completed operator as implementation evidence. | [9-HEX:AC-004], [9-HEX:REQ-004] |

## Sequencing

1. Add the pure converter and unit tests for canonical inputs, uppercase/no-prefix output, zero,
   the maximum safe integer, malformed forms, and the first value above the limit.
2. Add the App handler and shared-keypad control, then test successful conversion and exact `ERR`
   output through the rendered calculator in Standard and Scientific modes. This completes the
   behavior and UI needed for evidence capture.
3. Capture and attach the screenshot at the planned Story evidence path, then verify the image
   visibly shows the HEX control and a representative successful conversion. No target screenshot
   comparison is required.

## Test strategy

Run the focused tests with `npm test -- src/utils/hex.test.js src/App.test.jsx`. Unit cases must
preserve raw-text validation, including empty input, signs, decimal points, whitespace, letters,
and leading zeroes; UI assertions must verify the displayed result is exactly `ERR` for invalid and
out-of-range values. The screenshot is retained evidence, not a substitute for automated behavior
checks.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [9-HEX:AC-001] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Invoking HEX on `0`, `255`, and `9007199254740991` displays `0`, `FF`, and `1FFFFFFFFFFFFF`, respectively. |
| [9-HEX:AC-002] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Empty input, `-1`, `+1`, `1.5`, whitespace-containing text, alphabetic text, and `01` display exactly `ERR`. |
| [9-HEX:AC-003] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Invoking HEX on `9007199254740992` displays exactly `ERR`. |
| [9-HEX:AC-004] | `singularity/work-items/9-hex/evidence/hex-operator.png` | not-applicable: The retained screenshot is assessed by the primary visual contract below; no executable test proves attachment. | evidence | The attached screenshot visibly documents the completed HEX control and result; no reference-image comparison is required. |
| [9-HEX:REQ-001] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | A valid decimal input is converted to uppercase base-16 digits with no prefix. |
| [9-HEX:REQ-002] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Only canonical unsigned decimal text representing a safe integer from zero through `9007199254740991` is accepted. |
| [9-HEX:REQ-003] | `src/utils/hex.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/hex.test.js`, `src/App.test.jsx` | modified | Empty, syntactically invalid, and out-of-range input displays the literal `ERR`. |
| [9-HEX:REQ-004] | `singularity/work-items/9-hex/evidence/hex-operator.png` | not-applicable: This screenshot evidence obligation is reviewed under the primary visual contract for 9-HEX:AC-004; no independent executable test verifies attachment. | evidence | The completed feature's screenshot is attached as implementation evidence. |

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
| 9-HEX:AC-004 | hex-operator-capture | visual | `standard-mode-255-to-FF` | primary | source-bound |

## Constitution articles

No constitution article IDs were supplied by the approved planning inputs or active clause capsule;
this plan is bound only to the pinned Story source and its approved clauses.

## Risks and rollback

The keypad is shared with Scientific mode, so exposing HEX there is an intentional consequence of
existing component reuse; UI tests should confirm the control works in both modes. Strict raw-text
validation must not be weakened by numeric parsing that would accept signs, whitespace, fractions,
or leading zeroes. The safe-integer check prevents lossy conversion above the specified ceiling.
If the control disrupts keypad layout or existing calculator behavior, revert the new helper,
callback, and button together, retaining unrelated calculator behavior and history. If evidence
was captured, remove or replace only this Story's screenshot after the behavior is corrected.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/9-hex/artifacts/specification/spec.md sha256=c496a4d1d13a7d4d18d21f098923a9d90806359503a407a40c858686caed4be9 status=captured projection=approved-summary representation-sha256=sha256:2e71dc6f4bb111a46b22f08f5d530d271b6f5ce58671c9546397968791f904fe brief-sha256=2e71dc6f4bb111a46b22f08f5d530d271b6f5ce58671c9546397968791f904fe expansion=sfref:v1:story:9-hex:2c9d53bbc57e076f9f597ba71f17da1fb55c8f6a630b129a1094f2380c645347 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `9-hex`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/9-hex/artifacts/specification/spec.md`
- Source SHA-256: `ff50abd4bbd14d621d752439c28a29b977b5e6a1d2c2e4faf417c4852e58d5bf`

## Summary from “Agent brief”

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

## Non-functional requirements

No latency, throughput, accessibility, privacy, or retention targets were supplied for this Story.

## Assumptions

- The operator receives the current calculator value as text and displays its result in the calculator's existing output area.
- The safe-integer maximum is the accepted upper limit, as explicitly confirmed during clarification.

## Out of scope

- Hexadecimal arithmetic or hexadecimal input.
- Changes to unrelated calculator operations or access-control behavior.
- Matching an unprovided reference screenshot; the requested screenshot is completion evidence only.

> Exact source expansion: `sfref:v1:story:9-hex:2c9d53bbc57e076f9f597ba71f17da1fb55c8f6a630b129a1094f2380c645347`. Use `singularity-flow show sfref:v1:story:9-hex:2c9d53bbc57e076f9f597ba71f17da1fb55c8f6a630b129a1094f2380c645347 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
