# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `egl-story`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/egl-story/artifacts/specification/spec.md`
- Source SHA-256: `f3ad7211412cc10afc8b06ec358ad7ff6d513c092a1c9e57c24053029a4c90ad`

## Summary from “Agent brief”

Provide a hex conversion operation for positive integer input. The user activates the hex button to
see the integer represented in uppercase hexadecimal without a `0x` prefix. Inputs that are not
positive integers produce an error. The acceptance screenshot shows the button and a successful
conversion. No permission model or non-functional thresholds were requested.

## Actors

The person using the screen that provides the hex button. No additional roles or authority levels
are specified.

## User scenarios

### S1 — Convert a positive integer

**Priority:** P1
**Actor:** Screen user
**Context:** A positive integer is available as the value to convert.

- **Given** the value is a positive integer
  **When** the user activates the hex button
  **Then** the corresponding hexadecimal value is shown in uppercase, without a `0x` prefix.

## Failure and empty states

- **Empty:** Empty input is not a positive integer; show an error and do not show a conversion result.
- **Failure:** Zero, negative, fractional, or otherwise non-integer input shows an error and does not
  produce a hexadecimal result.
- **Partial:** No partial result is defined for a single conversion.

## Permissions

No role-based permissions or authorization behavior are specified.

## Boundary conditions

Positive integers are valid inputs. Zero, negative values, fractions, empty input, and values that
cannot be interpreted as integers are invalid and produce an error. Hexadecimal output uses
uppercase A-F and has no `0x` prefix. The Story specifies no upper bound; conversion must preserve
the integer value exactly rather than silently rounding it.

## Requirements

- For a positive integer input, the hex operation shall show its exact hexadecimal value using
  uppercase letters and no `0x` prefix. *(S1)* [egl-story:REQ-001]
- For empty input or any value that is not a positive integer, the operation shall show an error
  instead of a hexadecimal result. *(S1)* [egl-story:REQ-002]
- A screenshot of the screen shall show the hex button and a successful conversion. *(S1)*
  [egl-story:AC-001]

## Non-functional requirements

No non-functional requirements were specified in the pinned Story or its clarification.

## Assumptions

The screen user can provide the integer value to the hex operation. Input entry mechanics and error
copy are not defined by the Story.

## Out of scope

Changes to other operations, role-based access, non-functional thresholds, and a particular error
message or styling are outside this Story.
