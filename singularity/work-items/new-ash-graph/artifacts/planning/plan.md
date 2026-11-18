<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-ash-graph",
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
      "sha256": "3d4022e563f12ffce6ef846761959d0cec79a35dfed6bd60dd3c2e5b7562f8be",
      "bytes": 10125
    },
    "generation": 1,
    "publishedAt": "2026-11-18T11:13:57.198Z"
  },
  "sourceCommit": "b38eea27c70ee318ecb194f1f917705bad6efdec",
  "generationCommit": "48f489362740754635a14ac2c97796bdfac77807",
  "publicationCommit": "48f489362740754635a14ac2c97796bdfac77807",
  "configSha256": "b8be8eefc29f357791638bbb726ea7c65cf83db480b10f325b73db73e444c8f1",
  "sourceSha256": "fe552fb5ad5cc2a7646f23c31a3489d63e41c455b94b535cc2cbfdcfca4a98a6",
  "template": {
    "path": "singularity/work-items/new-ash-graph/config/wfa/blobs/sha256/8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "sha256": "8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/new-ash-graph/context/inputs-planning-gen1.json",
    "sha256": "cc27f222237dacc1f836370e3de1129d89e5d7476396a00d2f5947972c9e0a25",
    "renderedSha256": "b3444591ac11b80c7337014f7164d0a12baadd2fb65c34fc1906b4bcf71233ed",
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
      "path": "singularity/work-items/new-ash-graph/telemetry/planning-gen1.json",
      "sha256": "695bfaa0397e2c43472a9d244346975f374b6779b916e8b6fa7811f161cb3157",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30245,
        "estimatedTokens": 7562,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30245,
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
      "startedAt": "2026-11-18T11:13:57.198Z",
      "completedAt": "2026-11-18T11:13:57.198Z",
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

# Implementation plan — new-ash-graph

## Agent brief

Extend the existing Grapher mode rather than creating a separate application route. Widen the app shell only in Grapher mode, reshape the existing graph component into a left expression panel, Cartesian canvas, and bottom math keypad, and add rendering for the approved radius-6 circle case while preserving current function plots. Add an isolated Playwright runner and an end-to-end circle test. Verify the layout by visual review and source inspection. Principal risks are canvas scaling/contour accuracy and regressions to existing calculator modes.

## Approach

Reuse the existing React/Vite application, `FunctionGrapher`, its mathjs dependency, and the shared theme tokens. `App.jsx` already exposes Grapher mode, but constrains the whole app to a narrow calculator shell; widen that shell only while Grapher is active. Restructure `FunctionGrapher` to place the algebra/expression panel to the left of the graph canvas and the mathematical keypad below them. Keep the existing function-expression, preset, zoom, and reset behavior.

Extend the existing renderer to plot the confirmed circle as an implicit relation, compiling both sides of the entered equality with mathjs and drawing its zero contour on the existing Cartesian grid. **Assumption:** the Playwright scenario will enter `x^2 + y^2 = 36`; this encodes the specified center and radius without adding a new public graph-type requirement. Keep implementation and claims bounded to the approved circle case.

**Assumption:** the repository has no Playwright dependency or browser-test configuration; add `@playwright/test`, a separate `test:e2e` script, and a Vite-backed Playwright config while leaving the existing Vitest `npm test` command intact. This adds test-runner setup but does not change application runtime dependencies.

## Affected surfaces

The change is limited to the existing app shell and graph component, shared graph-mode styling, and a new browser test. The Grapher navigation entry already exists; no changes are planned to other calculator modes or the HTML entry point.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Expand the app shell when Grapher mode is active; retain the existing header and mode selection. | [NEW-ASH-GRAPH:REQ-001] |
| `src/components/FunctionGrapher.jsx` | Arrange the expression panel, graph canvas, and math keypad; extend plotting to the approved circle relation while retaining current function plotting. | [NEW-ASH-GRAPH:REQ-001], [NEW-ASH-GRAPH:REQ-002] |
| `src/index.css` | Add responsive graph-mode layout and theme-aware styling for the plotter surface and keypad. | [NEW-ASH-GRAPH:REQ-001] |
| `tests/graph-plotter.spec.js` | Exercise the circle through the browser and verify its rendered geometry. | [NEW-ASH-GRAPH:REQ-002], [NEW-ASH-GRAPH:AC-001] |

## Sequencing

1. Add the separate Playwright configuration, `test:e2e` script, and browser-test dependency; keep Vitest's existing command unchanged.
2. Update the app shell and Grapher component layout, including the expression panel and bottom keypad, using the existing theme tokens.
3. Extend the canvas renderer for the circle equality case and preserve the existing single-variable function path, presets, zoom, reset, and syntax feedback.
4. Add the Playwright circle scenario, run it against the Vite app, and visually inspect the graph layout at desktop and narrow viewports.
5. Run the existing Vitest suite and production build to check that the other calculator modes remain intact.

## Test strategy

Run `npm run test:e2e` for the browser scenario, `npm test` for existing Vitest regressions, and `npm run build` for production compilation. The circle assertion should enter the standard implicit equation and verify the contour at the four cardinal points corresponding to x/y = ±6, with the origin unplotted. The layout criterion is proven separately by visual review and source inspection. No screenshot evidence file is required by the approved criteria.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `NEW-ASH-GRAPH:AC-001` | - | `tests/graph-plotter.spec.js` | test-only | Playwright confirms the plotted circle is centered at the origin and has radius 6 units. |
| `NEW-ASH-GRAPH:AC-002` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-ASH-GRAPH:AC-002 | modified | The left expression/algebra panel, Cartesian axes/grid, and bottom math keypad appear in the graph layout. |
| `NEW-ASH-GRAPH:REQ-001` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-ASH-GRAPH:AC-002 | modified | Grapher mode presents the left expression/algebra panel, Cartesian axes/grid, and bottom math keypad. |
| `NEW-ASH-GRAPH:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | The browser test exercises the plotter with the approved circle and verifies its rendering. |

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `NEW-ASH-GRAPH:AC-001` | circle-rendering | test | `tests/graph-plotter.spec.js` | primary | exact-local-observed |
| `NEW-ASH-GRAPH:AC-002` | graph-layout | visual | `Grapher mode at desktop and narrow viewports` | primary | source-bound |
| `NEW-ASH-GRAPH:AC-002` | layout-structure | inspection | `src/components/FunctionGrapher.jsx` | primary | source-bound |

## Supporting files

- `package.json` — add the `test:e2e` script and `@playwright/test` development dependency.
- `package-lock.json` — lock the Playwright test-runner dependency.
- `playwright.config.js` — configure the browser test directory and start the existing Vite dev server for tests.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Canvas sampling, device-pixel ratio, or viewport resizing could distort or clip the circle; detect this with the Playwright geometry assertion at a fixed browser viewport and visual review at a narrow viewport. The implicit-equation path could regress current `y=f(x)` plots; retain existing function behavior and run `npm test` plus `npm run build`. If graph-mode changes destabilize other calculator modes, revert only the Grapher-specific source/layout changes. Keep the Playwright test and its supporting configuration in place so the required browser verification remains available; resolve missing browser installation as test setup rather than treating it as a product pass.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/new-ash-graph/artifacts/specification/spec.md sha256=52b3386bbdf7583e95e92f6b83091d8f88d06556464e41a2b1d2fbb9a067692f status=captured projection=approved-summary representation-sha256=sha256:eaf91148e18f3d174516ed53566fc9109a0c0fb35c53399ee82b8a43e8ec7589 brief-sha256=eaf91148e18f3d174516ed53566fc9109a0c0fb35c53399ee82b8a43e8ec7589 expansion=sfref:v1:story:new-ash-graph:77a94834a006c83203037b5d1d654cdb13692014e67783f7d89172f192b9b1a4 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-ash-graph`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/new-ash-graph/artifacts/specification/spec.md`
- Source SHA-256: `60f9f02220a312e0ec5b13332bc17acaca97e21719d225e395a5400d36fb0471`

## Summary from “Agent brief”

Create a graph plotter for an application user. The user-provided `graphsc.jpg` is a visual reference for a graphing-calculator layout: an expression panel on the left, a Cartesian graph canvas, and a mathematical keypad along the bottom. The required graph case is a circle centered at the origin with radius 6 units, verified by a Playwright test. No other graph types or behaviors are specified.

## Actors

Graph-plotter user: requests and views a plot. No additional roles or authority rules are specified.

## User scenarios

### S1 — Plot the radius-6 circle

**Priority:** P1
**Actor:** Graph-plotter user
**Context:** The graph-plotting interface displays an expression panel and a Cartesian graph canvas.

- **Given** the graph-plotting interface is available
  **When** a circle centered at (0,0) with radius 6 units is requested
  **Then** the circle is represented on the graph canvas and a Playwright test verifies the case.

## Failure and empty states

- **Empty:** Behavior when no plot is requested is not specified by the available evidence.
- **Failure:** Failure behavior is not specified by the available evidence.
- **Partial:** Partial-result behavior is not specified by the available evidence.

## Permissions

Not applicable: the Story specifies no roles, authentication, or access-control behavior.

## Boundary conditions

The only specified numeric case is a circle of radius 6 units centered at (0,0). Other ranges, limits, and boundary behavior are unspecified.

## Requirements

- The graph-plotter interface shall present an expression/algebra panel on the left, a Cartesian graph canvas with axes and grid, and a mathematical keypad along the bottom, following the generic layout shown in `graphsc.jpg`. *(S1)* [NEW-ASH-GRAPH:REQ-001]
- A Playwright test shall exercise the plotter with a circle centered at (0,0) with radius 6 units and verify that the circle is represented. [scope:SRI-15d4e5bd263a] *(S1)* [NEW-ASH-GRAPH:REQ-002]

- A Playwright test verifies that the graph plotter represents a circle centered at (0,0) with radius 6 units. *(S1)* [NEW-ASH-GRAPH:AC-001]
- Visual inspection confirms that the graph-plotter layout has a left expression/algebra panel, a Cartesian graph canvas with axes and grid, and a mathematical keypad along the bottom. *(S1)* [NEW-ASH-GRAPH:AC-002]

## Non-functional requirements

None specified by the pinned Story or recorded clarification.

## Assumptions

“Palyright” is interpreted as Playwright, and “circle of 6 unit radius in origin” is interpreted as a circle centered at (0,0) with radius 6 units; the user confirmed this interpretation. `graphsc.jpg` supplies the generic layout reference; its blank graph area does not specify additional graph types or behaviors.

## Out of scope

Additional graph types, behavior for other navigation destinations, limits, and non-functional targets are not specified by the available evidence.

> Exact source expansion: `sfref:v1:story:new-ash-graph:77a94834a006c83203037b5d1d654cdb13692014e67783f7d89172f192b9b1a4`. Use `singularity-flow show sfref:v1:story:new-ash-graph:77a94834a006c83203037b5d1d654cdb13692014e67783f7d89172f192b9b1a4 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
