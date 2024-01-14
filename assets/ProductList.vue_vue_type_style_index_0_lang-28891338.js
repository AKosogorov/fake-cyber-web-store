import{v as R,T as N,n as g,U as T,j as z,d as x,h as M,i as U,o as i,c as L,b as l,e as n,k as v,J as j,a as m,r as Q,t as V,V as D,W as F,Q as H,G as W,H as q,w}from"./index-ee83e50c.js";import{_ as G,a as I}from"./AddToCart.vue_vue_type_style_index_0_lang-d9c3774e.js";import{_ as J,b as O}from"./AddToFavorites.vue_vue_type_style_index_0_lang-c0ca5ff3.js";function Y(t){const{showError:s}=R(),{startLoading:a,finishLoading:e,isLoading:o}=N(),{value:u,setValue:p}=g(0),{array:d,refresh:_}=T(t.initialList);async function f(y){try{a();const{data:c}=await t.apiHandler(y);p(c.total);const k=t.mapper(c);_(k)}catch(c){s(c==null?void 0:c.message)}finally{e()}}return{list:d,loadList:f,isLoading:o,refresh:_,total:u,setTotal:p}}function K(t){const{value:s,setValue:a}=g((t==null?void 0:t.limit)||10),{value:e,setValue:o}=g((t==null?void 0:t.skip)||0);return{limit:s,setLimit:a,skip:e,setSkip:o}}function X({total:t,limit:s,initPage:a}){const{value:e,setValue:o}=g(a||1),u=z(()=>Math.ceil(t.value/s.value));return{page:e,setPage:o,countPages:u}}const ut={skip:0,limit:10,page:1};function it(t){var $;const{list:s,loadList:a,isLoading:e,refresh:o,total:u,setTotal:p}=Y(t),{limit:d,setLimit:_,skip:f,setSkip:y}=K(t.initQuery),{page:c,setPage:k,countPages:B}=X({total:u,limit:d,initPage:($=t==null?void 0:t.initQuery)==null?void 0:$.page});async function S(r){P(r),await h()}async function h(r){const C={limit:d.value,skip:f.value},E=Object.assign(C,r);await a(E)}function P(r){k(r),b()}function b(){y((c.value-1)*d.value)}function A(r){_(r),b()}return{list:s,loadList:a,loadListWithQuery:h,loadPage:S,isLoading:e,refresh:o,total:u,setTotal:p,page:c,setPage:P,countPages:B,changeLimit:A}}const Z={class:"product-card column gap-s"},tt={class:"product-card__actions product-card__actions--top"},et={class:"column gap-xxs"},at={class:"product-card__actions product-card__actions--bottom"},st=x({__name:"ProductCard",props:{product:null},setup(t){const s=M();return(a,e)=>{const o=U("router-link");return i(),L("article",Z,[l(o,{class:"product-card__link abs-full",to:n(s).getProduct(t.product.id),draggable:"false"},null,8,["to"]),t.product.images?(i(),v(n(G),{key:0,class:"product-card__swiper",images:t.product.images},null,8,["images"])):j("",!0),m("div",tt,[Q(a.$slots,"button-like")]),m("div",et,[l(n(J),{price:t.product.price,discount:t.product.discountPercentage},null,8,["price","discount"]),m("h4",null,V(t.product.title)+" - "+V(t.product.stock),1),l(n(F),{rating:t.product.rating,size:n(D).xs},null,8,["rating","size"])]),m("div",at,[Q(a.$slots,"button-add-to-cart")])])}}}),ot={key:1,class:"product-list"},dt=x({__name:"ProductList",props:{isLoading:{type:Boolean},products:null},setup(t){return(s,a)=>t.isLoading?(i(),v(n(H),{key:0})):(i(),L("div",ot,[(i(!0),L(W,null,q(t.products,e=>(i(),v(n(st),{key:e.id,product:e},{"button-like":w(()=>[l(n(O),{id:e.id},null,8,["id"])]),"button-add-to-cart":w(()=>[l(n(I),{id:e.id},null,8,["id"])]),_:2},1032,["product"]))),128))]))}});export{ut as Q,dt as _,it as u};
