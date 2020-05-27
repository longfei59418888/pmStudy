const detectPorts = require('detect-port')
const cluster = require('cluster')

console.log(1)
detectPorts().then(res => {
    console.log(res)
    cluster.fork()
})