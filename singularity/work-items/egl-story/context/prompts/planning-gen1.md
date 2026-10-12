# Active Story phase contract: Planning

- Work ID: `egl-story`
- Requested outcome: egl — implement hex operator for postive integers .ANy other will give erorr (full request: Pinned Story source below)
- Work type: `spec-driven-standard`
- Phase: `planning`
- Generation to author: 1
- Changes allowed: May edit this phase's artifacts only. Do not implement application code in this phase.
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `off`; do not ask phase clarification questions or run `clarification record`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish planning --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing package scripts just to emit its configured report.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. Account for tooling under Supporting files with a reason, or use fulfillment configuration for a requirement changing runtime settings. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Planning rows: cover every approved requirement and acceptance ID from the authoritative clause capsule; preserve its meaning. Use a bare - for an empty path cell, never `-` (which names a file).
- Evidence planning: put retained files under singularity/work-items/egl-story/evidence/ in that clause's Expected paths with Fulfillment `evidence`; do not assign screenshot obligations to another clause.
- Verification: inherit approved clause verification methods, without downgrading required proof to supporting or any-of. Use the actual `## Verification contracts` table: exact approved AC Criterion, lower-hyphen Slot, test/inspection/visual Method, primary/supporting Role; visual assurance = source-bound. Put scenario/reviewer prose outside these cells. For non-executable proof put verification: <AC-ID> in Planned tests and define its primary visual/inspection slot. not-applicable: <reason> is only a genuine exemption requiring human disposition, not a screenshot check. File presence is not a passing witness.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/egl-story`
- Required artifact: `singularity/work-items/egl-story/artifacts/planning/plan.md`
- Authored content: at least 300 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Resolve every named path inside the work-item directory or repository root. Never search the filesystem outside this repository.
- Write scope: `artifact-only`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `architecture-reviewers`
- Minimum distinct approvals: 1

## Configured artifact template

# Implementation plan — egl-story

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

TODO: Summarize the selected implementation approach, affected surfaces, proof strategy, and principal risks.

## Approach

TODO: Explain how this will be built and why this approach was selected.

## Affected surfaces

TODO: Identify the modules, contracts, data, and interfaces this touches. Expected paths are a
planning aid; the authority on what actually changed remains reconciliation `[SPK:CON-031]`.

| Surface | Change | Serves |
|---|---|---|
| `<path or module>` | <what changes> | [egl-story:REQ-001] |

## Sequencing

TODO: State the implementation order and what each step unblocks.

## Test strategy

TODO: Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `egl-story:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `egl-story`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `egl-story:REQ-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test. -->

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `package.json` — adds the ledger client. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

TODO: List the constitution article IDs this plan is bound by `[SPK:REQ-100]`.

## Risks and rollback

TODO: Describe what could go wrong, how it would be detected, and how to roll it back.

# Pinned Story source

- Immutable source: `singularity/work-items/egl-story/source.json`
- SHA-256: `346451d0e7141c5ebe3e4ed4b92bf029f65ffe35e6166e281fd407d921e56362`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. After scope approval, any active phase in any workflow can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Before scope approval, record the human change in clarification and revise/review the scope draft normally; never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "egl-story",
  "title": "egl",
  "description": "implement hex operator for postive integers .ANy other will give erorr",
  "acceptanceCriteria": "take screenshot of the screen and verify hex button"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "egl-story",
  "phase": "planning",
  "capsuleSha256": "sha256:f0eadc365a349bc3d24f19c769a56dbb8107314cb9ac9c8e303248d1040116f3",
  "sources": [{"id":"S1","path":"singularity/work-items/egl-story/artifacts/specification/spec.md","sha256":"sha256:4c7edda535ba6b268375f9701fa76578d90169e156cb1a69ee859824169682d6"}],
  "clauses": [{"id":"EGL-STORY:AC-001","source":"S1","line":345,"text":"A screenshot of the screen shall show the hex button and a successful conversion. *(S1)*","verification":{"criterionId":"EGL-STORY:AC-001","methods":["visual"]}},{"id":"EGL-STORY:REQ-001","source":"S1","line":341,"text":"For a positive integer input, the hex operation shall show its exact hexadecimal value using\nuppercase letters and no `0x` prefix. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"EGL-STORY:REQ-002","source":"S1","line":343,"text":"For empty input or any value that is not a positive integer, the operation shall show an error\ninstead of a hexadecimal result. *(S2)*","verification":{"criterionId":null,"methods":["test"]}}]
}
```

