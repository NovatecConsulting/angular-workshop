"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[3208],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(1163),a=(n(9496),n(9613));const o={sidebar_position:1,id:"create_component",tags:["exercise","basic","component","signal"],description:"Create a simple Angular component with hardcoded data."},s="Creation",i={unversionedId:"exercises/basic/atomic-component/create_component",id:"exercises/basic/atomic-component/create_component",title:"Creation",description:"Create a simple Angular component with hardcoded data.",source:"@site/docs/exercises/basic/atomic-component/create-component.md",sourceDirName:"exercises/basic/atomic-component",slug:"/exercises/basic/atomic-component/create_component",permalink:"/angular-workshop/docs/exercises/basic/atomic-component/create_component",draft:!1,tags:[{label:"exercise",permalink:"/angular-workshop/docs/tags/exercise"},{label:"basic",permalink:"/angular-workshop/docs/tags/basic"},{label:"component",permalink:"/angular-workshop/docs/tags/component"},{label:"signal",permalink:"/angular-workshop/docs/tags/signal"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"create_component",tags:["exercise","basic","component","signal"],description:"Create a simple Angular component with hardcoded data."},sidebar:"tutorialSidebar",previous:{title:"Atomic Component",permalink:"/angular-workshop/docs/category/atomic-component"},next:{title:"Testing",permalink:"/angular-workshop/docs/exercises/basic/atomic-component/basic_component_test"}},l={},c=[{value:"User Profile Card",id:"user-profile-card",level:2},{value:"Goal architecture",id:"goal-architecture",level:3},{value:"Lets go",id:"lets-go",level:3},{value:"Solution",id:"solution",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creation"},"Creation"),(0,a.kt)("h2",{id:"user-profile-card"},"User Profile Card"),(0,a.kt)("admonition",{title:"Exercise",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Create a simple Angular component, such as a user profile card, with hardcoded data and display it in the template.")),(0,a.kt)("p",null,"This can be used als UI draft:\n",(0,a.kt)("img",{alt:"User Profile Card Draft",src:n(659).Z,width:"1040",height:"200"})),(0,a.kt)("p",null,"For the user data you can assume ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," as object interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="user.model.ts"',title:'"user.model.ts"'},"export interface User {\n    firstName: string,\n    lastName: string,\n    mail: string;\n}\n")),(0,a.kt)("h3",{id:"goal-architecture"},"Goal architecture"),(0,a.kt)("mermaid",{value:'graph TD\n    parentComp["Parent component"]\n    upcComp["UserProfileCardComponent"]\n    parentComp -- called by HTML --\x3e upcComp\n    subgraph this\n        upcComp -- user data --- upcComp\n    end'}),(0,a.kt)("h3",{id:"lets-go"},"Lets go"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/nt-angular-workshop-base"},(0,a.kt)("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Fork base from StackBlitz"}))),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"click to see the solution"),(0,a.kt)("div",null,"There are several ways to do this. Angular gives you the possibility to reduce boilerplate code by using the generator via CLI.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate component UserProfileCard --standalone \n# shorted version\nng g c UserProfileCard --standalone \n")),(0,a.kt)("p",null,"If you use NX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @nx/angular:component UserProfileCard --standalone\n")),(0,a.kt)("p",null,"This will generate a component containing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-logs"},">  NX  Generating @nx/angular:component\nCREATE .../user-profile-card.component.ts\n")),(0,a.kt)("p",null,"If you create a single file it can look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="user-profile-card.component.ts"',title:'"user-profile-card.component.ts"'},"import { Component, computed, signal } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { User } from '@shared/models'\n\n@Component({\n    selector: 'app-user-profile-card',\n    standalone: true,\n    imports: [CommonModule],\n    templateUrl: './user-profile-card.component.html',\n    styleUrls: ['./user-profile-card.component.scss'],\n})\nexport class UserProfileCardComponent {\n    readonly user = signal({ firstName: 'Nora', lastName: 'Crawford', mail: 'nora.crawford@dev.io' } as User);\n    readonly userInitials = computed(\n        () =>\n            `${this.user().firstName.trimStart().slice(0, 1).toUpperCase()}${this.user().lastName.trimStart().slice(0, 1)}`\n    );\n    readonly fullName = computed(() => `${this.user().firstName} ${this.user().lastName}`);\n\n    onShowDropdownClicked() {\n        console.debug('on show dropdown clicked');\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="user-profile-card.component.html"',title:'"user-profile-card.component.html"'},'<div class="upc__avatar">\n    {{ userInitials() }}\n</div>\n<div class="upc__container">\n<div class="upc__name">{{ fullName() }}</div>\n<div class="upc__mail">{{ user().mail }}</div>\n</div>\n<button class="upc__show-dropdown" (click)="onShowDropdownClicked()">V</button>\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ex-base-create-component?file=src%2Fapp%2Fuser-profile-card%2Fuser-profile-card.component.ts"},(0,a.kt)("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"}))))))}u.isMDXComponent=!0},659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/task_create_component_draft-2ed6441908580f21b6852df4ab9c33ec.png"}}]);