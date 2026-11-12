# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `z-story`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/z-story/artifacts/specification/spec.md`
- Source SHA-256: `f737cfd8a99dd177988cd16067561f664d5775f1eb91c27f37eac836e5062c3d`

## Summary from “Agent brief”

Add a dedicated conversion operation to the existing calculator so a calculator user can convert a positive whole-number decimal value to its binary representation. Non-positive, fractional, or empty input produces an error indication. Unit tests cover successful conversion and rejected input. No input limit or exact error wording was specified.

## Actors

The calculator user may enter a value and invoke the conversion operation; no privileged role is required.

## User scenarios

### S1 — Convert a positive whole-number decimal value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** The existing calculator is available and the user has a positive whole-number decimal value to convert.

- **Given** a positive whole-number decimal value
  **When** the user invokes the dedicated conversion operation
  **Then** the calculator provides that value's binary representation.

### S2 — Reject values outside the supported input

**Priority:** P1
**Actor:** Calculator user

- **Given** an empty, zero, negative, or fractional value
  **When** the user invokes the dedicated conversion operation
  **Then** the calculator indicates an error rather than providing a conversion result.

## Failure and empty states

- **Empty:** An empty input is rejected with an error indication; no conversion result is provided.
- **Failure:** Zero, negative, and fractional inputs are rejected with an error indication; no conversion result is provided. Exact error wording is unspecified.
- **Partial:** Not applicable; the requested conversion is a single operation.

## Permissions

Not applicable: the requested calculator operation has no privileged role or access restriction.

## Boundary conditions

Only positive whole-number values are supported. Zero, negative, fractional, and empty values produce an error indication. No maximum value or exact error wording is specified; conversion is limited by the existing calculator's accepted numeric input.

## Requirements

- The existing calculator provides a dedicated operation that converts a positive whole-number decimal input to its binary representation. *(S1)* [Z-STORY:REQ-001]
- The conversion operation indicates an error and provides no conversion result for empty, zero, negative, or fractional input. *(S2)* [Z-STORY:REQ-002]

- A calculator user can invoke the conversion operation and receive the binary representation of a positive whole-number decimal input. *(S1)* [Z-STORY:AC-001]
- Empty, zero, negative, and fractional inputs produce an error indication rather than a conversion result. *(S2)* [Z-STORY:AC-002]
- Unit test cases cover successful positive whole-number conversion and rejection of empty, zero, negative, and fractional inputs. *(S1, S2)* [Z-STORY:AC-003] [scope:SRI-bf17ce947d7f]

## Non-functional requirements

None specified for this change.

## Assumptions

The existing calculator can accept numeric input and provide an operation for the requested conversion.

## Out of scope

Conversions other than positive whole-number decimal-to-binary conversion, and changes to unrelated calculator operations.
