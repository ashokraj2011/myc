# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-ash-graph`
- Producer: `implementation` generation 2
- Consumer: `convergence`
- Source: `singularity/work-items/new-ash-graph/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `88a1bb712f1a15973e77118266fd388a321fc7b7fe498ed9831b9ddf78a48558`

## Summary from “Agent brief”

Grapher mode now uses a responsive graphing-calculator layout with an expression panel, Cartesian canvas, graph controls, and a math keypad. It preserves single-variable function plots and renders equality relations as implicit contours; the Playwright scenario confirms the radius-6 circle at all four cardinal points and checks that the origin remains unplotted. Version 2 corrects the version 1 review finding: the Vitest regression suite now runs fully (31/31) under Node 26.12 because the test setup supplies an in-memory `localStorage`, and `App.jsx` reads and writes storage defensively so the app renders when storage is unavailable. Every Grapher button uses the shared `.calc-btn` primitive.

## Changed components and decisions

- `src/App.jsx`: applies the wider shell only in Grapher mode and now wraps `localStorage` access in `readStored`/`writeStored` so a missing or blocked storage no longer crashes rendering; source comments bind `NEW-ASH-GRAPH:REQ-001` and `NEW-ASH-GRAPH:AC-002`.
- `src/components/FunctionGrapher.jsx`: retains function plotting and adds equality-contour plotting, expression controls, zoom/reset, and the keypad; version 2 also makes the contour zero-crossing test ignore non-finite samples (`Number.isFinite`) so infinities cannot produce stray segments. All graph buttons use the shared `.calc-btn` primitive for theme consistency; source comments bind `NEW-ASH-GRAPH:REQ-001`, `NEW-ASH-GRAPH:REQ-002`, and `NEW-ASH-GRAPH:AC-002`.
- `src/index.css`: defines the graph-mode layout and narrow-screen arrangement, and version 2 sets `touch-action: manipulation` on graph keypad buttons to avoid double-tap zoom delays; source comments bind `NEW-ASH-GRAPH:REQ-001` and `NEW-ASH-GRAPH:AC-002`.
- `tests/graph-plotter.spec.js`: `@ac:NEW-ASH-GRAPH:AC-001` checks the four radius-6 cardinal pixels, an unplotted origin, and keypad visibility.
- `playwright.config.js`, `package.json`, and `package-lock.json`: configure the isolated Playwright runner and dependency. The `test` script scopes Vitest to `src` so it does not collect the Playwright spec from `tests/`; the Playwright spec remains available through `test:e2e`. These configuration files require no traceability tags.
- `src/test/setup.js`: supplies an in-memory `localStorage` when the runtime's global one is unusable (Node 26 without `--localstorage-file`); test infrastructure, no traceability tags.
- `.nvmrc` sets Node 22 as directed by recorded decision PAM-001 and is listed as a supporting build-configuration change. No migration or product-scope departure was made.

## Tests and operational notes

- `npm run test:e2e` — exit 0; 1 Playwright test passed. The tagged test ran at 390×844, found the radius-6 contour at x/y = ±6, verified the origin is unplotted, and confirmed the keypad is visible.
- `npm run build` — exit 0; Vite 8.2 built successfully. It reported the generated JavaScript chunk at 888.81 kB, above Vite's 500 kB advisory threshold.
- `npm test` — exit 0 under Node 26.12.0: 3 files, 31/31 tests passed, covering the existing calculator modes including the shared design-token Grapher assertion (regression check for REQ-001's shared-shell change). Node only emits an ExperimentalWarning about `localStorage`.
- `npm run test:e2e` — exit 0 in version 2; the tagged `@ac:NEW-ASH-GRAPH:AC-001` test passed again, and its `@ac:NEW-ASH-GRAPH:AC-002` tag covers the visible panel, canvas and keypad assertions.
- `.nvmrc` contains `22` per recorded decision PAM-001, but the local runs reported Node 26.12.0; Node 22 execution is not established by these results, and the setup fix makes the suite pass on both.
- Visual inspection at a narrow viewport showed the expression panel, graph canvas, and keypad in the responsive single-column layout; the wider viewport computed a two-column expression/canvas grid. `singularity-flow app plan --json` returned no governed app launcher, so the app was started with the configured Vite dev command and stopped after inspection.
- `npm ci` — exit 0. npm reported 15 audit advisories (4 moderate, 11 high); dependency remediation was not part of this Story.
