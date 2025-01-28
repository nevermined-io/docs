"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),o=s(a),k=n,f=o["".concat(p,".").concat(k)]||o[k]||c[k]||i;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=o;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},53753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l=void 0,d={unversionedId:"nevermined-sdk/api-reference/interfaces/ServicePlugin",id:"nevermined-sdk/api-reference/interfaces/ServicePlugin",title:"ServicePlugin",description:"@nevermined-io/sdk - v3.1.0 / ServicePlugin",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ServicePlugin",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ServiceNFTSales",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServiceNFTSales"},next:{title:"ServiceSecondary",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary"}},p={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"accept",id:"accept",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createService",id:"createservice",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"process",id:"process",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"track",id:"track",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.1.0")," / ServicePlugin"),(0,n.kt)("h1",{id:"interface-serviceplugint"},"Interface: ServicePlugin\\<T",">"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/code-reference#service"},(0,n.kt)("inlineCode",{parentName:"a"},"Service")))))),(0,n.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AccessService"},(0,n.kt)("inlineCode",{parentName:"a"},"AccessService"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/BaseTemplate"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseTemplate"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTAccessService"},(0,n.kt)("inlineCode",{parentName:"a"},"NFTAccessService"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NFTSalesService"},(0,n.kt)("inlineCode",{parentName:"a"},"NFTSalesService")))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin#accept"},"accept")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin#createservice"},"createService")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin#process"},"process")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ServicePlugin#track"},"track"))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"accept"},"accept"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"accept"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/ValidationParams"},(0,n.kt)("inlineCode",{parentName:"a"},"ValidationParams")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/613e61d8e011d30fd229ab508635ef7f04ad97cb/src/types/DDOTypes.ts#L855"},"src/types/DDOTypes.ts:855")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createservice"},"createService"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createService"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"publisher"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceAttributes"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"nftAttributes?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pricedData?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"publisher")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,n.kt)("inlineCode",{parentName:"a"},"NvmAccount")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"metadata")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaData")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"serviceAttributes")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/ServiceAttributes"},(0,n.kt)("inlineCode",{parentName:"a"},"ServiceAttributes")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nftAttributes?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NFTAttributes"},(0,n.kt)("inlineCode",{parentName:"a"},"NFTAttributes")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pricedData?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/code-reference#pricedmetadatainformation"},(0,n.kt)("inlineCode",{parentName:"a"},"PricedMetadataInformation")))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/613e61d8e011d30fd229ab508635ef7f04ad97cb/src/types/DDOTypes.ts#L841"},"src/types/DDOTypes.ts:841")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"process"},"process"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"process"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"txparams?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ","{"," ",(0,n.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),"; }",">"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/ValidationParams"},(0,n.kt)("inlineCode",{parentName:"a"},"ValidationParams")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"from")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,n.kt)("inlineCode",{parentName:"a"},"NvmAccount")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"txparams?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/TxParameters"},(0,n.kt)("inlineCode",{parentName:"a"},"TxParameters")))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ","{"," ",(0,n.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),"; }",">"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/613e61d8e011d30fd229ab508635ef7f04ad97cb/src/types/DDOTypes.ts#L849"},"src/types/DDOTypes.ts:849")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"track"},"track"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"track"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"txparams?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/ValidationParams"},(0,n.kt)("inlineCode",{parentName:"a"},"ValidationParams")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"from")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,n.kt)("inlineCode",{parentName:"a"},"NvmAccount")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"txparams?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/TxParameters"},(0,n.kt)("inlineCode",{parentName:"a"},"TxParameters")))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/613e61d8e011d30fd229ab508635ef7f04ad97cb/src/types/DDOTypes.ts#L857"},"src/types/DDOTypes.ts:857")))}c.isMDXComponent=!0}}]);