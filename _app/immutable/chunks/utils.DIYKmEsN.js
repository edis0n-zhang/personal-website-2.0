import{n as s}from"./scheduler.Dko9nVcq.js";const o=typeof window<"u";let c=o?()=>window.performance.now():()=>Date.now(),i=o?e=>requestAnimationFrame(e):s;const n=new Set;function r(e){n.forEach(t=>{t.c(e)||(n.delete(t),t.f())}),n.size!==0&&i(r)}function l(e){let t;return n.size===0&&i(r),{promise:new Promise(a=>{n.add(t={c:e,f:a})}),abort(){n.delete(t)}}}function d(e){return Object.prototype.toString.call(e)==="[object Date]"}export{d as i,l,c as n};
