(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8309],{14234:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/db-settings/components",function(){return n(54019)}])},94660:function(e,t,n){"use strict";let r;n.d(t,{OK:function(){return A},td:function(){return v},x4:function(){return I},mQ:function(){return N}});var l=n(67294);function a(e){return t=>!!t.type&&t.type.tabsRole===e}let u=a("Tab"),o=a("TabList"),c=a("TabPanel");function s(e,t){return l.Children.map(e,e=>null===e?null:u(e)||o(e)||c(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,l.cloneElement)(e,{...e.props,children:s(e.props.children,t)}):e)}var i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(l&&(l+=" "),l+=r);else for(n in t)t[n]&&(l&&(l+=" "),l+=n)}return l}(e))&&(r&&(r+=" "),r+=t);return r};function d(e){let t=0;return!function e(t,n){return l.Children.forEach(t,t=>{null!==t&&(u(t)||c(t)?n(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(o(t)&&n(t),e(t.props.children,n)))})}(e,e=>{u(e)&&t++}),t}function f(e){return e&&"getAttribute"in e}function p(e){return f(e)&&e.getAttribute("data-rttab")}function b(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let m={className:"react-tabs",focus:!1},h=e=>{let t=(0,l.useRef)([]),n=(0,l.useRef)([]),a=(0,l.useRef)();function f(t,n){if(t<0||t>=E())return;let{onSelect:r,selectedIndex:l}=e;r(t,l,n)}function h(e){let t=E();for(let n=e+1;n<t;n++)if(!b(w(n)))return n;for(let t=0;t<e;t++)if(!b(w(t)))return t;return e}function y(e){let t=e;for(;t--;)if(!b(w(t)))return t;for(t=E();t-- >e;)if(!b(w(t)))return t;return e}function E(){let{children:t}=e;return d(t)}function w(e){return t.current[`tabs-${e}`]}function C(e){let t=e.target;do if(N(t)){if(b(t))return;let n=[].slice.call(t.parentNode.children).filter(p).indexOf(t);f(n,e);return}while(null!=(t=t.parentNode))}function N(e){if(!p(e))return!1;let t=e.parentElement;do{if(t===a.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:g,className:_,disabledTabClassName:v,domRef:T,focus:k,forceRenderTabPanel:R,onSelect:A,selectedIndex:$,selectedTabClassName:x,selectedTabPanelClassName:O,environment:I,disableUpDownKeys:j,disableLeftRightKeys:P,...S}={...m,...e};return l.createElement("div",Object.assign({},S,{className:i(_),onClick:C,onKeyDown:function(t){let{direction:n,disableUpDownKeys:r,disableLeftRightKeys:l}=e;if(N(t.target)){let{selectedIndex:a}=e,u=!1,o=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(u=!0,o=!1,C(t)),(l||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(l||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(a=function(){let e=E();for(;e--;)if(!b(w(e)))return e;return null}(),u=!0,o=!0):(36===t.keyCode||"Home"===t.code)&&(a=function(){let e=E();for(let t=0;t<e;t++)if(!b(w(t)))return t;return null}(),u=!0,o=!0):(a="rtl"===n?y(a):h(a),u=!0,o=!0):(a="rtl"===n?h(a):y(a),u=!0,o=!0),u&&t.preventDefault(),o&&f(a,t)}},ref:e=>{a.current=e,T&&T(e)},"data-rttabs":!0}),function(){let a=0,{children:i,disabledTabClassName:d,focus:f,forceRenderTabPanel:p,selectedIndex:b,selectedTabClassName:m,selectedTabPanelClassName:h,environment:y}=e;n.current=n.current||[];let C=n.current.length-E(),N=(0,l.useId)();for(;C++<0;)n.current.push(`${N}${n.current.length}`);return s(i,e=>{let i=e;if(o(e)){let a=0,o=!1;null==r&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{r=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){r=!1}}(y);let c=y||("undefined"!=typeof window?window:void 0);r&&c&&(o=l.Children.toArray(e.props.children).filter(u).some((e,t)=>c.document.activeElement===w(t))),i=(0,l.cloneElement)(e,{children:s(e.props.children,e=>{let r=`tabs-${a}`,u=b===a,c={tabRef:e=>{t.current[r]=e},id:n.current[a],selected:u,focus:u&&(f||o)};return m&&(c.selectedClassName=m),d&&(c.disabledClassName=d),a++,(0,l.cloneElement)(e,c)})})}else if(c(e)){let t={id:n.current[a],selected:b===a};p&&(t.forceRender=p),h&&(t.selectedClassName=h),a++,i=(0,l.cloneElement)(e,t)}return i})}())};h.propTypes={};let y={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},E=e=>null===e.selectedIndex?1:0,w=(e,t)=>{},C=e=>{let{children:t,defaultFocus:n,defaultIndex:r,focusTabOnClick:a,onSelect:u,...o}={...y,...e},[c,s]=(0,l.useState)(n),[i]=(0,l.useState)(E(o)),[f,p]=(0,l.useState)(1===i?r||0:null);if((0,l.useEffect)(()=>{s(!1)},[]),1===i){let e=d(t);(0,l.useEffect)(()=>{if(null!=f){let t=Math.max(0,e-1);p(Math.min(f,t))}},[e])}w(o,i);let b={...e,...o};return b.focus=c,b.onSelect=(e,t,n)=>{("function"!=typeof u||!1!==u(e,t,n))&&(a&&s(!0),1===i&&p(e))},null!=f&&(b.selectedIndex=f),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,l.createElement(h,b,t)};C.propTypes={},C.tabsRole="Tabs";var N=C;let g={className:"react-tabs__tab-list"},_=e=>{let{children:t,className:n,...r}={...g,...e};return l.createElement("ul",Object.assign({},r,{className:i(n),role:"tablist"}),t)};_.tabsRole="TabList",_.propTypes={};var v=_;let T="react-tabs__tab",k={className:T,disabledClassName:`${T}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${T}--selected`},R=e=>{let t=(0,l.useRef)(),{children:n,className:r,disabled:a,disabledClassName:u,focus:o,id:c,selected:s,selectedClassName:d,tabIndex:f,tabRef:p,...b}={...k,...e};return(0,l.useEffect)(()=>{s&&o&&t.current.focus()},[s,o]),l.createElement("li",Object.assign({},b,{className:i(r,{[d]:s,[u]:a}),ref:e=>{t.current=e,p&&p(e)},role:"tab",id:`tab${c}`,"aria-selected":s?"true":"false","aria-disabled":a?"true":"false","aria-controls":`panel${c}`,tabIndex:f||(s?"0":null),"data-rttab":!0}),n)};R.propTypes={},R.tabsRole="Tab";var A=R;let $="react-tabs__tab-panel",x={className:$,forceRender:!1,selectedClassName:`${$}--selected`},O=e=>{let{children:t,className:n,forceRender:r,id:a,selected:u,selectedClassName:o,...c}={...x,...e};return l.createElement("div",Object.assign({},c,{className:i(n,{[o]:u}),role:"tabpanel",id:`panel${a}`,"aria-labelledby":`tab${a}`}),r||u?t:null)};O.tabsRole="TabPanel",O.propTypes={};var I=O}},function(e){e.O(0,[5675,4019,9774,2888,179],function(){return e(e.s=14234)}),_N_E=e.O()}]);