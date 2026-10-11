# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `i-hex`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/i-hex/artifacts/specification/spec.md`
- Source SHA-256: `867c1ba0dc89f6dbf86582c3c7836aafb75c6f99d5610253842c0f0a9c79231e`

## Summary from “Agent brief”

Add a Hex action to the scientific calculator keypad for calculator users. When the displayed value
is a valid decimal integer, the action converts it to uppercase hexadecimal without a prefix. The
action remains disabled for empty, invalid, or non-integer displays. Delivery evidence consists of
one screenshot showing a successful result and unit tests covering successful conversion and invalid
input. Hexadecimal entry, arithmetic syntax, radix modes, and other base conversions are excluded.

## Actors

- **Calculator user:** May invoke the Hex action when it is enabled and observe the converted result.
- The feature introduces no privileged or administrative operations.

## User scenarios

### S1 — Convert the displayed decimal integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The scientific calculator keypad is visible and the display contains a valid decimal
integer.

- **Given** the display contains the decimal integer `255`
  **When** the user activates Hex
  **Then** the display shows `FF`

- **Given** the display contains any valid decimal integer
  **When** the user activates Hex
  **Then** the displayed result uses uppercase hexadecimal digits and has no radix prefix

### S2 — Prevent unsupported conversion

**Priority:** P2
**Actor:** Calculator user
**Context:** The scientific calculator keypad is visible but the current display is empty, invalid,
or non-integer.

- **Given** the displayed value is not a valid decimal integer
  **When** the user views the scientific keypad
  **Then** Hex is disabled and cannot alter the display

## Failure and empty states

- **Empty:** Hex is disabled when the display has no value.
- **Failure:** Hex is disabled when the display contains an invalid or unsupported value.
- **Partial:** Conversion is atomic; the display changes only after a successful conversion.

## Permissions

No authentication or role distinction applies. Any calculator user can use Hex when its input is
valid; otherwise the disabled control remains visible on the scientific keypad.

## Boundary conditions

- Input is the decimal integer currently represented by the calculator display.
- Non-integer, empty, and invalid display values are unsupported and keep Hex disabled.
- Output uses uppercase hexadecimal digits with no `0x` or other radix prefix.
- Conversion replaces the displayed value in one operation.
- The feature is limited to the scientific calculator keypad.

## Requirements

- The scientific calculator keypad shall expose a Hex action. *(S1, S2)* [i-hex:REQ-001]
- Hex shall be enabled only when the display represents a valid decimal integer. *(S1, S2)*
  [i-hex:REQ-002]
- Activating Hex shall replace the valid displayed decimal integer with its hexadecimal equivalent.
  *(S1)* [i-hex:REQ-003]
- Hexadecimal output shall use uppercase digits and shall not include a radix prefix. *(S1)*
  [i-hex:REQ-004]
- An empty, invalid, or non-integer display shall leave Hex disabled and the display unchanged.
  *(S2)* [i-hex:REQ-005]
- Delivery evidence shall include one screenshot showing a successful Hex result. *(S1)*
  [i-hex:REQ-006]
- Unit tests shall cover successful conversion and rejected invalid input. *(S1, S2)*
  [i-hex:REQ-007]

- With `255` displayed on the scientific calculator, activating Hex displays `FF`.
  *(S1)* [i-hex:AC-001]
- A successful result screenshot visibly includes the scientific keypad's Hex action and its
  converted display value. *(S1)* [i-hex:AC-002]
- Automated unit tests pass for at least one valid decimal-to-hexadecimal conversion and at least
  one invalid or unsupported input. *(S1, S2)* [i-hex:AC-003]
- Hex cannot be activated while the display is empty, invalid, or non-integer. *(S2)*
  [i-hex:AC-004]

## Non-functional requirements

- No separate latency, throughput, availability, privacy, or retention target was supplied for this
  local calculator operation.

## Assumptions

- The current calculator display remains the single source and destination for the conversion.
- Existing calculator conventions determine how a user reaches the scientific keypad.
- "Invalid input" in the requested test evidence includes a value for which Hex must be disabled.

## Out of scope

- Entering hexadecimal digits directly.
- Evaluating hexadecimal arithmetic syntax such as `0xFF` expressions.
- A dedicated programmer or radix mode.
- Binary, octal, or other base conversions.
- Adding Hex to the standard calculator keypad.
