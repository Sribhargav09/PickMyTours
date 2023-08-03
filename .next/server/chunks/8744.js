"use strict";
exports.id = 8744;
exports.ids = [8744];
exports.modules = {

/***/ 23282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_tourCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81293);




const TourCategories = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...settings,
        arrows: false,
        children: _data_tourCategories__WEBPACK_IMPORTED_MODULE_3__/* .tourCategories1 */ .o.slice(8, 13).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-xl col-md-4 col-sm-6",
                "data-aos": "fade",
                "data-aos-delay": item.dealyAimation,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/activity/activity-list-v3",
                    className: "tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tourTypeCard__content text-center pt-60 pb-24 px-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `${item.icon} text-60 sm:text-40 text-blue-1`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "text-dark-1 text-18 fw-500 mt-50 md:mt-30",
                                children: item.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-light-1 lh-14 text-14 mt-5",
                                children: [
                                    item.tourNumber,
                                    " Tours From $",
                                    item.price
                                ]
                            })
                        ]
                    })
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TourCategories);


/***/ }),

/***/ 68744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./components/header/header-3/index.jsx
var header_3 = __webpack_require__(11397);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./features/hero/findPlaceSlice.js
var findPlaceSlice = __webpack_require__(4666);
// EXTERNAL MODULE: ./components/hero/DateSearch.jsx
var DateSearch = __webpack_require__(67814);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./components/hero/GuestSearch.jsx


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
/* harmony default export */ const hero_GuestSearch = (GuestSearch);

;// CONCATENATED MODULE: ./components/hero/LocationSearch.jsx


const LocationSearch = ()=>{
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
/* harmony default export */ const hero_LocationSearch = (LocationSearch);

;// CONCATENATED MODULE: ./components/hero/MainFilterSearchBox.jsx







const MainFilterSearchBox = ()=>{
    const { tabs, currentTab } = (0,external_react_redux_.useSelector)((state)=>state.hero) || {};
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tabs -bookmark js-tabs",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tabs__controls d-flex items-center js-tabs-controls",
                    children: tabs?.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: `tabs__button px-30 py-20 rounded-4 fw-600 text-white js-tabs-button ${tab?.name === currentTab ? "is-tab-el-active" : ""}`,
                            onClick: ()=>dispatch((0,findPlaceSlice/* addCurrentTab */.f9)(tab?.name)),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: `${tab.icon} text-20 mr-10`
                                }),
                                tab?.name
                            ]
                        }, tab?.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tabs__content js-tabs-content",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "button-grid items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(hero_LocationSearch, {}),
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
                            /*#__PURE__*/ jsx_runtime.jsx(hero_GuestSearch, {}),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "button-item",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white",
                                    onClick: ()=>router_default().push("/tour/tour-list-v1"),
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
/* harmony default export */ const hero_MainFilterSearchBox = (MainFilterSearchBox);

// EXTERNAL MODULE: ./services/tour.service.js + 1 modules
var tour_service = __webpack_require__(36008);
;// CONCATENATED MODULE: ./components/hero/index.js






