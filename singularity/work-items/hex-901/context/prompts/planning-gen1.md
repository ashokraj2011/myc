# Active Story phase contract: Planning

- Work ID: `hex-901`
- Requested outcome: hex — Hex operator in calculator (full request: Pinned Story source below); refined by this step's approved inputs from specification (Approved upstream artifact evidence below), which settle its detail
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
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved earlier-phase artifacts are fixed evidence. If one is wrong, incomplete or contradicts another input or the pinned source, do not edit it and do not stop: continue on the most conservative reading consistent with the pinned source, and list each item under `## Upstream discrepancies` (producer phase, exact clause or section, problem, assumption used, impact, proposed owner action), then file them once with `singularity-flow upstream-issue raise --from-artifact`; the producer's approvers decide them. Stop only for a refusal about changed or unapproved input bytes (use its restore or return route), or when no reading satisfies the pinned source: then (after asking the person, if this step's clarification mode allows questions) raise it with `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Planning rows: cover every approved requirement and acceptance ID from the authoritative clause capsule; preserve its meaning. Use a bare - for an empty path cell, never `-` (which names a file).
- Evidence planning: put retained files under singularity/work-items/hex-901/evidence/ in that clause's Expected paths with Fulfillment `evidence`; do not assign screenshot obligations to another clause.
- Verification: inherit approved clause verification methods, without downgrading required proof to supporting or any-of. Use the actual `## Verification contracts` table: exact approved AC Criterion, lower-hyphen Slot, test/inspection/visual Method, primary/supporting Role; visual assurance = source-bound. Put scenario/reviewer prose outside these cells. For non-executable proof put verification: <AC-ID> in Planned tests and define its primary visual/inspection slot. not-applicable: <reason> is only a genuine exemption requiring human disposition, not a screenshot check. File presence is not a passing witness.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/hex-901`
- Required artifact: `singularity/work-items/hex-901/artifacts/planning/plan.md`
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

# Implementation plan — hex-901

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
| `<path or module>` | <what changes> | [HEX-901:REQ-001] |

## Sequencing

TODO: State the implementation order and what each step unblocks.

## Test strategy

TODO: Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `HEX-901:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, an unquoted dash (-) in Expected paths, and its exact tests under `Planned tests`.
Never backtick the empty dash: that names a file. Retained screenshots/documents use fulfillment
`evidence` and exact paths under `hex-901`'s Story evidence directory, not product source.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.
For approved visual/inspection proof without an executable test, write `verification: <AC-ID>`
instead, naming its exact approved Criterion, and define the primary witness below. This is proof,
not an exemption; human visual acceptance remains separate. Inherit all Specification methods.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `HEX-901:REQ-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

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

<!-- source=singularity/work-items/hex-901/artifacts/specification/spec.md sha256=c4a87c2817cf354bef4a31b32497a4261bbc26bf90d423df79fdd1f9658110e2 status=captured projection=approved-summary -->

# Approved agent brief — Specification

- Producer: `specification` generation 1; source `singularity/work-items/hex-901/artifacts/specification/spec.md`

## Summary from “Agent brief”

Calculator users need to convert the current calculator value to hexadecimal. The confirmed scope
is positive integers; the converted value is displayed without a `0x` prefix. For the required
example, 16 displays as `10`. Acceptance includes tests of positive-integer conversions and a
screenshot of the 16-to-`10` state. The exact control placement and A-F letter casing are unspecified.

## Actors

Who uses this, and what authority does each hold?

- **Calculator user:** invokes the hex operation on the current calculator value. No distinct role
  or permission level was specified.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

                                                                                               
                                                                                              
                                                                                                   
                                                                                                  
                                                                                               
                                                                                              
                                                                                                   

### S1 — Convert the current positive integer to hexadecimal

**Priority:** P1
**Actor:** Calculator user
**Context:** The calculator has a current positive integer value.

- **Given** the calculator's current value is 16
  **When** the user invokes the hex operator
  **Then** the calculator displays `10`, the hexadecimal representation of 16, without a `0x`
  prefix.

- **Given** the calculator's current value is another positive integer
  **When** the user invokes the hex operator
  **Then** the calculator displays the equivalent base-16 representation of that value.

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** No conversion result is specified when the calculator has no current positive integer
  value.
- **Failure:** The request specifies no dependency failure or error message for this local
  conversion; no new failure behavior is required.
- **Partial:** No partial-conversion state is specified.

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

No role or permission distinction is specified; the feature adds no authorization requirement.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

The supported conversion input domain is positive integers. Zero, negative values, and fractional
values are outside this request; their conversion behavior is not specified. The converted value
has no `0x` prefix. Letter casing for hexadecimal digits A-F is not specified; either case is
acceptable when the displayed digits represent the same value.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- When the user invokes the hex operator while the calculator's current value is a positive integer,
  display that value's equivalent base-16 representation. *(S1)* [HEX-901:REQ-001]

Acceptance criteria use the same stable, namespaced form:

