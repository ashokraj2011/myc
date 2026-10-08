<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: dev.impact@4
view-spec-sha256: sha256:533e81e352ca8e38a12024424901e82668735ea5a638f7d5c85e30723ca24c41
fact-ledger-sha256: sha256:099954ff66f9f15ba9e898f17828fc05ed631c74fadcd551f16f9c90e524b2a5
composer-core-sha256: sha256:b9860a376856e4a03c76111a71207068934fdcb1eefd292ca422590e7545c1af
composition-candidate-sha256: sha256:defaa6a3cfb2184cded1791e49cfbe1cd01148cf62ecae5b8c91b38b99a0dbaf
validator-sha256: sha256:28dc1c4656a8ede7c6c7bf9be228ebd73b9f32d76a8af8959b52a3e31493e601
-->

# Development impact {#dev.impact}

**TL;DR** The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. [F:FACT-2a47ea9aa7a7faf0,FACT-b12e19189e01735a]

## Changed structure {#dev.impact.changed-structure}

src/utils/evaluator.js line 40 contains a lexical reference candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable. The pinned source revision has no exact first-parent baseline; structural-impact extraction is unavailable. The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. src/utils/evaluator.js line 47 contains a lexical reference candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable. src/utils/evaluator.js line 144 contains a lexical reference candidate to same-file declaration UNIT_TYPES at line 75; semantic resolution is unavailable. [F:FACT-04936004559c063d,FACT-0d7ee2a0de4dfbec,FACT-2a47ea9aa7a7faf0,FACT-4ccf9f07d43b1822,FACT-9e3ef3b8ff54aa62]

## Dependency impact {#dev.impact.dependency-impact}

src/components/FinancialCalculator.jsx imports the in-scope module src/utils/audio.js. src/main.jsx imports the in-scope module src/App.jsx. src/App.jsx imports the in-scope module src/components/FunctionGrapher.jsx. src/main.jsx imports the in-scope module src/index.css. src/components/KeyboardShortcutsModal.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/components/Header.jsx. src/components/FinancialCalculator.jsx imports the in-scope module src/utils/evaluator.js. src/components/Display.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/components/Display.jsx. src/components/UnitConverter.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/utils/evaluator.js. src/components/ScientificKeypad.jsx imports the in-scope module src/components/StandardKeypad.jsx. src/App.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/components/HistoryDrawer.jsx. src/App.jsx imports the in-scope module src/components/UnitConverter.jsx. src/components/StandardKeypad.jsx imports the in-scope module src/utils/audio.js. [F:FACT-1b16f0eff4701fe3,FACT-1d64e893630bf283,FACT-1e8b6e3f7ad4a258,FACT-37d970fa8ab49841,FACT-40a8f4c796b0b1ba,FACT-471272c7e50a2fa2,FACT-47da55e4b8d9f241,FACT-5eba772636343601,FACT-632112375d8928eb,FACT-735e59c0844bb25a,FACT-7dc0c8dd8ccc80cd,FACT-850b0f651cd77623,FACT-8c67b67d2e94c219,FACT-955f5b5b56133671,FACT-9c6cb32f75585612,FACT-b2280917fa269406]

## Affected contracts {#dev.impact.affected-contracts}

The pinned source revision has no exact first-parent baseline; contract-change extraction is unavailable. [F:FACT-7a76e9c31747a8bd]

## Test impact {#dev.impact.test-impact}

src/App.test.jsx imports the in-scope module src/App.jsx. The pinned source revision has no exact first-parent baseline; test-impact extraction is unavailable. [F:FACT-4d399a4689b597f6,FACT-8323cfb59822619b]

## Unavailable analysis {#dev.impact.unavailable-analysis}

No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. [F:FACT-b12e19189e01735a]

## Facts {#dev.impact.facts}

