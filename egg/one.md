
#### 首先创建 master 并调用 ready 方法
+ [egg-cluster/lib/master.js]
+ options:
    + framework：egg框架目录
    + baseDir：工作目录
    + workers：内核数
    + plugins：自定义插件
    
+ workerManager：进程管理工具
    + agent：代理进程
    + workers：工作进程
    
+ messenger：进程通信工具
    + master：当前进程
    + send(data)：
        + from
        + receiverPid
        + to
        + action
        + msg
        
+ logger：ConsoleLogger
+ this.ready
+ 函数进行或者句柄
    + agent-exit
    + agent-start
    + app-start
    + reload-worker
    + agent-start
    + realport
    + realport

+ forkAgentWorker： 创建代理进程
+ [egg-cluster/lib/agent_worker.js]
+ [egg/index.js] -> [egg/lib/agent.js]
+ 创建一个 Agent 实例egg
    + Agent[egg/lib/agent.js]  
    + EggApplication[egg/lib/egg.js]
    + EggCore[egg-core/lib/egg.js]
    + KoaApplication
    + 继承 Koa
    
#### Agent 类
[egg-core/lib/egg.js]
+ console：框架的日志工具
+ lifecycle：生命周期函数，执行 boot 函数
    + BOOTS：启动函数列表
    + INIT：初始化列表
    + 句柄 ready_stat
+ loader：加载器
[egg/lib/egg.js]
+ ContextCookies
+ ContextLogger
+ ContextHttpClient
+ HttpClient
+ [this.loader.loadConfig()] ：加载插件配置和配置文件
+ app.loader.plugins
    + path
    + name
    + dev
+ app.loader.config
    + ...
    + coreMiddleware
    + appMiddleware
+ messenger 通信管理工具
    + 句柄 egg-ready
+ [this.ready()]  
+ cluster 
+ BaseContextClass 
+ Controller 
+ Service 
+ Subscription 
+ BaseHookClass 
+ Boot 
[egg/lib/agent.js]  
+ [loadAgentExtend()] 
+ [loadContextExtend()]
+ 扩展方法 app.agent/app.context 上面方法
+ [loadCustomAgent()]
+ 添加代理代理周期 并执行 插件内/app内的 agent.js 函数

+ 加载并执行 [egg-watcher/agent.js]
+ 执行 this._eventSource.ready(() => this.ready(true)) [egg-watcher/lib/watcher.js]






#### Loader 类
[egg/lib/loader/agent_worker_loader.js]
[egg-core/lib/loader/egg_loader.js]
+ loadConfig：loadPlugin/loadConfig
+ load：loadAgentExtend/loadContextExtend/loadCustomAgent
+ app：agent
+ lifecycle：agent.lifecycle
+ plugins
+ config
    
    
    
    
#### Cluster 类
+ createClient 
    + 创建一个 server (net 服务器类)
        + _sockets
        + _server
        + _port
        + 句柄 connection

#### Leader 类
+ _connections
+ _subListeners
+ __subConnMap
+ _subData
+ _server
+ _transcode
+ _realClient watcher 类
+  
    
    

#### APP 类
[egg-core/lib/egg.js]
+ console：框架的日志工具
+ lifecycle：生命周期函数，执行 boot 函数
    + BOOTS：启动函数列表
    + INIT：初始化列表
    + 句柄 ready_stat
+ loader：加载器
[egg/lib/egg.js]
+ ContextCookies
+ ContextLogger
+ ContextHttpClient
+ HttpClient
+ [this.loader.loadConfig()] ：加载插件配置和配置文件
+ app.loader.plugins
    + path
    + name
    + dev
+ app.loader.config
    + ...
    + coreMiddleware
    + appMiddleware
+ messenger 通信管理工具
    + 句柄 egg-ready
+ [this.ready()]  
+ cluster 
+ BaseContextClass 
+ Controller 
+ Service 
+ Subscription 
+ BaseHookClass 
+ Boot 
[egg/lib/application.js]
+ [this.loader.load()] ：加载 context/custom/app/server/middle/controller/router
+ [loadCustomLoader()]
    + 加载 config.customLoader 
+ [loadCustomApp()]
    + 加载并执行 app.js
    

    
    
    
    
    
    
    
const obj = {}
Error.stackTraceLimit =  20
Error.captureStackTrace(obj)
console.log(obj.stack)  
    
    
    
    
    
    
    
    
    
    
    
    
    
    