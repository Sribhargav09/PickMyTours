"use strict";
exports.id = 5840;
exports.ids = [5840];
exports.modules = {

/***/ 25840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const BlockGuide = ()=>{
    const blockContent = [
        {
            id: 1,
            icon: "/img/featureIcons/1/1.svg",
            title: "Best Price Guarantee",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            delayAnim: "100"
        },
        {
            id: 2,
            icon: "/img/featureIcons/1/2.svg",
            title: "Easy & Quick Booking",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            delayAnim: "200"
        },
        {
            id: 3,
            icon: "/img/featureIcons/1/3.svg",
            title: "Customer Care 24/7",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            delayAnim: "300"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: blockContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-3 col-sm-6",
                "data-aos": "fade",
                "data-aos-delay": item.delayAnim,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "featureIcon -type-1 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.icon,
                                alt: "image",
                                className: "js-lazy"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center mt-30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-18 fw-500",
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-15 mt-10",
                                    children: item.text
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockGuide);


/***/ })

};
;