"use strict";
(() => {
var exports = {};
exports.id = 4341;
exports.ids = [4341];
exports.modules = {

/***/ 94953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Ftour_2Fbooking_page_preferredRegion_absolutePagePath_private_next_pages_2Ftour_2Fbooking_page_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/tour/booking-page/index.jsx
var booking_page_namespaceObject = {};
__webpack_require__.r(booking_page_namespaceObject);
__webpack_require__.d(booking_page_namespaceObject, {
  "default": () => (booking_page)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./components/booking-page/sidebar/BookingDetails.jsx


const BookingDetails = ({ tour })=>{
    console.log(tour);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "px-30 py-30 border-light rounded-4",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-20 fw-500 mb-30",
                children: "Your booking details"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row x-gap-15 y-gap-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            width: 140,
                            height: 140,
                            src: tour.featurePhoto,
                            alt: "image",
                            className: "size-140 rounded-4 object-cover"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "d-flex x-gap-5 pb-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-star text-yellow-1 text-10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-star text-yellow-1 text-10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-star text-yellow-1 text-10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-star text-yellow-1 text-10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "icon-star text-yellow-1 text-10"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "lh-17 fw-500",
                                children: tour.name
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-14 lh-15 mt-5",
                                children: tour.place
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row x-gap-10 y-gap-10 items-center pt-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "size-30 flex-center bg-blue-1 rounded-4",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-12 fw-600 text-white",
                                                        children: tour.rating
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-14 fw-500 ml-10",
                                                    children: "Exceptional"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-auto",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-14",
                                            children: "100 reviews"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "border-top-light mt-30 mb-20"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row y-gap-20 justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-20 fw-500 mb-10",
                    children: [
                        "Rs. ",
                        tour.price
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const sidebar_BookingDetails = (BookingDetails);

// EXTERNAL MODULE: ./common/http2.js
var http2 = __webpack_require__(97156);
;// CONCATENATED MODULE: ./services/stripe.service.js

class StripeService {
    registerCustomer(data) {
        return http2/* default */.Z.post("/user/register", data);
    }
    addPaymentMethod(data) {
        return http2/* default */.Z.post("/payment/method/attach", data);
    }
    createPayment(data) {
        return http2/* default */.Z.post("/payment/create", data);
    }
    confirmPayment(data) {
        return http2/* default */.Z.post("/payment/confirm", data);
    }
}
/* harmony default export */ const stripe_service = (new StripeService());

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./services/signup.server.js
var signup_server = __webpack_require__(62994);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(95973);
;// CONCATENATED MODULE: ./components/booking-page/sidebar/PricingSummary.jsx

const PricingSummary = ({ tour })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "px-30 py-30 border-light rounded-4 mt-30",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-20 fw-500 mb-20",
                children: "Your price summary"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row y-gap-5 justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-15",
                            children: tour.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-15",
                            children: [
                                "Rs.",
                                tour.price
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row y-gap-5 justify-between pt-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-15",
                            children: "Taxes and fees"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-15",
                            children: "Rs.0"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row y-gap-5 justify-between pt-5",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-15",
                            children: "Booking fees"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text-15",
                            children: "FREE"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sidebar_PricingSummary = (PricingSummary);

;// CONCATENATED MODULE: ./components/booking-page/sidebar/PaymentSchedule.jsx

const PaymentSchedule = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "px-30 py-30 border-light rounded-4 mt-30",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "text-20 fw-500 mb-20",
                children: "Your payment schedule"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "row y-gap-5 justify-between",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "text-15",
                            children: "Before you stay you'll pay"
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "text-15",
                            children: "US$4,047"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sidebar_PaymentSchedule = ((/* unused pure expression or super */ null && (PaymentSchedule)));

;// CONCATENATED MODULE: ./components/booking-page/sidebar/PromoCode.jsx

const PromoCode = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "px-30 py-30 border-light rounded-4 mt-30",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "text-20 fw-500 mb-15",
                children: "Do you have a promo code?"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "form-input ",
                children: [
                    /*#__PURE__*/ _jsx("input", {
                        type: "text",
                        required: true
                    }),
                    /*#__PURE__*/ _jsx("label", {
                        className: "lh-1 text-16 text-light-1",
                        children: "Enter promo code"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("button", {
                className: "button -outline-blue-1 text-blue-1 px-30 py-15 mt-20",
                children: "Apply"
            })
        ]
    });
};
/* harmony default export */ const sidebar_PromoCode = ((/* unused pure expression or super */ null && (PromoCode)));

;// CONCATENATED MODULE: ./components/booking-page/RatingInfo.jsx

const RatingInfo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row y-gap-30 pt-30",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "px-24 py-20 rounded-4 bg-green-1",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row x-gap-20 y-gap-20 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex-center size-60 rounded-full bg-white",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-star text-yellow-1 text-30"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-18 lh-15 fw-500",
                                            children: "This property is in high demand!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-15",
                                            children: "7 travelers have booked today."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row y-gap-30 pt-10",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "px-24 py-20 rounded-4 bg-light-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row x-gap-20 y-gap-20 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "flex-center size-60 rounded-full bg-white",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "icon-star text-yellow-1 text-30"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-auto",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-18 lh-15 fw-500",
                                            children: "Limited supply in London for your dates:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-15",
                                            children: "27 four-star hotels like this are already unavailable on our site"
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
/* harmony default export */ const booking_page_RatingInfo = (RatingInfo);

;// CONCATENATED MODULE: ./components/booking-page/OrderSubmittedInfo.jsx

const OrderSubmittedInfo = ({ firstName, lastName, email, phone, address, amount = 100 })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "col-xl-8 col-lg-8",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "order-completed-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "size-80 flex-center rounded-full bg-dark-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "icon-check text-30 text-white"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-30 lh-1 fw-600 mt-20",
                                children: "Your order was submitted successfully!"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-15 text-light-1 mt-10",
                                children: "Booking details has been sent to your email address"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "border-type-1 rounded-8 px-50 py-35 mt-40",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12",
                                            children: "Order Number"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12 fw-500 text-blue-1 mt-10",
                                            children: "13119"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12",
                                            children: "Date"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12 fw-500 text-blue-1 mt-10",
                                            children: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12",
                                            children: "Total"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-15 lh-12 fw-500 text-blue-1 mt-10",
                                            children: [
                                                "Rs. ",
                                                amount
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-3 col-md-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12",
                                            children: "Payment Method"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-15 lh-12 fw-500 text-blue-1 mt-10",
                                            children: "Credit/Debit Card"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "border-light rounded-8 px-50 py-40 mt-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "text-20 fw-500 mb-30",
                                children: "Your Information"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row y-gap-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "First name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1",
                                                    children: firstName
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "Last name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1",
                                                    children: lastName
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1",
                                                    children: email
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "Phone"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1",
                                                    children: phone
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: address.line
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: address.line
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "City"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1",
                                                    children: address.city
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: address.State
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: address.postalcode
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "Country"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1",
                                                    children: "India"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex justify-between border-top-light pt-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16",
                                                    children: "Special Requirements"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-15 lh-16 fw-500 text-blue-1"
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
        })
    });
};
/* harmony default export */ const booking_page_OrderSubmittedInfo = (OrderSubmittedInfo);

;// CONCATENATED MODULE: ./components/booking-page/PaymentInfo.jsx









const PaymentInfo = ({ tour, firstName, lastName, email, phone, customerId, address })=>{
    console.log(customerId);
    const [itemsTabs, setItemsTabs] = (0,external_react_.useState)(1);
    const cardTabs = [
        {
            id: 1,
            name: "Credit/Debit Card"
        }
    ];
    const [showLoader, setShowLoader] = (0,external_react_.useState)(false);
    const [orderPlaced, setOrderPlaced] = (0,external_react_.useState)(false);
    const [name, setName] = (0,external_react_.useState)("");
    const [cardNumber, setCardNumber] = (0,external_react_.useState)("");
    const [expMonth, setExpMonth] = (0,external_react_.useState)("");
    const [expYear, setExpYear] = (0,external_react_.useState)("");
    const [cvv, setCvv] = (0,external_react_.useState)("");
    const [errors, setErrors] = (0,external_react_.useState)({
        name: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvv: ""
    });
    const addPayment = ()=>{
        let haveError = false;
        if (name.length == 0) {
            setErrors({
                ...errors,
                name: "Card holder name can not be empty"
            });
            haveError = true;
        } else if (cardNumber.length == 0) {
            setErrors({
                ...errors,
                cardNumber: "Card Number can not be empty"
            });
            haveError = true;
        } else if (expMonth.length == 0) {
            setErrors({
                ...errors,
                expMonth: "Expiry Month is required"
            });
            haveError = true;
        } else if (expYear.length == 0) {
            setErrors({
                ...errors,
                expYear: "Expiry Year is required"
            });
            haveError = true;
        } else if (cvv.length == 0) {
            setErrors({
                ...errors,
                cvv: "CVV is required"
            });
            haveError = true;
        }
        if (!haveError) {
            setShowLoader(true);
            // stripeService.addPaymentMethod({"customerId":customerId,"cardNumber":cardNumber,"expMonth":expMonth,"expYear":expYear,"name":name,"address":address})
            //   .then(response => {
            //     console.log(response);
            //   })
            //   .catch(e => {
            //     console.log(e);
            //   })
            // }
            stripe_service.createPayment({
                "customerId": customerId,
                "paymentMethod": "pm_card_visa",
                "amount": tour.price
            }).then((response)=>{
                confirmPayment(response.data.id, "pm_card_visa");
            }).catch((e)=>{
                console.log(e);
            });
        }
    };
    const confirmPayment = (paymentIntent, paymentMethod)=>{
        stripe_service.confirmPayment({
            paymentIntent,
            paymentMethod
        }).then((response)=>{
            console.log(response);
            setShowLoader(false);
            setOrderPlaced(true);
        }).catch((e)=>{
            console.log(e);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            showLoader && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "spinner-container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "loading-spinner"
                })
            }),
            !orderPlaced && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-xl-7 col-lg-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(booking_page_RatingInfo, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "text-22 fw-500 mb-20",
                                        children: "How do you want to pay?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_tabs_.Tabs, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(external_react_tabs_.TabList, {
                                                className: "row y-gap-20 x-gap-20",
                                                children: cardTabs.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_tabs_.Tab, {
                                                        className: "col-auto",
                                                        onClick: ()=>setItemsTabs(item.id),
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            className: itemsTabs === item.id ? "button -dark-1 bg-blue-1 text-white px-20 py-15" : "button -blue-1 bg-light-2 px-20 py-15",
                                                            children: item.name
                                                        })
                                                    }, item.id))
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_react_tabs_.TabPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row x-gap-20 y-gap-20 pt-20",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "form-input ",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            type: "text",
                                                                            value: name,
                                                                            onChange: (event)=>setName(event.target.value),
                                                                            required: true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            className: "lh-1 text-16 text-light-1",
                                                                            children: "Card holder name *"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            class: "error",
                                                                            children: errors && errors.name
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "form-input mt-20",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                            type: "text",
                                                                            value: cardNumber,
                                                                            onChange: (event)=>setCardNumber(event.target.value),
                                                                            required: true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            className: "lh-1 text-16 text-light-1",
                                                                            children: "Credit/debit card number *"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            class: "error",
                                                                            children: errors && errors.cardNumber
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "row x-gap-20 y-gap-20 pt-20",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "col-md-6",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "form-input ",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                        type: "text",
                                                                                        value: expMonth,
                                                                                        onChange: (event)=>setExpMonth(event.target.value),
                                                                                        required: true
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                        className: "lh-1 text-16 text-light-1",
                                                                                        children: "Expiry Month *"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        class: "error",
                                                                                        children: errors && errors.expMonth
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "col-md-6",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "form-input ",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                        type: "text",
                                                                                        value: expYear,
                                                                                        onChange: (event)=>setExpYear(event.target.value),
                                                                                        required: true
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                        className: "lh-1 text-16 text-light-1",
                                                                                        children: "Expiry Year *"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        class: "error",
                                                                                        children: errors && errors.expYear
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "row x-gap-20 y-gap-20 pt-20",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "col-md-6",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "form-input ",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                    type: "text",
                                                                                    value: cvv,
                                                                                    onChange: (event)=>setCvv(event.target.value),
                                                                                    required: true
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                    className: "lh-1 text-16 text-light-1",
                                                                                    children: "CVC/CVV *"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    class: "error",
                                                                                    children: errors && errors.cvv
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: "/img/booking-pages/card.png",
                                                                alt: "image",
                                                                className: "h-full"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(external_react_tabs_.TabPanel, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mt-60 md:mt-32",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mt-20",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "form-input ",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                        type: "text",
                                                                        required: true
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                        className: "lh-1 text-16 text-light-1",
                                                                        children: "Select payment method *"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mt-20",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                className: "list-disc y-gap-4 text-15 text-light-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: "You have chosen to pay by PayPal. You will be forwarded to the PayPal website to proceed with this transaction."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: "The total amount you will be charged is: $2,338.01"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full h-1 bg-border mt-40 mb-40"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row y-gap-20 items-center justify-between",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "form-checkbox d-flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "checkbox",
                                                name: "name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "form-checkbox__mark",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "form-checkbox__icon icon-check"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-14 lh-10 text-light-1 ml-10",
                                                children: "Get access to members-only deals, just like the millions of other email subscribers"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-5 col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "booking-sidebar",
                            children: /*#__PURE__*/ jsx_runtime.jsx(sidebar_PricingSummary, {
                                tour: tour
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row y-gap-20 items-center justify-between",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "button h-60 px-24 -dark-1 bg-blue-1 text-white",
                                    // disabled={currentStep === steps.length - 1}
                                    onClick: addPayment,
                                    children: [
                                        "Next ",
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "icon-arrow-top-right ml-15"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            orderPlaced && /*#__PURE__*/ jsx_runtime.jsx(booking_page_OrderSubmittedInfo, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                amount: tour.price
            })
        ]
    });
};
/* harmony default export */ const booking_page_PaymentInfo = (PaymentInfo);

