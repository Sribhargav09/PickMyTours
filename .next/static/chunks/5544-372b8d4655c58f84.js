(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5544],{6855:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(41664);var l=n(17734);n(25675);var s=n(11163);n(94660);var a=n(86648),c=e=>{let{style:t=""}=e,n=(0,s.useRouter)();return(0,r.jsx)("nav",{className:"menu js-navList",children:(0,r.jsx)("ul",{className:"menu__nav ".concat(t," -is-active"),children:(0,r.jsx)("li",{className:"".concat((0,a.LK)(l.YW,n.asPath)?"current":""),children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("span",{className:"mr-10",children:"Home"})})})})})}},15824:function(e,t,n){"use strict";var r=n(85893),l=n(25675),s=n.n(l),a=n(41664),c=n.n(a),i=n(67294),o=n(6855),d=n(87633);t.Z=()=>{let[e,t]=(0,i.useState)(!1),[n,l]=(0,i.useState)(!1),a=()=>{window.scrollY>=10?t(!0):t(!1)};return(0,i.useEffect)(()=>{window.addEventListener("scroll",a);let e=document.querySelector("body");n?e.classList.add("-is-sidebar-open"):e.classList.remove("-is-sidebar-open")},[n]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:"header -dashboard ".concat(e?"is-sticky bg-white":""),children:(0,r.jsxs)("div",{className:"header__container px-30 sm:px-20",children:[(0,r.jsx)("div",{className:"-left-side",children:(0,r.jsx)(c(),{href:"/",className:"header-logo",children:(0,r.jsx)("img",{src:"/img/general/logo.png",alt:"logo icon"})})}),(0,r.jsxs)("div",{className:"row justify-between items-center pl-60 lg:pl-20",children:[(0,r.jsx)("div",{className:"col-auto",children:(0,r.jsxs)("div",{className:"d-flex items-center",children:[(0,r.jsx)("button",{className:"d-flex",onClick:()=>{l(!n)},children:(0,r.jsx)("i",{className:"icon-menu-2 text-20"})}),(0,r.jsxs)("div",{className:"single-field relative d-flex items-center md:d-none ml-30",children:[(0,r.jsx)("input",{className:"pl-50 border-light text-dark-1 h-50 rounded-8",type:"email",placeholder:"Search"}),(0,r.jsx)("button",{className:"absolute d-flex items-center h-full",children:(0,r.jsx)("i",{className:"icon-search text-20 px-15 text-dark-1"})})]})]})}),(0,r.jsx)("div",{className:"col-auto",children:(0,r.jsxs)("div",{className:"d-flex items-center",children:[(0,r.jsx)("div",{className:"header-menu",children:(0,r.jsx)("div",{className:"header-menu__content",children:(0,r.jsx)(o.Z,{style:"text-dark-1"})})}),(0,r.jsxs)("div",{className:"row items-center x-gap-5 y-gap-20 pl-20 lg:d-none",children:[(0,r.jsx)("div",{className:"col-auto",children:(0,r.jsx)("button",{className:"button -blue-1-05 size-50 rounded-22 flex-center",children:(0,r.jsx)("i",{className:"icon-email-2 text-20"})})}),(0,r.jsx)("div",{className:"col-auto",children:(0,r.jsx)("button",{className:"button -blue-1-05 size-50 rounded-22 flex-center",children:(0,r.jsx)("i",{className:"icon-notification text-20"})})})]}),(0,r.jsx)("div",{className:"pl-15",children:(0,r.jsx)(s(),{width:50,height:50,src:"/img/avatars/3.png",alt:"image",className:"size-50 rounded-22 object-cover"})}),(0,r.jsxs)("div",{className:"d-none xl:d-flex x-gap-20 items-center pl-20",children:[(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"d-flex items-center icon-menu text-20","data-bs-toggle":"offcanvas","aria-controls":"mobile-sidebar_menu","data-bs-target":"#mobile-sidebar_menu"})}),(0,r.jsx)("div",{className:"offcanvas offcanvas-start  mobile_menu-contnet ",tabIndex:"-1",id:"mobile-sidebar_menu","aria-labelledby":"offcanvasMenuLabel","data-bs-scroll":"true",children:(0,r.jsx)(d.Z,{})})]})]})})]})]})})})}},9008:function(e,t,n){e.exports=n(73902)},11163:function(e,t,n){e.exports=n(31247)},94660:function(e,t,n){"use strict";let r;n.d(t,{OK:function(){return R},td:function(){return C},x4:function(){return L},mQ:function(){return g}});var l=n(67294);function s(e){return t=>!!t.type&&t.type.tabsRole===e}let a=s("Tab"),c=s("TabList"),i=s("TabPanel");function o(e,t){return l.Children.map(e,e=>null===e?null:a(e)||c(e)||i(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,l.cloneElement)(e,{...e.props,children:o(e.props.children,t)}):e)}var d=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(l&&(l+=" "),l+=r);else for(n in t)t[n]&&(l&&(l+=" "),l+=n)}return l}(e))&&(r&&(r+=" "),r+=t);return r};function u(e){let t=0;return!function e(t,n){return l.Children.forEach(t,t=>{null!==t&&(a(t)||i(t)?n(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(c(t)&&n(t),e(t.props.children,n)))})}(e,e=>{a(e)&&t++}),t}function f(e){return e&&"getAttribute"in e}function m(e){return f(e)&&e.getAttribute("data-rttab")}function b(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let p={className:"react-tabs",focus:!1},h=e=>{let t=(0,l.useRef)([]),n=(0,l.useRef)([]),s=(0,l.useRef)();function f(t,n){if(t<0||t>=v())return;let{onSelect:r,selectedIndex:l}=e;r(t,l,n)}function h(e){let t=v();for(let n=e+1;n<t;n++)if(!b(N(n)))return n;for(let t=0;t<e;t++)if(!b(N(t)))return t;return e}function x(e){let t=e;for(;t--;)if(!b(N(t)))return t;for(t=v();t-- >e;)if(!b(N(t)))return t;return e}function v(){let{children:t}=e;return u(t)}function N(e){return t.current[`tabs-${e}`]}function j(e){let t=e.target;do if(g(t)){if(b(t))return;let n=[].slice.call(t.parentNode.children).filter(m).indexOf(t);f(n,e);return}while(null!=(t=t.parentNode))}function g(e){if(!m(e))return!1;let t=e.parentElement;do{if(t===s.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:y,className:w,disabledTabClassName:C,domRef:E,focus:k,forceRenderTabPanel:_,onSelect:R,selectedIndex:T,selectedTabClassName:A,selectedTabPanelClassName:$,environment:L,disableUpDownKeys:I,disableLeftRightKeys:S,...O}={...p,...e};return l.createElement("div",Object.assign({},O,{className:d(w),onClick:j,onKeyDown:function(t){let{direction:n,disableUpDownKeys:r,disableLeftRightKeys:l}=e;if(g(t.target)){let{selectedIndex:s}=e,a=!1,c=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(a=!0,c=!1,j(t)),(l||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(l||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(s=function(){let e=v();for(;e--;)if(!b(N(e)))return e;return null}(),a=!0,c=!0):(36===t.keyCode||"Home"===t.code)&&(s=function(){let e=v();for(let t=0;t<e;t++)if(!b(N(t)))return t;return null}(),a=!0,c=!0):(s="rtl"===n?x(s):h(s),a=!0,c=!0):(s="rtl"===n?h(s):x(s),a=!0,c=!0),a&&t.preventDefault(),c&&f(s,t)}},ref:e=>{s.current=e,E&&E(e)},"data-rttabs":!0}),function(){let s=0,{children:d,disabledTabClassName:u,focus:f,forceRenderTabPanel:m,selectedIndex:b,selectedTabClassName:p,selectedTabPanelClassName:h,environment:x}=e;n.current=n.current||[];let j=n.current.length-v(),g=(0,l.useId)();for(;j++<0;)n.current.push(`${g}${n.current.length}`);return o(d,e=>{let d=e;if(c(e)){let s=0,c=!1;null==r&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{r=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){r=!1}}(x);let i=x||("undefined"!=typeof window?window:void 0);r&&i&&(c=l.Children.toArray(e.props.children).filter(a).some((e,t)=>i.document.activeElement===N(t))),d=(0,l.cloneElement)(e,{children:o(e.props.children,e=>{let r=`tabs-${s}`,a=b===s,i={tabRef:e=>{t.current[r]=e},id:n.current[s],selected:a,focus:a&&(f||c)};return p&&(i.selectedClassName=p),u&&(i.disabledClassName=u),s++,(0,l.cloneElement)(e,i)})})}else if(i(e)){let t={id:n.current[s],selected:b===s};m&&(t.forceRender=m),h&&(t.selectedClassName=h),s++,d=(0,l.cloneElement)(e,t)}return d})}())};h.propTypes={};let x={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},v=e=>null===e.selectedIndex?1:0,N=(e,t)=>{},j=e=>{let{children:t,defaultFocus:n,defaultIndex:r,focusTabOnClick:s,onSelect:a,...c}={...x,...e},[i,o]=(0,l.useState)(n),[d]=(0,l.useState)(v(c)),[f,m]=(0,l.useState)(1===d?r||0:null);if((0,l.useEffect)(()=>{o(!1)},[]),1===d){let e=u(t);(0,l.useEffect)(()=>{if(null!=f){let t=Math.max(0,e-1);m(Math.min(f,t))}},[e])}N(c,d);let b={...e,...c};return b.focus=i,b.onSelect=(e,t,n)=>{("function"!=typeof a||!1!==a(e,t,n))&&(s&&o(!0),1===d&&m(e))},null!=f&&(b.selectedIndex=f),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,l.createElement(h,b,t)};j.propTypes={},j.tabsRole="Tabs";var g=j;let y={className:"react-tabs__tab-list"},w=e=>{let{children:t,className:n,...r}={...y,...e};return l.createElement("ul",Object.assign({},r,{className:d(n),role:"tablist"}),t)};w.tabsRole="TabList",w.propTypes={};var C=w;let E="react-tabs__tab",k={className:E,disabledClassName:`${E}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${E}--selected`},_=e=>{let t=(0,l.useRef)(),{children:n,className:r,disabled:s,disabledClassName:a,focus:c,id:i,selected:o,selectedClassName:u,tabIndex:f,tabRef:m,...b}={...k,...e};return(0,l.useEffect)(()=>{o&&c&&t.current.focus()},[o,c]),l.createElement("li",Object.assign({},b,{className:d(r,{[u]:o,[a]:s}),ref:e=>{t.current=e,m&&m(e)},role:"tab",id:`tab${i}`,"aria-selected":o?"true":"false","aria-disabled":s?"true":"false","aria-controls":`panel${i}`,tabIndex:f||(o?"0":null),"data-rttab":!0}),n)};_.propTypes={},_.tabsRole="Tab";var R=_;let T="react-tabs__tab-panel",A={className:T,forceRender:!1,selectedClassName:`${T}--selected`},$=e=>{let{children:t,className:n,forceRender:r,id:s,selected:a,selectedClassName:c,...i}={...A,...e};return l.createElement("div",Object.assign({},i,{className:d(n,{[c]:a}),role:"tabpanel",id:`panel${s}`,"aria-labelledby":`tab${s}`}),r||a?t:null)};$.tabsRole="TabPanel",$.propTypes={};var L=$}}]);