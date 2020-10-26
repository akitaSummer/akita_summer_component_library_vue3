<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "Markdown",
  props: {
    content: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
