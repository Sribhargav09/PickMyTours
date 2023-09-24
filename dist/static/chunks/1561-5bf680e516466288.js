"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1561],{99051:function(e,s,t){var c=t(85893),a=t(67294),n=t(9473),l=t(77872),i=t(6154);s.Z=e=>{let{textClass:s}=e,t=(0,n.v9)(e=>e.currency.selectedCurrency),r=(0,n.I0)(),[d,o]=(0,a.useState)(!1),m=()=>o(e=>!e),x=(0,n.v9)(e=>e.currency.currencies),[h,u]=(0,a.useState)(t),j=e=>{var s,t;o(!1);let c=null===(s=e.currency)||void 0===s?void 0:s.toLowerCase(),a=null===(t=h.currency)||void 0===t?void 0:t.toLowerCase();i.Z.get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat(a,".json")).then(s=>{console.log(s);let t={...e,rate:s.data[a][c]};r((0,l.sy)(t))})};return(0,a.useEffect)(()=>{u(t)},[t]),(0,a.useEffect)(()=>{i.Z.get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat("inr",".json")).then(e=>{console.log(e);let s={...h,rate:e.data.inr.inr};r((0,l.sy)(s))})},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"col-auto",children:(0,c.jsxs)("button",{className:"d-flex items-center text-14 ".concat(s),onClick:m,children:[(0,c.jsx)("span",{className:"js-currencyMenu-mainTitle",children:h.currency}),(0,c.jsx)("i",{className:"icon-chevron-sm-down text-7 ml-10"})]})}),(0,c.jsxs)("div",{className:"currencyMenu js-currencyMenu ".concat(d?"":"is-hidden"),children:[(0,c.jsx)("div",{className:"currencyMenu__bg",onClick:m}),(0,c.jsxs)("div",{className:"currencyMenu__content bg-white rounded-4",children:[(0,c.jsxs)("div",{className:"d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light",children:[(0,c.jsx)("div",{className:"text-20 fw-500 lh-15",children:"Select your currency"}),(0,c.jsx)("button",{className:"pointer",onClick:m,children:(0,c.jsx)("i",{className:"icon-close"})})]}),(0,c.jsx)("ul",{className:"modalGrid px-30 py-30 sm:px-15 sm:py-15",children:x.map(e=>(0,c.jsx)("li",{className:"modalGrid__item js-item ".concat(h.currency===e.currency?"active":""),onClick:()=>j(e),children:(0,c.jsxs)("div",{className:"py-10 px-15 sm:px-5 sm:py-5",children:[(0,c.jsx)("div",{className:"text-15 lh-15 fw-500 text-dark-1",children:e.name}),(0,c.jsxs)("div",{className:"text-14 lh-15 mt-5",children:[(0,c.jsx)("span",{className:"js-title",children:e.currency}),"-"," ",e.symbol]})]})},e.id))})]})]})]})}},73433:function(e,s,t){var c=t(85893),a=t(25675),n=t.n(a),l=t(67294),i=t(9473),r=t(2899),d=t(6154);s.Z=e=>{let{textClass:s}=e,t=(0,i.v9)(e=>e.language.selectedLanguage),a=(0,i.I0)(),[o,m]=(0,l.useState)(!1),x=()=>m(e=>!e),h=(0,i.v9)(e=>e.language.languagies),[u,j]=(0,l.useState)(t),g=e=>{j(e),m(!1),a((0,r.D0)(e))};return(0,l.useEffect)(()=>{d.Z.get("https://ipapi.co/json/").then(e=>{let s=e.data;h.map(e=>{let t=e.country;t==s.country_name&&a((0,r.D0)(e))})}).catch(e=>{console.log(e)})},[]),(0,l.useEffect)(()=>{j(t)},[t]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"col-auto",children:(0,c.jsxs)("button",{className:"d-flex items-center text-14 ".concat(s),onClick:x,children:[(0,c.jsx)(n(),{width:20,height:20,src:"/img/general/globe.svg",alt:"image",className:"rounded-full mr-10"}),(0,c.jsxs)("span",{className:"js-language-mainTitle",children:[" ",u&&u.language]}),(0,c.jsx)("i",{className:"icon-chevron-sm-down text-7 ml-15"})]})}),(0,c.jsxs)("div",{className:"langMenu js-langMenu ".concat(o?"":"is-hidden"),children:[(0,c.jsx)("div",{className:"currencyMenu__bg",onClick:x}),(0,c.jsxs)("div",{className:"langMenu__content bg-white rounded-4",children:[(0,c.jsxs)("div",{className:"d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light",children:[(0,c.jsx)("div",{className:"text-20 fw-500 lh-15",children:"Select your language"}),(0,c.jsx)("button",{className:"pointer",onClick:x,children:(0,c.jsx)("i",{className:"icon-close"})})]}),(0,c.jsx)("ul",{className:"modalGrid px-30 py-30 sm:px-15 sm:py-15",children:h.map(e=>(0,c.jsx)("li",{className:"modalGrid__item js-item ".concat(u&&u.country===e.country?"active":""),onClick:()=>g(e),children:(0,c.jsxs)("div",{className:"py-10 px-15 sm:px-5 sm:py-5",children:[(0,c.jsx)("div",{className:"text-15 lh-15 fw-500 text-dark-1",children:e.language}),(0,c.jsx)("div",{className:"text-14 lh-15 mt-5 js-title",children:e.country})]})},e.id))})]})]})]})}},51561:function(e,s,t){var c=t(85893),a=t(41664),n=t.n(a),l=t(67294),i=t(6855),r=t(99051),d=t(73433),o=t(87633);s.Z=()=>{let[e,s]=(0,l.useState)(!1),t=()=>{window.scrollY>=10?s(!0):s(!1)};return(0,l.useEffect)(()=>{window.addEventListener("scroll",t)},[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("header",{className:"header bg-dark-3 ".concat(e?"is-sticky":""),children:(0,c.jsx)("div",{className:"header__container px-30 sm:px-20",children:(0,c.jsxs)("div",{className:"row justify-between items-center",children:[(0,c.jsx)("div",{className:"col-auto",children:(0,c.jsxs)("div",{className:"d-flex items-center",children:[(0,c.jsx)(n(),{href:"/",className:"header-logo mr-20",children:(0,c.jsx)("img",{src:"/img/general/logo.png",alt:"logo icon"})}),(0,c.jsx)("div",{className:"header-menu",children:(0,c.jsx)("div",{className:"header-menu__content",children:(0,c.jsx)(i.Z,{style:"text-white"})})})]})}),(0,c.jsx)("div",{className:"col-auto",children:(0,c.jsxs)("div",{className:"d-flex items-center",children:[(0,c.jsxs)("div",{className:"row x-gap-20 items-center",children:[(0,c.jsx)(r.Z,{textClass:"text-white"}),(0,c.jsx)("div",{className:"col-auto",children:(0,c.jsx)("div",{className:"w-1 h-20 bg-white-20"})}),(0,c.jsx)(d.Z,{textClass:"text-white"})]}),(0,c.jsxs)("div",{className:"d-flex items-center ml-20 is-menu-opened-hide md:d-none",children:[(0,c.jsx)(n(),{href:"/others-pages/login",className:"button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1",children:"Become An Expert"}),(0,c.jsx)(n(),{href:"/others-pages/signup",className:"button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20",children:"Sign In / Register"})]}),(0,c.jsxs)("div",{className:"d-none xl:d-flex x-gap-20 items-center pl-30 text-white",children:[(0,c.jsx)("div",{children:(0,c.jsx)(n(),{href:"/others-pages/login",className:"d-flex items-center icon-user text-inherit text-22"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{className:"d-flex items-center icon-menu text-inherit text-20","data-bs-toggle":"offcanvas","aria-controls":"mobile-sidebar_menu","data-bs-target":"#mobile-sidebar_menu"}),(0,c.jsx)("div",{className:"offcanvas offcanvas-start  mobile_menu-contnet",tabIndex:"-1",id:"mobile-sidebar_menu","aria-labelledby":"offcanvasMenuLabel","data-bs-scroll":"true",children:(0,c.jsx)(o.Z,{})})]})]})]})})]})})})})}}}]);