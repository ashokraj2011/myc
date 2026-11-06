# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/bin-opr/artifacts/specification/spec.md`
- Source SHA-256: `7864acb54f6ac110f59dffa5b4c972707b214fe37601174d1d4be4a47ea9458f`

## Summary from “Agent brief”

The calculator user can convert the current calculator value to its binary representation using a
button. The converted value appears alongside the calculator display. The UI behavior must be
covered by a screenshot and Playwright tests. No additional boundary or special behavior was
confirmed. Do not infer extra controls, supported ranges, or error behavior.

## Actors

- Calculator user: requests conversion of the current calculator value.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert the current calculator value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** A value is currently shown in the calculator display.

- **Given** a value is shown in the calculator display
  **When** the user activates the binary-conversion button
  **Then** the calculator shows that current value's binary representation alongside the display.

- **Given** the user has requested binary conversion for the current calculator value
  **When** the conversion behavior is evaluated
  **Then** a screenshot demonstrates the UI behavior and a Playwright test covers the behavior.

## Failure and empty states

- **Empty:** Behavior when no calculator value is present is not specified by the pinned request or
  clarification.
- **Failure:** Conversion failure behavior and error presentation are not specified.
- **Partial:** Partial completion behavior is not specified.

## Permissions

Not applicable: the pinned request defines no roles or access restrictions; the calculator user
performs the described UI action.

## Boundary conditions

The pinned request and clarification specify no numeric range, precision, or special-value behavior.
No additional boundary behavior is required by this specification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator provides a button that converts the current calculator value, not a separately
  entered value, to its binary representation. *(S1)* [BIN-OPR:REQ-001]
- The converted binary representation is shown alongside the calculator display. *(S1)*
  [BIN-OPR:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- The UI behavior for converting the current calculator value and showing its binary representation
  alongside the display is demonstrated by screenshot evidence and covered by Playwright tests.
  *(S1)* [scope:SRI-2c51c258be3b] [BIN-OPR:AC-001]

## Non-functional requirements

None specified by the pinned request or clarification.

## Assumptions

- A calculator value is already shown when the user requests conversion, as confirmed in
  clarification Q-001.
- The binary representation is displayed alongside the calculator display, as confirmed in
  clarification Q-002.

## Out of scope

- Converting a separately entered number that is not the current calculator value.
- Additional boundary or special behavior; clarification Q-003 confirmed none.
