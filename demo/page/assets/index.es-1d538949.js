import{m as ae,a as T,b,o as L,d as fe,e as de,c as w,F as ce,f as N,u as J,s as A,g as ee}from"./index-91bba038.js";function ue(i,t,e){let o=e.length,n=t.length,r=o,l=0,s=0,a=t[n-1].nextSibling,f=null;for(;l<n||s<r;){if(t[l]===e[s]){l++,s++;continue}for(;t[n-1]===e[r-1];)n--,r--;if(n===l){const u=r<o?s?e[s-1].nextSibling:e[r-s]:a;for(;s<r;)i.insertBefore(e[s++],u)}else if(r===s)for(;l<n;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===e[r-1]&&e[s]===t[n-1]){const u=t[--n].nextSibling;i.insertBefore(e[s++],t[l++].nextSibling),i.insertBefore(e[--r],u),t[n]=e[r]}else{if(!f){f=new Map;let S=s;for(;S<r;)f.set(e[S],S++)}const u=f.get(t[l]);if(u!=null)if(s<u&&u<r){let S=l,z=1,F;for(;++S<n&&S<r&&!((F=f.get(t[S]))==null||F!==u+z);)z++;if(z>u-s){const $=t[l];for(;s<u;)i.insertBefore(e[s++],$)}else i.replaceChild(e[s++],t[l++])}else l++;else t[l++].remove()}}}function V(i,t,e){let o;const n=()=>{const l=document.createElement("template");return l.innerHTML=i,e?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>(o||(o=n())).cloneNode(!0):()=>J(()=>document.importNode(o||(o=n()),!0));return r.cloneNode=r,r}function he(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)}function ge(i,t){t==null?i.removeAttribute("class"):i.className=t}function X(i,t,e={}){const o=Object.keys(t||{}),n=Object.keys(e);let r,l;for(r=0,l=n.length;r<l;r++){const s=n[r];!s||s==="undefined"||t[s]||(Q(i,s,!1),delete e[s])}for(r=0,l=o.length;r<l;r++){const s=o[r],a=!!t[s];!s||s==="undefined"||e[s]===a||!a||(Q(i,s,!0),e[s]=a)}return e}function ye(i,t,e){if(!t)return e?he(i,"style"):t;const o=i.style;if(typeof t=="string")return o.cssText=t;typeof e=="string"&&(o.cssText=e=void 0),e||(e={}),t||(t={});let n,r;for(r in e)t[r]==null&&o.removeProperty(r),delete e[r];for(r in t)n=t[r],n!==e[r]&&(o.setProperty(r,n),e[r]=n);return e}function k(i,t,e){return J(()=>i(t,e))}function E(i,t,e,o){if(e!==void 0&&!o&&(o=[]),typeof t!="function")return R(i,t,o,e);N(n=>R(i,t(),n,e),o)}function Q(i,t,e){const o=t.trim().split(/\s+/);for(let n=0,r=o.length;n<r;n++)i.classList.toggle(o[n],e)}function R(i,t,e,o,n){if(A.context){!e&&(e=[...i.childNodes]);let s=[];for(let a=0;a<e.length;a++){const f=e[a];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():s.push(f)}e=s}for(;typeof e=="function";)e=e();if(t===e)return e;const r=typeof t,l=o!==void 0;if(i=l&&e[0]&&e[0].parentNode||i,r==="string"||r==="number"){if(A.context)return e;if(r==="number"&&(t=t.toString()),l){let s=e[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),e=_(i,e,o,s)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||r==="boolean"){if(A.context)return e;e=_(i,e,o)}else{if(r==="function")return N(()=>{let s=t();for(;typeof s=="function";)s=s();e=R(i,s,e,o)}),()=>e;if(Array.isArray(t)){const s=[],a=e&&Array.isArray(e);if(D(s,t,e,n))return N(()=>e=R(i,s,e,o,!0)),()=>e;if(A.context){if(!s.length)return e;for(let f=0;f<s.length;f++)if(s[f].parentNode)return e=s}if(s.length===0){if(e=_(i,e,o),l)return e}else a?e.length===0?W(i,s,o):ue(i,e,s):(e&&_(i),W(i,s));e=s}else if(t instanceof Node){if(A.context&&t.parentNode)return e=l?[t]:t;if(Array.isArray(e)){if(l)return e=_(i,e,o,t);_(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function D(i,t,e,o){let n=!1;for(let r=0,l=t.length;r<l;r++){let s=t[r],a=e&&e[r];if(s instanceof Node)i.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))n=D(i,s,a)||n;else if(typeof s=="function")if(o){for(;typeof s=="function";)s=s();n=D(i,Array.isArray(s)?s:[s],Array.isArray(a)?a:[a])||n}else i.push(s),n=!0;else{const f=String(s);a&&a.nodeType===3?(a.data=f,i.push(a)):i.push(document.createTextNode(f))}}return n}function W(i,t,e=null){for(let o=0,n=t.length;o<n;o++)i.insertBefore(t[o],e)}function _(i,t,e,o){if(e===void 0)return i.textContent="";const n=o||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(n!==s){const a=s.parentNode===i;!r&&!l?a?i.replaceChild(n,s):i.insertBefore(n,e):a&&s.remove()}else r=!0}}else i.insertBefore(n,e);return[n]}function Se(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var o,n,r,l,s=[],a=!0,f=!1;try{if(r=(e=e.call(i)).next,t===0){if(Object(e)!==e)return;a=!1}else for(;!(a=(o=r.call(e)).done)&&(s.push(o.value),s.length!==t);a=!0);}catch(u){f=!0,n=u}finally{try{if(!a&&e.return!=null&&(l=e.return(),Object(l)!==l))return}finally{if(f)throw n}}return s}}function P(i,t,e){return t=_e(t),t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function C(i,t){return ve(i)||Se(i,t)||me(i,t)||pe()}function ve(i){if(Array.isArray(i))return i}function me(i,t){if(i){if(typeof i=="string")return Y(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Y(i,t)}}function Y(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=i[e];return o}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(i,t){if(typeof i!="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var o=e.call(i,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function _e(i){var t=ze(i,"string");return typeof t=="symbol"?t:String(t)}const Ie=V("<div>");var xe=function(t){var e,o;return L(function(){o=new ResizeObserver(function(){t.onSizeChange(t.id,(t.isHorizontal?e?.offsetWidth:e?.offsetHeight)||0)}),e&&o.observe(e)}),ee(function(){var n;(n=o)===null||n===void 0||n.disconnect()}),function(){var n=Ie(),r=e;return typeof r=="function"?k(r,n):e=n,E(n,function(){return t.children}),n}()};function Te(i,t){t===void 0&&(t={});var e=t.insertAt;if(!(!i||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i))}}var be=`.style-module_virtual-scroll-list-container__Oa7Qt {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}

.style-module_horizontal__aFKov {
  display: flex;
}

.style-module_headerSlot__wyQv1 {
  position: sticky;
  top: 0;
}

.style-module_footerSlot__Z0usB {
  position: sticky;
  bottom: 0;
}
`,B={"virtual-scroll-list-container":"style-module_virtual-scroll-list-container__Oa7Qt",horizontal:"style-module_horizontal__aFKov",headerSlot:"style-module_headerSlot__wyQv1",footerSlot:"style-module_footerSlot__Z0usB"};Te(be);const Ae=V("<div>");var Z=function(t){var e,o;return L(function(){o=new ResizeObserver(function(){t.onSlotSizeChange(t.type,(t.isHorizontal?e?.offsetWidth:e?.offsetHeight)||0)}),e&&o.observe(e)}),ee(function(){var n;(n=o)===null||n===void 0||n.disconnect()}),function(){var n=Ae(),r=e;return typeof r=="function"?k(r,n):e=n,E(n,function(){return t.config.render()}),N(function(l){var s="".concat(t.type==="header"?B.headerSlot:B.footerSlot," ").concat(t.config.className||""),a=t.config.style;return s!==l._v$&&ge(n,l._v$=s),l._v$2=ye(n,a,l._v$2),l},{_v$:void 0,_v$2:void 0}),n}()},p;(function(i){i.FRONT="FRONT",i.BEHIND="BEHIND"})(p||(p={}));var y;(function(i){i.INIT="INIT",i.FIXED="FIXED",i.DYNAMIC="DYNAMIC"})(y||(y={}));class Ce{params={offset:0,keeps:30,buffer:10,estimateSize:50,uniqueIds:[]};slotHeaderSize=0;slotFooterSize=0;sizesMap=new Map;fixedSizeValue=1/0;firstRangeTotalSize=0;firstRangeAverageSize=0;calcType=y.INIT;direction=p.BEHIND;fn=()=>{};range={start:0,end:0,paddingFront:0,paddingBehind:0};constructor(t,e){this.params=t,this.fn=e,this.initState()}initState(){this.slotHeaderSize=0,this.slotFooterSize=0,this.sizesMap=new Map,this.calcType=y.INIT,this.direction=p.BEHIND,this.fixedSizeValue=1/0,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0}forceUpdate(t){this.params.offset=t;const e=this.getScrollOvers();this.updateRange(e,this.getEndByStart(e))}handleScroll(t){this.direction=t>=this.params.offset?p.BEHIND:p.FRONT,this.params.offset=t,this.direction===p.BEHIND?this.handleScrollBehind():this.handleScrollFront()}handleScrollBehind(){const t=this.getScrollOvers();t<this.range.start+this.params.buffer||this.checkRange(t,this.getEndByStart(t))}handleScrollFront(){const t=this.getScrollOvers();if(t>this.range.start)return;const e=Math.max(t-this.params.buffer,0);this.checkRange(e,this.getEndByStart(e))}checkRange(t,e){const o=this.getTotalCount(),n=this.params.keeps;o<=n?(t=0,e=o):e-t<n&&(t=e-n),this.range.start!==t&&this.updateRange(t,e)}updateRange(t,e){this.range.start=t,this.range.end=e,this.range.paddingFront=this.getPaddingFront(),this.range.paddingBehind=this.getPaddingBehind(),this.fn(this.range)}getPaddingFront(){return this.isFixedSize()?this.range.start*this.params.estimateSize:this.getOffsetByIndex(this.range.start)}getPaddingBehind(){return this.isFixedSize()?(this.getTotalCount()-this.range.end)*this.params.estimateSize:this.getOffsetByIndex(this.getTotalCount())-this.getOffsetByIndex(this.range.end)}getOffsetByIndex(t){let e=0;for(let o=0;o<t;o++){const n=this.sizesMap.get(this.params.uniqueIds[o]);e+=typeof n>"u"?this.getEstimateSize():n}return e}saveSize(t,e){this.sizesMap.set(t,e),this.calcType===y.INIT?(this.fixedSizeValue=e,this.calcType=y.FIXED):this.calcType===y.FIXED&&this.fixedSizeValue!==e&&(this.fixedSizeValue=1/0,this.calcType=y.DYNAMIC),this.calcType!==y.FIXED&&this.firstRangeTotalSize!==void 0&&(this.sizesMap.size<Math.min(this.params.keeps,this.getTotalCount())?(this.firstRangeTotalSize=[...this.sizesMap.values()].reduce((o,n)=>o+n,0),this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizesMap.size)):this.firstRangeTotalSize=void 0)}updateSlotSize(t,e){t==="header"?this.slotHeaderSize=e:this.slotFooterSize=e}updateUniqueIds(t){this.params.uniqueIds=t;for(const e of this.sizesMap.keys())t.includes(e)||this.sizesMap.delete(e)}isFixedSize(){return this.calcType===y.FIXED}getEndByStart(t){const e=t+this.params.keeps;return Math.min(e,this.getTotalCount())}getScrollOvers(){const t=this.params.offset-this.slotHeaderSize;if(t<=0)return 0;if(this.isFixedSize())return Math.floor(t/this.params.estimateSize);let e=0,o=this.getTotalCount();for(;e<=o;){const n=Math.floor((o+e)/2),r=this.getOffsetByIndex(n);if(r===t)return n;r<t?e=n+1:o=n-1}return Math.max(e-1,0)}getTotalCount(){return this.params.uniqueIds.length}getEstimateSize(){return this.isFixedSize()?this.params.estimateSize:this.firstRangeAverageSize||this.params.estimateSize}}const Ee={direction:"vertical",estimateSize:50,keeps:30};var G;(function(i){i.HEADER="header",i.FOOTER="footer"})(G||(G={}));const Be=V("<div><div>");var Fe=function(t){var e=ae(Ee,t),o=T(),n=C(o,2),r=n[0],l=n[1],s=T(0),a=C(s,2),f=a[0],u=a[1],S=T(0),z=C(S,2),F=z[0],$=z[1],te=T(0),j=C(te,2),q=j[0],ie=j[1],ne=T(0),U=C(ne,2),K=U[0],se=U[1],m=b(function(){return e.direction==="horizontal"}),oe=b(function(){return e.dataSource.slice(f(),F())}),M=b(function(){var d=e.dataId,c=e.dataSource;return c.map(function(g){return typeof d=="function"?d(g):g?.[d]})});L(function(){var d,c;v.forceUpdate((m()?(d=r())===null||d===void 0?void 0:d.scrollLeft:(c=r())===null||c===void 0?void 0:c.scrollTop)||0)}),fe(function(){var d=M();v.updateUniqueIds(d)});var v=new Ce({offset:0,keeps:e.keeps,buffer:e.keeps/3,estimateSize:e.estimateSize,uniqueIds:M()},function(d){de(function(){u(d.start),$(d.end),ie(d.paddingFront),se(d.paddingBehind)})}),re=function(){var c,g,h=(m()?(c=r())===null||c===void 0?void 0:c.scrollLeft:(g=r())===null||g===void 0?void 0:g.scrollTop)||0;v.handleScroll(h)};return function(){var d=Be(),c=d.firstChild;d.addEventListener("scroll",re);var g=l;return typeof g=="function"?k(g,d):l=d,E(c,function(){var h=b(function(){return!!e.header});return function(){return h()&&w(Z,{type:"header",get config(){return e.header},get isHorizontal(){return m()},get onSlotSizeChange(){return v.updateSlotSize.bind(v)}})}}(),null),E(c,w(ce,{get each(){return oe()},fallback:null,children:function(I,H){var x=H()+f(),O=e.dataSource[x],le=M()[x];return w(xe,{id:le,get isHorizontal(){return m()},get onSizeChange(){return v.saveSize.bind(v)},get children(){return e.itemRender(x,O)}})}}),null),E(c,function(){var h=b(function(){return!!e.footer});return function(){return h()&&w(Z,{type:"footer",get config(){return e.footer},get isHorizontal(){return m()},get onSlotSizeChange(){return v.updateSlotSize.bind(v)}})}}(),null),N(function(h){var I,H=(I={},P(I,B["virtual-scroll-list-container"],!0),P(I,B.horizontal,m()),I),x=P({},B.horizontal,m()),O=m()?"0px ".concat(K(),"px 0px ").concat(q(),"px"):"".concat(q(),"px 0px ").concat(K(),"px 0px");return h._v$=X(d,H,h._v$),h._v$2=X(c,x,h._v$2),O!==h._v$3&&c.style.setProperty("padding",h._v$3=O),h},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d}()};export{Fe as S};
