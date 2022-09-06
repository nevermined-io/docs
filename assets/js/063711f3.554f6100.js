"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[8441],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=n(3117),s=n(102),o=(n(7294),n(3905)),i=["components"],r={sidebar_position:3,description:"Building a DApp using Nevermined frameworks 2"},l="How to create and consume your first assets in a React application integrated with Nevermined",c={unversionedId:"tutorials/assets",id:"tutorials/assets",title:"How to create and consume your first assets in a React application integrated with Nevermined",description:"Building a DApp using Nevermined frameworks 2",source:"@site/docs/tutorials/assets.md",sourceDirName:"tutorials",slug:"/tutorials/assets",permalink:"/docs/tutorials/assets",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/tutorials/assets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Building a DApp using Nevermined frameworks 2"},sidebar:"tutorialSidebar",previous:{title:"How to build a React application integrated with Nevermined",permalink:"/docs/tutorials/running-local"},next:{title:"Running Nevermined in your local environment",permalink:"/docs/tutorials/running-locally"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"For all the assets type",id:"for-all-the-assets-type",level:3},{value:"How to create an asset",id:"how-to-create-an-asset",level:3},{value:"The compleate example",id:"the-compleate-example",level:4},{value:"How to consume an asset",id:"how-to-consume-an-asset",level:3},{value:"The complete example",id:"the-complete-example",level:4},{value:"How to create an NFT ERC721",id:"how-to-create-an-nft-erc721",level:3},{value:"Requirements",id:"requirements",level:4},{value:"The compleate example",id:"the-compleate-example-1",level:4},{value:"How to consume an NFT ERC721",id:"how-to-consume-an-nft-erc721",level:3},{value:"The complete example",id:"the-complete-example-1",level:4},{value:"How to create an NFT ERC1155",id:"how-to-create-an-nft-erc1155",level:3},{value:"The compleate example",id:"the-compleate-example-2",level:4},{value:"How to consume an NFT ERC1155",id:"how-to-consume-an-nft-erc1155",level:3},{value:"The compleate example",id:"the-compleate-example-3",level:4},{value:"The complete example",id:"the-complete-example-2",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-and-consume-your-first-assets-in-a-react-application-integrated-with-nevermined"},"How to create and consume your first assets in a React application integrated with Nevermined"),(0,o.kt)("p",null,"Following with our series, this is going to continue showing how to unblock Nevermined features using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog"},"Nevermined Catalog"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The tutorial assumes your familiarity with blockchain, and general programming. If is your first time using the Nevermined catalog don't hesitate to go back and take a look to the ",(0,o.kt)("a",{parentName:"p",href:"https://nvm-docs.nevermined.io/docs/tutorials/running-local"},"previous chapter"),"."),(0,o.kt)("h3",{id:"for-all-the-assets-type"},"For all the assets type"),(0,o.kt)("p",null,"Import the provider in your index.tsx from the Catalog is needed in order to start to develop.\n",(0,o.kt)("em",{parentName:"p"},"Note that our application is growing and now has some routes in order to handle properly endpoints.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<BrowserRouter>\n    <Catalog.NeverminedProvider config={appConfig}>\n        <Catalog.AssetPublishProvider>\n            <MetaMask.WalletProvider\n                nodeUri={appConfig.nodeUri!}\n                correctNetworkId="0x13881"\n            >\n                <App />\n            </MetaMask.WalletProvider>\n        </Catalog.AssetPublishProvider>\n    </Catalog.NeverminedProvider>\n</BrowserRouter>\n')),(0,o.kt)("h3",{id:"how-to-create-an-asset"},"How to create an asset"),(0,o.kt)("p",null,"This section will guide you to the creation of your first Nevermined asset."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import the function from the AssetService.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nimport { AssetService } from '@nevermined-io/catalog-core';\n\nconst Publisher = () => {\n    const { publishAsset, assetPublish, setAssetPublish } = AssetService.useAssetPublish();\n\n    ...\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create the metadata object that will be published offchain.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"    ...\n    const metadata: MetaData = {\n        main: {\n            name: assetPublish?.name,\n            dateCreated: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n            author: assetPublish?.author,\n            license: 'No License Specified',\n            price: String(assetPublish?.price),\n            datePublished: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n            type: assetPublish?.type,\n            files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]\n        },\n        additionalInformation: {\n            description: assetPublish?.description,\n            categories: []\n        }\n    } as MetaData\n    ...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Call the function in your code. Creating a button that publish when you click and send the ",(0,o.kt)("inlineCode",{parentName:"li"},"assetPublish")," object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    ...\n    async function handleOnSubmit() {\n        const ddo = await publishAsset({metadata: metadata})\n        setDidDeployed(ddo!.id)\n    }\n    ...\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"After sign a message with your wallet provider and pay the fees you will be publishing your first asset. Check that appear in the assets list after some seconds.")),(0,o.kt)("h4",{id:"the-compleate-example"},"The compleate example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    \nconst Publisher = () => {\n    const { publishAsset, assetPublish, setAssetPublish } = AssetService.useAssetPublish();\n    const { isLoadingSDK } = Catalog.useNevermined();\n\n    const metadata: MetaData = {\n    main: {\n        name: assetPublish?.name,\n        dateCreated: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n        author: assetPublish?.author,\n        license: 'No License Specified',\n        price: String(assetPublish?.price),\n        datePublished: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n        type: assetPublish?.type,\n        files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]\n        },\n        additionalInformation: {\n            description: assetPublish?.description,\n            categories: []\n        }\n    } as MetaData\n\n    async function handleOnSubmit() {\n        const ddo = await publishAsset({metadata: metadata})\n        setDidDeployed(ddo!.id)\n    }\n\n    return (\n        <div>\n            <button onClick={handleOnSubmit} disabled={isLoadingSDK}>\n                Publish Asset\n            </button>\n        </div>\n    );\n}\n\n")),(0,o.kt)("h3",{id:"how-to-consume-an-asset"},"How to consume an asset"),(0,o.kt)("p",null,"This section will show how to consume an asset already published using Nevermined."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create and component that accept as parameter a ",(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/sdks/api-reference/classes/DDO"},"ddo"),"  and import from the Catalog all the functionalities needed for this purpose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AssetService } from '@nevermined-io/catalog-core';\n    \nconst Consumer = ({ddo}: {ddo: DDO}) => {\n    const { assets, account, sdk } = Catalog.useNevermined();\n\n    ...\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You need to check if you are the owner of the asset, if it is the case you don't need to buy before to consume it\notherwise you will need to buy first, then in this point you need an ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," that check it every time that the wallet\nchanges the account and when the assest is bought in order to avoid buy again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"...\n    const { walletAddress } = MetaMask.useWallet();\n    const [ownAsset, setOwnAsset] = useState(false);\n    const [isBought, setIsBought] = useState(false);\n    const [owner, setOwner] = useState('');\n\n    useEffect(() => {\n    (async () => {\n        setOwnAsset(await account.isAssetHolder(ddo.id, walletAddress));\n        setOwner(await sdk.assets.owner(ddo.id))\n    })()\n    }, [walletAddress, isBought])\n...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now you need to create the function ",(0,o.kt)("inlineCode",{parentName:"li"},"buy")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," the Asset, ",(0,o.kt)("inlineCode",{parentName:"li"},"buy")," will give you permission to consume the asset and ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," will make you able to consume the asset")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"...\n    const buy = async () => {\n        if (!account.isTokenValid()) {\n        await account.generateToken();\n        }\n\n        const currentAccount = await getCurrentAccount(sdk);\n        const response = await assets.orderAsset(did);;\n        setIsBought(Boolean(response));\n    };\n\n    const download = async () => {\n        await assets.downloadAsset(ddo.id);\n    };\n")),(0,o.kt)("h4",{id:"the-complete-example"},"The complete example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Consumer = ({ddo}: {ddo: DDO}) => {\n    const { assets, account, isLoadingSDK, sdk } = Catalog.useNevermined();\n    const { walletAddress } = MetaMask.useWallet();\n    const [ownAsset, setOwnAsset] = useState(false);\n    const [isBought, setIsBought] = useState(false);\n    const [owner, setOwner] = useState('');\n    \n    useEffect(() => {\n        (async () => {\n        setOwnAsset(await account.isAssetHolder(ddo.id, walletAddress));\n        setOwner(await sdk.assets.owner(ddo.id))\n        })()\n    }, [walletAddress, isBought])\n\n    const buy = async () => {\n        if (!account.isTokenValid()) {\n            await account.generateToken();\n        }\n\n        const currentAccount = await getCurrentAccount(sdk);\n        const response = await assets.orderAsset(did);\n        setIsBought(Boolean(response));\n    };\n\n    const download = async () => {\n        await assets.downloadAsset(ddo.id);\n    };\n\n    return (\n        <div>\n        {ownAsset ? (\n            <button onClick={download} disabled={isLoadingSDK}>\n            Download Asset\n            </button>\n        ) : (\n            owner !== walletAddress ?\n            <button onClick={buy} disabled={isLoadingSDK}>\n            buy\n            </button>\n            : <span>The owner cannot buy, please change the account to buy the asset</span>\n        )}\n        </div>\n    );\n};    \n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"What is an NFT?"),(0,o.kt)("p",{parentName:"admonition"},"An NFT non-fungible-token is a token that represent the value of any digital asset that lives on the blockchain. Currently there are to mayor standards ERC721 and ERC1155  ")),(0,o.kt)("h3",{id:"how-to-create-an-nft-erc721"},"How to create an NFT ERC721"),(0,o.kt)("p",null,"This section will guide you to the creation of your first Nevermined NFT ERC721."),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"First you need to deploy the contract address of the nft ERC-721, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cli")," for it, ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/cli/using-cli#nfts"},"see more here")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import the function from the AssetService and the contract NFT token address.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nimport { AssetService } from '@nevermined-io/catalog-core';\nimport { NFTTokenAddress } from './config'\n\nconst Publisher = () => {\n    const { publishNFT721, assetPublish, setAssetPublish } = AssetService.useAssetPublish();\n\n    ...\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create the metadata object that will be published offchain.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"    ...\n    const metadata: MetaData = {\n        main: {\n            name: assetPublish?.name,\n            dateCreated: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n            author: assetPublish?.author,\n            license: 'No License Specified',\n            price: String(assetPublish?.price),\n            datePublished: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n            type: assetPublish?.type,\n            files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]\n        },\n        additionalInformation: {\n            description: assetPublish?.description,\n            categories: []\n        }\n    } as MetaData\n    ...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Call the function in your code. Creating a button that publish when you click and send the NFT token address and the ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata")," object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    ...\n    async function handleOnSubmit() {\n        const ddo = await publishNFT721(NFTTokenAddress, {metadata: metadata})\n        setDidDeployed(ddo!.id)\n    }\n    ...\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"After sign a message with your wallet provider and pay the fees you will be publishing your first asset. Check that appear in the assets list after some seconds.")),(0,o.kt)("h4",{id:"the-compleate-example-1"},"The compleate example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AssetService } from '@nevermined-io/catalog-core';\nimport { NFTTokenAddress } from './config'\n    \nconst Publisher = () => {\n    const { publishNFT721, assetPublish, setAssetPublish } = AssetService.useAssetPublish();\n    const { isLoadingSDK } = Catalog.useNevermined();\n\n    const metadata: MetaData = {\n    main: {\n        name: assetPublish?.name,\n        dateCreated: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n        author: assetPublish?.author,\n        license: 'No License Specified',\n        price: String(assetPublish?.price),\n        datePublished: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n        type: assetPublish?.type,\n        files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]\n        },\n        additionalInformation: {\n            description: assetPublish?.description,\n            categories: []\n        }\n    } as MetaData\n\n    async function handleOnSubmit() {\n        const ddo = await publishNFT721(NFTTokenAddress, {metadata: metadata}, )\n        setDidDeployed(ddo!.id)\n    }\n\n    return (\n        <div>\n            <button onClick={handleOnSubmit} disabled={isLoadingSDK}>\n                Publish Asset\n            </button>\n        </div>\n    );\n}\n\n")),(0,o.kt)("h3",{id:"how-to-consume-an-nft-erc721"},"How to consume an NFT ERC721"),(0,o.kt)("p",null,"This section will show how to consume an asset already published using Nevermined."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create and component that accept as parameter a ",(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/sdks/api-reference/classes/DDO"},"ddo"),"  and import from the Catalog all the functionalities needed for this purpose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AssetService } from '@nevermined-io/catalog-core';\nimport { NFTTokenAddress } from './config';\n    \nconst Consumer = ({ddo}: {ddo: DDO}) => {\n    const { assets, account, sdk } = Catalog.useNevermined();\n\n    ...\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You need to check if you are the owner of the NFT721, if it is the case you don't need to buy before to consume it\notherwise you will need to buy first, then in this point you need an ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," that check it every time that the wallet\nchanges the account and when the assest is bought in order to avoid buy again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"...\n    const { walletAddress } = MetaMask.useWallet();\n    const [ownNFT721, setOwnNFT721] = useState(false);\n    const [isBought, setIsBought] = useState(false);\n    const [owner, setOwner] = useState('');\n\n    useEffect(() => {\n    (async () => {\n        setOwnNFT721(await account.isNFT721Holder(ddo.id, walletAddress));\n        setOwner(await sdk.nft.ownerOf(ddo.id))\n    })()\n    }, [walletAddress, isBought])\n...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now you need to create the function ",(0,o.kt)("inlineCode",{parentName:"li"},"buy")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," the NFT721, ",(0,o.kt)("inlineCode",{parentName:"li"},"buy")," will give you permission to consume the NFT721 and ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," will make you able to consume the NFT721")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"...\n    const buy = async () => {\n        if (!account.isTokenValid()) {\n        await account.generateToken();\n        }\n\n        const currentAccount = await getCurrentAccount(sdk);\n        const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 721);\n        setIsBought(Boolean(response));\n    };\n\n    const download = async () => {\n        await assets.downloadNFT(ddo.id);\n    };\n")),(0,o.kt)("h4",{id:"the-complete-example-1"},"The complete example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Consumer = ({ddo}: {ddo: DDO}) => {\n    const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();\n    const { walletAddress } = MetaMask.useWallet();\n    const [ownNFT721, setOwnNFT721] = useState(false);\n    const [isBought, setIsBought] = useState(false);\n    const [owner, setOwner] = useState('');\n    \n    useEffect(() => {\n        (async () => {\n        setOwnNFT721(await account.isNFT721Holder(ddo.id, walletAddress));\n        setOwner(await sdk.nft.ownerOf(ddo.id))\n        })()\n    }, [walletAddress, isBought])\n\n    const buy = async () => {\n        if (!account.isTokenValid()) {\n        await account.generateToken();\n        }\n\n        const currentAccount = await getCurrentAccount(sdk);\n        const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 721);\n        setIsBought(Boolean(response));\n    };\n\n    const download = async () => {\n        await assets.downloadNFT(ddo.id);\n    };\n\n    return (\n        <div>\n        {ownNFT721 ? (\n            <button onClick={download} disabled={isLoadingSDK}>\n            Download NFT\n            </button>\n        ) : (\n            owner !== walletAddress ?\n            <button onClick={buy} disabled={isLoadingSDK}>\n            buy\n            </button>\n            : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n        )}\n        </div>\n    );\n};    \n")),(0,o.kt)("h3",{id:"how-to-create-an-nft-erc1155"},"How to create an NFT ERC1155"),(0,o.kt)("p",null,"This section will guide you to the creation of your first Nevermined NFT ERC1155 asset."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import the function from the AssetService.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nimport { AssetService } from '@nevermined-io/catalog-core';\n\nconst Publisher = () => {\n    const { publishNFT1155, assetPublish, setAssetPublish } = AssetService.useAssetPublish();\n\n    ...\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create the metadata object that will be published offchain.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"    ...\n    const metadata: MetaData = {\n        main: {\n            name: assetPublish?.name,\n            dateCreated: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n            author: assetPublish?.author,\n            license: 'No License Specified',\n            price: String(assetPublish?.price),\n            datePublished: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n            type: assetPublish?.type,\n            files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]\n        },\n        additionalInformation: {\n            description: assetPublish?.description,\n            categories: []\n        }\n    } as MetaData\n    ...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Call the function in your code. Creating a button that publish when you click and send the ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata")," object, the amount of nft to mint, the royalty and the ",(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/API/enums/RoyaltyKind"},"royalty type"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    ...\n    async function handleOnSubmit() {\n        const ddo = await publishNFT1155({metadata: metadata}, 100, 0, RoyaltyKind.Standard);\n        setDidDeployed(ddo!.id);\n    }\n    ...\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"After sign a message with your wallet provider and pay the fees you will be publishing your first NFT1155 asset. Check that appear in the assets list after some seconds.")),(0,o.kt)("h4",{id:"the-compleate-example-2"},"The compleate example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    \nconst Publisher = () => {\n    const { publishAsset, assetPublish, setAssetPublish } = AssetService.useAssetPublish();\n    const { isLoadingSDK } = Catalog.useNevermined();\n\n    const metadata: MetaData = {\n    main: {\n        name: assetPublish?.name,\n        dateCreated: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n        author: assetPublish?.author,\n        license: 'No License Specified',\n        price: String(assetPublish?.price),\n        datePublished: new Date().toISOString().replace(/\\.[0-9]{3}/, ''),\n        type: assetPublish?.type,\n        files: [{ url: assetPublish?.file, contentType: 'text/markdown' }]\n        },\n        additionalInformation: {\n            description: assetPublish?.description,\n            categories: []\n        }\n    } as MetaData\n\n    async function handleOnSubmit() {\n        const ddo = await publishNFT1155({metadata: metadata}, 100, 0, RoyaltyKind.Standard);\n        setDidDeployed(ddo!.id);\n    }\n\n    return (\n        <div>\n            <button onClick={handleOnSubmit} disabled={isLoadingSDK}>\n                Publish Asset\n            </button>\n        </div>\n    );\n}\n\n")),(0,o.kt)("h3",{id:"how-to-consume-an-nft-erc1155"},"How to consume an NFT ERC1155"),(0,o.kt)("p",null,"This section will show how to consume an NFT1155 already published using Nevermined."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create and component that accept as parameter a ",(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/components/sdks/api-reference/classes/DDO"},"ddo"),"  and import from the Catalog all the functionalities needed for this purpose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AssetService } from '@nevermined-io/catalog-core';\n    \nconst Consumer = ({ddo}: {ddo: DDO}) => {\n    const { assets, account, sdk } = Catalog.useNevermined();\n\n    ...\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You need to check if you are the owner of the NFT1155, if it is the case you don't need to buy before to consume it\notherwise you will need to buy first, then in this point you need an ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," that check it every time that the wallet\nchanges the account and when the NFT1155 is bought in order to avoid buy again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"...\n    const { walletAddress } = MetaMask.useWallet();\n    const [ownNFT1155, setOwnNFT1155] = useState(false);\n    const [isBought, setIsBought] = useState(false);\n    const [owner, setOwner] = useState('');\n\n    useEffect(() => {\n    (async () => {\n        setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));\n        setOwner(await sdk.assets.owner(ddo.id))\n    })()\n    }, [walletAddress, isBought])\n...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now you need to create the function ",(0,o.kt)("inlineCode",{parentName:"li"},"buy")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," the NFT1155, ",(0,o.kt)("inlineCode",{parentName:"li"},"buy")," will give you permission to consume the NFT1155 and ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," will make you able to consume the NFT1155")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"...\n    const buy = async () => {\n        if (!account.isTokenValid()) {\n        await account.generateToken();\n        }\n\n        const currentAccount = await getCurrentAccount(sdk);\n        const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n        setIsBought(Boolean(response));\n    };\n\n    const download = async () => {\n        await assets.downloadNFT(ddo.id);\n    };\n")),(0,o.kt)("h4",{id:"the-compleate-example-3"},"The compleate example"),(0,o.kt)("h4",{id:"the-complete-example-2"},"The complete example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Consumer = ({ddo}: {ddo: DDO}) => {\n    const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();\n    const { walletAddress } = MetaMask.useWallet();\n    const [ownNFT1155, setOwnNF1155] = useState(false);\n    const [isBought, setIsBought] = useState(false);\n    const [owner, setOwner] = useState('');\n    \n    useEffect(() => {\n    (async () => {\n        setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));\n        setOwner(await sdk.assets.owner(ddo.id))\n    })()\n    }, [walletAddress, isBought])\n\n    const buy = async () => {\n        if (!account.isTokenValid()) {\n        await account.generateToken();\n        }\n\n        const currentAccount = await getCurrentAccount(sdk);\n        const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);\n        setIsBought(Boolean(response));\n    };\n\n    const download = async () => {\n        await assets.downloadNFT(ddo.id);\n    };\n\n    return (\n        <div>\n        {ownNFT1155 ? (\n            <button onClick={download} disabled={isLoadingSDK}>\n            Download NFT\n            </button>\n        ) : (\n            owner !== walletAddress ?\n            <button onClick={buy} disabled={isLoadingSDK}>\n            buy\n            </button>\n            : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n        )}\n        </div>\n    );\n};    \n")))}m.isMDXComponent=!0}}]);