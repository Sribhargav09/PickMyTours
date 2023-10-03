"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9650],{13088:function(e,t,l){var s=l(67294),c=l(594);t.Z=(0,c.Z)(s.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},9108:function(e,t,l){var s=l(67294),c=l(594);t.Z=(0,c.Z)(s.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},4063:function(e,t,l){var s=l(6154);t.Z=s.Z.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"multipart/form-data",Accept:"application/json"}})},95744:function(e,t,l){l.r(t);var s=l(85893),c=l(67294);t.default=()=>{let[e,t]=(0,c.useState)(1),l=e=>{t(e)},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("div",{className:"size-40 flex-center rounded-full cursor-pointer ".concat(t?"bg-dark-1 text-white":""),onClick:()=>l(e),children:e})},e)},n=()=>{let t=[];for(let e=1;e<=5;e++)t.push(e);let l=t.map(t=>a(t,t===e));return l};return(0,s.jsx)("div",{className:"border-top-light mt-30 pt-30",children:(0,s.jsxs)("div",{className:"row x-gap-10 y-gap-20 justify-between md:justify-center",children:[(0,s.jsx)("div",{className:"col-auto md:order-1",children:(0,s.jsx)("button",{className:"button -blue-1 size-40 rounded-full border-light",children:(0,s.jsx)("i",{className:"icon-chevron-left text-12"})})}),(0,s.jsxs)("div",{className:"col-md-auto md:order-3",children:[(0,s.jsxs)("div",{className:"row x-gap-20 y-gap-20 items-center md:d-none",children:[n(),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("div",{className:"size-40 flex-center rounded-full",children:"..."})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("div",{className:"size-40 flex-center rounded-full",children:"20"})})]}),(0,s.jsx)("div",{className:"row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex",children:n()})]}),(0,s.jsx)("div",{className:"col-auto md:order-2",children:(0,s.jsx)("button",{className:"button -blue-1 size-40 rounded-full border-light",children:(0,s.jsx)("i",{className:"icon-chevron-right text-12"})})})]})})}},69536:function(e,t,l){l.r(t);var s=l(85893),c=l(67294);t.default=()=>{var e;let[t,l]=(0,c.useState)("all"),a=e=>{l(e)},n=[{label:"All",value:"all"},{label:"Details",value:"details"},{label:"Invoice",value:"invoice"},{label:"Confirm",value:"confirm"},{label:"Cancel",value:"cancel"}];return(0,s.jsxs)("div",{className:"dropdown js-dropdown js-actions-1-active",children:[(0,s.jsxs)("div",{className:"dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5","data-bs-toggle":"dropdown","data-bs-auto-close":"true","aria-expanded":"false","data-bs-offset":"0,10",children:[(0,s.jsx)("span",{className:"js-dropdown-title",children:"all"===t?"All":(null===(e=n.find(e=>e.value===t))||void 0===e?void 0:e.label)||"Actions"}),(0,s.jsx)("i",{className:"icon icon-chevron-sm-down text-7 ml-10"})]}),(0,s.jsx)("div",{className:"toggle-element -dropdown-2 js-click-dropdown dropdown-menu",children:(0,s.jsx)("div",{className:"text-14 fw-500 js-dropdown-list",children:n.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"d-block js-dropdown-link ".concat(t===e.value?"text-blue-1":""),onClick:()=>a(e.value),children:e.label})},e.value))})})]})}},19650:function(e,t,l){l.r(t);var s=l(85893),c=l(67294);l(95744),l(69536);var a=l(11163),n=l.n(a),r=l(83321),o=l(50657),d=l(31425),i=l(6514),u=l(58951),h=l(37645);l(94910);var x=l(9108),m=l(13088),j=l(45921);t.default=e=>{let{offersData:t}=e,[l,b]=(0,c.useState)(0);(0,a.useRouter)();let[v,f]=(0,c.useState)(null),[p,N]=(0,c.useState)(!1),g=e=>{f(e),N(!0)},Z=()=>{N(!1)},k=e=>{b(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"tabs -underline-2 js-tabs",children:[(0,s.jsx)("div",{className:"tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls",children:["All Offers"].map((e,t)=>(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("button",{className:"tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ".concat(l===t?"is-tab-el-active":""),onClick:()=>k(t),children:e})},t))}),(0,s.jsx)("div",{className:"tabs__content pt-30 js-tabs-content",children:(0,s.jsx)("div",{className:"tabs__pane -tab-item-1 is-tab-el-active",children:(0,s.jsx)("div",{className:"overflow-scroll scroll-bar-1",children:(0,s.jsxs)("table",{className:"table-4 -border-bottom col-12",children:[(0,s.jsx)("thead",{className:"bg-light-2",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)("div",{className:"d-flex items-center",children:(0,s.jsxs)("div",{className:"form-checkbox ",children:[(0,s.jsx)("input",{type:"checkbox",name:"name"}),(0,s.jsx)("div",{className:"form-checkbox__mark",children:(0,s.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Photo"}),(0,s.jsx)("th",{children:"Discount"}),(0,s.jsx)("th",{children:"Action"})]})}),(0,s.jsx)("tbody",{children:t&&t.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("div",{className:"d-flex items-center",children:(0,s.jsxs)("div",{className:"form-checkbox ",children:[(0,s.jsx)("input",{type:"checkbox",name:"name"}),(0,s.jsx)("div",{className:"form-checkbox__mark",children:(0,s.jsx)("div",{className:"form-checkbox__icon icon-check"})})]})})}),(0,s.jsx)("td",{className:"text-blue-1 fw-500",children:e.name}),(0,s.jsx)("td",{children:(0,s.jsx)("img",{src:e.photo[0]})}),(0,s.jsx)("td",{children:e.discount}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.Z,{onClick:()=>n().push("add-offer?id=".concat(null==e?void 0:e._id)),endIcon:(0,s.jsx)(x.Z,{})}),(0,s.jsx)(r.Z,{onClick:()=>g(e._id),endIcon:(0,s.jsx)(m.Z,{})})]})]}))})]})})})})]}),(0,s.jsxs)(o.Z,{open:p,onClose:Z,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,s.jsx)(h.Z,{id:"alert-dialog-title",children:"Are you sure?"}),(0,s.jsx)(i.Z,{children:(0,s.jsx)(u.Z,{id:"alert-dialog-description",children:"You want to delete the record"})}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(r.Z,{class:"btn btn-success",onClick:()=>{j.Z.delete(v).then(e=>{location.reload(),console.log(e.data),N(!1)}).catch(e=>{console.log(e)})},autoFocus:!0,children:"Yes"}),(0,s.jsx)(r.Z,{class:"btn btn-danger",onClick:Z,children:"No"})]})]})]})}},94910:function(e,t,l){var s=l(4063);t.Z=new class{getAll(){return s.Z.get("/locations")}get(e){return s.Z.get("/location/".concat(e))}create(e){return s.Z.post("/create-location",e)}update(e,t){return s.Z.put("/update-location/".concat(e),t)}delete(e){return s.Z.delete("/remove-location/".concat(e))}deleteAll(){return s.Z.delete("/locations")}findByTitle(e){return s.Z.get("/locations?title=".concat(e))}}},45921:function(e,t,l){var s=l(4063);t.Z=new class{getAll(){return s.Z.get("/offers")}get(e){return s.Z.get("/offer/".concat(e))}create(e){return s.Z.post("/create-offer",e)}update(e,t){return s.Z.put("/update-offer/".concat(e),t)}delete(e){return s.Z.delete("/remove-offer/".concat(e))}deleteAll(){return s.Z.delete("/offers")}findByTitle(e){return s.Z.get("/offers?title=".concat(e))}}}}]);