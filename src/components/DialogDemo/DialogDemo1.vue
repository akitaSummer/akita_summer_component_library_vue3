<demo>
示例1
</demo>

<template>
  <Button @click="toggle">示例1</Button>
  <Dialog v-model:visible="flag" :ok="okFn" :cancel="cancelFn">
    <template v-slot:title>
      <div>title</div>
    </template>
    <template v-slot:content>
      <div>hello</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {openDialog} from "../../lib/openDialog";
export default defineComponent({
  components: {
    Dialog,
    Button
  },
  setup() {
    const flag = ref(false)
    const toggle = () => {
      flag.value = !flag.value
    }
    const okFn = () => {}
    const cancelFn = () => {}
    return {
      flag,
      toggle,
      okFn,
      cancelFn
    }
  }
})
</script>

<style scoped>

</style>
