# Approved agent brief — Implementation

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `1h-hex`
- Producer: `implementation` generation 1
- Consumer: `convergence`
- Source: `singularity/work-items/1h-hex/artifacts/implementation/implementation-summary.md`
- Source SHA-256: `d8705a3b238c7a1b515dfa1c112d5530095e6dce70a0dbe73720b6f28638076c`

## Summary from “Agent brief”

Added a Hex action to the Standard keypad. It replaces the current eligible whole-number decimal
value with uppercase hexadecimal digits, including both an entered value and an evaluated result;
the approved example `15` becomes `F`. No screenshot-based behavior, persistence, or rollout
changes were introduced.

## Changed components and decisions

 - `src/App.jsx`: added the Hex conversion handler; it reads the active entered value or evaluated
   result and updates the existing display state. Clause comments bind it to
   `1H-HEX:REQ-001` and `1H-HEX:REQ-002`.
 - `src/components/StandardKeypad.jsx`: added the optional Hex button; the existing scientific
   keypad embedding does not receive its callback.
 - `src/App.test.jsx`: added functional regressions for entering `15` and converting an evaluated
   `15`; both assert the displayed `F` result and carry the approved AC tags.

No configuration, dependency, persistence, or data-migration changes were made. Negative and
fractional conversion behavior remains outside the approved scope.

## Tests and operational notes

Added two App functional tests tagged for `1H-HEX:AC-001` and `1H-HEX:AC-002`; they cover direct
entry and an evaluated whole-number result without screenshot or layout assertions. The configured
publication runner is `npm test -- --reporter=json --outputFile=.sflow/results/node-tests.json`.
Its initial execution failed with exit 127 (`sh: vitest: command not found`); `npm ci` installed
the locked dependencies. A fresh result is produced by the publication transaction and recorded
in its test evidence; no passing result is claimed in this artifact. No rollout flags or
operational changes are required.
