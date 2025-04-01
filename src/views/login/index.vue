<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="formRef" class="login-form">
      <h1>欢迎登录</h1>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon="User"
          size="large"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon="Lock"
          size="large"
          type="password"
          show-password
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="handlerLogin(formRef)"
          :loading="loading"
          type="primary"
          size="large"
          class="login-btn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { LoginForm } from '@/api/user/type'
import { getTimePeriod } from '@/utils/time'
import { useUserStore } from '@/store/modules/user'
import type { FormInstance } from 'element-plus'
import { ElNotification } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()

let loginForm = reactive<LoginForm>({
  username: '',
  password: '',
})
let loading = ref(false)

// 设置表单校验规则
let formRef = ref<FormInstance>()
// interface Rules {
//   username: { required: boolean; message: string; trigger: string }[]
//   password: { required: boolean; message: string; trigger: string }[]
// }
let rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur', min: 6 },
  ],
})

const handlerLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  loading.value = true
  try {
    await formEl.validate()
    await userStore.userLogin(loginForm)
    router.push('/home')
    ElNotification({
      type: 'success',
      title: `${getTimePeriod()}好！`,
      message: '欢迎回来！',
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/login_bg.jpg') no-repeat left top;
  background-size: 100% 100%;
  .login-form {
    width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(149, 184, 224);
    padding: 30px 40px;
    border-radius: 20px;
    box-shadow: #333 10px 10px 50px;
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
