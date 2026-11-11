<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "anu-bin",
  "workType": "spec-driven-standard",
  "phase": "convergence",
  "generation": 1,
  "status": "awaiting_approval",
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
      "sha256": "d306a2298860991bb2071cae184004d88404b596a9e990b196ec28aec25a8b32",
      "bytes": 1074
    },
    "generation": 1,
    "publishedAt": "2026-11-11T08:25:30.691Z"
  },
  "sourceCommit": "7c4c8b3bb7b5d01878363fa8481aa94b2921f5e8",
  "generationCommit": "a68a3c6653befe3935a68af6bf049e9c60eb4103",
  "publicationCommit": "a68a3c6653befe3935a68af6bf049e9c60eb4103",
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "7a8c7d3e229c9c89676bb62972e684b8507486190cc98e73ddececd8305d276c",
  "template": {
    "path": "singularity/work-items/anu-bin/config/wfa/blobs/sha256/eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "sha256": "eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/convergence.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/anu-bin/context/inputs-convergence-gen1.json",
    "sha256": "941b4be983ff53217a1293759b146e3845f4dd9b5dc292d96a322dd71c16a189",
    "renderedSha256": "bfcd15c15c5ade70ddb8c6d393df049e988135827bfc1d38d313a78f060760d0",
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
      "path": "singularity/work-items/anu-bin/telemetry/convergence-gen1.json",
      "sha256": "eb68003a1449f3c4fd9a7a1647c87c54ed54b36e20b2539f33c7cb4d03e1b06e",
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

# Convergence — anu-bin

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `98e992d73cfb6227b1d2f07f976f858c28c9df41d63a7e2bce8ab7389176ffb3`
- Reconciliation SHA-256: `c616be19ef02620ea952fdbf7ae32778ed297c73380dd0cd6961b495a0f62c15`
- Source target: `ee2db2c242df3dfd8edf55d7b713ea22a335b260`

## Deterministic facts

- No deterministic trace-evidence gaps were found.

## Settled by the approved plan

These changed paths no claim cites are ones the approved plan already accounts for, so no person is asked about them again.

- **CF-fcfa04dc67b1** · .nvmrc · PAM-001 · build-configuration: done oke no need to change

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

<!-- source=singularity/work-items/anu-bin/artifacts/specification/spec.md sha256=d0e8306b3bf7a5a8b1e9bbfd17fe8e008a09e6047204d9d9f67d18e456f15553 status=captured projection=approved-summary representation-sha256=sha256:51e7b7b5d82eb9e894c41b2b64b2755e885aab834f2254d983c4d079ae373c73 brief-sha256=51e7b7b5d82eb9e894c41b2b64b2755e885aab834f2254d983c4d079ae373c73 expansion=sfref:v1:story:anu-bin:4ac3353663e3fc577bb1c7883a7aada83e978198d6b0a4a61c1eb70ed585d1ad -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/anu-bin/artifacts/specification/spec.md`
- Source SHA-256: `90beecd2bca59c54fff33b1746c46b629f53413a07475c806f15f13fe3d0e73d`

## Summary from “Agent brief”

Enable a calculator user to convert a decimal value to its binary value. Unit tests are the stated acceptance evidence. The confirmed scope does not define input limits, fractional-value handling, or presentation details; do not assume additional behavior.

## Actors

The calculator user supplies a decimal value and requests its evaluation. No other actor or authority is specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a decimal value in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The user has a decimal value to evaluate.

- **Given** the calculator user supplies a decimal value
  **When** the user evaluates that value in the calculator
  **Then** the calculator provides the value in binary.

## Failure and empty states

The pinned request and clarification do not specify empty-input, conversion-failure, or partial-result behavior. These outcomes remain unspecified.

## Permissions

Not applicable: the Story specifies calculator use and no permission or access-control behavior.

## Boundary conditions

The Story does not define numeric limits, fractional-value handling, or other boundary behavior.

## Requirements

The calculator shall convert a supplied decimal value to its corresponding binary value when evaluated. *(S1)* [ANU-BIN:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- Unit tests shall verify the calculator's decimal-to-binary conversion behavior. *(S1)* [ANU-BIN:AC-001] [scope:SRI-bf17ce947d7f]

## Non-functional requirements

No non-functional requirements are specified by the pinned Story or confirmed clarification.

Use governed requirement anchors here too (for example `[ANU-BIN:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The calculator accepts a decimal value for evaluation. The Story and clarification leave numeric limits, fractional handling, and output presentation unspecified; no behavior for those details is asserted here.

## Out of scope

No additional conversion modes or behaviors are specified. The unspecified numeric and presentation details above are not silently constrained by this specification.

> Exact source expansion: `sfref:v1:story:anu-bin:4ac3353663e3fc577bb1c7883a7aada83e978198d6b0a4a61c1eb70ed585d1ad`. Use `singularity-flow show sfref:v1:story:anu-bin:4ac3353663e3fc577bb1c7883a7aada83e978198d6b0a4a61c1eb70ed585d1ad --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/anu-bin/artifacts/planning/plan.md sha256=f92646d5da0cdc35a07883ac600cf9452166201f8cd78257f07a1ef981093f03 status=captured projection=approved-summary representation-sha256=sha256:ae0a4a8734a9e482d71ef1733e1db8ddf7c515cbb4c55d5c16bfe663effab473 brief-sha256=ae0a4a8734a9e482d71ef1733e1db8ddf7c515cbb4c55d5c16bfe663effab473 expansion=sfref:v1:story:anu-bin:6ea5bedf5799f069761c0487b46985e4f08a5188a5b132a1e48f763a3fbaf389 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `planning` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/anu-bin/artifacts/planning/plan.md`
- Source SHA-256: `5c96d0a6f758d31587173ac6ede7dc0847f49f180290890604c5ce8a7175592a`

## Summary from “Agent brief”

Add an explicit binary-conversion action to the existing Standard calculator. Keep arithmetic
evaluation intact; convert the evaluated numeric result through a focused evaluator utility, then
show the binary value in the existing result display. Verify conversion at the utility boundary
with unit tests and exercise the calculator interaction in the app tests. The approved scope does
not settle fractional-value, range, or presentation details; implementation must avoid inventing
requirements for those cases.

## Test strategy

Prove conversion behavior with unit tests and verify that the calculator's Standard-mode action
surfaces that conversion to the user. Do not assert fractional, range, or formatting requirements
that the approved specification does not define. `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `anu-bin`'s Story evidence directory, not product source.
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
| `ANU-BIN:AC-001` | - | `src/utils/evaluator.test.js` | test-only | Unit tests demonstrate decimal-to-binary conversion behavior. |
| `ANU-BIN:REQ-001` | `src/utils/evaluator.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/evaluator.test.js`, `src/App.test.jsx` | new | A user can invoke conversion in Standard mode and see the resulting binary value. |

## Risks and rollback

Conversion may be confused with ordinary equals or may alter existing result/history behavior;
detect this with regression tests for existing arithmetic and an interaction test that invokes the
distinct conversion action. Numeric limits and fractional conversion are unspecified, so avoid
presenting an implementation choice as an approved contract and keep it isolated in the helper.
If the change regresses calculator behavior, revert the conversion helper and its keypad/App wiring
as one change; existing expression evaluation remains the fallback behavior.

> Exact source expansion: `sfref:v1:story:anu-bin:6ea5bedf5799f069761c0487b46985e4f08a5188a5b132a1e48f763a3fbaf389`. Use `singularity-flow show sfref:v1:story:anu-bin:6ea5bedf5799f069761c0487b46985e4f08a5188a5b132a1e48f763a3fbaf389 --section "<heading>"` only when exact wording is needed.

## Approved phase input: implementation

<!-- source=singularity/work-items/anu-bin/artifacts/implementation/implementation-summary.md sha256=7b05a38a6f8a57bcb71aae15439b1227a2433252eef696ee51b3103206c7b32a status=captured projection=approved-summary representation-sha256=sha256:5ea899e348397cef4d0d2aa4addb09b84008c5224f9b8e371791bbd945565a7e brief-sha256=5ea899e348397cef4d0d2aa4addb09b84008c5224f9b8e371791bbd945565a7e expansion=sfref:v1:story:anu-bin:9df37b93aa6991d5ac12a000cf11e764d212f2cbf6d4b7cf391f1f206d1b34a6 -->

# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `implementation` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/anu-bin/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `357f7b52dae87bf786ebfe027661ff7b6ff9a32a6879214ec81c5f2586ecdc7c`

## Summary from “Agent brief”

Added a distinct BIN action to the Standard keypad. It evaluates the current expression through the existing evaluator, converts its finite numeric result through a focused binary-conversion utility, and presents the binary value in the existing result display; ordinary equals and expression evaluation remain unchanged. Utility and app tests passed in a diagnostic run on Node 22.14.0, and the production build passed. Node 22 was pinned through the approved PAM-001 decision; the publication test run is still required. No dependency manifest was changed.

## Changed components and decisions

Product source changed in `src/utils/evaluator.js` (focused finite-number conversion utility with `@clause:ANU-BIN:REQ-001`), `src/App.jsx` (converts the evaluated expression and updates the existing result display; `@clause:ANU-BIN:REQ-001`), and `src/components/StandardKeypad.jsx` (exposes the distinct BIN action; `@clause:ANU-BIN:REQ-001`). Tests changed in `src/utils/evaluator.test.js` and `src/App.test.jsx`; both contain `@ac:ANU-BIN:AC-001` on the relevant tests. `.nvmrc` pins Node 22 per the recorded PAM-001 decision and is listed as a supporting build-configuration change. No migration or dependency changes were made. The change follows the approved plan's separation between evaluation, UI action, and result display.

## Tests and operational notes

`npm test -- --run src/utils/evaluator.test.js src/App.test.jsx` (cwd: repository root; Node 26.12.0; exit 1): the evaluator test file passed all 15 tests, including the new conversion checks. The App test file's 18 tests, including the new BIN interaction test, failed before test bodies because `localStorage` was undefined in the jsdom environment; no workaround was added. `singularity-flow tests node --work-id anu-bin --phase implementation --node 22` (Node 22.14.0) reported 34 of 34 tests passed. This is diagnostic only, not retained publication evidence; the gate must still run its configured test command. `npm run build` (same cwd; exit 0) produced the production bundle, with Vite's large-chunk advisory. `npm ci` succeeded; npm reported 13 dependency audit findings (6 moderate, 7 high), not investigated or changed in this Story.

> Exact source expansion: `sfref:v1:story:anu-bin:9df37b93aa6991d5ac12a000cf11e764d212f2cbf6d4b7cf391f1f206d1b34a6`. Use `singularity-flow show sfref:v1:story:anu-bin:9df37b93aa6991d5ac12a000cf11e764d212f2cbf6d4b7cf391f1f206d1b34a6 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
