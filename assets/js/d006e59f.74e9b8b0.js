(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[3775],{4791:(n,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>C,frontMatter:()=>u,metadata:()=>g,toc:()=>v});var a=e(7462),o=e(7294),i=e(3905),r=e(3660),l=e(6798);const s=(0,l.CY)("metamask",{metamask__content:"metamask__content_jABS"}),m=()=>{const{loginMetamask:n,walletAddress:t,logout:e}=r.MetaMask.useWallet();return o.createElement("div",{className:s("content")},t?o.createElement(o.Fragment,null,o.createElement(l.II,{type:"p",variants:["detail"]},t),o.createElement(l.wg,{type:"secondary",onClick:e},"Logout")):o.createElement(l.wg,{type:"secondary",onClick:n},"Connect to Metamask"))},d=()=>o.createElement(r.MetaMask.WalletProvider,{correctNetworkId:"0x13881",nodeUri:"https://rpc-mumbai.matic.today"},o.createElement(m,null));var c=e(5488),p=e(5162);const u={sidebar_position:3,description:"It covers the providers integration, finishing with the login and logout with your Metamask wallet provider."},h="Login with Metamask",g={unversionedId:"tutorials/login-metamask",id:"tutorials/login-metamask",title:"Login with Metamask",description:"It covers the providers integration, finishing with the login and logout with your Metamask wallet provider.",source:"@site/docs/tutorials/login-metamask.md",sourceDirName:"tutorials",slug:"/tutorials/login-metamask",permalink:"/docs/tutorials/login-metamask",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/tutorials/login-metamask.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"It covers the providers integration, finishing with the login and logout with your Metamask wallet provider."},sidebar:"tutorialSidebar",previous:{title:"How to create and consume your first assets in a React application integrated with Nevermined",permalink:"/docs/tutorials/assets"},next:{title:"Running Nevermined in your local environment",permalink:"/docs/tutorials/running-locally"}},k={},v=[{value:"Requirements",id:"requirements",level:2},{value:"How to install Catalog Provider",id:"how-to-install-catalog-provider",level:2},{value:"Add the Metamask provider",id:"add-the-metamask-provider",level:2},{value:"Add login component",id:"add-login-component",level:2},{value:"Config your network (optional)",id:"config-your-network-optional",level:2},{value:"Lets put everything together",id:"lets-put-everything-together",level:2},{value:"Demo",id:"demo",level:2}],f={toc:v};function C(n){let{components:t,...e}=n;return(0,i.kt)("wrapper",(0,a.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"login-with-metamask"},"Login with Metamask"),(0,i.kt)("p",null,"In this tutorial you will learn how you can integrate Metamask provider from the Catalog in your dapp and implement operations like login and logout"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"For the tutorial you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A extension of ",(0,i.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," installed in the browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"node")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," need to be installed")),(0,i.kt)("h2",{id:"how-to-install-catalog-provider"},"How to install Catalog Provider"),(0,i.kt)("p",null,"Firstable to install ",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/providers/"},"Catalog Provider")," you just need to run:"),(0,i.kt)(c.Z,{mdxType:"Tabs"},(0,i.kt)(p.Z,{label:"yarn",value:"yarn",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nevermined-io/catalog-providers\n"))),(0,i.kt)(p.Z,{label:"npm",value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @nevermined-io/catalog-providers\n")))),(0,i.kt)("h2",{id:"add-the-metamask-provider"},"Add the Metamask provider"),(0,i.kt)("p",null,"Now in our app we need to add the Metamask provider as a parent of all the components that will use functionalities from it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Example from 'examples';\nimport { MetaMask } from '@nevermined-io/catalog-providers';\n\nReactDOM.render(\n    <div>\n        <MetaMask.WalletProvider\n            correctNetworkId=\"0x13881\"\n            nodeUri=\"https://matic-mumbai.chainstacklabs.com\"\n        >\n            ...\n        </MetaMask.WalletProvider>\n    </div>,\n    document.getElementById(\"root\") as HTMLElement\n);\n")),(0,i.kt)("h2",{id:"add-login-component"},"Add login component"),(0,i.kt)("p",null,"Let's create a component that contains a login button, which will login to the wallet once that it is clicked, and other button to logout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const LoginMetaMask = () => {\n    const { loginMetamask, walletAddress, logout} = MetaMask.useWallet();\n\n    return (\n        <>\n            {!walletAddress ?\n              <button onClick={loginMetamask}>Connect to Metamask</button>\n              : \n              <>\n                <div>{walletAddress}</div>\n                <button onClick={logout}>Logout</button>\n              </>\n            }\n        </>\n    );\n};\n")),(0,i.kt)("p",null,"In this component we have the ",(0,i.kt)("inlineCode",{parentName:"p"},"loginMetamask")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logout")," functions and the ",(0,i.kt)("inlineCode",{parentName:"p"},"walletAddress")," state, if ",(0,i.kt)("inlineCode",{parentName:"p"},"walletAddress")," is not empty means that the metamask is connected and will show the address and logout button otherwise will show the button to connect"),(0,i.kt)("h2",{id:"config-your-network-optional"},"Config your network (optional)"),(0,i.kt)("p",null,"At least that you need to set differents networks for your dapp than ",(0,i.kt)("a",{parentName:"p",href:"https://polygon.technology/"},"polygon")," this file is not needed, anyway here we show you how should look the config file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils';\nimport { acceptedChainId } from 'config';\n\nconst mumbaiChainId = zeroX((80001).toString(16));\nconst mainnetChainId = zeroX((137).toString(16));\n\nconst ChainConfig = {\n  mumbai: {\n    chainId: mumbaiChainId,\n    chainName: 'Polygon Testnet Mumbai',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: [\n      'https://matic-mumbai.chainstacklabs.com',\n      'https://rpc-endpoints.superfluid.dev/mumbai'\n    ],\n    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  mainnet: {\n    chainId: mainnetChainId,\n    chainName: 'Polygon Mainnet',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: ['https://polygon-rpc.com'],\n    blockExplorerUrls: ['https://polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  returnConfig: (chainIdHex: string) => {\n    if (chainIdHex === mumbaiChainId) {\n      return ChainConfig.mumbai;\n    }\n    if (chainIdHex === mainnetChainId) {\n      return ChainConfig.mainnet;\n    }\n    return ChainConfig.mainnet;\n  }\n};\n\nexport default ChainConfig;\n")),(0,i.kt)("h2",{id:"lets-put-everything-together"},"Lets put everything together"),(0,i.kt)("p",null,"In order to finish we need to call this component inside of the Metamask provider, this is the complete example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { MetaMask } from '@nevermined-io/catalog-providers';\nimport { zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils';\n\nconst mumbaiChainId = zeroX((80001).toString(16));\nconst mainnetChainId = zeroX((137).toString(16));\n\nconst ChainConfig = {\n  mumbai: {\n    chainId: mumbaiChainId,\n    chainName: 'Polygon Testnet Mumbai',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: [\n      'https://matic-mumbai.chainstacklabs.com',\n      'https://rpc-endpoints.superfluid.dev/mumbai'\n    ],\n    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  mainnet: {\n    chainId: mainnetChainId,\n    chainName: 'Polygon Mainnet',\n    nativeCurrency: {\n      name: 'Matic',\n      symbol: 'MATIC',\n      decimals: 18\n    },\n    rpcUrls: ['https://polygon-rpc.com'],\n    blockExplorerUrls: ['https://polygonscan.com/'],\n    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']\n  },\n  returnConfig: (chainIdHex: string) => {\n    if (chainIdHex === mumbaiChainId) {\n      return ChainConfig.mumbai;\n    }\n    if (chainIdHex === mainnetChainId) {\n      return ChainConfig.mainnet;\n    }\n    return ChainConfig.mainnet;\n  }\n};\n\nconst LoginMetamask = () => {\n    const { loginMetamask, walletAddress, logout} = MetaMask.useWallet();\n\n    return (\n        <>\n            {!walletAddress ?\n              <button onClick={loginMetamask}>Connect to Metamask</button>\n              : \n              <>\n                <div>{walletAddress}</div>\n                <button onClick={logout}>Logout</button>\n              </>\n            }\n        </>\n    );\n};\n\nReactDOM.render(\n    <div>\n        <MetaMask.WalletProvider\n            externalChainConfig={ChainConfig}\n            correctNetworkId={mumbaiChainId}\n            nodeUri={ChainConfig.mainnet.rpcUrls[0]}\n        >\n          <LoginMetamask/>\n        </MetaMask.WalletProvider>\n    </div>,\n    document.getElementById(\"root\") as HTMLElement\n);\n")),(0,i.kt)("p",null,"This config file represent all the networks that your dapp support, and a default one where metamask will ask to switch in case that the wallet is in some not supported network"),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(d,{mdxType:"MetamaskApp"}))}C.isMDXComponent=!0},6601:()=>{}}]);