# Active Story phase contract: Planning

- Work ID: `check-out-test`
- Requested outcome: checkout — hex operator (full request: Pinned Story source below)
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
- Upstream discrepancies: approved earlier-phase artifacts are fixed evidence. If one is wrong, incomplete or contradicts another input or the pinned source, do not edit it and do not stop: continue on the most conservative reading consistent with the pinned source, and list each item under `## Upstream discrepancies` (producer phase, exact clause or section, problem, assumption used, impact, proposed owner action), then file them once with `singularity-flow upstream-issue raise --from-artifact`; the producer's approvers decide them. Stop only for a refusal about changed or unapproved input bytes (use its restore or return route), or when no reading satisfies the pinned source.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. Account for tooling under Supporting files with a reason, or use fulfillment configuration for a requirement changing runtime settings. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Planning rows: cover every approved requirement and acceptance ID from the authoritative clause capsule; preserve its meaning. Use a bare - for an empty path cell, never `-` (which names a file).
- Evidence planning: put retained files under singularity/work-items/check-out-test/evidence/ in that clause's Expected paths with Fulfillment `evidence`; do not assign screenshot obligations to another clause.
- Verification: inherit approved clause verification methods, without downgrading required proof to supporting or any-of. Use the actual `## Verification contracts` table: exact approved AC Criterion, lower-hyphen Slot, test/inspection/visual Method, primary/supporting Role; visual assurance = source-bound. Put scenario/reviewer prose outside these cells. For non-executable proof put verification: <AC-ID> in Planned tests and define its primary visual/inspection slot. not-applicable: <reason> is only a genuine exemption requiring human disposition, not a screenshot check. File presence is not a passing witness.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/check-out-test`
- Required artifact: `singularity/work-items/check-out-test/artifacts/planning/plan.md`
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

# Implementation plan — check-out-test

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
| `<path or module>` | <what changes> | [check-out-test:REQ-001] |

## Sequencing

TODO: State the implementation order and what each step unblocks.

## Test strategy

TODO: Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `check-out-test:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `check-out-test`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `check-out-test:REQ-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

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

- Immutable source: `singularity/work-items/check-out-test/source.json`
- SHA-256: `9b90f6aac83a988a04beee0d0c375520608bd50bed5f41bb40a347fe1823ec4c`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. After scope approval, any active phase in any workflow can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Before scope approval, record the human change in clarification and revise/review the scope draft normally; never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "check-out-test",
  "title": "checkout",
  "description": "hex operator",
  "acceptanceCriteria": "screenshot"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "check-out-test",
  "phase": "planning",
  "capsuleSha256": "sha256:0c6b7428117aabeee45ad93b1ebd07a6fc7145c5d490de09849108ea6478fee8",
  "sources": [{"id":"S1","path":"singularity/work-items/check-out-test/artifacts/specification/spec.md","sha256":"sha256:22b843d3331d9445b3686e0c39100d03531a95a9357b5d0515fad781dc490f8e"}],
  "clauses": [{"id":"CHECK-OUT-TEST:AC-001","source":"S1","line":371,"text":"Evaluating `200 + 55` and activating conversion displays `0xFF` while the expression remains `200 + 55`; evaluating a result of `0` and converting displays `0x0`. *(S1)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-001","methods":["test"]}},{"id":"CHECK-OUT-TEST:AC-002","source":"S1","line":372,"text":"An evaluated result of `-255` converts to `-0xFF`, and activating conversion again restores `-255` without changing the expression. *(S2)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-002","methods":["test"]}},{"id":"CHECK-OUT-TEST:AC-003","source":"S1","line":373,"text":"Before evaluation and after fractional, invalid, error, or non-finite results, the control is unavailable and activation cannot alter the result or expression. *(S3)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-003","methods":["test"]}},{"id":"CHECK-OUT-TEST:AC-004","source":"S1","line":374,"text":"A screenshot of the standard calculator in its default theme shows the conversion control visible and an uppercase, `0x`-prefixed hexadecimal result in the result display. *(S4)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-004","methods":["visual"]}},{"id":"CHECK-OUT-TEST:REQ-001","source":"S1","line":365,"text":"The standard calculator shall present a hexadecimal conversion control to the calculator user. *(S1, S3, S4)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-004","methods":["visual"]}},{"id":"CHECK-OUT-TEST:REQ-002","source":"S1","line":366,"text":"The conversion control shall be available only when the most recently evaluated result is a finite signed whole number; it shall be unavailable before evaluation and for fractional, invalid, error, or non-finite results. *(S1, S2, S3)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"CHECK-OUT-TEST:REQ-003","source":"S1","line":367,"text":"Activating the available control while a decimal result is displayed shall replace only the displayed result with its uppercase hexadecimal representation using a `0x` prefix and, for negative values, a leading sign before the prefix. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"CHECK-OUT-TEST:REQ-004","source":"S1","line":368,"text":"Activating the available control while a hexadecimal result is displayed shall restore that evaluated result's decimal representation without changing the expression. *(S2)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"CHECK-OUT-TEST:REQ-005","source":"S1","line":369,"text":"In the default theme and standard mode, the conversion control and converted result shall be visibly identifiable in the calculator interface. *(S4)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-004","methods":["visual"]}}]
}
```

