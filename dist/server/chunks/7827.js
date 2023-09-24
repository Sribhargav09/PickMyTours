"use strict";
exports.id = 7827;
exports.ids = [7827];
exports.modules = {

/***/ 77827:
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
/* harmony import */ var _ContentTabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25996);
/* harmony import */ var _LocationTabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60678);
/* harmony import */ var _PricingTabContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27645);
/* harmony import */ var _AttributesTabContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74164);







const Index = ()=>{
    const tabs = [
        {
            label: "Content",
            labelNo: 1,
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentTabContent__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        },
        {
            label: "Location",
            labelNo: 2,
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocationTabContent__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        },
        {
            label: "Pricing",
            labelNo: 3,
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PricingTabContent__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        },
        {
            label: "Attributes",
            labelNo: 4,
            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AttributesTabContent__WEBPACK_IMPORTED_MODULE_6__["default"], {})
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
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button",
                            children: [
                                tab.labelNo,
                                ". ",
                                tab.label
                            ]
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