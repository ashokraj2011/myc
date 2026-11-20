<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "fix-issues",
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
  "configSha256": "cc57a16d7959c8cca63ecb452a5d714891daa623ce4c0a607f1854bfc3883b55",
  "sourceSha256": "c4a11d95a263a0faa3e006094d623678a8fc1aebe051b0cfda90bcfce7944f80",
  "template": {
    "path": "singularity/work-items/fix-issues/config/wfa/blobs/sha256/5fc0dfa8dbd78cb24656d72962d5e67bd13d6d407b550d7dba28b5bd85cf8493",
    "sha256": "5fc0dfa8dbd78cb24656d72962d5e67bd13d6d407b550d7dba28b5bd85cf8493",
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

# fix-issues — Quick fix scope and plan

<!-- sflow:guidance This short checkpoint states what the fix must do and where it lands before any code changes. One reviewer signs it off; Implement then has to meet exactly these claims. -->

## Problem and fix

TODO: Describe the defect or small change and the intended fix in one or two sentences.

## Acceptance criteria

<!-- sflow:guidance Give every outcome a stable, fully qualified ID. Replace the example; do not approve this draft while placeholders remain. -->

| Clause | Observable outcome |
|---|---|
| [FIX-ISSUES:AC-001] | TODO: State one observable, testable outcome of the fix. |

## Planned implementation evidence

<!-- sflow:guidance One row for each clause above, with exact repository-relative source and executable-test paths in backticks. If a clause truly cannot be tested, write `not-applicable:` and a specific reason. -->

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `FIX-ISSUES:AC-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

<!-- sflow:guidance Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Out of scope

TODO: State what this fix deliberately leaves unchanged.
