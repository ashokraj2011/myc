<!--
SFlow World-Model View
source: myc1@17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
source-manifest-sha256: sha256:0748ea44b3c8165f90f4981b65cc40f23342ba876dd9e59c2fdd13918427e2e0
scope-sha256: sha256:1c07de1e3891f4ec4710c0c479e681f009a03f1dd5f42c26a4a60373cab1a2df
view: arch.contracts@4
view-spec-sha256: sha256:13ff5bb50461e3b7a40d8e34e1785fd29ebd36b5134a59c7630fa5304d2997b0
fact-ledger-sha256: sha256:02e66383d581d1fcad4abd35d89590c84da0ffaac42f007a3de83d98f774f70d
composer-core-sha256: sha256:e358e2b202702b74c84c32853e16130da2366d85de0189b571eb84fbf37dc5e2
composition-candidate-sha256: sha256:fb568745b4debb5df0f9fa3390f01f58ccdda8b6e8815f9e5a21929e3c2f1c5d
validator-sha256: sha256:e0ab2da2c523899958e7f0327e427291fac19073a2c44eb4657f65e6b176dff8
-->

# Architecture contracts {#arch.contracts}

**TL;DR** No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. src/App.jsx declares export default function App() at line 14. [F:FACT-02026ea421ff733e,FACT-536a4b571f0aa3f7]

## Public contracts {#arch.contracts.public-contracts}

src/utils/evaluator.js declares export const evaluateExpression at line 4. No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope. src/components/UnitConverter.jsx declares export const UnitConverter at line 14. src/utils/audio.js declares export const playSound at line 18. src/utils/evaluator.js declares export const calculateCompoundInterest at line 181. No registered deterministic producer supplied interface for arch.contracts@4 within the pinned scope. src/components/StandardKeypad.jsx declares export const StandardKeypad at line 5. src/utils/evaluator.js declares export const UNIT_TYPES at line 75. src/components/HistoryDrawer.jsx declares export const HistoryDrawer at line 5. src/utils/evaluator.js declares export const calculateTip at line 200. src/utils/evaluator.js declares export const calculateEMI at line 161. src/components/ScientificKeypad.jsx declares export const ScientificKeypad at line 5. src/components/KeyboardShortcutsModal.jsx declares export const KeyboardShortcutsModal at line 5. src/components/Header.jsx declares export const Header at line 36. src/utils/evaluator.js declares export const convertUnits at line 140. src/components/FinancialCalculator.jsx declares export const FinancialCalculator at line 6. src/components/FunctionGrapher.jsx declares export const FunctionGrapher at line 14. src/utils/evaluator.js declares export const formatNumber at line 57. No registered deterministic producer supplied protocol-field for arch.contracts@4 within the pinned scope. src/components/Display.jsx declares export const Display at line 5. [F:FACT-003383ba204ad3b3,FACT-0a8605008d6ee5a7,FACT-0fd705dda4df2330,FACT-27cf7234a68230d8,FACT-2d9c2415ece9c882,FACT-3213c4eb1b172585,FACT-56540631c84e67f0,FACT-569cd394b4a5c7bf,FACT-771efeba9f2bcd5f,FACT-89766c8b0d12117b,FACT-905121dce7ecb39a,FACT-aa8582e47fbb63f9,FACT-b06d5ead8f62e086,FACT-b61bb8129cc5dafa,FACT-c47c7c3b7885ff67,FACT-ce9c14c9236fe9ae,FACT-d698675612a6f4f1,FACT-d8171f3ed7630723,FACT-da31bf6fe5f3cc05,FACT-e77b37bf747a855a]

## Implementations {#arch.contracts.implementations}

No registered deterministic producer supplied implementation for arch.contracts@4 within the pinned scope. [F:FACT-2bfc76bca3545c62]

## Consumers {#arch.contracts.consumers}

No registered deterministic producer supplied consumer-dependency for arch.contracts@4 within the pinned scope. [F:FACT-f0cc5fc034a9545a]

