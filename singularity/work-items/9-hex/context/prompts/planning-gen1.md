# Active Story phase contract: Planning

- Work ID: `9-hex`
- Requested outcome: hex — create hex operator only non negative integers ,others show ERR as output (full request: Pinned Story source below)
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
- Planning rows: cover every approved requirement and acceptance ID from the authoritative clause capsule; preserve its meaning. Use a bare - for an empty path cell, never `-` (which names a file).
- Evidence planning: put retained files under singularity/work-items/9-hex/evidence/ in that clause's Expected paths with Fulfillment `evidence`; do not assign screenshot obligations to another clause.
- Verification: use the actual `## Verification contracts` table. Criterion = exact approved AC; Slot = lower-hyphen identifier; Method = test/inspection/visual; Role = primary/supporting; visual Required assurance = source-bound. Put scenario/reviewer prose outside these typed cells. File presence is not a passing witness.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/9-hex`
- Required artifact: `singularity/work-items/9-hex/artifacts/planning/plan.md`
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

# Implementation plan — 9-hex

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
| `<path or module>` | <what changes> | [9-hex:REQ-001] |

## Sequencing

TODO: State the implementation order and what each step unblocks.

## Test strategy

TODO: Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `9-hex:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `9-hex`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `9-hex:REQ-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

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

- Immutable source: `singularity/work-items/9-hex/source.json`
- SHA-256: `18a1fe1c5ac9e2588fb623096db313fed7c7ec8d008681bdf0731c30aebc0f91`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. After scope approval, any active phase in any workflow can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Before scope approval, record the human change in clarification and revise/review the scope draft normally; never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "9-hex",
  "title": "hex",
  "description": "create hex operator \nonly non negative integers ,others show ERR as output",
  "acceptanceCriteria": "screenshot"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full verification metadata remains in the anchored indexes.

```json
{
  "workId": "9-hex",
  "phase": "planning",
  "capsuleSha256": "sha256:1ea88db34677afe717b797fd674f2238f62343a523bb0fddace8fc33787fce4d",
  "sources": [{"id":"S1","path":"singularity/work-items/9-hex/artifacts/specification/spec.md","sha256":"sha256:c496a4d1d13a7d4d18d21f098923a9d90806359503a407a40c858686caed4be9"}],
  "clauses": [{"id":"9-HEX:AC-001","source":"S1","line":317,"text":"Applying the operator to `0`, `255`, and `9007199254740991` displays `0`, `FF`, and `1FFFFFFFFFFFFF`, respectively. *(S1)*"},{"id":"9-HEX:AC-002","source":"S1","line":318,"text":"Applying the operator to empty input, `-1`, `+1`, `1.5`, whitespace-containing text, alphabetic text, or a leading-zero value such as `01` displays exactly `ERR`. *(S2)*"},{"id":"9-HEX:AC-003","source":"S1","line":319,"text":"Applying the operator to `9007199254740992` displays exactly `ERR`. *(S2)*"},{"id":"9-HEX:AC-004","source":"S1","line":320,"text":"A screenshot of the completed feature is attached as implementation evidence; no visual comparison against a target screenshot is required. *(S1, S2)*"},{"id":"9-HEX:REQ-001","source":"S1","line":310,"text":"The hex operator shall convert a valid input in S1 from base 10 to base 16 and display uppercase digits without a prefix. *(S1)*"},{"id":"9-HEX:REQ-002","source":"S1","line":311,"text":"The operator shall accept only canonical unsigned decimal integer text in the inclusive range 0 through 9007199254740991. *(S1, S2)*"},{"id":"9-HEX:REQ-003","source":"S1","line":312,"text":"The operator shall display the literal `ERR` when the input is empty, syntactically invalid, or outside the accepted range. *(S2)*"},{"id":"9-HEX:REQ-004","source":"S1","line":313,"text":"Implementation verification shall capture and attach a screenshot of the completed feature as evidence; the screenshot is not a visual reference to match. *(S1, S2)*"}]
}
```

# Architect agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never search `$HOME`, a parent directory, or outside that repository. Use CLI-returned `workItemRoot` and artifact or packet paths for governed Story reads and writes; keep them within the bound `workId`.

Use injected repository views as evidence. Make boundaries, contracts, ownership, data flow, failure behavior, security, observability, migration, compatibility, and rollback explicit. Separate observed facts, assumptions, decisions, alternatives, and unresolved questions. Trace decisions to `REQ-nnn`, `AC-nnn`, and `SPEC-nnn`. Prefer existing repository patterns and never represent a proposal as implemented evidence.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, prioritize boundaries, contracts, security, and material tradeoffs. Do not publish while a material decision remains deferred.

# Repository brief: .w-6944a965937af19956815158 at 75035789f949 (for design, focused on this Story)

## Contracts
- app start → App (App.jsx:14)

## Flows
- keydown → App.handleKeyDown → playSound → getAudioContext; 22 rules on the way; writes Sound (App.jsx:157)
- app start → App → evaluateExpression (and 1 helper: formatNumber); 13 rules on the way; writes Browser storage (App.jsx:14)
- onClick on <element> in Display.jsx → handleCopy → playSound → getAudioContext; 6 rules on the way; writes Sound, writes the clipboard (Display.jsx:73)
- onClick on <element> in HistoryDrawer.jsx → handleExport → playSound → getAudioContext; 6 rules on the way; writes Sound (HistoryDrawer.jsx:85)

## Rules that apply
- 9-HEX:AC-004: A screenshot of the completed feature is attached as implementation evidence; no visual comparison against a target screenshot is required. *(S1, S2)*. Documented; no code enforcing it was found. (spec.md › 9-HEX:AC-004)
- 9-HEX:REQ-001: The hex operator shall convert a valid input in S1 from base 10 to base 16 and display uppercase digits without a prefix. *(S1)*. Documented; no code enforcing it was found. (spec.md › 9-HEX:REQ-001)
- 9-HEX:REQ-003: The operator shall display the literal `ERR` when the input is empty, syntactically invalid, or outside the accepted range. *(S2)*. Documented; no code enforcing it was found. (spec.md › 9-HEX:REQ-003)

## Risks
- playSound: complexity 10, reached by 44 entry points, called from 8 places, no test reaches it (audio.js:18)
- App.handleKeyDown: complexity 21, 17 rules, no test reaches it (App.jsx:157)
- evaluateExpression: complexity 13, reached by 1 entry point, 10 rules (evaluator.js:4)
- src/utils/evaluator.js: complexity 45, imported by 4 files
- src/App.jsx: complexity 72, imported by 2 files
- formatNumber: reached by 1 entry point, called from 2 places, 3 rules (evaluator.js:57)
- getAudioContext: reached by 44 entry points, 3 rules, no test reaches it (audio.js:5)
- App: the most complex function (complexity 51) (App.jsx:14)
- calculateTip: no test reaches it (evaluator.js:200)

## What exists
- .w-6944a965937af19956815158: 19 code files in javascriptreact (12 files), javascript (7 files); JSX, React, Vitest; 3 entry points, 49 rules in code, 26 tests.
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. (README.md › React + Vite)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

- … 48 more: singularity-flow wm brief --phase planning

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/9-hex/artifacts/specification/spec.md sha256=c496a4d1d13a7d4d18d21f098923a9d90806359503a407a40c858686caed4be9 status=captured projection=approved-summary representation-sha256=sha256:a8eecb233b503b90e17087a64784b4b0b20f569df1b7594856650ac9f0fd7699 brief-sha256=2e71dc6f4bb111a46b22f08f5d530d271b6f5ce58671c9546397968791f904fe expansion=sfref:v1:story:9-hex:2c9d53bbc57e076f9f597ba71f17da1fb55c8f6a630b129a1094f2380c645347 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `9-hex`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/9-hex/artifacts/specification/spec.md`
- Source SHA-256: `ff50abd4bbd14d621d752439c28a29b977b5e6a1d2c2e4faf417c4852e58d5bf`

