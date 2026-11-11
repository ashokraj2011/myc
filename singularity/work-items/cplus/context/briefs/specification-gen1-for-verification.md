# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `cplus`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/cplus/artifacts/specification/spec.md`
- Source SHA-256: `6b5b548d2581bec26332675d92ea88c3d8a3473732cab3f34ef32deb40b95fc7`

## Summary from “Agent brief”

Convert a decimal value to its binary representation through the calculator's existing input and result interaction. Preserve the calculator's existing numeric input behavior and do not add a new control or workflow. Acceptance includes a screenshot showing a representative decimal input and its correct binary output. Specific input boundaries and other screenshot cases remain unknown and are not expanded here.

## Actors

The calculator user enters values and reads displayed calculation results using the existing calculator interaction. No additional roles or authority are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a decimal value in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and its existing input/result interaction is in use.

- **Given** the calculator is ready for input
  **When** the user enters a representative decimal value using the existing interaction
  **Then** the calculator displays that value's correct binary representation as its result.

- **Given** a representative decimal input has been entered
  **When** the resulting calculator state is captured
  **Then** the screenshot shows the input and its correct binary output. [scope:SRI-bfb83cd3d1fd]

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No special empty state is specified; retain the calculator's existing behavior before a value is entered.
- **Failure:** Error behavior for invalid or unsupported values is unknown; preserve existing calculator behavior.
- **Partial:** Partial conversion behavior is not specified.

## Permissions

Not applicable: the pinned request specifies no differentiated roles or permissions; the calculator user uses the existing interaction.

## Boundary conditions

Preserve the calculator's existing numeric input behavior. Specific decimal ranges, precision, fractional/negative handling, and limits are unknown and remain outside confirmed acceptance.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Convert a decimal value entered through the calculator's existing input/result interaction to its correct binary representation. *(S1)* [CPLUS:REQ-001]
- Preserve existing numeric input behavior; do not introduce new controls or workflows for this conversion. *(S1)* [CPLUS:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A screenshot shows a representative decimal input and its correct binary output. *(S1)* [CPLUS:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[CPLUS:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

Not applicable: no non-functional requirement is stated in the pinned request or clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

- The existing calculator interaction is the intended input and result surface.
- The representative input and screenshot described in clarification are sufficient for the currently stated acceptance criterion; no other screenshot cases were specified.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

- New calculator controls or workflows.
- Specific input limits, error messages, or behavior beyond preserving the existing numeric input behavior.
- Additional screenshot scenarios beyond a representative input and correct binary output.
