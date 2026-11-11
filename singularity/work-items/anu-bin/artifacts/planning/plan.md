<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "anu-bin",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "architect",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "architect"
    },
    "kernelModel": {
      "invoked": false,
      "status": "exact",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "changeOrigins": [
      "copilot"
    ],
    "source": {
      "kind": "in-place",
      "filename": "plan.md",
      "mediaType": "text/markdown",
      "sha256": "9079e660a18a42c894693cc12ffa7a93579ef3b6b90112dc8107d8880b04a7e2",
      "bytes": 8532
    },
    "generation": 1,
    "publishedAt": "2026-11-11T06:46:45.125Z"
  },
  "sourceCommit": "6489a13afe260c91e76bd3f7e87c669f943a262e",
  "generationCommit": "a70043891d19148dd3eda688f23d9f84c4059bba",
  "publicationCommit": "a70043891d19148dd3eda688f23d9f84c4059bba",
  "configSha256": "ca15617ddc393c9be2db7eb0789df4853f79a7ccfaeae58d2184f9120ef4238d",
  "sourceSha256": "7a8c7d3e229c9c89676bb62972e684b8507486190cc98e73ddececd8305d276c",
  "template": {
    "path": "singularity/work-items/anu-bin/config/wfa/blobs/sha256/589ff56b9968fba0b7feb05abb0d0f974fad2d2747df16c5a485f52e23744914",
    "sha256": "589ff56b9968fba0b7feb05abb0d0f974fad2d2747df16c5a485f52e23744914",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/anu-bin/context/inputs-planning-gen1.json",
    "sha256": "7a9b836ba304d22a549cd1beb0deb9902a29ea0da67c0ff7072927129204d9a4",
    "renderedSha256": "65b49227e55166c506480c1d314c2f5490af6a97a14d0345b9b684fcb3a74769",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/anu-bin/telemetry/planning-gen1.json",
      "sha256": "1cf82ea0bf14093175cb719b438f242c2769207e4f6c956b6272e3f0fb1e053f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29034,
        "estimatedTokens": 7259,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29034,
        "omittedSections": 0
      },
      "captureGap": "no-metered-session"
    }
  ],
  "remoteOutputs": [],
  "usage": [
    {
      "status": "unavailable",
      "source": "copilot-otel-unavailable",
      "provider": null,
      "model": null,
      "requestedModel": null,
      "resolvedModel": null,
      "resolvedModelAssurance": "unavailable",
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-11-11T06:46:45.124Z",
      "completedAt": "2026-11-11T06:46:45.124Z",
      "agent": "architect",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Implementation plan — anu-bin

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add an explicit binary-conversion action to the existing Standard calculator. Keep arithmetic
evaluation intact; convert the evaluated numeric result through a focused evaluator utility, then
show the binary value in the existing result display. Verify conversion at the utility boundary
with unit tests and exercise the calculator interaction in the app tests. The approved scope does
not settle fractional-value, range, or presentation details; implementation must avoid inventing
requirements for those cases.

## Approach

Retain `evaluateExpression` as the decimal arithmetic path and add a separate conversion helper in
`src/utils/evaluator.js`. Wire a labeled conversion action from `src/components/StandardKeypad.jsx`
through `src/App.jsx`, using the existing display for the converted output. This keeps conversion
separate from normal equals behavior and limits impact on scientific and other calculator modes.
The approved specification leaves numeric limits, fractional handling, and output formatting
unspecified; do not claim new behavior for those cases. Preserve normal evaluation and its existing
history behavior.

## Affected surfaces

The change is limited to the evaluator conversion helper, the Standard-mode action and its App
handler, plus the evaluator and App tests. No data, external contract, manifest, or runtime
configuration change is planned. Actual implementation paths remain subject to reconciliation
under `[SPK:CON-031]`.

| Surface | Change | Serves |
|---|---|---|
| `src/utils/evaluator.js` | Add a focused decimal-result-to-binary conversion helper without changing arithmetic evaluation. | [ANU-BIN:REQ-001] |
| `src/App.jsx` | Handle the conversion action and display its output through existing result state. | [ANU-BIN:REQ-001] |
| `src/components/StandardKeypad.jsx` | Add a labeled action that invokes the conversion handler. | [ANU-BIN:REQ-001] |
| `src/utils/evaluator.test.js` | Unit-test decimal-to-binary conversion behavior. | [ANU-BIN:AC-001] |
| `src/App.test.jsx` | Verify the Standard calculator interaction displays the converted value. | [ANU-BIN:REQ-001] |

## Sequencing

1. Implement and unit-test the evaluator conversion helper; this establishes the conversion behavior
   independently of the UI [ANU-BIN:REQ-001] [ANU-BIN:AC-001].
2. Wire the Standard keypad action to the helper and result display, then add an app-level test of
   the user interaction [ANU-BIN:REQ-001].
3. Run the focused evaluator and app tests, then the repository test suite and build to check for
   regressions in existing calculator behavior [ANU-BIN:AC-001] [ANU-BIN:REQ-001].

## Test strategy

Prove conversion behavior with unit tests and verify that the calculator's Standard-mode action
surfaces that conversion to the user. Do not assert fractional, range, or formatting requirements
that the approved specification does not define. `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `anu-bin`'s Story evidence directory, not product source.
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
| `ANU-BIN:AC-001` | - | `src/utils/evaluator.test.js` | test-only | Unit tests demonstrate decimal-to-binary conversion behavior. |
| `ANU-BIN:REQ-001` | `src/utils/evaluator.js`, `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/utils/evaluator.test.js`, `src/App.test.jsx` | new | A user can invoke conversion in Standard mode and see the resulting binary value. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test.
The Witness cell holds one backticked value and nothing else. Required assurance holds one word
or stays empty: module-observed or exact-local-observed for a test, declared or source-bound for
an inspection or visual witness. For example (a fenced example is never read as a contract):
```text
| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `ORDER:AC-001` | unit | test | `test/orders.test.js` | primary | module-observed |
| `ORDER:AC-002` | runbook | inspection | `docs/runbook.md` | primary | source-bound |
| `ORDER:AC-003` | screen | visual | `Order confirmation page` | primary | source-bound |
```
-->

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Conversion may be confused with ordinary equals or may alter existing result/history behavior;
detect this with regression tests for existing arithmetic and an interaction test that invokes the
distinct conversion action. Numeric limits and fractional conversion are unspecified, so avoid
presenting an implementation choice as an approved contract and keep it isolated in the helper.
If the change regresses calculator behavior, revert the conversion helper and its keypad/App wiring
as one change; existing expression evaluation remains the fallback behavior.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/anu-bin/artifacts/specification/spec.md sha256=d0e8306b3bf7a5a8b1e9bbfd17fe8e008a09e6047204d9d9f67d18e456f15553 status=captured projection=approved-summary representation-sha256=sha256:bc64d2e02ee0ce8a461fe2d2cb52465b869886976c7fb46a5f1ea394238ab850 brief-sha256=bc64d2e02ee0ce8a461fe2d2cb52465b869886976c7fb46a5f1ea394238ab850 expansion=sfref:v1:story:anu-bin:4ac3353663e3fc577bb1c7883a7aada83e978198d6b0a4a61c1eb70ed585d1ad -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `anu-bin`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/anu-bin/artifacts/specification/spec.md`
- Source SHA-256: `90beecd2bca59c54fff33b1746c46b629f53413a07475c806f15f13fe3d0e73d`

## Summary from “Agent brief”

Enable a calculator user to convert a decimal value to its binary value. Unit tests are the stated acceptance evidence. The confirmed scope does not define input limits, fractional-value handling, or presentation details; do not assume additional behavior.

## Actors

The calculator user supplies a decimal value and requests its evaluation. No other actor or authority is specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a decimal value in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The user has a decimal value to evaluate.

- **Given** the calculator user supplies a decimal value
  **When** the user evaluates that value in the calculator
  **Then** the calculator provides the value in binary.

## Failure and empty states

The pinned request and clarification do not specify empty-input, conversion-failure, or partial-result behavior. These outcomes remain unspecified.

## Permissions

Not applicable: the Story specifies calculator use and no permission or access-control behavior.

## Boundary conditions

The Story does not define numeric limits, fractional-value handling, or other boundary behavior.

## Requirements

The calculator shall convert a supplied decimal value to its corresponding binary value when evaluated. *(S1)* [ANU-BIN:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- Unit tests shall verify the calculator's decimal-to-binary conversion behavior. *(S1)* [ANU-BIN:AC-001] [scope:SRI-bf17ce947d7f]

## Non-functional requirements

No non-functional requirements are specified by the pinned Story or confirmed clarification.

Use governed requirement anchors here too (for example `[ANU-BIN:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The calculator accepts a decimal value for evaluation. The Story and clarification leave numeric limits, fractional handling, and output presentation unspecified; no behavior for those details is asserted here.

## Out of scope

No additional conversion modes or behaviors are specified. The unspecified numeric and presentation details above are not silently constrained by this specification.

> Exact source expansion: `sfref:v1:story:anu-bin:4ac3353663e3fc577bb1c7883a7aada83e978198d6b0a4a61c1eb70ed585d1ad`. Use `singularity-flow show sfref:v1:story:anu-bin:4ac3353663e3fc577bb1c7883a7aada83e978198d6b0a4a61c1eb70ed585d1ad --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
