"use strict";
exports.id = 9098;
exports.ids = [9098];
exports.modules = {

/***/ 59098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MultiFields = ({ addFieldsToTour, section, fields })=>{
    const [inputFields, setInputFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fields);
    const addInputField = ()=>{
        setInputFields([
            ...inputFields,
            fields
        ]);
        addFieldsToTour(section, inputFields);
    };
    const removeInputFields = (index)=>{
        const rows = [
            ...inputFields
        ];
        rows.splice(index, 1);
        setInputFields(rows);
        addFieldsToTour(section, inputFields);
    };
    const handleChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        console.log(name);
        console.log(value);
        const list = [
            ...inputFields
        ];
        list[index] = {
            [name]: value
        };
        console.log(list);
        setInputFields(list);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-sm-10",
                children: inputFields && inputFields.map((data, index)=>{
                    const { fullName, emailAddress, salary } = data;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: fields.map((field)=>{
                                        let k = Object.keys(field);
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-group",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    onChange: (evnt)=>handleChange(index, evnt),
                                                    value: inputFields[index][k],
                                                    name: k,
                                                    className: "form-control",
                                                    placeholder: k
                                                })
                                            })
                                        });
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2",
                                children: inputFields.length !== 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "btn btn-outline-danger",
                                    onClick: removeInputFields,
                                    children: "-"
                                }) : ""
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-sm-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "btn btn-outline-success",
                    onClick: addInputField,
                    children: "+"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiFields);


/***/ })

};
;