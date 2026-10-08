<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: arch.contracts@4
view-spec-sha256: sha256:13ff5bb50461e3b7a40d8e34e1785fd29ebd36b5134a59c7630fa5304d2997b0
fact-ledger-sha256: sha256:6798a0897cf16df0903d2a1ed95bbf45e177873ad35f9f805eb202c7fb2b4da5
composer-core-sha256: sha256:b9860a376856e4a03c76111a71207068934fdcb1eefd292ca422590e7545c1af
composition-candidate-sha256: sha256:942782d27b313980fb5afb164a4729297685169c82616c0180dc5892e3dd10f6
validator-sha256: sha256:28dc1c4656a8ede7c6c7bf9be228ebd73b9f32d76a8af8959b52a3e31493e601
-->

# Architecture contracts {#arch.contracts}

**TL;DR** No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-4610227409de7077]

## Public contracts {#arch.contracts.public-contracts}

No registered deterministic producer supplied interface for arch.contracts@4 within the pinned scope. [F:FACT-01140bf3bdc3ea7d]

No registered deterministic producer supplied protocol-field for arch.contracts@4 within the pinned scope. [F:FACT-0118db23c9c3379a]

No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope. [F:FACT-c85a011962fb9ed1]

## Implementations {#arch.contracts.implementations}

No registered deterministic producer supplied implementation for arch.contracts@4 within the pinned scope. [F:FACT-9452b7cc0a0fc6b1]

src/utils/evaluator.js declares export const evaluateExpression at line 4. [F:FACT-07e15e2c9e2ee93d]

src/utils/evaluator.js declares export const convertUnits at line 140. [F:FACT-1e37f3d87b9f5ff3]

src/components/FinancialCalculator.jsx declares export const FinancialCalculator at line 6. [F:FACT-20131f1bb57f3eef]

src/utils/evaluator.js declares export const calculateCompoundInterest at line 181. [F:FACT-3331802ad84ad9ae]

src/utils/evaluator.js declares export const UNIT_TYPES at line 75. [F:FACT-36aac3f50cd88e56]

src/components/ScientificKeypad.jsx declares export const ScientificKeypad at line 5. [F:FACT-41207206f32c3c98]

src/utils/evaluator.js declares export const formatNumber at line 57. [F:FACT-55e336522179425c]

src/utils/audio.js declares export const playSound at line 18. [F:FACT-5dc74474f4ded800]

src/components/Display.jsx declares export const Display at line 5. [F:FACT-9b4bfb66e83cfd3c]

src/components/UnitConverter.jsx declares export const UnitConverter at line 14. [F:FACT-c2de13133030d459]

src/utils/evaluator.js declares export const calculateTip at line 200. [F:FACT-e150980f60cc3714]

src/components/Header.jsx declares export const Header at line 36. [F:FACT-e3d634bc9214cc45]

src/components/KeyboardShortcutsModal.jsx declares export const KeyboardShortcutsModal at line 5. [F:FACT-e54ce668f13bffa1]

src/App.jsx declares export default function App() at line 14. [F:FACT-e716796663aa1f09]

src/utils/evaluator.js declares export const calculateEMI at line 161. [F:FACT-ec30282bef05a01f]

src/components/FunctionGrapher.jsx declares export const FunctionGrapher at line 14. [F:FACT-ef35f99ab0b4dc6a]

src/components/HistoryDrawer.jsx declares export const HistoryDrawer at line 5. [F:FACT-f343fa21acbed916]

src/components/StandardKeypad.jsx declares export const StandardKeypad at line 5. [F:FACT-fcd1475a0304e04d]

## Consumers {#arch.contracts.consumers}

No registered deterministic producer supplied consumer-dependency for arch.contracts@4 within the pinned scope. [F:FACT-d5ffcb39c38f9224]

## Contract contradictions {#arch.contracts.contract-contradictions}



## Unavailable runtime guarantees {#arch.contracts.unavailable-runtime-guarantees}

No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-4610227409de7077]

## Facts {#arch.contracts.facts}

