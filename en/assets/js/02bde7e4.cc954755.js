"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[842],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3339:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},c="Europa UI",s={unversionedId:"europa/intro/europa-ui",id:"europa/intro/europa-ui",isDocsHomePage:!1,title:"Europa UI",description:"Europa ships with a powerful Graphic User Interface that helps user better understand the node and contract execution without spending too much time learning the configs and commands.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/intro/europa-ui.md",sourceDirName:"europa/intro",slug:"/europa/intro/europa-ui",permalink:"/substrate-contracts-book/en/europa/intro/europa-ui",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/europa/intro/europa-ui.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Europa Overview",permalink:"/substrate-contracts-book/en/europa/intro/overview"},next:{title:"Europa CLI",permalink:"/substrate-contracts-book/en/europa/intro/europa-cli"}},p=[{value:"Installation",id:"installation",children:[{value:"Download Binary Releases",id:"download-binary-releases",children:[]}]},{value:"Start the Europa node",id:"start-the-europa-node",children:[]},{value:"Configure Europa",id:"configure-europa",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Explorer",id:"explorer",children:[]},{value:"Accounts",id:"accounts",children:[]},{value:"Contracts",id:"contracts",children:[{value:"Codes",id:"codes",children:[]},{value:"Instances",id:"instances",children:[]}]},{value:"Extrinsic",id:"extrinsic",children:[{value:"Env Trace",id:"env-trace",children:[]},{value:"Wasm Backtrace",id:"wasm-backtrace",children:[]},{value:"Cross-Contract Call",id:"cross-contract-call",children:[]},{value:"State",id:"state",children:[]}]},{value:"Developer",id:"developer",children:[]}],u={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"europa-ui"},"Europa UI"),(0,o.kt)("p",null,"Europa ships with a powerful Graphic User Interface that helps user better understand the node and contract execution without spending too much time learning the configs and commands."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"download-binary-releases"},"Download Binary Releases"),(0,o.kt)("p",null,"Detailed release information can be found here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/europa-ui/releases/tag/v0.3.32"},"Release v0.3.32"),".\nCurrently, 3 operating systems are supportd:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows")," 10 (21H1 and above) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/europa-ui/releases/download/v0.3.32/europa-ui-v0.3.32-x86_64-darwin.dmg"},"europa-ui-v0.3.32-x86_64-darwin.dmg")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MacOS")," (10.15.7 and above) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/europa-ui/releases/download/v0.3.32/europa-ui-v0.3.32-x86_64-linux.AppImage"},"europa-ui-v0.3.32-x86_64-linux.AppImage"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"MacOS doesn't support M1, but you can try to use Rosetta to run the binary package of macOS. We do not guarantee all compatibility."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ubuntu")," (20.04 and above) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/europa-ui/releases/download/v0.3.32/europa-ui-v0.3.30-x86_64-win.exe"},"europa-ui-v0.3.32-x86_64-win.exe"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"}," For Ubuntu, we only guarantee Ubuntu 20.04 and above to work. Europa UI won't run on Ubuntu 18.04 and below due to the compatibility of glibc.*")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE")," "),(0,o.kt)("p",null,"ink! Stabilize ",(0,o.kt)("inlineCode",{parentName:"p"},"seal_debug_message")," after pr ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/commit/fdae16d7a9384ae4d475b99a7d86f72e1927e665"},"paritytech/ink#902"),". Thus, if use the ink! which after this commit, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," should support stable seal_debug_message either. "),(0,o.kt)("p",null,"To use ink! supports ",(0,o.kt)("inlineCode",{parentName:"p"},"seal_debug_message"),", making sure running Europa >= v0.3.32 or node will report ",(0,o.kt)("inlineCode",{parentName:"p"},"Error: Other"),". Otherwise, use Europa <= v0.3.30"),(0,o.kt)("h2",{id:"start-the-europa-node"},"Start the Europa node"),(0,o.kt)("h2",{id:"configure-europa"},"Configure Europa"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2844215/126153819-a83a2763-ccce-4363-ba6d-6d9be4b27e39.png",alt:"image"})),(0,o.kt)("p",null,"This is the entry where you can set all the configurations for Europa node."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database Path"),": Sets which database to load. Each database will have different block states."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Workspace"),": Sets the subdirectory of database. You can have multiple workspace for a single database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTTP Port"),": Set the RPC through http protocal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WS Port"),": Set the RPC through websocket protocal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"External Endpoint"),": Connect to another Europa instance through Websocket"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redspot Projects"),": Choose to register the Redspot Project path in the startup configuration item, so that starting Europa will be associated with the compiled contract under the Redspot project.")),(0,o.kt)("h2",{id:"tabs"},"Tabs"),(0,o.kt)("p",null,"Once you finished config, the Europa node will be started automatically. On the top left, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2261")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(7290).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contracts"),": Check the contracts deployed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explorer"),": Blockchain explorer, allow users to revert and forward blocks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accounts"),": Check existent addresses "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blocks"),": Check existent blocks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extrinsics"),": check extrinsics"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Events"),": check emitted events"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developer"),": check chain states, send transaction, make rpc calls, check Europa Cli logs")),(0,o.kt)("h2",{id:"explorer"},"Explorer"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(5596).Z})),(0,o.kt)("p",null,"This page displays the mined blocks."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Go to Block"),": Generate blocks to desinated height")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Back to Block"),": Revert the blockchain to desingated height and remove corresponding states in database."))),(0,o.kt)("h2",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(4226).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add or delete accounts"),(0,o.kt)("li",{parentName:"ul"},"Transfer Balances"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Address")," to check related ",(0,o.kt)("inlineCode",{parentName:"li"},"Extrinsics"))),(0,o.kt)("h2",{id:"contracts"},"Contracts"),(0,o.kt)("h3",{id:"codes"},"Codes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(4372).Z})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload& deploy contract")," button allows users to upload and deploy contract in ",(0,o.kt)("inlineCode",{parentName:"p"},"**.format"),"\nYou can also deploy codes by other two methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy code through ",(0,o.kt)("strong",{parentName:"li"},"Redspot")," or other deployment tool through Europa RPC"),(0,o.kt)("li",{parentName:"ul"},"Setup the Redspot Project redo by uploading ",(0,o.kt)("inlineCode",{parentName:"li"},"redspot.config.ts")," file")),(0,o.kt)("p",null,"After successful deployment, you can check the deployed contract by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Uploaded At Extrinsic")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(6059).Z})),(0,o.kt)("h3",{id:"instances"},"Instances"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(797).Z})),(0,o.kt)("p",null,"The instance tab will display all existing contract instances. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," will link to the contract page where you can check related functions, extrinsics and events."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(7771).Z})),(0,o.kt)("p",null,"Apart from normal ",(0,o.kt)("inlineCode",{parentName:"p"},"Read")," to call the contract function , Europa-UI also allows the user to ",(0,o.kt)("inlineCode",{parentName:"p"},"Call with Trace")," which will display the blockchain state changes for better debugging and testing purposes."),(0,o.kt)("h2",{id:"extrinsic"},"Extrinsic"),(0,o.kt)("p",null,"Europa-UI focuses on revealing more insights during contract developement. When entering a page of ",(0,o.kt)("inlineCode",{parentName:"p"},"Extrinsic")," for method under ",(0,o.kt)("inlineCode",{parentName:"p"},"contract"),"."),(0,o.kt)("h3",{id:"env-trace"},"Env Trace"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(2395).Z})),(0,o.kt)("p",null,"Europa-UI parses all input data for the extrinsic and display them under the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," row. Aside from common fields for an extrinsic, Europa-UI also provide ",(0,o.kt)("inlineCode",{parentName:"p"},"Env Trace")," which elaborates how contract executes in a lower level."),(0,o.kt)("p",null,"If contract execution contains an error, the error will be traped. You can check the Wasm backtrace message of Wasm Error by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"More Details"),"."),(0,o.kt)("h3",{id:"wasm-backtrace"},"Wasm Backtrace"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(398).Z}),"\n",(0,o.kt)("img",{alt:"image",src:a(36).Z})),(0,o.kt)("h3",{id:"cross-contract-call"},"Cross-Contract Call"),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Calling the Function of Another Contract"),', Europa will "indent" the contract respectively to better demostrate the hierarchy. '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(7750).Z})),(0,o.kt)("p",null,'As shown in the figure above, when calling contract "5EQLt" in the first row, contract "5EQLt" then calls the "5D1cq" contract and the "5FdGb" contract separately through cross-contract calls. The ',(0,o.kt)("inlineCode",{parentName:"p"},"erc20")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"miner_erc20")," contract are called in the ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," contract."),(0,o.kt)("h3",{id:"state"},"State"),(0,o.kt)("p",null,"This page records the state changes caused by the extrinsic showd in the same page."),(0,o.kt)("p",null,"The state changes have 6 actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Put: A state has been modified"),(0,o.kt)("li",{parentName:"ul"},"PutChild: A state under a certain sub-tree (sub trie) has been modified, where child_id refers to the index of this sub-tree"),(0,o.kt)("li",{parentName:"ul"},"KillChild: Remove all storage under a certain subtree, which is more common in the case of contract destruction"),(0,o.kt)("li",{parentName:"ul"},"ClearPrefix: delete all the states under the key matching the specified prefix"),(0,o.kt)("li",{parentName:"ul"},"ClearChildPrefix: Delete the state under all keys matching the specified prefix under a certain subtree"),(0,o.kt)("li",{parentName:"ul"},"Append: Append new content to the state under a key, mostly used to add new Event data.")),(0,o.kt)("p",null,"Among those 6 actions, if you only care about the storage changes made by contract execution, you only need to track PutChild, KillChild, and ClearChildPrefix."),(0,o.kt)("h2",{id:"developer"},"Developer"),(0,o.kt)("p",null,"The developer page aims to replace cli by allowing developer to check chain state, send extrinsic, make rpc calls and check the console logs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(2872).Z})))}d.isMDXComponent=!0},7750:function(e,t,a){t.Z=a.p+"assets/images/contract_call_contract-2b59fc086a1b14cafcc8c34418a03657.png"},36:function(e,t,a){t.Z=a.p+"assets/images/contract_error_message-95d0b644110e00337767fc98ec53728a.png"},2395:function(e,t,a){t.Z=a.p+"assets/images/contract_extrinsic-c042d1b2e82e1ba50570ddbda8bb8560.png"},398:function(e,t,a){t.Z=a.p+"assets/images/contract_wasmi-b4e25fa316de7da3ee6491dd1df07ac2.png"},6059:function(e,t,a){t.Z=a.p+"assets/images/deployed_contract-e21ec4933d5943b23c8162bff4301436.png"},7290:function(e,t,a){t.Z=a.p+"assets/images/europa-ui-6450cba5f2fbf67c85878fb311a2d27c.png"},4226:function(e,t,a){t.Z=a.p+"assets/images/europa_accounts-a329bee06a33243453115435e6cd6752.png"},4372:function(e,t,a){t.Z=a.p+"assets/images/europa_contracts-5cb2cf67c20dc5a7fb61c29120031e05.png"},2872:function(e,t,a){t.Z=a.p+"assets/images/europa_developer-6a41e64d047bba80e600f0a689a8e510.png"},7771:function(e,t,a){t.Z=a.p+"assets/images/europa_instance_function-dee16e0897fea8664b6d836c3a3ac558.png"},797:function(e,t,a){t.Z=a.p+"assets/images/europa_instances-5d8eab7ec4e4898247d11ff386a7e764.png"},5596:function(e,t,a){t.Z=a.p+"assets/images/explorer-d5da383b6a92d97125f9f0079423cc98.png"}}]);