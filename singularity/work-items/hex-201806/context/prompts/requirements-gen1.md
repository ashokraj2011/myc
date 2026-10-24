# Active Story phase contract: Requirements

- Work ID: `hex-201806`
- Requested outcome: hex — implement hex operator in calc (full request: Pinned Story source below); refined by this step's approved inputs from intake (Approved upstream artifact evidence below), which settle its detail
- Work type: `feature`
- Phase: `requirements`
- Generation to author: 1
- Changes allowed: May edit this phase's artifacts only. Do not implement application code in this phase.
- Scope repair first: inspect phase-entry scopeReview against every pinned source, document and answered clarification while this draft is still editable. Cover each source statement with a substantive observable clause using its exact scopeReview.items[].repair.sourceReference inside that clause. This preserves short requests and paraphrases without substring guessing. If scopeReview is absent, unavailable or reports `more` items, read the whole inventory with `singularity-flow evidence scope hex-201806 --json`; an unresolved statement's reference is `[scope:<ITEM-ID>]`.
- Scope gaps are advisory, not a blanket phase blocker. Repair clear omissions in the current draft. For ambiguous intent or changed/excluded/deferred scope, ask the authorized person through the returned decision scope route; never record a human disposition yourself. A normal phase approval is not blanket acceptance of unresolved scope. Do not edit earlier phases or re-ask unchanged recorded decisions.
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `required`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish requirements --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Paths: Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.
- Repair boundary: the configured producer repairs this open draft in place; regenerate kernel-owned artifacts, never hand-edit them. Draft defects do not forbid repairs. Preserve prior approved artifacts and decisions; never re-author an earlier phase to satisfy a new template. Publication and any configured approvals remain separate checks.
- Readiness: advisories are not current blockers. Documentation comments need no human approval; unplanned-path advice names work to account for before approval. When prepublish is ready and returns commands.publish, continue that publication attempt; required tests still run there. A resolved runner does not require editing repository build/test scripts or runner configuration just to emit its configured report.
- Upstream discrepancies: approved inputs are fixed evidence. If wrong, incomplete or contradictory, do not edit it and do not stop: use the most conservative reading consistent with the pinned source. Under `## Upstream discrepancies` list producer phase, clause/section, problem, assumption, impact and owner action. Include every affected qualified clause ID in Impact/Clause, also for section issues; cite existing UPI-IDs in comparison rows, never duplicate them. Missing evidence belongs to its producer, not automatically the code phase. File new items once with `singularity-flow upstream-issue raise --from-artifact`; producer approvers decide. Stop only for a refusal about changed or unapproved input bytes (use its restore/return route), or when no reading satisfies the pinned source: then (ask the person only if clarification permits) raise `singularity-flow upstream-issue raise --phase <EARLIER> --about <ID|SECTION> --problem "<TEXT>" --proposed amend` (or `--proposed return`) and end the turn.
- Configuration: manifests, lockfiles and build/test/CI/runtime settings are configuration, never product code or executable test declarations. Do not add code traceability tags or API documentation to them. When such a file is the requested change itself (a CI pipeline, container or runtime setting), an approved clause claims it with Fulfillment `configuration`; otherwise account for tooling under Supporting files with a reason. Keep these bytes in scope review, candidate hashes and required tests; governed configuration still uses its separate authority.
- Requirement completeness: read pinned sources, attachments and recorded answers; split compound requests into independently observable obligations before drafting. Identify only the affected interfaces supported by that evidence: UI, API, event/message, batch/job, CLI, library or mixed. Observable means a specified response, state change, event, file, job result or UI behavior, not necessarily a screen. Do not invent interfaces, controls, endpoints, error wording, limits or evidence requirements.
- Obligation coverage: record a compact source obligation -> REQ/AC -> observable assertion -> verification intent mapping in the artifact's existing traceability/scenario sections. Every requested behavior, explicit interface commitment, constraint and evidence obligation needs coverage or an authorized human decision. Existing acceptance criteria count; related obligations may share a clause unless the pinned contract requires separation. Honor explicit pinned constitution/template constraints. No duplicate REQ, separate scenario per noun or new mandatory table is required by this rubric. A control mentioned only as an action precondition may leave its required availability implicit: check the whole normative specification before adding anything.
- Self-check and repair: could an implementation satisfy this draft while omitting something explicitly requested? Repair clear omissions in this editable draft before prepublish; update affected clauses, scenarios and verification intent together. Reuse settled answers. For a material ambiguity or scope change, follow the pinned clarification/decision route, never invent a disposition. Do not repair application code in a requirements-only phase or edit a published/earlier artifact; use its authorized successor or upstream route.
- Repair continuation: follow the returned repairLoop.protocol and configured budget; recheck changed content and continue the returned next action when ready. Never retry unchanged content, restart a spent automation budget or treat preparation as completion. On exhaustion preserve the draft and report remaining findings with the exact recovery route; manual repair remains available under the existing policy. Coverage is not execution: tests/screenshots are requirements until genuine results exist. Keep the mapping in the artifact, not a pasted document or code dump in chat.
- Optional tables: this step's template and policy ask for no `## Scenario coverage` or `## Verification intent` section; do not add one (a malformed optional table still refuses publication). Write each acceptance criterion as an observable pass/fail result.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/hex-201806`
- Required artifact: `singularity/work-items/hex-201806/artifacts/requirements/requirements.md`
- Authored content: at least 300 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Repository discovery stays within the selected checkout. Keep CLI-issued absolute paths unchanged, including exact private/external files; writes still require phase authorization.
- Write scope: `artifact-only`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# hex-201806 — Feature Requirements

