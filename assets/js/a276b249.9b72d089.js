"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=s(n),k=a,f=o["".concat(l,".").concat(k)]||o[k]||m[k]||i;return n?r.createElement(f,d(d({ref:t},c),{},{components:n})):r.createElement(f,d({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=o;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,d[1]=p;for(var s=2;s<i;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},2502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},d=void 0,p={unversionedId:"nevermined-sdk/api-reference/interfaces/GenericAccess",id:"nevermined-sdk/api-reference/interfaces/GenericAccess",title:"GenericAccess",description:"@nevermined-io/sdk - v3.0.23 / GenericAccess",source:"@site/docs/nevermined-sdk/api-reference/interfaces/GenericAccess.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/GenericAccess",permalink:"/docs/nevermined-sdk/api-reference/interfaces/GenericAccess",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/GenericAccess.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FilterContractEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/FilterContractEvent"},next:{title:"InputType",permalink:"/docs/nevermined-sdk/api-reference/interfaces/InputType"}},l={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:"contractName",id:"contractname",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods-1",level:2},{value:"createAgreementWithPaymentFromDDO",id:"createagreementwithpaymentfromddo",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAgreementData",id:"getagreementdata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"params",id:"params",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23")," / GenericAccess"),(0,a.kt)("h1",{id:"interface-genericaccess"},"Interface: GenericAccess"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/GenericAccess#contractname"},"contractName"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/GenericAccess#createagreementwithpaymentfromddo"},"createAgreementWithPaymentFromDDO")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/GenericAccess#getagreementdata"},"getAgreementData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/GenericAccess#params"},"params"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"contractname"},"contractName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"contractName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/keeper/contracts/templates/GenericAccess.ts#L22"},"src/keeper/contracts/templates/GenericAccess.ts:22")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"createagreementwithpaymentfromddo"},"createAgreementWithPaymentFromDDO"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createAgreementWithPaymentFromDDO"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"agreementIdSeed"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ddo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceReference"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"txParams?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"observer?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"agreementIdSeed")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ddo")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/DDO"},(0,a.kt)("inlineCode",{parentName:"a"},"DDO")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"serviceReference")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/code-reference#servicetype"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"parameters")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"consumer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"from")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"txParams?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/TxParameters"},(0,a.kt)("inlineCode",{parentName:"a"},"TxParameters")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"observer?")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"orderProgressStep"),": ",(0,a.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/enums/OrderProgressStep"},(0,a.kt)("inlineCode",{parentName:"a"},"OrderProgressStep")),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/keeper/contracts/templates/GenericAccess.ts#L8"},"src/keeper/contracts/templates/GenericAccess.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getagreementdata"},"getAgreementData"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAgreementData"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"agreementId"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"accessConsumer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"accessProvider"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," }",">"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"agreementId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"accessConsumer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"accessProvider"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," }",">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/keeper/contracts/templates/GenericAccess.ts#L19"},"src/keeper/contracts/templates/GenericAccess.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"params"},"params"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"params"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"consumer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"consumer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/keeper/contracts/templates/GenericAccess.ts#L21"},"src/keeper/contracts/templates/GenericAccess.ts:21")))}m.isMDXComponent=!0}}]);