(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9186],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,b=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?o.createElement(b,i(i({ref:t},l),{},{components:n})):o.createElement(b,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19633:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(67294),a=n(86010),r=n(53438),i=n(39960),s=n(13919),c=n(95999),m=n(69621);function l(e){let{defaultIcon:t,iconStaticFolderPath:r,iconClassName:i}=e;const[s,c]=(0,o.useState)();return(0,o.useEffect)((()=>{r&&n(2349)(`./${r}`).then((e=>c(e.default)))}),[r]),r&&s?o.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},o.createElement("img",{src:s,className:(0,a.Z)("sidebar-item-doc-card__icon",i)})):r?null:o.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},t)}function d(e){let{href:t,children:n,className:r}=e;return o.createElement(i.Z,{href:t,className:(0,a.Z)("card",m.Z.cardContainer,r)},n)}function u(e){let{href:t,icon:n,title:r,description:i,className:s}=e;return o.createElement(d,{href:t,className:s},n,o.createElement("h2",{className:(0,a.Z)("sidebar-item-doc-card__title",m.Z.cardTitle),title:r},r),i&&o.createElement("p",{className:(0,a.Z)("sidebar-item-doc-card__description",m.Z.cardDescription),title:i},i))}function p(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?o.createElement(u,{href:n,icon:o.createElement(l,{defaultIcon:"\ud83d\uddc3\ufe0f",iconStaticFolderPath:t.customProps?.iconStaticFolderPath,iconClassName:t.customProps?.iconClassName}),title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length}),className:(0,a.Z)("sidebar-item-doc-card","sidebar-item-doc-card__category",t.customProps?.className)}):null}function b(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:o.createElement(l,{defaultIcon:n,iconStaticFolderPath:t.customProps?.iconStaticFolderPath,iconClassName:t.customProps?.iconClassName}),title:t.label,description:i?.description,className:(0,a.Z)("sidebar-item-doc-card","sidebar-item-doc-card__link",t.customProps?.className)})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(b,{item:t});case"category":return o.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,r.jA)();return o.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return o.createElement(v,e);const i=(0,r.MN)(t);return o.createElement("section",{className:(0,a.Z)("row","sidebar-item-doc-card__row",n)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}},396:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905)),r=n(19633);const i={sidebar_position:1,description:"Nevermined Environments"},s="Nevermined Public Environments",c={unversionedId:"environments/index",id:"environments/index",title:"Nevermined Public Environments",description:"Nevermined Environments",source:"@site/docs/environments/index.mdx",sourceDirName:"environments",slug:"/environments/",permalink:"/docs/environments/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/environments/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined Environments"},sidebar:"tutorialSidebar",previous:{title:"Running Nevermined in your local environment",permalink:"/docs/tutorials/running-locally"},next:{title:"Production environments",permalink:"/docs/environments/nvm-prod-envs"}},m={},l=[{value:"Blockchain networks supported",id:"blockchain-networks-supported",level:2},{value:"Production and Testing environments",id:"production-and-testing-environments",level:2},{value:"Versions",id:"versions",level:2},{value:"About the tags",id:"about-the-tags",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nevermined-public-environments"},"Nevermined Public Environments"),(0,a.kt)("p",null,"Nevermined is available in different networks/environments for users to make use of this\ninfrastructure without the complexity of deploying Smart Contracts or other components of\nthe stack."),(0,a.kt)("p",null,"Existing networks have different characteristics related to the underlying blockchain network being used and whether they are a production or a test environment."),(0,a.kt)("h2",{id:"blockchain-networks-supported"},"Blockchain networks supported"),(0,a.kt)("p",null,"Nevermined Smart Contracts are EVM compatible so they can be deployed on any EVM compatible blockchain. Our main deployment is on ",(0,a.kt)("strong",{parentName:"p"},"Arbitrum")," network but we have deployments on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Arbitrum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Polygon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gnosis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optimism")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Celo"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are planning to augment the list of supported networks. If you need to use Nevermined on any other network, please let us know ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/GZju2qScKq"},"through Discord"),".")),(0,a.kt)("h2",{id:"production-and-testing-environments"},"Production and Testing environments"),(0,a.kt)("p",null,"For each blockchain network we support actively we have Production and Testing deployments. This can help you execute a typical development/testing process and further release into production independently of the blockchain network you use."),(0,a.kt)("h2",{id:"versions"},"Versions"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic versioning")," for our Smart Contracts interfaces and Apis. We deploy and mantain multiple versions of the contracts and APIs in these environments for integration with different versions of the stack."),(0,a.kt)("p",null,"Generally we ",(0,a.kt)("strong",{parentName:"p"},"upgrade")," Smart Contracts when we implement ",(0,a.kt)("strong",{parentName:"p"},"patches")," and ",(0,a.kt)("strong",{parentName:"p"},"minor")," changes and deploy a new version of the Smart Contracts when we implement ",(0,a.kt)("strong",{parentName:"p"},"mayor")," changes."),(0,a.kt)("p",null,"This means multiple versions of Smart Contracts for the same network and environment, allowing you to integrate either depending on your development lifecycle."),(0,a.kt)("h2",{id:"about-the-tags"},"About the tags"),(0,a.kt)("p",null,"Tags are different contract deployments for the same network & version. Each tag is independent from the others. Generically we use two different tags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"public"),": This tag/contracts instane is meant to be used for new integrations, public integrations, etc... It expected to have the latest versions and/or configurations. This is a ",(0,a.kt)("em",{parentName:"p"},"shared")," environment. ",(0,a.kt)("em",{parentName:"p"},"Probably you need to use these environments."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"common"),': This tag/contracts instane is used by more "stable" applications. Each application has its own nevermined stack (',(0,a.kt)("inlineCode",{parentName:"p"},"node")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"markeplace-api"),")."))),(0,a.kt)(r.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},69621:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}},2349:(e,t,n)=>{var o={"./CNAME":[10267,7,267],"./contracts/AaveBorrowCondition.mumbai":[31178,3,1178],"./contracts/AaveBorrowCondition.mumbai.json":[31178,3,1178],"./contracts/AaveCollateralDepositCondition.mumbai":[88735,3,8735],"./contracts/AaveCollateralDepositCondition.mumbai.json":[88735,3,8735],"./contracts/AaveCollateralWithdrawCondition.mumbai":[90257,3,257],"./contracts/AaveCollateralWithdrawCondition.mumbai.json":[90257,3,257],"./contracts/AaveCreditTemplate.mumbai":[60531,3,531],"./contracts/AaveCreditTemplate.mumbai.json":[60531,3,531],"./contracts/AaveCreditVault.mumbai":[26486,3,6486],"./contracts/AaveCreditVault.mumbai.json":[26486,3,6486],"./contracts/AaveRepayCondition.mumbai":[46581,3,6581],"./contracts/AaveRepayCondition.mumbai.json":[46581,3,6581],"./contracts/AccessCondition.mumbai":[47017,3,7017],"./contracts/AccessCondition.mumbai.json":[47017,3,7017],"./contracts/AccessProofCondition.mumbai":[57140,3,7140],"./contracts/AccessProofCondition.mumbai.json":[57140,3,7140],"./contracts/AccessProofTemplate.mumbai":[20237,3,237],"./contracts/AccessProofTemplate.mumbai.json":[20237,3,237],"./contracts/AccessTemplate.mumbai":[39665,3,9665],"./contracts/AccessTemplate.mumbai.json":[39665,3,9665],"./contracts/AgreementStoreManager.mumbai":[77754,3,7754],"./contracts/AgreementStoreManager.mumbai.json":[77754,3,7754],"./contracts/ComputeExecutionCondition.mumbai":[39661,3,9661],"./contracts/ComputeExecutionCondition.mumbai.json":[39661,3,9661],"./contracts/ConditionStoreManager.mumbai":[68046,3,8046],"./contracts/ConditionStoreManager.mumbai.json":[68046,3,8046],"./contracts/DIDRegistry.mumbai":[15985,3,5985],"./contracts/DIDRegistry.mumbai.json":[15985,3,5985],"./contracts/DIDRegistryLibrary.mumbai":[71960,3,1960],"./contracts/DIDRegistryLibrary.mumbai.json":[71960,3,1960],"./contracts/DIDSalesTemplate.mumbai":[58114,3,8114],"./contracts/DIDSalesTemplate.mumbai.json":[58114,3,8114],"./contracts/Dispenser.mumbai":[16575,3,6575],"./contracts/Dispenser.mumbai.json":[16575,3,6575],"./contracts/DistributeNFTCollateralCondition.mumbai":[39575,3,9575],"./contracts/DistributeNFTCollateralCondition.mumbai.json":[39575,3,9575],"./contracts/EpochLibrary.mumbai":[36442,3,6442],"./contracts/EpochLibrary.mumbai.json":[36442,3,6442],"./contracts/EscrowComputeExecutionTemplate.mumbai":[65730,3,5730],"./contracts/EscrowComputeExecutionTemplate.mumbai.json":[65730,3,5730],"./contracts/EscrowPaymentCondition.mumbai":[43601,3,5255],"./contracts/EscrowPaymentCondition.mumbai.json":[43601,3,5255],"./contracts/HashLockCondition.mumbai":[54942,3,4942],"./contracts/HashLockCondition.mumbai.json":[54942,3,4942],"./contracts/LockPaymentCondition.mumbai":[59512,3,9512],"./contracts/LockPaymentCondition.mumbai.json":[59512,3,9512],"./contracts/NFT721AccessProofTemplate.mumbai":[75674,3,5674],"./contracts/NFT721AccessProofTemplate.mumbai.json":[75674,3,5674],"./contracts/NFT721AccessSwapTemplate.mumbai":[449,3,449],"./contracts/NFT721AccessSwapTemplate.mumbai.json":[449,3,449],"./contracts/NFT721AccessTemplate.mumbai":[53108,3,3108],"./contracts/NFT721AccessTemplate.mumbai.json":[53108,3,3108],"./contracts/NFT721EscrowPaymentCondition.mumbai":[13601,3,3601],"./contracts/NFT721EscrowPaymentCondition.mumbai.json":[13601,3,3601],"./contracts/NFT721HolderCondition.mumbai":[11048,3,1048],"./contracts/NFT721HolderCondition.mumbai.json":[11048,3,1048],"./contracts/NFT721LockCondition.mumbai":[83310,3,3310],"./contracts/NFT721LockCondition.mumbai.json":[83310,3,3310],"./contracts/NFT721SalesTemplate.mumbai":[16114,3,6114],"./contracts/NFT721SalesTemplate.mumbai.json":[16114,3,6114],"./contracts/NFT721SalesWithAccessTemplate.mumbai":[8854,3,8854],"./contracts/NFT721SalesWithAccessTemplate.mumbai.json":[8854,3,8854],"./contracts/NFT721Upgradeable.mumbai":[23355,3,3355],"./contracts/NFT721Upgradeable.mumbai.json":[23355,3,3355],"./contracts/NFTAccessCondition.mumbai":[28991,3,8991],"./contracts/NFTAccessCondition.mumbai.json":[28991,3,8991],"./contracts/NFTAccessProofTemplate.mumbai":[30146,3,1602],"./contracts/NFTAccessProofTemplate.mumbai.json":[30146,3,1602],"./contracts/NFTAccessSwapTemplate.mumbai":[77227,3,7227],"./contracts/NFTAccessSwapTemplate.mumbai.json":[77227,3,7227],"./contracts/NFTAccessTemplate.mumbai":[8456,3,8456],"./contracts/NFTAccessTemplate.mumbai.json":[8456,3,8456],"./contracts/NFTEscrowPaymentCondition.mumbai":[36866,3,6866],"./contracts/NFTEscrowPaymentCondition.mumbai.json":[36866,3,6866],"./contracts/NFTHolderCondition.mumbai":[6813,3,6813],"./contracts/NFTHolderCondition.mumbai.json":[6813,3,6813],"./contracts/NFTLockCondition.mumbai":[84228,3,4228],"./contracts/NFTLockCondition.mumbai.json":[84228,3,4228],"./contracts/NFTSalesTemplate.mumbai":[842,3,842],"./contracts/NFTSalesTemplate.mumbai.json":[842,3,842],"./contracts/NFTSalesWithAccessTemplate.mumbai":[56720,3,6720],"./contracts/NFTSalesWithAccessTemplate.mumbai.json":[56720,3,6720],"./contracts/NFTUpgradeable.mumbai":[99948,3,9948],"./contracts/NFTUpgradeable.mumbai.json":[99948,3,9948],"./contracts/NeverminedConfig.mumbai":[4284,3,4284],"./contracts/NeverminedConfig.mumbai.json":[4284,3,4284],"./contracts/NeverminedToken.mumbai":[33146,3,3146],"./contracts/NeverminedToken.mumbai.json":[33146,3,3146],"./contracts/PlonkVerifier.mumbai":[21666,3,1666],"./contracts/PlonkVerifier.mumbai.json":[21666,3,1666],"./contracts/RewardsDistributor.mumbai":[51305,3,1305],"./contracts/RewardsDistributor.mumbai.json":[51305,3,1305],"./contracts/SignCondition.mumbai":[73721,3,3721],"./contracts/SignCondition.mumbai.json":[73721,3,3721],"./contracts/StandardRoyalties.mumbai":[3011,3,3011],"./contracts/StandardRoyalties.mumbai.json":[3011,3,3011],"./contracts/TemplateStoreManager.mumbai":[24073,3,4073],"./contracts/TemplateStoreManager.mumbai.json":[24073,3,4073],"./contracts/ThresholdCondition.mumbai":[35365,3,5365],"./contracts/ThresholdCondition.mumbai.json":[35365,3,5365],"./contracts/TransferDIDOwnershipCondition.mumbai":[20821,3,821],"./contracts/TransferDIDOwnershipCondition.mumbai.json":[20821,3,821],"./contracts/TransferNFT721Condition.mumbai":[68603,3,8603],"./contracts/TransferNFT721Condition.mumbai.json":[68603,3,8603],"./contracts/TransferNFTCondition.mumbai":[28070,3,8070],"./contracts/TransferNFTCondition.mumbai.json":[28070,3,8070],"./contracts/WhitelistingCondition.mumbai":[97482,3,7482],"./contracts/WhitelistingCondition.mumbai.json":[97482,3,7482],"./fonts/Catalogue/Catalogue-Bold.otf":[71631,9,1631],"./fonts/Catalogue/Catalogue-BoldItalic.otf":[16900,9,6900],"./fonts/Catalogue/Catalogue-Book.otf":[31514,9,1514],"./fonts/Catalogue/Catalogue-BookItalic.otf":[91360,9,1360],"./fonts/Catalogue/Catalogue-Demi.otf":[86629,9,6629],"./fonts/Catalogue/Catalogue-DemiItalic.otf":[92076,9,9752],"./fonts/Catalogue/Catalogue-Italic.otf":[63762,9,3762],"./fonts/Catalogue/Catalogue-Light.otf":[85438,9,5438],"./fonts/Catalogue/Catalogue-LightItalic.otf":[93913,9,3913],"./fonts/Catalogue/Catalogue-Medium.otf":[20242,9,242],"./fonts/Catalogue/Catalogue-MediumItalic.otf":[8079,9,8079],"./fonts/Catalogue/Catalogue-Regular.otf":[61327,9,1327],"./fonts/Catalogue/Catalogue-Thin.otf":[85975,9,5975],"./fonts/Catalogue/Catalogue-ThinItalic.otf":[67500,9,7500],"./fonts/PT_Mono/OFL.txt":[8313,9,8313],"./fonts/PT_Mono/PTMono-Regular.ttf":[21706,9,1706],"./img/docusaurus.png":[49676,9,9676],"./img/favicon.ico":[68750,9,8750],"./img/logo.svg":[11735,9,1735],"./img/nevermined/nevermined-logo-symbol-gradient-dark-bg.png":[88240,9,8240],"./img/nevermined/nevermined-symbol-gradient.png":[3128,9,3128],"./img/nevermined/nevermined_logo.svg":[21569,9,1569],"./img/nevermined/nevermined_logo_1.png":[71508,9,1508],"./img/nevermined/nevermined_logo_1.svg":[31218,9,1218],"./img/nevermined/nevermined_logo_250.png":[16406,9,6406],"./img/nvm-logo.png":[99674,9,9674],"./img/undraw_docusaurus_mountain.svg":[13181,9,3181],"./img/undraw_docusaurus_react.svg":[31336,9,1336],"./img/undraw_docusaurus_tree.svg":[96750,9,6750],"./nevermined/analysis.svg":[60616,9,616],"./nevermined/arrow-right.svg":[72253,9,2253],"./nevermined/backgrounds/contact-bg-body.png":[5444,9,5444],"./nevermined/backgrounds/contact-bg-body.webp":[44242,9,4242],"./nevermined/backgrounds/header-bg.png":[76785,9,6785],"./nevermined/backgrounds/header-bg.webp":[81499,9,3316],"./nevermined/backgrounds/header-bg_mobile.png":[56425,9,6425],"./nevermined/backgrounds/header-bg_mobile.webp":[60077,9,77],"./nevermined/backgrounds/home-bg-banner.png":[76744,9,6744],"./nevermined/backgrounds/home-bg-banner.webp":[14880,9,4880],"./nevermined/backgrounds/home-bg-banner_mobile.png":[16536,9,6536],"./nevermined/backgrounds/home-bg-banner_mobile.webp":[35841,9,5841],"./nevermined/backgrounds/home-bg-box.png":[25922,9,5922],"./nevermined/backgrounds/home-bg-products.png":[80517,9,517],"./nevermined/backgrounds/home-bg-products.webp":[43277,9,3277],"./nevermined/backgrounds/home-bg-products_mobile.png":[93816,9,3816],"./nevermined/backgrounds/home-bg-products_mobile.webp":[88574,9,8574],"./nevermined/backgrounds/home-bg.png":[35387,9,5387],"./nevermined/backgrounds/single-bg-body.png":[84341,9,4341],"./nevermined/backgrounds/single-bg-body.webp":[32079,9,2079],"./nevermined/bat/battalion-bg.png":[7674,9,7674],"./nevermined/bat/battalion-logo.png":[49604,9,9604],"./nevermined/breadcrumb-arrow.svg":[3526,9,3526],"./nevermined/burger.svg":[57250,9,7250],"./nevermined/close.svg":[26430,9,6430],"./nevermined/compatibility.svg":[45488,9,5488],"./nevermined/digital-assets-marketplaces.svg":[48648,9,8648],"./nevermined/discord-gray.svg":[77958,9,7958],"./nevermined/discord-round.svg":[95627,9,5627],"./nevermined/discord.svg":[48963,9,8963],"./nevermined/doc-card-assets-tokenization-via-NFTs.svg":[85355,9,5355],"./nevermined/doc-card-connecting-devs-to-infrastructure.svg":[3195,9,3195],"./nevermined/doc-card-data-sharing.svg":[27262,9,7262],"./nevermined/doc-card-introducing-a-standard-model-for-the-web3-process-lifecycle.svg":[51459,9,1459],"./nevermined/documents.svg":[17071,9,7071],"./nevermined/filtering.svg":[44897,9,4897],"./nevermined/github-gray.svg":[82052,9,2052],"./nevermined/github.svg":[75324,9,5324],"./nevermined/integrationDocs.svg":[14640,9,4640],"./nevermined/linkedin.svg":[64339,9,4339],"./nevermined/logo.svg":[50619,9,619],"./nevermined/medium.svg":[81858,9,1858],"./nevermined/neverminedDocs.svg":[34269,9,4269],"./nevermined/planetEclipse.svg":[71247,9,1247],"./nevermined/remote-computation.svg":[40012,9,12],"./nevermined/test/tutorialsDocs.svg":[70645,9,645],"./nevermined/tutorialsDocs.png":[58640,9,8640],"./nevermined/tutorialsDocs.svg":[38338,9,8281],"./nevermined/twitter.svg":[17157,9,7792]};function a(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[2]).then((()=>n.t(a,16|t[1])))}a.keys=()=>Object.keys(o),a.id=2349,e.exports=a}}]);