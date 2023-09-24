"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 40150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95973);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PasswordInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15529);
/* harmony import */ var _LocationInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70848);
/* harmony import */ var _PersonalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57977);






const Index = ()=>{
    const tabs = [
        {
            label: "Personal Information",
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PersonalInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        },
        {
            label: "Location Information",
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocationInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        },
        {
            label: "Change Password",
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PasswordInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }
    ];
    const [tabIndex, setTabIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        className: "tabs -underline-2 js-tabs",
        selectedIndex: tabIndex,
        onSelect: (index)=>setTabIndex(index),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                className: "tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20",
                children: tabs.map((tab, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        className: "col-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button",
                            children: tab.label
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tabs__content pt-30 js-tabs-content",
                children: tabs.map((tab, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                        className: `-tab-item-${index + 1} ${tabIndex === index ? "is-tab-el-active" : ""}`,
                        children: tab.content
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ })

};
;