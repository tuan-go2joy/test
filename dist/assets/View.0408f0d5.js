import{f as $,R as U,S as N,V as _,U as q,r as y,i as B,v as M,W as S,N as j,o as L,l as c,a0 as k,g as E,h as z,x as l,y as t,E as A,w,a1 as F,j as R,C as b,B as V,A as u,n as I}from"./vendor.6c1f170c.js";import{a as h,_ as W}from"./index.a42a404f.js";import{M as D}from"./index.8f7c376c.js";async function J(){return await h.get("/partner/getProfileInfo")}async function O(e){return await h.post("/partner/updateProfile",e)}const Z=$({name:"ProfilePage",components:{ElForm:U,ElFormItem:N,ElInput:_,ElButton:q},setup(){const e=y(null),s=B("emitter"),P=y(!1),{t:d,locale:T}=M(),n=S({isLoading:!1,curPassIcon:"el-icon-view el-icon-not-view",curPassType:"password",newPassIcon:"el-icon-view el-icon-not-view",newPassType:"password",conPassIcon:"el-icon-view el-icon-not-view",conPassType:"password"}),a=y({email:null,mobile:"",name:"",userId:"",curPassword:"",newPassword:"",confirmPassword:""}),p=j(()=>({curPassword:[{trigger:"blur",validator:(i,o,r)=>{a.value.newPassword?o?r():r(new Error(d("page.profileValidation.enterPass"))):r()}}],newPassword:[{trigger:"blur",validator:(i,o,r)=>{if(a.value.curPassword){const m=/^([a-zA-Z0-9]+){6,7}$/;o?(o.length<6||o.length>16)&&r(new Error(d("page.profileValidation.formatPass"))):r(new Error(d("page.profileValidation.enterNewPass"))),setTimeout(()=>{m.test(o)===!1?r(new Error(d("page.profileValidation.formatPass"))):r()},1e3)}else r()}}],confirmPassword:{trigger:"blur",validator:(i,o,r)=>{a.value.newPassword?o?o&&o!==a.value.newPassword?r(new Error(d("page.profileValidation.confirmMatch"))):r():r(new Error(d("page.profileValidation.enterConPass"))):r()}},name:{required:!0,message:"Name required",trigger:"blur"},mobile:{required:!0,message:"Mobile required",trigger:"blur"},email:{required:!0,message:"Email required",trigger:"blur"}}));L(async()=>{n.isLoading=!0;try{const{data:i}=await J();a.value=i.data}catch{return!1}finally{n.isLoading=!1}});const v=async()=>{P.value=!0,await e.value.validate(async i=>{if(!i)return!1;try{const o={email:a.value.email,mobile:a.value.mobile,name:a.value.name,userId:a.value.userId,curPassword:a.value.curPassword?D.init(a.value.curPassword):"",newPassword:a.value.newPassword?D.init(a.value.newPassword):"",confirmPassword:a.value.confirmPassword?D.init(a.value.confirmPassword):""},r=60*60*24*1e3;let m={};const{data:f}=await O(o);f.code===1&&(m={email:f.data.email,fullName:f.data.name,userId:f.userId},g("profile",m,r),a.value.curPassword=a.value.newPassword=a.value.confirmPassword="",s.emit("setFrofile"),A({type:"success",message:d("message.updateSuccess")}))}catch{return!1}}),P.value=!1},g=(i,o,r)=>{const m=new Date,f={value:o,expiry:m.getTime()+r};localStorage.setItem(i,JSON.stringify(f))};return{t:d,ui:n,locale:T,isCallAPI:P,formData:a,rules:p,formRef:e,onUpdateProfile:v,showPwd:i=>{switch(i){case 0:n.curPassType=n.curPassType==="password"?"":"password",n.curPassIcon=n.curPassType==="password"?"el-icon-view el-icon-not-view":"el-icon-view";break;case 1:n.newPassType=n.newPassType==="password"?"":"password",n.newPassIcon=n.newPassType==="password"?"el-icon-view el-icon-not-view":"el-icon-view";break;case 2:n.conPassType=n.conPassType==="password"?"":"password",n.conPassIcon=n.conPassType==="password"?"el-icon-view el-icon-not-view":"el-icon-view";break}}}}}),G={class:"profile-segment"},H={class:"profile-segment__content"},K={class:"profile-segment__button"},Q={class:"profile-segment__button--content"};function X(e,s,P,d,T,n){const a=c("el-input"),p=c("el-form-item"),v=c("el-form"),g=c("el-button"),C=c("portal-section"),i=k("loading");return E(),z("div",G,[l(C,null,{default:t(()=>[w("div",H,[F((E(),R(v,{ref:"formRef",model:e.formData,rules:e.rules,"label-position":"left","label-width":"15%","hide-required-asterisk":""},{default:t(()=>[l(p,{label:e.t("page.profile.userID")},{default:t(()=>[l(a,{modelValue:e.formData.userId,"onUpdate:modelValue":s[0]||(s[0]=o=>e.formData.userId=o),disabled:""},{default:t(()=>[b(V(e.formData.userId),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),u(" user ID "),l(p,{label:e.t("page.profile.full_name"),prop:"name"},{default:t(()=>[l(a,{modelValue:e.formData.name,"onUpdate:modelValue":s[1]||(s[1]=o=>e.formData.name=o),placeholder:e.t("page.profile.full_name"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u(" full name "),l(p,{label:e.t("page.profile.mobile"),prop:"mobile"},{default:t(()=>[l(a,{modelValue:e.formData.mobile,"onUpdate:modelValue":s[2]||(s[2]=o=>e.formData.mobile=o),placeholder:e.t("page.profile.mobile"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u(" mobile "),l(p,{label:e.t("page.profile.email"),prop:"email"},{default:t(()=>[l(a,{modelValue:e.formData.email,"onUpdate:modelValue":s[3]||(s[3]=o=>e.formData.email=o),placeholder:e.t("page.profile.email"),type:"text"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u(" email "),l(p,{label:e.t("page.profile.current_password"),prop:"curPassword"},{default:t(()=>[l(a,{modelValue:e.formData.curPassword,"onUpdate:modelValue":s[5]||(s[5]=o=>e.formData.curPassword=o),autocomplete:"new-password",placeholder:e.t("page.profile.current_password"),t:"",type:e.ui.curPassType},{suffix:t(()=>[w("i",{class:I(e.ui.curPassIcon),style:{cursor:"pointer"},onClick:s[4]||(s[4]=o=>e.showPwd(0))},null,2)]),_:1},8,["modelValue","placeholder","type"])]),_:1},8,["label"]),u(" password "),l(p,{label:e.t("page.profile.new_password"),prop:"newPassword"},{default:t(()=>[l(a,{modelValue:e.formData.newPassword,"onUpdate:modelValue":s[7]||(s[7]=o=>e.formData.newPassword=o),autocomplete:"new-password",placeholder:e.t("page.profile.new_password"),name:"Confirm Password",type:e.ui.newPassType},{suffix:t(()=>[w("i",{class:I(e.ui.newPassIcon),style:{cursor:"pointer"},onClick:s[6]||(s[6]=o=>e.showPwd(1))},null,2)]),_:1},8,["modelValue","placeholder","type"])]),_:1},8,["label"]),u(" new password "),l(p,{label:e.t("page.profile.confirm_new_password"),prop:"confirmPassword"},{default:t(()=>[l(a,{modelValue:e.formData.confirmPassword,"onUpdate:modelValue":s[9]||(s[9]=o=>e.formData.confirmPassword=o),autocomplete:"new-password",placeholder:e.t("page.profile.confirm_new_password"),name:"Confirm Password",type:e.ui.conPassType},{suffix:t(()=>[w("i",{class:I(e.ui.conPassIcon),style:{cursor:"pointer"},onClick:s[8]||(s[8]=o=>e.showPwd(2))},null,2)]),_:1},8,["modelValue","placeholder","type"])]),_:1},8,["label"]),u(" confirm password ")]),_:1},8,["model","rules"])),[[i,e.ui.isLoading]])]),w("div",K,[w("div",Q,[l(g,{type:"info",icon:"el-icon-refresh-left",size:"large",onClick:s[10]||(s[10]=o=>e.$router.go(-1))},{default:t(()=>[b(V(e.t("button.back")),1)]),_:1}),l(g,{type:"success",icon:"el-icon-edit",size:"large",loading:e.isCallAPI,onClick:s[11]||(s[11]=o=>e.onUpdateProfile())},{default:t(()=>[b(V(e.t("button.edit")),1)]),_:1},8,["loading"])])])]),_:1})])}var oe=W(Z,[["render",X],["__scopeId","data-v-71c682cc"]]);export{oe as default};