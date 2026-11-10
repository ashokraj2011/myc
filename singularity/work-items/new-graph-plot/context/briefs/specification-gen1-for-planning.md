# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-graph-plot`
- Producer: `specification` generation 1
- Consumer: `planning`
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
