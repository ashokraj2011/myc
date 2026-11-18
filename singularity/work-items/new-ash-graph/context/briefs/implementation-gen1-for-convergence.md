# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-ash-graph`
- Producer: `implementation` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/new-ash-graph/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `f3205f5655c9cafe02eb9af8d3f91e77fd92dbb15f3bf4a0d99d47a8c0543b86`

## Summary from “Agent brief”

Grapher mode now uses a responsive graphing-calculator layout with an expression panel, Cartesian canvas, graph controls, and a math keypad. It preserves single-variable function plots and renders equality relations as implicit contours; the Playwright scenario confirms the radius-6 circle at all four cardinal points and checks that the origin remains unplotted. The browser test and production build passed before the latest button-style repair. A prepublish test run found one shared-design-token assertion failure that also occurred on the Story base; following the user's choice to repair it in this Story, every Grapher button now uses the shared `.calc-btn` primitive. The post-repair browser test passed, while the direct unit-test run under Node 26 failed during setup because `localStorage` was unavailable. The required prepublish rerun remains pending.

## Changed components and decisions

- `src/App.jsx`: applies the wider shell only in Grapher mode; source comments bind `NEW-ASH-GRAPH:REQ-001` and `NEW-ASH-GRAPH:AC-002`.
- `src/components/FunctionGrapher.jsx`: retains function plotting and adds equality-contour plotting, expression controls, zoom/reset, and the keypad. All graph buttons use the shared `.calc-btn` primitive for theme consistency; source comments bind `NEW-ASH-GRAPH:REQ-001`, `NEW-ASH-GRAPH:REQ-002`, and `NEW-ASH-GRAPH:AC-002`.
- `src/index.css`: defines the graph-mode layout and narrow-screen arrangement; source comments bind `NEW-ASH-GRAPH:REQ-001` and `NEW-ASH-GRAPH:AC-002`.
- `tests/graph-plotter.spec.js`: `@ac:NEW-ASH-GRAPH:AC-001` checks the four radius-6 cardinal pixels, an unplotted origin, and keypad visibility.
- `playwright.config.js`, `package.json`, and `package-lock.json`: configure the isolated Playwright runner and dependency. The `test` script scopes Vitest to `src` so it does not collect the Playwright spec from `tests/`; the Playwright spec remains available through `test:e2e`. These configuration files require no traceability tags.
- `.nvmrc` sets Node 22 as directed by recorded decision PAM-001 and is listed as a supporting build-configuration change. No migration or product-scope departure was made.

## Tests and operational notes

- `npm run test:e2e` — exit 0; 1 Playwright test passed. The tagged test ran at 390×844, found the radius-6 contour at x/y = ±6, verified the origin is unplotted, and confirmed the keypad is visible.
- `npm run build` — exit 0; Vite 8.2 built successfully. It reported the generated JavaScript chunk at 888.81 kB, above Vite's 500 kB advisory threshold.
- `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json` — post-repair direct run exited 1 under Node 26.12.0: 14/31 tests passed and 17 failed during setup because `localStorage` was undefined. This did not verify the repaired Grapher assertion. A prior SFlow prepublish run passed 30/31 and failed only `renders grapher mode using the shared design-token classes under win11-light`; the base comparison found that same assertion failing before this Story's changes. That failure has been repaired in `FunctionGrapher.jsx`, and a fresh required prepublish run is pending.
- `npm run test:e2e -- --reporter=json` — exit 0; the tagged Playwright test passed after the shared-button repair.
- `.nvmrc` contains `22` per recorded decision PAM-001, but both the SFlow test run and direct test command reported Node 26.12.0; Node 22 execution is not established by these results.
- Visual inspection at a narrow viewport showed the expression panel, graph canvas, and keypad in the responsive single-column layout; the wider viewport computed a two-column expression/canvas grid. `singularity-flow app plan --json` returned no governed app launcher, so the app was started with the configured Vite dev command and stopped after inspection.
- `npm ci` — exit 0. npm reported 15 audit advisories (4 moderate, 11 high); dependency remediation was not part of this Story.
