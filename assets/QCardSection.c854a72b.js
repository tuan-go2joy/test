import{m as e,n as r,l as n,p as s}from"./vendor.6afcc2f0.js";var i=e({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:t}){const o=r(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(a.tag,{class:o.value},s(t.default))}});export{i as Q};