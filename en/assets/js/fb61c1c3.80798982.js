"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[4895],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,c(c({ref:t},p),{},{components:a})):n.createElement(f,c({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7403:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),c=["components"],s={},i="py-patract",l={unversionedId:"himalia/py-patract",id:"himalia/py-patract",isDocsHomePage:!1,title:"py-patract",description:"PatractPy is a contract SDK to support the development of Python scripts that interact with contracts, including automated scripts to support testing. Unlike PatractGo, PatractPy is mainly for script development, so PatractPy mainly completes contract-related RPC interfaces, and completes contract deployment and instantiation-related operations.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/himalia/py-patract.md",sourceDirName:"himalia",slug:"/himalia/py-patract",permalink:"/substrate-contracts-book/en/himalia/py-patract",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/himalia/py-patract.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"go-patract",permalink:"/substrate-contracts-book/en/himalia/go-patract"},next:{title:"Report for Himalia proposals",permalink:"/substrate-contracts-book/en/himalia/reports"}},p=[{value:"Basic Apis For Contracts",id:"basic-apis-for-contracts",children:[{value:"<code>ContractFactory</code> and <code>ContractAPI</code> is used to react with contracts",id:"contractfactory-and-contractapi-is-used-to-react-with-contracts",children:[]},{value:"<code>ContractObserver</code> is used to listen contracts events",id:"contractobserver-is-used-to-listen-contracts-events",children:[]}]},{value:"Special case: ERC20 API",id:"special-case-erc20-api",children:[{value:"Observer For Contracts",id:"observer-for-contracts",children:[]}]},{value:"Unittest Node Environment",id:"unittest-node-environment",children:[]}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"py-patract"},"py-patract"),(0,o.kt)("p",null,"PatractPy is a contract SDK to support the development of Python scripts that interact with contracts, including automated scripts to support testing. Unlike PatractGo, PatractPy is mainly for script development, so PatractPy mainly completes contract-related RPC interfaces, and completes contract deployment and instantiation-related operations."),(0,o.kt)("p",null,"PatractPy will provide support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"europa")," env, which is a good environment for contract exec sandbox,\nWith PatractPy, we can write contract unittest by python, which is more friendly to developer and can easy use other test tools."),(0,o.kt)("p",null,"PatractPy will be based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkascan/py-substrate-interface"},"polkascan's Python Substrate Interface"),", which is a Python sdk for Substrate."),(0,o.kt)("p",null,"Element Group for disscusion: ",(0,o.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#PatractLabsDev:matrix.org"},"https://app.element.io/#/room/#PatractLabsDev:matrix.org")),(0,o.kt)("p",null,"PatractPy will achieve the following support:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some support that missing in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkascan/py-substrate-interface"},"polkascan's Python Substrate Interface"),", which is needed for contracts"),(0,o.kt)("li",{parentName:"ul"},"Provide Scanning and monitoring support for contract to do statistics and analysis"),(0,o.kt)("li",{parentName:"ul"},"Provide a SDK development example for ERC20 contract"),(0,o.kt)("li",{parentName:"ul"},"Support For unittest to canvas or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/europa"},"europa")," env.")),(0,o.kt)("h2",{id:"basic-apis-for-contracts"},"Basic Apis For Contracts"),(0,o.kt)("p",null,"As ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkascan/py-substrate-interface"},"polkascan's Python Substrate Interface")," has provide some support to contract api, so we not need to important the api for contract calls, but there is some api to add:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SubstrateSubscriber")," is a subscriber support to subscribe data changes in chain, for example, the events in chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_contract_event_type")," add event decode support for contracts.")),(0,o.kt)("p",null,"The basic api split into 2 parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contract, include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"contractExecutor: This api could construct an extrinsic to call a contract, would be packed into a block and change state."),(0,o.kt)("li",{parentName:"ul"},"contractReader: This api could construct a rpc request to call a contract, do not pack into a block and do not change any state."),(0,o.kt)("li",{parentName:"ul"},"contractCreator: This api is used for ",(0,o.kt)("inlineCode",{parentName:"li"},"instantiate")," a contract and holding the Wasm code and metadata, receive following parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas_limit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endowment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deployment_salt")," (",(0,o.kt)("inlineCode",{parentName:"li"},"salt")," parameter in ",(0,o.kt)("inlineCode",{parentName:"li"},"instantiate"),")"))),(0,o.kt)("li",{parentName:"ul"},"ContractAPI: This api is used for ",(0,o.kt)("inlineCode",{parentName:"li"},"call")," a contract, is a wrapper for ",(0,o.kt)("inlineCode",{parentName:"li"},"contractExecutor")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"contractReader"),", developers could use this api to react with contracts. This api could create a instance depends on the metadata, auto generate the contract access functions based on the contract. And the auto-gen functions receive the parameters which defined in contracts, besides receive following common parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas_limit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," (notice, if current call's ",(0,o.kt)("inlineCode",{parentName:"li"},"payable")," is false, this ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," must be ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),")"))),(0,o.kt)("li",{parentName:"ul"},"ContractFactory: This api is used for constructing a contract instance in python, and developer could use this instance to access contract. This is a wrapper for ",(0,o.kt)("inlineCode",{parentName:"li"},"contractCreator")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ContractAPI")))),(0,o.kt)("li",{parentName:"ul"},"Observer, include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ContractObserver: This api is used for listen the events in contracts. ")))),(0,o.kt)("p",null,"All methods which belong to the instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractAPI")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractFactory")," ",(0,o.kt)("strong",{parentName:"p"},"receive a keypair as the first parameter"),", as the sender for this operation. And from the second parameter, receive the parameters defined in contracts."),(0,o.kt)("h3",{id:"contractfactory-and-contractapi-is-used-to-react-with-contracts"},(0,o.kt)("inlineCode",{parentName:"h3"},"ContractFactory")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"ContractAPI")," is used to react with contracts"),(0,o.kt)("p",null,"we add a factory to put code and deploy contracts to chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"factory = ContractFactory.create_from_file(\n    substrate=substrate, \n    code_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.wasm'),\n    metadata_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')\n)\n\nres = factory.put_code(alice) # alice is the keypair for `//Alice`\nprint(res.is_succes)\n\n# this api is `ContractAPI`\napi = factory.new(alice, 1000000 * (10 ** 15), endowment=10**15, gas_limit=1000000000000)\nprint(api.contract_address) # contract_address is the deployed contract\n")),(0,o.kt)("p",null,"The factory will generate constructors from metadata file."),(0,o.kt)("p",null,"We add api by metadata for Contract, api will auto generate caller for contract from metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# create a ContractAPI from an existed contract address\napi = ContractAPI(contract_address, contract_metadata, substrate)\n\n# api will auto generate caller for contract from metadata\nalice_balance_old = api.balance_of(bob, alice.ss58_address) # bob is the keypair for `//Bob`\n\nres = api.transfer(alice, bob.ss58_address, 100000, gas_limit=20000000000)\nlogging.info(f'transfer res {res.error_message}')\nprint(res.is_succes)\n\nalice_balance = api.balance_of(bob, alice.ss58_address)\nlogging.info(f'transfer alice_balance {alice_balance}')\n\nbob_balance = api.balance_of(bob, bob.ss58_address)\nlogging.info(f'transfer bob_balance {bob_balance}')\n")),(0,o.kt)("p",null,"The api will generate exec and read api from metadata file, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'      {\n        "args": [\n          {\n            "name": "owner",\n            "type": {\n              "displayName": [\n                "AccountId"\n              ],\n              "type": 5\n            }\n          }\n        ],\n        "docs": [\n          " Returns the account balance for the specified `owner`.",\n          "",\n          " Returns `0` if the account is non-existent."\n        ],\n        "mutates": false,\n        "name": [\n          "balance_of"\n        ],\n        "payable": false,\n        "returnType": {\n          "displayName": [\n            "Balance"\n          ],\n          "type": 1\n        },\n        "selector": "0x56e929b2"\n      },\n')),(0,o.kt)("p",null,"In api, can call by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"bob_balance = api.balance_of(bob, bob.ss58_address)\nlogging.info(f'transfer bob_balance {bob_balance}')\n")),(0,o.kt)("h3",{id:"contractobserver-is-used-to-listen-contracts-events"},(0,o.kt)("inlineCode",{parentName:"h3"},"ContractObserver")," is used to listen contracts events"),(0,o.kt)("p",null,"ContractObserver can observer events for a contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"substrate=SubstrateInterface(url=\"ws://127.0.0.1:9944\", type_registry_preset='canvas')\ncontract_metadata = ContractMetadata.create_from_file(\n    metadata_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json'),\n    substrate=substrate\n)\nobserver = ContractObserver(\"0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48\", contract_metadata, substrate)\n\n# for some handlers (callbacks)\nobserver.scanEvents()\n")),(0,o.kt)("p",null,"The handler function can take the erc20 support as a example."),(0,o.kt)("h2",{id:"special-case-erc20-api"},"Special case: ERC20 API"),(0,o.kt)("p",null,"Except react contract by ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractAPI"),", developers could create the wrapper by themself to react with corresponding contract. ",(0,o.kt)("inlineCode",{parentName:"p"},"py-contract")," create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20 API")," as an example to show this."),(0,o.kt)("p",null,"ERC20 api provide a wapper to erc20 contract exec, read and observer events, it can be a example for contracts api calling."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\n# init api\nsubstrate=SubstrateInterface(url=\"ws://127.0.0.1:9944\", type_registry_preset='canvas')\n\ncontract_metadata = ContractMetadata.create_from_file(\n    metadata_file=os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json'),\n    substrate=substrate\n)\n\nalice = Keypair.create_from_uri('//Alice')\nbob = Keypair.create_from_uri('//Bob')\n\n# erc20 api\nerc20 = ERC20.create_from_contracts(\n    substrate= substrate, \n    contract_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.wasm'),\n    metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')\n)\n\n# deplay a erc20 contract\nerc20.put_and_deploy(alice, 1000000 * (10 ** 15))\n\n# read total supply\ntotal_supply = erc20.totalSupply()\n\n# transfer\nerc20.transfer_from(alice,\n    from_acc=alice.ss58_address, \n    to_acc=bob.ss58_address, \n    amt=10000)\n\nerc20.transfer(alice, bob.ss58_address, 10000)\n\n# get balance\nalice_balance = erc20.balance_of(alice.ss58_address)\n\n# approve\nerc20.approve(alice, spender=bob.ss58_address, amt=10000)\n\n# get allowance\nalice_allowance = erc20.allowance(alice.ss58_address, bob.ss58_address)\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ERC20Observer")," is a event observer for erc20 contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"observer = ERC20Observer.create_from_address(\n    substrate = substrate, \n    contract_address = contract_address,\n    metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')\n)\n\ndef on_transfer(num, evt):\n    logging.info(\"on_transfer in {} : {} {} {}\".format(num, evt['from'], evt['to'], evt['value']))\n\ndef on_approval(num, evt):\n    logging.info(\"on_approval in {} : {} {} {}\".format(num, evt['owner'], evt['spender'], evt['value']))\n\n\nobserver.scanEvents(on_transfer = on_transfer, on_approval = on_approval)\n")),(0,o.kt)("h3",{id:"observer-for-contracts"},"Observer For Contracts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ContractObserver")," is a observer to listen events by contract with a given address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"observer = ContractObserver.create_from_address(\n    substrate = substrate, \n    contract_address = 'contract_address',\n    metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')\n)\n\ndef on_transfer(num, evt):\n    logging.info(\"on_transfer in {} : {} {} {}\".format(num, evt['from'], evt['to'], evt['value']))\n\ndef on_approval(num, evt):\n    logging.info(\"on_approval in {} : {} {} {}\".format(num, evt['owner'], evt['spender'], evt['value']))\n\nobserver.scanEvents(from_num, to_num, {\n    'Transfer': on_transfer,\n    'Approve': on_approval\n})\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"handlers")," is a hander dictionary by name to hander function."),(0,o.kt)("h2",{id:"unittest-node-environment"},"Unittest Node Environment"),(0,o.kt)("p",null,"PatractPy can support write contract unittest by node environment."),(0,o.kt)("p",null,"At First We need install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"europa"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from patractinterface.contracts.erc20 import ERC20\nfrom patractinterface.unittest.env import SubstrateTestEnv\n\nclass UnittestEnvTest(unittest.TestCase):\n    @classmethod\n    def setUp(cls):\n        # start env or use canvas for a 6s block\n        cls.env = SubstrateTestEnv.create_europa(port=39944)\n        cls.env.start_node()\n\n        cls.api = SubstrateInterface(url=cls.env.url(), type_registry_preset=cls.env.typ(), type_registry=cls.env.types())\n        cls.alice = Keypair.create_from_uri('//Alice')\n        cls.bob = Keypair.create_from_uri('//Bob')\n\n        cls.erc20 = ERC20.create_from_contracts(\n            substrate= cls.substrate, \n            contract_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.wasm'),\n            metadata_file= os.path.join(os.path.dirname(__file__), 'constracts', 'ink', 'erc20.json')\n        )\n        cls.erc20.put_and_deploy(alice, 1000000 * (10 ** 15))\n\n        return\n\n    def tearDown(cls):\n        cls.env.stop_node()\n\n    def test_transfer(self):\n        self.erc20.transfer_from(alice,\n            from_acc=alice.ss58_address, \n            to_acc=bob.ss58_address, \n            amt=10000)\n        # some more test case\n\nif __name__ == '__main__':\n    unittest.main()\n")),(0,o.kt)("p",null,"By example, we can use python to write testcase for some complex logics, by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa"},"europa"),", we can test the contracts for python scripts."))}u.isMDXComponent=!0}}]);