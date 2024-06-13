"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=o(n),c=r,N=k["".concat(p,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,d={unversionedId:"nevermined-sdk/api-reference/classes/WebServiceConnector",id:"nevermined-sdk/api-reference/classes/WebServiceConnector",title:"WebServiceConnector",description:"@nevermined-io/sdk - v3.0.13 / WebServiceConnector",source:"@site/docs/nevermined-sdk/api-reference/classes/WebServiceConnector.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/WebServiceConnector",permalink:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/classes/WebServiceConnector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web3Error",permalink:"/docs/nevermined-sdk/api-reference/classes/Web3Error"},next:{title:"code-reference",permalink:"/docs/nevermined-sdk/api-reference/code-reference"}},p={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"config",id:"config",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods-1",level:2},{value:"_sleep",id:"_sleep",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"delete",id:"delete",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"downloadFile",id:"downloadfile",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"downloadUrl",id:"downloadurl",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"fetch",id:"fetch",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"fetchCID",id:"fetchcid",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"fetchToken",id:"fetchtoken",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getFileResponse",id:"getfileresponse",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"post",id:"post",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"put",id:"put",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"uploadFile",id:"uploadfile",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"uploadMessage",id:"uploadmessage",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"getIPFSAuthToken",id:"getipfsauthtoken",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-15",level:4}],m={toc:o};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.13")," / WebServiceConnector"),(0,r.kt)("h1",{id:"class-webserviceconnector"},"Class: WebServiceConnector"),(0,r.kt)("p",null,"Provides a common interface to web services."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#config"},"config"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#_sleep"},"_","sleep")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#delete"},"delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#downloadfile"},"downloadFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#downloadurl"},"downloadUrl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#fetch"},"fetch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#fetchcid"},"fetchCID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#fetchtoken"},"fetchToken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#get"},"get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#getfileresponse"},"getFileResponse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#post"},"post")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#put"},"put")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#uploadfile"},"uploadFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#uploadmessage"},"uploadMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector#getipfsauthtoken"},"getIPFSAuthToken"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new WebServiceConnector"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector"},(0,r.kt)("inlineCode",{parentName:"a"},"WebServiceConnector"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/InstantiableConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"InstantiableConfig")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/WebServiceConnector"},(0,r.kt)("inlineCode",{parentName:"a"},"WebServiceConnector"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L26"},"src/nevermined/utils/WebServiceConnector.ts:26")),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"config"},"config"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"config"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/InstantiableConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"InstantiableConfig"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L24"},"src/nevermined/utils/WebServiceConnector.ts:24")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"_sleep"},"_","sleep"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_","sleep"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"ms"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ms")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L226"},"src/nevermined/utils/WebServiceConnector.ts:226")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"delete"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"payload?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BodyInit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L71"},"src/nevermined/utils/WebServiceConnector.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"downloadfile"},"downloadFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"downloadFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"destination?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"destination?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L86"},"src/nevermined/utils/WebServiceConnector.ts:86")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"downloadurl"},"downloadUrl"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"downloadUrl"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L139"},"src/nevermined/utils/WebServiceConnector.ts:139")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetch"},"fetch"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fetch"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"numberTries?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RequestInit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"numberTries")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L209"},"src/nevermined/utils/WebServiceConnector.ts:209")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetchcid"},"fetchCID"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fetchCID"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"cid"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L181"},"src/nevermined/utils/WebServiceConnector.ts:181")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetchtoken"},"fetchToken"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fetchToken"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grantToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"numberTries?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grantToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"numberTries")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L165"},"src/nevermined/utils/WebServiceConnector.ts:165")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L47"},"src/nevermined/utils/WebServiceConnector.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getfileresponse"},"getFileResponse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getFileResponse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<","{"," ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"response"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," }",">"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<","{"," ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"response"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," }",">"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L113"},"src/nevermined/utils/WebServiceConnector.ts:113")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"post"},"post"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"post"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BodyInit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L32"},"src/nevermined/utils/WebServiceConnector.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"put"},"put"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"put"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BodyInit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),">"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L56"},"src/nevermined/utils/WebServiceConnector.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadfile"},"uploadFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"uploadFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypt?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReadStream"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"encrypt?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L156"},"src/nevermined/utils/WebServiceConnector.ts:156")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadmessage"},"uploadMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"uploadMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypt?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-13"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"encrypt?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L147"},"src/nevermined/utils/WebServiceConnector.ts:147")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getipfsauthtoken"},"getIPFSAuthToken"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getIPFSAuthToken"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/nevermined/utils/WebServiceConnector.ts#L199"},"src/nevermined/utils/WebServiceConnector.ts:199")))}s.isMDXComponent=!0}}]);