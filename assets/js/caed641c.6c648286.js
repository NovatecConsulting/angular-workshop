"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[1638],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(1163),r=(n(9496),n(9613));const a={sidebar_position:2,tags:["exercise","basic","component","testing","unit","jest","signal"],description:"Create a base unit test for the simple Angular component."},s="Testing",i={unversionedId:"exercises/basic/atomic-component/create-component-test",id:"exercises/basic/atomic-component/create-component-test",title:"Testing",description:"Create a base unit test for the simple Angular component.",source:"@site/docs/exercises/basic/atomic-component/create-component-test.md",sourceDirName:"exercises/basic/atomic-component",slug:"/exercises/basic/atomic-component/create-component-test",permalink:"/angular-workshop/docs/exercises/basic/atomic-component/create-component-test",draft:!1,editUrl:"https://github.com/NovatecConsulting/angular-workshop/tree/main/docs/exercises/basic/atomic-component/create-component-test.md",tags:[{label:"exercise",permalink:"/angular-workshop/docs/tags/exercise"},{label:"basic",permalink:"/angular-workshop/docs/tags/basic"},{label:"component",permalink:"/angular-workshop/docs/tags/component"},{label:"testing",permalink:"/angular-workshop/docs/tags/testing"},{label:"unit",permalink:"/angular-workshop/docs/tags/unit"},{label:"jest",permalink:"/angular-workshop/docs/tags/jest"},{label:"signal",permalink:"/angular-workshop/docs/tags/signal"}],version:"current",lastUpdatedAt:1694785701,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["exercise","basic","component","testing","unit","jest","signal"],description:"Create a base unit test for the simple Angular component."},sidebar:"tutorialSidebar",previous:{title:"Creation",permalink:"/angular-workshop/docs/exercises/basic/atomic-component/create-component"},next:{title:"Increase Reusability",permalink:"/angular-workshop/docs/exercises/basic/atomic-component/reusable-component"}},c={},l=[{value:"User Profile Card Test",id:"user-profile-card-test",level:2},{value:"Lets go",id:"lets-go",level:3},{value:"Solution",id:"solution",level:3}],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing"},"Testing"),(0,r.kt)("h2",{id:"user-profile-card-test"},"User Profile Card Test"),(0,r.kt)("admonition",{title:"Exercise",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Create a base unit test for the simple Angular component.")),(0,r.kt)("p",null,"For the user data you can assume ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," as object interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="user.model.ts"',title:'"user.model.ts"'},"export interface User {\n    firstName: string,\n    lastName: string,\n    mail: string;\n}\n")),(0,r.kt)("h3",{id:"lets-go"},"Lets go"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ex-base-create-component?file=src%2Fapp%2Fuser-profile-card%2Fuser-profile-card.component.spec.ts"},(0,r.kt)("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Fork base from StackBlitz"}))),(0,r.kt)("p",null,"You can also use your own Code from the steps before.\nIn this case the solution snippets will may not fit."),(0,r.kt)("p",null,"To run all tests execute ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"ng test"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"nx run-many -t test"),")."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"click to see the solution"),(0,r.kt)("div",null,"There are several ways to do this. Since we want to use Jest as unit testing library the example solution is implemented accordingly.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# run all tests\nng test\n# or if script is defined\nnpm test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="user-profile-card.component.spec.ts"',title:'"user-profile-card.component.spec.ts"'},"import {ComponentFixture, TestBed} from '@angular/core/testing';\n\nimport {User, UserProfileCardComponent} from './user-profile-card.component';\nimport {MockBuilder, MockRender, MockedComponentFixture, ngMocks} from 'ng-mocks';\n\ndescribe('UserProfileCardComponent', () => {\n    let component: UserProfileCardComponent;\n    let fixture: MockedComponentFixture<UserProfileCardComponent>;\n\n    beforeEach(() => MockBuilder(UserProfileCardComponent));\n\n    it('should create', () => {\n        fixture = MockRender(UserProfileCardComponent);\n        component = fixture.point.componentInstance;\n        fixture.detectChanges();\n        expect(component).toBeTruthy();\n    });\n\n    describe('public data', () => {\n        beforeEach(() => {\n            fixture = MockRender(UserProfileCardComponent);\n            component = fixture.point.componentInstance;\n            fixture.detectChanges();\n        });\n\n        describe('user', () => {\n            it('should provide the correct user', () => {\n                expect(component.user()).toStrictEqual({\n                    firstName: 'Nora',\n                    lastName: 'Crawford',\n                    mail: 'nora.crawford@dev.io',\n                } as User);\n            });\n\n            it('should provide correct initials', () => {\n                expect(component.userInitials()).toEqual('NC');\n            });\n\n            it('should provide correct full name', () => {\n                expect(component.fullName()).toEqual('Nora Crawford');\n            });\n        });\n    });\n\n    describe('ui tests', () => {\n        it('should match snapshot', () => {\n            fixture = MockRender(UserProfileCardComponent);\n            fixture.detectChanges();\n            expect(fixture.point.nativeElement).toMatchSnapshot();\n        });\n\n        it('should show initials within `.upc__avatar`', () => {\n            fixture = MockRender(UserProfileCardComponent);\n            fixture.detectChanges();\n\n            const avatarComponent = ngMocks.find('.upc__avatar');\n            expect(avatarComponent.nativeElement.textContent).toContain('NC');\n        });\n\n        describe('show more', () => {\n            let onShowMoreClickSpy: jest.SpyInstance;\n\n            beforeEach(() => {\n                fixture = MockRender(UserProfileCardComponent);\n                component = fixture.point.componentInstance;\n                fixture.detectChanges();\n\n                onShowMoreClickSpy = jest.spyOn(component, 'onShowDropdownClicked');\n            });\n\n            it('should trigger click handler on click event', () => {\n                const showMoreBtn = ngMocks.find('button.upc__show-dropdown');\n                // Act\n                ngMocks.click(showMoreBtn);\n                // Assert\n                expect(onShowMoreClickSpy).toHaveBeenCalledTimes(1);\n            });\n        });\n    });\n});\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ex-base-testing-component?file=src%2Fapp%2Fuser-profile-card%2Fuser-profile-card.component.spec.ts"},(0,r.kt)("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"}))))))}u.isMDXComponent=!0}}]);