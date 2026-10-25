# Active Story phase contract: Implementation

- Work ID: `fact-01`
- Requested outcome: combination — Add a nCr function .The combination of 1 items in r ways .only positive integers (full request: Pinned Story source below); refined by this step's approved inputs from specification, planning (Approved upstream artifact evidence below), which settle its detail
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
- Clause IDs: this step defines no new clauses. Cite an approved clause by its full ID, such as `FACT-01:REQ-001`, never a bare `REQ-001`, and number no new `REQ-`/`AC-` items; this overrides agent or skill guidance that numbers them.
- Exact publication command: `singularity-flow phase publish implementation --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved inputs are fixed evidence. If wrong, incomplete or contradictory, do not edit it and do not stop: use the most conservative reading consistent with the pinned source. Under `## Upstream discrepancies` list producer phase, clause/section, problem, assumption, impact and owner action. Include every affected qualified clause ID in Impact/Clause, also for section issues; cite existing UPI-IDs in comparison rows, never duplicate them. Missing evidence belongs to its producer, not automatically the code phase. File new items once with `singularity-flow upstream-issue raise --from-artifact`; producer approvers decide. Stop only for a refusal about changed or unapproved input bytes (use its restore/return route), or when no reading satisfies the pinned source: then (ask the person only if clarification permits) raise `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/fact-01`
- Required artifact: `singularity/work-items/fact-01/artifacts/implementation/implementation-summary.md`
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

# fact-01 — Implementation Summary

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

