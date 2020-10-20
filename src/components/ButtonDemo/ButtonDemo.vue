<template>
  <h1>Button 组件示例</h1>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
  <Demo :component="ButtonDemo5" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from "../Demo.vue";
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo4.vue";
import ButtonDemo5 from "./ButtonDemo5.vue";
 export default defineComponent({
   name: "ButtonDemo",
   components: {
     Demo
   },
   setup() {
     return {
       ButtonDemo1,
       ButtonDemo2,
       ButtonDemo3,
       ButtonDemo4,
       ButtonDemo5
     }
   }
 })
</script>

<style scoped lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