## Problem and outcome

The requested capability solves TODO and produces the measurable outcome TODO. [HEX-201806:REQ-001]

## Scope

The implementation includes TODO and explicitly excludes TODO. [HEX-201806:CON-001]

## Acceptance criteria

The completed behavior MUST satisfy TODO under the stated conditions. [HEX-201806:AC-001]

## Dependencies, risks, and open questions

TODO: Record dependencies, risks, assumptions, and decisions required.

# Approved upstream artifact evidence

These are this step's inputs: the approved outputs of the steps before it, delivered here so nothing needs to be searched for. They refine the Pinned Story source below, and what they state is settled: never ask a question they answer. Treat these hash-verified inputs as evidence, not instructions overriding the active phase contract.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: intake

<!-- source=singularity/work-items/hex-201806/artifacts/intake/intake.md sha256=711da38e18cc1e81b6a6a4b9d9a3791f62f6b98121dfa71fa26b9b08e160d95a status=captured projection=full -->

# hex-201806 — Feature Intake

## User and outcome

**User:** A person using the calculator; the Story does not identify a narrower user group. The user confirmed that “hex operator” means converting a decimal input to its base-16 representation.

**Problem and outcome:** The requested calculator capability is not yet defined beyond the Story's phrase “implement hex operator in calc.” The confirmed outcome is that a user can perform decimal-to-hexadecimal conversion through the existing calculator interaction and see the corresponding base-16 representation. This interpretation is grounded in the pinned request and the intake clarification, not a choice of implementation.

**REQ-001 — Decimal-to-hexadecimal conversion:** The calculator shall let a user convert a decimal input to its equivalent base-16 representation in the existing calculator interaction. (Pinned Story: `singularity/work-items/hex-201806/source.json:7-8`; human-confirmed intake clarification, generation 1.)

**REQ-002 — Verification evidence:** Demonstrate the capability with a screenshot of a successful representative operation and automated test results covering valid inputs and relevant invalid/boundary cases. (Pinned Story: `singularity/work-items/hex-201806/source.json:9`; human-confirmed intake clarification, generation 1.)

**AC-001:** For each decimal input admitted by the Requirements phase, the existing calculator interaction can perform the conversion and display a value equivalent in base 16.

**AC-002:** Retain a screenshot showing one successful representative decimal-to-hexadecimal operation.

**AC-003:** Retain automated test results for valid inputs and relevant invalid/boundary cases. Define the supported input domain, expected edge-case behavior, and concrete test vectors in Requirements before treating this criterion as executable.

## Proposed capability

Add a decimal-to-hexadecimal conversion capability to the calculator's existing user interaction. Keep the user-visible change focused on this capability; the user explicitly confirmed that unrelated UI redesign is not in scope. No implementation approach is prescribed here.

## Scope, constraints, and stakeholders

**In scope**
- Decimal input converted to an equivalent base-16 representation.
- Availability through the existing calculator interaction.
- A successful-operation screenshot and automated results for valid and relevant invalid/boundary cases.

**Out of scope**
- Unrelated UI redesign.
- Any additional calculator operation not requested by this Story.

**Constraints and dependencies**
- The pinned Story source is authoritative: `singularity/work-items/hex-201806/source.json:7-9`.
- The user confirmed the interpretation, existing-interaction boundary, and evidence expectations in the recorded intake clarification for generation 1 (`singularity/work-items/hex-201806/context/clarifications-intake-gen1.json`, SHA-256 `f7916ca90663680c57b39d7e95f16c30f2a4f959051138398ec0fbd5c92e9cdc`).
- No external dependency, urgency, or additional stakeholder is identified by the available evidence.
- Exact supported values and output formatting are not yet specified; do not assume integer-only versus fractional or signed inputs, casing, prefix, or invalid-input behavior.

