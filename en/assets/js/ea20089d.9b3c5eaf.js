"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[8203],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s="Architeture",l={unversionedId:"europa/guides/architecture",id:"europa/guides/architecture",isDocsHomePage:!1,title:"Architeture",description:"Another Substrate Implementation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/guides/architecture.md",sourceDirName:"europa/guides",slug:"/europa/guides/architecture",permalink:"/substrate-contracts-book/en/europa/guides/architecture",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/europa/guides/architecture.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Europa CLI",permalink:"/substrate-contracts-book/en/europa/intro/europa-cli"},next:{title:"Contract Pallet Implementation",permalink:"/substrate-contracts-book/en/europa/guides/implementation"}},u=[{value:"Another Substrate Implementation",id:"another-substrate-implementation",children:[]},{value:"No consensus, only producing blocks on need",id:"no-consensus-only-producing-blocks-on-need",children:[]},{value:"Removed Wasm for Runtime",id:"removed-wasm-for-runtime",children:[]},{value:"State KV to trace block state changes",id:"state-kv-to-trace-block-state-changes",children:[]},{value:"<code>pallet-contracts</code> Modification",id:"pallet-contracts-modification",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architeture"},"Architeture"),(0,a.kt)("h2",{id:"another-substrate-implementation"},"Another Substrate Implementation"),(0,a.kt)("p",null,"Europa sandbox framework is another implementation for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/client"},"Substrate client"),".That means all substrate runtime could integrate with Europa client directly."),(0,a.kt)("h2",{id:"no-consensus-only-producing-blocks-on-need"},"No consensus, only producing blocks on need"),(0,a.kt)("p",null,"Europa focuses on contract development regardless which consensus protocol is running, so that we remove all components about consensus. Thus, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"sc-consensus-manual-seal")," crate to produce block. This crate is well abstracted with no need to fork. We just modify the part of commands stream for ",(0,a.kt)("inlineCode",{parentName:"p"},"manual-seal"),". The async stream could receive information from different place (e.g. transaction pool, RPC and others) to drive seal-engine to produce blocks only when receiving extrinsics."),(0,a.kt)("h2",{id:"removed-wasm-for-runtime"},"Removed Wasm for Runtime"),(0,a.kt)("p",null,"As a sandbox designs for debugging during contract development, we remove all Wasm components as Wasm may cause many problems during debugging. Since we need to extend many features for low level libraries, if the runtime is compiled to Wasm for execution, we might encounter many unexpected problems. Also, as a local sandbox, we do not need the features brought by Wasm runtime such as non hard fork software update."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Europa runtime should remove ",(0,a.kt)("inlineCode",{parentName:"em"},"build.rs")," in runtime crate and remove ",(0,a.kt)("inlineCode",{parentName:"em"},"[build-dependencies]")," in runtime crate (cargo.toml file).")),(0,a.kt)("h2",{id:"state-kv-to-trace-block-state-changes"},"State KV to trace block state changes"),(0,a.kt)("p",null,"In Substrate, we can check the current blockchain states but not the state modifications. However, the developers are concerned mostly about the state changes when new blocks get mined. So that, they can check whether the changes match their expectations for debugging."),(0,a.kt)("p",null,"Thus, in europa sandbox, we store the mapping of blockhash and state kvs in the state-kv database, so that developers could export the state changes to look up the details."),(0,a.kt)("h2",{id:"pallet-contracts-modification"},(0,a.kt)("inlineCode",{parentName:"h2"},"pallet-contracts")," Modification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modification on the ",(0,a.kt)("inlineCode",{parentName:"li"},"pallet contracts")," layer: By adding trace during the execution of the contract in ",(0,a.kt)("inlineCode",{parentName:"li"},"pallet contracts"),", the information in the contract layer is recorded, and the calling structure of the contract is recorded. The error message during Wasm execution is also enhanced."),(0,a.kt)("li",{parentName:"ul"},"Modification on the ",(0,a.kt)("inlineCode",{parentName:"li"},"wasmi")," layer: We have provided the backtrace function of recording wasm execution for ",(0,a.kt)("inlineCode",{parentName:"li"},"wasmi"),", and provided support for ",(0,a.kt)("inlineCode",{parentName:"li"},"parity-wasm"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"pwasm-utils"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo-contract")," during wasm processing of the contract contains the function of the name section."),(0,a.kt)("li",{parentName:"ul"},"Contract logging function: Use the function of ",(0,a.kt)("inlineCode",{parentName:"li"},"ChainExtensions")," to realize the library for printing the ",(0,a.kt)("inlineCode",{parentName:"li"},"log")," in the contract. Check ",(0,a.kt)("a",{parentName:"li",href:"/substrate-contracts-book/en/europa/extensions/custom-chain-extensions"},"Custom ChainExtensions")," for more details.")),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"/substrate-contracts-book/en/europa/guides/implementation"},"Contract Pallet Implementation")," for implemention details."))}d.isMDXComponent=!0}}]);