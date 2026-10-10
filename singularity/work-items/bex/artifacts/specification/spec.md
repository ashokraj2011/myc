<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bex",
  "workType": "spec-code-test-loop",
  "phase": "specification",
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
  "configSha256": "66b1e41a070f026d5a9d4caa81e319c3b4bff17e3ec0a32b92a0d4545536910a",
  "sourceSha256": "bf1f89c0a38fa6718ae0caeedce4f5bdf7cc15aebee0239a61bb2b3b38b80933",
  "template": {
    "path": "singularity/work-items/bex/config/wfa/blobs/sha256/cc407b7192e181456f1ba6e8af2ddfb81ae4329efa2dc829d2aa060cd4e66c1d",
    "sha256": "cc407b7192e181456f1ba6e8af2ddfb81ae4329efa2dc829d2aa060cd4e66c1d",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-code-test-loop/specification.md"
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

# bex — Specification

## Agent brief

<!--
Summarize approved behavior, users, exclusions, and the exact clause-to-test plan for Code and
Playwright review. Do not claim that a browser observation or a drafted test proves the behavior.
-->

## Actors

TODO: Identify who uses the feature and which actions each actor may perform.

## User scenarios

TODO: Describe the starting state, user action, visible outcome, and relevant failure and empty
states. Identify the approved browser origin and environment only when they are known; otherwise
record an open question before review.

## Requirements

Write one testable obligation per stable, fully qualified clause ID. Replace the examples with
the actual Story requirements and acceptance criteria; preserve clause IDs across amendments
unless the obligation is withdrawn and that withdrawal is explicitly reviewed.

- TODO: State an observable behavior. [bex:REQ-001]
- TODO: State an independently checkable acceptance outcome. [bex:AC-001]

## Boundary and non-functional requirements

TODO: Record limits, error handling, permissions, accessibility, privacy, and measurable
performance requirements or explain why a category is not applicable.

## Planned implementation evidence

Add exactly one row for every approved requirement and acceptance clause above. Use exact
repository-relative source and executable-test paths in backticks, not directories or globs.
If a clause truly cannot be tested, use `not-applicable:` followed by a concrete reviewer-approved
reason. Browser observations may supplement the planned executable tests, never replace them.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `bex:REQ-001` | TODO: `src/example.js` | TODO: `test/example.test.js` | new | TODO: what a person can observe when it works |
| `bex:AC-001` | TODO: `src/example.js` | TODO: `test/example.test.js` | new | TODO: what a person can observe when it works |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Evidence and assumptions

TODO: Cite the request, pinned repository and document inputs, approved browser target, test
data boundary, and any unresolved assumptions. Do not guess a requirement from an unavailable
source or silently change an approved obligation during Code or Playwright testing.

## Out of scope

TODO: Name excluded behavior and environments explicitly.
