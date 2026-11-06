<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-opr",
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
      "sha256": "37ed06320ec3c82d894cc71b1e7d5dee4659b418c25203612e1bb4c7d9adff36",
      "bytes": 10972
    },
    "generation": 1,
    "publishedAt": "2026-11-06T05:10:25.242Z"
  },
  "sourceCommit": "211c4353cf31caafe3d02250f16f40f26592ce8f",
  "generationCommit": "c2ddce68d982f0a3ab19e7e569455cc665cbaae4",
  "publicationCommit": "c2ddce68d982f0a3ab19e7e569455cc665cbaae4",
  "configSha256": "ece34bebf699bd016761306f85eb0a38c9eb13e453e52f100944569c96215590",
  "sourceSha256": "a3d8f1190123768f13760c60fc40fc74f3b1b07c392dfc8fd656ae5c7d4e3a89",
  "template": {
    "path": "singularity/work-items/bin-opr/config/wfa/blobs/sha256/589ff56b9968fba0b7feb05abb0d0f974fad2d2747df16c5a485f52e23744914",
    "sha256": "589ff56b9968fba0b7feb05abb0d0f974fad2d2747df16c5a485f52e23744914",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/bin-opr/context/inputs-planning-gen1.json",
    "sha256": "4e9a60f2d162e7ec8fe40bad0354c64b87e42409b90bdc53eaaa6d24d7d1af1c",
    "renderedSha256": "d301dbacee7d7027063688a40c40d0ae63ec3951368a4e5c97434d5e40753938",
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
      "path": "singularity/work-items/bin-opr/telemetry/planning-gen1.json",
      "sha256": "d15afb9d94bd32e443990d5d38fb936a752b2bb1d2adf7ac3e1092621d37d8e4",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 29720,
        "estimatedTokens": 7430,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 29720,
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
      "startedAt": "2026-11-06T05:10:25.242Z",
      "completedAt": "2026-11-06T05:10:25.242Z",
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

# Implementation plan — bin-opr

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a conversion action to the shared calculator `Display`, driven by the current displayed result in `App`; render the binary representation alongside the existing display without changing the expression or result. The shared display serves both Standard and Scientific modes. Cover button-to-output behavior with a Playwright end-to-end test and retain a screenshot of the resulting UI at `singularity/work-items/bin-opr/evidence/binary-conversion.png` [BIN-OPR:REQ-001] [BIN-OPR:REQ-002] [BIN-OPR:AC-001]. The repository currently has Vitest and no Playwright setup, so add the Playwright test dependency/configuration and a dedicated test script. Principal risks are converting anything other than the displayed current value and making the result visually ambiguous; detect these in the end-to-end assertions and screenshot review. Conversion boundary/error behavior is unspecified and must not be invented.

## Approach

Keep conversion state and the action handler in `App`, where the calculator result is authoritative, and pass the result and callback to the shared `Display`. Put the labeled button and adjacent binary output in `Display`, rather than the keypad, so the control is next to the value it acts on and is available in both calculator modes that use this component. Convert the currently displayed result only; do not parse a separately entered value or alter calculation state. Follow existing display and button styling tokens. Do not prescribe additional range, empty-state, or conversion-failure behavior [BIN-OPR:REQ-001] [BIN-OPR:REQ-002].

## Affected surfaces

The shared calculator `Display` receives the conversion callback/output from `App`; the browser test and supporting Playwright setup cover the user-facing flow. The source paths below are estimates; implementation reconciles actual changes under `[SPK:CON-031]`.

Inspect relevant entry points, page/layout shells, assets, data/contracts, manifests and test/runtime
setup. A browser title or theme may touch an entry HTML file as well as component styles; an API or
CLI has different entry points. Map product changes to approved clauses and configuration to
supporting files. Newly discovered implementation paths are reconciled in that phase through a
narrow plan amendment or private preservation; they never require rewriting this approved plan.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Own binary-output state and derive it from the current displayed result when requested; pass state and action to `Display` | [BIN-OPR:REQ-001] [BIN-OPR:REQ-002] |
| `src/components/Display.jsx` | Add the conversion button and show the binary output alongside the existing calculator display | [BIN-OPR:REQ-001] [BIN-OPR:REQ-002] |
| `e2e/binary-conversion.spec.js` | Exercise entry of a value, conversion-button activation, and adjacent binary output in a real browser | [BIN-OPR:AC-001] |
| `singularity/work-items/bin-opr/evidence/binary-conversion.png` | Retained screenshot of the successful conversion UI; capture to the Playwright runner output first and copy the reviewed image here once | [BIN-OPR:AC-001] |

## Sequencing

1. Add the Playwright test dependency, configuration, and dedicated script so browser behavior and screenshot capture can run independently from the existing Vitest suite.
2. In `App`, add conversion state/handler based on the displayed result and wire it to `Display`; add the labeled action and adjacent output to the shared display. This fulfills the current-value action and visible-result obligations in Standard and Scientific modes [BIN-OPR:REQ-001] [BIN-OPR:REQ-002].
3. Run the Playwright scenario: enter a value, activate the conversion button, and assert the resulting binary representation is visible alongside the existing display. Save its capture under the runner's output, then retain the reviewed screenshot at the Story evidence path. Keep the existing Vitest regression suite passing [BIN-OPR:AC-001].

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
| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `BIN-OPR:AC-001` | browser-flow | test | `e2e/binary-conversion.spec.js` | primary | exact-local-observed |
| `BIN-OPR:AC-001` | converted-display | visual | `Standard calculator display after binary conversion` | primary | source-bound |

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->
- `package.json` — add the Playwright development dependency and dedicated end-to-end test script.
- `package-lock.json` — lock the Playwright dependency.
- `playwright.config.js` — configure the browser test directory and local Vite web server.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

The action could convert stale or expression text instead of the current displayed result, or the binary output could be confused with the calculator result. The Playwright test checks that the current value is converted after user interaction, that the original display remains, and that the binary output is adjacent; review the retained screenshot for the visual contract. Keep conversion output separate from expression/result state so it can be removed without affecting calculation behavior. If the change breaks existing calculation flows, revert the isolated conversion state/handler and display additions; if browser tooling is the only issue, remove its config/dependency/script without changing application behavior [BIN-OPR:REQ-001] [BIN-OPR:REQ-002] [BIN-OPR:AC-001].

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/bin-opr/artifacts/specification/spec.md sha256=85f42fda9c03b700a2fac0b369d3c88d80e0e7cea3e09bb2e9e07ccecf3d4625 status=captured projection=approved-summary representation-sha256=sha256:09d0de0cc87b59dcab7dc7b60460e86c6d871fb5e3bf8e5e54c976208ff6803d brief-sha256=09d0de0cc87b59dcab7dc7b60460e86c6d871fb5e3bf8e5e54c976208ff6803d expansion=sfref:v1:story:bin-opr:26545ad20c25f476599729c0bc8e933f8f3ad59ab451f8b6db4fc22a99511887 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `bin-opr`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/bin-opr/artifacts/specification/spec.md`
- Source SHA-256: `7864acb54f6ac110f59dffa5b4c972707b214fe37601174d1d4be4a47ea9458f`

## Summary from “Agent brief”

The calculator user can convert the current calculator value to its binary representation using a
button. The converted value appears alongside the calculator display. The UI behavior must be
covered by a screenshot and Playwright tests. No additional boundary or special behavior was
confirmed. Do not infer extra controls, supported ranges, or error behavior.

## Actors

- Calculator user: requests conversion of the current calculator value.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert the current calculator value to binary

**Priority:** P1
**Actor:** Calculator user
**Context:** A value is currently shown in the calculator display.

- **Given** a value is shown in the calculator display
  **When** the user activates the binary-conversion button
  **Then** the calculator shows that current value's binary representation alongside the display.

- **Given** the user has requested binary conversion for the current calculator value
  **When** the conversion behavior is evaluated
  **Then** a screenshot demonstrates the UI behavior and a Playwright test covers the behavior.

## Failure and empty states

- **Empty:** Behavior when no calculator value is present is not specified by the pinned request or
  clarification.
- **Failure:** Conversion failure behavior and error presentation are not specified.
- **Partial:** Partial completion behavior is not specified.

## Permissions

Not applicable: the pinned request defines no roles or access restrictions; the calculator user
performs the described UI action.

## Boundary conditions

The pinned request and clarification specify no numeric range, precision, or special-value behavior.
No additional boundary behavior is required by this specification.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator provides a button that converts the current calculator value, not a separately
  entered value, to its binary representation. *(S1)* [BIN-OPR:REQ-001]
- The converted binary representation is shown alongside the calculator display. *(S1)*
  [BIN-OPR:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- The UI behavior for converting the current calculator value and showing its binary representation
  alongside the display is demonstrated by screenshot evidence and covered by Playwright tests.
  *(S1)* [scope:SRI-2c51c258be3b] [BIN-OPR:AC-001]

## Non-functional requirements

None specified by the pinned request or clarification.

## Assumptions

- A calculator value is already shown when the user requests conversion, as confirmed in
  clarification Q-001.
- The binary representation is displayed alongside the calculator display, as confirmed in
  clarification Q-002.

## Out of scope

- Converting a separately entered number that is not the current calculator value.
- Additional boundary or special behavior; clarification Q-003 confirmed none.

> Exact source expansion: `sfref:v1:story:bin-opr:26545ad20c25f476599729c0bc8e933f8f3ad59ab451f8b6db4fc22a99511887`. Use `singularity-flow show sfref:v1:story:bin-opr:26545ad20c25f476599729c0bc8e933f8f3ad59ab451f8b6db4fc22a99511887 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
