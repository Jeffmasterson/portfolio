"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/websites",{

/***/ "./src/components/WebsiteCard/WebsiteCard.js":
/*!***************************************************!*\
  !*** ./src/components/WebsiteCard/WebsiteCard.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lib_websites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/websites */ \"./src/lib/websites.js\");\n/* harmony import */ var components_Metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Metadata */ \"./src/components/Metadata/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebsiteCard.module.scss */ \"./src/components/WebsiteCard/WebsiteCard.module.scss\");\n/* harmony import */ var _WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\n\n\n\n\n\nvar WebsiteCard = function(param) {\n    var post = param.post, _options = param.options, options = _options === void 0 ? {} : _options;\n    var title = post.title, excerpt = post.excerpt, slug = post.slug, date = post.date, author = post.author, categories = post.categories, _isSticky = post.isSticky, isSticky = _isSticky === void 0 ? false : _isSticky;\n    var _excludeMetadata = options.excludeMetadata, excludeMetadata = _excludeMetadata === void 0 ? [] : _excludeMetadata;\n    var metadata = {};\n    if (!excludeMetadata.includes(\"author\")) {\n        metadata.author = author;\n    }\n    if (!excludeMetadata.includes(\"date\")) {\n        metadata.date = date;\n    }\n    if (!excludeMetadata.includes(\"categories\")) {\n        metadata.categories = categories;\n    }\n    var postCardStyle = (_WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard);\n    if (isSticky) {\n        postCardStyle = \"\".concat(postCardStyle, \" \").concat((_WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCardSticky));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: postCardStyle,\n        children: [\n            isSticky && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMapPin, {\n                \"aria-label\": \"Sticky Post\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                lineNumber: 36,\n                columnNumber: 20\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: (0,lib_websites__WEBPACK_IMPORTED_MODULE_2__.postPathBySlug)(slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCardTitle),\n                        dangerouslySetInnerHTML: {\n                            __html: title\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"\",\n                        href: \"/previous_work/rogers-roofing\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container-image\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: (0,lib_websites__WEBPACK_IMPORTED_MODULE_2__.postPathBySlug)(slug),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://www.jeffmastersonjr.com/wp-content/uploads/2020/10/rogers.jpg\",\n                                        alt: \"Avatar\",\n                                        className: \"image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overlay\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"\",\n                                        href: \"/previous_work/rogers-roofing\"\n                                    }, void 0, false, {\n                                        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 36\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"\",\n                                                href: \"/previous_work/rogers-roofing\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Rogers Roofing\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 15\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 35\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"btn btn-model\",\n                                                target: \"_blank\",\n                                                href: \"https://www.rogersroofing.com/\",\n                                                role: \"button\",\n                                                children: \"Visit Site\"\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Metadata__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                className: (_WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCardMetadata)\n            }, metadata), void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            excerpt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_WebsiteCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCardContent),\n                dangerouslySetInnerHTML: {\n                    __html: (0,lib_websites__WEBPACK_IMPORTED_MODULE_2__.sanitizeExcerpt)(excerpt)\n                }\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/portfolio/src/components/WebsiteCard/WebsiteCard.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_c = WebsiteCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsiteCard);\nvar _c;\n$RefreshReg$(_c, \"WebsiteCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJzaXRlQ2FyZC9XZWJzaXRlQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBNkI7QUFFa0M7QUFFcEI7QUFFRDtBQUNLO0FBRS9DLElBQU1NLFdBQVcsR0FBRyxnQkFBNEI7UUFBekJDLElBQUksU0FBSkEsSUFBSSxtQkFBRUMsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLEVBQUU7SUFDdkMsSUFBUUMsS0FBSyxHQUFnRUYsSUFBSSxDQUF6RUUsS0FBSyxFQUFFQyxPQUFPLEdBQXVESCxJQUFJLENBQWxFRyxPQUFPLEVBQUVDLElBQUksR0FBaURKLElBQUksQ0FBekRJLElBQUksRUFBRUMsSUFBSSxHQUEyQ0wsSUFBSSxDQUFuREssSUFBSSxFQUFFQyxNQUFNLEdBQW1DTixJQUFJLENBQTdDTSxNQUFNLEVBQUVDLFVBQVUsR0FBdUJQLElBQUksQ0FBckNPLFVBQVUsY0FBdUJQLElBQUksQ0FBekJRLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxLQUFLO0lBQ3hFLHVCQUFpQ1AsT0FBTyxDQUFoQ1EsZUFBZSxFQUFmQSxlQUFlLGlDQUFHLEVBQUU7SUFFNUIsSUFBTUMsUUFBUSxHQUFHLEVBQUU7SUFFbkIsSUFBSSxDQUFDRCxlQUFlLENBQUNFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN2Q0QsUUFBUSxDQUFDSixNQUFNLEdBQUdBLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDRyxlQUFlLENBQUNFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNyQ0QsUUFBUSxDQUFDTCxJQUFJLEdBQUdBLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDSSxlQUFlLENBQUNFLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUMzQ0QsUUFBUSxDQUFDSCxVQUFVLEdBQUdBLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSUssYUFBYSxHQUFHZCwwRUFBZTtJQUVuQyxJQUFJVSxRQUFRLEVBQUU7UUFDWkksYUFBYSxHQUFHLEVBQUMsQ0FBbUJkLE1BQXFCLENBQXRDYyxhQUFhLEVBQUMsR0FBQyxDQUF3QixRQUF0QmQsZ0ZBQXFCLENBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQscUJBQ0UsOERBQUNpQixLQUFHO1FBQUNDLFNBQVMsRUFBRUosYUFBYTs7WUFDMUJKLFFBQVEsa0JBQUksOERBQUNYLG9EQUFRO2dCQUFDb0IsWUFBVSxFQUFDLGFBQWE7Ozs7O3FCQUFHOzBCQUNsRCw4REFBQ3hCLGtEQUFJO2dCQUFDeUIsSUFBSSxFQUFFeEIsNERBQWMsQ0FBQ1UsSUFBSSxDQUFDOzBCQUM5Qiw0RUFBQ2UsR0FBQzs4QkFDQSw0RUFBQ0MsSUFBRTt3QkFDREosU0FBUyxFQUFFbEIsK0VBQW9CO3dCQUMvQndCLHVCQUF1QixFQUFFOzRCQUN2QkMsTUFBTSxFQUFFckIsS0FBSzt5QkFDZDs7Ozs7NkJBQ0Q7Ozs7O3lCQUNBOzs7OztxQkFDQzswQkFDUCw4REFBQ2EsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEVBQUU7O2tDQUNmLDhEQUFDRyxHQUFDO3dCQUFDSCxTQUFTLEVBQUMsRUFBRTt3QkFBQ0UsSUFBSSxFQUFDLCtCQUErQjs7Ozs7NkJBQUs7a0NBQ3pELDhEQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzswQ0FDOUIsOERBQUN2QixrREFBSTtnQ0FBQ3lCLElBQUksRUFBRXhCLDREQUFjLENBQUNVLElBQUksQ0FBQzswQ0FDOUIsNEVBQUNlLEdBQUM7OENBQ0EsNEVBQUNLLEtBQUc7d0NBQUNDLEdBQUcsRUFBQyx1RUFBdUU7d0NBQzNFQyxHQUFHLEVBQUMsUUFBUTt3Q0FBQ1YsU0FBUyxFQUFDLE9BQU87Ozs7OzZDQUFPOzs7Ozt5Q0FDeEM7Ozs7O3FDQUNDOzBDQUNQLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsU0FBUzs7a0RBQUMsOERBQUNHLEdBQUM7d0NBQUNILFNBQVMsRUFBQyxFQUFFO3dDQUFDRSxJQUFJLEVBQUMsK0JBQStCOzs7Ozs2Q0FDekU7a0RBQ0YsOERBQUNILEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxNQUFNOzswREFBQyw4REFBQ0csR0FBQztnREFBQ0gsU0FBUyxFQUFDLEVBQUU7Z0RBQUNFLElBQUksRUFBQywrQkFBK0I7MERBQ3hFLDRFQUFDRSxJQUFFOzhEQUFDLGdCQUFjOzs7Ozt5REFBSzs7Ozs7cURBQ3JCOzBEQUFBLDhEQUFDRCxHQUFDO2dEQUFDSCxTQUFTLEVBQUMsZUFBZTtnREFBQ1csTUFBTSxFQUFDLFFBQVE7Z0RBQ3pDVCxJQUFJLEVBQUMsZ0NBQWdDO2dEQUFDVSxJQUFJLEVBQUMsUUFBUTswREFBQyxZQUFVOzs7OztxREFBSTs7Ozs7OzZDQUNuRTs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7Ozs7OztxQkFFRjswQkFDTiw4REFBQ2hDLDJEQUFRO2dCQUFDb0IsU0FBUyxFQUFFbEIsa0ZBQXVCO2VBQU1ZLFFBQVE7Ozs7cUJBQUk7WUFDN0RQLE9BQU8sa0JBQ04sOERBQUNZLEtBQUc7Z0JBQ0ZDLFNBQVMsRUFBRWxCLGlGQUFzQjtnQkFDakN3Qix1QkFBdUIsRUFBRTtvQkFDdkJDLE1BQU0sRUFBRTVCLDZEQUFlLENBQUNRLE9BQU8sQ0FBQztpQkFDakM7Ozs7O3FCQUNEOzs7Ozs7YUFFQSxDQUNOO0FBQ0osQ0FBQztBQXBFS0osS0FBQUEsV0FBVztBQXNFakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZWJzaXRlQ2FyZC9XZWJzaXRlQ2FyZC5qcz9kNTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IHBvc3RQYXRoQnlTbHVnLCBzYW5pdGl6ZUV4Y2VycHQgfSBmcm9tICdsaWIvd2Vic2l0ZXMnO1xuXG5pbXBvcnQgTWV0YWRhdGEgZnJvbSAnY29tcG9uZW50cy9NZXRhZGF0YSc7XG5cbmltcG9ydCB7IEZhTWFwUGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dlYnNpdGVDYXJkLm1vZHVsZS5zY3NzJztcblxuY29uc3QgV2Vic2l0ZUNhcmQgPSAoeyBwb3N0LCBvcHRpb25zID0ge30gfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBleGNlcnB0LCBzbHVnLCBkYXRlLCBhdXRob3IsIGNhdGVnb3JpZXMsIGlzU3RpY2t5ID0gZmFsc2UgfSA9IHBvc3Q7XG4gIGNvbnN0IHsgZXhjbHVkZU1ldGFkYXRhID0gW10gfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgbWV0YWRhdGEgPSB7fTtcblxuICBpZiAoIWV4Y2x1ZGVNZXRhZGF0YS5pbmNsdWRlcygnYXV0aG9yJykpIHtcbiAgICBtZXRhZGF0YS5hdXRob3IgPSBhdXRob3I7XG4gIH1cblxuICBpZiAoIWV4Y2x1ZGVNZXRhZGF0YS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgbWV0YWRhdGEuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBpZiAoIWV4Y2x1ZGVNZXRhZGF0YS5pbmNsdWRlcygnY2F0ZWdvcmllcycpKSB7XG4gICAgbWV0YWRhdGEuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gIH1cblxuICBsZXQgcG9zdENhcmRTdHlsZSA9IHN0eWxlcy5wb3N0Q2FyZDtcblxuICBpZiAoaXNTdGlja3kpIHtcbiAgICBwb3N0Q2FyZFN0eWxlID0gYCR7cG9zdENhcmRTdHlsZX0gJHtzdHlsZXMucG9zdENhcmRTdGlja3l9YDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Bvc3RDYXJkU3R5bGV9PlxuICAgICAge2lzU3RpY2t5ICYmIDxGYU1hcFBpbiBhcmlhLWxhYmVsPVwiU3RpY2t5IFBvc3RcIiAvPn1cbiAgICAgIDxMaW5rIGhyZWY9e3Bvc3RQYXRoQnlTbHVnKHNsdWcpfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGgzXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q2FyZFRpdGxlfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiB0aXRsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9wcmV2aW91c193b3JrL3JvZ2Vycy1yb29maW5nXCI+PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbWFnZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3RQYXRoQnlTbHVnKHNsdWcpfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmplZmZtYXN0ZXJzb25qci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvcm9nZXJzLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIj48L2ltZz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9wcmV2aW91c193b3JrL3JvZ2Vycy1yb29maW5nXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9wcmV2aW91c193b3JrL3JvZ2Vycy1yb29maW5nXCI+XG4gICAgICAgICAgICAgIDxoMz5Sb2dlcnMgUm9vZmluZzwvaDM+XG4gICAgICAgICAgICA8L2E+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tb2RlbFwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnJvZ2Vyc3Jvb2ZpbmcuY29tL1wiIHJvbGU9XCJidXR0b25cIj5WaXNpdCBTaXRlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZXRhZGF0YSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q2FyZE1ldGFkYXRhfSB7Li4ubWV0YWRhdGF9IC8+XG4gICAgICB7ZXhjZXJwdCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q2FyZENvbnRlbnR9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogc2FuaXRpemVFeGNlcnB0KGV4Y2VycHQpLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2Vic2l0ZUNhcmQ7XG4iXSwibmFtZXMiOlsiTGluayIsInBvc3RQYXRoQnlTbHVnIiwic2FuaXRpemVFeGNlcnB0IiwiTWV0YWRhdGEiLCJGYU1hcFBpbiIsInN0eWxlcyIsIldlYnNpdGVDYXJkIiwicG9zdCIsIm9wdGlvbnMiLCJ0aXRsZSIsImV4Y2VycHQiLCJzbHVnIiwiZGF0ZSIsImF1dGhvciIsImNhdGVnb3JpZXMiLCJpc1N0aWNreSIsImV4Y2x1ZGVNZXRhZGF0YSIsIm1ldGFkYXRhIiwiaW5jbHVkZXMiLCJwb3N0Q2FyZFN0eWxlIiwicG9zdENhcmQiLCJwb3N0Q2FyZFN0aWNreSIsImRpdiIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJocmVmIiwiYSIsImgzIiwicG9zdENhcmRUaXRsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaW1nIiwic3JjIiwiYWx0IiwidGFyZ2V0Iiwicm9sZSIsInBvc3RDYXJkTWV0YWRhdGEiLCJwb3N0Q2FyZENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/WebsiteCard/WebsiteCard.js\n"));

/***/ })

});