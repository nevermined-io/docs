"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,description:"Finance Functionalities"},l="Finance Functionalities",o={unversionedId:"getting-started/advanced-utility/finance-functionalities",id:"getting-started/advanced-utility/finance-functionalities",title:"Finance Functionalities",description:"Finance Functionalities",source:"@site/docs/getting-started/advanced-utility/finance-functionalities.md",sourceDirName:"getting-started/advanced-utility",slug:"/getting-started/advanced-utility/finance-functionalities",permalink:"/docs/getting-started/advanced-utility/finance-functionalities",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/getting-started/advanced-utility/finance-functionalities.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Finance Functionalities"},sidebar:"tutorialSidebar",previous:{title:"Access Functionalities",permalink:"/docs/getting-started/advanced-utility/access-functionalities"},next:{title:"Identity Functionalities",permalink:"/docs/getting-started/advanced-utility/identity-funcitonalities"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"finance-functionalities"},"Finance Functionalities"),(0,r.kt)("p",null,"The current financial model for fungible and non-fungible digital assets is too one-dimensional: basically, only buy or sell. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"NVM Finance Functionalities help you to develop more advanced revenue models and marketplaces. These are functionalities that allow you to implement Web3-compatible monetization into digital assets and NFTs. We currently have 5 different utilities, all available via our ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/"},"SDK"),". ",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Finance Utility 1 - Secondary Market Royalties"),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What is it?"),(0,r.kt)("br",null),"\nThe user registering an asset can specify the royalties that are rewarding the original creator in the secondary market. These royalties must be between 0 and 100 percent. The royalties can not be changed after they are initialized. This protects the buyers of an asset to have to pay for a different commission to the one agreed during the purchase.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Why use this?"),(0,r.kt)("br",null),"\nWe have seen many examples where the payout of royalties depends on the goodwill of a marketplace. With this functionality, the royalty conditions are \u2018embedded\u2019 in the asset and will be executed upon.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Discover our ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/"},"SDK")," for more.",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Finance Utility 2 - Rewards"),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What is it?")," ",(0,r.kt)("br",null),"\nA feature that allows you to use tokens, including your native token, to reward performance and behavior.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Why use this?")," ",(0,r.kt)("br",null),"\nThis allows asset producers and content creators to recognize and reward the contributions made by other participants and to stimulate collaborative growth and creation.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Discover our ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/"},"SDK")," for more.",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Finance Utility 3 - Dynamic Pricing Framework"),(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"What is it?"),(0,r.kt)("br",null),"\nA feature that allows you to define on-chain and off-chain conditions that influence the price of your asset.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Why use this?"),(0,r.kt)("br",null),"\nThis allows asset producers to go beyond the one-dimensional pricing strategies. The template comes with a curve model, but the framework allows devs to integrate their own dynamic pricing conditions, e.g. supply/demand, external oracle data,...",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Discover our ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/"},"SDK")," for more.",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Finance Utility 4 - Marketplace Framework"),(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"What is it?"),(0,r.kt)("br",null),"\nA framework to create your own Marketplace for digital assets.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Why use this?"),(0,r.kt)("br",null),"\nRather than build a marketplace from scratch, this allows you to manage all the typical metadata required to build a marketplace.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Dig into ",(0,r.kt)("a",{parentName:"p",href:"../../architecture/specs/Spec-MKT/#secondary-market"},"Specs")," of the Marketplace API.",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Finance Utility 5 - NFT Collateralization"),(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"What is it?"),(0,r.kt)("br",null),"\nAn integration with the Aave protocol that allows NFT owners to deposit their tokens, in return for a loan.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Why use this?"),(0,r.kt)("br",null),"\nThis allows asset owners to monetize their assets in different ways, while maintaining ownership.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Read more in this ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/new-nevermined-component-allows-marketplaces-to-offer-nft-backed-loans-5e05c77e6709?source=---------8"},"blogpost")," or check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/tree/master/aave_integration"},"GitHub"),".",(0,r.kt)("br",null)))}p.isMDXComponent=!0}}]);