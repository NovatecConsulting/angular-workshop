"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[9132],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(h,i(i({ref:n},s),{},{components:t})):o.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=t(1163),a=(t(9496),t(9613));const r={sidebar_position:5,id:"component",tags:["component"]},i="Components",p={unversionedId:"angular/basic-concepts/component/component",id:"angular/basic-concepts/component/component",title:"Components",description:"Components are the building bricks of your application.",source:"@site/docs/angular/basic-concepts/component/component.md",sourceDirName:"angular/basic-concepts/component",slug:"/angular/basic-concepts/component/",permalink:"/angular-workshop/docs/angular/basic-concepts/component/",draft:!1,tags:[{label:"component",permalink:"/angular-workshop/docs/tags/component"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"component",tags:["component"]},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/angular-workshop/docs/category/basic-concepts"},next:{title:"Lifecycle",permalink:"/angular-workshop/docs/angular/basic-concepts/component/component_lifecycle"}},l={},c=[{value:"Using the Angular CLI to generate a component",id:"using-the-angular-cli-to-generate-a-component",level:2},{value:"Anatomy of a Component",id:"anatomy-of-a-component",level:2},{value:"Using the component inside your application",id:"using-the-component-inside-your-application",level:2},{value:"Component Inputs",id:"component-inputs",level:2},{value:"Sources",id:"sources",level:2}],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"components"},"Components"),(0,a.kt)("p",null,"Components are the building bricks of your application.\nThey are especially useful to encapsulate markup and code into reusable components."),(0,a.kt)("p",null,"Think of your application as a composition of components. An example of such a composition is a web page containing a\nheader component, a sidebar navigation component, a content component and a footer component. A header component could\nfurther contain a logo component and a headline component, a sidebar could contain several reusable link components."),(0,a.kt)("h2",{id:"using-the-angular-cli-to-generate-a-component"},"Using the Angular CLI to generate a component"),(0,a.kt)("p",null,"You can generate a component using the Angular CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Navigate to the directory containing the application\ncd src/app\n\n# Generate the component, for example using "header" as its name\nng generate component header\n\n# Shorthand syntax\nng g c header\n')),(0,a.kt)("h2",{id:"anatomy-of-a-component"},"Anatomy of a Component"),(0,a.kt)("p",null,"An angular component consists of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A directory named after the component"),(0,a.kt)("li",{parentName:"ul"},"A component file, ",(0,a.kt)("inlineCode",{parentName:"li"},"<component-name>.component.ts")),(0,a.kt)("li",{parentName:"ul"},"A template file, ",(0,a.kt)("inlineCode",{parentName:"li"},"<component-name>.component.html")),(0,a.kt)("li",{parentName:"ul"},"A CSS file, ",(0,a.kt)("inlineCode",{parentName:"li"},"<component-name>.component.css")),(0,a.kt)("li",{parentName:"ul"},"A testing specification file, ",(0,a.kt)("inlineCode",{parentName:"li"},"<component-name>.component.spec.ts"))),(0,a.kt)("p",null,"As a naming convention, Angular uses ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case")," for the component file names and ",(0,a.kt)("inlineCode",{parentName:"p"},"PascalCase")," for class names. The\ncomponent class names are always suffixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),", ie. ",(0,a.kt)("inlineCode",{parentName:"p"},"HeaderComponent"),"."),(0,a.kt)("p",null,"The component classes is annotated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Component")," decorator. Within the decorator, a selector is specified as\nwell as urls for the HTML template and CSS styles. The selector represents the tag name of your component, which is the\ncomponent name prefixed by something like ",(0,a.kt)("inlineCode",{parentName:"p"},"app"),", using a hyphen."),(0,a.kt)("p",null,"In the example below, we are additionally adding a title property which we can use inside our HTML template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {Component} from '@angular/core';\n\n@Component({\n    selector: 'app-header',\n    templateUrl: './header.component.html',\n    styleUrls: ['./header.component.css']\n})\nexport class HeaderComponent {\n    title = 'Hello World!';\n}\n")),(0,a.kt)("p",null,"The template file, in this case named ",(0,a.kt)("inlineCode",{parentName:"p"},"header.component.html")," can contain any markup that you would like to have inside\nyour component. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\n<header class="header">\n    <h1 class="header__headline">{{ title }}</h1>\n</header>\n')),(0,a.kt)("p",null,"The css file is initially empty when generated via command line tool. In there you can add any CSS you would like to use\nto style your component. A special CSS selector you can use inside the CSS file is the ",(0,a.kt)("inlineCode",{parentName:"p"},":host")," selector which can be\nused to style the surrounding component element itself which is used to embed the component into other components. In\nthis example, we are just styling the ",(0,a.kt)("inlineCode",{parentName:"p"},".header")," class and its ",(0,a.kt)("inlineCode",{parentName:"p"},".header__headline")," element, using\nthe ",(0,a.kt)("abbr",{title:"Block Element Modifier"},"BEM"),"-Notation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".header {\n    background: indigo;\n    color: white;\n    padding: 2rem 1rem;\n}\n\n.header__headline {\n    font-family: ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand,\n    Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold',\n    Calibri, source-sans-pro, sans-serif;\n    font-size: 2rem;\n    line-height: 1;\n}\n")),(0,a.kt)("h2",{id:"using-the-component-inside-your-application"},"Using the component inside your application"),(0,a.kt)("p",null,"In order to use the component inside your application, you can insert the tag the template of the parent app\ncomponent, ",(0,a.kt)("inlineCode",{parentName:"p"},"app.component.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\n<app-header></app-header>\n")),(0,a.kt)("h2",{id:"component-inputs"},"Component Inputs"),(0,a.kt)("p",null,"You can pass arguments to your component through Component Inputs.\nIn the example below, we will create ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," input by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Input()")," decorator to the property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {Component, Input} from '@angular/core';\n\n@Component({\n    selector: 'app-header',\n    templateUrl: './header.component.html',\n    styleUrls: ['./header.component.css']\n})\nexport class HeaderComponent {\n    @Input()\n    title = 'Hello World!';\n}\n")),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.component.html"),", you can then pass the title via a title attribute, either as a static string or a dynamic\nvalue via the square bracket syntax. This is also called property binding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- pass a static string --\x3e\n<app-header title="Good evening"></app-header>\n\n\x3c!-- pass a dynamic property to the app-header component --\x3e\n\x3c!-- you can also do JavaScript operations inside, like adding an exclamation mark: --\x3e\n<app-header [title]="greeting + \'!\'"></app-header>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sources"},"Sources"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://angular.io/guide/component-overview"},"https://angular.io/guide/component-overview"))))}u.isMDXComponent=!0}}]);