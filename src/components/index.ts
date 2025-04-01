import type { App, Component } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import SvgIcon from './SvgIcon.vue'

const allCom: { [key: string]: Component } = {
  SvgIcon,
}

export default {
  install(app: App) {
    for (let k in allCom) {
      app.component(k, allCom[k])
    }
    // 注册icons
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
