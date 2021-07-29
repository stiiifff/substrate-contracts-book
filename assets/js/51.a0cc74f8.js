(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{590:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ask-decorator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ask-decorator"}},[t._v("#")]),t._v(" Ask! decorator")]),t._v(" "),s("p",[t._v("Ask! provides a set of decorators to implement smart contracts and configure the behavior of decorators by passing parameter objects. At present, the decorator is divided into two layers, namely class decorator and field decorator. The field decorator must match the corresponding class decorator correctly. When the used decorator does not add parameters, the parentheses "),s("code",[t._v("()")]),t._v(" can be omitted.")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(" The following decorator designs are only applicable to the current version. Many features are not stable yet and may change in the future.")]),t._v(" "),s("h2",{attrs:{id:"contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract"}},[t._v("#")]),t._v(" @contract")]),t._v(" "),s("p",[t._v("Class decorator")]),t._v(" "),s("p",[t._v("The decorated class will automatically become an instance of the smart contract. Its sub-fields support "),s("code",[t._v("@constructor")]),t._v(" and "),s("code",[t._v("@message")]),t._v(" decorator decoration.")]),t._v(" "),s("p",[t._v("An "),s("code",[t._v("AS")]),t._v(" file can only define one "),s("code",[t._v("@contract")]),t._v(" class.")]),t._v(" "),s("h2",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" @constructor")]),t._v(" "),s("p",[t._v("Field decorator")]),t._v(" "),s("p",[t._v("This decorator is used for the non-static public method of @contract, which does not allow return value ，that is, the return type is "),s("code",[t._v("void")]),t._v(". The decorated method serves as an initial construction method of the contract. A contract needs to define at least one "),s("code",[t._v("@constructor")]),t._v(" method.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("@constructor")]),t._v(" method is executable when the contract is instantiated. A contract can define multiple construction methods, allowing users of the contract to instantiate the contract in many different ways.")]),t._v(" "),s("p",[t._v("The configuration of the contract construction method is always "),s("code",[t._v("payable = true")]),t._v(" and "),s("code",[t._v("mutates = true")]),t._v(".")]),t._v(" "),s("p",[t._v("The example is as follows.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("@contract\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flipper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" stored"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stored")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initFlag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initFlag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"doc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doc"}},[t._v("#")]),t._v(" @doc")]),t._v(" "),s("p",[s("code",[t._v("@doc")]),t._v(" is used to provide documentation for the information generated by "),s("code",[t._v("metadata.json")]),t._v(". It can add documentation comments for "),s("code",[t._v("@contract")]),t._v("/"),s("code",[t._v("@event")]),t._v("/"),s("code",[t._v("@message")]),t._v("/"),s("code",[t._v("@constructor")]),t._v(" declarations.")]),t._v(" "),s("p",[t._v("The example is as follows.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("\n@contract\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("desc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyToken conract that implement erc20 contract"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" @message")]),t._v(" "),s("p",[t._v("Field decorator")]),t._v(" "),s("p",[t._v("This decorator is used for non-static public methods of @contract. The decorated method serves as the message API of the contract for users to call the contract. A contract needs to define at least one "),s("code",[t._v("@constructor")]),t._v(" method or inherit other contracts.")]),t._v(" "),s("h2",{attrs:{id:"storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" @storage")]),t._v(" "),s("p",[t._v("Class decorator")]),t._v(" "),s("p",[t._v("Define a contract storage class. This class should only be used as a field of the "),s("code",[t._v("@contract")]),t._v(" class.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("@message")]),t._v(" method is called when the contract is executed. The contract can define multiple message methods. The return value of the message method will be returned to the user, so the "),s("code",[t._v("Codec")]),t._v(" interface needs to be implemented. If you need to return some collection types, then you need to use some collection types provided by Ask! that implement the "),s("code",[t._v("Codec")]),t._v(" interface.")]),t._v(" "),s("p",[t._v("The default configuration of the contract message method is "),s("code",[t._v("payable = false")]),t._v(" and "),s("code",[t._v("mutates = true")]),t._v(". When the configuration is "),s("code",[t._v("true")]),t._v(", the contract will perform corresponding checks at runtime.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("payable")]),t._v(" indicates that the method can accept value.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("mutates")]),t._v(" indicates whether the method can change the value of the stored variable.")])])]),t._v(" "),s("p",[t._v("The example is as follows.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("@contract\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flipper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" stored"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stored")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initFlag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initFlag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @message\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutates "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stored"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"storage-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-2"}},[t._v("#")]),t._v(" @storage")]),t._v(" "),s("p",[t._v("Class decorator")]),t._v(" "),s("p",[t._v("Define a contract storage class. This class should only be used as a field of the "),s("code",[t._v("@contract")]),t._v(" class.")]),t._v(" "),s("h2",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" @event")]),t._v(" "),s("p",[t._v("Class decorator")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/en/ask/basics.html#Events"}},[t._v("Event")]),t._v(" for details.")],1),t._v(" "),s("h2",{attrs:{id:"topic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topic"}},[t._v("#")]),t._v(" @topic")]),t._v(" "),s("p",[t._v("Field decorator")]),t._v(" "),s("p",[t._v("The attribute field decorated with "),s("code",[t._v("@topic")]),t._v(" will generate an additional topic index. There is a limit to the number of indexes for each event (the default maximum is four).")]),t._v(" "),s("h2",{attrs:{id:"dynamic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic"}},[t._v("#")]),t._v(" @dynamic")]),t._v(" "),s("p",[t._v("Class decorator")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("@dynamic")]),t._v(" decorator is used to decorate the APIs of a contract that already exists on the chain. By declaring the contract interface on the chain in the "),s("code",[t._v("@dynamic")]),t._v(" class, ask will automatically generate the corresponding cross-contract call code.")]),t._v(" "),s("p",[t._v("Assume that the following contract A already exists on the chain.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("@contract\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Libadd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutates "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If you want to call the contract in contract B, you can declare a "),s("code",[t._v("@dynamic")]),t._v(" class to describe its interface.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("@dynamic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Libadd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that the method experience here will be covered by the actual code, this writing is mainly for compiling")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n@contract\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LibaddCaller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutates "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callAddFromExternal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outAddress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AccountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" i32 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outContract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Libadd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outContract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("outAddress")]),t._v("  here is the instance address of contract "),s("code",[t._v("Libadd")]),t._v(".")]),t._v(" "),s("p",[t._v("This function can also call contracts written in other smart contract languages, such as ink!, as long as it follows the compatible metadata.json specification.")])])}),[],!1,null,null,null);a.default=n.exports}}]);