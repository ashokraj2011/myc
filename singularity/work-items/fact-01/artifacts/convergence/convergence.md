<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "fact-01",
  "workType": "spec-driven-standard",
  "phase": "convergence",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "deterministic",
    "channel": "kernel-generator",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": null,
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
      "code-generator"
    ],
    "source": {
      "kind": "in-place",
      "filename": "convergence.md",
      "mediaType": "text/markdown",
      "sha256": "c290a149531d729188dc04719a4c867204ade2fdfd000ef7d1acdfd15d238903",
      "bytes": 821
    },
    "generation": 1,
    "publishedAt": "2026-10-25T23:18:53.396Z"
  },
  "sourceCommit": "525a893e15da0696e69a8e7c99f5ea16af1a4e78",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "998e7f5318d6f2f94edef4ef6b52c66144001ec736e4a9d6e1d83ba54307da0c",
  "template": {
    "path": "singularity/work-items/fact-01/config/wfa/blobs/sha256/eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "sha256": "eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/convergence.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/fact-01/context/inputs-convergence-gen1.json",
    "sha256": "f256c403f216f35f0fc845063ab55af2e1446f9aabfb00ab92a0cf98590ad0c0",
    "renderedSha256": "8d8a92b83a2265c357dc6744c88f587f135148b854654cde9071245ccdcab0ff",
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
      "path": "singularity/work-items/fact-01/telemetry/convergence-gen1.json",
      "sha256": "277ef52d032aff87e5281281d7755ece8da6b900d2ad2f3a00918630a78cd3dc",
      "status": "not-invoked",
      "models": [],
      "providerCost": null
    }
  ],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Convergence — fact-01

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `1ebc3ea40374310e23b9f439231c27b9d93b3f5ad969278dc3997523f7251e65`
- Reconciliation SHA-256: `fb9abdf45ab908f57b5758ff525877573c8652b2ea005f5b10ca010619885f28`
- Source target: `e1d21081e36b8d239a24413f8f6d3abf3ffc811f`

## Deterministic facts

- No deterministic trace-evidence gaps were found.

## Assisted candidates

- No assisted candidates are bound to this iteration.

## Findings and dispositions

| Finding | Item | Clauses | Disposition | Reason |
|---|---|---|---|---|
| — | — | — | — | No human dispositions recorded. |

## Unresolved blockers

- None.

## Allowed next actions

- `advance-to-verification`


<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/fact-01/artifacts/specification/spec.md sha256=776144012d8db36ba94adce8c3eb8194e8cb31c6bd2f6824ed56a381558d2e74 status=captured projection=approved-summary representation-sha256=sha256:42b39269af791aa7cd043ea4f0501c2f0cde56c4831425e7fe92791a8040dc55 brief-sha256=42b39269af791aa7cd043ea4f0501c2f0cde56c4831425e7fe92791a8040dc55 expansion=sfref:v1:story:fact-01:48cdc511ca1f87c510bd8886a7aebfaecee67a2ecb57b20aa68c6efb058f0600 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `specification` generation 1
- Consumer: `convergence`
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

## Approved phase input: planning

<!-- source=singularity/work-items/fact-01/artifacts/planning/plan.md sha256=21f25ac9b661d768a7d2993e00919ef30c1e2b481f3d90abf2df38f08758619b status=captured projection=approved-summary representation-sha256=sha256:45aba72ef183473409f14b52852417fe22dd7c558b02be3a3b52eba5e1525c46 brief-sha256=45aba72ef183473409f14b52852417fe22dd7c558b02be3a3b52eba5e1525c46 expansion=sfref:v1:story:fact-01:b5ca9d1ea30219c6f73ceaac9d4750f5991ec65af3437db59194995b5700ac06 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `planning` generation 2
- Consumer: `convergence`
- Source: `singularity/work-items/fact-01/artifacts/planning/plan.md`
- Source SHA-256: `b2222c3dfd3a85fe77cbdc5d45c499dda2ff1e8347db8f6676b3e5880cdf405f`

## Summary from “Agent brief”

Add a callable nCr calculation alongside the existing evaluator utilities, then expose it through a focused calculator UI with separate n and r inputs and an explicit calculate action. Keep validation in the callable function so both direct callers and the UI share the same positive-integer and r > n behavior. Verify the function and UI with Vitest, and capture the required representative result as source-bound screenshot evidence. The main risks are input/result precision at large values and ensuring invalid or incomplete inputs never leave a stale result visible.

## Test strategy

Use the unit tests for deterministic function behavior and application-level interaction tests for UI submission and result state. Retain the visual evidence separately; automated test success does not constitute visual acceptance.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `FACT-01:AC-001` | `singularity/work-items/fact-01/evidence/ncr-result.png` | verification: FACT-01:AC-001 | evidence | Screenshot shows n = 5, r = 2 and the displayed result 10. |
| `FACT-01:REQ-001` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | The callable function returns an exact BigInt count; nCr(5, 2) is 10n and nCr(67, 33) is 14226520737620288370n. |
| `FACT-01:REQ-002` | `src/components/CombinationCalculator.jsx` `src/App.jsx` | `src/App.test.jsx` | modified | A user can enter both values, request a calculation, and see the valid result. |
| `FACT-01:REQ-003` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | Positive integer inputs with r > n return 0. |
| `FACT-01:REQ-004` | `src/utils/evaluator.js` `src/components/CombinationCalculator.jsx` | `src/utils/evaluator.test.js` `src/App.test.jsx` | modified | Non-integer, non-positive, or missing values produce no nCr result. |

