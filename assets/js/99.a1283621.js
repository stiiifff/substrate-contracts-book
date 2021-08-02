(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{668:function(t,s,e){"use strict";e.r(s);var a=e(6),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jupiter-network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupiter-network"}},[t._v("#")]),t._v(" Jupiter Network")]),t._v(" "),e("h2",{attrs:{id:"jupiter-common-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupiter-common-configuration"}},[t._v("#")]),t._v(" Jupiter common configuration")]),t._v(" "),e("p",[t._v("The there Jupiter network are basically the same. For those common configuration, Jupiter make effort to put these config into "),e("code",[t._v("runtime/common")]),t._v(" crate package.")]),t._v(" "),e("p",[t._v("For developer, the most import configuration need to noticed are:")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("frame_system::Config")]),t._v(": config inside this are all the same with there network, so that the block limit and resource of those network are the same")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("pallet_balance::Config")]),t._v(": the "),e("code",[t._v("ExistentialDeposit")]),t._v(" is set to "),e("strong",[t._v("0")]),t._v(", so that when a new account or a new contract created, you do not need to pay rent.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("pallet_contracts::Config")]),t._v(" configurations are：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("all config related to storage rent are set to 0")]),t._v(", such as "),e("code",[t._v("TombstoneDeposit")]),t._v("，"),e("code",[t._v("DepositPerContract")]),t._v("，"),e("code",[t._v("DepositPerStorageByte")]),t._v("，"),e("code",[t._v("RentFraction")]),t._v(" etc.")]),t._v(" "),e("li",[e("code",[t._v("CallStack")]),t._v(" are all the same and set to 32, in the case of contract invoke contract, the maximum execution statck are the same.")]),t._v(" "),e("li",[e("code",[t._v("SignedClaimHandicap")]),t._v(" are all the same and set to 0.")]),t._v(" "),e("li",[e("code",[t._v("Schedule")]),t._v(" are all the same and use default value. note the"),e("code",[t._v("code_len")]),t._v(" i.e the max contract size is "),e("code",[t._v("128k")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("ChainExtension")]),t._v(" config are different because each network's feature supporting are different.")])])])]),t._v(" "),e("h2",{attrs:{id:"three-jupiter-network-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#three-jupiter-network-configuration"}},[t._v("#")]),t._v(" Three Jupiter network configuration")]),t._v(" "),e("h3",{attrs:{id:"jupiter-dev"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupiter-dev"}},[t._v("#")]),t._v(" Jupiter Dev")]),t._v(" "),e("p",[t._v("Jupiter Dev is for the purpose of quick development and debug on local environment for contract developer, When the block chain receive extrinsic, it then immediately generate block. By this way, it saved a lot of wait time for developer.")]),t._v(" "),e("p",[t._v("This local node provide debug contract for contract developer as much like Jupiter testnet environment as possible. Developer should use this mode first to develop contract business logic. And when business logic get stabled, then developer can use Jupiter testnet network doing public test.")]),t._v(" "),e("blockquote",[e("p",[t._v("Notice: If there're no extrinsic received by Jupiter Dev, the height of block would't changed.")])]),t._v(" "),e("h4",{attrs:{id:"polkadot-js-extend-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-extend-types"}},[t._v("#")]),t._v(" polkadot.js extend types")]),t._v(" "),e("p",[t._v("Jupiter Dev Extend Type:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LookupSource"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"public-endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-endpoints"}},[t._v("#")]),t._v(" public endpoints")]),t._v(" "),e("p",[t._v("Jupiter Dev is local test node, so it doesn't need public endpoints.")]),t._v(" "),e("h4",{attrs:{id:"chainextensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainextensions"}},[t._v("#")]),t._v(" ChainExtensions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("feature")]),t._v(" "),e("th",[t._v("supporting")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("zkMega")]),t._v(" "),e("td",[t._v("Native support")])]),t._v(" "),e("tr",[e("td",[t._v("BabeRandomness")]),t._v(" "),e("td",[t._v("use fixed value as hash, only works for calling, but can't provide random number")])]),t._v(" "),e("tr",[e("td",[t._v("ink-log")]),t._v(" "),e("td",[t._v("No support currently")])])])]),t._v(" "),e("h3",{attrs:{id:"jupiter-poa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupiter-poa"}},[t._v("#")]),t._v(" Jupiter PoA")]),t._v(" "),e("p",[t._v("jupiter-prep use PoA validator mode, the corresponding testnet is called Jupiter PoA V1 (Jupiter A1). This independent network contains contract module, use Babe consensus algorithm, and provide Babe VRF random number for contract module.")]),t._v(" "),e("p",[t._v("This network is the main public testnet for Jupiter, it provide a common contract running testnet environment for contract developer. On the other hand, in the future, this network will also provide compatible "),e("code",[t._v("pallet-contracts")]),t._v(" and bring other feature which develop by Patract, this gives developer a chance to choose different contract platform.")]),t._v(" "),e("p",[t._v("Jupiter PoA network is suitable for contract developer who need public wasm contract test environment, those developer who want to testing wasm contract can deploy their own contract at this network to doing public test.")]),t._v(" "),e("h4",{attrs:{id:"polkadot-js-extend-types-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-extend-types-2"}},[t._v("#")]),t._v(" polkadot.js extend types")]),t._v(" "),e("p",[t._v("Jupiter Extend Type:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LookupSource"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AccountInfo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AccountInfoWithTripleRefCount"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AliveContractInfo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trieId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TrieId"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storageSize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pairCount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"codeHash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeHash"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rentAllowance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Balance"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rentPayed"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Balance"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deductBlock"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BlockNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastWrite"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Option<BlockNumber>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_reserved"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Option<Null>"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"FullIdentification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AccountId"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AuthorityState"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_enum"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Working"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waiting"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"EraIndex"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ActiveEraInfo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EraIndex"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Option<u64>"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"UnappliedSlash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"validator"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AccountId"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reporters"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vec<AccountId>"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"public-endpoints-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-endpoints-2"}},[t._v("#")]),t._v(" public endpoints")]),t._v(" "),e("p",[t._v("Jupiter PoA's open provider：")]),t._v(" "),e("ul",[e("li",[t._v("wss://jupiter-poa.elara.patract.io/")]),t._v(" "),e("li",[t._v("wss://ws.jupiter-poa.patract.cn/")])]),t._v(" "),e("h4",{attrs:{id:"chainextensions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainextensions-2"}},[t._v("#")]),t._v(" ChainExtensions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("feature")]),t._v(" "),e("th",[t._v("supporting")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("zkMega")]),t._v(" "),e("td",[t._v("Native support")])]),t._v(" "),e("tr",[e("td",[t._v("BabeRandomness")]),t._v(" "),e("td",[t._v("Have Babe module, provide random number and BabeRandomness Interface")])]),t._v(" "),e("tr",[e("td",[t._v("ink-log")]),t._v(" "),e("td",[t._v("No support currently")])])])]),t._v(" "),e("h3",{attrs:{id:"jupiter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupiter"}},[t._v("#")]),t._v(" Jupiter")]),t._v(" "),e("p",[t._v("Jupiter parachain use Aura collator selection algorithm, the corresponding testnet is called Jupiter PC1, it can deployed on any relay chain network based on Polkadot.")]),t._v(" "),e("p",[t._v("Jupiter parachain testnet is an contract testnet which run in "),e("strong",[t._v("parachain mode")]),t._v(", it's parachain testnet provide for Polkadot ecosystem mainted by Patract. Those developer who want to "),e("strong",[t._v("testing wasm contract on Polkadot parachain ecosystem")]),t._v(" can deploy their own contract at this network to doing public test.")]),t._v(" "),e("blockquote",[e("p",[t._v("Notice: Currently Polkadot/Kusama/Westend relay chain doesn't support running wasm contractmodule, so "),e("strong",[t._v("currently Jupiter is deployed on Patract private Westend testnet")]),t._v(", this Westend testnet is modified by Patract to support running contract module.")])]),t._v(" "),e("h4",{attrs:{id:"polkadot-js-extend-types-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-extend-types-3"}},[t._v("#")]),t._v(" polkadot.js extend types")]),t._v(" "),e("p",[t._v("Jupiter Extend Type:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LookupSource"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Address"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MultiAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AccountInfo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AccountInfoWithTripleRefCount"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AliveContractInfo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trieId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TrieId"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"storageSize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pairCount"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"codeHash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeHash"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rentAllowance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Balance"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rentPayed"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Balance"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deductBlock"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BlockNumber"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastWrite"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Option<BlockNumber>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_reserved"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Option<Null>"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"BabeRandomness"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"epoch"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u64"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_slot"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u64"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u64"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"randomness"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schnorrkel::Randomness"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"public-endpoints-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-endpoints-3"}},[t._v("#")]),t._v(" public endpoints")]),t._v(" "),e("p",[t._v("Currently Jupiter is deployed on Westend relay chain. Note this Westend network is Patract private network:")]),t._v(" "),e("ul",[e("li",[t._v("wss://ws.patract-westend.patract.cn")])]),t._v(" "),e("p",[t._v("Jupiter PoA's open provider：")]),t._v(" "),e("ul",[e("li",[t._v("wss://ws.jupiter.patract-westend.patract.cn")])]),t._v(" "),e("h4",{attrs:{id:"chainextensions-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chainextensions-3"}},[t._v("#")]),t._v(" ChainExtensions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("feature")]),t._v(" "),e("th",[t._v("supporting")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("zkMega")]),t._v(" "),e("td",[t._v("Wasm support")])]),t._v(" "),e("tr",[e("td",[t._v("BabeRandomness")]),t._v(" "),e("td",[t._v("Collect random number from Babe module of relay chian, and provide it to contract bt ChainExtensions interface of BabeRandomness")])]),t._v(" "),e("tr",[e("td",[t._v("ink-log")]),t._v(" "),e("td",[t._v("No support currently")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);