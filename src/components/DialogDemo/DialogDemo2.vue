<demo>
示例2
</demo>

<template>
  <Button @click="showDialog">示例2</Button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { openDialog, Button } from "cheese-ui-vue";
export default defineComponent({
  components: {
    Button
  },
  setup() {
    const showDialog = () => openDialog()
    return {
      showDialog
    }
  }
})
</script>

<style scoped>

</style>
