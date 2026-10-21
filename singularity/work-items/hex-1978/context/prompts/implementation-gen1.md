# Active Story phase contract: Implementation

- Work ID: `hex-1978`
- Requested outcome: hex — implement hex operator in calculator (full request: Pinned Story source below); refined by this step's approved inputs from specification, planning (Approved upstream artifact evidence below), which settle its detail
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
- Exact publication command: `singularity-flow phase publish implementation --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved inputs are fixed evidence. If wrong, incomplete or contradictory, do not edit it and do not stop: use the most conservative reading consistent with the pinned source. Under `## Upstream discrepancies` list producer phase, clause/section, problem, assumption, impact and owner action. Include every affected qualified clause ID in Impact/Clause, also for section issues; cite existing UPI-IDs in comparison rows, never duplicate them. Missing evidence belongs to its producer, not automatically the code phase. File new items once with `singularity-flow upstream-issue raise --from-artifact`; producer approvers decide. Stop only for a refusal about changed or unapproved input bytes (use its restore/return route), or when no reading satisfies the pinned source: then (ask the person only if clarification permits) raise `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/hex-1978`
- Required artifact: `singularity/work-items/hex-1978/artifacts/implementation/implementation-summary.md`
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

# hex-1978 — Implementation Summary

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

TODO: Cite exact changed product-source paths and the qualified `@clause:HEX-1978:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:HEX-1978:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

# Approved upstream artifact evidence

These are this step's inputs: the approved outputs of the steps before it, delivered here so nothing needs to be searched for. They refine the Pinned Story source below, and what they state is settled: never ask a question they answer. Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/hex-1978/artifacts/specification/spec.md sha256=c3b6ad4a53f8879b7ab1c3e6728a60a02a00ecff94a396e0161ffb95655158ae status=captured projection=approved-summary -->

# Approved agent brief — Specification

- Producer: `specification` generation 1; source `singularity/work-items/hex-1978/artifacts/specification/spec.md`

## Summary from “Agent brief”

Add a `hex` button to the calculator so a user can convert a displayed positive decimal integer to its hexadecimal value. The confirmed acceptance example is decimal `2`, whose hexadecimal result is `2`; the requested verification includes a screenshot of that result and a test for the button and conversion. Negative, zero, and non-integer inputs are outside the confirmed scope. No additional formatting, error behavior, or numeric limit is specified.

## Actors

The calculator user invokes the conversion. No separate roles or permissions are specified.

## User scenarios

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator displays the positive decimal integer `2`.

- **Given** the calculator displays decimal `2`
  **When** the user activates the `hex` button
  **Then** the calculator displays its hexadecimal value, `2`.

## Failure and empty states

- **Empty:** Behavior with no displayed positive integer is not specified.
- **Failure:** No conversion failure behavior is specified for the in-scope positive integer input.
- **Partial:** Not applicable; the confirmed scenario is one calculator display conversion with no described external side effects.

## Permissions

Not applicable: the Story specifies a calculator operation and no role-based access.

## Boundary conditions

The confirmed input domain is positive integers. The requested example is decimal `2`. Zero, negative, and non-integer inputs are outside the confirmed scope; their behavior is not specified. No maximum positive integer or additional output-format convention is specified.

## Requirements

- Activating the calculator's `hex` button converts the currently displayed positive decimal integer to its hexadecimal value. *(S1)* [HEX-1978:REQ-001]
- The calculator UI exposes a button labeled `hex` for requesting that conversion. *(S1)* [HEX-1978:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- A screenshot of the calculator shows the hexadecimal result `2` for decimal input `2`. *(S1)* [HEX-1978:AC-001] [scope:SRI-77b88f6611a7]
- An executable test verifies that the calculator exposes the `hex` button and that activating it for decimal input `2` displays hexadecimal `2`. *(S1)* [HEX-1978:AC-002] [scope:SRI-77b88f6611a7]

## Non-functional requirements

Not applicable: no non-functional requirements are stated in the pinned request or recorded clarification.

## Assumptions

The `hex` button acts on the calculator's currently displayed value. The requested conversion is from a positive decimal integer to its base-16 value.

## Out of scope

Negative, zero, and non-integer input behavior; hexadecimal arithmetic mode; output prefixes or formatting beyond the specified result `2`; and any numeric maximum are not specified by this Story.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:hex-1978:4910b88b369cc7091d486b22e913fd3ac7b9287f9a9e7ad453e1294f08c0a429 --section "<heading>"`.

## Approved phase input: planning

<!-- source=singularity/work-items/hex-1978/artifacts/planning/plan.md sha256=addf41b9b8120ce1cc603d6bf413cb302c2531f7272d66015df41d37cecc8018 status=captured projection=approved-summary -->

# Approved agent brief — Planning

- Producer: `planning` generation 2; source `singularity/work-items/hex-1978/artifacts/planning/plan.md`

## Summary from “Agent brief”

Add a `hex` action to the existing calculator keypad and handle conversion in the shared calculator state in `src/App.jsx`. Keep it available in standard and scientific modes through their shared keypad component. Add an App interaction test for the approved decimal `2` to hexadecimal `2` example and retain the required screenshot at `singularity/work-items/hex-1978/evidence/hex-result-2.png`. Do not extend behavior for zero, negative, or non-integer inputs. The main risks are affecting existing calculator state or exposing the action in only one mode; the interaction test and visual review address those risks. [HEX-1978:REQ-001] [HEX-1978:REQ-002] [HEX-1978:AC-001] [HEX-1978:AC-002]

## Test strategy

