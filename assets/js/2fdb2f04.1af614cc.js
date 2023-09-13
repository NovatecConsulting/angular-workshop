"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[776],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||n;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(1163),i=(r(9496),r(9613));const n={sidebar_position:1,id:"reactive_forms",tags:["exercise","basic","reactive","form","validation"],description:"Create a simple form with input fields and a submit button (with validation)."},o="Form handling",l={unversionedId:"exercises/basic/forms/reactive_forms",id:"exercises/basic/forms/reactive_forms",title:"Form handling",description:"Create a simple form with input fields and a submit button (with validation).",source:"@site/docs/exercises/basic/forms/reactive-forms.md",sourceDirName:"exercises/basic/forms",slug:"/exercises/basic/forms/reactive_forms",permalink:"/angular-workshop/docs/exercises/basic/forms/reactive_forms",draft:!1,tags:[{label:"exercise",permalink:"/angular-workshop/docs/tags/exercise"},{label:"basic",permalink:"/angular-workshop/docs/tags/basic"},{label:"reactive",permalink:"/angular-workshop/docs/tags/reactive"},{label:"form",permalink:"/angular-workshop/docs/tags/form"},{label:"validation",permalink:"/angular-workshop/docs/tags/validation"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"reactive_forms",tags:["exercise","basic","reactive","form","validation"],description:"Create a simple form with input fields and a submit button (with validation)."},sidebar:"tutorialSidebar",previous:{title:"Forms",permalink:"/angular-workshop/docs/category/forms"}},s={},c=[{value:"Reactive Forms",id:"reactive-forms",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Goal architecture",id:"goal-architecture",level:3},{value:"Lets go",id:"lets-go",level:3},{value:"Solution",id:"solution",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form-handling"},"Form handling"),(0,i.kt)("h2",{id:"reactive-forms"},"Reactive Forms"),(0,i.kt)("admonition",{title:"Exercise",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Create a simple form with input fields and a submit button (",(0,i.kt)("em",{parentName:"p"},"you can use the ",(0,i.kt)("inlineCode",{parentName:"em"},"/login")," page"),").\nImplement basic form validation using Angular's built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"Validators"),".")),(0,i.kt)("p",null,"This can be used als UI draft:\n",(0,i.kt)("img",{alt:"Login Page Draft",src:r(4882).Z,width:"840",height:"555"})),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Implement the following requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Email Field:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This field is required."),(0,i.kt)("li",{parentName:"ul"},"Validation: Must match the email pattern (e.g., ",(0,i.kt)("a",{parentName:"li",href:"mailto:example@email.com"},"example@email.com"),")."),(0,i.kt)("li",{parentName:"ul"},"Visual Feedback: If invalid and touched, highlight the field in red."))),(0,i.kt)("li",{parentName:"ol"},"Password Field:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This field is required."),(0,i.kt)("li",{parentName:"ul"},"Visual Feedback: If invalid and touched, highlight the field in red."))),(0,i.kt)("li",{parentName:"ol"},"Error Message:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Display a message at the bottom of the form indicating that both the email and password are required.\nThis message should be shown whenever an invalid field is touched."))),(0,i.kt)("li",{parentName:"ol"},"Login Button:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Initial State: Disabled."),(0,i.kt)("li",{parentName:"ul"},"Enablement Condition: The form must be valid (both email and password fields meet the requirements).")))),(0,i.kt)("h3",{id:"goal-architecture"},"Goal architecture"),(0,i.kt)("mermaid",{value:'graph LR\n    parentComp["LoginComponent"]\n    formGroup[FormGroup]\n    ctrlMail["mail" input form control]\n    ctrlPassword["password" input form control]\n    parentComp -. contains .-> formGroup\n    subgraph "HTML form"\n        formGroup -- contains --- ctrlMail\n        formGroup -- contains --- ctrlPassword\n    end'}),(0,i.kt)("h3",{id:"lets-go"},"Lets go"),(0,i.kt)("p",null,"Please use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactiveFormModule")," to perform this task."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ex-base-routing-setup?file=src%2Fapp%2Flogin%2Flogin.component.ts"},(0,i.kt)("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Fork base from StackBlitz"}))),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"click to see the solution"),(0,i.kt)("div",null,"There are several ways to do this.",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ex-base-form-reactive?file=src%2Fapp%2Flogin%2Flogin.component.ts"},(0,i.kt)("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"}))))))}u.isMDXComponent=!0},4882:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/task_new_route_draft-5c4bcb37994bda4665f45b2d5e23c5fb.png"}}]);