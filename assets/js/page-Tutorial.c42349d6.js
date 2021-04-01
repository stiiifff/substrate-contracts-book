(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{552:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),a("p",[t._v("Elara的API需要有效的Project Endpoint包含在您的请求中。此标识符应附加到请求URL。")]),t._v(" "),a("h2",{attrs:{id:"获取your-project-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取your-project-endpoint"}},[t._v("#")]),t._v(" 获取YOUR-PROJECT-ENDPOINT")]),t._v(" "),a("p",[t._v("1.使用您的github帐户登录"),a("a",{attrs:{href:"https://elara.patract.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elara官方网站"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("2.进入"),a("a",{attrs:{href:"https://elara.patract.io/#/dashboard/console",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elara Dashboard"),a("OutboundLink")],1),t._v("，单击以选中左侧边栏中的主链。")]),t._v(" "),a("p",[t._v("3.单击右上角的“创建新项目”按钮，在弹出对话框中输入“ PROJECT-NAME”，然后单击“确定”。如果一切正常，您将看到一条消息，说明该项目已成功创建。")]),t._v(" "),a("p",[t._v("4.在项目列表中，单击项目以进入项目详细信息页面\n-有一列信息显示“ PID”，一串长度为32的字符和数字，即项目的“ YOUR-PROJECT-ID”\n-有一列显示“ ENDPOINTS”的信息，包括访问ENDPOINT的“ https”和“ wss”。那就是项目的“ YOUR-PROJECT-ENDPOINT”")]),t._v(" "),a("h2",{attrs:{id:"发出请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发出请求"}},[t._v("#")]),t._v(" 发出请求")]),t._v(" "),a("p",[t._v("使用这些ENDPOINT之一作为您的客户端程序的Provider。")]),t._v(" "),a("p",[t._v("*注意：请务必将YOUR-PROJECT-ENDPOINT替换为Elara仪表板中的Project Endpoint *")]),t._v(" "),a("ul",[a("li",[t._v("方法1：curl发送HTTP请求：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#curl http\ncurl --location --request POST \'https://YOUR-PROJECT-ENDPOINT\' \\\n    --header \'Content-Type: application/json\' \\\n    --data-raw \'{\n        "id":1,\n        "jsonrpc":"2.0",\n        "method":"chain_getBlock",\n        "params":[]\n    }\'\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ul",[a("li",[t._v("方法2：使用wscat发送websocket请求：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('parachain@ubuntu:~/elara$ wscat  -c wss://YOUR-PROJECT-ENDPOINT\nConnected (press CTRL+C to quit)\n> {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}\n< {"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b901ac96e7601"],"header":{"digest":{"logs":["0x066175726120dfcdf90f00000000","0x05617572610101acb2a4725f0f8945593cea6aa6ef70df2a8fd4a2c4eb1c0d1bf51828f26e371f897473113541f9c0d9f94e51471a3d685a86866a12133ea012d2777bb9709589"]},"extrinsicsRoot":"0xcca5112546305b07d904c2aa26155dffe6c66de043708e1ac89e57609fbcc6d1","number":"0x17922","parentHash":"0xdb798a19707ef9085b97d0b00854c613ae4abdb560e2ea1164f2e7bbfbc288a1","stateRoot":"0xdc575fe975067ded933020df9035db0e496143e6b9a062a4313fd1f6e9d02922"}},"justification":null},"id":1}\n> \n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("方法3：使用SDK")])]),t._v(" "),a("p",[t._v("您可以参考polkadot-js，使用以下类似代码通过Https或Websocket访问节点：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const { ApiPromise, WsProvider } = require('@polkadot/api');\nconst { HttpProvider } = require('@polkadot/rpc-provider');\n\n(async function () {\n// Http\nconst httpProvider = new HttpProvider('https://YOUR-PROJECT-ENDPOINT')\nconst hash = await httpProvider.send('chain_getBlockHash', [])\nconsole.log('latest block Hash', hash)\n\n// Websocket\nconst wsProvider = new WsProvider('wss://YOUR-PROJECT-ENDPOINT')\nconst api = await ApiPromise.create({ provider: wsProvider })\n//Do something\n\n})()\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("请务必注意，JSON-RPC请求与传输无关，可以通过HTTPS，Websockets发出相同的请求。")])])}),[],!1,null,null,null);s.default=n.exports},567:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),a("p",[t._v("Elara's API requires a valid Project Endpoint to be included in your request. This identifier should be appended to the request URL.")]),t._v(" "),a("h2",{attrs:{id:"get-your-project-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-your-project-endpoint"}},[t._v("#")]),t._v(" Get YOUR-PROJECT-ENDPOINT")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Use your github account to log in "),a("a",{attrs:{href:"https://elara.patract.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elara official website"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Enter "),a("a",{attrs:{href:"https://elara.patract.io/#/dashboard/console",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elara Dashboard"),a("OutboundLink")],1),t._v(", click to select the main chain in the left sidebar.")])]),t._v(" "),a("li",[a("p",[t._v('Click the "Create New Project" button in the upper right corner, enter "PROJECT-NAME" in the pop-up dialog box, and then click "OK". If everything is ok, you will see a message stating that the project has been successfully created.')])]),t._v(" "),a("li",[a("p",[t._v('In the project list, click the project to enter the project details page\n-There is a list of information showing "PID", a string of characters and numbers with a length of 32, which is the "YOUR-PROJECT-ID" of the project\n-There is a column that displays "ENDPOINTS" information, including "https" and "wss" for accessing ENDPOINT. That is the "YOUR-PROJECT-ENDPOINT" of the project')])])]),t._v(" "),a("h2",{attrs:{id:"make-a-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-request"}},[t._v("#")]),t._v(" Make a request")]),t._v(" "),a("p",[t._v("Use one of these ENDPOINT as the provider of your client program.")]),t._v(" "),a("p",[a("em",[t._v("Note: Please be sure to replace YOUR-PROJECT-ENDPOINT with Project Endpoint in the Elara dashboard")])]),t._v(" "),a("ul",[a("li",[t._v("Method 1: curl sends an HTTP request:")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#curl http")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --location --request POST"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://YOUR-PROJECT-ENDPOINT'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --header"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --data-raw"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        "id":1,\n        "jsonrpc":"2.0",\n        "method":"chain_getBlock",\n        "params":[]\n    }\'')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ul",[a("li",[t._v("Method 2: Use wscat to send websocket request:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('parachain@ubuntu:~/elara$ wscat -c wss://YOUR-PROJECT-ENDPOINT\nConnected (press CTRL+C to quit)\n> {"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":[]}\n<{"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b901ac96e7601"],"header":{"digest":{"logs":["0x066175726120dfcdf90f00000000"," 0x05617572610101acb2a4725f0f8945593cea6aa6ef70df2a8fd4a2c4eb1c0d1bf51828f26e371f897473113541f9c0d9f94e51471a3d685a86866a12133ea012d2777bb9709589 "]}," extrinsicsRoot ":" 0xcca5112546305b07d904c2aa26155dffe6c66de043708e1ac89e57609fbcc6d1 "," number ":" 0x17922 "," parentHash ":" 0xdb798a19707ef9085b97d0b00854c613ae4abdb560e2ea1164f2e7bbfbc288a1 "," stateRoot ":" 0xdc575fe975067ded933020df9035db0e496143e6b9a062a4313fd1f6e9d02922 "}}," justification ": null}," id ": 1}\n>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("Method 3: Use SDK")])]),t._v(" "),a("p",[t._v("You can refer to polkadot-js and use the following similar code to access the node through Https or Websocket:")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ApiPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WsProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HttpProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/rpc-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Http")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" httpProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://YOUR-PROJECT-ENDPOINT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" httpProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chain_getBlockHash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'latest block Hash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Websocket")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wsProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://YOUR-PROJECT-ENDPOINT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ApiPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wsProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Do something")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("It is important to note that JSON-RPC requests have nothing to do with transmission, and the same request can be made via HTTPS and Websockets.")])])}),[],!1,null,null,null);s.default=n.exports}}]);