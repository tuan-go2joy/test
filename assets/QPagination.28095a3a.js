var H=Object.defineProperty,K=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var q=(e,t,l)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,f=(e,t)=>{for(var l in t||(t={}))G.call(t,l)&&q(e,l,t[l]);if(Q)for(var l of Q(t))J.call(t,l)&&q(e,l,t[l]);return e},F=(e,t)=>K(e,U(t));import{j as T,k as u,i as y,l as O,t as $,n as R,w as X,s as Y,a7 as Z}from"./vendor.442a65bd.js";import{Q as p}from"./axiosClient.5ed50874.js";import{u as ee,a as ae,c as te}from"./useI18n.4de51e8d.js";var de=T({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const l=$(),o=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return y("td",{class:o.value},O(t.default));const B=l.vnode.key,m=(e.props.colsMap!==void 0?e.props.colsMap[B]:null)||e.props.col;if(m===void 0)return;const{row:s}=e.props;return y("td",{class:o.value+m.__tdClass(s),style:m.__tdStyle(s)},O(t.default))}}}),oe=T({name:"QPagination",props:F(f({},ee),{modelValue:{type:Number,required:!0},min:{type:Number,default:1},max:{type:Number,required:!0},color:{type:String,default:"primary"},textColor:String,activeColor:String,activeTextColor:String,inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},maxPages:{type:Number,default:0,validator:e=>e>=0},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,dense:Boolean,padding:{type:String,default:"3px 2px"}}),emits:["update:modelValue"],setup(e,{emit:t}){const{proxy:l}=$(),{$q:o}=l,B=ae(e,o),m=R(null),s=u({get:()=>e.modelValue,set:a=>{if(a=parseInt(a,10),e.disable||isNaN(a))return;const n=te(a,e.min,e.max);e.modelValue!==n&&t("update:modelValue",n)}});X(()=>e.min+e.max,()=>{s.value=e.modelValue});function h(a,n){return[!0,!1].includes(a)?a:n}const z=u(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),C=u(()=>s.value+" / "+e.max),D=u(()=>h(e.boundaryLinks,e.input)),g=u(()=>h(e.boundaryNumbers,!e.input)),E=u(()=>h(e.directionLinks,e.input)),k=u(()=>h(e.ellipses,!e.input)),S=u(()=>{const a=[e.iconFirst||o.iconSet.pagination.first,e.iconPrev||o.iconSet.pagination.prev,e.iconNext||o.iconSet.pagination.next,e.iconLast||o.iconSet.pagination.last];return o.lang.rtl===!0?a.reverse():a}),I=u(()=>e.disable===!0?{"aria-disabled":"true"}:{}),W=u(()=>({round:e.round,rounded:e.rounded,outline:e.outline,unelevated:e.unelevated,push:e.push,glossy:e.glossy,dense:e.dense,padding:e.padding,color:e.color,flat:!0,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),V=u(()=>({flat:e.flat,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor}));function P(a){s.value=a}function A(a){s.value=s.value+a}function _(){s.value=m.value,m.value=null}function c(a,n){const r=f(f({},W.value),a);return n!==void 0&&(e.toFn!==void 0?r.to=e.toFn(n):r.onClick=()=>P(n)),y(Y,r)}return Object.assign(l,{set:P,setByOffset:A}),()=>{const a=[],n=[],r=[];if(D.value&&(a.push(c({key:"bls",disable:e.disable||e.modelValue<=e.min,icon:S.value[0]},e.min)),n.unshift(c({key:"ble",disable:e.disable||e.modelValue>=e.max,icon:S.value[3]},e.max))),E.value&&(a.push(c({key:"bdp",disable:e.disable||e.modelValue<=e.min,icon:S.value[1]},e.modelValue-1)),n.unshift(c({key:"bdn",disable:e.disable||e.modelValue>=e.max,icon:S.value[2]},e.modelValue+1))),e.input===!0)r.push(y(p,{class:"inline",style:{width:`${C.value.length/1.5}em`},type:"number",dense:!0,value:m.value,disable:e.disable,dark:B.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:C.value,min:e.min,max:e.max,"onUpdate:modelValue"(d){m.value=d},onKeyup(d){Z(d,13)===!0&&_()},onBlur:_}));else{let d=Math.max(e.maxPages,1+(k.value?2:0)+(g.value?2:0)),b=e.min,v=e.max,M=!1,N=!1,w=!1,j=!1;e.maxPages&&d<e.max-e.min+1&&(d=1+Math.floor(d/2)*2,b=Math.max(e.min,Math.min(e.max-d+1,e.modelValue-Math.floor(d/2))),v=Math.min(e.max,b+d-1),g.value&&(w=!0,b+=1),k.value&&b>e.min+(g.value?1:0)&&(M=!0,b+=1),g.value&&(j=!0,v-=1),k.value&&v<e.max-(g.value?1:0)&&(N=!0,v-=1));const x={minWidth:`${Math.max(2,String(e.max).length)}em`};if(w){const i=e.min===e.modelValue;a.push(c(f({key:"bns",style:x,disable:e.disable,flat:!i,label:e.min},i?V.value:{}),e.min))}if(j){const i=e.max===e.modelValue;n.unshift(c(f({key:"bne",style:x,disable:e.disable,flat:!i,label:e.max},i?V.value:{}),e.max))}M&&a.push(c({key:"bes",style:x,disable:e.disable,label:"\u2026",ripple:!1},b-1)),N&&n.unshift(c({key:"bee",style:x,disable:e.disable,label:"\u2026",ripple:!1},v+1));for(let i=b;i<=v;i++){const L={key:`bpg${i}`,style:x,disable:e.disable,label:i};i===e.modelValue&&Object.assign(L,V.value),r.push(c(L,i))}}return y("div",f({class:z.value},I.value),[a,y("div",{class:"row justify-center"},[r]),n])}}});export{oe as Q,de as a};
