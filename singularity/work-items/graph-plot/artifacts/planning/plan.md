<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "graph-plot",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
  "status": "in_progress",
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
      "sha256": "05701656780270ef1d12a64be85975b1a7311e5ce1280139327a21532db8991a",
      "bytes": 8804
    },
    "generation": 1,
    "publishedAt": "2026-10-26T06:50:03.868Z"
  },
  "sourceCommit": "b3e3549119d4c64665714d3caa2cb319432c461d",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "f08cd2ee2875c8854dcb9cd1c9f4bcbf2e6e0b0d8ca8a1b6e1972f217d097e9c",
  "sourceSha256": "1113026516d93949e81f6239fea642dbe91f94ba1362bc77a0d8b2ba31c2cd35",
  "template": {
    "path": "singularity/work-items/graph-plot/config/wfa/blobs/sha256/e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "sha256": "e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/graph-plot/context/inputs-planning-gen1.json",
    "sha256": "96a8ba809cc8f577e3e61005bfd26797ae9a784557ade3cfec94e577bddfd580",
    "renderedSha256": "b926f4e5476209cf67403030fb16423caff85e6f0d45cd1f690efb8407893e57",
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
      "path": "singularity/work-items/graph-plot/telemetry/planning-gen1.json",
      "sha256": "3497d6fcd39aae005b79abff0aaec4320ba42c72e22280032153914f3e5f9235",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 26627,
        "estimatedTokens": 6657,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 26627,
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
      "startedAt": "2026-10-26T06:50:03.868Z",
      "completedAt": "2026-10-26T06:50:03.868Z",
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

# Implementation plan — graph-plot

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Keep the existing React grapher mode, but scope its displayed function to the approved sine plot and explicitly show the 30-degree evaluation as 0.5. Use the supplied screenshot (DOC-001) as a visual reference for a graphing workspace and plotted graph; do not treat its extra expressions or controls as requirements. Prove the rendered sine result with a focused Vitest component test and visually review the grapher against DOC-001. The source image still needs a human scope disposition; no assumption here replaces that decision. Main risk: mixing degrees with the grapher's current radian x-axis; label and test the evaluation at x = π/6 (30°).

## Approach

Modify `FunctionGrapher` rather than adding a separate graphing flow: `App` already mounts it for grapher mode, and it already draws a sampled curve on a canvas. Fix the displayed function to sin(x), retain the existing graphing canvas/axes as the presentation surface, and add an explicit 30° / sin(30°) = 0.5 evaluation marker or adjacent readout located at the corresponding x = π/6 point. Do not expose general equation entry or unrelated preset functions in this Story; that scope was settled by specification generation 2. Keep the visualization self-contained and use mathjs for sine sampling, converting the displayed degree value to radians where needed. No persistence, new dependencies, or changes to other calculator modes are planned.

## Affected surfaces

The change is limited to the existing grapher presentation and its focused component test. The current `App` mode selection already mounts `FunctionGrapher`; no calculator evaluator, storage contract, dependency, or configuration change is planned. Actual changed paths remain subject to final scope reconciliation.

| Surface | Change | Serves |
|---|---|---|
| `src/components/FunctionGrapher.jsx` | Render the scoped sin(x) graph and visibly identify the 30° evaluation as 0.5 at x = π/6; remove general-function entry from this Story's grapher UI. | [GRAPH-PLOT:REQ-001] |
| `src/components/FunctionGrapher.test.jsx` | Verify the default sine graph and the 30° evaluation/readout, including that the degree point is evaluated at π/6. | [GRAPH-PLOT:REQ-001] |

## Sequencing

1. Update `src/components/FunctionGrapher.jsx` to present the fixed sine function and an explicit 30° evaluation tied to x = π/6; this supplies the user-visible behavior for [GRAPH-PLOT:REQ-001] and [GRAPH-PLOT:AC-001].
2. Add focused coverage in `src/components/FunctionGrapher.test.jsx` for the displayed value and its degree-to-radian coordinate; this makes the numerical claim testable before visual review.
3. Run the component test and build, then visually review grapher mode against DOC-001. Record the screenshot-reference scope disposition through the owning human decision route; the approved clause does not require matching every visible control.

## Test strategy

Both approved clauses are verified with the focused grapher test and a visual review. The test checks the sine graph's fixed scope and the displayed sin(30°) value at x = π/6; the visual review checks the graphing screen against DOC-001 without treating unrelated screenshot controls as requirements. The table preserves each clause's exact approved ID and lists only exact source and test paths.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `GRAPH-PLOT:AC-001` | `src/components/FunctionGrapher.jsx` | `src/components/FunctionGrapher.test.jsx` | modified | The grapher shows the sin(x) curve and labels the 30° evaluation as 0.5, with the graphing workspace visually reviewed against DOC-001. |
| `GRAPH-PLOT:REQ-001` | `src/components/FunctionGrapher.jsx` | `src/components/FunctionGrapher.test.jsx` | modified | The UI plots sin(x) and represents sin(30°) = 0.5 at the degree-equivalent x = π/6 point. |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test. -->

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `GRAPH-PLOT:AC-001` | `sine-evaluation` | test | `src/components/FunctionGrapher.test.jsx` | primary | module-observed |
| `GRAPH-PLOT:AC-001` | `screenshot-reference` | visual | `DOC-001` | primary | source-bound |

For the visual slot, inspect the rendered grapher screen and its plotted sine curve with the 30° evaluation against DOC-001; this is a human visual review, not a file-presence check.

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

None: this Story pinned no constitution.

## Upstream discrepancies

| Producer phase | Clause/section | Problem | Assumption | Impact / Clause | Owner action |
|---|---|---|---|---|---|
| specification | DOC-001 source scope | The screenshot is machine-local and was not available to the specification producer for inspection; the approved source still identifies it as a visual reference. | Treat DOC-001 only as a reference for the graphing workspace and plotted graph; do not infer requirements for the extra expressions, keypad, or controls shown. | Visual review details may be incomplete; [GRAPH-PLOT:AC-001], [GRAPH-PLOT:REQ-001]. | A human owner must inspect the source and decide whether it is included/existing with clause links or otherwise disposition it using the exact command below. |

Human scope decision for DOC-001 (not decided by this plan):
`singularity-flow decision scope graph-plot --item DOC-001 --as included --clause GRAPH-PLOT:AC-001,GRAPH-PLOT:REQ-001 --reason "Use DOC-001 only as a graphing-workspace visual reference"`
Alternative disposition:
`singularity-flow decision scope graph-plot --item DOC-001 --as informative --reason "Use DOC-001 only as a graphing-workspace visual reference"`

## Risks and rollback

The grapher currently samples the x-axis in radians, so a mistaken 30-radian annotation would look plausible but fail the approved degree claim. Verify sin(30°) through the π/6 coordinate and its explicit readout in the component test, then visually confirm the rendered annotation and curve. The existing screenshot is a visual reference, not authority for the screenshot's other controls; the open DOC-001 scope decision remains with a human. If the grapher change disrupts calculator integration, revert only the scoped grapher and test changes; `App` already owns mode selection and should not require unrelated edits. There is no retained governed test execution for specification generation 2, so this plan does not claim earlier test success.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/graph-plot/artifacts/specification/spec.md sha256=4e468a21a428f4a8dc8aab05c37123b59da4d32bf1b7bd9f26a4380521754de1 status=captured projection=approved-summary representation-sha256=sha256:c6165a81dbf5cd52fc1eee66be0398c9d09db34ef732a0a4bfc51a3f281fb8f0 brief-sha256=c6165a81dbf5cd52fc1eee66be0398c9d09db34ef732a0a4bfc51a3f281fb8f0 expansion=sfref:v1:story:graph-plot:8e04cf03e803cc73945ceacb2ff7aa2a921a0f82b104ca4a09863f2875332d83 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `graph-plot`
- Producer: `specification` generation 2
- Consumer: `planning`
- Source: `singularity/work-items/graph-plot/artifacts/specification/spec.md`
- Source SHA-256: `abcf4eb0400a00509c170c3aab156817c64ad3608d50596b1a927002b5122a64`

## Summary from “Agent brief”

Provide a user-facing graph of sin(x), with the 30-degree evaluation represented as sin(30°) = 0.5.
For this Story, general user-entered equation plotting is out of scope, as confirmed in the
specification generation 2 clarification. Use the supplied screenshot as a visual reference for the
graphing interface, not as a specification of every visible control. The request names no additional
roles, limits, failure behavior, or non-functional requirements.

## Actors

| Actor | Need / authority |
|---|---|
| User | Views the sine-wave graph and its 30-degree evaluation. No distinct permission levels are specified. |

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — Viewing the sine-wave plot

**Priority:** P1
**Actor:** User
**Context:** The graphing interface is available.

- **Given** the user views the sine-wave graph
  **When** the 30-degree evaluation is considered
  **Then** the plotted sine wave corresponds to sin(x), and sin(30°) is 0.5.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Not specified in the pinned request or clarification.
- **Failure:** Not specified in the pinned request or clarification.
- **Partial:** Not specified in the pinned request or clarification.

## Permissions

Not applicable: the pinned request and clarification specify no roles or permission boundaries.

## Boundary conditions

No limits, sizes, counts, timeouts, or other boundary behavior are specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The UI shall plot sin(x) and represent its 30-degree evaluation as sin(30°) = 0.5; this covers “screenshot and sin30 plot” [scope:SRI-fa892fa5f5cc], the confirmed degree unit in the specification generation 1 clarification (Q-003), and the sine-only scope confirmed in the specification generation 2 clarification (Q-001). *(S1)* [GRAPH-PLOT:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- On visual review, the graphing screen uses DOC-001 as a visual reference and shows the sine-wave plot with its 30-degree evaluation; individual controls visible in the reference are not additional requirements. [scope:DOC-001] *(S1)* [GRAPH-PLOT:AC-001]

## Non-functional requirements

None specified in the pinned request or clarification.

## Assumptions

The graphing interface can present a sine-wave plot. The user confirmed that 30 is degrees.
The supplied screenshot is a UI reference; its individual controls are not additional behavior
requirements unless separately specified.

## Out of scope

General user-entered equation plotting is out of scope as confirmed in the specification
generation 2 clarification (Q-001). Interactions with controls visible in the reference screenshot,
error handling, data persistence, and performance or accessibility targets are not specified by
the pinned request or clarifications.

> Exact source expansion: `sfref:v1:story:graph-plot:8e04cf03e803cc73945ceacb2ff7aa2a921a0f82b104ca4a09863f2875332d83`. Use `singularity-flow show sfref:v1:story:graph-plot:8e04cf03e803cc73945ceacb2ff7aa2a921a0f82b104ca4a09863f2875332d83 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
