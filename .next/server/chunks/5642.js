"use strict";
exports.id = 5642;
exports.ids = [5642];
exports.modules = {

/***/ 27535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const AddBanner = ()=>{
    const addContent = [
        {
            id: 1,
            img: "/img/backgrounds/1.png",
            title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    "Things To Do On",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " Your Trip"
                ]
            }),
            meta: "",
            routerPath: "/",
            delayAnimation: "0"
        },
        {
            id: 2,
            img: "/img/backgrounds/2.png",
            title: "Up to 70% Discount!",
            meta: "Enjoy Summer Deals",
            routerPath: "/",
            delayAnimation: "100"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: addContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-md-6",
                "data-aos": "fade-up",
                "data-aos-delay": item.delayAnimation,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ctaCard -type-1 rounded-4 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ctaCard__image ratio ratio-63:55",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 636,
                                height: 555,
                                className: "img-ratio js-lazy loaded",
                                src: item.img,
                                alt: "image"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ctaCard__content py-70 px-70 lg:py-30 lg:px-30",
                            children: [
                                item.meta ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-15 fw-500 text-white mb-10",
                                        children: "Enjoy Summer Deals"
                                    })
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-40 lg:text-26 text-white",
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-inline-block mt-30",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: item.routerPath,
                                        className: "button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1",
                                        children: "Learn More"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddBanner);


/***/ }),

/***/ 32175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _data_desinations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PopularDestinations = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                spaceBetween: 30,
                className: "overflow-visible",
                scrollbar: {
                    el: ".js-popular-destination-scrollbar",
                    draggable: true
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar,
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
                ],
                navigation: {
                    nextEl: ".js-destination-next",
                    prevEl: ".js-destination-prev"
                },
                breakpoints: {
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 22
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                },
                children: _data_desinations__WEBPACK_IMPORTED_MODULE_5__/* .destinations2 */ .xR.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "#",
                            className: "citiesCard -type-1 d-block rounded-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "citiesCard__image ratio ratio-3:4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        width: 300,
                                        height: 400,
                                        src: item.img,
                                        alt: "image",
                                        className: "js-lazy"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "citiesCard__bg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "citiesCard__top",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-14 text-white",
                                                children: item.hoverText
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "citiesCard__bottom",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-26 md:text-20 lh-13 text-white mb-20",
                                                    children: item.city
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "button col-12 h-60 -blue-1 bg-white text-dark-1",
                                                    children: "Discover"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, item.id)
                    }, item.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "section-slider-nav  -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon icon-chevron-left text-12"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon icon-chevron-right text-12"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularDestinations);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76746);
/* harmony import */ var _CurrenctyMegaMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6425);
/* harmony import */ var _LanguageMegaMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88261);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86624);







