<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "hex-901",
  "workType": "spec-driven-standard",
  "phase": "convergence",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "deterministic",
    "channel": "kernel-generator",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": null,
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
      "code-generator"
    ],
    "source": {
      "kind": "in-place",
      "filename": "convergence.md",
      "mediaType": "text/markdown",
      "sha256": "ea727211c0def96ab5200cebf4b14a9fe7635c24be82f07b6db78d38f1c29c0e",
      "bytes": 821
    },
    "generation": 1,
    "publishedAt": "2026-10-19T14:38:19.927Z"
  },
  "sourceCommit": "4975c407408e9171aa66589d0c1049165de3e3c0",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "1e9ee21b5e311f1c27d56b737efb46c14706df478a45bb6e22dec842f0409d21",
  "sourceSha256": "107f0678a056245582a94a969e2286d070bf6e061284996c8ac6bad867545c7c",
  "template": {
    "path": "singularity/work-items/hex-901/config/wfa/blobs/sha256/eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "sha256": "eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/convergence.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/hex-901/context/inputs-convergence-gen1.json",
    "sha256": "dd6a29c0faf16357053efbc7fc1bac49d11da6616b0355a02499b076cffa3f4d",
    "renderedSha256": "41fd1beb6c85df5af80dd1a0598430920dafb46b0e6d7b4bd068e07110365f35",
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
      "path": "singularity/work-items/hex-901/telemetry/convergence-gen1.json",
      "sha256": "1e507f93f04013a7732997c5b1656562980f2cb3744666ed9c2556ad235c482a",
      "status": "not-invoked",
      "models": [],
      "providerCost": null
    }
  ],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Convergence — hex-901

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `1534226d3ab88f81ac1e67bd94f7953819bbae59199e502b534ba48b152d3f98`
- Reconciliation SHA-256: `04f51d55d890a8fdcf5fd6f7de633aeff2744c6d6106d7c5078093cb1c839c53`
- Source target: `7139b75d276f4d46d2aed57550735a0964fb977a`

## Deterministic facts

- No deterministic trace-evidence gaps were found.

## Assisted candidates

- No assisted candidates are bound to this iteration.

## Findings and dispositions

| Finding | Item | Clauses | Disposition | Reason |
|---|---|---|---|---|
| — | — | — | — | No human dispositions recorded. |

## Unresolved blockers

- None.

## Allowed next actions

- `advance-to-verification`


<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/hex-901/artifacts/specification/spec.md sha256=c4a87c2817cf354bef4a31b32497a4261bbc26bf90d423df79fdd1f9658110e2 status=captured projection=approved-summary representation-sha256=sha256:9476b0b89d23f4d786d6e593b4401308ecfc012febf7eafcb30b8bff0fb82e69 brief-sha256=9476b0b89d23f4d786d6e593b4401308ecfc012febf7eafcb30b8bff0fb82e69 expansion=sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-901`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/hex-901/artifacts/specification/spec.md`
- Source SHA-256: `56fc0199868451deb85a3220e1dcd9ec434664b036c88a2a2e2e2c0f1afbf832`

## Summary from “Agent brief”

Calculator users need to convert the current calculator value to hexadecimal. The confirmed scope
is positive integers; the converted value is displayed without a `0x` prefix. For the required
example, 16 displays as `10`. Acceptance includes tests of positive-integer conversions and a
screenshot of the 16-to-`10` state. The exact control placement and A-F letter casing are unspecified.

## Actors

Who uses this, and what authority does each hold?

- **Calculator user:** invokes the hex operation on the current calculator value. No distinct role
  or permission level was specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert the current positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator has a current positive integer value.

- **Given** the calculator's current value is 16
  **When** the user invokes the hex operator
  **Then** the calculator displays `10`, the hexadecimal representation of 16, without a `0x`
  prefix.

- **Given** the calculator's current value is another positive integer
  **When** the user invokes the hex operator
  **Then** the calculator displays the equivalent base-16 representation of that value.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No conversion result is specified when the calculator has no current positive integer
  value.
- **Failure:** The request specifies no dependency failure or error message for this local
  conversion; no new failure behavior is required.
- **Partial:** No partial-conversion state is specified.

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

