"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[2192],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(1163),i=(r(9496),r(9613));const a={sidebar_position:300,id:"pipes",tags:["pipe"]},o="Pipes",s={unversionedId:"slides/foundation/building-blocks/pipes",id:"slides/foundation/building-blocks/pipes",title:"Pipes",description:"Pipes allow you to transform data in the template before it's displayed.",source:"@site/docs/slides/foundation/building-blocks/pipes.md",sourceDirName:"slides/foundation/building-blocks",slug:"/slides/foundation/building-blocks/pipes",permalink:"/angular-workshop/docs/slides/foundation/building-blocks/pipes",draft:!1,tags:[{label:"pipe",permalink:"/angular-workshop/docs/tags/pipe"}],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,id:"pipes",tags:["pipe"]},sidebar:"tutorialSidebar",previous:{title:"Directives",permalink:"/angular-workshop/docs/slides/foundation/building-blocks/directives"},next:{title:"Services",permalink:"/angular-workshop/docs/slides/foundation/building-blocks/services"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Related Topics:",id:"related-topics",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipes"},"Pipes"),(0,i.kt)("p",null,"Pipes allow you to transform data in the template before it's displayed.\nAngular provides several built-in pipes, and you can also create custom ones."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="full-name.pipe.ts"',title:'"full-name.pipe.ts"'},"@Pipe({name: 'fullName', standalone: true})\nexport class FullNamePipe implements PipeTransform {\n    transform(user: User) {\n        return `${user.firstName} ${user.lastName}`;\n    }\n}\n")),(0,i.kt)("p",null,"Inside the HTML-Template of a component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<span>{{ currentUser | fullName }}</span>\n")),(0,i.kt)("h3",{id:"related-topics"},"Related Topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://angular.io/guide/pipes-overview"},"https://angular.io/guide/pipes-overview"))))}d.isMDXComponent=!0}}]);