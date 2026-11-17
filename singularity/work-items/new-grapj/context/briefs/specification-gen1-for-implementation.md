# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `new-grapj`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/new-grapj/artifacts/specification/spec.md`
- Source SHA-256: `beac052ea569290aeef8e3def12f6bdec803050b6ab1419bd91d33700c225875`

## Summary from “Agent brief”

Create a 2D Cartesian function plotter for an application user. It must render mathematical functions in a Cartesian plane and include the specifically requested circle centered at the origin with radius 6 units. A Playwright test must verify that circle. The missing reference attachment provides no available layout or control details, so this specification does not prescribe them.

## Actors

Application user: requests a function plot. No distinct roles or permission authority are specified.

## User scenarios

### S1 — Plot a mathematical function

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a mathematical function plot
  **Then** the plotter renders the function in a two-dimensional Cartesian coordinate plane.

### S2 — Plot and verify the specified circle

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a circle centered at the origin with radius 6 units
  **Then** the rendered graph represents the circle `x² + y² = 36`.

- **Given** the circle plot is available
  **When** the specified Playwright test checks it
  **Then** the test verifies that the circle is centered at the origin and has radius 6 units.

## Failure and empty states

- **Empty:** No empty-state behavior is specified by the pinned request.
- **Failure:** No failure behavior is specified by the pinned request.
- **Partial:** No partial-result behavior is specified by the pinned request.

## Permissions

Not applicable: the request identifies an application user and specifies no distinct roles or permission controls.

## Boundary conditions

The only specified numeric boundary is a circle of radius 6 units centered at the origin. No other domain, range, count, precision, or timeout is specified.

## Requirements

- The application shall render requested mathematical functions in a two-dimensional Cartesian coordinate plane. *(S1)* [NEW-GRAPJ:REQ-001]
- The plotter shall render a circle centered at `(0,0)` with radius 6 units, represented by `x² + y² = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [NEW-GRAPJ:REQ-002]

- A Playwright test shall verify that the rendered circle is centered at the origin and has radius 6 units. *(S2)* [NEW-GRAPJ:AC-001]

## Non-functional requirements

None stated in the pinned request or clarification.

## Assumptions

The plotter accepts a user request to plot a mathematical function. The pinned request and clarification do not define its input syntax or specific controls.

## Out of scope

Visual parity with the unavailable attachment, specific input syntax or control design, additional plot types, and unrequested numeric or non-functional limits are not defined by this specification.
