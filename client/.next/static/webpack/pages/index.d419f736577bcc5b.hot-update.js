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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Message.module.css */ \"./styles/Message.module.css\");\n/* harmony import */ var _styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Message = function(param) {\n    var message = param.message, own = param.own, user = param.user;\n    console.log(message);\n    console.log(user);\n    var localeFunc = function(number, index, totalSec) {\n        // number: the timeago / timein number;\n        // index: the index of array below;\n        // totalSec: total seconds between date to be formatted and today's date;\n        return [\n            [\n                \"agora mesmo\",\n                \"neste momento\"\n            ],\n            [\n                \"%s segundos atras\",\n                \"h\\xe1 %s segundos\"\n            ],\n            [\n                \"1 minuto atras\",\n                \"h\\xe1 um minuto\"\n            ],\n            [\n                \"%s minutos atras\",\n                \"h\\xe1 %s minutos\"\n            ],\n            [\n                \"uma hora atras\",\n                \"h\\xe1 uma hota\"\n            ],\n            [\n                \"%s horas atras\",\n                \"h\\xe1 %s horas\"\n            ],\n            [\n                \"um dia atras\",\n                \"h\\xe1 um dia\"\n            ],\n            [\n                \"%s dias atras\",\n                \"h\\xe1 %s dias\"\n            ],\n            [\n                \"um mes atras\",\n                \"h\\xe1 um m\\xeas\"\n            ],\n            [\n                \"%s meses atras\",\n                \"h\\xe1 %s meses\"\n            ],\n            [\n                \"1 ano atras\",\n                \"h\\xe1 1 ano\"\n            ],\n            [\n                \"%s anos atras\",\n                \"h\\xe1 %s anos\"\n            ]\n        ][index];\n    };\n    (0,timeago_js__WEBPACK_IMPORTED_MODULE_1__.register)('my-locale', localeFunc);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().message),\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContainerOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContainer),\n            __source: {\n                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageTop),\n                    style: {\n                        marginRight: own ? \"10px\" : \"0px\",\n                        marginLeft: own ? \"20px\" : \"0px\"\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                            className: own ? (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().usernameOwn) : (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().username),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message.own.user.username\n                        }),\n                        message.img && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/img/tabosa.jpg\",\n                                alt: \"\",\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageText),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: message.text\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: (_styles_Message_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageBottom),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Message.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_1__.format)(message.created_at, 'my-locale')\n                })\n            ]\n        })\n    }));\n};\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTjtBQUNiOztBQUU5QixHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUFRLFFBQWtCLENBQUM7UUFBekJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsSUFBSSxTQUFKQSxJQUFJO0lBRWhDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTztJQUNuQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7SUFFaEIsR0FBSyxDQUFDRyxVQUFVLEdBQUcsUUFBUSxDQUFQQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFLLENBQUM7UUFDN0MsRUFBdUM7UUFDdkMsRUFBbUM7UUFDbkMsRUFBeUU7UUFDekUsTUFBTSxDQUFDLENBQUM7WUFDSixDQUFDO2dCQUFBLENBQWE7Z0JBQUUsQ0FBZTtZQUFBLENBQUM7WUFDaEMsQ0FBQztnQkFBQSxDQUFtQjtnQkFBRSxDQUFnQjtZQUFDLENBQUM7WUFDdkM7Z0JBQUEsQ0FBZ0I7Z0JBQUUsQ0FBYztZQUFDLENBQUM7WUFDbEM7Z0JBQUEsQ0FBa0I7Z0JBQUUsQ0FBZTtZQUFDLENBQUM7WUFDckM7Z0JBQUEsQ0FBZ0I7Z0JBQUUsQ0FBYTtZQUFDLENBQUM7WUFDakM7Z0JBQUEsQ0FBZ0I7Z0JBQUUsQ0FBYTtZQUFDLENBQUM7WUFDakM7Z0JBQUEsQ0FBYztnQkFBRSxDQUFXO1lBQUMsQ0FBQztZQUM3QjtnQkFBQSxDQUFlO2dCQUFFLENBQVk7WUFBQyxDQUFDO1lBQy9CO2dCQUFBLENBQWM7Z0JBQUUsQ0FBVztZQUFFLENBQUM7WUFDN0IsQ0FBRDtnQkFBQSxDQUFnQjtnQkFBRSxDQUFhO1lBQUMsQ0FBQztZQUNqQztnQkFBQSxDQUFhO2dCQUFFLENBQVU7WUFBQyxDQUFDO1lBQzNCO2dCQUFBLENBQWU7Z0JBQUUsQ0FBWTtZQUFBLENBQUM7UUFDbkMsQ0FBQyxDQUFDRCxLQUFLO0lBQ1QsQ0FBQztJQUVIVixvREFBUSxDQUFDLENBQVcsWUFBRVEsVUFBVTtJQUVoQyxNQUFNLHNFQUNESSxDQUFHO1FBQUNDLFNBQVMsRUFBRVQsR0FBRyxHQUFHTiw4RUFBaUIsR0FBR0EsMkVBQWM7Ozs7Ozs7d0ZBQ25EYyxDQUFHO1lBQUNDLFNBQVMsRUFBRVQsR0FBRyxHQUFHTix1RkFBMEIsR0FBR0Esb0ZBQXVCOzs7Ozs7OztzRkFDckVjLENBQUc7b0JBQ0FDLFNBQVMsRUFBRWYsOEVBQWlCO29CQUM1Qm9CLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsV0FBVyxFQUFFZixHQUFHLEdBQUcsQ0FBTSxRQUFHLENBQUs7d0JBQUVnQixVQUFVLEVBQUVoQixHQUFHLEdBQUcsQ0FBTSxRQUFHLENBQUs7b0JBQUEsQ0FBQzs7Ozs7Ozs7NkZBRTNFaUIsQ0FBSTs0QkFBQ1IsU0FBUyxFQUFFVCxHQUFHLEdBQUdOLCtFQUFrQixHQUFHQSw0RUFBZTs7Ozs7OztzQ0FBR0ssT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ2tCLFFBQVE7O3dCQUVuRnBCLE9BQU8sQ0FBQ3FCLEdBQUcseUVBQ1ZaLENBQUc7NEJBQUNDLFNBQVMsRUFBRWYsZ0ZBQW1COzs7Ozs7OzJHQUM5QkcsbURBQUs7Z0NBQ0Z5QixHQUFHLEVBQUMsQ0FBaUI7Z0NBQ3JCQyxHQUFHLEVBQUMsQ0FBRTtnQ0FDTkMsTUFBTSxFQUFDLENBQU07Z0NBQ2JDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7Ozs7NkZBSTVCQyxDQUFDOzRCQUFDakIsU0FBUyxFQUFFZiwrRUFBa0I7Ozs7Ozs7c0NBQUdLLE9BQU8sQ0FBQzZCLElBQUk7Ozs7cUZBRWxEcEIsQ0FBRztvQkFBQ0MsU0FBUyxFQUFFZixpRkFBb0I7Ozs7Ozs7OEJBQUdDLGtEQUFNLENBQUNJLE9BQU8sQ0FBQytCLFVBQVUsRUFBRSxDQUFXOzs7OztBQUk3RixDQUFDO0tBcERLaEMsT0FBTztBQXNEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZS5qc3g/NzhjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWVzc2FnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7Zm9ybWF0LCByZWdpc3Rlcn0gZnJvbSBcInRpbWVhZ28uanNcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoe21lc3NhZ2UsIG93biwgdXNlcn0pID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2NhbGVGdW5jID0gKG51bWJlciwgaW5kZXgsIHRvdGFsU2VjKSA9PiB7XHJcbiAgICAgICAgLy8gbnVtYmVyOiB0aGUgdGltZWFnbyAvIHRpbWVpbiBudW1iZXI7XHJcbiAgICAgICAgLy8gaW5kZXg6IHRoZSBpbmRleCBvZiBhcnJheSBiZWxvdztcclxuICAgICAgICAvLyB0b3RhbFNlYzogdG90YWwgc2Vjb25kcyBiZXR3ZWVuIGRhdGUgdG8gYmUgZm9ybWF0dGVkIGFuZCB0b2RheSdzIGRhdGU7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgW1wiYWdvcmEgbWVzbW9cIiwgXCJuZXN0ZSBtb21lbnRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBzZWd1bmRvcyBhdHJhc1wiLCBcImjDoSAlcyBzZWd1bmRvc1wiXSxcclxuICAgICAgICAgICAgW1wiMSBtaW51dG8gYXRyYXNcIiwgXCJow6EgdW0gbWludXRvXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBtaW51dG9zIGF0cmFzXCIsIFwiaMOhICVzIG1pbnV0b3NcIl0sXHJcbiAgICAgICAgICAgIFtcInVtYSBob3JhIGF0cmFzXCIsIFwiaMOhIHVtYSBob3RhXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBob3JhcyBhdHJhc1wiLCBcImjDoSAlcyBob3Jhc1wiXSxcclxuICAgICAgICAgICAgW1widW0gZGlhIGF0cmFzXCIsIFwiaMOhIHVtIGRpYVwiXSxcclxuICAgICAgICAgICAgW1wiJXMgZGlhcyBhdHJhc1wiLCBcImjDoSAlcyBkaWFzXCJdLFxyXG4gICAgICAgICAgICBbXCJ1bSBtZXMgYXRyYXNcIiwgXCJow6EgdW0gbcOqc1wiXSxcclxuICAgICAgICAgICAgW1wiJXMgbWVzZXMgYXRyYXNcIiwgXCJow6EgJXMgbWVzZXNcIl0sXHJcbiAgICAgICAgICAgIFtcIjEgYW5vIGF0cmFzXCIsIFwiaMOhIDEgYW5vXCJdLFxyXG4gICAgICAgICAgICBbXCIlcyBhbm9zIGF0cmFzXCIsIFwiaMOhICVzIGFub3NcIl1cclxuICAgICAgICBdW2luZGV4XTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZWdpc3RlcignbXktbG9jYWxlJywgbG9jYWxlRnVuYyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvd24gPyBzdHlsZXMubWVzc2FnZU93biA6IHN0eWxlcy5tZXNzYWdlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e293biA/IHN0eWxlcy5tZXNzYWdlQ29udGFpbmVyT3duIDogc3R5bGVzLm1lc3NhZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlVG9wfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IG93biA/IFwiMTBweFwiIDogXCIwcHhcIiwgbWFyZ2luTGVmdDogb3duID8gXCIyMHB4XCIgOiBcIjBweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e293biA/IHN0eWxlcy51c2VybmFtZU93biA6IHN0eWxlcy51c2VybmFtZX0+e21lc3NhZ2Uub3duLnVzZXIudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5pbWcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvdGFib3NhLmpwZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZVRleHR9PnttZXNzYWdlLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VCb3R0b219Pntmb3JtYXQobWVzc2FnZS5jcmVhdGVkX2F0LCAnbXktbG9jYWxlJyl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwibmFtZXMiOlsic3R5bGVzIiwiZm9ybWF0IiwicmVnaXN0ZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJtZXNzYWdlIiwib3duIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbGVGdW5jIiwibnVtYmVyIiwiaW5kZXgiLCJ0b3RhbFNlYyIsImRpdiIsImNsYXNzTmFtZSIsIm1lc3NhZ2VPd24iLCJtZXNzYWdlQ29udGFpbmVyT3duIiwibWVzc2FnZUNvbnRhaW5lciIsIm1lc3NhZ2VUb3AiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsInNwYW4iLCJ1c2VybmFtZU93biIsInVzZXJuYW1lIiwiaW1nIiwiaW1nQ29udGFpbmVyIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwicCIsIm1lc3NhZ2VUZXh0IiwidGV4dCIsIm1lc3NhZ2VCb3R0b20iLCJjcmVhdGVkX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Message.jsx\n");

/***/ })

});