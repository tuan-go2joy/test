var ae=Object.defineProperty,re=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var P=(a,n,l)=>n in a?ae(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,k=(a,n)=>{for(var l in n||(n={}))de.call(n,l)&&P(a,l,n[l]);if(T)for(var l of T(n))me.call(n,l)&&P(a,l,n[l]);return a},B=(a,n)=>re(a,ie(n));import{Q as Y}from"./QCardSection.c854a72b.js";import{Q as _e}from"./QCard.b7726ee7.js";import{Q as $,a as ce}from"./queryKeys.1c3d8761.js";import{aO as J,aP as fe,d as W,n as X,s as p,aU as pe,o as y,a1 as Z,a2 as O,u as r,c as S,F as j,a5 as H,a as m,h as V,M as ve,y as K,a3 as ye,aQ as he,v as be,t as z,i as Oe}from"./vendor.6afcc2f0.js";import{d as D}from"./useI18n.7a59afc8.js";import{Q as G}from"./QSkeleton.78457681.js";import{a as ee,Q as b}from"./axiosClient.cec0b1af.js";import{Q as ge}from"./QForm.33ce8c06.js";import{C as Re}from"./ClosePopup.0750090f.js";import{u as Se}from"./useNotify.312f4e26.js";import{u as Ve}from"./useRoomTypeListQuery.7fe9cb26.js";import{_ as Qe}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-prevent-scroll.d2546cca.js";const Ce=async a=>{const{data:n}=await ee.post("/configuration/room/createRoomType",a);return n},Fe=()=>J(Ce,{}),we=async a=>{const{data:n}=await ee.post("/configuration/room/updateRoomType",a);return n},qe=()=>{const a=fe();return J(we,{onSuccess:(n,l)=>{const c=a.getQueryData($.ROOM_TYPES);if(!c)return;const{data:_}=c;!_||a.setQueryData($.ROOM_TYPES,()=>B(k({},c),{data:_.map(t=>t.sn!==l.sn?t:{sn:l.sn,numOfRoom:t.numOfRoom,name:l.name,code:l.code})}))}})};const ke={key:0,class:"wrapper"},Be={class:"container"},Me={key:1,class:"wrapper"},xe={class:"container"},Le={class:"q-mt-md row justify-end q-gutter-md"},Ae=W({props:{roomTypeSn:null},emits:["onRequestSuccess"],setup(a,{emit:n}){const l=a,{notifySaveSuccess:c,notifySaveFailed:_}=Se(),{t}=D(),{data:g,isLoading:f,findRoomTypeBySn:v,refetch:R}=Ve(),s=l.roomTypeSn==="new"?null:v(l.roomTypeSn),M=Fe(),x=qe(),L=X(()=>f.value),i=p({numOfAdult:2,numOfChildren:0,numOfBed:1,name:"",code:""});pe(()=>{var e,u,o,d,h;i.value={numOfAdult:(e=s==null?void 0:s.numOfRoom)!=null?e:2,numOfChildren:(u=s==null?void 0:s.numOfRoom)!=null?u:0,numOfBed:(o=s==null?void 0:s.numOfRoom)!=null?o:1,name:(d=s==null?void 0:s.name)!=null?d:"",code:(h=s==null?void 0:s.code)!=null?h:""}});const Q=p(null),te=[e=>!!e||t("this_field_is_required"),e=>Number.isInteger(e)||t("this_is_invalid_value"),e=>1<=e||t("this_value_is_too_small"),e=>e<=10||t("this_value_is_too_big")],C=p(null),oe=[e=>e!==void 0||t("this_field_is_required"),e=>Number.isInteger(e)||t("this_is_invalid_value"),e=>0<=e||t("this_is_invalid_value"),e=>e<=10||t("this_value_is_too_big")],F=p(null),ne=[e=>!!e||t("this_field_is_required"),e=>Number.isInteger(e)||t("this_is_invalid_value"),e=>1<=e||t("this_value_is_too_small"),e=>e<=10||t("this_value_is_too_big")],w=p(null),le=[e=>!!e||t("this_field_is_required"),e=>e.length<=50||t("this_value_is_too_long"),e=>{var u,o;return!((o=(u=g.value)==null?void 0:u.data)==null?void 0:o.filter(d=>d.sn!==(s==null?void 0:s.sn)).some(d=>d.name===e))||t("this_is_invalid_value")}],q=p(null),se=[e=>!!e||t("this_field_is_required"),e=>e.length<=10||t("this_value_is_too_long"),e=>{var u,o;return!((o=(u=g.value)==null?void 0:u.data)==null?void 0:o.filter(d=>d.sn!==(s==null?void 0:s.sn)).some(d=>d.code===e))||t("this_is_invalid_value")}],ue=()=>{var e,u,o,d,h,A,U,E,I,N;if((e=Q.value)==null||e.validate(),(u=C.value)==null||u.validate(),(o=F.value)==null||o.validate(),(d=w.value)==null||d.validate(),(h=q.value)==null||h.validate(),!(((A=Q.value)==null?void 0:A.error)||((U=C.value)==null?void 0:U.error)||((E=F.value)==null?void 0:E.error)||((I=w.value)==null?void 0:I.error)||((N=q.value)==null?void 0:N.error))){if(l.roomTypeSn==="new"){M.mutate(i.value,{onSuccess:()=>{c(),R.value(),n("onRequestSuccess")},onError:()=>{_()}});return}!s||x.mutate(B(k({},i.value),{sn:l.roomTypeSn}),{onSuccess:()=>{c(),n("onRequestSuccess")},onError:()=>{_()}})}};return(e,u)=>(y(),Z(ge,{onSubmit:ue},{default:O(()=>[r(L)?(y(),S("div",ke,[(y(),S(j,null,H(2,o=>m(G,{key:o,type:"QInput"})),64)),V("div",Be,[(y(),S(j,null,H(3,o=>m(G,{key:o,class:"col",type:"QInput"})),64))])])):(y(),S("div",Me,[m(b,{ref_key:"codeField",ref:q,modelValue:i.value.code,"onUpdate:modelValue":u[0]||(u[0]=o=>i.value.code=o),label:r(t)("room_type_code"),rules:se},null,8,["modelValue","label"]),m(b,{ref_key:"nameField",ref:w,modelValue:i.value.name,"onUpdate:modelValue":u[1]||(u[1]=o=>i.value.name=o),label:r(t)("room_type_name"),rules:le},null,8,["modelValue","label"]),V("div",xe,[m(b,{ref_key:"numOfBedField",ref:F,modelValue:i.value.numOfBed,"onUpdate:modelValue":u[2]||(u[2]=o=>i.value.numOfBed=o),modelModifiers:{number:!0},label:r(t)("number_of_beds"),rules:ne,class:"col",type:"number"},null,8,["modelValue","label"]),m(b,{ref_key:"numOfAdultField",ref:Q,modelValue:i.value.numOfAdult,"onUpdate:modelValue":u[3]||(u[3]=o=>i.value.numOfAdult=o),modelModifiers:{number:!0},label:r(t)("number_of_adults"),rules:te,class:"col",type:"number"},null,8,["modelValue","label"]),m(b,{ref_key:"numOfChildrenField",ref:C,modelValue:i.value.numOfChildren,"onUpdate:modelValue":u[4]||(u[4]=o=>i.value.numOfChildren=o),modelModifiers:{number:!0},label:r(t)("number_of_children"),rules:oe,class:"col",type:"number"},null,8,["modelValue","label"])])])),V("div",Le,[ve(m(K,{label:r(t)("cancel"),flat:"",type:"button"},null,8,["label"]),[[Re]]),m(K,{label:r(t)("save"),color:"orange-9",type:"submit",disable:r(L),loading:r(M).isLoading.value||r(x).isLoading.value},null,8,["label","disable","loading"])])]),_:1}))}});var Ue=Qe(Ae,[["__scopeId","data-v-5513e334"]]);const Ee={class:"text-h6"},Ze=W({setup(a){const n=ye(),l=he(),{t:c}=D(),_=p(!1),t=X(()=>{const{roomTypeSn:f}=l.params;return Array.isArray(f)?null:f==="new"?"new":typeof+f=="number"?+f:null});be(()=>_.value=!0);const g=()=>{n.replace({path:"/settings/room-settings",query:l.query})};return(f,v)=>r(t)?(y(),Z(ce,{key:0,modelValue:_.value,"onUpdate:modelValue":v[1]||(v[1]=R=>_.value=R),onHide:g},{default:O(()=>[m(_e,{style:{width:"700px","max-width":"80vw"}},{default:O(()=>[m(Y,null,{default:O(()=>[V("div",Ee,z(r(t)==="new"?r(c)("new_room_type"):r(c)("edit_room_type"))+" "+z(r(n).options.history.state.code),1)]),_:1}),m(Y,{class:"q-pt-none"},{default:O(()=>[m(Ue,{"room-type-sn":r(t),onOnRequestSuccess:v[0]||(v[0]=R=>_.value=!1)},null,8,["room-type-sn"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):Oe("",!0)}});export{Ze as default};