# Architect agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never search `$HOME`, a parent directory, or outside that repository. Use CLI-returned `workItemRoot` and artifact or packet paths for governed Story reads and writes; keep them within the bound `workId`.

Use injected repository views as evidence. Make boundaries, contracts, ownership, data flow, failure behavior, security, observability, migration, compatibility, and rollback explicit. Separate observed facts, assumptions, decisions, alternatives, and unresolved questions. Trace decisions to the approved clause IDs (`REQ`, `BEH`, `IFC`, `AC`, `CON`) exactly as the clause capsule names them. Prefer existing repository patterns and never represent a proposal as implemented evidence.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, prioritize boundaries, contracts, security, and material tradeoffs. Do not publish while a material decision owned by this phase remains deferred; a problem that belongs to an earlier phase goes under `## Upstream discrepancies` instead.

# Repository brief: .w-2ec49d45d9d54b5eba2308a8 at 6ffc8acbf54e (for design, focused on this Story)

## Contracts
- app start → App (App.jsx:14)

## Flows
- keydown → App.handleKeyDown → playSound → getAudioContext; 22 rules on the way; writes Sound (App.jsx:157)
- app start → App → evaluateExpression (and 1 helper: formatNumber); 13 rules on the way; writes Browser storage (App.jsx:14)
- onClick on <element> in Display.jsx → handleCopy → playSound → getAudioContext; 6 rules on the way; writes Sound, writes the clipboard (Display.jsx:73)
- onClick on <element> in HistoryDrawer.jsx → handleExport → playSound → getAudioContext; 6 rules on the way; writes Sound (HistoryDrawer.jsx:85)

## Rules that apply
- CHECK-OUT-TEST:AC-003: Before evaluation and after fractional, invalid, error, or non-finite results, the control is unavailable and activation cannot alter the result or expression. *(S3)*. Documented; no code enforcing it was found. (spec.md › CHECK-OUT-TEST:AC-003)
- CHECK-OUT-TEST:REQ-001: The standard calculator shall present a hexadecimal conversion control to the calculator user. *(S1, S3, S4)*. Documented; no code enforcing it was found. (spec.md › CHECK-OUT-TEST:REQ-001)
- App.handleKeyDown: when `key >= '0' && key <= '9'` → does `playSound('digit', soundEnabled)`. Not documented, enforced, no test reaches it. (App.jsx:162)

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
- .w-2ec49d45d9d54b5eba2308a8: 19 code files in javascriptreact (12 files), javascript (7 files); JSX, React, Vitest; 3 entry points, 49 rules in code, 26 tests.
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. (README.md › React + Vite)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

