"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 89786:
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
/* harmony import */ var _data_cruise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65175);
/* harmony import */ var _data_cruise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_cruise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14040);






const Cruise = ()=>{
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
            children: _data_cruise__WEBPACK_IMPORTED_MODULE_4___default().slice(0, 4).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "ata-aos": "fade",
                    "ata-aos-delay": item?.delayAnimation,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/cruise/cruise-single/${item.id}`,
                        className: "cruiseCard -type-1 rounded-4 hover-inside-slider",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cruiseCard__image position-relative",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "inside-slider",
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
                                                    className: "cardImage ratio ratio-6:5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cardImage__content",
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
                                                className: `py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(item?.tag, "cruise only") ? "bg-dark-1 text-white" : ""} ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(item?.tag, "best seller") ? "bg-blue-1 text-white" : ""}  ${(0,_utils_isTextMatched__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(item?.tag, "top rated") ? "bg-yellow-1 text-dark-1" : ""}`,
                                                children: item.tag
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "cruiseCard__content mt-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-14 lh-14 text-light-1 mb-5",
                                        children: item?.ship
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "cruiseCard__title text-dark-1 text-18 lh-16 fw-500",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: item?.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-light-1 lh-14 text-14 mt-5"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row y-gap-10 justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-auto",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-14 text-dark-1 fw-500",
                                                        children: "Sailing Date"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-14 text-light-1",
                                                        children: item?.date
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-auto",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-14 text-dark-1 fw-500",
                                                        children: "Departs"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-14 text-light-1",
                                                        children: item.departs
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-auto",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-14 text-dark-1 fw-500",
                                                        children: [
                                                            "Ports (",
                                                            item.portsNumber,
                                                            ")"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-14 text-light-1",
                                                        children: [
                                                            item?.portsName,
                                                            "..."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row y-gap-20 justify-between items-center pt-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "icon-star text-yellow-1 text-10 mr-5"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-14 text-light-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-15 text-dark-1 fw-500",
                                                                    children: item?.ratings
                                                                }),
                                                                item?.numberOfReviews,
                                                                " reviews"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-14 text-light-1",
                                                    children: [
                                                        "From",
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "text-16 fw-500 text-dark-1",
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
                        ]
                    })
                }, item?.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cruise);


/***/ }),

/***/ 40971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1987);




const TopDestinations = ()=>{
    const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _services_location_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getAll().then((response)=>{
            setLocations(response.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: locations && locations.data && locations.data.slice(0, 7).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/tour/tour-list-v1?location=${item.name}`,
                    className: "citiesCard -type-3 d-block h-full rounded-4 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "citiesCard__image ratio ratio-1:1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "col-12 js-lazy",
                                src: item.photo,
                                alt: "image"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "citiesCard__content px-30 py-30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-26 fw-600 text-white text-capitalize",
                                    children: item.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-15 text-white",
                                    children: [
                                        10,
                                        " properties"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, item._id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopDestinations);


/***/ }),

/***/ 74174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ footer_3)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/footer/footer-3/AppButton.jsx

const AppButton = ()=>{
    const appContent = [
        {
            id: 1,
            icon: "icon-apple",
            link: "https://www.apple.com/app-store/",
            text: "Download on the",
            market: "Apple Store"
        },
        {
            id: 2,
            icon: "icon-play-market",
            link: "https://play.google.com/store/apps/?hl=en&gl=US",
            text: "Get in on",
            market: "Google Play"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: appContent.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto col-lg-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "d-flex items-center px-20 py-10 rounded-4 bg-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: `${item.icon} text-24`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            href: item.link,
                            className: "ml-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-14 text-light-1",
                                    children: item.text
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-15 lh-1 fw-500",
                                    children: item.market
                                })
                            ]
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const footer_3_AppButton = (AppButton);

;// CONCATENATED MODULE: ./components/footer/footer-3/ContactInfo.jsx

