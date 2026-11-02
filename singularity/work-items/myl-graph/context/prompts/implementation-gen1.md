# Active Story phase contract: Implementation

- Work ID: `myl-graph`
- Requested outcome: graph — create way to plot any graph ,given an equation (full request: Pinned Story source below); refined by this step's approved inputs from specification, planning (Approved upstream artifact evidence below), which settle its detail
- Work type: `spec-driven-standard`
- Phase: `implementation`
- Generation to author: 1
- Changes allowed: May edit this phase's artifacts and application paths within pinned policy; protected and governed state remain kernel-owned.
- Code-edit prerequisite: the exact generation is open; verify the entry mutationContract before edits. Binding `ready` is not code-edit permission.
- Code completion: preserve existing implementation and tests on resume. Complete the configured implementation summary and Agent brief, reconcile exact planned source/test paths and traceability, then prepublish. Passing a manual test command does not publish the phase or justify ending with no next action.
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `when-needed`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Clause IDs: this step defines no new clauses. Cite an approved clause by its full ID, such as `MYL-GRAPH:REQ-001`, never a bare `REQ-001`, and number no new `REQ-`/`AC-` items; this overrides agent or skill guidance that numbers them.
- Exact publication command: `singularity-flow phase publish implementation --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Unfinished markers: TODO (in capitals), TBD, TBC, FIXME, {{...}} and [describe ...] read as unfinished work and refuse publication, even inside code spans.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved inputs are fixed evidence. If wrong, incomplete or contradictory, do not edit it and do not stop: use the most conservative reading consistent with the pinned source. Under `## Upstream discrepancies` list producer phase, clause/section, problem, assumption, impact and owner action. Include every affected qualified clause ID in Impact/Clause, also for section issues; cite existing UPI-IDs in comparison rows, never duplicate them. Missing evidence belongs to its producer, not automatically the code phase. File new items once with `singularity-flow upstream-issue raise --from-artifact`; producer approvers decide. Stop only for a refusal about changed or unapproved input bytes (use its restore/return route), or when no reading satisfies the pinned source: then (ask the person only if clarification permits) raise `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/myl-graph`
- Required artifact: `singularity/work-items/myl-graph/artifacts/implementation/implementation-summary.md`
- Authored content: at least 250 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Repository discovery stays within the selected checkout. Keep CLI-issued absolute paths unchanged, including exact private/external files; writes still require phase authorization.
- Write scope: `source-and-artifact`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `engineering-reviewers`
- Minimum distinct approvals: 1

## Configured artifact template

# myl-graph — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

TODO: Write the Agent brief here as visible text; text inside the comment above is not read.

## Implemented outcome

TODO: Summarize the implemented behavior.

## Changed components and decisions

