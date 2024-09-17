"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,description:"Decentralized Identifiers"},o="Decentralized Identifiers",l={unversionedId:"architecture/specs/Spec-DID",id:"architecture/specs/Spec-DID",title:"Decentralized Identifiers",description:"Decentralized Identifiers",source:"@site/docs/architecture/specs/Spec-DID.md",sourceDirName:"architecture/specs",slug:"/architecture/specs/Spec-DID",permalink:"/docs/architecture/specs/Spec-DID",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/specs/Spec-DID.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Decentralized Identifiers"},sidebar:"tutorialSidebar",previous:{title:"Specifications",permalink:"/docs/architecture/specs/"},next:{title:"Metadata Ontology",permalink:"/docs/architecture/specs/Spec-METADATA"}},s={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Proposed Solution",id:"proposed-solution",level:2},{value:"Decentralized IDs (DIDs)",id:"decentralized-ids-dids",level:3},{value:"Publishing and Consumption Flow",id:"publishing-and-consumption-flow",level:3},{value:"DID Documents (DDOs)",id:"did-documents-ddos",level:3},{value:"Nevermined internal attributes",id:"nevermined-internal-attributes",level:4},{value:"User Id",id:"user-id",level:5},{value:"Application Id",id:"application-id",level:5},{value:"Versions",id:"versions",level:5},{value:"Nevermined Config section Example",id:"nevermined-config-section-example",level:5},{value:"DDO Services",id:"ddo-services",level:4},{value:"Integrity",id:"integrity",level:3},{value:"How to compute the integrity checksum",id:"how-to-compute-the-integrity-checksum",level:4},{value:"DID Document Proof",id:"did-document-proof",level:4},{value:"Length of a DID",id:"length-of-a-did",level:4},{value:"How to compute a DID",id:"how-to-compute-a-did",level:4},{value:"Registry",id:"registry",level:3},{value:"Resolver",id:"resolver",level:3},{value:"References",id:"references",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decentralized-identifiers"},"Decentralized Identifiers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shortname:      DID\nname:           Decentralized Identifiers\ntype:           Standard\nstatus:         Valid\nversion:        0.4\neditor:         Aitor Argomaniz <aitor@nevermined.io>\ncontributors:\n")),(0,a.kt)("p",null,"This specification is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-spec/"},"W3C DID specification"),", which was at version\n0.11 as of August 2018."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The main motivations of this SPEC are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Design a solution to extend the current architecture to use ",(0,a.kt)("strong",{parentName:"li"},"Decentralized Identifiers (DIDs)")," and ",(0,a.kt)("strong",{parentName:"li"},"DID Documents\n(DDOs)")),(0,a.kt)("li",{parentName:"ul"},"Understand how to register information on-chain with off-chain integrity associated"),(0,a.kt)("li",{parentName:"ul"},"Understand how to resolve DIDs into DDOs"),(0,a.kt)("li",{parentName:"ul"},"Design a solution facilitating alignment of on-chain and off-chain information"),(0,a.kt)("li",{parentName:"ul"},"Establishing the mechanism to know if the DDO associated with a DID was modified"),(0,a.kt)("li",{parentName:"ul"},"Defining the common mechanisms, interfaces and APIs to implemented the designed solution"),(0,a.kt)("li",{parentName:"ul"},"Define how Nevermined assets can be modeled with a DID/DDO data model"),(0,a.kt)("li",{parentName:"ul"},"Understand how DID hubs are formed, and how they integrate a business and storage layer")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("p",null,"Requirements are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The DID resolving capabilities MUST be exposed in the client libraries, enabling to resolve a DDO directly in a\ntotally transparent way"),(0,a.kt)("li",{parentName:"ul"},"ASSETS are DATA objects describing RESOURCES under control of a PUBLISHER"),(0,a.kt)("li",{parentName:"ul"},"DLT stores on-chain only the essential information about ASSETS"),(0,a.kt)("li",{parentName:"ul"},"PROVIDERS store the ASSET metadata off-chain"),(0,a.kt)("li",{parentName:"ul"},"DLT doesn't store any ASSET metadata"),(0,a.kt)("li",{parentName:"ul"},"Nevermined doesn't store ASSET contents (e.g. files)"),(0,a.kt)("li",{parentName:"ul"},"An ASSET is modeled in Nevermined as on-chain information stored in the DLT and metadata stored in METADATA API"),(0,a.kt)("li",{parentName:"ul"},"ASSETS on-chain information only can be modified by OWNERS or DELEGATED USERS"),(0,a.kt)("li",{parentName:"ul"},"ASSETS can be resolved using a Decentralized ID (DID) included on-chain and off-chain"),(0,a.kt)("li",{parentName:"ul"},"A DID Document (DDO) should include the ASSET metadata"),(0,a.kt)("li",{parentName:"ul"},"Any kind of object registered in Nevermined MUST have a DID allowing one to uniquely identify that object in the system"),(0,a.kt)("li",{parentName:"ul"},"ASSET DDO (and the metadata included as part of the DDO) is associated to the ASSET information stored on-chain using\na common DID"),(0,a.kt)("li",{parentName:"ul"},"A DID can be resolved to get access to a DDO"),(0,a.kt)("li",{parentName:"ul"},"ASSET DDOs can be updated without updating the on-chain information"),(0,a.kt)("li",{parentName:"ul"},"ASSET information stored in the DLT will include a checksum attribute"),(0,a.kt)("li",{parentName:"ul"},"The ASSET on-chain checksum attribute SHOULD include a one-way HASH calculated using the DDO content"),(0,a.kt)("li",{parentName:"ul"},"After the DDO resolving, the DDO HASH can be calculated off-chain to validate if the on-chain and off-chain\ninformation is aligned"),(0,a.kt)("li",{parentName:"ul"},"A HASH not matching with the checksum on-chain means the DDO was modified without the on-chain update"),(0,a.kt)("li",{parentName:"ul"},"The function to calculate the hash MUST BE standard")),(0,a.kt)("h2",{id:"proposed-solution"},"Proposed Solution"),(0,a.kt)("h3",{id:"decentralized-ids-dids"},"Decentralized IDs (DIDs)"),(0,a.kt)("p",null,"A DID is a unique identifier that can be resolved or de-referenced to a standard resource describing the entity\n(a DID Document or DDO).\nIf we apply this to Nevermined, the DID would be the unique identifier of an object represented in Nevermined\n(i.e. the Asset ID of an ASSET or the Actor ID of a USER).\nThe DDO SHOULD include the METADATA information associated with this object.\nThe DDO is stored off-chain in Nevermined."),(0,a.kt)("p",null,"In Nevermined, a DID is a string that looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea\n")),(0,a.kt)("p",null,"which follows ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme"},"the generic DID scheme"),".\nDetails about how to compute the DID are given below."),(0,a.kt)("h3",{id:"publishing-and-consumption-flow"},"Publishing and Consumption Flow"),(0,a.kt)("p",null,"Here you have the complete flow using as example a new ASSET:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DID Resolver",src:n(7008).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"Steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A Data Publisher, using the Smart Contracts, register the new Resource (ie. ASSET) providing the DID and the DID of the\nProvider acting as Public service returning the DDO of the Resource (ASSET)"),(0,a.kt)("li",{parentName:"ol"},"The DLT register the Resource using the Service Agreement Smart Contract and after of that register the identity\nusing the DidRegistry Smart Contract. In this point, the attribute is raised as a new event"),(0,a.kt)("li",{parentName:"ol"},"The Data Publisher publishes the DDO in the Metadata api"),(0,a.kt)("li",{parentName:"ol"},"A Data Consumer (it could be a frontend application or a backend software), having a DID and using a client library\n(Python, Javascript, Java, etc) get the ",(0,a.kt)("strong",{parentName:"li"},"service-ddo")," attribute associated to the DID directly from the Smart\nContracts"),(0,a.kt)("li",{parentName:"ol"},"The Data Consumer, using the provider public url, query directly to the provider passing the DID to obtain the DDO")),(0,a.kt)("h3",{id:"did-documents-ddos"},"DID Documents (DDOs)"),(0,a.kt)("p",null,"If a DID is the index key in a key-value pair, then the DID Document is the value to which the index key points.\nThe combination of a DID and its associated DID Document forms the root record for a decentralized identifier."),(0,a.kt)("p",null,"A DDO document is composed of standard DDO attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"created")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"publicKey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proof")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifiableCredential")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"service")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_nvm"))),(0,a.kt)("p",null,"Asset metadata can be included as one of the objects inside the ",(0,a.kt)("inlineCode",{parentName:"p"},'"service"')," array, with type ",(0,a.kt)("inlineCode",{parentName:"p"},'"metadata"'),"."),(0,a.kt)("h4",{id:"nevermined-internal-attributes"},"Nevermined internal attributes"),(0,a.kt)("p",null,"Nevermined registers some internal attributes in the asset metadata. They allow to store information that makes easier to understand the meaning of an asset, their life-cycle and where they can be used. The internal attributes are recorded under the ",(0,a.kt)("inlineCode",{parentName:"p"},"_nvm")," section located at the root of the DDO. The ",(0,a.kt)("inlineCode",{parentName:"p"},"_nvm")," section is internal to Nevermined and cannot be changed by the user."),(0,a.kt)("p",null,"The attributes included at that section are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userId")," - The unique identifier of the user owning the DDO. This attribute will be used to authorize metadata changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appId")," - The unique identifier of the application where this DDO has a meaning."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"versions")," - Array representing the list of changes made to the DDO.")),(0,a.kt)("h5",{id:"user-id"},"User Id"),(0,a.kt)("p",null,"It's stored under the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"userId"),". It's the unique identifier representing an user. The user authorization of Metadata documents is built around that attribute and only the user authenticated with that ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," will be able to modify the metadata"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," will be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," storing an identifier in ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "dff40170-37fc-11ed-be5b-9984d9f9ec35"\n}\n')),(0,a.kt)("h5",{id:"application-id"},"Application Id"),(0,a.kt)("p",null,"It's stored under the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"appId"),". The application Id identifies an unique application. It helps to refer to the specific domain/application where the DDO belongs to. Specifying that attribute will allow to have the same metadata storage providing service for different applications, and each application will be able to filter by that ",(0,a.kt)("inlineCode",{parentName:"p"},"appId"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"appId")," will be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," storing an identifier in ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appId": "acde070d-8c4c-4f0d-9d8a-162843c10333"\n}\n')),(0,a.kt)("h5",{id:"versions"},"Versions"),(0,a.kt)("p",null,"It's stored under the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"versions"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"versions")," list stores the reference to all the changes done to the Metadata document."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"versions")," attribute will be an array of objects storing the sorted list of all the different changes."),(0,a.kt)("p",null,"Each version also can contain the location of each DDO version in a decentralized immutable storage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"immutableUrl")," - The unique identifier of the DDO in an immutable storage like Filecoin or IPFS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"immutableBackend")," - The immutable backend where the DDO is store. Can be ",(0,a.kt)("em",{parentName:"li"},"filecoin")," or ",(0,a.kt)("em",{parentName:"li"},"ipfs"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "versions": [\n    {\n      "id": 1,\n      "updated": "2020-01-01T19:13:24Z",\n      "checksum": "89328493849328493284932",\n      "immutableUrl": "cid://QmYYLZuLWye8ERcUPT2jyoEonsj6LmTnD3kqH8mF9Gt6R1",\n      "immutableBackend": "ipfs"\n    },\n    {\n      "id": 2,\n      "updated": "2021-02-21T20:13:24Z",\n      "checksum": "045328094852309483203443",\n      "immutableUrl": "cid://QmPZQvVKr86n7CyRtQVfimghgw7MFNV7a5T26kNKNB9e9p",\n      "immutableBackend": "ipfs"\n    }\n  ]\n}\n')),(0,a.kt)("h5",{id:"nevermined-config-section-example"},"Nevermined Config section Example"),(0,a.kt)("p",null,"Here we put together all the changes included at the ",(0,a.kt)("inlineCode",{parentName:"p"},"_nvm")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://w3id.org/did/v1",\n  "id": "did:nv:0c184915b07b44c888d468be85a9b28253e80070e5294b1aaed81c2f0264e429",\n  "_nvm": {\n    "userId": "dff40170-37fc-11ed-be5b-9984d9f9ec35",\n    "appId": "acde070d-8c4c-4f0d-9d8a-162843c10333",\n    "versions": [\n      {\n        "id": 1,\n        "updated": "2020-01-01T19:13:24Z",\n        "checksum": "89328493849328493284932",\n        "immutableUrl": "cid://QmYYLZuLWye8ERcUPT2jyoEonsj6LmTnD3kqH8mF9Gt6R1",\n        "immutableBackend": "ipfs"\n      },\n      {\n        "id": 2,\n        "updated": "2021-02-21T20:13:24Z",\n        "checksum": "045328094852309483203443",\n        "immutableUrl": "cid://QmPZQvVKr86n7CyRtQVfimghgw7MFNV7a5T26kNKNB9e9p",\n        "immutableBackend": "ipfs"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h4",{id:"ddo-services"},"DDO Services"),(0,a.kt)("p",null,"Each type of asset (dataset, algorithm, workflow, etc, ..) typically will have associated different kind of services.\nThere are 2 type of services that are commonly added to all the assets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"metadata - describing the asset"),(0,a.kt)("li",{parentName:"ul"},"provenance - describing the asset provenance")),(0,a.kt)("p",null,"Each service include a ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceEndpoint")," attribute with a URL to the server or document completing that service.\nOptionally, the service can include a ",(0,a.kt)("inlineCode",{parentName:"p"},"immutableServiceEndpoint")," attribute with a URL to a repository/service where\nadditional information is stored in an immutable way (i.e IPFS, Filecoin, Arweave, etc)."),(0,a.kt)("p",null,"Each service is distinguished by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DDO.service.type")," attribute."),(0,a.kt)("p",null,"Each service has an ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," section where all the information related to the service is added.\nAs mandatory content, the attributes section will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," sub-section.\nThis one is important because it must include all the mandatory information that a service has to provide and ",(0,a.kt)("strong",{parentName:"p"},"never"),"\nchange because it is used to calculate the integrity checksum of the service."),(0,a.kt)("p",null,"A part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes.main")," sub-section, other optional sub-sections can be added\n(like: ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes.curation")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes.extra"),") depending on the service type."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"service": [\n  {\n    "index": 0,\n    "type": "metadata",\n    "serviceEndpoint": "https://service/api/v1/metadata/assets/ddo/did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",\n    "immutableServiceEndpoint": "cid://QmVT3wfySvZJqAvkBCyxoz3EvD3yeLqf3cvAssFDpFFXNm",\n    "attributes": {\n      "main": {},\n      "additionalInformation": {},\n      "curation": {}\n    }\n  },\n  {\n    "index": 1,\n    "type": "provenance",\n    "serviceEndpoint": "https://service/api/v1/provenance/assets/ddo/did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",\n    "attributes": {\n      "main": {},\n      "additionalInformation": {}\n    }\n  },\n  {\n    "index": 2,\n    "type": "access",\n    "serviceEndpoint": "https://service/api/v1/access/assets/ddo/did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",\n    "attributes": {\n      "main": {},\n      "additionalInformation": {}\n    }\n  }\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can find a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nevermined-docs/tree/master/architecture/specs/did/examples/ddo-example.json"},"complete example of a DDO"),"."),(0,a.kt)("li",{parentName:"ul"},"You can find a complete reference of the asset metadata in ",(0,a.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-METADATA"},"METADATA SPEC"),"."),(0,a.kt)("li",{parentName:"ul"},"You can find a complete ",(0,a.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-spec/#real-world-example"},"real world example of a DDO"),"\nwith extended services added, as part of the W3C DID spec.")),(0,a.kt)("h3",{id:"integrity"},"Integrity"),(0,a.kt)("p",null,"The Integrity policy for identity and metadata is a sub-specification allowing to validate the\nintegrity of the Metadata associated to an on-chain object (initially an ASSET)."),(0,a.kt)("h4",{id:"how-to-compute-the-integrity-checksum"},"How to compute the integrity checksum"),(0,a.kt)("p",null,"An ASSET in the system is composed by on-chain information maintained by the DLT and off-chain Metadata information\n(DDO) stored by the PROVIDER."),(0,a.kt)("p",null,"Technically a user could update the DDO accessing directly to the off-chain database, modifying attributes\n(e.g. License information, description, etc.) relevant to a previous consumption agreement with an user."),(0,a.kt)("p",null,"The motivation of this is to facilitate a mechanism allowing to the CONSUMER of an object, to validate if the DDO was\nmodified after a previous agreement."),(0,a.kt)("p",null,"This hash composing the ",(0,a.kt)("strong",{parentName:"p"},"integrity checksum")," is calculated in the following way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The complete content of the ",(0,a.kt)("inlineCode",{parentName:"li"},"service[index].attributes.main")," is serialized in a common string"),(0,a.kt)("li",{parentName:"ul"},"The string generated is is Hashed using SHA3-256 algorithm (You might have to convert the string to bytes first.)"),(0,a.kt)("li",{parentName:"ul"},"The hash generated as a result of this process is stored in the ",(0,a.kt)("inlineCode",{parentName:"li"},"proof.checksum[index].checksum")," attribute"),(0,a.kt)("li",{parentName:"ul"},"The previous 3 steps are repeated for every individual service include in the ",(0,a.kt)("inlineCode",{parentName:"li"},"service")," array. The hash generated is\nalways stored in the ",(0,a.kt)("inlineCode",{parentName:"li"},"proof.checksum")," array using as key the ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," of the service computed"),(0,a.kt)("li",{parentName:"ul"},"During the serialization process, the objects to serialize (",(0,a.kt)("inlineCode",{parentName:"li"},"service[index].attributes.main")," are prepared using the\nfollowing process:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The object is sorted alphabetically independently of the existing nested levels"),(0,a.kt)("li",{parentName:"ul"},"In the JSON generated, all the characters between entries are removed (",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\\t"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\\r"),", whitespaces, etc.)"),(0,a.kt)("li",{parentName:"ul"},"As a result must be generated a string of only one line"))),(0,a.kt)("li",{parentName:"ul"},"After hashing, in the DDO, the checksums should be represented as a hex string beginning with ",(0,a.kt)("inlineCode",{parentName:"li"},"0x")," and ending with\n64 hex characters (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"0x52b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3bbc3377"),")"),(0,a.kt)("li",{parentName:"ul"},"After generating each individual checksum the complete ",(0,a.kt)("inlineCode",{parentName:"li"},"proof.checksum")," entry is sorted, serialized and hashed as\npreviously described in the other checksums"),(0,a.kt)("li",{parentName:"ul"},"The final hash generated as a result of hashing the checksums (DID CHECKSUM or DID HASH) will be the ID part of the\nDID (the string after the prefix ",(0,a.kt)("inlineCode",{parentName:"li"},"did:nv:"),")")),(0,a.kt)("p",null,"Because this DID HASH will be stored on-chain and emitted as an event, a validator could use this information to check\nif something changed regarding the initial registration."),(0,a.kt)("h4",{id:"did-document-proof"},"DID Document Proof"),(0,a.kt)("p",null,"A proof on a DID Document is cryptographic proof of the integrity of the DID Document. In the DID Specification the\n",(0,a.kt)("inlineCode",{parentName:"p"},"proof")," attribute is optional.\nWe enforce the usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"proof")," attribute to demonstrate the Owner of an Asset is signing the proof of integrity of\nsome Asset attributes.\nThe information to sign by the owner is the ",(0,a.kt)("strong",{parentName:"p"},"integrity checksum")," defined in the above section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const signature = Sign.signMessage(DID);\n")),(0,a.kt)("p",null,"The DID Document (DDO) SHOULD include the following ",(0,a.kt)("inlineCode",{parentName:"p"},"proof")," information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," - Type of proof, in our case ",(0,a.kt)("inlineCode",{parentName:"li"},'"DDOIntegritySignature"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"created")," - Date and time when the proof was created"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"creator")," - Address of the user providing the proof"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signatureValue")," - Result of the signature given by the creator"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checksum")," - Checksums of the individual services included in the DDO"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"immutableUrl")," - Url to a copy of the DDO in an inmutable repository like IPFS, Arweave, etc.")),(0,a.kt)("p",null,"Here is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"proof")," section to add in the DDO:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"proof": {\n    "type": "DDOIntegritySignature",\n    "created": "2016-02-08T16:02:20Z",\n    "creator": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",\n    "signatureValue": "0xc9eeb2b8106e\u20266abfdc5d1192641b",\n    "immutableUrl": "ipfs://QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A",\n    "checksum": {\n        "0": "0x52b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3bbc3377",\n        "1": "0x999999952b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3"\n    }\n}\n')),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"proof")," information, a third-party with access to the DDO could validate the ",(0,a.kt)("inlineCode",{parentName:"p"},"creator")," signed a specific\nintegrity checksum referring to an Asset."),(0,a.kt)("h4",{id:"length-of-a-did"},"Length of a DID"),(0,a.kt)("p",null,"The length of a DID must be compliant with the underlying storage layer and function calls. Given that decentralized\nvirtual machines make use of contract languages such as Solidity and WASM, it is advised to fit the DID in structures\nsuch as ",(0,a.kt)("inlineCode",{parentName:"p"},"bytes32"),"."),(0,a.kt)("p",null,"It would be nice to store the ",(0,a.kt)("inlineCode",{parentName:"p"},"did:nv:"),' prefix in those 32 bytes, but that means fewer than 32 bytes would be left for\nstoring the rest (25 bytes since "did:nv:" takes 7 bytes if using UTF-8). If the rest is a secure hash, then we need a\n25-byte secure hash, but secure hashes typically have 28, 32 or more bytes, so that won\'t work.'),(0,a.kt)("p",null,"Only the hash value ",(0,a.kt)("em",{parentName:"p"},"needs")," to be stored, not the ",(0,a.kt)("inlineCode",{parentName:"p"},"did:nv:")," prefix, because it should be clear from context that the\nvalue is a Nevermined DID."),(0,a.kt)("h4",{id:"how-to-compute-a-did"},"How to compute a DID"),(0,a.kt)("p",null,"The DID (",(0,a.kt)("inlineCode",{parentName:"p"},"id"),") string begins with ",(0,a.kt)("inlineCode",{parentName:"p"},"did:nv:")," and is followed by a string representation of a bytes32."),(0,a.kt)("p",null,"As is described previously, the DID is calculating doing the Hash (SHA3-256) of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DDO.proof.checksum")," entry"),(0,a.kt)("h3",{id:"registry"},"Registry"),(0,a.kt)("p",null,"To register the different kind of objects can be stored in a ",(0,a.kt)("strong",{parentName:"p"},"simple")," register contract named ",(0,a.kt)("strong",{parentName:"p"},"DidRegistry"),".\nThis DidRegistry can act as generic/flexible way to associate Resources (ie. Assets) to the public providers resolving\nthe DDO (and Metadata included) of those resources."),(0,a.kt)("p",null,"The key of the Identity entity in Nevermined is the ",(0,a.kt)("strong",{parentName:"p"},"DID"),". Each entity will have a unique DID."),(0,a.kt)("p",null,"To resolve the DDO associated to a Resource (Asset), associated to this Resource DID we have the DID of the Provider\ngiving access to this Resource. The Provider will have associated a mapping (key - value) of attributes.\nOne of those can be used to related with the public service returning the DDO of a specific resource."),(0,a.kt)("p",null,"Applied to Assets, typically are part of a Service Agreement. The suggested approach to implement this is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Associate the Resource (ie. Asset DID) to the Provider DID"),(0,a.kt)("li",{parentName:"ul"},"Each Provider will have associated a Public URL where the provider is exposing the DDOs")),(0,a.kt)("p",null,"Here is a draft ",(0,a.kt)("strong",{parentName:"p"},"DidRegistry")," implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// This piece of code is for reference only!\n// Doesn't include any validation, types could be reviewed, enums, etc\n\ncontract DidRegistry {\n\n    event DIDAttributeRegistered(\n        bytes32 indexed did,\n        address indexed owner,\n        bytes32 indexed checksum,\n        string value,\n        uint updatedAt\n    );\n\n    mapping(bytes32 => DIDRegister) private didRegister;\n    function registerAttribute(bytes32 _did, bytes32 _checksum, string _value) public {\n        // ....\n\n        emit DIDAttributeRegistered(_did, msg.sender, _checksum, _value, block.number);\n    }\n\n}\n")),(0,a.kt)("p",null,"To register the provider publicly resolving the DDO associated to a DID, we will register an attribute with the public\nhostname of that provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'registerAttribute("21tDAKCERh95uGgKbJNHYp", "328aabb94534935864312", "https://myprovider.example.com/ddo")\n')),(0,a.kt)("h3",{id:"resolver"},"Resolver"),(0,a.kt)("p",null,"The resolving capabilities will be encapsulated in the Nevermined SDK libraries (JavaScript, Python, etc.), allowing to\nresolve a DDO directly speaking with the Smart Contracts."),(0,a.kt)("p",null,"No third-party requests or API need to be integrated. This allows to have a simple a seam-less integration from the\nconsumer side."),(0,a.kt)("p",null,"This is a generic definition of what could be exposed in the client libraries from an API point of view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"function DDO resolve(String did)  {\n  // black magic\n  return ddo;\n}\n")),(0,a.kt)("p",null,"To resolve a DID to the associated DDO, some information is stored on-chain associated to the DID.\nIn the approach recommended in the scope of this SPEC, this is stored as an attribute associated to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"DidAttributeRegistered")," event."),(0,a.kt)("p",null,"Because the DID and key are indexed parameters of the event, a consumer in any supported web3 language could filter the\n",(0,a.kt)("inlineCode",{parentName:"p"},"DidAttributeRegistered")," events filtering by the DID and the key named ",(0,a.kt)("strong",{parentName:"p"},'"service-ddo"'),"."),(0,a.kt)("p",null,"A DDO pointing to a DID could be resolved hierarchically using the same mechanism."),(0,a.kt)("p",null,"This is an example in JavaScript using web3.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const event = contractInstance.DidAttributeRegistered(\n  { did: "21tDAKCERh95uGgKbJNHYp" },\n  { fromBlock: 0, toBlock: "latest" }\n);\n')),(0,a.kt)("p",null,"Here in Python using web3.py:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"event = mycontract.events.DidAttributeRegistered.createFilter(fromBlock='latest', argument_filters={'did': '21tDAKCERh95uGgKbJNHYp'})\n")),(0,a.kt)("p",null,"This logic could be encapsulated in the client libraries (",(0,a.kt)("strong",{parentName:"p"},"SDK"),") in different languages, allowing to the client\napplications to get the attributes enabling to resolve the DDO associated to the DID."),(0,a.kt)("p",null,"Using this information a consumer can query directly to the provider able to return the DDO."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-spec/"},"DID Spec from the W3C Credentials Community Group"))))}p.isMDXComponent=!0},7008:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/did-flow-f6223d1ca5ddb2f7ade6ac63cd18821e.png"}}]);