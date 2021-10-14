"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[9745],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),u=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,d=s["".concat(m,".").concat(k)]||s[k]||p[k]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4386:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={},m="Example",u={unversionedId:"zkmega/example",id:"zkmega/example",isDocsHomePage:!1,title:"Example",description:"Call curves in ink!",source:"@site/docs/zkmega/example.md",sourceDirName:"zkmega",slug:"/zkmega/example",permalink:"/substrate-contracts-book/zkmega/example",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/zkmega/example.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Contract",permalink:"/substrate-contracts-book/zkmega/contract"},next:{title:"Benchmark",permalink:"/substrate-contracts-book/zkmega/benchmark"}},c=[{value:"Call curves in ink!",id:"call-curves-in-ink",children:[]},{value:"MIMC",id:"mimc",children:[]},{value:"Merkle Tree",id:"merkle-tree",children:[]},{value:"EDDSA",id:"eddsa",children:[]}],p={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"example"},"Example"),(0,l.kt)("h2",{id:"call-curves-in-ink"},"Call curves in ink!"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"curve"),(0,l.kt)("th",{parentName:"tr",align:null},"add"),(0,l.kt)("th",{parentName:"tr",align:null},"mul"),(0,l.kt)("th",{parentName:"tr",align:null},"pairing"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","377"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000001"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bls12","_","381"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000010"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000011"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000012")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bn254"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000020"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000021"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000022")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bw6","_","761"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000030"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000031"),(0,l.kt)("td",{parentName:"tr",align:null},"0x01000032")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"let result = ink_env::call_chain_extension(func_id, &Vec::from(input))?\n")),(0,l.kt)("h2",{id:"mimc"},"MIMC"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use zkp_u256::{U256, Zero};\nuse merkle_tree::mimc::{mimc,mimc_with_key}\nlet message = U256::from_decimal_str("49").unwrap();\nlet in_key = U256::zero();\nassert_eq!(\n    mimc(b"1"),\n    mimc_with_key(vec![&message], &in_key)\n);\n')),(0,l.kt)("h2",{id:"merkle-tree"},"Merkle Tree"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use merkle_tree::MerkleTree;\nlet mut mt = MerkleTree::default();\nlet message = b"49";\nlet (leaf, index) = mt.insert(message).unwrap();\nassert_eq!(mt.update(), mt.get_root());\nlet merkle_proof = mt.get_proof(index);\nassert!(mt.verify_merkle_proof(leaf, merkle_proof, index));\n\nlet message = b"50";\nlet (leaf, index) = mt.insert(message).unwrap();\nassert_eq!(mt.update(), mt.get_root());\nlet merkle_proof = mt.get_proof(index);\nassert!(mt.verify_merkle_proof(leaf, merkle_proof, index));\n\nlet message = b"51";\nlet (leaf, index) = mt.insert(message).unwrap();\nassert_eq!(mt.update(), mt.get_root());\nlet merkle_proof = mt.get_proof(index);\nassert!(mt.verify_merkle_proof(leaf, merkle_proof, index));\n')),(0,l.kt)("h2",{id:"eddsa"},"EDDSA"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TODO")))}s.isMDXComponent=!0}}]);