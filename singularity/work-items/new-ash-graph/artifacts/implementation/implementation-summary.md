<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-ash-graph",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 2,
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
      "sha256": "a5659bb22446815da12e81b3b80088932c0a16b283339a8ef0bc76436038a536",
      "bytes": 4682
    },
    "generation": 2,
    "publishedAt": "2026-11-18T14:45:59.632Z"
  },
  "sourceCommit": "ce716f79944d7907a3e4515733d23dbfd2e51e3e",
  "generationCommit": "950ef3aa0da936ac7270086f1bcb3117c8d547b4",
  "publicationCommit": "950ef3aa0da936ac7270086f1bcb3117c8d547b4",
  "configSha256": "b8be8eefc29f357791638bbb726ea7c65cf83db480b10f325b73db73e444c8f1",
  "sourceSha256": "fe552fb5ad5cc2a7646f23c31a3489d63e41c455b94b535cc2cbfdcfca4a98a6",
  "template": {
    "path": "singularity/work-items/new-ash-graph/config/wfa/blobs/sha256/ba0749ab3997579949fc836a839af6606f995c2012a90b410597ebadf211298d",
    "sha256": "ba0749ab3997579949fc836a839af6606f995c2012a90b410597ebadf211298d",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 2,
    "path": "singularity/work-items/new-ash-graph/context/inputs-implementation-gen2.json",
    "sha256": "c0a9d3c9622131f9746f9031d384f11a1d82ec7622977e4526498d59017b8458",
    "renderedSha256": "15e2495d397a271c0a701ab8eba0f6b400d5d29091f6f645636c1407b3fd7000",
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
      "path": "singularity/work-items/new-ash-graph/telemetry/implementation-gen1.json",
      "sha256": "01b8bc1533d0e4de4e00b774f2a5ebbc9d19be3f89698bf890c013e10fc7528e",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30820,
        "estimatedTokens": 7705,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30820,
        "omittedSections": 0
      },
      "captureGap": "no-metered-session"
    },
    {
      "generation": 2,
      "path": "singularity/work-items/new-ash-graph/telemetry/implementation-gen2.json",
      "sha256": "e124440e8e0afd44cedb16bbfc3db53a2154afa1e413bc433fdede67fc181bac",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 31913,
        "estimatedTokens": 7979,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 31913,
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
      "startedAt": "2026-11-18T13:13:08.356Z",
      "completedAt": "2026-11-18T13:13:08.356Z",
      "agent": "developer",
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
      "startedAt": "2026-11-18T14:45:59.632Z",
      "completedAt": "2026-11-18T14:45:59.632Z",
      "agent": "developer",
      "generation": 2
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# new-ash-graph — Implementation Summary

## Agent brief

Grapher mode now uses a responsive graphing-calculator layout with an expression panel, Cartesian canvas, graph controls, and a math keypad. It preserves single-variable function plots and renders equality relations as implicit contours; the Playwright scenario confirms the radius-6 circle at all four cardinal points and checks that the origin remains unplotted. Version 2 corrects the version 1 review finding: the Vitest regression suite now runs fully (31/31) under Node 26.12 because the test setup supplies an in-memory `localStorage`, and `App.jsx` reads and writes storage defensively so the app renders when storage is unavailable. Every Grapher button uses the shared `.calc-btn` primitive.

## Implemented outcome

Grapher mode expands the app shell only for that mode and places the expression editor and examples beside a Cartesian canvas, with zoom/reset controls and a responsive keypad below. The existing `y=f(x)` plotting path remains; equality input compiles both sides and draws the zero contour of their difference. The approved `x^2 + y^2 = 36` case is checked in a mobile-sized browser viewport.

## Changed components and decisions

- `src/App.jsx`: applies the wider shell only in Grapher mode and now wraps `localStorage` access in `readStored`/`writeStored` so a missing or blocked storage no longer crashes rendering; source comments bind `NEW-ASH-GRAPH:REQ-001` and `NEW-ASH-GRAPH:AC-002`.
- `src/components/FunctionGrapher.jsx`: retains function plotting and adds equality-contour plotting, expression controls, zoom/reset, and the keypad; version 2 also makes the contour zero-crossing test ignore non-finite samples (`Number.isFinite`) so infinities cannot produce stray segments. All graph buttons use the shared `.calc-btn` primitive for theme consistency; source comments bind `NEW-ASH-GRAPH:REQ-001`, `NEW-ASH-GRAPH:REQ-002`, and `NEW-ASH-GRAPH:AC-002`.
- `src/index.css`: defines the graph-mode layout and narrow-screen arrangement, and version 2 sets `touch-action: manipulation` on graph keypad buttons to avoid double-tap zoom delays; source comments bind `NEW-ASH-GRAPH:REQ-001` and `NEW-ASH-GRAPH:AC-002`.
- `tests/graph-plotter.spec.js`: `@ac:NEW-ASH-GRAPH:AC-001` checks the four radius-6 cardinal pixels, an unplotted origin, and keypad visibility.
- `playwright.config.js`, `package.json`, and `package-lock.json`: configure the isolated Playwright runner and dependency. The `test` script scopes Vitest to `src` so it does not collect the Playwright spec from `tests/`; the Playwright spec remains available through `test:e2e`. These configuration files require no traceability tags.
- `src/test/setup.js`: supplies an in-memory `localStorage` when the runtime's global one is unusable (Node 26 without `--localstorage-file`); test infrastructure, no traceability tags.
- `.nvmrc` sets Node 22 as directed by recorded decision PAM-001 and is listed as a supporting build-configuration change. No migration or product-scope departure was made.

## Constitution articles

None: this Story pinned no constitution.

## Tests and operational notes

- `npm run test:e2e` — exit 0; 1 Playwright test passed. The tagged test ran at 390×844, found the radius-6 contour at x/y = ±6, verified the origin is unplotted, and confirmed the keypad is visible.
- `npm run build` — exit 0; Vite 8.2 built successfully. It reported the generated JavaScript chunk at 888.81 kB, above Vite's 500 kB advisory threshold.
- `npm test` — exit 0 under Node 26.12.0: 3 files, 31/31 tests passed, covering the existing calculator modes including the shared design-token Grapher assertion (regression check for REQ-001's shared-shell change). Node only emits an ExperimentalWarning about `localStorage`.
- `npm run test:e2e` — exit 0 in version 2; the tagged `@ac:NEW-ASH-GRAPH:AC-001` test passed again, and its `@ac:NEW-ASH-GRAPH:AC-002` tag covers the visible panel, canvas and keypad assertions.
- `.nvmrc` contains `22` per recorded decision PAM-001, but the local runs reported Node 26.12.0; Node 22 execution is not established by these results, and the setup fix makes the suite pass on both.
- Visual inspection at a narrow viewport showed the expression panel, graph canvas, and keypad in the responsive single-column layout; the wider viewport computed a two-column expression/canvas grid. `singularity-flow app plan --json` returned no governed app launcher, so the app was started with the configured Vite dev command and stopped after inspection.
- `npm ci` — exit 0. npm reported 15 audit advisories (4 moderate, 11 high); dependency remediation was not part of this Story.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/new-ash-graph/artifacts/specification/spec.md sha256=52b3386bbdf7583e95e92f6b83091d8f88d06556464e41a2b1d2fbb9a067692f status=captured projection=approved-summary representation-sha256=sha256:a64c1dc6f74c3c6707c49613b6be635a110890bccb9d34e0388e8bebcc07a375 brief-sha256=a64c1dc6f74c3c6707c49613b6be635a110890bccb9d34e0388e8bebcc07a375 expansion=sfref:v1:story:new-ash-graph:77a94834a006c83203037b5d1d654cdb13692014e67783f7d89172f192b9b1a4 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-ash-graph`
- Producer: `specification` generation 1
- Consumer: `implementation`
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

## Approved phase input: planning

<!-- source=singularity/work-items/new-ash-graph/artifacts/planning/plan.md sha256=ef25f65b792c23cdf134a54bd2722495c459919b42f7684c670bcd4c0fa8c4ac status=captured projection=approved-summary representation-sha256=sha256:2387a5a355468cf28c9b83c2a6f1612a6c1df8f48e8ef0743b2d8d2c74de1fd8 brief-sha256=2387a5a355468cf28c9b83c2a6f1612a6c1df8f48e8ef0743b2d8d2c74de1fd8 expansion=sfref:v1:story:new-ash-graph:47359ce0b4c0fa38507cc3e0965716ce6560eac26f04a36444bbc20aecbb71ab -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-ash-graph`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/new-ash-graph/artifacts/planning/plan.md`
- Source SHA-256: `c4370e08dbef4e6e694506a4aa8636aa9f822dd1d1710843f7c4dd7586b7582e`

## Summary from “Agent brief”

Extend the existing Grapher mode rather than creating a separate application route. Widen the app shell only in Grapher mode, reshape the existing graph component into a left expression panel, Cartesian canvas, and bottom math keypad, and add rendering for the approved radius-6 circle case while preserving current function plots. Add an isolated Playwright runner and an end-to-end circle test. Verify the layout by visual review and source inspection. Principal risks are canvas scaling/contour accuracy and regressions to existing calculator modes.

## Test strategy

Run `npm run test:e2e` for the browser scenario, `npm test` for existing Vitest regressions, and `npm run build` for production compilation. The circle assertion should enter the standard implicit equation and verify the contour at the four cardinal points corresponding to x/y = ±6, with the origin unplotted. The layout criterion is proven separately by visual review and source inspection. No screenshot evidence file is required by the approved criteria.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `NEW-ASH-GRAPH:AC-001` | - | `tests/graph-plotter.spec.js` | test-only | Playwright confirms the plotted circle is centered at the origin and has radius 6 units. |
| `NEW-ASH-GRAPH:AC-002` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-ASH-GRAPH:AC-002 | modified | The left expression/algebra panel, Cartesian axes/grid, and bottom math keypad appear in the graph layout. |
| `NEW-ASH-GRAPH:REQ-001` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-ASH-GRAPH:AC-002 | modified | Grapher mode presents the left expression/algebra panel, Cartesian axes/grid, and bottom math keypad. |
| `NEW-ASH-GRAPH:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | The browser test exercises the plotter with the approved circle and verifies its rendering. |

## Risks and rollback

Canvas sampling, device-pixel ratio, or viewport resizing could distort or clip the circle; detect this with the Playwright geometry assertion at a fixed browser viewport and visual review at a narrow viewport. The implicit-equation path could regress current `y=f(x)` plots; retain existing function behavior and run `npm test` plus `npm run build`. If graph-mode changes destabilize other calculator modes, revert only the Grapher-specific source/layout changes. Keep the Playwright test and its supporting configuration in place so the required browser verification remains available; resolve missing browser installation as test setup rather than treating it as a product pass.

> Exact source expansion: `sfref:v1:story:new-ash-graph:47359ce0b4c0fa38507cc3e0965716ce6560eac26f04a36444bbc20aecbb71ab`. Use `singularity-flow show sfref:v1:story:new-ash-graph:47359ce0b4c0fa38507cc3e0965716ce6560eac26f04a36444bbc20aecbb71ab --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
