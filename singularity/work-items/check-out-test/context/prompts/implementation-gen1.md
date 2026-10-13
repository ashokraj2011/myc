# Active Story phase contract: Implementation

- Work ID: `check-out-test`
- Requested outcome: checkout — hex operator (full request: Pinned Story source below)
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
- Work-item directory: `singularity/work-items/check-out-test`
- Required artifact: `singularity/work-items/check-out-test/artifacts/implementation/implementation-summary.md`
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

# check-out-test — Implementation Summary

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

TODO: Cite exact changed product-source paths and the qualified `@clause:check-out-test:REQ-001`-style comments that bind applicable planned clauses to implementation. Explain configuration, migrations, deviations, and reviewed test-only or non-code dispositions. A tag alone is not proof of behavior.

## Tests and operational notes

TODO: List executable tests tagged with qualified `@ac:check-out-test:AC-001` IDs, exact commands and observed results, limitations, flags, and rollout notes. Test tags belong in test files; source-bound clause tags belong in product source.

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
  "phase": "implementation",
  "capsuleSha256": "sha256:2f1396b1715fa4c0175b954e7c38537fe7916e8a1e9acc15b90a802b41913e05",
  "sources": [{"id":"S1","path":"singularity/work-items/check-out-test/artifacts/specification/spec.md","sha256":"sha256:22b843d3331d9445b3686e0c39100d03531a95a9357b5d0515fad781dc490f8e"}],
  "clauses": [{"id":"CHECK-OUT-TEST:AC-001","source":"S1","line":371,"text":"Evaluating `200 + 55` and activating conversion displays `0xFF` while the expression remains `200 + 55`; evaluating a result of `0` and converting displays `0x0`. *(S1)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-001","methods":["test"]}},{"id":"CHECK-OUT-TEST:AC-002","source":"S1","line":372,"text":"An evaluated result of `-255` converts to `-0xFF`, and activating conversion again restores `-255` without changing the expression. *(S2)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-002","methods":["test"]}},{"id":"CHECK-OUT-TEST:AC-003","source":"S1","line":373,"text":"Before evaluation and after fractional, invalid, error, or non-finite results, the control is unavailable and activation cannot alter the result or expression. *(S3)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-003","methods":["test"]}},{"id":"CHECK-OUT-TEST:AC-004","source":"S1","line":374,"text":"A screenshot of the standard calculator in its default theme shows the conversion control visible and an uppercase, `0x`-prefixed hexadecimal result in the result display. *(S4)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-004","methods":["visual"]}},{"id":"CHECK-OUT-TEST:REQ-001","source":"S1","line":365,"text":"The standard calculator shall present a hexadecimal conversion control to the calculator user. *(S1, S3, S4)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-004","methods":["visual"]}},{"id":"CHECK-OUT-TEST:REQ-002","source":"S1","line":366,"text":"The conversion control shall be available only when the most recently evaluated result is a finite signed whole number; it shall be unavailable before evaluation and for fractional, invalid, error, or non-finite results. *(S1, S2, S3)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"CHECK-OUT-TEST:REQ-003","source":"S1","line":367,"text":"Activating the available control while a decimal result is displayed shall replace only the displayed result with its uppercase hexadecimal representation using a `0x` prefix and, for negative values, a leading sign before the prefix. *(S1)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"CHECK-OUT-TEST:REQ-004","source":"S1","line":368,"text":"Activating the available control while a hexadecimal result is displayed shall restore that evaluated result's decimal representation without changing the expression. *(S2)*","verification":{"criterionId":null,"methods":["test"]}},{"id":"CHECK-OUT-TEST:REQ-005","source":"S1","line":369,"text":"In the default theme and standard mode, the conversion control and converted result shall be visibly identifiable in the calculator interface. *(S4)*","verification":{"criterionId":"CHECK-OUT-TEST:AC-004","methods":["visual"]}}]
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

# Repository brief: .w-2ec49d45d9d54b5eba2308a8 at 0a97fd7be56f (for implementation, focused on this Story)

## What a change touches
- src/App.jsx (planned): on app start → App, keydown → App.handleKeyDown; imported by 2 files; 17 rules; tested by App.test.jsx
- src/components/Display.jsx (planned): on onClick on <element> in Display.jsx; 1 rule; no test reaches it

