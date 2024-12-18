"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2635],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(h,p(p({ref:n},s),{},{components:t})):a.createElement(h,p({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},95594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:5},p="Nevermined Environments",o={unversionedId:"cli/environments",id:"cli/environments",title:"Nevermined Environments",description:"Nevermined is a web3 developers framework that can be deployed and used across multiple chains and networks for the implementation of different use cases pertaining to asset and data tokenization, storage and transfer. This is a list of the most used environments publicly available that you can use via the Nevermined Command Line interface.",source:"@site/docs/cli/environments.md",sourceDirName:"cli",slug:"/cli/environments",permalink:"/docs/cli/environments",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using the CLI",permalink:"/docs/cli/using-cli"},next:{title:"Overview",permalink:"/docs/architecture/"}},d={},l=[{value:"Environments",id:"environments",level:2},{value:"geth-localnet",id:"geth-localnet",level:2},{value:"Nevermined configuration",id:"nevermined-configuration",level:3},{value:"appStaging",id:"appstaging",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-1",level:3},{value:"appMatic",id:"appmatic",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-2",level:3},{value:"appTesting",id:"apptesting",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-3",level:3},{value:"appArbitrum",id:"apparbitrum",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-4",level:3},{value:"appBase",id:"appbase",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-5",level:3},{value:"appGnosis",id:"appgnosis",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-6",level:3},{value:"appOptimism",id:"appoptimism",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-7",level:3},{value:"appCelo",id:"appcelo",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-8",level:3},{value:"appPeaq",id:"apppeaq",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-9",level:3}],s={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nevermined-environments"},"Nevermined Environments"),(0,r.kt)("p",null,"Nevermined is a web3 developers framework that can be deployed and used across multiple chains and networks for the implementation of different use cases pertaining to asset and data tokenization, storage and transfer. This is a list of the most used environments publicly available that you can use via the Nevermined Command Line interface."),(0,r.kt)("h2",{id:"environments"},"Environments"),(0,r.kt)("h2",{id:"geth-localnet"},"geth-localnet"),(0,r.kt)("p",null,"This environment is used for local development. If you want to have a fully functional environment running on your computer, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/tools/"},"https://github.com/nevermined-io/tools/"),(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"ETH"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"geth-localnet")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"undefined"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"undefined"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"http://marketplace.nevermined.localnet."},"http://marketplace.nevermined.localnet.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"http://node.nevermined.localnet"},"http://node.nevermined.localnet")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0"),".",(0,r.kt)("br",null),"\nThe subgraphs to fetch contracts events can be found on http://localhost:9000/subgraphs/name/nevermined-io/development .",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"appstaging"},"appStaging"),(0,r.kt)("p",null,"Nevermined One internal environment where Nevermined developers can integrate new versions of the application.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"ETH"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"arbitrum-sepolia")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-1"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.staging.nevermined.app."},"https://marketplace-api.staging.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.staging.nevermined.app"},"https://node.staging.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"appmatic"},"appMatic"),(0,r.kt)("p",null,"The Polygon production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"MATIC"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"matic")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-2"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.matic.nevermined.app."},"https://marketplace-api.matic.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.matic.nevermined.app"},"https://node.matic.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"apptesting"},"appTesting"),(0,r.kt)("p",null,"Nevermined App (Arbitrum Sepolia) testnet environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"ETH"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"arbitrum-sepolia")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-3"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.testing.nevermined.app."},"https://marketplace-api.testing.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.testing.nevermined.app"},"https://node.testing.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"apparbitrum"},"appArbitrum"),(0,r.kt)("p",null,"The Arbitrum One production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"ETH"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"arbitrum-one")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-4"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.arbitrum.nevermined.app."},"https://marketplace-api.arbitrum.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.arbitrum.nevermined.app"},"https://node.arbitrum.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"appbase"},"appBase"),(0,r.kt)("p",null,"The Base production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"ETH"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"base")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-5"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.base.nevermined.app."},"https://marketplace-api.base.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.base.nevermined.app"},"https://node.base.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"appgnosis"},"appGnosis"),(0,r.kt)("p",null,"The Gnosis production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"xDAI"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"gnosis")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-6"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.gnosis.nevermined.app."},"https://marketplace-api.gnosis.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.gnosis.nevermined.app"},"https://node.gnosis.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"appoptimism"},"appOptimism"),(0,r.kt)("p",null,"The Optimism production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"ETH"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"optimism")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-7"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.optimism.nevermined.app."},"https://marketplace-api.optimism.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.optimism.nevermined.app"},"https://node.optimism.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"appcelo"},"appCelo"),(0,r.kt)("p",null,"The Celo production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"CELO"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"celo")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-8"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.7"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.celo.nevermined.app."},"https://marketplace-api.celo.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"http://node.celo.nevermined.app"},"http://node.celo.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"apppeaq"},"appPeaq"),(0,r.kt)("p",null,"The Peaq network production environment where users can interact with Nevermined protocol.",(0,r.kt)("br",null)),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token is ",(0,r.kt)("strong",{parentName:"p"},"PEAQ"),". This environment has the network name ",(0,r.kt)("strong",{parentName:"p"},"peaq-mainnet")," and the chain id/network id ",(0,r.kt)("strong",{parentName:"p"},"undefined"),". ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"nevermined-configuration-9"},"Nevermined configuration"),(0,r.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,r.kt)("strong",{parentName:"p"},"3.5.8"),"  The Nevermined contracts are labeled with the tag name: ",(0,r.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace-api.peaq.nevermined.app."},"https://marketplace-api.peaq.nevermined.app.")," ",(0,r.kt)("br",null),"\nThe Nevermined Node can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://node.peaq.nevermined.app"},"https://node.peaq.nevermined.app")," and uses the public address ",(0,r.kt)("strong",{parentName:"p"},"0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1"),".",(0,r.kt)("br",null)))}m.isMDXComponent=!0}}]);