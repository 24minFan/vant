import{c as p,e as v}from"./use-translate.0e71ed3e.js";import{m as r,n as z,w as I}from"./with-install.50e547fb.js";import{B as R}from"./constant.bdedcaa1.js";import{r as w,u as C}from"./use-route.2644a9f9.js";import{I as D}from"./index.8ab27c81.js";import{L}from"./index.19e95024.js";import{z as N,e as i}from"./vue-libs.4d090e76.js";const[q,a]=p("button"),O=v({},w,{tag:r("button"),text:String,icon:String,type:r("default"),size:r("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:r("button"),loadingSize:z,loadingText:String,loadingType:String,iconPosition:r("left")});var U=N({name:q,props:O,emits:["click"],setup(n,{emit:f,slots:t}){const g=C(),m=()=>t.loading?t.loading():i(L,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),s=()=>{if(n.loading)return m();if(t.icon)return i("div",{class:a("icon")},[t.icon()]);if(n.icon)return i(D,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},b=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return i("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:l}=n;if(e){const o={color:l?e:"white"};return l||(o.background=e),e.includes("gradient")?o.border=0:o.borderColor=e,o}},B=e=>{n.loading?e.preventDefault():n.disabled||(f("click",e),g())};return()=>{const{tag:e,type:l,size:o,block:y,round:S,plain:P,square:k,loading:j,disabled:c,hairline:d,nativeType:T,iconPosition:u}=n,h=[a([l,o,{plain:P,block:y,round:S,square:k,loading:j,disabled:c,hairline:d}]),{[R]:d}];return i(e,{type:T,class:h,style:x(),disabled:c,onClick:B},{default:()=>[i("div",{class:a("content")},[u==="left"&&s(),b(),u==="right"&&s()])]})}}});const J=I(U);export{J as B};
