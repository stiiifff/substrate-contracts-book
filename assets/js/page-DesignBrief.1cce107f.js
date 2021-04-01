(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{565:function(e,t,i){"use strict";i.r(t);var a=i(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"design-brief"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-brief"}},[e._v("#")]),e._v(" Design Brief")]),e._v(" "),i("p",[e._v("Elara has long-term development iteration planning and operation and maintenance goals, in order to be able to support the continuous transition of Polkadot ecological developers from the 10,000+ level to the 100 million+ level. The core of Elara is a set of high-performance, high-availability and high-scalability distributed architecture. It is significantly different from other projects that provide Node API Service:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Elara's back-end architecture is not a simple but inefficient NodePool+LoadBalancer. This solution cannot bear the impact of large-scale applications and traffic, and cannot be expanded in time, because Node will become a significant bottleneck in the system. In Elara's architecture, only a small number of Nodes are required to provide basic data sources. Elara supports the access of a large number of users through the design of distributed architecture, the integration of multiple services, and the ultimate optimization of request access paths. The short-term development cost of the NodePool solution is low, but the unit cost of long-term service to users is extremely high. Conversely, Elara’s initial investment in technology costs is relatively high, but in the long term it can greatly reduce the unit cost of serving users, while also ensuring high service quality.")])]),e._v(" "),i("li",[i("p",[e._v('Elara focuses on providing a minimalist full-featured experience for ecological developers. What we provide is an extremely "thin" layer of service, and we hope that developers will not feel the existence of Elara. The API service provided by Elara not only includes all the functions of the node, but also includes the historical status data function, but also includes the project\'s request statistics dashboard and other functions. The service capabilities provided to developers are far greater than the capabilities provided by the deployment of nodes by themselves. Therefore, under this goal, functions such as "one-click node deployment" are very redundant, and developers should only focus on their own business applications.')])]),e._v(" "),i("li",[i("p",[e._v("Elara is an open platform, upholding the principle of community building. In the next iteration of the version, we will continue to access more mainnets and establish a set of process specifications for the automatic access of the Polkadot ecological main chain and parachain.")])])]),e._v(" "),i("p",[e._v("In terms of overall design, Elara is designed as a microservice architecture system consisting of multiple microservices that can be independently extended. All microservices run as independent processes after they are started, so in the future, individual microservices can be upgraded in parallel, such as expansion, reconstruction, replacement implementation, and so on. Among them, "),i("code",[e._v("Redis")]),e._v(" is used as a storage container for high-speed data access, and is decoupled from the use of "),i("code",[e._v("kafka")]),e._v(" for architecture. In the future, it will be easy to add more complex functional modules based on this design to let Elara play a more powerful effect.")]),e._v(" "),i("p",[e._v("The core architecture of Elara is roughly as follows")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://user-images.githubusercontent.com/21072025/111115173-35923280-859f-11eb-8172-737c07aab4e7.png",alt:"elara"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);