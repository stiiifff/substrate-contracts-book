"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1755],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={},c="Tasks",l={unversionedId:"redspot/guides/tasks",id:"redspot/guides/tasks",isDocsHomePage:!1,title:"Tasks",description:"What are tasks",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/guides/tasks.md",sourceDirName:"redspot/guides",slug:"/redspot/guides/tasks",permalink:"/substrate-contracts-book/en/redspot/guides/tasks",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/redspot/guides/tasks.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integrate into an existing contract project",permalink:"/substrate-contracts-book/en/redspot/intro/integrate"},next:{title:"Configuration",permalink:"/substrate-contracts-book/en/redspot/guides/configuration"}},p=[{value:"What are tasks",id:"what-are-tasks",children:[]},{value:"Task Options",id:"task-options",children:[{value:"Global OPTIONS",id:"global-options",children:[]},{value:"Task OPTIONS",id:"task-options-1",children:[]}]},{value:"<code>clean</code>",id:"clean",children:[]},{value:"<code>compile</code>",id:"compile",children:[{value:"compile task options",id:"compile-task-options",children:[]}]},{value:"<code>console</code>",id:"console",children:[]},{value:"<code>explorer</code>",id:"explorer",children:[]},{value:"<code>help</code>",id:"help",children:[]},{value:"<code>testnet</code>",id:"testnet",children:[]},{value:"<code>test</code>",id:"test",children:[{value:"test task options",id:"test-task-options",children:[]},{value:"writing your test file",id:"writing-your-test-file",children:[]}]},{value:"<code>run</code>",id:"run",children:[]},{value:"<code>console</code>",id:"console-1",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tasks"},"Tasks"),(0,a.kt)("h2",{id:"what-are-tasks"},"What are tasks"),(0,a.kt)("p",null,"Every time you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx Redspot xxx"),", you are running tasks. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot compile")," runs the compilation task. "),(0,a.kt)("p",null,"To view the tasks currently available by redspot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot\n")),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot --help")," command to view the help information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Redspot version 0.11.4\nUsage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]\nGLOBAL OPTIONS:\n  --config                   A Redspot config file.\n  --help                     Shows this message, or a task's help if its name is provided\n  --log-level                Set log levels 1-5 (default: \"2\")\n  --max-memory               The maximum amount of memory that Redspot can use.\n  --network                  The network to connect to.\n  --show-stack-traces        Show stack traces.\n  --tsconfig                 Reserved redspot argument -- Has no effect.\n  --verbose                  Enables Redspot verbose logging\n  --version                  Shows redspot's version.\n\nAVAILABLE TASKS:\n  clean           Clears the cache and deletes all artifacts\n  compile         Compiles the entire project, building all artifacts\n  console         Opens a redspot console\n  explorer        Start redspot explorer\n  help            Prints this message\n  run             Runs a user-defined script after compiling the project\n  test            Runs mocha tests\n  testnet         Running the test network\nTo get help for a specific task run: npx redspot help [task]\n")),(0,a.kt)("h2",{id:"task-options"},"Task Options"),(0,a.kt)("h3",{id:"global-options"},"Global OPTIONS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"}," Defines the global configuration of Redspot runtime. It can be attached to any task. "))," "),(0,a.kt)("p",null,"To specify the connection to the Substrate network (substrate network needs to be configured in config)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx redspot test --network substrate\n")),(0,a.kt)("p",null,"To specify the level of the log to be printed, and the log level is 2 by default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx redspot test --log-level 3\n")),(0,a.kt)("p",null,"You can also set GLOBAL OPTIONS through environment variables."),(0,a.kt)("p",null,"Set the log level: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REDSPOT_LOG_LEVEL=5 npx redspot test\n")),(0,a.kt)("p",null,"Set up the network: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REDSPOT_NETWORK=substrate npx redspot test.\n")),(0,a.kt)("h3",{id:"task-options-1"},"Task OPTIONS"),(0,a.kt)("p",null,"Usually each task will provide its own parameter configuration.\nFor example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx redspot compile --help\nRedspot version 0.11.4\n\nUsage: redspot [GLOBAL OPTIONS] compile --docker <BOOLEAN> --quiet <BOOLEAN> [...sourcePattern]\n\nOPTIONS:\n\n  --docker  Compiling with docker \n  --quiet   Check for document changes \n\nPOSITIONAL ARGUMENTS:\n\n  sourcePattern A glob string that is matched against (default: [])\n\ncompile: Compiles the entire project, building all artifacts\n\nFor global options help run: redspot help\n\n")),(0,a.kt)("p",null,"For compiling commands, you can pass in the path of the contract to specify the contract that needs to be compiled, for example,",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot compile examples/erc20"),"."),(0,a.kt)("h2",{id:"clean"},(0,a.kt)("inlineCode",{parentName:"h2"},"clean")),(0,a.kt)("p",null,"Clears the cache and deletes all artifacts generated by Redspot"),(0,a.kt)("h2",{id:"compile"},(0,a.kt)("inlineCode",{parentName:"h2"},"compile")),(0,a.kt)("p",null,"To compile your contracts in your Redspot project, use the built-in compile task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"redspot [GLOBAL OPTIONS] compile --docker <BOOLEAN> --quiet <BOOLEAN> [...sourcePattern]\n")),(0,a.kt)("p",null,"Currently supports the compilation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},"ink")," contracts and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/solang"},"Solang")," contracts. When compiling the ink contract, please make sure you have installed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"cargo-contract"),". When compiling the Solang contract, please make sure you have installed ",(0,a.kt)("a",{parentName:"p",href:"https://solang.readthedocs.io/en/latest/installing.html#building-solang-from-crates-io"},"Solang"),". In redspot.config.ts, you can configure compilation options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n        ...\n        contract: {\n    ink: {\n      toolchain: 'nightly', // set the cargo-contract compile-time toolchain\n      sources: ['contracts/**/*'] // Configure the directory to find the contract files\n    },\n    solang: {\n      sources: ['contracts/**/*.sol'] // Configure the directory to find contract files\n    }\n  },\n  paths: {\n          ...\n    artifacts: 'artifacts' // specify the directory where the contract compilation products are stored\n    ...\n  }\n  ...\n}\n")),(0,a.kt)("p",null,"The compile command receives the sourcePattern parameter, which can override the sources in the configuration file, for example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot compile examples/erc20"),":It will only find contracts in the examples/erc20 directory."),(0,a.kt)("p",null,"Once the compilation is complete, the files generated after compilation can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts")," directory. There are usually two kinds of format,",(0,a.kt)("inlineCode",{parentName:"p"},"[ContractName].contract"),"and",(0,a.kt)("inlineCode",{parentName:"p"},"[ContractName].json"),". The only difference between them is that Wasm is not included in ",(0,a.kt)("inlineCode",{parentName:"p"},".json"),", and the size is smaller. You can also use your own tools to compile, and then copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"[ContractName].contract")," file to the artifacts directory. This will not affect the use of other functions."),(0,a.kt)("h3",{id:"compile-task-options"},"compile task options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--docker <BOOLEAN>"),": boolean to indicate compiling with docker. For details, please refer ",(0,a.kt)("a",{parentName:"p",href:"./docker"},"Docker"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"--quiet <BOOLEAN>"),": if there is no change to contract code or redspot config, the compilation will be skipped\n",(0,a.kt)("inlineCode",{parentName:"p"},"sourcePattern"),": A glob string that is matched against, so you can specify which contract to compile. For example, "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx redspot compile erc20\n")),(0,a.kt)("p",null,"will only compile the contract code under ",(0,a.kt)("inlineCode",{parentName:"p"},"erc20")," directory.\nWith no ",(0,a.kt)("inlineCode",{parentName:"p"},"sourcePattern")," sepecified, it will compile the code under ",(0,a.kt)("inlineCode",{parentName:"p"},"contracts")," directory  "),(0,a.kt)("h2",{id:"console"},(0,a.kt)("inlineCode",{parentName:"h2"},"console")),(0,a.kt)("p",null,"Opens a redspot console. For details, please refer ",(0,a.kt)("a",{parentName:"p",href:"./console"},"Redspot Console")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx redspot console\n")),(0,a.kt)("h2",{id:"explorer"},(0,a.kt)("inlineCode",{parentName:"h2"},"explorer")),(0,a.kt)("p",null,"Start redspot explorer. For details, please refer ",(0,a.kt)("a",{parentName:"p",href:"./explorer"},"Redspot Explorer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot explorer\n")),(0,a.kt)("h2",{id:"help"},(0,a.kt)("inlineCode",{parentName:"h2"},"help")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot --help\nRedspot version 0.11.4\n\nUsage: redspot [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]\n\nGLOBAL OPTIONS:\n\n  --config              A Redspot config file. \n  --help                Shows this message, or a task's help if its name is provided \n  --log-level           Set log levels 1-5 (default: \"2\")\n  --max-memory          The maximum amount of memory that Redspot can use. \n  --network             The network to connect to. \n  --show-stack-traces   Show stack traces. \n  --tsconfig            Reserved redspot argument -- Has no effect. \n  --verbose             Enables Redspot verbose logging \n  --version             Shows redspot's version. \n\n\nAVAILABLE TASKS:\n\n  check     Check whatever you need\n  clean     Clears the cache and deletes all artifacts\n  compile   Compiles the entire project, building all artifacts\n  console   Opens a redspot console\n  explorer  Start redspot explorer\n  help      Prints this message\n  run       Runs a user-defined script after compiling the project\n  test      Runs mocha tests\n  testnet   Running the test network\n\nTo get help for a specific task run: npx redspot help [task]\n")),(0,a.kt)("h2",{id:"testnet"},(0,a.kt)("inlineCode",{parentName:"h2"},"testnet")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Testnet")," task will execute command in docker env. Please refer ",(0,a.kt)("a",{parentName:"p",href:"./docker"},"Docker")," for details."),(0,a.kt)("h2",{id:"test"},(0,a.kt)("inlineCode",{parentName:"h2"},"test")),(0,a.kt)("p",null,"Automated testing helps developers avoid repeating tasks. Test requires the blockchain node to be setup properly. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../intro/installation"},"Installation")," to learn how to setup the blockchain test node.\nThe test can be configured through ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{\n        defaultNetwork: \"development\", // the default network to connect to\n        ...\n        networks: {\n                        development: {\n          endpoint: \"ws://127.0.0.1:9944\", // url of the network to connect to (websocket)\n          types: {}, // Type definitions to be passed to polkadotjs for use\n          accounts: [\"//Alice\", \"tomato mad peasant blush poem obtain inspire distance attitude mercy return marriage\"] // The account to use for the signature, default is ['// Alice', '//Bob', '//Charlie', '//Dave', '//Eve', '//Ferdie']\n          gasLimit: \"400000000000\", // default gaslimit\n      },\n        }\n        path: {\n                tests: 'tests', // directory to find test files\n        },\n        mocha: {\n                timeout: 60000, // timeout for mocha tests\n                ...\n        }\n        ...\n}\n")),(0,a.kt)("p",null,"You can also configure the test blockchain network through Environmental variable in command, for example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"REDSPOT_NETWORK=development npx redpost test")),(0,a.kt)("h3",{id:"test-task-options"},"test task options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-compile"),": indicate running ",(0,a.kt)("inlineCode",{parentName:"p"},"compile")," task before running this task.For example "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot test --no-compile\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--source-pattern"),":\tYou can also specify which test file to be executed, For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot test ./tests/[filename].ts\n")),(0,a.kt)("h3",{id:"writing-your-test-file"},"writing your test file"),(0,a.kt)("p",null,"Test uses mocha as the test framework by default. You can configure mocha options in the redspot.config.ts file. For all supported options, see ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/api/mocha"},"mocha"),"."),(0,a.kt)("p",null,"Here is sample test file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import BN from 'bn.js';\nimport { expect } from 'chai';\nimport { patract, network, artifacts } from 'redspot';\nconst { getContractFactory, getRandomSigner } = patract;\nconst { api, getSigners } = network;\ndescribe('ERC20', () => {\n  after(() => {\n    return api.disconnect();\n  });\n  async function setup() {\n    const one = new BN(10).pow(new BN(api.registry.chainDecimals[0]));\n    const signers = await getSigners();\n    const Alice = signers[0];\n    const sender = Alice;\n    const contractFactory = await getContractFactory('erc20', sender);\n    const contract = await contractFactory.deploy('new', '1000');\n    const abi = artifacts.readArtifact('erc20');\n    const receiver = await getRandomSigner();\n    return { sender, contractFactory, contract, abi, receiver, Alice, one };\n  }\n  it('Assigns initial balance', async () => {\n    const { contract, sender } = await setup();\n    const result = await contract.query.balanceOf(sender.address);\n    expect(result.output).to.equal(1000);\n  });\n  it('Transfer emits event', async () => {\n    const { contract, sender, receiver } = await setup();\n    await expect(contract.tx.transfer(receiver.address, 7))\n      .to.emit(contract, 'Transfer')\n      .withArgs(sender.address, receiver.address, 7);\n  });\n  it('Can not transfer above the amount', async () => {\n    const { contract, receiver } = await setup();\n    await expect(contract.tx.transfer(receiver.address, 1007)).to.not.emit(\n      contract,\n      'Transfer'\n    );\n  });\n  it('Can not transfer from empty account', async () => {\n    const { contract, Alice, one, sender } = await setup();\n    const emptyAccount = await getRandomSigner(Alice, one.muln(10000));\n    await expect(\n      contract.tx.transfer(sender.address, 7, {\n        signer: emptyAccount\n      })\n    ).to.not.emit(contract, 'Transfer');\n  });\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  async function setup() {\n  }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"setup")," function creates random account called ",(0,a.kt)("inlineCode",{parentName:"li"},"Alice")," and assigned fixed balance to this account. This account will then be used to perform various tests to ensure that the test results are the same every time."),(0,a.kt)("li",{parentName:"ul"},"In this test file, two Redspot plugins are used\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"@redspot/patract")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@redspot/chai"),". For details, please refer ",(0,a.kt)("a",{parentName:"li",href:"/substrate-contracts-book/en/redspot/plugin/plugin"},"Plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx redspot test")," wraps to ",(0,a.kt)("inlineCode",{parentName:"li"},"mocha")," to perform the test. You can directly ",(0,a.kt)("inlineCode",{parentName:"li"},"mocha")," command to run. For example, you can run test:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"TS_NODE_TRANSPILE_ONLY=true mocha -r ts-node/register tests/erc20.test.ts --timeout 60000\n")),(0,a.kt)("p",null,"** TO Use ts-node to compile and run typescript code, you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"-r ts-node/register"),".",(0,a.kt)("inlineCode",{parentName:"p"},"TS_NODE_TRANSPILE_ONLY=true"),"Sets ts-node to ignore typescript type errors when running."),(0,a.kt)("h2",{id:"run"},(0,a.kt)("inlineCode",{parentName:"h2"},"run")),(0,a.kt)("p",null,"The Run command can be used to run any typescript file. Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-compile")," can avoid automatically running the compilation command ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot run --no-compile"),"."),(0,a.kt)("p",null,"Like Test, it is just a command wraps around ",(0,a.kt)("inlineCode",{parentName:"p"},"TS_NODE_TRANSPILE_ONLY=true node -r ts-node/register [filepath]"),"."),(0,a.kt)("p",null,"We used ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot run")," for deployment in ",(0,a.kt)("a",{parentName:"p",href:"../intro/quick-start"},"Quick Start"),"\nYou can use Run to run the deployment script, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { network, patract } from 'redspot';\nconst { getContractFactory } = patract;\nconst { getSigners, api } = network;\nasync function run() {\n  console.log('deploy erc20');\n  await api.isReady;\n  console.log('deploy erc201');\n  const signers = await getSigners();\n  const signer = signers[0];\n  const contractFactory = await getContractFactory('erc20', signer);\n  const contract = await contractFactory.deploy('new', '1000000', {\n    gasLimit: '200000000000',\n    value: '10000000000000000'\n  });\n  console.log(\n    'Deploy successfully. The contract address: ',\n    contract.address.toString()\n  );\n  api.disconnect();\n}\nrun().catch(err => {\n  console.log(err);\n});\n")),(0,a.kt)("p",null,"This deployment script deploys the contract to targetted network and returns the contract address that holds the ",(0,a.kt)("inlineCode",{parentName:"p"},"erc20")," contract."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/substrate-contracts-book/en/redspot/plugin/redspot-patract"},"@redspot/patract")," plug-in is used here as ",(0,a.kt)("inlineCode",{parentName:"p"},"getContractFactory"),"."),(0,a.kt)("h2",{id:"console-1"},(0,a.kt)("inlineCode",{parentName:"h2"},"console")),(0,a.kt)("p",null,"You can start a Node ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn/how-to-use-the-nodejs-repl"},"REPL")," console by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot console")," command. It has a built-in Redspot Runtime Environment, where you can access plug-ins, configurations, and tasks provided by Redspot. For details, please refer ",(0,a.kt)("inlineCode",{parentName:"p"},"Console"),"(./console)"))}u.isMDXComponent=!0}}]);