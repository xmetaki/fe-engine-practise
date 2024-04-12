const wasm = require('@/wasm/hello')
let isLoaded = false
const loadWasm = async () => {
    if (isLoaded) return
    await wasm.onload
    isLoaded = true
}
// import lodash from 'lodash'
// const obj = {
//     foo: 'yes'
// }
// lodash.has(obj, 'foo')
// 
const eventHandler = (msg) => {
    const result = `i have been resolved your msg: ${msg}`
    self.postMessage(result)
}
self.addEventListener('message', async (event) => {
    await loadWasm()
    const add = wasm._add()
    console.log(add)
    eventHandler(event)
})