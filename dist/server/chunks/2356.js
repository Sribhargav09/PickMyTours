"use strict";
exports.id = 2356;
exports.ids = [2356];
exports.modules = {

/***/ 22356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const RercentBooking = ()=>{
    const data = [
        {
            item: "New York",
            description: "Discover America",
            total: "$130",
            paid: "$0",
            status: {
                color: "yellow-4",
                text: "yellow-3",
                label: "Pending"
            },
            createdAt: "04/04/2022 08:16"
        },
        {
            item: "New York",
            description: "Discover America",
            total: "$130",
            paid: "$0",
            status: {
                color: "blue-1-05",
                text: "blue-1",
                label: "Confirmed"
            },
            createdAt: "04/04/2022 08:16"
        },
        {
            item: "New York",
            description: "Discover America",
            total: "$130",
            paid: "$0",
            status: {
                color: "red-3",
                text: "red-2",
                label: "Rejected"
            },
            createdAt: "04/04/2022 08:16"
        },
        {
            item: "New York",
            description: "Discover America",
            total: "$130",
            paid: "$0",
            status: {
                color: "blue-1-05",
                text: "blue-1",
                label: "Confirmed"
            },
            createdAt: "04/04/2022 08:16"
        },
        {
            item: "New York",
            description: "Discover America",
            total: "$130",
            paid: "$0",
            status: {
                color: "blue-1-05",
                text: "blue-1",
                label: "Confirmed"
            },
            createdAt: "04/04/2022 08:16"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-scroll scroll-bar-1 pt-30",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: "table-2 col-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "#"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "Item"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "Total"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "Paid"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "Status"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "Created At"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    children: data.map((row, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: index + 1
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    children: [
                                        row.item,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " ",
                                        row.description
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "fw-500",
                                    children: row.total
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: row.paid
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `rounded-100 py-4 text-center col-12 text-14 fw-500 bg-${row.status.color} text-${row.status.text}`,
                                        children: row.status.label
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: row.createdAt
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RercentBooking);


/***/ })

};
;