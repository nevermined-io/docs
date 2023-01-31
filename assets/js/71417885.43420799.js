(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5773],{91262:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(67294),o=a(72389);function l(e){let{children:t,fallback:a}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):a??null}},40322:(e,t,a)=>{"use strict";a.d(t,{Y:()=>r,e:()=>l});var n=a(41426),o=a(23660);const l=()=>({web3ProviderUri:"https://matic-mumbai.chainstacklabs.com",neverminedNodeUri:"https://node.mumbai.public.nevermined.network",verbose:2,neverminedNodeAddress:"0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",graphHttpUri:"https://api.thegraph.com/subgraphs/name/nevermined-io/public",marketplaceAuthToken:n.AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,marketplaceUri:"https://marketplace-api.mumbai.public.nevermined.network",artifactsFolder:`${location.protocol}//${location.host}/contracts`,newGateway:!0}),r=[o.Wagmi.chain.polygonMumbai]},14639:(e,t,a)=>{"use strict";a.d(t,{z:()=>v,o:()=>x});var n=a(67294),o=a(41402),l=a.n(o),r=a(35790),i=a(46605),s=a(41426),c=a(23660),d=a(76798),m=a(82169);const u={demo:"demo_Zn5S",demo__container:"demo__container_XKdI",demo__mint:"demo__mint_AxLE",demo__detail:"demo__detail_XQyo",demo__ddo:"demo__ddo_uikf",demo__buy:"demo__buy_dGjE"};var p=a(40322);const g=(0,d.CY)("demo",u),w=()=>{const{sdk:e,isLoadingSDK:t}=s.Catalog.useNevermined();return n.createElement(n.Fragment,null,n.createElement(d.AH,null,n.createElement(d.II,{className:g("detail"),variants:["bold"]},"Is Loading SDK:"),n.createElement(d.II,{className:g("detail")},t?"Yes":"No")),n.createElement(d.AH,null,n.createElement(d.II,{variants:["bold"],className:g("detail")},"Is SDK Avaialable:"),n.createElement(d.II,{className:g("detail")},e&&Object.keys(e).length>0?"Yes":"No")))},h=e=>{let{ddo:t}=e;return n.createElement(n.Fragment,null,n.createElement(d.AH,null,n.createElement(d.II,{className:g("detail"),variants:["bold"]},"Asset ",t.id.slice(0,10),"...:")),n.createElement(d.II,{className:g("ddo"),variants:["detail"]},JSON.stringify(t)))},k=e=>{let{onPublish:t}=e;const{assets:a}=s.Catalog.useNevermined();return n.createElement(n.Fragment,null,n.createElement(d.wg,{type:"secondary",onClick:t,disabled:!Object.keys(a).length},"mint"))},f=e=>{let{ddo:t}=e;const{assets:a,account:o,isLoadingSDK:l,nfts:r,sdk:m}=s.Catalog.useNevermined(),{walletAddress:u}=(0,c.useWallet)(),[p,w]=(0,n.useState)(!1),[h,k]=(0,n.useState)(!1),[f,y]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{w(await o.isNFT1155Holder(t.id,u)),y(await m.assets.owner(t.id))})()}),[u,h]);return n.createElement(d.AH,{className:g("buy")},p?n.createElement(d.wg,{type:"secondary",onClick:async()=>{console.log(t.id),await a.downloadNFT(t.id)},disabled:l},"Download NFT"):f!==u?n.createElement(d.wg,{type:"secondary",onClick:async()=>{const e=await r.access(t.id,f,i.default.from(1),1155);k(Boolean(e))},disabled:l},"buy"):n.createElement("span",null,"The owner cannot buy, please change the account to buy the NFT asset"))},y=()=>{const{login:e,walletAddress:t,getConnectors:a}=(0,c.useWallet)();return n.createElement(d.AH,null,n.createElement(d.II,{variants:["bold"],className:g("detail")},"Wallet address:"),n.createElement(d.II,null,t),!t&&n.createElement(d.wg,{type:"secondary",onClick:()=>e(a()[0])},"Connect To MM"))},b=e=>{let{config:t}=e;const{isLoadingSDK:a,sdk:o}=s.Catalog.useNevermined(),{publishNFT1155:d}=s.AssetService.useAssetPublish(),{walletAddress:m}=(0,c.useWallet)(),[u,p]=(0,n.useState)({});r.Logger.setLevel(3);const b={main:{name:"",files:[{index:0,contentType:"application/json",url:"https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg"}],type:"dataset",author:"",license:"",dateCreated:(new Date).toISOString()}};return n.createElement("div",{className:g("container")},n.createElement(w,null),n.createElement(y,null),m&&!u.id&&n.createElement(k,{onPublish:async()=>{try{const e=new Map([[m,i.default.from(1)]]),a=new(l())(e),n=await o.keeper.nvmConfig.getNetworkFee(),r=await o.keeper.nvmConfig.getFeeReceiver();a.addNetworkFees(r,i.default.from(n));const c={royaltyKind:s.RoyaltyKind.Standard,scheme:(0,s.getRoyaltyScheme)(o,s.RoyaltyKind.Standard),amount:0},u=await d({neverminedNodeAddress:t.neverminedNodeAddress,assetRewards:a,metadata:b,nftAmount:i.default.from(1),preMint:!0,cap:i.default.from(100),royaltyAttributes:c,erc20TokenAddress:"0xe097d6b3100777dc31b34dc2c58fb524c2e76921"});p(u)}catch(e){console.log("error",e)}}}),!a&&(null==u?void 0:u.id)&&n.createElement(n.Fragment,null,n.createElement(h,{ddo:u}),n.createElement(f,{ddo:u})))},v=()=>{var e;const t=(0,p.e)();return t.web3Provider="undefined"!=typeof window?null==(e=window)?void 0:e.ethereum:new m.r("https://matic-mumbai.chainstacklabs.com"),n.createElement(s.Catalog.NeverminedProvider,{config:t,verbose:!0},n.createElement(s.AssetService.AssetPublishProvider,null,n.createElement(c.WalletProvider,{client:(0,c.getClient)("demo",!0,p.Y),correctNetworkId:80001},n.createElement(b,{config:t}))))};var N=a(51020),E=a(19485),C=a(241);const A=(0,d.CY)("demo",u);r.Logger.setLevel(3);const F=async(e,t)=>{const a=await e.utils.jwt.generateClientAssertion(t);await e.marketplace.login(a)},I=e=>{let{onPublish:t}=e;return n.createElement(n.Fragment,null,n.createElement(d.wg,{className:A("mint"),type:"secondary",onClick:t},"mint"))},S=e=>{let{ddo:t}=e;return n.createElement(n.Fragment,null,n.createElement(d.AH,null,n.createElement(d.II,{className:A("detail"),variants:["bold"]},"Asset ",t.id.slice(0,10),"...:")),n.createElement(d.II,{className:A("ddo"),variants:["detail"]},JSON.stringify(t)))},T=e=>{let{ddo:t,sdk:a,account:o}=e;const[l,s]=(0,n.useState)(!1),[c,m]=(0,n.useState)(!1),[u,p]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{const e=await a.nfts.balance(t.id,o),n=i.default.from(e).toNumber();s(n>0),p(await a.assets.owner(t.id))})()}),[o,c]);return n.createElement(d.AH,{className:A("buy")},l?n.createElement(d.wg,{type:"secondary",onClick:async()=>{try{await a.nfts.access(t.id,o)}catch(e){r.Logger.error(e)}}},"Download NFT"):u!==o.getId()?n.createElement(d.wg,{type:"secondary",onClick:async()=>{await F(a,o);try{const e=await a.nfts.order(t.id,i.default.from(1),o),n=await a.nfts.transferForDelegate(e,u,o.getId(),i.default.from(1),1155);m(Boolean(n))}catch(e){r.Logger.error(e)}}},"buy"):n.createElement("span",null,"The owner cannot buy, please change the account to buy the NFT asset"))},_=e=>{let{config:t}=e;const[a,o]=(0,n.useState)({}),[s,c]=(0,n.useState)(void 0),[m,u]=(0,n.useState)({}),[p,g]=(0,n.useState)("");(0,n.useEffect)((()=>{var e,t;null==(e=window)||null==(t=e.ethereum)||t.on("accountsChanged",(e=>{e&&e.length>0?g(E.getAddress(e[0])):(g(""),console.log("No Account found!"))})),(async()=>{const e=new C.Q(window.ethereum),t=await e.listAccounts();g(null!=t&&t.length?E.getAddress(t[0]):"")})()}),[]),(0,n.useEffect)((()=>{p&&(async()=>{try{const e=await r.Nevermined.getInstance(t),a=await e.accounts.list();c(a[0]),o(e)}catch(e){console.log(e)}})()}),[p]);return n.createElement("div",{className:A("container")},n.createElement(d.AH,null,s?n.createElement(n.Fragment,null,n.createElement(d.II,{variants:["bold"],className:A("detail")},"Wallet address:"),n.createElement(d.II,null,s.getId())):n.createElement(d.wg,{type:"secondary",onClick:async()=>{var e,t;const a=await(null==(e=window)||null==(t=e.ethereum)||null==t.request?void 0:t.request({method:"eth_requestAccounts"}));g(E.getAddress(a[0]))}},"Connect To MM"),p&&!m.id&&n.createElement(I,{onPublish:async()=>{try{const e=new Map([[s.getId(),i.default.from(1)]]),n=new(l())(e),o={royaltyKind:N.RoyaltyKind.Standard,scheme:(0,N.getRoyaltyScheme)(a,N.RoyaltyKind.Standard),amount:0},c=await a.keeper.nvmConfig.getNetworkFee(),d=await a.keeper.nvmConfig.getFeeReceiver();n.addNetworkFees(d,i.default.from(c));const m={main:{name:"",files:[{index:0,contentType:"application/json",url:"https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg"}],type:"dataset",author:"",license:"",dateCreated:(new Date).toISOString()}};await F(a,s);const p=await(async(e,t,n,o,l)=>{const s=a.keeper.conditions.transferNftCondition,c=await a.nfts.setApprovalForAll(s.address,!0,t);r.Logger.log(`Contract Receipt for approved transfer NFT: ${c}`);const d=await a.nfts.setApprovalForAll(e,!0,t);return r.Logger.log(`Contract Receipt for approved Node: ${d}`),await a.nfts.createWithRoyalties(n,t,i.default.from(100),o,l,i.default.from(1),"0xe097d6b3100777dc31b34dc2c58fb524c2e76921",!0)})(t.neverminedNodeAddress,s,m,o,n);u(p)}catch(e){console.log("error",e)}}}),(null==m?void 0:m.id)&&n.createElement(n.Fragment,null,n.createElement(S,{ddo:m}),n.createElement(T,{ddo:m,sdk:a,account:s}))))},x=()=>{var e;const t=(0,p.e)();return t.web3Provider="undefined"!=typeof window?null==(e=window)?void 0:e.ethereum:new m.r("https://matic-mumbai.chainstacklabs.com"),n.createElement(n.Fragment,null,n.createElement(_,{config:t}))}},9760:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),o=(a(67294),a(3905)),l=a(91262),r=a(14639);const i={sidebar_position:4},s="Demo",c={unversionedId:"catalog/demo",id:"catalog/demo",title:"Demo",description:"This demo is based in the code of the Example section",source:"@site/docs/catalog/demo.md",sourceDirName:"catalog",slug:"/catalog/demo",permalink:"/docs/catalog/demo",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/demo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/catalog/example"},next:{title:"Getting started",permalink:"/docs/catalog/core/"}},d={},m=[{value:"Workflow example",id:"workflow-example",level:2},{value:"View",id:"view",level:2}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"demo"},"Demo"),(0,o.kt)("p",null,"This demo is based in the code of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/catalog/example"},"Example")," section"),(0,o.kt)("h2",{id:"workflow-example"},"Workflow example"),(0,o.kt)("p",null,"The example in the template covers the most commonsly used functionalities to interact with NFT1155."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements:")," The account wallet used for the example must have ",(0,o.kt)("inlineCode",{parentName:"p"},"Matic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"USDC")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect the wallet"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Mint")," button, approve the transaction and sign the authorization request in the wallet."),(0,o.kt)("li",{parentName:"ol"},"Once the token is minted the ",(0,o.kt)("inlineCode",{parentName:"li"},"Mint")," button will change to ",(0,o.kt)("inlineCode",{parentName:"li"},"Download NFT"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Download NFT")," to retrieve the example asset (in this case it is a JSON file)"),(0,o.kt)("li",{parentName:"ol"},"Change the account in the wallet"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Buy")," button and approve the transaction and sign the authorization request in the wallet"),(0,o.kt)("li",{parentName:"ol"},"Upon purchasing the token the ",(0,o.kt)("inlineCode",{parentName:"li"},"Buy")," button will change to ",(0,o.kt)("inlineCode",{parentName:"li"},"Download NFT")),(0,o.kt)("li",{parentName:"ol"},"Repeat step 4")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Warning:")," The data is not static, once the browser is reloaded the workflow example will restart."),(0,o.kt)("h2",{id:"view"},"View"),(0,o.kt)(l.Z,{fallback:(0,o.kt)("div",null,"Loading demo..."),mdxType:"BrowserOnly"},(()=>(0,o.kt)(r.z,{mdxType:"DemoCatalog"}))))}p.isMDXComponent=!0},88677:()=>{},62808:()=>{},9114:()=>{},74487:()=>{},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},96419:()=>{},56353:()=>{},69386:()=>{},31616:()=>{},69862:()=>{},40964:()=>{}}]);