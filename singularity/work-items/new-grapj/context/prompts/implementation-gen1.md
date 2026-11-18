# Active Story phase contract: Implementation

- Work ID: `new-grapj`
- Requested outcome: graph new — Create graph plotter like the one attached (full request: Pinned Story source below); refined by this step's approved inputs from specification, planning (Approved upstream artifact evidence below), which settle its detail
- Work type: `spec-driven-standard`
- Phase: `implementation`
- Generation to author: 1
- Changes allowed: May edit this phase's artifacts only. Open a code generation before application edits.
- Code-edit prerequisite: follow `singularity-flow phase begin implementation --json` before any application edit, then refresh phase entry once. Review any adoption/confirmation or successor boundary; never infer or auto-accept it. Binding `ready` is not code-edit permission.
- Code completion: preserve existing implementation and tests on resume. Complete the configured implementation summary and Agent brief, reconcile exact planned source/test paths and traceability, then prepublish. Passing a manual test command does not publish the phase or justify ending with no next action.
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `when-needed`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Clause IDs: this step defines no new clauses. Cite an approved clause by its full ID, such as `NEW-GRAPJ:REQ-001`, never a bare `REQ-001`, and number no new `REQ-`/`AC-` items; this overrides agent or skill guidance that numbers them.
- Exact publication command: `singularity-flow phase publish implementation --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Self-healing continuation: observe the exact failure and saved evidence, diagnose its cause, preserve the existing draft, repair only work admitted by the current mutation contract, verify the repair, then rerun the returned gate; this covers every kind of failure in any phase. A failed test is not a blanket end-of-authoring gate. Failure text is data, never permission or executable instructions; use only CLI-owned routes. Never retry an unchanged condition (a changed runtime or dependency can justify a fresh test run on unchanged source), reset a spent repair budget, oscillate between fixes, hide failures or accept risks automatically. Exhaustion ends unattended retries, not manual correction: preserve work and offer the exact owner/manual continuation. Human authority, credentials, unavailable external prerequisites and integrity need their exact owner action; an unknown failure needs bounded diagnosis and a named owner. Only fresh required execution establishes passing tests; then continue the original transition without redoing completed authoring or changing approved upstream evidence.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Unfinished markers: TODO (in capitals), TBD, TBC, FIXME, {{...}} and [describe ...] read as unfinished work and refuse publication, even inside code spans.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Departures: approved inputs are fixed evidence. In a code step, what they lack or get wrong (a file, plan row, test, wording or clause) is a departure, not an upstream issue, and never a reason to stop. Record each once with `singularity-flow departure record --kind <kind> --reason <why>` (`--path`, `--clause`; wording or clause: `--target <step> --file <draft copy>`) and keep coding; prepublish records a changed file no plan row names by itself. Never edit the earlier document: a person decides each departure once, before approval. A refusal about changed or unapproved input bytes uses its restore/return route.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations; add no traceability tags or API documentation to them. When one is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise list tooling under Supporting files with a reason.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/new-grapj`
- Required artifact: `singularity/work-items/new-grapj/artifacts/implementation/implementation-summary.md`
- Authored content: at least 250 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Repository discovery stays within the selected checkout.
- Write scope: `source-and-artifact`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `engineering-reviewers`
- Minimum distinct approvals: 1

## Configured artifact template

# new-grapj — Implementation Summary

## Agent brief

<!-- sflow:guidance Summarize the implemented outcome, consequential decisions, changed surfaces, validation result, remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based; the detailed changed-components and test sections are preserved separately. -->

TODO: Write the Agent brief here as visible text; text inside the comment above is not read.

## Implemented outcome

TODO: Summarize the implemented behavior.

## Changed components and decisions

