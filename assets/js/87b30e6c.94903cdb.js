"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=i,f=k["".concat(p,".").concat(m)]||k[m]||c[m]||r;return n?a.createElement(f,d(d({ref:t},o),{},{components:n})):a.createElement(f,d({ref:t},o))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var s=2;s<r;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},d=void 0,l={unversionedId:"nevermined-sdk/api-reference/interfaces/MetaDataMain",id:"nevermined-sdk/api-reference/interfaces/MetaDataMain",title:"MetaDataMain",description:"@nevermined-io/nevermined-sdk-js / MetaDataMain",source:"@site/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/MetaDataMain",permalink:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MetaData",permalink:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},next:{title:"NewBookmark",permalink:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"algorithm",id:"algorithm",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"author",id:"author",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"dateCreated",id:"datecreated",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"datePublished",id:"datepublished",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"encryptedService",id:"encryptedservice",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"ercType",id:"erctype",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"files",id:"files",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"isDTP",id:"isdtp",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"license",id:"license",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"nftType",id:"nfttype",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"price",id:"price",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"service",id:"service",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"workflow",id:"workflow",level:3},{value:"Defined in",id:"defined-in-14",level:4}],o={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/nevermined-sdk-js")," / MetaDataMain"),(0,i.kt)("h1",{id:"interface-metadatamain"},"Interface: MetaDataMain"),(0,i.kt)("p",null,"Main attributes of assets metadata."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/README.md"},"https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/README.md")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#algorithm"},"algorithm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#author"},"author")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#datecreated"},"dateCreated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#datepublished"},"datePublished")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#encryptedservice"},"encryptedService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#erctype"},"ercType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#files"},"files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#isdtp"},"isDTP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#license"},"license")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#name"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#nfttype"},"nftType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#price"},"price")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#service"},"service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#type"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#workflow"},"workflow"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"algorithm"},"algorithm"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"algorithm"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/Algorithm"},(0,i.kt)("inlineCode",{parentName:"a"},"Algorithm"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L188"},"src/ddo/MetaData.ts:188")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"author"},"author"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"author"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of the entity generating this data (e.g. Tfl, Disney Corp, etc.)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"Met Office"\n')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L164"},"src/ddo/MetaData.ts:164")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datecreated"},"dateCreated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dateCreated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The date on which the asset was created by the originator in\nISO 8601 format, Coordinated Universal Time."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"2019-01-31T08:38:32Z"\n')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L150"},"src/ddo/MetaData.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datepublished"},"datePublished"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"datePublished"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The date on which the asset DDO was registered into the metadata store.\nThis value is created automatically by Metadata upon registering,\nso this value can't be set."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"2019-01-31T08:38:32Z"\n')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L158"},"src/ddo/MetaData.ts:158")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"encryptedservice"},"encryptedService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"encryptedService"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L184"},"src/ddo/MetaData.ts:184")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"erctype"},"ercType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ercType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"ERCType")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L194"},"src/ddo/MetaData.ts:194")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"files"},"files"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"files"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/File"},(0,i.kt)("inlineCode",{parentName:"a"},"File")),"[]"),(0,i.kt)("p",null,"Array of File objects including the encrypted file urls and some additional information."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L182"},"src/ddo/MetaData.ts:182")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isdtp"},"isDTP"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"isDTP"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L192"},"src/ddo/MetaData.ts:192")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"license"},"license"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"license"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,'Short name referencing the license of the asset (e.g. Public Domain, CC-0, CC-BY, No License Specified, etc. ).\nIf it\'s not specified, the following value will be added: "No License Specified".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"CC-BY"\n')),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L171"},"src/ddo/MetaData.ts:171")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Descriptive name of the Asset."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"UK Weather information 2011"\n')),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L136"},"src/ddo/MetaData.ts:136")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nfttype"},"nftType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"nftType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"NeverminedNFTType")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L196"},"src/ddo/MetaData.ts:196")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"price"},"price"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"price"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Price of the asset."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"1000000000000000000"\n')),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L177"},"src/ddo/MetaData.ts:177")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"service"},"service"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"service"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/Service"},(0,i.kt)("inlineCode",{parentName:"a"},"Service"))),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L190"},"src/ddo/MetaData.ts:190")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"dataset"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"compute"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflow"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"algorithm"')),(0,i.kt)("p",null,'Type of the Asset. Helps to filter by the type of asset,\ninitially ("dataset", "algorithm", "compute", "workflow", "compute", "other").'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'"dataset"\n')),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L143"},"src/ddo/MetaData.ts:143")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"workflow"},"workflow"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"workflow"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/Workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"Workflow"))),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/eda22b6/src/ddo/MetaData.ts#L186"},"src/ddo/MetaData.ts:186")))}c.isMDXComponent=!0}}]);