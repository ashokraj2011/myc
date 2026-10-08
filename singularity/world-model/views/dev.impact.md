<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: dev.impact@4
view-spec-sha256: sha256:533e81e352ca8e38a12024424901e82668735ea5a638f7d5c85e30723ca24c41
fact-ledger-sha256: sha256:1d138078ec8d597e9503d9297baddb30e37363f2cdc88b8a17d3ef86d57fa87b
composer-core-sha256: sha256:4064320623deeb5a8f8698207e7b7f6350ae399015a5326d68c894be476e6242
composition-candidate-sha256: sha256:05c0419447f291d9ef70d26261d3253fbac5be8bbcab6470e7be2f30bb1d2386
validator-sha256: sha256:b6333144b66c5f64a1c5764de996139ff8e7caabc008289769ed4edf83f962ae
-->

# Development impact {#dev.impact}

**TL;DR** The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. src/App.jsx imports the in-scope module src/components/FinancialCalculator.jsx. [F:FACT-00b06cf6b6b3dcfa,FACT-01b08e390745938f,FACT-0201f43f517c608f]

## Changed structure {#dev.impact.changed-structure}

The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. [F:FACT-00b06cf6b6b3dcfa]

## Dependency impact {#dev.impact.dependency-impact}

src/App.jsx imports the in-scope module src/components/FinancialCalculator.jsx. src/components/FunctionGrapher.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/utils/evaluator.js. src/App.jsx imports the in-scope module src/components/StandardKeypad.jsx. src/App.test.jsx imports the in-scope module src/App.jsx. src/components/FinancialCalculator.jsx imports the in-scope module src/utils/evaluator.js. src/App.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/components/HistoryDrawer.jsx. src/components/HistoryDrawer.jsx imports the in-scope module src/utils/audio.js. src/utils/evaluator.test.js imports the in-scope module src/utils/evaluator.js. src/main.jsx imports the in-scope module src/index.css. src/App.jsx imports the in-scope module src/components/FunctionGrapher.jsx. src/utils/evaluator.js line 149 contains a lexical call candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable. src/components/UnitConverter.jsx imports the in-scope module src/utils/audio.js. src/utils/evaluator.js line 144 contains a lexical reference candidate to same-file declaration UNIT_TYPES at line 75; semantic resolution is unavailable. src/components/KeyboardShortcutsModal.jsx imports the in-scope module src/utils/audio.js. src/components/ScientificKeypad.jsx imports the in-scope module src/utils/audio.js. src/utils/evaluator.js line 157 contains a lexical call candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable. src/components/Header.jsx imports the in-scope module src/utils/audio.js. src/App.jsx imports the in-scope module src/components/Display.jsx. [F:FACT-0201f43f517c608f,FACT-0891f818bc2ec4d1,FACT-147146b50ecb2eb6,FACT-178f27a99857c514,FACT-1a418ea50393db89,FACT-1dae072eb20d5842,FACT-22ba7ed970f7c6fa,FACT-2bbf45c2a43cedc9,FACT-2ec06c28d50e996c,FACT-33190a720986281e,FACT-4a4230f4bba40420,FACT-4b206c3e2ee1712b,FACT-57dbf9831075644e,FACT-57ed38ed59eff002,FACT-5a5b41bc154b0b27,FACT-5ab9666e992e67a5,FACT-77f28322893e4979,FACT-9207b8ce683beed8,FACT-946a21f45d3e9c1e,FACT-99677dfa4a57c36e]

## Affected contracts {#dev.impact.affected-contracts}

The pinned source revision has no exact first-parent baseline; contract-change extraction is unavailable. [F:FACT-b20dd2168c086dea]

## Test impact {#dev.impact.test-impact}

The pinned source revision has no exact first-parent baseline; test-impact extraction is unavailable. [F:FACT-1c7efb7719ff7e8b]

## Unavailable analysis {#dev.impact.unavailable-analysis}

The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. The pinned source revision has no exact first-parent baseline; test-impact extraction is unavailable. The pinned source revision has no exact first-parent baseline; structural-impact extraction is unavailable. The pinned source revision has no exact first-parent baseline; contract-change extraction is unavailable. [F:FACT-00b06cf6b6b3dcfa,FACT-01b08e390745938f,FACT-1c7efb7719ff7e8b,FACT-3f956568c505d27c,FACT-b20dd2168c086dea]

