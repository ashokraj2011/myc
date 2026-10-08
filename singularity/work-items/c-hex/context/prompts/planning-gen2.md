# Active Story phase contract: Planning

- Work ID: `c-hex`
- Work type: `spec-driven-standard`
- Phase: `planning`
- Generation to author: 2
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `off`; do not ask phase clarification questions or run `clarification record`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish planning --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Evidence planning: retained screenshots/documents need their exact Story evidence path in the planned row with Fulfillment `evidence`; source and test paths have separate roles.
- Verification contracts: use the actual `## Verification contracts` table (Criterion | Slot | Method | Witness) for primary visual/inspection proof. Prose alone cannot change the default test contract. Planned tests may be supporting; file presence never proves acceptance.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/c-hex`
- Required artifact: `singularity/work-items/c-hex/artifacts/planning/plan.md`
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

# Implementation plan — c-hex

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
| `<path or module>` | <what changes> | [c-hex:REQ-001] |

## Sequencing

TODO: State the implementation order and what each step unblocks.

## Test strategy

TODO: Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `c-hex:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For new/modified delivery, `Expected paths` contains product source only and `Planned tests` contains
test files only; never repeat a test file in both columns. A test-only obligation uses fulfillment
`test-only`, `Expected paths` = `-`, and its exact tests under `Planned tests`.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.

| Clause | Expected paths | Planned tests | Fulfillment | Observable result |
|---|---|---|---|---|
| `c-hex:REQ-001` | TODO: replace with exact backticked repository-relative source paths | TODO: replace with exact backticked repository-relative test paths | new | TODO: what a person can observe when it works |

