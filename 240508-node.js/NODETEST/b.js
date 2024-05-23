// 一個檔案可以有好幾個
// export 有名字用法不同
export const b1 = 1
export const b2 = 2
export let b3 = 3
export const b4 = [100,200]
export const add = () => {
    return b1 + b2+ b3
}
export const log = () => {
    console.log('b.js b1:' + b1)
    console.log('b.js b2:' + b2)
    console.log('b.js b3:' + b3)
    console.log('b.js b4:' + b4)
}
// export 單獨把變數匯出
// export default 沒有名字; 把組合物件丟出來
export const test = (value) => {
    b3 = value
}
