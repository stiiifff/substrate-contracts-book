"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[9648],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},c="Contract Pallet Implementation",s={unversionedId:"europa/guides/implementation",id:"europa/guides/implementation",isDocsHomePage:!1,title:"Contract Pallet Implementation",description:"On pallet contracts layer",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/europa/guides/implementation.md",sourceDirName:"europa/guides",slug:"/europa/guides/implementation",permalink:"/substrate-contracts-book/en/europa/guides/implementation",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/europa/guides/implementation.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Architeture",permalink:"/substrate-contracts-book/en/europa/guides/architecture"},next:{title:"Custom RPCs and commands",permalink:"/substrate-contracts-book/en/europa/guides/custom-rpcs"}},p=[{value:"On <code>pallet contracts</code> layer",id:"on-pallet-contracts-layer",children:[{value:"Error on the wasm executor layer\uff1a",id:"error-on-the-wasm-executor-layer\uff1a",children:[]},{value:"Error of host_functions:",id:"error-of-host_functions",children:[]},{value:"Execution during debugging",id:"execution-during-debugging",children:[]}]},{value:"On <code>wasmtime</code> Layer",id:"on-wasmtime-layer",children:[]},{value:"Contract Log functions",id:"contract-log-functions",children:[{value:"<code>ink_log</code>:",id:"ink_log",children:[]},{value:"<code>runtime_log</code>:",id:"runtime_log",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-pallet-implementation"},"Contract Pallet Implementation"),(0,r.kt)("h2",{id:"on-pallet-contracts-layer"},"On ",(0,r.kt)("inlineCode",{parentName:"h2"},"pallet contracts")," layer"),(0,r.kt)("p",null,"During the contract debugging process, Europa believes that developers need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rich error information: Wasm records the error information during the entire execution process, including Wasm executor errors and host_function errors."),(0,r.kt)("li",{parentName:"ol"},"Execution in the debugging process: The main modification information of ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet contracts"),', the "contract stack" is used to record the process of contract calling contract, and any information that can assist debugging during the execution of this layer of contract, such as the situation of calling the host_function, selector, and calling contract parameters, etc.')),(0,r.kt)("p",null,"Europa made the following modifications:"),(0,r.kt)("h3",{id:"error-on-the-wasm-executor-layer\uff1a"},"Error on the wasm executor layer\uff1a"),(0,r.kt)("p",null,"Europa designed our own ",(0,r.kt)("inlineCode",{parentName:"p"},"ep-sandbox")," to replace the original ",(0,r.kt)("inlineCode",{parentName:"p"},"sp-sandbox")," used by ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts"),", and modified ",(0,r.kt)("inlineCode",{parentName:"p"},"ep_sandbox::Error")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Error {\n   Module,\n   OutOfBounds,\n   Execution,\n   /// Wasm inner trap\n   Trap(imp::Trap),\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Trap(imp::Trap)")," carries backtrace information of the Wasm layer, it can help developers to get the detailed information for execution stack."),(0,r.kt)("p",null,"Europa's own ",(0,r.kt)("inlineCode",{parentName:"p"},"ep-sandbox")," only has the ",(0,r.kt)("inlineCode",{parentName:"p"},"std")," version (because Europa has removed all Wasm parts, there is no need for ",(0,r.kt)("inlineCode",{parentName:"p"},"ep-sandbox")," to support ",(0,r.kt)("inlineCode",{parentName:"p"},"no-std"),"), so in the future, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ep-sandbox")," can be replaced with different wasm executors to support running tests of different wasm executors, and replaced with wasm executors that support debugging and other features. ")),(0,r.kt)("p",null,"Currently ",(0,r.kt)("inlineCode",{parentName:"p"},"ep-sandbox")," uses a forked version of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmi")," as the executor, so the error it throws is ",(0,r.kt)("inlineCode",{parentName:"p"},"WasmiError"),". See the next chapter for errors in",(0,r.kt)("inlineCode",{parentName:"p"},"wasmi"),"."),(0,r.kt)("h3",{id:"error-of-host_functions"},"Error of host_functions:"),(0,r.kt)("p",null,"The host function execution error will cause Trap, and will record ",(0,r.kt)("inlineCode",{parentName:"p"},"TrapReason"),". No modification to the data structure, just record."),(0,r.kt)("h3",{id:"execution-during-debugging"},"Execution during debugging"),(0,r.kt)("p",null,"The Europa forked version of ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," has designed an object to record any information that can help debugging during contract execution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Record the contract execution context.\npub struct NestedRuntime {\n    /// Current depth\n    depth: usize,\n    /// The current contract execute result\n    ext_result: ExecResult,\n    /// The value in sandbox successful result\n    sandbox_result_ok: Option<ReturnValue>,\n    /// Who call the current contract\n    caller: AccountId32,\n    /// The account of the current contract\n    self_account: Option<AccountId32>,\n    /// The input selector\n    selector: Option<HexVec>,\n    /// The input arguments\n    args: Option<HexVec>,\n    /// The value in call or the endowment in instantiate\n    value: u128,\n    /// The gas limit when this contract is called\n    gas_limit: Gas,\n    /// The gas left when this contract return\n    gas_left: Gas,\n    /// The host function call stack\n    env_trace: EnvTraceList,\n    /// The error in wasm\n    wasm_error: Option<WasmErrorWrapper>,\n    /// The trap in host function execution\n    trap_reason: Option<TrapReason>,\n    /// Nested contract execution context\n    nest: Vec<NestedRuntime>,\n}\n")),(0,r.kt)("p",null,"In the model of ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts"),', a contract calling another contract is in the "contract stack" model, so ',(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," will track the execution process of the entire contract stack, and use the property of ",(0,r.kt)("inlineCode",{parentName:"p"},"nest")," to store a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," to represent other contracts the the contract called."),(0,r.kt)("p",null,"In the process of executing a contract by ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts"),", Europa records the relevant information in the execution process in the structure of ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," in the form of a bypass, and will print the ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," to the log (show the case later) in a certain format after the contract call ends. Contract developers can analyze the information printed by ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," to obtain various detailed information during the execution of the contract, which can be used in various situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"help to locate where the error occurs, including the following situations:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pallet contracts")," layer"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ink!")," layer"),(0,r.kt)("li",{parentName:"ol"},"The specific position in the contract layer"),(0,r.kt)("li",{parentName:"ol"},"Locate which level of the contract is when a contract calling another contract"))),(0,r.kt)("li",{parentName:"ol"},"Analyze the information during the execution of the contract at this timing:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Analyze the consumption of gas execution"),(0,r.kt)("li",{parentName:"ol"},"Analyze the call of ",(0,r.kt)("inlineCode",{parentName:"li"},"get_storage")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"set_storage"),", help reconstruct the contract code and analyze the demand of ",(0,r.kt)("inlineCode",{parentName:"li"},"rent")),(0,r.kt)("li",{parentName:"ol"},"According to ",(0,r.kt)("inlineCode",{parentName:"li"},"selector"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"args")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),", analyze and locate whether the transaction parameters of the third-party SDK are legal."),(0,r.kt)("li",{parentName:"ol"},"Analyze the execution path of the contract and adjust the contract based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"nest")," information and combined with the ",(0,r.kt)("inlineCode",{parentName:"li"},"seal_call")," information."),(0,r.kt)("li",{parentName:"ol"},"etc.")))),(0,r.kt)("p",null,"The process of recording ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts")," executing contract to ",(0,r.kt)("inlineCode",{parentName:"p"},"NestEdRuntime")," is relatively fine-grained.\nThe process of logging the information of the execution contract of ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"NestEdRuntime")," is relatively fine-grained. Take ",(0,r.kt)("inlineCode",{parentName:"p"},"seal_call")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"define_env!")," as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct SealCall {\n    callee: Option<HexVec>,\n    gas: u64,\n    value: Option<u128>,\n    input: Option<HexVec>,\n    output: Option<HexVec>,\n}\n")),(0,r.kt)("p",null,"The attributes are basically ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<>"),". For example, before calling the contract, the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Some"),", and the return value will be set after the calling contract is normal. If there is an error in the calling contract, then ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," will remain ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),". Therefore, if ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Some")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", it means that there is a problem with the called contract during the process of calling the contract."),(0,r.kt)("p",null,"The current information of ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," is only printed in the log. ",(0,r.kt)("strong",{parentName:"p"},"In the future, ",(0,r.kt)("inlineCode",{parentName:"strong"},"NestedRuntime")," will be stored locally and provide corresponding RPC for external access"),". Therefore, in the future, third-party applications can obtain ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime")," for further processing. For example, in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Redspot"),", a plug-in can be designed to generate a contract call another contract topology based on the information of ",(0,r.kt)("inlineCode",{parentName:"p"},"NestedRuntime"),", and a visual contract call path can be generated on the web wallet interface, etc."),(0,r.kt)("h2",{id:"on-wasmtime-layer"},"On ",(0,r.kt)("inlineCode",{parentName:"h2"},"wasmtime")," Layer"),(0,r.kt)("p",null,"Currently, europa use wasmtime for execution. And wasmtime support to record the backtrace. europa collects them and record in local."),(0,r.kt)("h2",{id:"contract-log-functions"},"Contract Log functions"),(0,r.kt)("p",null,"In the process of contract debugging, you need to know the internal execution of the contract and the intermediate data. Currently, due to lack of debugging conditions (such as using gdb for debugging), log printing is the most convenient way. As mentioned in the Europa v0.2 proposal, the current ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," already support ",(0,r.kt)("inlineCode",{parentName:"p"},"format!"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"seal_println")," to format and print strings, but this mode has two defects :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All the logs of ",(0,r.kt)("inlineCode",{parentName:"li"},"seal_println")," printed on the node side are ",(0,r.kt)("inlineCode",{parentName:"li"},"target: runtime")," and level ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG"),", but when developing complex contracts, a lot of logs will be printed. If you cannot filter by ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," and log level, then the development process will be full of interference from irrelevant information."),(0,r.kt)("li",{parentName:"ol"},"The contract developer wrote ",(0,r.kt)("inlineCode",{parentName:"li"},"seal_println")," when needed during the development process, but all ",(0,r.kt)("inlineCode",{parentName:"li"},"seal_println")," must be deleted when the contract is released. Although the contract developer can encapsulate a conditionally compiled function to control it, it is more convenient if a tool library already provides such a function.")),(0,r.kt)("p",null,"Therefore, Europa provides a log library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/ink-log"},"patractlabs/ink-log")," that mimics Rust's ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," crete to solve the above problems. Its usage is the same as that of Rust. ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," is completely consistent, which reduces the learning cost of developers."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ink-log")," is generally implemented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainExtension")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet contracts"),", the agreed ",(0,r.kt)("inlineCode",{parentName:"p"},"function_id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"0xfeffff00"),", and the message is transmitted in the wasm memory through the structure ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerExt"),". Therefore this library is divided into the following two parts:"),(0,r.kt)("h3",{id:"ink_log"},(0,r.kt)("inlineCode",{parentName:"h3"},"ink_log"),":"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"ink-log/contracts")," directory, provide ",(0,r.kt)("inlineCode",{parentName:"p"},"info!"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"debug!"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn!"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error!"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trace!"),", same as Rust's ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," library in the same macro, and the call method of the macro is also the same. These macros are packaged implementations of ",(0,r.kt)("inlineCode",{parentName:"p"},"seal_chain_extensions")," on the ink! side, and are ",(0,r.kt)("strong",{parentName:"p"},"tool library for contract developers"),". For example, after this library is introduced in the contract ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),", the log can be printed as follows:"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cargo"},'[dependencies]\nink_log = { version = "0.1", git = "https://github.com/patractlabs/ink-log", default-features = false, features = ["ink-log-chain-extensions"] }\n\n[features]\ndefault = ["std"]\nstd = [\n # ...\n "ink_log/std"\n]\n')),(0,r.kt)("p",null,"In the contract, you can use the following methods to print logs in the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'ink_log::info!(target: "flipper-contract", "latest value is: {}", self.value);\n')),(0,r.kt)("h3",{id:"runtime_log"},(0,r.kt)("inlineCode",{parentName:"h3"},"runtime_log"),":"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"ink-log/runtime")," directory, this library is based on the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"function_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerExt")," structures passed from ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainExtensions")," to call the corresponding logs under ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"frame_support")," to print. It is an implementation library of ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_log")," prepared for developers of the chain. **For example, chain developers can use it in their own ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainExtensions"),":"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nruntime_log = { version = "0.1", git = "https://github.com/patractlabs/ink-log", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n# ...\n"runtime_log/std"\n]\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainExtensions"),"'s implementation\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CustomExt;\nimpl ChainExtension for CustomExt {\n   fn call<E: Ext>(func_id: u32, env: Environment<E, InitState>) -> Result<RetVal, DispatchError>\n      where\n              <E::T as SysConfig>::AccountId: UncheckedFrom<<E::T as SysConfig>::Hash> + AsRef<[u8]>,\n   {\n      match func_id {\n         ... => {/* other ChainExtension */ }\n         0xfeffff00 => {\n            // TODO add other libs\n            runtime_log::logger_ext!(func_id, env);\n            // or use\n            // LoggerExt::call::<E>(func_id, env)\n            Ok(RetVal::Converging(0))\n         }`europa_forwardToHeight`\n      }\n   }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ink_log")," corresponds to ",(0,r.kt)("inlineCode",{parentName:"strong"},"runtime_log"),", so if contract developers need to use ",(0,r.kt)("inlineCode",{parentName:"strong"},"ink_log"),", they need to pay attention to the chain corresponding to the debugging contract that needs to implement ",(0,r.kt)("inlineCode",{parentName:"strong"},"runtime_log"),". ")),(0,r.kt)("p",null,"On the other hand, after contract developers introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_log"),", they need to pay attention to ",(0,r.kt)("inlineCode",{parentName:"p"},'features = ["ink-log-chain-extensions"]'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_log")," will call ",(0,r.kt)("inlineCode",{parentName:"p"},"seal_chain_extensions")," to interact with the chain only when this feature is enabled. Without this feature, ",(0,r.kt)("inlineCode",{parentName:"p"},"noop")," will be used to skip the process of contract printing."),(0,r.kt)("p",null,"Therefore, contract developers can control the contract to print logs in the debugging environment and the production environment through features. The contract compiled in the debugging environment opens the ",(0,r.kt)("inlineCode",{parentName:"p"},'"ink-log-chain-extensions"')," feature, and the contract compiled in the production environment removes this feature."),(0,r.kt)("p",null,"For detailed usage examples, please check ",(0,r.kt)("a",{parentName:"p",href:"/substrate-contracts-book/en/europa/extensions/custom-chain-extensions"},"Custom ChainExtensions")))}u.isMDXComponent=!0}}]);