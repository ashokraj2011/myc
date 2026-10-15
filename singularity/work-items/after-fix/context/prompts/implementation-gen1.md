# Active Story phase contract: Implementation

- Work ID: `after-fix`
- Requested outcome: fix — Implement hex operator (full request: Pinned Story source below)
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
- Exact publication command: `singularity-flow phase publish implementation --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing package scripts just to emit its configured report.
- Upstream discrepancies: approved earlier-phase artifacts are fixed evidence. If one is wrong, incomplete or contradicts another input or the pinned source, do not edit it and do not stop: continue on the most conservative reading consistent with the pinned source, and list each item under `## Upstream discrepancies` (producer phase, exact clause or section, problem, assumption used, impact, proposed owner action), then file them once with `singularity-flow upstream-issue raise --from-artifact`; the producer's approvers decide them. Stop only for a refusal about changed or unapproved input bytes (use its restore or return route), or when no reading satisfies the pinned source.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. Account for tooling under Supporting files with a reason, or use fulfillment configuration for a requirement changing runtime settings. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/after-fix`
- Required artifact: `singularity/work-items/after-fix/artifacts/implementation/implementation-summary.md`
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

# after-fix — Implementation Summary

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

TODO: Cite exact changed product-source paths and the qualified `@clause:after-fix:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:after-fix:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source.

# Pinned Story source

- Immutable source: `singularity/work-items/after-fix/source.json`
- SHA-256: `92bdbeb174685b0606b1f8d0a05700da09a818b9124c4e498c6d22cef721807a`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. After scope approval, any active phase in any workflow can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Before scope approval, record the human change in clarification and revise/review the scope draft normally; never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "after-fix",
  "title": "fix",
  "description": "Implement hex operator",
  "acceptanceCriteria": "test cases"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "after-fix",
  "phase": "implementation",
  "capsuleSha256": "sha256:5b776e65dfb63d11f49ff9fbdeca10e282c3fcc46226d16dca6134d70b2592cd",
  "sources": [{"id":"S1","path":"singularity/work-items/after-fix/artifacts/specification/spec.md","sha256":"sha256:cf9462a6ce04efe42e45ecd3d30efc7a5c25c8ee3648c58e007be14507644a75"}],
  "clauses": [{"id":"AFTER-FIX:AC-001","source":"S1","line":339,"text":"Converting `1`, `26`, and `255` shall produce `0x1`, `0x1A`, and `0xFF`, respectively, with the successful cases exercised through the keypad and keyboard interaction paths. *(S1)*","verification":{"criterionId":"AFTER-FIX:AC-001","methods":["inspection","test"]}},{"id":"AFTER-FIX:AC-002","source":"S1","line":340,"text":"Attempting conversion with blank input, `0`, a negative integer, a fraction, or non-numeric input shall display an error and shall not display a hexadecimal result. *(S2)*","verification":{"criterionId":"AFTER-FIX:AC-002","methods":["test","visual"]}},{"id":"AFTER-FIX:AC-003","source":"S1","line":341,"text":"Automated test cases shall verify successful conversion, both interaction surfaces, uppercase prefixed formatting, and each declared invalid or empty input category. *(S1, S2)*","verification":{"criterionId":"AFTER-FIX:AC-003","methods":["inspection"]}},{"id":"AFTER-FIX:REQ-001","source":"S1","line":334,"text":"The calculator shall convert a positive base-10 integer to its mathematically equivalent hexadecimal value. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"AFTER-FIX:REQ-002","source":"S1","line":335,"text":"The calculator shall expose hexadecimal conversion through both a visible keypad control and keyboard interaction. *(S1)*","verification":{"criterionId":"AFTER-FIX:AC-001","methods":["inspection","test"]}},{"id":"AFTER-FIX:REQ-003","source":"S1","line":336,"text":"The calculator shall format every successful conversion with a `0x` prefix and uppercase hexadecimal digits. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"AFTER-FIX:REQ-004","source":"S1","line":337,"text":"The calculator shall reject blank input, zero, negative values, fractional values, and non-numeric input with a visible error and no converted result. *(S2)*","verification":{"criterionId":"AFTER-FIX:AC-002","methods":["test","visual"]}}]
}
```

# Human clarification checkpoint

The `implementation` phase uses clarification mode `when-needed`.
Prioritize material uncertainty about: approved deviations, implementation blockers.

