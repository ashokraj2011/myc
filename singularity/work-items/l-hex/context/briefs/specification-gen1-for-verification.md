# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `l-hex`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/l-hex/artifacts/specification/spec.md`
- Source SHA-256: `014fb2b9b5e83ad86f7b6bec0b84a5366fdbb53279452615824624116ca2b868`

## Summary from “Agent brief”

The calculator needs a HEX operator that converts the current numeric display into hexadecimal notation while preserving the existing calculation flow. The feature is a UI-facing behavior: it must work for valid integer inputs, remain safe on empty or invalid states, and present output in a clear, accessible format. It does not expand the product into multi-base arithmetic beyond the stated hex conversion behavior.

## Actors

- Calculator user: enters numbers and triggers the operator from the standard calculator UI.
- Accessibility user: relies on meaningful labels and a readable display state.

## User scenarios

### S1 — Convert a decimal value to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** A value is shown in the calculator display and the user wants to inspect it in hexadecimal notation.

- **Given** the display contains `255`
  **When** the user presses the HEX operator
  **Then** the display changes to `FF` and the value is shown in uppercase hexadecimal form

- **Given** the display contains `10`
  **When** the user presses the HEX operator
  **Then** the display changes to `A`

### S2 — Handle empty and invalid input safely

**Priority:** P2
**Actor:** Calculator user
**Context:** The user triggers the operator before entering a value or after a partial entry.

- **Given** the display is empty
  **When** the user presses the HEX operator
  **Then** the calculator does not crash, freeze, or show a broken state

- **Given** the display contains a value that cannot be converted cleanly
  **When** the user presses the HEX operator
  **Then** the calculator leaves the display in a safe state and does not produce invalid formatting

## Failure and empty states

- **Empty:** With no current value, the HEX operator is ignored without an exception or visual corruption.
- **Failure:** If the value cannot be converted, the UI remains stable and no invalid numeric representation is shown.
- **Partial:** If a partial entry exists, the operator does not force a conversion until a valid numeric value is present.

## Permissions

- All users of the calculator may access the HEX operator in the same interface as other value-format actions.
- No privileged or authenticated role is required for this behavior.
- A user without this feature should still see the existing calculator behavior and not encounter a broken control.

## Boundary conditions

- The feature applies to the current numeric display value, not to arbitrary long integer strings from outside the app.
- The output uses uppercase hexadecimal digits `0-9` and `A-F`.
- The operator must remain safe for empty states, invalid inputs, and values that exceed the display's practical capacity.
- If a value cannot be displayed in the current calculator layout, the UI must not corrupt the value or the keypad.

## Requirements

1. The calculator must provide a HEX operator in the same interaction model as the other calculator value-format controls. *(S1)* [l-hex:REQ-001]
2. When the current display contains a valid integer value, the HEX operator must convert it to uppercase hexadecimal notation. *(S1)* [l-hex:REQ-002]
3. When the current display is empty or invalid, the HEX operator must not throw, freeze, or render malformed output. *(S2)* [l-hex:REQ-003]
4. The operator must preserve the calculator's normal usability, including clear visual feedback and consistent display stability during and after conversion. *(S1, S2)* [l-hex:REQ-004]
5. The feature must be accessible: a screen reader or keyboard user must be able to identify the control and understand the updated display state. *(S1)* [l-hex:REQ-005]

Acceptance criteria use the same stable, namespaced form:

- Pressing HEX on `255` results in the display showing `FF`. *(S1)* [l-hex:AC-001]
- Pressing HEX on an empty display leaves the calculator in a stable, non-crashing state. *(S2)* [l-hex:AC-002]
- Pressing HEX on a valid integer preserves the calculator UI layout and produces uppercase hexadecimal output. *(S1)* [l-hex:AC-003]

## Non-functional requirements

- The conversion response must feel immediate to the user; the result should appear within 150 ms for normal values in the calculator's local UI. *(l-hex:REQ-006)*
- The display must remain readable and keyboard-accessible with meaningful labels; no hidden or unlabeled controls may be introduced. *(l-hex:REQ-007)*
- The feature must not introduce a persistent error state or crash when a user presses the operator repeatedly. *(l-hex:REQ-008)*

## Assumptions

- The calculator operates on a single current value shown in the display at a given time.
- The feature is a visual conversion operator, not a broader multi-base calculation engine.
- Existing arithmetic patterns and UI conventions remain intact unless explicitly changed elsewhere in the product.

## Out of scope

- Full hexadecimal arithmetic with independent value-entry and operation modes.
- Any redesign of the calculator keypad beyond adding the HEX operator behavior.
- Data persistence or cross-session history for converted values.
