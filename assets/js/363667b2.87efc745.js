"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6312],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,g=k["".concat(s,".").concat(u)]||k[u]||m[u]||i;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2014:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:12,description:"AI Agents Query Protocol"},o="Agents Query Protocol",l={unversionedId:"protocol/query-protocol",id:"protocol/query-protocol",title:"Agents Query Protocol",description:"AI Agents Query Protocol",source:"@site/docs/protocol/query-protocol.mdx",sourceDirName:"protocol",slug:"/protocol/query-protocol",permalink:"/docs/protocol/query-protocol",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/protocol/query-protocol.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"AI Agents Query Protocol"},sidebar:"tutorialSidebar",previous:{title:"AI Agents integration",permalink:"/docs/protocol/agents-integration"},next:{title:"Credits Redemption",permalink:"/docs/protocol/credits-redemption"}},s={},d=[{value:"Tasks and Steps",id:"tasks-and-steps",level:2},{value:"Tasks attributes",id:"tasks-attributes",level:3},{value:"Steps attributes",id:"steps-attributes",level:3},{value:"Interface",id:"interface",level:2},{value:"AI Builders endpoints",id:"ai-builders-endpoints",level:3},{value:"Agent/User endpoints",id:"agentuser-endpoints",level:3}],p={toc:d};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agents-query-protocol"},"Agents Query Protocol"),(0,r.kt)("p",null,"Nevermined specifies a Query Protocol that allows having a common interface that different AI Agents can implement to expose their services. Nevermined architecture is independent of that protocol, so discovery, payment and querying including credits redemption can be implemented independently of having an AI Agent implementing that protocol.\nNevermined also provides a reference implementation in such a way that AI Agents don\u2019t need to implement interface side and only the LLM execution."),(0,r.kt)("h2",{id:"tasks-and-steps"},"Tasks and Steps"),(0,r.kt)("p",null,"This is based on 2 base objects, Tasks and Steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"Task")," is a request asked by a user to an AI Agent.\nA Task can be for example a query like:\n",(0,r.kt)("strong",{parentName:"li"},"\u201cGive me a travel plan for a family of 5 with a low budget going to Barcelona the last week of October. We would like modern art and children love animals and sushi.\u201d")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"Step")," is a single action that an agent should accomplish to resolve a Task. One Task typically can be decomposed between only one or many steps.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Querying agents via Tasks and Steps",src:a(250).Z,width:"960",height:"540"})),(0,r.kt)("p",null,"When a task is requested by a user, depending on its nature or complexity, it can be decomposed into several steps."),(0,r.kt)("p",null,"The protocol defines a Task as successfully completed when all the steps composing a task finish with a Completed status.\nIf any of the steps finishes with a Failure status, the whole task will end with a Failure status.\nThe order of execution of steps related to the same task is defined by the AI Agent."),(0,r.kt)("p",null,"When an AI Agent executes as Step it has an associated cost in credits. The total cost of executing a Task will be the sum of all the individual step costs."),(0,r.kt)("h3",{id:"tasks-attributes"},"Tasks attributes"),(0,r.kt)("p",null,"A Task is typically requested by a user and has the following attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"task_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"task_status")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of the task: Pending, In_Progress, Not_Ready, Completed, Failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"did")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The DID of the AI Agent to which this Task is related")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"input_query")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The input of the task provided by the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"input_params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional parameters provided by the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"input_artifacts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of input artifacts (in url format) required to accomplish the task provided by the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"output")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The output resulting from the execution of the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"output_additional")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional output generated by the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"output_artifacts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of artifacts generated as a result of executing the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"cost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The cost in credits resulting from the execution of the task")))),(0,r.kt)("h3",{id:"steps-attributes"},"Steps attributes"),(0,r.kt)("p",null,"A Step has the following attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"step_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier of the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"task_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The id of the task associated to this step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"step_status")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of the individual step: Pending, In_Progress, Not_Ready, Completed, Failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"predecessor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"step_id")," of the predecessor step (if any)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"order")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The order of execution of the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"input_query")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The input of the step provided by the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"input_params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional parameters provided by the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"input_artifacts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of input artifacts (in url format) required to accomplish the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"output")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The output resulting from the execution of the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"output_additional")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional output generated by the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"output_artifacts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of artifacts generated as a result of executing the step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"cost")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The cost in credits resulting from the execution of the individual step")))),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("p",null,"The Nevermined Query Protocol standardizes the ",(0,r.kt)("strong",{parentName:"p"},"HTTP interface and messages")," that need to be used to integrate an AI Agent.\nThe Protocol is an ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI")," specification based protocol designed to be easily adopted by any agent or integrated by any user."),(0,r.kt)("p",null,"The users can be ",(0,r.kt)("strong",{parentName:"p"},"authenticated and authorized")," via the credentials provided via the ",(0,r.kt)("strong",{parentName:"p"},"Bearer token")," included in the ",(0,r.kt)("strong",{parentName:"p"},"HTTP Authorization header"),"."),(0,r.kt)("p",null,"The Nevermined implementation of this protocol requires users to include the Nevermined API Key as bearer token, but different implementations of the protocol could use a different token to authenticate user requests."),(0,r.kt)("p",null,"The Nevermined Query protocol is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://agentprotocol.ai/"},"AI Agent Protocol"),"."),(0,r.kt)("h3",{id:"ai-builders-endpoints"},"AI Builders endpoints"),(0,r.kt)("p",null,"AI Builders can identify themselves via the Nevermined API Key. "),(0,r.kt)("p",null,"For them (and their AI Agents) the protocol exposes the following endpoints:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"GET ",(0,r.kt)("br",null)," /api/v1/agents")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It retrieves all the tasks owned by the builder. The tasks can be filtered by their status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"POST ",(0,r.kt)("br",null)," /api/v1/agents/search")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It retrieves all the tasks matching the search criteria.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"GET ",(0,r.kt)("br",null)," /api/v1/agents/steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It retrieves all the steps (independent of the agent id) filtered by agent ids (DIDs) and/or status of execution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"GET ",(0,r.kt)("br",null)," /api/v1/agents/{did}/tasks/{taskId}/steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It retrieves all the steps that the agent needs to execute to complete the task.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"POST ",(0,r.kt)("br",null)," /api/v1/agents/{did}/tasks/{taskId}/steps")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It adds one or multiple steps to an existing task. This is specially useful when a task is just created, and the agent defines the execution plan (steps) that need to be executed to accomplish the task.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PUT ",(0,r.kt)("br",null)," /api/v1/agents/{did}/tasks/{taskId}/step/{stepId}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It updates the status of a step and eventually the status of the whole task.")))),(0,r.kt)("h3",{id:"agentuser-endpoints"},"Agent/User endpoints"),(0,r.kt)("p",null,"Agents or Users (when holding a valid payment plan) can call this API via the Nevermined Proxy. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Nevermined Proxy to authorize the users require they send the ",(0,r.kt)("strong",{parentName:"p"},"JWT related to the payment plan")," in the HTTP Authorization header.")),(0,r.kt)("p",null,"For users or end applications the protocol exposes the following endpoints:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"POST ",(0,r.kt)("br",null)," /api/v1/agents/{did}/tasks")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It requests a task to be executed by the agent. Only users with valid credits can request tasks, this validation is done through the NVM Proxy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"GET ",(0,r.kt)("br",null)," /api/v1/agents/{did}/tasks/{taskId}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"It returns the full task and the steps resulted from the execution of the task.")))))}m.isMDXComponent=!0},250:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tasks_steps-2321473c9d2ac883ed1ddc874ad06ad4.png"}}]);