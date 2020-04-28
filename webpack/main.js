
const a = require('./components/a.vue')
const b  = import(/* webpackChunkName: "m2" */ './m2')
const d  = import(/* webpackChunkName: "m2" */'./m1')
const l  = import(/* webpackChunkName: "m3" */'./m3')
b.then((rst)=>{
    console.log('b',new Date().getTime() - window.start)

})
console.log(new Date().getTime() - window.start)
console.log(a)
