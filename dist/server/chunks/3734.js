"use strict";
exports.id = 3734;
exports.ids = [3734];
exports.modules = {

/***/ 63734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_rentals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27429);
/* harmony import */ var _data_rentals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_rentals__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14040);






const Rentals = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    var itemSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // custom navigation
    function Arrow(props) {
        let className = props.type === "next" ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next" : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
        className += " arrow";
        const char = props.type === "next" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "icon icon-chevron-right text-12"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "icon icon-chevron-left text-12"
            })
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: className,
            onClick: props.onClick,
            children: char
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
            ...settings,
            children: _data_rentals__WEBPACK_IMPORTED_MODULE_4___default().slice(0, 4).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "ata-aos": "fade",
                    "ata-aos-delay": item.delayAnimation,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/rental/rental-single/${item.id}`,
                        className: "rentalCard -type-1 rounded-4 hover-inside-slider",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rentalCard__image",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "cardImage inside-slider",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            ...itemSettings,
                                            arrows: true,
                                            nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
                                                type: "next"
                                            }),
                                            prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
                                                type: "prev"
                                            }),
                                            children: item?.slideImg?.map((slide, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "cardImage ratio ratio-1:1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cardImage__content ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            width: 300,
                                                            height: 300,
                                                            className: "rounded-4 col-12 js-lazy",
                                                            src: slide,
                                                            alt: "image"
                                                        })
                                                    })
                                                }, i))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cardImage__wishlist",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "button -blue-1 bg-white size-30 rounded-full shadow-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icon-heart text-12"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cardImage__leftBadge",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(item?.tag, "best seller") ? "bg-blue-1 text-white" : ""}  ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(item?.tag, "top rated") ? "bg-yellow-1 text-dark-1" : ""}`,
                                                children: item?.tag
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rentalCard__content mt-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-14 text-light-1 lh-14 mb-5",
                                        children: item?.location
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "rentalCard__title text-dark-1 text-18 lh-16 fw-500",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: item?.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-light-1 lh-14 text-14 mt-5"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex items-center mt-5",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-14 text-light-1",
                                                children: [
                                                    item?.guest,
                                                    " guests"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "size-3 bg-light-1 rounded-full ml-10 mr-10"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-14 text-light-1",
                                                children: [
                                                    item?.bedroom,
                                                    " bedroom"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "size-3 bg-light-1 rounded-full ml-10 mr-10"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-14 text-light-1",
                                                children: [
                                                    item?.bed,
                                                    " bed"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex items-center mt-20",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white",
                                                children: item?.ratings
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-14 text-dark-1 fw-500 ml-10",
                                                children: "Exceptional"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-14 text-light-1 ml-10",
                                                children: [
                                                    item?.numberOfReviews,
                                                    " reviews"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-light-1",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "fw-500 text-dark-1",
                                                    children: [
                                                        "US$",
                                                        item?.price
                                                    ]
                                                }),
                                                " ",
                                                "/ per night"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }, item.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rentals);


/***/ }),

/***/ 27429:
/***/ ((module) => {


module.exports = [
    {
        id: 1,
        tag: "",
        slideImg: [
            "/img/rentals/1.png"
        ],
        title: "Luxury New Apartment With Private Garden",
        location: "Westminster Borough, London",
        ratings: "4.8",
        numberOfReviews: "3014",
        price: "72",
        guest: "2",
        bedroom: "1",
        bed: "1",
        delayAnimation: "100"
    },
    {
        id: 2,
        tag: "",
        slideImg: [
            "/img/rentals/2.png",
            "/img/rentals/5.png",
            "/img/rentals/6.png"
        ],
        title: "Premium One Bedroom Luxury Living in the Heart of Mayfair",
        location: "Ciutat Vella, Barcelona",
        ratings: "4.8",
        numberOfReviews: "3014",
        price: "72",
        guest: "4",
        bedroom: "2",
        bed: "1",
        delayAnimation: "200"
    },
    {
        id: 3,
        tag: "best seller",
        slideImg: [
            "/img/rentals/3.png"
        ],
        title: "Style, Charm & Comfort in Camberwell",
        location: "Manhattan, New York",
        ratings: "4.5",
        numberOfReviews: "3014",
        price: "72",
        guest: "2",
        bedroom: "1",
        bed: "1",
        delayAnimation: "300"
    },
    {
        id: 4,
        tag: "top rated",
        slideImg: [
            "/img/rentals/4.png"
        ],
        title: "Marylebone - Oxford Street 1 bed apt with WiFi",
        location: "Vaticano Prati, Rome",
        ratings: "4.8",
        numberOfReviews: "3014",
        price: "72",
        guest: "3",
        bedroom: "2",
        bed: "1",
        delayAnimation: "400"
    },
    {
        id: 5,
        tag: "",
        slideImg: [
            "/img/rentals/5.png"
        ],
        title: "Luxury New Apartment With Private Garden",
        location: "Westminster Borough, London",
        ratings: "4.9",
        numberOfReviews: "3014",
        price: "72",
        guest: "2",
        bedroom: "1",
        bed: "1",
        delayAnimation: "100"
    },
    {
        id: 6,
        tag: "",
        slideImg: [
            "/img/rentals/6.png",
            "/img/rentals/7.png",
            "/img/rentals/8.png"
        ],
        title: "Premium One Bedroom Luxury Living in the Heart of Mayfair",
        location: "Ciutat Vella, Barcelona",
        ratings: "4.8",
        numberOfReviews: "3014",
        price: "72",
        guest: "4",
        bedroom: "2",
        bed: "1",
        delayAnimation: "200"
    },
    {
        id: 7,
        tag: "best seller",
        slideImg: [
            "/img/rentals/7.png"
        ],
        title: "Style, Charm & Comfort in Camberwell",
        location: "Manhattan, New York",
        ratings: "4.65",
        numberOfReviews: "3014",
        price: "72",
        guest: "2",
        bedroom: "1",
        bed: "1",
        delayAnimation: "300"
    },
    {
        id: 8,
        tag: "top rated",
        slideImg: [
            "/img/rentals/8.png"
        ],
        title: "Marylebone - Oxford Street 1 bed apt with WiFi",
        location: "Vaticano Prati, Rome",
        ratings: "4.8",
        numberOfReviews: "3014",
        price: "72",
        guest: "3",
        bedroom: "2",
        bed: "1",
        delayAnimation: "400"
    },
    {
        id: 9,
        tag: "",
        slideImg: [
            "/img/rentals/9.png"
        ],
        title: "Luxury New Apartment With Private Garden",
        location: "Westminster Borough, London",
        ratings: "4.7",
        numberOfReviews: "3014",
        price: "72",
        guest: "2",
        bedroom: "1",
        bed: "1",
        delayAnimation: "100"
    }
];


/***/ })

};
;