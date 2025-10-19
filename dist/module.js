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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nfunction ConfigEditor(props) {\n    const { onOptionsChange, options } = props;\n    const { jsonData, secureJsonFields, secureJsonData } = options;\n    const onPathChange = (event)=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            jsonData: _object_spread_props(_object_spread({}, jsonData), {\n                path: event.target.value\n            })\n        }));\n    };\n    // Secure field (only sent to the backend)\n    const onAPIKeyChange = (event)=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            secureJsonData: {\n                apiKey: event.target.value\n            }\n        }));\n    };\n    const onResetAPIKey = ()=>{\n        onOptionsChange(_object_spread_props(_object_spread({}, options), {\n            secureJsonFields: _object_spread_props(_object_spread({}, options.secureJsonFields), {\n                apiKey: false\n            }),\n            secureJsonData: _object_spread_props(_object_spread({}, options.secureJsonData), {\n                apiKey: ''\n            })\n        }));\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"API URL\",\n        labelWidth: 14,\n        interactive: true,\n        tooltip: 'Backend API temel adresi'\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {\n        id: \"config-editor-path\",\n        onChange: onPathChange,\n        value: jsonData.path,\n        placeholder: \"http://127.0.0.1:7000\",\n        width: 40\n    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"API Key\",\n        labelWidth: 14,\n        interactive: true,\n        tooltip: 'Secure json field (backend only)'\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SecretInput, {\n        required: true,\n        id: \"config-editor-api-key\",\n        isConfigured: secureJsonFields.apiKey,\n        value: secureJsonData === null || secureJsonData === void 0 ? void 0 : secureJsonData.apiKey,\n        placeholder: \"Enter your API key\",\n        width: 40,\n        onReset: onResetAPIKey,\n        onChange: onAPIKeyChange\n    })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ21CO0FBTXZELFNBQVNJLGFBQWFDLEtBQVk7SUFDdkMsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtJQUNyQyxNQUFNLEVBQUVHLFFBQVEsRUFBRUMsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRSxHQUFHSDtJQUV2RCxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCTixnQkFBZ0Isd0NBQ1hDO1lBQ0hDLFVBQVUsd0NBQ0xBO2dCQUNISyxNQUFNRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7OztJQUc5QjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNQyxpQkFBaUIsQ0FBQ0o7UUFDdEJOLGdCQUFnQix3Q0FDWEM7WUFDSEcsZ0JBQWdCO2dCQUNkTyxRQUFRTCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7WUFDNUI7O0lBRUo7SUFFQSxNQUFNRyxnQkFBZ0I7UUFDcEJaLGdCQUFnQix3Q0FDWEM7WUFDSEUsa0JBQWtCLHdDQUNiRixRQUFRRSxnQkFBZ0I7Z0JBQzNCUSxRQUFROztZQUVWUCxnQkFBZ0Isd0NBQ1hILFFBQVFHLGNBQWM7Z0JBQ3pCTyxRQUFROzs7SUFHZDtJQUVBLHFCQUNFLHdJQUNFLDJEQUFDaEIsb0RBQVdBO1FBQUNrQixPQUFNO1FBQVVDLFlBQVk7UUFBSUMsYUFBQUE7UUFBWUMsU0FBUztxQkFDaEUsMkRBQUNwQiw4Q0FBS0E7UUFDSnFCLElBQUc7UUFDSEMsVUFBVWI7UUFDVkksT0FBT1AsU0FBU0ssSUFBSTtRQUNwQlksYUFBWTtRQUNaQyxPQUFPO3VCQUdYLDJEQUFDekIsb0RBQVdBO1FBQUNrQixPQUFNO1FBQVVDLFlBQVk7UUFBSUMsYUFBQUE7UUFBWUMsU0FBUztxQkFDaEUsMkRBQUNuQixvREFBV0E7UUFDVndCLFVBQUFBO1FBQ0FKLElBQUc7UUFDSEssY0FBY25CLGlCQUFpQlEsTUFBTTtRQUNyQ0YsS0FBSyxFQUFFTCwyQkFBQUEscUNBQUFBLGVBQWdCTyxNQUFNO1FBQzdCUSxhQUFZO1FBQ1pDLE9BQU87UUFDUEcsU0FBU1g7UUFDVE0sVUFBVVI7O0FBS3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVobGlvbmUtbW9uaXRvcmluZy1kYXRhc291cmNlLy4vY29tcG9uZW50cy9Db25maWdFZGl0b3IudHN4P2JlZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5wdXQsIFNlY3JldElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XHJcbmltcG9ydCB7IE15RGF0YVNvdXJjZU9wdGlvbnMsIE15U2VjdXJlSnNvbkRhdGEgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPE15RGF0YVNvdXJjZU9wdGlvbnMsIE15U2VjdXJlSnNvbkRhdGE+IHt9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnRWRpdG9yKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGpzb25EYXRhLCBzZWN1cmVKc29uRmllbGRzLCBzZWN1cmVKc29uRGF0YSB9ID0gb3B0aW9ucztcclxuXHJcbiAgY29uc3Qgb25QYXRoQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25PcHRpb25zQ2hhbmdlKHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAganNvbkRhdGE6IHtcclxuICAgICAgICAuLi5qc29uRGF0YSxcclxuICAgICAgICBwYXRoOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBTZWN1cmUgZmllbGQgKG9ubHkgc2VudCB0byB0aGUgYmFja2VuZClcclxuICBjb25zdCBvbkFQSUtleUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIG9uT3B0aW9uc0NoYW5nZSh7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIHNlY3VyZUpzb25EYXRhOiB7XHJcbiAgICAgICAgYXBpS2V5OiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblJlc2V0QVBJS2V5ID0gKCkgPT4ge1xyXG4gICAgb25PcHRpb25zQ2hhbmdlKHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge1xyXG4gICAgICAgIC4uLm9wdGlvbnMuc2VjdXJlSnNvbkZpZWxkcyxcclxuICAgICAgICBhcGlLZXk6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWN1cmVKc29uRGF0YToge1xyXG4gICAgICAgIC4uLm9wdGlvbnMuc2VjdXJlSnNvbkRhdGEsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkFQSSBVUkxcIiBsYWJlbFdpZHRoPXsxNH0gaW50ZXJhY3RpdmUgdG9vbHRpcD17J0JhY2tlbmQgQVBJIHRlbWVsIGFkcmVzaSd9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD1cImNvbmZpZy1lZGl0b3ItcGF0aFwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uUGF0aENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17anNvbkRhdGEucGF0aH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHA6Ly8xMjcuMC4wLjE6NzAwMFwiXG4gICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkFQSSBLZXlcIiBsYWJlbFdpZHRoPXsxNH0gaW50ZXJhY3RpdmUgdG9vbHRpcD17J1NlY3VyZSBqc29uIGZpZWxkIChiYWNrZW5kIG9ubHkpJ30+XHJcbiAgICAgICAgPFNlY3JldElucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaWQ9XCJjb25maWctZWRpdG9yLWFwaS1rZXlcIlxyXG4gICAgICAgICAgaXNDb25maWd1cmVkPXtzZWN1cmVKc29uRmllbGRzLmFwaUtleX1cclxuICAgICAgICAgIHZhbHVlPXtzZWN1cmVKc29uRGF0YT8uYXBpS2V5fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEFQSSBrZXlcIlxyXG4gICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgb25SZXNldD17b25SZXNldEFQSUtleX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkFQSUtleUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0lubGluZUZpZWxkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbmxpbmVGaWVsZCIsIklucHV0IiwiU2VjcmV0SW5wdXQiLCJDb25maWdFZGl0b3IiLCJwcm9wcyIsIm9uT3B0aW9uc0NoYW5nZSIsIm9wdGlvbnMiLCJqc29uRGF0YSIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsIm9uUGF0aENoYW5nZSIsImV2ZW50IiwicGF0aCIsInRhcmdldCIsInZhbHVlIiwib25BUElLZXlDaGFuZ2UiLCJhcGlLZXkiLCJvblJlc2V0QVBJS2V5IiwibGFiZWwiLCJsYWJlbFdpZHRoIiwiaW50ZXJhY3RpdmUiLCJ0b29sdGlwIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwid2lkdGgiLCJyZXF1aXJlZCIsImlzQ29uZmlndXJlZCIsIm9uUmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ConfigEditor.tsx\n\n}");

