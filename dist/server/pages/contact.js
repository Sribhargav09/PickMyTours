"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 37264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/contact.js
var contact_namespaceObject = {};
__webpack_require__.r(contact_namespaceObject);
__webpack_require__.d(contact_namespaceObject, {
  "default": () => (contact)
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
// EXTERNAL MODULE: ./components/block/BlockGuide.jsx
var BlockGuide = __webpack_require__(25840);
;// CONCATENATED MODULE: ./components/block/Address.jsx

const Address = ()=>{
    const addressContent = [
        {
            id: 1,
            colClass: "col-lg-3",
            title: "Address",
            content: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "328 Queensberry Street, North Melbourne VIC 3051, Australia."
            })
        },
        {
            id: 2,
            colClass: "col-auto",
            title: "Toll Free Customer Care",
            content: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: "tel:+4733378901",
                    children: "+47 333 78 901"
                })
            })
        },
        {
            id: 3,
            colClass: "col-auto",
            title: "Need live support?",
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "mailto:i@pickmytours.com",
                        children: "info@pickmytours.com"
                    })
                ]
            })
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: addressContent.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${item.colClass}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-14 text-light-1",
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-18 fw-500 mt-10",
                        children: item.content
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const block_Address = (Address);

// EXTERNAL MODULE: ./components/common/social/Social.jsx
var Social = __webpack_require__(68165);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./components/common/ContactForm.jsx


const ContactForm = ()=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
    // handle form submission logic here
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "row y-gap-20 pt-20",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            id: "name",
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            htmlFor: "name",
                            className: "lh-1 text-16 text-light-1",
                            children: "Full Name"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "email",
                            id: "email",
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            htmlFor: "email",
                            className: "lh-1 text-16 text-light-1",
                            children: "Email"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            id: "subject",
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            htmlFor: "subject",
                            className: "lh-1 text-16 text-light-1",
                            children: "Subject"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                            id: "message",
                            required: true,
                            rows: "4"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            htmlFor: "message",
                            className: "lh-1 text-16 text-light-1",
                            children: "Your Message"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    type: "submit",
                    className: "button px-24 h-50 -dark-1 bg-blue-1 text-white",
                    children: [
                        "Send Message ",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "icon-arrow-top-right ml-15"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_ContactForm = (ContactForm);

// EXTERNAL MODULE: ./components/common/LocationTopBar.jsx
var LocationTopBar = __webpack_require__(62538);
;// CONCATENATED MODULE: ./pages/contact.js











const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Contact"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(LocationTopBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "map-outer",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "map-canvas",
                    children: /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182586.0420340798!2d-73.99038430252834!3d40.749936548349346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1670824458615!5m2!1sen!2sbd",
                        loading: "lazy"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "relative container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-end",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-5 col-lg-7",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-22 fw-500",
                                    children: "Send a message"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(common_ContactForm, {})
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row x-gap-80 y-gap-20 justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-30 sm:text-24 fw-600",
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(block_Address, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-14 text-light-1",
                                        children: "Follow us on social media"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "d-flex x-gap-20 items-center mt-10",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(Social/* default */.Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-lg bg-blue-2",
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
                                            children: "Why Choose Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "These popular destinations have a lot to offer"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-40 justify-between pt-50",
                            children: /*#__PURE__*/ jsx_runtime.jsx(BlockGuide/* default */.Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const contact = (dynamic_default()(()=>Promise.resolve(Contact), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcontact&preferredRegion=&absolutePagePath=private-next-pages%2Fcontact.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcontact_preferredRegion_absolutePagePath_private_next_pages_2Fcontact_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(contact_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(contact_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(contact_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(contact_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/contact","pathname":"/contact","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: contact_namespaceObject,
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,5152,330,8443,3828,6746,627,7602,4609,164,9898,5840,2538], () => (__webpack_exec__(37264)));
module.exports = __webpack_exports__;

})();