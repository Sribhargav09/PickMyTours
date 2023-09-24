"use strict";
exports.id = 6226;
exports.ids = [6226];
exports.modules = {

/***/ 96226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const data = [
    {
        title: "Pending",
        amount: "$12,800",
        description: "Total pending",
        icon: "/img/dashboard/icons/1.svg"
    },
    {
        title: "Earnings",
        amount: "$14,200",
        description: "Total earnings",
        icon: "/img/dashboard/icons/2.svg"
    },
    {
        title: "Bookings",
        amount: "$8,100",
        description: "Total hotel bookings",
        icon: "/img/dashboard/icons/3.svg"
    },
    {
        title: "Services",
        amount: "22,786",
        description: "Total bookable services",
        icon: "/img/dashboard/icons/4.svg"
    }
];
const DashboardCard = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row y-gap-30",
        children: data.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-xl-3 col-md-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-30 px-30 rounded-4 bg-white shadow-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row y-gap-20 justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "fw-500 lh-14",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-26 lh-16 fw-600 mt-5",
                                        children: item.amount
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-15 lh-14 text-light-1 mt-5",
                                        children: item.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.icon,
                                    alt: "icon"
                                })
                            })
                        ]
                    })
                })
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardCard);


/***/ })

};
;