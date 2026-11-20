# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `arshy`
- Producer: `specification` generation 3
- Consumer: `convergence`
- Source: `singularity/work-items/arshy/artifacts/specification/spec.md`
- Source SHA-256: `b52f27bcd8c7301df840890d538e858c80e5bf33db686ef051bf02dda9f26230`

## Summary from “Agent brief”

An app user can use a plotter for 2D Cartesian equations. Supported forms are explicit `y = f(x)` and implicit `F(x,y) = 0`, using numeric constants, `x` and `y`, parentheses, `+`, `-`, `*`, `/`, and `^`. Playwright coverage must verify the required radius-6 circle centered at the origin. The supplied Desmos URL is functional inspiration for equation entry and graph display only; no pixel-level match or additional Desmos-specific UI/interaction is required.

## Actors

The app user enters a Cartesian equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

### S1 — Plot supported Cartesian equations

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available in the existing application.

- **Given** the graph plotter is available
  **When** the user enters the explicit equation `y = 2*x + 1`
  **Then** the plotter displays its corresponding 2D graph.

- **Given** the graph plotter is available
  **When** the user enters the explicit equation `y = (x - 2) / 2`
  **Then** the plotter displays its corresponding 2D graph.

- **Given** the graph plotter is available
  **When** the user enters the implicit equation `x - y = 0`
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

The required circle has radius `6` and center `(0, 0)`. The accepted equation forms and operators are defined in `ARSHY:REQ-001`. No additional graph-range, size, count, timeout, interaction, accessibility, or performance constraints are specified.

## Requirements

- The plotter shall accept and display 2D Cartesian equations in explicit `y = f(x)` or implicit `F(x,y) = 0` form, using numeric constants, `x` and `y`, parentheses, addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and exponentiation (`^`). *(S1)* [ARSHY:REQ-001]
- The plotter shall display a circle of radius `6` centered at `(0, 0)`, represented by `x^2 + y^2 = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [ARSHY:REQ-002]

- A Playwright test shall verify that `x^2 + y^2 = 36` is plotted as a circle centered at `(0, 0)` with radius `6`. *(S2)* [ARSHY:AC-001]
- Playwright tests shall verify that the supported equation grammar plots the explicit equations `y = 2*x + 1` and `y = (x - 2) / 2`, and the implicit equation `x - y = 0`. *(S1)* [ARSHY:AC-002]

## Non-functional requirements

None specified for this change.

## Assumptions

- The supplied Desmos URL is the sole reference; “like” means functional inspiration for equation entry and graph display, not pixel-level resemblance or additional Desmos-specific UI/interaction.
- The supported equation forms and operators are limited to those confirmed in clarification; no broader Desmos grammar is implied.

## Out of scope

No additional plotting features beyond the confirmed equation forms and required circle case are committed. Exact visual reproduction of Desmos, additional Desmos-specific UI/interaction, additional equation syntax, and constraints not stated in the Story or clarification are out of scope.
