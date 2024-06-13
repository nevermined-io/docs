"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(t),f=a,k=v["".concat(o,".").concat(f)]||v[f]||l[f]||i;return t?r.createElement(k,d(d({ref:n},p),{},{components:t})):r.createElement(k,d({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=v;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var s=2;s<i;s++)d[s]=t[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},94450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},d=void 0,c={unversionedId:"nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent",id:"nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent",title:"ProvenanceBaseEvent",description:"@nevermined-io/sdk - v3.0.13 / ProvenanceBaseEvent",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProvenanceAttributeRegisteredEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceAttributeRegisteredEvent"},next:{title:"ProvenanceRegistry",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"activityId",id:"activityid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"attributes",id:"attributes",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"event",id:"event",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"method",id:"method",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"provId",id:"provid",level:3},{value:"Defined in",id:"defined-in-5",level:4}],p={toc:s};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.13")," / ProvenanceBaseEvent"),(0,a.kt)("h1",{id:"interface-provenancebaseevent"},"Interface: ProvenanceBaseEvent"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ProvenanceBaseEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ActedOnBehalfEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"ActedOnBehalfEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/UsedEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"UsedEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/WasAssociatedWithEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"WasAssociatedWithEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"WasDerivedFromEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/WasGeneratedByEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"WasGeneratedByEvent"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#activityid"},"activityId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#attributes"},"attributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#blocknumberupdated"},"blockNumberUpdated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#event"},"event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#method"},"method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#provid"},"provId"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"activityid"},"activityId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"activityId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/keeper/contracts/Provenance.ts#L53"},"src/keeper/contracts/Provenance.ts:53")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"attributes"},"attributes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"attributes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/keeper/contracts/Provenance.ts#L55"},"src/keeper/contracts/Provenance.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/keeper/contracts/Provenance.ts#L56"},"src/keeper/contracts/Provenance.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"event"},"event"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"event"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/keeper/contracts/Provenance.ts#L51"},"src/keeper/contracts/Provenance.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"method"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ProvenanceMethod"},(0,a.kt)("inlineCode",{parentName:"a"},"ProvenanceMethod"))),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/keeper/contracts/Provenance.ts#L52"},"src/keeper/contracts/Provenance.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"provid"},"provId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"provId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/keeper/contracts/Provenance.ts#L54"},"src/keeper/contracts/Provenance.ts:54")))}l.isMDXComponent=!0}}]);