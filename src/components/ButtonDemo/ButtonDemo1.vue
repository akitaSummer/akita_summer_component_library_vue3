<demo>
示例1
</demo>

<template>
  <div>
    <Button>hello</Button>
    <Button theme="button">hello</Button>
    <Button theme="link">hello</Button>
    <Button theme="text">hello</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from "../../lib/Button.vue";
export default defineComponent({
  components: {
    Button
  }
})
</script>

<style scoped>

</style>
