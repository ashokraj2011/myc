# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/c-hex/artifacts/specification/spec.md`
- Source SHA-256: `76c15e32ef70ea5fa35ef4e732c4f893af1a35d3348f0b31ca64e3e4f3446466`

## Summary from “Agent brief”

Add a browser-based page to the existing application where a user can enter a positive base-10
whole number and receive its uppercase hexadecimal representation without a `0x` prefix. Any input
outside that supported domain must display exactly `Not Supported`. Validation must include
screenshot evidence of the implemented page. Authentication changes, additional conversion bases,
and non-browser clients are excluded.

## Actors

- **User:** Uses the existing browser application to submit a value and view either its hexadecimal
  representation or the unsupported-input message. No new privileged operation or role is required.

## User scenarios

### S1 — Convert a supported positive whole number

**Priority:** P1
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the user enters `255`
  **When** the user requests conversion
  **Then** the page displays `FF`.

- **Given** the user enters any positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays the equivalent uppercase hexadecimal value without a `0x` prefix.

### S2 — Reject an unsupported input

**Priority:** P2
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the entered value is not a positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays exactly `Not Supported`.

## Failure and empty states

- **Empty:** An empty submitted value is unsupported and displays exactly `Not Supported`.
- **Failure:** Non-numeric text, zero, negative numbers, decimal values, and every other value
  outside the supported domain display exactly `Not Supported`.
- **Partial:** Conversion is a single observable operation; no partial-success state is defined.

## Permissions

- Any user who can access the existing browser application may use the conversion page.
- This feature introduces no new authentication, authorization, or role-management behavior.

## Boundary conditions

- The supported domain is a base-10 whole number strictly greater than zero.
- `1` is the lowest supported input and produces `1`.
- `0`, negative numbers, decimal values, empty input, and non-numeric input are unsupported.
- A valid result uses uppercase hexadecimal digits `0` through `9` and `A` through `F`.
- A valid result never includes a `0x` prefix.
- No maximum supported positive whole number was established by the governed inputs; an
  implementation must not introduce an undocumented upper boundary.

## Requirements

- The existing application shall provide a browser-based page where a user can enter a value and
  request hexadecimal conversion. *(S1, S2; DOC-002 Q-004)* [c-hex:REQ-001]
- For a positive base-10 whole number greater than zero, the page shall display its mathematically
  equivalent hexadecimal value. *(S1; DOC-002 Q-001, Q-002)* [c-hex:REQ-002]
- A supported result shall use uppercase hexadecimal characters and shall omit the `0x` prefix.
  *(S1; DOC-002 Q-003)* [c-hex:REQ-003]
- For every input outside the supported domain, the page shall display exactly `Not Supported`.
  *(S2; DOC-002 Q-001, Q-002)* [c-hex:REQ-004]
- Verification shall retain screenshot evidence showing the implemented browser page and its
  observable behavior. *(S1, S2; DOC-001, DOC-002 Q-005)* [c-hex:REQ-005]

- Entering `255` and requesting conversion displays exactly `FF`. *(S1)* [c-hex:AC-001]
- Entering `1` and requesting conversion displays exactly `1`. *(S1)* [c-hex:AC-002]
- Every supported result is uppercase and has no `0x` prefix. *(S1)* [c-hex:AC-003]
- Submitting each representative unsupported class—empty, `0`, a negative number, a decimal value,
  and non-numeric text—displays exactly `Not Supported`. *(S2)* [c-hex:AC-004]
- Screenshot evidence captures the browser page with at least one supported result and the
  `Not Supported` outcome. *(S1, S2)* [c-hex:AC-005]

## Non-functional requirements

- No latency, throughput, availability, accessibility, privacy, or retention target was supplied
  by the governed inputs. This specification does not invent numeric service levels.

## Assumptions

- The existing application already defines how users reach browser pages and does not require this
  feature to introduce a new access-control model.
- Conversion is stateless and does not require persisted conversion history.
- If either assumption is false, the resulting work is a scope change rather than an implementation
  defect against this specification.

## Out of scope

- Converting hexadecimal values back to decimal.
- Supporting zero, negative numbers, decimal fractions, or non-base-10 input.
- Lowercase hexadecimal output or output with a `0x` prefix.
- Native desktop, mobile, or command-line interfaces.
- New authentication, authorization, persistence, or conversion-history features.
