"use strict";
exports.id = 2994;
exports.ids = [2994];
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

/***/ 97156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}));


/***/ }),

/***/ 62994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39681);
/* harmony import */ var _common_http2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97156);


class SignupDataService {
    getAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/user");
    }
    get(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/create-user/${id}`);
    }
    create(data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/create-user", data);
    }
    login(data) {
        return _common_http2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post("/login", data);
    }
    update(id, data) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/update-user/${id}`, data);
    }
    delete(id) {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/remove-user/${id}`);
    }
    deleteAll() {
        return _common_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/locations`);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SignupDataService());


/***/ })

};
;