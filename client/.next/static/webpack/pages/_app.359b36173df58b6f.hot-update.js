"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/conversationsSlice.js":
/*!*************************************!*\
  !*** ./redux/conversationsSlice.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_actions\": function() { return /* binding */ _actions; },\n/* harmony export */   \"addConversations\": function() { return /* binding */ addConversations; },\n/* harmony export */   \"addConversation\": function() { return /* binding */ addConversation; },\n/* harmony export */   \"deleteConversation\": function() { return /* binding */ deleteConversation; },\n/* harmony export */   \"addMessage\": function() { return /* binding */ addMessage; },\n/* harmony export */   \"deleteMessage\": function() { return /* binding */ deleteMessage; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar conversationsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"conversations\",\n    initialState: {\n        userChats: []\n    },\n    reducers: {\n        //precisa mandar todas as conversas\n        addConversations: function(state, action) {\n            state.userChats = action.payload;\n        },\n        //precisa mandar a conversa\n        addConversation: function(state, action) {\n            state.userChats.push(action.payload);\n        },\n        //precisa mandar o index\n        deleteConversation: function(state, action) {\n            state.userChats.pop(action.payload.index);\n        },\n        //precisa mandar o index e a mensagem\n        addMessage: function(state, action) {\n            state.userChats[action.payload.index].chat.messages.push(action.payload.message);\n        },\n        //precisa mandar o index da conversa e o index da mensagem\n        deleteMessage: function(state, action) {\n            state.userChats[action.payload.index].chat.messages.pop(action.payload.indexMessage);\n        }\n    }\n});\nvar _actions = conversationsSlice.actions, addConversations = _actions.addConversations, addConversation = _actions.addConversation, deleteConversation = _actions.deleteConversation, addMessage = _actions.addMessage, deleteMessage = _actions.deleteMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (conversationsSlice.reducer);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9jb252ZXJzYXRpb25zU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFFOUMsR0FBSyxDQUFDQyxrQkFBa0IsR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDRSxJQUFJLEVBQUUsQ0FBZTtJQUNyQkMsWUFBWSxFQUFDLENBQUM7UUFDVkMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0RDLFFBQVEsRUFBRSxDQUFDO1FBQ1AsRUFBbUM7UUFDbkNDLGdCQUFnQixFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsTUFBTSxFQUFHLENBQUM7WUFDaENDLEtBQUssQ0FBQ0osU0FBUyxHQUFHRyxNQUFNLENBQUNFLE9BQU87UUFDcEMsQ0FBQztRQUNELEVBQTJCO1FBQzNCQyxlQUFlLEVBQUUsUUFBUUgsQ0FBUEMsS0FBSyxFQUFFRCxNQUFNLEVBQUcsQ0FBQztZQUMvQkMsS0FBSyxDQUFDSixTQUFTLENBQUNPLElBQUksQ0FBQ0osTUFBTSxDQUFDRSxPQUFPO1FBQ3ZDLENBQUM7UUFDRCxFQUF3QjtRQUN4Qkcsa0JBQWtCLEVBQUUsUUFBUUwsQ0FBUEMsS0FBSyxFQUFFRCxNQUFNLEVBQUcsQ0FBQztZQUNsQ0MsS0FBSyxDQUFDSixTQUFTLENBQUNTLEdBQUcsQ0FBQ04sTUFBTSxDQUFDRSxPQUFPLENBQUNLLEtBQUs7UUFDNUMsQ0FBQztRQUNELEVBQXFDO1FBQ3JDQyxVQUFVLEVBQUUsUUFBUVIsQ0FBUEMsS0FBSyxFQUFFRCxNQUFNLEVBQUcsQ0FBQztZQUMxQkMsS0FBSyxDQUFDSixTQUFTLENBQUNHLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDSyxLQUFLLEVBQUVFLElBQUksQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUNKLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDUyxPQUFPO1FBQ25GLENBQUM7UUFDRCxFQUEwRDtRQUMxREMsYUFBYSxFQUFFLFFBQVFaLENBQVBDLEtBQUssRUFBRUQsTUFBTSxFQUFHLENBQUM7WUFDN0JDLEtBQUssQ0FBQ0osU0FBUyxDQUFDRyxNQUFNLENBQUNFLE9BQU8sQ0FBQ0ssS0FBSyxFQUFFRSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0osR0FBRyxDQUFDTixNQUFNLENBQUNFLE9BQU8sQ0FBQ1csWUFBWTtRQUN2RixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFTSxHQUFLLENBQXdGbkIsUUFBMEIsR0FBMUJBLGtCQUFrQixDQUFDb0IsT0FBTyxFQUEvR2YsZ0JBQWdCLEdBQXFFTCxRQUEwQixDQUEvR0ssZ0JBQWdCLEVBQUVJLGVBQWUsR0FBb0RULFFBQTBCLENBQTdGUyxlQUFlLEVBQUVFLGtCQUFrQixHQUFnQ1gsUUFBMEIsQ0FBNUVXLGtCQUFrQixFQUFFRyxVQUFVLEdBQW9CZCxRQUEwQixDQUF4RGMsVUFBVSxFQUFFSSxhQUFhLEdBQUtsQixRQUEwQixDQUE1Q2tCLGFBQWE7QUFDL0YsK0RBQWVsQixrQkFBa0IsQ0FBQ3FCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9jb252ZXJzYXRpb25zU2xpY2UuanM/MzE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBjb252ZXJzYXRpb25zU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcImNvbnZlcnNhdGlvbnNcIixcclxuICAgIGluaXRpYWxTdGF0ZTp7XHJcbiAgICAgICAgdXNlckNoYXRzOiBbXVxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy9wcmVjaXNhIG1hbmRhciB0b2RhcyBhcyBjb252ZXJzYXNcclxuICAgICAgICBhZGRDb252ZXJzYXRpb25zOiAoc3RhdGUsIGFjdGlvbik9PntcclxuICAgICAgICAgICAgc3RhdGUudXNlckNoYXRzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3ByZWNpc2EgbWFuZGFyIGEgY29udmVyc2FcclxuICAgICAgICBhZGRDb252ZXJzYXRpb246IChzdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyQ2hhdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3ByZWNpc2EgbWFuZGFyIG8gaW5kZXhcclxuICAgICAgICBkZWxldGVDb252ZXJzYXRpb246IChzdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyQ2hhdHMucG9wKGFjdGlvbi5wYXlsb2FkLmluZGV4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vcHJlY2lzYSBtYW5kYXIgbyBpbmRleCBlIGEgbWVuc2FnZW1cclxuICAgICAgICBhZGRNZXNzYWdlOiAoc3RhdGUsIGFjdGlvbik9PntcclxuICAgICAgICAgICAgc3RhdGUudXNlckNoYXRzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5jaGF0Lm1lc3NhZ2VzLnB1c2goYWN0aW9uLnBheWxvYWQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3ByZWNpc2EgbWFuZGFyIG8gaW5kZXggZGEgY29udmVyc2EgZSBvIGluZGV4IGRhIG1lbnNhZ2VtXHJcbiAgICAgICAgZGVsZXRlTWVzc2FnZTogKHN0YXRlLCBhY3Rpb24pPT57XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJDaGF0c1thY3Rpb24ucGF5bG9hZC5pbmRleF0uY2hhdC5tZXNzYWdlcy5wb3AoYWN0aW9uLnBheWxvYWQuaW5kZXhNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkQ29udmVyc2F0aW9ucywgYWRkQ29udmVyc2F0aW9uLCBkZWxldGVDb252ZXJzYXRpb24sIGFkZE1lc3NhZ2UsIGRlbGV0ZU1lc3NhZ2UgfSA9IGNvbnZlcnNhdGlvbnNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBjb252ZXJzYXRpb25zU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjb252ZXJzYXRpb25zU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlckNoYXRzIiwicmVkdWNlcnMiLCJhZGRDb252ZXJzYXRpb25zIiwiYWN0aW9uIiwic3RhdGUiLCJwYXlsb2FkIiwiYWRkQ29udmVyc2F0aW9uIiwicHVzaCIsImRlbGV0ZUNvbnZlcnNhdGlvbiIsInBvcCIsImluZGV4IiwiYWRkTWVzc2FnZSIsImNoYXQiLCJtZXNzYWdlcyIsIm1lc3NhZ2UiLCJkZWxldGVNZXNzYWdlIiwiaW5kZXhNZXNzYWdlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/conversationsSlice.js\n");

/***/ })

});