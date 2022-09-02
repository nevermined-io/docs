"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[1175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={},l="Interface: SubscribeModule",s={unversionedId:"architecture/components/catalog/core/API/interfaces/SubscribeModule",id:"architecture/components/catalog/core/API/interfaces/SubscribeModule",title:"Interface: SubscribeModule",description:"subscribe contains all the functionalities to handle events",source:"@site/docs/architecture/components/catalog/core/API/interfaces/SubscribeModule.md",sourceDirName:"architecture/components/catalog/core/API/interfaces",slug:"/architecture/components/catalog/core/API/interfaces/SubscribeModule",permalink:"/docs/architecture/components/catalog/core/API/interfaces/SubscribeModule",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/API/interfaces/SubscribeModule.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: RegisterEvent",permalink:"/docs/architecture/components/catalog/core/API/interfaces/RegisterEvent"},next:{title:"Interface: SubscriptionActions",permalink:"/docs/architecture/components/catalog/core/API/interfaces/SubscriptionActions"}},p={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"paymentEvents",id:"paymentevents",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"transferEvents",id:"transferevents",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-subscribemodule"},"Interface: SubscribeModule"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," contains all the functionalities to handle events"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"Subcribe payment event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { subscribe, subscription, account, isLoadingSDK} = Catalog.useNevermined();\n const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();\n\n const buy = async () => {\n  if (!account.isTokenValid()) {\n    await account.generateToken();\n  }\n\n  const currentAccount = await getCurrentAccount(sdk);\n  const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n };\n\n const stopLog = () => {\n   paymentEvent.unsuscribe();\n }\n\n useEffect(() => {\n   if(isLoadingSDK) {\n    return;\n   }\n   (async () => {\n     setPaymentEvent(subscribe.paymentEvents((events)=> {\n       Logger.log(events)\n     }))\n   })()\n }, [isLoadingSDK])\n \n return (\n   <div>\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       <button onClick={stopLog} disabled={isLoadingSDK}>\n         Stop the logs\n       </button>\n   </div>\n );\n}\n")),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/SubscribeModule#paymentevents"},"paymentEvents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/interfaces/SubscribeModule#transferevents"},"transferEvents"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"paymentevents"},"paymentEvents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"paymentEvents"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"cb"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"events"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/modules#eventresult"},(0,o.kt)("inlineCode",{parentName:"a"},"EventResult")),"[]) => ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),") => ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractEventSubscription"))),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"cb"),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractEventSubscription"))),(0,o.kt)("p",null,"Subscribe a ",(0,o.kt)("inlineCode",{parentName:"p"},"payment")," event and execute callbacks once that this event is listened"),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cb")),(0,o.kt)("td",{parentName:"tr",align:"left"},"(",(0,o.kt)("inlineCode",{parentName:"td"},"events"),": ",(0,o.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/API/modules#eventresult"},(0,o.kt)("inlineCode",{parentName:"a"},"EventResult")),"[]) => ",(0,o.kt)("inlineCode",{parentName:"td"},"void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Callback event")))),(0,o.kt)("h5",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractEventSubscription"))),(0,o.kt)("p",null,"return the ",(0,o.kt)("inlineCode",{parentName:"p"},"payment")," event with a functionality to unsubscribe"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L616"},"src/types/index.ts:616")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"transferevents"},"transferEvents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"transferEvents"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"cb"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"events"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/modules#eventresult"},(0,o.kt)("inlineCode",{parentName:"a"},"EventResult")),"[]) => ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nftType?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/modules#nfttypes"},(0,o.kt)("inlineCode",{parentName:"a"},"NftTypes")),") => ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractEventSubscription"))),(0,o.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"cb"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nftType?"),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractEventSubscription"))),(0,o.kt)("p",null,"Subscribe a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," event and execute callbacks once that this event is listened"),(0,o.kt)("h5",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cb")),(0,o.kt)("td",{parentName:"tr",align:"left"},"(",(0,o.kt)("inlineCode",{parentName:"td"},"events"),": ",(0,o.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/API/modules#eventresult"},(0,o.kt)("inlineCode",{parentName:"a"},"EventResult")),"[]) => ",(0,o.kt)("inlineCode",{parentName:"td"},"void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Callback to execute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"nftType?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/API/modules#nfttypes"},(0,o.kt)("inlineCode",{parentName:"a"},"NftTypes"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"NFT asset type which can be 721 or 1155")))),(0,o.kt)("h5",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/API/interfaces/ContractEventSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"ContractEventSubscription"))),(0,o.kt)("p",null,"return the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," event with a functionality to unsubscribe"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L623"},"src/types/index.ts:623")))}m.isMDXComponent=!0}}]);