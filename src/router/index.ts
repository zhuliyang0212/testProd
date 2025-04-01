import { createRouter, createWebHistory } from 'vue-router'
import { GET_TOKEN } from '@/utils/token'

import { constantRoutes } from './routes'

const router = createRouter({
  routes: constantRoutes,
  history: createWebHistory(),
  // 滚动
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

router.beforeEach((to, from, next) => {
  if (GET_TOKEN() && to.path === '/login') {
    next('/home')
  } else if (!GET_TOKEN() && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
