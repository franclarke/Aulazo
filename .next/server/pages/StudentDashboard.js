"use strict";
(() => {
var exports = {};
exports.id = 873;
exports.ids = [873,660];
exports.modules = {

/***/ 1323:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 2940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FStudentDashboard_preferredRegion_absolutePagePath_private_next_pages_2FStudentDashboard_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/StudentDashboard.tsx
var StudentDashboard_namespaceObject = {};
__webpack_require__.r(StudentDashboard_namespaceObject);
__webpack_require__.d(StudentDashboard_namespaceObject, {
  "default": () => (pages_StudentDashboard)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(5030);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(9934);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
var calendar = __webpack_require__(2003);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(8742);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(3592);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/credit-card.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CreditCard = (0,createLucideIcon/* default */.Z)("CreditCard", [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
]);
 //# sourceMappingURL=credit-card.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-help.js
var circle_help = __webpack_require__(9237);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/video.js
var video = __webpack_require__(2752);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var icons_star = __webpack_require__(1773);
// EXTERNAL MODULE: ./src/components/AulazoLogo.tsx
var AulazoLogo = __webpack_require__(748);
;// CONCATENATED MODULE: ./src/pages/StudentDashboard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StudentDashboard = ()=>{
    const upcomingClasses = [
        {
            id: 1,
            subject: 'Física',
            teacher: 'Luis Rodríguez',
            date: '25 abr. 2024',
            time: '10:00',
            status: 'confirmada',
            image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
            id: 2,
            subject: 'Matemáticas',
            teacher: 'Marta Pérez',
            date: '27 abr. 2024',
            time: '14:00',
            status: 'confirmada',
            image: 'https://images.pexels.com/photos/3771100/pexels-photo-3771100.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
            id: 3,
            subject: 'Historia',
            teacher: 'Carlos Gómez',
            date: '27 abr. 2024',
            time: '9:00',
            status: 'pendiente',
            image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
            id: 4,
            subject: 'Inglés',
            teacher: 'Emma Wilson',
            date: '27 abr. 2024',
            time: '11:00',
            status: 'confirmada',
            image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
            id: 5,
            subject: 'Programación',
            teacher: 'David Chen',
            date: '27 abr. 2024',
            time: '11:00',
            status: 'pendiente',
            image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
    ];
    const recentClasses = [
        {
            subject: 'Matemáticas',
            rating: 5,
            date: '20 abr. 2024'
        },
        {
            subject: 'Física',
            rating: 4,
            date: '18 abr. 2024'
        },
        {
            subject: 'Química',
            rating: 5,
            date: '15 abr. 2024'
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen bg-aulazo-gray",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "bg-aulazo-blue text-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(AulazoLogo/* default */.Z, {
                                        className: "h-8 w-8 text-white"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "text-2xl font-bold",
                                        children: "aulazo"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "relative p-2 rounded-full hover:bg-blue-600 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(bell/* default */.Z, {
                                                className: "h-6 w-6"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",
                                                children: "3"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-2 cursor-pointer hover:bg-blue-600 rounded-aulazo px-3 py-2 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                src: "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=50",
                                                alt: "Perfil",
                                                className: "w-8 h-8 rounded-full object-cover"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "font-medium",
                                                children: "Ana L\xf3pez"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(chevron_down/* default */.Z, {
                                                className: "h-4 w-4"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "w-64",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
                                className: "bg-white rounded-aulazo shadow-aulazo p-4 sticky top-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            className: "flex items-center space-x-3 px-4 py-3 text-aulazo-blue bg-blue-50 rounded-aulazo font-medium",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(calendar/* default */.Z, {
                                                    className: "h-5 w-5"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    children: "Panel Principal"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            className: "flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(AulazoLogo/* default */.Z, {
                                                    className: "h-5 w-5"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    children: "Mis Clases"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            className: "flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(clock/* default */.Z, {
                                                    className: "h-5 w-5"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    children: "Horarios"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            className: "flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(CreditCard, {
                                                    className: "h-5 w-5"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    children: "Pagos"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            className: "flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-aulazo-blue hover:bg-blue-50 rounded-aulazo transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(circle_help/* default */.Z, {
                                                    className: "h-5 w-5"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    children: "Soporte"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h1", {
                                            className: "text-3xl font-bold text-aulazo-dark mb-2",
                                            children: "Panel de estudiante"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            className: "text-gray-600",
                                            children: "Gestiona tus clases y sigue tu progreso de aprendizaje"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-1 xl:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "xl:col-span-2 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bg-white rounded-aulazo shadow-aulazo p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                                            className: "text-xl font-bold text-aulazo-dark mb-4",
                                                            children: "Pr\xf3ximas clases"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "space-y-4",
                                                            children: upcomingClasses.map((clase)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between p-4 border border-gray-200 rounded-aulazo hover:shadow-sm transition-shadow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center space-x-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                                    src: clase.image,
                                                                                    alt: clase.teacher,
                                                                                    className: "w-12 h-12 rounded-full object-cover"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            className: "font-semibold text-aulazo-dark",
                                                                                            children: clase.subject
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                                            className: "text-sm text-gray-600",
                                                                                            children: clase.teacher
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "text-sm font-medium text-aulazo-dark",
                                                                                    children: [
                                                                                        clase.date,
                                                                                        " ",
                                                                                        clase.time
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: `inline-block px-2 py-1 text-xs rounded-full font-medium ${clase.status === 'confirmada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`,
                                                                                    children: clase.status === 'confirmada' ? 'Confirmada' : 'Pendiente'
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                            className: "bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors text-sm font-medium",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(video/* default */.Z, {
                                                                                    className: "h-4 w-4 inline mr-1"
                                                                                }),
                                                                                "Unirse"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, clase.id))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bg-white rounded-aulazo shadow-aulazo p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                                            className: "text-xl font-bold text-aulazo-dark mb-4",
                                                            children: "Actividad reciente"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "space-y-3",
                                                            children: recentClasses.map((clase, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center space-x-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                    className: "w-2 h-2 bg-aulazo-blue rounded-full"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                    className: "text-gray-800",
                                                                                    children: [
                                                                                        "Clase de ",
                                                                                        clase.subject,
                                                                                        " completada"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                    className: "flex space-x-1",
                                                                                    children: [
                                                                                        1,
                                                                                        2,
                                                                                        3,
                                                                                        4,
                                                                                        5
                                                                                    ].map((star)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(icons_star/* default */.Z, {
                                                                                            className: `h-4 w-4 ${star <= clase.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`
                                                                                        }, star))
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: clase.date
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, index))
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bg-white rounded-aulazo shadow-aulazo p-6 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            className: "text-lg font-semibold text-aulazo-dark mb-4",
                                                            children: "Progreso"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "relative inline-flex items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                    className: "w-32 h-32 transform -rotate-90",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("circle", {
                                                                            cx: "64",
                                                                            cy: "64",
                                                                            r: "56",
                                                                            stroke: "#E5E7EB",
                                                                            strokeWidth: "8",
                                                                            fill: "none"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("circle", {
                                                                            cx: "64",
                                                                            cy: "64",
                                                                            r: "56",
                                                                            stroke: "#2A7AE4",
                                                                            strokeWidth: "8",
                                                                            fill: "none",
                                                                            strokeDasharray: `${75 * 3.51} 351.86`,
                                                                            strokeLinecap: "round"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                        className: "text-3xl font-bold text-aulazo-blue",
                                                                        children: "75%"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            className: "text-gray-600 mt-4",
                                                            children: "Clases completadas este mes"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bg-white rounded-aulazo shadow-aulazo p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            className: "text-lg font-semibold text-aulazo-dark mb-4",
                                                            children: "Accesos r\xe1pidos"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-aulazo-blue rounded-aulazo hover:bg-blue-100 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(AulazoLogo/* default */.Z, {
                                                                            className: "h-5 w-5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "font-medium",
                                                                            children: "Mis Clases"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "w-full flex items-center space-x-3 px-4 py-3 bg-green-50 text-green-700 rounded-aulazo hover:bg-green-100 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(CreditCard, {
                                                                            className: "h-5 w-5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "font-medium",
                                                                            children: "Pagos"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "w-full flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-aulazo hover:bg-purple-100 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(circle_help/* default */.Z, {
                                                                            className: "h-5 w-5"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "font-medium",
                                                                            children: "Soporte"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "bg-white rounded-aulazo shadow-aulazo p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            className: "text-lg font-semibold text-aulazo-dark mb-4",
                                                            children: "Estad\xedsticas"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Total de clases"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "font-semibold text-aulazo-dark",
                                                                            children: "24"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Horas aprendidas"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "font-semibold text-aulazo-dark",
                                                                            children: "36h"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Profesores favoritos"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "font-semibold text-aulazo-dark",
                                                                            children: "5"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "text-gray-600",
                                                                            children: "Calificaci\xf3n promedio"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center space-x-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(icons_star/* default */.Z, {
                                                                                    className: "h-4 w-4 fill-yellow-400 text-yellow-400"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: "font-semibold text-aulazo-dark",
                                                                                    children: "4.8"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
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
        ]
    });
};
/* harmony default export */ const pages_StudentDashboard = (StudentDashboard);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FStudentDashboard&preferredRegion=&absolutePagePath=private-next-pages%2FStudentDashboard.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!



// Import the app and document modules.


// Import the userland code.

// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FStudentDashboard_preferredRegion_absolutePagePath_private_next_pages_2FStudentDashboard_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'default'));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'getStaticProps');
const getStaticPaths = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'getStaticPaths');
const getServerSideProps = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'getServerSideProps');
const config = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'config');
const reportWebVitals = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'unstable_getStaticParams');
const unstable_getServerProps = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(StudentDashboard_namespaceObject, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new module_compiled.PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/StudentDashboard",
        pathname: "/StudentDashboard",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: StudentDashboard_namespaceObject
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

/***/ 5030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Bell)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Bell = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Bell", [
    [
        "path",
        {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }
    ],
    [
        "path",
        {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi"
        }
    ]
]);
 //# sourceMappingURL=bell.js.map


/***/ }),

/***/ 2003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Calendar = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Calendar", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
]);
 //# sourceMappingURL=calendar.js.map


/***/ }),

/***/ 9934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
 //# sourceMappingURL=chevron-down.js.map


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

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Star)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Star = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
]);
 //# sourceMappingURL=star.js.map


/***/ }),

/***/ 2752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3592);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Video = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Video", [
    [
        "path",
        {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }
    ]
]);
 //# sourceMappingURL=video.js.map


/***/ }),

/***/ 8141:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return App;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _jsxruntime = __webpack_require__(997);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6689));
const _utils = __webpack_require__(5782);
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps(param) {
    let { Component, ctx } = param;
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    render() {
        const { Component, pageProps } = this.props;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...pageProps
        });
    }
}
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map


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

/***/ 3593:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

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
var __webpack_exports__ = __webpack_require__.X(0, [682], () => (__webpack_exec__(2940)));
module.exports = __webpack_exports__;

})();