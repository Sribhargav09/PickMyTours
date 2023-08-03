"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 40301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ActionsButton = ()=>{
    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const handleFilterClick = (filter)=>{
        setActiveFilter(filter);
    };
    const filters = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Details",
            value: "details"
        },
        {
            label: "Invoice",
            value: "invoice"
        },
        {
            label: "Confirm",
            value: "confirm"
        },
        {
            label: "Cancel",
            value: "cancel"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dropdown js-dropdown js-actions-1-active",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5",
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "true",
                "aria-expanded": "false",
                "data-bs-offset": "0,10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "js-dropdown-title",
                        children: activeFilter === "all" ? "All" : filters.find((f)=>f.value === activeFilter)?.label || "Actions"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "icon icon-chevron-sm-down text-7 ml-10"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "toggle-element -dropdown-2 js-click-dropdown dropdown-menu",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-14 fw-500 js-dropdown-list",
                    children: filters.map((filter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `d-block js-dropdown-link ${activeFilter === filter.value ? "text-blue-1" : ""}`,
                                onClick: ()=>handleFilterClick(filter.value),
                                children: filter.label
                            })
                        }, filter.value))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsButton);


/***/ })

};
;