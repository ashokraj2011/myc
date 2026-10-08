<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: biz.rules@4
view-spec-sha256: sha256:39cca8832e285cb7fd7b7b5a09deca629602e2c303908e0aace6032ccf2680b1
fact-ledger-sha256: sha256:30bbdc8c17df706cd685707318052c1cf5037026fea97be6d20fef9644ae82a3
composer-core-sha256: sha256:4064320623deeb5a8f8698207e7b7f6350ae399015a5326d68c894be476e6242
composition-candidate-sha256: sha256:1378f1c3785638ea978b70b07127449ab03fac9c0971b9fb3a77a71ad0e0d0b7
validator-sha256: sha256:b6333144b66c5f64a1c5764de996139ff8e7caabc008289769ed4edf83f962ae
-->

# Business rules {#biz.rules}

**TL;DR** No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope. No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope. [F:FACT-6285a0dd85403c34,FACT-f9509b576c4c89c9]

## Registered rules {#biz.rules.registered-rules}

No registered deterministic producer supplied rule-definition for biz.rules@4 within the pinned scope. [F:FACT-f9509b576c4c89c9]

## Conditions and outcomes {#biz.rules.conditions-and-outcomes}



## Rule locations {#biz.rules.rule-locations}

AC-003 is explicitly bound to src/utils/evaluator.test.js at line 6. AC-002 is explicitly bound to src/App.test.jsx at line 133. AC-004 is explicitly bound to src/App.test.jsx at line 184. AC-005 is explicitly bound to src/utils/evaluator.test.js at line 6. AC-001 is explicitly bound to src/App.test.jsx at line 133. AC-003 is explicitly bound to src/App.test.jsx at line 25. AC-005 is explicitly bound to src/build.test.js at line 14. [F:FACT-08baa7e4977bd19b,FACT-579660d283ffe038,FACT-5b27e706c6765863,FACT-6715155f5aa773e8,FACT-678b2c9db5d468e7,FACT-e06c95d7194d2dcf,FACT-f241fae3cb616373]

## Conflicts and unavailable meaning {#biz.rules.conflicts-and-unavailable-meaning}

No registered deterministic producer supplied business-meaning for biz.rules@4 within the pinned scope. [F:FACT-6285a0dd85403c34]

## Facts {#biz.rules.facts}

```json
{
  "fact_ledger_sha256": "sha256:30bbdc8c17df706cd685707318052c1cf5037026fea97be6d20fef9644ae82a3",
  "facts": [
    {
      "assurance": "source-exact",
      "claim": "AC-003 is explicitly bound to src/utils/evaluator.test.js at line 6.",
      "claimSha256": "sha256:f63f3324bfda3cda47c4b6c46e637f4df32e6c39db5fc144b02909e69f98ec88",
      "conflictsWith": [],
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-e755efa41535dd5a"
      ],
      "factSha256": "sha256:b15d27a5bc0528d05fce87a8362bb418ac22507b716d0ed28ced5859b2119309",
      "factType": "clause-binding",
      "id": "FACT-08baa7e4977bd19b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-003@src/utils/evaluator.test.js:6",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-002 is explicitly bound to src/App.test.jsx at line 133.",
      "claimSha256": "sha256:26b6db0eb4c729da5482cb5967aa9412fca5fc854f1e72bcdd1dfc42dec3b83e",
      "conflictsWith": [],
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-4198d324531c70f6"
      ],
      "factSha256": "sha256:2ce61fb1ef60cbe1f58b90ce97884048fd21b3370997dad44817150030df73f8",
      "factType": "clause-binding",
      "id": "FACT-579660d283ffe038",
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
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-dd3c62d6ebd0c4e4"
      ],
      "factSha256": "sha256:ef61eb3b0c65394912c9a598c3633e66ba88353e0da623b0ee57199e94337f82",
      "factType": "clause-binding",
      "id": "FACT-5b27e706c6765863",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-004@src/App.test.jsx:184",
        "kind": "contract"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:4fd71785b32eda9ad957b9ad8b1e3b80aca7cd2fbf1d77a183b0679797adfafb",
      "factType": "business-meaning",
      "id": "FACT-6285a0dd85403c34",
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
      "claim": "AC-005 is explicitly bound to src/utils/evaluator.test.js at line 6.",
      "claimSha256": "sha256:3fddd3be28eb523150d0c2c2b277f58acf9280bdfc709009496d8bb6e076ecaf",
      "conflictsWith": [],
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-44664ee9c0e3381a"
      ],
      "factSha256": "sha256:17db2bb0501240f4bc1ba2084428cf0cbd6d3167dfc7ddb938894b5dca32ddff",
      "factType": "clause-binding",
      "id": "FACT-6715155f5aa773e8",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-005@src/utils/evaluator.test.js:6",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-001 is explicitly bound to src/App.test.jsx at line 133.",
      "claimSha256": "sha256:82dc2ffba25958d5dd75dd2da3ab3953f0c0d9413c6c304b23be7e9405585775",
      "conflictsWith": [],
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-07b716d0e4a3757c"
      ],
      "factSha256": "sha256:5855c74f179e1fae689cef7654d119c773b808a26ceb05b0b44cf91c2a497192",
      "factType": "clause-binding",
      "id": "FACT-678b2c9db5d468e7",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-001@src/App.test.jsx:133",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-003 is explicitly bound to src/App.test.jsx at line 25.",
      "claimSha256": "sha256:d998e4bd46904d6beeabfe882fc18b51bdf087864754ec84ff8314121e82cc56",
      "conflictsWith": [],
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-e850637f6d5cfa1c"
      ],
      "factSha256": "sha256:ce37b78d6df2147e22c4ecb2b853809d1223173f232a00f30e1078fd7e7cc841",
      "factType": "clause-binding",
      "id": "FACT-e06c95d7194d2dcf",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "AC-003@src/App.test.jsx:25",
        "kind": "contract"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "AC-005 is explicitly bound to src/build.test.js at line 14.",
      "claimSha256": "sha256:e3598e32f035e39d542257561bde487e45a7ab7a4e4b17fa28f5bab7dd438a69",
      "conflictsWith": [],
      "derivationId": "DRV-856d200f81fa9587",
      "evidenceIds": [
        "EV-9077d33532c74131"
      ],
      "factSha256": "sha256:5c88bf9716bfb2eda7a97e587ad91a9eacf4cfbf8ce601f0898ea1f4a870e244",
      "factType": "clause-binding",
      "id": "FACT-f241fae3cb616373",
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
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:2c533587af6c00f0600fe19b880bd78fb793c53ba47e465f547f3d5a168c112c",
      "factType": "rule-definition",
      "id": "FACT-f9509b576c4c89c9",
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
generated-at: 2026-10-08T08:11:04.234Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:6d521493fbc312698fe3825b6e77cd959a0dc0727e2d3e246828699380243948
prompt-sha256: sha256:bd34c9b3faef57804f13a158a7082447e9e5386dd779c7c784d12b57a55cb035
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:5c353739-ecf1-47cc-b2a7-24fac5eb1a37
model: auto
assurance: validated-derived-view
---
