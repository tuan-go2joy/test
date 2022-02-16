import{a8 as A,l as B,ay as E,a3 as P,ak as R,al as V,am as j,ab as q,as as I,a6 as Q,ai as g,aj as k,ah as O}from"./vendor.c8a9d970.js";var K=A({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(n,{slots:x,emit:d}){const F=Q(),i=B(null);let f=0;const a=[];function m(e){const o=[],h=typeof e=="boolean"?e:n.noErrorFocus!==!0;f++;const c=(r,t)=>{d("validation-"+(r===!0?"success":"error"),t)};for(let r=0;r<a.length;r++){const t=a[r],u=t.validate();if(typeof u.then=="function")o.push(u.then(s=>({valid:s,comp:t}),s=>({valid:!1,comp:t,error:s})));else if(u!==!0){if(n.greedy===!1)return c(!1,t),h===!0&&typeof t.focus=="function"&&t.focus(),Promise.resolve(!1);o.push({valid:!1,comp:t})}}if(o.length===0)return c(!0),Promise.resolve(!0);const S=f;return Promise.all(o).then(r=>{if(S===f){const t=r.filter(C=>C.valid!==!0);if(t.length===0)return c(!0),!0;const{valid:u,comp:s}=t[0];return c(!1,s),h===!0&&u!==!0&&typeof s.focus=="function"&&s.focus(),!1}})}function v(){f++,a.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function p(e){e!==void 0&&g(e),m().then(o=>{o===!0&&(n.onSubmit!==void 0?d("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function y(e){e!==void 0&&g(e),d("reset"),k(()=>{v(),n.autofocus===!0&&n.noResetFocus!==!0&&l()})}function l(){O(()=>{if(i.value===null)return;const e=i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),o=>o.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}E(P,{bindComponent(e){a.push(e)},unbindComponent(e){const o=a.indexOf(e);o>-1&&a.splice(o,1)}});let b=!1;return R(()=>{b=!0}),V(()=>{b===!0&&n.autofocus===!0&&l()}),j(()=>{n.autofocus===!0&&l()}),Object.assign(F.proxy,{validate:m,resetValidation:v,submit:p,reset:y,focus:l,getValidationComponents:()=>a}),()=>q("form",{class:"q-form",ref:i,onSubmit:p,onReset:y},I(x.default))}});export{K as Q};