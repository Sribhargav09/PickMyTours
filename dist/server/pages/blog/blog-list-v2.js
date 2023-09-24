"use strict";
(() => {
var exports = {};
exports.id = 8913;
exports.ids = [8913];
exports.modules = {

/***/ 44021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_2Fblog_list_v2_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2Fblog_list_v2_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/blog/blog-list-v2.js
var blog_list_v2_namespaceObject = {};
__webpack_require__.r(blog_list_v2_namespaceObject);
__webpack_require__.d(blog_list_v2_namespaceObject, {
  "default": () => (blog_list_v2)
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
// EXTERNAL MODULE: ./components/footer/default/index.jsx + 4 modules
var footer_default = __webpack_require__(94609);
// EXTERNAL MODULE: ./components/common/LocationTopBar.jsx
var LocationTopBar = __webpack_require__(62538);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/blogs.js
var blogs = __webpack_require__(18132);
var blogs_default = /*#__PURE__*/__webpack_require__.n(blogs);
;// CONCATENATED MODULE: ./components/blog/Blog2.jsx




const Blog2 = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: blogs_default().slice(4, 9).map((item)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: `/blog/blog-details/${item.id}`,
                className: "blogCard -type-1 col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row y-gap-15 items-center md:justify-center md:text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "blogCard__image rounded-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 250,
                                    height: 250,
                                    className: "cover w-100 img-fluid",
                                    src: item.img,
                                    alt: "image"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-lg-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-15 text-light-1",
                                    children: item.date
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-22 text-dark-1 mt-10 md:mt-5",
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-15 lh-16 text-light-1 mt-10 md:mt-5",
                                    children: item.details
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const blog_Blog2 = (Blog2);

;// CONCATENATED MODULE: ./components/blog/blog-sidebar/components/Categories.jsx


const Categories = ()=>{
    const catContent = [
        {
            id: 1,
            name: "Hotel",
            number: "92"
        },
        {
            id: 2,
            name: "Car",
            number: "55"
        },
        {
            id: 3,
            name: "Holiday Rental",
            number: "75"
        },
        {
            id: 4,
            name: "Travel Guides",
            number: "62"
        },
        {
            id: 5,
            name: "Flights",
            number: "34"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: catContent.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                href: "/blog/blog-list-v1",
                className: "d-flex items-center justify-between text-dark-1",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-15 text-dark-1",
                        children: item.name
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-14 text-light-1",
                        children: item.number
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const components_Categories = (Categories);

;// CONCATENATED MODULE: ./components/blog/blog-sidebar/components/RecentPost.jsx




const RecentPost = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: blogs_default().slice(3, 6).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "d-flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            width: 65,
                            height: 65,
                            className: "size-65 rounded-8",
                            src: item.img,
                            alt: "image"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "ml-15",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    className: "text-15 lh-15 fw-500",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/blog/blog-details/${item.id}`,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-13 lh-1 mt-5",
                                    children: item.date
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const components_RecentPost = (RecentPost);

;// CONCATENATED MODULE: ./components/blog/blog-sidebar/components/SearchBox.jsx

const SearchBox = ()=>{
    function handleSubmit(e) {
        e.preventDefault();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "single-field relative d-flex items-center py-10",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "pl-50 border-light text-dark-1 h-50 rounded-8",
                type: "email",
                placeholder: "Search"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "absolute d-flex items-center h-full",
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "icon-search text-20 px-15 text-dark-1"
                })
            })
        ]
    });
};
/* harmony default export */ const components_SearchBox = (SearchBox);

;// CONCATENATED MODULE: ./components/blog/blog-sidebar/components/Tags.jsx



const Tags = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: blogs_default().slice(0, 7).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: `/blog/blog-details/${item.id}`,
                    className: "button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize",
                    children: item.tag
                })
            }, item.id))
    });
};
/* harmony default export */ const components_Tags = (Tags);

;// CONCATENATED MODULE: ./components/blog/blog-sidebar/index.jsx





const index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "sidebar -blog",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item -no-border",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Search"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_SearchBox, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "y-gap-5",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_Categories, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Recent Posts"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row y-gap-20 pt-10",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_RecentPost, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Tags"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row x-gap-10 y-gap-10 pt-10",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_Tags, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_sidebar = (index);

// EXTERNAL MODULE: ./components/blog/BlogPagination.jsx
var BlogPagination = __webpack_require__(71272);
;// CONCATENATED MODULE: ./pages/blog/blog-list-v2.js










const BlogListV2 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Blog List V2"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(LocationTopBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
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
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row y-gap-30 justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row y-gap-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(blog_Blog2, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(BlogPagination/* default */.Z, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx(blog_sidebar, {})
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const blog_list_v2 = (BlogListV2);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog%2Fblog-list-v2&preferredRegion=&absolutePagePath=private-next-pages%2Fblog%2Fblog-list-v2.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_2Fblog_list_v2_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2Fblog_list_v2_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_list_v2_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog/blog-list-v2","pathname":"/blog/blog-list-v2","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: blog_list_v2_namespaceObject,
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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,627,7602,4609,164,8132,9898,2538,1272], () => (__webpack_exec__(44021)));
module.exports = __webpack_exports__;

})();