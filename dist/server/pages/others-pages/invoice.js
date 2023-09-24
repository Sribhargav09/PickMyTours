"use strict";
(() => {
var exports = {};
exports.id = 3247;
exports.ids = [3247];
exports.modules = {

/***/ 80331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fothers_pages_2Finvoice_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Finvoice_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/others-pages/invoice.js
var invoice_namespaceObject = {};
__webpack_require__.r(invoice_namespaceObject);
__webpack_require__.d(invoice_namespaceObject, {
  "default": () => (invoice)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
;// CONCATENATED MODULE: ./pages/others-pages/invoice.js




const Invoice = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Invoice"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-lg bg-blue-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-10 col-lg-11",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "d-flex justify-end",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            className: "button -md -blue-1 bg-blue-1-05 text-blue-1 me-3",
                                            children: "Back Home"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                            children: [
                                                "Print",
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "icon-bed text-20 ml-10"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-4 mt-50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "layout-pt-lg layout-pb-lg px-50",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row justify-between",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-auto",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: "/img/general/logo.png",
                                                                alt: "logo icon"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-xl-4",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "row justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-auto",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "text-26 fw-600",
                                                                            children: "Invoice #"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-auto",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "text-18 fw-500 text-light-1",
                                                                            children: "0043128641"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row justify-between pt-50",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-auto",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 text-light-1",
                                                                    children: "Invoice date:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 fw-500 lh-15",
                                                                    children: "03/10/2022"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-xl-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 text-light-1",
                                                                    children: "Due date:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 fw-500 lh-15",
                                                                    children: "03/10/2022"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row justify-between pt-50",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-auto",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-20 fw-500",
                                                                    children: "Supplier"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 fw-500 mt-20",
                                                                    children: "Jobio LLC"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "text-15 text-light-1 mt-10",
                                                                    children: [
                                                                        "2301 Ravenswood Rd Madison,",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                        " WI 53711"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-xl-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-20 fw-500",
                                                                    children: "Customer"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 fw-500 mt-20",
                                                                    children: "John Doe"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 text-light-1 mt-10",
                                                                    children: "329 Queensberry Street, North Melbourne VIC 3051, Australia."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "row pt-50",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                            className: "table col-12",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                                                    className: "bg-blue-1-05 text-blue-1",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                children: "Description"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                children: "Price"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                children: "VAT (20%)"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                                                children: "Total"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tbody", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Standard Plan"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "$443.00"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "$921.80"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "$9243"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "Extra Plan "
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "$413.00"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "$912.80"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    children: "$5943"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    className: "text-18 fw-500",
                                                                                    children: "Total Due"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {}),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                    className: "text-18 fw-500",
                                                                                    children: "$9,750"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "border-top-light py-50",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "row x-gap-60 y-gap-10 justify-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            className: "text-14",
                                                            children: "www.gotirp.com"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            className: "text-14",
                                                            children: "invoice@pickmytours.com"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            className: "text-14",
                                                            children: "(123) 123-456"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const invoice = (dynamic_default()(()=>Promise.resolve(Invoice), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fothers-pages%2Finvoice&preferredRegion=&absolutePagePath=private-next-pages%2Fothers-pages%2Finvoice.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fothers_pages_2Finvoice_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Finvoice_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(invoice_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(invoice_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(invoice_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(invoice_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(invoice_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(invoice_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(invoice_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(invoice_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(invoice_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(invoice_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(invoice_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/others-pages/invoice","pathname":"/others-pages/invoice","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: invoice_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 62112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ pageTitle })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: pageTitle && `${pageTitle} || pickmytours - Travel & Tour React NextJS Template}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

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

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 61223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 50167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,1664,5152,330], () => (__webpack_exec__(80331)));
module.exports = __webpack_exports__;

})();