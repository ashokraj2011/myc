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