- … 49 more: singularity-flow wm brief --phase planning

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/check-out-test/artifacts/specification/spec.md sha256=22b843d3331d9445b3686e0c39100d03531a95a9357b5d0515fad781dc490f8e status=captured projection=approved-summary representation-sha256=sha256:a8f7410f38f27b90764c3374c0e5923ce6729cdbfeb3524c5699cb44ecc68a56 brief-sha256=5d9590d81bd36e29be94e0f0155be8cb06ee6aff6f4d22463c6906fbd5ecbabc expansion=sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `check-out-test`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/check-out-test/artifacts/specification/spec.md`
- Source SHA-256: `83ff715b65e27002381269d3a7812870f9e17754042653e1b1b4fac745e4f18e`

## Summary from “Agent brief”

Add a hexadecimal conversion control to the standard calculator for any user. After the calculator
has evaluated a finite signed whole-number result, the user can toggle the displayed result between
its decimal representation and uppercase hexadecimal representation. Hexadecimal output uses a
`0x` prefix, with a negative sign before the prefix when applicable, and conversion never changes
the expression. The control is unavailable before a result has been evaluated and for fractional,
non-finite, or invalid results. Acceptance includes a screenshot of the default-theme standard
calculator with the control visible and a hexadecimal result displayed. Full hexadecimal entry,
fractional hexadecimal notation, and expansion to other calculator modes are excluded.

## Actors

- **Calculator user:** May enter and evaluate expressions in the standard calculator and use the
  hexadecimal conversion control. The application has no privileged or authenticated role for this
  feature.

## User scenarios

### S1 — View an evaluated whole-number result as hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The user is in standard mode and has evaluated an expression whose result is a finite
signed whole number.

- **Given** the expression `200 + 55` has been evaluated and the result display shows `255`
  **When** the user activates the hexadecimal conversion control
  **Then** the result display shows `0xFF` and the expression remains `200 + 55`

- **Given** the evaluated result is `0`
  **When** the user activates the hexadecimal conversion control
  **Then** the result display shows `0x0` and the expression remains unchanged

### S2 — Toggle hexadecimal output back to decimal

**Priority:** P2
**Actor:** Calculator user
**Context:** A supported evaluated result is currently displayed in hexadecimal.

- **Given** an evaluated result of `-255` is displayed as `-0xFF`
  **When** the user activates the hexadecimal conversion control again
  **Then** the result display returns to `-255` and the expression remains unchanged

### S3 — Prevent conversion of unsupported result states

**Priority:** P1
**Actor:** Calculator user
**Context:** The standard calculator does not have a convertible evaluated result.

- **Given** no expression has yet been evaluated
  **When** the user views the standard calculator
  **Then** the hexadecimal conversion control is visible but unavailable

- **Given** an evaluated result is fractional
  **When** the user views the hexadecimal conversion control
  **Then** the control is unavailable and the result and expression remain unchanged

- **Given** evaluation produced an invalid, error, or non-finite result
  **When** the user views the hexadecimal conversion control
  **Then** the control is unavailable and the result and expression remain unchanged

### S4 — Verify the default visual presentation

**Priority:** P1
**Actor:** Product reviewer
**Context:** The calculator is shown in standard mode with its default theme.

- **Given** a supported whole-number expression has been evaluated and converted
  **When** visual evidence is captured
  **Then** the screenshot shows the hexadecimal conversion control and the uppercase prefixed
  hexadecimal result in the calculator display

## Failure and empty states

- **Empty:** Before any expression is evaluated, the conversion control is visible but unavailable.
- **Failure:** Fractional, invalid, error, and non-finite evaluated results cannot be converted; the
  control is unavailable and neither the displayed result nor expression is modified.
- **Partial:** Conversion is a single local display action with no multi-step or external dependency;
  there is no accepted partial-success state.

## Permissions

The feature requires no authentication or elevated authority. Every calculator user may use the
control when the current evaluated result is eligible. A user without an eligible result sees the
same control in its unavailable state.

## Boundary conditions

- `0` is eligible and converts to `0x0`.
- Positive and negative finite whole-number results are eligible.
- Negative hexadecimal output places the sign before the prefix, such as `-0xFF`.
- Fractional results are ineligible and are not rounded or truncated.
- Invalid, error, and non-finite results are ineligible.
- The initial display value is not considered an evaluated result; conversion is unavailable until
  an expression has been evaluated.
- No separate magnitude, count, timeout, persistence, or throughput limit is introduced by the
  pinned Story or clarification.

## Requirements

> Exact clauses in Active Clause Capsule: CHECK-OUT-TEST:REQ-001, CHECK-OUT-TEST:REQ-002, CHECK-OUT-TEST:REQ-003, CHECK-OUT-TEST:REQ-004, CHECK-OUT-TEST:REQ-005, CHECK-OUT-TEST:AC-001, CHECK-OUT-TEST:AC-002, CHECK-OUT-TEST:AC-003, CHECK-OUT-TEST:AC-004.

## Non-functional requirements

No quantitative latency, throughput, availability, accessibility, privacy, or retention obligation
was supplied by the pinned Story or clarification. The required visual evidence is specified by
`check-out-test:REQ-005` and `check-out-test:AC-004`; no additional non-functional clause is added.

## Assumptions

- The existing evaluator remains responsible for producing the decimal result before conversion.
- "Default theme" means the application's existing default theme at verification time; the current
  source initializes that theme as `classic`.
- The conversion control affects presentation of the current evaluated result only and does not
  create a new evaluation.

## Out of scope

- A full hexadecimal input mode or `A` through `F` input keys.
- A new arithmetic operator inside expressions.
- Fractional hexadecimal notation or rounding/truncating decimal fractions for conversion.
- Hexadecimal conversion in scientific, converter, financial, or grapher modes.
- Changes to expression text, evaluation rules, or history entries caused solely by conversion.
- Required screenshots for every theme or for both desktop and mobile layouts.
- A new keyboard shortcut for conversion.

> Exact source expansion: `sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f`. Use `singularity-flow show sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:3a13eccdae1a90a0da19ef048ef226d00f66cfbc535c1657e47749e9a1dddffd. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

```json
{"current":{"status":"not-needed","sourceTreeSha256":null,"testInputSha256":null},"entries":[{"phase":"specification","generation":1,"phaseStatus":"approved","packetSha256":"33869d80cb5d46a690dafb2c6c452a40bdcb22231a24bf488c55054ddf17b10d","evidenceCommit":"73e5e5f62c7bd95fdfc0c6aa5f3ba219dafff8f7","sourceCommit":"d1281e771af4a2521a07d84632f349236fe62ee4","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/check-out-test/submissions/specification/33869d80cb5d46a690dafb2c6c452a40bdcb22231a24bf488c55054ddf17b10d.json","executions":[],"omittedExecutions":0}],"diagnostics":[],"omittedPackets":0}
```

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id check-out-test --phase planning --json; VS Code: not available for this action
- Copilot: /sf-phase-documents planning; Shell: singularity-flow phase show planning --json; VS Code: not available for this action

# Final clarification guard

The pinned clarification mode for `planning` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Where governed evidence is ambiguous, label the reading you choose `Assumption:` with its impact and continue; a problem in an earlier phase goes under `## Upstream discrepancies`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
