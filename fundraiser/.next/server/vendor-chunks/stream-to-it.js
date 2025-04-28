/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stream-to-it";
exports.ids = ["vendor-chunks/stream-to-it"];
exports.modules = {

/***/ "(ssr)/../node_modules/stream-to-it/source.js":
/*!**********************************************!*\
  !*** ../node_modules/stream-to-it/source.js ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = readable => {\n  // Node.js stream\n  if (readable[Symbol.asyncIterator]) return readable\n\n  // Browser ReadableStream\n  if (readable.getReader) {\n    return (async function * () {\n      const reader = readable.getReader()\n\n      try {\n        while (true) {\n          const { done, value } = await reader.read()\n          if (done) return\n          yield value\n        }\n      } finally {\n        reader.releaseLock()\n      }\n    })()\n  }\n\n  throw new Error('unknown stream')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3N0cmVhbS10by1pdC9zb3VyY2UuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJEOlxcRnVuZFJhaXNlclxcbm9kZV9tb2R1bGVzXFxzdHJlYW0tdG8taXRcXHNvdXJjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlYWRhYmxlID0+IHtcbiAgLy8gTm9kZS5qcyBzdHJlYW1cbiAgaWYgKHJlYWRhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkgcmV0dXJuIHJlYWRhYmxlXG5cbiAgLy8gQnJvd3NlciBSZWFkYWJsZVN0cmVhbVxuICBpZiAocmVhZGFibGUuZ2V0UmVhZGVyKSB7XG4gICAgcmV0dXJuIChhc3luYyBmdW5jdGlvbiAqICgpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IHJlYWRhYmxlLmdldFJlYWRlcigpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKVxuICAgICAgICAgIGlmIChkb25lKSByZXR1cm5cbiAgICAgICAgICB5aWVsZCB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICByZWFkZXIucmVsZWFzZUxvY2soKVxuICAgICAgfVxuICAgIH0pKClcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcigndW5rbm93biBzdHJlYW0nKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/stream-to-it/source.js\n");

/***/ })

};
;