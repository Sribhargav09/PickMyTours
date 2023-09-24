"use strict";
(() => {
var exports = {};
exports.id = 4114;
exports.ids = [4114];
exports.modules = {

/***/ 41610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fhome_2Fhome_3_preferredRegion_absolutePagePath_private_next_pages_2Fhome_2Fhome_3_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/home/home_3.js
var home_3_namespaceObject = {};
__webpack_require__.r(home_3_namespaceObject);
__webpack_require__.d(home_3_namespaceObject, {
  "default": () => (home_home_3)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(23185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(57182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(22638);
// EXTERNAL MODULE: ./pages/_app.js + 3 modules
var _app = __webpack_require__(50693);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./components/header/header-3/index.jsx
var header_3 = __webpack_require__(11397);
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
;// CONCATENATED MODULE: ./components/hero/hero-3/GuestSearch.jsx


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
/* harmony default export */ const hero_3_GuestSearch = (GuestSearch);

;// CONCATENATED MODULE: ./components/hero/hero-3/LocationSearch.jsx


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
/* harmony default export */ const hero_3_LocationSearch = (LocationSearch);

;// CONCATENATED MODULE: ./components/hero/hero-3/MainFilterSearchBox.jsx







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
                            /*#__PURE__*/ jsx_runtime.jsx(hero_3_LocationSearch, {}),
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
                            /*#__PURE__*/ jsx_runtime.jsx(hero_3_GuestSearch, {}),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "button-item",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white",
                                    onClick: ()=>router_default().push("/hotel/hotel-list-v3"),
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
/* harmony default export */ const hero_3_MainFilterSearchBox = (MainFilterSearchBox);

;// CONCATENATED MODULE: ./components/hero/hero-3/index.jsx


const index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "masthead -type-3 z-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "masthead__bg",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    alt: "image",
                    src: "/img/masthead/3/bg.png",
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
                                        "ata-aos": "fade-up",
                                        children: "Discover Your World"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-white mt-6 md:mt-10",
                                        "ata-aos": "fade-up",
                                        "ata-aos-delay": "100",
                                        children: "Discover amzaing places at exclusive deals"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "masthead__tabs",
                                "ata-aos": "fade-up",
                                "ata-aos-delay": "200",
                                children: /*#__PURE__*/ jsx_runtime.jsx(hero_3_MainFilterSearchBox, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const hero_3 = (index);

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
;// CONCATENATED MODULE: ./pages/home/home_3.js

















const home_3 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Home-3"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header_3/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(hero_3, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
            /*#__PURE__*/ jsx_runtime.jsx("section", {
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
/* harmony default export */ const home_home_3 = (dynamic_default()(()=>Promise.resolve(home_3), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fhome%2Fhome_3&preferredRegion=&absolutePagePath=private-next-pages%2Fhome%2Fhome_3.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fhome_2Fhome_3_preferredRegion_absolutePagePath_private_next_pages_2Fhome_2Fhome_3_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(home_3_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(home_3_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(home_3_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(home_3_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(home_3_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(home_3_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(home_3_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(home_3_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(home_3_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(home_3_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(home_3_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/home/home_3","pathname":"/home/home_3","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: home_3_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 53819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 29404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 32268:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 52468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 69783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 33100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 35132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 61223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 13456:
/***/ ((module) => {

module.exports = require("react-multi-date-picker");

/***/ }),

/***/ 41981:
/***/ ((module) => {

module.exports = require("react-pro-sidebar");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 38096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 95973:
/***/ ((module) => {

module.exports = require("react-tabs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,5152,330,8443,3828,6746,627,7602,7814,3022,9834,7804,8085,3734,4685,8561,5045,1582,108], () => (__webpack_exec__(41610)));
module.exports = __webpack_exports__;

})();