- Ask only when a material ambiguity remains after reading the governed evidence.
- If none remains, state that the clarification checkpoint found no material ambiguity and continue.
- Ask one concise batch of no more than 3 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository world model, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Formulating evidence-grounded questions is permitted even while artifact authoring awaits clarification. Never ask the human to supply the questions or generic clarification answers. A menu promise to provide answers is not an answer.
- Do not re-ask established facts or infer answers from generic knowledge. Label hypotheses/design proposals; they become acceptance or specification decisions only with human confirmation.
- Missing record does not mean unanswered. Reuse actual human replies only for the same Story, phase, generation and reviewed context. A failed tool/record write requires recording repair, not repeated questions; preserve the replies and staging file on failure. Changed bindings require review, never automatic answer adoption.
- For intent conflicts, confirm the human change and follow Conflict recovery in the Pinned Story source; never silently overwrite intent.
- Explain each question’s impact; offer an evidence-supported default. Accept explicit “unknown” or non-blocking deferral. Record confirmed decisions in the artifact and deferred items in Open questions with impact and owner.
- Use a file-edit tool to stage only {"responses":[...]} at the issued responseStagingPath (standalone discovery: `git rev-parse --git-path singularity-flow/clarification-responses/implementation-gen<N>.json`). Run the returned recordAction or standalone `singularity-flow clarification record implementation --response-file <that-path>`, without shell chains, then remove staging with a file-edit tool only after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- Material unresolved decisions block specification publication; recommendations/placeholders cannot hide them.
- If `ask_user` is unavailable, print numbered questions and stop before authoring or publication; never assume answers.
- Do not author or publish the governed output until the checkpoint is complete.

# Developer agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never search `$HOME`, a parent directory, or outside that repository. Use CLI-returned `workItemRoot` and artifact or packet paths for governed Story reads and writes; keep them within the bound `workId`.

Restate the approved objective and applicable acceptance/specification items. Inspect governed repository evidence before changing code. Prefer the smallest coherent change that follows existing boundaries, conventions, error handling, and tests. Do not expand scope or silently resolve ambiguity. Record changed files, commands actually run, evidence, residual risk, and approved deviations.

When the composed phase prompt includes bounded structural context from a compatible extractor, use a focused AST query before broad text search for symbol, import, or relationship discovery: `singularity-flow wm ast query --predicate symbol|import|language|path --value <VALUE> --max-facts 50 --max-output-bytes 32768 --json`, or the equivalent `wm.ast.query` gateway read. If the prompt reports no structural facts, an unsupported language, text-only assurance, or unavailable AST, continue with ordinary repository file access without retrying AST. Follow `nextCursor` only while the question remains unanswered. Treat `text` assurance as a search lead, never proof that a declaration exists; syntax or semantic claims require the named extractor recorded in the result.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, focus on implementation blockers or approved-specification deviations. Do not reopen settled product or architecture choices.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-6b9ed67812b07beb1b01ec97 at 9be8a70c7b1f (for implementation, focused on this Story)

## What a change touches
- src/utils/evaluator.js (planned): on app start → App; imported by 3 files; 25 rules; tested by evaluator.test.js
- src/App.jsx (planned): on app start → App, keydown → App.handleKeyDown; imported by 2 files; 17 rules; tested by App.test.jsx
- src/components/StandardKeypad.jsx (planned): on onClick on <element> in StandardKeypad.jsx; imported by 1 file

## Rules that apply
- AFTER-FIX:AC-001: Converting `1`, `26`, and `255` shall produce `0x1`, `0x1A`, and `0xFF`, respectively, with the successful cases exercised through the keypad and keyboard interaction paths. *(S1)*. Documented; no code enforcing it was found. (spec.md › AFTER-FIX:AC-001)
- AFTER-FIX:AC-002: Attempting conversion with blank input, `0`, a negative integer, a fraction, or non-numeric input shall display an error and shall not display a hexadecimal result. *(S2)*. Documented; no code enforcing it was found. (spec.md › AFTER-FIX:AC-002)
- App.handleKeyDown: when `key >= '0' && key <= '9'` → does `playSound('digit', soundEnabled)`. Not documented, enforced, no test reaches it. (App.jsx:162)

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

