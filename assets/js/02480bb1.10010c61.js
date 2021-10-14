"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1809],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),p=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return a?r.createElement(k,o(o({ref:e},u),{},{components:a})):r.createElement(k,o({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4093:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={},c="Himalia",p={unversionedId:"himalia/introduction",id:"himalia/introduction",isDocsHomePage:!1,title:"Himalia",description:"Himalia \u662f Patract \u6784\u5efa\u7684\u4e00\u7cfb\u5217\u4e0d\u540c\u8bed\u8a00\u7684\u8bbf\u95ee\u94fepallet-contracts\u5408\u7ea6\u6a21\u5757\u7684sdk\u5e93\u7684\u603b\u79f0\u3002\u5bf9\u4e8eSubstrate\u800c\u8a00\uff0c\u5df2\u7ecf\u5b58\u5728\u4e86\u4e00\u4e9b\u9762\u5411\u4e0d\u540c\u8bed\u8a00\u7684\u8bbf\u95ee\u94fe\u7684sdk\u3002\u4f46\u662f\u7531\u4e8epallet-contracts\u6a21\u5757\u7684\u7279\u6b8a\u6027\uff0c\u9700\u8981\u7ee7\u7eed\u6784\u5efa\u57fa\u4e8e\u8bbf\u95ee\u94fe\u7684sdk\u4e0a\u7684\u8bbf\u95ee\u5408\u7ea6\u6a21\u5757\u7684sdk\u3002\u5176\u7279\u6b8a\u6027\u4e3b\u8981\u8868\u73b0\u5728\uff1a",source:"@site/docs/himalia/introduction.md",sourceDirName:"himalia",slug:"/himalia/introduction",permalink:"/substrate-contracts-book/himalia/introduction",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/himalia/introduction.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"zkMega v0.2 \u62a5\u544a\uff08Megaclite v0.2 \u62a5\u544a\uff09",permalink:"/substrate-contracts-book/zkmega/reports/v0.2Report"},next:{title:"tutorial",permalink:"/substrate-contracts-book/himalia/tutorial"}},u=[{value:"\u9879\u76ee\u4ed3\u5e93\u5730\u5740",id:"\u9879\u76ee\u4ed3\u5e93\u5730\u5740",children:[]},{value:"Himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",id:"himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a",children:[]}],s={toc:u};function m(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"himalia"},"Himalia"),(0,i.kt)("p",null,"Himalia \u662f Patract \u6784\u5efa\u7684\u4e00\u7cfb\u5217\u4e0d\u540c\u8bed\u8a00\u7684\u8bbf\u95ee\u94fe",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u5408\u7ea6\u6a21\u5757\u7684sdk\u5e93\u7684\u603b\u79f0\u3002\u5bf9\u4e8eSubstrate\u800c\u8a00\uff0c\u5df2\u7ecf\u5b58\u5728\u4e86\u4e00\u4e9b\u9762\u5411\u4e0d\u540c\u8bed\u8a00\u7684\u8bbf\u95ee\u94fe\u7684sdk\u3002\u4f46\u662f\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\u6a21\u5757\u7684\u7279\u6b8a\u6027\uff0c\u9700\u8981\u7ee7\u7eed\u6784\u5efa\u57fa\u4e8e\u8bbf\u95ee\u94fe\u7684sdk\u4e0a\u7684\u8bbf\u95ee\u5408\u7ea6\u6a21\u5757\u7684sdk\u3002\u5176\u7279\u6b8a\u6027\u4e3b\u8981\u8868\u73b0\u5728\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5408\u7ea6\u7684\u90e8\u7f72\u4e0e\u8c03\u7528\uff08\u5305\u542brpc\u8c03\u7528\u4e0e\u4ea4\u6613\u8c03\u7528\uff09\u9700\u8981\u4f9d\u636e\u5408\u7ea6\u7684metadata.json\uff08\u7c7b\u4f3c\u4e8eSolidity\u7684abi\u6587\u4ef6\uff09\u63d0\u4f9b\u7684\u4fe1\u606f\u7ec4\u88c5\u53c2\u6570\u7684\u987a\u5e8f\u7684\u4e0e\u7f16\u7801\uff0c\u800c\u94fe\u7684metadata\u53ea\u80fd\u544a\u77e5\u94fe\u7684sdk\u8be5\u94fe\u4e0a\u5b58\u5728\u5408\u7ea6\u6a21\u5757\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"instantiate"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"call"),"\u7b49\u65b9\u6cd5\uff0c\u4e0d\u53ef\u80fd\u544a\u77e5\u67d0\u4e2a\u5408\u7ea6\u7684\u8c03\u7528\u53c2\u6570\u7684\u4fe1\u606f\u3002\u56e0\u6b64\u5bf9\u4e8e\u5408\u7ea6\uff0c\u9700\u8981\u6784\u5efa\u80fd\u89e3\u6790\u5e76\u652f\u6301\u5408\u7ea6metadata\u7684\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5408\u7ea6\u7684Event\u4e5f\u9700\u8981\u4f9d\u636e\u5408\u7ea6\u7684metadata.json\u8fdb\u884c\u89e3\u6790\u3002\u56e0\u6b64\u82e5\u4f7f\u7528\u94fe\u7684sdk\uff0c\u53ea\u80fd\u76d1\u542c\u5230\u51fa\u73b0\u4e86\u5408\u7ea6\u6a21\u5757\u7684event\uff0c\u4f46\u662f\u5374\u65e0\u6cd5\u89e3\u6790\u51faevent\u4e2d\u7684\u5185\u5bb9\u3002\u56e0\u6b64\u9700\u8981\u63d0\u4f9b\u5408\u7ea6\u7684sdk\u652f\u6301event\u7684\u76d1\u542c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5408\u7ea6\u7684\u72b6\u6001\uff08\u5b58\u50a8\uff09\u4f4d\u4e8e\u5b50\u6811\uff0c\u4e14\u5176key\u7684\u7f16\u7801\u4e0e\u5206\u914d\u65b9\u5f0f\u4e0eruntime\u4e0d\u4e00\u81f4\u3002\u5408\u7ea6\u5b58\u50a8\u7684key\u7684\u7f16\u7801\u5206\u914d\u65b9\u5f0f\u4e0e\u8be5\u5408\u7ea6\u6240\u4f7f\u7528\u7684\u5408\u7ea6\u8bed\u8a00\u6846\u67b6\u6709\u5173\uff08\u4f8b\u5982Ask!\u7684\u5b9e\u73b0\u6709\u53ef\u80fd\u4e0eink!\u4e0d\u4e00\u6837\uff09\uff0c\u56e0\u6b64\u9700\u8981\u9488\u5bf9\u4e0d\u540c\u7684\u5408\u7ea6\u8bed\u8a00\u6846\u67b6\u5b9e\u73b0\u5bf9\u5e94\u7684\u5b58\u50a8\u89e3\u6790\u65b9\u5f0f\u3002\u540c\u65f6\u8fd9\u4e2a\u89e3\u6790\u8fc7\u7a0b\u4e5f\u5341\u5206\u4f9d\u8d56\u5408\u7ea6\u672c\u8eab\u63d0\u4f9b\u7684metadata\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5408\u7ea6\u7684\u5f00\u53d1\u8005\u4e3a\u5e7f\u5927\u7684\u9879\u76ee\u65b9\uff0c\u800c\u94fe\u7684\u5f00\u53d1\u8005\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4e3a\u5f00\u53d1\u94fe\u7684\u9879\u76ee\u65b9\u3002\u56e0\u6b64\u5728\u7ba1\u7406\u79c1\u94a5\u7684\u573a\u666f\u65b9\u9762\u4f1a\u51fa\u73b0\u6bd4\u8f83\u5927\u7684\u533a\u522b\u3002\u5f88\u591a\u60c5\u51b5\u4e0b\u4e0e\u94fe\u9ad8\u6743\u9650\u76f8\u5173\u7684\u79c1\u94a5\u7ba1\u7406\u4e3a\u8282\u70b9\u81ea\u8eab\uff0c\u6570\u91cf\u6bd4\u8f83\u5c11\u4e14\u95e8\u69db\u9ad8\uff0c\u6216\u8005\u5f88\u591a\u60c5\u51b5\u4e0b\u90fd\u4f9d\u6258\u4e8e\u591a\u7b7e\u6216\u8005\u6295\u7968\u63a7\u5236\u3002\u800c\u5408\u7ea6\u7684\u5f00\u53d1\u8005\u5f88\u5e7f\u6cdb\uff0c\u540e\u53f0\u5b89\u5168\u7ba1\u7406\u8d28\u91cf\u53c2\u5dee\u4e0d\u9f50\uff0c\u53e6\u4e00\u65b9\u9762\u5f88\u591a\u5408\u7ea6\u90fd\u53ea\u6709\u4e00\u4e2a\u79c1\u94a5\u8fdb\u884c\u63a7\u5236\u3002\u56e0\u6b64\u5728\u5bf9\u4e8e\u5408\u7ea6\u6a21\u5757\u7684\u8c03\u7528\u4e0a\uff0c\u5728\u79c1\u94a5\u7ba1\u7406\u65b9\u9762\u66f4\u9700\u8981\u4e00\u4e2a\u9ad8\u5b89\u5168\u4f4e\u95e8\u69db\u7684\u89e3\u51b3\u65b9\u6848\u3002\u56e0\u6b64\u5408\u7ea6sdk\u53ef\u4ee5\u5728\u8fd9\u4e9b\u573a\u666f\u4e0a\u505a\u7279\u6b8a\u5904\u7406\uff0c\u4ee5\u51cf\u5c11\u5408\u7ea6\u5f00\u53d1\u8005\u5b89\u5168\u7ba1\u7406\u7684\u95e8\u69db\u3002")),(0,i.kt)("p",null,"\u56e0\u6b64 Himalia \u662f\u6709\u5341\u5206\u91cd\u8981\u7684\u5b58\u5728\u7406\u7531\u7684\u3002Himalia\u7684\u5b9a\u4f4d\u7c7b\u4f3c\u4e8e Ethereum \u751f\u6001\u91cc\u7684 Web3J, Web3py \u7b49\u7b49\u3002"),(0,i.kt)("h2",{id:"\u9879\u76ee\u4ed3\u5e93\u5730\u5740"},"\u9879\u76ee\u4ed3\u5e93\u5730\u5740"),(0,i.kt)("p",null,"\u5f53\u524d Himalia \u63d0\u4f9b\u7684\u4e0d\u540c\u8bed\u8a00\u7684\u5408\u7ea6sdk\u6709\u5982\u4e0b\u7248\u672c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"go: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/go-patract"},"https://github.com/patractlabs/go-patract"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"python: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/py-patract"},"https://github.com/patractlabs/py-patract"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"java: \u8fd8\u672a\u5b9e\u73b0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"c#(.net): \u8fd8\u672a\u5b9e\u73b0 "))),(0,i.kt)("h2",{id:"himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"},"Himalia\u8bae\u4f1a\u63d0\u6848\u62a5\u544a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/substrate-contracts-book/himalia/reports/v0.1Report"},"v0.1&v0.2Report"))))}m.isMDXComponent=!0}}]);