;// CONCATENATED MODULE: ./components/booking-page/CustomerInfo.jsx










const CustomerInfo = ({ tour })=>{
    const [customerId, setCustomerId] = (0,external_react_.useState)("");
    const [isCustomerRegistered, setIsCustomerRegistered] = (0,external_react_.useState)(false);
    const [firstName, setFirstName] = (0,external_react_.useState)("");
    const [lastName, setLastName] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [ConfirmPassword, setConfirmPassword] = (0,external_react_.useState)("");
    const [phone, setPhone] = (0,external_react_.useState)("");
    const [userRole, setUserRole] = (0,external_react_.useState)("user");
    const [errors, setErrors] = (0,external_react_.useState)({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        userRole: "",
        photos: ""
    });
    const [photo, setPhoto] = (0,external_react_.useState)(null);
    const [photos, setPhotos] = (0,external_react_.useState)([]);
    const [images, setImages] = (0,external_react_.useState)(null);
    const [address1, setAddress1] = (0,external_react_.useState)("");
    const [address2, setAddress2] = (0,external_react_.useState)("");
    const [state, setState] = (0,external_react_.useState)("");
    const [city, setCity] = (0,external_react_.useState)("");
    const [zipcode, setZipcode] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [isRegister, setIsRegister] = (0,external_react_.useState)(false);
    const [address, setAddress] = (0,external_react_.useState)({
        country: "",
        state: "",
        city: "",
        line: "",
        postalCode: ""
    });
    const router = (0,router_.useRouter)();
    const id = "";
    (0,external_react_.useEffect)(()=>{
        if (!id) {
        //setLoading(false);
        } else {
            signup_server/* default */.Z.get(id).then((response)=>{
                setFirstName(response.data.data.firstName);
                setLastName(response.data.data.lastName);
                setPhotos([]);
                setEmail(response.data.data.email);
                setPassword(response.data.data.password);
                setConfirmPassword(response.data.data.conformpassword);
                setPhoneNumber(response.data.data.phoneNumber);
                setTimeout(()=>{
                    setLoading(false);
                    console.log("This will run after 1 second!");
                }, 1000);
                console.log(add - user);
            }).catch((e)=>{
                console.log(e);
            });
        }
        return ()=>{};
    }, [
        id
    ]);
    const addUser = ()=>{
        let haveError = false;
        if (firstName.length == 0) {
            setErrors({
                ...errors,
                name: " Name can not be empty"
            });
            haveError = true;
        } else if (email.length == 0) {
            setErrors({
                ...errors,
                email: "email is required"
            });
            haveError = true;
        } else if (password.length == 0) {
            setErrors({
                ...errors,
                password: "password is required"
            });
            haveError = true;
        } else if (phone.length < 10) {
            setErrors({
                ...errors,
                phone: "phoneNumber is required"
            });
            haveError = true;
        }
        // } else if (userRole.length == 0) {
        //   setErrors({ ...errors, userRole: 'userRole is required' });
        //   haveError = true;
        // }
        if (!haveError) {
            signup_server/* default */.Z.create({
                firstName,
                lastName,
                email,
                password,
                phone,
                role: userRole,
                photo: []
            }).then((response)=>{
                //Router.push("/vendor-dashboard/users")
                setIsRegister(true);
                console.log(response.data);
                stripe_service.registerCustomer({
                    email,
                    name: firstName + " " + lastName,
                    password,
                    phone
                }).then((response)=>{
                    setCustomerId(response.data.data.id);
                    setAddress({
                        country: "India",
                        state,
                        city,
                        line: address1,
                        postalCode: zipcode
                    });
                    setIsCustomerRegistered(true);
                    console.log(response);
                }).catch((e)=>{
                    console.log(e);
                });
            }).catch((e)=>{
                console.log(e);
            });
        }
        if (id) {
            signup_server/* default */.Z.delete(id).then((response)=>{
                router_default().push("/vendor-dashboard/add-user");
                console.log(response.data);
            }).catch((e)=>{
                console.log(e);
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isCustomerRegistered && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-xl-7 col-lg-8 mt-30",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "py-15 px-20 rounded-4 text-15 bg-blue-1-05",
                                children: [
                                    "Sign in to book with your saved details or",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/others-pages/signup",
                                        className: "text-blue-1 fw-500",
                                        children: "register"
                                    }),
                                    " ",
                                    "to manage your bookings on the go!"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-22 fw-500 mt-40 md:mt-24",
                                children: "Let us know who you are"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row x-gap-20 y-gap-20 pt-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    value: firstName,
                                                    onChange: (event)=>setFirstName(event.target.value),
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "First Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.firstName
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    value: lastName,
                                                    onChange: (event)=>setLastName(event.target.value),
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Last Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.lastName
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    value: email,
                                                    onChange: (event)=>setEmail(event.target.value),
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.email
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    autoComplete: "off",
                                                    value: phone,
                                                    onChange: (event)=>setPhone(event.target.value),
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Phone Number"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.phone
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "password",
                                                    autoComplete: "off",
                                                    value: password,
                                                    onChange: (event)=>setPassword(event.target.value),
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.password
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "password",
                                                    autoComplete: "off",
                                                    value: ConfirmPassword,
                                                    onChange: (event)=>setConfirmPassword(event.target.value),
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Confirm Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.conformpassword
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: address1,
                                                    onChange: (event)=>setAddress1(event.target.value)
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Address line 1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.address1
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: address2,
                                                    onChange: (event)=>setAddress2(event.target.value)
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "Address line 2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.address2
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: state,
                                                    onChange: (event)=>setState(event.target.value)
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "State"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.state
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: city,
                                                    onChange: (event)=>setCity(event.target.value)
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "City"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.city
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "form-input ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: zipcode,
                                                    onChange: (event)=>setZipcode(event.target.value)
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "lh-1 text-16 text-light-1",
                                                    children: "ZIP code/Postal code"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    class: "error",
                                                    children: errors && errors.zipcode
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-12",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "row y-gap-20 items-center justify-between",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-auto",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    className: "button h-60 px-24 -dark-1 bg-blue-1 text-white",
                                                    // disabled={currentStep === steps.length - 1}
                                                    onClick: addUser,
                                                    children: [
                                                        "Next ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "icon-arrow-top-right ml-15"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-5 col-lg-4 mt-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "booking-sidebar",
                            children: /*#__PURE__*/ jsx_runtime.jsx(sidebar_BookingDetails, {
                                tour: tour
                            })
                        })
                    })
                ]
            }),
            isCustomerRegistered && /*#__PURE__*/ jsx_runtime.jsx(booking_page_PaymentInfo, {
                tour: tour,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                customerId: customerId
            })
        ]
    });
};
/* harmony default export */ const booking_page_CustomerInfo = (CustomerInfo);