const Header1 = ()=>{
    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const changeBackground = ()=>{
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("scroll", changeBackground);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            className: `header ${navbar ? "bg-dark-1 is-sticky" : ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header__container px-30 sm:px-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        className: "header-logo mr-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/general/logo.png",
                                            alt: "logo icon"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-menu",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header-menu__content",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                style: "text-white"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row x-gap-20 items-center xxl:d-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurrenctyMegaMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                textClass: "text-white"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-1 h-20 bg-white-20"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LanguageMegaMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                textClass: "text-white"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex items-center ml-20 is-menu-opened-hide md:d-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/others-pages/login",
                                                className: "button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1",
                                                children: "Become An Expert"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/others-pages/signup",
                                                className: "button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20",
                                                children: "Sign In / Register"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-none xl:d-flex x-gap-20 items-center pl-30 text-white",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/others-pages/login",
                                                    className: "d-flex items-center icon-user text-inherit text-22"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "d-flex items-center icon-menu text-inherit text-20",
                                                        "data-bs-toggle": "offcanvas",
                                                        "aria-controls": "mobile-sidebar_menu",
                                                        "data-bs-target": "#mobile-sidebar_menu"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "offcanvas offcanvas-start  mobile_menu-contnet ",
                                                        tabIndex: "-1",
                                                        id: "mobile-sidebar_menu",
                                                        "aria-labelledby": "offcanvasMenuLabel",
                                                        "data-bs-scroll": "true",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header1);


/***/ }),

/***/ 61234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ hero_1)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/hero/findPlaceSlice.js
var findPlaceSlice = __webpack_require__(4666);
// EXTERNAL MODULE: ./components/hero/DateSearch.jsx
var DateSearch = __webpack_require__(67814);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./components/hero/hero-1/GuestSearch.jsx


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
    const [count, setCount] = (0,external_react_.useState)(defaultValue);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row y-gap-10 justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-15 lh-12 fw-500",
                                children: name
                            }),
                            name === "Children" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-14 lh-12 text-light-1 mt-5",
                                children: "Ages 0 - 17"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "d-flex items-center js-counter",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down",
                                    onClick: decrementCount,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-minus text-12"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex-center size-20 ml-15 mr-15",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-15 js-count",
                                        children: count
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up",
                                    onClick: incrementCount,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-plus text-12"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "border-top-light mt-24 mb-24"
            })
        ]
    });
};
const GuestSearch = ()=>{
    const [guestCounts, setGuestCounts] = (0,external_react_.useState)({
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters position-relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "outside",
                "aria-expanded": "false",
                "data-bs-offset": "0,22",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "text-15 fw-500 ls-2 lh-16",
                        children: "Guest"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-15 text-light-1 ls-2 lh-16",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "js-count-adult",
                                children: guestCounts.Adults
                            }),
                            " adults -",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "js-count-child",
                                children: guestCounts.Children
                            }),
                            " ",
                            "childeren - ",
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "js-count-room",
                                children: guestCounts.Rooms
                            }),
                            " ",
                            "room"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "shadow-2 dropdown-menu min-width-400",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white px-30 py-30 rounded-4 counter-box",
                    children: counters.map((counter)=>/*#__PURE__*/ jsx_runtime.jsx(Counter, {
                            name: counter.name,
                            defaultValue: counter.defaultValue,
                            onCounterChange: handleCounterChange
                        }, counter.name))
                })
            })
        ]
    });
};
/* harmony default export */ const hero_1_GuestSearch = (GuestSearch);

;// CONCATENATED MODULE: ./components/hero/hero-1/LocationSearch.jsx


const SearchBar = ()=>{
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const [selectedItem, setSelectedItem] = (0,external_react_.useState)(null);
    const locationSearchContent = [
        {
            id: 1,
            name: "London",
            address: "Greater London, United Kingdom"
        },
        {
            id: 2,
            name: "New York",
            address: "New York State, United States"
        },
        {
            id: 3,
            name: "Paris",
            address: "France"
        },
        {
            id: 4,
            name: "Madrid",
            address: "Spain"
        },
        {
            id: 5,
            name: "Santorini",
            address: "Greece"
        }
    ];
    const handleOptionClick = (item)=>{
        setSearchValue(item.name);
        setSelectedItem(item);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    "data-bs-toggle": "dropdown",
                    "data-bs-auto-close": "true",
                    "data-bs-offset": "0,22",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                            className: "text-15 fw-500 ls-2 lh-16",
                            children: "Location"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-15 text-light-1 ls-2 lh-16",
                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                autoComplete: "off",
                                type: "search",
                                placeholder: "Where are you going?",
                                className: "js-search js-dd-focus",
                                value: searchValue,
                                onChange: (e)=>setSearchValue(e.target.value)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "shadow-2 dropdown-menu min-width-400",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "y-gap-5 js-results",
                            children: locationSearchContent.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: `-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${selectedItem && selectedItem.id === item.id ? "active" : ""}`,
                                    role: "button",
                                    onClick: ()=>handleOptionClick(item),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-location-2 text-light-1 text-20 pt-4"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "ml-10",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-15 lh-12 fw-500 js-search-option-target",
                                                        children: item.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-14 lh-12 text-light-1 mt-5",
                                                        children: item.address
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, item.id))
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const LocationSearch = (SearchBar);

;// CONCATENATED MODULE: ./components/hero/hero-1/MainFilterSearchBox.jsx







const MainFilterSearchBox = ()=>{
    const { tabs, currentTab } = (0,external_react_redux_.useSelector)((state)=>state.hero) || {};
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls",
                children: tabs?.map((tab)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: `tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${tab?.name === currentTab ? "is-tab-el-active" : ""}`,
                        onClick: ()=>dispatch((0,findPlaceSlice/* addCurrentTab */.f9)(tab?.name)),
                        children: tab?.name
                    }, tab?.id))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "position-relative mt-30 md:mt-20 js-tabs-content",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "button-grid items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(LocationSearch, {}),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-15 fw-500 ls-2 lh-16",
                                            children: "Check in - Check out"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(DateSearch/* default */.Z, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(hero_1_GuestSearch, {}),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "button-item",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white",
                                    onClick: ()=>router_default().push("/hotel/hotel-list-v1"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-search text-20 mr-10"
                                        }),
                                        "Search"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const hero_1_MainFilterSearchBox = (MainFilterSearchBox);

;// CONCATENATED MODULE: ./components/hero/hero-1/index.jsx


const index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "masthead -type-1 z-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "masthead__bg",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    alt: "image",
                    src: "/img/masthead/1/bg.webp",
                    className: "js-lazy"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "text-60 lg:text-40 md:text-30 text-white",
                                        "data-aos": "fade-up",
                                        children: "Find Next Place To Visit"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-white mt-6 md:mt-10",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "100",
                                        children: "Discover amzaing places at exclusive deals"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tabs -underline mt-60 js-tabs",
                                "data-aos": "fade-up",
                                "data-aos-delay": "200",
                                children: /*#__PURE__*/ jsx_runtime.jsx(hero_1_MainFilterSearchBox, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const hero_1 = (index);


/***/ }),

/***/ 86013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_desinations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58482);




const Destinations = ()=>{
    const [filterOption, setFilterOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
    const filterOptions = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Europe",
            value: "europe"
        },
        {
            label: "Asia",
            value: "asia"
        },
        {
            label: "North America",
            value: "north_america"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tabs__controls d-flex js-tabs-controls",
                children: filterOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `tabs__button fw-500 text-15 px-30 py-15 rounded-4 js-tabs-button ${filterOption === option.value ? "is-tab-el-active" : ""}`,
                            onClick: ()=>setFilterOption(option.value),
                            children: option.label
                        })
                    }, option.value))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tabs__content pt-30 js-tabs-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tabs__pane -tab-item-1 is-tab-el-active",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row y-gap-20",
                        children: _data_desinations__WEBPACK_IMPORTED_MODULE_3__/* .destinations1 */ .hz.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "#",
                                    className: "d-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-15 fw-500",
                                            children: item.city
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-14 text-light-1",
                                            children: [
                                                item.properties,
                                                " properties"
                                            ]
                                        })
                                    ]
                                })
                            }, item.id))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Destinations);


/***/ }),

/***/ 2418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_testimonialData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Import Swiper React components



const Testimonial = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                scrollbar: {
                    el: ".js-scrollbar",
                    draggable: true
                },
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar
                ],
                children: _data_testimonialData__WEBPACK_IMPORTED_MODULE_4__/* .testimonial1 */ .qo.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row items-center x-gap-15 y-gap-20",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-auto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            width: 80,
                                            height: 80,
                                            src: item.avatar,
                                            alt: "image",
                                            className: "js-lazy rounded-circle"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "text-16 fw-500",
                                                children: item.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-15 text-light-1 lh-15",
                                                children: item.designation
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-18 fw-500 text-dark-1 mt-30 sm:mt-20",
                                children: item.text
                            })
                        ]
                    }, item.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-dark-1 fw-500 js-current",
                        children: "01"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "slider-scrollbar bg-border ml-20 mr-20 w-max-300 js-scrollbar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-dark-1 fw-500 js-all",
                        children: "03"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const TestimonialLeftCol = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-30",
                children: [
                    "What our customers are",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " saying us?"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-20",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row y-gap-30 pt-60 lg:pt-40",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-sm-5 col-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-30 lh-15 fw-600",
                                children: "13m+"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-light-1 lh-15",
                                children: "Happy People"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-sm-5 col-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-30 lh-15 fw-600",
                                children: "4.88"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-light-1 lh-15",
                                children: "Overall rating"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex x-gap-5 items-center pt-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-star text-blue-1 text-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-star text-blue-1 text-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-star text-blue-1 text-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-star text-blue-1 text-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-star text-blue-1 text-10"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialLeftCol);


/***/ }),

/***/ 22154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var _data_hotels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23022);
/* harmony import */ var _utils_isTextMatched__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14040);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Hotels = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                spaceBetween: 30,
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination
                ],
                navigation: {
                    nextEl: ".js-hotels-next",
                    prevEl: ".js-hotels-prev"
                },
                pagination: {
                    el: ".js-hotels-pag",
                    clickable: true
                },
                breakpoints: {
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 22
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                },
                children: _data_hotels__WEBPACK_IMPORTED_MODULE_5__/* .hotelsData */ .H.slice(0, 8).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/hotel/hotel-single-v1/${item.id}`,
                            className: "hotelsCard -type-1 hover-inside-slider",
                            "data-aos": "fade",
                            "data-aos-delay": item.delayAnimation,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hotelsCard__image",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cardImage ratio ratio-1:1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cardImage__content",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "cardImage-slider rounded-4 overflow-hidden custom_inside-slider",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                                        className: "mySwiper",
                                                        modules: [
                                                            swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                                                            swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
                                                        ],
                                                        pagination: {
                                                            clickable: true
                                                        },
                                                        navigation: true,
                                                        children: item?.slideImg?.map((slide, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    width: 300,
                                                                    height: 300,
                                                                    className: "rounded-4 col-12 js-lazy",
                                                                    src: slide,
                                                                    alt: "image"
                                                                })
                                                            }, i))
                                                    })
                                                })
                                            })
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
                                                className: `py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item?.tag, "breakfast included") ? "bg-dark-1 text-white" : ""} ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item?.tag, "best seller") ? "bg-blue-1 text-white" : ""} 
                    ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item?.tag, "-25% today") ? "bg-brown-1 text-white" : ""} 
                     ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item?.tag, "top rated") ? "bg-yellow-1 text-dark-1" : ""}`,
                                                children: item?.tag
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hotelsCard__content mt-10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "hotelsCard__title text-dark-1 text-18 lh-16 fw-500",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: item?.title
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-light-1 lh-14 text-14 mt-5",
                                            children: item?.location
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
                                                className: "fw-500",
                                                children: [
                                                    "Starting from",
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-blue-1",
                                                        children: [
                                                            "US$",
                                                            item?.price
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, item?.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "d-flex items-center text-24 arrow-left-hover js-hotels-prev",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon icon-arrow-left"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pagination -dots text-border js-hotels-pag"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "d-flex items-center text-24 arrow-right-hover js-hotels-next",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon icon-arrow-right"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotels);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const SelectFilter = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        className: "form-select rounded-4 border-light justify-between text-16 fw-500 px-20 h-50 w-140 sm:w-full text-14",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                defaultValue: true,
                children: "Hotel"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "animation",
                children: "Animation"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "design",
                children: "Design"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "illustration",
                children: "Illustration"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "lifestyle",
                children: "Lifestyle"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "business",
                children: "Business"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectFilter);


/***/ }),

