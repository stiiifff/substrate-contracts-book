"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[1664],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Europa's Wasm Backtrace",s={unversionedId:"europa/guides/backtrace",id:"europa/guides/backtrace",isDocsHomePage:!1,title:"Europa's Wasm Backtrace",description:"Background Information",source:"@site/docs/europa/guides/backtrace.md",sourceDirName:"europa/guides",slug:"/europa/guides/backtrace",permalink:"/substrate-contracts-book/europa/guides/backtrace",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/europa/guides/backtrace.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Europa contract execution log",permalink:"/substrate-contracts-book/europa/guides/contract-log"},next:{title:"Europa debugging example",permalink:"/substrate-contracts-book/europa/guides/debug-example"}},p=[{value:"Background Information",id:"background-information",children:[]},{value:"The conditins of Europa can print out Wasm Backtrace",id:"the-conditins-of-europa-can-print-out-wasm-backtrace",children:[]},{value:"Install <code>cargo-contract</code> under Patract repository",id:"install-cargo-contract-under-patract-repository",children:[]},{value:"Use Patract&#39;s cargo-contract to generate<code>*.wasm/*.contract</code>files with<code>name section</code>section",id:"use-patracts-cargo-contract-to-generatewasmcontractfiles-withname-sectionsection",children:[]},{value:"Wasm Backtrace description",id:"wasm-backtrace-description",children:[]},{value:"Experimental functions",id:"experimental-functions",children:[{value:"Wasm Backtrace print line number (only Wasmtime is supported)",id:"wasm-backtrace-print-line-number-only-wasmtime-is-supported",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"europas-wasm-backtrace"},"Europa's Wasm Backtrace"),(0,o.kt)("h2",{id:"background-information"},"Background Information"),(0,o.kt)("p",null,"The execution of ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," includes execution in the contract model and execution in Wasm. The execution process in the contract model is transferred to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," module through Wasm's host_function. If panic or incorrect positioning occurs, the runtime of the node can be positioned in the form of native operation. Since the execution process in Wasm is in the Wasm virtual machine, it is a black box to the outside world. If the internal execution process crashes abnormally, it can only be displayed by the Wasm executor."),(0,o.kt)("p",null,"Europa's ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," module currently supports the following two types of actuators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wasmi"),": Wasm interpreter developed by the Parity. When Wasm executes panic, it will only return an error without Backtrace. Patract forks the official wasmi, and adds tracking and printing of the execution stack on top of the original. When a panic occurs during Wasm's execution, the current execution stack and corresponding information will be returned with an error."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wasmtime"),": Wasm's JIT executor, which comes with Backtrace when it crashes.")),(0,o.kt)("h2",{id:"the-conditins-of-europa-can-print-out-wasm-backtrace"},"The conditins of Europa can print out Wasm Backtrace"),(0,o.kt)("p",null,"Wasm can print Backtrace, requiring the ",(0,o.kt)("inlineCode",{parentName:"p"},"name section")," in the Wasm file compiled by the contract. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," provided by Parity encapsulated many operations, the current default operation is to compile the contract in the best optimized way, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"name section")," section will be removed in this process. On the other hand, cargo-contract does not provide corresponding interfaces or options that allow you to adjust the optimization conditions used in contract compilation and whether to retain some debugging information. Therefore, Patract can only provide a modified version of cargo-contract, and you can use this modified version of cargo-contract to compile a contract Wasm file with a name section."),(0,o.kt)("p",null,"On the other hand, the original code will be optimized during the compilation of the release, and it may be disturbed to locate the problem through the optimized Backtrace. Therefore, it is best to reduce the optimization level so that the Backtrace at the time of a crash will most likely match the original code."),(0,o.kt)("h2",{id:"install-cargo-contract-under-patract-repository"},"Install ",(0,o.kt)("inlineCode",{parentName:"h2"},"cargo-contract")," under Patract repository"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/cargo-contract"},"cargo-contract")," under Patract repository.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.12.1 --force\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," Since the current version of Parity's ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.12.1")," , our Patract has added features based on this version. If ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," continues to be upgraded in the future, Patract will continue to be maintained."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," installed in this way will overwrite the installed ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),". Therefore, please pay attention to which repository the ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," in the current environment comes from to prevent interference when locating problems."),(0,o.kt)("p",null,"Execute the following command\uff0cThe results listed can be used to judge what source the ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," installation in the current environment comes from. For example, the following result is from Patract. If there is no parenthesis and the content in it, it means it is from ",(0,o.kt)("inlineCode",{parentName:"p"},"crates.io"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo install --list | grep cargo-contract\ncargo-contract v0.12.1 (https://github.com/patractlabs/cargo-contract.git?branch=tag-v0.12.1#0d682762):\ncargo-contract\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have installed the official ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo-contract "),"and does not want to overwrite the installation, you can use manual compilation.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/patractlabs/cargo-contract --branch=tag-v0.12.1\n$ cd cargo-contract\n$ cargo build --release\n")))),(0,o.kt)("p",null,"After compilation, you can move the compiled product to any path that can be accessed globally, and rename it ,in case it conflicts with the installed cargo-contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cp target/release/cargo-contract <to any path>/patract-cargo-contract\n")),(0,o.kt)("p",null,"In the subsequent compilation of the ink! contract, use ",(0,o.kt)("inlineCode",{parentName:"p"},"patract-cargo-contract xxx")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo +nighlty contract xxx")," to execute the corresponding commands,but  this method requires the default toolchain to be nightly)"),(0,o.kt)("h2",{id:"use-patracts-cargo-contract-to-generatewasmcontractfiles-withname-sectionsection"},"Use Patract's cargo-contract to generate",(0,o.kt)("inlineCode",{parentName:"h2"},"*.wasm/*.contract"),"files with",(0,o.kt)("inlineCode",{parentName:"h2"},"name section"),"section"),(0,o.kt)("p",null,"Patract's ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," provides ",(0,o.kt)("inlineCode",{parentName:"p"},"-d/--debug")," options. When the following command is executed,The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasm/*.contract")," file is consistent with parity's official ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," execution result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo +nightly contract build\n")),(0,o.kt)("p",null,"When the following command is executed,The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasm/*.contract")," file is the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasm/*.contract")," file that is not optimized and carries the ",(0,o.kt)("inlineCode",{parentName:"p"},"name section")," section. It is equivalent to the files generated in this way replace the files generated by the original generation logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo +nightly contract build --debug\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The size of the compiled product generated by this way is generally several hundred times the size of the original product. Therefore, the developer can pay attention to the size of the generated product to roughly determine the compiled product generated by which compilation method."),(0,o.kt)("p",null,"The example is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd target/ink\n$ ls -h\n-rw-rw-r-- 1 root root 1.5M 3\u6708  12 16:01 flipper.contract\n-rw-rw-r-- 1 root root 6.1K 3\u6708  12 15:34 flipper.contract.old\n-rw-rw-r-- 1 root root 732K 3\u6708  12 16:00 flipper.wasm\n-rw-rw-r-- 1 root root 2.5K 3\u6708  12 15:34 flipper.wasm.old\n-rw-rw-r-- 1 root root 2.1K 3\u6708  12 16:01 metadata.json\n")),(0,o.kt)("p",null,"The file with ",(0,o.kt)("inlineCode",{parentName:"p"},"*.old")," means it was generated by the parity version of ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"( renamed after the first compilation), on the contrary, the file with the same name is from Patract's ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," with the addition of ",(0,o.kt)("inlineCode",{parentName:"p"},"-- The debug")," command is generated. You can see that the new file is many times larger than the old file. And ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.json")," is unchanged."),(0,o.kt)("h2",{id:"wasm-backtrace-description"},"Wasm Backtrace description"),(0,o.kt)("p",null,"To be completed."),(0,o.kt)("h2",{id:"experimental-functions"},"Experimental functions"),(0,o.kt)("h3",{id:"wasm-backtrace-print-line-number-only-wasmtime-is-supported"},"Wasm Backtrace print line number (only Wasmtime is supported)"),(0,o.kt)("p",null,"TODO: This part is not completed"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"WASMTIME_BACKTRACE_DETAILS=1")," when starting Europa or set this variable as an environment variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"WASMTIME_BACKTRACE_DETAILS=1 europa --tmp\n# or use\nexport WASMTIME_BACKTRACE_DETAILS=1\neuropa --tmp # run europa in normal way\n")),(0,o.kt)("p",null,"Then in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm_error")," section of Europa's log, the line number in the original code corresponding to the crash stack will appear."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wasm_error: Error::Trap(\n    Trap {\n        code: TrapCode::UnreachableCodeReached,\n        trace: [\n            "wasm trap: unreachable",\n            "wasm backtrace:",\n            "    0: 0x31b2 - <unknown>!core::panicking::panic::he000af669cfcac01",\n            "    1: 0x3c8c - <unknown>!flipper::flippter::_::<impl flipper::flippter::Flippter>::flip::h12b84979a77ae484",\n            "    2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4",\n            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/\u5b98\u65b9-scale-codec-2.0.1/src/codec.rs:1199:31",\n            "    3: 0x10d6 - core::result::Result<T,E>::map_err::h576871030fe833d4",\n            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/\u5b98\u65b9-scale-codec-2.0.1/src/codec.rs:1198",\n            "    4: 0x3966 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}::hf35b139aaf5fba3b",\n            "    5: 0x3941 - <unknown>!ink_lang::dispatcher::execute_message_mut::hf62eb790d230d371",\n            "    6: 0x3c12 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::heae3e5bbfc02afa0",\n            "    7: 0x3a7a - <unknown>!flipper::flippter::_::<impl ink_lang::contract::DispatchUsingMode for flipper::flippter::Flippter>::dispatch_using_mode::h8e0c4495e09cd910",\n            "    8: 0x3ba3 - <unknown>!call",\n            "    9: 0xf704 - <unknown>!<wasm function 638>",\n            "",\n        ],\n    },\n),\n')),(0,o.kt)("p",null,"In this backtrace log, some parts that can parse the line number will be appended with the line number corresponding to the function in the error stack at the end of that line,The example is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4",\n            "                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"codec.rs:1199:31")," part means that this frame in the error stack corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"codec.rs"),". The line number of the file is 1199 and the column number is 31. The remaining lines do not have line numbers due to insufficient parsing or because the code is generated by macros."))}d.isMDXComponent=!0}}]);