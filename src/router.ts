import { createRouter, createWebHistory } from "vue-router";
import { h } from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Markdown from "./components/Markdown.vue";

const markdownComponent = (filename: string) => h(Markdown, { path: `../markdown/${filename}.md` , key: filename })

const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          component: DocDemo
        },
        {
          path: 'intro',
          component: markdownComponent('intro')
        },
        {
          path: 'get-started',
          component: markdownComponent('get-started')
        },
        {
          path: 'install',
          component: markdownComponent('install')
        },
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'dialog',
          component: DialogDemo
        },
        {
          path: 'tabs',
          component: TabsDemo
        }
      ]
    }
  ]
})

