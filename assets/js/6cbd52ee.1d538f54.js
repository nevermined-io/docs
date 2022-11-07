"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>E,frontMatter:()=>b,metadata:()=>N,toc:()=>O});var r=n(87462),i=n(67294),o=n(3905),a=n(86010),c=n(53438),l=n(39960),s=n(13919),m=n(95999),d=n(69621);function p(e){let{href:t,children:n}=e;return i.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",d.Z.cardContainer)},n)}function u(e){let{href:t,icon:n,title:r,description:o}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",d.Z.cardTitle),title:r},n," ",r),o&&i.createElement("p",{className:(0,a.Z)("text--truncate",d.Z.cardDescription),title:o},o))}function f(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?i.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:n,title:t.label,description:null==r?void 0:r.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,c.jA)();return i.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return i.createElement(v,e);const r=(0,c.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(y,{item:e})))))}const b={sidebar_position:1},k="Nevermined CLI",N={unversionedId:"cli/index",id:"cli/index",title:"Nevermined CLI",description:"The Nevermined CLI (aka NVM CLI or ncli) permits Nevermined deployment from the command line interface supporting everything from a traditional Nevermined web environment like a Marketplace to a DApp.",source:"@site/docs/cli/index.mdx",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/cli/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"utils",permalink:"/docs/nevermined-sdk/api-reference/modules/utils"},next:{title:"Getting Started",permalink:"/docs/cli/getting-started"}},w={},O=[],C={toc:O};function E(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nevermined-cli"},"Nevermined CLI"),(0,o.kt)("p",null,"The Nevermined CLI (aka NVM CLI or ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli"),") permits Nevermined deployment from the command line interface supporting everything from a traditional Nevermined web environment like a Marketplace to a DApp."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," allows to connect to a local Nevermined environment (see in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/tutorials/running-locally"},"Nevermined Tools tutorial")," how to do that) or with a remote one."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli")," is Open Source software and the code can be found in the directory ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/cli/"},"Nevermined CLI Github repository"),"."),(0,o.kt)("p",null,"In the following sections you will find more information about how to install and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ncli"),":"),(0,o.kt)(g,{mdxType:"DocCardList"}))}E.isMDXComponent=!0},69621:(e,t,n)=>{n.d(t,{Z:()=>r});const r={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}}}]);