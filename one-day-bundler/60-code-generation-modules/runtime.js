!(function(module) {
    var cache = {};

    function __magic__(id) {
        if(cache[id]) return cache[id].exports;
        var module = {
            exports: {}
        };
        modules[id](__magic__, module.exports, module);
        cache[id] = module;
        return module.exports;
    }

    window.magicJsonp = function(chunkId, newModules) {
        for(var id in newModules) {
            modules[id] = newModules[id];
        }
        chunkResolves[chunkId]();
    };

    var chunkResolves = {};

    var chunkCache = {};

    __magic__.loadChunk = function(chunkId) {
        if(chunkCache[chunkId]) return chunkCache[chunkId];
        var promise = new Promise(resolve => {
            chunkResolves[chunkId] = resolve;
            var script = document.createElement("script");
            script.src = "one-day-bundler/70-assets/" + {0: "async"}[chunkId] + ".js";
            document.head.appendChild(script);
        });
        chunkCache[chunkId] = promise;
        return promise;
    }
}({
    // TODO insert modules here
}));