;// CONCATENATED MODULE: ./components/booking-page/stepper-booking/index.jsx





const Index = ({ tour })=>{
    const [currentStep, setCurrentStep] = (0,external_react_.useState)(0);
    const steps = [
        {
            title: "Personal Details",
            stepNo: "1",
            stepBar: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col d-none d-sm-block",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-full h-1 bg-border"
                    })
                })
            }),
            content: /*#__PURE__*/ jsx_runtime.jsx(booking_page_CustomerInfo, {
                tour: tour
            })
        },
        {
            title: "Payment Details",
            stepNo: "2",
            stepBar: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col d-none d-sm-block",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-full h-1 bg-border"
                    })
                })
            }),
            content: /*#__PURE__*/ jsx_runtime.jsx(booking_page_PaymentInfo, {})
        },
        {
            title: "Final Step",
            stepNo: "3",
            stepBar: "",
            content: /*#__PURE__*/ jsx_runtime.jsx(booking_page_OrderSubmittedInfo, {})
        }
    ];
    const renderStep = ()=>{
        const { content } = steps[currentStep];
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: content
        });
    };
    const nextStep = ()=>{
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };
    const previousStep = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row x-gap-40 y-gap-30 items-center",
                children: steps.map((step, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "d-flex items-center cursor-pointer transition",
                                    onClick: ()=>setCurrentStep(index),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: currentStep === index ? "active size-40 rounded-full flex-center bg-blue-1" : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500",
                                            children: currentStep === index ? /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "icon-check text-16 text-white"
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: step.stepNo
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-18 fw-500 ml-10",
                                            children: [
                                                " ",
                                                step.title
                                            ]
                                        })
                                    ]
                                })
                            }),
                            step.stepBar
                        ]
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: renderStep()
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row x-gap-20 y-gap-20 pt-20"
            })
        ]
    });
};
/* harmony default export */ const stepper_booking = (Index);

