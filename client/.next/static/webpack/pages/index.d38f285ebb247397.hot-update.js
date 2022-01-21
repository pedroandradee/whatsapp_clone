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

/***/ "./components/ChatItem.jsx":
/*!*********************************!*\
  !*** ./components/ChatItem.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ChatItem.module.css */ \"./styles/ChatItem.module.css\");\n/* harmony import */ var _styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ChatItem = function(param) {\n    var onClick = param.onClick, activated = param.activated, informations = param.informations, user = param.user;\n    var getFriendName = function getFriendName() {\n        var equals = true;\n        var name = \"Name\";\n        var count = 0;\n        if (!(informations === null || informations === void 0 ? void 0 : informations.chat.is_group)) {\n            var ref, ref4;\n            while(equals === true && count < (informations === null || informations === void 0 ? void 0 : (ref = informations.chat) === null || ref === void 0 ? void 0 : (ref4 = ref.participants) === null || ref4 === void 0 ? void 0 : ref4.length)){\n                if (informations.chat.participants[count].user_id != user.id) {\n                    name = informations.chat.participants[count].user.username;\n                    equals = false;\n                }\n                count++;\n            }\n        } else {\n            name = informations.chat.group_name;\n        }\n        return name;\n    };\n    var getImage = function getImage() {\n        var equals = true;\n        var image = \"a\";\n        var count = 0;\n        if (!(informations === null || informations === void 0 ? void 0 : informations.chat.is_group)) {\n            var ref, ref6;\n            while(equals === true && count < (informations === null || informations === void 0 ? void 0 : (ref = informations.chat) === null || ref === void 0 ? void 0 : (ref6 = ref.participants) === null || ref6 === void 0 ? void 0 : ref6.length)){\n                if (informations.chat.participants[count].user_id != user.id) {\n                    image = informations.chat.participants[count].user.profile_picture;\n                    equals = false;\n                }\n                count++;\n            }\n        } else {\n            image = informations.chat.group_image;\n        }\n        return image;\n    };\n    var ref5, ref1, ref2, ref3;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(informations.chat.messages);\n    }, [\n        informations\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: activated ? (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().containerActivated) : (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        onClick: onClick,\n        __source: {\n            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/\" + getImage(),\n                    objectFit: \"cover\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().username),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: getFriendName()\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendDate),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"15:04\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: (_styles_ChatItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().lastMsg),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\pedro\\\\Desktop\\\\estudosJS\\\\whatsapp_clone\\\\client\\\\components\\\\ChatItem.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: (ref3 = informations === null || informations === void 0 ? void 0 : (ref5 = informations.chat) === null || ref5 === void 0 ? void 0 : ref5.messages[(informations === null || informations === void 0 ? void 0 : (ref1 = informations.chat) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.messages) === null || ref2 === void 0 ? void 0 : ref2.length) - 1]) === null || ref3 === void 0 ? void 0 : ref3.text\n                            })\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(ChatItem, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ChatItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatItem);\nvar _c;\n$RefreshReg$(_c, \"ChatItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRzt3QkFBQ0MsU0FBUyxFQUFFNUIsMEVBQVk7Ozs7Ozs7dUdBQ3ZCMkIsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFNUIsNEVBQWM7Ozs7Ozs7MkdBQ3pCeUMsQ0FBQzs7Ozs7OztrREFBRW5DLFlBQVksYUFBWkEsWUFBWSxLQUFaQSxJQUFJLENBQUpBLENBQWtCLEdBQWxCQSxJQUFJLENBQUpBLENBQWtCLElBQWxCQSxJQUFrQixHQUFsQkEsWUFBWSxDQUFFTSxJQUFJLGNBQWxCTixJQUFrQixLQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBa0IsQ0FBRW9CLFFBQVEsRUFBQ3BCLFlBQVksYUFBWkEsWUFBWSxLQUFaQSxJQUFJLENBQUpBLENBQWtCLEdBQWxCQSxJQUFJLENBQUpBLENBQWtCLElBQWxCQSxJQUFrQixHQUFsQkEsWUFBWSxDQUFFTSxJQUFJLGNBQWxCTixJQUFrQixLQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixXQUFsQkEsSUFBa0IsQ0FBRW9CLFFBQVEsdUJBQTVCcEIsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixRQUFZUyxNQUFNLElBQUcsQ0FBQyx3QkFBckVULElBQUksQ0FBSkEsQ0FBNEUsR0FBNUVBLElBQUksQ0FBSkEsQ0FBNEUsUUFBSm9DLElBQUk7Ozs7Ozs7O0FBTXhHLENBQUM7R0FwRUt2QyxRQUFRO0tBQVJBLFFBQVE7QUFzRWQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SXRlbS5qc3g/YzFkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQ2hhdEl0ZW0ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2hhdEl0ZW0gPSAoe29uQ2xpY2ssIGFjdGl2YXRlZCwgaW5mb3JtYXRpb25zLCB1c2VyfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm9ybWF0aW9ucy5jaGF0Lm1lc3NhZ2VzKTtcclxuICAgIH0sIFtpbmZvcm1hdGlvbnNdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGcmllbmROYW1lKCl7XHJcbiAgICAgICAgbGV0IGVxdWFscyA9IHRydWU7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIk5hbWVcIjtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGlmKCFpbmZvcm1hdGlvbnM/LmNoYXQuaXNfZ3JvdXApe1xyXG4gICAgICAgICAgICB3aGlsZShlcXVhbHMgPT09IHRydWUgJiYgY291bnQgPCBpbmZvcm1hdGlvbnM/LmNoYXQ/LnBhcnRpY2lwYW50cz8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGlmKGluZm9ybWF0aW9ucy5jaGF0LnBhcnRpY2lwYW50c1tjb3VudF0udXNlcl9pZCAhPSB1c2VyLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gaW5mb3JtYXRpb25zLmNoYXQucGFydGljaXBhbnRzW2NvdW50XS51c2VyLnVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVxdWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBpbmZvcm1hdGlvbnMuY2hhdC5ncm91cF9uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEltYWdlKCl7XHJcbiAgICAgICAgbGV0IGVxdWFscyA9IHRydWU7XHJcbiAgICAgICAgbGV0IGltYWdlID0gXCJhXCI7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBpZighaW5mb3JtYXRpb25zPy5jaGF0LmlzX2dyb3VwKXtcclxuICAgICAgICAgICAgd2hpbGUoZXF1YWxzID09PSB0cnVlICYmIGNvdW50IDwgaW5mb3JtYXRpb25zPy5jaGF0Py5wYXJ0aWNpcGFudHM/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBpZihpbmZvcm1hdGlvbnMuY2hhdC5wYXJ0aWNpcGFudHNbY291bnRdLnVzZXJfaWQgIT0gdXNlci5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBpbmZvcm1hdGlvbnMuY2hhdC5wYXJ0aWNpcGFudHNbY291bnRdLnVzZXIucHJvZmlsZV9waWN0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVxdWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGltYWdlID0gaW5mb3JtYXRpb25zLmNoYXQuZ3JvdXBfaW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZhdGVkID8gc3R5bGVzLmNvbnRhaW5lckFjdGl2YXRlZCA6IHN0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltZy9cIiArIGdldEltYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+e2dldEZyaWVuZE5hbWUoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbmREYXRlfT4xNTowNDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhc3RNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5mb3JtYXRpb25zPy5jaGF0Py5tZXNzYWdlc1tpbmZvcm1hdGlvbnM/LmNoYXQ/Lm1lc3NhZ2VzPy5sZW5ndGggLSAxXT8udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRJdGVtXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsInVzZUVmZmVjdCIsIkNoYXRJdGVtIiwib25DbGljayIsImFjdGl2YXRlZCIsImluZm9ybWF0aW9ucyIsInVzZXIiLCJnZXRGcmllbmROYW1lIiwiZXF1YWxzIiwibmFtZSIsImNvdW50IiwiY2hhdCIsImlzX2dyb3VwIiwicGFydGljaXBhbnRzIiwibGVuZ3RoIiwidXNlcl9pZCIsImlkIiwidXNlcm5hbWUiLCJncm91cF9uYW1lIiwiZ2V0SW1hZ2UiLCJpbWFnZSIsInByb2ZpbGVfcGljdHVyZSIsImdyb3VwX2ltYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQWN0aXZhdGVkIiwiY29udGFpbmVyIiwiaW1hZ2VDb250YWluZXIiLCJzcmMiLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJhbHQiLCJ3cmFwcGVyIiwibGVmdCIsInNlbmREYXRlIiwicmlnaHQiLCJsYXN0TXNnIiwicCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatItem.jsx\n");

/***/ })

});