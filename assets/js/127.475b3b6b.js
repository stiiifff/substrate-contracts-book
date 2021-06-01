(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{651:function(t,s,a){"use strict";a.r(s);var e=a(6),p=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redspot-known-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redspot-known-types"}},[t._v("#")]),t._v(" @redspot/known-types")]),t._v(" "),a("p",[t._v("redspot known types 是一个自动添加已知的链的 types 的插件。")]),t._v(" "),a("p",[t._v("在 polkadot 中，添加 types 是很麻烦的事，因为必须手动添加，而不能自动生成。而且有时候也要处理不同链的版本的兼容性问题。redspot known types 的目的就是为了解决不同链的 types 的问题。")]),t._v(" "),a("p",[t._v("大部分链都在 polkadot apps 上提交过 types，所有 types 定义都在 "),a("code",[t._v("@polkadot/apps-config")]),t._v(" 这个 npm 包里面。所以我们会部分引用"),a("code",[t._v("@polkadot/apps-config")]),t._v(" 中的 types 定义。但 "),a("code",[t._v("@polkadot/apps-config")]),t._v(" 缺少开发环境的 types 定义。然后我们会手动补这一部分。目前支持的链有  Canvas, Jupiter, Europa，Edgeware, Plasm, Clover。")]),t._v(" "),a("p",[t._v("安装依赖：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @redspot/known-types\n")])])]),a("p",[t._v("然后在 "),a("code",[t._v("redspot.config")]),t._v(" 文件中，引入插件：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@redspot/known-types"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("现在尝试连接 Canvas, Jupiter, Europa 等链的网络，无需添加额外的 types 配置。")])])}),[],!1,null,null,null);s.default=p.exports}}]);