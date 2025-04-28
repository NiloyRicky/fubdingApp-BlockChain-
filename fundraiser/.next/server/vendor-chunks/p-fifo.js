/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-fifo";
exports.ids = ["vendor-chunks/p-fifo"];
exports.modules = {

/***/ "(ssr)/../node_modules/p-fifo/index.js":
/*!***************************************!*\
  !*** ../node_modules/p-fifo/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Fifo = __webpack_require__(/*! fast-fifo */ \"(ssr)/../node_modules/fast-fifo/index.js\")\nconst defer = __webpack_require__(/*! p-defer */ \"(ssr)/../node_modules/p-fifo/node_modules/p-defer/index.js\")\n\nmodule.exports = class PFifo {\n  constructor () {\n    this._buffer = new Fifo()\n    this._waitingConsumers = new Fifo()\n  }\n\n  push (chunk) {\n    const { promise, resolve } = defer()\n    this._buffer.push({ chunk, resolve })\n    this._consume()\n    return promise\n  }\n\n  _consume () {\n    while (!this._waitingConsumers.isEmpty() && !this._buffer.isEmpty()) {\n      const nextConsumer = this._waitingConsumers.shift()\n      const nextChunk = this._buffer.shift()\n      nextConsumer.resolve(nextChunk.chunk)\n      nextChunk.resolve()\n    }\n  }\n\n  shift () {\n    const { promise, resolve } = defer()\n    this._waitingConsumers.push({ resolve })\n    this._consume()\n    return promise\n  }\n\n  isEmpty () {\n    return this._buffer.isEmpty()\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3AtZmlmby9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1CQUFPLENBQUMsMkRBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLDJFQUFTOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0Isd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiRDpcXEZ1bmRSYWlzZXJcXG5vZGVfbW9kdWxlc1xccC1maWZvXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGaWZvID0gcmVxdWlyZSgnZmFzdC1maWZvJylcbmNvbnN0IGRlZmVyID0gcmVxdWlyZSgncC1kZWZlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUEZpZm8ge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEZpZm8oKVxuICAgIHRoaXMuX3dhaXRpbmdDb25zdW1lcnMgPSBuZXcgRmlmbygpXG4gIH1cblxuICBwdXNoIChjaHVuaykge1xuICAgIGNvbnN0IHsgcHJvbWlzZSwgcmVzb2x2ZSB9ID0gZGVmZXIoKVxuICAgIHRoaXMuX2J1ZmZlci5wdXNoKHsgY2h1bmssIHJlc29sdmUgfSlcbiAgICB0aGlzLl9jb25zdW1lKClcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgX2NvbnN1bWUgKCkge1xuICAgIHdoaWxlICghdGhpcy5fd2FpdGluZ0NvbnN1bWVycy5pc0VtcHR5KCkgJiYgIXRoaXMuX2J1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnN0IG5leHRDb25zdW1lciA9IHRoaXMuX3dhaXRpbmdDb25zdW1lcnMuc2hpZnQoKVxuICAgICAgY29uc3QgbmV4dENodW5rID0gdGhpcy5fYnVmZmVyLnNoaWZ0KClcbiAgICAgIG5leHRDb25zdW1lci5yZXNvbHZlKG5leHRDaHVuay5jaHVuaylcbiAgICAgIG5leHRDaHVuay5yZXNvbHZlKClcbiAgICB9XG4gIH1cblxuICBzaGlmdCAoKSB7XG4gICAgY29uc3QgeyBwcm9taXNlLCByZXNvbHZlIH0gPSBkZWZlcigpXG4gICAgdGhpcy5fd2FpdGluZ0NvbnN1bWVycy5wdXNoKHsgcmVzb2x2ZSB9KVxuICAgIHRoaXMuX2NvbnN1bWUoKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyLmlzRW1wdHkoKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/p-fifo/index.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/p-fifo/node_modules/p-defer/index.js":
/*!************************************************************!*\
  !*** ../node_modules/p-fifo/node_modules/p-defer/index.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst pDefer = () => {\n\tconst deferred = {};\n\n\tdeferred.promise = new Promise((resolve, reject) => {\n\t\tdeferred.resolve = resolve;\n\t\tdeferred.reject = reject;\n\t});\n\n\treturn deferred;\n};\n\nmodule.exports = pDefer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3AtZmlmby9ub2RlX21vZHVsZXMvcC1kZWZlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsiRDpcXEZ1bmRSYWlzZXJcXG5vZGVfbW9kdWxlc1xccC1maWZvXFxub2RlX21vZHVsZXNcXHAtZGVmZXJcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcERlZmVyID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IHt9O1xuXG5cdGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0ZGVmZXJyZWQucmVqZWN0ID0gcmVqZWN0O1xuXHR9KTtcblxuXHRyZXR1cm4gZGVmZXJyZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBEZWZlcjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/p-fifo/node_modules/p-defer/index.js\n");

/***/ })

};
;