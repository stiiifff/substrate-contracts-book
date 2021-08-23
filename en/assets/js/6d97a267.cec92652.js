"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[2234],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(a),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,c(c({ref:e},p),{},{components:a})):n.createElement(g,c({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8506:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),c=["components"],s={},i="@redspot_patract plug-in",l={unversionedId:"redspot/plugin/redspot-patract",id:"redspot/plugin/redspot-patract",isDocsHomePage:!1,title:"@redspot_patract plug-in",description:"What",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/plugin/redspot-patract.md",sourceDirName:"redspot/plugin",slug:"/redspot/plugin/redspot-patract",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-patract",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin/redspot-patract.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"@redspot_gas-reporter plug-in",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-gas-reporter"},next:{title:"@redspot_explorer plug-in",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-explorer"}},p=[{value:"What",id:"what",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Type definitions",id:"type-definitions",children:[]},{value:"Usages",id:"usages",children:[{value:"ContractFactory",id:"contractfactory",children:[]},{value:"Contract",id:"contract",children:[]}]}],d={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redspot_patract-plug-in"},"@redspot_patract plug-in"),(0,o.kt)("h2",{id:"what"},"What"),(0,o.kt)("p",null,"@redspot/patract is similar to @polkadot/contract, used to access contracts, send transactions, etc but designed to be easier to use. The plug-in will extend the Redspot runtime environment and add the patract attributes, so you can access the patract instance in runtime environment."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add @redspot/patract\n")),(0,o.kt)("p",null,"Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { patract } from 'redspot';\n")),(0,o.kt)("h2",{id:"type-definitions"},"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Patract {\n  Contract: Contract;\n  ContractFactory: ContractFactory;\n  /**\n   * Generating Contract Instance from Contract Addresses\n   *\n   * @param contractName Contract name\n   * @param address contract address\n   * @param signer The account used to sign, or the first account in the user configured if it is undefined.\n   * @returns Contract Instance\n   */\n  getContractAt(\n    contractName: string,\n    address: AccountId | string,\n    signer?: Signer\n  ): Promise<Contract>;\n  /**\n   * Return the contract factory\n   *\n   * @param contractName Contract name\n   * @param signer The account used to sign, or the first account in the user configured if it is undefined.\n   * @returns Contract Factory Instance\n   */\n  getContractFactory(\n    contractName: string,\n    signer?: Signer\n  ): Promise<ContractFactory>;\n  /**\n   *  Generate a random account and transfer token to it\n   *\n   * @param from This account will be transferred to the new account\n   * @param amount The amount transferred to the new account\n   * @returns New Account\n   */\n  getRandomSigner(\n    from?: Signer,\n    amount?: BN | number | string | BigInt\n  ): Promise<Signer>;\n}\n")),(0,o.kt)("p",null,"Here is the description of each parameter:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"getRandomSigner(from, amount): Promise<Signer>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"getRandomSigner is a utility function used to create a random signer and pass some initial amount fromfromto it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"getContractFactory(contractName, signer?): Promise<ContractFactory>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"This function will create an instance of contractFactory through the contract name and signer.The contract must be compiled successfully, and the metadata file can be found in artifacts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"getContractAt(contractName, address, signer): Promise<Contract>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Create a Contract instance through the contract name, contract address, and signer.The contract must be compiled successfully, and the metadata file can be found in artifacts.")))),(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)("h3",{id:"contractfactory"},"ContractFactory"),(0,o.kt)("p",null,"ContractFactory is mainly used for contract deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { patract } from 'redspot';\nconst { getContractFactory, getRandomSigner } = patract;\nconst signers = await getSigners();\nconst contractFactory = await getContractFactory('erc20', signers[0]);\nconst contract = await contractFactory.deploy('new', '1000');\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new ContractFactory(address, contractMetadata, api, signer)"),"\uff1ayou can create a contractFactory instance by contract address, metadata, API and signer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.deploy(constructorOrId, ...args[ , overrides ]): Promise<Contract>"),"\uff1aconstructorOrId is the name of the constructor of the contract that needs to be called. Note that for some contracts that use traits, the name of the constructor is similar to the following.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const contract = await contractFactory.deploy('baseErc20,new', '1000');\n")),(0,o.kt)("p",null,"args is the list of parameters that the contructor you use needs to pass in."),(0,o.kt)("p",null,"Overrides are optional and can be used to specify gasLimit, value, signer, salt, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const contract = await contractFactory.deploy('baseErc20,new', '1000', {\n  gaslimit: '1000000000000000000',\n  salt: 'jkqwezlkwklqreqw',\n  signer: signers[1],\n  value: '3213321000000000000000000'\n});\n")),(0,o.kt)("p",null,"gasLimit refers to the maximum gas value that can be used in this transaction."),(0,o.kt)("p",null,"The salt is used to generate the address of the contract. If the deployer, deployment parameters and salt are the same, the same contract address will be generated."),(0,o.kt)("p",null,"When the signer creates a contractFactory, there will be a signer parameter, which is used for the default transaction signature. The signer project can override the default signing account."),(0,o.kt)("p",null,"value refers to the amount passed to the contract to be created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The @redspot/patract plugin will not handle the accuracy of the digital amount, you need to handle it yourself."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.deployed(constructorOrId, ...args[ , overrides ]): Promise<Contract>"),"\uff1aThis method is similar to contractFactory.deploy, the only difference is that deployed will check in advance whether the address of the contract to be generated exists, if it exists, then Will not try to deploy, but directly use the contract address to create a Contract instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>"),"\uff1aIf Wasm has been uploaded to the chain, you can directly call",(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.instantiate"),"to instantiate the contract. Its parameters are the same as deploy, but it returns the contract address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.instantiate(constructorOrId, ...args[ , overrides ]): Promise<ContractAddress>"),"\uff1aIf Wasm has been uploaded to the chain, you can directly call",(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.instantiate"),"to instantiate the contract. Its parameters are the same as deploy, but it returns the contract address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.attach(address)\uff1aContract"),":Use the specified contract address to generate Contract instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractFactory.connect(signer)\uff1acontractFactory"),"\uff1ause the specified signer to create a new contractFactory instance.")),(0,o.kt)("h3",{id:"contract"},"Contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new Contract(address, contractMetadata, api, signer)"),"\uff1aCreate a contractFactory instance through the contract address, contract metadata, API and signer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract.query.MessageName(...args[, overrides])"),"\uff1aSimilar to Polkadot.js, contract.query","[MessageName]"," can call contracts.callrpc. For example, in the erc20 contract, the account balance is obtained.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await contract.query.balanceOf(someaddress);\n")),(0,o.kt)("p",null,"The type of return value is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ContractCallOutcome {\n  debugMessage: Text;\n  gasConsumed: u64;\n  output: Codec | null;\n  result: ContractExecResultResult;\n}\n")),(0,o.kt)("p",null,"It is consistent with Polkadot.js api-contract. Overrides are optional and can be used to specify gasLimit, value, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const contract = await contract.query.balanceOf('baseErc20,new', '1000', {\n        gasLimit\uff1a'1231231231233123123'\n  value: '3213321000000000000000000'\n  signer\uff1a signers[1]\n});\n")),(0,o.kt)("p",null,"The gasLimit value refers to the gasLimit and value in contracts.call RPC. The signer can specify the origin address of contracts.call."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract.estimateGas.MessageName(...args[, overrides])"),"\uff1aThis function is similar to",(0,o.kt)("inlineCode",{parentName:"li"},"contract.query.MessageName"),", but the return value is the estimated gas that will be consumed.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await contract.estimateGas.balanceOf(someaddress);\nresult; // BN(232130000000)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract.tx.MessageName(...args[,overrides])"),"\uff1aContract transactions can be executed through",(0,o.kt)("inlineCode",{parentName:"li"},"contract.tx.MessageName"),", the example is as follows.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await contract.tx.transfer(someddress, 7);\n")),(0,o.kt)("p",null,"Unlike Polkadot.js, this function returns a promise. The resolve of the promise will not be called until the transaction is on the chain or the transaction execution error occurs."),(0,o.kt)("p",null,"The return value types are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface TransactionResponse {\n  from: string;\n  txHash?: string;\n  blockHash?: string;\n  error?: {\n    message?: any;\n    data?: any;\n  };\n  result: SubmittableResult;\n  events?: DecodedEvent[];\n}\nexport interface DecodedEvent {\n  args: Codec[];\n  name: string;\n  event: AbiEvent;\n}\n")),(0,o.kt)("p",null,"You can get the parsed contract events directly through",(0,o.kt)("inlineCode",{parentName:"p"},"result.events"),". If there is an error in execution, you can get the error message through",(0,o.kt)("inlineCode",{parentName:"p"},"result.error.message"),"."),(0,o.kt)("p",null,"Overrides are optional and can be used to specify gasLimit, value, signer, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const contract = await contract.tx.transfer(someddress, 7, {\n  gasLimit\uff1a'1231231231233123123'\n  value: '3213321000000000000000000'\n  signer\uff1a signers[1]\n});\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"gasLimit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The maximum gas value that can be used in this transaction")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount passed to the contract to be created")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"signer"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Used to override the default signer")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract.attach(address)\uff1aContract"),"\uff1aUse the specified contract address to generate a Contract instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract.connect(signer)\uff1aContract"),"\uff1aUse the specified signer to create a new Contract instance.")))}u.isMDXComponent=!0}}]);