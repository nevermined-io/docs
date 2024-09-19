"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),h=r,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:20,description:"What information is available in Nevermined, and how to find it"},o="Information available in Nevermined",s={unversionedId:"architecture/nevermined-data",id:"architecture/nevermined-data",title:"Information available in Nevermined",description:"What information is available in Nevermined, and how to find it",source:"@site/docs/architecture/nevermined-data.md",sourceDirName:"architecture",slug:"/architecture/nevermined-data",permalink:"/docs/architecture/nevermined-data",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/nevermined-data.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"What information is available in Nevermined, and how to find it"},sidebar:"tutorialSidebar",previous:{title:"Building decentralized applications with Nevermined",permalink:"/docs/architecture/building-dapps"},next:{title:"Smart Contracts",permalink:"/docs/category/smart-contracts"}},c={},l=[{value:"Off-chain information: Metadata",id:"off-chain-information-metadata",level:2},{value:"On-chain information: Smart Contracts",id:"on-chain-information-smart-contracts",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"information-available-in-nevermined"},"Information available in Nevermined"),(0,r.kt)("p",null,'Nevermined allows the creation of networks where multiple use cases can be built. The modular architecture of Nevermined allows that using the deployment of Smart Contracts, to have independent "domains" or "applications" using the same contracts.'),(0,r.kt)("admonition",{title:"SEARCH",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can find some examples about how to query Nevermined data in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/searching-information"},"Searching Information Tutorial"),".")),(0,r.kt)("h2",{id:"off-chain-information-metadata"},"Off-chain information: Metadata"),(0,r.kt)("p",null,'For each of this "domains" (Marketplaces, Catalogs or any other web or mobile applications) normally the best approach is to have an independent metadata repository (via the ',(0,r.kt)("a",{parentName:"p",href:"../architecture/marketplace-api/"},"Marketplace API"),'). It allows to these use cases to "customize" the metadata stored of the assets registered in each application.'),(0,r.kt)("p",null,"For example, a music marketplace could require to store metadata information about the duration of a song, if belongs to an album, etc. For a carbon credits application, that information is not relevant but it can require some other metadata like some details of the carbon credit issuer, conditions of the carbon credit, etc."),(0,r.kt)("p",null,"Because of that, it's always recomended to have different metadata instances (so independent marketplace-api's) sharing the main part of the metadata schema (specified in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-METADATA"},"Metadata Spec"),') but with some specific "domain" specific metadata.'),(0,r.kt)("p",null,"In Nevermined to facilitate an efficient search and discovery of assets, the assets metadata provided by the content creators is stored in the different Marketplace API instances."),(0,r.kt)("p",null,"And the Nevermined components (SDK, Catalog, CLI) allow to build complex queries to discover all the assets registered in the Marketplace API."),(0,r.kt)("p",null,"Some examples of this are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search by asset name"),(0,r.kt)("li",{parentName:"ul"},"Search by additional information (like categories or bespoke attributes)"),(0,r.kt)("li",{parentName:"ul"},"Search by price range"),(0,r.kt)("li",{parentName:"ul"},"Sorting and paginating"),(0,r.kt)("li",{parentName:"ul"},"etc")),(0,r.kt)("p",null,"The Marketplace API uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Elastic Search")," as storage. Elastic is a search engine that exposes all the capabilities to search and discover data using their very rich query language."),(0,r.kt)("h2",{id:"on-chain-information-smart-contracts"},"On-chain information: Smart Contracts"),(0,r.kt)("p",null,"The most relevant transactions that happen in Nevermined are managed by the Smart Contracts. They work as a decentralized entity allowing content providers and final users to interact. When any relevant transacion happens in a Nevermined Smart Contract, it emits an event that can be fetched by a third-party application to understand there was a change in state stored by the contracts."),(0,r.kt)("p",null,"Smart Contracts are good as a trustless transactional system but are not good for search of information. To allow search and discovery over the events happening in the Nevermined Smart Contract we provide an integration with ",(0,r.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph"),". In simple words, the Graph allow the indexing of events happening on Smart Contracts and expose a ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL")," that facilitates to run complex queries on top of the information emitted by the events."),(0,r.kt)("p",null,"Some examples of information that can be fetched from the events are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assets published for a user"),(0,r.kt)("li",{parentName:"ul"},"Assets downloaded or purchased by a user"),(0,r.kt)("li",{parentName:"ul"},"Transactions associated to an asset, like how many times an asset was purchased and by who")))}p.isMDXComponent=!0}}]);