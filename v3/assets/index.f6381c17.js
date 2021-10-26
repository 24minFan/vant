import{c as A,m as w,e as F,b as U,u as z}from"./use-translate.0e71ed3e.js";import{t as E,n as B,c as D,w as P}from"./with-install.50e547fb.js";import{b as O}from"./constant.bdedcaa1.js";import{c as M}from"./interceptor.eaf1d646.js";import{u as R}from"./use-placeholder.1b3510d7.js";import{z as I,C as g,e as t,I as K,B as Y,r as Z,o as q,a as G,w as a,A as e,h as l,t as n,d as T,F as H}from"./vue-libs.4d090e76.js";import{u as J}from"./useChildren.e93f4c15.js";import{r as L,u as Q}from"./use-route.2644a9f9.js";import{B as W,I as X}from"./index.8ab27c81.js";import{u as ee}from"./useParent.fa48ddd0.js";import{T as te}from"./function-call.4a2ede85.js";import"./use-height.2c75b9fa.js";import"./mount-component.86c3a9cb.js";import"./use-expose.9282c2d4.js";import"./index.b86b64af.js";import"./use-touch.66e4202e.js";import"./index.4a4661ca.js";import"./utils.39620306.js";import"./index.cbbbdc40.js";import"./use-lazy-render.a4eed0b1.js";import"./on-popup-reopen.8d8043ad.js";import"./index.19403714.js";import"./index.19e95024.js";const[k,N]=A("tabbar"),ae={route:Boolean,fixed:E,border:E,zIndex:B,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:D(0),safeAreaInsetBottom:{type:Boolean,default:null}},S=Symbol(k);var oe=I({name:k,props:ae,emits:["change","update:modelValue"],setup(s,{emit:o,slots:m}){const p=g(),{linkChildren:_}=J(S),v=R(p,N),h=()=>{var d;return(d=s.safeAreaInsetBottom)!=null?d:s.fixed},f=()=>{var r;const{fixed:d,zIndex:b,border:i}=s;return t("div",{ref:p,style:w(b),class:[N({fixed:d}),{[O]:i,"van-safe-area-bottom":h()}]},[(r=m.default)==null?void 0:r.call(m)])};return _({props:s,setActive:d=>{d!==s.modelValue&&M(s.beforeChange,{args:[d],done(){o("update:modelValue",d),o("change",d)}})}}),()=>s.fixed&&s.placeholder?v(f):f()}});const x=P(oe),[ne,y]=A("tabbar-item"),ue=F({},L,{dot:Boolean,icon:String,name:B,badge:B,iconPrefix:String});var le=I({name:ne,props:ue,emits:["click"],setup(s,{emit:o,slots:m}){const p=Q(),_=K().proxy,{parent:v,index:h}=ee(S);if(!v)return;const f=Y(()=>{const{route:b,modelValue:i}=v.props;if(b&&"$route"in _){const{$route:r}=_,{to:c}=s,C=U(c)?c:{path:c},j="path"in C&&C.path===r.path,$="name"in C&&C.name===r.name;return j||$}return(s.name||h.value)===i}),V=b=>{var i;v.setActive((i=s.name)!=null?i:h.value),o("click",b),p()},d=()=>{if(m.icon)return m.icon({active:f.value});if(s.icon)return t(X,{name:s.icon,classPrefix:s.iconPrefix},null)};return()=>{var j;const{dot:b,badge:i}=s,{activeColor:r,inactiveColor:c}=v.props,C=f.value?r:c;return t("div",{class:y({active:f.value}),style:{color:C},onClick:V},[t(W,{dot:b,content:i,class:y("icon")},{default:d}),t("div",{class:y("text")},[(j=m.default)==null?void 0:j.call(m,{active:f.value})])])}}});const u=P(le);const ie=["src"],ke=I({setup(s){const o=z({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),m=g(0),p=g(0),_=g(0),v=g(0),h=g(0),f=g("home"),V={active:"https://img.yzcdn.cn/vant/user-active.png",inactive:"https://img.yzcdn.cn/vant/user-inactive.png"},d=b=>{te(`${o("tab")} ${b+1}`)};return(b,i)=>{const r=Z("demo-block");return q(),G(H,null,[t(r,{title:e(o)("basicUsage")},{default:a(()=>[t(e(x),{modelValue:m.value,"onUpdate:modelValue":i[0]||(i[0]=c=>m.value=c)},{default:a(()=>[t(e(u),{icon:"home-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"search"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"friends-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"setting-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(r,{title:e(o)("matchByName")},{default:a(()=>[t(e(x),{modelValue:f.value,"onUpdate:modelValue":i[1]||(i[1]=c=>f.value=c)},{default:a(()=>[t(e(u),{name:"home",icon:"home-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{name:"search",icon:"search"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{name:"friends",icon:"friends-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{name:"setting",icon:"setting-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(r,{title:e(o)("badge")},{default:a(()=>[t(e(x),{modelValue:p.value,"onUpdate:modelValue":i[2]||(i[2]=c=>p.value=c)},{default:a(()=>[t(e(u),{icon:"home-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"search",dot:""},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"friends-o",badge:"5"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"setting-o",badge:"20"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(r,{title:e(o)("customIcon")},{default:a(()=>[t(e(x),{modelValue:_.value,"onUpdate:modelValue":i[3]||(i[3]=c=>_.value=c)},{default:a(()=>[t(e(u),{badge:"3"},{icon:a(c=>[T("img",{src:c.active?V.active:V.inactive},null,8,ie)]),default:a(()=>[T("span",null,n(e(o)("custom")),1)]),_:1}),t(e(u),{icon:"search"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"setting-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(r,{title:e(o)("customColor")},{default:a(()=>[t(e(x),{modelValue:v.value,"onUpdate:modelValue":i[4]||(i[4]=c=>v.value=c),"active-color":"#ee0a24","inactive-color":"#000"},{default:a(()=>[t(e(u),{icon:"home-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"search"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"friends-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1}),t(e(u),{icon:"setting-o"},{default:a(()=>[l(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(r,{title:e(o)("switchEvent")},{default:a(()=>[t(e(x),{modelValue:h.value,"onUpdate:modelValue":i[5]||(i[5]=c=>h.value=c),onChange:d},{default:a(()=>[t(e(u),{icon:"home-o"},{default:a(()=>[l(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(u),{icon:"search"},{default:a(()=>[l(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(u),{icon:"friends-o"},{default:a(()=>[l(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(u),{icon:"setting-o"},{default:a(()=>[l(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{ke as default};
