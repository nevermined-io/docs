"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5177],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:5},p="Upgrade Process",s={unversionedId:"architecture/contracts/Upgrades",id:"architecture/contracts/Upgrades",title:"Upgrade Process",description:"This documents explains in detail how nevermined-contracts should be",source:"@site/docs/architecture/contracts/Upgrades.md",sourceDirName:"architecture/contracts",slug:"/architecture/contracts/Upgrades",permalink:"/docs/architecture/contracts/Upgrades",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/contracts/Upgrades.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Release Process",permalink:"/docs/architecture/contracts/ReleaseProcess"},next:{title:"Solidity API",permalink:"/docs/architecture/contracts/"}},c={},d=[{value:"Quickstart",id:"quickstart",level:2},{value:"Details",id:"details",level:2},{value:"Roles",id:"roles",level:2},{value:"Deploy &amp; Upgrade",id:"deploy--upgrade",level:2},{value:"1. Configuration",id:"1-configuration",level:3},{value:"2. Preparation",id:"2-preparation",level:3},{value:"3. Deploy &amp; Upgrade",id:"3-deploy--upgrade",level:3},{value:"Nile",id:"nile",level:4},{value:"Deploy the whole application",id:"deploy-the-whole-application",level:5},{value:"Deploy a single contracts",id:"deploy-a-single-contracts",level:5},{value:"Upgrade the whole application",id:"upgrade-the-whole-application",level:5},{value:"Upgrade a single contract",id:"upgrade-a-single-contract",level:5},{value:"Persist artifacts",id:"persist-artifacts",level:5},{value:"Kovan",id:"kovan",level:4},{value:"Deploy the whole application",id:"deploy-the-whole-application-1",level:5},{value:"Deploy a single contracts",id:"deploy-a-single-contracts-1",level:5},{value:"Upgrade the whole application",id:"upgrade-the-whole-application-1",level:5},{value:"Upgrade a single contract",id:"upgrade-a-single-contract-1",level:5},{value:"Persist artifacts",id:"persist-artifacts-1",level:5},{value:"4. Approve Upgrade(s)",id:"4-approve-upgrades",level:3},{value:"5. Audit Contracts",id:"5-audit-contracts",level:3},{value:"6. Documentation",id:"6-documentation",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"upgrade-process"},"Upgrade Process"),(0,l.kt)("p",null,"This documents explains in detail how ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contracts"},"nevermined-contracts")," should be\ndeployed using zeppelinOS and how the contracts can be upgraded. The latest section describes the test procedure."),(0,l.kt)("h2",{id:"quickstart"},"Quickstart"),(0,l.kt)("p",null,"The first step to work with ",(0,l.kt)("inlineCode",{parentName:"p"},"zos")," is to install dependencies then initialize the project. Then compile contracts and add contracts to the project.\nFinally push the contracts into the network and create the  upgradable instances. Once the contracts are deployed they can be tested and upgraded.\nAlso we change the proxy administrator to a MultiSignature wallet to approve upgrades.\nWe are going to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contract-tools"},"Nevermined Contract Tools")," in order to perform\nany future deployments/upgrades."),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("p",null,"Here we provide more details into each step of the initial deploy and the approach of upgradeability and governance."),(0,l.kt)("h2",{id:"roles"},"Roles"),(0,l.kt)("p",null,"Before going into more details about the deployment. We should differentiate between different roles in the system which\ngovern the upgradeability in nevermined-contracts."),(0,l.kt)("p",null,"Roles are defined as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployer: represented as accounts[0]\nupgrader: represented as accounts[1]\ngovernor: represented as accounts[1]\nupgraderWallet: represented as the upgrader from wallets.json\nownerWallet: represented as the owner from wallets.json\ngovernorWallet: represented as the owner from wallets.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Deployer"),": Can be any account. It is used for deploying the initial ",(0,l.kt)("inlineCode",{parentName:"p"},"proxy contracts")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"logic contracts"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Upgrader"),": Has to be an ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader")," multi sig wallet. It is used for issuing upgrade requests against the upgrader multi sig wallet.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Governor"),": Has to have the ",(0,l.kt)("inlineCode",{parentName:"p"},"GOVERNOR_ROLE")," in the contracts. It is used for issuing upgrade config requests.")),(0,l.kt)("li",{parentName:"ul"}),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"UpgraderWallet"),": One instance of the multi sig wallet, defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader"),". This wallet will be assigned as zos admin and is required to do upgrades.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"OwnerWallet"),": One instance of the multi sig wallet, defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"owner"),". This wallet will be assigned as the owner of all the contracts. It can be used to call specific functions in the contracts ie. change the configuration.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"GovernorWallet"),": One instance of the multi sig wallet, defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"governor"),". This wallet will be assigned as zos admin and is required to do config updates in a Nevermined deployment."))),(0,l.kt)("h2",{id:"deploy--upgrade"},"Deploy & Upgrade"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"zos")," does not support migrations, hence all the initial configuration should be performed with\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contract-tools"},"Nevermined Contract Tools"),".\nContract constructors are ignored so the initial setup of the contract should be made in a\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.zeppelinos.org/docs/advanced.html#initializers-vs-constructors"},(0,l.kt)("inlineCode",{parentName:"a"},"initialize")),"\nfunction that will be executed only once after the initial deployment."),(0,l.kt)("h3",{id:"1-configuration"},"1. Configuration"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contract-tools"},"Nevermined Contract Tools")," checks the ",(0,l.kt)("inlineCode",{parentName:"p"},"contracts.json")," in order to\ndetect the current contracts that are going to be deployed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "ConditionStoreManager",\n  "TemplateStoreManager",\n  "AgreementStoreManager",\n  "SignCondition",\n  "HashLockCondition",\n  "LockRewardCondition",\n  "NFTHolderCondition",\n  "AccessCondition",\n  "EscrowReward",\n  "EscrowAccessSecretStoreTemplate",\n  "NFTAccessTemplate",\n  "DIDRegistry"\n]\n')),(0,l.kt)("p",null,"Moreover for each network, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contract-tools"},"Nevermined Contract Tools")," needs to detect\nthe roles and their addresses from a pre-defined wallets config file.\nThe following configuration should be an example for ",(0,l.kt)("inlineCode",{parentName:"p"},"wallets-<NETWORK_NAME>.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "upgrader",\n        "address": "0x24eb26d4042a2ab576e7e39b87c3f33f276aef92"\n    },\n    {\n        "name": "owner",\n        "address": "0xd02d68c62401472ce35ba3c7e505deae62db2b8b"\n    },\n    {\n        "name": "governor",\n        "address": "0xeeff68c62401472ce35ba3c7e505deae62db2b8b"\n    }\n]\n')),(0,l.kt)("h3",{id:"2-preparation"},"2. Preparation"),(0,l.kt)("p",null,"The following commands clean, install dependencies and compile the contracts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ yarn clean #to clean the work dir\n$ yarn #install dependencies\n$ yarn compile #to compile the contracts\n")),(0,l.kt)("h3",{id:"3-deploy--upgrade"},"3. Deploy & Upgrade"),(0,l.kt)("p",null,"The following steps shows how to perform contracts deployment and upgrade on ",(0,l.kt)("inlineCode",{parentName:"p"},"Rinkeby")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Kovan")," networks."),(0,l.kt)("h4",{id:"nile"},"Nile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy the wallet file for ",(0,l.kt)("inlineCode",{parentName:"li"},"rinkeby"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cp wallets_rinkeby.json wallets.json")))),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export MNEMONIC=<your staging mnemonic>"),". You will find them in the password manager.")),(0,l.kt)("h5",{id:"deploy-the-whole-application"},"Deploy the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:rinkeby"))),(0,l.kt)("h5",{id:"deploy-a-single-contracts"},"Deploy a single contracts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy a single contract you need to specify the contracts to deploy as a parameter to the deploy script:\nie. ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:rinkeby -- NeverminedToken Dispenser"),"will deploy ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Dispenser"),".")),(0,l.kt)("h5",{id:"upgrade-the-whole-application"},"Upgrade the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:rinkeby"))),(0,l.kt)("h5",{id:"upgrade-a-single-contract"},"Upgrade a single contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade a single contract run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:rinkeby -- NeverminedToken"),". For upgrading the ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," contract.")),(0,l.kt)("h5",{id:"persist-artifacts"},"Persist artifacts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit all changes in ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts/*.rinkeby.json"))),(0,l.kt)("h4",{id:"kovan"},"Kovan"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy the wallet file for ",(0,l.kt)("inlineCode",{parentName:"li"},"kovan")," > ",(0,l.kt)("inlineCode",{parentName:"li"},"cp wallets_kovan.json wallets.json")),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export MNEMONIC=<your kovan mnemonic>"),". You will find them in the password manager."),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"export INFURA_TOKEN=<your infura token>"),". You will get it from ",(0,l.kt)("inlineCode",{parentName:"li"},"infura"),".")),(0,l.kt)("h5",{id:"deploy-the-whole-application-1"},"Deploy the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy all the contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:kovan"))),(0,l.kt)("h5",{id:"deploy-a-single-contracts-1"},"Deploy a single contracts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To deploy a single contracts you need to specify the contracts to deploy as a parameter to the deploy script: ie. ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn deploy:kovan -- NeverminedToken Dispenser")," will deploy ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Dispenser"),".")),(0,l.kt)("h5",{id:"upgrade-the-whole-application-1"},"Upgrade the whole application"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade all contracts run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:kovan"))),(0,l.kt)("h5",{id:"upgrade-a-single-contract-1"},"Upgrade a single contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To upgrade a single contract run ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn upgrade:kovan -- NeverminedToken"),". For upgrading the ",(0,l.kt)("inlineCode",{parentName:"li"},"NeverminedToken")," contract.")),(0,l.kt)("h5",{id:"persist-artifacts-1"},"Persist artifacts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit all changes in ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts/*.kovan.json"))),(0,l.kt)("h3",{id:"4-approve-upgrades"},"4. Approve Upgrade(s)"),(0,l.kt)("p",null,"All upgrades of the contracts have to be approved by the ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrader")," wallet configured in the ",(0,l.kt)("inlineCode",{parentName:"p"},"wallets.json")," file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"go to ",(0,l.kt)("a",{parentName:"li",href:"https://wallet.gnosis.pm"},"https://wallet.gnosis.pm")),(0,l.kt)("li",{parentName:"ul"},"Load ",(0,l.kt)("inlineCode",{parentName:"li"},"upgrader")," wallet"),(0,l.kt)("li",{parentName:"ul"},"Select an Ethereum Account that is an ",(0,l.kt)("inlineCode",{parentName:"li"},"owner")," of the multi sig wallet, but not the one who issued the upgrade request. This can be done in the following ways:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Connect to a local Blockchain node that holds the private key."),(0,l.kt)("li",{parentName:"ul"},"Connect to MetaMask and select the owner account from the multi sig wallet."),(0,l.kt)("li",{parentName:"ul"},"Connect a hardware wallet like ledger or trezor."))),(0,l.kt)("li",{parentName:"ul"},"Select the transaction you want to confirm (the upgrade script will tell you which transactions have to be approved in which wallets)"),(0,l.kt)("li",{parentName:"ul"},"Click Confirm")),(0,l.kt)("h3",{id:"5-audit-contracts"},"5. Audit Contracts"),(0,l.kt)("p",null,"To check or document that all transactions have been approved in the multi sig wallet you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn audit:rinkeby")," to get a list of all the current transactions and their current status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"}," Wallet: 0x24EB26D4042a2AB576E7E39b87c3f33f276AeF92\n\n Transaction ID: 64\n Destination: 0xfA16d26e9F4fffC6e40963B281a0bB08C31ed40C\n Contract: EscrowAccessSecretStoreTemplate\n Data is `upgradeTo` call: true\n Confirmed from: 0x7A13E1aD23546c9b804aDFd13e9AcB184EfCAF58\n Executed: false\n")),(0,l.kt)("h3",{id:"6-documentation"},"6. Documentation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the addresses in the ",(0,l.kt)("inlineCode",{parentName:"li"},"README.md")),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("inlineCode",{parentName:"li"},"node ./scripts/contracts/get-addresses.js <network name>"))),(0,l.kt)("p",null,"It will output the current proxy addresses in the ",(0,l.kt)("inlineCode",{parentName:"p"},"README")," friendly format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"| AccessCondition        | v0.9.0 | 0x45DE141F8Efc355F1451a102FB6225F1EDd2921d |\n| AgreementStoreManager             | v0.9.0 | 0x62f84700b1A0ea6Bfb505aDC3c0286B7944D247C |\n| ConditionStoreManager             | v0.9.0 | 0x39b0AA775496C5ebf26f3B81C9ed1843f09eE466 |\n| DIDRegistry                       | v0.9.0 | 0x4A0f7F763B1A7937aED21D63b2A78adc89c5Db23 |\n| DIDRegistryLibrary                | v0.9.0 | 0x3B3504908Db36f5D5f07CD420ee2BBBbDfB674cF |\n| Dispenser                         | v0.9.0 | 0x865396b7ddc58C693db7FCAD1168E3BD95Fe3368 |\n....\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy this to the ",(0,l.kt)("inlineCode",{parentName:"li"},"README.md"))))}m.isMDXComponent=!0}}]);