## Summary from “Agent brief”

Provide a calculator user with a hex conversion operator. It converts unsigned decimal integer input
within JavaScript's safe-integer range to uppercase hexadecimal digits without a prefix. Only the
canonical unsigned decimal form is valid; unsupported syntax and values outside the range display
`ERR`. Hexadecimal arithmetic is not part of this request. A screenshot of the completed feature is
to be captured and attached as implementation evidence; no reference screenshot was supplied.

## Actors

The calculator user invokes the operator. No separate roles or permission distinctions are specified.

## User scenarios

### S1 — Convert a supported integer

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator is available and contains a canonical unsigned decimal integer from 0 through 9007199254740991.

- **Given** the input is `0`
  **When** the user invokes the hex operator
  **Then** the displayed result is `0`.

- **Given** the input is `255`
  **When** the user invokes the hex operator
  **Then** the displayed result is `FF`.

- **Given** the input is `9007199254740991`
  **When** the user invokes the hex operator
  **Then** the displayed result is `1FFFFFFFFFFFFF`.

### S2 — Reject unsupported input

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator contains an empty value, non-canonical number text, or a value outside the supported range.

- **Given** the input is empty, negative, signed, fractional, contains whitespace or non-digit characters, or has a leading zero other than the value `0`
  **When** the user invokes the hex operator
  **Then** the displayed result is `ERR`.

