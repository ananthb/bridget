import{l as e,c as t,W as n,s as a,i as s,a as i,d as o,b as c}from"./main.js";let r=[],d={x:0,y:0};const g=new n([]),l=new n(!1),m=new n(!1),u=new n(!1);let h,p,f=!1;function v(){return g.get().map((e=>r[e.i]))}function y(){const e=v().slice(-a.get().trailLength);return e.slice(0,e.length-1)}function w(){const e=v();return e[e.length-1]}function I(){const e=a.get(),t=[];for(let n=0;n<5;n++)t.push(r[s(e.index+n,e.length)]);return t}function x(){const e=a.get();return r[s(e.index,e.length)]}function E(){const e=a.get();return r[o(e.index,e.length)]}function L(e){if(l.get()||m.get()||!f)return;const t={x:e.clientX,y:e.clientY};if(Math.hypot(t.x-d.x,t.y-d.y)>a.get().threshold){d=t,i();const e={i:a.get().index,...t};g.set([...g.get(),e].slice(-a.get().length))}}function W(){if(m.get()||!f)return;l.set(!0),m.set(!0),k([w(),x(),E()]);const e=h.timeline();e.to(y(),{y:"+=20",ease:p.easeIn,stagger:.075,duration:.3,delay:.1,opacity:0}),e.to(w(),{x:0,y:0,ease:p.easeInOut,duration:.7,delay:.3}),e.to(w(),{delay:.1,scale:1,ease:p.easeInOut}),e.then((()=>{m.set(!1)})).catch((e=>{console.log(e)}))}function H(){if(m.get()||!f)return;l.set(!1),m.set(!0),N([w()]),N(y());const e=h.timeline();e.to(w(),{scale:.6,duration:.6,ease:p.easeInOut}),e.to(w(),{delay:.3,duration:.7,ease:p.easeInOut,x:g.get()[g.get().length-1].x-window.innerWidth/2,y:g.get()[g.get().length-1].y-window.innerHeight/2}),e.to(y(),{y:"-=20",ease:p.easeOut,stagger:-.1,duration:.3,opacity:1}),e.then((()=>{m.set(!1)})).catch((e=>{console.log(e)}))}function k(e){e.forEach((e=>{e.src=e.dataset.hiUrl,e.height=parseInt(e.dataset.hiImgH),e.width=parseInt(e.dataset.hiImgW)}))}function N(e){e.forEach((e=>{e.src=e.dataset.loUrl,e.height=parseInt(e.dataset.loImgH),e.width=parseInt(e.dataset.loImgW)}))}const b=document.createElement("div"),A=document.createElement("div");function O(e){const t=e.clientX,n=e.clientY;b.style.transform=`translate3d(${t}px, ${n}px, 0)`}function U(e){A.innerText=e}const T=document.getElementById("main"),S=[T.getAttribute("prevText"),T.getAttribute("closeText"),T.getAttribute("nextText")];function B(e){e===S[0]?$():e===S[1]?H():Y()}function X(e){if(!l.get()&&!m.get())switch(e.key){case"ArrowLeft":$();break;case"Escape":H();break;case"ArrowRight":Y()}}function Y(){m.get()||(g.set(g.get().map((e=>({...e,i:s(e.i,a.get().length)})))),i())}function $(){m.get()||(g.set(g.get().map((e=>({...e,i:o(e.i,a.get().length)})))),c())}function j(n){b.className="cursor",A.className="cursorInner",b.append(A),t.append(b),window.addEventListener("mousemove",O,{passive:!0}),u.addWatcher((e=>{e?b.classList.add("active"):b.classList.remove("active")})),function(n){!function(e){const n=document.createElement("div");n.className="stage";for(const t of e){const e=document.createElement("img");e.height=t.loImgH,e.width=t.loImgW,e.dataset.hiUrl=t.hiUrl,e.dataset.hiImgH=t.hiImgH.toString(),e.dataset.hiImgW=t.hiImgW.toString(),e.dataset.loUrl=t.loUrl,e.dataset.loImgH=t.loImgH.toString(),e.dataset.loImgW=t.loImgW.toString(),e.alt=t.alt,n.append(e)}t.append(n)}(n);const s=document.getElementsByClassName("stage").item(0);r=Array.from(s.getElementsByTagName("img")),s.addEventListener("click",(()=>{W()})),s.addEventListener("keydown",(()=>{W()})),window.addEventListener("mousemove",L,{passive:!0}),l.addWatcher((e=>{u.set(e&&!m.get())})),m.addWatcher((e=>{u.set(l.get()&&!e)})),g.addWatcher((e=>{!function(){const e=v();0!==e.length&&f&&(N(I()),h.set(e,{x:e=>g.get()[e].x-window.innerWidth/2,y:e=>g.get()[e].y-window.innerHeight/2,opacity:e=>e+1+a.get().trailLength<=g.get().length?0:1,zIndex:e=>e,scale:.6}),l.get()&&(N(v()),k([w()]),h.set(r,{opacity:0}),h.set(w(),{opacity:1,x:0,y:0,scale:1})))}()})),N(I()),window.addEventListener("mousemove",(()=>{e().then((e=>{h=e[0],p=e[1],f=!0})).catch((e=>{console.log(e)}))}),{once:!0,passive:!0})}(n),function(){const e=document.createElement("div");e.className="navOverlay";for(const t of S){const n=document.createElement("div");n.className="overlay",n.addEventListener("click",(()=>{B(t)}),{passive:!0}),n.addEventListener("keydown",(()=>{B(t)}),{passive:!0}),n.addEventListener("mouseover",(()=>{U(t)}),{passive:!0}),n.addEventListener("focus",(()=>{U(t)}),{passive:!0}),e.append(n)}u.addWatcher((()=>{u.get()?e.classList.add("active"):e.classList.remove("active")})),t.append(e),window.addEventListener("keydown",X,{passive:!0})}()}export{j as initDesktop};