# Architect agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never search `$HOME`, a parent directory, or outside that repository. Use CLI-returned `workItemRoot` and artifact or packet paths for governed Story reads and writes; keep them within the bound `workId`.

Use injected repository views as evidence. Make boundaries, contracts, ownership, data flow, failure behavior, security, observability, migration, compatibility, and rollback explicit. Separate observed facts, assumptions, decisions, alternatives, and unresolved questions. Trace decisions to `REQ-nnn`, `AC-nnn`, and `SPEC-nnn`. Prefer existing repository patterns and never represent a proposal as implemented evidence.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, prioritize boundaries, contracts, security, and material tradeoffs. Do not publish while a material decision remains deferred.

# Repository brief: .w-68c0bfcb72ff420b6b265cd2 at 15850a61c7d9 (for design, focused on this Story)

## Contracts
- app start → App (App.jsx:14)

## Flows
- keydown → App.handleKeyDown → playSound → getAudioContext; 22 rules on the way; writes Sound (App.jsx:157)
- app start → App → evaluateExpression (and 1 helper: formatNumber); 13 rules on the way; writes Browser storage (App.jsx:14)
- onClick on <element> in Display.jsx → handleCopy → playSound → getAudioContext; 6 rules on the way; writes Sound, writes the clipboard (Display.jsx:73)
- onClick on <element> in HistoryDrawer.jsx → handleExport → playSound → getAudioContext; 6 rules on the way; writes Sound (HistoryDrawer.jsx:85)

## Rules that apply
- EGL-STORY:AC-001: A screenshot of the screen shall show the hex button and a successful conversion. *(S1)*. Documented; no code enforcing it was found. (spec.md › EGL-STORY:AC-001)
- EGL-STORY:REQ-001: For a positive integer input, the hex operation shall show its exact hexadecimal value using uppercase letters and no `0x` prefix. *(S1)*. Documented; no code enforcing it was found. (spec.md › EGL-STORY:REQ-001)
- EGL-STORY:REQ-002: For empty input or any value that is not a positive integer, the operation shall show an error instead of a hexadecimal result. *(S2)*. Documented; no code enforcing it was found. (spec.md › EGL-STORY:REQ-002)

## Risks
- playSound: complexity 10, reached by 44 entry points, called from 8 places, no test reaches it (audio.js:18)
- App.handleKeyDown: complexity 21, 17 rules, no test reaches it (App.jsx:157)
- evaluateExpression: complexity 13, reached by 1 entry point, 10 rules (evaluator.js:4)
- src/utils/evaluator.js: complexity 45, imported by 4 files
- src/App.jsx: complexity 72, imported by 2 files
- formatNumber: reached by 1 entry point, called from 2 places, 3 rules (evaluator.js:57)
- getAudioContext: reached by 44 entry points, 3 rules, no test reaches it (audio.js:5)
- App: the most complex function (complexity 51) (App.jsx:14)
- convertUnits: 5 rules, no test reaches it (evaluator.js:140)

## What exists
- .w-68c0bfcb72ff420b6b265cd2: 19 code files in javascriptreact (12 files), javascript (7 files); JSX, React, Vitest; 3 entry points, 49 rules in code, 26 tests.
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. (README.md › React + Vite)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

- … 46 more: singularity-flow wm brief --phase planning

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/egl-story/artifacts/specification/spec.md sha256=4c7edda535ba6b268375f9701fa76578d90169e156cb1a69ee859824169682d6 status=captured projection=approved-summary representation-sha256=sha256:28fa322a82d0f10f33018d7ab182fb56f8c59c0646e5b5e1a2a14a008dcfc0cf brief-sha256=25bbfbb64b1a1fbbcc5c121c10a95a211e74dde6c6fecf93d54cc4b84c271ae9 expansion=sfref:v1:story:egl-story:21a0f47d6bf4500404c6b606666ca6fbc819d4e3376040c5c5e92883092f13f3 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `egl-story`
- Producer: `specification` generation 2
- Consumer: `planning`
- Source: `singularity/work-items/egl-story/artifacts/specification/spec.md`
- Source SHA-256: `bb9bbc0bfe29d3a15fc5032dee0b3b1a2d50af4008a3a884acb14122c67ff903`

