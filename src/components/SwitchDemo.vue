<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: "SwitchDemo",
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
