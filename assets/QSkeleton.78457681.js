var m=Object.defineProperty,g=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var s=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))Q.call(t,n)&&s(e,n,t[n]);return e},l=(e,t)=>g(e,k(t));import{u as S,a as q}from"./useI18n.7a59afc8.js";import{m as v,n as r,l as y,p as f,z as b}from"./vendor.6afcc2f0.js";const z=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],w=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var C=v({name:"QSkeleton",props:l(o({},S),{tag:{type:String,default:"div"},type:{type:String,validator:e=>z.includes(e),default:"rect"},animation:{type:String,validator:e=>w.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String}),setup(e,{slots:t}){const n=b(),d=q(e,n.proxy.$q),u=r(()=>{const a=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:a[0],height:a[1]}}),c=r(()=>`q-skeleton q-skeleton--${d.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>y(e.tag,{class:c.value,style:u.value},f(t.default))}});export{C as Q};
