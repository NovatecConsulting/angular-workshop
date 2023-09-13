"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[4542],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(1163),r=(t(9496),t(9613));const i={sidebar_position:5,id:"component_lifecycle",tags:["component","lifecycle"]},a="Lifecycle",l={unversionedId:"angular/basic-concepts/component/component_lifecycle",id:"angular/basic-concepts/component/component_lifecycle",title:"Lifecycle",description:"The component has multiple lifecycle hooks from initialization when it gets mounted inside the app to its destruction when it gets unmounted. Lifecycle hooks are implemented as class methods inside the .component.ts file.",source:"@site/docs/angular/basic-concepts/component/component-lifecycle.md",sourceDirName:"angular/basic-concepts/component",slug:"/angular/basic-concepts/component/component_lifecycle",permalink:"/angular-workshop/docs/angular/basic-concepts/component/component_lifecycle",draft:!1,tags:[{label:"component",permalink:"/angular-workshop/docs/tags/component"},{label:"lifecycle",permalink:"/angular-workshop/docs/tags/lifecycle"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"component_lifecycle",tags:["component","lifecycle"]},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/angular-workshop/docs/angular/basic-concepts/component/"},next:{title:"Exercises",permalink:"/angular-workshop/docs/category/exercises"}},c={},s=[],p={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lifecycle"},"Lifecycle"),(0,r.kt)("p",null,"The component has multiple lifecycle hooks from initialization when it gets mounted inside the app to its destruction when it gets unmounted. Lifecycle hooks are implemented as class methods inside the ",(0,r.kt)("inlineCode",{parentName:"p"},".component.ts")," file."),(0,r.kt)("p",null,"The most common lifecycle events of a component are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"constructor"),": called before any lifecycle hook. Usually only used for dependency injection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngOnChanges"),": called after every change to input properties and before processing content or child views"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngOnInit"),": Called after the constructor, initializing input properties, and the first call to ngOnChanges"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngDoCheck"),": Called every time the input properties are checked. Used to extend change detection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngAfterContentInit"),": called after the content has been initialized"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngAfterContentChecked"),": called every time after the content has been checked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngAfterViewInit"),": called after the view and child views have been initialized."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngAfterViewChecked"),": called every time after the view has been checked."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngOnDestroy"),": called before the instance of the component is destroyed.")),(0,r.kt)("h1",{id:"common-use-cases"},"Common use cases"),(0,r.kt)("p",null,"The most commonly used lifecycle hooks are ",(0,r.kt)("inlineCode",{parentName:"p"},"ngOnInit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ngAfterViewInit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ngOnDestroy"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ngOnDestroy")," is especially important as it is used to do cleanup tasks and to prevent memory leaks within your application.\nThis applies to RXJS subscriptions for example. Every subscription you subscribe to manually in your code needs to be unsubscribed."))}u.isMDXComponent=!0}}]);