- … 38 more: singularity-flow wm brief --phase implementation

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/after-fix/artifacts/specification/spec.md sha256=cf9462a6ce04efe42e45ecd3d30efc7a5c25c8ee3648c58e007be14507644a75 status=captured projection=approved-summary representation-sha256=sha256:74d49d05ffbd2ee9052436153c2fe04d7c885293a92f38044047c55553d353bb brief-sha256=bb0bf54cd3b561b16860191c12d3679ea588631fe85e4155caa1f8dc8e291d57 expansion=sfref:v1:story:after-fix:98f3efe015bb84382501e412825983f087067c55fe386f5126cc62d958dff8eb -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `after-fix`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/after-fix/artifacts/specification/spec.md`
- Source SHA-256: `a66a290b9f7ab6184680e3fe4959eb134f272b56de28af7ae22e0a5b4536d943`

## Summary from “Agent brief”

Add a decimal-to-hexadecimal conversion operation to the existing calculator for calculator users.
The operation accepts positive base-10 integers only and returns an uppercase hexadecimal value with
the `0x` prefix. Users must be able to invoke it through a visible keypad control and through
keyboard interaction. Blank input, zero, negative values, fractional values, and non-numeric input
must produce a visible error instead of a hexadecimal result. Automated tests must cover successful
conversion, both interaction surfaces, output formatting, and invalid or empty input. Hexadecimal
literals, hexadecimal arithmetic mode, reverse conversion, and conversion of non-positive or
non-integer values are excluded.

## Actors

- **Calculator user:** Enters a decimal value, invokes hexadecimal conversion through the keypad or
  keyboard, and sees either the converted value or an error. No elevated authority is required.

## User scenarios

### S1 — Convert a positive decimal integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and the current input is a positive base-10 integer.

- **Given** the user has entered `26`
  **When** the user invokes hexadecimal conversion from the visible keypad control
  **Then** the calculator displays `0x1A`

- **Given** the user has entered `255` with the keyboard
  **When** the user invokes hexadecimal conversion through keyboard interaction
  **Then** the calculator displays `0xFF`

### S2 — Reject input outside the supported domain

**Priority:** P2
**Actor:** Calculator user
**Context:** The current input is not a positive base-10 integer.

- **Given** the current input is `0`, a negative integer, a fraction, or non-numeric text
  **When** the user invokes hexadecimal conversion
  **Then** the calculator displays a visible error and does not display a converted result

- **Given** the current input is empty
  **When** the user invokes hexadecimal conversion
  **Then** the calculator displays a visible error and does not display a converted result

## Failure and empty states

- **Empty:** Invoking hexadecimal conversion without a value displays a visible error and no
  hexadecimal result.
- **Failure:** Any value outside the positive-integer domain displays a visible error and no
  hexadecimal result.
- **Partial:** A conversion is atomic; the calculator must not display a partial or stale
  hexadecimal result when validation or conversion fails.

## Permissions

All calculator users may invoke decimal-to-hexadecimal conversion. The feature introduces no
privileged action, role-based restriction, or alternate unauthorized view.

## Boundary conditions

- The accepted domain is positive base-10 integers: whole numeric values strictly greater than zero.
- `1` is the smallest accepted value and converts to `0x1`.
- Zero, negative values, fractional values, non-numeric values, and blank input are rejected with a
  visible error.
- Successful output begins with `0x`; every hexadecimal digit from `A` through `F` is uppercase.
- Conversion either produces one complete hexadecimal result or an error; it never exposes a
  partial conversion.

## Requirements

> Exact clauses in Active Clause Capsule: AFTER-FIX:REQ-001, AFTER-FIX:REQ-002, AFTER-FIX:REQ-003, AFTER-FIX:REQ-004, AFTER-FIX:AC-001, AFTER-FIX:AC-002, AFTER-FIX:AC-003.

## Non-functional requirements

No additional quantitative latency, throughput, availability, privacy, or retention requirement was
requested. Keyboard interaction is a functional interaction requirement covered by
`after-fix:REQ-002`.

## Assumptions

- Input is interpreted as base-10 because clarification defined the feature as decimal-to-hexadecimal
  conversion.
- Existing calculator behavior remains unchanged outside the new conversion operation.
- The exact keyboard command and control placement may follow existing calculator interaction
  conventions, provided both paths satisfy `after-fix:REQ-002`.

## Out of scope

- Entering hexadecimal literals as operands.
- Performing arithmetic in a hexadecimal calculator mode.
- Converting hexadecimal values back to decimal or another base.
- Converting zero, negative values, or fractional values.
- Changing existing arithmetic, scientific, financial, graphing, or history behavior.

> Exact source expansion: `sfref:v1:story:after-fix:98f3efe015bb84382501e412825983f087067c55fe386f5126cc62d958dff8eb`. Use `singularity-flow show sfref:v1:story:after-fix:98f3efe015bb84382501e412825983f087067c55fe386f5126cc62d958dff8eb --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/after-fix/artifacts/planning/plan.md sha256=9ba6a3ffbdca353c0298e67ae7ca4c2571e00d9e2a7672fad2f44b78ab959565 status=captured projection=approved-summary representation-sha256=sha256:5aa689bf654f06e03730cc5ea4b5d985ee15a15e78e74beea9d7313c5874e22c brief-sha256=5aa689bf654f06e03730cc5ea4b5d985ee15a15e78e74beea9d7313c5874e22c expansion=sfref:v1:story:after-fix:73eed62979e55aa727c90847f6623a85ac4027624edf0b06cbbc8377f765fa3c -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `after-fix`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/after-fix/artifacts/planning/plan.md`
- Source SHA-256: `4bc2875a37870d74d71c0e9d6747b59bb94e9e472f96aa9e4a8f2dce2179b862`

## Summary from “Agent brief”

Add decimal-to-hex conversion to the existing standard calculator without changing ordinary
expression evaluation. A dedicated helper will accept only positive decimal integers and produce an
exact `0x`-prefixed uppercase result; one App handler will atomically show either that result or a
visible error. Expose the action through the standard keypad and the unused `h`/`H` shortcut, and
document the shortcut in keyboard help. Unit and UI tests will cover `1`, `26`, `255`, both
interaction paths, formatting, and every rejected input category. Key risks are numeric precision,
stale results on failure, and interference with existing shortcuts/calculation behavior.

## Test strategy

Helper tests will assert exact conversion and strict rejection; UI tests will invoke both pathways,
assert all three approved successful examples and error/no-hex output for each invalid category.
Include an invalid attempt after a previous successful result to detect stale output. Inspect the
automated test cases and wiring for clauses whose approved method includes inspection, and visually
verify the display error for clauses requiring visual proof. The retained specification execution
packet reports no governed test executions; that is neither a pass nor a failure. Run the newly
authored tests against the implementation candidate.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| AFTER-FIX:AC-001 | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Keypad and keyboard actions produce `0x1`, `0x1A`, and `0xFF` for `1`, `26`, and `255`. |
| AFTER-FIX:AC-002 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Blank, zero, negative, fractional, and non-numeric input show an error and no hexadecimal result. |
| AFTER-FIX:AC-003 | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/components/KeyboardShortcutsModal.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Automated cases cover success, both interaction surfaces, prefixed uppercase output, and each invalid/empty category. |
| AFTER-FIX:REQ-001 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | A positive base-10 integer converts to its mathematically equivalent hexadecimal value. |
| AFTER-FIX:REQ-002 | `src/App.jsx`, `src/components/StandardKeypad.jsx`, `src/components/KeyboardShortcutsModal.jsx` | `src/App.test.jsx` | new | A visible keypad control and documented `h`/`H` shortcut invoke the same conversion action. |
| AFTER-FIX:REQ-003 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Every successful result has the `0x` prefix and uppercase A–F digits. |
| AFTER-FIX:REQ-004 | `src/App.jsx`, `src/utils/evaluator.js` | `src/App.test.jsx`, `src/utils/evaluator.test.js` | new | Blank, zero, negative, fractional, and non-numeric input visibly fail without a converted result. |

## Risks and rollback

JavaScript `Number` could round large integers, so conversion must use exact integer handling.
Loose parsing could admit whitespace, fractions, or numeric prefixes, so validate the entire input.
A failed conversion could leave a prior hexadecimal result visible; replace it atomically with an
error and test the prior-result case. A keyboard binding could collide with an existing shortcut;
confirm `h`/`H` is unused and retain input/select exclusions. A keypad-only change could omit the
keyboard path; exercise both paths.

Rollback is limited to the new helper, handler, keypad control, shortcut documentation, and their
tests. Revert only these feature-specific changes if they disrupt existing behavior; do not change
the existing evaluator, history, or unrelated calculator modes. Run `npm test` and `npm run build`
after repairs.

> Exact source expansion: `sfref:v1:story:after-fix:73eed62979e55aa727c90847f6623a85ac4027624edf0b06cbbc8377f765fa3c`. Use `singularity-flow show sfref:v1:story:after-fix:73eed62979e55aa727c90847f6623a85ac4027624edf0b06cbbc8377f765fa3c --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:2dbae07fa2751ad2a91d249511260484e0aa278c51fe6cd15fdeff2e93744159. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

