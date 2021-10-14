"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[9140],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),o=u(a),s=r,c=o["".concat(p,".").concat(s)]||o[s]||k[s]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2771:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return o}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],m={},p="Benchmark",u={unversionedId:"zkmega/benchmark",id:"zkmega/benchmark",isDocsHomePage:!1,title:"Benchmark",description:"We have constructed the tests of zkMega curves in pallet-template which imports the",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/zkmega/benchmark.md",sourceDirName:"zkmega",slug:"/zkmega/benchmark",permalink:"/substrate-contracts-book/en/zkmega/benchmark",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/zkmega/benchmark.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Example",permalink:"/substrate-contracts-book/en/zkmega/example"},next:{title:"Report for zkMega proposals",permalink:"/substrate-contracts-book/en/zkmega/reports"}},d=[{value:"Building",id:"building",children:[]},{value:"Result",id:"result",children:[]}],k={toc:d};function o(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"benchmark"},"Benchmark"),(0,l.kt)("p",null,"We have constructed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/zkmega/tree/master/crates/arkworks/src/tests"},"the tests of zkMega curves")," in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/substrate/blob/features/curve-benchmark/bin/node-template/pallets/template/src/lib.rs"},"pallet-template")," which imports the\ncurves from zkMega directly(",(0,l.kt)("em",{parentName:"p"},"Wasm"),") and with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/substrate/blob/features/curve-benchmark/bin/node-template/io/src/lib.rs"},"runtime-interface"),"(",(0,l.kt)("em",{parentName:"p"},"Native"),")."),(0,l.kt)("h2",{id:"building"},"Building"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the branch `curve-benchmark` of our fork\ngit clone https://github.com/patractlabs/jupiter.git \\\n    --branch features/runtime-interfaces \\\n    --depth =1\n\n# Build the template\ncargo build -p jupiter-dev --all-features --release\n\n# Check the command benchmark works fine\n# ./target/release/jupiter-dev benchmark -p pallet_template -e wasm_bls_12_381_add\n./target/release/jupiter-dev benchmark -p pallet_template -e wasm_bls_12_381_add\n\n")),(0,l.kt)("h2",{id:"result"},"Result"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"memory"),(0,l.kt)("th",{parentName:"tr",align:null},"processor"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"64GiB System memory"),(0,l.kt)("td",{parentName:"tr",align:null},"AMD Ryzen 9 5900X 12-Core Processor")))),(0,l.kt)("p",null,"Here we test the curevs on ubuntu LTS 20.04, Time is measured in us"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Curve"),(0,l.kt)("th",{parentName:"tr",align:null},"Native"),(0,l.kt)("th",{parentName:"tr",align:null},"Time(us)"),(0,l.kt)("th",{parentName:"tr",align:null},"Wasm"),(0,l.kt)("th",{parentName:"tr",align:null},"Time(us)"),(0,l.kt)("th",{parentName:"tr",align:null},"Speed(Native/Wasm)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","377(~9.5x)"),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","377","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"9.588"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","377","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"29.02"),(0,l.kt)("td",{parentName:"tr",align:null},"~3x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","377","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"183.1"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","377","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"1893"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","377","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"1732"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","377","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"15310"),(0,l.kt)("td",{parentName:"tr",align:null},"~7x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","377","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"7484"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","377","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"64680"),(0,l.kt)("td",{parentName:"tr",align:null},"~9x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","381(~10x)"),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","381","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"13.9"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","381","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"28.31"),(0,l.kt)("td",{parentName:"tr",align:null},"~2x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","381","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"177.1"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","381","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"1879"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","381","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"1438"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","381","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"14770"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bls12","_","381","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"6411"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bls12","_","381","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"63260"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bn254(~5x)"),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bn254","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"5.631"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bn254","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"16.05"),(0,l.kt)("td",{parentName:"tr",align:null},"~3x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bn254","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"107.7"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bn254","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"534.3"),(0,l.kt)("td",{parentName:"tr",align:null},"~5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bn254","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"1150"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bn254","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"5061"),(0,l.kt)("td",{parentName:"tr",align:null},"~5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bn254","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"4178"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bn254","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"19850"),(0,l.kt)("td",{parentName:"tr",align:null},"~5x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bw6","_","761(~13x)"),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bw6","_","761","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"30.35"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bw6","_","761","_","add"),(0,l.kt)("td",{parentName:"tr",align:null},"26.79"),(0,l.kt)("td",{parentName:"tr",align:null},"\\ ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bw6","_","761","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"963.8"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bw6","_","761","_","mul"),(0,l.kt)("td",{parentName:"tr",align:null},"14630"),(0,l.kt)("td",{parentName:"tr",align:null},"~15x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bw6","_","761","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"5715"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bw6","_","761","_","pairing","_","two"),(0,l.kt)("td",{parentName:"tr",align:null},"60960"),(0,l.kt)("td",{parentName:"tr",align:null},"~10x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"native","_","bw6","_","761","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"20330"),(0,l.kt)("td",{parentName:"tr",align:null},"wasm","_","bw6","_","761","_","mimc","_","verify"),(0,l.kt)("td",{parentName:"tr",align:null},"299800"),(0,l.kt)("td",{parentName:"tr",align:null},"~15x")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. Under the jupiter repo\n# 2. Has compiled jupiter-dev\nsh ./benchmark.sh\n")))}o.isMDXComponent=!0}}]);