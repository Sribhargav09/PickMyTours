"use strict";
(() => {
var exports = {};
exports.id = 3818;
exports.ids = [3818];
exports.modules = {

/***/ 1808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_2Fblog_list_v1_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2Fblog_list_v1_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/blog/blog-list-v1.js
var blog_list_v1_namespaceObject = {};
__webpack_require__.r(blog_list_v1_namespaceObject);
__webpack_require__.d(blog_list_v1_namespaceObject, {
  "default": () => (blog_list_v1)
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
// EXTERNAL MODULE: ./components/common/CallToActions.jsx
var CallToActions = __webpack_require__(10164);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./components/header/default-header/index.jsx
var default_header = __webpack_require__(39898);
// EXTERNAL MODULE: ./components/common/LocationTopBar.jsx
var LocationTopBar = __webpack_require__(62538);
// EXTERNAL MODULE: ./components/footer/default/index.jsx + 4 modules
var footer_default = __webpack_require__(94609);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/blogs.js
var blogs = __webpack_require__(18132);
var blogs_default = /*#__PURE__*/__webpack_require__.n(blogs);
// EXTERNAL MODULE: ./components/blog/BlogPagination.jsx
var BlogPagination = __webpack_require__(71272);
;// CONCATENATED MODULE: ./components/blog/Blog1.jsx






const Blog1 = ()=>{
    const [filterOption, setFilterOption] = (0,external_react_.useState)("art_culture");
    const filterOptions = [
        {
            label: "Art and culture",
            value: "art_culture"
        },
        {
            label: "Beaches",
            value: "beaches"
        },
        {
            label: "Adventure travel",
            value: "adventure_travel"
        },
        {
            label: "Explore",
            value: "explore"
        },
        {
            label: "Family holidays",
            value: "family_holidays"
        },
        {
            label: "Air travel",
            value: "air_travel"
        },
        {
            label: "Food and drink",
            value: "food_drink"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tabs -pills-3 pt-30 js-tabs",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tabs__controls row x-gap-10 justify-center js-tabs-controls",
                    children: filterOptions.map((option)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: `tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${filterOption === option.value ? "is-tab-el-active" : ""}`,
                                onClick: ()=>setFilterOption(option.value),
                                children: option.label
                            })
                        }, option.value))
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row y-gap-30 pt-30",
                    children: blogs_default().slice(0, 9).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/blog/blog-details/${item.id}`,
                                className: "blogCard -type-1 d-block ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "blogCard__image",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "rounded-8",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 400,
                                                height: 300,
                                                className: "cover w-100 img-fluid",
                                                src: item.img,
                                                alt: "image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "pt-20",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                className: "text-dark-1 text-18 fw-500",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-light-1 text-15 lh-14 mt-5",
                                                children: item.date
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, item.id))
                }),
                /*#__PURE__*/ jsx_runtime.jsx(BlogPagination/* default */.Z, {})
            ]
        })
    });
};
/* harmony default export */ const blog_Blog1 = (Blog1);

;// CONCATENATED MODULE: ./pages/blog/blog-list-v1.js








const BlogListV1 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Blog List V1"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(LocationTopBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
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
                                            children: "Travel articles"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "Lorem ipsum is placeholder text commonly used in site."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(blog_Blog1, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const blog_list_v1 = (BlogListV1);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog%2Fblog-list-v1&preferredRegion=&absolutePagePath=private-next-pages%2Fblog%2Fblog-list-v1.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_2Fblog_list_v1_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2Fblog_list_v1_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_list_v1_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog/blog-list-v1","pathname":"/blog/blog-list-v1","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: blog_list_v1_namespaceObject,
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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,627,7602,4609,164,8132,9898,2538,1272], () => (__webpack_exec__(1808)));
module.exports = __webpack_exports__;

})();