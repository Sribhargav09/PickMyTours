"use strict";
(() => {
var exports = {};
exports.id = 7820;
exports.ids = [7820];
exports.modules = {

/***/ 26906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Factivity_2Factivity_list_v2_preferredRegion_absolutePagePath_private_next_pages_2Factivity_2Factivity_list_v2_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/activity/activity-list-v2/index.jsx
var activity_list_v2_namespaceObject = {};
__webpack_require__.r(activity_list_v2_namespaceObject);
__webpack_require__.d(activity_list_v2_namespaceObject, {
  "default": () => (activity_list_v2)
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
// EXTERNAL MODULE: ./components/common/CallToActions.jsx
var CallToActions = __webpack_require__(10164);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./components/header/header-11/index.jsx
var header_11 = __webpack_require__(89483);
// EXTERNAL MODULE: ./components/footer/default/index.jsx + 4 modules
var footer_default = __webpack_require__(94609);
// EXTERNAL MODULE: ./components/activity-list/common/DateSearch.jsx
var DateSearch = __webpack_require__(28465);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./components/activity-list/activity-list-v2/LocationSearch.jsx


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
            className: "searchMenu-loc px-20 py-10 bg-white rounded-4 js-form-dd js-liverSearch",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    "data-bs-toggle": "dropdown",
                    "data-bs-auto-close": "true",
                    "data-bs-offset": "0,22",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "icon-location-2 text-20 text-light-1 mt-5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "ml-10 flex-grow-1",
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
                                            placeholder: "London",
                                            className: "js-search js-dd-focus",
                                            value: searchValue,
                                            onChange: (e)=>setSearchValue(e.target.value)
                                        })
                                    })
                                ]
                            })
                        ]
                    })
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

;// CONCATENATED MODULE: ./components/activity-list/activity-list-v2/MainFilterSearchBox.jsx



const MainFilterSearchBox = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime.jsx(LocationSearch, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "searchMenu-date px-20 py-10 bg-white rounded-4 -left js-form-dd js-calendar",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "icon-calendar-2 text-20 text-light-1 mt-5"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "ml-10 flex-grow-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "text-15 fw-500 ls-2 lh-16",
                                        children: "Check in - Check out"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(DateSearch/* default */.Z, {})
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "button-item h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "icon-search text-20 mr-10"
                            }),
                            "Search"
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const activity_list_v2_MainFilterSearchBox = (MainFilterSearchBox);

;// CONCATENATED MODULE: ./components/activity-list/activity-list-v2/TopHeaderFilter.jsx

const TopHeaderFilter = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "row y-gap-10 items-center justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-18",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "fw-500",
                                children: "3,269 properties"
                            }),
                            " in Europe"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row x-gap-20 y-gap-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-up-down text-14 mr-10"
                                        }),
                                        "Sort"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto d-none xl:d-block",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    "data-bs-toggle": "offcanvas",
                                    "data-bs-target": "#listingSidebar",
                                    className: "button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-up-down text-14 mr-10"
                                        }),
                                        "Filter"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const activity_list_v2_TopHeaderFilter = (TopHeaderFilter);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(38096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./data/activity.js
var activity = __webpack_require__(57804);
var activity_default = /*#__PURE__*/__webpack_require__.n(activity);
// EXTERNAL MODULE: ./utils/isTextMatched.js
var isTextMatched = __webpack_require__(14040);
;// CONCATENATED MODULE: ./components/activity-list/activity-list-v2/ActivityProperties.jsx






const ActivityProperties = ()=>{
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
        const char = props.type === "next" ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                className: "icon icon-chevron-right text-12"
            })
        }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "icon icon-chevron-left text-12"
            })
        });
        return /*#__PURE__*/ jsx_runtime.jsx("button", {
            className: className,
            onClick: props.onClick,
            children: char
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: activity_default().slice(0, 9).map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-lg-4 col-sm-6",
                "ata-aos": "fade",
                "ata-aos-delay": item?.delayAnimation,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: `/activity/activity-single/${item.id}`,
                    className: "activityCard -type-1 rounded-4 hover-inside-slider",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "activityCard__image position-relative",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "inside-slider",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((external_react_slick_default()), {
                                        ...itemSettings,
                                        arrows: true,
                                        nextArrow: /*#__PURE__*/ jsx_runtime.jsx(Arrow, {
                                            type: "next"
                                        }),
                                        prevArrow: /*#__PURE__*/ jsx_runtime.jsx(Arrow, {
                                            type: "prev"
                                        }),
                                        children: item?.slideImg?.map((slide, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "cardImage ratio ratio-1:1",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "cardImage__content ",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 300,
                                                        height: 300,
                                                        className: "col-12 js-lazy",
                                                        src: slide,
                                                        alt: "image"
                                                    })
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "cardImage__wishlist",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "button -blue-1 bg-white size-30 rounded-full shadow-2",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "icon-heart text-12"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "cardImage__leftBadge",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: `py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${(0,isTextMatched/* default */.Z)(item?.tag, "likely to sell out*") ? "bg-dark-1 text-white" : ""} ${(0,isTextMatched/* default */.Z)(item?.tag, "best seller") ? "bg-blue-1 text-white" : ""}  ${(0,isTextMatched/* default */.Z)(item?.tag, "top rated") ? "bg-yellow-1 text-dark-1" : ""}`,
                                            children: item.tag
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "activityCard__content mt-10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-14 lh-14 text-light-1 mb-5",
                                    children: [
                                        item?.duration,
                                        "+ hours"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "activityCard__title lh-16 fw-500 text-dark-1 text-18",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: item?.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-light-1 text-14 lh-14 mt-5",
                                    children: item?.location
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row justify-between items-center pt-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-auto",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "d-flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "icon-star text-yellow-1 text-10 mr-5"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text-14 text-light-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "text-15 text-dark-1 fw-500",
                                                                children: item?.ratings
                                                            }),
                                                            " ",
                                                            item?.numberOfReviews,
                                                            " reviews"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-auto",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "text-14 text-light-1",
                                                children: [
                                                    "From",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "text-16 fw-500 text-dark-1",
                                                        children: [
                                                            "US$",
                                                            item.price
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, item?.id))
    });
};
/* harmony default export */ const activity_list_v2_ActivityProperties = (ActivityProperties);

