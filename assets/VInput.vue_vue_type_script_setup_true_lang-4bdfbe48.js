import{M as h,d as v,j as g,o as s,c as o,t as c,J as i,a as d,L as y,e as x}from"./index-ee83e50c.js";function B(e){const a=h(e);function l(u){a.value=u}return{value:a,setValue:l}}const k=["for"],C={class:"input__field-wrap"},D=["value","type","name","placeholder","disabled"],_={key:1,class:"input__error red"},N=v({__name:"VInput",props:{modelValue:{default:""},label:null,name:null,isDisabled:{type:Boolean},placeholder:{default:""},inputType:{default:"text"},error:null},emits:["update:modelValue","blur","change"],setup(e,{emit:a}){const l=e,u=g(()=>({"disabled events-none":l.isDisabled,error:l.error})),{value:r,setValue:m}=B(l.modelValue);function f(t){const n=V(t);m(n),a("update:modelValue",n)}function p(){a("blur",r.value)}function b(){a("change",r.value)}function V(t){return t.target.value.trim()}return(t,n)=>(s(),o("div",{class:y(["input column gap-xxs",x(u)])},[e.label?(s(),o("label",{key:0,class:"input__label label",for:e.name},c(e.label),9,k)):i("",!0),d("div",C,[d("input",{ref:"input",value:e.modelValue,class:"input__field",type:e.inputType,name:e.name,placeholder:e.placeholder,disabled:e.isDisabled,autocomplete:"false",onInput:f,onBlur:p,onChange:b},null,40,D)]),e.error?(s(),o("small",_,c(e.error),1)):i("",!0)],2))}});export{N as _,B as u};
