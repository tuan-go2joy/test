var W=Object.defineProperty,G=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var K=(o,e,a)=>e in o?W(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,P=(o,e)=>{for(var a in e||(e={}))se.call(e,a)&&K(o,a,e[a]);if(R)for(var a of R(e))oe.call(e,a)&&K(o,a,e[a]);return o},L=(o,e)=>G(o,ee(e));import{Q as ae}from"./QSkeleton.fd0b9107.js";import{a as Q,j,Q as O}from"./axiosClient.5ed50874.js";import{Q as N}from"./QSelect.2687a4e9.js";import{aw as I,aN as Y,aO as te,d as A,k as ne,n as y,w as ie,o as k,_ as X,$ as x,u as t,c as $,F as le,a4 as re,a as r,Z as S,s as Z,q as D,a2 as U}from"./vendor.442a65bd.js";import{Q as z}from"./QForm.dd5e1cda.js";import{Q as q}from"./queryKeys.bcea0fca.js";import{d as H,V as ue}from"./useI18n.4de51e8d.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./QMenu.d4df698c.js";import"./use-prevent-scroll.3954cc46.js";var J=(o=>(o[o.Male=1]="Male",o[o.Female=2]="Female",o[o.Others=3]="Others",o))(J||{});const ce=async()=>{const{data:o}=await Q.get("/common/constants/get"),e={accommodationStarOptions:[],accommodationTypeOptions:[],accommodationCurrencieOptions:[],accommodationPolicyTypeOptions:[],bookingMethodStatusOptions:[],bookingStatusOptions:[],bookingHistoryTypeOptions:[],bookingPaymentMethodOptions:[],bookingDiscountTypeOptions:[],stayTypeOptions:[],genderOptions:[],applicantStatusOptions:[],howToKnowOptions:[],roomStatusOptions:[],documentTypeOptions:[],guestStatusOptions:[],guestHistoryTypeOptions:[],permissionOptions:[]};return o.forEach(a=>{switch(a.module_name){case"accommodation":a.constants.forEach(s=>{switch(s.name){case"AccommStar":e.accommodationStarOptions=[...s.choices];break;case"AccommType":e.accommodationTypeOptions=[...s.choices];break;case"AccommCurrency":e.accommodationCurrencieOptions=[...s.choices];break;case"AccommPolicyType":e.accommodationPolicyTypeOptions=[...s.choices];break;case"BookingMethodStatus":e.bookingMethodStatusOptions=[...s.choices];break}});break;case"booking":a.constants.forEach(s=>{switch(s.name){case"PaymentMethod":e.bookingPaymentMethodOptions=[...s.choices];break;case"DiscountType":e.bookingDiscountTypeOptions=[...s.choices];break;case"HistoryType":e.bookingHistoryTypeOptions=[...s.choices];break;case"Status":e.bookingStatusOptions=[...s.choices];break}});break;case"general":a.constants.forEach(s=>{switch(s.name){case"StayType":e.stayTypeOptions=[...s.choices];break;case"Gender":e.genderOptions=[...s.choices];break}});break;case"guest":a.constants.forEach(s=>{switch(s.name){case"HistoryType":e.guestHistoryTypeOptions=[...s.choices];break;case"DocType":e.documentTypeOptions=[...s.choices];break;case"Status":e.guestStatusOptions=[...s.choices];break}});break;case"permissions":a.constants.forEach(s=>{switch(s.name){case"Module":e.permissionOptions=[...s.choices];break}});break;case"pms_admin":a.constants.forEach(s=>{switch(s.name){case"ApplicantStatus":e.applicantStatusOptions=[...s.choices];break;case"HowToKnow":e.howToKnowOptions=[...s.choices];break}});break;case"room":a.constants.forEach(s=>{switch(s.name){case"RoomStatus":e.roomStatusOptions=[...s.choices];break}});break}}),e},de=()=>{const o=I(q.CONSTANTS,ce),e=a=>{var s,d,p;return(p=(d=(s=o.data.value)==null?void 0:s.accommodationCurrencieOptions.find(w=>w.value===a))==null?void 0:d.name)!=null?p:"USD"};return L(P({},o),{getAccCurrencyName:e})},pe=async()=>{const{data:o}=await Q.get("/accounts/me/get");return o},me=()=>I(q.ME,pe),_e=async()=>{const{data:o}=await Q.get("/accounts/profiles/list-for-selection");return o},ve=()=>I([q.PROFILES,"selection"],_e),ye=async o=>{const{data:e}=await Q.put("/accounts/me/update-details",o);return e},be=()=>{const o=te();return Y(ye,{onSuccess:e=>{const a=q.ME,s=o.getQueryData(a);!s||o.setQueryData(a,()=>P(P({},s),e))}})};const fe={key:0,class:"container"},we={key:1,class:"container"},he={class:"row q-mt-xl"},ge=A({setup(o){const{data:e,isLoading:a}=ve(),{data:s,isLoading:d}=de(),{data:p,isLoading:w}=me(),F=ne(()=>a.value||d.value||w.value),g=be(),{t:u}=H(),h=j(),m=y({});ie(p,()=>{var n,i,v;m.value={mobile:(n=p.value)==null?void 0:n.mobile,name:(i=p.value)==null?void 0:i.name,sex:(v=p.value)==null?void 0:v.sex}});const f=y(null),E=[n=>!!n||u("this_field_is_required"),n=>ue.test(n)||u("this_is_invalid_value")],_=y(null),l=[n=>!!n||u("this_field_is_required"),n=>n.length<=100||u("this_field_is_required")],c=y(null),C=[n=>Object.values(J).some(i=>typeof i=="number"&&i===n)||u("this_is_invalid_value")],M=()=>{var n,i,v,T,V,b;(n=_.value)==null||n.validate(),(i=f.value)==null||i.validate(),(v=c.value)==null||v.validate(),!(((T=_.value)==null?void 0:T.error)||((V=f.value)==null?void 0:V.error)||((b=c.value)==null?void 0:b.error))&&g.mutate(m.value,{onSuccess:()=>{h.notify({message:u("saved"),position:"bottom-right",type:"positive",actions:[{label:"Dismiss",color:"white"}]})},onError:()=>{h.notify({message:u("failed_to_save"),position:"bottom-right",type:"negative",actions:[{label:"Dismiss",color:"white"}]})}})};return(n,i)=>(k(),X(z,{onSubmit:M},{default:x(()=>{var v,T,V;return[t(F)?(k(),$("div",fe,[(k(),$(le,null,re(5,b=>r(ae,{key:b,type:"QInput"})),64))])):(k(),$("div",we,[r(O,{ref_key:"nameField",ref:_,modelValue:m.value.name,"onUpdate:modelValue":i[0]||(i[0]=b=>m.value.name=b),label:t(u)("name"),rules:l},null,8,["modelValue","label"]),r(O,{"model-value":(v=t(p))==null?void 0:v.email,label:t(u)("email"),disable:""},null,8,["model-value","label"]),r(O,{ref_key:"mobileField",ref:f,modelValue:m.value.mobile,"onUpdate:modelValue":i[1]||(i[1]=b=>m.value.mobile=b),label:t(u)("mobile"),rules:E,mask:"### - ### - ####","unmasked-value":""},null,8,["modelValue","label"]),r(N,{ref_key:"sexField",ref:c,modelValue:m.value.sex,"onUpdate:modelValue":i[2]||(i[2]=b=>m.value.sex=b),label:t(u)("gender"),rules:C,options:(T=t(s))==null?void 0:T.genderOptions,"map-options":"","option-label":"name","emit-value":""},null,8,["modelValue","label","options"]),r(N,{"model-value":(V=t(p))==null?void 0:V.profile.id,label:t(u)("role"),options:t(e),"map-options":"","option-label":"name","option-value":"id","emit-value":"",disable:""},null,8,["model-value","label","options"])])),S("div",he,[r(Z,{label:t(u)("save"),color:"orange-9",type:"submit",class:"q-ml-auto",loading:t(g).isLoading.value,disable:t(F)},null,8,["label","loading","disable"])])]}),_:1}))}});var ke=B(ge,[["__scopeId","data-v-44dcc09a"]]);const Oe=async o=>{const{data:e}=await Q.put("/accounts/me/update-password",o);return e},Se=()=>Y(Oe);const Fe={class:"container"},Te={class:"row q-mt-xl"},Ve=A({setup(o){const{t:e}=H(),a=j(),s=Se(),d=y({current_password:"",new_password:"",re_enter_password:""}),p=y(null),w=y(null),F=[_=>!!_||e("this_field_is_required"),_=>6<=_.length||e("this_value_is_too_short")],g=y(null),u=[_=>_===d.value.new_password||e("this_is_invalid_value")],h=y(!1),m=y(!1),f=y(!1),E=()=>{var c,C,M,n,i,v;if((c=p.value)==null||c.validate(),(C=w.value)==null||C.validate(),(M=g.value)==null||M.validate(),((n=p.value)==null?void 0:n.error)||((i=w.value)==null?void 0:i.error)||((v=g.value)==null?void 0:v.error))return;const{current_password:_,new_password:l}=d.value;s.mutate({current_password:_,new_password:l},{onSuccess:()=>{a.notify({message:e("saved"),position:"bottom-right",type:"positive",actions:[{label:"Dismiss",color:"white"}]})},onError:()=>{a.notify({message:e("failed_to_save"),position:"bottom-right",type:"negative",actions:[{label:"Dismiss",color:"white"}]})}})};return(_,l)=>(k(),X(z,{onSubmit:E},{default:x(()=>[S("div",Fe,[r(O,{ref_key:"currentPasswordField",ref:p,modelValue:d.value.current_password,"onUpdate:modelValue":l[1]||(l[1]=c=>d.value.current_password=c),label:t(e)("current_password"),rules:F,type:h.value?"text":"password"},{append:x(()=>[r(D,{name:h.value?"visibility":"visibility_off",class:"cursor-pointer",onClick:l[0]||(l[0]=c=>h.value=!h.value)},null,8,["name"])]),_:1},8,["modelValue","label","type"]),r(O,{ref_key:"newPasswordField",ref:w,modelValue:d.value.new_password,"onUpdate:modelValue":l[3]||(l[3]=c=>d.value.new_password=c),label:t(e)("new_password"),rules:F,type:f.value?"text":"password"},{append:x(()=>[r(D,{name:f.value?"visibility":"visibility_off",class:"cursor-pointer",onClick:l[2]||(l[2]=c=>f.value=!f.value)},null,8,["name"])]),_:1},8,["modelValue","label","type"]),r(O,{ref_key:"reEnterPasswordField",ref:g,modelValue:d.value.re_enter_password,"onUpdate:modelValue":l[5]||(l[5]=c=>d.value.re_enter_password=c),label:t(e)("re-enter_password"),rules:u,type:m.value?"text":"password"},{append:x(()=>[r(D,{name:m.value?"visibility":"visibility_off",class:"cursor-pointer",onClick:l[4]||(l[4]=c=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","label","type"])]),S("div",Te,[r(Z,{label:t(e)("save"),color:"orange-9",type:"submit",class:"q-ml-auto",loading:t(s).isLoading.value},null,8,["label","loading"])])]),_:1}))}});var Pe=B(Ve,[["__scopeId","data-v-5b3985c8"]]);const xe={class:"wrapper"},Qe={name:"Profile"},Ce=A(L(P({},Qe),{setup(o){const{t:e}=H();return(a,s)=>(k(),$("div",xe,[S("h4",null,U(t(e)("my_account")),1),S("h6",null,U(t(e)("basic_info")),1),r(ke),S("h6",null,U(t(e)("change_password")),1),r(Pe)]))}}));var Re=B(Ce,[["__scopeId","data-v-8897c040"]]);export{Re as default};
