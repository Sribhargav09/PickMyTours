"use strict";
exports.id = 3828;
exports.ids = [3828];
exports.modules = {

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
                    children: pageTitle && `${pageTitle} || GoTrip - Travel & Tour React NextJS Template}`
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

/***/ 68165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Social = ()=>{
    const socialContent = [
        {
            id: 1,
            icon: "icon-facebook",
            link: "https://facebok.com/"
        },
        {
            id: 2,
            icon: "icon-twitter",
            link: "https://twitter.com/"
        },
        {
            id: 3,
            icon: "icon-instagram",
            link: "https://instagram.com/"
        },
        {
            id: 4,
            icon: "icon-linkedin",
            link: "https://linkedin.com/"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: socialContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: `${item.icon} text-14`
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 86624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ header_MobileMenu)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "react-pro-sidebar"
var external_react_pro_sidebar_ = __webpack_require__(41981);
// EXTERNAL MODULE: ./data/mainMenuData.js
var mainMenuData = __webpack_require__(51967);
// EXTERNAL MODULE: ./utils/linkActiveChecker.js
var linkActiveChecker = __webpack_require__(58443);
// EXTERNAL MODULE: ./components/common/social/Social.jsx
var Social = __webpack_require__(68165);
;// CONCATENATED MODULE: ./components/header/ContactInfo.jsx

const ContactInfo = ()=>{
    const contactContent = [
        {
            id: 1,
            title: "Toll Free Customer Care",
            action: "tel:+(1) 123 456 7890",
            text: "+(1) 123 456 7890"
        },
        {
            id: 2,
            title: "Need live support?",
            action: "mailto:xyz@abc.com",
            text: "hi@gotrip.com"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: contactContent.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-14",
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: item.action,
                        className: "text-18 fw-500 text-dark-1 mt-5",
                        children: item.text
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const header_ContactInfo = (ContactInfo);

;// CONCATENATED MODULE: ./components/header/MobileMenu.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const MobileMenu = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pro-header d-flex align-items-center justify-between border-bottom-light",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/general/logo.png",
                            alt: "brand"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "fix-icon",
                        "data-bs-dismiss": "offcanvas",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "icon icon-close"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.ProSidebarProvider, {
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.Sidebar, {
                    width: "400",
                    backgroundColor: "#fff",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_pro_sidebar_.Menu, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                label: "Home",
                                children: mainMenuData/* homeItems */.YW.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                        component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.routePath,
                                            className: (0,linkActiveChecker/* isActiveLink */.H_)(item.routePath, router.asPath) ? "menu-active-link" : ""
                                        }),
                                        children: item.name
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                label: "Categories",
                                children: mainMenuData/* categorieMobileItems */.Qt.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                        label: item.title,
                                        children: item.menuItems.map((single)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                                label: single.title,
                                                children: single.menuList.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                                        component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: menu.routePath,
                                                            className: (0,linkActiveChecker/* isActiveLink */.H_)(menu.routePath, router.asPath) ? "menu-active-link" : ""
                                                        }),
                                                        children: menu.name
                                                    }, i))
                                            }, single.id))
                                    }, item.id))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/destinations",
                                    className: router.pathname === "/destinations" ? "menu-active-link" : ""
                                }),
                                children: "Desitinations"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                label: "Blog",
                                children: mainMenuData/* blogItems */.Qe.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                        component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.routePath,
                                            className: (0,linkActiveChecker/* isActiveLink */.H_)(item.routePath, router.asPath) ? "menu-active-link" : ""
                                        }),
                                        children: item.name
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                label: "Pages",
                                children: mainMenuData/* pageItems */.F0.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                        component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.routePath,
                                            className: (0,linkActiveChecker/* isActiveLink */.H_)(item.routePath, router.asPath) ? "menu-active-link" : ""
                                        }),
                                        children: item.name
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.SubMenu, {
                                label: "Dashboard",
                                children: mainMenuData/* dashboardItems */.i9.map((item, i)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                        component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.routePath,
                                            className: (0,linkActiveChecker/* isActiveLink */.H_)(item.routePath, router.asPath) ? "menu-active-link" : ""
                                        }),
                                        children: item.name
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(external_react_pro_sidebar_.MenuItem, {
                                component: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/contact",
                                    className: router.pathname === "/contact" ? "menu-active-link" : ""
                                }),
                                children: "Contact"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mobile-footer px-20 py-5 border-top-light"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pro-footer",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(header_ContactInfo, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                className: "text-16 fw-500 mb-10",
                                children: "Follow us on social media"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "d-flex x-gap-20 items-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx(Social/* default */.Z, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-20",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            className: " button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white",
                            href: "/others-pages/login",
                            children: "Become An Expert"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_MobileMenu = (MobileMenu);


/***/ }),

