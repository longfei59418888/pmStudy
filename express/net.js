const http = require('http')
const regExpCompile = require('path-to-regexp')
class Route {
    constructor(option) {
        // methods,path
        Object.assign(this, option)
        this.stack = []

    }

    addLayer(method, handle) {
        const layer = {
            method,
            handle,
        }
        this.stack.push(layer)
    }

    dispatch(req, res, next) {
        const {stack} = this;
        const match = false;
        const layer = null
        const {method} = req
        let id = 0
        let handle = null

        while (!handle && id < stack.length) {
            const layer = stack[id++]
            if (method.toLowerCase() === layer.method) {
                handle = layer.handle
                continue
            }
        }
        if (!handle) next && next()
        handle(req, res, next)
    }
}
class Layer {
    constructor(option, fn) {
        // path,name,regexp
        Object.assign(this, option)
        this.handle = fn
    }
}
class Router {
    constructor() {
        this.stack = []
    }

    use(path, fn) {
        const layer = new Layer({
            path,
            use: true,
            regexp: regExpCompile(path, []),
        }, fn)
        layer.route = null
        this.stack.push(layer)
    }

    route(path, fn, methods = []) {
        const route = new Route({
            path
        })
        methods.forEach(item => {
            route.addLayer(item, fn)
        })
        const layer = new Layer({
            path,
            regexp: regExpCompile(path, []),
        }, route.dispatch.bind(route))
        layer.route = route
        this.stack.push(layer)
    }

    handle(req, res, callback) {
        const {url} = req
        const {stack} = this
        let idx = 0

        next()

        function next() {
            let match = false
            let route = null
            let layer = null
            while (!match && idx < stack.length) {
                layer = stack[idx++]
                match = layer.regexp.exec(url)
                if (layer.use) match = true
                route = layer.route
                if (!match) continue
                if (!route) continue
            }
            if (!match) {
                callback && callback()
                return
            }
            layer.handle(req, res, next)
        }
    }

}
const app = {
    use: function (fn) {
        let router = this._router
        if (!router) {
            router = new Router()
            this._router = router
        }
        let path = '/'
        if (typeof fn !== 'function') {
            path = fn
            fn = arguments[1]
        }
        router.use(path, fn)

    },
    get: function (fn) {
        let router = this._router
        if (!router) {
            router = new Router()
            this._router = router
        }
        let path = '/'
        if (typeof fn !== 'function') {
            path = fn
            fn = arguments[1]
        }
        router.route(path, fn, ['get'])
    },
    post: function (fn) {
        let router = this._router
        if (!router) {
            router = new Router()
            this._router = router
        }
        let path = '/'
        if (typeof fn !== 'function') {
            path = fn
            fn = arguments[1]
        }
        router.route(path, fn, ['post'])
    },
    all: function () {

    },
    listen: function () {
        const _this = this

        const server = http.createServer(function (req, res) {
            _this._router.handle(req, res)
        })
        server.listen.apply(server, arguments)
    }
}
app.use((req, res, next) => {
    req.test = 'test1'
    next()
})
app.use((req, res, next) => {
    req.test2 = 'test2'
    next()
})
app.get('/', (req, res) => {
    const tst = req.test
    const tst2 = req.test2
    res.end('/' + tst + tst2)
})
app.get('/get', (req, res) => {
    const tst = req.test
    const tst2 = req.test2
    res.end('get' + tst + tst2)
})
app.get('/test', (req, res) => {
    const tst = req.test
    const tst2 = req.test2
    res.end('test' + tst + tst2)
})
app.listen(3300)
