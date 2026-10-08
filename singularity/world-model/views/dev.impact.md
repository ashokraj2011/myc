<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: dev.impact@4
view-spec-sha256: sha256:533e81e352ca8e38a12024424901e82668735ea5a638f7d5c85e30723ca24c41
fact-ledger-sha256: sha256:926c94ed41cabacc0ead2fc02a80af6605bd6d5ed60049fa9eac1be990b11c29
composer-core-sha256: sha256:e358e2b202702b74c84c32853e16130da2366d85de0189b571eb84fbf37dc5e2
composition-candidate-sha256: sha256:e58b0088c30948cbdced16614e1886c927114a7234b590b776a2d2fa2ab4e6a9
validator-sha256: sha256:e0ab2da2c523899958e7f0327e427291fac19073a2c44eb4657f65e6b176dff8
-->

# Development impact {#dev.impact}

**TL;DR** The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. [F:FACT-ab147404f8818f57]

## Changed structure {#dev.impact.changed-structure}

- The pinned source revision has no exact first-parent baseline; changed-symbol extraction is unavailable. [F:FACT-ab147404f8818f57]
- The pinned source revision has no exact first-parent baseline; structural-impact extraction is unavailable. [F:FACT-627b1cd4bb4bbff9]

## Dependency impact {#dev.impact.dependency-impact}

- src/App.jsx imports the in-scope module src/components/Display.jsx. [F:FACT-0318ed10c4707ed0]
- src/components/UnitConverter.jsx imports the in-scope module src/utils/evaluator.js. [F:FACT-0911dadcd7488633]
- src/main.jsx imports the in-scope module src/index.css. [F:FACT-0d1c90e7e6e39848]
- src/App.jsx imports the in-scope module src/components/KeyboardShortcutsModal.jsx. [F:FACT-1583fce5848d293d]
- src/components/ScientificKeypad.jsx imports the in-scope module src/utils/audio.js. [F:FACT-18744653b8702cec]
- src/App.jsx imports the in-scope module src/components/FinancialCalculator.jsx. [F:FACT-1e09995014c52cf4]
- src/components/HistoryDrawer.jsx imports the in-scope module src/utils/audio.js. [F:FACT-205b0aacc89d7682]
- src/App.jsx imports the in-scope module src/components/StandardKeypad.jsx. [F:FACT-207e7d96f2e8dd39]
- src/utils/evaluator.js line 40 contains a lexical reference candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable. [F:FACT-29dd08ba283e64c2]
- src/components/UnitConverter.jsx imports the in-scope module src/utils/audio.js. [F:FACT-2d34bae4dfe49046]
- src/components/FunctionGrapher.jsx imports the in-scope module src/utils/audio.js. [F:FACT-33747ac1970a39a3]
- src/components/Display.jsx imports the in-scope module src/utils/audio.js. [F:FACT-35be5a003fbb164e]
- src/components/StandardKeypad.jsx imports the in-scope module src/utils/audio.js. [F:FACT-3f51e30855dad4cb]
- src/App.jsx imports the in-scope module src/components/Header.jsx. [F:FACT-489c01c6bc964b1d]
- src/utils/evaluator.js line 149 contains a lexical call candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable. [F:FACT-4c1dc67c81106c5d]
- src/components/ScientificKeypad.jsx imports the in-scope module src/components/StandardKeypad.jsx. [F:FACT-6145ce9656eb679d]
- src/main.jsx imports the in-scope module src/App.jsx. [F:FACT-90c03c7f6beb79e9]
- src/components/Header.jsx imports the in-scope module src/utils/audio.js. [F:FACT-93617eca72b08882]

## Affected contracts {#dev.impact.affected-contracts}

- The pinned source revision has no exact first-parent baseline; contract-change extraction is unavailable. [F:FACT-2c868a5d0e363bd5]

## Test impact {#dev.impact.test-impact}

- The pinned source revision has no exact first-parent baseline; test-impact extraction is unavailable. [F:FACT-ef8cfc451ff25ac4]
- src/App.test.jsx imports the in-scope module src/App.jsx. [F:FACT-954db4a3ab1f6d6d]

