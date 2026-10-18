# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-106`
- Producer: `specification` generation 2
- Consumer: `implementation`
- Source: `singularity/work-items/hex-106/artifacts/specification/spec.md`
- Source SHA-256: `25325315c7df8fe62b179571d1fc8ef79e3a3934bf9836c779554ae67a006be3`

## Summary from “Agent brief”

The calculator user needs a hex operation that converts a positive integer to its hexadecimal
value. The accepted input is a positive integer; the result must represent that integer in base 16.
The required acceptance example is 123 producing `0x7B`. Other display conventions, supported
numeric range, and behavior for inputs outside this domain remain unspecified.

## Actors

- **Calculator user:** supplies a positive integer to the hex operation and observes its hexadecimal
  value.

## User scenarios

### S1 — Convert a positive integer to its hexadecimal value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user can provide a positive integer to the hex
operation.

- **Given** the user supplies a positive integer
  **When** the user invokes the hex operation
  **Then** the calculator produces the hexadecimal value corresponding to that integer.

- **Given** the user supplies `123`
  **When** the user invokes the hex operation
  **Then** the calculator produces `0x7B`.

## Failure and empty states

- **Empty:** No separate empty-data state is specified; the operation takes a positive integer as
  input.
- **Failure:** Behavior for zero, negative, non-integer, or otherwise unsupported input is not
  specified by the pinned Story or clarification.
- **Partial:** No partial-result behavior is specified; the operation's stated outcome is a
  hexadecimal value for the supplied positive integer.

## Permissions

The calculator user may invoke the operation. No additional roles or permission distinctions are
specified.

## Boundary conditions

The input domain stated by the clarification is positive integers. No upper bound or numeric
representation constraints are specified. Behavior at zero, for negative values, or for
non-integers remains unspecified and is not an acceptance obligation in this specification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The hex operation accepts a positive integer as its input. *(S1)* [HEX-106:REQ-001]
- The hex operation converts the supplied positive integer to its hexadecimal value. *(S1)* [HEX-106:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For input `123`, the operation produces `0x7B`. *(S1)* [HEX-106:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[HEX-106:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

No non-functional requirement was specified in the pinned Story or clarification.

## Assumptions

- The hex operation is available within the calculator to its user.
- “Hexadecimal value” means the base-16 value of the supplied positive integer; this does not
  prescribe casing or display decoration.

## Out of scope

- Defining formatting conventions, supported numeric limits, or behavior for input outside the
  positive-integer domain.
- Changes to other calculator operations.
