"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,d(d({ref:t},o),{},{components:n})):r.createElement(k,d({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var p=2;p<i;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},d=void 0,l={unversionedId:"nevermined-sdk/api-reference/classes/NFTServiceAttributes",id:"nevermined-sdk/api-reference/classes/NFTServiceAttributes",title:"NFTServiceAttributes",description:"@nevermined-io/sdk - v3.0.23 / NFTServiceAttributes",source:"@site/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/NFTServiceAttributes",permalink:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NFTSalesTemplate",permalink:"/docs/nevermined-sdk/api-reference/classes/NFTSalesTemplate"},next:{title:"NFTsBaseApi",permalink:"/docs/nevermined-sdk/api-reference/classes/NFTsBaseApi"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties-1",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"duration",id:"duration",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"isSubscription",id:"issubscription",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"maxCreditsToCharge",id:"maxcreditstocharge",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"minCreditsRequired",id:"mincreditsrequired",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"minCreditsToCharge",id:"mincreditstocharge",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"nftTransfer",id:"nfttransfer",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"tokenId",id:"tokenid",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"defaultValues",id:"defaultvalues",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods-1",level:2},{value:"configureServicesAttributes",id:"configureservicesattributes",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getCreditsToCharge",id:"getcreditstocharge",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getDefaultNFTServiceAttributes",id:"getdefaultnftserviceattributes",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"isCreditsBalanceEnough",id:"iscreditsbalanceenough",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-12",level:4}],o={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23")," / NFTServiceAttributes"),(0,a.kt)("h1",{id:"class-nftserviceattributes"},"Class: NFTServiceAttributes"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#amount"},"amount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#duration"},"duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#issubscription"},"isSubscription")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#maxcreditstocharge"},"maxCreditsToCharge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#mincreditsrequired"},"minCreditsRequired")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#mincreditstocharge"},"minCreditsToCharge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#nfttransfer"},"nftTransfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#tokenid"},"tokenId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#defaultvalues"},"defaultValues"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#configureservicesattributes"},"configureServicesAttributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#getcreditstocharge"},"getCreditsToCharge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#getdefaultnftserviceattributes"},"getDefaultNFTServiceAttributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes#iscreditsbalanceenough"},"isCreditsBalanceEnough"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new NFTServiceAttributes"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTServiceAttributes"))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTServiceAttributes"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"amount"},"amount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"amount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("p",null,"Number of editions"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L17"},"src/models/NFTAttributes.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"duration"},"duration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"duration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"If is a subscription this means the number of blocks the subscription last. If 0 means unlimited"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L32"},"src/models/NFTAttributes.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"issubscription"},"isSubscription"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"isSubscription"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If true means the NFT works as a subscription"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L27"},"src/models/NFTAttributes.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxcreditstocharge"},"maxCreditsToCharge"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxCreditsToCharge"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("p",null,"The maximum number of credits that can be charged to the subscriber.\nIf not specified, the subscription cost is not capped"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L44"},"src/models/NFTAttributes.ts:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mincreditsrequired"},"minCreditsRequired"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minCreditsRequired"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("p",null,"The minimum number of credits that the subscribers needs to hold to access the asset.\nIf not specified, the amount defined in the service agreement or 1 credit will be required"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L56"},"src/models/NFTAttributes.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mincreditstocharge"},"minCreditsToCharge"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minCreditsToCharge"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("p",null,"The minimum number of credits that will be charged to the subscriber.\nIf not specified, the amount defined in the service agreement or 1 credit will be charged"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L50"},"src/models/NFTAttributes.ts:50")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nfttransfer"},"nftTransfer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nftTransfer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"The asset is transferred (true) or minted (false) with Nevermined contracts"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L22"},"src/models/NFTAttributes.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tokenid"},"tokenId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tokenId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The tokenId of the NFT related with the Service.\nFor example if is a NFT Access service requiring holding a NFT, this is the tokenId of the NFT"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L38"},"src/models/NFTAttributes.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"defaultvalues"},"defaultValues"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"defaultValues"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"duration")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"isSubscription")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"maxCreditsToCharge")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"minCreditsRequired")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"minCreditsToCharge")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nftTransfer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"serviceType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/code-reference#servicetype"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tokenId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L58"},"src/models/NFTAttributes.ts:58")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"configureservicesattributes"},"configureServicesAttributes"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"configureServicesAttributes"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"nftAttributes"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"\\<",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTAttributes")),">"),(0,a.kt)("p",null,"Given some partial nft attributes it applies some default validations and pre-configure default values"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nftAttributes")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Partial"),"\\<",(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NFTAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTAttributes")),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"partial nft attributes")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Partial"),"\\<",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTAttributes")),">"),(0,a.kt)("p",null,"nft attributes validated and configured"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L136"},"src/models/NFTAttributes.ts:136")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getcreditstocharge"},"getCreditsToCharge"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getCreditsToCharge"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"nftAttributes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"chargeType?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicAmount?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("p",null,"Taking into account the nft attributes confifured tt returns the number of credits to be consumed"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nftAttributes")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTServiceAttributes"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"chargeType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/enums/ChargeType"},(0,a.kt)("inlineCode",{parentName:"a"},"ChargeType"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ChargeType.Fixed")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dynamicAmount?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the dynamic amount of credits asked to be consumed")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("p",null,"amount to consume"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L81"},"src/models/NFTAttributes.ts:81")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getdefaultnftserviceattributes"},"getDefaultNFTServiceAttributes"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getDefaultNFTServiceAttributes"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Required"),"\\<",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTServiceAttributes")),">"),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Required"),"\\<",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTServiceAttributes")),">"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L70"},"src/models/NFTAttributes.ts:70")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"iscreditsbalanceenough"},"isCreditsBalanceEnough"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isCreditsBalanceEnough"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"nftAttributes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"creditsBalance"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicAmount?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Given some credits balance if checks if that's enough to access to a NFT asset"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nftAttributes")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NFTServiceAttributes"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTServiceAttributes"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"NFT Attributes metadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"creditsBalance")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint")),(0,a.kt)("td",{parentName:"tr",align:"left"},"balance of credits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dynamicAmount?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigint")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the dynamic amount of credits asked to be burned")))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"boolean"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/models/NFTAttributes.ts#L115"},"src/models/NFTAttributes.ts:115")))}c.isMDXComponent=!0}}]);