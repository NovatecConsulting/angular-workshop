"use strict";(self.webpackChunkangular_workshop=self.webpackChunkangular_workshop||[]).push([[3751],{3141:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(9496),n=a(5924),r=a(9558),c=a(5529),s=a(9610),o=a(2752),g=a(1906),m=a(2109);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(m.Z,{tag:"doc_tags_list"}),l.createElement(o.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(g.Z,{tags:t}))))))}},9080:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9496),n=a(5924),r=a(1520);const c={tag:"tag_QJIy",tagRegular:"tagRegular_Z44j",tagWithCount:"tagWithCount_VIIs"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},1906:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9496),n=a(9558),r=a(9080);const c={tag:"tag_me9b"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function o(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},9558:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(4635);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);