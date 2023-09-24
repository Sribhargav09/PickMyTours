"use strict";
exports.id = 5054;
exports.ids = [5054];
exports.modules = {

/***/ 15054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ChartSelect = ()=>{
    const options = [
        "This Week",
        "Animation",
        "Design",
        "Illustration",
        "Business"
    ];
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options[0]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dropdown js-dropdown js-category-active",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "dropdown__button d-flex items-center bg-white border-light rounded-100 px-15 py-10 text-14 lh-12",
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "true",
                "aria-expanded": "false",
                "data-bs-offset": "0,10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "js-dropdown-title",
                        children: selectedOption
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "icon icon-chevron-sm-down text-7 ml-10"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "toggle-element -dropdown  dropdown-menu",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-14 y-gap-15 js-dropdown-list",
                    children: options.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `d-block js-dropdown-link ${selectedOption === option ? "text-blue-1 " : ""}`,
                                onClick: ()=>{
                                    setSelectedOption(option);
                                    document.querySelector(".js-dropdown-title").textContent = option;
                                // TODO: Apply filter based on selected option
                                },
                                children: option
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartSelect);


/***/ })

};
;