# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-grapj`
- Producer: `implementation` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/new-grapj/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `265b5993ad5e66e99cfe15d79b362e22eef498b8277061e657b084f6727b0e9c`

## Summary from “Agent brief”

Implemented the graphing workspace while preserving the existing calculator modes. The workspace plots editable `y=f(x)` expressions and a parametrically rendered radius-6 circle on a labeled Cartesian grid, with the approved expression panel and controls. The Playwright acceptance test measures the rendered circle against grid-derived unit spacing. Local Vitest, Playwright, build, and targeted lint checks passed on Node 22.14.0. A required SFlow test attempt on Node 26.12.0 failed because its `localStorage` was unavailable; the person's PAM-001 decision now pins Node 22 with `.nvmrc` and amends the plan. Fresh required gate results remain pending. The required human visual review for `NEW-GRAPJ:AC-002` is still outstanding; no visual acceptance is claimed. The build retains its large-chunk warning.

## Changed components and decisions

- [src/components/FunctionGrapher.jsx](../../../../../src/components/FunctionGrapher.jsx) preserves function plotting and draws the parametric circle; it carries `NEW-GRAPJ:REQ-001`, `NEW-GRAPJ:REQ-002`, `NEW-GRAPJ:REQ-003`, and `NEW-GRAPJ:AC-002` source bindings.
- [src/App.jsx](../../../../../src/App.jsx) widens the shell only in Grapher mode and carries the `NEW-GRAPJ:REQ-003` and `NEW-GRAPJ:AC-002` bindings.
- [src/index.css](../../../../../src/index.css) styles the expression list, graph, controls, and responsive layout, with `NEW-GRAPJ:REQ-003` and `NEW-GRAPJ:AC-002` bindings.
- [e2e/graphing.spec.js](../../../../../e2e/graphing.spec.js) contains the `@ac:NEW-GRAPJ:AC-001` real-browser test for plotted function pixels, visible controls, and circle geometry relative to the rendered grid.
- [package.json](../../../../../package.json), [package-lock.json](../../../../../package-lock.json), [playwright.config.js](../../../../../playwright.config.js), and [.nvmrc](../../../../../.nvmrc) provide the isolated Playwright command, browser dependency, generated-output location, and the Node 22 runtime pin. PAM-001 records the person's decision to add `.nvmrc` as supporting build configuration and amend the plan. `npm test` remains scoped to `src` so Vitest does not collect the browser test. Not applicable: these are supporting test/runtime configuration changes; no product clause claims configuration.

## Tests and operational notes

- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm test` — passed; 3 files, 31 tests.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run test:e2e` — passed; 1 Playwright test, tagged `@ac:NEW-GRAPJ:AC-001`.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run build` — passed; Vite reports a 890.15 kB minified JavaScript chunk, above its 500 kB warning threshold.
- `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npx eslint src/components/FunctionGrapher.jsx e2e/graphing.spec.js playwright.config.js` — passed. Linting `src/App.jsx` separately still reports the pre-existing unused default `React` import and unused caught variable `e`; neither was changed for this task.
- The prior SFlow required test attempt ran `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json` on Node 26.12.0 and failed 17 of 31 tests with missing `localStorage`; 14 passed. The local Node 22.14.0 run passed all 31 tests. PAM-001 has now added `.nvmrc`; the required SFlow gate must be rerun to establish current evidence.
- Visual acceptance (`NEW-GRAPJ:AC-002`) remains for human review; the Playwright test does not substitute for it.
- `npm ci` reported 15 audit findings (4 moderate, 11 high); they were not investigated or remediated in this graph-plotter change.
