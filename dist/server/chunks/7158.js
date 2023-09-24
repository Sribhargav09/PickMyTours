"use strict";
exports.id = 7158;
exports.ids = [7158];
exports.modules = {

/***/ 48719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ hero_MainFilterSearchBox)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./features/hero/findPlaceSlice.js
var findPlaceSlice = __webpack_require__(4666);
// EXTERNAL MODULE: ./components/hero/DateSearch.jsx
var DateSearch = __webpack_require__(67814);
;// CONCATENATED MODULE: ./components/hero/GuestSearch.jsx


const counters = [
    {
        name: "Adults",
        defaultValue: 2
    },
    {
        name: "Children",
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
const GuestSearch = ({ value, setValue })=>{
    const [guestCounts, setGuestCounts] = (0,external_react_.useState)({
        Adults: 2,
        Children: 1
    });
    const handleCounterChange = (name, value)=>{
        setGuestCounts((prevState)=>({
                ...prevState,
                [name]: value
            }));
    //setValue(guestCounts);
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
                            " "
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

// EXTERNAL MODULE: ./services/location.service.js
var location_service = __webpack_require__(1987);
// EXTERNAL MODULE: external "react-search-autocomplete"
var external_react_search_autocomplete_ = __webpack_require__(92827);
;// CONCATENATED MODULE: ./components/hero/LocationSearch.jsx






const LocationSearch = ({ setValue })=>{
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const [selectedItem, setSelectedItem] = (0,external_react_.useState)(null);
    const [locations, setLocations] = (0,external_react_.useState)([]);
    const [searchResults, setSearchResults] = (0,external_react_.useState)([]);
    const handleOnSearch = (string, results)=>{
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results);
    };
    const handleOnHover = (result)=>{
        // the item hovered
        console.log(result);
    };
    const handleOnSelect = (item)=>{
        // the item selected
        setSearchValue(item.name);
        setValue(item.name);
        console.log(item);
    };
    const handleOnFocus = ()=>{
        console.log("Focused");
    };
    const formatResult = (item)=>{
        const results = searchResults;
        setSearchResults([
            ...item,
            ...results
        ]);
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                style: {
                    display: "block",
                    textAlign: "left"
                },
                children: [
                    "name: ",
                    item.name
                ]
            })
        });
    };
    (0,external_react_.useEffect)(()=>{
        location_service/* default */.Z.getAll().then((response)=>{
            setLocations(response.data.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    const handleOptionClick = (item)=>{
        //Router.push(`/tour/tour-list-v1?location=${item.name}`);
        //location.href = `/tour/tour-list-v1?location=${item.name}`;
        setSearchValue(item.name);
        setValue(item.name);
        setSelectedItem(item);
    };
    const handleOnClear = ()=>{};
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
                            children: /*#__PURE__*/ jsx_runtime.jsx(external_react_search_autocomplete_.ReactSearchAutocomplete, {
                                items: locations,
                                fuseOptions: {
                                    keys: [
                                        "name"
                                    ]
                                },
                                resultStringKeyName: "name" // String to display in the results
                                ,
                                onSearch: handleOnSearch,
                                onHover: handleOnHover,
                                onSelect: handleOnSelect,
                                onFocus: handleOnFocus,
                                onClear: handleOnClear,
                                showIcon: false,
                                styling: {
                                    height: "34px",
                                    border: "1px solid #e5e4f",
                                    borderRadius: "0px",
                                    backgroundColor: "white",
                                    boxShadow: "none",
                                    hoverBackgroundColor: "lightgreen",
                                    placeholderColor: "darkgreen",
                                    clearIconMargin: "3px 8px 0 0",
                                    zIndex: 2
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "shadow-2 dropdown-menu min-width-400 d-none",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "y-gap-5 js-results",
                            children: searchResults && searchResults.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: `-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${selectedItem && selectedItem.id === item._id ? "active" : ""}`,
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
                                }, item._id))
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
    const [location, setLocation] = (0,external_react_.useState)("");
    const [dates, setDates] = (0,external_react_.useState)([]);
    const [guestsCount, setGuestsCount] = (0,external_react_.useState)(null);
    const Search = ()=>{
        router_default().push(`/tour/tour-list-v1?location=${location}&fromDate=${dates && dates[0] ? dates[0] : ""}&toDate=${dates && dates[1] ? dates[1] : ""}&adults=${guestsCount ? guestsCount.Adults : ""}&children=${guestsCount ? guestsCount.Children : ""}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tabs -bookmark js-tabs",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tabs__controls d-flex items-center js-tabs-controls",
                    children: tabs?.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: `tabs__button px-20 py-10 rounded-4 fw-600 text-white js-tabs-button ${tab?.name === currentTab ? "is-tab-el-active" : ""}`,
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
                            /*#__PURE__*/ jsx_runtime.jsx(hero_LocationSearch, {
                                setValue: setLocation
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-15 fw-500 ls-2 lh-16",
                                            children: "Check in - Check out"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(DateSearch/* default */.Z, {
                                            value: dates,
                                            setValue: setDates
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(hero_GuestSearch, {
                                value: guestsCount,
                                setValue: setGuestsCount
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "button-item",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white",
                                    onClick: Search,
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


/***/ }),

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
/* harmony import */ var _services_tour_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99446);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






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
    const [tourTypes, settourTypes] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        _services_tour_type_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getAll().then((response)=>{
            settourTypes(response.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...settings,
        arrows: false,
        children: tourTypes && tourTypes.data && tourTypes.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-xl col-md-4 col-sm-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/tour/tour-list-v1?type=${item.name}`,
                    className: "tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tourTypeCard__content text-center pt-60 pb-24 px-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: "200",
                                height: "200",
                                src: item.photo,
                                className: `text-60 sm:text-40 text-blue-1`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "text-dark-1 text-16 fw-500 mt-50 md:mt-30",
                                children: item.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-light-1 lh-14 text-14 mt-5",
                                children: [
                                    "10",
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

/***/ 62019:
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
// EXTERNAL MODULE: ./components/hero/MainFilterSearchBox.jsx + 2 modules
var MainFilterSearchBox = __webpack_require__(48719);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./services/tour.service.js
var tour_service = __webpack_require__(34663);
;// CONCATENATED MODULE: ./components/hero/index.js






const index = ()=>{
    const { tabs, currentTab } = (0,external_react_redux_.useSelector)((state)=>state.hero) || {};
    const delay = 3000;
    const [tours, setTours] = (0,external_react_.useState)([]);
    const selectedCurrency = (0,external_react_redux_.useSelector)((state)=>state.currency.selectedCurrency);
    const [currency, setCurrency] = (0,external_react_.useState)(selectedCurrency);
    (0,external_react_.useEffect)(()=>{
        setCurrency(selectedCurrency);
    }, [
        selectedCurrency
    ]);
    (0,external_react_.useEffect)(()=>{
        tour_service/* default */.Z.getAll().then((response)=>{
            setTours(response.data.data.slice(0, 3));
            console.log(response.data.data.slice(0, 3));
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    const [index, setIndex] = (0,external_react_.useState)(0);
    const timeoutRef = (0,external_react_.useRef)(null);
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    (0,external_react_.useEffect)(()=>{
        resetTimeout();
        timeoutRef.current = setTimeout(()=>setIndex((prevIndex)=>prevIndex + 1 === tours.length ? 0 : prevIndex + 1), delay);
        return ()=>{
            resetTimeout();
        };
    }, [
        index
    ]);
    const gotoTourPage = ()=>{
        const id = tours[index]._id;
        router_default().push(`tour/tour-single/${id}`);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "masthead -type-3 z-5",
        style: {
            height: "600px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "masthead__bg",
            style: {
                background: "none",
                cursor: "pointer",
                height: "200px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "slideshow",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "slideshowSlider",
                        onClick: gotoTourPage,
                        style: {
                            transform: `translate3d(${-index * 100}%, 0, 0)`
                        },
                        children: tours && tours.map((tour, index)=>{
                            if (tour && tour.gallery) {
                                // return <div
                                //   className="slide"
                                //   key={index}
                                //   style={{
                                //     backgroundImage: `url(${tour.gallery[0]})`,
                                //     backgroundRepeat: "no-repeat",
                                //     cursor: 'pointer',
                                //     backgroundSize: "cover", backgroundRepeat: 'no',
                                //     backgroundColor: 'transparent',
                                //   }}>
                                //   <div className="row justify-center mt-50" >
                                //     <div className="col-auto">
                                //       <div className="text-center">
                                //       </div>
                                //     </div>
                                //   </div>
                                // </div>
                                return /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    alt: "image",
                                    src: currentTab == "Tour" ? `${tour.gallery[0]}` : `/img/banners/${currentTab == "Holyday Rentals" ? "rental" : currentTab.toLowerCase()}.png`,
                                    className: "slide js-lazy"
                                });
                            }
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    style: {
                        position: "absolute",
                        cursor: "pointer",
                        left: "50px",
                        top: "50px"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-12",
                            style: {
                                width: "90%"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center",
                                    onClick: gotoTourPage,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            style: {
                                                color: "white"
                                            },
                                            className: "text-50 mt-80 lg:text-40 md:text-30 text-white",
                                            children: tours[index]?.name.substr(0, 30)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "text-white mt-20 md:mt-10",
                                            children: [
                                                currency.symbol,
                                                (tours[index]?.price * currency.rate).toFixed(2),
                                                "  - ",
                                                tours[index]?.location
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "masthead__tabs",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(MainFilterSearchBox/* default */.Z, {})
                                })
                            ]
                        })
                    })
                })
            ]
        })
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
// EXTERNAL MODULE: ./components/header/index.js
var header = __webpack_require__(13262);
// EXTERNAL MODULE: ./components/home/home-6/TourCategories.jsx
var TourCategories = __webpack_require__(23282);
// EXTERNAL MODULE: ./components/testimonial/Testimonial.jsx
var Testimonial = __webpack_require__(54439);
;// CONCATENATED MODULE: ./pages/home/index.js





















const home = ()=>{
    const { tabs, currentTab } = (0,external_react_redux_.useSelector)((state)=>state.hero) || {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Home"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(hero, {}),
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
                                                className: " sectionTitle__text mt-5 sm:mt-0"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: `/tour/tour-list-v1`,
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
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-center text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sectionTitle -md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "sectionTitle__title",
                                            children: "Choose Your Tour"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-30 pt-20 sm:pt-20 item_gap-x30",
                            children: /*#__PURE__*/ jsx_runtime.jsx(TourCategories/* default */.Z, {})
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
                                            children: "Special Offers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "The popular Offers"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-10 pt-20",
                            children: /*#__PURE__*/ jsx_runtime.jsx(AddBanner/* default */.Z, {})
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
                                            children: "Why Choose Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: " y-gap-20 mt-20",
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
                                            children: "Testimonial"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: " sectionTitle__text mt-5 sm:mt-0",
                                            children: "These popular testimonials from clients"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row y-gap-20 rounded-4 mt-20 pt-40 pl-40",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    class: "col-6  bg-blue-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: "Most Trusted Travel Community"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "tst-list",
                                            style: {
                                                marginLeft: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "A stellar rating of 5 on Trip Advisor."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "An exceptional rating of 4.9 stars on Google."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "50,000+ satisfied travelers."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "4,000+ successful trips."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: "More than 2500+ reviews and recommendations across all platforms."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    class: "col-6 bg-white",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Testimonial/* default */.Z, {})
                                })
                            ]
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
            currentTab == "Activity" && /*#__PURE__*/ jsx_runtime.jsx("section", {
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

/***/ 99446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);

class TourTypeDataService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/tourTypes");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tourType/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-tourType", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-tourType/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-tourType/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/tourTypes`);
    }
    findByTitle(title) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tourTypes?title=${title}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TourTypeDataService());


/***/ })

};
;