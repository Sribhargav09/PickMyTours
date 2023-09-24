"use strict";
exports.id = 4609;
exports.ids = [4609];
exports.modules = {

/***/ 94609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ footer_default)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/footer/default/AppButton.jsx

const AppButton = ()=>{
    const appContent = [
        {
            id: 1,
            icon: "icon-apple",
            link: "https://www.apple.com/app-store/",
            text: "Download on the",
            market: "Apple Store",
            colClass: ""
        },
        {
            id: 2,
            icon: "icon-play-market",
            link: "https://play.google.com/store/apps/?hl=en&gl=US",
            text: "Get in on",
            market: "Google Play",
            colClass: "mt-20"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: appContent.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `d-flex items-center px-20 py-10 rounded-4 border-light  ${item.colClass}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: `${item.icon} text-24`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: item.link,
                        className: "ml-20 d-block",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-14 text-light-1",
                                children: item.text
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-15 lh-1 fw-500",
                                children: item.market
                            })
                        ]
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const default_AppButton = (AppButton);

;// CONCATENATED MODULE: ./components/footer/default/ContactInfo.jsx

const ContactInfo = ()=>{
    const contactContent = [
        {
            id: 1,
            title: "Toll Free Customer Care",
            action: "tel:(+91) 9000319957",
            text: "(+91) 9000319957"
        },
        {
            id: 2,
            title: "Need live support?",
            action: "mailto:info@pickmytours.com",
            text: "info@pickmytours.com"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: contactContent.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-14 mt-30",
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: item.action,
                        className: "text-18 fw-500 text-blue-1 mt-5",
                        children: item.text
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const default_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./components/common/social/Social.jsx
var Social = __webpack_require__(68165);
;// CONCATENATED MODULE: ./components/footer/default/Copyright.jsx


const Copyright = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row justify-between items-center y-gap-10",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row x-gap-30 y-gap-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " by",
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "https://themeforest.net/user/ib-themes",
                                        className: "mx-2",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "ib-themes"
                                    }),
                                    "All rights reserved."
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex x-gap-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Privacy"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Terms"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Site Map"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row y-gap-10 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "d-flex items-center text-14 fw-500 text-dark-1 mr-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "icon-globe text-16 mr-10"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "underline",
                                                children: "English (US)"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "d-flex items-center text-14 fw-500 text-dark-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "icon-usd text-16 mr-10"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "underline",
                                                children: "USD"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "d-flex x-gap-20 items-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx(Social/* default */.Z, {})
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const default_Copyright = (Copyright);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/footerContent.js
var footerContent = __webpack_require__(40627);
var footerContent_default = /*#__PURE__*/__webpack_require__.n(footerContent);
;// CONCATENATED MODULE: ./components/footer/default/FooterContent.jsx



const FooterContent = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: footerContent_default().map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-xl-2 col-lg-4 col-sm-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-16 fw-500 mb-30",
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "d-flex y-gap-10 flex-column",
                        children: item.menuList.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: menu.routerPath,
                                children: menu.name
                            }, i))
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const default_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./components/footer/default/index.jsx





const index = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "footer -type-1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-60 pb-60",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row y-gap-40 justify-between xl:justify-start",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-2 col-lg-4 col-sm-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "text-16 fw-500 mb-30",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(default_ContactInfo, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(default_FooterContent, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-2 col-lg-4 col-sm-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "text-16 fw-500 mb-30",
                                        children: "Mobile"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(default_AppButton, {})
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "py-20 border-top-light",
                    children: /*#__PURE__*/ jsx_runtime.jsx(default_Copyright, {})
                })
            ]
        })
    });
};
/* harmony default export */ const footer_default = (index);


/***/ })

};
;