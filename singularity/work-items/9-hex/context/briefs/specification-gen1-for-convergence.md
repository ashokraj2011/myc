# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `9-hex`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/9-hex/artifacts/specification/spec.md`
- Source SHA-256: `ff50abd4bbd14d621d752439c28a29b977b5e6a1d2c2e4faf417c4852e58d5bf`

## Summary from “Agent brief”

Provide a calculator user with a hex conversion operator. It converts unsigned decimal integer input
within JavaScript's safe-integer range to uppercase hexadecimal digits without a prefix. Only the
canonical unsigned decimal form is valid; unsupported syntax and values outside the range display
`ERR`. Hexadecimal arithmetic is not part of this request. A screenshot of the completed feature is
to be captured and attached as implementation evidence; no reference screenshot was supplied.

## Actors

The calculator user invokes the operator. No separate roles or permission distinctions are specified.

## User scenarios

### S1 — Convert a supported integer

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and contains a canonical unsigned decimal integer from 0 through 9007199254740991.

- **Given** the input is `0`
  **When** the user invokes the hex operator
  **Then** the displayed result is `0`.

- **Given** the input is `255`
  **When** the user invokes the hex operator
  **Then** the displayed result is `FF`.

- **Given** the input is `9007199254740991`
  **When** the user invokes the hex operator
  **Then** the displayed result is `1FFFFFFFFFFFFF`.

### S2 — Reject unsupported input

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator contains an empty value, non-canonical number text, or a value outside the supported range.

- **Given** the input is empty, negative, signed, fractional, contains whitespace or non-digit characters, or has a leading zero other than the value `0`
  **When** the user invokes the hex operator
  **Then** the displayed result is `ERR`.

- **Given** the input is an unsigned decimal integer greater than `9007199254740991`
  **When** the user invokes the hex operator
  **Then** the displayed result is `ERR`.

## Failure and empty states

- **Empty:** An empty input is not an integer and produces `ERR`.
- **Failure:** No external dependency is required by the specified conversion. Invalid syntax and out-of-range values produce `ERR`.
- **Partial:** Conversion is a single operation; no partial-success state is specified.

## Permissions

The Story identifies a calculator user but defines no additional authorization policy. Access control is unchanged.

## Boundary conditions

- Valid input is the canonical unsigned base-10 form `0` or a nonzero digit followed by zero or more digits.
- The accepted numeric range is inclusive: `0` through `9007199254740991` (`Number.MAX_SAFE_INTEGER`).
- A value above that maximum, any negative value, a leading sign, a fraction, whitespace, or other non-canonical text produces `ERR`.
- Valid results use uppercase hexadecimal digits with no `0x` prefix or padding; zero displays as `0`.

## Requirements

- The hex operator shall convert a valid input in S1 from base 10 to base 16 and display uppercase digits without a prefix. *(S1)* [9-hex:REQ-001]
- The operator shall accept only canonical unsigned decimal integer text in the inclusive range 0 through 9007199254740991. *(S1, S2)* [9-hex:REQ-002]
- The operator shall display the literal `ERR` when the input is empty, syntactically invalid, or outside the accepted range. *(S2)* [9-hex:REQ-003]
- Implementation verification shall capture and attach a screenshot of the completed feature as evidence; the screenshot is not a visual reference to match. *(S1, S2)* [9-hex:REQ-004]

## Non-functional requirements

No latency, throughput, accessibility, privacy, or retention targets were supplied for this Story.

## Assumptions

- The operator receives the current calculator value as text and displays its result in the calculator's existing output area.
- The safe-integer maximum is the accepted upper limit, as explicitly confirmed during clarification.

## Out of scope

- Hexadecimal arithmetic or hexadecimal input.
- Changes to unrelated calculator operations or access-control behavior.
- Matching an unprovided reference screenshot; the requested screenshot is completion evidence only.