TODO: Cite exact changed product-source paths and the qualified `@clause:MYL-GRAPH:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:MYL-GRAPH:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

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

## Approved phase input: planning

<!-- source=singularity/work-items/myl-graph/artifacts/planning/plan.md sha256=a7fb794c8ab83d8cdd7ffe0df405d37def9ee17e8ffe76e147acc1f3702e8559 status=captured projection=approved-summary -->

# Approved agent brief — Planning

- Producer: `planning` generation 1; source `singularity/work-items/myl-graph/artifacts/planning/plan.md`

## Summary from “Agent brief”

The checkout already contains a graphing mode: `App.jsx` routes the grapher mode to
`FunctionGrapher`, which accepts an equation, compiles it with mathjs, and draws finite samples on
a canvas. Preserve this small client-side design and verify it rather than introducing a graphing
service or another rendering library. Add focused component and mode-integration regression tests;
use the existing canvas test stub for deterministic checks, then visually confirm the `sin(x)` plot
in the application. The main risks are expression-evaluation boundaries and canvas behavior that
unit tests cannot visually establish. This plan does not claim that tests or visual acceptance have
already occurred. [MYL-GRAPH:REQ-001] [MYL-GRAPH:REQ-002] [MYL-GRAPH:AC-001]

## Test strategy

Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
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
| `MYL-GRAPH:AC-001` | - | `src/components/FunctionGrapher.test.jsx` | test-only | The entered `sin(x)` expression produces a plotted sine trace over the visible x range. |
| `MYL-GRAPH:REQ-001` | - | `src/components/FunctionGrapher.test.jsx`; `src/App.test.jsx` | test-only | A person can enter an equation in the graphing mode reached from the application. |
| `MYL-GRAPH:REQ-002` | - | `src/components/FunctionGrapher.test.jsx`; `src/App.test.jsx` | test-only | The graphing mode renders a plot for the supplied equation. |

## Risks and rollback

Canvas mocks can prove that the component issues drawing operations but cannot prove the plot is
visually legible; detect that gap with the planned visual review. Expression input is evaluated by
mathjs, so keep evaluation constrained to the supplied x-variable and do not add arbitrary
JavaScript evaluation or a larger execution scope. If regression coverage exposes a defect, limit
the repair to the grapher surface and retain the existing calculator modes; reverting the focused
test-only change does not require data migration or server rollback. No implementation or test
result is claimed by this plan.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:myl-graph:02b00408a45de0feb26addf26638b7f1556f1870f394dd8968c46aa6c471cc31 --section "<heading>"`.

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
  "phase": "implementation",
  "capsuleSha256": "sha256:37c2890c5677f44c862b407da2b852851bda76db7c89d69dcf45bc67603c2e56",
  "sources": [{"id":"S1","path":"singularity/work-items/myl-graph/artifacts/specification/spec.md","sha256":"sha256:a2e305b547b8783840c3ecd21488c9603fced1c3012bc615b3fb915dbb51f0f1"}],
  "clauses": [{"id":"MYL-GRAPH:AC-001","source":"S1","line":342,"text":"For the confirmed example, the application plots `sin(x)` over an x range. *(S1)* [scope:SRI-f44a7707dbb8]","verification":{"criterionId":"MYL-GRAPH:AC-001","methods":["test","visual"]}},{"id":"MYL-GRAPH:REQ-001","source":"S1","line":337,"text":"A person can provide an equation to the application for plotting. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"MYL-GRAPH:REQ-002","source":"S1","line":338,"text":"For an equation provided by the person, the application displays its graph. *(S1)*","verification":{"criterionId":"MYL-GRAPH:AC-001","methods":["test","visual"]}}]
}
```

# Human clarification checkpoint

The `implementation` phase uses clarification mode `when-needed`.
Prioritize material uncertainty about: approved deviations, implementation blockers.

- Ask only when a material ambiguity remains after reading the governed evidence.
- If none remains, state that the clarification checkpoint found no material ambiguity and continue.
- Ask one concise batch of no more than 3 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository brief, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Formulating evidence-grounded questions is permitted even while artifact authoring awaits clarification. Never ask the human to supply the questions or generic clarification answers. A menu promise to provide answers is not an answer.
- Do not re-ask established facts or infer answers from generic knowledge. Label hypotheses/design proposals; they become acceptance or specification decisions only with human confirmation.
- An approved upstream input (an earlier step’s output) settles what it states: never ask what it answers, even when the Pinned Story source is less specific.
- Missing record does not mean unanswered. Reuse actual human replies only for the same Story, phase, generation and reviewed context. A failed tool/record write requires recording repair, not repeated questions; preserve the replies and staging file on failure. Changed bindings require review, never automatic answer adoption.
- For intent conflicts, confirm the human change and follow Conflict recovery in the Pinned Story source; never silently overwrite intent.
- Explain each question’s impact; offer an evidence-supported default. Accept explicit “unknown” or non-blocking deferral. Record confirmed decisions in the artifact and deferred items in Open questions with impact and owner.
- Use a file-edit tool to stage only {"responses":[...]} at the issued responseStagingPath (standalone discovery: `git rev-parse --git-path singularity-flow/clarification-responses/implementation-gen<N>.json`). Every turn of this step may write that exact file, so a refusal from an earlier turn does not apply after this entry: write it now. Run the returned recordAction or standalone `singularity-flow clarification record implementation --response-file <that-path>`, without shell chains, then remove staging with a file-edit tool only after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- Material unresolved decisions block specification publication; recommendations/placeholders cannot hide them.
- If `ask_user` is unavailable, print numbered questions and stop before authoring or publication; never assume answers. When the person replies, stage their answers at responseStagingPath, run recordAction, then continue.
- Do not author or publish this step's output until the checkpoint is complete: no material ambiguity found, or the answers to what you asked recorded.

# Developer agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as command cwd. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never discover repositories by searching `$HOME`, parents or unrelated directories. Use the CLI's exact artifact, packet and staging paths for this binding. Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.

Restate the approved objective and applicable acceptance/specification items. Inspect governed repository evidence before changing code. Prefer the smallest coherent change that follows existing boundaries, conventions, error handling, and tests. Do not expand scope or silently resolve ambiguity. Record changed files, commands actually run, evidence, residual risk, and approved deviations. Missing runners use reviewed /sf-test-setup; tests the environment cannot run are reported for a step approver's test-risk decision, never faked.

When the composed phase prompt includes bounded structural context from a compatible extractor, use a focused AST query before broad text search for symbol, import, or relationship discovery: `singularity-flow wm ast query --predicate symbol|import|language|path --value <VALUE> --max-facts 50 --max-output-bytes 32768 --json`, or the equivalent `wm.ast.query` gateway read. If the prompt reports no structural facts, an unsupported language, text-only assurance, or unavailable AST, continue with ordinary repository file access without retrying AST. Follow `nextCursor` only while the question remains unanswered. Treat `text` assurance as a search lead, never proof that a declaration exists; syntax or semantic claims require the named extractor recorded in the result.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, focus on implementation blockers or approved-specification deviations. Do not reopen settled product or architecture choices.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-d5401076e0784676a8409dda at f54bc5d61381 (for implementation, focused on this Story)

## What a change touches
- App.handleKeyDown: no caller in the repository; no test reaches it; 17 rules (App.jsx)
- evaluateExpression: called by App; tests evaluator.test.js; 10 rules (evaluator.js)
- convertUnits: no caller in the repository; no test reaches it; 5 rules (evaluator.js)
- calculateEMI: no caller in the repository; no test reaches it; 3 rules (evaluator.js)
- formatNumber: called by App, convertUnits, evaluateExpression; tests evaluator.test.js; 3 rules (evaluator.js)
- getAudioContext: called by App.handleKeyDown, ScientificKeypad, ScientificKeypad.handleFunc, handleBtn; no test reaches it; 3 rules (audio.js)
- calculateCompoundInterest: no caller in the repository; no test reaches it; 2 rules (evaluator.js)
- calculateTip: no caller in the repository; no test reaches it; 2 rules (evaluator.js)

## Rules that apply
- App.handleKeyDown: when `key >= '0' && key <= '9'` → does `playSound('digit', soundEnabled)`. Not documented, enforced, no test reaches it. (App.jsx:162)
- calculateCompoundInterest: computes `const amount = P * Math.pow(1 + r / n, n * t)`. Not documented, enforced, no test reaches it. (evaluator.js:191)
- calculateCompoundInterest: when `isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0` → returns `{ amount: 0, interest: 0 }`. Not documented, enforced, no test reaches it. (evaluator.js:187)

## Contracts
- app start → App (App.jsx:14)

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
- calculateEMI: 3 rules, no test reaches it (evaluator.js:161)
- calculateCompoundInterest: no test reaches it (evaluator.js:181)
- calculateTip: no test reaches it (evaluator.js:200)
- ScientificKeypad: complexity 11 (ScientificKeypad.jsx:5)
- handleCopy: reached by 1 entry point, no test reaches it (Display.jsx:17)
- handleExport: reached by 1 entry point, no test reaches it (HistoryDrawer.jsx:15)
- handleCategoryChange: reached by 1 entry point (UnitConverter.jsx:25)

- … 31 more: singularity-flow wm brief --phase implementation

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:5036d09620433d5e81475421de3290375b250536729ea8948de9db1cd04cdf75. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 1 (`singularity/work-items/myl-graph/submissions/specification/2e46225e6307387330829f41884673e7ea25597ffab9e412432f7ffc3ddf9da1.json`), planning generation 1 (`singularity/work-items/myl-graph/submissions/planning/91191363c3c0d4cad36035a5ae601c50b922f2badc3d2419583e86c204338ee8.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: `/sf-appeal`
- Shell: `singularity-flow appeal repair-plan --work-id myl-graph --phase implementation --json`
- VS Code (model-free): not available for this action

- Copilot: `/sf-phase-documents implementation`
- Shell: `singularity-flow phase show implementation --json`
- VS Code (model-free): not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:bb4d9bf2cc477d7432e1aed8d8f29e9633188651e24857cf180368e5a78c28f3
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- planning generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- implementation generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
