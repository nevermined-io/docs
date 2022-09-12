"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[3006],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5,description:"Nevermined allows data sharing between untrusted parties"},i="Data Sharing",s={unversionedId:"getting-started/data-sharing",id:"getting-started/data-sharing",title:"Data Sharing",description:"Nevermined allows data sharing between untrusted parties",source:"@site/docs/getting-started/data-sharing.md",sourceDirName:"getting-started",slug:"/getting-started/data-sharing",permalink:"/docs/getting-started/data-sharing",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/getting-started/data-sharing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Nevermined allows data sharing between untrusted parties"},sidebar:"tutorialSidebar",previous:{title:"Assets tokenization via NFTs",permalink:"/docs/getting-started/assets-tokenization"},next:{title:"Remote Computation",permalink:"/docs/getting-started/remote-computation"}},l={},c=[{value:"How this works?",id:"how-this-works",level:2},{value:"Provenance",id:"provenance",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-sharing"},"Data Sharing"),(0,r.kt)("p",null,"In the upcoming evolution of the Internet of Things (IoT) towards Web3, it is anticipated that billions of devices, networks and ecosystems will be connected to the Internet. Many of these\nare capable of collecting information from individual users and their physical surroundings. They are also capable of taking smart actions, which are usually from a backend cloud server in the IoT system. While web3 aims toward a more connected and smarter world, this pervasive large-scale data collection, storage, sharing, and analysis raise many privacy concerns."),(0,r.kt)("p",null,"In the current web2 ecosystem, service providers have full control of the collected user data. While the original intended use of such data is primarily for smart IoT systems and device control, the data is often used for other purposes not explicitly consented to by the users."),(0,r.kt)("p",null,"Nevermined proposes a novel data sharing and storage framework that aims to empower users with full privacy control of their data. Our framework seamlessly integrates smart contracts, Data In Situ Computation, Federated Learning and Provenance based data integrity checking and verification in cloud environments for the use of Service Execution Agreements (SEAs) between parties. "),(0,r.kt)("p",null,"The main actors in the ecosystem of Nevermined are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PUBLISHERS")," - Provide access to assets and/or services"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CONSUMERS")," - Want to get access to assets and/or services"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MARKETPLACES")," - Facilitate the trading between Publishers and Consumers")),(0,r.kt)("p",null,"By offering new mechanisms for sharing and securing data access and usage with smart contracts, Nevermined can allow data owners to control who can have what access to their data, and be able to maintain a trustworthy record of their data usage. Using remote attestation and Digital Asset registration and decentralized discovery (via DID), Nevermined ensures that data is only used for the intended purposes approved by the data owner. Our approach represents a significant departure from traditional privacy protections which often rely on cryptography and pure software-based secure computation techniques. Addressing the fundamental problem of data us- age control, Data In Situ Computation will become the cornerstone for the decentralized market of private information."),(0,r.kt)("p",null,"The data owner should not only be able to control who can have what access to his/her data, but also be ensured that the data is used only for the intended purposes. To realize the envisioned functionality of Nevermined, there are several key requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users shall be able to define their data access policy concerning who they share data with at what time for what purpose and at what price. The framework shall also support rich encoding of different data utilization conditions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There shall be strict enforcement of the data policy set forth by the data owner. Each usage of the user data shall have verified proof that it is compliant with the policy and data content is well protected during the utilization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each data usage shall be recorded on a platform that offers non-repudiation and transparency."))),(0,r.kt)("p",null,"Nevermined proposes a solution for data ecosystems with an alternative for tracking, managing and especially enforcing data sharing using smart contracts and W3C Provenance. We design a framework that generates smart contracts from parameters based on data-sharing agreements. Combining NFTs with integrity proofs, smart contracts and the W3C Provenance standard creates an unparalleled level of transparency in tracking assets and agreements through the supply chain."),(0,r.kt)("h2",{id:"how-this-works"},"How this works?"),(0,r.kt)("p",null,"Most of the interactions between users of Nevermined requires the management of access control to digital assets. Simply put, this means that for something I own, I want to give you some permissions to do something under some circumstances. These are all parameters of which I control."),(0,r.kt)("p",null,"This conceptually is very abstract but is extremely flexible at the same time. It means that depending on the problem I want to articulate and manage, different access control possibilities can be supported support across any use case, including the following:"),(0,r.kt)("admonition",{title:"Data Sharing",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"I have data, and I want to allow anyone paying me X amount to get access to my data.")),(0,r.kt)("p",null,"Or:"),(0,r.kt)("admonition",{title:"Access to Exclusive Content",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"I\u2019m an artist, and for all my customers buying my art, I\u2019m going to issue a Non-Fungible Token, or NFT that allows them to get access to new and exclusive content.")),(0,r.kt)("p",null,"For example, in the drug shipping use case, the manufacturer may allow certain freight forwarders to access the manufacturer\u2019s temperature gauge data embedded in the drug shipment. "),(0,r.kt)("p",null,"In this case, access control would allow for accepted freight forwarders to access the data remotely to determine if the shipment\u2019s temperature has gone above a certain threshold during the course of shipping."),(0,r.kt)("h3",{id:"provenance"},"Provenance"),(0,r.kt)("p",null,"Provenance allows us to understand the context in which \u201csomething\u201d was created, how it is used and by whom, and how ownership is transferred or delegated. "),(0,r.kt)("p",null,"Nevermined implements internally a provenance track record that records all the\nrelevant interactions happening around digital assets. Things like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A digital asset is regitered into Nevermined by a user"),(0,r.kt)("li",{parentName:"ul"},"NFTs attached to a digital asset are minted or burned"),(0,r.kt)("li",{parentName:"ul"},"Service agreements are created and or executed"),(0,r.kt)("li",{parentName:"ul"},"Assets or NFTs are accessed or used"),(0,r.kt)("li",{parentName:"ul"},"etc")),(0,r.kt)("p",null,"W3C Provenance specification defines, in a use case-independent way, how provenance can be registered and used. This, combined with the utilization of a blockchain network, provides a transparent and unique source of truth for data ecosystems."),(0,r.kt)("p",null,"For example, in the drug shipping use case, combining NFTs with integrity proofs, plus the W3C Provenance standard, creates an unparalleled level of transparency in tracking the shipment through the supply chain."))}u.isMDXComponent=!0}}]);