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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/styles */ \"./utils/styles.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var title = param.title, children = param.children, description = param.description;\n    _s();\n    var classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__.Store), state = ref.state, dispatch = ref.dispatch;\n    var darkMode = state.darkMode;\n    var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.createTheme)({\n        typography: {\n            h1: {\n                fontSize: '1.6rem',\n                fontWeight: 400,\n                margin: '1rem 0'\n            },\n            h2: {\n                fontSize: '1.4rem',\n                fontWeight: 400,\n                margin: '1rem 0'\n            }\n        },\n        palette: {\n            type: darkMode ? 'dark' : 'light',\n            primary: {\n                main: '#febd69'\n            },\n            secondary: {\n                main: '#208080'\n            }\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? \"\".concat(title, \" - Next Amazona\") : 'Next Amazona'\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n                theme: theme,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                        position: \"static\",\n                        className: classes.navbar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                            className: classes.brand,\n                                            children: \"AMAZONA\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: classes.grow\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/cart\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                        children: \"Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/login\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        className: classes.main,\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: classes.footer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                            children: \"All rights reserved. Next Amazona.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomasvv/code/next-app-test/my-app-appibase/components/Layout.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this));\n};\n_s(Layout, \"y2nWsE+b/U55QEntHAtt1e9Kz04=\", false, function() {\n    return [\n        _utils_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQsQ0FBQztHQTFEdUJTLE1BQU07O1FBQ1pGLHFEQUFTOzs7S0FESEUsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQXBwQmFyLFxuICBUb29sYmFyLFxuICBUeXBvZ3JhcGh5LFxuICBjcmVhdGVUaGVtZSxcbiAgVGhlbWVQcm92aWRlcixcbiAgQ3NzQmFzZWxpbmUsXG4gIFN3aXRjaCxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDb250YWluZXIsIExpbmsgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi4vdXRpbHMvc3R5bGVzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vdXRpbHMvU3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyB0aXRsZSwgY2hpbGRyZW4sIGRlc2NyaXB0aW9uIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XG4gIGNvbnN0IHsgZGFya01vZGUgfSA9IHN0YXRlO1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICBoMToge1xuICAgICAgICBmb250U2l6ZTogJzEuNnJlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICAgIH0sXG4gICAgICBoMjoge1xuICAgICAgICBmb250U2l6ZTogJzEuNHJlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYWxldHRlOiB7XG4gICAgICB0eXBlOiBkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46ICcjZmViZDY5JyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbWFpbjogJyMyMDgwODAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyBgJHt0aXRsZX0gLSBOZXh0IEFtYXpvbmFgIDogJ05leHQgQW1hem9uYSd9PC90aXRsZT5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufT48L21ldGE+fVxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyfT5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5icmFuZH0+QU1BWk9OQTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PjwvZGl2PlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY2FydFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TGluaz5DYXJ0PC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxMaW5rPkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT57Y2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+QWxsIHJpZ2h0cyByZXNlcnZlZC4gTmV4dCBBbWF6b25hLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIk5leHRMaW5rIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlN3aXRjaCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1c2VTdHlsZXMiLCJTdG9yZSIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJkZXNjcmlwdGlvbiIsImNsYXNzZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZGFya01vZGUiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImgyIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImRpdiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwibmF2YmFyIiwiaHJlZiIsInBhc3NIcmVmIiwiYnJhbmQiLCJncm93IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});