## Contract contradictions {#arch.contracts.contract-contradictions}



## Unavailable runtime guarantees {#arch.contracts.unavailable-runtime-guarantees}

No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-02026ea421ff733e]

## Facts {#arch.contracts.facts}

```json
{
  "fact_ledger_sha256": "sha256:02e66383d581d1fcad4abd35d89590c84da0ffaac42f007a3de83d98f774f70d",
  "facts": [
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const evaluateExpression at line 4.",
      "claimSha256": "sha256:4031c47cfd1f9b3bdbc2702382d55c1f4f78ab96996448cf72e9470d96922dfb",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-9825e87dd817b349"
      ],
      "factSha256": "sha256:52cbcbbac231275051ec6ad4d0a21abefb4f4e1f6e1decff73443af9d8aa6d9a",
      "factType": "signature",
      "id": "FACT-003383ba204ad3b3",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#evaluateExpression",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:02cc9ed32619d6d609ea96d74023de09cc98b95fd569e168c6920f2202172006",
      "factType": "runtime-guarantee",
      "id": "FACT-02026ea421ff733e",
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
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:652ce1ca0ba50418decaf8e2bc5e3d66245d02aae632731d30e17a012445a302",
      "factType": "schema-contract",
      "id": "FACT-0a8605008d6ee5a7",
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
      "assurance": "structurally-derived",
      "claim": "src/components/UnitConverter.jsx declares export const UnitConverter at line 14.",
      "claimSha256": "sha256:e26d2b5f0cdb273affcb84d3013563d0c57d777eb4eddb2a71aa5ccd8c096603",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-c603f486ff74ed3e"
      ],
      "factSha256": "sha256:9bdf223523f4f205fd8aa05c04e3630c27d36233f34fa3395d5648b7d45c1d42",
      "factType": "signature",
      "id": "FACT-0fd705dda4df2330",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/UnitConverter.jsx#UnitConverter",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/audio.js declares export const playSound at line 18.",
      "claimSha256": "sha256:21875c1a9b7ee75618c0a398656b3de536b8d312a70f6988f805ad8cac218b9d",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-9374ac66621f3028"
      ],
      "factSha256": "sha256:4854fec0e5c69dab8368d5e03883a81b492a49461f5f140a95dac8f6dceb0732",
      "factType": "signature",
      "id": "FACT-27cf7234a68230d8",
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
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:4cf7da4d6885f2efadffb9d94d42313ad755c253fe0fd87c7b77861411945b0f",
      "factType": "implementation",
      "id": "FACT-2bfc76bca3545c62",
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
      "claim": "src/utils/evaluator.js declares export const calculateCompoundInterest at line 181.",
      "claimSha256": "sha256:c24ba030a27317335adc387d8f1c3a185b378777d691d4ce3b374fa833f54079",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-64250d0870a007e6"
      ],
      "factSha256": "sha256:1f958279aab7647631ce1bd46027de60dfe8cfcf0b20234bbaca2012fd58846e",
      "factType": "signature",
      "id": "FACT-2d9c2415ece9c882",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#calculateCompoundInterest",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:b4ea9eb9988b53001fad892ffa3c9cefd168c4e07e8ec84bb669cc5757e33733",
      "factType": "interface",
      "id": "FACT-3213c4eb1b172585",
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
      "assurance": "structurally-derived",
      "claim": "src/App.jsx declares export default function App() at line 14.",
      "claimSha256": "sha256:dfdeeff013f08edbd4b5d7e158827d0fd11390ea99f02cfd8301d6cf595fb5b7",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-cbeb91fb6905911d"
      ],
      "factSha256": "sha256:f37925259099242f644911344a9fd9c9208d768b7d507fa4fcb17a828b15f652",
      "factType": "signature",
      "id": "FACT-536a4b571f0aa3f7",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/App.jsx#App",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/StandardKeypad.jsx declares export const StandardKeypad at line 5.",
      "claimSha256": "sha256:1f46f18ec00eebf89ac2bb116f1458185d7347bb6dd2d2a6b7ca0cd9680e727d",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-abe7576f160ef630"
      ],
      "factSha256": "sha256:2cf1894ec6a3ea57d0b9424b3972d87b25f998cf1eb4cf04edef1a7d9c079db5",
      "factType": "signature",
      "id": "FACT-56540631c84e67f0",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/StandardKeypad.jsx#StandardKeypad",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const UNIT_TYPES at line 75.",
      "claimSha256": "sha256:44bfb95b7581611aeb725f996bf324386d703ab817b88679883de26eeb38e957",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-421f8e437ba71c21"
      ],
      "factSha256": "sha256:eb8eacae4ebf4f86b2e44ee0390627f26360b6caff91f2f7f28878752fa519ef",
      "factType": "signature",
      "id": "FACT-569cd394b4a5c7bf",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#UNIT_TYPES",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/HistoryDrawer.jsx declares export const HistoryDrawer at line 5.",
      "claimSha256": "sha256:a5892111c15c6beeafe10b4c4dfcb342f86aa4a5908549421ed9347151220d28",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-17d137c1d4567b39"
      ],
      "factSha256": "sha256:ac20942fbd22d02ece3947c54f2436ba18b3be880a927bc626ae9ca8dbcf0d2a",
      "factType": "signature",
      "id": "FACT-771efeba9f2bcd5f",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/HistoryDrawer.jsx#HistoryDrawer",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const calculateTip at line 200.",
      "claimSha256": "sha256:355e0e07b1ab8dbaa13ca727498c74c13a0b1969d0722500ffc2e95560793927",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-64a8d3a93f656059"
      ],
      "factSha256": "sha256:c82914cc0e843948b36aee52350995d30e1a065d870103a94efcb8f2df72df41",
      "factType": "signature",
      "id": "FACT-89766c8b0d12117b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#calculateTip",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const calculateEMI at line 161.",
      "claimSha256": "sha256:815f9a7087ab95d08b0906798d33ad70d29c76598d45f6a33c04bff4b5c4e5a1",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-85d010281d073c58"
      ],
      "factSha256": "sha256:056799b873a76df27248487ec91172d212f4faa88dfc4549e3b49676a82f56cc",
      "factType": "signature",
      "id": "FACT-905121dce7ecb39a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#calculateEMI",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/ScientificKeypad.jsx declares export const ScientificKeypad at line 5.",
      "claimSha256": "sha256:beb2748ebfaf1c23a22678b878f7a976d3a664f75b07ad26cacdfe8cfa65d24b",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-46d1a3665d6f5490"
      ],
      "factSha256": "sha256:62aa29e69342b6a64e17ed3bef5cc4ec8309af50250492a13cd3c0a3bef0d9df",
      "factType": "signature",
      "id": "FACT-aa8582e47fbb63f9",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/ScientificKeypad.jsx#ScientificKeypad",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/KeyboardShortcutsModal.jsx declares export const KeyboardShortcutsModal at line 5.",
      "claimSha256": "sha256:99266b1801db3a39dd605d0d1bce48e3cc2b8ae85932f06492ca302948064a69",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-55a086e8e1e8f66e"
      ],
      "factSha256": "sha256:999a6a5e4da171ff85e3300a258fbe8acdd7025d2cc516ce9f86d45c38e09164",
      "factType": "signature",
      "id": "FACT-b06d5ead8f62e086",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/KeyboardShortcutsModal.jsx#KeyboardShortcutsModal",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/Header.jsx declares export const Header at line 36.",
      "claimSha256": "sha256:7c0d9ab7a7d0845074cccc86b5bafc6ef094db91763948c6639b71af7b2afd33",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-6d4e30cafda2344c"
      ],
      "factSha256": "sha256:c34445a7fde8401209ffedd66819e20c0098184373c8407fbd91b1fc3c1ba354",
      "factType": "signature",
      "id": "FACT-b61bb8129cc5dafa",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Header.jsx#Header",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const convertUnits at line 140.",
      "claimSha256": "sha256:ea65a51a91e10c0ea0308a2196ba5eaddca88aceec483ee139a12f0676d6dd15",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-9920a6e65dcdac42"
      ],
      "factSha256": "sha256:1953500367b1f2fa11fd4e5550f09d785ce5d4f28d3c86c9bba9aabcac0a6945",
      "factType": "signature",
      "id": "FACT-c47c7c3b7885ff67",
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
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-14686c950a6e895c"
      ],
      "factSha256": "sha256:627907d393a9864b2b4ad7ba31b9f130368e2bac6014ff99f02cde1403e2d4f9",
      "factType": "signature",
      "id": "FACT-ce9c14c9236fe9ae",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FinancialCalculator.jsx#FinancialCalculator",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/components/FunctionGrapher.jsx declares export const FunctionGrapher at line 14.",
      "claimSha256": "sha256:deb27f116091f80d66db58a0c889e1072fbcbe70f2b937cde3f83e87591676c8",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-09d2597b119a0ad8"
      ],
      "factSha256": "sha256:3768f313516f3d5b9f658f5d26dad0b9d78a4106c83892c89e318becce15fb72",
      "factType": "signature",
      "id": "FACT-d698675612a6f4f1",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/FunctionGrapher.jsx#FunctionGrapher",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/utils/evaluator.js declares export const formatNumber at line 57.",
      "claimSha256": "sha256:07a8b211dc69a932bb73dcc0d6be922557e56d597c978023ba6c4f4e7835c5b1",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-53ebcb155e20fa7c"
      ],
      "factSha256": "sha256:1be0823ba890bc852233257c4953797ae2af8b251ad31f6c2487e4d648f5714c",
      "factType": "signature",
      "id": "FACT-d8171f3ed7630723",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/utils/evaluator.js#formatNumber",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:6abea88fc73d74edf9cd33838423e3018905e0cc953252537c9a4b4f97c1baee",
      "factType": "protocol-field",
      "id": "FACT-da31bf6fe5f3cc05",
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
      "claim": "src/components/Display.jsx declares export const Display at line 5.",
      "claimSha256": "sha256:b46b036939f8c7aa2a0a1497b4e284361df596e76b019a85ca4d1789d338df7d",
      "conflictsWith": [],
      "derivationId": "DRV-0836baf18a4a187c",
      "evidenceIds": [
        "EV-f52495a51c338b04"
      ],
      "factSha256": "sha256:e989eab0d976c2e2d59de7d98318c1b26f710ce73d8ef83b47006f3e49ed6b97",
      "factType": "signature",
      "id": "FACT-e77b37bf747a855a",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/components/Display.jsx#Display",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-b84c927957ded541",
      "evidenceIds": [],
      "factSha256": "sha256:b6292c44fe94b552b70fcae34b6ed3eac04ab149a3505c1a05b7f7782f8c7aaf",
      "factType": "consumer-dependency",
      "id": "FACT-f0cc5fc034a9545a",
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
generated-at: 2026-10-08T10:34:13.035Z
source-commit: 17e1d25dabf9efff7b894e9d5d5d82a9656ccce4
view-sha256: sha256:f89431f0610e7c63e27eee323f994bd7e1ae817858039ef111dd3e097f90f65c
prompt-sha256: sha256:80043df5a632c83ce5250d55737567df9a36a5828d4c268ac51069c5f87703b7
execution-unit: governed-model-composer@1:ewogICJwcm92aWRlciI6ICJjb3BpbG90LWNsaSIsCiAgInJlcXVlc3RlZE1vZGVsIjogInByb3ZpZGVyLWF1dG8iCn0K:34e75ee2-f2de-4b14-9ec8-cf1046554056
model: auto
assurance: validated-derived-view
---