## Facts {#dev.impact.facts}

```json
{
  "fact_ledger_sha256": "sha256:1d138078ec8d597e9503d9297baddb30e37363f2cdc88b8a17d3ef86d57fa87b",
  "facts": [
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-8b5a3b15e01bf7b3",
      "evidenceIds": [],
      "factSha256": "sha256:5abbdc047d7207e911fa2f634466389d76efde850d53d094da66b5a5910aac2e",
      "factType": "changed-symbol",
      "id": "FACT-00b06cf6b6b3dcfa",
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
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-7eb690154721d6bd",
      "evidenceIds": [],
      "factSha256": "sha256:5938cf085e902c7b17ab884b1bd2483e48f11b2deb92cdcd6e0fedbfe829c438",
      "factType": "runtime-frequency",
      "id": "FACT-01b08e390745938f",
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
      "claim": "src/App.jsx imports the in-scope module src/components/FinancialCalculator.jsx.",
      "claimSha256": "sha256:b6df43c549444531db85326bc1ffc1d598f1e630c43444ac5cc39f8d377adc94",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-1442171bdb53c747"
      ],
      "factSha256": "sha256:5f8f41ce4b5e883fdf7efe199195c1906cb9b308f77ed59f497bead3cc9bc3fd",
      "factType": "dependency-edge",
      "id": "FACT-0201f43f517c608f",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/FinancialCalculator.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FunctionGrapher.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:c35a9e5fedee9414e1d576732b4e2fd6a4b6fbb22483f68fd5f6c4170e5b0ffb",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-3fa0072ee0d173fe"
      ],
      "factSha256": "sha256:b180fdc6cfd27ede69b1999210b86417f1e1cd54d428b619fbf5b41ba6516140",
      "factType": "dependency-edge",
      "id": "FACT-0891f818bc2ec4d1",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FunctionGrapher.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/utils/evaluator.js.",
      "claimSha256": "sha256:b927e530087429b3b8ba0164f1060fdf206362871426f4ae6db4c5190f1a09ac",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-825c5be58b5acc9e"
      ],
      "factSha256": "sha256:ba89b38b6e2ca3680904391c49523e8fecacfdbb732843f31f2d99065c506e68",
      "factType": "dependency-edge",
      "id": "FACT-147146b50ecb2eb6",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/utils/evaluator.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/StandardKeypad.jsx.",
      "claimSha256": "sha256:df9bedf67921d36e549396d38bd98e456933894adbef6fb58992e33543d2265c",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-2818b14e3aa9774d"
      ],
      "factSha256": "sha256:251049fd85127510e0706d4cb6e3719d13c62cda9624305e305ed0185f99e70e",
      "factType": "dependency-edge",
      "id": "FACT-178f27a99857c514",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/StandardKeypad.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.test.jsx imports the in-scope module src/App.jsx.",
      "claimSha256": "sha256:f42d598031e4aa09073bb6b7b43c4628de6214751f9dbddac107a7253ddd9287",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-a28b55e93b0dd19f"
      ],
      "factSha256": "sha256:be1de5647b8ca8e9d366d2026dfa91904072d2868d92ac5d23cfa1dbb281e41f",
      "factType": "dependency-edge",
      "id": "FACT-1a418ea50393db89",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.test.jsx->src/App.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-8b5a3b15e01bf7b3",
      "evidenceIds": [],
      "factSha256": "sha256:9118eefbded7194761aede6fecc71788ec7a6a9ef48861a45eef7e5e49a1dc3c",
      "factType": "test-impact",
      "id": "FACT-1c7efb7719ff7e8b",
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
      "claim": "src/components/FinancialCalculator.jsx imports the in-scope module src/utils/evaluator.js.",
      "claimSha256": "sha256:b3c7d2a600f9e83f6083da01c1ff3235e0b713e8f5666f51fc0f9b7d2463988b",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-2513bfc50ac5ccd0"
      ],
      "factSha256": "sha256:043a73ef327766caeaf1af0e5bd94b0121bdf6dd59f5d04ac20850deafd40130",
      "factType": "dependency-edge",
      "id": "FACT-1dae072eb20d5842",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FinancialCalculator.jsx->src/utils/evaluator.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:d4e674892b255691a5dbee984d3be0f16d3cbec6de2a9733d745a5bc25d31dd7",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-f92388b1febdce82"
      ],
      "factSha256": "sha256:080b81c94430d4a764c20a780866bb8b5c8287a25ce8e8545c97ecd5851058cc",
      "factType": "dependency-edge",
      "id": "FACT-22ba7ed970f7c6fa",
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
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-626b53284318a4c4"
      ],
      "factSha256": "sha256:88f1da88a950b1adf81156c1eb62f7220a67df239a806e84c706f040ce4a1d44",
      "factType": "dependency-edge",
      "id": "FACT-2bbf45c2a43cedc9",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/HistoryDrawer.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/HistoryDrawer.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:fc8c994be54283ab403624474638f625c11f2defd702f2c8dd998af162064762",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-ad4a5bc004bf9aae"
      ],
      "factSha256": "sha256:d951f6eb357fbe581b7bbc59cca017e400729cc489f8b02a6eadf3488ed71088",
      "factType": "dependency-edge",
      "id": "FACT-2ec06c28d50e996c",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/HistoryDrawer.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.test.js imports the in-scope module src/utils/evaluator.js.",
      "claimSha256": "sha256:4043199deda0d7aa0afc2fba4baca3b06e449006542d424ae97ea7faab905ec9",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-cec729bdacddc9ed"
      ],
      "factSha256": "sha256:45a8c0996dc4f01525cce0205b503b271d568ca3505529e62f4289559e703ff5",
      "factType": "dependency-edge",
      "id": "FACT-33190a720986281e",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.test.js->src/utils/evaluator.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-8b5a3b15e01bf7b3",
      "evidenceIds": [],
      "factSha256": "sha256:225fdbe467822f0bd1cc716868ff2ae5ef11de266e99b5b352364fe77e199691",
      "factType": "structural-impact",
      "id": "FACT-3f956568c505d27c",
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
      "claim": "src/main.jsx imports the in-scope module src/index.css.",
      "claimSha256": "sha256:baa1695fbe902c8e0ceb8ca9c30cc961a5aa7f6b73d3b18f1b2361e03ce14b4e",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-1cf9c9c454018eb9"
      ],
      "factSha256": "sha256:f7d8718a3e80900db948617b2ffa056ff1558a3b303fd981656dc49bfa04a0f1",
      "factType": "dependency-edge",
      "id": "FACT-4a4230f4bba40420",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/main.jsx->src/index.css",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/FunctionGrapher.jsx.",
      "claimSha256": "sha256:9a1637cd603f6bd8ae25793381e1ab9b36af6290516064d622571df71a41a6a9",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-37b78ece3bc1951b"
      ],
      "factSha256": "sha256:1d034b72c6d339066753d29ec9799825fd1e31d27f455e613f920a2beca5e18f",
      "factType": "dependency-edge",
      "id": "FACT-4b206c3e2ee1712b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/FunctionGrapher.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 149 contains a lexical call candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable.",
      "claimSha256": "sha256:601e87d5e64e774e3a77de50fcf121cea0feecacf0f848e07ea039861f2036a6",
      "conflictsWith": [],
      "derivationId": "DRV-1ec54f9dc79d4140",
      "evidenceIds": [
        "EV-b4bd4c47c681b029"
      ],
      "factSha256": "sha256:9828a4e2321fcf732f8dceea7faed84db25afed015f37fe6c2410e7e76eb6a54",
      "factType": "dependency-edge",
      "id": "FACT-57dbf9831075644e",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:149->src/utils/evaluator.js#formatNumber",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/UnitConverter.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:dc51ad8a8f91de87e9706b8e0ccd25505f7dadbe2a0c413f7b6ee502707cb294",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-c2febb0ac56ac102"
      ],
      "factSha256": "sha256:72730763c0f42f9fc3994e89fe88b773f66d5b5cd54bce15c3e14d52a55d95e4",
      "factType": "dependency-edge",
      "id": "FACT-57ed38ed59eff002",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/UnitConverter.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 144 contains a lexical reference candidate to same-file declaration UNIT_TYPES at line 75; semantic resolution is unavailable.",
      "claimSha256": "sha256:080267142273165038419572a63c3c9dbdb6998f2433465c97b2f391e1a18afa",
      "conflictsWith": [],
      "derivationId": "DRV-1ec54f9dc79d4140",
      "evidenceIds": [
        "EV-65f1a36ef98c1586"
      ],
      "factSha256": "sha256:655bc4402032c863d9bec9a011def5d06165721f7d13cca254d3bb48fffc5c92",
      "factType": "dependency-edge",
      "id": "FACT-5a5b41bc154b0b27",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:144->src/utils/evaluator.js#UNIT_TYPES",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/KeyboardShortcutsModal.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:eb61878717e96ad92d526c0485c191600b70fdd2fa9181d58cdc46886a8727f1",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-f3ed456dbc1062d5"
      ],
      "factSha256": "sha256:822606b9f345a470d7a50bd21238f04dd6270b0d6c6e0c314210ad066cc485f0",
      "factType": "dependency-edge",
      "id": "FACT-5ab9666e992e67a5",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/KeyboardShortcutsModal.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/ScientificKeypad.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:8df28b00f55549827544c6ec154ce5caa87e705656742a2655ca6b676483fdf3",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-9e68d5e8a5f97ec7"
      ],
      "factSha256": "sha256:ec0adc7986c221d9e2572edb1e3bb53aa4d588ed5d19d70fce5aa65e97ecd779",
      "factType": "dependency-edge",
      "id": "FACT-77f28322893e4979",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/ScientificKeypad.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 157 contains a lexical call candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable.",
      "claimSha256": "sha256:26da035bc066b5941dafd88707ee546229dcf6324d9a932cc9d6608d337633ad",
      "conflictsWith": [],
      "derivationId": "DRV-1ec54f9dc79d4140",
      "evidenceIds": [
        "EV-59f389d599bbb24c"
      ],
      "factSha256": "sha256:1779a2158761463446fa34acd3898f2be53b510e2699d419f8004bf9c510f2d6",
      "factType": "dependency-edge",
      "id": "FACT-9207b8ce683beed8",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:157->src/utils/evaluator.js#formatNumber",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/Header.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:2b21a0e898b86d32dbcac29e0f2457c8dadad47b3d6c5c786f22653dda9986d4",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-809114f0b1eab1be"
      ],
      "factSha256": "sha256:8bbc8f981eac1d2b860ef2411835aae13a4459198f4622a7ec496c33b66b0a8b",
      "factType": "dependency-edge",
      "id": "FACT-946a21f45d3e9c1e",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Header.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/Display.jsx.",
      "claimSha256": "sha256:d4d7109e77377f5b1a2668cff03090646fff0de99decf5c93553a74a3aa49fe6",
      "conflictsWith": [],
      "derivationId": "DRV-cee3d0023694abe2",
      "evidenceIds": [
        "EV-04473b12a7a6bc49"
      ],
      "factSha256": "sha256:feac1843e76e00e2cc81c1ecbcbc42a531a1c15af46e6c899130238fda4c1582",
      "factType": "dependency-edge",
      "id": "FACT-99677dfa4a57c36e",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/Display.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-8b5a3b15e01bf7b3",
      "evidenceIds": [],
      "factSha256": "sha256:1031020bf31eb401e213273a2a3ba77f90951dcd22d9f3137cd3a1f61f0993cc",
      "factType": "contract-change",
      "id": "FACT-b20dd2168c086dea",
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
generated-at: 2026-10-08T08:11:04.234Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:c0f11673e13ec48b483d6fd2dca2cbc0658e729a2611537bca9e43e99267fb67
prompt-sha256: sha256:9ce35fd5c5619125ab25a8587c2fdab4900f2efbb166b189a0037ca6b009462f
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:85366740-6e94-45c6-b965-4d98e71188a0
model: auto
assurance: validated-derived-view
---
