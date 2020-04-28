
### 首先创建 master 并调用 ready 方法
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    