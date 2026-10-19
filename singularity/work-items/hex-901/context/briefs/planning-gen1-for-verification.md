# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-901`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/hex-901/artifacts/planning/plan.md`
- Source SHA-256: `625bd89a6b3aff4009dbdf3589f6ed47103ff63f70cf15187d7b43039d58067c`

## Summary from “Agent brief”

Add a visible `Hex` action to the shared standard keypad and wire it through `App` so it is available in both Standard and Scientific modes. The handler will resolve the current expression or displayed result, accept only a finite positive integer, and render its base-16 digits without a prefix. Keep conversion in the UI action rather than changing the shared expression evaluator, minimizing impact on unrelated arithmetic and formatting. Verify representative positive integers with Vitest and retain a screenshot of 16 displayed as `10`. Principal risks are converting a stale result instead of a pending expression and disturbing the shared keypad layout; integration tests and a visual check cover these. [HEX-901:REQ-001] [HEX-901:AC-001]

## Test strategy

Use the existing Vitest/Testing Library app integration suite for the user-visible action, with assertions scoped to the calculator display. Exercise both a direct positive integer and a pending expression, and check that displayed output is the corresponding hexadecimal digits without `0x`. The acceptance screenshot is a separate retained visual artifact; image presence alone is not acceptance, so review it against the required displayed state. Do not treat the absence of retained specification-phase test results as a pass or failure; the planning packet establishes no retained test execution. [HEX-901:REQ-001] [HEX-901:AC-001]

Add exactly one row per clause, using its
fully qualified ID (for example, `HEX-901:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `hex-901`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-901:AC-001` | `singularity/work-items/hex-901/evidence/hex-operator-16.png` | `src/App.test.jsx` | evidence | Screenshot shows 16 converted to `10` in the calculator display with no prefix; tests cover positive-integer conversion. |
| `HEX-901:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | Invoking Hex for a positive integer displays its equivalent base-16 representation. |

## Risks and rollback

**Risks and detection.** If a pending expression is ignored, the action could convert a stale display value; integration coverage must convert an expression before pressing Hex and verify the result. The keypad is shared by Standard and Scientific modes, so check both render the action and that its button does not obscure existing controls. Keep the domain guard limited to the specified positive integers; do not introduce an undocumented conversion result for unsupported values. [HEX-901:REQ-001]

**Rollback.** Revert the Hex callback and button wiring in `src/App.jsx` and `src/components/StandardKeypad.jsx`, plus only the corresponding regression assertions in `src/App.test.jsx`. The existing evaluator and arithmetic behavior remain unchanged, so no data migration or persistent-state rollback is needed. [HEX-901:REQ-001]
