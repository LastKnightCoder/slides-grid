(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",up=Br(cp);function Sc(e){return!!e||e===""}function X(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=He(r)?fp(r):X(r);if(o)for(const a in o)t[a]=o[a]}return t}else{if(He(e))return e;if(Ne(e))return e}}const dp=/;(?![^(]*\))/g,pp=/:(.+)/;function fp(e){const t={};return e.split(dp).forEach(n=>{if(n){const r=n.split(pp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function De(e){let t="";if(He(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const r=De(e[n]);r&&(t+=r+" ")}else if(Ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ie(e){if(!e)return null;let{class:t,style:n}=e;return t&&!He(t)&&(e.class=De(t)),n&&(e.style=X(n)),e}const mp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",hp=Br(mp),Et=e=>He(e)?e:e==null?"":re(e)||Ne(e)&&(e.toString===Rc||!de(e.toString))?JSON.stringify(e,$c,2):String(e),$c=(e,t)=>t&&t.__v_isRef?$c(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Ec(t)?{[`Set(${t.size})`]:[...t.values()]}:Ne(t)&&!re(t)&&!Pc(t)?String(t):t,Ae={},Zn=[],Ot=()=>{},gp=()=>!1,_p=/^on[^a-z]/,Dr=e=>_p.test(e),ba=e=>e.startsWith("onUpdate:"),it=Object.assign,xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vp=Object.prototype.hasOwnProperty,ke=(e,t)=>vp.call(e,t),re=Array.isArray,Qn=e=>Hr(e)==="[object Map]",Ec=e=>Hr(e)==="[object Set]",de=e=>typeof e=="function",He=e=>typeof e=="string",wa=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Oc=e=>Ne(e)&&de(e.then)&&de(e.catch),Rc=Object.prototype.toString,Hr=e=>Rc.call(e),yp=e=>Hr(e).slice(8,-1),Pc=e=>Hr(e)==="[object Object]",Ca=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hr=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kp=/-(\w)/g,Vt=Vr(e=>e.replace(kp,(t,n)=>n?n.toUpperCase():"")),bp=/\B([A-Z])/g,Mn=Vr(e=>e.replace(bp,"-$1").toLowerCase()),Ur=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ro=Vr(e=>e?`on${Ur(e)}`:""),Bs=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ro=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let vi;const xp=()=>vi||(vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pt;class Ac{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&pt&&(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=pt;try{return pt=this,t()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function wp(e){return new Ac(e)}function Cp(e,t=pt){t&&t.active&&t.effects.push(e)}function jc(){return pt}function Mc(e){pt&&pt.cleanups.push(e)}const Ta=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ic=e=>(e.w&dn)>0,Lc=e=>(e.n&dn)>0,Tp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dn},Sp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Ic(o)&&!Lc(o)?o.delete(e):t[n++]=o,o.w&=~dn,o.n&=~dn}t.length=n}},Po=new WeakMap;let Ts=0,dn=1;const Ao=30;let Tt;const En=Symbol(""),jo=Symbol("");class Sa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cp(this,r)}run(){if(!this.active)return this.fn();let t=Tt,n=on;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Tt,Tt=this,on=!0,dn=1<<++Ts,Ts<=Ao?Tp(this):yi(this),this.fn()}finally{Ts<=Ao&&Sp(this),dn=1<<--Ts,Tt=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(yi(this),this.onStop&&this.onStop(),this.active=!1)}}function yi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let on=!0;const Fc=[];function us(){Fc.push(on),on=!1}function ds(){const e=Fc.pop();on=e===void 0?!0:e}function vt(e,t,n){if(on&&Tt){let r=Po.get(e);r||Po.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Ta()),Nc(o)}}function Nc(e,t){let n=!1;Ts<=Ao?Lc(e)||(e.n|=dn,n=!Ic(e)):n=!e.has(Tt),n&&(e.add(Tt),Tt.deps.push(e))}function Yt(e,t,n,r,o,a){const i=Po.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&re(e))i.forEach((u,d)=>{(d==="length"||d>=r)&&l.push(u)});else switch(n!==void 0&&l.push(i.get(n)),t){case"add":re(e)?Ca(n)&&l.push(i.get("length")):(l.push(i.get(En)),Qn(e)&&l.push(i.get(jo)));break;case"delete":re(e)||(l.push(i.get(En)),Qn(e)&&l.push(i.get(jo)));break;case"set":Qn(e)&&l.push(i.get(En));break}if(l.length===1)l[0]&&Mo(l[0]);else{const u=[];for(const d of l)d&&u.push(...d);Mo(Ta(u))}}function Mo(e,t){const n=re(e)?e:[...e];for(const r of n)r.computed&&ki(r);for(const r of n)r.computed||ki(r)}function ki(e,t){(e!==Tt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const $p=Br("__proto__,__v_isRef,__isVue"),Bc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wa)),Ep=$a(),Op=$a(!1,!0),Rp=$a(!0),bi=Pp();function Pp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Te(this);for(let a=0,i=this.length;a<i;a++)vt(r,"get",a+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(Te)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){us();const r=Te(this)[t].apply(this,n);return ds(),r}}),e}function $a(e=!1,t=!1){return function(r,o,a){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&a===(e?t?Wp:Gc:t?Uc:Vc).get(r))return r;const i=re(r);if(!e&&i&&ke(bi,o))return Reflect.get(bi,o,a);const l=Reflect.get(r,o,a);return(wa(o)?Bc.has(o):$p(o))||(e||vt(r,"get",o),t)?l:Se(l)?i&&Ca(o)?l:l.value:Ne(l)?e?Kn(l):Fe(l):l}}const Ap=Dc(),jp=Dc(!0);function Dc(e=!1){return function(n,r,o,a){let i=n[r];if(rs(i)&&Se(i)&&!Se(o))return!1;if(!e&&(!Cr(o)&&!rs(o)&&(i=Te(i),o=Te(o)),!re(n)&&Se(i)&&!Se(o)))return i.value=o,!0;const l=re(n)&&Ca(r)?Number(r)<n.length:ke(n,r),u=Reflect.set(n,r,o,a);return n===Te(a)&&(l?Bs(o,i)&&Yt(n,"set",r,o):Yt(n,"add",r,o)),u}}function Mp(e,t){const n=ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Yt(e,"delete",t,void 0),r}function Ip(e,t){const n=Reflect.has(e,t);return(!wa(t)||!Bc.has(t))&&vt(e,"has",t),n}function Lp(e){return vt(e,"iterate",re(e)?"length":En),Reflect.ownKeys(e)}const Hc={get:Ep,set:Ap,deleteProperty:Mp,has:Ip,ownKeys:Lp},Fp={get:Rp,set(e,t){return!0},deleteProperty(e,t){return!0}},Np=it({},Hc,{get:Op,set:jp}),Ea=e=>e,Gr=e=>Reflect.getPrototypeOf(e);function or(e,t,n=!1,r=!1){e=e.__v_raw;const o=Te(e),a=Te(t);n||(t!==a&&vt(o,"get",t),vt(o,"get",a));const{has:i}=Gr(o),l=r?Ea:n?Pa:Ds;if(i.call(o,t))return l(e.get(t));if(i.call(o,a))return l(e.get(a));e!==o&&e.get(t)}function ar(e,t=!1){const n=this.__v_raw,r=Te(n),o=Te(e);return t||(e!==o&&vt(r,"has",e),vt(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ir(e,t=!1){return e=e.__v_raw,!t&&vt(Te(e),"iterate",En),Reflect.get(e,"size",e)}function xi(e){e=Te(e);const t=Te(this);return Gr(t).has.call(t,e)||(t.add(e),Yt(t,"add",e,e)),this}function wi(e,t){t=Te(t);const n=Te(this),{has:r,get:o}=Gr(n);let a=r.call(n,e);a||(e=Te(e),a=r.call(n,e));const i=o.call(n,e);return n.set(e,t),a?Bs(t,i)&&Yt(n,"set",e,t):Yt(n,"add",e,t),this}function Ci(e){const t=Te(this),{has:n,get:r}=Gr(t);let o=n.call(t,e);o||(e=Te(e),o=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return o&&Yt(t,"delete",e,void 0),a}function Ti(){const e=Te(this),t=e.size!==0,n=e.clear();return t&&Yt(e,"clear",void 0,void 0),n}function lr(e,t){return function(r,o){const a=this,i=a.__v_raw,l=Te(i),u=t?Ea:e?Pa:Ds;return!e&&vt(l,"iterate",En),i.forEach((d,p)=>r.call(o,u(d),u(p),a))}}function cr(e,t,n){return function(...r){const o=this.__v_raw,a=Te(o),i=Qn(a),l=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,d=o[e](...r),p=n?Ea:t?Pa:Ds;return!t&&vt(a,"iterate",u?jo:En),{next(){const{value:f,done:m}=d.next();return m?{value:f,done:m}:{value:l?[p(f[0]),p(f[1])]:p(f),done:m}},[Symbol.iterator](){return this}}}}function en(e){return function(...t){return e==="delete"?!1:this}}function Bp(){const e={get(a){return or(this,a)},get size(){return ir(this)},has:ar,add:xi,set:wi,delete:Ci,clear:Ti,forEach:lr(!1,!1)},t={get(a){return or(this,a,!1,!0)},get size(){return ir(this)},has:ar,add:xi,set:wi,delete:Ci,clear:Ti,forEach:lr(!1,!0)},n={get(a){return or(this,a,!0)},get size(){return ir(this,!0)},has(a){return ar.call(this,a,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:lr(!0,!1)},r={get(a){return or(this,a,!0,!0)},get size(){return ir(this,!0)},has(a){return ar.call(this,a,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=cr(a,!1,!1),n[a]=cr(a,!0,!1),t[a]=cr(a,!1,!0),r[a]=cr(a,!0,!0)}),[e,n,t,r]}const[Dp,Hp,Vp,Up]=Bp();function Oa(e,t){const n=t?e?Up:Vp:e?Hp:Dp;return(r,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ke(n,o)&&o in r?n:r,o,a)}const Gp={get:Oa(!1,!1)},qp={get:Oa(!1,!0)},zp={get:Oa(!0,!1)},Vc=new WeakMap,Uc=new WeakMap,Gc=new WeakMap,Wp=new WeakMap;function Kp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Kp(yp(e))}function Fe(e){return rs(e)?e:Ra(e,!1,Hc,Gp,Vc)}function Zp(e){return Ra(e,!1,Np,qp,Uc)}function Kn(e){return Ra(e,!0,Fp,zp,Gc)}function Ra(e,t,n,r,o){if(!Ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const i=Yp(e);if(i===0)return e;const l=new Proxy(e,i===2?r:n);return o.set(e,l),l}function Jn(e){return rs(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function rs(e){return!!(e&&e.__v_isReadonly)}function Cr(e){return!!(e&&e.__v_isShallow)}function qc(e){return Jn(e)||rs(e)}function Te(e){const t=e&&e.__v_raw;return t?Te(t):e}function qr(e){return wr(e,"__v_skip",!0),e}const Ds=e=>Ne(e)?Fe(e):e,Pa=e=>Ne(e)?Kn(e):e;function Aa(e){on&&Tt&&(e=Te(e),Nc(e.dep||(e.dep=Ta())))}function ja(e,t){e=Te(e),e.dep&&Mo(e.dep)}function Se(e){return!!(e&&e.__v_isRef===!0)}function D(e){return zc(e,!1)}function Ut(e){return zc(e,!0)}function zc(e,t){return Se(e)?e:new Qp(e,t)}class Qp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Te(t),this._value=n?t:Ds(t)}get value(){return Aa(this),this._value}set value(t){const n=this.__v_isShallow||Cr(t)||rs(t);t=n?t:Te(t),Bs(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ds(t),ja(this))}}function w(e){return Se(e)?e.value:e}const Xp={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Se(o)&&!Se(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Wc(e){return Jn(e)?e:new Proxy(e,Xp)}class Jp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Aa(this),()=>ja(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Kc(e){return new Jp(e)}function ef(e){const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=nf(e,n);return t}class tf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function nf(e,t,n){const r=e[t];return Se(r)?r:new tf(e,t,n)}var Yc;class sf{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yc]=!1,this._dirty=!0,this.effect=new Sa(t,()=>{this._dirty||(this._dirty=!0,ja(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=Te(this);return Aa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yc="__v_isReadonly";function rf(e,t,n=!1){let r,o;const a=de(e);return a?(r=e,o=Ot):(r=e.get,o=e.set),new sf(r,o,a||!o,n)}function an(e,t,n,r){let o;try{o=r?e(...r):e()}catch(a){zr(a,t,n)}return o}function Rt(e,t,n,r){if(de(e)){const a=an(e,t,n,r);return a&&Oc(a)&&a.catch(i=>{zr(i,t,n)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(Rt(e[a],t,n,r));return o}function zr(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let a=t.parent;const i=t.proxy,l=n;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,i,l)===!1)return}a=a.parent}const u=t.appContext.config.errorHandler;if(u){an(u,null,10,[e,i,l]);return}}of(e,n,o,r)}function of(e,t,n,r=!0){console.error(e)}let Hs=!1,Io=!1;const Xe=[];let Nt=0;const es=[];let zt=null,kn=0;const Zc=Promise.resolve();let Ma=null;function Je(e){const t=Ma||Zc;return e?t.then(this?e.bind(this):e):t}function af(e){let t=Nt+1,n=Xe.length;for(;t<n;){const r=t+n>>>1;Vs(Xe[r])<e?t=r+1:n=r}return t}function Ia(e){(!Xe.length||!Xe.includes(e,Hs&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?Xe.push(e):Xe.splice(af(e.id),0,e),Qc())}function Qc(){!Hs&&!Io&&(Io=!0,Ma=Zc.then(Jc))}function lf(e){const t=Xe.indexOf(e);t>Nt&&Xe.splice(t,1)}function cf(e){re(e)?es.push(...e):(!zt||!zt.includes(e,e.allowRecurse?kn+1:kn))&&es.push(e),Qc()}function Si(e,t=Hs?Nt+1:0){for(;t<Xe.length;t++){const n=Xe[t];n&&n.pre&&(Xe.splice(t,1),t--,n())}}function Xc(e){if(es.length){const t=[...new Set(es)];if(es.length=0,zt){zt.push(...t);return}for(zt=t,zt.sort((n,r)=>Vs(n)-Vs(r)),kn=0;kn<zt.length;kn++)zt[kn]();zt=null,kn=0}}const Vs=e=>e.id==null?1/0:e.id,uf=(e,t)=>{const n=Vs(e)-Vs(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Jc(e){Io=!1,Hs=!0,Xe.sort(uf);const t=Ot;try{for(Nt=0;Nt<Xe.length;Nt++){const n=Xe[Nt];n&&n.active!==!1&&an(n,null,14)}}finally{Nt=0,Xe.length=0,Xc(),Hs=!1,Ma=null,(Xe.length||es.length)&&Jc()}}function df(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ae;let o=n;const a=t.startsWith("update:"),i=a&&t.slice(7);if(i&&i in r){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:m}=r[p]||Ae;m&&(o=n.map(g=>g.trim())),f&&(o=n.map(Ro))}let l,u=r[l=ro(t)]||r[l=ro(Vt(t))];!u&&a&&(u=r[l=ro(Mn(t))]),u&&Rt(u,e,6,o);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Rt(d,e,6,o)}}function eu(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const a=e.emits;let i={},l=!1;if(!de(e)){const u=d=>{const p=eu(d,t,!0);p&&(l=!0,it(i,p))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!a&&!l?(Ne(e)&&r.set(e,null),null):(re(a)?a.forEach(u=>i[u]=null):it(i,a),Ne(e)&&r.set(e,i),i)}function Wr(e,t){return!e||!Dr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ke(e,t[0].toLowerCase()+t.slice(1))||ke(e,Mn(t))||ke(e,t))}let et=null,Kr=null;function Tr(e){const t=et;return et=e,Kr=e&&e.type.__scopeId||null,t}function pf(e){Kr=e}function ff(){Kr=null}function A(e,t=et,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Fi(-1);const a=Tr(t),i=e(...o);return Tr(a),r._d&&Fi(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function oo(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:a,propsOptions:[i],slots:l,attrs:u,emit:d,render:p,renderCache:f,data:m,setupState:g,ctx:h,inheritAttrs:y}=e;let k,b;const S=Tr(e);try{if(n.shapeFlag&4){const E=o||r;k=Ft(p.call(E,E,f,a,g,m,h)),b=u}else{const E=t;k=Ft(E.length>1?E(a,{attrs:u,slots:l,emit:d}):E(a,null)),b=t.props?u:mf(u)}}catch(E){Es.length=0,zr(E,e,1),k=x(pn)}let T=k;if(b&&y!==!1){const E=Object.keys(b),{shapeFlag:L}=T;E.length&&L&7&&(i&&E.some(ba)&&(b=hf(b,i)),T=jn(T,b))}return n.dirs&&(T=jn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),k=T,Tr(S),k}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Dr(n))&&((t||(t={}))[n]=e[n]);return t},hf=(e,t)=>{const n={};for(const r in e)(!ba(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gf(e,t,n){const{props:r,children:o,component:a}=e,{props:i,children:l,patchFlag:u}=t,d=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?$i(r,i,d):!!i;if(u&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const m=p[f];if(i[m]!==r[m]&&!Wr(d,m))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?$i(r,i,d):!0:!!i;return!1}function $i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const a=r[o];if(t[a]!==e[a]&&!Wr(n,a))return!0}return!1}function _f({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const tu=e=>e.__isSuspense;function vf(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):cf(e)}function mt(e,t){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[e]=t}}function I(e,t,n=!1){const r=Ye||et;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&de(t)?t.call(r.proxy):t}}function ps(e,t){return La(e,null,t)}const Ei={};function he(e,t,n){return La(e,t,n)}function La(e,t,{immediate:n,deep:r,flush:o,onTrack:a,onTrigger:i}=Ae){const l=Ye;let u,d=!1,p=!1;if(Se(e)?(u=()=>e.value,d=Cr(e)):Jn(e)?(u=()=>e,r=!0):re(e)?(p=!0,d=e.some(b=>Jn(b)||Cr(b)),u=()=>e.map(b=>{if(Se(b))return b.value;if(Jn(b))return Cn(b);if(de(b))return an(b,l,2)})):de(e)?t?u=()=>an(e,l,2):u=()=>{if(!(l&&l.isUnmounted))return f&&f(),Rt(e,l,3,[m])}:u=Ot,t&&r){const b=u;u=()=>Cn(b())}let f,m=b=>{f=k.onStop=()=>{an(b,l,4)}};if(Gs)return m=Ot,t?n&&Rt(t,l,3,[u(),p?[]:void 0,m]):u(),Ot;let g=p?[]:Ei;const h=()=>{if(!!k.active)if(t){const b=k.run();(r||d||(p?b.some((S,T)=>Bs(S,g[T])):Bs(b,g)))&&(f&&f(),Rt(t,l,3,[b,g===Ei?void 0:g,m]),g=b)}else k.run()};h.allowRecurse=!!t;let y;o==="sync"?y=h:o==="post"?y=()=>Ze(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),y=()=>Ia(h));const k=new Sa(u,y);return t?n?h():g=k.run():o==="post"?Ze(k.run.bind(k),l&&l.suspense):k.run(),()=>{k.stop(),l&&l.scope&&xa(l.scope.effects,k)}}function yf(e,t,n){const r=this.proxy,o=He(e)?e.includes(".")?nu(r,e):()=>r[e]:e.bind(r,r);let a;de(t)?a=t:(a=t.handler,n=t);const i=Ye;as(this);const l=La(o,a.bind(r),n);return i?as(i):On(),l}function nu(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Cn(e,t){if(!Ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))Cn(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)Cn(e[n],t);else if(Ec(e)||Qn(e))e.forEach(n=>{Cn(n,t)});else if(Pc(e))for(const n in e)Cn(e[n],t);return e}function su(e,t){e.shapeFlag&6&&e.component?su(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Oe(e){return de(e)?{setup:e,name:e.name}:e}const ts=e=>!!e.type.__asyncLoader,ru=e=>e.type.__isKeepAlive,kf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Fn(),r=n.ctx;if(!r.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const o=new Map,a=new Set;let i=null;const l=n.suspense,{renderer:{p:u,m:d,um:p,o:{createElement:f}}}=r,m=f("div");r.activate=(S,T,E,L,F)=>{const H=S.component;d(S,T,E,0,l),u(H.vnode,S,T,E,H,l,L,S.slotScopeIds,F),Ze(()=>{H.isDeactivated=!1,H.a&&Xn(H.a);const J=S.props&&S.props.onVnodeMounted;J&&yt(J,H.parent,S)},l)},r.deactivate=S=>{const T=S.component;d(S,m,null,1,l),Ze(()=>{T.da&&Xn(T.da);const E=S.props&&S.props.onVnodeUnmounted;E&&yt(E,T.parent,S),T.isDeactivated=!0},l)};function g(S){ao(S),p(S,n,l,!0)}function h(S){o.forEach((T,E)=>{const L=Vo(T.type);L&&(!S||!S(L))&&y(E)})}function y(S){const T=o.get(S);!i||T.type!==i.type?g(T):i&&ao(i),o.delete(S),a.delete(S)}he(()=>[e.include,e.exclude],([S,T])=>{S&&h(E=>Ss(S,E)),T&&h(E=>!Ss(T,E))},{flush:"post",deep:!0});let k=null;const b=()=>{k!=null&&o.set(k,io(n.subTree))};return In(b),Fa(b),Zr(()=>{o.forEach(S=>{const{subTree:T,suspense:E}=n,L=io(T);if(S.type===L.type){ao(L);const F=L.component.da;F&&Ze(F,E);return}g(S)})}),()=>{if(k=null,!t.default)return null;const S=t.default(),T=S[0];if(S.length>1)return i=null,S;if(!os(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return i=null,T;let E=io(T);const L=E.type,F=Vo(ts(E)?E.type.__asyncResolved||{}:L),{include:H,exclude:J,max:me}=e;if(H&&(!F||!Ss(H,F))||J&&F&&Ss(J,F))return i=E,T;const ge=E.key==null?L:E.key,be=o.get(ge);return E.el&&(E=jn(E),T.shapeFlag&128&&(T.ssContent=E)),k=ge,be?(E.el=be.el,E.component=be.component,E.transition&&su(E,E.transition),E.shapeFlag|=512,a.delete(ge),a.add(ge)):(a.add(ge),me&&a.size>parseInt(me,10)&&y(a.values().next().value)),E.shapeFlag|=256,i=E,tu(T.type)?T:E}}},ou=kf;function Ss(e,t){return re(e)?e.some(n=>Ss(n,t)):He(e)?e.split(",").includes(t):e.test?e.test(t):!1}function bf(e,t){au(e,"a",t)}function xf(e,t){au(e,"da",t)}function au(e,t,n=Ye){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Yr(t,r,n),n){let o=n.parent;for(;o&&o.parent;)ru(o.parent.vnode)&&wf(r,t,n,o),o=o.parent}}function wf(e,t,n,r){const o=Yr(t,e,r,!0);Qr(()=>{xa(r[t],o)},n)}function ao(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function io(e){return e.shapeFlag&128?e.ssContent:e}function Yr(e,t,n=Ye,r=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;us(),as(n);const l=Rt(t,n,e,i);return On(),ds(),l});return r?o.unshift(a):o.push(a),a}}const Qt=e=>(t,n=Ye)=>(!Gs||e==="sp")&&Yr(e,(...r)=>t(...r),n),Cf=Qt("bm"),In=Qt("m"),Tf=Qt("bu"),Fa=Qt("u"),Zr=Qt("bum"),Qr=Qt("um"),Sf=Qt("sp"),$f=Qt("rtg"),Ef=Qt("rtc");function Of(e,t=Ye){Yr("ec",e,t)}function Na(e,t){const n=et;if(n===null)return e;const r=Jr(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,l,u,d=Ae]=t[a];de(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(l),o.push({dir:i,instance:r,value:l,oldValue:void 0,arg:u,modifiers:d})}return e}function mn(e,t,n,r){const o=e.dirs,a=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let u=l.dir[r];u&&(us(),Rt(u,n,8,[e.el,l,e,t]),ds())}}const iu="components";function Sr(e,t){return Pf(iu,e,!0,t)||e}const Rf=Symbol();function Pf(e,t,n=!0,r=!1){const o=et||Ye;if(o){const a=o.type;if(e===iu){const l=Vo(a,!1);if(l&&(l===t||l===Vt(t)||l===Ur(Vt(t))))return a}const i=Oi(o[e]||a[e],t)||Oi(o.appContext[e],t);return!i&&r?a:i}}function Oi(e,t){return e&&(e[t]||e[Vt(t)]||e[Ur(Vt(t))])}function Ln(e,t,n,r){let o;const a=n&&n[r];if(re(e)||He(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,a&&a[i])}else if(Ne(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,a&&a[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,u=i.length;l<u;l++){const d=i[l];o[l]=t(e[d],d,l,a&&a[l])}}else o=[];return n&&(n[r]=o),o}function At(e,t,n={},r,o){if(et.isCE||et.parent&&ts(et.parent)&&et.parent.isCE)return x("slot",t==="default"?null:{name:t},r&&r());let a=e[t];a&&a._c&&(a._d=!1),C();const i=a&&lu(a(n)),l=z(we,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),a&&a._c&&(a._d=!0),l}function lu(e){return e.some(t=>os(t)?!(t.type===pn||t.type===we&&!lu(t.children)):!0)?e:null}const Lo=e=>e?vu(e)?Jr(e)||e.proxy:Lo(e.parent):null,$r=it(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$emit:e=>e.emit,$options:e=>Ba(e),$forceUpdate:e=>e.f||(e.f=()=>Ia(e.update)),$nextTick:e=>e.n||(e.n=Je.bind(e.proxy)),$watch:e=>yf.bind(e)}),Af={get({_:e},t){const{ctx:n,setupState:r,data:o,props:a,accessCache:i,type:l,appContext:u}=e;let d;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(r!==Ae&&ke(r,t))return i[t]=1,r[t];if(o!==Ae&&ke(o,t))return i[t]=2,o[t];if((d=e.propsOptions[0])&&ke(d,t))return i[t]=3,a[t];if(n!==Ae&&ke(n,t))return i[t]=4,n[t];Fo&&(i[t]=0)}}const p=$r[t];let f,m;if(p)return t==="$attrs"&&vt(e,"get",t),p(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==Ae&&ke(n,t))return i[t]=4,n[t];if(m=u.config.globalProperties,ke(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:a}=e;return o!==Ae&&ke(o,t)?(o[t]=n,!0):r!==Ae&&ke(r,t)?(r[t]=n,!0):ke(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:a}},i){let l;return!!n[i]||e!==Ae&&ke(e,i)||t!==Ae&&ke(t,i)||(l=a[0])&&ke(l,i)||ke(r,i)||ke($r,i)||ke(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ke(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Fo=!0;function jf(e){const t=Ba(e),n=e.proxy,r=e.ctx;Fo=!1,t.beforeCreate&&Ri(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:l,provide:u,inject:d,created:p,beforeMount:f,mounted:m,beforeUpdate:g,updated:h,activated:y,deactivated:k,beforeDestroy:b,beforeUnmount:S,destroyed:T,unmounted:E,render:L,renderTracked:F,renderTriggered:H,errorCaptured:J,serverPrefetch:me,expose:ge,inheritAttrs:be,components:Ke,directives:Ge,filters:Be}=t;if(d&&Mf(d,r,null,e.appContext.config.unwrapInjectedRef),i)for(const Y in i){const se=i[Y];de(se)&&(r[Y]=se.bind(n))}if(o){const Y=o.call(n,n);Ne(Y)&&(e.data=Fe(Y))}if(Fo=!0,a)for(const Y in a){const se=a[Y],_e=de(se)?se.bind(n,n):de(se.get)?se.get.bind(n,n):Ot,$e=!de(se)&&de(se.set)?se.set.bind(n):Ot,st=R({get:_e,set:$e});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ve=>st.value=Ve})}if(l)for(const Y in l)cu(l[Y],r,n,Y);if(u){const Y=de(u)?u.call(n):u;Reflect.ownKeys(Y).forEach(se=>{mt(se,Y[se])})}p&&Ri(p,e,"c");function Le(Y,se){re(se)?se.forEach(_e=>Y(_e.bind(n))):se&&Y(se.bind(n))}if(Le(Cf,f),Le(In,m),Le(Tf,g),Le(Fa,h),Le(bf,y),Le(xf,k),Le(Of,J),Le(Ef,F),Le($f,H),Le(Zr,S),Le(Qr,E),Le(Sf,me),re(ge))if(ge.length){const Y=e.exposed||(e.exposed={});ge.forEach(se=>{Object.defineProperty(Y,se,{get:()=>n[se],set:_e=>n[se]=_e})})}else e.exposed||(e.exposed={});L&&e.render===Ot&&(e.render=L),be!=null&&(e.inheritAttrs=be),Ke&&(e.components=Ke),Ge&&(e.directives=Ge)}function Mf(e,t,n=Ot,r=!1){re(e)&&(e=No(e));for(const o in e){const a=e[o];let i;Ne(a)?"default"in a?i=I(a.from||o,a.default,!0):i=I(a.from||o):i=I(a),Se(i)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[o]=i}}function Ri(e,t,n){Rt(re(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function cu(e,t,n,r){const o=r.includes(".")?nu(n,r):()=>n[r];if(He(e)){const a=t[e];de(a)&&he(o,a)}else if(de(e))he(o,e.bind(n));else if(Ne(e))if(re(e))e.forEach(a=>cu(a,t,n,r));else{const a=de(e.handler)?e.handler.bind(n):t[e.handler];de(a)&&he(o,a,e)}}function Ba(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(t);let u;return l?u=l:!o.length&&!n&&!r?u=t:(u={},o.length&&o.forEach(d=>Er(u,d,i,!0)),Er(u,t,i)),Ne(t)&&a.set(t,u),u}function Er(e,t,n,r=!1){const{mixins:o,extends:a}=t;a&&Er(e,a,n,!0),o&&o.forEach(i=>Er(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const l=If[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const If={data:Pi,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:vn,directives:vn,watch:Ff,provide:Pi,inject:Lf};function Pi(e,t){return t?e?function(){return it(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function Lf(e,t){return vn(No(e),No(t))}function No(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rt(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?it(it(Object.create(null),e),t):t}function Ff(e,t){if(!e)return t;if(!t)return e;const n=it(Object.create(null),e);for(const r in t)n[r]=rt(e[r],t[r]);return n}function Nf(e,t,n,r=!1){const o={},a={};wr(a,Xr,1),e.propsDefaults=Object.create(null),uu(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Zp(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Bf(e,t,n,r){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,l=Te(o),[u]=e.propsOptions;let d=!1;if((r||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let m=p[f];if(Wr(e.emitsOptions,m))continue;const g=t[m];if(u)if(ke(a,m))g!==a[m]&&(a[m]=g,d=!0);else{const h=Vt(m);o[h]=Bo(u,l,h,g,e,!1)}else g!==a[m]&&(a[m]=g,d=!0)}}}else{uu(e,t,o,a)&&(d=!0);let p;for(const f in l)(!t||!ke(t,f)&&((p=Mn(f))===f||!ke(t,p)))&&(u?n&&(n[f]!==void 0||n[p]!==void 0)&&(o[f]=Bo(u,l,f,void 0,e,!0)):delete o[f]);if(a!==l)for(const f in a)(!t||!ke(t,f)&&!0)&&(delete a[f],d=!0)}d&&Yt(e,"set","$attrs")}function uu(e,t,n,r){const[o,a]=e.propsOptions;let i=!1,l;if(t)for(let u in t){if(hr(u))continue;const d=t[u];let p;o&&ke(o,p=Vt(u))?!a||!a.includes(p)?n[p]=d:(l||(l={}))[p]=d:Wr(e.emitsOptions,u)||(!(u in r)||d!==r[u])&&(r[u]=d,i=!0)}if(a){const u=Te(n),d=l||Ae;for(let p=0;p<a.length;p++){const f=a[p];n[f]=Bo(o,u,f,d[f],e,!ke(d,f))}}return i}function Bo(e,t,n,r,o,a){const i=e[n];if(i!=null){const l=ke(i,"default");if(l&&r===void 0){const u=i.default;if(i.type!==Function&&de(u)){const{propsDefaults:d}=o;n in d?r=d[n]:(as(o),r=d[n]=u.call(null,t),On())}else r=u}i[0]&&(a&&!l?r=!1:i[1]&&(r===""||r===Mn(n))&&(r=!0))}return r}function du(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const a=e.props,i={},l=[];let u=!1;if(!de(e)){const p=f=>{u=!0;const[m,g]=du(f,t,!0);it(i,m),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!u)return Ne(e)&&r.set(e,Zn),Zn;if(re(a))for(let p=0;p<a.length;p++){const f=Vt(a[p]);Ai(f)&&(i[f]=Ae)}else if(a)for(const p in a){const f=Vt(p);if(Ai(f)){const m=a[p],g=i[f]=re(m)||de(m)?{type:m}:m;if(g){const h=Ii(Boolean,g.type),y=Ii(String,g.type);g[0]=h>-1,g[1]=y<0||h<y,(h>-1||ke(g,"default"))&&l.push(f)}}}const d=[i,l];return Ne(e)&&r.set(e,d),d}function Ai(e){return e[0]!=="$"}function ji(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Mi(e,t){return ji(e)===ji(t)}function Ii(e,t){return re(t)?t.findIndex(n=>Mi(n,e)):de(t)&&Mi(t,e)?0:-1}const pu=e=>e[0]==="_"||e==="$stable",Da=e=>re(e)?e.map(Ft):[Ft(e)],Df=(e,t,n)=>{if(t._n)return t;const r=A((...o)=>Da(t(...o)),n);return r._c=!1,r},fu=(e,t,n)=>{const r=e._ctx;for(const o in e){if(pu(o))continue;const a=e[o];if(de(a))t[o]=Df(o,a,r);else if(a!=null){const i=Da(a);t[o]=()=>i}}},mu=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Hf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Te(t),wr(t,"_",n)):fu(t,e.slots={})}else e.slots={},t&&mu(e,t);wr(e.slots,Xr,1)},Vf=(e,t,n)=>{const{vnode:r,slots:o}=e;let a=!0,i=Ae;if(r.shapeFlag&32){const l=t._;l?n&&l===1?a=!1:(it(o,t),!n&&l===1&&delete o._):(a=!t.$stable,fu(t,o)),i=t}else t&&(mu(e,t),i={default:1});if(a)for(const l in o)!pu(l)&&!(l in i)&&delete o[l]};function hu(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Gf(e,t){return function(r,o=null){de(r)||(r=Object.assign({},r)),o!=null&&!Ne(o)&&(o=null);const a=hu(),i=new Set;let l=!1;const u=a.app={_uid:Uf++,_component:r,_props:o,_container:null,_context:a,_instance:null,version:um,get config(){return a.config},set config(d){},use(d,...p){return i.has(d)||(d&&de(d.install)?(i.add(d),d.install(u,...p)):de(d)&&(i.add(d),d(u,...p))),u},mixin(d){return a.mixins.includes(d)||a.mixins.push(d),u},component(d,p){return p?(a.components[d]=p,u):a.components[d]},directive(d,p){return p?(a.directives[d]=p,u):a.directives[d]},mount(d,p,f){if(!l){const m=x(r,o);return m.appContext=a,p&&t?t(m,d):e(m,d,f),l=!0,u._container=d,d.__vue_app__=u,Jr(m.component)||m.component.proxy}},unmount(){l&&(e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return a.provides[d]=p,u}};return u}}function Do(e,t,n,r,o=!1){if(re(e)){e.forEach((m,g)=>Do(m,t&&(re(t)?t[g]:t),n,r,o));return}if(ts(r)&&!o)return;const a=r.shapeFlag&4?Jr(r.component)||r.component.proxy:r.el,i=o?null:a,{i:l,r:u}=e,d=t&&t.r,p=l.refs===Ae?l.refs={}:l.refs,f=l.setupState;if(d!=null&&d!==u&&(He(d)?(p[d]=null,ke(f,d)&&(f[d]=null)):Se(d)&&(d.value=null)),de(u))an(u,l,12,[i,p]);else{const m=He(u),g=Se(u);if(m||g){const h=()=>{if(e.f){const y=m?p[u]:u.value;o?re(y)&&xa(y,a):re(y)?y.includes(a)||y.push(a):m?(p[u]=[a],ke(f,u)&&(f[u]=p[u])):(u.value=[a],e.k&&(p[e.k]=u.value))}else m?(p[u]=i,ke(f,u)&&(f[u]=i)):g&&(u.value=i,e.k&&(p[e.k]=i))};i?(h.id=-1,Ze(h,n)):h()}}}const Ze=vf;function qf(e){return zf(e)}function zf(e,t){const n=xp();n.__VUE__=!0;const{insert:r,remove:o,patchProp:a,createElement:i,createText:l,createComment:u,setText:d,setElementText:p,parentNode:f,nextSibling:m,setScopeId:g=Ot,insertStaticContent:h}=e,y=(_,v,$,O=null,j=null,B=null,K=!1,N=null,V=!!v.dynamicChildren)=>{if(_===v)return;_&&!_s(_,v)&&(O=q(_),Ve(_,j,B,!0),_=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:Z}=v;switch(M){case Va:k(_,v,$,O);break;case pn:b(_,v,$,O);break;case gr:_==null&&S(v,$,O,K);break;case we:Ke(_,v,$,O,j,B,K,N,V);break;default:Z&1?L(_,v,$,O,j,B,K,N,V):Z&6?Ge(_,v,$,O,j,B,K,N,V):(Z&64||Z&128)&&M.process(_,v,$,O,j,B,K,N,V,ve)}ee!=null&&j&&Do(ee,_&&_.ref,B,v||_,!v)},k=(_,v,$,O)=>{if(_==null)r(v.el=l(v.children),$,O);else{const j=v.el=_.el;v.children!==_.children&&d(j,v.children)}},b=(_,v,$,O)=>{_==null?r(v.el=u(v.children||""),$,O):v.el=_.el},S=(_,v,$,O)=>{[_.el,_.anchor]=h(_.children,v,$,O,_.el,_.anchor)},T=({el:_,anchor:v},$,O)=>{let j;for(;_&&_!==v;)j=m(_),r(_,$,O),_=j;r(v,$,O)},E=({el:_,anchor:v})=>{let $;for(;_&&_!==v;)$=m(_),o(_),_=$;o(v)},L=(_,v,$,O,j,B,K,N,V)=>{K=K||v.type==="svg",_==null?F(v,$,O,j,B,K,N,V):me(_,v,j,B,K,N,V)},F=(_,v,$,O,j,B,K,N)=>{let V,M;const{type:ee,props:Z,shapeFlag:te,transition:ae,dirs:ye}=_;if(V=_.el=i(_.type,B,Z&&Z.is,Z),te&8?p(V,_.children):te&16&&J(_.children,V,null,O,j,B&&ee!=="foreignObject",K,N),ye&&mn(_,null,O,"created"),Z){for(const Pe in Z)Pe!=="value"&&!hr(Pe)&&a(V,Pe,null,Z[Pe],B,_.children,O,j,W);"value"in Z&&a(V,"value",null,Z.value),(M=Z.onVnodeBeforeMount)&&yt(M,O,_)}H(V,_,_.scopeId,K,O),ye&&mn(_,null,O,"beforeMount");const je=(!j||j&&!j.pendingBranch)&&ae&&!ae.persisted;je&&ae.beforeEnter(V),r(V,v,$),((M=Z&&Z.onVnodeMounted)||je||ye)&&Ze(()=>{M&&yt(M,O,_),je&&ae.enter(V),ye&&mn(_,null,O,"mounted")},j)},H=(_,v,$,O,j)=>{if($&&g(_,$),O)for(let B=0;B<O.length;B++)g(_,O[B]);if(j){let B=j.subTree;if(v===B){const K=j.vnode;H(_,K,K.scopeId,K.slotScopeIds,j.parent)}}},J=(_,v,$,O,j,B,K,N,V=0)=>{for(let M=V;M<_.length;M++){const ee=_[M]=N?nn(_[M]):Ft(_[M]);y(null,ee,v,$,O,j,B,K,N)}},me=(_,v,$,O,j,B,K)=>{const N=v.el=_.el;let{patchFlag:V,dynamicChildren:M,dirs:ee}=v;V|=_.patchFlag&16;const Z=_.props||Ae,te=v.props||Ae;let ae;$&&hn($,!1),(ae=te.onVnodeBeforeUpdate)&&yt(ae,$,v,_),ee&&mn(v,_,$,"beforeUpdate"),$&&hn($,!0);const ye=j&&v.type!=="foreignObject";if(M?ge(_.dynamicChildren,M,N,$,O,ye,B):K||se(_,v,N,null,$,O,ye,B,!1),V>0){if(V&16)be(N,v,Z,te,$,O,j);else if(V&2&&Z.class!==te.class&&a(N,"class",null,te.class,j),V&4&&a(N,"style",Z.style,te.style,j),V&8){const je=v.dynamicProps;for(let Pe=0;Pe<je.length;Pe++){const Ue=je[Pe],xt=Z[Ue],Hn=te[Ue];(Hn!==xt||Ue==="value")&&a(N,Ue,xt,Hn,j,_.children,$,O,W)}}V&1&&_.children!==v.children&&p(N,v.children)}else!K&&M==null&&be(N,v,Z,te,$,O,j);((ae=te.onVnodeUpdated)||ee)&&Ze(()=>{ae&&yt(ae,$,v,_),ee&&mn(v,_,$,"updated")},O)},ge=(_,v,$,O,j,B,K)=>{for(let N=0;N<v.length;N++){const V=_[N],M=v[N],ee=V.el&&(V.type===we||!_s(V,M)||V.shapeFlag&70)?f(V.el):$;y(V,M,ee,null,O,j,B,K,!0)}},be=(_,v,$,O,j,B,K)=>{if($!==O){if($!==Ae)for(const N in $)!hr(N)&&!(N in O)&&a(_,N,$[N],null,K,v.children,j,B,W);for(const N in O){if(hr(N))continue;const V=O[N],M=$[N];V!==M&&N!=="value"&&a(_,N,M,V,K,v.children,j,B,W)}"value"in O&&a(_,"value",$.value,O.value)}},Ke=(_,v,$,O,j,B,K,N,V)=>{const M=v.el=_?_.el:l(""),ee=v.anchor=_?_.anchor:l("");let{patchFlag:Z,dynamicChildren:te,slotScopeIds:ae}=v;ae&&(N=N?N.concat(ae):ae),_==null?(r(M,$,O),r(ee,$,O),J(v.children,$,ee,j,B,K,N,V)):Z>0&&Z&64&&te&&_.dynamicChildren?(ge(_.dynamicChildren,te,$,j,B,K,N),(v.key!=null||j&&v===j.subTree)&&Ha(_,v,!0)):se(_,v,$,ee,j,B,K,N,V)},Ge=(_,v,$,O,j,B,K,N,V)=>{v.slotScopeIds=N,_==null?v.shapeFlag&512?j.ctx.activate(v,$,O,K,V):Be(v,$,O,j,B,K,V):Ie(_,v,V)},Be=(_,v,$,O,j,B,K)=>{const N=_.component=sm(_,O,j);if(ru(_)&&(N.ctx.renderer=ve),rm(N),N.asyncDep){if(j&&j.registerDep(N,Le),!_.el){const V=N.subTree=x(pn);b(null,V,v,$)}return}Le(N,_,v,$,j,B,K)},Ie=(_,v,$)=>{const O=v.component=_.component;if(gf(_,v,$))if(O.asyncDep&&!O.asyncResolved){Y(O,v,$);return}else O.next=v,lf(O.update),O.update();else v.el=_.el,O.vnode=v},Le=(_,v,$,O,j,B,K)=>{const N=()=>{if(_.isMounted){let{next:ee,bu:Z,u:te,parent:ae,vnode:ye}=_,je=ee,Pe;hn(_,!1),ee?(ee.el=ye.el,Y(_,ee,K)):ee=ye,Z&&Xn(Z),(Pe=ee.props&&ee.props.onVnodeBeforeUpdate)&&yt(Pe,ae,ee,ye),hn(_,!0);const Ue=oo(_),xt=_.subTree;_.subTree=Ue,y(xt,Ue,f(xt.el),q(xt),_,j,B),ee.el=Ue.el,je===null&&_f(_,Ue.el),te&&Ze(te,j),(Pe=ee.props&&ee.props.onVnodeUpdated)&&Ze(()=>yt(Pe,ae,ee,ye),j)}else{let ee;const{el:Z,props:te}=v,{bm:ae,m:ye,parent:je}=_,Pe=ts(v);if(hn(_,!1),ae&&Xn(ae),!Pe&&(ee=te&&te.onVnodeBeforeMount)&&yt(ee,je,v),hn(_,!0),Z&&le){const Ue=()=>{_.subTree=oo(_),le(Z,_.subTree,_,j,null)};Pe?v.type.__asyncLoader().then(()=>!_.isUnmounted&&Ue()):Ue()}else{const Ue=_.subTree=oo(_);y(null,Ue,$,O,_,j,B),v.el=Ue.el}if(ye&&Ze(ye,j),!Pe&&(ee=te&&te.onVnodeMounted)){const Ue=v;Ze(()=>yt(ee,je,Ue),j)}(v.shapeFlag&256||je&&ts(je.vnode)&&je.vnode.shapeFlag&256)&&_.a&&Ze(_.a,j),_.isMounted=!0,v=$=O=null}},V=_.effect=new Sa(N,()=>Ia(M),_.scope),M=_.update=()=>V.run();M.id=_.uid,hn(_,!0),M()},Y=(_,v,$)=>{v.component=_;const O=_.vnode.props;_.vnode=v,_.next=null,Bf(_,v.props,O,$),Vf(_,v.children,$),us(),Si(),ds()},se=(_,v,$,O,j,B,K,N,V=!1)=>{const M=_&&_.children,ee=_?_.shapeFlag:0,Z=v.children,{patchFlag:te,shapeFlag:ae}=v;if(te>0){if(te&128){$e(M,Z,$,O,j,B,K,N,V);return}else if(te&256){_e(M,Z,$,O,j,B,K,N,V);return}}ae&8?(ee&16&&W(M,j,B),Z!==M&&p($,Z)):ee&16?ae&16?$e(M,Z,$,O,j,B,K,N,V):W(M,j,B,!0):(ee&8&&p($,""),ae&16&&J(Z,$,O,j,B,K,N,V))},_e=(_,v,$,O,j,B,K,N,V)=>{_=_||Zn,v=v||Zn;const M=_.length,ee=v.length,Z=Math.min(M,ee);let te;for(te=0;te<Z;te++){const ae=v[te]=V?nn(v[te]):Ft(v[te]);y(_[te],ae,$,null,j,B,K,N,V)}M>ee?W(_,j,B,!0,!1,Z):J(v,$,O,j,B,K,N,V,Z)},$e=(_,v,$,O,j,B,K,N,V)=>{let M=0;const ee=v.length;let Z=_.length-1,te=ee-1;for(;M<=Z&&M<=te;){const ae=_[M],ye=v[M]=V?nn(v[M]):Ft(v[M]);if(_s(ae,ye))y(ae,ye,$,null,j,B,K,N,V);else break;M++}for(;M<=Z&&M<=te;){const ae=_[Z],ye=v[te]=V?nn(v[te]):Ft(v[te]);if(_s(ae,ye))y(ae,ye,$,null,j,B,K,N,V);else break;Z--,te--}if(M>Z){if(M<=te){const ae=te+1,ye=ae<ee?v[ae].el:O;for(;M<=te;)y(null,v[M]=V?nn(v[M]):Ft(v[M]),$,ye,j,B,K,N,V),M++}}else if(M>te)for(;M<=Z;)Ve(_[M],j,B,!0),M++;else{const ae=M,ye=M,je=new Map;for(M=ye;M<=te;M++){const ct=v[M]=V?nn(v[M]):Ft(v[M]);ct.key!=null&&je.set(ct.key,M)}let Pe,Ue=0;const xt=te-ye+1;let Hn=!1,hi=0;const gs=new Array(xt);for(M=0;M<xt;M++)gs[M]=0;for(M=ae;M<=Z;M++){const ct=_[M];if(Ue>=xt){Ve(ct,j,B,!0);continue}let Lt;if(ct.key!=null)Lt=je.get(ct.key);else for(Pe=ye;Pe<=te;Pe++)if(gs[Pe-ye]===0&&_s(ct,v[Pe])){Lt=Pe;break}Lt===void 0?Ve(ct,j,B,!0):(gs[Lt-ye]=M+1,Lt>=hi?hi=Lt:Hn=!0,y(ct,v[Lt],$,null,j,B,K,N,V),Ue++)}const gi=Hn?Wf(gs):Zn;for(Pe=gi.length-1,M=xt-1;M>=0;M--){const ct=ye+M,Lt=v[ct],_i=ct+1<ee?v[ct+1].el:O;gs[M]===0?y(null,Lt,$,_i,j,B,K,N,V):Hn&&(Pe<0||M!==gi[Pe]?st(Lt,$,_i,2):Pe--)}}},st=(_,v,$,O,j=null)=>{const{el:B,type:K,transition:N,children:V,shapeFlag:M}=_;if(M&6){st(_.component.subTree,v,$,O);return}if(M&128){_.suspense.move(v,$,O);return}if(M&64){K.move(_,v,$,ve);return}if(K===we){r(B,v,$);for(let Z=0;Z<V.length;Z++)st(V[Z],v,$,O);r(_.anchor,v,$);return}if(K===gr){T(_,v,$);return}if(O!==2&&M&1&&N)if(O===0)N.beforeEnter(B),r(B,v,$),Ze(()=>N.enter(B),j);else{const{leave:Z,delayLeave:te,afterLeave:ae}=N,ye=()=>r(B,v,$),je=()=>{Z(B,()=>{ye(),ae&&ae()})};te?te(B,ye,je):je()}else r(B,v,$)},Ve=(_,v,$,O=!1,j=!1)=>{const{type:B,props:K,ref:N,children:V,dynamicChildren:M,shapeFlag:ee,patchFlag:Z,dirs:te}=_;if(N!=null&&Do(N,null,$,_,!0),ee&256){v.ctx.deactivate(_);return}const ae=ee&1&&te,ye=!ts(_);let je;if(ye&&(je=K&&K.onVnodeBeforeUnmount)&&yt(je,v,_),ee&6)P(_.component,$,O);else{if(ee&128){_.suspense.unmount($,O);return}ae&&mn(_,null,v,"beforeUnmount"),ee&64?_.type.remove(_,v,$,j,ve,O):M&&(B!==we||Z>0&&Z&64)?W(M,v,$,!1,!0):(B===we&&Z&384||!j&&ee&16)&&W(V,v,$),O&&Jt(_)}(ye&&(je=K&&K.onVnodeUnmounted)||ae)&&Ze(()=>{je&&yt(je,v,_),ae&&mn(_,null,v,"unmounted")},$)},Jt=_=>{const{type:v,el:$,anchor:O,transition:j}=_;if(v===we){Dn($,O);return}if(v===gr){E(_);return}const B=()=>{o($),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(_.shapeFlag&1&&j&&!j.persisted){const{leave:K,delayLeave:N}=j,V=()=>K($,B);N?N(_.el,B,V):V()}else B()},Dn=(_,v)=>{let $;for(;_!==v;)$=m(_),o(_),_=$;o(v)},P=(_,v,$)=>{const{bum:O,scope:j,update:B,subTree:K,um:N}=_;O&&Xn(O),j.stop(),B&&(B.active=!1,Ve(K,_,v,$)),N&&Ze(N,v),Ze(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},W=(_,v,$,O=!1,j=!1,B=0)=>{for(let K=B;K<_.length;K++)Ve(_[K],v,$,O,j)},q=_=>_.shapeFlag&6?q(_.component.subTree):_.shapeFlag&128?_.suspense.next():m(_.anchor||_.el),Q=(_,v,$)=>{_==null?v._vnode&&Ve(v._vnode,null,null,!0):y(v._vnode||null,_,v,null,null,null,$),Si(),Xc(),v._vnode=_},ve={p:y,um:Ve,m:st,r:Jt,mt:Be,mc:J,pc:se,pbc:ge,n:q,o:e};let xe,le;return t&&([xe,le]=t(ve)),{render:Q,hydrate:xe,createApp:Gf(Q,xe)}}function hn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ha(e,t,n=!1){const r=e.children,o=t.children;if(re(r)&&re(o))for(let a=0;a<r.length;a++){const i=r[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=nn(o[a]),l.el=i.el),n||Ha(i,l))}}function Wf(e){const t=e.slice(),n=[0];let r,o,a,i,l;const u=e.length;for(r=0;r<u;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<d?a=l+1:i=l;d<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=t[i];return n}const Kf=e=>e.__isTeleport,$s=e=>e&&(e.disabled||e.disabled===""),Li=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ho=(e,t)=>{const n=e&&e.to;return He(n)?t?t(n):null:n},Yf={__isTeleport:!0,process(e,t,n,r,o,a,i,l,u,d){const{mc:p,pc:f,pbc:m,o:{insert:g,querySelector:h,createText:y,createComment:k}}=d,b=$s(t.props);let{shapeFlag:S,children:T,dynamicChildren:E}=t;if(e==null){const L=t.el=y(""),F=t.anchor=y("");g(L,n,r),g(F,n,r);const H=t.target=Ho(t.props,h),J=t.targetAnchor=y("");H&&(g(J,H),i=i||Li(H));const me=(ge,be)=>{S&16&&p(T,ge,be,o,a,i,l,u)};b?me(n,F):H&&me(H,J)}else{t.el=e.el;const L=t.anchor=e.anchor,F=t.target=e.target,H=t.targetAnchor=e.targetAnchor,J=$s(e.props),me=J?n:F,ge=J?L:H;if(i=i||Li(F),E?(m(e.dynamicChildren,E,me,o,a,i,l),Ha(e,t,!0)):u||f(e,t,me,ge,o,a,i,l,!1),b)J||ur(t,n,L,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const be=t.target=Ho(t.props,h);be&&ur(t,be,null,d,0)}else J&&ur(t,F,H,d,1)}},remove(e,t,n,r,{um:o,o:{remove:a}},i){const{shapeFlag:l,children:u,anchor:d,targetAnchor:p,target:f,props:m}=e;if(f&&a(p),(i||!$s(m))&&(a(d),l&16))for(let g=0;g<u.length;g++){const h=u[g];o(h,t,n,!0,!!h.dynamicChildren)}},move:ur,hydrate:Zf};function ur(e,t,n,{o:{insert:r},m:o},a=2){a===0&&r(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:u,children:d,props:p}=e,f=a===2;if(f&&r(i,t,n),(!f||$s(p))&&u&16)for(let m=0;m<d.length;m++)o(d[m],t,n,2);f&&r(l,t,n)}function Zf(e,t,n,r,o,a,{o:{nextSibling:i,parentNode:l,querySelector:u}},d){const p=t.target=Ho(t.props,u);if(p){const f=p._lpa||p.firstChild;if(t.shapeFlag&16)if($s(t.props))t.anchor=d(i(e),t,l(e),n,r,o,a),t.targetAnchor=f;else{t.anchor=i(e);let m=f;for(;m;)if(m=i(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}d(f,t,p,n,r,o,a)}}return t.anchor&&i(t.anchor)}const Qf=Yf,we=Symbol(void 0),Va=Symbol(void 0),pn=Symbol(void 0),gr=Symbol(void 0),Es=[];let St=null;function C(e=!1){Es.push(St=e?null:[])}function Xf(){Es.pop(),St=Es[Es.length-1]||null}let Us=1;function Fi(e){Us+=e}function gu(e){return e.dynamicChildren=Us>0?St||Zn:null,Xf(),Us>0&&St&&St.push(e),e}function U(e,t,n,r,o,a){return gu(s(e,t,n,r,o,a,!0))}function z(e,t,n,r,o){return gu(x(e,t,n,r,o,!0))}function os(e){return e?e.__v_isVNode===!0:!1}function _s(e,t){return e.type===t.type&&e.key===t.key}const Xr="__vInternal",_u=({key:e})=>e!=null?e:null,_r=({ref:e,ref_key:t,ref_for:n})=>e!=null?He(e)||Se(e)||de(e)?{i:et,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,r=0,o=null,a=e===we?0:1,i=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_u(t),ref:t&&_r(t),scopeId:Kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(Ua(u,n),a&128&&e.normalize(u)):n&&(u.shapeFlag|=He(n)?8:16),Us>0&&!i&&St&&(u.patchFlag>0||a&6)&&u.patchFlag!==32&&St.push(u),u}const x=Jf;function Jf(e,t=null,n=null,r=0,o=null,a=!1){if((!e||e===Rf)&&(e=pn),os(e)){const l=jn(e,t,!0);return n&&Ua(l,n),Us>0&&!a&&St&&(l.shapeFlag&6?St[St.indexOf(e)]=l:St.push(l)),l.patchFlag|=-2,l}if(im(e)&&(e=e.__vccOpts),t){t=oe(t);let{class:l,style:u}=t;l&&!He(l)&&(t.class=De(l)),Ne(u)&&(qc(u)&&!re(u)&&(u=it({},u)),t.style=X(u))}const i=He(e)?1:tu(e)?128:Kf(e)?64:Ne(e)?4:de(e)?2:0;return s(e,t,n,r,o,i,a,!0)}function oe(e){return e?qc(e)||Xr in e?it({},e):e:null}function jn(e,t,n=!1){const{props:r,ref:o,patchFlag:a,children:i}=e,l=t?ne(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&_u(l),ref:t&&t.ref?n&&o?re(o)?o.concat(_r(t)):[o,_r(t)]:_r(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jn(e.ssContent),ssFallback:e.ssFallback&&jn(e.ssFallback),el:e.el,anchor:e.anchor}}function c(e=" ",t=0){return x(Va,null,e,t)}function em(e,t){const n=x(gr,null,e);return n.staticCount=t,n}function ue(e="",t=!1){return t?(C(),z(pn,null,e)):x(pn,null,e)}function Ft(e){return e==null||typeof e=="boolean"?x(pn):re(e)?x(we,null,e.slice()):typeof e=="object"?nn(e):x(Va,null,String(e))}function nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jn(e)}function Ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ua(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Xr in t)?t._ctx=et:o===3&&et&&(et.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else de(t)?(t={default:t,_ctx:et},n=32):(t=String(t),r&64?(n=16,t=[c(t)]):n=8);e.children=t,e.shapeFlag|=n}function ne(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=De([t.class,r.class]));else if(o==="style")t.style=X([t.style,r.style]);else if(Dr(o)){const a=t[o],i=r[o];i&&a!==i&&!(re(a)&&a.includes(i))&&(t[o]=a?[].concat(a,i):i)}else o!==""&&(t[o]=r[o])}return t}function yt(e,t,n,r=null){Rt(e,t,7,[n,r])}const tm=hu();let nm=0;function sm(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||tm,a={uid:nm++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:du(r,o),emitsOptions:eu(r,o),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=df.bind(null,a),e.ce&&e.ce(a),a}let Ye=null;const Fn=()=>Ye||et,as=e=>{Ye=e,e.scope.on()},On=()=>{Ye&&Ye.scope.off(),Ye=null};function vu(e){return e.vnode.shapeFlag&4}let Gs=!1;function rm(e,t=!1){Gs=t;const{props:n,children:r}=e.vnode,o=vu(e);Nf(e,n,o,t),Hf(e,r);const a=o?om(e,t):void 0;return Gs=!1,a}function om(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qr(new Proxy(e.ctx,Af));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?ku(e):null;as(e),us();const a=an(r,e,0,[e.props,o]);if(ds(),On(),Oc(a)){if(a.then(On,On),t)return a.then(i=>{Ni(e,i,t)}).catch(i=>{zr(i,e,0)});e.asyncDep=a}else Ni(e,a,t)}else yu(e,t)}function Ni(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ne(t)&&(e.setupState=Wc(t)),yu(e,n)}let Bi;function yu(e,t,n){const r=e.type;if(!e.render){if(!t&&Bi&&!r.render){const o=r.template||Ba(e).template;if(o){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:u}=r,d=it(it({isCustomElement:a,delimiters:l},i),u);r.render=Bi(o,d)}}e.render=r.render||Ot}as(e),us(),jf(e),ds(),On()}function am(e){return new Proxy(e.attrs,{get(t,n){return vt(e,"get","$attrs"),t[n]}})}function ku(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=am(e))},slots:e.slots,emit:e.emit,expose:t}}function Jr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wc(qr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $r)return $r[n](e)}}))}function Vo(e,t=!0){return de(e)?e.displayName||e.name:e.name||t&&e.__name}function im(e){return de(e)&&"__vccOpts"in e}const R=(e,t)=>rf(e,t,Gs);function lm(){return cm().slots}function cm(){const e=Fn();return e.setupContext||(e.setupContext=ku(e))}function ht(e,t,n){const r=arguments.length;return r===2?Ne(t)&&!re(t)?os(t)?x(e,null,[t]):x(e,t):x(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&os(n)&&(n=[n]),x(e,t,n))}const um="3.2.40",dm="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,Di=bn&&bn.createElement("template"),pm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?bn.createElementNS(dm,e):bn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>bn.createTextNode(e),createComment:e=>bn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,a){const i=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{Di.innerHTML=r?`<svg>${e}</svg>`:e;const l=Di.content;if(r){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function fm(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mm(e,t,n){const r=e.style,o=He(n);if(n&&!o){for(const a in n)Uo(r,a,n[a]);if(t&&!He(t))for(const a in t)n[a]==null&&Uo(r,a,"")}else{const a=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Hi=/\s*!important$/;function Uo(e,t,n){if(re(n))n.forEach(r=>Uo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hm(e,t);Hi.test(n)?e.setProperty(Mn(r),n.replace(Hi,""),"important"):e[r]=n}}const Vi=["Webkit","Moz","ms"],lo={};function hm(e,t){const n=lo[t];if(n)return n;let r=Vt(t);if(r!=="filter"&&r in e)return lo[t]=r;r=Ur(r);for(let o=0;o<Vi.length;o++){const a=Vi[o]+r;if(a in e)return lo[t]=a}return t}const Ui="http://www.w3.org/1999/xlink";function gm(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ui,t.slice(6,t.length)):e.setAttributeNS(Ui,t,n);else{const a=up(t);n==null||a&&!Sc(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function _m(e,t,n,r,o,a,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const u=n==null?"":n;(e.value!==u||e.tagName==="OPTION")&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Sc(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[bu,vm]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Go=0;const ym=Promise.resolve(),km=()=>{Go=0},bm=()=>Go||(ym.then(km),Go=bu());function qn(e,t,n,r){e.addEventListener(t,n,r)}function xm(e,t,n,r){e.removeEventListener(t,n,r)}function wm(e,t,n,r,o=null){const a=e._vei||(e._vei={}),i=a[t];if(r&&i)i.value=r;else{const[l,u]=Cm(t);if(r){const d=a[t]=Tm(r,o);qn(e,l,d,u)}else i&&(xm(e,l,i,u),a[t]=void 0)}}const Gi=/(?:Once|Passive|Capture)$/;function Cm(e){let t;if(Gi.test(e)){t={};let r;for(;r=e.match(Gi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mn(e.slice(2)),t]}function Tm(e,t){const n=r=>{const o=r.timeStamp||bu();(vm||o>=n.attached-1)&&Rt(Sm(r,n.value),t,5,[r])};return n.value=e,n.attached=bm(),n}function Sm(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const qi=/^on[a-z]/,$m=(e,t,n,r,o=!1,a,i,l,u)=>{t==="class"?fm(e,r,o):t==="style"?mm(e,n,r):Dr(t)?ba(t)||wm(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Em(e,t,r,o))?_m(e,t,r,a,i,l,u):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gm(e,t,r,o))};function Em(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&qi.test(t)&&de(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qi.test(t)&&He(n)?!1:t in e}const zi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return re(t)?n=>Xn(t,n):t};function Om(e){e.target.composing=!0}function Wi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rm={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=zi(o);const a=r||o.props&&o.props.type==="number";qn(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),a&&(l=Ro(l)),e._assign(l)}),n&&qn(e,"change",()=>{e.value=e.value.trim()}),t||(qn(e,"compositionstart",Om),qn(e,"compositionend",Wi),qn(e,"change",Wi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},a){if(e._assign=zi(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&Ro(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Pm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ki=(e,t)=>n=>{if(!("key"in n))return;const r=Mn(n.key);if(t.some(o=>o===r||Pm[o]===r))return e(n)},xu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):vs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),vs(e,!0),r.enter(e)):r.leave(e,()=>{vs(e,!1)}):vs(e,t))},beforeUnmount(e,{value:t}){vs(e,t)}};function vs(e,t){e.style.display=t?e._vod:"none"}const Am=it({patchProp:$m},pm);let Yi;function jm(){return Yi||(Yi=qf(Am))}const Mm=(...e)=>{const t=jm().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Im(r);if(!o)return;const a=t._component;!de(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Im(e){return He(e)?document.querySelector(e):e}var Zi;const jt=typeof window<"u",Lm=e=>typeof e<"u",Fm=Object.prototype.toString,Or=e=>typeof e=="function",Nm=e=>typeof e=="number",wu=e=>typeof e=="string",qo=e=>Fm.call(e)==="[object Object]",zo=()=>+Date.now(),Rn=()=>{};jt&&((Zi=window==null?void 0:window.navigator)==null?void 0:Zi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Qe(e){return typeof e=="function"?e():w(e)}function Bm(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const Cu=e=>e();function Dm(e=Cu){const t=D(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...a)=>{t.value&&e(...a)}}}function Hm(e){return e}function Vm(e,t){var n;if(typeof e=="number")return e+t;const r=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(r.length),a=parseFloat(r)+t;return Number.isNaN(a)?e:a+o}function Um(e,t){let n,r,o;const a=D(!0),i=()=>{a.value=!0,o()};he(e,i,{flush:"sync"});const l=Or(t)?t:t.get,u=Or(t)?void 0:t.set,d=Kc((p,f)=>(r=p,o=f,{get(){return a.value&&(n=l(),a.value=!1),r(),n},set(m){u==null||u(m)}}));return Object.isExtensible(d)&&(d.trigger=i),d}function Zt(e){return jc()?(Mc(e),!0):!1}function Gm(e){if(!Se(e))return Fe(e);const t=new Proxy({},{get(n,r,o){return w(Reflect.get(e.value,r,o))},set(n,r,o){return Se(e.value[r])&&!Se(o)?e.value[r].value=o:e.value[r]=o,!0},deleteProperty(n,r){return Reflect.deleteProperty(e.value,r)},has(n,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fe(t)}function Tu(e){return typeof e=="function"?R(e):D(e)}var qm=Object.defineProperty,zm=Object.defineProperties,Wm=Object.getOwnPropertyDescriptors,Qi=Object.getOwnPropertySymbols,Km=Object.prototype.hasOwnProperty,Ym=Object.prototype.propertyIsEnumerable,Xi=(e,t,n)=>t in e?qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zm=(e,t)=>{for(var n in t||(t={}))Km.call(t,n)&&Xi(e,n,t[n]);if(Qi)for(var n of Qi(t))Ym.call(t,n)&&Xi(e,n,t[n]);return e},Qm=(e,t)=>zm(e,Wm(t));function Xm(e){if(!Se(e))return ef(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Kc(()=>({get(){return e.value[n]},set(r){if(Array.isArray(e.value)){const o=[...e.value];o[n]=r,e.value=o}else{const o=Qm(Zm({},e.value),{[n]:r});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Su(e,t=!0){Fn()?In(e):t?e():Je(e)}function Jm(e){Fn()&&Qr(e)}function eh(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let a=null;const i=D(!1);function l(){a&&(clearInterval(a),a=null)}function u(){i.value=!1,l()}function d(){w(t)<=0||(i.value=!0,o&&e(),l(),a=setInterval(e,Qe(t)))}if(r&&jt&&d(),Se(t)){const p=he(t,()=>{i.value&&jt&&d()});Zt(p)}return Zt(u),{isActive:i,pause:u,resume:d}}function th(e,t,n={}){const{immediate:r=!0}=n,o=D(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function l(){o.value=!1,i()}function u(...d){i(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...d)},Qe(t))}return r&&(o.value=!0,jt&&u()),Zt(l),{isPending:o,start:u,stop:l}}function $u(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=Se(e),a=D(e);function i(l){if(arguments.length)return a.value=l,a.value;{const u=Qe(n);return a.value=a.value===u?Qe(r):u,a.value}}return o?i:[a,i]}var Ji=Object.getOwnPropertySymbols,nh=Object.prototype.hasOwnProperty,sh=Object.prototype.propertyIsEnumerable,rh=(e,t)=>{var n={};for(var r in e)nh.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ji)for(var r of Ji(e))t.indexOf(r)<0&&sh.call(e,r)&&(n[r]=e[r]);return n};function oh(e,t,n={}){const r=n,{eventFilter:o=Cu}=r,a=rh(r,["eventFilter"]);return he(e,Bm(o,t),a)}var ah=Object.defineProperty,ih=Object.defineProperties,lh=Object.getOwnPropertyDescriptors,Rr=Object.getOwnPropertySymbols,Eu=Object.prototype.hasOwnProperty,Ou=Object.prototype.propertyIsEnumerable,el=(e,t,n)=>t in e?ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ch=(e,t)=>{for(var n in t||(t={}))Eu.call(t,n)&&el(e,n,t[n]);if(Rr)for(var n of Rr(t))Ou.call(t,n)&&el(e,n,t[n]);return e},uh=(e,t)=>ih(e,lh(t)),dh=(e,t)=>{var n={};for(var r in e)Eu.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Rr)for(var r of Rr(e))t.indexOf(r)<0&&Ou.call(e,r)&&(n[r]=e[r]);return n};function ph(e,t,n={}){const r=n,{eventFilter:o}=r,a=dh(r,["eventFilter"]),{eventFilter:i,pause:l,resume:u,isActive:d}=Dm(o);return{stop:oh(e,t,uh(ch({},a),{eventFilter:i})),pause:l,resume:u,isActive:d}}var Ru="usehead",tl="head:count",co="data-head-attrs",Pu="data-meta-body",fh=(e,t)=>{const n=r=>{if(r.props.renderPriority)return r.props.renderPriority;switch(r.tag){case"base":return-1;case"meta":return r.props.charset?-2:r.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(e)-n(t)},mh=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:t,tag:n}=e;if(n==="base"||n==="title")return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["key","id","name","property","http-equiv"];for(const o of r){let a;if(typeof t.getAttribute=="function"&&t.hasAttribute(o)?a=t.getAttribute(o):a=t[o],a!==void 0)return`${n}-${o}-${a}`}return!1};function Wo(e){const t=Qe(e);return!e||!t?t:Array.isArray(t)?t.map(Wo):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([n,r])=>n==="titleTemplate"?[n,w(r)]:[n,Wo(r)])):t}function hh(e){return{...e,input:Wo(e.input)}}function nl(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}var sl=(e,t)=>{const n=e.getAttribute(co);if(n)for(const o of n.split(","))o in t||e.removeAttribute(o);const r=[];for(const o in t){const a=t[o];a!=null&&(a===!1?e.removeAttribute(o):e.setAttribute(o,a),r.push(o))}r.length?e.setAttribute(co,r.join(",")):e.removeAttribute(co)},gh=(e,t,n)=>{const r=n.createElement(e);for(const o of Object.keys(t))if(o==="body"&&t.body===!0)r.setAttribute(Pu,"true");else{const a=t[o];if(o==="renderPriority"||o==="key"||a===!1)continue;o==="children"||o==="textContent"?r.textContent=a:o==="innerHTML"?r.innerHTML=a:r.setAttribute(o,a)}return r},_h=(e=window.document,t,n)=>{var r,o;const a=e.head,i=e.body;let l=a.querySelector(`meta[name="${tl}"]`);const u=i.querySelectorAll(`[${Pu}]`),d=l?Number(l.getAttribute("content")):0,p=[],f=[];if(u)for(let g=0;g<u.length;g++)u[g]&&((r=u[g].tagName)==null?void 0:r.toLowerCase())===t&&f.push(u[g]);if(l)for(let g=0,h=l.previousElementSibling;g<d;g++,h=(h==null?void 0:h.previousElementSibling)||null)((o=h==null?void 0:h.tagName)==null?void 0:o.toLowerCase())===t&&p.push(h);else l=e.createElement("meta"),l.setAttribute("name",tl),l.setAttribute("content","0"),a.append(l);let m=n.map(g=>{var h;return{element:gh(g.tag,g.props,e),body:(h=g.props.body)!=null?h:!1}});m=m.filter(g=>{for(let h=0;h<p.length;h++){const y=p[h];if(nl(y,g.element))return p.splice(h,1),!1}for(let h=0;h<f.length;h++){const y=f[h];if(nl(y,g.element))return f.splice(h,1),!1}return!0}),f.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),p.forEach(g=>{var h;return(h=g.parentNode)==null?void 0:h.removeChild(g)}),m.forEach(g=>{g.body===!0?i.insertAdjacentElement("beforeend",g.element):a.insertBefore(g.element,l)}),l.setAttribute("content",`${d-p.length+m.filter(g=>!g.body).length}`)},vh=({domCtx:e,document:t,previousTags:n})=>{t||(t=window.document),e.title!==void 0&&(t.title=e.title),sl(t.documentElement,e.htmlAttrs),sl(t.body,e.bodyAttrs);const r=new Set([...Object.keys(e.actualTags),...n]);for(const o of r)_h(t,o,e.actualTags[o]||[]);n.clear(),Object.keys(e.actualTags).forEach(o=>n.add(o))},yh=()=>{const e=I(Ru);if(!e)throw new Error("You may forget to apply app.use(head)");return e},kh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],bh=(e,t)=>e==null?"":typeof e=="function"?e(t):e.replace("%s",t!=null?t:""),xh=e=>{const t=[],n=Object.keys(e),r=o=>(o.hid&&(o.key=o.hid,delete o.hid),o.vmid&&(o.key=o.vmid,delete o.vmid),o);for(const o of n)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{textContent:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:{key:"default",...e[o]}});break;default:if(kh.includes(o)){const a=e[o];Array.isArray(a)?a.forEach(i=>{const l=r(i);t.push({tag:o,props:l})}):a&&t.push({tag:o,props:r(a)})}break}return t},wh=e=>{let t=[];const n=new Set;let r=0;const o=[],a=[];e&&t.push({input:e});let i=null,l;const u={install(d){d.config.globalProperties.$head=u,d.provide(Ru,u)},hookBeforeDomUpdate:o,hookTagsResolved:a,get headTags(){const d=[],p={},f=t.map(hh),m=f.map(h=>h.input.titleTemplate).reverse().find(h=>h!=null);f.forEach((h,y)=>{xh(h.input).forEach((b,S)=>{var T;if(b._position=y*1e4+S,b._options&&delete b._options,h.options&&(b._options=h.options),m&&b.tag==="title"&&(b.props.textContent=bh(m,b.props.textContent)),!((T=b._options)!=null&&T.raw)){for(const L in b.props)L.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",b),delete b.props[L]);b.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",b),delete b.props.innerHTML)}const E=mh(b);E?p[E]=b:d.push(b)})}),d.push(...Object.values(p));const g=d.sort((h,y)=>h._position-y._position);return u.hookTagsResolved.forEach(h=>h(g)),g},addHeadObjs(d,p){const f={input:d,options:p,id:r++};return t.push(f),()=>{t=t.filter(m=>m.id!==f.id)}},removeHeadObjs(d){t=t.filter(p=>p.input!==d)},updateDOM:(d,p)=>{l={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const m of u.headTags.sort(fh)){if(m.tag==="title"){l.title=m.props.textContent;continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){Object.assign(l[m.tag],m.props);continue}l.actualTags[m.tag]=l.actualTags[m.tag]||[],l.actualTags[m.tag].push(m)}const f=()=>{i=null;for(const m in u.hookBeforeDomUpdate)if(u.hookBeforeDomUpdate[m](l.actualTags)===!1)return;vh({domCtx:l,document:d,previousTags:n})};if(p){f();return}i=i||Je(()=>f())}};return u},Ch=typeof window<"u",Th=(e,t={})=>{const n=yh(),r=n.addHeadObjs(e,t);Ch&&(ps(()=>{n.updateDOM()}),Zr(()=>{r(),n.updateDOM()}))},Sh=e=>{Th(e)};const Os=Symbol("v-click-clicks"),xn=Symbol("v-click-clicks-elements"),Ko=Symbol("v-click-clicks-order-map"),Rs=Symbol("v-click-clicks-disabled"),Au=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),$h=Symbol("slidev-route"),Eh=Symbol("slidev-slide-context"),yn="slidev-vclick-target",uo="slidev-vclick-hidden",Oh="slidev-vclick-fade",po="slidev-vclick-hidden-explicitly",ys="slidev-vclick-current",dr="slidev-vclick-prior";function Yo(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Rh(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;const o=[];let a=t;for(;a<n;)o.push(a),a+=r||1;return o}function Ph(e){return e!=null}function Ah(e,t){return Object.fromEntries(Object.entries(e).map(([n,r])=>t(n,r)).filter(Ph))}const Tn={theme:"default",title:"Grid \u5E03\u5C40",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",layout:"cover"},Ce=Tn;var Cc;const ln=(Cc=Ce.aspectRatio)!=null?Cc:16/9;var Tc;const Pn=(Tc=Ce.canvasWidth)!=null?Tc:980,ju=Math.round(Pn/ln),Mu=R(()=>Ah(Ce.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Nn=Fe({page:0,clicks:0});let jh=[],Mh=[];bt(Nn,"$syncUp",!0);bt(Nn,"$syncDown",!0);bt(Nn,"$paused",!1);bt(Nn,"$onSet",e=>jh.push(e));bt(Nn,"$onPatch",e=>Mh.push(e));bt(Nn,"$patch",async()=>!1);function Iu(e,t,n=!1){const r=[];let o=!1,a=!1,i,l;const u=Fe(t);function d(g){r.push(g)}function p(g,h){clearTimeout(i),o=!0,u[g]=h,i=setTimeout(()=>o=!1,0)}function f(g){o||(clearTimeout(l),a=!0,Object.entries(g).forEach(([h,y])=>{u[h]=y}),l=setTimeout(()=>a=!1,0))}function m(g){let h;n?n&&window.addEventListener("storage",k=>{k&&k.key===g&&k.newValue&&f(JSON.parse(k.newValue))}):(h=new BroadcastChannel(g),h.addEventListener("message",k=>f(k.data)));function y(){!n&&h&&!a?h.postMessage(Te(u)):n&&!a&&window.localStorage.setItem(g,JSON.stringify(u)),o||r.forEach(k=>k(u))}if(he(u,y,{deep:!0}),n){const k=window.localStorage.getItem(g);k&&f(JSON.parse(k))}}return{init:m,onPatch:d,patch:p,state:u}}const{init:Ih,onPatch:Lh,patch:rl,state:fo}=Iu(Nn,{page:1,clicks:0}),Bn=Fe({});let Fh=[],Nh=[];bt(Bn,"$syncUp",!0);bt(Bn,"$syncDown",!0);bt(Bn,"$paused",!1);bt(Bn,"$onSet",e=>Fh.push(e));bt(Bn,"$onPatch",e=>Nh.push(e));bt(Bn,"$patch",async()=>!1);const{init:Bh,onPatch:Dh,patch:Lu,state:Pr}=Iu(Bn,{},!1),Hh="modulepreload",Vh=function(e){return"/slides-grid/"+e},ol={},fs=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=Vh(o),o in ol)return;ol[o]=!0;const a=o.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Hh,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function $t(e){var t;const n=Qe(e);return(t=n==null?void 0:n.$el)!=null?t:n}const nt=jt?window:void 0,Uh=jt?window.document:void 0,Gh=jt?window.navigator:void 0;function fe(...e){let t,n,r,o;if(wu(e[0])?([n,r,o]=e,t=nt):[t,n,r,o]=e,!t)return Rn;let a=Rn;const i=he(()=>$t(t),u=>{a(),u&&(u.addEventListener(n,r,o),a=()=>{u.removeEventListener(n,r,o),a=Rn})},{immediate:!0,flush:"post"}),l=()=>{i(),a()};return Zt(l),l}function qh(e,t,n={}){const{window:r=nt,ignore:o,capture:a=!0,detectIframe:i=!1}=n;if(!r)return;const l=D(!0);let u;const d=g=>{r.clearTimeout(u);const h=$t(e);!h||h===g.target||g.composedPath().includes(h)||!l.value||t(g)},p=g=>o&&o.some(h=>{const y=$t(h);return y&&(g.target===y||g.composedPath().includes(y))}),f=[fe(r,"click",d,{passive:!0,capture:a}),fe(r,"pointerdown",g=>{const h=$t(e);l.value=!!h&&!g.composedPath().includes(h)&&!p(g)},{passive:!0}),fe(r,"pointerup",g=>{if(g.button===0){const h=g.composedPath();g.composedPath=()=>h,u=r.setTimeout(()=>d(g),50)}},{passive:!0}),i&&fe(r,"blur",g=>{var h;const y=$t(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(y!=null&&y.contains(document.activeElement))&&t(g)})].filter(Boolean);return()=>f.forEach(g=>g())}const zh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function Wh(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:o=nt,eventName:a="keydown",passive:i=!1}=r,l=zh(t);return fe(o,a,d=>{l(d)&&n(d)},i)}function Kh(e={}){const{window:t=nt}=e,n=Um(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(fe(t,"blur",n.trigger,!0),fe(t,"focus",n.trigger,!0)),n}function Js(e,t=!1){const n=D(),r=()=>n.value=Boolean(e());return r(),Su(r,t),n}function zn(e,t={}){const{window:n=nt}=t,r=Js(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const a=D(!1),i=()=>{!o||("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{!r.value||(i(),o=n.matchMedia(Tu(e).value),a.value=o.matches,"addEventListener"in o?o.addEventListener("change",l):o.addListener(l))};return ps(l),Zt(()=>i()),a}const Yh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Zh=Object.defineProperty,al=Object.getOwnPropertySymbols,Qh=Object.prototype.hasOwnProperty,Xh=Object.prototype.propertyIsEnumerable,il=(e,t,n)=>t in e?Zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jh=(e,t)=>{for(var n in t||(t={}))Qh.call(t,n)&&il(e,n,t[n]);if(al)for(var n of al(t))Xh.call(t,n)&&il(e,n,t[n]);return e};function eg(e,t={}){function n(l,u){let d=e[l];return u!=null&&(d=Vm(d,u)),typeof d=="number"&&(d=`${d}px`),d}const{window:r=nt}=t;function o(l){return r?r.matchMedia(l).matches:!1}const a=l=>zn(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,u)=>(Object.defineProperty(l,u,{get:()=>a(u),enumerable:!0,configurable:!0}),l),{});return Jh({greater(l){return zn(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:a,smaller(l){return zn(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return zn(`(max-width: ${n(l)})`,t)},between(l,u){return zn(`(min-width: ${n(l)}) and (max-width: ${n(u,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return o(`(max-width: ${n(l)})`)},isInBetween(l,u){return o(`(min-width: ${n(l)}) and (max-width: ${n(u,-.1)})`)}},i)}function tg(e={}){const{navigator:t=Gh,read:n=!1,source:r,copiedDuring:o=1500}=e,a=["copy","cut"],i=Js(()=>t&&"clipboard"in t),l=D(""),u=D(!1),d=th(()=>u.value=!1,o);function p(){t.clipboard.readText().then(m=>{l.value=m})}if(i.value&&n)for(const m of a)fe(m,p);async function f(m=Qe(r)){i.value&&m!=null&&(await t.clipboard.writeText(m),l.value=m,u.value=!0,d.start())}return{isSupported:i,text:l,copied:u,copy:f}}function ng(e){return JSON.parse(JSON.stringify(e))}const Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qo="__vueuse_ssr_handlers__";Zo[Qo]=Zo[Qo]||{};const sg=Zo[Qo];function rg(e,t){return sg[e]||t}function og(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var ag=Object.defineProperty,ll=Object.getOwnPropertySymbols,ig=Object.prototype.hasOwnProperty,lg=Object.prototype.propertyIsEnumerable,cl=(e,t,n)=>t in e?ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ul=(e,t)=>{for(var n in t||(t={}))ig.call(t,n)&&cl(e,n,t[n]);if(ll)for(var n of ll(t))lg.call(t,n)&&cl(e,n,t[n]);return e};const cg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function It(e,t,n,r={}){var o;const{flush:a="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:u=!0,mergeDefaults:d=!1,shallow:p,window:f=nt,eventFilter:m,onError:g=H=>{console.error(H)}}=r,h=(p?Ut:D)(t);if(!n)try{n=rg("getDefaultStorage",()=>{var H;return(H=nt)==null?void 0:H.localStorage})()}catch(H){g(H)}if(!n)return h;const y=Qe(t),k=og(y),b=(o=r.serializer)!=null?o:cg[k],{pause:S,resume:T}=ph(h,()=>E(h.value),{flush:a,deep:i,eventFilter:m});return f&&l&&fe(f,"storage",F),F(),h;function E(H){try{H==null?n.removeItem(e):n.setItem(e,b.write(H))}catch(J){g(J)}}function L(H){if(!(H&&H.key!==e)){S();try{const J=H?H.newValue:n.getItem(e);if(J==null)return u&&y!==null&&n.setItem(e,b.write(y)),y;if(!H&&d){const me=b.read(J);return Or(d)?d(me,y):k==="object"&&!Array.isArray(me)?ul(ul({},y),me):me}else return typeof J!="string"?J:b.read(J)}catch(J){g(J)}finally{T()}}}function F(H){H&&H.key!==e||(h.value=L(H))}}function ug(e){return zn("(prefers-color-scheme: dark)",e)}var dg=Object.defineProperty,pg=Object.defineProperties,fg=Object.getOwnPropertyDescriptors,dl=Object.getOwnPropertySymbols,mg=Object.prototype.hasOwnProperty,hg=Object.prototype.propertyIsEnumerable,pl=(e,t,n)=>t in e?dg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gg=(e,t)=>{for(var n in t||(t={}))mg.call(t,n)&&pl(e,n,t[n]);if(dl)for(var n of dl(t))hg.call(t,n)&&pl(e,n,t[n]);return e},_g=(e,t)=>pg(e,fg(t));function OT(e,t={}){var n,r,o;const a=(n=t.draggingElement)!=null?n:nt,i=(r=t.handle)!=null?r:e,l=D((o=Qe(t.initialValue))!=null?o:{x:0,y:0}),u=D(),d=h=>t.pointerTypes?t.pointerTypes.includes(h.pointerType):!0,p=h=>{Qe(t.preventDefault)&&h.preventDefault(),Qe(t.stopPropagation)&&h.stopPropagation()},f=h=>{var y;if(!d(h)||Qe(t.exact)&&h.target!==Qe(e))return;const k=Qe(e).getBoundingClientRect(),b={x:h.pageX-k.left,y:h.pageY-k.top};((y=t.onStart)==null?void 0:y.call(t,b,h))!==!1&&(u.value=b,p(h))},m=h=>{var y;!d(h)||!u.value||(l.value={x:h.pageX-u.value.x,y:h.pageY-u.value.y},(y=t.onMove)==null||y.call(t,l.value,h),p(h))},g=h=>{var y;!d(h)||!u.value||(u.value=void 0,(y=t.onEnd)==null||y.call(t,l.value,h),p(h))};return jt&&(fe(i,"pointerdown",f,!0),fe(a,"pointermove",m,!0),fe(a,"pointerup",g,!0)),_g(gg({},Xm(l)),{position:l,isDragging:R(()=>!!u.value),style:R(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var fl=Object.getOwnPropertySymbols,vg=Object.prototype.hasOwnProperty,yg=Object.prototype.propertyIsEnumerable,kg=(e,t)=>{var n={};for(var r in e)vg.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&fl)for(var r of fl(e))t.indexOf(r)<0&&yg.call(e,r)&&(n[r]=e[r]);return n};function bg(e,t,n={}){const r=n,{window:o=nt}=r,a=kg(r,["window"]);let i;const l=Js(()=>o&&"ResizeObserver"in o),u=()=>{i&&(i.disconnect(),i=void 0)},d=he(()=>$t(e),f=>{u(),l.value&&o&&f&&(i=new ResizeObserver(t),i.observe(f,a))},{immediate:!0,flush:"post"}),p=()=>{u(),d()};return Zt(p),{isSupported:l,stop:p}}function xg(e,t={}){const{immediate:n=!0,window:r=nt}=t,o=D(!1);let a=null;function i(){!o.value||!r||(e(),a=r.requestAnimationFrame(i))}function l(){!o.value&&r&&(o.value=!0,i())}function u(){o.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return n&&l(),Zt(u),{isActive:o,pause:u,resume:l}}function wg(e,t={width:0,height:0},n={}){const{box:r="content-box"}=n,o=D(t.width),a=D(t.height);return bg(e,([i])=>{const l=r==="border-box"?i.borderBoxSize:r==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;l?(o.value=l.reduce((u,{inlineSize:d})=>u+d,0),a.value=l.reduce((u,{blockSize:d})=>u+d,0)):(o.value=i.contentRect.width,a.value=i.contentRect.height)},n),he(()=>$t(e),i=>{o.value=i?t.width:0,a.value=i?t.height:0}),{width:o,height:a}}const ml=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Cg(e,t={}){const{document:n=Uh,autoExit:r=!1}=t,o=e||(n==null?void 0:n.querySelector("html")),a=D(!1);let i=ml[0];const l=Js(()=>{if(n){for(const y of ml)if(y[1]in n)return i=y,!0}else return!1;return!1}),[u,d,p,,f]=i;async function m(){!l.value||(n!=null&&n[p]&&await n[d](),a.value=!1)}async function g(){if(!l.value)return;await m();const y=$t(o);y&&(await y[u](),a.value=!0)}async function h(){a.value?await m():await g()}return n&&fe(n,f,()=>{a.value=!!(n!=null&&n[p])},!1),r&&Zt(m),{isSupported:l,isFullscreen:a,enter:g,exit:m,toggle:h}}function Tg(e,t,n={}){const{root:r,rootMargin:o="0px",threshold:a=.1,window:i=nt}=n,l=Js(()=>i&&"IntersectionObserver"in i);let u=Rn;const d=l.value?he(()=>({el:$t(e),root:$t(r)}),({el:f,root:m})=>{if(u(),!f)return;const g=new IntersectionObserver(t,{root:m,rootMargin:o,threshold:a});g.observe(f),u=()=>{g.disconnect(),u=Rn}},{immediate:!0,flush:"post"}):Rn,p=()=>{u(),d()};return Zt(p),{isSupported:l,stop:p}}const Sg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function $g(e={}){const{reactive:t=!1,target:n=nt,aliasMap:r=Sg,passive:o=!0,onEventFired:a=Rn}=e,i=Fe(new Set),l={toJSON(){return{}},current:i},u=t?Fe(l):l,d=new Set,p=new Set;function f(y,k){y in u&&(t?u[y]=k:u[y].value=k)}function m(){for(const y of p)f(y,!1)}function g(y,k){var b,S;const T=(b=y.key)==null?void 0:b.toLowerCase(),L=[(S=y.code)==null?void 0:S.toLowerCase(),T].filter(Boolean);T&&(k?i.add(T):i.delete(T));for(const F of L)p.add(F),f(F,k);T==="meta"&&!k?(d.forEach(F=>{i.delete(F),f(F,!1)}),d.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&k&&[...i,...L].forEach(F=>d.add(F))}fe(n,"keydown",y=>(g(y,!0),a(y)),{passive:o}),fe(n,"keyup",y=>(g(y,!1),a(y)),{passive:o}),fe("blur",m,{passive:!0}),fe("focus",m,{passive:!0});const h=new Proxy(u,{get(y,k,b){if(typeof k!="string")return Reflect.get(y,k,b);if(k=k.toLowerCase(),k in r&&(k=r[k]),!(k in u))if(/[+_-]/.test(k)){const T=k.split(/[+_-]/g).map(E=>E.trim());u[k]=R(()=>T.every(E=>w(h[E])))}else u[k]=D(!1);const S=Reflect.get(y,k,b);return t?w(S):S}});return h}function RT(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:a=nt,eventFilter:i}=e,l=D(o.x),u=D(o.y),d=D(null),p=y=>{t==="page"?(l.value=y.pageX,u.value=y.pageY):t==="client"&&(l.value=y.clientX,u.value=y.clientY),d.value="mouse"},f=()=>{l.value=o.x,u.value=o.y},m=y=>{if(y.touches.length>0){const k=y.touches[0];t==="page"?(l.value=k.pageX,u.value=k.pageY):t==="client"&&(l.value=k.clientX,u.value=k.clientY),d.value="touch"}},g=y=>i===void 0?p(y):i(()=>p(y),{}),h=y=>i===void 0?m(y):i(()=>m(y),{});return a&&(fe(a,"mousemove",g,{passive:!0}),fe(a,"dragover",g,{passive:!0}),n&&(fe(a,"touchstart",h,{passive:!0}),fe(a,"touchmove",h,{passive:!0}),r&&fe(a,"touchend",f,{passive:!0}))),{x:l,y:u,sourceType:d}}var Kt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Kt||(Kt={}));function Eg(e,t={}){const n=Tu(e),{threshold:r=50,onSwipe:o,onSwipeEnd:a,onSwipeStart:i}=t,l=Fe({x:0,y:0}),u=(F,H)=>{l.x=F,l.y=H},d=Fe({x:0,y:0}),p=(F,H)=>{d.x=F,d.y=H},f=R(()=>l.x-d.x),m=R(()=>l.y-d.y),{max:g,abs:h}=Math,y=R(()=>g(h(f.value),h(m.value))>=r),k=D(!1),b=D(!1),S=R(()=>y.value?h(f.value)>h(m.value)?f.value>0?Kt.LEFT:Kt.RIGHT:m.value>0?Kt.UP:Kt.DOWN:Kt.NONE),T=F=>t.pointerTypes?t.pointerTypes.includes(F.pointerType):!0,E=[fe(e,"pointerdown",F=>{var H,J;if(!T(F))return;b.value=!0,(J=(H=n.value)==null?void 0:H.style)==null||J.setProperty("touch-action","none");const me=F.target;me==null||me.setPointerCapture(F.pointerId);const{clientX:ge,clientY:be}=F;u(ge,be),p(ge,be),i==null||i(F)}),fe(e,"pointermove",F=>{if(!T(F)||!b.value)return;const{clientX:H,clientY:J}=F;p(H,J),!k.value&&y.value&&(k.value=!0),k.value&&(o==null||o(F))}),fe(e,"pointerup",F=>{var H,J;!T(F)||(k.value&&(a==null||a(F,S.value)),b.value=!1,k.value=!1,(J=(H=n.value)==null?void 0:H.style)==null||J.setProperty("touch-action","initial"))})],L=()=>E.forEach(F=>F());return{isSwiping:Kn(k),direction:Kn(S),posStart:Kn(l),posEnd:Kn(d),distanceX:f,distanceY:m,stop:L}}var Og=Object.defineProperty,hl=Object.getOwnPropertySymbols,Rg=Object.prototype.hasOwnProperty,Pg=Object.prototype.propertyIsEnumerable,gl=(e,t,n)=>t in e?Og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ag=(e,t)=>{for(var n in t||(t={}))Rg.call(t,n)&&gl(e,n,t[n]);if(hl)for(var n of hl(t))Pg.call(t,n)&&gl(e,n,t[n]);return e};function PT(e={}){const{controls:t=!1,offset:n=0,immediate:r=!0,interval:o="requestAnimationFrame",callback:a}=e,i=D(zo()+n),l=()=>i.value=zo()+n,u=a?()=>{l(),a(i.value)}:l,d=o==="requestAnimationFrame"?xg(u,{immediate:r}):eh(u,o,{immediate:r});return t?Ag({timestamp:i},d):i}var jg=Object.defineProperty,_l=Object.getOwnPropertySymbols,Mg=Object.prototype.hasOwnProperty,Ig=Object.prototype.propertyIsEnumerable,vl=(e,t,n)=>t in e?jg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lg=(e,t)=>{for(var n in t||(t={}))Mg.call(t,n)&&vl(e,n,t[n]);if(_l)for(var n of _l(t))Ig.call(t,n)&&vl(e,n,t[n]);return e};const Fg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Lg({linear:Hm},Fg);function Dt(e,t,n,r={}){var o,a,i;const{clone:l=!1,passive:u=!1,eventName:d,deep:p=!1,defaultValue:f}=r,m=Fn(),g=n||(m==null?void 0:m.emit)||((o=m==null?void 0:m.$emit)==null?void 0:o.bind(m))||((i=(a=m==null?void 0:m.proxy)==null?void 0:a.$emit)==null?void 0:i.bind(m==null?void 0:m.proxy));let h=d;t||(t="modelValue"),h=d||h||`update:${t.toString()}`;const y=b=>l?Or(l)?l(b):ng(b):b,k=()=>Lm(e[t])?y(e[t]):f;if(u){const b=k(),S=D(b);return he(()=>e[t],T=>S.value=y(T)),he(S,T=>{(T!==e[t]||p)&&g(h,T)},{deep:p}),S}else return R({get(){return k()},set(b){g(h,b)}})}function AT({window:e=nt}={}){if(!e)return D(!1);const t=D(e.document.hasFocus());return fe(e,"blur",()=>{t.value=!1}),fe(e,"focus",()=>{t.value=!0}),t}function Ng(e={}){const{window:t=nt,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:a=!0}=e,i=D(n),l=D(r),u=()=>{t&&(a?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return u(),Su(u),fe("resize",u,{passive:!0}),o&&fe("orientationchange",u,{passive:!0}),{width:i,height:l}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wn=typeof window<"u";function Bg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function mo(e,t){const n={};for(const r in t){const o=t[r];n[r]=Mt(o)?o.map(e):e(o)}return n}const Ps=()=>{},Mt=Array.isArray,Dg=/\/$/,Hg=e=>e.replace(Dg,"");function ho(e,t,n="/"){let r,o={},a="",i="";const l=t.indexOf("#");let u=t.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=t.slice(0,u),a=t.slice(u+1,l>-1?l:t.length),o=e(a)),l>-1&&(r=r||t.slice(0,l),i=t.slice(l,t.length)),r=qg(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+i,path:r,query:o,hash:i}}function Vg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ug(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&is(t.matched[r],n.matched[o])&&Fu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Gg(e[n],t[n]))return!1;return!0}function Gg(e,t){return Mt(e)?kl(e,t):Mt(t)?kl(t,e):e===t}function kl(e,t){return Mt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function qg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,a,i;for(a=0;a<r.length;a++)if(i=r[a],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var qs;(function(e){e.pop="pop",e.push="push"})(qs||(qs={}));var As;(function(e){e.back="back",e.forward="forward",e.unknown=""})(As||(As={}));function zg(e){if(!e)if(Wn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Hg(e)}const Wg=/^[^#]+#/;function Kg(e,t){return e.replace(Wg,"#")+t}function Yg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const eo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Yg(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function bl(e,t){return(history.state?history.state.position-t:-1)+e}const Xo=new Map;function Qg(e,t){Xo.set(e,t)}function Xg(e){const t=Xo.get(e);return Xo.delete(e),t}let Jg=()=>location.protocol+"//"+location.host;function Nu(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let l=o.includes(e.slice(a))?e.slice(a).length:1,u=o.slice(l);return u[0]!=="/"&&(u="/"+u),yl(u,"")}return yl(n,e)+r+o}function e0(e,t,n,r){let o=[],a=[],i=null;const l=({state:m})=>{const g=Nu(e,location),h=n.value,y=t.value;let k=0;if(m){if(n.value=g,t.value=m,i&&i===h){i=null;return}k=y?m.position-y.position:0}else r(g);o.forEach(b=>{b(n.value,h,{delta:k,type:qs.pop,direction:k?k>0?As.forward:As.back:As.unknown})})};function u(){i=n.value}function d(m){o.push(m);const g=()=>{const h=o.indexOf(m);h>-1&&o.splice(h,1)};return a.push(g),g}function p(){const{history:m}=window;!m.state||m.replaceState(Ee({},m.state,{scroll:eo()}),"")}function f(){for(const m of a)m();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p),{pauseListeners:u,listen:d,destroy:f}}function xl(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?eo():null}}function t0(e){const{history:t,location:n}=window,r={value:Nu(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(u,d,p){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+u:Jg()+e+u;try{t[p?"replaceState":"pushState"](d,"",m),o.value=d}catch(g){console.error(g),n[p?"replace":"assign"](m)}}function i(u,d){const p=Ee({},t.state,xl(o.value.back,u,o.value.forward,!0),d,{position:o.value.position});a(u,p,!0),r.value=u}function l(u,d){const p=Ee({},o.value,t.state,{forward:u,scroll:eo()});a(p.current,p,!0);const f=Ee({},xl(r.value,u,null),{position:p.position+1},d);a(u,f,!1),r.value=u}return{location:r,state:o,push:l,replace:i}}function n0(e){e=zg(e);const t=t0(e),n=e0(e,t.state,t.location,t.replace);function r(a,i=!0){i||n.pauseListeners(),history.go(a)}const o=Ee({location:"",base:e,go:r,createHref:Kg.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function s0(e){return typeof e=="string"||e&&typeof e=="object"}function Bu(e){return typeof e=="string"||typeof e=="symbol"}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Du=Symbol("");var wl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wl||(wl={}));function ls(e,t){return Ee(new Error,{type:e,[Du]:!0},t)}function Gt(e,t){return e instanceof Error&&Du in e&&(t==null||!!(e.type&t))}const Cl="[^/]+?",r0={sensitive:!1,strict:!1,start:!0,end:!0},o0=/[.+*?^${}()[\]/\\]/g;function a0(e,t){const n=Ee({},r0,t),r=[];let o=n.start?"^":"";const a=[];for(const d of e){const p=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let f=0;f<d.length;f++){const m=d[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(o+="/"),o+=m.value.replace(o0,"\\$&"),g+=40;else if(m.type===1){const{value:h,repeatable:y,optional:k,regexp:b}=m;a.push({name:h,repeatable:y,optional:k});const S=b||Cl;if(S!==Cl){g+=10;try{new RegExp(`(${S})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${h}" (${S}): `+E.message)}}let T=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(T=k&&d.length<2?`(?:/${T})`:"/"+T),k&&(T+="?"),o+=T,g+=20,k&&(g+=-8),y&&(g+=-20),S===".*"&&(g+=-50)}p.push(g)}r.push(p)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(d){const p=d.match(i),f={};if(!p)return null;for(let m=1;m<p.length;m++){const g=p[m]||"",h=a[m-1];f[h.name]=g&&h.repeatable?g.split("/"):g}return f}function u(d){let p="",f=!1;for(const m of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const g of m)if(g.type===0)p+=g.value;else if(g.type===1){const{value:h,repeatable:y,optional:k}=g,b=h in d?d[h]:"";if(Mt(b)&&!y)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const S=Mt(b)?b.join("/"):b;if(!S)if(k)m.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);p+=S}}return p||"/"}return{re:i,score:r,keys:a,parse:l,stringify:u}}function i0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function l0(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=i0(r[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-r.length)===1){if(Tl(r))return 1;if(Tl(o))return-1}return o.length-r.length}function Tl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const c0={type:0,value:""},u0=/[a-zA-Z0-9_]/;function d0(e){if(!e)return[[]];if(e==="/")return[[c0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${d}": ${g}`)}let n=0,r=n;const o=[];let a;function i(){a&&o.push(a),a=[]}let l=0,u,d="",p="";function f(){!d||(n===0?a.push({type:0,value:d}):n===1||n===2||n===3?(a.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:d,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),d="")}function m(){d+=u}for(;l<e.length;){if(u=e[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(d&&f(),i()):u===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:u==="("?n=2:u0.test(u)?m():(f(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:n=3:p+=u;break;case 3:f(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),f(),i(),o}function p0(e,t,n){const r=a0(d0(e.path),n),o=Ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function f0(e,t){const n=[],r=new Map;t=El({strict:!1,end:!0,sensitive:!1},t);function o(p){return r.get(p)}function a(p,f,m){const g=!m,h=m0(p);h.aliasOf=m&&m.record;const y=El(t,p),k=[h];if("alias"in p){const T=typeof p.alias=="string"?[p.alias]:p.alias;for(const E of T)k.push(Ee({},h,{components:m?m.record.components:h.components,path:E,aliasOf:m?m.record:h}))}let b,S;for(const T of k){const{path:E}=T;if(f&&E[0]!=="/"){const L=f.record.path,F=L[L.length-1]==="/"?"":"/";T.path=f.record.path+(E&&F+E)}if(b=p0(T,f,y),m?m.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),g&&p.name&&!$l(b)&&i(p.name)),h.children){const L=h.children;for(let F=0;F<L.length;F++)a(L[F],b,m&&m.children[F])}m=m||b,u(b)}return S?()=>{i(S)}:Ps}function i(p){if(Bu(p)){const f=r.get(p);f&&(r.delete(p),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(p);f>-1&&(n.splice(f,1),p.record.name&&r.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function l(){return n}function u(p){let f=0;for(;f<n.length&&l0(p,n[f])>=0&&(p.record.path!==n[f].record.path||!Hu(p,n[f]));)f++;n.splice(f,0,p),p.record.name&&!$l(p)&&r.set(p.record.name,p)}function d(p,f){let m,g={},h,y;if("name"in p&&p.name){if(m=r.get(p.name),!m)throw ls(1,{location:p});y=m.record.name,g=Ee(Sl(f.params,m.keys.filter(S=>!S.optional).map(S=>S.name)),p.params&&Sl(p.params,m.keys.map(S=>S.name))),h=m.stringify(g)}else if("path"in p)h=p.path,m=n.find(S=>S.re.test(h)),m&&(g=m.parse(h),y=m.record.name);else{if(m=f.name?r.get(f.name):n.find(S=>S.re.test(f.path)),!m)throw ls(1,{location:p,currentLocation:f});y=m.record.name,g=Ee({},f.params,p.params),h=m.stringify(g)}const k=[];let b=m;for(;b;)k.unshift(b.record),b=b.parent;return{name:y,path:h,params:g,matched:k,meta:g0(k)}}return e.forEach(p=>a(p)),{addRoute:a,resolve:d,removeRoute:i,getRoutes:l,getRecordMatcher:o}}function Sl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function m0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:h0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function h0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function $l(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function g0(e){return e.reduce((t,n)=>Ee(t,n.meta),{})}function El(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Hu(e,t){return t.children.some(n=>n===e||Hu(e,n))}const Vu=/#/g,_0=/&/g,v0=/\//g,y0=/=/g,k0=/\?/g,Uu=/\+/g,b0=/%5B/g,x0=/%5D/g,Gu=/%5E/g,w0=/%60/g,qu=/%7B/g,C0=/%7C/g,zu=/%7D/g,T0=/%20/g;function Ga(e){return encodeURI(""+e).replace(C0,"|").replace(b0,"[").replace(x0,"]")}function S0(e){return Ga(e).replace(qu,"{").replace(zu,"}").replace(Gu,"^")}function Jo(e){return Ga(e).replace(Uu,"%2B").replace(T0,"+").replace(Vu,"%23").replace(_0,"%26").replace(w0,"`").replace(qu,"{").replace(zu,"}").replace(Gu,"^")}function $0(e){return Jo(e).replace(y0,"%3D")}function E0(e){return Ga(e).replace(Vu,"%23").replace(k0,"%3F")}function O0(e){return e==null?"":E0(e).replace(v0,"%2F")}function Ar(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function R0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(Uu," "),i=a.indexOf("="),l=Ar(i<0?a:a.slice(0,i)),u=i<0?null:Ar(a.slice(i+1));if(l in t){let d=t[l];Mt(d)||(d=t[l]=[d]),d.push(u)}else t[l]=u}return t}function Ol(e){let t="";for(let n in e){const r=e[n];if(n=$0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Mt(r)?r.map(a=>a&&Jo(a)):[r&&Jo(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function P0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Mt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const A0=Symbol(""),Rl=Symbol(""),qa=Symbol(""),Wu=Symbol(""),ea=Symbol("");function ks(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function sn(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,l)=>{const u=f=>{f===!1?l(ls(4,{from:n,to:t})):f instanceof Error?l(f):s0(f)?l(ls(2,{from:t,to:f})):(a&&r.enterCallbacks[o]===a&&typeof f=="function"&&a.push(f),i())},d=e.call(r&&r.instances[o],t,n,u);let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(f=>l(f))})}function go(e,t,n,r){const o=[];for(const a of e)for(const i in a.components){let l=a.components[i];if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(j0(l)){const d=(l.__vccOpts||l)[t];d&&o.push(sn(d,n,r,a,i))}else{let u=l();o.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));const p=Bg(d)?d.default:d;a.components[i]=p;const m=(p.__vccOpts||p)[t];return m&&sn(m,n,r,a,i)()}))}}return o}function j0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pl(e){const t=I(qa),n=I(Wu),r=R(()=>t.resolve(w(e.to))),o=R(()=>{const{matched:u}=r.value,{length:d}=u,p=u[d-1],f=n.matched;if(!p||!f.length)return-1;const m=f.findIndex(is.bind(null,p));if(m>-1)return m;const g=Al(u[d-2]);return d>1&&Al(p)===g&&f[f.length-1].path!==g?f.findIndex(is.bind(null,u[d-2])):m}),a=R(()=>o.value>-1&&F0(n.params,r.value.params)),i=R(()=>o.value>-1&&o.value===n.matched.length-1&&Fu(n.params,r.value.params));function l(u={}){return L0(u)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(Ps):Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:a,isExactActive:i,navigate:l}}const M0=Oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pl,setup(e,{slots:t}){const n=Fe(Pl(e)),{options:r}=I(qa),o=R(()=>({[jl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:ht("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),I0=M0;function L0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function F0(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Mt(o)||o.length!==r.length||r.some((a,i)=>a!==o[i]))return!1}return!0}function Al(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jl=(e,t,n)=>e!=null?e:t!=null?t:n,N0=Oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=I(ea),o=R(()=>e.route||r.value),a=I(Rl,0),i=R(()=>{let d=w(a);const{matched:p}=o.value;let f;for(;(f=p[d])&&!f.components;)d++;return d}),l=R(()=>o.value.matched[i.value]);mt(Rl,R(()=>i.value+1)),mt(A0,l),mt(ea,o);const u=D();return he(()=>[u.value,l.value,e.name],([d,p,f],[m,g,h])=>{p&&(p.instances[f]=d,g&&g!==p&&d&&d===m&&(p.leaveGuards.size||(p.leaveGuards=g.leaveGuards),p.updateGuards.size||(p.updateGuards=g.updateGuards))),d&&p&&(!g||!is(p,g)||!m)&&(p.enterCallbacks[f]||[]).forEach(y=>y(d))},{flush:"post"}),()=>{const d=o.value,p=e.name,f=l.value,m=f&&f.components[p];if(!m)return Ml(n.default,{Component:m,route:d});const g=f.props[p],h=g?g===!0?d.params:typeof g=="function"?g(d):g:null,k=ht(m,Ee({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[p]=null)},ref:u}));return Ml(n.default,{Component:k,route:d})||k}}});function Ml(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const B0=N0;function D0(e){const t=f0(e.routes,e),n=e.parseQuery||R0,r=e.stringifyQuery||Ol,o=e.history,a=ks(),i=ks(),l=ks(),u=Ut(tn);let d=tn;Wn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=mo.bind(null,P=>""+P),f=mo.bind(null,O0),m=mo.bind(null,Ar);function g(P,W){let q,Q;return Bu(P)?(q=t.getRecordMatcher(P),Q=W):Q=P,t.addRoute(Q,q)}function h(P){const W=t.getRecordMatcher(P);W&&t.removeRoute(W)}function y(){return t.getRoutes().map(P=>P.record)}function k(P){return!!t.getRecordMatcher(P)}function b(P,W){if(W=Ee({},W||u.value),typeof P=="string"){const _=ho(n,P,W.path),v=t.resolve({path:_.path},W),$=o.createHref(_.fullPath);return Ee(_,v,{params:m(v.params),hash:Ar(_.hash),redirectedFrom:void 0,href:$})}let q;if("path"in P)q=Ee({},P,{path:ho(n,P.path,W.path).path});else{const _=Ee({},P.params);for(const v in _)_[v]==null&&delete _[v];q=Ee({},P,{params:f(P.params)}),W.params=f(W.params)}const Q=t.resolve(q,W),ve=P.hash||"";Q.params=p(m(Q.params));const xe=Vg(r,Ee({},P,{hash:S0(ve),path:Q.path})),le=o.createHref(xe);return Ee({fullPath:xe,hash:ve,query:r===Ol?P0(P.query):P.query||{}},Q,{redirectedFrom:void 0,href:le})}function S(P){return typeof P=="string"?ho(n,P,u.value.path):Ee({},P)}function T(P,W){if(d!==P)return ls(8,{from:W,to:P})}function E(P){return H(P)}function L(P){return E(Ee(S(P),{replace:!0}))}function F(P){const W=P.matched[P.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let Q=typeof q=="function"?q(P):q;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=S(Q):{path:Q},Q.params={}),Ee({query:P.query,hash:P.hash,params:"path"in Q?{}:P.params},Q)}}function H(P,W){const q=d=b(P),Q=u.value,ve=P.state,xe=P.force,le=P.replace===!0,_=F(q);if(_)return H(Ee(S(_),{state:typeof _=="object"?Ee({},ve,_.state):ve,force:xe,replace:le}),W||q);const v=q;v.redirectedFrom=W;let $;return!xe&&Ug(r,Q,q)&&($=ls(16,{to:v,from:Q}),$e(Q,Q,!0,!1)),($?Promise.resolve($):me(v,Q)).catch(O=>Gt(O)?Gt(O,2)?O:_e(O):Y(O,v,Q)).then(O=>{if(O){if(Gt(O,2))return H(Ee({replace:le},S(O.to),{state:typeof O.to=="object"?Ee({},ve,O.to.state):ve,force:xe}),W||v)}else O=be(v,Q,!0,le,ve);return ge(v,Q,O),O})}function J(P,W){const q=T(P,W);return q?Promise.reject(q):Promise.resolve()}function me(P,W){let q;const[Q,ve,xe]=H0(P,W);q=go(Q.reverse(),"beforeRouteLeave",P,W);for(const _ of Q)_.leaveGuards.forEach(v=>{q.push(sn(v,P,W))});const le=J.bind(null,P,W);return q.push(le),Vn(q).then(()=>{q=[];for(const _ of a.list())q.push(sn(_,P,W));return q.push(le),Vn(q)}).then(()=>{q=go(ve,"beforeRouteUpdate",P,W);for(const _ of ve)_.updateGuards.forEach(v=>{q.push(sn(v,P,W))});return q.push(le),Vn(q)}).then(()=>{q=[];for(const _ of P.matched)if(_.beforeEnter&&!W.matched.includes(_))if(Mt(_.beforeEnter))for(const v of _.beforeEnter)q.push(sn(v,P,W));else q.push(sn(_.beforeEnter,P,W));return q.push(le),Vn(q)}).then(()=>(P.matched.forEach(_=>_.enterCallbacks={}),q=go(xe,"beforeRouteEnter",P,W),q.push(le),Vn(q))).then(()=>{q=[];for(const _ of i.list())q.push(sn(_,P,W));return q.push(le),Vn(q)}).catch(_=>Gt(_,8)?_:Promise.reject(_))}function ge(P,W,q){for(const Q of l.list())Q(P,W,q)}function be(P,W,q,Q,ve){const xe=T(P,W);if(xe)return xe;const le=W===tn,_=Wn?history.state:{};q&&(Q||le?o.replace(P.fullPath,Ee({scroll:le&&_&&_.scroll},ve)):o.push(P.fullPath,ve)),u.value=P,$e(P,W,q,le),_e()}let Ke;function Ge(){Ke||(Ke=o.listen((P,W,q)=>{if(!Dn.listening)return;const Q=b(P),ve=F(Q);if(ve){H(Ee(ve,{replace:!0}),Q).catch(Ps);return}d=Q;const xe=u.value;Wn&&Qg(bl(xe.fullPath,q.delta),eo()),me(Q,xe).catch(le=>Gt(le,12)?le:Gt(le,2)?(H(le.to,Q).then(_=>{Gt(_,20)&&!q.delta&&q.type===qs.pop&&o.go(-1,!1)}).catch(Ps),Promise.reject()):(q.delta&&o.go(-q.delta,!1),Y(le,Q,xe))).then(le=>{le=le||be(Q,xe,!1),le&&(q.delta&&!Gt(le,8)?o.go(-q.delta,!1):q.type===qs.pop&&Gt(le,20)&&o.go(-1,!1)),ge(Q,xe,le)}).catch(Ps)}))}let Be=ks(),Ie=ks(),Le;function Y(P,W,q){_e(P);const Q=Ie.list();return Q.length?Q.forEach(ve=>ve(P,W,q)):console.error(P),Promise.reject(P)}function se(){return Le&&u.value!==tn?Promise.resolve():new Promise((P,W)=>{Be.add([P,W])})}function _e(P){return Le||(Le=!P,Ge(),Be.list().forEach(([W,q])=>P?q(P):W()),Be.reset()),P}function $e(P,W,q,Q){const{scrollBehavior:ve}=e;if(!Wn||!ve)return Promise.resolve();const xe=!q&&Xg(bl(P.fullPath,0))||(Q||!q)&&history.state&&history.state.scroll||null;return Je().then(()=>ve(P,W,xe)).then(le=>le&&Zg(le)).catch(le=>Y(le,P,W))}const st=P=>o.go(P);let Ve;const Jt=new Set,Dn={currentRoute:u,listening:!0,addRoute:g,removeRoute:h,hasRoute:k,getRoutes:y,resolve:b,options:e,push:E,replace:L,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:a.add,beforeResolve:i.add,afterEach:l.add,onError:Ie.add,isReady:se,install(P){const W=this;P.component("RouterLink",I0),P.component("RouterView",B0),P.config.globalProperties.$router=W,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>w(u)}),Wn&&!Ve&&u.value===tn&&(Ve=!0,E(o.location).catch(ve=>{}));const q={};for(const ve in tn)q[ve]=R(()=>u.value[ve]);P.provide(qa,W),P.provide(Wu,Fe(q)),P.provide(ea,u);const Q=P.unmount;Jt.add(P),P.unmount=function(){Jt.delete(P),Jt.size<1&&(d=tn,Ke&&Ke(),Ke=null,u.value=tn,Ve=!1,Le=!1),Q()}}};return Dn}function Vn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function H0(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const l=t.matched[i];l&&(e.matched.find(d=>is(d,l))?r.push(l):n.push(l));const u=e.matched[i];u&&(t.matched.find(d=>is(d,u))||o.push(u))}return[n,r,o]}const _o=D(!1),js=D(!1),Yn=D(!1),V0=D(!0),ta=eg({xs:460,...Yh}),An=Ng(),Ku=$g(),U0=R(()=>An.height.value-An.width.value/ln>180),Yu=Cg(jt?document.body:null),ns=Kh(),G0=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ns.value)==null?void 0:e.tagName)||"")||((t=ns.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),q0=R(()=>{var e;return["BUTTON","A"].includes(((e=ns.value)==null?void 0:e.tagName)||"")});It("slidev-camera","default");It("slidev-mic","default");const vr=It("slidev-scale",0),ot=It("slidev-show-overview",!1),vo=It("slidev-presenter-cursor",!0),Il=It("slidev-show-editor",!1);It("slidev-editor-width",jt?window.innerWidth*.4:100);const Zu=$u(ot);function Ll(e,t,n,r=o=>o){return e*r(.5-t*(.5-n))}function z0(e){return[-e[0],-e[1]]}function Ct(e,t){return[e[0]+t[0],e[1]+t[1]]}function kt(e,t){return[e[0]-t[0],e[1]-t[1]]}function wt(e,t){return[e[0]*t,e[1]*t]}function W0(e,t){return[e[0]/t,e[1]/t]}function bs(e){return[e[1],-e[0]]}function Fl(e,t){return e[0]*t[0]+e[1]*t[1]}function K0(e,t){return e[0]===t[0]&&e[1]===t[1]}function Y0(e){return Math.hypot(e[0],e[1])}function Z0(e){return e[0]*e[0]+e[1]*e[1]}function Nl(e,t){return Z0(kt(e,t))}function Qu(e){return W0(e,Y0(e))}function Q0(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function xs(e,t,n){let r=Math.sin(n),o=Math.cos(n),a=e[0]-t[0],i=e[1]-t[1],l=a*o-i*r,u=a*r+i*o;return[l+t[0],u+t[1]]}function na(e,t,n){return Ct(e,wt(kt(t,e),n))}function Bl(e,t,n){return Ct(e,wt(t,n))}var{min:Un,PI:X0}=Math,Dl=.275,ws=X0+1e-4;function J0(e,t={}){let{size:n=16,smoothing:r=.5,thinning:o=.5,simulatePressure:a=!0,easing:i=Y=>Y,start:l={},end:u={},last:d=!1}=t,{cap:p=!0,easing:f=Y=>Y*(2-Y)}=l,{cap:m=!0,easing:g=Y=>--Y*Y*Y+1}=u;if(e.length===0||n<=0)return[];let h=e[e.length-1].runningLength,y=l.taper===!1?0:l.taper===!0?Math.max(n,h):l.taper,k=u.taper===!1?0:u.taper===!0?Math.max(n,h):u.taper,b=Math.pow(n*r,2),S=[],T=[],E=e.slice(0,10).reduce((Y,se)=>{let _e=se.pressure;if(a){let $e=Un(1,se.distance/n),st=Un(1,1-$e);_e=Un(1,Y+(st-Y)*($e*Dl))}return(Y+_e)/2},e[0].pressure),L=Ll(n,o,e[e.length-1].pressure,i),F,H=e[0].vector,J=e[0].point,me=J,ge=J,be=me,Ke=!1;for(let Y=0;Y<e.length;Y++){let{pressure:se}=e[Y],{point:_e,vector:$e,distance:st,runningLength:Ve}=e[Y];if(Y<e.length-1&&h-Ve<3)continue;if(o){if(a){let xe=Un(1,st/n),le=Un(1,1-xe);se=Un(1,E+(le-E)*(xe*Dl))}L=Ll(n,o,se,i)}else L=n/2;F===void 0&&(F=L);let Jt=Ve<y?f(Ve/y):1,Dn=h-Ve<k?g((h-Ve)/k):1;L=Math.max(.01,L*Math.min(Jt,Dn));let P=(Y<e.length-1?e[Y+1]:e[Y]).vector,W=Y<e.length-1?Fl($e,P):1,q=Fl($e,H)<0&&!Ke,Q=W!==null&&W<0;if(q||Q){let xe=wt(bs(H),L);for(let le=1/13,_=0;_<=1;_+=le)ge=xs(kt(_e,xe),_e,ws*_),S.push(ge),be=xs(Ct(_e,xe),_e,ws*-_),T.push(be);J=ge,me=be,Q&&(Ke=!0);continue}if(Ke=!1,Y===e.length-1){let xe=wt(bs($e),L);S.push(kt(_e,xe)),T.push(Ct(_e,xe));continue}let ve=wt(bs(na(P,$e,W)),L);ge=kt(_e,ve),(Y<=1||Nl(J,ge)>b)&&(S.push(ge),J=ge),be=Ct(_e,ve),(Y<=1||Nl(me,be)>b)&&(T.push(be),me=be),E=se,H=$e}let Ge=e[0].point.slice(0,2),Be=e.length>1?e[e.length-1].point.slice(0,2):Ct(e[0].point,[1,1]),Ie=[],Le=[];if(e.length===1){if(!(y||k)||d){let Y=Bl(Ge,Qu(bs(kt(Ge,Be))),-(F||L)),se=[];for(let _e=1/13,$e=_e;$e<=1;$e+=_e)se.push(xs(Y,Ge,ws*2*$e));return se}}else{if(!(y||k&&e.length===1))if(p)for(let se=1/13,_e=se;_e<=1;_e+=se){let $e=xs(T[0],Ge,ws*_e);Ie.push($e)}else{let se=kt(S[0],T[0]),_e=wt(se,.5),$e=wt(se,.51);Ie.push(kt(Ge,_e),kt(Ge,$e),Ct(Ge,$e),Ct(Ge,_e))}let Y=bs(z0(e[e.length-1].vector));if(k||y&&e.length===1)Le.push(Be);else if(m){let se=Bl(Be,Y,L);for(let _e=1/29,$e=_e;$e<1;$e+=_e)Le.push(xs(se,Be,ws*3*$e))}else Le.push(Ct(Be,wt(Y,L)),Ct(Be,wt(Y,L*.99)),kt(Be,wt(Y,L*.99)),kt(Be,wt(Y,L)))}return S.concat(Le,T.reverse(),Ie)}function e_(e,t={}){var n;let{streamline:r=.5,size:o=16,last:a=!1}=t;if(e.length===0)return[];let i=.15+(1-r)*.85,l=Array.isArray(e[0])?e:e.map(({x:g,y:h,pressure:y=.5})=>[g,h,y]);if(l.length===2){let g=l[1];l=l.slice(0,-1);for(let h=1;h<5;h++)l.push(na(l[0],g,h/4))}l.length===1&&(l=[...l,[...Ct(l[0],[1,1]),...l[0].slice(2)]]);let u=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,p=0,f=u[0],m=l.length-1;for(let g=1;g<l.length;g++){let h=a&&g===m?l[g].slice(0,2):na(f.point,l[g],i);if(K0(f.point,h))continue;let y=Q0(h,f.point);if(p+=y,g<m&&!d){if(p<o)continue;d=!0}f={point:h,pressure:l[g][2]>=0?l[g][2]:.5,vector:Qu(kt(f.point,h)),distance:y,runningLength:p},u.push(f)}return u[0].vector=((n=u[1])==null?void 0:n.vector)||[0,0],u}function t_(e,t={}){return J0(e_(e,t),t)}var n_=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let r=0,o=n.length;r<o;r++)n[r](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(o=>t!==o)}}});function jr(e,t){return e-t}function s_(e){return e<0?-1:1}function Mr(e){return[Math.abs(e),s_(e)]}function Xu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var r_=2,Wt=r_,ms=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;var t;const n=this.drauu.el,r=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*r,y:(e.pageY-a.top)*r,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const i=a.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:i.x*r,y:i.y*r,pressure:e.pressure}}}createElement(e,t){var o;const n=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Wt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},o_=class extends ms{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=t_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((r,[o,a],i,l)=>{const[u,d]=l[(i+1)%l.length];return r.push(o,a,(o+u)/2,(a+d)/2),r},["M",...t[0],"Q"]);return n.push("Z"),n.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},a_=class extends ms{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Mr(e.x-this.start.x),[r,o]=Mr(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,r);t=a,r=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",r);else{const[a,i]=[this.start.x,this.start.x+t*n].sort(jr),[l,u]=[this.start.y,this.start.y+r*o].sort(jr);this.attr("cx",(a+i)/2),this.attr("cy",(l+u)/2),this.attr("rx",(i-a)/2),this.attr("ry",(u-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Ju(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(o),n.appendChild(r),n}var i_=class extends ms{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Xu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Ju(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const r=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let a=r/o;a=Math.round(a),Math.abs(a)<=1?(t=this.start.x+o*a,n=this.start.y+o):(t=this.start.x+r,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},l_=class extends ms{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Mr(e.x-this.start.x),[r,o]=Mr(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(t,r);t=a,r=a}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-r),this.attr("width",t*2),this.attr("height",r*2);else{const[a,i]=[this.start.x,this.start.x+t*n].sort(jr),[l,u]=[this.start.y,this.start.y+r*o].sort(jr);this.attr("x",a),this.attr("y",l),this.attr("width",i-a),this.attr("height",u-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function c_(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function u_(e,t,n){let r=t.x,o=t.y,a=n.x-r,i=n.y-o;if(a!==0||i!==0){const l=((e.x-r)*a+(e.y-o)*i)/(a*a+i*i);l>1?(r=n.x,o=n.y):l>0&&(r+=a*l,o+=i*l)}return a=e.x-r,i=e.y-o,a*a+i*i}function d_(e,t){let n=e[0];const r=[n];let o;for(let a=1,i=e.length;a<i;a++)o=e[a],c_(o,n)>t&&(r.push(o),n=o);return n!==o&&o&&r.push(o),r}function sa(e,t,n,r,o){let a=r,i=0;for(let l=t+1;l<n;l++){const u=u_(e[l],e[t],e[n]);u>a&&(i=l,a=u)}a>r&&(i-t>1&&sa(e,t,i,r,o),o.push(e[i]),n-i>1&&sa(e,i,n,r,o))}function p_(e,t){const n=e.length-1,r=[e[0]];return sa(e,0,n,t,r),r.push(e[n]),r}function Hl(e,t,n=!1){if(e.length<=2)return e;const r=t!==void 0?t*t:1;return e=n?e:d_(e,r),e=p_(e,r),e}var f_=class extends ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Xu();const t=Ju(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Hl(this.points,1,!0),this.count=0),this.attr("d",Ul(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ul(Hl(this.points,1,!0))),!e.getTotalLength()))}};function m_(e,t){const n=t.x-e.x,r=t.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}function Vl(e,t,n,r){const o=t||e,a=n||e,i=.2,l=m_(o,a),u=l.angle+(r?Math.PI:0),d=l.length*i,p=e.x+Math.cos(u)*d,f=e.y+Math.sin(u)*d;return{x:p,y:f}}function h_(e,t,n){const r=Vl(n[t-1],n[t-2],e),o=Vl(e,n[t-1],n[t+1],!0);return`C ${r.x.toFixed(Wt)},${r.y.toFixed(Wt)} ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)} ${e.x.toFixed(Wt)},${e.y.toFixed(Wt)}`}function Ul(e){return e.reduce((t,n,r,o)=>r===0?`M ${n.x.toFixed(Wt)},${n.y.toFixed(Wt)}`:`${t} ${h_(n,r,o)}`,"")}var g_=class extends ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,r)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const a=n[o];if(a.getTotalLength){const i=a.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const u=a.getPointAtLength(i*l/this.pathSubFactor),d=a.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:d.x,y1:u.y,y2:d.y,segment:l,element:r||a})}}else a.children&&t(a.children,a)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,r)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,r=e.x2,o=t.x1,a=t.x2,i=e.y1,l=e.y2,u=t.y1,d=t.y2,p=(n-r)*(u-d)-(i-l)*(o-a),f=(n*l-i*r)*(o-a)-(n-r)*(o*d-u*a),m=(n*l-i*r)*(u-d)-(i-l)*(o*d-u*a),g=(h,y,k)=>h>=y&&h<=k?!0:h>=k&&h<=y;if(p===0)return!1;{const h={x:f/p,y:m/p};return g(h.x,n,r)&&g(h.y,i,l)&&g(h.x,o,a)&&g(h.y,u,d)}}};function __(e){return{draw:new f_(e),stylus:new o_(e),line:new i_(e),rectangle:new l_(e),ellipse:new a_(e),eraseLine:new g_(e)}}var v_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=n_(),this._models=__(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,r=this.eventStart.bind(this),o=this.eventMove.bind(this),a=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function y_(e){return new v_(e)}const ra=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ht=It("slidev-drawing-enabled",!1),jT=It("slidev-drawing-pinned",!1),k_=D(!1),b_=D(!1),x_=D(!1),zs=D(!1),Sn=Gm(It("slidev-drawing-brush",{color:ra[0],size:4,mode:"stylus"})),Gl=D("stylus"),ed=R(()=>Ce.drawings.syncAll||Bt.value);let Ws=!1;const Cs=R({get(){return Gl.value},set(e){Gl.value=e,e==="arrow"?(Sn.mode="line",Sn.arrowEnd=!0):(Sn.mode=e,Sn.arrowEnd=!1)}}),w_=Fe({brush:Sn,acceptsInputTypes:R(()=>Ht.value?void 0:["pen"]),coordinateTransform:!1}),at=qr(y_(w_));function C_(){at.clear(),ed.value&&Lu(We.value,"")}function td(){var e;b_.value=at.canRedo(),k_.value=at.canUndo(),x_.value=!!((e=at.el)!=null&&e.children.length)}function T_(e){Ws=!0;const t=Pr[e||We.value];t!=null?at.load(t):at.clear(),Ws=!1}at.on("changed",()=>{if(td(),!Ws){const e=at.dump(),t=We.value;(Pr[t]||"")!==e&&ed.value&&Lu(t,at.dump())}});Dh(e=>{Ws=!0,e[We.value]!=null&&at.load(e[We.value]||""),Ws=!1,td()});Je(()=>{he(We,()=>{!at.mounted||T_()},{immediate:!0})});at.on("start",()=>zs.value=!0);at.on("end",()=>zs.value=!1);window.addEventListener("keydown",e=>{if(!Ht.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?at.redo():at.undo():e.code==="Escape"?Ht.value=!1:e.code==="KeyL"&&t?Cs.value="line":e.code==="KeyA"&&t?Cs.value="arrow":e.code==="KeyS"&&t?Cs.value="stylus":e.code==="KeyR"&&t?Cs.value="rectangle":e.code==="KeyE"&&t?Cs.value="ellipse":e.code==="KeyC"&&t?C_():e.code.startsWith("Digit")&&t&&+e.code[5]<=ra.length?Sn.color=ra[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function qe(...e){return R(()=>e.every(t=>Qe(t)))}function dt(e){return R(()=>!Qe(e))}const ql=ug(),yo=It("slidev-color-schema","auto"),oa=R(()=>Ce.colorSchema!=="auto"),za=R({get(){return oa.value?Ce.colorSchema==="dark":yo.value==="auto"?ql.value:yo.value==="dark"},set(e){oa.value||(yo.value=e===ql.value?"auto":e?"dark":"light")}}),nd=$u(za);jt&&he(za,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const yr=D(1),kr=R(()=>ze.length-1),gt=D(0),Wa=D(0);function S_(){gt.value>yr.value&&(gt.value-=1)}function $_(){gt.value<kr.value&&(gt.value+=1)}function E_(){if(gt.value>yr.value){let e=gt.value-Wa.value;e<yr.value&&(e=yr.value),gt.value=e}}function O_(){if(gt.value<kr.value){let e=gt.value+Wa.value;e>kr.value&&(e=kr.value),gt.value=e}}function R_(){const{escape:e,space:t,shift:n,left:r,right:o,up:a,down:i,enter:l,d:u,g:d,o:p}=Ku;let f=[{name:"next_space",key:qe(t,dt(n)),fn:cn,autoRepeat:!0},{name:"prev_space",key:qe(t,n),fn:un,autoRepeat:!0},{name:"next_right",key:qe(o,dt(n),dt(ot)),fn:cn,autoRepeat:!0},{name:"prev_left",key:qe(r,dt(n),dt(ot)),fn:un,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:cn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:un,autoRepeat:!0},{name:"next_down",key:qe(i,dt(ot)),fn:Ys,autoRepeat:!0},{name:"prev_up",key:qe(a,dt(ot)),fn:()=>Zs(!1),autoRepeat:!0},{name:"next_shift",key:qe(o,n),fn:Ys,autoRepeat:!0},{name:"prev_shift",key:qe(r,n),fn:()=>Zs(!1),autoRepeat:!0},{name:"toggle_dark",key:qe(u,dt(Ht)),fn:nd},{name:"toggle_overview",key:qe(p,dt(Ht)),fn:Zu},{name:"hide_overview",key:qe(e,dt(Ht)),fn:()=>ot.value=!1},{name:"goto",key:qe(d,dt(Ht)),fn:()=>Yn.value=!Yn.value},{name:"next_overview",key:qe(o,ot),fn:$_},{name:"prev_overview",key:qe(r,ot),fn:S_},{name:"up_overview",key:qe(a,ot),fn:E_},{name:"down_overview",key:qe(i,ot),fn:O_},{name:"goto_from_overview",key:qe(l,ot),fn:()=>{cs(gt.value),ot.value=!1}}];const m=new Set(f.map(h=>h.name));if(f.filter(h=>h.name&&m.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return f}const sd=qe(dt(G0),dt(q0),V0);function P_(e,t,n=!1){typeof e=="string"&&(e=Ku[e]);const r=qe(e,sd);let o=0,a;const i=()=>{if(clearTimeout(a),!r.value){o=0;return}n&&(a=setTimeout(i,Math.max(1e3-o*250,150)),o++),t()};return he(r,i,{flush:"sync"})}function A_(e,t){return Wh(e,n=>{!sd.value||n.repeat||t()})}function j_(){const e=R_();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&P_(n.key,n.fn,n.autoRepeat)}),A_("f",()=>Yu.toggle())}const M_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I_=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),L_=[I_];function F_(e,t){return C(),U("svg",M_,L_)}const N_={name:"carbon-close",render:F_};function Ka(e){var n,r;const t=(r=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:r.no;return t!=null?`slidev-page-${t}`:""}const rd=Oe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;I(G);const n=D(),r=wg(n),o=R(()=>t.width?t.width:r.width.value),a=R(()=>t.width?t.width/ln:r.height.value);t.width&&ps(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${a.value}px`)});const i=R(()=>o.value/a.value),l=R(()=>t.scale?t.scale:i.value<ln?o.value/Pn:a.value*ln/Pn),u=R(()=>({height:`${ju}px`,width:`${Pn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),d=R(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mt(Au,l),(p,f)=>(C(),U("div",{id:"slide-container",ref_key:"root",ref:n,class:De(w(d))},[s("div",{id:"slide-content",style:X(w(u))},[At(p.$slots,"default")],4),At(p.$slots,"controls")],2))}});const Ya=Oe({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Dt(e,"clicks",t),r=Dt(e,"clicksElements",t),o=Dt(e,"clicksDisabled",t),a=Dt(e,"clicksOrderMap",t);r.value.length=0,mt($h,e.route),mt(Eh,e.context),mt(Os,n),mt(Rs,o),mt(xn,r),mt(Ko,a)},render(){var e,t;return this.$props.is?ht(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),B_=["innerHTML"],D_=Oe({__name:"DrawingPreview",props:{page:null},setup(e){return I(G),(t,n)=>w(Pr)[e.page]?(C(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Pr)[e.page]},null,8,B_)):ue("v-if",!0)}}),H_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},V_=["onClick"],U_=Oe({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;I(G);const r=Dt(n,"modelValue",t);function o(){r.value=!1}function a(g){cs(g),o()}function i(g){return g===gt.value}const l=ta.smaller("xs"),u=ta.smaller("sm"),d=4*16*2,p=2*16,f=R(()=>l.value?An.width.value-d:u.value?(An.width.value-d-p)/2:300),m=R(()=>Math.floor((An.width.value-d)/(f.value+p)));return ps(()=>{gt.value=We.value,Wa.value=m.value}),(g,h)=>{const y=N_;return C(),U(we,null,[Na(s("div",H_,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:X(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(C(!0),U(we,null,Ln(w(ze).slice(0,-1),(k,b)=>(C(),U("div",{key:k.path,class:"relative"},[s("div",{class:De(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(b+1)}]),onClick:S=>a(+k.path)},[(C(),z(rd,{key:k.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:A(()=>[x(w(Ya),{is:k==null?void 0:k.component,"clicks-disabled":!0,class:De(w(Ka)(k)),route:k,context:"overview"},null,8,["is","class","route"]),x(D_,{page:+k.path},null,8,["page"])]),_:2},1032,["width"]))],10,V_),s("div",{class:"absolute top-0 opacity-50",style:X(`left: ${w(f)+5}px`)},Et(b+1),5)]))),128))],4)],512),[[xu,w(r)]]),w(r)?(C(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[x(y)])):ue("v-if",!0)],64)}}});const G_="/slides-grid/assets/logo.b72bde5d.png",q_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},z_=Oe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(G);const r=Dt(n,"modelValue",t);function o(){r.value=!1}return(a,i)=>(C(),z(ou,null,[w(r)?(C(),U("div",q_,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>o())}),s("div",{class:De(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[At(a.$slots,"default")],2)])):ue("v-if",!0)],1024))}}),W_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},K_=["innerHTML"],Y_=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:G_,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),c("dev ")])])],-1),Z_=Oe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(G);const r=Dt(n,"modelValue",t),o=R(()=>typeof Ce.info=="string");return(a,i)=>(C(),z(z_,{modelValue:w(r),"onUpdate:modelValue":i[0]||(i[0]=l=>Se(r)?r.value=l:null),class:"px-6 py-4"},{default:A(()=>[s("div",W_,[w(o)?(C(),U("div",{key:0,class:"mb-4",innerHTML:w(Ce).info},null,8,K_)):ue("v-if",!0),Y_])]),_:1},8,["modelValue"]))}});const Q_=["disabled","onKeydown"],X_=Oe({__name:"Goto",setup(e){I(G);const t=D(),n=D(""),r=R(()=>{if(n.value.startsWith("/"))return!!ze.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=_d.value}});function o(){r.value&&(n.value.startsWith("/")?cs(n.value.substring(1)):cs(+n.value)),a()}function a(){Yn.value=!1}return he(Yn,async i=>{var l,u;i?(await Je(),n.value="",(l=t.value)==null||l.focus()):(u=t.value)==null||u.blur()}),he(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,l)=>(C(),U("div",{id:"slidev-goto-dialog",class:De(["fixed right-5 bg-main transform transition-all",w(Yn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Na(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"text",disabled:!w(Yn),class:De(["outline-none bg-transparent",{"text-red-400":!w(r)&&n.value}]),placeholder:"Goto...",onKeydown:[Ki(o,["enter"]),Ki(a,["escape"])],onBlur:a},null,42,Q_),[[Rm,n.value]])],2))}}),J_=Oe({__name:"Controls",setup(e){I(G);const t=Ut(),n=Ut();return(r,o)=>(C(),U(we,null,[x(U_,{modelValue:w(ot),"onUpdate:modelValue":o[0]||(o[0]=a=>Se(ot)?ot.value=a:null)},null,8,["modelValue"]),x(X_),w(t)?(C(),z(w(t),{key:0})):ue("v-if",!0),w(n)?(C(),z(w(n),{key:1,modelValue:w(_o),"onUpdate:modelValue":o[1]||(o[1]=a=>Se(_o)?_o.value=a:null)},null,8,["modelValue"])):ue("v-if",!0),w(Ce).info?(C(),z(Z_,{key:2,modelValue:w(js),"onUpdate:modelValue":o[2]||(o[2]=a=>Se(js)?js.value=a:null)},null,8,["modelValue"])):ue("v-if",!0)],64))}}),e1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),n1=[t1];function s1(e,t){return C(),U("svg",e1,n1)}const r1={name:"carbon-settings-adjust",render:s1},o1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a1=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),i1=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),l1=[a1,i1];function c1(e,t){return C(),U("svg",o1,l1)}const u1={name:"carbon-information",render:c1},d1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p1=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),f1=[p1];function m1(e,t){return C(),U("svg",d1,f1)}const h1={name:"carbon-download",render:m1},g1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_1=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),v1=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),y1=[_1,v1];function k1(e,t){return C(),U("svg",g1,y1)}const b1={name:"carbon-user-speaker",render:k1},x1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w1=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),C1=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),T1=[w1,C1];function S1(e,t){return C(),U("svg",x1,T1)}const $1={name:"carbon-presentation-file",render:S1},E1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O1=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),R1=[O1];function P1(e,t){return C(),U("svg",E1,R1)}const A1={name:"carbon-pen",render:P1},j1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},M1=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),I1=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),L1=[M1,I1];function F1(e,t){return C(),U("svg",j1,L1)}const N1={name:"ph-cursor-duotone",render:F1},B1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},D1=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),H1=[D1];function V1(e,t){return C(),U("svg",B1,H1)}const od={name:"ph-cursor-fill",render:V1},U1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G1=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),q1=[G1];function z1(e,t){return C(),U("svg",U1,q1)}const W1={name:"carbon-sun",render:z1},K1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y1=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Z1=[Y1];function Q1(e,t){return C(),U("svg",K1,Z1)}const X1={name:"carbon-moon",render:Q1},J1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ev=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),tv=[ev];function nv(e,t){return C(),U("svg",J1,tv)}const sv={name:"carbon-apps",render:nv},rv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ov=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),av=[ov];function iv(e,t){return C(),U("svg",rv,av)}const lv={name:"carbon-arrow-right",render:iv},cv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uv=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),dv=[uv];function pv(e,t){return C(),U("svg",cv,dv)}const fv={name:"carbon-arrow-left",render:pv},mv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hv=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),gv=[hv];function _v(e,t){return C(),U("svg",mv,gv)}const vv={name:"carbon-maximize",render:_v},yv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kv=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),bv=[kv];function xv(e,t){return C(),U("svg",yv,bv)}const wv={name:"carbon-minimize",render:xv},Cv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Sv=[Tv];function $v(e,t){return C(),U("svg",Cv,Sv)}const Ev={name:"carbon-checkmark",render:$v},Ov={class:"select-list"},Rv={class:"title"},Pv={class:"items"},Av=["onClick"],jv=Oe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;I(G);const r=Dt(n,"modelValue",t,{passive:!0});return(o,a)=>{const i=Ev;return C(),U("div",Ov,[s("div",Rv,Et(e.title),1),s("div",Pv,[(C(!0),U(we,null,Ln(e.items,l=>(C(),U("div",{key:l.value,class:De(["item",{active:w(r)===l.value}]),onClick:()=>{var u;r.value=l.value,(u=l.onClick)==null||u.call(l)}},[x(i,{class:De(["text-green-500",{"opacity-0":w(r)!==l.value}])},null,8,["class"]),c(" "+Et(l.display||l.value),1)],10,Av))),128))])])}}});const fn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Mv=fn(jv,[["__scopeId","data-v-ec81c1a8"]]),Iv={class:"text-sm"},Lv=Oe({__name:"Settings",setup(e){I(G);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,r)=>(C(),U("div",Iv,[x(Mv,{modelValue:w(vr),"onUpdate:modelValue":r[0]||(r[0]=o=>Se(vr)?vr.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Fv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Nv=Oe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;I(G);const r=Dt(n,"modelValue",t,{passive:!0}),o=D();return qh(o,()=>{r.value=!1}),(a,i)=>(C(),U("div",{ref_key:"el",ref:o,class:"flex relative"},[s("button",{class:De({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>r.value=!w(r))},[At(a.$slots,"button",{class:De({disabled:e.disabled})})],2),(C(),z(ou,null,[w(r)?(C(),U("div",Fv,[At(a.$slots,"menu")])):ue("v-if",!0)],1024))],512))}}),Bv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},pr={__name:"VerticalDivider",setup(e){return I(G),(t,n)=>(C(),U("div",Bv))}},Dv={render(){return[]}},Hv={class:"icon-btn"},Vv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Uv={class:"my-auto"},Gv={class:"opacity-50"},qv=Oe({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;I(G);const n=ta.smaller("md"),{isFullscreen:r,toggle:o}=Yu,a=R(()=>ia.value?`?password=${ia.value}`:""),i=R(()=>`/presenter/${We.value}${a.value}`),l=R(()=>`/${We.value}${a.value}`),u=D(),d=()=>{u.value&&ns.value&&u.value.contains(ns.value)&&ns.value.blur()},p=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Ut(),m=Ut();return fs(()=>import("./DrawingControls.327e474f.js"),["assets/DrawingControls.327e474f.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.025201c0.js"]).then(g=>m.value=g.default),(g,h)=>{const y=wv,k=vv,b=fv,S=lv,T=sv,E=X1,L=W1,F=od,H=N1,J=A1,me=$1,ge=Sr("RouterLink"),be=b1,Ke=h1,Ge=u1,Be=r1;return C(),U("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[s("div",{class:De(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(p)]),onMouseleave:d},[w(qt)?ue("v-if",!0):(C(),U("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...Ie)=>w(o)&&w(o)(...Ie))},[w(r)?(C(),z(y,{key:0})):(C(),z(k,{key:1}))])),s("button",{class:De(["icon-btn",{disabled:!w(nC)}]),onClick:h[1]||(h[1]=(...Ie)=>w(un)&&w(un)(...Ie))},[x(b)],2),s("button",{class:De(["icon-btn",{disabled:!w(tC)}]),title:"Next",onClick:h[2]||(h[2]=(...Ie)=>w(cn)&&w(cn)(...Ie))},[x(S)],2),w(qt)?ue("v-if",!0):(C(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Ie=>w(Zu)())},[x(T)])),w(oa)?ue("v-if",!0):(C(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Ie=>w(nd)())},[w(za)?(C(),z(E,{key:0})):(C(),z(L,{key:1}))])),x(pr),w(qt)?ue("v-if",!0):(C(),U(we,{key:3},[!w(Bt)&&!w(n)&&w(f)?(C(),U(we,{key:0},[x(w(f)),x(pr)],64)):ue("v-if",!0),w(Bt)?(C(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Ie=>vo.value=!w(vo))},[w(vo)?(C(),z(F,{key:0})):(C(),z(H,{key:1,class:"opacity-50"}))])):ue("v-if",!0)],64)),!w(Ce).drawings.presenterOnly&&!w(qt)?(C(),U(we,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Ie=>Ht.value=!w(Ht))},[x(J),w(Ht)?(C(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:X({background:w(Sn).color})},null,4)):ue("v-if",!0)]),x(pr)],64)):ue("v-if",!0),w(qt)?ue("v-if",!0):(C(),U(we,{key:5},[w(Bt)?(C(),z(ge,{key:0,to:w(l),class:"icon-btn",title:"Play Mode"},{default:A(()=>[x(me)]),_:1},8,["to"])):ue("v-if",!0),w(X2)?(C(),z(ge,{key:1,to:w(i),class:"icon-btn",title:"Presenter Mode"},{default:A(()=>[x(be)]),_:1},8,["to"])):ue("v-if",!0),ue("v-if",!0)],64)),(C(),U(we,{key:6},[w(Ce).download?(C(),U("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...Ie)=>w(la)&&w(la)(...Ie))},[x(Ke)])):ue("v-if",!0)],64)),!w(Bt)&&w(Ce).info&&!w(qt)?(C(),U("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=Ie=>js.value=!w(js))},[x(Ge)])):ue("v-if",!0),!w(Bt)&&!w(qt)?(C(),z(Nv,{key:8},{button:A(()=>[s("button",Hv,[x(Be)])]),menu:A(()=>[x(Lv)]),_:1})):ue("v-if",!0),w(qt)?ue("v-if",!0):(C(),z(pr,{key:9})),s("div",Vv,[s("div",Uv,[c(Et(w(We))+" ",1),s("span",Gv,"/ "+Et(w(_d)),1)])]),x(w(Dv))],34)],512)}}}),ad={render(){return[]}},id={render(){return[]}},zv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Wv=Oe({__name:"PresenterMouse",setup(e){return I(G),(t,n)=>{const r=od;return w(fo).cursor?(C(),U("div",zv,[x(r,{class:"absolute",style:X({left:`${w(fo).cursor.x}%`,top:`${w(fo).cursor.y}%`})},null,8,["style"])])):ue("v-if",!0)}}}),Kv=Oe({__name:"SlidesShow",props:{context:null},setup(e){I(G),he(ft,()=>{var n,r;((n=ft.value)==null?void 0:n.meta)&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),((r=ko.value)==null?void 0:r.meta)&&ko.value.meta.preload!==!1&&(ko.value.meta.__preloaded=!0)},{immediate:!0});const t=Ut();return fs(()=>import("./DrawingLayer.8d53cf2d.js"),[]).then(n=>t.value=n.default),(n,r)=>(C(),U(we,null,[ue(" Global Bottom "),x(w(id)),ue(" Slides "),(C(!0),U(we,null,Ln(w(ze),o=>{var a,i;return C(),U(we,{key:o.path},[((a=o.meta)==null?void 0:a.__preloaded)||o===w(ft)?Na((C(),z(w(Ya),{key:0,is:o==null?void 0:o.component,clicks:o===w(ft)?w(Pt):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:De(w(Ka)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[xu,o===w(ft)]]):ue("v-if",!0)],64)}),128)),ue(" Global Top "),x(w(ad)),w(t)?(C(),z(w(t),{key:0})):ue("v-if",!0),w(Bt)?ue("v-if",!0):(C(),z(Wv,{key:1}))],64))}}),Yv=Oe({__name:"Play",setup(e){I(G),j_();const t=D();function n(a){var i;Il.value||((i=a.target)==null?void 0:i.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?cn():un())}oC(t);const r=R(()=>U0.value||Il.value);Ut();const o=Ut();return fs(()=>import("./DrawingControls.327e474f.js"),["assets/DrawingControls.327e474f.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.025201c0.js"]).then(a=>o.value=a.default),(a,i)=>(C(),U(we,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:X(w(Mu))},[x(rd,{class:"w-full h-full",style:X({background:"var(--slidev-slide-container-background, black)"}),width:w(Ja)?w(An).width.value:void 0,scale:w(vr),onPointerdown:n},{default:A(()=>[x(Kv,{context:"slide"})]),controls:A(()=>[s("div",{class:De(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(r)?"opacity-100 right-0":"opacity-0 p-2",w(zs)?"pointer-events-none":""]])},[x(qv,{class:"m-auto",persist:w(r)},null,8,["persist"])],2),!w(Ce).drawings.presenterOnly&&!w(qt)&&w(o)?(C(),z(w(o),{key:0,class:"ml-0"})):ue("v-if",!0)]),_:1},8,["style","width","scale"]),ue("v-if",!0)],4),x(J_)],64))}});function ld(e){const t=R(()=>e.value.path),n=R(()=>ze.length-1),r=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=R(()=>to(r.value)),a=R(()=>ze.find(m=>m.path===`${r.value}`)),i=R(()=>{var m,g,h;return(h=(g=(m=a.value)==null?void 0:m.meta)==null?void 0:g.slide)==null?void 0:h.id}),l=R(()=>{var m,g;return(g=(m=a.value)==null?void 0:m.meta)==null?void 0:g.layout}),u=R(()=>ze.find(m=>m.path===`${Math.min(ze.length,r.value+1)}`)),d=R(()=>ze.filter(m=>{var g,h;return(h=(g=m.meta)==null?void 0:g.slide)==null?void 0:h.title}).reduce((m,g)=>(ei(m,g),m),[])),p=R(()=>ti(d.value,a.value)),f=R(()=>ni(p.value));return{route:e,path:t,total:n,currentPage:r,currentPath:o,currentRoute:a,currentSlideId:i,currentLayout:l,nextRoute:u,rawTree:d,treeWithActiveStatuses:p,tree:f}}function cd(e,t,n){const r=D(0);Je(()=>{_t.afterEach(async()=>{await Je(),r.value+=1})});const o=R(()=>{var u,d;return r.value,((d=(u=t.value)==null?void 0:u.meta)==null?void 0:d.__clicksElements)||[]}),a=R(()=>{var u,d,p;return+((p=(d=(u=t.value)==null?void 0:u.meta)==null?void 0:d.clicks)!=null?p:o.value.length)}),i=R(()=>n.value<ze.length-1||e.value<a.value),l=R(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:a,hasNext:i,hasPrev:l}}const Zv=["id"],zl=Oe({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,r=Dt(n,"clicksElements",t),o=R(()=>({height:`${ju}px`,width:`${Pn}px`})),a=Ut();fs(()=>import("./DrawingPreview.41442357.js"),[]).then(d=>a.value=d.default);const i=R(()=>n.clicks),l=cd(i,n.nav.currentRoute,n.nav.currentPage),u=R(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return mt(G,Fe({nav:{...n.nav,...l},configs:Ce,themeConfigs:R(()=>Ce.themeConfig)})),(d,p)=>{var f;return C(),U("div",{id:w(u),class:"slide-container",style:X(w(o))},[x(w(id)),x(w(Ya),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":w(r),"onUpdate:clicks-elements":p[0]||(p[0]=m=>Se(r)?r.value=m:null),clicks:w(i),"clicks-disabled":!1,class:De(w(Ka)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(a)?(C(),z(w(a),{key:0,page:+e.route.path},null,8,["page"])):ue("v-if",!0),x(w(ad))],12,Zv)}}}),Qv=Oe({__name:"PrintSlide",props:{route:null},setup(e){var a;const t=e;I(G);const n=Fe(((a=t.route.meta)==null?void 0:a.__clicksElements)||[]),r=R(()=>t.route),o=ld(r);return(i,l)=>(C(),U(we,null,[x(zl,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=u=>Se(n)?n.value=u:null),clicks:0,nav:w(o),route:w(r)},null,8,["clicks-elements","nav","route"]),w(Ms)?ue("v-if",!0):(C(!0),U(we,{key:0},Ln(n.length,u=>(C(),z(zl,{key:u,clicks:u,nav:w(o),route:w(r)},null,8,["clicks","nav","route"]))),128))],64))}}),Xv={id:"print-content"},Jv=Oe({__name:"PrintContainer",props:{width:null},setup(e){const t=e;I(G);const n=R(()=>t.width),r=R(()=>t.width/ln),o=R(()=>n.value/r.value),a=R(()=>o.value<ln?n.value/Pn:r.value*ln/Pn),i=ze.slice(0,-1),l=R(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mt(Au,a),(u,d)=>(C(),U("div",{id:"print-container",class:De(w(l))},[s("div",Xv,[(C(!0),U(we,null,Ln(w(i),p=>(C(),z(Qv,{key:p.path,route:p},null,8,["route"]))),128))]),At(u.$slots,"controls")],2))}});const ey=Oe({__name:"Print",setup(e){I(G);const t=Tn.canvasWidth,n=Math.round(t/Tn.aspectRatio)+1;function r(o,{slots:a}){if(a.default)return ht("style",a.default())}return ps(()=>{Ja?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,a)=>(C(),U(we,null,[x(r,null,{default:A(()=>[c(" @page { size: "+Et(w(t))+"px "+Et(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:X(w(Mu))},[x(Jv,{class:"w-full h-full",style:X({background:"var(--slidev-slide-container-background, black)"}),width:w(An).width.value},null,8,["style","width"])],4)],64))}});const ty={class:"slidev-layout end"},ny={__name:"end",setup(e){return I(G),(t,n)=>(C(),U("div",ty," END "))}},sy=fn(ny,[["__scopeId","data-v-e480397c"]]);function Wl(e){return e.startsWith("/")?"/slides-grid/"+e.slice(1):e}function ry(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),r={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Wl(e)})`:`url("${Wl(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const oy={class:"my-auto w-full"},Za=Oe({__name:"cover",props:{background:{default:""}},setup(e){const t=e;I(G);const n=R(()=>ry(t.background,!0));return(r,o)=>(C(),U("div",{class:"slidev-layout cover",style:X(w(n))},[s("div",oy,[At(r.$slots,"default")])],4))}}),ay=s("h1",null,"Grid \u5E03\u5C40",-1),iy={__name:"1",setup(e){const t={theme:"default",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",highlighter:"prism",canvasWidth:980,layout:"cover"};return I(G),(n,r)=>(C(),z(Za,ie(oe(t)),{default:A(()=>[ay]),_:1},16))}},ly={class:"slidev-layout default"},pe={__name:"default",setup(e){return I(G),(t,n)=>(C(),U("div",ly,[At(t.$slots,"default")]))}},cy=s("h1",null,"\u7B80\u4ECB",-1),uy=s("p",null,"Grid \u5E03\u5C40\u662F\u6700\u5F3A\u5927\u7684 CSS \u5E03\u5C40\u65B9\u6848",-1),dy=s("ul",null,[s("li",null,[c("\u4E4B\u524D\u6211\u4EEC\u4ECB\u7ECD\u7684 Flex \u5E03\u5C40\u4E3B\u8981\u662F\u901A\u8FC7\u8BBE\u7F6E\u5B50\u9879\u5728\u8F74(\u4E3B\u8F74\u6216\u8005\u526F\u8F74)\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u6765\u63A7\u5236\u5176\u5185\u90E8\u5E03\u5C40\u7684\uFF0C\u800C\u8FD9\u4E2A\u8F74\u662F\u4E00\u7EF4\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BF4 Flex \u5E03\u5C40\u9002\u7528\u4E8E\u4E00\u7EF4\u5E03\u5C40\u3002\u5F53\u7136\u8BBE\u7F6E "),s("kbd",null,"flex-wrap"),c(" \u53EF\u4EE5\u4F7F\u5F97 Flex \u5E03\u5C40\u4EA7\u751F\u4E8C\u7EF4\u5E03\u5C40\u7684\u6548\u679C\uFF0C\u4F46\u662F\u80FD\u529B\u6709\u9650\uFF0C\u5176\u4E8C\u7EF4\u5E03\u5C40\u80FD\u529B\u4E0D\u591F\u7075\u6D3B\u3002")]),s("li",null,"CSS Grid \u63D0\u4F9B\u7ED9\u6211\u4EEC\u8FDB\u884C\u4E8C\u7EF4\u5E03\u5C40\u7684\u80FD\u529B\uFF0C\u4ED6\u53EF\u4EE5\u5C06\u9875\u9762\u5212\u5206\u4E3A\u4E00\u4E2A\u4E2A\u7684\u7F51\u683C\uFF0C\u901A\u8FC7\u7EC4\u5408\u4E0D\u540C\u7684\u7F51\u683C\uFF0C\u53EF\u4EE5\u505A\u51FA\u5404\u79CD\u4E8C\u7EF4\u5E03\u5C40"),s("li",null,[c("Grid \u5E03\u5C40\u7684\u517C\u5BB9\u6027\uFF0C"),s("a",{href:"https://caniuse.com/?search=grid",target:"_blank",rel:"noopener"},"Learn More"),c(". "),s("img",{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-grid.7fy52aimvf40.png"})])],-1),py={__name:"2",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[cy,uy,dy]),_:1},16))}},fy=s("div",{style:{width:"80%"},class:"mt-12"},[s("p",null,[s("kbd",null,"gap"),c(" \u662F "),s("kbd",null,"column-gap"),c(" \u4E0E "),s("kbd",null,"row-gap"),c(" \u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u56E0\u6B64\u4E0A\u9762\u53EF\u4EE5\u7B80\u5199\u4E3A\u5982\u4E0B")]),s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"gap"),s("span",{class:"token punctuation"},":"),c(" 10px 5px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])]),s("p",null,[c("\u5F53 "),s("kbd",null,"gap"),c(" \u53EA\u6307\u5B9A\u4E86\u4E00\u4E2A\u503C\u65F6\uFF0C\u8868\u793A\u5217\u95F4\u8DDD\u4E0E\u884C\u95F4\u8DDD\u53D6\u540C\u4E00\u4E2A\u503C")]),s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"gap"),s("span",{class:"token punctuation"},":"),c(" 10px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"/* \u7B49\u4EF7\u4E8E */")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"column-gap"),s("span",{class:"token punctuation"},":"),c(" 10px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"row-gap"),s("span",{class:"token punctuation"},":"),c(" 10px"),s("span",{class:"token punctuation"},";")])])])],-1),my={__name:"3",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[fy]),_:1},16))}},hy={class:"grid grid-cols-2 gap-12"},er={__name:"TwoColumn",setup(e){return I(G),(t,n)=>(C(),U("div",hy,[At(t.$slots,"default")]))}};const gy={__name:"GridBox",props:{containerStyle:{default:function(){return{}}},itemStyle:{default:function(){return{}}},itemStyles:{default:function(){return[]}},itemContents:{default:function(){return[]}},counts:{default:4}},setup(e){const t=e;I(G);const n=D(t.containerStyle),r=D(t.itemStyle),o=D(t.itemStyles),a=D(t.itemContents),i=D(new Array(t.counts));return(l,u)=>(C(),U("div",{class:"container",style:X(n.value)},[(C(!0),U(we,null,Ln(i.value,(d,p)=>{var f;return C(),U("div",{class:"item",style:X([r.value,o.value[p]]),key:p},Et((f=a.value[p])!=null?f:p+1),5)}),128))],4))}},Me=fn(gy,[["__scopeId","data-v-97e96ab5"]]),_y={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},vy=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),yy=[vy];function ky(e,t){return C(),U("svg",_y,yy)}const by={name:"ph-clipboard",render:ky},xy={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},wy=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Cy=[wy];function Ty(e,t){return C(),U("svg",xy,Cy)}const Sy={name:"ph-check-circle",render:Ty};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ud(e){return typeof e>"u"||e===null}function $y(e){return typeof e=="object"&&e!==null}function Ey(e){return Array.isArray(e)?e:ud(e)?[]:[e]}function Oy(e,t){var n,r,o,a;if(t)for(a=Object.keys(t),n=0,r=a.length;n<r;n+=1)o=a[n],e[o]=t[o];return e}function Ry(e,t){var n="",r;for(r=0;r<t;r+=1)n+=e;return n}function Py(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Ay=ud,jy=$y,My=Ey,Iy=Ry,Ly=Py,Fy=Oy,Qa={isNothing:Ay,isObject:jy,toArray:My,repeat:Iy,isNegativeZero:Ly,extend:Fy};function dd(e,t){var n="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),r+" "+n):r}function Ks(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=dd(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ks.prototype=Object.create(Error.prototype);Ks.prototype.constructor=Ks;Ks.prototype.toString=function(t){return this.name+": "+dd(this,t)};var wn=Ks,Ny=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],By=["scalar","sequence","mapping"];function Dy(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(r){t[String(r)]=n})}),t}function Hy(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Ny.indexOf(n)===-1)throw new wn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Dy(t.styleAliases||null),By.indexOf(this.kind)===-1)throw new wn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var tt=Hy;function Kl(e,t){var n=[];return e[t].forEach(function(r){var o=n.length;n.forEach(function(a,i){a.tag===r.tag&&a.kind===r.kind&&a.multi===r.multi&&(o=i)}),n[o]=r}),n}function Vy(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(r);return e}function aa(e){return this.extend(e)}aa.prototype.extend=function(t){var n=[],r=[];if(t instanceof tt)r.push(t);else if(Array.isArray(t))r=r.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(r=r.concat(t.explicit));else throw new wn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(a){if(!(a instanceof tt))throw new wn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new wn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new wn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof tt))throw new wn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(aa.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Kl(o,"implicit"),o.compiledExplicit=Kl(o,"explicit"),o.compiledTypeMap=Vy(o.compiledImplicit,o.compiledExplicit),o};var Uy=aa,Gy=new tt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),qy=new tt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),zy=new tt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Wy=new Uy({explicit:[Gy,qy,zy]});function Ky(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Yy(){return null}function Zy(e){return e===null}var Qy=new tt("tag:yaml.org,2002:null",{kind:"scalar",resolve:Ky,construct:Yy,predicate:Zy,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Xy(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Jy(e){return e==="true"||e==="True"||e==="TRUE"}function ek(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var tk=new tt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Xy,construct:Jy,predicate:ek,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function nk(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function sk(e){return 48<=e&&e<=55}function rk(e){return 48<=e&&e<=57}function ok(e){if(e===null)return!1;var t=e.length,n=0,r=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!nk(e.charCodeAt(n)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!sk(e.charCodeAt(n)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!rk(e.charCodeAt(n)))return!1;r=!0}return!(!r||o==="_")}function ak(e){var t=e,n=1,r;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),r=t[0],(r==="-"||r==="+")&&(r==="-"&&(n=-1),t=t.slice(1),r=t[0]),t==="0")return 0;if(r==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function ik(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Qa.isNegativeZero(e)}var lk=new tt("tag:yaml.org,2002:int",{kind:"scalar",resolve:ok,construct:ak,predicate:ik,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),ck=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function uk(e){return!(e===null||!ck.test(e)||e[e.length-1]==="_")}function dk(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var pk=/^[-+]?[0-9]+e/;function fk(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Qa.isNegativeZero(e))return"-0.0";return n=e.toString(10),pk.test(n)?n.replace("e",".e"):n}function mk(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Qa.isNegativeZero(e))}var hk=new tt("tag:yaml.org,2002:float",{kind:"scalar",resolve:uk,construct:dk,predicate:mk,represent:fk,defaultStyle:"lowercase"}),gk=Wy.extend({implicit:[Qy,tk,lk,hk]}),_k=gk,pd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function vk(e){return e===null?!1:pd.exec(e)!==null||fd.exec(e)!==null}function yk(e){var t,n,r,o,a,i,l,u=0,d=null,p,f,m;if(t=pd.exec(e),t===null&&(t=fd.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],r=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,r,o));if(a=+t[4],i=+t[5],l=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(p=+t[10],f=+(t[11]||0),d=(p*60+f)*6e4,t[9]==="-"&&(d=-d)),m=new Date(Date.UTC(n,r,o,a,i,l,u)),d&&m.setTime(m.getTime()-d),m}function kk(e){return e.toISOString()}var bk=new tt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:vk,construct:yk,instanceOf:Date,represent:kk});function xk(e){return e==="<<"||e===null}var wk=new tt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:xk}),Xa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ck(e){if(e===null)return!1;var t,n,r=0,o=e.length,a=Xa;for(n=0;n<o;n++)if(t=a.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;r+=6}return r%8===0}function Tk(e){var t,n,r=e.replace(/[\r\n=]/g,""),o=r.length,a=Xa,i=0,l=[];for(t=0;t<o;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|a.indexOf(r.charAt(t));return n=o%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function Sk(e){var t="",n=0,r,o,a=e.length,i=Xa;for(r=0;r<a;r++)r%3===0&&r&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[r];return o=a%3,o===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):o===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):o===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function $k(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Ek=new tt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ck,construct:Tk,predicate:$k,represent:Sk}),Ok=Object.prototype.hasOwnProperty,Rk=Object.prototype.toString;function Pk(e){if(e===null)return!0;var t=[],n,r,o,a,i,l=e;for(n=0,r=l.length;n<r;n+=1){if(o=l[n],i=!1,Rk.call(o)!=="[object Object]")return!1;for(a in o)if(Ok.call(o,a))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(a)===-1)t.push(a);else return!1}return!0}function Ak(e){return e!==null?e:[]}var jk=new tt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Pk,construct:Ak}),Mk=Object.prototype.toString;function Ik(e){if(e===null)return!0;var t,n,r,o,a,i=e;for(a=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(r=i[t],Mk.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;a[t]=[o[0],r[o[0]]]}return!0}function Lk(e){if(e===null)return[];var t,n,r,o,a,i=e;for(a=new Array(i.length),t=0,n=i.length;t<n;t+=1)r=i[t],o=Object.keys(r),a[t]=[o[0],r[o[0]]];return a}var Fk=new tt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ik,construct:Lk}),Nk=Object.prototype.hasOwnProperty;function Bk(e){if(e===null)return!0;var t,n=e;for(t in n)if(Nk.call(n,t)&&n[t]!==null)return!1;return!0}function Dk(e){return e!==null?e:{}}var Hk=new tt("tag:yaml.org,2002:set",{kind:"mapping",resolve:Bk,construct:Dk});_k.extend({implicit:[bk,wk],explicit:[Ek,jk,Fk,Hk]});function Yl(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var Vk=new Array(256),Uk=new Array(256);for(var Gn=0;Gn<256;Gn++)Vk[Gn]=Yl(Gn)?1:0,Uk[Gn]=Yl(Gn);function Gk(e){return Array.from(new Set(e))}function Zl(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;const o=[];let a=t;for(;a<n;)o.push(a),a+=r||1;return o}function qk(e,t){if(!t||t==="all"||t==="*")return Zl(1,e+1);const n=[];for(const r of t.split(/[,;]/g))if(!r.includes("-"))n.push(+r);else{const[o,a]=r.split("-",2);n.push(...Zl(+o,a?+a+1:e+1))}return Gk(n).filter(r=>r<=e).sort((r,o)=>r-o)}const zk=["title"],Re=Oe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;I(G);const n=I(Os),r=I(xn),o=I(Rs);function a(f=5){const m=[],g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=g.length;for(let y=0;y<f;y++)m.push(g.charAt(Math.floor(Math.random()*h)));return m.join("")}const i=D(),l=Fn();In(()=>{const f=t.at==null?r==null?void 0:r.value.length:t.at,m=R(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),g=R(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const h=a(),y=Rh(t.ranges.length-1).map(k=>h+k);r!=null&&r.value&&(r.value.push(...y),Qr(()=>y.forEach(k=>Yo(r.value,k)),l))}ps(()=>{if(!i.value)return;const y=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const k of y){const b=Array.from(k.querySelectorAll(".line")),S=qk(b.length,g.value);if(b.forEach((T,E)=>{const L=S.includes(E+1);T.classList.toggle(yn,!0),T.classList.toggle("highlighted",L),T.classList.toggle("dishonored",!L)}),t.maxHeight){const T=k.querySelector(".line.highlighted");T&&T.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:d}=tg();function p(){var m,g;const f=(g=(m=i.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:g.textContent;f&&d(f)}return(f,m)=>{const g=Sy,h=by;return C(),U("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:X({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[At(f.$slots,"default"),w(Ce).codeCopy?(C(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(u)?"Copied":"Copy",onClick:m[0]||(m[0]=y=>p())},[w(u)?(C(),z(g,{key:0,class:"p-2 w-8 h-8"})):(C(),z(h,{key:1,class:"p-2 w-8 h-8"}))],8,zk)):ue("v-if",!0)],4)}}}),Wk=s("h1",null,"\u672F\u8BED\u4ECB\u7ECD",-1),Kk=s("p",null,"\u4ECB\u7ECD Grid \u5E03\u5C40\u9700\u8981\u7528\u5230\u7684\u672F\u8BED",-1),Yk=s("h3",null,"\u5BB9\u5668\u548C\u5B50\u9879",-1),Zk=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c(".container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c(".item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c(".item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c(".item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c(".item"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])])])],-1),Qk={__name:"4",setup(e){const t={};I(G);const n={width:"150px",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"50px 50px"},r={color:"white"},o=[{gridRow:"1 / 2",gridColumn:"1 / 3",backgroundColor:"rgba(46, 49, 124, .8)"},{gridRow:"span 2",gridColumn:"3 / 4",backgroundColor:"#126bae"},{backgroundColor:"#0f95b0"}];return(a,i)=>{const l=Re,u=Me,d=er;return C(),z(pe,ie(oe(t)),{default:A(()=>[Wk,Kk,Yk,x(d,null,{default:A(()=>[s("div",null,[x(l,ne({},{ranges:[""]}),{default:A(()=>[Zk]),_:1},16)]),x(u,{counts:4,style:n,itemStyle:r,itemStyles:o})]),_:1})]),_:1},16)}}},Xk=s("h3",null,"\u7F51\u683C\u7EBF\u4E0E\u7F51\u683C\u5355\u5143",-1),Jk=s("p",{style:{width:"80%"}},[c("\u7F51\u683C\u901A\u8FC7\u7F51\u683C\u7EBF\u6765\u8FDB\u884C\u5212\u5206\uFF0C\u56DB\u4E2A\u76F8\u90BB\u7684\u7F51\u683C\u7EBF\u5305\u56F4\u7684\u533A\u57DF\u5F62\u6210\u4E00\u4E2A\u7F51\u683C\u5355\u5143\u3002\u7F51\u683C\u7EBF\u7684\u7F16\u53F7\u4ECE "),s("kbd",null,"1"),c(" \u5F00\u59CB\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\uFF0C\u4F8B\u5982 "),s("kbd",null,"-1"),c(" \u8868\u793A\u5012\u6570\u7B2C\u4E00\u6839\u7F51\u683C\u7EBF\u3002")],-1),eb=s("h3",null,"\u7F51\u683C\u8F68\u9053",-1),tb=s("p",null,"\u76F8\u90BB\u7F51\u683C\u7EBF\u5F62\u6210\u7684\u884C\u548C\u5217\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u8F68\u9053\u3002",-1),nb={__name:"5",setup(e){const t={};I(G);const n=[{width:"150px",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"50px 50px"},{width:"150px",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"50px 50px 50px"}],r=[{},{backgroundColor:"transparent"}],o=[[],[{backgroundColor:"#ce5577"},{backgroundColor:"#ce5577"},{backgroundColor:"#ce5577"},{backgroundColor:"#ce5577"},{},{},{backgroundColor:"#ce5577"}]];return(a,i)=>{const l=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[Xk,Jk,x(l,{counts:6,style:X(n[0])},null,8,["style"]),eb,tb,x(l,{counts:9,style:X(n[1]),itemStyle:r[1],itemStyles:o[1]},null,8,["style","itemStyle","itemStyles"])]),_:1},16)}}},sb=s("h1",null,"\u5C5E\u6027\u4E00\u89C8",-1),rb=s("p",null,"Grid \u5E03\u5C40\u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD",-1),ob=s("p",null,"\u5C5E\u6027\u5206\u4E3A\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\u548C\u5B50\u9879\u4E0A\u7684\u5C5E\u6027\u3002",-1),ab=s("h3",null,"\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027",-1),ib=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"grid-template-columns")]),s("td",null,[s("kbd",null,"grid-template-rows")]),s("td",null,[s("kbd",null,"grid-template-areas")])]),s("tr",null,[s("td",null,[s("kbd",null,"gap-column")]),s("td",null,[s("kbd",null,"gap-row")]),s("td",null,[s("kbd",null,"gap")])]),s("tr",null,[s("td",null,[s("kbd",null,"grid-auto-flow")]),s("td",null,[s("kbd",null,"grid-auto-columns")]),s("td",null,[s("kbd",null,"grid-auto-rows")])]),s("tr",null,[s("td",null,[s("kbd",null,"justify-items")]),s("td",null,[s("kbd",null,"align-items")]),s("td",null,[s("kbd",null,"place-items")])]),s("tr",null,[s("td",null,[s("kbd",null,"justify-content")]),s("td",null,[s("kbd",null,"align-content")]),s("td",null,[s("kbd",null,"place-content")])]),s("tr",null,[s("td",null,[s("kbd",null,"grid-template")]),s("td",null,[s("kbd",null,"grid")]),s("td")])])],-1),lb={__name:"6",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[sb,rb,ob,ab,ib]),_:1},16))}},cb=s("h1",null,"\u5C5E\u6027\u4E00\u89C8",-1),ub=s("p",null,"Grid \u5E03\u5C40\u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD",-1),db=s("h3",null,"\u9879\u76EE\u4E0A\u7684\u5C5E\u6027",-1),pb=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"grid-column-start")]),s("td",null,[s("kbd",null,"grid-column-end")]),s("td",null,[s("kbd",null,"grid-row-start")])]),s("tr",null,[s("td",null,[s("kbd",null,"grid-row-end")]),s("td",null,[s("kbd",null,"grid-column")]),s("td",null,[s("kbd",null,"grid-row")])]),s("tr",null,[s("td",null,[s("kbd",null,"grid-area")]),s("td",null,[s("kbd",null,"justify-self")]),s("td",null,[s("kbd",null,"align-self")])]),s("tr",null,[s("td",null,[s("kbd",null,"place-self")]),s("td"),s("td")])])],-1),fb={__name:"7",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[cb,ub,db,pb]),_:1},16))}},mb=s("h1",null,"display",-1),hb=s("p",null,"\u9ED8\u8BA4\u884C\u4E3A",-1),gb={style:{width:"80%"}},_b=s("p",null,[c("\u5F53\u6211\u4EEC\u8BBE\u7F6E "),s("kbd",null,"display: grid"),c(" \u6216\u8005 "),s("kbd",null,"display: inline-grid"),c(" \u65F6\uFF0C\u5BB9\u5668\u5C31\u53D8\u4E3A\u4E86\u4E00\u4E2A\u7F51\u683C\u76D2\u5B50\u3002")],-1),vb=s("p",null,"\u5F53\u6CA1\u6709\u5212\u5206\u7F51\u683C\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u5B9A\u9AD8\u5EA6\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4E0E\u5757\u7EA7\u76D2\u5B50\u7684\u884C\u4E3A\u4E00\u81F4",-1),yb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),c(" grid"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),kb={__name:"8",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[mb,hb,s("div",gb,[_b,vb,x(o,ne({},{ranges:[""]}),{default:A(()=>[yb]),_:1},16),x(a)])]),_:1},16)}}},bb={style:{width:"80%"}},xb=s("p",null,[c("\u4E0E "),s("code",null,"display: block"),c(" \u4E0D\u540C\u7684\u662F\uFF0C\u5F53\u5BB9\u5668\u8BBE\u5B9A\u9AD8\u5EA6\u4EE5\u540E\uFF0C\u5B50\u9879\u4F1A\u5747\u5300\u5E73\u5206\u9AD8\u5EA6")],-1),wb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),c(" 300px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Cb={__name:"9",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",bb,[xb,x(o,ne({},{ranges:[""]}),{default:A(()=>[wb]),_:1},16),x(a,{style:{width:"100%",height:"300px"}})])]),_:1},16)}}},Tb=s("h1",null,"grid-template-columns grid-template-rows",-1),Sb={style:{width:"80%"}},$b=s("p",null,[s("kbd",null,"grid-columns"),c(" \u89C4\u5B9A\u5C06\u7F51\u683C\u5212\u5206\u4E3A\u591A\u5C11\u5217\uFF0C\u5E76\u4E14\u6BCF\u5217\u7684\u8F68\u9053\u5927\u5C0F\u3002"),s("kbd",null,"grid-rows"),c(" \u89C4\u5B9A\u5C06\u7F51\u683C\u5212\u5206\u4E3A\u591A\u5C11\u884C\uFF0C\u4EE5\u53CA\u6BCF\u884C\u7684\u8F68\u9053\u5927\u5C0F\u3002")],-1),Eb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(" 50px 50px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" 50px 50px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Ob=s("p",null,"\u8F68\u9053\u5927\u5C0F\u7684\u5355\u4F4D\u4E5F\u53EF\u4EE5\u662F\u767E\u5206\u6BD4",-1),Rb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(" 25% 25% 25% 25%"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" 50px 50px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Pb={__name:"10",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me,i=er;return C(),z(pe,ie(oe(t)),{default:A(()=>[Tb,s("div",Sb,[$b,x(i,null,{default:A(()=>[s("div",null,[x(o,ne({},{ranges:["2-3"]}),{default:A(()=>[Eb]),_:1},16),x(a,{style:{gridTemplateColumns:"50px 50px",gridTemplateRows:"50px 50px"}})]),s("div",null,[Ob,x(o,ne({},{ranges:["2-3"]}),{default:A(()=>[Rb]),_:1},16),x(a,{counts:6,style:{gridTemplateColumns:"25% 25% 25% 25%",gridTemplateRows:"50px 50px"}})])]),_:1})])]),_:1},16)}}},Ab=s("h1",null,"repeat",-1),jb={style:{width:"80%"}},Mb=s("p",null,[c("\u901A\u8FC7 "),s("kbd",null,"repeat()"),c(" \u51FD\u6570\u6307\u5B9A\u91CD\u590D\u6B21\u6570\uFF0C\u907F\u514D\u5199\u91CD\u590D\u7684\u503C")],-1),Ib=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("4"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Lb={__name:"11",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[Ab,s("div",jb,[Mb,x(o,ne({},{ranges:["2-3"]}),{default:A(()=>[Ib]),_:1},16),x(a,{counts:6,style:X({gridTemplateColumns:"repeat(4, 50px)",gridTemplateRows:"repeat(2, 50px)"})},null,8,["style"])])]),_:1},16)}}},Fb={style:{width:"80%"}},Nb=s("p",null,"\u8FD8\u53EF\u4EE5\u91CD\u590D\u67D0\u79CD\u6A21\u5F0F",-1),Bb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("3"),s("span",{class:"token punctuation"},","),c(" 50px 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Db={__name:"12",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",Fb,[Nb,x(o,ne({},{ranges:["2-3"]}),{default:A(()=>[Bb]),_:1},16),x(a,{counts:12,style:X({gridTemplateColumns:"repeat(3, 50px 100px)",gridTemplateRows:"repeat(2, 50px)"})},null,8,["style"])])]),_:1},16)}}},Hb=s("h1",null,"fr \u3001auto-fill\u4E0Eminmax()",-1),Vb={style:{width:"80%"}},Ub=s("p",null,[c("\u5F53\u6211\u4EEC\u89C4\u5B9A\u8F68\u9053\u5927\u5C0F\u65F6\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528 "),s("kbd",null,"fr"),c(" \u8FD9\u4E2A\u5355\u4F4D\uFF0C\u5B83\u8868\u793A\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E0E Flex \u5E03\u5C40\u4E2D\u7684 "),s("kbd",null,"flex-grow"),c(" \u7C7B\u4F3C\u3002")],-1),Gb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),c(" 100px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-cols"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("4"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),qb=s("p",null,[c("\u901A\u8FC7 "),s("kbd",null,"repeat()"),c(" \u548C "),s("kbd",null,"fr"),c(" \u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u7684\u5B9E\u73B0\u7ECF\u5178\u7684 12 \u7F51\u683C\u5E03\u5C40")],-1),zb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-cols"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("12"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Wb={__name:"13",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[Hb,ue(" \u7279\u6B8A\u7684\u7F51\u683C\u5355\u4F4D "),s("div",Vb,[Ub,x(o,ne({},{ranges:["2-4"]}),{default:A(()=>[Gb]),_:1},16),x(a,{counts:7,style:X({height:"100px",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(2, 1fr)"})},null,8,["style"]),qb,x(o,ne({},{ranges:["2"]}),{default:A(()=>[zb]),_:1},16),ue(` <GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(12, 1fr)',
  }"
/> `)])]),_:1},16)}}},Kb={style:{width:"80%"}},Yb=s("p",null,[c("\u6709\u7684\u7F51\u683C\u5355\u5143\u7684\u5927\u5C0F\u662F\u56FA\u5B9A\uFF0C\u800C\u5BB9\u5668\u7684\u5927\u5C0F\u4E0D\u786E\u5B9A\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u6BCF\u4E00\u884C(\u5217)\u5C3D\u53EF\u80FD\u591A\u7684\u5305\u542B\u66F4\u591A\u7684\u7F51\u683C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 "),s("kbd",null,"auto-fill"),c(" \u5173\u952E\u5B57\u8868\u793A\u81EA\u52A8\u586B\u5145")],-1),Zb=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-cols"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("auto-fill"),s("span",{class:"token punctuation"},","),c(" 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" 100px 100px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Qb={__name:"14",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",Kb,[Yb,x(o,ne({},{ranges:["2"]}),{default:A(()=>[Zb]),_:1},16),x(a,{counts:8,style:X({gridTemplateColumns:"repeat(auto-fill, 100px)",gridTemplateRows:"100px 100px"})},null,8,["style"])])]),_:1},16)}}},Xb={style:{width:"80%"}},Jb=s("p",null,[c("\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 "),s("kbd",null,"minmax()"),c(" \u6765\u89C4\u5B9A\u8F68\u9053\u7684\u6700\u5C0F\u6700\u5927\u5C3A\u5BF8")],-1),ex=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(" 1fr 1fr "),s("span",{class:"token function"},"minmax"),s("span",{class:"token punctuation"},"("),c("100px"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),tx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),c(" 250px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(" 1fr 1fr "),s("span",{class:"token function"},"minmax"),s("span",{class:"token punctuation"},"("),c("200px"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),nx={__name:"15",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",Xb,[Jb,x(o,ne({},{ranges:[""]}),{default:A(()=>[ex]),_:1},16),x(a,{counts:3,style:X({gridTemplateColumns:"1fr 1fr minmax(100px, 1fr)",gridTemplateRows:"100px"})},null,8,["style"]),x(o,ne({},{ranges:[""]}),{default:A(()=>[tx]),_:1},16),x(a,{counts:3,style:X({width:"400px",gridTemplateColumns:"1fr 1fr minmax(200px, 1fr)",gridTemplateRows:"100px"})},null,8,["style"])])]),_:1},16)}}},sx=s("h1",null,"\u5B50\u9879\u6392\u5217",-1),rx=s("p",null,"\u901A\u8FC7\u7F51\u683C\u7EBF\u6307\u5B9A\u5B50\u9879\u7684\u4F4D\u7F6E",-1),ox=s("div",{style:{width:"80%"}},[s("p",null,[c("\u5F53\u6211\u4EEC\u5212\u5206\u597D\u7F51\u683C\u4EE5\u540E\uFF0C\u5B50\u9879\u4F1A\u4F9D\u6B21\u6309\u884C\u586B\u5145\uFF0C\u90A3\u53EF\u4E0D\u4EE5\u53EF\u4EE5\u6307\u5B9A\u5B50\u9879\u6392\u5217\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E\u5462\uFF1F\u901A\u8FC7\u5B50\u9879\u7684 "),s("kbd",null,"grid-column-start"),c(),s("kbd",null,"grid-column-end"),c(),s("kbd",null,"grid-row-start"),c(),s("kbd",null,"grid-row-end"),c(" \u5C5E\u6027\u3002")]),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"\u5C5E\u6027"),s("th",null,"\u542B\u4E49")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"grid-column-start")]),s("td",null,"\u8D77\u59CB\u5217\u7F51\u683C\u7EBF")]),s("tr",null,[s("td",null,[s("kbd",null,"grid-column-end")]),s("td",null,"\u7ED3\u675F\u5217\u7F51\u683C\u7EBF")]),s("tr",null,[s("td",null,[s("kbd",null,"grid-row-start")]),s("td",null,"\u8D77\u59CB\u884C\u7F51\u683C\u7EBF")]),s("tr",null,[s("td",null,[s("kbd",null,"grid-row-end")]),s("td",null,"\u7ED3\u675F\u884C\u7F51\u683C\u7EBF")])])])],-1),ax={__name:"16",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[sx,rx,ox]),_:1},16))}};const md=e=>(pf("data-v-65c9bea3"),e=e(),ff(),e),ix={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"50px"}},lx=md(()=>s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("3"),s("span",{class:"token punctuation"},","),c(" 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1)),cx=md(()=>s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item1"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column-start"),s("span",{class:"token punctuation"},":"),c(" 1"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column-end"),s("span",{class:"token punctuation"},":"),c(" 3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row-start"),s("span",{class:"token punctuation"},":"),c(" 1"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row-end"),s("span",{class:"token punctuation"},":"),c(" 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column-start"),s("span",{class:"token punctuation"},":"),c(" 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column-end"),s("span",{class:"token punctuation"},":"),c(" 4"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row-start"),s("span",{class:"token punctuation"},":"),c(" 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row-end"),s("span",{class:"token punctuation"},":"),c(" 3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1)),ux={__name:"17",setup(e){const t={};I(G);const n={gridTemplateColumns:"repeat(3, 100px)",gridTemplateRows:"repeat(2, 100px)"},r=[{gridColumnStart:1,gridColumnEnd:3,gridRowStart:1,gridRowEnd:2,backgroundColor:"#61649f"},{gridColumnStart:2,gridColumnEnd:4,gridRowStart:2,gridRowEnd:3,backgroundColor:"#1677b3"},{backgroundColor:"#12aa9c"},{backgroundColor:"#ad9e5f"}];return(o,a)=>{const i=Re,l=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",ix,[s("div",null,[x(i,ne({},{ranges:[""]}),{default:A(()=>[lx]),_:1},16),x(i,ne({},{ranges:[""]}),{default:A(()=>[cx]),_:1},16)]),x(l,{style:n,itemStyle:o.itemStyle,itemStyles:r},null,8,["itemStyle"])])]),_:1},16)}}},dx=fn(ux,[["__scopeId","data-v-65c9bea3"]]),px={style:{width:"80%"}},fx=s("h1",null,"grid-column grid-row",-1),mx=s("div",null,[s("kbd",null,"grid-column"),c(" \u4E0E "),s("kbd",null,"grid-row"),c(" \u662F\u7B80\u5199\u5F62\u5F0F\uFF0C\u5199\u6CD5\u5982\u4E0B")],-1),hx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" grid-column-start / grid-column-end"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" grid-row-start / grid-row-end"),s("span",{class:"token punctuation"},";")])])],-1),gx=s("p",null,"\u6240\u4EE5\u4E0A\u8FF0\u6837\u5F0F\u53EF\u4EE5\u4FEE\u6539\u5982\u4E0B",-1),_x=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item1"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 1 / 3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" 1 / 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 2 / 4"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" 2 / 3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),vx={__name:"18",setup(e){const t={};return I(G),(n,r)=>{const o=Re;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",px,[fx,mx,x(o,ne({},{ranges:[""]}),{default:A(()=>[hx]),_:1},16),gx,x(o,ne({},{ranges:[""]}),{default:A(()=>[_x]),_:1},16)])]),_:1},16)}}},yx=s("h1",null,"span",-1),kx=s("p",null,[c("\u5728 "),s("kbd",null,"grid-column"),c(" \u4E0E "),s("kbd",null,"grid-row"),c(" \u4F7F\u7528 "),s("kbd",null,"span"),c(" \u6765\u8868\u793A\u8DE8\u8D8A\u7684\u7F51\u683C\u6570\uFF0C\u6240\u4EE5\u4E0A\u8FF0\u6837\u5F0F\u53EF\u4EE5\u4FEE\u6539\u5982\u4E0B")],-1),bx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item1"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 1 / span 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" 1 / 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 2 / span 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" 2 / 3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),xx={__name:"19",setup(e){const t={};return I(G),(n,r)=>{const o=Re;return C(),z(pe,ie(oe(t)),{default:A(()=>[yx,kx,x(o,ne({},{ranges:["2,6"]}),{default:A(()=>[bx]),_:1},16)]),_:1},16)}}},wx=s("h1",null,"\u7F51\u683C\u7EBF\u547D\u540D",-1),Cx={style:{width:"80%"}},Tx=s("p",null,[c("\u6211\u4EEC\u53EF\u4EE5\u5728\u901A\u8FC7 "),s("kbd",null,"grid-template-rows"),c(" \u4E0E "),s("kbd",null,"grid-template-columns"),c(" \u5212\u5206\u7F51\u683C\u7684\u540C\u65F6\u4E3A\u7F51\u683C\u7EBF\u8FDB\u884C\u547D\u540D\u3002")],-1),Sx=s("p",null,[c("\u7F51\u683C\u7684\u540D\u79F0\u4F7F\u7528 "),s("kbd",null,"[]"),c(" \u5305\u88F9\u8D77\u6765")],-1),$x=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(" [c1] 100px [c2] 100px [c3] 1px [c4]"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" [r1] 100px [r2] 100px [r3]"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Ex=s("p",null,"\u63A5\u7740\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7F51\u683C\u7EBF\u7684\u540D\u79F0\u6307\u5B9A\u533A\u57DF",-1),Ox=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" c1 / c3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" r1 / r2"),s("span",{class:"token punctuation"},";")])])],-1),Rx=s("p",null,[c("\u540C\u4E00\u4E2A\u7F51\u683C\u7EBF\u53EF\u4EE5\u6709\u591A\u4E2A\u540D\u79F0\uFF0C\u540D\u79F0\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u95F4\u9694 "),s("kbd",null,"[r1 start]"),c(".")],-1),Px={__name:"20",setup(e){const t={};return I(G),(n,r)=>{const o=Re;return C(),z(pe,ie(oe(t)),{default:A(()=>[wx,s("div",Cx,[Tx,Sx,x(o,ne({},{ranges:[""]}),{default:A(()=>[$x]),_:1},16),Ex,x(o,ne({},{ranges:[""]}),{default:A(()=>[Ox]),_:1},16),Rx])]),_:1},16)}}},Ax=s("h1",null,"grid-template-areas\u3001grid-area",-1),jx=s("p",null,"\u4E3A\u7F51\u683C\u5212\u5206\u533A\u57DF",-1),Mx={style:{width:"80%"}},Ix=s("p",null,[c("\u901A\u8FC7\u4E3A\u5B50\u9879\u6307\u5B9A\u7F51\u683C\u7EBF\u6765\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u8D77\u6765\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u4E00\u79CD\u66F4\u5FEB\u6307\u5B9A\u5B50\u9879\u533A\u57DF\u7684\u7684\u65B9\u6CD5\u3002\u901A\u8FC7 "),s("kbd",null,"grid-template-areas"),c(" \u5C5E\u6027\u53EF\u4EE5\u4E3A\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u533A\u57DF\uFF0C\u4F8B\u5982\u6211\u4EEC\u5C06\u4E00\u4E2A "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"\xD7"),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"},"4 \\times 3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\xD7"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3")])])]),c(" \u7684\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u4E3A\u5982\u4E0B\u533A\u57DF")],-1),Lx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("4"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" 50px 150px 50px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-areas"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token string"},"'header header header header'"),c()]),c(`
`),s("span",{class:"line"},[c("                       "),s("span",{class:"token string"},"'main main . side'"),c()]),c(`
`),s("span",{class:"line"},[c("                       "),s("span",{class:"token string"},"'footer footer footer footer'"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Fx=s("p",null,[c("\u4F7F\u7528 "),s("kbd",null,"."),c(" \u8868\u793A\u8FD9\u4E2A\u7F51\u683C\u5355\u5143\u6CA1\u6709\u88AB\u4F7F\u7528\u3002")],-1),Nx={__name:"21",setup(e){const t={};return I(G),(n,r)=>{const o=Re;return C(),z(pe,ie(oe(t)),{default:A(()=>[Ax,jx,s("div",Mx,[Ix,x(o,ne({},{ranges:[""]}),{default:A(()=>[Lx]),_:1},16),Fx])]),_:1},16)}}},Bx=s("p",null,[c("\u5728\u5B50\u9879\u4E2D\u901A\u8FC7 "),s("kbd",null,"grid-area"),c(" \u5E94\u7528\u5BB9\u5668\u4E2D\u5212\u5206\u7684\u533A\u57DF\uFF0C\u5B50\u9879\u5373\u53EF\u5360\u7528\u8FD9\u4E2A\u533A\u57DF")],-1),Dx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".header"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-area"),s("span",{class:"token punctuation"},":"),c(" header"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".main"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-area"),s("span",{class:"token punctuation"},":"),c(" main"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".side"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-area"),s("span",{class:"token punctuation"},":"),c(" side"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".footer"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-area"),s("span",{class:"token punctuation"},":"),c(" footer"),s("span",{class:"token punctuation"},";"),c()]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Hx={__name:"22",setup(e){const t={};I(G);const n={width:"380px",gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"50px 150px 50px",gridTemplateAreas:"'header header header header' 'main main . side' 'footer footer footer footer'"},r=[{gridArea:"header",backgroundColor:"#61649f"},{gridArea:"main",backgroundColor:"#1677b3"},{gridArea:"side",backgroundColor:"#12aa9c"},{gridArea:"footer",backgroundColor:"#0f95b0"}];return(o,a)=>{const i=Re,l=Me,u=er;return C(),z(pe,ie(oe(t)),{default:A(()=>[x(u,null,{default:A(()=>[s("div",null,[Bx,x(i,ne({},{ranges:[""]}),{default:A(()=>[Dx]),_:1},16)]),x(l,{counts:4,style:n,itemContents:["header","main","side","footer"],itemStyles:r})]),_:1})]),_:1},16)}}},Vx={style:{width:"80%"}},Ux=s("p",null,[c("\u901A\u8FC7 "),s("kbd",null,"grid-template-areas"),c(" \u4E3A\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u533A\u57DF\uFF0C\u5305\u56F4\u533A\u57DF\u7684\u7F51\u683C\u7EBF\u4F1A\u88AB\u81EA\u52A8\u547D\u540D\u4E3A "),s("kbd",null,"\u533A\u57DF\u540D\u79F0-start"),c(" \u6216 "),s("kbd",null,"\u533A\u57DF\u540D\u79F0-end"),c("\uFF0C\u4F8B\u5982\u533A\u57DF\u540D "),s("kbd",null,"header"),c(" \u7684\u8D77\u59CB\u548C\u7EC8\u6B62\u7F51\u683C\u7EBF\u4F1A\u88AB\u547D\u540D\u4E3A "),s("kbd",null,"header-start"),c(" \u548C "),s("kbd",null,"header-end"),c(".")],-1),Gx=s("p",null,[s("kbd",null,"grid-area"),c(" \u8FD8\u53EF\u4EE5\u88AB\u7528\u4F5C "),s("kbd",null,"grid-row-start"),c(),s("kbd",null,"grid-coulmn-start"),c(),s("kbd",null,"grid-row-end"),c(),s("kbd",null,"grid-column-end"),c(" \u7684\u7B80\u5199\u5F62\u5F0F")],-1),qx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"grid-area"),s("span",{class:"token punctuation"},":"),c()]),c(`
`),s("span",{class:"line"},[c("  grid-row-start / grid-column-start / grid-row-end / grid-column-end"),s("span",{class:"token punctuation"},";")])])],-1),zx=s("p",null,"\u6211\u4EEC\u4E3A header \u5B50\u9879\u6307\u5B9A\u4E5F\u53EF\u533A\u57DF\u53EF\u4EE5\u5199\u4E3A\u5982\u4E0B",-1),Wx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".header"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-area"),s("span",{class:"token punctuation"},":"),c(" header-start / header-start / header-end / header-end"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Kx={__name:"23",setup(e){const t={};return I(G),(n,r)=>{const o=Re;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",Vx,[Ux,s("div",null,[Gx,x(o,ne({},{ranges:[""]}),{default:A(()=>[qx]),_:1},16)]),s("div",null,[zx,x(o,ne({},{ranges:[""]}),{default:A(()=>[Wx]),_:1},16)])])]),_:1},16)}}},Yx=s("h1",null,"gap",-1),Zx=s("p",null,"\u7F51\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD",-1),Qx={style:{width:"80%"}},Xx=s("p",null,[c("\u901A\u8FC7 "),s("kbd",null,"column-gap"),c(" \u4E0E "),s("kbd",null,"row-gap"),c(" \u6765\u63A7\u5236\u7F51\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD")],-1),Jx=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("4"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"column-gap"),s("span",{class:"token punctuation"},":"),c(" 10px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"row-gap"),s("span",{class:"token punctuation"},":"),c(" 5px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),ew={__name:"24",setup(e){const t={};return I(G),(n,r)=>{const o=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[Yx,Zx,s("div",Qx,[Xx,Jx,x(o,{counts:7,style:X({gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(2, 50px)",columnGap:"10px",rowGap:"5px"})},null,8,["style"])])]),_:1},16)}}},tw=s("h1",null,"grid-auto-flow",-1),nw=s("p",null,"\u81EA\u52A8\u586B\u5145\u7684\u65B9\u5F0F",-1),sw={style:{width:"80%"}},rw=s("p",null,[c("\u9ED8\u8BA4\u7684\u586B\u5145\u65B9\u5F0F\u4E3A\u6309\u884C\u81EA\u52A8\u586B\u5145\uFF0C\u5B83\u662F\u901A\u8FC7 "),s("kbd",null,"grid-auto-flow"),c(" \u5C5E\u6027\u6765\u89C4\u5B9A\u7684\uFF0C\u5176\u9ED8\u8BA4\u503C\u4E3A "),s("kbd",null,"row"),c("\uFF0C\u5373\u6309\u884C\u586B\u5145")],-1),ow=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("3"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-auto-flow"),s("span",{class:"token punctuation"},":"),c(" row"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),aw={__name:"25",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[tw,nw,s("div",sw,[rw,x(o,ne({},{ranges:[""]}),{default:A(()=>[ow]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(3, 50px)",gridTemplateRows:"repeat(2, 50px)",gridAutoFlow:"row"})},null,8,["style"])])]),_:1},16)}}},iw={style:{width:"80%"}},lw=s("p",null,[c("\u8BBE\u7F6E "),s("kbd",null,"grid-auto-flow"),c(" \u4E3A "),s("kbd",null,"column"),c("\uFF0C\u5143\u7D20\u5C06\u4F1A\u9ED8\u8BA4\u6309\u5217\u8FDB\u884C\u586B\u5145")],-1),cw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-auto-flow"),s("span",{class:"token punctuation"},":"),c(" column"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),uw={__name:"26",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",iw,[lw,x(o,ne({},{ranges:["2"]}),{default:A(()=>[cw]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(3, 50px)",gridTemplateRows:"repeat(2, 50px)",gridAutoFlow:"column"})},null,8,["style"])])]),_:1},16)}}},dw=s("p",null,[c("\u9ED8\u8BA4\u7684\u586B\u5145\u7B97\u6CD5\u662F\u7A00\u758F "),s("kbd",null,"(sparse)"),c(" \u586B\u5145")],-1),pw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("3"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("3"),s("span",{class:"token punctuation"},","),c(" 50px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-auto-flow"),s("span",{class:"token punctuation"},":"),c(" row"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item1"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 1 / 3"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 1 / 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),fw={__name:"27",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",null,[dw,x(o,ne({},{ranges:[""]}),{default:A(()=>[pw]),_:1},16),x(a,{counts:6,style:X({gridTemplateColumns:"repeat(3, 50px)",gridTemplateRows:"repeat(3, 50px)",gridAutoFlow:"row"}),itemStyles:[{gridColumn:"1 / 3"},{gridColumn:"1 / 3"}]},null,8,["style"])])]),_:1},16)}}},mw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-auto-flow"),s("span",{class:"token punctuation"},":"),c(" row dense"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),hw={__name:"28",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",null,[x(o,ne({},{ranges:[""]}),{default:A(()=>[mw]),_:1},16),x(a,{counts:6,style:X({gridTemplateColumns:"repeat(3, 50px)",gridTemplateRows:"repeat(3, 50px)",gridAutoFlow:"row dense"}),itemStyles:[{gridColumn:"1 / 3"},{gridColumn:"1 / 3"}]},null,8,["style"])])]),_:1},16)}}},gw=s("h1",null,"justify-content \u4E0E align-content",-1),_w=s("p",null,"\u5F53\u7F51\u683C\u7CFB\u7EDF\u7684\u5927\u5C0F\u5C0F\u4E8E\u5BB9\u5668\u5927\u5C0F\u65F6\uFF0C\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002",-1),vw=s("div",{style:{width:"80%"}},[s("p",null,[s("kbd",null,"justify-content"),c(" \u4E0E "),s("kbd",null,"align-content"),c(" \u5747\u662F\u4F4D\u4E8E\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\uFF0C\u5F53\u7F51\u683C\u7CFB\u7EDF\u7684\u5BBD\u5EA6\u5C0F\u4E8E\u5BB9\u5668\u7684\u5BBD\u5EA6\u65F6\uFF0C"),s("kbd",null,"justify-content"),c(" \u5C06\u4F1A\u6307\u5B9A\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C"),s("kbd",null,"align-content"),c(" \u5219\u6307\u5B9A\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002")]),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,[s("kbd",null,"stretch")]),s("th",null,[s("kbd",null,"start")]),s("th",null,[s("kbd",null,"end")])])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"center")]),s("td",null,[s("kbd",null,"space-between")]),s("td",null,[s("kbd",null,"space-around")])]),s("tr",null,[s("td",null,[s("kbd",null,"space-evenly")]),s("td"),s("td")])])])],-1),yw={__name:"29",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[gw,_w,vw]),_:1},16))}},kw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),c(" start"),s("span",{class:"token punctuation"},";")])])],-1),bw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),c(" end"),s("span",{class:"token punctuation"},";")])])],-1),xw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),c(" center"),s("span",{class:"token punctuation"},";")])])],-1),ww=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),c(" space-between"),s("span",{class:"token punctuation"},";")])])],-1),Cw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),c(" space-around"),s("span",{class:"token punctuation"},";")])])],-1),Tw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"justify-content"),s("span",{class:"token punctuation"},":"),c(" space-evenly"),s("span",{class:"token punctuation"},";")])])],-1),Sw={__name:"30",setup(e){const t={};I(G);const n=[{gridTemplateColumns:"repeat(4, 80px)",gridTemplateRows:"80px",justifyContent:"start"},{gridTemplateColumns:"repeat(4, 80px)",gridTemplateRows:"80px",justifyContent:"end"},{gridTemplateColumns:"repeat(4, 80px)",gridTemplateRows:"80px",justifyContent:"center"},{gridTemplateColumns:"repeat(4, 80px)",gridTemplateRows:"80px",justifyContent:"space-between"},{gridTemplateColumns:"repeat(4, 80px)",gridTemplateRows:"80px",justifyContent:"space-around"},{gridTemplateColumns:"repeat(4, 80px)",gridTemplateRows:"80px",justifyContent:"space-evenly"}];return(r,o)=>{const a=Re,i=Me,l=er;return C(),z(pe,ie(oe(t)),{default:A(()=>[x(l,null,{default:A(()=>[s("div",null,[s("div",null,[ue(" <kbd>start</kbd> "),x(a,ne({},{ranges:[""]}),{default:A(()=>[kw]),_:1},16),x(i,{style:X(n[0])},null,8,["style"])]),s("div",null,[x(a,ne({},{ranges:[""]}),{default:A(()=>[bw]),_:1},16),x(i,{style:X(n[1])},null,8,["style"])]),s("div",null,[x(a,ne({},{ranges:[""]}),{default:A(()=>[xw]),_:1},16),x(i,{style:X(n[2])},null,8,["style"])])]),s("div",null,[s("div",null,[x(a,ne({},{ranges:[""]}),{default:A(()=>[ww]),_:1},16),x(i,{style:X(n[3])},null,8,["style"])]),s("div",null,[x(a,ne({},{ranges:[""]}),{default:A(()=>[Cw]),_:1},16),x(i,{style:X(n[4])},null,8,["style"])]),s("div",null,[x(a,ne({},{ranges:[""]}),{default:A(()=>[Tw]),_:1},16),x(i,{style:X(n[5])},null,8,["style"])])])]),_:1})]),_:1},16)}}},$w={class:"grid grid-cols-6 gap-8"},Ew=s("p",null,[s("kbd",null,"start")],-1),Ow=s("p",null,[s("kbd",null,"end")],-1),Rw=s("p",null,[s("kbd",null,"center")],-1),Pw=s("p",null,[s("kbd",null,"space-between")],-1),Aw=s("p",null,[s("kbd",null,"space-around")],-1),jw=s("p",null,[s("kbd",null,"space-evenly")],-1),Mw={__name:"31",setup(e){const t={};I(G);const n=[{gridTemplateColumns:"1fr",gridTemplateRows:"repeat(3, 80px)",height:"350px",alignContent:"start"},{gridTemplateColumns:"1fr",gridTemplateRows:"repeat(3, 80px)",height:"350px",alignContent:"end"},{gridTemplateColumns:"1fr",gridTemplateRows:"repeat(3, 80px)",height:"350px",alignContent:"center"},{gridTemplateColumns:"1fr",gridTemplateRows:"repeat(3, 80px)",height:"350px",alignContent:"space-between"},{gridTemplateColumns:"1fr",gridTemplateRows:"repeat(3, 80px)",height:"350px",alignContent:"space-around"},{gridTemplateColumns:"1fr",gridTemplateRows:"repeat(3, 80px)",height:"350px",alignContent:"space-evenly"}];return(r,o)=>{const a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",null,[s("div",$w,[s("div",null,[Ew,x(a,{counts:3,style:X(n[0])},null,8,["style"])]),s("div",null,[Ow,x(a,{counts:3,style:X(n[1])},null,8,["style"])]),s("div",null,[Rw,x(a,{counts:3,style:X(n[2])},null,8,["style"])]),s("div",null,[Pw,x(a,{counts:3,style:X(n[3])},null,8,["style"])]),s("div",null,[Aw,x(a,{counts:3,style:X(n[4])},null,8,["style"])]),s("div",null,[jw,x(a,{counts:3,style:X(n[5])},null,8,["style"])])])])]),_:1},16)}}},Iw=s("h1",null,"justify-items \u4E0E align-items",-1),Lw={style:{width:"80%"}},Fw=s("p",null,[c("\u6CA1\u6709\u4E3A\u5B50\u9879\u8BBE\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u65F6\uFF0C\u9ED8\u8BA4\u5B50\u9879\u662F\u81EA\u52A8\u6491\u6EE1\u7F51\u683C\u5355\u5143\u7684\uFF0C\u5982\u679C\u4E3A\u5B50\u9879\u8BBE\u5B9A\u5927\u5C0F\uFF0C\u90A3\u4E48\u5B50\u9879\u5C31\u4E0D\u4F1A\u6491\u6EE1\u7F51\u683C\u5355\u5143\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u901A\u8FC7 "),s("kbd",null,"justify-items"),c(" \u548C "),s("kbd",null,"align-items"),c(" \u5206\u522B\u8BBE\u7F6E\u5B50\u9879\u7684\u6C34\u5E73\u5BF9\u9F50\u548C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),Nw=s("p",null,[c("\u6709\u56DB\u79CD\u53D6\u503C\uFF0C\u5206\u522B\u662F "),s("kbd",null,"start"),c("\u3001"),s("kbd",null,"end"),c("\u3001"),s("kbd",null,"center"),c("\u3001"),s("kbd",null,"stretch"),c("\uFF0C\u9ED8\u8BA4\u503C\u4E3A "),s("kbd",null,"stretch"),c("\uFF0C\u5373\u81EA\u52A8\u5145\u6EE1\u7F51\u683C\u5355\u5143\u7684\u5BBD\u5EA6\u3002")],-1),Bw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("4"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" 100px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),c(" 100px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),Dw={__name:"32",setup(e){const t={};I(G);const n=[{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 100px)"},{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 100px)",justifyItems:"start"},{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 100px)",justifyItems:"end"},{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 100px)",justifyItems:"center"}],r=[{width:"100px"}];return(o,a)=>{const i=Re,l=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[Iw,ue(" \u5B50\u9879\u5728\u7F51\u683C\u4E2D\u7684\u5BF9\u9F50\u65B9\u5F0F "),s("div",Lw,[Fw,Nw,s("div",null,[x(i,ne({},{ranges:[""]}),{default:A(()=>[Bw]),_:1},16),x(l,{style:X(n[0]),itemStyle:r[0]},null,8,["style","itemStyle"])])])]),_:1},16)}}},Hw={style:{width:"80%"}},Vw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"jusitify-items"),s("span",{class:"token punctuation"},":"),c(" start"),s("span",{class:"token punctuation"},";")])])],-1),Uw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"jusitify-items"),s("span",{class:"token punctuation"},":"),c(" end"),s("span",{class:"token punctuation"},";")])])],-1),Gw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"jusitify-items"),s("span",{class:"token punctuation"},":"),c(" center"),s("span",{class:"token punctuation"},";")])])],-1),qw={__name:"33",setup(e){const t={};I(G);const n=[{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 80px)"},{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 80px)",justifyItems:"start"},{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 80px)",justifyItems:"end"},{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"repeat(1, 80px)",justifyItems:"center"}],r=[{width:"80px"}];return(o,a)=>{const i=Re,l=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",Hw,[s("div",null,[x(i,ne({},{ranges:[""]}),{default:A(()=>[Vw]),_:1},16),x(l,{style:X(n[1]),itemStyle:r[0]},null,8,["style","itemStyle"])]),s("div",null,[x(i,ne({},{ranges:[""]}),{default:A(()=>[Uw]),_:1},16),x(l,{style:X(n[2]),itemStyle:r[0]},null,8,["style","itemStyle"])]),s("div",null,[x(i,ne({},{ranges:[""]}),{default:A(()=>[Gw]),_:1},16),x(l,{style:X(n[3]),itemStyle:r[0]},null,8,["style","itemStyle"])])])]),_:1},16)}}},zw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),c(" start"),s("span",{class:"token punctuation"},";")])])],-1),Ww=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),c(" end"),s("span",{class:"token punctuation"},";")])])],-1),Kw=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),c(" center"),s("span",{class:"token punctuation"},";")])])],-1),Yw=s("p",null,[s("kbd",null,"place-items"),c(" \u662F "),s("kbd",null,"align-items"),c(" \u548C "),s("kbd",null,"justify-items"),c(" \u7684\u7B80\u5199\u5F62\u5F0F\u3002"),s("kbd",null,"place-items"),c(" \u7B2C\u4E00\u4E2A\u8BBE\u7F6E\u7684\u503C\u662F "),s("kbd",null,"align-items"),c("\uFF0C\u7B2C\u4E8C\u4E2A\u8BBE\u7F6E\u7684\u503C\u662F "),s("kbd",null,"justify-items"),c("\uFF0C\u5F53\u4E3A "),s("kbd",null,"place-items"),c(" \u53EA\u8BBE\u7F6E\u4E00\u4E2A\u503C\u65F6\uFF0C\u8868\u793A\u4E3A\u4E8C\u8005\u8BBE\u7F6E\u76F8\u540C\u7684\u503C")],-1),Zw={__name:"34",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me,i=er;return C(),z(pe,ie(oe(t)),{default:A(()=>[x(i,null,{default:A(()=>[s("div",null,[x(o,ne({},{ranges:[""]}),{default:A(()=>[zw]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(4, 60px)",gridTemplateRows:"120px"}),itemStyle:{height:"60px"}},null,8,["style"]),x(o,ne({},{ranges:[""]}),{default:A(()=>[Ww]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(4, 60px)",gridTemplateRows:"120px",alignItems:"end"}),itemStyle:{height:"60px"}},null,8,["style"])]),s("div",null,[x(o,ne({},{ranges:[""]}),{default:A(()=>[Kw]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(4, 60px)",gridTemplateRows:"120px",alignItems:"center"}),itemStyle:{height:"60px"}},null,8,["style"])])]),_:1}),Yw]),_:1},16)}}},Qw=s("h1",null,"justify-self align-self",-1),Xw={style:{width:"80%"}},Jw=s("p",null,[c("\u901A\u8FC7 "),s("kbd",null,"justify-items"),c(" \u548C "),s("kbd",null,"align-items"),c(" \u89C4\u5B9A\u6240\u6709\u5B50\u9879\u5728\u7F51\u683C\u5355\u5143\u5185\u5982\u4F55\u5BF9\u9F50\uFF0C\u901A\u8FC7 "),s("kbd",null,"justify-self"),c(" \u548C "),s("kbd",null,"align-self"),c(" \u89C4\u5B9A\u7279\u5B9A\u5B50\u9879\u5728\u5BB9\u5668\u5185\u7684\u6392\u5217\uFF0C\u5B83\u662F\u5B50\u9879\u4E0A\u9762\u7684\u5C5E\u6027\uFF0C\u53D6\u503C\u540C "),s("kbd",null,"justify-items"),c(" \u4E0E "),s("kbd",null,"align-items"),c("\u3002")],-1),e2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("4"),s("span",{class:"token punctuation"},","),c(" 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(" 100px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"justify-items"),s("span",{class:"token punctuation"},":"),c(" center"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"align-items"),s("span",{class:"token punctuation"},":"),c(" center"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),c(" 400px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"width"),s("span",{class:"token punctuation"},":"),c(" 50px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"height"),s("span",{class:"token punctuation"},":"),c(" 50px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),t2={__name:"35",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[Qw,ue(" \u7279\u5B9A\u5B50\u9879\u5728\u7F51\u683C\u5355\u5143\u4E2D\u7684\u5BF9\u9F50\u65B9\u5F0F "),s("div",Xw,[Jw,x(o,ne({},{ranges:[""]}),{default:A(()=>[e2]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(4, 100px)",gridTemplateRows:"100px",justifyItems:"center",alignItems:"center",width:"400px"}),itemStyle:{width:"50px",height:"50px"}},null,8,["style"])])]),_:1},16)}}},n2={style:{width:"80%"}},s2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".item1"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"justify-self"),s("span",{class:"token punctuation"},":"),c(" start"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),c(" start"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"align-self"),s("span",{class:"token punctuation"},":"),c(" end"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item3"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"justify-self"),s("span",{class:"token punctuation"},":"),c(" end"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),r2=s("p",null,[s("kbd",null,"place-self"),c(" \u662F "),s("kbd",null,"justify-self"),c(" \u4E0E "),s("kbd",null,"align-self"),c(" \u7684\u7B80\u5199\u5F62\u5F0F\u3002")],-1),o2={__name:"36",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",n2,[x(o,ne({},{ranges:[""]}),{default:A(()=>[s2]),_:1},16),x(a,{style:X({gridTemplateColumns:"repeat(4, 100px)",gridTemplateRows:"100px",justifyItems:"center",alignItems:"center",width:"400px"}),itemStyle:{width:"50px",height:"50px"},itemStyles:[{justifySelf:"start",alignSelf:"start",backgroundColor:"#5698c3"},{alignSelf:"end",backgroundColor:"#b2bbbe"},{justifySelf:"end",backgroundColor:"#45b787"}]},null,8,["style"])]),r2]),_:1},16)}}},a2=s("h1",null,"grid-auto-columns grid-auto-rows",-1),i2=s("p",null,"\u7F51\u683C\u7CFB\u7EDF\u4E4B\u5916\u7684\u7F51\u683C\u5927\u5C0F",-1),l2={style:{display:"grid","grid-template-columns":"4fr 6fr",gap:"10px"}},c2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("3"),s("span",{class:"token punctuation"},","),c(" 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-template-rows"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repeat"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 100px"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item2"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 4 / 5"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" 3 / 4"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".item3"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-column"),s("span",{class:"token punctuation"},":"),c(" 5 / 6"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),u2=s("p",null,[c("\u8D85\u51FA\u7F51\u683C\u7CFB\u7EDF\u7684\u90E8\u5206\u4F1A\u81EA\u52A8\u751F\u6210\u7F51\u683C\u8F68\u9053\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 "),s("kbd",null,"grid-auto-columns"),c(" \u548C "),s("kbd",null,"grid-auto-rows"),c(" \u6765\u6539\u53D8\u81EA\u52A8\u751F\u6210\u7684\u8F68\u9053\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684\u8F68\u9053\u5927\u5C0F\u4E3A "),s("kbd",null,"auto"),c(".")],-1),d2={__name:"37",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[a2,i2,s("div",l2,[x(o,ne({},{ranges:[""]}),{default:A(()=>[c2]),_:1},16),x(a,{counts:6,style:X({gridTemplateColumns:"repeat(3, 100px)",gridTemplateRows:"repeat(2, 100px)"}),itemStyles:[{},{gridColumn:"4 / 5",gridRow:"3 / 4",backgroundColor:"#806d9e"},{gridColumn:"5 / 6",backgroundColor:"#5698c3"}]},null,8,["style"])]),u2]),_:1},16)}}},p2={style:{display:"grid","grid-template-columns":"3fr 6fr",gap:"10px"}},f2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-auto-columns"),s("span",{class:"token punctuation"},":"),c(" 100px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"grid-auto-rows"),s("span",{class:"token punctuation"},":"),c(" 200px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),m2={__name:"38",setup(e){const t={};return I(G),(n,r)=>{const o=Re,a=Me;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",p2,[s("div",null,[x(o,ne({},{ranges:[""]}),{default:A(()=>[f2]),_:1},16)]),x(a,{counts:6,style:X({gridTemplateColumns:"repeat(3, 100px)",gridTemplateRows:"repeat(2, 100px)",gridAutoColumns:"100px",gridAutoRows:"200px"}),itemStyles:[{},{gridColumn:"4 / 5",gridRow:"3 / 4",backgroundColor:"#806d9e"},{gridColumn:"5 / 6",backgroundColor:"#5698c3"}]},null,8,["style"])])]),_:1},16)}}},h2=s("h1",null,"\u6848\u4F8B",-1),g2={__name:"39",setup(e){const t={layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/marek-piwnicki-T6PuTQiYr1s-unsplash.3fflj3h7lv20.jpg"};return I(G),(n,r)=>(C(),z(Za,ie(oe(t)),{default:A(()=>[h2]),_:1},16))}};const _2={__name:"WidthResizable",setup(e){I(G);const t=D(null),n=D(null),r=i=>{const l=parseInt(window.getComputedStyle(n.value).width);n.value.style.width=l+i.movementX+"px"},o=()=>{document.removeEventListener("mousemove",r)},a=()=>{document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)};return In(()=>{t.value.addEventListener("mousedown",a)}),(i,l)=>(C(),U("div",{class:"box",ref_key:"box",ref:n},[s("div",{class:"slider",ref_key:"slider",ref:t},null,512),At(i.$slots,"default",{},void 0,!0)],512))}},hd=fn(_2,[["__scopeId","data-v-b88ba87c"]]);const v2={class:"container-wrapper"},y2=em('<div class="container" data-v-260bd7f1><div class="prose" data-v-260bd7f1><h1 data-v-260bd7f1>Introduction</h1><p data-v-260bd7f1>Are creatures of the cosmos intelligent beings bits of moving fluff a very small stage in a vast cosmic arena Tunguska event.</p></div><div class="sidebar" data-v-260bd7f1><div class="box" data-v-260bd7f1><div class="box-header" data-v-260bd7f1>Actions</div><ul class="box-menu" data-v-260bd7f1><li data-v-260bd7f1><a href="" data-v-260bd7f1>Do a thing</a></li><li data-v-260bd7f1><a href="" data-v-260bd7f1>Register your bad self</a></li><li data-v-260bd7f1><a href="" data-v-260bd7f1>Hold the phone</a></li></ul></div><div class="box" data-v-260bd7f1><div class="box-header" data-v-260bd7f1>Related Stuff</div><ul class="box-menu" data-v-260bd7f1><li data-v-260bd7f1><a href="" data-v-260bd7f1>Just a link</a></li><li data-v-260bd7f1><a href="" data-v-260bd7f1>Another link</a></li></ul></div></div><div class="prose" data-v-260bd7f1><h1 data-v-260bd7f1>Additional Information</h1><p data-v-260bd7f1>Laws of physics Euclid courage of our questions? Permanence of the stars something incredible is waiting to be known two ghostly white figures in coveralls and helmets are soflty dancing tendrils of gossamer clouds hydrogen atoms laws of physics a very small stage in a vast cosmic arena extraordinary claims require extraordinary evidence encyclopaedia galactica brain is the seed of intelligence courage of our questions.</p></div></div>',1),k2=[y2],b2={__name:"CaseStudy",setup(e){return I(G),(t,n)=>(C(),U("div",v2,k2))}},x2=fn(b2,[["__scopeId","data-v-260bd7f1"]]),w2={__name:"40",setup(e){const t={};return I(G),(n,r)=>{const o=x2,a=hd;return C(),z(pe,ie(oe(t)),{default:A(()=>[x(a,null,{default:A(()=>[x(o)]),_:1})]),_:1},16)}}},C2={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px"}},T2=s("pre",{class:"slidev-code language-html"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c("container_wrapper"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c(".container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c("prose"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c("sidebar"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("      "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c("box"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("      "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c("box"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),c("div")]),c(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),c("prose"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])]),c(`
`),s("span",{class:"line"},[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),c("div")]),s("span",{class:"token punctuation"},">")])])])],-1),S2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token selector"},".container_wrapper"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"contain"),s("span",{class:"token punctuation"},":"),c(" style layout inline-size"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),c(" grid"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"gap"),s("span",{class:"token punctuation"},":"),c(" 20px"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token selector"},".sidebar"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"display"),s("span",{class:"token punctuation"},":"),c(" inherit"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token property"},"gap"),s("span",{class:"token punctuation"},":"),c(" inherit"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),$2=s("pre",{class:"slidev-code language-css"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token atrule"},[s("span",{class:"token rule"},"@container"),c(),s("span",{class:"token punctuation"},"("),s("span",{class:"token property"},"min-width"),s("span",{class:"token punctuation"},":"),c(" 600px"),s("span",{class:"token punctuation"},")"),c(),s("span",{class:"token keyword"},"and"),c(),s("span",{class:"token punctuation"},"("),s("span",{class:"token property"},"max-width"),s("span",{class:"token punctuation"},":"),c(" 900px"),s("span",{class:"token punctuation"},")")]),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token selector"},".sidebar"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(),s("span",{class:"token function"},"repear"),s("span",{class:"token punctuation"},"("),c("2"),s("span",{class:"token punctuation"},","),c(" 1fr"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"}),c(`
`),s("span",{class:"line"},[s("span",{class:"token atrule"},[s("span",{class:"token rule"},"@container"),c(),s("span",{class:"token punctuation"},"("),s("span",{class:"token property"},"min-width"),s("span",{class:"token punctuation"},":"),c(" 900px"),s("span",{class:"token punctuation"},")")]),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token selector"},".container"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token property"},"grid-template-columns"),s("span",{class:"token punctuation"},":"),c(" 2fr 1fr"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token selector"},".sidebar"),c(),s("span",{class:"token punctuation"},"{")]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token property"},"grid-row"),s("span",{class:"token punctuation"},":"),c(" span 2"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("    "),s("span",{class:"token property"},"grid-auto-rows"),s("span",{class:"token punctuation"},":"),c(" min-content"),s("span",{class:"token punctuation"},";")]),c(`
`),s("span",{class:"line"},[c("  "),s("span",{class:"token punctuation"},"}")]),c(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")])])],-1),E2={__name:"41",setup(e){const t={};return I(G),(n,r)=>{const o=Re;return C(),z(pe,ie(oe(t)),{default:A(()=>[s("div",C2,[s("div",null,[x(o,ne({},{ranges:[""]}),{default:A(()=>[T2]),_:1},16),x(o,ne({},{ranges:[""]}),{default:A(()=>[S2]),_:1},16)]),s("div",null,[x(o,ne({},{ranges:[""]}),{default:A(()=>[$2]),_:1},16)])])]),_:1},16)}}};const O2={class:"container"},R2={class:"img"},P2=["src"],A2={class:"description"},j2={class:"info"},M2={class:"user"},I2={class:"username"},L2={class:"viewcount"},F2={__name:"Card",props:{imagesrc:{default:""},description:{default:""},userimage:{default:""},username:{default:""},viewcount:{default:0}},setup(e){const t=e;return I(G),(n,r)=>(C(),U("div",O2,[s("div",R2,[s("img",{src:t.imagesrc,alt:""},null,8,P2)]),s("div",A2,Et(t.description),1),s("div",j2,[s("div",M2,[s("div",{class:"userimage",style:X({background:`url(${t.userimage}) no-repeat center`,backgroundSize:"cover"})},null,4),s("div",I2,Et(t.username),1)]),s("div",L2,Et(t.viewcount)+"\u6D4F\u89C8",1)])]))}},N2=fn(F2,[["__scopeId","data-v-cce2e2cd"]]);const B2={class:"cardlist"},D2={__name:"CaseStudy2",props:{counts:{default(){return new Array(6)}}},setup(e){const t=e;I(G);const n=["https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/kirk-thornton-YIcZBOWmjbM-unsplash.5fq3lt9m1140.jpg","https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/mia-baker-jjhvyxm34nY-unsplash.5z9tlu05kbk0.jpg","https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/wafer-wan-XAiev-GvCyg-unsplash.47qsrh27dwm0.jpg","https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/karsten-winegeart-jqVvBbspJx8-unsplash.30xfypu6ii00.jpg","https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/wugui.14bdikpnakv4.jpeg","https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/shanya.6ko0a5uorqc0.jpeg"],r=["\u5927\u5E87\u5929\u4E0B\u5BD2\u58EB\u4FF1\u6B22\u989C\uFF01","\u5343\u91D1\u6563\u5C3D\u8FD8\u590D\u6765\uFF01","\u5BFB\u5BFB\u89C5\u89C5\uFF0C\u51B7\u51B7\u6E05\u6E05\uFF0C\u51C4\u51C4\u60E8\u60E8\u621A\u621A\u3002","\u4FFA\u8001\u5B59\u6765\u4E5F","\u9189\u91CC\u6311\u706F\u770B\u5251\uFF0C\u68A6\u56DE\u5439\u89D2\u8FDE\u8425\u3002","\u8FDB\u4E00\u6B65\u6709\u8FDB\u4E00\u6B65\u7684\u6B22\u559C"],o=["\u675C\u752B","\u674E\u767D","\u674E\u6E05\u7167","\u5B59\u609F\u7A7A","\u8F9B\u5F03\u75BE","\u9E21\u6C64\u738B"],a=D(t.counts);return(i,l)=>(C(),U("div",B2,[(C(!0),U(we,null,Ln(a.value,(u,d)=>(C(),z(N2,{key:d,imagesrc:n[d]?n[d]:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/wafer-wan-XAiev-GvCyg-unsplash.47qsrh27dwm0.jpg",userimage:n[d]?n[d]:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/wafer-wan-XAiev-GvCyg-unsplash.47qsrh27dwm0.jpg",description:r[d]||"Hello World",username:o[d]||"xxx",viewcount:Math.floor(Math.random()*1e4)},null,8,["imagesrc","userimage","description","username","viewcount"]))),128))]))}},H2=fn(D2,[["__scopeId","data-v-49ad0700"]]),V2={__name:"42",setup(e){const t={canvasWidth:1500};return I(G),(n,r)=>{const o=H2,a=hd;return C(),z(pe,ie(oe(t)),{default:A(()=>[x(a,null,{default:A(()=>[x(o)]),_:1})]),_:1},16)}}},U2=s("h1",null,"\u53C2\u8003\u6587\u732E",-1),G2=s("ul",null,[s("li",null,[s("a",{href:"https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener"},"CSS Grid \u7F51\u683C\u5E03\u5C40\u6559\u7A0B")]),s("li",null,[s("a",{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener"},"A Complete Guide to Grid")]),s("li",null,[s("a",{href:"http://zhongguose.com/",target:"_blank",rel:"noopener"},"\u4E2D\u56FD\u8272")]),s("li",null,[s("a",{href:"https://unsplash.com/",target:"_blank",rel:"noopener"},"Unsplash")]),s("li",null,[s("a",{href:"https://cloudfour.com/thinks/first-css-grid-layout/",target:"_blank",rel:"noopener"},"Case Study: My First Practical CSS Grid Layout")])],-1),q2={__name:"43",setup(e){const t={};return I(G),(n,r)=>(C(),z(pe,ie(oe(t)),{default:A(()=>[U2,G2]),_:1},16))}},z2=s("h1",null,"\u8C22\u8C22",-1),W2={__name:"44",setup(e){const t={layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg"};return I(G),(n,r)=>(C(),z(Za,ie(oe(t)),{default:A(()=>[z2]),_:1},16))}},K2=[{path:"1",name:"page-1",component:iy,meta:{theme:"default",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",highlighter:"prism",canvasWidth:980,layout:"cover",title:"Grid \u5E03\u5C40",slide:{raw:`---
theme: default
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg
highlighter: prism
canvasWidth: 980
layout: cover
---

# Grid \u5E03\u5C40

<!-- ## \u73B0\u4EE3\u5E03\u5C40\u65B9\u6848 -->
`,title:"Grid \u5E03\u5C40",level:1,content:"# Grid \u5E03\u5C40",frontmatter:{theme:"default",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/flex-bg.3wlnmzcqmq60.jpeg",highlighter:"prism",canvasWidth:980,layout:"cover",title:"Grid \u5E03\u5C40"},note:"## \u73B0\u4EE3\u5E03\u5C40\u65B9\u6848",index:0,start:0,end:12,notesHTML:`<h2>\u73B0\u4EE3\u5E03\u5C40\u65B9\u6848</h2>
`,filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:py,meta:{slide:{raw:`
# \u7B80\u4ECB

Grid \u5E03\u5C40\u662F\u6700\u5F3A\u5927\u7684 CSS \u5E03\u5C40\u65B9\u6848


- \u4E4B\u524D\u6211\u4EEC\u4ECB\u7ECD\u7684 Flex \u5E03\u5C40\u4E3B\u8981\u662F\u901A\u8FC7\u8BBE\u7F6E\u5B50\u9879\u5728\u8F74(\u4E3B\u8F74\u6216\u8005\u526F\u8F74)\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u6765\u63A7\u5236\u5176\u5185\u90E8\u5E03\u5C40\u7684\uFF0C\u800C\u8FD9\u4E2A\u8F74\u662F\u4E00\u7EF4\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BF4 Flex \u5E03\u5C40\u9002\u7528\u4E8E\u4E00\u7EF4\u5E03\u5C40\u3002\u5F53\u7136\u8BBE\u7F6E <kbd>flex-wrap</kbd> \u53EF\u4EE5\u4F7F\u5F97 Flex \u5E03\u5C40\u4EA7\u751F\u4E8C\u7EF4\u5E03\u5C40\u7684\u6548\u679C\uFF0C\u4F46\u662F\u80FD\u529B\u6709\u9650\uFF0C\u5176\u4E8C\u7EF4\u5E03\u5C40\u80FD\u529B\u4E0D\u591F\u7075\u6D3B\u3002
- CSS Grid \u63D0\u4F9B\u7ED9\u6211\u4EEC\u8FDB\u884C\u4E8C\u7EF4\u5E03\u5C40\u7684\u80FD\u529B\uFF0C\u4ED6\u53EF\u4EE5\u5C06\u9875\u9762\u5212\u5206\u4E3A\u4E00\u4E2A\u4E2A\u7684\u7F51\u683C\uFF0C\u901A\u8FC7\u7EC4\u5408\u4E0D\u540C\u7684\u7F51\u683C\uFF0C\u53EF\u4EE5\u505A\u51FA\u5404\u79CD\u4E8C\u7EF4\u5E03\u5C40
- Grid \u5E03\u5C40\u7684\u517C\u5BB9\u6027\uFF0C[Learn More](https://caniuse.com/?search=grid).
  <img src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-grid.7fy52aimvf40.png">


`,title:"\u7B80\u4ECB",level:1,content:`# \u7B80\u4ECB

Grid \u5E03\u5C40\u662F\u6700\u5F3A\u5927\u7684 CSS \u5E03\u5C40\u65B9\u6848


- \u4E4B\u524D\u6211\u4EEC\u4ECB\u7ECD\u7684 Flex \u5E03\u5C40\u4E3B\u8981\u662F\u901A\u8FC7\u8BBE\u7F6E\u5B50\u9879\u5728\u8F74(\u4E3B\u8F74\u6216\u8005\u526F\u8F74)\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u6765\u63A7\u5236\u5176\u5185\u90E8\u5E03\u5C40\u7684\uFF0C\u800C\u8FD9\u4E2A\u8F74\u662F\u4E00\u7EF4\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BF4 Flex \u5E03\u5C40\u9002\u7528\u4E8E\u4E00\u7EF4\u5E03\u5C40\u3002\u5F53\u7136\u8BBE\u7F6E <kbd>flex-wrap</kbd> \u53EF\u4EE5\u4F7F\u5F97 Flex \u5E03\u5C40\u4EA7\u751F\u4E8C\u7EF4\u5E03\u5C40\u7684\u6548\u679C\uFF0C\u4F46\u662F\u80FD\u529B\u6709\u9650\uFF0C\u5176\u4E8C\u7EF4\u5E03\u5C40\u80FD\u529B\u4E0D\u591F\u7075\u6D3B\u3002
- CSS Grid \u63D0\u4F9B\u7ED9\u6211\u4EEC\u8FDB\u884C\u4E8C\u7EF4\u5E03\u5C40\u7684\u80FD\u529B\uFF0C\u4ED6\u53EF\u4EE5\u5C06\u9875\u9762\u5212\u5206\u4E3A\u4E00\u4E2A\u4E2A\u7684\u7F51\u683C\uFF0C\u901A\u8FC7\u7EC4\u5408\u4E0D\u540C\u7684\u7F51\u683C\uFF0C\u53EF\u4EE5\u505A\u51FA\u5404\u79CD\u4E8C\u7EF4\u5E03\u5C40
- Grid \u5E03\u5C40\u7684\u517C\u5BB9\u6027\uFF0C[Learn More](https://caniuse.com/?search=grid).
  <img src="https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/caniuse-grid.7fy52aimvf40.png">`,frontmatter:{},index:1,start:13,end:26,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:my,meta:{slide:{raw:`


<div style="width: 80%;" class="mt-12">

  <kbd>gap</kbd> \u662F <kbd>column-gap</kbd> \u4E0E <kbd>row-gap</kbd> \u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u56E0\u6B64\u4E0A\u9762\u53EF\u4EE5\u7B80\u5199\u4E3A\u5982\u4E0B

  \`\`\`css
  .container {
    gap: 10px 5px;
  }
  \`\`\`

  \u5F53 <kbd>gap</kbd> \u53EA\u6307\u5B9A\u4E86\u4E00\u4E2A\u503C\u65F6\uFF0C\u8868\u793A\u5217\u95F4\u8DDD\u4E0E\u884C\u95F4\u8DDD\u53D6\u540C\u4E00\u4E2A\u503C

  \`\`\`css
  gap: 10px;
  /* \u7B49\u4EF7\u4E8E */
  column-gap: 10px;
  row-gap: 10px;
  \`\`\`
</div>

`,content:`<div style="width: 80%;" class="mt-12">

  <kbd>gap</kbd> \u662F <kbd>column-gap</kbd> \u4E0E <kbd>row-gap</kbd> \u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u56E0\u6B64\u4E0A\u9762\u53EF\u4EE5\u7B80\u5199\u4E3A\u5982\u4E0B

  \`\`\`css
  .container {
    gap: 10px 5px;
  }
  \`\`\`

  \u5F53 <kbd>gap</kbd> \u53EA\u6307\u5B9A\u4E86\u4E00\u4E2A\u503C\u65F6\uFF0C\u8868\u793A\u5217\u95F4\u8DDD\u4E0E\u884C\u95F4\u8DDD\u53D6\u540C\u4E00\u4E2A\u503C

  \`\`\`css
  gap: 10px;
  /* \u7B49\u4EF7\u4E8E */
  column-gap: 10px;
  row-gap: 10px;
  \`\`\`
</div>`,frontmatter:{},index:2,start:27,end:51,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Qk,meta:{slide:{raw:`
# \u672F\u8BED\u4ECB\u7ECD

\u4ECB\u7ECD Grid \u5E03\u5C40\u9700\u8981\u7528\u5230\u7684\u672F\u8BED


### \u5BB9\u5668\u548C\u5B50\u9879

<TwoColumn>

<div>

\`\`\`html
<div class=".container">
  <div class=".item"></div>
  <div class=".item"></div>
  <div class=".item"></div>
  <div class=".item"></div>
</div>
\`\`\`
</div>

<GridBox 
  :counts="4"
  :style="style"
  :itemStyle="itemStyle"
  :itemStyles="itemStyles"
/>

</TwoColumn>

<script setup>

const style = {
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px'
}

const itemStyle = {
  color: 'white'
}
const itemStyles = [{
  gridRow: '1 / 2',
  gridColumn: '1 / 3',
  backgroundColor: 'rgba(46, 49, 124, .8)',
}, {
  gridRow: 'span 2',
  gridColumn: '3 / 4',
  backgroundColor: '#126bae',
}, {
  backgroundColor: '#0f95b0'
}]
<\/script>
`,title:"\u672F\u8BED\u4ECB\u7ECD",level:1,content:`# \u672F\u8BED\u4ECB\u7ECD

\u4ECB\u7ECD Grid \u5E03\u5C40\u9700\u8981\u7528\u5230\u7684\u672F\u8BED


### \u5BB9\u5668\u548C\u5B50\u9879

<TwoColumn>

<div>

\`\`\`html
<div class=".container">
  <div class=".item"></div>
  <div class=".item"></div>
  <div class=".item"></div>
  <div class=".item"></div>
</div>
\`\`\`
</div>

<GridBox 
  :counts="4"
  :style="style"
  :itemStyle="itemStyle"
  :itemStyles="itemStyles"
/>

</TwoColumn>

<script setup>

const style = {
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px'
}

const itemStyle = {
  color: 'white'
}
const itemStyles = [{
  gridRow: '1 / 2',
  gridColumn: '1 / 3',
  backgroundColor: 'rgba(46, 49, 124, .8)',
}, {
  gridRow: 'span 2',
  gridColumn: '3 / 4',
  backgroundColor: '#126bae',
}, {
  backgroundColor: '#0f95b0'
}]
<\/script>`,frontmatter:{},index:3,start:52,end:107,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:nb,meta:{slide:{raw:`
### \u7F51\u683C\u7EBF\u4E0E\u7F51\u683C\u5355\u5143

<p style="width: 80%;">\u7F51\u683C\u901A\u8FC7\u7F51\u683C\u7EBF\u6765\u8FDB\u884C\u5212\u5206\uFF0C\u56DB\u4E2A\u76F8\u90BB\u7684\u7F51\u683C\u7EBF\u5305\u56F4\u7684\u533A\u57DF\u5F62\u6210\u4E00\u4E2A\u7F51\u683C\u5355\u5143\u3002\u7F51\u683C\u7EBF\u7684\u7F16\u53F7\u4ECE <kbd>1</kbd> \u5F00\u59CB\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\uFF0C\u4F8B\u5982 <kbd>-1</kbd> \u8868\u793A\u5012\u6570\u7B2C\u4E00\u6839\u7F51\u683C\u7EBF\u3002</p>

<GridBox
  :counts="6"
  :style="style[0]"
/>

### \u7F51\u683C\u8F68\u9053

\u76F8\u90BB\u7F51\u683C\u7EBF\u5F62\u6210\u7684\u884C\u548C\u5217\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u8F68\u9053\u3002

<GridBox
  :counts="9"
  :style="style[1]"
  :itemStyle="itemStyle[1]"
  :itemStyles="itemStyles[1]"
/>

<script setup>

const style = [{
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px'
}, {
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px 50px'
}]

const itemStyle = [{}, {
  backgroundColor: 'transparent'
}]

const itemStyles = [[], [{
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {}, {}, {
  backgroundColor: '#ce5577'
}]]
<\/script>
`,title:"\u7F51\u683C\u7EBF\u4E0E\u7F51\u683C\u5355\u5143",level:3,content:`### \u7F51\u683C\u7EBF\u4E0E\u7F51\u683C\u5355\u5143

<p style="width: 80%;">\u7F51\u683C\u901A\u8FC7\u7F51\u683C\u7EBF\u6765\u8FDB\u884C\u5212\u5206\uFF0C\u56DB\u4E2A\u76F8\u90BB\u7684\u7F51\u683C\u7EBF\u5305\u56F4\u7684\u533A\u57DF\u5F62\u6210\u4E00\u4E2A\u7F51\u683C\u5355\u5143\u3002\u7F51\u683C\u7EBF\u7684\u7F16\u53F7\u4ECE <kbd>1</kbd> \u5F00\u59CB\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\uFF0C\u4F8B\u5982 <kbd>-1</kbd> \u8868\u793A\u5012\u6570\u7B2C\u4E00\u6839\u7F51\u683C\u7EBF\u3002</p>

<GridBox
  :counts="6"
  :style="style[0]"
/>

### \u7F51\u683C\u8F68\u9053

\u76F8\u90BB\u7F51\u683C\u7EBF\u5F62\u6210\u7684\u884C\u548C\u5217\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u8F68\u9053\u3002

<GridBox
  :counts="9"
  :style="style[1]"
  :itemStyle="itemStyle[1]"
  :itemStyles="itemStyles[1]"
/>

<script setup>

const style = [{
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px'
}, {
  width: '150px',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '50px 50px 50px'
}]

const itemStyle = [{}, {
  backgroundColor: 'transparent'
}]

const itemStyles = [[], [{
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {
  backgroundColor: '#ce5577'
}, {}, {}, {
  backgroundColor: '#ce5577'
}]]
<\/script>`,frontmatter:{},index:4,start:108,end:158,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:lb,meta:{slide:{raw:`
# \u5C5E\u6027\u4E00\u89C8

Grid \u5E03\u5C40\u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD

\u5C5E\u6027\u5206\u4E3A\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\u548C\u5B50\u9879\u4E0A\u7684\u5C5E\u6027\u3002

### \u5BB9\u5668\u4E0A\u7684\u5C5E\u6027

| | | |
| --- | --- | --- |
| <kbd>grid-template-columns</kbd> | <kbd>grid-template-rows</kbd> | <kbd>grid-template-areas</kbd>
| <kbd>gap-column</kbd> |  <kbd>gap-row</kbd> | <kbd>gap</kbd> |
| <kbd>grid-auto-flow</kbd> | <kbd>grid-auto-columns</kbd> | <kbd>grid-auto-rows</kbd>
| <kbd>justify-items</kbd> | <kbd>align-items</kbd> | <kbd>place-items</kbd> |
| <kbd>justify-content</kbd> | <kbd>align-content</kbd> | <kbd>place-content</kbd> |
| <kbd>grid-template</kbd> | <kbd>grid</kbd>|
`,title:"\u5C5E\u6027\u4E00\u89C8",level:1,content:`# \u5C5E\u6027\u4E00\u89C8

Grid \u5E03\u5C40\u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD

\u5C5E\u6027\u5206\u4E3A\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\u548C\u5B50\u9879\u4E0A\u7684\u5C5E\u6027\u3002

### \u5BB9\u5668\u4E0A\u7684\u5C5E\u6027

| | | |
| --- | --- | --- |
| <kbd>grid-template-columns</kbd> | <kbd>grid-template-rows</kbd> | <kbd>grid-template-areas</kbd>
| <kbd>gap-column</kbd> |  <kbd>gap-row</kbd> | <kbd>gap</kbd> |
| <kbd>grid-auto-flow</kbd> | <kbd>grid-auto-columns</kbd> | <kbd>grid-auto-rows</kbd>
| <kbd>justify-items</kbd> | <kbd>align-items</kbd> | <kbd>place-items</kbd> |
| <kbd>justify-content</kbd> | <kbd>align-content</kbd> | <kbd>place-content</kbd> |
| <kbd>grid-template</kbd> | <kbd>grid</kbd>|`,frontmatter:{},index:5,start:159,end:177,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:fb,meta:{slide:{raw:`
# \u5C5E\u6027\u4E00\u89C8

Grid \u5E03\u5C40\u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD

### \u9879\u76EE\u4E0A\u7684\u5C5E\u6027

| | | |
| --- | --- | --- |
| <kbd>grid-column-start</kbd> | <kbd>grid-column-end</kbd> | <kbd>grid-row-start</kbd> |
| <kbd>grid-row-end</kbd> | <kbd>grid-column</kbd> | <kbd>grid-row</kbd> |
| <kbd>grid-area</kbd> | <kbd>justify-self</kbd> | <kbd>align-self</kbd> |
| <kbd>place-self</kbd> |

<!--
\u6709\u6CA1\u6709\u4E00\u4E1D\u4E1D\u7684\u5BB3\u6015
-->
`,title:"\u5C5E\u6027\u4E00\u89C8",level:1,content:`# \u5C5E\u6027\u4E00\u89C8

Grid \u5E03\u5C40\u4E0A\u7684\u5C5E\u6027\u4ECB\u7ECD

### \u9879\u76EE\u4E0A\u7684\u5C5E\u6027

| | | |
| --- | --- | --- |
| <kbd>grid-column-start</kbd> | <kbd>grid-column-end</kbd> | <kbd>grid-row-start</kbd> |
| <kbd>grid-row-end</kbd> | <kbd>grid-column</kbd> | <kbd>grid-row</kbd> |
| <kbd>grid-area</kbd> | <kbd>justify-self</kbd> | <kbd>align-self</kbd> |
| <kbd>place-self</kbd> |`,frontmatter:{},note:"\u6709\u6CA1\u6709\u4E00\u4E1D\u4E1D\u7684\u5BB3\u6015",index:6,start:178,end:196,notesHTML:`<p>\u6709\u6CA1\u6709\u4E00\u4E1D\u4E1D\u7684\u5BB3\u6015</p>
`,filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:kb,meta:{slide:{raw:`
# display

\u9ED8\u8BA4\u884C\u4E3A

<div style="width: 80%;">

\u5F53\u6211\u4EEC\u8BBE\u7F6E <kbd>display: grid</kbd> \u6216\u8005 <kbd>display: inline-grid</kbd> \u65F6\uFF0C\u5BB9\u5668\u5C31\u53D8\u4E3A\u4E86\u4E00\u4E2A\u7F51\u683C\u76D2\u5B50\u3002

\u5F53\u6CA1\u6709\u5212\u5206\u7F51\u683C\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u5B9A\u9AD8\u5EA6\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4E0E\u5757\u7EA7\u76D2\u5B50\u7684\u884C\u4E3A\u4E00\u81F4

\`\`\`css
.container {
  display: grid;
}
\`\`\`

<GridBox />

</div>
`,title:"display",level:1,content:`# display

\u9ED8\u8BA4\u884C\u4E3A

<div style="width: 80%;">

\u5F53\u6211\u4EEC\u8BBE\u7F6E <kbd>display: grid</kbd> \u6216\u8005 <kbd>display: inline-grid</kbd> \u65F6\uFF0C\u5BB9\u5668\u5C31\u53D8\u4E3A\u4E86\u4E00\u4E2A\u7F51\u683C\u76D2\u5B50\u3002

\u5F53\u6CA1\u6709\u5212\u5206\u7F51\u683C\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u5B9A\u9AD8\u5EA6\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4E0E\u5757\u7EA7\u76D2\u5B50\u7684\u884C\u4E3A\u4E00\u81F4

\`\`\`css
.container {
  display: grid;
}
\`\`\`

<GridBox />

</div>`,frontmatter:{},index:7,start:197,end:218,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Cb,meta:{slide:{raw:`
<div style="width: 80%;">

\u4E0E \`display: block\` \u4E0D\u540C\u7684\u662F\uFF0C\u5F53\u5BB9\u5668\u8BBE\u5B9A\u9AD8\u5EA6\u4EE5\u540E\uFF0C\u5B50\u9879\u4F1A\u5747\u5300\u5E73\u5206\u9AD8\u5EA6

\`\`\`css
.container {
  height: 300px;
}
\`\`\`

<GridBox
  :style="{
    width: '100%',
    height: '300px'
  }"
/>

</div>
`,content:`<div style="width: 80%;">

\u4E0E \`display: block\` \u4E0D\u540C\u7684\u662F\uFF0C\u5F53\u5BB9\u5668\u8BBE\u5B9A\u9AD8\u5EA6\u4EE5\u540E\uFF0C\u5B50\u9879\u4F1A\u5747\u5300\u5E73\u5206\u9AD8\u5EA6

\`\`\`css
.container {
  height: 300px;
}
\`\`\`

<GridBox
  :style="{
    width: '100%',
    height: '300px'
  }"
/>

</div>`,frontmatter:{},index:8,start:219,end:239,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Pb,meta:{slide:{raw:`
# grid-template-columns grid-template-rows

<div style="width: 80%;">

<kbd>grid-columns</kbd> \u89C4\u5B9A\u5C06\u7F51\u683C\u5212\u5206\u4E3A\u591A\u5C11\u5217\uFF0C\u5E76\u4E14\u6BCF\u5217\u7684\u8F68\u9053\u5927\u5C0F\u3002<kbd>grid-rows</kbd> \u89C4\u5B9A\u5C06\u7F51\u683C\u5212\u5206\u4E3A\u591A\u5C11\u884C\uFF0C\u4EE5\u53CA\u6BCF\u884C\u7684\u8F68\u9053\u5927\u5C0F\u3002

<TwoColumn>

<div>

\`\`\`css {2-3}
.container {
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: '50px 50px',
    gridTemplateRows: '50px 50px'
  }"
/>

</div>

<div>

\u8F68\u9053\u5927\u5C0F\u7684\u5355\u4F4D\u4E5F\u53EF\u4EE5\u662F\u767E\u5206\u6BD4

\`\`\`css {2-3}
.container {
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50px 50px;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: '25% 25% 25% 25%',
    gridTemplateRows: '50px 50px'
  }"
/>

</div>

</TwoColumn>

</div>
`,title:"grid-template-columns grid-template-rows",level:1,content:`# grid-template-columns grid-template-rows

<div style="width: 80%;">

<kbd>grid-columns</kbd> \u89C4\u5B9A\u5C06\u7F51\u683C\u5212\u5206\u4E3A\u591A\u5C11\u5217\uFF0C\u5E76\u4E14\u6BCF\u5217\u7684\u8F68\u9053\u5927\u5C0F\u3002<kbd>grid-rows</kbd> \u89C4\u5B9A\u5C06\u7F51\u683C\u5212\u5206\u4E3A\u591A\u5C11\u884C\uFF0C\u4EE5\u53CA\u6BCF\u884C\u7684\u8F68\u9053\u5927\u5C0F\u3002

<TwoColumn>

<div>

\`\`\`css {2-3}
.container {
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: '50px 50px',
    gridTemplateRows: '50px 50px'
  }"
/>

</div>

<div>

\u8F68\u9053\u5927\u5C0F\u7684\u5355\u4F4D\u4E5F\u53EF\u4EE5\u662F\u767E\u5206\u6BD4

\`\`\`css {2-3}
.container {
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50px 50px;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: '25% 25% 25% 25%',
    gridTemplateRows: '50px 50px'
  }"
/>

</div>

</TwoColumn>

</div>`,frontmatter:{},index:9,start:240,end:292,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Lb,meta:{slide:{raw:`
# repeat

<div style="width: 80%;">

\u901A\u8FC7 <kbd>repeat()</kbd> \u51FD\u6570\u6307\u5B9A\u91CD\u590D\u6B21\u6570\uFF0C\u907F\u514D\u5199\u91CD\u590D\u7684\u503C

\`\`\`css {2-3}
.container {
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(4, 50px)',
    gridTemplateRows: 'repeat(2, 50px)'
  }"
/>

</div>
`,title:"repeat",level:1,content:`# repeat

<div style="width: 80%;">

\u901A\u8FC7 <kbd>repeat()</kbd> \u51FD\u6570\u6307\u5B9A\u91CD\u590D\u6B21\u6570\uFF0C\u907F\u514D\u5199\u91CD\u590D\u7684\u503C

\`\`\`css {2-3}
.container {
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(4, 50px)',
    gridTemplateRows: 'repeat(2, 50px)'
  }"
/>

</div>`,frontmatter:{},index:10,start:293,end:317,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Db,meta:{slide:{raw:`
<div style="width: 80%;">

\u8FD8\u53EF\u4EE5\u91CD\u590D\u67D0\u79CD\u6A21\u5F0F

\`\`\`css {2-3}
.container {
  grid-template-columns: repeat(3, 50px 100px);
  grid-template-rows: repeat(2, 50px);
}
\`\`\`

<GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px 100px)',
    gridTemplateRows: 'repeat(2, 50px)'
  }"
/>

</div>

`,content:`<div style="width: 80%;">

\u8FD8\u53EF\u4EE5\u91CD\u590D\u67D0\u79CD\u6A21\u5F0F

\`\`\`css {2-3}
.container {
  grid-template-columns: repeat(3, 50px 100px);
  grid-template-rows: repeat(2, 50px);
}
\`\`\`

<GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px 100px)',
    gridTemplateRows: 'repeat(2, 50px)'
  }"
/>

</div>`,frontmatter:{},index:11,start:318,end:341,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Wb,meta:{slide:{raw:`
# fr \u3001auto-fill\u4E0Eminmax()

<!-- \u7279\u6B8A\u7684\u7F51\u683C\u5355\u4F4D -->

<div style="width: 80%;">

\u5F53\u6211\u4EEC\u89C4\u5B9A\u8F68\u9053\u5927\u5C0F\u65F6\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528 <kbd>fr</kbd> \u8FD9\u4E2A\u5355\u4F4D\uFF0C\u5B83\u8868\u793A\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E0E Flex \u5E03\u5C40\u4E2D\u7684 <kbd>flex-grow</kbd> \u7C7B\u4F3C\u3002

\`\`\`css {2-4}
.container {
  height: 100px;
  grid-template-cols: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
\`\`\`

<GridBox
  :counts="7"
  :style="{
    height: '100px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)'
  }"
/>

\u901A\u8FC7 <kbd>repeat()</kbd> \u548C <kbd>fr</kbd> \u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u7684\u5B9E\u73B0\u7ECF\u5178\u7684 12 \u7F51\u683C\u5E03\u5C40

\`\`\`css {2}
.container {
  grid-template-cols: repeat(12, 1fr);
}
\`\`\`

<!-- <GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(12, 1fr)',
  }"
/> -->

</div>
`,title:"fr \u3001auto-fill\u4E0Eminmax()",level:1,content:`# fr \u3001auto-fill\u4E0Eminmax()

<!-- \u7279\u6B8A\u7684\u7F51\u683C\u5355\u4F4D -->

<div style="width: 80%;">

\u5F53\u6211\u4EEC\u89C4\u5B9A\u8F68\u9053\u5927\u5C0F\u65F6\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528 <kbd>fr</kbd> \u8FD9\u4E2A\u5355\u4F4D\uFF0C\u5B83\u8868\u793A\u5269\u4F59\u7A7A\u95F4\uFF0C\u4E0E Flex \u5E03\u5C40\u4E2D\u7684 <kbd>flex-grow</kbd> \u7C7B\u4F3C\u3002

\`\`\`css {2-4}
.container {
  height: 100px;
  grid-template-cols: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
\`\`\`

<GridBox
  :counts="7"
  :style="{
    height: '100px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)'
  }"
/>

\u901A\u8FC7 <kbd>repeat()</kbd> \u548C <kbd>fr</kbd> \u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u7684\u5B9E\u73B0\u7ECF\u5178\u7684 12 \u7F51\u683C\u5E03\u5C40

\`\`\`css {2}
.container {
  grid-template-cols: repeat(12, 1fr);
}
\`\`\`

<!-- <GridBox
  :counts="12"
  :style="{
    gridTemplateColumns: 'repeat(12, 1fr)',
  }"
/> -->

</div>`,frontmatter:{},index:12,start:342,end:385,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Qb,meta:{slide:{raw:`
<div style="width: 80%;">

\u6709\u7684\u7F51\u683C\u5355\u5143\u7684\u5927\u5C0F\u662F\u56FA\u5B9A\uFF0C\u800C\u5BB9\u5668\u7684\u5927\u5C0F\u4E0D\u786E\u5B9A\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u6BCF\u4E00\u884C(\u5217)\u5C3D\u53EF\u80FD\u591A\u7684\u5305\u542B\u66F4\u591A\u7684\u7F51\u683C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <kbd>auto-fill</kbd> \u5173\u952E\u5B57\u8868\u793A\u81EA\u52A8\u586B\u5145

\`\`\`css {2}
.container {
  grid-template-cols: repeat(auto-fill, 100px);
  grid-template-rows: 100px 100px;
}
\`\`\`

<GridBox
  :counts="8"
  :style="{
    gridTemplateColumns: 'repeat(auto-fill, 100px)',
    gridTemplateRows: '100px 100px'
  }"
/>

</div>
`,content:`<div style="width: 80%;">

\u6709\u7684\u7F51\u683C\u5355\u5143\u7684\u5927\u5C0F\u662F\u56FA\u5B9A\uFF0C\u800C\u5BB9\u5668\u7684\u5927\u5C0F\u4E0D\u786E\u5B9A\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u6BCF\u4E00\u884C(\u5217)\u5C3D\u53EF\u80FD\u591A\u7684\u5305\u542B\u66F4\u591A\u7684\u7F51\u683C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <kbd>auto-fill</kbd> \u5173\u952E\u5B57\u8868\u793A\u81EA\u52A8\u586B\u5145

\`\`\`css {2}
.container {
  grid-template-cols: repeat(auto-fill, 100px);
  grid-template-rows: 100px 100px;
}
\`\`\`

<GridBox
  :counts="8"
  :style="{
    gridTemplateColumns: 'repeat(auto-fill, 100px)',
    gridTemplateRows: '100px 100px'
  }"
/>

</div>`,frontmatter:{},index:13,start:386,end:408,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:nx,meta:{slide:{raw:`
<div style="width: 80%;">

\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <kbd>minmax()</kbd> \u6765\u89C4\u5B9A\u8F68\u9053\u7684\u6700\u5C0F\u6700\u5927\u5C3A\u5BF8

\`\`\`css
.container {
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
\`\`\`

<GridBox
  :counts="3"
  :style="{
    gridTemplateColumns: '1fr 1fr minmax(100px, 1fr)',
    gridTemplateRows: '100px'
  }"
/>

\`\`\`css
.container {
  width: 250px;
  grid-template-columns: 1fr 1fr minmax(200px, 1fr);
}
\`\`\`

<GridBox
  :counts="3"
  :style="{
    width: '400px',
    gridTemplateColumns: '1fr 1fr minmax(200px, 1fr)',
    gridTemplateRows: '100px'
  }"
/>

</div>
`,content:`<div style="width: 80%;">

\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <kbd>minmax()</kbd> \u6765\u89C4\u5B9A\u8F68\u9053\u7684\u6700\u5C0F\u6700\u5927\u5C3A\u5BF8

\`\`\`css
.container {
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
\`\`\`

<GridBox
  :counts="3"
  :style="{
    gridTemplateColumns: '1fr 1fr minmax(100px, 1fr)',
    gridTemplateRows: '100px'
  }"
/>

\`\`\`css
.container {
  width: 250px;
  grid-template-columns: 1fr 1fr minmax(200px, 1fr);
}
\`\`\`

<GridBox
  :counts="3"
  :style="{
    width: '400px',
    gridTemplateColumns: '1fr 1fr minmax(200px, 1fr)',
    gridTemplateRows: '100px'
  }"
/>

</div>`,frontmatter:{},index:14,start:409,end:446,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:ax,meta:{slide:{raw:`
# \u5B50\u9879\u6392\u5217

\u901A\u8FC7\u7F51\u683C\u7EBF\u6307\u5B9A\u5B50\u9879\u7684\u4F4D\u7F6E

<div style="width: 80%;">

\u5F53\u6211\u4EEC\u5212\u5206\u597D\u7F51\u683C\u4EE5\u540E\uFF0C\u5B50\u9879\u4F1A\u4F9D\u6B21\u6309\u884C\u586B\u5145\uFF0C\u90A3\u53EF\u4E0D\u4EE5\u53EF\u4EE5\u6307\u5B9A\u5B50\u9879\u6392\u5217\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E\u5462\uFF1F\u901A\u8FC7\u5B50\u9879\u7684 <kbd>grid-column-start</kbd> <kbd>grid-column-end</kbd> <kbd>grid-row-start</kbd> <kbd>grid-row-end</kbd> \u5C5E\u6027\u3002

| \u5C5E\u6027 | \u542B\u4E49 |
| --- | --- |
| <kbd>grid-column-start</kbd> | \u8D77\u59CB\u5217\u7F51\u683C\u7EBF
| <kbd>grid-column-end</kbd> | \u7ED3\u675F\u5217\u7F51\u683C\u7EBF
| <kbd>grid-row-start</kbd> | \u8D77\u59CB\u884C\u7F51\u683C\u7EBF
| <kbd>grid-row-end</kbd> | \u7ED3\u675F\u884C\u7F51\u683C\u7EBF

</div>
`,title:"\u5B50\u9879\u6392\u5217",level:1,content:`# \u5B50\u9879\u6392\u5217

\u901A\u8FC7\u7F51\u683C\u7EBF\u6307\u5B9A\u5B50\u9879\u7684\u4F4D\u7F6E

<div style="width: 80%;">

\u5F53\u6211\u4EEC\u5212\u5206\u597D\u7F51\u683C\u4EE5\u540E\uFF0C\u5B50\u9879\u4F1A\u4F9D\u6B21\u6309\u884C\u586B\u5145\uFF0C\u90A3\u53EF\u4E0D\u4EE5\u53EF\u4EE5\u6307\u5B9A\u5B50\u9879\u6392\u5217\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E\u5462\uFF1F\u901A\u8FC7\u5B50\u9879\u7684 <kbd>grid-column-start</kbd> <kbd>grid-column-end</kbd> <kbd>grid-row-start</kbd> <kbd>grid-row-end</kbd> \u5C5E\u6027\u3002

| \u5C5E\u6027 | \u542B\u4E49 |
| --- | --- |
| <kbd>grid-column-start</kbd> | \u8D77\u59CB\u5217\u7F51\u683C\u7EBF
| <kbd>grid-column-end</kbd> | \u7ED3\u675F\u5217\u7F51\u683C\u7EBF
| <kbd>grid-row-start</kbd> | \u8D77\u59CB\u884C\u7F51\u683C\u7EBF
| <kbd>grid-row-end</kbd> | \u7ED3\u675F\u884C\u7F51\u683C\u7EBF

</div>`,frontmatter:{},index:15,start:447,end:465,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:dx,meta:{slide:{raw:`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">

<div>

\`\`\`css
.container {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
}
\`\`\`

\`\`\`css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
\`\`\`
</div>

<GridBox 
  :style="style"
  :itemStyle="itemStyle"
  :itemStyles="itemStyles"
/>

</div>

<style>
blockquote {
  margin-top: 10px;
  border-left-width: 5px;
}
</style>

<script setup>
const style = {
  gridTemplateColumns: 'repeat(3, 100px)',
  gridTemplateRows: 'repeat(2, 100px)',
}

const itemStyles = [{
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 2,
  backgroundColor: '#61649f'
}, {
  gridColumnStart: 2,
  gridColumnEnd: 4,
  gridRowStart: 2,
  gridRowEnd: 3,
  backgroundColor: '#1677b3'
}, {
  backgroundColor: '#12aa9c'
}, {
  backgroundColor: '#ad9e5f'
}]
<\/script>
`,content:`<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">

<div>

\`\`\`css
.container {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
}
\`\`\`

\`\`\`css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
\`\`\`
</div>

<GridBox 
  :style="style"
  :itemStyle="itemStyle"
  :itemStyles="itemStyles"
/>

</div>

<style>
blockquote {
  margin-top: 10px;
  border-left-width: 5px;
}
</style>

<script setup>
const style = {
  gridTemplateColumns: 'repeat(3, 100px)',
  gridTemplateRows: 'repeat(2, 100px)',
}

const itemStyles = [{
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 2,
  backgroundColor: '#61649f'
}, {
  gridColumnStart: 2,
  gridColumnEnd: 4,
  gridRowStart: 2,
  gridRowEnd: 3,
  backgroundColor: '#1677b3'
}, {
  backgroundColor: '#12aa9c'
}, {
  backgroundColor: '#ad9e5f'
}]
<\/script>`,frontmatter:{},index:16,start:466,end:534,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:vx,meta:{slide:{raw:`
<div style="width: 80%;">

# grid-column grid-row

<div><kbd>grid-column</kbd> \u4E0E <kbd>grid-row</kbd> \u662F\u7B80\u5199\u5F62\u5F0F\uFF0C\u5199\u6CD5\u5982\u4E0B</div>

\`\`\`css
grid-column: grid-column-start / grid-column-end;
grid-row: grid-row-start / grid-row-end;
\`\`\`

\u6240\u4EE5\u4E0A\u8FF0\u6837\u5F0F\u53EF\u4EE5\u4FEE\u6539\u5982\u4E0B

\`\`\`css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
\`\`\`

</div>
`,title:"grid-column grid-row",level:1,content:`<div style="width: 80%;">

# grid-column grid-row

<div><kbd>grid-column</kbd> \u4E0E <kbd>grid-row</kbd> \u662F\u7B80\u5199\u5F62\u5F0F\uFF0C\u5199\u6CD5\u5982\u4E0B</div>

\`\`\`css
grid-column: grid-column-start / grid-column-end;
grid-row: grid-row-start / grid-row-end;
\`\`\`

\u6240\u4EE5\u4E0A\u8FF0\u6837\u5F0F\u53EF\u4EE5\u4FEE\u6539\u5982\u4E0B

\`\`\`css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
\`\`\`

</div>`,frontmatter:{},index:17,start:535,end:562,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:xx,meta:{slide:{raw:`
# span

\u5728 <kbd>grid-column</kbd> \u4E0E <kbd>grid-row</kbd> \u4F7F\u7528  <kbd>span</kbd> \u6765\u8868\u793A\u8DE8\u8D8A\u7684\u7F51\u683C\u6570\uFF0C\u6240\u4EE5\u4E0A\u8FF0\u6837\u5F0F\u53EF\u4EE5\u4FEE\u6539\u5982\u4E0B

\`\`\`css {2,6}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / span 2;
  grid-row: 2 / 3;
}
\`\`\`
`,title:"span",level:1,content:`# span

\u5728 <kbd>grid-column</kbd> \u4E0E <kbd>grid-row</kbd> \u4F7F\u7528  <kbd>span</kbd> \u6765\u8868\u793A\u8DE8\u8D8A\u7684\u7F51\u683C\u6570\uFF0C\u6240\u4EE5\u4E0A\u8FF0\u6837\u5F0F\u53EF\u4EE5\u4FEE\u6539\u5982\u4E0B

\`\`\`css {2,6}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / 2;
}
.item2 {
  grid-column: 2 / span 2;
  grid-row: 2 / 3;
}
\`\`\``,frontmatter:{},index:18,start:563,end:579,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Px,meta:{slide:{raw:`
# \u7F51\u683C\u7EBF\u547D\u540D

<div style="width: 80%;">

\u6211\u4EEC\u53EF\u4EE5\u5728\u901A\u8FC7 <kbd>grid-template-rows</kbd> \u4E0E <kbd>grid-template-columns</kbd> \u5212\u5206\u7F51\u683C\u7684\u540C\u65F6\u4E3A\u7F51\u683C\u7EBF\u8FDB\u884C\u547D\u540D\u3002

\u7F51\u683C\u7684\u540D\u79F0\u4F7F\u7528 <kbd>[]</kbd> \u5305\u88F9\u8D77\u6765

\`\`\`css
.container {
  grid-template-columns: [c1] 100px [c2] 100px [c3] 1px [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3];
}
\`\`\`

\u63A5\u7740\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7F51\u683C\u7EBF\u7684\u540D\u79F0\u6307\u5B9A\u533A\u57DF

\`\`\`css
grid-column: c1 / c3;
grid-row: r1 / r2;
\`\`\`

\u540C\u4E00\u4E2A\u7F51\u683C\u7EBF\u53EF\u4EE5\u6709\u591A\u4E2A\u540D\u79F0\uFF0C\u540D\u79F0\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u95F4\u9694 <kbd>[r1 start]</kbd>.

</div>
`,title:"\u7F51\u683C\u7EBF\u547D\u540D",level:1,content:`# \u7F51\u683C\u7EBF\u547D\u540D

<div style="width: 80%;">

\u6211\u4EEC\u53EF\u4EE5\u5728\u901A\u8FC7 <kbd>grid-template-rows</kbd> \u4E0E <kbd>grid-template-columns</kbd> \u5212\u5206\u7F51\u683C\u7684\u540C\u65F6\u4E3A\u7F51\u683C\u7EBF\u8FDB\u884C\u547D\u540D\u3002

\u7F51\u683C\u7684\u540D\u79F0\u4F7F\u7528 <kbd>[]</kbd> \u5305\u88F9\u8D77\u6765

\`\`\`css
.container {
  grid-template-columns: [c1] 100px [c2] 100px [c3] 1px [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3];
}
\`\`\`

\u63A5\u7740\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7F51\u683C\u7EBF\u7684\u540D\u79F0\u6307\u5B9A\u533A\u57DF

\`\`\`css
grid-column: c1 / c3;
grid-row: r1 / r2;
\`\`\`

\u540C\u4E00\u4E2A\u7F51\u683C\u7EBF\u53EF\u4EE5\u6709\u591A\u4E2A\u540D\u79F0\uFF0C\u540D\u79F0\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u95F4\u9694 <kbd>[r1 start]</kbd>.

</div>`,frontmatter:{},index:19,start:580,end:607,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Nx,meta:{slide:{raw:`
# grid-template-areas\u3001grid-area

\u4E3A\u7F51\u683C\u5212\u5206\u533A\u57DF

<div style="width: 80%;">

\u901A\u8FC7\u4E3A\u5B50\u9879\u6307\u5B9A\u7F51\u683C\u7EBF\u6765\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u8D77\u6765\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u4E00\u79CD\u66F4\u5FEB\u6307\u5B9A\u5B50\u9879\u533A\u57DF\u7684\u7684\u65B9\u6CD5\u3002\u901A\u8FC7 <kbd>grid-template-areas</kbd> \u5C5E\u6027\u53EF\u4EE5\u4E3A\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u533A\u57DF\uFF0C\u4F8B\u5982\u6211\u4EEC\u5C06\u4E00\u4E2A $4 \\times 3$ \u7684\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u4E3A\u5982\u4E0B\u533A\u57DF

\`\`\`css
.container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 150px 50px;
  grid-template-areas: 'header header header header' 
                       'main main . side' 
                       'footer footer footer footer';
}
\`\`\`

\u4F7F\u7528 <kbd>.</kbd> \u8868\u793A\u8FD9\u4E2A\u7F51\u683C\u5355\u5143\u6CA1\u6709\u88AB\u4F7F\u7528\u3002

</div>
`,title:"grid-template-areas\u3001grid-area",level:1,content:`# grid-template-areas\u3001grid-area

\u4E3A\u7F51\u683C\u5212\u5206\u533A\u57DF

<div style="width: 80%;">

\u901A\u8FC7\u4E3A\u5B50\u9879\u6307\u5B9A\u7F51\u683C\u7EBF\u6765\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u8D77\u6765\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u4E00\u79CD\u66F4\u5FEB\u6307\u5B9A\u5B50\u9879\u533A\u57DF\u7684\u7684\u65B9\u6CD5\u3002\u901A\u8FC7 <kbd>grid-template-areas</kbd> \u5C5E\u6027\u53EF\u4EE5\u4E3A\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u533A\u57DF\uFF0C\u4F8B\u5982\u6211\u4EEC\u5C06\u4E00\u4E2A $4 \\times 3$ \u7684\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u4E3A\u5982\u4E0B\u533A\u57DF

\`\`\`css
.container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 150px 50px;
  grid-template-areas: 'header header header header' 
                       'main main . side' 
                       'footer footer footer footer';
}
\`\`\`

\u4F7F\u7528 <kbd>.</kbd> \u8868\u793A\u8FD9\u4E2A\u7F51\u683C\u5355\u5143\u6CA1\u6709\u88AB\u4F7F\u7528\u3002

</div>`,frontmatter:{},index:20,start:608,end:631,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Hx,meta:{slide:{raw:`
<TwoColumn>

<div>

\u5728\u5B50\u9879\u4E2D\u901A\u8FC7 <kbd>grid-area</kbd> \u5E94\u7528\u5BB9\u5668\u4E2D\u5212\u5206\u7684\u533A\u57DF\uFF0C\u5B50\u9879\u5373\u53EF\u5360\u7528\u8FD9\u4E2A\u533A\u57DF

\`\`\`css
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.side {
  grid-area: side;
}
.footer {
  grid-area: footer; 
}
\`\`\`

</div>

<GridBox
  :counts="4"
  :style="style"
  :itemContents="['header', 'main', 'side', 'footer']"
  :itemStyles="itemStyles"
/>

</TwoColumn>

<script setup>
const style = {
  width: '380px',
  // gap: '5px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '50px 150px 50px',
  gridTemplateAreas: "'header header header header' 'main main . side' 'footer footer footer footer'",
}

const itemStyles = [{
  gridArea: 'header',
  backgroundColor: '#61649f'
}, {
  gridArea: 'main',
  backgroundColor: '#1677b3'
}, {
  gridArea: 'side',
  backgroundColor: '#12aa9c'
}, {
  gridArea: 'footer',
  backgroundColor: '#0f95b0'
}]
<\/script>
`,content:`<TwoColumn>

<div>

\u5728\u5B50\u9879\u4E2D\u901A\u8FC7 <kbd>grid-area</kbd> \u5E94\u7528\u5BB9\u5668\u4E2D\u5212\u5206\u7684\u533A\u57DF\uFF0C\u5B50\u9879\u5373\u53EF\u5360\u7528\u8FD9\u4E2A\u533A\u57DF

\`\`\`css
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.side {
  grid-area: side;
}
.footer {
  grid-area: footer; 
}
\`\`\`

</div>

<GridBox
  :counts="4"
  :style="style"
  :itemContents="['header', 'main', 'side', 'footer']"
  :itemStyles="itemStyles"
/>

</TwoColumn>

<script setup>
const style = {
  width: '380px',
  // gap: '5px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '50px 150px 50px',
  gridTemplateAreas: "'header header header header' 'main main . side' 'footer footer footer footer'",
}

const itemStyles = [{
  gridArea: 'header',
  backgroundColor: '#61649f'
}, {
  gridArea: 'main',
  backgroundColor: '#1677b3'
}, {
  gridArea: 'side',
  backgroundColor: '#12aa9c'
}, {
  gridArea: 'footer',
  backgroundColor: '#0f95b0'
}]
<\/script>`,frontmatter:{},index:21,start:632,end:689,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Kx,meta:{slide:{raw:`
<div style="width: 80%;">

\u901A\u8FC7 <kbd>grid-template-areas</kbd> \u4E3A\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u533A\u57DF\uFF0C\u5305\u56F4\u533A\u57DF\u7684\u7F51\u683C\u7EBF\u4F1A\u88AB\u81EA\u52A8\u547D\u540D\u4E3A <kbd>\u533A\u57DF\u540D\u79F0-start</kbd> \u6216 <kbd>\u533A\u57DF\u540D\u79F0-end</kbd>\uFF0C\u4F8B\u5982\u533A\u57DF\u540D <kbd>header</kbd> \u7684\u8D77\u59CB\u548C\u7EC8\u6B62\u7F51\u683C\u7EBF\u4F1A\u88AB\u547D\u540D\u4E3A <kbd>header-start</kbd> \u548C <kbd>header-end</kbd>.

<div>

<kbd>grid-area</kbd> \u8FD8\u53EF\u4EE5\u88AB\u7528\u4F5C <kbd>grid-row-start</kbd> <kbd>grid-coulmn-start</kbd> <kbd>grid-row-end</kbd> <kbd>grid-column-end</kbd> \u7684\u7B80\u5199\u5F62\u5F0F

\`\`\`css
grid-area: 
  grid-row-start / grid-column-start / grid-row-end / grid-column-end;
\`\`\`

</div>

<div>

\u6211\u4EEC\u4E3A header \u5B50\u9879\u6307\u5B9A\u4E5F\u53EF\u533A\u57DF\u53EF\u4EE5\u5199\u4E3A\u5982\u4E0B

\`\`\`css
.header {
  grid-area: header-start / header-start / header-end / header-end;
}
\`\`\`
</div>

</div>

`,content:`<div style="width: 80%;">

\u901A\u8FC7 <kbd>grid-template-areas</kbd> \u4E3A\u7F51\u683C\u7CFB\u7EDF\u5212\u5206\u533A\u57DF\uFF0C\u5305\u56F4\u533A\u57DF\u7684\u7F51\u683C\u7EBF\u4F1A\u88AB\u81EA\u52A8\u547D\u540D\u4E3A <kbd>\u533A\u57DF\u540D\u79F0-start</kbd> \u6216 <kbd>\u533A\u57DF\u540D\u79F0-end</kbd>\uFF0C\u4F8B\u5982\u533A\u57DF\u540D <kbd>header</kbd> \u7684\u8D77\u59CB\u548C\u7EC8\u6B62\u7F51\u683C\u7EBF\u4F1A\u88AB\u547D\u540D\u4E3A <kbd>header-start</kbd> \u548C <kbd>header-end</kbd>.

<div>

<kbd>grid-area</kbd> \u8FD8\u53EF\u4EE5\u88AB\u7528\u4F5C <kbd>grid-row-start</kbd> <kbd>grid-coulmn-start</kbd> <kbd>grid-row-end</kbd> <kbd>grid-column-end</kbd> \u7684\u7B80\u5199\u5F62\u5F0F

\`\`\`css
grid-area: 
  grid-row-start / grid-column-start / grid-row-end / grid-column-end;
\`\`\`

</div>

<div>

\u6211\u4EEC\u4E3A header \u5B50\u9879\u6307\u5B9A\u4E5F\u53EF\u533A\u57DF\u53EF\u4EE5\u5199\u4E3A\u5982\u4E0B

\`\`\`css
.header {
  grid-area: header-start / header-start / header-end / header-end;
}
\`\`\`
</div>

</div>`,frontmatter:{},index:22,start:690,end:720,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:ew,meta:{slide:{raw:`
# gap

\u7F51\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD

<div style="width: 80%;">

  \u901A\u8FC7 <kbd>column-gap</kbd> \u4E0E <kbd>row-gap</kbd> \u6765\u63A7\u5236\u7F51\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD

  \`\`\`css
  .container {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 50px);
    column-gap: 10px;
    row-gap: 5px;
  }
  \`\`\`

  <GridBox
    :counts="7"
    :style="{
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 50px)',
      columnGap: '10px',
      rowGap: '5px'
    }"
  />
</div>
`,title:"gap",level:1,content:`# gap

\u7F51\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD

<div style="width: 80%;">

  \u901A\u8FC7 <kbd>column-gap</kbd> \u4E0E <kbd>row-gap</kbd> \u6765\u63A7\u5236\u7F51\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD

  \`\`\`css
  .container {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 50px);
    column-gap: 10px;
    row-gap: 5px;
  }
  \`\`\`

  <GridBox
    :counts="7"
    :style="{
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 50px)',
      columnGap: '10px',
      rowGap: '5px'
    }"
  />
</div>`,frontmatter:{},index:23,start:721,end:750,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:aw,meta:{slide:{raw:`
# grid-auto-flow

\u81EA\u52A8\u586B\u5145\u7684\u65B9\u5F0F

<div style="width: 80%;">

\u9ED8\u8BA4\u7684\u586B\u5145\u65B9\u5F0F\u4E3A\u6309\u884C\u81EA\u52A8\u586B\u5145\uFF0C\u5B83\u662F\u901A\u8FC7 <kbd>grid-auto-flow</kbd> \u5C5E\u6027\u6765\u89C4\u5B9A\u7684\uFF0C\u5176\u9ED8\u8BA4\u503C\u4E3A <kbd>row</kbd>\uFF0C\u5373\u6309\u884C\u586B\u5145

\`\`\`css
.container {
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 50px);
  grid-auto-flow: row;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(2, 50px)',
    gridAutoFlow: 'row'
  }"
/>

</div>
`,title:"grid-auto-flow",level:1,content:`# grid-auto-flow

\u81EA\u52A8\u586B\u5145\u7684\u65B9\u5F0F

<div style="width: 80%;">

\u9ED8\u8BA4\u7684\u586B\u5145\u65B9\u5F0F\u4E3A\u6309\u884C\u81EA\u52A8\u586B\u5145\uFF0C\u5B83\u662F\u901A\u8FC7 <kbd>grid-auto-flow</kbd> \u5C5E\u6027\u6765\u89C4\u5B9A\u7684\uFF0C\u5176\u9ED8\u8BA4\u503C\u4E3A <kbd>row</kbd>\uFF0C\u5373\u6309\u884C\u586B\u5145

\`\`\`css
.container {
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 50px);
  grid-auto-flow: row;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(2, 50px)',
    gridAutoFlow: 'row'
  }"
/>

</div>`,frontmatter:{},index:24,start:751,end:778,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:uw,meta:{slide:{raw:`
<div style="width: 80%;">

\u8BBE\u7F6E <kbd>grid-auto-flow</kbd> \u4E3A <kbd>column</kbd>\uFF0C\u5143\u7D20\u5C06\u4F1A\u9ED8\u8BA4\u6309\u5217\u8FDB\u884C\u586B\u5145

\`\`\`css {2}
.container {
  grid-auto-flow: column;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(2, 50px)',
    gridAutoFlow: 'column'
  }"
/>

</div>
`,content:`<div style="width: 80%;">

\u8BBE\u7F6E <kbd>grid-auto-flow</kbd> \u4E3A <kbd>column</kbd>\uFF0C\u5143\u7D20\u5C06\u4F1A\u9ED8\u8BA4\u6309\u5217\u8FDB\u884C\u586B\u5145

\`\`\`css {2}
.container {
  grid-auto-flow: column;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(2, 50px)',
    gridAutoFlow: 'column'
  }"
/>

</div>`,frontmatter:{},index:25,start:779,end:800,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:fw,meta:{slide:{raw:`
<div>

\u9ED8\u8BA4\u7684\u586B\u5145\u7B97\u6CD5\u662F\u7A00\u758F <kbd>(sparse)</kbd> \u586B\u5145

\`\`\`css
.container {
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  grid-auto-flow: row;
}
.item1 {
  grid-column: 1 / 3;
}
.item2 {
  grid-column: 1 / 2;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gridAutoFlow: 'row'
  }"
  :itemStyles="[{
    gridColumn: '1 / 3'
  }, {
    gridColumn: '1 / 3'
  }]"
/>

</div>
`,content:`<div>

\u9ED8\u8BA4\u7684\u586B\u5145\u7B97\u6CD5\u662F\u7A00\u758F <kbd>(sparse)</kbd> \u586B\u5145

\`\`\`css
.container {
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(3, 50px);
  grid-auto-flow: row;
}
.item1 {
  grid-column: 1 / 3;
}
.item2 {
  grid-column: 1 / 2;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gridAutoFlow: 'row'
  }"
  :itemStyles="[{
    gridColumn: '1 / 3'
  }, {
    gridColumn: '1 / 3'
  }]"
/>

</div>`,frontmatter:{},index:26,start:801,end:836,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:hw,meta:{slide:{raw:`
<div>

\`\`\`css
.container {
  grid-auto-flow: row dense;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gridAutoFlow: 'row dense'
  }"
  :itemStyles="[{
    gridColumn: '1 / 3'
  }, {
    gridColumn: '1 / 3'
  }]"
/>

</div>
`,content:`<div>

\`\`\`css
.container {
  grid-auto-flow: row dense;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gridAutoFlow: 'row dense'
  }"
  :itemStyles="[{
    gridColumn: '1 / 3'
  }, {
    gridColumn: '1 / 3'
  }]"
/>

</div>`,frontmatter:{},index:27,start:837,end:862,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:yw,meta:{slide:{raw:`
# justify-content \u4E0E align-content

\u5F53\u7F51\u683C\u7CFB\u7EDF\u7684\u5927\u5C0F\u5C0F\u4E8E\u5BB9\u5668\u5927\u5C0F\u65F6\uFF0C\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002

<div style="width: 80%;">

<kbd>justify-content</kbd> \u4E0E <kbd>align-content</kbd> \u5747\u662F\u4F4D\u4E8E\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\uFF0C\u5F53\u7F51\u683C\u7CFB\u7EDF\u7684\u5BBD\u5EA6\u5C0F\u4E8E\u5BB9\u5668\u7684\u5BBD\u5EA6\u65F6\uFF0C<kbd>justify-content</kbd> \u5C06\u4F1A\u6307\u5B9A\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C<kbd>align-content</kbd> \u5219\u6307\u5B9A\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002

| <kbd>stretch</kbd> | <kbd>start</kbd> | <kbd>end</kbd> |
| --- | --- | --- |
| <kbd>center</kbd> | <kbd>space-between</kbd> | <kbd>space-around</kbd> |
| <kbd>space-evenly</kbd> |

</div>
`,title:"justify-content \u4E0E align-content",level:1,content:`# justify-content \u4E0E align-content

\u5F53\u7F51\u683C\u7CFB\u7EDF\u7684\u5927\u5C0F\u5C0F\u4E8E\u5BB9\u5668\u5927\u5C0F\u65F6\uFF0C\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002

<div style="width: 80%;">

<kbd>justify-content</kbd> \u4E0E <kbd>align-content</kbd> \u5747\u662F\u4F4D\u4E8E\u5BB9\u5668\u4E0A\u7684\u5C5E\u6027\uFF0C\u5F53\u7F51\u683C\u7CFB\u7EDF\u7684\u5BBD\u5EA6\u5C0F\u4E8E\u5BB9\u5668\u7684\u5BBD\u5EA6\u65F6\uFF0C<kbd>justify-content</kbd> \u5C06\u4F1A\u6307\u5B9A\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F\uFF0C<kbd>align-content</kbd> \u5219\u6307\u5B9A\u7F51\u683C\u7CFB\u7EDF\u5728\u5BB9\u5668\u7684\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002

| <kbd>stretch</kbd> | <kbd>start</kbd> | <kbd>end</kbd> |
| --- | --- | --- |
| <kbd>center</kbd> | <kbd>space-between</kbd> | <kbd>space-around</kbd> |
| <kbd>space-evenly</kbd> |

</div>`,frontmatter:{},index:28,start:863,end:879,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Sw,meta:{slide:{raw:`
<TwoColumn>

<div>

<div>

<!-- <kbd>start</kbd> -->

\`\`\`css
justify-content: start;
\`\`\`

<GridBox
  :style="style[0]"
/>

</div>

<div>

\`\`\`css
justify-content: end;
\`\`\`

<GridBox
  :style="style[1]"
/>

</div>

<div>

\`\`\`css
justify-content: center;
\`\`\`

<GridBox
  :style="style[2]"
/>

</div>

</div>

<div>

<div>

\`\`\`css
justify-content: space-between;
\`\`\`

<GridBox
  :style="style[3]"
/>
</div>

<div>

\`\`\`css
justify-content: space-around;
\`\`\`

<GridBox
  :style="style[4]"
/>

</div>

<div>

\`\`\`css
justify-content: space-evenly;
\`\`\`

<GridBox
  :style="style[5]"
/>

</div>
</div>

</TwoColumn>


<script setup>
const style = [{
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'center'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-between'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-around'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-evenly'
}]
<\/script>

`,content:`<TwoColumn>

<div>

<div>

<!-- <kbd>start</kbd> -->

\`\`\`css
justify-content: start;
\`\`\`

<GridBox
  :style="style[0]"
/>

</div>

<div>

\`\`\`css
justify-content: end;
\`\`\`

<GridBox
  :style="style[1]"
/>

</div>

<div>

\`\`\`css
justify-content: center;
\`\`\`

<GridBox
  :style="style[2]"
/>

</div>

</div>

<div>

<div>

\`\`\`css
justify-content: space-between;
\`\`\`

<GridBox
  :style="style[3]"
/>
</div>

<div>

\`\`\`css
justify-content: space-around;
\`\`\`

<GridBox
  :style="style[4]"
/>

</div>

<div>

\`\`\`css
justify-content: space-evenly;
\`\`\`

<GridBox
  :style="style[5]"
/>

</div>
</div>

</TwoColumn>


<script setup>
const style = [{
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'center'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-between'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-around'
}, {
  gridTemplateColumns: 'repeat(4, 80px)',
  gridTemplateRows: '80px',
  justifyContent: 'space-evenly'
}]
<\/script>`,frontmatter:{},index:29,start:880,end:995,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Mw,meta:{slide:{raw:`
<div>

  <div class="grid grid-cols-6 gap-8">

  <div>

  <kbd>start</kbd>

  <GridBox
    :counts="3"
    :style="style[0]"
  />
  </div>

  <div>

  <kbd>end</kbd>

  <GridBox
    :counts="3"
    :style="style[1]"
  />

  </div>

  <div>

  <kbd>center</kbd>

  <GridBox
    :counts="3"
    :style="style[2]"
  />

  </div>

  <div>

  <kbd>space-between</kbd>

  <GridBox
    :counts="3"
    :style="style[3]"
  />

  </div>

  <div>

  <kbd>space-around</kbd>

  <GridBox
    :counts="3"
    :style="style[4]"
  />

  </div>

  <div>

  <kbd>space-evenly</kbd>

  <GridBox
    :counts="3"
    :style="style[5]"
  />

  </div>

  </div>

</div>

<script setup>
const style = [{
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'start'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'end'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'center'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-between'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-around'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-evenly'
}]
<\/script>

<!-- \u53D6\u503C\u540C <kbd>justify-content</kbd> -->
`,content:`<div>

  <div class="grid grid-cols-6 gap-8">

  <div>

  <kbd>start</kbd>

  <GridBox
    :counts="3"
    :style="style[0]"
  />
  </div>

  <div>

  <kbd>end</kbd>

  <GridBox
    :counts="3"
    :style="style[1]"
  />

  </div>

  <div>

  <kbd>center</kbd>

  <GridBox
    :counts="3"
    :style="style[2]"
  />

  </div>

  <div>

  <kbd>space-between</kbd>

  <GridBox
    :counts="3"
    :style="style[3]"
  />

  </div>

  <div>

  <kbd>space-around</kbd>

  <GridBox
    :counts="3"
    :style="style[4]"
  />

  </div>

  <div>

  <kbd>space-evenly</kbd>

  <GridBox
    :counts="3"
    :style="style[5]"
  />

  </div>

  </div>

</div>

<script setup>
const style = [{
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'start'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'end'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'center'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-between'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-around'
}, {
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(3, 80px)',
  height: '350px',
  alignContent: 'space-evenly'
}]
<\/script>`,frontmatter:{},note:"\u53D6\u503C\u540C <kbd>justify-content</kbd>",index:30,start:996,end:1106,notesHTML:`<p>\u53D6\u503C\u540C <kbd>justify-content</kbd></p>
`,filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Dw,meta:{slide:{raw:`
# justify-items \u4E0E align-items

<!-- \u5B50\u9879\u5728\u7F51\u683C\u4E2D\u7684\u5BF9\u9F50\u65B9\u5F0F -->

<div style="width: 80%;">

\u6CA1\u6709\u4E3A\u5B50\u9879\u8BBE\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u65F6\uFF0C\u9ED8\u8BA4\u5B50\u9879\u662F\u81EA\u52A8\u6491\u6EE1\u7F51\u683C\u5355\u5143\u7684\uFF0C\u5982\u679C\u4E3A\u5B50\u9879\u8BBE\u5B9A\u5927\u5C0F\uFF0C\u90A3\u4E48\u5B50\u9879\u5C31\u4E0D\u4F1A\u6491\u6EE1\u7F51\u683C\u5355\u5143\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u901A\u8FC7 <kbd>justify-items</kbd> \u548C <kbd>align-items</kbd> \u5206\u522B\u8BBE\u7F6E\u5B50\u9879\u7684\u6C34\u5E73\u5BF9\u9F50\u548C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002

\u6709\u56DB\u79CD\u53D6\u503C\uFF0C\u5206\u522B\u662F <kbd>start</kbd>\u3001<kbd>end</kbd>\u3001<kbd>center</kbd>\u3001<kbd>stretch</kbd>\uFF0C\u9ED8\u8BA4\u503C\u4E3A <kbd>stretch</kbd>\uFF0C\u5373\u81EA\u52A8\u5145\u6EE1\u7F51\u683C\u5355\u5143\u7684\u5BBD\u5EA6\u3002

<div>

\`\`\`css
.container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px;
}
.item {
  width: 100px;
}
\`\`\`

<GridBox
  :style="style[0]"
  :itemStyle="itemStyle[0]"
/>


</div>

</div>

<script setup>
const style = [{
  // width: '300px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'center'
}]

const itemStyle = [{
  width: '100px'
}]
<\/script>
`,title:"justify-items \u4E0E align-items",level:1,content:`# justify-items \u4E0E align-items

<!-- \u5B50\u9879\u5728\u7F51\u683C\u4E2D\u7684\u5BF9\u9F50\u65B9\u5F0F -->

<div style="width: 80%;">

\u6CA1\u6709\u4E3A\u5B50\u9879\u8BBE\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u65F6\uFF0C\u9ED8\u8BA4\u5B50\u9879\u662F\u81EA\u52A8\u6491\u6EE1\u7F51\u683C\u5355\u5143\u7684\uFF0C\u5982\u679C\u4E3A\u5B50\u9879\u8BBE\u5B9A\u5927\u5C0F\uFF0C\u90A3\u4E48\u5B50\u9879\u5C31\u4E0D\u4F1A\u6491\u6EE1\u7F51\u683C\u5355\u5143\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u901A\u8FC7 <kbd>justify-items</kbd> \u548C <kbd>align-items</kbd> \u5206\u522B\u8BBE\u7F6E\u5B50\u9879\u7684\u6C34\u5E73\u5BF9\u9F50\u548C\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\u3002

\u6709\u56DB\u79CD\u53D6\u503C\uFF0C\u5206\u522B\u662F <kbd>start</kbd>\u3001<kbd>end</kbd>\u3001<kbd>center</kbd>\u3001<kbd>stretch</kbd>\uFF0C\u9ED8\u8BA4\u503C\u4E3A <kbd>stretch</kbd>\uFF0C\u5373\u81EA\u52A8\u5145\u6EE1\u7F51\u683C\u5355\u5143\u7684\u5BBD\u5EA6\u3002

<div>

\`\`\`css
.container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px;
}
.item {
  width: 100px;
}
\`\`\`

<GridBox
  :style="style[0]"
  :itemStyle="itemStyle[0]"
/>


</div>

</div>

<script setup>
const style = [{
  // width: '300px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 100px)',
  justifyItems: 'center'
}]

const itemStyle = [{
  width: '100px'
}]
<\/script>`,frontmatter:{},index:31,start:1107,end:1164,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:qw,meta:{slide:{raw:`
<div style="width: 80%;">

<div>

\`\`\`css
jusitify-items: start;
\`\`\`

<GridBox
  :style="style[1]"
  :itemStyle="itemStyle[0]"
/>

</div>

<div>

\`\`\`css
jusitify-items: end;
\`\`\`

<GridBox
  :style="style[2]"
  :itemStyle="itemStyle[0]"
/>

</div>

<div>

\`\`\`css
jusitify-items: center;
\`\`\`

<GridBox
  :style="style[3]"
  :itemStyle="itemStyle[0]"
/>

</div>
</div>


<script setup>
const style = [{
  // width: '300px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'center'
}]

const itemStyle = [{
  width: '80px'
}]
<\/script>
`,content:`<div style="width: 80%;">

<div>

\`\`\`css
jusitify-items: start;
\`\`\`

<GridBox
  :style="style[1]"
  :itemStyle="itemStyle[0]"
/>

</div>

<div>

\`\`\`css
jusitify-items: end;
\`\`\`

<GridBox
  :style="style[2]"
  :itemStyle="itemStyle[0]"
/>

</div>

<div>

\`\`\`css
jusitify-items: center;
\`\`\`

<GridBox
  :style="style[3]"
  :itemStyle="itemStyle[0]"
/>

</div>
</div>


<script setup>
const style = [{
  // width: '300px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'start'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'end'
}, {
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(1, 80px)',
  justifyItems: 'center'
}]

const itemStyle = [{
  width: '80px'
}]
<\/script>`,frontmatter:{},index:32,start:1165,end:1233,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Zw,meta:{slide:{raw:`
<TwoColumn>

<div>

\`\`\`css
align-items: start;
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

\`\`\`css
align-items: end;
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px',
    alignItems: 'end'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

</div>

<div>

\`\`\`css
align-items: center;
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px',
    alignItems: 'center'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

</div>

</TwoColumn>

<kbd>place-items</kbd> \u662F <kbd>align-items</kbd> \u548C <kbd>justify-items</kbd> \u7684\u7B80\u5199\u5F62\u5F0F\u3002<kbd>place-items</kbd> \u7B2C\u4E00\u4E2A\u8BBE\u7F6E\u7684\u503C\u662F <kbd>align-items</kbd>\uFF0C\u7B2C\u4E8C\u4E2A\u8BBE\u7F6E\u7684\u503C\u662F <kbd>justify-items</kbd>\uFF0C\u5F53\u4E3A <kbd>place-items</kbd> \u53EA\u8BBE\u7F6E\u4E00\u4E2A\u503C\u65F6\uFF0C\u8868\u793A\u4E3A\u4E8C\u8005\u8BBE\u7F6E\u76F8\u540C\u7684\u503C
`,content:`<TwoColumn>

<div>

\`\`\`css
align-items: start;
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

\`\`\`css
align-items: end;
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px',
    alignItems: 'end'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

</div>

<div>

\`\`\`css
align-items: center;
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 60px)',
    gridTemplateRows: '120px',
    alignItems: 'center'
  }"
  :itemStyle="{
    height: '60px'
  }"
/>

</div>

</TwoColumn>

<kbd>place-items</kbd> \u662F <kbd>align-items</kbd> \u548C <kbd>justify-items</kbd> \u7684\u7B80\u5199\u5F62\u5F0F\u3002<kbd>place-items</kbd> \u7B2C\u4E00\u4E2A\u8BBE\u7F6E\u7684\u503C\u662F <kbd>align-items</kbd>\uFF0C\u7B2C\u4E8C\u4E2A\u8BBE\u7F6E\u7684\u503C\u662F <kbd>justify-items</kbd>\uFF0C\u5F53\u4E3A <kbd>place-items</kbd> \u53EA\u8BBE\u7F6E\u4E00\u4E2A\u503C\u65F6\uFF0C\u8868\u793A\u4E3A\u4E8C\u8005\u8BBE\u7F6E\u76F8\u540C\u7684\u503C`,frontmatter:{},index:33,start:1234,end:1293,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:t2,meta:{slide:{raw:`
# justify-self align-self

<!-- \u7279\u5B9A\u5B50\u9879\u5728\u7F51\u683C\u5355\u5143\u4E2D\u7684\u5BF9\u9F50\u65B9\u5F0F -->


<div style="width: 80%;">

\u901A\u8FC7 <kbd>justify-items</kbd> \u548C <kbd>align-items</kbd> \u89C4\u5B9A\u6240\u6709\u5B50\u9879\u5728\u7F51\u683C\u5355\u5143\u5185\u5982\u4F55\u5BF9\u9F50\uFF0C\u901A\u8FC7 <kbd>justify-self</kbd> \u548C <kbd>align-self</kbd> \u89C4\u5B9A\u7279\u5B9A\u5B50\u9879\u5728\u5BB9\u5668\u5185\u7684\u6392\u5217\uFF0C\u5B83\u662F\u5B50\u9879\u4E0A\u9762\u7684\u5C5E\u6027\uFF0C\u53D6\u503C\u540C <kbd>justify-items</kbd> \u4E0E <kbd>align-items</kbd>\u3002



\`\`\`css
.container {
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: 100px;
  justify-items: center;
  align-items: center;
  width: 400px;
}
.item {
  width: 50px;
  height: 50px;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: '100px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '400px'
  }"
  :itemStyle="{
    width: '50px',
    height: '50px'
  }"
/>
</div>
`,title:"justify-self align-self",level:1,content:`# justify-self align-self

<!-- \u7279\u5B9A\u5B50\u9879\u5728\u7F51\u683C\u5355\u5143\u4E2D\u7684\u5BF9\u9F50\u65B9\u5F0F -->


<div style="width: 80%;">

\u901A\u8FC7 <kbd>justify-items</kbd> \u548C <kbd>align-items</kbd> \u89C4\u5B9A\u6240\u6709\u5B50\u9879\u5728\u7F51\u683C\u5355\u5143\u5185\u5982\u4F55\u5BF9\u9F50\uFF0C\u901A\u8FC7 <kbd>justify-self</kbd> \u548C <kbd>align-self</kbd> \u89C4\u5B9A\u7279\u5B9A\u5B50\u9879\u5728\u5BB9\u5668\u5185\u7684\u6392\u5217\uFF0C\u5B83\u662F\u5B50\u9879\u4E0A\u9762\u7684\u5C5E\u6027\uFF0C\u53D6\u503C\u540C <kbd>justify-items</kbd> \u4E0E <kbd>align-items</kbd>\u3002



\`\`\`css
.container {
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: 100px;
  justify-items: center;
  align-items: center;
  width: 400px;
}
.item {
  width: 50px;
  height: 50px;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: '100px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '400px'
  }"
  :itemStyle="{
    width: '50px',
    height: '50px'
  }"
/>
</div>`,frontmatter:{},index:34,start:1294,end:1335,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:o2,meta:{slide:{raw:`
<div style="width: 80%;">

\`\`\`css
.item1 {
  justify-self: start;
  align-self: start;
}
.item2 {
  align-self: end;
}
.item3 {
  justify-self: end;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: '100px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '400px'
  }"
  :itemStyle="{
    width: '50px',
    height: '50px'
  }"
  :itemStyles="[{
    justifySelf: 'start',
    alignSelf: 'start',
    backgroundColor: '#5698c3'
  }, {
    alignSelf: 'end',
    backgroundColor: '#b2bbbe'
  }, {
    justifySelf: 'end',
    backgroundColor: '#45b787'
  }]"
/>

</div>


<kbd>place-self</kbd> \u662F <kbd>justify-self</kbd> \u4E0E <kbd>align-self</kbd> \u7684\u7B80\u5199\u5F62\u5F0F\u3002
`,content:`<div style="width: 80%;">

\`\`\`css
.item1 {
  justify-self: start;
  align-self: start;
}
.item2 {
  align-self: end;
}
.item3 {
  justify-self: end;
}
\`\`\`

<GridBox
  :style="{
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: '100px',
    justifyItems: 'center',
    alignItems: 'center',
    width: '400px'
  }"
  :itemStyle="{
    width: '50px',
    height: '50px'
  }"
  :itemStyles="[{
    justifySelf: 'start',
    alignSelf: 'start',
    backgroundColor: '#5698c3'
  }, {
    alignSelf: 'end',
    backgroundColor: '#b2bbbe'
  }, {
    justifySelf: 'end',
    backgroundColor: '#45b787'
  }]"
/>

</div>


<kbd>place-self</kbd> \u662F <kbd>justify-self</kbd> \u4E0E <kbd>align-self</kbd> \u7684\u7B80\u5199\u5F62\u5F0F\u3002`,frontmatter:{},index:35,start:1336,end:1382,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:d2,meta:{slide:{raw:`
# grid-auto-columns grid-auto-rows

\u7F51\u683C\u7CFB\u7EDF\u4E4B\u5916\u7684\u7F51\u683C\u5927\u5C0F

<div style="display: grid; grid-template-columns: 4fr 6fr; gap: 10px;">

\`\`\`css
.container {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
}
.item2 {
  grid-column: 4 / 5;
  grid-row: 3 / 4;
}
.item3 {
  grid-column: 5 / 6;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(2, 100px)'
  }"
  :itemStyles="[{}, {
    gridColumn: '4 / 5',
    gridRow: '3 / 4',
    backgroundColor: '#806d9e'
  }, {
    gridColumn: '5 / 6',
    backgroundColor: '#5698c3'
  }]"
/>  

</div>

\u8D85\u51FA\u7F51\u683C\u7CFB\u7EDF\u7684\u90E8\u5206\u4F1A\u81EA\u52A8\u751F\u6210\u7F51\u683C\u8F68\u9053\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <kbd>grid-auto-columns</kbd> \u548C <kbd>grid-auto-rows</kbd> \u6765\u6539\u53D8\u81EA\u52A8\u751F\u6210\u7684\u8F68\u9053\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684\u8F68\u9053\u5927\u5C0F\u4E3A <kbd>auto</kbd>.
`,title:"grid-auto-columns grid-auto-rows",level:1,content:`# grid-auto-columns grid-auto-rows

\u7F51\u683C\u7CFB\u7EDF\u4E4B\u5916\u7684\u7F51\u683C\u5927\u5C0F

<div style="display: grid; grid-template-columns: 4fr 6fr; gap: 10px;">

\`\`\`css
.container {
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
}
.item2 {
  grid-column: 4 / 5;
  grid-row: 3 / 4;
}
.item3 {
  grid-column: 5 / 6;
}
\`\`\`

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(2, 100px)'
  }"
  :itemStyles="[{}, {
    gridColumn: '4 / 5',
    gridRow: '3 / 4',
    backgroundColor: '#806d9e'
  }, {
    gridColumn: '5 / 6',
    backgroundColor: '#5698c3'
  }]"
/>  

</div>

\u8D85\u51FA\u7F51\u683C\u7CFB\u7EDF\u7684\u90E8\u5206\u4F1A\u81EA\u52A8\u751F\u6210\u7F51\u683C\u8F68\u9053\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <kbd>grid-auto-columns</kbd> \u548C <kbd>grid-auto-rows</kbd> \u6765\u6539\u53D8\u81EA\u52A8\u751F\u6210\u7684\u8F68\u9053\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684\u8F68\u9053\u5927\u5C0F\u4E3A <kbd>auto</kbd>.`,frontmatter:{},index:36,start:1383,end:1424,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:m2,meta:{slide:{raw:`
<div style="display: grid; grid-template-columns: 3fr 6fr; gap: 10px;">

<div>

\`\`\`css
.container {
  grid-auto-columns: 100px;
  grid-auto-rows: 200px;
}
\`\`\`
</div>

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(2, 100px)',
    gridAutoColumns: '100px',
    gridAutoRows: '200px'
  }"
  :itemStyles="[{}, {
    gridColumn: '4 / 5',
    gridRow: '3 / 4',
    backgroundColor: '#806d9e'
  }, {
    gridColumn: '5 / 6',
    backgroundColor: '#5698c3'
  }]"
/>

</div>
`,content:`<div style="display: grid; grid-template-columns: 3fr 6fr; gap: 10px;">

<div>

\`\`\`css
.container {
  grid-auto-columns: 100px;
  grid-auto-rows: 200px;
}
\`\`\`
</div>

<GridBox
  :counts="6"
  :style="{
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(2, 100px)',
    gridAutoColumns: '100px',
    gridAutoRows: '200px'
  }"
  :itemStyles="[{}, {
    gridColumn: '4 / 5',
    gridRow: '3 / 4',
    backgroundColor: '#806d9e'
  }, {
    gridColumn: '5 / 6',
    backgroundColor: '#5698c3'
  }]"
/>

</div>`,frontmatter:{},index:37,start:1425,end:1458,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:g2,meta:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/marek-piwnicki-T6PuTQiYr1s-unsplash.3fflj3h7lv20.jpg",slide:{raw:`---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/marek-piwnicki-T6PuTQiYr1s-unsplash.3fflj3h7lv20.jpg
---

# \u6848\u4F8B
`,title:"\u6848\u4F8B",level:1,content:"# \u6848\u4F8B",frontmatter:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/marek-piwnicki-T6PuTQiYr1s-unsplash.3fflj3h7lv20.jpg"},index:38,start:1458,end:1465,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:w2,meta:{slide:{raw:`
<WidthResizable>
<CaseStudy />
</WidthResizable>
`,content:`<WidthResizable>
<CaseStudy />
</WidthResizable>`,frontmatter:{},index:39,start:1466,end:1471,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:E2,meta:{slide:{raw:`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">

<div>

\`\`\`html
<div class="container_wrapper">
  <div class=".container">
    <div class="prose"></div>
    <div class="sidebar">
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="prose"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container_wrapper {
  contain: style layout inline-size;
}
.container {
  display: grid;
  gap: 20px;
}
.sidebar {
  display: inherit;
  gap: inherit;
}
\`\`\`
</div>

<div>

\`\`\`css
@container (min-width: 600px) and (max-width: 900px) {
  .sidebar {
    grid-template-columns: repear(2, 1fr);
  }
}

@container (min-width: 900px) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
  .sidebar {
    grid-row: span 2;
    grid-auto-rows: min-content;
  }
}
\`\`\`
</div>

</div>
`,content:`<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">

<div>

\`\`\`html
<div class="container_wrapper">
  <div class=".container">
    <div class="prose"></div>
    <div class="sidebar">
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="prose"></div>
  </div>
</div>
\`\`\`

\`\`\`css
.container_wrapper {
  contain: style layout inline-size;
}
.container {
  display: grid;
  gap: 20px;
}
.sidebar {
  display: inherit;
  gap: inherit;
}
\`\`\`
</div>

<div>

\`\`\`css
@container (min-width: 600px) and (max-width: 900px) {
  .sidebar {
    grid-template-columns: repear(2, 1fr);
  }
}

@container (min-width: 900px) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
  .sidebar {
    grid-row: span 2;
    grid-auto-rows: min-content;
  }
}
\`\`\`
</div>

</div>`,frontmatter:{},index:40,start:1472,end:1528,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:V2,meta:{canvasWidth:1500,slide:{raw:`---
canvasWidth: 1500
---

<WidthResizable>
<CaseStudy2 />
</WidthResizable>
`,content:`<WidthResizable>
<CaseStudy2 />
</WidthResizable>`,frontmatter:{canvasWidth:1500},index:41,start:1528,end:1536,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:q2,meta:{slide:{raw:`
# \u53C2\u8003\u6587\u732E

- [CSS Grid \u7F51\u683C\u5E03\u5C40\u6559\u7A0B](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [\u4E2D\u56FD\u8272](http://zhongguose.com/)
- [Unsplash](https://unsplash.com/)
- [Case Study: My First Practical CSS Grid Layout](https://cloudfour.com/thinks/first-css-grid-layout/)
`,title:"\u53C2\u8003\u6587\u732E",level:1,content:`# \u53C2\u8003\u6587\u732E

- [CSS Grid \u7F51\u683C\u5E03\u5C40\u6559\u7A0B](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [\u4E2D\u56FD\u8272](http://zhongguose.com/)
- [Unsplash](https://unsplash.com/)
- [Case Study: My First Practical CSS Grid Layout](https://cloudfour.com/thinks/first-css-grid-layout/)`,frontmatter:{},index:42,start:1537,end:1546,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:W2,meta:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg",slide:{raw:`---
layout: cover
background: https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg
---

# \u8C22\u8C22`,title:"\u8C22\u8C22",level:1,content:"# \u8C22\u8C22",frontmatter:{layout:"cover",background:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting3@master/thanks-bg.4j2jdscwhkm0.jpeg"},index:43,start:1546,end:1552,notesHTML:"",filepath:"C:\\Users\\22231\\Desktop\\slides-grid\\slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",component:sy,meta:{layout:"end"}}],ze=K2,Y2=[{name:"play",path:"/",component:Yv,children:[...ze]},{name:"print",path:"/print",component:ey},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>fs(()=>import("./Presenter.89069899.js"),["assets/Presenter.89069899.js","assets/Presenter.97449352.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.025201c0.js"]),beforeEnter:e=>{if(!Tn.remote||Tn.remote===e.query.password)return!0;if(Tn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Tn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],_t=D0({history:n0("/slides-grid/"),routes:Y2});function Z2(e,t,{mode:n="replace"}={}){return R({get(){const r=_t.currentRoute.value.query[e];return r==null?t!=null?t:null:Array.isArray(r)?r.filter(Boolean):r},set(r){Je(()=>{_t[w(n)]({query:{..._t.currentRoute.value.query,[e]:r}})})}})}const gd=D(0);Je(()=>{_t.afterEach(async()=>{await Je(),gd.value+=1})});const Xt=R(()=>_t.currentRoute.value),Ja=R(()=>Xt.value.query.print!==void 0),Q2=R(()=>Xt.value.query.print==="clicks"),qt=R(()=>Xt.value.query.embedded!==void 0),Bt=R(()=>Xt.value.path.startsWith("/presenter")),Ms=R(()=>Ja.value&&!Q2.value),ia=R(()=>Xt.value.query.password),X2=R(()=>!Bt.value&&(!Ce.remote||ia.value===Ce.remote)),Ql=Z2("clicks","0"),_d=R(()=>ze.length-1),J2=R(()=>Xt.value.path),We=R(()=>parseInt(J2.value.split(/\//g).slice(-1)[0])||1);R(()=>to(We.value));const ft=R(()=>ze.find(e=>e.path===`${We.value}`));R(()=>{var e,t,n;return(n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});R(()=>{var e,t;return(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout});const ko=R(()=>ze.find(e=>e.path===`${Math.min(ze.length,We.value+1)}`)),eC=R(()=>{var e,t;return gd.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Pt=R({get(){if(Ms.value)return 99999;let e=+(Ql.value||0);return isNaN(e)&&(e=0),e},set(e){Ql.value=e.toString()}}),Ir=R(()=>{var e,t,n;return+((n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:eC.value.length)}),tC=R(()=>We.value<ze.length-1||Pt.value<Ir.value),nC=R(()=>We.value>1||Pt.value>0),sC=R(()=>ze.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ei(e,t),e),[])),rC=R(()=>ti(sC.value,ft.value));R(()=>ni(rC.value));function cn(){Ir.value<=Pt.value?Ys():Pt.value+=1}async function un(){Pt.value<=0?await Zs():Pt.value-=1}function to(e){return Bt.value?`/presenter/${e}`:`/${e}`}function Ys(){const e=Math.min(ze.length,We.value+1);return cs(e)}async function Zs(e=!0){const t=Math.max(1,We.value-1);await cs(t),e&&Ir.value&&_t.replace({query:{...Xt.value.query,clicks:Ir.value}})}function cs(e,t){return _t.push({path:to(e),query:{...Xt.value.query,clicks:t}})}function oC(e){const t=D(0),{direction:n,distanceX:r,distanceY:o}=Eg(e,{onSwipeStart(a){a.pointerType==="touch"&&(zs.value||(t.value=zo()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!t.value||zs.value)return;const i=Math.abs(r.value),l=Math.abs(o.value);i/window.innerWidth>.3||i>100?n.value===Kt.LEFT?cn():un():(l/window.innerHeight>.4||l>200)&&(n.value===Kt.DOWN?Zs():Ys())}})}async function la(){const{saveAs:e}=await fs(()=>import("./FileSaver.min.17398785.js").then(t=>t.F),[]);e(wu(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/slides-grid/slidev-exported.pdf",`${Ce.title}.pdf`)}async function aC(e){var t,n;if(e==null){const r=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ei(e,t,n=1){var o,a,i,l,u;const r=(a=(o=t.meta)==null?void 0:o.slide)==null?void 0:a.level;r&&r>n&&e.length>0?ei(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(u=(l=t.meta)==null?void 0:l.slide)==null?void 0:u.title})}function ti(e,t,n=!1,r){return e.map(o=>{const a={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return a.children.length>0&&(a.children=ti(a.children,t,a.active||a.hasActiveParent,a)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function ni(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ni(n.children,t+1)}))}function iC(){const e=Ce.titleTemplate.replace("%s",Ce.title||"Slidev");Sh({title:e}),Ih(`${e} - shared`),Bh(`${e} - drawings`);function t(){Bt.value&&(rl("page",+We.value),rl("clicks",Pt.value))}_t.afterEach(t),he(Pt,t),Lh(n=>{(+n.page!=+We.value||Pt.value!==n.clicks)&&_t.replace({path:to(n.page),query:{..._t.currentRoute.value.query,clicks:n.clicks||0}})})}const lC=Oe({__name:"App",setup(e){return I(G),iC(),(t,n)=>{const r=Sr("RouterView"),o=Sr("StarportCarrier");return C(),U(we,null,[x(r),x(o)],64)}}});function bo(e){return e!==null&&typeof e=="object"}function ca(e,t,n=".",r){if(!bo(t))return ca(e,{},n,r);const o=Object.assign({},t);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const i=e[a];i!=null&&(r&&r(o,a,i,n)||(Array.isArray(i)&&Array.isArray(o[a])?o[a]=i.concat(o[a]):bo(i)&&bo(o[a])?o[a]=ca(i,o[a],(n?`${n}.`:"")+a.toString(),r):o[a]=i))}return o}function cC(e){return(...t)=>t.reduce((n,r)=>ca(n,r,"",e),{})}const uC=cC(),vd=1/60*1e3,dC=typeof performance<"u"?()=>performance.now():()=>Date.now(),yd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(dC()),vd);function pC(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,l={schedule:(u,d=!1,p=!1)=>{const f=p&&o,m=f?t:n;return d&&i.add(u),m.indexOf(u)===-1&&(m.push(u),f&&o&&(r=t.length)),u},cancel:u=>{const d=n.indexOf(u);d!==-1&&n.splice(d,1),i.delete(u)},process:u=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let d=0;d<r;d++){const p=t[d];p(u),i.has(p)&&(l.schedule(p),e())}o=!1,a&&(a=!1,l.process(u))}};return l}const fC=40;let ua=!0,Qs=!1,da=!1;const ss={delta:0,timestamp:0},tr=["read","update","preRender","render","postRender"],no=tr.reduce((e,t)=>(e[t]=pC(()=>Qs=!0),e),{}),pa=tr.reduce((e,t)=>{const n=no[t];return e[t]=(r,o=!1,a=!1)=>(Qs||gC(),n.schedule(r,o,a)),e},{}),mC=tr.reduce((e,t)=>(e[t]=no[t].cancel,e),{});tr.reduce((e,t)=>(e[t]=()=>no[t].process(ss),e),{});const hC=e=>no[e].process(ss),kd=e=>{Qs=!1,ss.delta=ua?vd:Math.max(Math.min(e-ss.timestamp,fC),1),ss.timestamp=e,da=!0,tr.forEach(hC),da=!1,Qs&&(ua=!1,yd(kd))},gC=()=>{Qs=!0,ua=!0,da||yd(kd)},bd=()=>ss;function xd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var _C=function(){},Xl=function(){};const fa=(e,t,n)=>Math.min(Math.max(n,e),t),xo=.001,vC=.01,Jl=10,yC=.05,kC=1;function bC({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;_C(e<=Jl*1e3);let i=1-t;i=fa(yC,kC,i),e=fa(vC,Jl,e/1e3),i<1?(o=d=>{const p=d*i,f=p*e,m=p-n,g=ma(d,i),h=Math.exp(-f);return xo-m/g*h},a=d=>{const f=d*i*e,m=f*n+n,g=Math.pow(i,2)*Math.pow(d,2)*e,h=Math.exp(-f),y=ma(Math.pow(d,2),i);return(-o(d)+xo>0?-1:1)*((m-g)*h)/y}):(o=d=>{const p=Math.exp(-d*e),f=(d-n)*e+1;return-xo+p*f},a=d=>{const p=Math.exp(-d*e),f=(n-d)*(e*e);return p*f});const l=5/e,u=wC(o,a,l);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(u,2)*r;return{stiffness:d,damping:i*2*Math.sqrt(r*d),duration:e}}}const xC=12;function wC(e,t,n){let r=n;for(let o=1;o<xC;o++)r=r-e(r)/t(r);return r}function ma(e,t){return e*Math.sqrt(1-t*t)}const CC=["duration","bounce"],TC=["stiffness","damping","mass"];function ec(e,t){return t.some(n=>e[n]!==void 0)}function SC(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ec(e,TC)&&ec(e,CC)){const n=bC(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function si(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:o}=e,a=xd(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:l,damping:u,mass:d,velocity:p,duration:f,isResolvedFromDuration:m}=SC(a),g=tc,h=tc;function y(){const k=p?-(p/1e3):0,b=n-t,S=u/(2*Math.sqrt(l*d)),T=Math.sqrt(l/d)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),S<1){const E=ma(T,S);g=L=>{const F=Math.exp(-S*T*L);return n-F*((k+S*T*b)/E*Math.sin(E*L)+b*Math.cos(E*L))},h=L=>{const F=Math.exp(-S*T*L);return S*T*F*(Math.sin(E*L)*(k+S*T*b)/E+b*Math.cos(E*L))-F*(Math.cos(E*L)*(k+S*T*b)-E*b*Math.sin(E*L))}}else if(S===1)g=E=>n-Math.exp(-T*E)*(b+(k+T*b)*E);else{const E=T*Math.sqrt(S*S-1);g=L=>{const F=Math.exp(-S*T*L),H=Math.min(E*L,300);return n-F*((k+S*T*b)*Math.sinh(H)+E*b*Math.cosh(H))/E}}}return y(),{next:k=>{const b=g(k);if(m)i.done=k>=f;else{const S=h(k)*1e3,T=Math.abs(S)<=r,E=Math.abs(n-b)<=o;i.done=T&&E}return i.value=i.done?n:b,i},flipTarget:()=>{p=-p,[t,n]=[n,t],y()}}}si.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const tc=e=>0,wd=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ri=(e,t,n)=>-n*e+n*t+e,Cd=(e,t)=>n=>Math.max(Math.min(n,t),e),Is=e=>e%1?Number(e.toFixed(5)):e,Xs=/(-)?([\d]*\.?[\d])+/g,ha=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$C=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function nr(e){return typeof e=="string"}const sr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ls=Object.assign(Object.assign({},sr),{transform:Cd(0,1)}),fr=Object.assign(Object.assign({},sr),{default:1}),oi=e=>({test:t=>nr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gn=oi("deg"),Fs=oi("%"),ce=oi("px"),nc=Object.assign(Object.assign({},Fs),{parse:e=>Fs.parse(e)/100,transform:e=>Fs.transform(e*100)}),ai=(e,t)=>n=>Boolean(nr(n)&&$C.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Td=(e,t,n)=>r=>{if(!nr(r))return r;const[o,a,i,l]=r.match(Xs);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:l!==void 0?parseFloat(l):1}},$n={test:ai("hsl","hue"),parse:Td("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Fs.transform(Is(t))+", "+Fs.transform(Is(n))+", "+Is(Ls.transform(r))+")"},EC=Cd(0,255),wo=Object.assign(Object.assign({},sr),{transform:e=>Math.round(EC(e))}),rn={test:ai("rgb","red"),parse:Td("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+wo.transform(e)+", "+wo.transform(t)+", "+wo.transform(n)+", "+Is(Ls.transform(r))+")"};function OC(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ga={test:ai("#"),parse:OC,transform:rn.transform},lt={test:e=>rn.test(e)||ga.test(e)||$n.test(e),parse:e=>rn.test(e)?rn.parse(e):$n.test(e)?$n.parse(e):ga.parse(e),transform:e=>nr(e)?e:e.hasOwnProperty("red")?rn.transform(e):$n.transform(e)},Sd="${c}",$d="${n}";function RC(e){var t,n,r,o;return isNaN(e)&&nr(e)&&((n=(t=e.match(Xs))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(ha))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Ed(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(ha);r&&(n=r.length,e=e.replace(ha,Sd),t.push(...r.map(lt.parse)));const o=e.match(Xs);return o&&(e=e.replace(Xs,$d),t.push(...o.map(sr.parse))),{values:t,numColors:n,tokenised:e}}function Od(e){return Ed(e).values}function Rd(e){const{values:t,numColors:n,tokenised:r}=Ed(e),o=t.length;return a=>{let i=r;for(let l=0;l<o;l++)i=i.replace(l<n?Sd:$d,l<n?lt.transform(a[l]):Is(a[l]));return i}}const PC=e=>typeof e=="number"?0:e;function AC(e){const t=Od(e);return Rd(e)(t.map(PC))}const rr={test:RC,parse:Od,createTransformer:Rd,getAnimatableNone:AC},jC=new Set(["brightness","contrast","saturate","opacity"]);function MC(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Xs)||[];if(!r)return e;const o=n.replace(r,"");let a=jC.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const IC=/([a-z-]*)\(.*?\)/g,_a=Object.assign(Object.assign({},rr),{getAnimatableNone:e=>{const t=e.match(IC);return t?t.map(MC).join(" "):e}});function Co(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sc({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const l=n<.5?n*(1+t):n+t-n*t,u=2*n-l;o=Co(u,l,e+1/3),a=Co(u,l,e),i=Co(u,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const LC=(e,t,n)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},FC=[ga,rn,$n],rc=e=>FC.find(t=>t.test(e)),Pd=(e,t)=>{let n=rc(e),r=rc(t),o=n.parse(e),a=r.parse(t);n===$n&&(o=sc(o),n=rn),r===$n&&(a=sc(a),r=rn);const i=Object.assign({},o);return l=>{for(const u in i)u!=="alpha"&&(i[u]=LC(o[u],a[u],l));return i.alpha=ri(o.alpha,a.alpha,l),n.transform(i)}},NC=e=>typeof e=="number",BC=(e,t)=>n=>t(e(n)),Ad=(...e)=>e.reduce(BC);function jd(e,t){return NC(e)?n=>ri(e,t,n):lt.test(e)?Pd(e,t):Id(e,t)}const Md=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>jd(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},DC=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=jd(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function oc(e){const t=rr.parse(e),n=t.length;let r=0,o=0,a=0;for(let i=0;i<n;i++)r||typeof t[i]=="number"?r++:t[i].hue!==void 0?a++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:a}}const Id=(e,t)=>{const n=rr.createTransformer(t),r=oc(e),o=oc(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?Ad(Md(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},HC=(e,t)=>n=>ri(e,t,n);function VC(e){if(typeof e=="number")return HC;if(typeof e=="string")return lt.test(e)?Pd:Id;if(Array.isArray(e))return Md;if(typeof e=="object")return DC}function UC(e,t,n){const r=[],o=n||VC(e[0]),a=e.length-1;for(let i=0;i<a;i++){let l=o(e[i],e[i+1]);if(t){const u=Array.isArray(t)?t[i]:t;l=Ad(u,l)}r.push(l)}return r}function GC([e,t],[n]){return r=>n(wd(e,t,r))}function qC(e,t){const n=e.length,r=n-1;return o=>{let a=0,i=!1;if(o<=e[0]?i=!0:o>=e[r]&&(a=r-1,i=!0),!i){let u=1;for(;u<n&&!(e[u]>o||u===r);u++);a=u-1}const l=wd(e[a],e[a+1],o);return t[a](l)}}function Ld(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Xl(a===t.length),Xl(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=UC(t,r,o),l=a===2?GC(e,i):qC(e,i);return n?u=>l(fa(e[0],e[a-1],u)):l}const so=e=>t=>1-e(1-t),ii=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,zC=e=>t=>Math.pow(t,e),Fd=e=>t=>t*t*((e+1)*t-e),WC=e=>{const t=Fd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Nd=1.525,KC=4/11,YC=8/11,ZC=9/10,Bd=e=>e,li=zC(2),QC=so(li),Dd=ii(li),Hd=e=>1-Math.sin(Math.acos(e)),Vd=so(Hd),XC=ii(Vd),ci=Fd(Nd),JC=so(ci),e3=ii(ci),t3=WC(Nd),n3=4356/361,s3=35442/1805,r3=16061/1805,Lr=e=>{if(e===1||e===0)return e;const t=e*e;return e<KC?7.5625*t:e<YC?9.075*t-9.9*e+3.4:e<ZC?n3*t-s3*e+r3:10.8*e*e-20.52*e+10.72},o3=so(Lr),a3=e=>e<.5?.5*(1-Lr(1-e*2)):.5*Lr(e*2-1)+.5;function i3(e,t){return e.map(()=>t||Dd).splice(0,e.length-1)}function l3(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function c3(e,t){return e.map(n=>n*t)}function br({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],l=c3(r&&r.length===i.length?r:l3(i),o);function u(){return Ld(l,i,{ease:Array.isArray(n)?n:i3(i,n)})}let d=u();return{next:p=>(a.value=d(p),a.done=p>=o,a),flipTarget:()=>{i.reverse(),d=u()}}}function u3({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let l=n*e;const u=t+l,d=a===void 0?u:a(u);return d!==u&&(l=d-t),{next:p=>{const f=-l*Math.exp(-p/r);return i.done=!(f>o||f<-o),i.value=i.done?d:d+f,i},flipTarget:()=>{}}}const ac={keyframes:br,spring:si,decay:u3};function d3(e){if(Array.isArray(e.to))return br;if(ac[e.type])return ac[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?br:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?si:br}function Ud(e,t,n=0){return e-t-n}function p3(e,t,n=0,r=!0){return r?Ud(t+-e,t,n):t-(e-t)+n}function f3(e,t,n,r){return r?e>=t+n:e<=-n}const m3=e=>{const t=({delta:n})=>e(n);return{start:()=>pa.update(t,!0),stop:()=>mC.update(t)}};function Gd(e){var t,n,{from:r,autoplay:o=!0,driver:a=m3,elapsed:i=0,repeat:l=0,repeatType:u="loop",repeatDelay:d=0,onPlay:p,onStop:f,onComplete:m,onRepeat:g,onUpdate:h}=e,y=xd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:k}=y,b,S=0,T=y.duration,E,L=!1,F=!0,H;const J=d3(y);!((n=(t=J).needsInterpolation)===null||n===void 0)&&n.call(t,r,k)&&(H=Ld([0,100],[r,k],{clamp:!1}),r=0,k=100);const me=J(Object.assign(Object.assign({},y),{from:r,to:k}));function ge(){S++,u==="reverse"?(F=S%2===0,i=p3(i,T,d,F)):(i=Ud(i,T,d),u==="mirror"&&me.flipTarget()),L=!1,g&&g()}function be(){b.stop(),m&&m()}function Ke(Be){if(F||(Be=-Be),i+=Be,!L){const Ie=me.next(Math.max(0,i));E=Ie.value,H&&(E=H(E)),L=F?Ie.done:i<=0}h==null||h(E),L&&(S===0&&(T!=null||(T=i)),S<l?f3(i,T,d,F)&&ge():be())}function Ge(){p==null||p(),b=a(Ke),b.start()}return o&&Ge(),{stop:()=>{f==null||f(),b.stop()}}}function qd(e,t){return t?e*(1e3/t):0}function h3({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:l=10,restDelta:u=1,modifyTarget:d,driver:p,onUpdate:f,onComplete:m,onStop:g}){let h;function y(T){return n!==void 0&&T<n||r!==void 0&&T>r}function k(T){return n===void 0?r:r===void 0||Math.abs(n-T)<Math.abs(r-T)?n:r}function b(T){h==null||h.stop(),h=Gd(Object.assign(Object.assign({},T),{driver:p,onUpdate:E=>{var L;f==null||f(E),(L=T.onUpdate)===null||L===void 0||L.call(T,E)},onComplete:m,onStop:g}))}function S(T){b(Object.assign({type:"spring",stiffness:i,damping:l,restDelta:u},T))}if(y(e))S({from:e,velocity:t,to:k(e)});else{let T=o*t+e;typeof d<"u"&&(T=d(T));const E=k(T),L=E===n?-1:1;let F,H;const J=me=>{F=H,H=me,t=qd(me-F,bd().delta),(L===1&&me>E||L===-1&&me<E)&&S({from:me,to:E,velocity:t})};b({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:u,modifyTarget:d,onUpdate:y(T)?J:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const zd=(e,t)=>1-3*t+3*e,Wd=(e,t)=>3*t-6*e,Kd=e=>3*e,Fr=(e,t,n)=>((zd(t,n)*e+Wd(t,n))*e+Kd(t))*e,Yd=(e,t,n)=>3*zd(t,n)*e*e+2*Wd(t,n)*e+Kd(t),g3=1e-7,_3=10;function v3(e,t,n,r,o){let a,i,l=0;do i=t+(n-t)/2,a=Fr(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>g3&&++l<_3);return i}const y3=8,k3=.001;function b3(e,t,n,r){for(let o=0;o<y3;++o){const a=Yd(t,n,r);if(a===0)return t;t-=(Fr(t,n,r)-e)/a}return t}const xr=11,mr=1/(xr-1);function x3(e,t,n,r){if(e===t&&n===r)return Bd;const o=new Float32Array(xr);for(let i=0;i<xr;++i)o[i]=Fr(i*mr,e,n);function a(i){let l=0,u=1;const d=xr-1;for(;u!==d&&o[u]<=i;++u)l+=mr;--u;const p=(i-o[u])/(o[u+1]-o[u]),f=l+p*mr,m=Yd(f,e,n);return m>=k3?b3(i,f,e,n):m===0?f:v3(i,l,l+mr,e,n)}return i=>i===0||i===1?i:Fr(a(i),t,r)}const To={};class w3{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(t,n,r)}clear(){this.subscriptions.clear()}}const ic=e=>!isNaN(parseFloat(e));class C3{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new w3,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:o}=bd();this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o),pa.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>pa.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=ic(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ic(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function T3(e){return new C3(e)}const{isArray:S3}=Array;function $3(){const e=D({}),t=r=>{const o=a=>{!e.value[a]||(e.value[a].stop(),e.value[a].destroy(),delete e.value[a])};r?S3(r)?r.forEach(o):o(r):Object.keys(e.value).forEach(o)},n=(r,o,a)=>{if(e.value[r])return e.value[r];const i=T3(o);return i.onChange(l=>a[r]=l),e.value[r]=i,i};return Jm(t),{motionValues:e,get:n,stop:t}}const E3=e=>Array.isArray(e),_n=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),So=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),O3=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),$o=()=>({type:"keyframes",ease:"linear",duration:300}),R3=e=>({type:"keyframes",duration:800,values:e}),lc={default:O3,x:_n,y:_n,z:_n,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scaleX:So,scaleY:So,scale:So,backgroundColor:$o,color:$o,opacity:$o},Zd=(e,t)=>{let n;return E3(t)?n=R3:n=lc[e]||lc.default,{to:t,...n(t)}},cc={...sr,transform:Math.round},Qd={color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:fr,scaleX:fr,scaleY:fr,scaleZ:fr,skew:gn,skewX:gn,skewY:gn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:Ls,originX:nc,originY:nc,originZ:ce,zIndex:cc,filter:_a,WebkitFilter:_a,fillOpacity:Ls,strokeOpacity:Ls,numOctaves:cc},ui=e=>Qd[e],Xd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function P3(e,t){let n=ui(e);return n!==_a&&(n=rr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const A3={linear:Bd,easeIn:li,easeInOut:Dd,easeOut:QC,circIn:Hd,circInOut:XC,circOut:Vd,backIn:ci,backInOut:e3,backOut:JC,anticipate:t3,bounceIn:o3,bounceInOut:a3,bounceOut:Lr},uc=e=>{if(Array.isArray(e)){const[t,n,r,o]=e;return x3(t,n,r,o)}else if(typeof e=="string")return A3[e];return e},j3=e=>Array.isArray(e)&&typeof e[0]!="number",dc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&rr.test(t)&&!t.startsWith("url("));function M3(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function I3({ease:e,times:t,delay:n,...r}){const o={...r};return t&&(o.offset=t),e&&(o.ease=j3(e)?e.map(uc):uc(e)),n&&(o.elapsed=-n),o}function L3(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),M3(t),F3(e)||(e={...e,...Zd(n,t.to)}),{...t,...I3(e)}}function F3({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:o,...a}){return!!Object.keys(a).length}function N3(e,t){return e[t]||e.default||e}function B3(e,t,n,r,o){const a=N3(r,e);let i=a.from===null||a.from===void 0?t.get():a.from;const l=dc(e,n);i==="none"&&l&&typeof n=="string"&&(i=P3(e,n));const u=dc(e,i);function d(f){const m={from:i,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:g=>t.set(g)};return a.type==="inertia"||a.type==="decay"?h3({...m,...a}):Gd({...L3(a,m,e),onUpdate:g=>{m.onUpdate(g),a.onUpdate&&a.onUpdate(g)},onComplete:()=>{r.onComplete&&r.onComplete(),o&&o(),f&&f()}})}function p(f){return t.set(n),r.onComplete&&r.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!u||!l||a.type===!1?p:d}function D3(){const{motionValues:e,stop:t,get:n}=$3();return{motionValues:e,stop:t,push:(o,a,i,l={},u)=>{const d=i[o],p=n(o,d,i);if(l&&l.immediate){p.set(a);return}const f=B3(o,p,a,l,u);p.start(f)}}}function H3(e,t={},{motionValues:n,push:r,stop:o}=D3()){const a=w(t),i=D(!1);he(n,f=>{i.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0});const l=f=>{if(!a||!a[f])throw new Error(`The variant ${f} does not exist.`);return a[f]},u=f=>(typeof f=="string"&&(f=l(f)),Promise.all(Object.entries(f).map(([m,g])=>{if(m!=="transition")return new Promise(h=>{r(m,g,e,f.transition||Zd(m,f[m]),h)})}).filter(Boolean)));return{isAnimating:i,apply:u,set:f=>{const m=qo(f)?f:l(f);Object.entries(m).forEach(([g,h])=>{g!=="transition"&&r(g,h,e,{immediate:!0})})},leave:async f=>{let m;if(a&&(a.leave&&(m=a.leave),!a.leave&&a.initial&&(m=a.initial)),!m){f();return}await u(m),f()},stop:o}}const di=typeof window<"u",V3=()=>di&&window.onpointerdown===null,U3=()=>di&&window.ontouchstart===null,G3=()=>di&&window.onmousedown===null;function q3({target:e,state:t,variants:n,apply:r}){const o=w(n),a=D(!1),i=D(!1),l=D(!1),u=R(()=>{let p=[];return o&&(o.hovered&&(p=[...p,...Object.keys(o.hovered)]),o.tapped&&(p=[...p,...Object.keys(o.tapped)]),o.focused&&(p=[...p,...Object.keys(o.focused)])),p}),d=R(()=>{const p={};Object.assign(p,t.value),a.value&&o.hovered&&Object.assign(p,o.hovered),i.value&&o.tapped&&Object.assign(p,o.tapped),l.value&&o.focused&&Object.assign(p,o.focused);for(const f in p)u.value.includes(f)||delete p[f];return p});o.hovered&&(fe(e,"mouseenter",()=>a.value=!0),fe(e,"mouseleave",()=>{a.value=!1,i.value=!1}),fe(e,"mouseout",()=>{a.value=!1,i.value=!1})),o.tapped&&(G3()&&(fe(e,"mousedown",()=>i.value=!0),fe(e,"mouseup",()=>i.value=!1)),V3()&&(fe(e,"pointerdown",()=>i.value=!0),fe(e,"pointerup",()=>i.value=!1)),U3()&&(fe(e,"touchstart",()=>i.value=!0),fe(e,"touchend",()=>i.value=!1))),o.focused&&(fe(e,"focus",()=>l.value=!0),fe(e,"blur",()=>l.value=!1)),he(d,r)}function z3({set:e,target:t,apply:n,variants:r,variant:o}){const a=w(r);he(()=>t,()=>{!a||(a.initial&&e("initial"),a.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function W3({state:e,apply:t}){he(e,n=>{n&&t(n)},{immediate:!0})}function K3({target:e,variants:t,variant:n}){const r=w(t);r&&(r.visible||r.visibleOnce)&&Tg(e,([{isIntersecting:o}])=>{r.visible?o?n.value="visible":n.value="initial":r.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function Y3(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&z3(e),t.syncVariants&&W3(e),t.visibilityHooks&&K3(e),t.eventListeners&&q3(e)}function Jd(e={}){const t=Fe({...e}),n=D({});return he(t,()=>{const r={};for(const[o,a]of Object.entries(t)){const i=ui(o),l=Xd(a,i);r[o]=l}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function pi(e,t){he(()=>$t(e),n=>{!n||t(n)},{immediate:!0})}const Z3={x:"translateX",y:"translateY",z:"translateZ"};function ep(e={},t=!0){const n=Fe({...e}),r=D("");return he(n,o=>{let a="",i=!1;t&&(o.x||o.y||o.z)&&(a+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(ce.transform).join(",")}) `,i=!0);for(const[l,u]of Object.entries(o)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const d=ui(l),p=Xd(u,d);a+=`${Z3[l]||l}(${p}) `}t&&!i&&(a+="translateZ(0px) "),r.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const Q3=["","X","Y","Z"],X3=["perspective","translate","scale","rotate","skew"],tp=["transformPerspective","x","y","z"];X3.forEach(e=>{Q3.forEach(t=>{const n=e+t;tp.push(n)})});const J3=new Set(tp);function fi(e){return J3.has(e)}const e5=new Set(["originX","originY","originZ"]);function np(e){return e5.has(e)}function t5(e){const t={},n={};return Object.entries(e).forEach(([r,o])=>{fi(r)||np(r)?t[r]=o:n[r]=o}),{transform:t,style:n}}function sp(e){const{transform:t,style:n}=t5(e),{transform:r}=ep(t),{style:o}=Jd(n);return r.value&&(o.value.transform=r.value),o.value}function n5(e,t){let n,r;const{state:o,style:a}=Jd();return pi(e,i=>{r=i;for(const l of Object.keys(Qd))i.style[l]===null||i.style[l]===""||fi(l)||np(l)||(o[l]=i.style[l]);n&&Object.entries(n).forEach(([l,u])=>i.style[l]=u),t&&t(o)}),he(a,i=>{if(!r){n=i;return}for(const l in i)r.style[l]=i[l]},{immediate:!0}),{style:o}}function s5(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return t.reduce((r,o)=>{if(!o)return r;const[a,i]=o.split("("),u=i.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),d=u.length===1?u[0]:u;return{...r,[a]:d}},{})}function r5(e,t){Object.entries(s5(t)).forEach(([n,r])=>{const o=["x","y","z"];if(n==="translate3d"){if(r===0){o.forEach(a=>e[a]=0);return}r.forEach((a,i)=>e[o[i]]=a);return}if(r=parseFloat(r),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function o5(e,t){let n,r;const{state:o,transform:a}=ep();return pi(e,i=>{r=i,i.style.transform&&r5(o,i.style.transform),n&&(i.style.transform=n),t&&t(o)}),he(a,i=>{if(!r){n=i;return}r.style.transform=i},{immediate:!0}),{transform:o}}function a5(e,t){const n=Fe({}),r=i=>Object.entries(i).forEach(([l,u])=>n[l]=u),{style:o}=n5(e,r),{transform:a}=o5(e,r);return he(n,i=>{Object.entries(i).forEach(([l,u])=>{const d=fi(l)?a:o;d[l]&&d[l]===u||(d[l]=u)})},{immediate:!0,deep:!0}),pi(e,()=>t&&r(t)),{motionProperties:n,style:o,transform:a}}function i5(e={}){const t=w(e),n=D();return{state:R(()=>{if(!!n.value)return t[n.value]}),variant:n}}function rp(e,t={},n){const{motionProperties:r}=a5(e),{variant:o,state:a}=i5(t),i=H3(r,t),l={target:e,variant:o,variants:t,state:a,motionProperties:r,...i};return Y3(l,n),l}const l5=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],c5=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&qo(n.variants)&&(t.value={...t.value,...n.variants}),l5.forEach(r=>{if(r==="delay"){if(n&&n[r]&&Nm(n[r])){const o=n[r];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),n&&n[r]&&qo(n[r])&&(t.value[r]=n[r])}))},Eo=e=>({created:(r,o,a)=>{const i=o.value&&typeof o.value=="string"?o.value:a.key;i&&To[i]&&To[i].stop();const l=D(e||{});typeof o.value=="object"&&(l.value=o.value),c5(a,l);const u=rp(r,l);r.motionInstance=u,i&&(To[i]=u)},unmounted:r=>{r.motionInstance&&r.motionInstance.stop()},getSSRProps(r,o){let{initial:a}=r.value||o&&(o==null?void 0:o.props)||{};a=w(a);const i=uC((e==null?void 0:e.initial)||{},a||{});return!i||Object.keys(i).length===0?void 0:{style:sp(i)}}}),u5={initial:{opacity:0},enter:{opacity:1}},d5={initial:{opacity:0},visible:{opacity:1}},p5={initial:{opacity:0},visibleOnce:{opacity:1}},f5={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},m5={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},h5={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},g5={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},_5={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},v5={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},y5={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},k5={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},b5={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},x5={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},w5={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},C5={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},T5={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},S5={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$5={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},E5={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},O5={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},R5={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},P5={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},A5={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},j5={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},M5={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},I5={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},L5={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},F5={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},N5={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},B5={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},va={__proto__:null,fade:u5,fadeVisible:d5,fadeVisibleOnce:p5,pop:f5,popVisible:m5,popVisibleOnce:h5,rollBottom:T5,rollLeft:g5,rollRight:y5,rollTop:x5,rollVisibleBottom:S5,rollVisibleLeft:_5,rollVisibleRight:k5,rollVisibleTop:w5,rollVisibleOnceBottom:$5,rollVisibleOnceLeft:v5,rollVisibleOnceRight:b5,rollVisibleOnceTop:C5,slideBottom:F5,slideLeft:E5,slideRight:P5,slideTop:M5,slideVisibleBottom:N5,slideVisibleLeft:O5,slideVisibleRight:A5,slideVisibleTop:I5,slideVisibleOnceBottom:B5,slideVisibleOnceLeft:R5,slideVisibleOnceRight:j5,slideVisibleOnceTop:L5},D5=Oe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=lm(),n=Fe({});if(!e.is&&!t.default)return()=>ht("div",{});const r=R(()=>{let u;return e.preset&&(u=va[e.preset]),u}),o=R(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),a=R(()=>{const u={...o.value,...r.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),i=R(()=>{if(!e.is)return;let u=e.is;return typeof i.value=="string"&&!hp(u)&&(u=Sr(u)),u});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const u=d=>{var p;(p=d.variants)!=null&&p.initial&&d.set("initial"),setTimeout(()=>{var f,m,g;(f=d.variants)!=null&&f.enter&&d.apply("enter"),(m=d.variants)!=null&&m.visible&&d.apply("visible"),(g=d.variants)!=null&&g.visibleOnce&&d.apply("visibleOnce")},10)};Fa(()=>Object.entries(n).forEach(([d,p])=>u(p)))}return{slots:t,component:i,motionConfig:a,instances:n}},render({slots:e,motionConfig:t,instances:n,component:r}){var l;const o=sp(t.initial||{}),a=(u,d)=>(u.props||(u.props={}),u.props.style=o,u.props.onVnodeMounted=({el:p})=>{const f=rp(p,t);n[d]=f},u);if(r){const u=ht(r,void 0,e);return a(u,0),u}return(((l=e.default)==null?void 0:l.call(e))||[]).map((u,d)=>a(u,d))}});function H5(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(r,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const V5={install(e,t){if(e.directive("motion",Eo()),e.component("Motion",D5),!t||t&&!t.excludePresets)for(const n in va){const r=va[n];e.directive(`motion-${H5(n)}`,Eo(r))}if(t&&t.directives)for(const n in t.directives){const r=t.directives[n];r.initial,e.directive(`motion-${n}`,Eo(r))}}};var pc;const Ns=typeof window<"u",U5=Object.prototype.toString,G5=e=>U5.call(e)==="[object Object]";Ns&&((pc=window==null?void 0:window.navigator)==null?void 0:pc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function q5(e){return jc()?(Mc(e),!0):!1}function z5(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const W5=Ns?window:void 0,ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ka="__vueuse_ssr_handlers__";ya[ka]=ya[ka]||{};ya[ka];function K5(e,t={}){const{immediate:n=!0,window:r=W5}=t,o=D(!1);let a=null;function i(){!o.value||!r||(e(),a=r.requestAnimationFrame(i))}function l(){!o.value&&r&&(o.value=!0,i())}function u(){o.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return n&&l(),q5(u),{isActive:o,pause:u,resume:l}}var fc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(fc||(fc={}));const mi="vue-starport-injection",op="vue-starport-options",Y5={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},ap={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var Z5=Object.defineProperty,Nr=Object.getOwnPropertySymbols,ip=Object.prototype.hasOwnProperty,lp=Object.prototype.propertyIsEnumerable,mc=(e,t,n)=>t in e?Z5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q5=(e,t)=>{for(var n in t||(t={}))ip.call(t,n)&&mc(e,n,t[n]);if(Nr)for(var n of Nr(t))lp.call(t,n)&&mc(e,n,t[n]);return e},hc=(e,t)=>{var n={};for(var r in e)ip.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Nr)for(var r of Nr(e))t.indexOf(r)<0&&lp.call(e,r)&&(n[r]=e[r]);return n};const X5=Oe({name:"StarportProxy",props:Q5({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},ap),setup(e,t){const n=I(mi),r=R(()=>n.getInstance(e.port,e.component)),o=D(),a=r.value.generateId(),i=D(!1);return r.value.isVisible||(r.value.land(),i.value=!0),In(async()=>{r.value.el||(r.value.el=o.value,await Je(),i.value=!0,r.value.rect.update())}),Zr(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,i.value=!1,!r.value.options.keepAlive&&(await Je(),await Je(),!r.value.el&&n.dispose(r.value.port))}),he(()=>e,async()=>{r.value.props&&await Je();const l=e,{props:u}=l,d=hc(l,["props"]);r.value.props=u||{},r.value.setLocalOptions(d)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:u,mountedProps:d}=l,p=hc(l,["initialProps","mountedProps"]),f=ne(p,(i.value?d:u)||{});return ht("div",ne(f,{id:a,ref:o,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),t.slots.default?ht(t.slots.default):void 0)}}});var J5=Object.defineProperty,eT=Object.defineProperties,tT=Object.getOwnPropertyDescriptors,gc=Object.getOwnPropertySymbols,nT=Object.prototype.hasOwnProperty,sT=Object.prototype.propertyIsEnumerable,_c=(e,t,n)=>t in e?J5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rT=(e,t)=>{for(var n in t||(t={}))nT.call(t,n)&&_c(e,n,t[n]);if(gc)for(var n of gc(t))sT.call(t,n)&&_c(e,n,t[n]);return e},oT=(e,t)=>eT(e,tT(t));const aT=Oe({name:"Starport",inheritAttrs:!0,props:ap,setup(e,t){const n=D(!1);return In(()=>{n.value=!0}),()=>{var i,l;const r=(l=(i=t.slots).default)==null?void 0:l.call(i);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const o=r[0];let a=o.type;return(!G5(a)||os(a))&&(a={render(){return r}}),ht(X5,oT(rT({},e),{key:e.port,component:qr(a),props:o.props}))}}});function iT(e){const t=Fe({height:0,width:0,left:0,top:0,update:r,listen:a,pause:i,margin:"0px",padding:"0px"}),n=Ns?document.documentElement||document.body:void 0;function r(){if(!Ns)return;const l=z5(e);if(!l)return;const{height:u,width:d,left:p,top:f}=l.getBoundingClientRect(),m=window.getComputedStyle(l),g=m.margin,h=m.padding;Object.assign(t,{height:u,width:d,left:p,top:n.scrollTop+f,margin:g,padding:h})}const o=K5(r,{immediate:!1});function a(){!Ns||(r(),o.resume())}function i(){o.pause()}return t}let lT=(e,t=21)=>(n=t)=>{let r="",o=n;for(;o--;)r+=e[Math.random()*e.length|0];return r};const vc=lT("abcdefghijklmnopqrstuvwxyz",5);function yc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function cT(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var uT=Object.defineProperty,kc=Object.getOwnPropertySymbols,dT=Object.prototype.hasOwnProperty,pT=Object.prototype.propertyIsEnumerable,bc=(e,t,n)=>t in e?uT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oo=(e,t)=>{for(var n in t||(t={}))dT.call(t,n)&&bc(e,n,t[n]);if(kc)for(var n of kc(t))pT.call(t,n)&&bc(e,n,t[n]);return e};function fT(e,t,n={}){const r=cT(t),o=yc(r)||vc(),a=D(),i=D(null),l=D(!1),u=D(!1),d=wp(!0),p=D({}),f=R(()=>Oo(Oo(Oo({},Y5),n),p.value)),m=D(0);let g;d.run(()=>{g=iT(a),he(a,async b=>{b&&(u.value=!0),await Je(),a.value||(u.value=!1)})});const h=yc(e);function y(){return`starport-${o}-${h}-${vc()}`}const k=y();return Fe({el:a,id:k,port:e,props:i,rect:g,scope:d,isLanded:l,isVisible:u,options:f,liftOffTime:m,component:t,componentName:r,componentId:o,generateId:y,setLocalOptions(b={}){p.value=JSON.parse(JSON.stringify(b))},elRef(){return a},liftOff(){!l.value||(l.value=!1,m.value=Date.now(),g.listen())},land(){l.value||(l.value=!0,g.pause())}})}function mT(e){const t=Fe(new Map);function n(o,a){let i=t.get(o);return i||(i=fT(o,a,e),t.set(o,i)),i.component=a,i}function r(o){var a;(a=t.get(o))==null||a.scope.stop(),t.delete(o)}return{portMap:t,dispose:r,getInstance:n}}var hT=Object.defineProperty,gT=Object.defineProperties,_T=Object.getOwnPropertyDescriptors,xc=Object.getOwnPropertySymbols,vT=Object.prototype.hasOwnProperty,yT=Object.prototype.propertyIsEnumerable,wc=(e,t,n)=>t in e?hT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kT=(e,t)=>{for(var n in t||(t={}))vT.call(t,n)&&wc(e,n,t[n]);if(xc)for(var n of xc(t))yT.call(t,n)&&wc(e,n,t[n]);return e},bT=(e,t)=>gT(e,_T(t));const xT=Oe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=I(mi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=R(()=>t.getInstance(e.port,e.component)),r=R(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),o=R(()=>{const i=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-i),u=n.value.rect,d={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!n.value.isVisible||!n.value.el?bT(kT({},d),{zIndex:-1,display:"none"}):(n.value.isLanded?d.display="none":Object.assign(d,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),d)}),a={};return()=>{const i=!!(n.value.isLanded&&n.value.el);return ht("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},ht(Qf,{to:i?`#${r.value}`:"body",disabled:!i},ht(n.value.component,ne(a,n.value.props))))}}}),wT=Oe({name:"StarportCarrier",setup(e,{slots:t}){const n=mT(I(op,{}));return Fn().appContext.app.provide(mi,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([a,{component:i}])=>ht(xT,{key:a,port:a,component:i}))]}}});function CT(e={}){return{install(t){t.provide(op,e),t.component("Starport",aT),t.component("StarportCarrier",wT)}}}function TT(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(V5),e.app.use(CT({keepAlive:!0}))}function ut(e,t,n){var r,o;return(o=((r=e.instance)==null?void 0:r.$).provides[t])!=null?o:n}function ST(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,f,m,g;if(Ms.value||((p=ut(n,Rs))==null?void 0:p.value))return;const r=ut(n,xn),o=ut(n,Os),a=ut(n,Ko),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,u=((f=r==null?void 0:r.value)==null?void 0:f.length)||0,d=l?Oh:uo;if(r&&!((m=r==null?void 0:r.value)!=null&&m.includes(t))&&r.value.push(t),n.value==null&&(n.value=r==null?void 0:r.value.length),!(a!=null&&a.value.has(n.value)))a==null||a.value.set(n.value,[t]);else if(!((g=a==null?void 0:a.value.get(n.value))!=null&&g.includes(t))){const h=(a==null?void 0:a.value.get(n.value))||[];a==null||a.value.set(n.value,[t].concat(h))}t==null||t.classList.toggle(yn,!0),o&&he(o,()=>{var b;const h=(b=o==null?void 0:o.value)!=null?b:0,y=n.value!=null?h>=n.value:h>u;t.classList.contains(po)||t.classList.toggle(d,!y),i!==!1&&i!==void 0&&t.classList.toggle(d,y),t.classList.toggle(ys,!1);const k=a==null?void 0:a.value.get(h);k==null||k.forEach((S,T)=>{S.classList.toggle(dr,!1),T===k.length-1?S.classList.toggle(ys,!0):S.classList.toggle(dr,!0)}),t.classList.contains(ys)||t.classList.toggle(dr,y)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(yn,!1);const r=ut(n,xn);r!=null&&r.value&&Yo(r.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,u;if(Ms.value||((l=ut(n,Rs))==null?void 0:l.value))return;const r=ut(n,xn),o=ut(n,Os),a=ut(n,Ko),i=r==null?void 0:r.value.length;n.value==null&&(n.value=r==null?void 0:r.value.length),a!=null&&a.value.has(n.value)?(u=a==null?void 0:a.value.get(n.value))==null||u.push(t):a==null||a.value.set(n.value,[t]),t==null||t.classList.toggle(yn,!0),o&&he(o,()=>{var p,f,m;const d=((p=o.value)!=null?p:0)>=((m=(f=n.value)!=null?f:i)!=null?m:0);t.classList.contains(po)||t.classList.toggle(uo,!d),t.classList.toggle(ys,!1),t.classList.contains(ys)||t.classList.toggle(dr,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(yn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,l,u;if(Ms.value||((i=ut(n,Rs))==null?void 0:i.value))return;const r=ut(n,xn),o=ut(n,Os),a=((l=r==null?void 0:r.value)==null?void 0:l.length)||0;r&&!((u=r==null?void 0:r.value)!=null&&u.includes(t))&&r.value.push(t),t==null||t.classList.toggle(yn,!0),o&&he(o,()=>{var f;const d=(f=o==null?void 0:o.value)!=null?f:0,p=n.value!=null?d>=n.value:d>a;t.classList.toggle(uo,p),t.classList.toggle(po,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(yn,!1);const r=ut(n,xn);r!=null&&r.value&&Yo(r.value,t)}})}}}function $T(e,t){const n=ld(e),r=cd(t,n.currentRoute,n.currentPage);return{nav:{...n,...r,downloadPDF:la,next:cn,nextSlide:Ys,openInEditor:aC,prev:un,prevSlide:Zs},configs:Ce,themeConfigs:R(()=>Ce.themeConfig)}}function ET(){return{install(e){const t=$T(Xt,Pt);e.provide(G,Fe(t))}}}const hs=Mm(lC);hs.use(_t);hs.use(wh());hs.use(ST());hs.use(ET());TT({app:hs,router:_t});hs.mount("#app");export{Cs as $,ue as A,Se as B,ot as C,U_ as D,pf as E,we as F,ff as G,Pt as H,Ir as I,tC as J,ko as K,fo as L,zs as M,vo as N,Mu as O,Kv as P,Ka as Q,qv as R,Ya as S,We as T,_d as U,X_ as V,fn as W,It as X,OT as Y,At as Z,rd as _,s as a,pr as a0,Ln as a1,Sn as a2,Ht as a3,ra as a4,k_ as a5,b_ as a6,x_ as a7,C_ as a8,Na as a9,xu as aa,jT as ab,at as ac,A1 as ad,Au as ae,T_ as af,Zr as ag,D_ as ah,R as b,U as c,Oe as d,G as e,ft as f,z as g,w as h,I as i,j_ as j,oC as k,Ce as l,Sh as m,De as n,C as o,In as p,Fe as q,D as r,RT as s,Et as t,PT as u,AT as v,he as w,x,X as y,A as z};
