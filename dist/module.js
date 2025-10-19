/* [create-plugin] version: 6.1.1 */
          /* [create-plugin] plugin: pehlione-monitoring-datasource@1.0.0 */
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["@grafana/data","@grafana/runtime","@grafana/ui","module","react"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_amd_module__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/ConfigEditor.tsx":
/*!*************************************!*\
  !*** ./components/ConfigEditor.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nfunction ConfigEditor(props) {\n    const { onOptionsChange, options } = props;\n    const { jsonData, secureJsonFields, secureJsonData } = options;\n    const onPathChange = (event)=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            jsonData: _object_spread_props(_object_spread({}, jsonData), {\n                path: event.target.value\n            })\n        }));\n    };\n    // Secure field (only sent to the backend)\n    const onAPIKeyChange = (event)=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            secureJsonData: {\n                apiKey: event.target.value\n            }\n        }));\n    };\n    const onResetAPIKey = ()=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            secureJsonFields: _object_spread_props(_object_spread({}, options.secureJsonFields), {\n                apiKey: false\n            }),\n            secureJsonData: _object_spread_props(_object_spread({}, options.secureJsonData), {\n                apiKey: ''\n            })\n        }));\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"Path\",\n        labelWidth: 14,\n        interactive: true,\n        tooltip: 'Json field returned to frontend'\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {\n        id: \"config-editor-path\",\n        onChange: onPathChange,\n        value: jsonData.path,\n        placeholder: \"Enter the path, e.g. /api/v1\",\n        width: 40\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"API Key\",\n        labelWidth: 14,\n        interactive: true,\n        tooltip: 'Secure json field (backend only)'\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SecretInput, {\n        required: true,\n        id: \"config-editor-api-key\",\n        isConfigured: secureJsonFields.apiKey,\n        value: secureJsonData === null || secureJsonData === void 0 ? void 0 : secureJsonData.apiKey,\n        placeholder: \"Enter your API key\",\n        width: 40,\n        onReset: onResetAPIKey,\n        onChange: onAPIKeyChange\n    })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ21CO0FBTXZELFNBQVNJLGFBQWFDLEtBQVk7SUFDdkMsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtJQUNyQyxNQUFNLEVBQUVHLFFBQVEsRUFBRUMsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRSxHQUFHSDtJQUV2RCxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCTixnQkFBZ0Isd0NBQ1hDO1lBQ0hDLFVBQVUsd0NBQ0xBO2dCQUNISyxNQUFNRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7OztJQUc5QjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNQyxpQkFBaUIsQ0FBQ0o7UUFDdEJOLGdCQUFnQix3Q0FDWEM7WUFDSEcsZ0JBQWdCO2dCQUNkTyxRQUFRTCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7WUFDNUI7O0lBRUo7SUFFQSxNQUFNRyxnQkFBZ0I7UUFDcEJaLGdCQUFnQix3Q0FDWEM7WUFDSEUsa0JBQWtCLHdDQUNiRixRQUFRRSxnQkFBZ0I7Z0JBQzNCUSxRQUFROztZQUVWUCxnQkFBZ0Isd0NBQ1hILFFBQVFHLGNBQWM7Z0JBQ3pCTyxRQUFROzs7SUFHZDtJQUVBLHFCQUNFLHdJQUNFLDJEQUFDaEIsb0RBQVdBO1FBQUNrQixPQUFNO1FBQU9DLFlBQVk7UUFBSUMsYUFBQUE7UUFBWUMsU0FBUztxQkFDN0QsMkRBQUNwQiw4Q0FBS0E7UUFDSnFCLElBQUc7UUFDSEMsVUFBVWI7UUFDVkksT0FBT1AsU0FBU0ssSUFBSTtRQUNwQlksYUFBWTtRQUNaQyxPQUFPO3VCQUdYLDJEQUFDekIsb0RBQVdBO1FBQUNrQixPQUFNO1FBQVVDLFlBQVk7UUFBSUMsYUFBQUE7UUFBWUMsU0FBUztxQkFDaEUsMkRBQUNuQixvREFBV0E7UUFDVndCLFVBQUFBO1FBQ0FKLElBQUc7UUFDSEssY0FBY25CLGlCQUFpQlEsTUFBTTtRQUNyQ0YsS0FBSyxFQUFFTCwyQkFBQUEscUNBQUFBLGVBQWdCTyxNQUFNO1FBQzdCUSxhQUFZO1FBQ1pDLE9BQU87UUFDUEcsU0FBU1g7UUFDVE0sVUFBVVI7O0FBS3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVobGlvbmUtbW9uaXRvcmluZy1kYXRhc291cmNlLy4vY29tcG9uZW50cy9Db25maWdFZGl0b3IudHN4P2JlZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElucHV0LCBTZWNyZXRJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IE15RGF0YVNvdXJjZU9wdGlvbnMsIE15U2VjdXJlSnNvbkRhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8TXlEYXRhU291cmNlT3B0aW9ucywgTXlTZWN1cmVKc29uRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIENvbmZpZ0VkaXRvcihwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSA9IHByb3BzO1xuICBjb25zdCB7IGpzb25EYXRhLCBzZWN1cmVKc29uRmllbGRzLCBzZWN1cmVKc29uRGF0YSB9ID0gb3B0aW9ucztcblxuICBjb25zdCBvblBhdGhDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgb25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBqc29uRGF0YToge1xuICAgICAgICAuLi5qc29uRGF0YSxcbiAgICAgICAgcGF0aDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTZWN1cmUgZmllbGQgKG9ubHkgc2VudCB0byB0aGUgYmFja2VuZClcbiAgY29uc3Qgb25BUElLZXlDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgb25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBzZWN1cmVKc29uRGF0YToge1xuICAgICAgICBhcGlLZXk6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25SZXNldEFQSUtleSA9ICgpID0+IHtcbiAgICBvbk9wdGlvbnNDaGFuZ2Uoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHtcbiAgICAgICAgLi4ub3B0aW9ucy5zZWN1cmVKc29uRmllbGRzLFxuICAgICAgICBhcGlLZXk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHNlY3VyZUpzb25EYXRhOiB7XG4gICAgICAgIC4uLm9wdGlvbnMuc2VjdXJlSnNvbkRhdGEsXG4gICAgICAgIGFwaUtleTogJycsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlBhdGhcIiBsYWJlbFdpZHRoPXsxNH0gaW50ZXJhY3RpdmUgdG9vbHRpcD17J0pzb24gZmllbGQgcmV0dXJuZWQgdG8gZnJvbnRlbmQnfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9XCJjb25maWctZWRpdG9yLXBhdGhcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvblBhdGhDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2pzb25EYXRhLnBhdGh9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgcGF0aCwgZS5nLiAvYXBpL3YxXCJcbiAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgIC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQVBJIEtleVwiIGxhYmVsV2lkdGg9ezE0fSBpbnRlcmFjdGl2ZSB0b29sdGlwPXsnU2VjdXJlIGpzb24gZmllbGQgKGJhY2tlbmQgb25seSknfT5cbiAgICAgICAgPFNlY3JldElucHV0XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBpZD1cImNvbmZpZy1lZGl0b3ItYXBpLWtleVwiXG4gICAgICAgICAgaXNDb25maWd1cmVkPXtzZWN1cmVKc29uRmllbGRzLmFwaUtleX1cbiAgICAgICAgICB2YWx1ZT17c2VjdXJlSnNvbkRhdGE/LmFwaUtleX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgQVBJIGtleVwiXG4gICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgIG9uUmVzZXQ9e29uUmVzZXRBUElLZXl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQVBJS2V5Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIklubGluZUZpZWxkIiwiSW5wdXQiLCJTZWNyZXRJbnB1dCIsIkNvbmZpZ0VkaXRvciIsInByb3BzIiwib25PcHRpb25zQ2hhbmdlIiwib3B0aW9ucyIsImpzb25EYXRhIiwic2VjdXJlSnNvbkZpZWxkcyIsInNlY3VyZUpzb25EYXRhIiwib25QYXRoQ2hhbmdlIiwiZXZlbnQiLCJwYXRoIiwidGFyZ2V0IiwidmFsdWUiLCJvbkFQSUtleUNoYW5nZSIsImFwaUtleSIsIm9uUmVzZXRBUElLZXkiLCJsYWJlbCIsImxhYmVsV2lkdGgiLCJpbnRlcmFjdGl2ZSIsInRvb2x0aXAiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ3aWR0aCIsInJlcXVpcmVkIiwiaXNDb25maWd1cmVkIiwib25SZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConfigEditor.tsx\n\n}");

/***/ }),

