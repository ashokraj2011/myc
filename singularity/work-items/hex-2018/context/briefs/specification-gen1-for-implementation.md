# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-2018`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/hex-2018/artifacts/specification/spec.md`
- Source SHA-256: `77b94c78fc0436bf41297ba9c4bd3ccd3d457f0a938582151f06f13318df3db8`

## Summary from “Agent brief”

The calculator user can invoke a HEX key/button to convert the current displayed positive integer to its hexadecimal representation. Acceptance requires a screenshot showing the interaction and resulting value. This specification does not define behavior outside positive integer inputs or prescribe a particular hexadecimal format or visual layout.

## Actors

The calculator user invokes the conversion through the HEX key/button. No separate roles or authorization boundaries are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a displayed positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a positive integer.

- **Given** the calculator displays a positive integer
  **When** the user activates the HEX key/button
  **Then** the current value is displayed in its hexadecimal representation.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** An empty display is outside the specified positive-integer input condition; no empty-state behavior is defined.
- **Failure:** No dependency or failure behavior is specified.
- **Partial:** No partial-operation behavior is specified.

## Permissions

Not applicable: the pinned Story and clarification define no role-based permissions or access restrictions.

## Boundary conditions

The conversion requirement applies to positive integer values displayed by the calculator. Zero, negative, and non-integer values are outside the confirmed input scope; their behavior is unspecified. No limits on positive integer size are established.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Activating the HEX key/button converts the current displayed positive integer to its hexadecimal representation. *(S1)* [HEX-2018:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- A screenshot showing the user activating the HEX key/button and the resulting hexadecimal value for a positive integer is sufficient to demonstrate acceptance. *(S1)* [HEX-2018:AC-001] [scope:SRI-35efa5d9d09b]

## Non-functional requirements

No non-functional requirements are stated in the pinned Story or clarification.

Use governed requirement anchors here too (for example `[HEX-2018:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The existing calculator presents the current value referenced by the Story. The exact hexadecimal prefix/case and visual layout are not specified.

## Out of scope

Conversion of zero, negative, or non-integer values; hexadecimal input or arithmetic; and any particular hexadecimal prefix, letter case, or visual layout.
