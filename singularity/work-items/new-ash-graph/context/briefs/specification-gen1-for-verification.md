# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-ash-graph`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/new-ash-graph/artifacts/specification/spec.md`
- Source SHA-256: `60f9f02220a312e0ec5b13332bc17acaca97e21719d225e395a5400d36fb0471`

## Summary from “Agent brief”

Create a graph plotter for an application user. The user-provided `graphsc.jpg` is a visual reference for a graphing-calculator layout: an expression panel on the left, a Cartesian graph canvas, and a mathematical keypad along the bottom. The required graph case is a circle centered at the origin with radius 6 units, verified by a Playwright test. No other graph types or behaviors are specified.

## Actors

Graph-plotter user: requests and views a plot. No additional roles or authority rules are specified.

## User scenarios

### S1 — Plot the radius-6 circle

**Priority:** P1
**Actor:** Graph-plotter user
**Context:** The graph-plotting interface displays an expression panel and a Cartesian graph canvas.

- **Given** the graph-plotting interface is available
  **When** a circle centered at (0,0) with radius 6 units is requested
  **Then** the circle is represented on the graph canvas and a Playwright test verifies the case.

## Failure and empty states

- **Empty:** Behavior when no plot is requested is not specified by the available evidence.
- **Failure:** Failure behavior is not specified by the available evidence.
- **Partial:** Partial-result behavior is not specified by the available evidence.

## Permissions

Not applicable: the Story specifies no roles, authentication, or access-control behavior.

## Boundary conditions

The only specified numeric case is a circle of radius 6 units centered at (0,0). Other ranges, limits, and boundary behavior are unspecified.

## Requirements

- The graph-plotter interface shall present an expression/algebra panel on the left, a Cartesian graph canvas with axes and grid, and a mathematical keypad along the bottom, following the generic layout shown in `graphsc.jpg`. *(S1)* [NEW-ASH-GRAPH:REQ-001]
- A Playwright test shall exercise the plotter with a circle centered at (0,0) with radius 6 units and verify that the circle is represented. [scope:SRI-15d4e5bd263a] *(S1)* [NEW-ASH-GRAPH:REQ-002]

- A Playwright test verifies that the graph plotter represents a circle centered at (0,0) with radius 6 units. *(S1)* [NEW-ASH-GRAPH:AC-001]
- Visual inspection confirms that the graph-plotter layout has a left expression/algebra panel, a Cartesian graph canvas with axes and grid, and a mathematical keypad along the bottom. *(S1)* [NEW-ASH-GRAPH:AC-002]

## Non-functional requirements

None specified by the pinned Story or recorded clarification.

## Assumptions

“Palyright” is interpreted as Playwright, and “circle of 6 unit radius in origin” is interpreted as a circle centered at (0,0) with radius 6 units; the user confirmed this interpretation. `graphsc.jpg` supplies the generic layout reference; its blank graph area does not specify additional graph types or behaviors.

## Out of scope

Additional graph types, behavior for other navigation destinations, limits, and non-functional targets are not specified by the available evidence.
