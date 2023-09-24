"use strict";
(() => {
var exports = {};
exports.id = 9202;
exports.ids = [9202];
exports.modules = {

/***/ 82013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fvendor_dashboard_2Fusers_2Fcomponents_2FLocationsTable_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fusers_2Fcomponents_2FLocationsTable_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/vendor-dashboard/users/components/LocationsTable.jsx
var LocationsTable_namespaceObject = {};
__webpack_require__.r(LocationsTable_namespaceObject);
__webpack_require__.d(LocationsTable_namespaceObject, {
  "default": () => (components_LocationsTable)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./pages/vendor-dashboard/common/Pagination.jsx
var Pagination = __webpack_require__(35966);
// EXTERNAL MODULE: ./pages/vendor-dashboard/users/components/ActionsButton.jsx
var ActionsButton = __webpack_require__(74493);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./pages/vendor-dashboard/users/components/LocationsTable.jsx






const LocationsTable = ({ locationsData })=>{
    const [activeTab, setActiveTab] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    console.log(locationsData);
    const handleTabClick = (index)=>{
        setActiveTab(index);
    };
    const tabItems = [
        "All Locations"
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tabs -underline-2 js-tabs",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls",
                    children: tabItems.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: `tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${activeTab === index ? "is-tab-el-active" : ""}`,
                                onClick: ()=>handleTabClick(index),
                                children: item
                            })
                        }, index))
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tabs__content pt-30 js-tabs-content",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "tabs__pane -tab-item-1 is-tab-el-active",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "overflow-scroll scroll-bar-1",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                className: "table-4 -border-bottom col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                        className: "bg-light-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "d-flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "form-checkbox ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "checkbox",
                                                                    name: "name"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "form-checkbox__mark",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "form-checkbox__icon icon-check"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Photo"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                                    children: "Action"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                        children: locationsData && locationsData.map((data)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "d-flex items-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "form-checkbox ",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        type: "checkbox",
                                                                        name: "name"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "form-checkbox__mark",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "form-checkbox__icon icon-check"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                        className: "text-blue-1 fw-500",
                                                        children: data.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            width: "100px",
                                                            height: "100px",
                                                            src: data.photo[0]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>router_default().push(`add-tour?id=${data?._id}`),
                                                                children: "Edit"
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            });
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_LocationsTable = (LocationsTable);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fvendor-dashboard%2Fusers%2Fcomponents%2FLocationsTable&preferredRegion=&absolutePagePath=private-next-pages%2Fvendor-dashboard%2Fusers%2Fcomponents%2FLocationsTable.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fvendor_dashboard_2Fusers_2Fcomponents_2FLocationsTable_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fusers_2Fcomponents_2FLocationsTable_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(LocationsTable_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/vendor-dashboard/users/components/LocationsTable","pathname":"/vendor-dashboard/users/components/LocationsTable","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: LocationsTable_namespaceObject,
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

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,330,5966,4493], () => (__webpack_exec__(82013)));
module.exports = __webpack_exports__;

})();