// EXTERNAL MODULE: ./components/activity-list/common/Pagination.jsx
var Pagination = __webpack_require__(23093);
// EXTERNAL MODULE: ./components/activity-list/sidebar/ActivityTypes.jsx
var ActivityTypes = __webpack_require__(9570);
// EXTERNAL MODULE: ./components/activity-list/sidebar/OthersFilter.jsx
var OthersFilter = __webpack_require__(41072);
// EXTERNAL MODULE: ./components/activity-list/sidebar/Duration.jsx
var Duration = __webpack_require__(25616);
// EXTERNAL MODULE: ./components/activity-list/sidebar/Languages.jsx
var Languages = __webpack_require__(67395);
// EXTERNAL MODULE: ./components/activity-list/sidebar/PirceSlider.jsx
var PirceSlider = __webpack_require__(79663);
// EXTERNAL MODULE: ./components/activity-list/sidebar/PopularAttractions.jsx
var PopularAttractions = __webpack_require__(53134);
;// CONCATENATED MODULE: ./components/activity-list/activity-list-v2/Sidebar.jsx








const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "sidebar__item -no-border",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "px-20 py-20 bg-light-2 rounded-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            className: "text-18 fw-500 mb-10",
                            children: "Search Activiy"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-20 pt-20",
                            children: /*#__PURE__*/ jsx_runtime.jsx(activity_list_v2_MainFilterSearchBox, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item -no-border",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Activity Types"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sidebar-checkbox",
                        children: /*#__PURE__*/ jsx_runtime.jsx(ActivityTypes/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Other"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sidebar-checkbox",
                        children: /*#__PURE__*/ jsx_runtime.jsx(OthersFilter/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item pb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Price"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row x-gap-10 y-gap-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx(PirceSlider/* default */.Z, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Duration"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sidebar-checkbox",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Duration/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Languages"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sidebar-checkbox",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Languages/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "sidebar__item",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-18 fw-500 mb-10",
                        children: "Popular Attractions"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "sidebar-checkbox",
                        children: /*#__PURE__*/ jsx_runtime.jsx(PopularAttractions/* default */.Z, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const activity_list_v2_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./pages/activity/activity-list-v2/index.jsx










const index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Activity List v2"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header_11/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-md layout-pb-lg",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row y-gap-30",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("aside", {
                                        className: "sidebar y-gap-40 xl:d-none",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(activity_list_v2_Sidebar, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "offcanvas offcanvas-start",
                                        tabIndex: "-1",
                                        id: "listingSidebar",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "offcanvas-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        className: "offcanvas-title",
                                                        id: "offcanvasLabel",
                                                        children: "Filter Activity"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        type: "button",
                                                        className: "btn-close",
                                                        "data-bs-dismiss": "offcanvas",
                                                        "aria-label": "Close"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "offcanvas-body",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("aside", {
                                                    className: "sidebar y-gap-40  xl:d-block",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(activity_list_v2_Sidebar, {})
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-9 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(activity_list_v2_TopHeaderFilter, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mt-30"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row y-gap-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(activity_list_v2_ActivityProperties, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(Pagination/* default */.Z, {})
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const activity_list_v2 = (index);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Factivity%2Factivity-list-v2&preferredRegion=&absolutePagePath=private-next-pages%2Factivity%2Factivity-list-v2%2Findex.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Factivity_2Factivity_list_v2_preferredRegion_absolutePagePath_private_next_pages_2Factivity_2Factivity_list_v2_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(activity_list_v2_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/activity/activity-list-v2","pathname":"/activity/activity-list-v2","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: activity_list_v2_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 14040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isTextMatched)
/* harmony export */ });
function isTextMatched(tag, match) {
    if (tag !== undefined && match !== "") {
        if (tag.toLocaleLowerCase() === match.toLocaleLowerCase()) {
            return true;
        }
        return false;
    }
    return false;
}


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

/***/ 63984:
/***/ ((module) => {

module.exports = require("react-input-range");

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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,627,7602,4609,164,7804,9483,4912,6123], () => (__webpack_exec__(26906)));
module.exports = __webpack_exports__;

})();