# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/fact-01/artifacts/specification/spec.md`
- Source SHA-256: `e0e8f7a89aaab0976c281ab2752a49b318bfbb7b7552afb08dad7c8f5bad54f0`

## Summary from “Agent brief”

Add an nCr calculation function and expose it through the calculator UI. For positive integer inputs n and r, calculate the number of ways to choose r items from n; return 0 when r > n, and reject non-integer or non-positive inputs. A screenshot must show a representative input and its correct result, such as 5 choose 2 = 10. No new controls, wording, roles, or non-functional constraints are specified.

## Actors

Not applicable: the Story specifies no roles or authorization; the feature is for calculator users.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Calculate a combination in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user wants to count selections of r items from n.

- **Given** the user supplies n = 5 and r = 2 through the calculator UI
  **When** the user requests an nCr calculation
  **Then** the UI displays the result 10.

- **Given** positive integer inputs n and r with r <= n
  **When** the user requests an nCr calculation
  **Then** the callable function returns the number of ways to choose r items from n.

### S2 — Handle input boundaries

**Priority:** P2

- **Given** positive integer inputs with r > n
  **When** the user requests an nCr calculation
  **Then** the function returns 0.

- **Given** either input is not an integer or is not positive
  **When** the user requests an nCr calculation
  **Then** the input is rejected and no nCr result is produced.

- **Given** n or r has not been supplied
  **When** the user requests an nCr calculation
  **Then** no nCr result is produced until both inputs are supplied as positive integers.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No result is produced until both n and r are supplied as positive integers.
- **Failure:** Non-integer and non-positive inputs are rejected without producing an nCr result; no particular error wording is specified.
- **Partial:** Not applicable: the Story specifies a single calculation and no partial or external operation.

## Permissions

Not applicable: no role-based permissions or restricted actions are specified.

## Boundary conditions

n and r must be positive integers. If r <= n, the function returns the combination count; if r > n, it returns 0. Non-integer and non-positive inputs are rejected. No maximum input size or other numeric limit is specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- For positive integer n and r where r <= n, the callable nCr function returns the integer count of ways to choose r items from n; for example, nCr(5, 2) returns 10. *(S1)* [FACT-01:REQ-001]
- The calculator UI lets a user supply n and r and request an nCr calculation, then displays the computed result for valid inputs. *(S1)* [FACT-01:REQ-002]
- The function returns 0 for positive integer inputs where r > n. *(S2)* [FACT-01:REQ-003]
- The function rejects inputs where either value is not an integer or is not positive without producing an nCr result; no result is produced until both inputs are supplied. *(S2)* [FACT-01:REQ-004]

Acceptance criteria use the same stable, namespaced form:

- A screenshot shows the calculator UI with a representative nCr input and its correct output, such as n = 5, r = 2, result = 10. [scope:SRI-35efa5d9d09b] *(S1)* [FACT-01:AC-001]

## Non-functional requirements

Not applicable: the pinned request and clarification specify no non-functional requirements.

Use governed requirement anchors here too (for example `[FACT-01:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The request's nCr notation means choosing r items from n items. The function and calculator UI are part of the requested feature; exact UI controls and error wording are not specified.

## Out of scope

No additional calculator features, APIs, roles, or constraints beyond the nCr function, UI exposure, positive-integer validation, r > n behavior, and screenshot acceptance are in scope.
