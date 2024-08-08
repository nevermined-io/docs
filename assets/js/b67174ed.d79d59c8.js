"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),k=o(n),m=a,u=k["".concat(s,".").concat(m)]||k[m]||c[m]||l;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={},i=void 0,d={unversionedId:"nevermined-sdk/api-reference/classes/EventHandler",id:"nevermined-sdk/api-reference/classes/EventHandler",title:"EventHandler",description:"@nevermined-io/sdk - v3.0.23 / EventHandler",source:"@site/docs/nevermined-sdk/api-reference/classes/EventHandler.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/EventHandler",permalink:"/docs/nevermined-sdk/api-reference/classes/EventHandler",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/classes/EventHandler.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EthSignJWT",permalink:"/docs/nevermined-sdk/api-reference/classes/EthSignJWT"},next:{title:"GenericContract",permalink:"/docs/nevermined-sdk/api-reference/classes/GenericContract"}},s={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties-1",level:2},{value:"events",id:"events",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"getBlockNumber",id:"getblocknumber",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"interval",id:"interval",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"lastBlock",id:"lastblock",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"lastTimeout",id:"lasttimeout",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"polling",id:"polling",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"count",id:"count",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods-1",level:2},{value:"checkBlock",id:"checkblock",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23")," / EventHandler"),(0,a.kt)("h1",{id:"class-eventhandler"},"Class: EventHandler"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#events"},"events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#getblocknumber"},"getBlockNumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#interval"},"interval")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#lastblock"},"lastBlock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#lasttimeout"},"lastTimeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#polling"},"polling"))),(0,a.kt)("h3",{id:"accessors"},"Accessors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#count"},"count"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#checkblock"},"checkBlock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#subscribe"},"subscribe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler#unsubscribe"},"unsubscribe"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new EventHandler"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler"},(0,a.kt)("inlineCode",{parentName:"a"},"EventHandler"))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/EventHandler"},(0,a.kt)("inlineCode",{parentName:"a"},"EventHandler"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"events"},"events"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"events"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"\\<(",(0,a.kt)("inlineCode",{parentName:"p"},"blockNumber"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L6"},"src/events/EventHandler.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getblocknumber"},"getBlockNumber"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"getBlockNumber"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),">"),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L16"},"src/events/EventHandler.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"interval"},"interval"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"interval"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"200")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L10"},"src/events/EventHandler.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastblock"},"lastBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"lastBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L8"},"src/events/EventHandler.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lasttimeout"},"lastTimeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"lastTimeout"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Timeout")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L14"},"src/events/EventHandler.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"polling"},"polling"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"polling"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L12"},"src/events/EventHandler.ts:12")),(0,a.kt)("h2",{id:"accessors-1"},"Accessors"),(0,a.kt)("h3",{id:"count"},"count"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"count"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L2"},"src/events/EventHandler.ts:2")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"checkblock"},"checkBlock"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"checkBlock"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"isInterval?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"isInterval?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L38"},"src/events/EventHandler.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"subscribe"},"subscribe"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"subscribe"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getBlockNumber"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"blockNumber"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"bigint"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"getBlockNumber")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"td"},"bigint"),">")))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unsubscribe")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L18"},"src/events/EventHandler.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"unsubscribe"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"blockNumber"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"bigint"),") => ",(0,a.kt)("inlineCode",{parentName:"td"},"void"))))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/events/EventHandler.ts#L28"},"src/events/EventHandler.ts:28")))}c.isMDXComponent=!0}}]);