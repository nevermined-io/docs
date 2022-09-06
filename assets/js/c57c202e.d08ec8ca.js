"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[9686],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return v}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),v=i,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||a;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4361:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),s=["components"],o={},l=void 0,c={unversionedId:"nevermined-sdk/api-reference/modules/events",id:"nevermined-sdk/api-reference/modules/events",title:"events",description:"@nevermined-io/nevermined-sdk-js / events",source:"@site/docs/nevermined-sdk/api-reference/modules/events.md",sourceDirName:"nevermined-sdk/api-reference/modules",slug:"/nevermined-sdk/api-reference/modules/events",permalink:"/docs/nevermined-sdk/api-reference/modules/events",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/nevermined-sdk/api-reference/modules/events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"conditions",permalink:"/docs/nevermined-sdk/api-reference/modules/conditions"},next:{title:"subgraphs.AaveBorrowCondition",permalink:"/docs/nevermined-sdk/api-reference/modules/subgraphs.AaveBorrowCondition"}},d={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Classes",id:"classes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"EventResult",id:"eventresult",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:p};function v(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/nevermined-sdk-js")," / events"),(0,a.kt)("h1",{id:"namespace-events"},"Namespace: events"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/events.ContractEvent"},"ContractEvent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/events.EventHandler"},"EventHandler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/events.NeverminedEvent"},"NeverminedEvent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/events.SubgraphEvent"},"SubgraphEvent"))),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/events.ContractEventSubscription"},"ContractEventSubscription")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/events.EventEmitter"},"EventEmitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/events.EventOptions"},"EventOptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/events.Filter"},"Filter"))),(0,a.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/modules/events#eventresult"},"EventResult"))),(0,a.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,a.kt)("h3",{id:"eventresult"},"EventResult"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"EventResult"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/events/NeverminedEvent.ts#L26"},"src/events/NeverminedEvent.ts:26")))}v.isMDXComponent=!0}}]);