"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[8324],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,title:"Getting started"},c="Getting started",l={unversionedId:"architecture/components/catalog/providers/README",id:"architecture/components/catalog/providers/README",title:"Getting started",description:"The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask.",source:"@site/docs/architecture/components/catalog/providers/README.md",sourceDirName:"architecture/components/catalog/providers",slug:"/architecture/components/catalog/providers/",permalink:"/docs/architecture/components/catalog/providers/",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/providers/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"Catalog Providers",permalink:"/docs/category/catalog-providers"},next:{title:"API Ref.",permalink:"/docs/category/api-ref-1"}},p={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How to install ?",id:"how-to-install-",level:2},{value:"How to integrate ?",id:"how-to-integrate-",level:2},{value:"How to use ?",id:"how-to-use-",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Currently ",(0,a.kt)("inlineCode",{parentName:"p"},"Catalog providers")," only support Metamask but more providers will be supported soon."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"The Nevermined providers is a package built with React and Typescript.\nIt requires ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node JS")," v14 or higher. You can find online instructions about ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn/how-to-install-nodejs"},"How to install Node JS"),"."),(0,a.kt)("h2",{id:"how-to-install-"},"How to install ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @nevermined-io/catalog-providers\nor\nnpm install --save @nevermined-io/catalog-providers\n")),(0,a.kt)("h2",{id:"how-to-integrate-"},"How to integrate ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MetaMask } from "@nevermined-io/catalog-providers";\nimport App from "app";\nimport { Config } from "@nevermined-io/nevermined-sdk-js";\n\nconst appConfig: Config = {\n    nodeUri,\n};\n\nReactDOM.render(\n    <div>\n        <MetaMask.WalletProvider\n            chainConfig={chainConfig}\n            correctNetworkId={correctNetworkId}\n            nodeUri={String(appConfig.nodeUri)}\n        >\n            <App />\n        </MetaMask.WalletProvider>\n    </div>,\n    document.getElementById("root") as HTMLElement\n);\n')),(0,a.kt)("h2",{id:"how-to-use-"},"How to use ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const ConnectToMetaMask = () => {\n    const { loginMetamask, walletAddress } = MetaMask.useWallet();\n\n    return (\n        <>\n            <div> {walletAddress}</div>\n            {!walletAddress && (\n                <button onClick={loginMetamask}>Connect To MM</button>\n            )}\n        </>\n    );\n};\n")))}m.isMDXComponent=!0}}]);