"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,d=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,v=f["".concat(l,".").concat(m)]||f[m]||o[m]||d;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var d=n.length,a=new Array(d);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<d;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const d={},a=void 0,p={unversionedId:"nevermined-sdk/api-reference/interfaces/ServiceSecondary",id:"nevermined-sdk/api-reference/interfaces/ServiceSecondary",title:"ServiceSecondary",description:"@nevermined-io/sdk - v3.0.13 / ServiceSecondary",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ServiceSecondary",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ServicePlugin",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin"},next:{title:"Stage",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Stage"}},l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"agreementId",id:"agreementid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"attributes",id:"attributes",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"did",id:"did",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"index",id:"index",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"serviceEndpoint",id:"serviceendpoint",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"templateId",id:"templateid",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:c};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.13")," / ServiceSecondary"),(0,i.kt)("h1",{id:"interface-servicesecondary"},"Interface: ServiceSecondary"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference#service"},(0,i.kt)("inlineCode",{parentName:"a"},"Service"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ServiceSecondary"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#agreementid"},"agreementId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#attributes"},"attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#did"},"did")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#index"},"index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#serviceendpoint"},"serviceEndpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#templateid"},"templateId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary#type"},"type"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"agreementid"},"agreementId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"agreementId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L761"},"src/types/DDOTypes.ts:761")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"attributes"},"attributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"attributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Service.attributes"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L639"},"src/types/DDOTypes.ts:639")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"did"},"did"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L762"},"src/types/DDOTypes.ts:762")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"index"},"index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Service.index"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L636"},"src/types/DDOTypes.ts:636")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serviceendpoint"},"serviceEndpoint"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"serviceEndpoint"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Service.serviceEndpoint"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L637"},"src/types/DDOTypes.ts:637")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"templateid"},"templateId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"templateId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"Service.templateId"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L638"},"src/types/DDOTypes.ts:638")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference#servicetype"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceType"))),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"Service.type"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L635"},"src/types/DDOTypes.ts:635")))}o.isMDXComponent=!0}}]);