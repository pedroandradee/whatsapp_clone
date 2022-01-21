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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Message.module.css */ \"./styles/Message.module.css\");\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_conversationsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/conversationsSlice */ \"./redux/conversationsSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Message = function(param) {\n    var message = param.message, own = param.own, user = param.user, indexConversa = param.indexConversa, indexMessage = param.indexMessage;\n    var ref, ref1;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    var localeFunc = function(number, index, totalSec) {\n        // number: the timeago / timein number;\n        // index: the index of array below;\n        // totalSec: total seconds between date to be formatted and today's date;\n        return [\n            [\n                \"agora mesmo\",\n                \"neste momento\"\n            ],\n            [\n                \"%s segundos atras\",\n                \"h\\xe1 %s segundos\"\n            ],\n            [\n                \"1 minuto atras\",\n                \"h\\xe1 um minuto\"\n            ],\n            [\n                \"%s minutos atras\",\n                \"h\\xe1 %s minutos\"\n            ],\n            [\n                \"uma hora atras\",\n                \"h\\xe1 uma hota\"\n            ],\n            [\n                \"%s horas atras\",\n                \"h\\xe1 %s horas\"\n            ],\n            [\n                \"um dia atras\",\n                \"h\\xe1 um dia\"\n            ],\n            [\n                \"%s dias atras\",\n                \"h\\xe1 %s dias\"\n            ],\n            [\n                \"um mes atras\",\n                \"h\\xe1 um m\\xeas\"\n            ],\n            [\n                \"%s meses atras\",\n                \"h\\xe1 %s meses\"\n            ],\n            [\n                \"1 ano atras\",\n                \"h\\xe1 1 ano\"\n            ],\n            [\n                \"%s anos atras\",\n                \"h\\xe1 %s anos\"\n            ]\n        ][index];\n    };\n    (0,timeago_js__WEBPACK_IMPORTED_MODULE_2__.register)('my-locale', localeFunc);\n    var handleDelete = _asyncToGenerator(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(\"deletando\");\n                    try {\n                        /*const res = await axios.delete(`http://localhost:5000/api/messages/${message.id}`);\r\n            console.log(res.data);\r\n            if(res.data.Status === \"Mensagem apagada\"){\r\n                dispatch(deleteMessage({ index: indexConversa, indexMessage }));\r\n            }*/ console.log(message);\n                    } catch (err) {\n                        console.log(err);\n                    }\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().message),\n        on: true,\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageContainerOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageContainer),\n            __source: {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageTop),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().top),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                    className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().usernameOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().username),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: message === null || message === void 0 ? void 0 : (ref = message.own) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.username\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().menu),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().iconShow),\n                                            onClick: function() {\n                                                return setShow(!show);\n                                            },\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__.KeyboardArrowDownRounded, {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 33\n                                                },\n                                                __self: _this\n                                            })\n                                        }),\n                                        show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().options),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().option),\n                                                onClick: handleDelete,\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 37\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__.ClearRounded, {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        },\n                                                        __self: _this\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 41\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Deletar\"\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        (message === null || message === void 0 ? void 0 : message.img) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),\n                            style: {\n                                backgroundColor: own ? \"#13503d\" : \"#252525\"\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().imgContainer),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/img/tabosa.jpg\",\n                                    alt: \"\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageText),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message === null || message === void 0 ? void 0 : message.text\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_8___default().messageBottom),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_2__.format)(message === null || message === void 0 ? void 0 : message.created_at, 'my-locale')\n                })\n            ]\n        })\n    }));\n};\n_s(Message, \"LFbQ4QRLb3d0XcxyxCjL7bfUZDc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7NEJBQUN4Qjs7Ozs7OztzQ0FBZ0NqQixPQUFPOzs7O21DQUU3Q2dCLENBQUc7b0JBQUNDOzs7Ozs7OzhCQUFrQzNCLE1BQU0sQ0FBQ1U7Ozs7O0FBSTlELENBQUM7R0F2RktELE9BQU87O1FBR1FIOzs7S0FIZkcsT0FBTztBQXlGYixNQUFNLHNEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lc3NhZ2UuanN4Pzc4Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01lc3NhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge2Zvcm1hdCwgcmVnaXN0ZXJ9IGZyb20gXCJ0aW1lYWdvLmpzXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IENsZWFyUm91bmRlZCwgS2V5Ym9hcmRBcnJvd0Rvd25Sb3VuZGVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZGVsZXRlTWVzc2FnZSB9IGZyb20gXCIuLi9yZWR1eC9jb252ZXJzYXRpb25zU2xpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTWVzc2FnZSA9ICh7bWVzc2FnZSwgb3duLCB1c2VyLCBpbmRleENvbnZlcnNhLCBpbmRleE1lc3NhZ2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2NhbGVGdW5jID0gKG51bWJlciwgaW5kZXgsIHRvdGFsU2VjKSA9PiB7XHJcbiAgICAgICAgLy8gbnVtYmVyOiB0aGUgdGltZWFnbyAvIHRpbWVpbiBudW1iZXI7XHJcbiAgICAgICAgLy8gaW5kZXg6IHRoZSBpbmRleCBvZiBhcnJheSBiZWxvdztcclxuICAgICAgICAvLyB0b3RhbFNlYzogdG90YWwgc2Vjb25kcyBiZXR3ZWVuIGRhdGUgdG8gYmUgZm9ybWF0dGVkIGFuZCB0b2RheSdzIGRhdGU7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgW1wiYWdvcmEgbWVzbW9cIiwgXCJuZXN0ZSBtb21lbnRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBzZWd1bmRvcyBhdHJhc1wiLCBcImjDoSAlcyBzZWd1bmRvc1wiXSxcclxuICAgICAgICAgICAgW1wiMSBtaW51dG8gYXRyYXNcIiwgXCJow6EgdW0gbWludXRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBtaW51dG9zIGF0cmFzXCIsIFwiaMOhICVzIG1pbnV0b3NcIl0sXHJcbiAgICAgICAgICAgIFtcInVtYSBob3JhIGF0cmFzXCIsIFwiaMOhIHVtYSBob3RhXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBob3JhcyBhdHJhc1wiLCBcImjDoSAlcyBob3Jhc1wiXSxcclxuICAgICAgICAgICAgW1widW0gZGlhIGF0cmFzXCIsIFwiaMOhIHVtIGRpYVwiXSxcclxuICAgICAgICAgICAgW1wiJXMgZGlhcyBhdHJhc1wiLCBcImjDoSAlcyBkaWFzXCJdLFxyXG4gICAgICAgICAgICBbXCJ1bSBtZXMgYXRyYXNcIiwgXCJow6EgdW0gbcOqc1wiXSxcclxuICAgICAgICAgICAgW1wiJXMgbWVzZXMgYXRyYXNcIiwgXCJow6EgJXMgbWVzZXNcIl0sXHJcbiAgICAgICAgICAgIFtcIjEgYW5vIGF0cmFzXCIsIFwiaMOhIDEgYW5vXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBhbm9zIGF0cmFzXCIsIFwiaMOhICVzIGFub3NcIl1cclxuICAgICAgICBdW2luZGV4XTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZWdpc3RlcignbXktbG9jYWxlJywgbG9jYWxlRnVuYyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRhbmRvXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgLypjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbWVzc2FnZXMvJHttZXNzYWdlLmlkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLlN0YXR1cyA9PT0gXCJNZW5zYWdlbSBhcGFnYWRhXCIpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVzc2FnZSh7IGluZGV4OiBpbmRleENvbnZlcnNhLCBpbmRleE1lc3NhZ2UgfSkpO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e293biA/IHN0eWxlcy5tZXNzYWdlT3duIDogc3R5bGVzLm1lc3NhZ2V9IG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3duID8gc3R5bGVzLm1lc3NhZ2VDb250YWluZXJPd24gOiBzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZVRvcH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17b3duID8gc3R5bGVzLnVzZXJuYW1lT3duIDogc3R5bGVzLnVzZXJuYW1lfT57bWVzc2FnZT8ub3duPy51c2VyPy51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25TaG93fSBvbkNsaWNrPXsoKT0+c2V0U2hvdyghc2hvdyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93blJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhclJvdW5kZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0YXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U/LmltZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBvd24gPyBcIiMxMzUwM2RcIiA6IFwiIzI1MjUyNVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy90YWJvc2EuanBnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlVGV4dH0+e21lc3NhZ2U/LnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VCb3R0b219Pntmb3JtYXQobWVzc2FnZT8uY3JlYXRlZF9hdCwgJ215LWxvY2FsZScpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm1hdCIsInJlZ2lzdGVyIiwiSW1hZ2UiLCJDbGVhclJvdW5kZWQiLCJLZXlib2FyZEFycm93RG93blJvdW5kZWQiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwiZGVsZXRlTWVzc2FnZSIsImF4aW9zIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJvd24iLCJ1c2VyIiwiaW5kZXhDb252ZXJzYSIsImluZGV4TWVzc2FnZSIsInNob3ciLCJzZXRTaG93IiwiZGlzcGF0Y2giLCJsb2NhbGVGdW5jIiwibnVtYmVyIiwiaW5kZXgiLCJ0b3RhbFNlYyIsImhhbmRsZURlbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXNzYWdlT3duIiwib24iLCJtZXNzYWdlQ29udGFpbmVyT3duIiwibWVzc2FnZUNvbnRhaW5lciIsIm1lc3NhZ2VUb3AiLCJ0b3AiLCJzcGFuIiwidXNlcm5hbWVPd24iLCJ1c2VybmFtZSIsIm1lbnUiLCJpY29uU2hvdyIsIm9uQ2xpY2siLCJvcHRpb25zIiwib3B0aW9uIiwiaW1nIiwid3JhcHBlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaW1nQ29udGFpbmVyIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwicCIsIm1lc3NhZ2VUZXh0IiwidGV4dCIsIm1lc3NhZ2VCb3R0b20iLCJjcmVhdGVkX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Message.jsx\n");

/***/ })

});