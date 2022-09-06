"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[9735],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},p="Interface: SubscriptionActions",c={unversionedId:"catalog/core/API/interfaces/SubscriptionActions",id:"catalog/core/API/interfaces/SubscriptionActions",title:"Interface: SubscriptionActions",description:"Table of contents",source:"@site/docs/catalog/core/API/interfaces/SubscriptionActions.md",sourceDirName:"catalog/core/API/interfaces",slug:"/catalog/core/API/interfaces/SubscriptionActions",permalink:"/docs/catalog/core/API/interfaces/SubscriptionActions",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/core/API/interfaces/SubscriptionActions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: SubscribeModule",permalink:"/docs/catalog/core/API/interfaces/SubscribeModule"},next:{title:"Interface: Transfer",permalink:"/docs/catalog/core/API/interfaces/Transfer"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"buySubscription",id:"buysubscription",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-subscriptionactions"},"Interface: SubscriptionActions"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/SubscriptionActions#buysubscription"},"buySubscription"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"buysubscription"},"buySubscription"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buySubscription"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionDid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"buyer"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftHolder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftAmount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftType"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/modules#nfttypes"},(0,i.kt)("inlineCode",{parentName:"a"},"NftTypes")),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionDid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"buyer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftHolder"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftAmount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftType"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"Order a NFT asset and transfer and delegate it to the subscription buyer"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subscriptionDid")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Id of the NFT to subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buyer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"default")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The account who buy the subscription of the NFT asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nftHolder")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The owner of the NFT asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nftAmount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of NFT asset to buy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nftType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/catalog/core/API/modules#nfttypes"},(0,i.kt)("inlineCode",{parentName:"a"},"NftTypes"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"NFT asset type which can be 721 or 1155")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"It is true if the subscription was successfully completed"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L767"},"src/types/index.ts:767")))}f.isMDXComponent=!0}}]);