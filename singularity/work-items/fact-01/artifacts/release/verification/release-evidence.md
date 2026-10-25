# Release evidence index — fact-01

## Approved Verification evidence

- Producer: Verification generation 1, approved.
- Approved report: `singularity/work-items/fact-01/artifacts/verification/test-evidence.md`
  SHA-256 `caea3b089f8e11fc40a9642c9f1c2fd1c54bb83cf251bcf9afd6a55d6e230cbe`.
- Retained Verification submission packet:
  `singularity/work-items/fact-01/submissions/verification/3bc3553efa2bf3c60130422ecd6289b8b91c41649a31392491d0a5605227ad2a.json`
  SHA-256 `3bc3553efa2bf3c60130422ecd6289b8b91c41649a31392491d0a5605227ad2a`.
- The packet records the `node-tests` command as passed (exit 0), bound to source
  commit `e2d9b67398dec04edc779f9efec99fa1d0b7c71f` and source tree SHA-256
  `08da5be72df383ee81b97338bbb5cfc4d30ac5088384e9a4a20351c6a88075ff`.
  It has no structured test result, so it does not independently establish individual
  clause results.

## Requirement test evidence

- Retained implementation packet:
  `singularity/work-items/fact-01/submissions/implementation/03d82c64dbc7520e4bcdae7882d1eb93ecdbddfe8b633595d0bfe8aa32c20c40.json`
  SHA-256 `03d82c64dbc7520e4bcdae7882d1eb93ecdbddfe8b633595d0bfe8aa32c20c40`.
- Retained test attempt:
  `singularity/work-items/fact-01/context/code-delivery/tests/attempts/implementation/TA-778b45fb3b2dccc1bbd0.json`
  SHA-256 `fce661db5ce2e311c0b0ddb8cc388e76adfd96c3dc4ce06f6a7781d263235f1c`.
  The packet records 44/44 tests passed, 0 failed, 0 skipped, using `vitest-json`,
  bound to implementation commit `e1d21081e36b8d239a24413f8f6d3abf3ffc811f`
  and the same source tree SHA-256 above.
- The source test files are `src/utils/evaluator.test.js` (exact, boundary, `r > n`,
  and invalid-input cases) and `src/App.test.jsx` (representative calculator flow and
  clearing an incomplete submission). A fresh focused run in this release checkout
  used `npm test -- --run src/utils/evaluator.test.js src/App.test.jsx` and passed
  43/43 tests in both files. This local run is corroborating evidence, not a retained
  governed execution packet.
- The 43 focused tests and 44 tests in the retained implementation packet have
  different scopes: the former covers the two named files; the latter is the complete
  recorded run. This accounts for the count difference without claiming per-clause
  results from an aggregate count.

## Visual evidence

- Screenshot: `singularity/work-items/fact-01/evidence/ncr-result.png`
  SHA-256 `5818ced3e9acc34e2142c0e4fad1966bca5774581364c20291126bb7af4c0b61`.
- Direct inspection in this release turn showed the Combination Calculator with
  `n = 5`, `r = 2`, and result `10`, satisfying the representative screenshot check.
- No separately recorded, hash-bound human visual-review record is present in the
  approved Verification packet.

## Gaps and limits

- Verification generation 1's retained runner result has no structured test counts;
  the individual requirement test outcomes are therefore supported by the retained
  implementation execution and the fresh focused run, not by that Verification runner.
- No separate accessibility, security, resilience, or observability test result is
  retained. No such non-functional acceptance clause is in the active clause capsule.
- Large central combinations may take substantial time; no maximum input size or
  performance criterion was specified or tested here.
