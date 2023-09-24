"use strict";
exports.id = 3262;
exports.ids = [3262];
exports.modules = {

/***/ 13262:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_features_user_userSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84403);











const Header = ()=>{
    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const loginUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.user.loginUser);
    const userToken = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.user.token);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    console.log(loginUser);
    const changeBackground = ()=>{
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    const logOut = ()=>{
        dispatch((0,_app_features_user_userSlice__WEBPACK_IMPORTED_MODULE_10__/* .setToken */ .o4)(""));
        dispatch((0,_app_features_user_userSlice__WEBPACK_IMPORTED_MODULE_10__/* .setUser */ .av)(null));
        next_router__WEBPACK_IMPORTED_MODULE_8___default().push("/others-pages/login");
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        className: "header-logo mr-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/general/logo.png",
                                            alt: "logo icon"
                                        })
                                    }),
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
                                    !userToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex items-center ml-20 is-menu-opened-hide md:d-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/others-pages/become-expert",
                                                className: "button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white",
                                                children: "Become An Expert"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/others-pages/signup",
                                                className: "button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20",
                                                children: "Sign In / Register"
                                            })
                                        ]
                                    }),
                                    userToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex items-center ml-20 is-menu-opened-hide md:d-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                width: 50,
                                                height: 50,
                                                src: `${loginUser.photo}`,
                                                alt: "image",
                                                className: "size-50 rounded-22 object-cover"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: loginUser.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: logOut,
                                                className: "button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20",
                                                children: "Logout"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "#",
                                                    onClick: logOut,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;