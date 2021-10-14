"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[3684],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,c(c({ref:t},d),{},{components:n})):a.createElement(h,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6707:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],s={},i="Ask! decorator",l={unversionedId:"ask/decorators",id:"ask/decorators",isDocsHomePage:!1,title:"Ask! decorator",description:"Ask! provides a set of decorators to implement smart contracts and configure the behavior of decorators by passing parameter objects. At present, the decorator is divided into two layers, namely class decorator and field decorator. The field decorator must match the corresponding class decorator correctly. When the used decorator does not add parameters, the parentheses () can be omitted.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ask/decorators.md",sourceDirName:"ask",slug:"/ask/decorators",permalink:"/substrate-contracts-book/en/ask/decorators",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/ask/decorators.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Basics",permalink:"/substrate-contracts-book/en/ask/basics"},next:{title:"Storage",permalink:"/substrate-contracts-book/en/ask/storage-data-structure"}},d=[{value:"@contract",id:"contract",children:[]},{value:"@constructor",id:"constructor",children:[]},{value:"@doc",id:"doc",children:[]},{value:"@message",id:"message",children:[]},{value:"@storage",id:"storage",children:[]},{value:"@storage",id:"storage-1",children:[]},{value:"@event",id:"event",children:[]},{value:"@topic",id:"topic",children:[]},{value:"@dynamic",id:"dynamic",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ask-decorator"},"Ask! decorator"),(0,o.kt)("p",null,"Ask! provides a set of decorators to implement smart contracts and configure the behavior of decorators by passing parameter objects. At present, the decorator is divided into two layers, namely class decorator and field decorator. The field decorator must match the corresponding class decorator correctly. When the used decorator does not add parameters, the parentheses ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," can be omitted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The following decorator designs are only applicable to the current version. Many features are not stable yet and may change in the future."),(0,o.kt)("h2",{id:"contract"},"@contract"),(0,o.kt)("p",null,"Class decorator"),(0,o.kt)("p",null,"The decorated class will automatically become an instance of the smart contract. Its sub-fields support ",(0,o.kt)("inlineCode",{parentName:"p"},"@constructor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@message")," decorator decoration."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"AS")," file can only define one ",(0,o.kt)("inlineCode",{parentName:"p"},"@contract")," class."),(0,o.kt)("h2",{id:"constructor"},"@constructor"),(0,o.kt)("p",null,"Field decorator"),(0,o.kt)("p",null,"This decorator is used for the non-static public method of @contract, which does not allow return value \uff0cthat is, the return type is ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),". The decorated method serves as an initial construction method of the contract. A contract needs to define at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"@constructor")," method."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@constructor")," method is executable when the contract is instantiated. A contract can define multiple construction methods, allowing users of the contract to instantiate the contract in many different ways."),(0,o.kt)("p",null,"The configuration of the contract construction method is always ",(0,o.kt)("inlineCode",{parentName:"p"},"payable = true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mutates = true"),"."),(0,o.kt)("p",null,"The example is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@contract\nclass Flipper {\n  private stored: Stored;\n\n  constructor() {\n    this.stored = new Stored();\n  }\n\n  @constructor\n  init(initFlag: bool): void {\n    this.stored.flag = initFlag;\n  }\n\n  // ...\n}\n")),(0,o.kt)("h2",{id:"doc"},"@doc"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@doc")," is used to provide documentation for the information generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.json"),". It can add documentation comments for ",(0,o.kt)("inlineCode",{parentName:"p"},"@contract"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"@event"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"@message"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"@constructor")," declarations."),(0,o.kt)("p",null,"The example is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'\n@contract\n@doc(desc = "MyToken conract that implement erc20 contract")\nclass MyToken {\n  // ...\n}\n\n')),(0,o.kt)("h2",{id:"message"},"@message"),(0,o.kt)("p",null,"Field decorator"),(0,o.kt)("p",null,"This decorator is used for non-static public methods of @contract. The decorated method serves as the message API of the contract for users to call the contract. A contract needs to define at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"@constructor")," method or inherit other contracts."),(0,o.kt)("h2",{id:"storage"},"@storage"),(0,o.kt)("p",null,"Class decorator"),(0,o.kt)("p",null,"Define a contract storage class. This class should only be used as a field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@contract")," class."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@message")," method is called when the contract is executed. The contract can define multiple message methods. The return value of the message method will be returned to the user, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec")," interface needs to be implemented. If you need to return some collection types, then you need to use some collection types provided by Ask! that implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec")," interface."),(0,o.kt)("p",null,"The default configuration of the contract message method is ",(0,o.kt)("inlineCode",{parentName:"p"},"payable = false")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mutates = true"),". When the configuration is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the contract will perform corresponding checks at runtime."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"payable")," indicates that the method can accept value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mutates")," indicates whether the method can change the value of the stored variable."))),(0,o.kt)("p",null,"The example is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@contract\nclass Flipper {\n  private stored: Stored;\n  constructor() {\n    this.stored = new Stored();\n  }\n\n  @constructor\n  default(initFlag: bool): void {\n    this.stored.flag = initFlag;\n  }\n\n  @message\n  flip(): void {\n    const v = this.stored.flag;\n    this.stored.flag = !v;\n  }\n\n  @message(mutates = false)\n  get(): bool {\n    return this.stored.flag;\n  }\n}\n")),(0,o.kt)("h2",{id:"storage-1"},"@storage"),(0,o.kt)("p",null,"Class decorator"),(0,o.kt)("p",null,"Define a contract storage class. This class should only be used as a field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@contract")," class."),(0,o.kt)("h2",{id:"event"},"@event"),(0,o.kt)("p",null,"Class decorator"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/substrate-contracts-book/en/ask/basics#Events"},"Event")," for details."),(0,o.kt)("h2",{id:"topic"},"@topic"),(0,o.kt)("p",null,"Field decorator"),(0,o.kt)("p",null,"The attribute field decorated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@topic")," will generate an additional topic index. There is a limit to the number of indexes for each event (the default maximum is four)."),(0,o.kt)("h2",{id:"dynamic"},"@dynamic"),(0,o.kt)("p",null,"Class decorator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@dynamic")," decorator is used to decorate the APIs of a contract that already exists on the chain. By declaring the contract interface on the chain in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@dynamic")," class, ask will automatically generate the corresponding cross-contract call code."),(0,o.kt)("p",null,"Assume that the following contract A already exists on the chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@contract\nclass Libadd {\n  constructor() {}\n\n  @constructor\n  default(): void {}\n\n  @message(mutates = false)\n  add(a: i32, b: i32): i32 {\n    return a + b;\n  }\n}\n")),(0,o.kt)("p",null,"If you want to call the contract in contract B, you can declare a ",(0,o.kt)("inlineCode",{parentName:"p"},"@dynamic")," class to describe its interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@dynamic\nexport class Libadd {\n  // Note that the method experience here will be covered by the actual code, this writing is mainly for compiling\n  add(a: i32, b: i32): i32 {\n    return 0;\n  }\n}\n\n@contract\nclass LibaddCaller {\n  constructor() {}\n\n  @constructor\n  default(): void {}\n\n  @message(mutates = false)\n  callAddFromExternal(outAddress: AccountId, a: i32, b: i32): i32 {\n    let outContract = new Libadd(outAddress);\n    let val = outContract.add(a, b);\n    return val;\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"outAddress"),"  here is the instance address of contract ",(0,o.kt)("inlineCode",{parentName:"p"},"Libadd"),"."),(0,o.kt)("p",null,"This function can also call contracts written in other smart contract languages, such as ink!, as long as it follows the compatible metadata.json specification."))}u.isMDXComponent=!0}}]);