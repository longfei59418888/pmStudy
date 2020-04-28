const Koa = require('./lib/application');

/*
* 创建一个实例
* context 上下文
* middleware 插件数组
* request
* response
* */

const app = new Koa();

/*
* use 功能就是将函数加入 middleware 数组中
* */
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

app.listen(3000);
/*
* 接受一个请求的时候
* 执行 callback 方法
* 包装所有的 middleware 中间件
* createContext 创建新的上下文
* handleRequest 执行函数
*
*
*
* */

















