"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,p={unversionedId:"nevermined-sdk/api-reference/interfaces/EventEmitter",id:"nevermined-sdk/api-reference/interfaces/EventEmitter",title:"EventEmitter",description:"@nevermined-io/sdk - v3.0.23 / EventEmitter",source:"@site/docs/nevermined-sdk/api-reference/interfaces/EventEmitter.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/EventEmitter",permalink:"/docs/nevermined-sdk/api-reference/interfaces/EventEmitter",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/EventEmitter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eip712Data",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Eip712Data"},next:{title:"EventOptions",permalink:"/docs/nevermined-sdk/api-reference/interfaces/EventOptions"}},d={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23")," / EventEmitter"),(0,a.kt)("h1",{id:"interface-eventemitter"},"Interface: EventEmitter"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/EventEmitter#subscribe"},"subscribe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/EventEmitter#unsubscribe"},"unsubscribe"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"subscribe"},"subscribe"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"subscribe"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"arg1"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arg1"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"td"},"void"),">")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"arg1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"td"},"bigint"),">")))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/EventTypes.ts#L17"},"src/types/EventTypes.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"unsubscribe"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"arg0"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"arg0"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"arg0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"Promise"),"\\<",(0,a.kt)("inlineCode",{parentName:"td"},"void"),">")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/EventTypes.ts#L18"},"src/types/EventTypes.ts:18")))}c.isMDXComponent=!0}}]);