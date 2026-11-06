# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/bin-opr/artifacts/planning/plan.md`
- Source SHA-256: `54a279098b0f81f45acfd41feb9830a7ebbba66ff638559e8c4e060ed22e52a2`

## Summary from “Agent brief”

Add a conversion action to the shared calculator `Display`, driven by the current displayed result in `App`; render the binary representation alongside the existing display without changing the expression or result. The shared display serves both Standard and Scientific modes. Cover button-to-output behavior with a Playwright end-to-end test and retain a screenshot of the resulting UI at `singularity/work-items/bin-opr/evidence/binary-conversion.png` [BIN-OPR:REQ-001] [BIN-OPR:REQ-002] [BIN-OPR:AC-001]. The repository currently has Vitest and no Playwright setup, so add the Playwright test dependency/configuration and a dedicated test script. Principal risks are converting anything other than the displayed current value and making the result visually ambiguous; detect these in the end-to-end assertions and screenshot review. Conversion boundary/error behavior is unspecified and must not be invented.

## Test strategy

The Playwright browser flow proves both current-value conversion and adjacent output; retain its reviewed screenshot as the visual evidence. Add exactly one row per clause, using its
fully qualified ID (for example, `BIN-OPR:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `bin-opr`'s Story evidence directory, not product source.
A planned test never saves its capture straight to that path, because every later run would replace
the reviewed file: it saves under its runner's output (for example `test-results/`), and the code
step copies the image to the evidence path once, when it produces the evidence.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `BIN-OPR:AC-001` | `singularity/work-items/bin-opr/evidence/binary-conversion.png` | `e2e/binary-conversion.spec.js` | evidence | Playwright demonstrates the user converting the current displayed value and the retained screenshot shows the binary output alongside it |
| `BIN-OPR:REQ-001` | `src/App.jsx` `src/components/Display.jsx` | `e2e/binary-conversion.spec.js` | new | The user activates the conversion button and the action uses the calculator's current displayed value |
| `BIN-OPR:REQ-002` | `src/App.jsx` `src/components/Display.jsx` | `e2e/binary-conversion.spec.js` | new | The binary representation appears alongside the calculator display |

## Risks and rollback

The action could convert stale or expression text instead of the current displayed result, or the binary output could be confused with the calculator result. The Playwright test checks that the current value is converted after user interaction, that the original display remains, and that the binary output is adjacent; review the retained screenshot for the visual contract. Keep conversion output separate from expression/result state so it can be removed without affecting calculation behavior. If the change breaks existing calculation flows, revert the isolated conversion state/handler and display additions; if browser tooling is the only issue, remove its config/dependency/script without changing application behavior [BIN-OPR:REQ-001] [BIN-OPR:REQ-002] [BIN-OPR:AC-001].
