"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(n),k=i,f=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(f,d(d({ref:t},s),{},{components:n})):a.createElement(f,d({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var o=2;o<r;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={},d=void 0,l={unversionedId:"nevermined-sdk/api-reference/interfaces/AdditionalInformation",id:"nevermined-sdk/api-reference/interfaces/AdditionalInformation",title:"AdditionalInformation",description:"@nevermined-io/sdk - v3.0.23 / AdditionalInformation",source:"@site/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/AdditionalInformation",permalink:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ActedOnBehalfEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ActedOnBehalfEvent"},next:{title:"AgreementConditionsStatus",permalink:"/docs/nevermined-sdk/api-reference/interfaces/AgreementConditionsStatus"}},p={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"categories",id:"categories",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"cipher",id:"cipher",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"copyrightHolder",id:"copyrightholder",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"customData",id:"customdata",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"inLanguage",id:"inlanguage",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"links",id:"links",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"poseidonHash",id:"poseidonhash",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"priceHighestDenomination",id:"pricehighestdenomination",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"providerKey",id:"providerkey",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"secretId",id:"secretid",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"structuredMarkup",id:"structuredmarkup",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"tags",id:"tags",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"updateFrequency",id:"updatefrequency",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"workExample",id:"workexample",level:3},{value:"Defined in",id:"defined-in-14",level:4}],s={toc:o};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23")," / AdditionalInformation"),(0,i.kt)("h1",{id:"interface-additionalinformation"},"Interface: AdditionalInformation"),(0,i.kt)("p",null,"Additional Information of Assets Metadata."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/README.md#additional-attributes"},"https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/README.md#additional-attributes")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#categories"},"categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#cipher"},"cipher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#copyrightholder"},"copyrightHolder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#customdata"},"customData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#description"},"description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#inlanguage"},"inLanguage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#links"},"links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#poseidonhash"},"poseidonHash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#pricehighestdenomination"},"priceHighestDenomination")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#providerkey"},"providerKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#secretid"},"secretId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#structuredmarkup"},"structuredMarkup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#tags"},"tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#updatefrequency"},"updateFrequency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AdditionalInformation#workexample"},"workExample"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"categories"},"categories"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"categories"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Categories used to describe this content. Empty by default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},";['Economy', 'Data Science']\n")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L425"},"src/types/DDOTypes.ts:425")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cipher"},"cipher"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cipher"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L459"},"src/types/DDOTypes.ts:459")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"copyrightholder"},"copyrightHolder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"copyrightHolder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The party holding the legal copyright. Empty by default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'Met Office'\n")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L385"},"src/types/DDOTypes.ts:385")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customdata"},"customData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"A dynamic field containing marketplace specific data.\nCan be used to store any non-default data, needs to be checked"),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L454"},"src/types/DDOTypes.ts:454")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"description"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Details of what the resource is. For a dataset, this attribute\nexplains what the data represents and what it can be used for."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'Weather information of UK including temperature and humidity'\n")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L379"},"src/types/DDOTypes.ts:379")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inlanguage"},"inLanguage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inLanguage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The language of the content. Please use one of the language\ncodes from the ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/bcp47"},"IETF BCP 47 standard"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'en'\n")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L419"},"src/types/DDOTypes.ts:419")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"links"},"links"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"links"),": ","{"," ",(0,i.kt)("inlineCode",{parentName:"p"},"[name: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"; }[]"),(0,i.kt)("p",null,"Mapping of links for data samples, or links to find out more information.\nLinks may be to either a URL or another Asset. We expect marketplaces to\nconverge on agreements of typical formats for linked data: Nevermined\nitself does not mandate any specific formats as these requirements are likely\nto be domain-specific."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},";[\n  {\n    anotherSample:\n      'http://data.ceda.ac.uk/badc/ukcp09/data/gridded-land-obs/gridded-land-obs-daily/',\n  },\n  {\n    fieldsDescription: 'http://data.ceda.ac.uk/badc/ukcp09/',\n  },\n]\n")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L412"},"src/types/DDOTypes.ts:412")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"poseidonhash"},"poseidonHash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"poseidonHash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L458"},"src/types/DDOTypes.ts:458")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pricehighestdenomination"},"priceHighestDenomination"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"priceHighestDenomination"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Price store in the highest denomination and stored as a\nnumber on elastic search"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"We currently do this because elasticsearch does not support\nBigNumbers"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L479"},"src/types/DDOTypes.ts:479")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"providerkey"},"providerKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"providerKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L461"},"src/types/DDOTypes.ts:461")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"secretid"},"secretId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"secretId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L466"},"src/types/DDOTypes.ts:466")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"structuredmarkup"},"structuredMarkup"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"structuredMarkup"),": ","{"," ",(0,i.kt)("inlineCode",{parentName:"p"},"mediaType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"uri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," }[]"),(0,i.kt)("p",null,"A link to machine-readable structured markup (such as ttl/json-ld/rdf)\ndescribing the dataset."),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L445"},"src/types/DDOTypes.ts:445")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tags"},"tags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"tags"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Keywords or tags used to describe this content. Empty by default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},";['weather', 'uk', '2011', 'temperature', 'humidity']\n")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L431"},"src/types/DDOTypes.ts:431")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatefrequency"},"updateFrequency"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"updateFrequency"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"An indication of update latency - i.e. How often are updates expected (seldom,\nannually, quarterly, etc.), or is the resource static that is never expected\nto get updated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'yearly'\n")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L439"},"src/types/DDOTypes.ts:439")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"workexample"},"workExample"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"workExample"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Example of the concept of this asset. This example is part\nof the metadata, not an external link."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'423432fsd,51.509865,-0.118092,2011-01-01T10:55:11+00:00,7.2,68'\n")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1cda883adfb801658f47efa6d7c6cc8f9f8998da/src/types/DDOTypes.ts#L392"},"src/types/DDOTypes.ts:392")))}c.isMDXComponent=!0}}]);