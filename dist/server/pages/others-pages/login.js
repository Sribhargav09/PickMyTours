"use strict";
(() => {
var exports = {};
exports.id = 4280;
exports.ids = [4280];
exports.modules = {

/***/ 53050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fothers_pages_2Flogin_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Flogin_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/others-pages/login.js
var login_namespaceObject = {};
__webpack_require__.r(login_namespaceObject);
__webpack_require__.d(login_namespaceObject, {
  "default": () => (login)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(23185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(57182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(22638);
// EXTERNAL MODULE: ./pages/_app.js + 3 modules
var _app = __webpack_require__(50693);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/common/CallToActions.jsx
var CallToActions = __webpack_require__(10164);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./components/header/default-header/index.jsx
var default_header = __webpack_require__(39898);
// EXTERNAL MODULE: ./components/footer/default/index.jsx + 4 modules
var footer_default = __webpack_require__(94609);
// EXTERNAL MODULE: ./components/common/LoginWithSocial.jsx
var LoginWithSocial = __webpack_require__(64229);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./app/features/user/userSlice.js
var userSlice = __webpack_require__(84403);
// EXTERNAL MODULE: ./services/signup.server.js
var signup_server = __webpack_require__(62994);
;// CONCATENATED MODULE: ./components/common/LoginForm.jsx








const LoginForm = ()=>{
    const loginUser = (0,external_react_redux_.useSelector)((state)=>state.user.loginUser);
    const userToken = (0,external_react_redux_.useSelector)((state)=>state.user.token);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [errors, setErrors] = (0,external_react_.useState)({
        email: "",
        password: "",
        loginError: ""
    });
    const add = ()=>{
        if (email.length == 0) {
            setErrors({
                ...errors,
                email: "email is required"
            });
        } else if (password.length == 0) {
            setErrors({
                ...errors,
                password: "password is required"
            });
        } else {
            signup_server/* default */.Z.login({
                email,
                password
            }).then((response)=>{
                //Router.push("/vendor-dashboard/users")
                //setIsRegister(true);
                console.log(response.data);
                setTimeout(()=>{
                    router_default().push("/dashboard/db-booking");
                }, 200);
                dispatch((0,userSlice/* setUser */.av)(response.data.user));
                dispatch((0,userSlice/* setToken */.o4)(response.data.token));
            }).catch((e)=>{
                if (e && e.response.data && e.response.data.message) {
                    setErrors({
                        loginError: e.response.data.message
                    });
                    window.scrollTo({
                        top: 100,
                        behavior: "smooth"
                    });
                }
                console.log(e);
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "row y-gap-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-22 fw-500",
                        children: "Welcome back"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "mt-10",
                        children: [
                            "Don't have an account yet?",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/others-pages/signup",
                                className: "text-blue-1",
                                children: "Sign up for free"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                class: "error col-12",
                children: errors && errors.loginError
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            value: email,
                            onChange: (event)=>setEmail(event.target.value),
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            className: "lh-1 text-14 text-light-1",
                            children: "Email"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                class: "error col-12",
                children: errors && errors.email
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "password",
                            value: password,
                            onChange: (event)=>setPassword(event.target.value),
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            className: "lh-1 text-14 text-light-1",
                            children: "Password"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                class: "error col-12",
                children: errors && errors.password
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: "#",
                    className: "text-14 fw-500 text-blue-1 underline",
                    children: "Forgot your password?"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    type: "button",
                    onClick: add,
                    className: "button py-20 -dark-1 bg-blue-1 text-white w-100",
                    children: [
                        "Sign In ",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "icon-arrow-top-right ml-15"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_LoginForm = (LoginForm);

;// CONCATENATED MODULE: ./pages/others-pages/login.js








const LogIn = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Login"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-lg bg-blue-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-7 col-md-9",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx(common_LoginForm, {})
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const login = (dynamic_default()(()=>Promise.resolve(LogIn), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fothers-pages%2Flogin&preferredRegion=&absolutePagePath=private-next-pages%2Fothers-pages%2Flogin.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fothers_pages_2Flogin_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Flogin_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(login_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(login_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(login_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(login_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(login_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(login_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(login_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/others-pages/login","pathname":"/others-pages/login","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: login_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 69783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 33100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 35132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 61223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 41981:
/***/ ((module) => {

module.exports = require("react-pro-sidebar");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 95973:
/***/ ((module) => {

module.exports = require("react-tabs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,5152,330,8443,3828,6746,627,7602,4609,164,9898,2994,4229], () => (__webpack_exec__(53050)));
module.exports = __webpack_exports__;

})();