exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 79933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sy: () => (/* binding */ changeCurrency)
/* harmony export */ });
/* unused harmony export currencySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const currencyContent = [
    {
        id: 1,
        name: "United States dollar",
        currency: "USD",
        rate: "",
        symbol: "$"
    },
    {
        id: 2,
        name: "Australian dollar",
        currency: "AUD",
        rate: "",
        symbol: "$"
    },
    {
        id: 3,
        name: "Brazilian real",
        currency: "BRL",
        rate: "",
        symbol: "R$"
    },
    {
        id: 4,
        name: "Bulgarian lev",
        currency: "BGN",
        rate: "",
        symbol: "лв."
    },
    {
        id: 5,
        name: "Canadian dollar",
        currency: "CAD",
        rate: "",
        symbol: "$"
    },
    {
        id: 6,
        name: "Bangladeshi Taka",
        currency: "BDT",
        rate: "",
        symbol: "৳"
    },
    {
        id: 7,
        name: "Azerbaijan Manat",
        currency: "AZN",
        rate: "",
        symbol: "₼"
    },
    {
        id: 8,
        name: "Colombia Peso",
        currency: "COP",
        rate: "",
        symbol: "$"
    },
    {
        id: 9,
        name: "Oman Rial",
        currency: "OMR",
        rate: "",
        symbol: "﷼"
    },
    {
        id: 10,
        name: "India Rupee",
        currency: "INR",
        rate: "",
        symbol: "₹"
    },
    {
        id: 11,
        name: "Iran Rial",
        currency: "IRR",
        rate: "",
        symbol: "﷼"
    },
    {
        id: 12,
        name: "Japan Yen",
        currency: "JPY",
        rate: "",
        symbol: "\xa3"
    },
    {
        id: 13,
        name: "Jersey Pound",
        currency: "JEP",
        rate: "",
        symbol: "\xa3"
    },
    {
        id: 14,
        name: "Korea (South) Won",
        currency: "KRW",
        rate: "",
        symbol: "	₩"
    },
    {
        id: 15,
        name: "Lebanon Pound",
        currency: "LBP",
        rate: "",
        symbol: "$"
    },
    {
        id: 16,
        name: "Liberia Dollar",
        currency: "LRD",
        rate: "",
        symbol: "$"
    },
    {
        id: 17,
        name: "Malaysia Ringgit",
        currency: "MYR",
        rate: "",
        symbol: "$"
    },
    {
        id: 18,
        name: "Mexico Peso",
        currency: "MXN",
        rate: "",
        symbol: "$"
    },
    {
        id: 19,
        name: "Namibia Dollar",
        currency: "NAD",
        rate: "",
        symbol: "R$"
    },
    {
        id: 20,
        name: "Nepal Rupee",
        currency: "NPR",
        rate: "",
        symbol: "Nepal Rupee"
    }
];
const currencySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "currency",
    initialState: {
        currencies: currencyContent,
        selectedCurrency: currencyContent[9]
    },
    reducers: {
        changeCurrency: (state, action)=>{
            console.log(action.payload);
            state.selectedCurrency = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { changeCurrency } = currencySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySlice.reducer);


/***/ }),

/***/ 46553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D0: () => (/* binding */ changeLanguage),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export languageSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

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
        country: "India"
    }
];
const languageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "language",
    initialState: {
        languagies: languageContent,
        selectedLanguage: languageContent[0]
    },
    reducers: {
        changeLanguage: (state, action)=>{
            state.selectedLanguage = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { changeLanguage } = languageSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageSlice.reducer);


/***/ }),

