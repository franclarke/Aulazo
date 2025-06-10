"use strict";
(() => {
var exports = {};
exports.id = 939;
exports.ids = [939,660];
exports.modules = {

/***/ 3523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FContact_preferredRegion_absolutePagePath_private_next_pages_2FContact_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/Contact.tsx
var Contact_namespaceObject = {};
__webpack_require__.r(Contact_namespaceObject);
__webpack_require__.d(Contact_namespaceObject, {
  "default": () => (pages_Contact)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(3656);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(4021);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/message-circle.js
var message_circle = __webpack_require__(83);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-help.js
var circle_help = __webpack_require__(9237);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(6286);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/send.js
var send = __webpack_require__(594);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(3592);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MapPin = (0,createLucideIcon/* default */.Z)("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
 //# sourceMappingURL=map-pin.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(8742);
// EXTERNAL MODULE: ./src/components/Navbar.tsx
var Navbar = __webpack_require__(1600);
// EXTERNAL MODULE: ./src/components/AulazoLogo.tsx
var AulazoLogo = __webpack_require__(748);
;// CONCATENATED MODULE: ./src/pages/Contact.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Contact = ()=>{
    const [formData, setFormData] = (0,external_react_.useState)({
        name: '',
        email: '',
        subject: '',
        message: '',
        userType: 'student'
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Handle form submission
        console.log('Contact form submitted:', formData);
    // Reset form or show success message
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const contactMethods = [
        {
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsx)(mail/* default */.Z, {
                className: "h-6 w-6"
            }),
            title: 'Correo Electrónico',
            description: 'Envíanos un mensaje y te responderemos en 24 horas',
            contact: 'hola@aulazo.com',
            action: 'mailto:hola@aulazo.com'
        },
        {
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsx)(phone/* default */.Z, {
                className: "h-6 w-6"
            }),
            title: 'Teléfono',
            description: 'Llámanos de lunes a viernes de 9:00 a 18:00',
            contact: '+1 (555) 123-4567',
            action: 'tel:+15551234567'
        },
        {
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsx)(message_circle/* default */.Z, {
                className: "h-6 w-6"
            }),
            title: 'Chat en Vivo',
            description: 'Chatea con nuestro equipo de soporte',
            contact: 'Disponible 24/7',
            action: '#'
        }
    ];
    const supportTopics = [
        {
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsx)(circle_help/* default */.Z, {
                className: "h-6 w-6 text-blue-500"
            }),
            title: 'Preguntas Frecuentes',
            description: 'Encuentra respuestas a las preguntas más comunes',
            link: '/faq'
        },
        {
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsx)(users/* default */.Z, {
                className: "h-6 w-6 text-green-500"
            }),
            title: 'Soporte Técnico',
            description: 'Ayuda con problemas técnicos de la plataforma',
            link: '/soporte-tecnico'
        },
        {
            icon: /*#__PURE__*/ (0,jsx_runtime_.jsx)(AulazoLogo/* default */.Z, {
                className: "h-6 w-6 text-purple-500"
            }),
            title: 'Guías de Usuario',
            description: 'Aprende a usar todas las funciones de aulazo',
            link: '/guias'
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "bg-gradient-to-br from-blue-50 to-white py-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h1", {
                                className: "text-5xl font-bold text-aulazo-dark mb-6",
                                children: "Cont\xe1ctanos"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",
                                children: "\xbfTienes preguntas, sugerencias o necesitas ayuda? Estamos aqu\xed para apoyarte en tu experiencia educativa con aulazo."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                    className: "text-3xl font-bold text-aulazo-dark mb-4",
                                    children: "Formas de Contacto"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "text-lg text-gray-600",
                                    children: "Elige la forma que m\xe1s te convenga para comunicarte con nosotros"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: contactMethods.map((method, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-white rounded-aulazo shadow-aulazo p-8 text-center hover:shadow-aulazo-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "inline-flex items-center justify-center w-16 h-16 bg-aulazo-blue bg-opacity-10 rounded-full mb-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "text-aulazo-blue",
                                                children: method.icon
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                            className: "text-xl font-semibold text-aulazo-dark mb-3",
                                            children: method.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "text-gray-600 mb-4",
                                            children: method.description
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                            href: method.action,
                                            className: "text-aulazo-blue font-semibold hover:text-blue-600 transition-colors",
                                            children: method.contact
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "py-20 bg-aulazo-gray",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                    className: "text-3xl font-bold text-aulazo-dark mb-4",
                                    children: "Env\xedanos un Mensaje"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "text-lg text-gray-600",
                                    children: "Completa el formulario y nos pondremos en contacto contigo pronto"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "bg-white rounded-aulazo shadow-aulazo p-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                        htmlFor: "name",
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Nombre completo *"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                        type: "text",
                                                        id: "name",
                                                        name: "name",
                                                        required: true,
                                                        value: formData.name,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                                        placeholder: "Tu nombre completo"
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
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        required: true,
                                                        value: formData.email,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                                        placeholder: "tu@email.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                        htmlFor: "userType",
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Tipo de usuario"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                        id: "userType",
                                                        name: "userType",
                                                        value: formData.userType,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "student",
                                                                children: "Estudiante"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "teacher",
                                                                children: "Profesor"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "parent",
                                                                children: "Padre/Madre"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "other",
                                                                children: "Otro"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                        htmlFor: "subject",
                                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                                        children: "Asunto *"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                        id: "subject",
                                                        name: "subject",
                                                        required: true,
                                                        value: formData.subject,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "",
                                                                children: "Selecciona un asunto"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "support",
                                                                children: "Soporte t\xe9cnico"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "billing",
                                                                children: "Facturaci\xf3n y pagos"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "account",
                                                                children: "Problemas de cuenta"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "teacher",
                                                                children: "Informaci\xf3n para profesores"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "partnership",
                                                                children: "Alianzas y colaboraciones"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "feedback",
                                                                children: "Comentarios y sugerencias"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                                value: "other",
                                                                children: "Otro"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                htmlFor: "message",
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Mensaje *"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                                id: "message",
                                                name: "message",
                                                rows: 6,
                                                required: true,
                                                value: formData.message,
                                                onChange: handleInputChange,
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue focus:border-transparent",
                                                placeholder: "Describe tu consulta o mensaje en detalle..."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "submit",
                                            className: "bg-aulazo-blue text-white px-8 py-4 rounded-aulazo hover:bg-blue-600 transition-colors font-semibold flex items-center mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(send/* default */.Z, {
                                                    className: "h-5 w-5 mr-2"
                                                }),
                                                "Enviar Mensaje"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                    className: "text-3xl font-bold text-aulazo-dark mb-4",
                                    children: "Recursos de Ayuda"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                    className: "text-lg text-gray-600",
                                    children: "Encuentra respuestas r\xe1pidas a tus preguntas m\xe1s frecuentes"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: supportTopics.map((topic, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: topic.link,
                                    className: "bg-white rounded-aulazo shadow-aulazo p-6 hover:shadow-aulazo-lg transition-shadow group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                                topic.icon,
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    className: "text-xl font-semibold text-aulazo-dark ml-3 group-hover:text-aulazo-blue transition-colors",
                                                    children: topic.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "text-gray-600",
                                            children: topic.description
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("section", {
                className: "py-20 bg-aulazo-blue",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                        className: "text-3xl font-bold text-white mb-6",
                                        children: "Nuestra Oficina"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(MapPin, {
                                                        className: "h-6 w-6 text-blue-200 mr-4 mt-1"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                className: "text-lg font-semibold text-white mb-1",
                                                                children: "Direcci\xf3n"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "text-blue-100",
                                                                children: [
                                                                    "123 Education Street",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                    "Learning City, LC 12345",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                    "Estados Unidos"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(clock/* default */.Z, {
                                                        className: "h-6 w-6 text-blue-200 mr-4 mt-1"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                className: "text-lg font-semibold text-white mb-1",
                                                                children: "Horarios de Atenci\xf3n"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "text-blue-100",
                                                                children: [
                                                                    "Lunes a Viernes: 9:00 AM - 6:00 PM",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                    "S\xe1bados: 10:00 AM - 2:00 PM",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("br", {}),
                                                                    "Domingos: Cerrado"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-white rounded-aulazo p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                        className: "text-xl font-semibold text-aulazo-dark mb-4",
                                        children: "Tiempo de Respuesta"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-gray-700",
                                                        children: "Correo electr\xf3nico"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-aulazo-blue font-semibold",
                                                        children: "24 horas"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-gray-700",
                                                        children: "Chat en vivo"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-green-600 font-semibold",
                                                        children: "Inmediato"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-gray-700",
                                                        children: "Tel\xe9fono"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-aulazo-blue font-semibold",
                                                        children: "Inmediato"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-gray-700",
                                                        children: "Soporte t\xe9cnico"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: "text-orange-600 font-semibold",
                                                        children: "2-4 horas"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("footer", {
                className: "bg-gray-900 text-white py-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-center space-x-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(AulazoLogo/* default */.Z, {
                                        className: "h-8 w-8 text-aulazo-blue"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "text-2xl font-bold",
                                        children: "aulazo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                className: "text-gray-400",
                                children: "\xa9 2024 Aulazo. Estamos aqu\xed para ayudarte en tu experiencia educativa."
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const pages_Contact = (Contact);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FContact&preferredRegion=&absolutePagePath=private-next-pages%2FContact.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!



// Import the app and document modules.


// Import the userland code.

// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FContact_preferredRegion_absolutePagePath_private_next_pages_2FContact_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(Contact_namespaceObject, 'default'));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'getStaticProps');
const getStaticPaths = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'getStaticPaths');
const getServerSideProps = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'getServerSideProps');
const config = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'config');
const reportWebVitals = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'unstable_getStaticParams');
const unstable_getServerProps = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(Contact_namespaceObject, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new module_compiled.PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/Contact",
        pathname: "/Contact",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: Contact_namespaceObject
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

/***/ 9237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CircleHelp)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleHelp = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CircleHelp", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
            key: "1u773s"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
 //# sourceMappingURL=circle-help.js.map


/***/ }),

/***/ 8742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Clock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
 //# sourceMappingURL=clock.js.map


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

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MessageCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const MessageCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("MessageCircle", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
]);
 //# sourceMappingURL=message-circle.js.map


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

/***/ 594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Send)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Send = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
]);
 //# sourceMappingURL=send.js.map


/***/ }),

/***/ 6286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Users = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
 //# sourceMappingURL=users.js.map


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

/***/ 1600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AulazoLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(748);




const Navbar = ({ showFullNav = true })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
        className: "bg-white/80 backdrop-blur-md shadow-lg shadow-neutral-900/5 sticky top-0 z-50 border-b border-neutral-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center h-16",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: "flex items-center space-x-2 group",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AulazoLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "h-8 w-8 text-primary-500 group-hover:text-primary-600 transition-colors"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors",
                                children: "aulazo"
                            })
                        ]
                    }),
                    showFullNav && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden md:flex items-center space-x-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        className: "text-neutral-600 hover:text-primary-600 transition-colors font-medium",
                                        children: "Inicio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/buscar-profesor",
                                        className: "text-neutral-600 hover:text-primary-600 transition-colors font-medium",
                                        children: "Buscar Profesor"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/sobre-nosotros",
                                        className: "text-neutral-600 hover:text-primary-600 transition-colors font-medium",
                                        children: "Sobre Nosotros"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/contacto",
                                        className: "text-neutral-600 hover:text-primary-600 transition-colors font-medium",
                                        children: "Contacto"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/login",
                                        className: "text-neutral-600 hover:text-primary-600 transition-colors font-medium",
                                        children: "Iniciar Sesi\xf3n"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/registro",
                                        className: "bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105",
                                        children: "Registrarse"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


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
var __webpack_exports__ = __webpack_require__.X(0, [682,147], () => (__webpack_exec__(3523)));
module.exports = __webpack_exports__;

})();