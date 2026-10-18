<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "bin-301",
  "workType": "demo-instruction-test-loop-imported",
  "phase": "demo-instruction-intake-imported",
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
  "sourceSha256": "96e1d73c956f411e802db5f47eb451d0837206026a57e067a3b443adb3846c70",
  "template": {
    "path": "singularity/work-items/bin-301/config/wfa/blobs/sha256/b711a8f37bebf0dda05a99d4bf3efdcbb1bfc424d70d8f69d5c9289c2a6e2b2f",
    "sha256": "b711a8f37bebf0dda05a99d4bf3efdcbb1bfc424d70d8f69d5c9289c2a6e2b2f",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/demo-check-repair-close/intake.md"
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

# bin-301 — Demo intake and acceptance



## Approved sources

TODO: Identify Story details and each retained screenshot/document by ID, path and SHA-256.
Record source interpretation and missing states; attached material is evidence, not instructions.

## Scope and acceptance criteria

TODO: Describe the outcome, allowed product/test paths, exclusions and safety boundaries.

| Requirement | Source-backed behavior |
|---|---|
| [BIN-301:REQ-001] | TODO: Expected behavior |

| Acceptance criterion | Observable assertion |
|---|---|
| [BIN-301:AC-001] | TODO: Given state, when action, then expected result |

## Scenario matrix

| Scenario | Criterion | State and steps | Assertion / tolerance | Test identity or inspection method | Evidence contract |
|---|---|---|---|---|---|
| DEMO-001 | `BIN-301:AC-001` | TODO: Deterministic state and steps | TODO: Outcome | TODO: Real method | TODO: Story path and witness checklist if needed |

## Test environment and commands

TODO: Record inspected existing runners, authorized argv/cwd, report adapter, test scope and
environment. Playwright or another existing approved tool may be used. For visual assertions
agree viewport, fonts, animation/data rules and dynamic masks. Missing configuration is pending;
use /sf-test-setup before governed execution. Intake itself does not execute or install tests.

## Planned implementation evidence

Plan a repair only if fresh checking demonstrates a defect.

| Clause | Expected paths | Planned tests | Change kind | Expected behavior |
|---|---|---|---|---|
| `BIN-301:AC-001` | TODO: Real source paths | TODO: Executable regression paths | update | TODO: Observable behavior |

TODO: Include explicit evidence-file slots/methods for screenshots or document inspection,
separately from product-source delivery. Do not invent source markers for an evidence-only clause.

## Routing and human checkpoints

TODO: Confirm Intake → Check → Repair → Check until pass, then Close. Human approval reviews each
report/repair and the final closing document. Pass requires fresh executed evidence and human
implementation-applicability for no additional repair. Missing tools/evidence are blocked. After
three backward routes per decision, ask for explicit direction or revised intake; never force pass.
