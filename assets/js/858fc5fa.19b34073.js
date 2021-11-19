"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[8383],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},l="@redspot_chai  plug-in",p={unversionedId:"redspot/plugin/redspot-chai",id:"redspot/plugin/redspot-chai",isDocsHomePage:!1,title:"@redspot_chai  plug-in",description:"What",source:"@site/docs/redspot/plugin/redspot-chai.md",sourceDirName:"redspot/plugin",slug:"/redspot/plugin/redspot-chai",permalink:"/substrate-contracts-book/redspot/plugin/redspot-chai",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/redspot/plugin/redspot-chai.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"@redspot_known-types plug-in",permalink:"/substrate-contracts-book/redspot/plugin/redspot-known-types"},next:{title:"@redspot_gas-reporter plug-in",permalink:"/substrate-contracts-book/redspot/plugin/redspot-gas-reporter"}},s=[{value:"What",id:"what",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usages:",id:"usages",children:[{value:"<code>equal</code>",id:"equal",children:[]},{value:"<code>changeTokenBalance</code>",id:"changetokenbalance",children:[]},{value:"<code>emit</code>",id:"emit",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redspot_chai--plug-in"},"@redspot_chai  plug-in"),(0,o.kt)("h2",{id:"what"},"What"),(0,o.kt)("p",null,"The plug-in provides a set of matchers that are easy to write contract test cases, and the design is inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum-waffle.readthedocs.io/en/latest/matchers.html"},"waffle"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @redspot/chai\n")),(0,o.kt)("p",null,"Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"redspot.config.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@redspot/chai'\n")),(0,o.kt)("h2",{id:"usages"},"Usages:"),(0,o.kt)("h3",{id:"equal"},(0,o.kt)("inlineCode",{parentName:"h3"},"equal")),(0,o.kt)("p",null,"The @redspot/chai plug-in will modify the default equal matching method. The default equal does not support matching objects\uff0cbut @redspot/chai plugin can."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"expect(new BN(1000)).to.equal(1000); // true\nexpect(AccountId).to.equal('5Gdjkw....'); // true\nexpect(Uint8Array([1, 2, 3])).to.equal('0x010203'); // true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the BN type, equal will call ",(0,o.kt)("inlineCode",{parentName:"li"},"new BN(expected).eq(actual)")," and judge whether it is equal."),(0,o.kt)("li",{parentName:"ul"},"For the types defined in Polkadot.js, equal will call ",(0,o.kt)("inlineCode",{parentName:"li"},"Type.eq(actual)")," and judge whether they are equal."),(0,o.kt)("li",{parentName:"ul"},"For uint8Array type, equal will convert them to hexadecimal, and then judge whether they are equal."),(0,o.kt)("li",{parentName:"ul"},"For other types, the default judgment method is used to judge whether they are equal.")),(0,o.kt)("h3",{id:"changetokenbalance"},(0,o.kt)("inlineCode",{parentName:"h3"},"changeTokenBalance")),(0,o.kt)("p",null,"The matcher can detect changes in the balance of erc20, and internally calls the balanceOf interface to determine the balance. Since the interface for obtaining balance of erc20-trait is ",(0,o.kt)("inlineCode",{parentName:"p"},"baseErc20, balanceOf"),",",(0,o.kt)("inlineCode",{parentName:"p"},"changeTokenBalance")," is not applicable to erc20-trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await expect(() =>\n  contract.tx.transfer(receiver.address, 7)\n).to.changeTokenBalance(contract, receiver, 7);\nawait expect(() =>\n  contract.tx.transfer(receiver.address, 7)\n).to.changeTokenBalances(contract, [contract.signer, receiver], [-7, 7]);\n")),(0,o.kt)("h3",{id:"emit"},(0,o.kt)("inlineCode",{parentName:"h3"},"emit")),(0,o.kt)("p",null,"The matcher can detect whether the contract emits an event. Here is an example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Detect whether a Transfer event is emitted"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await expect(contract.tx.transfer(receiver.address, 7)).to.emit(\n  contract,\n  'Transfer'\n);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Detect whether the event contains the specified parameters"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await expect(contract.tx.transfer(receiver.address, 7))\n  .to.emit(contract, 'Transfer')\n  .withArgs(sender.address, receiver.address, 7);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Don't expect to emit events"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await expect(\n  contract.tx.transfer(sender.address, 7, {\n    signer: emptyAccount\n  })\n).to.not.emit(contract, 'Transfer');\n")))))}d.isMDXComponent=!0}}]);