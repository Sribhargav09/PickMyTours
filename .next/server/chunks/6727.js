"use strict";
exports.id = 6727;
exports.ids = [6727];
exports.modules = {

/***/ 46727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const counters = [
    {
        name: "Adults",
        defaultValue: 2
    },
    {
        name: "Children",
        defaultValue: 1
    },
    {
        name: "Rooms",
        defaultValue: 1
    }
];
const Counter = ({ name, defaultValue, onCounterChange })=>{
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const incrementCount = ()=>{
        setCount(count + 1);
        onCounterChange(name, count + 1);
    };
    const decrementCount = ()=>{
        if (count > 0) {
            setCount(count - 1);
            onCounterChange(name, count - 1);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row y-gap-10 justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-15 lh-12 fw-500",
                                children: name
                            }),
                            name === "Children" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-14 lh-12 text-light-1 mt-5",
                                children: "Ages 0 - 17"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex items-center js-counter",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down",
                                    onClick: decrementCount,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-minus text-12"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-center size-20 ml-15 mr-15",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-15 js-count",
                                        children: count
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up",
                                    onClick: incrementCount,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-plus text-12"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-top-light mt-24 mb-24"
            })
        ]
    });
};
const GuestSearch = ()=>{
    const [guestCounts, setGuestCounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        Adults: 2,
        Children: 1,
        Rooms: 1
    });
    const handleCounterChange = (name, value)=>{
        setGuestCounts((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "searchMenu-guests px-20  lg:py-20 lg:px-0 js-form-dd bg-white position-relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "outside",
                "aria-expanded": "false",
                "data-bs-offset": "0,22",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-15 fw-500 ls-2 lh-16",
                        children: "Guest"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-15 text-light-1 ls-2 lh-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "js-count-adult",
                                children: guestCounts.Adults
                            }),
                            " adults -",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "js-count-child",
                                children: guestCounts.Children
                            }),
                            " ",
                            "childeren - ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "js-count-room",
                                children: guestCounts.Rooms
                            }),
                            " ",
                            "room"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shadow-2 dropdown-menu min-width-400",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white px-30 py-30 rounded-4 counter-box",
                    children: counters.map((counter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Counter, {
                            name: counter.name,
                            defaultValue: counter.defaultValue,
                            onCounterChange: handleCounterChange
                        }, counter.name))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuestSearch);


/***/ })

};
;