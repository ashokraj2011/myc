<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "myl-graph",
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
      "sha256": "1cffe260951ff1a33f9b5459ac9ab755f3362fc8e34479240f1fc08a8c9d5713",
      "bytes": 9468
    },
    "generation": 1,
    "publishedAt": "2026-11-02T13:17:13.055Z"
  },
  "sourceCommit": "c4be6ba986c93509bd5d30ab93fe8d9c350bad45",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "01d23f89cfb81225417b71ad66c3867676c63290036506c01a1b582f1442a982",
  "template": {
    "path": "singularity/work-items/myl-graph/config/wfa/blobs/sha256/502d705077ebbb399de79a9523b3cb2d377e17ba1fc05acbb43fd106a5c2fd84",
    "sha256": "502d705077ebbb399de79a9523b3cb2d377e17ba1fc05acbb43fd106a5c2fd84",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/myl-graph/context/inputs-planning-gen1.json",
    "sha256": "f3bbc1dfdfe75affec816422148802e0e8da58fc4dadaa8b9e754e07f71d7302",
    "renderedSha256": "7b557f73ec8f65b759c962a9d222c902b1f5af9e265c389ba9bbe286cd6c4fbe",
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
      "path": "singularity/work-items/myl-graph/telemetry/planning-gen1.json",
      "sha256": "61f800dedb34e2b803428e7aab4289a85a9d54953ecc2d52b441e0a89b1eda69",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 27335,
        "estimatedTokens": 6834,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 27335,
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
      "startedAt": "2026-11-02T13:17:13.055Z",
      "completedAt": "2026-11-02T13:17:13.055Z",
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

# Implementation plan — myl-graph

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

The checkout already contains a graphing mode: `App.jsx` routes the grapher mode to
`FunctionGrapher`, which accepts an equation, compiles it with mathjs, and draws finite samples on
a canvas. Preserve this small client-side design and verify it rather than introducing a graphing
service or another rendering library. Add focused component and mode-integration regression tests;
use the existing canvas test stub for deterministic checks, then visually confirm the `sin(x)` plot
in the application. The main risks are expression-evaluation boundaries and canvas behavior that
unit tests cannot visually establish. This plan does not claim that tests or visual acceptance have
already occurred. [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] [MYL-GRAPH:AC-001]

## Approach

Keep graph input and rendering in `src/components/FunctionGrapher.jsx`, and retain the existing
`grapher` mode integration in `src/App.jsx`. The component's mathjs expression compiler receives
only the x-coordinate scope and the canvas renderer samples the compiled function. Add tests around
the public input and rendered graph behavior, plus an App-level test that selects graph mode. This
reuses the existing React, mathjs, canvas, and Vitest patterns with no backend, persistence, or new
dependency. Assumption: supported input remains the expression syntax accepted by the existing
mathjs compiler; the approved specification does not define a broader grammar or x-range controls.
Keep unsupported-expression handling limited to existing behavior because the specification sets
no acceptance requirement for its error messages. [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002]

## Affected surfaces

The change is test-only: add component coverage for the existing equation input and canvas renderer,
and integration coverage for the existing App graph-mode route. No data, API, or persistence
contract changes are planned. Actual changed paths remain subject to implementation reconciliation.

| Surface | Change | Serves |
|---|---|---|
| `src/components/FunctionGrapher.jsx` | Existing equation input and canvas plot are retained and covered by focused regression tests. | [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] [MYL-GRAPH:AC-001] |
| `src/App.jsx` | Existing graph-mode routing is retained and verified through the application UI. | [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] |

## Sequencing

1. Add component regression coverage for entering an equation and drawing a finite `sin(x)` plot
   through the existing canvas context stub; this proves the component-level input and plot path.
2. Add an App integration assertion that selecting grapher mode exposes its equation input and
   canvas; this proves the feature is reachable in the existing application.
3. Run the focused tests and repository checks, then launch the app for visual confirmation of
   `sin(x)` over the displayed x range. Keep visual acceptance separate from automated test results.
   Do not add a prescribed range, equation grammar, or failure UX not established by the approved
   specification. [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] [MYL-GRAPH:AC-001]

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

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test.
The Witness cell holds one backticked value and nothing else. Required assurance holds one word
or stays empty: module-observed or exact-local-observed for a test, declared or source-bound for
an inspection or visual witness. For example (a fenced example is never read as a contract):
```text
| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `ORDER:AC-001` | unit | test | `test/orders.test.js` | primary | module-observed |
| `ORDER:AC-002` | runbook | inspection | `docs/runbook.md` | primary | source-bound |
| `ORDER:AC-003` | screen | visual | `Order confirmation page` | primary | source-bound |
```
-->

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `MYL-GRAPH:AC-001` | sine-render | test | `src/components/FunctionGrapher.test.jsx` | primary | module-observed |
| `MYL-GRAPH:AC-001` | sine-plot | visual | `Function grapher showing the sin(x) plot` | primary | source-bound |

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Canvas mocks can prove that the component issues drawing operations but cannot prove the plot is
visually legible; detect that gap with the planned visual review. Expression input is evaluated by
mathjs, so keep evaluation constrained to the supplied x-variable and do not add arbitrary
JavaScript evaluation or a larger execution scope. If regression coverage exposes a defect, limit
the repair to the grapher surface and retain the existing calculator modes; reverting the focused
test-only change does not require data migration or server rollback. No implementation or test
result is claimed by this plan.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/myl-graph/artifacts/specification/spec.md sha256=a2e305b547b8783840c3ecd21488c9603fced1c3012bc615b3fb915dbb51f0f1 status=captured projection=approved-summary representation-sha256=sha256:780dc210c1420bcb00462fb33e8a24cbeb64effa67a665a5812ab0b8f66a3deb brief-sha256=780dc210c1420bcb00462fb33e8a24cbeb64effa67a665a5812ab0b8f66a3deb expansion=sfref:v1:story:myl-graph:10b24e1d869ca0dfc6be39e300c5136195fc3cdabc5110e675c9198b36cf0a1b -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `myl-graph`
- Producer: `specification` generation 1
- Consumer: `planning`
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

<!-- singularity-flow:inputs:end -->
