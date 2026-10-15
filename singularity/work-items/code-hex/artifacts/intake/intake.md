<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "code-hex",
  "workType": "quick-fix",
  "phase": "intake",
  "generation": 0,
  "status": "in_progress",
  "generatedBy": null,
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "legacy-unspecified",
    "channel": "legacy",
    "governedAgentContext": null,
    "kernelModel": {
      "invoked": false,
      "status": "unavailable",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "source": null
  },
  "sourceCommit": null,
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "cb6a60069ea9e278ebc92437dfebb6d6ab77375482b08bf317e5221b4e5999fc",
  "sourceSha256": "8d223bf12698a163db5229972c479e3cef7547547d270ccfb90c15819a2e65be",
  "template": {
    "path": "singularity/work-items/code-hex/config/wfa/blobs/sha256/a1dae2da960302a152df2c87c90673222a9a8a671752ef38d13fe75e94598950",
    "sha256": "a1dae2da960302a152df2c87c90673222a9a8a671752ef38d13fe75e94598950",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/quick-fix/intake.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# code-hex — Quick fix scope and plan

This short checkpoint states what the fix must do and where it lands before any code changes.
One reviewer signs it off; Implement then has to meet exactly these claims.

## Problem and fix

TODO: Describe the defect or small change and the intended fix in one or two sentences.

## Acceptance criteria

Give every outcome a stable, fully qualified ID. Replace the example; do not approve this draft
while placeholders remain.

| Clause | Observable outcome |
|---|---|
| [code-hex:AC-001] | TODO: State one observable, testable outcome of the fix. |

## Planned implementation evidence

One row for each clause above, with exact repository-relative source and executable-test paths
in backticks. If a clause truly cannot be tested, write `not-applicable:` and a specific reason.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `code-hex:AC-001` | TODO: `src/example.js` | TODO: `test/example.test.js` | new | TODO: what a person can observe when it works |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Out of scope

TODO: State what this fix deliberately leaves unchanged.
