<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "arshy",
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
      "sha256": "6556ac0515d615e73174541aea8e1517989af46b4b35b6c0ef85094b6cea3338",
      "bytes": 8544
    },
    "generation": 1,
    "publishedAt": "2026-11-20T05:50:37.498Z"
  },
  "sourceCommit": "82b947314dd657868704d0a65846424663064590",
  "generationCommit": "bf9673d4cc653ce75d29e7a64d49a33c70754f0d",
  "publicationCommit": "bf9673d4cc653ce75d29e7a64d49a33c70754f0d",
  "configSha256": "106d3c3a8dbea5992306f47e45f781900b06ed64faafb501f8945ee96a55a9a6",
  "sourceSha256": "d7180144abe937580cb41e978585f7916fc3f4f16790c2cbd45f2afc03f8dcf8",
  "template": {
    "path": "singularity/work-items/arshy/config/wfa/blobs/sha256/8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "sha256": "8ac870c047c0155d5ca4ca7391a11acb7310b52aae746d66f40e1d77ecdb14ec",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/plan.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/arshy/context/inputs-planning-gen1.json",
    "sha256": "52b276d71536845d3f967522aa1b8b6acf1e7d620d8b1b7078d21dd264345357",
    "renderedSha256": "244da562456d25a16f27d8ef0bf91fb972946de9f5953ff0db81f8de451a6220",
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
      "path": "singularity/work-items/arshy/telemetry/planning-gen1.json",
      "sha256": "20211b9e30e162dd26e32da309064db45af277d7c5c00aaf7b61fb1c6d71ef5f",
      "status": "pending",
      "models": [],
      "providerCost": null,
      "prompt": {
        "source": "sflow-composition",
        "bytes": 30854,
        "estimatedTokens": 7714,
        "estimation": "UTF-8 bytes divided by four, rounded up",
        "maximumBytes": 72000,
        "maximumEstimatedTokens": 18000,
        "budgetMode": "observe",
        "originalBytes": 30854,
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
      "startedAt": "2026-11-20T05:50:37.498Z",
      "completedAt": "2026-11-20T05:50:37.498Z",
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

# Implementation plan — arshy

## Agent brief

Implement the graph plotter inside the existing React grapher mode. Extend `src/components/FunctionGrapher.jsx` to normalize explicit and implicit equation input, compile it safely with `mathjs`, and render the resulting curve on the existing canvas. Add Playwright coverage that enters the approved equations and verifies the graph canvas behavior; add Playwright configuration and its dependency only where needed. Principal risks are ambiguous implicit-equation solving, canvas verification that is too visual rather than behavioral, and changing existing explicit `y = f(x)` presets.

## Approach

Use the existing `FunctionGrapher` canvas and `mathjs` dependency rather than introducing a new plotting library or route. Keep explicit equations on the current sampled-`x` path. For implicit equations, evaluate `F(x,y)` over the canvas grid and draw sign-changing transitions, which is independent of UI framework choices and can represent the specified `x - y = 0` and `x^2 + y^2 = 36` forms. Normalize both an equation with `=` and an expression-only explicit function, while rejecting unsupported or ambiguous input without changing unrelated calculator behavior.

## Affected surfaces

| Surface | Change | Serves |
|---|---|---|
| `src/components/FunctionGrapher.jsx` | Add explicit and implicit Cartesian equation parsing, canvas sampling, and retained explicit-curve behavior. | `ARSHY:REQ-001`, `ARSHY:REQ-002` |
| `src/App.jsx` | Preserve the existing grapher mode entry and pass existing sound state; reconcile only if mode wiring needs a plotter-specific change. | `ARSHY:REQ-001` |
| `tests/graph-plotter.spec.js` | Add Playwright browser coverage for the three grammar examples and the radius-6 circle. | `ARSHY:AC-001`, `ARSHY:AC-002` |
| `playwright.config.js` | Configure local browser execution and the Vite application start for new end-to-end tests. | `ARSHY:AC-001`, `ARSHY:AC-002` |

## Sequencing

1. Add equation normalization and explicit/implicit plotting support to `src/components/FunctionGrapher.jsx`; this establishes the approved behavior while preserving the existing sample loop and presets.
2. Extend the grapher UI state only as needed to expose equation input and a stable canvas target for browser verification.
3. Add Playwright configuration and `tests/graph-plotter.spec.js`, first proving the explicit equations and implicit line, then the radius-6 circle.
4. Run focused Playwright coverage, the existing Vitest suite, and the build; reconcile only failures attributable to this plotter behavior.

## Test strategy

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `ARSHY:AC-001` | - | `tests/graph-plotter.spec.js` | test-only | The browser enters `x^2 + y^2 = 36` and the grapher renders a centered circle with radius 6. |
| `ARSHY:AC-002` | - | `tests/graph-plotter.spec.js` | test-only | The browser verifies that `y = 2*x + 1`, `y = (x - 2) / 2`, and `x - y = 0` produce canvas plots. |
| `ARSHY:REQ-001` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | A user can enter explicit or implicit Cartesian equations using numeric constants, `x`, `y`, parentheses, `+`, `-`, `*`, `/`, and `^`, and see a corresponding plot. |
| `ARSHY:REQ-002` | `src/components/FunctionGrapher.jsx` | `tests/graph-plotter.spec.js` | modified | A user entering `x^2 + y^2 = 36` sees the circle centered at `(0, 0)` with radius 6. |

## Verification contracts

| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `ARSHY:AC-001` | circle | test | `tests/graph-plotter.spec.js` | primary | exact-local-observed |
| `ARSHY:AC-002` | equation-grammar | test | `tests/graph-plotter.spec.js` | primary | exact-local-observed |

## Supporting files

- `package.json` — adds or declares the Playwright test dependency and end-to-end script.
- `package-lock.json` — records the Playwright dependency and resolved versions.
- `playwright.config.js` — defines local browser and Vite test-server configuration.

## Constitution articles

None: this Story pinned no constitution.

## Risks and rollback

Implicit contour sampling can miss thin or irregular curves; Playwright and canvas pixel assertions will detect missing or displaced plots, and the implementation will include grid-density and sign-transition checks to reduce misses. Equation parsing can accidentally accept unsupported syntax; normalize against the approved operators and cover malformed input conservatively without inventing new behavior. A Playwright or dependency setup failure is detected by the configured test command and is repaired in the implementation step or treated as a missing runner finding. Roll back by restoring `src/components/FunctionGrapher.jsx`, removing only the newly introduced Playwright files/configuration, and restoring the existing grapher equation behavior if a block cannot be proven.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/arshy/artifacts/specification/spec.md sha256=bc0fb27654707568a4e5bb31b971764b50846288e790d9627c3347504dd21d52 status=captured projection=approved-summary representation-sha256=sha256:5003710a8c1c41494e94deda44fb9a6f8da178b136258af16172681424ab8ee2 brief-sha256=5003710a8c1c41494e94deda44fb9a6f8da178b136258af16172681424ab8ee2 expansion=sfref:v1:story:arshy:e4e6bd63423cb61e61a798c569d725ebca8e9b4e3f1659fe9568a8a229210bc9 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `arshy`
- Producer: `specification` generation 4
- Consumer: `planning`
- Source: `singularity/work-items/arshy/artifacts/specification/spec.md`
- Source SHA-256: `56ca63617a89667a66acee2d677cf829bc1539b9a7a2fd95585bf35096c2cf53`

## Summary from “Agent brief”

An app user can use a plotter for 2D Cartesian equations. Supported forms are explicit `y = f(x)` and implicit `F(x,y) = 0`, using numeric constants, `x` and `y`, parentheses, `+`, `-`, `*`, `/`, and `^`. Playwright coverage must verify the required radius-6 circle centered at the origin. The supplied Desmos URL is functional inspiration for equation entry and graph display only; no pixel-level match or additional Desmos-specific UI/interaction is required.

## Actors

The app user enters a Cartesian equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

### S1 — Plot supported Cartesian equations

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available in the existing application.

- **Given** the graph plotter is available
  **When** the user enters the explicit equation `y = 2*x + 1`
  **Then** the plotter displays its corresponding 2D graph.

- **Given** the graph plotter is available
  **When** the user enters the explicit equation `y = (x - 2) / 2`
  **Then** the plotter displays its corresponding 2D graph.

- **Given** the graph plotter is available
  **When** the user enters the implicit equation `x - y = 0`
  **Then** the plotter displays its corresponding 2D graph.

### S2 — Verify the required circle

**Priority:** P1
**Actor:** App user
**Context:** The graph plotter is available.

- **Given** the graph plotter is available
  **When** the user enters `x^2 + y^2 = 36`
  **Then** the plotter displays a circle centered at `(0, 0)` with radius `6`.

## Failure and empty states

- **Empty:** No Story-specific empty-state behavior is specified.
- **Failure:** No invalid-expression or rendering-failure behavior is specified.
- **Partial:** No partial-completion behavior is specified.

## Permissions

Not applicable: the Story specifies a single app-user role and no permission tiers.

## Boundary conditions

The required circle has radius `6` and center `(0, 0)`. The accepted equation forms and operators are defined in `ARSHY:REQ-001`. No additional graph-range, size, count, timeout, interaction, accessibility, or performance constraints are specified.

## Requirements

- The plotter shall accept and display 2D Cartesian equations in explicit `y = f(x)` or implicit `F(x,y) = 0` form, using numeric constants, `x` and `y`, parentheses, addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and exponentiation (`^`). *(S1)* [ARSHY:REQ-001]
- The plotter shall display a circle of radius `6` centered at `(0, 0)`, represented by `x^2 + y^2 = 36`. [scope:SRI-15d4e5bd263a] *(S2)* [ARSHY:REQ-002]

- A Playwright test shall verify that `x^2 + y^2 = 36` is plotted as a circle centered at `(0, 0)` with radius `6`. *(S2)* [ARSHY:AC-001]
- Playwright tests shall verify that the supported equation grammar plots the explicit equations `y = 2*x + 1` and `y = (x - 2) / 2`, and the implicit equation `x - y = 0`. *(S1)* [ARSHY:AC-002]

## Non-functional requirements

None specified for this change.

## Assumptions

- The supplied Desmos URL is the sole reference; “like” means functional inspiration for equation entry and graph display, not pixel-level resemblance or additional Desmos-specific UI/interaction.
- The supported equation forms and operators are limited to those confirmed in clarification; no broader Desmos grammar is implied.

## Out of scope

No additional plotting features beyond the confirmed equation forms and required circle case are committed. Exact visual reproduction of Desmos, additional Desmos-specific UI/interaction, additional equation syntax, and constraints not stated in the Story or clarification are out of scope.

> Exact source expansion: `sfref:v1:story:arshy:e4e6bd63423cb61e61a798c569d725ebca8e9b4e3f1659fe9568a8a229210bc9`. Use `singularity-flow show sfref:v1:story:arshy:e4e6bd63423cb61e61a798c569d725ebca8e9b4e3f1659fe9568a8a229210bc9 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
