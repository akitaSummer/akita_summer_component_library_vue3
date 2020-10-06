<template>
  <router-view/>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import { router } from './router'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500)
    provide('menuVisible', menuVisible)
    router.afterEach(() => {
      menuVisible.value = width > 500
    })
  }
}
</script>
