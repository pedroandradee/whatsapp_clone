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

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Messengerbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messengerbar */ \"./components/Messengerbar.jsx\");\n/* harmony import */ var _Userbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Userbar */ \"./components/Userbar.jsx\");\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Sidebar.module.css */ \"./styles/Sidebar.module.css\");\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Sidebar = function(param) {\n    var click = param.click, user = param.user;\n    var click2 = function click2(msg) {\n        console.log(msg);\n        click(msg);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), conversations = ref[0], setConversations = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (user) {\n            var getMessages = _asyncToGenerator(C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res;\n                return C_Users_pedro_Desktop_estudosJS_whatsapp_clone_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"http://localhost:5000/api/conversationsAll/\".concat(user.id));\n                        case 2:\n                            res = _ctx.sent;\n                            setConversations(res.data);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            getMessages();\n        }\n    }, [\n        user\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Sidebar.jsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Userbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                user: user,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Messengerbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                click2: click2,\n                conversations: conversations,\n                user: user,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Sidebar, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVjtBQUNrQjtBQUNoQjtBQUNEO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLEdBQUssQ0FBQ00sT0FBTyxHQUFHLFFBQVEsUUFBVyxDQUFDO1FBQWxCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJO1FBR2hCQyxNQUFNLEdBQWYsUUFBUSxDQUFDQSxNQUFNLENBQUNDLEdBQUcsRUFBQyxDQUFDO1FBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNmSCxLQUFLLENBQUNHLEdBQUc7SUFDYixDQUFDOztJQUxELEdBQUssQ0FBcUNOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBOUNTLGFBQWEsR0FBc0JULEdBQVksS0FBaENVLGdCQUFnQixHQUFJVixHQUFZO0lBUXRERCxnREFBUyxDQUFDLFFBQ2IsR0FEaUIsQ0FBQztRQUNYLEVBQUUsRUFBQ0ssSUFBSSxFQUFDLENBQUM7WUFDTCxHQUFLLENBQUNPLFdBQVcsbUtBQUcsUUFBUSxXQUFJLENBQUM7b0JBQ3ZCQyxHQUFHOzs7OzttQ0FBU1gsZ0RBQVMsQ0FBRSxDQUEyQyw2Q0FBVSxPQUFSRyxJQUFJLENBQUNVLEVBQUU7OzRCQUEzRUYsR0FBRzs0QkFDVEYsZ0JBQWdCLENBQUNFLEdBQUcsQ0FBQ0csSUFBSTs7Ozs7O1lBQzdCLENBQUM7WUFDREosV0FBVztRQUNmLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQ1A7UUFBQUEsSUFBSTtJQUFBLENBQUM7SUFFVCxNQUFNLHVFQUNEWSxDQUFHO1FBQUNDLFNBQVMsRUFBRW5CLDZFQUFnQjs7Ozs7Ozs7aUZBQzNCRCxnREFBTztnQkFBQ08sSUFBSSxFQUFFQSxJQUFJOzs7Ozs7OztpRkFDbEJSLHFEQUFZO2dCQUFDUyxNQUFNLEVBQUVBLE1BQU07Z0JBQUVJLGFBQWEsRUFBRUEsYUFBYTtnQkFBRUwsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7O0FBR2xGLENBQUM7R0F6QktGLE9BQU87S0FBUEEsT0FBTztBQTJCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3g/NGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVzc2VuZ2VyYmFyIGZyb20gXCIuL01lc3NlbmdlcmJhclwiO1xyXG5pbXBvcnQgVXNlcmJhciBmcm9tIFwiLi9Vc2VyYmFyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TaWRlYmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7Y2xpY2ssIHVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbY29udmVyc2F0aW9ucywgc2V0Q29udmVyc2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xpY2syKG1zZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICBjbGljayhtc2cpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY29udmVyc2F0aW9uc0FsbC8ke3VzZXIuaWR9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb252ZXJzYXRpb25zKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZXRNZXNzYWdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VXNlcmJhciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8TWVzc2VuZ2VyYmFyIGNsaWNrMj17Y2xpY2syfSBjb252ZXJzYXRpb25zPXtjb252ZXJzYXRpb25zfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXSwibmFtZXMiOlsiTWVzc2VuZ2VyYmFyIiwiVXNlcmJhciIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTaWRlYmFyIiwiY2xpY2siLCJ1c2VyIiwiY2xpY2syIiwibXNnIiwiY29uc29sZSIsImxvZyIsImNvbnZlcnNhdGlvbnMiLCJzZXRDb252ZXJzYXRpb25zIiwiZ2V0TWVzc2FnZXMiLCJyZXMiLCJnZXQiLCJpZCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n");

/***/ })

});