(function(modules) {
    var cache = {};

    function __webpack_require__(id) {
        if(cache[id]) return cache[id].exports;
        var module = { exports: {}, id };
        modules[id](__webpack_require__, module.exports, module);
        cache[id] = module.exports;
        return module.exports;
    }

    __webpack_require__.compat = function(id) {
        const exports = __webpack_require__(id);
        if(typeof exports === "object" && exports.__esModule)
            return exports;
        return {
            ...exports,
            default: exports
        };
    };

    __webpack_require__.d = function(exports, name, getter) {
        Object.defineProperty(exports, name, {
            get: getter,
            enumerable: true
        });
    };

    var chunkCache = {};
    var chunkResolve = {};

    __webpack_require__.loadChunk = function(id) {
        if(chunkCache[id]) return chunkCache[id];
        var promise = new Promise((resolve, reject) => {
            chunkResolve[id] = resolve;
            var script = document.createElement("script");
            script.src = `dist/${id}.js`;
            document.head.appendChild(script);
        });
        chunkCache[id] = promise;
        return promise;
    };

    window.webpackJsonp = function(id, newModules) {
        for(var mid in newModules) {
            modules[mid] = newModules[mid];
        }
        if(chunkResolve[id])
            chunkResolve[id]();
    };

    __webpack_require__(0);
}({
    // TODO insert modules here
}));