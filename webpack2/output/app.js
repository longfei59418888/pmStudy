(function (modules) {
    const installedModules = {}

    function __webpack_require__(moduleId) {
        // 检查缓存中是否有模块
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // 创建一个新模块，并缓存起来
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        // 调模块的函数，modules
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        // 返回对应模块
        return module.exports;
    }
    
  const queueCallBack = {}
    window.webpackJsonpLoad = (moduleId, modules) => {
      
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules.call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        queueCallBack[moduleId].forEach(item=>{
            item(module.exports)
        })
        // 返回对应模块
        return module.exports;
    }
    __webpack_require__.e = (path) => {
        return new Promise((resolve) => {
            if (installedModules[path] && installedModules[path].l) {
                resolve(installedModules[path].exports)
                return
            }
            if (!queueCallBack[path]) {
                queueCallBack[path] = [
                    (module) => {
                        resolve(module)
                    }
                ]
            } else {
                queueCallBack[path].push(
                    (module) => {
                        resolve(module)
                    }
                )
                return
            }
            var script = document.createElement('script');
            script.charset = 'utf-8';
            script.src = path;
            script.onload = () => {
                // queueCallBack[path][script] = script
            };
            document.head.appendChild(script);
        })
    }
    
    return __webpack_require__(__webpack_require__.s = 0);
})
([ (function (module, __webpack_exports__, __webpack_require__) {
let tesst = __webpack_require__.e('./output/ee.js');
let tessts = __webpack_require__.e('./output/ee.js');
const d = __webpack_require__(1).default;
const a = __webpack_require__(1).a;
const b = __webpack_require__(1).b;
const s = __webpack_require__(1).default;
var test = {
    a: 1,
    b: 2
};
function f(a, b) {
    return a + b;
}
const fs = f(1, 2);
console.log(fs);
console.log(a);
console.log(s);
console.log(d);
console.log(b());
tesst.then(res => {
    console.log(res);
});
tessts.then(res => {
    console.log(res);
    console.log(2);
});
}), (function (module, __webpack_exports__, __webpack_require__) {
__webpack_exports__['a'] = 1;
__webpack_exports__['b'] = () => {
    return 6;
};
const d = 4;
__webpack_exports__['default'] = d;
})])