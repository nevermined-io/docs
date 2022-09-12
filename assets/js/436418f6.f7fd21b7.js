"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[7085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7,description:"Nevermined allows building Marketplaces where untrusted parties can trade"},s="Digital Assets Marketplaces",o={unversionedId:"getting-started/marketplace",id:"getting-started/marketplace",title:"Digital Assets Marketplaces",description:"Nevermined allows building Marketplaces where untrusted parties can trade",source:"@site/docs/getting-started/marketplace.md",sourceDirName:"getting-started",slug:"/getting-started/marketplace",permalink:"/docs/getting-started/marketplace",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/getting-started/marketplace.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Nevermined allows building Marketplaces where untrusted parties can trade"},sidebar:"tutorialSidebar",previous:{title:"Remote Computation",permalink:"/docs/getting-started/remote-computation"},next:{title:"Nevermined SDK",permalink:"/docs/category/nevermined-sdk"}},l={},c=[],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"digital-assets-marketplaces"},"Digital Assets Marketplaces"),(0,r.kt)("p",null,"Nevermined\u2019s Marketplace framework facilitates the usage of data ecosystems via a bespoke data catalog / marketplace that allows integration with existing tools within the organization. This gives organizations a direct venue for the sale and distribution of their NFTs as well as access to a global community of artists and fans."),(0,r.kt)("p",null,"This Generic Marketplace solution supports the registration, search and discovery of assets across multiple organizations. Our NFT API lets users instantly find, verify, and display any NFT, across all major blockchains."),(0,r.kt)("p",null,"Organizations can access the blockchain with Nevermined\u2019s continually expanding Enhanced API suite, and web3 developer tools. This includes querying NFTs by the user, tracing transactions, getting real-time notifications in your dApp, debugging smart contracts faster, and doing more with our supported endpoints."),(0,r.kt)("p",null,"The NFT API supports all NFTs made with the ERC721 and ERC1155 standards. Using the Nevermined NFT API allows companies to both fetch and display NFTs for their users, making it easy to build all kinds of NFT collections."),(0,r.kt)("p",null,"Grabbing NFT metadata usually requires developers to read and parse individual smart contracts, then sort through a sea of irregular data. Nevermined API standardizes the data, making it easy to query across different projects."),(0,r.kt)("p",null,"The NFT API allows users to quickly get all the information they need to know about NFTs from the blockchain. Rather than searching, indexing, and storing data themselves - users can now make one request to fetch specific NFT information for both ERC-721 and ERC-1155 tokens, like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All NFTs owned by an address"),(0,r.kt)("li",{parentName:"ul"},"Metadata and attributes for a specific NFT token")),(0,r.kt)("p",null,"Getting historical transactions is currently an extremely challenging and inefficient task, requiring users to scan the entire blockchain and index everything to search for transactions associated with the desired address. Nevermined provides a set of functions for tracking address activity, mined transactions, dropped transactions, and prices on multiple blockchains.\nWith that objective in mind, the specification of the Nevermined NFT API supports the following capabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assets Management")," - Creation, Update, Deleting, etc. This is based on the existing Metadata Spec"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assets Search")," - Allowing the search and filtering of assets"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Users Profile")," - Allowing to create, update and delete users"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secondary Market")," - Registering the negotiation of parties during a secondary market purchase"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFTs Metadata")," - Recording the metadata associated to an NFT"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFTs Drops")," - Management of NFT drops"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Reviews")," - Allowing users to comment and rate marketplace contents"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Drops")," - Managing of NFT drops"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bookmarks")," - Allowing users to save bookmarks about different assets")),(0,r.kt)("p",null,"The goal behind Nevermined\u2019s NFT API is to help enterprises and developers deliver incredible Web3-enabled experiences for users. By introducing a simple unified API we plan to take away some of the complexities of blockchain technology, bringing one of the most powerful use cases in Web3 to everyone."))}p.isMDXComponent=!0}}]);