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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Message.module.css */ \"./styles/Message.module.css\");\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_conversationsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/conversationsSlice */ \"./redux/conversationsSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Message = function(param) {\n    var message = param.message, own = param.own, user = param.user, deleteMsg = param.deleteMsg, indexMessage = param.indexMessage;\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        console.log(message);\n    }, [\n        message\n    ]);\n    var localeFunc = function(number, index, totalSec) {\n        // number: the timeago / timein number;\n        // index: the index of array below;\n        // totalSec: total seconds between date to be formatted and today's date;\n        return [\n            [\n                \"agora mesmo\",\n                \"neste momento\"\n            ],\n            [\n                \"%s segundos atras\",\n                \"h\\xe1 %s segundos\"\n            ],\n            [\n                \"1 minuto atras\",\n                \"h\\xe1 um minuto\"\n            ],\n            [\n                \"%s minutos atras\",\n                \"h\\xe1 %s minutos\"\n            ],\n            [\n                \"uma hora atras\",\n                \"h\\xe1 uma hota\"\n            ],\n            [\n                \"%s horas atras\",\n                \"h\\xe1 %s horas\"\n            ],\n            [\n                \"um dia atras\",\n                \"h\\xe1 um dia\"\n            ],\n            [\n                \"%s dias atras\",\n                \"h\\xe1 %s dias\"\n            ],\n            [\n                \"um mes atras\",\n                \"h\\xe1 um m\\xeas\"\n            ],\n            [\n                \"%s meses atras\",\n                \"h\\xe1 %s meses\"\n            ],\n            [\n                \"1 ano atras\",\n                \"h\\xe1 1 ano\"\n            ],\n            [\n                \"%s anos atras\",\n                \"h\\xe1 %s anos\"\n            ]\n        ][index];\n    };\n    (0,timeago_js__WEBPACK_IMPORTED_MODULE_2__.register)('my-locale', localeFunc);\n    var handleDelete = _asyncToGenerator(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(\"deletando\");\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return axios__WEBPACK_IMPORTED_MODULE_7___default()[\"delete\"](\"http://localhost:5000/api/messages/\".concat(message.id));\n                case 4:\n                    res = _ctx.sent;\n                    console.log(res.data);\n                    if (res.data.Status === \"Mensagem apagada\") {\n                        dispatch((0,_redux_conversationsSlice__WEBPACK_IMPORTED_MODULE_6__.deleteMessage)({\n                            index: indexConversa,\n                            indexMessage: indexMessage\n                        }));\n                    }\n                    _ctx.next = 12;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log(_ctx.t0);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                9\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().message),\n        on: true,\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n            lineNumber: 57,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageContainerOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageContainer),\n            __source: {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageTop),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().top),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                    className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().usernameOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().username),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: message === null || message === void 0 ? void 0 : (ref = message.own) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.username\n                                }),\n                                show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().menu),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().iconShow),\n                                            onClick: function() {\n                                                return setShow(!show);\n                                            },\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__.KeyboardArrowDownRounded, {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 37\n                                                },\n                                                __self: _this\n                                            })\n                                        }),\n                                        show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().options),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 37\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().option),\n                                                onClick: function() {\n                                                    return deleteMsg(indexMessage, message.id);\n                                                },\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__.ClearRounded, {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 45\n                                                        },\n                                                        __self: _this\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 45\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Deletar\"\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        (message === null || message === void 0 ? void 0 : message.img) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),\n                            style: {\n                                backgroundColor: own ? \"#13503d\" : \"#252525\"\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().imgContainer),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/img/tabosa.jpg\",\n                                    alt: \"\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageText),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message === null || message === void 0 ? void 0 : message.text\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageBottom),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_2__.format)(message === null || message === void 0 ? void 0 : message.created_at, 'my-locale')\n                })\n            ]\n        })\n    }));\n};\n_s(Message, \"fw0Ar5ORzbx78fw25fw1bI3qWZo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxHQUFaQSxJQUFJLENBQUpBLENBQVksR0FBWkEsT0FBTyxDQUFFcUMsR0FBRywwRUFDWGhCLENBQUc7NEJBQ0FDLFNBQVMsRUFBRWxDLDJFQUFjOzRCQUN6Qm1ELEtBQUssRUFBRSxDQUFDQztnQ0FBQUEsZUFBZSxFQUFFdkMsR0FBRyxHQUFHLENBQVMsV0FBRyxDQUFTOzRCQUFBLENBQUM7Ozs7Ozs7MkdBRXBEb0IsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFbEMsZ0ZBQW1COzs7Ozs7OytHQUM5QkcsbURBQUs7b0NBQ0ZtRCxHQUFHLEVBQUMsQ0FBaUI7b0NBQ3JCQyxHQUFHLEVBQUMsQ0FBRTtvQ0FDTkMsTUFBTSxFQUFDLENBQU07b0NBQ2JDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7Ozs7OzZGQUtoQ0MsQ0FBQzs0QkFBQ3hCLFNBQVMsRUFBRWxDLCtFQUFrQjs7Ozs7OztzQ0FBR1ksT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsT0FBTyxDQUFFZ0QsSUFBSTs7OztxRkFFbkQzQixDQUFHO29CQUFDQyxTQUFTLEVBQUVsQyxpRkFBb0I7Ozs7Ozs7OEJBQUdDLGtEQUFNLENBQUNXLE9BQU8sYUFBUEEsT0FBTyxLQUFQQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxPQUFPLENBQUVrRCxVQUFVLEVBQUUsQ0FBVzs7Ozs7QUFJOUYsQ0FBQztHQTdGS25ELE9BQU87O1FBR1FKLG9EQUFXOzs7S0FIMUJJLE9BQU87QUErRmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lc3NhZ2UuanN4Pzc4Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01lc3NhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge2Zvcm1hdCwgcmVnaXN0ZXJ9IGZyb20gXCJ0aW1lYWdvLmpzXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IENsZWFyUm91bmRlZCwgS2V5Ym9hcmRBcnJvd0Rvd25Sb3VuZGVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZGVsZXRlTWVzc2FnZSB9IGZyb20gXCIuLi9yZWR1eC9jb252ZXJzYXRpb25zU2xpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoe21lc3NhZ2UsIG93biwgdXNlciwgZGVsZXRlTXNnLCBpbmRleE1lc3NhZ2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfSwgW21lc3NhZ2VdKVxyXG4gICAgXHJcbiAgICBjb25zdCBsb2NhbGVGdW5jID0gKG51bWJlciwgaW5kZXgsIHRvdGFsU2VjKSA9PiB7XHJcbiAgICAgICAgLy8gbnVtYmVyOiB0aGUgdGltZWFnbyAvIHRpbWVpbiBudW1iZXI7XHJcbiAgICAgICAgLy8gaW5kZXg6IHRoZSBpbmRleCBvZiBhcnJheSBiZWxvdztcclxuICAgICAgICAvLyB0b3RhbFNlYzogdG90YWwgc2Vjb25kcyBiZXR3ZWVuIGRhdGUgdG8gYmUgZm9ybWF0dGVkIGFuZCB0b2RheSdzIGRhdGU7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgW1wiYWdvcmEgbWVzbW9cIiwgXCJuZXN0ZSBtb21lbnRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBzZWd1bmRvcyBhdHJhc1wiLCBcImjDoSAlcyBzZWd1bmRvc1wiXSxcclxuICAgICAgICAgICAgW1wiMSBtaW51dG8gYXRyYXNcIiwgXCJow6EgdW0gbWludXRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBtaW51dG9zIGF0cmFzXCIsIFwiaMOhICVzIG1pbnV0b3NcIl0sXHJcbiAgICAgICAgICAgIFtcInVtYSBob3JhIGF0cmFzXCIsIFwiaMOhIHVtYSBob3RhXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBob3JhcyBhdHJhc1wiLCBcImjDoSAlcyBob3Jhc1wiXSxcclxuICAgICAgICAgICAgW1widW0gZGlhIGF0cmFzXCIsIFwiaMOhIHVtIGRpYVwiXSxcclxuICAgICAgICAgICAgW1wiJXMgZGlhcyBhdHJhc1wiLCBcImjDoSAlcyBkaWFzXCJdLFxyXG4gICAgICAgICAgICBbXCJ1bSBtZXMgYXRyYXNcIiwgXCJow6EgdW0gbcOqc1wiXSxcclxuICAgICAgICAgICAgW1wiJXMgbWVzZXMgYXRyYXNcIiwgXCJow6EgJXMgbWVzZXNcIl0sXHJcbiAgICAgICAgICAgIFtcIjEgYW5vIGF0cmFzXCIsIFwiaMOhIDEgYW5vXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBhbm9zIGF0cmFzXCIsIFwiaMOhICVzIGFub3NcIl1cclxuICAgICAgICBdW2luZGV4XTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZWdpc3RlcignbXktbG9jYWxlJywgbG9jYWxlRnVuYyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRhbmRvXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL21lc3NhZ2VzLyR7bWVzc2FnZS5pZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5TdGF0dXMgPT09IFwiTWVuc2FnZW0gYXBhZ2FkYVwiKXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lc3NhZ2UoeyBpbmRleDogaW5kZXhDb252ZXJzYSwgaW5kZXhNZXNzYWdlIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvd24gPyBzdHlsZXMubWVzc2FnZU93biA6IHN0eWxlcy5tZXNzYWdlfSBvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e293biA/IHN0eWxlcy5tZXNzYWdlQ29udGFpbmVyT3duIDogc3R5bGVzLm1lc3NhZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VUb3B9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e293biA/IHN0eWxlcy51c2VybmFtZU93biA6IHN0eWxlcy51c2VybmFtZX0+e21lc3NhZ2U/Lm93bj8udXNlcj8udXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvblNob3d9IG9uQ2xpY2s9eygpPT5zZXRTaG93KCFzaG93KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93blJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSBvbkNsaWNrPXsoKT0+ZGVsZXRlTXNnKGluZGV4TWVzc2FnZSwgbWVzc2FnZS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhclJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPy5pbWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogb3duID8gXCIjMTM1MDNkXCIgOiBcIiMyNTI1MjVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvdGFib3NhLmpwZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZVRleHR9PnttZXNzYWdlPy50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlQm90dG9tfT57Zm9ybWF0KG1lc3NhZ2U/LmNyZWF0ZWRfYXQsICdteS1sb2NhbGUnKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJmb3JtYXQiLCJyZWdpc3RlciIsIkltYWdlIiwiQ2xlYXJSb3VuZGVkIiwiS2V5Ym9hcmRBcnJvd0Rvd25Sb3VuZGVkIiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsImRlbGV0ZU1lc3NhZ2UiLCJheGlvcyIsInVzZUVmZmVjdCIsIk1lc3NhZ2UiLCJtZXNzYWdlIiwib3duIiwidXNlciIsImRlbGV0ZU1zZyIsImluZGV4TWVzc2FnZSIsInNob3ciLCJzZXRTaG93IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwibG9jYWxlRnVuYyIsIm51bWJlciIsImluZGV4IiwidG90YWxTZWMiLCJoYW5kbGVEZWxldGUiLCJyZXMiLCJkZWxldGUiLCJpZCIsImRhdGEiLCJTdGF0dXMiLCJpbmRleENvbnZlcnNhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVzc2FnZU93biIsIm9uIiwibWVzc2FnZUNvbnRhaW5lck93biIsIm1lc3NhZ2VDb250YWluZXIiLCJtZXNzYWdlVG9wIiwidG9wIiwic3BhbiIsInVzZXJuYW1lT3duIiwidXNlcm5hbWUiLCJtZW51IiwiaWNvblNob3ciLCJvbkNsaWNrIiwib3B0aW9ucyIsIm9wdGlvbiIsImltZyIsIndyYXBwZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImltZ0NvbnRhaW5lciIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInAiLCJtZXNzYWdlVGV4dCIsInRleHQiLCJtZXNzYWdlQm90dG9tIiwiY3JlYXRlZF9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Message.jsx\n");

/***/ })

});