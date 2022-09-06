"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[4456],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),i=["components"],l={},o="Namespace: AssetService",p={unversionedId:"catalog/core/API/modules/AssetService",id:"catalog/core/API/modules/AssetService",title:"Namespace: AssetService",description:"Table of contents",source:"@site/docs/catalog/core/API/modules/AssetService.md",sourceDirName:"catalog/core/API/modules",slug:"/catalog/core/API/modules/AssetService",permalink:"/docs/catalog/core/API/modules/AssetService",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/core/API/modules/AssetService.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Namespace: AccountService",permalink:"/docs/catalog/core/API/modules/AccountService"},next:{title:"Namespace: AuthToken",permalink:"/docs/catalog/core/API/modules/AuthToken"}},d={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"AssetPublishContext",id:"assetpublishcontext",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"AssetPublishProvider",id:"assetpublishprovider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"useAsset",id:"useasset",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"useAssetPublish",id:"useassetpublish",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"useAssets",id:"useassets",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"namespace-assetservice"},"Namespace: AssetService"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"variables"},"Variables"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AssetService#assetpublishcontext"},"AssetPublishContext"))),(0,s.kt)("h3",{id:"functions"},"Functions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AssetService#assetpublishprovider"},"AssetPublishProvider")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AssetService#useasset"},"useAsset")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AssetService#useassetpublish"},"useAssetPublish")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/modules/AssetService#useassets"},"useAssets"))),(0,s.kt)("h2",{id:"variables-1"},"Variables"),(0,s.kt)("h3",{id:"assetpublishcontext"},"AssetPublishContext"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"AssetPublishContext"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Context"),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetPublishProviderState"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetPublishProviderState")),">"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/services/asset.tsx#L113"},"src/services/asset.tsx:113")),(0,s.kt)("h2",{id:"functions-1"},"Functions"),(0,s.kt)("h3",{id:"assetpublishprovider"},"AssetPublishProvider"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"AssetPublishProvider"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Element")),(0,s.kt)("p",null,"Provider with all the functionalities to publish assets (no-nft, nft721, nft1155)"),(0,s.kt)("p",null,"Here is an example how to implement it"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"See"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/defi-marketplace/tree/main/client/src/%2Bassets/user-publish-steps"},"https://github.com/nevermined-io/defi-marketplace/tree/main/client/src/%2Bassets/user-publish-steps")),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Object"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"__namedParameters.children")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ReactElement"),"<",(0,s.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,s.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor"),"<",(0,s.kt)("inlineCode",{parentName:"td"},"any"),">",">")))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Element")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/services/asset.tsx#L121"},"src/services/asset.tsx:121")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"useasset"},"useAsset"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"useAsset"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetState"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetState"))),(0,s.kt)("p",null,"Get single asset"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n const did = "did";\n const { ddo } = AssetService.useAsset(did);\n\n return (\n  <>\n    {JSON.stringify(ddo)}\n  </>\n )\n}\n')),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"did")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"asset did")))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetState"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetState"))),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/services/asset.tsx#L85"},"src/services/asset.tsx:85")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"useassetpublish"},"useAssetPublish"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"useAssetPublish"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetPublishProviderState"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetPublishProviderState"))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetPublishProviderState"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetPublishProviderState"))),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/services/asset.tsx#L333"},"src/services/asset.tsx:333")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"useassets"},"useAssets"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"useAssets"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"q"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("p",null,"Get all assets"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = () => {\n const {  result, isLoading } = AssetService.useAssets();\n\n return (\n  <>\n     {result.results.map((d: DDO) => {\n         return (\n             <div>\n             {JSON.stringify(d)}\n             </div>\n         )\n     })}\n  </>\n )\n}\n")),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"q")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SearchQuery")),(0,s.kt)("td",{parentName:"tr",align:"left"},"assets query")))),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Object")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"isLoading")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")),(0,s.kt)("td",{parentName:"tr",align:"left"},"If the query is still processing")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"result")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"QueryResult")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Result based in the query search requested")))),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/services/asset.tsx#L32"},"src/services/asset.tsx:32")))}m.isMDXComponent=!0}}]);