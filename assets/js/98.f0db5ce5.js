(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{667:function(t,e,r){"use strict";r.r(e);var o=r(6),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"jupiter-testnet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jupiter-testnet"}},[t._v("#")]),t._v(" Jupiter testnet")]),t._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),r("p",[t._v("Jupiter is a "),r("strong",[t._v("contract test network")]),t._v(" that is maintained by Patract, contains Patract contract design specifications and is compatible with the latest pallet-contracts module. Jupiter has three types of nodes, namely:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("jupiter-dev")]),t._v(" node suitable for "),r("strong",[t._v("local quick test")]),t._v(".")]),t._v(" "),r("li",[t._v("Independently run the "),r("code",[t._v("jupiter-prep")]),t._v(" "),r("strong",[t._v("independent testnet")]),t._v(" that provides the latest contract functions to the outside world.")]),t._v(" "),r("li",[t._v("Parachain of "),r("code",[t._v("jupiter")]),t._v(" contract running on "),r("strong",[t._v("relay-chain")]),t._v(".")])]),t._v(" "),r("p",[t._v("The key configuration of those three block chain network are basically the same, such as contract weight, block limit size etc. The specific configuration need to check "),r("RouterLink",{attrs:{to:"/en/jupiter/network.html"}},[t._v("Jupiter network")]),t._v(".")],1),t._v(" "),r("p",[t._v("The repository of Jupiter is "),r("a",{attrs:{href:"https://github.com/patractlabs/jupiter",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/patractlabs/jupiter"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("After compile jupiter successfully, there are there executable file: "),r("code",[t._v("jupiter-dev")]),t._v(", "),r("code",[t._v("jupiter-prep")]),t._v(", "),r("code",[t._v("jupiter")]),t._v(" in target/release directory.")]),t._v(" "),r("p",[t._v("In the repository above, The Node implementation of those there network are:")]),t._v(" "),r("ul",[r("li",[t._v("directory "),r("code",[t._v("bin/node-dev")]),t._v(": local develop mode, convenient for developer to test contract quickly")]),t._v(" "),r("li",[t._v("directory "),r("code",[t._v("bin/node-prep")]),t._v(": testnet mode，use PoA authorities, support contract deploy, invoke")]),t._v(" "),r("li",[t._v("directory "),r("code",[t._v("bin/node")]),t._v(": parachain testnet mode，use Aura authorities, support contract deploy, invoke")])]),t._v(" "),r("p",[t._v("And the Runtime implementation of those there network are:")]),t._v(" "),r("ul",[r("li",[t._v("directory "),r("code",[t._v("runtime/jupiter-dev")])]),t._v(" "),r("li",[t._v("directory "),r("code",[t._v("runtime/jupiter-prep")])]),t._v(" "),r("li",[t._v("directory "),r("code",[t._v("runtime/jupiter")])])]),t._v(" "),r("blockquote",[r("p",[t._v("Note: for the third mode, as currently relaychain(such as Westend) don't support Sandbox HostFunction, we're running our own private Westend testnet. Once relaychain support this feature afterward, we'll switchover to official relaychain.")])]),t._v(" "),r("h2",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" ChangeLog")]),t._v(" "),r("ul",[r("li",[t._v("1.0.0: Jupiter PoA network release, including jupiter-prep and jupiter-dev")]),t._v(" "),r("li",[t._v("1.0.1: Setting Jupiter PoA ss58prefix to 26, from now on Jupiter will use 26 as address ss58prefix")]),t._v(" "),r("li",[t._v("1.0.2: Support Zero-Knowledge、randomness")]),t._v(" "),r("li",[t._v("1.0.3: Add Parachain feature, and Jupiter PC1 network release")])]),t._v(" "),r("h2",{attrs:{id:"contract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contract"}},[t._v("#")]),t._v(" Contract")]),t._v(" "),r("p",[r("strong",[t._v("Patract's FRAME contracts pallet (We will name it as pallet-patracts in future)")])]),t._v(" "),r("p",[t._v("Patract FRAME contracts pallet contains our ChainExtension to provide many particular features for contracts, and contains some compatible modifications.")]),t._v(" "),r("ul",[r("li",[t._v("ChainExtension\n"),r("ul",[r("li",[t._v("Contract Logger support, refer to this project link "),r("a",{attrs:{href:"https://github.com/patractlabs/ink-log",target:"_blank",rel:"noopener noreferrer"}},[t._v("ink-log"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Zero-Knowledge support, refer to this link "),r("a",{attrs:{href:"https://github.com/patractlabs/PIPs/blob/main/PIPs/pip-101.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("PIP-101"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("Patract modifications (pallet-patracts)\n"),r("ul",[r("li",[t._v("// No features for now.")])])])]),t._v(" "),r("p",[t._v('Thus we call "src pallet-contract" for the pallet-contract module which comes from substrate directly, and call "modified pallet-contracts" for the pallet-contract which comes from our forked substrate repo in vendor directory.')]),t._v(" "),r("p",[t._v("Inside:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("src pallet-contract")]),t._v(": support Patract "),r("code",[t._v("ChainExtension")])]),t._v(" "),r("li",[r("code",[t._v("modified pallet-contract")]),t._v(": support Patract "),r("code",[t._v("ChainExtension")]),t._v(" and Patract modifications")])]),t._v(" "),r("blockquote",[r("p",[t._v("Note1：Patract intergration of contract module，refer to this project link "),r("a",{attrs:{href:"https://github.com/patractlabs/patracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("patracts"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("Note2：The ChainExtension of Zero-Knowledge refer to this link "),r("a",{attrs:{href:"https://docs.patract.io/zkmega/tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("zkmega"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);