// EXTERNAL MODULE: ./services/tour.service.js
var tour_service = __webpack_require__(34663);
;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./pages/tour/booking-page/index.jsx










// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = (0,stripe_js_namespaceObject.loadStripe)("pk_test_51NkBsQSJdkMUOQFiKU8NA8n5rUvwJekjW62PymxbAQfs3F1V5lJhFNcs03KAh9kRnS8kt03HUJlNA6prPMTVzhGj00CMNxdMV4");
const index = ()=>{
    const router = (0,router_.useRouter)();
    const id = router.query.id;
    const [tour, setTour] = (0,external_react_.useState)({});
    const options = {
        // passing the client secret obtained from the server
        clientSecret: "sk_test_51NkBsQSJdkMUOQFiLq89s92z6GMWIeHywIsOn7oalmVErp3gkqCbM0QazKzndKDUcZVjszZWuqoGUEE8dFwXWLmM00NcbzEZnO"
    };
    (0,external_react_.useEffect)(()=>{
        if (!id) /*#__PURE__*/ jsx_runtime.jsx("h1", {
            children: "Loading..."
        });
        else {
            tour_service/* default */.Z.get(id).then((response)=>{
                setTour(response.data.data);
                //       setTour(toursData.find((item) => item.id == id));
                console.log(tour);
            }).catch((e)=>{
                console.log(e);
            });
        }
        return ()=>{};
    }, [
        id
    ]);
    return(// <Elements stripe={stripePromise} options={options}>
    //   <CheckoutForm />
    // </Elements>
    /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Tour Booking Page"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(header_11/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "pt-40 layout-pb-md",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx(stepper_booking, {
                        tour: tour
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const booking_page = (index);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Ftour%2Fbooking-page&preferredRegion=&absolutePagePath=private-next-pages%2Ftour%2Fbooking-page%2Findex.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Ftour_2Fbooking_page_preferredRegion_absolutePagePath_private_next_pages_2Ftour_2Fbooking_page_2Findex_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(booking_page_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(booking_page_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/tour/booking-page","pathname":"/tour/booking-page","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: booking_page_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 34663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);

class TourDataService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/tours");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tour/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-tour", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-tour/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-tour/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/tours`);
    }
    findByTitle(title) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tours?title=${title}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TourDataService());


/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

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

/***/ 61223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 41981:
/***/ ((module) => {

module.exports = require("react-pro-sidebar");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,627,7602,4609,164,9483,2994], () => (__webpack_exec__(94953)));
module.exports = __webpack_exports__;

})();