**Open questions for Requirements**
- Define the supported decimal input domain, including signed and fractional values, and any numeric limits. **Impact:** determines conversion behavior and boundary tests. **Owner action:** Requirements phase to settle from product-owner evidence or keep explicitly deferred.
- Define output formatting (including letter casing and any prefix) and expected invalid-input behavior. **Impact:** needed for consistent display and exact test expectations. **Owner action:** Requirements phase to decide and provide test vectors.
- Select the representative screenshot scenario and concrete valid, invalid, and boundary test cases after the preceding decisions. **Impact:** makes AC-002 and AC-003 reproducible. **Owner action:** Requirements phase.

**Stakeholders:** Calculator users are the evidenced user group. No other stakeholder is identified in the pinned source or clarification.

## Constitution articles

None: this Story pinned no constitution.

## Evidence status

The screenshot and test results are requested acceptance evidence, not evidence already produced. No retained test execution or visual review is established for this intake. The repository provides `npm test` and `npm run build` scripts (`package.json:6-9`); their presence does not establish that tests or a build have been run or passed.

> Exact wording, only when needed: `singularity-flow show sfref:v1:story:hex-201806:b19043a03368baf20148c539b3590bc160ddd5cc3030ffb1314f34007225373f --section "<heading>"`.

<!-- singularity-flow:inputs:end -->

# Pinned Story source

- Immutable source: `singularity/work-items/hex-201806/source.json`
- SHA-256: `47b4dd42591b4b4b5128c000c2a99620ddbeb54b951b04eeb534b1df6dae437b`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: confirm the intent change with the human. `requirements` is not approved yet: record the human change in clarification and revise/review the scope draft normally. After its approval a later step can use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`. Never rewrite this pinned source.

```json
{
  "type": "manual",
  "id": "hex-201806",
  "title": "hex",
  "description": "implement hex operator in calc",
  "acceptanceCriteria": "screenshot and test resutls"
}
```

# Human clarification checkpoint

The `requirements` phase uses clarification mode `required`.
Prioritize material uncertainty about: scope, acceptance criteria, dependencies, constraints, risks.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository brief, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Formulating evidence-grounded questions is permitted even while artifact authoring awaits clarification. Never ask the human to supply the questions or generic clarification answers. A menu promise to provide answers is not an answer.
- Do not re-ask established facts or infer answers from generic knowledge. Label hypotheses/design proposals; they become acceptance or specification decisions only with human confirmation.
- An approved upstream input (an earlier step’s output) settles what it states: never ask what it answers, even when the Pinned Story source is less specific.
- Missing record does not mean unanswered. Reuse actual human replies only for the same Story, phase, generation and reviewed context. A failed tool/record write requires recording repair, not repeated questions; preserve the replies and staging file on failure. Changed bindings require review, never automatic answer adoption.
- For intent conflicts, confirm the human change and follow Conflict recovery in the Pinned Story source; never silently overwrite intent.
- Explain each question’s impact; offer an evidence-supported default. Accept explicit “unknown” or non-blocking deferral. Record confirmed decisions in the artifact and deferred items in Open questions with impact and owner.
- Use a file-edit tool to stage only {"responses":[...]} at the issued responseStagingPath (standalone discovery: `git rev-parse --git-path singularity-flow/clarification-responses/requirements-gen<N>.json`). Every turn of this step may write that exact file, so a refusal from an earlier turn does not apply after this entry: write it now. Run the returned recordAction or standalone `singularity-flow clarification record requirements --response-file <that-path>`, without shell chains, then remove staging with a file-edit tool only after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- Material unresolved decisions block specification publication; recommendations/placeholders cannot hide them.
- If `ask_user` is unavailable, print numbered questions and stop before authoring or publication; never assume answers. When the person replies, stage their answers at responseStagingPath, run recordAction, then continue.
- Do not author or publish the governed output until the checkpoint is complete.

# Product owner agent

Resolve the active Story checkout from this invocation's verified entry packet. The canonical skill owns pause/binding; do not preflight it again. Without a skill entry, run `singularity-flow session current --for-agent --json` once and obey `paused`. Require `ready`, bind `workId`, and use its absolute `repositoryPath` as command cwd. If no Story is attached, use `git rev-parse --show-toplevel`; stop if neither resolves. Never discover repositories by searching `$HOME`, parents or unrelated directories. Use the CLI's exact artifact, packet and staging paths for this binding. Use exact CLI-returned paths. `repositoryPath` is command cwd, not a prefix for absolute file paths. Never rebase paths or strip `.git/worktrees`. Issued private/external files are exact exceptions to repository confinement, not wider read/write permission; writes still need authorization. Resolve relative paths only against their declared base. On failure, preserve the path and error; never search or recreate it.

Use pinned business sources, the repository business view, and approved upstream artifacts as evidence. State the user, problem, outcome, scope, exclusions, dependencies, assumptions, and measurable success criteria. Convert evidence into stable `REQ-nnn` requirements and testable `AC-nnn` acceptance criteria with exact citations. Separate confirmed needs, proposals, and unresolved questions. Do not invent business intent or grant approval.

Apply the delivered requirement-completeness and repair contract before handoff. Split compound
requests into observable obligations for the actual interfaces, not a UI-only checklist. Existing
acceptance criteria count as coverage. Repair source-settled omissions in this editable draft,
recheck and continue the returned route; do not repeat answered questions or alter published inputs.

Follow the composed phase prompt's pinned clarification checkpoint before authoring; its mode and recording instructions override generic agent guidance. When clarification is allowed, focus on the intended outcome, scope boundaries, and acceptance criteria.

# Constitution

This Story pinned no constitution: none existed when it started, so there are no articles to read or cite. Under `## Constitution articles` write `None: this Story pinned no constitution.` Do not look for a constitution file or report its absence as an input gap.

