<template>
  <button class="cheese-switch" @click="toggle" :class="{'cheese-checked':value}"><span></span></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: "Switch",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    func: {
      type: Function as PropType<(bool: boolean) => void> ,
      required: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      const { value, func } = props
      // v-model事件名必须为update:开头
      context.emit('update:value', !value)
      func && func(!value)
    }
    return {
      toggle
    }
  }
})
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
.cheese-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.cheese-checked { background: #1890ff;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.cheese-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>
