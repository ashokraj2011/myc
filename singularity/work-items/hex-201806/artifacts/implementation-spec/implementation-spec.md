<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-201806",
  "workType": "feature",
  "phase": "implementation-spec",
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
      "filename": "implementation-spec.md",
      "mediaType": "text/markdown",
      "sha256": "fd015bfaf22afcb5a03328d516ed49ccad3ecad07fbe7a7fc9b4636a26f25262",
      "bytes": 10082
    },
    "generation": 1,
    "publishedAt": "2026-10-25T00:27:08.870Z"
  },
  "sourceCommit": "ed36afb09bac30f7a0faacf6f4465232f48a0420",
  "generationCommit": "113e122a2a3ca92aea886e9589bdf6d34d0825ff",
  "publicationCommit": "113e122a2a3ca92aea886e9589bdf6d34d0825ff",
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "47b4dd42591b4b4b5128c000c2a99620ddbeb54b951b04eeb534b1df6dae437b",
  "template": {
    "path": "singularity/work-items/hex-201806/config/wfa/blobs/sha256/775affeb36ab41074d9953109f7459efca860c5d31465c8d5592ad986f311adf",
    "sha256": "775affeb36ab41074d9953109f7459efca860c5d31465c8d5592ad986f311adf",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/feature/implementation-spec.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-201806/context/inputs-implementation-spec-gen1.json",
    "sha256": "127d447d55c7069c5015e6d15b4d636871e293d2cc63583dd6c6316216f88c83",
    "renderedSha256": "f41c59aef8e53b70bf2892737f69cd17739d548d18f78c06bef67ad528bc8551",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/hex-201806/context/clarifications-implementation-spec-gen1.json",
    "sha256": "65b309cea7005fa1043f2606e3d85731420baeaf188d4438193eee632efa3423",
    "promptSha256": "e575b382108f821cb3eec17cdfcc13adf8fe6b76dcb8064c7ff5faab8418ccba",
    "responses": 1,
    "markers": [],
    "recordedAt": "2026-10-25T00:19:07.417Z",
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
      "path": "singularity/work-items/hex-201806/telemetry/implementation-spec-gen1.json",
      "sha256": "7f21b5e7fbf4b8a90603e348b25a9db427f9a00a3f9f39f0f1d6997cfb4ca09f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 48181,
        "estimatedTokens": 12046,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 48181,
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
      "startedAt": "2026-10-25T00:27:08.869Z",
      "completedAt": "2026-10-25T00:27:08.869Z",
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

# hex-201806 — Implementation Specification

## Planned implementation evidence

Add exactly one row for every authoritative clause. Use a fully qualified clause ID. List only exact
repository-relative source and test paths in backticks; do not use directories, globs, module names,
or prose in path cells. For a genuinely non-testable clause, write `not-applicable:` followed by
your concrete reviewed explanation under `Planned tests`; never defer a test or replace an unknown path.

For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, `Expected paths` = `-`, and its exact tests under `Planned tests`.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-201806:AC-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A user can convert a supported positive safe-integer decimal entry and see the equivalent lowercase hexadecimal result without a prefix. |
| `HEX-201806:AC-002` | `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-255.png` | not-applicable: the retained screenshot is assessed through the primary visual verification contract below. | evidence | The screenshot shows the calculator interaction with decimal input 255 and hexadecimal result `ff`. |
| `HEX-201806:AC-003` | `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-test-results.txt` | `src/utils/evaluator.test.js`, `src/App.test.jsx` | evidence | Retained test results show valid conversions and rejection of zero, negative, fractional, non-decimal, and out-of-range values. |
| `HEX-201806:CON-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | The change adds only the requested conversion and its evidence, leaves unrelated calculator behavior and UI unchanged, and covers the Story's “screenshot and test resutls” scope [scope:SRI-a091c0445554]. |
| `HEX-201806:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Positive integer decimal input entered through the existing calculator interaction can be converted to its equivalent base-16 value. |
| `HEX-201806:REQ-002` | `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-test-results.txt` | `src/utils/evaluator.test.js`, `src/App.test.jsx` | evidence | Automated results for the valid, invalid, and boundary cases are retained; the screenshot obligation remains owned by AC-002. |
| `HEX-201806:IFC-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | The shared calculator interaction invokes a strict positive-safe-integer conversion and shows lowercase, unprefixed hexadecimal without changing generic expression evaluation. |
| `HEX-201806:CON-002` | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Invalid input is surfaced without a successful result/history entry; conversion is local, preserves existing settings and arithmetic, and requires no migration or new dependency. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## APIs, schemas, and contracts

The conversion is an additive action in the existing calculator interaction, available in standard and scientific modes through the shared standard keypad. It operates on the current entered decimal value, not on a general expression and not on an additional arithmetic operator. Accept only a complete decimal digit string whose value is an integer from 1 through `Number.MAX_SAFE_INTEGER`, inclusive. Render lowercase hexadecimal digits without a prefix and bypass decimal formatting. For unsupported input (including empty, zero, negative, fractional, expression, non-decimal, and unsafe-integer values), display a clear validation error, do not present a conversion result, and do not record a successful conversion in history. Preserve the existing expression/result display and history representation.

The implementation contract is: the HEX control in either calculator mode sends the current decimal input to a pure conversion helper; success returns the exact lowercase base-16 value and updates the existing expression/result display and history, while invalid input returns a visible error and creates no successful history entry. No schema or persistence contract changes. [HEX-201806:IFC-001]

## File-level implementation plan

- In `src/utils/evaluator.js`, add a pure conversion helper that validates the entire input and safe-integer range before producing the lowercase base-16 result. Keep `evaluateExpression` and `formatNumber` behavior unchanged.
- In `src/App.jsx`, add the conversion handler, update the existing display/result state on success, use the established visible error path on failure, and record history only for successful conversions.
- In `src/components/StandardKeypad.jsx`, add a clearly labeled `HEX` action that invokes a callback supplied by `App`; because `ScientificKeypad` renders this shared keypad, the action is available in both calculator modes.
- In `src/utils/evaluator.test.js`, cover deterministic helper vectors. In `src/App.test.jsx`, cover the standard and scientific interaction, successful display/history behavior, and invalid-input feedback without a successful history entry.
- Retain the screenshot and automated test results at the AC-002 and AC-003 evidence paths above. These are required future evidence, not results already produced by this specification.

## Security, observability, migration, and rollback

### Security and failure behavior

Validate the complete decimal digit string and numeric range before conversion; do not rely on permissive prefix parsing, silently coerce invalid input, or pass the result through decimal formatting. The conversion is local and introduces no network, privileged operation, dependency, or new storage schema. Invalid input must surface a clear error and must not create a successful history entry.

### Observability

No production telemetry is required for this local calculation. Visible validation feedback is the user-facing failure signal. Automated tests must assert both conversion outcomes and rejected-input behavior. Retain actual test output and the representative screenshot at the planned evidence paths; do not treat planned tests, a successful command alone, or file presence as acceptance of the visual result.

### Compatibility, migration, and rollback

Keep the change additive and isolated to the shared keypad action, app interaction handler, and conversion helper. Preserve existing arithmetic evaluation, decimal formatting, keyboard and keypad behavior, calculator history shape, and persisted settings. No data migration or external service change is needed. If regressions occur, remove the `HEX` action, its handler/helper, and associated tests; existing calculations and stored history require no transformation. These security, observability, compatibility, migration, and rollback constraints form the implementation constraint [HEX-201806:CON-002].

### Constitution articles

None: this Story pinned no constitution.

### Upstream discrepancies

None identified. The approved requirements and design agree on the positive-integer conversion and the existing calculator interaction. Their decisions on the supported range, lowercase unprefixed output, invalid-input behavior, representative screenshot, and test vectors are preserved here; no earlier phase is changed.

## Test specification

`src/utils/evaluator.test.js` checks the helper with inputs `1 → 1`, `15 → f`, `16 → 10`, `255 → ff`, and `9007199254740991 → 1fffffffffffff`; it also checks rejection of `0`, `-1`, `1.5`, `abc`, an expression, and `9007199254740992`. Existing evaluator and number-formatting regression assertions remain unchanged. The actual run output is retained as `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-test-results.txt`.

`src/App.test.jsx` verifies HEX-201806:AC-001, HEX-201806:CON-001, and HEX-201806:REQ-001 by entering 255 and invoking `HEX` in standard and scientific modes, then asserting that the display shows 255 and `ff`. It verifies rejected input shows an error and does not add a successful conversion to history. It also confirms the existing arithmetic interaction still works. Retain the same actual test run output at the AC-003 evidence path.

For HEX-201806:AC-002 and HEX-201806:REQ-002, capture and retain a screenshot of the calculator showing the representative successful conversion 255 → `ff` at `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-255.png`. This is a planned verification activity; no screenshot or test run is claimed to exist yet.

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `HEX-201806:AC-002` | `hex-conversion-255` | visual | `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-255.png` | primary | source-bound |
| `HEX-201806:AC-003` | `hex-conversion-test-results` | inspection | `singularity/work-items/hex-201806/evidence/implementation-spec/hex-conversion-test-results.txt` | primary | source-bound |

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=singularity/work-items/hex-201806/artifacts/requirements/requirements.md sha256=5030f0ba4fb62693be53bf34961eef4cfbfec8520604a197f547fc8555ca3b53 status=captured projection=full representation-sha256=sha256:6810656a5c2ba84333e526a9eb2241ce1c1e2a4ebe22e21c6948fa116ebc16fb expansion=sfref:v1:story:hex-201806:959cc6a3ab6cff683f9d84c7160e6b02beb2b8c7b4bd58afba0c03f2425298b9 -->

# hex-201806 — Feature Requirements

## Problem and outcome

Calculator users need to convert decimal numbers to hexadecimal in the existing calculator interaction. The measurable outcome is that a positive integer entered through that interaction can be converted to an equivalent base-16 value. [HEX-201806:REQ-001]

## Scope

The implementation includes conversion of positive integer decimal inputs to their equivalent hexadecimal representation through the existing calculator interaction. The requested screenshot and automated test results are acceptance evidence for this capability, not evidence that has already been produced. Unrelated UI redesign and additional calculator operations are excluded. The requested screenshot and test results are explicitly in scope: provide a screenshot of a successful representative conversion and automated test results for valid inputs and relevant invalid or boundary cases. [HEX-201806:CON-001] [HEX-201806:REQ-002] [scope:SRI-a091c0445554]

## Acceptance criteria

1. For a supported positive integer decimal input, a user can invoke conversion in the existing calculator interaction and see its mathematically equivalent base-16 representation. Verify by exercising representative inputs and comparing the displayed value with the expected hexadecimal value. Letter casing and prefix remain undecided. [HEX-201806:AC-001]
2. Retain a screenshot showing a successful representative positive-integer decimal-to-hexadecimal conversion in the existing calculator interaction. The representative value is deferred; select and record it before treating the screenshot check as executable. [HEX-201806:AC-002]
3. Retain automated test results covering valid positive-integer inputs and relevant invalid or boundary cases. Define concrete vectors and expected invalid/boundary behavior after the deferred decisions below; do not treat this criterion as executable until those are settled. [HEX-201806:AC-003]

## Dependencies, risks, and open questions

**User and evidence:** The evidenced user is a person using the calculator. The pinned Story requests “implement hex operator in calc” and acceptance evidence of “screenshot and test resutls”; the intake clarification established that “hex operator” means decimal-to-base-16 conversion through the existing calculator interaction and confirmed that unrelated UI redesign is out of scope. The requirements-phase clarification further limits the supported domain to positive integers. Sources: pinned Story `singularity/work-items/hex-201806/source.json` and approved intake generation 1.

**Dependencies and assumptions:** No external dependency is identified. The existing calculator interaction is the sole evidenced interface. “Positive integer” defines the supported input domain; no upper numeric limit was specified. Conversion must be mathematically equivalent in base 16, but display casing and prefix are not decided.

**Deferred decisions:** The user explicitly deferred output casing/prefix, invalid-input behavior, and the specific screenshot and automated test examples. These decisions affect exact output assertions, invalid/boundary test expectations, and reproducibility of the requested evidence. Owner: product owner. Resolve before defining concrete test vectors or treating AC-002/AC-003 as executable. Until then, do not invent formatting conventions, error behavior, numeric limits, or test values.

**Risks:** Without the deferred formatting and invalid-input decisions, implementations could differ in visible output or edge-case behavior while appearing to meet the broad conversion outcome. Without a selected representative value and concrete vectors, evidence cannot be reproduced consistently.

## Constitution articles

None: this Story pinned no constitution.

> Exact source expansion: `sfref:v1:story:hex-201806:959cc6a3ab6cff683f9d84c7160e6b02beb2b8c7b4bd58afba0c03f2425298b9`. Use `singularity-flow show sfref:v1:story:hex-201806:959cc6a3ab6cff683f9d84c7160e6b02beb2b8c7b4bd58afba0c03f2425298b9 --section "<heading>"` only when exact wording is needed.

## Approved phase input: design

<!-- source=singularity/work-items/hex-201806/artifacts/design/design.md sha256=5cfbbc5ff4a235375e0b879407fb6259b38ce950e0bc4649add0dcbc6829a427 status=captured projection=full representation-sha256=sha256:cb964447d7fdd2d20c06299336f23971202a4e7335d69c7301452c7d1acb60eb expansion=sfref:v1:story:hex-201806:743c5157e790755105dfa3beb27b19e810adc737adb7cba618539568acce7229 -->

# hex-201806 — Architecture and Design

## Context and constraints

### Approved scope and decisions

The calculator must let a user convert a positive integer decimal input to its mathematically equivalent hexadecimal value through the existing calculator interaction. Keep the change limited to this capability; unrelated redesign and additional calculator operations are excluded. A successful-operation screenshot and automated test results are required acceptance evidence, not evidence already produced. [HEX-201806:REQ-001] [HEX-201806:REQ-002] [HEX-201806:CON-001]

The design checkpoint confirmed these product decisions:

- Accept positive safe integers only: 1 through `Number.MAX_SAFE_INTEGER`; larger values are unsupported and must be rejected.
- Render lowercase hexadecimal digits without a prefix (for example, 255 becomes `ff`).
- Reject invalid inputs with a clear validation message and no conversion result.
- Use 255 → `ff` for the representative screenshot. Cover 1, 15, 16, 255, the maximum supported value, and representative invalid inputs in automated tests.

These decisions settle output formatting and the input boundary for this design; they do not claim implementation or acceptance evidence exists. The current application is a React calculator. `App` owns expression/result state and currently evaluates through `evaluateExpression`; `StandardKeypad` is reused beneath `ScientificKeypad`, while the display shows the current expression and result. The existing evaluator returns `{ result, rawResult, error }` and formats ordinary numbers with grouping/precision rules, so hexadecimal output must not pass through decimal formatting. [HEX-201806:AC-001] [HEX-201806:AC-002] [HEX-201806:AC-003]

### Constraints and assumptions

- Preserve the existing calculator interaction and its other arithmetic behavior. Keep the conversion boundary explicit rather than changing generic decimal formatting or math-expression behavior.
- Input is a decimal positive integer, not a signed, fractional, expression, or arbitrary-precision value. `Number.MAX_SAFE_INTEGER` is the inclusive maximum.
- No external dependency, deployment change, persistent data migration, or new telemetry service is required.
- The repository brief reports `evaluateExpression` as an existing app entry point and Vitest as the test framework. The brief is static analysis, not runtime verification; no test execution or visual review is retained for the current phase.

## Proposed design

### Interaction and conversion contract

Add a clearly labeled `HEX` action to the existing standard calculator controls so it is available in both standard and scientific modes (the scientific keypad already includes the standard keypad). It acts on the current entered decimal input; it does not add a general-purpose calculator operation or alter the expression parser. On success, show the original decimal input as the expression and the converted lowercase hexadecimal value as the result. A subsequent digit entry should follow the existing post-evaluation behavior.

Keep conversion in a small pure evaluator helper with an explicit input/result contract. The app handler passes the current input, then uses the existing result state/display path for success. Validate that the complete input is a decimal digit string representing a safe integer greater than zero; reject empty, zero, signs, fractions, expressions, non-decimal text, and unsafe integers. Do not use permissive `parseInt` behavior that could accept a valid prefix followed by invalid characters. Convert only after validation, using the runtime's base-16 integer conversion and no decimal `formatNumber` step. Return a surfaced validation error through the existing error/result flow; on failure, do not replace the display with a hexadecimal value or add a successful conversion to history. [HEX-201806:AC-001]

### Data flow and ownership

1. The user enters a decimal integer using the existing keypad or keyboard.
2. The `HEX` action invokes the conversion handler owned by `App`.
3. The handler calls the pure conversion helper in `src/utils/evaluator.js`; that helper validates the full input and range before converting.
4. On success, `App` updates expression/result state and records the successful result using the existing history model. The existing `Display` renders it and its copy action can copy the displayed hexadecimal value.
5. On invalid input, the handler surfaces a clear validation message using the existing display/error conventions, does not claim a conversion result, and does not record a successful conversion.

The keypad owns only the button presentation and invokes a passed callback; it does not implement conversion. The evaluator helper owns domain validation and conversion; `App` owns interaction state and history. No persistence schema change is needed because history already stores expression and result strings.

### Verification vectors and evidence

Use these deterministic vectors for the conversion helper and interaction:

| Input | Expected behavior |
|---|---|
| `1` | `1` |
| `15` | `f` |
| `16` | `10` |
| `255` | `ff` |
| `9007199254740991` (`Number.MAX_SAFE_INTEGER`) | `1fffffffffffff` |
| `0` | Reject; show validation message, no hex result |
| `-1` | Reject; show validation message, no hex result |
| `1.5` | Reject; show validation message, no hex result |
| `abc` | Reject; show validation message, no hex result |
| `9007199254740992` | Reject as outside the safe-integer range |

AC-001 is verified through the existing calculator interaction and comparison against these expected values. AC-002 uses the representative UI flow entering 255 and invoking `HEX`, retaining a screenshot that visibly shows 255 and `ff`. AC-003 retains automated results for the listed valid and invalid/boundary vectors and an interaction-level test for successful display and rejected input. These are planned checks; no run or screenshot is asserted here. [HEX-201806:AC-001] [HEX-201806:AC-002] [HEX-201806:AC-003]

## Security, observability, migration, and rollback

### Security and failure behavior

The helper accepts only a complete decimal digit string and checks both positivity and `Number.isSafeInteger` before conversion. This prevents partial parsing and avoids silently converting values whose JavaScript numeric representation may already be imprecise. Invalid input returns a failure through the normal UI path; do not silently coerce it to zero, show a success-shaped fallback, or write it to successful history. No network, storage, clipboard, or privileged operation is introduced.

### Observability

No new production telemetry is justified for this local calculation. Existing visible validation feedback is the user-facing failure signal. Tests should assert both the returned error and the absence of a converted result/history success on rejected values. Evidence should retain the actual test report and representative screenshot in the authorized Story evidence locations; the evidence requested by the Story remains outstanding until produced. [HEX-201806:CON-001] [HEX-201806:AC-002] [HEX-201806:AC-003]

### Compatibility, migration, and rollback

This is an additive calculator action. Existing arithmetic evaluation, decimal formatting, keypad operations, history representation, and persisted settings remain unchanged. No data migration or external service change is required. If the feature causes regressions, remove the `HEX` action and its handler/helper/test additions; existing calculator operations and stored history need no transformation. Keep the change isolated so rollback does not require altering unrelated evaluator behavior.

### Upstream discrepancies

None identified in the approved inputs. The requirements specify positive integer decimal inputs and the intake confirms the existing calculator interaction and evidence scope; the design checkpoint now resolves the former formatting, range, invalid-input, and evidence-example decisions. The approved requirements are immutable and are not amended by this design.

## Alternatives and decisions

### Decisions

- Use an explicit `HEX` action in the shared standard keypad rather than changing the meaning of equals or adding a new mathematical operator to all expressions. This keeps conversion discoverable in both standard and scientific modes and limits impact on the existing expression evaluator. [HEX-201806:REQ-001] [HEX-201806:CON-001]
- Restrict inputs to positive safe integers and reject all other forms. This follows the approved positive-integer domain and the human-confirmed upper bound; arbitrary-precision support is out of scope for this Story.
- Use lowercase output without a prefix, as confirmed at the design checkpoint. [HEX-201806:AC-001]
- Keep conversion separate from `formatNumber`, which groups decimal values and can round floats; using it for base-16 output would violate the selected exact representation.
- Reuse the existing result/display and history model, with explicit failure feedback and no success history entry for invalid input.
- No constitution applies: this Story pinned no constitution.

### Alternatives considered

- **Make hexadecimal a general expression function or parser operator.** Rejected for this increment: it changes generic expression semantics and expands parser/test scope beyond converting the current positive integer input.
- **Convert any finite number, including fractions, signs, or unsafe integers.** Rejected: the approved requirement is positive integers and the user selected safe integers only. Supporting these cases would need additional representation and rounding rules.
- **Reuse decimal `formatNumber` for the output.** Rejected because it is designed for decimal display, adds grouping/precision behavior, and does not define hexadecimal formatting.

> Exact source expansion: `sfref:v1:story:hex-201806:743c5157e790755105dfa3beb27b19e810adc737adb7cba618539568acce7229`. Use `singularity-flow show sfref:v1:story:hex-201806:743c5157e790755105dfa3beb27b19e810adc737adb7cba618539568acce7229 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
