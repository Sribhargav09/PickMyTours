"use strict";
exports.id = 7280;
exports.ids = [7280];
exports.modules = {

/***/ 7280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FeaturedUploader = ()=>{
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleFileUpload = (event)=>{
        const fileList = event.target.files;
        const newImages = [];
        const maxSize = 800; // in pixels
        for(let i = 0; i < fileList.length; i++){
            const file = fileList[i];
            const reader = new FileReader();
            reader.onloadend = ()=>{
                const img = new Image();
                img.onload = ()=>{
                    if (img.width > maxSize || img.height > maxSize) {
                        setError(`Image ${file.name} exceeds the maximum size of ${maxSize}px.`);
                    } else if (![
                        "image/png",
                        "image/jpeg"
                    ].includes(file.type.toLowerCase())) {
                        setError(`Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`);
                    } else {
                        newImages.push(reader.result);
                        if (newImages.length === fileList.length) {
                            setImages([
                                ...images,
                                ...newImages
                            ]);
                            setError("");
                        }
                    }
                };
                img.onerror = ()=>{
                    setError(`Image ${file.name} could not be loaded.`);
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    const handleRemoveImage = (index)=>{
        const newImages = [
            ...images
        ];
        newImages.splice(index, 1);
        setImages(newImages);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row x-gap-20 y-gap-20 pt-15",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-200",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "featuredUpload",
                            className: "d-flex ratio ratio-1:1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-upload-file text-40 text-blue-1 mb-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-blue-1 fw-500",
                                        children: "Upload Images"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            id: "featuredUpload",
                            multiple: true,
                            accept: "image/png, image/jpeg",
                            className: "d-none",
                            onChange: handleFileUpload
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-start mt-10 text-14 text-light-1",
                            children: "PNG or JPG no bigger than 800px wide and tall."
                        })
                    ]
                })
            }),
            images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex ratio ratio-1:1 w-200",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: image,
                                alt: "image",
                                className: "img-ratio rounded-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",
                                onClick: ()=>handleRemoveImage(index),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-trash text-16"
                                    })
                                })
                            })
                        ]
                    })
                }, index)),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 mb-10  text-red-1",
                children: error
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedUploader);


/***/ })

};
;