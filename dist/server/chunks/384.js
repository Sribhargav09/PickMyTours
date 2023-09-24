"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

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

/***/ 10384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35966);
/* harmony import */ var _ActionsButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44570);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1987);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__);














const LocationsTable = ({ locationsData })=>{
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClickOpen = (id)=>{
        setId(id);
        setOpen(true);
    };
    const deleteRecord = ()=>{
        _services_location_service__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.delete(id).then((response)=>{
            location.reload();
            console.log(response.data);
            setOpen(false);
        }).catch((e)=>{
            console.log(e);
        });
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    console.log(locationsData);
    const handleTabClick = (index)=>{
        setActiveTab(index);
    };
    const tabItems = [
        "All Locations"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tabs -underline-2 js-tabs",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls",
                        children: tabItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${activeTab === index ? "is-tab-el-active" : ""}`,
                                    onClick: ()=>handleTabClick(index),
                                    children: item
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tabs__content pt-30 js-tabs-content",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tabs__pane -tab-item-1 is-tab-el-active",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "overflow-scroll scroll-bar-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "table-4 -border-bottom col-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            className: "bg-light-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "d-flex items-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-checkbox ",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "checkbox",
                                                                        name: "name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "form-checkbox__mark",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "form-checkbox__icon icon-check"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Photo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        children: "Action"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: locationsData && locationsData.map((data)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "d-flex items-center",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form-checkbox ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "checkbox",
                                                                            name: "name"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "form-checkbox__mark",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "form-checkbox__icon icon-check"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "text-blue-1 fw-500",
                                                            children: data.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                width: "100px",
                                                                height: "100px",
                                                                src: data.photo[0]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`add-location?id=${data?._id}`),
                                                                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__.EditOutlined, {})
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    onClick: ()=>handleClickOpen(data._id),
                                                                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__.DeleteOutline, {})
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                });
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6___default()), {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default()), {
                        id: "alert-dialog-title",
                        children: "Are you sure?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default()), {
                            id: "alert-dialog-description",
                            children: "You want to delete the record"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_7___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                class: "btn btn-success",
                                onClick: deleteRecord,
                                autoFocus: true,
                                children: "Yes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                class: "btn btn-danger",
                                onClick: handleClose,
                                children: "No"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationsTable);


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


/***/ })

};
;