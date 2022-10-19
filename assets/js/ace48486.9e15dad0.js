"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},l),{},{components:a})):n.createElement(m,s({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:4,description:"What information is available in Nevermined, and how to find it"},s="Searching information in Nevermined",o={unversionedId:"tutorials/searching-information",id:"tutorials/searching-information",title:"Searching information in Nevermined",description:"What information is available in Nevermined, and how to find it",source:"@site/docs/tutorials/searching-information.md",sourceDirName:"tutorials",slug:"/tutorials/searching-information",permalink:"/docs/tutorials/searching-information",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/tutorials/searching-information.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"What information is available in Nevermined, and how to find it"},sidebar:"tutorialSidebar",previous:{title:"How to query assets with Catalog",permalink:"/docs/tutorials/query-assets-catalog"},next:{title:"Connecting to Nevermined from the command line",permalink:"/docs/tutorials/connect-cli"}},c={},d=[{value:"Off-chain information: Metadata",id:"off-chain-information-metadata",level:2},{value:"Search by asset name",id:"search-by-asset-name",level:3},{value:"Search by additional information",id:"search-by-additional-information",level:3},{value:"Search by price range",id:"search-by-price-range",level:3},{value:"Sorting and paginating",id:"sorting-and-paginating",level:3},{value:"On-chain information: Smart Contracts",id:"on-chain-information-smart-contracts",level:2},{value:"On-chain information of an asset published",id:"on-chain-information-of-an-asset-published",level:3},{value:"Assets published for a user",id:"assets-published-for-a-user",level:3},{value:"Assets purchased by a user",id:"assets-purchased-by-a-user",level:3},{value:"Downloads from a user",id:"downloads-from-a-user",level:3},{value:"Transactions associated to an asset",id:"transactions-associated-to-an-asset",level:3}],l={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"searching-information-in-nevermined"},"Searching information in Nevermined"),(0,r.kt)("p",null,'Nevermined allows the creation of networks where multiple use cases can be built. The modular architecture of Nevermined allows that using the deployment of Smart Contracts, to have independent "domains" or "applications" using the same contracts.'),(0,r.kt)("p",null,"As we detailed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/nevermined-data"},"Nevermined Data page")," there is different kind of information generated in a Nevermined about the assets metadata and all the transactions happening in the Smart Contracts."),(0,r.kt)("p",null,"This information can be provided by the Marketplace API (off-chain Metadata) or the Graph (events emitted by Nevermined Contracts)."),(0,r.kt)("p",null,"Here you can find a list of the most relevant search queries you can run:"),(0,r.kt)("h2",{id:"off-chain-information-metadata"},"Off-chain information: Metadata"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../architecture/marketplace-api/"},"Marketplace API")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://elastic.co/"},"Elastic Search")," to store the assets Metadata and some other Marketplace information (like bookmarks, user profiles, etc). The Marketplace API exposes an interface that allows to send complex queries using the Elastic search native format."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find a full reference of the Elastic Search search options in their ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.13/search-search.html"},"search documentation"),".")),(0,r.kt)("p",null,"All the Metadata search queries can be sent using ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP POST")," to the endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://marketplace-api/api/v1/metadata/assets/ddo/query")),(0,r.kt)("p",null,"The following queries can be sent to the ",(0,r.kt)("a",{parentName:"p",href:"../architecture/marketplace-api/"},"Marketplace API"),":"),(0,r.kt)("h3",{id:"search-by-asset-name"},"Search by asset name"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../architecture/specs/Spec-METADATA#main-attributes"},"main metadata attributes")," (like name, author, description, etc) are under the ",(0,r.kt)("inlineCode",{parentName:"p"},"service.attributes.main")," object in the DDO/Metadata object. So for searching all the assets with a certain name you can run a query like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "query_string": { \n        "query": "*My Search Query*", \n        "fields": ["service.attributes.main.name"] \n    }\n}\n')),(0,r.kt)("h3",{id:"search-by-additional-information"},"Search by additional information"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-METADATA#additional-attributes"},"Additional Information")," section is an entry into the DDO/Metadata document where users can specify a free range of attributes. They can be domain specific, and the the marketplace can be used to search accross them. Things like ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "match": {\n      "service.attributes.additionalInformation.categories": "general"\n    }\n}\n')),(0,r.kt)("h3",{id:"search-by-price-range"},"Search by price range"),(0,r.kt)("p",null,"The price is an attribute that is included in each of the services exposed in an asset. It is included as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"service.attributes.main")," object. So to run a search using a range of prices could be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "range": {\n        "service.attributes.main.price": {\n            "gte": "0",\n            "lte": "500"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"sorting-and-paginating"},"Sorting and paginating"),(0,r.kt)("p",null,"All the search queries can include sorting and pagination attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "query_string": { \n        "query": "*My Search Query*", \n        "fields": ["service.attributes.main.name"] \n    },\n    "offset": "100",\n    "page": "1",\n    "sort": {\n        "created": "asc"\n    }\n')),(0,r.kt)("h2",{id:"on-chain-information-smart-contracts"},"On-chain information: Smart Contracts"),(0,r.kt)("p",null,"The Nevermined Smart Contracts emit events when something is happening (typically a change of internal state). We developed some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/subgraph/"},"Nevermined Subgraphs")," that integrated with the ",(0,r.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph Protocol")," allows the indexing of them for further searching. The different Nevermined Subgraphs are deployed in all the Nevermined public deployments. The Nevermined Subgraps expose a GraphQL interface that allows to send complex queries to fetch any information about what's happening in the Smart Contracts side."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find a full reference of the The Graph search options in their ",(0,r.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/en/querying/querying-from-an-application/"},"search documentation"),".")),(0,r.kt)("p",null,"All the Metadata search queries can be sent to the base endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.thegraph.com/subgraphs/name/nevermined-io/"),". The rest of the subgraph URL depends on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The deployment tag name (i.e: ",(0,r.kt)("inlineCode",{parentName:"li"},"public"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"common"),", etc)"),(0,r.kt)("li",{parentName:"ul"},"The network name (i.e: ",(0,r.kt)("inlineCode",{parentName:"li"},"mumbai"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"matic"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet"),", etc)"),(0,r.kt)("li",{parentName:"ul"},"The contracts major version (i.e: ",(0,r.kt)("inlineCode",{parentName:"li"},"v2"),")"),(0,r.kt)("li",{parentName:"ul"},"The subgraph name coming from contract name (i.e: ",(0,r.kt)("inlineCode",{parentName:"li"},"didregistry"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"whitelistingcondition"),")")),(0,r.kt)("p",null,"Taking that into accout it can result in urls like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Events emitted by the ",(0,r.kt)("inlineCode",{parentName:"li"},"DIDRegistry")," Smart Contract on ",(0,r.kt)("inlineCode",{parentName:"li"},"mumbai")," network for ",(0,r.kt)("inlineCode",{parentName:"li"},"v2"),": ",(0,r.kt)("a",{parentName:"li",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry"},"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry")),(0,r.kt)("li",{parentName:"ul"},"Events emitted by the ",(0,r.kt)("inlineCode",{parentName:"li"},"NFTAccessCondition")," Smart Contract on ",(0,r.kt)("inlineCode",{parentName:"li"},"matic")," network for ",(0,r.kt)("inlineCode",{parentName:"li"},"v2"),": ",(0,r.kt)("a",{parentName:"li",href:"https://thegraph.com/hosted-service/subgraph/nevermined-io/publicmaticv2nftaccesscondition"},"https://thegraph.com/hosted-service/subgraph/nevermined-io/publicmaticv2nftaccesscondition"))),(0,r.kt)("p",null,"Here you can find a list of the most relevant queries you can send to the Nevermined subgraphs:"),(0,r.kt)("h3",{id:"on-chain-information-of-an-asset-published"},"On-chain information of an asset published"),(0,r.kt)("p",null,"Here you can see the ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry/graphql?query=query+AssetRegistered+%7B++%0A++didattributeRegistereds%28%0A++++where%3A+%7B%0A++++++_did%3A+%220xefdaacb570370f87f9a850c3e91e106e3ec17acee582bbba47cc03e7554616e5%22%0A++++%7D%0A++%29%7B++++%0A++++++id%0A++++++_did%0A++++++_owner%0A++++++_checksum%2C%0A++++++_value%0A++++++_lastUpdatedBy%2C%0A++++++_blockNumberUpdated++++%0A++%7D%0A%7D&operationName=AssetRegistered"},"AssetRegistered query")," about all the on-chain data emitted when an asset is registered:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query AssetRegistered {  \n  didattributeRegistereds(\n    where: {\n      _did: "0xefdaacb570370f87f9a850c3e91e106e3ec17acee582bbba47cc03e7554616e5"\n    }\n  ){    \n      id\n      _did\n      _owner\n      _checksum,\n      _value\n      _lastUpdatedBy,\n      _blockNumberUpdated    \n  }\n}\n')),(0,r.kt)("h3",{id:"assets-published-for-a-user"},"Assets published for a user"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry/graphql?query=query+UserPublishedAssets+%7B++%0A++didattributeRegistereds%28%0A++++where%3A+%7B%0A++++++_owner%3A+%220x322718d8defb7a58eddab138dededc582efa617f%22%0A++++%7D%0A++%29%7B++++%0A++++++id%0A++++++_did%0A++++++_owner%0A++++++_checksum%2C%0A++++++_value%0A++++++_lastUpdatedBy%2C%0A++++++_blockNumberUpdated++++%0A++%7D%0A%7D&operationName=PublishedEvents"},"UserPublishedAssets query")," you can see all the information of assets published by a user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query UserPublishedAssets {  \n  didattributeRegistereds(\n    where: {\n      _owner: "0x322718d8defb7a58eddab138dededc582efa617f"\n    }\n  ){    \n      id\n      _did\n      _owner\n      _checksum,\n      _value\n      _lastUpdatedBy,\n      _blockNumberUpdated    \n  }\n}\n')),(0,r.kt)("h3",{id:"assets-purchased-by-a-user"},"Assets purchased by a user"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2accesscondition/graphql?query=query+UserPurchasedAssets+%7B++%0A++fulfilleds%28%0A++++where%3A+%7B%0A++++++_grantee%3A+%220x827c6546ca48ee9a33efee3342292e61c6ea6507%22%0A++++%7D%0A++%29%7B++++%0A++++++id%0A++++%09_agreementId%0A++++%09_documentId%0A++++%09_grantee%0A++++%09_conditionId%0A++%7D%0A%7D&operationName=PublishedEvents"},"UserPurchasedAssets query")," you can see all the information of assets purchased by a user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query UserPurchasedAssets {  \n  fulfilleds(\n    where: {\n      _grantee: "0x827c6546ca48ee9a33efee3342292e61c6ea6507"\n    }\n  ){    \n      id\n        _agreementId\n        _documentId\n        _grantee\n        _conditionId\n  }\n}\n')),(0,r.kt)("h3",{id:"downloads-from-a-user"},"Downloads from a user"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry/graphql?query=query+UserDownloads+%7B++%0A++useds%28%0A++++where%3A+%7B%0A++++++_agentId%3A+%220x827c6546ca48ee9a33efee3342292e61c6ea6507%22%0A++++%7D%0A++%29%7B++++%0A++++++id%0A++++++_did%0A++++++_agentId%0A++++++_activityId%0A++++++provId%0A++++++_attributes%0A++++++_blockNumberUpdated++++%0A++%7D%0A%7D"},"UserDownloads query")," you can see all the assets downloaded for a specific user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query UserDownloads {  \n  useds(\n    where: {\n      _agentId: "0x827c6546ca48ee9a33efee3342292e61c6ea6507"\n    }\n  ){    \n      id\n      _did\n      _agentId\n      _activityId\n      provId\n      _attributes\n      _blockNumberUpdated    \n  }\n}\n')),(0,r.kt)("h3",{id:"transactions-associated-to-an-asset"},"Transactions associated to an asset"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/publicmumbaiv2didregistry/graphql?query=query+AssetProvenance+%7B++%0A++provenanceAttributeRegistereds%28%0A++++where%3A+%7B%0A++++++_did%3A+%220xefdaacb570370f87f9a850c3e91e106e3ec17acee582bbba47cc03e7554616e5%22%0A++++%7D%0A++%29%7B++++%0A++++++id%0A++++++_did%0A++++++_agentId%0A++++++_activityId%0A++++++_attributes%0A++++++_blockNumberUpdated++++%0A++%7D%0A%7D"},"AssetProvenance query")," you can get all the events associated with an asset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query AssetProvenance {  \n  provenanceAttributeRegistereds(\n    where: {\n      _did: "0xefdaacb570370f87f9a850c3e91e106e3ec17acee582bbba47cc03e7554616e5"\n    }\n  ){    \n      id\n      _did\n      _agentId\n      _activityId\n      _attributes\n      _blockNumberUpdated    \n  }\n}\n')))}p.isMDXComponent=!0}}]);