const index = ()=>{
    const { tabs, currentTab } = (0,external_react_redux_.useSelector)((state)=>state.hero) || {};
    const [tours, setTours] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        tour_service/* default */.Z.getAll().then((response)=>{
            setTours(response.data);
            console.log(response.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "masthead -type-3 z-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "masthead__bg",
                children: tours && tours.data && /*#__PURE__*/ jsx_runtime.jsx("img", {
                    alt: "image",
                    src: tours.data[tours.data.length - 1].gallery[0],
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
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-center",
                                children: tours && tours?.data?.slice(0, 1).map((tour, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>router_default().push(`tour/tour-single/${tour._id}`),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                className: "text-60 lg:text-40 md:text-30 text-white",
                                                "data-aos": "fade-up",
                                                children: tour.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "text-white mt-6 md:mt-10",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "100",
                                                children: [
                                                    tour.price,
                                                    " - ",
                                                    tour.location
                                                ]
                                            })
                                        ]
                                    });
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "masthead__tabs",
                                "data-aos": "fade-up",
                                "data-aos-delay": "200",
                                children: /*#__PURE__*/ jsx_runtime.jsx(hero_MainFilterSearchBox, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const hero = (index);

// EXTERNAL MODULE: ./components/destinations/TopDestinations.jsx
var TopDestinations = __webpack_require__(40971);
// EXTERNAL MODULE: ./components/hotels/Hotels2.jsx
var Hotels2 = __webpack_require__(94517);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/tours/Tours.jsx
var Tours = __webpack_require__(48085);
// EXTERNAL MODULE: ./components/activity/Activity.jsx
var Activity = __webpack_require__(74685);
// EXTERNAL MODULE: ./components/rentals/Rentals.jsx
var Rentals = __webpack_require__(63734);
// EXTERNAL MODULE: ./components/cars/Cars.jsx
var Cars = __webpack_require__(12470);
// EXTERNAL MODULE: ./components/cruise/Cruise.jsx
var Cruise = __webpack_require__(89786);
// EXTERNAL MODULE: ./components/flight/Flights.jsx
var Flights = __webpack_require__(41582);
// EXTERNAL MODULE: ./components/footer/footer-3/index.jsx + 5 modules
var footer_3 = __webpack_require__(74174);
// EXTERNAL MODULE: ./components/home/home-3/AddBanner.jsx
var AddBanner = __webpack_require__(12777);
// EXTERNAL MODULE: ./components/home/home-3/WhyChoose.jsx
var WhyChoose = __webpack_require__(26069);
// EXTERNAL MODULE: ./components/header/MainMenu.jsx + 1 modules
var MainMenu = __webpack_require__(76746);
// EXTERNAL MODULE: ./components/header/CurrenctyMegaMenu.jsx
var CurrenctyMegaMenu = __webpack_require__(6425);
// EXTERNAL MODULE: ./components/header/LanguageMegaMenu.jsx
var LanguageMegaMenu = __webpack_require__(88261);
// EXTERNAL MODULE: ./components/header/HeaderSearch.jsx
var HeaderSearch = __webpack_require__(22810);
// EXTERNAL MODULE: ./components/header/MobileMenu.jsx + 1 modules
var MobileMenu = __webpack_require__(86624);
;// CONCATENATED MODULE: ./components/header/index.js








const Header = ()=>{
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    const changeBackground = ()=>{
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", changeBackground);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("header", {
            className: `header bg-white ${navbar ? "is-sticky" : ""}`,
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header__container px-30 sm:px-20",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        className: "header-logo mr-20",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/general/logo.png",
                                            alt: "logo icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(HeaderSearch/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "header-menu",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "header-menu__content",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(MainMenu/* default */.Z, {
                                                style: "text-dark-1"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row x-gap-20 items-center xxl:d-none",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(CurrenctyMegaMenu/* default */.Z, {
                                                textClass: "text-dark-1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-1 h-20 bg-white-20"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(LanguageMegaMenu/* default */.Z, {
                                                textClass: "text-dark-1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "d-flex items-center ml-20 is-menu-opened-hide md:d-none",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/others-pages/signup",
                                            className: "button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white",
                                            children: "Sign In / Register"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/others-pages/login",
                                                    className: "d-flex items-center icon-user text-inherit text-22"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        className: "d-flex items-center icon-menu text-inherit text-20",
                                                        "data-bs-toggle": "offcanvas",
                                                        "aria-controls": "mobile-sidebar_menu",
                                                        "data-bs-target": "#mobile-sidebar_menu"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "offcanvas offcanvas-start  mobile_menu-contnet",
                                                        tabIndex: "-1",
                                                        id: "mobile-sidebar_menu",
                                                        "aria-labelledby": "offcanvasMenuLabel",
                                                        "data-bs-scroll": "true",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx(MobileMenu/* default */.Z, {})
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
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./components/home/home-6/TourCategories.jsx
var TourCategories = __webpack_require__(23282);
;// CONCATENATED MODULE: ./pages/home/index.js




















const home = ()=>{
    const { tabs, currentTab } = (0,external_react_redux_.useSelector)((state)=>state.hero) || {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Home"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(hero, {}),
            currentTab == "Tour" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Adventure & Activity"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "Interdum et malesuada fames ac ante ipsum"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(TourCategories/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Tour" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Special Offers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "These popular destinations have a lot to offer"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-20 pt-40",
                            children: /*#__PURE__*/ jsx_runtime.jsx(AddBanner/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Hotel" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Why Choose Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "These popular destinations have a lot to offer"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-40 justify-between pt-50",
                            children: /*#__PURE__*/ jsx_runtime.jsx(WhyChoose/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Tour" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Top Destinations"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "These popular destinations have a lot to offer"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-40 justify-between pt-40 sm:pt-20",
                            children: /*#__PURE__*/ jsx_runtime.jsx(TopDestinations/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Hotel" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Recommended Hotels"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Hotels2/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Tour" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Most Popular Tours"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Tours/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Tour" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Trending Activity"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Activity/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Holyday Rentals" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Featured Holiday Rentals"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Rentals/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Car" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Popular Car Hire"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Cars/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Cruise" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-md",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Featured Cruise Deals"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Cruise/* default */.Z, {})
                        })
                    ]
                })
            }),
            currentTab == "Flights" && /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sectionTitle -md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "sectionTitle__title",
                                                children: "Popular Routes"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: " sectionTitle__text mt-5 sm:mt-0",
                                                children: "Interdum et malesuada fames ac ante ipsum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "#",
                                        className: "button -md -blue-1 bg-blue-1-05 text-blue-1",
                                        children: [
                                            "More ",
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "icon-arrow-top-right ml-15"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-40 sm:pt-20",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Flights/* default */.Z, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer_3/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages_home = (dynamic_default()(()=>Promise.resolve(home), {
    ssr: false
}));


/***/ }),

/***/ 36008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ tour_service)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(52167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./common/http.js

/* harmony default export */ const http = (external_axios_default().create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
    }
}));

;// CONCATENATED MODULE: ./services/tour.service.js

class TourDataService {
    getAll() {
        return http.get("/tours");
    }
    get(id) {
        return http.get(`/tour/${id}`);
    }
    create(data) {
        return http.post("/create-tour", data);
    }
    update(id, data) {
        return http.put(`/update-tour/${id}`, data);
    }
    delete(id) {
        return http.delete(`/remove-tour/${id}`);
    }
    deleteAll() {
        return http.delete(`/tours`);
    }
    findByTitle(title) {
        return http.get(`/tours?title=${title}`);
    }
}
/* harmony default export */ const tour_service = (new TourDataService());


/***/ })

};
;