"use strict";
exports.id = 5166;
exports.ids = [5166];
exports.modules = {

/***/ 95166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73935);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_faker_js_faker__WEBPACK_IMPORTED_MODULE_3__);




chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
        tooltips: {
            position: "nearest",
            mode: "index",
            intersect: false,
            yPadding: 10,
            xPadding: 10,
            caretSize: 4,
            backgroundColor: "rgba(72, 241, 12, 1)",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "#1967d2",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 4
        }
    }
};
const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
];
const data = {
    labels,
    datasets: [
        {
            label: "Dataset",
            data: labels.map(()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_3__.faker.datatype.number({
                    min: 100,
                    max: 400
                })),
            borderColor: "#1967d2",
            backgroundColor: "#1967d2",
            data: [
                196,
                132,
                215,
                362,
                210,
                252
            ],
            fill: false
        }
    ]
};
const ChartMain = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "widget-content",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
            options: options,
            data: data
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartMain);


/***/ })

};
;