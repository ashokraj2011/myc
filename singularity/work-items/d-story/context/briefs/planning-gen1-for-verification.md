# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `d-story`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/d-story/artifacts/planning/plan.md`
- Source SHA-256: `604d7527bae38fa3bc7cfb7a98267749b0cc3fe3dd67b2d713f36d207c13a5ac`

## Summary from “Agent brief”

Extend the existing React `FunctionGrapher` canvas rather than introducing a hosted graphing service or replacing the calculator shell. Preserve its `sin(x)` initial state and controls, add an explicitly supported implicit-equation path for `x^2 + y^2 = 36` that plots the circle at the origin with radius six, and make the graph panel usable within the existing responsive app shell. Keep expression state in the component only. Verify initial rendering, expression replacement, and the circle in Playwright; inspect the graph at desktop and common tablet widths against the pinned screenshot (DOC-001 — Screenshot 2026 11 22 at 12.12.40 PM).

## Test strategy

Automated browser checks use Playwright for the required expression and graph outcomes. Visual acceptance remains a separate inspection against the pinned screenshot and at representative desktop/tablet sizes; automated success does not establish visual acceptance. Use the existing Vitest suite, production build, and lint command as regression checks. Do not interpret unspecified malformed-expression behavior or add persistence as requirements.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `D-STORY:AC-001` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | On a fresh local load, `sin(x)` is shown with Cartesian axes and grid. |
| `D-STORY:AC-002` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | Entering `x^2 + y^2 = 36` renders a circle centered at `(0, 0)` with radius six units. |
| `D-STORY:AC-003` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | Replacing the expression with a supported function or implicit equation visibly updates the graph. |
| `D-STORY:AC-004` | `src/App.jsx`, `src/App.css`, `src/index.css` | verification: D-STORY:AC-004 | modified | The graph remains visible and usable at representative desktop and common tablet widths. |
| `D-STORY:REQ-001` | `src/components/FunctionGrapher.jsx`, `src/index.css` | `tests/graph-plotter.spec.js` | modified | A local Cartesian graph area presents visible axes and grid, informed by DOC-001 — Screenshot 2026 11 22 at 12.12.40 PM. |
| `D-STORY:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | A visitor can enter and replace a supported graph expression locally. |
| `D-STORY:REQ-003` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | A fresh plotter starts with `sin(x)` and has no saved graph state. |
| `D-STORY:REQ-004` | `src/App.jsx`, `src/App.css`, `src/index.css` | verification: D-STORY:AC-004 | modified | Graph controls and canvas remain usable at the specified representative viewport classes. |
| `D-STORY:REQ-005` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | The required circle equation plots center `(0, 0)`, radius six units. |

## Risks and rollback

Canvas sampling or coordinate scaling may misrepresent the implicit circle or distort its radius; detect this through the Playwright geometry assertion and visual inspection at a known scale, then correct the graph transform/sampling before merging. Responsive shell changes could regress other calculator modes; run the existing mode regression suite and production build, and keep layout changes scoped to graph mode where possible. If the graph changes destabilize the existing calculator or cannot meet the approved criteria, revert the graph-specific source/style/test changes while retaining existing calculator behavior; no data migration or server rollback is required because the feature is local and has no persistence/backend.
