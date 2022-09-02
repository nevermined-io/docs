"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5467],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],o={sidebar_position:4},p="Release Process",s={unversionedId:"architecture/components/contracts/ReleaseProcess",id:"architecture/components/contracts/ReleaseProcess",title:"Release Process",description:"Build a new version",source:"@site/docs/architecture/components/contracts/ReleaseProcess.md",sourceDirName:"architecture/components/contracts",slug:"/architecture/components/contracts/ReleaseProcess",permalink:"/docs/architecture/components/contracts/ReleaseProcess",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/contracts/ReleaseProcess.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Packaging",permalink:"/docs/architecture/components/contracts/Packages"},next:{title:"Upgrade Process",permalink:"/docs/architecture/components/contracts/Upgrades"}},c={},d=[{value:"Build a new version",id:"build-a-new-version",level:2},{value:"Interact with networks",id:"interact-with-networks",level:2},{value:"Roles",id:"roles",level:3},{value:"Flags",id:"flags",level:3},{value:"Nevermined Configuration",id:"nevermined-configuration",level:3},{value:"Deployer",id:"deployer",level:4},{value:"Upgrader",id:"upgrader",level:4},{value:"UpgraderWallet",id:"upgraderwallet",level:4},{value:"OwnerWallet",id:"ownerwallet",level:4},{value:"Deploy &amp; Upgrade",id:"deploy--upgrade",level:3},{value:"Rinkeby (Testnet)",id:"rinkeby-testnet",level:4},{value:"Deploy the whole application",id:"deploy-the-whole-application",level:5},{value:"Deploy a single contracts",id:"deploy-a-single-contracts",level:5},{value:"Upgrade the whole application",id:"upgrade-the-whole-application",level:5},{value:"Upgrade a single contract",id:"upgrade-a-single-contract",level:5},{value:"Persist artifacts",id:"persist-artifacts",level:5},{value:"Mumbai (PolygonTestnet)",id:"mumbai-polygontestnet",level:4},{value:"Deploy the whole application",id:"deploy-the-whole-application-1",level:5},{value:"Deploy a single contracts",id:"deploy-a-single-contracts-1",level:5},{value:"Upgrade the whole application",id:"upgrade-the-whole-application-1",level:5},{value:"Upgrade a single contract",id:"upgrade-a-single-contract-1",level:5},{value:"Persist artifacts",id:"persist-artifacts-1",level:5},{value:"Kovan (Testnet)",id:"kovan-testnet",level:4},{value:"Deploy the whole application",id:"deploy-the-whole-application-2",level:5},{value:"Deploy a single contracts",id:"deploy-a-single-contracts-2",level:5},{value:"Upgrade the whole application",id:"upgrade-the-whole-application-2",level:5},{value:"Upgrade a single contract",id:"upgrade-a-single-contract-2",level:5},{value:"Persist artifacts",id:"persist-artifacts-2",level:5},{value:"Approve upgrades",id:"approve-upgrades",level:4},{value:"Upload the artifacts (abis/contracts) to Contract Repository",id:"upload-the-artifacts-abiscontracts-to-contract-repository",level:2},{value:"Document",id:"document",level:2},{value:"Contracts documentation",id:"contracts-documentation",level:3},{value:"Trigger CI",id:"trigger-ci",level:2},{value:"Release and packages",id:"release-and-packages",level:2},{value:"Audit",id:"audit",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"release-process"},"Release Process"),(0,l.kt)("h2",{id:"build-a-new-version"},"Build a new version"),(0,l.kt)("p",null,"The steps to build a new version are the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new local feature branch, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"git checkout -b release/v0.2.5")),(0,l.kt)("li",{parentName:"ul"},"Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"bumpversion.sh")," script to bump the project version. You can execute the script using {major|minor|patch} as first argument to bump the version accordingly:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To bump the patch version: ",(0,l.kt)("inlineCode",{parentName:"li"},"./bumpversion.sh patch")),(0,l.kt)("li",{parentName:"ul"},"To bump the minor version: ",(0,l.kt)("inlineCode",{parentName:"li"},"./bumpversion.sh minor")),(0,l.kt)("li",{parentName:"ul"},"To bump the major version: ",(0,l.kt)("inlineCode",{parentName:"li"},"./bumpversion.sh major")))),(0,l.kt)("li",{parentName:"ul"},"assuming we are on version ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.2.4")," and the desired version is ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.2.5")," ",(0,l.kt)("inlineCode",{parentName:"li"},"./bumpversion.sh patch")," has to be run.")),(0,l.kt)("h2",{id:"interact-with-networks"},"Interact with networks"),(0,l.kt)("h3",{id:"roles"},"Roles"),(0,l.kt)("p",null,"We define four roles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployer"),": represented as ",(0,l.kt)("inlineCode",{parentName:"li"},"accounts[0]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upgrader"),": represented as ",(0,l.kt)("inlineCode",{parentName:"li"},"accounts[1]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upgraderWallet"),": represented as the ",(0,l.kt)("inlineCode",{parentName:"li"},"upgrader")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"wallets.json")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ownerWallet"),": represented as the ",(0,l.kt)("inlineCode",{parentName:"li"},"owner")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"wallets.json")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"governorWallet"),": represented as the ",(0,l.kt)("inlineCode",{parentName:"li"},"governor")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"wallets.json"))),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--testnet")," Deploys the Dispenser, the NeverminedToken and the contracts from ",(0,l.kt)("inlineCode",{parentName:"li"},"contracts.json")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--with-token")," Deploys the NeverminedToken and the contracts from ",(0,l.kt)("inlineCode",{parentName:"li"},"contracts.json"))),(0,l.kt)("h3",{id:"nevermined-configuration"},"Nevermined Configuration"),(0,l.kt)("p",null,"The set of Nevermined contracts can be deployed in different networks and interact with several use cases.\nEach of these different scenarios could require different configurations so to facilitate that Nevermined provides an\non-chain configuration mechanism allowing the governance (via DAO or similar) of a Nevermined deployment.\nTo see all the available possibilities please see the ",(0,l.kt)("inlineCode",{parentName:"p"},"INeverminedConfig")," interface."),(0,l.kt)("p",null,"During the deployment of Nevermined all of these parameters can be specified allowing a bespoke environment configuration.\nThis can be done via the definition of the following environment variables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NVM_MARKETPLACE_FEE"),". It refers to the fee charged by Nevermined for using the Service Agreements. It uses an integer number representing a 2 decimal number. It means 1450 means 14.50% fee. The value must be beteen 0 and 10000 (100%). See ",(0,l.kt)("inlineCode",{parentName:"li"},"marketplaceFee")," variable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NVM_RECEIVER_FEE"),". It refers to the address that will receive the fee charged by Nevermined per transaction. See ",(0,l.kt)("inlineCode",{parentName:"li"},"feeReceiver")," variable")),(0,l.kt)("h4",{id:"deployer"},"Deployer"),(0,l.kt)("p",null,"Can be any account. It is used for deploying the initial proxy contracts and the logic contracts."),(0,l.kt)("h4",{id:"upgrader"},"Upgrader"),(0,l.kt)("p",null,"Has to be an ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader")," multi sig wallet. It is used for issuing upgrade requests against the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader")," multi sig wallet."),(0,l.kt)("h4",{id:"upgraderwallet"},"UpgraderWallet"),(0,l.kt)("p",null,"One instance of the multi sig wallet, defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader"),". This wallet will be assigned as zos admin and is required to do upgrades."),(0,l.kt)("h4",{id:"ownerwallet"},"OwnerWallet"),(0,l.kt)("p",null,"One instance of the multi sig wallet, defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"owner"),". This wallet will be assigned as the ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," of all the contracts. It can be used to call specific functions in the contracts ie. change the configuration."),(0,l.kt)("h3",{id:"deploy--upgrade"},"Deploy & Upgrade"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn clean")," to clean the work dir."),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn compile")," to compile the contracts.")),(0,l.kt)("h4",{id:"rinkeby-testnet"},"Rinkeby (Testnet)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy the wallet file for ",(0,l.kt)("inlineCode",{parentName:"li"},"rinkeby"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp wallets_rinkeby.json wallets.json")))),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export MNEMONIC=<your rinkeby mnemonic>"),". You will find them in the password manager.")),(0,l.kt)("h5",{id:"deploy-the-whole-application"},"Deploy the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:rinkeby"))),(0,l.kt)("h5",{id:"deploy-a-single-contracts"},"Deploy a single contracts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy a single contract you need to specify the contracts to deploy as a parameter to the deploy script: ie. ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:rinkeby -- NeverminedToken Dispenser"),"will deploy ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Dispenser"),".")),(0,l.kt)("h5",{id:"upgrade-the-whole-application"},"Upgrade the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:rinkeby"))),(0,l.kt)("h5",{id:"upgrade-a-single-contract"},"Upgrade a single contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade a single contract run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:rinkeby -- NeverminedToken"),". For upgrading the ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," contract.")),(0,l.kt)("h5",{id:"persist-artifacts"},"Persist artifacts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit all changes in ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts/*.rinkeby.json"))),(0,l.kt)("h4",{id:"mumbai-polygontestnet"},"Mumbai (PolygonTestnet)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy the wallet file for ",(0,l.kt)("inlineCode",{parentName:"li"},"mumbai"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp wallets_mumbai.json wallets.json")))),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export MNEMONIC=<your mumbai mnemonic>"),". You will find them in the password manager.")),(0,l.kt)("h5",{id:"deploy-the-whole-application-1"},"Deploy the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:mumbai"))),(0,l.kt)("h5",{id:"deploy-a-single-contracts-1"},"Deploy a single contracts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy a single contract you need to specify the contracts to deploy as a parameter to the deploy script: ie. ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:mumbai -- NeverminedToken Dispenser"),"will deploy ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Dispenser"),".")),(0,l.kt)("h5",{id:"upgrade-the-whole-application-1"},"Upgrade the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:mumbai"))),(0,l.kt)("h5",{id:"upgrade-a-single-contract-1"},"Upgrade a single contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade a single contract run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:mumbai -- NeverminedToken"),". For upgrading the ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," contract.")),(0,l.kt)("h5",{id:"persist-artifacts-1"},"Persist artifacts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit all changes in ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts/*.mumbai.json"))),(0,l.kt)("h4",{id:"kovan-testnet"},"Kovan (Testnet)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy the wallet file for ",(0,l.kt)("inlineCode",{parentName:"li"},"kovan")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"cp wallets_kovan.json wallets.json")),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export MNEMONIC=<your kovan mnemonic>"),". You will find them in the password manager."),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export INFURA_TOKEN=<your infura token>"),". You will get it from ",(0,l.kt)("inlineCode",{parentName:"li"},"infura"),".")),(0,l.kt)("h5",{id:"deploy-the-whole-application-2"},"Deploy the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy all the contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:kovan"))),(0,l.kt)("h5",{id:"deploy-a-single-contracts-2"},"Deploy a single contracts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy a single contracts you need to specify the contracts to deploy as a parameter to the deploy script: ie. ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:kovan -- NeverminedToken Dispenser")," will deploy ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Dispenser"),".")),(0,l.kt)("h5",{id:"upgrade-the-whole-application-2"},"Upgrade the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:kovan"))),(0,l.kt)("h5",{id:"upgrade-a-single-contract-2"},"Upgrade a single contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade a single contract run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:kovan -- NeverminedToken"),". For upgrading the ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," contract.")),(0,l.kt)("h5",{id:"persist-artifacts-2"},"Persist artifacts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit all changes in ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts/*.kovan.json"))),(0,l.kt)("h4",{id:"approve-upgrades"},"Approve upgrades"),(0,l.kt)("p",null,"All upgrades of the contracts have to be approved by the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader")," wallet configured in the ",(0,l.kt)("inlineCode",{parentName:"p"},"wallets.json")," file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"go to ",(0,l.kt)("a",{parentName:"li",href:"https://wallet.gnosis.pm"},"https://wallet.gnosis.pm")),(0,l.kt)("li",{parentName:"ul"},"Load ",(0,l.kt)("inlineCode",{parentName:"li"},"upgrader")," wallet"),(0,l.kt)("li",{parentName:"ul"},"Select an Ethereum Account that is an ",(0,l.kt)("inlineCode",{parentName:"li"},"owner")," of the multi sig wallet, but not the one who issued the upgrade request. This can be done in the following ways:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Connect to a local Blockchain node that holds the private key."),(0,l.kt)("li",{parentName:"ul"},"Connect to MetaMask and select the owner account from the multi sig wallet."),(0,l.kt)("li",{parentName:"ul"},"Connect a hardware wallet like ledger or trezor."))),(0,l.kt)("li",{parentName:"ul"},"Select the transaction you want to confirm (the upgrade script will tell you which transactions have to be approved in which wallets)"),(0,l.kt)("li",{parentName:"ul"},"Click Confirm")),(0,l.kt)("h2",{id:"upload-the-artifacts-abiscontracts-to-contract-repository"},"Upload the artifacts (abis/contracts) to Contract Repository"),(0,l.kt)("p",null,"Once the contracts are deployed to a public network or a new contract version whose contract abis has to been uploaded, use ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts/upload_artifacts_s3.sh")," to upload\nthe contracts or artifacts to repository ",(0,l.kt)("a",{parentName:"p",href:"https://artifacts-nevermined-rocks.s3.amazonaws.com"},"https://artifacts-nevermined-rocks.s3.amazonaws.com"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Your environment has to be configured and authorized to use aws cli to upload files to ",(0,l.kt)("inlineCode",{parentName:"em"},"artifacts-nevermined-rocks")," bucketi"),"."),(0,l.kt)("p",null,"The script has the next variables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"branch")," is the branch from where the workflow and artifacts will be used."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"asset")," can be ",(0,l.kt)("inlineCode",{parentName:"li"},"abis"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"contracts"),". Use abis if you want to upload the contract ABIs that not contain deployment information. Contracts for uploading abis with deployment information to ",(0,l.kt)("inlineCode",{parentName:"li"},"network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"network")," refers to network name, based on filename/hardhat config. Not used if ",(0,l.kt)("inlineCode",{parentName:"li"},"abis")," is selected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag")," refers to deployment tag. Defaults to common. Not used if ",(0,l.kt)("inlineCode",{parentName:"li"},"abis")," is selected.")),(0,l.kt)("p",null,"This workflows uses the script ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts/upload_artifacts_s3.sh")," that can be used using the next syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/upload_artifacts_s3.sh abis\n./scripts/upload_artifacts_s3.sh contracts mumbai awesome_tag\n")),(0,l.kt)("h2",{id:"document"},"Document"),(0,l.kt)("h3",{id:"contracts-documentation"},"Contracts documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the contracts documentation"),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn doc:contracts")),(0,l.kt)("li",{parentName:"ul"},"Commit the changes in ",(0,l.kt)("inlineCode",{parentName:"li"},"docs/contracts")," folder")),(0,l.kt)("h2",{id:"trigger-ci"},"Trigger CI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit the missing changes to the feature branch."),(0,l.kt)("li",{parentName:"ul"},"Tag the last commit with the new version number ie. ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.2.5")),(0,l.kt)("li",{parentName:"ul"},"Push the feature branch to GitHub."),(0,l.kt)("li",{parentName:"ul"},"Make a pull request from the just-pushed branch to ",(0,l.kt)("inlineCode",{parentName:"li"},"develop")," branch."),(0,l.kt)("li",{parentName:"ul"},"Wait for all the tests to pass!"),(0,l.kt)("li",{parentName:"ul"},"Merge the pull request into the ",(0,l.kt)("inlineCode",{parentName:"li"},"develop")," branch.")),(0,l.kt)("h2",{id:"release-and-packages"},"Release and packages"),(0,l.kt)("p",null,"The release itself is done by ",(0,l.kt)("inlineCode",{parentName:"p"},"github actions")," based on the tagged commit."),(0,l.kt)("p",null,"It will deploy the following components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@nevermined-io/contracts"},"npm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pypi.org/project/nevermined-contracts/"},"pypi")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/io.keyko.nevermined/contracts"},"maven")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/neverminedio/contracts"},"docker"))),(0,l.kt)("p",null,"The npm, pypi and maven packages contain the contract artifacts for the contracts already deployed in different networks\n(such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Production"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Rinkeby"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mumbai"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Testing"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"Spree"),").\nThe docker image generated contains the contracts and script ready to be used to deploy the contracts to a network.\nIt is used for deploying the contracts in the local network ",(0,l.kt)("inlineCode",{parentName:"p"},"Spree")," in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/tools"},"nevermined-io/tools")),(0,l.kt)("p",null,"Once the new version is tagged and released, you can edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"Releases")," section of GitHub with the information and\nchanges about the new version (in the future, these will come from the changelog):"),(0,l.kt)("h2",{id:"audit"},"Audit"),(0,l.kt)("p",null,"To check or document that all transactions have been approved in the multi sig wallet you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn audit:rinkeby"),"\nto get a list of all the current transactions and their current status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"}," Wallet: 0x24EB26D4042a2AB576E7E39b87c3f33f276AeF92\n\n Transaction ID: 64\n Destination: 0xfA16d26e9F4fffC6e40963B281a0bB08C31ed40C\n Contract: EscrowAccessSecretStoreTemplate\n Data is `upgradeTo` call: true\n Confirmed from: 0x7A13E1aD23546c9b804aDFd13e9AcB184EfCAF58\n Executed: false\n")))}m.isMDXComponent=!0}}]);