- **Given** the input is an unsigned decimal integer greater than `9007199254740991`
  **When** the user invokes the hex operator
  **Then** the displayed result is `ERR`.

## Failure and empty states

- **Empty:** An empty input is not an integer and produces `ERR`.
- **Failure:** No external dependency is required by the specified conversion. Invalid syntax and out-of-range values produce `ERR`.
- **Partial:** Conversion is a single operation; no partial-success state is specified.

## Permissions

The Story identifies a calculator user but defines no additional authorization policy. Access control is unchanged.

## Boundary conditions

- Valid input is the canonical unsigned base-10 form `0` or a nonzero digit followed by zero or more digits.
- The accepted numeric range is inclusive: `0` through `9007199254740991` (`Number.MAX_SAFE_INTEGER`).
- A value above that maximum, any negative value, a leading sign, a fraction, whitespace, or other non-canonical text produces `ERR`.
- Valid results use uppercase hexadecimal digits with no `0x` prefix or padding; zero displays as `0`.

## Requirements

> Exact clauses in Active Clause Capsule: 9-HEX:REQ-001, 9-HEX:REQ-002, 9-HEX:REQ-003, 9-HEX:REQ-004.

## Non-functional requirements

No latency, throughput, accessibility, privacy, or retention targets were supplied for this Story.

## Assumptions

- The operator receives the current calculator value as text and displays its result in the calculator's existing output area.
- The safe-integer maximum is the accepted upper limit, as explicitly confirmed during clarification.

## Out of scope

- Hexadecimal arithmetic or hexadecimal input.
- Changes to unrelated calculator operations or access-control behavior.
- Matching an unprovided reference screenshot; the requested screenshot is completion evidence only.

> Exact source expansion: `sfref:v1:story:9-hex:2c9d53bbc57e076f9f597ba71f17da1fb55c8f6a630b129a1094f2380c645347`. Use `singularity-flow show sfref:v1:story:9-hex:2c9d53bbc57e076f9f597ba71f17da1fb55c8f6a630b129a1094f2380c645347 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:b683a523142bd7cbdd31dbd4327b953b76c43171bab92df5e964324993b7f1e2. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

```json
{"current":{"status":"not-needed","sourceTreeSha256":null,"testInputSha256":null},"entries":[{"phase":"specification","generation":1,"phaseStatus":"approved","packetSha256":"97e89cf759491281a2e1d57ee47361a501c2b82f3aec2acc05cb30a692571762","evidenceCommit":"98074362223c110ca6217a41c6ed5485dd8aaa0d","sourceCommit":"f04be57225c2875d34d235c42ae80cebfed68312","sourceTreeSha256":"sha256:cc61d54d67cc7f17f5a1971d2668b159f2a7d039d7b0bd7634692d885727b6a5","testInputSha256":null,"status":"no-governed-tests-in-this-packet","checks":[],"omittedChecks":0,"path":"singularity/work-items/9-hex/submissions/specification/97e89cf759491281a2e1d57ee47361a501c2b82f3aec2acc05cb30a692571762.json","executions":[],"omittedExecutions":0}],"diagnostics":[],"omittedPackets":0}
```

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id 9-hex --phase planning --json; VS Code: not available for this action
- Copilot: /sf-phase-documents planning; Shell: singularity-flow phase show planning --json; VS Code: not available for this action

# Final clarification guard

The pinned clarification mode for `planning` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
