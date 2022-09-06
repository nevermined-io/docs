"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[3006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5,description:"Nevermined allows data sharing between untrusted parties"},c="Data Sharing",l={unversionedId:"getting-started/data-sharing",id:"getting-started/data-sharing",title:"Data Sharing",description:"Nevermined allows data sharing between untrusted parties",source:"@site/docs/getting-started/data-sharing.md",sourceDirName:"getting-started",slug:"/getting-started/data-sharing",permalink:"/docs/getting-started/data-sharing",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/getting-started/data-sharing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Nevermined allows data sharing between untrusted parties"},sidebar:"tutorialSidebar",previous:{title:"Assets tokenization via NFTs",permalink:"/docs/getting-started/assets-tokenization"},next:{title:"Remote Computation",permalink:"/docs/getting-started/remote-computation"}},u={},d=[{value:"Provenance",id:"provenance",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-sharing"},"Data Sharing"),(0,i.kt)("p",null,"Most of the interactions between users of Nevermined requires the management\nof access control to digital assets. Simply put, this means that for something\nI own, I want to give you some permissions to do something under some circumstances.\nThese are all parameters of which I control."),(0,i.kt)("p",null,"This conceptually is very abstract but is extremely flexible at the same time.\nIt means that depending on the problem I want to articulate and manage,\ndifferent access control possibilities can be supported support across any use case,\nincluding the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I have data, and I want to allow anyone paying me X amount to get access to my data.\n")),(0,i.kt)("p",null,"Or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I\u2019m an artist, and for all my customers buying my art, I\u2019m going to issue a \nNon-Fungible Token, or NFT that allows them to get access to new and exclusive content.\n")),(0,i.kt)("p",null,"For example, in the drug shipping use case, the manufacturer may allow certain\nfreight forwarders to access the manufacturer\u2019s temperature gauge data embedded\nin the drug shipment.\nIn this case, access control would allow for accepted freight forwarders to\naccess the data remotely to determine if the shipment\u2019s temperature has gone above\na certain threshold during the course of shipping."),(0,i.kt)("h3",{id:"provenance"},"Provenance"),(0,i.kt)("p",null,"Provenance allows us to understand the context in which \u201csomething\u201d was created,\nhow it is used and by whom, and how ownership is transferred or delegated. "),(0,i.kt)("p",null,"Nevermined implements internally a provenance track record that records all the\nrelevant interactions happening around digital assets. Things like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A digital asset is regitered into Nevermined by a user"),(0,i.kt)("li",{parentName:"ul"},"NFTs attached to a digital asset are minted or burned"),(0,i.kt)("li",{parentName:"ul"},"Service agreements are created and or executed"),(0,i.kt)("li",{parentName:"ul"},"Assets or NFTs are accessed or used"),(0,i.kt)("li",{parentName:"ul"},"etc")),(0,i.kt)("p",null,"W3C Provenance specification defines, in a use case-independent way,\nhow provenance can be registered and used. This, combined with the utilization of\na blockchain network, provides a transparent and unique source of truth for data ecosystems."),(0,i.kt)("p",null,"For example, in the drug shipping use case, combining NFTs with integrity proofs,\nplus the W3C Provenance standard, creates an unparalleled level of transparency\nin tracking the shipment through the supply chain."))}m.isMDXComponent=!0}}]);