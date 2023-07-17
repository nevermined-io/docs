"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},l="Interface: NFTDetails",o={unversionedId:"react-components/catalog/API/interfaces/NFTDetails",id:"react-components/catalog/API/interfaces/NFTDetails",title:"Interface: NFTDetails",description:"Details of the NFT asset agreement",source:"@site/docs/react-components/catalog/API/interfaces/NFTDetails.md",sourceDirName:"react-components/catalog/API/interfaces",slug:"/react-components/catalog/API/interfaces/NFTDetails",permalink:"/docs/react-components/catalog/API/interfaces/NFTDetails",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/react-components/catalog/API/interfaces/NFTDetails.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: MarketplaceAPIToken",permalink:"/docs/react-components/catalog/API/interfaces/MarketplaceAPIToken"},next:{title:"Interface: NFTSModule",permalink:"/docs/react-components/catalog/API/interfaces/NFTSModule"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"lastChecksum",id:"lastchecksum",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lastUpdatedBy",id:"lastupdatedby",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"mintCap",id:"mintcap",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"nftContractAddress",id:"nftcontractaddress",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"nftInitialized",id:"nftinitialized",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"nftSupply",id:"nftsupply",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"nftURI",id:"nfturi",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"providers",id:"providers",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"royalties",id:"royalties",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"royaltyScheme",id:"royaltyscheme",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-12",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-nftdetails"},"Interface: NFTDetails"),(0,i.kt)("p",null,"Details of the NFT asset agreement"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#blocknumberupdated"},"blockNumberUpdated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#lastchecksum"},"lastChecksum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#lastupdatedby"},"lastUpdatedBy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#mintcap"},"mintCap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#nftcontractaddress"},"nftContractAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#nftinitialized"},"nftInitialized")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#nftsupply"},"nftSupply")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#nfturi"},"nftURI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#owner"},"owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#providers"},"providers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#royalties"},"royalties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#royaltyscheme"},"royaltyScheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/react-components/catalog/API/interfaces/NFTDetails#url"},"url"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The block number from blockchain where the asset was updated"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L336"},"types/index.ts:336")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastchecksum"},"lastChecksum"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lastChecksum"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The last checksum generated to verify the sources"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L330"},"types/index.ts:330")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lastupdatedby"},"lastUpdatedBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lastUpdatedBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The modification of the asset"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L334"},"types/index.ts:334")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mintcap"},"mintCap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mintCap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"The amount limit of nft which can be minted"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L348"},"types/index.ts:348")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftcontractaddress"},"nftContractAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftContractAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Contract NFT address which was created the NFT asset"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L342"},"types/index.ts:342")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftinitialized"},"nftInitialized"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftInitialized"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"When the NFT asset was initialized"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L344"},"types/index.ts:344")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftsupply"},"nftSupply"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftSupply"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"The amount of ntfs that are in circulation"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L340"},"types/index.ts:340")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nfturi"},"nftURI"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"nftURI"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Uri of the NFT"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L346"},"types/index.ts:346")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The owner of the asset"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L328"},"types/index.ts:328")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"providers"},"providers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"providers"),": ","[",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]"),(0,i.kt)("p",null,"Which services provide the asset"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L338"},"types/index.ts:338")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"royalties"},"royalties"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"royalties"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The rewards that the owner can get for every sale"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L350"},"types/index.ts:350")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"royaltyscheme"},"royaltyScheme"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"royaltyScheme"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RoyaltyKind")),(0,i.kt)("p",null,"Royalty scheme of the NFT asset"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L352"},"types/index.ts:352")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"url"},"url"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"url"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Url where is located the asset"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/types/index.ts#L332"},"types/index.ts:332")))}d.isMDXComponent=!0}}]);