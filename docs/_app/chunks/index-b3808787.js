function L(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(O)}function W(t){return typeof t=="function"}function ft(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function _t(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function U(t){return Object.keys(t).length===0}function dt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,u){if(r){const c=P(n,e,i,u);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let A=!1;function V(){A=!0}function X(){A=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&l.push(f)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const s=n[l].claim_order,f=(r>0&&n[e[r]].claim_order<=s?r+1:Y(1,r,y=>n[e[y]].claim_order,s))-1;i[l]=e[f]+1;const a=f+1;e[a]=l,r=Math.max(a,r)}const u=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(c[l],f)}}function tt(t,n){if(A){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){A&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function gt(){return v(" ")}function xt(){return v("")}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function I(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function wt(t,n,e){return I(t,n,e,D)}function $t(t,n,e){return I(t,n,e,G)}function rt(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function At(t){return rt(t," ")}function C(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Et(t,n){const e=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",e);if(e===i)return new H(void 0,n);z(t);const r=t.splice(e,i-e+1);$(r[0]),$(r[r.length-1]);const u=r.slice(1,r.length-1);for(const c of u)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(u,n)}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Tt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=G(e.nodeName):this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach($)}}class H extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let m;function h(t){m=t}function S(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){S().$$.on_mount.push(t)}function kt(t){S().$$.after_update.push(t)}function jt(t,n){return S().$$.context.set(t,n),n}const d=[],q=[],b=[],B=[],J=Promise.resolve();let N=!1;function K(){N||(N=!0,J.then(Q))}function Mt(){return K(),J}function T(t){b.push(t)}const E=new Set;let x=0;function Q(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ct(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;B.length;)B.pop()();N=!1,E.clear(),h(t)}function ct(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const w=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Ht(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&(w.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=n[u];if(o){for(const l in c)l in o||(i[l]=1);for(const l in o)r[l]||(e[l]=o[l],r[l]=1);t[u]=o}else for(const l in c)r[l]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function st(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(n,e),i||T(()=>{const l=u.map(O).filter(W);c?c.push(...l):p(l),t.$$.on_mount=[]}),o.forEach(T)}function ut(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(d.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,r,u,c,o=[-1]){const l=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:L,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||l.$$.root};c&&c(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,y,...k)=>{const j=k.length?k[0]:y;return s.ctx&&r(s.ctx[a],s.ctx[a]=j)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](j),f&&at(t,a)),y}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){V();const a=it(n.target);s.fragment&&s.fragment.l(a),a.forEach($)}else s.fragment&&s.fragment.c();n.intro&&ot(t.$$.fragment),st(t,n.target,n.anchor,n.customElement),X(),Q()}h(l)}class Gt{$destroy(){ut(this,1),this.$destroy=L}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Bt as A,Lt as B,ut as C,R as D,Mt as E,tt as F,yt as G,dt as H,_t as I,mt as J,pt as K,ht as L,G as M,$t as N,H as O,Et as P,vt as Q,Gt as S,it as a,bt as b,wt as c,$ as d,D as e,Tt as f,et as g,rt as h,Dt as i,Nt as j,gt as k,xt as l,At as m,L as n,Ct as o,qt as p,Ht as q,ot as r,ft as s,v as t,jt as u,kt as v,St as w,Ot as x,Pt as y,st as z};
