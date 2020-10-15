<template>
  <div>
    <h1>示例1</h1>
    <Tabs v-model:selected="x">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  name: "TabsDemo",
  components: {
    Tab,
    Tabs
  },
  setup() {
    const x = ref('导航2')
    return {
      x
    }
  }
}
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