TODO: Cite exact changed product-source paths and the qualified `@clause:FACT-01:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:FACT-01:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

# Approved upstream artifact evidence

These are this step's inputs: the approved outputs of the steps before it, delivered here so nothing needs to be searched for. They refine the Pinned Story source below, and what they state is settled: never ask a question they answer. Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/fact-01/artifacts/specification/spec.md sha256=776144012d8db36ba94adce8c3eb8194e8cb31c6bd2f6824ed56a381558d2e74 status=captured projection=approved-summary -->

# Approved agent brief — Specification

- Producer: `specification` generation 1; source `singularity/work-items/fact-01/artifacts/specification/spec.md`

## Summary from “Agent brief”

Add an nCr calculation function and expose it through the calculator UI. For positive integer inputs n and r, calculate the number of ways to choose r items from n; return 0 when r > n, and reject non-integer or non-positive inputs. A screenshot must show a representative input and its correct result, such as 5 choose 2 = 10. No new controls, wording, roles, or non-functional constraints are specified.

## Actors

Not applicable: the Story specifies no roles or authorization; the feature is for calculator users.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Calculate a combination in the calculator

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the user wants to count selections of r items from n.

- **Given** the user supplies n = 5 and r = 2 through the calculator UI
  **When** the user requests an nCr calculation
  **Then** the UI displays the result 10.

- **Given** positive integer inputs n and r with r <= n
  **When** the user requests an nCr calculation
  **Then** the callable function returns the number of ways to choose r items from n.

### S2 — Handle input boundaries

**Priority:** P2

- **Given** positive integer inputs with r > n
  **When** the user requests an nCr calculation
  **Then** the function returns 0.

- **Given** either input is not an integer or is not positive
  **When** the user requests an nCr calculation
  **Then** the input is rejected and no nCr result is produced.

- **Given** n or r has not been supplied
  **When** the user requests an nCr calculation
  **Then** no nCr result is produced until both inputs are supplied as positive integers.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No result is produced until both n and r are supplied as positive integers.
- **Failure:** Non-integer and non-positive inputs are rejected without producing an nCr result; no particular error wording is specified.
- **Partial:** Not applicable: the Story specifies a single calculation and no partial or external operation.

## Permissions

Not applicable: no role-based permissions or restricted actions are specified.

## Boundary conditions

n and r must be positive integers. If r <= n, the function returns the combination count; if r > n, it returns 0. Non-integer and non-positive inputs are rejected. No maximum input size or other numeric limit is specified.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- For positive integer n and r where r <= n, the callable nCr function returns the integer count of ways to choose r items from n; for example, nCr(5, 2) returns 10. *(S1)* [FACT-01:REQ-001]
- The calculator UI lets a user supply n and r and request an nCr calculation, then displays the computed result for valid inputs. *(S1)* [FACT-01:REQ-002]
- The function returns 0 for positive integer inputs where r > n. *(S2)* [FACT-01:REQ-003]
- The function rejects inputs where either value is not an integer or is not positive without producing an nCr result; no result is produced until both inputs are supplied. *(S2)* [FACT-01:REQ-004]

Acceptance criteria use the same stable, namespaced form:

- A screenshot shows the calculator UI with a representative nCr input and its correct output, such as n = 5, r = 2, result = 10. [scope:SRI-35efa5d9d09b] *(S1)* [FACT-01:AC-001]

## Non-functional requirements

Not applicable: the pinned request and clarification specify no non-functional requirements.

Use governed requirement anchors here too (for example `[FACT-01:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Assumptions

The request's nCr notation means choosing r items from n items. The function and calculator UI are part of the requested feature; exact UI controls and error wording are not specified.

## Out of scope

No additional calculator features, APIs, roles, or constraints beyond the nCr function, UI exposure, positive-integer validation, r > n behavior, and screenshot acceptance are in scope.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:fact-01:48cdc511ca1f87c510bd8886a7aebfaecee67a2ecb57b20aa68c6efb058f0600 --section "<heading>"`.

## Approved phase input: planning

<!-- source=singularity/work-items/fact-01/artifacts/planning/plan.md sha256=21f25ac9b661d768a7d2993e00919ef30c1e2b481f3d90abf2df38f08758619b status=captured projection=approved-summary -->

# Approved agent brief — Planning

- Producer: `planning` generation 2; source `singularity/work-items/fact-01/artifacts/planning/plan.md`

## Summary from “Agent brief”

Add a callable nCr calculation alongside the existing evaluator utilities, then expose it through a focused calculator UI with separate n and r inputs and an explicit calculate action. Keep validation in the callable function so both direct callers and the UI share the same positive-integer and r > n behavior. Verify the function and UI with Vitest, and capture the required representative result as source-bound screenshot evidence. The main risks are input/result precision at large values and ensuring invalid or incomplete inputs never leave a stale result visible.

## Test strategy

Use the unit tests for deterministic function behavior and application-level interaction tests for UI submission and result state. Retain the visual evidence separately; automated test success does not constitute visual acceptance.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `FACT-01:AC-001` | `singularity/work-items/fact-01/evidence/ncr-result.png` | verification: FACT-01:AC-001 | evidence | Screenshot shows n = 5, r = 2 and the displayed result 10. |
| `FACT-01:REQ-001` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | The callable function returns an exact BigInt count; nCr(5, 2) is 10n and nCr(67, 33) is 14226520737620288370n. |
| `FACT-01:REQ-002` | `src/components/CombinationCalculator.jsx` `src/App.jsx` | `src/App.test.jsx` | modified | A user can enter both values, request a calculation, and see the valid result. |
| `FACT-01:REQ-003` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | modified | Positive integer inputs with r > n return 0. |
| `FACT-01:REQ-004` | `src/utils/evaluator.js` `src/components/CombinationCalculator.jsx` | `src/utils/evaluator.test.js` `src/App.test.jsx` | modified | Non-integer, non-positive, or missing values produce no nCr result. |

## Risks and rollback

The callable API will return `BigInt`; callers must not coerce its result to `Number`, and the UI must render the decimal string directly. This preserves exact integer counts without imposing an input-size cap in the feature contract. Very large inputs may still require substantial computation, so use the symmetry-reduced algorithm and avoid duplicating the calculation. Invalid or incomplete submissions can leave stale output visible, so tests must assert that no nCr result is produced in those states. The change is isolated to the new utility behavior and focused UI; rollback can remove the component integration and utility export while retaining existing calculator modes and evaluator behavior.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:fact-01:b5ca9d1ea30219c6f73ceaac9d4750f5991ec65af3437db59194995b5700ac06 --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/fact-01/source.json`
- SHA-256: `998e7f5318d6f2f94edef4ef6b52c66144001ec736e4a9d6e1d83ba54307da0c`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. Then propose it from this step with `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"` (it amends the approved scope of `specification`); no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "fact-01",
  "title": "combination",
  "description": "Add a  nCr function .The combination of 1 items in r ways .only positive integers",
  "acceptanceCriteria": "screenshot"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "fact-01",
  "phase": "implementation",
  "capsuleSha256": "sha256:4f80eea43276040a7ff156325922b420e5b818b325fe52f69f622c122754d7a7",
  "sources": [{"id":"S1","path":"singularity/work-items/fact-01/artifacts/specification/spec.md","sha256":"sha256:776144012d8db36ba94adce8c3eb8194e8cb31c6bd2f6824ed56a381558d2e74"}],
  "clauses": [{"id":"FACT-01:AC-001","source":"S1","line":369,"text":"A screenshot shows the calculator UI with a representative nCr input and its correct output, such as n = 5, r = 2, result = 10. [scope:SRI-35efa5d9d09b] *(S1)*","verification":{"criterionId":"FACT-01:AC-001","methods":["visual"]}},{"id":"FACT-01:REQ-001","source":"S1","line":362,"text":"For positive integer n and r where r <= n, the callable nCr function returns the integer count of ways to choose r items from n; for example, nCr(5, 2) returns 10. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"FACT-01:REQ-002","source":"S1","line":363,"text":"The calculator UI lets a user supply n and r and request an nCr calculation, then displays the computed result for valid inputs. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"FACT-01:REQ-003","source":"S1","line":364,"text":"The function returns 0 for positive integer inputs where r > n. *(S2)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"FACT-01:REQ-004","source":"S1","line":365,"text":"The function rejects inputs where either value is not an integer or is not positive without producing an nCr result; no result is produced until both inputs are supplied. *(S2)*","verification":{"criterionId":null,"methods":["test"]}}]
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

# Repository brief: .w-ebfc34dfceaf41980e3899f0 at 1df8a1ca58d1 (for implementation, focused on this Story)

## What a change touches
- src/utils/evaluator.js (planned): on app start → App; imported by 3 files; 25 rules; tested by evaluator.test.js
- src/App.jsx (planned): on app start → App, keydown → App.handleKeyDown; imported by 2 files; 17 rules; tested by App.test.jsx

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

Projection: sha256:65347eaa50a28cf1c699d10e73b51a2b81b5131dfb947434c4ce837042a0ec6b. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 1 (`singularity/work-items/fact-01/submissions/specification/64f4b86bb0b8804db9537664d474c9ff8f3cad293842cd43ef32e85d41547fb4.json`), planning generation 2 (`singularity/work-items/fact-01/submissions/planning/58d8427656644d9fb5d141e9498702d75a99cdaa5dc385f5fdb21cb0157de9d5.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id fact-01 --phase implementation --json; VS Code: not available for this action
- Copilot: /sf-phase-documents implementation; Shell: singularity-flow phase show implementation --json; VS Code: not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:b517626060fcc6114ad305b87fe989d6b6b8e7691532e44f29fe938157d9fd3e
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- planning generation 2: no test execution is retained in this packet; this does not establish a separate test run.
- implementation generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
