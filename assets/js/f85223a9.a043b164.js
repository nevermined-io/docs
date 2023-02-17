"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={},i="Interface: NeverminedProviderContext",s={unversionedId:"catalog/catalog/API/interfaces/NeverminedProviderContext",id:"catalog/catalog/API/interfaces/NeverminedProviderContext",title:"Interface: NeverminedProviderContext",description:"Values returns from the main NVM context",source:"@site/docs/catalog/catalog/API/interfaces/NeverminedProviderContext.md",sourceDirName:"catalog/catalog/API/interfaces",slug:"/catalog/catalog/API/interfaces/NeverminedProviderContext",permalink:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/catalog/API/interfaces/NeverminedProviderContext.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: NFTSModule",permalink:"/docs/catalog/catalog/API/interfaces/NFTSModule"},next:{title:"Interface: NeverminedProviderProps",permalink:"/docs/catalog/catalog/API/interfaces/NeverminedProviderProps"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"account",id:"account",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"config",id:"config",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"isLoadingSDK",id:"isloadingsdk",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"nfts",id:"nfts",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"sdk",id:"sdk",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"sdkError",id:"sdkerror",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"subscribe",id:"subscribe",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"updateSDK",id:"updatesdk",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-8",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-neverminedprovidercontext"},"Interface: NeverminedProviderContext"),(0,r.kt)("p",null,"Values returns from the main NVM context\nCan be consumed after wrapping your project with the catalog(see setup steps)"),(0,r.kt)("p",null,"example:"),(0,r.kt)("p",null,"option 1: const { sdk, sdkError, isLoadingSdk, ...others } = useContext(Catalog.NeverminedContext)\noption 2: const { sdk, sdkError, isLoadingSdk, ...others } = Catalog.useNevermined()"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#account"},"account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#assets"},"assets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#config"},"config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#isloadingsdk"},"isLoadingSDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#nfts"},"nfts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#sdk"},"sdk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#sdkerror"},"sdkError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#subscribe"},"subscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/catalog/catalog/API/interfaces/NeverminedProviderContext#updatesdk"},"updateSDK"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"account"},"account"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"account"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/AccountModule"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account")," contains all the functionalities to handle authentications and\ncollections belonged to an account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Authorization example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { assets, account, isLoadingSDK } = Catalog.useNevermined();\n\n const buy = async () => {\n   (...)\n };\n}\n")),(0,r.kt)("p",null,"Check NFT1155 holder example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { account, isLoadingSDK } = Catalog.useNevermined();\n const [ownNFT1155, setOwnNFT1155] = useState(false);\n\n useEffect(() => {\n   (async () => {\n     const response = await account.isNFT1155Holder(ddo.id, walletAddress);\n     setOwnNFT1155(response);\n   })()\n }, [walletAddress])\n\n}\n")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L219"},"types/index.ts:219")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"assets"},"assets"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"assets"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/AssetsModule"},(0,r.kt)("inlineCode",{parentName:"a"},"AssetsModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assets")," contains all the functionalities to handle assets for example get,\nmint, transfer, order or download asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Publish an asset example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { isLoadingSDK, sdk, account, assets } = Catalog.useNevermined();\n const [ddo, setDDO] = useState<DDO>({} as DDO)\n\n const metadata: MetaData = {\n   main: {\n     name: 'my app',\n     files: [{\n       index: 0,\n       contentType: 'application/json',\n       url: 'https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'\n     }],\n     type: 'dataset',\n     author: 'My company',\n     license: '',\n     dateCreated: new Date().toISOString(),\n   }\n };\n\n const onPublish = async () => {\n  try {\n    const rewardsRecipients: any[] = [];\n    const assetPriceMap = new Map([\n       [walletAddress, BigNumber.from(1)]\n    ])\n    const assetPrice = new AssetPrice(assetPriceMap);\n    const royaltyAttributes = {\n      royaltyKind: RoyaltyKind.Standard,\n      scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n      amount: 0,\n    };\n\n    const nftAttributes = NFTAttributes.getNFT1155Instance({\n      metadata,\n      serviceTypes: ['nft-sales-proof', 'nft-access'],\n      cap: BigNumber.from(100),\n      amount: BigNumber.from(1),\n      preMint: true,\n      nftContractAddress: token.address,\n      price: assetPrice,\n      royaltyAttributes\n    })\n\n    const response = await publishNFT1155({\n      nftAttributes,\n    });\n\n    setDDO(response as DDO);\n  } catch (error) {\n    console.log('error', error);\n  }\n };\n\n return (\n   <>\n     ...\n   </>\n );\n};\n")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L186"},"types/index.ts:186")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"config"},"config"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"config"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"NeverminedOptions")),(0,r.kt)("p",null,"Config object used to initialize Nevermined"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L39"},"types/index.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isloadingsdk"},"isLoadingSDK"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isLoadingSDK"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"True if sdk is loading"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L41"},"types/index.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nfts"},"nfts"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nfts"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/NFTSModule"},(0,r.kt)("inlineCode",{parentName:"a"},"NFTSModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nfts")," contains all the functionalities to handle nfts by payment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Buy nfts example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const BuyAsset = ({ddo}: {ddo: DDO}) => {\n const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined();\n const { walletAddress } = MetaMask.useWallet();\n const [ownNFT1155, setOwnNFT1155] = useState(false);\n const [isBought, setIsBought] = useState(false);\n const [owner, setOwner] = useState('');\n\n useEffect(() => {\n   (async () => {\n     setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));\n     setOwner(await sdk.assets.owner(ddo.id))\n   })()\n }, [walletAddress, isBought])\n\n const buy = async () => {\n   const response = await nfts.access({\n     did:ddo.id,\n     nftHolder: owner,\n     nftAmount: BigNumber.from(1),\n     ercType: 1155});\n   setIsBought(response);\n };\n\n const download = async () => {\n   await assets.downloadNFT({ did: ddo.id });\n };\n\n return (\n   <div>\n     {ownNFT1155 ? (\n       <button onClick={download} disabled={isLoadingSDK}>\n         Download NFT\n       </button>\n     ) : (\n       owner !== walletAddress ?\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n     )}\n   </div>\n );\n}\n")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L272"},"types/index.ts:272")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdk"},"sdk"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sdk"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Nevermined")),(0,r.kt)("p",null,"Nevermined sdk instance which has all the core functionalities"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L35"},"types/index.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sdkerror"},"sdkError"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sdkError"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",null,"Error message from sdk"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L37"},"types/index.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subscribe"},"subscribe"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"subscribe"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/catalog/catalog/API/interfaces/SubscribeModule"},(0,r.kt)("inlineCode",{parentName:"a"},"SubscribeModule"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," contains all the functionalities to handle events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Subcribe payment event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Example = () => {\n const { nfts, subscription, account, isLoadingSDK} = Catalog.useNevermined();\n const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();\n\n const buy = async () => {\n  const response = await nfts.access(ddo.id, owner, BigNumber.from(1), 1155);\n };\n\n const stopLog = () => {\n   paymentEvent.unsuscribe();\n }\n\n useEffect(() => {\n   if(isLoadingSDK) {\n    return;\n   }\n   (async () => {\n     setPaymentEvent(subscribe.paymentEvents((events)=> {\n       Logger.log(events)\n     }))\n   })()\n }, [isLoadingSDK])\n\n return (\n   <div>\n       <button onClick={buy} disabled={isLoadingSDK}>\n         buy\n       </button>\n       <button onClick={stopLog} disabled={isLoadingSDK}>\n         Stop the logs\n       </button>\n   </div>\n );\n}\n")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L115"},"types/index.ts:115")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatesdk"},"updateSDK"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"updateSDK"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"newConfig"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"NeverminedOptions"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"newConfig"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Rebuild Nevermined sdk with new config values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,"Update Nevermined sdk again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const Example = (props: ExampleProps) => {\n const { updateSDK, isLoadingSDK } = Catalog.useNevermined();\n\n const reloadSdk = async() => {\n    const config = {\n        web3Provider: window.ethereum,\n        web3ProviderUri: network,\n        web3ProviderUri,\n        neverminedNodeUri,\n        neverminedNodeAddress,\n        secretStoreUri,\n        verbose,\n        marketplaceAuthToken: Catalog.fetchMarketplaceApiTokenFromLocalStorage().token || '',\n        artifactsFolder,\n        graphHttpUri: graphUrl\n    }\n\n    updateSDK(config)\n  }\n}\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newConfig")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NeverminedOptions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Config object to rebuild Nevermined SDK")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/b886bce/catalog/src/types/index.ts#L71"},"types/index.ts:71")))}p.isMDXComponent=!0}}]);