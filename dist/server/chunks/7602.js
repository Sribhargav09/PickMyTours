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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_features_currency_currencySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79933);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





const CurrenctyMegaMenu = ({ textClass })=>{
    const selectedCurrencyValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.currency.selectedCurrency);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCurrency = ()=>setClick((prevState)=>!prevState);
    const currencyContent = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.currency.currencies);
    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedCurrencyValue);
    const handleItemClick = (currencyItem)=>{
        setClick(false);
        const to = currencyItem.currency?.toLowerCase();
        const from = selectedCurrency.currency?.toLowerCase();
        axios__WEBPACK_IMPORTED_MODULE_4___default().get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`).then((res)=>{
            console.log(res);
            const rates = res.data[from];
            //currencyItem.rate = JSON.stringify(rates[to]);
            const updateCurrencyItem = {
                ...currencyItem,
                rate: rates[to]
            };
            dispatch((0,_app_features_currency_currencySlice__WEBPACK_IMPORTED_MODULE_3__/* .changeCurrency */ .sy)(updateCurrencyItem));
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedCurrency(selectedCurrencyValue);
    }, [
        selectedCurrencyValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const to = "inr";
        const from = "inr";
        axios__WEBPACK_IMPORTED_MODULE_4___default().get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`).then((res)=>{
            console.log(res);
            const rates = res.data[from];
            const updateCurrencyItem = {
                ...selectedCurrency,
                rate: rates[to]
            };
            dispatch((0,_app_features_currency_currencySlice__WEBPACK_IMPORTED_MODULE_3__/* .changeCurrency */ .sy)(updateCurrencyItem));
        });
    }, []);
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_features_language_languageSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46553);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






const LanguageMegaMenu = ({ textClass })=>{
    const selectedLanguageValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.language.selectedLanguage);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleCurrency = ()=>setClick((prevState)=>!prevState);
    const languageContent = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.language.languagies);
    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectedLanguageValue);
    const handleItemClick = (item)=>{
        setSelectedCurrency(item);
        setClick(false);
        dispatch((0,_app_features_language_languageSlice__WEBPACK_IMPORTED_MODULE_4__/* .changeLanguage */ .D0)(item));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://ipapi.co/json/").then((response)=>{
            let data = response.data;
            // setState({
            //   ...state,
            //   ip: data.ip,
            //   countryName: data.country_name,
            //   countryCode: data.country_calling_code,
            //   city: data.city,
            //   timezone: data.timezone
            // });
            //console.log(data.country_name);
            languageContent.map((ln)=>{
                //console.log(ln)
                const ct = ln.country;
                if (ct == data.country_name) {
                    dispatch((0,_app_features_language_languageSlice__WEBPACK_IMPORTED_MODULE_4__/* .changeLanguage */ .D0)(ln));
                }
            });
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSelectedCurrency(selectedLanguageValue);
    }, [
        selectedLanguageValue
    ]);
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
                            src: "/img/general/globe.svg",
                            alt: "image",
                            className: "rounded-full mr-10"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "js-language-mainTitle",
                            children: [
                                " ",
                                selectedCurrency && selectedCurrency.language
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
                                        className: `modalGrid__item js-item ${selectedCurrency && selectedCurrency.country === item.country ? "active" : ""}`,
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