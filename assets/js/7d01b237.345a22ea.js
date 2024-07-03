"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4903],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),v=l(t),f=a,k=v["".concat(o,".").concat(f)]||v[f]||p[f]||i;return t?r.createElement(k,c(c({ref:n},s),{},{components:t})):r.createElement(k,c({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=v;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},80885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={},c=void 0,d={unversionedId:"nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",id:"nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",title:"ProvenanceRegistry",description:"@nevermined-io/sdk - v3.0.16 / ProvenanceRegistry",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProvenanceBaseEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},next:{title:"Provider",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Provider"}},o={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"activityId",id:"activityid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"agentId",id:"agentid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"agentInvolvedId",id:"agentinvolvedid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"createdBy",id:"createdby",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"did",id:"did",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"method",id:"method",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"relatedDid",id:"relateddid",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"signatureDelegate",id:"signaturedelegate",level:3},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.16")," / ProvenanceRegistry"),(0,a.kt)("h1",{id:"interface-provenanceregistry"},"Interface: ProvenanceRegistry"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#activityid"},"activityId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#agentid"},"agentId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#agentinvolvedid"},"agentInvolvedId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#blocknumberupdated"},"blockNumberUpdated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#createdby"},"createdBy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#did"},"did")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#method"},"method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#relateddid"},"relatedDid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#signaturedelegate"},"signatureDelegate"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"activityid"},"activityId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"activityId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L29"},"src/keeper/contracts/Provenance.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"agentid"},"agentId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"agentId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L28"},"src/keeper/contracts/Provenance.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"agentinvolvedid"},"agentInvolvedId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"agentInvolvedId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L30"},"src/keeper/contracts/Provenance.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L33"},"src/keeper/contracts/Provenance.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createdby"},"createdBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"createdBy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L32"},"src/keeper/contracts/Provenance.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"did"},"did"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"did"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L26"},"src/keeper/contracts/Provenance.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"method"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ProvenanceMethod"},(0,a.kt)("inlineCode",{parentName:"a"},"ProvenanceMethod"))),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L31"},"src/keeper/contracts/Provenance.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"relateddid"},"relatedDid"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"relatedDid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L27"},"src/keeper/contracts/Provenance.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signaturedelegate"},"signatureDelegate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"signatureDelegate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/55c3b4ac21ca5824c7e92f5077fc57cd9e47c00a/src/keeper/contracts/Provenance.ts#L34"},"src/keeper/contracts/Provenance.ts:34")))}p.isMDXComponent=!0}}]);