- Tests verify that positive integer values convert to their equivalent hexadecimal values, and a
  screenshot shows the calculator displaying `10` without a prefix after converting 16. *(S1)*
  [HEX-901:AC-001] [scope:SRI-23836b6af209]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[HEX-901:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

Not applicable: no non-functional target was stated in the pinned Story or clarification.

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

The phrase “current calculator value” refers to the value currently held by the calculator when
the user invokes the hex operator. The Story and clarification do not specify the exact control
placement or the letter casing of hexadecimal digits.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

Conversion of zero, negative, or fractional values; a specific control placement or keyboard
shortcut; and any non-functional targets not stated in the Story.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:hex-901:cc942743c856d956e42423f848f11298d7e4f8f716b77df4fd942b2470dbb883 --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/hex-901/source.json`
- SHA-256: `107f0678a056245582a94a969e2286d070bf6e061284996c8ac6bad867545c7c`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. Then propose it from this step with `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"` (it amends the approved scope of `specification`); no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "hex-901",
  "title": "hex",
  "description": "Hex operator in calculator",
  "acceptanceCriteria": "screenshot and testases"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, verification method, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full provenance remains in the anchored indexes.

```json
{
  "workId": "hex-901",
  "phase": "planning",
  "capsuleSha256": "sha256:d9e4c5da0bd9bbe0de9a772bb53c355ed9157fadb671c48448e90169256d3c5f",
  "sources": [{"id":"S1","path":"singularity/work-items/hex-901/artifacts/specification/spec.md","sha256":"sha256:c4a87c2817cf354bef4a31b32497a4261bbc26bf90d423df79fdd1f9658110e2"}],
  "clauses": [{"id":"HEX-901:AC-001","source":"S1","line":378,"text":"Tests verify that positive integer values convert to their equivalent hexadecimal values, and a\nscreenshot shows the calculator displaying `10` without a prefix after converting 16. *(S1)*\n[scope:SRI-23836b6af209]","verification":{"criterionId":"HEX-901:AC-001","methods":["test","visual"]}},{"id":"HEX-901:REQ-001","source":"S1","line":372,"text":"When the user invokes the hex operator while the calculator's current value is a positive integer,\ndisplay that value's equivalent base-16 representation. *(S1)*","verification":{"criterionId":null,"methods":["test"]}}]
}
```

# Architect agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as command cwd. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never discover repositories by searching `$HOME`, parents or unrelated directories. Use the CLI's exact artifact, packet and staging paths for this binding. Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.

Use injected repository views as evidence. Make boundaries, contracts, ownership, data flow, failure behavior, security, observability, migration, compatibility, and rollback explicit. Separate observed facts, assumptions, decisions, alternatives, and unresolved questions. Trace decisions to the approved clause IDs (`REQ`, `BEH`, `IFC`, `AC`, `CON`) exactly as the clause capsule names them. Prefer existing repository patterns and never represent a proposal as implemented evidence.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, prioritize boundaries, contracts, security, and material tradeoffs. Do not publish while a material decision owned by this phase remains deferred; a problem that belongs to an earlier phase goes under `## Upstream discrepancies` instead.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-e78eef4df974b33ba225e7f8 at 41a4cc6024a1 (for design, focused on this Story)

## Contracts
- app start → App (App.jsx:14)

## Flows
- keydown → App.handleKeyDown → playSound → getAudioContext; 22 rules on the way; writes Sound (App.jsx:157)
- app start → App → evaluateExpression (and 1 helper: formatNumber); 13 rules on the way; writes Browser storage (App.jsx:14)
- onClick on <element> in Display.jsx → handleCopy → playSound → getAudioContext; 6 rules on the way; writes Sound, writes the clipboard (Display.jsx:73)
- onClick on <element> in HistoryDrawer.jsx → handleExport → playSound → getAudioContext; 6 rules on the way; writes Sound (HistoryDrawer.jsx:85)

## Rules that apply
- HEX-901:AC-001: Tests verify that positive integer values convert to their equivalent hexadecimal values, and a screenshot shows the calculator displaying `10` without a prefix after converting 16. *(S1)* [scope:SRI-23836b6af209]. Documented; no code enforcing it was found. (spec.md › HEX-901:AC-001)
- HEX-901:REQ-001: When the user invokes the hex operator while the calculator's current value is a positive integer, display that value's equivalent base-16 representation. *(S1)*. Documented; no code enforcing it was found. (spec.md › HEX-901:REQ-001)

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
- calculateTip: no test reaches it (evaluator.js:200)

## What exists
- .w-e78eef4df974b33ba225e7f8: 19 code files in javascriptreact (12 files), javascript (7 files); JSX, React, Vitest; 3 entry points, 49 rules in code, 26 tests.
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. (README.md › React + Vite)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

- … 45 more: singularity-flow wm brief --phase planning

Not known: calls are matched by name (no semantic pack is warmed); no runtime or incident data.
Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:1ad43c0d79edfda5cf68a43e37eb81b19c34fdd6f7744f9093c3b39a5392257b. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: specification generation 1 (`singularity/work-items/hex-901/submissions/specification/be17e0036f706599509b55979d85ad40a47824ffcfc6cdf6d94f1b99f4900f9a.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id hex-901 --phase planning --json; VS Code: not available for this action
- Copilot: /sf-phase-documents planning; Shell: singularity-flow phase show planning --json; VS Code: not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:85c6e587593f45a993e7e69c02b7eb37367a22946771545b43d0146de2d8dd34
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- specification generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- planning generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `planning` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Where governed evidence is ambiguous, label the reading you choose `Assumption:` with its impact and continue; a problem in an earlier phase goes under `## Upstream discrepancies`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
