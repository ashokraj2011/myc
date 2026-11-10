# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-graph-plot`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/new-graph-plot/artifacts/planning/plan.md`
- Source SHA-256: `6be941aea6777eeba6f2c61dd75196e58679b4e7228b80077e37047cd17aba4c`

## Summary from “Agent brief”

Extend the existing React canvas grapher in `src/components/FunctionGrapher.jsx`, preserving its mathjs-backed `y=f(x)` plotting path and adding circle inputs for center and radius. Plot the circle parametrically on the same coordinate plane, using one pixel scale for both axes and fitting the requested circle in the viewport. Add Playwright coverage for a supplied function and for the complete circle centered at `(0,0)` with radius `6`. The repository currently has Vitest coverage but no Playwright setup, so implementation must add the browser-test configuration and required package scripts/dependencies. Principal risks are canvas sizing/device-pixel-ratio errors and clipping or distorting the circle; geometry assertions should inspect rendered canvas pixels at graph-coordinate landmarks and along the full perimeter.

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
| `NEW-GRAPH-PLOT:AC-001` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | modified | Playwright verifies the supplied `y=f(x)` function's rendered curve at representative x coordinates. |
| `NEW-GRAPH-PLOT:AC-002` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | modified | Playwright verifies the full circle's center, radius, and continuous perimeter for `(0,0)` and `6`. |
| `NEW-GRAPH-PLOT:REQ-001` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | modified | The existing calculator grapher accepts a user-supplied `y=f(x)` and presents its corresponding curve. |
| `NEW-GRAPH-PLOT:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/e2e/graph-plotter.spec.js` | modified | Circle inputs for origin and radius `6` produce a complete, undistorted circle in the graph viewport. |

## Risks and rollback

Canvas dimensions or device-pixel-ratio handling could make coordinate assertions flaky; use the canvas's measured CSS dimensions and sample expected landmarks with a documented color tolerance. A nonuniform axis scale or insufficient auto-fit margin could distort or clip the circle; the Playwright geometry check should compare horizontal and vertical radii and probe the full perimeter, not only the top and bottom. Browser installation or headless execution may be unavailable in the environment; report that as a test-runner prerequisite rather than weakening the required Playwright acceptance tests. If the grapher regression is not acceptable, revert the scoped grapher and test-tooling changes while preserving the existing calculator modes and Vitest suite.
