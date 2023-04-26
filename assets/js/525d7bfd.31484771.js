"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=d(n),u=a,m=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},l="Interface: WalletProviderState",o={unversionedId:"react-components/providers/API/interfaces/WalletProviderState",id:"react-components/providers/API/interfaces/WalletProviderState",title:"Interface: WalletProviderState",description:"This component is a layer of Wagmi and ConnectKit",source:"@site/docs/react-components/providers/API/interfaces/WalletProviderState.md",sourceDirName:"react-components/providers/API/interfaces",slug:"/react-components/providers/API/interfaces/WalletProviderState",permalink:"/docs/react-components/providers/API/interfaces/WalletProviderState",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/react-components/providers/API/interfaces/WalletProviderState.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@nevermined-io/providers",permalink:"/docs/react-components/providers/API/modules"},next:{title:"What is the Nevermined SDK?",permalink:"/docs/nevermined-sdk/intro"}},p={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"checkIsChainCorrect",id:"checkischaincorrect",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"client",id:"client",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"getAllAvailableChains",id:"getallavailablechains",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"getConnectors",id:"getconnectors",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"getProvider",id:"getprovider",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"getStatus",id:"getstatus",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"login",id:"login",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"logout",id:"logout",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"walletAddress",id:"walletaddress",level:3},{value:"Defined in",id:"defined-in-8",level:4}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-walletproviderstate"},"Interface: WalletProviderState"),(0,a.kt)("p",null,"This component is a layer of ",(0,a.kt)("a",{parentName:"p",href:"https://wagmi.sh/docs/getting-started"},"Wagmi")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.family.co/connectkit"},"ConnectKit"),"\nwhich allow to handle Metamask, WalletConnect and Coinbase without needing to set any config"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#checkischaincorrect"},"checkIsChainCorrect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#client"},"client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#getallavailablechains"},"getAllAvailableChains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#getconnectors"},"getConnectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#getprovider"},"getProvider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#getstatus"},"getStatus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#login"},"login")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#logout"},"logout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/react-components/providers/API/interfaces/WalletProviderState#walletaddress"},"walletAddress"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"checkischaincorrect"},"checkIsChainCorrect"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"checkIsChainCorrect"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If chain is between the available networks supported"),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L40"},"client.tsx:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"client"},"client"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"client"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Client"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketProvider"),">"),(0,a.kt)("p",null,"All the wagmi client functionalities"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wagmi.sh/docs/getting-started"},"wagmi")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L24"},"client.tsx:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getallavailablechains"},"getAllAvailableChains"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"getAllAvailableChains"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Chain"),"[]"),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Chain"),"[]"),(0,a.kt)("p",null,"Get all the available chains"),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Chain"),"[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L34"},"client.tsx:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getconnectors"},"getConnectors"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"getConnectors"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("p",null,"Get all the connectors available"),(0,a.kt)("h5",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L28"},"client.tsx:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getprovider"},"getProvider"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"getProvider"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")),(0,a.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")),(0,a.kt)("p",null,"Metamask provider for example web3 or ethers"),(0,a.kt)("h5",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Provider")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L26"},"client.tsx:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getstatus"},"getStatus"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"getStatus"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"connecting"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"connected"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"reconnecting"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"disconnected"')),(0,a.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"connecting"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"connected"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"reconnecting"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"disconnected"')),(0,a.kt)("p",null,"Get the status of the wallet"),(0,a.kt)("h5",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"connecting"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"connected"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"reconnecting"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"disconnected"')),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L32"},"client.tsx:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"login"},"login"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"login"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"connector"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"connector"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Login in Provider"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"connector")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Connector"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h5",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L38"},"client.tsx:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"logout"},"logout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"logout"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Logout from the wallet"),(0,a.kt)("h5",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L30"},"client.tsx:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"walletaddress"},"walletAddress"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"walletAddress"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The address of the wallet account"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L36"},"client.tsx:36")))}s.isMDXComponent=!0}}]);