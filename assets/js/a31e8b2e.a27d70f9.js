"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3,description:"Who can use Nevermined?"},i="Who can use Nevermined?",s={unversionedId:"getting-started/users",id:"getting-started/users",title:"Who can use Nevermined?",description:"Who can use Nevermined?",source:"@site/docs/getting-started/users.md",sourceDirName:"getting-started",slug:"/getting-started/users",permalink:"/docs/getting-started/users",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/getting-started/users.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Who can use Nevermined?"},sidebar:"tutorialSidebar",previous:{title:"Protocol Overview",permalink:"/docs/getting-started/protocol-overview"},next:{title:"Why a Payments Protocol?",permalink:"/docs/getting-started/why/"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"who-can-use-nevermined"},"Who can use Nevermined?"),(0,a.kt)("p",null,"Nevermined provides a protocol and a reference implementation of that protocol."),(0,a.kt)("p",null,"Nevermined is for teams and organizations that are working with AI tecnology or data and want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monetize their AI agents or data"),(0,a.kt)("li",{parentName:"ul"},"Provide an easy way to control who can access to their AI agents or data"),(0,a.kt)("li",{parentName:"ul"},"Build Agent to Agent scenarios where agents can pay each other for services and access to them")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There are several tutorials and guides in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/"},"documentation")," that can help you to start using the Nevermined App.")),(0,a.kt)("p",null,"Having that mind and depending on your profile, you can use Nevermined in different ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AI Agent Builders"),"\nIf you are an AI Agent Builder or an organization building AI Agents, and want to monetize your agent or agents, Nevermined is for you.\nWe recommend you to start with the ",(0,a.kt)("a",{parentName:"p",href:"https://nevermined.app/"},"Nevermined Payments App"),", create an account and register your AI Agent. Without any code, you can start selling your AI Agent to the world."),(0,a.kt)("p",{parentName:"li"},"But if you want to have a lower level integration, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/integration/python-integration"},"Payment Libraries")," to integrate Nevermined payments in your AI Agent. With a few lines of code, you can do the same things that the Nevermined Payments App does (register agents or data, purchase access to other agents, etc).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Web Applications Builders"),"\nIf you are looking for a tool for building AI or Data Marketplaces, DApps or any other application that needs to manage payments, access control, etc, the Nevermined SDK is for you. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js"},"SDK is a Typescript library")," built on top of the protocol. The Nevermined App itself is built using the SDK. So if you want to build a similiar application or you want to build a more sophisticated one, the SDK is for you.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AI Users"),"\nIf you are a user looking for AI Agents or data, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://nevermined.app/"},"Nevermined Payments App")," to find and purchase access to AI Agents or data."))))}u.isMDXComponent=!0}}]);