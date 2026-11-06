<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-opr2",
  "workType": "spec-driven-standard",
  "phase": "verification",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "qa",
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
      "agentId": "qa"
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
      "filename": "test-evidence.md",
      "mediaType": "text/markdown",
      "sha256": "97aae6059613e19380817eb9b7fbdd52b6517f970d620f3daa9002489d2e3aba",
      "bytes": 4930
    },
    "generation": 1,
    "publishedAt": "2026-11-06T13:50:23.948Z"
  },
  "sourceCommit": "d3bbadac194ed415a1552efb095e71cbe1bc96b5",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "941f398a5fec468916fc77322b77b18f3e9c7cb1423ce74d648a9e2906b74a2a",
  "sourceSha256": "9691c2b1a5ce2dbb46a9db942f9f931dc87fb221d7bcb684773ad21cc7ef8536",
  "template": {
    "path": "singularity/work-items/bin-opr2/config/wfa/blobs/sha256/fdda5ab9e701142bd6d1f12e90b85b4e24dddffb0f4f5d89c5b534bd9137e4e0",
    "sha256": "fdda5ab9e701142bd6d1f12e90b85b4e24dddffb0f4f5d89c5b534bd9137e4e0",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/verification.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/bin-opr2/context/inputs-verification-gen1.json",
    "sha256": "4238ea2346b288db89665cd0297f86aa402be5b90d7a1a608f6394af053f41be",
    "renderedSha256": "2b950cc5912a4099c8790ab0d79e5eab7f1070ea5c2c1da5adc401f319427165",
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
      "path": "singularity/work-items/bin-opr2/telemetry/verification-gen1.json",
      "sha256": "287a4e19ea1c2a90cb2c729358c97f583066c3f712d7b004cf75013953f7041f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 44000,
        "estimatedTokens": 11000,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 44000,
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
      "startedAt": "2026-11-06T13:50:23.948Z",
      "completedAt": "2026-11-06T13:50:23.948Z",
      "agent": "qa",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# bin-opr2 — Verification Evidence

## Agent brief

<!--
Summarize what was verified, the overall verdict, material failures or omissions, residual risk, and
release recommendation for downstream agents. Exact acceptance and negative-test evidence is
preserved separately by the governed projection.
-->

Implementation-generation evidence reports passing browser and unit tests, with source bindings matched to the current source tree. This draft reuses those retained results; no fresh verification-generation run is recorded yet, so publication-time validation remains outstanding. The Playwright acceptance test covers positive and negative whole and fractional values. The retained composite screenshot has a valid human visual review for `BIN-OPR2:AC-001`. No implementation defects are recorded in the supplied evidence. Recommendation: proceed to governed fresh validation; do not treat reused suite counts alone as clause acceptance.

## Commands and environment

- `npm run test:e2e` (implementation generation 1; `playwright-tests`, attempt `TA-f5a99e08689408290e54`, source commit `9d9138dedbddfb1eefae951f7b41928e7c7b616e`, source-tree SHA-256 `91ec53031f1bb2814bfeeba539d6c91049bd0d092049bed53655e4b7231e4e22`): passed, 1 test, 0 failed, 0 skipped. The implementation report says it exercised 42, -42, 10.29, and -10.29. The receipt is retained at `singularity/work-items/bin-opr2/context/code-delivery/tests/attempts/implementation/TA-f5a99e08689408290e54.json`.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm test` (implementation generation 1; `.-node-tests`, attempt `TA-a7a5273abf00b880ba0b`, same source commit and tree): passed, 31 tests, 0 failed, 0 skipped. The implementation report identifies Node 22 as the runtime used. The receipt is retained at `singularity/work-items/bin-opr2/context/code-delivery/tests/attempts/implementation/TA-a7a5273abf00b880ba0b.json`.
- `npm run build`: reported passed in the approved implementation summary (2,836 modules transformed); Vite warned that the minified JavaScript chunk was 886.41 kB. No governed build receipt is included in the retained execution evidence.
- The retained test receipts are implementation-generation evidence, not fresh verification-generation runs. No verification-generation execution is retained at this draft's start.

## Acceptance and specification results

| Clause | Executable test and result | Source binding / visual evidence | Assessment |
|---|---|---|---|
| `BIN-OPR2:REQ-001` | `tests/bin-conversion.spec.js`, retained Playwright attempt `TA-f5a99e08689408290e54`: passed (1/1). | Planned source files: `src/App.jsx` and `src/components/StandardKeypad.jsx`; implementation summary reports `@clause:BIN-OPR2:REQ-001` tags. | Passing test evidence is retained and source-tree binding matched; suite success alone does not establish a clause verdict. |
| `BIN-OPR2:REQ-002` | `tests/bin-conversion.spec.js`, same retained Playwright attempt: reported cases 42, -42, 10.29, and -10.29 passed. | Planned source file: `src/App.jsx`; implementation summary reports `@clause:BIN-OPR2:REQ-002`. | Positive/negative integer and fractional cases are reported; fresh verification execution remains outstanding. |
| `BIN-OPR2:AC-001` | `tests/bin-conversion.spec.js`, tagged `@ac:BIN-OPR2:AC-001`; retained Playwright attempt passed (1/1). | `singularity/work-items/bin-opr2/evidence/bin-conversion-composite.png`; visual review `WIT-001` is valid, satisfies the `conversion-screen` slot, and is bound to the unchanged file SHA-256 `1069b2b80993d12efa244fe58c9da1f16ea0629bfb58d04c44180c05487fde58`. | Playwright and reviewed visual evidence are present. The review satisfies the visual slot; the retained test's suite count alone does not establish the test criterion verdict. |

Fresh verification-generation test execution has not yet been retained. No constitution was pinned for this Story.

## Negative, regression, security, and non-functional checks

- Negative values are covered by the retained Playwright cases `-42` and `-10.29`; no separate malformed-input test is claimed. Values with more than two fractional decimal places are outside the approved input scope, and empty-display behavior is unspecified.
- Regression evidence: retained unit-test receipt `TA-a7a5273abf00b880ba0b` reports 31 passed with no failures or skips. This is implementation-generation evidence; fresh verification execution remains outstanding. The implementation summary also reports a successful production build with the large-chunk warning noted above.
- No security, resilience, accessibility, or other non-functional requirement is stated in the approved specification. No dedicated checks for those areas are claimed here.
- Residual risk: only the specified input domain is covered; the current verification-generation draft has no fresh execution receipt. Recommendation is contingent on governed fresh validation before publication.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/bin-opr2/artifacts/specification/spec.md sha256=efb3ddb29ce77b2bea87b91c897edd6f8f328ae09c172a03e1758795e6591bd4 status=captured projection=approved-summary representation-sha256=sha256:cbd0082399af5de2486f01ccd6c41e767cc1c07ce6e750fa7e7bc5288da02060 brief-sha256=cbd0082399af5de2486f01ccd6c41e767cc1c07ce6e750fa7e7bc5288da02060 expansion=sfref:v1:story:bin-opr2:850d087d8b63a13a645eb3b15ccd8998d8799a6b9a8800838e98d2faf1f0e4a3 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr2`
- Producer: `specification` generation 2
- Consumer: `verification`
- Source: `singularity/work-items/bin-opr2/artifacts/specification/spec.md`
- Source SHA-256: `a416ea26b6f70ce5388c9dd60b1cb3e0c11b4519efb21c9684b905d5280081f7`

## Summary from “Agent brief”

The calculator user needs a button that converts the decimal value currently shown in the
calculator display to its binary representation. Supported inputs are positive and negative whole
numbers and decimal values with up to two fractional decimal places. Negative results use a leading
minus sign before the binary magnitude; fractional results show two binary fractional digits and
truncate remaining bits. Acceptance requires both Playwright test cases and screenshot/visual
evidence. This specification does not authorize changes to unrelated calculator behavior.

## Actors

- **Calculator user:** selects the conversion button for the value currently shown.
- **Test runner:** exercises the conversion flow with Playwright and captures screenshot/visual
  evidence for acceptance.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a whole-number value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a positive or negative whole-number value.

- **Given** a positive or negative whole-number value is visible in the calculator display
  **When** the user selects the conversion button
  **Then** the calculator displays that value in binary, using a leading minus sign followed by
  the binary magnitude for negative values.

### S2 — Convert a decimal value with fractional digits

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a positive or negative decimal value with no more than two
fractional decimal places.

- **Given** a positive or negative decimal value with up to two fractional decimal places is visible
  in the calculator display
  **When** the user selects the conversion button
  **Then** the calculator displays its binary representation, using a leading minus sign followed by
  its binary magnitude for negative values and exactly two binary fractional digits, truncating any
  remaining fractional bits.

### S3 — Verify the conversion

**Priority:** P1
**Actor:** Test runner
**Context:** The conversion behavior is available.

- **Given** the conversion button and supported whole-number and decimal values in the calculator
  display
  **When** a Playwright test exercises the conversions and captures screenshot evidence
  **Then** the test and screenshot/visual evidence show the conversion control and binary results.

## Failure and empty states

- **Empty:** No stored records are part of this feature. Behavior when the display has no value is
  not specified by the Story.
- **Failure:** No dependency failure behavior or error wording is specified.
- **Partial:** No multi-step or persistence behavior is specified; partial completion is not
  applicable to the stated conversion flow.

## Permissions

No feature-specific permission or role restriction is stated. The calculator user may invoke the
conversion button under the application's existing access rules.

## Boundary conditions

Supported values are positive and negative whole numbers and positive and negative decimal values
with up to two fractional decimal places. For negative values, display a leading minus sign followed
by the binary magnitude. For fractional binary results, display exactly two binary fractional
digits and truncate remaining fractional bits. Decimal values with more than two fractional decimal
places are outside the confirmed input scope.

## Requirements

Numbered, testable obligations cite the scenario each serves.

- The calculator provides a button that converts the decimal value currently shown in its display
  and displays that value's binary representation. *(S1, S2)* [BIN-OPR2:REQ-001]
- The conversion supports positive and negative whole numbers and decimal inputs with up to two
  fractional decimal places. Negative values display a leading minus sign followed by the binary
  magnitude; fractional results display exactly two binary fractional digits, truncating remaining
  bits. *(S1, S2)* [BIN-OPR2:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A Playwright test exercises the conversion flow, and screenshot/visual evidence shows the
  conversion control and binary results for the supported whole-number and decimal inputs. This
  covers the Story's “Screenshot playright testcases” acceptance statement. *(S3)*
  [BIN-OPR2:AC-001] [scope:SRI-bfb83cd3d1fd]

## Non-functional requirements

No non-functional requirement is stated in the pinned Story or recorded clarifications.

## Assumptions

- “Calc” means the existing calculator interface; the user confirmed the conversion is initiated by
  a button.
- “Value in display” means the decimal value currently shown when the user activates that button.

## Out of scope

No changes to unrelated calculator operations or additional interfaces are requested. Application
implementation is outside this specification-authoring phase.

> Exact source expansion: `sfref:v1:story:bin-opr2:850d087d8b63a13a645eb3b15ccd8998d8799a6b9a8800838e98d2faf1f0e4a3`. Use `singularity-flow show sfref:v1:story:bin-opr2:850d087d8b63a13a645eb3b15ccd8998d8799a6b9a8800838e98d2faf1f0e4a3 --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/bin-opr2/artifacts/planning/plan.md sha256=c04b38dc494d2cfe4a78673da87c494c76f03ea9797472e71828fefbb7084b50 status=captured projection=approved-summary representation-sha256=sha256:ac029d7aacf2dcb84bda5fe91e18c70e79b2f75ba35199239b211f47e6db32bb brief-sha256=ac029d7aacf2dcb84bda5fe91e18c70e79b2f75ba35199239b211f47e6db32bb expansion=sfref:v1:story:bin-opr2:21a9724cfb4e0a5671c53aa8348c6dc726a149a23c555f8f9e718e619eced632 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr2`
- Producer: `planning` generation 4
- Consumer: `verification`
- Source: `singularity/work-items/bin-opr2/artifacts/planning/plan.md`
- Source SHA-256: `61ebc1f3e930a903cab8267305ef97f3226deec15097d04726b88739c6cb9c0e`

## Summary from “Agent brief”

Add a conversion action to the existing Standard calculator keypad and handle it in `src/App.jsx`
using the current displayed decimal value. Keep the change local to Standard mode; preserve existing
arithmetic, history, keyboard, and other calculator modes. Cover positive/negative integers and
decimals with up to two decimal places in a Playwright browser test. Capture separate whole-number
and decimal browser states, then compose them side by side into one retained image that clearly
shows the conversion control and binary result for both cases. The main risks are
conversion precision/sign errors and adding E2E tooling to a project that currently declares only
Vitest; protect against regressions with focused conversion cases and the existing test/build suite.

## Test strategy

Prove functional behavior in a real browser through Playwright, using whole-number and fractional
inputs with both signs. The visual artifact is separate retained evidence: the test captures it in
runner output, and the implementation step copies the selected capture to the Story evidence path
once. Also run the existing Vitest suite and `npm run build` to detect unrelated calculator
regressions. Add exactly one row per clause, using its
fully qualified ID (for example, `BIN-OPR2:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `bin-opr2`'s Story evidence directory, not product source.
A planned test never saves its capture straight to that path, because every later run would replace
the reviewed file: it saves under its runner's output (for example `test-results/`), and the code
step copies the image to the evidence path once, when it produces the evidence.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `BIN-OPR2:AC-001` | `singularity/work-items/bin-opr2/evidence/bin-conversion-composite.png` | `tests/bin-conversion.spec.js` | evidence | The retained side-by-side composite shows the conversion control and binary output for both a whole-number case and a decimal case exercised by Playwright. |
| `BIN-OPR2:REQ-001` | `src/App.jsx` `src/components/StandardKeypad.jsx` | `tests/bin-conversion.spec.js` | modified | The Standard calculator exposes a button that converts the decimal value currently displayed and shows its binary representation. |
| `BIN-OPR2:REQ-002` | `src/App.jsx` | `tests/bin-conversion.spec.js` | modified | Positive and negative whole and up-to-two-place decimal inputs convert; negatives have a leading minus, and fractional output has exactly two binary digits truncated after that precision. |

## Risks and rollback

Floating-point representation or sign handling could produce an incorrect binary magnitude;
focused positive/negative and fractional boundary cases detect this. Restrict conversion to the
approved decimal domain and avoid modifying the evaluator to reduce impact on existing operations.
The new browser-test tooling may not match the repository's available browser environment; detect
that during the focused Playwright run and report the exact missing prerequisite rather than
weakening the acceptance proof. If the feature regresses existing calculations or creates
unacceptable coupling, revert only the conversion callback/button and its focused test/config
changes, then rerun the existing Vitest suite and build.

> Exact source expansion: `sfref:v1:story:bin-opr2:21a9724cfb4e0a5671c53aa8348c6dc726a149a23c555f8f9e718e619eced632`. Use `singularity-flow show sfref:v1:story:bin-opr2:21a9724cfb4e0a5671c53aa8348c6dc726a149a23c555f8f9e718e619eced632 --section "<heading>"` only when exact wording is needed.

## Approved phase input: implementation

<!-- source=singularity/work-items/bin-opr2/artifacts/implementation/implementation-summary.md sha256=ea592614fa5e62258cc1d1d293823c74a6c7862c209b673d539b58f0ea1a5bcf status=captured projection=approved-summary representation-sha256=sha256:7246d0532d302bb7ddf9449d18b32c54f950a59782f353bc9b6e8919c2797f04 brief-sha256=7246d0532d302bb7ddf9449d18b32c54f950a59782f353bc9b6e8919c2797f04 expansion=sfref:v1:story:bin-opr2:bafbdcfb546cac8f3dcdb33c5586efb118ff08188ce0d2db29b5a9ed0fadf331 -->

# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr2`
- Producer: `implementation` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/bin-opr2/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `b5b44b71b7b7171b21dda2739cb101cdc34c473b1c3e24645cb395f91c829825`

## Summary from “Agent brief”

Added a Standard-mode BIN action that converts the displayed decimal value without changing
other calculator modes or evaluator behavior. Whole-number signs are preserved; fractional values
produce two truncated binary digits. The browser test covers positive and negative whole and
fractional inputs and retained a side-by-side screenshot. Vitest (31 tests), Playwright (1 test),
and the production build passed. The Playwright suite runs independently of the scoped Vitest
command. No application rollout or data migration is required.

## Changed components and decisions

| Surface | Implementation and evidence |
|---|---|
| `src/App.jsx` | `handleBinaryConversion` evaluates the active expression when there is no completed result, converts the magnitude and preserves a negative sign. It carries `@clause:BIN-OPR2:REQ-001` and `@clause:BIN-OPR2:REQ-002`. |
| `src/components/StandardKeypad.jsx` | Adds the accessible “Convert to binary” action, connected to the app callback and tagged `@clause:BIN-OPR2:REQ-001`. |
| `tests/bin-conversion.spec.js` | Playwright drives positive and negative integers and decimals; `@ac:BIN-OPR2:AC-001` identifies the acceptance test. It retains `.sflow/results/playwright/.../bin-conversion-composite.png` during the run, then the selected capture was copied once to `singularity/work-items/bin-opr2/evidence/bin-conversion-composite.png`. |
| `playwright.config.js`, `package.json`, `package-lock.json` | Adds the Playwright runner and E2E command; the Vitest script targets the existing `src/` suite so it does not collect Playwright tests. Playwright output stays under `.sflow/results/`. |

No migration or unrelated calculator behavior changed. The evidence image is the approved visual
artifact for `BIN-OPR2:AC-001`. No implementation deviation was needed.

## Tests and operational notes

- `npm run test:e2e` — passed: 1 Playwright test covering 42, -42, 10.29, and -10.29; captured the two-state composite. `tests/bin-conversion.spec.js` is tagged `@ac:BIN-OPR2:AC-001`.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm test` — passed: 3 Vitest files, 31 tests. Node 22 avoids the recorded Node 26/jsdom localStorage incompatibility.
- `npm run build` — passed: Vite transformed 2,836 modules. Vite emitted a warning for the 886.41 kB minified JavaScript chunk.

Playwright runs separately from Vitest via `npm run test:e2e`; the `npm test` script targets `src/`, preserving the existing unit suite and excluding the new browser test. The configured browser test and build pass locally. Publication-time governed validation remains responsible for the required fresh run. The screenshot provides visual evidence but does not replace human acceptance.

> Exact source expansion: `sfref:v1:story:bin-opr2:bafbdcfb546cac8f3dcdb33c5586efb118ff08188ce0d2db29b5a9ed0fadf331`. Use `singularity-flow show sfref:v1:story:bin-opr2:bafbdcfb546cac8f3dcdb33c5586efb118ff08188ce0d2db29b5a9ed0fadf331 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
