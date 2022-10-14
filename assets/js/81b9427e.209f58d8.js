"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4778],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},o="Interface: ChainConfig",l={unversionedId:"catalog/providers/API/interfaces/MetaMask.ChainConfig",id:"catalog/providers/API/interfaces/MetaMask.ChainConfig",title:"Interface: ChainConfig",description:"MetaMask.ChainConfig",source:"@site/docs/catalog/providers/API/interfaces/MetaMask.ChainConfig.md",sourceDirName:"catalog/providers/API/interfaces",slug:"/catalog/providers/API/interfaces/MetaMask.ChainConfig",permalink:"/docs/catalog/providers/API/interfaces/MetaMask.ChainConfig",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/providers/API/interfaces/MetaMask.ChainConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@nevermined-io/catalog-providers",permalink:"/docs/catalog/providers/API/modules"},next:{title:"Interface: WalletProviderState",permalink:"/docs/catalog/providers/API/interfaces/MetaMask.WalletProviderState"}},c={},p=[{value:"Indexable",id:"indexable",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"returnConfig",id:"returnconfig",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-chainconfig"},"Interface: ChainConfig"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/providers/API/modules/MetaMask"},"MetaMask"),".ChainConfig"),(0,r.kt)("p",null,"Config with all the networks which can be connect by the dapp"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Config example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { zeroX } from '@nevermined-io/catalog-providers';\nimport { acceptedChainId } from 'config';\n\nconst acceptedChainIdHex = zeroX((+acceptedChainId).toString(16));\nconst spreeChainId = zeroX((8996).toString(16));\nconst polygonLocalnetChainId = zeroX((8997).toString(16));\nexport const mumbaiChainId = zeroX((80001).toString(16));\nconst mainnetChainId = zeroX((137).toString(16));\n\nconst ChainConfig = {\n  development: {\n    chainId: acceptedChainIdHex === spreeChainId ? spreeChainId : polygonLocalnetChainId,\n    chainName: 'Localhost development',\n    nativeCurrency: {\n      name: 'Ethereum',\n      symbol: 'ETH',\n      decimals: 18\n    },\n    rpcUrls: ['http://localhost:8545'],\n    blockExplorerUrls: [''],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  mumbai: {\n    chainId: mumbaiChainId,\n    chainName: 'Polygon Testnet Mumbai',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: [\n      'https://matic-mumbai.chainstacklabs.com',\n      'https://rpc-endpoints.superfluid.dev/mumbai'\n    ],\n    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  mainnet: {\n    chainId: mainnetChainId,\n    chainName: 'Polygon Mainnet',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: ['https://polygon-rpc.com'],\n    blockExplorerUrls: ['https://polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  returnConfig: (chainIdHex: string) => {\n    if (chainIdHex === spreeChainId || chainIdHex === polygonLocalnetChainId) {\n      return ChainConfig.development;\n    }\n    if (chainIdHex === mumbaiChainId) {\n      return ChainConfig.mumbai;\n    }\n    if (chainIdHex === mainnetChainId) {\n      return ChainConfig.mainnet;\n    }\n    return ChainConfig.development;\n  }\n};\n")),(0,r.kt)("h2",{id:"indexable"},"Indexable"),(0,r.kt)("p",null,"\u25aa ","[network: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainNetwork")," ","|"," (",(0,r.kt)("inlineCode",{parentName:"p"},"chainIdHex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/providers/API/interfaces/MetaMask.ChainConfig#returnconfig"},"returnConfig"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"returnconfig"},"returnConfig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"returnConfig"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"chainIdHex"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"chainIdHex"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,r.kt)("p",null,"Return the network confing by giving chain Id in Hexadecimal"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chainIdHex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ChainNetwork")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/7d4dcdd/providers/src/metamask.tsx#L125"},"metamask.tsx:125")))}d.isMDXComponent=!0}}]);