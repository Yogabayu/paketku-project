import{r as d,A as b,k as l,C as a,P as K,D as m,H as n,Q as I,R as s,S as y,G as g,E as e,T as N,F as $}from"./index-BZ6Fnb53.js";import{c as F,V as x,d as U,a as v,e as h,f as w,g as k}from"./VOverlay-DMR2bAhc.js";import{c as O,b as R}from"./VBtn-DA2Rt87y.js";import{V as J}from"./transition-OtY_rhOj.js";import{V as L,a as C,b as z,c as T,d as G}from"./VForm-B9d8WDNO.js";import{V as H,a as M}from"./VRow-b0mkH7_4.js";const Q={key:0,class:"mt-4"},q=e("thead",null,[e("tr",null,[e("th",{colspan:"2"},[e("h2",null," Detail ")])])],-1),W=e("td",null,[e("strong",null,"Jasa Kirim")],-1),X=e("td",null,":",-1),Y=e("td",null,[e("strong",null,"Kota / Kabupaten Asal")],-1),Z=e("td",null,":",-1),ee=e("td",null,[e("strong",null,"Kota / Kabupaten Tujuan")],-1),le=e("td",null,":",-1),ae=e("td",null,[e("strong",null,"Berat")],-1),te=e("td",null,":",-1),ue=e("strong",null,"Price:",-1),ne=e("strong",null,"Estimated Delivery:",-1),ve={__name:"ongkir",setup(se){const j="https://api.binderbyte.com/v1/",D="7de29e329de36eba956b7b53e85d1ec663bc04449a1a2d2fefcccc4641257312",_=d(""),f=d(""),p=d(""),c=d(!1),o=d(null),r=d(""),V=d(""),S=[{title:"JNE",value:"jne"},{title:"SiCepat",value:"sicepat"},{title:"AnterAja",value:"anteraja"},{title:"Lion",value:"lion"},{title:"SAP Express",value:"sap"},{title:"POS Indonesia",value:"pos"},{title:"ID Express",value:"ide"}],A=i=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(i),B=async()=>{try{r.value="",o.value=null,c.value=!0;const i=await fetch(`${j}cost?api_key=${D}&courier=${V.value.value}&origin=${_.value}&destination=${f.value}&weight=${p.value}`);if(i.status===400){r.value="Data not found",c.value=!1;return}const u=await i.json();o.value=u,c.value=!1}catch(i){r.value=i.message||"Terjadi kesalahan saat mengambil data",c.value=!1}};return(i,u)=>{const P=$("v-simple-table");return m(),b(K,null,[l(F,{"model-value":c.value,class:"align-center justify-center",persistent:""},{default:a(()=>[l(O,{color:"blue-lighten-3",indeterminate:"",size:41,width:5}),n(" Loading... ")]),_:1},8,["model-value"]),l(x,{class:"fill-height"},{default:a(()=>[l(U,{"aspect-ratio":16/9,class:"border pa-4"},{default:a(()=>[l(v,null,{default:a(()=>[l(h,null,{default:a(()=>[n(" Cek Ongkir "),l(J,{icon:"fas fa-box",size:"x-small"})]),_:1}),l(w,null,{default:a(()=>[n(" Silahkan masukkan Kota Tujuan dan Kota Asal Paket ")]),_:1}),l(k,null,{default:a(()=>[l(L,{onSubmit:I(B,["prevent"])},{default:a(()=>[l(C,{modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=t=>_.value=t),label:"Kota/Kabupaten Asal",outlined:"",dense:""},null,8,["modelValue"]),l(C,{modelValue:f.value,"onUpdate:modelValue":u[1]||(u[1]=t=>f.value=t),label:"Kota/Kabupaten Tujuan",outlined:"",dense:""},null,8,["modelValue"]),l(C,{modelValue:p.value,"onUpdate:modelValue":u[2]||(u[2]=t=>p.value=t),label:"Berat paket (dalam Kg)",outlined:"",dense:""},null,8,["modelValue"]),l(z,{clearable:"",label:"Jasa Kirim",modelValue:V.value,"onUpdate:modelValue":u[3]||(u[3]=t=>V.value=t),items:S},null,8,["modelValue"]),l(R,{type:"submit",color:"primary"},{default:a(()=>[n("Cek")]),_:1})]),_:1}),r.value?(m(),b("div",Q,[l(T,{type:"error"},{default:a(()=>[n(s(r.value),1)]),_:1})])):y("",!0)]),_:1})]),_:1}),!r.value&&o.value?(m(),g(v,{key:0,class:"my-2"},{default:a(()=>[l(h,{class:"text-overline"},{default:a(()=>[n(" Summary ")]),_:1}),l(G),l(k,null,{default:a(()=>[l(T,{type:"info"},{default:a(()=>[l(P,{class:"detail-table"},{default:a(()=>[q,e("tbody",null,[e("tr",null,[W,X,e("td",null,s(o.value.data.summary.courier[0]),1)]),e("tr",null,[Y,Z,e("td",null,s(o.value.data.summary.origin),1)]),e("tr",null,[ee,le,e("td",null,s(o.value.data.summary.destination),1)]),e("tr",null,[ae,te,e("td",null,s(o.value.data.summary.weight),1)])])]),_:1})]),_:1})]),_:1})]),_:1})):y("",!0),!r.value&&o.value?(m(),g(v,{key:1,class:"mx-auto my-2"},{default:a(()=>[l(x,null,{default:a(()=>[l(H,null,{default:a(()=>[(m(!0),b(K,null,N(o.value.data.costs,(t,E)=>(m(),g(M,{key:E,cols:"12",sm:"6",md:"4"},{default:a(()=>[l(v,null,{default:a(()=>[l(h,null,{default:a(()=>[n(s(t.name)+" - "+s(t.service),1)]),_:2},1024),l(w,null,{default:a(()=>[n(s(t.type),1)]),_:2},1024),l(k,null,{default:a(()=>[e("div",null,[ue,n(" "+s(A(t.price)),1)]),e("div",null,[ne,n(" "+s(t.estimated),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1})],64)}}};export{ve as default};