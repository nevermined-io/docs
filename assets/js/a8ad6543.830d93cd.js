"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"Getting started",description:"Nevermined Catalog"},i=void 0,s={unversionedId:"react-components/catalog/README",id:"react-components/catalog/README",title:"Getting started",description:"Nevermined Catalog",source:"@site/docs/react-components/catalog/README.md",sourceDirName:"react-components/catalog",slug:"/react-components/catalog/",permalink:"/docs/react-components/catalog/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/react-components/catalog/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting started",description:"Nevermined Catalog"},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/docs/react-components/demo"},next:{title:"@nevermined-io/catalog",permalink:"/docs/react-components/catalog/API/modules"}},l={},c=[{value:"Catalog provider",id:"catalog-provider",level:3},{value:"Services",id:"services",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How to install ?",id:"how-to-install-",level:2},{value:"How to integrate ?",id:"how-to-integrate-",level:2},{value:"How to use ?",id:"how-to-use-",level:2},{value:"Running tests",id:"running-tests",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This library was generated with ",(0,a.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx"),"."),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Catalog")," includes all the Nevermined functionalities splitted in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Catalog provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Services"),"."),(0,a.kt)("h3",{id:"catalog-provider"},"Catalog provider"),(0,a.kt)("p",null,"Catalog provider loads the ",(0,a.kt)("strong",{parentName:"p"},"Nevermined sdk")," in the context of a ",(0,a.kt)("strong",{parentName:"p"},"React application")," and provides some parametes\nand objects to handle it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"account - contains all the functionalities to handle authentications and collections belonged to an account"),(0,a.kt)("li",{parentName:"ul"},"assets - contains all the functionalities to handle assets for example get, mint, transfer, order or download asset"),(0,a.kt)("li",{parentName:"ul"},"subscribe - contains all the functionalities to handle events"),(0,a.kt)("li",{parentName:"ul"},"subscription - contains all the functionalities to handle asset subscritions by payment")),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"The Services includes custom react hooks and providers to cover specific scenarios avoiding to the developer thinking in the logic to implement it and make possible for them focus just in the view in a react application. Currently the services is splitted in 4 groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AccountService - custom hooks and provider to handle user accounts and profiles"),(0,a.kt)("li",{parentName:"ul"},"AssetService - custom hooks to handle assets"),(0,a.kt)("li",{parentName:"ul"},"EventService - custom hooks to operate with events"),(0,a.kt)("li",{parentName:"ul"},"SubscribeService - custom hooks to handle event listeners")),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"The Nevermined Components Catalog is a package built with React and Typescript.\nIt requires ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node JS")," v14 or higher. You can find online instructions about ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/learn/how-to-install-nodejs/"},"How to install Node JS"),"."),(0,a.kt)("h2",{id:"how-to-install-"},"How to install ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nevermined-io/catalog\nor\nnpm install --save @nevermined-io/catalog\n")),(0,a.kt)("h2",{id:"how-to-integrate-"},"How to integrate ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Catalog, AssetService } from '@nevermined-io/catalog';\nimport App from 'app';\nimport { ethers } from 'ethers'\nimport { Config } from '@nevermined-io/sdk';\n\nconst appConfig: Config = {\n  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),\n  web3ProviderUri,\n  neverminedNodeUri,\n  neverminedNodeAddress\n  faucetUri,\n  verbose,\n  secretStoreUri,\n  graphHttpUri,\n  marketplaceAuthToken,\n  marketplaceUri,\n  artifactsFolder\n};\n\nReactDOM.render(\n  <div>\n    <Catalog.NeverminedProvider config={appConfig}>\n      <App />\n    </Catalog.NeverminedProvider>\n  </div>,\n  document.getElementById('root') as HTMLElement\n);\n")),(0,a.kt)("h2",{id:"how-to-use-"},"How to use ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const SingleAsset = () => {\n  const did = 'did:nv:f8a00...';\n  const assetData: AssetState = AssetService.useAsset(did);\n\n  return (\n    <>\n      <div>Asset {did}:</div>\n      <div>{JSON.stringify(assetData.ddo)}</div>\n    </>\n  );\n};\n\n")),(0,a.kt)("p",null,"For a full ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/tree/main/example"},"example"),"."),(0,a.kt)("h2",{id:"running-tests"},"Running tests"),(0,a.kt)("p",null,"Run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"unit tests: ",(0,a.kt)("inlineCode",{parentName:"li"},"nx test:unit catalog")),(0,a.kt)("li",{parentName:"ul"},"integration tests: ",(0,a.kt)("inlineCode",{parentName:"li"},"nx test:integrations catalog")),(0,a.kt)("li",{parentName:"ul"},"subgraph integration tests: ",(0,a.kt)("inlineCode",{parentName:"li"},"nx test:subgraph catalog"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," to run integration and subgraph tests you need to run first ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/nvm-tools-actions"},"nvm-tools-actions")))}d.isMDXComponent=!0}}]);