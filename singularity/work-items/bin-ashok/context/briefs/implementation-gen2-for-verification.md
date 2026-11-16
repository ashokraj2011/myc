# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-ashok`
- Producer: `implementation` generation 2
- Consumer: `verification`
- Source: `singularity/work-items/bin-ashok/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `9502099237ec5d502a6ebfe4403cd0a680d038abc067895972c859a2a45d67d2`

## Summary from “Agent brief”

Added a shared Binary action to the calculator display in Standard and Scientific modes. It converts the displayed positive whole number to base 2, including grouped and scientific-notation integer displays, and reports “not supported” for zero, negative, fractional, empty, or invalid results. Generation 2 answers the source review: the action now reads the number being entered (the active expression) before equals is pressed, and the evaluated result afterwards. Focused interactions and the full suite passed on Node 22; the retained screenshot shows `2` converted to `10`. Decision PAM-001 added `.nvmrc` to pin Node 22 for the Vitest environment.

## Changed components and decisions

`src/App.jsx` owns validation and conversion, using `BigInt` so the result is not constrained by JavaScript's safe-integer range; it recognizes grouped and exponent-form displays without adding an input cap. Qualified `@clause:BIN-ASHOK:REQ-001` and `@clause:BIN-ASHOK:REQ-002` comments bind the behavior. `src/components/Display.jsx` adds the shared accessible Binary button (title and explicit `aria-label`, so it is announced as "Convert to binary" rather than only "Binary"). `src/App.test.jsx` covers positive conversion (before and after equals), larger values, both display modes, and all unsupported categories. `.nvmrc` pins Node 22 as approved by decision PAM-001 and recorded as a supporting build-configuration change. No migration or external service changes.

## Tests and operational notes

`src/App.test.jsx` tags the positive conversion interaction with `@ac:BIN-ASHOK:REQ-001` and `@ac:BIN-ASHOK:AC-001`, and unsupported cases with `@ac:BIN-ASHOK:REQ-002`.

- `PATH=/opt/homebrew/opt/node@22/bin:$PATH npm test -- --run src/App.test.jsx` — 26 tests passed before the final test-only assertions.
- `PATH=/opt/homebrew/opt/node@22/bin:$PATH npm test` — 42 tests passed across 3 files after the generation 2 changes (new tests tagged `@ac:BIN-ASHOK:REQ-001` convert `2` entered without pressing equals and find the button by its accessible name).
- `PATH=/opt/homebrew/opt/node@22/bin:$PATH npm run build` — passed; Vite reported the existing large-chunk advisory.
- `npm run lint` — failed on repository lint errors, including pre-existing unused React imports and unrelated component errors; no automatic fixes were applied.
- Browser check — entered `2`, evaluated it, activated Binary, and observed display `2` / `10`; retained at `singularity/work-items/bin-ashok/evidence/binary-conversion-2.png`.

The first required run used Node 26.12.0 and failed because its `localStorage` is incompatible with the test environment. Decision PAM-001 approved `.nvmrc` set to 22; the full local suite passed on Node 22.14.0 after the final changes. No other rollout or data migration is required.
