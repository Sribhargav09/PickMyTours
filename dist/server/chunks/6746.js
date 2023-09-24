"use strict";
exports.id = 6746;
exports.ids = [6746];
exports.modules = {

/***/ 76746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ header_MainMenu)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/mainMenuData.js
var mainMenuData = __webpack_require__(51967);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(95973);
;// CONCATENATED MODULE: ./components/header/CategoriesMegaMenu.jsx







const CategoriesMegaMenu = ()=>{
    const router = useRouter();
    const itemList = [
        "Hotel",
        "Tour",
        "Activity",
        "Holiday Rentals",
        "Car",
        "Cruise",
        "Flights"
    ];
    return /*#__PURE__*/ _jsxs(Tabs, {
        className: "tabs -underline-2 js-tabs",
        children: [
            /*#__PURE__*/ _jsx(TabList, {
                className: "tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls",
                children: itemList.map((item, i)=>/*#__PURE__*/ _jsx(Tab, {
                        className: "col-auto",
                        children: /*#__PURE__*/ _jsx("button", {
                            className: "tabs__button text-light-1 fw-500 js-tabs-button",
                            children: item
                        })
                    }, i))
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tabs__content js-tabs-content",
                children: categorieMegaMenuItems.map((megaMenu)=>/*#__PURE__*/ _jsx(TabPanel, {
                        children: megaMenu?.menuCol?.map((megaCol, i)=>/*#__PURE__*/ _jsxs("ul", {
                                className: "mega__content",
                                children: [
                                    /*#__PURE__*/ _jsx("li", {
                                        className: "mega__grid",
                                        children: megaCol?.menuItems?.map((item)=>/*#__PURE__*/ _jsxs("div", {
                                                className: "mega__item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "text-15 fw-500",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "y-gap-5 text-15 pt-5",
                                                        children: item?.menuList?.map((list, i)=>/*#__PURE__*/ _jsx("div", {
                                                                className: isActiveLink(list.routePath, router.asPath) ? "current" : "",
                                                                children: /*#__PURE__*/ _jsx(Link, {
                                                                    href: list.routePath,
                                                                    children: list.name
                                                                })
                                                            }, i))
                                                    })
                                                ]
                                            }, item.id))
                                    }),
                                    /*#__PURE__*/ _jsxs("li", {
                                        className: "mega__image d-flex relative",
                                        children: [
                                            /*#__PURE__*/ _jsx(Image, {
                                                width: 270,
                                                height: 300,
                                                src: megaCol?.megaBanner,
                                                alt: "image",
                                                className: "rounded-4 js-lazy"
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "absolute w-full h-full px-30 py-24",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "text-22 fw-500 lh-15 text-white",
                                                        children: megaCol?.title
                                                    }),
                                                    /*#__PURE__*/ _jsx(Link, {
                                                        href: megaCol?.btnRoute,
                                                        className: "button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex",
                                                        children: megaCol?.btnText
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    }, megaMenu.id))
            })
        ]
    });
};
/* harmony default export */ const header_CategoriesMegaMenu = ((/* unused pure expression or super */ null && (CategoriesMegaMenu)));

// EXTERNAL MODULE: ./utils/linkActiveChecker.js
var linkActiveChecker = __webpack_require__(58443);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./app/features/user/userSlice.js
var userSlice = __webpack_require__(84403);
;// CONCATENATED MODULE: ./components/header/MainMenu.jsx








const MainMenu = ({ style = "" })=>{
    const loginUser = (0,external_react_redux_.useSelector)((state)=>state.user.loginUser);
    const userToken = (0,external_react_redux_.useSelector)((state)=>state.user.token);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "menu js-navList",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            className: `menu__nav ${style} -is-active`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: `${(0,linkActiveChecker/* isActiveParentChaild */.LK)(mainMenuData/* homeItems */.YW, router.asPath) ? "current" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "mr-10",
                            children: "Home"
                        })
                    })
                }),
                !userToken && mainMenuData/* pageItems */.F0.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (0,linkActiveChecker/* isActiveLink */.H_)(menu.routePath, router.asPath) ? "current" : "",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: menu.routePath,
                            children: menu.name
                        })
                    }, i)),
                userToken && mainMenuData/* userItems */.o9.map((menu, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (0,linkActiveChecker/* isActiveLink */.H_)(menu.routePath, router.asPath) ? "current" : "",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: menu.routePath,
                            children: menu.name
                        })
                    }, i))
            ]
        })
    });
};
/* harmony default export */ const header_MainMenu = (MainMenu);


/***/ })

};
;