"use strict";
exports.id = 1582;
exports.ids = [1582];
exports.modules = {

/***/ 41582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_flights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67299);
/* harmony import */ var _data_flights__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_flights__WEBPACK_IMPORTED_MODULE_3__);




const Flights = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _data_flights__WEBPACK_IMPORTED_MODULE_3___default().slice(0, 4).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                "ata-aos": "fade",
                "ata-aos-delay": item?.delayAnimation,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-20 py-20 rounded-4 border-light",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row y-gap-30 justify-between xl:justify-",
                        children: [
                            item?.flightList?.map((flight)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-4 col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row y-gap-10 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-sm-auto",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    width: 40,
                                                    height: 40,
                                                    className: "size-40",
                                                    src: flight?.avatar,
                                                    alt: "image"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row x-gap-20 items-end",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-auto",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "lh-15 fw-500",
                                                                    children: flight.departureTime
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-15 lh-15 text-light-1",
                                                                    children: flight.arrivalAirport
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flightLine",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-15 lh-15 text-light-1 mt-10",
                                                                    children: flight.duration
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-auto",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "lh-15 fw-500",
                                                                    children: flight.arrivalTime
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-15 lh-15 text-light-1",
                                                                    children: flight.departureAirport
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, flight.id)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-right mr-24",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "lh-15 fw-500",
                                                    children: [
                                                        "US$",
                                                        item?.price
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-15 lh-15 text-light-1",
                                                    children: [
                                                        item?.deals,
                                                        " deals"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/flight/flight-list-v1",
                                            className: "button -outline-blue-1 px-30 h-50 text-blue-1",
                                            children: [
                                                "View Deal ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "icon-arrow-top-right ml-15"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }, item?.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flights);


/***/ }),

/***/ 67299:
/***/ ((module) => {


module.exports = [
    {
        id: 1,
        price: "934",
        deals: "16",
        delayAnimation: "100",
        selectId: "collapse_1",
        flightList: [
            {
                id: 1,
                avatar: "/img/flightIcons/1.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "3h 05m- Nonstop"
            },
            {
                id: 2,
                avatar: "/img/flightIcons/2.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "5h 05m- Nonstop"
            }
        ]
    },
    {
        id: 2,
        price: "690",
        deals: "12",
        selectId: "collapse_2",
        delayAnimation: "200",
        flightList: [
            {
                id: 1,
                avatar: "/img/flightIcons/1.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "4h 05m- Nonstop"
            },
            {
                id: 2,
                avatar: "/img/flightIcons/2.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "6h 05m- Nonstop"
            }
        ]
    },
    {
        id: 3,
        price: "999",
        deals: "17",
        delayAnimation: "300",
        selectId: "collapse_3",
        flightList: [
            {
                id: 1,
                avatar: "/img/flightIcons/1.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "4h 05m- Nonstop"
            },
            {
                id: 2,
                avatar: "/img/flightIcons/2.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "7h 05m- Nonstop"
            }
        ]
    },
    {
        id: 4,
        delayAnimation: "400",
        price: "859",
        deals: "15",
        selectId: "collapse_4",
        flightList: [
            {
                id: 1,
                avatar: "/img/flightIcons/1.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "3h 05m- Nonstop"
            },
            {
                id: 2,
                avatar: "/img/flightIcons/2.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "9h 05m- Nonstop"
            }
        ]
    },
    {
        id: 5,
        price: "934",
        deals: "16",
        selectId: "collapse_5",
        delayAnimation: "500",
        flightList: [
            {
                id: 1,
                avatar: "/img/flightIcons/1.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "3h 05m- Nonstop"
            },
            {
                id: 2,
                avatar: "/img/flightIcons/2.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "5h 05m- Nonstop"
            }
        ]
    },
    {
        id: 6,
        price: "690",
        deals: "12",
        selectId: "collapse_6",
        delayAnimation: "600",
        flightList: [
            {
                id: 1,
                avatar: "/img/flightIcons/1.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "4h 05m- Nonstop"
            },
            {
                id: 2,
                avatar: "/img/flightIcons/2.png",
                arrivalAirport: "SAW",
                departureAirport: "STN",
                departureTime: "14:00",
                arrivalTime: "22:00",
                duration: "6h 05m- Nonstop"
            }
        ]
    }
];


/***/ })

};
;