<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "myl-graph",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 1,
  "status": "in_progress",
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
      "sha256": "ca1e2fc17b463611d35ed43be0b69b420fb2a9aa7b99d8e8bfce5134c97e4abe",
      "bytes": 3208
    },
    "generation": 1,
    "publishedAt": "2026-11-02T16:50:10.036Z"
  },
  "sourceCommit": "298db1e8a351e8dbad698690d56ba53a82b98c26",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "01d23f89cfb81225417b71ad66c3867676c63290036506c01a1b582f1442a982",
  "template": {
    "path": "singularity/work-items/myl-graph/config/wfa/blobs/sha256/2d1d1dc1ab8e94760cda8df39cf07aef51ef7ce191d76218558d19a6ffcc1a54",
    "sha256": "2d1d1dc1ab8e94760cda8df39cf07aef51ef7ce191d76218558d19a6ffcc1a54",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/myl-graph/context/inputs-implementation-gen1.json",
    "sha256": "06b77c8b7485b1f54adf8ee238793089c5835de74572913512274fc3cdbdd283",
    "renderedSha256": "331a6083c1e024415537a67d02749a8cbb309450a0944c3b8321b93ba93f341f",
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
      "path": "singularity/work-items/myl-graph/telemetry/implementation-gen1.json",
      "sha256": "ba25f154414b46818502ce4c0055786373142af7c2e16b1440446303fa5fd1a1",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30241,
        "estimatedTokens": 7561,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30241,
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
      "startedAt": "2026-11-02T16:50:10.036Z",
      "completedAt": "2026-11-02T16:50:10.036Z",
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

# myl-graph — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

The existing client-side grapher accepts an equation and draws its sampled curve on a canvas. This generation preserves that implementation and adds component and application-mode regression coverage for entering equations and plotting the approved `sin(x)` example. The complete configured test command passed 34 tests across four files after repairing browser storage in the test environment. Vitest already supplies a non-opaque browser origin; setup binds localStorage and sessionStorage from the actual jsdom window. The original test configuration and its command pin are preserved. The specification leaves the x-range unspecified, so the existing default view remains unchanged. Automated canvas assertions do not establish visual acceptance; no visual review is recorded here.

## Implemented outcome

In grapher mode, a person can enter an equation and see its graph. The existing grapher renders the default `sin(x)` over the visible x range and updates the plot when the entered expression changes. No behavior beyond the approved equation-entry and graph-display scope was added.

## Changed components and decisions

The planned test-only disposition is retained: the existing `src/components/FunctionGrapher.jsx` implementation already supplies the equation input and canvas plot, so application logic is unchanged. `src/components/FunctionGrapher.test.jsx` checks the plotted `sin(x)` sample and an updated equation; `src/App.test.jsx` verifies grapher-mode access and equation entry. The acceptance-mapped tests carry `@ac:MYL-GRAPH:AC-001`. `src/test/setup.js` binds storage from `globalThis.jsdom.window`, because this Vitest version aliases `window` to the Node global and omits those storage properties on Node 26. The temporary `vite.config.js` URL override was redundant and has been removed: Vitest's existing default provides `http://localhost:3000/`. Fresh command-pin validation matches the original pin exactly; no test-command acceptance or repinning was performed. No dependency, migration, or deployment changes were made.

## Tests and operational notes

Executed `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json` on Node 26.12.0 with Vitest 4.1.10 and jsdom 29.1.1: passed, four test files, 34 tests, zero failures and zero pending tests. The report covers App (18), FunctionGrapher (2), evaluator (13), and build (1). This run uses jsdom's browser storage and requires no Node localStorage file or shared persistent-storage workaround. This is diagnostic evidence; publication must still run and retain its fresh required test execution. Canvas tests establish drawing coordinates deterministically but do not establish visual legibility, and no visual review or retained visual evidence is claimed. No migration or rollout action is required.

## Constitution articles

None: this Story pinned no constitution.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/myl-graph/artifacts/specification/spec.md sha256=a2e305b547b8783840c3ecd21488c9603fced1c3012bc615b3fb915dbb51f0f1 status=captured projection=approved-summary representation-sha256=sha256:c509873149633d2e967adfee048ceef08486f89a0ac9bc5bf23897611464fb3e brief-sha256=c509873149633d2e967adfee048ceef08486f89a0ac9bc5bf23897611464fb3e expansion=sfref:v1:story:myl-graph:10b24e1d869ca0dfc6be39e300c5136195fc3cdabc5110e675c9198b36cf0a1b -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `myl-graph`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/myl-graph/artifacts/specification/spec.md`
- Source SHA-256: `b0c2adc895438bcfcdc9277589660e88158bcbf519688b87a4bad9013bcf2f19`

## Summary from “Agent brief”

Enable a person using the existing application to provide an equation and see its graph. The confirmed example is plotting `sin(x)` over an x range. The request does not specify equation syntax, range endpoints, limits, or error behavior; do not infer them as acceptance requirements.

## Actors

A person using the application provides an equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Plot an equation supplied to the application

**Priority:** P1
**Actor:** A person using the application
**Context:** The person has an equation they want to plot.

- **Given** the person provides an equation
  **When** they request its graph
  **Then** the application displays a plot of that equation.

- **Given** the person provides `sin(x)` as the equation
  **When** they request its graph
  **Then** the application plots the sine function over an x range.

## Failure and empty states

- **Empty:** No saved graph history or other stored records are requested; initial empty-state behavior is unspecified.
- **Failure:** The request does not define equation-validation or plotting failure behavior, including messages or recovery.
- **Partial:** Partial results or multi-equation behavior are not specified.

## Permissions

Not applicable: the request specifies no roles or permission distinctions.

## Boundary conditions

The request does not specify equation syntax, supported equation classes, x-range endpoints, axis limits, numeric precision, or behavior for unsupported equations. The confirmed sine example is `sin(x)` plotted over an x range; no particular range is prescribed.

## Requirements

- A person can provide an equation to the application for plotting. *(S1)* [MYL-GRAPH:REQ-001]
- For an equation provided by the person, the application displays its graph. *(S1)* [MYL-GRAPH:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For the confirmed example, the application plots `sin(x)` over an x range. *(S1)* [MYL-GRAPH:AC-001] [scope:SRI-f44a7707dbb8]

## Non-functional requirements

None are specified by the pinned request or the recorded clarification.

## Assumptions

The feature is for a person using the existing application. The request and clarification do not establish equation syntax, range endpoints, or additional graphing controls.

## Out of scope

The pinned request establishes no additional exclusions. Saving or sharing graphs, graph styling, multiple-graph behavior, and specific error handling are not requirements in this specification.

> Exact source expansion: `sfref:v1:story:myl-graph:10b24e1d869ca0dfc6be39e300c5136195fc3cdabc5110e675c9198b36cf0a1b`. Use `singularity-flow show sfref:v1:story:myl-graph:10b24e1d869ca0dfc6be39e300c5136195fc3cdabc5110e675c9198b36cf0a1b --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/myl-graph/artifacts/planning/plan.md sha256=a7fb794c8ab83d8cdd7ffe0df405d37def9ee17e8ffe76e147acc1f3702e8559 status=captured projection=approved-summary representation-sha256=sha256:8eecbab297dd9292043a9adb24e1ff70873b1d161350c1ef0794ced598e516e0 brief-sha256=8eecbab297dd9292043a9adb24e1ff70873b1d161350c1ef0794ced598e516e0 expansion=sfref:v1:story:myl-graph:02b00408a45de0feb26addf26638b7f1556f1870f394dd8968c46aa6c471cc31 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `myl-graph`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/myl-graph/artifacts/planning/plan.md`
- Source SHA-256: `66dae854e0d2d904a06402c81e2e9c7bd54f8c5365fbab457b49088f8506ec54`

## Summary from “Agent brief”

The checkout already contains a graphing mode: `App.jsx` routes the grapher mode to
`FunctionGrapher`, which accepts an equation, compiles it with mathjs, and draws finite samples on
a canvas. Preserve this small client-side design and verify it rather than introducing a graphing
service or another rendering library. Add focused component and mode-integration regression tests;
use the existing canvas test stub for deterministic checks, then visually confirm the `sin(x)` plot
in the application. The main risks are expression-evaluation boundaries and canvas behavior that
unit tests cannot visually establish. This plan does not claim that tests or visual acceptance have
already occurred. [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] [MYL-GRAPH:AC-001]

## Test strategy

Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `MYL-GRAPH:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `myl-graph`'s Story evidence directory, not product source.
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
| `MYL-GRAPH:AC-001` | - | `src/components/FunctionGrapher.test.jsx` | test-only | The entered `sin(x)` expression produces a plotted sine trace over the visible x range. |
| `MYL-GRAPH:REQ-001` | - | `src/components/FunctionGrapher.test.jsx`; `src/App.test.jsx` | test-only | A person can enter an equation in the graphing mode reached from the application. |
| `MYL-GRAPH:REQ-002` | - | `src/components/FunctionGrapher.test.jsx`; `src/App.test.jsx` | test-only | The graphing mode renders a plot for the supplied equation. |

## Risks and rollback

Canvas mocks can prove that the component issues drawing operations but cannot prove the plot is
visually legible; detect that gap with the planned visual review. Expression input is evaluated by
mathjs, so keep evaluation constrained to the supplied x-variable and do not add arbitrary
JavaScript evaluation or a larger execution scope. If regression coverage exposes a defect, limit
the repair to the grapher surface and retain the existing calculator modes; reverting the focused
test-only change does not require data migration or server rollback. No implementation or test
result is claimed by this plan.

> Exact source expansion: `sfref:v1:story:myl-graph:02b00408a45de0feb26addf26638b7f1556f1870f394dd8968c46aa6c471cc31`. Use `singularity-flow show sfref:v1:story:myl-graph:02b00408a45de0feb26addf26638b7f1556f1870f394dd8968c46aa6c471cc31 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
