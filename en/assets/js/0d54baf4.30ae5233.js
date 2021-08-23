"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1401],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,p(p({ref:t},l),{},{components:n})):o.createElement(m,p({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<r;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),p=["components"],s={},i="Common problem",c={unversionedId:"redspot/q-and-a",id:"redspot/q-and-a",isDocsHomePage:!1,title:"Common problem",description:"How to upgrade Redspot\uff1f",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/q-and-a.md",sourceDirName:"redspot",slug:"/redspot/q-and-a",permalink:"/substrate-contracts-book/en/redspot/q-and-a",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/q-and-a.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redspot Explorer",permalink:"/substrate-contracts-book/en/redspot/guides/explorer"},next:{title:"Plug-in",permalink:"/substrate-contracts-book/en/redspot/plugin/plugin"}},l=[{value:"How to upgrade Redspot\uff1f",id:"how-to-upgrade-redspot\uff1f",children:[]},{value:"How to specify the version of @polkadot/api and @polkadot/api-contract?",id:"how-to-specify-the-version-of-polkadotapi-and-polkadotapi-contract",children:[]},{value:"How to access the instance of @polkadot/api in redspot?",id:"how-to-access-the-instance-of-polkadotapi-in-redspot",children:[]},{value:"How to specify the types and RPC of chain in <code>redspot.config.ts</code>?",id:"how-to-specify-the-types-and-rpc-of-chain-in-redspotconfigts",children:[]},{value:"What should I do if I cannot call the contract when using erc20-trait?**",id:"what-should-i-do-if-i-cannot-call-the-contract-when-using-erc20-trait",children:[]},{value:"How to ensure the security of the online private key and avoid uploading to Github?",id:"how-to-ensure-the-security-of-the-online-private-key-and-avoid-uploading-to-github",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-problem"},"Common problem"),(0,r.kt)("h2",{id:"how-to-upgrade-redspot\uff1f"},"How to upgrade Redspot\uff1f"),(0,r.kt)("p",null,"Redspot is just a normal npm package, and the upgrade method is the same as other npm packages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm upgrade"),"\uff1aupgrade all dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm upgrade redspot"),"\uff1a Only upgrade Redspot.")),(0,r.kt)("p",null,"If you are using yarn, you can execute the following command to upgrade all dependencies to the stable version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade-interactive --latest\n")),(0,r.kt)("p",null,"If you want to use the latest beta version, it is recommended to manually change the version number in package.json and then reinstall the dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "erc20",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@redspot/chai": "^0.10.2-1",\n    "@redspot/gas-reporter": "^0.10.2-1",\n    "@redspot/patract": "^0.10.2-1",\n    "@types/chai": "^4.2.14",\n    "@types/mocha": "^8.0.3",\n    "chai": "^4.2.0",\n    "redspot": "^0.10.2-1",\n    "typescript": "^4.0.2"\n  },\n  "scripts": {\n    "build": "npx redspot compile",\n    "test": "npx redspot test"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," When upgrading, it is best to upgrade all plug-ins to the latest version at the same time to avoid dependency problems."),(0,r.kt)("h2",{id:"how-to-specify-the-version-of-polkadotapi-and-polkadotapi-contract"},"How to specify the version of @polkadot/api and @polkadot/api-contract?"),(0,r.kt)("p",null,"Redspot internally relies on @polkadot/api and @polkadot/api-contract. If you need to upgrade separately, you can add resolutions in package.json."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'/// package.json\n...\n"resolutions": {\n  "@polkadot/api": "4.6.3",\n  "@polkadot/api-contract": "4.6.3",\n},\n...\n')),(0,r.kt)("p",null,"In this way, you can force the specified version. See ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/package-json/#toc-resolutions"},"package.json")," for details. However, the compatibility of the upgraded @polkadot/api and @polkadot/contract cannot be guaranteed."),(0,r.kt)("h2",{id:"how-to-access-the-instance-of-polkadotapi-in-redspot"},"How to access the instance of @polkadot/api in redspot?"),(0,r.kt)("p",null,"You can access it by ",(0,r.kt)("a",{parentName:"p",href:"./guides/runtime-environment#network"},"network.api"),"."),(0,r.kt)("h2",{id:"how-to-specify-the-types-and-rpc-of-chain-in-redspotconfigts"},"How to specify the types and RPC of chain in ",(0,r.kt)("inlineCode",{parentName:"h2"},"redspot.config.ts"),"?"),(0,r.kt)("p",null,"Part of the chain can be automatically configured via ",(0,r.kt)("a",{parentName:"p",href:"/substrate-contracts-book/en/redspot/plugin/redspot-known-types"},"@redspot/known-types")," (RPC calls are not supported). It can also be configured manually through ",(0,r.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// redspot.config.ts\nimport { RedspotUserConfig } from 'redspot/types';\n\nexport default {\n ...\n  network: {\n    mainnet: {\n      ...\n      account: [process.env.ACCOUNT]\n      types: {\n        ...\n      },\n      rpc: {\n        europa: {\n          forwardToHeight: {\n            description: '',\n            params: [\n              {\n                name: 'height',\n                type: 'u32'\n              }\n            ],\n            type: 'Bytes'\n          },\n        }\n        ...\n      }\n      ...\n    }\n  }\n} as RedspotUserConfig;\n")),(0,r.kt)("h2",{id:"what-should-i-do-if-i-cannot-call-the-contract-when-using-erc20-trait"},"What should I do if I cannot call the contract when using erc20-trait?**"),(0,r.kt)("p",null,"Because erc20-trait has a namespace, you must also add namespace when calling. The example is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// erc20\ncontractFactory.deploy("new", "1000000")\n// erc20-trait\ncontractFactory.deploy("baseErc20,new", "1000000")\n// erc20\ncontract.query.balanceOf(someaddress)\n// erc20-trait\ncontract.query["baseErc20,balanceOf"](someaddress)\n// erc20\ncontract.tx.transfer(receiver.address, 7))\n// erc20-trait\ncontract.tx["baseErc20,transfer"](receiver.address, 7))\n')),(0,r.kt)("h2",{id:"how-to-ensure-the-security-of-the-online-private-key-and-avoid-uploading-to-github"},"How to ensure the security of the online private key and avoid uploading to Github?"),(0,r.kt)("p",null,"You can use environment variables to configure account, as shown in the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// redspot.config.ts\nimport { RedspotUserConfig } from 'redspot/types';\n\nexport default {\n ...\n  network: {\n    mainnet: {\n      ...\n      account: [process.env.ACCOUNT]\n      ...\n    }\n  }\n} as RedspotUserConfig;\n")),(0,r.kt)("p",null,"Run script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'REDSPOT_NETWORK=mainnet ACCOUNT="//Alice" npx redspot run ./scripts/deploy.ts\n')),(0,r.kt)("p",null,"You can also use tools for example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},"dotenv"),". In addition, the ",(0,r.kt)("a",{parentName:"p",href:"./plugin/redspot-explorer"},"redspot-explorer")," plug-in supports signatures using polkadot extensions in the browser."))}u.isMDXComponent=!0}}]);