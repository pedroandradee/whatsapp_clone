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

/***/ "./pages/Homepage.jsx":
/*!****************************!*\
  !*** ./pages/Homepage.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Homepage.module.css */ \"./styles/Homepage.module.css\");\n/* harmony import */ var _styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ChatItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ChatItem */ \"./components/ChatItem.jsx\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ \"./components/Content.jsx\");\n/* harmony import */ var _components_Conversation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Conversation */ \"./components/Conversation.jsx\");\n/* harmony import */ var _components_NewChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NewChat */ \"./components/NewChat.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Homepage = function(param) {\n    var user = param.user;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 0,\n            img: \"/img/tabosa.jpg\",\n            chatName: \"Sarrabui\",\n            lastMsg: \"Essa mensagem \\xe9 um teste\"\n        },\n        {\n            id: 1,\n            img: \"/img/tabosa.jpg\",\n            chatName: \"Admins\",\n            lastMsg: \"Essa mensagem \\xe9 um teste2\"\n        }, \n    ]), chatList = ref[0], setChatList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    }), currentChat = ref1[0], setCurrentChat = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), newChat = ref2[0], setNewChat = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebar),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().newChat),\n                        style: {\n                            width: newChat ? \"100%\" : \"0px\"\n                        },\n                        onClick: function() {\n                            return setNewChat(false);\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().userSpace),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().userImage),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 25\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: \"/img/tabosa.jpg\",\n                                            objectFit: \"cover\",\n                                            layout: \"fill\",\n                                            alt: \"\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 29\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().username),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        },\n                                        __self: _this,\n                                        children: user.username\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 25\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.DonutLarge, {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 29\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                        onClick: function() {\n                                            return setNewChat(true);\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.Chat, {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 29\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 25\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVert, {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            },\n                                            __self: _this\n                                        })\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().search),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().totalAreaInput),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.Search, {\n                                    fontSize: \"small\",\n                                    style: {\n                                        color: '#919191'\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                    type: \"search\",\n                                    placeholder: \"Pesquisar ou come\\xe7ar uma nova conversa\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatList),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: chatList.length > 0 ? chatList.map(function(c, index) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ChatItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                informations: c,\n                                activated: currentChat.id === chatList[index].id,\n                                onClick: function() {\n                                    return setCurrentChat(chatList[index]);\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 29\n                                },\n                                __self: _this1\n                            }, index);\n                        }) : \"Nenhuma conversa ativa\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Homepage_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: currentChat.id !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Conversation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    user: user,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 21\n                    },\n                    __self: _this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\pages\\\\Homepage.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 21\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Homepage, \"bgeud2NW8YocYdjUf8kuWSqcP+M=\");\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUFBLENBQUM7Ozs7Ozs7O3FHQUNqREMsQ0FBSztvQ0FBQ0MsSUFBSSxFQUFDLENBQVE7b0NBQUNDLFdBQVcsRUFBQyxDQUF3Qzs7Ozs7Ozs7Ozs7eUZBR2hGeEIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFdkIsNkVBQWU7Ozs7Ozs7a0NBRXZCZ0IsUUFBUSxDQUFDK0IsTUFBTSxHQUFDLENBQUMsR0FDakIvQixRQUFRLENBQUNnQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLEtBQUs7MENBQ2xCLE1BQU0sd0RBQUxoRCw0REFBUTtnQ0FFTGlELFlBQVksRUFBRUYsQ0FBQztnQ0FDZkcsU0FBUyxFQUFFbEMsV0FBVyxDQUFDTixFQUFFLEtBQUtJLFFBQVEsQ0FBQ2tDLEtBQUssRUFBRXRDLEVBQUU7Z0NBQ2hEZ0IsT0FBTyxFQUFFLFFBQVE7b0NBQUpULE1BQU0sQ0FBTkEsY0FBYyxDQUFDSCxRQUFRLENBQUNrQyxLQUFLOzs7Ozs7OzsrQkFIckNBLEtBQUs7NkJBTWxCLENBQXdCOzs7O2lGQUluQzVCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRXZCLDRFQUFjOzs7Ozs7OzBCQUV0QmtCLFdBQVcsQ0FBQ04sRUFBRSxLQUFLMEMsU0FBUyx3RUFDM0I5QyxnRUFBWTtvQkFBQ0csSUFBSSxFQUFFQSxJQUFJOzs7Ozs7OzBGQUN2QkosMkRBQU87Ozs7Ozs7Ozs7O0FBSzVCLENBQUM7R0FqRktHLFFBQVE7S0FBUkEsUUFBUTtBQW1GZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWVwYWdlLmpzeD8zMzE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZXBhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhdEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdEl0ZW1cIjtcclxuXHJcbmltcG9ydCB7IENoYXQsIERvbnV0TGFyZ2UsIE1vcmVWZXJ0LCBTZWFyY2ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcclxuaW1wb3J0IENvbnZlcnNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25cIjtcclxuaW1wb3J0IE5ld0NoYXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3Q2hhdFwiO1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoe3VzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbY2hhdExpc3QsIHNldENoYXRMaXN0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBpbWc6IFwiL2ltZy90YWJvc2EuanBnXCIsXHJcbiAgICAgICAgICAgIGNoYXROYW1lOiBcIlNhcnJhYnVpXCIsXHJcbiAgICAgICAgICAgIGxhc3RNc2c6IFwiRXNzYSBtZW5zYWdlbSDDqSB1bSB0ZXN0ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBpbWc6IFwiL2ltZy90YWJvc2EuanBnXCIsXHJcbiAgICAgICAgICAgIGNoYXROYW1lOiBcIkFkbWluc1wiLFxyXG4gICAgICAgICAgICBsYXN0TXNnOiBcIkVzc2EgbWVuc2FnZW0gw6kgdW0gdGVzdGUyXCJcclxuICAgICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbY3VycmVudENoYXQsIHNldEN1cnJlbnRDaGF0XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtuZXdDaGF0LCBzZXROZXdDaGF0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IG5ld0NoYXQgPyBcIjEwMCVcIiA6IFwiMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXROZXdDaGF0KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlclNwYWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvdGFib3NhLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWV9Pnt1c2VyLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9udXRMYXJnZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpPT5zZXROZXdDaGF0KHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZVZlcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsQXJlYUlucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCBmb250U2l6ZT1cInNtYWxsXCIgc3R5bGU9e3tjb2xvcjogJyM5MTkxOTEnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhciBvdSBjb21lw6dhciB1bWEgbm92YSBjb252ZXJzYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdExpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdExpc3QubGVuZ3RoPjAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGF0TGlzdC5tYXAoKGMsIGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbnM9e2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVkPXtjdXJyZW50Q2hhdC5pZCA9PT0gY2hhdExpc3RbaW5kZXhdLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRDdXJyZW50Q2hhdChjaGF0TGlzdFtpbmRleF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5lbmh1bWEgY29udmVyc2EgYXRpdmFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2hhdC5pZCAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICA8Q29udmVyc2F0aW9uIHVzZXI9e3VzZXJ9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiQ2hhdEl0ZW0iLCJDaGF0IiwiRG9udXRMYXJnZSIsIk1vcmVWZXJ0IiwiU2VhcmNoIiwiQ29udGVudCIsIkNvbnZlcnNhdGlvbiIsIk5ld0NoYXQiLCJIb21lcGFnZSIsInVzZXIiLCJpZCIsImltZyIsImNoYXROYW1lIiwibGFzdE1zZyIsImNoYXRMaXN0Iiwic2V0Q2hhdExpc3QiLCJjdXJyZW50Q2hhdCIsInNldEN1cnJlbnRDaGF0IiwibmV3Q2hhdCIsInNldE5ld0NoYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzaWRlYmFyIiwic3R5bGUiLCJ3aWR0aCIsIm9uQ2xpY2siLCJoZWFkZXIiLCJ1c2VyU3BhY2UiLCJ1c2VySW1hZ2UiLCJzcmMiLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJhbHQiLCJzcGFuIiwidXNlcm5hbWUiLCJhY3Rpb25zIiwiYnV0dG9uIiwic2VhcmNoIiwidG90YWxBcmVhSW5wdXQiLCJmb250U2l6ZSIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiLCJtYXAiLCJjIiwiaW5kZXgiLCJpbmZvcm1hdGlvbnMiLCJhY3RpdmF0ZWQiLCJjb250ZW50IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Homepage.jsx\n");

/***/ })

});