# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-401`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/bin-401/artifacts/specification/spec.md`
- Source SHA-256: `e9f35d39e00eff00ae0863960a80dac4112120edc445aea190c4ddc835dadacd`

## Summary from “Agent brief”

People using the running app need to convert decimal numeric values to binary. The app must accept
every finite JavaScript `Number` value through its existing user interaction and show the matching
binary value. Use JavaScript's standard base-2 number string, without a `0b` prefix; negative values
use a leading minus sign, and fractional values use the same standard base-2 string. The requested
acceptance evidence is a screenshot of the running app showing a representative decimal input and
its matching binary output. This specification does not define new controls, error messages, or
additional interfaces.

## Actors

- **App user:** supplies a decimal numeric value and observes its binary result through the running
  application's existing interaction. No additional user roles or permissions are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a finite decimal number

**Priority:** P1
**Actor:** App user
**Context:** The application is running and its existing user interaction is available.

- **Given** the user supplies the finite JavaScript number `10`
  **When** the app converts it to binary
  **Then** the app presents `1010`, with no prefix.

- **Given** the user supplies a negative finite number or a fractional finite number
  **When** the app converts it to binary
  **Then** the app presents JavaScript's standard base-2 number string, including a leading minus
  for negative values and the standard fractional representation.

The examples `-10` → `-1010` and `0.5` → `0.1` illustrate the required format. The rule applies to
all finite JavaScript `Number` values, not only these examples.

- **Given** the user supplies zero or a value at either finite numeric range edge
  **When** the app converts it to binary
  **Then** the displayed result matches JavaScript's standard base-2 number string for that value.

### S2 — Capture the requested running-app evidence

**Priority:** P2
**Actor:** App user or verifier
**Context:** The app is running and a representative conversion has been performed.

- **Given** the running app shows a representative decimal input and its conversion
  **When** a screenshot is taken
  **Then** the screenshot visibly shows that input and its matching binary output together.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No behavior for an empty or missing input is specified by the pinned request.
- **Failure:** No error behavior or error wording is specified.
- **Partial:** No partial-conversion behavior is specified.

## Permissions

No special permissions or role-based access rules are specified. The feature is used by someone
who can operate the running app.

## Boundary conditions

The supported input domain is all finite JavaScript `Number` values, including zero, negative
values, and fractional values. The output uses JavaScript's standard base-2 number string; no fixed
fractional-digit count is required. `NaN` and positive or negative infinity are outside the
specified input domain. Behavior for empty or non-numeric input is not specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The running app shall convert every finite JavaScript `Number` value supplied by the user to its
  corresponding binary representation. *(S1)* [BIN-401:REQ-001]
- The app shall present the result as JavaScript's standard base-2 number string, without a `0b`
  prefix; negative values shall have a leading minus sign, and fractional values shall use the
  standard base-2 number string. *(S1)* [BIN-401:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- When the app is run, a screenshot shall show a representative decimal input and its matching
  binary output together in the app. This fulfills the pinned request to “run the app and take the
  screenshot” [scope:SRI-6f629ed4528c]. *(S2)* [BIN-401:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[BIN-401:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

None specified by the pinned request or recorded clarifications.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The app's existing user interaction is the intended way to supply the numeric value and observe the
result; no particular control or interaction sequence is prescribed. The standard JavaScript
base-2 number string is the required fractional formatting, as confirmed in the clarification
record for generation 1.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Handling `NaN`, positive or negative infinity, empty input, and non-numeric input is not specified.
No API, command-line interface, configurable radix prefix, leading-zero format, or fixed fractional
precision is requested.
