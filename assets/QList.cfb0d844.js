var i=Object.defineProperty,u=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var r=(e,a,s)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,o=(e,a)=>{for(var s in a||(a={}))p.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))c.call(a,s)&&r(e,s,a[s]);return e},n=(e,a)=>u(e,m(a));import{m as q,n as v,l as g,p as k,z as B}from"./vendor.6afcc2f0.js";import{u as b,a as f}from"./useI18n.7a59afc8.js";var x=q({name:"QList",props:n(o({},b),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:a}){const s=B(),d=f(e,s.proxy.$q),l=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>g("div",{class:l.value},k(a.default))}});export{x as Q};
