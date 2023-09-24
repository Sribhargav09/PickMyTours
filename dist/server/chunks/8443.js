"use strict";
exports.id = 8443;
exports.ids = [8443];
exports.modules = {

/***/ 58443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H_: () => (/* binding */ isActiveLink),
/* harmony export */   LK: () => (/* binding */ isActiveParentChaild)
/* harmony export */ });
/* unused harmony export isActiveParent */
// is active parent check
const isActiveParent = (data = [], path)=>{
    if (data?.length !== 0) {
        return data?.some(({ items })=>items?.some((menu)=>menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")));
    }
};
// is active parent childe check
const isActiveParentChaild = (data = [], path)=>{
    if (data?.length !== 0) {
        return data?.some((menu)=>menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, ""));
    }
};
// is active link check
const isActiveLink = (menuPath, routePath)=>{
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
};


/***/ })

};
;