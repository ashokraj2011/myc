<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: biz.rules@4
view-spec-sha256: sha256:39cca8832e285cb7fd7b7b5a09deca629602e2c303908e0aace6032ccf2680b1
fact-ledger-sha256: sha256:6677ec818f6b150d5630802e06bc25742a28c1d6e5455eec88885a67e688b237
composer-core-sha256: sha256:e358e2b202702b74c84c32853e16130da2366d85de0189b571eb84fbf37dc5e2
composition-candidate-sha256: sha256:11c10d30111de4a65b556b892488d0a1d59f22bbc80f27045debe2e89ae39a6f
validator-sha256: sha256:e0ab2da2c523899958e7f0327e427291fac19073a2c44eb4657f65e6b176dff8
-->

# Business rules {#biz.rules}

**TL;DR** No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope. [F:FACT-b90d7dec949e2b73]

No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope. [F:FACT-109934c9886d574c]

## Registered rules {#biz.rules.registered-rules}

No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope. [F:FACT-b90d7dec949e2b73]

## Conditions and outcomes {#biz.rules.conditions-and-outcomes}



## Rule locations {#biz.rules.rule-locations}

AC-001 is explicitly bound to src/App.test.jsx at line 133. [F:FACT-bc0f7e337273dc01]

AC-002 is explicitly bound to src/App.test.jsx at line 133. [F:FACT-6319c5bc0f9082fe]

AC-003 is explicitly bound to src/App.test.jsx at line 25. [F:FACT-6c6e40c448d9da8a]

AC-003 is explicitly bound to src/utils/evaluator.test.js at line 6. [F:FACT-831c1653ef03ac38]

AC-004 is explicitly bound to src/App.test.jsx at line 184. [F:FACT-25a85608af99342a]

AC-005 is explicitly bound to src/utils/evaluator.test.js at line 6. [F:FACT-8fd9e4bddc76970a]

AC-005 is explicitly bound to src/build.test.js at line 14. [F:FACT-ad52360886a391f4]

## Conflicts and unavailable meaning {#biz.rules.conflicts-and-unavailable-meaning}

No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope. [F:FACT-109934c9886d574c]

## Facts {#biz.rules.facts}

```json
{
  "fact_ledger_sha256": "sha256:6677ec818f6b150d5630802e06bc25742a28c1d6e5455eec88885a67e688b237",
  "facts": [
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:b7be20ce969095729c0a7f8e05577a8f71081397717c32755e4ee470ef1851f2",
      "factType": "business-meaning",
      "id": "FACT-109934c9886d574c",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "biz.rules@4:business-meaning",
        "kind": "analysis"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-004 is explicitly bound to src/App.test.jsx at line 184.",
      "claimSha256": "sha256:9a251088365f44e7909e1ae44ec794f8442ba8f59dbc3d5712b5f6ddfbaf31d3",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-dd3c62d6ebd0c4e4"
      ],
      "factSha256": "sha256:2b95264da5f9b046b2ea770953b1b980abacb85eef252116e9d718729c573dd4",
      "factType": "clause-binding",
      "id": "FACT-25a85608af99342a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-004@src/App.test.jsx:184",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-002 is explicitly bound to src/App.test.jsx at line 133.",
      "claimSha256": "sha256:26b6db0eb4c729da5482cb5967aa9412fca5fc854f1e72bcdd1dfc42dec3b83e",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-4198d324531c70f6"
      ],
      "factSha256": "sha256:fdb3723f0dbb6c36aaec1acf519a17c6fc7a69dad663d5ec1f0ccd8d7253f187",
      "factType": "clause-binding",
      "id": "FACT-6319c5bc0f9082fe",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-002@src/App.test.jsx:133",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-003 is explicitly bound to src/App.test.jsx at line 25.",
      "claimSha256": "sha256:d998e4bd46904d6beeabfe882fc18b51bdf087864754ec84ff8314121e82cc56",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-e850637f6d5cfa1c"
      ],
      "factSha256": "sha256:663575db5ac5173af6d84797979d65ebc108e1fdd7b74ea7c50f5134789e455e",
      "factType": "clause-binding",
      "id": "FACT-6c6e40c448d9da8a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-003@src/App.test.jsx:25",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-003 is explicitly bound to src/utils/evaluator.test.js at line 6.",
      "claimSha256": "sha256:f63f3324bfda3cda47c4b6c46e637f4df32e6c39db5fc144b02909e69f98ec88",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-e755efa41535dd5a"
      ],
      "factSha256": "sha256:cf24718a38ff3a4de5e007468b270168c94f14e0ee88ce6c0b27c19e3ff93ab4",
      "factType": "clause-binding",
      "id": "FACT-831c1653ef03ac38",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-003@src/utils/evaluator.test.js:6",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-005 is explicitly bound to src/utils/evaluator.test.js at line 6.",
      "claimSha256": "sha256:3fddd3be28eb523150d0c2c2b277f58acf9280bdfc709009496d8bb6e076ecaf",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-44664ee9c0e3381a"
      ],
      "factSha256": "sha256:7843ac94f0cb5ad18251d5edc784568e7b3030280060612c6e36ecb96a84f421",
      "factType": "clause-binding",
      "id": "FACT-8fd9e4bddc76970a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-005@src/utils/evaluator.test.js:6",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-005 is explicitly bound to src/build.test.js at line 14.",
      "claimSha256": "sha256:e3598e32f035e39d542257561bde487e45a7ab7a4e4b17fa28f5bab7dd438a69",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-9077d33532c74131"
      ],
      "factSha256": "sha256:583de96dd463da4892b8eae1d168f80bf9fe694c5cb0e3c559581bc3a5ef42fa",
      "factType": "clause-binding",
      "id": "FACT-ad52360886a391f4",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-005@src/build.test.js:14",
        "kind": "contract"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:b2475a44be94a4696020544a91cac8f635c6be1806fbd5d2a5cbbe87193a8bf1",
      "factType": "rule-definition",
      "id": "FACT-b90d7dec949e2b73",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "biz.rules@4:rule-definition",
        "kind": "analysis"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-001 is explicitly bound to src/App.test.jsx at line 133.",
      "claimSha256": "sha256:82dc2ffba25958d5dd75dd2da3ab3953f0c0d9413c6c304b23be7e9405585775",
      "conflictsWith": [],
      "derivationId": "DRV-036790e050520944",
      "evidenceIds": [
        "EV-07b716d0e4a3757c"
      ],
      "factSha256": "sha256:adddb030c82c037db608117625054a279ac975910867bebf90cf3589eadd1be5",
      "factType": "clause-binding",
      "id": "FACT-bc0f7e337273dc01",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-001@src/App.test.jsx:133",
        "kind": "contract"
      }
    }
  ],
  "schema_version": 1,
  "scope_sha256": "sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df",
  "view": "biz.rules",
  "view_spec_sha256": "sha256:39cca8832e285cb7fd7b7b5a09deca629602e2c303908e0aace6032ccf2680b1",
  "view_version": 4
}
```
---
generated-at: 2026-10-08T10:34:13.035Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:669b647d08930b791077a68a3a4b01ed0df2a0fba866ef9a3041e6506312e9c3
prompt-sha256: sha256:e08f692daba1c0a537b71bc51438ae420854ab246979ceae9187ea60c0938a76
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:c95a4e3c-926d-4e8a-a5b6-34738c815ae6
model: auto
assurance: validated-derived-view
---
