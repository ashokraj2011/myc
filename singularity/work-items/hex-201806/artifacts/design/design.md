<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-201806",
  "workType": "feature",
  "phase": "design",
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
      "filename": "design.md",
      "mediaType": "text/markdown",
      "sha256": "cb964447d7fdd2d20c06299336f23971202a4e7335d69c7301452c7d1acb60eb",
      "bytes": 9855
    },
    "generation": 1,
    "publishedAt": "2026-10-24T23:55:06.119Z"
  },
  "sourceCommit": "abe3da67ecb4e9a0a6590233e36e301bde048467",
  "generationCommit": "5093b4f51440fbe354866ec5cd7983866c5062bf",
  "publicationCommit": "5093b4f51440fbe354866ec5cd7983866c5062bf",
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "47b4dd42591b4b4b5128c000c2a99620ddbeb54b951b04eeb534b1df6dae437b",
  "template": {
    "path": "singularity/work-items/hex-201806/config/wfa/blobs/sha256/8b7455f464a7025efa92942c272a04e3c0a3ab2a4d3eb438703cc14e230bc856",
    "sha256": "8b7455f464a7025efa92942c272a04e3c0a3ab2a4d3eb438703cc14e230bc856",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/feature/design.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-201806/context/inputs-design-gen1.json",
    "sha256": "070e22cd6c66027d85d6080d2acb9bb5fa8c4a6712028c85d6ff90f39dcc707a",
    "renderedSha256": "1ab00c19131a3f31399ee35221e270d1d59cfc799fce751d0e1443081cab38ba",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/hex-201806/context/clarifications-design-gen1.json",
    "sha256": "6440418c734bc27a6d4c4d8b068f79384686a29fe3506df8ea814bb912fac50b",
    "promptSha256": "5b40ce4d97f6a752360754331cb0cbef033f5bd3fccbd10e9d152ac2e6dfc04a",
    "responses": 4,
    "markers": [],
    "recordedAt": "2026-10-24T23:52:47.143Z",
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
      "path": "singularity/work-items/hex-201806/telemetry/design-gen1.json",
      "sha256": "52d1ac8df3d1a76ee9989b050e2ddc483e396d9dc418e532725007cd7d9b5173",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29925,
        "estimatedTokens": 7482,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29925,
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
      "startedAt": "2026-10-24T23:55:06.119Z",
      "completedAt": "2026-10-24T23:55:06.119Z",
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

<!-- singularity-flow:inputs:end -->
