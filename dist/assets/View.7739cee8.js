import{f as $,r as b,u as V,W as D,a6 as F,N as C,$ as k,o as B,l,g as S,h as j,w as s,n as i,x as t,X as g,y as n,B as M,C as w}from"./vendor.6c1f170c.js";import{u as N}from"./useFormat.532d12a0.js";import{_ as P,b as E}from"./index.a42a404f.js";var T={"verification-code":"_verification-code_lc06b_1","verification-code__img":"_verification-code__img_lc06b_8","verification-code__title":"_verification-code__title_lc06b_16","verification-code__desc":"_verification-code__desc_lc06b_23","verification-code__container":"_verification-code__container_lc06b_27","verification-code__submit":"_verification-code__submit_lc06b_33","is-disabled":"_is-disabled_lc06b_49","verification-code__countdown":"_verification-code__countdown_lc06b_54","verification-code__resend":"_verification-code__resend_lc06b_58"};const R=$({name:"VerificationCode",components:{},setup(){const{formatTime:e}=N(),o=b(3*60),_=b("3:00"),f=V(),c=D({verifyCode:""}),u=F(),d=C(()=>u.getters["forgotPassword/email"]);d.value||f.push({name:"Login"});const a=C(()=>!c.verifyCode),r=()=>{if(o.value<=0)return!1;setTimeout(()=>{o.value-=1,r()},1e3)};k(o,v=>{_.value=e(String(v))}),B(()=>{r()});const m=()=>{o.value=3*60,r()};return{formatTime:e,formData:c,timeDown:_,duration:o,disabledButton:a,submitForm:async()=>{const v={email:d.value,verifyCode:c.verifyCode};try{const{data:y}=await u.dispatch("forgotPassword/verifyCodeEmail",v);y.data&&f.push({name:"ChangePassword"})}catch{return!1}},resendVerifyCode:async()=>{m()}}}}),z=s("img",{src:E,alt:"logo-go2joy.png"},null,-1),L=[z],U={style:{"text-align":"center"}},W=w(" Resend Code "),X=w(" Continue ");function q(e,o,_,f,c,u){const d=l("el-input"),a=l("el-form-item"),r=l("el-button"),m=l("el-form");return S(),j("div",{class:i(e.$style["verification-code"])},[s("div",{class:i(e.$style["verification-code__container"])},[s("div",{class:i(e.$style["verification-code__img"])},L,2),s("div",{class:i(e.$style["verification-code__title"])}," Forgot Password ",2),s("div",{class:i(e.$style["verification-code__desc"])}," Enter your verification code ",2),t(m,{onSubmit:g(e.submitForm,["prevent"])},{default:n(()=>[t(a,null,{default:n(()=>[t(d,{modelValue:e.formData.verifyCode,"onUpdate:modelValue":o[0]||(o[0]=p=>e.formData.verifyCode=p),placeholder:"Verification code"},null,8,["modelValue"])]),_:1}),t(a,null,{default:n(()=>[s("div",{class:i(e.$style["verification-code__countdown"])},M(e.timeDown),3)]),_:1}),t(a,null,{default:n(()=>[s("div",U,[t(r,{class:i(e.$style["verification-code__resend"]),type:"text",disabled:e.duration>0,onClick:e.resendVerifyCode},{default:n(()=>[W]),_:1},8,["class","disabled","onClick"])])]),_:1}),t(a,null,{default:n(()=>[t(r,{class:i(e.$style["verification-code__submit"]),disabled:e.disabledButton||e.duration<=0,type:"warning",onClick:g(e.submitForm,["prevent"])},{default:n(()=>[X]),_:1},8,["class","disabled","onClick"])]),_:1})]),_:1},8,["onSubmit"])],2)],2)}const h={};h.$style=T;var J=P(R,[["render",q],["__cssModules",h]]);export{J as default};