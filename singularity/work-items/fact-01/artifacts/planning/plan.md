<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "fact-01",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 2,
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
      "sha256": "ef7cc7d86f87eac91aa12db93f3aa3618151044ced305aa84b2b38a04385ab72",
      "bytes": 7409
    },
    "generation": 2,
    "publishedAt": "2026-10-25T21:03:23.410Z"
  },
  "sourceCommit": "a625901b339d0513758c8dc6c3b028a3d1dad7f8",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "998e7f5318d6f2f94edef4ef6b52c66144001ec736e4a9d6e1d83ba54307da0c",
  "template": {
    "path": "singularity/work-items/fact-01/config/wfa/blobs/sha256/e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "sha256": "e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 2,
    "path": "singularity/work-items/fact-01/context/inputs-planning-gen2.json",
    "sha256": "1202ce1cc7aa0af028c6f7884c2ff75b0b8f0b9281ec740597afbc8a456eae60",
    "renderedSha256": "ea11482ad52bccbefc81edc323150bd6042cda82751e5547b3eee0cc97eb59c2",
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
      "path": "singularity/work-items/fact-01/telemetry/planning-gen1.json",
      "sha256": "4c4b00bcd570fa752ab181c050bff71ab6a98ff3276d502c21854a048d05b04c",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28040,
        "estimatedTokens": 7010,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28040,
        "omittedSections": 0
      },
      "captureGap": "no-metered-session"
    },
    {
      "generation": 2,
      "path": "singularity/work-items/fact-01/telemetry/planning-gen2.json",
      "sha256": "a3aba47d2bbf448abcefa96638715f226871dfc1ff84d9482aee5273ad3d56d7",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27892,
        "estimatedTokens": 6973,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27892,
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
      "startedAt": "2026-10-25T20:51:35.259Z",
      "completedAt": "2026-10-25T20:51:35.259Z",
      "agent": "architect",
      "generation": 1
    },
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
      "startedAt": "2026-10-25T21:03:23.410Z",
      "completedAt": "2026-10-25T21:03:23.410Z",
      "agent": "architect",
      "generation": 2
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Implementation plan — fact-01

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a callable nCr calculation alongside the existing evaluator utilities, then expose it through a focused calculator UI with separate n and r inputs and an explicit calculate action. Keep validation in the callable function so both direct callers and the UI share the same positive-integer and r > n behavior. Verify the function and UI with Vitest, and capture the required representative result as source-bound screenshot evidence. The main risks are input/result precision at large values and ensuring invalid or incomplete inputs never leave a stale result visible.

## Approach

Implement the combination calculation as a reusable export from `src/utils/evaluator.js`, following the existing utility module and test conventions. Validate that both supplied values are positive integers before calculating; return 0 for valid inputs where r > n. Use `BigInt` for the exact count and return a `BigInt` from the callable function; the UI renders its base-10 string so values beyond JavaScript's safe integer range are not rounded. Parse the UI's integer text directly as `BigInt` after validating its decimal-integer form, and use a symmetry-reduced calculation so the smaller of r and n - r drives the work. Add a focused `CombinationCalculator` component and mount it in the existing calculator application rather than expanding the expression grammar or adding a new application mode. Keep the UI's input state distinct from the displayed result, and clear or withhold the result on invalid or incomplete input. The specification does not define error wording, so use the application's established form feedback pattern without introducing additional behavior.

## Affected surfaces

The callable boundary is the evaluator utility; the UI delegates valid calculation to that same function. No persistence, network contract, or configuration change is required. These planned paths are proposals to be reconciled against the eventual implementation.

| Surface | Change | Serves |
|---|---|---|
| `src/utils/evaluator.js` | Export the reusable nCr function and validate its inputs before returning a count. | [FACT-01:REQ-001] [FACT-01:REQ-003] [FACT-01:REQ-004] |
| `src/components/CombinationCalculator.jsx` | Provide n and r inputs, a calculate action, and a result/invalid-input state. | [FACT-01:REQ-002] [FACT-01:REQ-004] |
| `src/App.jsx` | Render the combination calculator within the existing application. | [FACT-01:REQ-002] |

## Sequencing

1. Implement and unit-test the callable function, including the example, an exact result above `Number.MAX_SAFE_INTEGER` (for example, nCr(67, 33) = 14226520737620288370), r > n, non-integer, non-positive, and missing-input cases. Assert the large result as an exact `BigInt` value. This establishes shared calculation and validation behavior for [FACT-01:REQ-001], [FACT-01:REQ-003], and [FACT-01:REQ-004].
2. Build the focused UI around the shared function and add an application-level interaction test for valid submission and invalid/incomplete inputs. This delivers [FACT-01:REQ-002] without duplicating calculation logic.
3. Run the configured tests, exercise the representative n = 5, r = 2 flow, and retain a screenshot at the planned evidence path for [FACT-01:AC-001].

## Test strategy

