(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9460],{52449:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendor-dashboard/offers",function(){return s(44886)}])},6855:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=s(85893),r=s(41664),l=s.n(r),n=s(17734);s(25675);var i=s(11163);s(50776);var d=s(86648),c=s(9473);s(94637);var o=e=>{let{style:t=""}=e;(0,c.v9)(e=>e.user.loginUser);let s=(0,c.v9)(e=>e.user.token),r=(0,i.useRouter)();return(0,a.jsx)("nav",{className:"menu js-navList",children:(0,a.jsxs)("ul",{className:"menu__nav ".concat(t," -is-active"),children:[(0,a.jsx)("li",{className:"".concat((0,d.LK)(n.YW,r.asPath)?"current":""),children:(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("span",{className:"mr-10",children:"Home"})})}),!s&&n.F0.map((e,t)=>(0,a.jsx)("li",{className:(0,d.H_)(e.routePath,r.asPath)?"current":"",children:(0,a.jsx)(l(),{href:e.routePath,children:e.name})},t)),s&&n.o9.map((e,t)=>(0,a.jsx)("li",{className:(0,d.H_)(e.routePath,r.asPath)?"current":"",children:(0,a.jsx)(l(),{href:e.routePath,children:e.name})},t))]})})}},15824:function(e,t,s){"use strict";var a=s(85893),r=s(25675),l=s.n(r),n=s(41664),i=s.n(n),d=s(67294),c=s(6855),o=s(87633);t.Z=()=>{let[e,t]=(0,d.useState)(!1),[s,r]=(0,d.useState)(!1),n=()=>{window.scrollY>=10?t(!0):t(!1)};return(0,d.useEffect)(()=>{window.addEventListener("scroll",n);let e=document.querySelector("body");s?e.classList.add("-is-sidebar-open"):e.classList.remove("-is-sidebar-open")},[s]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("header",{className:"header -dashboard ".concat(e?"is-sticky bg-white":""),children:(0,a.jsxs)("div",{className:"header__container px-30 sm:px-20",children:[(0,a.jsx)("div",{className:"-left-side",children:(0,a.jsx)(i(),{href:"/",className:"header-logo",children:(0,a.jsx)("img",{src:"/img/general/logo.png",alt:"logo icon"})})}),(0,a.jsxs)("div",{className:"row justify-between items-center pl-60 lg:pl-20",children:[(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)("div",{className:"d-flex items-center",children:[(0,a.jsx)("button",{className:"d-flex",onClick:()=>{r(!s)},children:(0,a.jsx)("i",{className:"icon-menu-2 text-20"})}),(0,a.jsxs)("div",{className:"single-field relative d-flex items-center md:d-none ml-30",children:[(0,a.jsx)("input",{className:"pl-50 border-light text-dark-1 h-50 rounded-8",type:"email",placeholder:"Search"}),(0,a.jsx)("button",{className:"absolute d-flex items-center h-full",children:(0,a.jsx)("i",{className:"icon-search text-20 px-15 text-dark-1"})})]})]})}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)("div",{className:"d-flex items-center",children:[(0,a.jsx)("div",{className:"header-menu",children:(0,a.jsx)("div",{className:"header-menu__content",children:(0,a.jsx)(c.Z,{style:"text-dark-1"})})}),(0,a.jsxs)("div",{className:"row items-center x-gap-5 y-gap-20 pl-20 lg:d-none",children:[(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)("button",{className:"button -blue-1-05 size-50 rounded-22 flex-center",children:(0,a.jsx)("i",{className:"icon-email-2 text-20"})})}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)("button",{className:"button -blue-1-05 size-50 rounded-22 flex-center",children:(0,a.jsx)("i",{className:"icon-notification text-20"})})})]}),(0,a.jsx)("div",{className:"pl-15",children:(0,a.jsx)(l(),{width:50,height:50,src:"/img/avatars/3.png",alt:"image",className:"size-50 rounded-22 object-cover"})}),(0,a.jsxs)("div",{className:"d-none xl:d-flex x-gap-20 items-center pl-20",children:[(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"d-flex items-center icon-menu text-20","data-bs-toggle":"offcanvas","aria-controls":"mobile-sidebar_menu","data-bs-target":"#mobile-sidebar_menu"})}),(0,a.jsx)("div",{className:"offcanvas offcanvas-start  mobile_menu-contnet ",tabIndex:"-1",id:"mobile-sidebar_menu","aria-labelledby":"offcanvasMenuLabel","data-bs-scroll":"true",children:(0,a.jsx)(o.Z,{})})]})]})})]})]})})})}},14528:function(e,t,s){"use strict";s.r(t);var a=s(85893);s(67294),t.default=function(){return(0,a.jsx)("footer",{className:"footer -dashboard mt-60",children:(0,a.jsxs)("div",{className:"footer__row row y-gap-10 items-center justify-between",children:[(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)("div",{className:"row y-gap-20 items-center",children:[(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)("div",{className:"text-14 lh-14 mr-30",children:["\xa9 ",new Date().getFullYear()," pickmytours LLC All rights reserved."]})}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)("div",{className:"row x-gap-20 y-gap-10 items-center text-14",children:[{label:"Privacy",url:"#"},{label:"Terms",url:"#"},{label:"Site Map",url:"#"}].map((e,t)=>(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsx)("a",{href:e.url,className:"text-13 lh-1",children:e.label})},t))})})]})}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)("div",{className:"d-flex x-gap-5 y-gap-5 items-center",children:[(0,a.jsx)("button",{className:"text-14 fw-500 underline",children:"English (US)"}),(0,a.jsx)("button",{className:"text-14 fw-500 underline",children:"USD"})]})})]})})}},78362:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(25675),l=s.n(r);t.default=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"sidebar -dashboard",id:"vendorSidebarMenu",children:[(0,a.jsx)("div",{className:"sidebar__item ",children:(0,a.jsxs)("a",{href:"db-dashboard.html",className:"sidebar__button d-flex items-center text-15 lh-1 fw-500",children:[(0,a.jsx)(l(),{width:20,height:20,src:"/img/dashboard/sidebar/compass.svg",alt:"image",className:"mr-15"}),"Dashboard"]})}),(0,a.jsx)("div",{className:"sidebar__item ",children:(0,a.jsxs)("a",{href:"#",className:"sidebar__button d-flex items-center text-15 lh-1 fw-500",children:[(0,a.jsx)(l(),{width:20,height:20,src:"/img/dashboard/sidebar/booking.svg",alt:"image",className:"mr-15"}),"Booking Manager"]})}),[{icon:"/img/dashboard/sidebar/map.svg",title:"Manage Users",links:[{title:"All Users",href:"/vendor-dashboard/users"},{title:"Add User",href:"/vendor-dashboard/add-user"},{title:"Recovery",href:"#"}]},{icon:"/img/dashboard/sidebar/map.svg",title:"Manage Location",links:[{title:"All locations",href:"/vendor-dashboard/locations"},{title:"Add location",href:"/vendor-dashboard/add-location"},{title:"Recovery",href:"#"}]},{icon:"/img/dashboard/sidebar/map.svg",title:"Manage Offer",links:[{title:"All Offers",href:"/vendor-dashboard/offers"},{title:"Add Offer",href:"/vendor-dashboard/add-offer"},{title:"Recovery",href:"#"}]},{icon:"/img/dashboard/sidebar/map.svg",title:"Manage Tour",links:[{title:"All Tour",href:"/vendor-dashboard/tours"},{title:"Add Tour",href:"/vendor-dashboard/add-tour"},{title:"Recovery",href:"#"}]},{icon:"/img/dashboard/sidebar/map.svg",title:"Manage Tour Types",links:[{title:"All Tour Types",href:"/vendor-dashboard/tour-types"},{title:"Add Tour Type",href:"/vendor-dashboard/add-tour-type"},{title:"Recovery",href:"#"}]},{icon:"/img/dashboard/sidebar/map.svg",title:"Manage Testinomials",links:[{title:"All Testinomials",href:"/vendor-dashboard/testinomials"},{title:"Add Testinomial",href:"/vendor-dashboard/add-testinomial"},{title:"Recovery",href:"#"}]}].map((e,t)=>(0,a.jsx)("div",{className:"sidebar__item",children:(0,a.jsx)("div",{className:"accordion -db-sidebar js-accordion",children:(0,a.jsxs)("div",{className:"accordion__item",children:[(0,a.jsx)("div",{className:"accordion__button","data-bs-toggle":"collapse","data-bs-target":"#sidebarItem".concat(t),children:(0,a.jsxs)("div",{className:"sidebar__button col-12 d-flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"d-flex items-center text-15 lh-1 fw-500",children:[(0,a.jsx)(l(),{width:20,height:20,src:e.icon,alt:"image",className:"mr-10"}),e.title]}),(0,a.jsx)("div",{className:"icon-chevron-sm-down text-7"})]})}),(0,a.jsx)("div",{id:"sidebarItem".concat(t),className:"collapse","data-bs-parent":"#vendorSidebarMenu",children:(0,a.jsx)("ul",{className:"list-disc pt-15 pb-5 pl-40",children:e.links.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.href,className:"text-15",children:e.title})},t))})})]})})},t)),(0,a.jsx)("div",{className:"sidebar__item ",children:(0,a.jsxs)("a",{href:"#",className:"sidebar__button d-flex items-center text-15 lh-1 fw-500",children:[(0,a.jsx)(l(),{width:20,height:20,src:"/img/dashboard/sidebar/log-out.svg",alt:"image",className:"mr-15"}),"Logout"]})})]})})},44886:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(58274),l=s(78362),n=s(15824),i=s(14528),d=s(41664),c=s.n(d),o=s(67294),u=s(19650),h=s(45921);t.default=()=>{let[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{h.Z.getAll().then(e=>{t(e.data),console.log(e.data)}).catch(e=>{console.log(e)})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{pageTitle:"Vendor Hotels"}),(0,a.jsx)("div",{className:"header-margin"}),(0,a.jsx)(n.Z,{}),(0,a.jsxs)("div",{className:"dashboard",children:[(0,a.jsx)("div",{className:"dashboard__sidebar bg-white scroll-bar-1",children:(0,a.jsx)(l.default,{})}),(0,a.jsx)("div",{className:"dashboard__main",children:(0,a.jsxs)("div",{className:"dashboard__content bg-light-2",children:[(0,a.jsxs)("div",{className:"row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32",children:[(0,a.jsxs)("div",{className:"col-auto",children:[(0,a.jsx)("h1",{className:"text-30 lh-14 fw-600",children:"All Offers"}),(0,a.jsx)("div",{className:"text-15 text-light-1",children:"All offers infomration here."})]}),(0,a.jsx)("div",{className:"col-auto",children:(0,a.jsxs)(c(),{href:"/vendor-dashboard/add-offer",className:"button h-50 px-24 -dark-1 bg-blue-1 text-white",children:["Add Offer ",(0,a.jsx)("div",{className:"icon-arrow-top-right ml-15"})]})})]}),(0,a.jsx)("div",{className:"py-30 px-30 rounded-4 bg-white shadow-3",children:(0,a.jsx)(u.default,{offersData:e.data})}),(0,a.jsx)(i.default,{})]})})]})]})}},9008:function(e,t,s){e.exports=s(73902)},50776:function(e,t,s){"use strict";let a;s.d(t,{OK:function(){return A},td:function(){return y},x4:function(){return S},mQ:function(){return g}});var r=s(67294);function l(e){return t=>!!t.type&&t.type.tabsRole===e}let n=l("Tab"),i=l("TabList"),d=l("TabPanel");function c(e,t){return r.Children.map(e,e=>null===e?null:n(e)||i(e)||d(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,{...e.props,children:c(e.props.children,t)}):e)}var o=s(90512);function u(e){let t=0;return!function e(t,s){return r.Children.forEach(t,t=>{null!==t&&(n(t)||d(t)?s(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(i(t)&&s(t),e(t.props.children,s)))})}(e,e=>{n(e)&&t++}),t}function h(e){return e&&"getAttribute"in e}function m(e){return h(e)&&e.getAttribute("data-rttab")}function f(e){return h(e)&&"true"===e.getAttribute("aria-disabled")}let b={className:"react-tabs",focus:!1},x=e=>{let t=(0,r.useRef)([]),s=(0,r.useRef)([]),l=(0,r.useRef)();function h(t,s){if(t<0||t>=v())return;let{onSelect:a,selectedIndex:r}=e;a(t,r,s)}function x(e){let t=v();for(let s=e+1;s<t;s++)if(!f(j(s)))return s;for(let t=0;t<e;t++)if(!f(j(t)))return t;return e}function p(e){let t=e;for(;t--;)if(!f(j(t)))return t;for(t=v();t-- >e;)if(!f(j(t)))return t;return e}function v(){let{children:t}=e;return u(t)}function j(e){return t.current[`tabs-${e}`]}function N(e){let t=e.target;do if(g(t)){if(f(t))return;let s=[].slice.call(t.parentNode.children).filter(m).indexOf(t);h(s,e);return}while(null!=(t=t.parentNode))}function g(e){if(!m(e))return!1;let t=e.parentElement;do{if(t===l.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:w,className:_,disabledTabClassName:y,domRef:k,focus:T,forceRenderTabPanel:E,onSelect:A,selectedIndex:C,selectedTabClassName:R,selectedTabPanelClassName:O,environment:S,disableUpDownKeys:L,disableLeftRightKeys:M,...P}={...b,...e};return r.createElement("div",Object.assign({},P,{className:(0,o.Z)(_),onClick:N,onKeyDown:function(t){let{direction:s,disableUpDownKeys:a,disableLeftRightKeys:r}=e;if(g(t.target)){let{selectedIndex:l}=e,n=!1,i=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(n=!0,i=!1,N(t)),(r||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(a||38!==t.keyCode&&"ArrowUp"!==t.code)?(r||39!==t.keyCode&&"ArrowRight"!==t.code)&&(a||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(l=function(){let e=v();for(;e--;)if(!f(j(e)))return e;return null}(),n=!0,i=!0):(36===t.keyCode||"Home"===t.code)&&(l=function(){let e=v();for(let t=0;t<e;t++)if(!f(j(t)))return t;return null}(),n=!0,i=!0):(l="rtl"===s?p(l):x(l),n=!0,i=!0):(l="rtl"===s?x(l):p(l),n=!0,i=!0),n&&t.preventDefault(),i&&h(l,t)}},ref:e=>{l.current=e,k&&k(e)},"data-rttabs":!0}),function(){let l=0,{children:o,disabledTabClassName:u,focus:h,forceRenderTabPanel:m,selectedIndex:f,selectedTabClassName:b,selectedTabPanelClassName:x,environment:p}=e;s.current=s.current||[];let N=s.current.length-v(),g=(0,r.useId)();for(;N++<0;)s.current.push(`${g}${s.current.length}`);return c(o,e=>{let o=e;if(i(e)){let l=0,i=!1;null==a&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{a=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){a=!1}}(p);let d=p||("undefined"!=typeof window?window:void 0);a&&d&&(i=r.Children.toArray(e.props.children).filter(n).some((e,t)=>d.document.activeElement===j(t))),o=(0,r.cloneElement)(e,{children:c(e.props.children,e=>{let a=`tabs-${l}`,n=f===l,d={tabRef:e=>{t.current[a]=e},id:s.current[l],selected:n,focus:n&&(h||i)};return b&&(d.selectedClassName=b),u&&(d.disabledClassName=u),l++,(0,r.cloneElement)(e,d)})})}else if(d(e)){let t={id:s.current[l],selected:f===l};m&&(t.forceRender=m),x&&(t.selectedClassName=x),l++,o=(0,r.cloneElement)(e,t)}return o})}())};x.propTypes={};let p={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},v=e=>null===e.selectedIndex?1:0,j=(e,t)=>{},N=e=>{let{children:t,defaultFocus:s,defaultIndex:a,focusTabOnClick:l,onSelect:n,...i}={...p,...e},[d,c]=(0,r.useState)(s),[o]=(0,r.useState)(v(i)),[h,m]=(0,r.useState)(1===o?a||0:null);if((0,r.useEffect)(()=>{c(!1)},[]),1===o){let e=u(t);(0,r.useEffect)(()=>{if(null!=h){let t=Math.max(0,e-1);m(Math.min(h,t))}},[e])}j(i,o);let f={...e,...i};return f.focus=d,f.onSelect=(e,t,s)=>{("function"!=typeof n||!1!==n(e,t,s))&&(l&&c(!0),1===o&&m(e))},null!=h&&(f.selectedIndex=h),delete f.defaultFocus,delete f.defaultIndex,delete f.focusTabOnClick,r.createElement(x,f,t)};N.propTypes={},N.tabsRole="Tabs";var g=N;let w={className:"react-tabs__tab-list"},_=e=>{let{children:t,className:s,...a}={...w,...e};return r.createElement("ul",Object.assign({},a,{className:(0,o.Z)(s),role:"tablist"}),t)};_.tabsRole="TabList",_.propTypes={};var y=_;let k="react-tabs__tab",T={className:k,disabledClassName:`${k}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${k}--selected`},E=e=>{let t=(0,r.useRef)(),{children:s,className:a,disabled:l,disabledClassName:n,focus:i,id:d,selected:c,selectedClassName:u,tabIndex:h,tabRef:m,...f}={...T,...e};return(0,r.useEffect)(()=>{c&&i&&t.current.focus()},[c,i]),r.createElement("li",Object.assign({},f,{className:(0,o.Z)(a,{[u]:c,[n]:l}),ref:e=>{t.current=e,m&&m(e)},role:"tab",id:`tab${d}`,"aria-selected":c?"true":"false","aria-disabled":l?"true":"false","aria-controls":`panel${d}`,tabIndex:h||(c?"0":null),"data-rttab":!0}),s)};E.propTypes={},E.tabsRole="Tab";var A=E;let C="react-tabs__tab-panel",R={className:C,forceRender:!1,selectedClassName:`${C}--selected`},O=e=>{let{children:t,className:s,forceRender:a,id:l,selected:n,selectedClassName:i,...d}={...R,...e};return r.createElement("div",Object.assign({},d,{className:(0,o.Z)(s,{[i]:n}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),a||n?t:null)};O.tabsRole="TabPanel",O.propTypes={};var S=O}},function(e){e.O(0,[4114,5675,1664,4827,252,3726,3600,46,594,2096,9650,9774,2888,179],function(){return e(e.s=52449)}),_N_E=e.O()}]);