<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool"/>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import { Switch } from "cheese-ui-vue";
export default defineComponent({
  components: {
    Switch
  },
  setup() {
    const bool = ref(true)
    return {
      bool
    }
  }
})
</script>

<style scoped>

</style>
