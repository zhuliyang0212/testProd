/// <reference types="vite/client" />
declare module 'virtual:svg-icons-register' {
  export default any
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
