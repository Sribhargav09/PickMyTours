"use strict";
(() => {
var exports = {};
exports.id = 7715;
exports.ids = [7715];
exports.modules = {

/***/ 19243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fothers_pages_2Fabout_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Fabout_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/others-pages/about.js
var about_namespaceObject = {};
__webpack_require__.r(about_namespaceObject);
__webpack_require__.d(about_namespaceObject, {
  "default": () => (about)
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/about/Block1.jsx


const Block1 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-lg-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-30 fw-600",
                        children: "About pickmytours.com"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "mt-5",
                        children: "These popular destinations have a lot to offer"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-dark-1 mt-60 lg:mt-40 md:mt-20",
                        children: [
                            "London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that’s the envy of other global superpowers.",
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                            "Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions like the British Museum as well as see how far it has come by simply riding the Tube and passing by celebrated landmarks like Buckingham Palace, Westminster Abbey, and marvels like Big Ben, the London Eye, and the Tower Bridge."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    width: 400,
                    height: 400,
                    src: "/img/pages/about/2.png",
                    alt: "image",
                    className: "rounded-4 w-100"
                })
            })
        ]
    });
};
/* harmony default export */ const about_Block1 = (Block1);

// EXTERNAL MODULE: ./components/counter/Counter.jsx
var Counter = __webpack_require__(52009);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(38096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./data/teamData.js
var teamData = __webpack_require__(89145);
var teamData_default = /*#__PURE__*/__webpack_require__.n(teamData);
;// CONCATENATED MODULE: ./components/team/Team1.jsx




const Team1 = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    };
    // custom navigation
    function Arrow(props) {
        let name = props.type === "next" ? "arrow-top-right d-flex items-center text-24 arrow-right-hover arrow-next" : "arrow-top-right d-flex items-center text-24 arrow-left-hover arro-prev";
        const char = props.type === "next" ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                className: "icon icon-arrow-right"
            })
        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "icon icon-arrow-left"
            })
        });
        return /*#__PURE__*/ jsx_runtime.jsx("button", {
            className: name,
            onClick: props.onClick,
            children: char
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
            ...settings,
            nextArrow: /*#__PURE__*/ jsx_runtime.jsx(Arrow, {
                type: "next"
            }),
            prevArrow: /*#__PURE__*/ jsx_runtime.jsx(Arrow, {
                type: "prev"
            }),
            children: teamData_default().map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "swiper-slide",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            width: 234,
                            height: 300,
                            src: item.img,
                            alt: "image",
                            className: "rounded-4 col-12"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-18 lh-15 fw-500",
                                    children: item.name
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-14 lh-15",
                                    children: item.designation
                                })
                            ]
                        })
                    ]
                }, item.id))
        })
    });
};
/* harmony default export */ const team_Team1 = (Team1);

// EXTERNAL MODULE: ./components/testimonial/Testimonial.jsx
var Testimonial = __webpack_require__(54439);
// EXTERNAL MODULE: ./components/counter/Counter2.jsx
var Counter2 = __webpack_require__(11118);
// EXTERNAL MODULE: ./components/brand/Brand.jsx
var Brand = __webpack_require__(60626);
;// CONCATENATED MODULE: ./pages/others-pages/about.js














const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "About"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "section-bg layout-pt-lg layout-pb-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "section-bg__item col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            width: 1920,
                            height: 400,
                            src: "/img/pages/about/1.png",
                            alt: "image",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-6 col-lg-8 col-md-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "text-40 md:text-25 fw-600 text-white",
                                        children: "Looking for joy?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-white mt-15",
                                        children: "Your trusted trip companion"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-md",
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row y-gap-30 justify-between items-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx(about_Block1, {})
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "pt-60",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "border-bottom-light pb-40",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Counter/* default */.Z, {})
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Our Team"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "Lorem ipsum dolor sit amet"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: " pt-40 js-section-slider",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item_gap-x30",
                                children: /*#__PURE__*/ jsx_runtime.jsx(team_Team1, {})
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "section-bg layout-pt-lg layout-pb-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "section-bg__item -mx-20 bg-light-2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                                children: "Overheard from travelers"
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
                                className: "overflow-hidden pt-80 js-section-slider",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "item_gap-x30",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Testimonial/* default */.Z, {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row y-gap-30 items-center pt-40 sm:pt-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(Counter2/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-8",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "row y-gap-30 justify-between items-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(Brand/* default */.Z, {})
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const about = (dynamic_default()(()=>Promise.resolve(About), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fothers-pages%2Fabout&preferredRegion=&absolutePagePath=private-next-pages%2Fothers-pages%2Fabout.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fothers_pages_2Fabout_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Fabout_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(about_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(about_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(about_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/others-pages/about","pathname":"/others-pages/about","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: about_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 89145:
/***/ ((module) => {


module.exports = [
    {
        id: 1,
        img: "/img/team/1.png",
        name: "Cody Fisher",
        designation: "Medical Assistant"
    },
    {
        id: 2,
        img: "/img/team/2.png",
        name: "Dianne Russell",
        designation: "Web Designer"
    },
    {
        id: 3,
        img: "/img/team/3.png",
        name: "Jerome Bell",
        designation: "Marketing Coordinator"
    },
    {
        id: 4,
        img: "/img/team/4.png",
        name: "Theresa Webb",
        designation: "Nursing Assistant"
    },
    {
        id: 5,
        img: "/img/team/5.png",
        name: "Cameron Williamson",
        designation: "Dog Trainer"
    },
    {
        id: 6,
        img: "/img/team/6.png",
        name: "Courtney Henry",
        designation: "Medical Assistant"
    },
    {
        id: 7,
        img: "/img/team/7.png",
        name: "Theresa Williamson",
        designation: "Web Designer"
    }
];


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

/***/ 38096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,5152,330,8443,3828,6746,627,7602,4609,164,9898,2627,5840,4439,4856], () => (__webpack_exec__(19243)));
module.exports = __webpack_exports__;

})();