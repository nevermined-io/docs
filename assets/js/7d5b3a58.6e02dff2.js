"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=d(a),N=i,c=k["".concat(p,".").concat(N)]||k[N]||m[N]||r;return a?n.createElement(c,l(l({ref:t},o),{},{components:a})):n.createElement(c,l({ref:t},o))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={},l="Interface: AssetPublishProviderState",s={unversionedId:"catalog/catalog/API/interfaces/AssetPublishProviderState",id:"catalog/catalog/API/interfaces/AssetPublishProviderState",title:"Interface: AssetPublishProviderState",description:"Provider with all the functionalities to publish assets (no-nft, nft721, nft1155)",source:"@site/docs/catalog/catalog/API/interfaces/AssetPublishProviderState.md",sourceDirName:"catalog/catalog/API/interfaces",slug:"/catalog/catalog/API/interfaces/AssetPublishProviderState",permalink:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/catalog/API/interfaces/AssetPublishProviderState.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: AssetPublishParams",permalink:"/docs/catalog/catalog/API/interfaces/AssetPublishParams"},next:{title:"Interface: AssetState",permalink:"/docs/catalog/catalog/API/interfaces/AssetState"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"assetMessage",id:"assetmessage",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"assetPublish",id:"assetpublish",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"errorAssetMessage",id:"errorassetmessage",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"handleChange",id:"handlechange",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"isProcessing",id:"isprocessing",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"isPublished",id:"ispublished",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"publishAsset",id:"publishasset",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"publishNFT1155",id:"publishnft1155",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"publishNFT721",id:"publishnft721",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-8",level:4},{value:"reset",id:"reset",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-9",level:4},{value:"setAssetMessage",id:"setassetmessage",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"setAssetPublish",id:"setassetpublish",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"setErrorAssetMessage",id:"seterrorassetmessage",level:3},{value:"Defined in",id:"defined-in-12",level:4}],o={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-assetpublishproviderstate"},"Interface: AssetPublishProviderState"),(0,i.kt)("p",null,"Provider with all the functionalities to publish assets (no-nft, nft721, nft1155)"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#assetmessage"},"assetMessage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#assetpublish"},"assetPublish")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#errorassetmessage"},"errorAssetMessage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#handlechange"},"handleChange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#isprocessing"},"isProcessing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#ispublished"},"isPublished")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#publishasset"},"publishAsset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#publishnft1155"},"publishNFT1155")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#publishnft721"},"publishNFT721")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#reset"},"reset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#setassetmessage"},"setAssetMessage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#setassetpublish"},"setAssetPublish")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/AssetPublishProviderState#seterrorassetmessage"},"setErrorAssetMessage"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"assetmessage"},"assetMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"assetMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Handle publish asset message"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L789"},"types/index.ts:789")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assetpublish"},"assetPublish"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"assetPublish"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/AssetPublishParams"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetPublishParams"))),(0,i.kt)("p",null,"All the parameters needed to publish an asset"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L795"},"types/index.ts:795")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"errorassetmessage"},"errorAssetMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"errorAssetMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Handle error publish asset message"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L787"},"types/index.ts:787")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlechange"},"handleChange"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"handleChange"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Update asset parameters when some input changes"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Parameter value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Input where come the changes which match with the parameters")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L806"},"types/index.ts:806")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isprocessing"},"isProcessing"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isProcessing"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If the asset is publishing"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L793"},"types/index.ts:793")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ispublished"},"isPublished"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isPublished"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If the asset was published correctly"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L791"},"types/index.ts:791")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publishasset"},"publishAsset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"publishAsset"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"asset"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"assetAttributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetAttributes")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"cryptoConfig?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoConfig")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"method?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"EncryptionMethod")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"onEvent?"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"next"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateProgressStep"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"password?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"publishMetadata?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PublishMetadata")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"txParameters?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TxParameters"),"  }) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"asset"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"Nevermined is a network where users register digital assets and attach to\nthem services (like data sharing, nfts minting, etc).\nWith this method a user can register an asset in Nevermined giving a piece of metadata.\nThis will return the DDO created (including the unique identifier of the asset - aka DID)."),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.assetAttributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AssetAttributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attribute object discribing the asset (metadata, price, encryption method, etc...)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.cryptoConfig?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CryptoConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Setting for encrypting asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.method?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"EncryptionMethod")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.onEvent?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"next"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"CreateProgressStep"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A callback to handle progress events")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.password?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password to encrypt metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.publishMetadata?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublishMetadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows to specify if the metadata should be stored in different backends")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"asset.txParameters?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TxParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"The DDO object including the asset metadata and the DID"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L826"},"types/index.ts:826")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publishnft1155"},"publishNFT1155"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"publishNFT1155"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"nft1155"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"cryptoConfig?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoConfig")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"method?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"EncryptionMethod")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"nftAttributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTAttributes")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"onEvent?"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"next"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateProgressStep"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"password?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"publishMetadata?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PublishMetadata")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"txParameters?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TxParameters"),"  }) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"nft1155"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"In Nevermined is possible to register a digital asset that allow users pay for having a\nNFT (ERC-1155). This typically allows content creators to provide access to exclusive\ncontents for NFT holders.\nERC-1155 NFTs are semi-fungible, meaning that a NFT can have multiple editions."),(0,i.kt)("p",null,"This method will create a new digital asset associated to a ERC-1155 NFT contract."),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.cryptoConfig?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CryptoConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Setting for encrypting asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.method?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"EncryptionMethod")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.nftAttributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NFTAttributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attribute object discribing the asset (metadata, price, encryption method, etc...)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.onEvent?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"next"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"CreateProgressStep"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A callback to handle progress events")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.password?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password to encrypt metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.publishMetadata?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublishMetadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows to specify if the metadata should be stored in different backends")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft1155.txParameters?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TxParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"The DDO object including the asset metadata and the DID"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L891"},"types/index.ts:891")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publishnft721"},"publishNFT721"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"publishNFT721"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"nft721"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"cryptoConfig?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoConfig")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"method?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"EncryptionMethod")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"nftAttributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"NFTAttributes")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"onEvent?"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"next"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateProgressStep"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"password?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"publishMetadata?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PublishMetadata")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"txParameters?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TxParameters"),"  }) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"nft721"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"In Nevermined is possible to register a digital asset that allow users pay for having a\nNFT (ERC-721). This typically allows content creators to provide access to exclusive\ncontents for NFT holders.\nIt will create a new digital asset associated to a ERC-721 NFT contract\n(given the ",(0,i.kt)("inlineCode",{parentName:"p"},"nftAddress")," parameter)"),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.cryptoConfig?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CryptoConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Setting for encrypting asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.method?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"EncryptionMethod")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.nftAttributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NFTAttributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attribute object discribing the asset (metadata, price, encryption method, etc...)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.onEvent?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"next"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"CreateProgressStep"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A callback to handle progress events")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.password?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password to encrypt metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.publishMetadata?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PublishMetadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows to specify if the metadata should be stored in different backends")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nft721.txParameters?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TxParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"The DDO object including the asset metadata and the DID"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L858"},"types/index.ts:858")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"reset"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"resetAssetPublish"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/AssetPublishParams"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetPublishParams")),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"resetAssetPublish"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Reset all the parameters of the asset"),(0,i.kt)("h5",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resetAssetPublish")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/catalog/catalog/API/interfaces/AssetPublishParams"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetPublishParams"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial parameters used for reset")))),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L810"},"types/index.ts:810")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setassetmessage"},"setAssetMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"setAssetMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatch"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"SetStateAction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">",">"),(0,i.kt)("p",null,"Set asset message"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L799"},"types/index.ts:799")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setassetpublish"},"setAssetPublish"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"setAssetPublish"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatch"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"SetStateAction"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/AssetPublishParams"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetPublishParams")),">",">"),(0,i.kt)("p",null,"Set parameters needed to publish an asset"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L797"},"types/index.ts:797")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"seterrorassetmessage"},"setErrorAssetMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"setErrorAssetMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Dispatch"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"SetStateAction"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">",">"),(0,i.kt)("p",null,"Set error asset message"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9cf205d/catalog/src/types/index.ts#L801"},"types/index.ts:801")))}m.isMDXComponent=!0}}]);