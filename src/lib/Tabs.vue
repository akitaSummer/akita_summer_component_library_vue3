<template>
<div class="cheese-tabs">
  <div class="cheese-tabs-nav">
    <div class="cheese-tabs-nav-item" @click="select(t)" :class="{selected: t === selected}" v-for="(t, i) in titles" :key="Date.now() + i">{{t}}</div>
  </div>
  <div class="cheese-tabs-content">
    <component class="cheese-tabs-content-item" :is="current"></component>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, computed, toRefs, Slot} from 'vue'
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
    const { selected } = toRefs(props)
    const select = (title: string) => {
      emit('update:selected', title)
    }
    onMounted(() => {
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
    })
    const current = computed(() => {
      const result = defaults?.filter((tag) => {
        return tag.props?.title === props.selected
      })[0]?.children
      if (result && typeof result !== 'string' && !Array.isArray(result)) {
      }
    })
    return {
      defaults,
      titles,
      select,
      current
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
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
