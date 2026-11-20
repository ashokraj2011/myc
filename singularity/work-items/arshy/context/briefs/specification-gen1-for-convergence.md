# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `arshy`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/arshy/artifacts/specification/spec.md`
- Source SHA-256: `fc5a6225b6015b894f41fc76cbcbe63d0042612dac9a7ab3de46ef801b9d52a1`

## Summary from “Agent brief”

An app user can use a Desmos-inspired plotter to enter and view general 2D Cartesian equations. The required example is a circle of radius 6 centered at the origin, and Playwright coverage must verify that case. No attachment was available, so the Desmos link is a reference direction rather than a pixel-level design specification. No additional graph limits or non-functional constraints were supplied.

## Actors

The app user enters a Cartesian equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

### S1 — Plot a Cartesian equation

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available in the existing application.

- **Given** the graph plotter is available
  **When** the user enters the Cartesian equation `y = x`
  **Then** the plotter displays its corresponding 2D graph.

### S2 — Verify the required circle

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available.

- **Given** the graph plotter is available
  **When** the user enters `x^2 + y^2 = 36`
  **Then** the plotter displays a circle centered at `(0, 0)` with radius `6`.

## Failure and empty states

- **Empty:** No Story-specific empty-state behavior is specified.
- **Failure:** No invalid-expression or rendering-failure behavior is specified.
- **Partial:** No partial-completion behavior is specified.

## Permissions

Not applicable: the Story specifies a single app-user role and no permission tiers.

## Boundary conditions

The required circle has radius `6` and center `(0, 0)`. No other input, viewport, size, count, or timeout limits are specified.

## Requirements

- The plotter shall accept user-supplied 2D Cartesian equations and display their corresponding graphs. *(S1)* [ARSHY:REQ-001]
- The plotter shall display a circle of radius `6` centered at `(0, 0)`, represented by `x^2 + y^2 = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [ARSHY:REQ-002]

- A Playwright test shall verify that `x^2 + y^2 = 36` is plotted as a circle centered at `(0, 0)` with radius `6`. *(S2)* [ARSHY:AC-001]
- A Playwright test shall verify that entering `y = x` displays its corresponding 2D Cartesian graph. *(S1)* [ARSHY:AC-002]

## Non-functional requirements

None specified for this change.

## Assumptions

- The supplied Desmos URL is a conceptual reference; no attached image or exact visual specification is available.
- “General 2D Cartesian equations” does not define a broader expression grammar or additional Desmos features.

## Out of scope

No additional plotting features beyond general 2D Cartesian equation plotting and the required circle case are committed. Exact visual reproduction of Desmos and constraints not stated in the Story or clarification are out of scope.
