# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `fact-01`
- Producer: `implementation` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/fact-01/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `bf0cb43b37c587411218ddd10af0033d7b27e5d3cf9af704f040eaefbbbdab40`

## Summary from “Agent brief”

Implemented an exact-integer `nCr` utility and added a Combination mode to ApexCalc. The utility returns a `BigInt`, returns `0n` when r exceeds n, and rejects missing, non-positive, or non-integer inputs. The UI accepts separate n and r values, shows a result only after a valid submission, and clears stale results when either input changes.

Unit and UI tests pass (43 tests across the two focused files), and the production build succeeds. The approved representative case was exercised in the browser and captured at `singularity/work-items/fact-01/evidence/ncr-result.png`. No approved requirement was changed. Central combinations with very large inputs may take substantial time; no input-size limit was introduced.

## Changed components and decisions

`src/utils/evaluator.js` exports `nCr`, validates its inputs, uses symmetry to reduce the exact `BigInt` calculation, and contains `@clause:FACT-01:REQ-001`, `@clause:FACT-01:REQ-003`, and `@clause:FACT-01:REQ-004` rationale comments. `src/components/CombinationCalculator.jsx` implements the two-input form, explicit validation, and result state; its comments bind `FACT-01:REQ-002` and `FACT-01:REQ-004`. `src/App.jsx` provides the Combination action and renders the component; its route comment binds `FACT-01:REQ-002`. Component layout and theme styling are kept within the planned component source file.

`src/utils/evaluator.test.js` covers exact counts, a large exact result, r > n, and invalid values. `src/App.test.jsx` covers the representative user flow and confirms incomplete input clears any prior result; its representative-flow test is tagged `@ac:FACT-01:AC-001`. The planned screenshot evidence was captured at `singularity/work-items/fact-01/evidence/ncr-result.png`. No configuration, migration, dependency manifest, or additional component files were required. The documented `BigInt` return avoids precision loss in the utility and the UI renders its decimal string directly.

## Tests and operational notes

Acceptance evidence: `singularity/work-items/fact-01/evidence/ncr-result.png` was captured from the running application after entering n = 5 and r = 2; it displays 10.

- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 test -- src/App.test.jsx src/utils/evaluator.test.js` — exit 0; 2 test files and 43 tests passed.
- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 run build` — exit 0; Vite production build succeeded. Vite emitted its existing advisory that the main chunk is larger than 500 kB.
- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 run lint` — exit 1; 19 repository-wide ESLint errors remain, including pre-existing findings in `src/App.jsx`, `src/components/Header.jsx`, `src/utils/evaluator.js`, and other untouched files. No lint error was reported in the new CombinationCalculator component.
- `npm --prefix /Users/ashokraj/Downloads/cfa/cfa-calc/.singularity-flow/story-worktrees/.w-ebfc34dfceaf41980e3899f0 ci` installed the locked dependencies without changing manifests; npm reported 9 audit findings (2 moderate, 7 high). Dependency remediation was not in scope.

No test configuration or runner changes were made. The UI handles arbitrarily long decimal integer strings, but calculations where both inputs are very large can be expensive. No separate test for screenshot pixels was added; the requested visual evidence is the captured PNG.
