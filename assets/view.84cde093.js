var fe=Object.defineProperty,me=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var oe=(a,l,o)=>l in a?fe(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,E=(a,l)=>{for(var o in l||(l={}))_e.call(l,o)&&oe(a,o,l[o]);if(te)for(var o of te(l))ve.call(l,o)&&oe(a,o,l[o]);return a},T=(a,l)=>me(a,ce(l));import{m as A,n as C,l as w,T as pe,z as ge,aG as be,x as Se,p as re,aV as he,aW as ye,ax as Ve,aO as G,aP as ie,s as c,o as O,a1 as Y,a2 as u,a as t,h as r,t as f,y as V,aS as de,ay as K,az as W,a4 as N,aU as we,r as ne,c as se,M as Ce,F as ke}from"./vendor.6afcc2f0.js";import{u as Me,a as Qe,d as J}from"./useI18n.7a59afc8.js";import{k as xe,m as Fe}from"./use-prevent-scroll.d2546cca.js";import{a as F,Q as Ne}from"./QPagination.01584cce.js";import{u as qe,a as Re,b as Ue,Q as De}from"./QTable.da29ba87.js";import{Q as Ie}from"./QTooltip.8f60f90c.js";import{Q as P}from"./QCardSection.c854a72b.js";import{Q as X}from"./QCard.b7726ee7.js";import{Q as Z,a as $}from"./queryKeys.1c3d8761.js";import{C as Ee}from"./ClosePopup.0750090f.js";import{a as B,j as ue,Q as q}from"./axiosClient.cec0b1af.js";import{u as Oe}from"./useNotify.312f4e26.js";import{Q as z}from"./QSelect.76707349.js";import{_ as ee}from"./plugin-vue_export-helper.21dcd24c.js";import"./QSeparator.2336003c.js";import"./QList.cfb0d844.js";import"./QMenu.ef562a3e.js";var Pe=A({name:"QInnerLoading",props:T(E(E({},Me),xe),{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup(a,{slots:l}){const o=ge(),e=Qe(a,o.proxy.$q),{transition:m,transitionStyle:_}=Fe(a,C(()=>a.showing)),n=C(()=>"q-inner-loading absolute-full column flex-center"+(e.value===!0?" q-inner-loading--dark":"")),S=C(()=>"q-inner-loading__label"+(a.labelClass!==void 0?` ${a.labelClass}`:""));function i(){const v=[w(be,{size:a.size,color:a.color})];return a.label!==void 0&&v.push(w("div",{class:S.value,style:a.labelStyle},[a.label])),v}function p(){return a.showing===!0?w("div",{class:n.value,style:_.value},l.default!==void 0?l.default():i()):null}return()=>w(pe,{name:m.value,appear:!0},p)}}),le=A({name:"QToggle",props:T(E({},qe),{icon:String,iconColor:String}),emits:Re,setup(a){function l(o,e){const m=C(()=>(o.value===!0?a.checkedIcon:e.value===!0?a.indeterminateIcon:a.uncheckedIcon)||a.icon),_=C(()=>o.value===!0?a.iconColor:null);return()=>[w("div",{class:"q-toggle__track"}),w("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},m.value!==void 0?[w(Se,{name:m.value,color:_.value})]:void 0)]}return Ue("toggle",l)}}),Te=A({name:"QTr",props:{props:Object,noHover:Boolean},setup(a,{slots:l}){const o=C(()=>"q-tr"+(a.props===void 0||a.props.header===!0?"":" "+a.props.__trClass)+(a.noHover===!0?" q-tr--no-hover":""));return()=>w("tr",{class:o.value},re(l.default))}}),ae=A({name:"QCardActions",props:T(E({},he),{vertical:Boolean}),setup(a,{slots:l}){const o=ye(a),e=C(()=>`q-card__actions ${o.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>w("div",{class:e.value},re(l.default))}});const ze=async a=>{const{data:l}=await B.get(`/staff/getStaffList?limit=10&page=${a}`);return l.data},Ae=a=>Ve([Z.STAFF,a],()=>ze(a.value)),Be=async a=>{const{data:l}=await B.post("/staff/updateStaffStatus",a);return l},Le=()=>G(Be),He=async a=>{const{data:l}=await B.post("/staff/createStaff",a);return l},je=()=>{const a=ie();return G(He,{onSuccess:()=>{a.invalidateQueries(Z.STAFF)}})};const Ge={props:{openCreateStaffModal:{type:Boolean,default:!1}},emits:["reset"],setup(a,l){const{t:o}=J(),e=ue(),m=je(),_=C(()=>a.openCreateStaffModal),n=()=>{l.emit("reset",!1)},S=()=>{l.emit("reset",!1)},i=c({fullName:"",mobile:"",email:"",roleSn:2,status:1,gender:0}),p=[{key:"Hotel Owner",value:1},{key:"Front desk",value:2}],v=[{key:"Select Gender",value:0},{key:"Male",value:1},{key:"FeMale",value:2}],g=c(null),R=[s=>!!s||o("this_field_is_required"),s=>s.length<=50||o("the_length_is_from_1_to_50_characters")],h=c(null),U=[s=>!!s||o("this_field_is_required"),s=>s.length>=8&&s.length<=12||o("the_length_is_from_8_to_12_characters")],y=c(null);return{onCancelModal:n,onSaveModal:S,onSubmit:()=>{var s,b,d,k,M,Q;(s=g.value)==null||s.validate(),(b=h.value)==null||b.validate(),(d=y.value)==null||d.validate(),!(((k=g.value)==null?void 0:k.error)||((M=h.value)==null?void 0:M.error)||((Q=y.value)==null?void 0:Q.error))&&m.mutate(i.value,{onSuccess:()=>{e.notify({message:o("saved"),position:"bottom-right",type:"positive",actions:[{label:"Dismiss",color:"white"}]}),l.emit("reset",!1)},onError:x=>{var D,I;const j=(I=(D=x.response)==null?void 0:D.data.error)==null?void 0:I[0].message;e.notify({message:j||o("failed_to_save"),position:"bottom-right",type:"negative",actions:[{label:"Dismiss",color:"white"}]})}})},openStaffModalComputed:_,t:o,fullNameField:g,fullNameRules:R,phoneField:h,phoneRules:U,emailField:y,emailRules:[s=>!!s||o("this_field_is_required"),s=>s.length<=100||o("the_length_is_from_1_to_100_characters")],formValues:i,roleOptions:p,genderOptions:v}}},Ye=a=>(K("data-v-d6febfdc"),a=a(),W(),a),Ke=Ye(()=>r("div",{class:"text-h6"},"New staff",-1)),We={class:"mb-1e"},Je={class:"mb-1e"},Xe={class:"mb-1e"},Ze={class:"mb-1e"},$e=N(". ");function el(a,l,o,e,m,_){return O(),Y($,{modelValue:e.openStaffModalComputed,"onUpdate:modelValue":l[7]||(l[7]=n=>e.openStaffModalComputed=n),persistent:""},{default:u(()=>[t(X,{style:{width:"700px","max-width":"80vw"}},{default:u(()=>[t(P,null,{default:u(()=>[Ke]),_:1}),r("form",{class:"q-gutter-md",onSubmit:l[6]||(l[6]=de((...n)=>e.onSubmit&&e.onSubmit(...n),["prevent","stop"]))},[t(P,{class:"custom-popup"},{default:u(()=>[r("div",null,[r("p",null,f(e.t("staff_name")),1),t(q,{ref:"fullNameField",modelValue:e.formValues.fullName,"onUpdate:modelValue":l[0]||(l[0]=n=>e.formValues.fullName=n),filled:"",dense:"",placeholder:e.t("staff_name"),"lazy-rules":"",rules:e.fullNameRules},null,8,["modelValue","placeholder","rules"])]),r("div",null,[r("p",null,f(e.t("status")),1),t(le,{modelValue:e.formValues.status,"onUpdate:modelValue":l[1]||(l[1]=n=>e.formValues.status=n),"false-value":0,"true-value":1,color:"red"},null,8,["modelValue"])]),r("div",We,[r("p",null,f(e.t("role")),1),t(z,{modelValue:e.formValues.roleSn,"onUpdate:modelValue":l[2]||(l[2]=n=>e.formValues.roleSn=n),filled:"",dense:"","map-options":"","option-label":"key","option-value":"value",options:e.roleOptions,"emit-value":"",placeholder:e.t("role")},null,8,["modelValue","options","placeholder"])]),r("div",Je,[r("p",null,f(e.t("email")),1),t(q,{ref:"emailField",modelValue:e.formValues.email,"onUpdate:modelValue":l[3]||(l[3]=n=>e.formValues.email=n),filled:"",type:"email",dense:"",placeholder:e.t("email"),"lazy-rules":"",rules:e.emailRules},null,8,["modelValue","placeholder","rules"])]),r("div",Xe,[r("p",null,f(e.t("phone_number")),1),t(q,{ref:"phoneField",modelValue:e.formValues.mobile,"onUpdate:modelValue":l[4]||(l[4]=n=>e.formValues.mobile=n),filled:"",dense:"",placeholder:e.t("phone_number"),"lazy-rules":"",rules:e.phoneRules},null,8,["modelValue","placeholder","rules"])]),r("div",Ze,[r("p",null,f(e.t("gender")),1),t(z,{modelValue:e.formValues.gender,"onUpdate:modelValue":l[5]||(l[5]=n=>e.formValues.gender=n),filled:"",dense:"","map-options":"","option-label":"key","option-value":"value",options:e.genderOptions,"emit-value":"",placeholder:e.t("gender")},null,8,["modelValue","options","placeholder"])])]),_:1}),t(ae,{align:"right",class:"bg-white text-teal mb-1e"},{default:u(()=>[$e,t(V,{label:e.t("cancel"),onClick:e.onCancelModal},null,8,["label","onClick"]),t(V,{label:e.t("submit"),type:"submit",color:"red"},null,8,["label"])]),_:1})],32)]),_:1})]),_:1},8,["modelValue"])}var ll=ee(Ge,[["render",el],["__scopeId","data-v-d6febfdc"]]);const al=async a=>{const{data:l}=await B.post("/staff/updateStaff",a);return l},tl=()=>{const a=ie();return G(al,{onSuccess:()=>{a.invalidateQueries(Z.STAFF)}})};const ol={props:{openEditStaffModal:{type:Boolean,default:!1},staffDetail:{type:Object,default:null}},emits:["reset"],setup(a,l){const{t:o}=J(),e=ue(),m=tl(),_=C(()=>a.openEditStaffModal),n=()=>{l.emit("reset",!1)},S=()=>{l.emit("reset",!1)},i=c({staffSn:null,fullName:"",mobile:"",email:"",roleSn:2,status:1,gender:0});we(()=>{var s,b,d,k,M,Q,x;i.value={staffSn:(s=a.staffDetail.row)==null?void 0:s.sn,fullName:(b=a.staffDetail.row)==null?void 0:b.fullName,mobile:(d=a.staffDetail.row)==null?void 0:d.mobile,email:(k=a.staffDetail.row)==null?void 0:k.email,roleSn:(M=a.staffDetail.row)==null?void 0:M.roleSn,status:(Q=a.staffDetail.row)==null?void 0:Q.status,gender:(x=a.staffDetail.row)==null?void 0:x.gender}});const p=[{key:"Hotel Owner",value:1},{key:"Front desk",value:2}],v=[{key:"Select Gender",value:0},{key:"Male",value:1},{key:"FeMale",value:2}],g=c(null),R=[s=>!!s||o("this_field_is_required"),s=>s.length<=50||o("the_length_is_from_1_to_50_characters")],h=c(null),U=[s=>!!s||o("this_field_is_required"),s=>s.length>=8&&s.length<=12||o("the_length_is_from_8_to_12_characters")],y=c(null);return{onCancelModal:n,onSaveModal:S,onSubmit:()=>{var s,b,d,k,M,Q;(s=g.value)==null||s.validate(),(b=h.value)==null||b.validate(),(d=y.value)==null||d.validate(),!(((k=g.value)==null?void 0:k.error)||((M=h.value)==null?void 0:M.error)||((Q=y.value)==null?void 0:Q.error))&&m.mutate(i.value,{onSuccess:()=>{e.notify({message:o("saved"),position:"bottom-right",type:"positive",actions:[{label:"Dismiss",color:"white"}]}),l.emit("reset",!1)},onError:x=>{var D,I;const j=(I=(D=x.response)==null?void 0:D.data.error)==null?void 0:I[0].message;e.notify({message:j||o("failed_to_save"),position:"bottom-right",type:"negative",actions:[{label:"Dismiss",color:"white"}]})}})},openStaffModalComputed:_,t:o,fullNameField:g,fullNameRules:R,phoneField:h,phoneRules:U,emailField:y,emailRules:[s=>!!s||o("this_field_is_required"),s=>s.length<=100||o("the_length_is_from_1_to_100_characters")],formValues:i,roleOptions:p,genderOptions:v}}},nl=a=>(K("data-v-5d0dfb8c"),a=a(),W(),a),sl=nl(()=>r("div",{class:"text-h6"},"Edit staff",-1)),rl={class:"mb-1e"},il={class:"mb-1e"},dl={class:"mb-1e"},ul={class:"mb-1e"},fl=N(". ");function ml(a,l,o,e,m,_){return O(),Y($,{modelValue:e.openStaffModalComputed,"onUpdate:modelValue":l[7]||(l[7]=n=>e.openStaffModalComputed=n),persistent:""},{default:u(()=>[t(X,{style:{width:"700px","max-width":"80vw"}},{default:u(()=>[t(P,null,{default:u(()=>[sl]),_:1}),r("form",{class:"q-gutter-md",onSubmit:l[6]||(l[6]=de((...n)=>e.onSubmit&&e.onSubmit(...n),["prevent","stop"]))},[t(P,{class:"custom-popup"},{default:u(()=>[r("div",null,[r("p",null,f(e.t("staff_name")),1),t(q,{ref:"fullNameField",modelValue:e.formValues.fullName,"onUpdate:modelValue":l[0]||(l[0]=n=>e.formValues.fullName=n),filled:"",dense:"",placeholder:e.t("staff_name"),"lazy-rules":"",rules:e.fullNameRules},null,8,["modelValue","placeholder","rules"])]),r("div",null,[r("p",null,f(e.t("status")),1),t(le,{modelValue:e.formValues.status,"onUpdate:modelValue":l[1]||(l[1]=n=>e.formValues.status=n),"false-value":0,"true-value":1,color:"red"},null,8,["modelValue"])]),r("div",rl,[r("p",null,f(e.t("role")),1),t(z,{modelValue:e.formValues.roleSn,"onUpdate:modelValue":l[2]||(l[2]=n=>e.formValues.roleSn=n),filled:"",dense:"","map-options":"","option-label":"key","option-value":"value",options:e.roleOptions,"emit-value":"",placeholder:e.t("role")},null,8,["modelValue","options","placeholder"])]),r("div",il,[r("p",null,f(e.t("email")),1),t(q,{ref:"emailField",modelValue:e.formValues.email,"onUpdate:modelValue":l[3]||(l[3]=n=>e.formValues.email=n),filled:"",type:"email",dense:"",placeholder:e.t("email"),"lazy-rules":"",rules:e.emailRules},null,8,["modelValue","placeholder","rules"])]),r("div",dl,[r("p",null,f(e.t("phone_number")),1),t(q,{ref:"phoneField",modelValue:e.formValues.mobile,"onUpdate:modelValue":l[4]||(l[4]=n=>e.formValues.mobile=n),filled:"",dense:"",placeholder:e.t("phone_number"),"lazy-rules":"",rules:e.phoneRules},null,8,["modelValue","placeholder","rules"])]),r("div",ul,[r("p",null,f(e.t("gender")),1),t(z,{modelValue:e.formValues.gender,"onUpdate:modelValue":l[5]||(l[5]=n=>e.formValues.gender=n),filled:"",dense:"","map-options":"","option-label":"key","option-value":"value",options:e.genderOptions,"emit-value":"",placeholder:e.t("gender")},null,8,["modelValue","options","placeholder"])])]),_:1}),t(ae,{align:"right",class:"bg-white text-teal mb-1e"},{default:u(()=>[fl,t(V,{label:e.t("cancel"),onClick:e.onCancelModal},null,8,["label","onClick"]),t(V,{label:e.t("submit"),type:"submit",color:"red"},null,8,["label"])]),_:1})],32)]),_:1})]),_:1},8,["modelValue"])}var cl=ee(ol,[["render",ml],["__scopeId","data-v-5d0dfb8c"]]);const _l={components:{CreateStaffModal:ll,EditStaffModal:cl},setup(){const{t:a}=J(),l=c(!1),o=c(1),e=c(!1),m=c(!1),_=c(!1),{data:n,isLoading:S}=Ae(o),i=Le(),p=[{name:"fullName",required:!0,label:"Staff name",align:"left",field:d=>d.fullName,format:d=>`${d}`,sortable:!0},{name:"mobile",align:"center",label:"Phone number",field:"mobile",sortable:!0},{name:"email",label:"Email",field:"email",sortable:!0},{name:"role",label:"Role",field:"role"},{name:"status",label:"Status",field:"status"},{name:"operations",label:"",field:"operations",sortable:!0}],v=c({}),g=c(null),R=d=>{_.value=!0,v.value=d},h=()=>{m.value=!0},U=d=>{v.value=d,v.value.status===1?g.value=a("are_you_sure_you_want_to_deactivate_this_account"):g.value=a("are_you_sure_you_want_to_activate_this_account"),l.value=!0},y=()=>{v.value.status=v.value.status?0:1,l.value=!1,b(v)},L=d=>{m.value=d,_.value=d},{notifySaveSuccess:H,notifySaveFailed:s}=Oe(),b=async d=>{i.mutate({staffSn:d.value.sn,status:d.value.status},{onSuccess:()=>{H()},onError:()=>{d.value.status=d.value.status?0:1,s()}})};return{t:a,openDialogStatus:l,currentPage:o,editRow:R,openModalNewStaff:h,onChangeStatus:U,onConfirmStatusPopup:y,resetStaffModal:L,columns:p,status:e,data:n,isLoading:S,openCreateStaffModal:m,openEditStaffModal:_,staffDetail:v,titleActiveModal:g}}},vl=a=>(K("data-v-7c86ca86"),a=a(),W(),a),pl={class:"q-pa-md header"},gl={key:1,class:"q-pa-md"},bl=vl(()=>r("strong",null,"Edit",-1)),Sl={class:"q-pa-lg flex flex-center"},hl={class:"q-ml-sm"};function yl(a,l,o,e,m,_){const n=ne("create-staff-modal"),S=ne("edit-staff-modal");return O(),se(ke,null,[r("div",pl,[t(V,{color:"negative",icon:"add",label:"New Staff","no-caps":"",onClick:l[0]||(l[0]=i=>e.openModalNewStaff())}),t(V,{color:"negative",label:"Role","no-caps":""})]),e.isLoading?(O(),Y(Pe,{key:0,showing:"",color:"red"})):(O(),se("div",gl,[t(De,{"rows-per-page-options":[0],title:e.t("staff_list"),rows:e.data.staffList,columns:e.columns,"hide-pagination":"","row-key":"index"},{body:u(i=>[t(Te,{props:i},{default:u(()=>[t(F,{key:"fullName",props:i},{default:u(()=>[N(f(i.row.fullName),1)]),_:2},1032,["props"]),t(F,{key:"mobile",props:i},{default:u(()=>[N(f(i.row.mobile),1)]),_:2},1032,["props"]),t(F,{key:"email",props:i},{default:u(()=>[N(f(i.row.email),1)]),_:2},1032,["props"]),t(F,{key:"role",props:i},{default:u(()=>[N(f(i.row.role==1?"Hotel Owner":"Front desk"),1)]),_:2},1032,["props"]),t(F,{key:"status",props:i},{default:u(()=>[t(le,{modelValue:i.row.status,"onUpdate:modelValue":p=>i.row.status=p,"false-value":0,"true-value":1,color:"red",onClick:p=>e.onChangeStatus(i.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1032,["props"]),t(F,{key:"operations",props:i},{default:u(()=>[t(Ie,{class:"bg-indigo",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:u(()=>[bl]),_:1}),t(V,{dense:"",round:"",flat:"",color:"grey",icon:"edit",onClick:p=>e.editRow(i)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["title","rows","columns"]),r("div",Sl,[t(Ne,{modelValue:e.currentPage,"onUpdate:modelValue":l[1]||(l[1]=i=>e.currentPage=i),color:"red",max:e.data.meta.lastPage,"max-pages":6,"boundary-numbers":""},null,8,["modelValue","max"])])])),t(n,{"open-create-staff-modal":e.openCreateStaffModal,onReset:e.resetStaffModal},null,8,["open-create-staff-modal","onReset"]),t(S,{"open-edit-staff-modal":e.openEditStaffModal,"staff-detail":e.staffDetail,onReset:e.resetStaffModal},null,8,["open-edit-staff-modal","staff-detail","onReset"]),t($,{modelValue:e.openDialogStatus,"onUpdate:modelValue":l[2]||(l[2]=i=>e.openDialogStatus=i),persistent:""},{default:u(()=>[t(X,null,{default:u(()=>[t(P,{class:"row items-center"},{default:u(()=>[r("span",hl,f(e.titleActiveModal),1)]),_:1}),t(ae,{align:"right"},{default:u(()=>[Ce(t(V,{flat:"",label:e.t("cancel"),color:"primary"},null,8,["label"]),[[Ee]]),t(V,{label:e.t("confirm"),color:"red",onClick:e.onConfirmStatusPopup},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var zl=ee(_l,[["render",yl],["__scopeId","data-v-7c86ca86"]]);export{zl as default};