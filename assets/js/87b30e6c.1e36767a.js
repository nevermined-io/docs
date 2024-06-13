"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),f=l(n),k=i,m=f["".concat(s,".").concat(k)]||f[k]||c[k]||r;return n?a.createElement(m,p(p({ref:t},o),{},{components:n})):a.createElement(m,p({ref:t},o))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,p[1]=d;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={},p=void 0,d={unversionedId:"nevermined-sdk/api-reference/interfaces/MetaDataMain",id:"nevermined-sdk/api-reference/interfaces/MetaDataMain",title:"MetaDataMain",description:"@nevermined-io/sdk - v3.0.13 / MetaDataMain",source:"@site/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/MetaDataMain",permalink:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MetaDataExternalResource",permalink:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataExternalResource"},next:{title:"MetadataValidationResults",permalink:"/docs/nevermined-sdk/api-reference/interfaces/MetadataValidationResults"}},s={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"algorithm",id:"algorithm",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"author",id:"author",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"dateCreated",id:"datecreated",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"datePublished",id:"datepublished",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"encryptedService",id:"encryptedservice",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"ercType",id:"erctype",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"files",id:"files",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"isDTP",id:"isdtp",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"license",id:"license",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"nftType",id:"nfttype",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"paymentAttributes",id:"paymentattributes",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"service",id:"service",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"subType",id:"subtype",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"subscription",id:"subscription",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"updatedAt",id:"updatedat",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"webService",id:"webservice",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"workflow",id:"workflow",level:3},{value:"Defined in",id:"defined-in-19",level:4}],o={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.13")," / MetaDataMain"),(0,i.kt)("h1",{id:"interface-metadatamain"},"Interface: MetaDataMain"),(0,i.kt)("p",null,"Main attributes of assets metadata."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/README.md"},"https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/README.md")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#algorithm"},"algorithm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#author"},"author")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#datecreated"},"dateCreated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#datepublished"},"datePublished")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#encryptedservice"},"encryptedService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#erctype"},"ercType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#files"},"files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#isdtp"},"isDTP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#license"},"license")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#name"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#nfttype"},"nftType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#nonce"},"nonce")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#paymentattributes"},"paymentAttributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#service"},"service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#subtype"},"subType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#subscription"},"subscription")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#type"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#updatedat"},"updatedAt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#webservice"},"webService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataMain#workflow"},"workflow"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"algorithm"},"algorithm"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"algorithm"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/Algorithm"},(0,i.kt)("inlineCode",{parentName:"a"},"Algorithm"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L326"},"src/types/DDOTypes.ts:326")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"author"},"author"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"author"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of the entity generating this data (e.g. Tfl, Disney Corp, etc.)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'Met Office'\n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L304"},"src/types/DDOTypes.ts:304")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datecreated"},"dateCreated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dateCreated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The date on which the asset was created by the originator in\nISO 8601 format, Coordinated Universal Time."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'2019-01-31T08:38:32Z'\n")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L280"},"src/types/DDOTypes.ts:280")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datepublished"},"datePublished"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"datePublished"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The date on which the asset DDO was registered into the metadata store.\nThis value is created automatically by Metadata upon registering,\nso this value can't be set."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'2019-01-31T08:38:32Z'\n")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L288"},"src/types/DDOTypes.ts:288")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"encryptedservice"},"encryptedService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"encryptedService"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L322"},"src/types/DDOTypes.ts:322")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"erctype"},"ercType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ercType"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ERCType"},(0,i.kt)("inlineCode",{parentName:"a"},"ERCType"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L330"},"src/types/DDOTypes.ts:330")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"files"},"files"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"files"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaDataExternalResource"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataExternalResource")),"[]"),(0,i.kt)("p",null,"Array of File objects including the encrypted file urls and some additional information."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L316"},"src/types/DDOTypes.ts:316")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isdtp"},"isDTP"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"isDTP"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L334"},"src/types/DDOTypes.ts:334")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"license"},"license"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"license"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,'Short name referencing the license of the asset (e.g. Public Domain, CC-0, CC-BY, No License Specified, etc. ).\nIf it\'s not specified, the following value will be added: "No License Specified".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'CC-BY'\n")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L311"},"src/types/DDOTypes.ts:311")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Descriptive name of the Asset."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'UK Weather information 2011'\n")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L249"},"src/types/DDOTypes.ts:249")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nfttype"},"nftType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"nftType"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference#neverminednfttype"},(0,i.kt)("inlineCode",{parentName:"a"},"NeverminedNFTType"))),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L332"},"src/types/DDOTypes.ts:332")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nonce"},"nonce"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"nonce"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L298"},"src/types/DDOTypes.ts:298")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"paymentattributes"},"paymentAttributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"paymentAttributes"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes"},(0,i.kt)("inlineCode",{parentName:"a"},"PaymentAttributes")),"[]"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L336"},"src/types/DDOTypes.ts:336")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"service"},"service"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"service"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceCommon"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceCommon"))),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L328"},"src/types/DDOTypes.ts:328")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subtype"},"subType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"subType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Sub type asssociated to the main type of the asset. This subtype is open so final users are not restricted to use anything they need.\nHelps to filter by the sub type of asset, for example if type is a service, the subtype could ai-agent, web-service, web-socket-service, etc\nAnother example, if the type is 'dataset' the subtype could be 'tabular', 'parquet', 'csv', etc"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L273"},"src/types/DDOTypes.ts:273")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscription"},"subscription"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"subscription"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/SubscriptionMetadata"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscriptionMetadata"))),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L318"},"src/types/DDOTypes.ts:318")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"compute"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflow"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"service"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"dataset"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"algorithm"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subscription"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"model"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"file"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"other"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"assistant"')),(0,i.kt)("p",null,'Type of the Asset. Helps to filter by the type of asset,\ninitially ("dataset", "algorithm", "compute", "workflow", "model", "file", "subscription", "other").'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'dataset'\n")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L256"},"src/types/DDOTypes.ts:256")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatedat"},"updatedAt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"updatedAt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The date on which the asset DDO was updated into the metadata store.\nThis value is created automatically by Metadata upon update,\nso this value can't be set."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'2019-01-31T08:38:32Z'\n")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L296"},"src/types/DDOTypes.ts:296")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"webservice"},"webService"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"webService"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService"},(0,i.kt)("inlineCode",{parentName:"a"},"WebService"))),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L320"},"src/types/DDOTypes.ts:320")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"workflow"},"workflow"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"workflow"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/Workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"Workflow"))),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L324"},"src/types/DDOTypes.ts:324")))}c.isMDXComponent=!0}}]);