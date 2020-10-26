<demo>
示例2
</demo>

<template>
  <div>
    <Button>hello</Button>
    <Button size="big">hello</Button>
    <Button size="small">hello</Button>
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
