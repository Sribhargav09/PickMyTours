"use strict";
(() => {
var exports = {};
exports.id = 7867;
exports.ids = [7867];
exports.modules = {

/***/ 21709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Ftour_2Fbooking_page_2FcheckoutForm_preferredRegion_absolutePagePath_private_next_pages_2Ftour_2Fbooking_page_2FcheckoutForm_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/tour/booking-page/checkoutForm.js
var checkoutForm_namespaceObject = {};
__webpack_require__.r(checkoutForm_namespaceObject);
__webpack_require__.d(checkoutForm_namespaceObject, {
  "default": () => (checkoutForm)
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
;// CONCATENATED MODULE: external "@stripe/react-stripe-js"
const react_stripe_js_namespaceObject = require("@stripe/react-stripe-js");
;// CONCATENATED MODULE: ./pages/tour/booking-page/checkoutForm.js


const CheckoutForm = ()=>{
    const stripe = (0,react_stripe_js_namespaceObject.useStripe)();
    const elements = (0,react_stripe_js_namespaceObject.useElements)();
    const handleSubmit = async (event)=>{
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete"
            }
        });
        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(react_stripe_js_namespaceObject.PaymentElement, {}),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                disabled: !stripe,
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const checkoutForm = (CheckoutForm);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Ftour%2Fbooking-page%2FcheckoutForm&preferredRegion=&absolutePagePath=private-next-pages%2Ftour%2Fbooking-page%2FcheckoutForm.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Ftour_2Fbooking_page_2FcheckoutForm_preferredRegion_absolutePagePath_private_next_pages_2Ftour_2Fbooking_page_2FcheckoutForm_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(checkoutForm_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/tour/booking-page/checkoutForm","pathname":"/tour/booking-page/checkoutForm","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: checkoutForm_namespaceObject,
        })
        
        
    

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

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 61223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6678,330], () => (__webpack_exec__(21709)));
module.exports = __webpack_exports__;

})();