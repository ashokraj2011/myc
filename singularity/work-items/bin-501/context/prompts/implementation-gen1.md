# Active Story phase contract: Implementation

- Work ID: `bin-501`
- Requested outcome: bin — calculator function to convert decimal to binary (full request: Pinned Story source below); refined by this step's approved inputs from specification, planning (Approved upstream artifact evidence below), which settle its detail
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
- Upstream discrepancies: approved earlier-phase artifacts are fixed evidence. If one is wrong, incomplete or contradicts another input or the pinned source, do not edit it and do not stop: continue on the most conservative reading consistent with the pinned source, and list each item under `## Upstream discrepancies` (producer phase, exact clause or section, problem, assumption used, impact, proposed owner action), then file them once with `singularity-flow upstream-issue raise --from-artifact`; the producer's approvers decide them. Stop only for a refusal about changed or unapproved input bytes (use its restore or return route), or when no reading satisfies the pinned source: then (after asking the person, if this step's clarification mode allows questions) raise it with `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/bin-501`
- Required artifact: `singularity/work-items/bin-501/artifacts/implementation/implementation-summary.md`
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

# bin-501 — Implementation Summary

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

TODO: Cite exact changed product-source paths and the qualified `@clause:BIN-501:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:BIN-501:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source. For configuration or documentation outcomes, cite the build, CI or inspection result that shows the outcome holds, and write `Not applicable: <reason>` for tags.

# Approved upstream artifact evidence

These are this step's inputs: the approved outputs of the steps before it, delivered here so nothing needs to be searched for. They refine the Pinned Story source below, and what they state is settled: never ask a question they answer. Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/bin-501/artifacts/specification/spec.md sha256=4641cb957c5280a4f23e6f23fe98cda695d1ba938c4c76cf5467651a6b369134 status=captured projection=approved-summary -->

# Approved agent brief — Specification

- Producer: `specification` generation 1; source `singularity/work-items/bin-501/artifacts/specification/spec.md`

## Summary from “Agent brief”

Provide a calculator function that converts a whole-number decimal input to its base-2 representation. The function is the feature boundary; this Story does not add UI or API scope. Acceptance requires executable test cases for the conversion and screenshot evidence of an observed conversion. Fractional inputs are outside the clarified scope.

## Actors

The caller supplies a whole-number decimal value to the calculator function. No separate roles, access controls, or UI/API actors are specified. A reviewer evaluates the requested test-case and screenshot evidence.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert a whole-number decimal value

**Priority:** P1
**Actor:** Caller of the calculator function
**Context:** The function is available to receive a whole-number decimal input.

- **Given** the caller supplies the whole-number decimal value zero
  **When** the caller invokes the conversion function
  **Then** the returned base-2 representation denotes the same numeric value, zero.

- **Given** the caller supplies a positive whole-number decimal value
  **When** the caller invokes the conversion function
  **Then** the returned base-2 representation denotes the same numeric value as the input.

### S2 — Verify the conversion

**Priority:** P2
**Actor:** Test/evidence reviewer
**Context:** The conversion function is available for verification.

- **Given** the conversion function and a whole-number decimal input
  **When** its acceptance evidence is prepared
  **Then** executable test cases check the conversion behavior and a screenshot shows a decimal input with its corresponding binary result, without requiring a new UI or API.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** Not applicable; the requested function converts an input and has no records or collection state.
- **Failure:** The Story does not define failure behavior for values outside the specified whole-number domain, nor an error format or message.
- **Partial:** No partial-result behavior is specified for this function.

## Permissions

Not applicable: no authorization roles or permission-controlled behavior are specified for the conversion function.

## Boundary conditions

The clarified input domain is whole-number decimal values, including zero and positive whole numbers. Fractional decimal values are outside scope. The Story specifies no upper bound, numeric representation limit, output formatting rule beyond base-2 equivalence, or behavior for invalid inputs; this specification does not invent them.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- The calculator function shall convert a whole-number decimal input to a base-2 representation denoting the same numeric value. *(S1)* [BIN-501:REQ-001]
- The acceptance package shall include executable test cases that verify the whole-number decimal-to-binary conversion behavior. *(S2)* [BIN-501:REQ-002]
- The acceptance package shall include screenshot evidence showing a whole-number decimal input and its corresponding binary result; this evidence requirement does not add UI or API scope. *(S2)* [BIN-501:REQ-003] [scope:SRI-2882cd00cb19]

Acceptance criteria use the same stable, namespaced form:

- Acceptance evidence includes executable test cases for the conversion behavior and a screenshot showing a whole-number decimal input with its corresponding base-2 result. *(S2)* [BIN-501:AC-001] [scope:SRI-2882cd00cb19]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Not applicable: no non-functional requirement is stated in the pinned Story or its clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The calculator function is the requested interface; no additional UI or API is part of this Story. The function's concrete output type and representable numeric limits are not specified.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Additional UI or API scope and fractional decimal inputs are out of scope. Error handling for inputs outside the clarified whole-number domain is unspecified.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:bin-501:eff6fa9de63ff77994ded669856db2b9879f95e067d91c8557693d9c9686aaeb --section "<heading>"`.

