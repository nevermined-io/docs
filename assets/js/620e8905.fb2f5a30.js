"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[6659],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),k=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=k(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=k(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?t.createElement(f,o(o({ref:r},l),{},{components:n})):t.createElement(f,o({ref:r},l))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var k=2;k<a;k++)o[k]=n[k];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7006:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>k});var t=n(7462),i=(n(7294),n(3905));const a={},o=void 0,d={unversionedId:"nevermined-sdk/api-reference/interfaces/Bookmark",id:"nevermined-sdk/api-reference/interfaces/Bookmark",title:"Bookmark",description:"@nevermined-io/nevermined-sdk-js / Bookmark",source:"@site/docs/nevermined-sdk/api-reference/interfaces/Bookmark.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/Bookmark",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/Bookmark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algorithm",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Algorithm"},next:{title:"Curation",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Curation"}},s={},k=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"createdAt",id:"createdat",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"did",id:"did",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"userId",id:"userid",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4}],l={toc:k};function c(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/nevermined-sdk-js")," / Bookmark"),(0,i.kt)("h1",{id:"interface-bookmark"},"Interface: Bookmark"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark"},(0,i.kt)("inlineCode",{parentName:"a"},"NewBookmark"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Bookmark"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark#createdat"},"createdAt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark#description"},"description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark#did"},"did")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark#id"},"id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Bookmark#userid"},"userId"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"createdat"},"createdAt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"createdAt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/bookmarks/Bookmarks.interfaces.ts#L9"},"src/bookmarks/Bookmarks.interfaces.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"description"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark"},"NewBookmark"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark#description"},"description")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/bookmarks/Bookmarks.interfaces.ts#L4"},"src/bookmarks/Bookmarks.interfaces.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"did"},"did"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark"},"NewBookmark"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark#did"},"did")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/bookmarks/Bookmarks.interfaces.ts#L2"},"src/bookmarks/Bookmarks.interfaces.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/bookmarks/Bookmarks.interfaces.ts#L8"},"src/bookmarks/Bookmarks.interfaces.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userid"},"userId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark"},"NewBookmark"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark#userid"},"userId")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/25074de/src/bookmarks/Bookmarks.interfaces.ts#L3"},"src/bookmarks/Bookmarks.interfaces.ts:3")))}c.isMDXComponent=!0}}]);