const ContactInfo = ()=>{
    const contactContent = [
        {
            id: 1,
            title: "Toll Free Customer Care",
            action: "tel:(+91) 9000319957",
            text: "(+91) 9000319957"
        },
        {
            id: 2,
            title: "Need live support?",
            action: "mailto:info@pickmytours.com",
            text: "info@pickmytours.com"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: contactContent.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-sm-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-14",
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: item.action,
                        className: "text-18 fw-500 text-dark-1 mt-5",
                        children: item.text
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const footer_3_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./components/common/social/Social.jsx
var Social = __webpack_require__(68165);
;// CONCATENATED MODULE: ./components/footer/footer-3/Copyright.jsx


const Copyright = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "row justify-between items-center y-gap-10",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row x-gap-30 y-gap-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex items-center",
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " by",
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "https://themeforest.net/user/ib-themes",
                                        className: "mx-2",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "ib-themes"
                                    }),
                                    "All rights reserved."
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex x-gap-15",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Privacy"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Terms"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: "Site Map"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row y-gap-10 items-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "d-flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "d-flex items-center text-14 fw-500 text-dark-1 mr-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-globe text-16 mr-10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "underline",
                                            children: "English (US)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "d-flex items-center text-14 fw-500 text-dark-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-usd text-16 mr-10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "underline",
                                            children: "USD"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_3_Copyright = (Copyright);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/footerContent.js
var footerContent = __webpack_require__(40627);
var footerContent_default = /*#__PURE__*/__webpack_require__.n(footerContent);
;// CONCATENATED MODULE: ./components/footer/footer-3/FooterContent.jsx



const FooterContent = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: footerContent_default().map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-lg-4 col-sm-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "text-16 fw-500 mb-30",
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "d-flex y-gap-10 flex-column",
                        children: item.menuList.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: menu.routerPath,
                                children: menu.name
                            }, i))
                    })
                ]
            }, item.id))
    });
};
/* harmony default export */ const footer_3_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./components/footer/footer-3/Subscribe.jsx

const Subscribe = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "single-field relative d-flex justify-end items-center pb-30",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "bg-white rounded-8",
                type: "email",
                placeholder: "Your Email",
                required: true
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "submit",
                className: "absolute px-20 h-full text-15 fw-500 underline text-dark-1",
                children: "Subscribe"
            })
        ]
    });
};
/* harmony default export */ const footer_3_Subscribe = (Subscribe);

;// CONCATENATED MODULE: ./components/footer/footer-3/index.jsx







const index = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "footer -type-2 bg-light-2",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-60 pb-60",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row y-gap-40 justify-between xl:justify-start",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-4 col-lg-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/img/general/logo.png",
                                        alt: "image"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row y-gap-30 justify-between pt-30",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(footer_3_ContactInfo, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row x-gap-20 y-gap-15 pt-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-12",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "text-16 fw-500",
                                                    children: "Your all-in-one travel app"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(footer_3_AppButton, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "text-16 fw-500 mb-10",
                                                children: "Follow us on social media"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "d-flex x-gap-20 items-center",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(Social/* default */.Z, {})
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row y-gap-30",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-12",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "text-16 fw-500 mb-15",
                                                    children: "Get Updates & More"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(footer_3_Subscribe, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(footer_3_FooterContent, {})
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "py-20 border-top-light",
                    children: /*#__PURE__*/ jsx_runtime.jsx(footer_3_Copyright, {})
                })
            ]
        })
    });
};
/* harmony default export */ const footer_3 = (index);


/***/ }),

/***/ 22810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const HeaderSearch = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "single-field relative d-flex items-center xl:d-none mr-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "pl-50 border-light text-dark-1 h-50 rounded-8",
                type: "text",
                required: true,
                placeholder: "Destination, attraction, hotel, etc"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "absolute d-flex items-center h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "icon-search text-20 px-15 text-dark-1"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderSearch);


/***/ }),

/***/ 11397:
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
/* harmony import */ var _HeaderSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22810);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86624);








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
            className: `header bg-white ${navbar ? "is-sticky" : ""}`,
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        className: "header-logo mr-20",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/img/general/logo-dark.svg",
                                                alt: "logo icon"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/img/general/logo-dark.svg",
                                                alt: "logo icon"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderSearch__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-menu",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header-menu__content",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                style: "text-dark-1"
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
                                        className: "row x-gap-20 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurrenctyMegaMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                textClass: "text-dark-1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-1 h-20 bg-white-20"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LanguageMegaMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                textClass: "text-dark-1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex items-center ml-20 is-menu-opened-hide md:d-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/others-pages/signup",
                                            className: "button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white",
                                            children: "Sign In / Register"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1",
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
                                                        className: "offcanvas offcanvas-start  mobile_menu-contnet",
                                                        tabIndex: "-1",
                                                        id: "mobile-sidebar_menu",
                                                        "aria-labelledby": "offcanvasMenuLabel",
                                                        "data-bs-scroll": "true",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
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

