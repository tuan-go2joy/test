function b(s,l=50,a={}){var d,v;let t;const r=(d=a.isImmediate)!=null?d:!1,i=(v=a.callback)!=null?v:!1,u=a.maxWait;let m=Date.now(),n=[];function h(){if(u!==void 0){const e=Date.now()-m;if(e+l>=u)return u-e}return l}const f=function(...e){const c=this;return new Promise((I,k)=>{const p=function(){if(t=void 0,m=Date.now(),!r){const o=s.apply(c,e);i&&i(o),n.forEach(({resolve:T})=>T(o)),n=[]}},x=r&&t===void 0;if(t!==void 0&&clearTimeout(t),t=setTimeout(p,h()),x){const o=s.apply(c,e);return i&&i(o),I(o)}n.push({resolve:I,reject:k})})};return f.cancel=function(e){t!==void 0&&clearTimeout(t),n.forEach(({reject:c})=>c(e)),n=[]},f}export{b as d};