/***/ }),

/***/ "./components/QueryEditor.tsx":
/*!************************************!*\
  !*** ./components/QueryEditor.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly) {\n            symbols = symbols.filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n            });\n        }\n        keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _object_spread_props(target, source) {\n    source = source != null ? source : {};\n    if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n        ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\n\n\nfunction QueryEditor({ query, onChange, onRunQuery }) {\n    const metric = query.metric || 'cpu_usage_pct';\n    const metricOptions = [\n        {\n            label: 'CPU Usage (%)',\n            value: 'cpu_usage_pct'\n        },\n        {\n            label: 'Memory Usage (%)',\n            value: 'mem_pct'\n        },\n        {\n            label: 'Load Average (1m)',\n            value: 'load_avg_one'\n        },\n        {\n            label: 'Disk Usage (%)',\n            value: 'disk'\n        }\n    ];\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        gap: 0\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {\n        label: \"Metric\",\n        labelWidth: 14,\n        tooltip: \"Gösterilecek metriği seçin\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Combobox, {\n        options: metricOptions,\n        value: metricOptions.find((o)=>o.value === metric) || metricOptions[0],\n        onChange: (v)=>{\n            var _v_value;\n            onChange(_object_spread_props(_object_spread({}, query), {\n                metric: (_v_value = v.value) !== null && _v_value !== void 0 ? _v_value : 'cpu_usage_pct'\n            }));\n            onRunQuery();\n        },\n        width: 32\n    })));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUM7QUFPcEQsU0FBU0ksWUFBWSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFTO0lBQ2hFLE1BQU1DLFNBQVNILE1BQU1HLE1BQU0sSUFBSTtJQUUvQixNQUFNQyxnQkFBZ0I7UUFDcEI7WUFBRUMsT0FBTztZQUFpQkMsT0FBTztRQUFnQjtRQUNqRDtZQUFFRCxPQUFPO1lBQW9CQyxPQUFPO1FBQVU7UUFDOUM7WUFBRUQsT0FBTztZQUFxQkMsT0FBTztRQUFlO1FBQ3BEO1lBQUVELE9BQU87WUFBa0JDLE9BQU87UUFBTztLQUMxQztJQUVELHFCQUNFLDJEQUFDUiw4Q0FBS0E7UUFBQ1MsS0FBSztxQkFDViwyREFBQ1gsb0RBQVdBO1FBQUNTLE9BQU07UUFBU0csWUFBWTtRQUFJQyxTQUFRO3FCQUNsRCwyREFBQ1osaURBQVFBO1FBQ1BhLFNBQVNOO1FBQ1RFLE9BQU9GLGNBQWNPLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFTixLQUFLLEtBQUtILFdBQVdDLGFBQWEsQ0FBQyxFQUFFO1FBQ3hFSCxVQUFVLENBQUNZO2dCQUNvQkE7WUFBN0JaLFNBQVMsd0NBQUtEO2dCQUFPRyxRQUFRVSxDQUFBQSxXQUFBQSxFQUFFUCxLQUFLLGNBQVBPLHNCQUFBQSxXQUFXOztZQUN4Q1g7UUFDRjtRQUNBWSxPQUFPOztBQUtqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlaGxpb25lLW1vbml0b3JpbmctZGF0YXNvdXJjZS8uL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4PzBhMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElubGluZUZpZWxkLCBDb21ib2JveCwgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBRdWVyeUVkaXRvclByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBNeURhdGFTb3VyY2VPcHRpb25zLCBNeVF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxEYXRhU291cmNlLCBNeVF1ZXJ5LCBNeURhdGFTb3VyY2VPcHRpb25zPjtcblxuZXhwb3J0IGZ1bmN0aW9uIFF1ZXJ5RWRpdG9yKHsgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5IH06IFByb3BzKSB7XG4gIGNvbnN0IG1ldHJpYyA9IHF1ZXJ5Lm1ldHJpYyB8fCAnY3B1X3VzYWdlX3BjdCc7XG5cbiAgY29uc3QgbWV0cmljT3B0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiAnQ1BVIFVzYWdlICglKScsIHZhbHVlOiAnY3B1X3VzYWdlX3BjdCcgfSxcbiAgICB7IGxhYmVsOiAnTWVtb3J5IFVzYWdlICglKScsIHZhbHVlOiAnbWVtX3BjdCcgfSxcbiAgICB7IGxhYmVsOiAnTG9hZCBBdmVyYWdlICgxbSknLCB2YWx1ZTogJ2xvYWRfYXZnX29uZScgfSxcbiAgICB7IGxhYmVsOiAnRGlzayBVc2FnZSAoJSknLCB2YWx1ZTogJ2Rpc2snIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgZ2FwPXswfT5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk1ldHJpY1wiIGxhYmVsV2lkdGg9ezE0fSB0b29sdGlwPVwiR8O2c3RlcmlsZWNlayBtZXRyacSfaSBzZcOnaW5cIj5cbiAgICAgICAgPENvbWJvYm94XG4gICAgICAgICAgb3B0aW9ucz17bWV0cmljT3B0aW9uc31cbiAgICAgICAgICB2YWx1ZT17bWV0cmljT3B0aW9ucy5maW5kKChvKSA9PiBvLnZhbHVlID09PSBtZXRyaWMpIHx8IG1ldHJpY09wdGlvbnNbMF19XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBtZXRyaWM6IHYudmFsdWUgPz8gJ2NwdV91c2FnZV9wY3QnIH0pO1xuICAgICAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW5saW5lRmllbGQiLCJDb21ib2JveCIsIlN0YWNrIiwiUXVlcnlFZGl0b3IiLCJxdWVyeSIsIm9uQ2hhbmdlIiwib25SdW5RdWVyeSIsIm1ldHJpYyIsIm1ldHJpY09wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiZ2FwIiwibGFiZWxXaWR0aCIsInRvb2x0aXAiLCJvcHRpb25zIiwiZmluZCIsIm8iLCJ2Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QueryEditor.tsx\n\n}");

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DataSource: () => (/* binding */ DataSource)\n/* harmony export */ });\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ \"@grafana/runtime\");\n/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./types.ts\");\nfunction _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _object_spread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _define_property(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nclass DataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.DataSourceWithBackend {\n    getDefaultQuery(_) {\n        return _types__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_QUERY;\n    }\n    applyTemplateVariables(query, scopedVars) {\n        // Şimdilik metrik seçiminde şablon değişkeni kullanmıyoruz; sorguyu aynen döndür.\n        return _object_spread({}, query);\n    }\n    filterQuery(query) {\n        // Metrik seçimi sağlanmadıysa bile varsayılanı kullanarak sorguyu çalıştır.\n        return true;\n    }\n    constructor(instanceSettings){\n        super(instanceSettings);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhc291cmNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lEO0FBRWE7QUFFL0QsTUFBTUUsbUJBQW1CRixtRUFBcUJBO0lBS25ERyxnQkFBZ0JDLENBQVUsRUFBb0I7UUFDNUMsT0FBT0gsaURBQWFBO0lBQ3RCO0lBRUFJLHVCQUF1QkMsS0FBYyxFQUFFQyxVQUFzQixFQUFFO1FBQzdELGtGQUFrRjtRQUNsRixPQUFPLG1CQUFLRDtJQUNkO0lBRUFFLFlBQVlGLEtBQWMsRUFBVztRQUNuQyw0RUFBNEU7UUFDNUUsT0FBTztJQUNUO0lBaEJBLFlBQVlHLGdCQUFpRSxDQUFFO1FBQzdFLEtBQUssQ0FBQ0E7SUFDUjtBQWVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVobGlvbmUtbW9uaXRvcmluZy1kYXRhc291cmNlLy4vZGF0YXNvdXJjZS50cz9lYWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBDb3JlQXBwLCBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxyXG5pbXBvcnQgeyBNeVF1ZXJ5LCBNeURhdGFTb3VyY2VPcHRpb25zLCBERUZBVUxUX1FVRVJZIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxNeVF1ZXJ5LCBNeURhdGFTb3VyY2VPcHRpb25zPiB7XHJcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8TXlEYXRhU291cmNlT3B0aW9ucz4pIHtcclxuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdFF1ZXJ5KF86IENvcmVBcHApOiBQYXJ0aWFsPE15UXVlcnk+IHtcclxuICAgIHJldHVybiBERUZBVUxUX1FVRVJZO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyhxdWVyeTogTXlRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycykge1xuICAgIC8vIMWeaW1kaWxpayBtZXRyaWsgc2XDp2ltaW5kZSDFn2FibG9uIGRlxJ9pxZ9rZW5pIGt1bGxhbm3EsXlvcnV6OyBzb3JndXl1IGF5bmVuIGTDtm5kw7xyLlxuICAgIHJldHVybiB7IC4uLnF1ZXJ5IH07XG4gIH1cblxuICBmaWx0ZXJRdWVyeShxdWVyeTogTXlRdWVyeSk6IGJvb2xlYW4ge1xuICAgIC8vIE1ldHJpayBzZcOnaW1pIHNhxJ9sYW5tYWTEsXlzYSBiaWxlIHZhcnNhecSxbGFuxLEga3VsbGFuYXJhayBzb3JndXl1IMOnYWzEscWfdMSxci5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsIkRFRkFVTFRfUVVFUlkiLCJEYXRhU291cmNlIiwiZ2V0RGVmYXVsdFF1ZXJ5IiwiXyIsImFwcGx5VGVtcGxhdGVWYXJpYWJsZXMiLCJxdWVyeSIsInNjb3BlZFZhcnMiLCJmaWx0ZXJRdWVyeSIsImluc3RhbmNlU2V0dGluZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./datasource.ts\n\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_QUERY: () => (/* binding */ DEFAULT_QUERY)\n/* harmony export */ });\nconst DEFAULT_QUERY = {\n    metric: 'cpu_usage_pct'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBT08sTUFBTUEsZ0JBQWtDO0lBQzdDQyxRQUFRO0FBQ1YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlaGxpb25lLW1vbml0b3JpbmctZGF0YXNvdXJjZS8uL3R5cGVzLnRzPzkwY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZUpzb25EYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XHJcbmltcG9ydCB7IERhdGFRdWVyeSB9IGZyb20gJ0BncmFmYW5hL3NjaGVtYSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15UXVlcnkgZXh0ZW5kcyBEYXRhUXVlcnkge1xuICBtZXRyaWM/OiBzdHJpbmc7IC8vICdjcHVfdXNhZ2VfcGN0JyB8ICdtZW1fcGN0JyB8ICdsb2FkX2F2Z19vbmUnIHwgJ2Rpc2snXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1FVRVJZOiBQYXJ0aWFsPE15UXVlcnk+ID0ge1xuICBtZXRyaWM6ICdjcHVfdXNhZ2VfcGN0Jyxcbn07XG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnQge1xyXG4gIFRpbWU6IG51bWJlcjtcclxuICBWYWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2VSZXNwb25zZSB7XHJcbiAgZGF0YXBvaW50czogRGF0YVBvaW50W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGVzZSBhcmUgb3B0aW9ucyBjb25maWd1cmVkIGZvciBlYWNoIERhdGFTb3VyY2UgaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlEYXRhU291cmNlT3B0aW9ucyBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XHJcbiAgcGF0aD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlIHRoYXQgaXMgdXNlZCBpbiB0aGUgYmFja2VuZCwgYnV0IG5ldmVyIHNlbnQgb3ZlciBIVFRQIHRvIHRoZSBmcm9udGVuZFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNeVNlY3VyZUpzb25EYXRhIHtcclxuICBhcGlLZXk/OiBzdHJpbmc7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRFRkFVTFRfUVVFUlkiLCJtZXRyaWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types.ts\n\n}");

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