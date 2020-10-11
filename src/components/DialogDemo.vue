<template>
  <div>
    Dialog 示例
  </div>
  <Button @click="toggle">示例1</Button>
  <Dialog v-model:visible="flag" :ok="okFn" :cancel="cancelFn">
    <template v-slot:title>
      <div>title</div>
    </template>
    <template v-slot:content>
      <div>hello</div>
    </template>
  </Dialog>
  <br>
  <Button @click="showDialog">示例2</Button>
</template>

<script>
import {defineComponent, toRef, ref} from 'vue';
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from '../lib/openDialog'
export default defineComponent({
  name: "DialogDemo",
  components: {
    Dialog,
    Button
  },
  setup() {
    const flag = ref(false)
    const toggle = () => {
      flag.value = !flag.value
    }
    const showDialog = () => openDialog()
    const okFn = () => {}
    const cancelFn = () => {}
    return {
      flag,
      toggle,
      okFn,
      cancelFn,
      showDialog
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
