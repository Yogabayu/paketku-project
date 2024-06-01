import{G as f,H as m,p as v,m as S,b as V,g as N,e as j,I as L,u as R,z as T,J as M,C as l,D as U,k as o,E as d,K as F}from"./index-C6y4gWYl.js";import{V as K,a as g,b as J,c as h,d as z}from"./VOverlay-BmPlzLfm.js";import"./transition-bOLMjZW7.js";const w=f.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),x=f.reduce((e,n)=>{const t="offset"+m(n);return e[t]={type:[String,Number],default:null},e},{}),P=f.reduce((e,n)=>{const t="order"+m(n);return e[t]={type:[String,Number],default:null},e},{}),_={col:Object.keys(w),offset:Object.keys(x),order:Object.keys(P)};function D(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const q=["auto","start","end","center","baseline","stretch"],H=v({cols:{type:[Boolean,String,Number],default:!1},...w,offset:{type:[String,Number],default:null},...x,order:{type:[String,Number],default:null},...P,alignSelf:{type:String,default:null,validator:e=>q.includes(e)},...S(),...V()},"VCol"),y=N()({name:"VCol",props:H(),setup(e,n){let{slots:t}=n;const s=j(()=>{const a=[];let r;for(r in _)_[r].forEach(i=>{const u=e[i],b=D(r,i,u);b&&a.push(b)});const c=a.some(i=>i.startsWith("v-col-"));return a.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return L(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),p=["start","end","center"],$=["space-between","space-around","space-evenly"];function k(e,n){return f.reduce((t,s)=>{const a=e+m(s);return t[a]=n(),t},{})}const W=[...p,"baseline","stretch"],E=e=>W.includes(e),A=k("align",()=>({type:String,default:null,validator:E})),Y=[...p,...$],I=e=>Y.includes(e),G=k("justify",()=>({type:String,default:null,validator:I})),Q=[...p,...$,"stretch"],O=e=>Q.includes(e),B=k("alignContent",()=>({type:String,default:null,validator:O})),C={align:Object.keys(A),justify:Object.keys(G),alignContent:Object.keys(B)},X={align:"align",justify:"justify",alignContent:"align-content"};function Z(e,n,t){let s=X[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const ee=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:E},...A,justify:{type:String,default:null,validator:I},...G,alignContent:{type:String,default:null,validator:O},...B,...S(),...V()},"VRow"),te=N()({name:"VRow",props:ee(),setup(e,n){let{slots:t}=n;const s=j(()=>{const a=[];let r;for(r in C)C[r].forEach(c=>{const i=e[c],u=Z(r,c,i);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return L(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),ae=d("h2",{class:"text-h5 font-weight-bold"},"Get started ",-1),ne=d("div",{class:"text-subtitle-1"}," Jelajahi aplikasi yang berguna bagi manusia ",-1),se=d("div",{class:"text-subtitle-1"},[F(" Menyukai Aplikasi ini ? agar server dapat digunakan terus, yuk donasi di "),d("a",{href:"http://saweria.co/yogabayuap",target:"_blank",rel:"noopener noreferrer"},"DISINI")],-1),ie={__name:"index",setup(e){R();const n=T();function t(){n.push("/package")}return(s,a)=>(U(),M(K,{class:"fill-height"},{default:l(()=>[o(z,{"aspect-ratio":16/9,class:"border pa-4"},{default:l(()=>[o(te,null,{default:l(()=>[o(y,{cols:"12"},{default:l(()=>[o(g,{class:"py-4",color:"surface-variant","prepend-icon":"fas fa-rocket",rounded:"lg",variant:"outlined"},{image:l(()=>[o(J,{position:"top right"})]),title:l(()=>[ae]),text:l(()=>[ne,se]),_:1})]),_:1}),o(y,{cols:"12",md:"6"},{default:l(()=>[o(g,{class:"py-4",color:"surface-variant","prepend-icon":"fas fa-box",rel:"noopener noreferrer",rounded:"lg",text:"Lacak paket anda secara cepat dan mudah, yang didukung oleh lebih dari 10 jasa pengiriman",target:"_blank",title:"Lacak Paket",variant:"text",onClick:t},{default:l(()=>[o(h,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),o(y,{cols:"12",md:"6"},{default:l(()=>[o(g,{class:"py-4",color:"surface-variant","prepend-icon":"fas fa-question",rel:"noopener noreferrer",rounded:"lg",text:"Fitur yang lain masih proses",target:"_blank",title:"Lainnya",variant:"text"},{default:l(()=>[o(h,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ie as default};
