"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5700],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2287:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={},p=void 0,c={unversionedId:"architecture/components/contracts/contracts/token/erc1155/NFTUpgradeable",id:"architecture/components/contracts/contracts/token/erc1155/NFTUpgradeable",title:"NFTUpgradeable",description:"Implementation of the basic standard multi-token.",source:"@site/docs/architecture/components/contracts/contracts/token/erc1155/NFTUpgradeable.md",sourceDirName:"architecture/components/contracts/contracts/token/erc1155",slug:"/architecture/components/contracts/contracts/token/erc1155/NFTUpgradeable",permalink:"/docs/architecture/components/contracts/contracts/token/erc1155/NFTUpgradeable",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/contracts/contracts/token/erc1155/NFTUpgradeable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HashListLibraryProxy",permalink:"/docs/architecture/components/contracts/contracts/test/libraries/HashListLibraryProxy"},next:{title:"Nevermined Public Environments",permalink:"/docs/architecture/nevermined-envs"}},u={},s=[{value:"Functions",id:"functions",level:2},{value:"__NFTUpgradeable_init",id:"__nftupgradeable_init",level:3},{value:"__ERC1155_init_unchained",id:"__erc1155_init_unchained",level:3},{value:"uri",id:"uri",level:3},{value:"burn",id:"burn",level:3},{value:"burnBatch",id:"burnbatch",level:3},{value:"balanceOf",id:"balanceof",level:3},{value:"balanceOf",id:"balanceof-1",level:3},{value:"balanceOfBatch",id:"balanceofbatch",level:3},{value:"setApprovalForAll",id:"setapprovalforall",level:3},{value:"setProxyApproval",id:"setproxyapproval",level:3},{value:"isApprovedForAll",id:"isapprovedforall",level:3},{value:"isHolder",id:"isholder",level:3},{value:"safeTransferFrom",id:"safetransferfrom",level:3},{value:"safeBatchTransferFrom",id:"safebatchtransferfrom",level:3},{value:"_mint",id:"_mint",level:3},{value:"_mintBatch",id:"_mintbatch",level:3},{value:"_burn",id:"_burn",level:3},{value:"_burnBatch",id:"_burnbatch",level:3},{value:"_beforeTokenTransfer",id:"_beforetokentransfer",level:3},{value:"Events",id:"events",level:2},{value:"ProxyApproval",id:"proxyapproval",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Implementation of the basic standard multi-token.\nSee ",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155"},"https://eips.ethereum.org/EIPS/eip-1155"),"\nOriginally based on code by Enjin: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/enjin/erc-1155"},"https://github.com/enjin/erc-1155")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available since v3.1.")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"__nftupgradeable_init"},"__NFTUpgradeable_init"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function __NFTUpgradeable_init(\n  ) internal\n")),(0,l.kt)("p",null,"See {_setURI}."),(0,l.kt)("h3",{id:"__erc1155_init_unchained"},"__ERC1155_init_unchained"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function __ERC1155_init_unchained(\n  ) internal\n")),(0,l.kt)("h3",{id:"uri"},"uri"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uri(\n  ) external returns (string)\n")),(0,l.kt)("p",null,"See {IERC1155MetadataURI-uri}."),(0,l.kt)("p",null,"This implementation returns the same URI for ",(0,l.kt)("em",{parentName:"p"},"all")," token types. It relies\non the token type ID substitution mechanism\n",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1155#metadata%5Bdefined"},"https://eips.ethereum.org/EIPS/eip-1155#metadata[defined")," in the EIP]."),(0,l.kt)("p",null,"Clients calling this function must replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\{id\\}")," substring with the\nactual token type ID."),(0,l.kt)("h3",{id:"burn"},"burn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function burn(\n  ) public\n")),(0,l.kt)("h3",{id:"burnbatch"},"burnBatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function burnBatch(\n  ) public\n")),(0,l.kt)("h3",{id:"balanceof"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function balanceOf(\n  ) public returns (uint256)\n")),(0,l.kt)("p",null,"See {IERC1155-balanceOf}."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address.")),(0,l.kt)("h3",{id:"balanceof-1"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function balanceOf(\n  ) external returns (uint256)\n")),(0,l.kt)("p",null,"Returns the amount of tokens of token type ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address.")),(0,l.kt)("h3",{id:"balanceofbatch"},"balanceOfBatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function balanceOfBatch(\n  ) public returns (uint256[])\n")),(0,l.kt)("p",null,"See {IERC1155-balanceOfBatch}."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"accounts")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"ids")," must have the same length.")),(0,l.kt)("h3",{id:"setapprovalforall"},"setApprovalForAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setApprovalForAll(\n  ) public\n")),(0,l.kt)("p",null,"See {IERC1155-setApprovalForAll}."),(0,l.kt)("h3",{id:"setproxyapproval"},"setProxyApproval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setProxyApproval(\n  ) public\n")),(0,l.kt)("h3",{id:"isapprovedforall"},"isApprovedForAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isApprovedForAll(\n  ) public returns (bool)\n")),(0,l.kt)("p",null,"See {IERC1155-isApprovedForAll}."),(0,l.kt)("h3",{id:"isholder"},"isHolder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isHolder(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"safetransferfrom"},"safeTransferFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function safeTransferFrom(\n  ) public\n")),(0,l.kt)("p",null,"See {IERC1155-safeTransferFrom}."),(0,l.kt)("h3",{id:"safebatchtransferfrom"},"safeBatchTransferFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function safeBatchTransferFrom(\n  ) public\n")),(0,l.kt)("p",null,"See {IERC1155-safeBatchTransferFrom}."),(0,l.kt)("h3",{id:"_mint"},"_mint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _mint(\n  ) internal\n")),(0,l.kt)("p",null,"Creates ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," tokens of token type ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", and assigns them to ",(0,l.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,l.kt)("p",null,"Emits a {TransferSingle} event."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"to")," refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\nacceptance magic value.")),(0,l.kt)("h3",{id:"_mintbatch"},"_mintBatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _mintBatch(\n  ) internal\n")),(0,l.kt)("p",null,"xref:ROOT:erc1155.adoc#batch-operations","[Batched]"," version of {_mint}."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"amounts")," must have the same length."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"to")," refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\nacceptance magic value.")),(0,l.kt)("h3",{id:"_burn"},"_burn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _burn(\n  ) internal\n")),(0,l.kt)("p",null,"Destroys ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," tokens of token type ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"account")),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account")," cannot be the zero address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account")," must have at least ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," tokens of token type ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),".")),(0,l.kt)("h3",{id:"_burnbatch"},"_burnBatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _burnBatch(\n  ) internal\n")),(0,l.kt)("p",null,"xref:ROOT:erc1155.adoc#batch-operations","[Batched]"," version of {_burn}."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"amounts")," must have the same length.")),(0,l.kt)("h3",{id:"_beforetokentransfer"},"_beforeTokenTransfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _beforeTokenTransfer(\n  ) internal\n")),(0,l.kt)("p",null,"Hook that is called before any token transfer. This includes minting\nand burning, as well as batched variants."),(0,l.kt)("p",null,"The same hook is called on both single and batched variants. For single\ntransfers, the length of the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," arrays will be 1."),(0,l.kt)("p",null,"Calling conditions (for each ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," pair):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"to")," are both non-zero, ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens\nof token type ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," will be  transferred to ",(0,l.kt)("inlineCode",{parentName:"li"},"to"),"."),(0,l.kt)("li",{parentName:"ul"},"When ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," is zero, ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," tokens of token type ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," will be minted\nfor ",(0,l.kt)("inlineCode",{parentName:"li"},"to"),"."),(0,l.kt)("li",{parentName:"ul"},"when ",(0,l.kt)("inlineCode",{parentName:"li"},"to")," is zero, ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"from"),"'s tokens of token type ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),"\nwill be burned."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"to")," are never both zero."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ids")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"amounts")," have the same, non-zero length.")),(0,l.kt)("p",null,"To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks","[Using Hooks]","."),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"proxyapproval"},"ProxyApproval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event ProxyApproval(\n  )\n")),(0,l.kt)("p",null,"Event for recording proxy approvals."))}m.isMDXComponent=!0}}]);