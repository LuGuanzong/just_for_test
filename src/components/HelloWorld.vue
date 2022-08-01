<template>
  222
  <button @click="test">添加元素</button>
  <button @click="test2">输出当前数组</button>
  <button @click="test3">取消所有static</button>
  <grid-layout v-model:layout="layout"
               :col-num="12"
               :row-height="30"
               :is-draggable="draggable"
               :is-resizable="resizable"

               :use-css-transforms="true"
  >
    <grid-item v-for="item in layout"
               :static="item.static"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
    >
      <span class="text">{{itemTitle(item)}}</span>
    </grid-item>
  </grid-layout>
  <div>1111</div>
<!--  <grid-layout v-model:layout="layout2"-->
<!--               :col-num="12"-->
<!--               :row-height="30"-->
<!--               :is-draggable="draggable"-->
<!--               :is-resizable="resizable"-->
<!--               :vertical-compact="true"-->
<!--               :use-css-transforms="true"-->
<!--  >-->
<!--    <grid-item v-for="item in layout2"-->
<!--               :static="item.static"-->
<!--               :x="item.x"-->
<!--               :y="item.y"-->
<!--               :w="item.w"-->
<!--               :h="item.h"-->
<!--               :i="item.i"-->
<!--    >-->
<!--      <span class="text">{{itemTitle(item)}}</span>-->
<!--    </grid-item>-->
<!--  </grid-layout>-->
</template>

<script lang="ts" setup>

import {ref} from "vue";

  const layout = ref( [
        {"x":2,"y":0,"w":2,"h":4,"i":"1", static: false},
        {"x":4,"y":0,"w":2,"h":5,"i":"2", static: false},
        {"x":6,"y":0,"w":2,"h":3,"i":"3", static: false},
        {"x":8,"y":0,"w":2,"h":3,"i":"4", static: false},
        {"x":10,"y":0,"w":2,"h":3,"i":"5", static: false},
        {"x":0,"y":5,"w":2,"h":5,"i":"6", static: false},
        {"x":2,"y":5,"w":2,"h":5,"i":"7", static: false},
        {"x":4,"y":5,"w":2,"h":5,"i":"8", static: false},
        {"x":6,"y":3,"w":2,"h":4,"i":"9", static: false},
        {"x":8,"y":4,"w":2,"h":4,"i":"10", static: false},
        {"x":10,"y":4,"w":2,"h":4,"i":"11", static: false},
        {"x":0,"y":10,"w":2,"h":5,"i":"12", static: false},
        {"x":2,"y":10,"w":2,"h":5,"i":"13", static: false},
        {"x":4,"y":8,"w":2,"h":4,"i":"14", static: false},
        {"x":6,"y":8,"w":2,"h":4,"i":"15", static: false},
        {"x":8,"y":10,"w":2,"h":5,"i":"16", static: false},
        {"x":10,"y":4,"w":2,"h":2,"i":"17", static: false},
        {"x":0,"y":9,"w":2,"h":3,"i":"18", static: false},
        {"x":2,"y":6,"w":2,"h":2,"i":"19", static: false},
        {"x":0,"y":12,"w":2,"h":2,"i":"0", static: false},
      ])
  const layout2 = ref( [
        {"x":2,"y":0,"w":2,"h":4,"i":"1", static: false},
        {"x":4,"y":0,"w":2,"h":5,"i":"2", static: false},
        {"x":6,"y":0,"w":2,"h":3,"i":"3", static: false},
        {"x":8,"y":0,"w":2,"h":3,"i":"4", static: false},
        {"x":10,"y":0,"w":2,"h":3,"i":"5", static: false},
        {"x":0,"y":5,"w":2,"h":5,"i":"6", static: false},
        {"x":2,"y":5,"w":2,"h":5,"i":"7", static: false},
        {"x":4,"y":5,"w":2,"h":5,"i":"8", static: false},
        {"x":6,"y":3,"w":2,"h":4,"i":"9", static: false},
        {"x":8,"y":4,"w":2,"h":4,"i":"10", static: false},
        {"x":10,"y":4,"w":2,"h":4,"i":"11", static: false},
        {"x":0,"y":10,"w":2,"h":5,"i":"12", static: false},
        {"x":2,"y":10,"w":2,"h":5,"i":"13", static: false},
        {"x":4,"y":8,"w":2,"h":4,"i":"14", static: false},
        {"x":6,"y":8,"w":2,"h":4,"i":"15", static: false},
        {"x":8,"y":10,"w":2,"h":5,"i":"16", static: false},
        {"x":10,"y":4,"w":2,"h":2,"i":"17", static: false},
        {"x":0,"y":9,"w":2,"h":3,"i":"18", static: false},
        {"x":2,"y":6,"w":2,"h":2,"i":"19", static: false},
        {"x":0,"y":12,"w":2,"h":2,"i":"0", static: false},
      ])
   const draggable = ref(true)
   const resizable = ref(true)
   const index = ref(0)
   const itemTitle = (item: any) => {
      let result = item.i;
      if (item.static) {
        result += " - Static";
      }
      return result;
    }
    const num = ref(-1)
    const test = () => {
      const tmp = [
          {"x":0,"y":5,"w":12,"h":2,"i":(num.value--).toString(), static: true},
          {"x":0,"y":7,"w":2,"h":2,"i":(num.value--).toString(), static: true},
          {"x":0,"y":9,"w":2,"h":2,"i":(num.value--).toString(), static: true},
          {"x":2,"y":9,"w":2,"h":2,"i":(num.value--).toString(), static: true},
      ]
        layout.value = tmp.concat(layout.value)
    }
    const test2 = () => {
      console.log('layout.value', layout.value)
    }
    const test3 = () => {
      const tmp = JSON.parse(JSON.stringify(layout.value))
      layout.value = tmp.map((item: any) => {
        item.static = false
        return item
      })
    }
</script>

<style scoped lang="less">
.vue-grid-layout {
  background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}


</style>