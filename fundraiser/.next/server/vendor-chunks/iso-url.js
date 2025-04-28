"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/iso-url";
exports.ids = ["vendor-chunks/iso-url"];
exports.modules = {

/***/ "(ssr)/../node_modules/iso-url/index.js":
/*!****************************************!*\
  !*** ../node_modules/iso-url/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst {\n  URLWithLegacySupport,\n  format,\n  URLSearchParams,\n  defaultBase\n} = __webpack_require__(/*! ./src/url */ \"(ssr)/../node_modules/iso-url/src/url.js\")\nconst relative = __webpack_require__(/*! ./src/relative */ \"(ssr)/../node_modules/iso-url/src/relative.js\")\n\nmodule.exports = {\n  URL: URLWithLegacySupport,\n  URLSearchParams,\n  format,\n  relative,\n  defaultBase\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsRUFBRSxtQkFBTyxDQUFDLDJEQUFXO0FBQ3ZCLGlCQUFpQixtQkFBTyxDQUFDLHFFQUFnQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkQ6XFxGdW5kUmFpc2VyXFxub2RlX21vZHVsZXNcXGlzby11cmxcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7XG4gIFVSTFdpdGhMZWdhY3lTdXBwb3J0LFxuICBmb3JtYXQsXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgZGVmYXVsdEJhc2Vcbn0gPSByZXF1aXJlKCcuL3NyYy91cmwnKVxuY29uc3QgcmVsYXRpdmUgPSByZXF1aXJlKCcuL3NyYy9yZWxhdGl2ZScpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBVUkw6IFVSTFdpdGhMZWdhY3lTdXBwb3J0LFxuICBVUkxTZWFyY2hQYXJhbXMsXG4gIGZvcm1hdCxcbiAgcmVsYXRpdmUsXG4gIGRlZmF1bHRCYXNlXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/iso-url/index.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/iso-url/src/relative.js":
/*!***********************************************!*\
  !*** ../node_modules/iso-url/src/relative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URLWithLegacySupport, format } = __webpack_require__(/*! ./url */ \"(ssr)/../node_modules/iso-url/src/url.js\")\n\n/**\n * @param {string | undefined} url\n * @param {any} [location]\n * @param {any} [protocolMap]\n * @param {any} [defaultProtocol]\n */\nmodule.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {\n  let protocol = location.protocol\n    ? location.protocol.replace(':', '')\n    : 'http'\n\n  // Check protocol map\n  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':'\n  let urlParsed\n\n  try {\n    urlParsed = new URLWithLegacySupport(url)\n  } catch (err) {\n    urlParsed = {}\n  }\n\n  const base = Object.assign({}, location, {\n    protocol: protocol || urlParsed.protocol,\n    host: location.host || urlParsed.host\n  })\n\n  return new URLWithLegacySupport(url, format(base)).toString()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvc3JjL3JlbGF0aXZlLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLFFBQVEsK0JBQStCLEVBQUUsbUJBQU8sQ0FBQyx1REFBTzs7QUFFeEQ7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQjtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EiLCJzb3VyY2VzIjpbIkQ6XFxGdW5kUmFpc2VyXFxub2RlX21vZHVsZXNcXGlzby11cmxcXHNyY1xccmVsYXRpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgVVJMV2l0aExlZ2FjeVN1cHBvcnQsIGZvcm1hdCB9ID0gcmVxdWlyZSgnLi91cmwnKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSB1cmxcbiAqIEBwYXJhbSB7YW55fSBbbG9jYXRpb25dXG4gKiBAcGFyYW0ge2FueX0gW3Byb3RvY29sTWFwXVxuICogQHBhcmFtIHthbnl9IFtkZWZhdWx0UHJvdG9jb2xdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKHVybCwgbG9jYXRpb24gPSB7fSwgcHJvdG9jb2xNYXAgPSB7fSwgZGVmYXVsdFByb3RvY29sKSA9PiB7XG4gIGxldCBwcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sXG4gICAgPyBsb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKCc6JywgJycpXG4gICAgOiAnaHR0cCdcblxuICAvLyBDaGVjayBwcm90b2NvbCBtYXBcbiAgcHJvdG9jb2wgPSAocHJvdG9jb2xNYXBbcHJvdG9jb2xdIHx8IGRlZmF1bHRQcm90b2NvbCB8fCBwcm90b2NvbCkgKyAnOidcbiAgbGV0IHVybFBhcnNlZFxuXG4gIHRyeSB7XG4gICAgdXJsUGFyc2VkID0gbmV3IFVSTFdpdGhMZWdhY3lTdXBwb3J0KHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdXJsUGFyc2VkID0ge31cbiAgfVxuXG4gIGNvbnN0IGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCBsb2NhdGlvbiwge1xuICAgIHByb3RvY29sOiBwcm90b2NvbCB8fCB1cmxQYXJzZWQucHJvdG9jb2wsXG4gICAgaG9zdDogbG9jYXRpb24uaG9zdCB8fCB1cmxQYXJzZWQuaG9zdFxuICB9KVxuXG4gIHJldHVybiBuZXcgVVJMV2l0aExlZ2FjeVN1cHBvcnQodXJsLCBmb3JtYXQoYmFzZSkpLnRvU3RyaW5nKClcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/iso-url/src/relative.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/iso-url/src/url.js":
/*!******************************************!*\
  !*** ../node_modules/iso-url/src/url.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URL, URLSearchParams, format } = __webpack_require__(/*! url */ \"url\")\n\n// https://github.com/nodejs/node/issues/12682\nconst defaultBase = 'http://localhost'\n\nclass URLWithLegacySupport extends URL {\n  constructor (url = '', base = defaultBase) {\n    super(url, base)\n    this.path = this.pathname + this.search\n    this.auth =\n            this.username && this.password\n              ? this.username + ':' + this.password\n              : null\n    this.query =\n            this.search && this.search.startsWith('?')\n              ? this.search.slice(1)\n              : null\n  }\n\n  format () {\n    return this.toString()\n  }\n}\n\nmodule.exports = {\n  URLWithLegacySupport,\n  URLSearchParams,\n  format,\n  defaultBase\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2lzby11cmwvc3JjL3VybC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixRQUFRLCtCQUErQixFQUFFLG1CQUFPLENBQUMsZ0JBQUs7O0FBRXREO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJEOlxcRnVuZFJhaXNlclxcbm9kZV9tb2R1bGVzXFxpc28tdXJsXFxzcmNcXHVybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgeyBVUkwsIFVSTFNlYXJjaFBhcmFtcywgZm9ybWF0IH0gPSByZXF1aXJlKCd1cmwnKVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzEyNjgyXG5jb25zdCBkZWZhdWx0QmFzZSA9ICdodHRwOi8vbG9jYWxob3N0J1xuXG5jbGFzcyBVUkxXaXRoTGVnYWN5U3VwcG9ydCBleHRlbmRzIFVSTCB7XG4gIGNvbnN0cnVjdG9yICh1cmwgPSAnJywgYmFzZSA9IGRlZmF1bHRCYXNlKSB7XG4gICAgc3VwZXIodXJsLCBiYXNlKVxuICAgIHRoaXMucGF0aCA9IHRoaXMucGF0aG5hbWUgKyB0aGlzLnNlYXJjaFxuICAgIHRoaXMuYXV0aCA9XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgICAgPyB0aGlzLnVzZXJuYW1lICsgJzonICsgdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICA6IG51bGxcbiAgICB0aGlzLnF1ZXJ5ID1cbiAgICAgICAgICAgIHRoaXMuc2VhcmNoICYmIHRoaXMuc2VhcmNoLnN0YXJ0c1dpdGgoJz8nKVxuICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoLnNsaWNlKDEpXG4gICAgICAgICAgICAgIDogbnVsbFxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFVSTFdpdGhMZWdhY3lTdXBwb3J0LFxuICBVUkxTZWFyY2hQYXJhbXMsXG4gIGZvcm1hdCxcbiAgZGVmYXVsdEJhc2Vcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/iso-url/src/url.js\n");

/***/ })

};
;