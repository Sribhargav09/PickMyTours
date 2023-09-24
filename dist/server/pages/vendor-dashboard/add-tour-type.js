"use strict";
(() => {
var exports = {};
exports.id = 7923;
exports.ids = [7923];
exports.modules = {

/***/ 1112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fvendor_dashboard_2Fadd_tour_type_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fadd_tour_type_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/vendor-dashboard/add-tour-type/index.js
var add_tour_type_namespaceObject = {};
__webpack_require__.r(add_tour_type_namespaceObject);
__webpack_require__.d(add_tour_type_namespaceObject, {
  "default": () => (add_tour_type)
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
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./pages/vendor-dashboard/common/Sidebar.jsx
var Sidebar = __webpack_require__(51920);
// EXTERNAL MODULE: ./components/header/dashboard-header/index.jsx
var dashboard_header = __webpack_require__(19918);
// EXTERNAL MODULE: ./pages/vendor-dashboard/common/Footer.jsx
var Footer = __webpack_require__(79677);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./services/location.service.js
var location_service = __webpack_require__(1987);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./services/tour-type.service.js
var tour_type_service = __webpack_require__(99446);
;// CONCATENATED MODULE: ./pages/vendor-dashboard/add-tour-type/index.js











const index = ()=>{
    const [name, setName] = (0,external_react_.useState)("");
    const [description, setDescription] = (0,external_react_.useState)("");
    const [photo, setPhoto] = (0,external_react_.useState)(null);
    const [photos, setPhotos] = (0,external_react_.useState)([]);
    const [errors, setErrors] = (0,external_react_.useState)({
        name: "",
        photos: ""
    });
    const [images, setImages] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const router = (0,router_.useRouter)();
    const id = router.query.id;
    (0,external_react_.useEffect)(()=>{
        if (!id) {
        //setLoading(false);
        } else {
            location_service/* default */.Z.get(id).then((response)=>{
                setName(response.data.data.name);
                setDescription(response.data.data.description);
                setPhotos([
                    response.data.data.photo
                ]);
                setTimeout(()=>{
                    setLoading(false);
                    console.log("This will run after 1 second!");
                }, 1000);
                console.log(location);
            }).catch((e)=>{
                console.log(e);
            });
        }
        return ()=>{};
    }, [
        id
    ]);
    const validateForm = ()=>{
        if (name.length == 0) {
            setErrors({
                ...errors,
                name: " Name can not be empty"
            });
        } else if (photos.length == 0) {
            setErrors({
                ...errors,
                photos: "Upload a photo can not be empty"
            });
        } else {
            if (id) {
                tour_type_service/* default */.Z.update(id, {
                    name,
                    description
                }).then((response)=>{
                    router_default().push("/vendor-dashboard/tour-types");
                    console.log(response.data);
                }).catch((e)=>{
                    console.log(e);
                });
            } else {
                tour_type_service/* default */.Z.create({
                    name,
                    description,
                    photo
                }).then((response)=>{
                    router_default().push("/vendor-dashboard/tour-types");
                    console.log(response.data);
                }).catch((e)=>{
                    console.log(e);
                });
            }
        }
    };
    function handlePhotoUpload(event) {
        const fileList = event.target.files;
        const file = fileList[0];
        const reader = new FileReader();
        setPhoto(file);
        const newImages = [];
        const maxSize = 800;
        reader.onloadend = ()=>{
            const img = new Image();
            img.onload = ()=>{
                if (img.width > maxSize || img.height > maxSize) {
                    setErrors({
                        ...errors,
                        photos: `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
                    });
                } else if (![
                    "image/png",
                    "image/jpeg"
                ].includes(file.type.toLowerCase())) {
                    setErrors({
                        ...errors,
                        photos: `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
                    });
                } else {
                    newImages.push(reader.result);
                    if (newImages.length === fileList.length) {
                        setPhotos([
                            ...photos,
                            ...newImages
                        ]);
                        setErrors({
                            ...errors,
                            photos: ""
                        });
                    }
                }
            };
            img.onerror = ()=>{
                setErrors({
                    ...errors,
                    photos: `Image ${file.name} could not be loaded.`
                });
            };
            img.src = reader.result;
        };
        console.log(newImages);
        console.log(errors);
        setPhotos([
            ...newImages
        ]);
        reader.readAsDataURL(file);
    }
    const handleRemovePhoto = (index)=>{
        const newPhotos = [
            ...photos
        ];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Vendor Add Tour"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(dashboard_header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "dashboard",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "dashboard__sidebar bg-white scroll-bar-1",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Sidebar["default"], {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "dashboard__main",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "dashboard__content bg-light-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                className: "text-30 lh-14 fw-600",
                                                children: "Add Tour Type"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-15 text-light-1",
                                                children: "This seciton for adding New Tour Type"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "py-30 px-30 rounded-4 bg-white shadow-3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        children: "Set Tour Type"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-xl-6",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "form-input ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                    type: "text",
                                                                    name: "name",
                                                                    value: name,
                                                                    required: true,
                                                                    onChange: (e)=>setName(e.target.value)
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    className: "lh-1 text-16 text-light-1",
                                                                    children: "Name"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "form-input ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                    name: "description",
                                                                    rows: 3,
                                                                    defaultValue: "",
                                                                    value: description,
                                                                    onChange: (e)=>setDescription(e.target.value)
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                    className: "lh-1 text-16 text-light-1",
                                                                    children: "Description (optional)"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "mt-30",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "fw-500",
                                                                    children: "Feature Photo"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "row x-gap-20 y-gap-20 pt-15",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "col-auto",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "w-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                        htmlFor: "featurePhotoUpload",
                                                                                        className: "d-flex ratio ratio-1:1",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                            className: "flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "icon-upload-file text-40 text-blue-1 mb-10"
                                                                                                }),
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "text-blue-1 fw-500",
                                                                                                    children: "Upload Image"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                        type: "file",
                                                                                        name: "photo",
                                                                                        id: "featurePhotoUpload",
                                                                                        accept: "image/png, image/jpeg",
                                                                                        className: "d-none",
                                                                                        onChange: handlePhotoUpload
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "text-start mt-10 text-14 text-light-1",
                                                                                        children: "PNG or JPG no bigger than 800px wide and tall."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        photos.map((image, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "col-auto",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "d-flex ratio ratio-1:1 w-200",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                            src: image,
                                                                                            alt: "image",
                                                                                            className: "img-ratio rounded-4"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "d-flex justify-end px-10 py-10 h-100 w-1/1 absolute",
                                                                                            onClick: ()=>handleRemovePhoto(index),
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "icon-trash text-16"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }, index)),
                                                                        errors.photos && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "col-12 mb-10  text-red-1",
                                                                            children: errors.photos
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "col-12",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "form-input ",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                type: "button",
                                                                className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                                                variant: "contained",
                                                                onClick: ()=>{
                                                                    validateForm();
                                                                },
                                                                children: "Save Tour Type"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(Footer["default"], {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const add_tour_type = (index);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fvendor-dashboard%2Fadd-tour-type&preferredRegion=&absolutePagePath=private-next-pages%2Fvendor-dashboard%2Fadd-tour-type%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fvendor_dashboard_2Fadd_tour_type_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fadd_tour_type_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(add_tour_type_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/vendor-dashboard/add-tour-type","pathname":"/vendor-dashboard/add-tour-type","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: add_tour_type_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 39681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
    }
}));


/***/ }),

/***/ 1987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);

class LocationDataService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/locations");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/location/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-location", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-location/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-location/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/locations`);
    }
    findByTitle(title) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/locations?title=${title}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LocationDataService());


/***/ }),

/***/ 99446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);

class TourTypeDataService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/tourTypes");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tourType/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-tourType", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-tourType/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-tourType/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/tourTypes`);
    }
    findByTitle(title) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tourTypes?title=${title}`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TourTypeDataService());


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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,9918,1920,9677], () => (__webpack_exec__(1112)));
module.exports = __webpack_exports__;

})();