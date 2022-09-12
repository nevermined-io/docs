"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[4834],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>u});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),d=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=t,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return n?a.createElement(k,i(i({ref:r},p),{},{components:n})):a.createElement(k,i({ref:r},p))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2438:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(7462),t=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"nevermined-sdk/api-reference/modules/subgraphs",id:"nevermined-sdk/api-reference/modules/subgraphs",title:"subgraphs",description:"@nevermined-io/nevermined-sdk-js / subgraphs",source:"@site/docs/nevermined-sdk/api-reference/modules/subgraphs.md",sourceDirName:"nevermined-sdk/api-reference/modules",slug:"/nevermined-sdk/api-reference/modules/subgraphs",permalink:"/docs/nevermined-sdk/api-reference/modules/subgraphs",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/nevermined-sdk/api-reference/modules/subgraphs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"subgraphs.WhitelistingCondition",permalink:"/docs/nevermined-sdk/api-reference/modules/subgraphs.WhitelistingCondition"},next:{title:"templates",permalink:"/docs/nevermined-sdk/api-reference/modules/templates"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Namespaces",id:"namespaces",level:3}],p={toc:d};function m(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/nevermined-sdk-js")," / subgraphs"),(0,t.kt)("h1",{id:"namespace-subgraphs"},"Namespace: subgraphs"),(0,t.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,t.kt)("h3",{id:"namespaces"},"Namespaces"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AaveBorrowCondition"},"AaveBorrowCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AaveCollateralDepositCondition"},"AaveCollateralDepositCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AaveCollateralWithdrawCondition"},"AaveCollateralWithdrawCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AaveCreditTemplate"},"AaveCreditTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AaveRepayCondition"},"AaveRepayCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AccessCondition"},"AccessCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AccessProofCondition"},"AccessProofCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AccessProofTemplate"},"AccessProofTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AccessTemplate"},"AccessTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AgreementStoreManager"},"AgreementStoreManager")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.ComputeExecutionCondition"},"ComputeExecutionCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.ConditionStoreManager"},"ConditionStoreManager")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.DIDRegistry"},"DIDRegistry")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.DIDSalesTemplate"},"DIDSalesTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.Dispenser"},"Dispenser")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.DistributeNFTCollateralCondition"},"DistributeNFTCollateralCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.EscrowComputeExecutionTemplate"},"EscrowComputeExecutionTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.EscrowPaymentCondition"},"EscrowPaymentCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.HashLockCondition"},"HashLockCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.LockPaymentCondition"},"LockPaymentCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721AccessProofTemplate"},"NFT721AccessProofTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721AccessSwapTemplate"},"NFT721AccessSwapTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721AccessTemplate"},"NFT721AccessTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721EscrowPaymentCondition"},"NFT721EscrowPaymentCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721HolderCondition"},"NFT721HolderCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721LockCondition"},"NFT721LockCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721SalesTemplate"},"NFT721SalesTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721SalesWithAccessTemplate"},"NFT721SalesWithAccessTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFT721Upgradeable"},"NFT721Upgradeable")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTAccessCondition"},"NFTAccessCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTAccessProofTemplate"},"NFTAccessProofTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTAccessSwapTemplate"},"NFTAccessSwapTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTAccessTemplate"},"NFTAccessTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTEscrowPaymentCondition"},"NFTEscrowPaymentCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTHolderCondition"},"NFTHolderCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTLockCondition"},"NFTLockCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTSalesTemplate"},"NFTSalesTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NFTSalesWithAccessTemplate"},"NFTSalesWithAccessTemplate")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NeverminedConfig"},"NeverminedConfig")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.NeverminedToken"},"NeverminedToken")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.RewardsDistributor"},"RewardsDistributor")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.SignCondition"},"SignCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.StandardRoyalties"},"StandardRoyalties")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.TemplateStoreManager"},"TemplateStoreManager")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.ThresholdCondition"},"ThresholdCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.TransferDIDOwnershipCondition"},"TransferDIDOwnershipCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.TransferNFT721Condition"},"TransferNFT721Condition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.TransferNFTCondition"},"TransferNFTCondition")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/subgraphs.WhitelistingCondition"},"WhitelistingCondition"))))}m.isMDXComponent=!0}}]);