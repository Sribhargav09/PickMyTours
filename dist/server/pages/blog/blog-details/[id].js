"use strict";
(() => {
var exports = {};
exports.id = 2863;
exports.ids = [2863];
exports.modules = {

/***/ 83894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_2Fblog_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2Fblog_details_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/blog/blog-details/[id].js
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (_id_)
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
// EXTERNAL MODULE: ./data/blogs.js
var blogs = __webpack_require__(18132);
var blogs_default = /*#__PURE__*/__webpack_require__.n(blogs);
;// CONCATENATED MODULE: ./components/blog/blog-details/RelatedBlog.jsx



const RelatedBlog = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: blogs_default().slice(0, 4).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-lg-3 col-sm-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: `/blog/blog-details/${item.id}`,
                    className: "blogCard -type-2 d-block bg-white rounded-4 shadow-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "blogCard__image",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "rounded-4",
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
                            className: "px-20 py-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "text-dark-1 text-18 fw-500",
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-light-1 text-15 lh-14 mt-10",
                                    children: item.date
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const blog_details_RelatedBlog = (RelatedBlog);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
;// CONCATENATED MODULE: ./components/common/social/Social2.jsx

const Social2 = ()=>{
    const socialContent = [
        {
            id: 1,
            icon: "icon-facebook",
            link: "http://facebok.com/"
        },
        {
            id: 2,
            icon: "icon-twitter",
            link: "http://twitter.com/"
        },
        {
            id: 3,
            icon: "icon-instagram",
            link: "http://instagram.com/"
        },
        {
            id: 4,
            icon: "icon-linkedin",
            link: "http://linkedin.com/"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: socialContent.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-center size-40 rounded-full",
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: `${item.icon} text-14`
                })
            }, item.id))
    });
};
/* harmony default export */ const social_Social2 = (Social2);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/blog/blog-details/DetailsContent.jsx




const DetailsContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "text-20 fw-500",
                children: "What makes a good brand book?"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-15 mt-20",
                children: "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit gravida rutrum quisque non. At urna condimentum mattis pellentesque id nibh tortor. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat ac felis."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "list-disc text-15 mt-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: "At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: "Magna etiam tempor orci eu lobortis elementum."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: "Bibendum est ultricies integer quis. Semper eget duis at tellus."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "quote mt-30 mb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "quote__line bg-blue-1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "quote__icon",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/misc/quote-light.svg",
                            alt: "icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-18 fw-500",
                        children: "“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-15 mt-20",
                children: [
                    "Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper lectus aliquet nullam tempus id. Dignissim convallis quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed facilisis velit.",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus dictum sit euismod cum id. Dictum integer ultricies arcu fermentum fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod amet parturient turpis vitae. Faucibus ipsum felis et duis fames."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row y-gap-30 pt-30",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-md-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/img/blog/single/2.png",
                                alt: "image",
                                className: "rounded-4"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-15 mt-10",
                                children: "Donec purus posuere nullam lacus aliquam."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-md-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/img/blog/single/3.png",
                                alt: "image",
                                className: "rounded-4"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-15 mt-10",
                                children: "Donec purus posuere nullam lacus aliquam."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-15 mt-20",
                children: [
                    "Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper lectus aliquet nullam tempus id. Dignissim convallis quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed facilisis velit.",
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                    "Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus dictum sit euismod cum id. Dictum integer ultricies arcu fermentum fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod amet parturient turpis vitae. Faucibus ipsum felis et duis fames."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row y-gap-20 justify-between pt-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "d-flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "fw-500 mr-10",
                                    children: "Share"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "d-flex items-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(social_Social2, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row x-gap-10 y-gap-10",
                            children: blogs_default().slice(0, 3).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/blog/blog-details/${item.id}`,
                                        className: "button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize",
                                        children: item.tag
                                    })
                                }, item.id))
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_details_DetailsContent = (DetailsContent);

;// CONCATENATED MODULE: ./components/blog/blog-details/FormReply.jsx

const FormReply = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "row y-gap-30 pt-40",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-xl-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            className: "lh-1 text-16 text-light-1",
                            children: "Text"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-xl-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            className: "lh-1 text-16 text-light-1",
                            children: "Email"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "form-input ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                            required: true,
                            rows: 6,
                            defaultValue: ""
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            className: "lh-1 text-16 text-light-1",
                            children: "Write Your Comment"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    type: "submit",
                    href: "#",
                    className: "button -md -dark-1 bg-blue-1 text-white",
                    children: [
                        "Post Comment ",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "icon-arrow-top-right ml-15"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_details_FormReply = (FormReply);

;// CONCATENATED MODULE: ./components/blog/blog-details/TopComment.jsx

const TopComment = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row y-gap-30",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/img/avatars/4.png",
                    alt: "image",
                    className: "size-70 rounded-full"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-md",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "text-18 fw-500",
                        children: "Brooklyn Simmons"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-14 text-light-1",
                        children: "Medical Assistant"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-15 mt-10",
                        children: "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_details_TopComment = (TopComment);

;// CONCATENATED MODULE: ./components/blog/blog-details/BlogNavigator.jsx

const BlogNavigator = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row y-gap-30 justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "d-flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "icon-arrow-left text-20 mr-20"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-18 fw-500",
                                    children: "Prev"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-15 ml-40",
                            children: [
                                "5 awesome steps to get rid of",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                " stress and routine"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/img/general/menu.svg",
                    alt: "image",
                    className: "pt-20"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto text-right",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "d-flex items-center justify-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-18 fw-500",
                                    children: "Next"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "icon-arrow-right text-20 ml-20"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-15 mr-40",
                            children: [
                                "Happy clients leave positive",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                " feedback less often"
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_details_BlogNavigator = (BlogNavigator);

;// CONCATENATED MODULE: ./components/blog/blog-details/Comments.jsx

const Comments = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row y-gap-40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row x-gap-20 y-gap-20 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/avatars/2.png",
                                    alt: "image"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "fw-500 lh-15",
                                        children: "Tonko"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-14 text-light-1 lh-15",
                                        children: "March 2022"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "fw-500 text-blue-1 mt-20",
                        children: "9.2 Superb"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-15 text-dark-1 mt-10",
                        children: [
                            "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row x-gap-30 y-gap-30 pt-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/testimonials/1/1.png",
                                    alt: "image",
                                    className: "rounded-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/testimonials/1/2.png",
                                    alt: "image",
                                    className: "rounded-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/testimonials/1/3.png",
                                    alt: "image",
                                    className: "rounded-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/testimonials/1/4.png",
                                    alt: "image",
                                    className: "rounded-4"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex x-gap-30 items-center pt-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "d-flex items-center text-blue-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-like text-16 mr-10"
                                    }),
                                    "Helpful"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "d-flex items-center text-light-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-dislike text-16 mr-10"
                                    }),
                                    "Not helpful"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row x-gap-20 y-gap-20 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/avatars/2.png",
                                    alt: "image"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "fw-500 lh-15",
                                        children: "Tonko"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-14 text-light-1 lh-15",
                                        children: "March 2022"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "fw-500 text-blue-1 mt-20",
                        children: "9.2 Superb"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-15 text-dark-1 mt-10",
                        children: [
                            "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex x-gap-30 items-center pt-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "d-flex items-center text-blue-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-like text-16 mr-10"
                                    }),
                                    "Helpful"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "d-flex items-center text-light-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-dislike text-16 mr-10"
                                    }),
                                    "Not helpful"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    href: "#",
                    className: "button -md -outline-blue-1 text-blue-1",
                    children: [
                        "Show all 116 reviews ",
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "icon-arrow-top-right ml-15"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_details_Comments = (Comments);

;// CONCATENATED MODULE: ./pages/blog/blog-details/[id].js















const BlogSingleDynamic = ()=>{
    const router = (0,router_.useRouter)();
    const [blog, setBlogItem] = (0,external_react_.useState)({});
    const id = router.query.id;
    (0,external_react_.useEffect)(()=>{
        if (!id) /*#__PURE__*/ jsx_runtime.jsx("h1", {
            children: "Loading..."
        });
        else setBlogItem(blogs_default().find((item)=>item.id == id));
        return ()=>{};
    }, [
        id
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Blog Single"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(LocationTopBar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-40 justify-center text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 fw-500 text-blue-1 mb-8 text-capitalize",
                                            children: blog?.tag
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                            className: "text-30 fw-600",
                                            children: blog?.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 text-light-1 mt-10",
                                            children: blog?.date
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: blog?.img,
                                        alt: blog?.title,
                                        className: "col-12 rounded-8 w-100 img_large_details"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-8 col-lg-10 layout-pt-md",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(blog_details_DetailsContent, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "border-top-light border-bottom-light py-30 mt-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(blog_details_TopComment, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "border-bottom-light py-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(blog_details_BlogNavigator, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "text-22 fw-500 mb-15 pt-30",
                                        children: "Guest reviews"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(blog_details_Comments, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "border-top-light pt-40 mt-40"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-22 fw-500",
                                                    children: "Leave a Reply"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-15 text-dark-1 mt-5",
                                                    children: "Your email address will not be published."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(blog_details_FormReply, {})
                                ]
                            })
                        })
                    ]
                })
            }),
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
                                            children: "Related content"
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
                            className: "row y-gap-30 pt-40",
                            children: /*#__PURE__*/ jsx_runtime.jsx(blog_details_RelatedBlog, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const _id_ = (BlogSingleDynamic);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog%2Fblog-details%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fblog%2Fblog-details%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_2Fblog_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblog_2Fblog_details_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog/blog-details/[id]","pathname":"/blog/blog-details/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _id_namespaceObject,
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,627,7602,4609,164,8132,9898,2538], () => (__webpack_exec__(83894)));
module.exports = __webpack_exports__;

})();