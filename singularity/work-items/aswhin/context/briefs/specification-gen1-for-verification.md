# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `aswhin`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/aswhin/artifacts/specification/spec.md`
- Source SHA-256: `3c78e604fcd69b7210375e283e4b1c471e785b07007ac7c9b052325869d6aee2`

## Summary from “Agent brief”

Implement conversion of positive decimal inputs to their binary representation in the calculator. The calculator user enters a positive decimal value and sees its binary value; for input 2, the display is 10. The requested screenshot is visual evidence of the displayed result. This specification does not define behavior for non-positive or non-decimal inputs.

## Actors

Calculator user: enters a value and views its binary representation. No privileged role or separate authorization is specified.

## User scenarios

### S1 — A calculator user converts a positive decimal value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available for input and display.

- **Given** the calculator user has a positive decimal value to convert
  **When** the user requests its binary representation
  **Then** the calculator displays that value in binary.

- **Given** the calculator user enters the positive decimal value 2
  **When** the user requests its binary representation
  **Then** the calculator displays 10 and a screenshot is captured showing that result. [scope:SRI-9b082baa4528]

## Failure and empty states

- **Empty:** Not applicable: this conversion does not depend on a collection of records.
- **Failure:** No failure behavior is specified by the pinned request or clarification.
- **Partial:** No partial-result behavior is specified by the pinned request or clarification.

## Permissions

Not applicable: the pinned request identifies no restricted actions or distinct permissions.

## Boundary conditions

The specified input domain is positive decimal values. Behavior for zero, negative values, and non-decimal input is unspecified and is not an acceptance requirement.

## Requirements

- The calculator shall display the binary representation of a positive decimal input when the user requests conversion. *(S1)* [ASWHIN:REQ-001]

- For input 2, the calculator displays 10 and a screenshot showing the displayed result is captured. *(S1)* [ASWHIN:AC-001]

## Non-functional requirements

None for this change; no non-functional requirement is stated in the pinned request or clarification.

## Assumptions

The user-confirmed interpretation is that “positive non decimal” means positive decimal inputs converted to binary, and that input 2 displays 10.

## Out of scope

Handling of zero, negative, or non-decimal inputs; other base conversions; and behavior beyond the confirmed positive-decimal-to-binary conversion.
