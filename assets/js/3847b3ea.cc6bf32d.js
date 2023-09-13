"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[5581],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(1163),a=(n(9496),n(9613));const o={sidebar_position:3,id:"setup",tags:["workspace","getting started","ide","git","node"]},i="Getting Started",l={unversionedId:"setup",id:"setup",title:"Getting Started",description:"For the hands-on part of this course, we are using on Stackblitz, so you can do this course",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/angular-workshop/docs/setup",draft:!1,tags:[{label:"workspace",permalink:"/angular-workshop/docs/tags/workspace"},{label:"getting started",permalink:"/angular-workshop/docs/tags/getting-started"},{label:"ide",permalink:"/angular-workshop/docs/tags/ide"},{label:"git",permalink:"/angular-workshop/docs/tags/git"},{label:"node",permalink:"/angular-workshop/docs/tags/node"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"setup",tags:["workspace","getting started","ide","git","node"]},sidebar:"tutorialSidebar",previous:{title:"Styling Conventions and Methodologies",permalink:"/angular-workshop/docs/prerequisites/styles"},next:{title:"Angular",permalink:"/angular-workshop/docs/category/angular"}},s={},p=[{value:"Local Development Environment",id:"local-development-environment",level:2},{value:"Git",id:"git",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Integrated Development Environment (IDE)",id:"integrated-development-environment-ide",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"For the hands-on part of this course, we are using on ",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com"},"Stackblitz"),", so you can do this course\njust by using the browser.\nIf you like to work offline, it is best to install a local development environment."),(0,a.kt)("p",null,"Only some advanced testing or debugging chapters cant be followed without a local installation"),(0,a.kt)("h2",{id:"local-development-environment"},"Local Development Environment"),(0,a.kt)("p",null,"Since your developer desktop operating system may vary,\nwe only present the requirements here and not the options for installing these tools."),(0,a.kt)("h3",{id:"git"},"Git"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," is a free and open source distributed version control system designed to handle everything\nfrom small to very large projects with speed and efficiency."),(0,a.kt)("p",null,"It can be installed following the official guide: ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,a.kt)("h3",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," is required to use the node package manager (npm) ",(0,a.kt)("em",{parentName:"p"},"(see related\nprerequisites ",(0,a.kt)("a",{parentName:"em",href:"prerequisites/package-managers#node-package-manager-npm"},"chapter NPM"),")")),(0,a.kt)("p",null,"It can be installed following the official guide: ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case you have to switch node.js versions frequently, you can use tools like node version\nmanager (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"check ",(0,a.kt)("inlineCode",{parentName:"a"},"nvm")),".)")),(0,a.kt)("h3",{id:"integrated-development-environment-ide"},"Integrated Development Environment (IDE)"),(0,a.kt)("p",null,"Since people are different, the IDE also varies.\nTherefore, we present a list of possible IDEs, and it's up to your taste which one to choose."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"IDE"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Pricing"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VSCode"),(0,a.kt)("td",{parentName:"tr",align:null},"Free. Built on open source. Runs everywhere. Highly customizable"),(0,a.kt)("td",{parentName:"tr",align:null},"free"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://code.visualstudio.com"},"https://code.visualstudio.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WebStorm"),(0,a.kt)("td",{parentName:"tr",align:null},"WebStorm is an integrated development environment for JavaScript and related technologies. ",(0,a.kt)("br",null)," Like other JetBrains IDEs, it makes your development experience more enjoyable, automating routine work and helping you handle complex tasks with ease."),(0,a.kt)("td",{parentName:"tr",align:null},"subscription"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.jetbrains.com/webstorm"},"https://www.jetbrains.com/webstorm"))))))}u.isMDXComponent=!0}}]);