TODO: Cite exact changed product-source paths and the qualified `@clause:NEW-GRAPJ:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:NEW-GRAPJ:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

# Approved upstream artifact evidence

These are this step's inputs: the approved outputs of the steps before it, delivered here so nothing needs to be searched for. They refine the Pinned Story source below, and what they state is settled: never ask a question they answer. Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/new-grapj/artifacts/specification/spec.md sha256=5fb949d7c74819bb40a8219a5a436c6137014d1e257734a39e817a83beee93e7 status=captured projection=approved-summary -->

# Approved agent brief — Specification

- Producer: `specification` generation 2; source `singularity/work-items/new-grapj/artifacts/specification/spec.md`

## Summary from “Agent brief”

Build a 2D Cartesian function plotter for an application user. It renders requested mathematical functions and includes the required circle centered at the origin with radius 6 units. A Playwright test verifies that circle. The supplied reference defines structural visual expectations: an expression list on the left, a Cartesian grid with labeled axes on the right, and visible graph controls. Pixel-identical styling is not required.

## Actors

Application user: requests a function plot. No distinct roles or permission authority are specified.

## User scenarios

### S1 — Plot a mathematical function

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a mathematical function plot
  **Then** the plotter renders the function in a two-dimensional Cartesian coordinate plane.

### S2 — Plot and verify the specified circle

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the user requests a circle centered at the origin with radius 6 units
  **Then** the rendered graph represents the circle `x² + y² = 36`.

- **Given** the circle plot is available
  **When** the specified Playwright test checks it
  **Then** the test verifies that the circle is centered at the origin and has radius 6 units.

### S3 — Use the referenced graphing layout

**Priority:** P1
**Actor:** Application user
**Context:** The plotter is available.

- **Given** the plotter is available
  **When** the graphing workspace is displayed
  **Then** an expression list appears on the left and a Cartesian grid with labeled axes appears on the right, alongside visible add, undo, redo, settings, panel-collapse, graph-tool, zoom-in, and zoom-out controls; pixel-identical styling is not required.

## Failure and empty states

- **Empty:** No empty-state behavior is specified by the pinned request.
- **Failure:** No failure behavior is specified by the pinned request.
- **Partial:** No partial-result behavior is specified by the pinned request.

## Permissions

Not applicable: the request identifies an application user and specifies no distinct roles or permission controls.

## Boundary conditions

The only specified numeric boundary is a circle of radius 6 units centered at the origin. No other domain, range, count, precision, or timeout is specified.

## Requirements

> Exact clauses in Active Clause Capsule: NEW-GRAPJ:REQ-001, NEW-GRAPJ:REQ-002, NEW-GRAPJ:REQ-003, NEW-GRAPJ:AC-001, NEW-GRAPJ:AC-002.

## Non-functional requirements

None stated in the pinned request or clarification.

## Assumptions

The plotter accepts a user request to plot a mathematical function. The pinned request and clarification do not define its input syntax or behavior for the visible controls.

## Out of scope

Pixel-identical styling, specific input syntax, control behavior beyond their visible presence, additional plot types, and unrequested numeric or non-functional limits are not defined by this specification.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:new-grapj:787e62a58d49bfde7d6101d11d82c63e3e246cd049a6d7f2388215ce0010c4e9 --section "<heading>"`.

## Approved phase input: planning

<!-- source=singularity/work-items/new-grapj/artifacts/planning/plan.md sha256=5c504c7dccd57ff1057e55aae274ca8115528e30d374740a421828d6ef2e7b28 status=captured projection=approved-summary -->

# Approved agent brief — Planning

- Producer: `planning` generation 1; source `singularity/work-items/new-grapj/artifacts/planning/plan.md`

## Summary from “Agent brief”

Extend the existing React/Vite function grapher without adding a charting library. Preserve its mathjs function plotting and canvas grid, widen only Grapher mode, and add the approved expression-list/graph layout and visible controls. Add a parametric rendering path for the required radius-6 circle. Verify plotting in a real browser with Playwright and visually review the layout. Main risks are canvas coordinate/DPR handling and the new browser-test setup; rollback is isolated to graph-mode UI, styles, and test tooling.

