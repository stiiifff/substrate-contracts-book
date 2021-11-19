"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[4958],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4490:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},c="Report for Redspot v0.2",l={unversionedId:"redspot/reports/v0.2Report",id:"redspot/reports/v0.2Report",isDocsHomePage:!1,title:"Report for Redspot v0.2",description:"* Patract Hub's treasury report for Redspot v0.2, a Wasm contract development workflow and scaffold",source:"@site/docs/redspot/reports/v0.2Report.md",sourceDirName:"redspot/reports",slug:"/redspot/reports/v0.2Report",permalink:"/substrate-contracts-book/redspot/reports/v0.2Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/redspot/reports/v0.2Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Redspot v0.1",permalink:"/substrate-contracts-book/redspot/reports/v0.1Report"},next:{title:"Report for Redspot v0.3",permalink:"/substrate-contracts-book/redspot/reports/v0.3Report"}},p=[{value:"## New features",id:"-new-features",children:[{value:"Contract Compiling",id:"contract-compiling",children:[]},{value:"Contract testing",id:"contract-testing",children:[]},{value:"JavaScript Interactive Console",id:"javascript-interactive-console",children:[]},{value:"Running custom script",id:"running-custom-script",children:[]},{value:"Configuration File",id:"configuration-file",children:[]}]},{value:"Plugins",id:"plugins",children:[]},{value:"Writing a Plugin",id:"writing-a-plugin",children:[{value:"Extend the runtime environment",id:"extend-the-runtime-environment",children:[]},{value:"Writing a Task",id:"writing-a-task",children:[]},{value:"Extend a Task",id:"extend-a-task",children:[]},{value:"New features about v0.3",id:"new-features-about-v03",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"report-for-redspot-v02"},"Report for Redspot v0.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Patract Hub's treasury report for Redspot v0.2, a Wasm contract development workflow and scaffold")),(0,r.kt)("p",null,"Patract Hub (",(0,r.kt)("a",{parentName:"p",href:"https://patract.io"},"https://patract.io"),") develops local open source toolkits and one-stop cloud smart IDE, committed to provide free development toolkits and infrastructure services for the entire smart contract ecosystem. Six weeks ago, we applied a treasury proposal for Redspot v0.2 (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/13"},"https://polkadot.polkassembly.io/treasury/13"),") , and now we have finished the development (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/redspot"},"https://github.com/patractlabs/redspot"),") on time and recorded a YouTube demo video (",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/nVhLW_XEhk"},"https://youtu.be/nVhLW_XEhk"),")."),(0,r.kt)("p",null,"Redspot v0.1 includes the basic functions of compiling contracts, testing contracts, and deploying contracts. When developing v0.2, we took a closer look at Ethereum's contract development tools, such as Truffle, Waffle, Ethers.js, Hardhat (aka Buidler when we applied v0.2), etc. We believe that the architecture of Hardhat (",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"https://hardhat.org/"),") is the most suitable for the Polkadot contract ecosystem. Hardhat has a very high degree of flexibility, scalability and a complete set of plugin ecology. These plugins can add additional functions and integrate into your workflow. Redspot v0.2 refactored Redspot v0.1 based on Hardhat's code, and finally Redspot v0.2 has the same plugin system as Hardhat. This allows us to easily support contract development on different parachains through plugins in the future."),(0,r.kt)("p",null,"We have completed all the required features in the proposal for v0.2 and also provided the support for TypeScript. Now the templates installed through ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot-new erc20")," will use TypeScript by default, and no complicated settings are required. In addition, we have developed two plugins: ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/polkadot"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/polkadot")," encapsulates and integrates the functions of ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," also provide SDKs for interacting with contracts, but ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract")," has more convenient and intuitive api and log prompts. In the process of developing ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract"),", we referred to the API design of Ethers.js."),(0,r.kt)("h2",{id:"-new-features"},"## New features"),(0,r.kt)("p",null,"Like v0.1, you can install the template we provided through ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot-new ERC20"),". You can also easily integrate Redspot into your existing contract project by following the demo video we provided earlier."),(0,r.kt)("p",null,"Considering that some developers are not familiar with the configuration of TypeScript, we provide a template based on TypeScript by default. We also turn off TypeScript's runtime type checking by default, so that developers can easily use TypeScript's code hinting function, and they don't need to be troubled by TypeScript's type errors. If you want to use JavaScript for development, you only need to set allowjs in the tsconfig file."),(0,r.kt)("p",null,"After the installation is complete, you will get a directory structure similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"app-name/\n    |-.vscode/\n        |-launch.json\n    |-artifacts/\n        |- <would store compile contract artifacts, e.g. contracts abi(json) and wasm files>\n    |-contracts/\n            |-lib.rs\n        |-Cargo.toml\n    |-scripts\n            |-deploy.ts\n    |-node_modules/\n        |- ...\n    |-tests/\n        |-<template-name>.test.ts\n    |-package.json\n    |-redspot.config.js\n    |-tsconfig.json\n")),(0,r.kt)("p",null,"In the template, we provide a test file, a deploy script, and an ERC20 contract. Unlike v0.1, we moved ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo.toml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts directory")," and the structure became clearer. In v0.2, we provide configuration options for ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"redspot.config.js"),", you can change it to your favorite name."),(0,r.kt)("h3",{id:"contract-compiling"},"Contract Compiling"),(0,r.kt)("p",null,"On the basis of v0.1, we have added toolchain configuration items. You can set the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"rust.toolchain")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"redspot.config.js")," file. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"nightly"),". We have also integrated this step of compiling the contract into the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," commands. When you run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot run"),", the contract will be compiled in advance. You can also cancel this behavior by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-compile")," parameter."),(0,r.kt)("h3",{id:"contract-testing"},"Contract testing"),(0,r.kt)("p",null,"When we developed v0.1, because the ERC20 contract was not yet available, our test code was relatively simple, and we could only test reading values and sending transactions. Now we can write more complete test cases. Below is the unit test code for the ERC20 contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import BN from "bn.js";\nimport { patract } from "redspot";\nimport { expect } from "chai";\n\nconst {\n  disconnect,\n  getContractFactory,\n  getRandomSigner,\n  getSigners,\n  getAbi,\n  api,\n} = patract!;\n\ndescribe("ERC20", () => {\n  after(() => {\n    return disconnect();\n  });\n\n  async function setup() {\n    const one = new BN(10).pow(new BN(api.registry.chainDecimals));\n    const signers = await getSigners();\n    const Alice = signers[0];\n    const sender = await getRandomSigner(Alice, one.muln(10));\n    const contractFactory = await getContractFactory("ERC20", sender);\n    const contract = await contractFactory.deploy("new", "1000");\n    const abi = getAbi("ERC20");\n    const receiver = await getRandomSigner();\n\n    return { sender, contractFactory, contract, abi, receiver, Alice, one };\n  }\n\n  it("Assigns initial balance", async () => {\n    const { contract, sender } = await setup();\n    const result = await contract.query.balanceOf(sender.address);\n    expect(result?.output?.toString()).to.equal("1000");\n  });\n\n  it("Transfer adds amount to destination account", async () => {\n    const { contract, sender, receiver } = await setup();\n\n    await contract.tx.transfer(receiver.address, 7);\n\n    const result = await contract.query.balanceOf(receiver.address);\n\n    expect(result.output?.toString()).to.equal("7");\n  });\n\n  it("Transfer emits event", async () => {\n    const { contract, sender, receiver } = await setup();\n\n    const result = await contract.tx.transfer(receiver.address, 7);\n\n    const event = result?.events?.find((e) => e.name === "Transfer");\n\n    const [from, to, value] = event?.args as any;\n\n    expect(from.unwrap().toString()).to.equal(sender.address);\n    expect(to.unwrap().toString()).to.equal(receiver.address);\n    expect(value.toNumber()).to.equal(7);\n  });\n\n  it("Can not transfer above the amount", async () => {\n    const { contract, receiver } = await setup();\n\n    const result = await contract.tx.transfer(receiver.address, 1007);\n\n    const event = result?.events?.find((e) => e.name === "Transfer");\n\n    expect(event).to.be.undefined;\n  });\n\n  it("Can not transfer from empty account", async () => {\n    const { contract, Alice, one, sender } = await setup();\n\n    const emptyAccount = await getRandomSigner(Alice, one.muln(10));\n\n    const result = await contract.tx.transfer(sender.address, 7, {\n      signer: emptyAccount,\n    });\n\n    const event = result?.events?.find((e) => e.name === "Transfer");\n\n    expect(event).to.be.undefined;\n  });\n});\n')),(0,r.kt)("p",null,"In this test case, we used @redspot/patract to perform basic tests on events that read data, transactions, and contracts. In v0.1, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," test framework. During the development process, we found that the scalability of ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," is not good, and the print log is very confusing. So in v0.2 we switched to ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chai"),". They are more scalable and the logs are more friendly. But we do not force developers to use ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),". If you still want to continue using ",(0,r.kt)("inlineCode",{parentName:"p"},"jest"),", you can also install the dependency of ",(0,r.kt)("inlineCode",{parentName:"p"},"jest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add jest ts-jest @types/jest"),", and then use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"npx jest")," starts the test. In v0.1, you cannot choose the test framework you want, but it is different in v0.2. We hope to provide a framework that allows users to freely combine various functions."),(0,r.kt)("p",null,"In v0.1, we found it difficult to repeat unit tests. Because Substate does not support the deployment of multiple identical contracts for the same account. So in v0.2, we call a setup function before running each test. It will initialize the contract and provide a random account, and then we will use this random account to redeploy the contract. In this way, the influence of the external environment can be avoided and unit testing can be carried out more stably. Now you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot test")," to test, and you will get a result like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/69485494/98191174-818ff380-1f7d-11eb-930c-67faf890d73d.png",alt:"image"})),(0,r.kt)("p",null,"As you can see, we provide a very detailed log of contract calls. Including contract call parameters, consumed handling fees, consumed GAS, etc. If the user wants to know the details of the transaction, he can also view it on the browser by clicking the successful transaction link. Of course, the log level can be configured through ",(0,r.kt)("inlineCode",{parentName:"p"},"loglevel"),"."),(0,r.kt)("h3",{id:"javascript-interactive-console"},"JavaScript Interactive Console"),(0,r.kt)("p",null,"In v0.2, we added the function of JavaScript Interactive Console. It supports injecting the runtime environment of redspot in the ",(0,r.kt)("inlineCode",{parentName:"p"},"repl")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),". Similar to Truffle's ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," command. Console is a supplement to unit testing. Through the Console, we can easily perform temporary tests on the contract. Users can directly call the contract in the Console and get the result. You can open the console through the ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot console")," command."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusERContent.com/69485494/98191197-910f3c80-1f7d-11eb-9504-37a4b5691809.png",alt:"image"})),(0,r.kt)("h3",{id:"running-custom-script"},"Running custom script"),(0,r.kt)("p",null,"The essence of Redspot v0.2 is to provide a contract-developed JavaScirpt runtime environment and plugin ecology. In v0.1, you must use our built-in commands to run the code, and you cannot freely run your own scripts. But this is not the case in v0.2, we just provide a runtime environment and a package of some commonly used commands. You can include the Redspot runtime environment in any JavaScript code. And run the code the way you like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { patract, network } = require("redspot");\n\nconst { getContractFactory, disconnect } = patract;\n\nconst { connect, api } = patract!;\n\nasync function run() {\n  await connect();\n\n  const contractFactory = await getContractFactory("ERC20", signer);\n\n  const contract = await contractFactory.deployed("new", "1000000", {\n    gasLimit: "200000000000",\n    value: "10000000000000000",\n  });\n\n  console.log("");\n  console.log(\n    "Deploy successfully. The contract address: ",\n    contract.address.toString()\n  );\n\n  disconnect();\n}\n\nrun().catch((err) => {\n  console.log(err);\n});\n')),(0,r.kt)("p",null,"In the above code, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract")," plugin to deploy our contract. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"npx run [filename]")," command to run this code, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"node [filename]")," to call this code. Unlike Truffle, we did not do excessive encapsulation. All functions can be called through the Redspot runtime environment. However, introducing it is very simple, you only need to do ",(0,r.kt)("inlineCode",{parentName:"p"},"const env = require('redspot')"),"."),(0,r.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"This is the code from the configuration file for Redspot v0.2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { usePlugin } from "redspot/config";\nimport { RedspotConfig } from "redspot/types";\n\nusePlugin("@redspot/patract");\n\nexport default {\n  defaultNetwork: "development",\n  rust: {\n    toolchain: "nightly",\n  },\n  networks: {\n    development: {\n      endpoint: "ws://192.168.1.165:9944",\n      types: {\n        Address: "AccountId",\n        LookupSource: "AccountId",\n      },\n      gasLimit: "400000000000",\n      explorerUrl: "https://polkadot.js.org/apps/#/explorer/query/",\n    },\n    substrate: {\n      endpoint: "ws://127.0.0.1:9944",\n      gasLimit: "400000000000",\n      accounts: ["//Alice"],\n      types: {},\n    },\n  },\n  mocha: {\n    timeout: 60000,\n  },\n} as RedspotConfig;\n')),(0,r.kt)("p",null,"In this file, you can import the plug-ins you need to use. On the basis of v0.1, we also added gasLimit, mocha and other configuration items. In the v0.1 version, accounts can only be imported via private keys, while in v0.2, we support accounts in Substrate URI and keypair format. Users can import the json file of their private key in the form of keypair. This can make the private key more secure and avoid leakage."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"In the current version, we provide two plugins, ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/polkadot")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract"),". Their role is to provide the SDK for calling the contract, but their api design is different. ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/polkadot")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," internally, so the interface it provides is basically the same as \u02bbapi-contract",(0,r.kt)("inlineCode",{parentName:"p"},". In "),"@redspot/patract`, we have made many optimizations and improvements to the api. The interfaces provided by Patract are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"env.patract = {\n    api: ApiPromise;\n  Contract: typeof Contract;\n  ContractFactory: typeof ContractFactory;\n  connect: () => Promise<ApiPromise>;\n  disconnect: () => Promise<void>;\n  getContractAt(contractName: string, address: AccountId | string, signer?: AccountSigner): Promise<Contract>;\n  getContractFactory(contractName: string, signer?: AccountSigner): Promise<ContractFactory>;\n  getAbi(contractName: string): Abi;\n  getWasm(contractName: string): string;\n  getSigners: () => Promise<AccountSigner[]>;\n  getRandomSigner(from?: AccountSigner, amount?: BN | string | number): Promise<AccountSigner>;\n}\n")),(0,r.kt)("p",null,"You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractFactory")," object by ",(0,r.kt)("inlineCode",{parentName:"p"},"getContractFactory(contractName)"),". This function will automatically discover the wasm and abi in the project through the passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"contractName"),", and then instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractFactory"),". Then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," function of ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractFactory"),", which will send two transactions, ",(0,r.kt)("inlineCode",{parentName:"p"},"putcode")," and \u02bbinstantiate` to the chain, and instantiate the contract after obtaining the address of the contract."),(0,r.kt)("p",null,"The role of the Contract object is to call the contract, which is similar to api-contract. However, we redesigned the interface based on actual needs and referred to the contract module of Ethers.js. Compared with api-contract, there are several differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The parameters passed when calling the contract are different. In api-contract, you need to call a transaction like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await new Promise((resolve, reject) => {\n    contract.tx.transfer(value, gaslimit, ...params).signAndSend(Alice, (result) => {\n    ...\n  })\n})\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract"),", we encapsulate the cumbersome template code, so you only need to do this to call the contract transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await contract.tx.transfer(...params)\n")),(0,r.kt)("p",null,"You can also set  gaslimit, value and signer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await contract.tx.transfer(...params, {gaslimit, value, signer: Alice})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In api-contract, you need to handle transaction errors and find contract events yourself. In fact, many people don't know how to get detailed information about errors in metadata. But in ",(0,r.kt)("inlineCode",{parentName:"li"},"@redspot/patract"),", the user does not need to do additional processing. We will return such an object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    from: string;\n  txHash?: string;\n  blockHash?: string;\n  error?: {\n    message?: any;\n    data?: any;\n  };\n  result: SubmittableResult;\n  gasConsumed: u64;\n  events?: DecodedEvent[];\n}\n")),(0,r.kt)("p",null,"Error will contain the parsed error message, events will contain the parsed contract events, ",(0,r.kt)("inlineCode",{parentName:"p"},"gasConsumed")," is the gas consumed by this call. After the transaction is on the chain, we will provide a URL link to polkadot apps, The user can view the detailed information of the transaction on the browser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We provide a more convenient way to call contracts. You can check the balance through ",(0,r.kt)("inlineCode",{parentName:"li"},"contract.query.balanceOf(address)")," or contract.balanceOf(address). We also provide a function for estimating gas, just call ",(0,r.kt)("inlineCode",{parentName:"li"},"contract.estimateGas(...params)"),"."),(0,r.kt)("li",{parentName:"ul"},"When instantiating the contract, we provide the default endowment value, which is probably ",(0,r.kt)("inlineCode",{parentName:"li"},"(existentialDeposit + tombstoneDeposit)*2"),". The default gaslimit will be set to MaximumBlockWeight * 0.2."),(0,r.kt)("li",{parentName:"ul"},"We provide more detailed contract call logs and error prompts so that users can find their errors more easily through the logs printed on the console.")),(0,r.kt)("h2",{id:"writing-a-plugin"},"Writing a Plugin"),(0,r.kt)("p",null,"Plugins are the core part of Redspot, and they are also the focus of our next work. Most of our future functions will be integrated in the form of plug-ins. We hope that Redspot can become a progressive, scalable contract development framework, rather than being bloated like Truffle. Currently, plugins can be integrated into Redspot by extending the runtime environment, adding Tasks, and extending Tasks."),(0,r.kt)("h3",{id:"extend-the-runtime-environment"},"Extend the runtime environment"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@redspot/patract")," plugin was introduced in this way. Let me demonstrate how to add a new plug-in."),(0,r.kt)("p",null,"We can add the previous setup function to the redspot runtime environment to simplify the contract deployment process in the console. code show as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { extendEnvironment } from "redspot/config";\nimport type { RedspotRuntimeEnvironment } from "redspot/types";\n\nextendEnvironment((env: RedspotRuntimeEnvironment) => {\n  (env as any).setup = async function setup() {\n    const {\n      getContractFactory,\n      getRandomSigner,\n      getSigners,\n      getAbi,\n      api,\n    } = env.patract!;\n    const one = new BN(10).pow(new BN(api.registry.chainDecimals));\n    const signers = await getSigners();\n    const Alice = signers[0];\n    const sender = await getRandomSigner(Alice, one.muln(10));\n    const contractFactory = await getContractFactory("ERC20", sender);\n    const contract = await contractFactory.deploy("new", "1000");\n    const abi = getAbi("ERC20");\n    const receiver = await getRandomSigner();\n\n    return { sender, contractFactory, contract, abi, receiver, Alice, one };\n  }\n})\n')),(0,r.kt)("p",null,"The \u02bbextendEnvironment",(0,r.kt)("inlineCode",{parentName:"p"},"function can help us inherit and extend env. In the callback function of extendEnvironment, we can access the existing env, and we hang the"),"setup` function under env. Now try the console again:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/69485494/98191242-a08e8580-1f7d-11eb-94a2-dbb3e621649a.png",alt:"image"})),(0,r.kt)("p",null,"We successfully injected the ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," function into the Redspot runtime environment. In the console, ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," is a global variable. Now only two lines of code can complete the contract initialization and transfer test."),(0,r.kt)("h3",{id:"writing-a-task"},"Writing a Task"),(0,r.kt)("p",null,"Task is a JavaScript asynchronous function with some related metadata. Redspot uses this metadata to automatically perform some operations for you, such as parameter parsing, verification and help information."),(0,r.kt)("p",null,"Everything you do in redspot can be defined as a Task. The ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," commands provided by Redspot are essentially Tasks. And the api they use is exactly the same as the api provided to the user. So the user can write the function plug-ins he wants without restrictions, even compile Solidity, and call EVM contracts."),(0,r.kt)("p",null,"Next I will create a task that prints the balance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const {task} = require("redspot/config");\n\ntask("balance", "Prints an account\'s balance")\n  .addParam("account", "The account\'s address")\n  .setAction(async (taskArgs, { patract }) => {\n    const api = patract.api;\n    await patract.connect()\n    const accountInfo = await api.query.system.account(taskArgs.account);\n    console.log(accountInfo.toHuman());\n  });\n\nmodule.exports = {};\n')),(0,r.kt)("p",null,"Then we can run it and get the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx redspot balance \n{\n  nonce: '0',\n  refcount: '0',\n  data: { free: '0', reserved: '0', miscFrozen: '0', feeFrozen: '0' }\n}\n")),(0,r.kt)("h3",{id:"extend-a-task"},"Extend a Task"),(0,r.kt)("p",null,"Redspot has many built-in Tasks and Subtasks. For example, to compile a contract, there will be these Tasks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export const TASK_COMPILE = "compile";\nexport const TASK_COMPILE_COMPILE = "compile:compile";\nexport const TASK_COMPILE_GET_RESOLVED_WORKSPACE = "compile:get-resolved-workspace";\nexport const TASK_BUILD_ARTIFACTS = "compile:build-artifacts";\nexport const TASK_COMPILE_GET_COMPILER_INPUT = "compile:get-compile-input";\nexport const TASK_COMPILE_RUN_COMPILER = "compile:run-compiler";\nexport const TASK_COMPILE_RUN_GENERATE_METADATA = "compile:run-generate-metadata";\n')),(0,r.kt)("p",null,"We can achieve the desired function by overriding these Tasks. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"compile task")," can be overridden to compile the solidity contract."),(0,r.kt)("p",null,"You can also extend a task. We provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"runSuper")," function in the task, which allows you to run the original task. for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { exec } = require("child_process");\n\ntask(\'test\', async (_args, env, runSuper) => {\n  exec("[start node]")\n  await runSuper()\n  exec("[close node]")\n});\n')),(0,r.kt)("p",null,"We have extended the test command in this task to start your node before running the test command, and shut down your node when the test runs. You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx redspot test")," to test as before."),(0,r.kt)("p",null,"Through this plug-in system, we can achieve more complex and changeable requirements. We expect to support more contract development languages, AssemblyScript, C++, Go or C# in the future. We will also realize the compatibility of contracts on different parachains in the future. Redspot v0.2 has been upgraded on the more mature contract development tools of Ethereum. We believe that standing on the shoulders of giants, we can go further. I also hope that more developers can come to contribute code, develop plug-ins, and help us improve the contract development ecology on Substrate."),(0,r.kt)("h3",{id:"new-features-about-v03"},"New features about v0.3"))}u.isMDXComponent=!0}}]);