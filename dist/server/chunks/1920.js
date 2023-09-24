"use strict";
exports.id = 1920;
exports.ids = [1920];
exports.modules = {

/***/ 51920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Sidebar = ()=>{
    const sidebarData = [
        // {
        //   icon: "/img/dashboard/sidebar/booking.svg",
        //   title: "Manage Hotel",
        //   links: [
        //     { title: "All Hotel", href: "#" },
        //     { title: "Add Hotel", href: "#" },
        //     { title: "Recovery", href: "#" },
        //   ],
        // },
        {
            icon: "/img/dashboard/sidebar/map.svg",
            title: "Manage Users",
            links: [
                {
                    title: "All Users",
                    href: "/vendor-dashboard/users"
                },
                {
                    title: "Add User",
                    href: "/vendor-dashboard/add-user"
                },
                {
                    title: "Recovery",
                    href: "#"
                }
            ]
        },
        {
            icon: "/img/dashboard/sidebar/map.svg",
            title: "Manage Location",
            links: [
                {
                    title: "All locations",
                    href: "/vendor-dashboard/locations"
                },
                {
                    title: "Add location",
                    href: "/vendor-dashboard/add-location"
                },
                {
                    title: "Recovery",
                    href: "#"
                }
            ]
        },
        {
            icon: "/img/dashboard/sidebar/map.svg",
            title: "Manage Offer",
            links: [
                {
                    title: "All Offers",
                    href: "/vendor-dashboard/offers"
                },
                {
                    title: "Add Offer",
                    href: "/vendor-dashboard/add-offer"
                },
                {
                    title: "Recovery",
                    href: "#"
                }
            ]
        },
        {
            icon: "/img/dashboard/sidebar/map.svg",
            title: "Manage Tour",
            links: [
                {
                    title: "All Tour",
                    href: "/vendor-dashboard/tours"
                },
                {
                    title: "Add Tour",
                    href: "/vendor-dashboard/add-tour"
                },
                {
                    title: "Recovery",
                    href: "#"
                }
            ]
        },
        {
            icon: "/img/dashboard/sidebar/map.svg",
            title: "Manage Tour Types",
            links: [
                {
                    title: "All Tour Types",
                    href: "/vendor-dashboard/tour-types"
                },
                {
                    title: "Add Tour Type",
                    href: "/vendor-dashboard/add-tour-type"
                },
                {
                    title: "Recovery",
                    href: "#"
                }
            ]
        },
        {
            icon: "/img/dashboard/sidebar/map.svg",
            title: "Manage Testinomials",
            links: [
                {
                    title: "All Testinomials",
                    href: "/vendor-dashboard/testinomials"
                },
                {
                    title: "Add Testinomial",
                    href: "/vendor-dashboard/add-testinomial"
                },
                {
                    title: "Recovery",
                    href: "#"
                }
            ]
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sidebar -dashboard",
            id: "vendorSidebarMenu",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sidebar__item ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "db-dashboard.html",
                        className: "sidebar__button d-flex items-center text-15 lh-1 fw-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 20,
                                height: 20,
                                src: "/img/dashboard/sidebar/compass.svg",
                                alt: "image",
                                className: "mr-15"
                            }),
                            "Dashboard"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sidebar__item ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "#",
                        className: "sidebar__button d-flex items-center text-15 lh-1 fw-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 20,
                                height: 20,
                                src: "/img/dashboard/sidebar/booking.svg",
                                alt: "image",
                                className: "mr-15"
                            }),
                            "Booking Manager"
                        ]
                    })
                }),
                sidebarData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sidebar__item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "accordion -db-sidebar js-accordion",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "accordion__item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "accordion__button",
                                        "data-bs-toggle": "collapse",
                                        "data-bs-target": `#sidebarItem${index}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "sidebar__button col-12 d-flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex items-center text-15 lh-1 fw-500",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 20,
                                                            height: 20,
                                                            src: item.icon,
                                                            alt: "image",
                                                            className: "mr-10"
                                                        }),
                                                        item.title
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "icon-chevron-sm-down text-7"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: `sidebarItem${index}`,
                                        className: "collapse",
                                        "data-bs-parent": "#vendorSidebarMenu",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "list-disc pt-15 pb-5 pl-40",
                                            children: item.links.map((link, linkIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: link.href,
                                                        className: "text-15",
                                                        children: link.title
                                                    })
                                                }, linkIndex))
                                        })
                                    })
                                ]
                            })
                        })
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sidebar__item ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "#",
                        className: "sidebar__button d-flex items-center text-15 lh-1 fw-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 20,
                                height: 20,
                                src: "/img/dashboard/sidebar/log-out.svg",
                                alt: "image",
                                className: "mr-15"
                            }),
                            "Logout"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

};
;