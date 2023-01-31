"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1454],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=s,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(f,r(r({ref:n},l),{},{components:t})):a.createElement(f,r({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},71038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(87462),s=(t(67294),t(3905));const o={sidebar_position:3},r="Example",i={unversionedId:"nevermined-sdk/example",id:"nevermined-sdk/example",title:"Example",description:"Before to start",source:"@site/docs/nevermined-sdk/example.md",sourceDirName:"nevermined-sdk",slug:"/nevermined-sdk/example",permalink:"/docs/nevermined-sdk/example",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/example.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/nevermined-sdk/getting-started"},next:{title:"Compute Example",permalink:"/docs/nevermined-sdk/compute-example"}},c={},d=[{value:"Before to start",id:"before-to-start",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Let&#39;s start with the app config file",id:"lets-start-with-the-app-config-file",level:2},{value:"The example file",id:"the-example-file",level:2},{value:"SingleAsset",id:"singleasset",level:3},{value:"PublishAsset",id:"publishasset",level:3},{value:"loginMetamask",id:"loginmetamask",level:3},{value:"BuyAsset",id:"buyasset",level:3},{value:"App",id:"app",level:3},{value:"Complete example file",id:"complete-example-file",level:3},{value:"Styling",id:"styling",level:2},{value:"The index file",id:"the-index-file",level:2}],l={toc:d};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"example"},"Example"),(0,s.kt)("h2",{id:"before-to-start"},"Before to start"),(0,s.kt)("p",null,"If you project is using ",(0,s.kt)("inlineCode",{parentName:"p"},"React")," we recommend to use ",(0,s.kt)("a",{parentName:"p",href:"/docs/catalog/intro"},"Catalog")," to make everything much easier, SDK is the low level of it."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Before you start with this demo you require:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An extension of ",(0,s.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," installed in your browser"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"node")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," needs to be installed"),(0,s.kt)("li",{parentName:"ul"},"The Nevermined artifacts, you can find the script ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/nevermined-io/create-nevermined-react/blob/main/scripts/download-artifacts.sh"},"here"),". To use the script run ",(0,s.kt)("inlineCode",{parentName:"li"},"./download-artifacts.sh [VERSION OF THE CONTRACT] [NETWORK]"))),(0,s.kt)("h2",{id:"lets-start-with-the-app-config-file"},"Let's start with the app config file"),(0,s.kt)("p",null,"The first file that you need to create is the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.ts")," file which contains all the ",(0,s.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/Config"},"options needed")," to initialize the ",(0,s.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/intro"},"Nevermined SDK"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Config } from '@nevermined-io/nevermined-sdk-js'\nimport { ethers } from 'ethers'\n\nexport const web3ProviderUri = process.env.REACT_APP_NODE_URI || 'https://matic-mumbai.chainstacklabs.com'\nexport const nodeAddress =\n  process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc'\nexport const neverminedNodeUri =\n  process.env.REACT_APP_GATEWAY_URI || 'https://node.mumbai.public.nevermined.network'\nexport const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001' // for Mumbai\nexport const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445'\nexport const marketplaceUri = 'https://marketplace-api.mumbai.public.nevermined.network'\nconst graphHttpUri = process.env.GRAPH_HTTP_URI ||  'https://api.thegraph.com/subgraphs/name/nevermined-io/public'\n// represent USDC token in mumbai that can be claimed in the faucet https://calibration-faucet.filswan.com/#/dashboard \nexport const erc20TokenAddress = process.env.ERC20_TOKEN_ADDRESS || '0xe11a86849d99f524cac3e7a0ec1241828e332c62'\n\nexport const appConfig: Config = {\n  //@ts-ignore\n  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),\n  neverminedNodeUri,\n  nodeAddress,\n  graphHttpUri,\n  marketplaceAuthToken: localStorage.getItem('marketplaceApiToken'),\n  marketplaceUri,\n  artifactsFolder: `${rootUri}/contracts`,\n  newGateway: true,\n}\n")),(0,s.kt)("h2",{id:"the-example-file"},"The example file"),(0,s.kt)("p",null,"The example file ",(0,s.kt)("inlineCode",{parentName:"p"},"src/example/index.tsx")," contains all the basic logic to handle a ",(0,s.kt)("a",{parentName:"p",href:"/docs/architecture/what-can-i-do#tokenization-of-assets-via-erc-1155-nfts-aka-nft-sales"},"NFT1155")," as a component. It outlines each functionality and component in detail."),(0,s.kt)("h3",{id:"singleasset"},"SingleAsset"),(0,s.kt)("p",null,"It shows the content of the ddo object published"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const SingleAsset = ({ddo}: {ddo: DDO}) => {\n  return (\n    <>\n      <UiLayout>\n        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>\n      </UiLayout>\n      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>\n    </>\n  )\n}\n")),(0,s.kt)("h3",{id:"publishasset"},"PublishAsset"),(0,s.kt)("p",null,"It renders a button used to publish a new ",(0,s.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-NFT"},"NFT")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const PublishAsset = ({onPublish, }: {onPublish: () => void }) => {\n  return (\n    <>\n      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>\n        mint\n      </UiButton>\n    </>\n  )\n}\n")),(0,s.kt)("h3",{id:"loginmetamask"},"loginMetamask"),(0,s.kt)("p",null,"We need a function to login to metamask when it isn't yet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const loginMarketplace = async (sdk: Nevermined, account: Account) => {\n  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account)\n  await sdk.marketplace.login(clientAssertion)\n}\n")),(0,s.kt)("h3",{id:"buyasset"},"BuyAsset"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"BuyAsset")," component will display the button ",(0,s.kt)("inlineCode",{parentName:"p"},"buy")," in order to buy the asset if the wallet account is not a NFT1155 holder. Otherwise, the owner will display a download button to download the NFT asset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {\n  const [ownNFT1155, setOwnNFT1155] = useState(false)\n  const [isBought, setIsBought] = useState(false)\n  const [owner, setOwner] = useState('')\n  \n  useEffect(() => {\n    (async () => {\n      const balance = await sdk.nfts.balance(ddo.id, account)\n      const nftBalance =  BigNumber.from(balance).toNumber()\n      setOwnNFT1155(nftBalance > 0)\n      setOwner(await sdk.assets.owner(ddo.id))\n    })()\n  }, [account, isBought])\n\n\n  const onBuy = async () => {\n    await loginMarketplace(sdk, account)\n\n    try {\n      const agreementId = await sdk.nfts.order(ddo.id, BigNumber.from(1), account)\n      const transferResult = await sdk.nfts.transferForDelegate(\n        agreementId,\n        owner,\n        account.getId(),\n        BigNumber.from(1),\n        1155,\n      )\n      \n      setIsBought(Boolean(transferResult))\n    } catch (error) {\n      Logger.error(error)\n    }\n  }\n\n  const onDownload = async () => {\n    try {\n      await sdk.nfts.access(ddo.id, account)\n    } catch (error) {\n      Logger.error(error)\n    }\n  }\n\n  return (\n    <UiLayout className={b('buy')}>\n      {ownNFT1155 ? (\n        <UiButton type='secondary' onClick={onDownload}>\n          Download NFT\n        </UiButton>\n      ) : (\n        owner !== account.getId() ?\n        <UiButton type='secondary' onClick={onBuy}>\n          buy\n        </UiButton>\n        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n      )}\n    </UiLayout>\n  )\n}\n")),(0,s.kt)("h3",{id:"app"},"App"),(0,s.kt)("p",null,"The main component of the example, it pulls the rest of the components and also includes the function ",(0,s.kt)("inlineCode",{parentName:"p"},"onPublish")," with the logic to publish a NFT1155 which is transferred as a parameter to the component ",(0,s.kt)("a",{parentName:"p",href:"#publishasset"},"PublisAsset")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = ({config}: {config: Config }) => {\n  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined)\n  const [account, setAccount] = useState<Account>(undefined as Account)\n  const [ddo, setDDO] = useState<DDO>({} as DDO)\n  const [walletAddress, setWalletAddress] = useState('')\n\n  const loginMetamask = async () => {\n    const response = await (window as any)?.ethereum?.request?.({\n      method: \"eth_requestAccounts\",\n    })\n  \n    setWalletAddress(ethers.utils.getAddress(response[0]))\n  }\n\n  useEffect(() => {\n    (window as any)?.ethereum?.on(\"accountsChanged\", (newAccount: string[]) => {\n      if (newAccount && newAccount.length > 0) {\n          setWalletAddress(\n              ethers.utils.getAddress(newAccount[0])\n          )\n      } else {\n          setWalletAddress(\"\")\n          console.log(\"No Account found!\")\n      }\n    })\n\n    (async() => {\n      const provider = new ethers.providers.Web3Provider((window as any).ethereum)\n      const accounts = await provider.listAccounts()\n      setWalletAddress(\n          accounts?.length ? ethers.utils.getAddress(accounts[0]) : \"\"\n      )\n    })()\n  }, [])\n\n  useEffect(() => {\n    if(walletAddress) {\n      (async () => {\n        try {\n          const nvm = await Nevermined.getInstance(config)\n          const accounts = await nvm.accounts.list()\n\n          setAccount(accounts[0])\n          setSdk(nvm)\n        } catch(error) {\n          console.log(error)\n        }\n      })()\n    }\n  }, [walletAddress])\n\n  const publishNFT1155 = async (nodeAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetRewards: AssetRewards) => {\n    const transferNftCondition = sdk.keeper.conditions.transferNftCondition\n\n    const transferNftConditionContractReceipt = await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, accountWallet)\n\n    Logger.log(`Contract Receipt for approved transfer NFT: ${transferNftConditionContractReceipt}`)\n\n    const gateawayContractReceipt = await sdk.nfts.setApprovalForAll(nodeAddress, true, accountWallet)\n\n    Logger.log(`Contract Receipt for approved gateway: ${gateawayContractReceipt}`)\n\n\n    const ddo = await sdk.nfts.createWithRoyalties(\n      metadata,\n      accountWallet,\n      BigNumber.from(100),\n      royaltyAttributes,\n      assetRewards,\n      BigNumber.from(1),\n      \"0xe11a86849d99f524cac3e7a0ec1241828e332c62\",\n      true,\n    )\n\n    return ddo\n  }\n\n  const onPublish = async () => {\n    try {\n      // Here we set the rewards that will receive the publisher\n      const assetRewardsMap = new Map([\n        [account.getId(), BigNumber.from(1)]\n      ])\n      const assetRewards = new AssetRewards(assetRewardsMap)\n\n      // This set the royalties that will receive for each sold\n      const royaltyAttributes = {\n        royaltyKind: RoyaltyKind.Standard,\n        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n        amount: 0,\n      }\n\n      // We need to set network fees\n      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()\n      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()\n\n      assetRewards.addNetworkFees(feeReceiver, BigNumber.from(networkFee))\n\n      const metadata: MetaData = {\n        main: {\n          name: '',\n          files: [{\n            index: 0,\n            contentType: 'application/json',\n            url: 'https://github.com/nevermined-io/docs/blob/main/docs/architecture/specs/examples/did/v0.4/ddo-example.json'\n          }],\n          type: 'dataset',\n          author: '',\n          license: '',\n          dateCreated: new Date().toISOString(),\n        }\n      }\n\n      await loginMarketplace(sdk, account)\n      \n      const response = await publishNFT1155(config.nodeAddress, account, metadata, royaltyAttributes, assetRewards)\n\n      setDDO(response as DDO)\n    } catch (error) {\n      console.log('error', error)\n    }\n  }\n\n  return (\n    <div className={b('container')}>\n      <UiLayout>\n        {account ? \n          <>\n            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>\n            <UiText>{account.getId()}</UiText>\n          </> : \n          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>\n        }\n\n        {walletAddress && !ddo.id && (\n          <PublishAsset onPublish={onPublish} />\n        )}\n\n        {ddo?.id && (\n          <>\n              <SingleAsset ddo={ddo}/>\n              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>\n          </>\n        )}\n\n      </UiLayout>\n    </div>\n  )\n}\n\nexport default App\n")),(0,s.kt)("h3",{id:"complete-example-file"},"Complete example file"),(0,s.kt)("p",null,"Now let's put everything together."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect, useState} from 'react'\nimport { Nevermined, Account, Config, Logger, DDO, MetaData } from '@nevermined-io/nevermined-sdk-js'\nimport AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards'\nimport { RoyaltyKind, getRoyaltyScheme, RoyaltyAttributes } from '@nevermined-io/nevermined-sdk-js/dist/node/nevermined/Assets'\nimport { UiLayout, UiText, UiButton, BEM } from '@nevermined-io/styles'\nimport { ethers } from 'ethers'\nimport { appConfig } from './config'\nimport styles from './styles.module.scss'\nimport BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber'\nconst b = BEM('demo', styles)\n\nconst ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'\n\nLogger.setLevel(3)\n\nconst loginMarketplace = async (sdk: Nevermined, account: Account) => {\n  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account)\n  await sdk.marketplace.login(clientAssertion)\n}\n\nconst PublishAsset = ({onPublish, }: {onPublish: () => void }) => {\n  return (\n    <>\n      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>\n        mint\n      </UiButton>\n    </>\n  )\n}\n\nconst SingleAsset = ({ddo}: {ddo: DDO}) => {\n  return (\n    <>\n      <UiLayout>\n        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>\n      </UiLayout>\n      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>\n    </>\n  )\n}\n\nconst BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {\n  const [ownNFT1155, setOwnNFT1155] = useState(false)\n  const [isBought, setIsBought] = useState(false)\n  const [owner, setOwner] = useState('')\n  \n  useEffect(() => {\n    (async () => {\n      const balance = await sdk.nfts.balance(ddo.id, account)\n      const nftBalance =  BigNumber.from(balance).toNumber()\n      setOwnNFT1155(nftBalance > 0)\n      setOwner(await sdk.assets.owner(ddo.id))\n    })()\n  }, [account, isBought])\n\n\n  const onBuy = async () => {\n    await loginMarketplace(sdk, account)\n\n    try {\n      const agreementId = await sdk.nfts.order(ddo.id, BigNumber.from(1), account)\n      const transferResult = await sdk.nfts.transferForDelegate(\n        agreementId,\n        owner,\n        account.getId(),\n        BigNumber.from(1),\n        1155,\n      )\n      \n      setIsBought(Boolean(transferResult))\n    } catch (error) {\n      Logger.error(error)\n    }\n  }\n\n  const onDownload = async () => {\n    try {\n      await sdk.nfts.access(ddo.id, account)\n    } catch (error) {\n      Logger.error(error)\n    }\n  }\n\n  return (\n    <UiLayout className={b('buy')}>\n      {ownNFT1155 ? (\n        <UiButton type='secondary' onClick={onDownload}>\n          Download NFT\n        </UiButton>\n      ) : (\n        owner !== account.getId() ?\n        <UiButton type='secondary' onClick={onBuy}>\n          buy\n        </UiButton>\n        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>\n      )}\n    </UiLayout>\n  )\n}\n\n\nconst App = ({config}: {config: Config }) => {\n  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined)\n  const [account, setAccount] = useState<Account>(undefined as Account)\n  const [ddo, setDDO] = useState<DDO>({} as DDO)\n  const [walletAddress, setWalletAddress] = useState('')\n\n  const loginMetamask = async () => {\n    const response = await (window as any)?.ethereum?.request?.({\n      method: \"eth_requestAccounts\",\n    })\n  \n    setWalletAddress(ethers.utils.getAddress(response[0]))\n  }\n\n  useEffect(() => {\n    (window as any)?.ethereum?.on(\"accountsChanged\", (newAccount: string[]) => {\n      if (newAccount && newAccount.length > 0) {\n          setWalletAddress(\n              ethers.utils.getAddress(newAccount[0])\n          )\n      } else {\n          setWalletAddress(\"\")\n          console.log(\"No Account found!\")\n      }\n    })\n\n    (async() => {\n      const provider = new ethers.providers.Web3Provider((window as any).ethereum)\n      const accounts = await provider.listAccounts()\n      setWalletAddress(\n          accounts?.length ? ethers.utils.getAddress(accounts[0]) : \"\"\n      )\n    })()\n  }, [])\n\n  useEffect(() => {\n    if(walletAddress) {\n      (async () => {\n        try {\n          const nvm = await Nevermined.getInstance(config)\n          const accounts = await nvm.accounts.list()\n\n          setAccount(accounts[0])\n          setSdk(nvm)\n        } catch(error) {\n          console.log(error)\n        }\n      })()\n    }\n  }, [walletAddress])\n\n  const publishNFT1155 = async (nodeAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetRewards: AssetRewards) => {\n    const transferNftCondition = sdk.keeper.conditions.transferNftCondition\n\n    const transferNftConditionContractReceipt = await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, accountWallet)\n\n    Logger.log(`Contract Receipt for approved transfer NFT: ${transferNftConditionContractReceipt}`)\n\n    const gateawayContractReceipt = await sdk.nfts.setApprovalForAll(nodeAddress, true, accountWallet)\n\n    Logger.log(`Contract Receipt for approved gateway: ${gateawayContractReceipt}`)\n\n\n    const ddo = await sdk.nfts.createWithRoyalties(\n      metadata,\n      accountWallet,\n      BigNumber.from(100),\n      royaltyAttributes,\n      assetRewards,\n      BigNumber.from(1),\n      \"0xe11a86849d99f524cac3e7a0ec1241828e332c62\",\n      true,\n    )\n\n    return ddo\n  }\n\n  const onPublish = async () => {\n    try {\n      const assetRewardsMap = new Map([\n        [account.getId(), BigNumber.from(1)]\n      ])\n\n      const assetRewards = new AssetRewards(assetRewardsMap)\n      const royaltyAttributes = {\n        royaltyKind: RoyaltyKind.Standard,\n        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),\n        amount: 0,\n      }\n\n      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()\n      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()\n\n      assetRewards.addNetworkFees(feeReceiver, BigNumber.from(networkFee))\n\n      const metadata: MetaData = {\n        main: {\n          name: '',\n          files: [{\n            index: 0,\n            contentType: 'application/json',\n            url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg'\n          }],\n          type: 'dataset',\n          author: '',\n          license: '',\n          dateCreated: new Date().toISOString(),\n        }\n      }\n\n      await loginMarketplace(sdk, account)\n      \n      const response = await publishNFT1155(config.nodeAddress, account, metadata, royaltyAttributes, assetRewards)\n\n      setDDO(response as DDO)\n    } catch (error) {\n      console.log('error', error)\n    }\n  }\n\n  return (\n    <div className={b('container')}>\n      <UiLayout>\n        {account ? \n          <>\n            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>\n            <UiText>{account.getId()}</UiText>\n          </> : \n          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>\n        }\n\n        {walletAddress && !ddo.id && (\n          <PublishAsset onPublish={onPublish} />\n        )}\n\n        {ddo?.id && (\n          <>\n              <SingleAsset ddo={ddo}/>\n              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>\n          </>\n        )}\n\n      </UiLayout>\n    </div>\n  )\n}\n\nexport default App\n")),(0,s.kt)("h2",{id:"styling"},"Styling"),(0,s.kt)("p",null,"In the path ",(0,s.kt)("inlineCode",{parentName:"p"},"src/examples/example.module.scss")," you will find some styles to improve the UI of the app."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@import '~@nevermined-io/styles/lib/cjs/styles/index.scss'\n\n.example {\n  @include component;\n\n  &__container {\n    padding: 25px 0 0 25px;\n  }\n\n  &__mint {\n    margin-left: 10px;\n  }\n\n  &__detail {\n    margin-right: 5px;\n  }\n\n  &__ddo {\n    line-height: 16px;\n  }\n\n  &__buy {\n    margin-top: 20px;\n  }\n}\n")),(0,s.kt)("h2",{id:"the-index-file"},"The index file"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"src/indes.tsx")," file call the ",(0,s.kt)("inlineCode",{parentName:"p"},"App")," component with the configurations set"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@nevermined-io/styles/lib/esm/styles/globals.scss'\nimport '@nevermined-io/styles/lib/esm/index.css'\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { appConfig } from './config'\nimport App from './app'\n\nReactDOM.render(<App config={appConfig}/>, document.getElementById('root') as HTMLElement)\n")))}u.isMDXComponent=!0}}]);