# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `after-cl`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/after-cl/artifacts/specification/spec.md`
- Source SHA-256: `cb3f9432b257d6abbb447575b320745896ae746d6b77aa92be176340a746902c`

## Summary from “Agent brief”

Add a graph-plotting experience to the existing app. A user can enter one equation per graph, covering 2D Cartesian functions, implicit equations, parametric equations, and polar equations. The experience should be polished and Desmos-inspired, without requiring an exact visual clone. Playwright browser tests must exercise equation entry and plotted output. This specification does not set equation syntax, supported operators, graph domains, or numeric rendering limits.

## Actors

The actor is a user of the existing calculator app. The Story does not define separate roles or elevated permissions.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Plot one supported equation

**Priority:** P1
**Actor:** Calculator user
**Context:** The graph-plotting experience is available.

- **Given** the graph-plotting experience is open
  **When** the user enters one 2D Cartesian function, implicit, parametric, or polar equation
  **Then** the plotter displays the corresponding graph, with no second equation overlaid on that graph.

### S2 — Use the graph-plotting experience

**Priority:** P2
**Actor:** Calculator user
**Context:** The user is viewing the graph-plotting experience.

- **Given** the graph-plotting experience is displayed
  **When** the user views it
  **Then** its visual treatment is polished and Desmos-inspired, without requiring an exact Desmos clone.

### S3 — Verify equation plotting in a browser

**Priority:** P1
**Actor:** Playwright test runner

- **Given** the graph-plotting experience is available in the browser
  **When** the Playwright suite exercises equation entry for each supported form
  **Then** it verifies that the corresponding graph is rendered.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Before an equation is entered, there is no equation-derived graph to verify. The Story does not prescribe empty-state wording or controls.
- **Failure:** The Story does not specify behavior or wording for invalid syntax, unsupported expressions, or rendering failures; this specification makes no promise about a particular error message or recovery behavior.
- **Partial:** A result that does not display the graph corresponding to the entered equation does not meet the success criterion. Partial-rendering behavior is not specified.

## Permissions

Not applicable: the Story identifies a general app user and defines no permission roles or restricted actions.

## Boundary conditions

The graphing scope is 2D: Cartesian functions, implicit equations, parametric equations, and polar equations. Each graph contains one equation; simultaneous equations on the same graph are not in scope. The pinned evidence does not establish an equation grammar, supported operators/functions, graph domain, sampling resolution, or numeric limits, so this specification does not claim particular values for them.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The plotter shall display the corresponding graph for one entered equation in each confirmed 2D form: Cartesian function, implicit, parametric, or polar. A graph contains no more than one equation. *(S1; pinned Story request and recorded clarification, specification generation 1)* [AFTER-CL:REQ-001]
- The graph-plotting experience shall have a polished, Desmos-inspired visual treatment; an exact visual clone is not required. *(S2; pinned Story request and recorded clarification, specification generation 1)* [AFTER-CL:REQ-002]
- Provide Playwright browser tests that exercise equation entry and verify plotted output for each supported equation form. *(S3; pinned Story acceptance criterion “Palyright tests” [scope:SRI-8d1790c722db] and recorded clarification, specification generation 1)* [AFTER-CL:REQ-003]

Acceptance criteria use the same stable, namespaced form:

- For each of the four confirmed equation forms, entering one equation displays its corresponding graph, and the graph does not overlay a second equation. *(S1)* [AFTER-CL:AC-001]
- A visual review finds the graph-plotting experience polished and Desmos-inspired; it need not reproduce Desmos exactly. *(S2)* [AFTER-CL:AC-002]
- The Playwright suite contains browser checks for equation entry and corresponding graph rendering for Cartesian function, implicit, parametric, and polar equations. *(S3)* [AFTER-CL:AC-003]

## Non-functional requirements

No quantitative latency, throughput, availability, accessibility, privacy, or retention target is stated in the pinned evidence. The qualitative visual requirement is captured by `AFTER-CL:REQ-002`.

Use governed requirement anchors here too (for example `[AFTER-CL:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions
- The graph-plotting experience is part of the existing app, as indicated by the repository brief.
- “Polished and Desmos-inspired” is the confirmed visual direction; it does not require pixel-for-pixel reproduction.

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope
- 3D graphing and multiple equations overlaid on one graph.
- Exact visual reproduction of Desmos.
- Equation syntax, operator/function coverage, graph domains, and numeric rendering limits not stated by the pinned evidence.

Named explicitly, so the boundary is reviewable rather than inferred.
