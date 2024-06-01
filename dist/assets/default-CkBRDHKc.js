import{p as B,m as I,a as C,b as T,c as N,g as V,u as P,t as d,d as F,e as t,f as S,h as _,i as D,j as w,k as a,l as E,o as $,s as M,r as y,n as A,q as G,w as H,v as L,x as j,y as q,z as O,A as U,B as J,C as h,D as K,E as R,F as Q}from"./index-B0sDhGZv.js";import{m as W,u as X,V as Y,a as Z,b as m}from"./VBtn-DWPUpa7K.js";import{m as p,a as ee,b as ae,c as te,u as oe,d as se,e as ne,f as le,g as ie,h as ue,M as re,V as k}from"./transition-BVWT9qt_.js";const ce=B({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...p(),...I(),...ee(),...ae(),...te(),...C({name:"bottom-navigation"}),...T({tag:"header"}),...W({selectedClass:"v-btn--selected"}),...N()},"VBottomNavigation"),de=V()({name:"VBottomNavigation",props:ce(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{slots:s}=v;const{themeClasses:r}=P(),{borderClasses:i}=oe(e),{backgroundColorClasses:u,backgroundColorStyles:n}=se(d(e,"bgColor")),{densityClasses:l}=ne(e),{elevationClasses:c}=le(e),{roundedClasses:f}=ie(e),{ssrBootStyles:b}=F(),o=t(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),g=S(e,"active",e.active),{layoutItemStyles:x,layoutIsReady:z}=_({id:e.name,order:t(()=>parseInt(e.order,10)),position:t(()=>"bottom"),layoutSize:t(()=>g.value?o.value:0),elementSize:o,active:g,absolute:d(e,"absolute")});return X(e,Y),D({VBtn:{baseColor:d(e,"baseColor"),color:d(e,"color"),density:d(e,"density"),stacked:t(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),w(()=>a(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":g.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},r.value,u.value,i.value,l.value,c.value,f.value,e.class],style:[n.value,x.value,{height:E(o.value)},b.value,e.style]},{default:()=>[s.default&&a("div",{class:"v-bottom-navigation__content"},[s.default()])]})),z}}),ve=B({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,location:{type:String,default:"bottom end"},offset:Boolean,modelValue:{type:Boolean,default:!0},...$(Z({active:!0}),["location"]),...C(),...ue({transition:"fab-transition"})},"VFab"),me=V()({name:"VFab",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:s}=v;const r=S(e,"modelValue"),i=M(56),u=y(),{resizeRef:n}=A(o=>{o.length&&(i.value=o[0].target.clientHeight)}),l=t(()=>e.app||e.absolute),c=t(()=>l.value?e.location.split(" ").shift():!1),f=t(()=>l.value?e.location.split(" ")[1]??"end":!1);G(()=>e.app,()=>{const o=_({id:e.name,order:t(()=>parseInt(e.order,10)),position:c,layoutSize:t(()=>e.layout?i.value+24:0),elementSize:t(()=>i.value+24),active:t(()=>e.app&&r.value),absolute:d(e,"absolute")});q(()=>{u.value=o.layoutItemStyles.value})});const b=y();return w(()=>{const o=m.filterProps(e);return a("div",{ref:b,class:["v-fab",{"v-fab--absolute":e.absolute,"v-fab--app":!!e.app,"v-fab--extended":e.extended,"v-fab--offset":e.offset,[`v-fab--${c.value}`]:l.value,[`v-fab--${f.value}`]:l.value},e.class],style:[e.app?{...u.value}:{height:"inherit",width:void 0},e.style]},[a("div",{class:"v-fab__container"},[a(re,{appear:e.appear,transition:e.transition},{default:()=>[H(a(m,j({ref:n},o,{active:void 0,location:void 0}),s),[[L,e.active]])]})])])}),{}}}),fe=R("span",null,"Home",-1),be=R("span",null,"Cek Paket",-1),ke={__name:"default",setup(e){const v=O(),s=P();function r(u){v.push(`/${u}`)}function i(){s.global.name.value=s.global.current.value.dark?"light":"dark"}return(u,n)=>{const l=Q("RouterView");return K(),U("div",null,[a(me,{icon:J(s).global.current.value.dark?"fas fa-moon":"fas fa-sun",class:"mx-4 my-4",location:"top end",size:"small",absolute:"",onClick:i},null,8,["icon"]),a(l),a(de,null,{default:h(()=>[a(m,{value:"home",onClick:n[0]||(n[0]=c=>r("home"))},{default:h(()=>[a(k,{icon:"fas fa-house"}),fe]),_:1}),a(m,{value:"package",onClick:n[1]||(n[1]=c=>r("package"))},{default:h(()=>[a(k,{icon:"fas fa-box"}),be]),_:1})]),_:1})])}}};export{ke as default};