<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-2018",
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
      "sha256": "cdde893be57e9f170eeccd40339043f6c195fd4748a368b1aa36ab18e7bf2618",
      "bytes": 8463
    },
    "generation": 1,
    "publishedAt": "2026-10-22T05:16:32.767Z"
  },
  "sourceCommit": "7253ae8034831076ab63cadd0b42771cf89bb6e8",
  "generationCommit": "fe29442a3e6931bba142659199b5d16416cdf16d",
  "publicationCommit": "fe29442a3e6931bba142659199b5d16416cdf16d",
  "configSha256": "bfb32f9f48dc5a11a1e51dcc1f3ae0b8a7732fea7b74d413a02826960e9570e3",
  "sourceSha256": "63edb570d84ec8510836e72b9680529ff8eb23758182a311d1945fc97ad88569",
  "template": {
    "path": "singularity/work-items/hex-2018/config/wfa/blobs/sha256/e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "sha256": "e8dca233e783eac51fbcd75fe989d27cf163f6c42e4763e0a006cf671082be92",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-2018/context/inputs-planning-gen1.json",
    "sha256": "b8261e4e0126860997c02a2ae4f4169972b1cb059d22d0c94c37fc5aaad24c67",
    "renderedSha256": "5b0a879b06ab653a84d8ca3600c1c0988911f0a0528abf55e5813ac62577e776",
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
      "path": "singularity/work-items/hex-2018/telemetry/planning-gen1.json",
      "sha256": "85750feaa5da4016b8481507d878bb6cf70c9b7131818c9959b69a030f2aa569",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 25690,
        "estimatedTokens": 6423,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 25690,
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
      "startedAt": "2026-10-22T05:16:32.767Z",
      "completedAt": "2026-10-22T05:16:32.767Z",
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

# Implementation plan — hex-2018

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a HEX action to the shared calculator keypad and connect it to App's current displayed result. For an in-scope positive integer, convert the exact integer value to base 16 and replace the displayed result without changing the expression, history, or unrelated calculator modes. The specification leaves prefix, letter case, layout, and out-of-scope inputs unspecified, so do not elevate those to requirements. Cover the visible control and conversion in an App regression test. Retain a screenshot showing a positive integer, HEX activation, and the resulting value; no governed test result is retained from the specification packet. Main risks are parsing a formatted display and losing precision for large integers.

## Approach

Use App-owned conversion logic because App owns the displayed result and passes callbacks into its keypad. Add a focused `onHex` callback to `StandardKeypad`; this keypad is reused in standard and scientific modes, avoiding duplicated controls. Convert from an exact decimal integer representation rather than using floating-point formatting on a comma-grouped display. For values outside the specified positive-integer condition, leave state unchanged rather than defining additional behavior. Choose a simple hexadecimal presentation without treating prefix or letter case as acceptance requirements. This fulfills `HEX-2018:REQ-001`; screenshot proof remains separately bound to `HEX-2018:AC-001`.

## Affected surfaces

The change spans App's result-state callback, the shared standard keypad control, and its App-level regression test. The planned screenshot is evidence, not a product-code surface; actual changed paths remain subject to reconciliation `[SPK:CON-031]`.

| Surface | Change | Serves |
|---|---|---|
| `src/App.jsx` | Own the HEX conversion callback and update the displayed result for a positive integer. | [HEX-2018:REQ-001] |
| `src/components/StandardKeypad.jsx` | Render a HEX action and invoke the callback; this keypad is shared by standard and scientific modes. | [HEX-2018:REQ-001] |
| `src/App.test.jsx` | Exercise the visible HEX action and assert the converted result for a positive integer. | [HEX-2018:REQ-001] |

## Sequencing

1. Add an App callback that validates the current result as a positive integer and converts it without rounding or changing other state; this establishes `HEX-2018:REQ-001`.
2. Add and wire the HEX control in `StandardKeypad`, then cover entry, activation, and output in `src/App.test.jsx`.
3. Run the focused App test and capture the interaction screenshot at the planned Story evidence path. The screenshot is the primary visual witness for `HEX-2018:AC-001`; file presence alone is not acceptance.

## Test strategy

The App interaction test verifies conversion behavior; the retained screenshot verifies the separately approved visual acceptance criterion. The table has one row per authoritative clause, using its
fully qualified ID (for example, `HEX-2018:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `hex-2018`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-2018:AC-001` | `singularity/work-items/hex-2018/evidence/hex-positive-integer.png` | `src/App.test.jsx` | evidence | The screenshot shows a positive integer, activation of HEX, and the resulting hexadecimal display. |
| `HEX-2018:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | new | Activating HEX for a displayed positive integer replaces the result with its base-16 representation. |

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
| `HEX-2018:AC-001` | `hex-positive-integer` | visual | `positive-integer-hex-interaction` | primary | source-bound |

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

The existing calculator formats some numeric results for display, so parsing a grouped display as an integer could produce an incorrect conversion; verify the current-result path without lossy parsing. JavaScript floating-point numbers cannot exactly represent every large integer, while the specification sets no upper bound; conversion must not silently round before producing hexadecimal output. Prefix and letter case are unspecified, and zero, negative, decimal, and empty inputs are outside scope. Detect regressions with the focused App test and required screenshot. Rollback by removing the HEX control and callback, preserving existing expression, result, and keypad behavior. No specification-generation execution is retained in the available evidence packet, so this plan claims no prior test pass or screenshot acceptance.

## Upstream discrepancies

None identified. The approved specification limits behavior to positive integers and leaves other inputs and formatting choices unspecified; this plan does not expand that scope.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/hex-2018/artifacts/specification/spec.md sha256=50f0df1784da59ac116d911a9f278c0e6ac1b4d69c865847caf0a0118726b1c2 status=captured projection=approved-summary representation-sha256=sha256:eec120ba51cb469c82a700257f9fe6e8ccc413aa3dcf2b71e769da2fc245c5f0 brief-sha256=eec120ba51cb469c82a700257f9fe6e8ccc413aa3dcf2b71e769da2fc245c5f0 expansion=sfref:v1:story:hex-2018:37b5fb8a7debf85b1ad62cf5c12360e304c1873a83c3f448cd193807b7a997ad -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-2018`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/hex-2018/artifacts/specification/spec.md`
- Source SHA-256: `77b94c78fc0436bf41297ba9c4bd3ccd3d457f0a938582151f06f13318df3db8`

## Summary from “Agent brief”

The calculator user can invoke a HEX key/button to convert the current displayed positive integer to its hexadecimal representation. Acceptance requires a screenshot showing the interaction and resulting value. This specification does not define behavior outside positive integer inputs or prescribe a particular hexadecimal format or visual layout.

## Actors

The calculator user invokes the conversion through the HEX key/button. No separate roles or authorization boundaries are specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a displayed positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays a positive integer.

- **Given** the calculator displays a positive integer
  **When** the user activates the HEX key/button
  **Then** the current value is displayed in its hexadecimal representation.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** An empty display is outside the specified positive-integer input condition; no empty-state behavior is defined.
- **Failure:** No dependency or failure behavior is specified.
- **Partial:** No partial-operation behavior is specified.

## Permissions

Not applicable: the pinned Story and clarification define no role-based permissions or access restrictions.

## Boundary conditions

The conversion requirement applies to positive integer values displayed by the calculator. Zero, negative, and non-integer values are outside the confirmed input scope; their behavior is unspecified. No limits on positive integer size are established.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- Activating the HEX key/button converts the current displayed positive integer to its hexadecimal representation. *(S1)* [HEX-2018:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- A screenshot showing the user activating the HEX key/button and the resulting hexadecimal value for a positive integer is sufficient to demonstrate acceptance. *(S1)* [HEX-2018:AC-001] [scope:SRI-35efa5d9d09b]

## Non-functional requirements

No non-functional requirements are stated in the pinned Story or clarification.

Use governed requirement anchors here too (for example `[HEX-2018:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The existing calculator presents the current value referenced by the Story. The exact hexadecimal prefix/case and visual layout are not specified.

## Out of scope

Conversion of zero, negative, or non-integer values; hexadecimal input or arithmetic; and any particular hexadecimal prefix, letter case, or visual layout.

> Exact source expansion: `sfref:v1:story:hex-2018:37b5fb8a7debf85b1ad62cf5c12360e304c1873a83c3f448cd193807b7a997ad`. Use `singularity-flow show sfref:v1:story:hex-2018:37b5fb8a7debf85b1ad62cf5c12360e304c1873a83c3f448cd193807b7a997ad --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
