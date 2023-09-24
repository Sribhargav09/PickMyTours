"use strict";
(() => {
var exports = {};
exports.id = 5911;
exports.ids = [5911];
exports.modules = {

/***/ 21988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fvendor_dashboard_2Fadd_hotel_2Fcomponents_2FAvatarUploader_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fadd_hotel_2Fcomponents_2FAvatarUploader_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/vendor-dashboard/add-hotel/components/AvatarUploader.jsx
var AvatarUploader_namespaceObject = {};
__webpack_require__.r(AvatarUploader_namespaceObject);
__webpack_require__.d(AvatarUploader_namespaceObject, {
  "default": () => (components_AvatarUploader)
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./pages/vendor-dashboard/add-hotel/components/AvatarUploader.jsx



const AvatarUploader = ()=>{
    const [image, setImage] = (0,external_react_.useState)("");
    const [error, setError] = (0,external_react_.useState)("");
    const [success, setSuccess] = (0,external_react_.useState)(false);
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        if (!file) {
            setError("Please select an image.");
            setSuccess(false);
            return;
        }
        if (file.size > 800 * 1024) {
            setError("Image must be smaller than 800KB.");
            setSuccess(false);
            return;
        }
        if (!file.type.startsWith("image/")) {
            setError("Only image files are allowed.");
            setSuccess(false);
            return;
        }
        reader.onload = ()=>{
            setImage(reader.result);
            setSuccess(true);
            setError("");
        };
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row y-gap-30 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: image ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "d-flex ratio ratio-1:1 w-200",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            width: 200,
                            height: 200,
                            src: image,
                            alt: "avatar",
                            className: "img-ratio rounded-4"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                onClick: ()=>setImage(""),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon-trash text-16"
                                })
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "d-flex ratio ratio-1:1 w-200",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            width: 200,
                            height: 200,
                            src: "/img/misc/avatar-1.png",
                            alt: "image",
                            className: "img-ratio rounded-4"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon-trash text-16"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "text-16 fw-500",
                        children: "Your avatar"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-14 mt-5",
                        children: "PNG or JPG no bigger than 800px wide and tall."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-inline-block mt-15",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                htmlFor: "avatar-upload",
                                role: "button",
                                className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-upload-file text-20 mr-10"
                                    }),
                                    "Browse"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "file",
                                id: "avatar-upload",
                                accept: "image/png, image/jpeg",
                                onChange: handleImageChange,
                                style: {
                                    display: "none"
                                }
                            })
                        ]
                    }),
                    error && !success && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-red-1 mt-1",
                        children: error
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AvatarUploader = (AvatarUploader);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fvendor-dashboard%2Fadd-hotel%2Fcomponents%2FAvatarUploader&preferredRegion=&absolutePagePath=private-next-pages%2Fvendor-dashboard%2Fadd-hotel%2Fcomponents%2FAvatarUploader.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fvendor_dashboard_2Fadd_hotel_2Fcomponents_2FAvatarUploader_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fadd_hotel_2Fcomponents_2FAvatarUploader_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(AvatarUploader_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/vendor-dashboard/add-hotel/components/AvatarUploader","pathname":"/vendor-dashboard/add-hotel/components/AvatarUploader","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: AvatarUploader_namespaceObject,
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

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,330], () => (__webpack_exec__(21988)));
module.exports = __webpack_exports__;

})();