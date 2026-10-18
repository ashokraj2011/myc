# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-202`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/hex-202/artifacts/specification/spec.md`
- Source SHA-256: `b5b7b66078468fd1a94c06041d6c683e070a5972958e835b22051a402b77543c`

## Summary from “Agent brief”

The calculator user can use a Hex control to convert a positive integer to its hexadecimal value.
Inputs that are not positive integers, including empty input, must show a visible error; the exact
error wording is not prescribed. The application must be run and a screenshot captured showing the
Hex control and a successful conversion. This specification does not define unrelated calculator
behavior or a particular hexadecimal formatting convention.

## Actors

The calculator user enters or supplies a value and activates the Hex control. No separate
authorization roles are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Convert a positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is running and has a positive integer as the current input.

- **Given** the current input is a positive integer
  **When** the user activates the Hex control
  **Then** the calculator displays that integer's hexadecimal value.

### S2 — Reject inputs that are not positive integers

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is running and the current input is not a positive integer.

- **Given** the current input is zero, a negative integer, a decimal or fraction, or nonnumeric text
  **When** the user activates the Hex control
  **Then** the calculator shows a visible error; its exact wording is unspecified.

- **Given** the current input is empty
  **When** the user activates the Hex control
  **Then** the calculator shows a visible error; its exact wording is unspecified.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Empty input is invalid; activating the Hex control shows a visible error.
- **Failure:** No external dependency or dependency-failure behavior is specified for this conversion.
- **Partial:** No partial-conversion state is specified.

## Permissions

The calculator user may enter a value and activate the Hex control. The Story specifies no
restricted roles or differing permissions.

## Boundary conditions

The accepted input class is a positive integer (greater than zero). Zero, negative integers,
decimals or fractions, empty input, and nonnumeric input are invalid and produce a visible error.
No upper numeric limit or exact error wording is specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- When the current calculator input is a positive integer and the user activates the Hex control,
  display its hexadecimal value. *(S1)* [HEX-202:REQ-001]
- When the current input is not a positive integer, show a visible error upon activation of the Hex
  control; this includes zero, negative integers, decimals or fractions, empty input, and nonnumeric
  input. Exact error wording is unspecified. *(S2)* [HEX-202:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- Run the calculator and capture a screenshot showing the Hex control and a successful conversion
  of a positive integer. [scope:SRI-465cc230c394] *(S1)* [HEX-202:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[HEX-202:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

No non-functional requirements are specified by the pinned Story or its clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The calculator presents a current input value that the user can submit through its Hex control.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Unrelated calculator operations and behavior not stated in the pinned Story or its clarification.
