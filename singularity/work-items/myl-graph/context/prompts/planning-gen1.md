# Active Story phase contract: Planning

- Work ID: `myl-graph`
- Requested outcome: graph — create way to plot any graph ,given an equation (full request: Pinned Story source below); refined by this step's approved inputs from specification (Approved upstream artifact evidence below), which settle its detail
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
- Clause IDs: this step defines no new clauses. Cite an approved clause by its full ID, such as `MYL-GRAPH:REQ-001`, never a bare `REQ-001`, and number no new `REQ-`/`AC-` items; this overrides agent or skill guidance that numbers them.
- Exact publication command: `singularity-flow phase publish planning --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Unfinished markers: TODO (in capitals), TBD, TBC, FIXME, {{...}} and [describe ...] read as unfinished work and refuse publication, even inside code spans.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved inputs are fixed evidence. If wrong, incomplete or contradictory, do not edit it and do not stop: use the most conservative reading consistent with the pinned source. Under `## Upstream discrepancies` list producer phase, clause/section, problem, assumption, impact and owner action. Include every affected qualified clause ID in Impact/Clause, also for section issues; cite existing UPI-IDs in comparison rows, never duplicate them. Missing evidence belongs to its producer, not automatically the code phase. File new items once with `singularity-flow upstream-issue raise --from-artifact`; producer approvers decide. Stop only for a refusal about changed or unapproved input bytes (use its restore/return route), or when no reading satisfies the pinned source: then (ask the person only if clarification permits) raise `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Planning rows: cover every approved requirement and acceptance ID from the authoritative clause capsule; preserve its meaning. The table's first columns are Clause | Expected paths | Planned tests, in that order. Use a bare - for an empty path cell, never `-` (which names a file).
- Evidence planning: put retained files under singularity/work-items/myl-graph/evidence/ in that clause's Expected paths with Fulfillment `evidence`; do not assign screenshot obligations to another clause. A planned test that captures one saves under its runner's output (for example test-results/), never at that path, which every later run would replace; the code step copies it there once.
- Verification: inherit approved clause verification methods, without downgrading required proof to supporting or any-of. Use the actual `## Verification contracts` table: exact approved AC Criterion, lower-hyphen Slot, test/inspection/visual Method, Witness = one backticked value and nothing else (a planned test or exact file, or the screen a visual shows), primary/supporting Role; Required assurance empty or one word: module-observed/exact-local-observed for test, source-bound/declared for inspection or visual. Put scenario/reviewer prose outside these cells. For non-executable proof put verification: <AC-ID> in Planned tests and define its primary visual/inspection slot. not-applicable: <reason> is only a genuine exemption requiring human disposition, not a screenshot check. File presence is not a passing witness.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/myl-graph`
- Required artifact: `singularity/work-items/myl-graph/artifacts/planning/plan.md`
- Authored content: at least 300 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Repository discovery stays within the selected checkout. Keep CLI-issued absolute paths unchanged, including exact private/external files; writes still require phase authorization.
- Write scope: `artifact-only`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `architecture-reviewers`
- Minimum distinct approvals: 1

## Configured artifact template

# Implementation plan — myl-graph

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
| `<path or module>` | <what changes> | [MYL-GRAPH:REQ-001] |

## Sequencing

TODO: State the implementation order and what each step unblocks.

## Test strategy

TODO: Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `MYL-GRAPH:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `myl-graph`'s Story evidence directory, not product source.
A planned test never saves its capture straight to that path, because every later run would replace
the reviewed file: it saves under its runner's output (for example `test-results/`), and the code
step copies the image to the evidence path once, when it produces the evidence.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `MYL-GRAPH:REQ-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Criterion must be an exact approved AC ID, Slot a lower-hyphen identifier,
Method test/inspection/visual, and Role primary/supporting; scenario/reviewer prose belongs
outside these cells. Never classify the screenshot as product source or an executable test.
The Witness cell holds one backticked value and nothing else. Required assurance holds one word
or stays empty: module-observed or exact-local-observed for a test, declared or source-bound for
an inspection or visual witness. For example (a fenced example is never read as a contract):
```text
| Criterion | Slot | Method | Witness | Role | Required assurance |
|---|---|---|---|---|---|
| `ORDER:AC-001` | unit | test | `test/orders.test.js` | primary | module-observed |
| `ORDER:AC-002` | runbook | inspection | `docs/runbook.md` | primary | source-bound |
| `ORDER:AC-003` | screen | visual | `Order confirmation page` | primary | source-bound |
```
-->

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `go.mod` — adds the ledger client, or - `.github/workflows/ci.yml` — runs the new job. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

TODO: List the constitution article IDs this plan is bound by `[SPK:REQ-100]`.

## Risks and rollback

TODO: Describe what could go wrong, how it would be detected, and how to roll it back.

# Approved upstream artifact evidence

These are this step's inputs: the approved outputs of the steps before it, delivered here so nothing needs to be searched for. They refine the Pinned Story source below, and what they state is settled: never ask a question they answer. Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/myl-graph/artifacts/specification/spec.md sha256=a2e305b547b8783840c3ecd21488c9603fced1c3012bc615b3fb915dbb51f0f1 status=captured projection=approved-summary -->

# Approved agent brief — Specification

- Producer: `specification` generation 1; source `singularity/work-items/myl-graph/artifacts/specification/spec.md`

## Summary from “Agent brief”

Enable a person using the existing application to provide an equation and see its graph. The confirmed example is plotting `sin(x)` over an x range. The request does not specify equation syntax, range endpoints, limits, or error behavior; do not infer them as acceptance requirements.

## Actors

A person using the application provides an equation and views its graph. No distinct roles or permission levels are specified.

## User scenarios

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Plot an equation supplied to the application

**Priority:** P1
**Actor:** A person using the application
**Context:** The person has an equation they want to plot.

- **Given** the person provides an equation
  **When** they request its graph
  **Then** the application displays a plot of that equation.

- **Given** the person provides `sin(x)` as the equation
  **When** they request its graph
  **Then** the application plots the sine function over an x range.

## Failure and empty states

- **Empty:** No saved graph history or other stored records are requested; initial empty-state behavior is unspecified.
- **Failure:** The request does not define equation-validation or plotting failure behavior, including messages or recovery.
- **Partial:** Partial results or multi-equation behavior are not specified.

## Permissions

Not applicable: the request specifies no roles or permission distinctions.

## Boundary conditions

The request does not specify equation syntax, supported equation classes, x-range endpoints, axis limits, numeric precision, or behavior for unsupported equations. The confirmed sine example is `sin(x)` plotted over an x range; no particular range is prescribed.

## Requirements

- A person can provide an equation to the application for plotting. *(S1)* [MYL-GRAPH:REQ-001]
- For an equation provided by the person, the application displays its graph. *(S1)* [MYL-GRAPH:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- For the confirmed example, the application plots `sin(x)` over an x range. *(S1)* [MYL-GRAPH:AC-001] [scope:SRI-f44a7707dbb8]

## Non-functional requirements

None are specified by the pinned request or the recorded clarification.

## Assumptions

The feature is for a person using the existing application. The request and clarification do not establish equation syntax, range endpoints, or additional graphing controls.

## Out of scope

The pinned request establishes no additional exclusions. Saving or sharing graphs, graph styling, multiple-graph behavior, and specific error handling are not requirements in this specification.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:myl-graph:10b24e1d869ca0dfc6be39e300c5136195fc3cdabc5110e675c9198b36cf0a1b --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/myl-graph/source.json`
- SHA-256: `01d23f89cfb81225417b71ad66c3867676c63290036506c01a1b582f1442a982`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. Then propose it from this step with `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"` (it amends the approved scope of `specification`); no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "myl-graph",
  "title": "graph",
  "description": "create way to plot any graph ,given an equation",
  "acceptanceCriteria": "Plot a sin 30 graph"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "myl-graph",
  "phase": "planning",
  "capsuleSha256": "sha256:63cdf4220e24d13251815959d3516497b57e1915de18f2906975e90bf297f5b9",
  "sources": [{"id":"S1","path":"singularity/work-items/myl-graph/artifacts/specification/spec.md","sha256":"sha256:a2e305b547b8783840c3ecd21488c9603fced1c3012bc615b3fb915dbb51f0f1"}],
  "clauses": [{"id":"MYL-GRAPH:AC-001","source":"S1","line":342,"text":"For the confirmed example, the application plots `sin(x)` over an x range. *(S1)* [scope:SRI-f44a7707dbb8]","verification":{"criterionId":"MYL-GRAPH:AC-001","methods":["test","visual"]}},{"id":"MYL-GRAPH:REQ-001","source":"S1","line":337,"text":"A person can provide an equation to the application for plotting. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"MYL-GRAPH:REQ-002","source":"S1","line":338,"text":"For an equation provided by the person, the application displays its graph. *(S1)*","verification":{"criterionId":"MYL-GRAPH:AC-001","methods":["test","visual"]}}]
}
```

# Architect agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as command cwd. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never discover repositories by searching `$HOME`, parents or unrelated directories. Use the CLI's exact artifact, packet and staging paths for this binding. Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.

Use injected repository views as evidence. Make boundaries, contracts, ownership, data flow, failure behavior, security, observability, migration, compatibility, and rollback explicit. Separate observed facts, assumptions, decisions, alternatives, and unresolved questions. Trace decisions to the approved clause IDs (`REQ`, `BEH`, `IFC`, `AC`, `CON`) exactly as the clause capsule names them. Prefer existing repository patterns and never represent a proposal as implemented evidence.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, prioritize boundaries, contracts, security, and material tradeoffs. Do not publish while a material decision owned by this phase remains deferred; a problem that belongs to an earlier phase goes under `## Upstream discrepancies` instead.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-d5401076e0784676a8409dda at c4be6ba986c9 (for design, focused on this Story)

## Contracts
- app start → App (App.jsx:14)

## Flows
- keydown → App.handleKeyDown → playSound → getAudioContext; 22 rules on the way; writes Sound (App.jsx:157)
- app start → App → evaluateExpression (and 1 helper: formatNumber); 13 rules on the way; writes Browser storage (App.jsx:14)
- onClick on <element> in Display.jsx → handleCopy → playSound → getAudioContext; 6 rules on the way; writes Sound, writes the clipboard (Display.jsx:73)
- onClick on <element> in HistoryDrawer.jsx → handleExport → playSound → getAudioContext; 6 rules on the way; writes Sound (HistoryDrawer.jsx:85)

## Rules that apply
- App.handleKeyDown: when `key >= '0' && key <= '9'` → does `playSound('digit', soundEnabled)`. Not documented, enforced, no test reaches it. (App.jsx:162)
- calculateCompoundInterest: computes `const amount = P * Math.pow(1 + r / n, n * t)`. Not documented, enforced, no test reaches it. (evaluator.js:191)
- calculateCompoundInterest: when `isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0` → returns `{ amount: 0, interest: 0 }`. Not documented, enforced, no test reaches it. (evaluator.js:187)
- calculateEMI: computes `const totalPayment = emi * n`. Not documented, enforced, no test reaches it. (evaluator.js:171)

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
- .w-d5401076e0784676a8409dda: 19 code files in javascriptreact (12 files), javascript (7 files); JSX, React, Vitest; 3 entry points, 49 rules in code, 26 tests. (commit c4be6ba986c9)
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. (README.md › React + Vite)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

- … 42 more: singularity-flow wm brief --phase planning

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:e9e5e44899bf5f50b518c83d3e959dc9dafa19fdc26f625d0c2be9fc44cd2ca2. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 1 (`singularity/work-items/myl-graph/submissions/specification/2e46225e6307387330829f41884673e7ea25597ffab9e412432f7ffc3ddf9da1.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: `/sf-appeal`
- Shell: `singularity-flow appeal repair-plan --work-id myl-graph --phase planning --json`
- VS Code (model-free): not available for this action

- Copilot: `/sf-phase-documents planning`
- Shell: `singularity-flow phase show planning --json`
- VS Code (model-free): not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:f6096401a59e9524a8c92c08ee14830cf52bc251e67074486065f5630db9aeda
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- planning generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `planning` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Where governed evidence is ambiguous, label the reading you choose `Assumption:` with its impact and continue; a problem in an earlier phase goes under `## Upstream discrepancies`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
