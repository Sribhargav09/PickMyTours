"use strict";
(() => {
var exports = {};
exports.id = 3103;
exports.ids = [3103];
exports.modules = {

/***/ 22842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fvendor_dashboard_2Fadd_tour_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fadd_tour_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/vendor-dashboard/add-tour/index.js
var add_tour_namespaceObject = {};
__webpack_require__.r(add_tour_namespaceObject);
__webpack_require__.d(add_tour_namespaceObject, {
  "default": () => (add_tour)
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
// EXTERNAL MODULE: ./pages/vendor-dashboard/add-tour/components/index.js
var components = __webpack_require__(86389);
// EXTERNAL MODULE: ./pages/vendor-dashboard/common/Footer.jsx
var Footer = __webpack_require__(79677);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./services/tour.service.js
var tour_service = __webpack_require__(34663);
// EXTERNAL MODULE: ./pages/vendor-dashboard/add-tour/components/multiFields.jsx
var multiFields = __webpack_require__(59098);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(95973);
// EXTERNAL MODULE: ./services/tour-type.service.js
var tour_type_service = __webpack_require__(99446);
// EXTERNAL MODULE: ./services/location.service.js
var location_service = __webpack_require__(1987);
;// CONCATENATED MODULE: external "@mui/material/FormGroup"
const FormGroup_namespaceObject = require("@mui/material/FormGroup");
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
const Checkbox_namespaceObject = require("@mui/material/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ToggleButton"
const ToggleButton_namespaceObject = require("@mui/material/ToggleButton");
var ToggleButton_default = /*#__PURE__*/__webpack_require__.n(ToggleButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ToggleButtonGroup"
const ToggleButtonGroup_namespaceObject = require("@mui/material/ToggleButtonGroup");
var ToggleButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ToggleButtonGroup_namespaceObject);
// EXTERNAL MODULE: external "react-parallax"
var external_react_parallax_ = __webpack_require__(55236);
;// CONCATENATED MODULE: ./pages/vendor-dashboard/add-tour/index.js





















const index = ()=>{
    const [alignment, setAlignment] = external_react_.useState("active");
    const handleChange = (event1, newAlignment)=>{
        setAlignment(newAlignment);
    };
    const tabs = [
        {
            label: "Content",
            labelNo: 1
        },
        {
            label: "Gallery",
            labelNo: 2
        },
        {
            label: "Itinerary",
            labelNo: 3
        },
        {
            label: "Information",
            labelNo: 4
        }
    ];
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [tabIndex, setTabIndex] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    const id = router.query.id;
    const [tour, setTour] = (0,external_react_.useState)(null);
    const [itineraryFields, setItineraryFields] = (0,external_react_.useState)([
        {
            name: "",
            photos: [],
            details: "",
            duration: "",
            place: "",
            address: ""
        }
    ]);
    const [tourTypes, settourTypes] = (0,external_react_.useState)([]);
    const [locations, setLocations] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        tour_type_service/* default */.Z.getAll().then((response)=>{
            settourTypes(response.data);
        }).catch((e)=>{
            console.log(e);
        });
        location_service/* default */.Z.getAll().then((response)=>{
            setLocations(response.data);
        }).catch((e)=>{
            console.log(e);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (!id) {
            setLoading(false);
        } else {
            tour_service/* default */.Z.get(id).then((response)=>{
                //const langs = response.data.data?.languages[0].split(",") ?? [];
                // langs.forEach((lang) => {
                //   console.log(JSON.parse(lang));
                // });
                console.log(response.data.data);
                // const highlights = [];
                // const highlightsArray = JSON.parse(response.data.data.highlights);
                // highlightsArray.forEach((h) => {
                //   highlights.push(h.highlight);
                // })
                // response.data.data.highlights = highlights;
                // const includes = [];
                // const includesArray = JSON.parse(response.data.data.includes);
                // console.log(includesArray);
                // includesArray.forEach((h) => {
                //   includes.push(h.include);
                // })
                // response.data.data.includes = includes;
                // const notIncludes = [];
                // const notIncludesArray = JSON.parse(response.data.data.notIncludes);
                // notIncludesArray.forEach((h) => {
                //   notIncludes.push(h.notInclude);
                // })
                // response.data.data.notIncludes = notIncludes;
                // const inclusions = [];
                // const inclusionsArray = JSON.parse(response.data.data.inclusions);
                // inclusionsArray.forEach((h) => {
                //   inclusions.push(h.Inclusion);
                // })
                // response.data.data.inclusions = inclusions;
                // const exclusions = [];
                // const exclusionsArray = JSON.parse(response.data.data.exclusions);
                // exclusionsArray.forEach((h) => {
                //   exclusions.push(h.exclusion);
                // })
                // response.data.data.exclusions = exclusions;
                // const knowThings = [];
                // const knowThingsArray = JSON.parse(response.data.data.knowThings);
                // knowThingsArray.forEach((h) => {
                //   knowThings.push(h.knowThing);
                // })
                // response.data.data.knowThings = knowThings;
                // const informations = [];
                // const informationsArray = JSON.parse(response.data.data.informations);
                // informationsArray.forEach((h) => {
                //   informations.push(h.information);
                // })
                // response.data.data.informations = informations;
                // const departureDetails = [];
                // const departureDetailsArray = JSON.parse(response.data.data.departureDetails);
                // departureDetailsArray.forEach((h) => {
                //   departureDetails.push(h.departureDetail);
                // })
                // response.data.data.departureDetails = departureDetails;
                setTour(response.data.data);
                //setTimeout(() => { setLoading(false)}, 1500);
                setTimeout(()=>{
                    setLoading(false);
                    console.log("This will run after 1 second!");
                }, 1000);
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
    const [images, setImages] = (0,external_react_.useState)([]);
    const [itineraryImages, setItineraryImages] = (0,external_react_.useState)([]);
    const [featurePhotos, setFeaturePhotos] = (0,external_react_.useState)([]);
    const [error, setError] = (0,external_react_.useState)("");
    const addFieldsToTour = (section, fields)=>{
        setTour({
            ...tour,
            [section]: JSON.stringify(fields)
        });
    };
    const handleItineraryFieldsChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const list = [
            ...itineraryFields
        ];
        list[index][name] = value;
        setItineraryFields(list);
    };
    const addItineryField = ()=>{
        setItineraryFields([
            ...itineraryFields,
            {
                name: "",
                photos: [],
                details: "",
                duration: "",
                place: "",
                address: "",
                longitude: "",
                latitude: "",
                zoom: ""
            }
        ]);
    };
    const removeItineryFields = (index)=>{
        const rows = [
            ...itineraryFields
        ];
        rows.splice(index, 1);
        setItineraryFields(rows);
    };
    const handleItineraryRemoveImage = (index, imageIndex)=>{
        const list = [
            ...itineraryImages
        ];
        list[index].splice(imageIndex, 1);
        setItineraryImages(list);
    };
    const handleItineraryFileUpload = (even, index)=>{
        const ids = event.target.id.split("_");
        const imageIndex = parseInt(ids[1]);
        const fileList = even.target.files;
        const newImages = [];
        const maxSize = 800; // in pixels
        const list = [
            ...itineraryFields
        ];
        console.log(list);
        list[index]["photos"] = fileList;
        setItineraryFields([
            ...list
        ]);
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
                            console.log(imageIndex);
                            const list = [
                                ...itineraryImages
                            ];
                            console.log(list);
                            // if(list[imageIndex] && list[imageIndex].length == 0){
                            //   list[imageIndex] = [];
                            // }
                            if (list[imageIndex] && list[imageIndex].length > 0) {
                                newImages.forEach((img)=>{
                                    list[imageIndex].push(img);
                                });
                            } else {
                                list[imageIndex] = newImages;
                            }
                            console.log(list);
                            setItineraryImages(list);
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
    const handleFileUpload = (event1)=>{
        const fileList = event1.target.files;
        const newImages = [];
        const maxSize = 800; // in pixels
        setTour({
            ...tour,
            photos: fileList
        });
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
    const handleFeaturePhotoUpload = (event1)=>{
        console.log(event1.target);
        const file = event1.target.files[0];
        if (file) {
            const newImages = [];
            const maxSize = 800; // in pixels
            setTour({
                ...tour,
                featurePhoto: file
            });
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
                        if (newImages.length === event1.target.files.length) {
                            setFeaturePhotos([
                                ...featurePhotos,
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
    const handleRemoveFeatureImage = (index)=>{
        const newFeaturePhotos = [
            ...featurePhotos
        ];
        newFeaturePhotos.splice(index, 1);
        setFeaturePhotos(newFeaturePhotos);
    };
    const saveTour = (e)=>{
        if (tour) {
            e.preventDefault();
            setTour({
                ...tour,
                "itinerarys": JSON.stringify(itineraryFields)
            });
            console.log(tour);
            var formData = new FormData();
            const itineraryFieldsList = itineraryFields;
            itineraryFieldsList.map((t, index)=>{
                const photos = t.photos;
                itineraryFieldsList[index]["photos"] = [];
                for (const key of Object.keys(photos)){
                    formData.append("itineraryImages", photos[key]);
                }
            });
            setItineraryFields(itineraryFieldsList);
            formData.append("itinerarys", JSON.stringify(itineraryFields));
            for (const key of Object.keys(tour)){
                if (key == "languages") {
                    const langs = [];
                    for (const lkey of Object.keys(tour.languages)){
                        langs.push(tour.languages[lkey]);
                    }
                    formData.append("languages", JSON.stringify(tour.languages));
                }
                if (key !== "itinerarys" && key !== "featurePhoto" && key !== "gallery") {
                    formData.append(key, tour[key]);
                }
            }
            formData.append("featurePhoto", tour.featurePhoto);
            if (tour.photos) {
                for (const key of Object.keys(tour.photos)){
                    formData.append("gallery", tour.photos[key]);
                }
            }
            console.log(formData);
            if (id) {
                tour_service/* default */.Z.update(id, formData).then((response)=>{
                    router_default().push("/vendor-dashboard/tours");
                    console.log(response.data);
                }).catch((e)=>{
                    console.log(e);
                });
            } else {
                tour_service/* default */.Z.create(formData).then((response)=>{
                    router_default().push("/vendor-dashboard/tours");
                    console.log(response.data);
                }).catch((e)=>{
                    console.log(e);
                });
            }
        }
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
                                                children: "Add Tour"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-15 text-light-1",
                                                children: "This seciton for adding New Tour"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "py-30 px-30 rounded-4 bg-white shadow-3",
                                    children: [
                                        loading && /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: "LOADING..."
                                        }),
                                        loading == false && /*#__PURE__*/ jsx_runtime.jsx("form", {
                                            onSubmit: saveTour,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-xl-10",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_tabs_.Tabs, {
                                                    className: "tabs -underline-2 js-tabs",
                                                    selectedIndex: tabIndex,
                                                    onSelect: (index)=>setTabIndex(index),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_react_tabs_.TabList, {
                                                            className: "tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20",
                                                            children: tabs.map((tab, index)=>/*#__PURE__*/ jsx_runtime.jsx(external_react_tabs_.Tab, {
                                                                    className: "col-auto",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                        type: "button",
                                                                        className: "tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button",
                                                                        children: [
                                                                            tab.labelNo,
                                                                            ". ",
                                                                            tab.label
                                                                        ]
                                                                    })
                                                                }, index))
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tabs__content pt-30 js-tabs-content",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_tabs_.TabPanel, {
                                                                    className: `-tab-item-1 ${tabIndex === 1 ? "is-tab-el-active" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "text-18 fw-500 mb-10",
                                                                            children: "Tour Details"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "row x-gap-20 y-gap-20",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-input ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                type: "text",
                                                                                                name: "name",
                                                                                                defaultValue: tour?.name || "",
                                                                                                value: tour?.name || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        name: event1.target.value
                                                                                                    }),
                                                                                                required: true
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Name"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "form-select",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                            name: "type",
                                                                                            value: tour?.type || "",
                                                                                            onChange: (event1)=>setTour({
                                                                                                    ...tour,
                                                                                                    type: event1.target.value
                                                                                                }),
                                                                                            required: true,
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                                    value: "",
                                                                                                    children: "Type"
                                                                                                }),
                                                                                                tourTypes && tourTypes.data && tourTypes.data.length > 0 && tourTypes.data.map((type)=>{
                                                                                                    return /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                                        children: type.name
                                                                                                    });
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-input ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                                                required: true,
                                                                                                name: "description",
                                                                                                value: tour?.description || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        description: event1.target.value
                                                                                                    }),
                                                                                                rows: 5,
                                                                                                defaultValue: ""
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Overview"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "form-select ",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                            name: "location",
                                                                                            value: tour?.location || "",
                                                                                            onChange: (event1)=>setTour({
                                                                                                    ...tour,
                                                                                                    location: event1.target.value
                                                                                                }),
                                                                                            required: true,
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                                    value: "",
                                                                                                    children: "Location"
                                                                                                }),
                                                                                                locations && locations.data && locations.data.length > 0 && locations.data.map((location)=>{
                                                                                                    return /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                                        children: location.name
                                                                                                    });
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-input ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                type: "text",
                                                                                                name: "rating",
                                                                                                value: tour?.rating || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        rating: event1.target.value
                                                                                                    }),
                                                                                                required: true
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Rating"
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
                                                                                                name: "price",
                                                                                                value: tour?.price || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        price: event1.target.value
                                                                                                    }),
                                                                                                required: true
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Map Url"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                                    children: "Tags"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((FormGroup_default()), {
                                                                                    className: "row",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx((FormControlLabel_default()), {
                                                                                            control: /*#__PURE__*/ jsx_runtime.jsx((Checkbox_default()), {}),
                                                                                            label: "Best Seller"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx((FormControlLabel_default()), {
                                                                                            control: /*#__PURE__*/ jsx_runtime.jsx((Checkbox_default()), {}),
                                                                                            label: "Top Rating"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx((FormControlLabel_default()), {
                                                                                            control: /*#__PURE__*/ jsx_runtime.jsx((Checkbox_default()), {}),
                                                                                            label: "Best Offer"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                                    children: "Price"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-input ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                type: "text",
                                                                                                name: "price",
                                                                                                value: tour?.price || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        price: event1.target.value
                                                                                                    }),
                                                                                                required: true
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Price"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "form-input ",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                            addFieldsToTour: addFieldsToTour,
                                                                                            section: "faqs",
                                                                                            fields: [
                                                                                                {
                                                                                                    fromPlace: ""
                                                                                                },
                                                                                                {
                                                                                                    price: ""
                                                                                                }
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                                    children: "Status"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((ToggleButtonGroup_default()), {
                                                                                    color: "success",
                                                                                    value: alignment,
                                                                                    exclusive: true,
                                                                                    onChange: handleChange,
                                                                                    "aria-label": "Platform",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx((ToggleButton_default()), {
                                                                                            style: {
                                                                                                backgroundColor: "green",
                                                                                                color: "white"
                                                                                            },
                                                                                            value: "active",
                                                                                            children: "Active"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx((ToggleButton_default()), {
                                                                                            value: "android",
                                                                                            children: "In-active"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "d-inline-block pt-30",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                                        onClick: ()=>setTabIndex(1),
                                                                                        type: "button",
                                                                                        className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                                                                        children: [
                                                                                            "Next ",
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "icon-arrow-top-right ml-15"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, "1"),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_tabs_.TabPanel, {
                                                                    className: `-tab-item-3 ${tabIndex === 2 ? "is-tab-el-active" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                                                                                        id: "featurePhotoUpload",
                                                                                                        accept: "image/png, image/jpeg",
                                                                                                        className: "d-none",
                                                                                                        onChange: handleFeaturePhotoUpload
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                        className: "text-start mt-10 text-14 text-light-1",
                                                                                                        children: "PNG or JPG no bigger than 800px wide and tall."
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        featurePhotos.map((image, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                                                                            onClick: ()=>handleRemoveImage(index),
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
                                                                                        error && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12 mb-10  text-red-1",
                                                                                            children: error
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "mt-30",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "fw-500",
                                                                                    children: "Gallery"
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
                                                                                                        htmlFor: "bannerUpload",
                                                                                                        className: "d-flex ratio ratio-1:1",
                                                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                            className: "flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                    className: "icon-upload-file text-40 text-blue-1 mb-10"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                    className: "text-blue-1 fw-500",
                                                                                                                    children: "Upload Images"
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                        type: "file",
                                                                                                        id: "bannerUpload",
                                                                                                        multiple: true,
                                                                                                        accept: "image/png, image/jpeg",
                                                                                                        className: "d-none",
                                                                                                        onChange: handleFileUpload
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                        className: "text-start mt-10 text-14 text-light-1",
                                                                                                        children: "PNG or JPG no bigger than 800px wide and tall."
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        images.map((image, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                                                                            onClick: ()=>handleRemoveImage(index),
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
                                                                                        error && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12 mb-10  text-red-1",
                                                                                            children: error
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "d-inline-block pt-30",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                                onClick: ()=>setTabIndex(2),
                                                                                type: "button",
                                                                                className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                                                                children: [
                                                                                    "Next ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "icon-arrow-top-right ml-15"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }, "2"),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_tabs_.TabPanel, {
                                                                    className: `-tab-item-2 ${tabIndex === 3 ? "is-tab-el-active" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "row x-gap-20 y-gap-20",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "text-18 fw-500",
                                                                                        children: "Itinerary"
                                                                                    })
                                                                                }),
                                                                                itineraryFields && itineraryFields.map((data, index)=>{
                                                                                    const { fullName, emailAddress, salary } = data;
                                                                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "col-12",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                    className: "form-input ",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                            type: "text",
                                                                                                            name: "name",
                                                                                                            value: itineraryFields[index].name,
                                                                                                            onChange: (event1)=>handleItineraryFieldsChange(index, event1),
                                                                                                            required: true
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                            className: "lh-1 text-16 text-light-1",
                                                                                                            children: "Name"
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
                                                                                                            name: "details",
                                                                                                            value: itineraryFields[index].details,
                                                                                                            onChange: (event1)=>handleItineraryFieldsChange(index, event1),
                                                                                                            required: true
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                            className: "lh-1 text-16 text-light-1",
                                                                                                            children: "Details"
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
                                                                                                            name: "duration",
                                                                                                            value: itineraryFields[index].duration,
                                                                                                            onChange: (event1)=>handleItineraryFieldsChange(index, event1),
                                                                                                            required: true
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                            className: "lh-1 text-16 text-light-1",
                                                                                                            children: "Duration"
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
                                                                                                            name: "place",
                                                                                                            value: itineraryFields[index].place,
                                                                                                            onChange: (event1)=>handleItineraryFieldsChange(index, event1),
                                                                                                            required: true
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                            className: "lh-1 text-16 text-light-1",
                                                                                                            children: "Place"
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
                                                                                                            name: "address",
                                                                                                            value: itineraryFields[index].address,
                                                                                                            onChange: (event1)=>handleItineraryFieldsChange(index, event1),
                                                                                                            required: true
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                            className: "lh-1 text-16 text-light-1",
                                                                                                            children: "Address"
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
                                                                                                            name: "address",
                                                                                                            value: itineraryFields[index].address,
                                                                                                            onChange: (event1)=>handleItineraryFieldsChange(index, event1),
                                                                                                            required: true
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                            className: "lh-1 text-16 text-light-1",
                                                                                                            children: "Map Url"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "mt-30",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                        className: "fw-500",
                                                                                                        children: "Photos"
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
                                                                                                                            htmlFor: "itineryUpload_" + index,
                                                                                                                            className: "d-flex ratio ratio-1:1",
                                                                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                                                className: "flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                                        className: "icon-upload-file text-40 text-blue-1 mb-10"
                                                                                                                                    }),
                                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                                        className: "text-blue-1 fw-500",
                                                                                                                                        children: "Upload Photos"
                                                                                                                                    })
                                                                                                                                ]
                                                                                                                            })
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                                            type: "file",
                                                                                                                            id: "itineryUpload_" + index,
                                                                                                                            multiple: true,
                                                                                                                            accept: "image/png, image/jpeg",
                                                                                                                            className: "d-none",
                                                                                                                            onChange: (event1)=>handleItineraryFileUpload(event1, index)
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                            className: "text-start mt-10 text-14 text-light-1",
                                                                                                                            children: "PNG or JPG no bigger than 800px wide and tall."
                                                                                                                        })
                                                                                                                    ]
                                                                                                                })
                                                                                                            }),
                                                                                                            itineraryImages && itineraryImages[index] && itineraryImages[index].map((image, imageIndex)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
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
                                                                                                                                onClick: ()=>handleItineraryRemoveImage(index, imageIndex),
                                                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                                    className: "size-40 bg-white rounded-4 flex-center cursor-pointer",
                                                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                                                        className: "icon-trash text-16"
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        ]
                                                                                                                    })
                                                                                                                }, imageIndex)),
                                                                                                            error && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                className: "col-12 mb-10  text-red-1",
                                                                                                                children: error
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "col",
                                                                                                children: itineraryFields.length !== 1 ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                                    className: "btn btn-outline-danger",
                                                                                                    onClick: removeItineryFields,
                                                                                                    children: "Remove"
                                                                                                }) : ""
                                                                                            })
                                                                                        ]
                                                                                    });
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "row",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "col-sm-12",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                                            className: "btn btn-outline-success ",
                                                                                            onClick: addItineryField,
                                                                                            children: "Add New"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "d-inline-block pt-30",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                                onClick: ()=>setTabIndex(3),
                                                                                type: "button",
                                                                                className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                                                                children: [
                                                                                    "Next ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "icon-arrow-top-right ml-15"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }, "3"),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_tabs_.TabPanel, {
                                                                    className: `-tab-item-4 ${tabIndex === 4 ? "is-tab-el-active" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "row x-gap-10 y-gap-10",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "col-12",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "col-12",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "text-18 fw-500",
                                                                                            children: "Cancellation policy"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-input ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                                                required: true,
                                                                                                name: "cancellation",
                                                                                                value: tour?.cancellation || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        cancellation: event1.target.value
                                                                                                    }),
                                                                                                rows: 5,
                                                                                                defaultValue: ""
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Cancellation policy"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "row x-gap-10 y-gap-10",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "col-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-18 fw-500",
                                                                                                children: "Highlights"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-input ",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                                    addFieldsToTour: addFieldsToTour,
                                                                                                    section: "highlights",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            highlight: ""
                                                                                                        }
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "col-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-18 fw-500",
                                                                                                children: "Know before you go"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-input ",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                                    addFieldsToTour: addFieldsToTour,
                                                                                                    section: "knowThings",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            knowThing: ""
                                                                                                        }
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "col-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-18 fw-500",
                                                                                                children: "Includes"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-input ",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                                    addFieldsToTour: addFieldsToTour,
                                                                                                    section: "includes",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            include: ""
                                                                                                        }
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "col-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-18 fw-500",
                                                                                                children: "Not Includes"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-input ",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                                    addFieldsToTour: addFieldsToTour,
                                                                                                    section: "notIncludes",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            notInclude: ""
                                                                                                        }
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "col-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-18 fw-500",
                                                                                                children: "Inclusions"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-input ",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                                    addFieldsToTour: addFieldsToTour,
                                                                                                    section: "inclusions",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            Inclusion: ""
                                                                                                        }
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "col-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-18 fw-500",
                                                                                                children: "Exclusions"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                            className: "col-12",
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-input ",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                                    addFieldsToTour: addFieldsToTour,
                                                                                                    section: "exclusions",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            exclusion: ""
                                                                                                        }
                                                                                                    ]
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "text-18 fw-500",
                                                                                        children: "Departure details"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "form-input ",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                            addFieldsToTour: addFieldsToTour,
                                                                                            section: "departureDetails",
                                                                                            fields: [
                                                                                                {
                                                                                                    departureDetail: ""
                                                                                                }
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "text-18 fw-500",
                                                                                        children: "Additional Information"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "form-input ",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                            addFieldsToTour: addFieldsToTour,
                                                                                            section: "informations",
                                                                                            fields: [
                                                                                                {
                                                                                                    information: ""
                                                                                                }
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "row x-gap-20 y-gap-20",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-input ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                type: "text",
                                                                                                name: "duration",
                                                                                                value: tour?.duration || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        duration: event1.target.value
                                                                                                    }),
                                                                                                required: true
                                                                                            }),
                                                                                            " Hrs",
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "Duration"
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
                                                                                                name: "noOfPersons",
                                                                                                value: tour?.noOfPersons || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        noOfPersons: event1.target.value
                                                                                                    }),
                                                                                                required: true
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                                className: "lh-1 text-16 text-light-1",
                                                                                                children: "No of Persons Allowed"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "row x-gap-20 y-gap-20",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "text-18 fw-500",
                                                                                        children: "Languages"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "d-flex items-center form-checkbox",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                type: "checkbox",
                                                                                                value: tour?.languages?.english || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        languages: {
                                                                                                            ...tour?.languages,
                                                                                                            english: event1.target.checked
                                                                                                        }
                                                                                                    })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-checkbox__mark",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "form-checkbox__icon icon-check"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-15 lh-11 ml-10",
                                                                                                children: "English"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "form-checkbox",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                                type: "checkbox",
                                                                                                value: tour?.languages?.hindi || "",
                                                                                                onChange: (event1)=>setTour({
                                                                                                        ...tour,
                                                                                                        languages: {
                                                                                                            ...tour?.languages,
                                                                                                            hindi: event1.target.checked
                                                                                                        }
                                                                                                    })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "form-checkbox__mark",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                    className: "form-checkbox__icon icon-check"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "text-15 lh-11 ml-10",
                                                                                                children: "Hindi"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "row x-gap-20 y-gap-20",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "text-18 fw-500",
                                                                                        children: "FAQS"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "form-input ",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx(multiFields["default"], {
                                                                                            addFieldsToTour: addFieldsToTour,
                                                                                            section: "faqs",
                                                                                            fields: [
                                                                                                {
                                                                                                    questions: ""
                                                                                                },
                                                                                                {
                                                                                                    answers: ""
                                                                                                }
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "d-inline-block pt-30",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                                type: "submit",
                                                                                className: "button h-50 px-24 -dark-1 bg-blue-1 text-white",
                                                                                children: [
                                                                                    "Save Changes ",
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                        className: "icon-arrow-top-right ml-15"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }, "4")
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
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
/* harmony default export */ const add_tour = (index);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fvendor-dashboard%2Fadd-tour&preferredRegion=&absolutePagePath=private-next-pages%2Fvendor-dashboard%2Fadd-tour%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fvendor_dashboard_2Fadd_tour_preferredRegion_absolutePagePath_private_next_pages_2Fvendor_dashboard_2Fadd_tour_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(add_tour_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(add_tour_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/vendor-dashboard/add-tour","pathname":"/vendor-dashboard/add-tour","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: add_tour_namespaceObject,
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

/***/ 55236:
/***/ ((module) => {

module.exports = require("react-parallax");

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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,330,8443,3828,6746,9918,1920,9677,3695,7479,4842,3767,7134,3122,8576,5275,3667,6892,9141,9418,4234,9098,6389], () => (__webpack_exec__(22842)));
module.exports = __webpack_exports__;

})();