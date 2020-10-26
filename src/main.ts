import './index.scss'
import './lib/cheese.scss'
import 'cheese-ui-vue/dist/lib/cheese.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router"
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')
