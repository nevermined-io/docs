"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),l=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||i;return a?s.createElement(f,o(o({ref:t},d),{},{components:a})):s.createElement(f,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var l=2;l<i;l++)o[l]=a[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=a(87462),n=(a(67294),a(3905));const i={sidebar_position:2,description:"How Nevermined can be used to put your assets to work"},o="What can I do with my assets?",r={unversionedId:"architecture/what-can-i-do",id:"architecture/what-can-i-do",title:"What can I do with my assets?",description:"How Nevermined can be used to put your assets to work",source:"@site/docs/architecture/what-can-i-do.md",sourceDirName:"architecture",slug:"/architecture/what-can-i-do",permalink:"/docs/architecture/what-can-i-do",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/what-can-i-do.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How Nevermined can be used to put your assets to work"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/"},next:{title:"Building decentralized applications with Nevermined",permalink:"/docs/architecture/building-dapps"}},c={},l=[{value:"Available services",id:"available-services",level:2},{value:"Data Sharing (aka &quot;access&quot;)",id:"data-sharing-aka-access",level:3},{value:"Remote computation (aka &quot;compute&quot;)",id:"remote-computation-aka-compute",level:3},{value:"Tokenization of assets via ERC-721 NFTs (aka &quot;nft721-sales&quot;)",id:"tokenization-of-assets-via-erc-721-nfts-aka-nft721-sales",level:3},{value:"Tokenization of assets via ERC-1155 NFTs",id:"tokenization-of-assets-via-erc-1155-nfts",level:3},{value:"Exclusive access for ERC-721 NFTs holders",id:"exclusive-access-for-erc-721-nfts-holders",level:3},{value:"Exclusive access for ERC-1155 NFTs holders",id:"exclusive-access-for-erc-1155-nfts-holders",level:3},{value:"Loans using NFTs as collateral (aka &quot;aave-credit&quot;)",id:"loans-using-nfts-as-collateral-aka-aave-credit",level:3}],d={toc:l};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-can-i-do-with-my-assets"},"What can I do with my assets?"),(0,n.kt)("p",null,"Nevermined is a network built around digital assets and how they can be\nused to provide digital services. In the overview section we introduced\nthe concept of a service, as something that an asset owner/publisher\nprovide to the rest of the world to get something in return (or for free!)."),(0,n.kt)("p",null,"Nevermined enforces the delivery of these services in a secure way for\nasset owners/providers and the final users/consumers via the Nevermined\nSmart Contracts. "),(0,n.kt)("p",null,"Nevermined is an omnichain interoperability protocol for the creation, minting and bridging of digital assets and non-fungible tokens (NFTs). The SDK, Catalogue and other tools it comproses seamlessly beam tokens across blockchains with complete data integrity, including persistent smart contract addresses and token IDs. Omnichain bridging unlocks new and exciting use cases by achieving true asset interactivity. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Each asset registered in Nevermined can have associated more than one service.\nData Sharing and Compute. NFT Sales and NFT Access to exclusive contents, etc.")),(0,n.kt)("h2",{id:"available-services"},"Available services"),(0,n.kt)("p",null,"The services available on Nevermined for digital assets are:"),(0,n.kt)("h3",{id:"data-sharing-aka-access"},'Data Sharing (aka "access")'),(0,n.kt)("p",null,"This service allows data owners or providers to give access to the files\nattached to an asset if the users/consumers fulfill the conditions they\ndefine (in most of the cases payment of some amount)."),(0,n.kt)("p",null,"As a owner of data I want to keep this in place where is stored (cloud,\non-prem, public network, etc). But I want to give access to this data to\nusers paying for it (free access is possible too)."),(0,n.kt)("p",null,"So what I do is register an asset in Nevermined specifying I want to provide\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"access")," service. Everything I have to specify is: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Metadata of the asset. That will help to discover the asset."),(0,n.kt)("li",{parentName:"ul"},"The payment conditions. What's the price, what token will be used (erc20 or native), etc."),(0,n.kt)("li",{parentName:"ul"},"The URLs where the asset/s are. The URLs needs to be resolvable by the Nevermined Node. URLs can be\nregular http urls, or reference CIDs on IPFS and/or Filecoin networks.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The URLs to the files ",(0,n.kt)("strong",{parentName:"p"},"always will be encrypted")," so even if they are in a public network a\nuser won't be able to access the files unless it goes through the Nevermined Service Agreements.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service: Data Sharing",src:a(74538).Z,width:"1619",height:"836"})),(0,n.kt)("h3",{id:"remote-computation-aka-compute"},'Remote computation (aka "compute")'),(0,n.kt)("p",null,'For owners of assets with more restrictive privacy constraints, data sharing could\nnot be a valid option. The "compute" service allows to third-parties for paying to\nexecute some algorithm on top of the data in a privacy preserving manner.\nAll of this without moving the data from the current location.'),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The full name of the compute service is Data In Situ Computation (DISC).\nYou can find the low level details in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-COMPUTE"},"Compute Specifications"),".")),(0,n.kt)("p",null,"In this case Nevermined facilitates the\npayment and reward for the delivery of this service and orchestates the infrastructure\nto make that possible."),(0,n.kt)("p",null,"The compute engine of Nevermined allows the orchestration of different kind of computations,\ncurrently we support the execution of traditional analytics frameworks (Spark, Flink, etc),\nstand-alone software and Federated Learning workflows."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service: Remote Computation",src:a(29944).Z,width:"1641",height:"833"})),(0,n.kt)("h3",{id:"tokenization-of-assets-via-erc-721-nfts-aka-nft721-sales"},'Tokenization of assets via ERC-721 NFTs (aka "nft721-sales")'),(0,n.kt)("p",null,"This service allows users to attach an asset to a ERC-721 NFT. This will allow them\nto sell NFTs representing a fraction of the digital ownership of that asset to some other\nusers. "),(0,n.kt)("p",null,"This service works as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The publisher register a new asset in Nevermined (Metadata, price, etc). The publisher specifies\nthe contract address of the ERC-721 NFT."),(0,n.kt)("li",{parentName:"ol"},"A different user pays for that NFT. The ERC-721 is transferred to the buyer."),(0,n.kt)("li",{parentName:"ol"},"The rewards are transferred to the seller.")),(0,n.kt)("h3",{id:"tokenization-of-assets-via-erc-1155-nfts"},"Tokenization of assets via ERC-1155 NFTs"),(0,n.kt)("p",null,"This service works like the previous one with the difference it uses a ERC-1155 NFT.\nThe difference between the different NFTs standards are the ERC-721 are non-fungible and\nERC-1155 semi-fungible. In the first one each NFT minted is unique, but in the ERC-1155 there\nis the possibility for minting multiple editions of the same NFT."),(0,n.kt)("h3",{id:"exclusive-access-for-erc-721-nfts-holders"},"Exclusive access for ERC-721 NFTs holders"),(0,n.kt)("p",null,"This service allows asset owners to create access control mechanisms to contents where only the\nholders of specific ERC-721 NFTs can access. "),(0,n.kt)("p",null,"This service protects contents implementing a NFT access control system that is enforced by the\nNevermined Node, that works as a guard of the asset contents checking on-chain if the user\nhas a specific NFT."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This service works perfectlly in combination with the ",(0,n.kt)("strong",{parentName:"p"},"nft-sales")," service. The Sales service allows\nto sell NFTs associated to an asset, and for all the buyers you allow to get access to exclusive contents\nwith the ",(0,n.kt)("strong",{parentName:"p"},"nft-access")," service.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service: NFT ERC-721 Access",src:a(54262).Z,width:"1634",height:"833"})),(0,n.kt)("h3",{id:"exclusive-access-for-erc-1155-nfts-holders"},"Exclusive access for ERC-1155 NFTs holders"),(0,n.kt)("p",null,"This service works like the previous one with the difference it uses a ERC-1155 NFT.\nThe difference between the different NFTs standards are the ERC-721 are non-fungible and\nERC-1155 semi-fungible. In the first one each NFT minted is unique, but in the ERC-1155 there\nis the possibility for minting multiple editions of the same NFT."),(0,n.kt)("p",null,"Because of that, this service allows to define access depending on the number of editions that\na user holds. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a user holds 1 edition of my NFT, that user can get access to a exclusive picture"),(0,n.kt)("li",{parentName:"ul"},"If a user holds 3 editions of my NFT, that user can get access to a exclusive picture in high quality"),(0,n.kt)("li",{parentName:"ul"},"If a user holds 5 editions of my NFT, that user can get access to a exclusive picture in high quality and a video")),(0,n.kt)("h3",{id:"loans-using-nfts-as-collateral-aka-aave-credit"},'Loans using NFTs as collateral (aka "aave-credit")'),(0,n.kt)("p",null,"This service is provided with the integration of Nevermined with ",(0,n.kt)("strong",{parentName:"p"},"Aave protocol"),"."),(0,n.kt)("p",null,"This service makes it possible for NFT collectors to create loan agreements using their NFTs as collateral,\nwithout having to leave their trusted marketplace. The benefit for depositors is that they can receive two\nstreams of return: from the collector and from an Aave vault."),(0,n.kt)("p",null,"Yo can find more information about it in the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/new-nevermined-component-allows-marketplaces-to-offer-nft-backed-loans-5e05c77e6709"},"NFT Baked Loans blog post"),"."))}h.isMDXComponent=!0},29944:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/service_compute-f48be2ba5d36c3368d79fd7dfd9798d1.png"},74538:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/service_data_sharing-5f4abe069ea931bf21cfd91e0492e45b.png"},54262:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/service_nft721-access-9dcc89414b7d24e0feab6005b78aca27.png"}}]);