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

/***/ "./src/templates/archive.js":
/*!**********************************!*\
  !*** ./src/templates/archive.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TemplateArchive; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var lib_json_ld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/json-ld */ \"./src/lib/json-ld.js\");\n/* harmony import */ var lib_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/site */ \"./src/lib/site.js\");\n/* harmony import */ var hooks_use_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/use-site */ \"./src/hooks/use-site.js\");\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Section */ \"./src/components/Section/index.js\");\n/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Container */ \"./src/components/Container/index.js\");\n/* harmony import */ var components_SectionTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/SectionTitle */ \"./src/components/SectionTitle/index.js\");\n/* harmony import */ var components_PostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/PostCard */ \"./src/components/PostCard/index.js\");\n/* harmony import */ var components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Pagination/Pagination */ \"./src/components/Pagination/Pagination.js\");\n/* harmony import */ var styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/templates/Archive.module.scss */ \"./src/styles/templates/Archive.module.scss\");\n/* harmony import */ var styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar DEFAULT_POST_OPTIONS = {};\nfunction TemplateArchive(param) {\n    var _title = param.title, title = _title === void 0 ? \"Archive\" : _title, Title = param.Title, posts = param.posts, _postOptions = param.postOptions, postOptions = _postOptions === void 0 ? DEFAULT_POST_OPTIONS : _postOptions, slug = param.slug, metadata = param.metadata, pagination = param.pagination;\n    var _this = this;\n    _s();\n    var ref = (0,hooks_use_site__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), tmp = ref.metadata, siteMetadata = tmp === void 0 ? {} : tmp;\n    if (true) {\n        metadata.title = \"\".concat(title, \" - \").concat(siteMetadata.title);\n        metadata.og.title = metadata.title;\n        metadata.twitter.title = metadata.title;\n    }\n    var helmetSettings = (0,lib_site__WEBPACK_IMPORTED_MODULE_3__.helmetSettingsFromMetadata)(metadata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({}, helmetSettings), void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lib_json_ld__WEBPACK_IMPORTED_MODULE_2__.WebpageJsonLd, {\n                title: title,\n                description: metadata.description,\n                siteTitle: siteMetadata.title,\n                slug: slug\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: Title || title\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        metadata.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_13___default().archiveDescription),\n                            dangerouslySetInnerHTML: {\n                                __html: metadata.description\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Section__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Container__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_SectionTitle__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        Array.isArray(posts) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: (styles_templates_Archive_module_scss__WEBPACK_IMPORTED_MODULE_13___default().posts),\n                                    children: posts.map(function(post) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_PostCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                post: post,\n                                                options: postOptions\n                                            }, void 0, false, {\n                                                fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 23\n                                            }, _this)\n                                        }, post.slug, false, {\n                                            fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                pagination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.currentPage,\n                                    pagesCount: pagination === null || pagination === void 0 ? void 0 : pagination.pagesCount,\n                                    basePath: pagination === null || pagination === void 0 ? void 0 : pagination.basePath\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/portfolio/src/templates/archive.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(TemplateArchive, \"xV+Gr5q4TqDMMtGoe+s72KgBEqA=\", false, function() {\n    return [\n        hooks_use_site__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = TemplateArchive;\nvar _c;\n$RefreshReg$(_c, \"TemplateArchive\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtvQ0FDVGlDLFdBQVcsRUFBRXZCLFVBQVUsYUFBVkEsVUFBVSxXQUFhLEdBQXZCQSxLQUFBQSxDQUF1QixHQUF2QkEsVUFBVSxDQUFFdUIsV0FBVztvQ0FDcENDLFVBQVUsRUFBRXhCLFVBQVUsYUFBVkEsVUFBVSxXQUFZLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsVUFBVSxDQUFFd0IsVUFBVTtvQ0FDbENDLFFBQVEsRUFBRXpCLFVBQVUsYUFBVkEsVUFBVSxXQUFVLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsVUFBVSxDQUFFeUIsUUFBUTs7Ozs7d0NBQzlCOzt3Q0FFSDs7Ozs7O3dCQUVLOzs7OztvQkFDSjs7Ozs7O1lBQ0gsQ0FDVDtBQUNKLENBQUM7R0FsRXVCaEMsZUFBZTs7UUFTR1Ysc0RBQU87OztBQVR6QlUsS0FBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdGVtcGxhdGVzL2FyY2hpdmUuanM/NWU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgeyBXZWJwYWdlSnNvbkxkIH0gZnJvbSAnbGliL2pzb24tbGQnO1xuaW1wb3J0IHsgaGVsbWV0U2V0dGluZ3NGcm9tTWV0YWRhdGEgfSBmcm9tICdsaWIvc2l0ZSc7XG5pbXBvcnQgdXNlU2l0ZSBmcm9tICdob29rcy91c2Utc2l0ZSc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb21wb25lbnRzL1NlY3Rpb24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvblRpdGxlJztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICdjb21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvdGVtcGxhdGVzL0FyY2hpdmUubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBERUZBVUxUX1BPU1RfT1BUSU9OUyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZW1wbGF0ZUFyY2hpdmUoe1xuICB0aXRsZSA9ICdBcmNoaXZlJyxcbiAgVGl0bGUsXG4gIHBvc3RzLFxuICBwb3N0T3B0aW9ucyA9IERFRkFVTFRfUE9TVF9PUFRJT05TLFxuICBzbHVnLFxuICBtZXRhZGF0YSxcbiAgcGFnaW5hdGlvbixcbn0pIHtcbiAgY29uc3QgeyBtZXRhZGF0YTogc2l0ZU1ldGFkYXRhID0ge30gfSA9IHVzZVNpdGUoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuV09SRFBSRVNTX1BMVUdJTl9TRU8gIT09IHRydWUpIHtcbiAgICBtZXRhZGF0YS50aXRsZSA9IGAke3RpdGxlfSAtICR7c2l0ZU1ldGFkYXRhLnRpdGxlfWA7XG4gICAgbWV0YWRhdGEub2cudGl0bGUgPSBtZXRhZGF0YS50aXRsZTtcbiAgICBtZXRhZGF0YS50d2l0dGVyLnRpdGxlID0gbWV0YWRhdGEudGl0bGU7XG4gIH1cblxuICBjb25zdCBoZWxtZXRTZXR0aW5ncyA9IGhlbG1ldFNldHRpbmdzRnJvbU1ldGFkYXRhKG1ldGFkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVsbWV0IHsuLi5oZWxtZXRTZXR0aW5nc30gLz5cblxuICAgICAgPFdlYnBhZ2VKc29uTGQgdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17bWV0YWRhdGEuZGVzY3JpcHRpb259IHNpdGVUaXRsZT17c2l0ZU1ldGFkYXRhLnRpdGxlfSBzbHVnPXtzbHVnfSAvPlxuXG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxoMT57VGl0bGUgfHwgdGl0bGV9PC9oMT5cbiAgICAgICAgICB7bWV0YWRhdGEuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXJjaGl2ZURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogbWV0YWRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTZWN0aW9uVGl0bGU+UG9zdHM8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShwb3N0cykgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBvcHRpb25zPXtwb3N0T3B0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtwYWdpbmF0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2luYXRpb24/LmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgICAgcGFnZXNDb3VudD17cGFnaW5hdGlvbj8ucGFnZXNDb3VudH1cbiAgICAgICAgICAgICAgICAgIGJhc2VQYXRoPXtwYWdpbmF0aW9uPy5iYXNlUGF0aH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVsbWV0IiwiV2VicGFnZUpzb25MZCIsImhlbG1ldFNldHRpbmdzRnJvbU1ldGFkYXRhIiwidXNlU2l0ZSIsIkxheW91dCIsIkhlYWRlciIsIlNlY3Rpb24iLCJDb250YWluZXIiLCJTZWN0aW9uVGl0bGUiLCJQb3N0Q2FyZCIsIlBhZ2luYXRpb24iLCJzdHlsZXMiLCJERUZBVUxUX1BPU1RfT1BUSU9OUyIsIlRlbXBsYXRlQXJjaGl2ZSIsInRpdGxlIiwiVGl0bGUiLCJwb3N0cyIsInBvc3RPcHRpb25zIiwic2x1ZyIsIm1ldGFkYXRhIiwicGFnaW5hdGlvbiIsInNpdGVNZXRhZGF0YSIsInByb2Nlc3MiLCJlbnYiLCJXT1JEUFJFU1NfUExVR0lOX1NFTyIsIm9nIiwidHdpdHRlciIsImhlbG1ldFNldHRpbmdzIiwiZGVzY3JpcHRpb24iLCJzaXRlVGl0bGUiLCJoMSIsInAiLCJjbGFzc05hbWUiLCJhcmNoaXZlRGVzY3JpcHRpb24iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkFycmF5IiwiaXNBcnJheSIsInVsIiwibWFwIiwicG9zdCIsImxpIiwib3B0aW9ucyIsImN1cnJlbnRQYWdlIiwicGFnZXNDb3VudCIsImJhc2VQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/templates/archive.js\n"));

/***/ })

});