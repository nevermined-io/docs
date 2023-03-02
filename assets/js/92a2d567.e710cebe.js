"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1,title:"Getting started",description:"Nevermined Providers Component API Reference"},a=void 0,l={unversionedId:"catalog/providers/README",id:"catalog/providers/README",title:"Getting started",description:"Nevermined Providers Component API Reference",source:"@site/docs/catalog/providers/README.md",sourceDirName:"catalog/providers",slug:"/catalog/providers/",permalink:"/docs/catalog/providers/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/providers/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started",description:"Nevermined Providers Component API Reference"},sidebar:"tutorialSidebar",previous:{title:"@nevermined-io/catalog",permalink:"/docs/catalog/catalog/API/modules"},next:{title:"Interface: WalletProviderState",permalink:"/docs/catalog/providers/API/interfaces/WalletProviderState"}},s={},p=[{value:"Providers supported",id:"providers-supported",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How to install ?",id:"how-to-install-",level:2},{value:"How to integrate ?",id:"how-to-integrate-",level:2},{value:"How to use ?",id:"how-to-use-",level:2},{value:"Running unit tests",id:"running-unit-tests",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This library was generated with ",(0,o.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx"),"."),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," component exposes a package facilitating the interaction with Web3 providers like Metamask. You can see more about in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/react-components/intro"},"documentation")),(0,o.kt)("h2",{id:"providers-supported"},"Providers supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Metamask"),(0,o.kt)("li",{parentName:"ul"},"WalletConnect"),(0,o.kt)("li",{parentName:"ul"},"Coinbase Wallet")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"The Nevermined providers is a package built with React and Typescript.\nIt requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node JS")," v14 or higher. You can find online instructions about ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/learn/how-to-install-nodejs/"},"How to install Node JS"),"."),(0,o.kt)("h2",{id:"how-to-install-"},"How to install ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @nevermined-io/providers\nor\nnpm install --save @nevermined-io/providers\n")),(0,o.kt)("h2",{id:"how-to-integrate-"},"How to integrate ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { WalletProvider, getClient, useWallet } from "@nevermined-io/providers";\nimport App from "app";\n\nReactDOM.render(\n    <div>\n        <WalletProvider\n            client={getClient()}\n            correctNetworkId={80001}\n            connectKitProps={\n                {\n                    theme: \'auto\',\n                    mode: \'dark\',\n                }\n            }\n        >\n            <App />\n        </WalletProvider>\n    </div>,\n    document.getElementById("root") as HTMLElement\n);\n')),(0,o.kt)("h2",{id:"how-to-use-"},"How to use ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const ConnectToMetaMask = () => {\n    const { login, walletAddress, getConnectors } = useWallet();\n\n    return (\n        <>\n            <div> {walletAddress}</div>\n            {!walletAddress && (\n                <button onClick={() => login(getConnectors()[0])}>Connect To MM</button>\n            )}\n        </>\n    );\n};\n")),(0,o.kt)("p",null,"You can find ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/react-components/example"},"here a example")),(0,o.kt)("h2",{id:"running-unit-tests"},"Running unit tests"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"nx test:unit provider")))}c.isMDXComponent=!0}}]);