(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3766],{15970:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/others-pages/signup",function(){return a(76812)}])},4063:function(e,t,a){"use strict";var s=a(6154);t.Z=s.Z.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"multipart/form-data",Accept:"application/json"}})},89836:function(e,t,a){"use strict";var s=a(6154);t.Z=s.Z.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json",Accept:"application/json"}})},94463:function(e,t,a){"use strict";a(85893)},76812:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var s=a(85893),n=a(5152),r=a.n(n),l=a(8034),o=a(58274),i=a(85276),c=a(61672);a(94463);var d=a(41664),u=a.n(d),p=a(67294),h=a(11163),m=a(90530),f=a(45697),g=a.n(f),x={"react-code-input-container":"styles_react-code-input-container__tpiKG","react-code-input":"styles_react-code-input__CRulA",loading:"styles_loading__Z65VQ",blur:"styles_blur__19vMK",title:"styles_title__1cca0",spin:"styles_spin__6y_8G",loadingCircle:"styles_loadingCircle__293ky"};!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}("/* add css styles here (optional) */\n\n.styles_react-code-input-container__tpiKG {\n  position: relative;\n}\n\n.styles_react-code-input__CRulA > input {\n  border: solid 1px #a8adb7;\n  border-right: none;\n  font-family: 'Lato';\n  font-size: 20px;\n  color: #525461;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 0;\n  -webkit-appearance: initial;\n}\n\n.styles_react-code-input__CRulA > input:last-child {\n  border-right: solid 1px #a8adb7;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:focus {\n  outline: none;\n  border: 1px solid #006fff;\n  caret-color: #006fff;\n}\n\n.styles_react-code-input__CRulA > input:focus + input {\n  border-left: none;\n}\n\n.styles_loading__Z65VQ {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n}\n\n.styles_blur__19vMK {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  opacity: 0.5;\n  filter: blur(0.5px);\n  transition: opacity 0.3s;\n}\n\n.styles_title__1cca0 {\n  margin: 0;\n  height: 20px;\n  padding-bottom: 10px;\n}\n\n.styles_spin__6y_8G {\n  display: inline-block;\n  animation: styles_loadingCircle__293ky 1s infinite linear;\n}\n\n@keyframes styles_loadingCircle__293ky {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n");var v=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},b=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),y=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},j=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e},_=function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a},N={backspace:8,left:37,up:38,right:39,down:40},w=function(e){function t(e){v(this,t);var a=j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));C.call(a);var s=e.fields,n=e.values,r=void 0,l=0;if(n&&n.length){r=[];for(var o=0;o<s;o++)r.push(n[o]||"");l=n.length>=s?0:n.length}else r=Array(s).fill("");a.state={values:r,autoFocusIndex:l},a.iRefs=[];for(var i=0;i<s;i++)a.iRefs.push(p.createRef());return a.id=+new Date,a}return y(t,e),b(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.values,s=t.autoFocusIndex,n=this.props,r=n.loading,l=n.title,o=n.fieldHeight,i=n.fieldWidth,c=n.fields,d=n.autoFocus,u=n.className,h=n.type,m={width:i,height:o};return p.createElement("div",{className:x["react-code-input-container"]+" "+u,style:{width:c*i}},l&&p.createElement("p",{className:x.title},l),p.createElement("div",{className:x["react-code-input"]},a.map(function(t,a){return p.createElement("input",{type:"number"===h?"tel":h,pattern:"number"===h?"[0-9]*":null,autoFocus:d&&a===s,style:m,key:e.id+"-"+a,"data-id":a,value:t,id:e.props.id?e.props.id+"-"+a:null,ref:e.iRefs[a],onChange:e.onChange,onKeyDown:e.onKeyDown,onFocus:e.onFocus,disabled:e.props.disabled,required:e.props.required,placeholder:e.props.placeholder[a]})})),r&&p.createElement("div",{className:x.loading,style:{lineHeight:o+"px"}},p.createElement("div",{className:x.blur}),p.createElement("svg",{className:x.spin,viewBox:"0 0 1024 1024","data-icon":"loading",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},p.createElement("path",{fill:"#006fff",d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}))))}}]),t}(p.Component);w.propTypes={type:g().oneOf(["text","number"]),onChange:g().func,onComplete:g().func,fields:g().number,loading:g().bool,title:g().string,fieldWidth:g().number,id:g().string,fieldHeight:g().number,autoFocus:g().bool,className:g().string,values:g().arrayOf(g().string),disabled:g().bool,required:g().bool,placeholder:g().arrayOf(g().string)},w.defaultProps={type:"number",fields:6,fieldWidth:58,fieldHeight:54,autoFocus:!0,disabled:!1,required:!1,placeholder:[]};var C=function(){var e=this;this.__clearvalues__=function(){var t=e.props.fields;e.setState({values:Array(t).fill("")}),e.iRefs[0].current.focus()},this.triggerChange=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.values,a=e.props,s=a.onChange,n=a.onComplete,r=a.fields,l=t.join("");s&&s(l),n&&l.length>=r&&n(l)},this.onChange=function(t){var a=parseInt(t.target.dataset.id);if("number"===e.props.type&&(t.target.value=t.target.value.replace(/[^\d]/gi,"")),""!==t.target.value&&("number"!==e.props.type||t.target.validity.valid)){var s=e.props.fields,n=void 0,r=t.target.value,l=e.state.values;if(l=Object.assign([],l),r.length>1){var o=r.length+a-1;o>=s&&(o=s-1),n=e.iRefs[o],r.split("").forEach(function(e,t){var n=a+t;n<s&&(l[n]=e)}),e.setState({values:l})}else n=e.iRefs[a+1],l[a]=r,e.setState({values:l});n&&(n.current.focus(),n.current.select()),e.triggerChange(l)}},this.onKeyDown=function(t){var a=parseInt(t.target.dataset.id),s=a-1,n=e.iRefs[s],r=e.iRefs[a+1];switch(t.keyCode){case N.backspace:t.preventDefault();var l=[].concat(_(e.state.values));e.state.values[a]?(l[a]="",e.setState({values:l}),e.triggerChange(l)):n&&(l[s]="",n.current.focus(),e.setState({values:l}),e.triggerChange(l));break;case N.left:t.preventDefault(),n&&n.current.focus();break;case N.right:t.preventDefault(),r&&r.current.focus();break;case N.up:case N.down:t.preventDefault()}},this.onFocus=function(e){e.target.select(e)}},S=()=>{let[e,t]=(0,p.useState)(""),[a,n]=(0,p.useState)(""),[r,l]=(0,p.useState)(""),[o,i]=(0,p.useState)(""),[c,d]=(0,p.useState)(""),[f,g]=(0,p.useState)(""),[x,v]=(0,p.useState)("user"),[b,y]=(0,p.useState)({firstName:"",lastName:"",email:"",password:"",phone:"",userRole:"",photos:""}),[j,_]=(0,p.useState)(null),[N,C]=(0,p.useState)([]),[S,T]=(0,p.useState)(null),[k,E]=(0,p.useState)(!0),[R,P]=(0,p.useState)(!1),[O,A]=(0,p.useState)(!1),[Z,F]=(0,p.useState)(!1),q=(0,h.useRouter)(),I=q.query.id;(0,p.useEffect)(()=>(I&&m.Z.get(I).then(e=>{t(e.data.data.firstName),n(e.data.data.lastName),C([e.data.data.photo]),l(e.data.data.email),i(e.data.data.password),d(e.data.data.conformpassword),setphone(e.data.data.phone),setTimeout(()=>{E(!1),console.log("This will run after 1 second!")},1e3),console.log(D-user)}).catch(e=>{console.log(e)}),()=>{}),[I]);let D=()=>{let t=!1,s={};0==e.length&&(s.firstName="The firstname can not be empty",t=!0),0==a.length&&(s.lastName="The lastname can not be empty",t=!0),0==r.length&&(s.email="The email is required",t=!0),0==o.length&&(s.password="The password is required",t=!0),f.length<10&&(s.phone="The phone is required",t=!0),0==N.length&&(t=!0,s.photos="Upload a photo can not be empty"),t?(y(s),window.scrollTo({top:100,behavior:"smooth"})):m.Z.create({firstName:e,lastName:a,email:r,password:o,phone:f,role:x,photo:j}).then(e=>{console.log(e.data),window.scrollTo({top:100,behavior:"smooth"}),P(!0)}).catch(e=>{e&&e.response.data&&e.response.data.email&&(y({email:e.response.data.email}),window.scrollTo({top:450,behavior:"smooth"})),console.log(e)})},U=e=>{let t=[...N];t.splice(e,1),C(t)};return(0,s.jsxs)(s.Fragment,{children:[!R&&(0,s.jsxs)("form",{className:"row y-gap-20",children:[(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)("h1",{className:"text-22 fw-500",children:"Welcome back"}),(0,s.jsxs)("p",{className:"mt-10",children:["Already have an account yet?"," ",(0,s.jsx)(u(),{href:"/others-pages/login",className:"text-blue-1",children:"Log in"})]})]}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-input ",children:[(0,s.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0}),(0,s.jsx)("label",{className:"lh-1 text-14 text-light-1",children:"First Name*"})]})}),(0,s.jsx)("span",{class:"error col-12",children:b&&b.firstName}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-input ",children:[(0,s.jsx)("input",{type:"text",value:a,onChange:e=>n(e.target.value),required:!0}),(0,s.jsx)("label",{className:"lh-1 text-14 text-light-1",children:"Last Name*"})]})}),(0,s.jsx)("span",{class:"error col-12",children:b&&b.lastName}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-input ",children:[(0,s.jsx)("input",{type:"text",value:r,onChange:e=>l(e.target.value),required:!0}),(0,s.jsx)("label",{className:"lh-1 text-14 text-light-1",children:"Email*"})]})}),(0,s.jsx)("span",{class:"error col-12",children:b&&b.email}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-input ",children:[(0,s.jsx)("input",{type:"password",value:o,onChange:e=>i(e.target.value),required:!0}),(0,s.jsx)("label",{className:"lh-1 text-14 text-light-1",children:"Password*"})]})}),(0,s.jsx)("span",{class:"error col-12",children:b&&b.password}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-input ",children:[(0,s.jsx)("input",{type:"password",value:c,onChange:e=>d(e.target.value),required:!0}),(0,s.jsx)("label",{className:"lh-1 text-14 text-light-1",children:"Confirm Password*"})]})}),(0,s.jsx)("span",{class:"error col-12",children:b&&b.confirmPassword}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"form-input ",children:[(0,s.jsx)("input",{type:"number",value:f,onChange:e=>g(e.target.value),required:!0}),(0,s.jsx)("label",{className:"lh-1 text-14 text-light-1",children:"Phone"})]})}),(0,s.jsx)("span",{class:"error col-12",children:b&&b.phone}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("div",{className:"mt-30",children:[(0,s.jsx)("div",{className:"fw-500",children:"Feature Photo"}),(0,s.jsxs)("div",{className:"row x-gap-20 y-gap-20 pt-15",children:[(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsxs)("div",{className:"w-200",children:[(0,s.jsx)("label",{htmlFor:"featurePhotoUpload",className:"d-flex ratio ratio-1:1",children:(0,s.jsxs)("div",{className:"flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1",children:[(0,s.jsx)("div",{className:"icon-upload-file text-40 text-blue-1 mb-10"}),(0,s.jsx)("div",{className:"text-blue-1 fw-500",children:"Upload Image"})]})}),(0,s.jsx)("input",{type:"file",name:"photo",id:"featurePhotoUpload",accept:"image/png, image/jpeg",className:"d-none",onChange:function(e){let t=e.target.files,a=t[0],s=new FileReader;_(a);let n=[];s.onloadend=()=>{let e=new Image;e.onload=()=>{e.width>800||e.height>800?y({...b,photos:"Image ".concat(a.name," exceeds the maximum size of ").concat(800,"px.")}):["image/png","image/jpeg"].includes(a.type.toLowerCase())?(n.push(s.result),n.length===t.length&&(C([...N,...n]),y({...b,photos:""}))):y({...b,photos:"Image ".concat(a.name," is not a valid file type. Only PNG and JPEG are allowed.")})},e.onerror=()=>{y({...b,photos:"Image ".concat(a.name," could not be loaded.")})},e.src=s.result},console.log(n),console.log(b),C([...n]),s.readAsDataURL(a)}}),(0,s.jsx)("div",{className:"text-start mt-10 text-14 text-light-1",children:"PNG or JPG no bigger than 800px wide and tall."})]})}),N.map((e,t)=>(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsxs)("div",{className:"d-flex ratio ratio-1:1 w-200",children:[(0,s.jsx)("img",{src:e,alt:"image",className:"img-ratio rounded-4"}),(0,s.jsx)("div",{className:"d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",onClick:()=>U(t),children:(0,s.jsx)("div",{className:"size-40 bg-white rounded-4 flex-center cursor-pointer",children:(0,s.jsx)("i",{className:"icon-trash text-16"})})})]})},t)),b.photos&&(0,s.jsx)("div",{className:"col-12 mb-10  text-red-1",children:b.photos})]})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsxs)("button",{type:"button",href:"#",onClick:()=>D(),className:"button py-20 -dark-1 bg-blue-1 text-white w-100",children:["Sign Up ",(0,s.jsx)("div",{className:"icon-arrow-top-right ml-15"})]})})]}),R&&!O&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{className:"mb-20",children:"Verify Your Email Address"}),(0,s.jsxs)("div",{style:{textAlign:"center",padding:10,margin:"auto"},children:[(0,s.jsx)("p",{children:"Please enter the 4-digit verification code we sent via SMS:"}),(0,s.jsx)("div",{className:"mb-20",children:"(we want to make sure it's your email id verified)"}),(0,s.jsx)("div",{lassName:"mt-50 mb-20",children:(0,s.jsx)(w,{fields:4,onChange:e=>{e.length<4?F(!1):F(!0)},onComplete:F})}),(0,s.jsx)("button",{style:{opacity:Z?1:.5},className:"button px-30 mt-50 ml-50 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white",type:"button",disabled:!Z,children:"Verifiy"})]})]}),R&&O&&(0,s.jsx)("div",{class:"success",children:(0,s.jsxs)("p",{children:["Thanks for Signup. ",(0,s.jsx)("br",{}),"Your account will be activate after approval form our end"]})})]})};let T=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{pageTitle:"Sign Up"}),(0,s.jsx)("div",{className:"header-margin"}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("section",{className:"layout-pt-lg layout-pb-lg bg-blue-2",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-center",children:(0,s.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-9",children:(0,s.jsx)("div",{className:"px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4",children:(0,s.jsx)(S,{})})})})})}),(0,s.jsx)(l.Z,{}),(0,s.jsx)(c.Z,{})]});var k=r()(()=>Promise.resolve(T),{ssr:!1})},90530:function(e,t,a){"use strict";var s=a(4063),n=a(89836);t.Z=new class{getAll(){return s.Z.get("/user")}get(e){return s.Z.get("/create-user/".concat(e))}create(e){return s.Z.post("/create-user",e)}login(e){return n.Z.post("/login",e)}update(e,t){return s.Z.put("/update-user/".concat(e),t)}delete(e){return s.Z.delete("/remove-user/".concat(e))}deleteAll(){return s.Z.delete("/locations")}}},92703:function(e,t,a){"use strict";var s=a(50414);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,r,l){if(l!==s){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}},45697:function(e,t,a){e.exports=a(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[4114,5675,1664,4827,7751,2096,4544,180,9774,2888,179],function(){return e(e.s=15970)}),_N_E=e.O()}]);