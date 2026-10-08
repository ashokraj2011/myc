<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: arch.contracts@4
view-spec-sha256: sha256:13ff5bb50461e3b7a40d8e34e1785fd29ebd36b5134a59c7630fa5304d2997b0
fact-ledger-sha256: sha256:3a3b055e09270c35bca9bc1379765611cccf3ebb360c55d6c9b33bc2e169fd72
composer-core-sha256: sha256:4064320623deeb5a8f8698207e7b7f6350ae399015a5326d68c894be476e6242
composition-candidate-sha256: sha256:ce022d15ae04abd132beb01d50fb8adda1f903fb5b1cf556117fa9282b36fb25
validator-sha256: sha256:b6333144b66c5f64a1c5764de996139ff8e7caabc008289769ed4edf83f962ae
-->

# Architecture contracts {#arch.contracts}

**TL;DR** src/utils/audio.js declares export const playSound at line 18. [F:FACT-04ebc705a8a45eb4]

No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-bd25ad77fa032b2d]

## Public contracts {#arch.contracts.public-contracts}

No registered deterministic producer supplied protocol-field for arch.contracts@4 within the pinned scope. [F:FACT-06b92ea324a8de92]

No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope. [F:FACT-0b75256947ec9954]

No registered deterministic producer supplied interface for arch.contracts@4 within the pinned scope. [F:FACT-72c2c66bb8588891]

## Implementations {#arch.contracts.implementations}

No registered deterministic producer supplied implementation for arch.contracts@4 within the pinned scope. [F:FACT-d37231b1d6385c5f]

## Consumers {#arch.contracts.consumers}

No registered deterministic producer supplied consumer-dependency for arch.contracts@4 within the pinned scope. [F:FACT-e2009099116afbd7]

## Contract contradictions {#arch.contracts.contract-contradictions}



## Unavailable runtime guarantees {#arch.contracts.unavailable-runtime-guarantees}

No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-bd25ad77fa032b2d]

## Facts {#arch.contracts.facts}

```json
{
  "fact_ledger_sha256": "sha256:3a3b055e09270c35bca9bc1379765611cccf3ebb360c55d6c9b33bc2e169fd72",
  "facts": [
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/audio.js declares export const playSound at line 18.",
      "claimSha256": "sha256:21875c1a9b7ee75618c0a398656b3de536b8d312a70f6988f805ad8cac218b9d",
      "conflictsWith": [],
      "derivationId": "DRV-c7e97e5ae05d63d4",
      "evidenceIds": [
        "EV-9374ac66621f3028"
      ],
      "factSha256": "sha256:129a8d2b33f6983396629a02d968e0e70c4c3cff468635fb474202cf1b717c51",
      "factType": "signature",
      "id": "FACT-04ebc705a8a45eb4",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/audio.js#playSound",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:4848cf1591eaa40a1de1fd92b2b612a5860df3c7a6ce4e66561b4c46c811612c",
      "factType": "protocol-field",
      "id": "FACT-06b92ea324a8de92",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied protocol-field for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:protocol-field",
        "kind": "analysis"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:a75cfca0c4a687ebd7dd2c38c56f0f063ae58e12178413c802b0c5c68fc8322e",
      "factType": "schema-contract",
      "id": "FACT-0b75256947ec9954",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:schema-contract",
        "kind": "analysis"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:134264e79a000ad15cab7ab4dbef3bbf8e4388e097e640c10f8570605e358a93",
      "factType": "interface",
      "id": "FACT-72c2c66bb8588891",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied interface for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:interface",
        "kind": "analysis"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:a003f8b7c9604f371e34f52b99a78b99be0ebf988027794408dff604c72c142c",
      "factType": "runtime-guarantee",
      "id": "FACT-bd25ad77fa032b2d",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_RUNTIME_EVIDENCE",
        "detail": "No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:runtime-guarantee",
        "kind": "analysis"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:9220703d02b7e38b479dc842006827513f99303edf4da2b487e48c596b31a018",
      "factType": "implementation",
      "id": "FACT-d37231b1d6385c5f",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied implementation for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:implementation",
        "kind": "analysis"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:2151ca1683fc99aab582c004ec65e4a82d0c093b519c78ad6e8314736f27c966",
      "factType": "consumer-dependency",
      "id": "FACT-e2009099116afbd7",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied consumer-dependency for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:consumer-dependency",
        "kind": "analysis"
      }
    }
  ],
  "schema_version": 1,
  "scope_sha256": "sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df",
  "view": "arch.contracts",
  "view_spec_sha256": "sha256:13ff5bb50461e3b7a40d8e34e1785fd29ebd36b5134a59c7630fa5304d2997b0",
  "view_version": 4
}
```
---
generated-at: 2026-10-08T08:11:04.234Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:1750395b9e80a61ff1d29f80e3fd4f5ce89dc9121e09471927b40229235efc17
prompt-sha256: sha256:f5c3b08b52bb5ebee66228d8d89ec1ed1094bf4ba18dd969d457991819779216
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:51cf87d1-226b-4cda-af2d-04a7269ba891
model: auto
assurance: validated-derived-view
---
