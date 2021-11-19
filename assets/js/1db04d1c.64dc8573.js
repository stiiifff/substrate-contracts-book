"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[4589],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],p={},i="Redspot Explorer",c={unversionedId:"redspot/guides/explorer",id:"redspot/guides/explorer",isDocsHomePage:!1,title:"Redspot Explorer",description:"Overview",source:"@site/docs/redspot/guides/explorer.md",sourceDirName:"redspot/guides",slug:"/redspot/guides/explorer",permalink:"/substrate-contracts-book/redspot/guides/explorer",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/redspot/guides/explorer.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Docker",permalink:"/substrate-contracts-book/redspot/guides/docker"},next:{title:"Common problem",permalink:"/substrate-contracts-book/redspot/q-and-a"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Quick start",id:"quick-start",children:[]}],u={toc:s};function d(e){var t=e.components,p=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redspot-explorer"},"Redspot Explorer"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Redspot also comes with explorer based on @polkadot/apps with lots of modifications and optimizations to better intergrete native code and web page. "),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Redesigned the layout and menu with more highlight on the contract module; Improved the night mode of polkadot apps, adjusted the UI, and adjusted the color scheme; Delete pages that are irrelevant for contract development. Merged the tools page."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/NS58LA9.png",alt:"img"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The explorer will use the network configured in redspot config, so users do not have to configure themself..")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The account configured in the redspot config will appear in the explorer and can be used the same way as the accounts created on the webpage.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The types configured in redspot will be adopted by explorer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The .contract file of the contract generated in the local project will be automatically uploaded to the explorer. The contracts page in the explorer will list all the contracts known to the code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When switching networks, the explorer will only display the addresses and contracts of current network.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can use polkadot{.js} extension to sign when you run tests or scripts locally.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can call ",(0,a.kt)("inlineCode",{parentName:"p"},"compile")," for local redspot project from explorer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can run redspot scripts in explorer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If there is a known code, the contract event and the parameters when sending the contract will be automatically parsed in the block details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can query all transactions of a certain contract."))),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To use redspot explorer, you need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@redspot/explorer")," plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @redspot/explorer\n")),(0,a.kt)("p",null,"Then add below in ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// ...\nimport "@redspot/explorer";\n// ...\n')),(0,a.kt)("h3",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"Run redspot explorer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx redspot explorer\n")),(0,a.kt)("p",null,"Note that when running redspot explorer, a service will be started locally to host the explorer. Also, please restart the service manually every time when ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts")," is changed."),(0,a.kt)("p",null,"Then open the default URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8011")),(0,a.kt)("p",null,"Open switch network\n",(0,a.kt)("img",{alt:"img",src:n(2073).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/fMQ7KfU.png",alt:"img"})),(0,a.kt)("p",null,"As you can see, you can select the network configured in redspot."),(0,a.kt)("p",null,"Check the accounts page, the account configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts")," will appear."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/h46cFXX.png",alt:"img"})),(0,a.kt)("p",null,"Then you can use the account in your polkadot extension to make transactions. Copy your account address in polkadot extension."),(0,a.kt)("p",null,"Then change the deploy.ts script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { network, patract } from "redspot";\n\nconst { getContractFactory } = patract;\nconst {  api } = network;\n\nasync function run() {\n  await api.isReady;\n  const signer = "<your address>";\n\n  const contractFactory = await getContractFactory("erc20", signer);\n\n  const balance = await api.query.system.account(signer);\n\n  console.log("Balance: ", balance.toHuman());\n\n  const contract = await contractFactory.deployed("new", "1000000", {\n    gasLimit: "200000000000",\n    value: "100000000000",\n  });\n\n  await contract.tx.transfer(signer, 7);\n  console.log("");\n  console.log(\n    "Deploy successfully. The contract address: ",\n    contract.address.toString()\n  );\n\n  api.disconnect();\n}\n\nrun().catch((err) => {\n  console.log(err);\n});\n\n')),(0,a.kt)("p",null,"Then run the script ",(0,a.kt)("inlineCode",{parentName:"p"},"$ npx redspot run ./scripts/deploy.ts")," to trigger the polkadot extension for signing. Check the polkadot extension in your browser (making sure the explorer page is open)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Jn9fofZ.png",alt:"img"})),(0,a.kt)("p",null,"Deploy the contract. Once the deployment is successful, check the explorer page:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/R8cEHx4.png",alt:"img"})),(0,a.kt)("p",null,"Now we can check the blockchain events emitted. We can check at the ",(0,a.kt)("inlineCode",{parentName:"p"},"contracts.instantiateWithCode")," event,it displays the details of the extrinstics."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/DlNlRZb.png",alt:"img"})),(0,a.kt)("p",null,"Check the codes page of contracts:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/EP35Biz.png",alt:"img"})),(0,a.kt)("p",null,"The code of the locally compiled contract will automatically appear here."),(0,a.kt)("p",null,"Check the contracts page of contracts: ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/5zXGtSd.png",alt:"img"})),(0,a.kt)("p",null,"The contract just deployed will appear here."),(0,a.kt)("p",null,"Then we switch to the console page, where we can run the script and compile the contract: ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/luc74qg.png",alt:"img"})),(0,a.kt)("p",null,"We click 'compile' contract and this prompt appears to indicate that the compilation was successful: ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/r5tZtUY.png",alt:"img"})),(0,a.kt)("p",null,"If the compilation time is too long, please switch to the terminal running the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot explorer")," and check the log prompt."),(0,a.kt)("p",null,"Then we click 'run' to run the script, and the console on the right will output the run log: ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/nrGW9Wc.png",alt:"img"})),(0,a.kt)("p",null,"Now that the contract is successful, let's switch to the contracts page to check:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/k2Uziom.png",alt:"img"})),(0,a.kt)("p",null,"As you can see, the newly deployed contract will appear here."),(0,a.kt)("p",null,'When we click on the extrinsics button (the blue "extrinsics" in each row in the "recent contracts" in the figure), a dialog box will pop up, showing the relevant transactions of current contract:'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/gdQo31E.png",alt:"img"})))}d.isMDXComponent=!0},2073:function(e,t,n){t.Z=n.p+"assets/images/explorer-60eff43279cca975ad788384ed65a79e.png"}}]);