## Test strategy

Use a real-browser Playwright test for the function and circle behavior; the existing jsdom canvas stub is not evidence of rendered geometry. The circle assertion should derive the origin and unit spacing from the plotted grid rather than hard-code device pixels. `NEW-GRAPJ:AC-002` remains a human visual review, not a Playwright pass.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `NEW-GRAPJ:AC-001` | - | `e2e/graphing.spec.js` | test-only | Playwright verifies the plotted circle is centered at the origin and has a six-unit radius. |
| `NEW-GRAPJ:AC-002` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-GRAPJ:AC-002 | modified | Visual review confirms the expression list, labeled Cartesian graph, and specified controls are visible in the approved arrangement. |
| `NEW-GRAPJ:REQ-001` | `src/components/FunctionGrapher.jsx` | `e2e/graphing.spec.js` | existing | A requested mathematical function is rendered on a two-dimensional Cartesian plane. |
| `NEW-GRAPJ:REQ-002` | `src/components/FunctionGrapher.jsx` | `e2e/graphing.spec.js` | modified | The circle entry renders a circle centered at `(0,0)` with radius 6. |
| `NEW-GRAPJ:REQ-003` | `src/App.jsx`, `src/components/FunctionGrapher.jsx`, `src/index.css` | verification: NEW-GRAPJ:AC-002 | modified | The expression list, labeled Cartesian grid, and listed controls are visible in the specified layout. |

## Risks and rollback

