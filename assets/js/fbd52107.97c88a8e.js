"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),i=n(3438),o=n(9960),c=n(3919),l=n(5999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},2884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),i=n(2991);const o={sidebar_position:1,description:"Nevermined React components catalog,"},c="What is the Nevermined Catalog?",l={unversionedId:"catalog/intro",id:"catalog/intro",title:"What is the Nevermined Catalog?",description:"Nevermined React components catalog,",source:"@site/docs/catalog/intro.md",sourceDirName:"catalog",slug:"/catalog/intro",permalink:"/docs/catalog/intro",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined React components catalog,"},sidebar:"tutorialSidebar",previous:{title:"minting-an-nft",permalink:"/docs/nevermined-sdk/minting-an-nft"},next:{title:"What can I do with the catalog?",permalink:"/docs/catalog/functionalities"}},s={},d=[{value:"Core",id:"core",level:3},{value:"Providers",id:"providers",level:3},{value:"React Framework",id:"react-framework",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-the-nevermined-catalog"},"What is the Nevermined Catalog?"),(0,a.kt)("p",null,"The Nevermined Catalog is a library of packaged Nevermined functionalities making easier to add web3 capabilities to any existing React application."),(0,a.kt)("p",null,"Building web3 applications is tough, and building robust scenarios where content providers and final users can interact between them in a secure and trusted way is way more complecated even. Nevermined provides a protocol where they can interact and allow marketplaces or other web applications builders to offer use cases built on top of these capabilities."),(0,a.kt)("p",null,"To provide this level of interaction in a secure way, there are some level of integration with the different components of Nevermined. To facilitate that part we built this ",(0,a.kt)("strong",{parentName:"p"},"Nevermined Catalog")),(0,a.kt)("p",null,"The main intention of this project is provide the building blocks to create these level of robust applications without some of the complication of blockchain."),(0,a.kt)("p",null,"Some important characteristic of the Nevermined and by extension by the Catalog is you always own your keys/credentials. So with Nevermined you can implement fully functional use cases totally decentralized. This means the use cases that can be built via the Catalog allow the peer to peer interaction between content providers/producers and final users without a central entity."),(0,a.kt)("p",null,"The Catalog is splitted currently in two modules:"),(0,a.kt)("h3",{id:"core"},(0,a.kt)("a",{parentName:"h3",href:"/docs/catalog/core/"},"Core")),(0,a.kt)("p",null,"Includes all the Nevermined functionalities splitted in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Catalog provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Services"),". "),(0,a.kt)("h3",{id:"providers"},(0,a.kt)("a",{parentName:"h3",href:"/docs/catalog/providers/"},"Providers")),(0,a.kt)("p",null,"The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask."),(0,a.kt)("h2",{id:"react-framework"},"React Framework"),(0,a.kt)("p",null,"Nevermined is framework agnostic, but we created this catalog on top of React to facilitate the integration of Nevermined to React builders. The same level of use cases/applications can be delivered in any other framework using the ",(0,a.kt)("a",{parentName:"p",href:"https://nvm-docs.nevermined.io/docs/nevermined-sdk/"},"Nevermined SDK"),"."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);