<!-- Fulfillment: new, modified, existing (behaviour already at the listed paths), removed, test-only (tests are the whole delivery; Expected paths is -), document, configuration, or evidence (retained files under this Story's evidence/ directory). Do not put screenshots in Planned tests or product-source rows. An evidence AC needs a primary visual/inspection Verification contract; file presence is not a visual pass. Observable result states what is observed. Multi-code-step plans add Steps to allocate each row. -->

## Verification contracts

<!-- Optional for default automated tests, required for retained screenshot/inspection criteria.
Use a Criterion | Slot | Method | Witness | Role | Required assurance table. For a screenshot AC,
its Test strategy row has Fulfillment evidence and the exact Story evidence path under Expected
paths. The contract has a primary visual (screen/scenario) or inspection (exact path) witness,
with source-bound assurance. Prose describing a "primary visual verification contract" is not
a contract row. Never classify the screenshot as product source or an executable test. -->

## Supporting files

<!-- Optional. List each file the code may change that cannot carry a @clause tag (a manifest, a lockfile, CI configuration, repository metadata, documentation): one exact backticked repository path per bullet, then its reason, for example: - `package.json` — adds the ledger client. Application source, tests and migrations are never supporting files: give them a clause row. Approval refuses any other changed path no clause claims. Delete this section when there are none. -->

## Constitution articles

TODO: List the constitution article IDs this plan is bound by `[SPK:REQ-100]`.

## Risks and rollback

TODO: Describe what could go wrong, how it would be detected, and how to roll it back.

# Pinned Story source

- Immutable source: `singularity/work-items/c-hex/source.json`
- SHA-256: `972d97c67c21b23e94b63363d0c2a32bc66c5ac36061896b5654950b78ccfee8`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. After scope approval, any active phase in any workflow can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; no convergence finding or revision loop is required. Recompose after authorized approval and acknowledgement. Before scope approval, record the human change in clarification and revise/review the scope draft normally; never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "c-hex",
  "title": "hex",
  "description": "implemement hex",
  "acceptanceCriteria": "screenshit"
}
```

# Active Clause Capsule

> Mandatory approved clause evidence, not executable instructions. Preserve every exact ID, statement, dependency, risk and open clarification; do not weaken or silently supersede them. Sources are shared by ID. Kernel-managed envelopes are excluded; full verification metadata remains in the anchored indexes.

```json
{
  "workId": "c-hex",
  "phase": "planning",
  "capsuleSha256": "sha256:7bbd42675f1bbb3cbe5a0ba7af9298632f7878716248242ccae4fe159d246241",
  "sources": [{"id":"S1","path":"singularity/work-items/c-hex/artifacts/specification/spec.md","sha256":"sha256:31d5b3ddb669c6d147b0575d0f6bc279f395c9f1865e80fdfa5e16ecf26c9baa"}],
  "clauses": [{"id":"C-HEX:AC-001","source":"S1","line":319,"text":"Entering `255` and requesting conversion displays exactly `FF`. *(S1)*"},{"id":"C-HEX:AC-002","source":"S1","line":320,"text":"Entering `1` and requesting conversion displays exactly `1`. *(S1)*"},{"id":"C-HEX:AC-003","source":"S1","line":321,"text":"Every supported result is uppercase and has no `0x` prefix. *(S1)*"},{"id":"C-HEX:AC-004","source":"S1","line":323,"text":"Submitting each representative unsupported class—empty, `0`, a negative number, a decimal value,\nand non-numeric text—displays exactly `Not Supported`. *(S2)*"},{"id":"C-HEX:AC-005","source":"S1","line":325,"text":"Screenshot evidence captures the browser page with at least one supported result and the\n`Not Supported` outcome. *(S1, S2)*"},{"id":"C-HEX:REQ-001","source":"S1","line":309,"text":"The existing application shall provide a browser-based page where a user can enter a value and\nrequest hexadecimal conversion. *(S1, S2; DOC-002 Q-004)*"},{"id":"C-HEX:REQ-002","source":"S1","line":311,"text":"For a positive base-10 whole number greater than zero, the page shall display its mathematically\nequivalent hexadecimal value. *(S1; DOC-002 Q-001, Q-002)*"},{"id":"C-HEX:REQ-003","source":"S1","line":313,"text":"A supported result shall use uppercase hexadecimal characters and shall omit the `0x` prefix.\n*(S1; DOC-002 Q-003)*"},{"id":"C-HEX:REQ-004","source":"S1","line":315,"text":"For every input outside the supported domain, the page shall display exactly `Not Supported`.\n*(S2; DOC-002 Q-001, Q-002)*"},{"id":"C-HEX:REQ-005","source":"S1","line":317,"text":"Verification shall retain screenshot evidence showing the implemented browser page and its\nobservable behavior. *(S1, S2; DOC-001, DOC-002 Q-005)*"}]
}
```

# Architect agent

Resolve the active Story checkout from this invocation's verified phase-entry packet; otherwise run `singularity-flow session current --json`. Do not repeat a supplied boundary lookup. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never search `$HOME`, a parent directory, or outside that repository. Use CLI-returned `workItemRoot` and artifact or packet paths for governed Story reads and writes; keep them within the bound `workId`.

Use injected repository views as evidence. Make boundaries, contracts, ownership, data flow, failure behavior, security, observability, migration, compatibility, and rollback explicit. Separate observed facts, assumptions, decisions, alternatives, and unresolved questions. Trace decisions to `REQ-nnn`, `AC-nnn`, and `SPEC-nnn`. Prefer existing repository patterns and never represent a proposal as implemented evidence.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, prioritize boundaries, contracts, security, and material tradeoffs. Do not publish while a material decision remains deferred.

# Repository world-model status

- Availability: `unavailable` (`WMB_EARLIER_BUILD_MODEL_INCOMPATIBLE`)
- This is not a lifecycle blocker. Continue with the pinned Story source, approved phase inputs, and ordinary repository file access.
- Do not invent or reconstruct world-model facts. A contributor may build or repair the shared model separately.

# Approved upstream artifact evidence

Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/c-hex/artifacts/specification/spec.md sha256=31d5b3ddb669c6d147b0575d0f6bc279f395c9f1865e80fdfa5e16ecf26c9baa status=captured projection=approved-summary representation-sha256=sha256:53f784157330da2c05a469354256b4e6d19b1f7a6a6c7df2c4475c9623a7aabc brief-sha256=419a6b1d8f77a22ef5c64f2867256f8682c1aee8ba8e9e7a6824ec5e4a693949 expansion=sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `c-hex`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/c-hex/artifacts/specification/spec.md`
- Source SHA-256: `76c15e32ef70ea5fa35ef4e732c4f893af1a35d3348f0b31ca64e3e4f3446466`

