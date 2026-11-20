<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "fix-issues",
  "workType": "quick-fix",
  "phase": "intake",
  "generation": 1,
  "status": "approved",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "product-owner",
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
      "agentId": "product-owner"
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
      "filename": "intake.md",
      "mediaType": "text/markdown",
      "sha256": "5d37817c2226a623859ceb2123f0308a6198e47c01016c5272a574143115db9d",
      "bytes": 3391
    },
    "generation": 1,
    "publishedAt": "2026-11-20T14:36:23.977Z"
  },
  "sourceCommit": "5a98e5f353dcee318603555caaf7196853c5267f",
  "generationCommit": "e3e6b833af9c8ff9cff5fd96168a2beb55599433",
  "publicationCommit": "e3e6b833af9c8ff9cff5fd96168a2beb55599433",
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
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/fix-issues/telemetry/intake-gen1.json",
      "sha256": "ce760087e8551d4b729e45699ba2b21b6010a3692c56f44346f8a96928197b2b",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 24865,
        "estimatedTokens": 6217,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 24865,
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
      "startedAt": "2026-11-20T14:36:23.977Z",
      "completedAt": "2026-11-20T14:36:23.977Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "intake",
      "at": "2026-11-20T14:48:58.386Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011",
        "githubLookup": "resolved"
      },
      "agent": "product-owner",
      "authorityGroup": "engineering-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "confirmedBy": "approval-page",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/fix-issues/artifacts/intake/intake.md",
          "sha256": "44fa4d1276336d6ee489de6b1d8403afb4cf9d33f59b54438a3b9a28cb965bbe"
        }
      ],
      "reviewPacketSha256": "753f648c5bbd7a2bf756ba3b4bfc8a7cd095fae625757bc709dd40f92e1425db",
      "evidenceCommit": "315b551cdeb3072af89b09e86e03caa0c76ba62c",
      "artifactSetSha256": "2b66f2909fc0c974d77ead2fa03fb55deec5a64a92482147888f7bb996c08188",
      "architectureIntent": null,
      "architectureDecision": null,
      "actionContext": {
        "phase": "intake",
        "label": "Scope and plan",
        "generation": 1,
        "submittedAt": "2026-11-20T14:37:53.035Z",
        "artifacts": [
          {
            "path": "singularity/work-items/fix-issues/artifacts/intake/intake.md",
            "sha256": "44fa4d1276336d6ee489de6b1d8403afb4cf9d33f59b54438a3b9a28cb965bbe"
          }
        ],
        "agentBriefs": [],
        "reviewPacketSha256": "753f648c5bbd7a2bf756ba3b4bfc8a7cd095fae625757bc709dd40f92e1425db",
        "submittedSourceCommit": "e3e6b833af9c8ff9cff5fd96168a2beb55599433",
        "planId": "822d75829646222b19cf8297"
      },
      "upstream": {
        "sha256": "sha256:ee48d66aea4f64f7990c9b247ac321b78f739eba554ee157fce348d4bc787df6",
        "refs": [
          {
            "kind": "documents",
            "ref": "intake",
            "sha256": "sha256:37517e5f3dc66819f61f5a7bb8ace1921282415f10551d2defa5c3eb0985b570"
          },
          {
            "kind": "decisions",
            "ref": "story",
            "sha256": "sha256:ebade4dba52a070bc4615535bc642737abe7d357fbe4a032fce8056876cf63f6"
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

# fix-issues — Quick fix scope and plan

## Problem and fix

The graph is not visible for valid input, and interactions with the grapher can change the page dimensions. Keep valid graphs visible and make the page layout stable while typing in the graph input or clicking its controls.

- [FIX-ISSUES:REQ-001] For a valid graph input, the grapher displays the graph visibly in its canvas. [scope:SRI-0fc90e438f5c]
- [FIX-ISSUES:REQ-002] With the grapher open, typing in its input or clicking its controls does not change the page dimensions. [scope:SRI-0fc90e438f5c]

## Acceptance criteria

| Clause | Observable outcome |
|---|---|
| [FIX-ISSUES:AC-001] | When a valid graph input is entered in Grapher, a plotted graph is visible in the canvas, satisfying `FIX-ISSUES:REQ-001`. |
| [FIX-ISSUES:AC-002] | With Grapher open at a fixed viewport, typing a valid equation and clicking its controls leaves the page's rendered width and height unchanged from their initial values, satisfying `FIX-ISSUES:REQ-002`. |

## Planned implementation evidence

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `FIX-ISSUES:REQ-001` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | A valid equation produces visible plotted pixels in the grapher canvas. |
| `FIX-ISSUES:AC-001` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | Browser verification finds the plotted graph visible after valid input is entered. |
| `FIX-ISSUES:REQ-002` | `src/components/FunctionGrapher.jsx`, `src/App.jsx`, `src/index.css` | `tests/graph-plotter.spec.js` | modified | Page dimensions remain stable during grapher input and control interactions. |
| `FIX-ISSUES:AC-002` | `src/components/FunctionGrapher.jsx`, `src/App.jsx`, `src/index.css` | `tests/graph-plotter.spec.js` | modified | Browser verification measures the page's rendered width and height before and after typing and clicking grapher controls and observes no change. |

## Out of scope

Do not add graph syntax, graph controls, or behavior beyond rendering valid input and keeping the page dimensions stable; do not change other calculator modes or their calculations.

## Constitution articles

None: this Story pinned no constitution.
