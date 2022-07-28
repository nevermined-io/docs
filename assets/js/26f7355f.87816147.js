"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[3648],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},s="Packaging",p={unversionedId:"architecture/components/contracts/Packages",id:"architecture/components/contracts/Packages",title:"Packaging",description:"The following package describes how to package the Keeper Contracts in different formats.",source:"@site/docs/architecture/components/contracts/Packages.md",sourceDirName:"architecture/components/contracts",slug:"/architecture/components/contracts/Packages",permalink:"/docs/architecture/components/contracts/Packages",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/contracts/Packages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Solidity API",permalink:"/docs/architecture/components/contracts/solidity-api"},next:{title:"Release Process",permalink:"/docs/architecture/components/contracts/ReleaseProcess"}},l={},u=[{value:"Javascript (NPM)",id:"javascript-npm",level:2},{value:"Python",id:"python",level:2},{value:"Java",id:"java",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packaging"},"Packaging"),(0,o.kt)("p",null,"The following package describes how to package the Keeper Contracts in different formats.\nIt is helpful to distribute the compiled smart contracts ABI's in different \"flavours\".\nIt allows to import those ABI's from different languages enabling an easier interaction with the Keeper."),(0,o.kt)("h2",{id:"javascript-npm"},"Javascript (NPM)"),(0,o.kt)("p",null,"NPM packages are published as part of the ",(0,o.kt)("strong",{parentName:"p"},"Nevermined")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/nevermined-io"},"NPM organization"),".\n",(0,o.kt)("strong",{parentName:"p"},"Github Actions")," is configured to release a new version of the ",(0,o.kt)("strong",{parentName:"p"},"@nevermined-io/contracts")," NPM library after tagging."),(0,o.kt)("p",null,"Versions of the library must be modified in the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "@nevermined-io/contracts",\n  "version": "1.0.0",\n\n  ..\n\n}\n')),(0,o.kt)("p",null,"Typically you can't overwrite NPM already published versions of the libraries.\nThis package uses ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),", so if you are testing with new versions, it's recommended to play with the patch numbers."),(0,o.kt)("p",null,"If you need to build a local version of the package you need to run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\nyarn build\n")),(0,o.kt)("p",null,"If you need to release a new version of the library before tagging, you need to execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm publish --access public\n")),(0,o.kt)("p",null,"To do that you need to be an authorized user in the NPM Nevermined organization."),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Python packages are generated automatically in Pypi format:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/nevermined-contracts/"},"https://pypi.org/project/nevermined-contracts/")),(0,o.kt)("h2",{id:"java"},"Java"),(0,o.kt)("p",null,"Java packages are generated automatically for JVM applications and published into Maven central:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.keyko.nevermined/contracts"},"https://search.maven.org/artifact/io.keyko.nevermined/contracts")))}f.isMDXComponent=!0}}]);