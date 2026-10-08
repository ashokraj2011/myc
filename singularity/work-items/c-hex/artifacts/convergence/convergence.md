<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "c-hex",
  "workType": "spec-driven-standard",
  "phase": "convergence",
  "generation": 1,
  "status": "awaiting_approval",
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
      "sha256": "77a757c1fc531c154392f996d4448c2ce8e38abc4e449c60bd5705e811a6c937",
      "bytes": 975
    },
    "generation": 1,
    "publishedAt": "2026-10-08T16:26:12.594Z"
  },
  "sourceCommit": "94bfb5b365666bbf908c05af230a6ec1e73e4665",
  "generationCommit": "ca66b09dc50317cbffc6f39f6ea5426bf291712a",
  "publicationCommit": "ca66b09dc50317cbffc6f39f6ea5426bf291712a",
  "configSha256": "8603b630ebce6c8a7cabcc23f668f657bb84d84d9326d1545f5db42557025e04",
  "sourceSha256": "972d97c67c21b23e94b63363d0c2a32bc66c5ac36061896b5654950b78ccfee8",
  "template": {
    "path": "singularity/work-items/c-hex/config/wfa/blobs/sha256/eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "sha256": "eb257477afca0229ed858875499736c57498015aaee0a527b714356819a9dde2",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/convergence.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/c-hex/context/inputs-convergence-gen1.json",
    "sha256": "08804e35a3169d4ae3c72165ed95958c7820dcaac37e5b6b68a26f5309e1a4e7",
    "renderedSha256": "876d6c6717173246b9183647df1a00a9e7a4910dd2ce641b27336a3af8104432",
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
      "path": "singularity/work-items/c-hex/telemetry/convergence-gen1.json",
      "sha256": "fc993e9f704de09a6020c093e13ac22294d23b020cca81f9cea99a93491c1837",
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

# Convergence — c-hex

> Deterministically rendered from the kernel-owned convergence projection. No model authored this artifact.

## Iteration

- Iteration: **1**
- Projection SHA-256: `ba9d75a4f9acb26fc0955f56d2d7ee076b42fef485366988ba3b8d760a17082c`
- Reconciliation SHA-256: `ac2f834d5c197c663135ce7f06b6d85e8009ffc625e40f111600eef065284f61`
- Source target: `387a9b447f8a11a7843858ed039fb7bf64c209c5`

## Deterministic facts

- **CF-ee0010c17ba4** · unclaimed-changed-path: src/components/Header.jsx changed and no observed claim cites it; this is missing trace evidence, not a finding that the change was unplanned

## Assisted candidates

- No assisted candidates are bound to this iteration.

## Findings and dispositions

| Finding | Item | Clauses | Disposition | Reason |
|---|---|---|---|---|
| GF-7173dee6b42a | CF-ee0010c17ba4 | — | accepted-deviation | its fine |

## Unresolved blockers

- None.

## Allowed next actions

- `advance-to-verification`


<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/c-hex/artifacts/specification/spec.md sha256=31d5b3ddb669c6d147b0575d0f6bc279f395c9f1865e80fdfa5e16ecf26c9baa status=captured projection=approved-summary representation-sha256=sha256:ab324fa457dd6eaec0288ffc2251820ed4babb117344b550d7a9798e181bad1c brief-sha256=ab324fa457dd6eaec0288ffc2251820ed4babb117344b550d7a9798e181bad1c expansion=sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `specification` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/c-hex/artifacts/specification/spec.md`
- Source SHA-256: `76c15e32ef70ea5fa35ef4e732c4f893af1a35d3348f0b31ca64e3e4f3446466`

## Summary from “Agent brief”

Add a browser-based page to the existing application where a user can enter a positive base-10
whole number and receive its uppercase hexadecimal representation without a `0x` prefix. Any input
outside that supported domain must display exactly `Not Supported`. Validation must include
screenshot evidence of the implemented page. Authentication changes, additional conversion bases,
and non-browser clients are excluded.

## Actors

- **User:** Uses the existing browser application to submit a value and view either its hexadecimal
  representation or the unsupported-input message. No new privileged operation or role is required.

## User scenarios

### S1 — Convert a supported positive whole number

**Priority:** P1
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the user enters `255`
  **When** the user requests conversion
  **Then** the page displays `FF`.

- **Given** the user enters any positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays the equivalent uppercase hexadecimal value without a `0x` prefix.

### S2 — Reject an unsupported input

**Priority:** P2
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the entered value is not a positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays exactly `Not Supported`.

## Failure and empty states

- **Empty:** An empty submitted value is unsupported and displays exactly `Not Supported`.
- **Failure:** Non-numeric text, zero, negative numbers, decimal values, and every other value
  outside the supported domain display exactly `Not Supported`.
- **Partial:** Conversion is a single observable operation; no partial-success state is defined.

## Permissions

- Any user who can access the existing browser application may use the conversion page.
- This feature introduces no new authentication, authorization, or role-management behavior.

## Boundary conditions

- The supported domain is a base-10 whole number strictly greater than zero.
- `1` is the lowest supported input and produces `1`.
- `0`, negative numbers, decimal values, empty input, and non-numeric input are unsupported.
- A valid result uses uppercase hexadecimal digits `0` through `9` and `A` through `F`.
- A valid result never includes a `0x` prefix.
- No maximum supported positive whole number was established by the governed inputs; an
  implementation must not introduce an undocumented upper boundary.

## Requirements

- The existing application shall provide a browser-based page where a user can enter a value and
  request hexadecimal conversion. *(S1, S2; DOC-002 Q-004)* [c-hex:REQ-001]
- For a positive base-10 whole number greater than zero, the page shall display its mathematically
  equivalent hexadecimal value. *(S1; DOC-002 Q-001, Q-002)* [c-hex:REQ-002]
- A supported result shall use uppercase hexadecimal characters and shall omit the `0x` prefix.
  *(S1; DOC-002 Q-003)* [c-hex:REQ-003]
- For every input outside the supported domain, the page shall display exactly `Not Supported`.
  *(S2; DOC-002 Q-001, Q-002)* [c-hex:REQ-004]
- Verification shall retain screenshot evidence showing the implemented browser page and its
  observable behavior. *(S1, S2; DOC-001, DOC-002 Q-005)* [c-hex:REQ-005]

- Entering `255` and requesting conversion displays exactly `FF`. *(S1)* [c-hex:AC-001]
- Entering `1` and requesting conversion displays exactly `1`. *(S1)* [c-hex:AC-002]
- Every supported result is uppercase and has no `0x` prefix. *(S1)* [c-hex:AC-003]
- Submitting each representative unsupported class—empty, `0`, a negative number, a decimal value,
  and non-numeric text—displays exactly `Not Supported`. *(S2)* [c-hex:AC-004]
- Screenshot evidence captures the browser page with at least one supported result and the
  `Not Supported` outcome. *(S1, S2)* [c-hex:AC-005]

## Non-functional requirements

- No latency, throughput, availability, accessibility, privacy, or retention target was supplied
  by the governed inputs. This specification does not invent numeric service levels.

## Assumptions

- The existing application already defines how users reach browser pages and does not require this
  feature to introduce a new access-control model.
- Conversion is stateless and does not require persisted conversion history.
- If either assumption is false, the resulting work is a scope change rather than an implementation
  defect against this specification.

## Out of scope

- Converting hexadecimal values back to decimal.
- Supporting zero, negative numbers, decimal fractions, or non-base-10 input.
- Lowercase hexadecimal output or output with a `0x` prefix.
- Native desktop, mobile, or command-line interfaces.
- New authentication, authorization, persistence, or conversion-history features.

> Exact source expansion: `sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d`. Use `singularity-flow show sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/c-hex/artifacts/planning/plan.md sha256=944df95d7060bd563d21ddd27f943a94da894b4fce35ecfa9095e7fe4ddd1b35 status=captured projection=approved-summary representation-sha256=sha256:5233837969fab71ebd143dfc09f2b78023b2689b06413888c84f5fef900a8ad6 brief-sha256=5233837969fab71ebd143dfc09f2b78023b2689b06413888c84f5fef900a8ad6 expansion=sfref:v1:story:c-hex:2443870b6181c4a74c5610d70cf9b39260443282de72f4490c9fad77db6b316f -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `planning` generation 2
- Consumer: `convergence`
- Source: `singularity/work-items/c-hex/artifacts/planning/plan.md`
- Source SHA-256: `acff214910da8ecb276d87c880f1fba3fba150a42deb0ce571a8cf9676cb5e68`

## Summary from “Agent brief”

Add a minimal browser-side conversion flow to the existing calculator application: render a conversion input and action in the main UI, validate the supported domain (positive base-10 whole numbers greater than zero), convert validated decimal text with `BigInt` so values above JavaScript's safe-integer boundary remain exact, and surface exactly `Not Supported` for every invalid value. The change is constrained to the current browser app and is verified with a small UI regression suite that exercises ordinary, large, and unsupported cases and retains screenshot evidence.

## Test strategy

The implementation will prove each authoritative requirement with the app-level regression test file so the primary path and the unsupported domain are checked end-to-end in the browser.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `c-hex:REQ-001` | `src/App.jsx`, `src/App.css` | `src/App.test.jsx` | new | The browser page accepts a value and performs hexadecimal conversion without introducing a new backend or privileged flow. |
| `c-hex:REQ-002` | `src/App.jsx` | `src/App.test.jsx` | new | A supported positive whole number, including `9007199254740993` above `Number.MAX_SAFE_INTEGER`, displays its mathematically equivalent hexadecimal value (`20000000000001`) without an application-defined maximum. |
| `c-hex:REQ-003` | `src/App.jsx` | `src/App.test.jsx` | new | Every valid result uses uppercase hexadecimal characters and omits the `0x` prefix. |
| `c-hex:REQ-004` | `src/App.jsx` | `src/App.test.jsx` | new | Empty, zero, negative, decimal, and non-numeric values all display exactly `Not Supported`. |
| `c-hex:REQ-005` | `singularity/work-items/c-hex/evidence/verification/hex-conversion-success.png`, `singularity/work-items/c-hex/evidence/verification/hex-conversion-not-supported.png` | `src/App.test.jsx` | evidence | Screenshot evidence shows the implemented browser page with a successful conversion and a `Not Supported` outcome. |
| `c-hex:AC-001` | `src/App.jsx` | `src/App.test.jsx` | new | Entering `255` and requesting conversion displays exactly `FF`. |
| `c-hex:AC-002` | `src/App.jsx` | `src/App.test.jsx` | new | Entering `1` and requesting conversion displays exactly `1`. |
| `c-hex:AC-003` | `src/App.jsx` | `src/App.test.jsx` | new | Supported results use uppercase characters and omit the `0x` prefix. |
| `c-hex:AC-004` | `src/App.jsx` | `src/App.test.jsx` | new | Empty, `0`, negative, decimal, and non-numeric input each display exactly `Not Supported`. |
| `c-hex:AC-005` | `singularity/work-items/c-hex/evidence/verification/hex-conversion-success.png`, `singularity/work-items/c-hex/evidence/verification/hex-conversion-not-supported.png` | `src/App.test.jsx` | evidence | Retained screenshots show at least one supported result and the `Not Supported` outcome. |

## Risks and rollback

The primary risks are implementing validation incorrectly, such as accepting `0`, decimals, or non-numeric input, and introducing precision loss by converting through `Number`. Focused browser regression tests cover unsupported classes, output formatting, and an exact value above `Number.MAX_SAFE_INTEGER`; retained screenshots cover the visible supported and unsupported outcomes. If the UI or validation logic drifts from specification, the rollback path is to revert the conversion-only changes in the app entry file while keeping the rest of the calculator behavior unchanged; no authentication, persistence, or conversion-history work is coupled to the feature.

> Exact source expansion: `sfref:v1:story:c-hex:2443870b6181c4a74c5610d70cf9b39260443282de72f4490c9fad77db6b316f`. Use `singularity-flow show sfref:v1:story:c-hex:2443870b6181c4a74c5610d70cf9b39260443282de72f4490c9fad77db6b316f --section "<heading>"` only when exact wording is needed.

## Approved phase input: implementation

<!-- source=singularity/work-items/c-hex/artifacts/implementation/implementation-summary.md sha256=182d53e2d38730040582ab04003b851d6051a1d0264f1fdb24dc262a394ebf22 status=captured projection=approved-summary representation-sha256=sha256:66ba3ada136afba26efe93490f79541a8877ae5167539a24d7bb047e96d593c4 brief-sha256=66ba3ada136afba26efe93490f79541a8877ae5167539a24d7bb047e96d593c4 expansion=sfref:v1:story:c-hex:92a860bb612143b506a214a218dc4c64ba8a669a39df3c6dd1b9560fd2a5de91 -->

# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `implementation` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/c-hex/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `0ff07407e2bf28e62cfb501dcb9c1cd45d15d02260efb8ef985c1007e6537954`

## Summary from “Agent brief”

Implemented an in-app Hex Converter for positive base-10 whole numbers, using `BigInt` to avoid
introducing an undocumented maximum. The browser UI returns uppercase hexadecimal without a
prefix and returns exactly `Not Supported` for values outside the governed domain. Changes are
limited to the app shell, mode navigation, and focused regression coverage. The focused Vitest
suite passed 18 of 18 tests before final traceability expansion; governed publication remains
subject to the configured SFlow test handoff.

## Changed components and decisions

Updated product-source files:

- `src/App.jsx`
  - Added `convertToHex` with validation and `Not Supported` handling.
  - Added the `hex` mode rendering block for input, conversion button, and result display.
  - Bound the behavior to controlled requirement tags: `@clause:c-hex:REQ-001`, `@clause:c-hex:REQ-002`, `@clause:c-hex:REQ-003`, and `@clause:c-hex:REQ-004`.
- `src/App.css`
  - Added responsive Hex Converter panel, input, and result styles bound to `@clause:C-HEX:REQ-001`.
- `src/components/Header.jsx`
  - Added the Hex Converter item to the mode navigation and mobile mode selector.
- `src/App.test.jsx`
  - Added a regression test tagged with `@ac:c-hex:AC-001` through `@ac:c-hex:AC-004`.
  - Covers `255`, `1`, a value beyond JavaScript's safe-integer range, uppercase/no-prefix formatting,
    and the empty, zero, negative, decimal, and non-numeric unsupported classes.

No config or migration changes were required beyond the normal React/Vitest app setup. The implementation intentionally does not add an undocumented upper bound for supported values; it only rejects values outside the approved positive-integer domain. The app remains a browser-only feature inside the existing calculator experience, matching the governed scope.

## Tests and operational notes

Executable verification completed with the app’s test runner:

- Command: `npm test -- --run src/App.test.jsx`
- Observed result: `1 passed (1)` test file and `18 passed (18)` tests.
- Relevant assertions confirm the Hex Converter mode is reachable and that supported/unsupported values behave as required.
- The final expanded acceptance assertions are intended to run through governed publication once
  an executable test handoff is configured.

Operational notes:

- The work was validated in the selected story worktree under the SFlow implementation phase.
- The feature is intentionally limited to the browser app and does not introduce additional bases, authentication changes, or non-browser clients.
- Screenshot evidence for `c-hex:REQ-005` and `c-hex:AC-005` is retained at
  `singularity/work-items/c-hex/evidence/verification/hex-conversion-success.png` and
  `singularity/work-items/c-hex/evidence/verification/hex-conversion-not-supported.png`.

> Exact source expansion: `sfref:v1:story:c-hex:92a860bb612143b506a214a218dc4c64ba8a669a39df3c6dd1b9560fd2a5de91`. Use `singularity-flow show sfref:v1:story:c-hex:92a860bb612143b506a214a218dc4c64ba8a669a39df3c6dd1b9560fd2a5de91 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
