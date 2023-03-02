"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),k=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=k(a),u=l,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var k=2;k<r;k++)o[k]=a[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={},o="Namespace: AuthToken",i={unversionedId:"catalog/catalog/API/modules/AuthToken",id:"catalog/catalog/API/modules/AuthToken",title:"Namespace: AuthToken",description:"Table of contents",source:"@site/docs/catalog/catalog/API/modules/AuthToken.md",sourceDirName:"catalog/catalog/API/modules",slug:"/catalog/catalog/API/modules/AuthToken",permalink:"/docs/catalog/catalog/API/modules/AuthToken",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/catalog/API/modules/AuthToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Namespace: AssetService",permalink:"/docs/catalog/catalog/API/modules/AssetService"},next:{title:"Namespace: Catalog",permalink:"/docs/catalog/catalog/API/modules/Catalog"}},p={},k=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"MARKETPLACE_API_TOKEN",id:"marketplace_api_token",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"fetchMarketplaceApiTokenFromLocalStorage",id:"fetchmarketplaceapitokenfromlocalstorage",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAddressTokenSigner",id:"getaddresstokensigner",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isTokenValid",id:"istokenvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"newMarketplaceApiToken",id:"newmarketplaceapitoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"saveMarketplaceApiTokenToLocalStorage",id:"savemarketplaceapitokentolocalstorage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:k};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"namespace-authtoken"},"Namespace: AuthToken"),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"variables"},"Variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/modules/AuthToken#marketplace_api_token"},"MARKETPLACE","_","API","_","TOKEN"))),(0,l.kt)("h3",{id:"functions"},"Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/modules/AuthToken#fetchmarketplaceapitokenfromlocalstorage"},"fetchMarketplaceApiTokenFromLocalStorage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/modules/AuthToken#getaddresstokensigner"},"getAddressTokenSigner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/modules/AuthToken#istokenvalid"},"isTokenValid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/modules/AuthToken#newmarketplaceapitoken"},"newMarketplaceApiToken")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/modules/AuthToken#savemarketplaceapitokentolocalstorage"},"saveMarketplaceApiTokenToLocalStorage"))),(0,l.kt)("h2",{id:"variables-1"},"Variables"),(0,l.kt)("h3",{id:"marketplace_api_token"},"MARKETPLACE","_","API","_","TOKEN"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"MARKETPLACE","_","API","_","TOKEN"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"marketplaceApiToken"')),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/utils/marketplace_token.ts#L5"},"utils/marketplace_token.ts:5")),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"fetchmarketplaceapitokenfromlocalstorage"},"fetchMarketplaceApiTokenFromLocalStorage"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"fetchMarketplaceApiTokenFromLocalStorage"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,l.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,l.kt)("p",null,"Get Marketplace API token to local storage"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,l.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,l.kt)("p",null,"Auth token object which generated from Marketplace API"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/utils/marketplace_token.ts#L25"},"utils/marketplace_token.ts:25")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getaddresstokensigner"},"getAddressTokenSigner"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getAddressTokenSigner"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Return the address that sign the token"),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The address token signer"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/utils/marketplace_token.ts#L86"},"utils/marketplace_token.ts:86")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"istokenvalid"},"isTokenValid"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"isTokenValid"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Check if Marketplace API Token is valid"),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if token is valid"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/utils/marketplace_token.ts#L64"},"utils/marketplace_token.ts:64")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"newmarketplaceapitoken"},"newMarketplaceApiToken"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"newMarketplaceApiToken"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"sdk"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,l.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,l.kt)("p",null,"Generate new Marketplace API API token"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sdk")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,l.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,l.kt)("p",null,"Auth token object which generated from Marketplace API"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/utils/marketplace_token.ts#L47"},"utils/marketplace_token.ts:47")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"savemarketplaceapitokentolocalstorage"},"saveMarketplaceApiTokenToLocalStorage"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"saveMarketplaceApiTokenToLocalStorage"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Save Marketplace API token to local storage"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"i")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/catalog/catalog/API/interfaces/MarketplaceAPIToken"},(0,l.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Auth token object which is generated from Marketplace API")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/9a583d0/catalog/src/utils/marketplace_token.ts#L11"},"utils/marketplace_token.ts:11")))}s.isMDXComponent=!0}}]);