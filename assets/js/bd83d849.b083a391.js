"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7945],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1387:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={},c="Europa Overview",l={unversionedId:"europa/intro/overview",id:"europa/intro/overview",isDocsHomePage:!1,title:"Europa Overview",description:"Europa is a private test blockchain based on Substrate to help Runtime Pallet and pallet-contracts development. It modifies the native Substrate chain by removing unnecessary components such as Wasm execution and p2p while adding some great features to help developers get more insights of the contract execution details",source:"@site/docs/europa/intro/overview.md",sourceDirName:"europa/intro",slug:"/europa/intro/overview",permalink:"/substrate-contracts-book/europa/intro/overview",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/europa/intro/overview.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Redspot v0.4",permalink:"/substrate-contracts-book/redspot/reports/v0.4Report"},next:{title:"Europa UI",permalink:"/substrate-contracts-book/europa/intro/europa-ui"}},u=[{value:"How does it work",id:"how-does-it-work",children:[]},{value:"Why use it?",id:"why-use-it",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"europa-overview"},"Europa Overview"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{height:"200",src:"https://patract.io/images/products/Europa.svg"})),(0,a.kt)("p",null,"Europa is a private test blockchain based on Substrate to help Runtime Pallet and ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," development. It modifies the native Substrate chain by removing unnecessary components such as Wasm execution and p2p while adding some great features to help developers get more insights of the contract execution details"),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,a.kt)("p",null,"Europa runs as standalone daemon to serve JSON-RPC and Websocket requests. By default, it only mines a block every time it receive extrinsics. Extrinsic, by definition, means state changes that come from the outside the blockchain node itself. For example, a transaction is an extrinsic. Europa is a fork of substrate blockchain with handy modifications, so theoretically, runtime pallets and contracts developed through Europa will work on all substrate based chains as well.\nCheck ",(0,a.kt)("a",{parentName:"p",href:"/substrate-contracts-book/europa/guides/architecture"},"Architectures")," for more insights."),(0,a.kt)("h2",{id:"why-use-it"},"Why use it?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Europa is an implementation of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate"},"substrate"),", while Substrate is a modular framework that enables developers to create purpose-built blockchains by composing custom or pre-built components. For example, Polkadot, Kusama and other parachains are all based on substrate."),(0,a.kt)("li",{parentName:"ol"},"Producing a block only when receiving new extrinsics. Developers won't have to wait for block production or deal with redundent blocks."),(0,a.kt)("li",{parentName:"ol"},"Removing all wasm execution, only native runtime is kept for execution. By default, substrate support both wasm execution and native execution. Native execution is prprioritized to be used but wasm execution brings hard fork to chain without updating the node software. However, wasm execution makes the code harder to debug."),(0,a.kt)("li",{parentName:"ol"},"Additional database entry called ",(0,a.kt)("inlineCode",{parentName:"li"},"state-kv")," to record the state changes. Developers can use RPC calls to fetch those state changes. ",(0,a.kt)("inlineCode",{parentName:"li"},"state-kv")," can also be feteched through cli ",(0,a.kt)("inlineCode",{parentName:"li"},"europa state-kv <HASH or NUMBER>")),(0,a.kt)("li",{parentName:"ol"},"Custom RPC calls:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"europa_forwardToHeight"),": forward the blockheight to certain block height with empty blocks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"europa_backwardToHeight"),": revert the blockchain back to certain heights and remove states of reverted blocks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"europa_modifiedStateKvs"),": retrive the cached state changes"))),(0,a.kt)("li",{parentName:"ol"},"Allow developers to swtich between multiple workspace for better dev environment isolation."),(0,a.kt)("li",{parentName:"ol"},"Europa also ships with Europa UI and compiled binary release.")))}d.isMDXComponent=!0}}]);