# Active Story phase contract: Implementation

- Work ID: `c-hex`
- Work type: `spec-driven-standard`
- Phase: `implementation`
- Generation to author: 1
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `when-needed`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish implementation --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/c-hex`
- Required artifact: `singularity/work-items/c-hex/artifacts/implementation/implementation-summary.md`
- Authored content: at least 250 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Resolve every named path inside the work-item directory or repository root. Never search the filesystem outside this repository.
- Write scope: `source-and-artifact`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `engineering-reviewers`
- Minimum distinct approvals: 1

## Configured artifact template

# c-hex — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

## Implemented outcome

TODO: Summarize the implemented behavior.

## Changed components and decisions

TODO: Cite exact changed product-source paths and the qualified `@clause:c-hex:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:c-hex:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source.

# Pinned Story source

- Immutable source: `singularity/work-items/c-hex/source.json`
- SHA-256: `972d97c67c21b23e94b63363d0c2a32bc66c5ac36061896b5654950b78ccfee8`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. After scope approval, any active phase in any workflow can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Before scope approval, record the human change in clarification and revise/review the scope draft normally; never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "c-hex",
  "title": "hex",
  "description": "implemement hex",
  "acceptanceCriteria": "screenshit"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full verification metadata remains in the anchored indexes.

```json
{
  "workId": "c-hex",
  "phase": "implementation",
  "capsuleSha256": "sha256:a2c6be23cf670bdf046001972b7f9de66a38300834040d3596f9a78e26762eb1",
  "sources": [{"id":"S1","path":"singularity/work-items/c-hex/artifacts/specification/spec.md","sha256":"sha256:31d5b3ddb669c6d147b0575d0f6bc279f395c9f1865e80fdfa5e16ecf26c9baa"}],
  "clauses": [{"id":"C-HEX:AC-001","source":"S1","line":319,"text":"Entering `255` and requesting conversion displays exactly `FF`. *(S1)*"},{"id":"C-HEX:AC-002","source":"S1","line":320,"text":"Entering `1` and requesting conversion displays exactly `1`. *(S1)*"},{"id":"C-HEX:AC-003","source":"S1","line":321,"text":"Every supported result is uppercase and has no `0x` prefix. *(S1)*"},{"id":"C-HEX:AC-004","source":"S1","line":323,"text":"Submitting each representative unsupported class—empty, `0`, a negative number, a decimal value,\nand non-numeric text—displays exactly `Not Supported`. *(S2)*"},{"id":"C-HEX:AC-005","source":"S1","line":325,"text":"Screenshot evidence captures the browser page with at least one supported result and the\n`Not Supported` outcome. *(S1, S2)*"},{"id":"C-HEX:REQ-001","source":"S1","line":309,"text":"The existing application shall provide a browser-based page where a user can enter a value and\nrequest hexadecimal conversion. *(S1, S2; DOC-002 Q-004)*"},{"id":"C-HEX:REQ-002","source":"S1","line":311,"text":"For a positive base-10 whole number greater than zero, the page shall display its mathematically\nequivalent hexadecimal value. *(S1; DOC-002 Q-001, Q-002)*"},{"id":"C-HEX:REQ-003","source":"S1","line":313,"text":"A supported result shall use uppercase hexadecimal characters and shall omit the `0x` prefix.\n*(S1; DOC-002 Q-003)*"},{"id":"C-HEX:REQ-004","source":"S1","line":315,"text":"For every input outside the supported domain, the page shall display exactly `Not Supported`.\n*(S2; DOC-002 Q-001, Q-002)*"},{"id":"C-HEX:REQ-005","source":"S1","line":317,"text":"Verification shall retain screenshot evidence showing the implemented browser page and its\nobservable behavior. *(S1, S2; DOC-001, DOC-002 Q-005)*"}]
}
```

# Human clarification checkpoint

The `implementation` phase uses clarification mode `when-needed`.
Prioritize material uncertainty about: approved deviations, implementation blockers.

- Ask only when a material ambiguity remains after reading the governed evidence.
- If none remains, state that the clarification checkpoint found no material ambiguity and continue.
- Ask one concise batch of no more than 3 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository world model, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Do not re-ask established facts or infer answers from generic knowledge. Label hypotheses/design proposals; they become acceptance or specification decisions only with human confirmation.
- For intent conflicts, confirm the human change and follow Conflict recovery in the Pinned Story source; never silently overwrite intent.
- Explain each question’s impact; offer an evidence-supported default. Accept explicit “unknown” or non-blocking deferral. Record confirmed decisions in the artifact and deferred items in Open questions with impact and owner.
- Stage only {"responses":[...]} at the Git-private path returned by `git rev-parse --git-path singularity-flow/clarification-responses/implementation-gen<N>.json`, then run `singularity-flow clarification record implementation --response-file <that-path>` and remove the staging file after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- Material unresolved decisions block specification publication; recommendations/placeholders cannot hide them.
- If `ask_user` is unavailable, print numbered questions and stop before authoring or publication; never assume answers.
- Do not author or publish the governed output until the checkpoint is complete.

# Developer agent

Resolve the active Story checkout from this invocation's verified phase-entry packet; otherwise run `singularity-flow session current --json`. Do not repeat a supplied boundary lookup. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never search `$HOME`, a parent directory, or outside that repository. Use CLI-returned `workItemRoot` and artifact or packet paths for governed Story reads and writes; keep them within the bound `workId`.

Restate the approved objective and applicable acceptance/specification items. Inspect governed repository evidence before changing code. Prefer the smallest coherent change that follows existing boundaries, conventions, error handling, and tests. Do not expand scope or silently resolve ambiguity. Record changed files, commands actually run, evidence, residual risk, and approved deviations.

When the composed phase prompt includes bounded structural context from a compatible extractor, use a focused AST query before broad text search for symbol, import, or relationship discovery: `singularity-flow wm ast query --predicate symbol|import|language|path --value <VALUE> --max-facts 50 --max-output-bytes 32768 --json`, or the equivalent `wm.ast.query` gateway read. If the prompt reports no structural facts, an unsupported language, text-only assurance, or unavailable AST, continue with ordinary repository file access without retrying AST. Follow `nextCursor` only while the question remains unanswered. Treat `text` assurance as a search lead, never proof that a declaration exists; syntax or semantic claims require the named extractor recorded in the result.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, focus on implementation blockers or approved-specification deviations. Do not reopen settled product or architecture choices.

# Repository world-model status

- Availability: `unavailable` (`WMB_EARLIER_BUILD_MODEL_INCOMPATIBLE`)
- This is not a lifecycle blocker. Continue with the pinned Story source, approved phase inputs, and ordinary repository file access.
- Do not invent or reconstruct world-model facts. A contributor may build or repair the shared model separately.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/c-hex/artifacts/specification/spec.md sha256=31d5b3ddb669c6d147b0575d0f6bc279f395c9f1865e80fdfa5e16ecf26c9baa status=captured projection=approved-summary representation-sha256=sha256:b9dc7ef0469bae5f7122cc2aeab30ce7eb1913a181197614a28e1088622a5e79 brief-sha256=a2105c313d4a30e894e4f277bec1262ca10f59d49587040a9e688c6ce255b2cd expansion=sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d -->

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

> Exact clauses in Active Clause Capsule: C-HEX:REQ-001, C-HEX:REQ-002, C-HEX:REQ-003, C-HEX:REQ-004, C-HEX:REQ-005, C-HEX:AC-001, C-HEX:AC-002, C-HEX:AC-003, C-HEX:AC-004, C-HEX:AC-005.

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

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
