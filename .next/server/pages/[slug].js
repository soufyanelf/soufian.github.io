module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/souffanda/Documents/projects/fanda/soufian.github.io/pages/[slug].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Post = ({\n  htmlString,\n  data\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, data.title), __jsx(\"meta\", {\n    name: \"description\",\n    content: data.description,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, \"contents below\"), __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: htmlString\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }));\n};\n\nconst getStaticPaths = async () => {\n  const files = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdirSync(\"posts\");\n  const paths = files.map(filename => ({\n    params: {\n      slug: filename.replace(\".md\", \"\")\n    }\n  }));\n  console.log(\"files :\", files);\n  console.log(\"paths :\", paths);\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async ({\n  params: {\n    slug\n  }\n}) => {\n  const markdownWithMetadata = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join('posts', slug + '.md')).toString();\n  const parsedMarkdown = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(markdownWithMetadata);\n  const htmlString = marked__WEBPACK_IMPORTED_MODULE_5___default()(parsedMarkdown.content);\n  return {\n    props: {\n      htmlString,\n      data: parsedMarkdown.data\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bc2x1Z10uanM/NDYyYiJdLCJuYW1lcyI6WyJQb3N0IiwiaHRtbFN0cmluZyIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlcyIsImZzIiwicmVhZGRpclN5bmMiLCJwYXRocyIsIm1hcCIsImZpbGVuYW1lIiwicGFyYW1zIiwic2x1ZyIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIm1hcmtkb3duV2l0aE1ldGFkYXRhIiwicmVhZEZpbGVTeW5jIiwicGF0aCIsImpvaW4iLCJ0b1N0cmluZyIsInBhcnNlZE1hcmtkb3duIiwibWF0dGVyIiwibWFya2VkIiwiY29udGVudCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBMEI7QUFFckMsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0wsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxJQUFJLENBQUNDLEtBQWIsQ0FERixFQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFRCxJQUFJLENBQUNFLFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSyxFQU1MO0FBQUssMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFSjtBQUFWLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSyxDQUFQO0FBUUQsQ0FWRDs7QUFZTyxNQUFNSyxjQUFjLEdBQUcsWUFBWTtBQUV4QyxRQUFNQyxLQUFLLEdBQUdDLHlDQUFFLENBQUNDLFdBQUgsQ0FBZSxPQUFmLENBQWQ7QUFDQSxRQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVQyxRQUFRLEtBQUs7QUFDbkNDLFVBQU0sRUFBRTtBQUNOQyxVQUFJLEVBQUVGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixLQUFqQixFQUF3QixFQUF4QjtBQURBO0FBRDJCLEdBQUwsQ0FBbEIsQ0FBZDtBQU1BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCVixLQUF2QjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCUCxLQUF2QjtBQUVBLFNBQU87QUFDTEEsU0FESztBQUVMUSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FoQk07QUFrQkEsTUFBTUMsY0FBYyxHQUFHLE9BQU87QUFBRU4sUUFBTSxFQUFFO0FBQUVDO0FBQUY7QUFBVixDQUFQLEtBQWdDO0FBRTVELFFBQU1NLG9CQUFvQixHQUFHWix5Q0FBRSxDQUFDYSxZQUFILENBQWdCQywyQ0FBSSxDQUFDQyxJQUFMLENBQVUsT0FBVixFQUFtQlQsSUFBSSxHQUFHLEtBQTFCLENBQWhCLEVBQWtEVSxRQUFsRCxFQUE3QjtBQUNBLFFBQU1DLGNBQWMsR0FBR0Msa0RBQU0sQ0FBQ04sb0JBQUQsQ0FBN0I7QUFDQSxRQUFNbkIsVUFBVSxHQUFHMEIsNkNBQU0sQ0FBQ0YsY0FBYyxDQUFDRyxPQUFoQixDQUF6QjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0w1QixnQkFESztBQUVMQyxVQUFJLEVBQUV1QixjQUFjLENBQUN2QjtBQUZoQjtBQURGLEdBQVA7QUFNRCxDQVpNO0FBY1FGLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgbWFya2VkIGZyb20gXCJtYXJrZWRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuY29uc3QgUG9zdCA9ICh7IGh0bWxTdHJpbmcsIGRhdGEgfSkgPT4ge1xuXG4gIHJldHVybiA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntkYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2PmNvbnRlbnRzIGJlbG93PC9kaXY+XG4gICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWxTdHJpbmcgfX0gLz5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcblxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKFwicG9zdHNcIilcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoZmlsZW5hbWUgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIilcbiAgICB9XG4gIH0pKVxuXG4gIGNvbnNvbGUubG9nKFwiZmlsZXMgOlwiLCBmaWxlcyk7XG4gIGNvbnNvbGUubG9nKFwicGF0aHMgOlwiLCBwYXRocyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcblxuICBjb25zdCBtYXJrZG93bldpdGhNZXRhZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oJ3Bvc3RzJywgc2x1ZyArICcubWQnKSkudG9TdHJpbmcoKTtcbiAgY29uc3QgcGFyc2VkTWFya2Rvd24gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YWRhdGEpO1xuICBjb25zdCBodG1sU3RyaW5nID0gbWFya2VkKHBhcnNlZE1hcmtkb3duLmNvbnRlbnQpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaHRtbFN0cmluZyxcbiAgICAgIGRhdGE6IHBhcnNlZE1hcmtkb3duLmRhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIj8yNWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcmtlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///marked\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });