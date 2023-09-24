"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9338],{59786:function(e,l,s){s.r(l);var t=s(85893),d=s(67294);l.default=()=>{var e;let[l,s]=(0,d.useState)("all"),c=e=>{s(e)},n=[{label:"All",value:"all"},{label:"Details",value:"details"},{label:"Invoice",value:"invoice"},{label:"Confirm",value:"confirm"},{label:"Cancel",value:"cancel"}];return(0,t.jsxs)("div",{className:"dropdown js-dropdown js-actions-1-active",children:[(0,t.jsxs)("div",{className:"dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5","data-bs-toggle":"dropdown","data-bs-auto-close":"true","aria-expanded":"false","data-bs-offset":"0,10",children:[(0,t.jsx)("span",{className:"js-dropdown-title",children:"all"===l?"All":(null===(e=n.find(e=>e.value===l))||void 0===e?void 0:e.label)||"Actions"}),(0,t.jsx)("i",{className:"icon icon-chevron-sm-down text-7 ml-10"})]}),(0,t.jsx)("div",{className:"toggle-element -dropdown-2 js-click-dropdown dropdown-menu",children:(0,t.jsx)("div",{className:"text-14 fw-500 js-dropdown-list",children:n.map(e=>(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:"d-block js-dropdown-link ".concat(l===e.value?"text-blue-1":""),onClick:()=>c(e.value),children:e.label})},e.value))})})]})}},49338:function(e,l,s){s.r(l);var t=s(85893),d=s(67294),c=s(95744),n=s(59786);l.default=()=>{let[e,l]=(0,d.useState)(0),s=e=>{l(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"tabs -underline-2 js-tabs",children:[(0,t.jsx)("div",{className:"tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls",children:["All Booking","Completed","Processing","Confirmed","Cancelled","Paid","Unpaid","Partial Payment"].map((l,d)=>(0,t.jsx)("div",{className:"col-auto",children:(0,t.jsx)("button",{className:"tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ".concat(e===d?"is-tab-el-active":""),onClick:()=>s(d),children:l})},d))}),(0,t.jsx)("div",{className:"tabs__content pt-30 js-tabs-content",children:(0,t.jsx)("div",{className:"tabs__pane -tab-item-1 is-tab-el-active",children:(0,t.jsx)("div",{className:"overflow-scroll scroll-bar-1",children:(0,t.jsxs)("table",{className:"table-3 -border-bottom col-12",children:[(0,t.jsx)("thead",{className:"bg-light-2",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("th",{children:"Title"}),(0,t.jsx)("th",{children:"Order Date"}),(0,t.jsx)("th",{children:"Execution Time"}),(0,t.jsx)("th",{children:"Total"}),(0,t.jsx)("th",{children:"Paid"}),(0,t.jsx)("th",{children:"Remain"}),(0,t.jsx)("th",{children:"Status"}),(0,t.jsx)("th",{children:"Action"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hotel"}),(0,t.jsx)("td",{children:"The May Fair Hotel"}),(0,t.jsx)("td",{children:"04/04/2022"}),(0,t.jsxs)("td",{className:"lh-16",children:["Check in : 05/14/2022",(0,t.jsx)("br",{}),"Check out : 05/29/2022"]}),(0,t.jsx)("td",{className:"fw-500",children:"$130"}),(0,t.jsx)("td",{children:"$0"}),(0,t.jsx)("td",{children:"$35"}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3",children:"Pending"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.default,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hotel"}),(0,t.jsx)("td",{children:"The May Fair Hotel"}),(0,t.jsx)("td",{children:"04/04/2022"}),(0,t.jsxs)("td",{className:"lh-16",children:["Check in : 05/14/2022",(0,t.jsx)("br",{}),"Check out : 05/29/2022"]}),(0,t.jsx)("td",{className:"fw-500",children:"$130"}),(0,t.jsx)("td",{children:"$0"}),(0,t.jsx)("td",{children:"$35"}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.default,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hotel"}),(0,t.jsx)("td",{children:"The May Fair Hotel"}),(0,t.jsx)("td",{children:"04/04/2022"}),(0,t.jsxs)("td",{className:"lh-16",children:["Check in : 05/14/2022",(0,t.jsx)("br",{}),"Check out : 05/29/2022"]}),(0,t.jsx)("td",{className:"fw-500",children:"$130"}),(0,t.jsx)("td",{children:"$0"}),(0,t.jsx)("td",{children:"$35"}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2",children:"Rejected"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.default,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hotel"}),(0,t.jsx)("td",{children:"The May Fair Hotel"}),(0,t.jsx)("td",{children:"04/04/2022"}),(0,t.jsxs)("td",{className:"lh-16",children:["Check in : 05/14/2022",(0,t.jsx)("br",{}),"Check out : 05/29/2022"]}),(0,t.jsx)("td",{className:"fw-500",children:"$130"}),(0,t.jsx)("td",{children:"$0"}),(0,t.jsx)("td",{children:"$35"}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.default,{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Hotel"}),(0,t.jsx)("td",{children:"The May Fair Hotel"}),(0,t.jsx)("td",{children:"04/04/2022"}),(0,t.jsxs)("td",{className:"lh-16",children:["Check in : 05/14/2022",(0,t.jsx)("br",{}),"Check out : 05/29/2022"]}),(0,t.jsx)("td",{className:"fw-500",children:"$130"}),(0,t.jsx)("td",{children:"$0"}),(0,t.jsx)("td",{children:"$35"}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1",children:"Confirmed"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.default,{})})]})]})]})})})})]}),(0,t.jsx)(c.default,{})]})}},95744:function(e,l,s){s.r(l);var t=s(85893),d=s(67294);l.default=()=>{let[e,l]=(0,d.useState)(1),s=e=>{l(e)},c=function(e){let l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,t.jsx)("div",{className:"col-auto",children:(0,t.jsx)("div",{className:"size-40 flex-center rounded-full cursor-pointer ".concat(l?"bg-dark-1 text-white":""),onClick:()=>s(e),children:e})},e)},n=()=>{let l=[];for(let e=1;e<=5;e++)l.push(e);let s=l.map(l=>c(l,l===e));return s};return(0,t.jsx)("div",{className:"border-top-light mt-30 pt-30",children:(0,t.jsxs)("div",{className:"row x-gap-10 y-gap-20 justify-between md:justify-center",children:[(0,t.jsx)("div",{className:"col-auto md:order-1",children:(0,t.jsx)("button",{className:"button -blue-1 size-40 rounded-full border-light",children:(0,t.jsx)("i",{className:"icon-chevron-left text-12"})})}),(0,t.jsxs)("div",{className:"col-md-auto md:order-3",children:[(0,t.jsxs)("div",{className:"row x-gap-20 y-gap-20 items-center md:d-none",children:[n(),(0,t.jsx)("div",{className:"col-auto",children:(0,t.jsx)("div",{className:"size-40 flex-center rounded-full",children:"..."})}),(0,t.jsx)("div",{className:"col-auto",children:(0,t.jsx)("div",{className:"size-40 flex-center rounded-full",children:"20"})})]}),(0,t.jsx)("div",{className:"row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex",children:n()})]}),(0,t.jsx)("div",{className:"col-auto md:order-2",children:(0,t.jsx)("button",{className:"button -blue-1 size-40 rounded-full border-light",children:(0,t.jsx)("i",{className:"icon-chevron-right text-12"})})})]})})}}}]);