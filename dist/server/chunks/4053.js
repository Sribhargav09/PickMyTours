"use strict";
exports.id = 4053;
exports.ids = [4053];
exports.modules = {

/***/ 64053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const AvatarUploader = ()=>{
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        if (!file) {
            setError("Please select an image.");
            setSuccess(false);
            return;
        }
        if (file.size > 800 * 1024) {
            setError("Image must be smaller than 800KB.");
            setSuccess(false);
            return;
        }
        if (!file.type.startsWith("image/")) {
            setError("Only image files are allowed.");
            setSuccess(false);
            return;
        }
        reader.onload = ()=>{
            setImage(reader.result);
            setSuccess(true);
            setError("");
        };
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row y-gap-30 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-auto",
                children: image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex ratio ratio-1:1 w-200",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            width: 200,
                            height: 200,
                            src: image,
                            alt: "avatar",
                            className: "img-ratio rounded-4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                onClick: ()=>setImage(""),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-trash text-16"
                                })
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex ratio ratio-1:1 w-200",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            width: 200,
                            height: 200,
                            src: "/img/misc/avatar-1.png",
                            alt: "image",
                            className: "img-ratio rounded-4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-trash text-16"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-16 fw-500",
                        children: "Your avatar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-14 mt-5",
                        children: "PNG or JPG no bigger than 800px wide and tall."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-inline-block mt-15",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "avatar-upload",
                                role: "button",
                                className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-upload-file text-20 mr-10"
                                    }),
                                    "Browse"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                id: "avatar-upload",
                                accept: "image/png, image/jpeg",
                                onChange: handleImageChange,
                                style: {
                                    display: "none"
                                }
                            })
                        ]
                    }),
                    error && !success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-red-1 mt-1",
                        children: error
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarUploader);


/***/ })

};
;