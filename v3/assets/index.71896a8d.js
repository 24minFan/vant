import{a as S,c as k,x as P,e as j,m as B,C as I,y as u,B as $}from"./use-translate.0e71ed3e.js";import{n as O,m as R,c as x,w as T}from"./with-install.50e547fb.js";import{N as C,O as N,z,C as D,D as E,B as m,x as H,e as p}from"./vue-libs.4d090e76.js";import{o as V,u as A}from"./index.4a4661ca.js";import{u as F}from"./index.cbbbdc40.js";function L(o,f){if(!S||!window.IntersectionObserver)return;const a=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),s=()=>{o.value&&a.observe(o.value)},l=()=>{o.value&&a.unobserve(o.value)};C(l),N(l),V(s)}const[M,U]=k("sticky"),Z={zIndex:O,position:R("top"),container:Object,offsetTop:x(0),offsetBottom:x(0)};var _=z({name:M,props:Z,emits:["scroll","change"],setup(o,{emit:f,slots:a}){const s=D(),l=F(s),e=E({fixed:!1,width:0,height:0,transform:0}),i=m(()=>P(o.position==="top"?o.offsetTop:o.offsetBottom)),b=m(()=>{const{fixed:t,height:d,width:n}=e;if(t)return{width:`${n}px`,height:`${d}px`}}),w=m(()=>{if(!e.fixed)return;const t=j(B(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),g=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),h=()=>{if(!s.value||I(s))return;const{container:t,position:d}=o,n=u(s),y=$(window);if(e.width=n.width,e.height=n.height,d==="top")if(t){const r=u(t),c=r.bottom-i.value-e.height;e.fixed=i.value>n.top&&r.bottom>0,e.transform=c<0?c:0}else e.fixed=i.value>n.top;else{const{clientHeight:r}=document.documentElement;if(t){const c=u(t),v=r-c.top-i.value-e.height;e.fixed=r-i.value<n.bottom&&r>c.top,e.transform=v<0?-v:0}else e.fixed=r-i.value<n.bottom}g(y)};return H(()=>e.fixed,t=>f("change",t)),A("scroll",h,{target:l}),L(s,h),()=>{var t;return p("div",{ref:s,style:b.value},[p("div",{class:U({fixed:e.fixed}),style:w.value},[(t=a.default)==null?void 0:t.call(a)])])}}});const W=T(_);export{W as S};
