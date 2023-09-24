"use strict";
exports.id = 2908;
exports.ids = [2908];
exports.modules = {

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_linkActiveChecker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58443);





const Sidebar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const sidebarContent = [
        {
            id: 1,
            icon: "/img/dashboard/sidebar/compass.svg",
            name: "Dashboard",
            routePath: "/dashboard/db-dashboard"
        },
        {
            id: 2,
            icon: "/img/dashboard/sidebar/booking.svg",
            name: " Booking History",
            routePath: "/dashboard/db-booking"
        },
        {
            id: 3,
            icon: "/img/dashboard/sidebar/bookmark.svg",
            name: "Wishlist",
            routePath: "/dashboard/db-wishlist"
        },
        {
            id: 4,
            icon: "/img/dashboard/sidebar/gear.svg",
            name: " Settings",
            routePath: "/dashboard/db-settings"
        },
        {
            id: 5,
            icon: "/img/dashboard/sidebar/log-out.svg",
            name: " Logout",
            routePath: "/others-pages/login"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sidebar -dashboard",
        children: sidebarContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebar__item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(0,_utils_linkActiveChecker__WEBPACK_IMPORTED_MODULE_4__/* .isActiveLink */ .H_)(item.routePath, router.asPath) ? "-is-active" : ""} sidebar__button `,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: item.routePath,
                        className: "d-flex items-center text-15 lh-1 fw-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 20,
                                height: 20,
                                src: item.icon,
                                alt: "image",
                                className: "mr-15"
                            }),
                            item.name
                        ]
                    })
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

};
;