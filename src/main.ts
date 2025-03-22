import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import { createPinia } from 'pinia'

import 'element-plus/dist/index.css'
import App from './App.vue'
// svg插件配置代码
import 'virtual:svg-icons-register'

const app = createApp(App)

// 批量注册全局组件
import globalComponents from '@/components/index'
app.use(globalComponents)

app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