## Approved phase input: planning

<!-- source=singularity/work-items/bin-501/artifacts/planning/plan.md sha256=b68055aada83f3116aec48f5c715ec244a48eac18f7b4d9645cb4a1e2947bc3c status=captured projection=approved-summary -->

# Approved agent brief — Planning

- Producer: `planning` generation 1; source `singularity/work-items/bin-501/artifacts/planning/plan.md`

## Summary from “Agent brief”

Add a named decimal-to-binary conversion export to the existing evaluator utility rather than introducing a new UI or API. Keep the behavior small and independently testable; add Vitest cases to the evaluator utility suite for zero and positive whole-number values. Retain screenshot proof at `singularity/work-items/bin-501/evidence/decimal-to-binary.png`, capturing an actual input/result pair without expanding product scope. Main risks are choosing a stable return representation and ensuring the screenshot reflects a real invocation; the approved specification leaves type, numeric bounds, and invalid-input behavior open, so do not invent requirements for them. [BIN-501:REQ-001] [BIN-501:REQ-002] [BIN-501:REQ-003] [BIN-501:AC-001]

## Test strategy

Each clause is covered below with executable tests or retained visual evidence, without weakening the approved methods. Add exactly one row per clause, using its
fully qualified ID (for example, `BIN-501:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `bin-501`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `BIN-501:AC-001` | `singularity/work-items/bin-501/evidence/decimal-to-binary.png` | `src/utils/evaluator.test.js` | evidence | Executable conversion cases pass and the retained screenshot shows a whole-number decimal input with its corresponding base-2 result. |
| `BIN-501:REQ-001` | `src/utils/evaluator.js` | `src/utils/evaluator.test.js` | new | Invoking the exported utility with zero and positive whole-number decimal inputs returns base-2 representations of the same numeric values. |
| `BIN-501:REQ-002` | - | `src/utils/evaluator.test.js` | test-only | The executable Vitest cases verify conversion behavior for zero and positive whole-number inputs. |
| `BIN-501:REQ-003` | `singularity/work-items/bin-501/evidence/decimal-to-binary.png` | `src/utils/evaluator.test.js` | evidence | The retained screenshot visibly pairs one whole-number decimal input with its corresponding binary result; it does not imply new UI/API scope. |

## Risks and rollback

The specification does not define a concrete return type, maximum supported value, or invalid-input behavior. Keep implementation to the clarified whole-number domain and validate exact numeric equivalence; do not silently add constraints or error semantics. A screenshot that merely shows a file or test result without the observed decimal input and binary result would not satisfy the visual obligation, so review the actual captured contents. Rollback is limited to reverting the utility and its tests and removing the Story evidence file; no persisted data or configuration changes are planned. [BIN-501:REQ-001] [BIN-501:REQ-003] [BIN-501:AC-001]

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:bin-501:a129ab31216bd68bba3cf68defe882438f124ecf0e5aefe1cd2792ba48caa97a --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/bin-501/source.json`
- SHA-256: `216bd2a30213fc22e75610021d581ac239866823e84e5d223c2d916658fc4f05`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. Then propose it from this step with `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"` (it amends the approved scope of `specification`); no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "bin-501",
  "title": "bin",
  "description": "calculator function to convert decimal to binary",
  "acceptanceCriteria": "screenshot and testcases"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "bin-501",
  "phase": "implementation",
  "capsuleSha256": "sha256:2b95b37e678557afb3d191eec3ca5530cbfe128cc2537cf3ff6d5e551316b1f1",
  "sources": [{"id":"S1","path":"singularity/work-items/bin-501/artifacts/specification/spec.md","sha256":"sha256:4641cb957c5280a4f23e6f23fe98cda695d1ba938c4c76cf5467651a6b369134"}],
  "clauses": [{"id":"BIN-501:AC-001","source":"S1","line":361,"text":"Acceptance evidence includes executable test cases for the conversion behavior and a screenshot showing a whole-number decimal input with its corresponding base-2 result. *(S2)* [scope:SRI-2882cd00cb19]","verification":{"criterionId":"BIN-501:AC-001","methods":["test","visual"]}},{"id":"BIN-501:REQ-001","source":"S1","line":355,"text":"The calculator function shall convert a whole-number decimal input to a base-2 representation denoting the same numeric value. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"BIN-501:REQ-002","source":"S1","line":356,"text":"The acceptance package shall include executable test cases that verify the whole-number decimal-to-binary conversion behavior. *(S2)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"BIN-501:REQ-003","source":"S1","line":357,"text":"The acceptance package shall include screenshot evidence showing a whole-number decimal input and its corresponding binary result; this evidence requirement does not add UI or API scope. *(S2)* [scope:SRI-2882cd00cb19]","verification":{"criterionId":"BIN-501:AC-001","methods":["visual"]}}]
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
- Use a file-edit tool to stage only {"responses":[...]} at the issued responseStagingPath (standalone discovery: `git rev-parse --git-path singularity-flow/clarification-responses/implementation-gen<N>.json`). Run the returned recordAction or standalone `singularity-flow clarification record implementation --response-file <that-path>`, without shell chains, then remove staging with a file-edit tool only after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
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

# Repository brief: .w-cf666584b390858c82dd6b6d at bafdcc8dd838 (for implementation, focused on this Story)

## What a change touches
- src/utils/evaluator.js (planned): on app start → App; imported by 4 files; 25 rules; tested by evaluator.test.js

## Rules that apply
- BIN-501:REQ-001: The calculator function shall convert a whole-number decimal input to a base-2 representation denoting the same numeric value. *(S1)*. Documented; no code enforcing it was found. (spec.md › BIN-501:REQ-001)
- BIN-501:REQ-002: The acceptance package shall include executable test cases that verify the whole-number decimal-to-binary conversion behavior. *(S2)*. Documented; no code enforcing it was found. (spec.md › BIN-501:REQ-002)
- BIN-501:REQ-003: The acceptance package shall include screenshot evidence showing a whole-number decimal input and its corresponding binary result; this evidence requirement does not add UI or API scope. *(S2)* [scope:SRI-2882cd00cb19]. Documented; no code enforcing it was found. (spec.md › BIN-501:REQ-003)

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

- … 34 more: singularity-flow wm brief --phase implementation

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:c1cf8e7ff9ef2fa80c1b753b7a376d619d84352fe6260796caa0a0306b298bdb. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 1 (`singularity/work-items/bin-501/submissions/specification/4fab1e68eec8a642b764fd4d1d094bf2301ae3a0f7800d03a68462286eef28b5.json`), planning generation 1 (`singularity/work-items/bin-501/submissions/planning/5c8ffa4f3d84ffa428a5f66efec8a6a1cb8733a0cecbbc02d66476c21a82f9e7.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id bin-501 --phase implementation --json; VS Code: not available for this action
- Copilot: /sf-phase-documents implementation; Shell: singularity-flow phase show implementation --json; VS Code: not available for this action

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
