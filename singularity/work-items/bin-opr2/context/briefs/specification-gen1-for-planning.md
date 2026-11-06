# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr2`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/bin-opr2/artifacts/specification/spec.md`
- Source SHA-256: `6cb0259661104eae5cc809a8de081ab7299fd0dc7b491b97d147ddf5599f92f6`

## Summary from “Agent brief”

The calculator user needs a button that converts the decimal value currently shown in the
calculator display to its binary representation. The user indicated that all supported values are
intended and confirmed that acceptance requires both Playwright test cases and screenshot/visual
evidence. The exact treatment of negative and fractional values, including repeating binary
fractions, remains unknown and is recorded as an open question. This specification does not
authorize changes to unrelated calculator behavior.

## Actors

- **Calculator user:** selects the conversion button for the value currently shown.
- **Test runner:** exercises the conversion flow with Playwright and captures screenshot/visual
  evidence for acceptance.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert the value shown in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a decimal value.

- **Given** a decimal value is visible in the calculator display
  **When** the user selects the conversion button
  **Then** the calculator displays the binary representation of that value.

### S2 — Verify the conversion

**Priority:** P1
**Actor:** Test runner
**Context:** The conversion behavior is available.

- **Given** the conversion button and a decimal value in the calculator display
  **When** a Playwright test exercises the conversion and captures screenshot evidence
  **Then** the test and screenshot/visual evidence show the conversion control and binary result.

## Failure and empty states

- **Empty:** No stored records are part of this feature. Behavior when the display has no value is
  not specified by the Story.
- **Failure:** No dependency failure behavior or error wording is specified.
- **Partial:** No multi-step or persistence behavior is specified; partial completion is not
  applicable to the stated conversion flow.

## Permissions

No feature-specific permission or role restriction is stated. The calculator user may invoke the
conversion button under the application's existing access rules.

## Boundary conditions

The requested scope is “all” values, but the exact supported numeric domain and output precision
are not established. Negative and fractional values, including repeating binary fractions, are
covered by the open question below; this specification invents no numeric limits or rounding rule.

## Requirements

Numbered, testable obligations cite the scenario each serves.

- The calculator provides a button that converts the decimal value currently shown in its display
  and displays that value's binary representation. *(S1)* [BIN-OPR2:REQ-001]
- The conversion action is available for all decimal values supported and shown by the calculator.
  *(S1)* [BIN-OPR2:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A Playwright test exercises the conversion flow, and screenshot/visual evidence shows the
  conversion control and binary result. This covers the Story's “Screenshot playright testcases”
  acceptance statement. *(S2)* [BIN-OPR2:AC-001] [scope:SRI-bfb83cd3d1fd]

## Non-functional requirements

No non-functional requirement is stated in the pinned Story or recorded clarifications.

## Assumptions

- “Calc” means the existing calculator interface; the user confirmed the conversion is initiated by
  a button.
- “Value in display” means the decimal value currently shown when the user activates that button.

## Out of scope

No changes to unrelated calculator operations or additional interfaces are requested. Application
implementation is outside this specification-authoring phase.
