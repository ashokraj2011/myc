# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `b-bin`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/b-bin/artifacts/specification/spec.md`
- Source SHA-256: `83e8bd9f807d7df81633789955a5b82482d78fd137683b76653f2031d1b7d647`

## Summary from “Agent brief”

Add calculator UI behavior that converts a user-entered positive integer decimal value to its binary representation. Unit tests must cover converting 2 and 10. Fractional and negative inputs are outside this confirmed scope; behavior for other invalid input is unspecified.

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a positive integer in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user has a positive integer decimal value to convert.

- **Given** the user enters the positive integer decimal value 2 in the calculator
  **When** the conversion is performed
  **Then** the calculator displays its binary representation, 10.

- **Given** the user enters the positive integer decimal value 10 in the calculator
  **When** the conversion is performed
  **Then** the calculator displays its binary representation, 1010.

## Failure and empty states

- **Empty:** Not applicable: this conversion does not operate on a collection of records.
- **Failure:** The pinned request does not define failure behavior for invalid input or a failed conversion.
- **Partial:** Not applicable: no partial operation is specified.

## Permissions

Not applicable: no role-based permissions are identified for local calculator use.

## Boundary conditions

The confirmed conversion domain is positive integer decimal values. Fractional and negative values are outside the confirmed scope. No upper bound is specified. Behavior for other invalid input is unspecified.

## Requirements

- The calculator UI converts a user-entered positive integer decimal value to its binary representation. *(S1)* [B-BIN:REQ-001]
- Provide unit test cases for the conversion, including the source-stated unit-test obligation [scope:SRI-bf17ce947d7f]. *(S1)* [B-BIN:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For input 2 the calculator displays 10, and for input 10 it displays 1010. *(S1)* [B-BIN:AC-001]

## Non-functional requirements

None specified by the pinned request or clarification.

## Assumptions

The calculator UI is the interface for this conversion, as confirmed in clarification. No particular control, placement, or presentation beyond displaying the binary representation is specified.

## Out of scope

Fractional and negative input are outside the confirmed positive-integer scope. Additional behavior for invalid input and any conversion features beyond the confirmed request are not specified.