No role or permission distinction is specified; the feature adds no authorization requirement.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

The supported conversion input domain is positive integers. Zero, negative values, and fractional
values are outside this request; their conversion behavior is not specified. The converted value
has no `0x` prefix. Letter casing for hexadecimal digits A-F is not specified; either case is
acceptable when the displayed digits represent the same value.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- When the user invokes the hex operator while the calculator's current value is a positive integer,
  display that value's equivalent base-16 representation. *(S1)* [HEX-901:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- Tests verify that positive integer values convert to their equivalent hexadecimal values, and a
  screenshot shows the calculator displaying `10` without a prefix after converting 16. *(S1)*
  [HEX-901:AC-001] [scope:SRI-23836b6af209]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[HEX-901:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

Not applicable: no non-functional target was stated in the pinned Story or clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The phrase “current calculator value” refers to the value currently held by the calculator when
the user invokes the hex operator. The Story and clarification do not specify the exact control
placement or the letter casing of hexadecimal digits.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Conversion of zero, negative, or fractional values; a specific control placement or keyboard
shortcut; and any non-functional targets not stated in the Story.

> Exact source expansion: `sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883`. Use `singularity-flow show sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883 --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/hex-901/artifacts/planning/plan.md sha256=9bfcc624b7a6ff89ed21a59986245c29636c25a6b929bb59d5993cba96e62d9d status=captured projection=approved-summary representation-sha256=sha256:95e78db8a80b7734694ae9359343a81b9075b21c3fcd06029317524fe590bffb brief-sha256=95e78db8a80b7734694ae9359343a81b9075b21c3fcd06029317524fe590bffb expansion=sfref:v1:story:hex-901:e215e7ab9f8bf3b676c7f95eaaece5b755c7c5946d1bffcac8a110b9d34a7707 -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-901`
- Producer: `planning` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/hex-901/artifacts/planning/plan.md`
- Source SHA-256: `625bd89a6b3aff4009dbdf3589f6ed47103ff63f70cf15187d7b43039d58067c`

## Summary from “Agent brief”

Add a visible `Hex` action to the shared standard keypad and wire it through `App` so it is available in both Standard and Scientific modes. The handler will resolve the current expression or displayed result, accept only a finite positive integer, and render its base-16 digits without a prefix. Keep conversion in the UI action rather than changing the shared expression evaluator, minimizing impact on unrelated arithmetic and formatting. Verify representative positive integers with Vitest and retain a screenshot of 16 displayed as `10`. Principal risks are converting a stale result instead of a pending expression and disturbing the shared keypad layout; integration tests and a visual check cover these. [HEX-901:REQ-001] [HEX-901:AC-001]

## Test strategy

Use the existing Vitest/Testing Library app integration suite for the user-visible action, with assertions scoped to the calculator display. Exercise both a direct positive integer and a pending expression, and check that displayed output is the corresponding hexadecimal digits without `0x`. The acceptance screenshot is a separate retained visual artifact; image presence alone is not acceptance, so review it against the required displayed state. Do not treat the absence of retained specification-phase test results as a pass or failure; the planning packet establishes no retained test execution. [HEX-901:REQ-001] [HEX-901:AC-001]

Add exactly one row per clause, using its
fully qualified ID (for example, `HEX-901:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `hex-901`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-901:AC-001` | `singularity/work-items/hex-901/evidence/hex-operator-16.png` | `src/App.test.jsx` | evidence | Screenshot shows 16 converted to `10` in the calculator display with no prefix; tests cover positive-integer conversion. |
| `HEX-901:REQ-001` | `src/App.jsx`, `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | Invoking Hex for a positive integer displays its equivalent base-16 representation. |

## Risks and rollback

**Risks and detection.** If a pending expression is ignored, the action could convert a stale display value; integration coverage must convert an expression before pressing Hex and verify the result. The keypad is shared by Standard and Scientific modes, so check both render the action and that its button does not obscure existing controls. Keep the domain guard limited to the specified positive integers; do not introduce an undocumented conversion result for unsupported values. [HEX-901:REQ-001]

**Rollback.** Revert the Hex callback and button wiring in `src/App.jsx` and `src/components/StandardKeypad.jsx`, plus only the corresponding regression assertions in `src/App.test.jsx`. The existing evaluator and arithmetic behavior remain unchanged, so no data migration or persistent-state rollback is needed. [HEX-901:REQ-001]

> Exact source expansion: `sfref:v1:story:hex-901:e215e7ab9f8bf3b676c7f95eaaece5b755c7c5946d1bffcac8a110b9d34a7707`. Use `singularity-flow show sfref:v1:story:hex-901:e215e7ab9f8bf3b676c7f95eaaece5b755c7c5946d1bffcac8a110b9d34a7707 --section "<heading>"` only when exact wording is needed.

## Approved phase input: implementation

<!-- source=singularity/work-items/hex-901/artifacts/implementation/implementation-summary.md sha256=0facae80bf7dbd6a70f4862593d48a45ec26c5af93bc903e41b1e8f8a77d4d1a status=captured projection=approved-summary representation-sha256=sha256:e7d60c1bf74246a315388dd49c24b47c1424b3cf9c52310dc2cf484f9b6a2c29 brief-sha256=e7d60c1bf74246a315388dd49c24b47c1424b3cf9c52310dc2cf484f9b6a2c29 expansion=sfref:v1:story:hex-901:d58512be9b1b507367f7f6c888aeca3d4407f4b06b3cd7b8ecb77a12af5227f5 -->

# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `hex-901`
- Producer: `implementation` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/hex-901/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `0d44aa5b5b7a7682d08f45ea11847acc86f68488097e55201fc03d929f96bd27`

## Summary from “Agent brief”

Added a Hex action to the shared standard keypad, available in Standard and Scientific modes. It
converts the pending expression value or current displayed result only when it evaluates to a
finite positive integer, then displays lowercase hexadecimal digits without a prefix. Invalid
values remain unchanged. Regression coverage verifies 16 → 10, other positive integers, pending
expressions, and the Scientific-mode action. The retained screenshot shows 16 converted to 10.
Targeted tests and the production build pass; lint reports four existing unused-variable/import
errors in the changed files. No configuration, persistence, or evaluator changes were needed.

## Changed components and decisions

`src/App.jsx` implements the guarded conversion and includes the source-bound
`@clause:HEX-901:REQ-001` comment. `src/components/StandardKeypad.jsx` adds the Hex action to the
shared keypad; `src/components/ScientificKeypad.jsx` already forwards its props to that keypad, so
both modes expose it. `src/App.test.jsx` adds acceptance-tagged integration coverage
(`@ac:HEX-901:AC-001`) for direct conversions, a pending expression, unsupported fractional input,
and availability in Scientific mode. No configuration, migration, or persistent-state change was
needed. No approved deviation or upstream discrepancy was identified. Configuration and
documentation tags are not applicable: this is a product-code behavior change.

## Tests and operational notes

Acceptance tests in `src/App.test.jsx` carry `@ac:HEX-901:AC-001`. Ran
`npm test -- --run src/App.test.jsx` from the repository root: exit 0, 1 test file and 22 tests
passed. The acceptance cases include 16 → 10, 255 → ff, 4095 → fff, and expression 10 + 6 → 10.
The screenshot at `singularity/work-items/hex-901/evidence/hex-operator-16.png` was captured from
the running local app with 16 converted and displayed as `10` without a prefix.

Ran `npm run build`: exit 0; Vite reported its existing large-chunk advisory (>500 kB). Ran
`npx eslint src/App.jsx src/components/StandardKeypad.jsx src/App.test.jsx`: exit 1 because of
four unused imports/variables already present in the changed files (`React` in `App.jsx`,
`React` and `Percent` in `StandardKeypad.jsx`, and catch parameter `e` in `App.jsx`). No lint
finding points to the new Hex implementation. No rollout or data migration is required. Exact
letter casing beyond the tested lowercase output was not otherwise specified.

> Exact source expansion: `sfref:v1:story:hex-901:d58512be9b1b507367f7f6c888aeca3d4407f4b06b3cd7b8ecb77a12af5227f5`. Use `singularity-flow show sfref:v1:story:hex-901:d58512be9b1b507367f7f6c888aeca3d4407f4b06b3cd7b8ecb77a12af5227f5 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
