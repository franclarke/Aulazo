exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 6488:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7733));


/***/ }),

/***/ 9661:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6114, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2639, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9727, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9671, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1868, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4759, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2816, 23));


/***/ }),

/***/ 5942:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9404, 23));


/***/ }),

/***/ 8517:
/***/ (() => {



/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 7733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8819);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7266);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Error({ error, reset }) {
    process.env.__NEXT_PRIVATE_MINIMIZE_MACRO_FALSE && (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.error('Error capturado:', error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex min-h-screen flex-col items-center justify-center space-y-4 p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center max-w-md",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                    className: "text-2xl font-bold text-red-600 mb-4",
                    children: "\xa1Algo sali\xf3 mal!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "text-gray-600 mb-6",
                    children: "Ha ocurrido un error inesperado. Por favor, int\xe9ntalo de nuevo."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    onClick: reset,
                    className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                    children: "Intentar de nuevo"
                })
            ]
        })
    });
}


/***/ }),

/***/ 2881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7266);
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


const Icon = /*#__PURE__*/ (0,react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react.createElement)(tag, attrs)),
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
    const Component = /*#__PURE__*/ (0,react.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react.createElement)(Icon, {
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

/***/ 1216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EyeOff)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 2714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Lock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 5932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Mail)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _client_link__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9404);
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_link__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=link.js.map

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8819);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7266);
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

/***/ 5570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1851);


const proxy = await (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\franc\Documents\Proyectos\Aulazo\app\error.tsx`)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 6877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_weight_300_400_500_600_700_800_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(570);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_weight_300_400_500_600_700_800_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_weight_300_400_500_600_700_800_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: {
        default: 'Aulazo Platform - Plataforma Educativa Online',
        template: '%s | Aulazo Platform'
    },
    description: 'Plataforma educativa moderna para conectar estudiantes y profesores',
    keywords: [
        'educación',
        'online',
        'clases',
        'profesores',
        'estudiantes'
    ],
    authors: [
        {
            name: 'Aulazo Team'
        }
    ],
    creator: 'Aulazo Platform',
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg'
    },
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://aulazo.com',
        title: 'Aulazo Platform - Plataforma Educativa Online',
        description: 'Plataforma educativa moderna para conectar estudiantes y profesores',
        siteName: 'Aulazo Platform'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aulazo Platform - Plataforma Educativa Online',
        description: 'Plataforma educativa moderna para conectar estudiantes y profesores'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "es",
        className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_weight_300_400_500_600_700_800_variable_font_inter_display_swap_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().variable),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                        rel: "icon",
                        type: "image/svg+xml",
                        href: "/favicon.svg"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                        rel: "alternate icon",
                        href: "/favicon.svg"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                        rel: "mask-icon",
                        href: "/favicon.svg",
                        color: "#a855f7"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("body", {
                className: "min-h-screen bg-background font-sans antialiased",
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 2831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex min-h-screen items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center space-y-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Cargando..."
                })
            ]
        })
    });
}


/***/ }),

/***/ 2134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9351);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5580);


function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col items-center justify-center space-y-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: "text-6xl font-bold text-primary",
                        children: "404"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                        className: "mt-4 text-2xl font-semibold",
                        children: "P\xe1gina no encontrada"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "mt-2 text-muted-foreground",
                        children: "La p\xe1gina que buscas no existe o ha sido movida."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/",
                className: "rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90",
                children: "Volver al inicio"
            })
        ]
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;