"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Message.jsx":
/*!********************************!*\
  !*** ./components/Message.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Message.module.css */ \"./styles/Message.module.css\");\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_conversationsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/conversationsSlice */ \"./redux/conversationsSlice.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Message = function(param) {\n    var message = param.message, own = param.own, user = param.user;\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    var localeFunc = function(number, index, totalSec) {\n        // number: the timeago / timein number;\n        // index: the index of array below;\n        // totalSec: total seconds between date to be formatted and today's date;\n        return [\n            [\n                \"agora mesmo\",\n                \"neste momento\"\n            ],\n            [\n                \"%s segundos atras\",\n                \"h\\xe1 %s segundos\"\n            ],\n            [\n                \"1 minuto atras\",\n                \"h\\xe1 um minuto\"\n            ],\n            [\n                \"%s minutos atras\",\n                \"h\\xe1 %s minutos\"\n            ],\n            [\n                \"uma hora atras\",\n                \"h\\xe1 uma hota\"\n            ],\n            [\n                \"%s horas atras\",\n                \"h\\xe1 %s horas\"\n            ],\n            [\n                \"um dia atras\",\n                \"h\\xe1 um dia\"\n            ],\n            [\n                \"%s dias atras\",\n                \"h\\xe1 %s dias\"\n            ],\n            [\n                \"um mes atras\",\n                \"h\\xe1 um m\\xeas\"\n            ],\n            [\n                \"%s meses atras\",\n                \"h\\xe1 %s meses\"\n            ],\n            [\n                \"1 ano atras\",\n                \"h\\xe1 1 ano\"\n            ],\n            [\n                \"%s anos atras\",\n                \"h\\xe1 %s anos\"\n            ]\n        ][index];\n    };\n    (0,timeago_js__WEBPACK_IMPORTED_MODULE_2__.register)('my-locale', localeFunc);\n    var handleDelete = _asyncToGenerator(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    try {\n                    } catch (err) {\n                    }\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().message),\n        on: true,\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n            lineNumber: 44,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageContainerOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageContainer),\n            __source: {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageTop),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().top),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                    className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().usernameOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().username),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: message === null || message === void 0 ? void 0 : (ref = message.own) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.username\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.KeyboardArrowDownRounded, {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 29\n                                            },\n                                            __self: _this\n                                        }),\n                                        show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().options),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().option),\n                                                onClick: handleDelete,\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 37\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.ClearRounded, {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 41\n                                                        },\n                                                        __self: _this\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 41\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Deletar\"\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        (message === null || message === void 0 ? void 0 : message.img) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),\n                            style: {\n                                backgroundColor: own ? \"#13503d\" : \"#252525\"\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgContainer),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/img/tabosa.jpg\",\n                                    alt: \"\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageText),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message === null || message === void 0 ? void 0 : message.text\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageBottom),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_2__.format)(message === null || message === void 0 ? void 0 : message.created_at, 'my-locale')\n                })\n            ]\n        })\n    }));\n};\n_s(Message, \"LFbQ4QRLb3d0XcxyxCjL7bfUZDc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7R0E3RUt6QyxPQUFPOztRQUdRRixvREFBVzs7O0tBSDFCRSxPQUFPO0FBK0ViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzeD83OGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NZXNzYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtmb3JtYXQsIHJlZ2lzdGVyfSBmcm9tIFwidGltZWFnby5qc1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBDbGVhclJvdW5kZWQsIEtleWJvYXJkQXJyb3dEb3duUm91bmRlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGRlbGV0ZU1lc3NhZ2UgfSBmcm9tIFwiLi4vcmVkdXgvY29udmVyc2F0aW9uc1NsaWNlXCI7XHJcblxyXG5jb25zdCBNZXNzYWdlID0gKHttZXNzYWdlLCBvd24sIHVzZXJ9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2NhbGVGdW5jID0gKG51bWJlciwgaW5kZXgsIHRvdGFsU2VjKSA9PiB7XHJcbiAgICAgICAgLy8gbnVtYmVyOiB0aGUgdGltZWFnbyAvIHRpbWVpbiBudW1iZXI7XHJcbiAgICAgICAgLy8gaW5kZXg6IHRoZSBpbmRleCBvZiBhcnJheSBiZWxvdztcclxuICAgICAgICAvLyB0b3RhbFNlYzogdG90YWwgc2Vjb25kcyBiZXR3ZWVuIGRhdGUgdG8gYmUgZm9ybWF0dGVkIGFuZCB0b2RheSdzIGRhdGU7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgW1wiYWdvcmEgbWVzbW9cIiwgXCJuZXN0ZSBtb21lbnRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBzZWd1bmRvcyBhdHJhc1wiLCBcImjDoSAlcyBzZWd1bmRvc1wiXSxcclxuICAgICAgICAgICAgW1wiMSBtaW51dG8gYXRyYXNcIiwgXCJow6EgdW0gbWludXRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBtaW51dG9zIGF0cmFzXCIsIFwiaMOhICVzIG1pbnV0b3NcIl0sXHJcbiAgICAgICAgICAgIFtcInVtYSBob3JhIGF0cmFzXCIsIFwiaMOhIHVtYSBob3RhXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBob3JhcyBhdHJhc1wiLCBcImjDoSAlcyBob3Jhc1wiXSxcclxuICAgICAgICAgICAgW1widW0gZGlhIGF0cmFzXCIsIFwiaMOhIHVtIGRpYVwiXSxcclxuICAgICAgICAgICAgW1wiJXMgZGlhcyBhdHJhc1wiLCBcImjDoSAlcyBkaWFzXCJdLFxyXG4gICAgICAgICAgICBbXCJ1bSBtZXMgYXRyYXNcIiwgXCJow6EgdW0gbcOqc1wiXSxcclxuICAgICAgICAgICAgW1wiJXMgbWVzZXMgYXRyYXNcIiwgXCJow6EgJXMgbWVzZXNcIl0sXHJcbiAgICAgICAgICAgIFtcIjEgYW5vIGF0cmFzXCIsIFwiaMOhIDEgYW5vXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBhbm9zIGF0cmFzXCIsIFwiaMOhICVzIGFub3NcIl1cclxuICAgICAgICBdW2luZGV4XTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZWdpc3RlcignbXktbG9jYWxlJywgbG9jYWxlRnVuYyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaChlcnIpe31cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e293biA/IHN0eWxlcy5tZXNzYWdlT3duIDogc3R5bGVzLm1lc3NhZ2V9IG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3duID8gc3R5bGVzLm1lc3NhZ2VDb250YWluZXJPd24gOiBzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZVRvcH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17b3duID8gc3R5bGVzLnVzZXJuYW1lT3duIDogc3R5bGVzLnVzZXJuYW1lfT57bWVzc2FnZT8ub3duPy51c2VyPy51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0Rvd25Sb3VuZGVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSBvbkNsaWNrPXtoYW5kbGVEZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsZWFyUm91bmRlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsZXRhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT8uaW1nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG93biA/IFwiIzEzNTAzZFwiIDogXCIjMjUyNTI1XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3RhYm9zYS5qcGdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VUZXh0fT57bWVzc2FnZT8udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUJvdHRvbX0+e2Zvcm1hdChtZXNzYWdlPy5jcmVhdGVkX2F0LCAnbXktbG9jYWxlJyl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwibmFtZXMiOlsic3R5bGVzIiwiZm9ybWF0IiwicmVnaXN0ZXIiLCJJbWFnZSIsIkNsZWFyUm91bmRlZCIsIktleWJvYXJkQXJyb3dEb3duUm91bmRlZCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJkZWxldGVNZXNzYWdlIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJvd24iLCJ1c2VyIiwic2hvdyIsInNldFNob3ciLCJkaXNwYXRjaCIsImxvY2FsZUZ1bmMiLCJudW1iZXIiLCJpbmRleCIsInRvdGFsU2VjIiwiaGFuZGxlRGVsZXRlIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVzc2FnZU93biIsIm9uIiwibWVzc2FnZUNvbnRhaW5lck93biIsIm1lc3NhZ2VDb250YWluZXIiLCJtZXNzYWdlVG9wIiwidG9wIiwic3BhbiIsInVzZXJuYW1lT3duIiwidXNlcm5hbWUiLCJtZW51Iiwib3B0aW9ucyIsIm9wdGlvbiIsIm9uQ2xpY2siLCJpbWciLCJ3cmFwcGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWdDb250YWluZXIiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwIiwibWVzc2FnZVRleHQiLCJ0ZXh0IiwibWVzc2FnZUJvdHRvbSIsImNyZWF0ZWRfYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Message.jsx\n");

/***/ })

});