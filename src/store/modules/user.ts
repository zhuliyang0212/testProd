import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { LoginForm } from '@/api/user/type'
import type { userState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

export let useUserStore = defineStore('User', {
  state: (): userState => ({
    token: GET_TOKEN(),
  }),
  actions: {
    async userLogin(form: LoginForm) {
      let result = await reqLogin(form)

      if (result.code === 200) {
        // 持久化存储token
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(result.data)
      }
    },
  },
  getters: {},
})
