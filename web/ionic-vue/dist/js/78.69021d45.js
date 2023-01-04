"use strict";(self["webpackChunkionic_vue"]=self["webpackChunkionic_vue"]||[]).push([[78],{4074:(e,t,o)=>{o.d(t,{a:()=>u,c:()=>m,g:()=>a,s:()=>h});var n=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r="ION-CONTENT",s="ion-content",c=".ion-content-scroll-host",i=`${s}, ${c}`,l=e=>e.tagName===r,a=async e=>l(e)?(await new Promise((t=>(0,n.c)(e,t))),e.getScrollElement()):e,u=e=>e.closest(i),h=(e,t)=>{if(l(e)){const o=e;return o.scrollToTop(t)}return Promise.resolve(e.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))},m=(e,t,o,n)=>{if(l(e)){const r=e;return r.scrollByPoint(t,o,n)}return Promise.resolve(e.scrollBy({top:o,left:t,behavior:n>0?"smooth":"auto"}))}},6078:(e,t,o)=>{o.r(t),o.d(t,{startStatusTap:()=>c});var n=o(65),r=o(4074),s=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=()=>{const e=window;e.addEventListener("statusTap",(()=>{(0,n.wj)((()=>{const t=e.innerWidth,o=e.innerHeight,c=document.elementFromPoint(t/2,o/2);if(!c)return;const i=(0,r.a)(c);i&&new Promise((e=>(0,s.c)(i,e))).then((()=>{(0,n.Iu)((async()=>{i.style.setProperty("--overflow","hidden"),await(0,r.s)(i,300),i.style.removeProperty("--overflow")}))}))}))}))}}}]);
//# sourceMappingURL=78.69021d45.js.map