```json
{"current":{"status":"not-needed","sourceTreeSha256":null,"testInputSha256":null},"entries":[{"phase":"specification","generation":1,"phaseStatus":"approved","packetSha256":"876f2482d94059c42505cde75ff69e309711b35dc1c3a14cc9c520a4f583bf46","evidenceCommit":"7b83b5c48247b84b98d805ce9f8a9e42dc3e0c3a","sourceCommit":"1de28d5122957f8a7ff44dc7959b3a53ceb7f01a","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/after-fix/submissions/specification/876f2482d94059c42505cde75ff69e309711b35dc1c3a14cc9c520a4f583bf46.json","executions":[],"omittedExecutions":0},{"phase":"planning","generation":1,"phaseStatus":"approved","packetSha256":"35a94f96767cbd5f597a4971aa1bda719d86700f191957a48b05a08c390aa75e","evidenceCommit":"e5700e34042a61360d71b0d553c057300b907817","sourceCommit":"e92428989cb1dc21f20fbe59352666f879176272","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/after-fix/submissions/planning/35a94f96767cbd5f597a4971aa1bda719d86700f191957a48b05a08c390aa75e.json","executions":[],"omittedExecutions":0}],"diagnostics":[],"omittedPackets":0}
```

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id after-fix --phase implementation --json; VS Code: not available for this action
- Copilot: /sf-phase-documents implementation; Shell: singularity-flow phase show implementation --json; VS Code: not available for this action

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
