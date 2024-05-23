// index.js 為主要 node.js 執行檔案

// import 必須在檔案最上面
// 從後面的 '' 匯入檔案，所有檔案都要寫相對路徑 ./，沒有的話變成套件
// from 'a.js' ---> 引用 a.js 套件；from './a.js' --->引用 a.js檔案
// 將 a.js 的export default 引用進來，取名為 a ，a 可以自己改
import a from './a.js'

// 一次引用所有 export 取名為 b
import * as b from './b.js'
// 只引用 b1 和 b2
import {b1,b2} from './b.js'
// 只引用 b1 ，用 as 重新命名為 bb1
import {b1 as bb1} from './b.js'

// 引用 export default 取名為 c
// 引用所有 export 取名為 cc
import c, *as cc from './c.js'
import {c1 as cc1}  from './c.js'
// 瀏覽器模組化 type='Model'?


console.log('index - a.a1' + a.a1)
console.log('index - a.add:' + a.add())
// import 拉進來的變數僅 read only 唯獨，不會改到原本的檔案的值
a.a1 = 100
a.a2 = 200
a.a3 = 300
// 呼叫原本檔案的 a3 用 function 改值，同一個
a.test(500)
// .push 同樣會改同一個值
a.a4.push(300)
console.log( 'index - a.a1' + a.a1)
console.log( 'index - a.a2' + a.a2)
console.log( 'index - a.a3' + a.a3)
console.log( 'index - a.a4' + a.a4)
a.log()
// 沒辦法改 import 進來的值，但可以在 import 進來的那份寫 function 改值


// 
console.log('index - b.b1' + b.b1)
console.log('index - b1' + b1)
console.log('index - bb1' + bb1)
// 具名引用進來的是 Readonly ，不能用 = 換掉
// TypeError: Cannot assign to rad only property 'b1' of object '[object Module]'
// b1 = 100
// b3 = 100
b.test(500)
b.b4.push(300)
console.log('index - b.b3'+ b.b3)
console.log('index - b.b3'+ b.b4)
b.log()
// node.js 好處是可以拆開檔案寫

console.log('index - c.c3' + c.c3)
console.log('index - cc.c1' + cc.c1)


