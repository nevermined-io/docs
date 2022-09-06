"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[1035],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,f=c["".concat(o,".").concat(u)]||c[u]||k[u]||a;return t?i.createElement(f,l(l({ref:n},p),{},{components:t})):i.createElement(f,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5305:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return k}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),l=["components"],s={},o=void 0,d={unversionedId:"nevermined-sdk/api-reference/classes/Config",id:"nevermined-sdk/api-reference/classes/Config",title:"Config",description:"@nevermined-io/nevermined-sdk-js / Config",source:"@site/docs/nevermined-sdk/api-reference/classes/Config.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/Config",permalink:"/docs/nevermined-sdk/api-reference/classes/Config",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/nevermined-sdk/api-reference/classes/Config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Condition",permalink:"/docs/nevermined-sdk/api-reference/classes/Condition"},next:{title:"DDO",permalink:"/docs/nevermined-sdk/api-reference/classes/DDO"}},p={},k=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties-1",level:2},{value:"aaveConfig",id:"aaveconfig",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"accounts",id:"accounts",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"artifactsFolder",id:"artifactsfolder",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"authMessage",id:"authmessage",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"authTokenExpiration",id:"authtokenexpiration",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"faucetUri",id:"fauceturi",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"gasMultiplier",id:"gasmultiplier",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"gatewayAddress",id:"gatewayaddress",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"gatewayUri",id:"gatewayuri",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"graphHttpUri",id:"graphhttpuri",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"marketplaceAuthToken",id:"marketplaceauthtoken",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"marketplaceUri",id:"marketplaceuri",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"newGateway",id:"newgateway",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"nodeUri",id:"nodeuri",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"secretStoreUri",id:"secretstoreuri",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"threshold",id:"threshold",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"verbose",id:"verbose",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"web3Provider",id:"web3provider",level:3},{value:"Defined in",id:"defined-in-17",level:4}],c={toc:k};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/nevermined-sdk-js")," / Config"),(0,a.kt)("h1",{id:"class-config"},"Class: Config"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#aaveconfig"},"aaveConfig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#accounts"},"accounts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#artifactsfolder"},"artifactsFolder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#authmessage"},"authMessage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#authtokenexpiration"},"authTokenExpiration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#fauceturi"},"faucetUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#gasmultiplier"},"gasMultiplier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#gatewayaddress"},"gatewayAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#gatewayuri"},"gatewayUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#graphhttpuri"},"graphHttpUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#marketplaceauthtoken"},"marketplaceAuthToken")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#marketplaceuri"},"marketplaceUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#newgateway"},"newGateway")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#nodeuri"},"nodeUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#secretstoreuri"},"secretStoreUri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#threshold"},"threshold")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#verbose"},"verbose")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/Config#web3provider"},"web3Provider"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Config"),"()"),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"aaveconfig"},"aaveConfig"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"aaveConfig"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AaveConfig")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L82"},"src/models/Config.ts:82")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"accounts"},"accounts"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"accounts"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Signer"),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L86"},"src/models/Config.ts:86")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"artifactsfolder"},"artifactsFolder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"artifactsFolder"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L84"},"src/models/Config.ts:84")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"authmessage"},"authMessage"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"authMessage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Message shown when the user creates its own token."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L65"},"src/models/Config.ts:65")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"authtokenexpiration"},"authTokenExpiration"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"authTokenExpiration"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Token expiration time in ms."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L71"},"src/models/Config.ts:71")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fauceturi"},"faucetUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"faucetUri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Faucet URL."),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L29"},"src/models/Config.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gasmultiplier"},"gasMultiplier"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"gasMultiplier"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L75"},"src/models/Config.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gatewayaddress"},"gatewayAddress"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"gatewayAddress"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Address of Gateway."),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L35"},"src/models/Config.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gatewayuri"},"gatewayUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"gatewayUri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Gateway URL."),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L23"},"src/models/Config.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"graphhttpuri"},"graphHttpUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"graphHttpUri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Enpoint for the graph-node http query"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L80"},"src/models/Config.ts:80")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marketplaceauthtoken"},"marketplaceAuthToken"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"marketplaceAuthToken"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Marketplace auth token."),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L17"},"src/models/Config.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"marketplaceuri"},"marketplaceUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"marketplaceUri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"MarketPlace URL."),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L11"},"src/models/Config.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"newgateway"},"newGateway"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"newGateway"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L88"},"src/models/Config.ts:88")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nodeuri"},"nodeUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nodeUri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Ethereum node URL."),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L41"},"src/models/Config.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"secretstoreuri"},"secretStoreUri"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"secretStoreUri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Secret Store URL."),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L53"},"src/models/Config.ts:53")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"threshold"},"threshold"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"threshold"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L73"},"src/models/Config.ts:73")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verbose"},"verbose"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"verbose"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/utils.LogLevel"},(0,a.kt)("inlineCode",{parentName:"a"},"LogLevel"))),(0,a.kt)("p",null,"Log level."),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L59"},"src/models/Config.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"web3provider"},"web3Provider"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"web3Provider"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"Web3 Provider."),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/models/Config.ts#L47"},"src/models/Config.ts:47")))}u.isMDXComponent=!0}}]);