/***/ "./components/QueryEditor.tsx":
/*!************************************!*\
  !*** ./components/QueryEditor.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nfunction QueryEditor({ query, onChange, onRunQuery }) {\n    const onQueryTextChange = (event)=>{\n        onChange(_object_spread_props(_object_spread({}, query), {\n            queryText: event.target.value\n        }));\n    };\n    const onConstantChange = (event)=>{\n        onChange(_object_spread_props(_object_spread({}, query), {\n            constant: parseFloat(event.target.value)\n        }));\n        // executes the query\n        onRunQuery();\n    };\n    const { queryText, constant } = query;\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        gap: 0\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"Constant\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {\n        id: \"query-editor-constant\",\n        onChange: onConstantChange,\n        value: constant,\n        width: 8,\n        type: \"number\",\n        step: \"0.1\"\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"Query Text\",\n        labelWidth: 16,\n        tooltip: \"Not used yet\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {\n        id: \"query-editor-query-text\",\n        onChange: onQueryTextChange,\n        value: queryText || '',\n        required: true,\n        placeholder: \"Enter a query\"\n    })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDYTtBQU9qRCxTQUFTSSxZQUFZLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQVM7SUFDaEUsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCSCxTQUFTLHdDQUFLRDtZQUFPSyxXQUFXRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7O0lBQ3BEO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNKO1FBQ3hCSCxTQUFTLHdDQUFLRDtZQUFPUyxVQUFVQyxXQUFXTixNQUFNRSxNQUFNLENBQUNDLEtBQUs7O1FBQzVELHFCQUFxQjtRQUNyQkw7SUFDRjtJQUVBLE1BQU0sRUFBRUcsU0FBUyxFQUFFSSxRQUFRLEVBQUUsR0FBR1Q7SUFFaEMscUJBQ0UsMkRBQUNGLDhDQUFLQTtRQUFDYSxLQUFLO3FCQUNWLDJEQUFDZixvREFBV0E7UUFBQ2dCLE9BQU07cUJBQ2pCLDJEQUFDZiw4Q0FBS0E7UUFDSmdCLElBQUc7UUFDSFosVUFBVU87UUFDVkQsT0FBT0U7UUFDUEssT0FBTztRQUNQQyxNQUFLO1FBQ0xDLE1BQUs7dUJBR1QsMkRBQUNwQixvREFBV0E7UUFBQ2dCLE9BQU07UUFBYUssWUFBWTtRQUFJQyxTQUFRO3FCQUN0RCwyREFBQ3JCLDhDQUFLQTtRQUNKZ0IsSUFBRztRQUNIWixVQUFVRTtRQUNWSSxPQUFPRixhQUFhO1FBQ3BCYyxVQUFBQTtRQUNBQyxhQUFZOztBQUt0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlaGxpb25lLW1vbml0b3JpbmctZGF0YXNvdXJjZS8uL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4PzBhMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElucHV0LCBTdGFjayB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IE15RGF0YVNvdXJjZU9wdGlvbnMsIE15UXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPERhdGFTb3VyY2UsIE15UXVlcnksIE15RGF0YVNvdXJjZU9wdGlvbnM+O1xuXG5leHBvcnQgZnVuY3Rpb24gUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnkgfTogUHJvcHMpIHtcbiAgY29uc3Qgb25RdWVyeVRleHRDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcXVlcnlUZXh0OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Db25zdGFudENoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBjb25zdGFudDogcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpIH0pO1xuICAgIC8vIGV4ZWN1dGVzIHRoZSBxdWVyeVxuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBjb25zdCB7IHF1ZXJ5VGV4dCwgY29uc3RhbnQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGdhcD17MH0+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJDb25zdGFudFwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD1cInF1ZXJ5LWVkaXRvci1jb25zdGFudFwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ29uc3RhbnRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2NvbnN0YW50fVxuICAgICAgICAgIHdpZHRoPXs4fVxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHN0ZXA9XCIwLjFcIlxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5IFRleHRcIiBsYWJlbFdpZHRoPXsxNn0gdG9vbHRpcD1cIk5vdCB1c2VkIHlldFwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD1cInF1ZXJ5LWVkaXRvci1xdWVyeS10ZXh0XCJcbiAgICAgICAgICBvbkNoYW5nZT17b25RdWVyeVRleHRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5VGV4dCB8fCAnJ31cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBxdWVyeVwiXG4gICAgICAgIC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbmxpbmVGaWVsZCIsIklucHV0IiwiU3RhY2siLCJRdWVyeUVkaXRvciIsInF1ZXJ5Iiwib25DaGFuZ2UiLCJvblJ1blF1ZXJ5Iiwib25RdWVyeVRleHRDaGFuZ2UiLCJldmVudCIsInF1ZXJ5VGV4dCIsInRhcmdldCIsInZhbHVlIiwib25Db25zdGFudENoYW5nZSIsImNvbnN0YW50IiwicGFyc2VGbG9hdCIsImdhcCIsImxhYmVsIiwiaWQiLCJ3aWR0aCIsInR5cGUiLCJzdGVwIiwibGFiZWxXaWR0aCIsInRvb2x0aXAiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QueryEditor.tsx\n\n}");

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataSource: () => (/* binding */ DataSource)\n/* harmony export */ });\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ \"@grafana/runtime\");\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./types.ts\");\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nclass DataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.DataSourceWithBackend {\n    getDefaultQuery(_) {\n        return _types__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_QUERY;\n    }\n    applyTemplateVariables(query, scopedVars) {\n        return _object_spread_props(_object_spread({}, query), {\n            queryText: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)().replace(query.queryText, scopedVars)\n        });\n    }\n    filterQuery(query) {\n        // if no query has been provided, prevent the query from being executed\n        return !!query.queryText;\n    }\n    constructor(instanceSettings){\n        super(instanceSettings);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhc291cmNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lFO0FBRUg7QUFFL0QsTUFBTUcsbUJBQW1CSCxtRUFBcUJBO0lBS25ESSxnQkFBZ0JDLENBQVUsRUFBb0I7UUFDNUMsT0FBT0gsaURBQWFBO0lBQ3RCO0lBRUFJLHVCQUF1QkMsS0FBYyxFQUFFQyxVQUFzQixFQUFFO1FBQzdELE9BQU8sd0NBQ0ZEO1lBQ0hFLFdBQVdSLGdFQUFjQSxHQUFHUyxPQUFPLENBQUNILE1BQU1FLFNBQVMsRUFBRUQ7O0lBRXpEO0lBRUFHLFlBQVlKLEtBQWMsRUFBVztRQUNuQyx1RUFBdUU7UUFDdkUsT0FBTyxDQUFDLENBQUNBLE1BQU1FLFNBQVM7SUFDMUI7SUFsQkEsWUFBWUcsZ0JBQWlFLENBQUU7UUFDN0UsS0FBSyxDQUFDQTtJQUNSO0FBaUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVobGlvbmUtbW9uaXRvcmluZy1kYXRhc291cmNlLy4vZGF0YXNvdXJjZS50cz9lYWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBDb3JlQXBwLCBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQsIGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IE15UXVlcnksIE15RGF0YVNvdXJjZU9wdGlvbnMsIERFRkFVTFRfUVVFUlkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8TXlRdWVyeSwgTXlEYXRhU291cmNlT3B0aW9ucz4ge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxNeURhdGFTb3VyY2VPcHRpb25zPikge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFF1ZXJ5KF86IENvcmVBcHApOiBQYXJ0aWFsPE15UXVlcnk+IHtcbiAgICByZXR1cm4gREVGQVVMVF9RVUVSWTtcbiAgfVxuXG4gIGFwcGx5VGVtcGxhdGVWYXJpYWJsZXMocXVlcnk6IE15UXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVlcnksXG4gICAgICBxdWVyeVRleHQ6IGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZShxdWVyeS5xdWVyeVRleHQsIHNjb3BlZFZhcnMpLFxuICAgIH07XG4gIH1cblxuICBmaWx0ZXJRdWVyeShxdWVyeTogTXlRdWVyeSk6IGJvb2xlYW4ge1xuICAgIC8vIGlmIG5vIHF1ZXJ5IGhhcyBiZWVuIHByb3ZpZGVkLCBwcmV2ZW50IHRoZSBxdWVyeSBmcm9tIGJlaW5nIGV4ZWN1dGVkXG4gICAgcmV0dXJuICEhcXVlcnkucXVlcnlUZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0VGVtcGxhdGVTcnYiLCJERUZBVUxUX1FVRVJZIiwiRGF0YVNvdXJjZSIsImdldERlZmF1bHRRdWVyeSIsIl8iLCJhcHBseVRlbXBsYXRlVmFyaWFibGVzIiwicXVlcnkiLCJzY29wZWRWYXJzIiwicXVlcnlUZXh0IiwicmVwbGFjZSIsImZpbHRlclF1ZXJ5IiwiaW5zdGFuY2VTZXR0aW5ncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./datasource.ts\n\n}");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plugin: () => (/* binding */ plugin)\n/* harmony export */ });\n/* harmony import */ var grafana_public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grafana-public-path */ \"./node_modules/grafana-public-path.js\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ \"@grafana/data\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasource */ \"./datasource.ts\");\n/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ConfigEditor */ \"./components/ConfigEditor.tsx\");\n/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/QueryEditor */ \"./components/QueryEditor.tsx\");\n/*** IMPORTS FROM imports-loader ***/\n\n\n\n\n\n\nconst plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.DataSource).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_4__.QueryEditor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNQO0FBQ2U7QUFDRjtBQUdoRCxNQUFNSSxTQUFTLElBQUlKLDJEQUFnQkEsQ0FBMkNDLG1EQUFVQSxFQUM1RkksZUFBZSxDQUFDSCxrRUFBWUEsRUFDNUJJLGNBQWMsQ0FBQ0gsZ0VBQVdBLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZWhsaW9uZS1tb25pdG9yaW5nLWRhdGFzb3VyY2UvLi9tb2R1bGUudHM/YzIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9Db25maWdFZGl0b3InO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgTXlRdWVyeSwgTXlEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW48RGF0YVNvdXJjZSwgTXlRdWVyeSwgTXlEYXRhU291cmNlT3B0aW9ucz4oRGF0YVNvdXJjZSlcbiAgLnNldENvbmZpZ0VkaXRvcihDb25maWdFZGl0b3IpXG4gIC5zZXRRdWVyeUVkaXRvcihRdWVyeUVkaXRvcik7XG4iXSwibmFtZXMiOlsiRGF0YVNvdXJjZVBsdWdpbiIsIkRhdGFTb3VyY2UiLCJDb25maWdFZGl0b3IiLCJRdWVyeUVkaXRvciIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciIsInNldFF1ZXJ5RWRpdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./module.ts\n\n}");

