(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4978],{47167:function(e,t,r){"use strict";var n=r(67294);let l=n.createContext(void 0);t.Z=l},15704:function(e,t,r){"use strict";function n({props:e,states:t,muiFormControl:r}){return t.reduce((t,n)=>(t[n]=e[n],r&&void 0===e[n]&&(t[n]=r[n]),t),{})}r.d(t,{Z:function(){return n}})},74423:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(67294),l=r(47167);function o(){return n.useContext(l.Z)}},63023:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},76607:function(e,t,r){"use strict";r(63023)},88169:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var n=r(87462),l=r(67294),o=r(63366),i=r(90512),a=r(94780),c=r(98216),u=r(71657),s=r(90948),d=r(1588),f=r(27621);function m(e){return(0,f.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=r(85893);let b=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=e=>{let{color:t,fontSize:r,classes:n}=e,l={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(r)}`]};return(0,a.Z)(l,m,n)},h=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,c.Z)(r.color)}`],t[`fontSize${(0,c.Z)(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,l,o,i,a,c,u,s,d,f,m,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(l=e.transitions)||null==(l=l.duration)?void 0:l.shorter}),fontSize:({inherit:"inherit",small:(null==(o=e.typography)||null==(i=o.pxToRem)?void 0:i.call(o,20))||"1.25rem",medium:(null==(a=e.typography)||null==(c=a.pxToRem)?void 0:c.call(a,24))||"1.5rem",large:(null==(u=e.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875rem"})[t.fontSize],color:null!=(d=null==(f=(e.vars||e).palette)||null==(f=f[t.color])?void 0:f.main)?d:({action:null==(m=(e.vars||e).palette)||null==(m=m.action)?void 0:m.active,disabled:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.disabled,inherit:void 0})[t.color]}}),y=l.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:c,color:s="inherit",component:d="svg",fontSize:f="medium",htmlColor:m,inheritViewBox:y=!1,titleAccess:S,viewBox:g="0 0 24 24"}=r,C=(0,o.Z)(r,b),w=l.isValidElement(a)&&"svg"===a.type,x=(0,n.Z)({},r,{color:s,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:g,hasSvgAsChild:w}),Z={};y||(Z.viewBox=g);let E=v(x);return(0,p.jsxs)(h,(0,n.Z)({as:d,className:(0,i.Z)(E.root,c),focusable:"false",color:m,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:t},Z,C,w&&a.props,{ownerState:x,children:[w?a.props.children:a,S?(0,p.jsx)("title",{children:S}):null]}))});function S(e,t){function r(r,l){return(0,p.jsx)(y,(0,n.Z)({"data-testid":`${t}Icon`,ref:l},r,{children:e}))}return r.muiName=y.muiName,l.memo(l.forwardRef(r))}y.muiName="SvgIcon"},72021:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(67294),l=function({controlled:e,default:t,name:r,state:l="value"}){let{current:o}=n.useRef(void 0!==e),[i,a]=n.useState(t),c=o?e:i,u=n.useCallback(e=>{o||a(e)},[]);return[c,u]}},9008:function(e,t,r){e.exports=r(73902)},50776:function(e,t,r){"use strict";let n;r.d(t,{OK:function(){return k},td:function(){return Z},x4:function(){return _},mQ:function(){return C}});var l=r(67294);function o(e){return t=>!!t.type&&t.type.tabsRole===e}let i=o("Tab"),a=o("TabList"),c=o("TabPanel");function u(e,t){return l.Children.map(e,e=>null===e?null:i(e)||a(e)||c(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,l.cloneElement)(e,{...e.props,children:u(e.props.children,t)}):e)}var s=r(90512);function d(e){let t=0;return!function e(t,r){return l.Children.forEach(t,t=>{null!==t&&(i(t)||c(t)?r(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(a(t)&&r(t),e(t.props.children,r)))})}(e,e=>{i(e)&&t++}),t}function f(e){return e&&"getAttribute"in e}function m(e){return f(e)&&e.getAttribute("data-rttab")}function p(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let b={className:"react-tabs",focus:!1},v=e=>{let t=(0,l.useRef)([]),r=(0,l.useRef)([]),o=(0,l.useRef)();function f(t,r){if(t<0||t>=y())return;let{onSelect:n,selectedIndex:l}=e;n(t,l,r)}function v(e){let t=y();for(let r=e+1;r<t;r++)if(!p(S(r)))return r;for(let t=0;t<e;t++)if(!p(S(t)))return t;return e}function h(e){let t=e;for(;t--;)if(!p(S(t)))return t;for(t=y();t-- >e;)if(!p(S(t)))return t;return e}function y(){let{children:t}=e;return d(t)}function S(e){return t.current[`tabs-${e}`]}function g(e){let t=e.target;do if(C(t)){if(p(t))return;let r=[].slice.call(t.parentNode.children).filter(m).indexOf(t);f(r,e);return}while(null!=(t=t.parentNode))}function C(e){if(!m(e))return!1;let t=e.parentElement;do{if(t===o.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:w,className:x,disabledTabClassName:Z,domRef:E,focus:N,forceRenderTabPanel:R,onSelect:k,selectedIndex:T,selectedTabClassName:$,selectedTabPanelClassName:I,environment:_,disableUpDownKeys:z,disableLeftRightKeys:A,...j}={...b,...e};return l.createElement("div",Object.assign({},j,{className:(0,s.Z)(x),onClick:g,onKeyDown:function(t){let{direction:r,disableUpDownKeys:n,disableLeftRightKeys:l}=e;if(C(t.target)){let{selectedIndex:o}=e,i=!1,a=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(i=!0,a=!1,g(t)),(l||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(n||38!==t.keyCode&&"ArrowUp"!==t.code)?(l||39!==t.keyCode&&"ArrowRight"!==t.code)&&(n||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(o=function(){let e=y();for(;e--;)if(!p(S(e)))return e;return null}(),i=!0,a=!0):(36===t.keyCode||"Home"===t.code)&&(o=function(){let e=y();for(let t=0;t<e;t++)if(!p(S(t)))return t;return null}(),i=!0,a=!0):(o="rtl"===r?h(o):v(o),i=!0,a=!0):(o="rtl"===r?v(o):h(o),i=!0,a=!0),i&&t.preventDefault(),a&&f(o,t)}},ref:e=>{o.current=e,E&&E(e)},"data-rttabs":!0}),function(){let o=0,{children:s,disabledTabClassName:d,focus:f,forceRenderTabPanel:m,selectedIndex:p,selectedTabClassName:b,selectedTabPanelClassName:v,environment:h}=e;r.current=r.current||[];let g=r.current.length-y(),C=(0,l.useId)();for(;g++<0;)r.current.push(`${C}${r.current.length}`);return u(s,e=>{let s=e;if(a(e)){let o=0,a=!1;null==n&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{n=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){n=!1}}(h);let c=h||("undefined"!=typeof window?window:void 0);n&&c&&(a=l.Children.toArray(e.props.children).filter(i).some((e,t)=>c.document.activeElement===S(t))),s=(0,l.cloneElement)(e,{children:u(e.props.children,e=>{let n=`tabs-${o}`,i=p===o,c={tabRef:e=>{t.current[n]=e},id:r.current[o],selected:i,focus:i&&(f||a)};return b&&(c.selectedClassName=b),d&&(c.disabledClassName=d),o++,(0,l.cloneElement)(e,c)})})}else if(c(e)){let t={id:r.current[o],selected:p===o};m&&(t.forceRender=m),v&&(t.selectedClassName=v),o++,s=(0,l.cloneElement)(e,t)}return s})}())};v.propTypes={};let h={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},y=e=>null===e.selectedIndex?1:0,S=(e,t)=>{},g=e=>{let{children:t,defaultFocus:r,defaultIndex:n,focusTabOnClick:o,onSelect:i,...a}={...h,...e},[c,u]=(0,l.useState)(r),[s]=(0,l.useState)(y(a)),[f,m]=(0,l.useState)(1===s?n||0:null);if((0,l.useEffect)(()=>{u(!1)},[]),1===s){let e=d(t);(0,l.useEffect)(()=>{if(null!=f){let t=Math.max(0,e-1);m(Math.min(f,t))}},[e])}S(a,s);let p={...e,...a};return p.focus=c,p.onSelect=(e,t,r)=>{("function"!=typeof i||!1!==i(e,t,r))&&(o&&u(!0),1===s&&m(e))},null!=f&&(p.selectedIndex=f),delete p.defaultFocus,delete p.defaultIndex,delete p.focusTabOnClick,l.createElement(v,p,t)};g.propTypes={},g.tabsRole="Tabs";var C=g;let w={className:"react-tabs__tab-list"},x=e=>{let{children:t,className:r,...n}={...w,...e};return l.createElement("ul",Object.assign({},n,{className:(0,s.Z)(r),role:"tablist"}),t)};x.tabsRole="TabList",x.propTypes={};var Z=x;let E="react-tabs__tab",N={className:E,disabledClassName:`${E}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${E}--selected`},R=e=>{let t=(0,l.useRef)(),{children:r,className:n,disabled:o,disabledClassName:i,focus:a,id:c,selected:u,selectedClassName:d,tabIndex:f,tabRef:m,...p}={...N,...e};return(0,l.useEffect)(()=>{u&&a&&t.current.focus()},[u,a]),l.createElement("li",Object.assign({},p,{className:(0,s.Z)(n,{[d]:u,[i]:o}),ref:e=>{t.current=e,m&&m(e)},role:"tab",id:`tab${c}`,"aria-selected":u?"true":"false","aria-disabled":o?"true":"false","aria-controls":`panel${c}`,tabIndex:f||(u?"0":null),"data-rttab":!0}),r)};R.propTypes={},R.tabsRole="Tab";var k=R;let T="react-tabs__tab-panel",$={className:T,forceRender:!1,selectedClassName:`${T}--selected`},I=e=>{let{children:t,className:r,forceRender:n,id:o,selected:i,selectedClassName:a,...c}={...$,...e};return l.createElement("div",Object.assign({},c,{className:(0,s.Z)(r,{[a]:i}),role:"tabpanel",id:`panel${o}`,"aria-labelledby":`tab${o}`}),n||i?t:null)};I.tabsRole="TabPanel",I.propTypes={};var _=I}}]);