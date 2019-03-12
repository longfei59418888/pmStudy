(function (modules) {
  var installedModules = {}; //缓存
  /*
  * 加载模块函数
  * 传入模块id
  * */
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
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault() {
        return module['default'];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";

  // 加载入口文件
  return __webpack_require__(__webpack_require__.s = 0);
})
([
  (function (module, exports, __webpack_require__) {
    const a = __webpack_require__(1)
    const b = __webpack_require__(2)
  }),
  (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
    __webpack_exports__["default"] = ({
      a: 1
    });
  }),
  (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
    __webpack_exports__["default"] = ({
      b: 2
    });
  })
]);