```json
{
  "fact_ledger_sha256": "sha256:099954ff66f9f15ba9e898f17828fc05ed631c74fadcd551f16f9c90e524b2a5",
  "facts": [
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 40 contains a lexical reference candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable.",
      "claimSha256": "sha256:14b29d2754eba4d1fe103be6059827ec59a871da24b50a297003954e90013480",
      "conflictsWith": [],
      "derivationId": "DRV-c4cba4b5136e0d56",
      "evidenceIds": [
        "EV-3b10478f2225bcd4"
      ],
      "factSha256": "sha256:0a09c66b33f8286d19f074da32748d29067789f525ce7645d4002b6effd369b9",
      "factType": "dependency-edge",
      "id": "FACT-04936004559c063d",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:40->src/utils/evaluator.js#formatNumber",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-f84f7b4e8d7d2a91",
      "evidenceIds": [],
      "factSha256": "sha256:7bd1bffc92f81a5158de4f80077884e56e078a55064873ba2ffeb0d71fa842ad",
      "factType": "structural-impact",
      "id": "FACT-0d7ee2a0de4dfbec",
      "reason": {
        "attemptedProducer": "change-region",
        "code": "NO_BASELINE",
        "detail": "The pinned source revision has no exact first-parent baseline; structural-impact extraction is unavailable."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "change-region:structural-impact",
        "kind": "analysis"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FinancialCalculator.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:a7196250dd5e04f56b0f6d35a05492e4315770e4b78e098c4609fb71896cad0a",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-7ea18bc2ab23d340"
      ],
      "factSha256": "sha256:0d60e9264d5a24c542f1ec478860a1ee4979295e3380316d56430b446c59390f",
      "factType": "dependency-edge",
      "id": "FACT-1b16f0eff4701fe3",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FinancialCalculator.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/main.jsx imports the in-scope module src/App.jsx.",
      "claimSha256": "sha256:afd7d800908cc799306df9a0be7424caab1fcbf6a07744da425ce1e50a10e0e1",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-4483d8eb2f06c59f"
      ],
      "factSha256": "sha256:e583180adb739b6a93f28535c31aeed163671e649c4cf47329a3abdacd2dfcbe",
      "factType": "dependency-edge",
      "id": "FACT-1d64e893630bf283",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/main.jsx->src/App.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/FunctionGrapher.jsx.",
      "claimSha256": "sha256:9a1637cd603f6bd8ae25793381e1ab9b36af6290516064d622571df71a41a6a9",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-37b78ece3bc1951b"
      ],
      "factSha256": "sha256:39f90f005211c90cc049a8f0b766747f5a2635b180c12d803c3efb7fe534341c",
      "factType": "dependency-edge",
      "id": "FACT-1e8b6e3f7ad4a258",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/FunctionGrapher.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-f84f7b4e8d7d2a91",
      "evidenceIds": [],
      "factSha256": "sha256:c80044cd7c65d96669c93121b5e5ec8f4e36bffc654e4201397fa0827852bbdd",
      "factType": "changed-symbol",
      "id": "FACT-2a47ea9aa7a7faf0",
      "reason": {
        "attemptedProducer": "change-region",
        "code": "NO_BASELINE",
        "detail": "The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "change-region:changed-symbol",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/main.jsx imports the in-scope module src/index.css.",
      "claimSha256": "sha256:baa1695fbe902c8e0ceb8ca9c30cc961a5aa7f6b73d3b18f1b2361e03ce14b4e",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-1cf9c9c454018eb9"
      ],
      "factSha256": "sha256:84cb0f19a405f6ba7d6e2f03b2bf5510d8f0731d450bc048246125b43dc84a3b",
      "factType": "dependency-edge",
      "id": "FACT-37d970fa8ab49841",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/main.jsx->src/index.css",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/KeyboardShortcutsModal.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:eb61878717e96ad92d526c0485c191600b70fdd2fa9181d58cdc46886a8727f1",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-f3ed456dbc1062d5"
      ],
      "factSha256": "sha256:9864a94aedd8ed65124c3ea36c19df523dbf679f0f365b650aa136a2d151f4cf",
      "factType": "dependency-edge",
      "id": "FACT-40a8f4c796b0b1ba",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/KeyboardShortcutsModal.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/Header.jsx.",
      "claimSha256": "sha256:aaa3b359be29fc210e202395b1b516347788f80a809f6de45ab7d7027457833d",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-a922c8ddb5919651"
      ],
      "factSha256": "sha256:7ee7fbed6423c9aa9463c3d33e9bb731c590543b1e59bfb08cdeaefdb07fab93",
      "factType": "dependency-edge",
      "id": "FACT-471272c7e50a2fa2",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/Header.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FinancialCalculator.jsx imports the in-scope module src/utils/evaluator.js.",
      "claimSha256": "sha256:b3c7d2a600f9e83f6083da01c1ff3235e0b713e8f5666f51fc0f9b7d2463988b",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-2513bfc50ac5ccd0"
      ],
      "factSha256": "sha256:0ea8e5f0cc006ec2303fab898c0a244a1b27041fb5393c2f4d31ed31bbb1e94d",
      "factType": "dependency-edge",
      "id": "FACT-47da55e4b8d9f241",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FinancialCalculator.jsx->src/utils/evaluator.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 47 contains a lexical reference candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable.",
      "claimSha256": "sha256:c6743598167aa4933d5070219680e9a349541e9fc5769f3db335e7e1d962009e",
      "conflictsWith": [],
      "derivationId": "DRV-c4cba4b5136e0d56",
      "evidenceIds": [
        "EV-e2c58a6cb3a7ffb9"
      ],
      "factSha256": "sha256:06149b3ea37dd73417c39657b7f1512290ccdf2203542c40682278fe0ee130af",
      "factType": "dependency-edge",
      "id": "FACT-4ccf9f07d43b1822",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:47->src/utils/evaluator.js#formatNumber",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.test.jsx imports the in-scope module src/App.jsx.",
      "claimSha256": "sha256:f42d598031e4aa09073bb6b7b43c4628de6214751f9dbddac107a7253ddd9287",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-a28b55e93b0dd19f"
      ],
      "factSha256": "sha256:c814c15e387c8c465a06ea4eecb064d6d247fa0221293e93f9ca24276961aaf2",
      "factType": "dependency-edge",
      "id": "FACT-4d399a4689b597f6",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.test.jsx->src/App.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/Display.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:1910a0e49a594a69ae9942736e209999486497b7d61dffb169189b993dfc843e",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-8c42de9354de7b57"
      ],
      "factSha256": "sha256:b5b2461c4ffa5eb67c646eb0d338cad4ae2769b38f3046f9ff6ffb9c8f1bff7b",
      "factType": "dependency-edge",
      "id": "FACT-5eba772636343601",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Display.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/Display.jsx.",
      "claimSha256": "sha256:d4d7109e77377f5b1a2668cff03090646fff0de99decf5c93553a74a3aa49fe6",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-04473b12a7a6bc49"
      ],
      "factSha256": "sha256:d0859cc43763e6b229d36c629dba6ee85b4c27b3d38a31116d5a5a5397ed4b8e",
      "factType": "dependency-edge",
      "id": "FACT-632112375d8928eb",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/Display.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/UnitConverter.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:dc51ad8a8f91de87e9706b8e0ccd25505f7dadbe2a0c413f7b6ee502707cb294",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-c2febb0ac56ac102"
      ],
      "factSha256": "sha256:2d8c90f4b4a10a822cbf1ec793bf988bca5a0818992437e14b9577acb8bb1f9d",
      "factType": "dependency-edge",
      "id": "FACT-735e59c0844bb25a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/UnitConverter.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-f84f7b4e8d7d2a91",
      "evidenceIds": [],
      "factSha256": "sha256:897590b4720e5278fde04fac8ff03b6495ca48f21918b39776f287ac44b8e9ba",
      "factType": "contract-change",
      "id": "FACT-7a76e9c31747a8bd",
      "reason": {
        "attemptedProducer": "change-region",
        "code": "NO_BASELINE",
        "detail": "The pinned source revision has no exact first-parent baseline; contract-change extraction is unavailable."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "change-region:contract-change",
        "kind": "contract"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/utils/evaluator.js.",
      "claimSha256": "sha256:b927e530087429b3b8ba0164f1060fdf206362871426f4ae6db4c5190f1a09ac",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-825c5be58b5acc9e"
      ],
      "factSha256": "sha256:0cb625e82c4a1e6063c21ce09738073f05102ae04c0239d1328353f57a9f97f1",
      "factType": "dependency-edge",
      "id": "FACT-7dc0c8dd8ccc80cd",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/utils/evaluator.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-f84f7b4e8d7d2a91",
      "evidenceIds": [],
      "factSha256": "sha256:0e8bcacfe599c161114895c97053bc4162e80536e6d7ed5187b826552fa783f9",
      "factType": "test-impact",
      "id": "FACT-8323cfb59822619b",
      "reason": {
        "attemptedProducer": "change-region",
        "code": "NO_BASELINE",
        "detail": "The pinned source revision has no exact first-parent baseline; test-impact extraction is unavailable."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "change-region:test-impact",
        "kind": "test"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/ScientificKeypad.jsx imports the in-scope module src/components/StandardKeypad.jsx.",
      "claimSha256": "sha256:a8043f379aee023f14f3c78ebf5a3f0e4f53a7f4cce4e1e4cd699a15edaa6774",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-5224f3c6a4a12a0c"
      ],
      "factSha256": "sha256:4abf1559f6ba731e943255ed49c02a0aaa158b0b6a25c172b714d4e5a1f809d7",
      "factType": "dependency-edge",
      "id": "FACT-850b0f651cd77623",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/ScientificKeypad.jsx->src/components/StandardKeypad.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:d4e674892b255691a5dbee984d3be0f16d3cbec6de2a9733d745a5bc25d31dd7",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-f92388b1febdce82"
      ],
      "factSha256": "sha256:0f7cb3db838cad4d135473c6c81e993ea50fd63fa0980250e62f59c84cd27956",
      "factType": "dependency-edge",
      "id": "FACT-8c67b67d2e94c219",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/HistoryDrawer.jsx.",
      "claimSha256": "sha256:9abc968734f0c0cf0bcbde9e555b7d23c08a1bcd0c2e9af47bada26bd8d71194",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-626b53284318a4c4"
      ],
      "factSha256": "sha256:38c5f95caaf268c2a61c6404b5e98bf8fdadce83c92724067c17574600854f3c",
      "factType": "dependency-edge",
      "id": "FACT-955f5b5b56133671",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/HistoryDrawer.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/UnitConverter.jsx.",
      "claimSha256": "sha256:5109f5679a46a44a7f348d90cbdb9944afc16797959fd74ee2c95704b7c77aab",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-799a99fdc5788ea2"
      ],
      "factSha256": "sha256:6090cef30b97bc73e0e0aa08c24b43e6e7f7d0a3299590e4ebaf045f804b410c",
      "factType": "dependency-edge",
      "id": "FACT-9c6cb32f75585612",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/UnitConverter.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 144 contains a lexical reference candidate to same-file declaration UNIT_TYPES at line 75; semantic resolution is unavailable.",
      "claimSha256": "sha256:080267142273165038419572a63c3c9dbdb6998f2433465c97b2f391e1a18afa",
      "conflictsWith": [],
      "derivationId": "DRV-c4cba4b5136e0d56",
      "evidenceIds": [
        "EV-65f1a36ef98c1586"
      ],
      "factSha256": "sha256:76b971675c9b45585ab00f8e04d6e4e29a27c166409ffb5d6ec5fc89a59e5bc7",
      "factType": "dependency-edge",
      "id": "FACT-9e3ef3b8ff54aa62",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:144->src/utils/evaluator.js#UNIT_TYPES",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:54e06dd56c259400229566ee635550d13920cf22cf404e584ec9625256222578",
      "factType": "runtime-frequency",
      "id": "FACT-b12e19189e01735a",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_RUNTIME_EVIDENCE",
        "detail": "No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "dev.impact@4:runtime-frequency",
        "kind": "analysis"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/StandardKeypad.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:525e36db0b413d93ff0ef31086fe0b81117cb2e6c2f880043b03b15964bfcb05",
      "conflictsWith": [],
      "derivationId": "DRV-03fb9f52d6575e47",
      "evidenceIds": [
        "EV-cbdc058263cb4e6f"
      ],
      "factSha256": "sha256:f63134a0951d175de6802067643bd14ad2527376c51b736bac4a487f48198a8e",
      "factType": "dependency-edge",
      "id": "FACT-b2280917fa269406",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/StandardKeypad.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    }
  ],
  "schema_version": 1,
  "scope_sha256": "sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df",
  "view": "dev.impact",
  "view_spec_sha256": "sha256:533e81e352ca8e38a12024424901e82668735ea5a638f7d5c85e30723ca24c41",
  "view_version": 4
}
```
---
generated-at: 2026-10-08T10:17:57.405Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:3c17caab2b3bc97567740d292eaeb03967b6334f84f8ff7d554d647985f81a99
prompt-sha256: sha256:8285fd733f79945f4b06e7c04eb63f9113f62b112a0a8163ecd0000e0cceb40d
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:a6f0d44f-89ac-48be-b90f-6846b45f760c
model: auto
assurance: validated-derived-view
---
