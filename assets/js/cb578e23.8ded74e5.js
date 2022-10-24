"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return a?n.createElement(m,o(o({ref:t},k),{},{components:a})):n.createElement(m,o({ref:t},k))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o="Namespace: AuthToken",i={unversionedId:"catalog/core/API/modules/AuthToken",id:"catalog/core/API/modules/AuthToken",title:"Namespace: AuthToken",description:"Table of contents",source:"@site/docs/catalog/core/API/modules/AuthToken.md",sourceDirName:"catalog/core/API/modules",slug:"/catalog/core/API/modules/AuthToken",permalink:"/docs/catalog/core/API/modules/AuthToken",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/core/API/modules/AuthToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Namespace: AssetService",permalink:"/docs/catalog/core/API/modules/AssetService"},next:{title:"Namespace: Catalog",permalink:"/docs/catalog/core/API/modules/Catalog"}},p={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"MARKETPLACE_API_TOKEN",id:"marketplace_api_token",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"fetchMarketplaceApiTokenFromLocalStorage",id:"fetchmarketplaceapitokenfromlocalstorage",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAddressTokenSigner",id:"getaddresstokensigner",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isTokenValid",id:"istokenvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"newMarketplaceApiToken",id:"newmarketplaceapitoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"saveMarketplaceApiTokenToLocalStorage",id:"savemarketplaceapitokentolocalstorage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4}],k={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"namespace-authtoken"},"Namespace: AuthToken"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AuthToken#marketplace_api_token"},"MARKETPLACE","_","API","_","TOKEN"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AuthToken#fetchmarketplaceapitokenfromlocalstorage"},"fetchMarketplaceApiTokenFromLocalStorage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AuthToken#getaddresstokensigner"},"getAddressTokenSigner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AuthToken#istokenvalid"},"isTokenValid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AuthToken#newmarketplaceapitoken"},"newMarketplaceApiToken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AuthToken#savemarketplaceapitokentolocalstorage"},"saveMarketplaceApiTokenToLocalStorage"))),(0,r.kt)("h2",{id:"variables-1"},"Variables"),(0,r.kt)("h3",{id:"marketplace_api_token"},"MARKETPLACE","_","API","_","TOKEN"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"MARKETPLACE","_","API","_","TOKEN"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"marketplaceApiToken"')),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c3c9cbb/lib/src/utils/marketplace_token.ts#L5"},"utils/marketplace_token.ts:5")),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"fetchmarketplaceapitokenfromlocalstorage"},"fetchMarketplaceApiTokenFromLocalStorage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fetchMarketplaceApiTokenFromLocalStorage"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,r.kt)("p",null,"Get Marketplace API token to local storage"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,r.kt)("p",null,"Auth token object which generated from Marketplace API"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c3c9cbb/lib/src/utils/marketplace_token.ts#L20"},"utils/marketplace_token.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getaddresstokensigner"},"getAddressTokenSigner"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAddressTokenSigner"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Return the address that sign the token"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The address token signer"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c3c9cbb/lib/src/utils/marketplace_token.ts#L76"},"utils/marketplace_token.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"istokenvalid"},"isTokenValid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isTokenValid"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Check if Marketplace API Token is valid"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if token is valid"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c3c9cbb/lib/src/utils/marketplace_token.ts#L54"},"utils/marketplace_token.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"newmarketplaceapitoken"},"newMarketplaceApiToken"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"newMarketplaceApiToken"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sdk"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,r.kt)("p",null,"Generate new Marketplace API API token"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sdk")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Nevermined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Instance of SDK object")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">"),(0,r.kt)("p",null,"Auth token object which generated from Marketplace API"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c3c9cbb/lib/src/utils/marketplace_token.ts#L36"},"utils/marketplace_token.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"savemarketplaceapitokentolocalstorage"},"saveMarketplaceApiTokenToLocalStorage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"saveMarketplaceApiTokenToLocalStorage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Save Marketplace API token to local storage"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/catalog/core/API/interfaces/MarketplaceAPIToken"},(0,r.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Auth token object which is generated from Marketplace API")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/c3c9cbb/lib/src/utils/marketplace_token.ts#L11"},"utils/marketplace_token.ts:11")))}s.isMDXComponent=!0}}]);