```json
{
  "fact_ledger_sha256": "sha256:6798a0897cf16df0903d2a1ed95bbf45e177873ad35f9f805eb202c7fb2b4da5",
  "facts": [
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:f95a4d70ce2c204fced609dbb47362d006bed1129c4f1bdef0aa46b9b3645295",
      "factType": "interface",
      "id": "FACT-01140bf3bdc3ea7d",
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
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:3201007bbb6690a3aa8dbadee47a1c3e93b0623c60dcddb2ffe8a7bf61692e5d",
      "factType": "protocol-field",
      "id": "FACT-0118db23c9c3379a",
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
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const evaluateExpression at line 4.",
      "claimSha256": "sha256:4031c47cfd1f9b3bdbc2702382d55c1f4f78ab96996448cf72e9470d96922dfb",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-9825e87dd817b349"
      ],
      "factSha256": "sha256:6c6af5f8d0a17139e370628770b4bec391351a0cb79cfbd0f7d8cb87e5e22054",
      "factType": "signature",
      "id": "FACT-07e15e2c9e2ee93d",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#evaluateExpression",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const convertUnits at line 140.",
      "claimSha256": "sha256:ea65a51a91e10c0ea0308a2196ba5eaddca88aceec483ee139a12f0676d6dd15",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-9920a6e65dcdac42"
      ],
      "factSha256": "sha256:9c0b5ddcc8ac585fefa4535fff710af9d9e20c6d0c8da0b83c36ef8cab8da7e5",
      "factType": "signature",
      "id": "FACT-1e37f3d87b9f5ff3",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#convertUnits",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FinancialCalculator.jsx declares export const FinancialCalculator at line 6.",
      "claimSha256": "sha256:c0bfa9b7ab0f6463ff35ae84f9a504afa7e4b78aac6b5660d51893d54fa9209e",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-14686c950a6e895c"
      ],
      "factSha256": "sha256:4b241fcff61de96625fb595100c43c9e9941f89f0c484d994f85df4fbda8f613",
      "factType": "signature",
      "id": "FACT-20131f1bb57f3eef",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FinancialCalculator.jsx#FinancialCalculator",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const calculateCompoundInterest at line 181.",
      "claimSha256": "sha256:c24ba030a27317335adc387d8f1c3a185b378777d691d4ce3b374fa833f54079",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-64250d0870a007e6"
      ],
      "factSha256": "sha256:effb12d74503ab5d7af938c62839c3085b6b7e5e74069b2806bf73b3dd11c5c0",
      "factType": "signature",
      "id": "FACT-3331802ad84ad9ae",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#calculateCompoundInterest",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const UNIT_TYPES at line 75.",
      "claimSha256": "sha256:44bfb95b7581611aeb725f996bf324386d703ab817b88679883de26eeb38e957",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-421f8e437ba71c21"
      ],
      "factSha256": "sha256:785fb4f894285f5783d2abcf9c67fe7507b5ab162c989d4ed8ada836b920b815",
      "factType": "signature",
      "id": "FACT-36aac3f50cd88e56",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#UNIT_TYPES",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/ScientificKeypad.jsx declares export const ScientificKeypad at line 5.",
      "claimSha256": "sha256:beb2748ebfaf1c23a22678b878f7a976d3a664f75b07ad26cacdfe8cfa65d24b",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-46d1a3665d6f5490"
      ],
      "factSha256": "sha256:864cf6c2b126d0677a5c57c04b0d6f251d4656301ebfe4092588b1ec3ddd297d",
      "factType": "signature",
      "id": "FACT-41207206f32c3c98",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/ScientificKeypad.jsx#ScientificKeypad",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:77c98f35549fc708899e2205946c5c2b828a387c2dd9a24cd7a20954ac411607",
      "factType": "runtime-guarantee",
      "id": "FACT-4610227409de7077",
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
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const formatNumber at line 57.",
      "claimSha256": "sha256:07a8b211dc69a932bb73dcc0d6be922557e56d597c978023ba6c4f4e7835c5b1",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-53ebcb155e20fa7c"
      ],
      "factSha256": "sha256:3e6d3142a47c63b0c973cebca2a6609d965ddfd3e512d3e8c7a9ccf63418d794",
      "factType": "signature",
      "id": "FACT-55e336522179425c",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#formatNumber",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/audio.js declares export const playSound at line 18.",
      "claimSha256": "sha256:21875c1a9b7ee75618c0a398656b3de536b8d312a70f6988f805ad8cac218b9d",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-9374ac66621f3028"
      ],
      "factSha256": "sha256:fd2711dc7b58bd292cce2cca877d476e3c0ac7598c9d7cd048339521a9912d4b",
      "factType": "signature",
      "id": "FACT-5dc74474f4ded800",
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
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:108a89f418554531f8e2a3b1781c5a6b62a6e7445cfa3e0392f353d1f5216e74",
      "factType": "implementation",
      "id": "FACT-9452b7cc0a0fc6b1",
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
      "assurance": "structurally-derived",
      "claim": "src/components/Display.jsx declares export const Display at line 5.",
      "claimSha256": "sha256:b46b036939f8c7aa2a0a1497b4e284361df596e76b019a85ca4d1789d338df7d",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-f52495a51c338b04"
      ],
      "factSha256": "sha256:e34416fba920c54e9255d3fa91f2a1af5ddae952e4c926c2808d5aaab93a452b",
      "factType": "signature",
      "id": "FACT-9b4bfb66e83cfd3c",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Display.jsx#Display",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/UnitConverter.jsx declares export const UnitConverter at line 14.",
      "claimSha256": "sha256:e26d2b5f0cdb273affcb84d3013563d0c57d777eb4eddb2a71aa5ccd8c096603",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-c603f486ff74ed3e"
      ],
      "factSha256": "sha256:c7b2652c450b684eab68f3390b2bf020a7fdb9bd6537f2e09f04118c076b150d",
      "factType": "signature",
      "id": "FACT-c2de13133030d459",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/UnitConverter.jsx#UnitConverter",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:547bf8918903c73bf7e395a4f22c3c710a545507ea81817baf0721a93b4a026b",
      "factType": "schema-contract",
      "id": "FACT-c85a011962fb9ed1",
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
      "derivationId": "DRV-d86ea7dff707c2e5",
      "evidenceIds": [],
      "factSha256": "sha256:81b7ff4542ff1f92be02ed90dfe34f11557139f31e320e5ff0a3ad8be1878226",
      "factType": "consumer-dependency",
      "id": "FACT-d5ffcb39c38f9224",
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
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const calculateTip at line 200.",
      "claimSha256": "sha256:355e0e07b1ab8dbaa13ca727498c74c13a0b1969d0722500ffc2e95560793927",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-64a8d3a93f656059"
      ],
      "factSha256": "sha256:3c0a5f64b18eba1aaf92aae8dde855445505c8fcb7f19be00272439fb2a27b16",
      "factType": "signature",
      "id": "FACT-e150980f60cc3714",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#calculateTip",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/Header.jsx declares export const Header at line 36.",
      "claimSha256": "sha256:7c0d9ab7a7d0845074cccc86b5bafc6ef094db91763948c6639b71af7b2afd33",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-6d4e30cafda2344c"
      ],
      "factSha256": "sha256:ad586a1ccfc6ddaa611442a25ab4ee689cdcbe870734f2da2cbb1b2f8ab1b7d6",
      "factType": "signature",
      "id": "FACT-e3d634bc9214cc45",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Header.jsx#Header",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/KeyboardShortcutsModal.jsx declares export const KeyboardShortcutsModal at line 5.",
      "claimSha256": "sha256:99266b1801db3a39dd605d0d1bce48e3cc2b8ae85932f06492ca302948064a69",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-55a086e8e1e8f66e"
      ],
      "factSha256": "sha256:5a1388c074fd5063e33c386b4a2b0587e10e5e67a5a56c97af5e7f86d1154ba7",
      "factType": "signature",
      "id": "FACT-e54ce668f13bffa1",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/KeyboardShortcutsModal.jsx#KeyboardShortcutsModal",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/App.jsx declares export default function App() at line 14.",
      "claimSha256": "sha256:dfdeeff013f08edbd4b5d7e158827d0fd11390ea99f02cfd8301d6cf595fb5b7",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-cbeb91fb6905911d"
      ],
      "factSha256": "sha256:208ab260aff82a0e5394062a7a905ba5b26aa82b25609a2557375ca8928d7a11",
      "factType": "signature",
      "id": "FACT-e716796663aa1f09",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx#App",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const calculateEMI at line 161.",
      "claimSha256": "sha256:815f9a7087ab95d08b0906798d33ad70d29c76598d45f6a33c04bff4b5c4e5a1",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-85d010281d073c58"
      ],
      "factSha256": "sha256:86573f0bbf963a34e0df321335bbb9b34bdffdad08e7d8856bfbdfad769cbae3",
      "factType": "signature",
      "id": "FACT-ec30282bef05a01f",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#calculateEMI",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FunctionGrapher.jsx declares export const FunctionGrapher at line 14.",
      "claimSha256": "sha256:deb27f116091f80d66db58a0c889e1072fbcbe70f2b937cde3f83e87591676c8",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-09d2597b119a0ad8"
      ],
      "factSha256": "sha256:6ea096452b0ba22e5f5487f818a4c9338ef3cbdbc09caa78dd18c747afd587ce",
      "factType": "signature",
      "id": "FACT-ef35f99ab0b4dc6a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FunctionGrapher.jsx#FunctionGrapher",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/HistoryDrawer.jsx declares export const HistoryDrawer at line 5.",
      "claimSha256": "sha256:a5892111c15c6beeafe10b4c4dfcb342f86aa4a5908549421ed9347151220d28",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-17d137c1d4567b39"
      ],
      "factSha256": "sha256:cb0723da6a8b47bad557a2938d755a1b4edfb2c2d732a7f8625b6677b96105ef",
      "factType": "signature",
      "id": "FACT-f343fa21acbed916",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/HistoryDrawer.jsx#HistoryDrawer",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/StandardKeypad.jsx declares export const StandardKeypad at line 5.",
      "claimSha256": "sha256:1f46f18ec00eebf89ac2bb116f1458185d7347bb6dd2d2a6b7ca0cd9680e727d",
      "conflictsWith": [],
      "derivationId": "DRV-557a3a515d707a03",
      "evidenceIds": [
        "EV-abe7576f160ef630"
      ],
      "factSha256": "sha256:00eb2d0528f6aee6d4163f0905f14c99c87f45441b8a9d4c7cff10549d4be32c",
      "factType": "signature",
      "id": "FACT-fcd1475a0304e04d",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/StandardKeypad.jsx#StandardKeypad",
        "kind": "symbol"
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
generated-at: 2026-10-08T10:17:57.405Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:afd05af4b1663b9a46d10cd1a97c4d1709f84888341d3a81b7ec570e45e6ac15
prompt-sha256: sha256:74b220c428bb7c74cd46eea1615539df8a4d465348f3b64c427a3ba4e7fd5eb6
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:62b10bc7-90c8-4b77-a73e-668f0bc50139
model: auto
assurance: validated-derived-view
---
