"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[2975],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),k=u(n),s=r,c=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(c,i(i({ref:e},o),{},{components:n})):a.createElement(c,i({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3049:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,description:"Nevermined Testnet Environments"},i="Testnet environments",m={unversionedId:"environments/nvm-dev-envs",id:"environments/nvm-dev-envs",title:"Testnet environments",description:"Nevermined Testnet Environments",source:"@site/docs/environments/nvm-dev-envs.md",sourceDirName:"environments",slug:"/environments/nvm-dev-envs",permalink:"/docs/environments/nvm-dev-envs",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/environments/nvm-dev-envs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Nevermined Testnet Environments"},sidebar:"tutorialSidebar",previous:{title:"Production environments",permalink:"/docs/environments/nvm-prod-envs"},next:{title:"Network Fees",permalink:"/docs/environments/network-fees"}},p={},u=[{value:"Network Fee",id:"network-fee",level:2},{value:"Polygon - Mumbai",id:"polygon---mumbai",level:2},{value:"Ethereum - Goerli",id:"ethereum---goerli",level:2},{value:"Arbitrum - Goerli",id:"arbitrum---goerli",level:2}],o={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testnet-environments"},"Testnet environments"),(0,r.kt)("p",null,"Testnet environments are public nevermined environments deployed in public EVM-compatible testnet networks. Typically we use Polygon Mumbai.\nUse ",(0,r.kt)("a",{parentName:"p",href:"https://mumbaifaucet.com/"},"Alchemy's Mumbai Faucet")," or ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"Polygon's Mumbai faucet")," for requesting MATIC."),(0,r.kt)("h2",{id:"network-fee"},"Network Fee"),(0,r.kt)("p",null,"The usage of a Nevermined environment requires to pay a fee when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/environments/network-fees"},"Network Fees section"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The network fee in Nevermined testnets is ",(0,r.kt)("strong",{parentName:"p"},"1%")," and the receiver of that fee is the ",(0,r.kt)("strong",{parentName:"p"},"0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c")," address.")),(0,r.kt)("h2",{id:"polygon---mumbai"},"Polygon - Mumbai"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"public-nvm-v2-mumbai")),": Polygon public testing environment (",(0,r.kt)("inlineCode",{parentName:"li"},"mumbai"),"). Using ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," contract tag. Use this if you want to integrate with Nevermined in a Polygon Testnet.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag"),(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.5 & 2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gateway.mumbai.public.nevermined.rocks"},"https://gateway.mumbai.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.5 & 2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://marketplace-api.mumbai.public.nevermined.rocks"},"https://marketplace-api.mumbai.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.5 & 2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.mumbai.public.nevermined.rocks"},"https://faucet.mumbai.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.5 & 2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")),(0,r.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))),(0,r.kt)("h2",{id:"ethereum---goerli"},"Ethereum - Goerli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"public-nvm-v2-goerli")),": Ethereum testing environment (",(0,r.kt)("inlineCode",{parentName:"li"},"goerli"),"). Using ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," contract tag. Use this if you want to integrate with Nevermined in a Ethereum Testnet.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag"),(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gateway.goerli.public.nevermined.rocks"},"https://gateway.goerli.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://marketplace-api.goerli.public.nevermined.rocks"},"https://marketplace-api.goerli.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.goerli.public.nevermined.rocks"},"https://faucet.goerli.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")),(0,r.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))),(0,r.kt)("h2",{id:"arbitrum---goerli"},"Arbitrum - Goerli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"public-nvm-v2-arbitrum-goerli")),": Arbitrum testing environment (",(0,r.kt)("inlineCode",{parentName:"li"},"arbitrum-goerli"),"). Using ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," contract tag. Use this if you want to integrate with Nevermined in a Arbitrum Testnet.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag"),(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-arbitrum-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gateway.arbitrum-goerli.public.nevermined.rocks"},"https://gateway.arbitrum-goerli.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-arbitrum-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://marketplace-api.arbitrum-goerli.public.nevermined.rocks"},"https://marketplace-api.arbitrum-goerli.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-arbitrum-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.arbitrum-goerli.public.nevermined.rocks"},"https://faucet.arbitrum-goerli.public.nevermined.rocks")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-arbitrum-goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum Goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")),(0,r.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))))}d.isMDXComponent=!0}}]);