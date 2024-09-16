"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:6,description:"How Nevermined NFTs work"},o="Bringing NFTs to a new Dimension",s={unversionedId:"getting-started/nvm-nfts",id:"getting-started/nvm-nfts",title:"Bringing NFTs to a new Dimension",description:"How Nevermined NFTs work",source:"@site/docs/getting-started/nvm-nfts.md",sourceDirName:"getting-started",slug:"/getting-started/nvm-nfts",permalink:"/docs/getting-started/nvm-nfts",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/getting-started/nvm-nfts.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How Nevermined NFTs work"},sidebar:"tutorialSidebar",previous:{title:"What can you build on Nevermined",permalink:"/docs/getting-started/build-on-NVM"},next:{title:"So what does Nevermined offer to unchain my Data and AI?",permalink:"/docs/getting-started/advanced-utility/"}},l={},c=[{value:"What&#39;s a NFT",id:"whats-a-nft",level:2},{value:"New generation of NFTs",id:"new-generation-of-nfts",level:3},{value:"Utility",id:"utility",level:3},{value:"ERC-721 vs ERC-1155",id:"erc-721-vs-erc-1155",level:3},{value:"What extras are provided by Nevermined NFTs?",id:"what-extras-are-provided-by-nevermined-nfts",level:2},{value:"Selling and Purchasing assets",id:"selling-and-purchasing-assets",level:3},{value:"Access Control",id:"access-control",level:3},{value:"Royalties and Secondary Markets",id:"royalties-and-secondary-markets",level:3},{value:"Search and Discovery",id:"search-and-discovery",level:3},{value:"Provenance",id:"provenance",level:3},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Proof of Attendance (POAP)",id:"proof-of-attendance-poap",level:3},{value:"Soul Bound or Non-Transferable NFTs",id:"soul-bound-or-non-transferable-nfts",level:3},{value:"How to build applications using Nevermined NFTs",id:"how-to-build-applications-using-nevermined-nfts",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"NFT Contracts",id:"nft-contracts",level:3},{value:"SDK",id:"sdk",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bringing-nfts-to-a-new-dimension"},"Bringing NFTs to a new Dimension"),(0,i.kt)("h2",{id:"whats-a-nft"},"What's a NFT"),(0,i.kt)("p",null,"NFTs represent ownership of digital assets in a decentralized manner. They allow that assets you own in a digital environment belong to you and not to a third-party.\nIn digital environments where assets don't live in a physical world, the ownership of them is more faith than a reality. Faith in infrastructure where these assets live, and faith in the owners of that infrastructure."),(0,i.kt)("p",null,'It\'s quite common to think you own that character you purchased to play a video game, that subscription to a streaming service, etc. But in reality these are just entries in a company database. These assets you "own" and probably you paid for, tomorrow can be updated or deleted (accidentally or not) by the entity running the infrastructure where these digital assets exist, your account can be "banned", etc. In any of these situations all your digital assets just evaporate. And good luck claiming for them.'),(0,i.kt)("p",null,'NFTs are good to remove that dependency on any third-party. They live in a blockchain not owned by anyone directly, and their code (the NFT Smart Contract code) who owns them and what can be done with them and what not. Something so "simple" has massive implications because it gravitates the "real ownership" and responsibility of the asset to the final user.'),(0,i.kt)("h3",{id:"new-generation-of-nfts"},"New generation of NFTs"),(0,i.kt)("p",null,"As any new technology, in the short history of NFTs they went through the typical journey of the emerging technology hype cycle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Emerging Technologies Hype Cycle",src:n(559).Z,width:"642",height:"375"})),(0,i.kt)("p",null,"During 2021 and 2022 we lived the infancy of the NFTs technology. Many digital assets were put online and traded. With a bigger focus in the speculative factor of the new thing, the first age of NFTs had some characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The concept of ownership was not enforced, the NFT content creator didn\'t "own" the asset but a small'),(0,i.kt)("li",{parentName:"ul"},"From a users point of view, most of the NFTs didn't represent any real benefit vs traditional assets. Terms & conditions made that very clear."),(0,i.kt)("li",{parentName:"ul"},"No attribution, no provenance, no utility, just static pictures")),(0,i.kt)("p",null,"Beyond the fun of playing with a new technology, the first age of NFTs didn't provide any real value to content creators or users. There is an obvious disenchantment because they didn't provide any real improvement."),(0,i.kt)("p",null,"But with the lower hype came also more clarity and thinking on the benefits NFTs technology can bring to a digital world and their users. A second age of NFTs is coming with a different direction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enforcement of ownership and content attribution to creators and users"),(0,i.kt)("li",{parentName:"ul"},"Activation of digital assets utility"),(0,i.kt)("li",{parentName:"ul"},"Remix/combination/interaction of NFTs"),(0,i.kt)("li",{parentName:"ul"},"Attribution to content creators, provenance and royalties for secondary market sales")),(0,i.kt)("p",null,"More information in the post: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/facilitating-asset-tokenization-with-nfts-3f725bfd51e2"},"Facilitating asset tokenization with NFTs"),"."),(0,i.kt)("h3",{id:"utility"},"Utility"),(0,i.kt)("p",null,'In a digital world assets need to be represented somehow. We spoke about the ownership of them. But also NFTs are useful to describe the digital asset, what are their properties and how that asset can be used. This is important because on top of the "ownership" concept we can build the "utility" concept. That means how the asset can be used and under what conditions.'),(0,i.kt)("p",null,"The utility allows that asset owners can define things like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A piece of that asset can be sold"),(0,i.kt)("li",{parentName:"ul"},"That ownership from a third-party of a piece of an asset can give access to something exclusive"),(0,i.kt)("li",{parentName:"ul"},"That asset can be rented for being used"),(0,i.kt)("li",{parentName:"ul"},"Or lended"),(0,i.kt)("li",{parentName:"ul"},"etc, etc")),(0,i.kt)("p",null,"There is a big territory to explore where content owners and developers can design and activate different kinds of utilities on this new kind of digital assets."),(0,i.kt)("h3",{id:"erc-721-vs-erc-1155"},"ERC-721 vs ERC-1155"),(0,i.kt)("p",null,"There are many different standards in different states defining NFTs and their potential characteristics. But the 2 main standards are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721")," for Non-Fungible NFTs. This allow to tokenize digital assets in several pieces. And each piece is unique. An anology in the physical world would be a photography. An artist could cut the original negative in 10 pieces and sell to the collectors. Each piece is unique and different to the others."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/"},"ERC-1155")," describes the Multi-Token standard. It allows to tokenize assets where each piece is not distinguble of the others. An anology would be the money. If dollars can be represented via a NFT ERC-1155 because my dollar is not distingueable of your dollar.")),(0,i.kt)("p",null,"Each of these standards are usful and fit better depending on the use case. "),(0,i.kt)("h2",{id:"what-extras-are-provided-by-nevermined-nfts"},"What extras are provided by Nevermined NFTs?"),(0,i.kt)("p",null,"In Nevermined ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contracts/tree/master/contracts/token"},"we built")," some additional features on top of both standards that can be used to deliver more powerful use cases.\nSome of these extra features are the following:"),(0,i.kt)("h3",{id:"selling-and-purchasing-assets"},"Selling and Purchasing assets"),(0,i.kt)("p",null,"Via the Nevermined Service Execution Agreements, content creators and their users can trade around digital assets in a decentralized manner. This means content creators can define under what conditions they want to sell their NFTs, and users can purchase them. The Nevermined Smart Contracts work as an intermediary of that process and ensure this process is executed securely for all the parties."),(0,i.kt)("h3",{id:"access-control"},"Access Control"),(0,i.kt)("p",null,"Nevermined includes an access control piece that allows content creators to provide special access to certain assets or services under some circumstances. This enables powerful use cases like exclusive access, enabling the users holding some NFTs to get access to something exclusive and unique."),(0,i.kt)("h3",{id:"royalties-and-secondary-markets"},"Royalties and Secondary Markets"),(0,i.kt)("p",null,"When content creators sell NFTs associated with their creations they lose control of who owns what. Nevermined enforces royalties in sales in secondary markets, allowing content creators to define upfront the royalties they want to receive, and collect them if there is a secondary market sale."),(0,i.kt)("h3",{id:"search-and-discovery"},"Search and Discovery"),(0,i.kt)("p",null,"To facilitate the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/searching-information"},"discovery of digital assets")," and the NFTs attached to them when assets are registered into Nevermined the creator can define some metadata. This metadata can be stored in an immutable manner too on IPFS or Filecoin."),(0,i.kt)("h3",{id:"provenance"},"Provenance"),(0,i.kt)("p",null,"Nevermined Smart Contracts provide a provenance track record that register all the interactions around digital assets. More information in this ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/provenance-everything-has-a-story-behind-1275e3693d3f"},"Provenance blog post"),"."),(0,i.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"Nevermined allows content creators to control the access to exclusive stuff to users who are subscribed. These subscriptions can be defined in a flexible manner and specify a duration. More information in this post: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/bringing-online-subscriptions-into-web3-with-nfts-5fc2e9570122"},"Bringing online subscriptions into Web3 with NFTs"),"."),(0,i.kt)("h3",{id:"proof-of-attendance-poap"},"Proof of Attendance (POAP)"),(0,i.kt)("p",null,"Proof of Attendance are special cases of ERC-721 NFTs that are useful to represent that a user was in a specific place in a specific moment. Only the users meeting these conditions can claim that specific POAP NFT. POAPs are very interesting for use cases that want to build loyalty around live events."),(0,i.kt)("p",null,"You can read more about it in ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/built-on-nevermined-alities-is-an-nft-community-for-artist-and-collectors-f6b08f00f18c"},"this post about Alities network"),"."),(0,i.kt)("h3",{id:"soul-bound-or-non-transferable-nfts"},"Soul Bound or Non-Transferable NFTs"),(0,i.kt)("p",null,"As stands in the name, Non-Transferable Tokens (NTT) are a special kind of NFTs that can be transferred. Once they are minted and are owned by a user they can not sent to anyone else. This is useful for usecases that wan to represent personal achievements or similar characteristics that are directly tied to the identity of the owner of that NFT."),(0,i.kt)("h2",{id:"how-to-build-applications-using-nevermined-nfts"},"How to build applications using Nevermined NFTs"),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Nevermined NFTs are built on top of the OpenZeppelin standard implementation and use regular industry standards. We augmented the existing implementation with additional features that allow to create more sophisticated use cases providing the above features, having always in mind to create richer experiences where content creators and users keep control."),(0,i.kt)("p",null,"Nevermined provides the Open Source components to accelerate the building of DApps without part of the complexity of web3. You can use any part of the stack you want in any way you prefer, but typically the usage of all the different components it\u2019s the simpler way to build more robust use cases."),(0,i.kt)("p",null,"Nevermined protocol is organized in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nevermined-io/contracts"},"Nevermined Smart Contracts"),". They implement the core protocol business logic, and can be deployed in any EVM compatible network. As said before, are built on top of OpenZeppelin and provide default implementation for different NFTs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nevermined-io/sdk-js"},"Nevermined SDK")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nevermined-io/components-catalog"},"React Catalog"),". Are Javascript libraries that can be used to build decentralized applications that integrate Nevermined Contracts and additional components like the Metadata API.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nevermined NFTs components",src:n(27085).Z,width:"957",height:"636"})),(0,i.kt)("h3",{id:"nft-contracts"},"NFT Contracts"),(0,i.kt)("p",null,"The Nevermined NFT contracts are part of the extras provided by the Nevermined core protocol. They allow us to build more sophisticated use cases based on the implementation provided by Nevermined on top of the regular ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721")," and ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/"},"ERC-1155")," standards. These standards are limited in the number of functionalities defined (basically balance, transfer, owner and approve)."),(0,i.kt)("p",null,"On top of that Nevermined provided the contracts ready to use with the additional capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integration with Nevermined Service Agreements allowing selling NFTs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Content creators can tokenize digital assets and define in which conditions can users purchase these NFTs"),(0,i.kt)("li",{parentName:"ul"},"Support of dynamic payments so price doesn\u2019t need to be static and can be defined by an external contract"),(0,i.kt)("li",{parentName:"ul"},"Access control to exclusive contents for NFT holders"))),(0,i.kt)("li",{parentName:"ul"},"Implementation of different NFT contracts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Semi-fungible using ERC-1155"),(0,i.kt)("li",{parentName:"ul"},"Non-fungible using ERC-721"),(0,i.kt)("li",{parentName:"ul"},"Subscription NFTs based on ERC-721"),(0,i.kt)("li",{parentName:"ul"},"Proof of attendance NFTs based on ERC-721"),(0,i.kt)("li",{parentName:"ul"},"Soul bound NFTs based on ERC-721"))),(0,i.kt)("li",{parentName:"ul"},"Implementation of EIP-2891 NFT Royalty Standard")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nevermined Smart Contract Hierarchy",src:n(95993).Z,width:"1643",height:"647"})),(0,i.kt)("h3",{id:"sdk"},"SDK"),(0,i.kt)("p",null,"You can read more about how use the Nevermined NFTs api via the ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/nfts-sdk"},"SDK NFTs tutorial page.")))}u.isMDXComponent=!0},559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hype_cycle-90515f5e29c976a7eb2071917f770c81.png"},27085:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contracts_libs_dapps_layers-150b864a27eb94ef90b7bab4c05c26c5.png"},95993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nvm_contracts_archictecture-12e6dcc58cdbe4a1f97d3495895b08a6.png"}}]);