/***/ 84403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   av: () => (/* binding */ setUser),
/* harmony export */   o4: () => (/* binding */ setToken)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        loginUser: "",
        token: ""
    },
    reducers: {
        setUser: (state, action)=>{
            state.loginUser = action.payload;
        },
        setToken: (state, action)=>{
            state.token = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setUser, setToken } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   f9: () => (/* binding */ addCurrentTab)
/* harmony export */ });
/* unused harmony export findPlaceSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    tabs: [
        {
            id: 1,
            name: "Tour",
            icon: "icon-destination"
        },
        {
            id: 2,
            name: "Activity",
            icon: "icon-ski"
        },
        {
            id: 3,
            name: "Holyday Rentals",
            icon: "icon-home"
        },
        {
            id: 4,
            name: "Hotel",
            icon: "icon-bed"
        },
        {
            id: 5,
            name: "Car",
            icon: "icon-car"
        },
        {
            id: 6,
            name: "Cruise",
            icon: "icon-yatch"
        },
        {
            id: 7,
            name: "Flight",
            icon: "icon-tickets"
        }
    ],
    currentTab: "Tour"
};
const findPlaceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "find-place",
    initialState,
    reducers: {
        addCurrentTab: (state, { payload })=>{
            state.currentTab = payload;
        }
    }
});
const { addCurrentTab } = findPlaceSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findPlaceSlice.reducer);


/***/ }),

/***/ 50693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(69783);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./components/common/ScrollTop.jsx


function ScrollToTop() {
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = ()=>{
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: isVisible && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "scroll-to-top scroll-to-target",
                onClick: scrollToTop,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "icon icon-arrow-top-right"
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(58722);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination/pagination.min.css
var pagination_min = __webpack_require__(62996);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation/navigation.min.css
var navigation_min = __webpack_require__(69176);
// EXTERNAL MODULE: ./node_modules/swiper/modules/scrollbar/scrollbar.min.css
var scrollbar_min = __webpack_require__(15198);
// EXTERNAL MODULE: ./node_modules/swiper/modules/effect-cards/effect-cards.min.css
var effect_cards_min = __webpack_require__(8936);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(81759);
// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(31663);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: ./app/features/currency/currencySlice.js
var currencySlice = __webpack_require__(79933);
// EXTERNAL MODULE: ./app/features/language/languageSlice.js
var languageSlice = __webpack_require__(46553);
// EXTERNAL MODULE: ./features/hero/findPlaceSlice.js
var findPlaceSlice = __webpack_require__(4666);
// EXTERNAL MODULE: ./app/features/user/userSlice.js
var userSlice = __webpack_require__(84403);
;// CONCATENATED MODULE: ./app/store.js





const store = (0,toolkit_.configureStore)({
    reducer: {
        currency: currencySlice/* default */.ZP,
        language: languageSlice/* default */.ZP,
        hero: findPlaceSlice/* default */.ZP,
        user: userSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(61223);
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);
// EXTERNAL MODULE: ./components/common/spinner.css
var spinner = __webpack_require__(22538);
;// CONCATENATED MODULE: ./components/common/Spinner.jsx





const Spinner = ()=>{
    const loader = (0,external_react_redux_.useSelector)((state)=>state.hero.loader);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: loader && /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "spinner",
            children: /*#__PURE__*/ jsx_runtime.jsx((external_react_loader_spinner_default()), {
                type: "ThreeDots",
                color: "#2BAD60",
                height: "100",
                width: "100"
            })
        })
    });
};
/* harmony default export */ const common_Spinner = (Spinner);

;// CONCATENATED MODULE: ./pages/_app.js














if (false) {}
function App({ Component, pageProps }) {
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
        //showLoader(false);
        }, 1200);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_redux_.Provider, {
            store: store,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime.jsx(ScrollToTop, {}),
                /*#__PURE__*/ jsx_runtime.jsx(common_Spinner, {})
            ]
        })
    });
}


/***/ }),

/***/ 22638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "pickmytours - Tour & Travel React NextJS Template"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "true"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: " booking, car rental, cruise, destination, experiences, flight, holiday, hotel, real estate, resort, tour, travel, travel agency, trip, vacation"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 22538:
/***/ (() => {



/***/ }),

/***/ 31663:
/***/ (() => {



/***/ })

};
;