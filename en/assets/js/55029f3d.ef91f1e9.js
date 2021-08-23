"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[7205],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9978:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],s={},i="@redspot_gas-reporter plug-in",c={unversionedId:"redspot/plugin/redspot-gas-reporter",id:"redspot/plugin/redspot-gas-reporter",isDocsHomePage:!1,title:"@redspot_gas-reporter plug-in",description:"What",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/redspot/plugin/redspot-gas-reporter.md",sourceDirName:"redspot/plugin",slug:"/redspot/plugin/redspot-gas-reporter",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-gas-reporter",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/redspot/plugin/redspot-gas-reporter.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"@redspot_chai  plug-in",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-chai"},next:{title:"@redspot_patract plug-in",permalink:"/substrate-contracts-book/en/redspot/plugin/redspot-patract"}},l=[{value:"What",id:"what",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usages",id:"usages",children:[]}],u={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redspot_gas-reporter-plug-in"},"@redspot_gas-reporter plug-in"),(0,a.kt)("h2",{id:"what"},"What"),(0,a.kt)("p",null,"The plug-in will print out the gas usage of the transaction of the called contract when the test is completed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1737).Z})),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn add @redspot/gas-reporter\n")),(0,a.kt)("p",null,"Add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@redspot/gas-reporter'\n")),(0,a.kt)("h2",{id:"usages"},"Usages"),(0,a.kt)("p",null,"Once you have imported this plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),", it will automatically print out gas usage of the transaction of the called contract when the test is completed"))}d.isMDXComponent=!0},1737:function(e,t,r){t.Z=r.p+"assets/images/gas-01baae48bc4d15248c09ec875e37fc5a.png"}}]);