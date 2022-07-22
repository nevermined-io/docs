"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[2053],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8674:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},d=void 0,c={unversionedId:"architecture/components/contracts/contracts/conditions/ConditionStoreLibrary",id:"architecture/components/contracts/contracts/conditions/ConditionStoreLibrary",title:"ConditionStoreLibrary",description:"Implementation of the Condition Store Library.",source:"@site/docs/architecture/components/contracts/contracts/conditions/ConditionStoreLibrary.md",sourceDirName:"architecture/components/contracts/contracts/conditions",slug:"/architecture/components/contracts/contracts/conditions/ConditionStoreLibrary",permalink:"/docs/architecture/components/contracts/contracts/conditions/ConditionStoreLibrary",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/contracts/contracts/conditions/ConditionStoreLibrary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Condition",permalink:"/docs/architecture/components/contracts/contracts/conditions/Condition"},next:{title:"ConditionStoreManager",permalink:"/docs/architecture/components/contracts/contracts/conditions/ConditionStoreManager"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"updateState",id:"updatestate",level:3},{value:"Parameters:",id:"parameters-1",level:4}],u={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Implementation of the Condition Store Library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," Condition is a key component in the service execution agreement. \n This library holds the logic for creating and updating condition \n Any Condition has only four state transitions starts with Uninitialized,\n Unfulfilled, Fulfilled, and Aborted. Condition state transition goes only \n forward from Unintialized -> Unfulfilled -> {Fulfilled || Aborted}\n")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function create(\n    struct ConditionStoreLibrary.ConditionList _self,\n    bytes32 _id,\n    address _typeRef,\n    address _creator\n  ) internal returns (uint256 size)\n")),(0,i.kt)("p",null,"create new condition"),(0,i.kt)("p",null,"check whether the condition exists, assigns\ncondition type, condition state, last updated by,\nand update at (which is the current block number)"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ConditionStoreLibrary.ConditionList"),(0,i.kt)("td",{parentName:"tr",align:"left"},"is the ConditionList storage pointer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"valid condition identifier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_typeRef")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"condition contract address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_creator")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"address of the condition creator")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ConditionStoreLibrary.ConditionList"),(0,i.kt)("td",{parentName:"tr",align:"left"},"is the condition index")))),(0,i.kt)("h3",{id:"updatestate"},"updateState"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function updateState(\n    struct ConditionStoreLibrary.ConditionList _self,\n    bytes32 _id,\n    enum ConditionStoreLibrary.ConditionState _newState\n  ) internal\n")),(0,i.kt)("p",null,"updateState update the condition state"),(0,i.kt)("p",null,"check whether the condition state transition is right,\nassign the new state, update last updated by and\nupdated at."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"struct ConditionStoreLibrary.ConditionList"),(0,i.kt)("td",{parentName:"tr",align:"left"},"is the ConditionList storage pointer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"condition identifier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_newState")),(0,i.kt)("td",{parentName:"tr",align:"left"},"enum ConditionStoreLibrary.ConditionState"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the new state of the condition")))))}m.isMDXComponent=!0}}]);