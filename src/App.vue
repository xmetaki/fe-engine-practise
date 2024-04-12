<template>
  <div id="app">
  </div>
</template>

<script>
import Worker from '@/workers/demo.worker'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      worker: null
    }
  },
  mounted() {
    const worker = this.worker = new Worker()
    worker.postMessage({
      hello: 'world'
    })
    worker.addEventListener('message', (event) => {
      console.log('主线程接收到了数据')
      console.log(event.data)
    })
  },
  beforeDestroy() {
    if (this.worker) {
      this.worker.terminate()
      console.log('worker已经终止')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
