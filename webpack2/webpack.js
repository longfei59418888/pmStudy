const acorn = require('acorn');
const fs = require('fs')
const path = require('path')
const dynamicImport = require('acorn-dynamic-import').default
const inject = require('acorn-dynamic-import/lib/walk').default
const acornWalk = require('acorn-walk')
const Parser = acorn.Parser.extend(dynamicImport)
const walk = inject(acornWalk);
const escodegen = require('escodegen');


function init(entry) {
    const modules = []
    const moduleMap = {}
    loaderJs(entry)

    function loaderJs(file, async) {
        const index = fs.readFileSync(path.join(__dirname, file), 'utf8')
        const astStr = Parser.parse(index, {
            sourceType: 'module'
        })
        const uuid = modules.length
        if (!async) modules[uuid] = {}
        //遍历树
        walk.ancestor(astStr, {
            CallExpression(_, ancestors) {
                const {callee, arguments} = _
                const {type} = callee
                if (type == 'Import') {
                    const {value} = arguments[0]
                    let asyncFile = loaderJs(value, true)
                    const pathName = `./output${value.substring(value.lastIndexOf('/'))}`
                    asyncFile = `webpackJsonpLoad("${pathName}",${asyncFile})`
                    arguments[0].value = pathName
                    const output = path.join(__dirname, pathName)
                    fs.writeFileSync(output, asyncFile, 'utf8')
                    _.callee = {
                        "type": "MemberExpression",
                        "object": {
                            "type": "Identifier",
                            "name": "__webpack_require__"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "e"
                        },
                        "computed": false
                    }
                }
            },
            ExportNamedDeclaration(_, ancestors) {
                const {declaration} = _
                const {declarations} = declaration
                const {id, init} = declarations[0]
                _.type = 'ExpressionStatement'
                _.expression = {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                        "type": "MemberExpression",
                        "object": {
                            "type": "Identifier",
                            "name": "__webpack_exports__"
                        },
                        "property": {
                            "type": "Literal",
                            "value": id.name,
                        },
                        "computed": true
                    },
                    "right": init
                }
            },
            ExportDefaultDeclaration(_, ancestors) {
                const {declaration} = _
                _.type = 'ExpressionStatement'
                _.expression = {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                        "type": "MemberExpression",
                        "object": {
                            "type": "Identifier",
                            "name": "__webpack_exports__"
                        },
                        "property": {
                            "type": "Literal",
                            "value": "default",
                        },
                        "computed": true
                    },
                    "right": declaration
                }
            },
            ImportDeclaration(_, ancestors) {
                const {specifiers, source} = _
                const path = source.value
                if (!moduleMap[path]) loaderJs(path)
                const nodes = []
                specifiers.forEach(item => {
                    const {type, local, imported} = item
                    if (type == 'ImportSpecifier') {
                        const node = {
                            type: 'VariableDeclaration',
                            kind: 'const',
                            declarations: [
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": local.name
                                    },
                                    "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "__webpack_require__"
                                            },
                                            "arguments": [
                                                {
                                                    "type": "Literal",
                                                    "value": moduleMap[path],
                                                    "raw": source.raw
                                                }
                                            ]
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": imported.name
                                        },
                                        "computed": false
                                    }
                                }
                            ]
                        }
                        nodes.push(node)
                    } else if (type == 'ImportDefaultSpecifier') {
                        const node = {
                            type: 'VariableDeclaration',
                            kind: 'const',
                            declarations: [
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": local.name
                                    },
                                    "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "__webpack_require__"
                                            },
                                            "arguments": [
                                                {
                                                    "type": "Literal",
                                                    "value": moduleMap[path],
                                                    "raw": source.raw
                                                }
                                            ]
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "default"
                                        },
                                        "computed": false
                                    }
                                }
                            ]
                        }
                        nodes.push(node)
                    }
                })
                const index = ancestors[0].body.indexOf(_)
                Array.prototype.splice.apply(ancestors[0].body, [index, 1].concat(nodes))
            },
        })
        let r = escodegen.generate(astStr);
        const module = ` (function (module, __webpack_exports__, __webpack_require__) {\n${r}\n})`
        if (!async) {
            modules[uuid] = module
            moduleMap[file] = uuid
        }
        return module
    }

    const app = `(function (modules) {
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
([${modules.join(',')}])`
    const index = fs.writeFileSync(path.join(__dirname, './output/app.js'), app, 'utf8')
    console.log(app)
    return {
        modules,
        moduleMap
    }
}


init('./index.js')
// init('./page/home.js')
process.exit(0)

