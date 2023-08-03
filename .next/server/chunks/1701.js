exports.id = 1701;
exports.ids = [1701];
exports.modules = {

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

/***/ 1198:
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
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
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
// EXTERNAL MODULE: ./features/hero/findPlaceSlice.js
var findPlaceSlice = __webpack_require__(4666);
;// CONCATENATED MODULE: ./app/store.js


const store = (0,toolkit_.configureStore)({
    reducer: {
        hero: findPlaceSlice/* default */.ZP
    }
});

;// CONCATENATED MODULE: ./pages/_app.js













if (false) {}
function App({ Component, pageProps }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 1200,
            once: true
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_redux_.Provider, {
            store: store,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime.jsx(ScrollToTop, {})
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
                        content: "GoTrip - Tour & Travel React NextJS Template"
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

/***/ 31663:
/***/ (() => {



/***/ })

};
;