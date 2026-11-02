---
name: demo-instruction-repair-imported
description: Repairs demonstrated failures within the approved scope, retains regression evidence and returns to independent checking.
metadata:
  sflow-label: Demo instruction-composed repair (imported)
  sflow-instructions:
    - demo-source-interpretation-imported
    - demo-fresh-test-evidence-imported
    - demo-reviewed-routing-imported
---

## Confirm the approved defect and scope

Read the failed checker packet and exact allowed source/test paths; do not expand intent.
<!-- sflow-instruction: demo-source-interpretation-imported -->

## Repair and validate

Make the smallest coherent source change and add clause-bound regression cases. Preserve
reference screenshots, failed reports and prior publications. Use the publication-owned test
runner when that phase policy requires it; hidden approved arguments are not missing configuration.
<!-- sflow-instruction: demo-fresh-test-evidence-imported -->

## Hand off, never self-certify final acceptance

Summarize changes and actual results, including anything unrun. Propose next=recheck, or
next=revise-intake when the desired behavior or repair scope needs human review.
<!-- sflow-instruction: demo-reviewed-routing-imported -->
