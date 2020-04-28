const http = require('http')

class App {
    constructor() {
        this.middleware = []
    }

    use(fn) {
        this.middleware.push(fn)
    }

    // 链式模型
    compose() {
        const {middleware} = this
        return async function (ctx) {
            let index = 0
            const next = async function () {
                let handle = null
                while (!handle && index < middleware.length) {
                    handle = middleware[index++]
                }
                if (handle) return await handle(ctx, next)
                if (!handle) Promise.resolve()
            }
            await next();
        }
    }

    listen() {
        const callback = async (req, res) => {
            const handle = this.compose()
            const context = {
                response: res,
                request: req,
                app: this
            }
            await handle(context)
            res.end(context.body)
        }
        const server = http.createServer(callback)
        server.listen.apply(server, arguments)
    }
}

const app = new App()
app.use(async (ctx, next) => {
    ctx.body = 'one\n'
    await next()
    ctx.body += 'two\n'
})
app.use(async (ctx, next) => {
    ctx.body += 'three\n'
    await next()
    ctx.body += 'four\n'
})
app.listen(3300)
