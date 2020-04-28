const express = require('./express')
// const express = require('express')


/*
 *  request,response
 *  调用 init 方法：
 *   cache，engines，settings 创建这个三个对象
 * 调用 defaultConfiguration 方法：
 *   设置 x-powered-by，etag，env，query parser，subdomain offset，trust proxy
 *   settings.trustProxyDefaultSymbol = true
 *   on('mount') 事件
 *   locals = {}
 *   mountpath = '/'
 *   locals.settings = settings
 *   view = View()
 *   views = ./views
 *   jsonp callback name = callback
 *   view cache = true
 *   router = Error
 * */
const app = new express()

// 设置模板引擎
// app.engine()
//
app.use((req,res,next)=>{
    req.test = 11
    next()
})

/*
* 创建 this._router = Router (req.query处理，req=APP.req,res=APP.res)
* 创建路由 Route('/'), 将当前 Route.dispatch 加入 this._router.stack 中
* 将所有的方法推入到 route.stack=['get','post']
* delete/get/post/put 都是相同的
*
* 创建 Layer[ path='/',handle = Route.dispatch() ]
* 创建 Route , Route.dispatch 将 get,post 方法加入 stack 中
* */
app.all('/', (req, res) => {
    console.log(1)
})
app.get("*", (req, res) => {
    console.log(1)
    res.end('dd')
})

// app.route()
//
//
//
// app.render()



/*
* http.createServer(this)  app.handle
* */

/*
* 一次请求过程
* app.handle()
* router.handle()
* req.next = next
* match && idx < stack.length 遍历 router.stack 栈
*
*
* */


app.listen(3033)


/*
* Router 类
* params={}
* _params=[]
* caseSensitive敏感模式
* mergeParams合并参数
* stack=[] 用来存路径回调的 Layer[handle/name]
* strict严格模式
* */

/*
* Layer 类
* handle 句柄
* name 名称
* params 参数
* path 路径
* regexp 路径正则表达式
*
*
* */

/*
* Route 类
* path 路径
* stack 调用栈
* methods 请求方法
* */