const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('path', false).set('fs', false)
    config.module.rule('web-worker')
    .test(/\.worker\.js$/)
    .use('worker-loader')
      .loader('worker-loader')
      .options({
        filename: '[name].[hash].js'
      }).end()
    .use('babel-loader')
      .loader('babel-loader')
    config.module.rule('wasm')
      .test(/\.wasm$/)
      .use('wasm-loader')
      .loader(path.resolve(__dirname, './src/loaders/wasm-loader.js'))
      .options({
        limit: 5 * 1024
      })
  }
})
