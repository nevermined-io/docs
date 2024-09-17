"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Getting Started",l={unversionedId:"cli/getting-started",id:"cli/getting-started",title:"Getting Started",description:"The Nevermined CLI (aka NVM CLI or ncli) allows to interact with a Nevermined deployment from the command line interface allowing to do everything is supported from a traditional Nevermined web environment like a Marketplace or similar DApp.",source:"@site/docs/cli/getting-started.md",sourceDirName:"cli",slug:"/cli/getting-started",permalink:"/docs/cli/getting-started",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/cli/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Nevermined CLI",permalink:"/docs/cli/"},next:{title:"Advanced Configuration",permalink:"/docs/cli/advanced_configuration"}},c={},s=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How to install the <code>ncli</code>?",id:"how-to-install-the-ncli",level:2},{value:"Configure your account",id:"configure-your-account",level:2},{value:"Using your existing account",id:"using-your-existing-account",level:3},{value:"Use seed words",id:"use-seed-words",level:3},{value:"Use a keyfile",id:"use-a-keyfile",level:3},{value:"Creating a new account",id:"creating-a-new-account",level:3},{value:"Getting Funds",id:"getting-funds",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The Nevermined CLI (aka NVM CLI or ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli"),") allows to interact with a Nevermined deployment from the command line interface allowing to do everything is supported from a traditional Nevermined web environment like a Marketplace or similar DApp."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," allows to connect to a local Nevermined environment (see in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/tutorials/running-locally"},"Nevermined Tools tutorial")," how to do that) or with a remote one."),(0,a.kt)("p",null,"This section provides links to information about how to get started with the Nevermined Command Line Interface (NVM CLI or ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli"),")."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"The Nevermined CLI is an application built with Typescript and ready to be used in the user command line to interact with a remote (or local) Nevermined deployment.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," requires ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node JS")," v14 or higher. You can find online instructions about ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn/how-to-install-nodejs"},"How to install Node JS"),"."),(0,a.kt)("h2",{id:"how-to-install-the-ncli"},"How to install the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ncli"),"?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," is packaged in ",(0,a.kt)("inlineCode",{parentName:"p"},"NPM")," format. This means you can installed easilly in your environment running one of the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install -g @nevermined-io/cli\n\nor\n\nyarn global add @nevermined-io/cli\n")),(0,a.kt)("p",null,"After doing that you should have available in your system the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ncli --help\n")),(0,a.kt)("h2",{id:"configure-your-account"},"Configure your account"),(0,a.kt)("h3",{id:"using-your-existing-account"},"Using your existing account"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," requires a wallet to connect with the blockchain network (EVM compatible). To use an existing wallet with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," there are 2 options:"),(0,a.kt)("h3",{id:"use-seed-words"},"Use seed words"),(0,a.kt)("p",null,"You just need to export your ",(0,a.kt)("strong",{parentName:"p"},"seed words")," in the command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export SEED_WORDS="<your 12/24 words seed phrase>"\n')),(0,a.kt)("h3",{id:"use-a-keyfile"},"Use a keyfile"),(0,a.kt)("p",null,"If you have a keyfile storing your credentials you can use them providing the path to the keyfile and the keyfile password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KEYFILE_PATH="<path to keyfile>"\nexport KEYFILE_PASSWORD="<keyfile password>"\n')),(0,a.kt)("h3",{id:"creating-a-new-account"},"Creating a new account"),(0,a.kt)("p",null,"If you don't have an account locally or you want to use a new one to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli"),", create it is very simple, you just need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ncli accounts new\n\nCreating wallet ...\nWallet address: 0x37434d6673ff106446c9224884D54201e5Ae46A4\nWallet public key: 0x0482d6aac219607b47c0a840784909e19694cf66d35262c0ddbf41d753962388812e5394e083a0c54bce10282b6ec0fd86be7f77d296868184e6fd999c4c1fa7e6\nWallet private key: 0x0acb0253593fcbbd20e0fd82b8ff35c8a6e6c1f32c09d1bc8b41cec9031c0986\nWallet Seed Words:\n  Phrase: street fever feed resource place adapt venue mobile hill try armed feature\n  Path: m/44'/60'/0'/0/0\n  Locale: en\n\nIf you want to use it in the CLI run:\nexport SEED_WORDS=\"street fever feed resource place adapt venue mobile hill try armed feature\"\n")),(0,a.kt)("p",null,"As the command output says, you just need to export the ",(0,a.kt)("inlineCode",{parentName:"p"},"SEED_WORDS")," environment variable and start using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export SEED_WORDS="street fever feed resource place adapt venue mobile hill try armed feature"\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Remember to store your ",(0,a.kt)("strong",{parentName:"p"},"SEED_WORDS")," in a secure place and don't share it with anyone.")),(0,a.kt)("h2",{id:"getting-funds"},"Getting Funds"),(0,a.kt)("p",null,"You can find some information about how to get funds in a ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/tutorials/faucets"},"Faucets tutorial"),"."))}u.isMDXComponent=!0}}]);