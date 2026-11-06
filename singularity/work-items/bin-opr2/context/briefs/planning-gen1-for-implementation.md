# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr2`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/bin-opr2/artifacts/planning/plan.md`
- Source SHA-256: `6b6fc1f7740df8722436ae136e687d46cb58b3b90518014963ae4393fd29b526`

## Summary from “Agent brief”

Add a conversion action to the existing Standard calculator keypad and handle it in `src/App.jsx`
using the current displayed decimal value. Keep the change local to Standard mode; preserve existing
arithmetic, history, keyboard, and other calculator modes. Cover positive/negative integers and
decimals with up to two decimal places in a Playwright browser test, and retain a screenshot at the
planned Story evidence path for the required human visual review. The main risks are
conversion precision/sign errors and adding E2E tooling to a project that currently declares only
Vitest; protect against regressions with focused conversion cases and the existing test/build suite.

## Test strategy

Prove functional behavior in a real browser through Playwright, using whole-number and fractional
inputs with both signs. The visual artifact is separate retained evidence: the test captures it in
runner output, and the implementation step copies the selected capture to the Story evidence path
once. Also run the existing Vitest suite and `npm run build` to detect unrelated calculator
regressions. Add exactly one row per clause, using its
fully qualified ID (for example, `BIN-OPR2:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `bin-opr2`'s Story evidence directory, not product source.
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
| `BIN-OPR2:AC-001` | `singularity/work-items/bin-opr2/evidence/bin-conversion.png` | `tests/bin-conversion.spec.js` | evidence | Playwright exercises supported conversions; the retained screenshot shows the conversion control and binary results for whole-number and decimal inputs. |
| `BIN-OPR2:REQ-001` | `src/App.jsx` `src/components/StandardKeypad.jsx` | `tests/bin-conversion.spec.js` | modified | The Standard calculator exposes a button that converts the decimal value currently displayed and shows its binary representation. |
| `BIN-OPR2:REQ-002` | `src/App.jsx` | `tests/bin-conversion.spec.js` | modified | Positive and negative whole and up-to-two-place decimal inputs convert; negatives have a leading minus, and fractional output has exactly two binary digits truncated after that precision. |

## Risks and rollback

Floating-point representation or sign handling could produce an incorrect binary magnitude;
focused positive/negative and fractional boundary cases detect this. Restrict conversion to the
approved decimal domain and avoid modifying the evaluator to reduce impact on existing operations.
The new browser-test tooling may not match the repository's available browser environment; detect
that during the focused Playwright run and report the exact missing prerequisite rather than
weakening the acceptance proof. If the feature regresses existing calculations or creates
unacceptable coupling, revert only the conversion callback/button and its focused test/config
changes, then rerun the existing Vitest suite and build.
