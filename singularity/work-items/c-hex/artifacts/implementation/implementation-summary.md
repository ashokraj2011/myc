<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "c-hex",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 1,
  "status": "approved",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "developer",
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
      "agentId": "developer"
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
      "filename": "implementation-summary.md",
      "mediaType": "text/markdown",
      "sha256": "95bb45f8a867a5b813d92cc4ff3b286692e8ed7e5d17bb9eade9728df26c76b6",
      "bytes": 3559
    },
    "generation": 1,
    "publishedAt": "2026-10-08T15:20:59.662Z"
  },
  "sourceCommit": "99f98d44cd5189a4495a5898d124d757da475794",
  "generationCommit": "387a9b447f8a11a7843858ed039fb7bf64c209c5",
  "publicationCommit": "387a9b447f8a11a7843858ed039fb7bf64c209c5",
  "configSha256": "8603b630ebce6c8a7cabcc23f668f657bb84d84d9326d1545f5db42557025e04",
  "sourceSha256": "972d97c67c21b23e94b63363d0c2a32bc66c5ac36061896b5654950b78ccfee8",
  "template": {
    "path": "singularity/work-items/c-hex/config/wfa/blobs/sha256/cf46a21cdcb12035defbb5b6a74c7acd6c6d1e751556964f416f27bb5acb5482",
    "sha256": "cf46a21cdcb12035defbb5b6a74c7acd6c6d1e751556964f416f27bb5acb5482",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/c-hex/context/inputs-implementation-gen1.json",
    "sha256": "a448e240792b743ee8c623fcda181654c43e045f624510f542db0be1ba48ad3b",
    "renderedSha256": "9308b6c90415f6a3d393185ad6a6761e78d5fa49b93c7e527d5f15d71c65d636",
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
      "path": "singularity/work-items/c-hex/telemetry/implementation-gen1.json",
      "sha256": "eafa5d702519b6c39b7262e57fdcfa2484e8e0199454f8f669f73c619ec09144",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 21029,
        "estimatedTokens": 5258,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 21029,
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
      "startedAt": "2026-10-08T15:20:59.662Z",
      "completedAt": "2026-10-08T15:20:59.662Z",
      "agent": "developer",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "implementation",
      "at": "2026-10-08T15:35:25.449Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011",
        "githubLookup": "resolved"
      },
      "agent": "developer",
      "authorityGroup": "engineering-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/c-hex/artifacts/implementation/implementation-summary.md",
          "sha256": "bdc73d1b41e521abc97e50ad781097a6a77b2d59a3171f48f6e201f16a379400"
        },
        {
          "path": "src/App.css",
          "sha256": "3257353575842e140fddc4573cc3c4bebfd0d6cbb3525d710efe66be9abcda7f"
        },
        {
          "path": "src/App.jsx",
          "sha256": "2aaceaae14f164735859b23c7dddb632b3b14c826a0de062e34ec22e77c0ac56"
        },
        {
          "path": "src/App.test.jsx",
          "sha256": "4cee081c032f7b34a5708f3ff7ede6625f9fb19eea82459b6569f2e866c33ac4"
        },
        {
          "path": "src/components/Header.jsx",
          "sha256": "2e20daa47f8002546840aa050d77f24ac14e6fe316f8bb9caeb522dabd7e78df"
        }
      ],
      "reviewPacketSha256": "f8a33eb63312445649f776e8a36cc681f7e09da4bb8283dd1f444dce09691dee",
      "evidenceCommit": "cfae6ff82c9501a213485727ceb17f64402eb9a5",
      "artifactSetSha256": "7f53ecf6132e6b8b7f627a2913c65aeb57e5e68f75a09d2dcde2efbcf828b2f0",
      "architectureIntent": null,
      "architectureDecision": null,
      "reviewEvidenceCommit": "cfae6ff82c9501a213485727ceb17f64402eb9a5",
      "implementationBindings": {
        "bindingsSha256": "sha256:f13e1a1eee8f3eb1c11ba349722ea5aa0d59b763c217f710648043922547d529",
        "decisions": [
          {
            "clauseId": "C-HEX:AC-001",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:AC-002",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:AC-003",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:AC-004",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:REQ-001",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:REQ-002",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:REQ-003",
            "decision": "accepted"
          },
          {
            "clauseId": "C-HEX:REQ-004",
            "decision": "accepted"
          }
        ]
      },
      "witnessMappings": [
        {
          "mappingSha256": "sha256:585881bbb41dbe4bd61b7ed6ab28db7a059d71b2c2c87c442ae4a26c7750be60",
          "clauseId": "C-HEX:AC-004",
          "clauseBodySha256": "sha256:85af3ed1f54d66c2e1aaaaa6c65ccda5e91f96cd9c068642c6ee6d50953d1d67",
          "logicalTestId": "sha256:7ad2eb5ce3eb9cfd9d1b7dcd2883c6fdb6a93dd72ae5b4f124dd0d8d3c2fe1de",
          "sourcePath": "src/App.test.jsx",
          "sourceDeclarationSha256": "sha256:efc8bf546f28df77c3a4f033b80c1ecce603fb6993bf93d13978dc7f6a913750",
          "slot": null,
          "decision": "satisfied",
          "reason": null,
          "expiresAt": null,
          "adequacy": {
            "setup": "adequate",
            "action": "adequate",
            "assertions": "adequate",
            "boundaries": "adequate",
            "implementation": "adequate"
          },
          "source": "batch"
        },
        {
          "mappingSha256": "sha256:790ff6fec850ea2a8d4f4893d7bbb56305efd0af69ab05628b1fad616c8c84f7",
          "clauseId": "C-HEX:AC-003",
          "clauseBodySha256": "sha256:ad9e8cd2f8b160e1e34e1532f87f0f53d3cc717dad301d7e227341e9287383c0",
          "logicalTestId": "sha256:7ad2eb5ce3eb9cfd9d1b7dcd2883c6fdb6a93dd72ae5b4f124dd0d8d3c2fe1de",
          "sourcePath": "src/App.test.jsx",
          "sourceDeclarationSha256": "sha256:efc8bf546f28df77c3a4f033b80c1ecce603fb6993bf93d13978dc7f6a913750",
          "slot": "tests",
          "decision": "satisfied",
          "reason": null,
          "expiresAt": null,
          "adequacy": {
            "setup": "adequate",
            "action": "adequate",
            "assertions": "adequate",
            "boundaries": "adequate",
            "implementation": "adequate"
          },
          "source": "batch"
        },
        {
          "mappingSha256": "sha256:ad2bd642d44b886ac85f0b5be390e3260cccfa70c93e224fd69363e0fdf67d75",
          "clauseId": "C-HEX:AC-001",
          "clauseBodySha256": "sha256:3718fcf2f7a556d4bf6764179b69019c12fc4b26fb8c784421bde2848e00608f",
          "logicalTestId": "sha256:7ad2eb5ce3eb9cfd9d1b7dcd2883c6fdb6a93dd72ae5b4f124dd0d8d3c2fe1de",
          "sourcePath": "src/App.test.jsx",
          "sourceDeclarationSha256": "sha256:efc8bf546f28df77c3a4f033b80c1ecce603fb6993bf93d13978dc7f6a913750",
          "slot": null,
          "decision": "satisfied",
          "reason": null,
          "expiresAt": null,
          "adequacy": {
            "setup": "adequate",
            "action": "adequate",
            "assertions": "adequate",
            "boundaries": "adequate",
            "implementation": "adequate"
          },
          "source": "batch"
        },
        {
          "mappingSha256": "sha256:ec2f2543dbc426ea8a243cbeb48fb8defec4d6f6f2dc668bafc205ce17e2ae39",
          "clauseId": "C-HEX:AC-002",
          "clauseBodySha256": "sha256:0fbb1af77b27f5102b48907f2c1e62733b0407c2f703b3b0608d4dcf6ee3a332",
          "logicalTestId": "sha256:7ad2eb5ce3eb9cfd9d1b7dcd2883c6fdb6a93dd72ae5b4f124dd0d8d3c2fe1de",
          "sourcePath": "src/App.test.jsx",
          "sourceDeclarationSha256": "sha256:efc8bf546f28df77c3a4f033b80c1ecce603fb6993bf93d13978dc7f6a913750",
          "slot": "tests",
          "decision": "satisfied",
          "reason": null,
          "expiresAt": null,
          "adequacy": {
            "setup": "adequate",
            "action": "adequate",
            "assertions": "adequate",
            "boundaries": "adequate",
            "implementation": "adequate"
          },
          "source": "batch"
        }
      ],
      "witnessMappingsSha256": "sha256:b0b9691ac27bce766cc4eadb7d8dabcb473aaa23ae5bee64c7e5c17274139037",
      "actionContext": {
        "phase": "implementation",
        "label": "Implementation",
        "generation": 1,
        "submittedAt": "2026-10-08T15:24:54.410Z",
        "artifacts": [
          {
            "path": "singularity/work-items/c-hex/artifacts/implementation/implementation-summary.md",
            "sha256": "bdc73d1b41e521abc97e50ad781097a6a77b2d59a3171f48f6e201f16a379400"
          },
          {
            "path": "src/App.css",
            "sha256": "3257353575842e140fddc4573cc3c4bebfd0d6cbb3525d710efe66be9abcda7f"
          },
          {
            "path": "src/App.jsx",
            "sha256": "2aaceaae14f164735859b23c7dddb632b3b14c826a0de062e34ec22e77c0ac56"
          },
          {
            "path": "src/App.test.jsx",
            "sha256": "4cee081c032f7b34a5708f3ff7ede6625f9fb19eea82459b6569f2e866c33ac4"
          },
          {
            "path": "src/components/Header.jsx",
            "sha256": "2e20daa47f8002546840aa050d77f24ac14e6fe316f8bb9caeb522dabd7e78df"
          }
        ],
        "agentBriefs": [
          {
            "consumerPhase": "convergence",
            "status": "ready",
            "path": "singularity/work-items/c-hex/context/briefs/implementation-gen1-for-convergence.json",
            "renderedPath": "singularity/work-items/c-hex/context/briefs/implementation-gen1-for-convergence.md",
            "renderedSha256": "66ba3ada136afba26efe93490f79541a8877ae5167539a24d7bb047e96d593c4",
            "integritySha256": "090d6cd4f38e6914966e07b7d48f8d2b0a5ba83c2c51dfff25d5207199408456",
            "documentId": "agent-brief-implementation-gen1-convergence",
            "documentPath": "singularity/work-items/c-hex/context/briefs/implementation-gen1-for-convergence.md",
            "documentSha256": "66ba3ada136afba26efe93490f79541a8877ae5167539a24d7bb047e96d593c4"
          },
          {
            "consumerPhase": "verification",
            "status": "ready",
            "path": "singularity/work-items/c-hex/context/briefs/implementation-gen1-for-verification.json",
            "renderedPath": "singularity/work-items/c-hex/context/briefs/implementation-gen1-for-verification.md",
            "renderedSha256": "9469280b29f33bd6f2c0a5f7157795feee73243e2369b761acb314af5a8978d5",
            "integritySha256": "96c4f2c0a4c6362352236f2dd2ef6f5cf891c298c683e26cdcc76e8840d458a8",
            "documentId": "agent-brief-implementation-gen1-verification",
            "documentPath": "singularity/work-items/c-hex/context/briefs/implementation-gen1-for-verification.md",
            "documentSha256": "9469280b29f33bd6f2c0a5f7157795feee73243e2369b761acb314af5a8978d5"
          }
        ],
        "reviewPacketSha256": "f8a33eb63312445649f776e8a36cc681f7e09da4bb8283dd1f444dce09691dee",
        "submittedSourceCommit": "387a9b447f8a11a7843858ed039fb7bf64c209c5",
        "planId": "79616b2dad1797f4a0992539"
      },
      "upstream": {
        "sha256": "sha256:e3f95e1c2ef6614fe173fad50d368f6372a58de34679d96fc41a50a65fae9813",
        "refs": [
          {
            "kind": "input",
            "ref": "planning",
            "sha256": "sha256:39b613ecd7a6651b879418fb463695e1faa5feedcac6470e98400c83328ffff2"
          },
          {
            "kind": "input",
            "ref": "specification",
            "sha256": "sha256:50c916d7b5f863fa53abda44ea77957dca655171683a58c797cd62b254c4d673"
          },
          {
            "kind": "candidate",
            "ref": "HEAD",
            "sha256": "sha256:68618450e69ae2c21bcf31dc0770fb6112916e0d248b38b689cc630c384d44da"
          },
          {
            "kind": "specification",
            "ref": "records",
            "sha256": "sha256:eaae45da750de5792940606202272b39358bc35907c04907db97fdad2de372c3"
          },
          {
            "kind": "documents",
            "ref": "implementation",
            "sha256": "sha256:37517e5f3dc66819f61f5a7bb8ace1921282415f10551d2defa5c3eb0985b570"
          },
          {
            "kind": "decisions",
            "ref": "story",
            "sha256": "sha256:cc50da61b8c97e44052165c139779d623edc8c8ca60966ea820ab38f1efb1c89"
          }
        ]
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# c-hex — Implementation Summary

## Agent brief

Implemented an in-app Hex Converter for positive base-10 whole numbers, using `BigInt` to avoid
introducing an undocumented maximum. The browser UI returns uppercase hexadecimal without a
prefix and returns exactly `Not Supported` for values outside the governed domain. Changes are
limited to the app shell, mode navigation, and focused regression coverage. The focused Vitest
suite passed 18 of 18 tests before final traceability expansion; governed publication remains
subject to the configured SFlow test handoff.

## Implemented outcome

The app now includes a Hex Converter mode in the main calculator UI. Users can enter a positive base-10 whole number, click “Convert to Hex”, and receive the uppercase hexadecimal value without a `0x` prefix. Inputs outside the supported domain—including empty values, zero, negative numbers, decimal values, and non-numeric text—render exactly `Not Supported`.

The conversion logic is implemented in the app shell so it remains directly accessible from the existing browser UI without introducing a separate service or authentication flow. It accepts arbitrarily large positive integers by using `BigInt`, then formats the output with `toString(16).toUpperCase()`.

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

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/c-hex/artifacts/specification/spec.md sha256=31d5b3ddb669c6d147b0575d0f6bc279f395c9f1865e80fdfa5e16ecf26c9baa status=captured projection=approved-summary representation-sha256=sha256:a2105c313d4a30e894e4f277bec1262ca10f59d49587040a9e688c6ce255b2cd brief-sha256=a2105c313d4a30e894e4f277bec1262ca10f59d49587040a9e688c6ce255b2cd expansion=sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `specification` generation 1
- Consumer: `implementation`
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

<!-- source=singularity/work-items/c-hex/artifacts/planning/plan.md sha256=944df95d7060bd563d21ddd27f943a94da894b4fce35ecfa9095e7fe4ddd1b35 status=captured projection=approved-summary representation-sha256=sha256:6afdb27423bddcb347fd2d9f874a9cc79be8c8427518a96418a9ab0b9d0957ba brief-sha256=6afdb27423bddcb347fd2d9f874a9cc79be8c8427518a96418a9ab0b9d0957ba expansion=sfref:v1:story:c-hex:2443870b6181c4a74c5610d70cf9b39260443282de72f4490c9fad77db6b316f -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `planning` generation 2
- Consumer: `implementation`
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

<!-- singularity-flow:inputs:end -->