## Rules that apply
- CHECK-OUT-TEST:AC-003: Before evaluation and after fractional, invalid, error, or non-finite results, the control is unavailable and activation cannot alter the result or expression. *(S3)*. Documented; no code enforcing it was found. (spec.md › CHECK-OUT-TEST:AC-003)
- CHECK-OUT-TEST:REQ-001: The standard calculator shall present a hexadecimal conversion control to the calculator user. *(S1, S3, S4)*. Documented; no code enforcing it was found. (spec.md › CHECK-OUT-TEST:REQ-001)
- CHECK-OUT-TEST:REQ-004: Activating the available control while a hexadecimal result is displayed shall restore that evaluated result's decimal representation without changing the expression. *(S2)*. Documented; no code enforcing it was found. (spec.md › CHECK-OUT-TEST:REQ-004)

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

- … 37 more: singularity-flow wm brief --phase implementation

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/check-out-test/artifacts/specification/spec.md sha256=22b843d3331d9445b3686e0c39100d03531a95a9357b5d0515fad781dc490f8e status=captured projection=approved-summary representation-sha256=sha256:05fab460df3f417b99cb4e90c627872c374866a54416c4b489a5efc81efae889 brief-sha256=8bbed25daf531c2d61a97e29fbfd5cdf9b91be88ea732355404fadb6938cc7f8 expansion=sfref:v1:story:check-out-test:82aaef2ddc5a679f63b0f6c14389a6887edfc191ddbaf28aebb4593b7df66e9f -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `check-out-test`
- Producer: `specification` generation 1
- Consumer: `implementation`
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

## Approved phase input: planning

<!-- source=singularity/work-items/check-out-test/artifacts/planning/plan.md sha256=745561f23092aed8fa99c2dac1d80e54a836ea88c9f6708ce994ae68ec35edb8 status=captured projection=approved-summary representation-sha256=sha256:f65c6b8663aa4875c0987db81c930428bc14ff1bf97b3d398dffc93dae2c50a2 brief-sha256=f65c6b8663aa4875c0987db81c930428bc14ff1bf97b3d398dffc93dae2c50a2 expansion=sfref:v1:story:check-out-test:60f604d8c3b736109e8df6ff97e5453fe0a95fd271d6e883b26603abe4f317aa -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `check-out-test`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/check-out-test/artifacts/planning/plan.md`
- Source SHA-256: `f571300f6c075b02b8da0c43c66d20d93d537f90f06ab4152174c984f55d63eb`

## Summary from “Agent brief”

Add a standard-mode hexadecimal display toggle without changing evaluation semantics. A small pure
utility will decide whether the latest evaluated decimal result is eligible and will format signed,
uppercase, `0x`-prefixed output. `App` will retain the evaluated decimal value as the source of truth,
reset hexadecimal presentation whenever calculation state changes, and expose conversion only to the
standard `Display`. Component tests will prove the user-visible toggle, disabled states, and expression
preservation; utility tests will cover numeric boundaries; retained default-theme visual evidence will
prove the screenshot obligation. Principal risks are stale hexadecimal presentation after input changes,
accidentally exposing the control in scientific mode, and accepting values that are not finite integers.

## Test strategy

Vitest utility tests will prove formatting and eligibility as pure behavior, while React Testing Library
tests will drive the calculator through its public controls and assert the rendered result, expression,
control availability, and mode boundary. The visual criterion remains a separate primary source-bound
witness: a reviewer must inspect the retained screenshot captured from the default `classic` theme in
standard mode after `200 + 55` is evaluated and converted. Add exactly one row per clause, using its
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
| [CHECK-OUT-TEST:AC-001] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | Converting evaluated `255` displays `0xFF`, converting `0` displays `0x0`, and the expression is unchanged. |
| [CHECK-OUT-TEST:AC-002] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | Evaluated `-255` displays `-0xFF`; a second activation restores `-255` without changing the expression. |
| [CHECK-OUT-TEST:AC-003] | - | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | test-only | The control is unavailable before evaluation and for fractional, invalid, error, and non-finite results, with no result or expression mutation. |
| [CHECK-OUT-TEST:AC-004] | `singularity/work-items/check-out-test/evidence/hex-conversion-default-theme.png` | verification: CHECK-OUT-TEST:AC-004 | evidence | The retained default-theme standard calculator screenshot visibly shows the control and uppercase `0xFF` result. |
| [CHECK-OUT-TEST:REQ-001] | `src/App.jsx` `src/components/Display.jsx` | `src/App.test.jsx` | modified | A labelled hexadecimal conversion control is visible in the standard calculator. |
| [CHECK-OUT-TEST:REQ-002] | `src/utils/hexadecimal.js` `src/App.jsx` `src/components/Display.jsx` | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | modified | Availability exactly follows whether the most recently evaluated result is a finite signed whole number. |
| [CHECK-OUT-TEST:REQ-003] | `src/utils/hexadecimal.js` `src/App.jsx` `src/components/Display.jsx` | `src/utils/hexadecimal.test.js` `src/App.test.jsx` | modified | Activation replaces only the displayed result with signed uppercase prefixed hexadecimal. |
| [CHECK-OUT-TEST:REQ-004] | `src/App.jsx` `src/components/Display.jsx` | `src/App.test.jsx` | modified | Activating the control again restores the canonical decimal result and leaves the expression unchanged. |
| [CHECK-OUT-TEST:REQ-005] | `src/App.jsx` `src/components/Display.jsx` | verification: CHECK-OUT-TEST:AC-004 | modified | In default-theme standard mode, the conversion control and converted result are visually identifiable. |

## Risks and rollback

- **Stale presentation state:** hexadecimal output could survive a new edit or evaluation. Detect with
  transition tests covering digit entry, clear, and re-evaluation; reset the toggle at each canonical
  result transition.
- **Numeric eligibility drift:** string parsing could accept fractions, `Infinity`, or error text.
  Detect with table-driven utility tests and keep all eligibility decisions in the pure helper.
- **Scope leakage:** passing the conversion props to the shared scientific display could expose the
  control outside standard mode. Detect with a mode-switching component test and wire props only in the
  standard branch.
- **Expression/history mutation:** deriving conversion from expression text or overwriting the canonical
  result could change history, memory, or restoration. Detect with expression-preservation and toggle-back
  assertions; keep the evaluator result unchanged and derive display text.
- **Visual mismatch:** the new control may be clipped or ambiguous in the default theme. Detect by reviewing
  the source-bound screenshot at the required viewport before acceptance.

Rollback is a single feature removal: delete `src/utils/hexadecimal.js` and its tests, remove hexadecimal
toggle state/wiring from `src/App.jsx`, remove the control props/markup from `src/components/Display.jsx`,
and remove the feature-specific `src/App.test.jsx` cases. No persisted data or migration requires reversal.

> Exact source expansion: `sfref:v1:story:check-out-test:60f604d8c3b736109e8df6ff97e5453fe0a95fd271d6e883b26603abe4f317aa`. Use `singularity-flow show sfref:v1:story:check-out-test:60f604d8c3b736109e8df6ff97e5453fe0a95fd271d6e883b26603abe4f317aa --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:d8a82b7976c6cf416d3b9be1dadf55f46bd6d8ba7db89835780154427ee27b4c. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

