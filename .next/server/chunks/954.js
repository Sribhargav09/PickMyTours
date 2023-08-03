"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 80954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13456);
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__);



const DateSearch = ()=>{
    const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        new react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__.DateObject().setDay(5)
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-230 single-field relative d-flex items-center ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2___default()), {
                inputClass: "custom_input-picker",
                containerClassName: "custom_container-picker date-input bg-white text-dark-1 h-50 rounded-8 pl-30",
                value: dates,
                onChange: setDates,
                numberOfMonths: 1,
                offsetY: 10,
                range: true,
                rangeHover: true,
                format: "MMMM DD"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "absolute d-flex items-center h-full pointer-events-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "icon-calendar text-20 px-15 text-dark-1"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateSearch);


/***/ })

};
;