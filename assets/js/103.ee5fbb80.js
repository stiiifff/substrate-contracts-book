(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{629:function(a,t,s){"use strict";s.r(t);var r=s(6),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"europa-的wasm-backtrace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#europa-的wasm-backtrace"}},[a._v("#")]),a._v(" Europa 的Wasm Backtrace")]),a._v(" "),s("p",[s("code",[a._v("pallet-contracts")]),a._v("的执行包含“合约模型”中的执行与Wasm中的执行。其中")]),a._v(" "),s("ul",[s("li",[a._v("合约模型中的执行过程通过Wasm的 host_function 转移到了 "),s("code",[a._v("pallet-contracts")]),a._v(" 模块中执行，若出现panic或者错误定位可以让节点的runtime以Native运行的形式来定位。")]),a._v(" "),s("li",[a._v("Wasm 中的执行过程由于处于Wasm虚拟机中，因此对于外界而言是黑盒，若内部执行过程出现了崩溃异常，只能由Wasm执行器对外展示。")])]),a._v(" "),s("p",[a._v("Europa 的 "),s("code",[a._v("pallet-contracts")]),a._v(" 模块当前支持2种执行器：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("wasmi")]),a._v("：由parity研发的Wasm解释器，当Wasm执行出现panic时只会返回错误，没有Backtrace。Patract fork 了parity的wasmi，在原基础上添加了执行栈的跟踪与打印。当Wasm的执行过程出现Panic的时候，将当前的执行栈及相应信息通过错误一并返回。")]),a._v(" "),s("li",[s("code",[a._v("wasmtime")]),a._v("：Wasm的JIT执行器，已经自带了执行崩溃时的Backtrace。")])]),a._v(" "),s("h2",{attrs:{id:"europa-能打印出-wasm-backtrace-的条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#europa-能打印出-wasm-backtrace-的条件"}},[a._v("#")]),a._v(" Europa 能打印出 Wasm Backtrace 的条件")]),a._v(" "),s("p",[a._v("Wasm能够打印Backtrace，要求合约编译出的Wasm文件里有“name section”段。由于parity提供的"),s("code",[a._v("cargo-contract")]),a._v("已经封装了许多操作，因此"),s("strong",[a._v("在当前")]),a._v("其默认操作中是以最优优化方式去编译合约，在这个过程中会去除掉“name section”段。另一方面"),s("code",[a._v("cargo-contract")]),a._v("也没有提供对应的接口或选项允许开发者调整合约编译使用的优化条件及是否保留一些调试信息。因此Patract只能提供一个修改版本的"),s("code",[a._v("cargo-contract")]),a._v("，开发者使用这个修改版的"),s("code",[a._v("cargo-contract")]),a._v("可编译出携带“name section”段的合约Wasm文件。")]),a._v(" "),s("p",[a._v("另一方面release的编译中会对原代码有优化，通过优化后的Backtrace来定位bug有可能会受到干扰，因此最好能降低优化等级，这样崩溃时的Backtrace才会最大可能性和原代码相匹配。")]),a._v(" "),s("h2",{attrs:{id:"安装-patract-仓库下的cargo-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-patract-仓库下的cargo-contract"}},[a._v("#")]),a._v(" 安装 Patract 仓库下的"),s("code",[a._v("cargo-contract")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装 "),s("a",{attrs:{href:"https://github.com/patractlabs/cargo-contract",target:"_blank",rel:"noopener noreferrer"}},[a._v("PatractLabs's "),s("code",[a._v("cargo-contract")]),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cargo install cargo-contract --git https://github.com/patractlabs/cargo-contract --branch=v0.10.0 --force\n")])])]),s("blockquote",[s("p",[a._v("由于当前 parity 的 "),s("code",[a._v("cargo-contract")]),a._v(" 发布的版本为 "),s("code",[a._v("v0.10.0")]),a._v("，因此我们Patract 基于这个版本添加了功能。若将来"),s("code",[a._v("cargo-contract")]),a._v("继续升级，Patract 也会继续维护。")])]),a._v(" "),s("p",[a._v("通过这种方式安装的 "),s("code",[a._v("cargo-contract")]),a._v(" 将会"),s("strong",[a._v("覆盖")]),a._v("已安装过的的"),s("code",[a._v("cargo-contract")]),a._v("。因此请注意留意当前环境中的"),s("code",[a._v("cargo-contract")]),a._v("来自哪个仓库，以防止定位问题时收到干扰。")]),a._v(" "),s("p",[a._v("执行命令：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" cargo-contract\ncargo-contract v0.10.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("https://github.com/patractlabs/cargo-contract?branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("v0.10.0"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#106081f1):")]),a._v("\ncargo-contract\n")])])]),s("p",[a._v("可通过列出的结果判定当前环境中的"),s("code",[a._v("cargo-contract")]),a._v("安装来自什么源。例如上面的结果即来自Patract。若没有括号及其中的内容则表示来自"),s("code",[a._v("crates.io")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("如果开发者已经安装了官方的"),s("code",[a._v("cargo-contract")]),a._v("并且不想覆盖安装，可以采取手动编译的方式。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/patractlabs/cargo-contract --branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("v0.10.0\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" cargo-contract\n$ cargo build --release\n")])])]),s("p",[a._v("编译好后可以将编译的产物移动到任意可以被全局访问的路径，并重命名（以防和已安装过的cargo-contract冲突）。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" target/release/cargo-contract "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("to any path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/patract-cargo-contract\n")])])]),s("p",[a._v("后续在 ink! 合约的编译过程中则使用 "),s("code",[a._v("patract-cargo-contract xxx")]),a._v(" 替代 "),s("code",[a._v("cargo +nighlty contract xxx")]),a._v(" 执行相应命令。（请注意这种方式要求 default toolchain 为 nightly）")])])]),a._v(" "),s("h2",{attrs:{id:"使用-patract-的-cargo-contract-生成携带-name-section-段的-wasm-contract-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-patract-的-cargo-contract-生成携带-name-section-段的-wasm-contract-文件"}},[a._v("#")]),a._v(" 使用 Patract 的 cargo-contract 生成携带 “name section” 段的 "),s("code",[a._v("*.wasm/*.contract")]),a._v(" 文件")]),a._v(" "),s("p",[a._v("Patract 的 "),s("code",[a._v("cargo-contract")]),a._v(" 提供 "),s("code",[a._v("-d/--debug")]),a._v(" 选项。当执行一下命令时：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ cargo +nightly contract build\n")])])]),s("p",[a._v("生成的"),s("code",[a._v("*.wasm/*.contract")]),a._v(" 文件与parity官方的"),s("code",[a._v("cargo-contract")]),a._v("执行结果一致。")]),a._v(" "),s("p",[a._v("当执行以下命令时：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ cargo +nightly contract build --debug\n")])])]),s("p",[a._v("则生成的"),s("code",[a._v("*.wasm/*.contract")]),a._v(" 文件就是没有经过优化，且携带“name section”段的"),s("code",[a._v("*.wasm/*.contract")]),a._v(" 文件。相当于通过这种方式生成的文件"),s("strong",[a._v("替换")]),a._v("了原本生成逻辑生成的文件。")]),a._v(" "),s("p",[s("strong",[a._v("请注意通过这种模式生成的编译产物，一般情况下其大小是原产物的几百倍")]),a._v("。因此开发者可以留意生成产物的大小粗略判定是通过那种编译方式生成的编译产物。")]),a._v(" "),s("p",[a._v("例如如下示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" target/ink\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -h\n-rw-rw-r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".5M "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(":01 flipper.contract\n-rw-rw-r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(".1K "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(":34 flipper.contract.old\n-rw-rw-r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root 732K "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(":00 flipper.wasm\n-rw-rw-r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(".5K "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(":34 flipper.wasm.old\n-rw-rw-r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(".1K "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(":01 metadata.json\n")])])]),s("p",[a._v("带"),s("code",[a._v("*.old")]),a._v(" 文件表示是由parity版本的"),s("code",[a._v("cargo-contract")]),a._v("生成（第一次编译后重命名过），反之的同名文件是由Patract的"),s("code",[a._v("cargo-contract")]),a._v("并加上了"),s("code",[a._v("--debug")]),a._v("命令生成。可以看到新文件比老文件大许多倍。而"),s("code",[a._v("metadata.json")]),a._v("则是没有变化的。")]),a._v(" "),s("h2",{attrs:{id:"wasm-backtrace-解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wasm-backtrace-解释"}},[a._v("#")]),a._v(" Wasm Backtrace 解释")]),a._v(" "),s("p",[a._v("TODO：待完成")]),a._v(" "),s("h2",{attrs:{id:"实验性功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实验性功能"}},[a._v("#")]),a._v(" 实验性功能")]),a._v(" "),s("h3",{attrs:{id:"wasm-backtrace-打印行号-只支持wasmtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wasm-backtrace-打印行号-只支持wasmtime"}},[a._v("#")]),a._v(" Wasm Backtrace 打印行号（只支持Wasmtime）")]),a._v(" "),s("p",[a._v("TODO：该部分未完成")]),a._v(" "),s("p",[a._v("启动Europa的时候添加"),s("code",[a._v("WASMTIME_BACKTRACE_DETAILS=1")]),a._v("或者将这个变量设置成环境变量：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WASMTIME_BACKTRACE_DETAILS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" europa --tmp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or use")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WASMTIME_BACKTRACE_DETAILS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\neuropa --tmp "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run europa in normal way")]),a._v("\n")])])]),s("p",[a._v("那么在europa的日中的"),s("code",[a._v("wasm_error")]),a._v("部分，将会出现崩溃栈对应原代码中的行号：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("wasm_error: Error::Trap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    Trap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        code: TrapCode::UnreachableCodeReached,\n        trace: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wasm trap: unreachable"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wasm backtrace:"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    0: 0x31b2 - <unknown>!core::panicking::panic::he000af669cfcac01"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    1: 0x3c8c - <unknown>!flipper::flippter::_::<impl flipper::flippter::Flippter>::flip::h12b84979a77ae484"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    3: 0x10d6 - core::result::Result<T,E>::map_err::h576871030fe833d4"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1198"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    4: 0x3966 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::{{closure}}::hf35b139aaf5fba3b"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    5: 0x3941 - <unknown>!ink_lang::dispatcher::execute_message_mut::hf62eb790d230d371"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    6: 0x3c12 - <unknown>!<flipper::flippter::_::_::__ink_MessageDispatchEnum as ink_lang::dispatcher::Execute>::execute::heae3e5bbfc02afa0"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    7: 0x3a7a - <unknown>!flipper::flippter::_::<impl ink_lang::contract::DispatchUsingMode for flipper::flippter::Flippter>::dispatch_using_mode::h8e0c4495e09cd910"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    8: 0x3ba3 - <unknown>!call"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"    9: 0xf704 - <unknown>!<wasm function 638>"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(",\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\n")])])]),s("p",[a._v("在这段backtrace日志中，一些能解析出行号的部分将会在那一行的最后附加错误栈中的函数对应的行号，例如：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2: 0x10fa - core::result::Result<T,E>::map_err::h576871030fe833d4"')]),a._v(",\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"                    at /home/clearloop/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-scale-codec-2.0.1/src/codec.rs:1199:31"')]),a._v("\n")])])]),s("p",[a._v("中的"),s("code",[a._v("codec.rs:1199:31")]),a._v("部分即表示该错误栈中的这一帧对应于"),s("code",[a._v("codec.rs")]),a._v("这个文件的行"),s("code",[a._v("1199")]),a._v("，列"),s("code",[a._v("31")]),a._v("。其余行由于解析还不充分或者是由于代码由宏生成，因此还没有行号。")])])}),[],!1,null,null,null);t.default=e.exports}}]);