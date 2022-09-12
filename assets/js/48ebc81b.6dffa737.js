"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[7002],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},189:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},p="Interface: SubscribeModule",c={unversionedId:"catalog/core/API/interfaces/SubscribeModule",id:"catalog/core/API/interfaces/SubscribeModule",title:"Interface: SubscribeModule",description:"subscribe contains all the functionalities to handle events",source:"@site/docs/catalog/core/API/interfaces/SubscribeModule.md",sourceDirName:"catalog/core/API/interfaces",slug:"/catalog/core/API/interfaces/SubscribeModule",permalink:"/docs/catalog/core/API/interfaces/SubscribeModule",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/catalog/core/API/interfaces/SubscribeModule.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: RegisterEvent",permalink:"/docs/catalog/core/API/interfaces/RegisterEvent"},next:{title:"Interface: SubscriptionActions",permalink:"/docs/catalog/core/API/interfaces/SubscriptionActions"}},s={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"paymentEvents",id:"paymentevents",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"transferEvents",id:"transferevents",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-subscribemodule"},"Interface: SubscribeModule"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," contains all the functionalities to handle events"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"Subcribe payment event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { subscribe, subscription, account, isLoadingSDK} = Catalog.useNevermined();\n const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();\n\n const buy = async () => {\n  if (!account.isTokenValid()) {\n    await account.generateToken();\n  }\n\n  const currentAccount = await getCurrentAccount(sdk);\n  const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n };\n\n const stopLog = () => {\n   paymentEvent.unsuscribe();\n }\n\n useEffect(() => {\n   if(isLoadingSDK) {\n    return;\n   }\n   (async () => {\n     setPaymentEvent(subscribe.paymentEvents((events)=> {\n       Logger.log(events)\n     }))\n   })()\n }, [isLoadingSDK])\n \n return (\n   <div>\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       <button onClick={stopLog} disabled={isLoadingSDK}>\n         Stop the logs\n       </button>\n   </div>\n );\n}\n")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/SubscribeModule#paymentevents"},"paymentEvents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/catalog/core/API/interfaces/SubscribeModule#transferevents"},"transferEvents"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"paymentevents"},"paymentEvents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"paymentEvents"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"cb"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"events"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"EventResult"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractEventSubscription")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"cb"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractEventSubscription")),(0,i.kt)("p",null,"Subscribe a ",(0,i.kt)("inlineCode",{parentName:"p"},"payment")," event and execute callbacks once that this event is listened"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cb")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"events"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"EventResult"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Callback event")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContractEventSubscription")),(0,i.kt)("p",null,"return the ",(0,i.kt)("inlineCode",{parentName:"p"},"payment")," event with a functionality to unsubscribe"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b19d66a/lib/src/types/index.ts#L619"},"types/index.ts:619")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transferevents"},"transferEvents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transferEvents"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"cb"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"events"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"EventResult"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftType?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"NftTypes"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractEventSubscription")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"cb"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftType?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractEventSubscription")),(0,i.kt)("p",null,"Subscribe a ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," event and execute callbacks once that this event is listened"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cb")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"events"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"EventResult"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Callback to execute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nftType?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NftTypes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"NFT asset type which can be 721 or 1155")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContractEventSubscription")),(0,i.kt)("p",null,"return the ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," event with a functionality to unsubscribe"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b19d66a/lib/src/types/index.ts#L626"},"types/index.ts:626")))}m.isMDXComponent=!0}}]);