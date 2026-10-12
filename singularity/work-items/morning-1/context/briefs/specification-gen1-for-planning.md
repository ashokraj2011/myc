# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `morning-1`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/morning-1/artifacts/specification/spec.md`
- Source SHA-256: `100d831eb385c2194cf11f5c9b57b3516abb739dbe3673d218b2fc5b50324a5a`

## Summary from “Agent brief”

Add a hexadecimal operator to the calculator. For a supported whole-number value, invoking the
operator shows the original decimal value and its hexadecimal equivalent together. If there is no
current value, invoking the operator leaves the display unchanged. The required visual acceptance
evidence is a screenshot showing both representations. The pinned Story and clarification do not
prescribe exact hexadecimal text formatting or other calculator behavior.

## Actors

The calculator user invokes the operator and views its result. No separate role or permission
distinction is specified by the pinned Story or clarification.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Show the hexadecimal equivalent of a whole-number value

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator has a whole-number value.

- **Given** the calculator displays a whole-number value
  **When** the user invokes the hex operator
  **Then** the calculator displays the original decimal value and its mathematically equivalent hexadecimal representation together.

- **Given** the calculator displays zero
  **When** the user invokes the hex operator
  **Then** the decimal zero and its hexadecimal equivalent are displayed together.

### S2 — Invoke the operator without a current value

**Priority:** P2
**Actor:** Calculator user
**Context:** The calculator has no current value.

- **Given** the calculator has no current value
  **When** the user invokes the hex operator
  **Then** the display remains unchanged.

## Failure and empty states

- **Empty:** When there is no current value, invoking the operator leaves the display unchanged.
- **Failure:** No dependency failure behavior is specified by the pinned Story or clarification; do not add a new error behavior to this scope.
- **Partial:** No partial-completion behavior is specified by the pinned Story or clarification.

## Permissions

No separate permissions or protected-reader behavior are specified. The user of the calculator
invokes the operator.

## Boundary conditions

The confirmed input scope is whole-number values only; fractional values are outside this
specification. Zero is included and must produce its equivalent hexadecimal representation. When
there is no current value, the display remains unchanged. Negative-value behavior and exact output
formatting (including prefix and letter case) are not specified by the pinned Story or clarification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- For a whole-number current value, the user can invoke the hex operator to obtain its hexadecimal equivalent. *(S1)* [morning-1:REQ-001]
- After the operator is invoked for a whole-number current value, the calculator displays the original decimal value and its hexadecimal equivalent together. *(S1)* [morning-1:REQ-002]
- If there is no current value when the operator is invoked, the calculator display remains unchanged. *(S2)* [morning-1:REQ-003]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the calculator after conversion shows the decimal value and its hexadecimal equivalent together. *(S1)* [morning-1:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

No non-functional requirements are specified by the pinned Story or clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The calculator has a current whole-number value when conversion is requested in S1. The exact
representation of an equivalent hexadecimal value is left to implementation, subject to the
display and visual acceptance requirements above.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Fractional-value conversion and any new calculator behavior beyond the hex operator requirements
above are out of scope. Negative-value handling is not defined by the pinned Story or clarification.
