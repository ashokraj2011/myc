# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `1claude-hex`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/1claude-hex/artifacts/specification/spec.md`
- Source SHA-256: `e5cafbd73f68b4de5600111001cb2e032f98ed33658cc31f1bf6e814b867b46c`

## Summary from “Agent brief”

Calculator users can convert the current value immediately with a `hex` control in the scientific keypad toolbar. Positive whole numbers display as uppercase hexadecimal digits without a `0x` prefix. Empty input, zero, negative values, fractions, and non-numeric values display exactly `Not supported`. Acceptance requires automated tests for those input classes and fresh screenshots of a successful conversion and an unsupported-input state.

## Actors

The actor is a calculator user. No distinct permission or role is required by this Story.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Convert a positive integer to a hexadecimal value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is open, the scientific keypad is available, and a positive whole-number value is current.

- **Given** the current value is `255`
  **When** the user presses the `hex` control
  **Then** the calculator immediately displays `FF`, with no `0x` prefix, without requiring `=`.

- **Given** the current value is another positive whole number
  **When** the user presses the `hex` control
  **Then** the calculator immediately displays that value's uppercase hexadecimal digits.

### S2 — Reject values that are not positive whole numbers

**Priority:** P2
**Actor:** Calculator user
**Context:** The calculator is open and the current input is empty or is not a positive whole number.

- **Given** the current value is `0`, a negative number, or a fractional number
  **When** the user presses the `hex` control
  **Then** the calculator displays exactly `Not supported`.

- **Given** the current input is empty
  **When** the user presses the `hex` control
  **Then** the calculator displays exactly `Not supported`.

- **Given** the current input is non-numeric
  **When** the user presses the `hex` control
  **Then** the calculator displays exactly `Not supported`.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Pressing `hex` with no current input displays `Not supported`.
- **Failure:** A value that cannot be converted because it is zero, negative, fractional, or non-numeric displays `Not supported`. The Story defines no separate dependency or service failure state for this local conversion.
- **Partial:** No partial outcome is defined; the conversion either displays the hexadecimal value or `Not supported`.

## Permissions

The feature is available to the calculator user. The Story specifies no role-based access or permission change.

## Boundary conditions

A supported input is a whole-number value greater than zero. Zero, any negative value, any fractional value, empty input, and non-numeric input are unsupported and display exactly `Not supported`. A supported result uses uppercase A–F and has no `0x` prefix. The control is in the scientific keypad toolbar and converts immediately.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Pressing the `hex` control in the scientific keypad toolbar immediately converts the current positive whole-number value and displays its hexadecimal digits using uppercase A–F, without a `0x` prefix or requiring `=`. *(S1)* [1claude-hex:REQ-001]
- Pressing the `hex` control for zero, a negative value, a fractional value, empty input, or non-numeric input displays exactly `Not supported`. *(S2)* [1claude-hex:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- Acceptance evidence includes fresh screenshots of a successful hexadecimal conversion and the `Not supported` state, plus automated tests covering positive whole numbers and each unsupported input class: zero, negative, fractional, empty, and non-numeric. *(S1, S2)* [1claude-hex:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

No non-functional requirement is specified by the pinned Story or clarification answers.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The `hex` control acts on the current calculator value. The Story does not define behavior for entering or converting compound expressions; this specification covers the current value only. No further unresolved decision is recorded for this generation.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Binary, octal, or other base conversions; changes to ordinary arithmetic or other scientific functions; and a `0x` prefix are out of scope.
