<demo>
支持显示加载中
</demo>

<template>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from "cheese-ui-vue";
export default defineComponent({
  components: {
    Button
  }
})
</script>

<style scoped>

</style>
