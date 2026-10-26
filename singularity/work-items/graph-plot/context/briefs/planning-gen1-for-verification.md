# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `graph-plot`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/graph-plot/artifacts/planning/plan.md`
- Source SHA-256: `afa1c96aa532b00c7525bb6abd7f5939293ae18f611cf12c0980d65b5804fbfe`

## Summary from “Agent brief”

Keep the existing React grapher mode, but scope its displayed function to the approved sine plot and explicitly show the 30-degree evaluation as 0.5. Use the supplied screenshot (DOC-001) as a visual reference for a graphing workspace and plotted graph; do not treat its extra expressions or controls as requirements. Prove the rendered sine result with a focused Vitest component test and visually review the grapher against DOC-001. The source image still needs a human scope disposition; no assumption here replaces that decision. Main risk: mixing degrees with the grapher's current radian x-axis; label and test the evaluation at x = π/6 (30°).

## Test strategy

Both approved clauses are verified with the focused grapher test and a visual review. The test checks the sine graph's fixed scope and the displayed sin(30°) value at x = π/6; the visual review checks the graphing screen against DOC-001 without treating unrelated screenshot controls as requirements. The table preserves each clause's exact approved ID and lists only exact source and test paths.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `GRAPH-PLOT:AC-001` | `src/components/FunctionGrapher.jsx` | `src/components/FunctionGrapher.test.jsx` | modified | The grapher shows the sin(x) curve and labels the 30° evaluation as 0.5, with the graphing workspace visually reviewed against DOC-001. |
| `GRAPH-PLOT:REQ-001` | `src/components/FunctionGrapher.jsx` | `src/components/FunctionGrapher.test.jsx` | modified | The UI plots sin(x) and represents sin(30°) = 0.5 at the degree-equivalent x = π/6 point. |

## Risks and rollback

The grapher currently samples the x-axis in radians, so a mistaken 30-radian annotation would look plausible but fail the approved degree claim. Verify sin(30°) through the π/6 coordinate and its explicit readout in the component test, then visually confirm the rendered annotation and curve. The existing screenshot is a visual reference, not authority for the screenshot's other controls; the open DOC-001 scope decision remains with a human. If the grapher change disrupts calculator integration, revert only the scoped grapher and test changes; `App` already owns mode selection and should not require unrelated edits. There is no retained governed test execution for specification generation 2, so this plan does not claim earlier test success.