## Summary from “Agent brief”

Provide a hex conversion operation for positive integer input. The user activates the hex button to
see the integer represented in uppercase hexadecimal without a `0x` prefix. Inputs that are not
positive integers produce an error with no conversion result. The acceptance screenshot shows the
button and a successful conversion. No permission model or non-functional thresholds were requested.

## Actors

The person using the screen that provides the hex button. No additional roles or authority levels
are specified.

## User scenarios

### S1 — Convert a positive integer

**Priority:** P1
**Actor:** Screen user
**Context:** A positive integer is available as the value to convert.

- **Given** the value is a positive integer
  **When** the user activates the hex button
  **Then** the corresponding hexadecimal value is shown in uppercase, without a `0x` prefix.

### S2 — Reject an invalid value

**Priority:** P2
**Actor:** Screen user
**Context:** The value is empty or is not a positive integer.

- **Given** the value is zero, negative, fractional, empty, or otherwise not an integer
  **When** the user activates the hex button
  **Then** an error is shown and no hexadecimal result is produced.

## Failure and empty states

- **Empty:** Empty input follows S2: show an error and do not show a conversion result.
- **Failure:** Zero, negative, fractional, or otherwise non-integer input follows S2: show an error
  and do not produce a hexadecimal result.
- **Partial:** No partial result is defined for a single conversion.

## Permissions

No role-based permissions or authorization behavior are specified.

## Boundary conditions

Positive integers are valid inputs. Zero, negative values, fractions, empty input, and values that
cannot be interpreted as integers are invalid and produce an error. Hexadecimal output uses
uppercase A-F and has no `0x` prefix. The Story specifies no upper bound; conversion must preserve
the integer value exactly rather than silently rounding it.

## Requirements

> Exact clauses in Active Clause Capsule: EGL-STORY:REQ-001, EGL-STORY:REQ-002, EGL-STORY:AC-001.

## Non-functional requirements

No non-functional requirements were specified in the pinned Story or its clarification.

## Assumptions

The screen user can provide the integer value to the hex operation. Input entry mechanics and error
copy are not defined by the Story.

## Out of scope

Changes to other operations, role-based access, non-functional thresholds, and a particular error
message or styling are outside this Story.

> Exact source expansion: `sfref:v1:story:egl-story:21a0f47d6bf4500404c6b606666ca6fbc819d4e3376040c5c5e92883092f13f3`. Use `singularity-flow show sfref:v1:story:egl-story:21a0f47d6bf4500404c6b606666ca6fbc819d4e3376040c5c5e92883092f13f3 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:a687edf612523e26aa4dd0a0a984251986ab3263844326da41bbcba7a36a4aa8. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

```json
{"current":{"status":"not-needed","sourceTreeSha256":null,"testInputSha256":null},"entries":[{"phase":"specification","generation":2,"phaseStatus":"approved","packetSha256":"6bc9104577d48f426b72b0a8920a820d9ba24e61c2efd62c903757896713228c","evidenceCommit":"9f61fed87659f06f9865bf3764fd466c98607ee2","sourceCommit":"10e4ddd59da7b8ac996b2f9e6f120c13d671fe5c","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/egl-story/submissions/specification/6bc9104577d48f426b72b0a8920a820d9ba24e61c2efd62c903757896713228c.json","executions":[],"omittedExecutions":0}],"diagnostics":[],"omittedPackets":0}
```

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id egl-story --phase planning --json; VS Code: not available for this action
- Copilot: /sf-phase-documents planning; Shell: singularity-flow phase show planning --json; VS Code: not available for this action

# Final clarification guard

The pinned clarification mode for `planning` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
