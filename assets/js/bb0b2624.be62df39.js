"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[2152],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9797:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Patract's treasury report for Metis M1 (Wasm Contract Library)",c={unversionedId:"metis/reports/M1Report",id:"metis/reports/M1Report",isDocsHomePage:!1,title:"Patract's treasury report for Metis M1 (Wasm Contract Library)",description:"6 weeks ago\uff0cPatract applied a proposal #469 for Metis M1, Now, we have finished all the work and you can review our codebase at\uff1a",source:"@site/docs/metis/reports/M1Report.md",sourceDirName:"metis/reports",slug:"/metis/reports/M1Report",permalink:"/substrate-contracts-book/metis/reports/M1Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/metis/reports/M1Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for Metis proposals",permalink:"/substrate-contracts-book/metis/reports/reports"},next:{title:"Carpo",permalink:"/substrate-contracts-book/carpo/introduction"}},p=[{value:"1. Metis&#39;s future development plan",id:"1-metiss-future-development-plan",children:[]},{value:"2. Report",id:"2-report",children:[{value:"2.1 Implement basic component macros",id:"21-implement-basic-component-macros",children:[]},{value:"2.2 Components",id:"22-components",children:[]},{value:"2.3 Examples and tests",id:"23-examples-and-tests",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"patracts-treasury-report-for-metis-m1-wasm-contract-library"},"Patract's treasury report for Metis M1 (Wasm Contract Library)"),(0,r.kt)("p",null,"6 weeks ago\uff0cPatract applied a ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/post/469"},"proposal #469")," for Metis M1, Now, we have finished all the work and you can review our codebase at\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/metis"},"Metis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/overview.html"},"Metis Documentation"))),(0,r.kt)("p",null,"Metis proposed and implemented ",(0,r.kt)("a",{parentName:"p",href:"https://patractlabs.github.io/metis/use-component.html#metis-mcci-architecture"},(0,r.kt)("inlineCode",{parentName:"a"},"MCCI")," architecture"),". MCCI acrhitecture facilitates smart contract development by composititing independent components. Here are a list of components currently implemented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ERC20 and its expansion components"),(0,r.kt)("li",{parentName:"ul"},"ERC721 and its expansion components"),(0,r.kt)("li",{parentName:"ul"},"ERC777 and its expansion components"),(0,r.kt)("li",{parentName:"ul"},"ERC1155 and its expansion components"),(0,r.kt)("li",{parentName:"ul"},"Ownable"),(0,r.kt)("li",{parentName:"ul"},"AccessControl"),(0,r.kt)("li",{parentName:"ul"},"TimelockController"),(0,r.kt)("li",{parentName:"ul"},"Escrow(PullPayment)"),(0,r.kt)("li",{parentName:"ul"},"support(ERC165)"),(0,r.kt)("li",{parentName:"ul"},"ReentrancyGuard"),(0,r.kt)("li",{parentName:"ul"},"Pausable")),(0,r.kt)("p",null,"For detailed usages and implemented examples, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://patractlabs.github.io/metis/index.html"},"Metis Documentation"),"."),(0,r.kt)("p",null,"During the development of Metis, we have refined the smart contract testing procedures based on Redspot by tweaking the underlying mechanism. For usages of testing purposes, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/tree/master/example"},"Example"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE")," Please be aware that due to large volume of Metis's testcases, we should run tests separately for each contract. For detailed commands, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/master/example/README.md"},"Metis Example README"))),(0,r.kt)("h2",{id:"1-metiss-future-development-plan"},"1. Metis's future development plan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},(0,r.kt)("strong",{parentName:"del"},"[M1]")," Implement basic macros and implementations for components; improve component testing support; developers can build regular DAPPs based on Metis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[M2]")," Complete component macros; complete component development support so that developers can build custom components; complete the api support corresponding to the metis component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[M3]")," Rich component library; complete component and API support for governance and financial mechanism; thorough mathematical library for contract development to support DeFi-type contracts that require complex calculations.")),(0,r.kt)("h2",{id:"2-report"},"2. Report"),(0,r.kt)("h3",{id:"21-implement-basic-component-macros"},"2.1 Implement basic component macros"),(0,r.kt)("p",null,"We have implemented the following marcos for components development:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract")," : to define the contract following metis contract standard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import")," : to generate code to implement the components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metis")," : to define the metis component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stub")," : to implement stub in metis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reentrancy_guard")," : helper macro for the ",(0,r.kt)("inlineCode",{parentName:"li"},"reentrancy_guard")," component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports")," : helper macro for the erc165 supports api."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash")," : to calculate the hash of a string during compilation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selector_id")," : to calculate the ",(0,r.kt)("inlineCode",{parentName:"li"},"selector_id"),"  of a ",(0,r.kt)("inlineCode",{parentName:"li"},"message"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," The currently available macros listed above are minimal implementations which will be extended and fortified in ","[M2]"," milestone, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://patractlabs.github.io/metis/use-component.html"},"Use Component")),(0,r.kt)("h3",{id:"22-components"},"2.2 Components"),(0,r.kt)("p",null,"The most important work in this version is implementing the Metis components for constructing smart contracts."),(0,r.kt)("h4",{id:"metis-mcci-architecture"},"Metis-MCCI architecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"M")," : Data model. Most contracts read and write contract environmental states. These states map to specific data models. Each model is associated with only one component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C")," : component. A component is a reusable, independent implementation unit that encapsulates data and methods but maintains orthogonality with other components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"C")," : controller. The controller coordinates the components and implements the contract interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"I")," : interface. The interface is the user interface of the contract. The interface defines the interactions of the contract and further defines the metadata.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510          \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502       \u2502          \u2502 Interface     \u2502 Control                        \u2502\n\u2502       \u2502          \u2502               \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u2502\n\u2502       \u2502          \u2502  Constructor  \u2502  \u2502 Component           \u2502       \u2502\n\u2502 User  \u2502  Call    \u2502               \u2502  \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2510    \u2502\n\u2502       \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  Messages     \u2502  \u2502 \u2502 Component            \u2502    \u2502\n\u2502       \u2502          \u2502               \u2502  \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2510  \u2502\n\u2502       \u2502          \u2502  Events       \u2502  \u2502 \u2502 \u2502 Component            \u2502  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524          \u2502               \u2502  \u2502 \u2502 \u2502        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502\n\u2502       \u2502  Call    \u2502               \u2502  \u2502 \u2502 \u2502 Msgs   \u2502           \u2502 \u2502  \u2502\n\u2502       \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502               \u2502  \u2502 \u2502 \u2502        \u2502 Module    \u2502 \u2502  \u2502\n\u2502       \u2502          \u2502               \u2502  \u2502 \u2502 \u2502 Apis   \u2502           \u2502 \u2502  \u2502\n\u2502 Apps  \u2502          \u2502               \u2502  \u2502 \u2502 \u2502        \u2502           \u2502 \u2502  \u2502\n\u2502       \u2502  Event   \u2502               \u2502  \u2514\u2500\u2524 \u2502 Events \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502\n\u2502       \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524               \u2502    \u2514\u2500\u2524                      \u2502  \u2502\n\u2502       \u2502          \u2502               \u2502      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\n\u2502       \u2502          \u2502               \u2502                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"As shown in the figure, under the MCCI architecture, a contract is composed of a series of reusable components. The contract interaction is implemented through the interconnection of components and defined by interface and controller."),(0,r.kt)("p",null,"The contract's interface defines the contract's interaction, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"constructor"),(0,r.kt)("li",{parentName:"ul"},"message"),(0,r.kt)("li",{parentName:"ul"},"event")),(0,r.kt)("p",null,"A user can interact with smart contract based on these three things. In fact, these three things also constitute ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!'"),"s macros as the main part of contract metadata."),(0,r.kt)("p",null,"For a contract, these three things are guaranteed to be deterministic, unambiguous, and easy to understand. Therefore, the interface of the contract code needs to stay cohesive."),(0,r.kt)("p",null,"The contract controller is responsible for integrating the components. We break the main logic of the contract down into a series of reusable components, which can ",(0,r.kt)("strong",{parentName:"p"},"extend")," and ",(0,r.kt)("strong",{parentName:"p"},"compose")," based on other components."),(0,r.kt)("p",null,"A data model is the encapsulation of contract state from contract logic.  Each contract component requires different attributes in its data model. Therefore, a complete contract will be composed of multiple data models. "),(0,r.kt)("p",null,"In generally, the data model also contributes to the contract interaction, formulating the contract interface, but in most case, external applications and users will not interact with blockchain states which stores contract data. Therefore, the external encapsulation of the data model is not emphasized here."),(0,r.kt)("h4",{id:"inheritance-vs-composition"},"Inheritance Vs Composition"),(0,r.kt)("p",null,"In contract development, we emphasize the audibility of contracts but the use of inheritance feature in solidity makes contract hard for code auditing: The contract logic is spread into multiple files or even in different projects. Therefore, in Metis, we do not directly inherit the interface and implementation of the contract, but in instead components and data model are introduced to composite the final contract."),(0,r.kt)("p",null,"Each component implements a series of functions including the methods for messages and apis. Components can ",(0,r.kt)("strong",{parentName:"p"},"extend")," and ",(0,r.kt)("strong",{parentName:"p"},"compose")," based on other components."),(0,r.kt)("p",null,"Most components look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// The `EventEmit` impl the event emit api for ownable component.\npub trait EventEmit<E: Env>: EnvAccess<E> {\n    /// Emit OwnershipTransferred event\n    fn emit_event_ownership_transferred(\n        &mut self,\n        previous_owner: Option<E::AccountId>,\n        new_owner: Option<E::AccountId>,\n    );\n}\n\n/// The `Impl` define ownable component impl funcs\npub trait Impl<E: Env>: Storage<E, Data<E>> + EventEmit<E> {\n    /// init Initializes the contract setting the deployer as the initial owner.\n    fn init(&mut self) {\n        // logic\n    }\n\n    /// Message impl \n    fn one_message_impl(&mut self) -> Result<()> {\n        // msg impl which will call by ```xxx::Impl::one_message_impl(self)```\n\n        // use the hook\n        self.hook(xxx)?\n\n        Ok(())\n    }\n\n    /// Message for Query impl\n    fn one_query_impl(& self, param_acc: &E::AccountId) -> Data {\n        Data::default()\n    }\n\n    /// API for other message\n    fn check_xxx(&self, owner: &E::AccountId) {\n    }\n\n    // Hook which need impl by contract\n    fn hook(&mut self, params: &E::Balance) -> Result<()>;\n}\n\n")),(0,r.kt)("p",null,"Some components contain a default implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// a default impl, each contract which impl storage and event emitter can be component\nimpl<E: Env, T: Storage<E, Data<E>> + EventEmit<E>> Impl<E> for T {}\n")),(0,r.kt)("p",null,"To use this component, we can import this to contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[metis_lang::contract] // use `metis_lang::contract`\npub mod contract {\n    // use the component: xxx1 and xxx2\n    use metis_component_xxx1 as xxx1;\n    use metis_component_xxx2 as xxx2;\n\n    // use `import` and `metis` marco\n    use metis_lang::{\n        import,\n        metis,\n    };\n\n    #[ink(storage)]\n    #[import(xxx1, xxx2)] // import the component\n    pub struct Contract {\n        // add data to storage, which use Contract as Env to Data\n        xxx1: xxx1::Data<Contract>,\n        xxx2: xxx2::Data<Contract>,\n    }\n\n    /// add event for component\n    /// in emit it will be emit_event_ownership_transferred\n    #[ink(event)]\n    #[metis(xxx1)] // event for xxx1\n    pub struct OwnershipTransferred {\n        /// previous owner account id\n        #[ink(topic)]\n        previous_owner: Option<AccountId>,\n        /// new owner account id\n        #[ink(topic)]\n        new_owner: Option<AccountId>,\n    }\n\n    /// Event emitted when payee withdraw\n    #[ink(event)]\n    #[metis(xxx2)] // event for xxx1\n    pub struct OtherEvent {\n        #[ink(topic)]\n        pub payee: AccountId,\n        pub amount: Balance,\n    }\n\n    impl xxx1::Impl<Contract> for Contract {\n        fn hook(\n            &mut self,\n            params: &E::Balance\n        ) -> Result<()> {\n            // some logic\n\n            Ok(())\n        }\n    }\n\n    // impl\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            // impl for default\n            let mut instance = Self {\n                xxx1: xxx1::Data::new(),\n                xxx2: xxx2::Data::new(),\n            };\n\n            // init call\n            xxx1::Impl::init(&mut instance);\n            xxx2::Impl::init(&mut instance);\n\n            // return instance\n            instance\n        }\n\n        /// commits for one_message_impl\n        #[ink(message)]\n        pub fn one_message_impl(&mut self) -> Result<()> {\n            // some other check\n            xxx2::Impl::do_some_check(self);\n            xxx1::Impl::one_message_impl(self)\n        }\n\n        /// commits for one_query_impl\n        #[ink(message, payable)]\n        pub fn one_query_impl(&self, payee: AccountId) {\n            xxx1::Impl::one_query_impl(self, payee)\n        }\n\n        /// commits for other_message_impl\n        #[ink(message)]\n        pub fn other_message_impl(&mut self, payee: AccountId) {\n            xxx1::Impl::check_xxx(self)\n            // other logic\n        }\n    }\n\n    #[cfg(test)]\n    mod tests {\n        // test for contract\n    }\n}\n')),(0,r.kt)("h4",{id:"hook-and-impl"},"Hook and Impl"),(0,r.kt)("p",null,"In the previous example, we can see the function ",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    // Hook which need impl by contract\n    fn hook(&mut self, params: &E::Balance) -> Result<()>;\n")),(0,r.kt)("p",null,"In some components, the hook has a default implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    /// @dev Hook that is called before any token transfer. This includes\n    /// calls to {send}, {transfer}, {operatorSend}, minting and burning.\n    ///\n    /// Calling conditions:\n    ///\n    /// - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\n    /// will be to transferred to `to`.\n    /// - when `from` is zero, `amount` tokens will be minted for `to`.\n    /// - when `to` is zero, `amount` of ``from``'s tokens will be burned.\n    /// - `from` and `to` are never both zero.\n    ///\n    /// To learn more about hooks,\n    /// head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n    fn _before_token_transfer(\n        &mut self,\n        _operator: &E::AccountId,\n        _from: &Option<&E::AccountId>,\n        _to: &Option<&E::AccountId>,\n        _amount: &E::Balance,\n    ) -> Result<()> {\n        Ok(())\n    }\n")),(0,r.kt)("p",null,"The hook will be called automatically by component functions. User can define their own hook. Here is an example in Pausable ERC20 component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    fn before_token_transfer(\n        &mut self,\n        _from: &E::AccountId,\n        _to: &E::AccountId,\n        _amount: E::Balance,\n    ) -> Result<()> {\n        metis_pausable::Impl::<E>::ensure_not_paused(self);\n\n        Ok(())\n    }\n")),(0,r.kt)("p",null,"The Pausable ERC20 component extends the native erc20 component by implementing the hook."),(0,r.kt)("h4",{id:"metis-contract-component"},"Metis Contract component"),(0,r.kt)("p",null,"In future versions of Metis, we will first fully implement openZeppelin-contracts components for developers to use. These components include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Token: ERC20, ERC721, ERC777, ERC1155 and extensions of the above Token contracts"),(0,r.kt)("li",{parentName:"ul"},"Access: Ownable, AccessControl, TimelockController"),(0,r.kt)("li",{parentName:"ul"},"Security: PullPayment, ReentrancyGuard, Pausable")),(0,r.kt)("p",null,"Metis will implement a set of common components, similar to the OpenZeppelin-Contracts library. All library code are ensured to be fully tested and audited,\nThese components will be kept as consistent as possible with OpenZeppelin-contracts to flat the developer's learning curve by absorbing the experience learned from Solidity Ecology:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/tokens/erc20.html"},"ERC20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/tokens/erc721.html"},"ERC721")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/tokens/erc777.html"},"ERC777")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/tokens/erc1155.html"},"ERC1155")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/access-control/ownable.html"},"Ownable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/access-control/access-control.html"},"AccessControl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/access-control/access-control-enumerable.html#access-control-enumerable"},"Access Control Enumerable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/governance/timelock-controller.html"},"TimelockController")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/utilities/escrow.html"},"Escrow(PullPayment)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/tools/erc165.html"},"Support(ERC165)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/security/reentrancy-guard.html"},"ReentrancyGuard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://patractlabs.github.io/metis/security/pausable.html"},"Pausable"))),(0,r.kt)("p",null,"Please refer to the documentation for details of each component."),(0,r.kt)("h3",{id:"23-examples-and-tests"},"2.3 Examples and tests"),(0,r.kt)("p",null,"Each component is shipped with examples of default implementation and testcases by ink! offchain test environments and redspot."))}u.isMDXComponent=!0}}]);