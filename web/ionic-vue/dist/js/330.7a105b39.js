"use strict";(self["webpackChunkionic_vue"]=self["webpackChunkionic_vue"]||[]).push([[330],{4330:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>c});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let t=[],o=!0;const c=e?e.shadowRoot:document,i=e||document.body,d=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},a=()=>{o=!1,d([])},u=e=>{o=r.includes(e.key),o||d([])},v=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));d(t)}},E=()=>{c.activeElement===i&&d([])};c.addEventListener("keydown",u),c.addEventListener("focusin",v),c.addEventListener("focusout",E),c.addEventListener("touchstart",a),c.addEventListener("mousedown",a);const L=()=>{c.removeEventListener("keydown",u),c.removeEventListener("focusin",v),c.removeEventListener("focusout",E),c.removeEventListener("touchstart",a),c.removeEventListener("mousedown",a)};return{destroy:L,setFocus:d}}}}]);
//# sourceMappingURL=330.7a105b39.js.map