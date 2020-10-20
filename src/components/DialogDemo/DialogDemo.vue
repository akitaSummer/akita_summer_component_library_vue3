<template>
  <h1>Dialog 组件示例</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>

<script>
import {defineComponent, toRef, ref} from 'vue';
import DialogDemo1 from "./DialogDemo1.vue";
import DialogDemo2 from "./DialogDemo2.vue";
import Demo from '../Demo.vue'
export default defineComponent({
  name: "DialogDemo",
  components: {
    Demo
  },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2
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
