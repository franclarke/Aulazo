"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687,660];
exports.modules = {

/***/ 9207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FTeacherSearch_preferredRegion_absolutePagePath_private_next_pages_2FTeacherSearch_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./src/pages/TeacherSearch.tsx
var TeacherSearch_namespaceObject = {};
__webpack_require__.r(TeacherSearch_namespaceObject);
__webpack_require__.d(TeacherSearch_namespaceObject, {
  "default": () => (pages_TeacherSearch)
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(3592);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Search = (0,createLucideIcon/* default */.Z)("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
 //# sourceMappingURL=search.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/filter.js
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Filter = (0,createLucideIcon/* default */.Z)("Filter", [
    [
        "polygon",
        {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }
    ]
]);
 //# sourceMappingURL=filter.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var icons_star = __webpack_require__(1773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(8742);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/dollar-sign.js
var dollar_sign = __webpack_require__(1036);
// EXTERNAL MODULE: ./src/components/Navbar.tsx
var Navbar = __webpack_require__(1600);
;// CONCATENATED MODULE: ./src/pages/TeacherSearch.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const TeacherSearch = ()=>{
    const [searchTerm, setSearchTerm] = (0,external_react_.useState)('');
    const [selectedSubject, setSelectedSubject] = (0,external_react_.useState)('all');
    const [priceRange, setPriceRange] = (0,external_react_.useState)([
        0,
        100
    ]);
    const teachers = [
        {
            id: 1,
            name: 'María González',
            subject: 'Matemáticas',
            rating: 4.9,
            reviews: 127,
            price: 25,
            experience: '8 años',
            image: 'https://images.pexels.com/photos/3771100/pexels-photo-3771100.jpeg?auto=compress&cs=tinysrgb&w=300',
            specialties: [
                'Álgebra',
                'Cálculo',
                'Geometría'
            ],
            availability: 'Disponible ahora'
        },
        {
            id: 2,
            name: 'Carlos Rodríguez',
            subject: 'Física',
            rating: 4.8,
            reviews: 89,
            price: 28,
            experience: '6 años',
            image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
            specialties: [
                'Mecánica',
                'Termodinámica',
                'Electromagnetismo'
            ],
            availability: 'Disponible en 2h'
        },
        {
            id: 3,
            name: 'Ana Patricia López',
            subject: 'Química',
            rating: 4.9,
            reviews: 156,
            price: 22,
            experience: '10 años',
            image: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=300',
            specialties: [
                'Química Orgánica',
                'Bioquímica',
                'Análisis'
            ],
            availability: 'Disponible ahora'
        },
        {
            id: 4,
            name: 'David Chen',
            subject: 'Programación',
            rating: 4.7,
            reviews: 203,
            price: 35,
            experience: '5 años',
            image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=300',
            specialties: [
                'JavaScript',
                'Python',
                'React'
            ],
            availability: 'Disponible mañana'
        },
        {
            id: 5,
            name: 'Sophie Martin',
            subject: 'Francés',
            rating: 4.8,
            reviews: 92,
            price: 20,
            experience: '7 años',
            image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300',
            specialties: [
                'Conversación',
                'Gramática',
                'DELF'
            ],
            availability: 'Disponible ahora'
        },
        {
            id: 6,
            name: 'Roberto Silva',
            subject: 'Historia',
            rating: 4.6,
            reviews: 74,
            price: 18,
            experience: '12 años',
            image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
            specialties: [
                'Historia Universal',
                'Historia de América',
                'Arqueología'
            ],
            availability: 'Disponible en 1h'
        }
    ];
    const subjects = [
        'Todas las materias',
        'Matemáticas',
        'Física',
        'Química',
        'Programación',
        'Idiomas',
        'Historia',
        'Literatura',
        'Biología'
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen bg-aulazo-gray",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h1", {
                                className: "text-3xl font-bold text-aulazo-dark mb-2",
                                children: "Encuentra tu profesor ideal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                className: "text-gray-600",
                                children: "Descubre profesores verificados y comienza a aprender hoy mismo"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "bg-white rounded-aulazo shadow-aulazo p-6 mb-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col md:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(Search, {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "text",
                                            placeholder: "Buscar por materia, profesor o habilidad...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("select", {
                                    value: selectedSubject,
                                    onChange: (e)=>setSelectedSubject(e.target.value),
                                    className: "px-4 py-3 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue",
                                    children: subjects.map((subject, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                            value: index === 0 ? 'all' : subject.toLowerCase(),
                                            children: subject
                                        }, index))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                    className: "bg-aulazo-blue text-white px-8 py-3 rounded-aulazo hover:bg-blue-600 transition-colors font-medium",
                                    children: "Buscar"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "w-80",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-white rounded-aulazo shadow-aulazo p-6 sticky top-24",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            className: "text-lg font-semibold text-aulazo-dark mb-4 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(Filter, {
                                                    className: "h-5 w-5 mr-2"
                                                }),
                                                "Filtros"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Precio por hora"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "range",
                                                            min: "0",
                                                            max: "100",
                                                            value: priceRange[1],
                                                            onChange: (e)=>setPriceRange([
                                                                    priceRange[0],
                                                                    parseInt(e.target.value)
                                                                ]),
                                                            className: "w-full"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex justify-between text-sm text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    children: "$0"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        "$",
                                                                        priceRange[1]
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Calificaci\xf3n m\xednima"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        4.5,
                                                        4.0,
                                                        3.5
                                                    ].map((rating)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                    type: "radio",
                                                                    name: "rating",
                                                                    className: "mr-2"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center",
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
                                                                                    className: `h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`
                                                                                }, star))
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "ml-2 text-sm text-gray-600",
                                                                            children: [
                                                                                rating,
                                                                                "+"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, rating))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Disponibilidad"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        'Disponible ahora',
                                                        'Hoy',
                                                        'Esta semana'
                                                    ].map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                    type: "checkbox",
                                                                    className: "mr-2"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "text-sm text-gray-700",
                                                                    children: option
                                                                })
                                                            ]
                                                        }, option))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-gray-600",
                                                children: [
                                                    teachers.length,
                                                    " profesores encontrados"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                className: "px-4 py-2 border border-gray-300 rounded-aulazo focus:outline-none focus:ring-2 focus:ring-aulazo-blue",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                        children: "M\xe1s relevantes"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                        children: "Mejor calificados"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                        children: "Precio: menor a mayor"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("option", {
                                                        children: "Precio: mayor a menor"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                        children: teachers.map((teacher)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "bg-white rounded-aulazo shadow-aulazo p-6 hover:shadow-aulazo-lg transition-shadow",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-start space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                            src: teacher.image,
                                                            alt: teacher.name,
                                                            className: "w-20 h-20 rounded-full object-cover"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-start justify-between mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                    className: "text-lg font-semibold text-aulazo-dark",
                                                                                    children: teacher.name
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                                    className: "text-aulazo-blue font-medium",
                                                                                    children: teacher.subject
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "text-right",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "flex items-center space-x-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(icons_star/* default */.Z, {
                                                                                        className: "h-4 w-4 fill-yellow-400 text-yellow-400"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "font-medium",
                                                                                        children: teacher.rating
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "text-gray-500 text-sm",
                                                                                        children: [
                                                                                            "(",
                                                                                            teacher.reviews,
                                                                                            ")"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center space-x-4 text-sm text-gray-600 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(clock/* default */.Z, {
                                                                                    className: "h-4 w-4 mr-1"
                                                                                }),
                                                                                teacher.experience
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)(dollar_sign/* default */.Z, {
                                                                                    className: "h-4 w-4 mr-1"
                                                                                }),
                                                                                "$",
                                                                                teacher.price,
                                                                                "/hora"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "flex flex-wrap gap-2 mb-3",
                                                                    children: teacher.specialties.map((specialty, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "px-2 py-1 bg-blue-50 text-aulazo-blue text-xs rounded-full",
                                                                            children: specialty
                                                                        }, index))
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: `text-sm font-medium ${teacher.availability.includes('ahora') ? 'text-green-600' : 'text-orange-600'}`,
                                                                            children: teacher.availability
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                                            className: "bg-aulazo-blue text-white px-4 py-2 rounded-aulazo hover:bg-blue-600 transition-colors font-medium",
                                                                            children: "Reservar clase"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, teacher.id))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "text-center mt-8",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                            className: "bg-white text-aulazo-blue border-2 border-aulazo-blue px-8 py-3 rounded-aulazo hover:bg-aulazo-blue hover:text-white transition-colors font-medium",
                                            children: "Cargar m\xe1s profesores"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages_TeacherSearch = (TeacherSearch);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FTeacherSearch&preferredRegion=&absolutePagePath=private-next-pages%2FTeacherSearch.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!



// Import the app and document modules.


// Import the userland code.

// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FTeacherSearch_preferredRegion_absolutePagePath_private_next_pages_2FTeacherSearch_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'default'));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'getStaticProps');
const getStaticPaths = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'getStaticPaths');
const getServerSideProps = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'getServerSideProps');
const config = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'config');
const reportWebVitals = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'unstable_getStaticParams');
const unstable_getServerProps = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(TeacherSearch_namespaceObject, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new module_compiled.PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/TeacherSearch",
        pathname: "/TeacherSearch",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    components: {
        // default export might not exist when optimized for data only
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: TeacherSearch_namespaceObject
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
var __webpack_exports__ = __webpack_require__.X(0, [682,147], () => (__webpack_exec__(9207)));
module.exports = __webpack_exports__;

})();