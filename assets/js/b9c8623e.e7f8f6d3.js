"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=o,f=p["".concat(l,".").concat(s)]||p[s]||u[s]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91262:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(72389);function i(e){let{children:t,fallback:n}=e;return(0,o.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):n??null}},71446:(e,t,n)=>{n.d(t,{e:()=>r,w:()=>o});const r=e=>{const t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("a").forEach((e=>{if(e.hasAttribute("href")&&e.getAttribute("href").includes("/href")){const t=e.getAttribute("href"),n=document.createElement("img");e.parentElement.replaceChild(n,e),n.setAttribute("src",t),n.setAttribute("alt","Gift")}})),t.documentElement.innerHTML},o=(e,t)=>{var n;const r=`script[src='${e}']`;if(document.querySelectorAll(r).length>0)return;const o=document.createElement("script");o.src=e,o.defer=!0,null==(n=t.parentNode)||n.insertBefore(o,t)}},18350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>s});var r=n(87462),o=n(67294),i=n(3905),a=n(91262),c=n(71446);const l=()=>o.createElement("div",{ref:e=>{e&&(0,c.w)("https://widgets.mumbai.nevermined.one/nvm-service-widget-loader.js",e)},id:"nvm-service-widget","nvm-did":"did:nv:fca684cd08d1a8abac14ea40ff6a9dfc690694987c1a918c02c118f433d47756"}),d={},m="Nevermined One Widget",u={unversionedId:"architecture/components/nvm-one/index",id:"architecture/components/nvm-one/index",title:"Nevermined One Widget",description:"How to add a widget in a project",source:"@site/docs/architecture/components/nvm-one/index.md",sourceDirName:"architecture/components/nvm-one",slug:"/architecture/components/nvm-one/",permalink:"/docs/architecture/components/nvm-one/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/components/nvm-one/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NVM One",permalink:"/docs/category/nvm-one"},next:{title:"Marketplace API v0.1.0",permalink:"/docs/architecture/components/marketplace-api/openapi"}},p={},s=[{value:"How to add a widget in a project",id:"how-to-add-a-widget-in-a-project",level:2},{value:"Demo",id:"demo",level:2}],f={toc:s};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nevermined-one-widget"},"Nevermined One Widget"),(0,i.kt)("h2",{id:"how-to-add-a-widget-in-a-project"},"How to add a widget in a project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Include the script in the end of the body of your html file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'  <script src="https://mumbai.nevermined.one/lib/nvm-service-widget-loader.js"><\/script>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add also in your html file this code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div\n  id="nvm-service-widget"\n  nvm-did="did:nv:e8f4339f28567ef65b94fa1b5ef8f88d202fa4ea2180e307ac2040cecabf8383"\n/>\n')),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(a.Z,{fallback:(0,i.kt)("div",null,"Loading demo..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(l,{mdxType:"Widget"}))))}v.isMDXComponent=!0}}]);