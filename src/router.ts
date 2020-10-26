import { createRouter, createWebHashHistory } from "vue-router";
import { h } from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo/ButtonDemo.vue'
import TabsDemo from './components/TabDemo/TabsDemo.vue'
import DialogDemo from './components/DialogDemo/DialogDemo.vue'
import Markdown from "./components/Markdown.vue";
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';

const markdownComponent = (content: string, key: string) =>  h(Markdown, { content , key })

const history = createWebHashHistory()
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
          redirect: '/doc/intro'
        },
        {
          path: 'intro',
          component: markdownComponent(intro, 'intro')
        },
        {
          path: 'get-started',
          component: markdownComponent(getStarted, 'getStarted')
        },
        {
          path: 'install',
          component: markdownComponent(install, 'install')
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