Use the unit tests for deterministic function behavior and application-level interaction tests for UI submission and result state. Retain the visual evidence separately; automated test success does not constitute visual acceptance.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `FACT-01:AC-001` | `singularity/work-items/fact-01/evidence/ncr-result.png` | verification: FACT-01:AC-001 | evidence | Screenshot shows n = 5, r = 2 and the displayed result 10. |
| `FACT-01:REQ-001` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | The callable function returns an exact BigInt count; nCr(5, 2) is 10n and nCr(67, 33) is 14226520737620288370n. |
| `FACT-01:REQ-002` | `src/components/CombinationCalculator.jsx` `src/App.jsx` | `src/App.test.jsx` | modified | A user can enter both values, request a calculation, and see the valid result. |
| `FACT-01:REQ-003` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | Positive integer inputs with r > n return 0. |
| `FACT-01:REQ-004` | `src/utils/evaluator.js` `src/components/CombinationCalculator.jsx` | `src/utils/evaluator.test.js` `src/App.test.jsx` | modified | Non-integer, non-positive, or missing values produce no nCr result. |

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
| `FACT-01:AC-001` | `ncr-result` | visual | `singularity/work-items/fact-01/evidence/ncr-result.png` | primary | source-bound |

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

The callable API will return `BigInt`; callers must not coerce its result to `Number`, and the UI must render the decimal string directly. This preserves exact integer counts without imposing an input-size cap in the feature contract. Very large inputs may still require substantial computation, so use the symmetry-reduced algorithm and avoid duplicating the calculation. Invalid or incomplete submissions can leave stale output visible, so tests must assert that no nCr result is produced in those states. The change is isolated to the new utility behavior and focused UI; rollback can remove the component integration and utility export while retaining existing calculator modes and evaluator behavior.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/fact-01/artifacts/specification/spec.md sha256=776144012d8db36ba94adce8c3eb8194e8cb31c6bd2f6824ed56a381558d2e74 status=captured projection=approved-summary representation-sha256=sha256:f4f1234e847ce7e3d05b9a4e6bbd15ed6927effa8bcf01f7637565d02685a8fe brief-sha256=f4f1234e847ce7e3d05b9a4e6bbd15ed6927effa8bcf01f7637565d02685a8fe expansion=sfref:v1:story:fact-01:48cdc511ca1f87c510bd8886a7aebfaecee67a2ecb57b20aa68c6efb058f0600 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/fact-01/artifacts/specification/spec.md`
- Source SHA-256: `e0e8f7a89aaab0976c281ab2752a49b318bfbb7b7552afb08dad7c8f5bad54f0`

## Summary from “Agent brief”

Add an nCr calculation function and expose it through the calculator UI. For positive integer inputs n and r, calculate the number of ways to choose r items from n; return 0 when r > n, and reject non-integer or non-positive inputs. A screenshot must show a representative input and its correct result, such as 5 choose 2 = 10. No new controls, wording, roles, or non-functional constraints are specified.

## Actors

Not applicable: the Story specifies no roles or authorization; the feature is for calculator users.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Calculate a combination in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user wants to count selections of r items from n.

- **Given** the user supplies n = 5 and r = 2 through the calculator UI
  **When** the user requests an nCr calculation
  **Then** the UI displays the result 10.

- **Given** positive integer inputs n and r with r <= n
  **When** the user requests an nCr calculation
  **Then** the callable function returns the number of ways to choose r items from n.

### S2 — Handle input boundaries

**Priority:** P2

- **Given** positive integer inputs with r > n
  **When** the user requests an nCr calculation
  **Then** the function returns 0.

- **Given** either input is not an integer or is not positive
  **When** the user requests an nCr calculation
  **Then** the input is rejected and no nCr result is produced.

- **Given** n or r has not been supplied
  **When** the user requests an nCr calculation
  **Then** no nCr result is produced until both inputs are supplied as positive integers.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No result is produced until both n and r are supplied as positive integers.
- **Failure:** Non-integer and non-positive inputs are rejected without producing an nCr result; no particular error wording is specified.
- **Partial:** Not applicable: the Story specifies a single calculation and no partial or external operation.

## Permissions

Not applicable: no role-based permissions or restricted actions are specified.

## Boundary conditions

n and r must be positive integers. If r <= n, the function returns the combination count; if r > n, it returns 0. Non-integer and non-positive inputs are rejected. No maximum input size or other numeric limit is specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- For positive integer n and r where r <= n, the callable nCr function returns the integer count of ways to choose r items from n; for example, nCr(5, 2) returns 10. *(S1)* [FACT-01:REQ-001]
- The calculator UI lets a user supply n and r and request an nCr calculation, then displays the computed result for valid inputs. *(S1)* [FACT-01:REQ-002]
- The function returns 0 for positive integer inputs where r > n. *(S2)* [FACT-01:REQ-003]
- The function rejects inputs where either value is not an integer or is not positive without producing an nCr result; no result is produced until both inputs are supplied. *(S2)* [FACT-01:REQ-004]

Acceptance criteria use the same stable, namespaced form:

- A screenshot shows the calculator UI with a representative nCr input and its correct output, such as n = 5, r = 2, result = 10. [scope:SRI-35efa5d9d09b] *(S1)* [FACT-01:AC-001]

## Non-functional requirements

Not applicable: the pinned request and clarification specify no non-functional requirements.

Use governed requirement anchors here too (for example `[FACT-01:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The request's nCr notation means choosing r items from n items. The function and calculator UI are part of the requested feature; exact UI controls and error wording are not specified.

## Out of scope

No additional calculator features, APIs, roles, or constraints beyond the nCr function, UI exposure, positive-integer validation, r > n behavior, and screenshot acceptance are in scope.

> Exact source expansion: `sfref:v1:story:fact-01:48cdc511ca1f87c510bd8886a7aebfaecee67a2ecb57b20aa68c6efb058f0600`. Use `singularity-flow show sfref:v1:story:fact-01:48cdc511ca1f87c510bd8886a7aebfaecee67a2ecb57b20aa68c6efb058f0600 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