/***/ 85642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_add_banner_AddBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27535);
/* harmony import */ var _components_common_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62112);
/* harmony import */ var _components_destinations_PopularDestinations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32175);
/* harmony import */ var _components_footer_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94609);
/* harmony import */ var _components_header_header_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69662);
/* harmony import */ var _components_hero_hero_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61234);
/* harmony import */ var _components_block_BlockGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25840);
/* harmony import */ var _components_blog_Blog3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16034);
/* harmony import */ var _components_common_CallToActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10164);
/* harmony import */ var _components_home_home_1_Destinations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86013);
/* harmony import */ var _components_home_home_1_Testimonial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2418);
/* harmony import */ var _components_home_home_1_TestimonialLeftCol__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11730);
/* harmony import */ var _components_hotels_Hotels__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22154);
/* harmony import */ var _components_hotels_filter_tabs_SelectFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_destinations_PopularDestinations__WEBPACK_IMPORTED_MODULE_4__, _components_home_home_1_Testimonial__WEBPACK_IMPORTED_MODULE_12__, _components_hotels_Hotels__WEBPACK_IMPORTED_MODULE_14__]);
([_components_destinations_PopularDestinations__WEBPACK_IMPORTED_MODULE_4__, _components_home_home_1_Testimonial__WEBPACK_IMPORTED_MODULE_12__, _components_hotels_Hotels__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Home_1 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Home-1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_header_1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_hero_1__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-lg layout-pb-md",
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Popular Destinations"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "These popular destinations have a lot to offer"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto md:d-none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "View All Destinations",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative pt-40 sm:pt-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_destinations_PopularDestinations__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row y-gap-20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_add_banner_AddBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row y-gap-10 justify-between items-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Recommended"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-sm-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotels_filter_tabs_SelectFilter__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotels_Hotels__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row y-gap-20 justify-between",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_block_BlockGuide__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-lg layout-pb-lg bg-blue-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row y-gap-40 justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-5 col-lg-6",
                                "data-aos": "fade-up",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_home_1_TestimonialLeftCol__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-hidden js-testimonials-slider-3",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "50",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_home_1_Testimonial__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-lg layout-pb-md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Get inspiration for your next trip"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "Interdum et malesuada fames"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row y-gap-30 pt-40",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Blog3__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Destinations we love"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "Interdum et malesuada fames ac ante ipsum"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tabs -pills pt-40 js-tabs",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_home_1_Destinations__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_CallToActions__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_default__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(Home_1), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;