/***/ }),

/***/ "./node_modules/grafana-public-path.js":
/*!*********************************************!*\
  !*** ./node_modules/grafana-public-path.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var amd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amd-module */ \"amd-module\");\n/* harmony import */ var amd_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amd_module__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n__webpack_require__.p =\n  (amd_module__WEBPACK_IMPORTED_MODULE_0___default()) && (amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri)\n    ? amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri.slice(0, amd_module__WEBPACK_IMPORTED_MODULE_0___default().uri.lastIndexOf('/') + 1)\n    : 'public/plugins/pehlione-monitoring-datasource/';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ3JhZmFuYS1wdWJsaWMtcGF0aC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ3VDOztBQUV2QyxxQkFBdUI7QUFDdkIsRUFBRSxtREFBYSxJQUFJLHVEQUFpQjtBQUNwQyxNQUFNLHFEQUFpQixVQUFVLHFEQUFpQjtBQUNsRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BlaGxpb25lLW1vbml0b3JpbmctZGF0YXNvdXJjZS8uL25vZGVfbW9kdWxlcy9ncmFmYW5hLXB1YmxpYy1wYXRoLmpzPzkzZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYW1kTWV0YU1vZHVsZSBmcm9tICdhbWQtbW9kdWxlJztcblxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPVxuICBhbWRNZXRhTW9kdWxlICYmIGFtZE1ldGFNb2R1bGUudXJpXG4gICAgPyBhbWRNZXRhTW9kdWxlLnVyaS5zbGljZSgwLCBhbWRNZXRhTW9kdWxlLnVyaS5sYXN0SW5kZXhPZignLycpICsgMSlcbiAgICA6ICdwdWJsaWMvcGx1Z2lucy9wZWhsaW9uZS1tb25pdG9yaW5nLWRhdGFzb3VyY2UvJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/grafana-public-path.js\n\n}");

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_QUERY: () => (/* binding */ DEFAULT_QUERY)\n/* harmony export */ });\nconst DEFAULT_QUERY = {\n    constant: 6.5\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBUU8sTUFBTUEsZ0JBQWtDO0lBQzdDQyxVQUFVO0FBQ1osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlaGxpb25lLW1vbml0b3JpbmctZGF0YXNvdXJjZS8uL3R5cGVzLnRzPzkwY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZUpzb25EYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhUXVlcnkgfSBmcm9tICdAZ3JhZmFuYS9zY2hlbWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE15UXVlcnkgZXh0ZW5kcyBEYXRhUXVlcnkge1xuICBxdWVyeVRleHQ/OiBzdHJpbmc7XG4gIGNvbnN0YW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1FVRVJZOiBQYXJ0aWFsPE15UXVlcnk+ID0ge1xuICBjb25zdGFudDogNi41LFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnQge1xuICBUaW1lOiBudW1iZXI7XG4gIFZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVJlc3BvbnNlIHtcbiAgZGF0YXBvaW50czogRGF0YVBvaW50W107XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIG9wdGlvbnMgY29uZmlndXJlZCBmb3IgZWFjaCBEYXRhU291cmNlIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXlEYXRhU291cmNlT3B0aW9ucyBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHBhdGg/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVmFsdWUgdGhhdCBpcyB1c2VkIGluIHRoZSBiYWNrZW5kLCBidXQgbmV2ZXIgc2VudCBvdmVyIEhUVFAgdG8gdGhlIGZyb250ZW5kXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXlTZWN1cmVKc29uRGF0YSB7XG4gIGFwaUtleT86IHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJERUZBVUxUX1FVRVJZIiwiY29uc3RhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types.ts\n\n}");

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "amd-module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_amd_module__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "public/plugins/pehlione-monitoring-datasource/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;