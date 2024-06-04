import{as as Ue,aE as Ye,g as H,V as St,a9 as kt,m as W,W as wt,i as xt,j,k as c,p as M,b as ne,J as we,K as xe,e as E,aF as Ge,t as Ke,ac as fe,s as z,r as $,L as B,ad as Ct,a6 as ve,ae as Je,w as le,a2 as Ce,P as se,x as U,l as N,v as Xe,I as te,c as Ee,N as Pe,O as Ze,aj as X,q as Ae,aG as Et,aw as Le,a0 as p,y as Oe,aH as Qe,aI as Pt,aJ as Re,a3 as et,a5 as At,ah as Ot,af as _t,aB as tt,$ as It,aK as Vt,al as Tt,f as Bt,aL as Lt,a8 as Rt}from"./index-BZ6Fnb53.js";import{c as _e,h as nt,d as at,g as Ie,M as ee,a as Ve,i as Mt,o as it,p as rt,e as ot,j as Ft,V as be,k as ce,t as lt,m as Nt,b as zt,x as Ht,l as Wt,n as Dt,v as jt,R as qt,u as $t,f as pt,y as Ut,q as Yt,r as Gt,w as Kt,L as Jt,A as Me,B as me,C as ge,D as Fe,E as Ne,F as Xt,G as Zt}from"./transition-OtY_rhOj.js";class J{constructor(n){let{x:t,y:a,width:i,height:r}=n;this.x=t,this.y=a,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function ze(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Qt(e){return Array.isArray(e)?new J({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function en(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let i,r,l,o,m;if(a.startsWith("matrix3d("))i=a.slice(9,-1).split(/, /),r=+i[0],l=+i[5],o=+i[12],m=+i[13];else if(a.startsWith("matrix("))i=a.slice(7,-1).split(/, /),r=+i[0],l=+i[3],o=+i[4],m=+i[5];else return new J(n);const s=t.transformOrigin,d=n.x-o-(1-r)*parseFloat(s),b=n.y-m-(1-l)*parseFloat(s.slice(s.indexOf(" ")+1)),w=r?n.width/r:e.offsetWidth+1,S=l?n.height/l:e.offsetHeight+1;return new J({x:d,y:b,width:w,height:S})}else return new J(n)}function tn(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(i=>{a.onfinish=()=>{i(a)}})),a}const re=new WeakMap;function nn(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const a=Ye(t),i=re.get(e);if(n[t]==null)i==null||i.forEach(r=>{const[l,o]=r;l===a&&(e.removeEventListener(a,o),i.delete(r))});else if(!i||![...i].some(r=>r[0]===a&&r[1]===n[t])){e.addEventListener(a,n[t]);const r=i||new Set;r.add([a,n[t]]),re.has(e)||re.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function an(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const a=Ye(t),i=re.get(e);i==null||i.forEach(r=>{const[l,o]=r;l===a&&(e.removeEventListener(a,o),i.delete(r))})}else e.removeAttribute(t)})}function rn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return H()({name:t??St(kt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...W()},setup(a,i){let{slots:r}=i;return()=>{var l;return wt(a.tag,{class:[e,a.class],style:a.style},(l=r.default)==null?void 0:l.call(r))}}})}function st(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const on="cubic-bezier(0.4, 0, 0.2, 1)",na="cubic-bezier(0.0, 0, 0.2, 1)",aa="cubic-bezier(0.4, 0, 1, 1)";function ln(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?sn(e):Te(e))return e;e=e.parentElement}return document.scrollingElement}function ue(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Te(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Te(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function sn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function cn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const un=H()({name:"VCardActions",props:W(),setup(e,n){let{slots:t}=n;return xt({VBtn:{slim:!0,variant:"text"}}),j(()=>{var a;return c("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),dn=M({opacity:[Number,String],...W(),...ne()},"VCardSubtitle"),fn=H()({name:"VCardSubtitle",props:dn(),setup(e,n){let{slots:t}=n;return j(()=>c(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),vn=rn("v-card-title");function mn(e){return{aspectStyles:E(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const ct=M({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...W(),...we()},"VResponsive"),He=H()({name:"VResponsive",props:ct(),setup(e,n){let{slots:t}=n;const{aspectStyles:a}=mn(e),{dimensionStyles:i}=xe(e);return j(()=>{var r;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[c("div",{class:"v-responsive__sizer",style:a.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&c("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function gn(e,n){if(!Ge)return;const t=n.modifiers||{},a=n.value,{handler:i,options:r}=typeof a=="object"?a:{handler:a,options:{}},l=new IntersectionObserver(function(){var b;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const s=(b=e._observe)==null?void 0:b[n.instance.$.uid];if(!s)return;const d=o.some(w=>w.isIntersecting);i&&(!t.quiet||s.init)&&(!t.once||d||s.init)&&i(d,o,m),d&&t.once?ut(e,n):s.init=!0},r);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:l},l.observe(e)}function ut(e,n){var a;const t=(a=e._observe)==null?void 0:a[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const yn={mounted:gn,unmounted:ut},hn=M({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ct(),...W(),..._e(),...nt()},"VImg"),dt=H()({name:"VImg",directives:{intersect:yn},props:hn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:a}=n;const{backgroundColorClasses:i,backgroundColorStyles:r}=at(Ke(e,"color")),{roundedClasses:l}=Ie(e),o=fe("VImg"),m=z(""),s=$(),d=z(e.eager?"loading":"idle"),b=z(),w=z(),S=E(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=E(()=>S.value.aspect||b.value/w.value||0);B(()=>e.src,()=>{h(d.value!=="idle")}),B(g,(f,v)=>{!f&&v&&s.value&&I(s.value)}),Ct(()=>h());function h(f){if(!(e.eager&&f)&&!(Ge&&!f&&!e.eager)){if(d.value="loading",S.value.lazySrc){const v=new Image;v.src=S.value.lazySrc,I(v,null)}S.value.src&&ve(()=>{var v;t("loadstart",((v=s.value)==null?void 0:v.currentSrc)||S.value.src),setTimeout(()=>{var y;if(!o.isUnmounted)if((y=s.value)!=null&&y.complete){if(s.value.naturalWidth||_(),d.value==="error")return;g.value||I(s.value,null),d.value==="loading"&&P()}else g.value||I(s.value),x()})})}}function P(){var f;o.isUnmounted||(x(),I(s.value),d.value="loaded",t("load",((f=s.value)==null?void 0:f.currentSrc)||S.value.src))}function _(){var f;o.isUnmounted||(d.value="error",t("error",((f=s.value)==null?void 0:f.currentSrc)||S.value.src))}function x(){const f=s.value;f&&(m.value=f.currentSrc||f.src)}let k=-1;Je(()=>{clearTimeout(k)});function I(f){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(k),o.isUnmounted)return;const{naturalHeight:F,naturalWidth:L}=f;F||L?(b.value=L,w.value=F):!f.complete&&d.value==="loading"&&v!=null?k=window.setTimeout(y,v):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,w.value=1)};y()}const T=E(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var y;if(!S.value.src||d.value==="idle")return null;const f=c("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:S.value.src,srcset:S.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:P,onError:_},null),v=(y=a.sources)==null?void 0:y.call(a);return c(ee,{transition:e.transition,appear:!0},{default:()=>[le(v?c("picture",{class:"v-img__picture"},[v,f]):f,[[Xe,d.value==="loaded"]])]})},u=()=>c(ee,{transition:e.transition},{default:()=>[S.value.lazySrc&&d.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:S.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),V=()=>a.placeholder?c(ee,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&c("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,Y=()=>a.error?c(ee,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&c("div",{class:"v-img__error"},[a.error()])]}):null,G=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,C=z(!1);{const f=B(g,v=>{v&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{C.value=!0})}),f())})}return j(()=>{const f=He.filterProps(e);return le(c(He,U({class:["v-img",{"v-img--booting":!C.value},i.value,l.value,e.class],style:[{width:N(e.width==="auto"?b.value:e.width)},r.value,e.style]},f,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(se,null,[c(O,null,null),c(u,null,null),c(G,null,null),c(V,null,null),c(Y,null,null)]),default:a.default}),[[Ce("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:m,image:s,state:d,naturalWidth:b,naturalHeight:w}}}),bn=M({start:Boolean,end:Boolean,icon:te,image:String,text:String,...W(),...Ve(),..._e(),...Mt(),...ne(),...Ee(),...it({variant:"flat"})},"VAvatar"),We=H()({name:"VAvatar",props:bn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=Pe(e),{colorClasses:i,colorStyles:r,variantClasses:l}=rt(e),{densityClasses:o}=ot(e),{roundedClasses:m}=Ie(e),{sizeClasses:s,sizeStyles:d}=Ft(e);return j(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,i.value,o.value,m.value,s.value,l.value,e.class],style:[r.value,d.value,e.style]},{default:()=>[t.default?c(ce,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?c(dt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(be,{key:"icon",icon:e.icon},null):e.text,lt(!1,"v-avatar")]})),{}}}),Sn=M({appendAvatar:String,appendIcon:te,prependAvatar:String,prependIcon:te,subtitle:[String,Number],title:[String,Number],...W(),...Ve()},"VCardItem"),kn=H()({name:"VCardItem",props:Sn(),setup(e,n){let{slots:t}=n;return j(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),i=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),l=!!(r||t.append),o=!!(e.title!=null||t.title),m=!!(e.subtitle!=null||t.subtitle);return c("div",{class:["v-card-item",e.class],style:e.style},[i&&c("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?c(ce,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):c(se,null,[e.prependAvatar&&c(We,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(be,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),c("div",{class:"v-card-item__content"},[o&&c(vn,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),m&&c(fn,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),l&&c("div",{key:"append",class:"v-card-item__append"},[t.append?c(ce,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):c(se,null,[e.appendIcon&&c(be,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(We,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),wn=M({opacity:[Number,String],...W(),...ne()},"VCardText"),xn=H()({name:"VCardText",props:wn(),setup(e,n){let{slots:t}=n;return j(()=>c(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Cn=M({appendAvatar:String,appendIcon:te,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Nt(),...W(),...Ve(),...we(),...zt(),...Ht(),...Wt(),...Dt(),..._e(),...jt(),...ne(),...Ee(),...it({variant:"elevated"})},"VCard"),ia=H()({name:"VCard",directives:{Ripple:qt},props:Cn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:i}=Pe(e),{borderClasses:r}=$t(e),{colorClasses:l,colorStyles:o,variantClasses:m}=rt(e),{densityClasses:s}=ot(e),{dimensionStyles:d}=xe(e),{elevationClasses:b}=pt(e),{loaderClasses:w}=Ut(e),{locationStyles:S}=Yt(e),{positionClasses:g}=Gt(e),{roundedClasses:h}=Ie(e),P=Kt(e,t),_=E(()=>e.link!==!1&&P.isLink.value),x=E(()=>!e.disabled&&e.link!==!1&&(e.link||P.isClickable.value));return j(()=>{const k=_.value?"a":e.tag,I=!!(a.title||e.title!=null),T=!!(a.subtitle||e.subtitle!=null),O=I||T,u=!!(a.append||e.appendAvatar||e.appendIcon),V=!!(a.prepend||e.prependAvatar||e.prependIcon),Y=!!(a.image||e.image),G=O||V||u,C=!!(a.text||e.text!=null);return le(c(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":x.value},i.value,r.value,l.value,s.value,b.value,w.value,g.value,h.value,m.value,e.class],style:[o.value,d.value,S.value,e.style],href:P.href.value,onClick:x.value&&P.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var f;return[Y&&c("div",{key:"image",class:"v-card__image"},[a.image?c(ce,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):c(dt,{key:"image-img",cover:!0,src:e.image},null)]),c(Jt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),G&&c(kn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),C&&c(xn,{key:"text"},{default:()=>{var v;return[((v=a.text)==null?void 0:v.call(a))??e.text]}}),(f=a.default)==null?void 0:f.call(a),a.actions&&c(un,null,{default:a.actions}),lt(x.value,"v-card")]}}),[[Ce("ripple"),x.value&&e.ripple]])}),{}}}),En=M({fluid:{type:Boolean,default:!1},...W(),...ne()},"VContainer"),ra=H()({name:"VContainer",props:En(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=Ze();return j(()=>c(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}});function ye(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Pn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function De(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,i=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,r=t==="top"?0:t==="bottom"?n.height:t;return ye({x:i,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,i=t==="left"?0:t==="right"?n.width:t,r=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ye({x:i,y:r},n)}return ye({x:n.width/2,y:n.height/2},n)}const ft={static:_n,connected:Vn},An=M({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ft},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function On(e,n){const t=$({}),a=$();X&&Ae(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var l,o;B(()=>e.locationStrategy,r),p(()=>{window.removeEventListener("resize",i),a.value=void 0}),window.addEventListener("resize",i,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:a.value=(o=ft[e.locationStrategy](n,e,t))==null?void 0:o.updateLocation});function i(r){var l;(l=a.value)==null||l.call(a,r)}return{contentStyles:t,updateLocation:a}}function _n(){}function In(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=en(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Vn(e,n,t){(Array.isArray(e.target.value)||cn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:i,preferredOrigin:r}=Et(()=>{const g=Me(n.location,e.isRtl.value),h=n.origin==="overlap"?g:n.origin==="auto"?me(g):Me(n.origin,e.isRtl.value);return g.side===h.side&&g.align===ge(h).align?{preferredAnchor:Fe(g),preferredOrigin:Fe(h)}:{preferredAnchor:g,preferredOrigin:h}}),[l,o,m,s]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>E(()=>{const h=parseFloat(n[g]);return isNaN(h)?1/0:h})),d=E(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let b=!1;const w=new ResizeObserver(()=>{b&&S()});B([e.target,e.contentEl],(g,h)=>{let[P,_]=g,[x,k]=h;x&&!Array.isArray(x)&&w.unobserve(x),P&&!Array.isArray(P)&&w.observe(P),k&&w.unobserve(k),_&&w.observe(_)},{immediate:!0}),p(()=>{w.disconnect()});function S(){if(b=!1,requestAnimationFrame(()=>b=!0),!e.target.value||!e.contentEl.value)return;const g=Qt(e.target.value),h=In(e.contentEl.value,e.isRtl.value),P=ue(e.contentEl.value),_=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(h.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),h.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=P.reduce((C,f)=>{const v=f.getBoundingClientRect(),y=new J({x:f===document.documentElement?0:v.x,y:f===document.documentElement?0:v.y,width:f.clientWidth,height:f.clientHeight});return C?new J({x:Math.max(C.left,y.left),y:Math.max(C.top,y.top),width:Math.min(C.right,y.right)-Math.max(C.left,y.left),height:Math.min(C.bottom,y.bottom)-Math.max(C.top,y.top)}):y},void 0);x.x+=_,x.y+=_,x.width-=_*2,x.height-=_*2;let k={anchor:i.value,origin:r.value};function I(C){const f=new J(h),v=De(C.anchor,g),y=De(C.origin,f);let{x:F,y:L}=Pn(v,y);switch(C.anchor.side){case"top":L-=d.value[0];break;case"bottom":L+=d.value[0];break;case"left":F-=d.value[0];break;case"right":F+=d.value[0];break}switch(C.anchor.align){case"top":L-=d.value[1];break;case"bottom":L+=d.value[1];break;case"left":F-=d.value[1];break;case"right":F+=d.value[1];break}return f.x+=F,f.y+=L,f.width=Math.min(f.width,m.value),f.height=Math.min(f.height,s.value),{overflows:ze(f,x),x:F,y:L}}let T=0,O=0;const u={x:0,y:0},V={x:!1,y:!1};let Y=-1;for(;!(Y++>10);){const{x:C,y:f,overflows:v}=I(k);T+=C,O+=f,h.x+=C,h.y+=f;{const y=Ne(k.anchor),F=v.x.before||v.x.after,L=v.y.before||v.y.after;let Z=!1;if(["x","y"].forEach(R=>{if(R==="x"&&F&&!V.x||R==="y"&&L&&!V.y){const D={anchor:{...k.anchor},origin:{...k.origin}},ae=R==="x"?y==="y"?ge:me:y==="y"?me:ge;D.anchor=ae(D.anchor),D.origin=ae(D.origin);const{overflows:K}=I(D);(K[R].before<=v[R].before&&K[R].after<=v[R].after||K[R].before+K[R].after<(v[R].before+v[R].after)/2)&&(k=D,Z=V[R]=!0)}}),Z)continue}v.x.before&&(T+=v.x.before,h.x+=v.x.before),v.x.after&&(T-=v.x.after,h.x-=v.x.after),v.y.before&&(O+=v.y.before,h.y+=v.y.before),v.y.after&&(O-=v.y.after,h.y-=v.y.after);{const y=ze(h,x);u.x=x.width-y.x.before-y.x.after,u.y=x.height-y.y.before-y.y.after,T+=y.x.before,h.x+=y.x.before,O+=y.y.before,h.y+=y.y.before}break}const G=Ne(k.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${k.anchor.side} ${k.anchor.align}`,transformOrigin:`${k.origin.side} ${k.origin.align}`,top:N(he(O)),left:e.isRtl.value?void 0:N(he(T)),right:e.isRtl.value?N(he(-T)):void 0,minWidth:N(G==="y"?Math.min(l.value,g.width):l.value),maxWidth:N(je(Le(u.x,l.value===1/0?0:l.value,m.value))),maxHeight:N(je(Le(u.y,o.value===1/0?0:o.value,s.value)))}),{available:u,contentBox:h}}return B(()=>[i.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>S()),ve(()=>{const g=S();if(!g)return;const{available:h,contentBox:P}=g;P.height>h.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function he(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function je(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Se=!0;const de=[];function Tn(e){!Se||de.length?(de.push(e),ke()):(Se=!1,e(),ke())}let qe=-1;function ke(){cancelAnimationFrame(qe),qe=requestAnimationFrame(()=>{const e=de.shift();e&&e(),de.length?ke():Se=!0})}const oe={none:null,close:Rn,block:Mn,reposition:Fn},Bn=M({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in oe}},"VOverlay-scroll-strategies");function Ln(e,n){if(!X)return;let t;Oe(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Qe(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=oe[e.scrollStrategy])==null||a.call(oe,n,e,t)}))}),p(()=>{t==null||t.stop()})}function Rn(e){function n(t){e.isActive.value=!1}vt(e.targetEl.value??e.contentEl.value,n)}function Mn(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,a=[...new Set([...ue(e.targetEl.value,n.contained?t:void 0),...ue(e.contentEl.value,n.contained?t:void 0)])].filter(o=>!o.classList.contains("v-overlay-scroll-blocked")),i=window.innerWidth-document.documentElement.offsetWidth,r=(o=>Te(o)&&o)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((o,m)=>{o.style.setProperty("--v-body-scroll-x",N(-o.scrollLeft)),o.style.setProperty("--v-body-scroll-y",N(-o.scrollTop)),o!==document.documentElement&&o.style.setProperty("--v-scrollbar-offset",N(i)),o.classList.add("v-overlay-scroll-blocked")}),p(()=>{a.forEach((o,m)=>{const s=parseFloat(o.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(o.style.getPropertyValue("--v-body-scroll-y")),b=o.style.scrollBehavior;o.style.scrollBehavior="auto",o.style.removeProperty("--v-body-scroll-x"),o.style.removeProperty("--v-body-scroll-y"),o.style.removeProperty("--v-scrollbar-offset"),o.classList.remove("v-overlay-scroll-blocked"),o.scrollLeft=-s,o.scrollTop=-d,o.style.scrollBehavior=b}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Fn(e,n,t){let a=!1,i=-1,r=-1;function l(o){Tn(()=>{var d,b;const m=performance.now();(b=(d=e.updateLocation).value)==null||b.call(d,o),a=(performance.now()-m)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?o=>o():requestIdleCallback)(()=>{t.run(()=>{vt(e.targetEl.value??e.contentEl.value,o=>{a?(cancelAnimationFrame(i),i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{l(o)})})):l(o)})})}),p(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(i)})}function vt(e,n){const t=[document,...ue(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),p(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const Nn=Symbol.for("vuetify:v-menu"),zn=M({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Hn(e,n){let t=()=>{};function a(l){t==null||t();const o=Number(l?e.openDelay:e.closeDelay);return new Promise(m=>{t=Pt(o,()=>{n==null||n(l),m(l)})})}function i(){return a(!0)}function r(){return a(!1)}return{clearDelay:t,runOpenDelay:i,runCloseDelay:r}}const Wn=M({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...zn()},"VOverlay-activator");function Dn(e,n){let{isActive:t,isTop:a}=n;const i=fe("useActivator"),r=$();let l=!1,o=!1,m=!0;const s=E(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=E(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:b,runCloseDelay:w}=Hn(e,u=>{u===(e.openOnHover&&l||s.value&&o)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==u&&(m=!0),t.value=u)}),S=$(),g={onClick:u=>{u.stopPropagation(),r.value=u.currentTarget||u.target,t.value||(S.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var V;(V=u.sourceCapabilities)!=null&&V.firesTouchEvents||(l=!0,r.value=u.currentTarget||u.target,b())},onMouseleave:u=>{l=!1,w()},onFocus:u=>{At(u.target,":focus-visible")!==!1&&(o=!0,u.stopPropagation(),r.value=u.currentTarget||u.target,b())},onBlur:u=>{o=!1,u.stopPropagation(),w()}},h=E(()=>{const u={};return d.value&&(u.onClick=g.onClick),e.openOnHover&&(u.onMouseenter=g.onMouseenter,u.onMouseleave=g.onMouseleave),s.value&&(u.onFocus=g.onFocus,u.onBlur=g.onBlur),u}),P=E(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{l=!0,b()},u.onMouseleave=()=>{l=!1,w()}),s.value&&(u.onFocusin=()=>{o=!0,b()},u.onFocusout=()=>{o=!1,w()}),e.closeOnContentClick){const V=et(Nn,null);u.onClick=()=>{t.value=!1,V==null||V.closeParents()}}return u}),_=E(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{m&&(l=!0,m=!1,b())},u.onMouseleave=()=>{l=!1,w()}),u});B(a,u=>{u&&(e.openOnHover&&!l&&(!s.value||!o)||s.value&&!o&&(!e.openOnHover||!l))&&(t.value=!1)}),B(t,u=>{u||setTimeout(()=>{S.value=void 0})},{flush:"post"});const x=Re();Oe(()=>{x.value&&ve(()=>{r.value=x.el})});const k=Re(),I=E(()=>e.target==="cursor"&&S.value?S.value:k.value?k.el:mt(e.target,i)||r.value),T=E(()=>Array.isArray(I.value)?void 0:I.value);let O;return B(()=>!!e.activator,u=>{u&&X?(O=Qe(),O.run(()=>{jn(e,i,{activatorEl:r,activatorEvents:h})})):O&&O.stop()},{flush:"post",immediate:!0}),p(()=>{O==null||O.stop()}),{activatorEl:r,activatorRef:x,target:I,targetEl:T,targetRef:k,activatorEvents:h,contentEvents:P,scrimEvents:_}}function jn(e,n,t){let{activatorEl:a,activatorEvents:i}=t;B(()=>e.activator,(m,s)=>{if(s&&m!==s){const d=o(s);d&&l(d)}m&&ve(()=>r())},{immediate:!0}),B(()=>e.activatorProps,()=>{r()}),p(()=>{l()});function r(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&nn(m,U(i.value,s))}function l(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&an(m,U(i.value,s))}function o(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const s=mt(m,n);return a.value=(s==null?void 0:s.nodeType)===Node.ELEMENT_NODE?s:void 0,a.value}}function mt(e,n){var a,i;if(!e)return;let t;if(e==="parent"){let r=(i=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:i.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function qn(){if(!X)return z(!1);const{ssr:e}=Ot();if(e){const n=z(!1);return _t(()=>{n.value=!0}),n}else return z(!0)}const $n=M({eager:Boolean},"lazy");function pn(e,n){const t=z(!1),a=E(()=>t.value||e.eager||n.value);B(n,()=>t.value=!0);function i(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:i}}function Un(){const n=fe("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const $e=Symbol.for("vuetify:stack"),Q=tt([]);function Yn(e,n,t){const a=fe("useStack"),i=!t,r=et($e,void 0),l=tt({activeChildren:new Set});It($e,l);const o=z(+n.value);Ae(e,()=>{var b;const d=(b=Q.at(-1))==null?void 0:b[1];o.value=d?d+10:+n.value,i&&Q.push([a.uid,o.value]),r==null||r.activeChildren.add(a.uid),p(()=>{if(i){const w=Tt(Q).findIndex(S=>S[0]===a.uid);Q.splice(w,1)}r==null||r.activeChildren.delete(a.uid)})});const m=z(!0);i&&Oe(()=>{var b;const d=((b=Q.at(-1))==null?void 0:b[0])===a.uid;setTimeout(()=>m.value=d)});const s=E(()=>!l.activeChildren.size);return{globalTop:Vt(m),localTop:s,stackStyles:E(()=>({zIndex:o.value}))}}function Gn(e){return{teleportTarget:E(()=>{const t=e.value;if(t===!0||!X)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let i=a.querySelector(":scope > .v-overlay-container");return i||(i=document.createElement("div"),i.className="v-overlay-container",a.appendChild(i)),i})}}function Kn(){return!0}function gt(e,n,t){if(!e||yt(e,t)===!1)return!1;const a=st(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const i=(typeof t.value=="object"&&t.value.include||(()=>[]))();return i.push(n),!i.some(r=>r==null?void 0:r.contains(e.target))}function yt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Kn)(e)}function Jn(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&gt(e,n,t)&&setTimeout(()=>{yt(e,t)&&a&&a(e)},0)}function pe(e,n){const t=st(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Xn={mounted(e,n){const t=i=>Jn(i,e,n),a=i=>{e._clickOutside.lastMousedownWasOutside=gt(i,e,n)};pe(e,i=>{i.addEventListener("click",t,!0),i.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(pe(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:a,onMousedown:i}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",i,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Zn(e){const{modelValue:n,color:t,...a}=e;return c(Rt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&c("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Qn=M({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Wn(),...W(),...we(),...$n(),...An(),...Bn(),...Ee(),...nt()},"VOverlay"),oa=H()({name:"VOverlay",directives:{ClickOutside:Xn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Qn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:i}=n;const r=Bt(e,"modelValue"),l=E({get:()=>r.value,set:A=>{A&&e.disabled||(r.value=A)}}),{teleportTarget:o}=Gn(E(()=>e.attach||e.contained)),{themeClasses:m}=Pe(e),{rtlClasses:s,isRtl:d}=Ze(),{hasContent:b,onAfterLeave:w}=pn(e,l),S=at(E(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:h,stackStyles:P}=Yn(l,Ke(e,"zIndex"),e._disableGlobalStack),{activatorEl:_,activatorRef:x,target:k,targetEl:I,targetRef:T,activatorEvents:O,contentEvents:u,scrimEvents:V}=Dn(e,{isActive:l,isTop:h}),{dimensionStyles:Y}=xe(e),G=qn(),{scopeId:C}=Un();B(()=>e.disabled,A=>{A&&(l.value=!1)});const f=$(),v=$(),y=$(),{contentStyles:F,updateLocation:L}=On(e,{isRtl:d,contentEl:y,target:k,isActive:l});Ln(e,{root:f,contentEl:y,targetEl:I,isActive:l,updateLocation:L});function Z(A){i("click:outside",A),e.persistent?ie():l.value=!1}function R(A){return l.value&&g.value&&(!e.scrim||A.target===v.value)}X&&B(l,A=>{A?window.addEventListener("keydown",D):window.removeEventListener("keydown",D)},{immediate:!0}),Je(()=>{X&&window.removeEventListener("keydown",D)});function D(A){var q,Be;A.key==="Escape"&&g.value&&(e.persistent?ie():(l.value=!1,(q=y.value)!=null&&q.contains(document.activeElement)&&((Be=_.value)==null||Be.focus())))}const ae=Xt();Ae(()=>e.closeOnBack,()=>{Zt(ae,A=>{g.value&&l.value?(A(!1),e.persistent?ie():l.value=!1):A()})});const K=$();B(()=>l.value&&(e.absolute||e.contained)&&o.value==null,A=>{if(A){const q=ln(f.value);q&&q!==document.scrollingElement&&(K.value=q.scrollTop)}});function ie(){e.noClickAnimation||y.value&&tn(y.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:on})}function ht(){i("afterEnter")}function bt(){w(),i("afterLeave")}return j(()=>{var A;return c(se,null,[(A=t.activator)==null?void 0:A.call(t,{isActive:l.value,targetRef:T,props:U({ref:x},O.value,e.activatorProps)}),G.value&&b.value&&c(Lt,{disabled:!o.value,to:o.value},{default:()=>[c("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},m.value,s.value,e.class],style:[P.value,{"--v-overlay-opacity":e.opacity,top:N(K.value)},e.style],ref:f},C,a),[c(Zn,U({color:S,modelValue:l.value&&!!e.scrim,ref:v},V.value),null),c(ee,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterEnter:ht,onAfterLeave:bt},{default:()=>{var q;return[le(c("div",U({ref:y,class:["v-overlay__content",e.contentClass],style:[Y.value,F.value]},u.value,e.contentProps),[(q=t.default)==null?void 0:q.call(t,{isActive:l})]),[[Xe,l.value],[Ce("click-outside"),{handler:Z,closeConditional:R,include:()=>[_.value]}]])]}})])]})])}),{activatorEl:_,scrimEl:v,target:k,animateClick:ie,contentEl:y,globalTop:g,localTop:h,updateLocation:L}}});export{yn as I,ra as V,ia as a,dt as b,oa as c,He as d,vn as e,fn as f,xn as g,rn as h,tn as i,na as j,aa as k,Qt as l,We as m,en as n,Qn as o,Nn as p,ln as q,on as s,Un as u};
