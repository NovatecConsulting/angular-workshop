"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[9879],{9613:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>v});var o=r(9496);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),p=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=t,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?o.createElement(v,l(l({ref:n},d),{},{components:r})):o.createElement(v,l({ref:n},d))}));function v(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:t,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3648:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(1163),t=(r(9496),r(9613));const i={sidebar_position:100,id:"modules",tags:["module"]},l="Modules",a={unversionedId:"slides/foundation/building-blocks/modules",id:"slides/foundation/building-blocks/modules",title:"Modules",description:"Modules in Angular help organize an application into cohesive blocks of functionality.",source:"@site/docs/slides/foundation/building-blocks/modules.md",sourceDirName:"slides/foundation/building-blocks",slug:"/slides/foundation/building-blocks/modules",permalink:"/angular-workshop/docs/slides/foundation/building-blocks/modules",draft:!1,tags:[{label:"module",permalink:"/angular-workshop/docs/tags/module"}],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,id:"modules",tags:["module"]},sidebar:"tutorialSidebar",previous:{title:"Building Blocks",permalink:"/angular-workshop/docs/category/building-blocks"},next:{title:"Components",permalink:"/angular-workshop/docs/slides/foundation/building-blocks/components"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p},u="wrapper";function c(e){let{components:n,...r}=e;return(0,t.kt)(u,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"modules"},"Modules"),(0,t.kt)("p",null,"Modules in Angular help organize an application into cohesive blocks of functionality.\nThey group related components, directives, pipes, and services."),(0,t.kt)("h2",{id:"overview"},"Overview"),(0,t.kt)("mermaid",{value:"graph TD\n    service(Service)\n    module(Module)\n    componentS(Standalone Component)\n    pipeS(Standalone Pipe)\n    directiveS(Standalone Directive)\n\n    subgraph Module\n        providers\n        declarations\n        imports\n        exports\n        providers -- provides --\x3e service\n        imports -- imports --\x3e module\n        imports -- imports --\x3e componentS\n        imports -- imports --\x3e pipeS\n        imports -- imports --\x3e directiveS\n    end"}),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Before Standalone v15.0.0"),(0,t.kt)("div",null,(0,t.kt)("mermaid",{value:"graph TD\n    service(Service)\n    module(Module)\n    componentO(Component)\n    pipeO(Pipe)\n    directiveO(Directive)\n\n    subgraph Module\n        providers\n        declarations\n        imports\n        exports\n        providers -- provides --\x3e service\n        imports -- imports --\x3e module\n        declarations -- declare --\x3e componentO\n        declarations -- declare --\x3e pipeO\n        declarations -- declare --\x3e directiveO\n    end"}))),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("p",null,"They are defined using the ",(0,t.kt)("inlineCode",{parentName:"p"},"@NgModule")," decorator."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-typescript"},"@NgModule({\n    imports: [],\n    providers: [],\n    exports: []\n    // declatations: [],\n})\nexport class YourModule { }\n")))}c.isMDXComponent=!0}}]);