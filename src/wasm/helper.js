const createPromiseCallback = () => {
    let callback
    const promise = new Promise((resolve, reject) => {
        callback = () => {
            resolve()
        }
    })
    return [promise, callback]
}


module.exports = function(Module, m) {
    const [promise, callback ] = createPromiseCallback()
    Module.onRuntimeInitialized = callback
    Module.onload = promise
    m.exports = Module
}