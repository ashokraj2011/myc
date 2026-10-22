# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-2018`
- Producer: `planning` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/hex-2018/artifacts/planning/plan.md`
- Source SHA-256: `8a355033be88a99fb7279c44f29d4620aebd7083db42ddbe23affb4464e105fa`

## Summary from “Agent brief”

Add a HEX action to the shared calculator keypad and connect it to App's current displayed result. For an in-scope positive integer, convert the exact integer value to base 16 and replace the displayed result without changing the expression, history, or unrelated calculator modes. The specification leaves prefix, letter case, layout, and out-of-scope inputs unspecified, so do not elevate those to requirements. Cover the visible control and conversion in an App regression test. Retain a screenshot showing a positive integer, HEX activation, and the resulting value; no governed test result is retained from the specification packet. Main risks are parsing a formatted display and losing precision for large integers.

## Test strategy

The App interaction test verifies conversion behavior; the retained screenshot verifies the separately approved visual acceptance criterion. The table has one row per authoritative clause, using its
fully qualified ID (for example, `HEX-2018:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `hex-2018`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-2018:AC-001` | `singularity/work-items/hex-2018/evidence/hex-positive-integer.png` | `src/App.test.jsx` | evidence | The screenshot shows a positive integer, activation of HEX, and the resulting hexadecimal display. |
| `HEX-2018:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | new | Activating HEX for a displayed positive integer replaces the result with its base-16 representation. |

## Risks and rollback

The existing calculator formats some numeric results for display, so parsing a grouped display as an integer could produce an incorrect conversion; verify the current-result path without lossy parsing. JavaScript floating-point numbers cannot exactly represent every large integer, while the specification sets no upper bound; conversion must not silently round before producing hexadecimal output. Prefix and letter case are unspecified, and zero, negative, decimal, and empty inputs are outside scope. Detect regressions with the focused App test and required screenshot. Rollback by removing the HEX control and callback, preserving existing expression, result, and keypad behavior. No specification-generation execution is retained in the available evidence packet, so this plan claims no prior test pass or screenshot acceptance.
