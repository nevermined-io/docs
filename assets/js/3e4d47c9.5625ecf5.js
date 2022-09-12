"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>l});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=d(n),l=o,f=m["".concat(c,".").concat(l)]||m[l]||u[l]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:4,description:"Network Fees"},i="Network Fees",a={unversionedId:"environments/network-fees",id:"environments/network-fees",title:"Network Fees",description:"Network Fees",source:"@site/docs/environments/network-fees.mdx",sourceDirName:"environments",slug:"/environments/network-fees",permalink:"/docs/environments/network-fees",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/environments/network-fees.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Network Fees"},sidebar:"tutorialSidebar",previous:{title:"Testnet environments",permalink:"/docs/environments/nvm-dev-envs"},next:{title:"Overview",permalink:"/docs/architecture/"}},c={},d=[{value:"How to setup the network fees?",id:"how-to-setup-the-network-fees",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-fees"},"Network Fees"),(0,o.kt)("p",null,"Nevermined provides the infrastructure to content creators and users to negotiate around their digital assets in a secure a trustless manner. All the software required to make that happen is offered under an Open Source License. "),(0,o.kt)("p",null,"To continue to provide this service, the Nevermined Smart Contracts charge a ",(0,o.kt)("strong",{parentName:"p"},"1 % fee")," for the monetary transactions happening through them. This means when a user sell for example a NFT, in the distribution of rewards, this fee needs be included."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is no a minimum fee required, so if the asset is being traded for free, it's not necessary to include any payment.")),(0,o.kt)("h2",{id:"how-to-setup-the-network-fees"},"How to setup the network fees?"),(0,o.kt)("p",null,"To execute a transaction using the Nevermined Smart Contracts it is necessary to include in the rewarsd payment a comission that is given to the ",(0,o.kt)("strong",{parentName:"p"},"Nevermined Fee Receiver"),"."),(0,o.kt)("p",null,"This typically can be done when a content creator defines how to payments are distributed during the asset registration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n// Nevermined Fee receiver address in testnet environments\nconst nvmFeeReceiverTest = '0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c'\n\n// Nevermined Fee receiver address in production environments\nconst nvmFeeReceiverProd = '0x35aFA2408BB4f479996fafb2bB3A183ec064C265'\n\nconst assetRewards = new AssetRewards(\n    new Map([\n        [creatorAddress, nvmFeeReceiverProd],\n        [198, 2] // 99% of the payment goes to the `creatorAddress` and 1% to `nvmFeeReceiverProd`\n    ])\n)\n\n// We register a NFT-721 Asset using the payment distribution defined in the `assetRewards` variable\nconst assetDDO = await nevermined.assets.createNft721(\n    metadata,\n    artist,\n    assetRewards,\n    'PSK-RSA',\n    nft.address,\n    token.getAddress(),\n    true,\n    [],\n    royaltyAttributes\n)\n\n")))}u.isMDXComponent=!0}}]);