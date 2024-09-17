"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:"Why an AI Payments Protocol??"},i="Why a Payments Protocol?",s={unversionedId:"getting-started/why/index",id:"getting-started/why/index",title:"Why a Payments Protocol?",description:"Why an AI Payments Protocol??",source:"@site/docs/getting-started/why/index.md",sourceDirName:"getting-started/why",slug:"/getting-started/why/",permalink:"/docs/getting-started/why/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/getting-started/why/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Why an AI Payments Protocol??"},sidebar:"tutorialSidebar",previous:{title:"Who can use Nevermined?",permalink:"/docs/getting-started/users"},next:{title:"Cost Mettering",permalink:"/docs/getting-started/why/cost-mettering"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-a-payments-protocol"},"Why a Payments Protocol?"),(0,a.kt)("p",null,"In Nevermined we identify payments as a process, and distinguish the final stage of settlement of a payments process from the wider overall workflow. "),(0,a.kt)("p",null,"Settlement can be seen as the manifestation of a payments transaction (its final state) once accounted for through a record keeping mechanism, historically a database, now a publicly verifiable blockchain. Whereas payments is the wider process, settlement is only the final stage of that process. "),(0,a.kt)("p",null,"Clarifying this difference - the payments workflow versus its settlement -  motivates an interest in understanding the process in the context of AI payments.\nThe primary responsibility of the payments protocol is to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Meter usage of an agent, or underlying assets, services and models"),(0,a.kt)("li",{parentName:"ol"},"Calculate a respective charge"),(0,a.kt)("li",{parentName:"ol"},"Settle this charge")),(0,a.kt)("p",null,"The current paradigm is a DIY approach where builders predominately - for ease of implementation - opt for a time-based approach.\nA fixed payment for access for a period of time. This is valid for some very specific use cases but highly inefficient for others because it is difficult to cater for different patterns of use and variation in cost. The result is margin volatility or risk of financial loss.\nAn obvious improvement is a \u2018pay per play\u2019 model. Real time usage-based pricing can flex and more accurately map underlying cost."),(0,a.kt)("p",null,"To achieve scale, Nevermined not only operate in real time, but also be able to tolerate volumes of micro transactions.\nThe blockchain shall, at a minimum, serve as the system of settlement, but may not be required or best suited to orchestrate the wider set of activities.\nFully on-chain payments would incur a number of dependencies such as oraclization, and suffer inefficiencies such as latency and gas fees.\nIn order to achieve maximum efficiency, Nevermined adopts a hybrid approach, where periods of usage are metered and aggregated off-chain and batch-settled on-chain.\nAs long as access, permissioning and settlement remain on-chain, we argue that payments are sufficiently decentralized and the protocol appropriately mitigates the choke point inherent with the point of transaction. "),(0,a.kt)("p",null,"Frequency and volume are not the only limiting factors in our process. Accurate real-time pricing is in effect only achievable ex-post once usage is concluded and true cost is known. Thus there must be some mechanic to net or adjust pricing after the event."))}d.isMDXComponent=!0}}]);