## Risks and rollback

The callable API will return `BigInt`; callers must not coerce its result to `Number`, and the UI must render the decimal string directly. This preserves exact integer counts without imposing an input-size cap in the feature contract. Very large inputs may still require substantial computation, so use the symmetry-reduced algorithm and avoid duplicating the calculation. Invalid or incomplete submissions can leave stale output visible, so tests must assert that no nCr result is produced in those states. The change is isolated to the new utility behavior and focused UI; rollback can remove the component integration and utility export while retaining existing calculator modes and evaluator behavior.

> Exact source expansion: `sfref:v1:story:fact-01:b5ca9d1ea30219c6f73ceaac9d4750f5991ec65af3437db59194995b5700ac06`. Use `singularity-flow show sfref:v1:story:fact-01:b5ca9d1ea30219c6f73ceaac9d4750f5991ec65af3437db59194995b5700ac06 --section "<heading>"` only when exact wording is needed.

## Approved phase input: implementation

<!-- source=singularity/work-items/fact-01/artifacts/implementation/implementation-summary.md sha256=ea4e7c3c169ba66f62d45c36eab49bfe8e23a8cd68b3be636be5c8c137ee8534 status=captured projection=approved-summary representation-sha256=sha256:c3998e399074e9026f9a699e0dd19c121eb2ea346fa649ecddbde7e496d8cb7f brief-sha256=c3998e399074e9026f9a699e0dd19c121eb2ea346fa649ecddbde7e496d8cb7f expansion=sfref:v1:story:fact-01:67ac76a67dcaa70a704982ba4d31b92ca223cc975c7bd384ba3d8d08f41c041b -->

# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `implementation` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/fact-01/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `bf0cb43b37c587411218ddd10af0033d7b27e5d3cf9af704f040eaefbbbdab40`

## Summary from “Agent brief”

Implemented an exact-integer `nCr` utility and added a Combination mode to ApexCalc. The utility returns a `BigInt`, returns `0n` when r exceeds n, and rejects missing, non-positive, or non-integer inputs. The UI accepts separate n and r values, shows a result only after a valid submission, and clears stale results when either input changes.

Unit and UI tests pass (43 tests across the two focused files), and the production build succeeds. The approved representative case was exercised in the browser and captured at `singularity/work-items/fact-01/evidence/ncr-result.png`. No approved requirement was changed. Central combinations with very large inputs may take substantial time; no input-size limit was introduced.

## Changed components and decisions

`src/utils/evaluator.js` exports `nCr`, validates its inputs, uses symmetry to reduce the exact `BigInt` calculation, and contains `@clause:FACT-01:REQ-001`, `@clause:FACT-01:REQ-003`, and `@clause:FACT-01:REQ-004` rationale comments. `src/components/CombinationCalculator.jsx` implements the two-input form, explicit validation, and result state; its comments bind `FACT-01:REQ-002` and `FACT-01:REQ-004`. `src/App.jsx` provides the Combination action and renders the component; its route comment binds `FACT-01:REQ-002`. Component layout and theme styling are kept within the planned component source file.

`src/utils/evaluator.test.js` covers exact counts, a large exact result, r > n, and invalid values. `src/App.test.jsx` covers the representative user flow and confirms incomplete input clears any prior result; its representative-flow test is tagged `@ac:FACT-01:AC-001`. The planned screenshot evidence was captured at `singularity/work-items/fact-01/evidence/ncr-result.png`. No configuration, migration, dependency manifest, or additional component files were required. The documented `BigInt` return avoids precision loss in the utility and the UI renders its decimal string directly.

## Tests and operational notes

Acceptance evidence: `singularity/work-items/fact-01/evidence/ncr-result.png` was captured from the running application after entering n = 5 and r = 2; it displays 10.

- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 test -- src/App.test.jsx src/utils/evaluator.test.js` — exit 0; 2 test files and 43 tests passed.
- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 run build` — exit 0; Vite production build succeeded. Vite emitted its existing advisory that the main chunk is larger than 500 kB.
- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 run lint` — exit 1; 19 repository-wide ESLint errors remain, including pre-existing findings in `src/App.jsx`, `src/components/Header.jsx`, `src/utils/evaluator.js`, and other untouched files. No lint error was reported in the new CombinationCalculator component.
- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 ci` installed the locked dependencies without changing manifests; npm reported 9 audit findings (2 moderate, 7 high). Dependency remediation was not in scope.

No test configuration or runner changes were made. The UI handles arbitrarily long decimal integer strings, but calculations where both inputs are very large can be expensive. No separate test for screenshot pixels was added; the requested visual evidence is the captured PNG.

> Exact source expansion: `sfref:v1:story:fact-01:67ac76a67dcaa70a704982ba4d31b92ca223cc975c7bd384ba3d8d08f41c041b`. Use `singularity-flow show sfref:v1:story:fact-01:67ac76a67dcaa70a704982ba4d31b92ca223cc975c7bd384ba3d8d08f41c041b --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
