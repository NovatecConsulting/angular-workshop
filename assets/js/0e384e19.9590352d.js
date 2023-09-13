"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[9671],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:1},i="Welcome \ud83d\udc4b",l={unversionedId:"intro",id:"intro",title:"Welcome \ud83d\udc4b",description:"Let's discover Angular in depth.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/angular-workshop/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Prerequisites",permalink:"/angular-workshop/docs/category/prerequisites"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Cloud IDE",id:"cloud-ide",level:3},{value:"Local Development",id:"local-development",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-"},"Welcome \ud83d\udc4b"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"Angular in depth"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"For the full Setup Guide see ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup"},"Setup Chapter"),"."),(0,o.kt)("h3",{id:"cloud-ide"},"Cloud IDE"),(0,o.kt)("p",null,"Since most exercises can be solved using the latest version of Chrome / Edge / Safari, it is not mandatory to have any local IDE."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ensure you can access ",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com"},"StackBlitz")," and you can see an example project after clicking the\nAngular icon.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stackblitz demo",src:n(7977).Z,width:"4064",height:"2334"})),(0,o.kt)("h3",{id:"local-development"},"Local Development"),(0,o.kt)("p",null,"Get started by installing ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"),". This can be done by utilizing Node Version\nManager (",(0,o.kt)("inlineCode",{parentName:"p"},"nvm")," see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"github.com/nvm-sh/nvm"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HINT: The all tasks where tested for ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2b22 v18.16.0"))),(0,o.kt)("p",null,"The installation process can defer depending on your OS."),(0,o.kt)("p",null,"To verify the installation run ",(0,o.kt)("inlineCode",{parentName:"p"},"node --version"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# angular-workshop is \ud83d\udce6 v0.1.0 via \u2b22 v18.16.0 \nnode --version\n# RESPONSE: v18.16.0\n")))}d.isMDXComponent=!0},7977:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/stackblitz-demo-ff07b0e47b9d090efe0fb429823d207c.png"}}]);