/***/ 12777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8030);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);











const AddBanner = ()=>{
    const [offers, setOffers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [offer, setOffer] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        name: "",
        photo: "",
        discount: ""
    });
    const handleClickOpen = (item)=>{
        setOffer(item);
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleTabClick = (index)=>{
        setActiveTab(index);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _services_offer_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getAll().then((response)=>{
            setOffers(response.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            offers && offers.data && offers.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-4 col-sm-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "ctaCard -type-1 rounded-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ctaCard__image ratio ratio-41:45",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    width: 410,
                                    height: 455,
                                    className: "js-lazy img-ratio",
                                    src: item.photo,
                                    alt: "image"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ctaCard__content py-50 px-50 lg:py-30 lg:px-30",
                                children: [
                                    item.discount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-15 fw-500 text-white mb-10",
                                            children: [
                                                "Up to ",
                                                item.discount,
                                                "% discount"
                                            ]
                                        })
                                    }) : "",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "text-28 lg:text-24 text-white",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-inline-block mt-30",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            onClick: ()=>handleClickOpen(item),
                                            className: "button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1",
                                            children: "Get the Offer"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }, item._id)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6___default()), {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default()), {
                        id: "alert-dialog-title",
                        children: "Get the Offer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default()), {
                        style: {
                            width: "600px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default()), {
                            className: "contact-us",
                            id: "alert-dialog-description",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                width: "400px",
                                                height: "400px",
                                                src: offer.photo,
                                                alt: "img"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: offer.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    offer.discount,
                                                    "% Offer"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col container",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            action: "#",
                                            method: "post",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "col",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "form-control",
                                                                        type: "text",
                                                                        id: "name",
                                                                        name: "name",
                                                                        placeholder: "Name",
                                                                        required: true
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "asterisk_input1",
                                                                        children: "  "
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "col",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "tel",
                                                                        id: "phone",
                                                                        name: "phone",
                                                                        placeholder: "Phone No.",
                                                                        required: true
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "asterisk_input2",
                                                                        children: "  "
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        required: true
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        id: "information",
                                                        name: "information",
                                                        placeholder: "What Information you need?",
                                                        required: true
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                class: "btn btn-success",
                                autoFocus: true,
                                children: "Submit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                class: "btn btn-danger",
                                onClick: handleClose,
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddBanner);


/***/ }),

/***/ 26069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1987);




const WhyChoose = ()=>{
    const expertContent = [
        {
            id: 1,
            icon: "/img/featureIcons/1/1.svg",
            title: "Best Price Guarantee",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
            id: 2,
            icon: "/img/featureIcons/1/2.svg",
            title: "Easy & Quick Booking",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        },
        {
            id: 3,
            icon: "/img/featureIcons/1/3.svg",
            title: "Customer Care 24/7",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        }
    ];
    const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _services_location_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getAll().then((response)=>{
            setLocations(response.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    const blockContent = [
        {
            id: 1,
            icon: "/img/featureIcons/3/1.svg",
            title: "Best Price Guarantee",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            delayAnimation: "100"
        },
        {
            id: 2,
            icon: "/img/featureIcons/3/2.svg",
            title: "Easy & Quick Booking",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            delayAnimation: "200"
        },
        {
            id: 3,
            icon: "/img/featureIcons/3/3.svg",
            title: "Customer Care 24/7",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            delayAnimation: "300"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row why-us",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "column",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/img/banners/tour.png"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "column pt-40 pl-40 pr-40",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Why Choose Us?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            class: "text pt-20",
                            children: "At PickMyTour, we understand that travel is not just about reaching a destination; it's about the journey itself. That's why we are passionate about curating unforgettable experiences that leave a lasting imprint on your heart and soul. Our passion is to transform your wanderlust into meticulously planned journeys that leave you with memories to treasure. With our team of seasoned travel experts, we offer a level of expertise and personalization that sets us apart. We understand that your travels are as unique as you are, and that's why we go the extra mile to curate experiences that match your interests, whether it's exploring ancient ruins, savoring exotic cuisine, or simply unwinding on a pristine beach. Our commitment to safety, competitive pricing, and round-the-clock support ensure that your journey is not just extraordinary but hassle-free. Choose PickMyTour and embark on a voyage where your dreams are our destination."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            class: "text",
                            children: [
                                "We first gained recognition by ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "StartUp India"
                                }),
                                " back in 2019, followed by being awarded the ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Travelers choice award"
                                }),
                                " in 2020 by ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Trip Advisor."
                                }),
                                " In 2021, we were awarded the ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Best Enterprise in Travel and Tourism 2021 by MSME business India awards."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            class: "text",
                            children: "All the milestones that we have achieved are because of the constant support and positive feedback of our travelers."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhyChoose);


