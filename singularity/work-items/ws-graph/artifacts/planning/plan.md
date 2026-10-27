<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "ws-graph",
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
      "sha256": "deed8ef3e7d0b0da54dd530dc58715cac36cc9f9db7f5d1b03088ae61f1cc7dc",
      "bytes": 10849
    },
    "generation": 1,
    "publishedAt": "2026-10-27T04:40:26.085Z"
  },
  "sourceCommit": "364cf0baef1636285e6f28a4666e7c660395fda9",
  "generationCommit": "a94e92cf94ebc6b8b0ec88fef0dc74d2fbea3be2",
  "publicationCommit": "a94e92cf94ebc6b8b0ec88fef0dc74d2fbea3be2",
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "22a0ed933ff17839158bae16a9fba927d5f8c45134c73afb59e5bc92143d9210",
  "template": {
    "path": "singularity/work-items/ws-graph/config/wfa/blobs/sha256/e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "sha256": "e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/ws-graph/context/inputs-planning-gen1.json",
    "sha256": "eeb05e7ac1a7f458b473732114474b6398097ebd1aa472fa343d06f8dad8dd6a",
    "renderedSha256": "753c2ce72cbf9b555890dac1109d41984cc861497c4bd35e47b2267b3a0996b8",
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
      "path": "singularity/work-items/ws-graph/telemetry/planning-gen1.json",
      "sha256": "108074a2e39e75e9a98306ebd16c0a574a72427b5c2f90988d8949ecbd6caf41",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 28432,
        "estimatedTokens": 7108,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 28432,
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
      "startedAt": "2026-10-27T04:40:26.085Z",
      "completedAt": "2026-10-27T04:40:26.085Z",
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

# Implementation plan — ws-graph

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Extend the existing React grapher rather than introduce a second graphing mode. Preserve the current function-plotting path, and add parsing/rendering for the specified implicit equation `x^2 + y^2 = 10`. Rework the grapher surface to follow DOC-001: editable equation list at the left and a prominent labeled Cartesian grid with the circle at the right. Keep the scope to one equation and avoid implementing deferred features such as multiple equations, pan/zoom, persistence, or a new general expression language. Add a Playwright browser test for equation entry and visible axes/grid/circle, plus a retained screenshot for visual review. Existing Vitest and build commands remain useful regression checks; neither current repository discovery nor previous phase evidence establishes a Playwright run.

## Approach

Use the existing `FunctionGrapher` and `mathjs` dependency as the starting point. Inspect and preserve its function-graph behavior while adding a bounded implicit-equation branch for the confirmed circle; do not use dynamic code evaluation. Render semantic axis/grid labels and a traceable curve so the browser test can assert observable output rather than canvas pixels alone. Keep equation input controlled and accessible, and make the graph layout responsive without departing from DOC-001's equation-pane/grid composition. Integrate the grapher through the existing `App` mode switch. Use the existing Vitest conventions for component-level regression if useful, and add Playwright as the browser-level acceptance test runner because the current package has no Playwright dependency, config, or test file. These are implementation decisions, not evidence that the feature or tests already exist.

## Affected surfaces

Modify the existing graphing view and its app-level presentation; keep other calculator modes and their existing behavior intact. Add a browser test and the minimum Playwright setup needed to run it. The paths below are expected scope only; actual changes remain subject to reconciliation `[SPK:CON-031]`.

| Surface | Change | Serves |
|---|---|---|
| `src/components/FunctionGrapher.jsx`, `src/App.jsx`, `src/index.css` | Add single implicit-equation plotting and the reference-style equation/grid layout while preserving the existing grapher integration. | [WS-GRAPH:REQ-001] [WS-GRAPH:REQ-002] |
| `tests/graph.spec.js`, `playwright.config.js` | Add the browser acceptance scenario and its runner configuration. | [WS-GRAPH:AC-001] |

## Sequencing

1. Review the current grapher, app mode integration, and style tokens; retain the existing function-plot behavior while defining the limited implicit-equation rendering path. This establishes the component boundary for [WS-GRAPH:REQ-001] and [WS-GRAPH:REQ-002].
2. Implement the equation pane, labeled coordinate grid, axes, and circle rendering in the existing React surface, using DOC-001 for layout guidance. This provides observable UI for [WS-GRAPH:REQ-001] and [WS-GRAPH:REQ-002].
3. Add the configured Playwright test and run it against the app. It enters the exact equation and checks the editable area, circle, axes, and grid as required by [WS-GRAPH:AC-001].
4. Capture the graph with the equation entered at `singularity/work-items/ws-graph/evidence/graph-tool.png`; inspect it against DOC-001 for the visual portion of [WS-GRAPH:AC-001]. Run the existing build and Vitest suite as regression checks, then report actual results and any environment limitation without treating file presence or command success alone as acceptance.

## Test strategy

Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `WS-GRAPH:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `ws-graph`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `WS-GRAPH:AC-001` | `singularity/work-items/ws-graph/evidence/graph-tool.png` | `tests/graph.spec.js` | evidence | Browser test enters `x^2 + y^2 = 10` and verifies the circle and coordinate axes/grid; retained screenshot shows the equation area, labeled grid, and circle for visual review against DOC-001. |
| `WS-GRAPH:REQ-001` | `src/components/FunctionGrapher.jsx`, `src/App.jsx`, `src/index.css` | `tests/graph.spec.js` | modified | Graphing mode exposes an editable equation field and labeled coordinate grid in the reference-guided layout. |
| `WS-GRAPH:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/graph.spec.js` | modified | Entering the single implicit equation `x^2 + y^2 = 10` displays a circle on the coordinate grid. |

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
| `WS-GRAPH:AC-001` | graph-entry-playwright | test | `tests/graph.spec.js` | primary | module-observed |
| `WS-GRAPH:AC-001` | graph-reference-screenshot | visual | `singularity/work-items/ws-graph/evidence/graph-tool.png` | primary | source-bound |

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

- `package.json` — add the browser-test script and Playwright development dependency.
- `package-lock.json` — lock the selected Playwright dependency and its resolved packages.
- `playwright.config.js` — configure the local app base URL and browser test discovery.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

The principal technical risk is misrendering an implicit equation as a function or producing a visually plausible but incorrect curve. Keep the supported equation behavior bounded to the approved case, use coordinate-grid/axis and circle assertions in the browser test, and compare the retained screenshot with DOC-001. Canvas rendering can be difficult for automated DOM assertions, so expose accessible/semantic graph affordances and use the screenshot contract for visual fidelity rather than relying solely on image-pixel checks. Adding Playwright introduces browser/runtime setup; validate the configured command in the project environment and report missing browser binaries explicitly rather than weakening the test. Avoid changing calculator modes outside grapher integration. If the grapher change regresses existing behavior, revert only the graphing component/style edits and retain unrelated app work; remove Playwright setup only if it cannot be supported and raise the unresolved acceptance gap instead of claiming the required test passed.

## Upstream discrepancies

- **DOC-001 — Screenshot 2026 10 27 at 8.04.15 AM:** The specification's approved narrative says the screenshot could not be read from machine-local storage, while this planning context now supplies a hash-verified image that was inspected. The image visibly shows the equation pane, labeled grid, axes, and circle; use it as layout guidance, not as evidence that the implementation passes. This does not change the approved requirement. **Impact/Clause:** [WS-GRAPH:REQ-001] [WS-GRAPH:AC-001]. **Owner action:** the upstream scope decision remains human-owned and is not recorded by this plan; resolve it with `singularity-flow decision scope ws-graph --item DOC-001 --as <included|existing> --clause WS-GRAPH:REQ-001,WS-GRAPH:AC-001 --reason "<why>"` or `singularity-flow decision scope ws-graph --item DOC-001 --as <excluded|deferred|informative|duplicate|superseded> --reason "<why>"`.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/ws-graph/artifacts/specification/spec.md sha256=8aa12ac5e1e3e7026ce9d99c47ae2f85f8832e1031bcdbbf305985a98e9c3b07 status=captured projection=approved-summary representation-sha256=sha256:8c944495481b59cba3380898f4e0d7b55c5f706e4e16aa683bf3234823d8aed6 brief-sha256=8c944495481b59cba3380898f4e0d7b55c5f706e4e16aa683bf3234823d8aed6 expansion=sfref:v1:story:ws-graph:8307b04a6b338227059f3650220652c6618999ed6c70bf1588549575bfa2579f -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `ws-graph`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/ws-graph/artifacts/specification/spec.md`
- Source SHA-256: `458fd4c63fd907ca762fd30580c9c393e48a085675c6c84f9a6111e6e173f23b`

## Summary from “Agent brief”

An end user needs a well-formatted graph plotting tool in the existing React app. The graphing
view provides an editable equation area and a labeled coordinate grid, and plots the implicit
equation `x^2 + y^2 = 10` as a circle. The attached screenshot is the visual reference for the
equation-and-grid layout. Acceptance requires a screenshot and a Playwright check of entering the
example equation and seeing its plot and coordinate axes/grid. The confirmed initial boundary is
one equation; `y=f(x)`, multiple equations, pan/zoom, and other features not confirmed here are
deferred. No account, persistence, or invalid-input behavior is specified.

## Actors

- **End user:** enters the example equation and views its graph in the app. No separate roles or
  privileged actions are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Plot the reference equation

**Priority:** P1
**Actor:** End user
**Context:** The graphing view is open in the existing React app.

- **Given** the graphing view is open with an editable equation area and labeled coordinate grid,
  **When** the user enters `x^2 + y^2 = 10`,
  **Then** the app plots the equation's circle on the grid.

- **Given** the example equation has been entered and plotted,
  **When** the tool is captured for visual acceptance,
  **Then** the screenshot shows the equation area, labeled coordinate grid, and plotted circle
  in a layout guided by DOC-001.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Behavior before an equation is entered is not specified by the pinned request; the
  acceptance scenario begins with the user entering the example equation.
- **Failure:** Invalid-equation handling and dependency-failure behavior are not specified; this
  specification makes no claim about error messages or recovery.
- **Partial:** No partial-render or partial-input behavior is specified.

## Permissions

Not applicable: the evidence specifies one end-user graphing experience and no roles,
authentication, or privileged operations.

## Boundary conditions

- The confirmed initial scope is one entered equation, including the implicit x/y equation in
  the screenshot.
- Support for `y=f(x)`, multiple equations, and pan/zoom is deferred by the clarification.
- No other expression grammar, numeric limits, timeouts, or performance thresholds are specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The graphing view shall present an editable equation area and a labeled coordinate grid in a
  layout guided by the supplied screenshot. *(S1)* [WS-GRAPH:REQ-001]
- The graphing tool shall accept the single implicit equation `x^2 + y^2 = 10` and display its
  circle on the coordinate grid. *(S1)* [WS-GRAPH:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the tool shall show the equation area, labeled coordinate grid, and plotted
  circle guided by DOC-001; a Playwright test shall enter `x^2 + y^2 = 10` and verify that the
  circle and coordinate axes/grid appear. *(S1)* [WS-GRAPH:AC-001] [scope:SRI-85d903c6a8a4]

## Non-functional requirements

No non-functional requirements or measurable thresholds are stated in the pinned source or
confirmed clarification.

Use governed requirement anchors here too (for example `[WS-GRAPH:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

- The feature is a browser UI within the existing React app, as confirmed in clarification.
- The reference-equation example and the graphing layout are the only required graphing behavior
  established by the current evidence.

## Out of scope

- `y=f(x)` support, multiple simultaneous equations, and pan/zoom are deferred.
- Saving graphs, user accounts, and behavior for invalid equations are not specified.

> Exact source expansion: `sfref:v1:story:ws-graph:8307b04a6b338227059f3650220652c6618999ed6c70bf1588549575bfa2579f`. Use `singularity-flow show sfref:v1:story:ws-graph:8307b04a6b338227059f3650220652c6618999ed6c70bf1588549575bfa2579f --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
