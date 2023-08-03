"use strict";
exports.id = 2810;
exports.ids = [2810];
exports.modules = {

/***/ 13209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const Counter3 = ()=>{
    const blockContent = [
        {
            id: 1,
            number: "4,958",
            meta: "Destinations",
            hasUnit: "",
            delayAnim: "100"
        },
        {
            id: 2,
            number: "2,869",
            meta: "Total Properties",
            hasUnit: "",
            delayAnim: "200"
        },
        {
            id: 3,
            number: "2",
            meta: "Happy customers",
            hasUnit: "M",
            delayAnim: "300"
        },
        {
            id: 4,
            number: "574,974",
            meta: "Our Volunteers",
            hasUnit: "",
            delayAnim: "400"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: blockContent.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-xl-3 col-6",
                "data-aos": "fade",
                "data-aos-delay": item.delayAnim,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-40 lh-13 text-blue-1 fw-600",
                        children: [
                            item.number,
                            item.hasUnit
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-14 lh-14 text-blue-1 mt-5",
                        children: item.meta
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter3);


/***/ }),

/***/ 14040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isTextMatched)
/* harmony export */ });
function isTextMatched(tag, match) {
    if (tag !== undefined && match !== "") {
        if (tag.toLocaleLowerCase() === match.toLocaleLowerCase()) {
            return true;
        }
        return false;
    }
    return false;
}


/***/ })

};
;