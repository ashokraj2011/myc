<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "claude-story",
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
  "configSha256": "cefab2b320917902d3a5d87f8fb41c6ca3fa661958e79fec9ecf93e28f239314",
  "sourceSha256": "41650f8b12da1ef4cc5f896dfccf470d47bea221b63ef5ecf1ad5ee8dde6d1da",
  "template": {
    "path": "singularity/work-items/claude-story/config/wfa/blobs/sha256/a1dae2da960302a152df2c87c90673222a9a8a671752ef38d13fe75e94598950",
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

# claude-story — Quick fix scope and plan

This short checkpoint states what the fix must do and where it lands before any code changes.
One reviewer signs it off; Implement then has to meet exactly these claims.

## Problem and fix

TODO: Describe the defect or small change and the intended fix in one or two sentences.

## Acceptance criteria

Give every outcome a stable, fully qualified ID. Replace the example; do not approve this draft
while placeholders remain.

| Clause | Observable outcome |
|---|---|
| [CLAUDE-STORY:AC-001] | TODO: State one observable, testable outcome of the fix. |

## Planned implementation evidence

One row for each clause above, with exact repository-relative source and executable-test paths
in backticks. If a clause truly cannot be tested, write `not-applicable:` and a specific reason.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `CLAUDE-STORY:AC-001` | TODO: `src/example.js` | TODO: `test/example.test.js` | new | TODO: what a person can observe when it works |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Out of scope

TODO: State what this fix deliberately leaves unchanged.
