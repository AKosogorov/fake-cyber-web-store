import{u as p,Q as m,_}from"./ProductList.vue_vue_type_style_index_0_lang-28891338.js";import{K as g,d as f,q as h,o as P,c as b,a as u,b as c,e}from"./index-ee83e50c.js";import{g as L}from"./AddToCart.vue_vue_type_style_index_0_lang-d9c3774e.js";import{_ as Q}from"./VPagination.vue_vue_type_style_index_0_lang-c0b316a5.js";import"./AddToFavorites.vue_vue_type_style_index_0_lang-c0ca5ff3.js";import"./const-a1839806.js";import"./currency-161c01a1.js";import"./CyberButton.vue_vue_type_script_setup_true_lang-c83485c6.js";function y(){const{list:r,loadList:a,loadListWithQuery:s,loadPage:t,setPage:i,page:n,countPages:o,isLoading:d,changeLimit:l}=p({apiHandler:g.getAll,mapper:L,initQuery:m});return{products:r,loadProducts:a,loadProductsWithQuery:s,loadPage:t,isLoading:d,setPage:i,page:n,countPages:o,changeLimit:l}}const M={class:"container"},v=u("h1",{class:"mb-m"},"Fake Cyber - the best web store",-1),B={class:"column gap-l mb-l"},F=f({__name:"MainPage",setup(r){const{products:a,loadProductsWithQuery:s,page:t,countPages:i,loadPage:n,isLoading:o}=y();return h(s),(d,l)=>(P(),b("div",M,[v,u("div",B,[c(e(_),{products:e(a),"is-loading":e(o)},null,8,["products","is-loading"]),c(e(Q),{"model-value":e(t),count:e(i),"is-disabled":e(o),"onUpdate:modelValue":e(n)},null,8,["model-value","count","is-disabled","onUpdate:modelValue"])])]))}});export{F as default};
