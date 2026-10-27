# Release verification evidence index — ws-graph

## Binding

- Approved producer: Verification generation 1
- Approved Verification packet: `singularity/work-items/ws-graph/submissions/verification/f1fd6d074d53d62063f2dc67d377a67c3278b7007ccedb386b895cd694bc5601.json`
- Packet SHA-256: `f1fd6d074d53d62063f2dc67d377a67c3278b7007ccedb386b895cd694bc5601`
- Verification source commit: `61fe746aabb1cc8d156781dd3f5ef2a98eb6152e`
- Verification source tree SHA-256: `4f0d37122b5b85599524f46413470c275e5c9c37ddcedd2af0eab0f16dc49318`
- Current release source tree SHA-256: `4f0d37122b5b85599524f46413470c275e5c9c37ddcedd2af0eab0f16dc49318`
- The retained implementation packet binds to the same source-tree hash; its commit is `6b9fd4919d9405b02264f6c41934c1e399cdde5b`.

## Retained evidence

| Evidence | Path | SHA-256 / identity | Observed result |
|---|---|---|---|
| Verification packet | `singularity/work-items/ws-graph/submissions/verification/f1fd6d074d53d62063f2dc67d377a67c3278b7007ccedb386b895cd694bc5601.json` | `f1fd6d074d53d62063f2dc67d377a67c3278b7007ccedb386b895cd694bc5601` | Verification generation 1 records `node-tests` and `playwright-tests` as passed, source binding matched; it contains no structured test counts or retained attempt receipts. |
| Playwright attempt receipt | `singularity/work-items/ws-graph/context/code-delivery/tests/attempts/implementation/TA-12c5c33baa01bfa2213c.json` | `4021ffec47138da25d76f5399aa57356a7f5faf35ad84c10f49385cc3050cf8e` | Retained implementation attempt passed: 1 discovered, 1 passed, 0 failed, 0 skipped; Playwright JSON; source tree binding matched. Test scenario enters `x^2 + y^2 = 10` and checks equation input, graph, circle, axes/grid. |
| Graph screenshot | `singularity/work-items/ws-graph/evidence/graph-tool.png` | `b2d50e40cf0b52d7003681104bb68418b37e3a4fc99b0cd4b4c8f7f250f499b3` | Inspected image shows the equation panel, labeled coordinate grid, and plotted circle. Its dark grid, cyan axes, and magenta curve differ from the light grid and green curve in DOC-001. |
| Reference image DOC-001 | Machine-local original supplied to this session; SHA-256 `1ad52d1cf49e17a9780752244dfc36373199a3b7e648040b79f03b9722ab47ab` | `DOC-001 — Screenshot 2026 10 27 at 8.04.15 AM` | Inspected original: equation expression at left, light labeled coordinate grid and green circle at right. This image was unavailable to the earlier source-intake environment, so its scope decision remains outstanding. |

## Evidence gaps

- No authorized human visual witness is recorded; the screenshot styling difference remains for human review.
- Verification generation 1 has no structured test result or separate retained receipt. The structured passing Playwright attempt cited above belongs to implementation generation 1, not a new verification run.
- No security-specific, invalid-input, accessibility, performance, resilience, or observability audit is retained. Such results are not inferred from the passing acceptance test.
- DOC-001's source-scope decision remains owned by the human scope authority.

The retained results are tied to the source-tree hash above. They document evidence only; they are not a human verdict, publication, or approval.
