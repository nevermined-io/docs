"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2495],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,k=u["".concat(d,".").concat(f)]||u[f]||o[f]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={},l=void 0,p={unversionedId:"nevermined-sdk/api-reference/interfaces/PublicKey",id:"nevermined-sdk/api-reference/interfaces/PublicKey",title:"PublicKey",description:"@nevermined-io/sdk - v3.0.13 / PublicKey",source:"@site/docs/nevermined-sdk/api-reference/interfaces/PublicKey.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/PublicKey",permalink:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/PublicKey.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Provider",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Provider"},next:{title:"QueryResult",permalink:"/docs/nevermined-sdk/api-reference/interfaces/QueryResult"}},d={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"publicKeyBase58",id:"publickeybase58",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"publicKeyHex",id:"publickeyhex",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"publicKeyPem",id:"publickeypem",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:s};function o(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.13")," / PublicKey"),(0,i.kt)("h1",{id:"interface-publickey"},"Interface: PublicKey"),(0,i.kt)("p",null,"Public key data."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey#id"},"id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey#owner"},"owner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey#publickeybase58"},"publicKeyBase58")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey#publickeyhex"},"publicKeyHex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey#publickeypem"},"publicKeyPem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PublicKey#type"},"type"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"ID of the key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'did:nv:123456789abcdefghi#keys-1'\n")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L498"},"src/types/DDOTypes.ts:498")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Key owner."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'did:nv:123456789abcdefghi'\n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L513"},"src/types/DDOTypes.ts:513")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publickeybase58"},"publicKeyBase58"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"publicKeyBase58"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L516"},"src/types/DDOTypes.ts:516")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publickeyhex"},"publicKeyHex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"publicKeyHex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L517"},"src/types/DDOTypes.ts:517")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publickeypem"},"publicKeyPem"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"publicKeyPem"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L515"},"src/types/DDOTypes.ts:515")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"EthereumECDSAKey"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"Ed25519VerificationKey2018"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RsaVerificationKey2018"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"EdDsaSAPublicKeySecp256k1"')),(0,i.kt)("p",null,"Type of key."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0d598e72febf7cfaf48859e35dd566c39e7d5682/src/types/DDOTypes.ts#L503"},"src/types/DDOTypes.ts:503")))}o.isMDXComponent=!0}}]);