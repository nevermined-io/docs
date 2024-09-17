(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6805],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>m,kt:()=>p});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,b=u["".concat(c,".").concat(p)]||u[p]||d[p]||n;return r?a.createElement(b,i(i({ref:t},m),{},{components:r})):a.createElement(b,i({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9633:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var a=r(7294),o=r(6010),n=r(3438),i=r(9960),s=r(3919),c=r(5999),l=r(9621);function m(e){let{defaultIcon:t,iconStaticFolderPath:n,iconClassName:i}=e;const[s,c]=(0,a.useState)();return(0,a.useEffect)((()=>{n&&r(2349)(`./${n}`).then((e=>c(e.default)))}),[n]),n&&s?a.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},a.createElement("img",{src:s,className:(0,o.Z)("sidebar-item-doc-card__icon",i)})):n?null:a.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},t)}function d(e){let{href:t,children:r,className:n}=e;return a.createElement(i.Z,{href:t,className:(0,o.Z)("card",l.Z.cardContainer,n)},r)}function u(e){let{href:t,icon:r,title:n,description:i,className:s}=e;return a.createElement(d,{href:t,className:s},r,a.createElement("h2",{className:(0,o.Z)("sidebar-item-doc-card__title",l.Z.cardTitle),title:n},n),i&&a.createElement("p",{className:(0,o.Z)("sidebar-item-doc-card__description",l.Z.cardDescription),title:i},i))}function p(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?a.createElement(u,{href:r,icon:a.createElement(m,{defaultIcon:"\ud83d\uddc3\ufe0f",iconStaticFolderPath:t.customProps?.iconStaticFolderPath,iconClassName:t.customProps?.iconClassName}),title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length}),className:(0,o.Z)("sidebar-item-doc-card","sidebar-item-doc-card__category",t.customProps?.className)}):null}function b(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:a.createElement(m,{defaultIcon:r,iconStaticFolderPath:t.customProps?.iconStaticFolderPath,iconClassName:t.customProps?.iconClassName}),title:t.label,description:i?.description,className:(0,o.Z)("sidebar-item-doc-card","sidebar-item-doc-card__link",t.customProps?.className)})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(b,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,n.jA)();return a.createElement(f,{items:r.items,className:t})}function f(e){const{items:t,className:r}=e;if(!t)return a.createElement(v,e);const i=(0,n.MN)(t);return a.createElement("section",{className:(0,o.Z)("row","sidebar-item-doc-card__row",r)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}},8600:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=r(7462),o=(r(7294),r(3905)),n=r(9633);const i={sidebar_position:1,description:"Nevermined Smart Contracts"},s="Smart Contracts",c={unversionedId:"architecture/contracts/index",id:"architecture/contracts/index",title:"Smart Contracts",description:"Nevermined Smart Contracts",source:"@site/docs/architecture/contracts/index.md",sourceDirName:"architecture/contracts",slug:"/architecture/contracts/",permalink:"/docs/architecture/contracts/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/contracts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"Building Blocks",permalink:"/docs/architecture/building-blocks"},next:{title:"Contracts ABIs",permalink:"/docs/architecture/contracts/ContractABIs"}},l={},m=[{value:"Main functionality",id:"main-functionality",level:2}],d={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"Nevermined Smart Contracts implement the main business logic of all the Nevermined use cases that allow the trustless interaction between users for building digital assets ecosystems."),(0,o.kt)("admonition",{title:"Open Source",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Smart Contracts are Open Source software built in Solidity, allowing to be deployed in any EVM compatible network.")),(0,o.kt)("h2",{id:"main-functionality"},"Main functionality"),(0,o.kt)("p",null,"The Smart Contracts provide the following functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DID Registry")," - Nevermined uses W3C Decentralized Identifiers (DID) to identify and register assets in the platform. The DID Registry allows the registering and resolving capabilities of assets across multiple Metadata providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Execution Agreements (SEAs)")," - The core engine of the platform. They allow us to define on-chain condition pipelines enabling the users to define complex use cases. The SEAs orchestrate the execution of the Data Access and Data Computation use cases of Nevermined."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Conditions")," - Small modules that can be plugged into the SEAs allowing to add validations logic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contract Templates")," - Pre-defined contract templates implementing some basic use cases"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ERC20 Token")," - Utility token used within the platform allowing to build all the payment mechanisms used across the system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration interface")," - Allowing to configure dynamically some of the internal parameters of Nevermined (for example via a DAO)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dispenser")," - Contract that allows to dispense token under request"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Libraries")," - Utility libraries used across the contracts")),(0,o.kt)("p",null,"All the previous contracts are Open Source software and provide the core of the Nevermined network."),(0,o.kt)(n.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},9621:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}},2349:(e,t,r)=>{var a={"./CNAME":[267,7,267],"./contracts/AaveBorrowCondition.arbitrum-sepolia":[1346,3,1346],"./contracts/AaveBorrowCondition.arbitrum-sepolia.json":[1346,3,1346],"./contracts/AaveCollateralDepositCondition.arbitrum-sepolia":[5282,3,5282],"./contracts/AaveCollateralDepositCondition.arbitrum-sepolia.json":[5282,3,5282],"./contracts/AaveCollateralWithdrawCondition.arbitrum-sepolia":[1833,3,1833],"./contracts/AaveCollateralWithdrawCondition.arbitrum-sepolia.json":[1833,3,1833],"./contracts/AaveCreditTemplate.arbitrum-sepolia":[5923,3,5923],"./contracts/AaveCreditTemplate.arbitrum-sepolia.json":[5923,3,5923],"./contracts/AaveCreditVault.arbitrum-sepolia":[7691,3,7691],"./contracts/AaveCreditVault.arbitrum-sepolia.json":[7691,3,7691],"./contracts/AaveRepayCondition.arbitrum-sepolia":[8921,3,8921],"./contracts/AaveRepayCondition.arbitrum-sepolia.json":[8921,3,8921],"./contracts/AccessCondition.arbitrum-sepolia":[2379,3,2379],"./contracts/AccessCondition.arbitrum-sepolia.json":[2379,3,2379],"./contracts/AccessDLEQCondition.arbitrum-sepolia":[7236,3,7236],"./contracts/AccessDLEQCondition.arbitrum-sepolia.json":[7236,3,7236],"./contracts/AccessDLEQTemplate.arbitrum-sepolia":[9490,3,9490],"./contracts/AccessDLEQTemplate.arbitrum-sepolia.json":[9490,3,9490],"./contracts/AccessProofCondition.arbitrum-sepolia":[720,3,720],"./contracts/AccessProofCondition.arbitrum-sepolia.json":[720,3,720],"./contracts/AccessProofTemplate.arbitrum-sepolia":[274,3,274],"./contracts/AccessProofTemplate.arbitrum-sepolia.json":[274,3,274],"./contracts/AccessTemplate.arbitrum-sepolia":[5840,3,5840],"./contracts/AccessTemplate.arbitrum-sepolia.json":[5840,3,5840],"./contracts/AgreementStoreManager.arbitrum-sepolia":[9965,3,9965],"./contracts/AgreementStoreManager.arbitrum-sepolia.json":[9965,3,9965],"./contracts/ComputeExecutionCondition.arbitrum-sepolia":[7763,3,7763],"./contracts/ComputeExecutionCondition.arbitrum-sepolia.json":[7763,3,7763],"./contracts/ConditionStoreManager.arbitrum-sepolia":[1872,3,1872],"./contracts/ConditionStoreManager.arbitrum-sepolia.json":[1872,3,1872],"./contracts/DIDRegistry.arbitrum-sepolia":[8626,3,8626],"./contracts/DIDRegistry.arbitrum-sepolia.json":[8626,3,8626],"./contracts/DIDSalesTemplate.arbitrum-sepolia":[1370,3,1370],"./contracts/DIDSalesTemplate.arbitrum-sepolia.json":[1370,3,1370],"./contracts/Dispenser.arbitrum-sepolia":[2359,3,2359],"./contracts/Dispenser.arbitrum-sepolia.json":[2359,3,2359],"./contracts/DistributeNFTCollateralCondition.arbitrum-sepolia":[1705,3,1705],"./contracts/DistributeNFTCollateralCondition.arbitrum-sepolia.json":[1705,3,1705],"./contracts/EscrowComputeExecutionTemplate.arbitrum-sepolia":[4112,3,4112],"./contracts/EscrowComputeExecutionTemplate.arbitrum-sepolia.json":[4112,3,4112],"./contracts/EscrowPaymentCondition.arbitrum-sepolia":[1751,3,1751],"./contracts/EscrowPaymentCondition.arbitrum-sepolia.json":[1751,3,1751],"./contracts/HashLockCondition.arbitrum-sepolia":[1747,3,1747],"./contracts/HashLockCondition.arbitrum-sepolia.json":[1747,3,1747],"./contracts/LockPaymentCondition.arbitrum-sepolia":[3947,3,3947],"./contracts/LockPaymentCondition.arbitrum-sepolia.json":[3947,3,3947],"./contracts/NFT1155SubscriptionUpgradeable.arbitrum-sepolia":[5910,3,2364],"./contracts/NFT1155SubscriptionUpgradeable.arbitrum-sepolia.json":[5910,3,2364],"./contracts/NFT1155Upgradeable.arbitrum-sepolia":[7963,3,7963],"./contracts/NFT1155Upgradeable.arbitrum-sepolia.json":[7963,3,7963],"./contracts/NFT721AccessDLEQTemplate.arbitrum-sepolia":[2905,3,2905],"./contracts/NFT721AccessDLEQTemplate.arbitrum-sepolia.json":[2905,3,2905],"./contracts/NFT721AccessProofTemplate.arbitrum-sepolia":[5683,3,8457],"./contracts/NFT721AccessProofTemplate.arbitrum-sepolia.json":[5683,3,8457],"./contracts/NFT721AccessSwapTemplate.arbitrum-sepolia":[1246,3,1246],"./contracts/NFT721AccessSwapTemplate.arbitrum-sepolia.json":[1246,3,1246],"./contracts/NFT721AccessTemplate.arbitrum-sepolia":[6121,3,6121],"./contracts/NFT721AccessTemplate.arbitrum-sepolia.json":[6121,3,6121],"./contracts/NFT721EscrowPaymentCondition.arbitrum-sepolia":[6823,3,6823],"./contracts/NFT721EscrowPaymentCondition.arbitrum-sepolia.json":[6823,3,6823],"./contracts/NFT721HolderCondition.arbitrum-sepolia":[4894,3,4894],"./contracts/NFT721HolderCondition.arbitrum-sepolia.json":[4894,3,4894],"./contracts/NFT721LockCondition.arbitrum-sepolia":[7235,3,7235],"./contracts/NFT721LockCondition.arbitrum-sepolia.json":[7235,3,7235],"./contracts/NFT721SalesTemplate.arbitrum-sepolia":[4925,3,4925],"./contracts/NFT721SalesTemplate.arbitrum-sepolia.json":[4925,3,4925],"./contracts/NFT721SalesWithAccessTemplate.arbitrum-sepolia":[2116,3,2116],"./contracts/NFT721SalesWithAccessTemplate.arbitrum-sepolia.json":[2116,3,2116],"./contracts/NFT721SalesWithDLEQTemplate.arbitrum-sepolia":[2782,3,2782],"./contracts/NFT721SalesWithDLEQTemplate.arbitrum-sepolia.json":[2782,3,2782],"./contracts/NFT721SubscriptionUpgradeable.arbitrum-sepolia":[3274,3,3274],"./contracts/NFT721SubscriptionUpgradeable.arbitrum-sepolia.json":[3274,3,3274],"./contracts/NFT721Upgradeable.arbitrum-sepolia":[4333,3,4333],"./contracts/NFT721Upgradeable.arbitrum-sepolia.json":[4333,3,4333],"./contracts/NFTAccessCondition.arbitrum-sepolia":[8954,3,8954],"./contracts/NFTAccessCondition.arbitrum-sepolia.json":[8954,3,8954],"./contracts/NFTAccessDLEQTemplate.arbitrum-sepolia":[2448,3,2448],"./contracts/NFTAccessDLEQTemplate.arbitrum-sepolia.json":[2448,3,2448],"./contracts/NFTAccessProofTemplate.arbitrum-sepolia":[2118,3,2118],"./contracts/NFTAccessProofTemplate.arbitrum-sepolia.json":[2118,3,2118],"./contracts/NFTAccessSwapTemplate.arbitrum-sepolia":[1766,3,1766],"./contracts/NFTAccessSwapTemplate.arbitrum-sepolia.json":[1766,3,1766],"./contracts/NFTAccessTemplate.arbitrum-sepolia":[2282,3,2282],"./contracts/NFTAccessTemplate.arbitrum-sepolia.json":[2282,3,2282],"./contracts/NFTEscrowPaymentCondition.arbitrum-sepolia":[2872,3,2872],"./contracts/NFTEscrowPaymentCondition.arbitrum-sepolia.json":[2872,3,2872],"./contracts/NFTHolderCondition.arbitrum-sepolia":[1606,3,1606],"./contracts/NFTHolderCondition.arbitrum-sepolia.json":[1606,3,1606],"./contracts/NFTLockCondition.arbitrum-sepolia":[9504,3,9504],"./contracts/NFTLockCondition.arbitrum-sepolia.json":[9504,3,9504],"./contracts/NFTSalesTemplate.arbitrum-sepolia":[5756,3,9935],"./contracts/NFTSalesTemplate.arbitrum-sepolia.json":[5756,3,9935],"./contracts/NFTSalesWithAccessTemplate.arbitrum-sepolia":[7471,3,7471],"./contracts/NFTSalesWithAccessTemplate.arbitrum-sepolia.json":[7471,3,7471],"./contracts/NFTSalesWithDLEQTemplate.arbitrum-sepolia":[810,3,810],"./contracts/NFTSalesWithDLEQTemplate.arbitrum-sepolia.json":[810,3,810],"./contracts/NeverminedConfig.arbitrum-sepolia":[7442,3,7442],"./contracts/NeverminedConfig.arbitrum-sepolia.json":[7442,3,7442],"./contracts/NeverminedToken.arbitrum-sepolia":[8550,3,8940],"./contracts/NeverminedToken.arbitrum-sepolia.json":[8550,3,8940],"./contracts/PlonkVerifier.arbitrum-sepolia":[9144,3,9144],"./contracts/PlonkVerifier.arbitrum-sepolia.json":[9144,3,9144],"./contracts/RewardsDistributor.arbitrum-sepolia":[1114,3,1114],"./contracts/RewardsDistributor.arbitrum-sepolia.json":[1114,3,1114],"./contracts/SignCondition.arbitrum-sepolia":[3650,3,3650],"./contracts/SignCondition.arbitrum-sepolia.json":[3650,3,3650],"./contracts/StandardRoyalties.arbitrum-sepolia":[9825,3,9825],"./contracts/StandardRoyalties.arbitrum-sepolia.json":[9825,3,9825],"./contracts/TemplateStoreManager.arbitrum-sepolia":[4290,3,4290],"./contracts/TemplateStoreManager.arbitrum-sepolia.json":[4290,3,4290],"./contracts/ThresholdCondition.arbitrum-sepolia":[6073,3,6073],"./contracts/ThresholdCondition.arbitrum-sepolia.json":[6073,3,6073],"./contracts/TransferDIDOwnershipCondition.arbitrum-sepolia":[4501,3,4501],"./contracts/TransferDIDOwnershipCondition.arbitrum-sepolia.json":[4501,3,4501],"./contracts/TransferNFT721Condition.arbitrum-sepolia":[2672,3,2672],"./contracts/TransferNFT721Condition.arbitrum-sepolia.json":[2672,3,2672],"./contracts/TransferNFTCondition.arbitrum-sepolia":[7317,3,7317],"./contracts/TransferNFTCondition.arbitrum-sepolia.json":[7317,3,7317],"./contracts/WhitelistingCondition.arbitrum-sepolia":[5793,3,5793],"./contracts/WhitelistingCondition.arbitrum-sepolia.json":[5793,3,5793],"./fonts/Catalogue/Catalogue-Bold.otf":[1631,9,1631],"./fonts/Catalogue/Catalogue-BoldItalic.otf":[6900,9,6900],"./fonts/Catalogue/Catalogue-Book.otf":[1514,9,1514],"./fonts/Catalogue/Catalogue-BookItalic.otf":[1360,9,1360],"./fonts/Catalogue/Catalogue-Demi.otf":[6629,9,6629],"./fonts/Catalogue/Catalogue-DemiItalic.otf":[2076,9,9752],"./fonts/Catalogue/Catalogue-Italic.otf":[3762,9,3762],"./fonts/Catalogue/Catalogue-Light.otf":[5438,9,5438],"./fonts/Catalogue/Catalogue-LightItalic.otf":[3913,9,3913],"./fonts/Catalogue/Catalogue-Medium.otf":[242,9,242],"./fonts/Catalogue/Catalogue-MediumItalic.otf":[8079,9,8079],"./fonts/Catalogue/Catalogue-Regular.otf":[7152,9,1327],"./fonts/Catalogue/Catalogue-Thin.otf":[5975,9,5975],"./fonts/Catalogue/Catalogue-ThinItalic.otf":[7500,9,7500],"./fonts/PT_Mono/OFL.txt":[8313,9,8313],"./fonts/PT_Mono/PTMono-Regular.ttf":[1706,9,1706],"./img/docusaurus.png":[9676,9,9676],"./img/favicon.ico":[8750,9,8750],"./img/logo.svg":[1735,9,1735],"./img/nevermined/nevermined-logo-symbol-gradient-dark-bg.png":[8240,9,8240],"./img/nevermined/nevermined-symbol-gradient.png":[3128,9,3128],"./img/nevermined/nevermined_logo.svg":[1569,9,1569],"./img/nevermined/nevermined_logo_1.png":[1508,9,1508],"./img/nevermined/nevermined_logo_1.svg":[1218,9,1218],"./img/nevermined/nevermined_logo_250.png":[6406,9,6406],"./img/nvm-logo.png":[9674,9,9674],"./img/undraw_docusaurus_mountain.svg":[3181,9,3181],"./img/undraw_docusaurus_react.svg":[1336,9,1336],"./img/undraw_docusaurus_tree.svg":[6750,9,6750],"./nevermined/analysis.svg":[616,9,616],"./nevermined/arrow-right.svg":[2253,9,2253],"./nevermined/backgrounds/contact-bg-body.png":[5444,9,5444],"./nevermined/backgrounds/contact-bg-body.webp":[4242,9,4242],"./nevermined/backgrounds/header-bg.png":[6785,9,6785],"./nevermined/backgrounds/header-bg.webp":[1499,9,1499],"./nevermined/backgrounds/header-bg_mobile.png":[6425,9,6425],"./nevermined/backgrounds/header-bg_mobile.webp":[77,9,77],"./nevermined/backgrounds/home-bg-banner.png":[6744,9,6744],"./nevermined/backgrounds/home-bg-banner.webp":[4880,9,4880],"./nevermined/backgrounds/home-bg-banner_mobile.png":[6536,9,6536],"./nevermined/backgrounds/home-bg-banner_mobile.webp":[5841,9,5841],"./nevermined/backgrounds/home-bg-box.png":[5922,9,5922],"./nevermined/backgrounds/home-bg-products.png":[517,9,517],"./nevermined/backgrounds/home-bg-products.webp":[3277,9,3277],"./nevermined/backgrounds/home-bg-products_mobile.png":[3816,9,3816],"./nevermined/backgrounds/home-bg-products_mobile.webp":[8574,9,8574],"./nevermined/backgrounds/home-bg.png":[5387,9,5387],"./nevermined/backgrounds/single-bg-body.png":[4341,9,4341],"./nevermined/backgrounds/single-bg-body.webp":[2079,9,2079],"./nevermined/bat/battalion-bg.png":[7674,9,7674],"./nevermined/bat/battalion-logo.png":[9604,9,9604],"./nevermined/breadcrumb-arrow.svg":[3526,9,3526],"./nevermined/burger.svg":[7250,9,7250],"./nevermined/close.svg":[6430,9,6430],"./nevermined/compatibility.svg":[5488,9,5488],"./nevermined/digital-assets-marketplaces.svg":[8648,9,8648],"./nevermined/discord-gray.svg":[7958,9,7958],"./nevermined/discord-round.svg":[5627,9,5627],"./nevermined/discord.svg":[8963,9,8963],"./nevermined/doc-card-assets-tokenization-via-NFTs.svg":[5355,9,5355],"./nevermined/doc-card-connecting-devs-to-infrastructure.svg":[3195,9,3195],"./nevermined/doc-card-data-sharing.svg":[7262,9,7262],"./nevermined/doc-card-introducing-a-standard-model-for-the-web3-process-lifecycle.svg":[1459,9,1459],"./nevermined/documents.svg":[7071,9,7071],"./nevermined/filtering.svg":[4897,9,4897],"./nevermined/github-gray.svg":[2052,9,2052],"./nevermined/github.svg":[5324,9,5324],"./nevermined/integrationDocs.svg":[4640,9,4640],"./nevermined/linkedin.svg":[4339,9,4339],"./nevermined/logo.svg":[619,9,619],"./nevermined/medium.svg":[1858,9,1858],"./nevermined/neverminedDocs.svg":[4269,9,4269],"./nevermined/planetEclipse.svg":[1247,9,1247],"./nevermined/remote-computation.svg":[1582,9,12],"./nevermined/test/tutorialsDocs.svg":[1141,9,645],"./nevermined/tutorialsDocs.png":[8640,9,8640],"./nevermined/tutorialsDocs.svg":[8338,9,8281],"./nevermined/twitter.svg":[7157,9,7157]};function o(e){if(!r.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return r.e(t[2]).then((()=>r.t(o,16|t[1])))}o.keys=()=>Object.keys(a),o.id=2349,e.exports=o}}]);