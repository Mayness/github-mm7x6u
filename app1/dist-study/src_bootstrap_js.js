"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?5e40\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadComponents_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadComponents.jsx */ \"./src/loadComponents.jsx\");\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loadComponents_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://app1/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?5e40\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://app1/./src/bootstrap.js?");

/***/ }),

/***/ "./src/loadComponents.jsx":
/*!********************************!*\
  !*** ./src/loadComponents.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?5e40\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst DynamicComponent = ({\n  name,\n  ...props\n}) => {\n  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => loadRemoteComponent({\n      url: 'http://localhost:3002/remoteEntry.js',\n      scope: 'app2',\n      module: './App'\n    }));\n  }, [name]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        alignItems: 'center',\n        justifyContent: 'center',\n        flex: 1\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      style: {\n        fontSize: 50\n      }\n    }, \"Loading...\"))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props, \"333\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(DynamicComponent));\n\nasync function loadRemoteComponent(config) {\n  return loadScript(config).then(() => loadComponentByWebpack(config));\n}\n\nfunction loadScript(config) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement('script');\n    script.src = config.url;\n    script.type = 'text/javascript';\n    script.async = true;\n\n    script.onload = () => {\n      console.log(`Dynamic Script Loaded: ${config.url}`);\n      document.head.removeChild(script);\n      resolve();\n    };\n\n    script.onerror = () => {\n      console.error(`Dynamic Script Error: ${config.url}`);\n      document.head.removeChild(script);\n      reject();\n    };\n\n    document.head.appendChild(script);\n  });\n}\n\nasync function loadComponentByWebpack({\n  scope,\n  module\n}) {\n  // 初始化共享作用域，这将使用此构建和所有远程提供的已知模块填充它\n  const c = await __webpack_require__.I('default');\n  const container = window[scope]; // 获取容器\n  // 初始化容器，它可以提供共享模块\n\n  await container.init(__webpack_require__.S.default);\n  const factory = await window[scope].get(module);\n  return factory();\n}\n\n//# sourceURL=webpack://app1/./src/loadComponents.jsx?");

/***/ })

}]);