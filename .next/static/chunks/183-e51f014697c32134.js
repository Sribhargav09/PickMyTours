"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{95744:function(e,s,t){t.r(s);var l=t(85893),c=t(67294);s.default=()=>{let[e,s]=(0,c.useState)(1),t=e=>{s(e)},i=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("div",{className:"size-40 flex-center rounded-full cursor-pointer ".concat(s?"bg-dark-1 text-white":""),onClick:()=>t(e),children:e})},e)},d=()=>{let s=[];for(let e=1;e<=5;e++)s.push(e);let t=s.map(s=>i(s,s===e));return t};return(0,l.jsx)("div",{className:"border-top-light mt-30 pt-30",children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-20 justify-between md:justify-center",children:[(0,l.jsx)("div",{className:"col-auto md:order-1",children:(0,l.jsx)("button",{className:"button -blue-1 size-40 rounded-full border-light",children:(0,l.jsx)("i",{className:"icon-chevron-left text-12"})})}),(0,l.jsxs)("div",{className:"col-md-auto md:order-3",children:[(0,l.jsxs)("div",{className:"row x-gap-20 y-gap-20 items-center md:d-none",children:[d(),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("div",{className:"size-40 flex-center rounded-full",children:"..."})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("div",{className:"size-40 flex-center rounded-full",children:"20"})})]}),(0,l.jsx)("div",{className:"row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex",children:d()})]}),(0,l.jsx)("div",{className:"col-auto md:order-2",children:(0,l.jsx)("button",{className:"button -blue-1 size-40 rounded-full border-light",children:(0,l.jsx)("i",{className:"icon-chevron-right text-12"})})})]})})}},35581:function(e,s,t){t.r(s);var l=t(85893),c=t(67294);s.default=()=>{var e;let[s,t]=(0,c.useState)("all"),i=e=>{t(e)},d=[{label:"All",value:"all"},{label:"Details",value:"details"},{label:"Invoice",value:"invoice"},{label:"Confirm",value:"confirm"},{label:"Cancel",value:"cancel"}];return(0,l.jsxs)("div",{className:"dropdown js-dropdown js-actions-1-active",children:[(0,l.jsxs)("div",{className:"dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5","data-bs-toggle":"dropdown","data-bs-auto-close":"true","aria-expanded":"false","data-bs-offset":"0,10",children:[(0,l.jsx)("span",{className:"js-dropdown-title",children:"all"===s?"All":(null===(e=d.find(e=>e.value===s))||void 0===e?void 0:e.label)||"Actions"}),(0,l.jsx)("i",{className:"icon icon-chevron-sm-down text-7 ml-10"})]}),(0,l.jsx)("div",{className:"toggle-element -dropdown-2 js-click-dropdown dropdown-menu",children:(0,l.jsx)("div",{className:"text-14 fw-500 js-dropdown-list",children:d.map(e=>(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:"d-block js-dropdown-link ".concat(s===e.value?"text-blue-1":""),onClick:()=>i(e.value),children:e.label})},e.value))})})]})}},50183:function(e,s,t){t.r(s);var l=t(85893),c=t(67294),i=t(95744);t(35581),s.default=()=>{let[e,s]=(0,c.useState)(0),t=e=>{s(e)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tabs -underline-2 js-tabs",children:[(0,l.jsx)("div",{className:"tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls",children:["All Booking","Completed","Processing","Confirmed","Cancelled","Paid","Unpaid","Partial Payment"].map((s,c)=>(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ".concat(e===c?"is-tab-el-active":""),onClick:()=>t(c),children:s})},c))}),(0,l.jsx)("div",{className:"tabs__content pt-30 js-tabs-content",children:(0,l.jsx)("div",{className:"tabs__pane -tab-item-1 is-tab-el-active",children:(0,l.jsx)("div",{className:"overflow-scroll scroll-bar-1",children:(0,l.jsxs)("table",{className:"table-4 -border-bottom col-12",children:[(0,l.jsx)("thead",{className:"bg-light-2",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Location"}),(0,l.jsx)("th",{children:"Author"}),(0,l.jsx)("th",{children:"Status"}),(0,l.jsx)("th",{children:"Reviews"}),(0,l.jsx)("th",{children:"Date"}),(0,l.jsx)("th",{children:"Action"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3",children:"Pending"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3",children:"Pending"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2",children:"Rejected"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"d-flex items-center",children:(0,l.jsxs)("div",{className:"form-checkbox ",children:[(0,l.jsx)("input",{type:"checkbox",name:"name"}),(0,l.jsx)("div",{className:"form-checkbox__mark",children:(0,l.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,l.jsx)("td",{className:"text-blue-1 fw-500",children:"Crowne Plaza Hotel"}),(0,l.jsx)("td",{children:"London"}),(0,l.jsx)("td",{children:"Ali Tufan"}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2",children:"Rejected"})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600",children:"4.8"})}),(0,l.jsx)("td",{children:"04/04/2022"}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"row x-gap-10 y-gap-10 items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-eye text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-edit text-16 text-light-1"})})}),(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("button",{className:"flex-center bg-light-2 rounded-4 size-35",children:(0,l.jsx)("i",{className:"icon-trash-2 text-16 text-light-1"})})})]})})]})]})]})})})})]}),(0,l.jsx)(i.default,{})]})}}}]);