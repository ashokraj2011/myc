# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-hex`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/anu-hex/artifacts/specification/spec.md`
- Source SHA-256: `1299961f984211ca2937ec0cbdacdda4648cce48e7930e0c84d66efbb74bb6ff`

## Summary from “Agent brief”

Add a yellow hex-conversion button to the calculator. A calculator user activates it to convert the currently displayed numeric value to an equivalent hexadecimal representation. The button must be visible and its conversion demonstrable on screen. The request does not define representation formatting or behavior for non-numeric/error displays; do not infer additional requirements from those gaps.

## Actors

The calculator user operates the existing calculator. No additional roles or differentiated permissions are specified.

## User scenarios

### S1 — Convert the displayed calculator value

**Priority:** P1  
**Actor:** Calculator user  
**Context:** A numeric value is currently displayed in the calculator.

- **Given** a numeric value is displayed  
  **When** the user activates the hex-conversion button  
  **Then** the calculator displays an equivalent hexadecimal representation of that value.

### S2 — Identify the conversion control

**Priority:** P2  
**Actor:** Calculator user  
**Context:** The calculator is visible on screen.

- **Given** the calculator is visible  
  **When** the user looks for the hex-conversion control  
  **Then** a visible yellow button for hex conversion is present.

## Failure and empty states

- **Empty:** No separate empty-state behavior is specified. The conversion requirement applies when a numeric value is displayed.
- **Failure:** No conversion-failure behavior or error wording is specified.
- **Partial:** No partial-conversion behavior is specified.

## Permissions

No special permission or authorization requirement is specified; the calculator user may activate the button.

## Boundary conditions

The requirement concerns the currently displayed numeric value. No numeric range, precision, prefix, letter-case, or behavior for non-numeric/error displays is specified.

## Requirements

- When activated while a numeric value is displayed, the hex-conversion button converts that displayed value to an equivalent hexadecimal representation. *(S1)* [ANU-HEX:REQ-001]
- The calculator presents the hex-conversion control as a visible yellow button. *(S2)* [ANU-HEX:REQ-002]

Acceptance criteria:

- On screen, the user can identify the yellow hex-conversion button and activate it to display an equivalent hexadecimal representation of the current numeric value. *(S1, S2)* [ANU-HEX:AC-001]

## Non-functional requirements

No non-functional requirements were specified in the pinned request or clarification.

## Assumptions

The button converts the numeric value shown by the calculator when activated, rather than converting an unevaluated expression. This follows the user's clarification that the current displayed value is to be converted.

## Out of scope

The request does not define the hexadecimal prefix, letter case, numeric range or precision, handling of non-numeric/error displays, or which calculator modes contain the button. This specification does not set requirements for those details.
