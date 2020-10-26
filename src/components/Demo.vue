<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideCode">隐藏代码</Button>
      <Button v-else @click="showCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, ref, Component, PropType, computed} from 'vue'
import Button from "../lib/Button.vue";
import 'prismjs';
import 'prismjs/themes/prism.css'

type ComponentType = { __sourceCode: string } & Component

export default defineComponent({
  name: "Demo",
  props: {
    component: {
      type: Object as PropType<ComponentType>,
      required: true
    }
  },
  components: {
    Button
  },
  setup(props) {
    const { component } = toRefs(props)
    const Prism = window.Prism
    const html = computed(() => {
      return Prism.highlight(component.value.__sourceCode, Prism.languages.html, 'html')
    })
    const codeVisible = ref(true)
    const showCode = () => codeVisible.value = true
    const hideCode = () => codeVisible.value = false
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode
    }
  }
})
</script>

<style lang="scss" scoped>
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
