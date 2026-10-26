# Release evidence index — graph-plot

This index binds the release evidence to the approved Verification generation and the source tree it tested. It records retained evidence and known gaps; it is not a new test run or human approval.

## Verification binding

- Approved phase: Verification, generation 1.
- Submission packet: `singularity/work-items/graph-plot/submissions/verification/5e673b12453337dc833fddbe7997d9adcefbe70f674bb85faacb4d45d88ab2e1.json`
- Packet SHA-256: `5e673b12453337dc833fddbe7997d9adcefbe70f674bb85faacb4d45d88ab2e1`
- Submitted source commit: `8df28a0a0067ca31a6db05c171bdad78dd690b1d`
- Submitted source tree SHA-256: `a30f9307e09c261ab3cf3b03030615791c09914a9c7cbae3189a629034c3b7a5`
- Approved Verification artifact: `singularity/work-items/graph-plot/artifacts/verification/test-evidence.md`
- Artifact SHA-256 from the approved packet: `846f899c87e78447534271610d6d49f675688ff1d06f40e62bdd80ef4572f019`

## Observed results

- The approved Verification report describes a focused Vitest component test that passed. It checked the fixed `sin(x)` label, the visible `sin(30°) = 0.5` readout, and marker coordinates corresponding to x = π/6 and y = 0.5.
- The packet records the configured `node-tests` command `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json` as passed, exit code 0, on the submitted source tree above. The packet contains no structured test counts; the test command's result file is not retained as a hash-bound artifact in that packet.
- The approved report records a successful production build.
- The approved report records that scoped ESLint did not pass: two `no-loss-of-precision` errors in expected coordinate literals in the test.

## Gaps and limits

- The required visual review against DOC-001 was not performed. The approved Verification report says the app could not start because its configured localhost port was occupied by a process not recorded as started by this work item. No unrelated process was stopped.
- DOC-001 is identified in the pinned source as SHA-256 `38c3ce8176b283e4e9e23cfa0f573add262213ce6d77df0aa856c4570aa76a9a`, at `/Users/ashokraj/Downloads/cfa/cfa-calc/repos/main--0d6e4079e367/myc/.git/singularity-flow-documents/graph-plot/38c3ce8176b283e4e9e23cfa0f573add262213ce6d77df0aa856c4570aa76a9a/Screenshot-2026-10-26-at-9.37.24-AM.png`. Opening this exact issued path failed because it was unavailable in the current environment. Its pixels were not inspected during release authoring, and this index does not claim visual evidence for it.
- The approved Verification packet reports the test command outcome but has no structured result counts or retained result-file hash. The detailed focused-test assertions and the lint and startup gaps are recorded in the approved Verification artifact cited above.
- These retained reports are evidence from Verification generation 1; this index does not rerun checks, accept a criterion, resolve an upstream decision, or grant approval.
