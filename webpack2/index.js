let tesst = import('./test/ee.js');
let tessts = import('./test/ee.js');
import d,{ a } from './page/home.js'
import { b } from './page/home.js'
import s from './page/home.js'
var test = {
    a: 1,
    b: 2
}
function f(a, b) {
    return a + b
}
const fs = f(1, 2)
console.log(fs)
console.log(a)
console.log(s)
console.log(d)
console.log(b())
tesst.then(res=>{
    console.log(res)
})
tessts.then(res=>{
    console.log(res)
    console.log(2)
})

