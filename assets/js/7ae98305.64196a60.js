"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,u=m["".concat(l,".").concat(k)]||m[k]||o[k]||i;return r?n.createElement(u,d(d({ref:t},c),{},{components:r})):n.createElement(u,d({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,d[1]=s;for(var p=2;p<i;p++)d[p]=r[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},d=void 0,s={unversionedId:"nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit",id:"nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit",title:"DynamicCreditsUnderLimit",description:"@nevermined-io/sdk - v3.0.13 / DynamicCreditsUnderLimit",source:"@site/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit",permalink:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DynamicCreditsOverLimit",permalink:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsOverLimit"},next:{title:"EscrowComputeExecutionTemplate",permalink:"/docs/nevermined-sdk/api-reference/classes/EscrowComputeExecutionTemplate"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods-1",level:2},{value:"captureStackTrace",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],c={toc:p};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.13")," / DynamicCreditsUnderLimit"),(0,a.kt)("h1",{id:"class-dynamiccreditsunderlimit"},"Class: DynamicCreditsUnderLimit"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},(0,a.kt)("inlineCode",{parentName:"a"},"NFTError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DynamicCreditsUnderLimit"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#cause"},"cause")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#message"},"message")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#name"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#stack"},"stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#preparestacktrace"},"prepareStackTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#stacktracelimit"},"stackTraceLimit"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit#capturestacktrace"},"captureStackTrace"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new DynamicCreditsUnderLimit"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit"},(0,a.kt)("inlineCode",{parentName:"a"},"DynamicCreditsUnderLimit"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DynamicCreditsUnderLimit"},(0,a.kt)("inlineCode",{parentName:"a"},"DynamicCreditsUnderLimit"))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#constructor"},"constructor")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/errors/NeverminedErrors.ts#L50"},"src/errors/NeverminedErrors.ts:50")),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#cause"},"cause")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es2022.error.d.ts:24"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#message"},"message")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1077"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#name"},"name")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1076"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#stack"},"stack")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1078"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"Optional override for formatting stack traces"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#preparestacktrace"},"prepareStackTrace")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:28"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#stacktracelimit"},"stackTraceLimit")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:30"),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Create .stack property on a target object"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError"},"NFTError"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NFTError#capturestacktrace"},"captureStackTrace")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:21"))}o.isMDXComponent=!0}}]);