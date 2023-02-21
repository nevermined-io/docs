"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},o="Interface: RegisterEvent",l={unversionedId:"catalog/catalog/API/interfaces/RegisterEvent",id:"catalog/catalog/API/interfaces/RegisterEvent",title:"Interface: RegisterEvent",description:"To registe a event from the blockchain",source:"@site/docs/catalog/catalog/API/interfaces/RegisterEvent.md",sourceDirName:"catalog/catalog/API/interfaces",slug:"/catalog/catalog/API/interfaces/RegisterEvent",permalink:"/docs/catalog/catalog/API/interfaces/RegisterEvent",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/catalog/API/interfaces/RegisterEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: NeverminedProviderProps",permalink:"/docs/catalog/catalog/API/interfaces/NeverminedProviderProps"},next:{title:"Interface: SubscribeModule",permalink:"/docs/catalog/catalog/API/interfaces/SubscribeModule"}},c={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"_blockNumberUpdated",id:"_blocknumberupdated",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"_did",id:"_did",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_lastUpdatedBy",id:"_lastupdatedby",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_owner",id:"_owner",level:3},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-registerevent"},"Interface: RegisterEvent"),(0,a.kt)("p",null,"To registe a event from the blockchain"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/RegisterEvent#_blocknumberupdated"},"_","blockNumberUpdated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/RegisterEvent#_did"},"_","did")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/RegisterEvent#_lastupdatedby"},"_","lastUpdatedBy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/RegisterEvent#_owner"},"_","owner"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"_blocknumberupdated"},"_","blockNumberUpdated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","blockNumberUpdated"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"The block number of the blockchain which the asset was updated"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/types/index.ts#L723"},"types/index.ts:723")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_did"},"_","did"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","did"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id of the asset"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/types/index.ts#L717"},"types/index.ts:717")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_lastupdatedby"},"_","lastUpdatedBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","lastUpdatedBy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The last modification of the asset"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/types/index.ts#L721"},"types/index.ts:721")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_owner"},"_","owner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"_","owner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Owner of the asset"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/types/index.ts#L719"},"types/index.ts:719")))}p.isMDXComponent=!0}}]);