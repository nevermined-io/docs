"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,u=c["".concat(o,".").concat(m)]||c[m]||k[m]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="Interface: AccountModule",d={unversionedId:"catalog/catalog/API/interfaces/AccountModule",id:"catalog/catalog/API/interfaces/AccountModule",title:"Interface: AccountModule",description:"AccountModule is exposed by the main context",source:"@site/docs/catalog/catalog/API/interfaces/AccountModule.md",sourceDirName:"catalog/catalog/API/interfaces",slug:"/catalog/catalog/API/interfaces/AccountModule",permalink:"/docs/catalog/catalog/API/interfaces/AccountModule",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/catalog/API/interfaces/AccountModule.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enumeration: TransferNFTConditionMethod",permalink:"/docs/catalog/catalog/API/enums/TransferNFTConditionMethod"},next:{title:"Interface: AssetFile",permalink:"/docs/catalog/catalog/API/interfaces/AssetFile"}},o={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"generateToken",id:"generatetoken",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"getAddressTokenSigner",id:"getaddresstokensigner",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"getCollection",id:"getcollection",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"getPublishedSubscriptions",id:"getpublishedsubscriptions",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"getReleases",id:"getreleases",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"isAssetHolder",id:"isassetholder",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"isNFT1155Holder",id:"isnft1155holder",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"isNFT721Holder",id:"isnft721holder",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-7",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"isTokenValid",id:"istokenvalid",level:3},{value:"Type declaration",id:"type-declaration-8",level:4},{value:"Returns",id:"returns-8",level:5},{value:"Defined in",id:"defined-in-8",level:4}],p={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-accountmodule"},"Interface: AccountModule"),(0,r.kt)("p",null,"AccountModule is exposed by the main context\nunder 'account' object"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#generatetoken"},"generateToken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#getaddresstokensigner"},"getAddressTokenSigner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#getcollection"},"getCollection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#getpublishedsubscriptions"},"getPublishedSubscriptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#getreleases"},"getReleases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#isassetholder"},"isAssetHolder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#isnft1155holder"},"isNFT1155Holder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#isnft721holder"},"isNFT721Holder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AccountModule#istokenvalid"},"isTokenValid"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"generatetoken"},"generateToken"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"generateToken"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,r.kt)("p",null,"Generate a token for authentication in the Marketplace API"),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,r.kt)("p",null,"The new generated token"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L403"},"types/index.ts:403")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getaddresstokensigner"},"getAddressTokenSigner"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getAddressTokenSigner"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Return the address that sign the token"),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The address token signer"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L413"},"types/index.ts:413")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcollection"},"getCollection"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getCollection"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("p",null,"Get the assets bought by the address given"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address which bought the assets returned")))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("p",null,"List of assets which was bought by the address given as argument"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L393"},"types/index.ts:393")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpublishedsubscriptions"},"getPublishedSubscriptions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getPublishedSubscriptions"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/PublishedSubscriptions"},(0,r.kt)("inlineCode",{parentName:"a"},"PublishedSubscriptions")),"[]",">"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/PublishedSubscriptions"},(0,r.kt)("inlineCode",{parentName:"a"},"PublishedSubscriptions")),"[]",">"),(0,r.kt)("p",null,"Get all the published subscription from the wallet address passed"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the address which published the subscription returned")))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/PublishedSubscriptions"},(0,r.kt)("inlineCode",{parentName:"a"},"PublishedSubscriptions")),"[]",">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L398"},"types/index.ts:398")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getreleases"},"getReleases"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getReleases"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("p",null,"Get all the assets published from the address passed by argument"),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address owner of the assets that we want to get")))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("p",null,"List of assets which was published by the address given"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L387"},"types/index.ts:387")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isassetholder"},"isAssetHolder"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isAssetHolder"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"walletAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"did"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"walletAddress"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"This method validates if an user is an asset holder."),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"did")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of the asset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"walletAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public address of the user")))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"true if the user owns at least one edition of the NFT"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L421"},"types/index.ts:421")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isnft1155holder"},"isNFT1155Holder"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isNFT1155Holder"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"walletAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"did"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"walletAddress"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"This method validates if a user is a NFT (ERC-1155 based) holder for a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenId"),".\nFor ERC-1155 tokens, we use the DID as tokenId. A user can between zero an multiple editions\nof a NFT (limitted by the NFT cap)."),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"did")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of the NFT within a NFT ERC-1155 contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"walletAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public address of the user")))),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"true if the user owns at least one edition of the NFT"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L431"},"types/index.ts:431")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isnft721holder"},"isNFT721Holder"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isNFT721Holder"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"nftAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"walletAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"nftAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"walletAddress"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"This method validates if a user is a NFT (ERC-721 based) holder for a specific NFT contract address.\nFor ERC-721 tokens, we use the DID as tokenId. A user can between zero an multiple editions\nof a NFT (limitted by the NFT cap)."),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nftAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The contract address of the ERC-721 NFT contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"walletAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public address of the user")))),(0,r.kt)("h5",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"true if the user holds the NFT"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L441"},"types/index.ts:441")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"istokenvalid"},"isTokenValid"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isTokenValid"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"type-declaration-8"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"check if the token for Marketplace API is valid"),(0,r.kt)("h5",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"if token is valid it will return true"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/30dad8d/catalog/src/types/index.ts#L408"},"types/index.ts:408")))}k.isMDXComponent=!0}}]);