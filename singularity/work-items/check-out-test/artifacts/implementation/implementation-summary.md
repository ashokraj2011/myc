<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "check-out-test",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "developer",
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
      "agentId": "developer"
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
      "filename": "implementation-summary.md",
      "mediaType": "text/markdown",
      "sha256": "b055a8e2b913792abddb598fbe98ff5624f2e6eb2785ecb11d35e638144345fd",
      "bytes": 3595
    },
    "generation": 1,
    "publishedAt": "2026-10-13T03:03:18.128Z"
  },
  "sourceCommit": "0a97fd7be56fd8efa623962a09b906823b0a1c9b",
  "generationCommit": "655aebbfed28f6d06a586487ec402bf2f95c6e1e",
  "publicationCommit": "655aebbfed28f6d06a586487ec402bf2f95c6e1e",
  "configSha256": "a8b6f4a122f2ad38555f4fc4c268f606c36fdd0a845a848fee4e9f05663fe8ac",
  "sourceSha256": "9b90f6aac83a988a04beee0d0c375520608bd50bed5f41bb40a347fe1823ec4c",
  "template": {
    "path": "singularity/work-items/check-out-test/config/wfa/blobs/sha256/f1be0acd9f9a81812cb8703f90046512a1519c0c7cebccd676367c41f037bbde",
    "sha256": "f1be0acd9f9a81812cb8703f90046512a1519c0c7cebccd676367c41f037bbde",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/check-out-test/context/inputs-implementation-gen1.json",
    "sha256": "ad37cc44053504e578039a2191f6d4a0f7e39044f51197b381ae3a8f0fce610d",
    "renderedSha256": "867ceabf09d3cdebb52ec0dd3cdabef7060a922772b2ce81c829f2473be2da29",
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
      "path": "singularity/work-items/check-out-test/telemetry/implementation-gen1.json",
      "sha256": "a9f45f9603faf276427fa8178c1e67b65105944d27ab63efa73ad82df370af1b",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 35861,
        "estimatedTokens": 8966,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 35861,
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
      "startedAt": "2026-10-13T03:03:18.121Z",
      "completedAt": "2026-10-13T03:03:18.121Z",
      "agent": "developer",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# check-out-test — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

Implemented a standard-calculator HEX/DEC display toggle backed by the evaluator's numeric result, keeping expression and canonical decimal state unchanged. Only finite whole-number evaluations enable conversion; editing, clearing, reevaluating, restoring history, or changing calculator mode clears the hexadecimal presentation. Added focused utility and UI regression tests and captured default Classic-theme visual evidence. Focused tests passed (28); the production build succeeded with its existing large-chunk warning. Repository lint remains blocked by existing lint errors, including pre-existing unused imports in touched components. A human visual witness and the upstream screenshot scope decision remain outstanding.

## Implemented outcome

In standard mode, users can switch a finite signed integer result to uppercase hexadecimal with a `0x` prefix and switch back to the exact stored decimal display without changing the expression. The control is visible but disabled before evaluation and for fractional, invalid, error, or non-finite results. It is not rendered in scientific mode.

## Changed components and decisions

`src/App.jsx` retains the evaluator's raw numeric result for eligibility (`@clause:check-out-test:REQ-002`) and toggles only the rendered result (`@clause:check-out-test:REQ-003`, `@clause:check-out-test:REQ-004`). `src/components/Display.jsx` provides the visible standard-mode control (`@clause:check-out-test:REQ-001`, `@clause:check-out-test:REQ-005`). `src/utils/hexadecimal.js` centralizes finite-integer eligibility and signed uppercase formatting. `src/App.test.jsx` and `src/utils/hexadecimal.test.js` cover the planned scenarios and boundaries. No configuration, persistence, or migration changes were needed; no approved deviations were introduced. A tag alone is not proof of behavior.

## Tests and operational notes

The `@ac:check-out-test:AC-001` through `@ac:check-out-test:AC-003` UI tests cover positive/zero conversion, negative toggle-back, pre-evaluation disabled state, and fractional/invalid/error disabled states; utility tests cover finite-integer eligibility and formatting.

- `npm test -- --run src/App.test.jsx src/utils/hexadecimal.test.js` — passed, 2 files / 28 tests.
- `npm run build` — passed; Vite reported its existing >500 kB chunk-size advisory.
- `npm run lint` — failed with 20 repository lint errors across existing files. The touched App and Display files include pre-existing unused React imports; no lint errors were reported in the new utility files.
- Visual evidence: [hex-conversion-default-theme.png](../../evidence/hex-conversion-default-theme.png), captured from this Story checkout in standard mode, Classic theme, after evaluating `200 + 55` and displaying `0xFF`. Human visual acceptance is still required.

The implementation runner handoff was unavailable in the phase entry; no runner configuration was changed. Before approval, a human owning scope accounting must disposition item `SRI-35efa5d9d09b` (“screenshot”); it is not a current implementation blocker. Exact command: `singularity-flow decision scope check-out-test --item SRI-35efa5d9d09b --as <included|existing|excluded|deferred|informative|duplicate|superseded> --reason "<why>"`.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/check-out-test/artifacts/specification/spec.md sha256=22b843d3331d9445b3686e0c39100d03531a95a9357b5d0515fad781dc490f8e status=captured projection=approved-summary representation-sha256=sha256:8bbed25daf531c2d61a97e29fbfd5cdf9b91be88ea732355404fadb6938cc7f8 brief-sha256=8bbed25daf531c2d61a97e29fbfd5cdf9b91be88ea732355404fadb6938cc7f8 expansion=sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `check-out-test`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/check-out-test/artifacts/specification/spec.md`
- Source SHA-256: `83ff715b65e27002381269d3a7812870f9e17754042653e1b1b4fac745e4f18e`

## Summary from “Agent brief”

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

## Non-functional requirements

No quantitative latency, throughput, availability, accessibility, privacy, or retention obligation
was supplied by the pinned Story or clarification. The required visual evidence is specified by
`check-out-test:REQ-005` and `check-out-test:AC-004`; no additional non-functional clause is added.

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

> Exact source expansion: `sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f`. Use `singularity-flow show sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/check-out-test/artifacts/planning/plan.md sha256=745561f23092aed8fa99c2dac1d80e54a836ea88c9f6708ce994ae68ec35edb8 status=captured projection=approved-summary representation-sha256=sha256:f65c6b8663aa4875c0987db81c930428bc14ff1bf97b3d398dffc93dae2c50a2 brief-sha256=f65c6b8663aa4875c0987db81c930428bc14ff1bf97b3d398dffc93dae2c50a2 expansion=sfref:v1:story:check-out-test:60f604d8c3b736109e8df6ff97e5453fe0a95fd271d6e883b26603abe4f317aa -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `check-out-test`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/check-out-test/artifacts/planning/plan.md`
- Source SHA-256: `f571300f6c075b02b8da0c43c66d20d93d537f90f06ab4152174c984f55d63eb`

## Summary from “Agent brief”

Add a standard-mode hexadecimal display toggle without changing evaluation semantics. A small pure
utility will decide whether the latest evaluated decimal result is eligible and will format signed,
uppercase, `0x`-prefixed output. `App` will retain the evaluated decimal value as the source of truth,
reset hexadecimal presentation whenever calculation state changes, and expose conversion only to the
standard `Display`. Component tests will prove the user-visible toggle, disabled states, and expression
preservation; utility tests will cover numeric boundaries; retained default-theme visual evidence will
prove the screenshot obligation. Principal risks are stale hexadecimal presentation after input changes,
accidentally exposing the control in scientific mode, and accepting values that are not finite integers.

## Test strategy

Vitest utility tests will prove formatting and eligibility as pure behavior, while React Testing Library
tests will drive the calculator through its public controls and assert the rendered result, expression,
control availability, and mode boundary. The visual criterion remains a separate primary source-bound
witness: a reviewer must inspect the retained screenshot captured from the default `classic` theme in
standard mode after `200 + 55` is evaluated and converted. Add exactly one row per clause, using its
fully qualified ID (for example, `check-out-test:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `check-out-test`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| [CHECK-OUT-TEST:AC-001] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | Converting evaluated `255` displays `0xFF`, converting `0` displays `0x0`, and the expression is unchanged. |
| [CHECK-OUT-TEST:AC-002] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | Evaluated `-255` displays `-0xFF`; a second activation restores `-255` without changing the expression. |
| [CHECK-OUT-TEST:AC-003] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | The control is unavailable before evaluation and for fractional, invalid, error, and non-finite results, with no result or expression mutation. |
| [CHECK-OUT-TEST:AC-004] | `singularity/work-items/check-out-test/evidence/hex-conversion-default-theme.png` | verification: CHECK-OUT-TEST:AC-004 | evidence | The retained default-theme standard calculator screenshot visibly shows the control and uppercase `0xFF` result. |
| [CHECK-OUT-TEST:REQ-001] | `src/App.jsx` `src/components/Display.jsx` | `src/App.test.jsx` | modified | A labelled hexadecimal conversion control is visible in the standard calculator. |
| [CHECK-OUT-TEST:REQ-002] | `src/utils/hexadecimal.js` `src/App.jsx` `src/components/Display.jsx` | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | modified | Availability exactly follows whether the most recently evaluated result is a finite signed whole number. |
| [CHECK-OUT-TEST:REQ-003] | `src/utils/hexadecimal.js` `src/App.jsx` `src/components/Display.jsx` | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | modified | Activation replaces only the displayed result with signed uppercase prefixed hexadecimal. |
| [CHECK-OUT-TEST:REQ-004] | `src/App.jsx` `src/components/Display.jsx` | `src/App.test.jsx` | modified | Activating the control again restores the canonical decimal result and leaves the expression unchanged. |
| [CHECK-OUT-TEST:REQ-005] | `src/App.jsx` `src/components/Display.jsx` | verification: CHECK-OUT-TEST:AC-004 | modified | In default-theme standard mode, the conversion control and converted result are visually identifiable. |

## Risks and rollback

- **Stale presentation state:** hexadecimal output could survive a new edit or evaluation. Detect with
  transition tests covering digit entry, clear, and re-evaluation; reset the toggle at each canonical
  result transition.
- **Numeric eligibility drift:** string parsing could accept fractions, `Infinity`, or error text.
  Detect with table-driven utility tests and keep all eligibility decisions in the pure helper.
- **Scope leakage:** passing the conversion props to the shared scientific display could expose the
  control outside standard mode. Detect with a mode-switching component test and wire props only in the
  standard branch.
- **Expression/history mutation:** deriving conversion from expression text or overwriting the canonical
  result could change history, memory, or restoration. Detect with expression-preservation and toggle-back
  assertions; keep the evaluator result unchanged and derive display text.
- **Visual mismatch:** the new control may be clipped or ambiguous in the default theme. Detect by reviewing
  the source-bound screenshot at the required viewport before acceptance.

Rollback is a single feature removal: delete `src/utils/hexadecimal.js` and its tests, remove hexadecimal
toggle state/wiring from `src/App.jsx`, remove the control props/markup from `src/components/Display.jsx`,
and remove the feature-specific `src/App.test.jsx` cases. No persisted data or migration requires reversal.

> Exact source expansion: `sfref:v1:story:check-out-test:60f604d8c3b736109e8df6ff97e5453fe0a95fd271d6e883b26603abe4f317aa`. Use `singularity-flow show sfref:v1:story:check-out-test:60f604d8c3b736109e8df6ff97e5453fe0a95fd271d6e883b26603abe4f317aa --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
