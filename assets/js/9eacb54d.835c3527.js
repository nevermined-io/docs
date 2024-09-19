"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,f=m["".concat(l,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,d={unversionedId:"nevermined-sdk/api-reference/interfaces/ConditionData",id:"nevermined-sdk/api-reference/interfaces/ConditionData",title:"ConditionData",description:"@nevermined-io/sdk - v3.0.33 / ConditionData",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ConditionData.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ConditionData",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/ConditionData.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bookmark",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark"},next:{title:"ConditionInstanceSmall",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ConditionInstanceSmall"}},l={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockNumber",id:"blocknumber",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lastUpdatedBy",id:"lastupdatedby",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"state",id:"state",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"timeLock",id:"timelock",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"timeOut",id:"timeout",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"typeRef",id:"typeref",level:3},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.33")," / ConditionData"),(0,a.kt)("h1",{id:"interface-conditiondata"},"Interface: ConditionData"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#blocknumber"},"blockNumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#blocknumberupdated"},"blockNumberUpdated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#lastupdatedby"},"lastUpdatedBy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#state"},"state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#timelock"},"timeLock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#timeout"},"timeOut")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ConditionData#typeref"},"typeRef"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L13"},"src/keeper/contracts/managers/ConditionStoreManager.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L15"},"src/keeper/contracts/managers/ConditionStoreManager.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastupdatedby"},"lastUpdatedBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"lastUpdatedBy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L14"},"src/keeper/contracts/managers/ConditionStoreManager.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"state"},"state"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"state"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ConditionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConditionState"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L10"},"src/keeper/contracts/managers/ConditionStoreManager.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timelock"},"timeLock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"timeLock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L11"},"src/keeper/contracts/managers/ConditionStoreManager.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timeout"},"timeOut"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"timeOut"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L12"},"src/keeper/contracts/managers/ConditionStoreManager.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"typeref"},"typeRef"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"typeRef"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/3d639fcb0e672437e35812b11fb840dbd7e96061/src/keeper/contracts/managers/ConditionStoreManager.ts#L9"},"src/keeper/contracts/managers/ConditionStoreManager.ts:9")))}c.isMDXComponent=!0}}]);