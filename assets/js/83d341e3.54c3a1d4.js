"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1168],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={},s="@redspot_known-types plug-in",l={unversionedId:"redspot/plugin/redspot-known-types",id:"redspot/plugin/redspot-known-types",isDocsHomePage:!1,title:"@redspot_known-types plug-in",description:"What",source:"@site/docs/redspot/plugin/redspot-known-types.md",sourceDirName:"redspot/plugin",slug:"/redspot/plugin/redspot-known-types",permalink:"/substrate-contracts-book/redspot/plugin/redspot-known-types",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin/redspot-known-types.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"@redspot_decimals plug-in",permalink:"/substrate-contracts-book/redspot/plugin/redspot-decimals"},next:{title:"@redspot_chai  plug-in",permalink:"/substrate-contracts-book/redspot/plugin/redspot-chai"}},c=[{value:"What",id:"what",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usages",id:"usages",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redspot_known-types-plug-in"},"@redspot_known-types plug-in"),(0,a.kt)("h2",{id:"what"},"What"),(0,a.kt)("p",null,"Redspot known types is a plug-in that can automatically add known types of chains. In polkadot, adding types is very troublesome, must be added manually, and cannot be automatically generated, and sometimes also has to deal with the compatibility of different chain versions. The appearance of the redspot known types plugin is to solve the problem of different types of chains."),(0,a.kt)("p",null,"Most chains have submitted types on polkadot apps, and all types definitions are in the npm package ",(0,a.kt)("inlineCode",{parentName:"p"},"@polkadot/apps-config"),". We will partially quote the types definitions in ",(0,a.kt)("inlineCode",{parentName:"p"},"@polkadot/apps-config"),". But",(0,a.kt)("inlineCode",{parentName:"p"},"@polkadot/apps-config")," lacks the type definition of the development environment, we will manually supplement this part. Currently supported chains are Canvas, Jupiter, Europa, Edgeware, Plasm and Clover."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn add @redspot/known-types\n")),(0,a.kt)("p",null,"Add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import "@redspot/known-types"\n')),(0,a.kt)("h2",{id:"usages"},"Usages"),(0,a.kt)("p",null,"Try to connect to the network of Canvas, Jupiter, Europa and other chains without adding additional type configuration, ",(0,a.kt)("inlineCode",{parentName:"p"},"@redspot/known-types")," will configure them automatically"))}d.isMDXComponent=!0}}]);