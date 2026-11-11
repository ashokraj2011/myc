# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `l-graph`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/l-graph/artifacts/planning/plan.md`
- Source SHA-256: `ae8cc128a95d3d77fd11d4ffd39e82137440f006df28dd6d7281db72a1972b46`

## Summary from “Agent brief”

Extend the existing React `FunctionGrapher` mode rather than introducing a separate application or
graphing service. Keep the current mathjs-based expression evaluation and canvas renderer, but
separate equation parsing/sampling from drawing so explicit, parametric, and polar curves share
bounded sampling and redraw behavior. Provide documented input forms: `y = <expression>` (or a bare
expression) for explicit curves, `x(t) = <expression>, y(t) = <expression>` for parametric curves,
and `r = <expression>` for polar curves. Support mathjs arithmetic, constants, and documented
standard functions; do not use JavaScript `eval`. Editing the input redraws the active curve.

The implementation owns responsive graph workspace layout and controls in `FunctionGrapher.jsx`
and the app styles, integrated through the existing `App.jsx` grapher mode. Add Playwright coverage
for all three syntaxes, equation replacement, and graph usability at the project viewport, using a
small dedicated test file and Playwright configuration. The repository currently has Vitest/jsdom
tests and no evidenced Playwright setup, so its dependency and scripts/configuration must be added
as supporting setup, not represented as delivered product behavior. Risks include parser edge cases,
discontinuous or non-finite samples, canvas sizing across device-pixel ratios, and narrow viewports.
Keep sampling bounded, break paths at invalid/discontinuous samples, and use responsive layout with
canvas resize handling. Rollback is limited to the grapher UI/parser/styles and Playwright setup;
the existing calculator modes and evaluator remain untouched.

## Test strategy

Use the existing application entry point and verify the graph through rendered canvas pixels or a
stable accessible graph state, not merely by asserting that input text changed. The new Playwright
suite must exercise the app at its configured local base URL, select Grapher mode, enter each
documented syntax, and establish that a non-empty graph is drawn. For the update case, compare
rendered graph output before and after replacing the equation. At the configured desktop viewport
and a narrow mobile viewport, verify the equation input, controls, and graph remain visible and
usable without horizontal overflow. A reviewer separately inspects the actual rendered screen and
source layout; test completion does not substitute for visual acceptance.

Add exactly one row per clause, using its
fully qualified ID (for example, `L-GRAPH:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `l-graph`'s Story evidence directory, not product source.
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
| `L-GRAPH:AC-001` | - | `e2e/function-grapher.spec.js` | test-only | Browser scenarios observe explicit, parametric, and polar plots and a changed plot after editing/replacement. |
| `L-GRAPH:AC-002` | `src/components/FunctionGrapher.jsx` `src/App.jsx` `src/App.css` `src/index.css` | verification: L-GRAPH:AC-002 | modified | Reviewer finds the graph workspace clean and usable at the expected desktop viewport and a narrow viewport, without Desmos branding or required pixel matching. |
| `L-GRAPH:REQ-001` | `src/components/FunctionGrapher.jsx` | `e2e/function-grapher.spec.js` | modified | The documented explicit, parametric, and polar syntaxes each produce a plotted curve using the documented supported mathjs functions. |
| `L-GRAPH:REQ-002` | `src/components/FunctionGrapher.jsx` | `e2e/function-grapher.spec.js` | modified | Editing or replacing the equation redraws the curve to reflect the new expression. |
| `L-GRAPH:REQ-003` | - | `e2e/function-grapher.spec.js` | test-only | Playwright exercises all required forms and confirms an edited/replaced equation changes the plotted output. |
| `L-GRAPH:REQ-004` | `src/components/FunctionGrapher.jsx` `src/App.jsx` `src/App.css` `src/index.css` | `e2e/function-grapher.spec.js` | modified | Grapher layout is clean and responsive, inspired by the reference without pixel matching or Desmos branding. |

## Risks and rollback

Expression parsing may accept unsupported identifiers or fail on malformed input; keep evaluation
on mathjs compiled expressions, document the supported subset, and show a non-plot error state
without silently treating invalid expressions as valid. Large parameter ranges and discontinuities
can create slow or visually misleading curves; cap sample counts, ignore non-finite samples, and
break paths where samples jump or leave the bounded draw area. Canvas sizing can drift after layout
changes or device-pixel-ratio changes; redraw on resize and verify at desktop and narrow viewports.
If the change regresses the existing graph mode, revert only the grapher implementation/style
changes; the separate Playwright setup can remain only if the project continues to use it.