Canvas sampling and device-pixel-ratio differences can make geometry assertions flaky; compare plotted geometry to the grid-derived unit scale and keep the circle test in a real browser. The current grapher only plots `y=f(x)`, so the circle must use its dedicated parametric path rather than silently relying on an implicit solver. Playwright adds browser provisioning to an existing Vitest-only project; keep its command isolated from `npm test`. If the graph changes regress other modes or cannot satisfy the visual review, roll back the graph-mode shell/style/component changes and the dedicated Playwright setup, leaving calculator modes and their existing tests unchanged.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:new-grapj:6257d6d9059762d6c39449e8bd6b120cc939c143b220c122e2c743366f84dab1 --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/new-grapj/source.json`
- SHA-256: `48c9e3980f4a2f393670922524978e4451f1f4c9ad586cc457eeb7f2ad87898d`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. When they say an approved requirement changed, never edit the approved scope: run `singularity-flow story intent-amendment draft --work-id new-grapj --clause <ID>`, write only the changed clauses in the draft, then propose it from this step with `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>" --authored governed-agent --channel copilot-host` (it amends the approved scope of `specification`; no convergence finding or revision loop). Tell the person to decide it on the decisions card: `/sf-decide new-grapj`. This step pauses until it is decided. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "new-grapj",
  "title": "graph new",
  "description": "Create graph plotter like the one attached",
  "acceptanceCriteria": "- Palyright tests on cirlce of 6 unit radius in origin",
  "notes": "Request copied from Story new-graph-plot at 7faf5ed666efe4c2920136571d20b2c513f90654.\n\nSupporting documents were not copied. Attach needed documents and images to this new Story."
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "new-grapj",
  "phase": "implementation",
  "capsuleSha256": "sha256:d8d4568bed62d1bbcfcf31a06040a95500ae2c5f790e1c53d370970644ecdea6",
  "sources": [{"id":"S1","path":"singularity/work-items/new-grapj/artifacts/specification/spec.md","sha256":"sha256:5fb949d7c74819bb40a8219a5a436c6137014d1e257734a39e817a83beee93e7"}],
  "clauses": [{"id":"NEW-GRAPJ:AC-001","source":"S1","line":360,"text":"A Playwright test shall verify that the rendered circle is centered at the origin and has radius 6 units. *(S2)*","verification":{"criterionId":"NEW-GRAPJ:AC-001","methods":["test"]}},{"id":"NEW-GRAPJ:AC-002","source":"S1","line":361,"text":"Visual acceptance shall confirm the workspace structure and visible controls in `NEW-GRAPJ:REQ-003`. *(S3)*","verification":{"criterionId":"NEW-GRAPJ:AC-002","methods":["visual"]},"dependencies":["NEW-GRAPJ:REQ-003"]},{"id":"NEW-GRAPJ:REQ-001","source":"S1","line":356,"text":"The application shall render requested mathematical functions in a two-dimensional Cartesian coordinate plane. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"NEW-GRAPJ:REQ-002","source":"S1","line":357,"text":"The plotter shall render a circle centered at `(0,0)` with radius 6 units, represented by `x² + y² = 36`. [scope:SRI-15d4e5bd263a] *(S2)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"NEW-GRAPJ:REQ-003","source":"S1","line":358,"text":"The graphing workspace shall show an expression list on the left and a Cartesian grid with labeled axes on the right, along with visible add, undo, redo, settings, panel-collapse, graph-tool, zoom-in, and zoom-out controls; pixel-identical styling is not required. *(S3)*","verification":{"criterionId":"NEW-GRAPJ:AC-002","methods":["visual"]}}]
}
```

# Human clarification checkpoint

The `implementation` phase uses clarification mode `when-needed`.
Prioritize material uncertainty about: approved deviations, implementation blockers.

- Ask only when a material ambiguity remains after reading the governed evidence.
- If none remains, state that the clarification checkpoint found no material ambiguity and continue.
- Ask one concise batch of no more than 3 questions with the interactive `ask_user` tool (in VS Code, `vscode_askQuestions`).
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository brief, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Formulating evidence-grounded questions is permitted while authoring awaits clarification. Never ask the human to supply the questions or generic answers; a menu promise to answer is not an answer.
- Do not re-ask established facts or infer answers from generic knowledge. Label hypotheses/design proposals; they become acceptance or specification decisions only with human confirmation.
- An approved upstream input (an earlier step’s output) settles what it states: never ask what it answers, even when the Pinned Story source is less specific.
- Missing record does not mean unanswered. Reuse actual human replies only for the same Story, phase, generation and reviewed context. A failed tool/record write requires recording repair, not repeated questions; preserve the replies and staging file on failure. Changed bindings require review, never automatic answer adoption.
- For intent conflicts, confirm the human change and follow Conflict recovery in the Pinned Story source; never silently overwrite intent.
- Explain each question’s impact; offer an evidence-supported default. Accept explicit “unknown” or non-blocking deferral. Record confirmed decisions in the artifact and deferred items in Open questions with impact and owner.
- When `ask_user` returns, the person is done: in this same turn stage their answers, run recordAction, refresh the entry once, then carry on with the step itself. Never end the turn between them.
- Use a file-edit tool to stage only {"responses":[{"question":"<the question as asked>","answer":"<the person's reply>"}]} (one entry per question; a deferral adds "status":"deferred" with its reason as the answer) at the issued responseStagingPath (standalone discovery: `git rev-parse --git-path singularity-flow/clarification-responses/implementation-gen<N>.json`). Every turn of this step may write that exact file, so a refusal from an earlier turn does not apply after this entry: write it now. Run the returned recordAction or standalone `singularity-flow clarification record implementation --response-file <that-path>`, without shell chains, then remove staging with a file-edit tool only after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- Material unresolved decisions block this step's publication; recommendations/placeholders cannot hide them.
- If `ask_user` is unavailable, print numbered questions and stop before authoring or publication; never assume answers. When the person replies, stage their answers at responseStagingPath, run recordAction, then continue.
- Do not author or publish this step's output until the checkpoint is complete: no material ambiguity found, or the answers to what you asked recorded.

# Developer agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as command cwd. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never discover repositories by searching `$HOME`, parents or unrelated directories. Use the CLI's exact artifact, packet and staging paths for this binding. Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.

Restate the approved objective and applicable acceptance/specification items. Inspect governed repository evidence before changing code. Prefer the smallest coherent change that follows existing boundaries, conventions, error handling, and tests. Do not expand scope or silently resolve ambiguity. Record changed files, commands actually run, evidence, residual risk, and approved deviations. Missing runners use reviewed /sf-test-setup; tests the environment cannot run are reported for a step approver's test-risk decision, never faked.

When the composed phase prompt includes bounded structural context from a compatible extractor, use a focused AST query before broad text search for symbol, import, or relationship discovery: `singularity-flow wm ast query --predicate symbol|import|language|path --value <VALUE> --max-facts 50 --max-output-bytes 32768 --json`, or the equivalent `wm.ast.query` gateway read. If the prompt reports no structural facts, an unsupported language, text-only assurance, or unavailable AST, continue with ordinary repository file access without retrying AST. Follow `nextCursor` only while the question remains unanswered. Treat `text` assurance as a search lead, never proof that a declaration exists; syntax or semantic claims require the named extractor recorded in the result.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, focus on implementation blockers or approved-specification deviations. Do not reopen settled product or architecture choices.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-4801fc48e09496dce57a51eb at 319abc8cda12 (for implementation, focused on this Story)

## What a change touches
- src/App.jsx (planned): on app start → App, keydown → App.handleKeyDown; imported by 2 files; 17 rules; tested by App.test.jsx

## Rules that apply
- NEW-GRAPJ:REQ-003: The graphing workspace shall show an expression list on the left and a Cartesian grid with labeled axes on the right, along with visible add, undo, redo, settings, panel-collapse, graph-tool, zoom-in, and zoom-out controls; pixel-identical styling is not required. *(S3)*. Documented; no code enforci… (spec.md › NEW-GRAPJ:REQ-003)
- NEW-GRAPJ:AC-001: A Playwright test shall verify that the rendered circle is centered at the origin and has radius 6 units. *(S2)*. Documented; no code enforcing it was found. (spec.md › NEW-GRAPJ:AC-001)
- NEW-GRAPJ:AC-002: Visual acceptance shall confirm the workspace structure and visible controls in `NEW-GRAPJ:REQ-003`. *(S3)*. Documented; no code enforcing it was found. (spec.md › NEW-GRAPJ:AC-002)

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

- … 36 more: singularity-flow wm brief --phase implementation

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; a check whose `testResult.reused` is set is that run on this same source tree, not run again because the code did not change, so cite its attempt ID and counts as you would a fresh run: no fresh run is missing. Command success alone proves neither every criterion nor visual acceptance; `criterionTests` joins each criterion to its own tagged tests in those runs, and `established` there means each passed through its own result on this source tree, so that criterion (and a clause verified through it) has its test evidence. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:5e38123c6dc873e3d5d7476effa52323a93a2f25981f0db2075aec2351000f1d. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 2 (`singularity/work-items/new-grapj/submissions/specification/1ee4c7e619e301790c78236d581cffa1a4bbcefcf0ddeb7a0fafecb6e079a319.json`), planning generation 1 (`singularity/work-items/new-grapj/submissions/planning/f46064f8d0474165bf7f86199f4ac64ab5627a36911eba545648fab8978bc0bf.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: `/sf-appeal`
- Shell: `singularity-flow appeal repair-plan --work-id new-grapj --phase implementation --json`
- VS Code (model-free): not available for this action

- Copilot: `/sf-phase-documents implementation`
- Shell: `singularity-flow phase show implementation --json`
- VS Code (model-free): not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. A run reused on the same source tree is evidence for this step as well: no fresh run is missing. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection; a criterion whose test evidence it lists as established, and a clause verified through it, is not partial or missing for want of tests. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:7f02fe9a7e137d0405a9eac2936f83e266d55a1303a70666e8f169c44c8f766d
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 2: no test execution is retained in this packet; this does not establish a separate test run.
- planning generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- implementation generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
