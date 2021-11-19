"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[2457],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3141:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={},s="Report for zkMega v0.1\uff08original Megaclite v0.1 )",p={unversionedId:"zkmega/reports/v0.1Report",id:"zkmega/reports/v0.1Report",isDocsHomePage:!1,title:"Report for zkMega v0.1\uff08original Megaclite v0.1 )",description:"5 weeks ago, Patract Hub applied a treasury proposal #24 for Megaclite v0.1. Megaclite project will be dedicated to introducing basic zero-knowledge proof underlying support for the Polkadot ecology, so that developers can easily develop applications at the upper level through Wasm smart contracts or Runtime.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/zkmega/reports/v0.1Report.md",sourceDirName:"zkmega/reports",slug:"/zkmega/reports/v0.1Report",permalink:"/substrate-contracts-book/en/zkmega/reports/v0.1Report",editUrl:"https://github.com/patractlabs/substrate-contracts-book/edit/master/docs/zkmega/reports/v0.1Report.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Report for zkMega proposals",permalink:"/substrate-contracts-book/en/zkmega/reports"},next:{title:"Report for zkMega v0.2\uff08original Megaclite v0.2 )",permalink:"/substrate-contracts-book/en/zkmega/reports/v0.2Report"}},u=[{value:"1. Recap of Megaclite\u2019s development plan (v0.1 ~ v0.3)",id:"1-recap-of-megaclites-development-plan-v01--v03",children:[]},{value:"2. Support and benchmark basic units in Native layer and Wasm layer.",id:"2-support-and-benchmark-basic-units-in-native-layer-and-wasm-layer",children:[{value:"2.1 Encapsulate crypto units of the four curves from arkworks",id:"21-encapsulate-crypto-units-of-the-four-curves-from-arkworks",children:[]},{value:"2.2 Import Megaclite through host calls in Native layer.",id:"22-import-megaclite-through-host-calls-in-native-layer",children:[]},{value:"2.3 Import Megaclite as Runtime library in Wasm layer",id:"23-import-megaclite-as-runtime-library-in-wasm-layer",children:[]},{value:"2.4 Benchmark of basic units",id:"24-benchmark-of-basic-units",children:[]}]},{value:"3. Provide and benchmark Groth16 Verifier  in ink! layer",id:"3-provide-and-benchmark-groth16-verifier--in-ink-layer",children:[{value:"3.1 Introduction of Groth16 Verification",id:"31-introduction-of-groth16-verification",children:[]},{value:"3.2 Expose Megaclite basic units for ink! contract to call through chain-extension",id:"32-expose-megaclite-basic-units-for-ink-contract-to-call-through-chain-extension",children:[]},{value:"3.3 Call Megaclite basic units in ink! contract to provide Groth16 Verifier",id:"33-call-megaclite-basic-units-in-ink-contract-to-provide-groth16-verifier",children:[]}]},{value:"3.4 Benchmark of Groth16 Verifier",id:"34-benchmark-of-groth16-verifier",children:[]},{value:"4. Conclusion of Native version and Wasm version",id:"4-conclusion-of-native-version-and-wasm-version",children:[]},{value:"5. More library contracts built by ink!",id:"5-more-library-contracts-built-by-ink",children:[{value:"5.1 MiMC-based Merkle Tree",id:"51-mimc-based-merkle-tree",children:[]},{value:"5.2 EdDSA verifier",id:"52-eddsa-verifier",children:[]}]},{value:"5. Recap of verification of Megaclite v0.1",id:"5-recap-of-verification-of-megaclite-v01",children:[]}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"report-for-zkmega-v01\uff08original-megaclite-v01-"},"Report for zkMega v0.1\uff08original Megaclite v0.1 )"),(0,i.kt)("p",null,"5 weeks ago, ",(0,i.kt)("a",{parentName:"p",href:"https://patract.io"},"Patract Hub")," applied a ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/24"},"treasury proposal #24")," for Megaclite v0.1. Megaclite project will be dedicated to introducing basic zero-knowledge proof underlying support for the Polkadot ecology, so that developers can easily develop applications at the upper level through Wasm smart contracts or Runtime. "),(0,i.kt)("p",null,"Now, we have finished all the works of v0.1 and you can review our source code at those repos. We will introduce more details at the following report."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ZKP library: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite"},"https://github.com/patractlabs/megaclite")),(0,i.kt)("li",{parentName:"ul"},"Testnet example: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter"},"https://github.com/patractlabs/jupiter")),(0,i.kt)("li",{parentName:"ul"},"Contract example: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/metis"},"https://github.com/patractlabs/metis"))),(0,i.kt)("h2",{id:"1-recap-of-megaclites-development-plan-v01--v03"},"1. Recap of Megaclite\u2019s development plan (v0.1 ~ v0.3)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"v0.1: Provide on-chain support for elliptic curve alt_bn128 and bls12_381 and bls12-377, bw6_761"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Integrate addition (ADD), scalar multiplication (MUL) and Pairing functions of the curves in Native layer and Runtime Wasm layer."),(0,i.kt)("li",{parentName:"ul"},"Provide these three functions to the upper Runtime Pallets and Contracts to call."),(0,i.kt)("li",{parentName:"ul"},"In the Runtime layer and the Ink! contract layer, provide two zkSNARK Verify upper-layer interfaces ( verification function of groth16, similar to the Verifier library of  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/HarryR/ethsnarks"},"ethsnarks")," )."),(0,i.kt)("li",{parentName:"ul"},"Start the Metis project and implement EdDSA, MerkleTree, MiMC Hash, etc. contract library on the Ink! contract layer."))),(0,i.kt)("li",{parentName:"ul"},"v0.2: Provide off-chain toolbox support for Ink! contract "),(0,i.kt)("li",{parentName:"ul"},"v0.3: Create a sample payment DApp based on Megaclite")),(0,i.kt)("h2",{id:"2-support-and-benchmark-basic-units-in-native-layer-and-wasm-layer"},"2. Support and benchmark basic units in Native layer and Wasm layer."),(0,i.kt)("h3",{id:"21-encapsulate-crypto-units-of-the-four-curves-from-arkworks"},"2.1 Encapsulate crypto units of the four curves from arkworks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arkworks library: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arkworks-rs/curves"},"https://github.com/arkworks-rs/curves"),". "),(0,i.kt)("li",{parentName:"ul"},"Source: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/ops.rs"},"megaclite/blob/master/crates/curve/arkworks/src/ops.rs")),(0,i.kt)("li",{parentName:"ul"},"Test cases: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/tree/master/crates/curve/arkworks/src/tests"},"megaclite/tree/master/crates/curve/arkworks/src/tests"))),(0,i.kt)("p",null,"We inherited the ",(0,i.kt)("inlineCode",{parentName:"p"},"PairingEngine")," trait through the ",(0,i.kt)("inlineCode",{parentName:"p"},"CurveBasicOperations")," trait and combined the three methods of ADD, MUL, and Pairings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn add(input: &[u8]) -> Result<Vec<u8>, SerializationError> { \\\\omit }\nfn mul(input: &[u8]) -> Result<Vec<u8>, SerializationError> { \\\\omit }\nfn pairings(input: &[u8]) -> Result<bool, SerializationError> { \\\\omit }\n")),(0,i.kt)("p",null,"Three of the methods are exposed to the Runtime and ink! layers with byte slice interfaces. ADD and MUL return elliptic curve points in byte vector. Pairings are internally paired and accumulated in batches, and the result is then compared with ",(0,i.kt)("inlineCode",{parentName:"p"},"Fqk::one()"),". Return true if they are equal, otherwise just return."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CurveBasicOperations")," trait also encapsulates some different elliptic curve parameters needed to write groth16 verification code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// curve basic parameters\nconst SCALAR_FIELD: &'static str;\nconst MODULUS: &'static [u8];\n// G1 bytes length\nconst G1_LEN: usize;\n// G2 bytes length\nconst G2_LEN: usize;\n// Scalar bytes length\nconst SCALAR_LEN: usize;\n// Curve ID is used for adaptation chain extension \nconst CURVE_ID: u32;\n")),(0,i.kt)("h3",{id:"22-import-megaclite-through-host-calls-in-native-layer"},"2.2 Import Megaclite through host calls in Native layer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/primitives/io/src/lib.rs"},"jupiter/blob/features/runtime-interfaces/primitives/io/src/lib.rs"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"/// Pairing runtime interface\n#[runtime_interface]\npub trait Pairing {\n    /// | curve     | add        | mul        | pairing    |\n    /// |-----------|------------|------------|------------|\n    /// | bls12_377 | 0x01000000 | 0x01000001 | 0x01000002 |\n    /// | bls12_381 | 0x01000010 | 0x01000011 | 0x01000012 |\n    /// | bn254     | 0x01000020 | 0x01000021 | 0x01000022 |\n    /// | bw6_761   | 0x01000030 | 0x01000031 | 0x01000032 |\n    fn call(func_id: u32, input: &[u8]) -> Option<Vec<u8>> {\n        curve::call(func_id, input).ok()\n    }\n}\n")),(0,i.kt)("h3",{id:"23-import-megaclite-as-runtime-library-in-wasm-layer"},"2.3 Import Megaclite as Runtime library in Wasm layer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/pallets/template/src/lib.rs"},"jupiter/blob/features/runtime-interfaces/pallets/template/src/lib.rs"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# Cargo.toml\n[dependencies.curve]\npackage = "megaclite-arkworks"\ngit = "https://github.com/patractlabs/megaclite.git"\nfeatures = ["tests"]\ndefault-features = false\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"megaclite-arkworks")," supports ",(0,i.kt)("inlineCode",{parentName:"p"},"no_std"),"\uff0cso we can import it directly in Runtime layer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"//! lib.rs\ndecl_module! {\n    #[weight = 10_000 + T::DbWeight::get().writes(1)]\n    pub fn wasm_bls12_377_add(origin) {\n        curve::tests::add(0x2a);\n    }\n}\n")),(0,i.kt)("h3",{id:"24-benchmark-of-basic-units"},"2.4 Benchmark of basic units"),(0,i.kt)("p",null,"You can build the program like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the branch `curve-benchmark` of our fork\ngit clone https://github.com/patractlabs/jupiter.git \\\n    --branch features/runtime-interfaces \\\n    --depth=1\n\n# Build the template\ncd jupiter  \\\n  && git submodule update --init \\\n  && cargo build -p jupiter-dev --all-features --release\n\n# Check the command benchmark works fine\n./target/release/jupiter-dev benchmark -p pallet_template -e wasm_bls_12_381_add\n\n")),(0,i.kt)("p",null,"Then, run the benchmark scripts like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. Under the jupiter repo\n# 2. Has compiled the release version jupiter-dev\n./target/benchmark.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Our benchmark result on ubuntu LTS 20.04. Time is measured in \xb5s")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"memory"),(0,i.kt)("th",{parentName:"tr",align:null},"processor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"64GiB System memory"),(0,i.kt)("td",{parentName:"tr",align:null},"AMD Ryzen 9 5900X 12-Core Processor")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Curve"),(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Native Time(\xb5s)"),(0,i.kt)("th",{parentName:"tr",align:null},"Wasm Time(\xb5s)"),(0,i.kt)("th",{parentName:"tr",align:null},"Speed(Native/Wasm)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bls12","_","377"),(0,i.kt)("td",{parentName:"tr",align:null},"add"),(0,i.kt)("td",{parentName:"tr",align:null},"9.588"),(0,i.kt)("td",{parentName:"tr",align:null},"29.02"),(0,i.kt)("td",{parentName:"tr",align:null},"~3x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(~9.5x)"),(0,i.kt)("td",{parentName:"tr",align:null},"mul"),(0,i.kt)("td",{parentName:"tr",align:null},"183.1"),(0,i.kt)("td",{parentName:"tr",align:null},"1893"),(0,i.kt)("td",{parentName:"tr",align:null},"~10x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,i.kt)("td",{parentName:"tr",align:null},"1732"),(0,i.kt)("td",{parentName:"tr",align:null},"15310"),(0,i.kt)("td",{parentName:"tr",align:null},"~7x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bls12","_","381"),(0,i.kt)("td",{parentName:"tr",align:null},"add"),(0,i.kt)("td",{parentName:"tr",align:null},"13.9"),(0,i.kt)("td",{parentName:"tr",align:null},"28.31"),(0,i.kt)("td",{parentName:"tr",align:null},"~2x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(~10x)"),(0,i.kt)("td",{parentName:"tr",align:null},"mul"),(0,i.kt)("td",{parentName:"tr",align:null},"177.1"),(0,i.kt)("td",{parentName:"tr",align:null},"1879"),(0,i.kt)("td",{parentName:"tr",align:null},"~10x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,i.kt)("td",{parentName:"tr",align:null},"1438"),(0,i.kt)("td",{parentName:"tr",align:null},"14770"),(0,i.kt)("td",{parentName:"tr",align:null},"~10x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bn254"),(0,i.kt)("td",{parentName:"tr",align:null},"add"),(0,i.kt)("td",{parentName:"tr",align:null},"5.631"),(0,i.kt)("td",{parentName:"tr",align:null},"16.05"),(0,i.kt)("td",{parentName:"tr",align:null},"~3x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(~5x)"),(0,i.kt)("td",{parentName:"tr",align:null},"mul"),(0,i.kt)("td",{parentName:"tr",align:null},"107.7"),(0,i.kt)("td",{parentName:"tr",align:null},"534.3"),(0,i.kt)("td",{parentName:"tr",align:null},"~5x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,i.kt)("td",{parentName:"tr",align:null},"1150"),(0,i.kt)("td",{parentName:"tr",align:null},"5061"),(0,i.kt)("td",{parentName:"tr",align:null},"~5x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bw6","_","761"),(0,i.kt)("td",{parentName:"tr",align:null},"add"),(0,i.kt)("td",{parentName:"tr",align:null},"26.9"),(0,i.kt)("td",{parentName:"tr",align:null},"92.94"),(0,i.kt)("td",{parentName:"tr",align:null},"~4x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(~13x)"),(0,i.kt)("td",{parentName:"tr",align:null},"mul"),(0,i.kt)("td",{parentName:"tr",align:null},"956.8"),(0,i.kt)("td",{parentName:"tr",align:null},"14330"),(0,i.kt)("td",{parentName:"tr",align:null},"~15x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"pairing","_","two"),(0,i.kt)("td",{parentName:"tr",align:null},"5715"),(0,i.kt)("td",{parentName:"tr",align:null},"60960"),(0,i.kt)("td",{parentName:"tr",align:null},"~10x")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ADD: Test the addition of two generators by the test cases from arkworks."),(0,i.kt)("li",{parentName:"ul"},"MUL: Test a random number with the size of a private key and multiply the generator by the test cases from arkworks."),(0,i.kt)("li",{parentName:"ul"},"Pairing:  Test ",(0,i.kt)("inlineCode",{parentName:"li"},"bilinearity: e(s * a, b) = e(s * b, a)")," by using arkworks to generate test data.")),(0,i.kt)("h2",{id:"3-provide-and-benchmark-groth16-verifier--in-ink-layer"},"3. Provide and benchmark Groth16 Verifier  in ink! layer"),(0,i.kt)("h3",{id:"31-introduction-of-groth16-verification"},"3.1 Introduction of Groth16 Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/groth16/verify.rs"},"megaclite/blob/master/crates/curve/arkworks/src/groth16/verify.rs")),(0,i.kt)("li",{parentName:"ul"},"Test cases\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/tests/src/arkworks/bench.rs"},"megaclite/blob/master/tests/src/arkworks/bench.rs"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/260.pdf"},"gronth16")," is currently the zero-knowledge proof algorithm with the highest verification efficiency (only four pairings are required) and the smallest proof size, so we prefer to choose Groth16 proof system, its verification illustration is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/MoEKfTK.png",alt:null})),(0,i.kt)("p",null,"In the paper, we can see that the core of verification is an equation:"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/GBIEHmE.png",alt:null})),(0,i.kt)("p",null,"For the convenience of use in the project implementation, the underlying pairing algorithm provide batch pairing calculation and accumulation, so we need to make a conversion:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/r9MZOmr.png",alt:null})),(0,i.kt)("p",null,"It can be seen from the formula that four Pairings, l times ADD and MUL operation (related to the actual circuit) are required, and finally, the result of the four pairings will return true or false."),(0,i.kt)("h3",{id:"32-expose-megaclite-basic-units-for-ink-contract-to-call-through-chain-extension"},"3.2 Expose Megaclite basic units for ink! contract to call through chain-extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chain extension example: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/primitives/chain-extension/src/lib.rs"},"jupiter/blob/features/runtime-interfaces/primitives/chain-extension/src/lib.rs")),(0,i.kt)("li",{parentName:"ul"},"Test case\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/features/runtime-interfaces/pallets/template/src/tests.rs"},"jupiter/blob/features/runtime-interfaces/pallets/template/src/tests.rs"))),(0,i.kt)("p",null,"Our allocation for Megaclite function id in chain extension:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"curve"),(0,i.kt)("th",{parentName:"tr",align:null},"add"),(0,i.kt)("th",{parentName:"tr",align:null},"mul"),(0,i.kt)("th",{parentName:"tr",align:null},"pairing"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bls12","_","377"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000000"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000001"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bls12","_","381"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000010"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000011"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000012")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bn254"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000020"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000021"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000022")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bw6","_","761"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000030"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000031"),(0,i.kt)("td",{parentName:"tr",align:null},"0x01000032")))),(0,i.kt)("p",null,"The corresponding interface of Megaclite supports chain extension (called from ink! contract) through conditional compilation or directly executes related functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'//! https://github.com/patractlabs/megaclite/blob/master/crates/curve/arkworks/src/lib.rs\n/// Call curve functions using chain extensions\n#[cfg(feature = "ink")]\npub fn call(func_id: u32, input: &[u8]) -> Result<Vec<u8>> {\n    Ok(ink_env::call_chain_extension(func_id, &Vec::from(input))?)\n}\n\n/// Call curve functions directly\n#[cfg(not(feature = "ink"))]\npub fn call(func_id: u32, input: &[u8]) -> Result<Vec<u8>> {\n    Ok(match func_id {\n        0x01000000 => <ark_bls12_377::Bls12_377 as CurveBasicOperations>::add(input),\n        0x01000010 => <ark_bls12_381::Bls12_381 as CurveBasicOperations>::add(input),\n        0x01000020 => <ark_bn254::Bn254 as CurveBasicOperations>::add(input),\n        0x01000030 => <ark_bw6_761::BW6_761 as CurveBasicOperations>::add(input),\n        0x01000001 => <ark_bls12_377::Bls12_377 as CurveBasicOperations>::mul(input),\n        0x01000011 => <ark_bls12_381::Bls12_381 as CurveBasicOperations>::mul(input),\n        0x01000021 => <ark_bn254::Bn254 as CurveBasicOperations>::mul(input),\n        0x01000031 => <ark_bw6_761::BW6_761 as CurveBasicOperations>::mul(input),\n        0x01000002 => <ark_bls12_377::Bls12_377 as CurveBasicOperations>::pairings(input).map(b2b),\n        0x01000012 => <ark_bls12_381::Bls12_381 as CurveBasicOperations>::pairings(input).map(b2b),\n        0x01000022 => <ark_bn254::Bn254 as CurveBasicOperations>::pairings(input).map(b2b),\n        0x01000032 => <ark_bw6_761::BW6_761 as CurveBasicOperations>::pairings(input).map(b2b),\n        _ => Err(Error::new(ErrorKind::Other, "Invalid function id").into()),\n    }?)\n}\n')),(0,i.kt)("h3",{id:"33-call-megaclite-basic-units-in-ink-contract-to-provide-groth16-verifier"},"3.3 Call Megaclite basic units in ink! contract to provide Groth16 Verifier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/metis/tree/master/groth16/lib.rs"},"metis/tree/master/groth16/lib.rs"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies.curve]\npackage = "megaclite-arkworks"\ngit = "https://github.com/patractlabs/megaclite"\nfeatures = [ "ink" ]\n')),(0,i.kt)("p",null,"Enable chain extension interfaces of Megaclite by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ink")," feautre."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// ink! contract\n#[ink(message)]\npub fn bls12_377_verify(\n    &self,\n    vk_gamma_abc: Vec<u8>,\n    vk: Vec<u8>,\n    proof: Vec<u8>,\n    public_inputs: Vec<Vec<u8>>,\n) -> bool {\n    if let Ok(res) = groth16::verify::<Bls12_377>(&vk_gamma_abc, &vk, &proof, &public_inputs) {\n        res\n    } else {\n        false\n    }\n}\n\n")),(0,i.kt)("h2",{id:"34-benchmark-of-groth16-verifier"},"3.4 Benchmark of Groth16 Verifier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/jupiter/blob/19a1fb3a21e04a5e14b33a0f25c6f10e059cc6ea/pallets/template/src/benchmarking.rs#L68"},"jupiter pallets/template/src/benchmarking.rs#L68"))),(0,i.kt)("p",null,"You can build Jupiter by using the same way of above\uff0cbut we need to pass  ",(0,i.kt)("inlineCode",{parentName:"p"},"groth16"),"  to  ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/benchmark.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# 1. Under the jupiter repo\n# 2. Has compiled the release version jupiter-dev\n./target/benchmark.sh groth16\n")),(0,i.kt)("p",null,"Our MiMC-Based Groth16 Verify Benchmark Results:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mimc rounds : 322")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Curve"),(0,i.kt)("th",{parentName:"tr",align:null},"Native Time(\xb5s)"),(0,i.kt)("th",{parentName:"tr",align:null},"Wasm Time(\xb5s)"),(0,i.kt)("th",{parentName:"tr",align:null},"Speed(Native/Wasm)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bls12","_","377"),(0,i.kt)("td",{parentName:"tr",align:null},"40860"),(0,i.kt)("td",{parentName:"tr",align:null},"60550"),(0,i.kt)("td",{parentName:"tr",align:null},"~1.5x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bls12","_","381"),(0,i.kt)("td",{parentName:"tr",align:null},"39120"),(0,i.kt)("td",{parentName:"tr",align:null},"58400"),(0,i.kt)("td",{parentName:"tr",align:null},"~1.5x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bn254"),(0,i.kt)("td",{parentName:"tr",align:null},"30760"),(0,i.kt)("td",{parentName:"tr",align:null},"36800"),(0,i.kt)("td",{parentName:"tr",align:null},"~1.2x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bw6","_","761"),(0,i.kt)("td",{parentName:"tr",align:null},"63798"),(0,i.kt)("td",{parentName:"tr",align:null},"172900"),(0,i.kt)("td",{parentName:"tr",align:null},"~2.7x")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: The implementation of MiMC-Based Groth16 Verifier here is that when Megaclite is imported into the contract, the verify function of ADD, MUL, Pairing can be run by calling the chain extension.\nTest contract: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/master/groth16/lib.rs"},"https://github.com/patractlabs/metis/blob/master/groth16/lib.rs"))),(0,i.kt)("h2",{id:"4-conclusion-of-native-version-and-wasm-version"},"4. Conclusion of Native version and Wasm version"),(0,i.kt)("p",null,"According to the test results of the basic units , there is 5-7 times gap between the performance of the Wasm version and the Native version. But, ",(0,i.kt)("strong",{parentName:"p"},"according to the test results of upper-level ink! contract for MiMC Groth16 Verifier, the speed only has little difference, and the time consumption (36-170ms) is acceptable for the block producer.")),(0,i.kt)("p",null,"The Wasm version does not need to modify the Host Calls in Native layer, so Megaclite will continue to develop the future roadmap in Wasm layer, and suspend the development direction of the Native layer, leaving the native layer design to ParityTech and W3F Research. In addition, Jupiter will integrate Megaclite in runtime and ink! to provide a public online test environment."),(0,i.kt)("h2",{id:"5-more-library-contracts-built-by-ink"},"5. More library contracts built by ink!"),(0,i.kt)("h3",{id:"51-mimc-based-merkle-tree"},"5.1 MiMC-based Merkle Tree"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MiMC \uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/merkle-tree/src/mimc.rs"},"megaclite/blob/master/crates/merkle-tree/src/mimc.rs")),(0,i.kt)("li",{parentName:"ul"},"Merkle Tree: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/blob/master/crates/merkle-tree/src/merkle_tree.rs"},"megaclite/blob/master/crates/merkle-tree/src/merkle_tree.rs"))),(0,i.kt)("p",null,"MiMC implements a hash algorithm based on Field on the elliptic curve of alt","_","bn128, so its circuit implementation in the prove system of ZKP (based on the alt","_","bn128 curve) is very friendly."),(0,i.kt)("p",null,"The mimc implementation is shown in the figure below, using Sponge mode instantiated by MiMC permutation with a fixed key."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Rg2zjPW.png",alt:null})),(0,i.kt)("p",null,"Source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let mut r = in_k.clone();\nfor i in 0..in_x.len() {\n    r = &r + in_x[i] + mimc_pe7(&mut in_x[i], &r, &in_seed, round_count) % &*SCALAR_FIELD;\n}\n")),(0,i.kt)("p",null,"In snark setting , MiMC-n/n block-cipher usually use Even-Mansour mode"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/aCExnKY.png",alt:null})),(0,i.kt)("p",null,"Our MiMC-p/p  with exponent of 7, so:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/fqD85VQ.png",alt:null})),(0,i.kt)("p",null,"Source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let mut keccak = Keccak::v256();\nlet mut received = [0u8; 32];\nkeccak.update(&c.to_bytes_be()[..]);\nkeccak.finalize(&mut received);\nc = U256::from_bytes_be(&received) % &*SCALAR_FIELD;\n\n// x = (x + c_i + k)^7\nt = &in_x + &c % &*SCALAR_FIELD + in_k % &*SCALAR_FIELD; // t = x + c_i + k\na = t.mulmod(&t, &*SCALAR_FIELD); // t^2\na = a.mulmod(&a, &*SCALAR_FIELD).mulmod(&a, &*SCALAR_FIELD);\nin_x = a.mulmod(&t, &*SCALAR_FIELD); // t^7\n")),(0,i.kt)("h3",{id:"52-eddsa-verifier"},"5.2 EdDSA verifier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source code\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/megaclite/tree/master/crates/eddsa"},"megaclite/tree/master/crates/eddsa"))),(0,i.kt)("p",null,"It is built on ",(0,i.kt)("a",{parentName:"p",href:"https://z.cash/technology/jubjub/"},"JubJub curve"),". Jubjub is the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Twisted_Edwards_curve"},"twisted Edwards curve")," ",(0,i.kt)("inlineCode",{parentName:"p"},"-u^2 + v^2 = 1 + d.u^2.v^2")," of rational points over ",(0,i.kt)("inlineCode",{parentName:"p"},"GF(q)")," with a subgroup of prime order ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"q = 21888242871839275222246405745257275088548364400416034343698204186575808495617\nr = 21888242871839275222246405745257275088696311157297823662689037894645226208583\n")),(0,i.kt)("p",null,"The choice of ",(0,i.kt)("inlineCode",{parentName:"p"},"GF(q)")," is made to be the scalar field of the Bn254 elliptic curve construction."),(0,i.kt)("p",null,"It also implements ETEC (Extened Twisted Edwards coordinate). In the Extended coordinate system, it can provide faster addition operations. In the Projective coordinate system, it can avoid inversion operations and provide faster double operations."),(0,i.kt)("p",null,"The core verification algorithm of EdDSA signature is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/clDEIqR.png",alt:null})),(0,i.kt)("p",null,"Where (s, R) is the signature, Pk is the public key, and h is the hash value of the message. Because R is generated by the private key and the message hash, EdDSA is also a deterministic signature algorithm."),(0,i.kt)("p",null,"Source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"if let Some(lhs) = scalar_mult(GENERATE[0].clone(), GENERATE[1].clone(), s) {\n   let t = hash_to_u256(&input);\n   if let Some((pk_x, pk_y)) = scalar_mult(public_key[0].clone(), public_key[1].clone(), t) {\n       let [r_x, r_y] = r;\n       let etec_point = etec_add(\n           &point_to_etec(r_x, r_y, Q.clone()),\n           &point_to_etec(pk_x, pk_y, Q.clone()),\n           &*Q,\n           &JUBJUB_A.into(),\n           &JUBJUB_D.into(),\n       );\n       if let Some(rhs) = etec_to_point(etec_point, Q.clone()) {\n           return lhs == rhs;\n       }\n   }\n}\nfalse\n")),(0,i.kt)("h2",{id:"5-recap-of-verification-of-megaclite-v01"},"5. Recap of verification of Megaclite v0.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Provide more on-chain underlying cryptography support than Ethereum. The current stage includes two curves : alt_bn128 and bls12_381")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Integrate ADD, MUL, Paring units under Runtime layer, and provide them to Runtime applications through Runtime-Interface, and further provide them to Wasm contract applications through Contract-Seal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Through Pallet and Ink! contract libraries, providing more higher-level verification and crypto tools than Ethereum, improving execution efficiency and reducing development costs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Provide off-chain cryptography toolbox through Rust SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Provide typical sample applications through Ink! sample contracts"))),(0,i.kt)("p",null,"We will propose v0.2 and v0.3 later after some time for research."))}m.isMDXComponent=!0}}]);