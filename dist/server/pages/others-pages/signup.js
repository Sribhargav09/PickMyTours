"use strict";
(() => {
var exports = {};
exports.id = 3766;
exports.ids = [3766];
exports.modules = {

/***/ 48135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fothers_pages_2Fsignup_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Fsignup_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/others-pages/signup.js
var signup_namespaceObject = {};
__webpack_require__.r(signup_namespaceObject);
__webpack_require__.d(signup_namespaceObject, {
  "default": () => (signup)
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
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/common/CallToActions.jsx
var CallToActions = __webpack_require__(10164);
// EXTERNAL MODULE: ./components/common/Seo.jsx
var Seo = __webpack_require__(62112);
// EXTERNAL MODULE: ./components/header/default-header/index.jsx
var default_header = __webpack_require__(39898);
// EXTERNAL MODULE: ./components/footer/default/index.jsx + 4 modules
var footer_default = __webpack_require__(94609);
// EXTERNAL MODULE: ./components/common/LoginWithSocial.jsx
var LoginWithSocial = __webpack_require__(64229);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./services/signup.server.js
var signup_server = __webpack_require__(62994);
;// CONCATENATED MODULE: external "react-verification-code-input"
const external_react_verification_code_input_namespaceObject = require("react-verification-code-input");
var external_react_verification_code_input_default = /*#__PURE__*/__webpack_require__.n(external_react_verification_code_input_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(29404);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(32268);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(52468);
;// CONCATENATED MODULE: ./components/common/SignUpForm.jsx













const SignUpForm = ()=>{
    const [firstName, setFirstName] = (0,external_react_.useState)("");
    const [lastName, setLastName] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,external_react_.useState)("");
    const [phone, setPhone] = (0,external_react_.useState)("");
    const [userRole, setUserRole] = (0,external_react_.useState)("user");
    const [errors, setErrors] = (0,external_react_.useState)({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        userRole: "",
        photos: ""
    });
    const [photo, setPhoto] = (0,external_react_.useState)(null);
    const [photos, setPhotos] = (0,external_react_.useState)([]);
    const [images, setImages] = (0,external_react_.useState)(null);
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [isRegister, setIsRegister] = (0,external_react_.useState)(false);
    const [isVerified, setIsVerified] = (0,external_react_.useState)(false);
    const [enableVerify, setEnableVerify] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const id = router.query.id;
    (0,external_react_.useEffect)(()=>{
        if (!id) {
        //setLoading(false);
        } else {
            signup_server/* default */.Z.get(id).then((response)=>{
                setFirstName(response.data.data.firstName);
                setLastName(response.data.data.lastName);
                setPhotos([
                    response.data.data.photo
                ]);
                setEmail(response.data.data.email);
                setPassword(response.data.data.password);
                setConfirmPassword(response.data.data.conformpassword);
                setphone(response.data.data.phone);
                setTimeout(()=>{
                    setLoading(false);
                    console.log("This will run after 1 second!");
                }, 1000);
                console.log(add - user);
            }).catch((e)=>{
                console.log(e);
            });
        }
        return ()=>{};
    }, [
        id
    ]);
    const add = ()=>{
        let error = false;
        const rerrors = {};
        if (firstName.length == 0) {
            rerrors["firstName"] = "The firstname can not be empty";
            error = true;
        }
        if (lastName.length == 0) {
            rerrors["lastName"] = "The lastname can not be empty";
            error = true;
        }
        if (email.length == 0) {
            rerrors["email"] = "The email is required";
            error = true;
        }
        if (password.length == 0) {
            rerrors["password"] = "The password is required";
            error = true;
        }
        if (phone.length < 10) {
            rerrors["phone"] = "The phone is required";
            error = true;
        }
        if (photos.length == 0) {
            error = true;
            rerrors["photos"] = "Upload a photo can not be empty";
        }
        if (!error) {
            signup_server/* default */.Z.create({
                firstName,
                lastName,
                email,
                password,
                phone: phone,
                role: userRole,
                photo
            }).then((response)=>{
                console.log(response.data);
                window.scrollTo({
                    top: 100,
                    behavior: "smooth"
                });
                // setTimeout(() => {
                //   Router.push("/others-pages/login");
                // }, 1000);
                setIsRegister(true);
            }).catch((e)=>{
                if (e && e.response.data && e.response.data.email) {
                    setErrors({
                        email: e.response.data.email
                    });
                    window.scrollTo({
                        top: 450,
                        behavior: "smooth"
                    });
                }
                console.log(e);
            });
        } else {
            setErrors(rerrors);
            window.scrollTo({
                top: 100,
                behavior: "smooth"
            });
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
    const handleVerificationCode = (value)=>{
        if (value.length < 4) {
            setEnableVerify(false);
        } else {
            setEnableVerify(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !isRegister && /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                className: "row y-gap-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-22 fw-500",
                                children: "Welcome back"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "mt-10",
                                children: [
                                    "Already have an account yet?",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/others-pages/login",
                                        className: "text-blue-1",
                                        children: "Log in"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-input ",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    value: firstName,
                                    onChange: (event)=>setFirstName(event.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "lh-1 text-14 text-light-1",
                                    children: "First Name*"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        class: "error col-12",
                        children: errors && errors.firstName
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-input ",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    value: lastName,
                                    onChange: (event)=>setLastName(event.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "lh-1 text-14 text-light-1",
                                    children: "Last Name*"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        class: "error col-12",
                        children: errors && errors.lastName
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-input ",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    value: email,
                                    onChange: (event)=>setEmail(event.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "lh-1 text-14 text-light-1",
                                    children: "Email*"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        class: "error col-12",
                        children: errors && errors.email
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-input ",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "password",
                                    value: password,
                                    onChange: (event)=>setPassword(event.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "lh-1 text-14 text-light-1",
                                    children: "Password*"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        class: "error col-12",
                        children: errors && errors.password
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-input ",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "password",
                                    value: confirmPassword,
                                    onChange: (event)=>setConfirmPassword(event.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "lh-1 text-14 text-light-1",
                                    children: "Confirm Password*"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        class: "error col-12",
                        children: errors && errors.confirmPassword
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "form-input ",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "number",
                                    value: phone,
                                    onChange: (event)=>setPhone(event.target.value),
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "lh-1 text-14 text-light-1",
                                    children: "Phone"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        class: "error col-12",
                        children: errors && errors.phone
                    }),
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            type: "button",
                            href: "#",
                            onClick: ()=>add(),
                            className: "button py-20 -dark-1 bg-blue-1 text-white w-100",
                            children: [
                                "Sign Up ",
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "icon-arrow-top-right ml-15"
                                })
                            ]
                        })
                    })
                ]
            }),
            isRegister && !isVerified && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: "mb-20",
                        children: "Verify Your Email Address"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            padding: 10,
                            margin: "auto"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Please enter the 4-digit verification code we sent via SMS:"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mb-20",
                                children: "(we want to make sure it's your email id verified)"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                lassName: "mt-50 mb-20",
                                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_verification_code_input_default()), {
                                    fields: 4,
                                    onChange: handleVerificationCode,
                                    onComplete: setEnableVerify
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                style: {
                                    opacity: !enableVerify ? 0.5 : 1
                                },
                                className: "button px-30 mt-50 ml-50 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white",
                                type: "button",
                                disabled: !enableVerify,
                                children: "Verifiy"
                            })
                        ]
                    })
                ]
            }),
            isRegister && isVerified && /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "success",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    children: [
                        "Thanks for Signup. ",
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        "Your account will be activate after approval form our end"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_SignUpForm = (SignUpForm);

;// CONCATENATED MODULE: ./pages/others-pages/signup.js








const SignUp = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Seo/* default */.Z, {
                pageTitle: "Sign Up"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "header-margin"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(default_header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "layout-pt-lg layout-pb-lg bg-blue-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-7 col-md-9",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx(common_SignUpForm, {})
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallToActions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(footer_default/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const signup = (dynamic_default()(()=>Promise.resolve(SignUp), {
    ssr: false
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fothers-pages%2Fsignup&preferredRegion=&absolutePagePath=private-next-pages%2Fothers-pages%2Fsignup.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fothers_pages_2Fsignup_preferredRegion_absolutePagePath_private_next_pages_2Fothers_pages_2Fsignup_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(signup_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(signup_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(signup_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(signup_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(signup_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/others-pages/signup","pathname":"/others-pages/signup","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: signup_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 29404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 32268:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 52468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [6678,8719,5675,1664,5152,330,8443,3828,6746,627,7602,4609,164,9898,2994,4229], () => (__webpack_exec__(48135)));
module.exports = __webpack_exports__;

})();