function t(t,e){return(t+1)%e}function e(t,e){return(t+e-1)%e}function n(t){return("0000"+t.toString()).slice(-4)}function s(t,e){return Math.floor(Math.random()*(e-t+1))+t}function r(t,e){new IntersectionObserver(((n,s)=>{n.forEach((n=>{n.intersectionRatio>0&&(e(t),s.disconnect())}))})).observe(t)}class i{constructor(t){this.obj=t,this.watchers=[]}get(){return this.obj}set(t){this.obj=t,this.watchers.forEach((t=>{t()}))}addWatcher(t){this.watchers.push(t)}}const o=new i(!0);let a;const c=[{threshold:20,trailLength:20},{threshold:40,trailLength:10},{threshold:80,trailLength:5},{threshold:140,trailLength:5},{threshold:200,trailLength:5}],l=new i({index:-1,length:0,threshold:c[2].threshold,trailLength:c[2].trailLength});function h(t){const e=l.get();e.index=t,l.set(e)}function d(){const e=l.get();e.index=t(e.index,e.length),l.set(e)}function m(t,e){const n=c.findIndex((e=>t.threshold===e.threshold))+e;if(n<0||n>=c.length)return t;const s=c[n];return{...t,...s}}const g=document.getElementsByClassName("threshold").item(0),u=Array.from(g.getElementsByClassName("num")),f=g.getElementsByClassName("dec").item(0),E=g.getElementsByClassName("inc").item(0),x=document.getElementsByClassName("index").item(0),y=Array.from(x.getElementsByClassName("num")),L=document.getElementsByClassName("links").item(0),B=Array.from(L.getElementsByClassName("link")),b=document.getElementById("main")?.getAttribute("currentMenuItemIndex");for(const[t,e]of B.entries())t===parseInt(b)&&(e.classList.add("current"),0!==t&&(document.title=e.innerText+" | "+document.title));function w(){const t=n(l.get().threshold);u.forEach(((e,n)=>{e.innerText=t[n]}))}function C(){const t=n(l.get().index+1),e=n(l.get().length);y.forEach(((n,s)=>{n.innerText=s<4?t[s]:e[s-4]}))}a=document.getElementsByClassName("container").item(0),o.addWatcher((()=>{o.get()?a.classList.remove("disableScroll"):a.classList.add("disableScroll")}));const N=function(){const t=document.getElementById("imagesSource");return null===t?[]:JSON.parse(t.textContent).sort(((t,e)=>t.index<e.index?-1:1))}();(function(t){const e=l.get();e.length=t,l.set(e),l.addWatcher((()=>{C(),w()}))})(N.length),w(),C(),f.addEventListener("click",(()=>{!function(){let t=l.get();t=m(t,-1),l.set(t)}()}),{passive:!0}),E.addEventListener("click",(()=>{!function(){let t=l.get();t=m(t,1),l.set(t)}()}),{passive:!0}),N.length>0&&(window.matchMedia("(hover: none)").matches?(await import("./AKxhiG.js")).initMobile(N):(await import("./4ZVXLc.js")).initStage(N));export{i as W,d as a,o as b,a as c,e as d,h as e,n as f,s as g,t as i,r as o,l as s};