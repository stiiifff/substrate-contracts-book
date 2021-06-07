(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{507:function(s,t,a){s.exports=a.p+"assets/img/ask-design.c43b3f0f.png"},545:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"ask-智能合约编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ask-智能合约编程"}},[s._v("#")]),s._v(" Ask! 智能合约编程")]),s._v(" "),r("p",[s._v("Ask! 是由 Patract 设计的基于 AssemblyScript 编程语言，能运行于"),r("code",[s._v("pallet-contracts")]),s._v("模块上的 Wasm 合约语言框架。")]),s._v(" "),r("p",[s._v("尽管 AssemblyScript 语法只是 TypeScript 语法的一个（非严格）子集，但是目前存在大量使用 TypeScript 作为开发语言的开发人员，因此这些开发人员学习 AssemblyScript 的成本相对低。 因此，Patract 认为 基于 AssemblyScript 的 Ask! 项目具有很好的应用开发前景。与基于 Rust 的 ink! 相比，Patract 认为 Ask! 可以有效降低合同开发者的门槛，吸引 TypeScript 开发者来开发智能合约，使智能合约生态系统更加丰富。")]),s._v(" "),r("p",[s._v("Ask! 实现方式类似于 ink! 采取 rust 宏设计，通过 eDSL 来实现智能合约。通过在 AssemblyScript （后文称作 AS）中编写编译器 Transform 来提供自定义的装饰器（在其他语言也称为注解），在 AS 的语法基础上提供了能适用于"),r("code",[s._v("pallet-contracts")]),s._v("合约模型上的功能。通过注解的这种实现方式，尽量隐藏了与合约相关的细节。另一方面 Ask! 的实现将借鉴部分 ink! 的思路，力图在最终实现上将会"),r("strong",[s._v("最大程度保证与 ink! 合约的兼容")]),s._v("。")]),s._v(" "),r("blockquote",[r("p",[s._v("例如：\nink! 描述合约的外部调用接口采用 "),r("code",[s._v("#[ink(constructor)]")]),s._v(", "),r("code",[s._v("#[ink(message)]")]),s._v(" 对合约结构体的方法进行修饰。\n在 Ask! 中，将会采用 "),r("code",[s._v("@constructor")]),s._v("，"),r("code",[s._v("@message")]),s._v(" 等装饰器来装饰智能合约类定义的方法来实现类似的功能。")])]),s._v(" "),r("h2",{attrs:{id:"ask-编译运作方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ask-编译运作方式"}},[s._v("#")]),s._v(" Ask! 编译运作方式")]),s._v(" "),r("p",[s._v("Ask! 通过编写 AssemblyScript 的 transform 来介入编译流程，如下：")]),s._v(" "),r("p",[r("img",{attrs:{src:a(507),alt:"ask-design"}})]),s._v(" "),r("h2",{attrs:{id:"ask-开发进度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ask-开发进度"}},[s._v("#")]),s._v(" Ask! 开发进度")]),s._v(" "),r("p",[r("strong",[s._v("Ask! 当前还在开发当中，当前只完成了 Kusama 财政议案的 v0.2 版。当前的很多设计将来都有可能发生不兼容性改变。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);