/***/ 51967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F0: () => (/* binding */ pageItems),
/* harmony export */   Qe: () => (/* binding */ blogItems),
/* harmony export */   Qt: () => (/* binding */ categorieMobileItems),
/* harmony export */   YW: () => (/* binding */ homeItems),
/* harmony export */   i9: () => (/* binding */ dashboardItems)
/* harmony export */ });
/* unused harmony export categorieMegaMenuItems */
const homeItems = [
    {
        name: "Home 01",
        routePath: "/"
    },
    {
        name: "Home 02",
        routePath: "/home/home_2"
    },
    {
        name: "Home 03",
        routePath: "/home/home_3"
    },
    {
        name: "Home 04",
        routePath: "/home/home_4"
    },
    {
        name: "Home 05",
        routePath: "/home/home_5"
    },
    {
        name: "Home 06",
        routePath: "/home/home_6"
    },
    {
        name: "Home 07",
        routePath: "/home/home_7"
    },
    {
        name: "Home 08",
        routePath: "/home/home_8"
    },
    {
        name: "Home 09",
        routePath: "/home/home_9"
    },
    {
        name: "Home 10",
        routePath: "/home/home_10"
    }
];
const blogItems = [
    {
        name: "Blog List V1",
        routePath: "/blog/blog-list-v1"
    },
    {
        name: "Blog List V2",
        routePath: "/blog/blog-list-v2"
    },
    {
        name: "Blog Single",
        routePath: "/blog/blog-details/1"
    }
];
const pageItems = [
    {
        name: "404",
        routePath: "/404"
    },
    {
        name: "About",
        routePath: "/others-pages/about"
    },
    {
        name: "Become Expert",
        routePath: "/others-pages/become-expert"
    },
    {
        name: "Help Center",
        routePath: "/others-pages/help-center"
    },
    {
        name: "Login",
        routePath: "/others-pages/login"
    },
    {
        name: "Register",
        routePath: "/others-pages/signup"
    },
    {
        name: "Terms",
        routePath: "/others-pages/terms"
    },
    {
        name: "Invoice",
        routePath: "/others-pages/invoice"
    },
    {
        name: "UI Elements",
        routePath: "/others-pages/ui-elements"
    }
];
const dashboardItems = [
    {
        name: "admin",
        routePath: "/dashboard/db-dashboard"
    },
    {
        name: "Booking History",
        routePath: "/dashboard/db-booking"
    },
    {
        name: "Wishlist",
        routePath: "/dashboard/db-wishlist"
    },
    {
        name: "Settings",
        routePath: "/dashboard/db-settings"
    },
    // {
    //   name: "Dashboard",
    //   routePath: "/admin/dashboard",
    // },
    // {
    //   name: "Add Tour",
    //   routePath: "/admin/dashboard/add-tour",
    // },
    {
        name: "Tours",
        routePath: "/admin/dashboard/tours"
    },
    // {
    //   name: "Vendor Dashboard",
    //   routePath: "/vendor-dashboard/dashboard",
    // },
    // {
    //   name: "Vendor Add Hotel",
    //   routePath: "/vendor-dashboard/add-hotel",
    // },
    // {
    //   name: "Vendor Booking",
    //   routePath: "/vendor-dashboard/booking",
    // },
    // {
    //   name: "Vendor Hotels",
    //   routePath: "/vendor-dashboard/hotels",
    // },
    // {
    //   name: "Vendor Recovery",
    //   routePath: "/vendor-dashboard/recovery",
    // },
    {
        name: "Logout",
        routePath: "/others-pages/login"
    }
];
const categorieMegaMenuItems = [
    {
        id: 1,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/7.png",
                title: "Things to do on your hotel",
                btnText: "See Hotel",
                btnRoute: "/hotel/hotel-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Hotel List",
                        menuList: [
                            {
                                name: "Hotel List v1",
                                routePath: "/hotel/hotel-list-v1"
                            },
                            {
                                name: "Hotel List v2",
                                routePath: "/hotel/hotel-list-v2"
                            },
                            {
                                name: "Hotel List v3",
                                routePath: "/hotel/hotel-list-v3"
                            },
                            {
                                name: "Hotel List v4",
                                routePath: "/hotel/hotel-list-v4"
                            },
                            {
                                name: "Hotel List v5",
                                routePath: "/hotel/hotel-list-v5"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Hotel Single",
                        menuList: [
                            {
                                name: "Hotel Single v1",
                                routePath: "/hotel/hotel-single-v1/5"
                            },
                            {
                                name: "Hotel Single v2",
                                routePath: "/hotel/hotel-single-v2/3"
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: "Hotel Booking",
                        menuList: [
                            {
                                name: "Booking Page",
                                routePath: "/hotel/booking-page"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/8.png",
                title: "Things to do on your tour",
                btnText: "See Tour",
                btnRoute: "/tour/tour-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Tour List",
                        menuList: [
                            {
                                name: "Tour List v1",
                                routePath: "/tour/tour-list-v1"
                            },
                            {
                                name: "Tour List v2",
                                routePath: "/tour/tour-list-v2"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Tour Pages",
                        menuList: [
                            {
                                name: "Tour Map",
                                routePath: "/tour/tour-list-v3"
                            },
                            {
                                name: "Tour Single",
                                routePath: "/tour/tour-single/5"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/9.png",
                title: "Things to do on your activity",
                btnText: "See Activity",
                btnRoute: "/activity/activity-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Activity List",
                        menuList: [
                            {
                                name: "Activity List v1",
                                routePath: "/activity/activity-list-v1"
                            },
                            {
                                name: "Activity List v2",
                                routePath: "/activity/activity-list-v2"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Activity Pages",
                        menuList: [
                            {
                                name: "Activity Map",
                                routePath: "/activity/activity-list-v3"
                            },
                            {
                                name: "Activity Single",
                                routePath: "activity-single",
                                routePath: "/activity/activity-single/3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/10.png",
                title: "Things to do on your rentals",
                btnText: "See Rental",
                btnRoute: "/rental/rental-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Rental List",
                        menuList: [
                            {
                                name: "Rental List v1",
                                routePath: "/rental/rental-list-v1"
                            },
                            {
                                name: "Rental List v2",
                                routePath: "/rental/rental-list-v2"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Rental Pages",
                        menuList: [
                            {
                                name: "Rental Map",
                                routePath: "/rental/rental-list-v3"
                            },
                            {
                                name: "Rental Single",
                                routePath: "/rental/rental-single/3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/5.png",
                title: "Things to do on your Next Car",
                btnText: "See Car",
                btnRoute: "/car/car-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Car List",
                        menuList: [
                            {
                                name: "Car List v1",
                                routePath: "/car/car-list-v1"
                            },
                            {
                                name: "Car List v2",
                                routePath: "/car/car-list-v2"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Car Pages",
                        menuList: [
                            {
                                name: "Car Map",
                                routePath: "/car/car-list-v3"
                            },
                            {
                                name: "Car Single",
                                routePath: "/car/car-single/1",
                                routePath: "/car/car-single/1"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/1.png",
                title: "Things to do on your Cruise",
                btnText: "See Cruise",
                btnRoute: "/cruise/cruise-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Cruise List",
                        menuList: [
                            {
                                name: "Cruise List v1",
                                routePath: "/cruise/cruise-list-v1"
                            },
                            {
                                name: "Cruise List v2",
                                routePath: "/cruise/cruise-list-v2"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Cruise Pages",
                        menuList: [
                            {
                                name: "Cruise Map",
                                routePath: "/cruise/cruise-list-v3"
                            },
                            {
                                name: "Cruise Single",
                                routePath: "/cruise/cruise-single/3"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        menuCol: [
            {
                id: 1,
                megaBanner: "/img/backgrounds/2.png",
                title: "Things to do on your flights",
                btnText: "See Flights",
                btnRoute: "/flight/flight-list-v1",
                menuItems: [
                    {
                        id: 1,
                        title: "Flight List",
                        menuList: [
                            {
                                name: "Flight List v1",
                                routePath: "/flight/flight-list-v1"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
const categorieMobileItems = [
    {
        id: 1,
        title: "Hotel",
        menuItems: [
            {
                id: 1,
                title: "Hotel List",
                menuList: [
                    {
                        name: "Hotel List v1",
                        routePath: "/hotel/hotel-list-v1"
                    },
                    {
                        name: "Hotel List v2",
                        routePath: "/hotel/hotel-list-v2"
                    },
                    {
                        name: "Hotel List v3",
                        routePath: "/hotel/hotel-list-v3"
                    },
                    {
                        name: "Hotel List v4",
                        routePath: "/hotel/hotel-list-v4"
                    },
                    {
                        name: "Hotel List v5",
                        routePath: "/hotel/hotel-list-v5"
                    }
                ]
            },
            {
                id: 2,
                title: "Hotel Single",
                menuList: [
                    {
                        name: "Hotel Single v1",
                        routePath: "/hotel/hotel-single-v1/5"
                    },
                    {
                        name: "Hotel Single v2",
                        routePath: "/hotel/hotel-single-v2/5"
                    }
                ]
            },
            {
                id: 3,
                title: "Hotel Booking",
                menuList: [
                    {
                        name: "Booking Page",
                        routePath: "/hotel/booking-page"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Tour",
        menuItems: [
            {
                id: 1,
                title: "Tour List",
                menuList: [
                    {
                        name: "Tour List v1",
                        routePath: "/tour/tour-list-v1"
                    },
                    {
                        name: "Tour List v2",
                        routePath: "/tour/tour-list-v2"
                    }
                ]
            },
            {
                id: 2,
                title: "Tour Pages",
                menuList: [
                    {
                        name: "Tour Map",
                        routePath: "/tour/tour-list-v3"
                    },
                    {
                        name: "Tour Single",
                        routePath: "/tour/tour-single/5"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Activity",
        menuItems: [
            {
                id: 1,
                title: "Activity List",
                menuList: [
                    {
                        name: "Activity List v1",
                        routePath: "/activity/activity-list-v1"
                    },
                    {
                        name: "Activity List v2",
                        routePath: "/activity/activity-list-v2"
                    }
                ]
            },
            {
                id: 2,
                title: "Activity Pages",
                menuList: [
                    {
                        name: "Activity Map",
                        routePath: "/activity/activity-list-v3"
                    },
                    {
                        name: "Activity Single",
                        routePath: "/activity/activity-single/3"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Hotel Rentals",
        menuItems: [
            {
                id: 1,
                title: "Rental List",
                menuList: [
                    {
                        name: "Rental List v1",
                        routePath: "/rental/rental-list-v1"
                    },
                    {
                        name: "Rental List v2",
                        routePath: "/rental/rental-list-v2"
                    }
                ]
            },
            {
                id: 2,
                title: "Rental Pages",
                menuList: [
                    {
                        name: "Rental Map",
                        routePath: "/rental/rental-list-v3"
                    },
                    {
                        name: "Rental Single",
                        routePath: "/rental/rental-single/3"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Car",
        menuItems: [
            {
                id: 1,
                title: "Car List",
                menuList: [
                    {
                        name: "Car List v1",
                        routePath: "/car/car-list-v1"
                    },
                    {
                        name: "Car List v2",
                        routePath: "/car/car-list-v2"
                    }
                ]
            },
            {
                id: 2,
                title: "Car Pages",
                menuList: [
                    {
                        name: "Car Map",
                        routePath: "/car/car-list-v3"
                    },
                    {
                        name: "Car Single",
                        routePath: "/car/car-single/1"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Cruise",
        menuItems: [
            {
                id: 1,
                title: "Cruise List",
                menuList: [
                    {
                        name: "Cruise List v1",
                        routePath: "/cruise/cruise-list-v1"
                    },
                    {
                        name: "Cruise List v2",
                        routePath: "/cruise/cruise-list-v2"
                    }
                ]
            },
            {
                id: 2,
                title: "Cruise Pages",
                menuList: [
                    {
                        name: "Cruise Map",
                        routePath: "/cruise/cruise-list-v3"
                    },
                    {
                        name: "Cruise Single",
                        routePath: "/cruise/cruise-single/3"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Flights",
        menuItems: [
            {
                id: 1,
                title: "Flight List",
                menuList: [
                    {
                        name: "Flight List v1",
                        routePath: "/flight/flight-list-v1"
                    }
                ]
            }
        ]
    }
];


/***/ })

};
;