```json
{"current":{"status":"not-needed","sourceTreeSha256":null,"testInputSha256":null},"entries":[{"phase":"specification","generation":1,"phaseStatus":"approved","packetSha256":"33869d80cb5d46a690dafb2c6c452a40bdcb22231a24bf488c55054ddf17b10d","evidenceCommit":"73e5e5f62c7bd95fdfc0c6aa5f3ba219dafff8f7","sourceCommit":"d1281e771af4a2521a07d84632f349236fe62ee4","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/check-out-test/submissions/specification/33869d80cb5d46a690dafb2c6c452a40bdcb22231a24bf488c55054ddf17b10d.json","executions":[],"omittedExecutions":0},{"phase":"planning","generation":1,"phaseStatus":"approved","packetSha256":"86da24591c5d3c7e55980af87f643af04d29d6142504df7ccb3ff4a07102a084","evidenceCommit":"82d06ea181f48e80a3486e73870d0a1ba1824349","sourceCommit":"966fbde0a71bc420a82ca6433857bd82aa30568f","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/check-out-test/submissions/planning/86da24591c5d3c7e55980af87f643af04d29d6142504df7ccb3ff4a07102a084.json","executions":[],"omittedExecutions":0}],"diagnostics":[],"omittedPackets":0}
```

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id check-out-test --phase implementation --json; VS Code: not available for this action
- Copilot: /sf-phase-documents implementation; Shell: singularity-flow phase show implementation --json; VS Code: not available for this action

# Final clarification guard

The pinned clarification mode for `implementation` is `when-needed`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Ask and record a bounded batch only if material ambiguity remains after governed evidence is read; otherwise continue without a clarification record.
