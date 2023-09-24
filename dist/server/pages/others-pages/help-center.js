"use strict";
(() => {
var exports = {};
exports.id = 9029;
exports.ids = [9029];
exports.modules = {

/***/ 94982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fothers_pages_2Fhelp_center_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Fhelp_center_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/others-pages/help-center.js
var help_center_namespaceObject = {};
__webpack_require__.r(help_center_namespaceObject);
__webpack_require__.d(help_center_namespaceObject, {
  "default": () => (help_center)
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
// EXTERNAL MODULE: ./components/faq/Faq.jsx
var Faq = __webpack_require__(9134);
// EXTERNAL MODULE: ./components/header/default-header/index.jsx
var default_header = __webpack_require__(39898);
// EXTERNAL MODULE: ./components/footer/default/index.jsx + 4 modules
var footer_default = __webpack_require__(94609);
;// CONCATENATED MODULE: ./components/block/HelpSearchBlock.jsx

const HelpSearchBlock = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "single-field d-flex items-center justify-end x-gap-10 y-gap-20 pt-40",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                    className: "border-light bg-white h-68",
                    type: "text",
                    placeholder: "Cancellation, meeting point, etc.",
                    required: true
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute mr-4",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    type: "submit",
                    className: "button -md -dark-1 h-60 bg-blue-1 text-white",
                    children: "Search"
                })
            })
        ]
    });
};
/* harmony default export */ const block_HelpSearchBlock = (HelpSearchBlock);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/block/HelpBlock.jsx


const HelpBlock = ()=>{
    const helpBlockContent = [
        {
            id: 1,
            icon: "/img/pages/help/icons/1.svg",
            title: "Booking your activity",
            text: `Lorem ipsum is placeholder text commonly used in site.`
        },
        {
            id: 2,
            icon: "/img/pages/help/icons/2.svg",
            title: "Payment & receipts",
            text: `Lorem ipsum is placeholder text commonly used in site.`
        },
        {
            id: 3,
            icon: "/img/pages/help/icons/3.svg",
            title: "Booking changes & refunds",
            text: `Lorem ipsum is placeholder text commonly used in site.`
        },
        {
            id: 4,
            icon: "/img/pages/help/icons/4.svg",
            title: "Promo codes & credits",
            text: `Lorem ipsum is placeholder text commonly used in site.`
        },
        {
            id: 5,
            icon: "/img/pages/help/icons/5.svg",
            title: "On the participation day",
            text: `Lorem ipsum is placeholder text commonly used in site.`
        },
        {
            id: 6,
            icon: "/img/pages/help/icons/6.svg",
            title: "Value Packs",
            text: `Lorem ipsum is placeholder text commonly used in site.`
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: helpBlockContent.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-lg-4 col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-blue-1-05 rounded-4 px-50 py-40",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "size-70 bg-white rounded-full flex-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 30,
                                height: 30,
                                src: item.icon,
                                alt: "icon"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mt-24",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-18 fw-500",
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mt-5",
                                    children: item.text
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const block_HelpBlock = (HelpBlock);

;// CONCATENATED MODULE: ./pages/others-pages/help-center.js









const HelpCenter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Help Center"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-6 col-lg-8 col-md-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Welcome to the Help Center"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Lorem ipsum is placeholder text commonly used in site."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(block_HelpSearchBlock, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-60 lg:pt-40",
                            children: /*#__PURE__*/ jsx_runtime.jsx(block_HelpBlock, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Frequently Asked Questions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "Interdum et malesuada fames"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 justify-center pt-40 sm:pt-20",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-8 col-lg-10",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "accordion -simple row y-gap-20 js-accordion",
                                    id: "Faq1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Faq/* default */.Z, {})
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const help_center = (dynamic_default()(()=>Promise.resolve(HelpCenter), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fothers-pages%2Fhelp-center&preferredRegion=&absolutePagePath=private-next-pages%2Fothers-pages%2Fhelp-center.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fothers_pages_2Fhelp_center_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Fhelp_center_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(help_center_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(help_center_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(help_center_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(help_center_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(help_center_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(help_center_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(help_center_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(help_center_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(help_center_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(help_center_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(help_center_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/others-pages/help-center","pathname":"/others-pages/help-center","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: help_center_namespaceObject,
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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,5152,330,8443,3828,6746,627,7602,4609,164,9898,9134], () => (__webpack_exec__(94982)));
module.exports = __webpack_exports__;

})();