Prove conversion and control behavior with the App-level interaction test. Retain and visually review a screenshot independently for AC-001; file presence alone is not a passing visual review. No test result or screenshot is claimed by this plan. [HEX-1978:AC-001] [HEX-1978:AC-002] [HEX-1978:REQ-001] [HEX-1978:REQ-002]

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-1978:AC-001` | `singularity/work-items/hex-1978/evidence/hex-result-2.png` | `src/App.test.jsx` | evidence | Screenshot shows hexadecimal result `2` for decimal input `2`; visual review uses the retained screenshot. |
| `HEX-1978:AC-002` | `src/App.jsx` `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | Test activates the `hex` button after entering `2` and observes result `2`. |
| `HEX-1978:REQ-001` | `src/App.jsx` `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | Activating `hex` converts the displayed positive decimal integer and updates the result. |
| `HEX-1978:REQ-002` | `src/components/StandardKeypad.jsx` | `src/App.test.jsx` | modified | The calculator exposes a button labeled `hex` in standard and scientific modes. |

## Risks and rollback

The handler could use stale state or update only one mode; test through the UI and verify the displayed result, and visually review the retained screenshot. If normal digit entry, arithmetic, or unrelated keypad behavior regresses, revert the scoped handler/keypad/test changes and run the existing regression suite. Do not invent error handling or behavior for zero, negative, or non-integer values, which remain out of scope. [HEX-1978:REQ-001] [HEX-1978:REQ-002] [HEX-1978:AC-001] [HEX-1978:AC-002]

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:hex-1978:ebb8234ea92e44943be035bde7d78bbf46e7bf9c40fbff3580c5e71c9cc048e3 --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/hex-1978/source.json`
- SHA-256: `78f3669e29ca2f1aadccdcba28cf845d58b1be20e3e3524c01600c414ee2c04b`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. Then propose it from this step with `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"` (it amends the approved scope of `specification`); no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "hex-1978",
  "title": "hex",
  "description": "implement hex operator in calculator",
  "acceptanceCriteria": "screenshot and test cases"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "hex-1978",
  "phase": "implementation",
  "capsuleSha256": "sha256:8144c974ed987598fc377bc4ef478e110e7fcc6bb47091e0a6d3e23c6c5101ab",
  "sources": [{"id":"S1","path":"singularity/work-items/hex-1978/artifacts/specification/spec.md","sha256":"sha256:c3b6ad4a53f8879b7ab1c3e6728a60a02a00ecff94a396e0161ffb95655158ae"}],
  "clauses": [{"id":"HEX-1978:AC-001","source":"S1","line":338,"text":"A screenshot of the calculator shows the hexadecimal result `2` for decimal input `2`. *(S1)* [scope:SRI-77b88f6611a7]","verification":{"criterionId":"HEX-1978:AC-001","methods":["visual"]}},{"id":"HEX-1978:AC-002","source":"S1","line":339,"text":"An executable test verifies that the calculator exposes the `hex` button and that activating it for decimal input `2` displays hexadecimal `2`. *(S1)* [scope:SRI-77b88f6611a7]","verification":{"criterionId":"HEX-1978:AC-002","methods":["test"]}},{"id":"HEX-1978:REQ-001","source":"S1","line":333,"text":"Activating the calculator's `hex` button converts the currently displayed positive decimal integer to its hexadecimal value. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"HEX-1978:REQ-002","source":"S1","line":334,"text":"The calculator UI exposes a button labeled `hex` for requesting that conversion. *(S1)*","verification":{"criterionId":null,"methods":["test"]}}]
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

# Repository brief: .w-78a5945e0617048a17345251 at 3a1677f95643 (for implementation, focused on this Story)

## What a change touches
- src/App.jsx (planned): on app start → App, keydown → App.handleKeyDown; imported by 2 files; 17 rules; tested by App.test.jsx
- src/components/StandardKeypad.jsx (planned): on onClick on <element> in StandardKeypad.jsx; imported by 1 file

## Rules that apply
- App.handleKeyDown: when `key >= '0' && key <= '9'` → does `playSound('digit', soundEnabled)`. Not documented, enforced, no test reaches it. (App.jsx:162)
- calculateCompoundInterest: computes `const amount = P * Math.pow(1 + r / n, n * t)`. Not documented, enforced, no test reaches it. (evaluator.js:191)
- calculateCompoundInterest: when `isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0` → returns `{ amount: 0, interest: 0 }`. Not documented, enforced, no test reaches it. (evaluator.js:187)
- calculateEMI: computes `const emi = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)`. Not documented, enforced, no test reaches it. (evaluator.js:170)

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

- … 30 more: singularity-flow wm brief --phase implementation

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:f80e14218f9eddb9812fa227f7173afed8ce293d36a881ece4a3dd52688a1f49. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 1 (`singularity/work-items/hex-1978/submissions/specification/ee2dc73360b8528dfb4bc53e08ca8e813648500616623867c5a8570f95804ee3.json`), planning generation 2 (`singularity/work-items/hex-1978/submissions/planning/b2ddfd9a9ae48a03af839612c62d00bd3a7a23730d757187ec5c6bfa231eed47.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id hex-1978 --phase implementation --json; VS Code: not available for this action
- Copilot: /sf-phase-documents implementation; Shell: singularity-flow phase show implementation --json; VS Code: not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:a33a905ded9f05f5239b885d3ff267f44ef159f0a54bf11f5c2ccb97c38778fe
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- planning generation 2: no test execution is retained in this packet; this does not establish a separate test run.
- implementation generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
