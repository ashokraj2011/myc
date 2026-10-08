<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: biz.rules@4
view-spec-sha256: sha256:39cca8832e285cb7fd7b7b5a09deca629602e2c303908e0aace6032ccf2680b1
fact-ledger-sha256: sha256:76a07c0b054d795b4b9fdde2eada6c9e8a3d61a271dd1cb52b6685a01ccac770
composer-core-sha256: sha256:b9860a376856e4a03c76111a71207068934fdcb1eefd292ca422590e7545c1af
composition-candidate-sha256: sha256:f9f292951982c2b48cab4018ce918263fd97d5bb697bc34f6eb4d8a96b4f606c
validator-sha256: sha256:28dc1c4656a8ede7c6c7bf9be228ebd73b9f32d76a8af8959b52a3e31493e601
-->

# Business rules {#biz.rules}

**TL;DR** No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope. [F:FACT-acd8cb963747416a]

No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope. [F:FACT-dcb6c72f418c6081]

## Registered rules {#biz.rules.registered-rules}

No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope. [F:FACT-acd8cb963747416a]

## Conditions and outcomes {#biz.rules.conditions-and-outcomes}



## Rule locations {#biz.rules.rule-locations}

AC-005 is explicitly bound to src/utils/evaluator.test.js at line 6. [F:FACT-19e29f91a2507dd6]

AC-005 is explicitly bound to src/build.test.js at line 14. [F:FACT-218709478bb98dc0]

AC-002 is explicitly bound to src/App.test.jsx at line 133. [F:FACT-36d3fe306790ad9b]

AC-004 is explicitly bound to src/App.test.jsx at line 184. [F:FACT-555e242a2aa3b9d4]

AC-001 is explicitly bound to src/App.test.jsx at line 133. [F:FACT-5d321b2f73858ab7]

AC-003 is explicitly bound to src/utils/evaluator.test.js at line 6. [F:FACT-b9579a66fc593fe8]

AC-003 is explicitly bound to src/App.test.jsx at line 25. [F:FACT-ee43277781291d70]

## Conflicts and unavailable meaning {#biz.rules.conflicts-and-unavailable-meaning}

No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope. [F:FACT-dcb6c72f418c6081]

## Facts {#biz.rules.facts}

```json
{
  "fact_ledger_sha256": "sha256:76a07c0b054d795b4b9fdde2eada6c9e8a3d61a271dd1cb52b6685a01ccac770",
  "facts": [
    {
      "assurance": "source-exact",
      "claim": "AC-005 is explicitly bound to src/utils/evaluator.test.js at line 6.",
      "claimSha256": "sha256:3fddd3be28eb523150d0c2c2b277f58acf9280bdfc709009496d8bb6e076ecaf",
      "conflictsWith": [],
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-44664ee9c0e3381a"
      ],
      "factSha256": "sha256:7b5b78f97c8d96ab7911898a23dd8fd5ac0fdac3b92d03c1b6d535ca061267d2",
      "factType": "clause-binding",
      "id": "FACT-19e29f91a2507dd6",
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
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-9077d33532c74131"
      ],
      "factSha256": "sha256:9a37b8735529d4e8326fe83a01a46483093fcaf08633671d77abd70e431c8ef6",
      "factType": "clause-binding",
      "id": "FACT-218709478bb98dc0",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-005@src/build.test.js:14",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-002 is explicitly bound to src/App.test.jsx at line 133.",
      "claimSha256": "sha256:26b6db0eb4c729da5482cb5967aa9412fca5fc854f1e72bcdd1dfc42dec3b83e",
      "conflictsWith": [],
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-4198d324531c70f6"
      ],
      "factSha256": "sha256:5efd9b807063a32e52378739b5ad9aaaf9f4bf8f4d20f509aad061e8ba0fba81",
      "factType": "clause-binding",
      "id": "FACT-36d3fe306790ad9b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-002@src/App.test.jsx:133",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-004 is explicitly bound to src/App.test.jsx at line 184.",
      "claimSha256": "sha256:9a251088365f44e7909e1ae44ec794f8442ba8f59dbc3d5712b5f6ddfbaf31d3",
      "conflictsWith": [],
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-dd3c62d6ebd0c4e4"
      ],
      "factSha256": "sha256:3285bc3f270cda9937e448d04201ea5371db0ba56e3d2e5ab0ea3161acad77ea",
      "factType": "clause-binding",
      "id": "FACT-555e242a2aa3b9d4",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-004@src/App.test.jsx:184",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-001 is explicitly bound to src/App.test.jsx at line 133.",
      "claimSha256": "sha256:82dc2ffba25958d5dd75dd2da3ab3953f0c0d9413c6c304b23be7e9405585775",
      "conflictsWith": [],
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-07b716d0e4a3757c"
      ],
      "factSha256": "sha256:16ff6b152f07d70ff45905185bf0edd2d95d0cacb0525261986de18c80ff71be",
      "factType": "clause-binding",
      "id": "FACT-5d321b2f73858ab7",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-001@src/App.test.jsx:133",
        "kind": "contract"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:2f54c902f578aabdc426b7e9cf42c882f784f674681d2a9ee64e6c2608fb5d81",
      "factType": "rule-definition",
      "id": "FACT-acd8cb963747416a",
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
      "claim": "AC-003 is explicitly bound to src/utils/evaluator.test.js at line 6.",
      "claimSha256": "sha256:f63f3324bfda3cda47c4b6c46e637f4df32e6c39db5fc144b02909e69f98ec88",
      "conflictsWith": [],
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-e755efa41535dd5a"
      ],
      "factSha256": "sha256:0457339471163ec915d9718ad5c440b1a6ecaa6752686ef72ca1fea897b794ed",
      "factType": "clause-binding",
      "id": "FACT-b9579a66fc593fe8",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-003@src/utils/evaluator.test.js:6",
        "kind": "contract"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:1842fcffb168a4f3162afa4c31f89266d2de93ebda85edfc9e017eb2ed550da4",
      "factType": "business-meaning",
      "id": "FACT-dcb6c72f418c6081",
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
      "claim": "AC-003 is explicitly bound to src/App.test.jsx at line 25.",
      "claimSha256": "sha256:d998e4bd46904d6beeabfe882fc18b51bdf087864754ec84ff8314121e82cc56",
      "conflictsWith": [],
      "derivationId": "DRV-a5c9b116bfe9fd46",
      "evidenceIds": [
        "EV-e850637f6d5cfa1c"
      ],
      "factSha256": "sha256:5a1b6f8f7ec60e8893026de846a354d5187837649fc5ba52f01b5b88d15b98a3",
      "factType": "clause-binding",
      "id": "FACT-ee43277781291d70",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-003@src/App.test.jsx:25",
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
generated-at: 2026-10-08T10:12:08.972Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:1c0ea7ffdf3331c96e770b00defe5f473faf6bb259e8eeb8071d7d99b9cb9276
prompt-sha256: sha256:c5f10e7a2bf2b953c915925ca472cd3eeaa3e72d0e176aedc1911b50e3fff2b7
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:69ac6f8a-008b-4317-9ca2-8e7ebbd35784
model: auto
assurance: validated-derived-view
---
