"use strict";
exports.id = 7814;
exports.ids = [7814];
exports.modules = {

/***/ 67814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13456);
/* harmony import */ var react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__);



const DateSearch = ()=>{
    // const [dates, setDates] = useState([
    //   new DateObject({ year: 2023, month: 1, day: 22 }),
    //   "December 09 2020",
    //   1597994736000, //unix time in milliseconds (August 21 2020)
    // ]);
    const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        new react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__.DateObject().setDay(5),
        new react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2__.DateObject().setDay(14).add(1, "month")
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_date_picker__WEBPACK_IMPORTED_MODULE_2___default()), {
            inputClass: "custom_input-picker",
            containerClassName: "custom_container-picker",
            value: dates,
            onChange: setDates,
            numberOfMonths: 2,
            offsetY: 10,
            range: true,
            rangeHover: true,
            format: "MMMM DD"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateSearch);


/***/ })

};
;