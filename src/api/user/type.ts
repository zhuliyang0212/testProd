export interface LoginForm {
  username: string
  password: string
}

interface DataType {
  token?: string
  message?: string
}

export interface LoginResponse {
  code: number
  data: DataType
}

// 服务器返回用户信息类型
interface User {
  userId: number
  username: string
  avator: string
  password: string
  desc: string
  roles: Array<string>
  buttons: Array<string>
  routes: Array<string>
  token: string
}
export interface UserResponseData {
  code: number
  data: User
}
