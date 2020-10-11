<template>
  <button
    class="cheese-button"
    :class="classes"
    :disabled="disabled"
  >
    <span class="cheese-loadingIndicator" v-if="loading"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, toRefs } from 'vue'

type LevelType = 'main' | 'normal' | 'danger'
type ThemeType = 'button' | 'link' | 'text'
type SizeType = 'small' | 'normal' | 'big'

export default defineComponent({
  name: "Button",
  // inheritAttrs: false, //禁止默认事件绑定,可以使用v-bind="$attrs"重新绑定
  props: {
    theme: {
      type: String as PropType<ThemeType>,
      default: 'button'
    },
    size: {
      type: String as PropType<SizeType>,
      default: 'normal'
    },
    level:{
      type: String as PropType<LevelType>,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    // 或使用context.attrs重新绑定
    // props需要声明才能使用,attrs不需要
    // props没有声明的属性会在attrs中
    // props不包含事件,attrs包含
    // props支持string以外类型,attrs只有string
    // const { size, ...rest } = context.attrs
    // return {
    //   rest
    // }
    // props直接结构会失去响应式，需要使用toRefs后再结构
    const { theme, size, level } = toRefs(props)
    const classes = computed(() => {
      return {
        [`cheese-theme-${theme.value}`]: theme.value,
        [`cheese-size-${size.value}`]: size.value,
        [`cheese-level-${level.value}`]: level.value,
      }
    })
    return {
      classes
    }
  }
})
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.cheese-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cheese-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.cheese-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.cheese-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.cheese-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.cheese-theme-button {
    &.cheese-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.cheese-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.cheese-theme-link {
    &.cheese-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cheese-theme-text {
    &.cheese-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.cheese-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cheese-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.cheese-theme-link, &.cheese-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .cheese-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cheese-spin 1s infinite linear;
  }
}
@keyframes cheese-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
