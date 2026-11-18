<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-grapj",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 0,
  "status": "in_progress",
  "generatedBy": null,
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "legacy-unspecified",
    "channel": "legacy",
    "governedAgentContext": null,
    "kernelModel": {
      "invoked": false,
      "status": "unavailable",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "source": null
  },
  "sourceCommit": null,
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "b8be8eefc29f357791638bbb726ea7c65cf83db480b10f325b73db73e444c8f1",
  "sourceSha256": "48c9e3980f4a2f393670922524978e4451f1f4c9ad586cc457eeb7f2ad87898d",
  "template": {
    "path": "singularity/work-items/new-grapj/config/wfa/blobs/sha256/ba0749ab3997579949fc836a839af6606f995c2012a90b410597ebadf211298d",
    "sha256": "ba0749ab3997579949fc836a839af6606f995c2012a90b410597ebadf211298d",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/new-grapj/context/inputs-implementation-gen1.json",
    "sha256": "7b69ce7bbc6dce6398440cc014fd23e7f33813b0d86503e714f40fd16811051b",
    "renderedSha256": "3f6420a91770b317377de9cce19de06ca1870d46e797c53ec310dccfe8e66fba",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# new-grapj — Implementation Summary

## Agent brief

<!-- sflow:guidance Summarize the implemented outcome, consequential decisions, changed surfaces, validation result, remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based; the detailed changed-components and test sections are preserved separately. -->

Implemented the graphing workspace while preserving the existing calculator modes. The workspace plots editable `y=f(x)` expressions and a parametrically rendered radius-6 circle on a labeled Cartesian grid, with the approved expression panel and controls. The Playwright acceptance test measures the rendered circle against grid-derived unit spacing. Vitest, Playwright, build, and targeted lint checks pass on Node 22.14.0. The required human visual review for `NEW-GRAPJ:AC-002` is still outstanding; no visual acceptance is claimed. The build retains its large-chunk warning, and Node 26.12.0 is known to break existing `localStorage` tests; pinning Node 22 requires the person's `/sf-decide` choice.

## Implemented outcome

Grapher mode now includes an editable expression list, a default `sin(x)` plot, a visible circle entry for `x² + y² = 36`, labeled axes and grid, and the specified visible graph controls. The graph-only shell is wider than other calculator modes; the expression panel can collapse and the canvas redraws when its layout changes. The circle is drawn in the same Cartesian coordinate transform as the grid.

## Changed components and decisions

- [src/components/FunctionGrapher.jsx](../../../../../src/components/FunctionGrapher.jsx) preserves function plotting and draws the parametric circle; it carries `NEW-GRAPJ:REQ-001`, `NEW-GRAPJ:REQ-002`, `NEW-GRAPJ:REQ-003`, and `NEW-GRAPJ:AC-002` source bindings.
- [src/App.jsx](../../../../../src/App.jsx) widens the shell only in Grapher mode and carries the `NEW-GRAPJ:REQ-003` and `NEW-GRAPJ:AC-002` bindings.
- [src/index.css](../../../../../src/index.css) styles the expression list, graph, controls, and responsive layout, with `NEW-GRAPJ:REQ-003` and `NEW-GRAPJ:AC-002` bindings.
- [e2e/graphing.spec.js](../../../../../e2e/graphing.spec.js) contains the `@ac:NEW-GRAPJ:AC-001` real-browser test for plotted function pixels, visible controls, and circle geometry relative to the rendered grid.
- [package.json](../../../../../package.json), [package-lock.json](../../../../../package-lock.json), and [playwright.config.js](../../../../../playwright.config.js) provide the isolated Playwright command, browser dependency, and generated-output location. `npm test` remains scoped to `src` so Vitest does not collect the browser test. Not applicable: these are supporting test-tooling changes; no approved clause claims configuration.

## Tests and operational notes

- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm test` — passed; 3 files, 31 tests.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run test:e2e` — passed; 1 Playwright test, tagged `@ac:NEW-GRAPJ:AC-001`.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run build` — passed; Vite reports a 890.15 kB minified JavaScript chunk, above its 500 kB warning threshold.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx eslint src/components/FunctionGrapher.jsx e2e/graphing.spec.js playwright.config.js` — passed. Linting `src/App.jsx` separately still reports the pre-existing unused default `React` import and unused caught variable `e`; neither was changed for this task.
- Visual acceptance (`NEW-GRAPJ:AC-002`) remains for human review; the Playwright test does not substitute for it. Existing tests require Node 22.14.0 in this environment; no `.nvmrc` was added. The step's runner must use Node 22 or the person must decide whether to pin it via `/sf-decide`.
- `npm ci` reported 15 audit findings (4 moderate, 11 high); they were not investigated or remediated in this graph-plotter change.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/new-grapj/artifacts/specification/spec.md sha256=5fb949d7c74819bb40a8219a5a436c6137014d1e257734a39e817a83beee93e7 status=captured projection=approved-summary representation-sha256=sha256:a274e90c863c7fab22023e41a81ac63e957086a10dfd32caffccde79707a1f68 brief-sha256=a274e90c863c7fab22023e41a81ac63e957086a10dfd32caffccde79707a1f68 expansion=sfref:v1:story:new-grapj:787e62a58d49bfde7d6101d11d82c63e3e246cd049a6d7f2388215ce0010c4e9 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-grapj`
- Producer: `specification` generation 2
- Consumer: `implementation`
- Source: `singularity/work-items/new-grapj/artifacts/specification/spec.md`
- Source SHA-256: `16789852f74654e9bf4642f1ec2114bbd00d591bd555f7e5f20a7e399d2030d1`

## Summary from “Agent brief”

Build a 2D Cartesian function plotter for an application user. It renders requested mathematical functions and includes the required circle centered at the origin with radius 6 units. A Playwright test verifies that circle. The supplied reference defines structural visual expectations: an expression list on the left, a Cartesian grid with labeled axes on the right, and visible graph controls. Pixel-identical styling is not required.

## Actors

Application user: requests a function plot. No distinct roles or permission authority are specified.

## User scenarios

### S1 — Plot a mathematical function

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a mathematical function plot
  **Then** the plotter renders the function in a two-dimensional Cartesian coordinate plane.

### S2 — Plot and verify the specified circle

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a circle centered at the origin with radius 6 units
  **Then** the rendered graph represents the circle `x² + y² = 36`.

- **Given** the circle plot is available
  **When** the specified Playwright test checks it
  **Then** the test verifies that the circle is centered at the origin and has radius 6 units.

### S3 — Use the referenced graphing layout

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the graphing workspace is displayed
  **Then** an expression list appears on the left and a Cartesian grid with labeled axes appears on the right, alongside visible add, undo, redo, settings, panel-collapse, graph-tool, zoom-in, and zoom-out controls; pixel-identical styling is not required.

## Failure and empty states

- **Empty:** No empty-state behavior is specified by the pinned request.
- **Failure:** No failure behavior is specified by the pinned request.
- **Partial:** No partial-result behavior is specified by the pinned request.

## Permissions

Not applicable: the request identifies an application user and specifies no distinct roles or permission controls.

## Boundary conditions

The only specified numeric boundary is a circle of radius 6 units centered at the origin. No other domain, range, count, precision, or timeout is specified.

## Requirements

- The application shall render requested mathematical functions in a two-dimensional Cartesian coordinate plane. *(S1)* [NEW-GRAPJ:REQ-001]
- The plotter shall render a circle centered at `(0,0)` with radius 6 units, represented by `x² + y² = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [NEW-GRAPJ:REQ-002]
- The graphing workspace shall show an expression list on the left and a Cartesian grid with labeled axes on the right, along with visible add, undo, redo, settings, panel-collapse, graph-tool, zoom-in, and zoom-out controls; pixel-identical styling is not required. *(S3)* [NEW-GRAPJ:REQ-003]

- A Playwright test shall verify that the rendered circle is centered at the origin and has radius 6 units. *(S2)* [NEW-GRAPJ:AC-001]
- Visual acceptance shall confirm the workspace structure and visible controls in `NEW-GRAPJ:REQ-003`. *(S3)* [NEW-GRAPJ:AC-002]

## Non-functional requirements

None stated in the pinned request or clarification.

## Assumptions

The plotter accepts a user request to plot a mathematical function. The pinned request and clarification do not define its input syntax or behavior for the visible controls.

## Out of scope

Pixel-identical styling, specific input syntax, control behavior beyond their visible presence, additional plot types, and unrequested numeric or non-functional limits are not defined by this specification.

> Exact source expansion: `sfref:v1:story:new-grapj:787e62a58d49bfde7d6101d11d82c63e3e246cd049a6d7f2388215ce0010c4e9`. Use `singularity-flow show sfref:v1:story:new-grapj:787e62a58d49bfde7d6101d11d82c63e3e246cd049a6d7f2388215ce0010c4e9 --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/new-grapj/artifacts/planning/plan.md sha256=5c504c7dccd57ff1057e55aae274ca8115528e30d374740a421828d6ef2e7b28 status=captured projection=approved-summary representation-sha256=sha256:8dc80a554bfe11157c472b6c16dbdc87c5a66a13f12986ba7e03e61362665321 brief-sha256=8dc80a554bfe11157c472b6c16dbdc87c5a66a13f12986ba7e03e61362665321 expansion=sfref:v1:story:new-grapj:6257d6d9059762d6c39449e8bd6b120cc939c143b220c122e2c743366f84dab1 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-grapj`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/new-grapj/artifacts/planning/plan.md`
- Source SHA-256: `c58b66bc118ade5bf142ec4e1db7c9b007eac3d874fb69d74be3e4897c0bba07`

## Summary from “Agent brief”

Extend the existing React/Vite function grapher without adding a charting library. Preserve its mathjs function plotting and canvas grid, widen only Grapher mode, and add the approved expression-list/graph layout and visible controls. Add a parametric rendering path for the required radius-6 circle. Verify plotting in a real browser with Playwright and visually review the layout. Main risks are canvas coordinate/DPR handling and the new browser-test setup; rollback is isolated to graph-mode UI, styles, and test tooling.

## Test strategy

Use a real-browser Playwright test for the function and circle behavior; the existing jsdom canvas stub is not evidence of rendered geometry. The circle assertion should derive the origin and unit spacing from the plotted grid rather than hard-code device pixels. `NEW-GRAPJ:AC-002` remains a human visual review, not a Playwright pass.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `NEW-GRAPJ:AC-001` | - | `e2e/graphing.spec.js` | test-only | Playwright verifies the plotted circle is centered at the origin and has a six-unit radius. |
| `NEW-GRAPJ:AC-002` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-GRAPJ:AC-002 | modified | Visual review confirms the expression list, labeled Cartesian graph, and specified controls are visible in the approved arrangement. |
| `NEW-GRAPJ:REQ-001` | `src/components/FunctionGrapher.jsx` | `e2e/graphing.spec.js` | existing | A requested mathematical function is rendered on a two-dimensional Cartesian plane. |
| `NEW-GRAPJ:REQ-002` | `src/components/FunctionGrapher.jsx` | `e2e/graphing.spec.js` | modified | The circle entry renders a circle centered at `(0,0)` with radius 6. |
| `NEW-GRAPJ:REQ-003` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-GRAPJ:AC-002 | modified | The expression list, labeled Cartesian grid, and listed controls are visible in the specified layout. |

## Risks and rollback

Canvas sampling and device-pixel-ratio differences can make geometry assertions flaky; compare plotted geometry to the grid-derived unit scale and keep the circle test in a real browser. The current grapher only plots `y=f(x)`, so the circle must use its dedicated parametric path rather than silently relying on an implicit solver. Playwright adds browser provisioning to an existing Vitest-only project; keep its command isolated from `npm test`. If the graph changes regress other modes or cannot satisfy the visual review, roll back the graph-mode shell/style/component changes and the dedicated Playwright setup, leaving calculator modes and their existing tests unchanged.

> Exact source expansion: `sfref:v1:story:new-grapj:6257d6d9059762d6c39449e8bd6b120cc939c143b220c122e2c743366f84dab1`. Use `singularity-flow show sfref:v1:story:new-grapj:6257d6d9059762d6c39449e8bd6b120cc939c143b220c122e2c743366f84dab1 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
