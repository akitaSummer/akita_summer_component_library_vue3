<template>
<div class="cheese-tabs">
  <div class="cheese-tabs-nav" ref="container">
    <div
        class="cheese-tabs-nav-item"
        @click="select(t)"
        :class="{selected: t === selected}"
        v-for="(t, i) in titles"
        :key="Date.now() + i"
        :ref="el => { if (t === selected) { selectedItem = el } }"
    >{{t}}</div>
    <div class="cheese-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="cheese-tabs-content">
    <component
        class="cheese-tabs-content-item"
        :is="current"
        :key="current.props.title"
    ></component>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, watchEffect, onMounted} from 'vue'
import Tab from "./Tab.vue";
export default defineComponent({
  name: "Tabs",
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  setup(props, { slots, emit }) {
    const defaults = slots.default?.()
    const titles = ref<string[]>([])
    const selectedItem = ref<HTMLElement>()
    const indicator = ref<HTMLElement>()
    const container = ref<HTMLElement>()
    const select = (title: string) => {
      emit('update:selected', title)
    }
    const current = computed(() => {
      return defaults?.find((tag) => {
        return tag.props?.title === props.selected
      })
    })

    if (defaults) {
      defaults.forEach((tag) => {
        if(JSON.stringify(tag.type) !== JSON.stringify(Tab)) {
          throw new Error('Tabs 字标签必须是 Tab')
        }
      })
      titles.value = defaults.map((tag) => {
        return tag.props?.title
      })
    }

    const setIndicator = () => {
      const result = selectedItem.value
      const { width } = result ? result.getBoundingClientRect() : { width: 0 }
      const { left: containerLeft } = container.value ? container.value.getBoundingClientRect() : { left: 0 }
      const { left: resultLeft } = result ? result.getBoundingClientRect() : { left: 0 }
      const left = resultLeft - containerLeft
      if (indicator.value) {
        indicator.value.style.left = left + 'px'
        indicator.value.style.width = width + 'px'
      }
    }

    onMounted(() => {
      watchEffect(() => {
        setIndicator()
      },{
        flush: 'post'
      })
      setTimeout(() => {
        if (indicator.value) {
          indicator.value.style.transition = 'all 250ms'
        }
      }, 0)
    })

    return {
      defaults,
      titles,
      select,
      current,
      selectedItem,
      indicator,
      container
    }
  }
})
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.cheese-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 0;
      //transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
