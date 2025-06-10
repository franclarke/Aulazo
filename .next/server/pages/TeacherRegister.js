"use strict";
(() => {
var exports = {};
exports.id = 103;
exports.ids = [103,660];
exports.modules = {

/***/ 7450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FTeacherRegister_preferredRegion_absolutePagePath_private_next_pages_2FTeacherRegister_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/TeacherRegister.tsx
var TeacherRegister_namespaceObject = {};
__webpack_require__.r(TeacherRegister_namespaceObject);
__webpack_require__.d(TeacherRegister_namespaceObject, {
  "default": () => (pages_TeacherRegister)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/route-modules/pages/module.compiled.js
var module_compiled = __webpack_require__(5872);
// EXTERNAL MODULE: ./node_modules/next/dist/server/route-kind.js
var route_kind = __webpack_require__(3593);
// EXTERNAL MODULE: ./node_modules/next/dist/build/templates/helpers.js
var helpers = __webpack_require__(1323);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(1682);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(8141);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(7911);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(3656);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(4021);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lock.js
var lock = __webpack_require__(4132);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(2922);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(9972);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/dollar-sign.js
var dollar_sign = __webpack_require__(1036);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(3592);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/upload.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Upload = (0,createLucideIcon/* default */.Z)("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
]);
 //# sourceMappingURL=upload.js.map

// EXTERNAL MODULE: ./src/components/AulazoLogo.tsx
var AulazoLogo = __webpack_require__(748);
;// CONCATENATED MODULE: ./src/pages/TeacherRegister.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const TeacherRegister = ()=>{
    const [showPassword, setShowPassword] = (0,external_react_.useState)(false);
    const [currentStep, setCurrentStep] = (0,external_react_.useState)(1);
    const [formData, setFormData] = (0,external_react_.useState)({
        // Personal Info
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        // Professional Info
        subjects: [],
        experience: '',
        education: '',
        hourlyRate: '',
        bio: '',
        // Documents
        acceptTerms: false
    });
    const subjects = [
        'Matemáticas',
        'Física',
        'Química',
        'Biología',
        'Historia',
        'Geografía',
        'Literatura',
        'Inglés',
        'Francés',
        'Programación',
        'Arte',
        'Música'
    ];
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            // Handle final registration
            console.log('Teacher registration:', formData);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const checked = e.target.checked;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
    };
    const handleSubjectToggle = (subject)=>{
        setFormData((prev)=>({
                ...prev,
                subjects: prev.subjects.includes(subject) ? prev.subjects.filter((s)=>s !== subject) : [
                    ...prev.subjects,
                    subject
                ]
            }));
    };
    const renderStep1 = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                            className: "text-xl font-semibold text-aulazo-dark",
                            children: "Informaci\xf3n personal"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "text-gray-600",
                            children: "Cu\xe9ntanos sobre ti"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                    htmlFor: "firstName",
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Nombre *"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(user/* default */.Z, {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            id: "firstName",
                                            name: "firstName",
                                            type: "text",
                                            required: true,
                                            value: formData.firstName,
                                            onChange: handleInputChange,
                                            className: "pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                            placeholder: "Tu nombre"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                    htmlFor: "lastName",
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Apellido *"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                    id: "lastName",
                                    name: "lastName",
                                    type: "text",
                                    required: true,
                                    value: formData.lastName,
                                    onChange: handleInputChange,
                                    className: "w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                    placeholder: "Tu apellido"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "email",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Correo electr\xf3nico *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(mail/* default */.Z, {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    required: true,
                                    value: formData.email,
                                    onChange: handleInputChange,
                                    className: "pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                    placeholder: "tu@email.com"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "phone",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tel\xe9fono *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(phone/* default */.Z, {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                    id: "phone",
                                    name: "phone",
                                    type: "tel",
                                    required: true,
                                    value: formData.phone,
                                    onChange: handleInputChange,
                                    className: "pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                    placeholder: "+1 (555) 123-4567"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "password",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Contrase\xf1a *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(lock/* default */.Z, {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                    id: "password",
                                    name: "password",
                                    type: showPassword ? 'text' : 'password',
                                    required: true,
                                    value: formData.password,
                                    onChange: handleInputChange,
                                    className: "pl-10 pr-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                    placeholder: "M\xednimo 8 caracteres"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                    type: "button",
                                    onClick: ()=>setShowPassword(!showPassword),
                                    className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
                                    children: showPassword ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(eye_off/* default */.Z, {
                                        className: "h-5 w-5"
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(eye/* default */.Z, {
                                        className: "h-5 w-5"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    const renderStep2 = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                            className: "text-xl font-semibold text-aulazo-dark",
                            children: "Informaci\xf3n profesional"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "text-gray-600",
                            children: "Cu\xe9ntanos sobre tu experiencia"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Materias que ense\xf1as *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: subjects.map((subject)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "checkbox",
                                            checked: formData.subjects.includes(subject),
                                            onChange: ()=>handleSubjectToggle(subject),
                                            className: "h-4 w-4 text-aulazo-blue focus:ring-aulazo-blue border-gray-300 rounded mr-2"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "text-sm text-gray-700",
                                            children: subject
                                        })
                                    ]
                                }, subject))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "experience",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "A\xf1os de experiencia *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            id: "experience",
                            name: "experience",
                            required: true,
                            value: formData.experience,
                            onChange: handleInputChange,
                            className: "w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "",
                                    children: "Selecciona tu experiencia"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "1-2",
                                    children: "1-2 a\xf1os"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "3-5",
                                    children: "3-5 a\xf1os"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "6-10",
                                    children: "6-10 a\xf1os"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "10+",
                                    children: "M\xe1s de 10 a\xf1os"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "education",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Nivel educativo *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            id: "education",
                            name: "education",
                            required: true,
                            value: formData.education,
                            onChange: handleInputChange,
                            className: "w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "",
                                    children: "Selecciona tu nivel educativo"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "licenciatura",
                                    children: "Licenciatura"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "maestria",
                                    children: "Maestr\xeda"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "doctorado",
                                    children: "Doctorado"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                    value: "otro",
                                    children: "Otro"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "hourlyRate",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Tarifa por hora (USD) *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(dollar_sign/* default */.Z, {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                    id: "hourlyRate",
                                    name: "hourlyRate",
                                    type: "number",
                                    min: "10",
                                    max: "200",
                                    required: true,
                                    value: formData.hourlyRate,
                                    onChange: handleInputChange,
                                    className: "pl-10 w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                    placeholder: "25"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                            htmlFor: "bio",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Biograf\xeda profesional *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                            id: "bio",
                            name: "bio",
                            rows: 4,
                            required: true,
                            value: formData.bio,
                            onChange: handleInputChange,
                            className: "w-full px-3 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                            placeholder: "Describe tu experiencia, metodolog\xeda de ense\xf1anza y lo que te hace \xfanico como profesor..."
                        })
                    ]
                })
            ]
        });
    const renderStep3 = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                            className: "text-xl font-semibold text-aulazo-dark",
                            children: "Documentos y verificaci\xf3n"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "text-gray-600",
                            children: "Sube tus documentos para verificaci\xf3n"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-2 border-dashed border-gray-300 rounded-aulazo p-6 text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(Upload, {
                                    className: "h-12 w-12 text-gray-400 mx-auto mb-4"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h4", {
                                    className: "text-lg font-medium text-gray-700 mb-2",
                                    children: "T\xedtulo universitario"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "text-sm text-gray-500 mb-4",
                                    children: "Sube una copia de tu t\xedtulo o certificado"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                    type: "button",
                                    className: "bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors",
                                    children: "Seleccionar archivo"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-2 border-dashed border-gray-300 rounded-aulazo p-6 text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(Upload, {
                                    className: "h-12 w-12 text-gray-400 mx-auto mb-4"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h4", {
                                    className: "text-lg font-medium text-gray-700 mb-2",
                                    children: "Identificaci\xf3n oficial"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "text-sm text-gray-500 mb-4",
                                    children: "Sube una copia de tu identificaci\xf3n"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                    type: "button",
                                    className: "bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors",
                                    children: "Seleccionar archivo"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-start",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                            id: "acceptTerms",
                            name: "acceptTerms",
                            type: "checkbox",
                            required: true,
                            checked: formData.acceptTerms,
                            onChange: handleInputChange,
                            className: "h-4 w-4 text-aulazo-blue focus:ring-aulazo-blue border-gray-300 rounded mt-1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            htmlFor: "acceptTerms",
                            className: "ml-2 block text-sm text-gray-700",
                            children: [
                                "Acepto los",
                                ' ',
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    href: "/terminos",
                                    className: "text-aulazo-blue hover:text-blue-600",
                                    children: "t\xe9rminos y condiciones"
                                }),
                                ' ',
                                "para profesores y la",
                                ' ',
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    href: "/privacidad",
                                    className: "text-aulazo-blue hover:text-blue-600",
                                    children: "pol\xedtica de privacidad"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            className: "flex items-center justify-center space-x-2 mb-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(AulazoLogo/* default */.Z, {
                                    className: "h-10 w-10 text-aulazo-blue"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                    className: "text-3xl font-bold text-aulazo-blue",
                                    children: "aulazo"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                            className: "text-3xl font-bold text-aulazo-dark",
                            children: "\xdanete como Profesor"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            className: "mt-2 text-gray-600",
                            children: "Comparte tu conocimiento y ayuda a otros a aprender"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "flex items-center justify-center space-x-4",
                            children: [
                                1,
                                2,
                                3
                            ].map((step)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step <= currentStep ? 'bg-aulazo-blue text-white' : 'bg-gray-200 text-gray-600'}`,
                                            children: step
                                        }),
                                        step < 3 && /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: `w-16 h-1 mx-2 ${step < currentStep ? 'bg-aulazo-blue' : 'bg-gray-200'}`
                                        })
                                    ]
                                }, step))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "flex justify-center mt-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "Paso ",
                                    currentStep,
                                    " de 3"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-white rounded-aulazo shadow-aulazo p-8",
                        children: [
                            currentStep === 1 && renderStep1(),
                            currentStep === 2 && renderStep2(),
                            currentStep === 3 && renderStep3(),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between mt-8",
                                children: [
                                    currentStep > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>setCurrentStep(currentStep - 1),
                                        className: "bg-gray-300 text-gray-700 px-6 py-3 rounded-aulazo hover:bg-gray-400 transition-colors font-medium",
                                        children: "Anterior"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                        type: "submit",
                                        className: "bg-green-600 text-white px-6 py-3 rounded-aulazo hover:bg-green-700 transition-colors font-medium ml-auto",
                                        children: currentStep === 3 ? 'Enviar solicitud' : 'Siguiente'
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "mt-8 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-sm text-gray-600",
                        children: [
                            "\xbfYa tienes cuenta?",
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                href: "/login",
                                className: "text-aulazo-blue hover:text-blue-600 font-medium",
                                children: "Inicia sesi\xf3n aqu\xed"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const pages_TeacherRegister = (TeacherRegister);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FTeacherRegister&preferredRegion=&absolutePagePath=private-next-pages%2FTeacherRegister.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!



// Import the app and document modules.


// Import the userland code.

// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FTeacherRegister_preferredRegion_absolutePagePath_private_next_pages_2FTeacherRegister_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'default'));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'getStaticProps');
const getStaticPaths = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'getStaticPaths');
const getServerSideProps = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'getServerSideProps');
const config = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'config');
const reportWebVitals = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'unstable_getStaticParams');
const unstable_getServerProps = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(TeacherRegister_namespaceObject, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new module_compiled.PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/TeacherRegister",
        pathname: "/TeacherRegister",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: TeacherRegister_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const Icon = /*#__PURE__*/ (0,external_react_.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return /*#__PURE__*/ (0,external_react_.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,external_react_.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
 //# sourceMappingURL=Icon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,external_react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ (0,external_react_.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 1036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DollarSign)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const DollarSign = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("DollarSign", [
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
]);
 //# sourceMappingURL=dollar-sign.js.map


/***/ }),

/***/ 2922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EyeOff)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const EyeOff = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("EyeOff", [
    [
        "path",
        {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }
    ],
    [
        "path",
        {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }
    ],
    [
        "path",
        {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
 //# sourceMappingURL=eye-off.js.map


/***/ }),

/***/ 9972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Eye = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Eye", [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
 //# sourceMappingURL=eye.js.map


/***/ }),

/***/ 4132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Lock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Lock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
 //# sourceMappingURL=lock.js.map


/***/ }),

/***/ 3656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Mail)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Mail = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
 //# sourceMappingURL=mail.js.map


/***/ }),

/***/ 4021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Phone)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Phone = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
 //# sourceMappingURL=phone.js.map


/***/ }),

/***/ 7911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const User = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
 //# sourceMappingURL=user.js.map


/***/ }),

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AulazoLogo = ({ className = "h-8 w-8", width, height })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: className,
        width: width,
        height: height,
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "primaryGradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#c084fc"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#a855f7"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "secondaryGradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#60a5fa"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#3b82f6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "accentGradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#4ade80"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#22c55e"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("filter", {
                        id: "softShadow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feDropShadow", {
                            dx: "0",
                            dy: "2",
                            stdDeviation: "3",
                            floodColor: "#a855f7",
                            floodOpacity: "0.15"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "6",
                y: "6",
                width: "36",
                height: "36",
                rx: "8",
                fill: "url(#primaryGradient)",
                filter: "url(#softShadow)"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "10",
                y: "10",
                width: "28",
                height: "28",
                rx: "4",
                fill: "white",
                opacity: "0.95"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "24",
                y1: "12",
                x2: "24",
                y2: "36",
                stroke: "url(#secondaryGradient)",
                strokeWidth: "2",
                opacity: "0.8"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                opacity: "0.6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "14",
                        y: "16",
                        width: "8",
                        height: "1.5",
                        rx: "0.75",
                        fill: "url(#secondaryGradient)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "26",
                        y: "16",
                        width: "8",
                        height: "1.5",
                        rx: "0.75",
                        fill: "url(#secondaryGradient)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "14",
                        y: "20",
                        width: "6",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#94a3b8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "26",
                        y: "20",
                        width: "7",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#94a3b8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "14",
                        y: "24",
                        width: "7",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#94a3b8"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "26",
                        y: "24",
                        width: "6",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#94a3b8"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                opacity: "0.8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                        cx: "16",
                        cy: "30",
                        r: "1.5",
                        fill: "url(#accentGradient)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                        cx: "24",
                        cy: "32",
                        r: "1.5",
                        fill: "url(#accentGradient)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                        cx: "32",
                        cy: "30",
                        r: "1.5",
                        fill: "url(#accentGradient)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M17.5,30 Q20.5,31 22.5,32",
                        stroke: "url(#accentGradient)",
                        strokeWidth: "1",
                        fill: "none",
                        opacity: "0.6",
                        strokeLinecap: "round"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M25.5,32 Q28.5,31 30.5,30",
                        stroke: "url(#accentGradient)",
                        strokeWidth: "1",
                        fill: "none",
                        opacity: "0.6",
                        strokeLinecap: "round"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M20,28 L22,22 L24,22 L26,28 M21,26 L25,26",
                stroke: "url(#primaryGradient)",
                strokeWidth: "1.5",
                fill: "none",
                opacity: "0.3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AulazoLogo);


/***/ }),

/***/ 2785:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5315:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [682,147], () => (__webpack_exec__(7450)));
module.exports = __webpack_exports__;

})();