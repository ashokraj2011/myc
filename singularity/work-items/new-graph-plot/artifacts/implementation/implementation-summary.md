<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "new-graph-plot",
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
      "sha256": "d36ff2842bc205d316668f6f411a8b4b1d6cb4175c565be1b7939ab05caedf46",
      "bytes": 3108
    },
    "generation": 1,
    "publishedAt": "2026-11-10T13:08:35.762Z"
  },
  "sourceCommit": "ccc84e99a50ada2e59c9001cc9f33e5dd01ed9b9",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "2017a123798cffdcb0dd15ee35d04787c8b0d908f4d1e1007b1082ac3460a92f",
  "template": {
    "path": "singularity/work-items/new-graph-plot/config/wfa/blobs/sha256/2d1d1dc1ab8e94760cda8df39cf07aef51ef7ce191d76218558d19a6ffcc1a54",
    "sha256": "2d1d1dc1ab8e94760cda8df39cf07aef51ef7ce191d76218558d19a6ffcc1a54",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/new-graph-plot/context/inputs-implementation-gen1.json",
    "sha256": "0166653018defc1babb681704d78130e85770e9fdf25a9ced06107db74236648",
    "renderedSha256": "228644fdef154c256c2d335f81fc7f9084159cbdc327472a7a999b329c11bd29",
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
      "path": "singularity/work-items/new-graph-plot/telemetry/implementation-gen1.json",
      "sha256": "59b1a5127f78ac64c683fa0736ebf4e687f7a57d6bba043608caad1ddbac57dd",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 33204,
        "estimatedTokens": 8301,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 33204,
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
      "startedAt": "2026-11-10T13:08:35.761Z",
      "completedAt": "2026-11-10T13:08:35.761Z",
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

# new-graph-plot — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

The existing calculator grapher now retains its mathjs-backed function plotting mode and adds a circle mode with center and positive-radius inputs. Circle plotting uses equal axis scales and fits the requested circle within the canvas. Playwright coverage exercises a supplied function and samples 48 perimeter points for the origin-centered radius-6 circle. The browser checks, production build, and changed-file lint passed. The initial Vitest diagnostic failed under Node 26's localStorage behavior; the person subsequently chose Node 22 and recorded its pin for the required publication test run.

## Implemented outcome

Users can choose Function or Circle in the existing grapher. Function mode continues to plot the supplied `y=f(x)` expression. Circle mode accepts center x/y and radius values, centers the coordinate plane on that point, and renders the circle at one shared pixel scale for both axes so it remains circular and fits the canvas.

## Changed components and decisions

`src/components/FunctionGrapher.jsx` keeps the mathjs function evaluator for `NEW-GRAPH-PLOT:REQ-001` and adds circle inputs, parametric canvas rendering, and equal-scale auto-fit for `NEW-GRAPH-PLOT:AC-002` and `NEW-GRAPH-PLOT:REQ-002`. The existing App grapher-mode integration required no change. `tests/e2e/graph-plotter.spec.js` exercises both planned acceptance criteria. Supporting browser-test setup was added in `package.json`, `package-lock.json`, `playwright.config.js`, and `vite.config.js`; Vitest's include pattern keeps Playwright files out of its collection. No migration or product-scope deviation was needed. Tags are not applicable to configuration files; the production build passed.

## Tests and operational notes

`npm run test:e2e` — passed, 2 Playwright tests: `@ac:NEW-GRAPH-PLOT:AC-001` found the supplied `y=x` curve at `(1,1)`; `@ac:NEW-GRAPH-PLOT:AC-002` found the circle at 48 evenly spaced perimeter samples for center `(0,0)` and radius `6`. `npm run build` — passed, with Vite's existing large-chunk advisory. `npx eslint src/components/FunctionGrapher.jsx playwright.config.js tests/e2e/graph-plotter.spec.js vite.config.js` — passed without findings. An initial `npm test` diagnostic on Node `26.12.0` had 14 passes and 17 failures in `src/App.test.jsx`, because that runtime's `localStorage` is unavailable ahead of jsdom. The person then chose Node 22; SFlow recorded the `.nvmrc` pin and its plan accounting as PAM-001. That diagnostic is not gate evidence; publication's required run is authoritative. The browser suite uses the configured local Vite server and its default headless browser; browser geometry is sampled from canvas pixels. The attached screenshot was treated as a general reference, not a styling requirement.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/new-graph-plot/artifacts/specification/spec.md sha256=c91336ecd6ee0f7f5cf2e636eaa9445b576c408610d6302e7123d5eaa65f64c8 status=captured projection=approved-summary representation-sha256=sha256:5a0ab474b4bf6091e273e338f35a0105f8f52d26edf6d6cfb165ad513e98b486 brief-sha256=5a0ab474b4bf6091e273e338f35a0105f8f52d26edf6d6cfb165ad513e98b486 expansion=sfref:v1:story:new-graph-plot:f4d81fe8310ed5b2594fdc4bcf36cc7d318f3b402c4ba227b369db41fdfcd3f7 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-graph-plot`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/new-graph-plot/artifacts/specification/spec.md`
- Source SHA-256: `a3708cd059d3558ef6ac2b082430d83deb676a8958261ed04121bad414bb469d`

## Summary from “Agent brief”

Add graph plotting to the existing calculator. A calculator user can plot a supplied `y=f(x)` function and render the full circle specified by center `(0,0)` and radius `6`. The circle must be tested with Playwright. The attached screenshot is a general reference, not a specification of particular controls or visual styling.

## Actors

- **Calculator user:** supplies graph inputs and views the resulting plot. The evidence specifies no separate roles or authority levels.

## User scenarios

### S1 — Plot a function in the calculator

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The user is using the existing calculator.

- **Given** the calculator's graph plotter is available
  **When** the user supplies a `y=f(x)` function to plot
  **Then** the plotter presents the corresponding curve.

### S2 — Plot the requested circle

**Priority:** P1  
**Actor:** Calculator user  
**Context:** The user supplies graph inputs specifying center `(0,0)` and radius `6`.

- **Given** the graph inputs specify a circle centered at the origin with radius `6`
  **When** the user requests the plot
  **Then** the plotter presents the complete circle, and a Playwright test verifies the plotted geometry.

## Failure and empty states

- **Empty:** No behavior for an empty graph input is specified by the pinned sources or clarification.
- **Failure:** No graph-generation failure behavior or error wording is specified.
- **Partial:** No partial-rendering behavior is specified.

## Permissions

Not applicable: the pinned evidence describes a calculator user and specifies no authorization roles or permission differences.

## Boundary conditions

- The explicitly requested circle is centered at `(0,0)` and has radius `6` graph units.
- No other numeric range, precision, domain, or boundary behavior is specified.

## Requirements

- The existing calculator shall provide a graph plotter that accepts a user-supplied `y=f(x)` function and presents its plotted curve. This is the integrated-calculator scope selected in clarification `Q-001`. *(S1)* [NEW-GRAPH-PLOT:REQ-001]
- When the supplied graph inputs specify a circle centered at `(0,0)` with radius `6`, the plotter shall render the complete circle. This fulfills the pinned circle-test request [scope:SRI-15d4e5bd263a] and the full-circle clarification `Q-004`. *(S2)* [NEW-GRAPH-PLOT:REQ-002]

Acceptance criteria:

- A Playwright test verifies that a supplied `y=f(x)` function is presented as its corresponding plotted curve. *(S1)* [NEW-GRAPH-PLOT:AC-001]
- A Playwright test verifies that the plotted circle is complete, centered at `(0,0)`, and has radius `6`. *(S2)* [NEW-GRAPH-PLOT:AC-002]

## Non-functional requirements

None specified by the pinned sources or clarification.

## Assumptions

- The response `1` to clarification `Q-001` selects the first option: graph plotting is part of the existing calculator and includes plotting a supplied `y=f(x)` function.
- Circle inputs identify the requested center and radius; the required observable result is the complete circle. The specification does not prescribe the input syntax or controls.
- The response to `Q-003` makes the attached screenshot a general reference; no particular layout, controls, or styling are acceptance criteria.

## Out of scope

No additional graph types, formula syntax, controls, visual styling, role-based permissions, error behavior, or non-functional targets are specified by this Story. This records the scope of this specification and does not preclude future decisions.

> Exact source expansion: `sfref:v1:story:new-graph-plot:f4d81fe8310ed5b2594fdc4bcf36cc7d318f3b402c4ba227b369db41fdfcd3f7`. Use `singularity-flow show sfref:v1:story:new-graph-plot:f4d81fe8310ed5b2594fdc4bcf36cc7d318f3b402c4ba227b369db41fdfcd3f7 --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/new-graph-plot/artifacts/planning/plan.md sha256=19a46fb30432f3f7d43553e6ef3fe383cb311601a5ba16758a175a2e413f76ba status=captured projection=approved-summary representation-sha256=sha256:5009699435c7b12fb39e5561d3bf3825b2e4cd1305c94e186ec9c69ac1c08ddb brief-sha256=5009699435c7b12fb39e5561d3bf3825b2e4cd1305c94e186ec9c69ac1c08ddb expansion=sfref:v1:story:new-graph-plot:7612595c39f28e60ca0bd9a8dac0145d8b609720712b77c5a9b35e6df382885b -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-graph-plot`
- Producer: `planning` generation 2
- Consumer: `implementation`
- Source: `singularity/work-items/new-graph-plot/artifacts/planning/plan.md`
- Source SHA-256: `8163048e317eed9cb8477429b7e1e161b02d870df8f99c416b0b33705f4e6118`

## Summary from “Agent brief”

Extend the existing React canvas grapher in `src/components/FunctionGrapher.jsx`, retaining its mathjs-backed `y=f(x)` plotting path and adding circle inputs for center and radius. The calculator already integrates this component as its grapher mode through `src/App.jsx`; no additional app-level wiring is planned. Plot the circle parametrically on the same coordinate plane, use equal pixel scales for both axes, and fit the requested circle in the viewport. Add Playwright browser coverage for a supplied function and for the complete circle centered at `(0,0)` with radius `6`. The repository currently uses Vitest and has no Playwright setup, so add the browser-test configuration, script, and test dependency. Principal risks are canvas sizing/device-pixel-ratio errors and clipping or distorting the circle; geometry assertions should sample rendered pixels at graph-coordinate landmarks and around the full perimeter.

## Test strategy

Add exactly one row per clause, using its
fully qualified ID (for example, `NEW-GRAPH-PLOT:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `new-graph-plot`'s Story evidence directory, not product source.
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
| `NEW-GRAPH-PLOT:AC-001` | - | `tests/e2e/graph-plotter.spec.js` | test-only | Playwright verifies the existing supplied `y=f(x)` plotting behavior at representative graph coordinates. |
| `NEW-GRAPH-PLOT:AC-002` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | modified | Playwright verifies the complete perimeter, center `(0,0)`, and radius `6` of the plotted circle. |
| `NEW-GRAPH-PLOT:REQ-001` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | existing | The integrated calculator already accepts a user-supplied `y=f(x)` and presents its corresponding curve; Playwright will verify it remains available. |
| `NEW-GRAPH-PLOT:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | modified | Circle inputs for origin and radius `6` produce a complete, undistorted circle in the graph viewport. |

## Risks and rollback

Canvas dimensions or device-pixel-ratio handling could make coordinate assertions flaky; use the canvas's measured CSS dimensions and sample expected landmarks with a documented color tolerance. A nonuniform axis scale or insufficient auto-fit margin could distort or clip the circle; the Playwright geometry check should compare horizontal and vertical radii and probe the full perimeter, not only the top and bottom. Browser installation or headless execution may be unavailable in the environment; report that as a test-runner prerequisite rather than weakening the required Playwright acceptance tests. If the grapher regression is not acceptable, revert only the scoped grapher and test-tooling changes while preserving the existing calculator mode integration and Vitest suite.

> Exact source expansion: `sfref:v1:story:new-graph-plot:7612595c39f28e60ca0bd9a8dac0145d8b609720712b77c5a9b35e6df382885b`. Use `singularity-flow show sfref:v1:story:new-graph-plot:7612595c39f28e60ca0bd9a8dac0145d8b609720712b77c5a9b35e6df382885b --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
