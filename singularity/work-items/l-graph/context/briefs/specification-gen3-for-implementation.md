# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `l-graph`
- Producer: `specification` generation 3
- Consumer: `implementation`
- Source: `singularity/work-items/l-graph/artifacts/specification/spec.md`
- Source SHA-256: `01a144e853343bcd94716832aa5afd6e68b3d8f3b5e18a132982ce733f7a29c8`

## Summary from “Agent brief”

Create a polished, responsive graphing-calculator UI where a user can enter an equation and see its graph. Required equation forms are explicit `y=f(x)`, parametric, and polar. The implementation chooses and documents input syntax and supported function families. Users can edit or replace an equation and see the plotted curve update. The design should be inspired by Desmos without requiring pixel matching or Desmos branding. Playwright tests must verify plotting for each required form, updates, and graph usability at the expected viewport. These requirements follow clarification Q-001 for specification generation 3, which confirms broad equation support and names the required forms.

## Actors

The calculator user enters and edits the equation to be plotted. No separate roles or access authorities are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Plot and update an equation

**Priority:** P1
**Actor:** Calculator user
**Context:** The graphing calculator is open.

- **Given** the calculator is open with no equation plotted
  **When** the user enters an explicit equation in the form `y=f(x)`
  **Then** the UI displays its graph. *(SRI-8d1790c722db)*

- **Given** the calculator is open
  **When** the user enters a parametric equation
  **Then** the UI displays its graph.

- **Given** the calculator is open
  **When** the user enters a polar equation
  **Then** the UI displays its graph.

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

Required equation forms are explicit `y=f(x)`, parametric, and polar, as confirmed in clarification Q-001 for specification generation 3. The implementation chooses and documents input syntax and supported function families; none are prescribed by the user. No numeric limits, viewport dimensions, or timeouts are specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator UI accepts and graphs explicit `y=f(x)`, parametric, and polar equations. The implementation chooses and documents input syntax and supported function families. *(S1)* [L-GRAPH:REQ-001]
- The calculator UI updates the displayed curve when the user edits or replaces the equation. *(S1)* [L-GRAPH:REQ-002]
- Playwright tests verify that each required equation form can be entered and graphed, and that editing or replacing an equation updates the curve. *(S1)* [L-GRAPH:REQ-003] [scope:SRI-8d1790c722db]
- The graphing calculator presents a clean, responsive layout inspired by Desmos, without requiring pixel matching or Desmos branding. *(S2)* [L-GRAPH:REQ-004]

Acceptance criteria use the same stable, namespaced form:

- Playwright tests enter an explicit `y=f(x)`, a parametric equation, and a polar equation and observe each graph; they also edit or replace an equation and observe the updated curve. *(S1)* [L-GRAPH:AC-001]
- Visual and inspection review finds a clean, responsive graphing-calculator layout inspired by Desmos, without pixel matching or Desmos branding, at the expected viewport. *(S2)* [L-GRAPH:AC-002]

## Non-functional requirements

No numeric latency, throughput, availability, accessibility, privacy, or retention requirements are specified in the pinned source or clarification.

Use governed requirement anchors here too (for example `[L-GRAPH:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

Clarification Q-001 for specification generation 3 confirms the required equation forms and leaves input syntax and supported function families to implementation, which must document them. “Expected viewport” has no dimensions specified in the source.

## Out of scope

Pixel matching and Desmos branding are not required.
