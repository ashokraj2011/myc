# Verification Evidence Index

## Source binding

- Approved verification generation: 2.
- Approved evidence artifact: `singularity/work-items/arshy/artifacts/verification/test-evidence.md`.
- SHA-256 recorded for that approved input: `bfff4aa50ebc15ae504f57f46b4927d7800ef7172c5dc73610bd75241b4e0907`.
- Bound implementation source tree SHA-256 recorded in the verification evidence: `34bdba424384e7d64bd78e2f4464738a14eb27a328316fe993cd339cf324d1b6`.
- Bound code tree SHA-256: `adee477dc8ea8a2cf52f687a91719aac0ad4bdecbc76c917627fff2b918e5d4d`.
- Source and test paths covered by the approved report: `src/components/FunctionGrapher.jsx`, `src/components/FunctionGrapher.test.jsx`, and `tests/graph-plotter.spec.js`. Their source binding is the code tree above; the verification report is the evidence record for observed outcomes.

## Observed results

- `ARSHY:AC-001`: `tests/graph-plotter.spec.js`, “plots x^2 + y^2 = 36 as a centered radius-6 circle” — passed in the fresh verification Playwright run.
- `ARSHY:AC-002`: `tests/graph-plotter.spec.js`, “grapher equation entry › renders the supported explicit and implicit equations” — passed in the fresh verification Playwright run; covers both explicit equations and `x - y = 0`.
- `npm run test:e2e -- --reporter=json` — passed; 2 discovered, 2 passed, 0 failed, 0 skipped.
- `npm run build` — passed; Vite reported a minified JavaScript chunk above its 500 kB advisory threshold.
- `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json` — failed; 35 discovered, 18 passed, 17 failed, 0 skipped. The four focused grapher unit tests passed. The 17 `src/App.test.jsx` failures report `localStorage` unavailable (`Cannot read properties of undefined (reading 'clear')`).

## Gaps and limits

- The full Vitest command is not green in the recorded Node.js v26.12.0 macOS arm64 environment because of the `localStorage` failures; no runner/configuration change was made in verification.
- No separate test evidence is specified for accessibility, security, resilience, performance, or existing-preset regression. Those results are not inferred from the passing acceptance tests.
- Earlier implementation-generation test receipts are not used to establish the post-annotation test inputs; the approved verification report records fresh local Playwright, Vitest, and build outcomes for generation 2.