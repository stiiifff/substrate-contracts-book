"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[9279],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={},l="Plug-in",s={unversionedId:"redspot/plugin/plugin",id:"redspot/plugin/plugin",isDocsHomePage:!1,title:"Plug-in",description:"What",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/plugin/plugin.md",sourceDirName:"redspot/plugin",slug:"/redspot/plugin/plugin",permalink:"/substrate-contracts-book/en/redspot/plugin/plugin",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin/plugin.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Common problem",permalink:"/substrate-contracts-book/en/redspot/q-and-a"},next:{title:"@redspot_decimals plug-in",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-decimals"}},c=[{value:"What",id:"what",children:[]},{value:"Installation",id:"installation",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plug-in"},"Plug-in"),(0,a.kt)("h2",{id:"what"},"What"),(0,a.kt)("p",null,"The core functions of Redspot include Redspot runtime environment, compiling contracts, running tests and running scripts. Other functions, such as the test suite with the contract, contract interaction, access to the contract, and configuration of different chains, are all provided by the plug-in, and you can choose the plug-ins according to your needs. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The way to introduce a plug-in is very simple, add it as a dependency of npm in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", and then add it in ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),". The example is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedspotUserConfig } from 'redspot/types';\nimport '@redspot/patract'; // introduce the @redspot/patract plugin\nimport '@redspot/chai'; // import @redspot/chai plugin\nexport default {\n ...\n} as RedspotUserConfig;\n")),(0,a.kt)("p",null,"You can also manually install it, for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @redspot/chai\n")),(0,a.kt)("p",null,"Add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@redspot/chai'\n")),(0,a.kt)("p",null,"The following plug-ins are now included."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./redspot-chai"},"@redspot/chai")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./redspot-decimals"},"@redspot/decimals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./redspot-explorer"},"@redspot/explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./redspot-gas-reporter"},"@redspot/gas-reporter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./redspot-known-types"},"@redspot/known-types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./redspot-patract"},"@redspot/patract"))))}d.isMDXComponent=!0}}]);