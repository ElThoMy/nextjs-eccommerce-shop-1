"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/styles */ \"./utils/styles.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var title = param.title, children = param.children, description = param.description;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__.Store), state = ref.state, dispatch = ref.dispatch;\n    var darkMode = state.darkMode;\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.createTheme)({\n        typography: {\n            h1: {\n                fontSize: '1.6rem',\n                fontWeight: 400,\n                margin: '1rem 0'\n            },\n            h2: {\n                fontSize: '1.4rem',\n                fontWeight: 400,\n                margin: '1rem 0'\n            }\n        },\n        palette: {\n            type: darkMode ? 'dark' : 'light',\n            primary: {\n                main: '#febd69'\n            },\n            secondary: {\n                main: '#208080'\n            }\n        }\n    });\n    var classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var darkModeChangeHandler = function() {\n        dispatch({\n            type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? \"\".concat(title, \" - Next Amazona\") : 'Next Amazona'\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 51,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n                theme: theme,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                        position: \"static\",\n                        className: classes.navbar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                            className: classes.brand,\n                                            children: \"AMAZONA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: classes.grow\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Switch, {\n                                            checked: darkMode,\n                                            onChange: darkModeChangeHandler\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/cart\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                                children: \"Cart\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                                children: \"Login\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        className: classes.main,\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: classes.footer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                            children: \"All rights reserved. Next Amazona.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this));\n};\n_s(Layout, \"EF2oHeQ4X9PTzYFBt2WytnUZp1I=\", false, function() {\n    return [\n        _utils_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7NENBQUNDLFFBQVE7a0lBQzdCaEMsK0NBQUk7MERBQUMsQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FLbEJELG9EQUFTO3dCQUFDOEIsU0FBUyxFQUFFUCxPQUFPLENBQUNGLElBQUk7a0NBQUdmLFFBQVE7Ozs7OztnR0FDNUNnQyxDQUFNO3dCQUFDUixTQUFTLEVBQUVQLE9BQU8sQ0FBQ2UsTUFBTTs4R0FDOUIzQyxxREFBVTtzQ0FBQyxDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQsQ0FBQztHQW5FdUJTLE1BQU07O1FBMEJaRixxREFBUzs7O0tBMUJIRSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBBcHBCYXIsXG4gIFRvb2xiYXIsXG4gIFR5cG9ncmFwaHksXG4gIGNyZWF0ZVRoZW1lLFxuICBUaGVtZVByb3ZpZGVyLFxuICBDc3NCYXNlbGluZSxcbiAgU3dpdGNoLFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IENvbnRhaW5lciwgTGluayB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi91dGlscy9zdHlsZXMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi91dGlscy9TdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiwgZGVzY3JpcHRpb24gfSkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XG4gIGNvbnN0IHsgZGFya01vZGUgfSA9IHN0YXRlO1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICBoMToge1xuICAgICAgICBmb250U2l6ZTogJzEuNnJlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICAgIH0sXG4gICAgICBoMjoge1xuICAgICAgICBmb250U2l6ZTogJzEuNHJlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYWxldHRlOiB7XG4gICAgICB0eXBlOiBkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46ICcjZmViZDY5JyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbWFpbjogJyMyMDgwODAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBkYXJrTW9kZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBkYXJrTW9kZSA/ICdEQVJLX01PREVfT0ZGJyA6ICdEQVJLX01PREVfT04nIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IGAke3RpdGxlfSAtIE5leHQgQW1hem9uYWAgOiAnTmV4dCBBbWF6b25hJ308L3RpdGxlPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259PjwvbWV0YT59XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCJcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJyYW5kfT5BTUFaT05BPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17ZGFya01vZGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhcmtNb2RlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgPjwvU3dpdGNoPlxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9jYXJ0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPExpbms+Q2FydDwvTGluaz5cbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8TGluaz5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5BbGwgcmlnaHRzIHJlc2VydmVkLiBOZXh0IEFtYXpvbmEuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTmV4dExpbmsiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiU3dpdGNoIiwiQ29udGFpbmVyIiwiTGluayIsInVzZVN0eWxlcyIsIlN0b3JlIiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImRlc2NyaXB0aW9uIiwic3RhdGUiLCJkaXNwYXRjaCIsImRhcmtNb2RlIiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJoMiIsInBhbGV0dGUiLCJ0eXBlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJjbGFzc2VzIiwiZGFya01vZGVDaGFuZ2VIYW5kbGVyIiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJocmVmIiwicGFzc0hyZWYiLCJicmFuZCIsImdyb3ciLCJjaGVja2VkIiwib25DaGFuZ2UiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});