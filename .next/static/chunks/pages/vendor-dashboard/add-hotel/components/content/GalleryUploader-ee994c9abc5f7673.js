(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5014],{71223:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendor-dashboard/add-hotel/components/content/GalleryUploader",function(){return l(18063)}])},18063:function(e,a,l){"use strict";l.r(a);var t=l(85893),s=l(67294);a.default=()=>{let[e,a]=(0,s.useState)([]),[l,n]=(0,s.useState)(""),i=l=>{let t=[...e];t.splice(l,1),a(t)};return(0,t.jsxs)("div",{className:"row x-gap-20 y-gap-20 pt-15",children:[(0,t.jsx)("div",{className:"col-auto",children:(0,t.jsxs)("div",{className:"w-200",children:[(0,t.jsx)("label",{htmlFor:"uploadGallery",className:"d-flex ratio ratio-1:1",children:(0,t.jsxs)("div",{className:"flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1",children:[(0,t.jsx)("div",{className:"icon-upload-file text-40 text-blue-1 mb-10"}),(0,t.jsx)("div",{className:"text-blue-1 fw-500",children:"Upload Images"})]})}),(0,t.jsx)("input",{type:"file",id:"uploadGallery",multiple:!0,accept:"image/png, image/jpeg",className:"d-none",onChange:l=>{let t=l.target.files,s=[];for(let l=0;l<t.length;l++){let i=t[l],d=new FileReader;d.onloadend=()=>{let l=new Image;l.onload=()=>{l.width>800||l.height>800?n("Image ".concat(i.name," exceeds the maximum size of ").concat(800,"px.")):["image/png","image/jpeg"].includes(i.type.toLowerCase())?(s.push(d.result),s.length===t.length&&(a([...e,...s]),n(""))):n("Image ".concat(i.name," is not a valid file type. Only PNG and JPEG are allowed."))},l.onerror=()=>{n("Image ".concat(i.name," could not be loaded."))},l.src=d.result},d.readAsDataURL(i)}}}),(0,t.jsx)("div",{className:"text-start mt-10 text-14 text-light-1",children:"PNG or JPG no bigger than 800px wide and tall."})]})}),e.map((e,a)=>(0,t.jsx)("div",{className:"col-auto",children:(0,t.jsxs)("div",{className:"d-flex ratio ratio-1:1 w-200",children:[(0,t.jsx)("img",{src:e,alt:"image",className:"img-ratio rounded-4"}),(0,t.jsx)("div",{className:"d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",onClick:()=>i(a),children:(0,t.jsx)("div",{className:"size-40 bg-white rounded-4 flex-center cursor-pointer",children:(0,t.jsx)("i",{className:"icon-trash text-16"})})})]})},a)),l&&(0,t.jsx)("div",{className:"col-12 mb-10  text-red-1",children:l})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=71223)}),_N_E=e.O()}]);