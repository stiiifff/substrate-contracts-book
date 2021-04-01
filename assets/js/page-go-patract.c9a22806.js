(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{574:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"go-patract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-patract"}},[t._v("#")]),t._v(" go-patract")]),t._v(" "),a("h2",{attrs:{id:"intruduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intruduction"}},[t._v("#")]),t._v(" Intruduction")]),t._v(" "),a("p",[t._v("Most contract behaviors are highly related to context. In addition to interacting with the chain, user-oriented contract applications also need to provide users with current relevant context status information:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+--DAPP-Front-End--------------+        +---Chain-------------------------+\n|                              |        |                                 |\n| +----+  +------------------+ |        | +-------+     +-------+         |\n| |    |  |                  | | Commit | |       |     |       |         |\n| |    |  |   Polkadot-JS    +------------\x3e Node  +----\x3e+ Node  |         |\n| |    +->+                  | |   Tx   | |       |     |       |         |\n| |    |  |                  | |        | +-------+     +----+-++         |\n| |    |  +------------------+ |        |                    ^ |          |\n| | UI |                       |        +---------------------------------+\n| |    |  +------------------+ |                             | |\n| |    |  |                  | |        +--DAPP-Server--------------------+\n| |    |  |                  | |  Push  | +--------+     +-----v-------+  |\n| |    +<-+   Model          +<-----------+        +-----+             |  |\n| |    |  |                  | |        | | Server |     |  PatractGo  |  |\n| |    |  |                  +------------\x3e        +-----+             |  |\n| +----+  +------------------+ | Query  | +----+---+     +-----+-------+  |\n+------------------------------+        |      |               |          |\n                                        |      |         +-----v-------+  |\n                                        |      |         |             |  |\n                                        |      +--------\x3e+   DataBase  |  |\n                                        |                |             |  |\n                                        |                +-------------+  |\n                                        |                                 |\n                                        +---------------------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("PatractGo is mainly responsible for implementing micro-services in a DApp. Unlike querying the state of the chain API, PatractGo can monitor the calls and events generated by the specified contract. Developers can obtain the state storage based on this information to maintain consistent state with the chain. Through data services based on a typical API-DB architecture, the front-end DApp can efficiently and concisely obtain the state on the chain as context information.")]),t._v(" "),a("p",[t._v("Based on the API of chain nodes, PatractGo obtains block information and summarizes and filters it, and sends contract-related messages and events based on metadata analysis to the handler protocol specified by the developer. For example, for a typical ERC20 contract, the developer can use the channel to subscribe to all transfer events that occur, and then synchronize them into the database, so that other microservices can provide services corresponding to the token data of the account, such as querying the current token holding distribution and other logics.")]),t._v(" "),a("p",[t._v("Therefor, PatractGo will achieve the following support:")]),t._v(" "),a("ul",[a("li",[t._v("Complete the secondary packaging of the contract module interface, complete operations such as "),a("code",[t._v("put_code")]),t._v(", "),a("code",[t._v("call")]),t._v(", "),a("code",[t._v("instantiate")]),t._v(", etc.")]),t._v(" "),a("li",[t._v("Parse the metadata.json information of the contract, and support the automatic generation of http service interface for the metadata corresponding contract")]),t._v(" "),a("li",[t._v("Scanning and monitoring support of the contract status on the chain for statistics and analysis")]),t._v(" "),a("li",[t._v("Basic command line tool support for native interaction with the contract, mainly used to test the security of the contract")]),t._v(" "),a("li",[t._v("SDK development examples for ERC20 contract support")])]),t._v(" "),a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[t._v("#")]),t._v(" Design")]),t._v(" "),a("p",[t._v("PatractGo consists of the following packages:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("patractgo/metadata")]),t._v(" contract metadata processing, and metadata-based contract processing")]),t._v(" "),a("li",[a("code",[t._v("patractgo/rpc/native")]),t._v(" re-encapsulation of the contract module interface to provide the contract-related interaction based on chain RPC")]),t._v(" "),a("li",[a("code",[t._v("patractgo/rpc")]),t._v(" implement the interaction with the contract based on metadata")]),t._v(" "),a("li",[a("code",[t._v("patractgo/rest")]),t._v(" implements an http service based on metadata to interact with the contract")]),t._v(" "),a("li",[a("code",[t._v("patractgo/observer")]),t._v(" Monitoring and Scanning support for contract status on the chain")]),t._v(" "),a("li",[a("code",[t._v("patractgo/contracts/erc20")]),t._v(" supports ERC20 contracts and examples")]),t._v(" "),a("li",[a("code",[t._v("patractgo/tools")]),t._v(" some tools for contracts develop")])]),t._v(" "),a("p",[t._v("Currently, we haven't designed the module which could "),a("strong",[t._v("auto-gen code")]),t._v(" for a contract based on a metadata, thus we provide\n"),a("code",[t._v("patractgo/contracts/erc20")]),t._v(" as an example to show how to warp a contract as a go source file.")]),t._v(" "),a("p",[t._v("This "),a("strong",[t._v("auto contract code generator")]),t._v(" feature would be developed with "),a("code",[t._v("java-patract")]),t._v(" repo later (in next version), "),a("strong",[t._v("for their have same logic to generate the code for contracts")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports},620:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"go-patract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-patract"}},[t._v("#")]),t._v(" go-patract")]),t._v(" "),a("h2",{attrs:{id:"intruduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intruduction"}},[t._v("#")]),t._v(" Intruduction")]),t._v(" "),a("p",[t._v("Most contract behaviors are highly related to context. In addition to interacting with the chain, user-oriented contract applications also need to provide users with current relevant context status information:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+--DAPP-Front-End--------------+        +---Chain-------------------------+\n|                              |        |                                 |\n| +----+  +------------------+ |        | +-------+     +-------+         |\n| |    |  |                  | | Commit | |       |     |       |         |\n| |    |  |   Polkadot-JS    +------------\x3e Node  +----\x3e+ Node  |         |\n| |    +->+                  | |   Tx   | |       |     |       |         |\n| |    |  |                  | |        | +-------+     +----+-++         |\n| |    |  +------------------+ |        |                    ^ |          |\n| | UI |                       |        +---------------------------------+\n| |    |  +------------------+ |                             | |\n| |    |  |                  | |        +--DAPP-Server--------------------+\n| |    |  |                  | |  Push  | +--------+     +-----v-------+  |\n| |    +<-+   Model          +<-----------+        +-----+             |  |\n| |    |  |                  | |        | | Server |     |  PatractGo  |  |\n| |    |  |                  +------------\x3e        +-----+             |  |\n| +----+  +------------------+ | Query  | +----+---+     +-----+-------+  |\n+------------------------------+        |      |               |          |\n                                        |      |         +-----v-------+  |\n                                        |      |         |             |  |\n                                        |      +--------\x3e+   DataBase  |  |\n                                        |                |             |  |\n                                        |                +-------------+  |\n                                        |                                 |\n                                        +---------------------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("PatractGo is mainly responsible for implementing micro-services in a DApp. Unlike querying the state of the chain API, PatractGo can monitor the calls and events generated by the specified contract. Developers can obtain the state storage based on this information to maintain consistent state with the chain. Through data services based on a typical API-DB architecture, the front-end DApp can efficiently and concisely obtain the state on the chain as context information.")]),t._v(" "),a("p",[t._v("Based on the API of chain nodes, PatractGo obtains block information and summarizes and filters it, and sends contract-related messages and events based on metadata analysis to the handler protocol specified by the developer. For example, for a typical ERC20 contract, the developer can use the channel to subscribe to all transfer events that occur, and then synchronize them into the database, so that other microservices can provide services corresponding to the token data of the account, such as querying the current token holding distribution and other logics.")]),t._v(" "),a("p",[t._v("Therefor, PatractGo will achieve the following support:")]),t._v(" "),a("ul",[a("li",[t._v("Complete the secondary packaging of the contract module interface, complete operations such as "),a("code",[t._v("put_code")]),t._v(", "),a("code",[t._v("call")]),t._v(", "),a("code",[t._v("instantiate")]),t._v(", etc.")]),t._v(" "),a("li",[t._v("Parse the metadata.json information of the contract, and support the automatic generation of http service interface for the metadata corresponding contract")]),t._v(" "),a("li",[t._v("Scanning and monitoring support of the contract status on the chain for statistics and analysis")]),t._v(" "),a("li",[t._v("Basic command line tool support for native interaction with the contract, mainly used to test the security of the contract")]),t._v(" "),a("li",[t._v("SDK development examples for ERC20 contract support")])]),t._v(" "),a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[t._v("#")]),t._v(" Design")]),t._v(" "),a("p",[t._v("PatractGo consists of the following packages:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("patractgo/metadata")]),t._v(" contract metadata processing, and metadata-based contract processing")]),t._v(" "),a("li",[a("code",[t._v("patractgo/rpc/native")]),t._v(" re-encapsulation of the contract module interface to provide the contract-related interaction based on chain RPC")]),t._v(" "),a("li",[a("code",[t._v("patractgo/rpc")]),t._v(" implement the interaction with the contract based on metadata")]),t._v(" "),a("li",[a("code",[t._v("patractgo/rest")]),t._v(" implements an http service based on metadata to interact with the contract")]),t._v(" "),a("li",[a("code",[t._v("patractgo/observer")]),t._v(" Monitoring and Scanning support for contract status on the chain")]),t._v(" "),a("li",[a("code",[t._v("patractgo/contracts/erc20")]),t._v(" supports ERC20 contracts and examples")]),t._v(" "),a("li",[a("code",[t._v("patractgo/tools")]),t._v(" some tools for contracts develop")])]),t._v(" "),a("p",[t._v("Currently, we haven't designed the module which could "),a("strong",[t._v("auto-gen code")]),t._v(" for a contract based on a metadata, thus we provide\n"),a("code",[t._v("patractgo/contracts/erc20")]),t._v(" as an example to show how to warp a contract as a go source file.")]),t._v(" "),a("p",[t._v("This "),a("strong",[t._v("auto contract code generator")]),t._v(" feature would be developed with "),a("code",[t._v("java-patract")]),t._v(" repo later (in next version), "),a("strong",[t._v("for their have same logic to generate the code for contracts")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);