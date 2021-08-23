"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[2941],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},p="Overview\u200b",u={unversionedId:"redspot/intro/overview",id:"redspot/intro/overview",isDocsHomePage:!1,title:"Overview\u200b",description:"Redspot is a development environment to compile, deploy, and debug wasm smart contract for substrate based chains. Redspot helps developers manage and automate the repeating steps during the process of writing smart contracts and dApps.Redspot is a development environment to compile, deploy, and debug wasm smart contract for substrate based chains. Similar to the architectures of Hardhat, Redspot is built upon Tasks and Plugins.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/intro/overview.md",sourceDirName:"redspot/intro",slug:"/redspot/intro/overview",permalink:"/substrate-contracts-book/en/redspot/intro/overview",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/intro/overview.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Solang",permalink:"/substrate-contracts-book/en/solang/introduction"},next:{title:"Setup Enviroment",permalink:"/substrate-contracts-book/en/redspot/intro/installation"}},l=[{value:"Multi Languages Support",id:"multi-languages-support",children:[]},{value:"Tasks",id:"tasks",children:[]},{value:"Plugins",id:"plugins",children:[]},{value:"More information",id:"more-information",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview\u200b"),(0,a.kt)("p",null,"Redspot is a development environment to compile, deploy, and debug wasm smart contract for substrate based chains. Redspot helps developers manage and automate the repeating steps during the process of writing smart contracts and dApps.Redspot is a development environment to compile, deploy, and debug wasm smart contract for substrate based chains. Similar to the architectures of Hardhat, Redspot is built upon Tasks and Plugins."),(0,a.kt)("h2",{id:"multi-languages-support"},"Multi Languages Support"),(0,a.kt)("p",null,"Redspot currently supports compilation of Ink! and will support Ask! in the future. "),(0,a.kt)("h2",{id:"tasks"},"Tasks"),(0,a.kt)("p",null,"Every time you run Redspot from the terminal, you are running tasks. For example, executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot compile")," command is to run the compilation task. To view the tasks currently available in the project, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot"),"  command. You can view the help information of any task by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx redspot help [task]"),"."),(0,a.kt)("h2",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Redspot installs some plug-ins by default.  As a developer, you're flexible to install any plugins, write new plugins and override existing plugins."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"Redspot developed from a hardhat fork based on the MIT protocol, and removed parts related to Ethereum on its basis, and added functions related to Substrate and pallet-contracts modules. In the near future, Redspot will build more functions based on the core of hardhat."))}d.isMDXComponent=!0}}]);