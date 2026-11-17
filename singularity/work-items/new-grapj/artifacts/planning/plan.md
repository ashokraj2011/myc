<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-grapj",
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
      "sha256": "a66a2d718123f550b1ecedaf766c969490f380a04946778d656aa459419970c5",
      "bytes": 9406
    },
    "generation": 1,
    "publishedAt": "2026-11-17T23:50:39.085Z"
  },
  "sourceCommit": "50ca59cac2dbc268fb6f30ca401021ea05d0a479",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "b8be8eefc29f357791638bbb726ea7c65cf83db480b10f325b73db73e444c8f1",
  "sourceSha256": "48c9e3980f4a2f393670922524978e4451f1f4c9ad586cc457eeb7f2ad87898d",
  "template": {
    "path": "singularity/work-items/new-grapj/config/wfa/blobs/sha256/8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "sha256": "8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/new-grapj/context/inputs-planning-gen1.json",
    "sha256": "2e7e4e1b3d80c50ae42529ee4f29bc1bedf3c13c8bf7c4f8b91be2e9b3646ccf",
    "renderedSha256": "1a0ec1c52aa8ad7d003978788a804c1d131062e64129ad1c546c13b1cad8741c",
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
      "path": "singularity/work-items/new-grapj/telemetry/planning-gen1.json",
      "sha256": "45cec7936a007583a228317342eaf5973cc9b00c2b46fe815724a6a9ffa0b35c",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 31017,
        "estimatedTokens": 7755,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 31017,
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
      "startedAt": "2026-11-17T23:50:39.085Z",
      "completedAt": "2026-11-17T23:50:39.085Z",
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

# Implementation plan — new-grapj

## Agent brief

Extend the existing React/Vite function grapher without adding a charting library. Preserve its mathjs function plotting and canvas grid, widen only Grapher mode, and add the approved expression-list/graph layout and visible controls. Add a parametric rendering path for the required radius-6 circle. Verify plotting in a real browser with Playwright and visually review the layout. Main risks are canvas coordinate/DPR handling and the new browser-test setup; rollback is isolated to graph-mode UI, styles, and test tooling.

## Approach

Keep `FunctionGrapher` as the graphing owner: it already accepts a mathjs function, draws a Cartesian grid and axes on canvas, and maintains zoom state. Add a graph-mode class in `App.jsx` so the shell can widen only for this mode, then use scoped rules in `index.css` for the expression-list/graph split and a narrow-screen stacked layout. Keep the existing function-expression behavior and draw the circle through a parameterized path `(6 cos t, 6 sin t)` using the same origin and scale transform; this avoids treating a circle as the single-valued `y=f(x)` the current renderer plots. Use the existing `lucide-react` dependency for the visible controls.

**Assumption:** Because the approved specification does not define free-form implicit-equation syntax, expose the required circle as a built-in graph entry rather than adding a general implicit-equation parser. The visible add and zoom controls support the graph workspace; the other named controls are included visually without introducing settings or tool behaviors not specified by the approved clauses.

## Affected surfaces

Changes stay within the existing React UI and its CSS; no API, persistence, or calculator-evaluation contract changes are planned. Use feature-scoped styles rather than adding a UI framework.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Apply a wider graph-mode shell without changing other calculator modes. | [NEW-GRAPJ:REQ-003] |
| `src/components/FunctionGrapher.jsx` | Retain function plotting and zoom; add the expression-list layout, required visible controls, and circle rendering. | [NEW-GRAPJ:REQ-001], [NEW-GRAPJ:REQ-002], [NEW-GRAPJ:REQ-003] |
| `src/index.css` | Add scoped graph workspace layout and responsive styling. | [NEW-GRAPJ:REQ-003] |

## Sequencing

1. Add the separate Playwright runner/configuration and `test:e2e` command so the required browser acceptance can run without changing the existing Vitest setup.
2. Widen Grapher mode and build the expression-list/graph workspace with its visible controls; preserve other calculator modes. This establishes the layout witness for `NEW-GRAPJ:AC-002`.
3. Keep the existing `y=f(x)` plotting path and add a circle graph entry rendered parametrically through the existing canvas coordinate transform.
4. Add browser coverage for ordinary function plotting and the origin-centered radius-6 circle; run the repository's Vitest suite, Playwright suite, and production build. Complete the separate visual review for `NEW-GRAPJ:AC-002`.

## Test strategy

Use a real-browser Playwright test for the function and circle behavior; the existing jsdom canvas stub is not evidence of rendered geometry. The circle assertion should derive the origin and unit spacing from the plotted grid rather than hard-code device pixels. `NEW-GRAPJ:AC-002` remains a human visual review, not a Playwright pass.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `NEW-GRAPJ:AC-001` | - | `e2e/graphing.spec.js` | test-only | Playwright verifies the plotted circle is centered at the origin and has a six-unit radius. |
| `NEW-GRAPJ:AC-002` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-GRAPJ:AC-002 | modified | Visual review confirms the expression list, labeled Cartesian graph, and specified controls are visible in the approved arrangement. |
| `NEW-GRAPJ:REQ-001` | `src/components/FunctionGrapher.jsx` | `e2e/graphing.spec.js` | existing | A requested mathematical function is rendered on a two-dimensional Cartesian plane. |
| `NEW-GRAPJ:REQ-002` | `src/components/FunctionGrapher.jsx` | `e2e/graphing.spec.js` | modified | The circle entry renders a circle centered at `(0,0)` with radius 6. |
| `NEW-GRAPJ:REQ-003` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-GRAPJ:AC-002 | modified | The expression list, labeled Cartesian grid, and listed controls are visible in the specified layout. |

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `NEW-GRAPJ:AC-002` | graph-layout | visual | `Grapher workspace at desktop viewport` | primary | source-bound |

## Supporting files

- `package.json` — add `@playwright/test` and a dedicated `test:e2e` script.
- `package-lock.json` — lock the Playwright test dependency.
- `playwright.config.js` — configure the `e2e` test directory and loopback Vite web server.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Canvas sampling and device-pixel-ratio differences can make geometry assertions flaky; compare plotted geometry to the grid-derived unit scale and keep the circle test in a real browser. The current grapher only plots `y=f(x)`, so the circle must use its dedicated parametric path rather than silently relying on an implicit solver. Playwright adds browser provisioning to an existing Vitest-only project; keep its command isolated from `npm test`. If the graph changes regress other modes or cannot satisfy the visual review, roll back the graph-mode shell/style/component changes and the dedicated Playwright setup, leaving calculator modes and their existing tests unchanged.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/new-grapj/artifacts/specification/spec.md sha256=5fb949d7c74819bb40a8219a5a436c6137014d1e257734a39e817a83beee93e7 status=captured projection=approved-summary representation-sha256=sha256:004b4b7b83b62f460ff8ca69b855792cb0b5d4cca249cb90508a2b383ec18e70 brief-sha256=004b4b7b83b62f460ff8ca69b855792cb0b5d4cca249cb90508a2b383ec18e70 expansion=sfref:v1:story:new-grapj:787e62a58d49bfde7d6101d11d82c63e3e246cd049a6d7f2388215ce0010c4e9 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-grapj`
- Producer: `specification` generation 2
- Consumer: `planning`
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

<!-- singularity-flow:inputs:end -->