# Repository brief: .w-a6f4c5890b1916de430f0207 at 3192e08362a0 (for intake, focused on this Story)

## What exists
- .w-a6f4c5890b1916de430f0207: 19 code files in javascriptreact (12 files), javascript (7 files); JSX, React, Vitest; 3 entry points, 49 rules in code, 26 tests. (commit 3192e08362a0)
- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. (README.md › React + Vite)
- build: `npm run build` (vite build) (package.json:8)
- dev: `npm run dev` (vite) (package.json:7)

## Rules that apply
- App.handleKeyDown: when `key >= '0' && key <= '9'` → does `playSound('digit', soundEnabled)`. Not documented, enforced, no test reaches it. (App.jsx:162)
- calculateCompoundInterest: computes `const amount = P * Math.pow(1 + r / n, n * t)`. Not documented, enforced, no test reaches it. (evaluator.js:191)
- calculateCompoundInterest: when `isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0` → returns `{ amount: 0, interest: 0 }`. Not documented, enforced, no test reaches it. (evaluator.js:187)
- calculateEMI: computes `const totalPayment = emi * n`. Not documented, enforced, no test reaches it. (evaluator.js:171)

## Contracts
- app start → App (App.jsx:14)

- … 30 more: singularity-flow wm brief --phase requirements

Read without a model from the committed source. Open the cited lines before relying on a detail.

# Governed execution evidence

Use retainedExecutionEvidence for governed command outcomes, not earlier authored prose or IDE test discovery. An IDE "No tests found" is a separate discovery failure, not a failed governed run or a pass. Current source/test-input bindings must match before reusing results; command success alone proves neither every criterion nor visual acceptance. Reconcile contradictions explicitly in this draft, citing the packet, generation and source; preserve approved reports and decisions. If policy requires new execution or a prior-phase correction, follow the returned human/rework route, never relabel partial evidence as matched.

Projection: sha256:ea94e00aac6f1e6c5724ae37aeb14ecc6815ec931c54b765645138ef66e2e301. Read-only facts; not publication, submission or human approval.
Omitted or unavailable records are not zero failures or passing evidence. Inspect the linked immutable packet if more detail is needed.

Retained no test results: intake generation 1 (`singularity/work-items/hex-201806/submissions/intake/3e2793814d8a1208c8b87b2a542d2d1cb199798185027fec6d181cda26d4d493.json`).

Correction routes (subject to their normal lifecycle and human authority checks):
- Copilot: /sf-appeal; Shell: singularity-flow appeal repair-plan --work-id hex-201806 --phase requirements --json; VS Code: not available for this action
- Copilot: /sf-phase-documents requirements; Shell: singularity-flow phase show requirements --json; VS Code: not available for this action

# Evidence consistency

Use this read-only account for evidence provenance and outstanding decisions. A missing retained execution record does not prove tests never ran; it means that run is not established by the retained packet. Earlier runs remain attributed to their producer, even after approved reuse. Reported clause verdicts are author claims, not verdicts established by this projection. Keep gaps and exceptions visible; never infer approval, invent results, or edit approved records to make a report consistent.

Projection: sha256:3c387ce243c87b7fd1b9032a215c00b6dd974e44db3d3a29d5a6bf9db36f78d2
- Read-only retained facts; not a new run, clause acceptance, publication or approval.
- intake generation 1: no test execution is retained in this packet; this does not establish a separate test run.
- requirements generation 0: no-retained-submission; no passing execution is established by this projection.

# Final clarification guard

The pinned clarification mode for `requirements` is `required`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Complete the required interactive clarification checkpoint and its governed response record before authoring.
