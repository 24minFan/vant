import{B as he,z as ge,c as z,i as H,x as ye,p as Te,C as Se,f as Y,s as we,D as J,y as G,e as Ce}from"./use-translate.0e71ed3e.js";import{n as x,t as N,d as W,m as xe,c as O,u as Ie,w as Q}from"./with-install.50e547fb.js";import{z as L,B as w,e as m,L as ee,C as j,x as I,E as Be,D as je,q as k,P as ke,H as Re,M as Pe,J as pe,j as Ae,v as $e}from"./vue-libs.4d090e76.js";import{a as ze,r as Ne}from"./use-route.2644a9f9.js";import{S as Oe,u as Le,a as _e}from"./index.60bb85cf.js";import{u as Ee}from"./useParent.fa48ddd0.js";import{b as De}from"./constant.bdedcaa1.js";import{c as Me}from"./interceptor.eaf1d646.js";import{r as Z}from"./utils.39620306.js";import{u as He}from"./use-refs.5b149b49.js";import{u as We}from"./use-expose.9282c2d4.js";import{o as Ze}from"./on-popup-reopen.8d8043ad.js";import{S as Fe}from"./index.71896a8d.js";import{B as Ve}from"./index.8ab27c81.js";import{u as qe}from"./index.cbbbdc40.js";import{u as Ke}from"./useChildren.e93f4c15.js";import{o as Ue,u as Xe}from"./index.4a4661ca.js";function Ye(e,o,a){let i=0;const d=e.scrollLeft,u=a===0?1:Math.round(a*1e3/16);function f(){e.scrollLeft+=(o-d)/u,++i<u&&Z(f)}f()}function Je(e,o,a,i){let d=he(e);const u=d<o,f=a===0?1:Math.round(a*1e3/16),c=(o-d)/f;function r(){d+=c,(u&&d>o||!u&&d<o)&&(d=o),ge(e,d),u&&d<o||!u&&d>o?Z(r):i&&Z(i)}r()}function Ge(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ee(e)}const[Qe,te]=z("tab");var et=L({name:Qe,props:{dot:Boolean,type:String,color:String,title:String,badge:x,isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,renderTitle:Function,inactiveColor:String,showZeroBadge:N},setup(e){const o=w(()=>{const i={},{type:d,color:u,disabled:f,isActive:c,activeColor:r,inactiveColor:B}=e;u&&d==="card"&&(i.borderColor=u,f||(c?i.backgroundColor=u:i.color=u));const y=c?r:B;return y&&(i.color=y),i}),a=()=>{const i=m("span",{class:te("text",{ellipsis:!e.scrollable})},[e.renderTitle?e.renderTitle():e.title]);return e.dot||H(e.badge)&&e.badge!==""?m(Ve,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},Ge(i)?i:{default:()=>[i]}):i};return()=>m("div",{role:"tab",class:[te({active:e.isActive,disabled:e.disabled})],style:o.value,"aria-selected":e.isActive},[a()])}});function tt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ee(e)}const[nt,ne]=z("tabs");var at=L({name:nt,props:{count:W(Number),inited:Boolean,animated:Boolean,duration:W(x),swipeable:Boolean,lazyRender:Boolean,currentIndex:W(Number)},emits:["change"],setup(e,{emit:o,slots:a}){const i=j(),d=c=>o("change",c),u=()=>{var r;const c=(r=a.default)==null?void 0:r.call(a);return e.animated||e.swipeable?m(Oe,{ref:i,loop:!1,class:ne("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:d},tt(c)?c:{default:()=>[c]}):c},f=c=>{const r=i.value;r&&r.state.active!==c&&r.swipeTo(c,{immediate:!e.inited})};return I(()=>e.currentIndex,f),Be(()=>{f(e.currentIndex)}),()=>m("div",{class:ne("content",{animated:e.animated||e.swipeable})},[u()])}});const[ae,_]=z("tabs"),ot={type:xe("line"),color:String,border:Boolean,sticky:Boolean,active:O(0),duration:O(.3),animated:Boolean,ellipsis:N,swipeable:Boolean,scrollspy:Boolean,offsetTop:O(0),background:String,lazyRender:N,lineWidth:x,lineHeight:x,beforeChange:Function,swipeThreshold:O(5),titleActiveColor:String,titleInactiveColor:String},oe=Symbol(ae);var it=L({name:ae,props:ot,emits:["click","change","scroll","disabled","rendered","click-tab","update:active"],setup(e,{emit:o,slots:a}){let i,d,u;const f=j(),c=j(),r=j(),B=Le(),g=qe(f),[y,E]=He(),{children:b,linkChildren:D}=Ke(oe),s=je({inited:!1,position:"",lineStyle:{},currentIndex:-1}),T=w(()=>b.length>e.swipeThreshold||!e.ellipsis),re=w(()=>({borderColor:e.color,background:e.background})),R=(t,n)=>{var l;return(l=t.name)!=null?l:n},V=w(()=>{const t=b[s.currentIndex];if(t)return R(t,s.currentIndex)}),M=w(()=>ye(e.offsetTop)),q=w(()=>e.sticky?M.value+i:0),P=t=>{const n=c.value,l=y.value;if(!T.value||!n||!l||!l[s.currentIndex])return;const v=l[s.currentIndex].$el,h=v.offsetLeft-(n.offsetWidth-v.offsetWidth)/2;Ye(n,h,t?0:+e.duration)},S=()=>{const t=s.inited;k(()=>{const n=y.value;if(!n||!n[s.currentIndex]||e.type!=="line"||Se(f.value))return;const l=n[s.currentIndex].$el,{lineWidth:v,lineHeight:h}=e,C=l.offsetLeft+l.offsetWidth/2,$={width:Y(v),backgroundColor:e.color,transform:`translateX(${C}px) translateX(-50%)`};if(t&&($.transitionDuration=`${e.duration}s`),H(h)){const X=Y(h);$.height=X,$.borderRadius=X}s.lineStyle=$})},le=t=>{const n=t<s.currentIndex?-1:1;for(;t>=0&&t<b.length;){if(!b[t].disabled)return t;t+=n}},p=t=>{const n=le(t);if(!H(n))return;const l=b[n],v=R(l,n),h=s.currentIndex!==null;s.currentIndex=n,v!==e.active&&(o("update:active",v),h&&o("change",v,l.title))},A=t=>{const n=b.find((v,h)=>R(v,h)===t),l=n?b.indexOf(n):0;p(l)},K=(t=!1)=>{if(e.scrollspy){const n=b[s.currentIndex].$el;if(n&&g.value){const l=J(n,g.value)-q.value;d=!0,Je(g.value,l,t?0:+e.duration,()=>{d=!1})}}},ce=(t,n,l)=>{const{title:v,disabled:h}=b[n],C=R(b[n],n);o("click-tab",{name:C,title:v,event:l,disabled:h}),h?o("disabled",C,v):(Me(e.beforeChange,{args:[C],done:()=>{p(n),K()}}),o("click",C,v),ze(t))},se=t=>{u=t.isFixed,o("scroll",t)},de=t=>{k(()=>{A(t),K(!0)})},ue=()=>{for(let t=0;t<b.length;t++){const{top:n}=G(b[t].$el);if(n>q.value)return t===0?0:t-1}return b.length-1},fe=()=>{if(e.scrollspy&&!d){const t=ue();p(t)}},be=()=>b.map((t,n)=>m(et,Re({ref:E(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,isActive:n===s.currentIndex,scrollable:T.value,renderTitle:t.$slots.title,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:l=>ce(t,n,l)},Te(t,["dot","badge","title","disabled","showZeroBadge"])),null)),U=()=>{var l,v;const{type:t,border:n}=e;return m("div",{ref:r,class:[_("wrap",{scrollable:T.value}),{[De]:t==="line"&&n}]},[m("div",{ref:c,role:"tablist",class:_("nav",[t,{complete:T.value}]),style:re.value},[(l=a["nav-left"])==null?void 0:l.call(a),be(),t==="line"&&m("div",{class:_("line"),style:s.lineStyle},null),(v=a["nav-right"])==null?void 0:v.call(a)])])};I([()=>e.color,B.width],S),I(()=>e.active,t=>{t!==V.value&&A(t)}),I(()=>b.length,()=>{s.inited&&(A(e.active),S(),k(()=>{P(!0)}))}),I(()=>s.currentIndex,()=>{P(),S(),u&&!e.scrollspy&&we(Math.ceil(J(f.value)-M.value))});const ve=()=>{A(e.active),k(()=>{s.inited=!0,r.value&&(i=G(r.value).height),P(!0)})},me=(t,n)=>o("rendered",t,n);return We({resize:S,scrollTo:de}),ke(S),Ze(S),Ue(ve),Xe("scroll",fe,{target:g}),D({props:e,setLine:S,onRendered:me,currentName:V,scrollIntoView:P}),()=>{var t;return m("div",{ref:f,class:_([e.type])},[e.sticky?m(Fe,{container:f.value,offsetTop:M.value,onScroll:se},{default:()=>{var n;return[U(),(n=a["nav-bottom"])==null?void 0:n.call(a)]}}):[U(),(t=a["nav-bottom"])==null?void 0:t.call(a)],m(at,{count:b.length,inited:s.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:s.currentIndex,onChange:p},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})])}}});const ie=Symbol(),jt=()=>Pe(ie,null),[rt,F]=z("tab"),lt=Ce({},Ne,{dot:Boolean,name:x,badge:x,title:String,disabled:Boolean,titleClass:Ie,titleStyle:[String,Object],showZeroBadge:N});var ct=L({name:rt,props:lt,setup(e,{slots:o}){const a=j(!1),{parent:i,index:d}=Ee(oe);if(!i)return;const u=()=>{var r;return(r=e.name)!=null?r:d.value},f=()=>{a.value=!0,i.props.lazyRender&&k(()=>{i.onRendered(u(),e.title)})},c=w(()=>{const r=u()===i.currentName.value;return r&&!a.value&&f(),r});return I(()=>e.title,()=>{i.setLine(),i.scrollIntoView()}),pe(ie,c),()=>{var s;const{animated:r,swipeable:B,scrollspy:g,lazyRender:y}=i.props;if(!o.default&&!r)return;const E=g||c.value;if(r||B)return m(_e,{role:"tabpanel","aria-hidden":!c.value,class:F("pane-wrapper",{inactive:!c.value})},{default:()=>{var T;return[m("div",{class:F("pane")},[(T=o.default)==null?void 0:T.call(o)])]}});const D=a.value||g||!y?(s=o.default)==null?void 0:s.call(o):null;return Ae(m("div",{role:"tabpanel",class:F("pane")},[D]),[[$e,E]])}}});const kt=Q(ct),Rt=Q(it);export{Rt as T,kt as a,jt as u};
