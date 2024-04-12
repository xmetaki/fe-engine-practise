<template>
  <div class="boolean-group">
    <div class="expression__wrapper"
         :key="index"
         v-for="(item, index) in expressionList"
      >
      <div class="jointer" v-if="item.type == 'jointer'">
        <div class="jointer-top line" :type="
           index === 1 && 'start'" v-if="item.type == 'jointer'">
        </div>
        <div class="jointer-content">
          {{item.value}}
        </div>
        <div class="jointer-bottom line" :type="index === expressionList.length - 2 && 'end'" v-if="item.type == 'jointer'">
      </div>
      </div>
      <div class="expression" v-if="item.type == 'expression'">
        <div class="key">{{ item.value.key}}</div>
        <div class="operator">{{ item.value.operator}}</div>
        <div class="value">{{ item.value.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    v1: {
      default: false
    },
    v2: {
      default: true
    }
  },
  data() {
    return {
      group: {
        expression: [
          { key: 'a', operator: '=', value: 'zz'},
          { key: 'g', operator: '=', value: 'mak'},
          { key: 'g', operator: '=', value: 'mak'},
          { key: 'g', operator: '=', value: 'mak'},
        ],
        jointer: [
          "and",
          "or",
          "not",
          "or",
        ]
      }
    }
  },
  computed: {
    expressionList() {
      let { expression, jointer } = this.group
      let list = []
      expression.forEach((item,index) => {
        if (index !== 0) {
          list.push({
            value: jointer[index - 1],
            type: 'jointer'
          })
        }
        list.push({
          value: item,
          type: 'expression'
        })
      })
      return list
    }
  }
}
</script>

<style lang="less">
.boolean-group {
  --line-height: 50px;
  padding: 30px 80px;

  overflow: hidden;
  background: #f0f0f0;
  border-radius: 20px;
  min-height: 100px;
  position: relative;
  .expression {
    height: 50px;
    border:1px solid #fff;
    padding: 10px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background: #f0f0f0;
    z-index: 1;
  }
}
.jointer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: relative;
  left: -60px;
  width: 60px;
  box-sizing: border-box;
  box-shadow: 0px 0px 12px 2px #d9d9d9;
  margin: 10px 0px;
  .jointer-content {
    height: 100%;
    z-index: 1;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid red;
    background: #fff;
  }
}

.line {
  position: absolute;
  left: 50%;
  border: 2px solid red;
  height: var(--line-height);
  width: 30px;
  &[type="start"] {
    border-top-left-radius: 10px;
  }
  &[type="end"] {
    border-bottom-left-radius: 10px;
  }
}

.jointer-top {
  top: calc(0px - var(--line-height));
  border-color: red transparent transparent red;
}
.jointer-bottom {
  bottom: calc(0px - var(--line-height));
  border-color: transparent transparent red red;
}
</style>
