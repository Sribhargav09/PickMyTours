"use strict";
exports.id = 7602;
exports.ids = [7602];
exports.modules = {

/***/ 6425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CurrenctyMegaMenu = ({ textClass })=>{
    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCurrency = ()=>setClick((prevState)=>!prevState);
    const currencyContent = [
        {
            id: 1,
            name: "United States dollar",
            currency: "USD",
            symbol: "$"
        },
        {
            id: 2,
            name: "Australian dollar",
            currency: "AUD",
            symbol: "$"
        },
        {
            id: 3,
            name: "Brazilian real",
            currency: "BRL",
            symbol: "R$"
        },
        {
            id: 4,
            name: "Bulgarian lev",
            currency: "BGN",
            symbol: "лв."
        },
        {
            id: 5,
            name: "Canadian dollar",
            currency: "CAD",
            symbol: "$"
        },
        {
            id: 6,
            name: "Bangladeshi Taka",
            currency: "BDT",
            symbol: "৳"
        },
        {
            id: 7,
            name: "Azerbaijan Manat",
            currency: "AZN",
            symbol: "₼"
        },
        {
            id: 8,
            name: "Colombia Peso",
            currency: "COP",
            symbol: "$"
        },
        {
            id: 9,
            name: "Oman Rial",
            currency: "OMR",
            symbol: "﷼"
        },
        {
            id: 10,
            name: "India Rupee",
            currency: "INR",
            symbol: "₹"
        },
        {
            id: 11,
            name: "Iran Rial",
            currency: "IRR",
            symbol: "﷼"
        },
        {
            id: 12,
            name: "Japan Yen",
            currency: "JPY",
            symbol: "\xa3"
        },
        {
            id: 13,
            name: "Jersey Pound",
            currency: "JEP",
            symbol: "\xa3"
        },
        {
            id: 14,
            name: "Korea (South) Won",
            currency: "KRW",
            symbol: "	₩"
        },
        {
            id: 15,
            name: "Lebanon Pound",
            currency: "LBP",
            symbol: "$"
        },
        {
            id: 16,
            name: "Liberia Dollar",
            currency: "LRD",
            symbol: "$"
        },
        {
            id: 17,
            name: "Malaysia Ringgit",
            currency: "MYR",
            symbol: "$"
        },
        {
            id: 18,
            name: "Mexico Peso",
            currency: "MXN",
            symbol: "$"
        },
        {
            id: 19,
            name: "Namibia Dollar",
            currency: "NAD",
            symbol: "R$"
        },
        {
            id: 20,
            name: "Nepal Rupee",
            currency: "NPR",
            symbol: "Nepal Rupee"
        }
    ];
    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currencyContent[0]);
    const handleItemClick = (item)=>{
        setSelectedCurrency(item);
        setClick(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: `d-flex items-center text-14 ${textClass}`,
                    onClick: handleCurrency,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "js-currencyMenu-mainTitle",
                            children: selectedCurrency.currency
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-chevron-sm-down text-7 ml-10"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `currencyMenu js-currencyMenu ${click ? "" : "is-hidden"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "currencyMenu__bg",
                        onClick: handleCurrency
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "currencyMenu__content bg-white rounded-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-20 fw-500 lh-15",
                                        children: "Select your currency"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "pointer",
                                        onClick: handleCurrency,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "icon-close"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "modalGrid px-30 py-30 sm:px-15 sm:py-15",
                                children: currencyContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `modalGrid__item js-item ${selectedCurrency.currency === item.currency ? "active" : ""}`,
                                        onClick: ()=>handleItemClick(item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "py-10 px-15 sm:px-5 sm:py-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-15 lh-15 fw-500 text-dark-1",
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-14 lh-15 mt-5",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "js-title",
                                                            children: item.currency
                                                        }),
                                                        "-",
                                                        " ",
                                                        item.symbol
                                                    ]
                                                })
                                            ]
                                        })
                                    }, item.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrenctyMegaMenu);


/***/ }),

/***/ 88261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const LanguageMegaMenu = ({ textClass })=>{
    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleCurrency = ()=>setClick((prevState)=>!prevState);
    const languageContent = [
        {
            id: 1,
            language: "English",
            country: "United States"
        },
        {
            id: 2,
            language: "T\xfcrk\xe7e",
            country: "Turkey"
        },
        {
            id: 3,
            language: "Espa\xf1ol",
            country: "Espa\xf1a"
        },
        {
            id: 4,
            language: "Fran\xe7ais",
            country: "France"
        },
        {
            id: 5,
            language: "Italiano",
            country: "Italia"
        },
        {
            id: 6,
            language: "Dari, Pashto",
            country: "Afghanistan"
        },
        {
            id: 7,
            language: "Albanian",
            country: "Albania"
        },
        {
            id: 8,
            language: "Arabic, Berber",
            country: "	Algeria"
        },
        {
            id: 9,
            language: "Catalan",
            country: "Andorra"
        },
        {
            id: 10,
            language: "Kongo, Portuguese	",
            country: "Angola"
        },
        {
            id: 11,
            language: "Spanish",
            country: "Argentina"
        },
        {
            id: 12,
            language: "Armenian",
            country: "Armenia"
        },
        {
            id: 13,
            language: "English",
            country: "Australia"
        },
        {
            id: 14,
            language: "German",
            country: "Austria"
        },
        {
            id: 15,
            language: "Azerbaijani",
            country: "Azerbaijan"
        },
        {
            id: 16,
            language: "Bengali",
            country: "Bangladesh"
        },
        {
            id: 17,
            language: "English",
            country: "Barbados"
        },
        {
            id: 18,
            language: "Belarusian",
            country: "Belarus"
        },
        {
            id: 19,
            language: "Dutch, French",
            country: "Belgium"
        },
        {
            id: 20,
            language: "English",
            country: "Belize"
        }
    ];
    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(languageContent[0]);
    const handleItemClick = (item)=>{
        setSelectedCurrency(item);
        setClick(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: `d-flex items-center text-14 ${textClass}`,
                    onClick: handleCurrency,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            width: 20,
                            height: 20,
                            src: "/img/general/lang.png",
                            alt: "image",
                            className: "rounded-full mr-10"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "js-language-mainTitle",
                            children: [
                                " ",
                                selectedCurrency.country
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "icon-chevron-sm-down text-7 ml-15"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `langMenu js-langMenu ${click ? "" : "is-hidden"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "currencyMenu__bg",
                        onClick: handleCurrency
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "langMenu__content bg-white rounded-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-20 fw-500 lh-15",
                                        children: "Select your language"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "pointer",
                                        onClick: handleCurrency,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "icon-close"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "modalGrid px-30 py-30 sm:px-15 sm:py-15",
                                children: languageContent.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `modalGrid__item js-item ${selectedCurrency.country === item.country ? "active" : ""}`,
                                        onClick: ()=>handleItemClick(item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "py-10 px-15 sm:px-5 sm:py-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-15 lh-15 fw-500 text-dark-1",
                                                    children: item.language
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-14 lh-15 mt-5 js-title",
                                                    children: item.country
                                                })
                                            ]
                                        })
                                    }, item.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageMegaMenu);


/***/ })

};
;