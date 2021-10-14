"use strict";(self.webpackChunksubstrate_contracts_book=self.webpackChunksubstrate_contracts_book||[]).push([[69],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6838:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={},s="ERC1155",c={unversionedId:"metis/guides/tokens/erc1155",id:"metis/guides/tokens/erc1155",isDocsHomePage:!1,title:"ERC1155",description:"Details of ERC1155 can be found in ERC1155",source:"@site/docs/metis/guides/tokens/erc1155.md",sourceDirName:"metis/guides/tokens",slug:"/metis/guides/tokens/erc1155",permalink:"/substrate-contracts-book/metis/guides/tokens/erc1155",editUrl:"https://github.com/patractlabs/substrate-contracts-book/docs/metis/guides/tokens/erc1155.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ERC777",permalink:"/substrate-contracts-book/metis/guides/tokens/erc777"},next:{title:"ERC165",permalink:"/substrate-contracts-book/metis/guides/tools/erc165"}},u=[{value:"Dependency",id:"dependency",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Mutable Message",id:"mutable-message",children:[{value:"set_approval_for_all",id:"set_approval_for_all",children:[]},{value:"safe_transfer_from",id:"safe_transfer_from",children:[]},{value:"safe_batch_transfer_from",id:"safe_batch_transfer_from",children:[]}]},{value:"Immutable Message",id:"immutable-message",children:[{value:"url",id:"url",children:[]},{value:"balance_of",id:"balance_of",children:[]},{value:"balance_of_batch",id:"balance_of_batch",children:[]},{value:"is_approved_for_all",id:"is_approved_for_all",children:[]}]},{value:"Internal Functions",id:"internal-functions",children:[{value:"_mint",id:"_mint",children:[]},{value:"_mint_batch",id:"_mint_batch",children:[]},{value:"_burn",id:"_burn",children:[]},{value:"_burn_batch",id:"_burn_batch",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"_before_token_transfer",id:"_before_token_transfer",children:[]}]},{value:"Events",id:"events",children:[{value:"TransferSingle",id:"transfersingle",children:[]},{value:"TransferBatch",id:"transferbatch",children:[]},{value:"ApprovalForAll",id:"approvalforall",children:[]},{value:"Url",id:"url-1",children:[]}]},{value:"Extensions",id:"extensions",children:[{value:"ERC1155Pausable",id:"erc1155pausable",children:[]},{value:"ERC1155Burnable",id:"erc1155burnable",children:[]}]},{value:"Usage Example",id:"usage-example",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"erc1155"},"ERC1155"),(0,o.kt)("p",null,"Details of ERC1155 can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155"},"ERC1155")),(0,o.kt)("h2",{id:"dependency"},"Dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'metis_erc777 = { git = "https://github.com/patractlabs/metis", default-features = false }\n')),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(feature = "std", derive(::ink_storage::traits::StorageLayout))]\n#[derive(Debug, SpreadLayout)]\npub struct Data<E: Env> {\n    /// Symbols of ERC1155 Token, by (name, symbol)\n    pub url: Lazy<String>,\n\n    /// Mapping from token ID to account balances\n    pub balances: StorageHashMap<(TokenId, E::AccountId), E::Balance>,\n\n    /// Mapping from account to operator approvals\n    pub operator_approvals: StorageHashMap<(E::AccountId, E::AccountId), bool>,\n}\n')),(0,o.kt)("h2",{id:"mutable-message"},"Mutable Message"),(0,o.kt)("h3",{id:"set_approval_for_all"},"set_approval_for_all"),(0,o.kt)("p",null,"Grants or revokes permission to ",(0,o.kt)("inlineCode",{parentName:"p"},"operator")," to transfer the caller's tokens, according to ",(0,o.kt)("inlineCode",{parentName:"p"},"approved"),","),(0,o.kt)("p",null,"Emits an ",(0,o.kt)("inlineCode",{parentName:"p"},"ApprovalForAll")," event."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operator")," cannot be the caller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn set_approval_for_all(&mut self, operator: E::AccountId, approved: bool) {\n        let caller = Self::caller();\n\n        assert!(\n            caller != operator,\n            "ERC1155: setting approval status for self"\n        );\n\n        self.get_mut()\n            .set_approval_for_all(caller.clone(), operator.clone(), approved);\n        self.emit_event_approval_for_all(caller, operator, approved);\n    }\n')),(0,o.kt)("h3",{id:"safe_transfer_from"},"safe_transfer_from"),(0,o.kt)("p",null,"Transfers ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens of token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,o.kt)("p",null,"Emits a ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferSingle")," event."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to")," cannot be the zero address."),(0,o.kt)("li",{parentName:"ul"},"If the caller is not ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),", it must be have been approved to spend ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens via ",(0,o.kt)("inlineCode",{parentName:"li"},"set_approval_for_all"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from")," must have a balance of tokens of type ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of at least ",(0,o.kt)("inlineCode",{parentName:"li"},"amount"),"."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," refers to a smart contract, it must implement ",(0,o.kt)("inlineCode",{parentName:"li"},"on_erc1155_received")," and return the acceptance magic value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn safe_transfer_from(\n        &mut self,\n        from: E::AccountId,\n        to: E::AccountId,\n        id: TokenId,\n        amount: E::Balance,\n        data: Vec<u8>,\n    ) -> Result<()> {\n        let caller = Self::caller();\n        assert!(\n            from == caller || self.is_approved_for_all(&from, &caller),\n            "ERC1155: caller is not owner nor approved"\n        );\n\n        self._safe_transfer_from(from, to, id, amount, data)\n    }\n')),(0,o.kt)("h3",{id:"safe_batch_transfer_from"},"safe_batch_transfer_from"),(0,o.kt)("p",null,"Batched version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"safe_transfer_from")),(0,o.kt)("p",null,"Emits a ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferBatch")," event."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"amounts")," must have the same length."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," refers to a smart contract, it must implement ",(0,o.kt)("inlineCode",{parentName:"li"},"on_erc1155_batch_received")," and return the acceptance magic value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn safe_batch_transfer_from(\n        &mut self,\n        from: E::AccountId,\n        to: E::AccountId,\n        id: Vec<TokenId>,\n        amount: Vec<E::Balance>,\n        data: Vec<u8>,\n    ) -> Result<()> {\n        let caller = Self::caller();\n        assert!(\n            from == caller || self.is_approved_for_all(&from, &caller),\n            "ERC1155: transfer caller is not owner nor approved"\n        );\n\n        self._safe_batch_transfer_from(from, to, id, amount, data)\n    }\n')),(0,o.kt)("h2",{id:"immutable-message"},"Immutable Message"),(0,o.kt)("h3",{id:"url"},"url"),(0,o.kt)("p",null,"Returns the URI for token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,o.kt)("p",null,"This implementation returns the same URI for ",(0,o.kt)("em",{parentName:"p"},"all")," token types. It relies on the token type ID substitution mechanism\n",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155#metadata"},"defined in the EIP"),"."),(0,o.kt)("p",null,"Clients calling this function must replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\{id\\}")," substring with the actual token type ID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    fn url(&self, _id: TokenId) -> String {\n        self.get().get_url()\n    }\n")),(0,o.kt)("h3",{id:"balance_of"},"balance_of"),(0,o.kt)("p",null,"Returns the amount of tokens of token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," owned by ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn balance_of(&self, account: &E::AccountId, id: &TokenId) -> E::Balance {\n        assert!(\n            *account != E::AccountId::default(),\n            "ERC1155: balance query for the zero address"\n        );\n\n        self.get().balance_of(id, account)\n    }\n')),(0,o.kt)("h3",{id:"balance_of_batch"},"balance_of_batch"),(0,o.kt)("p",null,"Batched version of balance_of"),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accounts")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ids")," must have the same length.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn balance_of_batch(\n        &self,\n        accounts: Vec<E::AccountId>,\n        ids: Vec<TokenId>,\n    ) -> Vec<E::Balance> {\n        assert!(\n            accounts.len() == ids.len(),\n            "ERC1155: accounts and ids length mismatch"\n        );\n\n        (0..accounts.len())\n            .collect::<Vec<_>>()\n            .iter()\n            .map(|idx| {\n                self.balance_of(accounts.get(*idx).unwrap(), ids.get(*idx).unwrap())\n            })\n            .collect()\n    }\n')),(0,o.kt)("h3",{id:"is_approved_for_all"},"is_approved_for_all"),(0,o.kt)("p",null,"Returns true if ",(0,o.kt)("inlineCode",{parentName:"p"},"operator")," is approved to transfer ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),"'s tokens."),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"set_approval_for_all"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    fn is_approved_for_all(\n        &self,\n        account: &E::AccountId,\n        operator: &E::AccountId,\n    ) -> bool {\n        self.get().is_approved_for_all(account, operator)\n    }\n")),(0,o.kt)("h2",{id:"internal-functions"},"Internal Functions"),(0,o.kt)("h3",{id:"_mint"},"_mint"),(0,o.kt)("p",null,"Creates ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens of token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", and assigns them to ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,o.kt)("p",null,"Emits a ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferSingle")," event."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"account")," refers to a smart contract, it must implement ",(0,o.kt)("inlineCode",{parentName:"li"},"on_erc1155_received")," and return the acceptance magic value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    fn _mint(\n        &mut self,\n        account: E::AccountId,\n        id: TokenId,\n        amount: E::Balance,\n        data: Vec<u8>,\n    ) -> Result<()> {\n        if account == E::AccountId::default() {\n            return Err(Error::AccountIsZero)\n        }\n\n        let operator = Self::caller();\n\n        self._before_token_transfer(\n            &operator,\n            &None,\n            &Some(&account),\n            &vec![id],\n            &vec![amount],\n            &data,\n        )?;\n\n        self.get_mut().add_balance(&account, &id, amount);\n        self._do_safe_transfer_acceptance_check(\n            &operator, &None, &account, &id, &amount, &data,\n        );\n\n        self.emit_event_transfer_single(operator, None, Some(account), id, amount);\n\n        Ok(())\n    }\n")),(0,o.kt)("h3",{id:"_mint_batch"},"_mint_batch"),(0,o.kt)("p",null,"Batched version of ",(0,o.kt)("inlineCode",{parentName:"p"},"_mint"),"."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"amounts")," must have the same length."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," refers to a smart contract, it must implement ",(0,o.kt)("inlineCode",{parentName:"li"},"on_erc1155_batch_received")," and return the acceptance magic value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn _mint_batch(\n        &mut self,\n        to: E::AccountId,\n        ids: Vec<TokenId>,\n        amounts: Vec<E::Balance>,\n        data: Vec<u8>,\n    ) -> Result<()> {\n        assert!(\n            ids.len() == amounts.len(),\n            "ERC1155: ids and amounts length mismatch"\n        );\n\n        if to == E::AccountId::default() {\n            return Err(Error::AccountIsZero)\n        }\n\n        let operator = Self::caller();\n\n        self._before_token_transfer(&operator, &None, &Some(&to), &ids, &amounts, &data)?;\n\n        for i in 0..ids.len() {\n            let id = ids[i];\n            let amount = amounts[i];\n\n            self.get_mut().add_balance(&to, &id, amount);\n        }\n\n        self._do_safe_batch_transfer_acceptance_check(\n            &operator, &None, &to, &ids, &amounts, &data,\n        );\n        self.emit_event_transfer_batch(operator, None, Some(to), ids, amounts);\n\n        Ok(())\n    }\n')),(0,o.kt)("h3",{id:"_burn"},"_burn"),(0,o.kt)("p",null,"Destroys ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens of token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"account")),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account")," must have at least ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," tokens of token type ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn _burn(\n        &mut self,\n        account: E::AccountId,\n        id: TokenId,\n        amount: E::Balance,\n    ) -> Result<()> {\n        if account == E::AccountId::default() {\n            return Err(Error::AccountIsZero)\n        }\n\n        let operator = Self::caller();\n\n        self._before_token_transfer(\n            &operator,\n            &Some(&account),\n            &None,\n            &vec![id],\n            &vec![amount],\n            &Vec::<u8>::default(),\n        )?;\n\n        let account_balance = self.get().balance_of(&id, &account);\n        assert!(\n            account_balance >= amount,\n            "ERC1155: burn amount exceeds balance"\n        );\n        self.get_mut()\n            .set_balance(&account, &id, account_balance - amount);\n\n        self.emit_event_transfer_single(operator, Some(account), None, id, amount);\n\n        Ok(())\n    }\n')),(0,o.kt)("h3",{id:"_burn_batch"},"_burn_batch"),(0,o.kt)("p",null,"Batched version of ",(0,o.kt)("inlineCode",{parentName:"p"},"_burn"),"."),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"amounts")," must have the same length.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    fn _burn_batch(\n        &mut self,\n        account: E::AccountId,\n        ids: Vec<TokenId>,\n        amounts: Vec<E::Balance>,\n    ) -> Result<()> {\n        assert!(\n            ids.len() == amounts.len(),\n            "ERC1155: ids and amounts length mismatch"\n        );\n\n        if account == E::AccountId::default() {\n            return Err(Error::AccountIsZero)\n        }\n\n        let operator = Self::caller();\n\n        self._before_token_transfer(\n            &operator,\n            &Some(&account),\n            &None,\n            &ids,\n            &amounts,\n            &Vec::<u8>::default(),\n        )?;\n\n        for i in 0..ids.len() {\n            let id = ids[i];\n            let amount = amounts[i];\n\n            let account_balance = self.get().balance_of(&id, &account);\n            assert!(\n                account_balance >= amount,\n                "ERC1155: burn amount exceeds balance"\n            );\n            self.get_mut()\n                .set_balance(&account, &id, account_balance - amount);\n        }\n\n        self.emit_event_transfer_batch(operator, Some(account), None, ids, amounts);\n\n        Ok(())\n    }\n')),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"_before_token_transfer"},"_before_token_transfer"),(0,o.kt)("p",null,"Hook that is called before any token transfer. This includes minting\nand burning, as well as batched variants."),(0,o.kt)("p",null,"The same hook is called on both single and batched variants. For single\ntransfers, the length of the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," arrays will be 1."),(0,o.kt)("p",null,"Calling conditions (for each ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," pair):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," are both non-zero, ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens of token type ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," will be  transferred to ",(0,o.kt)("inlineCode",{parentName:"li"},"to"),"."),(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"from")," is zero, ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," tokens of token type ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," will be minted for ",(0,o.kt)("inlineCode",{parentName:"li"},"to"),"."),(0,o.kt)("li",{parentName:"ul"},"when ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," is zero, ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens of token type ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," will be burned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," are never both zero."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"amounts")," have the same, non-zero length.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    fn _before_token_transfer(\n        &mut self,\n        _operator: &E::AccountId,\n        _from: &Option<&E::AccountId>,\n        _to: &Option<&E::AccountId>,\n        _ids: &Vec<TokenId>,\n        _amounts: &Vec<E::Balance>,\n        _data: &Vec<u8>,\n    ) -> Result<()> {\n        Ok(())\n    }\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"transfersingle"},"TransferSingle"),(0,o.kt)("p",null,"Emitted when ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," tokens of token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," are transferred\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct TransferSingle {\n        #[ink(topic)]\n        pub operator: AccountId,\n        #[ink(topic)]\n        pub from: Option<AccountId>,\n        #[ink(topic)]\n        pub to: Option<AccountId>,\n        pub id: TokenId,\n        pub value: Balance,\n    }\n")),(0,o.kt)("h3",{id:"transferbatch"},"TransferBatch"),(0,o.kt)("p",null,"Equivalent to multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferSingle")," events, where ",(0,o.kt)("inlineCode",{parentName:"p"},"operator"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," are the same for all transfers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct TransferBatch {\n        #[ink(topic)]\n        pub operator: AccountId,\n        #[ink(topic)]\n        pub from: Option<AccountId>,\n        #[ink(topic)]\n        pub to: Option<AccountId>,\n        pub id: Vec<TokenId>,\n        pub value: Vec<Balance>,\n    }\n")),(0,o.kt)("h3",{id:"approvalforall"},"ApprovalForAll"),(0,o.kt)("p",null,"Emitted when ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," enables or disables (",(0,o.kt)("inlineCode",{parentName:"p"},"approved"),") ",(0,o.kt)("inlineCode",{parentName:"p"},"operator")," to manage all of its assets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct ApprovalForAll {\n        #[ink(topic)]\n        pub owner: AccountId,\n        #[ink(topic)]\n        pub operator: AccountId,\n        pub approved: bool,\n    }\n")),(0,o.kt)("h3",{id:"url-1"},"Url"),(0,o.kt)("p",null,"Emitted when the URI for token type ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", if it is a non-programmatic URI."),(0,o.kt)("p",null,"If an ",(0,o.kt)("inlineCode",{parentName:"p"},"URI")," event was emitted for ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", the standard\n",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions"},"eip-1155#metadata-extensions")," that ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," will equal the value\nreturned by ",(0,o.kt)("inlineCode",{parentName:"p"},"uri"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct Url {\n        pub value: String,\n        #[ink(topic)]\n        pub id: TokenId,\n    }\n")),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("h3",{id:"erc1155pausable"},"ERC1155Pausable"),(0,o.kt)("p",null,"ERC1155 token with pausable token transfers, minting and burning."),(0,o.kt)("p",null,"Useful for scenarios such as preventing trades until the end of an evaluation period, or having an emergency switch for freezing all token transfers in the event of a large bug."),(0,o.kt)("p",null,"FUNCTIONS"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"_beforeTokenTransfer(operator, from, to, ids, amounts, data)")),(0,o.kt)("p",null,"For details, please refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/main/crates/components/token/erc1155/src/extensions/pausable.rs"},"ERC20Pausable")," for source code."),(0,o.kt)("p",null,"Usage examples can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/main/example/contracts/token/erc1155-pausable/lib.rs"},"here")," "),(0,o.kt)("h3",{id:"erc1155burnable"},"ERC1155Burnable"),(0,o.kt)("p",null,"Extension of ERC1155 that allows token holders to destroy both their own tokens and those that they have been approved to use."),(0,o.kt)("p",null,"FUNCTIONS"),(0,o.kt)("p",null,"FUNCTIONS"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"burn(account, id, value)")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"burnBatch(account, ids, values)")),(0,o.kt)("p",null,"For details, please refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/main/crates/components/token/erc1155/src/extensions/burnable.rs"},"ERC20Burnable")," for source code."),(0,o.kt)("p",null,"Usage examples can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/patractlabs/metis/blob/main/example/contracts/token/erc1155-burnable/lib.rs"},"here")," "),(0,o.kt)("h2",{id:"usage-example"},"Usage Example"),(0,o.kt)("p",null,"To make a new erc1155-like token, we should import erc1155 at first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[metis_lang::contract]\npub mod contract {\n    pub use erc1155::{\n        Error,\n        Result,\n        TokenId,\n    };\n    use metis_erc1155 as erc1155;\n    use metis_lang::{\n        import,\n        metis,\n    };\n\n    #[ink(storage)]\n    #[import(erc1155)]\n    pub struct Erc1155 {\n        erc1155: erc1155::Data<Erc1155>,\n    }\n\n    impl erc1155::Impl<Erc1155> for Erc1155 {}\n}\n')),(0,o.kt)("p",null,"Then add the event for erc1155:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    /// Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\n    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct TransferSingle {\n        #[ink(topic)]\n        pub operator: AccountId,\n        #[ink(topic)]\n        pub from: Option<AccountId>,\n        #[ink(topic)]\n        pub to: Option<AccountId>,\n        pub id: TokenId,\n        pub value: Balance,\n    }\n\n    /// Equivalent to multiple `TransferSingle` events, where `operator`, `from` and `to` are the same for all\n    /// transfers.\n    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct TransferBatch {\n        #[ink(topic)]\n        pub operator: AccountId,\n        #[ink(topic)]\n        pub from: Option<AccountId>,\n        #[ink(topic)]\n        pub to: Option<AccountId>,\n        pub id: Vec<TokenId>,\n        pub value: Vec<Balance>,\n    }\n\n    /// Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\n    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct ApprovalForAll {\n        #[ink(topic)]\n        pub owner: AccountId,\n        #[ink(topic)]\n        pub operator: AccountId,\n        pub approved: bool,\n    }\n\n    /// Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\n    ///\n    /// If an `URI` event was emitted for `id`, the standard\n    /// https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\n    /// returned by `uri`.\n    #[ink(event)]\n    #[metis(erc1155)]\n    pub struct Url {\n        pub value: String,\n        #[ink(topic)]\n        pub id: TokenId,\n    }\n")),(0,o.kt)("p",null,"impl the constructor for contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    impl Erc1155 {\n        #[ink(constructor)]\n        pub fn new(url: String) -> Self {\n            let mut instance = Self {\n                erc1155: erc1155::Data::new(),\n            };\n\n            erc1155::Impl::init(&mut instance, url);\n            instance\n        }\n    }\n")),(0,o.kt)("p",null,"Then implement the messages for contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"    impl Erc1155 {\n        /// Returns the URI for token type `id`.\n        ///\n        /// This implementation returns the same URI for *all* token types. It relies\n        /// on the token type ID substitution mechanism\n        /// https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\n        ///\n        /// Clients calling this function must replace the `\\{id\\}` substring with the\n        /// actual token type ID.\n        #[ink(message)]\n        pub fn url(&self, id: TokenId) -> String {\n            erc1155::Impl::url(self, id)\n        }\n\n        /// Returns the amount of tokens of token type `id` owned by `account`.\n        ///\n        /// Requirements:\n        ///\n        /// - `account` cannot be the zero address.\n        #[ink(message)]\n        pub fn balance_of(&self, account: &AccountId, id: &TokenId) -> Balance {\n            erc1155::Impl::balance_of(self, account, id)\n        }\n\n        /// Batched version of balance_of\n        ///\n        /// Requirements:\n        ///\n        /// - `accounts` and `ids` must have the same length.\n        #[ink(message)]\n        pub fn balance_of_batch(\n            &self,\n            accounts: Vec<AccountId>,\n            ids: Vec<TokenId>,\n        ) -> Vec<Balance> {\n            erc1155::Impl::balance_of_batch(self, accounts, ids)\n        }\n\n        /// Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,\n        /// \n        /// Emits an `ApprovalForAll` event.\n        /// \n        /// Requirements:\n        /// \n        /// - `operator` cannot be the caller.\n        #[ink(message)]\n        pub fn set_approval_for_all(&mut self, operator: AccountId, approved: bool) {\n            erc1155::Impl::set_approval_for_all(self, operator, approved)\n        }\n\n        /// Returns true if `operator` is approved to transfer ``account``'s tokens.\n        /// \n        /// See `set_approval_for_all`.\n        #[ink(message)]\n        pub fn is_approved_for_all(\n            &self,\n            account: &AccountId,\n            operator: &AccountId,\n        ) -> bool {\n            erc1155::Impl::is_approved_for_all(self, account, operator)\n        }\n\n        /// Transfers `amount` tokens of token type `id` from `from` to `to`.\n        ///\n        /// Emits a `TransferSingle` event.\n        ///\n        /// Requirements:\n        ///\n        /// - `to` cannot be the zero address.\n        /// - If the caller is not `from`, it must be have been approved to spend ``from``'s tokens via `set_approval_for_all`.\n        /// - `from` must have a balance of tokens of type `id` of at least `amount`.\n        /// - If `to` refers to a smart contract, it must implement `on_erc1155_received` and return the\n        ///   acceptance magic value.\n        #[ink(message)]\n        pub fn safe_transfer_from(\n            &mut self,\n            from: AccountId,\n            to: AccountId,\n            id: TokenId,\n            amount: Balance,\n            data: Vec<u8>,\n        ) -> Result<()> {\n            erc1155::Impl::safe_transfer_from(self, from, to, id, amount, data)\n        }\n\n        /// Batched version of the `safe_transfer_from`\n        ///\n        /// Emits a `TransferBatch` event.\n        ///\n        /// Requirements:\n        ///\n        /// - `ids` and `amounts` must have the same length.\n        /// - If `to` refers to a smart contract, it must implement `on_erc1155_batch_received` and return the\n        ///   acceptance magic value.\n        #[ink(message)]\n        pub fn safe_batch_transfer_from(\n            &mut self,\n            from: AccountId,\n            to: AccountId,\n            ids: Vec<TokenId>,\n            amounts: Vec<Balance>,\n            data: Vec<u8>,\n        ) -> Result<()> {\n            erc1155::Impl::safe_batch_transfer_from(self, from, to, ids, amounts, data)\n        }\n    }\n")),(0,o.kt)("p",null,"In the end, we can add some other messages."))}d.isMDXComponent=!0}}]);