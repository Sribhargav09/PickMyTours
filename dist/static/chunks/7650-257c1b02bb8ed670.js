"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7650],{74221:function(e,t,n){function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===u(e)}n.r(t),n.d(t,{default:function(){return K}});let i=1/0;function o(e){return"string"==typeof e}function s(e){return"number"==typeof e}function l(e){return"object"==typeof e}function c(e){return null!=e}function a(e){return!e.trim().length}function u(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let h=e=>`Invalid value for key ${e}`,d=e=>`Pattern length exceeds max of ${e}.`,f=e=>`Missing ${e} property in key`,p=e=>`Property 'weight' in key '${e}' must be a positive integer`,g=Object.prototype.hasOwnProperty;class m{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=v(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function v(e){let t=null,n=null,i=null,s=1,l=null;if(o(e)||r(e))i=e,t=x(e),n=y(e);else{if(!g.call(e,"name"))throw Error(f("name"));let r=e.name;if(i=r,g.call(e,"weight")&&(s=e.weight)<=0)throw Error(p(r));t=x(r),n=y(r),l=e.getFn}return{path:t,id:n,weight:s,src:i,getFn:l}}function x(e){return r(e)?e:e.split(".")}function y(e){return r(e)?e.join("."):e}var _={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let n=[],a=!1,h=(e,t,d)=>{if(c(e)){if(t[d]){var f,p;let g=t[d],m=e[g];if(c(m)){if(d===t.length-1&&(o(m)||s(m)||!0===(f=m)||!1===f||l(p=f)&&null!==p&&"[object Boolean]"==u(f)))n.push(null==m?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-i?"-0":t}(m));else if(r(m)){a=!0;for(let e=0,n=m.length;e<n;e+=1)h(m[e],t,d+1)}else t.length&&h(m,t,d+1)}}else n.push(e)}};return h(e,o(t)?t.split("."):t,0),a?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let b=/[^ ]+/g;class w{constructor({getFn:e=_.getFn,fieldNormWeight:t=_.fieldNormWeight}={}){this.norm=function(e=1,t=3){let n=new Map,r=Math.pow(10,t);return{get(t){let i=t.match(b).length;if(n.has(i))return n.get(i);let o=1/Math.pow(i,.5*e),s=parseFloat(Math.round(o*r)/r);return n.set(i,s),s},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,o(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();o(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!c(e)||a(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((t,i)=>{let s=t.getFn?t.getFn(e):this.getFn(e,t.path);if(c(s)){if(r(s)){let e=[],t=[{nestedArrIndex:-1,value:s}];for(;t.length;){let{nestedArrIndex:n,value:i}=t.pop();if(c(i)){if(o(i)&&!a(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else r(i)&&i.forEach((e,n)=>{t.push({nestedArrIndex:n,value:e})})}}n.$[i]=e}else if(o(s)&&!a(s)){let e={v:s,n:this.norm.get(s)};n.$[i]=e}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function M(e,t,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){let i=new w({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(v)),i.setSources(t),i.create(),i}function S(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){let s=t/e.length;if(o)return s;let l=Math.abs(r-n);return i?s+l/i:l?1:s}class j{constructor(e,{location:t=_.location,threshold:n=_.threshold,distance:r=_.distance,includeMatches:i=_.includeMatches,findAllMatches:o=_.findAllMatches,minMatchCharLength:s=_.minMatchCharLength,isCaseSensitive:l=_.isCaseSensitive,ignoreLocation:c=_.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let a=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let n=0,r=e.length;n<r;n+=1){let i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}(e),startIndex:t})},u=this.pattern.length;if(u>32){let e=0,t=u%32,n=u-t;for(;e<n;)a(this.pattern.substr(e,32),e),e+=32;if(t){let e=u-32;a(this.pattern.substr(e),e)}}else a(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}let{location:r,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:l,ignoreLocation:c}=this.options,a=[],u=0,h=!1;this.chunks.forEach(({pattern:t,alphabet:f,startIndex:p})=>{let{isMatch:g,score:m,indices:v}=function(e,t,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:s=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:c=_.includeMatches,ignoreLocation:a=_.ignoreLocation}={}){let u;if(t.length>32)throw Error(d(32));let h=t.length,f=e.length,p=Math.max(0,Math.min(r,f)),g=o,m=p,v=l>1||c,x=v?Array(f):[];for(;(u=e.indexOf(t,m))>-1;)if(g=Math.min(S(t,{currentLocation:u,expectedLocation:p,distance:i,ignoreLocation:a}),g),m=u+h,v){let e=0;for(;e<h;)x[u+e]=1,e+=1}m=-1;let y=[],b=1,w=h+f,M=1<<h-1;for(let r=0;r<h;r+=1){let o=0,l=w;for(;o<l;){let e=S(t,{errors:r,currentLocation:p+l,expectedLocation:p,distance:i,ignoreLocation:a});e<=g?o=l:w=l,l=Math.floor((w-o)/2+o)}w=l;let c=Math.max(1,p-l+1),u=s?f:Math.min(p+l,f)+h,d=Array(u+2);d[u+1]=(1<<r)-1;for(let o=u;o>=c;o-=1){let s=o-1,l=n[e.charAt(s)];if(v&&(x[s]=+!!l),d[o]=(d[o+1]<<1|1)&l,r&&(d[o]|=(y[o+1]|y[o])<<1|1|y[o+1]),d[o]&M&&(b=S(t,{errors:r,currentLocation:s,expectedLocation:p,distance:i,ignoreLocation:a}))<=g){if(g=b,(m=s)<=p)break;c=Math.max(1,2*p-m)}}let _=S(t,{errors:r+1,currentLocation:p,expectedLocation:p,distance:i,ignoreLocation:a});if(_>g)break;y=d}let j={isMatch:m>=0,score:Math.max(.001,b)};if(v){let e=function(e=[],t=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=e.length;o<s;o+=1){let s=e[o];s&&-1===r?r=o:s||-1===r||((i=o-1)-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}(x,l);e.length?c&&(j.indices=e):j.isMatch=!1}return j}(e,t,f,{location:r+p,distance:i,threshold:o,findAllMatches:s,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});g&&(h=!0),u+=m,g&&v&&(a=[...a,...v])});let f={isMatch:h,score:h?u/this.chunks.length:1};return h&&n&&(f.indices=a),f}}class O{constructor(e){this.pattern=e}static isMultiMatch(e){return k(e,this.multiRegex)}static isSingleMatch(e){return k(e,this.singleRegex)}search(){}}function k(e,t){let n=e.match(t);return n?n[1]:null}class I extends O{constructor(e,{location:t=_.location,threshold:n=_.threshold,distance:r=_.distance,includeMatches:i=_.includeMatches,findAllMatches:o=_.findAllMatches,minMatchCharLength:s=_.minMatchCharLength,isCaseSensitive:l=_.isCaseSensitive,ignoreLocation:c=_.ignoreLocation}={}){super(e),this._bitapSearch=new j(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class C extends O{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0,r=[],i=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,r.push([t,n-1]);let o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}let E=[class extends O{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},C,class extends O{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern),n=-1===t;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}},I],N=E.length,R=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,A=new Set([I.type,C.type]),L=[];function P(e,t){for(let n=0,r=L.length;n<r;n+=1){let r=L[n];if(r.condition(e,t))return new r(e,t)}return new j(e,t)}let F={AND:"$and",OR:"$or"},$={PATH:"$path",PATTERN:"$val"},T=e=>!!(e[F.AND]||e[F.OR]),D=e=>!!e[$.PATH],z=e=>!r(e)&&l(e)&&!T(e),U=e=>({[F.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function B(e,t,{auto:n=!0}={}){let i=e=>{let s=Object.keys(e),l=D(e);if(!l&&s.length>1&&!T(e))return i(U(e));if(z(e)){let r=l?e[$.PATH]:s[0],i=l?e[$.PATTERN]:e[r];if(!o(i))throw Error(h(r));let c={keyId:y(r),pattern:i};return n&&(c.searcher=P(i,t)),c}let c={children:[],operator:s[0]};return s.forEach(t=>{let n=e[t];r(n)&&n.forEach(e=>{c.children.push(i(e))})}),c};return T(e)||(e=U(e)),i(e)}function W(e,t){let n=e.matches;t.matches=[],c(n)&&n.forEach(e=>{if(!c(e.indices)||!e.indices.length)return;let{indices:n,value:r}=e,i={indices:n,value:r};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)})}function H(e,t){t.score=e.score}class K{constructor(e,t={},n){this.options={..._,...t},this.options.useExtendedSearch,this._keyStore=new m(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof w))throw Error("Incorrect 'index' type");this._myIndex=t||M(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){c(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let n=0,r=this._docs.length;n<r;n+=1){let i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:n,includeScore:r,shouldSort:i,sortFn:l,ignoreFieldNorm:c}=this.options,a=o(e)?o(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=_.ignoreFieldNorm}){e.forEach(e=>{let n=1;e.matches.forEach(({key:e,norm:r,score:i})=>{let o=e?e.weight:null;n*=Math.pow(0===i&&o?Number.EPSILON:i,(o||1)*(t?1:r))}),e.score=n})}(a,{ignoreFieldNorm:c}),i&&a.sort(l),s(t)&&t>-1&&(a=a.slice(0,t)),function(e,t,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){let i=[];return n&&i.push(W),r&&i.push(H),e.map(e=>{let{idx:n}=e,r={item:t[n],refIndex:n};return i.length&&i.forEach(t=>{t(e,r)}),r})}(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){let t=P(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:e,i:n,n:i})=>{if(!c(e))return;let{isMatch:o,score:s,indices:l}=t.searchIn(e);o&&r.push({item:e,idx:n,matches:[{score:s,value:e,norm:i,indices:l}]})}),r}_searchLogical(e){let t=B(e,this.options),n=(e,t,r)=>{if(!e.children){let{keyId:n,searcher:i}=e,o=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:i});return o&&o.length?[{idx:r,item:t,matches:o}]:[]}let i=[];for(let o=0,s=e.children.length;o<s;o+=1){let s=e.children[o],l=n(s,t,r);if(l.length)i.push(...l);else if(e.operator===F.AND)return[]}return i},r=this._myIndex.records,i={},o=[];return r.forEach(({$:e,i:r})=>{if(c(e)){let s=n(t,e,r);s.length&&(i[r]||(i[r]={idx:r,item:e,matches:[]},o.push(i[r])),s.forEach(({matches:e})=>{i[r].matches.push(...e)}))}}),o}_searchObjectList(e){let t=P(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:e,i:r})=>{if(!c(e))return;let o=[];n.forEach((n,r)=>{o.push(...this._findMatches({key:n,value:e[r],searcher:t}))}),o.length&&i.push({idx:r,item:e,matches:o})}),i}_findMatches({key:e,value:t,searcher:n}){if(!c(t))return[];let i=[];if(r(t))t.forEach(({v:t,i:r,n:o})=>{if(!c(t))return;let{isMatch:s,score:l,indices:a}=n.searchIn(t);s&&i.push({score:l,key:e,value:t,idx:r,norm:o,indices:a})});else{let{v:r,n:o}=t,{isMatch:s,score:l,indices:c}=n.searchIn(r);s&&i.push({score:l,key:e,value:r,norm:o,indices:c})}return i}}K.version="6.6.2",K.createIndex=M,K.parseIndex=function(e,{getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){let{keys:r,records:i}=e,o=new w({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o},K.config=_,K.parseQuery=B,function(...e){L.push(...e)}(class{constructor(e,{isCaseSensitive:t=_.isCaseSensitive,includeMatches:n=_.includeMatches,minMatchCharLength:r=_.minMatchCharLength,ignoreLocation:i=_.ignoreLocation,findAllMatches:o=_.findAllMatches,location:s=_.location,threshold:l=_.threshold,distance:c=_.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:s,threshold:l,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map(e=>{let n=e.trim().split(R).filter(e=>e&&!!e.trim()),r=[];for(let e=0,i=n.length;e<i;e+=1){let i=n[e],o=!1,s=-1;for(;!o&&++s<N;){let e=E[s],n=e.isMultiMatch(i);n&&(r.push(new e(n,t)),o=!0)}if(!o)for(s=-1;++s<N;){let e=E[s],n=e.isSingleMatch(i);if(n){r.push(new e(n,t));break}}}return r})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],s=0;for(let r=0,l=t.length;r<l;r+=1){let l=t[r];o.length=0,i=0;for(let t=0,r=l.length;t<r;t+=1){let r=l[t],{isMatch:c,indices:a,score:u}=r.search(e);if(c){if(i+=1,s+=u,n){let e=r.constructor.type;A.has(e)?o=[...o,...a]:o.push(a)}}else{s=0,i=0,o.length=0;break}}if(i){let e={isMatch:!0,score:s/i};return n&&(e.indices=o),e}}return{isMatch:!1,score:1}}})},26562:function(e,t,n){var r,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClearIcon=void 0;var l=n(85893),c=s(n(50066));t.ClearIcon=function(e){var t=e.showClear,n=e.setSearchString,r=e.searchString,i=e.setFocus,s=e.onClear;return t&&r&&!((null==r?void 0:r.length)<=0)?(0,l.jsx)(a,o({className:"clear-icon",onClick:function(){n({target:{value:""}}),i(),s()}},{children:(0,l.jsx)("svg",o({width:20,height:20,focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},{children:(0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}))})):null};var a=c.default.div(r||(r=i(["\n  margin: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ",";\n  }\n"],["\n  margin: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  > svg {\n    fill: ",";\n  }\n"])),function(e){return e.theme.clearIconMargin},function(e){return e.theme.iconColor})},19604:function(e,t,n){var r,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return l(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_RESULTS=t.DEFAULT_INPUT_DEBOUNCE=void 0;var u=n(85893),h=a(n(74221)),d=c(n(67294)),f=c(n(50066)),p=n(90528),g=n(99330),m=a(n(65126)),v=a(n(98770));t.DEFAULT_INPUT_DEBOUNCE=200,t.MAX_RESULTS=10,t.default=function(e){var n=e.items,r=void 0===n?[]:n,i=e.fuseOptions,s=void 0===i?p.defaultFuseOptions:i,l=e.inputDebounce,c=void 0===l?t.DEFAULT_INPUT_DEBOUNCE:l,a=e.onSearch,y=void 0===a?function(){}:a,_=e.onHover,b=void 0===_?function(){}:_,w=e.onSelect,M=void 0===w?function(){}:w,S=e.onFocus,j=void 0===S?function(){}:S,O=e.onClear,k=e.showIcon,I=void 0===k||k,C=e.showClear,E=e.maxResults,N=void 0===E?t.MAX_RESULTS:E,R=e.placeholder,A=e.autoFocus,L=e.styling,P=e.resultStringKeyName,F=void 0===P?"name":P,$=e.inputSearchString,T=void 0===$?"":$,D=e.formatResult,z=e.showNoResults,U=void 0===z||z,B=e.showNoResultsText,W=e.showItemsOnFocus,H=void 0!==W&&W,K=e.maxLength,q=e.className,J=o(o({},p.defaultTheme),void 0===L?{}:L),X=o(o({},p.defaultFuseOptions),s),V=new h.default(r,X);V.setCollection(r);var Q=(0,d.useState)(T),G=Q[0],Y=Q[1],Z=(0,d.useState)([]),ee=Z[0],et=Z[1],en=(0,d.useState)(-1),er=en[0],ei=en[1],eo=(0,d.useState)(!1),es=eo[0],el=eo[1],ec=(0,d.useState)(!1),ea=ec[0],eu=ec[1],eh=(0,d.useState)(!1),ed=eh[0],ef=eh[1],ep=(0,d.useState)(!1),eg=ep[0],em=ep[1];(0,d.useEffect)(function(){Y(T);var e=setTimeout(function(){return et(ey(T))},0);return function(){return clearTimeout(e)}},[T]),(0,d.useEffect)(function(){(null==G?void 0:G.length)>0&&ee&&(null==ee?void 0:ee.length)>0&&et(ey(G))},[r]),(0,d.useEffect)(function(){U&&G.length>0&&!ea&&0===ee.length&&!es?ef(!0):ef(!1)},[ea,U,es,G,ee]),(0,d.useEffect)(function(){H&&0===ee.length&&0===G.length&&eg&&et(r.slice(0,N))},[H,ee,G,eg]),(0,d.useEffect)(function(){var e=function(){e_(),em(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}},[]);var ev=function(e){var t=[];(null==e?void 0:e.length)>0&&(t=ey(e)),et(t),y(e,t),eu(!1)},ex=d.default.useCallback(c>0?(0,g.debounce)(function(e){return ev(e)},c):function(e){return ev(e)},[r]),ey=function(e){return V.search(e,{limit:N}).map(function(e){return o({},e.item)}).slice(0,N)},e_=function(){et([]),el(!0)},eb=function(e){var t=e.index,n=e.event,r=function(e){ei(e),(null==ee?void 0:ee[e])&&b(ee[e])};if(void 0!==t)ei(t),(null==ee?void 0:ee[t])&&b(ee[t]);else if(n)switch(n.key){case"Enter":ee.length>0&&ee[er]?(n.preventDefault(),M(ee[er]),Y(ee[er][F]),y(ee[er][F],ee)):y(G,ee),ei(-1),e_();break;case"ArrowUp":n.preventDefault(),r(er>-1?er-1:ee.length-1);break;case"ArrowDown":n.preventDefault(),r(er<ee.length-1?er+1:-1)}};return(0,u.jsx)(f.ThemeProvider,o({theme:J},{children:(0,u.jsx)(x,o({className:q},{children:(0,u.jsxs)("div",o({className:"wrapper"},{children:[(0,u.jsx)(v.default,{searchString:G,setSearchString:function(e){var t=e.target.value;Y(t),ex(t),eu(!0),es&&el(!1)},eraseResults:e_,autoFocus:void 0!==A&&A,onFocus:function(e){j(e),em(!0)},onClear:void 0===O?function(){}:O,placeholder:void 0===R?"":R,showIcon:I,showClear:void 0===C||C,setHighlightedItem:eb,maxLength:void 0===K?0:K}),(0,u.jsx)(m.default,{results:ee,onClick:function(e){e_(),M(e),Y(e[F]),ei(0)},setSearchString:Y,showIcon:I,maxResults:N,resultStringKeyName:F,formatResult:D,highlightedItem:er,setHighlightedItem:eb,showNoResultsFlag:ed,showNoResultsText:void 0===B?"No results":B})]}))}))}))};var x=f.default.div(r||(r=i(["\n  position: relative;\n\n  height: ",";\n\n  .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ",";\n    border-radius: ",";\n\n    background-color: ",";\n    color: ",";\n\n    font-size: ",";\n    font-family: ",";\n\n    z-index: ",";\n\n    &:hover {\n      box-shadow: ",";\n    }\n    &:active {\n      box-shadow: ",";\n    }\n    &:focus-within {\n      box-shadow: ",";\n    }\n  }\n"],["\n  position: relative;\n\n  height: ",";\n\n  .wrapper {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    border: ",";\n    border-radius: ",";\n\n    background-color: ",";\n    color: ",";\n\n    font-size: ",";\n    font-family: ",";\n\n    z-index: ",";\n\n    &:hover {\n      box-shadow: ",";\n    }\n    &:active {\n      box-shadow: ",";\n    }\n    &:focus-within {\n      box-shadow: ",";\n    }\n  }\n"])),function(e){return parseInt(e.theme.height)+2+"px"},function(e){return e.theme.border},function(e){return e.theme.borderRadius},function(e){return e.theme.backgroundColor},function(e){return e.theme.color},function(e){return e.theme.fontSize},function(e){return e.theme.fontFamily},function(e){return e.theme.zIndex},function(e){return e.theme.boxShadow},function(e){return e.theme.boxShadow},function(e){return e.theme.boxShadow})},65126:function(e,t,n){var r,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(85893),c=s(n(50066)),a=n(48357);t.default=function(e){var t=e.results,n=void 0===t?[]:t,r=e.onClick,i=e.setSearchString,s=e.showIcon,c=e.maxResults,h=e.resultStringKeyName,d=void 0===h?"name":h,f=e.highlightedItem,p=e.setHighlightedItem,g=e.formatResult,m=e.showNoResultsFlag,v=void 0===m||m,x=e.showNoResultsText,y=g||function(e){return e[d]},_=function(e){r(e),i(e[d])},b=function(e){var t=e.event,n=e.result;0===t.button&&(t.preventDefault(),_(n))};return v?(0,l.jsx)(u,{children:(0,l.jsxs)("li",o({"data-test":"no-results-message"},{children:[(0,l.jsx)(a.SearchIcon,{showIcon:s}),(0,l.jsx)("div",o({className:"ellipsis"},{children:void 0===x?"No results":x}))]}))}):(null==n?void 0:n.length)<=0&&!v?null:(0,l.jsx)(u,{children:n.slice(0,c).map(function(e,t){return(0,l.jsxs)("li",o({className:f===t?"selected":"",onMouseEnter:function(){return p({index:t})},"data-test":"result",onMouseDown:function(t){return b({event:t,result:e})},onClick:function(){return _(e)}},{children:[(0,l.jsx)(a.SearchIcon,{showIcon:s}),(0,l.jsx)("div",o({className:"ellipsis",title:e[d]},{children:y(e)}))]}),"rsa-result-".concat(e.id))})})};var u=function(e){var t=e.children;return(0,l.jsxs)(h,{children:[(0,l.jsx)("div",{className:"line"}),(0,l.jsx)("ul",{children:t})]})},h=c.default.div(r||(r=i(["\n  > div.line {\n    border-top-color: ",";\n    border-top-style: solid;\n    border-top-width: 1px;\n\n    margin-bottom: 0px;\n    margin-left: 14px;\n    margin-right: 20px;\n    margin-top: 0px;\n\n    padding-bottom: 4px;\n  }\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 0 16px 0;\n    max-height: ",";\n\n    > li {\n      display: flex;\n      align-items: center;\n      padding: 4px 0 4px 0;\n\n      > div {\n        margin-left: 13px;\n      }\n    }\n  }\n\n  .ellipsis {\n    text-align: left;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .selected {\n    background-color: ",";\n  }\n"],["\n  > div.line {\n    border-top-color: ",";\n    border-top-style: solid;\n    border-top-width: 1px;\n\n    margin-bottom: 0px;\n    margin-left: 14px;\n    margin-right: 20px;\n    margin-top: 0px;\n\n    padding-bottom: 4px;\n  }\n\n  > ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0px 0 16px 0;\n    max-height: ",";\n\n    > li {\n      display: flex;\n      align-items: center;\n      padding: 4px 0 4px 0;\n\n      > div {\n        margin-left: 13px;\n      }\n    }\n  }\n\n  .ellipsis {\n    text-align: left;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .selected {\n    background-color: ",";\n  }\n"])),function(e){return e.theme.lineColor},function(e){return e.theme.maxHeight},function(e){return e.theme.hoverBackgroundColor})},48357:function(e,t,n){var r,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchIcon=void 0;var l=n(85893),c=s(n(50066));t.SearchIcon=function(e){return e.showIcon?(0,l.jsx)(a,o({className:"search-icon",width:20,height:20,focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},{children:(0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})):null};var a=c.default.svg(r||(r=i(["\n  flex-shrink: 0;\n  margin: ",";\n  fill: ",";\n"],["\n  flex-shrink: 0;\n  margin: ",";\n  fill: ",";\n"])),function(e){return e.theme.searchIconMargin},function(e){return e.theme.iconColor})},98770:function(e,t,n){var r,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(85893),c=n(67294),a=s(n(50066)),u=n(26562),h=n(48357);t.default=function(e){var t=e.searchString,n=e.setSearchString,r=e.setHighlightedItem,i=e.eraseResults,s=e.autoFocus,a=e.onFocus,f=e.onClear,p=e.placeholder,g=e.showIcon,m=e.showClear,v=e.maxLength,x=(0,c.useRef)(null),y=!0,_=v?{maxLength:v}:{};return(0,l.jsxs)(d,{children:[(0,l.jsx)(h.SearchIcon,{showIcon:void 0===g||g}),(0,l.jsx)("input",o({type:"text",ref:x,spellCheck:!1,value:t,onChange:n,onFocus:function(e){y&&a(e)},placeholder:p,autoFocus:s,onBlur:function(){return i()},onKeyDown:function(e){return r({event:e})},"data-test":"search-input"},_)),(0,l.jsx)(u.ClearIcon,{showClear:void 0===m||m,setSearchString:n,searchString:t,onClear:f,setFocus:function(){y=!1,(null==x?void 0:x.current)&&x.current.focus(),y=!0}})]})};var d=a.default.div(r||(r=i(["\n  min-height: ",";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ",";\n\n    ::placeholder {\n      color: ",";\n      opacity: 1;\n\n      :-ms-input-placeholder {\n        color: ",";\n      }\n\n      ::-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n"],["\n  min-height: ",";\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > input {\n    width: 100%;\n\n    padding: 0 0 0 13px;\n\n    border: none;\n    outline: none;\n\n    background-color: rgba(0, 0, 0, 0);\n    font-size: inherit;\n    font-family: inherit;\n\n    color: ",";\n\n    ::placeholder {\n      color: ",";\n      opacity: 1;\n\n      :-ms-input-placeholder {\n        color: ",";\n      }\n\n      ::-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n"])),function(e){return e.theme.height},function(e){return e.theme.color},function(e){return e.theme.placeholderColor},function(e){return e.theme.placeholderColor},function(e){return e.theme.placeholderColor})},90528:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultFuseOptions=t.defaultTheme=void 0,t.defaultTheme={height:"44px",border:"1px solid #dfe1e5",borderRadius:"24px",backgroundColor:"white",boxShadow:"rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",hoverBackgroundColor:"#eee",color:"#212121",fontSize:"16px",fontFamily:"Arial",iconColor:"grey",lineColor:"rgb(232, 234, 237)",placeholderColor:"grey",zIndex:0,clearIconMargin:"3px 14px 0 0",searchIconMargin:"0 0 0 16px"},t.defaultFuseOptions={shouldSort:!0,threshold:.6,location:0,distance:100,minMatchCharLength:1,keys:["name"]}},97650:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReactSearchAutocomplete=void 0;var i=r(n(19604));t.ReactSearchAutocomplete=i.default},99330:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=void 0,t.debounce=function(e,t,n){var r;return function(){var i=this,o=arguments;n&&!r&&e.apply(i,o),r&&clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,o)},t)}}}}]);