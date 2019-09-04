
const a = require('./components/a.vue')
const b  = import('./m2')
const d  = import('./m1')
b.then((rst)=>{
    console.log(rst)
})
console.log(a)
