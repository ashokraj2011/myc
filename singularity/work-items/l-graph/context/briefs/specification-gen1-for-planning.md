# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `l-graph`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/l-graph/artifacts/specification/spec.md`
- Source SHA-256: `0c7637f13d6318817862454d97238c1ac637e2cb619a317a9b89082191496728`

## Summary from “Agent brief”

Create a polished, responsive graphing-calculator UI where a user can enter one equation using common arithmetic, x, and standard functions and see its graph. Users can edit or replace the equation and see the plotted curve update. The design should be inspired by Desmos without requiring pixel matching or Desmos branding. Parametric and implicit equations and multiple expressions are deferred. Playwright tests must verify the supported-equation plotting flow, updates, and graph usability at the expected viewport.

## Actors

The calculator user enters and edits the equation to be plotted. No separate roles or access authorities are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Plot and update an equation

**Priority:** P1
**Actor:** Calculator user
**Context:** The graphing calculator is open.

- **Given** the calculator is open with no equation plotted
  **When** the user enters one supported equation using common arithmetic, x, and a standard function
  **Then** the UI displays the equation's graph. *(SRI-8d1790c722db)*

- **Given** an equation is plotted
  **When** the user edits or replaces that equation
  **Then** the displayed curve updates to represent the edited or replacement equation.

### S2 — Use the graphing calculator at the expected viewport

**Priority:** P2
**Actor:** Calculator user
**Context:** The calculator is open at the viewport used for the product.

- **Given** the calculator is displayed at the expected viewport
  **When** the user views the graphing calculator
  **Then** its layout is clean and responsive, inspired by the Desmos reference without pixel matching or Desmos branding.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Before an equation is entered, no equation graph is required to be displayed.
- **Failure:** The source does not specify equation-error behavior or error wording; these remain unspecified.
- **Partial:** The source does not specify partial-success behavior.

## Permissions

Not applicable: the requested graphing calculator specifies no separate roles or access controls.

## Boundary conditions

One equation at a time is in scope. Inputs use common arithmetic, x, and standard functions. Parametric and implicit equations and multiple expressions are deferred. No numeric limits, viewport dimensions, or timeout requirements are specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator UI accepts one equation at a time using common arithmetic, x, and standard functions, and displays its graph. *(S1)* [L-GRAPH:REQ-001]
- The calculator UI updates the displayed curve when the user edits or replaces the equation. *(S1)* [L-GRAPH:REQ-002]
- Playwright tests verify that entering a supported equation displays its graph and that editing or replacing the equation updates the curve. *(S1)* [L-GRAPH:REQ-003] [scope:SRI-8d1790c722db]
- The graphing calculator presents a clean, responsive layout inspired by Desmos, without requiring pixel matching or Desmos branding. *(S2)* [L-GRAPH:REQ-004]

Acceptance criteria use the same stable, namespaced form:

- A Playwright test enters a supported equation and observes its graph, then edits or replaces it and observes the updated curve. *(S1)* [L-GRAPH:AC-001]
- Visual and inspection review finds a clean, responsive graphing-calculator layout inspired by Desmos, without pixel matching or Desmos branding, at the expected viewport. *(S2)* [L-GRAPH:AC-002]

## Non-functional requirements

No numeric latency, throughput, availability, accessibility, privacy, or retention requirements are specified in the pinned source or clarification.

Use governed requirement anchors here too (for example `[L-GRAPH:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The clarified equation scope and visual direction are accepted as the requested product boundaries for this specification. “Expected viewport” has no dimensions specified in the source.

## Out of scope

Parametric equations, implicit equations, and plotting multiple expressions are deferred. Pixel matching and Desmos branding are not required.