## Summary from “Agent brief”

Add a browser-based page to the existing application where a user can enter a positive base-10
whole number and receive its uppercase hexadecimal representation without a `0x` prefix. Any input
outside that supported domain must display exactly `Not Supported`. Validation must include
screenshot evidence of the implemented page. Authentication changes, additional conversion bases,
and non-browser clients are excluded.

## Actors

- **User:** Uses the existing browser application to submit a value and view either its hexadecimal
  representation or the unsupported-input message. No new privileged operation or role is required.

## User scenarios

### S1 — Convert a supported positive whole number

**Priority:** P1
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the user enters `255`
  **When** the user requests conversion
  **Then** the page displays `FF`.

- **Given** the user enters any positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays the equivalent uppercase hexadecimal value without a `0x` prefix.

### S2 — Reject an unsupported input

**Priority:** P2
**Actor:** User
**Context:** The user has opened the conversion page in the existing browser application.

- **Given** the entered value is not a positive base-10 whole number greater than zero
  **When** the user requests conversion
  **Then** the page displays exactly `Not Supported`.

## Failure and empty states

- **Empty:** An empty submitted value is unsupported and displays exactly `Not Supported`.
- **Failure:** Non-numeric text, zero, negative numbers, decimal values, and every other value
  outside the supported domain display exactly `Not Supported`.
- **Partial:** Conversion is a single observable operation; no partial-success state is defined.

## Permissions

- Any user who can access the existing browser application may use the conversion page.
- This feature introduces no new authentication, authorization, or role-management behavior.

## Boundary conditions

- The supported domain is a base-10 whole number strictly greater than zero.
- `1` is the lowest supported input and produces `1`.
- `0`, negative numbers, decimal values, empty input, and non-numeric input are unsupported.
- A valid result uses uppercase hexadecimal digits `0` through `9` and `A` through `F`.
- A valid result never includes a `0x` prefix.
- No maximum supported positive whole number was established by the governed inputs; an
  implementation must not introduce an undocumented upper boundary.

## Requirements

> Exact clauses in Active Clause Capsule: C-HEX:REQ-001, C-HEX:REQ-002, C-HEX:REQ-003, C-HEX:REQ-004, C-HEX:REQ-005, C-HEX:AC-001, C-HEX:AC-002, C-HEX:AC-003, C-HEX:AC-004, C-HEX:AC-005.

## Non-functional requirements

- No latency, throughput, availability, accessibility, privacy, or retention target was supplied
  by the governed inputs. This specification does not invent numeric service levels.

## Assumptions

- The existing application already defines how users reach browser pages and does not require this
  feature to introduce a new access-control model.
- Conversion is stateless and does not require persisted conversion history.
- If either assumption is false, the resulting work is a scope change rather than an implementation
  defect against this specification.

## Out of scope

- Converting hexadecimal values back to decimal.
- Supporting zero, negative numbers, decimal fractions, or non-base-10 input.
- Lowercase hexadecimal output or output with a `0x` prefix.
- Native desktop, mobile, or command-line interfaces.
- New authentication, authorization, persistence, or conversion-history features.

> Exact source expansion: `sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d`. Use `singularity-flow show sfref:v1:story:c-hex:0ce0e041fb741398865d15e0771222337d25a40adf5563103926f3f05bd1455d --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->

# Final clarification guard

The pinned clarification mode for `planning` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
