"use strict";
exports.id = 6922;
exports.ids = [6922];
exports.modules = {

/***/ 96922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ common_DropdownSelelctBar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./components/hotel-list/common/RatingFilter.jsx


const RatingFilter = ()=>{
    // for start and guest rating code
    const [activeRating, setActiveRating] = (0,external_react_.useState)(0);
    const handleRatingClick = (rating)=>{
        setActiveRating(rating);
    };
    const [guestRating, setGuestRating] = (0,external_react_.useState)(0);
    const handleGuestRatingClick = (rating)=>{
        setGuestRating(rating);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative js-form-dd",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light -dd-button",
                            "data-bs-toggle": "dropdown",
                            "data-bs-auto-close": "true",
                            "aria-expanded": "false",
                            "data-bs-offset": "0,10",
                            children: [
                                activeRating === 0 ? "Star Rating" : activeRating + " Star Rating",
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon icon-chevron-sm-down text-7 ml-15"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropRating dropdown-menu",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "px-20 py-20 rounded-4 bg-white border-light",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "text-18 fw-500 mb-10",
                                        children: "Guest Rating"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row x-gap-10 y-gap-10 pt-10",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((rating)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    className: `button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${activeRating === rating ? "active" : ""}`,
                                                    onClick: ()=>handleRatingClick(rating),
                                                    children: rating
                                                })
                                            }, rating))
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative js-form-dd",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light -dd-button",
                            "data-bs-toggle": "dropdown",
                            "data-bs-auto-close": "true",
                            "aria-expanded": "false",
                            "data-bs-offset": "0,10",
                            children: [
                                guestRating === 0 ? "Star Rating" : guestRating + " Star Rating",
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon icon-chevron-sm-down text-7 ml-15"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropRating dropdown-menu",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "px-20 py-20 rounded-4 bg-white border-light",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "text-18 fw-500 mb-10",
                                        children: "Guest Rating"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row x-gap-10 y-gap-10 pt-10",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((rating)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    className: `button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${guestRating === rating ? "active" : ""}`,
                                                    onClick: ()=>handleGuestRatingClick(rating),
                                                    children: rating
                                                })
                                            }, rating))
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_RatingFilter = (RatingFilter);

;// CONCATENATED MODULE: ./components/hotel-list/common/DropdownSelelctBar.jsx



const DropdownSelelctBar = ()=>{
    const [priceValue, setPriceValue] = (0,external_react_.useState)("Price");
    const [amenitiesValue, setAmenitiesValue] = (0,external_react_.useState)("Amenities");
    const [styleValue, setStyleValue] = (0,external_react_.useState)("Style");
    const handlePriceValueChange = (value)=>{
        setPriceValue(value);
    };
    const handleAmenitesValueChange = (value)=>{
        setAmenitiesValue(value);
    };
    const handleStyleChange = (value)=>{
        setStyleValue(value);
    };
    const dropdowns = [
        {
            title: "Price",
            value: priceValue,
            options: [
                "Less than $500",
                "$500 - $1000",
                "$1000 - $2000",
                "$2000+"
            ],
            onChange: handlePriceValueChange
        },
        {
            title: "Amenities",
            value: amenitiesValue,
            options: [
                "Swimming pool",
                "Laundry",
                "Outdoor spaces",
                "Security"
            ],
            onChange: handleAmenitesValueChange
        },
        {
            title: "Style",
            value: styleValue,
            options: [
                "Modern",
                "Bohemian",
                "Minimalist",
                "Contemporary"
            ],
            onChange: handleStyleChange
        }
    ];
    // for neighborhood code
    const [selectedValues, setSelectedValues] = (0,external_react_.useState)([]);
    const data = [
        {
            label: "Central London",
            value: "central_london"
        },
        {
            label: "Guests' favourite area",
            value: "favourite_area"
        },
        {
            label: "Westminster Borough",
            value: "westminster_borough"
        },
        {
            label: "Kensington and Chelsea",
            value: "kensington_and_chelsea"
        },
        {
            label: "Oxford Street",
            value: "oxford_street"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            dropdowns.map((dropdown, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "dropdown js-dropdown js-amenities-active",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34",
                                "data-bs-toggle": "dropdown",
                                "data-bs-auto-close": "true",
                                "aria-expanded": "false",
                                "data-bs-offset": "0,10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "js-dropdown-title",
                                        children: dropdown.value
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon icon-chevron-sm-down text-7 ml-10"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "toggle-element -dropdown js-click-dropdown dropdown-menu",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-15 y-gap-15 js-dropdown-list",
                                    children: dropdown.options.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: `${item === dropdown.value ? "text-blue-1 " : ""}d-block js-dropdown-link`,
                                                onClick: ()=>dropdown.onChange(item),
                                                children: item
                                            })
                                        }, index))
                                })
                            })
                        ]
                    })
                }, index)),
            /*#__PURE__*/ jsx_runtime.jsx(common_RatingFilter, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light",
                            "data-bs-toggle": "dropdown",
                            "data-bs-auto-close": "outside",
                            "aria-expanded": "false",
                            "data-bs-offset": "0,10",
                            children: [
                                selectedValues.length === 0 ? "Neighborhood" : selectedValues.join(", "),
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon icon-chevron-sm-down text-7 ml-15"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "dropRating dropdown-menu",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "px-20 py-20 rounded-4 bg-white border-light",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "text-15 fw-500 mb-15",
                                        children: "Neighborhood"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "sidebar-checkbox",
                                        children: data.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "row y-gap-10 items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-auto",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "form-checkbox d-flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "checkbox",
                                                                    name: item.value,
                                                                    checked: selectedValues.includes(item.value),
                                                                    onChange: (e)=>{
                                                                        const { checked, name } = e.target;
                                                                        setSelectedValues((prevValues)=>checked ? [
                                                                                ...prevValues,
                                                                                name
                                                                            ] : prevValues.filter((value)=>value !== name));
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "form-checkbox__mark",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "form-checkbox__icon icon-check"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-15 ml-10",
                                                                    children: item.label
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-auto",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "text-15 text-light-1",
                                                            children: "92"
                                                        })
                                                    })
                                                ]
                                            }, item.value))
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "d-block text-14 fw-500 underline text-blue-1 mt-15",
                                        children: "Show all 30"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_DropdownSelelctBar = (DropdownSelelctBar);


/***/ })

};
;