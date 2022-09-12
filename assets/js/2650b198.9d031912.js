"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[4119],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,k=c["".concat(m,".").concat(s)]||c[s]||d[s]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6069:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:2,description:"Nevermined Production Environments"},m="Production environments",p={unversionedId:"environments/nvm-prod-envs",id:"environments/nvm-prod-envs",title:"Production environments",description:"Nevermined Production Environments",source:"@site/docs/environments/nvm-prod-envs.md",sourceDirName:"environments",slug:"/environments/nvm-prod-envs",permalink:"/docs/environments/nvm-prod-envs",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/environments/nvm-prod-envs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Nevermined Production Environments"},sidebar:"tutorialSidebar",previous:{title:"Nevermined Public Environments",permalink:"/docs/environments/"},next:{title:"Testnet environments",permalink:"/docs/environments/nvm-dev-envs"}},u={},d=[{value:"Network Fee",id:"network-fee",level:2},{value:"Public Polygon environment",id:"public-polygon-environment",level:2},{value:"Version 2.0.5",id:"version-205",level:3},{value:"Version 2.1.0",id:"version-210",level:3}],c={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"production-environments"},"Production environments"),(0,i.kt)("h2",{id:"network-fee"},"Network Fee"),(0,i.kt)("p",null,"The usage of a Nevermined environment requires to pay a fee when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/environments/network-fees"},"Network Fees section"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The network fee in Nevermined production environments is ",(0,i.kt)("strong",{parentName:"p"},"1%")," and the receiver of that fee is the ",(0,i.kt)("strong",{parentName:"p"},"0x35aFA2408BB4f479996fafb2bB3A183ec064C265")," address.")),(0,i.kt)("h2",{id:"public-polygon-environment"},"Public Polygon environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"public-nvm-v2-mumbai")),": Public environment in Polygon. Use this if you want to integrate with Nevermined in Polygon for production.")),(0,i.kt)("h3",{id:"version-205"},"Version 2.0.5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment"),(0,i.kt)("th",{parentName:"tr",align:null},"Network"),(0,i.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Tag"),(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.5"),(0,i.kt)("td",{parentName:"tr",align:null},"public"),(0,i.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://gateway.public.nevermined.rocks"},"https://gateway.public.nevermined.rocks")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.5"),(0,i.kt)("td",{parentName:"tr",align:null},"public"),(0,i.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://marketplace-api.public.nevermined.rocks"},"https://marketplace-api.public.nevermined.rocks")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.5"),(0,i.kt)("td",{parentName:"tr",align:null},"public"),(0,i.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")),(0,i.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))),(0,i.kt)("h3",{id:"version-210"},"Version 2.1.0"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment"),(0,i.kt)("th",{parentName:"tr",align:null},"Network"),(0,i.kt)("th",{parentName:"tr",align:null},"Contracts Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Tag"),(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"public"),(0,i.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.5"),(0,i.kt)("td",{parentName:"tr",align:null},"public"),(0,i.kt)("td",{parentName:"tr",align:null},"Marketplace API"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"public-nvm-v2-mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"Mumbai"),(0,i.kt)("td",{parentName:"tr",align:null},"2.0.5"),(0,i.kt)("td",{parentName:"tr",align:null},"public"),(0,i.kt)("td",{parentName:"tr",align:null},"GraphNode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")),(0,i.kt)("td",{parentName:"tr",align:null},"Use with sdk >= 0.21.0")))))}s.isMDXComponent=!0}}]);