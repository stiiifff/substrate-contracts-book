"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[5867],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=p(r),f=a,b=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,c(c({ref:e},l),{},{components:r})):n.createElement(b,c({ref:e},l))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},u="Patract",p={unversionedId:"patract/introduction",id:"patract/introduction",isDocsHomePage:!1,title:"Patract",description:"overview",source:"@site/docs/patract/introduction.md",sourceDirName:"patract",slug:"/patract/introduction",permalink:"/substrate-contracts-book/patract/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/patract/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"publish-dapps",permalink:"/substrate-contracts-book/patra-store/publish-dapps"}},l=[],s={toc:l};function m(t){var e=t.components,i=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patract"},"Patract"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"overview",src:r(2667).Z})),(0,o.kt)("p",null,"Patract \u505a\u7684\u4e1c\u897f\u5177\u4f53\u5305\u62ec:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5f00\u53d1\u8005\u7aef\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Jupiter\uff1a\u72ec\u7acb\u7684\u667a\u80fd\u5408\u7ea6\u6d4b\u8bd5\u7f51\uff0c\u63d0\u4f9b\u7ed9\u5408\u7ea6\u5f00\u53d1\u8005\u6d4b\u8bd5\u5408\u7ea6\u94fe\u7684\u73af\u5883\u3002"),(0,o.kt)("li",{parentName:"ul"},"Ask!\uff1aAssemblyScript \u7248\u7684 Ink! \u5408\u7ea6\u6846\u67b6\uff0c\u5438\u5f15 TS/JS \u7684\u5f00\u53d1\u8005\uff0c\u7ed9\u4e0d\u613f\u610f\u4f7f\u7528 rust \u7684\u5408\u7ea6\u5f00\u53d1\u8005\u53e6\u4e00\u4e2a\u9009\u62e9\u3002"),(0,o.kt)("li",{parentName:"ul"},"Redspot\uff1aWasm \u5408\u7ea6\u5f00\u53d1\u5de5\u4f5c\u6d41\u548c\u811a\u624b\u67b6\uff1a\u5bf9\u6807 Ethereum \u751f\u6001\u4e2d\u7684 Tuffle/Redhat\uff0c\u8ba9\u5408\u7ea6\u5f00\u53d1\u9879\u76ee\u5316\uff0c\u81ea\u52a8\u5316\u7684\u5de5\u5177\u3002Redspot \u91c7\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\uff0c\u8fd0\u884c\u5f00\u53d1\u8005\u6dfb\u52a0\u81ea\u5df1\u8bbe\u8ba1\u7684\u63d2\u4ef6\u4e30\u5bcc Redspot \u7684\u529f\u80fd\u3002"),(0,o.kt)("li",{parentName:"ul"},"Europa\uff1aRuntime \u548c\u5408\u7ea6\u8fd0\u884c\u6c99\u76d2\uff1a\u5bf9\u6807 Ethereum \u751f\u6001\u4e2d\u7684 EthereumJS/Ganache\uff0c\u7ed9\u5408\u7ea6\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u8c03\u8bd5\u4fe1\u606f\uff0c\u4fbf\u4e8e\u5feb\u901f\u5f00\u53d1\u5408\u7ea6\u3002"),(0,o.kt)("li",{parentName:"ul"},"Elara\uff1a\u5b9e\u65f6\u548c\u53ef\u6269\u5c55\u7684\u6ce2\u5361 API\uff1a\u5bf9\u6807 Ethereum \u4e2d\u7684 Infura\uff0c\u7ed9\u5408\u7ea6\u9879\u76ee\u65b9\u63d0\u4f9b\u8282\u70b9\u7684 Endpoint\uff0c\u4e0d\u7528\u81ea\u884c\u642d\u5efa\u8282\u70b9\u83b7\u53d6\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"Megaclite\uff1a\u96f6\u77e5\u8bc6\u8bc1\u660e\u7684\u5e95\u5c42\u652f\u6301\uff1a\u5728 Jupiter/Patract \u94fe\u4e2d\u63d0\u4f9b\u96f6\u77e5\u8bc6\u539f\u8bed\u652f\u6301\uff0c\u53ef\u4ee5\u5141\u8bb8\u9879\u76ee\u65b9\u8bbe\u8ba1 zkRollup \u6216\u5176\u4ed6\u96f6\u77e5\u8bc6\u76f8\u5173\u5408\u7ea6\u3002"),(0,o.kt)("li",{parentName:"ul"},"Metis\uff1aInk! \u5408\u7ea6\u6807\u51c6\u5e93\uff1a\u5bf9\u6807 Ethereum \u4e2d\u7684 openzeppelin-contracts\uff0c\u7ed9\u5408\u7ea6\u5f00\u53d1\u8005\u63d0\u4f9b\u53ef\u590d\u7528\u7684\u8f6e\u5b50\uff0c\u4e0d\u5fc5\u4ece\u96f6\u5f00\u59cb\u7f16\u5199\u5408\u7ea6\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"Himalia\uff1a\u591a\u8bed\u8a00\u5408\u7ea6 SDK\uff1a\u5bf9\u6807 Ethereum \u4e2d\u7684 Web3J\uff0cWeb3Py \u7b49 SDK\uff0c\u7ed9\u5408\u7ea6\u9879\u76ee\u65b9\u63d0\u4f9b\u4e0d\u540c\u8bed\u8a00\u7684\u73af\u5883\uff0c\u4e30\u5bcc\u7684\u63a5\u53e3\u4e0e\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,o.kt)("li",{parentName:"ul"},"Leda\uff1a\u5408\u7ea6\u76d1\u63a7\u53f0\uff1a\u5bf9\u6807 Ethereum \u751f\u6001\u4e2d\u5404\u7c7b\u5408\u7ea6\u76d1\u63a7\u8bbe\u65bd\uff0c\u8ba9\u5408\u7ea6\u9879\u76ee\u65b9\u968f\u65f6\u76d1\u63a7\u5408\u7ea6\u7684\u5b58\u50a8\u60c5\u51b5\uff0c\u4ee3\u5e01\u8f6c\u79fb\u60c5\u51b5\uff0c\u5408\u7ea6\u8c03\u7528\u60c5\u51b5\u7b49\u7b49\u3002"),(0,o.kt)("li",{parentName:"ul"},"Carpo\uff1a\u4e13\u6ce8\u5f00\u53d1\u5408\u7ea6\u7684\u667a\u80fd WebIDE\uff1a\u5bf9\u6807 Ethereum \u4e2d\u7684 Remix\uff0c\u4f46\u5176\u5c06\u4f1a\u662f\u5bf9 Patract \u4ee5\u4e0a\u5408\u7ea6\u5f00\u53d1\u5de5\u5177\u7684\u96c6\u5927\u6210\u8005\u3002Carpo \u5c06\u91c7\u7528\u6700\u65b0\u7684 WebIDE \u6280\u672f\uff0c\u4f7f\u5f97\u4e91\u7aef\u5f00\u53d1\u65e0\u9650\u8d34\u8fd1\u672c\u5730\u5f00\u53d1\uff0c\u540c\u65f6\u5b8c\u6574\u7684\u4e91\u7aef\u8ba9\u5f00\u53d1\u8005\u65e0\u9700\u642d\u5efa\u4efb\u4f55\u5f00\u53d1\u73af\u5883\u5373\u53ef\u8fdb\u884c\u5f00\u53d1\uff0c\u5f00\u7bb1\u5373\u7528\u7684 Patract \u5de5\u5177\u94fe\u7ed9\u5408\u7ea6\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u4f53\u5316\u5f00\u53d1\u4f53\u9a8c\uff0c\u8ba9\u5f00\u53d1\u8005\u7684\u5f00\u53d1\u3001\u8c03\u8bd5\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u7684\u5408\u7ea6\u8fc7\u7a0b\u5982\u4e1d\u822c\u987a\u7545\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u7528\u6237\u7aef\u5305\u62ec\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Patra Store\uff1a\u4f5c\u4e3a Patract \u5e73\u884c\u94fe\u94b1\u5305\u548c DApp \u751f\u6001\u7684\u5165\u53e3\uff0c\u5728\u6d4b\u8bd5\u7f51\u9636\u6bb5\u5c06\u96c6\u6210\u4e00\u4e9b\u793a\u4f8b\u5e94\u7528\u548c\u914d\u5957\u5f00\u53d1\u5de5\u5177\u5957\u4ef6\u7528\u6cd5\u6f14\u793a\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u5f00\u53d1 Wasm \u5408\u7ea6\u548c\u524d\u7aef\u754c\u9762\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u8fdb\u5165\u6ce2\u5361\u65b0\u5408\u7ea6\u751f\u6001\u3002"),(0,o.kt)("li",{parentName:"ul"},"Patra Scan\uff1a\u4e13\u95e8\u4e3a\u667a\u80fd\u5408\u7ea6\u94fe\u4f18\u5316\u7684\u533a\u5757\u94fe\u6d4f\u89c8\u5668\uff0c\u96c6\u6210\u6bd4\u7edf\u4e00\u7684\u94fe\u6d4f\u89c8\u5668\u66f4\u4e30\u5bcc\u7684\u5408\u7ea6\u6570\u636e\u4fe1\u606f\u5c55\u793a\uff0c\u589e\u5f3a\u7edf\u8ba1\u548c\u81ea\u5b9a\u4e49\u7684\u67e5\u8be2\u529f\u80fd\u3002")))))}m.isMDXComponent=!0},2667:function(t,e,r){e.Z=r.p+"assets/images/overview-1c3a66cfe10f598908dba6ffe6c262f1.jpg"}}]);