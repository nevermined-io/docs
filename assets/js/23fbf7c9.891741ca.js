"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4093],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(t),f=i,u=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return t?n.createElement(u,s(s({ref:r},l),{},{components:t})):n.createElement(u,s({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14256:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const a={},s=void 0,o={unversionedId:"nevermined-sdk/api-reference/interfaces/AgreementPrepareResult",id:"nevermined-sdk/api-reference/interfaces/AgreementPrepareResult",title:"AgreementPrepareResult",description:"@nevermined-io/sdk - v3.1.0 / AgreementPrepareResult",source:"@site/docs/nevermined-sdk/api-reference/interfaces/AgreementPrepareResult.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/AgreementPrepareResult",permalink:"/docs/nevermined-sdk/api-reference/interfaces/AgreementPrepareResult",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AgreementData",permalink:"/docs/nevermined-sdk/api-reference/interfaces/AgreementData"},next:{title:"Algorithm",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Algorithm"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"agreementIdSeed",id:"agreementidseed",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"signature",id:"signature",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:d};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.1.0")," / AgreementPrepareResult"),(0,i.kt)("h1",{id:"interface-agreementprepareresult"},"Interface: AgreementPrepareResult"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AgreementPrepareResult#agreementidseed"},"agreementIdSeed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AgreementPrepareResult#signature"},"signature"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"agreementidseed"},"agreementIdSeed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"agreementIdSeed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/613e61d8e011d30fd229ab508635ef7f04ad97cb/src/nevermined/api/AgreementsApi.ts#L10"},"src/nevermined/api/AgreementsApi.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signature"},"signature"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"signature"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/613e61d8e011d30fd229ab508635ef7f04ad97cb/src/nevermined/api/AgreementsApi.ts#L11"},"src/nevermined/api/AgreementsApi.ts:11")))}c.isMDXComponent=!0}}]);