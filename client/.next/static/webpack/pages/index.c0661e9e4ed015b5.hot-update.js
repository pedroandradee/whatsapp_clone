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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Message.module.css */ \"./styles/Message.module.css\");\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Message = function(param) {\n    var message = param.message, own = param.own, user = param.user;\n    console.log(message);\n    console.log(user);\n    var localeFunc = function(number, index, totalSec) {\n        // number: the timeago / timein number;\n        // index: the index of array below;\n        // totalSec: total seconds between date to be formatted and today's date;\n        return [\n            [\n                \"agora mesmo\",\n                \"neste momento\"\n            ],\n            [\n                \"%s segundos atras\",\n                \"h\\xe1 %s segundos\"\n            ],\n            [\n                \"1 minuto atras\",\n                \"h\\xe1 um minuto\"\n            ],\n            [\n                \"%s minutos atras\",\n                \"h\\xe1 %s minutos\"\n            ],\n            [\n                \"uma hora atras\",\n                \"h\\xe1 uma hota\"\n            ],\n            [\n                \"%s horas atras\",\n                \"h\\xe1 %s horas\"\n            ],\n            [\n                \"um dia atras\",\n                \"h\\xe1 um dia\"\n            ],\n            [\n                \"%s dias atras\",\n                \"h\\xe1 %s dias\"\n            ],\n            [\n                \"um mes atras\",\n                \"h\\xe1 um m\\xeas\"\n            ],\n            [\n                \"%s meses atras\",\n                \"h\\xe1 %s meses\"\n            ],\n            [\n                \"1 ano atras\",\n                \"h\\xe1 1 ano\"\n            ],\n            [\n                \"%s anos atras\",\n                \"h\\xe1 %s anos\"\n            ]\n        ][index];\n    };\n    (0,timeago_js__WEBPACK_IMPORTED_MODULE_1__.register)('my-locale', localeFunc);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().message),\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContainerOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContainer),\n            __source: {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageTop),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().usernameOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().username),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message.own.user.username\n                        }),\n                        message.img && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                            style: {\n                                backgroundColor: own ? \"#13503d\" : \"#252525\"\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/img/tabosa.jpg\",\n                                    alt: \"\",\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageText),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message.text\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageBottom),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_1__.format)(message.created_at, 'my-locale')\n                })\n            ]\n        })\n    }));\n};\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZW50cy9NZXNzYWdlLmpzeD83OGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NZXNzYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtmb3JtYXQsIHJlZ2lzdGVyfSBmcm9tIFwidGltZWFnby5qc1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgTWVzc2FnZSA9ICh7bWVzc2FnZSwgb3duLCB1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGxvY2FsZUZ1bmMgPSAobnVtYmVyLCBpbmRleCwgdG90YWxTZWMpID0+IHtcclxuICAgICAgICAvLyBudW1iZXI6IHRoZSB0aW1lYWdvIC8gdGltZWluIG51bWJlcjtcclxuICAgICAgICAvLyBpbmRleDogdGhlIGluZGV4IG9mIGFycmF5IGJlbG93O1xyXG4gICAgICAgIC8vIHRvdGFsU2VjOiB0b3RhbCBzZWNvbmRzIGJldHdlZW4gZGF0ZSB0byBiZSBmb3JtYXR0ZWQgYW5kIHRvZGF5J3MgZGF0ZTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBbXCJhZ29yYSBtZXNtb1wiLCBcIm5lc3RlIG1vbWVudG9cIl0sXHJcbiAgICAgICAgICAgIFtcIiVzIHNlZ3VuZG9zIGF0cmFzXCIsIFwiaMOhICVzIHNlZ3VuZG9zXCJdLFxyXG4gICAgICAgICAgICBbXCIxIG1pbnV0byBhdHJhc1wiLCBcImjDoSB1bSBtaW51dG9cIl0sXHJcbiAgICAgICAgICAgIFtcIiVzIG1pbnV0b3MgYXRyYXNcIiwgXCJow6EgJXMgbWludXRvc1wiXSxcclxuICAgICAgICAgICAgW1widW1hIGhvcmEgYXRyYXNcIiwgXCJow6EgdW1hIGhvdGFcIl0sXHJcbiAgICAgICAgICAgIFtcIiVzIGhvcmFzIGF0cmFzXCIsIFwiaMOhICVzIGhvcmFzXCJdLFxyXG4gICAgICAgICAgICBbXCJ1bSBkaWEgYXRyYXNcIiwgXCJow6EgdW0gZGlhXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBkaWFzIGF0cmFzXCIsIFwiaMOhICVzIGRpYXNcIl0sXHJcbiAgICAgICAgICAgIFtcInVtIG1lcyBhdHJhc1wiLCBcImjDoSB1bSBtw6pzXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBtZXNlcyBhdHJhc1wiLCBcImjDoSAlcyBtZXNlc1wiXSxcclxuICAgICAgICAgICAgW1wiMSBhbm8gYXRyYXNcIiwgXCJow6EgMSBhbm9cIl0sXHJcbiAgICAgICAgICAgIFtcIiVzIGFub3MgYXRyYXNcIiwgXCJow6EgJXMgYW5vc1wiXVxyXG4gICAgICAgIF1baW5kZXhdO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJlZ2lzdGVyKCdteS1sb2NhbGUnLCBsb2NhbGVGdW5jKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e293biA/IHN0eWxlcy5tZXNzYWdlT3duIDogc3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3duID8gc3R5bGVzLm1lc3NhZ2VDb250YWluZXJPd24gOiBzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VUb3B9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtvd24gPyBzdHlsZXMudXNlcm5hbWVPd24gOiBzdHlsZXMudXNlcm5hbWV9PnttZXNzYWdlLm93bi51c2VyLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuaW1nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IG93biA/IFwiIzEzNTAzZFwiIDogXCIjMjUyNTI1XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3RhYm9zYS5qcGdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VUZXh0fT57bWVzc2FnZS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlQm90dG9tfT57Zm9ybWF0KG1lc3NhZ2UuY3JlYXRlZF9hdCwgJ215LWxvY2FsZScpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7Il0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm1hdCIsInJlZ2lzdGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwibWVzc2FnZSIsIm93biIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxlRnVuYyIsIm51bWJlciIsImluZGV4IiwidG90YWxTZWMiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXNzYWdlT3duIiwibWVzc2FnZUNvbnRhaW5lck93biIsIm1lc3NhZ2VDb250YWluZXIiLCJtZXNzYWdlVG9wIiwic3BhbiIsInVzZXJuYW1lT3duIiwidXNlcm5hbWUiLCJpbWciLCJ3cmFwcGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWdDb250YWluZXIiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwIiwibWVzc2FnZVRleHQiLCJ0ZXh0IiwibWVzc2FnZUJvdHRvbSIsImNyZWF0ZWRfYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Message.jsx\n");

/***/ })

});