/***/ }),

/***/ 65175:
/***/ ((module) => {


module.exports = [
    {
        id: 1,
        tag: "cruise only",
        slideImg: [
            "/img/cruises/1.png"
        ],
        title: "7 Night Cruise to the Western Mediterranean",
        ship: "Norwegian Getaway",
        date: "18/05/23",
        departs: "Southampton",
        portsNumber: "9",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "94",
        price: "67",
        delayAnimation: "100"
    },
    {
        id: 2,
        tag: "",
        slideImg: [
            "/img/cruises/2.png",
            "/img/cruises/1.png",
            "/img/cruises/3.png"
        ],
        title: "12 Night Cruise to the British Isles & Western Europe",
        ship: "Norwegian Getaway",
        date: "18/02/23",
        departs: "Southampton",
        portsNumber: "8",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "74",
        price: "99",
        delayAnimation: "200"
    },
    {
        id: 3,
        tag: "best seller",
        slideImg: [
            "/img/cruises/3.png"
        ],
        title: "11 Night Cruise to the Eastern Mediterranean",
        ship: "Norwegian Getaway",
        date: "18/03/23",
        departs: "Southampton",
        portsNumber: "7",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "56",
        price: "88",
        delayAnimation: "300"
    },
    {
        id: 4,
        tag: "top rated",
        slideImg: [
            "/img/cruises/4.png"
        ],
        title: "13 Night Cruise to the Baltic Sea Western Europe",
        ship: "Norwegian Getaway",
        date: "18/04/23",
        departs: "Southampton",
        portsNumber: "6",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "54",
        price: "55",
        delayAnimation: "400"
    },
    {
        id: 5,
        tag: "cruise only",
        slideImg: [
            "/img/cruises/5.png"
        ],
        title: "7 Night Cruise to the Western Mediterranean",
        ship: "Norwegian Getaway",
        date: "18/05/23",
        departs: "Southampton",
        portsNumber: "9",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "94",
        price: "67",
        delayAnimation: "100"
    },
    {
        id: 6,
        tag: "",
        slideImg: [
            "/img/cruises/2.png",
            "/img/cruises/1.png",
            "/img/cruises/3.png"
        ],
        title: "12 Night Cruise to the British Isles & Western Europe",
        ship: "Norwegian Getaway",
        date: "18/02/23",
        departs: "Southampton",
        portsNumber: "8",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "74",
        price: "99",
        delayAnimation: "200"
    },
    {
        id: 7,
        tag: "best seller",
        slideImg: [
            "/img/cruises/3.png"
        ],
        title: "11 Night Cruise to the Eastern Mediterranean",
        ship: "Norwegian Getaway",
        date: "18/03/23",
        departs: "Southampton",
        portsNumber: "7",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "56",
        price: "88",
        delayAnimation: "300"
    },
    {
        id: 8,
        tag: "top rated",
        slideImg: [
            "/img/cruises/4.png"
        ],
        title: "13 Night Cruise to the Baltic Sea Western Europe",
        ship: "Norwegian Getaway",
        date: "18/04/23",
        departs: "Southampton",
        portsNumber: "6",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "54",
        price: "55",
        delayAnimation: "400"
    },
    {
        id: 9,
        tag: "cruise only",
        slideImg: [
            "/img/cruises/5.png"
        ],
        title: "7 Night Cruise to the Western Mediterranean",
        ship: "Norwegian Getaway",
        date: "18/05/23",
        departs: "Southampton",
        portsNumber: "9",
        portsName: "Sete, Toulon",
        ratings: "4.82",
        numberOfReviews: "94",
        price: "67",
        delayAnimation: "500"
    }
];


/***/ }),

/***/ 1987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);

class LocationDataService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/locations");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/location/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-location", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-location/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-location/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/locations`);
    }
    findByTitle(title) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/locations?title=${title}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocationDataService());


/***/ }),

/***/ 8030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);

class OfferService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/offers");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/offer/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-offer", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-offer/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-offer/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/offers`);
    }
    findByTitle(title) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/offers?title=${title}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new OfferService());


/***/ })

};
;