## Unavailable analysis {#dev.impact.unavailable-analysis}

- No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. [F:FACT-292f55b8eb34aa08]

## Facts {#dev.impact.facts}

```json
{
  "fact_ledger_sha256": "sha256:926c94ed41cabacc0ead2fc02a80af6605bd6d5ed60049fa9eac1be990b11c29",
  "facts": [
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/Display.jsx.",
      "claimSha256": "sha256:d4d7109e77377f5b1a2668cff03090646fff0de99decf5c93553a74a3aa49fe6",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-04473b12a7a6bc49"
      ],
      "factSha256": "sha256:f0571e827fec2e30d366475a0841c1f92ff0f58c7c05f605b6fa7c123b9cbd9f",
      "factType": "dependency-edge",
      "id": "FACT-0318ed10c4707ed0",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/Display.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/UnitConverter.jsx imports the in-scope module src/utils/evaluator.js.",
      "claimSha256": "sha256:5a99dae20dcc583f14c2dfe4087833773d7f2abbe016a8690b1267f19efb69ef",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-31f5fd9658b146cf"
      ],
      "factSha256": "sha256:fbb4c856f7a061e911e0c212f871aa27aa3dcba519d8537509977385a08747b6",
      "factType": "dependency-edge",
      "id": "FACT-0911dadcd7488633",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/UnitConverter.jsx->src/utils/evaluator.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/main.jsx imports the in-scope module src/index.css.",
      "claimSha256": "sha256:baa1695fbe902c8e0ceb8ca9c30cc961a5aa7f6b73d3b18f1b2361e03ce14b4e",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-1cf9c9c454018eb9"
      ],
      "factSha256": "sha256:a79631abb6acac937ea3bfd86c70564f97b8243d42bee7adfed96756e41172ab",
      "factType": "dependency-edge",
      "id": "FACT-0d1c90e7e6e39848",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/main.jsx->src/index.css",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/KeyboardShortcutsModal.jsx.",
      "claimSha256": "sha256:70d747d3e173b1b3bef9c163ccfa5528f60807a2d6cee6228c2b48ac730d97ff",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-5401cf9193ea416e"
      ],
      "factSha256": "sha256:a0ab36e65a5b3802164cdf2598f519668d6b1c36efa5d006f0c9faf7c8787609",
      "factType": "dependency-edge",
      "id": "FACT-1583fce5848d293d",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/KeyboardShortcutsModal.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/ScientificKeypad.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:8df28b00f55549827544c6ec154ce5caa87e705656742a2655ca6b676483fdf3",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-9e68d5e8a5f97ec7"
      ],
      "factSha256": "sha256:d218fbac85e76d0672de745ec2cfd5e605b35184befc205c7d8e7f8623ceb19f",
      "factType": "dependency-edge",
      "id": "FACT-18744653b8702cec",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/ScientificKeypad.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/FinancialCalculator.jsx.",
      "claimSha256": "sha256:b6df43c549444531db85326bc1ffc1d598f1e630c43444ac5cc39f8d377adc94",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-1442171bdb53c747"
      ],
      "factSha256": "sha256:98e0d8f360f3a3c0e203444102909c441920844a67f949b0a8733007e5b66230",
      "factType": "dependency-edge",
      "id": "FACT-1e09995014c52cf4",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/FinancialCalculator.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/HistoryDrawer.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:fc8c994be54283ab403624474638f625c11f2defd702f2c8dd998af162064762",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-ad4a5bc004bf9aae"
      ],
      "factSha256": "sha256:e27d11ed9256ed4fb5cae266b7e54dccbc8a445cd779df30901972eb3d062459",
      "factType": "dependency-edge",
      "id": "FACT-205b0aacc89d7682",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/HistoryDrawer.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/StandardKeypad.jsx.",
      "claimSha256": "sha256:df9bedf67921d36e549396d38bd98e456933894adbef6fb58992e33543d2265c",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-2818b14e3aa9774d"
      ],
      "factSha256": "sha256:c6778a8422c692dd1b96d14ba5982630569c606ce8a5d79712e3e1ed1ecf0c08",
      "factType": "dependency-edge",
      "id": "FACT-207e7d96f2e8dd39",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/StandardKeypad.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:b2b09aac1f94611140223d9b20371a0477c3fee49f53f00b724cbc3c94ba4fa9",
      "factType": "runtime-frequency",
      "id": "FACT-292f55b8eb34aa08",
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
      "claim": "src/utils/evaluator.js line 40 contains a lexical reference candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable.",
      "claimSha256": "sha256:14b29d2754eba4d1fe103be6059827ec59a871da24b50a297003954e90013480",
      "conflictsWith": [],
      "derivationId": "DRV-fa8e0da6829a83ee",
      "evidenceIds": [
        "EV-3b10478f2225bcd4"
      ],
      "factSha256": "sha256:a1477168a90c3f102bdc6f474f9beac5d060304d14cc5c58e91c158dff9e3df6",
      "factType": "dependency-edge",
      "id": "FACT-29dd08ba283e64c2",
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
      "derivationId": "DRV-e8a2c3ea4b8d8589",
      "evidenceIds": [],
      "factSha256": "sha256:eef2498d5df32d1fc2872ee805d333ba7db11db3a91c74aa83afc8cb8b1bdc72",
      "factType": "contract-change",
      "id": "FACT-2c868a5d0e363bd5",
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
      "claim": "src/components/UnitConverter.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:dc51ad8a8f91de87e9706b8e0ccd25505f7dadbe2a0c413f7b6ee502707cb294",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-c2febb0ac56ac102"
      ],
      "factSha256": "sha256:76f1dbf3a3f90558ae8ed39e4f851f453053be706f356c6de3a40035403a17cd",
      "factType": "dependency-edge",
      "id": "FACT-2d34bae4dfe49046",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/UnitConverter.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FunctionGrapher.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:c35a9e5fedee9414e1d576732b4e2fd6a4b6fbb22483f68fd5f6c4170e5b0ffb",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-3fa0072ee0d173fe"
      ],
      "factSha256": "sha256:92a1c26032558b133fa5884dbec1d027c7b4b1fe4beb19fa581a0e4a13a8eb4c",
      "factType": "dependency-edge",
      "id": "FACT-33747ac1970a39a3",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FunctionGrapher.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/Display.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:1910a0e49a594a69ae9942736e209999486497b7d61dffb169189b993dfc843e",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-8c42de9354de7b57"
      ],
      "factSha256": "sha256:5477db7b61496be0e8d332ca27a9ddcb14a76397a422dc5349e74fc648f2b7f4",
      "factType": "dependency-edge",
      "id": "FACT-35be5a003fbb164e",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Display.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/StandardKeypad.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:525e36db0b413d93ff0ef31086fe0b81117cb2e6c2f880043b03b15964bfcb05",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-cbdc058263cb4e6f"
      ],
      "factSha256": "sha256:50eaa62f609fb67ddffcff11092cc6edae9b432ced72f62789da060a458231fc",
      "factType": "dependency-edge",
      "id": "FACT-3f51e30855dad4cb",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/StandardKeypad.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx imports the in-scope module src/components/Header.jsx.",
      "claimSha256": "sha256:aaa3b359be29fc210e202395b1b516347788f80a809f6de45ab7d7027457833d",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-a922c8ddb5919651"
      ],
      "factSha256": "sha256:a8ec89e416179adcb29c51ce97c3fa22c110f793a06cd850629f856b4f6c681d",
      "factType": "dependency-edge",
      "id": "FACT-489c01c6bc964b1d",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx->src/components/Header.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js line 149 contains a lexical call candidate to same-file declaration formatNumber at line 57; semantic resolution is unavailable.",
      "claimSha256": "sha256:601e87d5e64e774e3a77de50fcf121cea0feecacf0f848e07ea039861f2036a6",
      "conflictsWith": [],
      "derivationId": "DRV-fa8e0da6829a83ee",
      "evidenceIds": [
        "EV-b4bd4c47c681b029"
      ],
      "factSha256": "sha256:4927cf57d8d146e8266eb942b89607f6cfc9f953eac1be9ba9622037fc00104f",
      "factType": "dependency-edge",
      "id": "FACT-4c1dc67c81106c5d",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/utils/evaluator.js:149->src/utils/evaluator.js#formatNumber",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/ScientificKeypad.jsx imports the in-scope module src/components/StandardKeypad.jsx.",
      "claimSha256": "sha256:a8043f379aee023f14f3c78ebf5a3f0e4f53a7f4cce4e1e4cd699a15edaa6774",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-5224f3c6a4a12a0c"
      ],
      "factSha256": "sha256:cbe8a10401c8992b1146957106a90c4ee0899bfcef3254e774db9091c6506638",
      "factType": "dependency-edge",
      "id": "FACT-6145ce9656eb679d",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/ScientificKeypad.jsx->src/components/StandardKeypad.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-e8a2c3ea4b8d8589",
      "evidenceIds": [],
      "factSha256": "sha256:6d77bfc0042c5e0c2d291f34a17b5797ab9fba632441632910d8604da4dae569",
      "factType": "structural-impact",
      "id": "FACT-627b1cd4bb4bbff9",
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
      "claim": "src/main.jsx imports the in-scope module src/App.jsx.",
      "claimSha256": "sha256:afd7d800908cc799306df9a0be7424caab1fcbf6a07744da425ce1e50a10e0e1",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-4483d8eb2f06c59f"
      ],
      "factSha256": "sha256:3ccb3c84cea13ac04cb63da70fe067ec4d14623b41ca7ec288e5d27b04943bed",
      "factType": "dependency-edge",
      "id": "FACT-90c03c7f6beb79e9",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/main.jsx->src/App.jsx",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/Header.jsx imports the in-scope module src/utils/audio.js.",
      "claimSha256": "sha256:2b21a0e898b86d32dbcac29e0f2457c8dadad47b3d6c5c786f22653dda9986d4",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-809114f0b1eab1be"
      ],
      "factSha256": "sha256:f9384ce351914ff35850da7d01e591651d3248ac07070cf2dc9d8cdd4dc3313f",
      "factType": "dependency-edge",
      "id": "FACT-93617eca72b08882",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Header.jsx->src/utils/audio.js",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.test.jsx imports the in-scope module src/App.jsx.",
      "claimSha256": "sha256:f42d598031e4aa09073bb6b7b43c4628de6214751f9dbddac107a7253ddd9287",
      "conflictsWith": [],
      "derivationId": "DRV-292a2934fe80c58c",
      "evidenceIds": [
        "EV-a28b55e93b0dd19f"
      ],
      "factSha256": "sha256:27bdbea9c0a77c16b5b9fc47aea4408f33f9162ffbb84ce59d63e0a39c4f1e22",
      "factType": "dependency-edge",
      "id": "FACT-954db4a3ab1f6d6d",
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
      "derivationId": "DRV-e8a2c3ea4b8d8589",
      "evidenceIds": [],
      "factSha256": "sha256:9307e3595d6f342efa13386f82a7084900c4b892f3768c62ade72422d8dc49b2",
      "factType": "changed-symbol",
      "id": "FACT-ab147404f8818f57",
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
      "derivationId": "DRV-e8a2c3ea4b8d8589",
      "evidenceIds": [],
      "factSha256": "sha256:8139797d9e1671c8bcc0b02115ea25f12747782270d54316962ffed075690500",
      "factType": "test-impact",
      "id": "FACT-ef8cfc451ff25ac4",
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
generated-at: 2026-10-08T10:34:13.035Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:ef618691f952627b7382d0028e303ff98fd40c56ff7fde9e7e88dfcb8e7cc511
prompt-sha256: sha256:09f7d5e004d4e1e94bb701ee5520ae7297ceeaa20f28493b5c9d80d4ac4b1c72
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:d20d070a-ffad-419a-892a-29c975a54ae8
model: auto
assurance: validated-derived-view
---
