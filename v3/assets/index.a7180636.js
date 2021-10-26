import{i as p}from"./utils.39620306.js";import{W as H,q as b,z as Q,r as $,U as k,o as _,a as L,e as y,w,F as E,b as A,j as z,d as I,A as C}from"./vue-libs.4d090e76.js";import{g as j}from"./index.cbbbdc40.js";import{u as B}from"./use-translate.0e71ed3e.js";var x=p&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,f={event:"event",observer:"observer"};function m(s,t){if(!!s.length){var e=s.indexOf(t);if(e>-1)return s.splice(e,1)}}function O(s,t){if(!(s.tagName!=="IMG"||!s.getAttribute("data-srcset"))){var e=s.getAttribute("data-srcset"),r=s.parentNode,i=r.offsetWidth*t,n,a,o;e=e.trim().split(",");var u=e.map(d=>(d=d.trim(),n=d.lastIndexOf(" "),n===-1?(a=d,o=999998):(a=d.substr(0,n),o=parseInt(d.substr(n+1,d.length-n-2),10)),[o,a]));u.sort((d,c)=>{if(d[0]<c[0])return 1;if(d[0]>c[0])return-1;if(d[0]===c[0]){if(c[1].indexOf(".webp",c[1].length-5)!==-1)return 1;if(d[1].indexOf(".webp",d[1].length-5)!==-1)return-1}return 0});for(var l="",h,v=0;v<u.length;v++){h=u[v],l=h[1];var g=u[v+1];if(g&&g[0]<i){l=h[1];break}else if(!g){l=h[1];break}}return l}}var D=(s=1)=>p&&window.devicePixelRatio||s;function W(){if(!p)return!1;var s=!0;try{var t=document.createElement("canvas");t.getContext&&t.getContext("2d")&&(s=t.toDataURL("image/webp").indexOf("data:image/webp")===0)}catch(e){s=!1}return s}function F(s,t){var e=null,r=0;return function(...i){if(!e){var n=Date.now()-r,a=()=>{r=Date.now(),e=!1,s.apply(this,i)};n>=t?a():e=setTimeout(a,t)}}}function N(s,t,e){s.addEventListener(t,e,{capture:!1,passive:!0})}function U(s,t,e){s.removeEventListener(t,e,!1)}var T=(s,t,e)=>{var r=new Image;if(!s||!s.src){var i=new Error("image src is required");return e(i)}r.src=s.src,s.cors&&(r.crossOrigin=s.cors),r.onload=()=>t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r.onerror=n=>e(n)};function q(s){return s!==null&&typeof s=="object"}function S(){}class V{constructor({max:t}){this.options={max:t||100},this._caches=[]}has(t){return this._caches.indexOf(t)>-1}add(t){this.has(t)||(this._caches.push(t),this._caches.length>this.options.max&&this.free())}free(){this._caches.shift()}}class P{constructor({el:t,src:e,error:r,loading:i,bindType:n,$parent:a,options:o,cors:u,elRenderer:l,imageCache:h}){this.el=t,this.src=e,this.error=r,this.loading=i,this.bindType=n,this.attempt=0,this.cors=u,this.naturalHeight=0,this.naturalWidth=0,this.options=o,this.rect=null,this.$parent=a,this.elRenderer=l,this._imageCache=h,this.performanceData={loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update({src:t,loading:e,error:r}){var i=this.src;this.src=t,this.loading=e,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){Object.keys(this.options.filter).forEach(t=>{this.options.filter[t](this,this.options)})}renderLoading(t){this.state.loading=!0,T({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,t()},()=>{t(),this.state.loading=!1})}load(t=S){if(this.attempt>this.options.attempt-1&&this.state.error){t();return}if(!(this.state.rendered&&this.state.loaded)){if(this._imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t();this.renderLoading(()=>{var e,r;this.attempt++,(e=(r=this.options.adapter).beforeLoad)==null||e.call(r,this,this.options),this.record("loadStart"),T({src:this.src,cors:this.cors},i=>{this.naturalHeight=i.naturalHeight,this.naturalWidth=i.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),t()},i=>{!this.options.silent&&console.error(i),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(t,e){this.elRenderer(this,t,e)}performance(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}var R="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",G=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],J={rootMargin:"0px",threshold:0};function K(){return class{constructor({preLoad:t,error:e,throttleWait:r,preLoadTop:i,dispatchEvent:n,loading:a,attempt:o,silent:u=!0,scale:l,listenEvents:h,filter:v,adapter:g,observer:d,observerOptions:c}){this.mode=f.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:u,dispatchEvent:!!n,throttleWait:r||200,preLoad:t||1.3,preLoadTop:i||0,error:e||R,loading:a||R,attempt:o||3,scale:l||D(l),ListenEvents:h||G,hasbind:!1,supportWebp:W(),filter:v||{},adapter:g||{},observer:!!d,observerOptions:c||J},this._initEvent(),this._imageCache=new V({max:200}),this.lazyLoadHandler=F(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?f.observer:f.event)}config(t={}){Object.assign(this.options,t)}performance(){return this.ListenerQueue.map(t=>t.performance())}addLazyBox(t){this.ListenerQueue.push(t),p&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}add(t,e,r){if(this.ListenerQueue.some(a=>a.el===t))return this.update(t,e),b(this.lazyLoadHandler);var i=this._valueFormatter(e.value),{src:n}=i;b(()=>{n=O(t,this.options.scale)||n,this._observer&&this._observer.observe(t);var a=Object.keys(e.modifiers)[0],o;a&&(o=r.context.$refs[a],o=o?o.$el||o:document.getElementById(a)),o||(o=j(t));var u=new P({bindType:e.arg,$parent:o,el:t,src:n,loading:i.loading,error:i.error,cors:i.cors,elRenderer:this._elRenderer.bind(this),options:this.options,imageCache:this._imageCache});this.ListenerQueue.push(u),p&&(this._addListenerTarget(window),this._addListenerTarget(o)),this.lazyLoadHandler(),b(()=>this.lazyLoadHandler())})}update(t,e,r){var i=this._valueFormatter(e.value),{src:n}=i;n=O(t,this.options.scale)||n;var a=this.ListenerQueue.find(o=>o.el===t);a?a.update({src:n,error:i.error,loading:i.loading}):this.add(t,e,r),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),b(()=>this.lazyLoadHandler())}remove(t){if(!!t){this._observer&&this._observer.unobserve(t);var e=this.ListenerQueue.find(r=>r.el===t);e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),m(this.ListenerQueue,e),e.$destroy())}}removeComponent(t){!t||(m(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}setMode(t){!x&&t===f.observer&&(t=f.event),this.mode=t,t===f.event?(this._observer&&(this.ListenerQueue.forEach(e=>{this._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(e=>{this._initListen(e.el,!0)})):(this.TargetQueue.forEach(e=>{this._initListen(e.el,!1)}),this._initIntersectionObserver())}_addListenerTarget(t){if(!!t){var e=this.TargetQueue.find(r=>r.el===t);return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===f.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}_removeListenerTarget(t){this.TargetQueue.forEach((e,r)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this._initListen(e.el,!1),this.TargetQueue.splice(r,1),e=null))})}_initListen(t,e){this.options.ListenEvents.forEach(r=>(e?N:U)(t,r,this.lazyLoadHandler))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(t,e)=>{this.Event.listeners[t]||(this.Event.listeners[t]=[]),this.Event.listeners[t].push(e)},this.$once=(t,e)=>{var r=(...i)=>{this.$off(t,r),e.apply(this,i)};this.$on(t,r)},this.$off=(t,e)=>{if(!e){if(!this.Event.listeners[t])return;this.Event.listeners[t].length=0;return}m(this.Event.listeners[t],e)},this.$emit=(t,e,r)=>{!this.Event.listeners[t]||this.Event.listeners[t].forEach(i=>i(e,r))}}_lazyLoadHandler(){var t=[];this.ListenerQueue.forEach(e=>{(!e.el||!e.el.parentNode)&&t.push(e);var r=e.checkInView();!r||e.load()}),t.forEach(e=>{m(this.ListenerQueue,e),e.$destroy()})}_initIntersectionObserver(){!x||(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(t=>{this._observer.observe(t.el)}))}_observerHandler(t){t.forEach(e=>{e.isIntersecting&&this.ListenerQueue.forEach(r=>{if(r.el===e.target){if(r.state.loaded)return this._observer.unobserve(r.el);r.load()}})})}_elRenderer(t,e,r){if(!!t.el){var{el:i,bindType:n}=t,a;switch(e){case"loading":a=t.loading;break;case"error":a=t.error;break;default:({src:a}=t);break}if(n?i.style[n]='url("'+a+'")':i.getAttribute("src")!==a&&i.setAttribute("src",a),i.setAttribute("lazy",e),this.$emit(e,t,r),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var o=new CustomEvent(e,{detail:t});i.dispatchEvent(o)}}}_valueFormatter(t){var e=t,{loading:r,error:i}=this.options;return q(t)&&({src:e}=t,r=t.loading||this.options.loading,i=t.error||this.options.error),{src:e,loading:r,error:i}}}}var X=s=>({props:{tag:{type:String,default:"div"}},emits:["show"],render(){return H(this.tag,this.show&&this.$slots.default?this.$slots.default():null)},data(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted(){this.el=this.$el,s.addLazyBox(this),s.lazyLoadHandler()},beforeUnmount(){s.removeComponent(this)},methods:{getRect(){this.rect=this.$el.getBoundingClientRect()},checkInView(){return this.getRect(),p&&this.rect.top<window.innerHeight*s.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*s.options.preLoad&&this.rect.right>0},load(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy(){return this.$destroy}}}),Y={selector:"img"};class Z{constructor({el:t,binding:e,vnode:r,lazy:i}){this.el=null,this.vnode=r,this.binding=e,this.options={},this.lazy=i,this._queue=[],this.update({el:t,binding:e})}update({el:t,binding:e}){this.el=t,this.options=Object.assign({},Y,e.value);var r=this.getImgs();r.forEach(i=>{this.lazy.add(i,Object.assign({},this.binding,{value:{src:"dataset"in i?i.dataset.src:i.getAttribute("data-src"),error:("dataset"in i?i.dataset.error:i.getAttribute("data-error"))||this.options.error,loading:("dataset"in i?i.dataset.loading:i.getAttribute("data-loading"))||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){var t=this.getImgs();t.forEach(e=>this.lazy.remove(e)),this.vnode=null,this.binding=null,this.lazy=null}}class M{constructor({lazy:t}){this.lazy=t,this._queue=[]}bind(t,e,r){var i=new Z({el:t,binding:e,vnode:r,lazy:this.lazy});this._queue.push(i)}update(t,e,r){var i=this._queue.find(n=>n.el===t);!i||i.update({el:t,binding:e,vnode:r})}unbind(t){var e=this._queue.find(r=>r.el===t);!e||(e.clear(),m(this._queue,e))}}var tt=s=>({props:{src:[String,Object],tag:{type:String,default:"img"}},render(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data(){return{el:null,options:{src:"",error:"",loading:"",attempt:s.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src(){this.init(),s.addLazyBox(this),s.lazyLoadHandler()}},created(){this.init(),this.renderSrc=this.options.loading},mounted(){this.el=this.$el,s.addLazyBox(this),s.lazyLoadHandler()},beforeUnmount(){s.removeComponent(this)},methods:{init(){var{src:t,loading:e,error:r}=s._valueFormatter(this.src);this.state.loaded=!1,this.options.src=t,this.options.error=r,this.options.loading=e,this.renderSrc=this.options.loading},getRect(){this.rect=this.$el.getBoundingClientRect()},checkInView(){return this.getRect(),p&&this.rect.top<window.innerHeight*s.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*s.options.preLoad&&this.rect.right>0},load(t=S){if(this.state.attempt>this.options.attempt-1&&this.state.error){t();return}var{src:e}=this.options;T({src:e},({src:r})=>{this.renderSrc=r,this.state.loaded=!0},()=>{this.state.attempt++,this.renderSrc=this.options.error,this.state.error=!0})}}}),et={install(s,t={}){var e=K(),r=new e(t),i=new M({lazy:r});s.config.globalProperties.$Lazyload=r,t.lazyComponent&&s.component("LazyComponent",X(r)),t.lazyImage&&s.component("LazyImage",tt(r)),s.directive("lazy",{beforeMount:r.add.bind(r),updated:r.update.bind(r),unmounted:r.remove.bind(r)}),s.directive("lazy-container",{beforeMount:i.bind.bind(i),updated:i.update.bind(i),unmounted:i.unbind.bind(i)})}};const ot=Q({setup(s){window.app&&window.app.use(et,{lazyComponent:!0});const t=B({"zh-CN":{title2:"\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D",title3:"\u61D2\u52A0\u8F7D\u6A21\u5757"},"en-US":{title2:"Lazyload Background Image",title3:"Lazyload Component"}}),e=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],r=["https://img.yzcdn.cn/vant/apple-5.jpg","https://img.yzcdn.cn/vant/apple-6.jpg"],i=["https://img.yzcdn.cn/vant/apple-8.jpg","https://img.yzcdn.cn/vant/apple-7.jpg"];return(n,a)=>{const o=$("demo-block"),u=$("lazy-component"),l=k("lazy");return _(),L(E,null,[y(o,{title:C(t)("basicUsage")},{default:w(()=>[(_(),L(E,null,A(e,h=>z(I("img",{key:h},null,512),[[l,h]])),64))]),_:1},8,["title"]),y(o,{title:C(t)("title2")},{default:w(()=>[(_(),L(E,null,A(r,h=>z(I("div",{key:h},null,512),[[l,h,"background-image"]])),64))]),_:1},8,["title"]),y(o,{title:C(t)("title3")},{default:w(()=>[y(u,null,{default:w(()=>[(_(),L(E,null,A(i,h=>z(I("img",{key:h},null,512),[[l,h]])),64))]),_:1})]),_:1},8,["title"])],64)}}});export{ot as default};
