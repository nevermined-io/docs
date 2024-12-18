"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(o,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,s={unversionedId:"nevermined-sdk/api-reference/enums/DIDResolvePolicy",id:"nevermined-sdk/api-reference/enums/DIDResolvePolicy",title:"DIDResolvePolicy",description:"@nevermined-io/sdk - v3.0.44 / DIDResolvePolicy",source:"@site/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy.md",sourceDirName:"nevermined-sdk/api-reference/enums",slug:"/nevermined-sdk/api-reference/enums/DIDResolvePolicy",permalink:"/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateProgressStep",permalink:"/docs/nevermined-sdk/api-reference/enums/CreateProgressStep"},next:{title:"ERCType",permalink:"/docs/nevermined-sdk/api-reference/enums/ERCType"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Enumeration Members",id:"enumeration-members",level:3},{value:"Enumeration Members",id:"enumeration-members-1",level:2},{value:"ImmutableFirst",id:"immutablefirst",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"MetadataAPIFirst",id:"metadataapifirst",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"NoRegistry",id:"noregistry",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"OnlyImmutable",id:"onlyimmutable",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"OnlyMetadataAPI",id:"onlymetadataapi",level:3},{value:"Defined in",id:"defined-in-4",level:4}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.44")," / DIDResolvePolicy"),(0,r.kt)("h1",{id:"enumeration-didresolvepolicy"},"Enumeration: DIDResolvePolicy"),(0,r.kt)("p",null,"It described the policy to be used when resolving an asset. It has the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ImmutableFirst - It checks if there is a reference to an immutable data-store (IPFS, Filecoin, etc) on-chain. If that's the case uses the URL to resolve the Metadata. If not try to resolve the metadata using the URL of the Metadata/Marketplace API"),(0,r.kt)("li",{parentName:"ul"},"MetadataAPIFirst - Try to resolve the metadata from the Marketplace/Metadata API, if it can't tries to resolve using the immutable url"),(0,r.kt)("li",{parentName:"ul"},"OnlyImmutable - Try to resolve the metadata only from the immutable data store URL"),(0,r.kt)("li",{parentName:"ul"},"OnlyMetadataAPI - Try to resolve the metadata only from the Metadata API. It gets the metadata api url from the DIDRegistry"),(0,r.kt)("li",{parentName:"ul"},"NoRegisry - Gets the metadata from the Metadata API using as endpoint the metadata api url from the SDK config. This method don't gets any on-chain information because assumes the DID is not registered on-chain")),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy#immutablefirst"},"ImmutableFirst")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy#metadataapifirst"},"MetadataAPIFirst")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy#noregistry"},"NoRegistry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy#onlyimmutable"},"OnlyImmutable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/enums/DIDResolvePolicy#onlymetadataapi"},"OnlyMetadataAPI"))),(0,r.kt)("h2",{id:"enumeration-members-1"},"Enumeration Members"),(0,r.kt)("h3",{id:"immutablefirst"},"ImmutableFirst"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ImmutableFirst")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/MetadataTypes.ts#L10"},"src/types/MetadataTypes.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"metadataapifirst"},"MetadataAPIFirst"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"MetadataAPIFirst")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/MetadataTypes.ts#L11"},"src/types/MetadataTypes.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"noregistry"},"NoRegistry"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"NoRegistry")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"4")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/MetadataTypes.ts#L14"},"src/types/MetadataTypes.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onlyimmutable"},"OnlyImmutable"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"OnlyImmutable")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"2")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/MetadataTypes.ts#L12"},"src/types/MetadataTypes.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onlymetadataapi"},"OnlyMetadataAPI"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"OnlyMetadataAPI")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"3")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/MetadataTypes.ts#L13"},"src/types/MetadataTypes.ts:13")))}p.isMDXComponent=!0}}]);